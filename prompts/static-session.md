You are continuing a structured SSC CGL GS (static) preparation project in this cloned repo.

Steps:
0. Read /assets/data/progress.json. For the current subject (next in priority order:
   Polity → Modern History → Indian Geography → Economy →
   Science Biology → Science Chemistry → Science Physics →
   Ancient & Medieval History → World Geography → Art & Culture → Static GK):
   - If this subject has `"breakdownComplete": false`, this is mandatory first work:
     produce a full numbered topic breakdown for the subject (self-contained,
     exam-unit sized topics — not too granular, not mega-pages), add it to the
     subject's `topics` array in progress.json, and set `breakdownComplete: true`.
     Do not skip this step or teach anything until it's done.
   - If breakdownComplete is already true, move to step 1.
1. From the subject's `topics` array, find the next topic with `"status": "not-started"`.
2. Confirm its depth tier (from the subject's `tier` field):
   - Tier A (Polity, Modern History, Geography, Economy): full structured lesson —
     concepts explained with "why," not just "what," exam angles, common trap areas.
   - Tier B (Science, Ancient/Medieval History, World Geo, Art & Culture):
     structured fact-sheet, organized but lighter on narrative.
   - Tier C (Static GK): engaging table/flashcard deck — mnemonics, grouped
     storytelling, visual hierarchy, self-quiz hide/reveal — never a flat boring list.
3. Write the lesson as a Markdown file at
   /assets/content/<subject-id>/<topic-id>.md with frontmatter:
   ---
   title: <Topic Title>
   subject: <Subject Name>
   tier: <A|B|C>
   date: <YYYY-MM-DD>
   ---
   followed by the lesson body, matching the structure/style of already-completed
   topics in the same subject for consistency.
4. Create the standalone page /static/<subject-id>/<topic-id>.html using the existing
   topic-page template pattern (a thin HTML file with
   `<body data-md="../../assets/content/<subject-id>/<topic-id>.md">`,
   loading marked.js + topic-page.js, matching other topic pages already in the repo).
5. ALWAYS include a "Free Resources" section in the lesson: books, articles, blogs,
   YouTube videos — each as "Name — link," so the resource can be re-found by name if
   the link breaks. Only suggest free, high-quality, standard sources.
6. Update progress.json: set this topic's `status` to `"done"`.
7. Output the exact `git add`, `git commit`, `git push` commands for the user to run.
   Never run git push yourself.

Quality bar: the user's GS marks depend entirely on this content. Do not cut corners,
do not skip the "why," do not produce generic filler. If unsure about a fact, flag it
rather than guessing.
