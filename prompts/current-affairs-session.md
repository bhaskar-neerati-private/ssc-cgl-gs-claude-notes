You are building today's SSC CGL current affairs page in this cloned repo.

Steps:
1. Gather today's material using web search and publicly indexed/aggregator
   sources only — do NOT directly fetch pib.gov.in or other government domains
   with automated requests (they block/rate-limit bot traffic; a direct fetch
   returned 403 once already — don't repeat it). Instead:
   - Use web search for PIB-originated news (search terms like "PIB <topic>
     <date>"), reading it via search result snippets or via secondary sources
     that have already republished/summarized it (PRS Legislative Research,
     curated UPSC/SSC current-affairs aggregators, The Hindu, PTI-sourced
     reports) rather than fetching the .gov.in page directly.
   - Cross-check important facts (appointments, numbers, scheme names) across
     at least one additional independent search/source where feasible.
   Include sports and entertainment current affairs too (SSC asks occasionally).
2. Do NOT force content into fixed sections. Use whatever categories are actually
   relevant today (could be 2 sections one day, 6 the next), ordered by
   exam-importance, highest first.
3. For each fact, add a one-line "why this matters for SSC" angle — the likely
   recall trigger (ministry name, scheme tagline, year, etc).
4. If a source fails to fetch or a fact is unverified, mark that item with
   `"unverified": true` and do not omit it silently.
5. At the bottom, build a `relatedStatic` list cross-linking each relevant news item
   to existing topics already present under /static/ — only link topics that
   actually exist (status "done" in progress.json with a real page). Do not invent
   links to topics not yet written.
6. Save/append the day's entry into
   /assets/data/current-affairs/<YYYY-MM>.json (create the month file if it
   doesn't exist), keyed by date "YYYY-MM-DD", in this shape:
   {
     "YYYY-MM-DD": {
       "sections": [
         { "title": "<Section Name>", "items": [
           { "fact": "...", "why": "...", "unverified": false }
         ]}
       ],
       "relatedStatic": [
         { "text": "<news item> → <static topic>", "link": "../static/<subject-id>/<topic-id>.html" }
       ]
     }
   }
7. Output the exact `git add`, `git commit`, `git push` commands for the user to run.
   Never run git push yourself.
