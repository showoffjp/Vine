"use client";

import { useState } from "react";
import { Heart, Bookmark, Share2, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const days = [
  { label: "Lamentations 3:22-23", title: "His Mercies Are New Every Morning", day: 1 },
  { label: "Psalm 23", title: "The Lord Is My Shepherd", day: 2 },
  { label: "Romans 8:28-39", title: "More Than Conquerors", day: 3 },
  { label: "Proverbs 3:5-6", title: "Trust in the Lord With All Your Heart", day: 4 },
  { label: "John 15:1-17", title: "The True Vine", day: 5 },
  { label: "Isaiah 40:28-31", title: "They Shall Mount Up With Wings", day: 6 },
  { label: "Hebrews 11:1-16", title: "The Faith Hall of Fame", day: 7 },
];

export default function DailyActions() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);
  const [dayIndex, setDayIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleShare = () => {
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const handleComplete = () => {
    setCompleted(true);
    setTimeout(() => setCompleted(false), 3000);
  };

  return (
    <div className="space-y-4">
      {/* Action Bar */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLiked(v => !v)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
          style={{
            color: liked ? "#EC4899" : "#8A8AA8",
            background: liked ? "rgba(236,72,153,0.08)" : "transparent",
          }}
          onMouseEnter={e => !liked && (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
          onMouseLeave={e => !liked && (e.currentTarget.style.background = "transparent")}
        >
          <Heart size={15} fill={liked ? "#EC4899" : "none"} />
          {liked ? "Liked" : "Like"}
        </button>
        <button
          onClick={() => setSaved(v => !v)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
          style={{
            color: saved ? "#3a7d56" : "#8A8AA8",
            background: saved ? "rgba(58,125,86,0.08)" : "transparent",
          }}
          onMouseEnter={e => !saved && (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
          onMouseLeave={e => !saved && (e.currentTarget.style.background = "transparent")}
        >
          <Bookmark size={15} fill={saved ? "#3a7d56" : "none"} />
          {saved ? "Saved" : "Save"}
        </button>
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ml-auto"
          style={{ color: shared ? "#3a7d56" : "#8A8AA8" }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          <Share2 size={15} />
          {shared ? "Copied!" : "Share"}
        </button>
      </div>

      {/* Mark Complete */}
      {!completed ? (
        <button
          onClick={handleComplete}
          className="w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all"
          style={{ border: "1px solid rgba(58,125,86,0.2)", color: "#3a7d56", background: "rgba(58,125,86,0.04)" }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(58,125,86,0.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(58,125,86,0.04)"; }}
        >
          <CheckCircle2 size={16} /> Mark Today&apos;s Devotional Complete
        </button>
      ) : (
        <div className="w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
          style={{ background: "rgba(58,125,86,0.1)", border: "1px solid rgba(58,125,86,0.25)", color: "#3a7d56" }}>
          <CheckCircle2 size={16} /> Day {dayIndex + 1} Complete — Streak +1! 🔥
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setDayIndex(i => Math.max(0, i - 1))}
          disabled={dayIndex === 0}
          className="btn-outline-gold flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
          style={{ opacity: dayIndex === 0 ? 0.4 : 1, cursor: dayIndex === 0 ? "not-allowed" : "pointer" }}
        >
          <ChevronLeft size={16} /> Previous Day
        </button>
        <span className="text-xs font-semibold" style={{ color: "#4A4A68" }}>Day {dayIndex + 1} of 7</span>
        <button
          onClick={() => setDayIndex(i => Math.min(days.length - 1, i + 1))}
          disabled={dayIndex === days.length - 1}
          className="btn-gold flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold"
          style={{ opacity: dayIndex === days.length - 1 ? 0.4 : 1, cursor: dayIndex === days.length - 1 ? "not-allowed" : "pointer" }}
        >
          Next Day <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
