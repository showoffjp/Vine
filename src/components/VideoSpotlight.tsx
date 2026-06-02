"use client";

import { Play, Eye, Clock, ArrowRight } from "lucide-react";

const FEATURED = {
  title: "When God Feels Silent: Trusting Him in the Dark Seasons",
  channel: "Pastor David Okafor",
  views: "142K views",
  duration: "48:22",
  tag: "Sermon",
};

const VIDEOS = [
  {
    title: "From Addiction to Grace: My Testimony",
    channel: "Grace & Truth Ministry",
    views: "38K views",
    duration: "22:14",
    tag: "Testimony",
  },
  {
    title: "Sunday Worship: Enter His Courts with Praise",
    channel: "Hillside Worship Collective",
    views: "91K views",
    duration: "35:08",
    tag: "Worship",
  },
  {
    title: "5-Minute Morning Devotional: Psalm 23",
    channel: "The Daily Vine",
    views: "27K views",
    duration: "5:03",
    tag: "Devotional",
  },
  {
    title: "Does Science Disprove God? Answering Atheism",
    channel: "Apologetics Academy",
    views: "55K views",
    duration: "41:50",
    tag: "Teaching",
  },
];

function TagPill({ tag }: { tag: string }) {
  return (
    <span
      style={{
        padding: "3px 10px",
        borderRadius: 2,
        fontSize: "0.62rem",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase" as const,
        background: "rgba(201,162,39,0.14)",
        color: "#c9a227",
        border: "0.5px solid rgba(201,162,39,0.3)",
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      {tag}
    </span>
  );
}

export default function VideoSpotlight() {
  return (
    <section
      style={{
        background: "#0a1a0e",
        padding: "100px 4vw",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        position: "relative",
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
          background: "radial-gradient(ellipse, rgba(58,125,86,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
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
              Featured Content
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
              Video
              <em style={{ fontStyle: "italic", color: "#e8c162" }}> Library.</em>
            </h2>
          </div>
          <a
            href="/video"
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
            Watch Now <ArrowRight size={14} />
          </a>
        </div>

        {/* Featured video */}
        <div
          style={{
            background: "#050e07",
            border: "0.5px solid rgba(201,162,39,0.18)",
            borderRadius: 3,
            overflow: "hidden",
            marginBottom: "1.2rem",
            cursor: "pointer",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,162,39,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,162,39,0.18)";
          }}
        >
          <div style={{ position: "relative", paddingTop: "40%" }}>
            {/* Thumbnail bg */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, #0f2318 0%, #1a3d26 40%, #0a1a0e 100%)",
              }}
            />
            {/* Forest texture overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(5,14,7,0.95) 0%, rgba(5,14,7,0.3) 50%, transparent 100%)",
              }}
            />
            {/* Decorative cross */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -65%)",
                opacity: 0.06,
              }}
            >
              <svg width="120" height="140" viewBox="0 0 34 34" fill="none">
                <rect x="15" y="4" width="4" height="18" rx="1.5" fill="#c9a227" />
                <rect x="8" y="10" width="18" height="4" rx="1.5" fill="#c9a227" />
              </svg>
            </div>
            {/* Play button */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  background: "rgba(201,162,39,0.12)",
                  border: "1.5px solid rgba(201,162,39,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.2s",
                }}
              >
                <Play size={26} style={{ color: "#c9a227", fill: "#c9a227", marginLeft: 4 }} />
              </div>
            </div>
            {/* Duration badge */}
            <div
              style={{
                position: "absolute",
                bottom: 14,
                right: 16,
                background: "rgba(5,14,7,0.9)",
                color: "#c9b98a",
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.72rem",
                fontWeight: 600,
                padding: "3px 8px",
                borderRadius: 1,
                border: "0.5px solid rgba(201,162,39,0.2)",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Clock size={10} />
              {FEATURED.duration}
            </div>
            {/* Content overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 18,
                left: 24,
                right: 100,
              }}
            >
              <TagPill tag={FEATURED.tag} />
              <h3
                style={{
                  fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: "clamp(1rem, 2.2vw, 1.6rem)",
                  fontWeight: 600,
                  color: "#f2e6c8",
                  marginTop: 8,
                  marginBottom: 6,
                  lineHeight: 1.3,
                }}
              >
                {FEATURED.title}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.78rem",
                  color: "#9a8f72",
                }}
              >
                <span>{FEATURED.channel}</span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Eye size={11} />
                  {FEATURED.views}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Video grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {VIDEOS.map((v) => (
            <div
              key={v.title}
              style={{
                background: "#050e07",
                border: "0.5px solid rgba(201,162,39,0.13)",
                borderRadius: 3,
                overflow: "hidden",
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
              {/* Thumbnail 16:9 */}
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, #050e07 0%, #0f2318 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(5,14,7,0.7) 0%, transparent 60%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: "rgba(201,162,39,0.12)",
                      border: "1px solid rgba(201,162,39,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Play size={14} style={{ color: "#c9a227", fill: "#c9a227", marginLeft: 2 }} />
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    background: "rgba(5,14,7,0.9)",
                    color: "#c9b98a",
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    padding: "2px 6px",
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Clock size={8} />
                  {v.duration}
                </div>
              </div>
              <div style={{ padding: "1rem 1.1rem" }}>
                <div style={{ marginBottom: 8 }}>
                  <TagPill tag={v.tag} />
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#f2e6c8",
                    lineHeight: 1.35,
                    marginBottom: 8,
                  }}
                >
                  {v.title}
                </h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.7rem",
                    color: "#9a8f72",
                  }}
                >
                  <span>{v.channel}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <Eye size={10} />
                    {v.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse CTA */}
        <div style={{ textAlign: "center", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/video"
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
              letterSpacing: "0.08em",
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
            Browse All Videos <ArrowRight size={14} />
          </a>
          <a
            href="/live"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "0.9rem 2rem",
              background: "rgba(239,68,68,0.08)",
              border: "0.5px solid rgba(239,68,68,0.25)",
              borderRadius: 2,
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#ef9999",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#ef4444",
                display: "inline-block",
                boxShadow: "0 0 6px rgba(239,68,68,0.6)",
              }}
            />
            Watch Live
          </a>
        </div>
      </div>
    </section>
  );
}
