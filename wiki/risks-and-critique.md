# Risks & Critique

Concerns are raised honestly so they can be addressed deliberately, not discovered late.

## 1. Most GP crossovers make things worse

In real genetic programming, most offspring from crossing are worse than their parents. If the game copies that directly, players will mostly experience disappointment. Mechanisms that improve the odds, plus cheap filtering through self-play, are **core** to making the loop enjoyable, not optional extras.

## 2. Readability vs. expressiveness

The more expressive the blueprint tree, the harder it is to reason about. Inference only works if players can reason. Hidden complexity is fine, but readable output (form, behavior, effects) is mandatory.

## 3. Unreliable inference turns betting into a lottery

If what you observed doesn't predict the blueprint, blind commitment feels unfair. Matches have to show real information.

## 4. Generating visuals from blueprints is costly

It is the biggest payoff and the biggest cost. Plan on modular parts and treat fully generative visuals as a stretch goal.

## 5. The rich get richer

Winners see more and improve faster. That is accepted, but monitor it, because new and struggling players leaving is the failure mode.

## 6. Paying to see more blueprint becomes pay-to-win

If seeing more turns directly into a stronger robot, paid reveals are pay-to-win in a competitive game. Decide this deliberately.

## 7. Balance with player-made designs

Breeding means the developers no longer control the meta. Trade-offs (sidegrades, not upgrades) are the main defense.

## 8. Losing a favorite design

Irreversible choices plus limited slots will hurt sometimes. That's part of the point, but too much causes players to quit. Consider an archive or retirement option.

## 9. Async matches can stall

"Last squad standing" plus tanky squads plus async play could make a single match last days. We will need a way to push matches toward an end.

## 10. Self-play can replace PvP

If self-play is the efficient way to evolve, PvP becomes optional. PvP must offer something self-play can't, namely new genetic material.

## 11. Match data leaks the blueprint

Detailed numbers can be reverse-engineered by players or community calculators. Reverse-engineering the game's **rules** is welcome; that's part of the fun. The risk is narrower: working out one **specific opponent's** blueprint from a single match, which kills the blind bet. Mitigations under discussion: levels of visibility, scanning as a cost, and uniqueness of blueprints through crossing.

## 12. Crossing-odds heuristics shape the meta

A threshold filter based on averages pushes designs toward generalists and penalizes specialists. Whatever helps the odds will become something players optimize for. Design it with that in mind.

## 13. Scanning becomes mandatory

If scanning (information as an ability) is too strong, every squad needs a hacker and squad diversity collapses. It has to be a real trade-off.

## 14. Number overload on mobile

Lots of numbers delight a minority of players and overwhelm the rest. Detail must be available, but hidden by default.

## 15. Readiness standoffs

If holding budget back for reactions is the safest play, nobody advances. With async play and "last squad standing" (see #9), a standoff can last days. Something has to reward or force engagement: objectives, a shrinking arena, a turn limit. Only matters if readiness is adopted (see [Turn-Based Mechanics](inspirations/turn-based-mechanics.md)).

## 16. Fog vs. the match as information

Fog and stealth reduce what a replay shows about enemy robots, and the capture decision depends on that (see #3 and #11). Either stealthy designs get under-selected for crossing, or the replay shows more than the players saw while planning. The replay's perspective has to be decided deliberately.

## 17. Planning load with per-robot budgets

A budget, orders and a stance for each of 4–6 robots, planned blind on a phone, can break the relaxed-play pillar (see #14). Keep lists short, or give robots sensible defaults.
