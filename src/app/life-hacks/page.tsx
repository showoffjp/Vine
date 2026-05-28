"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Zap,
  TrendingUp,
  Bookmark,
  Star,
  ChevronRight,
  DollarSign,
  Heart,
  Briefcase,
  Moon,
  Baby,
  Smartphone,
  Clock,
  Send,
  Trophy,
} from "lucide-react";


const trending = [
  { title: "The 10-10-80 Money Method", saves: "4.2k", category: "Money", color: "#00FF88" },
  { title: "Phone-Free Sabbath Challenge", saves: "3.1k", category: "Digital Life", color: "#6B4FBB" },
  { title: "The 5AM Prayer Walk Habit", saves: "2.8k", category: "Health", color: "#4FBBAA" },
  { title: "Biblical Conflict Resolution Framework", saves: "2.1k", category: "Relationships", color: "#BB4F7A" },
  { title: "Meal Prep With a Gratitude Ritual", saves: "1.9k", category: "Productivity", color: "#4F8FBB" },
];

const categories = [
  { label: "All", icon: Zap },
  { label: "Money", icon: DollarSign },
  { label: "Relationships", icon: Heart },
  { label: "Productivity", icon: Briefcase },
  { label: "Health", icon: Star },
  { label: "Parenting", icon: Baby },
  { label: "Sleep", icon: Moon },
  { label: "Digital Life", icon: Smartphone },
];

const hacks = [
  {
    title: "The Screen Time Fast",
    verse: "Psalm 46:10 — 'Be still and know that I am God.'",
    difficulty: "Easy",
    diffColor: "#4FBBAA",
    impact: 4,
    category: "Digital Life",
    catColor: "#6B4FBB",
    saves: 3100,
    description: "Delete your most addictive app for 7 days. Replace the scroll time with 10 minutes of silence or Scripture.",
  },
  {
    title: "The Sabbath Rest Protocol",
    verse: "Exodus 20:8 — 'Remember the Sabbath day, to keep it holy.'",
    difficulty: "Life-changing",
    diffColor: "#00FF88",
    impact: 5,
    category: "Productivity",
    catColor: "#4F8FBB",
    saves: 5820,
    description: "One full day off — no work, no email, no hustle. Schedule it like a meeting that cannot be moved.",
  },
  {
    title: "The Gratitude Journal Method",
    verse: "1 Thessalonians 5:18 — 'In everything give thanks.'",
    difficulty: "Easy",
    diffColor: "#4FBBAA",
    impact: 5,
    category: "Health",
    catColor: "#4FBBAA",
    saves: 4410,
    description: "Three specific things you're grateful for every morning, one prayer of thanks every night. 21-day streak changes your brain.",
  },
  {
    title: "Biblical Conflict Resolution",
    verse: "Matthew 18:15 — 'Go and tell him his fault, between you and him alone.'",
    difficulty: "Medium",
    diffColor: "#BB7A4F",
    impact: 5,
    category: "Relationships",
    catColor: "#BB4F7A",
    saves: 2100,
    description: "Follow the Matthew 18 framework: private conversation first, then bring a witness, then community. Works for marriages, friendships, and workplaces.",
  },
  {
    title: "The Debt Snowball + Tithe",
    verse: "Proverbs 22:7 — 'The borrower is slave to the lender.'",
    difficulty: "Medium",
    diffColor: "#BB7A4F",
    impact: 4,
    category: "Money",
    catColor: "#00FF88",
    saves: 1870,
    description: "Pay minimum on all debts, attack the smallest one aggressively. Keep tithing while doing it — watch the supernatural provision.",
  },
  {
    title: "The Prayer Walk",
    verse: "Psalm 119:105 — 'Your word is a lamp to my feet.'",
    difficulty: "Easy",
    diffColor: "#4FBBAA",
    impact: 4,
    category: "Health",
    catColor: "#4FBBAA",
    saves: 2800,
    description: "20-minute walk every morning with no phone. Talk to God out loud like a conversation. Exercise and intercession, one habit.",
  },
  {
    title: "The Digital Detox Weekend",
    verse: "Romans 12:2 — 'Do not conform to the pattern of this world.'",
    difficulty: "Life-changing",
    diffColor: "#00FF88",
    impact: 5,
    category: "Digital Life",
    catColor: "#6B4FBB",
    saves: 1540,
    description: "Friday 6PM to Sunday 6PM: no social media, limited phone use, more real-world connection. Do it quarterly.",
  },
  {
    title: "Meal Prep With Gratitude",
    verse: "1 Corinthians 10:31 — 'Whatever you eat or drink, do it all for the glory of God.'",
    difficulty: "Easy",
    diffColor: "#4FBBAA",
    impact: 3,
    category: "Productivity",
    catColor: "#4F8FBB",
    saves: 1900,
    description: "Sunday meal prep = 45 minutes of prayer podcasts + preparing 5 days of healthy food. Sanctify your kitchen time.",
  },
  {
    title: "Family Devotional in 10 Minutes",
    verse: "Deuteronomy 6:7 — 'Talk about them when you sit at home.'",
    difficulty: "Easy",
    diffColor: "#4FBBAA",
    impact: 5,
    category: "Parenting",
    catColor: "#BB7A4F",
    saves: 3340,
    description: "One verse, one question, one prayer around the dinner table. 10 minutes max. Kids remember these for decades.",
  },
  {
    title: "The Sleep Sabbath",
    verse: "Psalm 127:2 — 'He grants sleep to those he loves.'",
    difficulty: "Medium",
    diffColor: "#BB7A4F",
    impact: 5,
    category: "Sleep",
    catColor: "#6B4FBB",
    saves: 2760,
    description: "One night per week with zero screens after 8PM. Replace scrolling with Scripture reading, journaling, or light stretching. Quality sleep is an act of trust in God.",
  },
  {
    title: "The 10-Minute Wind-Down Prayer",
    verse: "Psalm 4:8 — 'In peace I will lie down and sleep.'",
    difficulty: "Easy",
    diffColor: "#4FBBAA",
    impact: 4,
    category: "Sleep",
    catColor: "#6B4FBB",
    saves: 1890,
    description: "Before bed: write down three things that happened today, one thing you're anxious about (give it to God), and one thing you're grateful for. Brain-dump to clear the mental queue.",
  },
  {
    title: "Biblical Parenting Cheat Sheet",
    verse: "Proverbs 22:6 — 'Train up a child in the way he should go.'",
    difficulty: "Medium",
    diffColor: "#BB7A4F",
    impact: 5,
    category: "Parenting",
    catColor: "#BB7A4F",
    saves: 4120,
    description: "Three frameworks in one: (1) Connect before you correct. (2) Discipline addresses the heart, not just the behavior. (3) Your child needs to see your faith, not just hear about it.",
  },
  {
    title: "The 10-10-80 Giving Method",
    verse: "Malachi 3:10 — 'Bring the whole tithe into the storehouse.'",
    difficulty: "Life-changing",
    diffColor: "#00FF88",
    impact: 5,
    category: "Money",
    catColor: "#00FF88",
    saves: 4790,
    description: "Give 10% to God first. Save 10% next. Live on 80%. This single discipline rewires your relationship with money more than any budget app. Try it for 90 days.",
  },
  {
    title: "The Relationship Health Check",
    verse: "Proverbs 27:17 — 'As iron sharpens iron, so one person sharpens another.'",
    difficulty: "Medium",
    diffColor: "#BB7A4F",
    impact: 4,
    category: "Relationships",
    catColor: "#BB4F7A",
    saves: 1650,
    description: "Monthly 5-minute review of your 5 closest relationships: Are you listening more than talking? Are you serving or being served? Who needs a phone call this week?",
  },
];

const hackOfWeek = {
  title: "The 5-5-5 Morning Formula",
  verse: "Lamentations 3:22–23",
  verseText: "'His mercies are new every morning; great is your faithfulness.'",
  description:
    "The first 15 minutes of your morning sets the tone for your entire day. Split them into three 5-minute blocks: (1) Bible — read one passage, slowly. (2) Prayer — one thing you're worried about, one thing you're grateful for, one request. (3) Movement — stretch, walk around the block, or do 20 push-ups. No phone until all three are done.",
  steps: [
    { num: 1, title: "5 Min Bible", detail: "One passage, read slowly. Underline what stands out. No commentary, just you and the text." },
    { num: 2, title: "5 Min Prayer", detail: "Three things: one worry to surrender, one gratitude to name, one ask to make bold." },
    { num: 3, title: "5 Min Movement", detail: "Your body is a temple. Wake it up. Walk, stretch, breathe. Phone stays face-down." },
  ],
  testimonials: [
    { name: "Priya K.", quote: "Changed my whole day. I'm less reactive, more present." },
    { name: "DeShawn M.", quote: "I've done this for 90 days straight. My prayer life is the best it's ever been." },
  ],
  saves: 7420,
  category: "Productivity",
};

const mostSaved = [
  { rank: 1, title: "The Sabbath Rest Protocol", saves: "5,820", category: "Productivity" },
  { rank: 2, title: "The 10-10-80 Money Method", saves: "4,790", category: "Money" },
  { rank: 3, title: "The Gratitude Journal Method", saves: "4,410", category: "Health" },
  { rank: 4, title: "Family Devotional in 10 Minutes", saves: "3,340", category: "Parenting" },
  { rank: 5, title: "The Screen Time Fast", saves: "3,100", category: "Digital Life" },
];

export default function LifeHacksPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [submitted, setSubmitted] = useState(false);
  const [hackTitle, setHackTitle] = useState("");
  const [savedHacks, setSavedHacks] = useState<Set<string>>(() => {
    try {
      const s = localStorage.getItem("vine_lifehacks_saved");
      return s ? new Set(JSON.parse(s) as string[]) : new Set();
    } catch { return new Set(); }
  });
  const [featuredSaved, setFeaturedSaved] = useState(() => {
    try { return localStorage.getItem("vine_lifehacks_featured") === "1"; } catch { return false; }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_lifehacks_saved", JSON.stringify([...savedHacks])); } catch {}
  }, [savedHacks]);

  useEffect(() => {
    try { if (featuredSaved) localStorage.setItem("vine_lifehacks_featured", "1"); else localStorage.removeItem("vine_lifehacks_featured"); } catch {}
  }, [featuredSaved]);

  const toggleSaveHack = (title: string) => {
    setSavedHacks((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  const filteredHacks = activeCategory === "All"
    ? hacks
    : hacks.filter((h) => h.category === activeCategory);

  const handleSubmit = () => {
    if (!hackTitle.trim()) return;
    setSubmitted(true);
    setHackTitle("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={{ background: "#07070F", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ paddingTop: "80px" }}>
        {/* HERO */}
        <section
          style={{
            background: "linear-gradient(180deg, rgba(0,255,136,0.14) 0%, rgba(107,79,187,0.06) 60%, transparent 100%)",
            padding: "72px 0 56px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0,255,136,0.1)",
                border: "1px solid rgba(0,255,136,0.25)",
                borderRadius: "100px",
                padding: "6px 16px",
                marginBottom: "24px",
              }}
            >
              <Zap size={14} style={{ color: "#00FF88" }} />
              <span style={{ color: "#00FF88", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em" }}>
                BIBLICAL LIFE HACKS
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 68px)",
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: "20px",
                background: "linear-gradient(135deg, #00FF88 0%, #FFFFFF 50%, #00FF88 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Live Better. Live Biblical.
            </h1>
            <p style={{ color: "#8A8AA8", fontSize: "18px", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
              Scripture has been giving life advice for 3,500 years. We just made it easier to apply. Practical faith for your money, relationships, mind, and mornings.
            </p>
          </div>
        </section>

        {/* HOT RIGHT NOW — HORIZONTAL SCROLL */}
        <div style={{ padding: "32px 0 0", borderBottom: "1px solid #1E1E32" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ color: "#00FF88", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px" }}>
              🔥 HOT RIGHT NOW
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              padding: "0 24px 24px",
              overflowX: "auto",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {trending.map((item, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  background: "#12121F",
                  border: "1px solid #1E1E32",
                  borderRadius: "14px",
                  padding: "16px 20px",
                  cursor: "pointer",
                  minWidth: "220px",
                  borderTop: `3px solid ${item.color}`,
                }}
              >
                <span
                  style={{
                    background: `${item.color}18`,
                    color: item.color,
                    borderRadius: "100px",
                    padding: "2px 8px",
                    fontSize: "10px",
                    fontWeight: 700,
                    display: "inline-block",
                    marginBottom: "8px",
                  }}
                >
                  {item.category}
                </span>
                <p style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "14px", marginBottom: "8px", lineHeight: 1.3 }}>
                  {item.title}
                </p>
                <p style={{ color: "#6A6A88", fontSize: "12px" }}>
                  <Bookmark size={11} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                  {item.saves} saves
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 80px" }}>
          {/* CATEGORY NAV */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              padding: "28px 0 32px",
              overflowX: "auto",
              flexWrap: "wrap",
            }}
          >
            {categories.map((cat, i) => {
              const isActive = activeCategory === cat.label;
              return (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat.label)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "100px",
                    border: isActive ? "1px solid rgba(0,255,136,0.5)" : "1px solid #1E1E32",
                    background: isActive ? "rgba(0,255,136,0.12)" : "transparent",
                    color: isActive ? "#00FF88" : "#8A8AA8",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    flexShrink: 0,
                    transition: "all 0.15s",
                  }}
                >
                  <cat.icon size={13} />
                  {cat.label}
                  {isActive && activeCategory !== "All" && (
                    <span style={{ fontSize: "10px", background: "rgba(0,255,136,0.2)", borderRadius: "10px", padding: "1px 6px" }}>
                      {filteredHacks.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* FEATURED HACK */}
          <section style={{ marginBottom: "56px" }}>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(0,255,136,0.12) 0%, rgba(107,79,187,0.08) 100%)",
                border: "1px solid rgba(0,255,136,0.25)",
                borderRadius: "24px",
                padding: "40px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
                <span
                  style={{
                    background: "rgba(0,255,136,0.15)",
                    border: "1px solid rgba(0,255,136,0.35)",
                    color: "#00FF88",
                    borderRadius: "100px",
                    padding: "4px 12px",
                    fontSize: "11px",
                    fontWeight: 700,
                  }}
                >
                  ⭐ FEATURED HACK
                </span>
                <span style={{ color: "#4F8FBB", fontSize: "12px", fontWeight: 600 }}>Money</span>
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: 900, color: "#F2F2F8", marginBottom: "12px" }}>
                The 10-10-80 Money Method
              </h2>
              <p style={{ color: "#6A6A88", fontSize: "14px", fontStyle: "italic", marginBottom: "20px" }}>
                "Bring the whole tithe into the storehouse." — Malachi 3:10
              </p>
              <p style={{ color: "#8A8AA8", fontSize: "15px", lineHeight: 1.75, marginBottom: "28px" }}>
                Give 10% to God first. Save 10% for your future self. Live fully on 80%. This simple allocation system, rooted in the biblical principle of the tithe, has helped thousands of Christians break the cycle of financial anxiety and experience supernatural provision.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "28px" }}>
                {[
                  { pct: "10%", label: "Give", detail: "Tithe first — it's an act of worship, not an obligation." },
                  { pct: "10%", label: "Save", detail: "Emergency fund, then retirement, then sinking funds." },
                  { pct: "80%", label: "Live", detail: "Housing, food, bills, joy. Live freely within this number." },
                ].map((step, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: "16px",
                      padding: "20px",
                      textAlign: "center",
                    }}
                  >
                    <p style={{ fontSize: "32px", fontWeight: 900, color: "#00FF88", marginBottom: "4px" }}>{step.pct}</p>
                    <p style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "15px", marginBottom: "8px" }}>{step.label}</p>
                    <p style={{ color: "#8A8AA8", fontSize: "12px", lineHeight: 1.6 }}>{step.detail}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  { name: "Tanisha R.", quote: "I paid off $18k in debt in 18 months using this method. God kept His promise." },
                  { name: "Kyle M.", quote: "Skeptical at first. 6 months in, I had my first savings account ever." },
                ].map((t, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#0F0F1C",
                      border: "1px solid #1E1E32",
                      borderRadius: "12px",
                      padding: "16px",
                    }}
                  >
                    <p style={{ color: "#C0C0D8", fontSize: "13px", fontStyle: "italic", lineHeight: 1.6, marginBottom: "8px" }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p style={{ color: "#00FF88", fontSize: "12px", fontWeight: 700 }}>— {t.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* HACK GRID */}
          <section style={{ marginBottom: "56px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "24px" }}>
              All Hacks
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
              {filteredHacks.length === 0 ? (
                <div style={{ gridColumn: "1 / -1", padding: "40px", textAlign: "center", color: "#6A6A88" }}>
                  <p style={{ fontSize: "32px", marginBottom: "12px" }}>🔍</p>
                  <p style={{ fontWeight: 700, color: "#F2F2F8", marginBottom: "4px" }}>No hacks in this category yet</p>
                  <p style={{ fontSize: "14px" }}>Be the first to submit one!</p>
                </div>
              ) : filteredHacks.map((hack, i) => (
                <div
                  key={i}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "20px",
                    padding: "24px",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px", gap: "8px" }}>
                    <span
                      style={{
                        background: `${hack.catColor}18`,
                        color: hack.catColor,
                        borderRadius: "100px",
                        padding: "3px 10px",
                        fontSize: "11px",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {hack.category}
                    </span>
                    <span
                      style={{
                        background: `${hack.diffColor}18`,
                        color: hack.diffColor,
                        borderRadius: "100px",
                        padding: "3px 10px",
                        fontSize: "11px",
                        fontWeight: 600,
                        flexShrink: 0,
                      }}
                    >
                      {hack.difficulty}
                    </span>
                  </div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 800, fontSize: "16px", marginBottom: "8px", lineHeight: 1.3 }}>
                    {hack.title}
                  </h3>
                  <p style={{ color: "#6A6A88", fontSize: "12px", fontStyle: "italic", marginBottom: "10px", lineHeight: 1.5 }}>
                    {hack.verse}
                  </p>
                  <p style={{ color: "#8A8AA8", fontSize: "13px", lineHeight: 1.65, marginBottom: "16px", flex: 1 }}>
                    {hack.description}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "2px" }}>
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star
                          key={si}
                          size={13}
                          fill={si < hack.impact ? "#00FF88" : "transparent"}
                          style={{ color: si < hack.impact ? "#00FF88" : "#1E1E32" }}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => toggleSaveHack(hack.title)}
                      style={{
                        display: "flex", alignItems: "center", gap: "5px",
                        background: savedHacks.has(hack.title) ? "rgba(0,255,136,0.1)" : "transparent",
                        border: savedHacks.has(hack.title) ? "1px solid rgba(0,255,136,0.3)" : "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "8px", padding: "4px 10px", cursor: "pointer",
                        color: savedHacks.has(hack.title) ? "#00FF88" : "#6A6A88", fontSize: "12px", fontWeight: 600,
                        transition: "all 0.15s",
                      }}
                    >
                      <Bookmark size={11} fill={savedHacks.has(hack.title) ? "#00FF88" : "none"} />
                      {savedHacks.has(hack.title) ? "Saved" : `${hack.saves.toLocaleString()}`}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* HACK OF THE WEEK */}
          <section style={{ marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <Trophy size={22} style={{ color: "#00FF88" }} />
              <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8" }}>Hack of the Week</h2>
            </div>
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "24px",
                padding: "40px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                <span
                  style={{
                    background: "rgba(107,79,187,0.15)",
                    border: "1px solid rgba(107,79,187,0.3)",
                    color: "#8B6FDB",
                    borderRadius: "100px",
                    padding: "4px 12px",
                    fontSize: "11px",
                    fontWeight: 700,
                  }}
                >
                  {hackOfWeek.category}
                </span>
                <span style={{ color: "#6A6A88", fontSize: "12px" }}>
                  <Bookmark size={11} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                  {hackOfWeek.saves.toLocaleString()} saves this week
                </span>
              </div>
              <h3 style={{ fontSize: "26px", fontWeight: 900, color: "#F2F2F8", marginBottom: "8px" }}>
                {hackOfWeek.title}
              </h3>
              <p style={{ color: "#6A6A88", fontStyle: "italic", fontSize: "14px", marginBottom: "20px" }}>
                {hackOfWeek.verse} — {hackOfWeek.verseText}
              </p>
              <p style={{ color: "#8A8AA8", fontSize: "15px", lineHeight: 1.75, marginBottom: "28px" }}>
                {hackOfWeek.description}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px", marginBottom: "28px" }}>
                {hackOfWeek.steps.map((step, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#0F0F1C",
                      border: "1px solid #1E1E32",
                      borderRadius: "14px",
                      padding: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "rgba(0,255,136,0.15)",
                        color: "#00FF88",
                        fontSize: "14px",
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "12px",
                      }}
                    >
                      {step.num}
                    </div>
                    <p style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{step.title}</p>
                    <p style={{ color: "#8A8AA8", fontSize: "12px", lineHeight: 1.6 }}>{step.detail}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {hackOfWeek.testimonials.map((t, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#0F0F1C",
                      borderRadius: "12px",
                      padding: "16px",
                      border: "1px solid #1E1E32",
                    }}
                  >
                    <p style={{ color: "#C0C0D8", fontSize: "13px", fontStyle: "italic", lineHeight: 1.6, marginBottom: "8px" }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p style={{ color: "#00FF88", fontSize: "12px", fontWeight: 700 }}>— {t.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SUBMIT YOUR HACK */}
          <section style={{ marginBottom: "56px" }}>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(107,79,187,0.14) 0%, rgba(0,255,136,0.07) 100%)",
                border: "1px solid rgba(0,255,136,0.2)",
                borderRadius: "24px",
                padding: "40px",
              }}
            >
              <div style={{ maxWidth: "600px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "8px" }}>
                  Submit Your Hack
                </h2>
                <p style={{ color: "#8A8AA8", fontSize: "15px", lineHeight: 1.7, marginBottom: "28px" }}>
                  Found a biblical principle that changed your daily life? Share it with the Vine community. The best hacks get featured.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <input
                    value={hackTitle}
                    onChange={(e) => setHackTitle(e.target.value)}
                    placeholder="Hack title (e.g. 'The 2-Minute Evening Prayer Reset')"
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: "12px",
                      padding: "14px 16px",
                      color: "#F2F2F8",
                      fontSize: "14px",
                      outline: "none",
                      width: "100%",
                    }}
                  />
                  <textarea
                    readOnly
                    placeholder="Describe the hack in 2–3 sentences. What do you do? How does it help?"
                    rows={3}
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: "12px",
                      padding: "14px 16px",
                      color: "#F2F2F8",
                      fontSize: "14px",
                      outline: "none",
                      width: "100%",
                      resize: "vertical",
                    }}
                  />
                  <input
                    readOnly
                    placeholder="Scripture basis (e.g. 'Proverbs 16:3')"
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: "12px",
                      padding: "14px 16px",
                      color: "#F2F2F8",
                      fontSize: "14px",
                      outline: "none",
                      width: "100%",
                    }}
                  />
                  {submitted ? (
                    <div style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.25)", borderRadius: "12px", padding: "14px 28px", color: "#00FF88", fontWeight: 700, fontSize: "15px", textAlign: "center" }}>
                      ✓ Hack submitted! We&apos;ll review it shortly.
                    </div>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        background: hackTitle.trim() ? "linear-gradient(135deg, #00FF88, #B8922A)" : "#1E1E32",
                        color: hackTitle.trim() ? "#07070F" : "#4A4A68",
                        border: "none",
                        borderRadius: "12px",
                        padding: "14px 28px",
                        fontWeight: 800,
                        fontSize: "15px",
                        cursor: hackTitle.trim() ? "pointer" : "not-allowed",
                        alignSelf: "flex-start",
                        transition: "all 0.2s",
                      }}
                    >
                      <Send size={15} /> Submit Hack
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* MOST SAVED THIS MONTH */}
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <TrendingUp size={22} style={{ color: "#00FF88" }} />
              <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8" }}>Most Saved This Month</h2>
            </div>
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              {mostSaved.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "18px 24px",
                    borderBottom: i < mostSaved.length - 1 ? "1px solid #1E1E32" : "none",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: i === 0 ? "rgba(0,255,136,0.2)" : "rgba(255,255,255,0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: 800,
                      color: i === 0 ? "#00FF88" : "#6A6A88",
                      flexShrink: 0,
                    }}
                  >
                    {item.rank}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "15px", marginBottom: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.title}
                    </p>
                    <p style={{ color: "#6A6A88", fontSize: "12px" }}>{item.category}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                    <Bookmark size={14} style={{ color: "#00FF88" }} />
                    <span style={{ color: "#00FF88", fontSize: "14px", fontWeight: 700 }}>{item.saves}</span>
                  </div>
                  <ChevronRight size={16} style={{ color: "#6A6A88", flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
