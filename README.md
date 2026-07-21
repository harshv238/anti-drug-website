# The Full Picture

A fact-based, non-judgmental weed/marijuana awareness website for a Bangalore social
campaign. Static site, no build step, no external dependencies. Available in English, Hindi,
and Kannada.

**Live:** https://harshv238.github.io/anti-drug-website/

## Run it locally

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

## Project docs

This repo uses a document-driven, ticket-based project framework. Start here:

- [`docs/00-START-HERE.md`](docs/00-START-HERE.md) — orientation and doc map
- [`docs/prd/marijuana-awareness-site.md`](docs/prd/marijuana-awareness-site.md) — content plan and scope
- [`docs/tickets/BACKLOG.md`](docs/tickets/BACKLOG.md) — current work status

## Before promoting this publicly

The site is deployed and technically reachable, but two things still gate actively
promoting/sharing it:

- `ADW-003` — helpline numbers and legal specifics are flagged "pending verification" and
  must be confirmed against an authoritative source.
- `ADW-008` — the Hindi and Kannada translations need a native-speaker accuracy review.
