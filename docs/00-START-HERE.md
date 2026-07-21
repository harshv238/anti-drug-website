# Anti-Drug Awareness Website — Start Here

This folder is the **single source of truth**. Anyone (human or AI) resuming
work should read this file first.

---

## What this project is

A public-facing website for anti-drug education and awareness. The current build
(`site/`) is **ClearHead Bangalore** — a weed/marijuana-only awareness campaign site for
Bangalore youth. See `docs/prd/marijuana-awareness-site.md` and epic `ADW-E01`.

---

## How to resume a session

1. Read this file — orientation + doc map.
2. Read `session-log.md` — what happened last and what's next.
3. Skim `decisions.md` — locked choices (don't relitigate without reason).
4. Open `tickets/BACKLOG.md` — current ticket state.
5. Pull detail from whichever domain doc the next task needs (see map below).

---

## Map of docs

| File | What's in it |
|------|--------------|
| `00-START-HERE.md` | This file — orientation + how to work |
| `decisions.md` | Decision log (ADR-style, dated, newest on top) |
| `session-log.md` | Running log of work per session (newest on top) |
| `tickets/README.md` | How the orchestrator + worker ticket system works |
| `tickets/BACKLOG.md` | Board — one line per ticket, grouped by status |
| `tickets/_TEMPLATE.md` | Blank ticket template |
| `personas/README.md` | How the persona system works |
| `prd/_TEMPLATE.md` | Blank PRD template |

| `prd/marijuana-awareness-site.md` | PRD for the ClearHead Bangalore site (content plan, scope, constraints) |
| `../site/` | The actual website source (plain HTML/CSS/JS, no build step) |

---

## Working principles

- **Document-driven.** Decisions and context live here, not in chat. If
  something important exists only in a chat message, write it into the
  appropriate doc before the session ends.
- **Discuss before big builds.** The orchestrator surfaces options and gets
  agreement before running ahead on large builds.
- **Tickets are airtight.** A worker reads one ticket and executes without
  needing to ask follow-up questions. If a ticket requires outside knowledge,
  that knowledge belongs in the ticket or a linked doc.
- **Quality-first routing.** The cheapest model that can do the job *correctly
  the first time* — not the cheapest model that can produce *something*.

---

_Last updated: 2026-07-20_
