"use client";

import { useEffect, useState } from "react";

const TOPICS = [
  "Faith & Doubt",
  "Romans 8",
  "Morning Prayer",
  "Unanswered Prayer",
  "Anxiety & Scripture",
  "Sabbath Rest",
  "Christian Parenting",
  "Worship & Praise",
  "Biblical Finance",
  "Global Church",
  "Apologetics",
  "Forgiveness",
  "Holy Spirit",
  "Daily Devotional",
  "Church History",
  "Spiritual Warfare",
  "Marriage & Family",
  "Evangelism",
  "Grace & Truth",
  "Kingdom of God",
];

export default function TrendingTicker() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleTopicClick = async (topic: string, index: number) => {
    const url =
      typeof window !== "undefined"
        ? `${window.location.origin}/discussions?tag=${encodeURIComponent(topic)}`
        : `/discussions?tag=${encodeURIComponent(topic)}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: topic, url });
        return;
      }
      await navigator.clipboard.writeText(url);
    } catch {
      /* user dismissed or unsupported */
      return;
    }
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex((cur) => (cur === index ? null : cur)), 1500);
  };

  useEffect(() => {
    const styleId = "vine-ticker-keyframes";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes vine-ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .vine-ticker-track {
          animation: vine-ticker-scroll 55s linear infinite;
          display: flex;
          width: max-content;
        }
        .vine-ticker-track:hover {
          animation-play-state: paused;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const doubled = [...TOPICS, ...TOPICS];

  return (
    <div
      style={{
        background: "#050e07",
        borderTop: "0.5px solid rgba(201,162,39,0.14)",
        borderBottom: "0.5px solid rgba(201,162,39,0.14)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Badge */}
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "10px 18px",
            background: "rgba(201,162,39,0.12)",
            borderRight: "0.5px solid rgba(201,162,39,0.22)",
            color: "#c9a227",
            fontFamily: "var(--font-jost, system-ui, sans-serif)",
            fontWeight: 600,
            fontSize: "0.62rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            zIndex: 10,
          }}
        >
          <span style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", background: "#c9a227", marginRight: 2 }} />
          Trending
        </div>

        {/* Fade left edge */}
        <div
          style={{
            position: "absolute",
            left: 96,
            top: 0,
            bottom: 0,
            width: 40,
            background: "linear-gradient(to right, #050e07, transparent)",
            zIndex: 5,
            pointerEvents: "none",
          }}
        />

        {/* Scrolling track */}
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div className="vine-ticker-track" style={{ padding: "9px 0" }}>
            {doubled.map((topic, i) => (
              <button
                key={i}
                onClick={() => handleTopicClick(topic, i)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginRight: 10,
                  padding: "3px 14px",
                  borderRadius: 2,
                  background: "transparent",
                  border:
                    copiedIndex === i
                      ? "0.5px solid rgba(201,162,39,0.5)"
                      : "0.5px solid rgba(201,162,39,0.2)",
                  color: copiedIndex === i ? "#c9a227" : "#9a8f72",
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  transition: "color 0.2s, border-color 0.2s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#c9a227";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.5)";
                }}
                onMouseLeave={(e) => {
                  if (copiedIndex === i) return;
                  (e.currentTarget as HTMLButtonElement).style.color = "#9a8f72";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.2)";
                }}
              >
                {copiedIndex === i ? "Link copied!" : topic}
              </button>
            ))}
          </div>
        </div>

        {/* Fade right edge */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 60,
            background: "linear-gradient(to left, #050e07, transparent)",
            zIndex: 5,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
