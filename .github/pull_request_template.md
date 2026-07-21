<!--
  PULL REQUEST TEMPLATE — customizable per project.
  This file is scaffolded to `.github/pull_request_template.md`; GitHub loads it
  automatically when a PR is opened. Edit it freely to fit your project — add,
  remove, or reword sections. Keep it short enough that people actually fill it in.

  Conventions this template assumes (see docs/tickets/README.md):
    • A PR maps to ONE ticket where possible. If work spans several tickets,
      either split the PR or list each ticket and say why they ship together.
    • The orchestrator (or author) fills this in before requesting review.
-->

## Summary

<!-- 1–3 sentences: what this PR does and why it exists. -->

## Linked tickets

<!-- REQUIRED — at least one. Prefer a single ticket per PR.
     Use the project's ticket IDs (e.g. PRJ-001) or your tracker's keys
     (Jira/Linear/GitHub issue, e.g. PROJ-123). The closing keyword auto-closes
     GitHub issues; for external trackers it's just a reference. -->

- Closes PRJ-NNN

## Type of change

- [ ] Feature
- [ ] Fix
- [ ] Refactor / chore
- [ ] Docs
- [ ] Breaking change

## What changed

<!-- Concrete, reviewable bullets of the actual changes. -->

-

## Why / context

<!-- The reasoning. Link to docs/decisions.md entries or design notes if relevant. -->

## How it was tested

<!-- Commands run + results, manual checks, and screenshots/recordings for UI.
     "Didn't test" is a valid answer — say so explicitly rather than implying coverage. -->

## Persona / model

<!-- Optional (framework projects): which persona produced this change and at what
     model tier. Delete this section if it doesn't apply. -->

- Persona: <e.g. developer> · Model: <e.g. sonnet>

## Review checklist

- [ ] Linked to a ticket; scope matches that ticket (no unrelated, out-of-scope changes)
- [ ] All of the ticket's acceptance criteria are met — or deviations are called out above
- [ ] Tests / build pass; new behaviour is covered
- [ ] Docs updated where needed (`docs/`, `decisions.md`, `session-log.md`, READMEs)
- [ ] No secrets, keys, credentials, or sensitive data committed
- [ ] Breaking changes and any required migration are documented
- [ ] Self-reviewed the diff for leftovers (debug prints, commented code, TODOs)

## Rollback

<!-- How to revert safely if this causes problems (e.g. "revert this PR; no data migration"). -->
