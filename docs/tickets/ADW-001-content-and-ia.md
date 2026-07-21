---
id: ADW-001
title: Content & information architecture for the marijuana awareness site
status: done
model: sonnet
agent: claude
persona: product-manager
depends_on: []
epic: ADW-E01
created: 2026-07-20
---

## Objective

Decide the site's information architecture and per-page content plan (weed/marijuana only,
fact-based/non-judgmental tone) so ADW-002 can build directly against it.

## Context (read these first)

- `docs/prd/marijuana-awareness-site.md` — the PRD this ticket fleshes out.
- Owner's brief: Bangalore-focused social campaign, weed/marijuana only, orchestrator decides
  content, fact-based non-judgmental tone (owner's explicit choice).

## Scope — do this

- Define the page list: Home, Effects, Myths vs Facts, Law, Get Help, Get Involved.
- For each page, define the key claims/sections to include, keeping to well-established,
  qualitative public-health and legal facts — no fabricated statistics.
- Flag anything requiring human fact-verification before launch (helpline numbers, specific
  legal penalty figures) rather than asserting unverified specifics.

## Out of scope

- Actual HTML/CSS/JS implementation (ADW-002).

## Acceptance criteria (testable)

- [x] Page list and per-page content outline exist in `docs/prd/marijuana-awareness-site.md`.
- [x] No page plan includes a fabricated Bangalore-specific statistic.
- [x] Helpline/legal-specifics verification need is explicitly flagged (→ ADW-003).

## Notes / decisions

Campaign name chosen: "ClearHead Bangalore".

## Outcome (filled after work)

- **Result:** IA + content plan defined; captured in the PRD and directly in the built pages.
- **Status:** pass
- **Files changed:** `docs/prd/marijuana-awareness-site.md`
- **Tests:** N/A (planning ticket)
- **Follow-ups:** ADW-003 (human verification of helpline/legal specifics)
- **Confidence:** high
- **Reviewed by orchestrator:** self (orchestrator authored this ticket directly per owner's
  delegation; no separate cold-spawn needed for a planning pass this bounded)
