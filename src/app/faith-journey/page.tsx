"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Plus, X, Edit2, Trash2, MapPin, Calendar, Heart, BookOpen, Star, Zap, Users, Music, Globe } from "lucide-react";

interface Milestone {
  id: string;
  year: number;
  month: number;
  title: string;
  description: string;
  category: string;
  verse?: string;
  verseRef?: string;
  significance: 1 | 2 | 3;
}

const CATEGORIES = [
  { id: "salvation", label: "Salvation / Conversion", icon: "✨", color: "#00FF88" },
  { id: "baptism", label: "Baptism", icon: "💧", color: "#3B82F6" },
  { id: "calling", label: "Calling / Vocation", icon: "📣", color: "#F59E0B" },
  { id: "trial", label: "Trial / Dark Season", icon: "⛈️", color: "#6B7280" },
  { id: "breakthrough", label: "Breakthrough / Healing", icon: "🌅", color: "#10B981" },
  { id: "community", label: "Church / Community", icon: "🏛️", color: "#6B4FBB" },
  { id: "scripture", label: "Scripture Encounter", icon: "📖", color: "#EC4899" },
  { id: "marriage", label: "Marriage / Family", icon: "💍", color: "#F97316" },
  { id: "serving", label: "Serving / Ministry", icon: "🤝", color: "#14B8A6" },
  { id: "mission", label: "Missions / Outreach", icon: "🌍", color: "#EF4444" },
  { id: "prayer", label: "Prayer Experience", icon: "🙏", color: "#8B5CF6" },
  { id: "other", label: "Other", icon: "⭐", color: "#8A8AA8" },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const seedMilestones: Milestone[] = [
  {
    id: "m-001",
    year: 2012,
    month: 3,
    title: "Said yes to Jesus at youth camp",
    description: "At 16, I heard the Gospel clearly for the first time at a summer camp in Colorado. During the final night altar call, everything clicked. I gave my life to Christ at 11:40pm on a Thursday. I still remember the stars.",
    category: "salvation",
    verse: "For God so loved the world that he gave his one and only Son...",
    verseRef: "John 3:16",
    significance: 3,
  },
  {
    id: "m-002",
    year: 2012,
    month: 8,
    title: "Baptized at my home church",
    description: "Two months after camp, I was baptized in front of my whole family — including my dad who wasn't a believer yet. He cried. That moment planted a seed.",
    category: "baptism",
    verse: "We were therefore buried with him through baptism into death...",
    verseRef: "Romans 6:4",
    significance: 3,
  },
  {
    id: "m-003",
    year: 2014,
    month: 9,
    title: "Season of doubt in college",
    description: "Freshman year philosophy courses and a difficult breakup sent me into a two-year period of serious doubt. I questioned everything. It was the loneliest season of my faith — but looking back, it was where my faith became truly mine and not just inherited.",
    category: "trial",
    significance: 2,
  },
  {
    id: "m-004",
    year: 2016,
    month: 4,
    title: "C.S. Lewis pulled me back",
    description: "Reading Mere Christianity at 2am in my dorm was the turning point. Lewis anticipated every objection I had. I finished the book in three days and prayed for the first time in 18 months. I came back — different, but more convinced.",
    category: "scripture",
    verse: "I believe in Christianity as I believe that the sun has risen.",
    verseRef: "C.S. Lewis",
    significance: 2,
  },
  {
    id: "m-005",
    year: 2018,
    month: 6,
    title: "Married Sarah",
    description: "The best day of my life. We wrote our own vows using Ephesians 5 as the framework. Our pastor said something at the ceremony I've never forgotten: 'A Christian marriage is a parable of the Gospel being acted out in public every day.'",
    category: "marriage",
    verse: "Love is patient, love is kind...",
    verseRef: "1 Corinthians 13:4",
    significance: 3,
  },
  {
    id: "m-006",
    year: 2019,
    month: 11,
    title: "First mission trip — Guatemala",
    description: "Ten days in rural Guatemala building a school alongside a church planting team. I've never felt more alive in my faith. Watching believers worship with nothing, with more joy than I've ever had with everything, rewired something in me.",
    category: "mission",
    verse: "Go and make disciples of all nations...",
    verseRef: "Matthew 28:19",
    significance: 2,
  },
  {
    id: "m-007",
    year: 2021,
    month: 2,
    title: "Lost my job in COVID restructuring",
    description: "Unemployed for 7 months. The hardest financial season of my life. But it was also when I prayed more, read more, and learned what it meant to actually trust God with provision — not just say I did.",
    category: "trial",
    significance: 2,
  },
  {
    id: "m-008",
    year: 2022,
    month: 1,
    title: "Dad came to faith",
    description: "My father, who wept at my baptism 10 years earlier but never made a decision himself, called me on New Year's Day and said 'I think I finally understand what you've been telling me.' He prayed with me over the phone. 10 years of prayer, answered.",
    category: "breakthrough",
    verse: "The Lord is not slow in keeping his promise...",
    verseRef: "2 Peter 3:9",
    significance: 3,
  },
  {
    id: "m-009",
    year: 2023,
    month: 7,
    title: "Started leading a men's discipleship group",
    description: "Six guys from our church, meeting every Tuesday at 6am. It's been harder than anything I've done — and more rewarding. I'm learning you can't give what you don't have, which is making me go deeper myself.",
    category: "serving",
    significance: 1,
  },
  {
    id: "m-010",
    year: 2024,
    month: 5,
    title: "Joined Vine community",
    description: "Found this community after a podcast episode. The discussions, stories, and daily content have become part of my routine. Finally found people asking the questions I've been asking.",
    category: "community",
    significance: 1,
  },
];

const categoryMap = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
const currentYear = 2026;

export default function FaithJourneyPage() {
  const [milestones, setMilestones] = useState<Milestone[]>(() => {
    try {
      const s = localStorage.getItem("vine_faith_journey");
      return s ? JSON.parse(s) : seedMilestones;
    } catch { return seedMilestones; }
  });

  const [showCompose, setShowCompose] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const [form, setForm] = useState({
    year: currentYear,
    month: new Date().getMonth() + 1,
    title: "",
    description: "",
    category: "other",
    verse: "",
    verseRef: "",
    significance: 2 as 1 | 2 | 3,
  });

  useEffect(() => {
    try { localStorage.setItem("vine_faith_journey", JSON.stringify(milestones)); } catch {}
  }, [milestones]);

  const resetForm = () => {
    setForm({ year: currentYear, month: new Date().getMonth() + 1, title: "", description: "", category: "other", verse: "", verseRef: "", significance: 2 });
    setEditingId(null);
  };

  const handleSubmit = () => {
    if (!form.title.trim()) return;
    if (editingId) {
      setMilestones((prev) => prev.map((m) => m.id === editingId ? {
        ...m, year: form.year, month: form.month, title: form.title, description: form.description,
        category: form.category, verse: form.verse || undefined, verseRef: form.verseRef || undefined, significance: form.significance,
      } : m));
    } else {
      const newM: Milestone = {
        id: `m-${Date.now()}`,
        year: form.year, month: form.month, title: form.title, description: form.description,
        category: form.category, verse: form.verse || undefined, verseRef: form.verseRef || undefined, significance: form.significance,
      };
      setMilestones((prev) => [...prev, newM].sort((a, b) => a.year !== b.year ? a.year - b.year : a.month - b.month));
    }
    setShowCompose(false);
    resetForm();
  };

  const handleEdit = (m: Milestone) => {
    setForm({ year: m.year, month: m.month, title: m.title, description: m.description, category: m.category, verse: m.verse ?? "", verseRef: m.verseRef ?? "", significance: m.significance });
    setEditingId(m.id);
    setShowCompose(true);
  };

  const handleDelete = (id: string) => {
    setMilestones((prev) => prev.filter((m) => m.id !== id));
    setConfirmDelete(null);
  };

  const sorted = [...milestones].sort((a, b) => a.year !== b.year ? a.year - b.year : a.month - b.month);
  const years = [...new Set(sorted.map((m) => m.year))];
  const totalSignificance = milestones.reduce((s, m) => s + m.significance, 0);

  const significanceLabel = (s: 1 | 2 | 3) => s === 3 ? "Major milestone" : s === 2 ? "Significant moment" : "Notable moment";
  const significanceColor = (s: 1 | 2 | 3) => s === 3 ? "#00FF88" : s === 2 ? "#6B4FBB" : "#4A4A68";

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">

        {/* Hero */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 pt-2">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} style={{ color: "#00FF88" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>Faith Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Your story with{" "}
            <span style={{ background: "linear-gradient(135deg, #00FF88, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              God.
            </span>
          </h1>
          <p className="text-lg mb-6 max-w-2xl" style={{ color: "#6A6A88" }}>
            Mark the moments that shaped your faith. Conversions, trials, breakthroughs, callings — every milestone is evidence of God&apos;s faithfulness.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.15)" }}>
              <Star size={13} style={{ color: "#00FF88" }} />
              <span className="text-sm font-bold" style={{ color: "#00FF88" }}>{milestones.length} milestones recorded</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "rgba(107,79,187,0.08)", border: "1px solid rgba(107,79,187,0.2)" }}>
              <Calendar size={13} style={{ color: "#6B4FBB" }} />
              <span className="text-sm font-bold" style={{ color: "#6B4FBB" }}>
                {years.length > 0 ? `${years[0]} – ${currentYear}` : `${currentYear}`}
              </span>
            </div>
          </div>

          <button
            onClick={() => { resetForm(); setShowCompose(true); }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm"
            style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)", color: "#07070F" }}
          >
            <Plus size={16} /> Add Milestone
          </button>
        </div>

        {/* Compose Modal */}
        {showCompose && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}>
            <div className="w-full max-w-lg rounded-2xl p-6 max-h-[90vh] overflow-y-auto" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-black text-lg" style={{ color: "#F2F2F8" }}>{editingId ? "Edit Milestone" : "Add Milestone"}</h3>
                <button onClick={() => { setShowCompose(false); resetForm(); }} style={{ color: "#4A4A68" }}><X size={20} /></button>
              </div>

              <div className="space-y-3">
                {/* Date */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Year</label>
                    <input
                      type="number"
                      value={form.year}
                      onChange={(e) => setForm((f) => ({ ...f, year: Number(e.target.value) }))}
                      min={1900} max={currentYear}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Month</label>
                    <select
                      value={form.month}
                      onChange={(e) => setForm((f) => ({ ...f, month: Number(e.target.value) }))}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                    >
                      {MONTHS.map((m, i) => <option key={m} value={i + 1} style={{ background: "#12121F" }}>{m}</option>)}
                    </select>
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Category</label>
                  <div className="grid grid-cols-3 gap-1.5 max-h-48 overflow-y-auto">
                    {CATEGORIES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setForm((f) => ({ ...f, category: c.id }))}
                        className="flex items-center gap-1.5 px-2 py-2 rounded-lg text-[11px] font-semibold text-left transition-all"
                        style={{
                          background: form.category === c.id ? `${c.color}20` : "rgba(255,255,255,0.03)",
                          border: form.category === c.id ? `1px solid ${c.color}50` : "1px solid rgba(255,255,255,0.06)",
                          color: form.category === c.id ? c.color : "#6A6A88",
                        }}
                      >
                        <span>{c.icon}</span> {c.label.split(" / ")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Significance */}
                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Significance</label>
                  <div className="flex gap-2">
                    {([1, 2, 3] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => setForm((f) => ({ ...f, significance: s }))}
                        className="flex-1 py-2 rounded-lg text-xs font-bold transition-all"
                        style={{
                          background: form.significance === s ? `${significanceColor(s)}20` : "rgba(255,255,255,0.03)",
                          border: form.significance === s ? `1px solid ${significanceColor(s)}50` : "1px solid rgba(255,255,255,0.06)",
                          color: form.significance === s ? significanceColor(s) : "#6A6A88",
                        }}
                      >
                        {"★".repeat(s)}
                      </button>
                    ))}
                  </div>
                </div>

                <input
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  placeholder="Milestone title"
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />
                <textarea
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  placeholder="Describe what happened and why it mattered..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    value={form.verse}
                    onChange={(e) => setForm((f) => ({ ...f, verse: e.target.value }))}
                    placeholder="Verse text (optional)"
                    className="px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />
                  <input
                    value={form.verseRef}
                    onChange={(e) => setForm((f) => ({ ...f, verseRef: e.target.value }))}
                    placeholder="Reference (e.g. John 3:16)"
                    className="px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => { setShowCompose(false); resetForm(); }}
                  className="flex-1 py-2.5 rounded-xl font-bold text-sm"
                  style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!form.title.trim()}
                  className="flex-1 py-2.5 rounded-xl font-black text-sm"
                  style={{
                    background: form.title.trim() ? "linear-gradient(135deg, #00FF88, #00BB55)" : "rgba(255,255,255,0.06)",
                    color: form.title.trim() ? "#07070F" : "#4A4A68",
                  }}
                >
                  {editingId ? "Save Changes" : "Add Milestone"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete confirm */}
        {confirmDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="rounded-2xl p-6 max-w-sm w-full" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              <p className="font-black text-base mb-2" style={{ color: "#F2F2F8" }}>Delete this milestone?</p>
              <p className="text-sm mb-5" style={{ color: "#6A6A88" }}>This can&apos;t be undone.</p>
              <div className="flex gap-3">
                <button onClick={() => setConfirmDelete(null)} className="flex-1 py-2 rounded-xl font-bold text-sm" style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}>Cancel</button>
                <button onClick={() => handleDelete(confirmDelete)} className="flex-1 py-2 rounded-xl font-black text-sm" style={{ background: "rgba(239,68,68,0.15)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.3)" }}>Delete</button>
              </div>
            </div>
          </div>
        )}

        {/* Timeline */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {sorted.length === 0 ? (
            <div className="text-center py-20" style={{ color: "#4A4A68" }}>
              <Sparkles size={48} className="mx-auto mb-4 opacity-20" />
              <p className="font-black text-lg mb-2" style={{ color: "#F2F2F8" }}>Your journey starts here</p>
              <p className="text-sm">Add your first milestone to begin mapping your story with God.</p>
            </div>
          ) : (
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: "linear-gradient(to bottom, #00FF88, #6B4FBB, rgba(107,79,187,0))" }} />

              <div className="space-y-1">
                {years.map((year) => {
                  const yearMilestones = sorted.filter((m) => m.year === year);
                  return (
                    <div key={year}>
                      {/* Year label */}
                      <div className="flex items-center gap-4 mb-2 mt-6 first:mt-0">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-black shrink-0 z-10 relative" style={{ background: "#07070F", border: "2px solid rgba(0,255,136,0.4)", color: "#00FF88" }}>
                          {year}
                        </div>
                        <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
                      </div>

                      {yearMilestones.map((m) => {
                        const cat = categoryMap[m.category] ?? categoryMap["other"];
                        return (
                          <div
                            key={m.id}
                            className="flex gap-4 pl-0 mb-4"
                            onMouseEnter={() => setHoveredId(m.id)}
                            onMouseLeave={() => setHoveredId(null)}
                          >
                            {/* Dot */}
                            <div className="shrink-0 w-12 flex justify-center">
                              <div
                                className="w-6 h-6 rounded-full flex items-center justify-center text-xs z-10 relative mt-3"
                                style={{
                                  background: `${cat.color}20`,
                                  border: `2px solid ${cat.color}60`,
                                  boxShadow: m.significance === 3 ? `0 0 12px ${cat.color}40` : "none",
                                }}
                              >
                                <span style={{ fontSize: "10px" }}>{cat.icon}</span>
                              </div>
                            </div>

                            {/* Card */}
                            <div
                              className="flex-1 rounded-2xl p-5 transition-all"
                              style={{
                                background: m.significance === 3 ? `linear-gradient(135deg, ${cat.color}08 0%, rgba(0,0,0,0) 100%)` : "#12121F",
                                border: m.significance === 3 ? `1px solid ${cat.color}25` : "1px solid #1E1E32",
                              }}
                            >
                              <div className="flex items-start justify-between gap-3 mb-2">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 flex-wrap mb-1">
                                    <span className="text-xs font-bold" style={{ color: "#4A4A68" }}>
                                      {MONTHS[m.month - 1]} {m.year}
                                    </span>
                                    <span
                                      className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                                      style={{ background: `${cat.color}15`, color: cat.color, border: `1px solid ${cat.color}30` }}
                                    >
                                      {cat.label}
                                    </span>
                                    <span className="text-[10px]" style={{ color: significanceColor(m.significance) }}>
                                      {"★".repeat(m.significance)}
                                    </span>
                                  </div>
                                  <h3 className="font-black text-base leading-tight" style={{ color: "#F2F2F8" }}>{m.title}</h3>
                                </div>
                                {hoveredId === m.id && (
                                  <div className="flex gap-1 shrink-0">
                                    <button onClick={() => handleEdit(m)} className="p-1.5 rounded-lg" style={{ color: "#4A4A68" }} title="Edit"><Edit2 size={13} /></button>
                                    <button onClick={() => setConfirmDelete(m.id)} className="p-1.5 rounded-lg" style={{ color: "#4A4A68" }} title="Delete"><Trash2 size={13} /></button>
                                  </div>
                                )}
                              </div>

                              {m.description && (
                                <p className="text-sm leading-relaxed mb-3" style={{ color: "#C0C0D8" }}>{m.description}</p>
                              )}

                              {m.verse && m.verseRef && (
                                <div className="p-3 rounded-xl" style={{ background: "rgba(107,79,187,0.07)", border: "1px solid rgba(107,79,187,0.12)" }}>
                                  <p className="text-xs italic mb-1" style={{ color: "#C0C0D8" }}>&ldquo;{m.verse}&rdquo;</p>
                                  <p className="text-xs font-bold" style={{ color: "#9B8FEB" }}>— {m.verseRef}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}

                {/* Future dot */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black shrink-0 z-10 relative" style={{ background: "rgba(0,255,136,0.1)", border: "2px dashed rgba(0,255,136,0.3)", color: "#00FF88" }}>
                    →
                  </div>
                  <p className="text-sm font-semibold" style={{ color: "#4A4A68" }}>Your story continues...</p>
                  <button
                    onClick={() => { resetForm(); setShowCompose(true); }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold"
                    style={{ background: "rgba(0,255,136,0.08)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.2)" }}
                  >
                    <Plus size={12} /> Add
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Stats row */}
          {milestones.length > 0 && (
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Total milestones", value: milestones.length, color: "#00FF88" },
                { label: "Major milestones", value: milestones.filter((m) => m.significance === 3).length, color: "#EC4899" },
                { label: "Years of journey", value: years.length > 0 ? currentYear - years[0] + 1 : 1, color: "#6B4FBB" },
                { label: "Categories covered", value: new Set(milestones.map((m) => m.category)).size, color: "#F59E0B" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                  <p className="text-2xl font-black mb-1" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-xs" style={{ color: "#4A4A68" }}>{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
