---
id: ADW-006
title: Rename campaign from "ClearHead Bangalore" to "The Full Picture"
status: done
model: sonnet
agent: claude
persona: developer
depends_on: []
epic: ADW-E01
created: 2026-07-21
---

## Objective

Rebrand the site from "ClearHead Bangalore" to "The Full Picture" everywhere it appears —
titles, nav, footer, meta tags, share links, brand mark — per the owner's explicit request
for a better, generic (non-location) name.

## Context (read these first)

- `docs/decisions.md` ADR-0005 — the rename decision and why "The Full Picture" was chosen
  (already the exact phrase used in the site's own hero/why-stop copy).
- Owner asked for a better name, then specified "generic and not related to Bangalore" when
  given options — offered 3 directions, owner picked "The Full Picture".

## Scope — do this

- Replace "ClearHead Bangalore" → "The Full Picture" across all 8 `site/*.html` pages:
  `<title>`, nav brand text, footer heading, OG/Twitter meta tags, WhatsApp/mailto share
  text.
- Replace lowercase pseudo-URL "clearheadbangalore" → "thefullpicture" (posters.html).
- Replace brand-mark initials "CH" → "FP".
- Update `README.md` and `docs/00-START-HERE.md` (living reference docs) to the new name.
- Add pointer notes (not rewrites) on the older tickets (ADW-001, ADW-E01) that recorded the
  original name, referencing ADR-0005.

## Out of scope

- Removing Bangalore-specific audience/content (law page Karnataka context, NIMHANS
  Bangalore, campaign framing) — the ask was about the brand name only, not the site's
  target geography.
- Rewriting historical `docs/session-log.md` / `docs/decisions.md` entries that predate the
  rename — those are a point-in-time record; a new ADR/session entry documents the change
  instead.

## Acceptance criteria (testable)

- [x] No occurrences of "ClearHead" remain in `site/*.html`.
- [x] Brand mark shows "FP" in nav on all pages.
- [x] Headless-browser check: 0 console/page errors on index.html and posters.html after the
      rename.
- [x] `README.md` and `docs/00-START-HERE.md` reflect the new name.
- [x] ADR-0005 logged; older tickets annotated rather than silently rewritten.

## Outcome (filled after work)

- **Result:** Site fully rebranded to "The Full Picture"; docs updated; history preserved
  with pointer notes.
- **Status:** pass
- **Files changed:** all `site/*.html` (8 files), `README.md`, `docs/00-START-HERE.md`,
  `docs/decisions.md` (new ADR-0005), `docs/tickets/ADW-001-content-and-ia.md`,
  `docs/tickets/ADW-E01-marijuana-awareness-site.md`
- **Tests:** local static server + Playwright headless check (0 console/page errors);
  manual screenshot review of nav and posters page
- **Follow-ups:** none required; ADW-003 remains the launch gate
- **Confidence:** high
- **Reviewed by orchestrator:** self (mechanical rename, no cold-spawn needed)
