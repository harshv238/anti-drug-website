---
name: <kebab-id>             # stable id, e.g. developer — never reused
title: <Display Name>        # e.g. Developer
description: <one line>      # what this persona is for (used when spawned as a tool)
agent: general-purpose       # underlying agent type (capability surface), NOT a model tier:
                             #   explore | general-purpose | plan | claude
tools: [Read, Edit, Write, Bash, Grep, Glob]   # optional capability limit; omit to inherit all
allowed_paths:               # File allowlist (globs). The persona is given and told to use
  - docs/00-START-HERE.md    # only these files.
  - docs/tickets/**
spawnable_by: [orchestrator, agent, human]   # who may invoke this persona
---

<!-- A PERSONA is a reusable, scoped worker profile. It defines WHO does the work
     and WHICH files they may touch — but NOT how powerful the model is. The
     model tier still comes from the ticket's `model:` field (routing is
     unchanged). When a ticket names this persona, a worker is spawned with this
     role + scope + tools, at the ticket's model tier. -->

## Role

<One paragraph: who this persona is and what kind of work it owns.>

## Operating principles

- <how it works, standards it holds to, voice/tone if relevant>

## Context to load first

- <the key files (within allowed_paths) to read before acting>

## Out of scope

- <what this persona must NOT do — reinforces the path allowlist and prevents
  over-reach into other personas' territory>

## Outputs / handoff

- <what this persona returns, and to whom (e.g. "returns a diff + summary to the
  orchestrator for review against the ticket's acceptance criteria")>
