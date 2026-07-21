---
id: ADW-002
title: Build the static marijuana awareness site (HTML/CSS/JS)
status: done
model: sonnet
agent: claude
persona: developer
depends_on: [ADW-001]
epic: ADW-E01
created: 2026-07-20
---

## Objective

Build a dependency-free static site under `site/` implementing the IA/content plan from
ADW-001: Home, Effects, Myths vs Facts, Law, Get Help, Get Involved — responsive, no external
dependencies, no build step.

## Context (read these first)

- `docs/prd/marijuana-awareness-site.md` — content plan and constraints.
- `docs/tickets/ADW-001-content-and-ia.md` — content decisions this ticket implements.

## Scope — do this

- `site/index.html`, `site/effects.html`, `site/myths-facts.html`, `site/law.html`,
  `site/help.html`, `site/get-involved.html`.
- `site/css/style.css` — shared responsive styling, mobile nav.
- `site/js/main.js` — mobile nav toggle, myth/fact flip-card interaction, active-nav
  highlighting.
- Mark the helpline numbers and any legal specifics with a visible "pending verification"
  note per the PRD's honesty-signal requirement.

## Out of scope

- Backend, pledge submission storage, analytics (PRD §5).
- Fact-checking helpline numbers against an authoritative source — that's ADW-003 (human).

## Acceptance criteria (testable)

- [x] All 6 pages exist under `site/`, share nav/footer, and cross-link without dead links.
- [x] Site has no external network dependencies (no CDN links, no external fonts/images) —
      works opened as `file://` or served locally with no network access.
- [x] Renders responsively (mobile + desktop) — verified in a local browser check.
- [x] Helpline/legal-specifics sections visibly flagged as pending human verification.
- [x] No fabricated Bangalore-specific statistics anywhere in the copy.

## Notes / decisions

Design: calming teal/navy palette (deliberately not scare-red), matches the fact-based tone
the owner chose.

## Outcome (filled after work)

- **Result:** 6-page static site built under `site/`, responsive, dependency-free.
- **Status:** pass
- **Files changed:** `site/*.html`, `site/css/style.css`, `site/js/main.js`
- **Tests:** manual local-server browser check (see session log)
- **Follow-ups:** ADW-003 (human verification of helpline/legal specifics before public launch)
- **Confidence:** medium — content is fact-based and dependency-free, but public launch should
  wait on ADW-003
- **Reviewed by orchestrator:** self (orchestrator built this directly; single bounded build
  task, no cold-spawn needed)
