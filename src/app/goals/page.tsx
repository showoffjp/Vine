"use client";

import { useState, useEffect } from "react";
import {
  Target,
  Plus,
  CheckCircle2,
  Circle,
  Trash2,
  ChevronRight,
  Flame,
  BookOpen,
  Heart,
  Zap,
  Users,
  Music,
  X,
} from "lucide-react";

type GoalCategory = "Scripture" | "Prayer" | "Service" | "Community" | "Discipline" | "Evangelism" | "Other";

interface Goal {
  id: string;
  title: string;
  category: GoalCategory;
  target: number;
  current: number;
  unit: string;
  deadline?: string;
  createdAt: string;
  completedAt?: string;
}

const CATEGORY_CONFIG: Record<GoalCategory, { color: string; icon: typeof Target }> = {
  Scripture:   { color: "#3B82F6", icon: BookOpen },
  Prayer:      { color: "#8B5CF6", icon: Heart },
  Service:     { color: "#10B981", icon: Users },
  Community:   { color: "#00FF88", icon: Users },
  Discipline:  { color: "#F59E0B", icon: Zap },
  Evangelism:  { color: "#EF4444", icon: Flame },
  Other:       { color: "#6A6A88", icon: Target },
};

const CATEGORIES: GoalCategory[] = ["Scripture", "Prayer", "Service", "Community", "Discipline", "Evangelism", "Other"];

const PRESETS: { title: string; category: GoalCategory; target: number; unit: string }[] = [
  { title: "Read Bible chapters", category: "Scripture", target: 30, unit: "chapters" },
  { title: "Memorize verses", category: "Scripture", target: 10, unit: "verses" },
  { title: "Daily prayer days", category: "Prayer", target: 30, unit: "days" },
  { title: "Share the Gospel", category: "Evangelism", target: 5, unit: "conversations" },
  { title: "Volunteer hours", category: "Service", target: 20, unit: "hours" },
  { title: "Attend church services", category: "Community", target: 12, unit: "services" },
  { title: "Fast days", category: "Discipline", target: 4, unit: "days" },
  { title: "Journal entries", category: "Discipline", target: 30, unit: "entries" },
];

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>(() => {
    try {
      const s = localStorage.getItem("vine_goals");
      return s ? (JSON.parse(s) as Goal[]) : [];
    } catch { return []; }
  });
  const [showAdd, setShowAdd] = useState(false);
  const [activeTab, setActiveTab] = useState<"active" | "completed">("active");

  // New goal form state
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState<GoalCategory>("Scripture");
  const [newTarget, setNewTarget] = useState("30");
  const [newUnit, setNewUnit] = useState("chapters");
  const [newDeadline, setNewDeadline] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_goals", JSON.stringify(goals)); } catch {}
  }, [goals]);

  const addGoal = () => {
    if (!newTitle.trim() || !newTarget || Number(newTarget) <= 0) return;
    const goal: Goal = {
      id: uid(),
      title: newTitle.trim(),
      category: newCategory,
      target: Number(newTarget),
      current: 0,
      unit: newUnit.trim() || "times",
      deadline: newDeadline || undefined,
      createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    };
    setGoals((prev) => [goal, ...prev]);
    setNewTitle(""); setNewTarget("30"); setNewUnit("chapters"); setNewDeadline("");
    setShowAdd(false);
  };

  const addPreset = (p: typeof PRESETS[number]) => {
    const goal: Goal = {
      id: uid(),
      title: p.title,
      category: p.category,
      target: p.target,
      current: 0,
      unit: p.unit,
      createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    };
    setGoals((prev) => [goal, ...prev]);
  };

  const increment = (id: string, by: number) => {
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id !== id) return g;
        const next = Math.max(0, Math.min(g.target, g.current + by));
        const completed = next >= g.target && !g.completedAt;
        return { ...g, current: next, completedAt: completed ? new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : g.completedAt };
      })
    );
  };

  const deleteGoal = (id: string) => {
    setGoals((prev) => prev.filter((g) => g.id !== id));
  };

  const active = goals.filter((g) => !g.completedAt || g.current < g.target);
  const completed = goals.filter((g) => g.completedAt && g.current >= g.target);
  const displayed = activeTab === "active" ? active : completed;

  const totalGoals = goals.length;
  const completedCount = completed.length;
  const overallProgress = totalGoals === 0 ? 0 : Math.round(
    goals.reduce((sum, g) => sum + g.current / g.target, 0) / totalGoals * 100
  );

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <div className="pb-24" style={{ paddingTop: 40 }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Target size={18} style={{ color: "#00FF88" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>Faith Goals</span>
            </div>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-black">My Goals</h1>
                <p className="text-sm mt-1" style={{ color: "#6A6A88" }}>Track your spiritual disciplines and growth goals.</p>
              </div>
              <button
                onClick={() => setShowAdd(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-black"
                style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
              >
                <Plus size={14} /> New Goal
              </button>
            </div>
          </div>

          {/* Stats bar */}
          {totalGoals > 0 && (
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Total Goals", value: totalGoals, color: "#00FF88" },
                { label: "Completed", value: completedCount, color: "#10B981" },
                { label: "Avg Progress", value: `${overallProgress}%`, color: "#6B4FBB" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                  <p className="text-2xl font-black mb-0.5" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-xs" style={{ color: "#6A6A88" }}>{s.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-xl mb-6" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
            {(["active", "completed"] as const).map((tab) => (
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
                {tab} ({tab === "active" ? active.length : completed.length})
              </button>
            ))}
          </div>

          {/* Goal list */}
          {displayed.length === 0 ? (
            <div
              className="text-center py-16 rounded-2xl mb-8"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <div className="text-4xl mb-3">{activeTab === "active" ? "🎯" : "🏆"}</div>
              <h3 className="font-black text-lg mb-2" style={{ color: "#F2F2F8" }}>
                {activeTab === "active" ? "No active goals" : "No completed goals yet"}
              </h3>
              <p className="text-sm max-w-xs mx-auto" style={{ color: "#6A6A88" }}>
                {activeTab === "active" ? "Set a faith goal to start tracking your spiritual growth." : "Complete your active goals to see them here."}
              </p>
            </div>
          ) : (
            <div className="space-y-3 mb-8">
              {displayed.map((goal) => {
                const cfg = CATEGORY_CONFIG[goal.category];
                const Icon = cfg.icon;
                const pct = Math.min(100, Math.round((goal.current / goal.target) * 100));
                const done = goal.current >= goal.target;
                return (
                  <div
                    key={goal.id}
                    className="rounded-2xl p-5"
                    style={{
                      background: done ? "rgba(16,185,129,0.04)" : "#12121F",
                      border: `1px solid ${done ? "rgba(16,185,129,0.2)" : "#1E1E32"}`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${cfg.color}15` }}
                      >
                        <Icon size={18} style={{ color: cfg.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <p className="font-bold text-sm" style={{ color: "#F2F2F8" }}>{goal.title}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span
                                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                                style={{ background: `${cfg.color}12`, color: cfg.color }}
                              >
                                {goal.category}
                              </span>
                              {goal.deadline && (
                                <span className="text-[10px]" style={{ color: "#4A4A68" }}>by {goal.deadline}</span>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() => deleteGoal(goal.id)}
                            className="p-1 rounded transition-colors shrink-0"
                            style={{ color: "#3A3A58" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#EF4444")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#3A3A58")}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        {/* Progress */}
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex-1 h-2 rounded-full" style={{ background: "#1E1E32" }}>
                            <div
                              className="h-2 rounded-full transition-all duration-500"
                              style={{ width: `${pct}%`, background: done ? "#10B981" : cfg.color }}
                            />
                          </div>
                          <span className="text-xs font-bold shrink-0" style={{ color: done ? "#10B981" : cfg.color }}>
                            {goal.current}/{goal.target} {goal.unit}
                          </span>
                        </div>

                        {/* Controls */}
                        {!done && (
                          <div className="flex items-center gap-2 mt-3">
                            <button
                              onClick={() => increment(goal.id, -1)}
                              className="px-3 py-1.5 rounded-lg text-sm font-bold transition-all"
                              style={{ background: "#1E1E32", color: "#6A6A88" }}
                              disabled={goal.current === 0}
                            >
                              −
                            </button>
                            <button
                              onClick={() => increment(goal.id, 1)}
                              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-bold transition-all"
                              style={{ background: `${cfg.color}15`, color: cfg.color, border: `1px solid ${cfg.color}25` }}
                            >
                              <Plus size={12} /> Log +1
                            </button>
                            <button
                              onClick={() => increment(goal.id, 5)}
                              className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                              style={{ background: "#1E1E32", color: "#6A6A88" }}
                            >
                              +5
                            </button>
                            {goal.target - goal.current > 5 && (
                              <button
                                onClick={() => increment(goal.id, goal.target - goal.current)}
                                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                                style={{ background: "#1E1E32", color: "#6A6A88" }}
                              >
                                Complete
                              </button>
                            )}
                          </div>
                        )}

                        {done && (
                          <div className="flex items-center gap-1.5 mt-2">
                            <CheckCircle2 size={14} style={{ color: "#10B981" }} />
                            <span className="text-xs font-semibold" style={{ color: "#10B981" }}>
                              Completed {goal.completedAt ?? ""}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Quick-add presets */}
          {!showAdd && active.length === 0 && activeTab === "active" && (
            <div>
              <h3 className="text-base font-black mb-4" style={{ color: "#F2F2F8" }}>Popular Starting Goals</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRESETS.map((p) => {
                  const cfg = CATEGORY_CONFIG[p.category];
                  const Icon = cfg.icon;
                  const alreadyAdded = goals.some((g) => g.title === p.title);
                  return (
                    <button
                      key={p.title}
                      onClick={() => !alreadyAdded && addPreset(p)}
                      disabled={alreadyAdded}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all"
                      style={{
                        background: alreadyAdded ? "rgba(16,185,129,0.06)" : "#12121F",
                        border: `1px solid ${alreadyAdded ? "rgba(16,185,129,0.2)" : "#1E1E32"}`,
                        opacity: alreadyAdded ? 0.7 : 1,
                      }}
                      onMouseEnter={(e) => {
                        if (!alreadyAdded) { e.currentTarget.style.borderColor = `${cfg.color}30`; e.currentTarget.style.background = `${cfg.color}06`; }
                      }}
                      onMouseLeave={(e) => {
                        if (!alreadyAdded) { e.currentTarget.style.borderColor = "#1E1E32"; e.currentTarget.style.background = "#12121F"; }
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${cfg.color}15` }}>
                        <Icon size={15} style={{ color: cfg.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold" style={{ color: "#C0C0D8" }}>{p.title}</p>
                        <p className="text-xs" style={{ color: "#4A4A68" }}>Target: {p.target} {p.unit}</p>
                      </div>
                      {alreadyAdded ? (
                        <CheckCircle2 size={14} style={{ color: "#10B981" }} />
                      ) : (
                        <Plus size={14} style={{ color: "#4A4A68" }} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Add goal modal/panel */}
          {showAdd && (
            <div
              className="rounded-2xl p-6 mb-6"
              style={{ background: "#12121F", border: "1px solid rgba(0,255,136,0.2)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-black" style={{ color: "#F2F2F8" }}>New Goal</h3>
                <button onClick={() => setShowAdd(false)} style={{ color: "#6A6A88" }}>
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: "#6A6A88" }}>Goal Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Read the Psalms"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: "#6A6A88" }}>Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as GoalCategory)}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                    >
                      {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: "#6A6A88" }}>Target #</label>
                    <input
                      type="number"
                      min={1}
                      value={newTarget}
                      onChange={(e) => setNewTarget(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: "#6A6A88" }}>Unit</label>
                    <input
                      type="text"
                      placeholder="chapters, days, hours…"
                      value={newUnit}
                      onChange={(e) => setNewUnit(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: "#6A6A88" }}>Deadline (optional)</label>
                    <input
                      type="date"
                      value={newDeadline}
                      onChange={(e) => setNewDeadline(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setShowAdd(false)}
                    className="flex-1 py-2.5 rounded-xl text-sm font-semibold"
                    style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#6A6A88" }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addGoal}
                    disabled={!newTitle.trim() || !newTarget}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-black transition-all"
                    style={{ background: newTitle.trim() && newTarget ? "linear-gradient(135deg, #00FF88, #00BB55)" : "#1E1E32", color: newTitle.trim() && newTarget ? "#07070F" : "#4A4A68" }}
                  >
                    <Target size={14} /> Add Goal
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Scripture */}
          <div
            className="mt-8 rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.06), rgba(107,79,187,0.06))", border: "1px solid rgba(0,255,136,0.12)" }}
          >
            <Music size={22} style={{ color: "#00FF88" }} className="mx-auto mb-3" />
            <p className="text-sm italic mb-1" style={{ color: "#C0C0D8" }}>
              &ldquo;Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.&rdquo;
            </p>
            <p className="text-xs font-bold" style={{ color: "#4A4A68" }}>— Galatians 6:9</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="/verse-memory" className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#00FF88" }}>
                <BookOpen size={12} /> Verse Memory <ChevronRight size={11} />
              </a>
              <a href="/journal" className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#6B4FBB" }}>
                Journal <ChevronRight size={11} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
