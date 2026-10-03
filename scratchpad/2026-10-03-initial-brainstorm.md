# Initial brainstorm — 2026-10-03

Transcript of the first concept conversation between Andrés and Claude. The wiki in `wiki/` was built from it.

- Andrés's messages are verbatim. They were dictated, so they include speech fillers.
- Claude's replies are reproduced in full.
- The final part, about setting up the repository, is summarized.

---

## 1. Andrés — setting the ground rules

> You're gonna need to listen to me for a long while as I think about a game concept, your task is going to be to help me organize my thoughts into something that we can use as a baseline for the design of a game. So I'm going to start, I don't want to discuss mechanics. I am going to start giving you a number of ideas. How I think I want the game to, or what I want it to be about instead of how I want it to, to work out. So far, so good. I need you to let me speak for long periods of time. Sometimes I'm going to speak in English, sometimes in Spanish, until I get everything out of my mind.

### Claude

Understood. Talk as long as you need, in English, Spanish, or both.

While you talk, I'll keep my replies short and won't push you toward mechanics. I'll hold your ideas in raw form and won't organize them until you tell me you're done. If something you say directly contradicts an earlier idea, I'll mention it in one line and leave it for later.

When you're finished, I'll put everything into a baseline document: core themes, the experience and feeling you're after, tone, and open questions. I'll also point out gaps and tensions honestly. You don't need my approval for any idea.

Adelante, te escucho.

---

## 2. Andrés — the core idea: squads, async turns, blueprint crossing

> Okay. So the idea is the following. I'm imagining a game where you basically form a squad of robots. This squad is going to have different types of robots. I'm thinking of them a little bit like chess pieces, but also a little bit like a group that you put together where you have different roles. So one role could be a tankier kind of robot. Another role could be more like a, a damage dealing type of robot. Another one could be more of a technologically advanced kind of a saboteur type of robot that is going to try and hack or interfere in signals to try to disable or do damage to robots. And I may have something that behaves like a stealth type of robot, which might be very weak, but could be capable of sneaking behind a squad or basically take advantage of positioning. My idea is that players are going to create their squads and play against each other. I think a lot of having the squads be laid out in a sort of a board, similar to a chess board, but it can be something different, just some sort of terrain. And then they make moves in terms of using the amount of moves they have in a turn. So, for instance, one of the pieces is going to have a certain ability that is going to take three of your moves, and you may be mounted or granted maybe 10 moves in a, in a turn. All of these numbers are just to give you an idea of what I'm thinking. And what you would do is basically think of how you want to move your pieces, use moves in your turn to do things with your entire squad, which I imagine is going to be like five robots in your squad or six or four, don't know yet. And the idea is to basically continue until you finish the other squad and basically last man standing is going to win. So, okay, I said I didn't want to discuss mechanics, but this is going to give you an idea of how I would like to envision the, the game. I would, I could be persuaded to do different type of mechanics. But what I like about this is that it would be turn-based. So if there are two people playing on the phone, you can have them just speed out the moves, close their phone, go back to their thing, and wait for the other player to do something. And if it becomes an issue that a match runs for too long, then I would maybe limit the amount of turns per player or create a mode in which they need to move within a day or whatever. We can figure that out at some point, but what I want to do is not put people in a position where they need to be looking at their phone intently for 10 minutes until their match is over, but rather let the experience be more relaxed where they send a number of moves, submit it, and then wait to see what happens. And I do want to incorporate something I've been very keen about for a while in there, and it is having a sort of mechanism where I can mix plans for the robots. So imagine that each robot has an underlying plan, which looks like, first of all, an overall design, and second of all, a number of characteristics and also abilities or skills that are elicited by the design of the robot and the plans that you have. It could be that they grant you certain increased abilities. So let's say durability is one thing that the robot has that could be could be affected by by the stats of the robot in terms of what it is. made of. So it can be a different type of alloy, for example, that might be heavier. So robot is sturdier, but at the same time, it could be slower. And we're going to need to figure out what those things are in the plans. And the thing that I want to do is connect that into the game so that when you win a match, basically, you win an option to look into one of your opponent's robot plans. And then you can, through a process, you can mix one of those robot plans with one of your robot plans and see if something comes out better. So it's a little bit of... granting yourself an option to evolve your squad by crossing it with whoever was able to fight with you. And, and maybe if you win, you get the right to look into their plans to try and get something out of it. Let's see, I think that's going to be a lot. Help me. Put everything together into something coherent and say it back to me. Also, give me your opinion.

### Claude

## Your concept so far

**Core fantasy:** You build and develop a squad of robots. You test it against other players, and you improve it by learning from the squads you beat.

**1. The squad**
- 4 to 6 robots, each with a clear role, a bit like chess pieces:
  - **Tank:** durable, holds ground.
  - **Damage dealer:** kills things.
  - **Saboteur / hacker:** jams signals and disables or damages enemy robots.
  - **Stealth:** fragile, but wins through positioning and flanking.

**2. The match**
- One player against another on a grid or terrain.
- Each turn you get a pool of actions (for example 10). You spend them across the whole squad, and stronger abilities cost more.
- You win when the other squad is wiped out.

**3. The pace**
- Asynchronous and suited to phones: plan your turn, submit it, close the app, come back later.
- Explicitly *not* 10 minutes of staring at your phone. Turn limits or daily deadlines can come later.

**4. Blueprints (your signature idea)**
- Every robot comes from a blueprint: its design, its materials and stats, and the abilities that follow from them.
- Stats come with trade-offs. A heavy alloy makes a robot sturdier but slower.
- Winning a match lets you look at one of your opponent's blueprints and cross it with one of yours. The result might be better.
- Your squad evolves through the people you fight.

## My opinion

**What's strong**
- **The blueprint crossing is the game.** Everything else (role-based squads, action points, async turns) is well-proven ground: Hero Academy, Frozen Synapse, Into the Breach. This is what sets your game apart. I'd go further and say the real fantasy is "you are a robot engineer," with combat as the test bench. If you treat it that way, it shapes everything.
- **Your instinct about trade-offs is right**, and it should be a firm rule. Crossing should mostly produce *different* robots, not strictly *better* ones. Otherwise it turns into a power treadmill.
- **Async fits the action-point structure well.** A full squad's worth of moves per turn gives each turn weight, so waiting between turns doesn't feel empty.

**Real risks**
1. **The rich get richer.** Only winners evolve, so strong players pull ahead and new or losing players stall and leave. You probably need the loser to get something too: a partial look, a fragment of a blueprint, or something else.
2. **Balance with player-made robots.** Once players can breed robots, you no longer control the meta, and players will find the broken combinations. That isn't a reason to drop the idea, but it is the hardest design problem here.
3. **Async plus "last robot standing" means slow endings.** Two tank-heavy squads could drag on for days. You'll need something that forces the match toward an end.
4. **"Chess pieces" vs. "evolving blueprints" pull against each other.** Chess pieces have fixed identities. Bred robots are fluid. Is "tank" a fixed class that blueprints vary within, or a role that emerges from the stats? This decision matters early.

**One thing to clarify:** you said "submit moves and wait to see what happens." That could mean:
- **Alternating turns:** I move, then you move.
- **Simultaneous turns:** we both submit, the game resolves both turns at once, and we watch the replay.

These produce very different experiences. Simultaneous turns make the "wait and see" moment much more exciting.

**Still missing (and these are "what it's about" questions, not mechanics):** setting, tone, and why these robots are fighting. Who is the player in this world?

Keep going. I'm listening.

---

## 3. Andrés — story seed, loser rewards, self-play, classes

> Yeah. Um, the story behind it... I've been working on it, but I want to get on that later. Uh, basically, imagine a distant future. Um, civilizations start going across galaxies and they basically go apart from each other. And at some point there is an interesting event where some sort of, let's say, virus that affects AI systems eliminates all AI systems and we did all the knowledge that humanity had on their, let's say, servers. And for a while, the different pockets of humans in the different, in different types, parts of the galaxy, they become disconnected. Uh, but they retain some of the knowledge, enough to design a very basic robot, perhaps in a more traditional way without so much, let's say, AI or, or a more rudimentary way of making decisions by those robots. They are not as autonomous and they are trying to figure out how to breed these robots and basically test them in simulated arenas with other civilizations now that they figured out a way to at least communicate like that through, through simulated arenas for these robots. The plan for humanity as a whole is to breed the best squad of, of robots to eventually protect humanity from a further threat that initially disabled their AI systems, but that they know it could eventually threaten them as humans. So these squads of robots may be able to defend them. So that's one option of a story. There are many. I like the idea of having different civilizations trying to build back up on what they knew about robots. And that can be, can take many different shapes. It doesn't have to be breeding robots to defend humanity. It can be something else. It can be... Something that doesn't have to be do with being isolated through the galaxy, but we will we'll have a chance to develop this further. I think it's good to write it as a set of themes, possibilities, and notes that helps us explore different options of a. Of a story and narrative behind the game. Now, in terms of how the game is supposed to work, yes, you're right that I think what's interesting is having these improvements in robots and making something different as they cross plans with each other. Uh, I am personally fond of that idea. I think it's so core to the concept that I would even dismiss the idea of having a full squad to just having one robot playing against another. But yes, I think what we want to do is develop or evolve these robots through combat, learn more as we move forward. And yes, we could... in some way allow someone that loses to have access to plans, I think should be rewarded that you actually play, even if you're losing a lot. And that can be by, number one, seeing a little bit of the plan, not all of it. Number two, giving you an option to see more by spending money, for example. So if there is some sort of currency system, then you're going to do that. While the winner is not going to have as many restrictions, just a few. I also think that the system needs to allow you to evolve your projects, I'm sorry, your robots through something other than combat. So simulated combat amongst your own designs, for example. That allows you to get some variety and test some ideas before you go into combat with another actual player. So this would be playing against yourself or doing something that is not player versus player, but rather player versus self or something like that. So that, that could help us. But the idea of a squad is interesting. Because it can show how a variety of designs can still work. So for instance, even though tanks are sturdy, they may be also slow. So it could be that someone figures out a way to deal a lot of damage that the tank is going to maybe withstand a little bit, but it's not going to be able to fight back. So there's a fine balance there to be found. Yes. Should we stick to the idea of classes where there's a, a set class for tanks and a set class for others? Well, that's interesting because it could make things easier for people to understand. But the alternative, which is just letting people play around with things and, and, and let it just look a different way or work a different way through mixes and remixes is very interesting. So maybe classes are going to develop themselves. Or maybe we don't even have to worry about that. Those are my thoughts so far.

### Claude

## What I've captured

### Narrative: themes, possibilities, notes

**Seed story (one option, not final)**
- In the distant future, humanity has spread across galaxies and the settlements have drifted apart.
- A virus that attacks AI wipes out every AI system, and with them most of the knowledge stored on their servers.
- Isolated pockets of humans keep only fragments of that knowledge. It's enough to build basic robots that don't depend on AI and make decisions in a rudimentary way.
- These civilizations find a way to reach each other, but only through simulated arenas.
- Their shared goal is to develop the best robot squads to defend humanity from whatever caused the virus, which may still threaten them.

**Themes you're drawn to**
- Rebuilding lost knowledge from fragments.
- Separate civilizations, each with its own approach to robotics.
- Contact and exchange through competition.
- Evolution through crossing designs.

**Alternatives to keep open:** a reason other than defense, and a setting without galactic isolation.

**Note:** the setting, the defense goal, and the virus are all still open.

### Design updates
- **Crossing blueprints is the core.** It matters so much that you'd consider 1-robot-vs-1-robot matches over squads. Squads stay in for now because they show that different designs can each work.
- **Losers get rewarded too:**
  - They see part of the opponent's blueprint.
  - They can pay currency to see more.
  - Winners face fewer restrictions.
- **Evolution outside player-vs-player:** you can run simulated fights between your own designs to test ideas before facing real players.
- **Classes are undecided.** Fixed classes are easier to understand. Letting roles emerge from mixing is more interesting. You might not need to define classes at all.

## My opinion

**The story already fits your core mechanic, and I'd build on that.** The arena is the only way these civilizations can talk to each other, so crossing blueprints *is* knowledge exchange between them. Whatever story you settle on, keep that link. Two more connections are worth noting:
- **Robots that can't think fully for themselves** explains why the player controls them so closely. That's useful whichever story you pick.
- **There's a built-in irony.** Humanity is again building smarter machines after losing everything to an AI catastrophe. That gives you a source of tension for later.

**PvP and self-play need different jobs.** If testing against your own designs is the efficient way to evolve robots, players will skip PvP. A clean split:
- **Self-play refines** what you already have.
- **PvP gives you new material** you can't get any other way.

That split also matches the story: the other civilizations know things you don't. As a bonus, self-play gives players something to do while they wait for an opponent's turn.

**Be careful with paying to see more of a blueprint.** If what you see turns directly into a stronger robot, that's pay-to-win. In a competitive game, that will hurt trust in a way you can't easily repair. It's not a deal-breaker, but decide it on purpose and not as an afterthought.

**On 1v1 vs. squads:** your tank example needs several robots to work. Counterplay comes from squad composition, and so does the "different designs can each work" idea. A single robot makes each blueprint matter more but flattens the tactics. I'd keep squads. Keeping them *small* is a later decision.

**On classes:** a middle path is to start everyone with recognizable archetype blueprints (tank, damage, hacker, stealth) and let crossing blur them over time. New players get a clear starting point, and classes still emerge on their own later.

Keep going. When you're done, I'll turn all of this into the baseline document.

---

## 4. Andrés — blind commitment, scarcity, limited memory

> One thing I've thought about crossing is letting people only see the robot from the outside, so how it looks. Maybe do a little bit of inference from the play or, or the gameplay when, when they were in the match and see what kind of abilities they have. But they don't get to see what the actual plan looks like. Once they commit to crossing with a specific robot or seeing a plan, they cannot undo it. They need to, basically they get what, what was underneath. I do think it's important to create a limit to how many crosses you can do. So for instance, if you win with your squad, maybe you have access to one full plan and nothing else. And then you can do those crosses and decide what to do with it. I would also keep the number of designs or plans you have in your memory limited so that you need to be faced with compromises along your lifetime as a player or as a robot designer. Make sense?

### Claude

Yes, it makes sense, and it hangs together.

## What I've captured

**Crossing works by inference and blind commitment**
- **What you can see:** only the robot's exterior and how it behaved during the match. You infer its abilities from what you watched it do.
- **What you can't see:** the actual blueprint.
- **Committing is permanent:** once you choose to cross with a robot, or to reveal its blueprint, you can't undo it. You get whatever was underneath.

**Crossing is scarce**
- Winning gives you access to one full blueprint and nothing else.
- What you do with that one blueprint is your decision.

**Your memory is limited**
- You can only store a limited number of blueprints.
- That forces trade-offs across your whole career as a player and robot designer.

## My opinion

**This is the strongest thing you've said so far.** Together, these three rules give each decision weight:
- **Blind commitment** turns crossing into a skill: reading an opponent and placing a bet. A purely random reveal wouldn't do that.
- **Scarcity** keeps each win from feeling routine.
- **Limited memory** makes your collection reflect who you are as a designer, instead of a growing pile.

**It also fits the story you just gave me.** Knowledge was lost and storage is scarce. These are fragments recovered from another civilization, and you can't keep everything. The constraints don't need a separate justification because the setting already provides it.

**Risks**
1. **Inference has to be reliable.** If what you saw in the match doesn't predict what's in the blueprint, the bet becomes a lottery and it will feel unfair. The match has to show real information.
2. **Losing a favorite design hurts.** Irreversible choices plus limited memory means people will delete or ruin robots they love. That's part of the point, but too much of it drives players away. You may want some kind of archive or retirement option. That's a tuning question, not a reason to drop the idea.
3. **Hidden information leaks.** If blueprints are common across players, the community will document them online and the blind-reveal tension goes away. It holds up best if most blueprints are unique to their owner. Crossing naturally pushes in that direction, which is another reason it works well here.

**Open questions**
- How does this fit with what we said about losers? My reading: everyone sees the exterior, losers get a partial look, and only winners get a full blueprint. Is that right?
- Does the opponent lose anything when you take their blueprint, or do you only get a copy?
- "Lifetime as a player": is it just the length of your career, or do robots or designers age, retire, or die?

Keep going.

---

## 5. Andrés — readable visuals, slots, genetic programming, answers

> Yes, inference has to be reliable. What I've been thinking about that is um, when you're playing, there's going to be a few things to this. Uh, first one, uh, we still need to make the gameplay quite visual. So there's a lot of appeal to having your own designs that you have optimized uh, through learning and uh, through your lifetime as a player. But I think it's also appealing to be able to see it, uh, see how that actual design translates into a physical form. And I think um, that's going to be a big part of it. So the physical form needs to somehow uh, show what uh, the design underneath is um, specifying, basically. And then... The other aspect to it is once you see uh, the match and see each turn unfolding and each um, move unfolding, um, you should be able to see uh, the amount of damage, uh, the amount of things that happened, and that should give you information to uh, basically have a, an idea of what a specific uh, robot is doing. So... Um, In a way, after the match, you, you're able to study it a bit, something that is not so overbearing, um, so that you can form your own opinions on what are the robots that are actually interesting to you in terms of the design. Mm. Then you're asking me about losing a favorite design, and yeah, I, I am aware of that. So the idea here is to have a limited slot of designs you can hold, uh, a limited memory. And that is going to help because eventually what you can do is uh, grab the design and put it into one of the slots and then um, mix from the slots. Mm. But uh, after you mix, you need to decide where that uh, remix is, is going to go, either on the slot of the design that you uh, just uh, captured or on the design of one of your robots. But um, having a number of slots is going to help you have some flexibility. You could keep, in a certain circumstance, you could keep your original uh, robot design, then the one that you took uh, from your opponent, let's say, and then one that is the remix. And um, as you play more matches, you're going to have to make decisions on what to drop so to so as to have um, slots that are free for uh, new designs to come in. Um, that would be the idea. I kind of like, um, I would love it if, if the robots, uh, the designs are somehow generated from... Um, The way they look from the plans. So ideally, we have a way to have something somewhat realistic uh, so that uh, the resulting design can be generated just from the, uh, from the plans. Uh, but in general, what we want to do is uh, have the design uh, reflect some of the choices in materials, uh, whatever parts of the robot are important to uh, the uh, stats. So for instance, heavier things um, are going to be look bulkier or different uh, while something that is light is going to look light. Um, so we, we're going to have to be creative about that. Now, in terms of hidden information leaks, um, yes, and I think The initial idea of giving people a predefined set of robots with different, let's say, quotes, classes, where there's a bulkier one, which is a little bit of a, ta of a tank, uh, etc. Those plans may leak, but eventually you are going to uh, get something different just from merging to design. So I'm thinking of uh, borrowing from Um, genetic programming, where if we can make those designs some sort of tree, then we can swap notes in those trees or something like that. We that needs a lot of work, but uh, this is part of the reason why I find it fun to work on this um, kind of concept. Um, I like the idea of mixing a little bit of genetic uh, programming into this, and it's also it also goes into the concept. Um, So for the questions, uh, how does this fit with what losers said? About, well, losers are just going to have access to less things. So we can decide the exact um, mechanic by um, when, when, once we are implementing the project, but an option is, um, and this is just to give an example, uh, a winner, is able to look at two designs while a loser is only going to be able to see one or just a portion of one. Um, but uh, we basically, we are going to encourage winners to improve faster, which is okay, I think. Uh, it reflects a little bit of Uh, what happens when you have a little bit of your genetic programming into this. Uh, the better ones uh, are going to be more prone to uh, getting access to stuff. Now, there's also no guarantee that mixing with another robot is going to give you something better. Um, it could be, but uh, it's no, no guarantee, and we can uh, figure out mechanisms so that uh, upon mixing... Uh, you increase your chances of getting something better, but you could also get something just different that doesn't work well with what you want to keep as your main squad. Um, this is important because, uh, interestingly, it could be that people that win too often are going to have it a little bit harder to improve their squad or a particular robot because they're not going to find enough um, diversity in the pool. to get something better, but there's always a little bit of chance around it. So we are basically modeling around, um, uh, basically choosing by phenotype, let's say, and uh, getting new uh, genotypes uh, of those robots. Uh, that's a little bit of where that idea came from. Uh, so yeah, for losers, uh, While they are not going to be able to see as much as the winner, uh, you would think that the loser is going to have um, a set of robots that is not as good as the winner. But if they are able to see one of the designs, they may improve their own uh, with high likelihood. Um, so that's, uh, that's the idea behind it. Uh, does the opponent lose anything you take to blueprint or do you get only a copy? No, I think I'm thinking about blueprints because uh, you can always copy blueprints. Uh, it's not like you are stealing the actual physical robot. Um, so that's no, no, no need to, to, to take anything from uh, the players. Um, and uh, yeah, robots do not... age, or at least not now. If that ever becomes an issue, we can have something that degrades robots over time, their stats maybe, but I wouldn't worry about it. Um, also, I've been talking a lot about stats, but it depends on how we model uh, the project. So as I said, it could be that a design is actually more like a tree and you move around nodes that could give you a lot of uh, flexibility. But then uh, seeing that that translates into um, stats is difficult. So depending on how we figure out the design, we may change uh, the concept of, of, of stats. Uh, but maybe we can make it work. So still still going back and forth with the ideas, but this is, this is what I have so far. Uh, keep in mind, not No, nothing of this is settled. This is where I want to keep it very conceptual. Um, we need to organize these ideas in a way that um, we can make uh, further refinements to the decisions and evolve the design in the future. But uh, what we want to do is try and identify themes, things that are open that we want to uh, polish even further. and uh, try to maybe um, highlight what we think is attractive about uh, the concept.

### Claude

Got it. Here's everything so far, organized, followed by my critique.

## Design pillars (what makes it attractive)

1. **You choose by what you see and inherit what's hidden.** You pick robots by their phenotype (how they look and how they performed) and inherit their genotype (the hidden blueprint). This is the clearest single description of the game we have so far.
2. **A robot's appearance should come from its blueprint.** Its physical form reflects its design: heavy materials look bulky, light ones look lean. Your designs are something you can actually see.
3. **Every match tells you something.** Turns unfold with visible effects and damage. After the match there's a light way to study what happened and form your own opinion about which designs interest you.
4. **Evolution through crossing.** Blueprints work like genetic programming trees, and crossing swaps parts between them. Nothing guarantees a better result: the outcome can be better, worse, or just different.
5. **Limited memory forces choices.** You have a small number of blueprint slots. You capture, cross, then decide where the result goes and what to drop. Over a whole career, those trade-offs show who you are as a designer.
6. **Knowledge gets copied, not stolen.** Taking a blueprint copies it. The opponent loses nothing.
7. **Asynchronous, relaxed play.** Submit your turn, close the app, come back later.
8. **The narrative is a set of possible directions, not a fixed plot.** The themes are lost knowledge, isolated civilizations, contact through arenas, and rebuilding robotics without AI.

## Decisions so far (all provisional)
- **Access scales with results.** Winners see more (for example two blueprints). Losers see less (one, or part of one). Winners improving faster is acceptable.
- **No aging.** Robots don't degrade for now.
- **Starter archetypes.** Everyone starts with predefined archetypes (tank and others) that crossing will move away from over time.
- **Stats are negotiable.** The tree model might replace a classic stat system.

## My critique

**1. Most crossings in genetic programming make things worse.** In real GP, most offspring from crossing are worse than their parents. Copy that directly and players will mostly experience disappointment. The mechanisms you mentioned for improving the odds aren't optional extras. They're what makes the core loop enjoyable. Self-play simulation helps here too: it lets players filter out bad offspring cheaply before committing them to their squad.

**2. Readability gets harder as the tree gets more expressive.** A more flexible tree is harder for a player to reason about, and inference only works if players can reason. Whatever the tree is, it has to produce things players can read: form, behavior, and visible effects. The tree can stay hidden underneath, but what it produces has to make sense.

**3. Generating the robot's form from its blueprint has the biggest payoff and the biggest cost.** It's also what makes inference reliable, so it matters doubly. Fully generative visuals are a research project. Modular parts assembled according to the tree are achievable. I'd plan for the modular version and treat the generative version as a stretch goal.

**4. "Winners run out of diversity" is a hypothesis, not a balancing force.** Matchmaking usually pairs winners with other winners, who also have strong and diverse robots. Treat it as a nice side effect if it happens. Don't count on it to keep winners in check.

**5. Your slot example already shows the design working.** With three slots (original, captured, remix), every match turns into a small dilemma about what to keep. That's the right size of decision for a game played on phones in short sessions.

## Open questions
- **Story:** pick a premise, the purpose of the arenas, and who the player is.
- **Blueprint model:** a tree of parts, a stat system, or a mix.
- **Crossing odds:** how players improve their chances of a good result.
- **Squad size:** single robot vs. a small squad.
- **Turn structure:** alternating vs. simultaneous resolution. Still undecided.
- **Ending matches:** how async matches avoid stalling.
- **Monetization:** paid reveals vs. the risk of pay-to-win.
- **Classes:** fixed classes vs. emerging ones, beyond the starter archetypes.
- **Slots:** how many, and whether there's any archive.
- **Self-play:** how much it can achieve before it makes PvP unnecessary.

Do you want to keep going, or should I turn this into a living baseline document you can refine over time?

---

## 6. Repository setup (summary)

- Andrés asked for a Markdown wiki and wanted to confirm the target folder first. The session had started in the unrelated `zaga-ai-engineering-playbook` repo, so nothing was written there.
- Andrés chose a new GitHub repo. Claude couldn't create it (the integration lacks permission to create repositories), so Andrés created `andreshernandez-zaga/robot-arena-design`.
- Claude pushed the wiki (`wiki/`), `README.md`, and `CLAUDE.md` to `main`, then started a new Claude Code session tied to this repo ("Robot Arena — game concept design") so the work appears under its own project.
- Andrés then asked for this `scratchpad/` folder with the conversation transcript, to reference from the new session.
