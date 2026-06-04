"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Trophy, Flame, Star, Heart, BookOpen, MessageSquare, Globe, Shield, ChevronRight, Crown } from "lucide-react";
import { useState, useEffect } from "react";

const periods = ["This Week", "This Month", "All Time"];

const categories = [
  { label: "Overall", icon: Trophy, color: "#3a7d56" },
  { label: "Most Helpful", icon: Heart, color: "#EC4899" },
  { label: "Prayer Warriors", icon: Shield, color: "#6B4FBB" },
  { label: "Top Teachers", icon: BookOpen, color: "#3B82F6" },
  { label: "Missional", icon: Globe, color: "#10B981" },
  { label: "Discussion Leaders", icon: MessageSquare, color: "#F59E0B" },
];

const badges = [
  { emoji: "🏆", name: "Gold Vine", desc: "Top 1% contributor", color: "#3a7d56" },
  { emoji: "🔥", name: "Fire Keeper", desc: "30-day streak", color: "#EF4444" },
  { emoji: "🙏", name: "Prayer Warrior", desc: "500+ prayers offered", color: "#6B4FBB" },
  { emoji: "📖", name: "Word Keeper", desc: "365-day reading plan", color: "#3B82F6" },
  { emoji: "🌍", name: "Global Servant", desc: "Connected in 10+ countries", color: "#10B981" },
  { emoji: "✝️", name: "Faithful Witness", desc: "10+ testimonies shared", color: "#F59E0B" },
  { emoji: "💡", name: "Apologist", desc: "50+ helpful answers", color: "#8B9BCC" },
  { emoji: "❤️", name: "Encourager", desc: "1000+ hearts given", color: "#EC4899" },
];

const leaderboards: Record<string, Array<{
  rank: number; name: string; flag: string; avatar: string; color: string;
  location: string; score: number; unit: string; streak: number;
  badges: string[]; change: "up" | "down" | "same";
}>> = {
  Overall: [
    { rank: 1, name: "Amara Osei", flag: "🇬🇭", avatar: "AO", color: "#3a7d56", location: "Accra, Ghana", score: 48920, unit: "pts", streak: 127, badges: ["🏆", "🔥", "🙏"], change: "same" },
    { rank: 2, name: "Ji-Woo Park", flag: "🇰🇷", avatar: "JP", color: "#6B4FBB", location: "Seoul, South Korea", score: 41304, unit: "pts", streak: 89, badges: ["🔥", "📖", "✝️"], change: "up" },
    { rank: 3, name: "Isabella Ferreira", flag: "🇧🇷", avatar: "IF", color: "#EF4444", location: "Mozambique", score: 38817, unit: "pts", streak: 203, badges: ["🌍", "🙏", "🏆"], change: "up" },
    { rank: 4, name: "Samuel Mwangi", flag: "🇰🇪", avatar: "SM", color: "#3B82F6", location: "Nairobi, Kenya", score: 35102, unit: "pts", streak: 54, badges: ["💡", "❤️"], change: "down" },
    { rank: 5, name: "Min-Jun Cho", flag: "🇰🇷", avatar: "MJ", color: "#10B981", location: "Mongolia", score: 31445, unit: "pts", streak: 312, badges: ["📖", "🌍", "✝️"], change: "up" },
    { rank: 6, name: "Lydia Böhm", flag: "🇩🇪", avatar: "LB", color: "#EC4899", location: "Berlin, Germany", score: 28203, unit: "pts", streak: 41, badges: ["💡", "❤️", "🔥"], change: "same" },
    { rank: 7, name: "Rev. David Osei", flag: "🇬🇭", avatar: "DO", color: "#F59E0B", location: "Kumasi, Ghana", score: 24891, unit: "pts", streak: 67, badges: ["🙏", "📖"], change: "down" },
    { rank: 8, name: "Fatima Al-Rashid", flag: "🇱🇧", avatar: "FA", color: "#EF4444", location: "Lebanon", score: 21730, unit: "pts", streak: 88, badges: ["🌍", "❤️"], change: "up" },
    { rank: 9, name: "Carlos Mendez", flag: "🇨🇴", avatar: "CM", color: "#10B981", location: "Bogotá, Colombia", score: 19204, unit: "pts", streak: 156, badges: ["✝️", "🙏", "🔥"], change: "same" },
    { rank: 10, name: "Dr. Priya Singh", flag: "🇮🇳", avatar: "PS", color: "#6B4FBB", location: "Bangalore, India", score: 17018, unit: "pts", streak: 29, badges: ["💡", "📖"], change: "up" },
  ],
  "Prayer Warriors": [
    { rank: 1, name: "Isabella Ferreira", flag: "🇧🇷", avatar: "IF", color: "#EF4444", location: "Mozambique", score: 2847, unit: "prayers", streak: 203, badges: ["🙏", "🌍"], change: "same" },
    { rank: 2, name: "Rev. David Osei", flag: "🇬🇭", avatar: "DO", color: "#F59E0B", location: "Kumasi, Ghana", score: 2301, unit: "prayers", streak: 67, badges: ["🙏", "📖"], change: "up" },
    { rank: 3, name: "Amara Osei", flag: "🇬🇭", avatar: "AO", color: "#3a7d56", location: "Accra, Ghana", score: 2104, unit: "prayers", streak: 127, badges: ["🙏", "🏆"], change: "down" },
    { rank: 4, name: "Carlos Mendez", flag: "🇨🇴", avatar: "CM", color: "#10B981", location: "Bogotá, Colombia", score: 1892, unit: "prayers", streak: 156, badges: ["🙏", "✝️"], change: "same" },
    { rank: 5, name: "Fatima Al-Rashid", flag: "🇱🇧", avatar: "FA", color: "#EF4444", location: "Lebanon", score: 1634, unit: "prayers", streak: 88, badges: ["🙏", "❤️"], change: "up" },
  ],
  "Top Teachers": [
    { rank: 1, name: "Dr. Priya Singh", flag: "🇮🇳", avatar: "PS", color: "#6B4FBB", location: "Bangalore, India", score: 412, unit: "answers", streak: 29, badges: ["💡", "📖"], change: "same" },
    { rank: 2, name: "Ji-Woo Park", flag: "🇰🇷", avatar: "JP", color: "#6B4FBB", location: "Seoul, South Korea", score: 387, unit: "answers", streak: 89, badges: ["💡", "✝️"], change: "up" },
    { rank: 3, name: "Lydia Böhm", flag: "🇩🇪", avatar: "LB", color: "#EC4899", location: "Berlin, Germany", score: 341, unit: "answers", streak: 41, badges: ["💡", "🔥"], change: "same" },
    { rank: 4, name: "Samuel Mwangi", flag: "🇰🇪", avatar: "SM", color: "#3B82F6", location: "Nairobi, Kenya", score: 298, unit: "answers", streak: 54, badges: ["💡", "❤️"], change: "down" },
    { rank: 5, name: "Min-Jun Cho", flag: "🇰🇷", avatar: "MJ", color: "#10B981", location: "Mongolia", score: 247, unit: "answers", streak: 312, badges: ["💡", "📖"], change: "up" },
  ],
  Missional: [
    { rank: 1, name: "Min-Jun Cho", flag: "🇰🇷", avatar: "MJ", color: "#10B981", location: "Mongolia", score: 47, unit: "countries", streak: 312, badges: ["🌍", "📖"], change: "same" },
    { rank: 2, name: "Isabella Ferreira", flag: "🇧🇷", avatar: "IF", color: "#EF4444", location: "Mozambique", score: 38, unit: "countries", streak: 203, badges: ["🌍", "🙏"], change: "up" },
    { rank: 3, name: "Fatima Al-Rashid", flag: "🇱🇧", avatar: "FA", color: "#EF4444", location: "Lebanon", score: 31, unit: "countries", streak: 88, badges: ["🌍", "❤️"], change: "same" },
    { rank: 4, name: "Carlos Mendez", flag: "🇨🇴", avatar: "CM", color: "#10B981", location: "Bogotá, Colombia", score: 24, unit: "countries", streak: 156, badges: ["🌍", "✝️"], change: "down" },
    { rank: 5, name: "Amara Osei", flag: "🇬🇭", avatar: "AO", color: "#3a7d56", location: "Accra, Ghana", score: 19, unit: "countries", streak: 127, badges: ["🌍", "🏆"], change: "up" },
  ],
  "Most Helpful": [
    { rank: 1, name: "Rev. David Osei", flag: "🇬🇭", avatar: "DO", color: "#F59E0B", location: "Kumasi, Ghana", score: 4821, unit: "hearts", streak: 67, badges: ["❤️", "🙏"], change: "same" },
    { rank: 2, name: "Amara Osei", flag: "🇬🇭", avatar: "AO", color: "#3a7d56", location: "Accra, Ghana", score: 4203, unit: "hearts", streak: 127, badges: ["❤️", "🏆"], change: "up" },
    { rank: 3, name: "Dr. Priya Singh", flag: "🇮🇳", avatar: "PS", color: "#6B4FBB", location: "Bangalore, India", score: 3891, unit: "hearts", streak: 29, badges: ["❤️", "💡"], change: "same" },
    { rank: 4, name: "Lydia Böhm", flag: "🇩🇪", avatar: "LB", color: "#EC4899", location: "Berlin, Germany", score: 3412, unit: "hearts", streak: 41, badges: ["❤️", "🔥"], change: "down" },
    { rank: 5, name: "Samuel Mwangi", flag: "🇰🇪", avatar: "SM", color: "#3B82F6", location: "Nairobi, Kenya", score: 2987, unit: "hearts", streak: 54, badges: ["❤️", "💡"], change: "up" },
  ],
  "Discussion Leaders": [
    { rank: 1, name: "Ji-Woo Park", flag: "🇰🇷", avatar: "JP", color: "#6B4FBB", location: "Seoul, South Korea", score: 892, unit: "replies", streak: 89, badges: ["💡", "✝️"], change: "same" },
    { rank: 2, name: "Samuel Mwangi", flag: "🇰🇪", avatar: "SM", color: "#3B82F6", location: "Nairobi, Kenya", score: 734, unit: "replies", streak: 54, badges: ["💡", "📖"], change: "up" },
    { rank: 3, name: "Rev. David Osei", flag: "🇬🇭", avatar: "DO", color: "#F59E0B", location: "Kumasi, Ghana", score: 671, unit: "replies", streak: 67, badges: ["💡", "🙏"], change: "down" },
    { rank: 4, name: "Isabella Ferreira", flag: "🇧🇷", avatar: "IF", color: "#EF4444", location: "Mozambique", score: 542, unit: "replies", streak: 203, badges: ["💡", "🌍"], change: "same" },
    { rank: 5, name: "Lydia Böhm", flag: "🇩🇪", avatar: "LB", color: "#EC4899", location: "Berlin, Germany", score: 498, unit: "replies", streak: 41, badges: ["💡", "❤️"], change: "up" },
  ],
};

const rankColors: Record<number, string> = { 1: "#3a7d56", 2: "#C0C0C0", 3: "#CD7F32" };
const changeIcon: Record<string, string> = { up: "↑", down: "↓", same: "—" };
const changeColor: Record<string, string> = { up: "#10B981", down: "#EF4444", same: "#4A4A68" };

export default function LeaderboardPage() {
  const [activePeriod, setActivePeriod] = useState(() => {
    try { return localStorage.getItem("vine_lb_period") ?? "This Week"; } catch { return "This Week"; }
  });
  const [activeCategory, setActiveCategory] = useState(() => {
    try { return localStorage.getItem("vine_lb_category") ?? "Overall"; } catch { return "Overall"; }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_lb_period", activePeriod); } catch {}
  }, [activePeriod]);

  useEffect(() => {
    try { localStorage.setItem("vine_lb_category", activeCategory); } catch {}
  }, [activeCategory]);

  const board = leaderboards[activeCategory] ?? leaderboards.Overall;

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trophy size={22} style={{ color: "#3a7d56" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Community Champions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-5">
              Top{" "}
              <span style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Contributors
              </span>
            </h1>
            <p className="text-lg" style={{ color: "#6A6A88" }}>
              Recognizing the faithful — those who pray the hardest, teach the clearest, and serve the widest.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Period selector */}
          <div className="flex justify-center gap-2 mb-8">
            {periods.map((p) => (
              <button type="button"
                key={p}
                onClick={() => setActivePeriod(p)}
                className="px-5 py-2 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: activePeriod === p ? "#3a7d56" : "rgba(255,255,255,0.04)",
                  color: activePeriod === p ? "#000" : "#6A6A88",
                  border: `1px solid ${activePeriod === p ? "#3a7d56" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 flex-wrap mb-8 justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button type="button"
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    background: activeCategory === cat.label ? `${cat.color}20` : "rgba(255,255,255,0.03)",
                    color: activeCategory === cat.label ? cat.color : "#6A6A88",
                    border: `1px solid ${activeCategory === cat.label ? `${cat.color}40` : "rgba(255,255,255,0.06)"}`,
                  }}
                >
                  <Icon size={13} /> {cat.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Podium — top 3 */}
            <div className="lg:col-span-1">
              <h2 className="text-sm font-black uppercase tracking-widest mb-5" style={{ color: "#4A4A68" }}>Top 3</h2>
              <div className="space-y-3">
                {board.slice(0, 3).map((entry) => (
                  <div
                    key={entry.rank}
                    className="rounded-2xl p-5 relative overflow-hidden"
                    style={{
                      background: entry.rank === 1
                        ? "linear-gradient(135deg, rgba(58,125,86,0.12) 0%, rgba(7,7,15,1) 100%)"
                        : "rgba(255,255,255,0.02)",
                      border: `1px solid ${rankColors[entry.rank] ?? "rgba(255,255,255,0.06)"}30`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black"
                          style={{ background: `${entry.color}25`, color: entry.color, border: `2px solid ${entry.color}40` }}
                        >
                          {entry.avatar}
                        </div>
                        <div
                          className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black"
                          style={{ background: rankColors[entry.rank] ?? "#4A4A68", color: entry.rank === 2 ? "#000" : "#000" }}
                        >
                          {entry.rank === 1 ? "👑" : entry.rank}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-black text-sm" style={{ color: "#F2F2F8" }}>{entry.name} {entry.flag}</p>
                        <p className="text-xs" style={{ color: "#6A6A88" }}>{entry.location}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-bold" style={{ color: rankColors[entry.rank] ?? "#F2F2F8" }}>
                            {entry.score.toLocaleString()} {entry.unit}
                          </span>
                          <span className="text-xs" style={{ color: "#4A4A68" }}>🔥 {entry.streak}d</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-3">
                      {entry.badges.map((b) => (
                        <span key={b} className="text-base">{b}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Badges legend */}
              <div className="mt-6 rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <h3 className="font-black text-sm mb-4" style={{ color: "#F2F2F8" }}>Badges</h3>
                <div className="grid grid-cols-2 gap-2">
                  {badges.map((b) => (
                    <div key={b.name} className="flex items-center gap-2">
                      <span className="text-lg">{b.emoji}</span>
                      <div>
                        <p className="text-xs font-bold" style={{ color: b.color }}>{b.name}</p>
                        <p className="text-xs leading-tight" style={{ color: "#4A4A68" }}>{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Full leaderboard */}
            <div className="lg:col-span-2">
              <h2 className="text-sm font-black uppercase tracking-widest mb-5" style={{ color: "#4A4A68" }}>Full Rankings</h2>
              <div className="space-y-2">
                {board.map((entry) => (
                  <div
                    key={entry.rank}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(58,125,86,0.15)"; e.currentTarget.style.background = "rgba(58,125,86,0.02)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
                  >
                    {/* Rank */}
                    <div className="w-8 text-center shrink-0">
                      {entry.rank <= 3 ? (
                        <span className="text-lg">{["👑", "🥈", "🥉"][entry.rank - 1]}</span>
                      ) : (
                        <span className="font-black text-sm" style={{ color: "#4A4A68" }}>{entry.rank}</span>
                      )}
                    </div>

                    {/* Avatar */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                      style={{ background: `${entry.color}25`, color: entry.color }}
                    >
                      {entry.avatar}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-sm" style={{ color: "#F2F2F8" }}>{entry.name} {entry.flag}</p>
                        <div className="flex gap-0.5">
                          {entry.badges.slice(0, 2).map((b) => (
                            <span key={b} className="text-xs">{b}</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs" style={{ color: "#4A4A68" }}>{entry.location}</p>
                    </div>

                    {/* Streak */}
                    <div className="hidden sm:flex items-center gap-1 shrink-0">
                      <Flame size={12} style={{ color: "#EF4444" }} />
                      <span className="text-xs font-semibold" style={{ color: "#8A8AA8" }}>{entry.streak}d</span>
                    </div>

                    {/* Score */}
                    <div className="text-right shrink-0">
                      <p className="font-black text-sm" style={{ color: entry.rank <= 3 ? (rankColors[entry.rank] ?? "#F2F2F8") : "#F2F2F8" }}>
                        {entry.score.toLocaleString()}
                      </p>
                      <p className="text-xs" style={{ color: "#4A4A68" }}>{entry.unit}</p>
                    </div>

                    {/* Change */}
                    <span className="text-xs font-bold w-4 text-center shrink-0" style={{ color: changeColor[entry.change] }}>
                      {changeIcon[entry.change]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Join CTA */}
              <div
                className="mt-6 rounded-2xl p-6 text-center"
                style={{ background: "linear-gradient(135deg, rgba(58,125,86,0.06) 0%, rgba(107,79,187,0.06) 100%)", border: "1px solid rgba(58,125,86,0.15)" }}
              >
                <Crown size={24} style={{ color: "#3a7d56" }} className="mx-auto mb-3" />
                <p className="font-black text-base mb-1" style={{ color: "#F2F2F8" }}>Your rank: Not yet on the board</p>
                <p className="text-sm mb-4" style={{ color: "#6A6A88" }}>
                  Start contributing — pray, teach, connect, encourage — and earn your place.
                </p>
                <Link
                  href="/feed"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-black"
                  style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)" }}
                >
                  Start Contributing <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
