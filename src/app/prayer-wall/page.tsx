"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import { Heart, Plus, X, Flame, Globe, Lock, ChevronDown, Search, Clock, CheckCircle2 } from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";

interface PrayerRequest {
  id: string;
  author: string;
  flag: string;
  location: string;
  category: string;
  body: string;
  postedAt: string;
  prayerCount: number;
  answered: boolean;
  testimony?: string;
  private: boolean;
}

const CATEGORIES = ["All", "Health", "Family", "Work", "Salvation", "Relationships", "Finances", "Grief", "Ministry", "World", "Personal"];

const seedRequests: PrayerRequest[] = [
  {
    id: "pw-001",
    author: "Amara O.",
    flag: "🇬🇭",
    location: "Accra, Ghana",
    category: "Health",
    body: "My mother was diagnosed with stage 2 breast cancer this week. We are trusting God for complete healing and peace in the uncertainty. The doctors are hopeful but the road ahead is hard. Please stand with us.",
    postedAt: "2 hours ago",
    prayerCount: 247,
    answered: false,
    private: false,
  },
  {
    id: "pw-002",
    author: "Marcus T.",
    flag: "🇺🇸",
    location: "Atlanta, GA",
    category: "Salvation",
    body: "Praying for my brother James who walked away from the faith 8 years ago. He's going through a divorce now and I sense his heart softening. Please pray that God meets him in this season.",
    postedAt: "5 hours ago",
    prayerCount: 183,
    answered: false,
    private: false,
  },
  {
    id: "pw-003",
    author: "Priya S.",
    flag: "🇮🇳",
    location: "Mumbai, India",
    category: "Ministry",
    body: "We are planting a church in a predominantly Hindu neighborhood. We face resistance from local leaders but doors are slowly opening. Please pray for boldness, wisdom, and divine appointments this month.",
    postedAt: "Yesterday",
    prayerCount: 512,
    answered: false,
    private: false,
  },
  {
    id: "pw-004",
    author: "Sofia R.",
    flag: "🇧🇷",
    location: "São Paulo, Brazil",
    category: "Finances",
    body: "My husband lost his job three months ago and we have two young children. We've exhausted our savings. I'm trusting God to provide but it's getting very difficult. Asking for prayer and any wisdom God gives you.",
    postedAt: "Yesterday",
    prayerCount: 328,
    answered: false,
    private: false,
  },
  {
    id: "pw-005",
    author: "David K.",
    flag: "🇰🇷",
    location: "Seoul, South Korea",
    category: "Family",
    body: "My teenage son has been struggling with severe depression and refuses to talk to me. There's a wall between us. Please pray that God would break through and restore our relationship before it's too late.",
    postedAt: "2 days ago",
    prayerCount: 445,
    answered: false,
    private: false,
  },
  {
    id: "pw-006",
    author: "Grace A.",
    flag: "🇳🇬",
    location: "Lagos, Nigeria",
    category: "Health",
    body: "UPDATE — ANSWERED 🙏 Six months ago I posted here asking for prayer for my father's heart condition. Yesterday his doctor said his heart function has improved to near-normal. The cardiologist called it 'remarkable.' I know it was the prayers of this community. Thank you, Vine family. God is real.",
    postedAt: "3 days ago",
    prayerCount: 1204,
    answered: true,
    testimony: "Complete healing confirmed by cardiologist after 6 months of prayer!",
    private: false,
  },
  {
    id: "pw-007",
    author: "Anonymous",
    flag: "🌍",
    location: "Private",
    category: "Personal",
    body: "I'm struggling with an addiction I've carried in secret for 7 years. My family doesn't know. I feel so much shame. I don't even know how to ask God for help anymore. Please just pray for me.",
    postedAt: "4 days ago",
    prayerCount: 892,
    answered: false,
    private: true,
  },
  {
    id: "pw-008",
    author: "Lydia B.",
    flag: "🇩🇪",
    location: "Berlin, Germany",
    category: "Relationships",
    body: "My marriage is at a breaking point. We've been to counseling but my husband has checked out emotionally. Please pray for a miracle of restoration. We have three kids who need both parents.",
    postedAt: "5 days ago",
    prayerCount: 673,
    answered: false,
    private: false,
  },
  {
    id: "pw-009",
    author: "Samuel M.",
    flag: "🇰🇪",
    location: "Nairobi, Kenya",
    category: "World",
    body: "The violence in the northern regions of Kenya has displaced 40,000 people, many of them believers. Please pray for protection, provision, and peace. Many churches are now serving as refugee shelters.",
    postedAt: "1 week ago",
    prayerCount: 2847,
    answered: false,
    private: false,
  },
  {
    id: "pw-010",
    author: "Ji-Woo P.",
    flag: "🇰🇷",
    location: "Seoul, South Korea",
    category: "Work",
    body: "I'm a Christian in the entertainment industry. The pressure to compromise is constant. Please pray for integrity, wisdom to know when to push back, and for God to use my platform for good.",
    postedAt: "1 week ago",
    prayerCount: 521,
    answered: false,
    private: false,
  },
  {
    id: "pw-011",
    author: "Carlos M.",
    flag: "🇨🇴",
    location: "Medellín, Colombia",
    category: "Ministry",
    body: "I run a rehab center for ex-gang members here in Medellín. We have 23 men right now who need everything — food, housing, counseling, and Jesus. Funding is running out this month. Please pray for provision.",
    postedAt: "1 week ago",
    prayerCount: 1103,
    answered: false,
    private: false,
  },
  {
    id: "pw-012",
    author: "Emma L.",
    flag: "🇬🇧",
    location: "London, UK",
    category: "Grief",
    body: "My best friend passed away suddenly last month at 29. She was a believer. The grief is overwhelming and I keep asking why. Please pray that God's presence would be real in this darkness.",
    postedAt: "2 weeks ago",
    prayerCount: 789,
    answered: false,
    private: false,
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Health: "#EF4444",
  Family: "#3B82F6",
  Work: "#F59E0B",
  Salvation: "#3a7d56",
  Relationships: "#EC4899",
  Finances: "#F97316",
  Grief: "#8B5CF6",
  Ministry: "#6B4FBB",
  World: "#10B981",
  Personal: "#8A8AA8",
  All: "#8A8AA8",
};

function timeAgo(): string {
  const times = ["Just now", "1 min ago", "3 min ago", "7 min ago", "12 min ago"];
  return times[Math.floor(Math.random() * times.length)];
}

export default function PrayerWallPage() {
  const [requests, setRequests] = useState<PrayerRequest[]>(() => {
    try {
      const s = localStorage.getItem("vine_prayer_wall");
      return s ? JSON.parse(s) : seedRequests;
    } catch { return seedRequests; }
  });

  const [prayedFor, setPrayedFor] = useState<Set<string>>(() => {
    try {
      const s = localStorage.getItem("vine_prayer_wall_prayed");
      return s ? new Set(JSON.parse(s)) : new Set();
    } catch { return new Set(); }
  });

  const [activeCategory, setActiveCategory] = usePersistedState("vine_prayer-wall_active_category", "All");
  const [search, setSearch] = useState("");
  const [showCompose, setShowCompose] = useState(false);
  const [sortBy, setSortBy] = usePersistedState<string>("vine_prayer-wall_sort_by", "recent");

  const [form, setForm] = useState<{ author: string; body: string; category: string; anonymous: boolean; location: string }>(() => {
    try { const s = localStorage.getItem("vine_prayer_wall_draft"); return s ? JSON.parse(s) : { author: "", body: "", category: "Personal", anonymous: false, location: "" }; } catch { return { author: "", body: "", category: "Personal", anonymous: false, location: "" }; }
  });
  useEffect(() => {
    try { localStorage.setItem("vine_prayer_wall_draft", JSON.stringify(form)); } catch {}
  }, [form]);

  useEffect(() => {
    try { localStorage.setItem("vine_prayer_wall", JSON.stringify(requests)); } catch {}
  }, [requests]);

  useEffect(() => {
    try { localStorage.setItem("vine_prayer_wall_prayed", JSON.stringify([...prayedFor])); } catch {}
  }, [prayedFor]);

  const handlePray = (id: string) => {
    const next = new Set(prayedFor);
    const alreadyPrayed = next.has(id);
    if (alreadyPrayed) {
      next.delete(id);
      setRequests((prev) => prev.map((r) => r.id === id ? { ...r, prayerCount: r.prayerCount - 1 } : r));
    } else {
      next.add(id);
      setRequests((prev) => prev.map((r) => r.id === id ? { ...r, prayerCount: r.prayerCount + 1 } : r));
    }
    setPrayedFor(next);
  };

  const handleSubmit = () => {
    if (!form.body.trim()) return;
    const newRequest: PrayerRequest = {
      id: `pw-${Date.now()}`,
      author: form.anonymous ? "Anonymous" : (form.author.trim() || "Anonymous"),
      flag: form.anonymous ? "🌍" : "🙏",
      location: form.anonymous ? "Private" : (form.location.trim() || "Unknown"),
      category: form.category,
      body: form.body.trim(),
      postedAt: timeAgo(),
      prayerCount: 0,
      answered: false,
      private: form.anonymous,
    };
    setRequests((prev) => [newRequest, ...prev]);
    setForm({ author: "", body: "", category: "Personal", anonymous: false, location: "" });
    setShowCompose(false);
  };

  const filtered = requests
    .filter((r) => {
      const catMatch = activeCategory === "All" || r.category === activeCategory;
      const searchMatch = !search || r.body.toLowerCase().includes(search.toLowerCase()) || r.author.toLowerCase().includes(search.toLowerCase()) || r.category.toLowerCase().includes(search.toLowerCase());
      const typeMatch = sortBy !== "answered" || r.answered;
      return catMatch && searchMatch && typeMatch;
    })
    .sort((a, b) => {
      if (sortBy === "most-prayed") return b.prayerCount - a.prayerCount;
      return 0;
    });

  const totalPrayers = requests.reduce((s, r) => s + r.prayerCount, 0);
  const answeredCount = requests.filter((r) => r.answered).length;

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="pb-20" style={{ paddingTop: 80 }}>

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 pt-2">
          <div className="flex items-center gap-2 mb-4">
            <Globe size={18} style={{ color: "#3a7d56" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Community Prayer Wall</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Carry each{" "}
            <span style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              other&apos;s burdens.
            </span>
          </h1>
          <p className="text-lg mb-6 max-w-2xl" style={{ color: "#6A6A88" }}>
            Post your prayer requests anonymously or publicly. Let the global Vine community pray with you. Galatians 6:2.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "rgba(58,125,86,0.08)", border: "1px solid rgba(58,125,86,0.15)" }}>
              <Heart size={14} style={{ color: "#3a7d56" }} />
              <span className="text-sm font-bold" style={{ color: "#3a7d56" }}>{totalPrayers.toLocaleString()} prayers offered</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "rgba(107,79,187,0.08)", border: "1px solid rgba(107,79,187,0.2)" }}>
              <CheckCircle2 size={14} style={{ color: "#6B4FBB" }} />
              <span className="text-sm font-bold" style={{ color: "#6B4FBB" }}>{answeredCount} answered prayers</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Globe size={14} style={{ color: "#8A8AA8" }} />
              <span className="text-sm font-bold" style={{ color: "#8A8AA8" }}>{requests.length} active requests</span>
            </div>
          </div>

          <button type="button"
            onClick={() => setShowCompose(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all"
            style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)", color: "#07070F" }}
          >
            <Plus size={16} /> Post a Prayer Request
          </button>
        </div>

        {/* Compose Modal */}
        {showCompose && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}>
            <div className="w-full max-w-lg rounded-2xl p-6" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-black text-lg" style={{ color: "#F2F2F8" }}>Share a Prayer Request</h3>
                <button type="button" onClick={() => setShowCompose(false)} style={{ color: "#4A4A68" }}><X size={20} /></button>
              </div>

              <div className="space-y-4">
                {/* Anonymous toggle */}
                <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-2">
                    <Lock size={14} style={{ color: form.anonymous ? "#3a7d56" : "#4A4A68" }} />
                    <span className="text-sm font-semibold" style={{ color: "#C0C0D8" }}>Post anonymously</span>
                  </div>
                  <button type="button"
                    onClick={() => setForm((f) => ({ ...f, anonymous: !f.anonymous }))}
                    className="w-10 h-5 rounded-full transition-all relative"
                    style={{ background: form.anonymous ? "#3a7d56" : "#1E1E32" }}
                  >
                    <span className="absolute top-0.5 w-4 h-4 rounded-full transition-all" style={{ background: "#fff", left: form.anonymous ? "22px" : "2px" }} />
                  </button>
                </div>

                {!form.anonymous && (
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
                      aria-label="Location (optional)" placeholder="Location (optional)"
                      className="px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                    />
                  </div>
                )}

                <select
                  value={form.category}
                  onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                >
                  {CATEGORIES.filter((c) => c !== "All").map((c) => (
                    <option key={c} value={c} style={{ background: "#12121F" }}>{c}</option>
                  ))}
                </select>

                <textarea
                  value={form.body}
                  onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
                  aria-label="Share your request... be as specific as you feel comfortable. The more specific, the more targeted the prayer." placeholder="Share your request... be as specific as you feel comfortable. The more specific, the more targeted the prayer."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />
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
                  disabled={!form.body.trim()}
                  className="flex-1 py-2.5 rounded-xl font-black text-sm transition-all"
                  style={{
                    background: form.body.trim() ? "linear-gradient(135deg, #3a7d56, #3a7d56)" : "rgba(255,255,255,0.06)",
                    color: form.body.trim() ? "#07070F" : "#4A4A68",
                  }}
                >
                  Post Request
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search + Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#4A4A68" }} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search requests..." placeholder="Search requests..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold" style={{ color: "#4A4A68" }}>Sort:</span>
              {(["recent", "most-prayed", "answered"] as const).map((s) => (
                <button type="button"
                  key={s}
                  onClick={() => setSortBy(s)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold capitalize whitespace-nowrap"
                  style={{
                    background: sortBy === s ? "rgba(58,125,86,0.15)" : "rgba(255,255,255,0.04)",
                    border: sortBy === s ? "1px solid rgba(58,125,86,0.35)" : "1px solid rgba(255,255,255,0.06)",
                    color: sortBy === s ? "#3a7d56" : "#6A6A88",
                  }}
                >
                  {s === "most-prayed" ? "Most Prayed" : s === "answered" ? "Answered ✓" : "Recent"}
                </button>
              ))}
            </div>
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
            {CATEGORIES.map((c) => (
              <button type="button"
                key={c}
                onClick={() => setActiveCategory(c)}
                className="px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all"
                style={{
                  background: activeCategory === c ? `${CATEGORY_COLORS[c]}20` : "rgba(255,255,255,0.03)",
                  border: activeCategory === c ? `1px solid ${CATEGORY_COLORS[c]}60` : "1px solid rgba(255,255,255,0.06)",
                  color: activeCategory === c ? CATEGORY_COLORS[c] : "#6A6A88",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Prayer cards */}
          <div className="space-y-4">
            {filtered.length === 0 && (
              <div className="text-center py-16" style={{ color: "#4A4A68" }}>
                <Globe size={40} className="mx-auto mb-3 opacity-30" />
                <p className="font-semibold">No requests found</p>
              </div>
            )}
            {filtered.map((req) => {
              const hasPrayed = prayedFor.has(req.id);
              const catColor = CATEGORY_COLORS[req.category] ?? "#8A8AA8";
              return (
                <div
                  key={req.id}
                  className="rounded-2xl p-5 transition-all"
                  style={{
                    background: req.answered ? "linear-gradient(135deg, rgba(58,125,86,0.05), rgba(16,185,129,0.02))" : "#12121F",
                    border: req.answered ? "1px solid rgba(58,125,86,0.2)" : "1px solid #1E1E32",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: "rgba(255,255,255,0.05)" }}>
                      {req.flag}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm" style={{ color: "#F2F2F8" }}>{req.author}</span>
                        {req.private && <Lock size={10} style={{ color: "#4A4A68" }} />}
                        <span className="text-xs" style={{ color: "#4A4A68" }}>{req.location}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: `${catColor}15`, color: catColor, border: `1px solid ${catColor}30` }}
                        >
                          {req.category}
                        </span>
                        <span className="text-[10px]" style={{ color: "#4A4A68" }}>
                          <Clock size={9} className="inline mr-0.5" />{req.postedAt}
                        </span>
                      </div>
                    </div>
                    {req.answered && (
                      <span className="text-[10px] font-black px-2 py-1 rounded-full whitespace-nowrap" style={{ background: "rgba(58,125,86,0.15)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.3)" }}>
                        ✓ ANSWERED
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#C0C0D8" }}>{req.body}</p>

                  {/* Testimony */}
                  {req.testimony && (
                    <div className="p-3 rounded-xl mb-4" style={{ background: "rgba(58,125,86,0.06)", border: "1px solid rgba(58,125,86,0.12)" }}>
                      <p className="text-xs font-bold mb-1" style={{ color: "#3a7d56" }}>🙏 Praise Report</p>
                      <p className="text-xs" style={{ color: "#A0A0C0" }}>{req.testimony}</p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button type="button"
                      onClick={() => handlePray(req.id)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-black transition-all"
                      style={{
                        background: hasPrayed ? "rgba(58,125,86,0.15)" : "rgba(58,125,86,0.08)",
                        color: "#3a7d56",
                        border: hasPrayed ? "1px solid rgba(58,125,86,0.4)" : "1px solid rgba(58,125,86,0.15)",
                      }}
                    >
                      <Heart size={13} fill={hasPrayed ? "#3a7d56" : "none"} />
                      {hasPrayed ? "Praying" : "I'll Pray"}
                      <span className="ml-1 font-normal text-xs opacity-70">{req.prayerCount.toLocaleString()}</span>
                    </button>
                    {hasPrayed && (
                      <span className="text-xs" style={{ color: "#4A4A68" }}>
                        <Flame size={10} className="inline mr-1" style={{ color: "#F59E0B" }} />
                        You committed to pray for this
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 p-8 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(107,79,187,0.08) 0%, rgba(58,125,86,0.04) 100%)", border: "1px solid rgba(107,79,187,0.15)" }}>
            <p className="text-2xl font-black mb-2" style={{ color: "#F2F2F8" }}>Carry each other&apos;s burdens</p>
            <p className="text-sm mb-5" style={{ color: "#6A6A88" }}>
              Every prayer matters. The global church praying together is the most powerful force on earth.
            </p>
            <button type="button"
              onClick={() => setShowCompose(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm"
              style={{ background: "linear-gradient(135deg, #6B4FBB, #9B8FEB)", color: "#fff" }}
            >
              <Plus size={15} /> Add Your Request
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
