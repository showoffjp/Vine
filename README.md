<div align="center">

```
██╗   ██╗██╗███╗   ██╗███████╗
██║   ██║██║████╗  ██║██╔════╝
██║   ██║██║██╔██╗ ██║█████╗  
╚██╗ ██╔╝██║██║╚██╗██║██╔══╝  
 ╚████╔╝ ██║██║ ╚████║███████╗
  ╚═══╝  ╚═╝╚═╝  ╚═══╝╚══════╝
```

### The Christian Social Network

*"I am the vine; you are the branches." — John 15:5*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Pages](https://img.shields.io/badge/Static%20Pages-1080+-00FF88?labelColor=07070F)](/)
[![Build](https://img.shields.io/badge/Build-Passing-00FF88?labelColor=07070F)](/)
[![License](https://img.shields.io/badge/License-MIT-6B4FBB?labelColor=07070F)](LICENSE)

</div>

---

## What is Vine?

**Vine** is a full-featured Christian social platform and theological content library built with Next.js App Router and TypeScript. It serves as a hub for Protestant believers worldwide — connecting people through Scripture, community, prayer, worship, discipleship, and real-life content.

The platform has two layers:

- **Social Platform** — A fully interactive community with feeds, discussions, prayer walls, quizzes, journals, and tools — all client-side with localStorage persistence
- **Theology Library** — 300+ deep-content pages covering doctrine, spiritual formation, ethics, marriage, parenting, prayer, justice, and more — each with 6 interactive tabs and real, substantive content

Every page is fully interactive. Every button provides visual feedback. All content is realistic, written in the voice of the global Protestant Christian community.

---

## Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | **Next.js 16** (App Router) | Static pre-rendering, file-based routing |
| Styling | **Tailwind CSS v4** + inline styles | Utility classes + component-level design tokens |
| Language | **TypeScript** | Strict typing throughout |
| Icons | **Lucide React** | Consistent icon set |
| State | **React `useState`** + `localStorage` | No backend — fully client-side |
| Deployment | **Vercel** | Static pre-rendering, edge delivery |

---

## Design System

The entire platform uses a consistent dark-mode color system:

| Token | Hex | Usage |
|---|---|---|
| `BG` | `#07070F` | Page background |
| `CARD` | `#12121F` | Card surfaces |
| `BORDER` | `#1E1E32` | Default borders |
| `GREEN` | `#3a7d56` | Primary accent (generosity, obedience pages) |
| `PURPLE` | `#6B4FBB` | Secondary accent (holiness, prayer-journal pages) |
| `TEXT` | `#F2F2F8` | Headings and body text |
| `MUTED` | `#9898B3` | Secondary text, placeholders |
| `GOLD` | `#D97706` | Emphasis callouts |
| `BLUE` | `#3B82F6` | Trust, wisdom pages |
| `TEAL` | `#0D9488` | Gratitude, listening, pilgrimage pages |
| `AMBER` | `#F59E0B` | Diligence, patience pages |
| `ROSE` | `#E11D48` | Testimony, courage pages |
| `INDIGO` | `#6366F1` | Sabbatical pages |

### 6-Tab Guide Layout

Every guide page built in the current build series uses this standard layout:

| Tab | Content |
|---|---|
| **Theology** | 7–9 doctrinal/historical sections with inline callouts |
| **Practices** | 6 numbered practice cards with steps and anchoring Scripture |
| **Voices** | 6 historical/contemporary Christian voices with bio and quote |
| **Scripture** | 6 key passages with memorization reflections |
| **Journal** | 3-field private localStorage journal with entries list and delete |
| **Videos** | 6 curated YouTube embeds via the VideoEmbed component |

---

## Stats

| Metric | Count |
|---|---|
| Total static pages | **1,081+** |
| Theology content pages | **300+** |
| Christian guide pages (6-tab format) | **68+** |
| Discussion threads | **26** |
| Full blog articles | **20** |
| Interactive tools | **30+** |
| localStorage keys | **40+** |
| Countries represented | **184** |
| Creator profiles | **12** |

---

## Christian Guide Pages (6-Tab Format)

All pages below follow the 6-tab structure (Theology / Practices / Voices / Scripture / Journal / Videos) with a private localStorage journal, 6 YouTube video embeds via the `VideoEmbed` component, and 6 historical voices. Each page has its own accent color.

### Virtue & Character Formation

| Route | Topic | Accent |
|---|---|---|
| `/christian-holiness` | Sanctification — Reformed vs. Wesleyan, union with Christ, means of grace | Purple |
| `/christian-humility` | Kenosis, Andrew Murray, pride as root sin, examen practice | Purple |
| `/christian-patience` | Hupomone vs. makrothumia, James 1, waiting on the Lord | Amber |
| `/christian-diligence` | Acedia/sloth, Eccl 9:10, ora et labora, Dorothy Sayers | Amber |
| `/christian-courage` | Fortitude, Esther/Daniel, Bonhoeffer martyrdom | Rose |
| `/christian-contentment` | Euparestia, Burroughs, Phil 4:11-12, guarding against envy | Teal |
| `/christian-gentleness` | Prautes, Matthew 5:5, meekness as strength | Green |
| `/christian-goodness` | Chrestotes, hesed, Titus 3:4, the Good Samaritan | Amber |

### Faith & Trust

| Route | Topic | Accent |
|---|---|---|
| `/christian-trust` | Batach, Prov 3:5-6, Job, dark night of the soul, Corrie ten Boom | Blue |
| `/christian-obedience` | John 14:15, Abraham, delayed obedience, love vs. legalism | Green |
| `/christian-doubt-guide` | Honest doubt, Thomas, Elisabeth Elliot, apologetics of the heart | Blue |
| `/christian-hope-guide` | Eschatological hope, Moltmann, Heb 11, lament and hope | Purple |
| `/christian-surrender` | "Not my will but thine," Gethsemane, total surrender theology | Gold |
| `/christian-identity` | Image of God, adoption, in-Christ identity, Romans 8 | Purple |

### Prayer & Spiritual Disciplines

| Route | Topic | Accent |
|---|---|---|
| `/christian-prayer-journal` | George Müller, Jim Elliot, Brainerd, ACTS framework, answered prayer tracking | Purple |
| `/christian-prayer-types` | ACTS, breath prayer, intercession, lament, contemplative | Blue |
| `/christian-prayer-healing` | James 5, cessationism vs. continuationism, healing theology | Teal |
| `/christian-listening` | 1 Sam 3, still small voice, lectio divina, discernment rules | Teal |
| `/christian-meditation` | Biblical vs. Eastern meditation, Ps 1, sacred reading | Purple |
| `/christian-fasting` | Types of fasts, Daniel fast, Wesley fasting, spiritual power | Gold |
| `/christian-sabbatical` | Selah, Elijah rest, Lev 25, pastor burnout, Ruth Haley Barton | Indigo |
| `/christian-rest-guide` | Shabbat, Brueggemann, Marva Dawn, rest as resistance | Green |

### Witness & Community

| Route | Topic | Accent |
|---|---|---|
| `/christian-testimony` | Martyria, Paul's testimony, 3-part structure, Rev 12:11 | Rose |
| `/christian-evangelism` | Gospel conversations, friendship evangelism, apologetics bridge | Green |
| `/christian-witness` | Lifestyle witness, Peter's "always be ready," workplace faith | Teal |
| `/christian-community` | Acts 2, koinonia, bearing burdens, accountability circles | Purple |
| `/christian-hospitality-guide` | Open table theology, stranger welcome, Hebrews 13:2, Dorothy Day | Teal |
| `/christian-discipleship` | Cost of discipleship, Bonhoeffer, making disciples, mentoring | Green |
| `/christian-friendship` | Covenant friendship, David/Jonathan, Phil 2 mutual honor | Blue |

### Marriage, Family & Life Stages

| Route | Topic | Accent |
|---|---|---|
| `/christian-marriage-guide` | Genesis 2, covenant marriage, Keller/Chapman, seasons of marriage | Purple |
| `/christian-parenting-guide` | Deuteronomy 6, formative parenting, Tedd Tripp, prodigal love | Blue |
| `/christian-singleness` | Gift of singleness, Paul's defense, celibacy theology, community | Rose |
| `/christian-death-dying` | Ars moriendi, Heb 2:14-15, accompanying the dying, lament | Gold |
| `/christian-eternity` | New creation, N.T. Wright, resurrection body, heaven theology | Indigo |
| `/christian-leadership` | Servant leadership, Mark 10:44, character over competence | Blue |

### Stewardship & Work

| Route | Topic | Accent |
|---|---|---|
| `/christian-generosity-guide` | 2 Cor 9:7, widow's mite, tithing, Wesley/Alcorn/Müller | Green |
| `/christian-stewardship` | Creation mandate, time/talent/treasure theology | Green |
| `/christian-money-guide` | Mammon, prosperity gospel critique, debt theology, giving first | Gold |
| `/christian-vocation` | Luther's calling theology, secular vocation, every job sacred | Blue |
| `/christian-work-theology` | Imago Dei worker, Colossians 3:23, Dorothy Sayers on work | Teal |

### Healing & Pastoral Care

| Route | Topic | Accent |
|---|---|---|
| `/christian-forgiveness-guide` | Aphiemi, Corrie ten Boom, 70×7, forgiveness vs. reconciliation | Teal |
| `/christian-grief-guide` | Lament psalms, grief as worship, stages, accompanying others | Purple |
| `/christian-anxiety-guide` | Phil 4:6-7, clinical vs. spiritual anxiety, Nouwen on fear | Blue |
| `/christian-suffering-guide` | Theodicy, Job, Rom 8:28, Joni Eareckson Tada | Gold |
| `/christian-mental-health` | Brain/soul integration, therapy as wise, Psalms as model | Blue |
| `/christian-addiction` | Sin/disease tension, Brennan Manning, 12-step + Scripture | Rose |
| `/christian-renewal` | Repentance, Ps 51, spiritual refreshing, prodigal return | Green |

### Gratitude, Joy & Inner Life

| Route | Topic | Accent |
|---|---|---|
| `/christian-gratitude` | Eucharisteo, Ann Voskamp, 10 lepers, 1 Thess 5:18 | Teal |
| `/christian-joy-of-salvation` | Ps 51:12, joy vs. happiness, Zacchaeus, Neh 8:10 | Gold |
| `/christian-simplicity` | Richard Foster, Quaker simplicity, consumerism theology | Green |
| `/christian-contentment` | Burroughs "Rare Jewel," Aquinas, Willard on enough | Teal |

### Social Ethics & Justice

| Route | Topic | Accent |
|---|---|---|
| `/christian-justice` | Mishpat, Amos, MLK, Bryan Stevenson, systemic + personal | Gold |
| `/christian-compassion` | Splanchnizomai, Good Samaritan, Mother Teresa | Rose |
| `/christian-racism` | One blood (Acts 17:26), racial reconciliation, Jemar Tisby | Blue |
| `/christian-poverty` | Good news to the poor, Luke 4, integral mission | Green |
| `/christian-environment` | Tend and keep (Gen 2:15), creation care theology, Bouma-Prediger | Teal |
| `/christian-politics` | Two kingdoms, prophetic critique, Keller on politics | Purple |
| `/christian-culture` | Culture-making, Niebuhr's 5 models, Kuyper's sphere sovereignty | Blue |

### Doctrine & Theology

| Route | Topic | Accent |
|---|---|---|
| `/christian-confession` | Exomologeo, James 5:16, auricular vs. corporate confession | Purple |
| `/christian-worship` | Proskuneo, Tozer on worship, liturgy vs. free worship | Gold |
| `/christian-spiritual-gifts` | Charismata, cessationism debate, using gifts in community | Blue |
| `/christian-bible-study` | OIA method, lectio divina, inductive vs. devotional study | Green |
| `/christian-apologetics` | Faith and reason, Craig/Plantinga, responding to objections | Blue |
| `/christian-spiritual-warfare` | Ephesians 6, Screwtape Letters, C.S. Lewis, Frank Peretti | Rose |
| `/christian-holiness` | Be holy as I am holy, sanctification models, Ryle/Wesley/Willard | Purple |

### Pilgrimage, Formation & Special Practices

| Route | Topic | Accent |
|---|---|---|
| `/christian-pilgrimage` | Psalms of Ascent, paroikoi, Jerusalem/Santiago/Iona, Augustine | Teal |
| `/christian-pilgrimage` | Inner pilgrimage, Thomas à Kempis, detachment theology | Teal |
| `/christian-discipline` | Spiritual disciplines overview, Foster, Willard, self-control | Purple |
| `/christian-sexuality` | Song of Songs, purity theology, sexual ethic, pastoral care | Rose |
| `/christian-technology-ethics` | Digital discipleship, social media theology, AI ethics | Blue |

---

## Social Platform Features

### Auth & Profile

| Feature | Route | Notes |
|---|---|---|
| Onboarding | `/onboarding` | 5-step flow → localStorage `vine_user` |
| Profile | `/profile` | Reads from `vine_user`, post/prayer/community tabs |
| Dashboard | `/dashboard` | Aggregates all localStorage activity, level/badge system |
| Settings | `/settings` | 8 tabs — all toggles functional, localStorage |

### Feed & Discussions

| Feature | Route | Notes |
|---|---|---|
| Main Feed | `/feed` | Upvote, comment, save, sort — localStorage |
| Explore | `/explore` | Live search filtering, category cards |
| Discussions | `/discussions` | 26 threads — upvote, save, join hubs |
| Discussion Threads | `/discussions/[slug]` | 26 full threads with nested replies |
| Blog | `/blog` | 20 full articles, category filter, bookmark |
| Blog Articles | `/blog/[slug]` | 20 long-form articles with full content |
| Topics | `/topics` | Trending rankings + cluster browsing |
| Topic Pages | `/topics/[slug]` | 9 individual topic pages |

### Prayer & Spiritual Tools

| Feature | Route | Notes |
|---|---|---|
| Prayer Wall | `/prayer-wall` | 12 seed requests, "I'll Pray" persistence |
| Prayer List | `/prayer-list` | Private prayer tracker, answered prayers |
| Prayer Partner | `/prayer-partner` | Match + log prayer sessions |
| Live Prayer | `/prayer` | Animated live board, categories, champions |
| Daily Devotional | `/daily` | Auto-shows current day, persistence |
| Bible Reader | `/bible` | Book/chapter navigation, highlighting |
| Verse Memory | `/verse-memory` | Typing quiz, accuracy scoring, mastered toggle |
| Reading Plan | `/reading-plan` | NT in 90 Days, streak counter |

### Personal Growth Tools

| Feature | Route | Persists To |
|---|---|---|
| Spiritual Gifts | `/spiritual-gifts` | `vine_sg_*` — 20-question assessment, 9 gift categories |
| Goals | `/goals` | `vine_goals` — CRUD goals, log progress, 8 presets |
| Habits | `/habits` | `vine_habits` — week view, 30-day heatmap, streaks |
| Gratitude | `/gratitude` | `vine_gratitude` — daily journal, mood, streak |
| Journal | `/journal` | `vine_journal` — tags, search, mood |
| Challenges | `/challenges` | `vine_challenges` — 30-day grids, join/leave |
| Faith Journey | `/faith-journey` | `vine_faith_journey` — milestone timeline, CRUD |
| Accountability | `/accountability` | `vine_accountability` — partner goals, check-ins |
| Bible Study | `/bible-study` | `vine_bible_study_*` — OIA notes, 47 books |
| Reading List | `/reading-list` | `vine_reading_list` — ratings, progress, reviews |
| Sermon Notes | `/sermon-notes` | `vine_sermon_notes` — full note editor |

### Worship & Media

| Feature | Route | Notes |
|---|---|---|
| Worship Hub | `/worship` | Playable songs, chord charts, Now Playing bar |
| Podcast | `/podcast` | Episode browser, category filters |
| Video Library | `/video` | Category filters, like/bookmark |
| Sermon Archive | `/sermon-archive` | 12 curated sermons, note-taking |
| Live Streams | `/live` | 6 concurrent streams, live chat, viewer count |

### Community & Global

| Feature | Route | Notes |
|---|---|---|
| Community | `/community` | Circles, join/leave, member invite |
| Global Connect | `/global-connect` | 6 regions, global prayer wall |
| Missions | `/missions` | Priority regions, missionary follow/pray |
| Events | `/events` | Full filter system, type/month/search |
| Church Finder | `/church-finder` | 15 seed churches, denomination/country filters |
| Creators | `/creators` | Directory with follow, 12 creator profiles |
| Leaderboard | `/leaderboard` | Weekly/monthly/all-time, 4 categories |
| Mentorship | `/mentorship` | 8 verified mentors, request modal, status tracking |

### Assessment & Learning

| Feature | Route | Notes |
|---|---|---|
| Spiritual Gifts Quiz | `/spiritual-gifts` | 20 questions → 9 gift categories |
| Quizzes | `/quiz` | 4 quizzes — gifts, character, faith, prayer style |
| Apologetics | `/apologetics` | Topics, objections with responses, key thinkers |
| AI Companion | `/ai-companion` | Bible Companion chat interface |
| Resources | `/resources` | Category + topic filtering, bookmark/save |

---

## Architecture

### Key Decisions

| Decision | Why |
|---|---|
| **All client components** | Every page uses `"use client"` + `useState` for interactivity |
| **No backend** | Everything is client-side; no DB, no auth server, no API routes |
| **`localStorage` persistence** | 40+ keys track user data between sessions |
| **Inline styles for design tokens** | Consistent colors via constants (`BG`, `CARD`, `BORDER`, etc.) |
| **Static pre-rendering** | All 1,080+ pages generate as static HTML at build time |
| **No Navbar/Footer in content pages** | Content pages are standalone with `paddingTop: "var(--header-height, 80px)"` |
| **VideoEmbed component** | Lazy-loads YouTube via click-to-play thumbnails; falls back to dark placeholder |
| **Two-effect localStorage pattern** | Read in first `useEffect` (sets `loaded`), write in second `useEffect` gated by `loaded` |

### VideoEmbed

All guide pages use `@/components/VideoEmbed` for YouTube embeds:

```tsx
<VideoEmbed videoId="abc123XYZ" title="Teaching on Christian Holiness" />
```

- Click-to-play thumbnail from YouTube CDN
- Falls back to a styled dark placeholder if thumbnail 404s
- Swaps to an `<iframe>` on click with `autoplay=1`
- No raw `<iframe>` on page load — fast initial render

### localStorage Keys (Guide Pages)

Every guide page stores journal entries under a unique key:

| Key | Guide Page |
|---|---|
| `vine_christianholiness_entries` | Christian Holiness |
| `vine_christiandiligence_entries` | Christian Diligence |
| `vine_christianpilgrimage_entries` | Christian Pilgrimage |
| `vine_sabbatical_entries` | Christian Sabbatical |
| `vine_christiangratitude_entries` | Christian Gratitude |
| `vine_christiantrust_entries` | Christian Trust |
| `vine_christianobedience_entries` | Christian Obedience |
| `vine_christiantestimony_entries` | Christian Testimony |
| `vine_christianpatience_entries` | Christian Patience |
| `vine_christiangenerosity_entries` | Christian Generosity |
| `vine_prayerjournal_entries` | Prayer Journal |
| `vine_christianlistening_entries` | Christian Listening |
| `vine_christiandiscipline_entries` | Christian Discipline |
| `vine_christiansurrender_entries` | Christian Surrender |
| `vine_christianhospitality_entries` | Christian Hospitality |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev       # → http://localhost:3000

# Production build
npm run build

# Lint
npm run lint
```

---

## Content Voice

All content is written from within the global Protestant community — not as detached encyclopedia articles, but as pastoral, substantive guidance for real people.

**Global Voices Featured:**
USA · UK · Kenya · Nigeria · Ghana · South Africa · South Korea · Germany · Colombia · Brazil · India · 184 countries represented

**Historical Thinkers Covered:**
Augustine · Irenaeus · Athanasius · Aquinas · Luther · Calvin · Wesley · Spurgeon · Bonhoeffer · CS Lewis · NT Wright · Dallas Willard · Richard Foster · Henri Nouwen · Eugene Peterson · Tim Keller · John Perkins · Ann Voskamp · Ruth Haley Barton · and 150+ more

---

<div align="center">

*Built with love for the global church.*

**"I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit."**
*— John 15:5*

</div>
