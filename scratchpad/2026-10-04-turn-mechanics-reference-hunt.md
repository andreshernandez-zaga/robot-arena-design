# Turn mechanics: reference hunt (2026-10-04)

Raw notes from the session where the owner tried to recall two old turn-based games. Nothing here is authoritative. The distilled version lives in `wiki/explorations/turn-based-mechanics.md`.

## Game 1: unidentified (Apple, played in the 90s on an older machine)

**Owner's description, in order of arrival:**
- Thieves vs police (later: "maybe not thieves and police, something similar").
- You give a list of orders ("move right + move right + face left + shoot...").
- Second player is the computer or a human. Both sides enter lists, then the turn runs.
- You see shots into empty hallways. Top-down building with walls, doors, hallways.
- Steps **interleaved**: "a bit of a game of catch", predicting the other player.
- 2D, definitely turn-based.

**Candidates found (none confirmed):**

| Game | Why it came up | Why it may not be it |
|---|---|---|
| RoboSport (Maxis, 1991, Mac/Windows) | Queued timed orders per robot, simultaneous playback, head direction changes the field of view, scan-and-fire. Fits a Mac in the 90s. | Robots, not thieves. Map layout not confirmed. |
| Galactic Gladiators (SSI, 1982, Apple II) | Planning phase, then both sides act at once. One or two players. | 4v4 sci-fi gladiators. Order format, facing and layout unknown. |
| Mission Escape! (CE Software, 1980, Apple II) | Up to three commands per turn, rooms. | Apparently single-player against robots. One review called it reflex-testing. |
| Terrorist (Edu-Ware, 1980, Apple II) | Two sides, a building. | Real-time with paddles. Ruled out. |
| They Stole a Million (1986) | Heist planning with timed orders. | C64/Spectrum/Amstrad. Crew boss only. Ruled out. |

**Confidence:** low on all. The owner thinks the theme may have drifted. The mechanics are the part to trust.

## Game 2: UFO: Enemy Unknown (identified by the owner)

- The owner remembered: deploying a squad against an alien invasion, roles, weapons, sharpshooters facing a direction and reacting when an alien appears in view, taking cover, orders and then waiting for the whole turn including the aliens.
- **Confirmed (UFOpaedia reaction-fire page, via search summary):** Time Units, reserved TUs, initiative = reactions × remaining TU fraction, both sides use it.
- **Memory, not verified:** facing costs TUs, forward vision cone, no formal cover system, fog of war.
- **Where the memory differs:** X-COM has no order queue. The wait the owner remembers is the alien phase. "Sending orders" probably blends in game 1.
- Related: Laser Squad Nemesis (2002, same designer, blind simultaneous orders with stances and opportunity fire).

## What the owner liked (their words, paraphrased)

1. Fog in arenas helps support "stealth" classes.
2. Not acting as a decision: spend all your budget on positioning and nothing is left for reacting. It shapes how to think about classes and their strengths.
3. A budget per unit instead of one for the whole squad: maybe worth considering.

## Source limits

The network proxy blocked Wikipedia, MobyGames, Internet Archive, Applefritter and Wikiwand. Everything above comes from search-result summaries, which were sometimes noisy or wrong (one summary confidently picked Terrorist, which is real-time). The Galactic Gladiators manual is on the Internet Archive and would settle its mechanics. RoboSport's rules would be worth reading directly.

## Tactics Arena Online (added by the owner as a reference)

- Flash game by Digital Seed Entertainment (one person), 2003. Played by the owner in the early 2000s.
- Everything comes from search summaries. Blocked by the proxy: JayIsGames, Codex Gamicus, TWCenter, StrategyWiki, Unknown Worlds forum, digisonline.com. Not blocked but only reachable as summaries: Giant Bomb, the rules guide.
- Distinct things with similar names, not the same game: a Google Play app "Tactics Arena", and a GitHub project (DanAurea/Tactics-Arena) that recreates it in C.
- Unconfirmed: board size, how teams of 10 are built, whether any turn timer existed, and the exact blocking rules.
- Distilled in `wiki/explorations/turn-based-mechanics.md`.

## Tactics Core (added by the owner, 2026-10-05)

- Owner's link: kongregate.com/en/games/digitalseedent/tactics-core-demo (blocked by the proxy, not opened). Owner's note: one player turn at a time.
- From search summaries: a Flash strategy-RPG engine by DigiS (Digital Seed), Flash MX / Flash 6 ActionScript, 2003, with depth layering and AI for enemy or guest units. Mirrors seen in results: Flash Museum, Internet Archive item `1100_tactics_core`, FlashArch, GameYum.
- A separate Kongregate listing "Tactics Core" by another uploader (earthbound_lucas) also turned up, probably a re-upload.
- Not the game referenced earlier (that was Tactics Arena Online). Relationship between the two is unconfirmed.
- Distilled in `wiki/explorations/turn-based-mechanics.md`.

## RoboSport (Maxis), checked 2026-10-06

- Blocked by the proxy: Wikipedia, Giant Bomb, MobyGames, Maxis wiki, Compute! archive, itch.io (mini RoboSport), stonedachshund.com (remake manual). Everything comes from search summaries.
- Consistent across summaries: 1991, Edward Kilham, Maxis; Mac and Windows 3.0, Amiga 1992; up to four teams of up to eight robots; 15-second default time per robot; commands to move, raise or lower the head, fire at a spot, scan and fire if seen; simultaneous playback as a "movie"; early replays and network play; modes survival, capture the flag, hostage, treasure hunt, baseball; four AI levels; 24 maps (eight sizes, three tilesets: suburbs, rubble, computer).
- Conflicts: four kinds of robot (rifle, automatic, burst, missile launcher) vs five types; Computer Gaming World 2/5 vs praise for the Windows version.
- Contamination: one summary described "10 action steps per turn", one step per square, and scan along N/S/E/W lines. That matches the floybix "mini RoboSport" remake (and a separate "RoboSport REMAKE" manual), not the original. Left out of the wiki.
- My earlier guess at robot names (Scout, Sniper, Gunner, Bazooka) is unconfirmed. Not used.
- Distilled in `wiki/explorations/turn-based-mechanics.md`.
