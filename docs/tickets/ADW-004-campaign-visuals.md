---
id: ADW-004
title: Add campaign visuals — hero graphic, page icons, printable posters
status: done
model: sonnet
agent: claude
persona: developer
depends_on: [ADW-002]
epic: ADW-E01
created: 2026-07-20
---

## Objective

Give the site visual/campaign material beyond plain text — a hero illustration, per-page icon
accents, and printable poster designs for real-world (offline) campaign use — without adding
any external image dependencies.

## Context (read these first)

- `docs/prd/marijuana-awareness-site.md` — site stays dependency-free (no CDN/external
  images); tone is fact-based/non-judgmental (owner's locked choice, ADR-0002).
- Owner's request: "add some images suitable like stop drugs now etc etc" — interpreted as
  wanting campaign-style visuals/posters, not a tone change. Kept the existing non-judgmental
  copy rather than switching to hard-deterrent poster text, since tone was already decided.

## Scope — do this

- Inline SVG cannabis-leaf mark (no external images/stock photos — keeps the
  zero-dependency architecture and avoids copyright/sourcing issues) used as a hero graphic
  and as a watermark on posters.
- Icon accents on every inner page's hero (Effects, Myths vs Facts, Law, Help, Get Involved).
- New `site/posters.html` — 3 printable, poster-style graphic cards (teal/navy/coral) sized
  for A4, with a "Print posters" action and `@media print` styling.
- Wired "Posters" into nav + footer across all pages, and linked from Get Involved's "other
  ways to help" list.

## Out of scope

- Sourcing real photography — not available/appropriate for a dependency-free static site
  built without an image library; SVG graphics used instead.
- Changing the site's tone/copy — that was a locked decision (ADR-0002); this ticket is
  visuals only.

## Acceptance criteria (testable)

- [x] No new external network dependency introduced (no CDN/image URLs) — verified by local
      `file://`-style static serving with no fetch errors.
- [x] `site/posters.html` exists, is linked from nav + footer on all pages, and renders 3
      distinct poster designs.
- [x] Headless-browser check shows no console/page errors across index, effects, and posters
      pages.
- [x] Visual check (screenshots) confirms the hero graphic, page-hero icons, and poster cards
      render as intended on desktop.

## Notes / decisions

Kept poster copy consistent with the site's already-chosen fact-based/non-judgmental tone
(e.g. "Weed isn't harmless." / "Talk. Don't judge.") rather than harder "STOP DRUGS NOW"
scare-tactic phrasing — flagged to the owner as a deliberate choice, not an oversight.

## Outcome (filled after work)

- **Result:** Added a hero SVG graphic, per-page icon accents, and a 3-poster printable
  `posters.html` page; wired into nav/footer everywhere.
- **Status:** pass
- **Files changed:** `site/css/style.css`, `site/index.html`, `site/effects.html`,
  `site/myths-facts.html`, `site/law.html`, `site/help.html`, `site/get-involved.html`,
  `site/posters.html` (new)
- **Tests:** local static server + Playwright headless check (0 console/page errors across
  index, posters, effects); manual screenshot review
- **Follow-ups:** none required; ADW-003 (human helpline/legal verification) remains the
  launch gate
- **Confidence:** high
- **Reviewed by orchestrator:** self (bounded visual-design build, no cold-spawn needed)
