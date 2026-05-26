"use client";

import { BookOpen, Heart, Share2, Bookmark, ChevronRight } from "lucide-react";

const verse = {
  text: "I can do all things through Christ who strengthens me.",
  reference: "Philippians 4:13",
  translation: "NKJV",
};

const devotionals = [
  {
    title: "Finding Peace in the Storm",
    excerpt:
      "When anxiety overwhelms us, Scripture offers not just comfort but a practical path back to peace. Today we explore what it means to cast our cares...",
    author: "Pastor David Chen",
    readTime: "4 min read",
    likes: 847,
    saves: 312,
  },
  {
    title: "The Power of Community in Hard Times",
    excerpt:
      "God did not design us to walk alone. From the earliest days of the Church, believers have carried each other's burdens. Here's how to lean in...",
    author: "Sarah Mwangi",
    readTime: "6 min read",
    likes: 1204,
    saves: 589,
  },
  {
    title: "What Forgiveness Actually Costs",
    excerpt:
      "We talk about forgiveness as if it were free. It isn't. It costs something real — and that's exactly why it's so powerful when we choose it.",
    author: "Dr. James Okafor",
    readTime: "5 min read",
    likes: 2103,
    saves: 917,
  },
];

export default function DailyBread() {
  return (
    <section className="py-24" id="daily-bread">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Verse of the Day */}
          <div>
            <p className="tag-pill inline-block mb-6">Daily Bread</p>
            <h2
              className="text-4xl sm:text-5xl font-black leading-tight mb-8"
              style={{ color: "#F2F2F8" }}
            >
              Start Every Day<br />
              <span className="gold-gradient">In the Word</span>
            </h2>

            {/* Verse Card */}
            <div className="verse-card rounded-3xl p-8 mb-6 relative overflow-hidden">
              {/* Decorative quote marks */}
              <div
                className="absolute top-4 right-6 text-8xl font-black leading-none pointer-events-none select-none"
                style={{ color: "rgba(0,255,136,0.06)", fontFamily: "serif" }}
              >
                &ldquo;
              </div>

              <div className="flex items-center gap-2 mb-6">
                <BookOpen size={16} style={{ color: "#00FF88" }} />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#00FF88" }}
                >
                  Verse of the Day
                </span>
              </div>

              <blockquote
                className="text-2xl font-bold leading-relaxed mb-6 relative z-10"
                style={{ color: "#F2F2F8" }}
              >
                &ldquo;{verse.text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="text-base font-semibold"
                    style={{ color: "#00FF88" }}
                  >
                    {verse.reference}
                  </p>
                  <p className="text-xs" style={{ color: "#6A6A88" }}>
                    {verse.translation}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className="p-2 rounded-lg transition-colors"
                    style={{
                      color: "#6A6A88",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <Heart size={16} />
                  </button>
                  <button
                    className="p-2 rounded-lg transition-colors"
                    style={{
                      color: "#6A6A88",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <Bookmark size={16} />
                  </button>
                  <button
                    className="p-2 rounded-lg transition-colors"
                    style={{
                      color: "#6A6A88",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Bible search prompt */}
            <div
              className="flex items-center gap-3 p-4 rounded-2xl cursor-pointer group"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <BookOpen size={18} style={{ color: "#00FF88" }} />
              <span style={{ color: "#6A6A88" }} className="text-sm flex-1">
                Search any verse, chapter, or topic...
              </span>
              <ChevronRight
                size={16}
                style={{ color: "#00FF88" }}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>

          {/* Right: Devotionals */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold" style={{ color: "#F2F2F8" }}>
                Today&apos;s Devotionals
              </h3>
              <a
                href="#"
                className="text-sm font-semibold flex items-center gap-1"
                style={{ color: "#00FF88" }}
              >
                View All <ChevronRight size={14} />
              </a>
            </div>

            <div className="space-y-4">
              {devotionals.map((d, i) => (
                <div
                  key={i}
                  className="card-glow p-5 rounded-2xl cursor-pointer group"
                  style={{ background: "var(--bg-card)" }}
                >
                  <h4
                    className="font-bold mb-2 group-hover:text-white transition-colors"
                    style={{ color: "#E0E0F0" }}
                  >
                    {d.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed mb-3 line-clamp-2"
                    style={{ color: "#6A6A88" }}
                  >
                    {d.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          background:
                            "linear-gradient(135deg, #00FF88, #6B4FBB)",
                          color: "#fff",
                        }}
                      >
                        {d.author[0]}
                      </div>
                      <span style={{ color: "#6A6A88" }}>{d.author}</span>
                      <span style={{ color: "#3A3A56" }}>·</span>
                      <span style={{ color: "#6A6A88" }}>{d.readTime}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="flex items-center gap-1"
                        style={{ color: "#6A6A88" }}
                      >
                        <Heart size={11} />
                        {d.likes.toLocaleString()}
                      </span>
                      <span
                        className="flex items-center gap-1"
                        style={{ color: "#6A6A88" }}
                      >
                        <Bookmark size={11} />
                        {d.saves}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
