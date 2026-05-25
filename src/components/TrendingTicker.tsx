"use client";

import { useEffect } from "react";
import { TrendingUp } from "lucide-react";

const topics = [
  "🔥 Faith & Doubt",
  "📖 Romans 8",
  "💡 Morning Routine",
  "🙏 Unanswered Prayer",
  "💚 Anxiety & Faith",
  "⚡ Sabbath Productivity",
  "👨‍👩‍👧 Christian Parenting",
  "🎵 Worship Playlists",
  "💰 Biblical Finance",
  "🌍 Global Church",
  "🏆 Apologetics",
  "❤️ Forgiveness",
  "✝️ Holy Spirit",
  "🌅 Daily Devotional",
  "🤝 Community Life",
];

export default function TrendingTicker() {
  useEffect(() => {
    const styleId = "trending-ticker-keyframes";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker-scroll 40s linear infinite;
          display: flex;
          width: max-content;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Duplicate for seamless loop
  const doubled = [...topics, ...topics];

  return (
    <div
      style={{
        background: "rgba(12,12,20,0.95)",
        borderTop: "1px solid rgba(212,175,55,0.12)",
        borderBottom: "1px solid rgba(212,175,55,0.12)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="flex items-center">
        {/* TRENDING badge — pinned left */}
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "10px 18px",
            background: "linear-gradient(135deg, #C9A227 0%, #E8C840 100%)",
            color: "#07070F",
            fontWeight: 800,
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            zIndex: 10,
            position: "relative",
          }}
        >
          <TrendingUp size={12} />
          Trending
        </div>

        {/* Fade-out mask on left edge */}
        <div
          style={{
            position: "absolute",
            left: "96px",
            top: 0,
            bottom: 0,
            width: "40px",
            background:
              "linear-gradient(to right, rgba(12,12,20,0.95), transparent)",
            zIndex: 5,
            pointerEvents: "none",
          }}
        />

        {/* Scrolling area */}
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div className="ticker-track" style={{ padding: "10px 0" }}>
            {doubled.map((topic, i) => (
              <button
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginRight: "12px",
                  padding: "4px 14px",
                  borderRadius: "999px",
                  background: "rgba(212,175,55,0.07)",
                  border: "1px solid rgba(212,175,55,0.18)",
                  color: "#D4AF37",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  transition: "background 0.2s, border-color 0.2s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(212,175,55,0.15)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(212,175,55,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(212,175,55,0.07)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(212,175,55,0.18)";
                }}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Fade-out mask on right edge */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "60px",
            background:
              "linear-gradient(to left, rgba(12,12,20,0.95), transparent)",
            zIndex: 5,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
