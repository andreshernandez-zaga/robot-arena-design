# Open Questions

## Narrative
- [ ] Which premise? Who is the player?
- [ ] What are the arenas for?
- [ ] What is the threat, if any?

## Blueprints
- [ ] Hybrid is the leaning. Which layers? (Candidate: hidden genes, a visible part tree, a readable stat card.)
- [ ] Where does the tree live: the body, the control logic, both, or neither? Or a flat attribute array with its own crossing rule?
- [ ] How big is the inference gap: how much of a blueprint stays hidden after watching a match?
- [ ] Recessive or hidden traits: in or out? If in, how bounded?
- [ ] Many genes, few stats: how do we keep offspring from averaging out?
- [ ] Should blueprints have a budget (weight, power) that crossing must respect?
- [ ] Do robots have their own control logic (reactions, passive behavior), or does the player control everything?
- [ ] Are budget size and reaction speed per-robot traits? Genes, stats, or both?
- [ ] How does a blueprint translate into visible form?
- [ ] How does it translate into abilities and behavior?

## Crossing
- [ ] How do players improve their odds: a heuristic filter, directed breeding, locking parts, self-play test runs, or a mix?
- [ ] If there's a filter, how do we avoid punishing specialists (e.g. glass cannons)?
- [ ] How many offspring do you see per crossing? Is that the main difference between what winners and losers get?
- [ ] Can you reject all offspring, and at what cost?
- [ ] Inheritance tools: what are they, and how do you get them?
- [ ] Bonuses for distant lineages: how is lineage distance measured?
- [ ] Abilities you can only get by crossing: yes or no?
- [ ] How many crossings, and how are they limited?
- [ ] Exactly what do winners and losers get to see?

## Squad & match
- [ ] Squad size: single robot or a small squad (4–6)?
- [ ] Which information sits at which visibility level (exact, range, qualitative, hidden)?
- [ ] Is scanning an ability? Whose, and at what cost?
- [ ] Do robots show visible damage (dents, lost parts) as information?
- [ ] What form does the post-match study take: replay, log, summary, or a per-robot scouting report?
- [ ] How do async matches avoid stalling?
- [ ] Board: map sizes, facing arcs on the hex grid, and which terrain types.
- [ ] How do we stop readiness standoffs in async play?
- [ ] What does the replay show: each player's fogged view, or the whole arena? Does that differ during and after the match?
- [ ] What counters stealth without making scanning mandatory?
- [ ] Turn length in beats (how much of the 15-action pool one robot can use), and what robots without orders do.
- [ ] Bonus actions: which abilities or bonuses grant 1 or 2 extra actions, and how to avoid snowballing?
- [ ] Where reaction actions come from: held per robot, a shared squad reserve, or a mix? See [Match Dynamics](match-dynamics.md#readiness-and-reactions).
- [ ] Detail design of actions, stats, modifiers, reactions, initiative, targeting, fog and skills: see the checklist in [Match Dynamics](match-dynamics.md#needs-detail-design).
- [ ] Does facing also decide what a robot sees, or change its defense directly?
- [ ] Resolution: how much chance, of what shape, and which checks are passive? See [Stats & Resolution](explorations/stats-and-resolution.md).
- [ ] Is there a non-kill win condition (e.g. disabling all mobile robots) to shorten async matches?
- [ ] Are there match objectives beyond last squad standing (flag, hostage, treasure) to keep async matches moving?
- [ ] Which game was the owner's first remembered Apple game? (RoboSport, Galactic Gladiators, other.) Low priority.

## Roles
- [ ] Fixed classes vs. emergent roles beyond the starter archetypes?

## Progression
- [ ] Learning beyond crossing (backlog): see [Progression & Memory](progression-and-memory.md#backlog-parked-ideas).
- [ ] Number of memory slots. Is there any archive?
- [ ] How much can self-play do before it undermines PvP?
- [ ] Robot aging/degradation (parked for now).

## Business
- [ ] Monetization: paid reveals vs. pay-to-win risk.
- [ ] Monetization: paying to see more offspring has the same pay-to-win risk.
