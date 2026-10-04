# Inspirations & References

> Mechanics from other games that could inspire ours. These are sources of ideas, not decisions. Each entry says what the source does, what we might take from it, and where it could go wrong for us.

## The guiding principle these led to

**Generous numbers, partial reverse-engineering.** In MMORPGs you see damage dealt, damage resisted, your own health and energy, and at least the enemy's health bar. That feedback is part of the thrill. Players reverse-engineering things is a feature, not a leak, as long as what they work out is mostly:

- **The game's rules** ("heavy alloys resist kinetic damage"). Good. Communities love this.
- **Not one opponent's full blueprint from one match.** That would kill the blind bet.

Because crossing makes blueprints unique to each player, both can hold: community databases can document the rules but not *your* robot. *(Provisional; replaces the earlier "outcomes, not formulas" proposal.)*

## References

### Pokémon breeding: hidden values and inheritance
- **What it does:** each Pokémon has hidden per-individual values (IVs). Two that look the same can differ underneath. Players built calculators to infer them from visible stats. Held items let breeders pass more of the parents' hidden values on, or fix one trait. Some moves ("egg moves") can only be inherited, never learned.
- **What we might take:**
  - Hidden per-robot numbers in the gene layer.
  - **Inheritance tools** as the way to improve crossing odds: items or actions the player chooses to use, rather than a threshold filter.
  - **Abilities you can only get by crossing,** which reinforces "PvP gives material you can't get any other way".
- **Watch out:** Pokémon breeding is famously grindy for competitive players. We have scarcity (limited crossings) instead of grinding, which should help, but the depth may still only appeal to a minority.

### The Masuda method (Pokémon): crossing with distant lineages
- **What it does:** breeding with a Pokémon from a different-language game raises the odds of a rare variant.
- **What we might take:** **bonuses for crossing distant lineages.** Crossing with an opponent whose lineage is far from yours gives more variation or rarer traits.
  - It fits the narrative: knowledge from a distant civilization is the most valuable.
  - It works against everyone converging on the same design, and against "inbreeding" within your own collection.
- **Watch out:** we need a meaningful way to measure lineage distance, and players will try to game it.

### Diablo: unidentified items and affixes
- **What it does:** you find a rare item and know its type and rarity, but not its properties until you identify it. Items are a base plus random affixes with tiers and value ranges.
- **What we might take:**
  - Proof that **blind commitment** is a familiar and enjoyable pattern.
  - **Parts as base + affixes:** a visible part type, with hidden tiers and rolled values.
- **Watch out:** loot treadmills create power creep. Our trade-off and budget rules need to hold against that.

### Final Fantasy's "Scan" (Libra): information as a resource
- **What it does:** a spell that reveals an enemy's stats.
- **What we might take:** **scanning as an ability**, most naturally for the saboteur/hacker archetype.
  - It costs action points you could otherwise spend fighting, so the trade-off is information versus winning.
  - It feeds the capture decision directly.
  - It gives the hacker an identity beyond jamming.
- **Watch out:** if scanning is too strong, every squad needs a hacker and squads all look alike. It has to be a real cost.

### EverQuest's "consider" and MMO health bars: graded precision
- **What it does:** you get a coarse read on an enemy (a colored difficulty rating, a health bar without exact numbers) rather than all the numbers.
- **What we might take:** **levels of visibility** per kind of information:

  | Level | Your robots | Enemy robots |
  |---|---|---|
  | Exact numbers | Everything | Damage you deal and take |
  | Ranges or noisy values | — | Health, energy, perhaps a few resistances |
  | Qualitative only | — | "RESISTED", "WEAK", "CRITICAL", "GLANCING" |
  | Hidden | — | Armor, genes, internal tuning |

  Scanning could move a piece of enemy information up one level. Which information sits at which level is illustrative.
- **Watch out:** too many layers of precision is its own readability problem on a phone.

### Pokémon's "It's super effective!": qualitative feedback
- **What it does:** a message that reveals a hidden type matchup without numbers, and is satisfying to see.
- **What we might take:** combat text such as "RESISTED", "WEAK POINT" or "OVERLOADED" that hints at hidden properties.

### Hollow Knight's hunter journal and Final Fantasy's bestiary: knowledge that builds up
- **What it does:** each encounter with a kind of enemy fills in more of its entry.
- **What we might take:** your notes on an opponent's lineage grow with every fight against it, including fights against robots descended from it. That fits the theme of rebuilding knowledge from fragments.
- **Watch out:** opponents' robots change through crossing, so notes go stale. That could be a feature, but it needs thought.

### Monster Hunter: reading tells instead of bars
- **What it does:** no enemy health bar. You read the monster's state from its behavior (it limps when weak), and you can break its parts.
- **What we might take:** **visible damage on robots**, such as dented plating, sparks or a lost arm. It carries information without numbers and is more satisfying to watch than a bar. It also pairs naturally with modular parts.
- **Watch out:** it costs art and animation.

### Combat-log analysis (Warcraft Logs, Details!): depth for those who want it
- **What it does:** the community parses detailed combat logs for analysis.
- **What we might take:** **two layers after a match:** a short summary for everyone, and the full log for players who want it.

### Genetic programming (not a game, but the original inspiration)
- **What it does:** programs represented as trees evolve by swapping subtrees, with selection based on how well they perform.
- **What we might take:** the core "select by phenotype, inherit genotype" loop, and subtree swapping on the part tree.
- **Watch out:** most crossovers produce worse offspring. Hence seeing several offspring before choosing, and inheritance tools.

### X-COM: UFO Defense / UFO: Enemy Unknown (1994): time as a budget you can hold back
*The owner played this in the late 90s. Confirmed as the game they remembered.*
- **What it does** (confirmed against UFOpaedia's reaction-fire page):
  - Every action costs Time Units (TUs). A soldier with none left cannot act until next turn.
  - A unit can **reserve TUs** for reaction fire. If it sees an enemy act during the enemy's turn, it can fire.
  - Who shoots first is a contest: reactions stat × (remaining TUs ÷ max TUs). Both humans and aliens use it.
  - Moving while holding reserve can leave a soldier exposed and facing the wrong way.
- **From memory, not verified:** turning costs TUs, vision is roughly a forward half-circle, there is no formal cover system (walls, darkness and smoke instead), and you only see what your soldiers see.
- **What we might take:**
  - **Unspent time as standing readiness.** "Not acting" becomes a decision, and the opponent's phase stops being dead time.
  - **A stat-based initiative contest,** so a robot's character appears as moments in play.
  - **A budget per unit,** which makes readiness local to each robot.
  - **Fog and facing** as the basis for stealth roles.
- **Watch out:** X-COM plays live, so the player is present at every interrupt. In async play reactions have to be standing orders resolved by the engine. Overwatch-style systems tend toward standoffs. As I remember it, the initiative formula felt opaque to many players. See [Turn Mechanics](turn-mechanics.md).

### RoboSport (Maxis, 1991): robot squads, queued timed orders, simultaneous replay
*Lead, not confirmed as a game the owner played. Details below come from a search summary only.*
- **What it does:** you build teams of robots and program each one with point-and-click commands for up to about 15 seconds. Commands include moving, raising or lowering the head (which changes the field of view), firing at a spot, and scanning and firing if an enemy is seen. All players' orders then play out simultaneously. There are five robot types with different weapons. It was one of the first networked games to include replays. Platforms: Mac, Windows (and an Amiga version).
- **Why it matters:** it matches the owner's first remembered game on mechanics (queued orders, interleaved playback, facing, conditional fire) and sits close to this game's theme. It may be that game, or the two memories may have merged.
- **What we might take:** scan-and-fire as a stance. Facing through the head. Replay as a first-class feature.
- **Watch out:** it is direct prior art for robot-squad tactics with simultaneous replay. Turn mechanics will not differentiate us; crossing has to. I have not confirmed the map layout (walls, doors, cover).

### Laser Squad Nemesis (2002): blind simultaneous orders with standing stances
*Per a search summary; not verified further. The year is later than the owner's "late 90s".*
- **What it does:** each turn you give orders to your troops, preview their likely effects, and submit them to a server. Orders resolve simultaneously once both players have submitted. Options include direct fire, terrain fire and **opportunity fire**, and stances such as halt, retreat or continue when an enemy is spotted. Playable species include aliens. The lead designer, Julian Gollop, also designed X-COM and the original Laser Squad.
- **What we might take:** **standing orders as the way to get reactions into a blind, simultaneous system.** Order preview as a way to reduce the cost of blind mistakes.
- **Watch out:** I have not checked how it handled fog, pacing or readability. Same designer as X-COM, so it is partly a lineage check.

### The owner's first remembered game (unidentified): predicting the opponent
- **What the owner remembers:** a 2D turn-based Apple game, played in the 90s on an older machine. Each side writes an ordered list ("move right, move right, face left, shoot..."), and the turn plays out with both sides' steps **interleaved**. Top-down building with walls, doors and hallways. One or two players. Part of the fun was predicting the other side and watching a shot go into an empty corridor. The theme (thieves and police, or something similar) may be a drifted memory.
- **Candidates:** RoboSport (best on mechanics, and fits better if it was a Mac). Galactic Gladiators (SSI, 1982): a planning phase then simultaneous action, per a search summary. Mission Escape! (CE Software, 1980): up to three commands per turn, but apparently single-player. None confirmed.
- **What we might take:** the "catch" feeling. Interleaved resolution makes wrong guesses visible and a bit funny.
- **Watch out:** do not design around details that only rest on memory. See `scratchpad/2026-10-04-turn-mechanics-reference-hunt.md`.

### Already cited elsewhere in the wiki
- **Hero Academy, Frozen Synapse, Into the Breach:** proven async and turn-based squad tactics. That part of our game is well-trodden ground; crossing is what sets it apart.

## How this fits the three-layer blueprint model

The candidate model in [Robots & Blueprints](robots-and-blueprints.md) has hidden **genes**, a visible **part tree** and a readable **stat card**. The references fit it without changes, and each one lands on a specific layer:

| Layer | What feeds it | Which inspiration |
|---|---|---|
| **Genes** (hidden) | Many numbers per robot, hidden per-individual values, rolled affix tiers, maybe recessives | Pokémon IVs, Diablo affixes |
| **Part tree** (visible form) | Parts as base + affixes, subtree swapping, visible damage | Diablo, genetic programming, Monster Hunter |
| **Stat card** (readable) | A few stats, each fed by several genes; abilities from part combinations | Pokémon stats, "egg moves" |
| **Crossing** (acts on genes + parts) | Inheritance tools, bonuses for distant lineages, several offspring to pick from | Pokémon breeding, the Masuda method |
| **Observation** (match → player) | Visibility levels, scanning, qualitative combat text, bestiary, two-layer logs | MMOs, EverQuest, Final Fantasy, Hollow Knight, WoW logs |

**One consequence to flag:** "a robot has a bunch of numbers" means most of the depth sits in the gene layer. That's fine as long as the stat card stays small. The design rule is **many genes, few expressed stats.**

**One risk to flag:** when many genes add up into one stat, offspring cluster around the parents' average. That's the averaging problem again. Something has to break it: recessives, rare mutations, bonuses for distant lineages, or parts that pass to the offspring whole.
