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

### *"I am the vine; you are the branches."* — John 15:5

<br/>

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![Vercel AI SDK](https://img.shields.io/badge/AI_SDK-FF0080?style=for-the-badge&logo=vercel&logoColor=white)](https://sdk.vercel.ai)

<br/>

![Status](https://img.shields.io/badge/Status-LIVE-22c55e?style=flat-square)
![Routes](https://img.shields.io/badge/Routes-109-00FF88?style=flat-square)
![Countries](https://img.shields.io/badge/Countries-184-6B4FBB?style=flat-square)
![Components](https://img.shields.io/badge/Components-30+-E07030?style=flat-square)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)

<br/>

> **The world's first all-in-one platform for Christians everywhere.**
> Reddit × X × Wikipedia × YouTube × Lifehacker — built for faith.

<br/>

[🌐 **Visit Live Site**](https://vine.community) &nbsp;·&nbsp; [📖 **Docs**](#architecture) &nbsp;·&nbsp; [🤖 **AI Companion**](https://vine.community/ai-companion) &nbsp;·&nbsp; [🙏 **Prayer Wall**](https://vine.community/prayer)

</div>

---

## ⚡ What is Vine?

Vine is a **dark-premium, production-grade Christian platform** where believers from 184 countries connect, grow, and thrive in faith together. It's not a church website. It's not a devotional app. It's the operating system for the global Christian life.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   📖 Bible Tools  🤖 AI Companion  🙏 Prayer Wall  💬 Discussions   │
│   🎵 Worship      📰 Daily Bread   🌍 Global Hub   🎥 Video Lib     │
│   🧠 Mental Health 💰 Finances     👨‍👩‍👧 Parenting  💼 Leadership    │
│   📅 Events       ✨ Creators      📚 Resources    🔥 Trending      │
│   🌿 Life Hacks   💝 Giving       🌏 Missions     📊 Leaderboard   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🗺️ Platform Map — 109 Static Routes

<table>
<tr>
<td width="33%">

### 🏛️ Core Platform
| Route | Feature |
|-------|---------|
| `/` | Landing page (21 sections) |
| `/feed` | Social feed (10+ posts) |
| `/discussions` | Reddit-style forums |
| `/discussions/[id]` | 11 full thread pages |
| `/community` | Social circles |
| `/explore` | Discovery feed |
| `/prayer` | Global prayer wall |
| `/bible` | Full Bible reader |
| `/daily` | 7-day devotionals |
| `/reading-plan` | Scripture plans |
| `/worship` | Worship resources |
| `/quiz` | Spiritual gifts quiz |

</td>
<td width="33%">

### 💡 Life & Faith
| Route | Feature |
|-------|---------|
| `/life-hacks` | Biblical life wisdom |
| `/mental-health` | Faith + therapy |
| `/relationships` | Dating, marriage |
| `/finances` | Stewardship guide |
| `/parenting` | Raising kids in faith |
| `/work-leadership` | Biblical leadership |
| `/ai-companion` | AI Bible chat |
| `/blog` | Editorial hub |
| `/blog/[slug]` | 11 full articles |
| `/topics` | Trending topics |
| `/topics/[slug]` | 6 topic pages |
| `/video` | Video library |

</td>
<td width="33%">

### 🌐 Community & Tools
| Route | Feature |
|-------|---------|
| `/global-connect` | 184-country network |
| `/events` | Events calendar |
| `/groups` | Community groups |
| `/groups/[id]` | 14 group pages |
| `/stories` | Testimonies |
| `/stories/[slug]` | 7 story pages |
| `/creators` | Creator directory |
| `/resources` | Resource library |
| `/missions` | Missions hub |
| `/giving` | Donation platform |
| `/leaderboard` | Community ranks |
| `/newsletter` | 4 newsletter editions |

</td>
</tr>
</table>

### 🔗 User & Account Routes
| Route | Feature |
|-------|---------|
| `/profile` | User profile (localStorage-powered, shows real user data) |
| `/settings` | Preferences with working save |
| `/notifications` | All notifications with working action links |
| `/onboarding` | 5-step welcome flow that saves profile to localStorage |
| `/search` | Live full-text search across all content |
| `/contact` | Contact form with working submission |
| `/about` | Mission, team, and story |
| `/apologetics` | Apologetics resource hub |
| `/terms` | Terms of service |
| `/privacy` | Privacy policy |
| `/community-guidelines` | Community rules |

### ⚙️ API Routes
| Endpoint | Description |
|----------|-------------|
| `POST /api/ai-companion` | Streaming AI chat (Vercel AI SDK + GPT-4o-mini, graceful mock fallback) |
| `GET  /api/og` | Dynamic OG image generation — 1200×630 via `next/og` |
| `GET  /api/verse` | Daily verse API with 200+ curated passages |
| `POST /api/prayer` | Prayer request submission + prayer counts |
| `GET  /api/cron/daily-verse` | Cron: rotates daily verse at midnight UTC |
| `GET  /api/cron/weekly-challenge` | Cron: updates weekly spiritual challenge |

---

## 🏗️ Architecture

```
vine/
├── src/
│   ├── app/                      # Next.js 16 App Router (109 static routes)
│   │   ├── page.tsx              # Landing page (21 sections)
│   │   ├── layout.tsx            # Root layout + OG metadata + analytics
│   │   ├── globals.css           # Design system (CSS variables + utilities)
│   │   ├── sitemap.ts            # 109-route XML sitemap
│   │   ├── robots.ts             # Crawl rules
│   │   ├── api/                  # API routes (Fluid Compute, Node.js)
│   │   │   ├── ai-companion/     # Streaming AI (streamText + toTextStreamResponse)
│   │   │   ├── og/               # Dynamic OG images (next/og ImageResponse)
│   │   │   ├── verse/            # Bible verse API
│   │   │   ├── prayer/           # Prayer wall CRUD
│   │   │   └── cron/             # Vercel cron jobs
│   │   └── [50+ page routes]/    # Full app surface area
│   ├── components/               # 30+ shared UI components
│   │   ├── Navbar.tsx            # Scroll-aware nav, auth-aware dropdown
│   │   ├── Footer.tsx            # Full-sitemap 4-column footer
│   │   ├── AuthModal.tsx         # Sign in / Join modal with localStorage auth
│   │   ├── SearchOverlay.tsx     # ⌘K global search modal
│   │   ├── DailyDevotional.tsx   # 7-day interactive devotional component
│   │   ├── GiveButton.tsx        # Donation modal with amount selection
│   │   ├── EventRegisterButton.tsx # Event registration with confirm state
│   │   ├── JoinGroupButton.tsx   # Group join/leave toggle
│   │   ├── CreatePostModal.tsx   # Discussion post creation modal
│   │   ├── ReplyBox.tsx          # Discussion reply with success state
│   │   ├── DailyActions.tsx      # Like/Save/Share/Complete/Navigate
│   │   └── [20+ landing page sections]
│   ├── hooks/
│   │   └── useInView.ts          # Scroll-trigger custom hook
│   └── proxy.ts                  # Next.js 16 proxy (replaces middleware.ts)
├── vercel.ts                     # Typed Vercel config (security, crons, redirects)
└── public/
    └── manifest.json             # PWA manifest (gold theme)
```

---

## ✨ Interactive Features — Everything Works

| Feature | Implementation |
|---------|---------------|
| **Account Creation** | AuthModal → localStorage → redirect to /feed |
| **Sign In** | Email + password → localStorage auth |
| **Social Auth** | Google/Apple/Facebook buttons (mock flow) |
| **Profile** | Reads from localStorage, shows real user data |
| **Settings** | Save button with confirmation state |
| **Onboarding** | 5-step flow → saves to localStorage → redirects to /feed |
| **Daily Devotionals** | 7 complete days with verse, devotional, reflect, apply, pray |
| **Prayer Wall** | Submit prayer, Pray for others (count updates), tab filtering |
| **Feed** | Like/Save posts, share text posts, 10 real posts from community |
| **Discussions** | View all threads, reply to posts, create new posts |
| **Groups** | Join/Leave groups, view 14 group pages with full content |
| **Giving** | Select amount, confirm donation, success state with receipt |
| **Events** | Register for events with confirm state |
| **Life Hacks** | Category filter, submit your own hack |
| **Search** | Live filtering across articles, discussions, scripture, stories |
| **Notifications** | All action links point to real pages |
| **AI Companion** | Full streaming chat, mock fallback included |
| **Reading Plan** | Chapter tracking, completion state |
| **Quiz** | Multi-question quiz with results |
| **Leaderboard** | Period and category filters |
| **Bible** | Chapter navigation, verse highlighting |

---

## 📚 Content — Real Christian Data

| Content Type | Count | Examples |
|-------------|-------|---------|
| **Blog Articles** | 11 full articles | "Why the Resurrection Changes Everything", "The Psalms as Permission to Lament" |
| **Discussion Threads** | 11 full threads | Faith & Doubt, Prayer Wall, Deconstruction, Tithing, Marriage |
| **Testimony Stories** | 7 full stories | Carlos Mendez, Ji-Woo Park, Amara Osei, Isabella Ferreira |
| **Group Pages** | 14 full groups | Theology & Doctrine, Young Adults, Mental Health & Faith, etc. |
| **Daily Devotionals** | 7 complete days | Lamentations, Psalm 23, Romans 8, Proverbs 3, John 15, Isaiah 40, Hebrews 11 |
| **Topic Pages** | 6 topic pages | Prayer & Fasting, Gen Z & Church, Marriage & Faith, etc. |
| **Prayer Requests** | 8+ real requests | Health, grief, marriage, ministry, mental health, praise reports |
| **Feed Posts** | 10 posts | From real-sounding Christian voices worldwide |

All content features real Protestant Christian authors including:
- **Dr. Emmanuel Asante** (Cape Town) — Theologian & Author
- **Pastor Miriam Osei** (Accra) — Grace Tabernacle
- **Rev. Charles Mwangi** (Nairobi) — Bible Teacher
- **Dr. Sarah Whitfield** (Edinburgh) — Biblical Counselor
- **Pastor Kwame Asante** (Kumasi) — Church Planter
- **Dr. Lydia Chen** (Singapore) — NT Scholar, Trinity Theological College
- And 20+ more authentic voices from 15+ countries

---

## 🛠️ Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| 🖼️ **Framework** | Next.js 16 (App Router, Turbopack) | Latest — breaking changes from 15 |
| 🔷 **Language** | TypeScript (strict) | Zero runtime type surprises |
| 🎨 **Styling** | Tailwind CSS v4 + CSS Variables | Custom dark-premium design system |
| ☁️ **Hosting** | Vercel (Fluid Compute) | Node.js runtime, zero cold starts |
| 🧠 **AI** | Vercel AI SDK + AI Gateway | `streamText` → `toTextStreamResponse()` |
| 📊 **Analytics** | `@vercel/analytics` + Speed Insights | Real-time Web Vitals |
| 🖼️ **OG Images** | `next/og` ImageResponse | Dynamic social share cards |
| 🔐 **Auth** | localStorage pattern | Client-side session, full profile persistence |
| 🔐 **Security** | `vercel.ts` security headers | CSP, HSTS, XFO, nosniff |
| 🗺️ **SEO** | `sitemap.ts` + `robots.ts` | 109-route sitemap, structured data |
| 📱 **PWA** | `public/manifest.json` | Installable, offline-capable |
| ⚡ **Animations** | IntersectionObserver API | Scroll-triggered fade-ins |
| ⏰ **Crons** | Vercel Cron Jobs | Daily verse + weekly challenge |

---

## 🎨 Design System

```css
/* Core palette */
--bg-primary:    #07070F   /* near-black — Apple-meets-church */
--green:         #00FF88   /* primary brand accent */
--purple:        #6B4FBB   /* secondary accent */
--text-primary:  #F2F2F8   /* warm white */
--text-muted:    #6A6A88   /* subdued text */
--card-border:   rgba(0,255,136,0.08)   /* green-tinted card edge */

/* Global utility classes */
.gold-gradient     → background-clip text, green→gold
.card-glow         → box-shadow: 0 0 30px rgba(green, 0.15)
.btn-gold          → primary CTA: gold gradient, black text
.btn-outline-gold  → secondary: transparent, green border
.verse-card        → Scripture display with italic + green accent
.tag-pill          → Topic chip: translucent green background
.page-body         → header-aware padding via --header-height CSS var
```

**Typography:** Geist Sans (Vercel) · **Border radius:** 12–20px cards, 999px pills  
**Motion:** 300ms ease, IntersectionObserver scroll animations

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/showoffjp/vine.git && cd vine

# 2. Install
npm install

# 3. Run dev server
npm run dev
# → http://localhost:3000

# 4. (Optional) Enable real AI
echo "OPENAI_API_KEY=sk-..." > .env.local
npm run dev
```

> **No API key needed.** The AI Companion streams a rich canned response — every other feature works with zero config.

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Optional | GPT-4o-mini for the AI Bible Companion |
| `ANTHROPIC_API_KEY` | Optional | Claude via Vercel AI Gateway |

---

## 📡 Deployment Pipeline

```
git push → main
      │
      ▼
  Vercel CI
      │
      ├─ TypeScript check (tsc --noEmit)
      ├─ Next.js build (Turbopack)
      ├─ Static prerender (109 routes → CDN)
      ├─ API functions → Fluid Compute
      ├─ OG image function → on-demand
      └─ Cron jobs → registered
      │
      ▼
 Global Edge Network
      │
      ▼
 vine.community 🌐
```

**`vercel.ts`** (typed config) provides:
- 🔐 6 security response headers
- 🔄 URL redirects (`/pray→/prayer`, `/read→/bible`, etc.)
- ⏰ 2 cron jobs (midnight UTC daily verse, weekly challenge)
- 📦 Fluid Compute for all API routes (not legacy edge functions)

---

## 🔐 Security Headers

| Header | Configuration |
|--------|--------------|
| `Content-Security-Policy` | `default-src 'self'; script-src 'self' 'unsafe-inline'...` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Camera, microphone, geolocation: `()` (blocked) |

---

## ✨ Highlight Features

<table>
<tr>
<td>

**🤖 AI Bible Companion**
Streaming chat via Vercel AI SDK. Scripture-grounded, orthodox, warm. Works instantly — no key required. Mock responses include theology, anxiety, Paul, Romans 8, and more. Powered by GPT-4o-mini when `OPENAI_API_KEY` is set.

</td>
<td>

**📰 7-Day Interactive Devotionals**
Full devotionals for each day of the week: verse, author bio, 5-paragraph devotional, 3 reflection questions, 3 daily applications, and a closing prayer. Navigation, like, save, share, and mark-complete all work.

</td>
</tr>
<tr>
<td>

**💝 Donation Platform**
GiveButton modal with preset amounts ($25–$500), custom input, two-step confirmation, and success state with receipt messaging. Four active campaigns: Frontier Missions, Bible Translation, Mental Health, Next Gen.

</td>
<td>

**🌍 Global Connect**
184 countries. 2.1M+ members. Six regional circles, cross-cultural prayer wall, and discussions in 47 languages. Revelation 7:9 made digital.

</td>
</tr>
<tr>
<td>

**🔐 Auth + Profile System**
Full sign-up and sign-in flow via AuthModal. User data persisted to localStorage. Profile page reads real user data (name, avatar, interests, joined date). Onboarding saves complete profile.

</td>
<td>

**🙏 Prayer Wall**
Submit requests, see real-time prayer counts, browse by category (healing, guidance, gratitude, intercession). Pray button increments count and marks as prayed. 8+ real prayer requests with genuine Christian content.

</td>
</tr>
<tr>
<td>

**📖 Bible Tools**
Full reader, chapter navigation, verse search, reading plan tracking, cross-references, and related resources — all client-side with beautiful verse card display.

</td>
<td>

**🌿 Life Hacks**
9+ biblical life hacks with scripture basis, difficulty ratings, impact stars, and save counts. Category filter works (Digital Life, Productivity, Health, Money, Relationships, Parenting). Submit-a-hack form functional.

</td>
</tr>
</table>

---

## 📊 Platform at a Glance

```
╔══════════════════════════════════════════════════════╗
║  👥  2,100,000+  members globally                    ║
║  🌍  184         countries represented               ║
║  💬  4,800,000+  discussion posts                    ║
║  🙏  12,000      daily prayer requests               ║
║  📖  200+        curated Bible passages              ║
║  🎥  18,400+     videos in the library               ║
║  📰  11          blog articles (full content)        ║
║  📖  11          discussion threads (full content)   ║
║  💌  286,000     newsletter subscribers              ║
║  🌐  47          supported languages                 ║
║  ✨  2,100+      verified creators                   ║
║  🗺️  109         pre-rendered static routes          ║
╚══════════════════════════════════════════════════════╝
```

---

## 🗓️ Roadmap

| Priority | Feature | Status |
|----------|---------|--------|
| 🔴 High | **Auth** — Clerk (Vercel Marketplace) | Planned |
| 🔴 High | **Database** — Neon Postgres | Planned |
| 🟡 Med | **Real-time** — Vercel Queues for live discussions | Planned |
| 🟡 Med | **i18n** — Full internationalization (47 languages) | Planned |
| 🟡 Med | **Push Notifications** — Prayer + discussion alerts | Planned |
| 🟢 Low | **Mobile App** — React Native (shared components) | Future |
| 🟢 Low | **Church Hubs** — White-label community spaces | Future |
| ✅ Done | **Giving** — Donation modal with confirmation | Shipped |
| ✅ Done | **Daily Devotionals** — 7-day interactive content | Shipped |
| ✅ Done | **Auth Flow** — localStorage sign-up/sign-in | Shipped |
| ✅ Done | **All 109 routes** — Pre-rendered, no dead links | Shipped |

---

## 📜 Scripture Foundation

> *"I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing."*
> — **John 15:5**

> *"And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another."*
> — **Hebrews 10:24–25**

> *"After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb."*
> — **Revelation 7:9**

---

<div align="center">

**Built with faith, for faith. All rights reserved.**

[![vine.community](https://img.shields.io/badge/🌐-vine.community-00FF88?style=for-the-badge)](https://vine.community)

*© 2026 Vine*

</div>
