<div align="center">

<br/>

```
██╗   ██╗██╗███╗   ██╗███████╗
██║   ██║██║████╗  ██║██╔════╝
██║   ██║██║██╔██╗ ██║█████╗  
╚██╗ ██╔╝██║██║╚██╗██║██╔══╝  
 ╚████╔╝ ██║██║ ╚████║███████╗
  ╚═══╝  ╚═╝╚═╝  ╚═══╝╚══════╝
```

**The Christian Social Network**

*"I am the vine; you are the branches." — John 15:5*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Pages](https://img.shields.io/badge/Static%20Pages-152-00FF88)](https://vine.app)

</div>

---

## Overview

Vine is a full-featured Christian social platform built with Next.js 15 App Router, Tailwind CSS v4, and TypeScript. It serves as a hub for Protestant believers worldwide — connecting people through Scripture, community, prayer, worship, discipleship, and real-life content.

Every page is fully interactive. Every button provides visual feedback. All content is realistic, written in the voice of the global Protestant Christian community.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 + inline styles |
| Language | TypeScript |
| Icons | Lucide React |
| Deployment | Vercel (static pre-rendering) |
| State | React `useState` + `localStorage` |

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `#07070F` | Near-black | Page background |
| `#12121F` | Dark card | Card surfaces |
| `#1E1E32` | Border dark | Default borders |
| `#00FF88` | Green accent | CTAs, active states, primary |
| `#6B4FBB` | Purple | Secondary accent |
| `#F2F2F8` | Off-white | Headings, body text |
| `#6A6A88` | Muted gray | Secondary text, placeholders |

The `.page-body` CSS utility class applies header-aware top padding (`padding-top: 80px`) across all pages. The `.btn-gold` class is the primary gradient button style.

---

## Pages & Features

### Core Feed & Navigation
- **`/`** — Landing page with hero, real-time stats, featured content, and onboarding CTA
- **`/feed`** — Main social feed with posts, upvotes, comments, save, and sorting
- **`/explore`** — Searchable content hub with live search filtering and category cards
- **`/search`** — Full-site search across Articles, Discussions, Scripture, Stories, Videos, Groups, People
- **`/notifications`** — Notification center with mark-as-read and category tabs

### Auth & Profile
- **`/onboarding`** — Multi-step signup flow (name → denomination → interests → goals → profile photo) persisted to `localStorage` as `vine_user`
- **`/profile`** — User profile page reading from `vine_user` localStorage, with post/prayer/community tabs

### Scripture & Devotions
- **`/bible`** — Interactive Bible reader with book/chapter navigation, verse highlighting, and cross-references
- **`/daily`** — Daily devotional with verse of the day, reflection, prayer prompt, and community discussion
- **`/reading-plan`** — New Testament in 90 Days tracker with:
  - Circular SVG progress indicator
  - Weekly view with done/today/upcoming states
  - Expandable chapter accordion with mark-as-read toggles
  - Real-time streak counter and pace bar
  - Plan switcher with 4 alternate plans
- **`/topics`** — Topic hub landing page with trending topic rankings and cluster browsing
- **`/topics/[slug]`** — 9 individual topic pages: prayer-fasting, genz-church, marriage-faith, deconstruction, mental-health-god, christian-ai-ethics, resurrection, biblical-finance, biblical-manhood

### Community & Discussions
- **`/discussions`** — Community forum with:
  - Sort by Hot / New / Top / Rising
  - Upvote with live count increment
  - Save posts with count update
  - Join/leave hubs
  - 18 posts across Faith & Career, Theology, Young Adults, Parenting, Mental Health
- **`/discussions/[slug]`** — 18 individual discussion threads with nested comment replies and upvoting:
  - *Faith & Doubt* — questioning God's existence
  - *Free Will & Omniscience* — deep theological dive
  - *Depression + Therapy* — mental health integration
  - *Cancer Free Praise Report* — community answered prayer
  - *Christian Dating Apps* — navigating modern romance
  - *Resurrection Evidence* — faith + science (evolution/Genesis)
  - *Deconstruction Journey* — finding faith after doubt
  - *Tithing Debate* — Old Covenant vs. New Covenant
  - *Prayer Doesn't Feel Real* — authenticity in spiritual practice
  - *Finances Stewardship* — debt freedom journey
  - *Lunch Break Devotional* — integrating faith into work
  - *Worship Feels Empty* — dark night of the soul
  - *Job Loss at 47* — trusting God's provision
  - *Marriage Falling Apart* — vulnerability and church shame
  - *Prodigal Child* — long-season intercessory prayer
  - *Faith at Work* — workplace witness without being weird
  - *Sunday Church Attendance* — mandatory or cultural?
  - *Biblical Manhood in 2026* — Christlike masculinity
- **`/community`** — Community circles with join/leave, featured circles, nearby groups, member invite by email
- **`/prayer`** — Live prayer wall with:
  - Animated "Live" indicator
  - Submit prayer request form (topic, name/anonymous toggle, text)
  - Tab filtering by category
  - Pray button with animated count increment
  - Prayer Champions leaderboard
  - Recently Answered sidebar
  - Prayer Tip of the Day

### Content
- **`/blog`** — Blog with category filtering (All, Theology, Life & Faith, Apologetics, Culture, Leadership, Family, Work & Faith, Devotional), post bookmarking, editor following, newsletter subscribe
- **`/blog/[slug]`** — 20 full blog articles:
  - *Why the Resurrection Changes Everything* — Dr. Marcus Webb
  - *AI, ChatGPT, and the Church: A Faithful Reckoning* — James Okafor
  - *The Problem of Evil* — Dr. Marcus Webb
  - *The Digital Sabbath* — Rev. Sarah Okonkwo
  - *Prayer That Actually Works* — Bishop Emmanuel Adeyemi
  - *Marriage: Covenant, Not Contract* — Rev. David & Naomi Park
  - *Why Jesus Assumed You Would Fast* — Rev. Josephine Kamau
  - *Deconstruction Isn't the Enemy* — Lydia Böhm
  - *God Talks About Money More Than Heaven* — Pastor Emmanuel Nkemdirim
  - *Servant Leadership: What Jesus Actually Taught* — Dr. Grace Mbeki
  - *The Psalms as Permission to Lament* — Rev. Amara Osei
  - *When Marriage Is Hard* — Dr. Naomi Park
  - *Raising Faith-Filled Children* — Dr. Sarah Kimani
  - *The Theology of Monday* — Rev. Marcus Webb
  - *Is Christian Ambition an Oxymoron?* — Dr. Grace Mbeki
  - *How to Talk About Faith at Work Without Being Weird* — James Okafor
  - *N.T. Wright's Resurrection Case — A Summary* — Dr. Marcus Webb
  - *Historical Evidence for the Empty Tomb* — Dr. Marcus Webb
  - *Can an AI Have a Soul? Biblical Anthropology* — James Okafor
  - *How Do You Handle Doubt Without Losing Faith?* — Rev. Sarah Okonkwo
- **`/stories`** — Testimony story hub
- **`/stories/[slug]`** — Full testimonies:
  - *Amara Osei — Widowed at 28*
  - *Ji-Woo Park — From K-Pop Idol to Pastor*
  - *Carlos Mendez — From Drug Cartel to Church Planter*
  - *Lydia Böhm — Deconstruction and Back*
  - *Samuel Mwangi — From Prosperity Gospel to Grace*
  - *Marcus Thompson — Cancer Free Praise Report*
- **`/video`** — Video library with category filters, like/bookmark buttons, featured video
- **`/newsletter`** — Newsletter subscriptions:
  - The Weekly Vine (124K subscribers)
  - Daily Bread (89K)
  - Trending Theology (42K)
  - Global Church Report (31K)
  - Edition multi-select, email input, subscribe confirmation

### Worship & Music
- **`/worship`** — Full worship hub with:
  - Playable song cards (click to toggle play/pause)
  - Fixed "Now Playing" bar at bottom when song is active
  - Inline chord chart expansion per song (with key, BPM, time signature)
  - Join worship circles with confirmation
  - Follow worship creators
  - Submit your music form with success state

### Life & Faith Topics
- **`/mental-health`** — Mental health resources, therapist directory with Book Session toggle, support groups with Join toggle
- **`/finances`** — Biblical finance principles + **interactive 10-10-80 Budget Calculator**:
  - Enter monthly or annual income
  - Live splits: Give (10%), Save (10%), Live (80%)
  - Monthly/annual view toggle
  - Annual summary when income entered
- **`/life-hacks`** — 15+ practical Christian life hacks with category filtering (Sleep, Parenting, Money, Relationships, etc.) and save counts
- **`/parenting`** — Stage-by-stage wisdom (0–5, 6–12, teens, adult children) with Scripture references and feature articles
- **`/relationships`** — Dating, marriage, singleness, and friendship content with resource pillars
- **`/work-leadership`** — Biblical work theology, leadership frameworks, biblical models (Daniel, Nehemiah, Joseph, Deborah), article grid with real links to blog posts

### Global & Missions
- **`/global-connect`** — Global church community hub:
  - 6 region cards with join circles (toggle with checkmark)
  - Global Prayer Wall with live pray counts per country
  - World member profiles with Connect toggle
  - Set Your Location button with confirmation state
- **`/missions`** — Great Commission hub:
  - Priority region cards with "Pray for this region" toggle
  - Missionary spotlight cards with Follow + Pray buttons
  - 6 Ways to Engage (Pray, Give, Go, Send, Reach Locally, Translate)

### Events
- **`/events`** — Worldwide events calendar with full filter system:
  - Filter by event type (Conference, Retreat, Workshop, Online, Local Church)
  - Filter by month (Jun–Nov toggle)
  - Search by name/location/host with live filtering
  - "Near Me" toggle (in-person events only)
  - Empty state with clear-all
  - EventRegisterButton per card with confirmation flow
- **`/events/[slug]`** — Individual event detail pages

### Discovery & Growth
- **`/creators`** — Creator directory with role filters and Follow buttons (CreatorCard sub-component with own state); all 12 creators have full detail pages
- **`/creators/[slug]`** — 12 creator profiles: Ama Christabel, Marcus Osei, Tunde Coker, Eva van der Berg, Ruth Adeyemi, Sarah Jennings, Ji-Yeon Park, Luiz Figueiredo, Grace Wanjiku, Carlos Mendoza, Priya Rajan, Ben Harrison, Joel Pastrana
- **`/leaderboard`** — Community champions:
  - Period selector (This Week / This Month / All Time)
  - Category tabs (Overall, Prayer Warriors, Top Teachers, Missional)
  - Podium view for top 3 + full rankings list
  - Badges legend
- **`/quiz`** — 4 fully functional spiritual quizzes:
  - *What Is Your Spiritual Gift?* — 10 questions, 7 results (Teaching, Encouragement, Giving, Leadership, Mercy, Service, Prophecy)
  - *Which Biblical Character Are You?* — 8 questions, 9 results (Joseph, David, Paul, Ruth, Moses, Esther, Peter, Deborah, Jacob)
  - *How Strong Is Your Faith Muscle?* — 12 questions, 4 levels (Seedling, Sapling, Flourishing, Mighty Oak) — scored numerically
  - *What's Your Prayer Style?* — 8 questions, 4 types (Warrior, Contemplative, Prophetic, Conversationalist)
  - Each result includes full description, key verse, biblical example, and "How to use this on Vine"
  - Animated progress bar + 380ms answer reveal + share button
- **`/apologetics`** — Christian apologetics hub with topic tracks, common objections with responses, key thinkers (C.S. Lewis, Alvin Plantinga, N.T. Wright, William Lane Craig, Francis Collins)
- **`/resources`** — Resource library with category + topic filtering, bookmark/save toggles, empty state

### Live & Media
- **`/live`** — Live Church Streams hub with:
  - 6 concurrent live streams with animated viewer count
  - Category filter (Worship, Prayer, Bible Study, Youth, Mental Health, Missions)
  - Featured stream with auto-incrementing live viewer count via `useEffect`
  - In-stream live chat with message input and community messages
  - Join/watch toggles per stream
  - Upcoming streams section with Bell/BellOff reminder toggles
- **`/podcast`** — Podcast hub with episode browser, category filters, and play state

### Personal Growth
- **`/journal`** — Personal devotional journal with:
  - Create new entries with title, body, verse reference, mood pill selection, and tag picker
  - Entry list with full-text search and tag filtering
  - Left sidebar showing streak, days journaled, and total entries
  - Detail view for reading past entries
  - Save confirmation state
- **`/challenges`** — Faith Challenges hub with:
  - Featured 30-Day Prayer Streak with interactive 30-day grid (toggle each day completed)
  - 5 active challenges with join/leave toggles
  - Category filter (Prayer, Scripture, Community, Rest, Generosity)
  - Hall of Fame section showing top completers

### AI & Tools
- **`/ai-companion`** — AI Bible Companion chat interface with conversation history
- **`/giving`** — Multi-cause giving hub with GiveButton per cause:
  - Amount picker (preset + custom)
  - Monthly giving option with confirmation celebration
  - Success confirmation with receipt notice

### Settings & Utility
- **`/settings`** — Full settings panel with 8 tabs (Account, Notifications, Privacy, Appearance, Faith Profile, Reading Plans, Connections, Billing), all toggles functional
- **`/about`** — About Vine
- **`/terms`** — Terms of service
- **`/privacy`** — Privacy policy

---

## Interactive Features

Every action across the entire app provides visual feedback. Key patterns:

| Feature | Behavior |
|---|---|
| Prayer Wall | Pray increments count + turns green + disables |
| Discussions | Upvote/save with live count updates |
| Worship playback | Play/pause toggle + fixed Now Playing bar |
| Chord charts | Expand/collapse inline per song |
| Budget Calculator | Live calculation on keypress |
| Reading Plan | Mark chapters read, real-time progress |
| Events filters | Instant filtering across type + month + search |
| Join/Follow | Filled border + checkmark confirmation |
| All 4 Spiritual Quizzes | Timed answer reveal → scored result screen with verse + biblical example |
| Give Button | Amount → confirm → success flow |
| Event Register | Toggle confirmed state |
| Newsletter | Edition multi-select + subscribe confirm |
| Missionary Prayer | Toggle per region and per missionary |
| Global Prayer | Pray with live count per country |
| Mental Health | Book sessions + join support groups |
| Blog | Bookmark posts + follow editors |
| Settings | All toggles functional with visual state |
| Live Streams | Join/watch toggle + live viewer count + in-stream chat |
| Journal | Create/browse/search entries with mood and tag system |
| Challenges | Join challenges + 30-day grid streak tracker |
| Giving (monthly) | Start monthly giving with confirmation state |
| Story Actions | Heart story with live count + save + share |
| Discussion Actions | Upvote OP + save + share in discussion thread |
| Creator Profiles | Follow + unfollow with live follower count |
| Topic Follow | Follow/unfollow individual topic pages |

---

## Content

All data is realistic and written in the voice of the global Protestant Christian community:

**Authors & Voices**: Dr. Marcus Webb, Rev. Sarah Okonkwo, Tim Challies, David Platt, Amara Osei (Ghana), Ji-Woo Park (South Korea), Carlos Mendez (Colombia), Lydia Böhm (Germany), Samuel Mwangi (Kenya), Dr. Naomi Park (Korea/USA), Rev. Josephine Kamau (Kenya), Dr. Grace Mbeki (South Africa), James Okafor (Nigeria/UK), Bishop Emmanuel Adeyemi (Nigeria), Dr. Rachel Osei (Ghana), Rev. David Osei (Ghana), Pastor Marcus Webb (USA)

**Discussions**: 18 fully realized threads covering faith doubts, mental health, marriage crisis, job loss, prodigal children, church attendance debates, biblical manhood, workplace faith, tithing, resurrection evidence, and more

**Blog**: 16 long-form articles with full content, verse blocks, pull quotes, and related article recommendations

**Topics**: 9 topic pages with 4 real discussion entries each, related topic suggestions, and scripture references

**Global Reach**: Content from Sub-Saharan Africa (Ghana, Kenya, Nigeria, South Africa), East Asia (South Korea), Latin America (Colombia, Brazil), North America, Europe (Germany, UK) — 184 countries represented

---

## Development

```bash
npm install
npm run dev      # localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

### Key Patterns

**Client components** use `"use client"` + `useState` for all interactive state. Server components only for pages with no interactivity.

**Auth pattern**: `vine_user` JSON object in `localStorage`, set during `/onboarding`, read in `/profile`.

**Toggle pattern**: `useState<Set<number>>(new Set())` for join/follow/save/upvote across all pages.

**No backend**: Everything is client-side. No database, no API routes, no auth server.
