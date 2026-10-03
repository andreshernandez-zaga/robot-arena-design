# Robots & Blueprints

## Blueprint (genotype)

Every robot comes from a blueprint (a "plan"). It specifies:

- The overall design.
- Characteristics, such as materials and parts.
- The abilities and skills that follow from that design.

Characteristics come with trade-offs. Example: a heavier alloy makes a robot sturdier but slower.

### Structure (Open)

- **Idea:** model blueprints as **trees**, borrowing from genetic programming, so crossing can swap nodes or subtrees.
- **Tension:** trees are flexible, but it is hard to translate them into readable stats. Depending on the model, classic "stats" might be replaced or reinterpreted.
- Whatever the internal model, it has to produce outputs players can read: form, behavior, and visible effects.

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
