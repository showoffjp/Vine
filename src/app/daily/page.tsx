"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DailyDevotional from "@/components/DailyDevotional";
import {
  Flame,
  BookOpen,
  CheckCircle,
  Clock,
} from "lucide-react";

const weekSchedule = [
  { day: "Mon", label: "Lamentations 3", todayIndex: 0 },
  { day: "Tue", label: "Psalm 23", todayIndex: 1 },
  { day: "Wed", label: "Romans 8", todayIndex: 2 },
  { day: "Thu", label: "Proverbs 3", todayIndex: 3 },
  { day: "Fri", label: "John 15", todayIndex: 4 },
  { day: "Sat", label: "Isaiah 40", todayIndex: 5 },
  { day: "Sun", label: "Hebrews 11", todayIndex: 6 },
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
    tagColor: "#3a7d56",
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
  const [completedDays, setCompletedDays] = useState<Set<number>>(() => {
    try {
      const s = localStorage.getItem("vine_daily_completed");
      return s ? new Set(JSON.parse(s) as number[]) : new Set([0]);
    } catch { return new Set([0]); }
  });
  const streakDays = Array.from({ length: 21 }, (_, i) => i + 1);

  useEffect(() => {
    try {
      localStorage.setItem("vine_daily_completed", JSON.stringify([...completedDays]));
    } catch {}
  }, [completedDays]);

  const toggleDay = (idx: number) => {
    setCompletedDays((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

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
            <BookOpen size={16} style={{ color: "#3a7d56" }} />
            <span className="text-sm font-semibold" style={{ color: "#F2F2F8" }}>
              New Testament in 90 Days
            </span>
          </div>
          <div className="flex-1 h-2 rounded-full" style={{ background: "#1E1E32" }}>
            <div
              className="h-full rounded-full"
              style={{
                width: "23.3%",
                background: "linear-gradient(90deg, #3a7d56, #52a876)",
              }}
            />
          </div>
          <span className="text-sm font-bold flex-shrink-0" style={{ color: "#3a7d56" }}>
            Day 21 of 90
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* MAIN CONTENT */}
          <div className="flex-1 min-w-0">
            <DailyDevotional />


            {/* More Devotionals */}
            <div className="mt-10">
              <h3 className="text-lg font-black mb-4" style={{ color: "#F2F2F8" }}>
                More to Read
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {moreDevotionals.map((d, i) => (
                  <Link
                    key={i}
                    href="/daily"
                    className="block rounded-2xl p-4 transition-all duration-200 hover:bg-[#18182A] card-glow"
                    style={{ background: "#12121F", border: "1px solid #1E1E32", textDecoration: "none" }}
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
                  </Link>
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
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#3a7d56" }}>
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
                  style={{ width: "23.3%", background: "linear-gradient(90deg, #3a7d56, #52a876)" }}
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
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#3a7d56" }}>
                This Week
              </h4>
              <div className="space-y-2">
                {weekSchedule.map((day) => {
                  const done = completedDays.has(day.todayIndex);
                  return (
                    <div
                      key={day.day}
                      onClick={() => toggleDay(day.todayIndex)}
                      className="flex items-center gap-3 p-2 rounded-xl transition-all duration-200 cursor-pointer"
                      style={{
                        background: done ? "rgba(58,125,86,0.08)" : "transparent",
                        border: done ? "1px solid rgba(58,125,86,0.2)" : "1px solid transparent",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-black"
                        style={{
                          background: done ? "rgba(58,125,86,0.2)" : "#1E1E32",
                          color: done ? "#3a7d56" : "#6A6A88",
                        }}
                      >
                        {day.day}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-xs font-medium truncate"
                          style={{ color: done ? "#F2F2F8" : "#6A6A88" }}
                        >
                          {day.label}
                        </p>
                      </div>
                      {done && <CheckCircle size={13} style={{ color: "#3a7d56" }} />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Streak Tracker */}
            <div
              className="rounded-2xl p-4"
              style={{
                background: "linear-gradient(135deg, rgba(58,125,86,0.06) 0%, rgba(107,79,187,0.04) 100%)",
                border: "1px solid rgba(58,125,86,0.15)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>
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
                          ? "linear-gradient(135deg, #3a7d56, #52a876)"
                          : "rgba(58,125,86,0.15)",
                      color: day === 21 ? "#07070F" : "#3a7d56",
                      border: day === 21 ? "none" : "1px solid rgba(58,125,86,0.2)",
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
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#3a7d56" }}>
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
