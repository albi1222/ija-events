#!/usr/bin/env bash
# Vercel build: copies the site from the GitHub repo into ./public
set -euo pipefail
REF="${IJA_REF:-main}"
BASE="https://raw.githubusercontent.com/albi1222/ija-events/${REF}"
mkdir -p public/assets
curl -fsSL "$BASE/index.html" -o public/index.html
for f in $(curl -fsSL "$BASE/assets/manifest.txt"); do
  curl -fsSL "$BASE/assets/$f" -o "public/assets/$f"
done
ls -la public public/assets
