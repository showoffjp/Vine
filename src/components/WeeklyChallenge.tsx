"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Users, ArrowRight, BookOpen, Star, Trophy } from "lucide-react";

const MAIN = {
  title: "7 Days of Intentional Prayer",
  description:
    "Transform your prayer life in one week. Each day focuses on a different dimension of prayer — adoration, confession, gratitude, intercession, and more.",
  totalDays: 7,
  completedDays: 3,
  participants: "14,280",
};

const DAYS = [
  { day: 1, task: "Adoration Only", desc: "Spend 15 min praising God for who He is — nothing else." },
  { day: 2, task: "Confession", desc: "A quiet, honest hour examining your heart before God." },
  { day: 3, task: "Gratitude", desc: "Write 20 things you are thankful for. Pray over each one." },
  { day: 4, task: "Intercession", desc: "Pray specifically for 5 people in your life by name." },
  { day: 5, task: "Listening", desc: "Sit in silence for 20 minutes. Just listen." },
  { day: 6, task: "Scripture", desc: "Pray through Psalm 91 line by line." },
  { day: 7, task: "Corporate", desc: "Join or lead a prayer group — online or in person." },
];

const OTHER = [
  {
    icon: BookOpen,
    title: "30-Day Scripture Memory",
    description: "One verse per day. Transform your mind with God's Word.",
    participants: "8,940",
  },
  {
    icon: Star,
    title: "21-Day Gratitude Journal",
    description: "Daily written gratitude rewires your heart toward joy.",
    participants: "22,113",
  },
  {
    icon: Trophy,
    title: "14-Day Fasting Guide",
    description: "A structured approach to fasting with daily devotionals.",
    participants: "5,672",
  },
];

export default function WeeklyChallenge() {
  const [joined, setJoined] = useState<Record<string, boolean>>({});

  return (
    <section
      style={{
        background: "#050e07",
        padding: "100px 4vw",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          background: "radial-gradient(ellipse, rgba(58,125,86,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
            Spiritual Growth
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              fontWeight: 300,
              color: "#f2e6c8",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            This week&apos;s
            <em style={{ fontStyle: "italic", color: "#e8c162" }}> Challenge.</em>
          </h2>
        </div>

        {/* Featured challenge */}
        <div
          style={{
            background: "#0f2318",
            border: "0.5px solid rgba(201,162,39,0.22)",
            borderRadius: 3,
            padding: "2.5rem",
            marginBottom: "2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(201,162,39,0.05) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 24,
              marginBottom: "2rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 12px",
                  borderRadius: 2,
                  background: "rgba(201,162,39,0.1)",
                  border: "0.5px solid rgba(201,162,39,0.3)",
                  color: "#c9a227",
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Featured This Week
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                  fontWeight: 600,
                  color: "#f2e6c8",
                  marginBottom: "0.7rem",
                }}
              >
                {MAIN.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.88rem",
                  color: "#9a8f72",
                  lineHeight: 1.65,
                  fontWeight: 300,
                  maxWidth: 520,
                  marginBottom: "1rem",
                }}
              >
                {MAIN.description}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.8rem",
                  color: "#9a8f72",
                }}
              >
                <Users size={13} />
                <strong style={{ color: "#c9a227" }}>{MAIN.participants}</strong> participants joined
              </div>
            </div>

            {/* Progress circle */}
            <div style={{ textAlign: "center", flexShrink: 0 }}>
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background: `conic-gradient(#c9a227 ${(MAIN.completedDays / MAIN.totalDays) * 360}deg, rgba(201,162,39,0.1) 0deg)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 8px",
                }}
              >
                <div
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    background: "#0f2318",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant, Georgia, serif)",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: "#c9a227",
                      lineHeight: 1,
                    }}
                  >
                    {MAIN.completedDays}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.6rem",
                      color: "#9a8f72",
                    }}
                  >
                    of {MAIN.totalDays}
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  color: "#9a8f72",
                  letterSpacing: "0.06em",
                }}
              >
                Days Complete
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.72rem",
                  color: "#9a8f72",
                }}
              >
                Progress
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#c9a227",
                }}
              >
                {Math.round((MAIN.completedDays / MAIN.totalDays) * 100)}% complete
              </span>
            </div>
            <div
              style={{
                height: 4,
                borderRadius: 999,
                background: "rgba(201,162,39,0.12)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${(MAIN.completedDays / MAIN.totalDays) * 100}%`,
                  borderRadius: 999,
                  background: "linear-gradient(90deg, #c9a227 0%, #e8c162 100%)",
                }}
              />
            </div>
          </div>

          {/* Day cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>
            {DAYS.map((d) => {
              const complete = d.day <= MAIN.completedDays;
              return (
                <div
                  key={d.day}
                  title={d.desc}
                  style={{
                    background: complete ? "rgba(201,162,39,0.08)" : "rgba(201,162,39,0.02)",
                    border: complete
                      ? "0.5px solid rgba(201,162,39,0.35)"
                      : "0.5px solid rgba(201,162,39,0.1)",
                    borderRadius: 2,
                    padding: "10px 6px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ marginBottom: 5 }}>
                    {complete ? (
                      <CheckCircle2 size={18} style={{ color: "#c9a227", margin: "0 auto" }} />
                    ) : (
                      <Circle size={18} style={{ color: "rgba(201,162,39,0.25)", margin: "0 auto" }} />
                    )}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.58rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#c9a227",
                      marginBottom: 3,
                    }}
                  >
                    Day {d.day}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.6rem",
                      color: complete ? "#c9b98a" : "#9a8f72",
                      lineHeight: 1.35,
                      fontWeight: complete ? 500 : 400,
                    }}
                  >
                    {d.task}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Other challenges */}
        <h3
          style={{
            fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "1.4rem",
            fontWeight: 600,
            color: "#f2e6c8",
            marginBottom: "1.2rem",
          }}
        >
          More Challenges to Join
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            background: "rgba(201,162,39,0.04)",
          }}
        >
          {OTHER.map((ch) => {
            const isJoined = joined[ch.title];
            const Icon = ch.icon;
            return (
              <div
                key={ch.title}
                style={{
                  background: "#050e07",
                  padding: "2rem",
                  position: "relative",
                }}
              >
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
                <h4
                  style={{
                    fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#f2e6c8",
                    marginBottom: "0.5rem",
                  }}
                >
                  {ch.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.83rem",
                    color: "#9a8f72",
                    lineHeight: 1.6,
                    fontWeight: 300,
                    marginBottom: "1.2rem",
                  }}
                >
                  {ch.description}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.72rem",
                      color: "#9a8f72",
                    }}
                  >
                    <Users size={11} />
                    <strong style={{ color: "#c9a227" }}>{ch.participants}</strong> joined
                  </div>
                  <button
                    onClick={() => setJoined((prev) => ({ ...prev, [ch.title]: !prev[ch.title] }))}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 14px",
                      borderRadius: 2,
                      background: isJoined ? "rgba(201,162,39,0.1)" : "transparent",
                      border: "0.5px solid rgba(201,162,39,0.3)",
                      color: "#c9a227",
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {isJoined ? (
                      <><CheckCircle2 size={12} /> Joined</>
                    ) : (
                      <>Join Challenge <ArrowRight size={12} /></>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
