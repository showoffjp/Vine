"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BookOpen,
  TrendingUp,
  Clock,
  Eye,
  MessageSquare,
  Heart,
  ChevronRight,
  Bookmark,
  Share2,
  Flame,
  Star,
  Filter,
  Rss,
} from "lucide-react";


const featuredPost = {
  slug: "why-the-resurrection-changes-everything",
  category: "Theology",
  categoryColor: "#6B4FBB",
  title: "Why the Resurrection Changes Everything — Not Just After Death",
  excerpt:
    "Paul's declaration in 1 Corinthians 15 isn't a footnote to Christianity — it's the entire foundation. Here's why Jesus rising from the dead rewires how we live right now, not just what happens when we die.",
  author: "Dr. Marcus Webb",
  role: "Professor of Biblical Studies",
  date: "May 24, 2026",
  readTime: "8 min read",
  views: "24.3k",
  comments: 142,
  tags: ["Resurrection", "Theology", "Easter"],
  gradient: "linear-gradient(135deg, #1a0533 0%, #07070F 100%)",
};

const categories = [
  { name: "All", count: 1024, active: true },
  { name: "Theology", count: 234, active: false },
  { name: "Life & Faith", count: 198, active: false },
  { name: "Apologetics", count: 87, active: false },
  { name: "Culture", count: 156, active: false },
  { name: "Leadership", count: 112, active: false },
  { name: "Family", count: 89, active: false },
  { name: "Work & Faith", count: 74, active: false },
  { name: "Devotional", count: 58, active: false },
];

const posts = [
  {
    slug: "prayer-that-works",
    category: "Life & Faith",
    categoryColor: "#00FF88",
    title: "Prayer That Actually Works: Moving Beyond the Shopping List",
    excerpt:
      "Most Christians pray like they're placing an order. The ACTS framework and contemplative prayer tradition offer something richer — a conversation, not a transaction.",
    author: "Bishop Emmanuel Adeyemi",
    date: "May 20, 2026",
    readTime: "7 min read",
    views: "29.4k",
    comments: 156,
    saved: false,
    image: "🙏",
    tags: ["Prayer", "Spiritual Disciplines", "Devotional"],
  },
  {
    slug: "ai-chatgpt-church",
    category: "Culture",
    categoryColor: "#3B82F6",
    title: "AI, ChatGPT, and the Church: A Faithful Reckoning",
    excerpt:
      "Artificial intelligence isn't going away. The question isn't whether Christians should engage it — it's how. Three frameworks for thinking about AI through a biblical lens.",
    author: "James Okafor",
    date: "May 22, 2026",
    readTime: "9 min read",
    views: "32.1k",
    comments: 217,
    saved: true,
    image: "🤖",
    tags: ["Technology", "Ethics", "Church"],
  },
  {
    slug: "digital-sabbath",
    category: "Life & Faith",
    categoryColor: "#00FF88",
    title: "The Digital Sabbath: How to Rest in a Hyper-Connected World",
    excerpt:
      "Modern Christianity moves fast. But the richest seasons of spiritual growth come from deliberately slowing down — and shutting off. Here's how a 24-hour phone fast changed everything.",
    author: "Rachel Kim",
    date: "May 21, 2026",
    readTime: "6 min read",
    views: "41.2k",
    comments: 389,
    saved: false,
    image: "🌿",
    tags: ["Sabbath", "Tech", "Rest"],
  },
  {
    slug: "problem-of-evil",
    category: "Apologetics",
    categoryColor: "#EF4444",
    title: "The Problem of Evil: Why Suffering Doesn't Disprove God",
    excerpt:
      "Epicurus posed the challenge 2,300 years ago. Alvin Plantinga answered it in the 20th century. Here's why the logical problem of evil fails — and what the pastoral problem demands.",
    author: "Dr. Priya Singh",
    date: "May 23, 2026",
    readTime: "10 min read",
    views: "18.7k",
    comments: 203,
    saved: false,
    image: "📜",
    tags: ["Theodicy", "Suffering", "Apologetics"],
  },
  {
    slug: "servant-leadership-jesus",
    category: "Leadership",
    categoryColor: "#10B981",
    title: "Servant Leadership Isn't Weak — Jesus Proved That",
    excerpt:
      "We've confused servant leadership with spineless management. The washing of feet wasn't a moment of vulnerability — it was a radical act of power exercised with love.",
    author: "Pastor Kwame Asante",
    date: "May 19, 2026",
    readTime: "7 min read",
    views: "14.2k",
    comments: 63,
    saved: false,
    image: "🙌",
    tags: ["Leadership", "Discipleship"],
  },
  {
    slug: "psalms-permission-to-lament",
    category: "Devotional",
    categoryColor: "#EC4899",
    title: "When the Psalms Feel More Real Than Your Sunday Morning",
    excerpt:
      "The Psalms give us permission to show up to God exactly as we are — broken, angry, confused, and desperate. That's not spiritual weakness. That's biblical honesty.",
    author: "Lydia Mbeki",
    date: "May 18, 2026",
    readTime: "5 min read",
    views: "16.4k",
    comments: 91,
    saved: true,
    image: "🕊️",
    tags: ["Psalms", "Devotional", "Lament"],
  },
  {
    slug: "marriage-covenant-not-contract",
    category: "Relationships",
    categoryColor: "#EC4899",
    title: "Marriage Is a Covenant, Not a Contract — Why the Difference Changes Everything",
    excerpt:
      "Contracts have exit clauses. Covenants don't. Understanding this distinction transforms how Christians approach marriage, conflict, and divorce.",
    author: "Dr. Christopher & Lydia Mensah",
    date: "May 20, 2026",
    readTime: "7 min read",
    views: "41.2k",
    comments: 318,
    saved: false,
    image: "💍",
    tags: ["Marriage", "Covenant", "Relationships"],
  },
  {
    slug: "fasting-spiritual-discipline",
    category: "Devotional",
    categoryColor: "#F59E0B",
    title: "Why Jesus Assumed You Would Fast — And What We've Lost by Stopping",
    excerpt:
      "Jesus didn't say 'if you fast.' He said 'when you fast.' The spiritual discipline that the modern Church has nearly abandoned may be its most powerful tool.",
    author: "Rev. Josephine Kamau",
    date: "May 19, 2026",
    readTime: "8 min read",
    views: "15.9k",
    comments: 124,
    saved: false,
    image: "✨",
    tags: ["Fasting", "Spiritual Disciplines", "Prayer"],
  },
  {
    slug: "deconstruction-reconstruction",
    category: "Faith & Culture",
    categoryColor: "#6B4FBB",
    title: "Deconstruction Isn't the Enemy — Reconstruction Is the Goal",
    excerpt:
      "Millions of Christians are walking away from inherited faith. But deconstruction, done right, can be the beginning of a deeper and more honest relationship with God.",
    author: "Lydia Böhm",
    date: "May 18, 2026",
    readTime: "11 min read",
    views: "53.4k",
    comments: 891,
    saved: false,
    image: "🔍",
    tags: ["Deconstruction", "Faith", "Gen Z"],
  },
  {
    slug: "biblical-finances-stewardship",
    category: "Life & Faith",
    categoryColor: "#10B981",
    title: "God Talks About Money More Than Heaven — Are You Listening?",
    excerpt:
      "Jesus spoke about money more than any other single topic. Here's what the Bible actually teaches about stewardship, generosity, and wealth — without the prosperity gospel distortions.",
    author: "Pastor Emmanuel Nkemdirim",
    date: "May 17, 2026",
    readTime: "9 min read",
    views: "28.8k",
    comments: 247,
    saved: false,
    image: "💰",
    tags: ["Finance", "Stewardship", "Generosity"],
  },
  {
    slug: "when-marriage-is-hard",
    category: "Family",
    categoryColor: "#EC4899",
    title: "When Marriage Is Hard: A Theology of the Long Haul",
    excerpt:
      "The Instagram version of Christian marriage doesn't survive contact with reality. Here's what the Bible actually says about staying through the difficult seasons — and why it's worth it.",
    author: "Dr. Naomi Park",
    date: "May 20, 2026",
    readTime: "9 min read",
    views: "18.7k",
    comments: 203,
    saved: false,
    image: "💍",
    tags: ["Marriage", "Relationships", "Commitment"],
  },
  {
    slug: "raising-faith-filled-children",
    category: "Family",
    categoryColor: "#10B981",
    title: "Raising Faith-Filled Children in a Post-Christian World",
    excerpt:
      "Research shows the most powerful faith formation doesn't happen at church. It happens at 6:30am around a cereal bowl. A practical guide for Christian parents.",
    author: "Dr. Sarah Kimani",
    date: "May 18, 2026",
    readTime: "10 min read",
    views: "31.4k",
    comments: 287,
    saved: false,
    image: "👨‍👩‍👧‍👦",
    tags: ["Parenting", "Faith Formation", "Children"],
  },
  {
    slug: "theology-of-monday",
    category: "Work & Faith",
    categoryColor: "#00FF88",
    title: "The Theology of Monday: Why Your Work Is Holy Ground",
    excerpt:
      "We've created a sacred/secular split that Jesus never intended. A theological case for treating your job — any job — as a calling from God.",
    author: "Rev. Marcus Webb",
    date: "May 22, 2026",
    readTime: "8 min read",
    views: "24.1k",
    comments: 193,
    saved: false,
    image: "💼",
    tags: ["Work", "Calling", "Vocation"],
  },
  {
    slug: "biblical-ambition",
    category: "Work & Faith",
    categoryColor: "#F59E0B",
    title: "Is Christian Ambition an Oxymoron? What Scripture Actually Says",
    excerpt:
      "Many believers suppress their drive, assuming ambition is worldly. But Joseph, Nehemiah, Paul — the Bible's heroes were relentlessly ambitious. The question is what you're ambitious for.",
    author: "Dr. Grace Mbeki",
    date: "May 16, 2026",
    readTime: "9 min read",
    views: "19.8k",
    comments: 241,
    saved: false,
    image: "🎯",
    tags: ["Ambition", "Leadership", "Calling"],
  },
  {
    slug: "nt-wright-resurrection",
    category: "Theology",
    categoryColor: "#6B4FBB",
    title: "N.T. Wright's Resurrection Case — A Summary for the Rest of Us",
    excerpt: "The world's foremost New Testament scholar has spent decades building the most comprehensive historical case for the bodily resurrection. Here's what he found.",
    author: "Dr. Marcus Webb",
    date: "April 18, 2026",
    readTime: "7 min read",
    views: "18.7k",
    comments: 94,
    saved: false,
    image: "📜",
    tags: ["Resurrection", "N.T. Wright", "Historical Jesus"],
  },
  {
    slug: "empty-tomb-evidence",
    category: "Apologetics",
    categoryColor: "#EF4444",
    title: "Historical Evidence for the Empty Tomb: What Scholars Actually Agree On",
    excerpt: "Skeptics and believers agree on more than you'd think. The facts about the first Easter that nearly every serious scholar accepts — regardless of their conclusions.",
    author: "Dr. Marcus Webb",
    date: "April 10, 2026",
    readTime: "12 min read",
    views: "22.4k",
    comments: 131,
    saved: false,
    image: "⛪",
    tags: ["Resurrection", "Empty Tomb", "Apologetics"],
  },
  {
    slug: "ai-have-soul",
    category: "Apologetics",
    categoryColor: "#EF4444",
    title: "Can an AI Have a Soul? A Biblical Anthropology in the Age of ChatGPT",
    excerpt: "As machines grow more sophisticated, the question becomes harder to dismiss. What makes humans uniquely human — and what does Christian theology say about mind, soul, and consciousness?",
    author: "James Okafor",
    date: "May 1, 2026",
    readTime: "8 min read",
    views: "29.3k",
    comments: 183,
    saved: false,
    image: "🤖",
    tags: ["AI", "Soul", "Anthropology"],
  },
  {
    slug: "faith-and-doubt",
    category: "Life & Faith",
    categoryColor: "#00FF88",
    title: "How Do You Handle Doubt Without Losing Faith? A Pastor's Guide",
    excerpt: "Doubt isn't the opposite of faith — it's part of faith. Here's how to engage your questions honestly without letting them destroy your foundation.",
    author: "Rev. Sarah Okonkwo",
    date: "March 28, 2026",
    readTime: "7 min read",
    views: "31.6k",
    comments: 224,
    saved: false,
    image: "🤔",
    tags: ["Doubt", "Faith", "Deconstruction"],
  },
  {
    slug: "faith-at-work",
    category: "Work & Faith",
    categoryColor: "#3B82F6",
    title: "How to Talk About Faith at Work Without Being Weird",
    excerpt:
      "Most Christians either hide their faith completely at work or over-share in ways that make colleagues uncomfortable. There's a better, more human way.",
    author: "James Okafor",
    date: "May 10, 2026",
    readTime: "7 min read",
    views: "28.3k",
    comments: 318,
    saved: false,
    image: "🤝",
    tags: ["Work", "Witness", "Evangelism"],
  },
];

const trending = [
  { rank: 1, title: "Why Young Christians Are Leaving Church (And How to Stop It)", views: "58k" },
  { rank: 2, title: "The 5 Spiritual Disciplines That Actually Stick", views: "43k" },
  { rank: 3, title: "Biblical Dating in a Swipe Culture", views: "37k" },
  { rank: 4, title: "Is Christian Nationalism Biblical? A Fair Look", views: "29k" },
  { rank: 5, title: "How to Forgive Someone Who Isn't Sorry", views: "25k" },
];

const editors = [
  { name: "Dr. Marcus Webb", role: "Theology", avatar: "MW", color: "#6B4FBB" },
  { name: "Rev. Amara Osei", role: "Devotional", avatar: "AO", color: "#00FF88" },
  { name: "James Okafor", role: "Culture", avatar: "JO", color: "#3B82F6" },
  { name: "Pastor Kwame Asante", role: "Leadership", avatar: "KA", color: "#10B981" },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [savedPosts, setSavedPosts] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_blog_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [followedEditors, setFollowedEditors] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_blog_editors"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  useEffect(() => {
    try { localStorage.setItem("vine_blog_saved", JSON.stringify([...savedPosts])); } catch {}
  }, [savedPosts]);
  useEffect(() => {
    try { localStorage.setItem("vine_blog_editors", JSON.stringify([...followedEditors])); } catch {}
  }, [followedEditors]);

  const toggleSave = (i: number) => setSavedPosts(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });
  const toggleFollow = (name: string) => setFollowedEditors(prev => { const n = new Set(prev); n.has(name) ? n.delete(name) : n.add(name); return n; });
  const handleSubscribe = () => {
    if (!newsletterEmail.trim()) return;
    setNewsletterDone(true);
    setNewsletterEmail("");
  };

  const filteredPosts = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #00FF88 0%, #6B4FBB 100%)" }}
            >
              <BookOpen size={20} className="text-black" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>
                Vine Blog
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <Rss size={12} style={{ color: "#4A4A68" }} />
                <span className="text-xs" style={{ color: "#4A4A68" }}>
                  New posts every weekday
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: "#F2F2F8" }}>
            Faith that thinks.
            <br />
            <span style={{ background: "linear-gradient(135deg, #00FF88, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Truth that moves.
            </span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#6A6A88" }}>
            Theology, culture, life application, and editorial pieces written for Christians navigating the modern world.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Featured Post */}
              <div
                className="rounded-2xl p-8 relative overflow-hidden"
                style={{
                  background: featuredPost.gradient,
                  border: "1px solid rgba(107,79,187,0.3)",
                }}
              >
                <div className="absolute inset-0 opacity-10"
                  style={{ background: "radial-gradient(circle at 70% 50%, #6B4FBB 0%, transparent 60%)" }} />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{
                        background: `${featuredPost.categoryColor}20`,
                        color: featuredPost.categoryColor,
                        border: `1px solid ${featuredPost.categoryColor}40`,
                      }}
                    >
                      {featuredPost.category}
                    </span>
                    <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: "rgba(0,255,136,0.1)", color: "#00FF88" }}>
                      Featured
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black mb-4 leading-tight" style={{ color: "#F2F2F8" }}>
                    {featuredPost.title}
                  </h2>
                  <p className="text-base mb-6 leading-relaxed" style={{ color: "#A0A0C0" }}>
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: "linear-gradient(135deg, #6B4FBB, #00FF88)", color: "#000" }}>
                        MW
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "#E0E0F0" }}>{featuredPost.author}</p>
                        <p className="text-xs" style={{ color: "#6A6A88" }}>{featuredPost.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                      <span className="text-xs flex items-center gap-1" style={{ color: "#6A6A88" }}>
                        <Clock size={12} /> {featuredPost.readTime}
                      </span>
                      <span className="text-xs flex items-center gap-1" style={{ color: "#6A6A88" }}>
                        <Eye size={12} /> {featuredPost.views}
                      </span>
                      <span className="text-xs flex items-center gap-1" style={{ color: "#6A6A88" }}>
                        <MessageSquare size={12} /> {featuredPost.comments}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`/blog/${featuredPost.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold hover:underline"
                    style={{ color: "#00FF88" }}
                  >
                    Read Article <ChevronRight size={16} />
                  </a>
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => {
                  const active = activeCategory === cat.name;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                      className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                      style={{
                        background: active ? "#00FF88" : "rgba(255,255,255,0.04)",
                        color: active ? "#000" : "#6A6A88",
                        border: `1px solid ${active ? "#00FF88" : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      {cat.name}
                      <span className="ml-1.5 text-xs opacity-70">({cat.count})</span>
                    </button>
                  );
                })}
              </div>

              {/* Post Grid */}
              <div className="space-y-4">
                {filteredPosts.length === 0 && (
                  <p className="text-center py-8 text-sm" style={{ color: "#8A8AA8" }}>No posts in this category yet.</p>
                )}
                {filteredPosts.map((post, i) => (
                  <a
                    key={i}
                    href={post.slug ? `/blog/${post.slug}` : undefined}
                    className="group block rounded-xl p-5 flex gap-5 cursor-pointer transition-all"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor = "rgba(0,255,136,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      {post.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{
                            background: `${post.categoryColor}15`,
                            color: post.categoryColor,
                          }}
                        >
                          {post.category}
                        </span>
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleSave(i); }}
                          className="ml-auto p-1 rounded transition hover:bg-[#1E1E32]"
                          style={{ color: savedPosts.has(i) || post.saved ? "#00FF88" : "#4A4A68" }}
                        >
                          <Bookmark size={12} fill={savedPosts.has(i) || post.saved ? "#00FF88" : "none"} />
                        </button>
                      </div>
                      <h3 className="font-bold text-base mb-1.5 leading-snug group-hover:text-[#00FF88] transition-colors" style={{ color: "#F2F2F8" }}>
                        {post.title}
                      </h3>
                      <p className="text-sm mb-3 line-clamp-2 leading-relaxed" style={{ color: "#6A6A88" }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="text-xs font-semibold" style={{ color: "#8A8AA8" }}>
                          {post.author}
                        </span>
                        <span className="text-xs" style={{ color: "#4A4A68" }}>
                          {post.date}
                        </span>
                        <span className="text-xs flex items-center gap-1" style={{ color: "#4A4A68" }}>
                          <Clock size={11} /> {post.readTime}
                        </span>
                        <span className="text-xs flex items-center gap-1 ml-auto" style={{ color: "#4A4A68" }}>
                          <Eye size={11} /> {post.views}
                        </span>
                        <span className="text-xs flex items-center gap-1" style={{ color: "#4A4A68" }}>
                          <MessageSquare size={11} /> {post.comments}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Load More */}
              <button
                className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(0,255,136,0.12)",
                  color: "#8A8AA8",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,255,136,0.06)";
                  e.currentTarget.style.color = "#00FF88";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.color = "#8A8AA8";
                }}
              >
                Load More Articles
              </button>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <Flame size={16} style={{ color: "#00FF88" }} />
                  <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>
                    Trending
                  </h3>
                </div>
                <div className="space-y-4">
                  {trending.map((item) => (
                    <div key={item.rank} className="flex gap-3 group cursor-pointer">
                      <span className="text-2xl font-black w-6 shrink-0" style={{ color: "rgba(0,255,136,0.2)" }}>
                        {item.rank}
                      </span>
                      <div>
                        <p
                          className="text-sm font-semibold leading-snug group-hover:text-[#00FF88] transition-colors"
                          style={{ color: "#C0C0D8" }}
                        >
                          {item.title}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <Eye size={11} style={{ color: "#4A4A68" }} />
                          <span className="text-xs" style={{ color: "#4A4A68" }}>{item.views} views</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Writers */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <Star size={16} style={{ color: "#00FF88" }} />
                  <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>
                    Featured Writers
                  </h3>
                </div>
                <div className="space-y-3">
                  {editors.map((ed) => (
                    <div key={ed.name} className="flex items-center gap-3 cursor-pointer group">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={{ background: `${ed.color}30`, color: ed.color, border: `1px solid ${ed.color}40` }}
                      >
                        {ed.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-semibold group-hover:text-[#00FF88] transition-colors" style={{ color: "#E0E0F0" }}>
                          {ed.name}
                        </p>
                        <p className="text-xs" style={{ color: "#6A6A88" }}>{ed.role}</p>
                      </div>
                      <button
                        onClick={() => toggleFollow(ed.name)}
                        className="ml-auto text-xs px-3 py-1 rounded-full font-semibold transition-all"
                        style={{
                          background: followedEditors.has(ed.name) ? "#00FF88" : "rgba(0,255,136,0.1)",
                          color: followedEditors.has(ed.name) ? "#07070F" : "#00FF88",
                          border: "1px solid rgba(0,255,136,0.2)",
                        }}
                      >
                        {followedEditors.has(ed.name) ? "✓ Following" : "Follow"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(107,79,187,0.06) 100%)",
                  border: "1px solid rgba(0,255,136,0.12)",
                }}
              >
                <TrendingUp size={24} style={{ color: "#00FF88" }} className="mb-3" />
                <h3 className="font-bold mb-2" style={{ color: "#F2F2F8" }}>
                  Weekly Digest
                </h3>
                <p className="text-sm mb-4" style={{ color: "#6A6A88" }}>
                  The 5 best articles from the week, curated every Sunday morning.
                </p>
                {newsletterDone ? (
                  <div className="py-3 text-center">
                    <p className="font-bold text-sm" style={{ color: "#00FF88" }}>✓ You're subscribed!</p>
                    <p className="text-xs mt-1" style={{ color: "#6A6A88" }}>First digest arrives Sunday morning.</p>
                  </div>
                ) : (
                  <>
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg text-sm mb-3 outline-none"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#F2F2F8",
                      }}
                    />
                    <button
                      onClick={handleSubscribe}
                      className="w-full py-2.5 rounded-lg text-sm font-bold text-black"
                      style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
                    >
                      Subscribe Free
                    </button>
                  </>
                )}
                <p className="text-xs mt-2 text-center" style={{ color: "#4A4A68" }}>
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
