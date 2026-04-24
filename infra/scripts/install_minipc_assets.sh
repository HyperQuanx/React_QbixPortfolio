#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT=${REPO_ROOT:-$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)}
APP_HOME=${APP_HOME:-/opt/portfolio}
ENV_HOME=${ENV_HOME:-/etc/portfolio}
CADDY_INCLUDE_DIR=${CADDY_INCLUDE_DIR:-/etc/caddy/conf.d}

if ! id -u portfolio >/dev/null 2>&1; then
  sudo useradd --system --home "${APP_HOME}" --shell /usr/sbin/nologin portfolio
fi

sudo install -d -o portfolio -g portfolio -m 0755 "${APP_HOME}" "${APP_HOME}/releases" "${APP_HOME}/run"
sudo install -d -m 0755 "${ENV_HOME}" "${CADDY_INCLUDE_DIR}"

sudo install -m 0644 "${REPO_ROOT}/infra/caddy/Caddyfile" /etc/caddy/Caddyfile
sudo install -m 0644 "${REPO_ROOT}/infra/caddy/portfolio-upstream.caddy" "${CADDY_INCLUDE_DIR}/portfolio-upstream.caddy"

sudo install -m 0644 "${REPO_ROOT}/infra/systemd/portfolio-blue.service" /etc/systemd/system/portfolio-blue.service
sudo install -m 0644 "${REPO_ROOT}/infra/systemd/portfolio-green.service" /etc/systemd/system/portfolio-green.service

if [[ ! -f "${ENV_HOME}/portfolio-common.env" ]]; then
  sudo install -m 0640 "${REPO_ROOT}/server_springBoot/portfolio/.env.example" "${ENV_HOME}/portfolio-common.env"
fi

if [[ ! -f "${ENV_HOME}/portfolio-blue.env" ]]; then
  printf 'SERVER_PORT=8081\n' | sudo tee "${ENV_HOME}/portfolio-blue.env" >/dev/null
fi

if [[ ! -f "${ENV_HOME}/portfolio-green.env" ]]; then
  printf 'SERVER_PORT=8082\n' | sudo tee "${ENV_HOME}/portfolio-green.env" >/dev/null
fi

sudo chown root:portfolio "${ENV_HOME}"/portfolio-*.env
sudo chmod 0640 "${ENV_HOME}"/portfolio-*.env

sudo systemctl daemon-reload
sudo systemctl enable caddy mariadb portfolio-blue.service portfolio-green.service
sudo systemctl reload caddy || sudo systemctl restart caddy

cat <<EOF
MiniPC assets installed.
- Update ${ENV_HOME}/portfolio-common.env with real secrets.
- Keep ${ENV_HOME}/portfolio-blue.env and ${ENV_HOME}/portfolio-green.env as slot-specific overrides.
- Verify Caddy and MariaDB are installed before the first deploy.
EOF
