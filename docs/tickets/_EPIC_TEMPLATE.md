---
id: ADW-ENN              # epic id: <PREFIX>-E<NN>, e.g. ADW-E01 — stable, never reused
title: <short epic title>
kind: epic               # marks this file as an epic, not a ticket
status: open             # open | in-progress | done | blocked
owner: <name>            # who owns this epic (orchestrator, or a human)
created: YYYY-MM-DD
---

<!-- An EPIC groups several tickets under one larger outcome. It is an
     orchestrator planning artifact — it is NEVER spawned to a worker, so it
     has no model/agent. Child tickets carry `epic: ADW-ENN` in their
     frontmatter; that field is the source of truth for membership. The rollup
     table below is the human-readable mirror — keep it current as children
     change. -->

## Objective

<One paragraph: the larger outcome this epic delivers, and how you'll know it's done.>

## Why this matters

<The motivation / value. Why is this body of work worth grouping and tracking?>

## Scope — in

- <the slices of work this epic covers>

## Out of scope

- <what this epic explicitly does NOT cover — prevents scope creep>

## Success criteria (epic-level)

- [ ] <outcome-level, not per-ticket — what must be true when the whole epic lands>
- [ ] <objectively checkable where possible>

<!-- These are coarser than a ticket's acceptance criteria. A ticket checks one
     deliverable; an epic checks the combined outcome. -->

## Child tickets (rollup)

<!-- Mirror of the tickets carrying `epic: ADW-ENN`. Keep status in sync as
     children move. -->

| Ticket | Title | Status |
|--------|-------|--------|
| ADW-NNN | <title> | backlog |
| ADW-NNN | <title> | backlog |

## Notes / decisions

<constraints, sequencing, cross-epic dependencies, voice reminders>

## Outcome (filled when the epic closes)

- **Result:**
- **Reviewed by orchestrator:**
- **Follow-ups / spun-off epics:**
