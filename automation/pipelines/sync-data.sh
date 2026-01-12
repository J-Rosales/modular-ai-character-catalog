#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)
PARENT_DIR=$(cd "${ROOT_DIR}/.." && pwd)

SOURCE_DIR="${PARENT_DIR}/botparts-generator/output/"
DEST_DIR="${ROOT_DIR}/src/data/"

if [[ ! -d "${SOURCE_DIR}" ]]; then
  echo "Missing generator output directory: ${SOURCE_DIR}" >&2
  echo "Run the generator export before syncing data." >&2
  exit 1
fi

rsync -a --delete "${SOURCE_DIR}" "${DEST_DIR}"
