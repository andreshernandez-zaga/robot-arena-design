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
- [ ] Simultaneous turns are the leaning. Any reason to go back to alternating?
- [ ] Which information sits at which visibility level (exact, range, qualitative, hidden)?
- [ ] Is scanning an ability? Whose, and at what cost?
- [ ] Do robots show visible damage (dents, lost parts) as information?
- [ ] What form does the post-match study take: replay, log, summary, or a per-robot scouting report?
- [ ] How do async matches avoid stalling?
- [ ] Board/terrain shape.
- [ ] Budget scope: per robot, squad pool, or both? Continuous time costs or fixed action slots?
- [ ] Do steps interleave (step 1 for both sides, then step 2) or does each side's whole list run in turn?
- [ ] How are orders given: short queued lists, standing orders, or both? How long are the lists?
- [ ] Readiness: can unspent budget be held back for reactions? How is it set in advance, given the player is not there?
- [ ] Initiative: how are simultaneous conflicts decided (stat contest, fixed order)? How legible is it?
- [ ] How do we stop readiness standoffs in async play?
- [ ] Fog: what drives visibility (line of sight, facing, range)?
- [ ] What does the replay show: each player's fogged view, or the whole arena? Does that differ during and after the match?
- [ ] What counters stealth without making scanning mandatory?
- [ ] Does facing matter defensively (front, side and back protection), not only for vision?
- [ ] Is there a non-kill win condition (e.g. disabling all mobile robots) to shorten async matches?
- [ ] Are there match objectives beyond last squad standing (flag, hostage, treasure) to keep async matches moving?
- [ ] Which game was the owner's first remembered Apple game? (RoboSport, Galactic Gladiators, other.) Low priority.

## Roles
- [ ] Fixed classes vs. emergent roles beyond the starter archetypes?

## Progression
- [ ] Number of memory slots. Is there any archive?
- [ ] How much can self-play do before it undermines PvP?
- [ ] Robot aging/degradation (parked for now).

## Business
- [ ] Monetization: paid reveals vs. pay-to-win risk.
- [ ] Monetization: paying to see more offspring has the same pay-to-win risk.
