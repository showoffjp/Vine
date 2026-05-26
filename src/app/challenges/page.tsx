"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, CheckCircle2, Users, Flame, ChevronRight, Trophy, Star, Calendar } from "lucide-react";

const weeklyChallenge = {
  id: 1,
  title: "30-Day Prayer Streak",
  subtitle: "Pray for 5 minutes every day for 30 days",
  description: "Prayer is the foundation of everything. This month, commit to spending at least 5 minutes in prayer each morning. Use the Daily Bread devotional as a guide, journal your prayers, and track your streak.",
  verse: "Devote yourselves to prayer, being watchful and thankful.",
  verseRef: "Colossians 4:2",
  participants: 14823,
  daysLeft: 22,
  category: "Prayer",
  color: "#00FF88",
  emoji: "🙏",
  steps: [
    "Open the Vine app first thing in the morning",
    "Read today's Daily Bread devotional",
    "Spend at least 5 minutes in prayer",
    "Write a one-sentence prayer in your Journal",
    "Check off your streak in the app",
  ],
};

const activeChallenges = [
  {
    id: 2,
    title: "Read Through Psalms",
    description: "Read one Psalm per day for 30 days. Reflect, highlight, and pray through each one.",
    verse: "His delight is in the law of the Lord, and on his law he meditates day and night.",
    verseRef: "Psalm 1:2",
    participants: 8421,
    daysLeft: 15,
    category: "Scripture",
    color: "#6B4FBB",
    emoji: "📖",
    difficulty: "Beginner",
  },
  {
    id: 3,
    title: "Bless a Stranger",
    description: "Do one intentional act of kindness for a stranger every day this week — and share what happened.",
    verse: "Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels.",
    verseRef: "Hebrews 13:2",
    participants: 3107,
    daysLeft: 5,
    category: "Community",
    color: "#F59E0B",
    emoji: "🤝",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "Digital Sabbath",
    description: "One day a week, put the phone down. No social media, no streaming. Rest, worship, be present.",
    verse: "Remember the Sabbath day by keeping it holy.",
    verseRef: "Exodus 20:8",
    participants: 5892,
    daysLeft: 28,
    category: "Rest",
    color: "#4FBBAA",
    emoji: "🌿",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "Memorize Romans 8:28-39",
    description: "One of the most powerful passages in Scripture. Memorize it verse by verse over 14 days.",
    verse: "And we know that in all things God works for the good of those who love him.",
    verseRef: "Romans 8:28",
    participants: 2341,
    daysLeft: 10,
    category: "Scripture",
    color: "#EF4444",
    emoji: "🧠",
    difficulty: "Advanced",
  },
  {
    id: 6,
    title: "Give Generously",
    description: "Give away something every day for a week — money, time, words of encouragement, a meal.",
    verse: "Give, and it will be given to you.",
    verseRef: "Luke 6:38",
    participants: 4102,
    daysLeft: 6,
    category: "Generosity",
    color: "#EC4899",
    emoji: "💝",
    difficulty: "Beginner",
  },
];

const completedChallenges = [
  { title: "21-Day Gratitude Journal", participants: 9821, badge: "🏅", date: "May 2026" },
  { title: "Read All 4 Gospels", participants: 6234, badge: "📖", date: "Apr 2026" },
  { title: "One Week of Fasting", participants: 4102, badge: "🔥", date: "Mar 2026" },
];

const categories = ["All", "Prayer", "Scripture", "Community", "Rest", "Generosity"];

export default function ChallengesPage() {
  const [joined, setJoined] = useState<Set<number>>(new Set([1]));
  const [activeCategory, setActiveCategory] = useState("All");
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set([1, 2, 3, 4, 5, 6, 7, 8]));

  const toggleJoin = (id: number) => {
    setJoined((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleDay = (day: number) => {
    setCompletedDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
  };

  const filtered = activeChallenges.filter(
    (c) => activeCategory === "All" || c.category === activeCategory
  );

  const streakDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const completedCount = completedDays.size;

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Target size={20} style={{ color: "#00FF88" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>Challenges</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Grow{" "}
            <span style={{ background: "linear-gradient(135deg, #00FF88, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              together.
            </span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#6A6A88" }}>
            Real spiritual growth happens in community. Join a challenge, track your progress, and cheer others on.
          </p>
        </div>

        {/* Featured Challenge */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Challenge card */}
            <div className="lg:col-span-2 rounded-2xl p-8" style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.08) 0%, rgba(16,185,129,0.04) 100%)", border: "1px solid rgba(0,255,136,0.25)" }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block" style={{ background: "rgba(0,255,136,0.15)", color: "#00FF88" }}>
                    🔥 This Month&apos;s Challenge
                  </span>
                  <h2 className="text-3xl font-black mb-2" style={{ color: "#F2F2F8" }}>
                    {weeklyChallenge.emoji} {weeklyChallenge.title}
                  </h2>
                  <p className="text-base mb-4" style={{ color: "#8A8AA8" }}>{weeklyChallenge.description}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl mb-6" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(0,255,136,0.1)" }}>
                <p className="text-sm italic mb-1" style={{ color: "#C0C0D8" }}>&ldquo;{weeklyChallenge.verse}&rdquo;</p>
                <p className="text-xs font-bold" style={{ color: "#00FF88" }}>— {weeklyChallenge.verseRef}</p>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center rounded-xl p-3" style={{ background: "rgba(0,0,0,0.2)" }}>
                  <p className="text-xl font-black" style={{ color: "#00FF88" }}>{weeklyChallenge.participants.toLocaleString()}</p>
                  <p className="text-xs" style={{ color: "#4A4A68" }}>Participants</p>
                </div>
                <div className="text-center rounded-xl p-3" style={{ background: "rgba(0,0,0,0.2)" }}>
                  <p className="text-xl font-black" style={{ color: "#F59E0B" }}>{weeklyChallenge.daysLeft}</p>
                  <p className="text-xs" style={{ color: "#4A4A68" }}>Days left</p>
                </div>
                <div className="text-center rounded-xl p-3" style={{ background: "rgba(0,0,0,0.2)" }}>
                  <p className="text-xl font-black" style={{ color: "#6B4FBB" }}>{completedCount}/30</p>
                  <p className="text-xs" style={{ color: "#4A4A68" }}>Your streak</p>
                </div>
              </div>

              <button
                onClick={() => toggleJoin(1)}
                className="w-full py-3.5 rounded-xl font-black text-base transition-all"
                style={{
                  background: joined.has(1) ? "rgba(0,255,136,0.15)" : "linear-gradient(135deg, #00FF88, #00BB55)",
                  color: joined.has(1) ? "#00FF88" : "#07070F",
                  border: joined.has(1) ? "1px solid rgba(0,255,136,0.4)" : "none",
                }}
              >
                {joined.has(1) ? "✓ Challenge Accepted!" : "Accept Challenge"}
              </button>
            </div>

            {/* Streak tracker */}
            <div className="rounded-2xl p-6" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-black text-base" style={{ color: "#F2F2F8" }}>Your Streak</h3>
                <div className="flex items-center gap-1">
                  <Flame size={14} style={{ color: "#E07030" }} />
                  <span className="font-black text-sm" style={{ color: "#F2F2F8" }}>{completedCount} days</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {streakDays.map((day) => {
                  const done = completedDays.has(day);
                  const isToday = day === 9;
                  return (
                    <button
                      key={day}
                      onClick={() => toggleDay(day)}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold transition-all"
                      style={{
                        background: done
                          ? isToday
                            ? "linear-gradient(135deg, #00FF88, #44FFAA)"
                            : "rgba(0,255,136,0.2)"
                          : "#1E1E32",
                        color: done ? (isToday ? "#07070F" : "#00FF88") : "#4A4A68",
                        border: isToday && !done ? "1px solid rgba(0,255,136,0.3)" : "none",
                      }}
                      title={`Day ${day}`}
                    >
                      {done ? "✓" : day}
                    </button>
                  );
                })}
              </div>
              <div className="p-3 rounded-xl text-center" style={{ background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.1)" }}>
                <p className="text-xs" style={{ color: "#6A6A88" }}>
                  {completedCount === 0
                    ? "Start today — tap a day to mark it complete"
                    : completedCount >= 30
                    ? "🏆 Challenge complete! Amazing!"
                    : `${30 - completedCount} days to go. You've got this!`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all"
                style={{
                  background: activeCategory === c ? "rgba(0,255,136,0.15)" : "rgba(255,255,255,0.03)",
                  border: activeCategory === c ? "1px solid rgba(0,255,136,0.4)" : "1px solid rgba(255,255,255,0.06)",
                  color: activeCategory === c ? "#00FF88" : "#8A8AA8",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Active Challenges */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-xl font-black mb-5" style={{ color: "#F2F2F8" }}>Active Challenges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((c) => {
              const isJoined = joined.has(c.id);
              return (
                <div key={c.id} className="rounded-2xl p-5 flex flex-col" style={{ background: "#12121F", border: `1px solid ${isJoined ? c.color + "30" : "#1E1E32"}` }}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{c.emoji}</span>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: `${c.color}15`, color: c.color }}>
                        {c.category}
                      </span>
                      <span className="text-xs" style={{ color: "#4A4A68" }}>{c.difficulty}</span>
                    </div>
                  </div>
                  <h3 className="font-black text-base mb-2" style={{ color: "#F2F2F8" }}>{c.title}</h3>
                  <p className="text-sm flex-1 mb-3" style={{ color: "#6A6A88", lineHeight: "1.6" }}>{c.description}</p>
                  <div className="flex items-center gap-3 text-xs mb-4" style={{ color: "#4A4A68" }}>
                    <span className="flex items-center gap-1"><Users size={11} /> {c.participants.toLocaleString()}</span>
                    <span className="flex items-center gap-1"><Calendar size={11} /> {c.daysLeft} days left</span>
                  </div>
                  <p className="text-xs italic mb-4" style={{ color: "#8A8AA8" }}>
                    &ldquo;{c.verse}&rdquo; <span style={{ color: c.color }}>— {c.verseRef}</span>
                  </p>
                  <button
                    onClick={() => toggleJoin(c.id)}
                    className="py-2.5 rounded-xl font-bold text-sm transition-all mt-auto"
                    style={{
                      background: isJoined ? `${c.color}15` : "rgba(255,255,255,0.04)",
                      color: isJoined ? c.color : "#8A8AA8",
                      border: `1px solid ${isJoined ? c.color + "40" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    {isJoined ? <span className="flex items-center justify-center gap-1.5"><CheckCircle2 size={13} /> Joined</span> : "Join Challenge"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Completed Challenges Hall of Fame */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black mb-5" style={{ color: "#F2F2F8" }}>
            <Trophy size={18} className="inline mr-2" style={{ color: "#F59E0B" }} />
            Hall of Fame
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {completedChallenges.map((c) => (
              <div key={c.title} className="rounded-2xl p-5 text-center" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <div className="text-4xl mb-2">{c.badge}</div>
                <p className="font-bold text-sm mb-1" style={{ color: "#F2F2F8" }}>{c.title}</p>
                <p className="text-xs mb-1" style={{ color: "#4A4A68" }}>{c.date}</p>
                <p className="text-xs flex items-center justify-center gap-1" style={{ color: "#6A6A88" }}>
                  <Star size={10} style={{ color: "#F59E0B" }} />
                  {c.participants.toLocaleString()} completions
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
