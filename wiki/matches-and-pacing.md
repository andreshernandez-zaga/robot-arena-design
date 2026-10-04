# Matches & Pacing

> We are deliberately keeping mechanics loose. The numbers below are illustrative only.

## Shape of a match

- Player vs. player.
- Squads placed on a board or terrain, chess-like but not necessarily a grid.
- Squad size: around 4–6 robots (Open). A 1v1 single-robot format was considered because crossing matters more than squad size.
- Each turn grants a pool of actions (e.g. 10). Abilities cost different amounts (e.g. 3). You spend the pool across your whole squad. *(Squad pool vs. a budget per robot is Open. See [Turn Mechanics](turn-mechanics.md).)*
- Win condition: last squad standing.

## Why keep squads (leaning)

- Composition creates counterplay. Example: a tank withstands a high-damage robot but is too slow to fight back.
- Squads show that a variety of designs can all work.

## Async pacing

- Plan your moves, submit them, close the app, and wait for the opponent.
- No sitting with your phone for 10 minutes.
- If matches drag on: turn limits per player, or a mode with a daily move deadline (Open).

## Turn structure (Provisional: simultaneous)

- **Simultaneous (leaning):** both players submit, the game resolves the turn, and both watch the replay. The owner described turns this way ("once both players submit their turn, the game shows the replay"). It fits the "submit and see what happens" feeling.
- **Alternating** (I move, then you move) is still possible if simultaneous resolution causes problems, e.g. confusing outcomes or hard-to-predict collisions.
- The wider design space (how orders are given, whether steps interleave, holding budget back for reactions) is in [Turn Mechanics](turn-mechanics.md).

## Fog on the board (Provisional, details Open)

- The arena is not fully visible to both sides. What each robot can see depends on line of sight, and possibly on facing.
- **Why:** it gives the Stealth archetype a real mechanism, and it gives scouting and scanning more meaning.
- **Open:** what the replay shows (each player's fogged view, or the whole arena), and what counters stealth. See the tension with "every match is information" in [Turn Mechanics](turn-mechanics.md#1-fog-gives-stealth-roles-a-mechanism).

## What a match shows

### During the match, each turn
- An **animated replay** of the moves, so you see the battle unfold.
- **Data** about what happened: damage done, actions carried out, what unfolded.
- **Actions per turn** for each robot are shown clearly.
- A **notice when an ability is used.**

### After the match
- A replay, a battle log and/or a summary to guide your inferences.
- **Suggestion (not agreed):** shape the summary as a **scouting report for each enemy robot**: damage dealt and taken, actions spent, abilities used, movement. Put it right next to the capture decision, since that's what it's for.

### Readability
- Matches must be **visual**: each turn and move plays out on screen.
- Damage and effects must be visible, so that what happens in a match tells you what each robot is.
- Studying the match afterwards should be **light**. It should inform without feeling overbearing.

### How much to reveal (Provisional direction, details Open)
- **Generous numbers, partial reverse-engineering.** The owner's view, inspired by MMORPGs: seeing damage dealt and resisted, health and energy bars, and so on is part of the thrill. Players reverse-engineering things is the point, but it won't be everything.
- What players should be able to work out: **the game's rules**. What they shouldn't: **one opponent's full blueprint from one match**.
- *Superseded:* the earlier proposal "show outcomes, not formulas" was too restrictive.
- **Candidate: levels of visibility.** Your own robots are fully visible. Enemy information comes as exact numbers, ranges, qualitative messages ("RESISTED", "CRITICAL") or not at all. See [Inspirations](inspirations.md#everquests-consider-and-mmo-health-bars-graded-precision).
- **Candidate: scanning.** An ability, perhaps for the hacker, that spends action points to reveal more about an enemy.
- **Candidate: visible damage** (dented plating, lost parts) that carries information without numbers.
- **Candidate: two layers after a match:** a short summary for everyone, the full log for players who want it.
- How detailed the data is directly sets the **inference gap** (see [Robots & Blueprints](robots-and-blueprints.md#the-inference-gap-key-dial-open)). Expect to tune it.
