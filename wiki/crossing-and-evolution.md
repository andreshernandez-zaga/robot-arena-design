# Crossing & Evolution

> This is the core of the game. If the scope has to shrink, this stays and other things go (even squads could become 1v1).

## Acquiring blueprints

- After a match you can see an opponent's robots **from the outside**: their appearance, plus what you observed during play (behavior, damage, abilities used).
- You **cannot see the blueprint** before committing.
- Once you commit to revealing or crossing with a robot's blueprint, **you can't undo it**. You get whatever was underneath.
- Acquiring a blueprint copies it. The opponent loses nothing.

## Crossing

- You cross a captured blueprint with one of your own.
- **No guaranteed improvement.** The result can be better, worse, or just different, and different might not fit your squad.
- There should be ways to **improve your odds** of a good result (see below).
- The model is inspired by genetic programming: selection by phenotype produces new genotypes.

## Seeing offspring before choosing (Provisional)

The owner's current idea:
- A crossing produces **several candidate offspring**.
- You can inspect each one **fully**, both its form and its plan, before deciding which one, if any, goes into a slot.
- What you **cannot** see is the opponent's plan coming out of the match. That is only revealed once you commit, and the commitment can't be undone.

This splits crossing into two decisions with different skills:

| Step | Information | Skill |
|---|---|---|
| **1. Capture** (which opponent robot to take) | Blind: only form and match observations | Reading opponents, placing a bet |
| **2. Choose offspring** (which result to keep) | Full: plans are visible | Engineering, fitting the squad |

This also largely addresses the "most crossovers are worse" risk, since players pick from several results instead of living with one.

**Open:**
- How many offspring do you see? This could be the main lever separating what winners and losers get.
- Can you reject all of them? What does that cost?
- Once you've seen the offspring plans, you can work out a lot about the captured parent's plan. Is that fine? It seems fine, since the commitment has already happened.

## Improving the odds (Open, ideas under discussion)

**Owner's idea: a heuristic filter.** Offspring below a threshold are filtered out, for example by average of stats and attributes, damage output, or damage resistance.

**Claude's concerns:**
- **It punishes specialists.** A glass cannon (huge damage, very fragile) scores badly on averages but is exactly the kind of interesting design worth keeping. An average-based filter pushes everyone toward generalists.
- **The threshold becomes the meta.** Players may design to pass the filter instead of to win fights.

**Alternatives suggested (not agreed):**
- **Directed breeding:** the player chooses a priority, such as "favor durability" or "keep my chassis".
- **Locking** a part or gene before crossing, at a cost. Each lock reduces variety.
- **Test runs:** run an offspring through self-play before it takes a slot. This also gives self-play a clear job inside the crossing loop.

- **Inheritance tools** (inspired by Pokémon breeding items): items or actions that pass more of one parent's genes on, or fix a trait. These are a more expressive form of locking.
- **Bonuses for distant lineages** (inspired by the Masuda method): crossing with a lineage far from yours yields more variation or rarer traits. It fits the narrative and works against everyone converging on the same design. *Open:* how to measure lineage distance.
- **Abilities you can only get by crossing** (inspired by Pokémon's egg moves): this strengthens PvP as the source of new material.

See [Benchmarks](explorations/crossing-and-information.md) for sources and caveats.

A filter of some kind could still coexist with these, for example a minimum-viability floor rather than an above-average threshold.

**Monetization caution:** paying to see more offspring is pay-to-win in a different form, the same issue as paid blueprint reveals.

## Evolution outside PvP

- **Self-play simulation:** test your own designs against each other to explore variations before facing real players.
- **Suggested division of roles:**
  - Self-play **refines** what you have.
  - PvP gives you **new genetic material** you cannot get any other way.
- Self-play also gives players something to do while waiting for an opponent's async turn.
- Possible extra job: test-running candidate offspring before committing one to a slot (see above).

## Diversity dynamics (hypothesis)

- Players who win very often may find it harder to improve, because they see less diversity. There's always some chance involved.
- **Caveat:** matchmaking usually pairs winners with winners, so this effect may not appear on its own. Treat it as a hoped-for side effect, not a balancing mechanism.

## Hidden information

- Starter archetype blueprints will probably leak (wikis, community).
- Crossing quickly produces designs unique to each player, which keeps blind reveals meaningful.
- Detailed match data can also leak hidden information through reverse-engineering (see [Matches & Pacing](matches-and-pacing.md#what-a-match-shows)).
