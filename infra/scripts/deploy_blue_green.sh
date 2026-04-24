#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
DEFAULT_REPO_ROOT=$(cd "${SCRIPT_DIR}/../.." && pwd)

REPO_ROOT=${REPO_ROOT:-${DEFAULT_REPO_ROOT}}
BACKEND_DIR=${BACKEND_DIR:-"${REPO_ROOT}/server_springBoot/portfolio"}
APP_HOME=${APP_HOME:-/opt/portfolio}
STATE_DIR="${APP_HOME}/run"
RELEASES_DIR="${APP_HOME}/releases"
ACTIVE_SLOT_FILE="${STATE_DIR}/active-slot"
CADDY_UPSTREAM_FILE=${CADDY_UPSTREAM_FILE:-/etc/caddy/conf.d/portfolio-upstream.caddy}

configure_java() {
  local candidate=""
  local sudo_user_home=""

  if [[ -n "${JAVA_HOME:-}" && -x "${JAVA_HOME}/bin/javac" ]]; then
    export PATH="${JAVA_HOME}/bin:${PATH}"
    return 0
  fi

  if [[ -n "${SUDO_USER:-}" ]]; then
    sudo_user_home=$(getent passwd "${SUDO_USER}" | cut -d: -f6)
    if [[ -n "${sudo_user_home}" ]]; then
      candidate=$(find "${sudo_user_home}/.local/java" -maxdepth 1 -mindepth 1 -type d -name 'jdk-*' 2>/dev/null | sort | tail -n 1 || true)
      if [[ -n "${candidate}" && -x "${candidate}/bin/javac" ]]; then
        export JAVA_HOME="${candidate}"
        export PATH="${JAVA_HOME}/bin:${PATH}"
        return 0
      fi
    fi
  fi

  for candidate in \
    "${HOME}/.local/java/jdk-17.0.18+8" \
    "${HOME}/.local/java/jdk-17" \
    "/usr/lib/jvm/java-17-openjdk-amd64" \
    "/usr/lib/jvm/java-17-openjdk" \
    "/usr/lib/jvm/temurin-17-jdk-amd64"; do
    if [[ -x "${candidate}/bin/javac" ]]; then
      export JAVA_HOME="${candidate}"
      export PATH="${JAVA_HOME}/bin:${PATH}"
      return 0
    fi
  done

  echo "A JDK with javac is required. Install openjdk-17-jdk or set JAVA_HOME." >&2
  exit 1
}

configure_java

declare -A SLOT_PORTS=(
  [blue]=8081
  [green]=8082
)

if [[ -f "${ACTIVE_SLOT_FILE}" ]]; then
  ACTIVE_SLOT=$(<"${ACTIVE_SLOT_FILE}")
else
  ACTIVE_SLOT="green"
fi

if [[ "${ACTIVE_SLOT}" == "blue" ]]; then
  NEXT_SLOT="green"
else
  NEXT_SLOT="blue"
fi

NEXT_PORT=${SLOT_PORTS[${NEXT_SLOT}]}
RELEASE_ID=$(date +%Y%m%d%H%M%S)
RELEASE_DIR="${RELEASES_DIR}/${RELEASE_ID}"

cd "${BACKEND_DIR}"
chmod +x ./gradlew
./gradlew bootJar -x test --no-daemon

JAR_PATH=$(find build/libs -maxdepth 1 -type f -name '*.jar' ! -name '*plain.jar' | head -n 1)

if [[ -z "${JAR_PATH}" ]]; then
  echo "Built jar not found." >&2
  exit 1
fi

sudo install -d -o portfolio -g portfolio -m 0755 "${RELEASES_DIR}" "${STATE_DIR}" "${RELEASE_DIR}"
sudo install -o portfolio -g portfolio -m 0644 "${JAR_PATH}" "${RELEASE_DIR}/portfolio.jar"
sudo ln -sfn "${RELEASE_DIR}" "${APP_HOME}/current-${NEXT_SLOT}"

sudo systemctl restart "portfolio-${NEXT_SLOT}.service"

echo "Waiting for portfolio-${NEXT_SLOT}.service on port ${NEXT_PORT}..."

for attempt in $(seq 1 60); do
  if curl -fsS "http://127.0.0.1:${NEXT_PORT}/healthz" >/dev/null; then
    READY=1
    echo "Health check passed on attempt ${attempt}."
    break
  fi
  echo "Health check attempt ${attempt}/60 failed; retrying in 2s..."
  sleep 2
done

if [[ ${READY:-0} -ne 1 ]]; then
  echo "Health check failed on slot ${NEXT_SLOT}." >&2
  sudo journalctl -u "portfolio-${NEXT_SLOT}.service" -n 100 --no-pager || true
  exit 1
fi

TMP_FILE=$(mktemp)
printf 'reverse_proxy 127.0.0.1:%s\n' "${NEXT_PORT}" > "${TMP_FILE}"
sudo install -m 0644 "${TMP_FILE}" "${CADDY_UPSTREAM_FILE}"
rm -f "${TMP_FILE}"

sudo systemctl reload caddy
printf '%s\n' "${NEXT_SLOT}" | sudo tee "${ACTIVE_SLOT_FILE}" >/dev/null

if sudo systemctl is-active --quiet "portfolio-${ACTIVE_SLOT}.service"; then
  sudo systemctl stop "portfolio-${ACTIVE_SLOT}.service"
fi

echo "Deploy complete. Active slot: ${NEXT_SLOT} (${NEXT_PORT})."
