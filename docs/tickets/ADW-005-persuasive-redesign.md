---
id: ADW-005
title: Visual redesign + persuasive "stakes and aspiration" content (Why Stop page)
status: done
model: sonnet
agent: claude
persona: developer
depends_on: [ADW-004]
epic: ADW-E01
created: 2026-07-20
---

## Objective

Make the site visually stronger and more persuasive toward stopping/not starting weed use,
without abandoning the fact-based, non-judgmental tone locked in earlier (ADR-0002) — per the
owner's explicit choice of "stakes + aspiration" persuasion style over hard-deterrent
messaging.

## Context (read these first)

- `docs/decisions.md` ADR-0004 — the persuasion-style decision this ticket implements.
- `docs/prd/marijuana-awareness-site.md` — tone and scope constraints (weed/marijuana only,
  no fabricated statistics).
- Owner's request: "make it more visually better and also should be convincing to stop
  drugs" → clarified via question as "stakes + aspiration" (concrete consequences + positive
  framing of what's gained by not using), not a hard-deterrent rewrite.

## Scope — do this

- Visual: bigger/bolder hero typography, decorative background elements, hover states on
  cards, a big-stat card component, and two new accent colors (`--danger` for stakes,
  `--gold` for gains) used only where content is specifically about stakes/gains — not as a
  site-wide scare-color change.
- New page `site/why-stop.html`: a "stakes" band (concrete costs: money, legal record,
  academic/career momentum, relationships, mental health risk, escalation) and a "gains" band
  (brain clarity, money, clean record, trust, control, presence) — both non-fabricated,
  qualitative claims consistent with the rest of the site.
- An autonomy-respecting closing section (research-backed: commanding tone triggers
  reactance in youth audiences; autonomy-supportive framing performs better) rather than a
  command to stop.
- Homepage: converted the plain fact-strip into bigger stat-card call-outs, and added a
  prominent dark CTA band driving to the new Why Stop page.
- Wired "Why Stop" into nav + footer across every existing page.
- Favicon (inline SVG data-URI of the leaf mark, no external file) + Open Graph/Twitter meta
  tags on all 8 pages, so links shared via WhatsApp/Twitter/etc. (the site's own Get Involved
  page links to WhatsApp sharing) show a real title/description instead of a blank preview.

## Out of scope

- Rewriting Effects / Myths vs Facts / Law / Help page copy — those stay as before; only
  visual polish (hover states, bigger headers) applied site-wide.
- Fabricating statistics to make the persuasion feel more "convincing" — explicitly against
  the PRD's honesty constraint; all new stakes/gains claims are qualitative and defensible.

## Acceptance criteria (testable)

- [x] `site/why-stop.html` exists, linked from nav/footer on all pages, and from a homepage
      CTA band.
- [x] No new external dependency introduced (still zero CDN/external images — all graphics
      inline SVG).
- [x] Headless-browser check: 0 console/page errors on index.html and why-stop.html, desktop
      and mobile viewports.
- [x] No fabricated Bangalore-specific or precise unverified statistics introduced.
- [x] Existing pages (Effects, Myths vs Facts, Law, Help, Get Involved, Posters) still
      render and link correctly after the nav/footer change.

## Notes / decisions

The "danger" (red) and "gold" accent colors are used deliberately only inside the
stakes/gains cards on `why-stop.html` — the base site palette stays calm per ADR-0002; this
is a scoped, purposeful contrast device, not a tone reversal.

## Outcome (filled after work)

- **Result:** Added `site/why-stop.html` (stakes vs gains persuasive page), upgraded visual
  design system (typography scale, hover states, stat cards, decorative hero backgrounds),
  wired into nav/footer everywhere.
- **Status:** pass
- **Files changed:** `site/css/style.css`, `site/why-stop.html` (new), `site/index.html`,
  `site/effects.html`, `site/myths-facts.html`, `site/law.html`, `site/help.html`,
  `site/get-involved.html`, `site/posters.html` (all 8 pages also got a favicon + OG/Twitter
  meta tags)
- **Tests:** local static server + Playwright headless check (0 console/page errors on
  index.html and why-stop.html at desktop 1280px and mobile 390px); manual screenshot review
- **Follow-ups:** ADW-003 (human helpline/legal verification) remains the launch gate
- **Confidence:** high
- **Reviewed by orchestrator:** self (bounded design/content build, no cold-spawn needed)
