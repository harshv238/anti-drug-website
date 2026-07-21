---
id: ADW-E01
title: Marijuana/Weed Awareness Website for Bangalore
kind: epic
status: in-progress
owner: orchestrator
created: 2026-07-20
---

## Objective

Ship a static, dependency-free public awareness website (weed/marijuana only) for a
Bangalore social campaign — fact-based, non-judgmental, covering effects, myths vs facts,
Indian/Karnataka law, and where to get help.

## Why this matters

Requested directly by the project owner as the first real deliverable for this project;
see `docs/prd/marijuana-awareness-site.md` for the full problem/goal/approach.

## Scope — in

- Home, Effects, Myths vs Facts, Law, Get Help, Get Involved pages.
- Shared responsive CSS + minimal JS (nav, flip cards).
- Content decisions (this epic's orchestrator made the call per the owner's explicit
  delegation — "decide what content should we put").

## Out of scope

- Other drugs/substances — weed/marijuana only, per the brief.
- Backend, CMS, pledge-submission storage, analytics — see PRD §5.

## Success criteria (epic-level)

- [x] All Phase 1 pages exist, cross-link correctly, and render cleanly on mobile + desktop.
- [ ] Helpline numbers and legal specifics are verified by a human before public launch
      (ADW-003).

## Child tickets (rollup)

| Ticket | Title | Status |
|--------|-------|--------|
| ADW-001 | Content & information architecture | done |
| ADW-002 | Build static site (HTML/CSS/JS) | done |
| ADW-003 | Verify helpline numbers & legal facts before launch | ready (blocked-on-human) |
| ADW-004 | Add campaign visuals (hero graphic, icons, printable posters) | done |
| ADW-005 | Visual redesign + persuasive Why Stop page | done |

## Notes / decisions

- Tone: fact-based, non-judgmental (per project owner's explicit choice over hard-deterrent
  messaging).
- Campaign name: "ClearHead Bangalore" — chosen by the orchestrator per the owner's
  delegation of content decisions.

## Outcome (filled when the epic closes)

- **Result:** Pending ADW-003 (human verification) before the epic can close.
- **Reviewed by orchestrator:**
- **Follow-ups / spun-off epics:**
