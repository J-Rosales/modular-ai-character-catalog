# Deployment Automation Report (Local Workflow)

## Objective
Provide a lightweight, static-safe deployment workflow that:
- validates data + UI integrity,
- mirrors `src/` into `public/`, and
- uploads `public/` to Neocities.

## Local workflow (parent folder)
### 1) Sync generator output into src/data
```bash
./botparts-site/automation/pipelines/sync-data.sh
```

Underlying command (reference):
```bash
rsync -a --delete \
  botparts-generator/output/ \
  botparts-site/src/data/
```

### 2) Validate + mirror src → public
```bash
./botparts-site/automation/pipelines/build.sh
```

Underlying commands (reference):
```bash
cd botparts-site
python -m pytest tests/test_static_contract.py
rsync -a --delete src/ public/
```

### 3) Deploy to Neocities
```bash
./botparts-site/automation/pipelines/release.sh
```

Underlying command (reference):
```bash
neocities push public
```

## Generator workflow (reported only; outside repo scope)
Data is generated in `botparts-generator` and copied into `botparts-site/src/data/`.
Document the generator commit SHA and export timestamp for traceability.
