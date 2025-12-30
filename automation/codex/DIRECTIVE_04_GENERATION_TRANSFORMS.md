# DIRECTIVE_04_GENERATION_TRANSFORMS — Canonical Model, Assembly, and Transform Pipeline

Date: 2025-12-30

## Goal
Define and implement the generation pipeline:
- canonical character model in JSON
- module assembly into a “compiled character” intermediate representation
- transform modes that change formatting and/or content
- emitters for output types (JSON, text packs, PNG placeholder)

## Already decided
- Outputs include JSON + text packs + PNG (PNG may be phased).
- Transforms can affect both content and formatting (“both” confirmed).
- Variant composition rules will be designed later, but pipeline should be extensible.

## Implementation clarifications
1. Canonical representation:
   - Mandatory fields are those specified by `automation/schemas/character_card_spec_v2.md`.
2. Transform contract:
   - Transforms are concatenation of statically uploaded elements; toggles select which elements to concatenate and where to inject.
3. Text pack targets:
   - Produce a single JSON in spec_v2 format with fields swapped/concatenated per user choices.
4. PNG:
   - PNGs are static uploads; metadata contains the same JSON chunk used for SillyTavern imports.
   - Users can right-click save to preserve embedded metadata.

## Tasks
- Define an intermediate “CompiledCharacter” object.
- Implement module application:
  - base + enabled modules merged with predictable ordering.
- Implement transforms:
  - at least two modes: `natural` and `schema` (names may change).
- Implement emitters:
  - `emitSillyTavernJson(compiled, transform)`
  - `emitTextPacks(compiled, transform)`
  - `emitPngPlaceholder(...)` (stub until spec confirmed)

## Acceptance criteria
- Deterministic output given same inputs.
- No DOM dependency inside generation functions (pure functions).
- Unit-testable functions (even if tests are deferred).

## Integration points
- Inputs: selection state from DIRECTIVE_03.
- Outputs: file generation for DIRECTIVE_05.
- Schemas: DIRECTIVE_06.
