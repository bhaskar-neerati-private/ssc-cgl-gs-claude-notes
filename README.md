# SSC CGL GS Notes

Personal, always-available SSC CGL General Studies prep hub, published via GitHub Pages.

Github Pages hosting [here](https://bhaskar-neerati-private.github.io/ssc-cgl-gs-claude-notes/)

- **Static GS** (`/static/`) — one-time, deep, priority-ordered lessons by subject. Built once, used forever for revision.
- **Current Affairs** (`/current-affairs/`) — daily dashboard with a date picker; each day ends with a "Related Static Facts" block linking news to existing static topics.

## Structure

```
/index.html                        landing page
/static/index.html                 syllabus progress tracker
/static/<subject>/<topic>.html     one page per static topic
/current-affairs/index.html        date-picker dashboard
/assets/css/style.css              shared styles
/assets/js/                        rendering logic (static.js, current-affairs.js, topic-page.js)
/assets/data/progress.json         subject/topic priority order + completion status
/assets/data/current-affairs/      one JSON file per month, keyed by date
/assets/content/<subject>/         markdown source for each static lesson
/prompts/static-session.md         reusable prompt: continue static GS lessons from any clone
/prompts/current-affairs-session.md   reusable prompt: build today's current affairs from any clone
```

## Subject priority order (locked)

Polity → Modern History → Indian Geography → Economy → Science (Biology → Chemistry → Physics) → Ancient & Medieval History → World Geography → Art & Culture → Static GK (built incrementally throughout).

## Depth tiers

- **Tier A** (Polity, Modern History, Geography, Economy): full structured lesson with reasoning, not just facts.
- **Tier B** (Science, Ancient/Medieval History, World Geo, Art & Culture): structured fact-sheet.
- **Tier C** (Static GK): flashcard/table deck, engaging presentation (mnemonics, grouped storytelling, flip-cards).

## Workflow

Content is built across sessions using `/prompts/static-session.md` and `/prompts/current-affairs-session.md` — any fresh session can clone this repo, run the relevant prompt, and continue exactly where the last session left off via `progress.json`. Git pushes are always handed to the user as explicit commands, never executed automatically.
