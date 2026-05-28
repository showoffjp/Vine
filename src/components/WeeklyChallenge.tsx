"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Flame, Users, ArrowRight, Trophy, BookOpen, Star } from "lucide-react";

const mainChallenge = {
  title: "7 Days of Intentional Prayer",
  description:
    "Transform your prayer life in one week. Each day focuses on a different dimension of prayer — adoration, confession, gratitude, intercession, and more.",
  totalDays: 7,
  completedDays: 3,
  participants: "14,280",
  tag: "Prayer",
};

const days = [
  { day: 1, task: "Adoration Only", desc: "Spend 15 min praising God for who He is — nothing else." },
  { day: 2, task: "Confession & Repentance", desc: "A quiet, honest hour of examining your heart before God." },
  { day: 3, task: "Gratitude Journal", desc: "Write 20 things you are thankful for. Pray over each one." },
  { day: 4, task: "Intercession for Others", desc: "Pray specifically for 5 people in your life by name." },
  { day: 5, task: "Listening Prayer", desc: "Sit in silence for 20 minutes. Just listen." },
  { day: 6, task: "Scripture-Led Prayer", desc: "Pray through Psalm 91 line by line." },
  { day: 7, task: "Corporate Prayer", desc: "Join or lead a prayer group — online or in person." },
];

const otherChallenges = [
  {
    icon: <BookOpen size={20} />,
    title: "30-Day Scripture Memory",
    description: "One verse per day. Transform your mind with God's Word.",
    participants: "8,940",
    color: "#2E7D52",
    accentBg: "rgba(46,125,82,0.12)",
    accentBorder: "rgba(46,125,82,0.3)",
  },
  {
    icon: <Star size={20} />,
    title: "21-Day Gratitude Journal",
    description: "Daily written gratitude rewires your heart toward joy.",
    participants: "22,113",
    color: "#00FF88",
    accentBg: "rgba(0,255,136,0.12)",
    accentBorder: "rgba(0,255,136,0.3)",
  },
  {
    icon: <Trophy size={20} />,
    title: "14-Day Fasting Guide",
    description: "A structured approach to fasting with daily devotionals.",
    participants: "5,672",
    color: "#6B4FBB",
    accentBg: "rgba(107,79,187,0.12)",
    accentBorder: "rgba(107,79,187,0.3)",
  },
];

export default function WeeklyChallenge() {
  const [joined, setJoined] = useState<Record<string, boolean>>({});

  return (
    <section
      style={{
        background: "#07070F",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,136,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <Flame size={16} style={{ color: "#00FF88" }} />
            <span
              style={{
                color: "#00FF88",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Spiritual Growth
            </span>
          </div>
          <h2
            style={{
              color: "#F2F2F8",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              fontWeight: 900,
              margin: 0,
            }}
          >
            This Week&apos;s <span className="gold-gradient">Challenge</span>
          </h2>
        </div>

        {/* Featured challenge card */}
        <div
          style={{
            background: "#12121F",
            borderRadius: "24px",
            padding: "40px 44px",
            border: "1px solid rgba(0,255,136,0.18)",
            boxShadow: "0 0 60px rgba(0,255,136,0.05)",
            marginBottom: "32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background decoration */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  background: "rgba(0,255,136,0.1)",
                  border: "1px solid rgba(0,255,136,0.25)",
                  color: "#00FF88",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                <Flame size={11} />
                Featured This Week
              </div>
              <h3
                style={{
                  color: "#F2F2F8",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
                  fontWeight: 900,
                  marginBottom: "12px",
                }}
              >
                {mainChallenge.title}
              </h3>
              <p
                style={{
                  color: "#8A8AA8",
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  maxWidth: "520px",
                  marginBottom: "16px",
                }}
              >
                {mainChallenge.description}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#8A8AA8",
                  fontSize: "0.8rem",
                }}
              >
                <Users size={14} />
                <strong style={{ color: "#00FF88" }}>
                  {mainChallenge.participants}
                </strong>{" "}
                participants joined
              </div>
            </div>

            {/* Progress circle */}
            <div style={{ textAlign: "center", flexShrink: 0 }}>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: `conic-gradient(#00FF88 ${(mainChallenge.completedDays / mainChallenge.totalDays) * 360}deg, rgba(0,255,136,0.1) 0deg)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 10px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "78px",
                    height: "78px",
                    borderRadius: "50%",
                    background: "#12121F",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#00FF88",
                      fontWeight: 900,
                      fontSize: "1.5rem",
                      lineHeight: 1,
                    }}
                  >
                    {mainChallenge.completedDays}
                  </span>
                  <span style={{ color: "#6A6A88", fontSize: "0.65rem" }}>
                    of {mainChallenge.totalDays}
                  </span>
                </div>
              </div>
              <p
                style={{
                  color: "#8A8AA8",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                Days Complete
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginBottom: "28px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <span style={{ color: "#8A8AA8", fontSize: "0.75rem" }}>
                Progress
              </span>
              <span style={{ color: "#00FF88", fontSize: "0.75rem", fontWeight: 700 }}>
                {Math.round(
                  (mainChallenge.completedDays / mainChallenge.totalDays) * 100
                )}
                % complete
              </span>
            </div>
            <div
              style={{
                height: "8px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.06)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${(mainChallenge.completedDays / mainChallenge.totalDays) * 100}%`,
                  borderRadius: "999px",
                  background:
                    "linear-gradient(90deg, #00CC66 0%, #44FFAA 100%)",
                  transition: "width 0.6s ease",
                }}
              />
            </div>
          </div>

          {/* Day cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "10px",
            }}
          >
            {days.map((d) => {
              const complete = d.day <= mainChallenge.completedDays;
              return (
                <div
                  key={d.day}
                  title={d.desc}
                  style={{
                    background: complete
                      ? "rgba(0,255,136,0.08)"
                      : "rgba(255,255,255,0.02)",
                    border: complete
                      ? "1px solid rgba(0,255,136,0.3)"
                      : "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "12px",
                    padding: "12px 8px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ marginBottom: "6px" }}>
                    {complete ? (
                      <CheckCircle2
                        size={20}
                        style={{ color: "#00FF88", margin: "0 auto" }}
                      />
                    ) : (
                      <Circle
                        size={20}
                        style={{ color: "#3A3A55", margin: "0 auto" }}
                      />
                    )}
                  </div>
                  <p
                    style={{
                      color: "#00FF88",
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    Day {d.day}
                  </p>
                  <p
                    style={{
                      color: complete ? "#D4D4E8" : "#6A6A88",
                      fontSize: "0.62rem",
                      lineHeight: 1.4,
                      fontWeight: complete ? 600 : 400,
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
            color: "#F2F2F8",
            fontSize: "1.2rem",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          More Challenges to Join
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {otherChallenges.map((ch) => {
            const isJoined = joined[ch.title];
            return (
              <div
                key={ch.title}
                className="card-glow"
                style={{
                  background: "#12121F",
                  borderRadius: "16px",
                  padding: "24px",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: ch.accentBg,
                    border: `1px solid ${ch.accentBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: ch.color,
                    marginBottom: "16px",
                  }}
                >
                  {ch.icon}
                </div>

                <h4
                  style={{
                    color: "#F2F2F8",
                    fontSize: "1rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  {ch.title}
                </h4>
                <p
                  style={{
                    color: "#8A8AA8",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                    marginBottom: "16px",
                  }}
                >
                  {ch.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      color: "#6A6A88",
                      fontSize: "0.75rem",
                    }}
                  >
                    <Users size={12} />
                    <span style={{ color: ch.color, fontWeight: 700 }}>
                      {ch.participants}
                    </span>{" "}
                    joined
                  </div>
                  <button
                    onClick={() =>
                      setJoined((prev) => ({ ...prev, [ch.title]: !prev[ch.title] }))
                    }
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 18px",
                      borderRadius: "10px",
                      background: isJoined
                        ? `${ch.accentBg}`
                        : "transparent",
                      border: `1px solid ${ch.accentBorder}`,
                      color: ch.color,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {isJoined ? (
                      <>
                        <CheckCircle2 size={13} />
                        Joined
                      </>
                    ) : (
                      <>
                        Join Challenge
                        <ArrowRight size={13} />
                      </>
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
