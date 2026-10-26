# Match Dynamics

> Design page, started 2026-10-26. Everything here is **Provisional** unless marked **Open**. It is a conceptual definition: the actions, stats, modifiers and numbers are placeholders until detail design. The benchmark is RoboSport's overall turn loop (see [Turn-Based Mechanics](explorations/turn-based-mechanics.md#robosport-maxis-1991-robot-squads-queued-timed-orders-simultaneous-replay)). We borrow the shape of the turn, not its content.

## What we borrow and what is ours

| Borrowed from the benchmark (the shape) | Ours to design (the content) |
|---|---|
| Every side plans blind, then the whole turn plays back | The actions and what they cost |
| Each robot has a time budget it spends on orders | The stats, and how they enter each contest |
| Facing is part of the plan | The modifiers (facing, readiness, terrain and so on) |
| Robots can hold a standing reaction | The skills, and how they scale |
| Fog: you only see what your robots see | The variations that make it our game (see [Where it could become ours](#where-it-could-become-ours)) |

## The turn at a glance

1. **Plan.** Every player, human or AI, gives each robot an ordered list of orders within its action budget. Nobody sees the other side's plan. In async play you submit and leave.
2. **Resolve.** The game plays all the lists together, applying stats, facing, readiness and fog as it goes.
3. **Watch.** Both players watch the replay of the turn. What each player sees in it is Open (see [Fog of war](#fog-of-war)).

## Core concepts

### Action budget
- Each robot gets a number of **actions per turn** (e.g. 6). Orders spend them. The unit is actions, not seconds.
- The budget is **per robot**. This is implied by the owner's example and replaces the earlier squad-wide pool. *To confirm.*
- Actions do not carry over to the next turn.

### The timeline (Open: Claude's suggestion)
- The turn is a shared timeline of **beats**, and **one action is one beat**. An order that costs 2 actions takes 2 beats to perform.
- All robots advance beat by beat together. That is what makes the plans interleave, and what produces the shot into an empty hallway.
- **Why it helps:** cost and duration become the same number. An expensive skill is also a slow one, so it can be seen coming and answered. Players only have to read one number.
- **Consequence:** if the budget is the length of the turn, stats would change what actions cost (a fast robot moves for fewer actions) rather than how many actions a robot gets. Open.

### Orders
Kinds of order, not a final list:
- **Move.**
- **Face:** turn toward a direction.
- **Skill:** anything the robot's parts let it do, such as attacking, scanning or repairing.
- **Wait:** hold the remaining actions to react (see [Readiness and reactions](#readiness-and-reactions)).

Every order costs actions. The costs are detail design.

### Facing
- Every robot faces a direction, and changing it costs actions.
- Facing a threat improves the robot's **initiative** against it: a better chance to act first, or to react well. Attacks from outside its facing are harder to answer. This is what makes flanking and positioning matter.
- Open: whether facing also decides what the robot can see (a vision arc), and whether it changes defense directly, as front, side and back blocking does in Tactics Arena Online.

### Readiness and reactions
- A **Wait** order holds the robot's remaining actions from that point in the turn. The owner's example: move 1 forward, face right, wait to react.
- While waiting, if something triggers the robot (for example an enemy appears or attacks it), it can spend held actions on a **reaction**: parry or evade, counter, or a reaction skill.
- Waiting improves the chance of parrying an attack or acting first.
- If nothing triggers the robot, the held actions are **lost**. That is the price: waiting can waste the rest of a turn.
- Open: whether actions left over at the end of a list wait automatically, or only after an explicit Wait.

### Initiative
- When two robots act on the same beat, or an attack meets a waiting robot, an **initiative contest** decides what happens first.
- Inputs, conceptually: the robots' stats, whether each faces the other, and whether either is waiting.
- Open: a fixed comparison or a weighted roll (see [risk 18](risks-and-critique.md#18-chance-in-stat-contests)).

### Fog of war
- Each side only sees what its robots perceive. What a robot perceives depends on its stats, and probably on its facing.
- You write orders against what you last saw, so predicting the opponent is the skill.
- Open: what reveals a robot (moving, attacking, scanning), and what the replay shows each player.

### Stats during the play-out
Stats act during resolution, not only on the stat card. The moments where the game would consult them:
- who acts first (initiative)
- whether an attack lands, or is parried or evaded
- what a robot perceives through the fog
- how strong a skill is, and possibly what it costs
- how much damage a robot can take

Which stats exist, and the formulas, are detail design. The rule from Robots & Blueprints still holds: many hidden genes, few expressed stats.

### Skills
- Unique skills matter a lot. Each costs actions, and so takes time on the timeline.
- A skill's **spec** (range, power, area, cost) may improve with the robot's stats. Two robots with the same skill can then perform differently, and players can see that in the replay.
- Open: how a robot "improves its stats". So far the wiki only changes robots through crossing (new offspring), not through play.

## Worked example (illustrative only)

Two robots with 6 actions each. Every order costs 1 action except B's attack, which costs 2.

| Beat | Robot A (the owner's example) | Robot B |
|---|---|---|
| 1 | Move forward | Move |
| 2 | Face right | Move |
| 3 | Wait (holds 4 actions) | Move: now in front of A's new facing |
| 4 | Triggered: B starts an attack. A reacts | Attack begins (2 actions) |
| 5 | Parry (spends 2 held actions). A faces B and is waiting, so it has the edge | Attack lands unless parried |
| 6 | 2 held actions unused, so lost | Move away |

If B had come from A's left, outside its facing, A would have had a worse chance or no reaction at all. If B had not come, A would have wasted its last 4 actions.

## Where it could become ours

Candidates only, not decided:
- **Reactions as robot instinct.** In async play the player is not there when a trigger happens, so something has to decide how a robot spends its held actions. That could come from the robot's blueprint (the parked "control logic" idea in [Robots & Blueprints](robots-and-blueprints.md)). Reaction behavior would then be inherited and crossed, which ties the turn to the game's core differentiator.
- More ideas to weigh are in the RoboSport benchmark: delayed effects, firing that reveals the shooter, objective modes, a Beginner-to-Standard setup ramp.

## Tensions to watch

- **Planning load.** Orders for 4–6 robots on a phone ([risk 17](risks-and-critique.md#17-planning-load-with-per-robot-budgets)). A small budget per robot helps.
- **Wasted waits.** The owner accepts the cost, but if it happens too often a turn feels lost.
- **Standoffs.** If waiting is the safe play, nobody advances ([risk 15](risks-and-critique.md#15-readiness-standoffs)).
- **Readable resolution.** The replay has to show why things happened: who won initiative, what was parried, what each robot could see.
- **Chance and inference.** Rolls in stat contests make outcomes harder to read and robots harder to infer ([risk 18](risks-and-critique.md#18-chance-in-stat-contests)).
- **Simultaneous edge cases.** Two robots entering the same space, or an attack aimed at a robot that has moved.

## Needs detail design

- [ ] The list of actions and what each costs
- [ ] Stats: which, how many, and how they enter each contest
- [ ] Modifiers: facing (front, side, back), waiting, terrain, cover
- [ ] Budget size, and whether stats change the budget or the costs
- [ ] Timeline: confirm one action = one beat; what happens to an order unfinished at the end of the turn
- [ ] Reactions: triggers, which reactions exist, how many per turn, and how they are set in advance
- [ ] Initiative: the rule, ties, and whether it is fixed or rolled
- [ ] Targeting: aim at a robot or at a place (a place makes the empty-hallway miss possible)
- [ ] Movement conflicts: two robots into one space, swaps, blocking
- [ ] Fog: perception rules, what reveals a robot, what the replay shows
- [ ] Skills: format, scaling with stats, limits such as cooldowns
- [ ] Damage, disabling and win conditions, including objective modes
