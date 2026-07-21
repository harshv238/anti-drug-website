---
id: ADW-009
title: Deploy the site to GitHub Pages
status: done
model: sonnet
agent: claude
persona: developer
depends_on: [ADW-007]
epic: ADW-E01
created: 2026-07-21
---

## Objective

Get the site publicly reachable at a real URL via GitHub Pages, since the repo now exists
and the owner asked where/how to deploy.

## Context (read these first)

- The site lives under `site/`, not the repo root — and `docs/` is already used for this
  project's orchestrator framework, so the classic Pages "deploy from `/docs`" option would
  have deployed the wrong content. Used the "GitHub Actions" Pages build source instead,
  which can publish any folder.

## Scope — do this

- Created GitHub repo `harshv238/anti-drug-website` (public) via `gh repo create`, pushed
  the existing local `main` branch.
- Added `.github/workflows/pages.yml` — a GitHub Actions workflow that uploads `site/` as
  the Pages artifact and deploys it on every push to `main` that touches `site/**`.
- Enabled Pages via `gh api repos/harshv238/anti-drug-website/pages -X POST -f
  build_type=workflow`.
- Pushed the workflow; confirmed the run succeeded (`gh run watch`) and the live URLs
  respond 200 (root, why-stop.html, hi/index.html, kn/index.html, posters.html).

## Out of scope

- A custom domain — not requested; GitHub's default `*.github.io` subdomain is in use.
- CI for anything beyond deployment (no tests exist for this static site).

## Acceptance criteria (testable)

- [x] Repo exists on GitHub and `main` is pushed.
- [x] `https://harshv238.github.io/anti-drug-website/` returns 200 and serves the actual
      site (not a 404 or the docs/ framework content).
- [x] Hindi and Kannada subfolder pages are reachable at the same domain
      (`/hi/index.html`, `/kn/index.html`).
- [x] The deploy workflow run completed with status `success`.

## Notes / decisions

The workflow only triggers on changes under `site/**` (plus the workflow file itself) —
changes to `docs/` (the project framework) won't trigger a redeploy, which is correct since
those aren't part of the published site.

## Outcome (filled after work)

- **Result:** Site is live at `https://harshv238.github.io/anti-drug-website/`, auto-deploys
  on every push to `main` that touches `site/`.
- **Status:** pass
- **Files changed:** `.github/workflows/pages.yml` (new)
- **Tests:** `gh run watch` confirmed successful deploy; `curl` confirmed 200 on 5 sampled
  URLs across English/Hindi/Kannada
- **Follow-ups:** ADW-003 and ADW-008 (human verification tickets) still gate *promoting*
  the site publicly, even though it's technically live and reachable now
- **Confidence:** high
- **Reviewed by orchestrator:** self
