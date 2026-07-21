# Ticket System — How It Works

This folder holds all tickets for the project. This README explains the system
so any session can pick it up cold.

---

## The two roles

**Orchestrator** — the interactive Claude session (or human) that talks to the
project owner. It refines requests into tickets, routes each to the right model,
spawns workers, reviews their output, and records outcomes. It is the only role
with conversational continuity and judgment.

**Worker** — an agent cold-spawned per ticket. It reads one ticket (plus any
docs the ticket links), does the work, and returns. **Workers cannot ask
questions mid-task.** Whatever is missing from a ticket becomes a wrong guess,
which is why every ticket must be self-contained.

---

## Ticket lifecycle

```
backlog → ready → in-progress → review → done
                                    └──────────→ blocked
```

1. **backlog** — exists but not yet fully defined or dependencies unresolved.
2. **ready** — unambiguous; can be spawned immediately.
3. **in-progress** — worker has been spawned.
4. **review** — worker returned; orchestrator is checking against acceptance
   criteria.
5. **done** — criteria met; outcome recorded; board and logs updated.
6. **blocked** — something external prevents progress; blocker noted on ticket.

---

## Epics — grouping larger initiatives

An **epic** is a container for a body of work that spans several tickets toward
one larger outcome (e.g. "Site launch v1", "Resource library"). Use one when a
goal is too big for a single ticket and will outlive a single session.

- An epic is a markdown file `<PREFIX>-E<NN>-<slug>.md` with `kind: epic` in its
  frontmatter and an epic-level status: `open | in-progress | done | blocked`.
- An epic is **never spawned to a worker** — it is the orchestrator's planning
  artifact, so it has no `model`/`agent`. Workers only ever execute tickets.
- **Child tickets carry `epic: <PREFIX>-E<NN>` in their frontmatter.** That field
  is the single source of truth for membership; the epic's rollup table is the
  human-readable mirror.
- An epic closes (`done`) only when all its child tickets are done **and** its
  epic-level success criteria are met.
- Don't force every ticket into an epic. Loose, standalone tickets are fine —
  epics are for genuinely multi-ticket initiatives.

Copy `_EPIC_TEMPLATE.md` as the starting point for every new epic.

---

## Personas (optional)

A ticket may name a **persona** (`persona: developer`) — a reusable worker
profile that sets the role, file scope, and tools for the spawned worker. The
persona does **not** set the model tier; that stays on the ticket's `model:`
field. The worker runs the persona's role + scope at the ticket's model tier.
See `../personas/README.md`. Leaving `persona` blank works exactly as before.

---

## Model routing (quick reference)

| Model | Use when |
|-------|---------|
| `haiku` | Purely mechanical, zero-judgment, airtight tickets only |
| `sonnet` | The default for building — components, code, specs, drafts |
| `opus` | Judgment, taste, architecture, brand-critical, irreversible calls |
| `explore` | Search / reading / "where is X" — read-only, offloads bulk |
| `human` | Anything an AI cannot or should not do |

---

## Naming and conventions

- **File names:** `<PREFIX>-NNN-<short-slug>.md` (e.g. `ADW-007-homepage.md`)
- **Epic file names:** `<PREFIX>-E<NN>-<short-slug>.md` (e.g. `ADW-E01-launch.md`)
- **IDs** are stable and never reused, even after deletion.
- **Human tickets** (`agent: human`) are first-class: purchases, legal, accounts,
  sign-offs. They live on the same board and follow the same lifecycle.
- **Zero-prior-context rule:** a worker must be able to execute the ticket with
  no knowledge beyond what it links. If the worker would need to "just know"
  something, that belongs in the ticket or a linked doc.

---

## Files in this folder

| File | What it is |
|------|-----------|
| `README.md` | This file |
| `_TEMPLATE.md` | Blank ticket template — copy for every new ticket |
| `_EPIC_TEMPLATE.md` | Blank epic template — copy for every new epic |
| `BACKLOG.md` | The board — one line per ticket, grouped by status; epics indexed at top |
| `<PREFIX>-NNN-*.md` | Individual ticket files |
| `<PREFIX>-E<NN>-*.md` | Epic files (group child tickets) |
