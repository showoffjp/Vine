"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search,
  Star,
  Bookmark,
  Share2,
  Filter,
  ChevronRight,
  X,
  Clock,
  Eye,
  FileText,
  Video,
  Mic,
  Book,
  Map,
  Image,
  TrendingUp,
  CheckSquare,
  Square,
} from "lucide-react";


const categories = [
  { name: "All", icon: Filter, count: 2847 },
  { name: "Articles", icon: FileText, count: 1124 },
  { name: "Video", icon: Video, count: 487 },
  { name: "Audio", icon: Mic, count: 312 },
  { name: "eBooks", icon: Book, count: 203 },
  { name: "Study Guides", icon: Map, count: 418 },
  { name: "Infographics", icon: Image, count: 303 },
];

const topics = [
  "Faith Basics", "Mental Health", "Relationships", "Finance",
  "Parenting", "Leadership", "Theology", "Apologetics", "Worship", "Life & Productivity",
];

const difficulties = ["Beginner", "Intermediate", "Deep Dive"];
const lengths = ["Quick Read (<5 min)", "Medium (5–15 min)", "Long Form (15+ min)"];
const sorts = ["Most Popular", "Newest", "Highest Rated", "Most Saved"];

const featuredResource = {
  type: "eBook",
  title: "The Anxious Christian: Can God Use Your Anxiety for Good?",
  author: "Rhett Smith, LMFT",
  description:
    "A groundbreaking resource that reframes anxiety as a tool God can use to draw us closer to Him. With practical exercises, Scripture, and clinical insight, this guide has helped over 200,000 Christians find peace without dismissing their struggle.",
  rating: 4.9,
  reviews: 4821,
  saves: 12400,
  readTime: "3-4 hour read",
  color: "#6B4FBB",
};

const resources = [
  {
    type: "Article",
    typeColor: "#4FBBAA",
    title: "7 Biblical Truths About Depression That Your Church Probably Never Taught You",
    excerpt: "Depression is not a sign of spiritual weakness. Scripture has more to say about mental darkness than most sermons ever acknowledge...",
    author: "Sarah Chen",
    time: "8 min read",
    rating: 4.8,
    saves: 3241,
    topic: "Mental Health",
    topicColor: "#4FBBAA",
    href: "/discussions/depression-therapy-faith-005",
  },
  {
    type: "Video",
    typeColor: "#BB4F7A",
    title: "How to Read the Bible in Context (Without a Theology Degree)",
    excerpt: "Most Christians misinterpret Scripture not from bad intentions but from missing historical context. This video changes that...",
    author: "The Bible Project",
    time: "22 min watch",
    rating: 4.9,
    saves: 8109,
    topic: "Faith Basics",
    topicColor: "#00FF88",
    href: "/video",
  },
  {
    type: "Audio",
    typeColor: "#00FF88",
    title: "Financially Faithful: Managing Money God's Way",
    excerpt: "A podcast series covering tithing, budgeting, debt freedom, and investing from a biblically grounded perspective...",
    author: "Marcus & Joy Williams",
    time: "45 min listen",
    rating: 4.7,
    saves: 2876,
    topic: "Finance",
    topicColor: "#4F8FBB",
    href: "/blog/biblical-finances-stewardship",
  },
  {
    type: "Study Guide",
    typeColor: "#6B4FBB",
    title: "The Sermon on the Mount: 30-Day Deep Dive",
    excerpt: "Verse-by-verse study of Matthew 5–7 with daily prompts, reflection questions, and application challenges...",
    author: "Vine Theology Team",
    time: "30-day study",
    rating: 4.9,
    saves: 6543,
    topic: "Theology",
    topicColor: "#6B4FBB",
    href: "/reading-plan",
  },
  {
    type: "Article",
    typeColor: "#4FBBAA",
    title: "Setting Godly Boundaries in Relationships — A Practical Framework",
    excerpt: "Boundaries aren't unloving. This guide walks through how Jesus himself maintained boundaries and how you can do the same...",
    author: "Dr. Henry Cloud",
    time: "11 min read",
    rating: 4.8,
    saves: 4312,
    topic: "Relationships",
    topicColor: "#BB4F7A",
    href: "/relationships",
  },
  {
    type: "Video",
    typeColor: "#BB4F7A",
    title: "The Historical Evidence for the Resurrection",
    excerpt: "A rigorous look at the historical case for the resurrection of Jesus, designed to equip believers in honest conversations...",
    author: "Dr. Gary Habermas",
    time: "37 min watch",
    rating: 4.9,
    saves: 7201,
    topic: "Apologetics",
    topicColor: "#BB7A4F",
    href: "/blog/why-the-resurrection-changes-everything",
  },
  {
    type: "Article",
    typeColor: "#4FBBAA",
    title: "Raising Kids Who Actually Keep Their Faith: What the Research Shows",
    excerpt: "Studies reveal what actually predicts faith retention into adulthood — and it's not Sunday school attendance or church camp...",
    author: "Fuller Youth Institute",
    time: "14 min read",
    rating: 4.7,
    saves: 3890,
    topic: "Parenting",
    topicColor: "#BB4F7A",
    href: "/parenting",
  },
  {
    type: "eBook",
    typeColor: "#4F8FBB",
    title: "Margin: Restoring Emotional, Physical, Financial, and Time Reserves",
    excerpt: "Why the most productive people in ministry burn out the fastest — and how to create sustainable rhythms of life and work...",
    author: "Dr. Richard Swenson",
    time: "2-3 hour read",
    rating: 4.6,
    saves: 2134,
    topic: "Life & Productivity",
    topicColor: "#4FBBAA",
    href: "/work-leadership",
  },
  {
    type: "Study Guide",
    typeColor: "#6B4FBB",
    title: "Hearing God's Voice: A Beginner's Guide to Prayer and Listening",
    excerpt: "A 21-day guided journey to develop a two-way conversation with God, for new believers and seasoned Christians alike...",
    author: "Priscilla Shirer",
    time: "21-day study",
    rating: 4.8,
    saves: 5670,
    topic: "Faith Basics",
    topicColor: "#00FF88",
    href: "/prayer",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={11}
          fill={s <= Math.floor(rating) ? "#00FF88" : "none"}
          style={{ color: s <= Math.floor(rating) ? "#00FF88" : "#3A3A58" }}
        />
      ))}
      <span className="text-xs ml-1 font-semibold" style={{ color: "#00FF88" }}>
        {rating}
      </span>
    </div>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h4 className="text-[10px] font-black uppercase tracking-widest mb-2.5" style={{ color: "#00FF88" }}>
        {title}
      </h4>
      {children}
    </div>
  );
}

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [savedResources, setSavedResources] = useState<Set<number>>(new Set());
  const [featuredSaved, setFeaturedSaved] = useState(false);

  const toggleSave = (i: number) => setSavedResources(prev => {
    const next = new Set(prev);
    if (next.has(i)) next.delete(i); else next.add(i);
    return next;
  });

  const filteredResources = resources.filter(r => {
    const matchCat = selectedCategory === "All" || r.type === selectedCategory;
    const matchTopic = !selectedTopic || r.topic === selectedTopic;
    const matchSearch = !searchQuery || r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchTopic && matchSearch;
  });

  return (
    <div className="min-h-screen" style={{ background: "#07070F" }}>
      <Navbar />

      <main className="page-body pb-16">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#00FF88" }}>
                Resource Library
              </p>
              <h1 className="text-3xl sm:text-4xl font-black" style={{ color: "#F2F2F8" }}>
                Grow Your Faith
              </h1>
              <p className="mt-2 text-base" style={{ color: "#8A8AA8" }}>
                Curated articles, videos, podcasts, and study guides from trusted Christian voices.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#6A6A88" }} />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none w-64"
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    color: "#F2F2F8",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            {/* FILTER SIDEBAR */}
            <aside className="hidden lg:block w-60 flex-shrink-0">
              <div
                className="rounded-2xl p-5 sticky top-24"
                style={{ background: "#12121F", border: "1px solid #1E1E32" }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-bold" style={{ color: "#F2F2F8" }}>Filters</span>
                  <button className="text-xs font-semibold" style={{ color: "#00FF88" }}>
                    Clear all
                  </button>
                </div>

                {/* Category */}
                <FilterSection title="Category">
                  <div className="space-y-1">
                    {categories.map((cat) => {
                    const active = selectedCategory === cat.name;
                    return (
                      <button
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-all duration-150 hover:bg-[#18182A]"
                        style={{ background: active ? "rgba(0,255,136,0.08)" : "transparent" }}
                      >
                        {active ? (
                          <CheckSquare size={13} style={{ color: "#00FF88" }} />
                        ) : (
                          <Square size={13} style={{ color: "#4A4A68" }} />
                        )}
                        <span className="text-xs flex-1" style={{ color: active ? "#00FF88" : "#8A8AA8" }}>
                          {cat.name}
                        </span>
                        <span className="text-[10px]" style={{ color: "#4A4A68" }}>
                          {cat.count.toLocaleString()}
                        </span>
                      </button>
                    );
                  })}
                  </div>
                </FilterSection>

                {/* Topic */}
                <FilterSection title="Topic">
                  <div className="flex flex-wrap gap-1.5">
                    {topics.map((topic) => {
                      const active = selectedTopic === topic;
                      return (
                        <button
                          key={topic}
                          onClick={() => setSelectedTopic(active ? null : topic)}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all duration-150"
                          style={{
                            background: active ? "rgba(0,255,136,0.12)" : "rgba(255,255,255,0.04)",
                            border: active ? "1px solid rgba(0,255,136,0.3)" : "1px solid #1E1E32",
                            color: active ? "#00FF88" : "#6A6A88",
                          }}
                        >
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </FilterSection>

                {/* Difficulty */}
                <FilterSection title="Difficulty">
                  <div className="space-y-1">
                    {difficulties.map((d) => (
                      <button
                        key={d}
                        className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-left transition hover:bg-[#18182A]"
                      >
                        <Square size={13} style={{ color: "#4A4A68" }} />
                        <span className="text-xs" style={{ color: "#8A8AA8" }}>{d}</span>
                      </button>
                    ))}
                  </div>
                </FilterSection>

                {/* Length */}
                <FilterSection title="Length">
                  <div className="space-y-1">
                    {lengths.map((l) => (
                      <button
                        key={l}
                        className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-left transition hover:bg-[#18182A]"
                      >
                        <Square size={13} style={{ color: "#4A4A68" }} />
                        <span className="text-xs" style={{ color: "#8A8AA8" }}>{l}</span>
                      </button>
                    ))}
                  </div>
                </FilterSection>

                {/* Sort */}
                <FilterSection title="Sort By">
                  <div className="space-y-1">
                    {sorts.map((s, i) => (
                      <button
                        key={s}
                        className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-left transition hover:bg-[#18182A]"
                      >
                        {i === 0 ? (
                          <CheckSquare size={13} style={{ color: "#00FF88" }} />
                        ) : (
                          <Square size={13} style={{ color: "#4A4A68" }} />
                        )}
                        <span className="text-xs" style={{ color: i === 0 ? "#00FF88" : "#8A8AA8" }}>{s}</span>
                      </button>
                    ))}
                  </div>
                </FilterSection>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <div className="flex-1 min-w-0">
              {/* Results header + active filters */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-sm font-semibold" style={{ color: "#F2F2F8" }}>
                  Showing{" "}
                  <span style={{ color: "#00FF88" }}>{filteredResources.length}</span> resources
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  {selectedCategory !== "All" && (
                    <button
                      onClick={() => setSelectedCategory("All")}
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.2)", color: "#00FF88" }}
                    >
                      {selectedCategory} <X size={11} />
                    </button>
                  )}
                  {selectedTopic && (
                    <button
                      onClick={() => setSelectedTopic(null)}
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.2)", color: "#00FF88" }}
                    >
                      {selectedTopic} <X size={11} />
                    </button>
                  )}
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <TrendingUp size={14} style={{ color: "#6A6A88" }} />
                  <select
                    className="text-xs bg-transparent outline-none"
                    style={{ color: "#8A8AA8" }}
                  >
                    <option>Most Popular</option>
                    <option>Newest</option>
                    <option>Highest Rated</option>
                  </select>
                </div>
              </div>

              {/* Featured Resource */}
              <div
                className="rounded-2xl p-6 mb-6 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(107,79,187,0.18) 0%, rgba(0,255,136,0.08) 100%)",
                  border: "1px solid rgba(107,79,187,0.3)",
                }}
              >
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
                  style={{ background: featuredResource.color }}
                />
                <div className="relative flex flex-col sm:flex-row gap-6">
                  <div
                    className="w-full sm:w-40 h-40 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${featuredResource.color}40, ${featuredResource.color}20)`,
                      border: `1px solid ${featuredResource.color}30`,
                    }}
                  >
                    <Book size={48} style={{ color: featuredResource.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{
                          background: `${featuredResource.color}20`,
                          color: featuredResource.color,
                          border: `1px solid ${featuredResource.color}40`,
                        }}
                      >
                        ⭐ Featured · {featuredResource.type}
                      </span>
                    </div>
                    <h2 className="text-xl font-black mb-2 leading-snug" style={{ color: "#F2F2F8" }}>
                      {featuredResource.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#8A8AA8" }}>
                      {featuredResource.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <StarRating rating={featuredResource.rating} />
                      <span className="text-xs" style={{ color: "#6A6A88" }}>
                        {featuredResource.reviews.toLocaleString()} reviews
                      </span>
                      <span className="text-xs" style={{ color: "#6A6A88" }}>
                        <Bookmark size={11} className="inline mr-1" />
                        {(featuredResource.saves / 1000).toFixed(1)}k saves
                      </span>
                      <span className="text-xs" style={{ color: "#6A6A88" }}>
                        <Clock size={11} className="inline mr-1" />
                        {featuredResource.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <a href="/resources" className="btn-gold px-5 py-2.5 rounded-xl text-sm font-bold" style={{ textDecoration: "none" }}>
                        Read Now — Free
                      </a>
                      <button
                        onClick={() => setFeaturedSaved(!featuredSaved)}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-[#18182A]"
                        style={{ border: `1px solid ${featuredSaved ? "rgba(0,255,136,0.3)" : "#1E1E32"}`, color: featuredSaved ? "#00FF88" : "#8A8AA8" }}
                      >
                        <Bookmark size={14} fill={featuredSaved ? "#00FF88" : "none"} />
                        {featuredSaved ? "Saved!" : "Save"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resource Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
                {filteredResources.length === 0 && (
                  <div className="col-span-full text-center py-16">
                    <p style={{ color: "#8A8AA8" }}>No resources match your filters.</p>
                    <button onClick={() => { setSelectedCategory("All"); setSelectedTopic(null); setSearchQuery(""); }} className="mt-3 text-sm font-semibold" style={{ color: "#00FF88" }}>Clear all filters</button>
                  </div>
                )}
                {filteredResources.map((r, i) => (
                  <a
                    key={i}
                    href={r.href}
                    className="rounded-2xl p-4 flex flex-col cursor-pointer transition-all duration-200 hover:bg-[#18182A] group"
                    style={{ background: "#12121F", border: "1px solid #1E1E32", textDecoration: "none" }}
                  >
                    {/* Type + Topic */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{
                          background: `${r.typeColor}15`,
                          color: r.typeColor,
                          border: `1px solid ${r.typeColor}30`,
                        }}
                      >
                        {r.type}
                      </span>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: `${r.topicColor}10`, color: r.topicColor }}
                      >
                        {r.topic}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold leading-snug mb-2 flex-1 group-hover:text-[#00FF88] transition-colors" style={{ color: "#F2F2F8" }}>
                      {r.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-3 line-clamp-2" style={{ color: "#6A6A88" }}>
                      {r.excerpt}
                    </p>

                    {/* Author + time */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0"
                        style={{ background: `${r.typeColor}30`, color: r.typeColor }}
                      >
                        {r.author[0]}
                      </div>
                      <span className="text-xs" style={{ color: "#6A6A88" }}>
                        {r.author}
                      </span>
                      <span style={{ color: "#3A3A58" }}>·</span>
                      <Clock size={10} style={{ color: "#4A4A68" }} />
                      <span className="text-xs" style={{ color: "#6A6A88" }}>
                        {r.time}
                      </span>
                    </div>

                    {/* Rating + actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <StarRating rating={r.rating} />
                        <span className="text-[10px]" style={{ color: "#4A4A68" }}>
                          <Eye size={10} className="inline mr-0.5" />
                          {r.saves >= 1000 ? `${(r.saves / 1000).toFixed(1)}k` : r.saves}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleSave(i); }}
                          className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]"
                          style={{ color: savedResources.has(i) ? "#00FF88" : "#4A4A68" }}
                        >
                          <Bookmark size={13} fill={savedResources.has(i) ? "#00FF88" : "none"} />
                        </button>
                        <button
                          onClick={(e) => e.preventDefault()}
                          className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]"
                          style={{ color: "#4A4A68" }}
                        >
                          <Share2 size={13} />
                        </button>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-1">
                {[1, 2, 3, "...", 284].map((page, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 rounded-lg text-sm font-semibold transition-all duration-150"
                    style={{
                      background: page === 1 ? "rgba(0,255,136,0.15)" : "transparent",
                      border: page === 1 ? "1px solid rgba(0,255,136,0.3)" : "1px solid #1E1E32",
                      color: page === 1 ? "#00FF88" : page === "..." ? "#4A4A68" : "#8A8AA8",
                    }}
                  >
                    {page}
                  </button>
                ))}
                <button
                  className="flex items-center gap-1 px-3 h-9 rounded-lg text-sm font-semibold transition-all duration-150 hover:bg-[#18182A]"
                  style={{ border: "1px solid #1E1E32", color: "#8A8AA8" }}
                >
                  Next
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
