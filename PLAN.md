# Vine Development Plan

> Last updated: 2026-06-05

---

## ✅ COMPLETED (This Session)

### Phase 1A — Crisis & Care (DONE)
- **Anxiety page**: 988 + Crisis Text Line banner; real help section (AACC, SAMHSA, ADAA links)
- **Loneliness page**: 988 + Crisis Text Line banner; real community resources (TGC church finder, AACC)
- **Addiction-Recovery page**: SAMHSA 1-800-662-4357 + 988 banner; real org links (Celebrate Recovery, AA, NA, SAMHSA, Focus on the Family, Covenant Eyes)
- **Mental Health page**: Replaced fake "Book Session" with AACC real therapist directory link; added 4 real therapist directory cards; "Join Group" cards now navigate to real pages; removed dead booking state
- **AI Companion**: Added grief + loneliness mock responses with 988/Crisis Text Line refs; depression response now includes crisis numbers and AACC; expanded suicide keyword detection

### Phase 1B — Real Data / No Fake Stats (DONE)
- **Dashboard**: `spiritualGiftsPrimary` now reads from `vine_quiz_results["spiritual-gifts"]` — completing the Quiz page shows your gift on the Dashboard
- **Profile page**: All "Faith Stats" now read from real localStorage (prayer streak from vine_habits, chapters from vine_reading_plan, devotionals from vine_daily_completed, saved count from real saved items)
- **AppDownload component**: Removed "4.9 rating / 12,000+ reviews / 50K+ downloads" — replaced with honest "Coming Soon" copy
- **Church Finder**: Removed "15,000+ churches" claim; replaced fake "Submit a Church" with real TGC + Christianity Today directory links
- **Giving/GiveButton**: Added clear "Payment processing coming soon — no charge will be made" disclaimer; changed "Confirm" to "Express Interest"

### Phase 1C — Post Persistence (DONE)
- **Feed page**: Inline post composer now saves to `vine_user_posts` localStorage; posts appear above community feed on reload; includes delete button
- **CreatePostModal**: Posts now persist to `vine_user_posts`; increments `vine_disc_my_posts` counter for profile stats

### Phase 1D — Feature Connections (DONE)
- **Reading Plan**: Falls back to `vine_user.readingPlan` when no active plan set — onboarding selection auto-activates on first visit

### Phase 1E — Persistence & Honesty Sweep (DONE)
- **Discussion replies**: ReplyBox now persists per-thread to `vine_discussion_replies_[id]` with delete
- **Notifications**: Real "Your Activity" group generated from localStorage (journal, posts, prayers, devotionals, chapters, verses)
- **Leaderboard**: Real "Your Faithfulness Points" card computed from actual activity with weighted scoring
- **Community counts**: Removed fabricated "42K members" → honest "Active/New community" labels
- **Newsletter**: Captures emails to `vine_newsletter_signups`; removed false "18,000+ subscribed"
- **Daily devotional**: Like/save now persist per-day to localStorage
- **Testimonials**: Reframed as "built for" vision with illustrative note (not fake user base claims)
- **Live page**: Added honest "coming soon" preview banner
- **Full production build verified**: 465 static pages compile cleanly, zero errors

---

## ✅ SPRINTS 2–4 COMPLETE

### Sprint 2 — Personal Discipleship Polish (DONE)
- **Verse Memory**: `vine_verse_memory` format verified; dashboard integration confirmed
- **Goals tracking**: `vine_goals[].completedAt` field verified; dashboard reads correctly
- **Habits page**: `vine_habits[].completions[]` ISO date format verified; streak calc correct
- **Journal export**: "Export as Text" button added — triggers `.txt` file download
- **Sermon notes**: `vine_sermon_notes` format verified; dashboard reads correctly
- **Prayer list**: `vine_prayer_list[].answered` boolean verified; dashboard integration correct

### Sprint 3 — Community Features (DONE)
- **Feed replies**: Inline reply panel added; saves to `vine_post_replies_[postId]`; persists across sessions
- **Discussion replies**: ReplyBox persists to `vine_discussion_replies_[id]` with delete
- **Prayer Wall**: Tested & verified cross-session persistence
- **Notifications**: Real "Your Activity" entries generated from localStorage actions
- **Leaderboard**: Real Faithfulness Points computed from actual activity data

### Sprint 4 — Content & Discovery (DONE)
- **Search**: 40+ item content index; searches by title, excerpt, tags, and category
- **Daily devotional rotation**: Changed from day-of-week to day-of-year rotation
- **Video page**: 100 curated YouTube videos, verified IDs, pagination
- **Podcast play buttons**: Fixed — Play opens real podcast platforms in new tab; mini-player updated with Listen links
- **Live stream**: Featured stream now embeds real YouTube worship content

## 🔄 IN PROGRESS / NEXT SPRINT

### Sprint 5 — Real Backend (Phase 2) [NEXT]

| Feature | Technology | Notes |
|---------|-----------|-------|
| Authentication | Vercel Auth / Clerk | Replace fake `vine_user` localStorage with real sessions |
| Database | Vercel Marketplace (Postgres via Neon) | User accounts, prayer requests, posts |
| Prayer Wall | Shared Postgres table | All users see same prayer requests |
| Community Feed | Shared Postgres table | Real community posts across users |
| Email capture / newsletter | Resend | Newsletter signup actually sends welcome email |
| Push notifications | Web Push API | Daily verse, prayer reminders |
| Donation processing | Stripe | Real payment processing for giving causes |
| AI Companion | Vercel AI Gateway | Use `gateway("anthropic/claude-sonnet-4-6")` with real API key |

---

## 🗺️ LONG-TERM ROADMAP

### Q3 2026 — Community & Social
- Real user accounts with persistent cross-device data
- Shared prayer wall (all users can see and respond)
- Real discussion threads with replies
- User following / community connections
- Moderation system for community content
- Church groups (closed groups tied to a local church)

### Q4 2026 — Discipleship AI
- AI-powered Bible study: ask any question about any passage
- AI sermon notes assistant
- Personalized devotional generation
- AI accountability partner
- Daily AI check-in / spiritual journal prompt

### Q1 2027 — Mobile App
- React Native app (iOS + Android) using shared API
- Push notifications for daily verse, prayer reminders
- Offline Bible reading
- Camera integration for journaling
- Apple Watch / Android widget for verse of the day

### Q2 2027 — Church Platform
- Church admin dashboard
- Bulletin and announcement system
- Giving directly to local churches (with Stripe Connect)
- Church small groups management
- Church-branded experience (custom colors, logo)

### Ongoing — Content Excellence
- Expand theological content depth (currently excellent)
- Add more diverse global Christian voices
- Video series with original Vine content
- Partnership with Christian publishers for books integration
- Live events / virtual retreats

---

## 🐛 KNOWN ISSUES

| Issue | Page | Severity |
|-------|------|----------|
| Community member counts inflated (42K, 38K) | CommunityPreview component | Low (cosmetic) |
| Podcast play buttons non-functional | /podcast, /christian-podcasts-guide | Medium |
| Live stream page has no real stream | /live | Medium |
| Events RSVP doesn't email confirmation | /events | Medium |
| Leaderboard scores hardcoded | /leaderboard | Low |
| Notifications entirely mock | /notifications | Medium |

---

## 🔑 KEY LOCALSTORAGE KEYS

| Key | Type | Used By |
|-----|------|---------|
| `vine_user` | `{name, firstName, lastName, email, avatar, interests, readingPlan, joinedAt}` | Profile, Navbar, Feed |
| `vine_journal_entries` | `PrayerJournalEntry[]` | Journal page |
| `vine_habits` | `{id, title, completions: string[]}[]` | Habits, Dashboard |
| `vine_reading_plan` | `string[]` (chapter keys) | Reading Plan, Dashboard |
| `vine_reading_active_plan` | `string` | Reading Plan |
| `vine_daily_completed` | `string[]` (date keys) | Daily, Dashboard |
| `vine_verse_memory` | `VerseMemoryCard[]` | Verse Memory, Dashboard |
| `vine_goals` | `{id, title, current, target, completedAt?}[]` | Goals, Dashboard |
| `vine_prayer_list` | `{id, text, answered: boolean}[]` | Prayer List, Dashboard |
| `vine_quiz_results` | `{spiritual-gifts?: string, ...}` | Quiz, Dashboard |
| `vine_user_posts` | `UserPost[]` | Feed |
| `vine_feed_likes` | `{[postId]: boolean}` | Feed |
| `vine_feed_saves` | `{[postId]: boolean}` | Feed, Dashboard |
| `vine_prayer_wall` | `PrayerRequest[]` | Prayer Wall |
| `vine_prayer_wall_prayed` | `string[]` (request IDs) | Prayer Wall, Dashboard |
| `vine_sermon_notes` | `SermonNote[]` | Sermon Notes, Dashboard |
| `vine_sg_answers` | `number[]` | Legacy spiritual gifts (dashboard fallback) |
| `vine_sg_done` | `"true"` | Legacy spiritual gifts done flag |

---

## 📐 ARCHITECTURE NOTES

- **Framework**: Next.js App Router (v16.2.6 — check `node_modules/next/dist/docs/` for breaking changes)
- **Styling**: Tailwind CSS + inline styles (dark theme: `#07070F` bg, `#12121F` cards, `#1E1E32` borders)
- **State**: localStorage only (no server state yet)
- **Bible API**: Real API at `/api/bible` (fetches from bible-api.com)
- **AI**: `/api/ai-companion` — uses Vercel AI Gateway when `OPENAI_API_KEY` set; falls back to rich mock responses
- **Color system**: GREEN `#3a7d56`, PURPLE `#6B4FBB`, GOLD `#B8922A`, TEXT `#F2F2F8`, MUTED `#9898B3`
- **Hooks**: `usePersistedState(key, default)` — string state persisted to localStorage
- **Deployment**: Vercel (auto-deploy on push to main via Git integration)
