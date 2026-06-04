"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import {
  BookOpen,
  Flame,
  Heart,
  MessageSquare,
  Target,
  Trophy,
  Star,
  TrendingUp,
  ChevronRight,
  Shield,
  Music,
  Globe,
  Bookmark,
  Users,
  Calendar,
  Award,
  Zap,
  Brain,
} from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";

interface Stats {
  bibleBook: string;
  bibleChapter: number;
  bibleHighlights: number;
  bibleBookmarks: number;
  readingChapters: number;
  prayerCards: number;
  challengesJoined: number;
  journalEntries: number;
  feedLikes: number;
  feedSaves: number;
  dailyCompleted: number;
  aiMessages: number;
  podcastSaved: number;
  videoLiked: number;
  groupsJoined: number;
  worshipCircles: number;
  mhGroups: number;
  missionsFollowed: number;
  gcCircles: number;
  eventsGoing: number;
  verseMemory: number;
  goalsActive: number;
  goalsCompleted: number;
  sermonNotes: number;
  spiritualGiftsPrimary: string;
  sermonSaved: number;
  habitsCount: number;
  habitStreak: number;
  gratitudeEntries: number;
  prayerListActive: number;
  fastingCompleted: number;
  faithMilestones: number;
  accountabilityGoals: number;
  readingListCompleted: number;
  prayerWallPrayed: number;
  testimoniesLiked: number;
  bibleStudyPlans: number;
  disciplinesCommitted: number;
  churchesSaved: number;
  prayerPartnerConnected: number;
  prayerSessions: number;
  worldPrayerNations: number;
  sermonArchiveSaved: number;
  quotesLiked: number;
  devotionalCreated: number;
  griefJournalEntries: number;
  scriptureGamePlayed: number;
  couplesDevoDays: number;
  mentorRequests: number;
  youthChallengesJoined: number;
  evangelismPracticed: number;
  apologeticsCases: number;
  theologyStudied: number;
  meditationSessions: number;
  votdJournalEntries: number;
  prayerJournalEntries: number;
  promisesClaimed: number;
  healingPathsStarted: number;
}

function loadStats(): Stats {
  const get = (key: string, def: string = "[]") => {
    try { return localStorage.getItem(key) || def; } catch { return def; }
  };
  const parseSet = (key: string): number => {
    try { return JSON.parse(get(key, "[]")).length; } catch { return 0; }
  };
  const parseObj = (key: string): number => {
    try { return Object.keys(JSON.parse(get(key, "{}"))).length; } catch { return 0; }
  };
  const parseArr = (key: string): number => {
    try { const a = JSON.parse(get(key, "[]")); return Array.isArray(a) ? a.length : 0; } catch { return 0; }
  };

  return {
    bibleBook: get("vine_bible_book", '"John"').replace(/"/g, ""),
    bibleChapter: Number(get("vine_bible_chapter", "3")) || 3,
    bibleHighlights: parseObj("vine_bible_highlights"),
    bibleBookmarks: parseSet("vine_bible_bookmarks"),
    readingChapters: parseSet("vine_reading_plan"),
    prayerCards: parseSet("vine_prayed_cards"),
    challengesJoined: parseSet("vine_challenges_joined"),
    journalEntries: parseArr("vine_journal_entries"),
    feedLikes: parseObj("vine_feed_likes"),
    feedSaves: parseObj("vine_feed_saves"),
    dailyCompleted: parseSet("vine_daily_completed"),
    aiMessages: (() => { try { const msgs = JSON.parse(get("vine_ai_history", "[]")); return msgs.filter((m: { role: string }) => m.role === "user").length; } catch { return 0; } })(),
    podcastSaved: parseSet("vine_podcast_saved"),
    videoLiked: parseSet("vine_video_liked"),
    groupsJoined: parseObj("vine_groups_joined"),
    worshipCircles: parseSet("vine_worship_circles"),
    mhGroups: parseSet("vine_mh_groups"),
    missionsFollowed: parseSet("vine_missions_followed"),
    gcCircles: parseSet("vine_gc_circles"),
    eventsGoing: parseSet("vine_events_going"),
    verseMemory: parseArr("vine_verse_memory"),
    goalsActive: (() => { try { const g = JSON.parse(get("vine_goals", "[]")); return g.filter((x: { completedAt?: string; current: number; target: number }) => !x.completedAt || x.current < x.target).length; } catch { return 0; } })(),
    goalsCompleted: (() => { try { const g = JSON.parse(get("vine_goals", "[]")); return g.filter((x: { completedAt?: string; current: number; target: number }) => x.completedAt && x.current >= x.target).length; } catch { return 0; } })(),
    sermonNotes: parseArr("vine_sermon_notes"),
    spiritualGiftsPrimary: (() => {
      try {
        const done = get("vine_sg_done", "false") === "true";
        if (!done) return "";
        const answers: (number | null)[] = JSON.parse(get("vine_sg_answers", "[]"));
        const GIFT_QUESTIONS: Record<string, string[]> = {
          teaching: ["0","9","18"], mercy: ["1","10","19"], evangelism: ["2","11"],
          leadership: ["3","12"], prophecy: ["4","13"], helps: ["5","14"],
          wisdom: ["6","15","18"], worship: ["7","16"], missions: ["8","17","3"],
        };
        const scores: Record<string, number> = {};
        Object.entries(GIFT_QUESTIONS).forEach(([gid, qIdxs]) => {
          scores[gid] = qIdxs.reduce((s, qi) => s + (answers[Number(qi)] ?? 0), 0);
        });
        return Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "";
      } catch { return ""; }
    })(),
    sermonSaved: parseSet("vine_sermons_saved"),
    habitsCount: parseArr("vine_habits"),
    habitStreak: (() => {
      try {
        const habits = JSON.parse(get("vine_habits", "[]"));
        if (!habits.length) return 0;
        const today = new Date();
        let streak = 0;
        for (let i = 0; i < 365; i++) {
          const d = new Date(today); d.setDate(today.getDate() - i);
          const key = d.toISOString().split("T")[0];
          const anyDone = habits.some((h: { completions: string[] }) => h.completions.includes(key));
          if (anyDone) streak++;
          else if (i > 0) break;
        }
        return streak;
      } catch { return 0; }
    })(),
    gratitudeEntries: parseArr("vine_gratitude"),
    prayerListActive: (() => { try { const p = JSON.parse(get("vine_prayer_list", "[]")); return p.filter((x: { answered: boolean }) => !x.answered).length; } catch { return 0; } })(),
    fastingCompleted: (() => { try { const f = JSON.parse(get("vine_fasting_records", "[]")); return f.filter((x: { completed: boolean }) => x.completed).length; } catch { return 0; } })(),
    faithMilestones: parseArr("vine_faith_journey"),
    accountabilityGoals: (() => { try { const a = JSON.parse(get("vine_accountability", "[]")); return a.filter((x: { active: boolean }) => x.active).length; } catch { return 0; } })(),
    readingListCompleted: (() => { try { const r = JSON.parse(get("vine_reading_list", "[]")); return r.filter((x: { status: string }) => x.status === "completed").length; } catch { return 0; } })(),
    prayerWallPrayed: parseSet("vine_prayer_wall_prayed"),
    testimoniesLiked: parseSet("vine_testimonies_liked"),
    bibleStudyPlans: parseArr("vine_bible_study_plans"),
    disciplinesCommitted: (() => { try { const d = JSON.parse(get("vine_disciplines", "{}")); return Object.values(d).filter((v: unknown) => (v as { committed?: boolean }).committed).length; } catch { return 0; } })(),
    churchesSaved: parseSet("vine_church_saved"),
    prayerPartnerConnected: parseSet("vine_prayer_partner_connected"),
    prayerSessions: parseArr("vine_prayer_sessions"),
    worldPrayerNations: parseSet("vine_world_prayer_prayed"),
    sermonArchiveSaved: parseSet("vine_sermons_saved"),
    quotesLiked: parseSet("vine_quotes_liked"),
    devotionalCreated: (() => { try { const d = JSON.parse(get("vine_devotionals", "[]")); return Array.isArray(d) ? d.length : 0; } catch { return 0; } })(),
    griefJournalEntries: parseArr("vine_grief_journal"),
    scriptureGamePlayed: (() => { try { const s = JSON.parse(get("vine_scripture_game_stats", "{}")); return (s as { totalPlayed?: number }).totalPlayed ?? 0; } catch { return 0; } })(),
    couplesDevoDays: (() => { try { const c = JSON.parse(get("vine_couples_devotional", "{}")); return ((c as { completedDays?: number[] }).completedDays ?? []).length; } catch { return 0; } })(),
    mentorRequests: parseArr("vine_mentorship_requests"),
    youthChallengesJoined: parseSet("vine_youth_challenges"),
    evangelismPracticed: parseSet("vine_evangelism_practiced"),
    apologeticsCases: parseSet("vine_apologetics_studied"),
    theologyStudied: parseSet("vine_theology_studied"),
    meditationSessions: parseArr("vine_meditation_log"),
    votdJournalEntries: parseArr("vine_votd_journal"),
    prayerJournalEntries: parseArr("vine_prayer_journal_entries"),
    promisesClaimed: parseSet("vine_promises_claimed"),
    healingPathsStarted: parseSet("vine_healing_paths_started"),
  };
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [activeTab, setActiveTab] = usePersistedState("vine_dashboard_active_tab", "Overview");

  useEffect(() => {
    setStats(loadStats());
  }, []);

  const totalEngagements = stats
    ? stats.prayerCards + stats.feedLikes + stats.feedSaves + stats.dailyCompleted +
      stats.challengesJoined + stats.readingChapters + stats.bibleHighlights + stats.bibleBookmarks +
      stats.goalsCompleted + stats.verseMemory + stats.gratitudeEntries + stats.sermonNotes
    : 0;

  const level = totalEngagements < 10 ? "Seedling" :
    totalEngagements < 30 ? "Sprout" :
    totalEngagements < 60 ? "Growing" :
    totalEngagements < 100 ? "Rooted" :
    "Abiding";

  const levelColor = level === "Seedling" ? "#8A8AA8" :
    level === "Sprout" ? "#10B981" :
    level === "Growing" ? "#3a7d56" :
    level === "Rooted" ? "#6B4FBB" : "#F59E0B";

  const sections = [
    {
      title: "Scripture",
      icon: BookOpen,
      color: "#3a7d56",
      items: [
        { label: "Currently Reading", value: stats ? `${stats.bibleBook} ${stats.bibleChapter}` : "—", href: "/bible" },
        { label: "Highlighted Verses", value: stats?.bibleHighlights ?? 0, href: "/bible" },
        { label: "Bookmarked Verses", value: stats?.bibleBookmarks ?? 0, href: "/bible" },
        { label: "Reading Plan Chapters Done", value: stats?.readingChapters ?? 0, href: "/reading-plan" },
      ],
    },
    {
      title: "Prayer & Devotionals",
      icon: Heart,
      color: "#EC4899",
      items: [
        { label: "Prayers Offered", value: stats?.prayerCards ?? 0, href: "/prayer" },
        { label: "Daily Devotionals Completed", value: stats?.dailyCompleted ?? 0, href: "/daily" },
        { label: "Challenges Joined", value: stats?.challengesJoined ?? 0, href: "/challenges" },
        { label: "Journal Entries", value: stats?.journalEntries ?? 0, href: "/journal" },
        { label: "Sermon Notes Taken", value: stats?.sermonNotes ?? 0, href: "/sermon-notes" },
      ],
    },
    {
      title: "Community",
      icon: Users,
      color: "#6B4FBB",
      items: [
        { label: "Groups Joined", value: stats?.groupsJoined ?? 0, href: "/groups" },
        { label: "Global Circles Joined", value: stats?.gcCircles ?? 0, href: "/global-connect" },
        { label: "Worship Circles", value: stats?.worshipCircles ?? 0, href: "/worship" },
        { label: "Mental Health Groups", value: stats?.mhGroups ?? 0, href: "/mental-health" },
      ],
    },
    {
      title: "Media & Learning",
      icon: Star,
      color: "#3B82F6",
      items: [
        { label: "Feed Posts Liked", value: stats?.feedLikes ?? 0, href: "/feed" },
        { label: "Feed Posts Saved", value: stats?.feedSaves ?? 0, href: "/feed" },
        { label: "Podcast Episodes Saved", value: stats?.podcastSaved ?? 0, href: "/podcast" },
        { label: "Videos Liked", value: stats?.videoLiked ?? 0, href: "/video" },
      ],
    },
    {
      title: "Missions & Outreach",
      icon: Globe,
      color: "#10B981",
      items: [
        { label: "Missionaries Followed", value: stats?.missionsFollowed ?? 0, href: "/missions" },
        { label: "Events Going To", value: stats?.eventsGoing ?? 0, href: "/events" },
        { label: "AI Companion Questions Asked", value: stats?.aiMessages ?? 0, href: "/ai-companion" },
      ],
    },
    {
      title: "Growth & Goals",
      icon: Target,
      color: "#8B5CF6",
      items: [
        { label: "Verses in Memory", value: stats?.verseMemory ?? 0, href: "/verse-memory" },
        { label: "Active Goals", value: stats?.goalsActive ?? 0, href: "/goals" },
        { label: "Completed Goals", value: stats?.goalsCompleted ?? 0, href: "/goals" },
        { label: "Primary Spiritual Gift", value: stats?.spiritualGiftsPrimary ? stats.spiritualGiftsPrimary.charAt(0).toUpperCase() + stats.spiritualGiftsPrimary.slice(1) : "Not taken", href: "/spiritual-gifts" },
        { label: "Habits Tracked", value: stats?.habitsCount ?? 0, href: "/habits" },
        { label: "Habit Streak (days)", value: stats?.habitStreak ?? 0, href: "/habits" },
        { label: "Gratitude Entries", value: stats?.gratitudeEntries ?? 0, href: "/gratitude" },
        { label: "Active Prayer Requests", value: stats?.prayerListActive ?? 0, href: "/prayer-list" },
        { label: "Fasts Completed", value: stats?.fastingCompleted ?? 0, href: "/fasting" },
        { label: "Faith Milestones", value: stats?.faithMilestones ?? 0, href: "/faith-journey" },
        { label: "Accountability Goals", value: stats?.accountabilityGoals ?? 0, href: "/accountability" },
        { label: "Books Read", value: stats?.readingListCompleted ?? 0, href: "/reading-list" },
        { label: "Bible Studies", value: stats?.bibleStudyPlans ?? 0, href: "/bible-study" },
        { label: "Disciplines Committed", value: stats?.disciplinesCommitted ?? 0, href: "/disciplines" },
        { label: "Prayer Wall Prayers", value: stats?.prayerWallPrayed ?? 0, href: "/prayer-wall" },
        { label: "Testimonies Encouraged", value: stats?.testimoniesLiked ?? 0, href: "/testimony" },
        { label: "Churches Saved", value: stats?.churchesSaved ?? 0, href: "/church-finder" },
        { label: "Prayer Partners", value: stats?.prayerPartnerConnected ?? 0, href: "/prayer-partner" },
        { label: "Prayer Sessions Logged", value: stats?.prayerSessions ?? 0, href: "/prayer-partner" },
        { label: "Nations Prayed For", value: stats?.worldPrayerNations ?? 0, href: "/world-prayer" },
        { label: "Sermons Saved", value: stats?.sermonArchiveSaved ?? 0, href: "/sermon-archive" },
        { label: "Quotes Liked", value: stats?.quotesLiked ?? 0, href: "/quotes" },
        { label: "Devotionals Written", value: stats?.devotionalCreated ?? 0, href: "/devotional-creator" },
        { label: "Grief Journal Entries", value: stats?.griefJournalEntries ?? 0, href: "/grief" },
        { label: "Scripture Game Questions", value: stats?.scriptureGamePlayed ?? 0, href: "/scripture-game" },
        { label: "Couples Devo Days", value: stats?.couplesDevoDays ?? 0, href: "/couples-devotional" },
        { label: "Mentors Requested", value: stats?.mentorRequests ?? 0, href: "/mentorship" },
        { label: "Youth Challenges Joined", value: stats?.youthChallengesJoined ?? 0, href: "/youth" },
      ],
    },
  ];

  const quickLinks = [
    { label: "Daily Devotional", icon: Flame, color: "#E07030", href: "/daily" },
    { label: "Reading Plan", icon: BookOpen, color: "#3a7d56", href: "/reading-plan" },
    { label: "Prayer Wall", icon: Heart, color: "#EC4899", href: "/prayer-wall" },
    { label: "Journal", icon: MessageSquare, color: "#6B4FBB", href: "/journal" },
    { label: "Faith Goals", icon: Target, color: "#10B981", href: "/goals" },
    { label: "Verse Memory", icon: Brain, color: "#3B82F6", href: "/verse-memory" },
    { label: "Sermon Notes", icon: BookOpen, color: "#F59E0B", href: "/sermon-notes" },
    { label: "Spiritual Gifts", icon: Zap, color: "#8B5CF6", href: "/spiritual-gifts" },
    { label: "Bible Study", icon: BookOpen, color: "#10B981", href: "/bible-study" },
    { label: "Accountability", icon: Shield, color: "#3a7d56", href: "/accountability" },
    { label: "Disciplines", icon: Star, color: "#F59E0B", href: "/disciplines" },
    { label: "Faith Journey", icon: Globe, color: "#6B4FBB", href: "/faith-journey" },
    { label: "Groups", icon: Users, color: "#F59E0B", href: "/groups" },
    { label: "World Prayer", icon: Globe, color: "#EF4444", href: "/world-prayer" },
    { label: "Scripture Game", icon: Zap, color: "#3a7d56", href: "/scripture-game" },
    { label: "Mentorship", icon: Users, color: "#6B4FBB", href: "/mentorship" },
    { label: "AI Companion", icon: Zap, color: "#8B9BCC", href: "/ai-companion" },
  ];

  const tabs = ["Overview", ...sections.map((s) => s.title)];
  const visibleSections = activeTab === "Overview" ? sections : sections.filter((s) => s.title === activeTab);

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="pb-20" style={{ paddingTop: 80 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <Trophy size={20} style={{ color: "#3a7d56" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>
                My Faith Journey
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-2">Your Progress Dashboard</h1>
            <p className="text-base" style={{ color: "#6A6A88" }}>
              All your Vine activity in one place. Keep growing.
            </p>
          </div>

          {/* Level Card */}
          <div
            className="rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            style={{
              background: "linear-gradient(135deg, rgba(58,125,86,0.08) 0%, rgba(107,79,187,0.08) 100%)",
              border: "1px solid rgba(58,125,86,0.15)",
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: `${levelColor}20`, border: `1px solid ${levelColor}30` }}
            >
              {level === "Seedling" ? "🌱" : level === "Sprout" ? "🌿" : level === "Growing" ? "🌳" : level === "Rooted" ? "🌲" : "✨"}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-black" style={{ color: levelColor }}>{level}</h2>
                <span className="text-sm px-3 py-0.5 rounded-full" style={{ background: `${levelColor}18`, color: levelColor, border: `1px solid ${levelColor}30` }}>
                  {totalEngagements} total engagements
                </span>
              </div>
              <p className="text-sm" style={{ color: "#8A8AA8" }}>
                {level === "Seedling" ? "Just getting started — every step of faith counts." :
                  level === "Sprout" ? "Growing roots. Keep engaging with Scripture and community." :
                  level === "Growing" ? "Flourishing! You're building real spiritual habits." :
                  level === "Rooted" ? "Deep roots. Your consistency is bearing fruit." :
                  "Abiding in Christ. Your faith journey is an inspiration to others."}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex-1 rounded-full h-1.5 overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${Math.min(100, (totalEngagements / (level === "Abiding" ? totalEngagements : level === "Rooted" ? 100 : level === "Growing" ? 60 : level === "Sprout" ? 30 : 10)) * 100)}%`,
                      background: `linear-gradient(90deg, ${levelColor}, ${levelColor}80)`,
                    }}
                  />
                </div>
                <span className="text-xs" style={{ color: "#4A4A68" }}>
                  {level === "Abiding" ? "Max level" : `${level === "Seedling" ? 10 : level === "Sprout" ? 30 : level === "Growing" ? 60 : 100} to next level`}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-10">
            <h2 className="text-lg font-black mb-4" style={{ color: "#F2F2F8" }}>Quick Access</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl text-center transition-all"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${link.color}08`;
                      e.currentTarget.style.borderColor = `${link.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${link.color}18` }}
                    >
                      <Icon size={18} style={{ color: link.color }} />
                    </div>
                    <span className="text-xs font-semibold leading-tight" style={{ color: "#8A8AA8" }}>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
            {tabs.map((t) => (
              <button type="button"
                key={t}
                onClick={() => setActiveTab(t)}
                className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all"
                style={{
                  background: activeTab === t ? "rgba(58,125,86,0.12)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${activeTab === t ? "rgba(58,125,86,0.4)" : "rgba(255,255,255,0.06)"}`,
                  color: activeTab === t ? "#3a7d56" : "#8A8AA8",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Stats Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {visibleSections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.title}
                  className="rounded-2xl p-6"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: `${section.color}18` }}
                    >
                      <Icon size={16} style={{ color: section.color }} />
                    </div>
                    <h3 className="font-black text-base" style={{ color: "#F2F2F8" }}>{section.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center justify-between py-2 px-3 rounded-xl transition-all"
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = `${section.color}08`; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
                      >
                        <span className="text-sm" style={{ color: "#8A8AA8" }}>{item.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold" style={{ color: item.value === 0 || item.value === "—" ? "#4A4A68" : section.color }}>
                            {item.value}
                          </span>
                          <ChevronRight size={12} style={{ color: "#4A4A68" }} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Badges */}
          <div className="mt-8 rounded-2xl p-6" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
            <div className="flex items-center gap-3 mb-5">
              <Award size={18} style={{ color: "#F59E0B" }} />
              <h3 className="font-black text-base" style={{ color: "#F2F2F8" }}>Badges Earned</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { emoji: "⭐", label: "Early Adopter", earned: true, color: "#3a7d56" },
                { emoji: "🙏", label: "Prayer Warrior", earned: (stats?.prayerCards ?? 0) >= 3, color: "#6B4FBB" },
                { emoji: "📖", label: "Word Keeper", earned: (stats?.readingChapters ?? 0) >= 5, color: "#3B82F6" },
                { emoji: "🔥", label: "Streak Keeper", earned: (stats?.dailyCompleted ?? 0) >= 5, color: "#EF4444" },
                { emoji: "✍️", label: "Journaler", earned: (stats?.journalEntries ?? 0) >= 3, color: "#EC4899" },
                { emoji: "🌍", label: "Global Heart", earned: (stats?.gcCircles ?? 0) >= 1 || (stats?.missionsFollowed ?? 0) >= 1, color: "#10B981" },
                { emoji: "🤝", label: "Community Builder", earned: (stats?.groupsJoined ?? 0) >= 2, color: "#F59E0B" },
                { emoji: "💡", label: "Seeker", earned: (stats?.aiMessages ?? 0) >= 3, color: "#8B9BCC" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{
                    background: badge.earned ? `${badge.color}10` : "rgba(255,255,255,0.02)",
                    border: `1px solid ${badge.earned ? `${badge.color}30` : "rgba(255,255,255,0.04)"}`,
                    opacity: badge.earned ? 1 : 0.4,
                  }}
                >
                  <span className="text-2xl">{badge.emoji}</span>
                  <div>
                    <p className="text-xs font-bold" style={{ color: badge.earned ? badge.color : "#6A6A88" }}>{badge.label}</p>
                    <p className="text-[10px]" style={{ color: "#4A4A68" }}>{badge.earned ? "Earned" : "Locked"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="mt-8 rounded-2xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(58,125,86,0.06) 0%, rgba(107,79,187,0.06) 100%)",
              border: "1px solid rgba(58,125,86,0.12)",
            }}
          >
            <TrendingUp size={28} style={{ color: "#3a7d56" }} className="mx-auto mb-3" />
            <h3 className="text-xl font-black mb-2" style={{ color: "#F2F2F8" }}>Keep Growing</h3>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "#6A6A88" }}>
              Every chapter read, prayer offered, and verse highlighted is a step deeper into the Vine.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/daily" className="px-5 py-2.5 rounded-xl text-sm font-bold text-black" style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)" }}>
                Today&apos;s Devotional
              </Link>
              <Link href="/challenges" className="px-5 py-2.5 rounded-xl text-sm font-bold" style={{ background: "rgba(107,79,187,0.15)", color: "#9B7FEB", border: "1px solid rgba(107,79,187,0.3)" }}>
                Join a Challenge
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
