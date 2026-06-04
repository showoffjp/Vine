"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Heart, Plus, X, Flame, Search, Clock, Share2 } from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";

interface Testimony {
  id: string;
  author: string;
  flag: string;
  location: string;
  category: string;
  title: string;
  body: string;
  verse?: string;
  verseRef?: string;
  postedAt: string;
  likes: number;
  featured: boolean;
}

const CATEGORIES = ["All", "Healing", "Salvation", "Provision", "Restoration", "Protection", "Marriage", "Career", "Answered Prayer", "Freedom", "Community"];

const CATEGORY_COLORS: Record<string, string> = {
  Healing: "#EF4444",
  Salvation: "#3a7d56",
  Provision: "#F59E0B",
  Restoration: "#6B4FBB",
  Protection: "#3B82F6",
  Marriage: "#EC4899",
  Career: "#10B981",
  "Answered Prayer": "#3a7d56",
  Freedom: "#F97316",
  Community: "#8B5CF6",
  All: "#8A8AA8",
};

const seedTestimonies: Testimony[] = [
  {
    id: "t-001",
    author: "Grace Adeyemi",
    flag: "🇳🇬",
    location: "Lagos, Nigeria",
    category: "Healing",
    title: "God healed my father's terminal diagnosis",
    body: "Eight months ago, my father was given three months to live. Stage 4 liver cancer. We prayed every day — sometimes through tears, sometimes through rage, always through faith. Last week, his oncologist looked at his scans and said the words I'll never forget: 'I can't explain this medically.' Neither can we. But we know Who to thank.",
    verse: "He heals the brokenhearted and binds up their wounds.",
    verseRef: "Psalm 147:3",
    postedAt: "2 days ago",
    likes: 2847,
    featured: true,
  },
  {
    id: "t-002",
    author: "Marcus Thompson",
    flag: "🇺🇸",
    location: "Atlanta, GA",
    category: "Freedom",
    title: "18 months sober — Jesus is the reason",
    body: "I had my first drink at 14. By 32, I was losing everything. I tried AA three times. Nothing stuck. Someone invited me to a men's group at a church I'd never have walked into on my own. I gave my life to Christ on a Tuesday night in a gymnasium. That was 547 days ago. Not one drink since. Not because I'm strong — because Someone stronger moved in.",
    verse: "It is for freedom that Christ has set us free.",
    verseRef: "Galatians 5:1",
    postedAt: "3 days ago",
    likes: 1923,
    featured: true,
  },
  {
    id: "t-003",
    author: "Priya Sharma",
    flag: "🇮🇳",
    location: "Bangalore, India",
    category: "Salvation",
    title: "My mother came to faith at 68",
    body: "For 15 years I prayed for my mother — a devout Hindu, deeply skeptical of Christianity. Last Diwali, she asked me to read her some of the Bible I was reading. I read John 14. She was quiet for a long time. Then she said, 'Read it again.' Two weeks later, she prayed with me. Fifteen years of prayer, answered in a quiet evening on a sofa.",
    verse: "The Lord is not slow in keeping his promise... He is patient with you.",
    verseRef: "2 Peter 3:9",
    postedAt: "5 days ago",
    likes: 3421,
    featured: false,
  },
  {
    id: "t-004",
    author: "David & Sarah Kwan",
    flag: "🇸🇬",
    location: "Singapore",
    category: "Marriage",
    title: "On the edge of divorce — how God rebuilt our marriage",
    body: "Two years ago we had filed divorce papers. Fourteen years of marriage, three kids, and we were done. A mentor couple challenged us to do one thing: read Ephesians 5 together every morning for 30 days before making it final. By day 11, Sarah was crying. By day 20, I was. We tore up the papers. We've been to counseling, done the work, and today we're more in love than at 22.",
    verse: "Love bears all things, believes all things, hopes all things, endures all things.",
    verseRef: "1 Corinthians 13:7",
    postedAt: "1 week ago",
    likes: 4102,
    featured: true,
  },
  {
    id: "t-005",
    author: "Amara Osei",
    flag: "🇬🇭",
    location: "Kumasi, Ghana",
    category: "Provision",
    title: "God provided a home when the bank said no",
    body: "We were evicted from our apartment in January. Four of us, no savings, no backup plan. I prayed Philippians 4:19 out loud in the parking lot of the bank that had just denied our loan. Three days later, a church member I'd met once offered us her late mother's house — rent free — while we got back on our feet. The key was literally handed to us on a Thursday morning.",
    verse: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
    verseRef: "Philippians 4:19",
    postedAt: "1 week ago",
    likes: 2201,
    featured: false,
  },
  {
    id: "t-006",
    author: "Elias Johansson",
    flag: "🇸🇪",
    location: "Stockholm, Sweden",
    category: "Salvation",
    title: "Atheist professor becomes believer at 51",
    body: "I taught philosophy and comparative religion at university for 22 years. I was a committed atheist — intellectually, methodically. Then my wife died. My arguments didn't help me grieve. A student invited me to a small group. I went to be polite. The people were asking real questions — not easy ones. I started reading C.S. Lewis, then the New Testament itself. I was baptized last spring at 51.",
    verse: "For the message of the cross is foolishness to those who are perishing, but to us who are being saved it is the power of God.",
    verseRef: "1 Corinthians 1:18",
    postedAt: "2 weeks ago",
    likes: 5847,
    featured: true,
  },
  {
    id: "t-007",
    author: "Isabella Ferreira",
    flag: "🇧🇷",
    location: "Recife, Brazil",
    category: "Career",
    title: "Called to leave a six-figure job for the mission field",
    body: "I was a corporate lawyer earning more than I'd ever imagined. I was also miserable in a way I couldn't name. At a retreat, I sensed God clearly saying: 'You belong somewhere else.' I argued for a year. Then I resigned, gave away my car, sold my apartment, and joined a team in Mozambique. That was three years ago. I've never once wished I had the salary back.",
    verse: "What good is it for someone to gain the whole world, yet forfeit their soul?",
    verseRef: "Mark 8:36",
    postedAt: "2 weeks ago",
    likes: 1876,
    featured: false,
  },
  {
    id: "t-008",
    author: "Samuel Mwangi",
    flag: "🇰🇪",
    location: "Nairobi, Kenya",
    category: "Protection",
    title: "Protected in a violent robbery that killed 3",
    body: "Our church van was stopped by armed men on a rural road at night after a mission trip. They took phones, money, and luggage. The three vehicles behind ours were not stopped the same way — I don't know why ours was spared the worst. We prayed through the night. All 11 of us made it home. I don't know why we lived and others didn't — but I know we didn't survive by accident.",
    verse: "For he will command his angels concerning you to guard you in all your ways.",
    verseRef: "Psalm 91:11",
    postedAt: "3 weeks ago",
    likes: 3108,
    featured: false,
  },
  {
    id: "t-009",
    author: "Ji-Woo Park",
    flag: "🇰🇷",
    location: "Seoul, South Korea",
    category: "Restoration",
    title: "Restored after 10 years of spiritual emptiness",
    body: "I was raised in church but walked away at 19. I spent a decade building a career in entertainment, silencing the God-shaped emptiness with success. At my lowest — after a career scandal that nearly destroyed me — I picked up a Bible I hadn't opened in a decade. I read Psalm 51 and sobbed. David wrote that after his worst failure. So I prayed his prayer. The wilderness was over.",
    verse: "Restore to me the joy of your salvation and grant me a willing spirit, to sustain me.",
    verseRef: "Psalm 51:12",
    postedAt: "1 month ago",
    likes: 2934,
    featured: false,
  },
  {
    id: "t-010",
    author: "Fatima Al-Hassan",
    flag: "🇸🇦",
    location: "Private",
    category: "Community",
    title: "Christian fellowship in a place I cannot name",
    body: "I live in a country where sharing this publicly would put me in danger. I found Christ through reading the New Testament alone in my room. For two years I worshiped alone. Then I found other believers through an online community. We meet on video calls. We pray together. We weep together. I have never felt more part of a church than with these people I may never meet in person.",
    verse: "For where two or three gather in my name, there am I with them.",
    verseRef: "Matthew 18:20",
    postedAt: "1 month ago",
    likes: 7821,
    featured: true,
  },
];

export default function TestimonyPage() {
  const [testimonies, setTestimonies] = useState<Testimony[]>(() => {
    try {
      const s = localStorage.getItem("vine_testimonies");
      return s ? JSON.parse(s) : seedTestimonies;
    } catch { return seedTestimonies; }
  });

  const [liked, setLiked] = useState<Set<string>>(() => {
    try {
      const s = localStorage.getItem("vine_testimonies_liked");
      return s ? new Set(JSON.parse(s)) : new Set();
    } catch { return new Set(); }
  });

  const [activeCategory, setActiveCategory] = usePersistedState("vine_testimony_active_category", "All");
  const [search, setSearch] = useState("");
  const [showCompose, setShowCompose] = useState(false);
  const [showFeatured, setShowFeatured] = useState(true);
  const [shared, setShared] = useState<string | null>(null);

  const [form, setForm] = useState<{ author: string; location: string; category: string; title: string; body: string; verse: string; verseRef: string }>(() => {
    try { const s = localStorage.getItem("vine_testimony_draft"); return s ? JSON.parse(s) : { author: "", location: "", category: "Answered Prayer", title: "", body: "", verse: "", verseRef: "" }; } catch { return { author: "", location: "", category: "Answered Prayer", title: "", body: "", verse: "", verseRef: "" }; }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_testimonies", JSON.stringify(testimonies)); } catch {}
  }, [testimonies]);
  useEffect(() => {
    try { localStorage.setItem("vine_testimony_draft", JSON.stringify(form)); } catch {}
  }, [form]);

  useEffect(() => {
    try { localStorage.setItem("vine_testimonies_liked", JSON.stringify([...liked])); } catch {}
  }, [liked]);

  const handleLike = (id: string) => {
    const next = new Set(liked);
    const wasLiked = next.has(id);
    if (wasLiked) {
      next.delete(id);
      setTestimonies((prev) => prev.map((t) => t.id === id ? { ...t, likes: t.likes - 1 } : t));
    } else {
      next.add(id);
      setTestimonies((prev) => prev.map((t) => t.id === id ? { ...t, likes: t.likes + 1 } : t));
    }
    setLiked(next);
  };

  const handleShare = (id: string) => {
    try { navigator.clipboard.writeText(window.location.href + "#" + id); } catch {}
    setShared(id);
    setTimeout(() => setShared(null), 2000);
  };

  const handleSubmit = () => {
    if (!form.title.trim() || !form.body.trim()) return;
    const newTestimony: Testimony = {
      id: `t-${Date.now()}`,
      author: form.author.trim() || "Anonymous",
      flag: "🙏",
      location: form.location.trim() || "Unknown",
      category: form.category,
      title: form.title.trim(),
      body: form.body.trim(),
      verse: form.verse.trim() || undefined,
      verseRef: form.verseRef.trim() || undefined,
      postedAt: "Just now",
      likes: 0,
      featured: false,
    };
    setTestimonies((prev) => [newTestimony, ...prev]);
    setForm({ author: "", location: "", category: "Answered Prayer", title: "", body: "", verse: "", verseRef: "" });
    setShowCompose(false);
  };

  const filtered = testimonies.filter((t) => {
    const catMatch = activeCategory === "All" || t.category === activeCategory;
    const searchMatch = !search || t.title.toLowerCase().includes(search.toLowerCase()) || t.body.toLowerCase().includes(search.toLowerCase()) || t.author.toLowerCase().includes(search.toLowerCase());
    const featuredFilter = !showFeatured || t.featured;
    return catMatch && searchMatch && featuredFilter;
  });

  const totalLikes = testimonies.reduce((s, t) => s + t.likes, 0);

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <main id="main-content">
      <div className="page-body pb-20">

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 pt-2">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} style={{ color: "#3a7d56" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Testimonies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            God is{" "}
            <span style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              still moving.
            </span>
          </h1>
          <p className="text-lg mb-6 max-w-2xl" style={{ color: "#6A6A88" }}>
            Real stories of God&apos;s faithfulness from believers across the globe. Share yours. Be encouraged by theirs.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "rgba(58,125,86,0.08)", border: "1px solid rgba(58,125,86,0.15)" }}>
              <Heart size={13} style={{ color: "#3a7d56" }} />
              <span className="text-sm font-bold" style={{ color: "#3a7d56" }}>{totalLikes.toLocaleString()} encouragements</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "rgba(107,79,187,0.08)", border: "1px solid rgba(107,79,187,0.2)" }}>
              <Sparkles size={13} style={{ color: "#6B4FBB" }} />
              <span className="text-sm font-bold" style={{ color: "#6B4FBB" }}>{testimonies.length} testimonies</span>
            </div>
          </div>

          <button type="button"
            onClick={() => setShowCompose(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm"
            style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)", color: "#07070F" }}
          >
            <Plus size={16} /> Share Your Testimony
          </button>
        </div>

        {/* Compose Modal */}
        {showCompose && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}>
            <div className="w-full max-w-lg rounded-2xl p-6 max-h-[90vh] overflow-y-auto" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-black text-lg" style={{ color: "#F2F2F8" }}>Share Your Testimony</h3>
                <button aria-label="Close" type="button" onClick={() => setShowCompose(false)} style={{ color: "#4A4A68" }}><X size={20} /></button>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    value={form.author}
                    onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
                    aria-label="Your name" placeholder="Your name"
                    className="px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />
                  <input
                    value={form.location}
                    onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                    aria-label="Location" placeholder="Location"
                    className="px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />
                </div>
                <select aria-label="Category"
                  value={form.category}
                  onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                >
                  {CATEGORIES.filter((c) => c !== "All").map((c) => (
                    <option key={c} value={c} style={{ background: "#12121F" }}>{c}</option>
                  ))}
                </select>
                <input
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  aria-label="Title — a headline for your story" placeholder="Title — a headline for your story"
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />
                <textarea
                  value={form.body}
                  onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
                  aria-label="Tell your story... What happened? How did God move? What changed?" placeholder="Tell your story... What happened? How did God move? What changed?"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    value={form.verse}
                    onChange={(e) => setForm((f) => ({ ...f, verse: e.target.value }))}
                    aria-label="Verse text (optional)" placeholder="Verse text (optional)"
                    className="px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />
                  <input
                    value={form.verseRef}
                    onChange={(e) => setForm((f) => ({ ...f, verseRef: e.target.value }))}
                    aria-label="Reference (e.g. John 3:16)" placeholder="Reference (e.g. John 3:16)"
                    className="px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-5">
                <button type="button"
                  onClick={() => setShowCompose(false)}
                  className="flex-1 py-2.5 rounded-xl font-bold text-sm"
                  style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  Cancel
                </button>
                <button type="button"
                  onClick={handleSubmit}
                  disabled={!form.title.trim() || !form.body.trim()}
                  className="flex-1 py-2.5 rounded-xl font-black text-sm"
                  style={{
                    background: (form.title.trim() && form.body.trim()) ? "linear-gradient(135deg, #3a7d56, #3a7d56)" : "rgba(255,255,255,0.06)",
                    color: (form.title.trim() && form.body.trim()) ? "#07070F" : "#4A4A68",
                  }}
                >
                  Publish Testimony
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search + Featured toggle */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#4A4A68" }} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search testimonies..." placeholder="Search testimonies..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
              />
            </div>
            <button type="button"
              onClick={() => setShowFeatured((v) => !v)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap"
              style={{
                background: showFeatured ? "rgba(107,79,187,0.15)" : "rgba(255,255,255,0.04)",
                border: showFeatured ? "1px solid rgba(107,79,187,0.35)" : "1px solid rgba(255,255,255,0.08)",
                color: showFeatured ? "#9B8FEB" : "#6A6A88",
              }}
            >
              <Flame size={13} className="inline mr-1.5" />
              {showFeatured ? "Featured only" : "All stories"}
            </button>
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
            {CATEGORIES.map((c) => (
              <button type="button"
                key={c}
                onClick={() => setActiveCategory(c)}
                className="px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all"
                style={{
                  background: activeCategory === c ? `${CATEGORY_COLORS[c] ?? "#8A8AA8"}20` : "rgba(255,255,255,0.03)",
                  border: activeCategory === c ? `1px solid ${CATEGORY_COLORS[c] ?? "#8A8AA8"}60` : "1px solid rgba(255,255,255,0.06)",
                  color: activeCategory === c ? CATEGORY_COLORS[c] ?? "#8A8AA8" : "#6A6A88",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="space-y-5">
            {filtered.length === 0 && (
              <div className="text-center py-16" style={{ color: "#4A4A68" }}>
                <Sparkles size={40} className="mx-auto mb-3 opacity-30" />
                <p className="font-semibold">No testimonies found</p>
              </div>
            )}
            {filtered.map((t) => {
              const hasLiked = liked.has(t.id);
              const catColor = CATEGORY_COLORS[t.category] ?? "#8A8AA8";
              return (
                <div
                  key={t.id}
                  id={t.id}
                  className="rounded-2xl p-6"
                  style={{
                    background: t.featured ? "linear-gradient(135deg, rgba(107,79,187,0.07) 0%, rgba(0,0,0,0) 100%)" : "#12121F",
                    border: t.featured ? "1px solid rgba(107,79,187,0.2)" : "1px solid #1E1E32",
                  }}
                >
                  {t.featured && (
                    <div className="flex items-center gap-1.5 mb-3">
                      <Flame size={11} style={{ color: "#F59E0B" }} />
                      <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: "#F59E0B" }}>Featured</span>
                    </div>
                  )}

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: "rgba(255,255,255,0.05)" }}>
                      {t.flag}
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: "#F2F2F8" }}>{t.author}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs" style={{ color: "#4A4A68" }}>{t.location}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ background: `${catColor}15`, color: catColor, border: `1px solid ${catColor}30` }}>
                          {t.category}
                        </span>
                        <span className="text-[10px]" style={{ color: "#4A4A68" }}>
                          <Clock size={9} className="inline mr-0.5" />{t.postedAt}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-black text-lg mb-3 leading-tight" style={{ color: "#F2F2F8" }}>{t.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#C0C0D8" }}>{t.body}</p>

                  {t.verse && t.verseRef && (
                    <div className="p-3 rounded-xl mb-4" style={{ background: "rgba(107,79,187,0.08)", border: "1px solid rgba(107,79,187,0.15)" }}>
                      <p className="text-xs italic mb-1" style={{ color: "#C0C0D8" }}>&ldquo;{t.verse}&rdquo;</p>
                      <p className="text-xs font-bold" style={{ color: "#9B8FEB" }}>— {t.verseRef}</p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button type="button"
                      onClick={() => handleLike(t.id)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-black transition-all"
                      style={{
                        background: hasLiked ? "rgba(236,72,153,0.18)" : "rgba(236,72,153,0.08)",
                        color: "#EC4899",
                        border: hasLiked ? "1px solid rgba(236,72,153,0.45)" : "1px solid rgba(236,72,153,0.15)",
                      }}
                    >
                      <Heart size={13} fill={hasLiked ? "#EC4899" : "none"} />
                      {hasLiked ? "Encouraged" : "Encourage"}
                      <span className="font-normal text-xs opacity-70">{t.likes.toLocaleString()}</span>
                    </button>
                    <button type="button"
                      onClick={() => handleShare(t.id)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-all"
                      style={{
                        background: shared === t.id ? "rgba(58,125,86,0.08)" : "rgba(255,255,255,0.04)",
                        color: shared === t.id ? "#3a7d56" : "#6A6A88",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <Share2 size={12} />
                      {shared === t.id ? "Copied!" : "Share"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 p-8 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(58,125,86,0.06) 0%, rgba(107,79,187,0.06) 100%)", border: "1px solid rgba(58,125,86,0.12)" }}>
            <p className="text-2xl font-black mb-2" style={{ color: "#F2F2F8" }}>Your story matters</p>
            <p className="text-sm mb-5" style={{ color: "#6A6A88" }}>
              Someone somewhere needs to hear exactly what God did for you. Don&apos;t keep it to yourself.
            </p>
            <button type="button"
              onClick={() => setShowCompose(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm"
              style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)", color: "#07070F" }}
            >
              <Sparkles size={15} /> Share Your Story
            </button>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
