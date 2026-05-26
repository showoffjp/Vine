import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DailyActions from "@/components/DailyActions";
import {
  Clock,
  CheckCircle,
  Flame,
  BookOpen,
  MessageCircle,
  Pen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Daily Bread — Vine",
  description: "Your daily devotional and Scripture reading",
};

const weekSchedule = [
  { day: "Mon", label: "Lamentations 3", active: true },
  { day: "Tue", label: "Psalm 23", active: false },
  { day: "Wed", label: "Romans 8", active: false },
  { day: "Thu", label: "Proverbs 3", active: false },
  { day: "Fri", label: "John 15", active: false },
  { day: "Sat", label: "Isaiah 40", active: false },
  { day: "Sun", label: "Hebrews 11", active: false },
];

const moreDevotionals = [
  {
    title: "The Shepherd Who Calls by Name",
    ref: "John 10:3",
    author: "Pastor Ruth Okonkwo",
    readTime: "4 min",
    tag: "Identity",
    tagColor: "#4FBBAA",
  },
  {
    title: "Peace That Passes Understanding",
    ref: "Philippians 4:7",
    author: "Dr. Samuel Owusu",
    readTime: "5 min",
    tag: "Peace",
    tagColor: "#6B4FBB",
  },
  {
    title: "Strength for the Weary",
    ref: "Isaiah 40:31",
    author: "Rev. Naomi Clark",
    readTime: "6 min",
    tag: "Endurance",
    tagColor: "#00FF88",
  },
  {
    title: "Walking by Faith, Not by Sight",
    ref: "2 Corinthians 5:7",
    author: "Bishop James Nkosi",
    readTime: "4 min",
    tag: "Faith",
    tagColor: "#BB4F7A",
  },
];

export default function DailyPage() {
  const streakDays = Array.from({ length: 21 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen" style={{ background: "#07070F" }}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 page-body pb-16">
        {/* Reading Plan Progress Bar */}
        <div
          className="rounded-2xl p-4 mb-6 flex items-center gap-4"
          style={{ background: "#12121F", border: "1px solid #1E1E32" }}
        >
          <div className="flex items-center gap-2">
            <BookOpen size={16} style={{ color: "#00FF88" }} />
            <span className="text-sm font-semibold" style={{ color: "#F2F2F8" }}>
              New Testament in 90 Days
            </span>
          </div>
          <div className="flex-1 h-2 rounded-full" style={{ background: "#1E1E32" }}>
            <div
              className="h-full rounded-full"
              style={{
                width: "23.3%",
                background: "linear-gradient(90deg, #00FF88, #44FFAA)",
              }}
            />
          </div>
          <span className="text-sm font-bold flex-shrink-0" style={{ color: "#00FF88" }}>
            Day 21 of 90
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* MAIN CONTENT */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="tag-pill">Monday, May 25, 2026</span>
                <span
                  className="text-xs font-semibold px-3 py-0.5 rounded-full"
                  style={{
                    background: "rgba(107,79,187,0.15)",
                    color: "#8B6FDB",
                    border: "1px solid rgba(107,79,187,0.3)",
                  }}
                >
                  Morning
                </span>
              </div>
              <h1 className="text-3xl font-black mb-1" style={{ color: "#F2F2F8" }}>
                Good morning, Jason. ☀️
              </h1>
              <p className="text-base" style={{ color: "#8A8AA8" }}>
                Here&apos;s your devotional for today. Take a deep breath and let God&apos;s Word renew you.
              </p>
            </div>

            {/* Today's Verse */}
            <div className="verse-card rounded-2xl p-8 mb-6 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,136,0.15) 0%, transparent 70%)",
                }}
              />
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#00FF88" }}>
                Today&apos;s Verse · Lamentations 3:22–23
              </p>
              <blockquote
                className="text-xl sm:text-2xl font-bold italic leading-relaxed mb-4"
                style={{ color: "#F2F2F8" }}
              >
                &ldquo;Because of the Lord&apos;s great love we are not consumed, for his compassions never fail. They
                are new every morning; great is your faithfulness.&rdquo;
              </blockquote>
              <p className="text-base font-semibold gold-gradient">— Lamentations 3:22–23 (NIV)</p>
            </div>

            {/* Devotional */}
            <div
              className="rounded-2xl p-6 mb-6"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              {/* Author */}
              <div className="flex items-center gap-3 mb-5 pb-5" style={{ borderBottom: "1px solid #1E1E32" }}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #6B4FBB, #4FBBAA)", color: "#07070F" }}
                >
                  EA
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold" style={{ color: "#F2F2F8" }}>
                    Dr. Emmanuel Asante
                  </p>
                  <p className="text-xs" style={{ color: "#6A6A88" }}>
                    Cape Town, South Africa · Theologian & Author
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: "#8A8AA8" }}>
                  <Clock size={12} />
                  <span>5 min read</span>
                </div>
              </div>

              <h2 className="text-xl font-black mb-4" style={{ color: "#F2F2F8" }}>
                Mercies That Never Run Out
              </h2>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#C0C0D8" }}>
                <p>
                  There is a particular kind of mercy that most of us have never fully grasped — the kind that doesn&apos;t
                  run dry. The kind that isn&apos;t rationed, thinned out, or withheld because of how many times we&apos;ve
                  needed it before. Jeremiah, writing from the rubble of Jerusalem, discovered this mercy in one of the
                  darkest seasons of his life. And the words he penned there have carried believers through millennia
                  of brokenness.
                </p>
                <p>
                  &ldquo;Because of the Lord&apos;s great love we are not consumed.&rdquo; This is not the language of someone
                  for whom things are going well. Lamentations is a book of grief, of ruin, of deep spiritual anguish.
                  Jeremiah had watched his people taken captive, the temple destroyed, and every outward sign of God&apos;s
                  blessing stripped away. Yet somehow, in that wreckage, he found a reason to declare God faithful.
                </p>
                <p>
                  The key word is &ldquo;new.&rdquo; God&apos;s compassions are not recycled from yesterday. They are not the
                  leftover grace from a moment when you were more deserving. They are freshly poured out each morning,
                  like manna in the wilderness — exactly enough for today, exactly what you need, exactly on time.
                  This is the rhythm God established from the beginning: daily dependence, daily renewal.
                </p>
                <p>
                  Many of us carry yesterday&apos;s shame into today&apos;s prayer. We approach God already apologizing for who
                  we are, already bracing for distance. But the morning — specifically the morning — is God&apos;s chosen
                  moment to demonstrate that nothing has accumulated against you overnight. His mercy accounts have
                  been reset. The ledger is clean again.
                </p>
                <p>
                  Think about what this means practically. The failure you replayed in your mind before you fell asleep?
                  God&apos;s mercy addresses it fresh this morning. The anxiety you&apos;ve been carrying about the week ahead?
                  His compassion meets it with something new. The dry season in your spiritual life, the prayers that
                  feel unanswered, the faith that feels thin? Great is his faithfulness — not great was, not great
                  will be, but <em>great is</em>. Present tense. Right now. For you.
                </p>
                <p>
                  Jeremiah didn&apos;t discover this truth in a moment of triumph. He discovered it in the middle of
                  devastation. Which means you don&apos;t have to wait until life feels better to access this mercy. You
                  can reach for it right now, in whatever circumstances today holds. The God who kept Jeremiah through
                  the fall of Jerusalem is the same God who meets you this morning — with love that never runs out and
                  compassion that starts fresh the moment you open your eyes.
                </p>
              </div>

              {/* Share / Like / Save */}
              <div className="flex items-center gap-3 mt-6 pt-5" style={{ borderTop: "1px solid #1E1E32" }}>
                <DailyActions />
              </div>
            </div>

            {/* Reflect */}
            <div
              className="rounded-2xl p-6 mb-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle size={18} style={{ color: "#6B4FBB" }} />
                <h3 className="text-base font-black" style={{ color: "#F2F2F8" }}>
                  Reflect
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  "When did you last feel like God's mercies were truly 'new' for you? What circumstances surrounded that moment?",
                  "How does Jeremiah's context — writing from devastation — change the way you receive these words today?",
                  "Is there a shame from yesterday you've been carrying into today's prayer? What would it look like to let this verse address it?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-black"
                      style={{ background: "rgba(107,79,187,0.2)", color: "#8B6FDB" }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#C0C0D8" }}>
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply */}
            <div
              className="rounded-2xl p-6 mb-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={18} style={{ color: "#4FBBAA" }} />
                <h3 className="text-base font-black" style={{ color: "#F2F2F8" }}>
                  Apply Today
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  "Begin your morning with 2 minutes of silence, deliberately receiving God's new mercies before you look at your phone.",
                  "Write Lamentations 3:22–23 on a sticky note and place it somewhere you'll see it repeatedly today.",
                  "When you notice anxiety or guilt rising during the day, speak this verse aloud and consciously choose to believe it.",
                ].map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#4FBBAA" }} />
                    <p className="text-sm leading-relaxed" style={{ color: "#C0C0D8" }}>
                      {a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pray */}
            <div className="rounded-2xl p-6 mb-6 verse-card">
              <div className="flex items-center gap-2 mb-4">
                <Pen size={18} style={{ color: "#00FF88" }} />
                <h3 className="text-base font-black" style={{ color: "#F2F2F8" }}>
                  A Prayer for Today
                </h3>
              </div>
              <p className="text-sm italic leading-relaxed" style={{ color: "#C0C0D8" }}>
                Lord, thank you that your mercies are not dependent on my performance or my track record.
                I come to you this morning with empty hands and a grateful heart, receiving what you have freshly
                prepared for me today. Where I have carried yesterday&apos;s weight, give me grace to lay it down.
                Where I am tempted toward fear or shame, remind me that your compassions do not fail.
                Let your faithfulness be the ground I stand on today. Amen.
              </p>
            </div>


            {/* More Devotionals */}
            <div className="mt-10">
              <h3 className="text-lg font-black mb-4" style={{ color: "#F2F2F8" }}>
                More to Read
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {moreDevotionals.map((d, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:bg-[#18182A] card-glow"
                    style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: `${d.tagColor}18`,
                          color: d.tagColor,
                          border: `1px solid ${d.tagColor}30`,
                        }}
                      >
                        {d.tag}
                      </span>
                      <span className="text-[10px]" style={{ color: "#6A6A88" }}>
                        {d.ref}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold mb-1 leading-snug" style={{ color: "#F2F2F8" }}>
                      {d.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <p className="text-xs" style={{ color: "#8A8AA8" }}>
                        {d.author}
                      </p>
                      <div className="flex items-center gap-1 text-xs" style={{ color: "#6A6A88" }}>
                        <Clock size={11} />
                        {d.readTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:flex flex-col gap-4 w-72 flex-shrink-0">
            {/* Reading Plan Progress */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00FF88" }}>
                Reading Plan
              </h4>
              <p className="text-sm font-bold mb-1" style={{ color: "#F2F2F8" }}>
                New Testament in 90 Days
              </p>
              <p className="text-xs mb-3" style={{ color: "#8A8AA8" }}>
                ~3 chapters/day · Beginner Friendly
              </p>
              <div className="w-full h-2 rounded-full mb-2" style={{ background: "#1E1E32" }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: "23.3%", background: "linear-gradient(90deg, #00FF88, #44FFAA)" }}
                />
              </div>
              <div className="flex justify-between text-[10px]" style={{ color: "#6A6A88" }}>
                <span>Day 21</span>
                <span>90 days total</span>
              </div>
            </div>

            {/* This Week */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00FF88" }}>
                This Week
              </h4>
              <div className="space-y-2">
                {weekSchedule.map((day) => (
                  <div
                    key={day.day}
                    className="flex items-center gap-3 p-2 rounded-xl transition-all duration-200"
                    style={{
                      background: day.active ? "rgba(0,255,136,0.08)" : "transparent",
                      border: day.active ? "1px solid rgba(0,255,136,0.2)" : "1px solid transparent",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-black"
                      style={{
                        background: day.active ? "rgba(0,255,136,0.2)" : "#1E1E32",
                        color: day.active ? "#00FF88" : "#6A6A88",
                      }}
                    >
                      {day.day}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-xs font-medium truncate"
                        style={{ color: day.active ? "#F2F2F8" : "#6A6A88" }}
                      >
                        {day.label}
                      </p>
                    </div>
                    {day.active && <CheckCircle size={13} style={{ color: "#00FF88" }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Streak Tracker */}
            <div
              className="rounded-2xl p-4"
              style={{
                background: "linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(107,79,187,0.04) 100%)",
                border: "1px solid rgba(0,255,136,0.15)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>
                  Streak
                </h4>
                <div className="flex items-center gap-1">
                  <Flame size={14} style={{ color: "#E07030" }} />
                  <span className="text-sm font-black" style={{ color: "#F2F2F8" }}>
                    21 days
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {streakDays.map((day) => (
                  <div
                    key={day}
                    className="w-6 h-6 rounded-md flex items-center justify-center text-xs"
                    style={{
                      background:
                        day === 21
                          ? "linear-gradient(135deg, #00FF88, #44FFAA)"
                          : "rgba(0,255,136,0.15)",
                      color: day === 21 ? "#07070F" : "#00FF88",
                      border: day === 21 ? "none" : "1px solid rgba(0,255,136,0.2)",
                    }}
                  >
                    🔥
                  </div>
                ))}
              </div>
              <p className="text-[10px] mt-3" style={{ color: "#8A8AA8" }}>
                9 more days until your 30-day milestone!
              </p>
            </div>

            {/* Quick Stats */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00FF88" }}>
                Your Month
              </h4>
              <div className="space-y-2">
                {[
                  { label: "Chapters read", value: "45" },
                  { label: "Devotionals", value: "21" },
                  { label: "Notes written", value: "12" },
                  { label: "Verses saved", value: "34" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#8A8AA8" }}>
                      {s.label}
                    </span>
                    <span className="text-xs font-bold" style={{ color: "#F2F2F8" }}>
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
