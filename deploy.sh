#!/usr/bin/env bash
set -e

source .env.deploy

echo "Building project..."
npm run build

echo "Deploying dist/ to FTP..."
echo "FTP host: $FTP_HOST"
echo "FTP user: $FTP_USER"
echo "FTP dir: $FTP_DIR"

lftp -u "$FTP_USER","$FTP_PASS" "$FTP_HOST" <<EOF
set ftp:ssl-allow no
set ftp:passive-mode yes

mirror -R --verbose \
  --exclude-glob ".ftpquota" \
  --exclude-glob ".well-known/**" \
  --exclude-glob "cgi-bin/**" \
  ./dist/ "$FTP_DIR"

bye
EOF

echo "Deploy completed."