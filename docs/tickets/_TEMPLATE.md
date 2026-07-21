---
id: ADW-NNN
title: <short imperative title>
status: backlog        # backlog | ready | in-progress | review | done | blocked
model: sonnet          # haiku | sonnet | opus | human
agent: general-purpose # explore | general-purpose | plan | claude | human
persona:               # persona to spawn (e.g. developer), or blank. Sets role +
                       # file scope + tools; runs at the `model` tier above.
depends_on: []         # e.g. [ADW-002, ADW-003]
epic:                  # parent epic id (e.g. ADW-E01), or leave blank if none
created: YYYY-MM-DD
---

## Objective

<One sentence: what "done" looks like.>

## Context (read these first)

- <link to docs/... the worker must read — e.g. `docs/00-START-HERE.md`>
- <key facts the worker needs, inline if short enough to state here>

<!-- Zero-prior-context rule: a worker executing this ticket must have
     EVERYTHING it needs from this file + the linked docs. If a worker
     would need to "just know" something, put it here. -->

## Scope — do this

- <concrete step or deliverable 1>
- <concrete step or deliverable 2>

## Out of scope

- <what NOT to touch — protects other work from over-reach>

## Acceptance criteria (testable)

- [ ] <objectively checkable criterion 1>
- [ ] <objectively checkable criterion 2>

<!-- Every criterion must be checkable by the orchestrator without
     judgment calls. "Looks good" is not a criterion. -->

## Notes / decisions

<constraints, voice reminders, gotchas, cross-references>

## Outcome (filled after work)

<!-- Outcome schema — fill all fields at sign-off. Keep entries terse.
     Status: pass = acceptance criteria met + suite green; fail = blocked/partial.
     Files changed: list key files, or a count when > 5.
     Tests: command-level counts, e.g. "pytest: 12 pass / node: 45 pass"; or "N/A".
     Confidence: high = tested + all ACs verified; medium = tested but gaps noted;
                 low = partial or untestable path.
-->
- **Result:** <one-line summary of what was built or fixed>
- **Status:** pass | fail
- **Files changed:** <list or count>
- **Tests:** <e.g. pytest: N pass / node: M pass>
- **Follow-ups:** <list, or none>
- **Confidence:** high | medium | low
- **Reviewed by orchestrator:**
