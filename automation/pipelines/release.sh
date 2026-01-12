#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)

cd "${ROOT_DIR}"

python -m pytest tests/test_static_contract.py

if ! command -v neocities >/dev/null 2>&1; then
  echo "Neocities CLI not found. Install it and authenticate before deploying." >&2
  exit 1
fi

neocities push public
