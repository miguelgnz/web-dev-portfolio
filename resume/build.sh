#!/usr/bin/env bash
# Renders resume/cv.html to a PDF with headless Chrome.
# Usage: resume/build.sh [output.pdf]   (default: public/resume.pdf)
set -euo pipefail

cd "$(dirname "$0")/.."
out="${1:-public/resume.pdf}"
chrome="${CHROME_BIN:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

"$chrome" \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --virtual-time-budget=5000 \
  --print-to-pdf="$out" \
  "file://$PWD/resume/cv.html" 2>/dev/null

echo "Wrote $out"
