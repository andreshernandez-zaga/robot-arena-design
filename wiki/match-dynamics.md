# Match Dynamics

> Design page, started 2026-10-26. Everything here is **Provisional** unless marked **Open**. It is a conceptual definition: the actions, stats, modifiers and numbers are placeholders until detail design. The benchmark is RoboSport's overall turn loop (see [Turn-Based Mechanics](explorations/turn-based-mechanics.md#robosport-maxis-1991-robot-squads-queued-timed-orders-simultaneous-replay)). We borrow the shape of the turn, not its content.

## What we borrow and what is ours

| Borrowed from the benchmark (the shape) | Ours to design (the content) |
|---|---|
| Every side plans blind, then the whole turn plays back | The actions and what they cost |
| Orders spend a time budget (ours is shared by the squad) | The stats, and how they enter each contest |
| Facing is part of the plan | The modifiers (facing, readiness, terrain and so on) |
| Robots can hold a standing reaction | The skills, and how they scale |
| Fog: you only see what your robots see | The variations that make it our game (see [Where it could become ours](#where-it-could-become-ours)) |

## The turn at a glance

1. **Plan.** Every player, human or AI, gives orders to the robots they choose, spending the squad's action pool. Nobody sees the other side's plan. In async play you submit and leave.
2. **Resolve.** The game plays all orders together, beat by beat, applying stats, facing, readiness, terrain and fog.
3. **Watch.** Both players watch the replay of the turn. What each player sees in it is Open (see [Fog of war](#fog-of-war)).

## Core concepts

### Action budget: one pool for the squad
- The squad shares **one pool of actions per turn** (e.g. 10). The player decides how to spread it: most of it on one robot, or a little on each. *(Changed 2026-10-26: replaces the per-robot budget.)*
- Robots can be left without orders, which keeps planning light on a phone.
- Actions do not carry over to the next turn.
- Open: the pool size, and what a robot with no orders does. Candidate: it holds its position and facing, and can still react if the squad holds a reserve.

### The timeline
- The turn is a shared timeline of **beats**, and **one action is one beat**. An order that costs 2 actions takes 2 beats to perform. *(Accepted 2026-10-26.)*
- All robots advance beat by beat together. That is what makes the plans interleave, and what produces the shot into an empty hallway.
- Two numbers define a turn: the **pool** (how much the squad can do) and the **turn length** in beats (how long the turn lasts). A robot does at most one action per beat, so the turn length caps how much of the pool one robot can use. That keeps "one robot does everything" in check.
- **Cast time.** A skill that costs several actions takes several beats, so a prepared robot (waiting, facing the right way) can react before it lands. Being prepared lets a player play safe without predicting exactly, which can lower the planning load.
- Open: whether stats change what actions cost (a fast robot moves for fewer actions), and what happens to an order unfinished at the end of the turn.

### Orders
Kinds of order, not a final list:
- **Move.**
- **Face:** turn toward a direction.
- **Skill:** anything the robot's parts let it do, such as attacking, scanning or repairing.
- **Wait:** hold actions to react (see [Readiness and reactions](#readiness-and-reactions)).

Every order costs actions. The costs are detail design.

### Facing
- Every robot faces a direction, and changing it costs actions.
- Facing a threat improves the robot's **initiative** against it: a better chance to act first, or to react well. Attacks from outside its facing are harder to answer. This is what makes flanking and positioning matter.
- Facing only means something if the board gives reasons to watch a direction (see [Board and terrain](#board-and-terrain)).
- Open: whether facing also decides what the robot can see (a vision arc), and whether it changes defense directly, as front, side and back blocking does in Tactics Arena Online.

### Readiness and reactions
- A **Wait** order holds actions from the squad's pool for that robot, from that point in the turn. The owner's example: move 1 forward, face right, wait to react.
- While waiting, if something triggers the robot (for example an enemy appears or attacks it), it can spend held actions on a **reaction**: parry or evade, counter, or a reaction skill.
- Waiting improves the chance of parrying an attack or acting first.
- If nothing triggers the robot, the held actions are **lost**. That is the price: waiting can waste part of the pool.
- Open (candidate): actions the squad leaves unspent form a **shared reserve**, and any waiting robot can draw on it when triggered. That is simpler to plan than assigning a reserve robot by robot.

### Initiative
- When two robots act on the same beat, or an attack meets a waiting robot, an **initiative contest** decides what happens first.
- Inputs, conceptually: the robots' stats, whether each faces the other, and whether either is waiting.
- Open: a fixed comparison or a roll. A D&D-style passive value is one option (see [Stats & Resolution](explorations/stats-and-resolution.md)).

### Fog of war
- Each side only sees what its robots perceive. What a robot perceives depends on its stats and capabilities, and probably on its facing. Some robots can see further (acuity).
- You write orders against what you last saw, so predicting the opponent is the skill.
- Terrain shapes sight: walls block it, ledges and windows extend it in one direction.
- Open: what reveals a robot (moving, attacking, scanning), and what the replay shows each player.

### Stats during the play-out
Stats have two kinds of impact (owner, 2026-10-26):
- **Modifiers:** numbers that shift everything else: damage dealt and taken, armor, a skill's strength, the order of actions.
- **Capabilities:** class-like features that change what a robot can do, for example seeing further through the fog.

This matches the three-layer model in [Robots & Blueprints](robots-and-blueprints.md): hidden genes feed the stats (modifiers), and parts give abilities and traits (capabilities). The game would consult stats when deciding:
- who acts first (initiative)
- whether an attack lands, or is parried or evaded
- what a robot perceives through the fog
- how strong a skill is, and possibly what it costs
- how much damage a robot can take

**Resolution style (Open, being explored).** D&D-style rules are the inspiration: a base value plus modifiers against a target number, shown in the replay; passive values for things that happen all the time, such as noticing an enemy; advantage or disadvantage for situations such as facing, flanking or height. The owner's intuition is that this can keep outcomes from looking random. See [Stats & Resolution](explorations/stats-and-resolution.md) for what holds up and what doesn't. Which stats exist, and the formulas, are detail design.

### Skills
- Unique skills matter a lot. Each costs actions, and so takes time on the timeline (its cast time).
- Stats modify skills, so a skill's **spec** (range, power, area, cost) improves with the robot's stats. Two robots with the same skill can then perform differently, and players can see that in the replay.
- Stats improve only through crossing for now. Other ways of learning are in the backlog (see [Progression & Memory](progression-and-memory.md#backlog-parked-ideas)).

### Board and terrain
A new design area. Facing and waiting only matter when the board gives reasons to watch a direction. Terrain roles, conceptually:
- **Barriers:** block movement and sight, such as walls.
- **Low cover:** blocks movement or some attacks, but not sight, such as fences and low walls. In RoboSport, low walls stop grenades and missiles.
- **Chokepoints:** narrow passages where a waiting robot facing the gap has the edge.
- **Ledges and windows:** height and openings that let a robot see or attack in one direction while staying protected.
- **Other interactions** still to find, such as doors, destructible cover and hazards.

Open: a grid or free movement. Facing and terrain push toward a grid (squares or hexes), which also fixes how many directions a robot can face. Decide this early, because ranges, vision and movement all depend on it. This section may become its own page.

## Worked example (illustrative only)

Two opposing robots in a 6-beat turn. Each side spends part of its squad's pool on its robot. Every order costs 1 action except B's attack, which costs 2.

| Beat | Robot A (the owner's example) | Robot B |
|---|---|---|
| 1 | Move forward | Move |
| 2 | Face right | Move |
| 3 | Wait (holds 4 of its squad's actions) | Move: now in front of A's new facing |
| 4 | Triggered: B starts an attack. A reacts | Attack begins: 2 actions, so it takes 2 beats to land |
| 5 | Parry (spends 2 held actions). A faces B and is waiting, so it has the edge | Attack lands unless parried |
| 6 | 2 held actions unused, so lost | Move away |

If B had come from A's left, outside its facing, A would have had a worse chance or no reaction at all. If B had not come, A's side would have wasted 4 actions of its pool.

## Where it could become ours

Candidates only, not decided:
- **Reactions as robot instinct.** In async play the player is not there when a trigger happens, so something has to decide how a robot spends its held actions. That could come from the robot's blueprint (the parked "control logic" idea in [Robots & Blueprints](robots-and-blueprints.md)). Reaction behavior would then be inherited and crossed, which ties the turn to the game's core differentiator.
- More ideas to weigh are in the RoboSport benchmark: delayed effects, firing that reveals the shooter, objective modes, a Beginner-to-Standard setup ramp.

## Tensions to watch

- **Planning load.** A squad pool only lightens planning if leaving robots idle is a real option, and idle robots need a sensible default ([risk 17](risks-and-critique.md#17-planning-load)).
- **Concentration.** Pouring the pool into one robot is a real choice, but the turn length caps it. Watch whether one strong robot plus idle support becomes the only good play.
- **Wasted waits.** The owner accepts the cost, but if it happens too often a turn feels lost.
- **Standoffs.** If waiting is the safe play, and cast times make reacting easy, nobody advances ([risk 15](risks-and-critique.md#15-readiness-standoffs)).
- **Readable resolution.** The replay has to show why things happened: who won initiative, what was parried, what each robot could see.
- **Chance and inference.** Rolls in stat contests make outcomes harder to read and robots harder to infer ([risk 18](risks-and-critique.md#18-chance-in-stat-contests)).
- **Simultaneous edge cases.** Two robots entering the same space, or an attack aimed at a robot that has moved.

## Needs detail design

- [ ] The list of actions and what each costs, including cast times
- [ ] Pool size and turn length (beats); default behavior for robots without orders
- [ ] Stats: which, how many, and how they enter each contest
- [ ] Capabilities: which ones exist (acuity and others), and where they come from (parts, classes)
- [ ] Resolution style: how much chance, of what shape, and which checks are passive (see [Stats & Resolution](explorations/stats-and-resolution.md))
- [ ] Modifiers: facing (front, side, back), waiting, terrain, cover, height
- [ ] Whether stats change action costs
- [ ] Timeline: what happens to an order unfinished at the end of the turn
- [ ] Reactions: triggers, which reactions exist, how many per turn, how they are set in advance, and whether the squad has a shared reserve
- [ ] Initiative: the rule, ties, and whether it is fixed or rolled
- [ ] Targeting: aim at a robot or at a place (a place makes the empty-hallway miss possible)
- [ ] Movement conflicts: two robots into one space, swaps, blocking
- [ ] Fog: perception rules, what reveals a robot, what the replay shows
- [ ] Skills: format, how stats scale them, limits such as cooldowns
- [ ] Board: grid or not, square or hex, terrain types and how they interact with facing
- [ ] Damage, disabling and win conditions, including objective modes
