"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  Circle,
  Plus,
  Trash2,
  X,
  Flame,
  Star,
  ChevronRight,
} from "lucide-react";

interface Habit {
  id: string;
  name: string;
  icon: string;
  color: string;
  completions: string[]; // ISO date strings YYYY-MM-DD
  createdAt: string;
}

const PRESET_HABITS = [
  { name: "Read Bible", icon: "📖", color: "#3B82F6" },
  { name: "Daily Prayer", icon: "🙏", color: "#6B4FBB" },
  { name: "Gratitude journal", icon: "🙌", color: "#F59E0B" },
  { name: "No social media before prayer", icon: "📵", color: "#EC4899" },
  { name: "Memorize a verse", icon: "🧠", color: "#00FF88" },
  { name: "Fast", icon: "🔥", color: "#EF4444" },
  { name: "Attend church/small group", icon: "✝️", color: "#10B981" },
  { name: "Share my faith", icon: "💬", color: "#8B5CF6" },
];

const COLORS = ["#3B82F6", "#6B4FBB", "#10B981", "#00FF88", "#F59E0B", "#EC4899", "#EF4444", "#8B5CF6"];
const ICONS = ["📖", "🙏", "🧠", "🙌", "✝️", "💬", "🔥", "🌟", "💪", "🎵", "📵", "🌿"];

function uid() { return Math.random().toString(36).slice(2, 10); }

function getDateKey(date: Date): string {
  return date.toISOString().split("T")[0];
}

function getWeekDates(): Date[] {
  const today = new Date();
  const day = today.getDay(); // 0 = Sun
  const dates: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - day + i);
    dates.push(d);
  }
  return dates;
}

function getLast30Days(): string[] {
  const days: string[] = [];
  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push(getDateKey(d));
  }
  return days;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const SAMPLE_HABITS: Habit[] = [
  {
    id: "h1", name: "Read Bible", icon: "📖", color: "#3B82F6",
    completions: (() => {
      const days: string[] = [];
      const today = new Date();
      for (let i = 6; i >= 0; i--) {
        if (i % 2 === 0) {
          const d = new Date(today); d.setDate(today.getDate() - i);
          days.push(getDateKey(d));
        }
      }
      return days;
    })(),
    createdAt: "2026-05-01",
  },
  {
    id: "h2", name: "Daily Prayer", icon: "🙏", color: "#6B4FBB",
    completions: (() => {
      const days: string[] = [];
      const today = new Date();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(today); d.setDate(today.getDate() - i);
        days.push(getDateKey(d));
      }
      return days;
    })(),
    createdAt: "2026-05-01",
  },
  {
    id: "h3", name: "Gratitude journal", icon: "🙌", color: "#F59E0B",
    completions: (() => {
      const days: string[] = [];
      const today = new Date();
      for (let i = 14; i >= 0; i--) {
        if (i % 3 !== 2) {
          const d = new Date(today); d.setDate(today.getDate() - i);
          days.push(getDateKey(d));
        }
      }
      return days;
    })(),
    createdAt: "2026-05-10",
  },
];

export default function HabitsPage() {
  const [habits, setHabits] = useState<Habit[]>(() => {
    try {
      const s = localStorage.getItem("vine_habits");
      const saved = s ? (JSON.parse(s) as Habit[]) : null;
      return saved && saved.length > 0 ? saved : SAMPLE_HABITS;
    } catch { return SAMPLE_HABITS; }
  });
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [newIcon, setNewIcon] = useState(ICONS[0]);
  const [newColor, setNewColor] = useState(COLORS[0]);
  const [view, setView] = useState<"week" | "month">("week");

  useEffect(() => {
    try { localStorage.setItem("vine_habits", JSON.stringify(habits)); } catch {}
  }, [habits]);

  const weekDates = getWeekDates();
  const todayKey = getDateKey(new Date());
  const last30 = getLast30Days();

  const toggleDay = (habitId: string, dateKey: string) => {
    setHabits((prev) => prev.map((h) => {
      if (h.id !== habitId) return h;
      const has = h.completions.includes(dateKey);
      return { ...h, completions: has ? h.completions.filter((d) => d !== dateKey) : [...h.completions, dateKey] };
    }));
  };

  const addHabit = () => {
    if (!newName.trim()) return;
    setHabits((prev) => [...prev, {
      id: uid(), name: newName.trim(), icon: newIcon, color: newColor,
      completions: [], createdAt: getDateKey(new Date()),
    }]);
    setNewName(""); setShowAdd(false);
  };

  const addPreset = (p: typeof PRESET_HABITS[number]) => {
    if (habits.some((h) => h.name === p.name)) return;
    setHabits((prev) => [...prev, {
      id: uid(), name: p.name, icon: p.icon, color: p.color,
      completions: [], createdAt: getDateKey(new Date()),
    }]);
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  const getStreak = (habit: Habit): number => {
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      if (habit.completions.includes(getDateKey(d))) streak++;
      else if (i > 0) break;
    }
    return streak;
  };

  const todayDone = habits.filter((h) => h.completions.includes(todayKey)).length;
  const todayTotal = habits.length;
  const todayPct = todayTotal === 0 ? 0 : Math.round((todayDone / todayTotal) * 100);

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Flame size={18} style={{ color: "#00FF88" }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>Daily Disciplines</span>
              </div>
              <h1 className="text-3xl font-black">Habit Tracker</h1>
              <p className="text-sm mt-1" style={{ color: "#6A6A88" }}>Build spiritual disciplines one day at a time.</p>
            </div>
            <button
              onClick={() => setShowAdd(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-black"
              style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
            >
              <Plus size={14} /> Add Habit
            </button>
          </div>

          {/* Today's Progress */}
          {habits.length > 0 && (
            <div
              className="rounded-2xl p-5 mb-6"
              style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.06), rgba(107,79,187,0.04))", border: "1px solid rgba(0,255,136,0.15)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="font-black" style={{ color: "#F2F2F8" }}>
                  Today — {new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}
                </p>
                <span className="text-sm font-bold" style={{ color: "#00FF88" }}>{todayDone}/{todayTotal} done</span>
              </div>
              <div className="h-2 rounded-full mb-1" style={{ background: "#1E1E32" }}>
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{ width: `${todayPct}%`, background: todayPct === 100 ? "linear-gradient(90deg, #00FF88, #10B981)" : "linear-gradient(90deg, #6B4FBB, #00FF88)" }}
                />
              </div>
              {todayPct === 100 && (
                <p className="text-xs mt-1" style={{ color: "#00FF88" }}>🎉 All habits completed today!</p>
              )}
            </div>
          )}

          {/* View Toggle */}
          {habits.length > 0 && (
            <div className="flex gap-1 p-1 rounded-xl mb-5" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              {(["week", "month"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className="flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition-all"
                  style={{
                    background: view === v ? "rgba(0,255,136,0.12)" : "transparent",
                    color: view === v ? "#00FF88" : "#6A6A88",
                    border: view === v ? "1px solid rgba(0,255,136,0.2)" : "1px solid transparent",
                  }}
                >
                  {v === "week" ? "This Week" : "Last 30 Days"}
                </button>
              ))}
            </div>
          )}

          {/* Habit Grid */}
          {habits.length > 0 && (
            <div
              className="rounded-2xl overflow-hidden mb-6"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              {/* Header row */}
              <div className="flex items-center px-4 py-2" style={{ borderBottom: "1px solid #1E1E32" }}>
                <div className="flex-1 min-w-0 pr-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#4A4A68" }}>Habit</span>
                </div>
                {view === "week" ? (
                  <div className="flex gap-1">
                    {weekDates.map((d, i) => (
                      <div key={i} className="w-8 text-center">
                        <p className="text-[9px]" style={{ color: "#4A4A68" }}>{WEEKDAYS[d.getDay()]}</p>
                        <p
                          className="text-[10px] font-bold"
                          style={{ color: getDateKey(d) === todayKey ? "#00FF88" : "#6A6A88" }}
                        >
                          {d.getDate()}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#4A4A68" }}>30-day streak</span>
                )}
                <div className="w-8" />
              </div>

              {habits.map((habit) => {
                const streak = getStreak(habit);
                return (
                  <div key={habit.id} className="flex items-center px-4 py-2.5" style={{ borderBottom: "1px solid #1E1E32" }}>
                    {/* Habit name */}
                    <div className="flex items-center gap-2 flex-1 min-w-0 pr-4">
                      <span className="text-base shrink-0">{habit.icon}</span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold truncate" style={{ color: "#C0C0D8" }}>{habit.name}</p>
                        {streak > 0 && (
                          <p className="text-[10px] flex items-center gap-0.5" style={{ color: "#F59E0B" }}>
                            <Flame size={9} /> {streak}d streak
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Check boxes or mini heatmap */}
                    {view === "week" ? (
                      <div className="flex gap-1">
                        {weekDates.map((d) => {
                          const key = getDateKey(d);
                          const done = habit.completions.includes(key);
                          const isToday = key === todayKey;
                          const isFuture = key > todayKey;
                          return (
                            <button
                              key={key}
                              onClick={() => !isFuture && toggleDay(habit.id, key)}
                              disabled={isFuture}
                              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                              style={{
                                background: done ? `${habit.color}25` : isFuture ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)",
                                border: `1px solid ${done ? `${habit.color}40` : isToday ? "rgba(0,255,136,0.2)" : "rgba(255,255,255,0.06)"}`,
                              }}
                            >
                              {done ? (
                                <CheckCircle2 size={14} style={{ color: habit.color }} />
                              ) : (
                                <Circle size={14} style={{ color: isFuture ? "#2A2A3A" : "#3A3A58" }} />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="flex gap-0.5 flex-wrap" style={{ maxWidth: 180 }}>
                        {last30.map((dateKey) => {
                          const done = habit.completions.includes(dateKey);
                          return (
                            <div
                              key={dateKey}
                              className="w-3 h-3 rounded-sm cursor-pointer transition-all"
                              style={{ background: done ? habit.color : "rgba(255,255,255,0.06)" }}
                              onClick={() => toggleDay(habit.id, dateKey)}
                              title={dateKey}
                            />
                          );
                        })}
                      </div>
                    )}

                    <button
                      onClick={() => deleteHabit(habit.id)}
                      className="w-8 flex items-center justify-center transition-all"
                      style={{ color: "#3A3A58" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#EF4444")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#3A3A58")}
                    >
                      <X size={13} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Empty state */}
          {habits.length === 0 && (
            <div className="text-center py-16 rounded-2xl mb-6" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="font-black mb-1.5" style={{ color: "#F2F2F8" }}>No habits yet</h3>
              <p className="text-sm" style={{ color: "#6A6A88" }}>Add your first spiritual discipline to start tracking.</p>
            </div>
          )}

          {/* Add form */}
          {showAdd && (
            <div className="rounded-2xl p-5 mb-6" style={{ background: "#12121F", border: "1px solid rgba(0,255,136,0.2)" }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-black" style={{ color: "#F2F2F8" }}>New Habit</h3>
                <button onClick={() => setShowAdd(false)} style={{ color: "#6A6A88" }}><X size={16} /></button>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Habit name (e.g. Read Bible)"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "#6A6A88" }}>Icon</p>
                  <div className="flex flex-wrap gap-2">
                    {ICONS.map((ic) => (
                      <button
                        key={ic}
                        onClick={() => setNewIcon(ic)}
                        className="w-9 h-9 rounded-xl text-lg transition-all"
                        style={{ background: newIcon === ic ? "rgba(0,255,136,0.15)" : "#0D0D1A", border: `1px solid ${newIcon === ic ? "rgba(0,255,136,0.3)" : "#1E1E32"}` }}
                      >
                        {ic}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "#6A6A88" }}>Color</p>
                  <div className="flex gap-2">
                    {COLORS.map((c) => (
                      <button
                        key={c}
                        onClick={() => setNewColor(c)}
                        className="w-7 h-7 rounded-full transition-all"
                        style={{ background: c, boxShadow: newColor === c ? `0 0 0 3px ${c}40, 0 0 0 1px ${c}` : "none" }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowAdd(false)}
                    className="flex-1 py-2.5 rounded-xl text-sm font-semibold"
                    style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#6A6A88" }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addHabit}
                    disabled={!newName.trim()}
                    className="flex-1 py-2.5 rounded-xl text-sm font-bold text-black"
                    style={{ background: newName.trim() ? "linear-gradient(135deg, #00FF88, #00BB55)" : "#1E1E32", color: newName.trim() ? "#07070F" : "#4A4A68" }}
                  >
                    Add Habit
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Presets */}
          {habits.length < 3 && !showAdd && (
            <div className="mb-6">
              <h3 className="text-sm font-black mb-3" style={{ color: "#F2F2F8" }}>Quick Add</h3>
              <div className="grid grid-cols-2 gap-2">
                {PRESET_HABITS.map((p) => {
                  const added = habits.some((h) => h.name === p.name);
                  return (
                    <button
                      key={p.name}
                      onClick={() => !added && addPreset(p)}
                      disabled={added}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all"
                      style={{
                        background: added ? "rgba(16,185,129,0.06)" : "#12121F",
                        border: `1px solid ${added ? "rgba(16,185,129,0.2)" : "#1E1E32"}`,
                        opacity: added ? 0.7 : 1,
                      }}
                      onMouseEnter={(e) => {
                        if (!added) { e.currentTarget.style.borderColor = `${p.color}40`; e.currentTarget.style.background = `${p.color}08`; }
                      }}
                      onMouseLeave={(e) => {
                        if (!added) { e.currentTarget.style.borderColor = "#1E1E32"; e.currentTarget.style.background = "#12121F"; }
                      }}
                    >
                      <span className="text-base">{p.icon}</span>
                      <span className="text-xs font-semibold flex-1" style={{ color: "#C0C0D8" }}>{p.name}</span>
                      {added ? <CheckCircle2 size={13} style={{ color: "#10B981" }} /> : <Plus size={13} style={{ color: "#4A4A68" }} />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Verse */}
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.05), rgba(107,79,187,0.05))", border: "1px solid rgba(0,255,136,0.1)" }}
          >
            <Star size={18} style={{ color: "#F59E0B" }} className="mx-auto mb-3" />
            <p className="text-sm italic mb-1" style={{ color: "#C0C0D8" }}>
              &ldquo;Train yourself to be godly. For physical training is of some value, but godliness has value for all things.&rdquo;
            </p>
            <p className="text-xs font-bold mb-4" style={{ color: "#4A4A68" }}>— 1 Timothy 4:7-8</p>
            <div className="flex items-center justify-center gap-4">
              <a href="/challenges" className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#00FF88" }}>
                Challenges <ChevronRight size={11} />
              </a>
              <a href="/goals" className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#6B4FBB" }}>
                Faith Goals <ChevronRight size={11} />
              </a>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
