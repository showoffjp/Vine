"use client";

import { useState } from "react";
import { Heart, Send, Clock, Users, Radio } from "lucide-react";

const tagColors: Record<string, string> = {
  Health: "#B71C1C",
  Family: "#1565C0",
  Work: "#2E7D52",
  Strength: "#6B4FBB",
  Guidance: "#00FF88",
  Anxiety: "#7B2FBE",
};

const prayers = [
  {
    id: 1,
    poster: "Sarah M.",
    initials: "SM",
    avatarColor: "#6B4FBB",
    anonymous: false,
    timeAgo: "12 min ago",
    tag: "Health",
    prayCount: 47,
    text:
      "My mother was just diagnosed with stage 2 cancer. We are trusting God through this and believing in His healing power. Please stand with us in prayer for complete healing and peace for our family during this difficult season.",
  },
  {
    id: 2,
    poster: "Anonymous",
    initials: "A",
    avatarColor: "#8A8AA8",
    anonymous: true,
    timeAgo: "28 min ago",
    tag: "Anxiety",
    prayCount: 89,
    text:
      "Struggling deeply with anxiety and depression. I know God hasn't left me, but the darkness feels overwhelming right now. Asking for prayers for peace that surpasses understanding and the strength to take one day at a time.",
  },
  {
    id: 3,
    poster: "James K.",
    initials: "JK",
    avatarColor: "#2E7D52",
    anonymous: false,
    timeAgo: "1 hr ago",
    tag: "Work",
    prayCount: 23,
    text:
      "Facing possible layoffs at my company and trying to provide for three children. Praying for God's provision and open doors. I want to trust that He who has called me is faithful.",
  },
  {
    id: 4,
    poster: "Blessing A.",
    initials: "BA",
    avatarColor: "#00FF88",
    anonymous: false,
    timeAgo: "2 hrs ago",
    tag: "Family",
    prayCount: 61,
    text:
      "My teenage son walked away from his faith six months ago and we barely speak now. I'm holding onto Proverbs 22:6 and believing God for restoration. Please intercede for reconciliation in our home.",
  },
  {
    id: 5,
    poster: "Anonymous",
    initials: "A",
    avatarColor: "#8A8AA8",
    anonymous: true,
    timeAgo: "3 hrs ago",
    tag: "Guidance",
    prayCount: 35,
    text:
      "At a major crossroads — deciding whether to leave a stable career to pursue full-time ministry. I've felt the call for years but fear keeps me paralyzed. Praying for clarity and courage to step out in faith.",
  },
];

export default function PrayerWallPreview() {
  const [prayed, setPrayed] = useState<Record<number, boolean>>({});
  const [counts, setCounts] = useState<Record<number, number>>(
    Object.fromEntries(prayers.map((p) => [p.id, p.prayCount]))
  );

  const handlePray = (id: number) => {
    setPrayed((prev) => {
      const wasPrayed = prev[id];
      setCounts((c) => ({
        ...c,
        [id]: wasPrayed ? c[id] - 1 : c[id] + 1,
      }));
      return { ...prev, [id]: !wasPrayed };
    });
  };

  return (
    <section
      style={{
        background: "#07070F",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(107,79,187,0.06) 0%, transparent 70%)",
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
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "32px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <Heart size={16} style={{ color: "#00FF88" }} />
              <span
                style={{
                  color: "#00FF88",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Community Prayer
              </span>
              {/* LIVE badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "3px 10px",
                  borderRadius: "999px",
                  background: "rgba(183,28,28,0.15)",
                  border: "1px solid rgba(183,28,28,0.4)",
                  color: "#ef5350",
                  fontSize: "0.62rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                <Radio size={9} style={{ animation: "pulse 1.5s infinite" }} />
                LIVE
              </div>
            </div>
            <h2
              style={{
                color: "#F2F2F8",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 900,
                margin: 0,
              }}
            >
              Prayer <span className="gold-gradient">Wall</span>
            </h2>
          </div>

          {/* Live counter */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#12121F",
              border: "1px solid rgba(0,255,136,0.15)",
              borderRadius: "12px",
              padding: "12px 20px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#4CAF50",
                boxShadow: "0 0 8px #4CAF50",
              }}
            />
            <span style={{ color: "#F2F2F8", fontSize: "0.9rem", fontWeight: 700 }}>
              🙏 1,247
            </span>
            <span style={{ color: "#8A8AA8", fontSize: "0.8rem" }}>
              people praying right now
            </span>
          </div>
        </div>

        {/* Prayer cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          {prayers.map((prayer) => {
            const hasPrayed = prayed[prayer.id];
            const count = counts[prayer.id];
            const tagColor = tagColors[prayer.tag] ?? "#6B4FBB";

            return (
              <div
                key={prayer.id}
                className="card-glow"
                style={{
                  background: "#12121F",
                  borderRadius: "16px",
                  padding: "22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Left accent bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: "3px",
                    background: tagColor,
                    opacity: 0.7,
                    borderRadius: "16px 0 0 16px",
                  }}
                />

                {/* Top row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    paddingLeft: "6px",
                  }}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: prayer.avatarColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "0.75rem",
                      flexShrink: 0,
                      opacity: prayer.anonymous ? 0.6 : 1,
                    }}
                  >
                    {prayer.anonymous ? "?" : prayer.initials}
                  </div>

                  {/* Name & time */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        color: prayer.anonymous ? "#8A8AA8" : "#F2F2F8",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        fontStyle: prayer.anonymous ? "italic" : "normal",
                      }}
                    >
                      {prayer.poster}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        color: "#6A6A88",
                        fontSize: "0.7rem",
                      }}
                    >
                      <Clock size={10} />
                      {prayer.timeAgo}
                    </div>
                  </div>

                  {/* Tag */}
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "999px",
                      background: `${tagColor}20`,
                      border: `1px solid ${tagColor}44`,
                      color: tagColor,
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      flexShrink: 0,
                    }}
                  >
                    {prayer.tag}
                  </span>
                </div>

                {/* Prayer text */}
                <p
                  style={{
                    color: "#D4D4E8",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    paddingLeft: "6px",
                  }}
                >
                  {prayer.text}
                </p>

                {/* Pray button + count */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: "6px",
                    paddingTop: "4px",
                    borderTop: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#6A6A88",
                      fontSize: "0.75rem",
                    }}
                  >
                    <Users size={12} />
                    <span>
                      <strong style={{ color: "#8A8AA8" }}>{count}</strong>{" "}
                      praying
                    </span>
                  </div>

                  <button
                    onClick={() => handlePray(prayer.id)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 18px",
                      borderRadius: "999px",
                      background: hasPrayed
                        ? "rgba(0,255,136,0.15)"
                        : "rgba(0,255,136,0.07)",
                      border: hasPrayed
                        ? "1px solid rgba(0,255,136,0.5)"
                        : "1px solid rgba(0,255,136,0.2)",
                      color: hasPrayed ? "#00FF88" : "#8A8AA8",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    🙏 {hasPrayed ? "Prayed" : "Pray"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Submit CTA */}
        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <button
            className="btn-gold"
            style={{
              padding: "14px 36px",
              borderRadius: "12px",
              fontSize: "0.95rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Send size={16} />
            Submit Prayer Request
          </button>
          <button
            className="btn-outline-gold"
            style={{
              padding: "14px 32px",
              borderRadius: "12px",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            View All Prayers
          </button>
        </div>
      </div>
    </section>
  );
}
