"use client";

import { Zap, Heart, DollarSign, Baby, Briefcase, TrendingUp, Moon, Coffee } from "lucide-react";

const lifehacks = [
  {
    icon: Coffee,
    color: "#E8A020",
    title: "Morning Routines That Actually Stick",
    hack: "Replace your phone alarm with a physical alarm. Your first screen-free 30 minutes set the tone for your entire day.",
    verse: "Psalm 5:3",
    verseText: "In the morning, Lord, you hear my voice.",
  },
  {
    icon: DollarSign,
    color: "#3A9E72",
    title: "The 10-10-80 Money Method",
    hack: "Tithe 10%, save 10%, live on 80%. Simple, biblical, and battle-tested by millions. Start even when it's scary.",
    verse: "Proverbs 3:9",
    verseText: "Honor the Lord with your wealth.",
  },
  {
    icon: Heart,
    color: "#C0506A",
    title: "Conflict Resolution in 3 Steps",
    hack: "Listen fully before responding, find the truth in their perspective, speak only to reconcile — not to win.",
    verse: "Matthew 18:15",
    verseText: "Go and tell him his fault, between you and him alone.",
  },
  {
    icon: Moon,
    color: "#6B4FBB",
    title: "The Sabbath Productivity Reset",
    hack: "One full day of rest per week isn't a luxury — it's a divine design feature. Try it for one month and track your output.",
    verse: "Exodus 20:8",
    verseText: "Remember the Sabbath day, to keep it holy.",
  },
  {
    icon: Baby,
    color: "#4A80D4",
    title: "Parenting Through Questions, Not Commands",
    hack: "Ask \"What do you think Jesus would do?\" before answering for them. You're raising discernment, not compliance.",
    verse: "Proverbs 22:6",
    verseText: "Train up a child in the way he should go.",
  },
  {
    icon: Briefcase,
    color: "#D4AF37",
    title: "Work as Worship",
    hack: "Before each task, ask: 'Can I do this excellently, as unto the Lord?' It transforms your motivation and your output.",
    verse: "Colossians 3:23",
    verseText: "Work heartily, as for the Lord and not for men.",
  },
];

export default function LifeFaith() {
  return (
    <section className="py-24 relative overflow-hidden" id="life-faith">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(212,175,55,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="tag-pill inline-block mb-4">Life + Faith</p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4"
            style={{ color: "#F2F2F8" }}
          >
            Biblical Wisdom.
            <br />
            <span className="gold-gradient">Practical Life.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#8A8AA8" }}>
            Faith isn&apos;t just for Sunday. Vine brings biblical wisdom into money,
            relationships, sleep, work, parenting, and every corner of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {lifehacks.map(({ icon: Icon, color, title, hack, verse, verseText }) => (
            <div
              key={title}
              className="card-glow p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
              style={{ background: "var(--bg-card)" }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${color}18`,
                  border: `1px solid ${color}30`,
                }}
              >
                <Icon size={20} style={{ color }} />
              </div>

              {/* Hack label */}
              <div className="flex items-center gap-1.5 mb-2">
                <Zap size={11} style={{ color }} />
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color }}
                >
                  Life Hack
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-bold text-base mb-3 group-hover:text-white transition-colors leading-snug"
                style={{ color: "#E0E0F0" }}
              >
                {title}
              </h3>

              {/* Hack text */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#6A6A88" }}>
                {hack}
              </p>

              {/* Verse anchor */}
              <div
                className="flex items-start gap-2 p-3 rounded-xl"
                style={{
                  background: `${color}08`,
                  border: `1px solid ${color}15`,
                }}
              >
                <span className="text-xs font-bold shrink-0" style={{ color }}>
                  {verse}
                </span>
                <span className="text-xs italic" style={{ color: "#6A6A88" }}>
                  &ldquo;{verseText}&rdquo;
                </span>
              </div>

              {/* Hover bottom bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="btn-outline-gold px-8 py-3 rounded-xl text-sm font-semibold">
            Browse All Life Hacks
          </button>
        </div>
      </div>
    </section>
  );
}
