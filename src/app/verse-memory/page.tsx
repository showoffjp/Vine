"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Plus, CheckCircle2, RotateCcw, ChevronRight, X, Sparkles, Trophy, Flame, BookOpen } from "lucide-react";

interface MemoryVerse {
  id: number;
  reference: string;
  text: string;
  category: string;
  mastered: boolean;
  reviewCount: number;
  addedDate: string;
  lastReviewed?: string;
}

const seedVerses: MemoryVerse[] = [
  {
    id: 1,
    reference: "Philippians 4:13",
    text: "I can do all this through him who gives me strength.",
    category: "Strength",
    mastered: false,
    reviewCount: 3,
    addedDate: "May 1, 2026",
  },
  {
    id: 2,
    reference: "John 3:16",
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    category: "Salvation",
    mastered: true,
    reviewCount: 12,
    addedDate: "Apr 10, 2026",
    lastReviewed: "May 25, 2026",
  },
  {
    id: 3,
    reference: "Romans 8:28",
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    category: "Trust",
    mastered: false,
    reviewCount: 6,
    addedDate: "Apr 22, 2026",
  },
  {
    id: 4,
    reference: "Proverbs 3:5-6",
    text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    category: "Trust",
    mastered: true,
    reviewCount: 15,
    addedDate: "Mar 15, 2026",
    lastReviewed: "May 24, 2026",
  },
  {
    id: 5,
    reference: "Isaiah 41:10",
    text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    category: "Fear",
    mastered: false,
    reviewCount: 2,
    addedDate: "May 15, 2026",
  },
  {
    id: 6,
    reference: "Psalm 23:1",
    text: "The Lord is my shepherd, I lack nothing.",
    category: "Provision",
    mastered: true,
    reviewCount: 20,
    addedDate: "Jan 5, 2026",
    lastReviewed: "May 26, 2026",
  },
];

const categories = ["All", "Strength", "Salvation", "Trust", "Fear", "Provision", "Peace", "Identity", "Love"];

const popularVerses = [
  { reference: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest.", category: "Peace" },
  { reference: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", category: "Trust" },
  { reference: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind.", category: "Identity" },
  { reference: "1 Corinthians 13:4-5", text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking.", category: "Love" },
];

type QuizMode = "hidden" | "partial" | "none";

export default function VerseMemoryPage() {
  const [verses, setVerses] = useState<MemoryVerse[]>(() => {
    try {
      const s = localStorage.getItem("vine_verse_memory");
      return s ? (JSON.parse(s) as MemoryVerse[]) : seedVerses;
    } catch { return seedVerses; }
  });

  const [activeCategory, setActiveCategory] = useState("All");
  const [addingVerse, setAddingVerse] = useState(false);
  const [reviewingId, setReviewingId] = useState<number | null>(null);
  const [quizMode, setQuizMode] = useState<QuizMode>("hidden");
  const [userInput, setUserInput] = useState("");
  const [quizResult, setQuizResult] = useState<"correct" | "close" | "wrong" | null>(null);
  const [newVerse, setNewVerse] = useState({ reference: "", text: "", category: "Trust" });
  const [savedFlash, setSavedFlash] = useState(false);

  useEffect(() => {
    try { localStorage.setItem("vine_verse_memory", JSON.stringify(verses)); } catch {}
  }, [verses]);

  const filtered = activeCategory === "All"
    ? verses
    : verses.filter((v) => v.category === activeCategory);

  const mastered = verses.filter((v) => v.mastered).length;
  const reviewing = verses.filter((v) => !v.mastered).length;

  const toggleMastered = (id: number) => {
    setVerses((prev) =>
      prev.map((v) => v.id === id ? { ...v, mastered: !v.mastered, lastReviewed: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) } : v)
    );
  };

  const markReviewed = (id: number) => {
    setVerses((prev) =>
      prev.map((v) =>
        v.id === id
          ? { ...v, reviewCount: v.reviewCount + 1, lastReviewed: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) }
          : v
      )
    );
  };

  const addVerse = () => {
    if (!newVerse.reference.trim() || !newVerse.text.trim()) return;
    const verse: MemoryVerse = {
      id: Date.now(),
      reference: newVerse.reference.trim(),
      text: newVerse.text.trim(),
      category: newVerse.category,
      mastered: false,
      reviewCount: 0,
      addedDate: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    };
    setVerses((prev) => [verse, ...prev]);
    setNewVerse({ reference: "", text: "", category: "Trust" });
    setSavedFlash(true);
    setTimeout(() => { setSavedFlash(false); setAddingVerse(false); }, 1500);
  };

  const addPopular = (v: typeof popularVerses[0]) => {
    if (verses.some((existing) => existing.reference === v.reference)) return;
    const verse: MemoryVerse = {
      id: Date.now(),
      reference: v.reference,
      text: v.text,
      category: v.category,
      mastered: false,
      reviewCount: 0,
      addedDate: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    };
    setVerses((prev) => [verse, ...prev]);
  };

  const reviewingVerse = reviewingId != null ? verses.find((v) => v.id === reviewingId) ?? null : null;

  const checkAnswer = () => {
    if (!reviewingVerse) return;
    const target = reviewingVerse.text.toLowerCase().replace(/[^a-z0-9 ]/g, "");
    const input = userInput.toLowerCase().replace(/[^a-z0-9 ]/g, "");
    const targetWords = target.split(/\s+/);
    const inputWords = input.split(/\s+/);
    const matchCount = inputWords.filter((w, i) => targetWords[i] === w).length;
    const pct = matchCount / targetWords.length;
    if (pct >= 0.95) setQuizResult("correct");
    else if (pct >= 0.7) setQuizResult("close");
    else setQuizResult("wrong");
    markReviewed(reviewingVerse.id);
  };

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Brain size={20} style={{ color: "#00FF88" }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>Scripture Memory</span>
              </div>
              <h1 className="text-3xl font-black">Verse Memory</h1>
              <p className="text-sm mt-1" style={{ color: "#6A6A88" }}>
                {verses.length} verses · {mastered} mastered · {reviewing} in progress
              </p>
            </div>
            <button
              onClick={() => { setAddingVerse(true); setReviewingId(null); }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-black"
              style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
            >
              <Plus size={16} /> Add Verse
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { icon: Brain, label: "Total Verses", value: verses.length, color: "#6B4FBB" },
              { icon: Trophy, label: "Mastered", value: mastered, color: "#00FF88" },
              { icon: Flame, label: "In Review", value: reviewing, color: "#F59E0B" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-2xl p-4 flex items-center gap-3" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${stat.color}18` }}>
                    <Icon size={18} style={{ color: stat.color }} />
                  </div>
                  <div>
                    <p className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</p>
                    <p className="text-xs" style={{ color: "#6A6A88" }}>{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-6">
            {/* Left: verse list */}
            <div className="flex-1 min-w-0">
              {/* Add verse form */}
              {addingVerse && (
                <div className="rounded-2xl p-6 mb-6" style={{ background: "#12121F", border: "1px solid rgba(0,255,136,0.2)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-black text-base">Add a Verse</h2>
                    <button onClick={() => setAddingVerse(false)} style={{ color: "#4A4A68" }}><X size={16} /></button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <input
                      value={newVerse.reference}
                      onChange={(e) => setNewVerse((p) => ({ ...p, reference: e.target.value }))}
                      placeholder="Reference (e.g. John 3:16)"
                      className="px-3 py-2 rounded-xl text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                    />
                    <select
                      value={newVerse.category}
                      onChange={(e) => setNewVerse((p) => ({ ...p, category: e.target.value }))}
                      className="px-3 py-2 rounded-xl text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                    >
                      {categories.filter((c) => c !== "All").map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    value={newVerse.text}
                    onChange={(e) => setNewVerse((p) => ({ ...p, text: e.target.value }))}
                    placeholder="Paste the full verse text..."
                    rows={3}
                    className="w-full px-3 py-2 rounded-xl text-sm outline-none resize-none mb-4"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8", lineHeight: "1.7" }}
                  />
                  <div className="flex justify-end">
                    <button
                      onClick={addVerse}
                      disabled={!newVerse.reference.trim() || !newVerse.text.trim()}
                      className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold"
                      style={{
                        background: newVerse.reference && newVerse.text
                          ? (savedFlash ? "rgba(0,255,136,0.2)" : "linear-gradient(135deg, #00FF88, #00BB55)")
                          : "#1E1E32",
                        color: newVerse.reference && newVerse.text ? (savedFlash ? "#00FF88" : "#07070F") : "#4A4A68",
                      }}
                    >
                      {savedFlash ? <><Sparkles size={12} /> Saved!</> : "Save Verse"}
                    </button>
                  </div>
                </div>
              )}

              {/* Review modal */}
              {reviewingVerse && (
                <div className="rounded-2xl p-6 mb-6" style={{ background: "#12121F", border: "1px solid rgba(107,79,187,0.3)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-black text-base">
                      Practice: <span style={{ color: "#6B4FBB" }}>{reviewingVerse.reference}</span>
                    </h2>
                    <button onClick={() => { setReviewingId(null); setQuizResult(null); setUserInput(""); setQuizMode("hidden"); }} style={{ color: "#4A4A68" }}>
                      <X size={16} />
                    </button>
                  </div>

                  {quizMode === "none" && (
                    <div className="p-4 rounded-xl mb-4" style={{ background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.1)" }}>
                      <p className="text-sm leading-relaxed italic" style={{ color: "#C0C0D8" }}>
                        &ldquo;{reviewingVerse.text}&rdquo;
                      </p>
                    </div>
                  )}

                  {quizMode === "hidden" && !quizResult && (
                    <div className="mb-4">
                      <p className="text-sm mb-3" style={{ color: "#6A6A88" }}>
                        Type the verse from memory. Don&apos;t worry about perfect punctuation.
                      </p>
                      <textarea
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type the verse here..."
                        rows={4}
                        className="w-full px-3 py-2 rounded-xl text-sm outline-none resize-none mb-3"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(107,79,187,0.2)", color: "#F2F2F8", lineHeight: "1.7" }}
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={checkAnswer}
                          disabled={!userInput.trim()}
                          className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold"
                          style={{
                            background: userInput.trim() ? "linear-gradient(135deg, #6B4FBB, #8B6FDB)" : "#1E1E32",
                            color: userInput.trim() ? "#fff" : "#4A4A68",
                          }}
                        >
                          <CheckCircle2 size={13} /> Check Answer
                        </button>
                        <button
                          onClick={() => setQuizMode("none")}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
                          style={{ background: "rgba(255,255,255,0.04)", color: "#6A6A88" }}
                        >
                          <BookOpen size={13} /> Show Verse
                        </button>
                      </div>
                    </div>
                  )}

                  {quizResult && (
                    <div>
                      <div
                        className="p-4 rounded-xl mb-4"
                        style={{
                          background: quizResult === "correct" ? "rgba(0,255,136,0.08)" : quizResult === "close" ? "rgba(245,158,11,0.08)" : "rgba(239,68,68,0.08)",
                          border: `1px solid ${quizResult === "correct" ? "rgba(0,255,136,0.25)" : quizResult === "close" ? "rgba(245,158,11,0.25)" : "rgba(239,68,68,0.25)"}`,
                        }}
                      >
                        <p className="font-bold text-sm mb-1" style={{ color: quizResult === "correct" ? "#00FF88" : quizResult === "close" ? "#F59E0B" : "#EF4444" }}>
                          {quizResult === "correct" ? "✓ Excellent! Almost word-perfect." : quizResult === "close" ? "✓ Very close! Review the differences below." : "Keep practicing — you'll get there!"}
                        </p>
                        <p className="text-xs italic leading-relaxed" style={{ color: "#C0C0D8" }}>
                          &ldquo;{reviewingVerse.text}&rdquo;
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => { setQuizResult(null); setUserInput(""); setQuizMode("hidden"); }}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
                          style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}
                        >
                          <RotateCcw size={13} /> Try Again
                        </button>
                        {quizResult === "correct" && (
                          <button
                            onClick={() => { toggleMastered(reviewingVerse.id); setReviewingId(null); setQuizResult(null); setUserInput(""); setQuizMode("hidden"); }}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold"
                            style={{ background: "rgba(0,255,136,0.15)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.3)" }}
                          >
                            <Trophy size={13} /> Mark as Mastered
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Category filter */}
              <div className="flex gap-2 flex-wrap mb-5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                    style={{
                      background: activeCategory === cat ? "rgba(0,255,136,0.15)" : "rgba(255,255,255,0.03)",
                      border: activeCategory === cat ? "1px solid rgba(0,255,136,0.4)" : "1px solid rgba(255,255,255,0.06)",
                      color: activeCategory === cat ? "#00FF88" : "#8A8AA8",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Verse cards */}
              <div className="space-y-3">
                {filtered.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-3xl mb-3">📖</p>
                    <p className="font-bold" style={{ color: "#F2F2F8" }}>No verses in this category</p>
                    <p className="text-sm mt-1" style={{ color: "#6A6A88" }}>Add your first verse or try a different category</p>
                  </div>
                )}
                {filtered.map((verse) => (
                  <div
                    key={verse.id}
                    className="rounded-2xl p-5"
                    style={{
                      background: verse.mastered ? "rgba(0,255,136,0.04)" : "#12121F",
                      border: `1px solid ${verse.mastered ? "rgba(0,255,136,0.2)" : verse.id === reviewingId ? "rgba(107,79,187,0.3)" : "#1E1E32"}`,
                    }}
                  >
                    <div className="flex items-start justify-between mb-2 gap-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-black text-sm" style={{ color: verse.mastered ? "#00FF88" : "#F2F2F8" }}>
                          {verse.reference}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: "rgba(107,79,187,0.12)", color: "#8B6FDB" }}
                        >
                          {verse.category}
                        </span>
                        {verse.mastered && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: "rgba(0,255,136,0.12)", color: "#00FF88" }}>
                            ✓ Mastered
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => { setReviewingId(verse.id === reviewingId ? null : verse.id); setQuizResult(null); setUserInput(""); setQuizMode("hidden"); }}
                          className="text-xs px-3 py-1.5 rounded-lg font-semibold transition-all"
                          style={{
                            background: verse.id === reviewingId ? "rgba(107,79,187,0.2)" : "rgba(255,255,255,0.04)",
                            border: `1px solid ${verse.id === reviewingId ? "rgba(107,79,187,0.4)" : "rgba(255,255,255,0.08)"}`,
                            color: verse.id === reviewingId ? "#8B6FDB" : "#6A6A88",
                          }}
                        >
                          Practice
                        </button>
                        <button
                          onClick={() => toggleMastered(verse.id)}
                          className="p-1.5 rounded-lg transition-all"
                          style={{ color: verse.mastered ? "#00FF88" : "#4A4A68" }}
                          title={verse.mastered ? "Mark as in-progress" : "Mark as mastered"}
                        >
                          <CheckCircle2 size={15} fill={verse.mastered ? "rgba(0,255,136,0.2)" : "none"} />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed italic mb-3" style={{ color: "#8A8AA8" }}>
                      &ldquo;{verse.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 text-xs" style={{ color: "#4A4A68" }}>
                      <span>Added {verse.addedDate}</span>
                      <span>·</span>
                      <span>{verse.reviewCount} review{verse.reviewCount !== 1 ? "s" : ""}</span>
                      {verse.lastReviewed && (
                        <>
                          <span>·</span>
                          <span>Last: {verse.lastReviewed}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0 space-y-4">
              {/* Progress */}
              <div className="rounded-2xl p-5" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <h3 className="font-black text-sm mb-4" style={{ color: "#F2F2F8" }}>Your Progress</h3>
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1.5" style={{ color: "#6A6A88" }}>
                    <span>Mastered</span>
                    <span style={{ color: "#00FF88" }}>{mastered}/{verses.length}</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "#1E1E32" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${verses.length ? (mastered / verses.length) * 100 : 0}%`,
                        background: "linear-gradient(90deg, #00FF88, #44FFAA)",
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Total reviews", value: verses.reduce((s, v) => s + v.reviewCount, 0) },
                    { label: "Categories covered", value: new Set(verses.map((v) => v.category)).size },
                    { label: "Avg reviews / verse", value: verses.length ? Math.round(verses.reduce((s, v) => s + v.reviewCount, 0) / verses.length) : 0 },
                  ].map((s) => (
                    <div key={s.label} className="flex justify-between text-xs py-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <span style={{ color: "#6A6A88" }}>{s.label}</span>
                      <span className="font-bold" style={{ color: "#F2F2F8" }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested */}
              <div className="rounded-2xl p-5" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <h3 className="font-black text-sm mb-3" style={{ color: "#F2F2F8" }}>Quick Add</h3>
                <p className="text-xs mb-3" style={{ color: "#6A6A88" }}>Popular memory verses</p>
                <div className="space-y-2">
                  {popularVerses.map((v) => {
                    const alreadyAdded = verses.some((existing) => existing.reference === v.reference);
                    return (
                      <div key={v.reference} className="flex items-center justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold truncate" style={{ color: "#F2F2F8" }}>{v.reference}</p>
                          <p className="text-xs" style={{ color: "#4A4A68" }}>{v.category}</p>
                        </div>
                        <button
                          onClick={() => addPopular(v)}
                          disabled={alreadyAdded}
                          className="text-xs px-2 py-1 rounded-lg shrink-0 font-semibold transition-all"
                          style={{
                            background: alreadyAdded ? "rgba(0,255,136,0.08)" : "rgba(255,255,255,0.04)",
                            border: alreadyAdded ? "1px solid rgba(0,255,136,0.2)" : "1px solid rgba(255,255,255,0.08)",
                            color: alreadyAdded ? "#00FF88" : "#8A8AA8",
                          }}
                        >
                          {alreadyAdded ? "✓" : <ChevronRight size={11} />}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tips */}
              <div className="rounded-2xl p-5" style={{ background: "linear-gradient(135deg, rgba(107,79,187,0.08) 0%, rgba(0,255,136,0.04) 100%)", border: "1px solid rgba(107,79,187,0.2)" }}>
                <h3 className="font-black text-sm mb-3" style={{ color: "#F2F2F8" }}>Memory Tips</h3>
                <ul className="space-y-2">
                  {[
                    "Review each verse 7× before marking mastered",
                    "Say verses aloud — speech reinforces memory",
                    "Write it by hand once a day for a week",
                    "Attach it to a daily routine (morning coffee, commute)",
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-2 text-xs" style={{ color: "#8A8AA8", lineHeight: "1.5" }}>
                      <span style={{ color: "#6B4FBB" }}>•</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
