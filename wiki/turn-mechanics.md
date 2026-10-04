# Turn Mechanics

> Design-space exploration. Nothing here is chosen unless marked Provisional. Mechanics and numbers are illustrative.

## Why this page exists

[Matches & Pacing](matches-and-pacing.md) says turns are simultaneous (Provisional) and that a pool of actions is spent across the squad (illustrative). Those two lines hide several separate choices. This page pulls them apart so each can be decided on its own.

It started from the owner's memories of two old games (see [Inspirations](inspirations.md)). What felt good in them was not "turn-based" in general. It was a few specific things:

- **Predicting the opponent and being visibly wrong.** Shooting down an empty hallway because the other side moved.
- **Plan, then watch.** Everything resolves together and you see the result.
- **A robot that is "looking" somewhere** and reacts when something appears.
- **Not acting as a decision.** Held-back time that turns into reactions during the enemy's turn.
- **Fog.** Not seeing everything, which makes hiding possible.

## Five axes

| Axis | The question | Options | Where we are |
|---|---|---|---|
| **A. Orders** | How does the player give instructions? | Live (act, see, act) · queued blind lists · short lists plus standing orders | Async play rules out live-per-action. Blind orders follow from the Provisional "both submit, then watch". The *form* of the orders is Open. |
| **B. Resolution** | How do two sides' orders play out? | Alternating · simultaneous and interleaved (step 1 for everyone, then step 2) · simultaneous but each side's whole list in turn | Simultaneous is Provisional. **Interleaved is Open.** It is what produces the "empty hallway" moments. Running whole lists in turn would kill the guessing. |
| **C. Budget** | What limits what a robot can do in a turn? | One squad pool · a budget per robot · per-robot plus a small shared pool. Slots (n actions) or continuous cost (every action costs a different amount of time) | **Open.** The owner is drawn to per-robot. |
| **D. Readiness** | Does unspent budget stay useful during resolution? | No (spent or wasted) · yes, as standing reactions. If yes: who acts first when two things happen at once? | **Open, owner is drawn to it.** Initiative could be a stat-based contest instead of fixed order. |
| **E. Information** | What can each side see? | Full view · fog by line of sight · fog by line of sight and facing | **Fog is Provisional.** What drives it is Open. |

## How the axes constrain each other

- **Readiness wants a per-robot budget.** Holding time back is a personal choice ("this robot waits"). A squad pool makes that awkward.
- **Async makes readiness a standing order.** The player is not there when the interrupt happens, so it has to be set in advance: where to face, how much to hold, what to do on contact (shoot, hold, fall back). That is where queued orders and reactions meet.
- **Interleaving plus readiness needs a tie-break rule** for when two robots act at the same step.
- **Fog plus blind orders is a lot of uncertainty.** Without counterplay (scouting, sensors, scanning) it will feel arbitrary.
- **Facing matters only if vision depends on it.** Otherwise "look left" is decoration.

## Ideas worth keeping (owner, 2026-10-04)

### 1. Fog gives stealth roles a mechanism

- **What's interesting:** The Stealth archetype ("fragile, wins through positioning and flanking") currently has nothing in the rules to support it. Fog gives it something real. It also gives scouting and scanning more meaning.
- **Tension:** Fog hides things from the player watching. The core loop depends on watching matches to decide what to cross ([pillar 3](vision-and-pillars.md): every match is information). Stealth robots would be harder to read, so either they get under-selected for crossing or the replay has to show more than the players saw while planning. See [Risks](risks-and-critique.md#16-fog-vs-the-match-as-information).
- **Tension:** A stealth class the opponent cannot counter is miserable to play against. Counterplay has to exist, but not at the cost of making scanning mandatory (risk 13).

### 2. Not acting is a decision

- **What's interesting:** Spend everything on position and you have nothing left for reactions. Hold some back and you are slower but dangerous when someone shows up. This makes the opponent's phase something you take part in, not dead time.
- **What it does for classes:** Roles could be defined by their *posture toward time*, not only by stats and abilities. A holder moves little and reacts well. A skirmisher spends everything and has no guard. A stealth robot positions, then waits to ambush. See [Robots & Blueprints](robots-and-blueprints.md#roles-as-budget-posture-idea-open).
- **What it does for blueprints:** Reaction speed is a natural hidden trait. It shows up in play as who-shot-first moments. Players can observe it in a replay and infer it, which fits "select by phenotype, inherit genotype".
- **Tension:** If holding is the safest play, nobody advances. With async play and "last squad standing", that stalls matches for days. See [Risks](risks-and-critique.md#15-readiness-standoffs).
- **Tension:** An initiative contest decided by a formula can read as luck when a robot dies mid-move. That is part of the drama, but it needs to be legible.

### 3. A budget per robot, not per squad

- **What's interesting:** Each robot becomes an individual with its own capacity. Budget size could be a robot-level trait, and so a heritable one. Every robot can show its own remaining time in a replay. Readiness becomes local.
- **What a squad pool does better:** It creates an allocation puzzle across the squad (who acts this turn) and makes coordination a real decision.
- **Tension:** A squad pool can degenerate into "one robot does everything". A per-robot budget loses the allocation puzzle.
- **Tension:** Planning load. 4–6 robots, each with a budget, orders and a stance, planned blind on a phone, pushes against the relaxed-play pillar ([risk 14](risks-and-critique.md#14-number-overload-on-mobile)).
- **Possible middle:** A per-robot budget plus a small shared command pool for coordination. Not evaluated.

## Suggested order for settling this

1. **What does the replay show?** The fogged view each player had, or the whole arena? This decides whether fog and stealth fit the core loop.
2. **Budget scope** (per robot, squad pool or hybrid). Readiness depends on it.
3. **Readiness model.** Whether unspent budget carries over, how it is set in advance, how initiative is decided.
4. **Pressure to engage.** What stops a readiness standoff in async play.
5. **Order form.** How long the lists are and what the standing orders are, once 2 and 3 are known.

## References

All in [Inspirations](inspirations.md):

- **X-COM: UFO Defense:** Time Units, reserved TUs, reaction fire.
- **RoboSport:** robot squads, queued timed orders, simultaneous replay. Prior art for this whole page.
- **Laser Squad Nemesis:** blind simultaneous orders with standing stances and opportunity fire.
- **The owner's remembered Apple game:** still unidentified.

**Note on prior art:** If the RoboSport summary is accurate, simultaneous robot-squad tactics with queued orders and replays already exists. That fits [Vision & Pillars](vision-and-pillars.md): turn mechanics are proven and common. Crossing is what sets this game apart, so the turn mechanics should be chosen for fit, not for novelty.
