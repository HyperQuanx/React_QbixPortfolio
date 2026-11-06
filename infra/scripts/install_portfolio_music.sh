#!/usr/bin/env bash
set -euo pipefail

if [[ ${EUID} -ne 0 ]]; then
  echo "Run this script with sudo; it installs the music file and reloads Caddy." >&2
  exit 1
fi

source_file=${1:?Usage: sudo bash install_portfolio_music.sh /absolute/path/cyworld_bgm100.m4a}
repo_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)
[[ -f "$source_file" ]] || { echo "Audio file not found." >&2; exit 1; }
[[ "$source_file" == *.m4a ]] || { echo "Expected the AAC/M4A file; MP3 is no longer used by new players." >&2; exit 1; }

# Keep the production configuration (including unrelated sites and API routes).
backup_dir=$(mktemp -d /etc/caddy/portfolio-music-backup.XXXXXX)
cp -p /etc/caddy/Caddyfile "$backup_dir/Caddyfile"
snippet=/etc/caddy/conf.d/portfolio-music.caddy
if [[ -f "$snippet" ]]; then cp -p "$snippet" "$backup_dir/portfolio-music.caddy"; fi
rollback() {
  cp -p "$backup_dir/Caddyfile" /etc/caddy/Caddyfile
  if [[ -f "$backup_dir/portfolio-music.caddy" ]]; then
    cp -p "$backup_dir/portfolio-music.caddy" "$snippet"
  else
    rm -f "$snippet"
  fi
  echo "Configuration restored. Backup: $backup_dir" >&2
}
trap rollback ERR

install -d -m 0755 /srv/portfolio-media /etc/caddy/conf.d
install -m 0644 "$source_file" /srv/portfolio-media/cyworld_bgm100.m4a.new
mv /srv/portfolio-media/cyworld_bgm100.m4a.new /srv/portfolio-media/cyworld_bgm100.m4a
install -m 0644 "$repo_root/infra/caddy/portfolio-music.caddy" "$snippet"
python3 - <<'PY'
from pathlib import Path
p = Path('/etc/caddy/Caddyfile')
s = p.read_text()
new = 'import /etc/caddy/conf.d/portfolio-music.caddy'
anchor = 'import /etc/caddy/conf.d/portfolio-upstream.caddy'
if new not in s:
    if s.count(anchor) != 1:
        raise SystemExit('Expected one portfolio upstream import; configuration left unchanged.')
    s = s.replace(anchor, new + '\n        ' + anchor)
    p.write_text(s)
PY
caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile
systemctl reload caddy
trap - ERR
printf 'Music installed. Configuration backup: %s\n' "$backup_dir"
printf 'Playback URL: https://qbix-portfolio.shop/media/cyworld_bgm100.m4a\n'
