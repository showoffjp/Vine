"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, X, BookOpen, MessageSquare, Users, Flame, Globe, Star, ChevronRight, Clock, Heart, Shield, Video } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const categories = [
  { label: "All", icon: "✦", color: "#00FF88" },
  { label: "Articles", icon: "📖", color: "#3B82F6" },
  { label: "Discussions", icon: "💬", color: "#6B4FBB" },
  { label: "Scripture", icon: "✝️", color: "#00FF88" },
  { label: "Stories", icon: "❤️", color: "#EC4899" },
  { label: "Videos", icon: "🎬", color: "#EF4444" },
  { label: "Groups", icon: "👥", color: "#10B981" },
  { label: "People", icon: "🌍", color: "#F59E0B" },
];

const trending = [
  "Unanswered prayer", "Romans 8 explained", "Faith and anxiety",
  "Is the Bible reliable?", "C.S. Lewis quotes", "Sabbath rest",
  "Christian dating", "Doubt and faith", "Prayer warrior",
];

const allResults = [
  {
    type: "Article",
    typeColor: "#3B82F6",
    icon: "📖",
    title: "Why the Resurrection Changes Everything",
    excerpt: "Paul's declaration in 1 Corinthians 15 isn't a footnote to Christianity — it's the entire foundation.",
    meta: "Dr. Marcus Webb · 8 min read · 24.3k views",
    href: "/blog/why-the-resurrection-changes-everything",
    tags: ["Resurrection", "Theology"],
    hearts: 1842,
  },
  {
    type: "Discussion",
    typeColor: "#6B4FBB",
    icon: "💬",
    title: "How do you handle doubt without losing faith?",
    excerpt: "I've been a Christian for 15 years, but the last six months have shaken me. Looking for honest responses, not platitudes.",
    meta: "r/FaithAndDoubt · 847 replies · 2.1k upvotes",
    href: "/discussions/faith-and-doubt-001",
    tags: ["Doubt", "Faith"],
    hearts: 2103,
  },
  {
    type: "Scripture",
    typeColor: "#00FF88",
    icon: "✝️",
    title: "Romans 8:28 — And we know that in all things God works for the good",
    excerpt: "...of those who love him, who have been called according to his purpose.",
    meta: "New International Version · Romans 8",
    href: "/bible",
    tags: ["Romans", "Providence"],
    hearts: 5821,
  },
  {
    type: "Story",
    typeColor: "#EC4899",
    icon: "❤️",
    title: "From Drug Cartel Enforcer to Church Planter",
    excerpt: "I was 23 years old, knee-deep in cartel work, certain I was going to die before 30...",
    meta: "Carlos Mendez · Bogotá, Colombia · 12 min read",
    href: "/stories/carlos-mendez-drug-cartel-to-church-planter",
    tags: ["Redemption", "Colombia"],
    hearts: 5832,
  },
  {
    type: "Group",
    typeColor: "#10B981",
    icon: "👥",
    title: "Reformed Theology Discussion",
    excerpt: "Deep dives into Reformed theology, covenant theology, the doctrines of grace, and the Westminster Confession.",
    meta: "12,847 members · 341 online",
    href: "/groups",
    tags: ["Theology", "Calvinism"],
    hearts: 0,
  },
  {
    type: "Video",
    typeColor: "#EF4444",
    icon: "🎬",
    title: "Tim Keller on Suffering and the Sovereignty of God",
    excerpt: "A 45-minute lecture on how Christians should think about pain, loss, and God's goodness.",
    meta: "Gospel Coalition · 45 min · 128k views",
    href: "/video",
    tags: ["Suffering", "Tim Keller"],
    hearts: 3201,
  },
  {
    type: "Article",
    typeColor: "#3B82F6",
    icon: "📖",
    title: "AI, ChatGPT, and the Church: A Faithful Reckoning",
    excerpt: "Artificial intelligence isn't going away. The question isn't whether Christians should engage it — it's how.",
    meta: "James Okafor · 9 min read · 32.1k views",
    href: "/blog/ai-chatgpt-church",
    tags: ["Technology", "Ethics"],
    hearts: 2876,
  },
  {
    type: "People",
    typeColor: "#F59E0B",
    icon: "🌍",
    title: "Min-Jun Cho",
    excerpt: "Bible translator working on the first Buryat New Testament. Mongolia.",
    meta: "Vine missionary · 4,201 followers",
    href: "/global-connect",
    tags: ["Missions", "Translation"],
    hearts: 0,
  },
];

const allResultsExtra = [
  {
    type: "Article",
    typeColor: "#EF4444",
    icon: "📖",
    title: "The Problem of Evil: Why Suffering Doesn't Disprove God",
    excerpt: "Epicurus posed the challenge 2,300 years ago. Alvin Plantinga answered it in the 20th century. Here's why the logical problem of evil fails.",
    meta: "Dr. Priya Singh · 10 min read · 18.7k views",
    href: "/blog/problem-of-evil",
    tags: ["Theodicy", "Suffering", "Apologetics"],
    hearts: 1203,
  },
  {
    type: "Discussion",
    typeColor: "#6B4FBB",
    icon: "💬",
    title: "Does free will actually exist if God is omniscient?",
    excerpt: "If God knew before creation every choice I would ever make, in what sense am I actually making free choices? Philosophy student asks the community.",
    meta: "r/Theology&Doctrine · 234 replies · 847 upvotes",
    href: "/discussions/free-will-omniscience-003",
    tags: ["Free Will", "Theology"],
    hearts: 847,
  },
  {
    type: "Article",
    typeColor: "#00FF88",
    icon: "📖",
    title: "The Digital Sabbath: How to Rest in a Hyper-Connected World",
    excerpt: "Your phones have colonized Sunday. The ancient practice of Shabbat has something radical to say about it.",
    meta: "Rachel Kim · 6 min read · 41.2k views",
    href: "/blog/digital-sabbath",
    tags: ["Sabbath", "Technology", "Rest"],
    hearts: 3891,
  },
  {
    type: "Story",
    typeColor: "#EC4899",
    icon: "❤️",
    title: "I Deconstructed My Faith — and Then Found It Again, Better",
    excerpt: "I left evangelical Christianity at 24. I was done. Four years of questions, grief, and honest searching later, I walked back in.",
    meta: "Lydia Böhm · Berlin, Germany · 11 min read",
    href: "/stories/lydia-bohm-deconstruction",
    tags: ["Deconstruction", "Faith"],
    hearts: 6104,
  },
  {
    type: "Discussion",
    typeColor: "#00FF88",
    icon: "💬",
    title: "After 3 years of depression and praying for healing, I finally got therapy — and it changed everything.",
    excerpt: "I believed that if I just had enough faith, my depression would lift. I was drowning. Finally started seeing a Christian counselor.",
    meta: "r/MentalHealth&Faith · 318 replies · 2.3k upvotes",
    href: "/discussions/depression-therapy-faith-005",
    tags: ["Depression", "Mental Health", "Therapy"],
    hearts: 2341,
  },
  {
    type: "Story",
    typeColor: "#F59E0B",
    icon: "❤️",
    title: "Widowed at 28 with Three Children. How Faith Became My Only Floor.",
    excerpt: "When my husband Emmanuel died in a road accident, I had three children under five and no job. What happened next I can only describe as divine provision.",
    meta: "Amara Osei · Accra, Ghana · 8 min read",
    href: "/stories/amara-osei-widowed-at-28",
    tags: ["Grief", "Faith", "Ghana"],
    hearts: 3241,
  },
];

const DEFAULT_RECENT = ["Philippians 4:13", "prayer for anxiety", "C.S. Lewis Mere Christianity"];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try { const s = localStorage.getItem("vine_search_recent"); return s ? JSON.parse(s) : DEFAULT_RECENT; } catch { return DEFAULT_RECENT; }
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const submitSearch = (q: string) => {
    if (!q.trim()) return;
    setRecentSearches((prev) => {
      const updated = [q, ...prev.filter((r) => r !== q)].slice(0, 8);
      try { localStorage.setItem("vine_search_recent", JSON.stringify(updated)); } catch {}
      return updated;
    });
  };

  const allResultsCombined = [...allResults, ...allResultsExtra];
  const filtered = allResultsCombined.filter((r) => {
    const matchCat = activeCategory === "All" || r.type === activeCategory || (activeCategory === "Articles" && r.type === "Article") || (activeCategory === "Discussions" && r.type === "Discussion") || (activeCategory === "Scripture" && r.type === "Scripture") || (activeCategory === "Stories" && r.type === "Story") || (activeCategory === "Videos" && r.type === "Video") || (activeCategory === "Groups" && r.type === "Group") || (activeCategory === "People" && r.type === "People");
    const matchQuery = query === "" || r.title.toLowerCase().includes(query.toLowerCase()) || r.excerpt.toLowerCase().includes(query.toLowerCase()) || r.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
    return matchCat && matchQuery;
  });

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Search Header */}
        <div
          className="py-12 px-4"
          style={{ background: "linear-gradient(180deg, rgba(0,255,136,0.04) 0%, transparent 100%)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color: "#00FF88" }}>Search Vine</p>
            <div className="relative">
              <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2" style={{ color: "#6A6A88" }} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") submitSearch(query); }}
                placeholder="Search articles, scripture, discussions, people..."
                className="w-full pl-14 pr-12 py-4 rounded-2xl text-base outline-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(0,255,136,0.2)",
                  color: "#F2F2F8",
                  fontSize: "1rem",
                }}
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: "#6A6A88" }}>
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Recent Searches */}
            {query === "" && (
              <div className="flex items-center gap-2 mt-4 flex-wrap">
                <span className="text-xs" style={{ color: "#4A4A68" }}>Recent:</span>
                {recentSearches.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setQuery(s); submitSearch(s); }}
                    className="flex items-center gap-1 text-xs px-3 py-1 rounded-full transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#8A8AA8" }}
                  >
                    <Clock size={10} /> {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-24">
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#4A4A68" }}>Filter by type</p>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.label}
                      onClick={() => setActiveCategory(cat.label)}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-left transition-all"
                      style={{
                        background: activeCategory === cat.label ? `${cat.color}15` : "transparent",
                        color: activeCategory === cat.label ? cat.color : "#6A6A88",
                        border: `1px solid ${activeCategory === cat.label ? `${cat.color}30` : "transparent"}`,
                      }}
                    >
                      <span>{cat.icon}</span> {cat.label}
                    </button>
                  ))}
                </div>

                {/* Trending */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#4A4A68" }}>
                    <Flame size={10} className="inline mr-1" style={{ color: "#EF4444" }} />Trending
                  </p>
                  <div className="space-y-2">
                    {trending.slice(0, 7).map((t, i) => (
                      <button
                        key={t}
                        onClick={() => setQuery(t)}
                        className="flex items-center gap-2 text-xs w-full text-left group"
                        style={{ color: "#6A6A88" }}
                      >
                        <span className="font-mono text-xs w-4" style={{ color: "#4A4A68" }}>{i + 1}</span>
                        <span className="group-hover:text-[#00FF88] transition-colors">{t}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Results */}
            <div className="flex-1 min-w-0">
              {/* Category pills (mobile) */}
              <div className="flex gap-2 flex-wrap mb-6 lg:hidden">
                {categories.map((cat) => (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(cat.label)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: activeCategory === cat.label ? "#00FF88" : "rgba(255,255,255,0.04)",
                      color: activeCategory === cat.label ? "#000" : "#6A6A88",
                      border: `1px solid ${activeCategory === cat.label ? "#00FF88" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    {cat.icon} {cat.label}
                  </button>
                ))}
              </div>

              {query !== "" && (
                <p className="text-sm mb-5" style={{ color: "#4A4A68" }}>
                  {filtered.length} result{filtered.length !== 1 ? "s" : ""} for <strong style={{ color: "#F2F2F8" }}>&ldquo;{query}&rdquo;</strong>
                </p>
              )}

              {query === "" && (
                <div className="mb-8">
                  <h2 className="text-lg font-black mb-4" style={{ color: "#F2F2F8" }}>Trending on Vine</h2>
                </div>
              )}

              <div className="space-y-3">
                {filtered.map((r, i) => (
                  <a
                    key={i}
                    href={r.href}
                    className="flex items-start gap-4 p-5 rounded-2xl transition-all group"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", textDecoration: "none" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,255,136,0.2)";
                      e.currentTarget.style.background = "rgba(0,255,136,0.03)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    <span className="text-2xl shrink-0 mt-0.5">{r.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${r.typeColor}15`, color: r.typeColor }}>
                          {r.type}
                        </span>
                        {r.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.04)", color: "#6A6A88" }}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-black text-base mb-1 group-hover:text-[#00FF88] transition-colors" style={{ color: "#F2F2F8" }}>
                        {r.title}
                      </h3>
                      <p className="text-sm mb-2 line-clamp-2" style={{ color: "#6A6A88" }}>{r.excerpt}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs" style={{ color: "#4A4A68" }}>{r.meta}</span>
                        {r.hearts > 0 && (
                          <span className="flex items-center gap-1 text-xs" style={{ color: "#4A4A68" }}>
                            <Heart size={10} style={{ color: "#EC4899" }} /> {r.hearts.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronRight size={16} className="shrink-0 mt-1" style={{ color: "#4A4A68" }} />
                  </a>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-5xl mb-4">🔍</p>
                  <p className="font-black text-xl mb-2" style={{ color: "#F2F2F8" }}>No results found</p>
                  <p className="text-sm mb-6" style={{ color: "#6A6A88" }}>Try different keywords or browse by category</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {trending.slice(0, 5).map((t) => (
                      <button
                        key={t}
                        onClick={() => setQuery(t)}
                        className="px-4 py-2 rounded-xl text-sm"
                        style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.15)", color: "#00FF88" }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
