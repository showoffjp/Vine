"use client";

import { Coffee, DollarSign, Heart, Moon, Baby, Briefcase } from "lucide-react";

const HACKS = [
  {
    icon: Coffee,
    title: "Morning Routines That Actually Stick",
    hack: "Replace your phone alarm with a physical alarm. Your first screen-free 30 minutes set the tone for your entire day.",
    verse: "Psalm 5:3",
    verseText: "In the morning, Lord, you hear my voice.",
  },
  {
    icon: DollarSign,
    title: "The 10-10-80 Money Method",
    hack: "Tithe 10%, save 10%, live on 80%. Simple, biblical, and battle-tested by millions. Start even when it feels scary.",
    verse: "Proverbs 3:9",
    verseText: "Honor the Lord with your wealth.",
  },
  {
    icon: Heart,
    title: "Conflict Resolution in 3 Steps",
    hack: "Listen fully before responding, find the truth in their perspective, speak only to reconcile — not to win.",
    verse: "Matthew 18:15",
    verseText: "Go and tell him his fault, between you and him alone.",
  },
  {
    icon: Moon,
    title: "The Sabbath Productivity Reset",
    hack: "One full day of rest per week is not a luxury — it is a divine design feature. Try it for one month and track your output.",
    verse: "Exodus 20:8",
    verseText: "Remember the Sabbath day, to keep it holy.",
  },
  {
    icon: Baby,
    title: "Parenting Through Questions",
    hack: "Ask \"What do you think Jesus would do?\" before answering for them. You are raising discernment, not compliance.",
    verse: "Proverbs 22:6",
    verseText: "Train up a child in the way he should go.",
  },
  {
    icon: Briefcase,
    title: "Work as Worship",
    hack: "Before each task, ask: can I do this excellently, as unto the Lord? It transforms your motivation and your output.",
    verse: "Colossians 3:23",
    verseText: "Work heartily, as for the Lord and not for men.",
  },
];

export default function LifeFaith() {
  return (
    <section
      style={{
        background: "#0a1a0e",
        padding: "100px 4vw",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        position: "relative",
        overflow: "hidden",
      }}
      id="life-faith"
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "-5%",
          width: 500,
          height: 500,
          background: "radial-gradient(ellipse, rgba(58,125,86,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
            Life + Faith
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              fontWeight: 300,
              color: "#f2e6c8",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Biblical wisdom.
            <br />
            <em style={{ fontStyle: "italic", color: "#e8c162" }}>Practical life.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.95rem",
              color: "#9a8f72",
              fontWeight: 300,
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Faith is not just for Sunday. The Vine brings biblical wisdom into money,
            relationships, sleep, work, parenting, and every corner of life.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            background: "rgba(201,162,39,0.04)",
            marginBottom: "2.5rem",
          }}
        >
          {HACKS.map(({ icon: Icon, title, hack, verse, verseText }) => (
            <div
              key={title}
              style={{
                background: "#0a1a0e",
                padding: "2rem",
                cursor: "pointer",
                position: "relative",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#0f2318";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#0a1a0e";
              }}
            >
              {/* Top rule */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "2rem",
                  right: "2rem",
                  height: "0.5px",
                  background: "rgba(201,162,39,0.07)",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  background: "rgba(201,162,39,0.08)",
                  border: "0.5px solid rgba(201,162,39,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Icon size={18} style={{ color: "#c9a227" }} />
              </div>

              {/* Label */}
              <div
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#c9a227",
                  marginBottom: "0.5rem",
                }}
              >
                Life Hack
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#f2e6c8",
                  lineHeight: 1.3,
                  marginBottom: "0.7rem",
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.83rem",
                  color: "#9a8f72",
                  lineHeight: 1.65,
                  fontWeight: 300,
                  marginBottom: "1rem",
                }}
              >
                {hack}
              </p>

              {/* Verse anchor */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "0.7rem 0.9rem",
                  background: "rgba(201,162,39,0.06)",
                  border: "0.5px solid rgba(201,162,39,0.15)",
                  borderRadius: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#c9a227",
                    flexShrink: 0,
                  }}
                >
                  {verse}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                    fontStyle: "italic",
                    fontSize: "0.88rem",
                    color: "#9a8f72",
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;{verseText}&rdquo;
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="/resources"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "0.9rem 2.2rem",
              border: "0.5px solid rgba(201,162,39,0.25)",
              borderRadius: 2,
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c9b98a",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.5)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#e8c162";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.25)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#c9b98a";
            }}
          >
            Browse All Life Guides
          </a>
        </div>
      </div>
    </section>
  );
}
