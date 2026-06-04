"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import React, { useState, useEffect } from "react";
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
import { usePersistedState } from "@/hooks/usePersistedState";

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
  Community:   { color: "#3a7d56", icon: Users },
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

const VOICES_GOALS = [
  { id: "smith-jka", name: "James K.A. Smith", era: "b. 1970", context: "You Are What You Love (2016) — habit, liturgy, and the formation of desire", bio: "James K.A. Smith's You Are What You Love reframed Christian formation around the category of desire rather than belief. Drawing on Augustine's vision of the human being as a creature of love and habit, Smith argues that we are not primarily thinking beings (who need correct information) but desiring beings (who need habits that shape what we love). Goals, for Smith, are not primarily intellectual resolutions but practices that, over time, reshape what we want. The 'secular liturgies' of consumer culture — the mall, the stadium, the social media feed — are forming our loves whether we choose them or not; Christian formation requires counter-liturgies that re-orient desire toward God.", quote: "You are what you love — not what you believe, not what you know. Your deepest goals reveal your loves, and your loves are shaped by your practices more than your decisions.", contribution: "Smith's work gave Christians a vocabulary for understanding why willpower alone fails in goal-setting and habit formation: the issue is not information but desire-formation. His integration of Augustine's theology of desire with contemporary neuroscience and cultural analysis has influenced how Christian educators, pastors, and individuals think about formation." },
  { id: "whitney-d", name: "Don Whitney", era: "b. 1957", context: "Spiritual Disciplines for the Christian Life (1991) — the most used evangelical guide to spiritual goals and practices", bio: "Don Whitney's Spiritual Disciplines for the Christian Life is the most widely used evangelical guide to intentional spiritual goal-setting and practice. Drawing on the long tradition of spiritual disciplines (Richard Foster, Dallas Willard) while grounding them in Reformed theology, Whitney argues that the spiritual disciplines are 'the God-ordained means by which we discipline ourselves for the purpose of godliness' (1 Timothy 4:7). Each chapter offers both biblical grounding and practical guidance for making progress in prayer, Scripture, worship, fasting, journaling, and other spiritual practices. Whitney's accessible writing and his pastoral experience have made the book a standard text in evangelical discipleship programs.", quote: "Spiritual disciplines are not a means of earning God's favor — they are the training ground where God's grace meets human effort and produces godliness. Goals without discipline are wishes; discipline without goals is aimlessness.", contribution: "Whitney's Spiritual Disciplines has introduced generations of evangelicals to intentional spiritual formation through specific, measurable practices. Its practical guidance — how to pray without falling asleep, how to read the Bible for transformation rather than information — has made spiritual goal-setting accessible to ordinary Christians who might find more academic treatments of formation too abstract." },
  { id: "hybels-b", name: "Bill Hybels", era: "b. 1951", context: "Simplify: Ten Practices to Unclutter Your Soul (2014) — Christian goal-setting and margin", bio: "Bill Hybels, founder of Willow Creek Community Church, has written extensively about the intersection of Christian discipleship and practical goal-setting and life management. His Simplify: Ten Practices to Unclutter Your Soul addresses the exhaustion and overcommitment that prevent Christians from living according to their stated values. Hybels argues that the over-busy Christian life is not just a time-management problem but a spiritual problem — it reflects a failure to let God define one's priorities. His 'holy discontent' framework (What breaks your heart? What infuriates you about the way things are? That is where God is calling you to act) has shaped how many Christians think about goal-setting from a sense of vocation rather than personal ambition.", quote: "The goals that last are the ones that grow out of what God has put in your heart — a holy discontent with the way things are, and a vision of what they could become. Goals rooted in self-advancement fade; goals rooted in calling grow stronger under pressure.", contribution: "Hybels's writing on margin, rest, and simplicity helped articulate for a generation of evangelicals the distinction between busyness and fruitfulness. His practical approach to goal-setting within a framework of Christian vocation influenced millions of church leaders and laypeople to think about goals not merely as productivity tools but as spiritual practices." },
  { id: "covey-s", name: "Stephen R. Covey", era: "1932-2012", context: "The 7 Habits of Highly Effective People (1989) — goal-setting and Christian character formation", bio: "Stephen Covey was a devout Latter-day Saint whose The 7 Habits of Highly Effective People drew explicitly on natural law theory, character ethics, and principles he understood as universal because they are rooted in God's design for human beings. His distinction between urgency and importance, his emphasis on beginning with the end in mind, and his principle of putting first things first have been widely adopted in Christian goal-setting frameworks. Covey's influence on evangelical thinking about goals and habits has been enormous, though not always acknowledged — much contemporary Christian productivity literature draws on Covey's framework while supplementing it with explicitly Christian theological content.", quote: "Begin with the end in mind — imagine your own funeral, and listen to what you want people to say about you. That funeral sermon you write for yourself is your personal mission statement, and your goals should all serve it.", contribution: "The 7 Habits gave Christians and non-Christians alike a framework for intentional goal-setting rooted in character rather than technique. Covey's insistence that lasting effectiveness flows from character (what he called the 'character ethic') rather than personality and technique resonated with Christian anthropology and gave the evangelical world a widely applicable framework for discipleship and goal-setting." },
  { id: "willard-goals", name: "Dallas Willard", era: "1935-2013", context: "The Spirit of the Disciplines (1988); Renovation of the Heart (2002) — goals as spiritual formation", bio: "Dallas Willard's theology of spiritual formation has implications for how Christians think about goals and habit formation. Willard argued that the primary goal of the Christian life — transformation into Christlikeness — is achieved not by trying harder to act like Jesus but by training the whole person (body, mind, will, emotions, social relationships) through the spiritual disciplines. Goals, for Willard, must be understood in terms of the kind of person one is becoming rather than the achievements one is accumulating. His concept of 'VIM' (Vision, Intention, and Means) provides a framework for Christian goal-setting that integrates motivation, commitment, and method.", quote: "Grace is not opposed to effort; it is opposed to earning. The disciplines are not acts of earning favor with God — they are the training by which we cooperate with God's transforming work. Set your goals accordingly.", contribution: "Willard's vision of spiritual formation as whole-person transformation gave Christians a framework for understanding goals that goes beyond achievement and productivity. His VIM model (Vision, Intention, Means) has been widely adopted in Christian coaching and discipleship contexts as a theologically grounded alternative to secular goal-setting frameworks." },
];

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>(() => {
    try {
      const s = localStorage.getItem("vine_goals");
      return s ? (JSON.parse(s) as Goal[]) : [];
    } catch { return []; }
  });
  const [showAdd, setShowAdd] = useState(false);
  const [activeTab, setActiveTab] = usePersistedState<"active" | "completed" | "theology" | "voices" | "videos">("vine_goals_tab", "active");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_goals_voice", "smith-jka");
  const voiceItem = VOICES_GOALS.find(v => v.id === selectedVoice)!;

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
      <Navbar />
      <main>
      <div className="pb-24" style={{ paddingTop: 80 }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Target size={18} style={{ color: "#3a7d56" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Faith Goals</span>
            </div>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-black">My Goals</h1>
                <p className="text-sm mt-1" style={{ color: "#6A6A88" }}>Track your spiritual disciplines and growth goals.</p>
              </div>
              <button type="button"
                onClick={() => setShowAdd(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-black"
                style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)" }}
              >
                <Plus size={14} /> New Goal
              </button>
            </div>
          </div>

          {/* Stats bar */}
          {totalGoals > 0 && (
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Total Goals", value: totalGoals, color: "#3a7d56" },
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
            {(["active", "completed", "theology", "voices", "videos"] as const).map((tab) => (
              <button type="button"
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition-all"
                style={{
                  background: activeTab === tab ? "rgba(58,125,86,0.12)" : "transparent",
                  color: activeTab === tab ? "#3a7d56" : "#6A6A88",
                  border: activeTab === tab ? "1px solid rgba(58,125,86,0.2)" : "1px solid transparent",
                }}
              >
                {tab === "active" ? `Active (${active.length})` : tab === "completed" ? `Done (${completed.length})` : tab === "theology" ? "📖 Theology" : tab === "voices" ? "🎓 Voices" : "🎬 Videos"}
              </button>
            ))}
          </div>

          {(activeTab === "active" || activeTab === "completed") && <>
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
                          <button type="button"
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
                            <button type="button"
                              onClick={() => increment(goal.id, -1)}
                              className="px-3 py-1.5 rounded-lg text-sm font-bold transition-all"
                              style={{ background: "#1E1E32", color: "#6A6A88" }}
                              disabled={goal.current === 0}
                            >
                              −
                            </button>
                            <button type="button"
                              onClick={() => increment(goal.id, 1)}
                              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-bold transition-all"
                              style={{ background: `${cfg.color}15`, color: cfg.color, border: `1px solid ${cfg.color}25` }}
                            >
                              <Plus size={12} /> Log +1
                            </button>
                            <button type="button"
                              onClick={() => increment(goal.id, 5)}
                              className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                              style={{ background: "#1E1E32", color: "#6A6A88" }}
                            >
                              +5
                            </button>
                            {goal.target - goal.current > 5 && (
                              <button type="button"
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
                    <button type="button"
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
              style={{ background: "#12121F", border: "1px solid rgba(58,125,86,0.2)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-black" style={{ color: "#F2F2F8" }}>New Goal</h3>
                <button type="button" onClick={() => setShowAdd(false)} style={{ color: "#6A6A88" }}>
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: "#6A6A88" }}>Goal Title</label>
                  <input
                    type="text"
                    aria-label="Goal title" placeholder="e.g. Read the Psalms"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: "#6A6A88" }}>Category</label>
                    <select aria-label="Category"
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
                      aria-label="chapters, days, hours…" placeholder="chapters, days, hours…"
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
                  <button type="button"
                    onClick={() => setShowAdd(false)}
                    className="flex-1 py-2.5 rounded-xl text-sm font-semibold"
                    style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#6A6A88" }}
                  >
                    Cancel
                  </button>
                  <button type="button"
                    onClick={addGoal}
                    disabled={!newTitle.trim() || !newTarget}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-black transition-all"
                    style={{ background: newTitle.trim() && newTarget ? "linear-gradient(135deg, #3a7d56, #3a7d56)" : "#1E1E32", color: newTitle.trim() && newTarget ? "#07070F" : "#4A4A68" }}
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
            style={{ background: "linear-gradient(135deg, rgba(58,125,86,0.06), rgba(107,79,187,0.06))", border: "1px solid rgba(58,125,86,0.12)" }}
          >
            <Music size={22} style={{ color: "#3a7d56" }} className="mx-auto mb-3" />
            <p className="text-sm italic mb-1" style={{ color: "#C0C0D8" }}>
              &ldquo;Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.&rdquo;
            </p>
            <p className="text-xs font-bold" style={{ color: "#4A4A68" }}>— Galatians 6:9</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <Link href="/verse-memory" className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#3a7d56" }}>
                <BookOpen size={12} /> Verse Memory <ChevronRight size={11} />
              </Link>
              <Link href="/journal" className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#6B4FBB" }}>
                Journal <ChevronRight size={11} />
              </Link>
            </div>
          </div>
          </>}

          {activeTab === "theology" && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, color: "#F2F2F8" }}>A Theology of Goals</h2>
              <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                Christian goal-setting is not the same as secular goal-setting with a Bible verse added. Here is how a gospel framework changes everything.
              </p>
              {[
                { title: "Goals Flow From Identity, Not the Other Way", color: "#3a7d56", desc: "The world says: achieve the goal, become the person. The gospel says: you are already God's beloved child — now live accordingly. Christian goals are an expression of who you already are in Christ, not an attempt to become someone worth loving. This removes the crushing weight of self-justification from the goal-setting process." },
                { title: "Desire Must Be Trained, Not Just Directed", color: "#A080FF", desc: "James K.A. Smith's insight: setting a goal without training the desires beneath it is like putting a new steering wheel on a car with a broken transmission. The practices you build around your goals matter more than the goals themselves — they are re-shaping what you love, which determines what you actually do." },
                { title: "Sabbath Rest Is Built Into the Design", color: "#3a7d56", desc: "God's pattern of six days of work and one day of rest is not a suggestion — it is a creation rhythm built into the structure of reality. Goals that do not include Sabbath will burn out their keeper. The Sabbath commands you to put the goal down one day in seven and trust God with what you cannot control." },
                { title: "Failure Is Formative, Not Final", color: "#F59E0B", desc: "The biblical narrative is full of people who failed at their goals: Moses failed to enter the promised land, Peter denied Christ, Jonah ran from his calling. In each case, the failure was not the end of the story. Christian goal-setting includes a theology of failure — not as an excuse for irresponsibility, but as a refusal to make achievement the measure of worth." },
                { title: "Some Goals Are Given, Not Chosen", color: "#A080FF", desc: "The language of vocation (calling) reminds us that not all goals are self-selected projects. God calls people to specific work in specific places — and sometimes the goal that shapes a life is not the one a person would have chosen. Openness to calling requires holding goals loosely, with open hands rather than clenched fists." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 22, marginBottom: 14 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "voices" && (
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
                {VOICES_GOALS.map(v => (
                  <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
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

          {activeTab === "videos" && (
            <div>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 24, marginBottom: 24 }}>
                <h2 style={{ color: "#3a7d56", fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
                <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                  Video teachings on setting faith goals, spiritual growth, and pursuing God's calling with intentionality.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    { videoId: "G4-WT4NvC14", title: "How to Set Spiritual Goals That Actually Stick", channel: "The Gospel Coalition", description: "Practical wisdom for setting goals that are grounded in the gospel — not performance-driven, but grace-fueled. How to pursue growth without turning it into works-righteousness." },
                    { videoId: "7SbckqNUDm0", title: "The Discipleship Life: Intentional Formation", channel: "Dallas Willard Ministries", description: "Willard on why intentionality matters in the Christian life — how deliberate training in godliness differs from mere willpower, and what it means to arrange your life for spiritual growth." },
                    { videoId: "poXKoL5y4Lo", title: "Living with Purpose: The Called Life", channel: "The Gospel Coalition", description: "What it means to live in response to God's calling — how your specific gifts, circumstances, and opportunities fit into a life of intentional discipleship and mission." },
                    { videoId: "tspDy2KIyeI", title: "Seasons of Spiritual Growth", channel: "Renovaré", description: "Understanding the different seasons of spiritual growth — how God works differently in different stages of the journey, and how to cooperate with what he is doing in each season." },
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
      </main>
      <Footer />
    </div>
  );
}
