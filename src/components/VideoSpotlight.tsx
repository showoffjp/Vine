"use client";

import Link from "next/link";
import { Play, Eye, Clock, ArrowRight } from "lucide-react";

const FEATURED = {
  youtubeId: "4Eg_di-O8nM",
  title: "Nothing Is Wasted — Steven Furtick",
  channel: "Elevation Church",
  views: "3.2M views",
  duration: "46:12",
  tag: "Sermon",
};

const VIDEOS = [
  {
    youtubeId: "nQWFzMvCfLE",
    title: "What A Beautiful Name",
    channel: "Hillsong Worship",
    views: "248M views",
    duration: "5:41",
    tag: "Worship",
  },
  {
    youtubeId: "7_CGP-12AE0",
    title: "The Story of the Bible",
    channel: "BibleProject",
    views: "5.4M views",
    duration: "5:27",
    tag: "Teaching",
  },
  {
    youtubeId: "sIaT8Jl2zpI",
    title: "You Say (Official Music Video)",
    channel: "Lauren Daigle",
    views: "180M views",
    duration: "3:44",
    tag: "Worship",
  },
  {
    youtubeId: "G-2e9mMf7E8",
    title: "Gospel of John — Overview",
    channel: "BibleProject",
    views: "2.9M views",
    duration: "9:15",
    tag: "Teaching",
  },
];

const TAG_COLORS: Record<string, string> = {
  Sermon: "#6B4FBB",
  Worship: "#3a7d56",
  Teaching: "#3B82F6",
  Testimony: "#EC4899",
  Devotional: "#F59E0B",
};

function TagPill({ tag }: { tag: string }) {
  const color = TAG_COLORS[tag] ?? "#6B4FBB";
  return (
    <span
      style={{
        padding: "3px 10px",
        borderRadius: 2,
        fontSize: "0.62rem",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase" as const,
        background: `${color}25`,
        color,
        border: `0.5px solid ${color}50`,
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
          <Link
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
          </Link>
        </div>

        {/* Featured video */}
        <a
          href={`https://www.youtube.com/watch?v=${FEATURED.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            background: "#050e07",
            border: "0.5px solid rgba(201,162,39,0.18)",
            borderRadius: 3,
            overflow: "hidden",
            marginBottom: "1.2rem",
            cursor: "pointer",
            transition: "border-color 0.2s",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.18)";
          }}
        >
          <div style={{ position: "relative", paddingTop: "40%", background: "linear-gradient(135deg, #0a1a0e 0%, #061008 100%)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${FEATURED.youtubeId}/maxresdefault.jpg`}
              alt={FEATURED.title}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(5,14,7,0.92) 0%, rgba(5,14,7,0.2) 50%, transparent 100%)",
              }}
            />
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
                  background: "rgba(201,162,39,0.15)",
                  border: "1.5px solid rgba(201,162,39,0.6)",
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
        </a>

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
            <a
              key={v.youtubeId}
              href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "#050e07",
                border: "0.5px solid rgba(201,162,39,0.13)",
                borderRadius: 3,
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.13)";
              }}
            >
              {/* Thumbnail 16:9 */}
              <div style={{ position: "relative", paddingTop: "56.25%", background: "linear-gradient(135deg, #0a1a0e 0%, #061008 100%)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`}
                  alt={v.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(5,14,7,0.6) 0%, transparent 60%)",
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
                      background: "rgba(201,162,39,0.15)",
                      border: "1px solid rgba(201,162,39,0.5)",
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
            </a>
          ))}
        </div>

        {/* Browse CTA */}
        <div style={{ textAlign: "center", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
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
            Browse All 100+ Videos <ArrowRight size={14} />
          </Link>
          <Link
            href="/video"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "0.9rem 2rem",
              background: "rgba(58,125,86,0.08)",
              border: "0.5px solid rgba(58,125,86,0.25)",
              borderRadius: 2,
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#52a876",
              textDecoration: "none",
            }}
          >
            <Play size={13} style={{ fill: "#52a876" }} />
            Worship Radio
          </Link>
        </div>
      </div>
    </section>
  );
}
