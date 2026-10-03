# Crossing & Evolution

> This is the core of the game. If the scope has to shrink, this stays and other things go (even squads could become 1v1).

## Acquiring blueprints

- After a match you can see an opponent's robots **from the outside**: their appearance, plus what you observed during play (behavior, damage, abilities used).
- You **cannot see the blueprint** before committing.
- Once you commit to revealing or crossing with a robot's blueprint, **you can't undo it**. You get whatever was underneath.
- Acquiring a blueprint copies it. The opponent loses nothing.

## Crossing

- You cross a captured blueprint with one of your own.
- **No guaranteed improvement.** The result can be better, worse, or just different, and different might not fit your squad.
- There should be ways to **improve your odds** of a good result. These are not defined yet.
- The model is inspired by genetic programming: selection by phenotype produces new genotypes.

## Evolution outside PvP

- **Self-play simulation:** test your own designs against each other to explore variations before facing real players.
- **Suggested division of roles:**
  - Self-play **refines** what you have.
  - PvP gives you **new genetic material** you cannot get any other way.

## Diversity dynamics (hypothesis)

- Players who win very often may find it harder to improve, because they see less diversity. There's always some chance involved.
- **Caveat:** matchmaking usually pairs winners with winners, so this effect may not appear on its own. Treat it as a hoped-for side effect, not a balancing mechanism.

## Hidden information

- Starter archetype blueprints will probably leak (wikis, community).
- Crossing quickly produces designs unique to each player, which keeps blind reveals meaningful.
