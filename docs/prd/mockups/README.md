# Mockup convention — HTML-mockup-as-spec

Mockups in this directory are **self-contained, dependency-free HTML files**.
Each one is simultaneously the visual mockup and the build spec — the developer
reads the same file the designer authored.

---

## The convention

### A mockup doubles as the visual build-spec

A mockup in `docs/prd/mockups/` is not a screenshot or a Figma export.
It is an annotated HTML prototype the developer opens in a browser, reads
top-to-bottom, and builds from directly. The file contains:

- The **visual frame** (component or screen scaffold, realistic layout).
- The **design tokens** (colors, spacing, typography) as inline CSS variables.
- **Annotation callouts** — numbered or labelled notes overlaid on or beside the
  component that explain intent, constraints, and "do not change" rules.
- No external dependencies. No CDN links. No `src=` to external images or
  scripts. Everything is inline.

### Self-contained, dependency-free

Every mockup file must work when opened as a local `file://` URL with no network
access and no build step. This means:

- **Inline CSS only** — `<style>` block in `<head>`. No `<link rel="stylesheet">`.
- **No CDN or external resource references** — no `href=https://…`, no
  `src=https://…`, no `@import url(…)` pointing outside the file.
- **No JavaScript frameworks** — vanilla JS only, and only when it directly
  serves annotation interactivity (e.g. tab switching to show two states).
  Mockups that need no JS should have none.
- **SVG icons inline** — if icons are needed, inline `<svg>` only; no icon fonts.

### Annotation / callout style

Annotations explain the *intent* and *constraints* behind a design decision —
not what the eye can already see. Good annotations say things like:

- "Tab order must follow visual order — do not change the DOM sequence."
- "This color token is also used for X; change here = change everywhere."
- "Collapse the rail on viewports < 768 px — this state is not shown."

Use the `.note` callout style from `_TEMPLATE.html` (numbered badges + a
legend section at the bottom of the file) or an equivalent clearly readable
system. Annotations must be visible in the browser — do not hide them in HTML
comments.

---

## File naming

```
docs/prd/mockups/
  README.md              ← this file
  _TEMPLATE.html         ← starter template (copy to begin a new mockup)
  <feature-slug>.html    ← a real mockup file
```

Name files after the feature or screen they prototype, not after a ticket ID.
Ticket IDs belong in the mockup's `<title>` and in a comment at the top of the
file, not in the filename.

---

## Dogfooded on CPF-E03

This convention was established during the document-section UX epic (CPF-E03):

- `docs/prd/mockups/document-section-ux.html` is a fully annotated prototype of
  the proposed doc viewer redesign — its annotation callouts defined the exact
  DOM structure the developer implemented.
- `docs/prd/mockups/agent-cockpit.html` is the cockpit control-room mockup used
  in CPF-E09.

Both files are reference examples of the annotation style in practice.

---

## Relationship to the PRD

A mockup accompanies a PRD (`docs/prd/<feature>.md`). The PRD carries the
problem, users, goal, and approach. The mockup carries the visual + structural
spec. They are separate files that reference each other; neither replaces the other.

A PRD can exist without a mockup (text-only specs are fine for non-UI work). A
mockup should not exist without at least a ticket or PRD that gives it context.
