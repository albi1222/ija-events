#!/usr/bin/env bash
# Vercel build: materialize the exact Git commit into /public.
# Keep the historical asset manifest while including all current front-end modules.
set -euo pipefail
REF="${VERCEL_GIT_COMMIT_SHA:-${IJA_REF:-main}}"
BASE="https://raw.githubusercontent.com/albi1222/ija-events/${REF}"
mkdir -p public/assets
for f in index.html app.js editorial.css editorial.js panorama.js; do
  echo "Fetching ${f} from ${REF}"
  curl -fLsS --retry 3 "${BASE}/${f}" -o "public/${f}"
done
for f in $(curl -fLsS --retry 3 "${BASE}/assets/manifest.txt"); do
  curl -fLsS --retry 3 "${BASE}/assets/${f}" -o "public/assets/${f}"
done
test -s public/index.html
test -s public/editorial.css
test -s public/editorial.js
test -s public/panorama.js
echo "Build assets verified"
ls -lah public public/assets
