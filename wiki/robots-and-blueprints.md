# Robots & Blueprints

## Blueprint (genotype)

Every robot comes from a blueprint (a "plan"). It specifies:

- The overall design.
- Characteristics, such as materials and parts.
- The abilities and skills that follow from that design.

Characteristics come with trade-offs. Example: a heavier alloy makes a robot sturdier but slower.

### Structure: a hybrid (Provisional direction, details Open)

**Where we are:** a pure tree is easy to cross but too hard for players to read. A plain list of attributes is easy to read but crosses badly: blending numbers tends to produce averaged-out mush. The owner is leaning toward a **hybrid**: something cross-friendly underneath that **resolves into something easy to digest** when the player sees it. This is an early exploration. Nothing below is chosen.

#### Candidate layered model (Claude's suggestion, not agreed)

| Layer | Visible? | What it is | Role |
|---|---|---|---|
| **Genes** | Hidden | Internal properties of parts: material grade, tuning, wear, possibly recessive traits | Keeps something to infer; source of surprise |
| **Part tree** | Yes, as the robot's form | Chassis → torso → arms → mounts, etc. | What crossing mostly operates on; drives modular visuals |
| **Stat card** | Yes, as UI | ~5 derived stats, a list of abilities, a few tags | What players actually reason with |

Crossing would work on the genes and the part tree, **never directly on the stat card**. Abilities would emerge from combinations of parts (e.g. heavy frame + capacitor → shockwave), which would give players combinations to discover.

#### Ideas explored

- **A. The body is the tree.** A robot body is naturally a tree of attached parts. Swapping a branch = grafting another robot's arm assembly onto yours. This gives genetic-programming-style crossover with a visible, sensible result.
  - *Risk:* if the body is the whole blueprint, the form reveals everything and the blind bet disappears.
- **B. Hidden genes beneath visible parts.** Two arms that look the same can perform differently. This keeps an **inference gap** (see below).
- **C. Recessive traits.** A robot can carry traits it doesn't express, and offspring can express traits neither parent showed. This fits "select by phenotype, inherit genotype" and the lost-knowledge theme.
  - *Risk:* if there are too many, inference becomes a lottery. Keep them small and bounded, if used at all.
- **D. A budget that can't be exceeded.** Weight, power or a similar budget every blueprint must fit, which crossing must respect. Sidegrades become the default outcome rather than upgrades. *Claude considers this close to mandatory, whatever the representation; not yet agreed.*
- **E. A decision tree for control logic.** Simple rules for rudimentary, non-AI robots ("if an ally is attacked, intercept"). This is the most literal fit for genetic programming and for the narrative.
  - *Tension:* the player controls robots with action points, so this logic could only drive reactions or passive behavior. It might suit simultaneous turns. **Parked.**
- **Other options not yet explored:** a flat attribute array with a dedicated crossing rule (the owner's alternative), or something else entirely. The owner explicitly invited creative alternatives, so this list is not closed.

#### The inference gap (key dial, Open)

How much of the blueprint can a player infer from form and match data, and how much stays hidden?
- **Too small:** the blind commitment is meaningless; you already know what you're getting.
- **Too large:** commitment becomes a lottery and feels unfair.

This is likely the single most important tuning dial in the game, and it depends on the representation chosen.

#### Where this could change

- The three layers could collapse into two (e.g. no hidden genes, with hidden information coming only from what a match doesn't show).
- The tree might apply to the body, to control logic, to both, or to neither.
- "Stats" may be renamed or reinterpreted depending on the final model.
- Whatever we pick, the hard rule stays: **the output players see (form, behavior, effects) must be readable.**

## Physical form (phenotype)

- The robot's appearance should reflect its blueprint: materials, important parts, and anything that affects how it performs.
  - Heavy looks bulky. Light looks light.
- **Ideal:** the appearance is generated directly from the blueprint, as realistically as possible.
- **Pragmatic path (suggested):** a library of modular parts assembled according to the blueprint. Treat fully generative visuals as a stretch goal.
- Form carries information, which makes inference before crossing reliable.

## Roles

Initial archetypes, roughly like chess pieces:

| Archetype | Fantasy |
|---|---|
| Tank | Sturdy and slow, holds ground |
| Damage dealer | Deals damage |
| Saboteur / hacker | Jams signals, disables or damages robots |
| Stealth | Fragile, wins through positioning and flanking |

### Fixed classes vs. emergent roles (Open)

- Fixed classes are easier to understand.
- Free mixing is more interesting, and classes could emerge on their own.
- **Middle path (leaning):** everyone starts with recognizable archetype blueprints, and crossing gradually blurs them.

## Aging

Robots do not age or degrade for now. Stat degradation over time could be added later if needed.
