"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, ChevronRight, Search, Lock, Globe, Flame, Star, Plus } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Theology", "Prayer", "Parenting", "Men", "Women", "Students", "Marriage", "Missions", "Creative Arts", "Business", "Recovery"];

const featuredGroup = {
  name: "Reformed Theology Discussion",
  emoji: "⛪",
  color: "#6B4FBB",
  members: 12847,
  online: 341,
  category: "Theology",
  privacy: "public",
  description: "Deep dives into Reformed theology, covenant theology, the doctrines of grace, and the Westminster Confession. Iron sharpens iron.",
  recentTopic: "Is infant baptism biblical? A civil debate.",
  moderators: ["James Whitfield", "Dr. Priya Singh", "Erik Larsen"],
  tags: ["Calvinism", "Covenant Theology", "Exegesis", "Westminster"],
};

const groups = [
  {
    name: "Fathers of Faith",
    emoji: "👨‍👧‍👦",
    color: "#3B82F6",
    members: 8921,
    online: 203,
    category: "Men",
    privacy: "public",
    description: "Christian fathers encouraging each other in leading their homes with integrity, love, and biblical wisdom.",
    tags: ["Fatherhood", "Leadership", "Marriage"],
  },
  {
    name: "Global Prayer Warriors",
    emoji: "🙏",
    color: "#D4AF37",
    members: 34502,
    online: 1204,
    category: "Prayer",
    privacy: "public",
    description: "Interceding for the nations 24/7. Rotating prayer chains, unreached people group updates, and live prayer sessions.",
    tags: ["Intercession", "Missions", "Warfare Prayer"],
  },
  {
    name: "Creative Christians",
    emoji: "🎨",
    color: "#EC4899",
    members: 5217,
    online: 88,
    category: "Creative Arts",
    privacy: "public",
    description: "Artists, musicians, filmmakers, writers — redeeming culture for Christ. Share your work, get feedback, find collaborators.",
    tags: ["Music", "Visual Art", "Film", "Writing"],
  },
  {
    name: "College Faith Network",
    emoji: "🎓",
    color: "#10B981",
    members: 19304,
    online: 512,
    category: "Students",
    privacy: "public",
    description: "Navigating university life as a Christian. Faith, apologetics, campus ministry, dating, and identity questions.",
    tags: ["Campus", "Apologetics", "Young Adults"],
  },
  {
    name: "Biblical Marriage",
    emoji: "💍",
    color: "#EF4444",
    members: 7634,
    online: 156,
    category: "Marriage",
    privacy: "public",
    description: "Building covenant marriages that reflect Christ and the Church. Practical tools, honest conversations, and prayer.",
    tags: ["Covenant", "Communication", "Intimacy"],
  },
  {
    name: "Women in the Word",
    emoji: "📖",
    color: "#F59E0B",
    members: 22118,
    online: 789,
    category: "Women",
    privacy: "public",
    description: "A community for Christian women to study Scripture, share life, mentor one another, and walk in their God-given calling.",
    tags: ["Bible Study", "Mentorship", "Identity"],
  },
  {
    name: "Business as Mission",
    emoji: "💼",
    color: "#6B4FBB",
    members: 4830,
    online: 67,
    category: "Business",
    privacy: "public",
    description: "Integrating faith and work. Kingdom entrepreneurship, ethical business, and using commerce as a vehicle for the Gospel.",
    tags: ["Entrepreneurship", "Marketplace", "Ethics"],
  },
  {
    name: "Grief & Hope",
    emoji: "🕊️",
    color: "#8B9BCC",
    members: 6412,
    online: 142,
    category: "Recovery",
    privacy: "private",
    description: "A safe, moderated space for those walking through loss — of a loved one, a marriage, a dream, or a season. Grace here.",
    tags: ["Grief", "Loss", "Healing", "Support"],
  },
  {
    name: "Frontier Missions Network",
    emoji: "🌍",
    color: "#EF4444",
    members: 9215,
    online: 224,
    category: "Missions",
    privacy: "public",
    description: "Connecting field workers, senders, and pray-ers around the 10/40 Window. Real reports, real needs, real partnership.",
    tags: ["Unreached", "Church Planting", "10/40"],
  },
  {
    name: "New Parents Circle",
    emoji: "👶",
    color: "#10B981",
    members: 11308,
    online: 298,
    category: "Parenting",
    privacy: "public",
    description: "For parents of newborns through age 5. Baby dedications, sleep deprivation solidarity, biblical parenting foundations.",
    tags: ["Newborns", "Toddlers", "Christian Home"],
  },
  {
    name: "Addiction Freedom",
    emoji: "⛓️",
    color: "#D4AF37",
    members: 3891,
    online: 94,
    category: "Recovery",
    privacy: "private",
    description: "Confidential support for those fighting addiction — and those who love them. Biblical recovery, accountability, hope.",
    tags: ["Recovery", "Accountability", "Freedom"],
  },
  {
    name: "Apologetics Lab",
    emoji: "🧠",
    color: "#3B82F6",
    members: 7102,
    online: 189,
    category: "Theology",
    privacy: "public",
    description: "Practicing answers to hard questions. Debate, discuss, and refine your defense of the faith in a supportive environment.",
    tags: ["Debates", "Philosophy", "Evidence"],
  },
];

const myGroups = [
  { name: "Reformed Theology Discussion", emoji: "⛪", color: "#6B4FBB", unread: 24 },
  { name: "Global Prayer Warriors", emoji: "🙏", color: "#D4AF37", unread: 7 },
  { name: "College Faith Network", emoji: "🎓", color: "#10B981", unread: 0 },
];

export default function GroupsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [joined, setJoined] = useState<Record<string, boolean>>({
    "Reformed Theology Discussion": true,
    "Global Prayer Warriors": true,
    "College Faith Network": true,
  });

  const filtered = groups.filter((g) => {
    const matchCat = activeCategory === "All" || g.category === activeCategory;
    const matchSearch = search === "" || g.name.toLowerCase().includes(search.toLowerCase()) || g.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="pt-24 pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users size={22} style={{ color: "#D4AF37" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4AF37" }}>Interest Circles</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-5">
              Find your{" "}
              <span style={{ background: "linear-gradient(135deg, #D4AF37, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                people.
              </span>
            </h1>
            <p className="text-lg mb-8" style={{ color: "#6A6A88" }}>
              Christians who share your passions, your questions, and your calling. Groups for every season and stage of faith.
            </p>
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#4A4A68" }} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search groups or tags..."
                className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              {/* My Groups */}
              <div className="rounded-2xl p-5 mb-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <h3 className="font-black text-sm mb-4" style={{ color: "#F2F2F8" }}>My Groups</h3>
                <div className="space-y-3">
                  {myGroups.map((g) => (
                    <div key={g.name} className="flex items-center gap-3 cursor-pointer">
                      <span className="text-xl">{g.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold truncate" style={{ color: "#C0C0D8" }}>{g.name}</p>
                      </div>
                      {g.unread > 0 && (
                        <span className="text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center" style={{ background: "#D4AF37", color: "#000" }}>
                          {g.unread}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Create Group */}
              <button
                className="w-full flex items-center gap-2 p-4 rounded-2xl font-bold text-sm"
                style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", color: "#D4AF37" }}
              >
                <Plus size={16} />
                Create a Group
              </button>
            </aside>

            {/* Main */}
            <div className="flex-1 min-w-0">
              {/* Category filter */}
              <div className="flex gap-2 flex-wrap mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                    style={{
                      background: activeCategory === cat ? "#D4AF37" : "rgba(255,255,255,0.04)",
                      color: activeCategory === cat ? "#000" : "#6A6A88",
                      border: `1px solid ${activeCategory === cat ? "#D4AF37" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Featured Group */}
              {activeCategory === "All" && search === "" && (
                <div
                  className="rounded-2xl p-7 mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${featuredGroup.color}10 0%, rgba(7,7,15,1) 100%)`,
                    border: `1px solid ${featuredGroup.color}30`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-5xl">{featuredGroup.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h2 className="font-black text-xl" style={{ color: "#F2F2F8" }}>{featuredGroup.name}</h2>
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37" }}>⭐ Featured</span>
                        <span className="text-xs px-2 py-0.5 rounded-full flex items-center gap-1" style={{ background: `${featuredGroup.color}15`, color: featuredGroup.color }}>
                          <Globe size={10} /> Public
                        </span>
                      </div>
                      <p className="text-sm mb-3 leading-relaxed" style={{ color: "#8A8AA8" }}>{featuredGroup.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {featuredGroup.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${featuredGroup.color}15`, color: featuredGroup.color }}>{t}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-6 flex-wrap">
                        <span className="text-xs" style={{ color: "#6A6A88" }}>
                          <strong style={{ color: "#F2F2F8" }}>{featuredGroup.members.toLocaleString()}</strong> members
                        </span>
                        <span className="flex items-center gap-1 text-xs" style={{ color: "#10B981" }}>
                          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#10B981" }} />
                          {featuredGroup.online} online
                        </span>
                        <span className="text-xs" style={{ color: "#6A6A88" }}>
                          💬 Hot: &ldquo;{featuredGroup.recentTopic}&rdquo;
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setJoined((j) => ({ ...j, [featuredGroup.name]: !j[featuredGroup.name] }))}
                      className="px-5 py-2 rounded-xl font-bold text-sm shrink-0"
                      style={{
                        background: joined[featuredGroup.name] ? "rgba(255,255,255,0.06)" : `linear-gradient(135deg, ${featuredGroup.color}, ${featuredGroup.color}CC)`,
                        color: joined[featuredGroup.name] ? "#8A8AA8" : "#fff",
                        border: joined[featuredGroup.name] ? "1px solid rgba(255,255,255,0.1)" : "none",
                      }}
                    >
                      {joined[featuredGroup.name] ? "Joined ✓" : "Join Group"}
                    </button>
                  </div>
                </div>
              )}

              {/* Group Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filtered.map((g) => (
                  <div
                    key={g.name}
                    className="rounded-2xl p-5 flex flex-col cursor-pointer transition-all"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${g.color}40`;
                      e.currentTarget.style.background = `${g.color}05`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{g.emoji}</span>
                        <div>
                          <h3 className="font-black text-base leading-tight" style={{ color: "#F2F2F8" }}>{g.name}</h3>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs" style={{ color: g.color }}>{g.category}</span>
                            {g.privacy === "private" ? (
                              <span className="flex items-center gap-0.5 text-xs" style={{ color: "#6A6A88" }}><Lock size={9} /> Private</span>
                            ) : (
                              <span className="flex items-center gap-0.5 text-xs" style={{ color: "#6A6A88" }}><Globe size={9} /> Public</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs mb-3 leading-relaxed flex-1" style={{ color: "#6A6A88" }}>{g.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {g.tags.slice(0, 3).map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${g.color}10`, color: g.color }}>{t}</span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <span className="text-xs" style={{ color: "#4A4A68" }}>
                          <strong style={{ color: "#C0C0D8" }}>{g.members >= 1000 ? `${(g.members / 1000).toFixed(1)}k` : g.members}</strong> members
                        </span>
                        <span className="flex items-center gap-1 text-xs" style={{ color: "#10B981" }}>
                          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#10B981" }} />
                          {g.online}
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setJoined((j) => ({ ...j, [g.name]: !j[g.name] }));
                        }}
                        className="px-3 py-1 rounded-lg font-bold text-xs"
                        style={{
                          background: joined[g.name] ? "rgba(255,255,255,0.06)" : `${g.color}20`,
                          color: joined[g.name] ? "#6A6A88" : g.color,
                          border: `1px solid ${joined[g.name] ? "rgba(255,255,255,0.08)" : `${g.color}30`}`,
                        }}
                      >
                        {joined[g.name] ? "Joined ✓" : "Join"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-4xl mb-4">🔍</p>
                  <p className="font-bold mb-2" style={{ color: "#F2F2F8" }}>No groups found</p>
                  <p className="text-sm" style={{ color: "#6A6A88" }}>Try a different search or category, or create your own.</p>
                </div>
              )}

              {/* Create CTA */}
              <div
                className="mt-8 rounded-2xl p-8 text-center"
                style={{ background: "linear-gradient(135deg, rgba(107,79,187,0.07) 0%, rgba(212,175,55,0.07) 100%)", border: "1px solid rgba(107,79,187,0.2)" }}
              >
                <Flame size={28} style={{ color: "#6B4FBB" }} className="mx-auto mb-3" />
                <h3 className="text-xl font-black mb-2" style={{ color: "#F2F2F8" }}>Don&apos;t see your community?</h3>
                <p className="text-sm mb-5 max-w-sm mx-auto" style={{ color: "#6A6A88" }}>
                  Start a group around your passion, your church, or your calling. It takes 2 minutes.
                </p>
                <button
                  className="inline-flex items-center gap-2 px-7 py-2.5 rounded-xl font-bold text-sm"
                  style={{ background: "linear-gradient(135deg, #6B4FBB, #5A3FA8)", color: "#fff" }}
                >
                  <Plus size={14} /> Create a Group
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
