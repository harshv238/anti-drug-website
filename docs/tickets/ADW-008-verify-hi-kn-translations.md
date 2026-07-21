---
id: ADW-008
title: Native-speaker review of Hindi and Kannada translations before public launch
status: ready
model: human
agent: human
persona:
depends_on: [ADW-007]
epic: ADW-E01
created: 2026-07-21
---

## Objective

Confirm the Hindi (`site/hi/`) and Kannada (`site/kn/`) translations read naturally and
accurately to a fluent native speaker before the localized site is publicly launched or
promoted — the same "don't ship unverified specifics as if confirmed" principle as ADW-003,
applied to translation quality rather than helpline numbers.

## Context (read these first)

- `docs/tickets/ADW-007-localization-hi-kn.md` — how the translations were produced (two
  parallel AI subagents, one per language, given a fixed shared-chrome dictionary plus
  freedom to translate page-unique content).
- `docs/prd/marijuana-awareness-site.md` §7 — the project's existing stance that unverified
  specifics (there: helpline numbers) must not ship as if confirmed. This ticket extends
  that principle: AI-produced translation of health/legal content is not launch-ready
  without a fluent human review pass.

## Scope — do this

- Read through all 8 pages in `site/hi/` and confirm: natural phrasing, no mistranslation of
  health claims (Effects page), no softened or dropped legal caveats (Law page — "not legal
  advice"), no softened or dropped verification caveat (Help page — helpline "pending
  verification"), and that the "stakes + aspiration" tone on `why-stop.html` reads as
  intended (not preachy, not commanding) in Hindi.
- Do the same for all 8 pages in `site/kn/`.
- Fix any mistranslation, awkward phrasing, or dropped nuance directly in the HTML files —
  structure/classes must stay unchanged, only text content should be edited.

## Out of scope

- Design/layout changes — this ticket is translation-accuracy only.
- Re-verifying the English content — that's already covered by prior tickets.

## Acceptance criteria (testable)

- [ ] All 8 Hindi pages read as natural, accurate Hindi to a fluent reviewer.
- [ ] All 8 Kannada pages read as natural, accurate Kannada to a fluent reviewer.
- [ ] Every safety-critical caveat (verification pending, not legal advice) confirmed intact
      and accurately translated in both languages.
- [ ] Any corrections made are recorded in this ticket's Outcome section.

## Notes / decisions

This ticket, along with ADW-003, is a launch gate for the epic (ADW-E01) — do not promote
the localized site publicly until both are done.

## Outcome (filled after work)

- **Result:**
- **Status:**
- **Files changed:**
- **Tests:**
- **Follow-ups:**
- **Confidence:**
- **Reviewed by orchestrator:**
