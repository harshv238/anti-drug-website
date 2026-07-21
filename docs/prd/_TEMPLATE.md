# PRD — <title> (<epic-or-ticket-id>)

**Status:** draft | approved | superseded · **Created:** YYYY-MM-DD · **Owner:** <orchestrator | product-manager>

<One-line summary: what this PRD covers and for which surface or capability.>

---

## 1. Problem

<Describe the concrete problem or gap. Name the surface or component. List the specific failure modes,
broken behaviours, or missing capabilities — with evidence (a broken link, a comment in the code,
a user report, a measurement). Avoid abstract framing; show what is wrong today.>

## 2. Who this is for (and who it is NOT)

| User | Job-to-be-done | Priority |
|------|----------------|----------|
| <Primary user type> | <What they need to accomplish, concretely> | **Highest / High / Medium / Low** |
| <Secondary user type> | <Their JTBD> | <Priority> |
| **<Explicitly excluded user / system>** | <Why they are NOT a user of this feature> | **NOT a user** |

<!-- Always name at least one out-of-scope user. "Not building for X" is load-bearing — it prevents
     scope creep and keeps the team honest. The AI / orchestrator is frequently out of scope for UI
     work; call it out explicitly when relevant. -->

## 3. Goal

<One or two sentences: what a user should be able to do, feel, or achieve after this ships that they
cannot today. Grounded in the problem above. Not a feature list — an outcome for a real person.>

## 4. Recommended approach — <direction name>

<Brief justification of the chosen direction and why alternatives were set aside.>

### Phase 1 — <label> (<qualifier: MVP / foundation / highest-value>)
- **<Ticket-NNN — short name.>** <What it delivers, what it depends on, what it coordinates with.>
- **<Ticket-NNN — short name.>** <Same.>

### Phase 2 — <label> (separate review-PRs)
- **<Ticket-NNN — short name.>** <What it delivers; what it depends on from Phase 1.>

### Phase 3 — Later / only on real demand
- <Capability> — <why it is deferred, what signal would trigger prioritisation>.
- <Capability> — <same>.

<!-- Phasing is required. "We might do this later" is not phasing — name the phase and the signal.
     Phase 3 is the place to park things that are genuinely on the north star but not yet warranted. -->

## 5. Explicitly NOT building (and why)
- <Feature or behaviour> — <one-line reason why it is excluded from this PRD>.
- <Feature or behaviour> — <reason>.
- <Feature or behaviour> — <reason>.

<!-- This section is mandatory. "Don't build" is as load-bearing as "do build." Include things that
     are plausible additions a reader might expect, even if obvious to the author. -->

## 6. Success signals (informal)
- **<Signal name (binary / metric / behaviour)>:** <What it means and how to check it.>
- **<Signal name>:** <Description.>
- **Honesty signal / when to STOP:** <What would tell you that this investment was wrong or should not
  continue? Name the signal explicitly. A project that cannot fail is a project that cannot learn.>

## 7. Constraints / risks
- <Hard constraint (technology, architecture, policy)> — <implication for the approach>.
- <Risk or dependency> — <mitigation or sequencing note>.
- <Parity note or explicit divergence> — <what is intentional vs accidental>.

<!-- Keep this section honest. If a constraint kills an approach, say so. If a risk might blow the
     phasing, name it. Don't pad with generic risks that could apply to any project. -->
