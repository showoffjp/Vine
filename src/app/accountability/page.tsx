"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Plus, X, CheckCircle2, Circle, MessageSquare, Flame, Shield, ChevronRight, Clock } from "lucide-react";

interface CheckIn {
  date: string;
  note: string;
  completed: boolean;
}

interface AccountabilityGoal {
  id: string;
  title: string;
  description: string;
  category: string;
  frequency: "daily" | "weekly" | "monthly";
  partnerName: string;
  partnerInitials: string;
  partnerColor: string;
  startDate: string;
  checkIns: CheckIn[];
  streak: number;
  active: boolean;
}

const CATEGORIES = [
  { id: "prayer", label: "Prayer Life", icon: "🙏", color: "#6B4FBB" },
  { id: "scripture", label: "Bible Reading", icon: "📖", color: "#3B82F6" },
  { id: "purity", label: "Purity", icon: "🛡️", color: "#00FF88" },
  { id: "sobriety", label: "Sobriety", icon: "🌿", color: "#10B981" },
  { id: "fitness", label: "Physical Discipline", icon: "💪", color: "#F59E0B" },
  { id: "finances", label: "Financial Stewardship", icon: "💰", color: "#EC4899" },
  { id: "relationships", label: "Relationships", icon: "❤️", color: "#EF4444" },
  { id: "work", label: "Work Integrity", icon: "⚡", color: "#8B5CF6" },
  { id: "fasting", label: "Fasting Practice", icon: "✨", color: "#F97316" },
  { id: "other", label: "Other", icon: "⭐", color: "#8A8AA8" },
];

const catMap = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

const today = new Date().toISOString().split("T")[0];
const thisWeek = Array.from({ length: 7 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - 6 + i);
  return d.toISOString().split("T")[0];
});

const seedGoals: AccountabilityGoal[] = [
  {
    id: "ag-001",
    title: "Daily morning prayer — 15 minutes minimum",
    description: "Spend at least 15 minutes in prayer every morning before looking at my phone. Using the ACTS model: Adoration, Confession, Thanksgiving, Supplication.",
    category: "prayer",
    frequency: "daily",
    partnerName: "Marcus Thompson",
    partnerInitials: "MT",
    partnerColor: "#3B82F6",
    startDate: "2026-05-01",
    checkIns: [
      { date: "2026-05-21", note: "Did 20 min this morning. Really focused on intercession for James.", completed: true },
      { date: "2026-05-22", note: "Rushed this morning. 8 minutes. Need to get to bed earlier.", completed: true },
      { date: "2026-05-23", note: "Full 20 min. Read Psalm 63 as a launching point.", completed: true },
      { date: "2026-05-24", note: "Missed — family emergency. Back on track tomorrow.", completed: false },
      { date: "2026-05-25", note: "Made up for yesterday. 30 min.", completed: true },
      { date: "2026-05-26", note: "Solid 15 min. Prayed through my list.", completed: true },
    ],
    streak: 5,
    active: true,
  },
  {
    id: "ag-002",
    title: "Read through New Testament in 90 days",
    description: "Following the Reading Plan. Checking in with David every Sunday on what stood out and any questions that came up.",
    category: "scripture",
    frequency: "daily",
    partnerName: "David Kwan",
    partnerInitials: "DK",
    partnerColor: "#10B981",
    startDate: "2026-03-15",
    checkIns: [
      { date: "2026-05-20", note: "Finished Acts this week. The prayer culture of the early church is convicting.", completed: true },
      { date: "2026-05-21", note: "Romans 1-4 today. The doctrine of justification is hitting differently this time.", completed: true },
      { date: "2026-05-22", note: "Romans 5-8. Chapter 8 is extraordinary. Read it twice.", completed: true },
      { date: "2026-05-23", note: "Romans 9-12. Wrestling with election. Good questions to bring to the group.", completed: true },
      { date: "2026-05-24", note: "Romans 13-16. Paul's final greetings — 26 people named. Ministry is personal.", completed: true },
      { date: "2026-05-25", note: "Started 1 Corinthians. The church at Corinth makes me feel better about my church.", completed: true },
      { date: "2026-05-26", note: "1 Cor 12-14. Spiritual gifts chapter. Timely.", completed: true },
    ],
    streak: 12,
    active: true,
  },
  {
    id: "ag-003",
    title: "No social media before 8am or after 9pm",
    description: "Protecting morning and evening as sacred space. Phone stays in kitchen overnight. Checking in weekly with Sarah on how this is impacting our marriage and my sleep.",
    category: "purity",
    frequency: "weekly",
    partnerName: "Sarah (wife)",
    partnerInitials: "SH",
    partnerColor: "#EC4899",
    startDate: "2026-04-01",
    checkIns: [
      { date: "2026-05-04", note: "Week 1: Mostly good. Failed twice — once at 5am, once at 10pm. Sarah noticed I was more present at dinner.", completed: true },
      { date: "2026-05-11", note: "Week 2: Only one slip. Sleep has genuinely improved. Morning time feels different.", completed: true },
      { date: "2026-05-18", note: "Week 3: Perfect week. Sarah said this is the best month of our marriage in years. That's worth more than my Twitter feed.", completed: true },
      { date: "2026-05-25", note: "Week 4: Two slips but catching them faster. Building the muscle.", completed: true },
    ],
    streak: 4,
    active: true,
  },
];

export default function AccountabilityPage() {
  const [goals, setGoals] = useState<AccountabilityGoal[]>(() => {
    try {
      const s = localStorage.getItem("vine_accountability");
      return s ? JSON.parse(s) : seedGoals;
    } catch { return seedGoals; }
  });

  const [showCompose, setShowCompose] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(goals[0]?.id ?? null);
  const [checkInNote, setCheckInNote] = useState("");
  const [activeTab, setActiveTab] = useState<"active" | "completed">("active");

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "prayer",
    frequency: "daily" as "daily" | "weekly" | "monthly",
    partnerName: "",
    partnerInitials: "",
    partnerColor: "#00FF88",
  });

  useEffect(() => {
    try { localStorage.setItem("vine_accountability", JSON.stringify(goals)); } catch {}
  }, [goals]);

  const handleCheckIn = (goalId: string, completed: boolean) => {
    setGoals((prev) => prev.map((g) => {
      if (g.id !== goalId) return g;
      const existing = g.checkIns.find((c) => c.date === today);
      let updatedCheckIns: CheckIn[];
      if (existing) {
        updatedCheckIns = g.checkIns.map((c) => c.date === today ? { ...c, completed, note: checkInNote || c.note } : c);
      } else {
        updatedCheckIns = [...g.checkIns, { date: today, note: checkInNote, completed }];
      }
      const recentStreak = [...updatedCheckIns]
        .filter((c) => c.completed)
        .sort((a, b) => b.date.localeCompare(a.date))
        .length;
      setCheckInNote("");
      return { ...g, checkIns: updatedCheckIns, streak: recentStreak };
    }));
  };

  const handleCreateGoal = () => {
    if (!form.title.trim() || !form.partnerName.trim()) return;
    const initials = form.partnerInitials.trim() || form.partnerName.trim().split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
    const newGoal: AccountabilityGoal = {
      id: `ag-${Date.now()}`,
      title: form.title,
      description: form.description,
      category: form.category,
      frequency: form.frequency,
      partnerName: form.partnerName,
      partnerInitials: initials,
      partnerColor: form.partnerColor,
      startDate: today,
      checkIns: [],
      streak: 0,
      active: true,
    };
    setGoals((prev) => [newGoal, ...prev]);
    setSelectedGoal(newGoal.id);
    setForm({ title: "", description: "", category: "prayer", frequency: "daily", partnerName: "", partnerInitials: "", partnerColor: "#00FF88" });
    setShowCompose(false);
  };

  const activeGoals = goals.filter((g) => g.active);
  const completedGoals = goals.filter((g) => !g.active);
  const selectedGoalData = goals.find((g) => g.id === selectedGoal);

  const todayCheckedIn = selectedGoalData?.checkIns.find((c) => c.date === today);
  const recentCheckIns = selectedGoalData?.checkIns.slice(-14).reverse() ?? [];
  const weekCheckIns = selectedGoalData?.checkIns.filter((c) => thisWeek.includes(c.date)) ?? [];
  const weekCompletedCount = weekCheckIns.filter((c) => c.completed).length;

  const PARTNER_COLORS = ["#00FF88", "#6B4FBB", "#3B82F6", "#EC4899", "#F59E0B", "#10B981", "#EF4444", "#8B5CF6"];

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">

        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-2">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={18} style={{ color: "#00FF88" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>Accountability</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black mb-3">
                Iron sharpens{" "}
                <span style={{ background: "linear-gradient(135deg, #00FF88, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  iron.
                </span>
              </h1>
              <p className="text-lg max-w-xl" style={{ color: "#6A6A88" }}>
                Private accountability goals with real partners. Track progress, share notes, and stay consistent.
              </p>
            </div>
            <button
              onClick={() => setShowCompose(true)}
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm"
              style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)", color: "#07070F" }}
            >
              <Plus size={15} /> New Goal
            </button>
          </div>
        </div>

        {/* Compose Modal */}
        {showCompose && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}>
            <div className="w-full max-w-lg rounded-2xl p-6 max-h-[90vh] overflow-y-auto" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-black text-lg" style={{ color: "#F2F2F8" }}>New Accountability Goal</h3>
                <button onClick={() => setShowCompose(false)} style={{ color: "#4A4A68" }}><X size={20} /></button>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Category</label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {CATEGORIES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setForm((f) => ({ ...f, category: c.id }))}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all"
                        style={{
                          background: form.category === c.id ? `${c.color}18` : "rgba(255,255,255,0.03)",
                          border: form.category === c.id ? `1px solid ${c.color}50` : "1px solid rgba(255,255,255,0.06)",
                          color: form.category === c.id ? c.color : "#6A6A88",
                        }}
                      >
                        <span>{c.icon}</span> {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Frequency</label>
                  <div className="flex gap-2">
                    {(["daily", "weekly", "monthly"] as const).map((f) => (
                      <button
                        key={f}
                        onClick={() => setForm((prev) => ({ ...prev, frequency: f }))}
                        className="flex-1 py-2 rounded-lg text-xs font-bold capitalize"
                        style={{
                          background: form.frequency === f ? "rgba(0,255,136,0.15)" : "rgba(255,255,255,0.03)",
                          border: form.frequency === f ? "1px solid rgba(0,255,136,0.4)" : "1px solid rgba(255,255,255,0.06)",
                          color: form.frequency === f ? "#00FF88" : "#6A6A88",
                        }}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <input
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  placeholder="Goal title"
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />
                <textarea
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  placeholder="Describe your goal and your 'why'..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />

                <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-xs font-black mb-3" style={{ color: "#F2F2F8" }}>Accountability Partner</p>
                  <input
                    value={form.partnerName}
                    onChange={(e) => setForm((f) => ({ ...f, partnerName: e.target.value }))}
                    placeholder="Partner name"
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none mb-2"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />
                  <input
                    value={form.partnerInitials}
                    onChange={(e) => setForm((f) => ({ ...f, partnerInitials: e.target.value.toUpperCase().slice(0, 2) }))}
                    placeholder="Initials (auto-generated if blank)"
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none mb-2"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />
                  <div className="flex gap-2 flex-wrap">
                    {PARTNER_COLORS.map((c) => (
                      <button
                        key={c}
                        onClick={() => setForm((f) => ({ ...f, partnerColor: c }))}
                        className="w-7 h-7 rounded-full transition-all"
                        style={{
                          background: c,
                          outline: form.partnerColor === c ? `2px solid ${c}` : "none",
                          outlineOffset: "2px",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-5">
                <button onClick={() => setShowCompose(false)} className="flex-1 py-2.5 rounded-xl font-bold text-sm" style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}>
                  Cancel
                </button>
                <button
                  onClick={handleCreateGoal}
                  disabled={!form.title.trim() || !form.partnerName.trim()}
                  className="flex-1 py-2.5 rounded-xl font-black text-sm"
                  style={{
                    background: (form.title.trim() && form.partnerName.trim()) ? "linear-gradient(135deg, #00FF88, #00BB55)" : "rgba(255,255,255,0.06)",
                    color: (form.title.trim() && form.partnerName.trim()) ? "#07070F" : "#4A4A68",
                  }}
                >
                  Create Goal
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            {/* Left: Goal list */}
            <div className="w-72 shrink-0">
              <div className="flex gap-2 mb-4">
                {(["active", "completed"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className="flex-1 py-1.5 rounded-lg text-xs font-bold capitalize"
                    style={{
                      background: activeTab === t ? "rgba(0,255,136,0.12)" : "rgba(255,255,255,0.03)",
                      border: activeTab === t ? "1px solid rgba(0,255,136,0.3)" : "1px solid rgba(255,255,255,0.06)",
                      color: activeTab === t ? "#00FF88" : "#6A6A88",
                    }}
                  >
                    {t} ({(t === "active" ? activeGoals : completedGoals).length})
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                {(activeTab === "active" ? activeGoals : completedGoals).map((g) => {
                  const cat = catMap[g.category] ?? catMap["other"];
                  const todayDone = g.checkIns.find((c) => c.date === today)?.completed;
                  return (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGoal(g.id)}
                      className="w-full text-left p-4 rounded-xl transition-all"
                      style={{
                        background: selectedGoal === g.id ? `${cat.color}10` : "#12121F",
                        border: selectedGoal === g.id ? `1px solid ${cat.color}30` : "1px solid #1E1E32",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span>{cat.icon}</span>
                        <span className="text-xs font-bold truncate flex-1" style={{ color: "#F2F2F8" }}>{g.title}</span>
                        {todayDone && <CheckCircle2 size={12} className="shrink-0" style={{ color: "#00FF88" }} />}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black" style={{ background: g.partnerColor, color: "#07070F" }}>
                          {g.partnerInitials}
                        </div>
                        <span className="text-[10px]" style={{ color: "#4A4A68" }}>{g.partnerName}</span>
                        <div className="ml-auto flex items-center gap-0.5">
                          <Flame size={9} style={{ color: "#F59E0B" }} />
                          <span className="text-[10px] font-bold" style={{ color: "#F59E0B" }}>{g.streak}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Detail */}
            {selectedGoalData ? (
              <div className="flex-1 min-w-0">
                {(() => {
                  const g = selectedGoalData;
                  const cat = catMap[g.category] ?? catMap["other"];
                  const todayCI = g.checkIns.find((c) => c.date === today);
                  return (
                    <div>
                      {/* Goal header */}
                      <div className="rounded-2xl p-6 mb-5" style={{ background: `${cat.color}08`, border: `1px solid ${cat.color}25` }}>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl" style={{ background: `${cat.color}15` }}>
                            {cat.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${cat.color}15`, color: cat.color, border: `1px solid ${cat.color}30` }}>{cat.label}</span>
                              <span className="text-xs font-semibold capitalize" style={{ color: "#4A4A68" }}>{g.frequency} check-ins</span>
                            </div>
                            <h2 className="font-black text-xl leading-snug mb-2" style={{ color: "#F2F2F8" }}>{g.title}</h2>
                            {g.description && <p className="text-sm" style={{ color: "#8A8AA8" }}>{g.description}</p>}
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 mt-5">
                          <div className="rounded-xl p-3 text-center" style={{ background: "rgba(0,0,0,0.2)" }}>
                            <p className="text-xl font-black" style={{ color: "#F59E0B" }}>{g.streak}</p>
                            <p className="text-[10px]" style={{ color: "#4A4A68" }}>Current streak</p>
                          </div>
                          <div className="rounded-xl p-3 text-center" style={{ background: "rgba(0,0,0,0.2)" }}>
                            <p className="text-xl font-black" style={{ color: "#00FF88" }}>{weekCompletedCount}/7</p>
                            <p className="text-[10px]" style={{ color: "#4A4A68" }}>This week</p>
                          </div>
                          <div className="rounded-xl p-3 text-center" style={{ background: "rgba(0,0,0,0.2)" }}>
                            <p className="text-xl font-black" style={{ color: "#6B4FBB" }}>{g.checkIns.filter((c) => c.completed).length}</p>
                            <p className="text-[10px]" style={{ color: "#4A4A68" }}>Total completions</p>
                          </div>
                        </div>
                      </div>

                      {/* Partner */}
                      <div className="rounded-2xl p-5 mb-5 flex items-center gap-4" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black" style={{ background: g.partnerColor, color: "#07070F" }}>
                          {g.partnerInitials}
                        </div>
                        <div>
                          <p className="font-black text-sm" style={{ color: "#F2F2F8" }}>{g.partnerName}</p>
                          <p className="text-xs" style={{ color: "#4A4A68" }}>Accountability partner · Started {g.startDate}</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "rgba(107,79,187,0.1)", border: "1px solid rgba(107,79,187,0.2)" }}>
                          <MessageSquare size={12} style={{ color: "#9B8FEB" }} />
                          <span className="text-xs font-bold" style={{ color: "#9B8FEB" }}>Check in with them</span>
                        </div>
                      </div>

                      {/* Today's check-in */}
                      <div className="rounded-2xl p-5 mb-5" style={{ background: "#12121F", border: todayCI ? (todayCI.completed ? "1px solid rgba(0,255,136,0.3)" : "1px solid rgba(239,68,68,0.2)") : "1px solid #1E1E32" }}>
                        <div className="flex items-center gap-2 mb-3">
                          <Clock size={14} style={{ color: "#4A4A68" }} />
                          <h3 className="font-black text-sm" style={{ color: "#F2F2F8" }}>
                            {todayCI ? (todayCI.completed ? "✅ Today — Completed!" : "❌ Today — Missed") : "Today's Check-In"}
                          </h3>
                        </div>
                        {!todayCI ? (
                          <>
                            <textarea
                              value={checkInNote}
                              onChange={(e) => setCheckInNote(e.target.value)}
                              placeholder="Add a note for your partner (optional)..."
                              rows={3}
                              className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none mb-3"
                              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                            />
                            <div className="flex gap-3">
                              <button
                                onClick={() => handleCheckIn(g.id, true)}
                                className="flex-1 py-2.5 rounded-xl font-black text-sm flex items-center justify-center gap-2"
                                style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)", color: "#07070F" }}
                              >
                                <CheckCircle2 size={15} /> Mark Complete
                              </button>
                              <button
                                onClick={() => handleCheckIn(g.id, false)}
                                className="px-4 py-2.5 rounded-xl font-bold text-sm"
                                style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.2)" }}
                              >
                                Missed today
                              </button>
                            </div>
                          </>
                        ) : (
                          <p className="text-sm" style={{ color: "#8A8AA8" }}>{todayCI.note || "No note added."}</p>
                        )}
                      </div>

                      {/* Recent check-ins */}
                      <div className="rounded-2xl p-5" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                        <h3 className="font-black text-sm mb-4" style={{ color: "#F2F2F8" }}>Recent Check-Ins</h3>
                        {recentCheckIns.length === 0 ? (
                          <p className="text-sm text-center py-4" style={{ color: "#4A4A68" }}>No check-ins yet. Start today!</p>
                        ) : (
                          <div className="space-y-3">
                            {recentCheckIns.map((ci) => (
                              <div key={ci.date} className="flex gap-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.02)" }}>
                                <div className="mt-0.5">
                                  {ci.completed
                                    ? <CheckCircle2 size={14} style={{ color: "#00FF88" }} />
                                    : <Circle size={14} style={{ color: "#EF4444" }} />
                                  }
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-bold mb-0.5" style={{ color: "#6A6A88" }}>
                                    {new Date(ci.date + "T12:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                                  </p>
                                  {ci.note && <p className="text-sm" style={{ color: "#C0C0D8" }}>{ci.note}</p>}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center" style={{ color: "#4A4A68" }}>
                <div className="text-center">
                  <Shield size={48} className="mx-auto mb-4 opacity-20" />
                  <p className="font-black text-lg mb-2" style={{ color: "#F2F2F8" }}>No goals yet</p>
                  <p className="text-sm mb-4">Create your first accountability goal to get started.</p>
                  <button onClick={() => setShowCompose(true)} className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm mx-auto" style={{ background: "rgba(0,255,136,0.1)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.2)" }}>
                    <Plus size={14} /> Create Goal
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
