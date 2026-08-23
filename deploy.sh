#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env.deploy"

cd "$SCRIPT_DIR"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Missing deployment configuration: $ENV_FILE" >&2
  exit 1
fi

source "$ENV_FILE"

for variable in FTP_HOST FTP_USER FTP_PASS FTP_DIR; do
  if [[ -z "${!variable:-}" ]]; then
    echo "Missing required deployment variable: $variable" >&2
    exit 1
  fi
done

echo "Building project..."
npm run build

echo "Deploying dist/ to FTP..."
echo "FTP host: $FTP_HOST"
echo "FTP user: $FTP_USER"
echo "FTP dir: $FTP_DIR"

lftp -u "$FTP_USER","$FTP_PASS" "$FTP_HOST" <<EOF
set cmd:fail-exit yes
set ftp:ssl-allow yes
set ftp:ssl-force yes
set ftp:ssl-protect-data yes
set ftp:passive-mode yes
set ssl:verify-certificate yes

mirror -R --verbose \
  --exclude-glob ".ftpquota" \
  --exclude-glob ".well-known/**" \
  --exclude-glob "cgi-bin/**" \
  ./dist/ "$FTP_DIR"

bye
EOF

echo "Deploy completed."
