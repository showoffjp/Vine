"use client";

import { useState } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, ArrowRight, Headphones } from "lucide-react";

const PODCASTS = [
  {
    name: "The Vine Daily",
    host: "Pastor Marcus Webb",
    episodes: 312,
    latest: "When God Redirects Your Plans",
    initials: "VD",
  },
  {
    name: "Faith & Doubt Out Loud",
    host: "Dr. Rachel Osei",
    episodes: 148,
    latest: "Is It OK to Question God?",
    initials: "FD",
  },
  {
    name: "Biblical Finance",
    host: "James & Priya Nair",
    episodes: 95,
    latest: "The Tithe Debate: What Scripture Really Says",
    initials: "BF",
  },
  {
    name: "Christian Parenting Unlocked",
    host: "Sarah & Tom Brennan",
    episodes: 211,
    latest: "Raising Kids Who Love Jesus in a Secular World",
    initials: "CP",
  },
  {
    name: "Apologetics Today",
    host: "Prof. Emmanuel Adeyemi",
    episodes: 178,
    latest: "Responding to the Problem of Evil",
    initials: "AT",
  },
  {
    name: "The Worship Hour",
    host: "Miriam Santos",
    episodes: 264,
    latest: "Singing Through the Valley: Worship in Pain",
    initials: "WH",
  },
];

const NOW_PLAYING = {
  show: "The Vine Daily",
  episode: "When God Redirects Your Plans",
  host: "Pastor Marcus Webb",
  progress: 38,
  currentTime: "18:24",
  totalTime: "48:10",
};

export default function PodcastHub() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(NOW_PLAYING.progress);

  return (
    <section
      style={{
        background: "#050e07",
        paddingTop: "100px",
        paddingBottom: 0,
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 350,
          background: "radial-gradient(ellipse, rgba(58,125,86,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 4vw", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
              <Headphones size={12} style={{ display: "inline", marginRight: 6 }} />
              Audio Content
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
              Podcasts &amp;
              <em style={{ fontStyle: "italic", color: "#e8c162" }}> Audio.</em>
            </h2>
          </div>
          <a
            href="/top-christian-podcasts"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.78rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c9a227",
              textDecoration: "none",
            }}
          >
            All Podcasts <ArrowRight size={14} />
          </a>
        </div>

        {/* Podcast grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {PODCASTS.map((pod) => (
            <div
              key={pod.name}
              style={{
                background: "#0a1a0e",
                border: "0.5px solid rgba(201,162,39,0.13)",
                borderRadius: 3,
                padding: "1.2rem",
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,162,39,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,162,39,0.13)";
              }}
            >
              {/* Artwork */}
              <div
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 3,
                  background: "linear-gradient(135deg, #0f2318 0%, #1a3d26 100%)",
                  border: "0.5px solid rgba(201,162,39,0.25)",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#c9a227",
                  letterSpacing: "0.05em",
                }}
              >
                {pod.initials}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#f2e6c8",
                    marginBottom: 2,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {pod.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.72rem",
                    color: "#9a8f72",
                    marginBottom: 5,
                  }}
                >
                  {pod.host} · {pod.episodes} episodes
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.73rem",
                    color: "#9a8f72",
                    fontWeight: 300,
                    lineHeight: 1.4,
                    marginBottom: 10,
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical" as const,
                    overflow: "hidden",
                  }}
                >
                  Latest: {pod.latest}
                </p>
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "4px 12px",
                    borderRadius: 2,
                    background: "transparent",
                    border: "0.5px solid rgba(201,162,39,0.25)",
                    color: "#c9a227",
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,162,39,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  <Play size={10} style={{ fill: "#c9a227" }} />
                  Play Latest
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Now Playing bar — full width */}
      <div
        style={{
          background: "#0f2318",
          borderTop: "0.5px solid rgba(201,162,39,0.2)",
          padding: "1rem 4vw",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          {/* Mini artwork */}
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 3,
              background: "linear-gradient(135deg, #0f2318 0%, #1a3d26 100%)",
              border: "0.5px solid rgba(201,162,39,0.3)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "#c9a227",
            }}
          >
            VD
          </div>

          {/* Info */}
          <div style={{ flex: "0 0 auto", minWidth: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontWeight: 600,
                fontSize: "0.82rem",
                color: "#f2e6c8",
                whiteSpace: "nowrap",
              }}
            >
              {NOW_PLAYING.episode}
            </p>
            <p
              style={{
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.7rem",
                color: "#9a8f72",
              }}
            >
              {NOW_PLAYING.show} · {NOW_PLAYING.host}
            </p>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            {[SkipBack, null, SkipForward].map((Comp, i) =>
              Comp ? (
                <button
                  key={i}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#9a8f72",
                    cursor: "pointer",
                    padding: 4,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Comp size={16} />
                </button>
              ) : (
                <button
                  key={i}
                  onClick={() => setPlaying(!playing)}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "#c9a227",
                    border: "none",
                    color: "#1a0e00",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#e8c162";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#c9a227";
                  }}
                >
                  {playing ? (
                    <Pause size={16} style={{ fill: "#1a0e00" }} />
                  ) : (
                    <Play size={16} style={{ fill: "#1a0e00", marginLeft: 2 }} />
                  )}
                </button>
              )
            )}
          </div>

          {/* Progress */}
          <div style={{ flex: 1, minWidth: 120 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.7rem",
                color: "#9a8f72",
              }}
            >
              <span>{NOW_PLAYING.currentTime}</span>
              <div
                style={{
                  flex: 1,
                  height: 3,
                  borderRadius: 999,
                  background: "rgba(201,162,39,0.15)",
                  cursor: "pointer",
                  position: "relative",
                }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
                  setProgress(Math.max(0, Math.min(100, pct)));
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: `${progress}%`,
                    borderRadius: 999,
                    background: "linear-gradient(90deg, #c9a227 0%, #e8c162 100%)",
                    transition: "width 0.1s",
                  }}
                />
              </div>
              <span>{NOW_PLAYING.totalTime}</span>
            </div>
          </div>

          <Volume2 size={15} style={{ color: "#9a8f72", flexShrink: 0 }} />
        </div>
      </div>
    </section>
  );
}
