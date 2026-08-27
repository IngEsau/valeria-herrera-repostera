#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env.deploy"
DEFAULT_SITE_URL="https://valeriaherrera.buxdev.com"

cd "$SCRIPT_DIR"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Missing deployment configuration: $ENV_FILE" >&2
  exit 1
fi

while IFS= read -r line || [[ -n "$line" ]]; do
  line="${line%$'\r'}"

  if [[ -z "$line" || "$line" == \#* || "$line" != *=* ]]; then
    continue
  fi

  key="${line%%=*}"
  value="${line#*=}"

  case "$key" in
    FTP_HOST|FTP_USER|FTP_PASS|FTP_DIR|SITE_URL)
      if [[ ${#value} -ge 2 ]]; then
        first_character="${value:0:1}"
        last_character="${value: -1}"

        if [[
          ("$first_character" == '"' && "$last_character" == '"') ||
          ("$first_character" == "'" && "$last_character" == "'")
        ]]; then
          value="${value:1:${#value}-2}"
        fi
      fi

      printf -v "$key" '%s' "$value"
      ;;
  esac
done < "$ENV_FILE"

SITE_URL="${SITE_URL:-$DEFAULT_SITE_URL}"
SITE_URL="${SITE_URL%/}"

for variable in FTP_HOST FTP_USER FTP_PASS FTP_DIR; do
  if [[ -z "${!variable:-}" ]]; then
    echo "Missing required deployment variable: $variable" >&2
    exit 1
  fi
done

for command in npm lftp curl; do
  if ! command -v "$command" >/dev/null 2>&1; then
    echo "Missing required deployment command: $command" >&2
    exit 1
  fi
done

echo "Building project..."
npm run build

for seo_file in index.html robots.txt sitemap.xml; do
  if [[ ! -s "$SCRIPT_DIR/dist/$seo_file" ]]; then
    echo "Missing required SEO output: dist/$seo_file" >&2
    exit 1
  fi
done

echo "SEO output verified before upload."

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

echo "Verifying public SEO resources..."

REMOTE_CHECK_DIR="$(mktemp -d)"
trap 'rm -rf "$REMOTE_CHECK_DIR"' EXIT

fetch_remote_file() {
  local url="$1"
  local output="$2"
  local attempt

  for attempt in 1 2 3 4 5; do
    if curl --fail --location --silent --show-error --max-time 20 \
      "$url" --output "$output"; then
      return 0
    fi

    if [[ "$attempt" -lt 5 ]]; then
      sleep 2
    fi
  done

  echo "Could not verify deployed resource: $url" >&2
  return 1
}

fetch_remote_file "$SITE_URL/" "$REMOTE_CHECK_DIR/index.html"
fetch_remote_file "$SITE_URL/robots.txt" "$REMOTE_CHECK_DIR/robots.txt"
fetch_remote_file "$SITE_URL/sitemap.xml" "$REMOTE_CHECK_DIR/sitemap.xml"

verify_remote_content() {
  local file="$1"
  local expected="$2"
  local label="$3"

  if ! grep -Fq "$expected" "$file"; then
    echo "Remote SEO verification failed: $label" >&2
    exit 1
  fi
}

verify_remote_content "$REMOTE_CHECK_DIR/index.html" '<main' "prerendered main content"
verify_remote_content "$REMOTE_CHECK_DIR/index.html" '<h1' "homepage H1"
verify_remote_content \
  "$REMOTE_CHECK_DIR/index.html" \
  "<link rel=\"canonical\" href=\"$SITE_URL/\"" \
  "homepage canonical"
verify_remote_content \
  "$REMOTE_CHECK_DIR/robots.txt" \
  "Sitemap: $SITE_URL/sitemap.xml" \
  "robots.txt sitemap reference"
verify_remote_content \
  "$REMOTE_CHECK_DIR/sitemap.xml" \
  "<loc>$SITE_URL/</loc>" \
  "canonical URL in sitemap.xml"

echo "Deploy completed and public SEO resources verified."
