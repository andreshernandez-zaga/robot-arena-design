# Turn-Based Mechanics

> Exploration, not decisions. Part of [Explorations & Benchmarks](README.md). Mechanics and numbers are illustrative.

## Where we are

[Matches & Pacing](../matches-and-pacing.md) says turns are simultaneous (Provisional) and that a pool of actions is spent across the squad (illustrative). Those two lines hide several separate choices. This page pulls them apart so each can be decided on its own, then measures them against existing games.

It started from the owner's memories of two old games. What felt good in them was not "turn-based" in general. It was a few specific things:

- **Predicting the opponent and being visibly wrong.** Shooting down an empty hallway because the other side moved.
- **Plan, then watch.** Everything resolves together and you see the result.
- **A robot that is "looking" somewhere** and reacts when something appears.
- **Not acting as a decision.** Held-back time that turns into reactions during the enemy's turn.
- **Fog.** Not seeing everything, which makes hiding possible.

### Five axes

| Axis | The question | Options | Where we are |
|---|---|---|---|
| **A. Orders** | How does the player give instructions? | Live (act, see, act) · queued blind lists · short lists plus standing orders | Async play rules out live-per-action. Blind orders follow from the Provisional "both submit, then watch". The *form* of the orders is Open. |
| **B. Resolution** | How do two sides' orders play out? | Alternating · simultaneous and interleaved (step 1 for everyone, then step 2) · simultaneous but each side's whole list in turn | Simultaneous is Provisional. **Interleaved is Open.** It is what produces the "empty hallway" moments. Running whole lists in turn would kill the guessing. |
| **C. Budget** | What limits what a robot can do in a turn? | One squad pool · a budget per robot · per-robot plus a small shared pool. Slots (n actions) or continuous cost (every action costs a different amount of time) | **Open.** The owner is drawn to per-robot. |
| **D. Readiness** | Does unspent budget stay useful during resolution? | No (spent or wasted) · yes, as standing reactions. If yes: who acts first when two things happen at once? | **Open, owner is drawn to it.** Initiative could be a stat-based contest instead of fixed order. |
| **E. Information** | What can each side see? | Full view · fog by line of sight · fog by line of sight and facing | **Fog is Provisional.** What drives it is Open. |

### How the axes constrain each other

- **Readiness wants a per-robot budget.** Holding time back is a personal choice ("this robot waits"). A squad pool makes that awkward.
- **Async makes readiness a standing order.** The player is not there when the interrupt happens, so it has to be set in advance: where to face, how much to hold, what to do on contact (shoot, hold, fall back). That is where queued orders and reactions meet.
- **Interleaving plus readiness needs a tie-break rule** for when two robots act at the same step.
- **Fog plus blind orders is a lot of uncertainty.** Without counterplay (scouting, sensors, scanning) it will feel arbitrary.
- **Facing matters only if vision depends on it.** Otherwise "look left" is decoration.

### Ideas worth keeping (owner, 2026-10-04)

#### 1. Fog gives stealth roles a mechanism

- **What's interesting:** The Stealth archetype ("fragile, wins through positioning and flanking") currently has nothing in the rules to support it. Fog gives it something real. It also gives scouting and scanning more meaning.
- **Tension:** Fog hides things from the player watching. The core loop depends on watching matches to decide what to cross ([pillar 3](../vision-and-pillars.md): every match is information). Stealth robots would be harder to read, so either they get under-selected for crossing or the replay has to show more than the players saw while planning. See [Risks](../risks-and-critique.md#16-fog-vs-the-match-as-information).
- **Tension:** A stealth class the opponent cannot counter is miserable to play against. Counterplay has to exist, but not at the cost of making scanning mandatory (risk 13).

#### 2. Not acting is a decision

- **What's interesting:** Spend everything on position and you have nothing left for reactions. Hold some back and you are slower but dangerous when someone shows up. This makes the opponent's phase something you take part in, not dead time.
- **What it does for classes:** Roles could be defined by their *posture toward time*, not only by stats and abilities. A holder moves little and reacts well. A skirmisher spends everything and has no guard. A stealth robot positions, then waits to ambush. See [Robots & Blueprints](../robots-and-blueprints.md#roles-as-budget-posture-idea-open).
- **What it does for blueprints:** Reaction speed is a natural hidden trait. It shows up in play as who-shot-first moments. Players can observe it in a replay and infer it, which fits "select by phenotype, inherit genotype".
- **Tension:** If holding is the safest play, nobody advances. With async play and "last squad standing", that stalls matches for days. See [Risks](../risks-and-critique.md#15-readiness-standoffs).
- **Tension:** An initiative contest decided by a formula can read as luck when a robot dies mid-move. That is part of the drama, but it needs to be legible.

#### 3. A budget per robot, not per squad

- **What's interesting:** Each robot becomes an individual with its own capacity. Budget size could be a robot-level trait, and so a heritable one. Every robot can show its own remaining time in a replay. Readiness becomes local.
- **What a squad pool does better:** It creates an allocation puzzle across the squad (who acts this turn) and makes coordination a real decision.
- **Tension:** A squad pool can degenerate into "one robot does everything". A per-robot budget loses the allocation puzzle.
- **Tension:** Planning load. 4–6 robots, each with a budget, orders and a stance, planned blind on a phone, pushes against the relaxed-play pillar ([risk 14](../risks-and-critique.md#14-number-overload-on-mobile)).
- **Possible middle:** A per-robot budget plus a small shared command pool for coordination. Not evaluated.

### Suggested order for settling this

1. **What does the replay show?** The fogged view each player had, or the whole arena? This decides whether fog and stealth fit the core loop.
2. **Budget scope** (per robot, squad pool or hybrid). Readiness depends on it.
3. **Readiness model.** Whether unspent budget carries over, how it is set in advance, how initiative is decided.
4. **Pressure to engage.** What stops a readiness standoff in async play.
5. **Order form.** How long the lists are and what the standing orders are, once 2 and 3 are known.

## Benchmarks

Evidence labels are explained in the [section README](README.md#evidence-labels).

### X-COM: UFO Defense / UFO: Enemy Unknown (1994): time as a budget you can hold back
*The owner played this in the late 90s. Confirmed as the game they remembered.*
- **What it does** (**confirmed** against UFOpaedia's reaction-fire page):
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
- **Watch out:** X-COM plays live, so the player is present at every interrupt. In async play reactions have to be standing orders resolved by the engine. Overwatch-style systems tend toward standoffs. As I remember it, the initiative formula felt opaque to many players.

### RoboSport (Maxis, 1991): robot squads, queued timed orders, simultaneous replay
*Lead, not confirmed as a game the owner played. Details below come from a search summary only.*
- **What it does:** you build teams of robots and program each one with point-and-click commands for up to about 15 seconds. Commands include moving, raising or lowering the head (which changes the field of view), firing at a spot, and scanning and firing if an enemy is seen. All players' orders then play out simultaneously. There are five robot types with different weapons. It was one of the first networked games to include replays. Platforms: Mac, Windows (and an Amiga version).
- **Why it matters:** it matches the owner's first remembered game on mechanics (queued orders, interleaved playback, facing, conditional fire) and sits close to this game's theme. It may be that game, or the two memories may have merged.
- **What we might take:** scan-and-fire as a stance. Facing through the head. Replay as a first-class feature.
- **Watch out:** it is direct prior art for robot-squad tactics with simultaneous replay. Turn mechanics will not differentiate us; crossing has to. I have not confirmed the map layout (walls, doors, cover).

### Laser Squad Nemesis (2002): blind simultaneous orders with standing stances
*Search summary; not verified further. The year is later than the owner's "late 90s".*
- **What it does:** each turn you give orders to your troops, preview their likely effects, and submit them to a server. Orders resolve simultaneously once both players have submitted. Options include direct fire, terrain fire and **opportunity fire**, and stances such as halt, retreat or continue when an enemy is spotted. Playable species include aliens. The lead designer, Julian Gollop, also designed X-COM and the original Laser Squad.
- **What we might take:** **standing orders as the way to get reactions into a blind, simultaneous system.** Order preview as a way to reduce the cost of blind mistakes.
- **Watch out:** I have not checked how it handled fog, pacing or readability. Same designer as X-COM, so it is partly a lineage check.

### Tactics Arena Online (Digital Seed Entertainment, 2003, Flash): one action per turn, per-unit recovery, facing as defense
*The owner played it in the early 2000s. Search summaries only: the original sites were unreachable, so treat the unit numbers as unverified. Sources (not read in full): [rules guide](https://www.digisonline.com/tactics/guide/rules/), [Giant Bomb](https://www.giantbomb.com/games/3030-25056/), [StrategyWiki units](https://strategywiki.org/wiki/Tactics_Arena_Online/Units).*
- **What it does:**
  - Two players, 10 units each, on a grid. Chess-like. You win by destroying or **freezing** all of the opponent's mobile units, or by surrender.
  - **One unit acts per turn:** move, move and attack, attack, or pass. Turns alternate. I found nothing about simultaneous resolution.
  - **Per-unit recovery:** after acting, a unit cannot act again for a number of turns (1 for the Assassin; a five-turn recovery is given as an example).
  - **Facing and blocking:** a unit's last command can be a turn. Attacks can be blocked outright (a miss), with a percentage that is halved from the side and zero from behind. Some attacks are unblockable. Reportedly, blocking chance rises after a unit is hit and falls after a successful block.
  - **Classes with one signature rule.** Example: the Assassin hits all four neighbouring tiles, and below 5 HP can self-destruct for 99 unblockable damage. Reported stats: 35 HP, 4 movement, 70% front block.
  - The developer, a one-person studio, abandoned it for reasons unknown. A community open-source HTML5 remake aims to keep the rules unchanged. There was a paid server ($5 a month) next to the free original.
- **Not found:** fog or any hidden information, how the 10 units are chosen, board size, ladders.
- **What we might take:**
  - **Per-unit recovery as visible readiness.** Who is ready is public state, not a hidden initiative formula. A cleaner alternative to X-COM's reserve for async play.
  - **Facing as defense** (front, side, back) instead of only vision. It gives facing a purpose without cones or fog. *(Idea, not TAO's: it could tie to robot plating, so a heavy front plate and a weak back would be visible in the form.)*
  - **A disable win condition** ("freeze all mobile units"). It shortens matches, so it helps against stalls (risks 9 and 15), and it fits the saboteur role.
  - **One signature rule per class.**
- **Watch out:**
  - Alternating, one-unit-per-turn play removes the guessing that the owner's first game had. With 10 units, a match is a long sequence.
  - Percentage blocks add noise to what a replay tells you. That pushes against the inference-gap dial.
  - The roster is fixed by the designer, so there is no crossing and no hidden blueprint. It benchmarks the turn rules only.
  - The shutdown shows a paid server did not save it, but the cause is unknown, so do not read more into it.

### The owner's first remembered game (unidentified): predicting the opponent
*From the owner's memory only.*
- **What the owner remembers:** a 2D turn-based Apple game, played in the 90s on an older machine. Each side writes an ordered list ("move right, move right, face left, shoot..."), and the turn plays out with both sides' steps **interleaved**. Top-down building with walls, doors and hallways. One or two players. Part of the fun was predicting the other side and watching a shot go into an empty corridor. The theme (thieves and police, or something similar) may be a drifted memory.
- **Candidates:** RoboSport (best on mechanics, and fits better if it was a Mac). Galactic Gladiators (SSI, 1982): a planning phase then simultaneous action, per a search summary. Mission Escape! (CE Software, 1980): up to three commands per turn, but apparently single-player. None confirmed.
- **What we might take:** the "catch" feeling. Interleaved resolution makes wrong guesses visible and a bit funny.
- **Watch out:** do not design around details that only rest on memory. See `scratchpad/2026-10-04-turn-mechanics-reference-hunt.md`.

### Hero Academy, Frozen Synapse, Into the Breach (cited earlier in the wiki)
- Proven async and turn-based squad tactics. That part of our game is well-trodden ground; crossing is what sets it apart. Not examined in detail yet.

## Note on prior art

If the RoboSport summary is accurate, simultaneous robot-squad tactics with queued orders and replays already exists. That fits [Vision & Pillars](../vision-and-pillars.md): turn mechanics are proven and common. Crossing is what sets this game apart, so the turn mechanics should be chosen for fit, not for novelty.
