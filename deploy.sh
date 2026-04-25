#!/usr/bin/env bash
set -e

source .env.deploy

echo "Building project..."
npm run build

echo "Deploying dist/ to FTP..."

lftp -u "$FTP_USER","$FTP_PASS" "$FTP_HOST" <<EOF
set ftp:ssl-allow no
mirror -R --delete ./dist "$FTP_DIR"
bye
EOF

echo "Deploy completed."