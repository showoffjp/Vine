"use client";

import { useState, useEffect } from "react";
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
  const [mainTab, setMainTab] = useState<"tracker" | "theology" | "voices" | "methods">("tracker");
  const [selectedVoice, setSelectedVoice] = useState("smith-hab");
  const VOICES_HAB = [
    { id: "smith-hab", name: "James K.A. Smith", era: "b. 1970", context: "You Are What You Love (2016) — the liturgical formation of habit and desire", bio: "James K.A. Smith's You Are What You Love is the most theologically sophisticated recent treatment of habit formation in Christian life. Drawn from Augustine's vision of human beings as lovers and from Aristotle's account of virtue as habituated excellence, Smith argues that our habits — more than our beliefs or our decisions — shape what we love and therefore who we are. The 'secular liturgies' of consumer culture (the mall, the smartphone, social media) are forming our habits and desires whether we choose them or not. Christian formation requires intentional counter-practices — daily habits that reorient the heart toward God and neighbor.", quote: "You are what you love. And what you love is not first of all a result of what you believe — it is a result of what you practice. Habit precedes belief; practice shapes the heart.", contribution: "Smith's work gave Christians a theological vocabulary for habit formation that transcended the merely pragmatic. His integration of Augustinian theology with contemporary neuroscience and cultural criticism gave the church a sophisticated account of why habits matter for formation — not as moralistic self-improvement but as the re-orienting of desire toward God." },
    { id: "willard-hab", name: "Dallas Willard", era: "1935-2013", context: "The Spirit of the Disciplines (1988) — the body's role in spiritual formation", bio: "Dallas Willard's The Spirit of the Disciplines made the most compelling evangelical case that spiritual transformation requires the training of the whole person — including the body — through specific, sustained practices. Willard drew on the long tradition of spiritual disciplines (prayer, fasting, solitude, service, worship) to argue that these are not optional extras for the spiritually ambitious but the normal means by which God reshapes the human character. His central insight: grace is not opposed to effort (discipline) but to earning (trying to deserve God's love). The disciplines are the cooperative means by which human effort meets divine grace.", quote: "If we are not training our bodies, our habits, and our desires in the way of Jesus, we should not be surprised that we are not becoming like Jesus. The spiritual life is not magic — it is disciplined cooperation with grace.", contribution: "The Spirit of the Disciplines gave the evangelical church a biblical and theological framework for the spiritual disciplines that had been preserved mainly in Catholic and Orthodox traditions. Willard's recovery of the disciplines as normal Christian practice — not monastic aberration — has shaped an entire generation of evangelical formation programs." },
    { id: "duhigg-c", name: "Charles Duhigg", era: "b. 1974", context: "The Power of Habit (2012) — the neuroscience of habit formation applied to Christian discipleship", bio: "Charles Duhigg's The Power of Habit is not a Christian book, but it has been widely integrated into Christian discussions of spiritual discipline because of its rigorous account of how habits actually work in the brain. Duhigg's core insight — the habit loop of cue, routine, and reward — gives Christians practical tools for understanding why spiritual disciplines are hard to start and hard to stop. Christian readers have found his account of keystone habits (high-leverage habits that trigger cascades of other positive habits) particularly useful for thinking about which spiritual practices to prioritize.", quote: "Habits are not destiny. They can be ignored, changed, or replaced. But understanding how they work gives you the ability to reshape them in ways that transform your life — and that is not merely self-improvement but human dignity in action.", contribution: "Duhigg's habit loop model has been integrated into dozens of Christian discipleship and spiritual formation curricula. By explaining the neuroscience of habit formation, his work has helped Christians understand why willpower alone fails and why building the right cue-routine-reward structures around spiritual practices makes them sustainable." },
    { id: "atomic-c", name: "James Clear", era: "b. 1986", context: "Atomic Habits (2018) — the 1% improvement model and identity-based habits", bio: "James Clear's Atomic Habits is the most widely read recent book on habit formation, and its core insight has significant implications for Christian discipleship: the most powerful habits are built on identity rather than outcome. Clear argues that instead of setting goals ('I want to read the Bible more') you should focus on building identity ('I am someone who reads Scripture daily') — and then let habits flow from that identity. Christian readers have found this framework valuable for thinking about discipleship not as a project to achieve but as an identity to inhabit. Clear's practical tools — habit stacking, environment design, the two-minute rule — have been widely adopted in Christian formation contexts.", quote: "Every action you take is a vote for the type of person you wish to become. No single vote matters much, but the aggregate of all your votes determines the person you are. Small habits are not small things — they are the architecture of character.", contribution: "Atomic Habits gave Christians practical tools for habit formation that complement theological frameworks. Clear's identity-based approach resonates with the Christian understanding of formation as becoming who you already are in Christ, and his environmental and implementation-based strategies have been widely adopted in church small groups and discipleship programs." },
    { id: "comer-jm", name: "John Mark Comer", era: "b. 1980", context: "Practicing the Way (2024); The Ruthless Elimination of Hurry (2019) — habit formation in the way of Jesus", bio: "John Mark Comer is the most widely read contemporary voice on spiritual habits and formation for younger evangelicals. His The Ruthless Elimination of Hurry argued that the pace of modern life is the primary spiritual threat facing contemporary Christians — that busyness and hurry are not merely productivity problems but spiritual diseases that prevent the formation of Christlike character. His follow-up Practicing the Way develops a vision of apprenticeship to Jesus through specific, embodied practices (prayer, Sabbath, simplicity, fasting, solitude) that form the habits of the soul over time. Comer's accessible writing and his experience leading Bridgetown Church have made him the primary voice for spiritual formation for millennials.", quote: "You cannot become like Jesus without doing the things Jesus did. The habits of his life — early morning prayer, Sabbath, fasting, solitude, Scripture — are not optional extras. They are the training regimen of the apprentice.", contribution: "Comer's work on the intersection of pace, hurry, and spiritual formation has given younger evangelicals a framework for understanding why their spiritual lives feel shallow and what to do about it. His accessible, culturally fluent account of ancient spiritual habits has introduced a generation of young Christians to practices that their tradition had largely forgotten." },
  ];
  const voiceItem = VOICES_HAB.find(v => v.id === selectedVoice)!;

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
      <div className="pb-24" style={{ paddingTop: 40 }}>
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

          {/* Main Tabs */}
          <div className="flex gap-1 p-1 rounded-xl mb-6" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
            {(["tracker", "theology", "voices", "methods"] as const).map((tab) => (
              <button key={tab} onClick={() => setMainTab(tab)}
                className="flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition-all"
                style={{ background: mainTab === tab ? "rgba(0,255,136,0.12)" : "transparent", color: mainTab === tab ? "#00FF88" : "#6A6A88", border: mainTab === tab ? "1px solid rgba(0,255,136,0.2)" : "1px solid transparent" }}>
                {tab === "tracker" ? "📊 Tracker" : tab === "theology" ? "📖 Theology" : tab === "voices" ? "🎓 Voices" : "⚗️ Methods"}
              </button>
            ))}
          </div>

          {mainTab === "tracker" && <>
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
          </>}

          {mainTab === "theology" && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, color: "#F2F2F8" }}>A Theology of Habit</h2>
              <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                Why Christians build habits — and why willpower alone is never enough.
              </p>
              {[
                { title: "You Are What You Practice", color: "#00FF88", desc: "The ancient insight of Aristotle — recovered by Dallas Willard and James K.A. Smith for Christian formation — is that we become what we repeatedly do. Character is not formed by decisions alone but by habituated actions. The Christian who wants to be patient must practice patience. The Christian who wants to be generous must practice generosity. Virtue is built by doing virtuous acts until the act becomes second nature." },
                { title: "The Body Is a Spiritual Organ", color: "#A080FF", desc: "Willard's central insight in The Spirit of the Disciplines: because human beings are embodied, spiritual formation must involve the body. Fasting disciplines desire. Physical acts of service form compassion. Kneeling in prayer shapes humility. The body is not just a container for the soul — it is the site where spiritual habits are formed. 'Present your bodies as a living sacrifice' (Romans 12:1)." },
                { title: "Desire Is Trained, Not Just Directed", color: "#00FF88", desc: "Deciding you want to pray more does not make you pray more. Deciding you want to love your neighbor more does not produce love. The gap between what we want and what we do is bridged by habit — by repeatedly doing the thing until the body wants to do it. Smith calls this the formation of desire: the spiritual disciplines don't just constrain us, they re-orient what we love." },
                { title: "Tiny Actions, Massive Formation", color: "#F59E0B", desc: "James Clear's insight from Atomic Habits: small habits — ones that take two minutes or less to start — are the most powerful because they remove the activation energy that prevents action. The two-minute rule in a Christian context: if you want to read Scripture daily, start with two minutes, not twenty. The goal is to become the kind of person who opens the Bible, not to read a minimum number of chapters." },
                { title: "The Habit of Sabbath", color: "#A080FF", desc: "Sabbath is the habit that makes all other habits sustainable. Without rest, habits become driven compulsion rather than loving practice. The regular rhythm of stopping — one day in seven — trains the soul in trust, reminding the habitual self that the world does not depend on its striving. Sabbath is the meta-habit that puts all other habits in their proper place." },
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
                {VOICES_HAB.map(v => (
                  <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(0,255,136,0.4)" : "#1E1E32"}`, background: selectedVoice === v.id ? "rgba(0,255,136,0.08)" : "#12121F", cursor: "pointer" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? "#00FF88" : "#F2F2F8", marginBottom: 2 }}>{v.name}</div>
                    <div style={{ fontSize: 11, color: "#9898B3" }}>{v.era}</div>
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 12, color: "#9898B3", fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
                <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: "#F2F2F8" }}>{voiceItem.name}</h2>
                <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 20 }}>{voiceItem.era}</div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
                <div style={{ background: "#07070F", borderRadius: 12, padding: 20, borderLeft: "3px solid #00FF88", marginBottom: 24 }}>
                  <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#6B4FBB", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          )}

          {mainTab === "methods" && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, color: "#F2F2F8" }}>Habit-Building Methods</h2>
              <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                Proven frameworks for building sustainable spiritual and practical habits.
              </p>
              {[
                {
                  icon: "🔗",
                  title: "Habit Stacking",
                  author: "James Clear — Atomic Habits",
                  desc: "Attach a new habit to an existing one. 'After I pour my morning coffee, I will read one verse of Scripture.' The existing habit (coffee) serves as an anchor cue for the new one. This exploits the brain's existing neural pathways rather than trying to build new ones from scratch. For spiritual habits: attach prayer to an existing morning ritual, attach gratitude journaling to an existing evening routine.",
                  color: "#00FF88",
                },
                {
                  icon: "⏱️",
                  title: "The Two-Minute Rule",
                  author: "James Clear — Atomic Habits",
                  desc: "When starting a new habit, make it take less than two minutes. The goal of the two-minute rule is not to do two minutes of Bible reading — it is to become the kind of person who opens their Bible. Starting the habit is more important than the initial quantity. Once the habit is established, you will naturally extend the time. The hardest part is beginning; the two-minute rule makes beginning frictionless.",
                  color: "#A080FF",
                },
                {
                  icon: "📍",
                  title: "Implementation Intentions",
                  author: "Peter Gollwitzer — Research",
                  desc: "Specify when, where, and how you will perform a habit: 'I will [BEHAVIOR] at [TIME] in [LOCATION].' Research shows that people who specify implementation intentions are 2-3x more likely to follow through. 'I will pray at 7am in my chair by the window' outperforms 'I want to pray more.' The specificity removes the daily decision cost that kills vague intentions.",
                  color: "#F59E0B",
                },
                {
                  icon: "🌱",
                  title: "Tiny Habits Method",
                  author: "BJ Fogg — Stanford",
                  desc: "Start smaller than you think necessary. If you want to do 50 pushups daily, start with one. If you want to read 30 minutes of Scripture, start with one minute. Fogg's research shows that motivation follows successful action — each tiny completion builds the motivation for more. Apply to spiritual habits: if you struggle to pray, commit to a single sentence before your feet hit the floor each morning.",
                  color: "#3B82F6",
                },
                {
                  icon: "🔄",
                  title: "The Habit Loop",
                  author: "Charles Duhigg — The Power of Habit",
                  desc: "Every habit has three components: Cue (the trigger), Routine (the behavior), Reward (the payoff). To build a spiritual habit, identify the cue that will trigger it, design a clear routine, and build in a genuine reward. To break a bad habit, keep the cue and reward but replace the routine. Duhigg's research shows that the cue-routine-reward loop is neurological — which means spiritual disciplines work with brain biology rather than against it.",
                  color: "#EC4899",
                },
                {
                  icon: "✝️",
                  title: "Liturgical Anchoring",
                  author: "James K.A. Smith — You Are What You Love",
                  desc: "Structure daily life around fixed-time liturgical practices — morning and evening prayer, grace at meals, weekly Sabbath — in the same way that ancient Christians structured their days around the Divine Office. These are not optional add-ons but structural anchors that shape the entire day's orientation. The regularity of the liturgical calendar (Advent, Lent, Easter) provides annual rhythms that prevent spiritual life from becoming arbitrary.",
                  color: "#00FF88",
                },
              ].map((method, i) => (
                <div key={i} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 22, marginBottom: 14, display: "flex", gap: 16 }}>
                  <div style={{ fontSize: 28, flexShrink: 0 }}>{method.icon}</div>
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: method.color, margin: 0 }}>{method.title}</h3>
                      <span style={{ fontSize: 11, color: "#9898B3", fontStyle: "italic" }}>{method.author}</span>
                    </div>
                    <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75, margin: 0 }}>{method.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
