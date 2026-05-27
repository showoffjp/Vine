"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Plus,
  Trash2,
  ChevronRight,
  Heart,
  Calendar,
  Star,
} from "lucide-react";

interface GratitudeEntry {
  id: string;
  date: string;
  items: string[];
  verse?: string;
  mood: 1 | 2 | 3 | 4 | 5;
}

const MOODS: Record<number, { emoji: string; label: string; color: string }> = {
  1: { emoji: "😔", label: "Hard day", color: "#6A6A88" },
  2: { emoji: "😐", label: "Okay", color: "#8B9BCC" },
  3: { emoji: "🙂", label: "Good", color: "#10B981" },
  4: { emoji: "😊", label: "Great", color: "#00FF88" },
  5: { emoji: "🙌", label: "Blessed", color: "#F59E0B" },
};

const PROMPTS = [
  "What's one small thing that made you smile today?",
  "Who in your life are you most grateful for right now?",
  "What challenge taught you something valuable recently?",
  "What answered prayer can you thank God for today?",
  "What ability or gift did you get to use today?",
  "What part of creation made you feel wonder this week?",
  "What Scripture or truth anchored you recently?",
  "What unexpected kindness did someone show you?",
];

function uid() { return Math.random().toString(36).slice(2, 10); }

const TODAY = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
const TODAY_SHORT = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const SAMPLE_ENTRIES: GratitudeEntry[] = [
  {
    id: "g1",
    date: "May 25, 2026",
    items: ["Morning coffee with my wife before the kids woke up", "A kind message from an old friend", "Philippians 4:4 — the reminder to rejoice always"],
    verse: "Philippians 4:4",
    mood: 4,
  },
  {
    id: "g2",
    date: "May 24, 2026",
    items: ["Got through a difficult conversation at work with grace", "My daughter said 'I love you, Daddy' out of nowhere", "Sunny day after a week of rain"],
    mood: 5,
  },
  {
    id: "g3",
    date: "May 23, 2026",
    items: ["Good sermon on Psalm 23", "Health — I often take it for granted"],
    mood: 3,
  },
];

export default function GratitudePage() {
  const [entries, setEntries] = useState<GratitudeEntry[]>(() => {
    try {
      const s = localStorage.getItem("vine_gratitude");
      const saved = s ? (JSON.parse(s) as GratitudeEntry[]) : null;
      return saved && saved.length > 0 ? saved : SAMPLE_ENTRIES;
    } catch { return SAMPLE_ENTRIES; }
  });
  const [todayItems, setTodayItems] = useState<string[]>(["", "", ""]);
  const [todayVerse, setTodayVerse] = useState("");
  const [todayMood, setTodayMood] = useState<1 | 2 | 3 | 4 | 5>(4);
  const [saved, setSaved] = useState(false);
  const [promptIndex] = useState(() => Math.floor(Math.random() * PROMPTS.length));

  useEffect(() => {
    try { localStorage.setItem("vine_gratitude", JSON.stringify(entries)); } catch {}
  }, [entries]);

  const hasTodayEntry = entries.some((e) => e.date === TODAY_SHORT);
  const filledItems = todayItems.filter((i) => i.trim());

  const saveEntry = () => {
    if (filledItems.length === 0) return;
    const entry: GratitudeEntry = {
      id: uid(),
      date: TODAY_SHORT,
      items: filledItems,
      verse: todayVerse.trim() || undefined,
      mood: todayMood,
    };
    setEntries((prev) => [entry, ...prev]);
    setTodayItems(["", "", ""]);
    setTodayVerse("");
    setSaved(true);
  };

  const deleteEntry = (id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
    if (saved) setSaved(false);
  };

  const streak = (() => {
    if (entries.length === 0) return 0;
    let count = 0;
    const now = new Date();
    for (let i = 0; i < 365; i++) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      if (entries.some((e) => e.date === dateStr)) count++;
      else if (i > 0) break;
    }
    return count;
  })();

  const totalItems = entries.reduce((s, e) => s + e.items.length, 0);

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles size={18} style={{ color: "#00FF88" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>Gratitude Journal</span>
            </div>
            <h1 className="text-3xl font-black mb-2">
              Count Your{" "}
              <span style={{ background: "linear-gradient(135deg, #00FF88, #F59E0B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Blessings
              </span>
            </h1>
            <p className="text-sm" style={{ color: "#6A6A88" }}>
              Research shows gratitude rewires the brain toward joy. Scripture commands it. Practice it daily.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Day Streak", value: streak, color: "#F59E0B", emoji: "🔥" },
              { label: "Total Entries", value: entries.length, color: "#00FF88", emoji: "📋" },
              { label: "Gratitudes", value: totalItems, color: "#6B4FBB", emoji: "🙏" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <div className="text-xl mb-0.5">{s.emoji}</div>
                <p className="text-2xl font-black mb-0.5" style={{ color: s.color }}>{s.value}</p>
                <p className="text-[10px]" style={{ color: "#6A6A88" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Today's Entry */}
          {!hasTodayEntry ? (
            <div
              className="rounded-2xl p-6 mb-8"
              style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.06), rgba(245,158,11,0.04))", border: "1px solid rgba(0,255,136,0.15)" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Calendar size={14} style={{ color: "#00FF88" }} />
                <h2 className="font-black" style={{ color: "#F2F2F8" }}>Today — {TODAY}</h2>
              </div>
              <p className="text-xs mb-5 italic" style={{ color: "#4A4A68" }}>
                💡 {PROMPTS[promptIndex]}
              </p>

              {/* Mood */}
              <div className="mb-5">
                <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "#6A6A88" }}>How are you feeling today?</p>
                <div className="flex gap-2 flex-wrap">
                  {([1, 2, 3, 4, 5] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setTodayMood(m)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold transition-all"
                      style={{
                        background: todayMood === m ? `${MOODS[m].color}15` : "rgba(255,255,255,0.04)",
                        border: `1px solid ${todayMood === m ? `${MOODS[m].color}40` : "rgba(255,255,255,0.06)"}`,
                        color: todayMood === m ? MOODS[m].color : "#6A6A88",
                      }}
                    >
                      {MOODS[m].emoji} {MOODS[m].label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3 gratitudes */}
              <div className="mb-4">
                <p className="text-[10px] font-bold uppercase tracking-wider mb-2.5" style={{ color: "#6A6A88" }}>
                  Three things you&apos;re grateful for today:
                </p>
                <div className="space-y-2">
                  {todayItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-sm font-bold w-5 shrink-0 text-center" style={{ color: "#00FF88" }}>{i + 1}.</span>
                      <input
                        type="text"
                        placeholder={i === 0 ? "I'm grateful for…" : i === 1 ? "Something good that happened…" : "One more blessing…"}
                        value={item}
                        onChange={(e) => {
                          const next = [...todayItems];
                          next[i] = e.target.value;
                          setTodayItems(next);
                        }}
                        className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none"
                        style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional verse */}
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="📖 Scripture you're standing on today (optional)"
                  value={todayVerse}
                  onChange={(e) => setTodayVerse(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                />
              </div>

              <button
                onClick={saveEntry}
                disabled={filledItems.length === 0}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-black transition-all"
                style={{ background: filledItems.length > 0 ? "linear-gradient(135deg, #00FF88, #00BB55)" : "#1E1E32", color: filledItems.length > 0 ? "#07070F" : "#4A4A68" }}
              >
                <Heart size={15} /> Save Today&apos;s Gratitude
              </button>
            </div>
          ) : (
            <div
              className="rounded-2xl p-6 mb-8 text-center"
              style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)" }}
            >
              <div className="text-3xl mb-2">🙌</div>
              <h3 className="font-black mb-1" style={{ color: "#F2F2F8" }}>Gratitude logged for today!</h3>
              <p className="text-sm" style={{ color: "#6A6A88" }}>Come back tomorrow to continue your streak. Keep counting the blessings.</p>
            </div>
          )}

          {/* Past entries */}
          {entries.length > 0 && (
            <div>
              <h2 className="text-lg font-black mb-4" style={{ color: "#F2F2F8" }}>Past Entries</h2>
              <div className="space-y-4">
                {entries.map((entry) => {
                  const mood = MOODS[entry.mood];
                  return (
                    <div
                      key={entry.id}
                      className="rounded-2xl p-5"
                      style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span style={{ color: "#4A4A68", fontSize: 12 }}>{entry.date}</span>
                          <span className="text-sm" title={mood.label}>{mood.emoji}</span>
                        </div>
                        <button
                          onClick={() => deleteEntry(entry.id)}
                          style={{ color: "#3A3A58" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#EF4444")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#3A3A58")}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                      <ul className="space-y-1.5 mb-3">
                        {entry.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Star size={12} className="mt-0.5 shrink-0" style={{ color: "#00FF88" }} />
                            <span style={{ color: "#C0C0D8" }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {entry.verse && (
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(0,255,136,0.08)", color: "#00AA55" }}>
                          📜 {entry.verse}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Footer verse */}
          <div
            className="mt-10 rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.06), rgba(0,255,136,0.04))", border: "1px solid rgba(245,158,11,0.15)" }}
          >
            <Sparkles size={18} style={{ color: "#F59E0B" }} className="mx-auto mb-3" />
            <p className="text-sm italic mb-2" style={{ color: "#C0C0D8" }}>
              &ldquo;Give thanks in all circumstances; for this is God&apos;s will for you in Christ Jesus.&rdquo;
            </p>
            <p className="text-xs font-bold mb-4" style={{ color: "#4A4A68" }}>— 1 Thessalonians 5:18</p>
            <div className="flex items-center justify-center gap-4">
              <a href="/journal" className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#00FF88" }}>
                Main Journal <ChevronRight size={11} />
              </a>
              <a href="/prayer-list" className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#F59E0B" }}>
                Prayer List <ChevronRight size={11} />
              </a>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
