"use client";

import { useState, useEffect } from "react";
import {
  Flame,
  CheckCircle2,
  Circle,
  Plus,
  ChevronRight,
  BookOpen,
  Heart,
  Trophy,
} from "lucide-react";

type FastType = "Complete" | "Partial (liquids only)" | "Daniel Fast" | "Media Fast" | "Social Media Fast" | "Custom";
type FastDuration = "Sunrise to Sunset" | "24 Hours" | "3 Days" | "7 Days" | "21 Days (Daniel)" | "Custom";

interface FastRecord {
  id: string;
  type: FastType;
  duration: FastDuration;
  purpose: string;
  startDate: string;
  endDate?: string;
  completed: boolean;
  notes: string;
}

const FAST_TYPES: FastType[] = [
  "Complete", "Partial (liquids only)", "Daniel Fast",
  "Media Fast", "Social Media Fast", "Custom",
];

const FAST_DURATIONS: FastDuration[] = [
  "Sunrise to Sunset", "24 Hours", "3 Days", "7 Days", "21 Days (Daniel)", "Custom",
];

const FASTING_TIPS = [
  { icon: "💧", tip: "Stay well-hydrated. Water is your friend during any fast." },
  { icon: "📖", tip: "Use hunger as a prayer trigger. Every pang = a moment to pray." },
  { icon: "🤫", tip: "Keep it private. Jesus warned against fasting to be seen by others (Matt 6:16-18)." },
  { icon: "🛌", tip: "Get extra rest. Your body needs recovery time during fasting." },
  { icon: "📝", tip: "Journal your experience. Some of the clearest spiritual insight comes during fasts." },
  { icon: "🔄", tip: "Break your fast gently. Start with broth, juice, or fruit before heavier foods." },
];

const BIBLICAL_BASIS = [
  { reference: "Matthew 6:16-18", summary: "Jesus assumes his followers will fast — not 'if' but 'when'" },
  { reference: "Isaiah 58:6-7", summary: "God's chosen fast: loosing chains, freeing the oppressed, sharing food" },
  { reference: "Acts 14:23", summary: "Paul and Barnabas fasted and prayed before appointing church elders" },
  { reference: "Joel 2:12", summary: "'Return to me with all your heart, with fasting, weeping, and mourning'" },
  { reference: "Daniel 10:3", summary: "Daniel fasted 21 days for revelation — the model for the Daniel Fast" },
];

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

const TODAY = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default function FastingPage() {
  const [records, setRecords] = useState<FastRecord[]>(() => {
    try {
      const s = localStorage.getItem("vine_fasting_records");
      return s ? (JSON.parse(s) as FastRecord[]) : [];
    } catch { return []; }
  });
  const [showNew, setShowNew] = useState(false);
  const [activeTab, setActiveTab] = useState<"current" | "history">("current");

  const [newType, setNewType] = useState<FastType>("Complete");
  const [newDuration, setNewDuration] = useState<FastDuration>("Sunrise to Sunset");
  const [newPurpose, setNewPurpose] = useState("");
  const [newNotes, setNewNotes] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_fasting_records", JSON.stringify(records)); } catch {}
  }, [records]);

  const startFast = () => {
    const record: FastRecord = {
      id: uid(),
      type: newType,
      duration: newDuration,
      purpose: newPurpose.trim(),
      startDate: TODAY,
      completed: false,
      notes: newNotes.trim(),
    };
    setRecords((prev) => [record, ...prev]);
    setNewType("Complete");
    setNewDuration("Sunrise to Sunset");
    setNewPurpose("");
    setNewNotes("");
    setShowNew(false);
  };

  const completeFast = (id: string) => {
    setRecords((prev) => prev.map((r) =>
      r.id === id ? { ...r, completed: true, endDate: TODAY } : r
    ));
  };

  const deleteRecord = (id: string) => {
    setRecords((prev) => prev.filter((r) => r.id !== id));
  };

  const current = records.filter((r) => !r.completed);
  const history = records.filter((r) => r.completed);
  const displayed = activeTab === "current" ? current : history;

  const totalFasts = records.length;
  const completedFasts = history.length;

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <div className="pb-24" style={{ paddingTop: 40 }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Flame size={18} style={{ color: "#00FF88" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>Spiritual Discipline</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-3">
              Fasting{" "}
              <span style={{ background: "linear-gradient(135deg, #00FF88, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Tracker
              </span>
            </h1>
            <p className="text-base max-w-lg mx-auto" style={{ color: "#6A6A88" }}>
              Fasting is a discipline Jesus expected, not just suggested. Track your fasts, set intentions, and journal what God reveals.
            </p>
          </div>

          {/* Stats */}
          {totalFasts > 0 && (
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Total Fasts", value: totalFasts, color: "#00FF88" },
                { label: "Completed", value: completedFasts, color: "#10B981" },
                { label: "In Progress", value: current.length, color: "#F59E0B" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                  <p className="text-2xl font-black mb-0.5" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-xs" style={{ color: "#6A6A88" }}>{s.label}</p>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Add Fast Button */}
              {!showNew && (
                <button
                  onClick={() => setShowNew(true)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold transition-all"
                  style={{ background: "rgba(0,255,136,0.06)", border: "1px dashed rgba(0,255,136,0.3)", color: "#00FF88" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,255,136,0.1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,255,136,0.06)"; }}
                >
                  <Plus size={16} /> Begin a New Fast
                </button>
              )}

              {/* New Fast Form */}
              {showNew && (
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "#12121F", border: "1px solid rgba(0,255,136,0.2)" }}
                >
                  <h3 className="font-black mb-5" style={{ color: "#F2F2F8" }}>Begin a New Fast</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider block mb-1.5" style={{ color: "#6A6A88" }}>Fast Type</label>
                        <select
                          value={newType}
                          onChange={(e) => setNewType(e.target.value as FastType)}
                          className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                          style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                        >
                          {FAST_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider block mb-1.5" style={{ color: "#6A6A88" }}>Duration</label>
                        <select
                          value={newDuration}
                          onChange={(e) => setNewDuration(e.target.value as FastDuration)}
                          className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                          style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                        >
                          {FAST_DURATIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1.5" style={{ color: "#6A6A88" }}>Purpose / Intention</label>
                      <input
                        type="text"
                        placeholder="What are you seeking God about?"
                        value={newPurpose}
                        onChange={(e) => setNewPurpose(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                        style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1.5" style={{ color: "#6A6A88" }}>Notes (optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Scriptures you're meditating on, specific prayers, etc."
                        value={newNotes}
                        onChange={(e) => setNewNotes(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none"
                        style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                      />
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowNew(false)}
                        className="flex-1 py-2.5 rounded-xl text-sm font-semibold"
                        style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#6A6A88" }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={startFast}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-black"
                        style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
                      >
                        <Flame size={14} /> Start Fast
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Tabs */}
              <div className="flex gap-1 p-1 rounded-xl" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                {(["current", "history"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition-all"
                    style={{
                      background: activeTab === tab ? "rgba(0,255,136,0.12)" : "transparent",
                      color: activeTab === tab ? "#00FF88" : "#6A6A88",
                      border: activeTab === tab ? "1px solid rgba(0,255,136,0.2)" : "1px solid transparent",
                    }}
                  >
                    {tab === "current" ? `In Progress (${current.length})` : `Completed (${history.length})`}
                  </button>
                ))}
              </div>

              {/* Records */}
              {displayed.length === 0 ? (
                <div
                  className="text-center py-14 rounded-2xl"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <div className="text-4xl mb-3">{activeTab === "current" ? "🙏" : "🏆"}</div>
                  <h3 className="font-black mb-1.5" style={{ color: "#F2F2F8" }}>
                    {activeTab === "current" ? "No active fasts" : "No completed fasts yet"}
                  </h3>
                  <p className="text-sm" style={{ color: "#6A6A88" }}>
                    {activeTab === "current" ? "Begin a fast above to start tracking." : "Complete your active fasts to see them here."}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {displayed.map((record) => (
                    <div
                      key={record.id}
                      className="rounded-2xl p-5"
                      style={{
                        background: record.completed ? "rgba(16,185,129,0.04)" : "rgba(245,158,11,0.04)",
                        border: `1px solid ${record.completed ? "rgba(16,185,129,0.2)" : "rgba(245,158,11,0.2)"}`,
                      }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="font-black" style={{ color: "#F2F2F8" }}>{record.type}</span>
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-full"
                              style={{
                                background: record.completed ? "rgba(16,185,129,0.12)" : "rgba(245,158,11,0.12)",
                                color: record.completed ? "#10B981" : "#F59E0B",
                              }}
                            >
                              {record.duration}
                            </span>
                          </div>
                          <p className="text-xs" style={{ color: "#4A4A68" }}>
                            Started {record.startDate}
                            {record.endDate && ` · Completed ${record.endDate}`}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {!record.completed && (
                            <button
                              onClick={() => completeFast(record.id)}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                              style={{ background: "rgba(16,185,129,0.1)", color: "#10B981", border: "1px solid rgba(16,185,129,0.2)" }}
                            >
                              <CheckCircle2 size={12} /> Complete
                            </button>
                          )}
                          {record.completed && (
                            <Trophy size={16} style={{ color: "#10B981" }} />
                          )}
                          <button
                            onClick={() => deleteRecord(record.id)}
                            className="p-1.5 rounded-lg transition-all"
                            style={{ color: "#4A4A68" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#EF4444")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#4A4A68")}
                          >
                            ×
                          </button>
                        </div>
                      </div>

                      {record.purpose && (
                        <div className="mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#4A4A68" }}>Purpose: </span>
                          <span className="text-sm" style={{ color: "#C0C0D8" }}>{record.purpose}</span>
                        </div>
                      )}
                      {record.notes && (
                        <p className="text-sm leading-relaxed" style={{ color: "#6A6A88" }}>{record.notes}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Tips */}
              <div className="rounded-2xl p-5" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <h3 className="text-sm font-black mb-4" style={{ color: "#F2F2F8" }}>Fasting Tips</h3>
                <div className="space-y-3">
                  {FASTING_TIPS.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-base shrink-0">{tip.icon}</span>
                      <p className="text-xs leading-relaxed" style={{ color: "#8A8AA8" }}>{tip.tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Biblical Basis */}
              <div className="rounded-2xl p-5" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <div className="flex items-center gap-1.5 mb-4">
                  <BookOpen size={13} style={{ color: "#00FF88" }} />
                  <h3 className="text-sm font-black" style={{ color: "#F2F2F8" }}>Biblical Basis</h3>
                </div>
                <div className="space-y-3">
                  {BIBLICAL_BASIS.map((b, i) => (
                    <div key={i} className="pb-3" style={{ borderBottom: i < BIBLICAL_BASIS.length - 1 ? "1px solid #1E1E32" : undefined }}>
                      <p className="text-xs font-bold mb-0.5" style={{ color: "#00FF88" }}>{b.reference}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "#6A6A88" }}>{b.summary}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.06), rgba(107,79,187,0.06))", border: "1px solid rgba(0,255,136,0.12)" }}
              >
                <Heart size={16} style={{ color: "#00FF88" }} className="mb-3" />
                <p className="text-xs italic leading-relaxed mb-2" style={{ color: "#C0C0D8" }}>
                  &ldquo;When you fast, do not look somber as the hypocrites do... But when you fast, put oil on your head and wash your face.&rdquo;
                </p>
                <p className="text-[10px] font-bold" style={{ color: "#4A4A68" }}>— Matthew 6:16-17</p>
                <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <a href="/bible" className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#00FF88" }}>
                    <BookOpen size={11} /> Open Bible Reader <ChevronRight size={11} />
                  </a>
                </div>
              </div>

              {/* Related */}
              <div className="rounded-2xl p-5" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <h3 className="text-sm font-black mb-3" style={{ color: "#F2F2F8" }}>Related</h3>
                {[
                  { label: "Prayer Wall", href: "/prayer", color: "#EC4899" },
                  { label: "Daily Devotional", href: "/daily", color: "#E07030" },
                  { label: "Journal", href: "/journal", color: "#6B4FBB" },
                  { label: "Faith Goals", href: "/goals", color: "#10B981" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between py-2 text-sm transition-all"
                    style={{ color: "#8A8AA8", borderBottom: "1px solid #1E1E32" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = link.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8AA8")}
                  >
                    {link.label}
                    <ChevronRight size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
