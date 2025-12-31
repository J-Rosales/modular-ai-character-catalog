# Design Tokens (public/css)

## Purpose
Design tokens are the single control surface for site-wide visual tuning.

## Do / Don’t

**DO**
- Use tokens for shared scales and stable knobs.
- Prefer token edits for **VISUAL TASK** requests.

**DON’T**
- Put layout logic in tokens.
- Add component/page-specific tokens.
- Put one-off hacks in tokens.
- Encode hover/active behavior as tokens.

## Workflow rule (critical)
- **VISUAL TASKs must default to token edits first.**
- If a VISUAL TASK requires component CSS changes, it must:
  - justify why tokens are insufficient
  - avoid HTML/JS edits

## Naming convention
- `--space-*`
- `--font-*`
- `--radius-*`
- `--card-*`

## Scope
Tokens apply only to production files under `public/`.
