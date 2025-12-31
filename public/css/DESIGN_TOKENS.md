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

## Color Tokens
Color tokens are the single control surface for palette changes across the Noir Fashion theme and site overrides.

**DO**
- Use `var(--color-*)` tokens for backgrounds, surfaces, text, borders, and accents.
- Prefer semantic roles (surface vs. text vs. accent) over numeric palettes.
- Document any one-off literal colors as intentional exceptions.

**DON’T**
- Introduce new hex/rgb colors in CSS without a documented exception.
- Add component- or page-specific color tokens.

**Approved color tokens**
- `--color-bg`: Global page background (deep black).
- `--color-surface`: Primary dark surface.
- `--color-surface-2`: Secondary surface used in layered panels/gradients.
- `--color-border`: Default light border on dark surfaces.
- `--color-text-primary`: Primary text color.
- `--color-text-secondary`: Secondary text color for body copy and labels.
- `--color-text-muted`: Muted text color for low-emphasis UI.
- `--color-accent`: Primary accent color.
- `--color-accent-strong`: Stronger accent for high-emphasis states.
- `--color-accent-muted`: Subtle accent wash for badges and chips.

**Exceptions rule**
- If a literal color is required (e.g., gradient stops unique to a hero), keep it local and document it as an intentional exception near the usage or in a task summary.
