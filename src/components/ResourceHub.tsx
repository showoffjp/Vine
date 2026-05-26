"use client";

import { ChevronRight, Clock, Eye, Star } from "lucide-react";

const categories = [
  { label: "All", active: true },
  { label: "Life & Faith" },
  { label: "Mental Health" },
  { label: "Theology" },
  { label: "Relationships" },
  { label: "Parenting" },
  { label: "Finances" },
  { label: "Leadership" },
];

const featured = {
  tag: "Featured Guide",
  tagColor: "#00FF88",
  title: "The Complete Christian Guide to Mental Health",
  subtitle:
    "A comprehensive, faith-informed resource covering anxiety, depression, trauma, and inner healing — with practical steps, Scripture, and professional insights.",
  readTime: "25 min read",
  views: "184K",
  rating: 4.9,
  author: "Dr. Angela Osei & Pastor Tim Reeves",
  sections: [
    "Understanding Anxiety Through a Biblical Lens",
    "When to Seek Professional Help",
    "Prayer, Medication, or Both?",
    "Community as Therapy",
    "Practical Daily Disciplines",
  ],
};

const articles = [
  {
    tag: "Life Hack",
    tagColor: "#E8A020",
    title: "7 Biblical Principles for Financial Freedom",
    desc: "From tithing to stewardship, these time-tested biblical principles will transform your relationship with money.",
    readTime: "8 min",
    views: "42K",
  },
  {
    tag: "Relationships",
    tagColor: "#C0506A",
    title: "How to Have Hard Conversations With Grace",
    desc: "James 1:19 gives us a framework that actually works. Here's how to apply it in marriage, friendships, and the workplace.",
    readTime: "6 min",
    views: "38K",
  },
  {
    tag: "Theology",
    tagColor: "#6B4FBB",
    title: "What the Bible Actually Says About Suffering",
    desc: "A deep dive into Job, Romans 8, and the consistent thread of redemptive suffering across Scripture.",
    readTime: "12 min",
    views: "61K",
  },
  {
    tag: "Parenting",
    tagColor: "#3A9E72",
    title: "Raising Kids in a Digital Age With Christian Values",
    desc: "Practical guidelines for screen time, social media, and teaching discernment to the next generation.",
    readTime: "9 min",
    views: "29K",
  },
  {
    tag: "Leadership",
    tagColor: "#4A80D4",
    title: "Servant Leadership: Jesus' Model for the Modern Workplace",
    desc: "What does it look like to lead like Christ in a secular organization? Real examples, real challenges.",
    readTime: "7 min",
    views: "35K",
  },
  {
    tag: "Life Hack",
    tagColor: "#E8A020",
    title: "The Sabbath Principle Applied to Modern Productivity",
    desc: "Rest is not laziness. Here's the science and Scripture behind why rest makes you more productive, not less.",
    readTime: "5 min",
    views: "51K",
  },
];

export default function ResourceHub() {
  return (
    <section className="py-24 relative" id="resources">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 30%, rgba(0,255,136,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="tag-pill inline-block mb-4">Resource Library</p>
            <h2
              className="text-4xl sm:text-5xl font-black leading-tight"
              style={{ color: "#F2F2F8" }}
            >
              Deep Dives &{" "}
              <span className="gold-gradient">Life Guides</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-semibold whitespace-nowrap"
            style={{ color: "#00FF88" }}
          >
            Browse Library <ChevronRight size={14} />
          </a>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((c) => (
            <button
              key={c.label}
              className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={
                c.active
                  ? {
                      background: "#00FF88",
                      color: "#07070F",
                    }
                  : {
                      background: "rgba(255,255,255,0.04)",
                      color: "#8A8AA8",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }
              }
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div
          className="card-glow rounded-3xl p-6 sm:p-8 mb-6 cursor-pointer group relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(107,79,187,0.04) 100%)",
            border: "1px solid rgba(0,255,136,0.15)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-wider mb-3 block"
                style={{ color: featured.tagColor }}
              >
                {featured.tag}
              </span>
              <h3
                className="text-2xl sm:text-3xl font-black mb-3 leading-tight group-hover:text-white transition-colors"
                style={{ color: "#F2F2F8" }}
              >
                {featured.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#8A8AA8" }}>
                {featured.subtitle}
              </p>
              <div className="flex items-center gap-4 text-xs mb-5">
                <span
                  className="flex items-center gap-1"
                  style={{ color: "#6A6A88" }}
                >
                  <Clock size={12} /> {featured.readTime}
                </span>
                <span
                  className="flex items-center gap-1"
                  style={{ color: "#6A6A88" }}
                >
                  <Eye size={12} /> {featured.views} views
                </span>
                <span
                  className="flex items-center gap-1"
                  style={{ color: "#00FF88" }}
                >
                  <Star size={12} fill="#00FF88" /> {featured.rating}
                </span>
              </div>
              <button className="btn-gold px-5 py-2.5 rounded-xl text-sm">
                Read Full Guide
              </button>
            </div>

            <div
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(7,7,15,0.5)",
                border: "1px solid rgba(0,255,136,0.1)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#6A6A88" }}>
                In this guide:
              </p>
              <div className="space-y-2">
                {featured.sections.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="text-xs font-bold mt-0.5 w-5 shrink-0"
                      style={{ color: "#00FF88" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm" style={{ color: "#A0A0C0" }}>
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((a, i) => (
            <div
              key={i}
              className="card-glow p-5 rounded-2xl cursor-pointer group"
              style={{ background: "var(--bg-card)" }}
            >
              <span
                className="text-xs font-bold uppercase tracking-wider mb-3 block"
                style={{ color: a.tagColor }}
              >
                {a.tag}
              </span>
              <h4
                className="font-bold leading-snug mb-2 group-hover:text-white transition-colors"
                style={{ color: "#E0E0F0" }}
              >
                {a.title}
              </h4>
              <p
                className="text-sm leading-relaxed line-clamp-2 mb-4"
                style={{ color: "#6A6A88" }}
              >
                {a.desc}
              </p>
              <div className="flex items-center gap-3 text-xs" style={{ color: "#6A6A88" }}>
                <span className="flex items-center gap-1">
                  <Clock size={11} /> {a.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Eye size={11} /> {a.views}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
