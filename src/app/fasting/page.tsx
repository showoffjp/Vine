"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";

import React, { useState, useEffect } from "react";
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
import { usePersistedState } from "@/hooks/usePersistedState";

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

function fmtToday() {
  return new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function FastingPage() {
  const [records, setRecords] = useState<FastRecord[]>(() => {
    try {
      const s = localStorage.getItem("vine_fasting_records");
      return s ? (JSON.parse(s) as FastRecord[]) : [];
    } catch { return []; }
  });
  const [showNew, setShowNew] = useState(false);
  const [activeTab, setActiveTab] = usePersistedState<"current" | "history">("vine_fasting_tab", "current");
  const [mainTab, setMainTab] = useState<"tracker" | "theology" | "voices" | "scripture" | "videos">("tracker");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_fasting_voice", "foster-fast");
  const VOICES_FAST = [
    { id: "foster-fast", name: "Richard Foster", era: "b. 1942", context: "Celebration of Discipline (1978) — the chapter on fasting that launched a generation of evangelical practice", bio: "Richard Foster's Celebration of Discipline remains the most widely read modern evangelical guide to the classical spiritual disciplines, and its chapter on fasting is credited with recovering fasting as a mainstream evangelical practice. Before Foster, fasting was largely absent from evangelical spirituality — associated with ascetic traditions many Protestants had rejected. Foster showed that fasting is not about earning God's favor but about loosening the grip of bodily appetite on the soul, creating space for heightened spiritual sensitivity, and expressing the seriousness of one's intercession. His treatment of fasting as a discipline of 'freedom from food's tyranny' rather than physical punishment changed the conversation.", quote: "Fasting reveals the things that control us. This is a wonderful benefit to the person who is fasting: the realization of what is mastering your life. If we are given to food, food will be revealed as controlling us. If we find that we are full of resentment or anger, fasting will surface them. If we discover pride or envy, fasting will expose them.", contribution: "Foster's chapter on fasting in Celebration of Discipline recovered the discipline for evangelicalism. The book's enormous influence — it has sold millions of copies — brought fasting back into mainstream evangelical practice and gave Christians a theological framework for understanding fasting that was neither ascetic self-torture nor mechanistic spiritual technique." },
    { id: "whitney-fast", name: "Don Whitney", era: "b. 1957", context: "Spiritual Disciplines for the Christian Life (1991) — practical guide to biblical fasting", bio: "Don Whitney's chapter on fasting in Spiritual Disciplines for the Christian Life is the most practically helpful evangelical treatment of the discipline available. Whitney defines biblical fasting carefully: it is always voluntary abstinence from food for spiritual purposes. He addresses the most common practical questions — how long to fast, what to do with the hunger, how to break a fast, what to expect spiritually — with pastoral directness. His insistence that fasting is not about achieving a spiritual high or a prayer technique but about expressing the priorities of the soul has kept his treatment from both triumphalism and legalism.", quote: "Fasting is Christian in its nature — it belongs to the new covenant as naturally as prayer and giving. Jesus said 'when you fast' — not 'if you fast.' The discipline is assumed. The only question is whether we will practice it.", contribution: "Whitney's treatment of fasting in Spiritual Disciplines for the Christian Life is the most used practical guide to the discipline in evangelical churches and seminaries. His clear definition, his biblical grounding, and his practical guidance have given Christians a framework for beginning and sustaining the practice that is both accessible and theologically serious." },
    { id: "piper-fast", name: "John Piper", era: "b. 1946", context: "A Hunger for God (1997) — fasting as a declaration that God is better than food", bio: "John Piper's A Hunger for God is the most theologically distinctive evangelical treatment of fasting. Piper's central argument is counterintuitive: fasting is not primarily about self-denial but about hunger — a hunger for God that is so intense it makes physical food seem unimportant by comparison. The person who never fasts, Piper suggests, is in danger of being satisfied with what the world offers rather than hungry for what God alone can give. His reading of Matthew 9:15 — 'the bridegroom has been taken away; then they will fast' — grounds fasting in eschatological longing: we fast because the wedding feast has not yet come, and we ache for it.", quote: "Christian fasting is a test of whether God or food is the deeper longing of our hearts. Fasting is hunger born of a greater hunger — a hunger that finds the pleasures of this world thin and is longing for the fullness of God.", contribution: "A Hunger for God reframed evangelical fasting from a technique for getting answers from God to an expression of longing for God himself. Piper's eschatological and Christocentric account of fasting — rooted in the absence of the bridegroom — gave Christians a theologically rich motivation for the practice that transcended mere self-discipline or prayer strategy." },
    { id: "towns-e", name: "Elmer Towns", era: "b. 1932", context: "Fasting for Spiritual Breakthrough (1996) — practical typology of biblical fasts", bio: "Elmer Towns's Fasting for Spiritual Breakthrough is the most comprehensive practical treatment of fasting in evangelical literature. Towns identifies nine different biblical fasts — the Disciples' Fast, the Ezra Fast, the Samuel Fast, the Elijah Fast, the Widow's Fast, the Paul Fast, the Daniel Fast, the John the Baptist Fast, and the Esther Fast — each associated with a specific spiritual purpose and each modeled on a specific biblical narrative. This typological approach gives Christians guidance for choosing the kind of fast appropriate to their specific need and situation, making the discipline more accessible and purposeful.", quote: "Fasting without prayer is just a diet. Prayer without fasting is fine — but fasting added to prayer creates an urgency and a seriousness that elevates the intercession. When you fast, you are saying: this matters enough to sacrifice for.", contribution: "Towns's typology of nine biblical fasts has given Christians a practical framework for understanding the diversity of fasting practice in Scripture and for choosing the appropriate fast for specific spiritual needs. His Fasting for Spiritual Breakthrough remains one of the most practically useful guides to fasting available in evangelical literature." },
    { id: "smith-fast", name: "James Bryan Smith", era: "b. 1958", context: "The Good and Beautiful God (2009) — fasting as training the body in kingdom priorities", bio: "James Bryan Smith's treatment of fasting in his 'Apprentice Series' (The Good and Beautiful God, The Good and Beautiful Life, The Good and Beautiful Community) situates the discipline within a comprehensive vision of apprenticeship to Jesus. Smith follows Dallas Willard in arguing that fasting is not primarily about food but about training the whole person — including the body — in kingdom priorities. The body has appetites and habits that must be brought under the discipline of the Spirit, and fasting is one of the most direct ways to do so. Smith's pastoral approach makes the discipline accessible to people who have never considered it as part of ordinary Christian life.", quote: "When we fast, we are practicing what the whole of Christian life requires: choosing the Kingdom over comfort, God's provision over our craving, the eternal over the immediate. Fasting is kingdom training — in miniature and in body.", contribution: "Smith's treatment of fasting within a comprehensive vision of apprenticeship to Jesus has made the discipline accessible to a generation of Christians who had no tradition of fasting in their background. His pastoral sensitivity and his integration of fasting into the whole of the spiritual life have helped people approach the discipline without the anxiety or legalism that can accompany it." },
  ];
  const voiceItem = VOICES_FAST.find(v => v.id === selectedVoice)!;

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
      startDate: fmtToday(),
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
      r.id === id ? { ...r, completed: true, endDate: fmtToday() } : r
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
      <Navbar />
      <div className="pb-24" style={{ paddingTop: 80 }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Flame size={18} style={{ color: "#3a7d56" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Spiritual Discipline</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-3">
              Fasting{" "}
              <span style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
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
                { label: "Total Fasts", value: totalFasts, color: "#3a7d56" },
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

          {/* Main Tab Bar */}
          <div className="flex gap-1 p-1 rounded-xl mb-6" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
            {(["tracker", "theology", "voices", "scripture", "videos"] as const).map((tab) => (
              <button key={tab} onClick={() => setMainTab(tab)}
                className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
                style={{ background: mainTab === tab ? "rgba(58,125,86,0.12)" : "transparent", color: mainTab === tab ? "#3a7d56" : "#6A6A88", border: mainTab === tab ? "1px solid rgba(58,125,86,0.2)" : "1px solid transparent" }}>
                {tab === "tracker" ? "📊 Tracker" : tab === "theology" ? "📖 Theology" : tab === "voices" ? "🎓 Voices" : tab === "scripture" ? "📜 Scripture" : "🎬 Videos"}
              </button>
            ))}
          </div>

          {mainTab === "tracker" && <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Add Fast Button */}
              {!showNew && (
                <button
                  onClick={() => setShowNew(true)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold transition-all"
                  style={{ background: "rgba(58,125,86,0.06)", border: "1px dashed rgba(58,125,86,0.3)", color: "#3a7d56" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(58,125,86,0.1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(58,125,86,0.06)"; }}
                >
                  <Plus size={16} /> Begin a New Fast
                </button>
              )}

              {/* New Fast Form */}
              {showNew && (
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "#12121F", border: "1px solid rgba(58,125,86,0.2)" }}
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
                        style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)" }}
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
                      background: activeTab === tab ? "rgba(58,125,86,0.12)" : "transparent",
                      color: activeTab === tab ? "#3a7d56" : "#6A6A88",
                      border: activeTab === tab ? "1px solid rgba(58,125,86,0.2)" : "1px solid transparent",
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
                  <BookOpen size={13} style={{ color: "#3a7d56" }} />
                  <h3 className="text-sm font-black" style={{ color: "#F2F2F8" }}>Biblical Basis</h3>
                </div>
                <div className="space-y-3">
                  {BIBLICAL_BASIS.map((b, i) => (
                    <div key={i} className="pb-3" style={{ borderBottom: i < BIBLICAL_BASIS.length - 1 ? "1px solid #1E1E32" : undefined }}>
                      <p className="text-xs font-bold mb-0.5" style={{ color: "#3a7d56" }}><VerseRef reference={b.reference} /></p>
                      <p className="text-xs leading-relaxed" style={{ color: "#6A6A88" }}>{b.summary}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "linear-gradient(135deg, rgba(58,125,86,0.06), rgba(107,79,187,0.06))", border: "1px solid rgba(58,125,86,0.12)" }}
              >
                <Heart size={16} style={{ color: "#3a7d56" }} className="mb-3" />
                <p className="text-xs italic leading-relaxed mb-2" style={{ color: "#C0C0D8" }}>
                  &ldquo;When you fast, do not look somber as the hypocrites do... But when you fast, put oil on your head and wash your face.&rdquo;
                </p>
                <p className="text-[10px] font-bold" style={{ color: "#4A4A68" }}>— Matthew 6:16-17</p>
                <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <Link href="/bible" className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#3a7d56" }}>
                    <BookOpen size={11} /> Open Bible Reader <ChevronRight size={11} />
                  </Link>
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
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between py-2 text-sm transition-all"
                    style={{ color: "#8A8AA8", borderBottom: "1px solid #1E1E32" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = link.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8AA8")}
                  >
                    {link.label}
                    <ChevronRight size={13} />
                  </Link>
                ))}
              </div>
            </div>
          </div>}

          {mainTab === "theology" && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, color: "#F2F2F8" }}>A Theology of Fasting</h2>
              <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                Why Jesus assumed his followers would fast — and what fasting is actually for.
              </p>
              {[
                { title: "Jesus Expected It — Not Merely Permitted It", color: "#3a7d56", desc: "In Matthew 6:16, Jesus says 'When you fast' — not 'if you fast.' He places fasting alongside prayer and giving as an assumed practice of kingdom discipleship. The early church fasted regularly (Acts 13:2-3, 14:23). The question is not whether fasting is valid for Christians but why so many Christians have abandoned it entirely." },
                { title: "Fasting Is Not Earning — It Is Longing", color: "#A080FF", desc: "The most common misconception: fasting earns God's answers or favor. It doesn't. Fasting is not a work that obligates God — it is an expression of longing. When we fast, we declare with our bodies that something matters so much that normal appetite is irrelevant. Piper: 'Fasting is hunger born of a greater hunger.'" },
                { title: "Fasting Reveals What Controls Us", color: "#F59E0B", desc: "Foster's insight: fasting surfaces what has mastery over us. When the hunger comes and we notice anger, anxiety, or resentment rising — that is diagnostic information. The physical discipline of fasting reveals the internal landscape of the soul. This is not punishment; it is revelation. And what is revealed can be brought to God." },
                { title: "The Daniel Fast and Partial Fasting", color: "#3a7d56", desc: "Daniel fasted from choice foods (meat, wine, delicacies) for 21 days while eating vegetables and water (Daniel 10). This pattern — the Daniel Fast — has become the most practiced form of fasting in contemporary evangelical Christianity. Partial fasting makes the discipline accessible to those with medical conditions that preclude complete abstinence from food." },
                { title: "Fasting Is Eschatological", color: "#A080FF", desc: "Jesus said his disciples would fast 'when the bridegroom has been taken away' (Matthew 9:15). This locates fasting in the interim between Christ's ascension and return. We fast because the wedding feast is not yet here, and we ache for it. Fasting is not sadness but longing — the holy homesickness of people who know where they belong and aren't there yet." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 22, marginBottom: 14 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {mainTab === "voices" && (
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
                {VOICES_FAST.map(v => (
                  <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(58,125,86,0.4)" : "#1E1E32"}`, background: selectedVoice === v.id ? "rgba(58,125,86,0.08)" : "#12121F", cursor: "pointer" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? "#3a7d56" : "#F2F2F8", marginBottom: 2 }}>{v.name}</div>
                    <div style={{ fontSize: 11, color: "#9898B3" }}>{v.era}</div>
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 12, color: "#9898B3", fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
                <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: "#F2F2F8" }}>{voiceItem.name}</h2>
                <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 20 }}>{voiceItem.era}</div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
                <div style={{ background: "#07070F", borderRadius: 12, padding: 20, borderLeft: "3px solid #3a7d56", marginBottom: 24 }}>
                  <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#6B4FBB", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          )}
          {mainTab === "scripture" && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, color: "#F2F2F8" }}>Fasting in Scripture</h2>
              <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                The Bible records fasting in crisis, grief, repentance, and preparation for mission. Here are the key passages and their contexts.
              </p>
              {[
                {
                  ref: "Matthew 6:16-18",
                  title: "Jesus on Fasting",
                  context: "Sermon on the Mount",
                  text: "When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting. Truly I tell you, they have received their reward in full. But when you fast, put oil on your head and wash your face, so that it will not be obvious to others that you are fasting, but only to your Father, who is unseen.",
                  note: "Jesus says 'when you fast' — not 'if.' He assumes fasting is part of the disciple's practice, just as he assumes prayer and giving are. The text's concern is not whether to fast but the motive: fasting done for public recognition has already received its reward. The fast Jesus endorses is hidden, personal, and directed to the Father alone.",
                  color: "#3a7d56",
                },
                {
                  ref: "Isaiah 58:3-7",
                  title: "The Fast God Chooses",
                  context: "Prophetic Critique of Religious Fasting",
                  text: "Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke? Is it not to share your food with the hungry and to provide the poor wanderer with shelter?",
                  note: "Isaiah's most pointed critique of religious fasting is that it can become self-focused — a private spiritual exercise that coexists with injustice and indifference to the poor. The fast God 'chooses' is one that produces justice, not just personal piety. This passage is the necessary corrective to fasting that is merely about self-discipline or spiritual intensity.",
                  color: "#A080FF",
                },
                {
                  ref: "Joel 2:12-13",
                  title: "Corporate Fast of Repentance",
                  context: "National Repentance",
                  text: "Return to me with all your heart, with fasting and weeping and mourning. Rend your heart and not your garments. Return to the Lord your God, for he is gracious and compassionate, slow to anger and abounding in love.",
                  note: "Joel's call to corporate, national fasting — 'rend your heart, not your garments' — is one of the OT's most striking treatments of authentic versus performative repentance. The physical act of fasting is meaningful only when it expresses genuine interior conversion. Torn garments are the external signal; the torn heart is the substance.",
                  color: "#F59E0B",
                },
                {
                  ref: "Acts 13:2-3",
                  title: "Fasting Before Mission",
                  context: "Commissioning of Paul and Barnabas",
                  text: "While they were worshiping the Lord and fasting, the Holy Spirit said, 'Set apart for me Barnabas and Saul for the work to which I have called them.' So after they had fasted and prayed, they placed their hands on them and sent them off.",
                  note: "The church at Antioch was fasting not as a crisis response but as an ordinary part of their worship. The Holy Spirit spoke in the context of fasting and prayer. This passage — along with Acts 14:23 (fasting at the appointment of elders) — establishes fasting as part of the church's regular preparation for significant decisions and commissions.",
                  color: "#3B82F6",
                },
                {
                  ref: "Esther 4:15-16",
                  title: "Fasting in Crisis",
                  context: "Before Esther Approaches the King",
                  text: "Then Esther sent this reply to Mordecai: 'Go, gather together all the Jews who are in Susa, and fast for me. Do not eat or drink for three days, night or day. I and my attendants will fast as you do. When this is done, I will go to the king, even though it is against the law. And if I perish, I perish.'",
                  note: "Esther's three-day fast before risking her life to approach the king is the most dramatic crisis fast in Scripture. She mobilizes the entire Jewish community to fast with her — recognizing that the need is too great for private prayer alone. God is not mentioned in the book of Esther, yet the structure of the narrative assumes divine response to corporate fasting and prayer.",
                  color: "#EC4899",
                },
                {
                  ref: "Luke 2:36-37",
                  title: "Anna's Lifetime of Fasting",
                  context: "The Prophetess at the Temple",
                  text: "There was also a prophet, Anna, the daughter of Penuel, of the tribe of Asher. She was very old; she had lived with her husband seven years after her marriage, and then was a widow until she was eighty-four. She never left the temple but worshiped night and day, fasting and praying.",
                  note: "Anna's life of fasting and prayer is presented as a model without qualification or critique. She is the first to recognize the infant Jesus as the redemption of Jerusalem. Her decades of persistent fasting are presented as the context in which her prophetic recognition of the Messiah occurred. Luke seems to suggest that her discipline of perception was cultivated by her discipline of fasting.",
                  color: "#3a7d56",
                },
              ].map((passage, i) => (
                <div key={i} style={{ background: "#12121F", border: `1px solid ${passage.color}25`, borderRadius: 14, padding: 22, marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: passage.color }}>{passage.ref}</span>
                    <span style={{ fontSize: 12, color: "#9898B3" }}>{passage.context}</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#F2F2F8", marginBottom: 12 }}>{passage.title}</h3>
                  <div style={{ background: "#07070F", borderRadius: 10, padding: 16, borderLeft: `3px solid ${passage.color}`, marginBottom: 14 }}>
                    <p style={{ fontSize: 13, color: "#D0D0E8", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{passage.text}</p>
                  </div>
                  <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{passage.note}</p>
                </div>
              ))}
            </div>
          )}
          {mainTab === "videos" && (
            <div>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 24, marginBottom: 24 }}>
                <h2 style={{ color: "#3a7d56", fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
                <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                  Video teachings on fasting — biblical foundations, practical guidance, and testimony from those who have built fasting into their spiritual lives.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    { videoId: "AJEoDKK55VY", title: "Fasting for Beginners — A Biblical Guide", channel: "Desiring God", description: "John Piper on the biblical theology of fasting: why Jesus assumed his disciples would fast, what fasting accomplishes spiritually, and practical advice for starting a fasting practice." },
                    { videoId: "ZYmk3DiPJVI", title: "The Daniel Fast: A 21-Day Fast Explained", channel: "Gateway Church", description: "A practical guide to the Daniel Fast — the most popular partial fast among Christians today. What it involves, its biblical basis, and how to use it for spiritual breakthrough." },
                    { videoId: "_Kq3k1JZjBE", title: "The Spiritual Discipline of Fasting", channel: "Renovaré", description: "Richard Foster on fasting as one of the classical spiritual disciplines — how it trains desire, creates space for God, and what to expect as you begin the practice." },
                    { videoId: "3kzJRABgLXw", title: "Corporate Fasting: When the Church Fasts Together", channel: "International House of Prayer", description: "Teaching on the biblical and historical practice of corporate fasting — its power, purpose, and how local churches can build fasting into their community rhythm." },
                  ].map(v => (
                    <div key={v.videoId} style={{ background: "#07070F", border: "1px solid #1E1E32", borderRadius: 10, overflow: "hidden" }}>
                      <iframe
                        width="100%"
                        style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                        src={`https://www.youtube.com/embed/${v.videoId}`}
                        title={v.title}
                        allowFullScreen
                      />
                      <div style={{ padding: "14px 16px" }}>
                        <h4 style={{ color: "#3a7d56", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                        <p style={{ color: "#6B4FBB", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                        <p style={{ color: "#9898B3", fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
