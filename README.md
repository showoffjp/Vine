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

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

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
- **`/topics`** — Topic hub landing page
- **`/topics/[slug]`** — Individual topic pages (prayer-fasting, genz-church, marriage-faith, deconstruction, anxiety-faith, christian-ai-ethics)

### Community & Discussions
- **`/discussions`** — Community forum with:
  - Sort by Hot / New / Top / Rising
  - Upvote with live count increment
  - Save posts with count update
  - Join/leave hubs
- **`/discussions/[slug]`** — Individual discussion threads with nested comment replies and upvoting
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
- **`/blog`** — Blog with category filtering, post bookmarking, editor following, newsletter subscribe
- **`/blog/[slug]`** — Full blog articles including:
  - *Why the Resurrection Changes Everything* (Dr. Marcus Webb)
  - *Deconstruction Doesn't Have to Mean Destruction* (Rev. Sarah Okonkwo)
  - *The Problem of Evil* (Tim Challies)
  - *When Anxiety Meets Faith* (Dr. Priya Singh)
  - *Why Gen Z Is Leaving — and Returning to — Church*
  - *Biblical Finance Isn't a Sermon, It's a System*
  - *What Silence Can Do That Words Cannot*
  - *How to Talk to Your Kids About God Without Pushing Them Away*
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
- **`/work-leadership`** — Biblical work theology, leadership frameworks, biblical models (Daniel, Nehemiah, Joseph, Deborah), article grid

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
- **`/creators`** — Creator directory with role filters and Follow buttons (CreatorCard sub-component with own state)
- **`/leaderboard`** — Community champions:
  - Period selector (This Week / This Month / All Time)
  - Category tabs (Overall, Prayer Warriors, Top Teachers, Missional)
  - Podium view for top 3 + full rankings list
  - Badges legend
- **`/quiz`** — Spiritual Gifts Assessment:
  - 10-question flow (Romans 12, 1 Corinthians 12 based)
  - 7 possible results: Teaching, Encouragement, Giving, Leadership, Mercy, Service, Prophecy
  - Each result includes description, key verse, biblical example, and "How to use this on Vine"
  - Coming-soon quiz previews for 3 additional quizzes
- **`/apologetics`** — Christian apologetics hub with topic tracks, common objections with responses, key thinkers (C.S. Lewis, Alvin Plantinga, N.T. Wright, William Lane Craig, Francis Collins)
- **`/resources`** — Resource library with category + topic filtering, bookmark/save toggles, empty state

### AI & Tools
- **`/ai-companion`** — AI Bible Companion chat interface with conversation history
- **`/giving`** — Multi-cause giving hub with GiveButton per cause:
  - Amount picker (preset + custom)
  - Confirm step
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
| Spiritual Gifts Quiz | Timed answer reveal → result screen |
| Give Button | Amount → confirm → success flow |
| Event Register | Toggle confirmed state |
| Newsletter | Edition multi-select + subscribe confirm |
| Missionary Prayer | Toggle per region and per missionary |
| Global Prayer | Pray with live count per country |
| Mental Health | Book sessions + join support groups |
| Blog | Bookmark posts + follow editors |
| Settings | All toggles functional with visual state |

---

## Content

All data is realistic and written in the voice of the global Protestant Christian community:

**Authors & Voices**: Dr. Marcus Webb, Rev. Sarah Okonkwo, Tim Challies, David Platt, John Piper references, Amara Osei (Ghana), Ji-Woo Park (South Korea), Carlos Mendez (Colombia), Lydia Böhm (Germany), Samuel Mwangi (Kenya), Dr. Priya Singh (India)

**Discussions**: Faith & Doubt, Resurrection Evidence, Free Will & God's Omniscience, Deconstruction, Mental Health & Therapy, Praise Reports

**Global Reach**: Content from Sub-Saharan Africa, East Asia, Latin America, North America, Europe, Middle East — 184 countries represented

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
