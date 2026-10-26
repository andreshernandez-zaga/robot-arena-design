# Decision Log

All decisions are **provisional** unless marked otherwise.

| Date | Decision | Status |
|---|---|---|
| 2026-10-03 | Blueprint crossing is the core of the game | Provisional |
| 2026-10-03 | Async, turn-based, relaxed mobile play | Provisional |
| 2026-10-03 | Only the outside view (form + observed play) is visible before committing; commitment is irreversible | Provisional |
| 2026-10-03 | Acquiring a blueprint copies it; opponent loses nothing | Provisional |
| 2026-10-03 | Limited blueprint memory (slots) and limited crossings | Provisional |
| 2026-10-03 | Winners get more access than losers; losers still get something | Provisional |
| 2026-10-03 | Crossing does not guarantee improvement | Provisional |
| 2026-10-03 | A robot's appearance should reflect its blueprint | Provisional |
| 2026-10-03 | Self-play/simulation exists as a non-PvP way to evolve | Provisional |
| 2026-10-03 | Start with predefined archetype blueprints | Provisional |
| 2026-10-03 | No robot aging for now | Provisional |
| 2026-10-03 | Keep squads over 1v1 (leaning) | Open |
| 2026-10-03 | Blueprints use a hybrid model: a cross-friendly structure underneath that resolves into something readable for the player (exact layers Open) | Provisional |
| 2026-10-03 | Crossing produces several offspring; you see each one's form and plan before choosing what goes into a slot | Provisional |
| 2026-10-03 | The opponent's plan is only revealed after you commit to it; no plan view straight from the match | Provisional |
| 2026-10-03 | Simultaneous turns: both submit, then both watch the replay | Provisional |
| 2026-10-03 | Matches show a replay plus data (damage, actions per turn, ability notices); after the match there's a replay, log or summary | Provisional |
| 2026-10-03 | How to improve crossing odds (filter vs. directed breeding vs. locks vs. test runs) | Open |
| 2026-10-03 | Size of the inference gap and how much numeric detail matches show | Open |
| 2026-10-03 | Generous numbers in matches; reverse-engineering the rules is welcome, but not a specific opponent's full blueprint. Supersedes "outcomes, not formulas" | Provisional |
| 2026-10-03 | Robots carry many hidden numbers (genes) that resolve into a few readable stats | Provisional |
| 2026-10-03 | Added an Inspirations page (Pokémon breeding, Diablo, Final Fantasy's Scan, MMO combat feedback, etc.) | Provisional |
| 2026-10-03 | Scanning, visibility levels, inheritance tools, bonuses for distant lineages | Open |
| 2026-10-04 | Fog on the board (visibility by line of sight), partly to give Stealth roles a mechanism. What drives it and what the replay shows stay Open | Provisional |
| 2026-10-04 | Unspent budget can be held back for reactions, so "not acting" is a decision. The owner finds it very interesting; the mechanism is Open | Open |
| 2026-10-04 | Budget per robot instead of (or alongside) a squad pool. The owner wants to consider it | Open |
| 2026-10-04 | Resolution order: steps interleave between sides vs. each side's list runs in turn | Open |
| 2026-10-04 | Added a Turn Mechanics page separating orders, resolution, budget, readiness and information. Added X-COM, RoboSport and Laser Squad Nemesis to Inspirations | Provisional |
| 2026-10-04 | The Inspirations page became an Explorations & Benchmarks section organized by topic (crossing & information, turn-based mechanics). The Turn Mechanics page moved into it. Explorations and benchmarks are not decisions | Provisional |
| 2026-10-26 | Match dynamics take RoboSport's overall turn loop as the benchmark. Our own actions, stats and modifiers will be designed | Provisional |
| 2026-10-26 | Each robot gets a budget of actions per turn (actions, not seconds). Per robot is implied by the owner's example, to confirm. Supersedes the 2026-10-04 Open row on per-robot budgets | Provisional |
| 2026-10-26 | Every player, human or AI, submits orders blind and the whole turn plays back, under fog of war (reaffirms earlier rows) | Provisional |
| 2026-10-26 | Facing costs actions and improves initiative and reactions against what the robot faces | Provisional |
| 2026-10-26 | Robots can hold actions with a Wait order to react; held actions that are not used are lost. Supersedes the 2026-10-04 Open row on readiness | Provisional |
| 2026-10-26 | Stats act during the play-out (initiative, hits, parries, perception, skill strength) | Provisional |
| 2026-10-26 | Skills cost actions. Whether a skill's spec scales with the robot's stats is Open | Provisional |
| 2026-10-26 | A shared timeline where one action is one beat, so cost equals duration (Claude's suggestion) | Open |
| 2026-10-26 | Added a Match Dynamics design page | Provisional |
| 2026-10-26 | The action budget is one pool for the whole squad; players choose how to spread it across robots. Supersedes the per-robot row above | Provisional |
| 2026-10-26 | Shared timeline: one action is one beat, so cost equals duration (accepted). Supersedes the Open row above | Provisional |
| 2026-10-26 | Skills with a cast time give prepared robots a chance to react | Provisional |
| 2026-10-26 | Stats have two kinds of impact: modifiers (damage dealt and taken, armor, skill strength, order of actions) and class-like capabilities (e.g. seeing further in fog). Stats modify skills | Provisional |
| 2026-10-26 | Explore D&D-style resolution (base plus modifiers against a target, passive values, advantage and disadvantage) to keep outcomes readable | Open |
| 2026-10-26 | Board design is a design area: terrain that interacts with facing (barriers, chokepoints, ledges, windows) | Provisional |
| 2026-10-26 | Stats improve only through crossing for now. Other learning mechanisms are backlog | Provisional |
| 2026-10-26 | Added a Stats & Resolution exploration page (D&D benchmark) | Provisional |
| 2026-10-26 | Hex grid for the board; no free movement | Provisional |
| 2026-10-26 | Squad pool baseline: 15 actions per player per turn. Abilities or bonuses might add 1 or 2 actions; mechanics Open | Provisional |
| 2026-10-26 | Orders take time in tempos: most actions 2, simple ones (a facing step) 1, skills start at 2; being extraordinarily good can bring an action to 1 (or 1.5). Replaces "one action = one beat" | Provisional |
| 2026-10-26 | Stats and classes change how long actions take (examples: agility speeds moving and turning; strength adds weight and slows movement). Stats not settled | Provisional |
| 2026-10-26 | Front, side and back approaches differ for reactions | Provisional |
| 2026-10-26 | Facing lets a robot react defensively (dodge, parry); reactions take 1 tempo by default | Provisional |
| 2026-10-26 | Saved actions also allow offensive reactions (attack, counterattack), enabling ambushes and traps | Provisional |
| 2026-10-26 | Reactions should give robots a sense of autonomy and intelligence | Provisional |
| 2026-10-26 | Whether the pool counts actions or tempos; whether defense from facing is free | Open |
| 2026-10-26 | The pool counts orders, not tempos. Robots act in tandem on their own tracks; tempos matter per robot. Resolves the Open row above | Provisional |
| 2026-10-26 | Defensive reactions are free to start (no actions spent). Alternative kept: spend from the next turn's pool | Provisional |
| 2026-10-26 | Turn length starts at 16 tempos. Starting values live in a Tuning Values page to tweak during game-testing | Provisional |
| 2026-10-26 | Defense must not be too strong: one reaction per robot per turn; the default reaction has a relatively low chance of working; reactions need the robot to perceive the attacker (fog, line of sight) | Provisional |
| 2026-10-26 | Initiative model: a score from stats and situation that orders actions within a tempo and modifies reaction checks (Claude's proposal) | Open |
| 2026-10-26 | Build a paper-playtest artifact in the repo, driven by the settled rules it tests, once the model is settled | Provisional |
