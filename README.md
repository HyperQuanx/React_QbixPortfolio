# React_QbixPortfolio

## Runtime Overview
- Frontend: Vite + React, still served from the existing frontend host
- Backend: Spring Boot on a miniPC behind Caddy
- Database: MariaDB on the same miniPC, bound to localhost only
- Deploy: GitHub Actions SSH -> miniPC -> blue/green systemd services

## Environment Files
- Frontend example: `client_react/my-project/.env.example`
- Backend example: `server_springBoot/portfolio/.env.example`
- Production backend secrets must live outside the repository, for example `/etc/portfolio/portfolio-common.env`

## MiniPC Bootstrap
1. Install `caddy`, `mariadb`, `openjdk-17-jre`, `git`, `curl`.
2. Clone this repository to `~/React_QbixPortfolio`.
3. Run `bash infra/scripts/install_minipc_assets.sh`.
4. Replace placeholder values in `/etc/portfolio/portfolio-common.env`.
5. Verify router port forwarding for `80`, `443`, and `22`.
6. Point `qbix-portfolio.shop` A record to the miniPC public IP.
7. Ensure the SSH user used by GitHub Actions has passwordless `sudo` for service install/reload.

## Domain And HTTPS
- Configure DNS:
  - `A qbix-portfolio.shop -> <public IP>`
  - `A www.qbix-portfolio.shop -> <public IP>`
- Router port forwarding must expose both `80 -> 192.168.0.4:80` and `443 -> 192.168.0.4:443`.
- The bundled Caddy config redirects `www.qbix-portfolio.shop` to `qbix-portfolio.shop`.
- Caddy can only issue TLS certificates after Let's Encrypt can reach the miniPC from the public internet on both 80 and 443.
- Local success on `curl http://127.0.0.1:8081/healthz` does not prove external reachability; ACME still fails if the router or ISP blocks inbound traffic.

## HTTPS Troubleshooting
- Check local listeners:
  - `ss -ltnp | rg ':80|:443|:8081|:8082'`
- Check local reverse proxy:
  - `curl -i http://127.0.0.1:8081/healthz`
- Check Caddy logs:
  - `journalctl -u caddy --no-pager -n 120`
- If Caddy logs show `Timeout during connect` on `http-01`, inbound port `80` is not reaching the server.
- If Caddy logs show `Connection refused` on `tls-alpn-01`, inbound port `443` is not reaching the server.
- After fixing port forwarding or firewall rules, run:
  - `sudo systemctl reload caddy`

## Deploy Flow
1. GitHub Actions builds the backend jar.
2. The workflow SSHes into the miniPC.
3. `infra/scripts/deploy_blue_green.sh` builds the new jar on the miniPC.
4. The script starts the inactive slot on `8081` or `8082`.
5. When `GET /healthz` succeeds, Caddy switches upstream and reloads.
6. The old slot is stopped after the new slot becomes active.

## Security Notes
- Do not commit `.env` files or production secrets.
- Rotate any passwords that were previously shared in plaintext.
- Keep MariaDB on `127.0.0.1` and do not expose port `3306`.
- Use SSH keys only and disable password login for the miniPC.
