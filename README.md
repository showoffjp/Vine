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
[![Pages](https://img.shields.io/badge/Static%20Pages-450+-00FF88?labelColor=07070F)](/)
[![Build](https://img.shields.io/badge/Build-Passing-00FF88?labelColor=07070F)](/)
[![License](https://img.shields.io/badge/License-MIT-6B4FBB?labelColor=07070F)](LICENSE)

</div>

---

## 📖 What is Vine?

**Vine** is a full-featured Christian social platform and theological content library built with Next.js App Router and TypeScript. It serves as a hub for Protestant believers worldwide — connecting people through Scripture, community, prayer, worship, discipleship, and real-life content.

The platform has two layers:

- **🌐 Social Platform** — A fully interactive community with feeds, discussions, prayer walls, quizzes, journals, and tools — all client-side with localStorage persistence
- **📚 Theology Library** — 150+ deep-content pages covering doctrine, spiritual formation, ethics, marriage, parenting, prayer, justice, and more — each with 4 interactive tabs and real, substantive content

> Every page is fully interactive. Every button provides visual feedback. All content is realistic, written in the voice of the global Protestant Christian community.

---

## 🛠 Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| 🏗 Framework | **Next.js 16** (App Router) | Static pre-rendering, file-based routing |
| 🎨 Styling | **Tailwind CSS v4** + inline styles | Utility classes + component-level design tokens |
| 🔤 Language | **TypeScript** | Strict typing throughout |
| 🖼 Icons | **Lucide React** | Consistent icon set |
| 📦 State | **React `useState`** + `localStorage` | No backend — fully client-side |
| 🚀 Deployment | **Vercel** | Static pre-rendering, edge delivery |

---

## 🎨 Design System

The entire platform uses a consistent dark-mode color system:

| Token | Hex | Preview | Usage |
|---|---|---|---|
| `BG` | `#07070F` | ![](https://placehold.co/16x16/07070F/07070F) | Page background |
| `CARD` | `#12121F` | ![](https://placehold.co/16x16/12121F/12121F) | Card surfaces |
| `BORDER` | `#1E1E32` | ![](https://placehold.co/16x16/1E1E32/1E1E32) | Default borders |
| `GREEN` | `#00FF88` | ![](https://placehold.co/16x16/00FF88/00FF88) | CTAs, active states, primary accent |
| `PURPLE` | `#6B4FBB` | ![](https://placehold.co/16x16/6B4FBB/6B4FBB) | Secondary accent, tab highlights |
| `TEXT` | `#F2F2F8` | ![](https://placehold.co/16x16/F2F2F8/F2F2F8) | Headings and body text |
| `MUTED` | `#9898B3` | ![](https://placehold.co/16x16/9898B3/9898B3) | Secondary text, placeholders |

### UI Patterns

| Pattern | Used For |
|---|---|
| **4-tab layout** | All theology content pages — Theology / [Topic] / Voices or Stories / Practices |
| **Sticky left panel** | Detail views — select from a list on left, rich content on right |
| **Filter + card grid** | Browsable collections with category buttons |
| **Accordion** | Objections, challenges, Q&A sections |
| **Blockquote callout** | Quotes from theologians, Scripture, and historical figures |

---

## 🏛 Theology Content Library

The heart of Vine is a library of **150+ deep-content theology pages**, each with 4 interactive tabs and substantive, carefully-written content. No placeholder text — every page is real.

### 📜 Core Doctrine

| Page | Tabs | Key Content |
|---|---|---|
| `/trinity` | Theology · Persons · Heresies · Practices | Perichoresis, Filioque, eternal relationships, Arianism/Modalism/Tritheism |
| `/incarnation` | Theology · Errors · Thinkers · Implications | Chalcedon, kenosis, Irenaeus → Dorothy Sayers, theosis |
| `/atonement` | Theology · Theories · Critics · Practices | PSA, Christus Victor, moral influence, governmental — compared |
| `/resurrection` | Theology · Evidence · Scholars · Objections | N.T. Wright, Habermas, Craig, Licona — full cases |
| `/resurrection-evidence` | Historical · Minimal Facts · Scholars · Objections | Minimal facts method, empty tomb, appearances |
| `/predestination` | Theology · Views · Tensions · Practices | Calvinist, Arminian, Molinist — what divides and unites |
| `/sanctification` | Theology · Models · Practices · Obstacles | Entire sanctification, definitive/progressive, Keswick |
| `/grace` | Theology · Types · Thinkers · Practices | Common grace, prevenient grace, irresistible grace — Augustine to Wesley |
| `/covenant` | Theology · 6 Covenants · Fulfillment · Practices | Noahic → New — sign, parties, promise, fulfillment in Christ |

### 🙏 Prayer & Spiritual Life

| Page | Tabs | Key Content |
|---|---|---|
| `/prayer-life` | Theology · Models · Lives of Prayer · Practices | ACTS, Lectio Divina, Examen; Muller, Howells, Bounds, Brother Lawrence |
| `/prayer-fasting` | Theology · Types · Stories · Practices | Biblical fasts, Jesus's teaching, Esther, Daniel, Wesley |
| `/spiritual-growth` | Theology · Stages · Key Thinkers · Obstacles | Dallas Willard, Richard Foster, Eugene Peterson, Henri Nouwen, Teresa of Avila |
| `/spiritual-direction` | What It Is · Finding a Director · Sessions · Practices | SD vs. therapy/coaching, Ignatian tradition, how to prepare |
| `/spiritual-dryness` | Causes · Saints · Lament Psalms · Practices | John of the Cross, Ps 22/42/88; how to pray dry |
| `/christian-rest` | Theology · Obstacles · Voices · Practices | Brueggemann, Marva Dawn, Eugene Peterson, Dallas Willard |
| `/verse-memory` | — | Typing quiz, mastered/review toggle, localStorage |

### 📖 Scripture & Biblical Studies

| Page | Tabs | Key Content |
|---|---|---|
| `/theology-of-scripture` | Theology · Challenges · Methods · Practices | Inspiration, inerrancy, infallibility, hermeneutics |
| `/old-testament-survey` | Overview · Sections · Themes · Reading |  Torah, History, Poetry, Prophets — reading arc |
| `/new-testament-survey` | Overview · Sections · Themes · Reading | Gospels, Acts, Epistles, Apocalyptic — reading arc |
| `/psalms-guide` | Overview · Types · Praying · Reading | Lament, praise, royal, wisdom; how to use as prayer |
| `/beatitudes` | Theology · Each Beatitude · Sermon Context · Practices | Matthew 5:3-12 — detailed exposition of all 8 |
| `/bible-characters` | — | Major figures with theological significance |

### ⛪ Church & Community

| Page | Tabs | Key Content |
|---|---|---|
| `/ecclesiology` | Theology · Models · Marks · Practices | Four marks, church as body/bride/temple/people |
| `/church-membership` | Why · Objections · Traditions · How | Early Church, Reformed, Baptist, Anabaptist, 9Marks |
| `/community-formation` | Theology · Obstacles · Historical Models · Practices | Acts 2, Celtic monasticism, Finkenwalde, L'Arche, Wesley |
| `/church-discipline` | Theology · Process · Hard Cases · Practices | Matthew 18, restorative vs. punitive, real scenarios |
| `/baptism-theology` | Theology · Views · History · Practices | Paedobaptism vs. credobaptism — best arguments for each |
| `/communion-theology` | Theology · Views · History · Practices | Transubstantiation, Real Presence, memorial — compared |

### 💒 Marriage & Family

| Page | Tabs | Key Content |
|---|---|---|
| `/christian-marriage` | Theology · Seasons · Voices · Practices | Newlyweds → Later Marriage; Keller, Chapman, Gottman, Elliot, Bonhoeffer |
| `/covenant-marriage` | Theology · Seasons · Scripture Portraits · Practices | Priscilla/Aquila, Hosea/Gomer, Ruth/Boaz, Isaac/Rebekah |
| `/christian-parenting-theology` | Theology · Challenges · Voices · Practices | Tedd Tripp, Paul Tripp, Russell Moore, Sally Clarkson, C.S. Lewis |
| `/elder-care` | Theology · Challenges · Voices · Practices | Gawande, Nouwen, Tournier, Smedes — on aging and accompanying |
| `/christian-dating` | Theology · Pitfalls · Portraits · Practices | Biblical dating patterns, common mistakes, biblical couples |

### ⚖️ Ethics & Justice

| Page | Tabs | Key Content |
|---|---|---|
| `/justice` | Foundations · Tensions · Key Voices · Action | MLK, John Perkins, Tim Keller, Gutierrez, Wolterstorff |
| `/christian-ethics` | Foundations · Issues · Contemporary · Methods | Digital ethics, creation care, racial justice, AI personhood |
| `/race-reconciliation` | Theology · History · Voices · Practices | Lamar Hardwick, Jemar Tisby, Bryan Stevenson |
| `/creation-care` | Theology · Objections · Practices · Action | Individual, community, advocacy levels — checkable items |
| `/christian-bioethics` | Theology · Life Issues · End of Life · Practices | Abortion, euthanasia, IVF, gene editing — careful treatment |

### 🌍 Mission & Witness

| Page | Tabs | Key Content |
|---|---|---|
| `/missions-theology` | Theology · Models · Biographies · Practices | William Carey, Hudson Taylor, Amy Carmichael |
| `/global-missions` | Theology · Regions · Organizations · Practices | Unreached peoples, frontier missions, short-term vs. long-term |
| `/evangelism-methods` | Theology · Methods · Stories · Practices | EE, 4 Spiritual Laws, Story Method, Questioning — compared |
| `/apologetics-101` | Foundations · Objections · Thinkers · Practices | CS Lewis, Plantinga, Craig, NT Wright — their key arguments |

### 🔥 Spiritual Warfare & Suffering

| Page | Tabs | Key Content |
|---|---|---|
| `/spiritual-warfare` | Theology · Tactics · Armor · Practices | Ephesians 6, demonic activity, spiritual disciplines as warfare |
| `/theodicy` | Theology · Responses · Witnesses · Practices | Wolterstorff, CS Lewis, Joni Eareckson Tada, Elie Wiesel |
| `/theology-of-suffering` | Theology · Types · Response · Practices | What not to say, how to help, lament as response |
| `/addiction-recovery` | Theology · Types · Voices · Steps | Brennan Manning, Johnny Cash, Augustine, 12-step + Scripture |
| `/spiritual-dryness` | Causes · Saints · Lament Psalms · Practices | Dark night of the soul, Ps 22/42/88/13/77 — how to pray each |

### 💰 Money & Vocation

| Page | Tabs | Key Content |
|---|---|---|
| `/theology-of-money` | Theology · Dangers · Practices · Resources | Biblical wealth, prosperity gospel critique, generosity |
| `/church-giving` | Theology · Questions · Generous Lives · Practices | Wesley, LeTourneau, Muller, Francis, Zacchaeus |
| `/christian-financial-guide` | Foundations · Debt · Savings · Generosity | Dave Ramsey critique, biblical stewardship, giving first |
| `/vocation` | Theology · Discernment · Types · Practices | Luther's theology of work, calling vs. career |

### 😔 Pastoral Care

| Page | Tabs | Key Content |
|---|---|---|
| `/christian-grief-guide` | Theology · Stages · Scripture · Practices | Lament psalms, grief as worship, accompanying the grieving |
| `/forgiveness-guide` | Theology · Hard Cases · Stories · Practices | Corrie Ten Boom, Amish Nickel Mines, Desmond Tutu/TRC |
| `/anger` | Theology · Types · Scripture Stories · Practices | Moses, Jonah, Nehemiah, Naomi — righteous vs. sinful anger |
| `/body-image` | Theology · Lies · Truth · Practices | Image of God, incarnation implications, media culture |
| `/anxiety-faith` | Theology · Causes · Practices · Resources | Clinical vs. spiritual, Paul's peace, Thomas a Kempis |

### 🌱 Formation & Character

| Page | Tabs | Key Content |
|---|---|---|
| `/discipleship-cost` | Passages · Myths · Lives of Cost · Practices | Bonhoeffer, Jim Elliot, Perpetua, Brother Andrew, Lottie Moon |
| `/christian-virtue` | Theology · Cardinal Virtues · Fruit · Practices | Aquinas, Aristotle + Scripture, 7 virtues mapped to NT |
| `/humility` | Theology · Obstacles · Examples · Practices | CS Lewis, Andrew Murray, John Newton — real humility |
| `/contentment` | Theology · Discontentment · Great Teachers · Practices | Burroughs, CS Lewis, Aquinas, Dallas Willard, Josef Pieper |
| `/joy` | Theology · Thieves · Bible Stories · Practices | Prodigal Son, Zacchaeus, Mary at tomb, Nehemiah 8 |

---

## 🌐 Social Platform Features

### 👤 Auth & Profile

| Feature | Route | Notes |
|---|---|---|
| Onboarding | `/onboarding` | 5-step flow → localStorage `vine_user` |
| Profile | `/profile` | Reads from `vine_user`, post/prayer/community tabs |
| Dashboard | `/dashboard` | Aggregates all localStorage activity, level/badge system |
| Settings | `/settings` | 8 tabs — all toggles functional, localStorage |

### 📰 Feed & Discussions

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

### 🙏 Prayer & Spiritual Tools

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

### 📊 Personal Growth Tools

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

### 🎵 Worship & Media

| Feature | Route | Notes |
|---|---|---|
| Worship Hub | `/worship` | Playable songs, chord charts, Now Playing bar |
| Podcast | `/podcast` | Episode browser, category filters |
| Video Library | `/video` | Category filters, like/bookmark |
| Sermon Archive | `/sermon-archive` | 12 curated sermons, note-taking |
| Live Streams | `/live` | 6 concurrent streams, live chat, viewer count |

### 🌍 Community & Global

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

### 🧠 Assessment & Learning

| Feature | Route | Notes |
|---|---|---|
| Spiritual Gifts Quiz | `/spiritual-gifts` | 20 questions → 9 gift categories |
| Quizzes | `/quiz` | 4 quizzes — gifts, character, faith, prayer style |
| Apologetics | `/apologetics` | Topics, objections with responses, key thinkers |
| AI Companion | `/ai-companion` | Bible Companion chat interface |
| Resources | `/resources` | Category + topic filtering, bookmark/save |

---

## 📚 Full Content Pages Index

<details>
<summary><strong>📖 Click to expand: All 150+ Theology & Life Pages</strong></summary>

### Foundations of Faith
`/trinity` `/incarnation` `/atonement` `/resurrection` `/resurrection-evidence`
`/predestination` `/faith-and-works` `/grace` `/sanctification` `/covenant`
`/theology-of-scripture` `/image-of-god` `/providence-of-god`

### Prayer & Devotion
`/prayer-life` `/prayer-fasting` `/prayer-of-jesus` `/unanswered-prayer`
`/spiritual-direction` `/spiritual-dryness` `/christian-rest` `/daily-office`
`/lectionary-guide` `/psalms-guide` `/psalms-as-prayer`

### Scripture & Study
`/old-testament-survey` `/new-testament-survey` `/beatitudes`
`/bible-characters` `/reading-the-prophets` `/theology-of-israel`
`/biblical-theology-primer`

### Church & Sacraments
`/ecclesiology` `/church-membership` `/baptism-theology` `/communion-theology`
`/community-formation` `/church-discipline` `/church-polity-guide`
`/church-for-skeptics` `/new-members-class`

### Marriage & Family
`/christian-marriage` `/covenant-marriage` `/marriage-resources`
`/christian-parenting-theology` `/christian-dating` `/purity`
`/theology-of-body` `/biblical-womanhood` `/biblical-manhood`
`/elder-care` `/parenting-teens`

### Mission & Witness
`/missions-theology` `/global-missions` `/evangelism-methods`
`/apologetics-101` `/christian-worldview` `/gospel-conversations`
`/refugee-ministry` `/prison-ministry` `/disability-ministry`
`/interfaith-conversations`

### Ethics & Justice
`/christian-ethics` `/justice` `/race-reconciliation`
`/creation-care` `/christian-bioethics` `/christian-political-theology`
`/women-in-ministry`

### Money & Work
`/theology-of-money` `/church-giving` `/christian-giving-guide`
`/christian-financial-guide` `/christian-money` `/stewardship-theology`
`/vocation` `/faith-in-marketplace` `/work-leadership`

### Spiritual Formation
`/spiritual-growth` `/discipleship-cost` `/christian-virtue`
`/humility` `/contentment` `/joy` `/christian-rest`
`/spiritual-disciplines`

### Pastoral Care
`/christian-grief-guide` `/forgiveness-guide` `/anger`
`/body-image` `/anxiety-faith` `/mental-health`
`/addiction-recovery` `/theology-of-emotions`

### Suffering & Hard Questions
`/theodicy` `/theology-of-suffering` `/spiritual-warfare`
`/doubt` `/faith-deconstruction` `/unanswered-prayer`

### Eschatology
`/end-times-guide` `/new-creation` `/heaven` `/resurrection`
`/theology-of-sabbath`

### Church History & Theology
`/classic-heresies` `/systematic-theology` `/reformed-theology`
`/charismatic-gifts-theology` `/covenant-theology` `/church-fathers`

### Life & Formation Guides
`/christian-books-guide` `/christian-identity-guide`
`/christian-leadership` `/christian-friendship-theology`
`/hospitality` `/lent-guide` `/advent-guide`
`/holy-week-guide` `/christian-simplicity`

</details>

---

## ✍️ Content Voice & Global Reach

All content is written from within the global Protestant community — not as detached encyclopedia articles, but as pastoral, substantive guidance for real people.

**Global Voices Featured:**
🇺🇸 USA · 🇬🇧 UK · 🇰🇪 Kenya · 🇳🇬 Nigeria · 🇬🇭 Ghana · 🇿🇦 South Africa · 🇰🇷 South Korea · 🇩🇪 Germany · 🇨🇴 Colombia · 🇧🇷 Brazil · 🇮🇳 India · 184 countries represented

**Historical Thinkers Covered:**
Augustine · Irenaeus · Athanasius · Aquinas · Luther · Calvin · Wesley · Spurgeon · Bonhoeffer · CS Lewis · NT Wright · Dallas Willard · Richard Foster · Henri Nouwen · Eugene Peterson · Tim Keller · John Perkins · and 100+ more

**Discussion Topics (26 full threads):**
Faith & Doubt · Free Will & Omniscience · Depression + Therapy · Resurrection Evidence · Deconstruction · Tithing Debate · Prayer That Doesn't Feel Real · Finances & Stewardship · Worship Feels Empty · Job Loss at 47 · Marriage Falling Apart · Prodigal Child · Baptism Debate · LGBTQ+ Pastoral Care · Women in Ministry · Grief & Belief · Church Hurt & Healing · and more

---

## 🚀 Getting Started

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

### Key Architecture Decisions

| Decision | Why |
|---|---|
| **All client components** | Every page uses `"use client"` + `useState` for interactivity |
| **No backend** | Everything is client-side; no DB, no auth server, no API routes |
| **`localStorage` persistence** | 30+ keys track user data between sessions |
| **Inline styles for design tokens** | Consistent colors via constants (`BG`, `GREEN`, `PURPLE`, etc.) |
| **Static pre-rendering** | All 450+ pages generate as static HTML at build time |
| **No Navbar/Footer imports in content pages** | Content pages are standalone with `paddingTop: 40` |

### localStorage Keys

| Key | Feature |
|---|---|
| `vine_user` | User profile (from onboarding) |
| `vine_habits` | Spiritual habit tracker |
| `vine_goals` | Faith goals |
| `vine_gratitude` | Gratitude journal |
| `vine_prayer_list` | Private prayer requests |
| `vine_prayer_wall_prayed` | Community prayer wall state |
| `vine_testimonies` | Testimony wall |
| `vine_testimonies_liked` | Liked testimonies |
| `vine_faith_journey` | Spiritual milestone timeline |
| `vine_accountability` | Accountability partner goals |
| `vine_bible_study_plans` | Bible study workspace |
| `vine_bible_study_notes` | OIA study notes |
| `vine_reading_list` | Christian book tracker |
| `vine_sermon_notes` | Sermon notes editor |
| `vine_verse_memory` | Scripture memory tracker |
| `vine_reading_plan` | NT reading plan progress |
| `vine_journal` | Personal devotional journal |
| `vine_challenges` | Faith challenge grids |
| `vine_sg_*` | Spiritual gifts assessment |
| `vine_lifehacks_saved` | Saved life hacks |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout with Navbar
│   ├── feed/                 # Social feed
│   ├── discussions/          # 26 discussion threads
│   ├── blog/                 # 20 full articles
│   ├── topics/               # 9 topic pages
│   │
│   ├── # ── THEOLOGY LIBRARY ─────────────────────
│   ├── trinity/
│   ├── incarnation/
│   ├── atonement/
│   ├── resurrection/
│   ├── predestination/
│   ├── grace/
│   ├── sanctification/
│   ├── covenant/
│   ├── church-membership/
│   ├── community-formation/
│   ├── christian-marriage/
│   ├── prayer-life/
│   ├── spiritual-growth/
│   ├── theodicy/
│   ├── forgiveness-guide/
│   ├── justice/
│   ├── [150+ more theology pages...]
│   │
│   └── # ── SOCIAL PLATFORM ──────────────────────
│       ├── dashboard/
│       ├── profile/
│       ├── habits/
│       ├── goals/
│       ├── journal/
│       ├── prayer-list/
│       ├── verse-memory/
│       ├── reading-list/
│       ├── bible-study/
│       ├── faith-journey/
│       └── [30+ more platform pages...]
│
├── components/
│   └── Navbar.tsx            # Mega-menu navigation
│
└── styles/
    └── globals.css           # Tailwind + global styles
```

---

## 📊 Stats

| Metric | Count |
|---|---|
| 📄 Total static pages | **450+** |
| 📚 Theology content pages | **150+** |
| 🗣 Discussion threads | **26** |
| 📝 Full blog articles | **20** |
| 🎯 Interactive tools | **30+** |
| 💾 localStorage keys | **30+** |
| 🌍 Countries represented | **184** |
| 👥 Creator profiles | **12** |
| 🧠 Quiz results | **24** |

---

<div align="center">

*Built with love for the global church.*

**"I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit."**
*— John 15:5*

</div>
