# Decision Log

Lightweight ADRs. **Newest on top.** Format: `date · decision · why`.

---

## ADR-0004 · 2026-07-20 — Persuasion style: "stakes + aspiration," not hard deterrent

- **Decision:** When the owner asked to make the site "more convincing to stop drugs," the
  orchestrator asked which direction to lean rather than assuming. The owner chose "stakes +
  aspiration": keep the non-judgmental voice from ADR-0002, but sharpen it with concrete
  consequences (money, legal record, academic/career momentum, relationships, mental health
  risk) alongside a positive "what you gain by staying clear" framing — over a harder
  "STOP DRUGS NOW"-style deterrent rewrite.
- **Why:** This reverses/refines part of ADR-0002's tone decision, so it needed explicit
  reconfirmation rather than silent reinterpretation. Youth-audience health communication
  research generally shows commanding/fear-only messaging triggers reactance, while
  autonomy-supportive framing (stakes made concrete + genuine positive framing, without
  telling the reader what to do) performs better — consistent with the owner's own choice.

## ADR-0002 · 2026-07-20 — Build a scoped, weed/marijuana-only awareness site as a static, dependency-free site

- **Decision:** Scope the first deliverable to weed/marijuana content only (not drugs in
  general), targeted at Bangalore, and build it as a static HTML/CSS/JS site under `site/`
  with no build step, backend, or external dependencies. Campaign name: "ClearHead
  Bangalore". Tone: fact-based, non-judgmental (owner's explicit choice over a harder
  deterrent framing).
- **Why:** The owner explicitly requested weed/marijuana-only scope and delegated content
  decisions. A static, zero-dependency site is trivial to host for a campaign with no
  ongoing infra budget, and keeps the fact-checking surface (see ADR-0003) minimal.

## ADR-0003 · 2026-07-20 — Ship with helpline/legal specifics flagged for human verification, not asserted as final

- **Decision:** Helpline numbers (`site/help.html`) and legal-penalty specifics
  (`site/law.html`) are either marked with a visible "pending verification" badge or kept
  deliberately qualitative, and a `model: human` ticket (ADW-003) gates public launch.
- **Why:** A wrong crisis-helpline number or misstated legal penalty is actively harmful on a
  public-health site, and no authoritative source was available to verify these during the
  build session. Shipping unverified specifics as if confirmed would be misinformation.

## ADR-0001 · 2026-07-20 — Adopt a document-driven, ticket-based framework

- **Decision:** Use `docs/` as the single source of truth for all project
  context, and `docs/tickets/` as the work system. Maintain a memory mirror
  that auto-loads `docs/00-START-HERE.md` at the start of every session.
- **Why:** Long, multi-session builds lose context if decisions live only in
  chat. Storing context in markdown files lets any session (new chat, new day,
  new person) rebuild full orientation in minutes.

<!-- Add new decisions above this line, newest on top -->
