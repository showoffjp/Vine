"use client";

import { useState, useCallback } from "react";
import {
  Flame,
  Share2,
  Clock,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Check,
  X,
  Users,
  BarChart2,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Chapter {
  id: string;
  book: string;
  chapter: number;
  title: string;
  status: "done" | "today" | "upcoming";
}

interface Book {
  name: string;
  chapters: Chapter[];
  expanded: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const MATTHEW_TITLES: Record<number, string> = {
  1: "The Genealogy & Birth of Jesus",
  2: "The Visit of the Magi",
  3: "John the Baptist",
  4: "The Temptation & Early Ministry",
  5: "The Sermon on the Mount (I)",
  6: "The Sermon on the Mount (II)",
  7: "The Sermon on the Mount (III)",
  8: "Miracles of Healing",
  9: "More Miracles & the Call of Matthew",
  10: "The Twelve Apostles Sent Out",
  11: "Jesus & John the Baptist",
  12: "Lord of the Sabbath",
  13: "Parables of the Kingdom",
  14: "John Beheaded; Feeding 5,000",
  15: "Clean & Unclean; Canaanite Woman",
  16: "Peter's Confession",
  17: "The Transfiguration",
  18: "The Greatest in the Kingdom",
  19: "Marriage & the Rich Young Man",
  20: "Workers in the Vineyard",
  21: "The Triumphal Entry",
  22: "Greatest Commandment",
  23: "Woes to the Pharisees",
  24: "Signs of the End of the Age",
  25: "Parables of the Ten Virgins & Talents",
  26: "The Last Supper",
  27: "The Crucifixion",
  28: "The Resurrection",
};

const MARK_TITLES: Record<number, string> = {
  1: "The Beginning of the Gospel",
  2: "Jesus Forgives & Heals",
  3: "The Choosing of the Twelve",
  4: "Parables & the Storm Stilled",
  5: "Legion & the Woman Healed",
  6: "Rejection at Nazareth; 5,000 Fed",
  7: "Clean & Unclean",
  8: "Peter's Confession",
  9: "The Transfiguration",
  10: "Marriage & Entering the Kingdom",
  11: "The Triumphal Entry",
  12: "Parable of the Tenants",
  13: "The Olivet Discourse",
  14: "Anointing & the Last Supper",
  15: "The Crucifixion",
  16: "The Resurrection",
};

function buildBooks(): Book[] {
  const mattChapters: Chapter[] = Array.from({ length: 28 }, (_, i) => {
    const n = i + 1;
    let status: Chapter["status"] = "upcoming";
    if (n <= 21) status = "done";
    else if (n === 22) status = "today";
    return { id: `matt-${n}`, book: "Matthew", chapter: n, title: MATTHEW_TITLES[n] ?? `Chapter ${n}`, status };
  });

  const markChapters: Chapter[] = Array.from({ length: 16 }, (_, i) => {
    const n = i + 1;
    return { id: `mark-${n}`, book: "Mark", chapter: n, title: MARK_TITLES[n] ?? `Chapter ${n}`, status: "upcoming" };
  });

  return [
    { name: "Matthew", chapters: mattChapters, expanded: true },
    { name: "Mark", chapters: markChapters, expanded: false },
  ];
}

const WEEK_DAYS = [
  { label: "Mon", full: "Monday", reading: "Matt 1–3", done: true },
  { label: "Tue", full: "Tuesday", reading: "Matt 4–6", done: true },
  { label: "Wed", full: "Wednesday", reading: "Matt 7–9", done: true },
  { label: "Thu", full: "Thursday", reading: "Matt 10–12", done: false },
  { label: "Fri", full: "Friday", reading: "Matt 13–15", done: false, today: true },
  { label: "Sat", full: "Saturday", reading: "Matt 16–18", done: false, future: true },
  { label: "Sun", full: "Sunday", reading: "Matt 19–21", done: false, future: true },
];

const ALT_PLANS = [
  {
    name: "The Psalms in 30 Days",
    duration: "30 Days",
    chaptersPerDay: "5 chapters/day",
    difficulty: "Beginner",
    difficultyColor: "#22c55e",
    members: "12.4k",
  },
  {
    name: "Proverbs & Wisdom",
    duration: "31 Days",
    chaptersPerDay: "1 chapter/day",
    difficulty: "Beginner",
    difficultyColor: "#22c55e",
    members: "8.1k",
  },
  {
    name: "The Gospels",
    duration: "60 Days",
    chaptersPerDay: "2 chapters/day",
    difficulty: "Intermediate",
    difficultyColor: "#f59e0b",
    members: "21.7k",
  },
  {
    name: "Full Bible (1 Year)",
    duration: "365 Days",
    chaptersPerDay: "3–4 chapters/day",
    difficulty: "Advanced",
    difficultyColor: "#6B4FBB",
    members: "34.2k",
  },
];

// ─── Circular progress ────────────────────────────────────────────────────────

function CircularProgress({ percent }: { percent: number }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const dash = (percent / 100) * circ;

  return (
    <svg width={130} height={130} viewBox="0 0 130 130" style={{ transform: "rotate(-90deg)" }}>
      <circle cx={65} cy={65} r={r} fill="none" stroke="#1E1E32" strokeWidth={10} />
      <circle
        cx={65}
        cy={65}
        r={r}
        fill="none"
        stroke="#00FF88"
        strokeWidth={10}
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ReadingPlanPage() {
  const [books, setBooks] = useState<Book[]>(buildBooks);
  const [completedChapters, setCompletedChapters] = useState<Set<string>>(
    () => new Set(buildBooks()[0].chapters.filter((c) => c.status === "done").map((c) => c.id))
  );
  const [todayMarked, setTodayMarked] = useState(false);

  const toggleChapter = useCallback((id: string) => {
    setCompletedChapters((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleBook = useCallback((bookName: string) => {
    setBooks((prev) =>
      prev.map((b) => (b.name === bookName ? { ...b, expanded: !b.expanded } : b))
    );
  }, []);

  const chapterStatus = (ch: Chapter): Chapter["status"] => {
    if (completedChapters.has(ch.id)) return "done";
    return ch.status;
  };

  const totalDone = completedChapters.size + (todayMarked ? 1 : 0);
  const progress = Math.round((22 / 90) * 100);

  return (
    <>
      <style>{`
        @keyframes pulse-border {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,136,0.3); }
          50% { box-shadow: 0 0 0 6px rgba(0,255,136,0); }
        }
        @keyframes dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
      `}</style>

      <Navbar />

      <main style={{ background: "#07070F", minHeight: "100vh", color: "#F2F2F8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px 80px" }}>

          {/* ── Header ──────────────────────────────────────────────────────── */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
            <div>
              <h1 style={{ fontSize: 36, fontWeight: 800, margin: 0, letterSpacing: -0.5 }}>
                Your Reading Journey
              </h1>
              <p style={{ color: "#8A8AA8", margin: "8px 0 0", fontSize: 15 }}>
                Keep the streak alive! God&apos;s Word is a lamp to your feet.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {/* Streak badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "linear-gradient(135deg, rgba(0,255,136,0.15), rgba(107,79,187,0.1))",
                  border: "1px solid rgba(0,255,136,0.3)",
                  borderRadius: 14,
                  padding: "10px 18px",
                }}
              >
                <Flame size={22} style={{ color: "#f97316" }} />
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#00FF88", lineHeight: 1 }}>22</div>
                  <div style={{ fontSize: 11, color: "#8A8AA8" }}>day streak</div>
                </div>
              </div>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  background: "#12121F",
                  border: "1px solid #1E1E32",
                  borderRadius: 12,
                  color: "#F2F2F8",
                  padding: "10px 18px",
                  fontSize: 14,
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                <Share2 size={15} />
                Share Streak
              </button>
            </div>
          </div>

          {/* ── Main grid ───────────────────────────────────────────────────── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>

            {/* Active plan card + stats: side by side on lg */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>

              {/* ── Active plan card ─────────────────────────────────────────── */}
              <div
                style={{
                  flex: "1 1 360px",
                  background: "#12121F",
                  border: "1px solid rgba(0,255,136,0.2)",
                  borderRadius: 20,
                  padding: "28px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Background glow */}
                <div
                  style={{
                    position: "absolute",
                    top: -60,
                    right: -60,
                    width: 220,
                    height: 220,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                  <div>
                    <div style={{ fontSize: 11, color: "#00FF88", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.7, marginBottom: 6 }}>
                      Active Plan
                    </div>
                    <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>
                      New Testament in 90 Days
                    </h2>
                    <div style={{ color: "#8A8AA8", fontSize: 14, marginTop: 4 }}>
                      Day 22 of 90
                    </div>
                  </div>

                  {/* Circular progress */}
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <CircularProgress percent={progress} />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        transform: "none",
                      }}
                    >
                      <div style={{ fontSize: 22, fontWeight: 800, color: "#00FF88" }}>{progress}%</div>
                      <div style={{ fontSize: 10, color: "#6A6A88" }}>complete</div>
                    </div>
                  </div>
                </div>

                {/* Today's reading */}
                <div
                  style={{
                    background: "#07070F",
                    border: "1px solid #1E1E32",
                    borderRadius: 14,
                    padding: "16px 18px",
                    marginBottom: 16,
                  }}
                >
                  <div style={{ fontSize: 11, color: "#6A6A88", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600 }}>
                    Today&apos;s Reading
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>
                    Matthew 5–7
                  </div>
                  <div style={{ fontSize: 13, color: "#8A8AA8", marginBottom: 16 }}>
                    The Sermon on the Mount
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                    <button
                      onClick={() => setTodayMarked((v) => !v)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        background: todayMarked
                          ? "rgba(34,197,94,0.15)"
                          : "linear-gradient(135deg, #00FF88, #00cc66)",
                        border: todayMarked ? "1px solid rgba(34,197,94,0.4)" : "none",
                        borderRadius: 10,
                        padding: "10px 20px",
                        color: todayMarked ? "#22c55e" : "#07070F",
                        fontWeight: 700,
                        fontSize: 14,
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {todayMarked ? <Check size={15} /> : <BookOpen size={15} />}
                      {todayMarked ? "Marked as Read!" : "Mark as Read"}
                    </button>
                    <Link
                      href="/bible"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        background: "#12121F",
                        border: "1px solid #1E1E32",
                        borderRadius: 10,
                        padding: "10px 18px",
                        color: "#F2F2F8",
                        fontSize: 14,
                        textDecoration: "none",
                        fontWeight: 500,
                      }}
                    >
                      Start Reading
                      <ExternalLink size={13} />
                    </Link>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#6A6A88", fontSize: 13 }}>
                  <Clock size={14} />
                  Estimated reading time: ~18 minutes
                </div>
              </div>

              {/* ── Stats sidebar ─────────────────────────────────────────────── */}
              <div
                style={{
                  flex: "0 1 260px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 600, color: "#8A8AA8", textTransform: "uppercase", letterSpacing: 0.5 }}>
                  Your Stats
                </div>

                {[
                  { label: "Chapters this month", value: String(48 + (todayMarked ? 1 : 0)), sub: "of 60 goal" },
                  { label: "Verses memorized", value: "12", sub: "this month" },
                  { label: "Consecutive days", value: "22", sub: "personal best: 22" },
                  { label: "Total reading time", value: "~6 hrs", sub: "this month" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: 14,
                      padding: "14px 18px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 12, color: "#6A6A88" }}>{stat.label}</div>
                      <div style={{ fontSize: 11, color: "#6A6A88", marginTop: 1 }}>{stat.sub}</div>
                    </div>
                    <div style={{ fontSize: 24, fontWeight: 800, color: "#00FF88" }}>{stat.value}</div>
                  </div>
                ))}

                {/* Reading pace bar */}
                <div
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: 14,
                    padding: "14px 18px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <div>
                      <div style={{ fontSize: 12, color: "#6A6A88" }}>Reading Pace</div>
                      <div style={{ fontSize: 11, color: "#22c55e", marginTop: 1, fontWeight: 600 }}>On Track</div>
                    </div>
                    <BarChart2 size={18} style={{ color: "#22c55e" }} />
                  </div>
                  <div style={{ background: "#1E1E32", borderRadius: 6, height: 8, overflow: "hidden" }}>
                    <div
                      style={{
                        width: "68%",
                        height: "100%",
                        background: "linear-gradient(90deg, #22c55e, #4ade80)",
                        borderRadius: 6,
                        transition: "width 0.5s ease",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 10, color: "#6A6A88" }}>
                    <span>Behind</span>
                    <span>On Track</span>
                    <span>Ahead</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Weekly view ──────────────────────────────────────────────────── */}
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: 20,
                padding: "22px 24px",
              }}
            >
              <h2 style={{ margin: "0 0 18px", fontSize: 17, fontWeight: 700 }}>This Week</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>
                {WEEK_DAYS.map((day) => (
                  <div
                    key={day.label}
                    style={{
                      background: day.today ? "rgba(0,255,136,0.07)" : "#07070F",
                      border: day.today ? "1px solid rgba(0,255,136,0.5)" : "1px solid #1E1E32",
                      borderRadius: 12,
                      padding: "12px 8px",
                      textAlign: "center",
                      animation: day.today ? "pulse-border 2.5s ease-in-out infinite" : "none",
                    }}
                  >
                    <div style={{ fontSize: 11, color: day.today ? "#00FF88" : "#6A6A88", fontWeight: 600, marginBottom: 6 }}>
                      {day.label}
                    </div>

                    {day.today && (
                      <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
                        <div
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#00FF88",
                            animation: "dot-pulse 1.5s ease-in-out infinite",
                          }}
                        />
                      </div>
                    )}

                    {!day.future && !day.today && (
                      <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
                        {day.done ? (
                          <div
                            style={{
                              width: 22,
                              height: 22,
                              borderRadius: "50%",
                              background: "rgba(34,197,94,0.15)",
                              border: "1px solid rgba(34,197,94,0.3)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Check size={12} style={{ color: "#22c55e" }} />
                          </div>
                        ) : (
                          <div
                            style={{
                              width: 22,
                              height: 22,
                              borderRadius: "50%",
                              background: "rgba(239,68,68,0.1)",
                              border: "1px solid rgba(239,68,68,0.2)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <X size={12} style={{ color: "#ef4444" }} />
                          </div>
                        )}
                      </div>
                    )}

                    <div style={{ fontSize: 11, color: day.future ? "#6A6A88" : "#8A8AA8", lineHeight: 1.3 }}>
                      {day.reading}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Chapter accordion ────────────────────────────────────────────── */}
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "22px 24px 16px", borderBottom: "1px solid #1E1E32" }}>
                <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>Chapter List</h2>
                <div style={{ fontSize: 13, color: "#6A6A88", marginTop: 4 }}>
                  {totalDone} chapters completed · Toggle to mark as read
                </div>
              </div>

              {books.map((book) => (
                <div key={book.name} style={{ borderBottom: "1px solid #1E1E32" }}>
                  {/* Book header */}
                  <button
                    onClick={() => toggleBook(book.name)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 24px",
                      background: "transparent",
                      border: "none",
                      color: "#F2F2F8",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <BookOpen size={18} style={{ color: "#00FF88" }} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 16 }}>{book.name}</div>
                        <div style={{ fontSize: 12, color: "#6A6A88" }}>
                          {book.chapters.length} chapters ·{" "}
                          {book.chapters.filter((c) => completedChapters.has(c.id)).length} done
                        </div>
                      </div>
                    </div>
                    {book.expanded ? (
                      <ChevronDown size={18} style={{ color: "#6A6A88" }} />
                    ) : (
                      <ChevronRight size={18} style={{ color: "#6A6A88" }} />
                    )}
                  </button>

                  {/* Chapter rows */}
                  {book.expanded && (
                    <div style={{ padding: "0 24px 16px" }}>
                      {book.chapters.map((ch) => {
                        const st = chapterStatus(ch);
                        const isDone = st === "done";
                        const isToday = st === "today" && !completedChapters.has(ch.id);
                        return (
                          <div
                            key={ch.id}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                              padding: "10px 0",
                              borderBottom: "1px solid rgba(30,30,50,0.6)",
                            }}
                          >
                            {/* Status icon */}
                            <div style={{ width: 28, display: "flex", justifyContent: "center", flexShrink: 0 }}>
                              {isDone ? (
                                <div
                                  style={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    background: "rgba(0,255,136,0.15)",
                                    border: "1px solid rgba(0,255,136,0.4)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Check size={13} style={{ color: "#00FF88" }} />
                                </div>
                              ) : isToday ? (
                                <div
                                  style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: "#00FF88",
                                    animation: "dot-pulse 1.5s ease-in-out infinite",
                                    marginTop: 2,
                                  }}
                                />
                              ) : (
                                <div
                                  style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: "#1E1E32",
                                    border: "1px solid #2E2E4E",
                                    marginTop: 2,
                                  }}
                                />
                              )}
                            </div>

                            {/* Chapter info */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div
                                style={{
                                  fontSize: 14,
                                  fontWeight: isToday ? 700 : 500,
                                  color: isDone ? "#6A6A88" : isToday ? "#00FF88" : "#F2F2F8",
                                  textDecoration: isDone ? "line-through" : "none",
                                }}
                              >
                                {book.name} {ch.chapter}
                              </div>
                              <div style={{ fontSize: 12, color: "#6A6A88", marginTop: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                {ch.title}
                              </div>
                            </div>

                            {/* Badge */}
                            {isToday && (
                              <span
                                style={{
                                  fontSize: 10,
                                  fontWeight: 700,
                                  color: "#07070F",
                                  background: "#00FF88",
                                  borderRadius: 20,
                                  padding: "2px 8px",
                                  flexShrink: 0,
                                }}
                              >
                                TODAY
                              </span>
                            )}

                            {/* Read button */}
                            <button
                              onClick={() => toggleChapter(ch.id)}
                              style={{
                                background: isDone ? "rgba(0,255,136,0.08)" : "#07070F",
                                border: isDone
                                  ? "1px solid rgba(0,255,136,0.2)"
                                  : isToday
                                  ? "1px solid rgba(0,255,136,0.4)"
                                  : "1px solid #1E1E32",
                                borderRadius: 8,
                                color: isDone ? "#00FF88" : "#8A8AA8",
                                fontSize: 12,
                                fontWeight: 600,
                                padding: "5px 12px",
                                cursor: "pointer",
                                flexShrink: 0,
                                transition: "all 0.15s",
                              }}
                            >
                              {isDone ? "Unmark" : "Read"}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ── Plan switcher ────────────────────────────────────────────────── */}
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: 20,
                padding: "22px 24px",
              }}
            >
              <h2 style={{ margin: "0 0 18px", fontSize: 17, fontWeight: 700 }}>Switch Plans</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
                {ALT_PLANS.map((plan) => (
                  <div
                    key={plan.name}
                    style={{
                      background: "#07070F",
                      border: "1px solid #1E1E32",
                      borderRadius: 16,
                      padding: "18px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      transition: "border-color 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,136,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#1E1E32";
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{plan.name}</div>
                      <div style={{ fontSize: 12, color: "#6A6A88" }}>
                        {plan.duration} · {plan.chaptersPerDay}
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: plan.difficultyColor,
                          background: `${plan.difficultyColor}18`,
                          borderRadius: 20,
                          padding: "2px 8px",
                        }}
                      >
                        {plan.difficulty}
                      </span>
                      <span style={{ fontSize: 12, color: "#6A6A88", display: "flex", alignItems: "center", gap: 4 }}>
                        <Users size={12} />
                        {plan.members}
                      </span>
                    </div>

                    <button
                      style={{
                        background: "transparent",
                        border: "1px solid #1E1E32",
                        borderRadius: 10,
                        color: "#F2F2F8",
                        fontSize: 13,
                        fontWeight: 600,
                        padding: "8px",
                        cursor: "pointer",
                        transition: "all 0.15s",
                        marginTop: "auto",
                      }}
                      onMouseEnter={(e) => {
                        const btn = e.currentTarget as HTMLButtonElement;
                        btn.style.background = "rgba(0,255,136,0.1)";
                        btn.style.borderColor = "rgba(0,255,136,0.3)";
                        btn.style.color = "#00FF88";
                      }}
                      onMouseLeave={(e) => {
                        const btn = e.currentTarget as HTMLButtonElement;
                        btn.style.background = "transparent";
                        btn.style.borderColor = "#1E1E32";
                        btn.style.color = "#F2F2F8";
                      }}
                    >
                      Start Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
