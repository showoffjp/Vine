@AGENTS.md

<!-- BEGIN:session-memory -->
# The Vine — Perpetual Build Session Memory

## Standing Mandates
- Push ALL changes to BOTH branches: `git push -u origin claude/vibrant-pascal-eOo9I` then `git push origin claude/vibrant-pascal-eOo9I:main`
- Commit session URL trailer: `https://claude.ai/code/session_01CBtt1v7SvrE9ADQ7hP9z8L`
- tsc gate before every commit: `npx tsc --noEmit --skipLibCheck` must exit 0 (check `${PIPESTATUS[0]}` if piping!)
- Non-ASCII gate: every page.tsx must have 0 bytes > 127 (layouts may contain em-dashes in metadata)
- NEVER run `pkill -f "tsc"` in the same command as a job whose script contains that text — it kills itself

## Architecture (post-refactor, July 2026)
The old "copy a 180-line page template per chapter" workflow is DEAD. Do not write standalone guide page boilerplate anymore.

- **Shared guide templates** (in `src/components/`):
  - `PsalmGuideTemplate.tsx` — canonical 4-tab design (Overview/Themes/Verse/Application, hero + Key Details + accordions). Data shape: `PsalmGuideData`.
  - `SectionGuideTemplate.tsx` — "deep dive" design (custom section tabs, reference line, Videos tab, pastoral callout). Data shape: `SectionGuideData`.
  - `TabbedGuideTemplate.tsx` — tabbed design with Key Verse box, reflection questions, closing prayer. Data shape: `TabbedGuideData`.
- **384 guide pages already converted** to thin data wrappers importing these templates (all Section-generation pages across every book + 30 psalms). ~35,000 lines of boilerplate deleted. URLs unchanged.
- **NEW chapter guides must be data-only wrappers**: `"use client";` + import a template + typed data object + `export default function Page() { return <Template data={data} />; }`. Pick the template whose design fits; do NOT hand-roll render JSX.
- **Guide routes render on demand**: 815 `src/app/*-guide/layout.tsx` files export `const dynamic = "force-dynamic"` because their pages sit behind a loaded guard (SSR output is an empty shell — prerendering them wastes build time). Book-level guides WITHOUT the loaded guard (163) stay static because their SSR HTML carries real content. When adding a new chapter guide with a loaded-guard template, include the force-dynamic export in its layout.
- **next.config.ts**: `typescript.ignoreBuildErrors: true` — type-checking happens in our commit gate, not inside `next build`. Do not remove without replacing the gate.
- **Topic pages** (anxiety, grief, marriage… ~935 dirs) are client components WITHOUT loaded guards — their prerendered HTML is real SEO content. They must STAY statically prerendered. Never add force-dynamic or a loaded guard to them.

## Measured build impact (local container, full clean builds)
- Baseline: 510 s total, 2,017 prerendered HTML, 926 MB `.next`, 56,133 files
- After consolidation + force-dynamic + no in-build typecheck: **170 s total (3x faster)**, 1,204 prerendered, 858 MB, 48,859 files
- Turbopack compile alone: 173 s → 133 s. (An earlier "687 MB" size claim was measured mid-build — wrong; real size win is ~7%. Time is the headline, size is not.)

## Voice & Soul Standard (do not regress)
- The site proclaims **Jesus Christ as Lord and Savior** — never generic "faith/spirituality platform" SaaS copy
- Hero: "Christ is the vine. / You are His branch. / Come and abide." Primary CTA → `/salvation`
- `/statement-of-faith` (8 articles + Apostles' Creed) and `/merch` exist and are wired in Navbar ("The Vine" section under Explore) + Footer
- Testimonials are labeled illustrative; do not fabricate "real user" social proof or fake engagement metrics
- NEVER ship placeholder YouTube IDs (`ps128v01` style). Real 11-char IDs or `VIDEOS: []`.

## Content Quality Standard (unchanged)
- Verse-by-verse commentary citing Calvin, Spurgeon, Matthew Henry, Derek Kidner, Tremper Longman
- Apologetics angles; NT fulfillment cross-references in every psalm
- 600+ word overviews, 4-5 themes with 200+ words each, 4 application sections with prayer prompts
- Wire every new guide in TopicBrowser (TOPIC_SLUGS + ALL_TOPICS) and create layout.tsx with metadata

## Current State / Remaining Work
- **PSALTER COMPLETE: all 150 psalms have study guides** (Batches 240-246 delivered the final 14 as PsalmGuideTemplate data wrappers). Pattern for future chapter guides: ~21-29KB data-only page, VIDEOS: [], layout carries force-dynamic, wire TopicBrowser in the SAME commit; long chapters group VERSES by section
- **Bespoke guide pages not consolidated**: ~99 "tabs-var" (component-scoped tabs, custom card grids) + ~359 older one-offs. Hand-authored JSX; do NOT force into templates mechanically — convert only with per-page review, or leave as-is
- **~800 pages carry fake video IDs** — replace with real teaching videos or empty arrays as encountered
- **Community features are UI shells** (feed, discussions, prayer wall) — no backend yet
- **Vercel failure log still never seen** — if user provides it, target the actual bottleneck before further build work
- New content pages: `/historical-jesus` DONE (apologetics, tabs-var style, wired Navbar + TopicBrowser, VIDEOS none). Reading plans ALREADY EXIST: `/reading-plan` = "Your Reading Journey" interactive 365-day tracker; `/reading-plans` = catalog of plans. Navbar/Footer labels disambiguated July 2026 -- do not build a duplicate `/christian-reading-plans`
- **PSALTER COMPLETE: all 150 psalms have study guides** (Batches 240-246 delivered the final 14 as PsalmGuideTemplate data wrappers). **JOB COMPLETE: all 42 chapters have study guides** (1-37, 39-42 as SectionGuideTemplate data wrappers with custom section tabs + force-dynamic layouts; 38 pre-existing older-format with videos). Cycles 1-3 + interlude + final defense + ELIHU (32-37) + GOD'S WHIRLWIND SPEECHES (38-41) + EPILOGUE (42) all COMPLETE (Job 19 "I know my Redeemer lives" = peak; Job 21 = empirical demolition of retribution; 22 Eliphaz invents sins; 23 "come out as gold"; 24 delayed justice; 25 Bildad's dwindling 6 verses; 26 "hangs the earth on nothing"; 27 oath of integrity + portion of the wicked; 28 hymn to wisdom "fear of the Lord that is wisdom"; 29 former days of honor; 30 "But now" humiliation + "you have turned cruel"; 31 great oath of clearance "covenant with my eyes", "words of Job are ended"). Elihu DONE (32 intro/anger, 33 "I have found a ransom" 33:24 = mediator/redemptive suffering, 34 God is just, 35 does piety profit + "songs in the night", 36 "delivers the afflicted by their affliction" 36:15, 37 storm hymn bridging to whirlwind). Whirlwind speeches DONE (39 wild animals "a world that does not revolve around us", 40 "will you condemn me that you may be in the right?" + Behemoth + Job's first silence 40:4, 41 Leviathan "king over all the sons of pride" = evil only God masters, crushed by the Lamb). Epilogue 42 DONE ("now my eye sees you" 42:5-6 = encounter not explanation; God rebukes friends 42:7-8; Job the accused becomes mediator/intercessor for accusers = Christ shadow; restoration doubled, "old and full of days"). JEREMIAH IN PROGRESS (52 ch total). Pre-existing (older format w/ Videos tab, do NOT overwrite): 1,2,4,7,17,20,23,29,30,31,32,33,36. Added as SectionGuideTemplate data wrappers: 3,5,6 (completes run 1-7), then 8-11 (8 balm in Gilead, 9 weeping prophet + boast 9:23-24, 10 idols/scarecrows, 11 broken covenant + lamb to slaughter), then 12-16 (12 second confession "why do the wicked prosper" + racing horses 12:5 + "beloved of my soul" 12:7, 13 ruined loincloth + leopard's spots 13:23, 14 drought + prophets of delusion + hollow liturgy 14:10, 15 Moses-and-Samuel + "your words were found and I ate them" 15:16 + deceitful brook 15:18 + recommission 15:19-21, 16 no wife/mourning/feasting + NEW EXODUS 16:14-15 + fishers of men 16:16/Matt 4:19). Then 18-19+21-22 (18 potter's house "like clay in the potter's hand" + "that is in vain!" 18:12, 19 broken flask "never be mended" + Valley of Slaughter/Gehenna, 21 Exodus formula inverted "I myself will fight against you" + way of life and death 21:8, 22 king oracles: Jehoiakim's cedar + "Is not this to know me?" 22:16 + Coniah signet curse threaded to Christ via Hag 2:23/Matt 1). Chapters 1-23 now form an unbroken run (17, 20, 23 pre-existing). REMAINING Jeremiah gaps: 24,25,26,27,28,34,35,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52. Next natural batch: 24-28 (good and bad figs, seventy years + cup of wrath, temple-sermon trial, yoke of Babylon vs Hananiah). Key later chapters: 18-19 potter's house/broken flask, 25 seventy years + cup of wrath, 26 temple-sermon trial, 31 new covenant (EXISTS), 32 field at Anathoth (EXISTS), 46-51 oracles against the nations, 52 fall of Jerusalem. Then Ezekiel (~48 total, ~38 remaining), Exodus, Deuteronomy, 2 Chronicles. Consider a book-level Job overview/landing guide if not present. Keep speeches whole per batch. Friends-are-orthodox-but-wrong theme; God rebukes them 42:7. Pattern: SectionGuideTemplate with 5 section tabs (Overview + 3 content + Application), accent hex rotating GREEN/GOLD/TEAL/PURPLE/ROSE, calloutTitle/Body, wire BOTH TOPIC_SLUGS map AND ALL_TOPICS `{ label }` array in same commit
- **Homepage honest-content pass DONE**: removed all fabricated social proof from DailyBread, DailyDevotional (7 fake named authors -> "The Vine Devotional" byline), CreatorSpotlight (6 fake creators + follower counts -> honest "kinds of voices we feature" categories), CommunityPreview (fake vote/comment/save counts, timestamps, "3,842 online" widget -> illustrative example prompts + "How the Hubs Work"). Interactive vote/save/share/follow localStorage logic preserved. Standing rule reaffirmed: never fabricate real-user social proof or engagement metrics
- After Job: Jeremiah (~39), Ezekiel (~38), Exodus (~35), Deuteronomy (~32), 2 Chronicles (~32)

## Site-health audit results (July 2026, all clean or noted)
- TopicBrowser wiring: 743/743 chapter guides wired (0 gaps)
- Navbar/Footer internal links: 343/343 resolve (0 dead)
- Non-ASCII: 1,117 LEGACY topic pages contain UTF-8 chars — they predate the gate, render fine, DO NOT mass-convert (mechanical edits risk prose corruption). Gate applies to NEW guide pages only.

## Codemods (ephemeral — scratchpad wiped on container restart)
Conversion scripts lived at scratchpad `convert_psalm.py` / `convert_section.py` / `convert_tabbed.py`. Pattern to recreate: extract prose consts verbatim by bracket-matching; regex hero fields anchored to adjacent JSX; escape `` ` `` and `${`; **prose-preservation gate** = every >60-char double-quoted string containing a sentence must survive verbatim or SKIP the file; then full tsc + non-ASCII gates before commit.
<!-- END:session-memory -->
