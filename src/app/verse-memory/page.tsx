"use client";

import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

interface MemoryVerse {
  id: number; reference: string; text: string; category: string;
  mastered: boolean; reviewCount: number; addedDate: string; lastReviewed?: string;
}

const seedVerses: MemoryVerse[] = [
  { id: 1, reference: "Philippians 4:13", text: "I can do all this through him who gives me strength.", category: "Strength", mastered: false, reviewCount: 3, addedDate: "May 1, 2026" },
  { id: 2, reference: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", category: "Salvation", mastered: true, reviewCount: 12, addedDate: "Apr 10, 2026", lastReviewed: "May 25, 2026" },
  { id: 3, reference: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", category: "Trust", mastered: false, reviewCount: 6, addedDate: "Apr 22, 2026" },
  { id: 4, reference: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", category: "Trust", mastered: true, reviewCount: 15, addedDate: "Mar 15, 2026", lastReviewed: "May 24, 2026" },
  { id: 5, reference: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.", category: "Fear", mastered: false, reviewCount: 2, addedDate: "May 15, 2026" },
  { id: 6, reference: "Psalm 23:1", text: "The Lord is my shepherd, I lack nothing.", category: "Provision", mastered: true, reviewCount: 20, addedDate: "Jan 5, 2026", lastReviewed: "May 26, 2026" },
  { id: 7, reference: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest.", category: "Peace", mastered: false, reviewCount: 4, addedDate: "May 10, 2026" },
  { id: 8, reference: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", category: "Trust", mastered: false, reviewCount: 7, addedDate: "Apr 5, 2026" },
  { id: 9, reference: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is.", category: "Identity", mastered: false, reviewCount: 5, addedDate: "Apr 18, 2026" },
  { id: 10, reference: "Psalm 119:11", text: "I have hidden your word in my heart that I might not sin against you.", category: "Identity", mastered: true, reviewCount: 18, addedDate: "Feb 20, 2026", lastReviewed: "May 22, 2026" },
];

const suggestedVerses = [
  { reference: "1 Corinthians 13:4-5", text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking.", category: "Love" },
  { reference: "Galatians 5:22-23", text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.", category: "Identity" },
  { reference: "Ephesians 2:8-9", text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.", category: "Salvation" },
  { reference: "Isaiah 40:31", text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary.", category: "Strength" },
  { reference: "Psalm 46:10", text: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.", category: "Peace" },
  { reference: "Romans 8:38-39", text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future... will be able to separate us from the love of God.", category: "Love" },
];

const allCategories = ["All", "Strength", "Salvation", "Trust", "Fear", "Provision", "Peace", "Identity", "Love"];

const categoryColors: Record<string, string> = {
  "Strength": "#F59E0B", "Salvation": GREEN, "Trust": PURPLE, "Fear": "#EF4444",
  "Provision": "#10B981", "Peace": "#3B82F6", "Identity": "#EC4899", "Love": "#F43F5E"
};

export default function VerseMemoryPage() {
  const [verses, setVerses] = useState<MemoryVerse[]>(() => {
    try { const s = localStorage.getItem("vine_verse_memory"); return s ? JSON.parse(s) : seedVerses; } catch { return seedVerses; }
  });
  const [tab, setTab] = useState<"library" | "practice" | "stats">("library");
  const [activeCategory, setActiveCategory] = useState("All");
  const [addingVerse, setAddingVerse] = useState(false);
  const [reviewingId, setReviewingId] = useState<number | null>(null);
  const [userInput, setUserInput] = useState("");
  const [quizResult, setQuizResult] = useState<"correct" | "close" | "wrong" | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [newVerse, setNewVerse] = useState({ reference: "", text: "", category: "Trust" });
  const [savedFlash, setSavedFlash] = useState(false);

  useEffect(() => {
    try { localStorage.setItem("vine_verse_memory", JSON.stringify(verses)); } catch {}
  }, [verses]);

  const mastered = verses.filter(v => v.mastered).length;
  const totalReviews = verses.reduce((s, v) => s + v.reviewCount, 0);
  const filtered = activeCategory === "All" ? verses : verses.filter(v => v.category === activeCategory);
  const reviewingVerse = reviewingId !== null ? verses.find(v => v.id === reviewingId) ?? null : null;
  const dueForReview = verses.filter(v => !v.mastered).slice(0, 5);

  const toggleMastered = (id: number) => setVerses(prev => prev.map(v =>
    v.id === id ? { ...v, mastered: !v.mastered, lastReviewed: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) } : v
  ));

  const markReviewed = (id: number) => setVerses(prev => prev.map(v =>
    v.id === id ? { ...v, reviewCount: v.reviewCount + 1, lastReviewed: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) } : v
  ));

  const addVerse = () => {
    if (!newVerse.reference.trim() || !newVerse.text.trim()) return;
    setVerses(prev => [{
      id: Date.now(), reference: newVerse.reference.trim(), text: newVerse.text.trim(),
      category: newVerse.category, mastered: false, reviewCount: 0,
      addedDate: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    }, ...prev]);
    setNewVerse({ reference: "", text: "", category: "Trust" });
    setSavedFlash(true);
    setTimeout(() => { setSavedFlash(false); setAddingVerse(false); }, 1500);
  };

  const addSuggested = (v: typeof suggestedVerses[0]) => {
    if (verses.some(e => e.reference === v.reference)) return;
    setVerses(prev => [{
      id: Date.now(), reference: v.reference, text: v.text, category: v.category,
      mastered: false, reviewCount: 0,
      addedDate: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    }, ...prev]);
  };

  const checkAnswer = () => {
    if (!reviewingVerse) return;
    const target = reviewingVerse.text.toLowerCase().replace(/[^a-z0-9 ]/g, "");
    const input = userInput.toLowerCase().replace(/[^a-z0-9 ]/g, "");
    const tWords = target.split(/\s+/);
    const iWords = input.split(/\s+/);
    const matched = iWords.filter((w, i) => tWords[i] === w).length;
    const pct = matched / tWords.length;
    setQuizResult(pct >= 0.95 ? "correct" : pct >= 0.7 ? "close" : "wrong");
    markReviewed(reviewingVerse.id);
  };

  const startReview = (id: number) => {
    setReviewingId(id); setUserInput(""); setQuizResult(null); setShowAnswer(false);
    setTab("practice");
  };

  const resultConfig = {
    correct: { color: GREEN, border: "rgba(0,255,136,0.25)", bg: "rgba(0,255,136,0.08)", msg: "✓ Excellent! Almost word-perfect." },
    close: { color: "#F59E0B", border: "rgba(245,158,11,0.25)", bg: "rgba(245,158,11,0.08)", msg: "✓ Very close! Review the differences." },
    wrong: { color: "#EF4444", border: "rgba(239,68,68,0.25)", bg: "rgba(239,68,68,0.08)", msg: "Keep practicing — you'll get there!" },
  };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 32, gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 18 }}>🧠</span>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: GREEN, textTransform: "uppercase" }}>Scripture Memory</span>
            </div>
            <h1 style={{ fontSize: 36, fontWeight: 900, margin: 0, lineHeight: 1.1 }}>Verse Memory</h1>
            <p style={{ fontSize: 14, color: MUTED, marginTop: 6 }}>{verses.length} verses · {mastered} mastered · {verses.length - mastered} in progress</p>
          </div>
          <button onClick={() => setAddingVerse(true)}
            style={{ padding: "10px 22px", borderRadius: 12, border: "none", background: `linear-gradient(135deg, ${GREEN}, #00BB55)`, color: BG, fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
            + Add Verse
          </button>
        </div>

        {/* Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 28 }}>
          {[
            { label: "Total Verses", value: verses.length, color: PURPLE },
            { label: "Mastered", value: mastered, color: GREEN },
            { label: "Total Reviews", value: totalReviews, color: "#F59E0B" },
          ].map(s => (
            <div key={s.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "16px", textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mastery progress bar */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "16px 20px", marginBottom: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 700 }}>Mastery Progress</span>
            <span style={{ fontSize: 13, color: GREEN, fontWeight: 700 }}>{verses.length ? Math.round((mastered / verses.length) * 100) : 0}%</span>
          </div>
          <div style={{ height: 8, background: BORDER, borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${verses.length ? (mastered / verses.length) * 100 : 0}%`, background: `linear-gradient(90deg, ${PURPLE}, ${GREEN})`, borderRadius: 4, transition: "width 0.4s ease" }} />
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24, borderBottom: `1px solid ${BORDER}` }}>
          {[
            { id: "library", label: "📚 Library" },
            { id: "practice", label: "✏️ Practice" },
            { id: "stats", label: "📊 Stats & Suggestions" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id as typeof tab)}
              style={{ padding: "10px 20px", borderRadius: "10px 10px 0 0", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 14, background: tab === t.id ? CARD : "transparent", color: tab === t.id ? TEXT : MUTED, borderBottom: tab === t.id ? `2px solid ${GREEN}` : "2px solid transparent" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* LIBRARY TAB */}
        {tab === "library" && (
          <div>
            {/* Add form */}
            {addingVerse && (
              <div style={{ background: CARD, border: `1px solid rgba(0,255,136,0.25)`, borderRadius: 16, padding: "24px", marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>Add a Verse</h3>
                  <button onClick={() => setAddingVerse(false)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                  <input value={newVerse.reference} onChange={e => setNewVerse(p => ({ ...p, reference: e.target.value }))}
                    placeholder="Reference (e.g. John 3:16)"
                    style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.04)", color: TEXT, fontSize: 14, outline: "none" }} />
                  <select value={newVerse.category} onChange={e => setNewVerse(p => ({ ...p, category: e.target.value }))}
                    style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${BORDER}`, background: CARD, color: TEXT, fontSize: 14, outline: "none" }}>
                    {allCategories.filter(c => c !== "All").map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <textarea value={newVerse.text} onChange={e => setNewVerse(p => ({ ...p, text: e.target.value }))}
                  placeholder="Paste the full verse text..." rows={3}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.04)", color: TEXT, fontSize: 14, resize: "none", outline: "none", marginBottom: 12, boxSizing: "border-box", lineHeight: 1.7 }} />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button onClick={addVerse} disabled={!newVerse.reference.trim() || !newVerse.text.trim()}
                    style={{ padding: "10px 24px", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 800, fontSize: 14, background: savedFlash ? "rgba(0,255,136,0.2)" : (newVerse.reference && newVerse.text ? `linear-gradient(135deg, ${GREEN}, #00BB55)` : BORDER), color: savedFlash ? GREEN : (newVerse.reference && newVerse.text ? BG : MUTED) }}>
                    {savedFlash ? "✓ Saved!" : "Save Verse"}
                  </button>
                </div>
              </div>
            )}

            {/* Category filter */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {allCategories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${activeCategory === cat ? (categoryColors[cat] || GREEN) + "60" : BORDER}`, background: activeCategory === cat ? `${categoryColors[cat] || GREEN}15` : "transparent", color: activeCategory === cat ? categoryColors[cat] || GREEN : MUTED, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Verse cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filtered.length === 0 && (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <p style={{ fontSize: 32, marginBottom: 8 }}>📖</p>
                  <p style={{ fontWeight: 700, color: TEXT }}>No verses in this category</p>
                  <p style={{ fontSize: 14, color: MUTED, marginTop: 4 }}>Add your first verse or select a different category</p>
                </div>
              )}
              {filtered.map(verse => (
                <div key={verse.id} style={{ background: verse.mastered ? "rgba(0,255,136,0.04)" : CARD, border: `1px solid ${verse.mastered ? "rgba(0,255,136,0.2)" : BORDER}`, borderRadius: 16, padding: "18px 22px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                      <span style={{ fontSize: 14, fontWeight: 800, color: verse.mastered ? GREEN : TEXT }}>{verse.reference}</span>
                      <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${categoryColors[verse.category] || PURPLE}15`, color: categoryColors[verse.category] || PURPLE, fontWeight: 700 }}>{verse.category}</span>
                      {verse.mastered && <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: "rgba(0,255,136,0.1)", color: GREEN, fontWeight: 700 }}>✓ Mastered</span>}
                    </div>
                    <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                      <button onClick={() => startReview(verse.id)}
                        style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.04)", color: MUTED, cursor: "pointer", fontSize: 12, fontWeight: 700 }}>
                        Practice
                      </button>
                      <button onClick={() => toggleMastered(verse.id)} title={verse.mastered ? "Mark as in-progress" : "Mark as mastered"}
                        style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${verse.mastered ? GREEN + "40" : BORDER}`, background: verse.mastered ? "rgba(0,255,136,0.1)" : "transparent", cursor: "pointer", fontSize: 14, color: verse.mastered ? GREEN : MUTED }}>
                        {verse.mastered ? "✓" : "○"}
                      </button>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>"{verse.text}"</p>
                  <div style={{ display: "flex", gap: 12, fontSize: 11, color: "#5A5A78" }}>
                    <span>Added {verse.addedDate}</span>
                    <span>·</span>
                    <span>{verse.reviewCount} review{verse.reviewCount !== 1 ? "s" : ""}</span>
                    {verse.lastReviewed && <><span>·</span><span>Last: {verse.lastReviewed}</span></>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRACTICE TAB */}
        {tab === "practice" && (
          <div>
            {!reviewingVerse ? (
              <div>
                <p style={{ color: MUTED, marginBottom: 20, fontSize: 15 }}>Choose a verse to practice, or pick from your review queue:</p>
                <h4 style={{ fontSize: 14, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Up for Review</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  {dueForReview.map(v => (
                    <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                      <div>
                        <p style={{ fontWeight: 800, fontSize: 14, margin: "0 0 4px" }}>{v.reference}</p>
                        <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{v.reviewCount} reviews · {v.category}</p>
                      </div>
                      <button onClick={() => startReview(v.id)}
                        style={{ padding: "8px 18px", borderRadius: 10, border: "none", background: `linear-gradient(135deg, ${PURPLE}, #8B6FDB)`, color: TEXT, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                        Practice →
                      </button>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: "center", padding: "20px", background: CARD, borderRadius: 14, border: `1px solid ${BORDER}` }}>
                  <p style={{ color: MUTED, fontSize: 14 }}>Go to Library tab to choose any specific verse to practice.</p>
                </div>
              </div>
            ) : (
              <div style={{ background: CARD, border: `1px solid rgba(107,79,187,0.3)`, borderRadius: 16, padding: "28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>Practice</h3>
                    <p style={{ fontSize: 14, color: PURPLE, fontWeight: 700, margin: "4px 0 0" }}>{reviewingVerse.reference}</p>
                  </div>
                  <button onClick={() => { setReviewingId(null); setQuizResult(null); setUserInput(""); setShowAnswer(false); }}
                    style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "8px 14px", color: MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                    ← Back
                  </button>
                </div>

                {showAnswer && !quizResult && (
                  <div style={{ padding: "16px 20px", background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.15)", borderRadius: 12, marginBottom: 16 }}>
                    <p style={{ fontSize: 15, fontStyle: "italic", color: "#C0C0D8", lineHeight: 1.8, margin: 0 }}>"{reviewingVerse.text}"</p>
                  </div>
                )}

                {!quizResult && (
                  <div>
                    <p style={{ fontSize: 14, color: MUTED, marginBottom: 12 }}>Type the verse from memory. Punctuation doesn't need to be exact.</p>
                    <textarea value={userInput} onChange={e => setUserInput(e.target.value)}
                      placeholder="Type the verse here..." rows={4}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.03)", color: TEXT, fontSize: 14, resize: "none", outline: "none", lineHeight: 1.7, marginBottom: 12, boxSizing: "border-box" }} />
                    <div style={{ display: "flex", gap: 10 }}>
                      <button onClick={checkAnswer} disabled={!userInput.trim()}
                        style={{ padding: "10px 22px", borderRadius: 10, border: "none", background: userInput.trim() ? `linear-gradient(135deg, ${PURPLE}, #8B6FDB)` : BORDER, color: userInput.trim() ? TEXT : MUTED, cursor: userInput.trim() ? "pointer" : "not-allowed", fontSize: 14, fontWeight: 800 }}>
                        Check Answer
                      </button>
                      <button onClick={() => setShowAnswer(!showAnswer)}
                        style={{ padding: "10px 18px", borderRadius: 10, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.04)", color: MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                        {showAnswer ? "Hide Verse" : "Show Verse"}
                      </button>
                    </div>
                  </div>
                )}

                {quizResult && (
                  <div>
                    <div style={{ padding: "16px 20px", background: resultConfig[quizResult].bg, border: `1px solid ${resultConfig[quizResult].border}`, borderRadius: 12, marginBottom: 16 }}>
                      <p style={{ fontSize: 14, fontWeight: 800, color: resultConfig[quizResult].color, marginBottom: 8 }}>{resultConfig[quizResult].msg}</p>
                      <p style={{ fontSize: 14, fontStyle: "italic", color: "#C0C0D8", lineHeight: 1.8, margin: 0 }}>"{reviewingVerse.text}"</p>
                    </div>
                    <div style={{ display: "flex", gap: 10 }}>
                      <button onClick={() => { setQuizResult(null); setUserInput(""); setShowAnswer(false); }}
                        style={{ padding: "10px 18px", borderRadius: 10, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.04)", color: MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                        ↺ Try Again
                      </button>
                      {quizResult === "correct" && (
                        <button onClick={() => { toggleMastered(reviewingVerse.id); setReviewingId(null); setQuizResult(null); setUserInput(""); setShowAnswer(false); }}
                          style={{ padding: "10px 20px", borderRadius: 10, border: `1px solid ${GREEN}40`, background: "rgba(0,255,136,0.12)", color: GREEN, cursor: "pointer", fontSize: 13, fontWeight: 800 }}>
                          🏆 Mark as Mastered
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* STATS & SUGGESTIONS TAB */}
        {tab === "stats" && (
          <div>
            {/* Category breakdown */}
            <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Verses by Category</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
              {allCategories.filter(c => c !== "All").map(cat => {
                const catVerses = verses.filter(v => v.category === cat);
                const catMastered = catVerses.filter(v => v.mastered).length;
                const pct = catVerses.length ? (catMastered / catVerses.length) * 100 : 0;
                if (catVerses.length === 0) return null;
                return (
                  <div key={cat} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "14px 18px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: categoryColors[cat] || TEXT }}>{cat}</span>
                      <span style={{ fontSize: 13, color: MUTED }}>{catMastered}/{catVerses.length} mastered</span>
                    </div>
                    <div style={{ height: 6, background: BORDER, borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: categoryColors[cat] || GREEN, borderRadius: 4, transition: "width 0.4s ease" }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Suggested verses */}
            <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Suggested Verses to Add</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {suggestedVerses.map(v => {
                const added = verses.some(e => e.reference === v.reference);
                return (
                  <div key={v.reference} style={{ background: CARD, border: `1px solid ${added ? GREEN + "30" : BORDER}`, borderRadius: 14, padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                        <span style={{ fontSize: 14, fontWeight: 800, color: added ? GREEN : TEXT }}>{v.reference}</span>
                        <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${categoryColors[v.category] || PURPLE}15`, color: categoryColors[v.category] || PURPLE, fontWeight: 700 }}>{v.category}</span>
                      </div>
                      <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>"{v.text.slice(0, 80)}..."</p>
                    </div>
                    <button onClick={() => addSuggested(v)} disabled={added}
                      style={{ padding: "8px 16px", borderRadius: 10, border: `1px solid ${added ? GREEN + "40" : BORDER}`, background: added ? "rgba(0,255,136,0.08)" : "rgba(255,255,255,0.04)", color: added ? GREEN : MUTED, cursor: added ? "not-allowed" : "pointer", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                      {added ? "✓ Added" : "+ Add"}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Memory tips */}
            <div style={{ marginTop: 28, background: `linear-gradient(135deg, rgba(107,79,187,0.08), rgba(0,255,136,0.05))`, border: `1px solid rgba(107,79,187,0.2)`, borderRadius: 16, padding: "24px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 14 }}>🧠 Memory Tips</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { tip: "Review each verse at least 7 times before marking it mastered." },
                  { tip: "Say verses aloud — speech reinforces memory much better than silent reading." },
                  { tip: "Write it by hand once a day for a week — muscle memory is powerful." },
                  { tip: "Attach a verse to a daily routine: morning coffee, commute, or bedtime." },
                  { tip: "Meditate on the meaning, not just the words — comprehension aids retention." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: PURPLE, fontWeight: 900, flexShrink: 0 }}>•</span>
                    <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.6 }}>{item.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
