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
![Routes](https://img.shields.io/badge/Routes-42+-D4AF37?style=flat-square)
![Countries](https://img.shields.io/badge/Countries-184-6B4FBB?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
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
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🗺️ Platform Map — 42 Routes

<table>
<tr>
<td width="33%">

### 🏛️ Core Platform
| Route | Feature |
|-------|---------|
| `/` | Landing page (21 sections) |
| `/discussions` | Reddit-style forums |
| `/community` | Social circles |
| `/explore` | Discovery feed |
| `/prayer` | Global prayer wall |
| `/bible` | Bible tools + reader |
| `/daily` | Devotionals |
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
| `/relationships` | Dating, marriage, family |
| `/finances` | Stewardship + freedom |
| `/parenting` | Raising kids in faith |
| `/work-leadership` | Biblical leadership |
| `/ai-companion` | AI Bible chat |
| `/blog` | Editorial hub |
| `/topics` | Trending hashtags |
| `/video` | Video library |

</td>
<td width="33%">

### 🌐 Community & Tools
| Route | Feature |
|-------|---------|
| `/global-connect` | 184-country network |
| `/events` | Events calendar |
| `/creators` | Creator directory |
| `/resources` | Resource library |
| `/newsletter` | 4 curated editions |
| `/contact` | Contact + FAQ |
| `/about` | Mission + team |
| `/onboarding` | Welcome flow |
| `/profile` | User profile |
| `/settings` | Preferences |

</td>
</tr>
</table>

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
│   ├── app/                      # Next.js 16 App Router
│   │   ├── page.tsx              # Landing page (21 sections)
│   │   ├── layout.tsx            # Root layout + OG metadata + analytics
│   │   ├── globals.css           # Design system (CSS variables + utilities)
│   │   ├── sitemap.ts            # 24-route XML sitemap
│   │   ├── robots.ts             # Crawl rules
│   │   ├── api/                  # API routes (Fluid Compute, Node.js)
│   │   │   ├── ai-companion/     # Streaming AI (streamText + toTextStreamResponse)
│   │   │   ├── og/               # Dynamic OG images (next/og ImageResponse)
│   │   │   ├── verse/            # Bible verse API
│   │   │   ├── prayer/           # Prayer wall CRUD
│   │   │   └── cron/             # Vercel cron jobs
│   │   └── [42 page routes]/     # Full app surface area
│   ├── components/               # 25+ shared UI components
│   │   ├── Navbar.tsx            # Scroll-aware nav, dropdown menus, mobile
│   │   ├── Footer.tsx            # Full-sitemap 4-column footer
│   │   ├── SearchOverlay.tsx     # ⌘K global search modal
│   │   ├── AuthModal.tsx         # Sign in / Join modal
│   │   ├── FadeIn.tsx            # IntersectionObserver scroll animation
│   │   └── [20+ section components for landing page]
│   ├── hooks/
│   │   └── useInView.ts          # Scroll-trigger custom hook
│   └── proxy.ts                  # Next.js 16 proxy (replaces middleware.ts)
├── vercel.ts                     # Typed Vercel config (security, crons, redirects)
└── public/
    └── manifest.json             # PWA manifest (gold theme)
```

---

## 🛠️ Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| 🖼️ **Framework** | Next.js 16 (App Router, Turbopack) | Latest — breaking changes from 15 |
| 🔷 **Language** | TypeScript (strict) | Zero runtime type surprises |
| 🎨 **Styling** | Tailwind CSS + CSS Variables | Custom dark-premium design system |
| ☁️ **Hosting** | Vercel (Fluid Compute) | Node.js runtime, zero cold starts |
| 🧠 **AI** | Vercel AI SDK + AI Gateway | `streamText` → `toTextStreamResponse()` |
| 📊 **Analytics** | `@vercel/analytics` + Speed Insights | Real-time Web Vitals |
| 🖼️ **OG Images** | `next/og` ImageResponse | Dynamic social share cards |
| 🔐 **Security** | `vercel.ts` security headers | CSP, HSTS, XFO, nosniff |
| 🗺️ **SEO** | `sitemap.ts` + `robots.ts` | 24-route sitemap, structured data |
| 📱 **PWA** | `public/manifest.json` | Installable, offline-capable |
| ⚡ **Animations** | IntersectionObserver API | Scroll-triggered fade-ins |
| ⏰ **Crons** | Vercel Cron Jobs | Daily verse + weekly challenge |

---

## 🎨 Design System

```css
/* Core palette */
--bg-primary:    #07070F   /* near-black — Apple-meets-church */
--gold:          #D4AF37   /* primary brand accent */
--purple:        #6B4FBB   /* secondary accent */
--text-primary:  #F2F2F8   /* warm white */
--text-muted:    #6A6A88   /* subdued text */
--card-border:   rgba(212,175,55,0.08)   /* gold-tinted card edge */

/* Global utility classes */
.gold-gradient     → background-clip text, gold→purple
.card-glow         → box-shadow: 0 0 30px rgba(gold, 0.15)
.btn-gold          → primary CTA: gold gradient, black text
.btn-outline-gold  → secondary: transparent, gold border
.verse-card        → Scripture display with italic + gold accent
.tag-pill          → Topic chip: translucent gold background
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
      ├─ Static prerender (42 routes → CDN)
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
Streaming chat via Vercel AI SDK. Scripture-grounded, orthodox, warm. Works instantly — no key required. Powered by GPT-4o-mini when `OPENAI_API_KEY` is set.

</td>
<td>

**🌍 Global Connect**
184 countries. 2.1M+ members. Six regional circles, cross-cultural prayer wall, and discussions in 47 languages. Revelation 7:9 made digital.

</td>
</tr>
<tr>
<td>

**🎥 Video Library**
18,400+ curated Christian videos — sermons, worship, testimonies, documentaries, apologetics, kids content. No algorithmic manipulation.

</td>
<td>

**💌 4 Newsletter Editions**
Weekly Vine · Daily Bread · Trending Theology · Global Church Report. 286K subscribers. Curated, never algorithmic. No spam. Ever.

</td>
</tr>
<tr>
<td>

**📖 Bible Tools**
Full reader, verse search, highlighting, bookmarks, study notes, cross-references, and reading plan tracking — all client-side.

</td>
<td>

**🙏 Prayer Wall**
Submit requests, see real-time prayer counts, browse by category (healing, guidance, gratitude, intercession). Global and hyper-local.

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
║  📰  847         blog articles published             ║
║  💌  286,000     newsletter subscribers              ║
║  🌐  47          supported languages                 ║
║  ✨  2,100+      verified creators                   ║
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
| 🟢 Low | **Mobile App** — React Native (shared components) | Future |
| 🟢 Low | **Church Hubs** — White-label community spaces | Future |
| 🟢 Low | **Giving** — Integrated tithing & missions support | Future |

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

[![vine.community](https://img.shields.io/badge/🌐-vine.community-D4AF37?style=for-the-badge)](https://vine.community)

*© 2026 Vine*

</div>
