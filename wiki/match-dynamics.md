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
2. **Resolve.** The game plays all orders together, tempo by tempo, applying stats, facing, readiness, terrain and fog.
3. **Watch.** Both players watch the replay of the turn. What each player sees in it is Open (see [Fog of war](#fog-of-war)).

## Core concepts

### Action budget: one pool for the squad
- The squad shares **one pool of 15 actions per turn** (the owner's baseline, 2026-10-26). The player decides how to spread it: most of it on one robot, or a little on each. *(Replaces the per-robot budget.)*
- **Bonus actions (Open):** abilities or bonuses might add 1 or 2 actions in a turn. The mechanics are not defined yet.
- Robots can be left without orders, which keeps planning light on a phone.
- Actions do not carry over to the next turn.
- Open: what a robot with no orders does. Candidate: it holds its position and facing, and can still react if the squad holds a reserve.

### The timeline: tempos
- The turn is a shared timeline of **tempos**. Every order takes time, measured in tempos. The owner's defaults (2026-10-26; numbers illustrative):
  - most actions take **2 tempos**
  - simple actions, such as turning one hex side, take **1**
  - skills start at **2**, and a longer cast leaves time for prepared robots to react
  - a robot that is extraordinarily good at an action can do it in **1** (or 1.5, if fractions can be made to work)
  - reactions take **1** by default (see [Readiness and reactions](#readiness-and-reactions))
- From these defaults we can build a scale to balance the game.
- All robots advance tempo by tempo together. That is what makes the plans interleave, and what produces the shot into an empty hallway.
- **Stats and classes change timing.** Examples only, since stats are not settled: high agility makes moving and turning a little faster, which wins against a robot doing the same thing with lower agility; high strength means more weight, which slows movement.
- **Two currencies.** An order spends **actions** from the squad's pool and takes **tempos** of time. The pool counts **orders, not tempos** (owner, 2026-10-26), so the pool is how much you do and tempos are how fast. *(Replaces "one action = one beat".)*
- **Robots act in tandem.** Each robot has its own track of tempos, and all tracks run at the same time. One robot never waits for another to finish. Tempos matter per robot: they decide when each of its orders happens relative to everyone else's.
- **Turn length: 16 tempos** to start (owner, 2026-10-26; tune in testing, see [Tuning Values](tuning-values.md)). It caps what one robot can do: about 8 standard actions, so spending the 15-action pool takes at least two robots.
- **Granularity (Open).** With standard actions at 2 tempos, saving 1 tempo is a 50% speed-up, which is too coarse for "a tiny bit faster". Two ways out: a finer unit (for example, a standard action is 4 ticks), or let small stat differences decide the order *within* a tempo (initiative) and keep tempo cuts for real excellence. Claude's lean: the second.
- **Cast time.** A slow skill can be seen coming, and a prepared robot can react before it lands. Being prepared lets a player play safe without predicting exactly, which can lower the planning load.
- Open: what happens to an order unfinished at the end of the turn.

### Orders
Kinds of order, not a final list:
- **Move.**
- **Face:** turn toward a direction.
- **Skill:** anything the robot's parts let it do, such as attacking, scanning or repairing.
- **Wait:** hold actions to react (see [Readiness and reactions](#readiness-and-reactions)).

Every order spends actions from the pool and takes time in tempos. Both are detail design.

### Facing
- Every robot faces one of the six sides of its hex. Turning one side is a simple action (1 tempo).
- **Front, side and back differ** (owner, 2026-10-26). An attack from the front is easiest to answer, from the side harder, from the back hardest. Candidate split (Claude's suggestion): front is the faced side and its two neighbours (3 sides), the sides are the next two, and the back is the one opposite.
- Facing a threat improves the robot's initiative against it and lets it react defensively (see below). This is what makes flanking and positioning matter.
- Facing only means something if the board gives reasons to watch a direction (see [Board and terrain](#board-and-terrain)).
- Open: whether facing also decides what the robot can see (a vision arc).

### Readiness and reactions
- **Facing gives defense.** A robot facing an attack can react with a defensive move: dodge, parry or similar. Reactions take 1 tempo by default, and modifiers can change that.
- **Saved actions add offense.** If a robot keeps actions unspent (the owner's example: face right, keep the 3 remaining actions), it can also attack or counterattack when triggered. That sets up ambushes and traps.
- If nothing triggers the robot, saved actions are **lost**. That is the price of waiting.
- **Autonomy.** Reactions happen without the player, so robots seem to act on their own. The owner finds that attractive (see [Where it could become ours](#where-it-could-become-ours)).
- **Defensive reactions are free** to start (owner, 2026-10-26). A robot dodges or parries what it faces without spending actions. That gives robots a sense of autonomy, and leaves the player to care about the strategic maneuvers. Alternative kept for later: a defensive reaction spends actions from the next turn's pool.
- **Guardrails if free defense proves too strong** (candidates, Claude's suggestion):
  - **Arc:** full chance from the front, worse from the side, none from the back. Flanking is the answer to a defender.
  - **Time:** free in actions, not in time. The reaction takes 1 tempo on the robot's own track, which pushes its next order back (and can push its last order past the end of the turn).
  - **Cap:** a limit on free defensive reactions per robot per turn, as a tuning value.
- **Where saved actions come from (Open).** Three models:
  - **Held per robot.** Saved actions belong to one robot. Precise, but the player has to guess which robot will be attacked.
  - **Shared reserve.** The player leaves part of the pool unspent, and any waiting robot can draw on it. Less planning, but very flexible defense, which can push toward standoffs.
  - **Mix (Claude's lean).** A shared reserve, but only robots that are waiting and facing the trigger can draw on it, with a cap per reaction.

  The owner's example ("keep the 3 remaining actions" on one robot) reads like holding them per robot, or the mix.
- Open: can a reaction trigger another reaction? Claude's lean: no, to keep the replay readable.

### Initiative
- When two robots act in the same tempo, or an attack meets a waiting robot, an **initiative contest** decides what happens first.
- Inputs, conceptually: the robots' stats (for example agility), whether each faces the other, and whether either is waiting. Small stat differences could decide the order within a tempo (see Granularity above).
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

**Hex grid** (decided 2026-10-26, Provisional): no free movement. A robot faces one of the six hex sides, which gives natural front, flank and rear arcs. Open: board sizes, and which sides count as front, flank and rear. This section may become its own page.

## Worked example (illustrative only)

Two opposing robots. Most actions take 2 tempos, a facing step takes 1, and a reaction takes 1. A's parry is free; its counter spends a saved action.

| Tempo | Robot A (the owner's example) | Robot B |
|---|---|---|
| 1–2 | Move forward | Move |
| 3 | Face right, then wait with 3 saved actions | Move (tempos 3–4), ending in front of A |
| 5 | Triggered: B starts an attack in A's front arc | Attack begins (2 tempos) |
| 6 | Parry (1 tempo, free). A faces B and is ready, so it wins the contest | Attack lands now, but is parried |
| 7–8 | Counterattack (2 tempos, 1 saved action) | Caught mid-turn |
| End | 2 saved actions unused, so lost | |

From the side, A's parry would be harder; from the back, A could not react at all. If B had never come, A's side would have lost 3 actions of its pool.

## Where it could become ours

Candidates only, not decided:
- **Reactions as robot instinct.** In async play the player is not there when a trigger happens, so something has to decide how a robot spends its held actions. That could come from the robot's blueprint (the parked "control logic" idea in [Robots & Blueprints](robots-and-blueprints.md)). Reaction behavior would then be inherited and crossed, which ties the turn to the game's core differentiator.
- **Stances, one tap each** (2026-10-26 spitball). When a robot saves actions, the player picks a stance: Guard (defend), Ambush (strike the first enemy that enters the front arc), Counter (parry, then strike) or Fall back. Light on a phone, and the replay can show it.
- **Instinct fills in the rest.** The blueprint decides what the stance leaves open, such as which target to pick or when to give up waiting. Patience or aggression could then be inherited through crossing.
- **Weight as one stat with two effects.** Mass adds armor and stability but costs tempo, and it shows in the robot's form (heavy looks heavy).
- **A trap works once.** As in RoboSport, striking reveals the ambusher, so ambushes are a one-shot surprise rather than a permanent wall.
- More ideas to weigh are in the RoboSport benchmark: delayed effects, firing that reveals the shooter, objective modes, a Beginner-to-Standard setup ramp.

## Tensions to watch

- **Planning load.** A squad pool only lightens planning if leaving robots idle is a real option, and idle robots need a sensible default ([risk 17](risks-and-critique.md#17-planning-load)).
- **Concentration.** Pouring the pool into one robot is a real choice, but the turn length caps it. Watch whether one strong robot plus idle support becomes the only good play.
- **Bonus actions can snowball.** If extra actions come from winning exchanges, the side that is ahead gets further ahead. Tie them to abilities with a cost.
- **Wasted waits.** The owner accepts the cost, but if it happens too often a turn feels lost.
- **Standoffs.** If waiting is the safe play, and free 1-tempo defense beats 2-tempo attacks, nobody advances. Flanking, fog and the cost of reacting must keep attacking worthwhile ([risk 15](risks-and-critique.md#15-readiness-standoffs)).
- **Too many modifiers.** If every stat shifts the timing of every action, the replay stops being readable. Keep a few modifiers, and show them.
- **Readable resolution.** The replay has to show why things happened: who won initiative, what was parried, what each robot could see.
- **Chance and inference.** Rolls in stat contests make outcomes harder to read and robots harder to infer ([risk 18](risks-and-critique.md#18-chance-in-stat-contests)).
- **Simultaneous edge cases.** Two robots entering the same space, or an attack aimed at a robot that has moved.

## Needs detail design

- [ ] The list of actions, each with its action cost and its time in tempos, including cast times
- [ ] The tempo scale: unit size, default times, and how stats and classes shift them
- [ ] Bonus actions, and default behavior for robots without orders (turn length starts at 16 tempos; see [Tuning Values](tuning-values.md))
- [ ] Stats: which, how many, and how they enter each contest
- [ ] Capabilities: which ones exist (acuity and others), and where they come from (parts, classes)
- [ ] Resolution style: how much chance, of what shape, and which checks are passive (see [Stats & Resolution](explorations/stats-and-resolution.md))
- [ ] Modifiers: facing arcs (which hex sides are front, side, back), waiting, terrain, cover, height
- [ ] Timeline: what happens to an order unfinished at the end of the turn
- [ ] Reactions: triggers, which reactions exist, how many per turn, how they are set in advance, where saved actions come from (held per robot, shared reserve, or a mix), guardrails for free defense (arc, time, cap), stances, and whether reactions can trigger reactions
- [ ] Initiative: the rule, ties, and whether it is fixed or rolled
- [ ] Targeting: aim at a robot or at a place (a place makes the empty-hallway miss possible)
- [ ] Movement conflicts: two robots into one space, swaps, blocking
- [ ] Fog: perception rules, what reveals a robot, what the replay shows
- [ ] Skills: format, how stats scale them, limits such as cooldowns
- [ ] Board: map sizes, facing arcs on the hex grid, terrain types and how they interact with facing
- [ ] Damage, disabling and win conditions, including objective modes
