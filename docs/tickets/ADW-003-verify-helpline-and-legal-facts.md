---
id: ADW-003
title: Verify helpline numbers & legal specifics before public launch
status: ready
model: human
agent: human
persona:
depends_on: [ADW-002]
epic: ADW-E01
created: 2026-07-20
---

## Objective

Confirm the helpline/contact numbers and any legal-penalty specifics on the live site are
accurate before the site is publicly launched or promoted.

## Context (read these first)

- `site/help.html` — contains helpline info marked "pending verification".
- `site/law.html` — contains legal-status info kept deliberately qualitative to avoid
  unverified penalty specifics; confirm nothing there needs correction either.
- `docs/prd/marijuana-awareness-site.md` §7 — why this matters: a wrong crisis-helpline
  number is actively harmful, not just an inaccuracy.

## Scope — do this

- Verify the national/Karnataka drug helpline number(s) currently on `site/help.html` against
  an authoritative current source (e.g. Ministry of Social Justice & Empowerment, NIMHANS
  Bangalore's own published contact info).
- Confirm NIMHANS Bangalore's de-addiction service is still the right local reference, and
  update its contact details if incorrect.
- Spot-check `site/law.html` for anything that reads as a specific legal claim rather than
  general information.
- Remove the "pending verification" badges once each item is confirmed (or correct + then
  remove).

## Out of scope

- Rewriting the site's design or other content — this ticket is fact-verification only.

## Acceptance criteria (testable)

- [ ] Helpline number(s) on `site/help.html` confirmed accurate as of launch date, or
      corrected.
- [ ] NIMHANS Bangalore contact info confirmed accurate, or corrected.
- [ ] `site/law.html` reviewed for any overly-specific unverified legal claims.
- [ ] "Pending verification" badges removed once confirmed.

## Notes / decisions

This ticket is the launch gate for the epic (ADW-E01) — do not promote the site publicly
until this is done.

## Outcome (filled after work)

- **Result:**
- **Status:**
- **Files changed:**
- **Tests:**
- **Follow-ups:**
- **Confidence:**
- **Reviewed by orchestrator:**
