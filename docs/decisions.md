# Decision Log

Lightweight ADRs. **Newest on top.** Format: `date · decision · why`.

---

## ADR-0006 · 2026-07-21 — Localize via static subfolders (`site/hi/`, `site/kn/`), not a JS toggle

- **Decision:** When the owner asked to localize the site into Hindi and Kannada, offered
  two structural approaches and let the owner choose: static per-language subfolders
  mirroring the English page set (chosen) vs. a single-page JS-driven language toggle. Also
  confirmed scope: full parity across all 8 pages in all 3 languages, not a partial
  core-pages-first pass. Translation work was delegated to two parallel subagents (one per
  language) with a fixed shared dictionary for nav/footer/disclaimer text to keep those
  consistent across each language's 8 pages.
- **Why:** The subfolder approach matches the site's existing zero-build, zero-JS-framework
  architecture (ADR-0002) — no translation-dictionary JS to write or maintain, and each
  language's pages are independently readable/debuggable as plain HTML. A JS toggle would
  have tripled the embedded text payload per page and added a runtime dependency for no
  clear benefit on a static campaign site.

## ADR-0005 · 2026-07-21 — Rename campaign from "ClearHead Bangalore" to "The Full Picture"

- **Decision:** Renamed the site/campaign brand from "ClearHead Bangalore" to "The Full
  Picture" across all pages (title, nav, footer, meta tags, share links) and the brand mark
  from "CH" to "FP". The site's audience/content still targets Bangalore (law/help pages,
  campaign framing); only the brand name changed.
- **Why:** Owner asked for a better name and explicitly wanted it generic, not tied to a
  city. "The Full Picture" was already the exact phrase used repeatedly in the site's own
  copy ("...with the full picture"), so it reinforces existing messaging rather than
  introducing a new concept.

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
