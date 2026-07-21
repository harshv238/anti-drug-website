---
id: ADW-007
title: Localize the site into Hindi and Kannada (subfolder structure + language switcher)
status: done
model: sonnet
agent: claude
persona: developer
depends_on: [ADW-006]
epic: ADW-E01
created: 2026-07-21
---

## Objective

Give the site full-parity Hindi and Kannada versions of all 8 pages, with a language
switcher, so it can reach Bangalore's Hindi- and Kannada-speaking audiences, not just
English speakers.

## Context (read these first)

- Owner asked mid-session: "can we localize the complete site to english, hindi, kannada".
  Clarified structure (subfolders + switcher, over a single-page JS-toggle approach) and
  scope (all 8 pages, all 3 languages, not a core-pages-first partial pass) via a direct
  question before starting.
- `docs/prd/marijuana-awareness-site.md` — tone/scope constraints this localization must
  preserve in every language (fact-based, non-judgmental, no fabricated statistics).

## Scope — do this

- Added a language switcher (EN / हिं / ಕನ pills) to the nav on all pages, wired via a new
  `.nav-right` wrapper + `.lang-switch` CSS component.
- Built `site/hi/*.html` (8 files) and `site/kn/*.html` (8 files) — full Hindi and Kannada
  translations of every English page, same HTML structure/classes, relative asset paths
  fixed for the extra folder depth (`../css/style.css`, `../js/main.js`).
- Delegated the actual translation work to two parallel subagents (one per language), each
  given: the exact English source files to translate from, a fixed shared-chrome dictionary
  (nav labels, footer text, disclaimers) to guarantee consistency across all 8 pages in that
  language, and explicit instructions to preserve safety-critical caveats (helpline "pending
  verification" badge, "not legal advice" notice) faithfully rather than softening them.
- Kept the brand name "The Full Picture" and brand mark "FP" untranslated in all languages
  (proper noun), and kept technical/legal terms (NDPS Act 1985, NIMHANS, Cannabis Use
  Disorder) in English within the translated text, per standard Indian-language health/legal
  writing convention.

## Out of scope

- Native-speaker accuracy review of the Hindi/Kannada text — see ADW-008 (new human ticket,
  same pattern as ADW-003). Machine/AI-produced translation of health and legal content
  should not be treated as launch-ready without a fluent human review pass.
- A JS-driven single-page language toggle — explicitly not chosen (subfolder approach was
  the owner's pick).

## Acceptance criteria (testable)

- [x] `site/hi/` and `site/kn/` each contain all 8 pages, mirroring the English structure.
- [x] Language switcher present and correctly wired (EN/हिं/ಕನ links resolve to the right
      page in the right folder) on every page in every language.
- [x] Headless-browser check: 0 console/page errors across sampled pages
      (hi/index.html, kn/index.html, hi/why-stop.html, kn/why-stop.html).
- [x] No new external dependency introduced (still zero CDN/external fonts/images).
- [x] Safety-critical caveats (helpline verification badge, "not legal advice" notice)
      present and not softened in both translations (spot-checked by the building agents and
      by direct source inspection).
- [x] No fabricated statistics introduced in translation — numbers (25, 1985,
      1800-11-0031) carried over unchanged.

## Notes / decisions

Devanagari nuqta characters (e.g. ग़) rendered as a missing-glyph box in the sandboxed
headless-Chromium screenshot used for verification — confirmed via direct source inspection
that the underlying text is correct; this is a font-availability artifact of the test
environment, not a bug in the file. A real user's browser (with standard Indic font/language
support) will render it correctly.

## Outcome (filled after work)

- **Result:** Site is now fully localized into English, Hindi, and Kannada (24 pages total)
  with a working language switcher.
- **Status:** pass
- **Files changed:** `site/css/style.css` (nav-right/lang-switch styles), all 8
  `site/*.html` (switcher added), `site/hi/*.html` (8 new), `site/kn/*.html` (8 new)
- **Tests:** local static server + Playwright headless check (0 console/page errors on 4
  sampled pages across both languages); manual screenshot review of full-page renders
- **Follow-ups:** ADW-008 (human native-speaker review of Hindi/Kannada translations before
  public launch) — new launch-gate ticket, same pattern as ADW-003
- **Confidence:** medium — structurally verified and screenshot-reviewed, but translation
  *accuracy* at native-speaker fluency has not been independently confirmed (see ADW-008)
- **Reviewed by orchestrator:** self, plus the two building subagents self-verified
  structural tag-count parity between source and translated files
