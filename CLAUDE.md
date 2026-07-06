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
- New content pages: `/historical-jesus` DONE (apologetics, tabs-var style, wired Navbar + TopicBrowser, VIDEOS none); still wanted: `/christian-reading-plans`
- **PSALTER COMPLETE: all 150 psalms have study guides** (Batches 240-246 delivered the final 14 as PsalmGuideTemplate data wrappers). Now working through Job: 1, 2, 3 done (SectionGuideTemplate data wrappers, custom section tabs, force-dynamic layouts) + pre-existing 38; remaining Job ch: 4-37, 39-42. Pattern: SectionGuideTemplate with 6 section tabs (Overview + 4 content + Application), accent hex, calloutTitle/Body, wire TopicBrowser same commit
- After Job: Jeremiah (~39), Ezekiel (~38), Exodus (~35), Deuteronomy (~32), 2 Chronicles (~32)

## Codemods (ephemeral — scratchpad wiped on container restart)
Conversion scripts lived at scratchpad `convert_psalm.py` / `convert_section.py` / `convert_tabbed.py`. Pattern to recreate: extract prose consts verbatim by bracket-matching; regex hero fields anchored to adjacent JSX; escape `` ` `` and `${`; **prose-preservation gate** = every >60-char double-quoted string containing a sentence must survive verbatim or SKIP the file; then full tsc + non-ASCII gates before commit.
<!-- END:session-memory -->
