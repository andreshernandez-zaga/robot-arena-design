# Stats & Resolution

> Exploration, not decisions. Part of [Explorations & Benchmarks](README.md). How stats turn into outcomes during the play-out, and how to keep that readable. Started 2026-10-26 from the owner's intuition that D&D-style modifiers could keep outcomes from looking random.

## Where we are

Stats have two kinds of impact (owner, Provisional; see [Match Dynamics](../match-dynamics.md#stats-during-the-play-out)):
- **Modifiers:** numbers that shift other things: damage dealt and taken, armor, a skill's strength, who acts first.
- **Capabilities:** class-like features that change what a robot can do, for example seeing further through the fog.

Open: how a stat becomes an outcome, and how much chance is involved.

### The owner's intuition, tested

*"D&D-style modifiers might offset the risk of things looking overly random."*

- **Partly right.** A d20 roll is very swingy: every result from 1 to 20 is equally likely. Modifiers shift the odds, but they do not make a single roll less random.
- **What makes D&D feel fair is mostly its structure:** a known number to beat, a visible breakdown (roll + modifier against a target), passive values for things that happen all the time, and advantage or disadvantage instead of piles of small bonuses. Players can always see why something happened.
- **So:** borrow the structure, and choose the amount of chance separately.

### Three dials

- **How much chance.** None (fixed values), a bell curve (the sum of a few dice, so results cluster in the middle; 2d6 lands on 6 to 8 almost half the time), or a flat roll (a d20).
- **Where chance applies.** Only some moments roll, such as hits and parries; others use fixed passive values, such as perception.
- **What the player sees.** The full breakdown for their own robots, and qualitative results for enemies ("PARRIED", "GLANCING"). This ties to the visibility levels in [Crossing & Information](crossing-and-information.md#everquests-consider-and-mmo-health-bars-graded-precision).

## Benchmarks

Evidence labels are explained in the [section README](README.md#evidence-labels).

### Dungeons & Dragons (5th edition): modifiers on a roll against a target
*From memory: general knowledge of the rules, not checked against the rulebook.*
- **What it does:**
  - Ability scores become small modifiers (about −1 to +5 for player characters). Most checks are a d20 plus modifiers against a target number: armor class for attacks, a difficulty class for everything else.
  - **Advantage and disadvantage:** in a good or bad situation you roll twice and keep the better or worse result. They do not stack: you either have advantage or you don't, and having both cancels out.
  - **Passive checks:** for things that happen constantly, such as noticing a hidden creature, there is no roll. The value is 10 plus the modifiers.
  - **Initiative:** a d20 plus a dexterity modifier sets the order of a round.
  - **Damage:** a die roll plus a modifier, so a range with a known floor.
  - **Bounded accuracy:** numbers grow slowly as characters level up, so weaker creatures stay relevant and gaps stay small.
  - **Traits and class features** change the rules instead of adding numbers. Darkvision lets a character see in the dark. A rogue's Sneak Attack adds damage when the rogue has advantage or an ally is next to the target.
- **What we might take:**
  - **Base plus modifiers against a target, shown in the replay** ("hit: 14 + 3 against armor 15"). Every outcome explains itself.
  - **Passive values for perception in the fog.** A robot with high acuity simply sees further, with no roll. That turns "a class that looks further" into a clean rule.
  - **Advantage and disadvantage for situations:** facing a threat, being flanked, attacking from a ledge. Readable at a glance, and it gives facing and terrain a clear effect without stacking small numbers.
  - **Bounded numbers.** A crossed robot with better genes is better but not untouchable, which protects against power creep from player-made designs (risk 7).
  - **Features as capabilities.** This matches the three-layer model: genes feed stats (modifiers), and parts give abilities and traits (capabilities). Sneak Attack is also a template for skills that reward positioning.
- **Watch out:**
  - The d20 itself is swingy. If outcomes must read as fair, use a narrower or bell-shaped roll, or fixed values for most checks.
  - Visible breakdowns let players work out stats, which can leak an enemy's blueprint (risk 11). Show the full breakdown for your own robots and less for enemies.
  - D&D resolves one action at a time with a human referee. We resolve whole turns automatically, so contests that depend on timing (who acts first in a beat, reacting to a cast) need rules D&D does not have.

## How it could land

A plausible split (Claude's suggestion, not agreed):
- **No roll** for perception (passive acuity) and for initiative (passive value plus facing and waiting, with a fixed tie-break), so the order of events is always predictable from the plan.
- **A narrow or bell-shaped roll** for hits, parries and damage, so there is some drama but few freak results.
- **Advantage or disadvantage** from facing, waiting, flanking, cover and height, instead of a long list of small modifiers.
- **Shown in the replay:** the breakdown for your robots, qualitative results for enemies.
