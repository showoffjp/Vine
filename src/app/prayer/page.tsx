"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Heart,
  MessageSquare,
  Share2,
  ChevronDown,
  Radio,
  Send,
  Trophy,
  CheckCircle2,
  BookOpen,
  MapPin,
  Clock,
  Plus,
  X,
} from "lucide-react";

const tabs = ["All", "Health", "Family", "Work", "Relationships", "Grief", "Guidance", "Praise Reports"];

const prayerTopics = [
  "Health & Healing",
  "Family",
  "Work & Career",
  "Relationships",
  "Financial",
  "Grief & Loss",
  "Guidance & Direction",
  "Addiction & Recovery",
  "Mental Health",
  "Salvation of Loved One",
  "Other",
];

const prayerCards = [
  {
    id: 1,
    name: "Sarah M.",
    initials: "SM",
    avatarColor: "#6B4FBB",
    location: "Atlanta, GA",
    time: "12 min ago",
    topic: "Health",
    topicColor: "#BB4F7A",
    text: "Please pray for my husband James. He was diagnosed with stage 3 lymphoma two days ago and we're absolutely terrified. We have three young children. We believe in miracles and we're trusting God, but we need strength right now. The doctors say the prognosis is 'uncertain.' We just need peace that passes understanding.",
    prayCount: 247,
    amenCount: 189,
    isPraiseReport: false,
  },
  {
    id: 2,
    name: "Anonymous",
    initials: "?",
    avatarColor: "#4A4A68",
    location: "Somewhere in the Midwest",
    time: "38 min ago",
    topic: "Mental Health",
    topicColor: "#4FBBAA",
    text: "I haven't told anyone this, but I haven't gotten out of bed for three days. The depression is so heavy. I still believe God is real but everything feels dark and far away. Just knowing someone somewhere is praying for me means everything. Please pray for me.",
    prayCount: 893,
    amenCount: 712,
    isPraiseReport: false,
  },
  {
    id: 3,
    name: "PRAISE REPORT — Marcus T.",
    initials: "MT",
    avatarColor: "#00FF88",
    location: "Houston, TX",
    time: "2 hours ago",
    topic: "Praise",
    topicColor: "#00FF88",
    text: "SIX MONTHS AGO I posted here asking for prayer about my job situation. I had just been laid off, had $200 in my bank account, and a family to feed. 312 of you prayed with me. I want you to know: I just signed a contract for a position that DOUBLES my previous salary. God is not slow. He is FAITHFUL. Thank you, Vine family. 🙏✨",
    prayCount: 4821,
    amenCount: 3201,
    isPraiseReport: true,
  },
  {
    id: 4,
    name: "David & Rachel K.",
    initials: "DK",
    avatarColor: "#4F8FBB",
    location: "Phoenix, AZ",
    time: "4 hours ago",
    topic: "Family",
    topicColor: "#BB7A4F",
    text: "Our teenage daughter walked away from faith six months ago and now tells us she's an atheist. We love her unconditionally but our hearts are broken. We're trying not to push her away but also stay true to what we believe. Praying for wisdom in how to love her well and trust God with what we cannot control.",
    prayCount: 1102,
    amenCount: 834,
    isPraiseReport: false,
  },
  {
    id: 5,
    name: "Anonymous",
    initials: "?",
    avatarColor: "#4A4A68",
    location: "Southeast Asia",
    time: "6 hours ago",
    topic: "Guidance",
    topicColor: "#6B4FBB",
    text: "I feel God calling me to leave my stable corporate job and enter full-time ministry. My family thinks I'm being irresponsible. My wife is supportive but scared. I have two kids and a mortgage. I've been wrestling with this for 18 months. Please pray for clarity, courage, and provision if this is truly God's call.",
    prayCount: 678,
    amenCount: 512,
    isPraiseReport: false,
  },
  {
    id: 6,
    name: "Amara J.",
    initials: "AJ",
    avatarColor: "#BB4F7A",
    location: "London, UK",
    time: "8 hours ago",
    topic: "Grief",
    topicColor: "#8A8AA8",
    text: "My mum passed away last Tuesday. She was my best friend, my prayer partner, my everything. I know she's with Jesus and I believe in heaven but the grief is physical — it feels like someone removed a piece of my chest. Please just pray that I can breathe. That's all I'm asking for right now. Just help me breathe.",
    prayCount: 2341,
    amenCount: 1893,
    isPraiseReport: false,
  },
  {
    id: 7,
    name: "Pastor Michael R.",
    initials: "MR",
    avatarColor: "#4FBBAA",
    location: "Chicago, IL",
    time: "10 hours ago",
    topic: "Work",
    topicColor: "#4F8FBB",
    text: "Asking for prayer for our church plant. We started 18 months ago with 12 people meeting in my living room. This Sunday we're moving into our first dedicated building. It's a miracle of God's provision. Please pray as we step into this new season — for unity, Spirit-led leadership, and that God would build His church His way.",
    prayCount: 1547,
    amenCount: 1203,
    isPraiseReport: false,
  },
  {
    id: 8,
    name: "Anonymous",
    initials: "?",
    avatarColor: "#4A4A68",
    location: "Canada",
    time: "1 day ago",
    topic: "Relationships",
    topicColor: "#BB4F7A",
    text: "My marriage is in serious trouble. We've been married 14 years and have drifted so far apart that we feel like roommates. We both still love each other and neither wants divorce, but we don't know how to find our way back. We've started seeing a Christian counselor. Please pray that God can restore what's been lost.",
    prayCount: 934,
    amenCount: 712,
    isPraiseReport: false,
  },
];

const prayerChampions = [
  { name: "Ruth W.", count: 847, initials: "RW", color: "#00FF88" },
  { name: "Jonathan M.", count: 734, initials: "JM", color: "#6B4FBB" },
  { name: "Esther K.", count: 621, initials: "EK", color: "#4FBBAA" },
  { name: "Abraham L.", count: 589, initials: "AL", color: "#BB4F7A" },
  { name: "Grace T.", count: 512, initials: "GT", color: "#4F8FBB" },
];

const recentlyAnswered = [
  { text: "Job found after 6 months searching", time: "2 hours ago" },
  { text: "Cancer diagnosis came back benign", time: "5 hours ago" },
  { text: "Estranged son made contact after 3 years", time: "1 day ago" },
  { text: "Marriage restored after separation", time: "2 days ago" },
];

export default function PrayerPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [prayedCards, setPrayedCards] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_prayed_cards"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [prayCounts, setPrayCounts] = useState<Record<number, number>>(() => {
    try { const s = localStorage.getItem("vine_pray_counts"); return s ? JSON.parse(s) : Object.fromEntries(prayerCards.map((c) => [c.id, c.prayCount])); } catch { return Object.fromEntries(prayerCards.map((c) => [c.id, c.prayCount])); }
  });
  const [prayingAnimation, setPrayingAnimation] = useState<Set<number>>(new Set());
  const [requestText, setRequestText] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try { localStorage.setItem("vine_prayed_cards", JSON.stringify([...prayedCards])); } catch {}
  }, [prayedCards]);
  useEffect(() => {
    try { localStorage.setItem("vine_pray_counts", JSON.stringify(prayCounts)); } catch {}
  }, [prayCounts]);

  const handleSubmitPrayer = () => {
    if (!requestText.trim()) return;
    setSubmitted(true);
    setRequestText("");
    setSelectedTopic("");
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 3000);
  };

  const handlePray = (cardId: number) => {
    if (prayedCards.has(cardId)) return;

    setPrayingAnimation((prev) => new Set([...prev, cardId]));
    setTimeout(() => {
      setPrayingAnimation((prev) => {
        const next = new Set(prev);
        next.delete(cardId);
        return next;
      });
    }, 1200);

    setPrayedCards((prev) => new Set([...prev, cardId]));
    setPrayCounts((prev) => ({ ...prev, [cardId]: prev[cardId] + 1 }));
  };

  return (
    <div className="min-h-screen" style={{ background: "#07070F" }}>
      <Navbar />

      <main className="page-body pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(107,79,187,0.15) 0%, rgba(0,255,136,0.08) 100%)",
              border: "1px solid rgba(0,255,136,0.15)",
            }}
          >
            {/* Background decoration */}
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
              style={{ background: "#6B4FBB" }}
            />
            <div className="relative">
              {/* Live indicator */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ background: "rgba(255,80,80,0.12)", border: "1px solid rgba(255,80,80,0.25)" }}>
                  <Radio size={11} style={{ color: "#FF5050" }} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: "#FF5050" }}>Live</span>
                </div>
                <span className="text-xs" style={{ color: "#6A6A88" }}>Real prayers, real people, real God</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black mb-2" style={{ color: "#F2F2F8" }}>
                Prayer Wall
              </h1>
              <p className="text-base mb-6" style={{ color: "#8A8AA8" }}>
                A sacred space to share your needs, stand with others, and witness God&apos;s faithfulness.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-6 max-w-lg">
                {[
                  { num: "4,231", label: "prayers this week" },
                  { num: "189,432", label: "total prayers answered" },
                  { num: "8,847", label: "active pray-ers" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-black" style={{ color: "#00FF88" }}>{stat.num}</p>
                    <p className="text-xs" style={{ color: "#6A6A88" }}>{stat.label}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowForm(!showForm)}
                className="btn-gold px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2"
              >
                <Plus size={16} />
                Submit a Prayer Request
              </button>
            </div>
          </div>

          {/* Inline Prayer Form */}
          {showForm && (
            <div
              className="mt-4 rounded-2xl p-6"
              style={{ background: "#12121F", border: "1px solid rgba(0,255,136,0.2)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold" style={{ color: "#F2F2F8" }}>Share Your Prayer Request</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]"
                  style={{ color: "#6A6A88" }}
                >
                  <X size={16} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Topic */}
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "#8A8AA8" }}>
                    Topic
                  </label>
                  <div className="relative">
                    <select
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl text-sm appearance-none outline-none"
                      style={{ background: "#07070F", border: "1px solid #1E1E32", color: selectedTopic ? "#F2F2F8" : "#6A6A88" }}
                    >
                      <option value="">Select a topic...</option>
                      {prayerTopics.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#6A6A88" }} />
                  </div>
                </div>

                {/* Name (if not anonymous) */}
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "#8A8AA8" }}>
                    Your Name (optional)
                  </label>
                  <input
                    type="text"
                    placeholder={isAnonymous ? "Posting anonymously" : "Your first name..."}
                    disabled={isAnonymous}
                    className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                    style={{
                      background: "#07070F",
                      border: "1px solid #1E1E32",
                      color: "#F2F2F8",
                      opacity: isAnonymous ? 0.5 : 1,
                    }}
                  />
                </div>
              </div>

              {/* Anonymous toggle */}
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => setIsAnonymous(!isAnonymous)}
                  className="relative w-10 h-5 rounded-full transition-all duration-200 flex-shrink-0"
                  style={{ background: isAnonymous ? "#00FF88" : "#1E1E32" }}
                >
                  <span
                    className="absolute top-0.5 w-4 h-4 rounded-full transition-all duration-200"
                    style={{
                      background: "#F2F2F8",
                      left: isAnonymous ? "calc(100% - 18px)" : "2px",
                    }}
                  />
                </button>
                <span className="text-xs" style={{ color: "#8A8AA8" }}>
                  Post anonymously — your identity will be hidden from other users
                </span>
              </div>

              {/* Prayer text */}
              <div className="mb-4">
                <label className="text-xs font-semibold block mb-1.5" style={{ color: "#8A8AA8" }}>
                  Your Prayer Request
                </label>
                <textarea
                  value={requestText}
                  onChange={(e) => setRequestText(e.target.value)}
                  placeholder="Share what's on your heart. Be as specific or general as you'd like. This community will lift you up in prayer..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ background: "#07070F", border: "1px solid #1E1E32", color: "#F2F2F8", lineHeight: 1.6 }}
                />
                <p className="text-[10px] mt-1 text-right" style={{ color: "#4A4A68" }}>
                  {requestText.length} / 1000
                </p>
              </div>

              {submitted ? (
                <div className="rounded-xl p-4 text-center" style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.2)" }}>
                  <p className="text-sm font-bold" style={{ color: "#00FF88" }}>🙏 Your prayer request has been shared with the community.</p>
                  <p className="text-xs mt-1" style={{ color: "#6A6A88" }}>Believers around the world are already lifting you up.</p>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button onClick={handleSubmitPrayer} className="btn-gold px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2">
                    <Send size={14} />
                    Submit Prayer Request
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold transition hover:bg-[#18182A]"
                    style={{ border: "1px solid #1E1E32", color: "#8A8AA8" }}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            {/* MAIN PRAYER FEED */}
            <div className="flex-1 min-w-0">
              {/* Filter Tabs */}
              <div
                className="flex items-center gap-1 overflow-x-auto scrollbar-hide mb-5 pb-1"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                    style={{
                      background: activeTab === tab ? "rgba(0,255,136,0.12)" : "transparent",
                      border: activeTab === tab ? "1px solid rgba(0,255,136,0.3)" : "1px solid #1E1E32",
                      color: activeTab === tab ? "#00FF88" : "#6A6A88",
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Prayer Cards */}
              <div className="space-y-4">
                {prayerCards.map((card) => {
                  const hasPrayed = prayedCards.has(card.id);
                  const isAnimating = prayingAnimation.has(card.id);
                  const count = prayCounts[card.id];

                  return (
                    <article
                      key={card.id}
                      className="rounded-2xl p-5 transition-all duration-200"
                      style={{
                        background: "#12121F",
                        border: card.isPraiseReport
                          ? "1px solid rgba(0,255,136,0.4)"
                          : "1px solid #1E1E32",
                        boxShadow: card.isPraiseReport
                          ? "0 0 30px rgba(0,255,136,0.08)"
                          : "none",
                      }}
                    >
                      {card.isPraiseReport && (
                        <div
                          className="flex items-center gap-2 mb-3 px-3 py-2 rounded-xl"
                          style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.2)" }}
                        >
                          <CheckCircle2 size={14} style={{ color: "#00FF88" }} />
                          <span className="text-xs font-black uppercase tracking-wider" style={{ color: "#00FF88" }}>
                            🎉 Praise Report — Prayer Answered!
                          </span>
                        </div>
                      )}

                      {/* Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0"
                          style={{ background: `${card.avatarColor}22`, color: card.avatarColor, border: `1px solid ${card.avatarColor}30` }}
                        >
                          {card.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold truncate" style={{ color: "#F2F2F8" }}>
                            {card.name}
                          </p>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="flex items-center gap-1 text-[10px]" style={{ color: "#6A6A88" }}>
                              <MapPin size={9} />
                              {card.location}
                            </span>
                            <span className="flex items-center gap-1 text-[10px]" style={{ color: "#6A6A88" }}>
                              <Clock size={9} />
                              {card.time}
                            </span>
                          </div>
                        </div>
                        <span
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                          style={{
                            background: `${card.topicColor}15`,
                            color: card.topicColor,
                            border: `1px solid ${card.topicColor}30`,
                          }}
                        >
                          {card.topic}
                        </span>
                      </div>

                      {/* Prayer text */}
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#C0C0D8" }}>
                        {card.text}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {/* Pray button */}
                        <button
                          onClick={() => handlePray(card.id)}
                          disabled={hasPrayed}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300"
                          style={{
                            background: hasPrayed
                              ? "rgba(0,255,136,0.15)"
                              : "rgba(0,255,136,0.08)",
                            border: `1px solid ${hasPrayed ? "rgba(0,255,136,0.4)" : "rgba(0,255,136,0.2)"}`,
                            color: hasPrayed ? "#00FF88" : "#8A8AA8",
                            transform: isAnimating ? "scale(0.95)" : "scale(1)",
                          }}
                        >
                          <span
                            style={{
                              display: "inline-block",
                              animation: isAnimating ? "pulse 0.6s ease" : "none",
                            }}
                          >
                            🙏
                          </span>
                          {isAnimating ? "Praying..." : hasPrayed ? "Praying" : "Pray"}
                          <span
                            className="text-xs font-mono px-1.5 py-0.5 rounded-md"
                            style={{
                              background: "rgba(0,0,0,0.3)",
                              color: hasPrayed ? "#00FF88" : "#6A6A88",
                            }}
                          >
                            {count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count}
                          </span>
                        </button>

                        {/* Amen */}
                        <button
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm transition-all duration-200 hover:bg-[#18182A]"
                          style={{ border: "1px solid #1E1E32", color: "#6A6A88" }}
                        >
                          <Heart size={13} />
                          Amen · {card.amenCount >= 1000 ? `${(card.amenCount / 1000).toFixed(1)}k` : card.amenCount}
                        </button>

                        {/* Comment */}
                        <button
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm transition-all duration-200 hover:bg-[#18182A]"
                          style={{ border: "1px solid #1E1E32", color: "#6A6A88" }}
                        >
                          <MessageSquare size={13} />
                          Encourage
                        </button>

                        <button
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm transition-all duration-200 hover:bg-[#18182A] ml-auto"
                          style={{ border: "1px solid #1E1E32", color: "#6A6A88" }}
                        >
                          <Share2 size={13} />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="hidden xl:flex flex-col gap-4 w-72 flex-shrink-0">
              {/* Prayer Champions */}
              <div
                className="rounded-2xl p-4"
                style={{ background: "#12121F", border: "1px solid #1E1E32" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Trophy size={15} style={{ color: "#00FF88" }} />
                  <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>
                    Prayer Champions
                  </h4>
                </div>
                <p className="text-[10px] mb-3" style={{ color: "#4A4A68" }}>Most prayers prayed this week</p>
                <div className="space-y-3">
                  {prayerChampions.map((champ, i) => (
                    <div key={champ.name} className="flex items-center gap-3">
                      <span
                        className="text-sm font-black w-5 flex-shrink-0 text-center"
                        style={{ color: i === 0 ? "#00FF88" : i === 1 ? "#C0C0D8" : "#8A8AA8" }}
                      >
                        {i + 1}
                      </span>
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                        style={{ background: `${champ.color}22`, color: champ.color }}
                      >
                        {champ.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold truncate" style={{ color: "#C0C0D8" }}>
                          {champ.name}
                        </p>
                        <p className="text-[10px]" style={{ color: "#6A6A88" }}>
                          {champ.count} prayers
                        </p>
                      </div>
                      {i === 0 && (
                        <span className="text-base">👑</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recently Answered */}
              <div
                className="rounded-2xl p-4"
                style={{ background: "#12121F", border: "1px solid #1E1E32" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 size={15} style={{ color: "#4FBBAA" }} />
                  <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>
                    Recently Answered
                  </h4>
                </div>
                <div className="space-y-3">
                  {recentlyAnswered.map((item, i) => (
                    <div key={i} className="flex gap-2.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: "#4FBBAA" }}
                      />
                      <div>
                        <p className="text-xs font-medium leading-snug" style={{ color: "#C0C0D8" }}>
                          {item.text}
                        </p>
                        <p className="text-[10px] mt-0.5" style={{ color: "#4A4A68" }}>
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prayer Tip */}
              <div
                className="rounded-2xl p-4 verse-card"
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={14} style={{ color: "#00FF88" }} />
                  <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>
                    Prayer Tip of the Day
                  </h4>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#C0C0D8" }}>
                  <strong style={{ color: "#F2F2F8" }}>Pray Scripture back to God.</strong> Take a promise from the Bible and turn it into your prayer. It aligns your heart with His will and builds faith as you pray.
                </p>
                <div
                  className="p-3 rounded-xl italic text-xs leading-relaxed"
                  style={{ background: "rgba(0,255,136,0.06)", border: "1px solid rgba(0,255,136,0.12)", color: "#8A8AA8" }}
                >
                  &ldquo;Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.&rdquo;
                  <span className="block mt-1 font-bold not-italic" style={{ color: "#00FF88" }}>
                    — Philippians 4:6
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl p-4 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(107,79,187,0.15) 0%, rgba(0,255,136,0.08) 100%)",
                  border: "1px solid rgba(0,255,136,0.2)",
                }}
              >
                <p className="text-2xl mb-2">🙏</p>
                <h4 className="font-bold text-sm mb-1" style={{ color: "#F2F2F8" }}>
                  Your prayer matters
                </h4>
                <p className="text-xs mb-3" style={{ color: "#8A8AA8" }}>
                  Every &quot;Pray&quot; button you click is a real person feeling less alone.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="btn-gold w-full py-2 rounded-xl text-sm font-bold"
                >
                  Submit a Request
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
