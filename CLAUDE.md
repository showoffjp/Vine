@AGENTS.md

<!-- BEGIN:session-memory -->
# The Vine — Perpetual Build Session Memory

## Standing Mandates
- Push ALL changes to `main` AND `claude/vibrant-pascal-eOo9I` (via `git push -u origin main:claude/vibrant-pascal-eOo9I`)
- Commit session URL trailer: `https://claude.ai/code/session_01CBtt1v7SvrE9ADQ7hP9z8L`
- tsc gate before every commit: `npx tsc --noEmit --skipLibCheck` must exit 0
- Non-ASCII gate: every page.tsx must have 0 bytes > 127
- No background agents — write pages directly in this session (keeps app fast, keeps Opus pinned)
- Model: Opus 4.8, foreground only

## Critical Page Rules
- `"use client";` must be byte 0, line 1 — no BOM, no blank line before it
- All paragraph text via `dangerouslySetInnerHTML={{ __html: "..." }}`
- HTML entities inside those strings: `&mdash;` `&ldquo;` `&rdquo;` `&hellip;` `&amp;`
- camelCase CSS only: `borderTop` not `bordertop`, `paddingTop` not `paddingtop`
- VideoEmbed: `{ videoId: "ID", title: "..." }` and `v.videoId` / `v.title` — NOT `v.id`
- Outermost div first style: `paddingTop: "var(--header-height, 80px)"`
- loaded guard: `useState(false)` + `useEffect(() => setLoaded(true), [])` + `if (!loaded) return null`
- Module-scope colors (copy exactly):
  ```
  const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
  const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
  const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
  const ROSE = "#E11D48";
  ```
- layout.tsx: server component, no "use client", exports `const metadata: Metadata`
- Page size: >20,000 bytes minimum
- 4 tabs: overview, themes, verse, application

## Batch Workflow
1. Pre-check: `ls -d src/app/BOOK-N-guide` AND `grep "BOOK N Chapter" src/components/TopicBrowser.tsx`
2. Wire TopicBrowser (TOPIC_SLUGS + ALL_TOPICS) + create layout.tsx
3. Commit wiring
4. Write 4 page files directly (no background agents)
5. Validate: python3 non-ASCII check + `npx tsc --noEmit --skipLibCheck`
6. Commit + push to both branches
7. Next batch

## Last Completed Batch
- **Batch 229** (pushed): Psalm 48, 76, 87, 122 — Songs of Zion
- **Batch 230** (pushed): Psalm 35, 39, 41, 43 — Davidic laments
- **Batch 231** (pushed): Psalm 49, 50, 52, 53 — wisdom & judgment
- **Batch 232** (pushed): Psalm 54, 55, 56, 57 — David in flight
- Also: dynamic sitemap.ts, Footer trim, 35 broken-link fixes
- Latest commit: `69eea9e`

## Missing Psalms (as of batch 232, ~44 remaining)
44, 58, 59, 60, 64, 66, 70, 74, 75, 77, 78, 79, 80, 81, 82, 83, 85, 92, 94, 101,
105, 106, 108, 109, 111, 112, 113, 114, 115, 117, 120, 123, 124, 125, 128, 129,
131, 132, 134, 135, 140, 141, 142, 144

## Next Batch (233) — Pre-cleared, no collisions
Complete the miktam series + Asaph: Psalm 58, 59, 60, 64
Confirm missing on disk and unwired in TopicBrowser before writing.

## Content Quality Standard
- Verse-by-verse commentary citing Calvin, Spurgeon, Matthew Henry, Derek Kidner, Tremper Longman
- Apologetics angles woven into every page
- NT fulfillment cross-references in every psalm
- 600+ word overviews, 4-5 themes with 200+ words each
- 4 application sections with prayer prompts

## After Psalms — Largest Gaps
- Job: ~41 chapters missing
- Jeremiah: ~39 chapters missing
- Ezekiel: ~38 chapters missing
- Exodus: ~35 chapters missing
- Deuteronomy: ~32 chapters missing
- 2 Chronicles: ~32 chapters missing

## New Content Pages to Build (not chapter guides)
- `/bible-manuscript-evidence` — textual reliability, Dead Sea Scrolls, manuscript counts
- `/historical-jesus` — extrabiblical sources (Josephus, Tacitus, Pliny)
- `/christian-reading-plans` — chronological Bible, thematic, etc.
<!-- END:session-memory -->
