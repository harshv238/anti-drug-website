# Session Log

**Newest on top.** One entry per working session.

Format:
```
## YYYY-MM-DD — <short label>
**Did:** what changed
**Next:** what to do next
**Open questions:** what is waiting on whom
```

---

## 2026-07-20 — Visual redesign + persuasive "Why Stop" page (ADW-005)

**Did:**
- Owner asked to make the site "more visually better" and "convincing to stop drugs."
  Asked a clarifying question rather than assuming — owner chose "stakes + aspiration"
  (ADR-0004): keep the non-judgmental voice, sharpen persuasion with concrete consequences
  + a genuine positive framing, not a hard-deterrent rewrite.
- Built `site/why-stop.html`: a "stakes" band (money, legal record, academic/career
  momentum, relationships, mental health risk, escalation — red-accented) and a "gains" band
  (brain clarity, money, clean record, trust, control, presence — gold-accented), closing
  with an autonomy-respecting CTA (not a command).
- Upgraded the visual design system: bigger hero typography, decorative background blobs,
  card hover states, a big-stat-card component. Converted the homepage fact-strip into stat
  cards and added a dark CTA band driving to Why Stop.
- Wired "Why Stop" into nav + footer across every page. Verified with local server +
  Playwright: 0 console/page errors on index and why-stop at desktop and mobile widths.
- Logged ADR-0004; filed and closed ADW-005.

- Added a favicon (inline SVG leaf mark, no external file) and Open Graph/Twitter meta tags
  to all 8 pages, so links shared via WhatsApp/Twitter (already linked from Get Involved) show
  a real title/description/tab icon instead of a blank preview.

**Next:**
- ADW-003 (human helpline/legal verification) is still the launch gate — unchanged.
- Everything is staged in git but not yet committed; owner hasn't confirmed hosting/remote
  plans yet either.

**Open questions:** Same as before — hosting/remote plan still undecided.

## 2026-07-20 — Added campaign visuals (hero graphic, icons, printable posters)

**Did:**
- ADW-004: added an inline-SVG cannabis-leaf hero graphic to the homepage, icon accents to
  every inner page's hero, and a new `site/posters.html` with 3 printable poster designs
  (teal/navy/coral) for offline campus/community use — no external images or CDN
  dependencies, keeping the site's zero-dependency architecture.
- Wired "Posters" into nav + footer on all pages; linked it from Get Involved.
- Kept poster copy in the site's already-locked fact-based/non-judgmental tone rather than
  switching to hard-deterrent "STOP DRUGS NOW" phrasing.
- Verified with a local server + headless-browser (Playwright) check: 0 console/page errors
  across index, effects, and posters; screenshots reviewed manually.

**Next:**
- Same as before: ADW-003 (human helpline/legal verification) is still the launch gate.
- Optional: user may want to try the print output physically to confirm poster sizing looks
  right on real paper.

**Open questions:** None new.

## 2026-07-20 — Built the marijuana awareness site end-to-end

**Did:**
- `git init`'d the repo (branch `main`).
- Scoped and built ADW-E01: a weed/marijuana-only Bangalore awareness campaign site,
  "ClearHead Bangalore" — fact-based, non-judgmental tone (owner's choice).
- Decided content/IA (ADW-001): Home, Effects, Myths vs Facts, The Law, Get Help, Get
  Involved.
- Built the static site (ADW-002) under `site/` — plain HTML/CSS/JS, zero external
  dependencies, responsive. Verified with a local server + headless-browser check
  (Playwright): all 6 pages 200 OK, no console/page errors, nav links correct, myth/fact
  flip-cards work, mobile nav works. Screenshots reviewed manually.
- Flagged helpline numbers and legal specifics as pending human verification (ADW-003) rather
  than asserting them as confirmed — see ADR-0003.
- Logged ADR-0002 and ADR-0003; updated the board.

**Next:**
- Human: complete ADW-003 (verify helpline numbers + NIMHANS contact info + spot-check the
  law page) before promoting the site publicly.
- Decide hosting (GitHub Pages is the simplest fit for a static, dependency-free site) and
  push to a remote once the owner is ready.
- Optional: add a real pledge-submission backend (Phase 2, only on demand — see the PRD).

**Open questions:** Where/how will the site be hosted, and is a remote (GitHub) already set
up to push to?

## 2026-07-20 — Kickoff

**Did:**
- Bootstrapped the project framework (`docs/`, `docs/tickets/`, board, decision
  log, session log, START-HERE, personas, PRD/mockup scaffolding, PR template).
- Chose ticket prefix: `ADW-`.

**Next:**
- Write the first ticket for the first real piece of work.
- Confirm domain docs to create (vision, content guidelines, site map, etc.).

**Open questions:** None yet.

<!-- Add new session entries above this line, newest on top -->
