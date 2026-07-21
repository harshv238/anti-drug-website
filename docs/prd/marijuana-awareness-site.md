# PRD — Marijuana/Weed Awareness Website for Bangalore (ADW-E01)

**Status:** approved · **Created:** 2026-07-20 · **Owner:** orchestrator

A static, dependency-free public awareness website educating Bangalore youth and young
adults about the real risks of weed/marijuana use — fact-based, non-judgmental tone.

---

## 1. Problem

There is no lightweight, locally-relevant (Bangalore/Karnataka), youth-facing resource that
explains weed's actual health effects, common myths, the legal reality under Indian law, and
where to get help — in one place, without moralizing or scare tactics that youth audiences
tend to distrust and tune out.

## 2. Who this is for (and who it is NOT)

| User | Job-to-be-done | Priority |
|------|----------------|----------|
| Youth / young adults (16–25) in Bangalore | Get honest answers about weed's effects before or instead of relying on peer rumor | **Highest** |
| Parents / educators | Find credible material to reference in conversations with teens | High |
| Someone worried about their own or a friend's use | Find a next step / who to talk to | High |
| **Law enforcement / policy audiences** | N/A — this is a public awareness site, not a legal or enforcement reference | **NOT a user** |

## 3. Goal

A visitor leaves with an accurate, non-sensationalized picture of what weed does to the body
and brain (especially a still-developing one), which common claims about it are wrong, what
Indian/Karnataka law actually says, and a clear, low-friction way to reach help — for
themselves or someone else.

## 4. Recommended approach — single-scope static site, weed/marijuana only

A dependency-free, static multi-page HTML/CSS/JS site (no backend, no build step) — trivial to
host anywhere (GitHub Pages, Netlify, campus server) for a campaign with no ongoing infra
budget. Scope is deliberately narrowed to **weed/marijuana only**, not drugs in general, per
the brief.

### Phase 1 — Core site (this build)
- **Home** — campaign framing, quick facts, wayfinding to the rest of the site.
- **Effects** — short-term and long-term effects on body/mind, adolescent-brain emphasis.
- **Myths vs Facts** — the claims youth actually hear, corrected.
- **Law** — NDPS Act 1985 reality check for India/Karnataka, in plain language.
- **Get Help** — helpline(s) and how to start a conversation; flagged for human verification
  before launch (see ADW-003).
- **Get Involved** — pledge / share / spread-awareness CTA.

### Phase 2 — Later / only on real demand
- Real pledge-submission backend (currently a static mailto-based form) — only if the
  campaign wants to collect signatures.
- Multi-language content (Kannada/Hindi) — only if reach data shows it's needed.
- Analytics — only if the campaign owner wants usage data (would need a privacy note).

## 5. Explicitly NOT building (and why)

- **General "anti-drug" content covering other substances** — out of scope per the brief;
  scope is weed/marijuana specifically.
- **A CMS or admin panel** — static content is sufficient for a campaign site of this size;
  a CMS is unwarranted complexity.
- **Real working pledge submissions / newsletter signup with a backend** — no server
  infrastructure exists for this project; a backend is Phase 2 only on demand.
- **Specific, precisely-cited statistics (e.g. "X% of Bangalore youth...")** — no verified
  source for Bangalore-specific numbers exists; inventing one would be misinformation on a
  public-health site. Content uses qualitative, well-established claims instead.

## 6. Success signals (informal)

- **Coverage:** every page in Phase 1 exists, links correctly, and reads clearly on mobile
  and desktop.
- **Honesty signal:** no fabricated statistics or unverified helpline numbers ship without an
  explicit "verify before launch" flag.
- **When to stop/reconsider:** if the campaign owner wants a different framing (e.g. harder
  deterrent tone, different audience) — that's a content rewrite, not a rebuild.

## 7. Constraints / risks

- **Helpline / crisis-contact accuracy is the biggest risk** — a wrong number on a page like
  this is actively harmful. Mitigation: ADW-003 is a `model: human` verification ticket; the
  site ships with contacts clearly marked pending verification until confirmed.
- **Legal specifics (penalty thresholds, quantity bands) change and are easy to state
  incorrectly.** Mitigation: the Law page stays qualitative ("this is general information, not
  legal advice") rather than citing precise penalty figures.
- **No backend/infra** — everything must work as static files with no server-side code.
