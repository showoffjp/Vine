"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Heart,
  Plus,
  CheckCircle2,
  Trash2,
  X,
  ChevronRight,
  Lock,
  Sparkles,
} from "lucide-react";

type PrayerCategory = "Personal" | "Family" | "Friend" | "Health" | "Work" | "Ministry" | "World" | "Praise";

interface PrayerItem {
  id: string;
  request: string;
  category: PrayerCategory;
  person?: string;
  verse?: string;
  answered: boolean;
  answeredNote?: string;
  createdAt: string;
  answeredAt?: string;
  prayCount: number;
  lastPrayed?: string;
}

const CATEGORIES: PrayerCategory[] = [
  "Personal", "Family", "Friend", "Health", "Work", "Ministry", "World", "Praise",
];

const CATEGORY_COLORS: Record<PrayerCategory, string> = {
  Personal: "#6B4FBB",
  Family: "#EC4899",
  Friend: "#10B981",
  Health: "#3B82F6",
  Work: "#F59E0B",
  Ministry: "#00FF88",
  World: "#8B5CF6",
  Praise: "#E07030",
};

const CATEGORY_EMOJI: Record<PrayerCategory, string> = {
  Personal: "🙏",
  Family: "👨‍👩‍👧",
  Friend: "❤️",
  Health: "💙",
  Work: "💼",
  Ministry: "✝️",
  World: "🌍",
  Praise: "🙌",
};

const STARTER_ITEMS: PrayerItem[] = [
  {
    id: "s1",
    request: "Daily wisdom and discernment in my decisions",
    category: "Personal",
    verse: "James 1:5",
    answered: false,
    createdAt: "May 1, 2026",
    prayCount: 7,
    lastPrayed: "May 25, 2026",
  },
  {
    id: "s2",
    request: "My family's spiritual growth and unity",
    category: "Family",
    answered: false,
    createdAt: "May 10, 2026",
    prayCount: 4,
    lastPrayed: "May 24, 2026",
  },
  {
    id: "s3",
    request: "My friend Marcus — struggling with his faith",
    category: "Friend",
    person: "Marcus Johnson",
    answered: false,
    createdAt: "May 15, 2026",
    prayCount: 3,
  },
  {
    id: "s4",
    request: "Promotion at work and finding purpose in my career",
    category: "Work",
    verse: "Colossians 3:23",
    answered: true,
    answeredNote: "Got the promotion! God is faithful.",
    createdAt: "April 5, 2026",
    answeredAt: "May 20, 2026",
    prayCount: 12,
  },
];

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

const TODAY = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default function PrayerListPage() {
  const [items, setItems] = useState<PrayerItem[]>(() => {
    try {
      const s = localStorage.getItem("vine_prayer_list");
      const saved = s ? (JSON.parse(s) as PrayerItem[]) : null;
      return saved && saved.length > 0 ? saved : STARTER_ITEMS;
    } catch { return STARTER_ITEMS; }
  });
  const [activeTab, setActiveTab] = useState<"active" | "answered">("active");
  const [filterCat, setFilterCat] = useState<PrayerCategory | "All">("All");
  const [showAdd, setShowAdd] = useState(false);
  const [answeringId, setAnsweringId] = useState<string | null>(null);
  const [answeredNote, setAnsweredNote] = useState("");

  // New item form
  const [newRequest, setNewRequest] = useState("");
  const [newCategory, setNewCategory] = useState<PrayerCategory>("Personal");
  const [newPerson, setNewPerson] = useState("");
  const [newVerse, setNewVerse] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_prayer_list", JSON.stringify(items)); } catch {}
  }, [items]);

  const addItem = () => {
    if (!newRequest.trim()) return;
    const item: PrayerItem = {
      id: uid(),
      request: newRequest.trim(),
      category: newCategory,
      person: newPerson.trim() || undefined,
      verse: newVerse.trim() || undefined,
      answered: false,
      createdAt: TODAY,
      prayCount: 0,
    };
    setItems((prev) => [item, ...prev]);
    setNewRequest(""); setNewPerson(""); setNewVerse("");
    setShowAdd(false);
  };

  const markPrayed = (id: string) => {
    setItems((prev) => prev.map((item) =>
      item.id === id
        ? { ...item, prayCount: item.prayCount + 1, lastPrayed: TODAY }
        : item
    ));
  };

  const markAnswered = (id: string) => {
    setItems((prev) => prev.map((item) =>
      item.id === id
        ? { ...item, answered: true, answeredAt: TODAY, answeredNote: answeredNote.trim() || undefined }
        : item
    ));
    setAnsweringId(null);
    setAnsweredNote("");
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filtered = items.filter((item) => {
    const tabMatch = activeTab === "active" ? !item.answered : item.answered;
    const catMatch = filterCat === "All" || item.category === filterCat;
    return tabMatch && catMatch;
  });

  const activeCount = items.filter((i) => !i.answered).length;
  const answeredCount = items.filter((i) => i.answered).length;
  const totalPrays = items.reduce((s, i) => s + i.prayCount, 0);

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Heart size={18} style={{ color: "#00FF88" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>My Prayer List</span>
              <div className="flex items-center gap-1 ml-auto text-xs" style={{ color: "#4A4A68" }}>
                <Lock size={11} /> Private
              </div>
            </div>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-black">Prayer Journal</h1>
                <p className="text-sm mt-1" style={{ color: "#6A6A88" }}>Your personal, private prayer requests. Pray daily, track answered prayers.</p>
              </div>
              <button
                onClick={() => setShowAdd(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-black"
                style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
              >
                <Plus size={14} /> Add Request
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Active Requests", value: activeCount, color: "#6B4FBB" },
              { label: "Answered", value: answeredCount, color: "#10B981" },
              { label: "Total Prayers", value: totalPrays, color: "#00FF88" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <p className="text-2xl font-black mb-0.5" style={{ color: s.color }}>{s.value}</p>
                <p className="text-[10px]" style={{ color: "#6A6A88" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Add form */}
          {showAdd && (
            <div className="rounded-2xl p-6 mb-5" style={{ background: "#12121F", border: "1px solid rgba(0,255,136,0.2)" }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-black" style={{ color: "#F2F2F8" }}>New Prayer Request</h3>
                <button onClick={() => setShowAdd(false)} style={{ color: "#6A6A88" }}><X size={16} /></button>
              </div>
              <div className="space-y-3">
                <textarea
                  rows={3}
                  placeholder="What would you like to bring to God in prayer?"
                  value={newRequest}
                  onChange={(e) => setNewRequest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#6A6A88" }}>Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as PrayerCategory)}
                      className="w-full px-3 py-2 rounded-xl text-sm outline-none"
                      style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                    >
                      {CATEGORIES.map((c) => <option key={c} value={c}>{CATEGORY_EMOJI[c]} {c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#6A6A88" }}>Person (optional)</label>
                    <input
                      type="text" placeholder="Who are you praying for?"
                      value={newPerson}
                      onChange={(e) => setNewPerson(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-sm outline-none"
                      style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#6A6A88" }}>Scripture to stand on (optional)</label>
                  <input
                    type="text" placeholder="e.g. Philippians 4:6-7"
                    value={newVerse}
                    onChange={(e) => setNewVerse(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-sm outline-none"
                    style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                  />
                </div>
                <div className="flex gap-3 pt-1">
                  <button
                    onClick={() => setShowAdd(false)}
                    className="flex-1 py-2.5 rounded-xl text-sm font-semibold"
                    style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#6A6A88" }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addItem}
                    disabled={!newRequest.trim()}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-black"
                    style={{ background: newRequest.trim() ? "linear-gradient(135deg, #00FF88, #00BB55)" : "#1E1E32", color: newRequest.trim() ? "#07070F" : "#4A4A68" }}
                  >
                    <Heart size={14} /> Add to List
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-xl mb-4" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
            {(["active", "answered"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition-all"
                style={{
                  background: activeTab === tab ? (tab === "answered" ? "rgba(16,185,129,0.12)" : "rgba(107,79,187,0.12)") : "transparent",
                  color: activeTab === tab ? (tab === "answered" ? "#10B981" : "#6B4FBB") : "#6A6A88",
                  border: activeTab === tab ? `1px solid ${tab === "answered" ? "rgba(16,185,129,0.2)" : "rgba(107,79,187,0.2)"}` : "1px solid transparent",
                }}
              >
                {tab === "active" ? `Praying For (${activeCount})` : `Answered ✓ (${answeredCount})`}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex gap-2 flex-wrap mb-5">
            {(["All", ...CATEGORIES] as (PrayerCategory | "All")[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCat(cat)}
                className="text-xs font-semibold px-2.5 py-1 rounded-full transition-all"
                style={{
                  background: filterCat === cat ? `${cat === "All" ? "#6B4FBB" : CATEGORY_COLORS[cat as PrayerCategory]}20` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${filterCat === cat ? (cat === "All" ? "rgba(107,79,187,0.4)" : `${CATEGORY_COLORS[cat as PrayerCategory]}40`) : "rgba(255,255,255,0.06)"}`,
                  color: filterCat === cat ? (cat === "All" ? "#6B4FBB" : CATEGORY_COLORS[cat as PrayerCategory]) : "#6A6A88",
                }}
              >
                {cat !== "All" && CATEGORY_EMOJI[cat as PrayerCategory]} {cat}
              </button>
            ))}
          </div>

          {/* Prayer items */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 rounded-2xl" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              <div className="text-4xl mb-3">{activeTab === "active" ? "🙏" : "🙌"}</div>
              <h3 className="font-black mb-1.5" style={{ color: "#F2F2F8" }}>
                {activeTab === "active" ? "No active prayer requests" : "No answered prayers logged yet"}
              </h3>
              <p className="text-sm" style={{ color: "#6A6A88" }}>
                {activeTab === "active" ? "Add your first request above." : "When God answers, mark it and write the testimony."}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((item) => {
                const color = CATEGORY_COLORS[item.category];
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl p-5"
                    style={{
                      background: item.answered ? "rgba(16,185,129,0.04)" : "#12121F",
                      border: `1px solid ${item.answered ? "rgba(16,185,129,0.2)" : "#1E1E32"}`,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl shrink-0 mt-0.5">{CATEGORY_EMOJI[item.category]}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{ background: `${color}15`, color }}
                            >
                              {item.category}
                            </span>
                            {item.person && (
                              <span className="text-[10px] ml-2" style={{ color: "#6A6A88" }}>for {item.person}</span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            {!item.answered && (
                              <button
                                onClick={() => setAnsweringId(item.id)}
                                className="text-[10px] font-bold px-2 py-1 rounded-lg transition-all"
                                style={{ background: "rgba(16,185,129,0.08)", color: "#10B981", border: "1px solid rgba(16,185,129,0.2)" }}
                              >
                                Answered ✓
                              </button>
                            )}
                            {item.answered && <CheckCircle2 size={14} style={{ color: "#10B981" }} />}
                            <button
                              onClick={() => deleteItem(item.id)}
                              className="p-1 rounded transition-all"
                              style={{ color: "#3A3A58" }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = "#EF4444")}
                              onMouseLeave={(e) => (e.currentTarget.style.color = "#3A3A58")}
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        </div>

                        <p className="text-sm leading-relaxed mt-1 mb-2" style={{ color: "#C0C0D8" }}>{item.request}</p>

                        {item.verse && (
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(0,255,136,0.08)", color: "#00AA55" }}>
                            📜 {item.verse}
                          </span>
                        )}

                        {item.answered && item.answeredNote && (
                          <div className="mt-2 px-3 py-2 rounded-xl" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}>
                            <p className="text-xs font-bold mb-0.5" style={{ color: "#10B981" }}>Testimony:</p>
                            <p className="text-sm" style={{ color: "#C0C0D8" }}>{item.answeredNote}</p>
                          </div>
                        )}

                        <div className="flex items-center justify-between mt-3">
                          <p className="text-[10px]" style={{ color: "#4A4A68" }}>
                            Added {item.createdAt}
                            {item.lastPrayed && ` · Last prayed ${item.lastPrayed}`}
                            {item.answeredAt && ` · Answered ${item.answeredAt}`}
                          </p>
                          {!item.answered && (
                            <button
                              onClick={() => markPrayed(item.id)}
                              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                              style={{ background: `${color}10`, color, border: `1px solid ${color}25` }}
                              onMouseEnter={(e) => { e.currentTarget.style.background = `${color}20`; }}
                              onMouseLeave={(e) => { e.currentTarget.style.background = `${color}10`; }}
                            >
                              🙏 Prayed ({item.prayCount})
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Answered note input */}
                    {answeringId === item.id && (
                      <div className="mt-4 pt-4" style={{ borderTop: "1px solid #1E1E32" }}>
                        <p className="text-xs font-bold mb-2" style={{ color: "#10B981" }}>How did God answer this prayer?</p>
                        <textarea
                          rows={2}
                          placeholder="Write your testimony here (optional)…"
                          value={answeredNote}
                          onChange={(e) => setAnsweredNote(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl text-sm outline-none resize-none mb-2"
                          style={{ background: "#0D0D1A", border: "1px solid rgba(16,185,129,0.2)", color: "#F2F2F8" }}
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => { setAnsweringId(null); setAnsweredNote(""); }}
                            className="flex-1 py-2 rounded-xl text-xs font-semibold"
                            style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#6A6A88" }}
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => markAnswered(item.id)}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold"
                            style={{ background: "rgba(16,185,129,0.12)", color: "#10B981", border: "1px solid rgba(16,185,129,0.3)" }}
                          >
                            <CheckCircle2 size={12} /> Mark Answered
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Footer CTA */}
          <div
            className="mt-10 rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg, rgba(107,79,187,0.08), rgba(0,255,136,0.06))", border: "1px solid rgba(107,79,187,0.2)" }}
          >
            <Sparkles size={20} style={{ color: "#6B4FBB" }} className="mx-auto mb-3" />
            <h3 className="font-black mb-2" style={{ color: "#F2F2F8" }}>Keep a record of God&apos;s faithfulness</h3>
            <p className="text-sm mb-4 max-w-sm mx-auto" style={{ color: "#6A6A88" }}>
              Tracking answered prayers builds your faith. Review this list often — it becomes your personal testimony.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="/prayer" className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#00FF88" }}>
                Public Prayer Wall <ChevronRight size={11} />
              </a>
              <a href="/journal" className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#6B4FBB" }}>
                Journal <ChevronRight size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
