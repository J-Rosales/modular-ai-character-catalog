# AGENTS.md — Neocities Bot Catalogue (SillyTavern) Codex Guide

Date: 2025-12-30

This repository builds a **static Neocities website** that catalogs SillyTavern character bots and lets users:
- browse a modern catalogue (landing + featured grid)
- filter by **freeform tags** with per-tag **OFF / INCLUDE / EXCLUDE**
- open a character view
- toggle **content modules** (variants) and choose **model transforms** (schema-like vs natural language, etc.)
- download assembled outputs (JSON, text packs, and optionally PNG), including **Download Everything** bundles

## Non-negotiables (decided)
- Hosting target: **Neocities** (static files only).
- Architecture: **client-side** HTML/CSS/JS; data-driven from JSON files.
- Tags: **freeform**; filtering is per-tag **OFF/INCLUDE/EXCLUDE**.
- Provenance: every character has an **original source link**; if redistribution “as-is” is not allowed, do **not** host a backup.
- Outputs: support **(a)** ST character JSON, **(b)** text prompt pack(s), **(c)** PNG card embedding (may be phased), **(d)** “download everything” per character, and **(e)** “download everything” site-wide (with defined defaults).

## Repository structure (assumed)
- Enforce `automation/codex/directory_schema.md`

## How work is divided
Codex should work from the directive files below. Each directive states:
- what is already decided
- what must be clarified before implementation
- tasks, acceptance criteria, and integration points

### Directives
1. **View + Navigation + Routing**
   - File: `automation/codex/DIRECTIVE_01_VIEW_NAV.md`

2. **Catalogue + Tag Filtering + Search**
   - File: `automation/codex/DIRECTIVE_02_CATALOG_FILTERS.md`

3. **Character Page UI + Variant Toggles**
   - File: `automation/codex/DIRECTIVE_03_CHARACTER_UI.md`

4. **Text/JSON Generation + Transform System**
   - File: `automation/codex/DIRECTIVE_04_GENERATION_TRANSFORMS.md`

5. **Download System (Blob/ZIP) + “Download Everything”**
   - File: `automation/codex/DIRECTIVE_05_DOWNLOADS_BUNDLES.md`

6. **Data Schema + Attribution/License Policy**
   - File: `automation/codex/DIRECTIVE_06_DATA_SCHEMA_ATTRIBUTION.md`

### Work order (preferred)
1) DIRECTIVE_06 (schema + policy) → 2) DIRECTIVE_01 (routes/views) → 3) DIRECTIVE_02 (catalog filters) →
4) DIRECTIVE_03 (character UI) → 5) DIRECTIVE_04 (generation/transforms) → 6) DIRECTIVE_05 (downloads/bundles)

Rationale: schema and policy drive everything; downloads depend on stable generation outputs.

## Coding standards (for this repo)
- Vanilla JS first (no framework). Small libraries allowed **only** for clear needs (e.g., ZIP).
- Avoid build tooling unless required; keep deploy simple for Neocities.
- Keep UI logic in modules (`/src/js/*`), keep content in `/src/data/*`.
- Accessibility: toggles are keyboard operable; visible focus; labels linked; ARIA where appropriate.

## Implementation clarifications (resolved)
- Output formats: target SillyTavern `chara_card_v2` JSON; PNG metadata carries the same JSON chunk used for direct SillyTavern import.
- “Download everything” defaults: site-wide button downloads the default (original settings) of every character in a single ZIP, one JSON + one PNG per character; module defaults follow `DIRECTIVE_06`.
- Variant composition rules: apply variants in the fixed order defined by `automation/schemas/character_card_spec_v2.md`; fields remain consistent, values vary by variant.
- Transform contract: transforms are design-time variants (no LLM or dynamic JSON edits at download time); runtime only concatenation/composition/export; declaration is hybrid.
- Licensing metadata: choose minimum required fields using best-practice guidance; wording for “no redistribution” should follow best practices and indicate source-only linking when redistribution is disallowed.
- Scale expectations: ~100 characters max (start with ~12); keep performance fast and expose tuning as editable variables.

## Deliverables Codex should produce early
- Minimal runnable site shell in `/src/` with:
  - landing page rendering featured cards from `/src/data/index.json`
  - character view loading `/src/data/characters/<slug>.json`
  - tag filter UI skeleton
- Schema drafts in `/automation/schemas/`
- Sample data in `/automation/samples/`
