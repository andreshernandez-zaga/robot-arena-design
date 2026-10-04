# CLAUDE.md

This repo is a **concept-stage game design wiki**. There is no game code yet. `tools/wiki-viewer/` only builds a clickable viewer of the markdown.

## How to work with the owner

- The owner thinks out loud in long monologues, in English and Spanish. Let them finish. Keep replies short while they're still talking, and don't steer toward mechanics unless asked.
- Stay conceptual: themes, experience, intent. Mechanics and numbers are illustrative unless the owner says otherwise.
- Be critical and honest, not sycophantic. Point out risks and tensions plainly.
- Nothing is settled. Record decisions as **Provisional** or **Open** in `wiki/decision-log.md`.

## Wiki conventions

- All design content lives in `wiki/`. `wiki/README.md` is the index.
- `scratchpad/` holds raw material (conversation transcripts, rough notes). Use it for context, but `wiki/` is the source of truth.
- When new ideas come in, update the relevant page, `wiki/open-questions.md`, and `wiki/decision-log.md`.
- Every wiki page has a nav bar under its H1 (Wiki home, previous, next), repeated at the bottom, plus a **Related** list. When adding a page, add it to the table in `wiki/README.md`, to the previous/next bars of its neighbors, and give it a Related list.
- The owner browses the wiki through a viewer published as a Claude Artifact: https://claude.ai/artifact/Ct5p4hWDKR2VYwEGufvenF. It is a built snapshot and does not follow the repo by itself. After you change any `.md` file, run `cd tools/wiki-viewer && npm ci && node build.mjs`, then publish `tools/wiki-viewer/dist/wiki-browser.html` to that URL with the Artifact tool (read the artifact first if the publish is refused). Open viewers pick the new version up automatically. The build warns if a wiki page is missing from the Pages table in `wiki/README.md`.
- Write in English, even when the owner speaks Spanish.
