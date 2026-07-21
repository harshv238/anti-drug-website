# Persona System — How It Works

This folder holds the project's **personas**: reusable, scoped worker profiles.
This README explains the system so any session can pick it up cold.

---

## What a persona is

A persona defines **who** does a piece of work and **which files** they may
touch — but **not** how powerful the model is. It is a markdown file
`<name>.persona.md` with frontmatter + a role brief.

The model tier is **not** part of a persona. Routing stays on the ticket's
`model:` field (see `../tickets/README.md`). When a ticket names a persona, a
worker is spawned with that persona's **role + file scope + tools**, at the
**ticket's model tier**. Persona = *who / how-scoped*; ticket `model` = *how
powerful*.

---

## Persona frontmatter

| Field | Meaning |
|-------|---------|
| `name` | Stable kebab id, e.g. `developer`. Never reused. |
| `title` | Display name. |
| `description` | One line — what the persona is for (shown when spawned as a tool). |
| `agent` | Underlying agent type / capability surface: `explore \| general-purpose \| plan \| claude`. **Not** a model tier. |
| `tools` | Optional capability limit, e.g. `[Read, Edit, Bash]`. Omit/empty = inherit all. |
| `allowed_paths` | Glob allowlist — the only files the persona is given and told to use. |
| `spawnable_by` | Who may invoke it: any of `orchestrator`, `agent`, `human`. |

The body has: **Role**, **Operating principles**, **Context to load first**,
**Out of scope**, **Outputs / handoff**. Copy `_PERSONA_TEMPLATE.md` for new ones.

---

## How a persona is invoked

Personas here are used by loading the persona file's role + scope directly into
a spawned agent's brief (via the Agent tool), since this project has not wired
up the `persona-runner` CLI/sync tooling. The **orchestrator** is itself the
first persona (full context, judgment). It picks a persona per ticket and
spawns it at the ticket's model tier.

---

## Default personas

Project setup seeds a core few; the rest are templates you enable when needed.

| Persona | For |
|---------|-----|
| `orchestrator` | The interactive, full-context driver (special — not cold-spawned). |
| `developer` | Builds/edits code against a ticket. |
| `tester` | Writes/runs tests; reports pass/fail/gaps. |
| `reviewer` | Independent, read-mostly review against the ticket. |
| `tpm` | Program-level planner: critical path, dependencies, risk, release readiness. Plans; never writes code. |
| `ux-architect` | Designs UX, information architecture, and interaction flows — wireframes, journey maps, UX audits. Specifies; never writes code. |
| `product-manager` | Defines what to build and why — PRDs, user stories, requirements, prioritization. Specifies; never writes code. |

Suggested additions to author as the project needs them: `business`,
`researcher`, `designer`.

---

## Files in this folder

| File | What it is |
|------|-----------|
| `README.md` | This file |
| `_PERSONA_TEMPLATE.md` | Blank persona template — copy for every new persona |
| `<name>.persona.md` | Individual persona files |
