"use client";

import { useState } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, Headphones, ArrowRight } from "lucide-react";

const podcasts = [
  {
    name: "The Vine Daily",
    host: "Pastor Marcus Webb",
    episodes: 312,
    latestEpisode: "When God Redirects Your Plans",
    gradient: "linear-gradient(135deg, #1a0533 0%, #4a1580 100%)",
    accentColor: "#6B4FBB",
    initials: "VD",
  },
  {
    name: "Faith & Doubt Out Loud",
    host: "Dr. Rachel Osei",
    episodes: 148,
    latestEpisode: "Is It OK to Question God?",
    gradient: "linear-gradient(135deg, #0a2010 0%, #1e5c30 100%)",
    accentColor: "#2E7D52",
    initials: "FD",
  },
  {
    name: "Biblical Finance",
    host: "James & Priya Nair",
    episodes: 95,
    latestEpisode: "The Tithe Debate: What Scripture Really Says",
    gradient: "linear-gradient(135deg, #1a1000 0%, #4a3200 100%)",
    accentColor: "#D4AF37",
    initials: "BF",
  },
  {
    name: "Christian Parenting Unlocked",
    host: "Sarah & Tom Brennan",
    episodes: 211,
    latestEpisode: "Raising Kids Who Love Jesus in a Secular World",
    gradient: "linear-gradient(135deg, #001533 0%, #003d80 100%)",
    accentColor: "#1565C0",
    initials: "CP",
  },
  {
    name: "Apologetics Today",
    host: "Prof. Emmanuel Adeyemi",
    episodes: 178,
    latestEpisode: "Responding to the Problem of Evil",
    gradient: "linear-gradient(135deg, #1a0000 0%, #4a1010 100%)",
    accentColor: "#B71C1C",
    initials: "AT",
  },
  {
    name: "The Worship Hour",
    host: "Miriam Santos",
    episodes: 264,
    latestEpisode: "Singing Through the Valley: Worship in Pain",
    gradient: "linear-gradient(135deg, #0d001a 0%, #330066 100%)",
    accentColor: "#7B2FBE",
    initials: "WH",
  },
];

const nowPlaying = {
  show: "The Vine Daily",
  episode: "When God Redirects Your Plans",
  host: "Pastor Marcus Webb",
  progress: 38,
  currentTime: "18:24",
  totalTime: "48:10",
  accentColor: "#6B4FBB",
};

export default function PodcastHub() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(nowPlaying.progress);

  return (
    <section
      style={{
        background: "#07070F",
        padding: "80px 0 0",
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
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(107,79,187,0.07) 0%, transparent 70%)",
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
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <Headphones size={16} style={{ color: "#D4AF37" }} />
              <span
                style={{
                  color: "#D4AF37",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Audio Content
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
              Podcasts &amp; <span className="gold-gradient">Audio</span>
            </h2>
          </div>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#D4AF37",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            All Podcasts <ArrowRight size={16} />
          </a>
        </div>

        {/* Podcast grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
            marginBottom: "48px",
          }}
        >
          {podcasts.map((pod) => (
            <div
              key={pod.name}
              className="card-glow"
              style={{
                background: "#12121F",
                borderRadius: "16px",
                padding: "20px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                cursor: "pointer",
              }}
            >
              {/* Artwork */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "14px",
                  background: pod.gradient,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  letterSpacing: "0.05em",
                  boxShadow: `0 4px 20px ${pod.accentColor}44`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {pod.initials}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)",
                    borderRadius: "14px",
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3
                  style={{
                    color: "#F2F2F8",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    marginBottom: "2px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {pod.name}
                </h3>
                <p
                  style={{
                    color: "#8A8AA8",
                    fontSize: "0.75rem",
                    marginBottom: "6px",
                  }}
                >
                  {pod.host} &middot; {pod.episodes} episodes
                </p>
                <p
                  style={{
                    color: "#6A6A88",
                    fontSize: "0.72rem",
                    marginBottom: "12px",
                    lineHeight: 1.4,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  Latest: {pod.latestEpisode}
                </p>
                {/* Play button */}
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    background: `${pod.accentColor}20`,
                    border: `1px solid ${pod.accentColor}50`,
                    color: pod.accentColor,
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = `${pod.accentColor}35`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = `${pod.accentColor}20`;
                  }}
                >
                  <Play size={11} style={{ fill: pod.accentColor }} />
                  Play Latest
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Now Playing bar — full width, pinned to bottom of section */}
      <div
        style={{
          background: "#0E0E1A",
          borderTop: "1px solid rgba(212,175,55,0.15)",
          padding: "16px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {/* Show artwork mini */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #1a0533 0%, #4a1580 100%)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: "0.65rem",
            }}
          >
            VD
          </div>

          {/* Info */}
          <div style={{ flex: "0 0 auto", minWidth: 0 }}>
            <p
              style={{
                color: "#F2F2F8",
                fontSize: "0.8rem",
                fontWeight: 600,
                marginBottom: "1px",
                whiteSpace: "nowrap",
              }}
            >
              {nowPlaying.episode}
            </p>
            <p style={{ color: "#8A8AA8", fontSize: "0.7rem" }}>
              {nowPlaying.show} &middot; {nowPlaying.host}
            </p>
          </div>

          {/* Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flex: "0 0 auto",
            }}
          >
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#8A8AA8",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SkipBack size={18} />
            </button>
            <button
              onClick={() => setPlaying(!playing)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #C9A227 0%, #E8C840 100%)",
                border: "none",
                color: "#07070F",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
            >
              {playing ? (
                <Pause size={18} style={{ fill: "#07070F" }} />
              ) : (
                <Play size={18} style={{ fill: "#07070F", marginLeft: "2px" }} />
              )}
            </button>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#8A8AA8",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SkipForward size={18} />
            </button>
          </div>

          {/* Progress bar */}
          <div style={{ flex: 1, minWidth: "120px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#6A6A88",
                fontSize: "0.7rem",
              }}
            >
              <span>{nowPlaying.currentTime}</span>
              <div
                style={{
                  flex: 1,
                  height: "4px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.1)",
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
                    borderRadius: "999px",
                    background:
                      "linear-gradient(90deg, #C9A227 0%, #E8C840 100%)",
                    transition: "width 0.1s",
                  }}
                />
              </div>
              <span>{nowPlaying.totalTime}</span>
            </div>
          </div>

          {/* Volume */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#8A8AA8",
              flexShrink: 0,
            }}
          >
            <Volume2 size={16} />
          </div>
        </div>
      </div>
    </section>
  );
}
