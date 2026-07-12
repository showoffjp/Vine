"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Video,
  FileText,
  Mic,
  BookOpen,
  Music,
  Shield,
  Heart,
  Globe,
  PlusCircle,
  ArrowRight,
} from "lucide-react";

// Categories of voices The Vine is built to feature. These describe the kinds
// of creators we welcome -- not real profiles, follower counts, or testimonials.
const CALLINGS = [
  {
    Icon: BookOpen,
    name: "Bible Teachers & Theologians",
    tagline: "Verse-by-verse depth",
    types: ["Video", "Articles"],
    description:
      "Open the Scriptures with clarity and care -- expositional teaching that helps believers understand the text and live it.",
  },
  {
    Icon: Mic,
    name: "Preachers & Pastors",
    tagline: "Proclaim the Word",
    types: ["Video", "Podcast"],
    description:
      "Preach Christ crucified and risen. Share sermons and series that call the Church to worship, repentance, and hope.",
  },
  {
    Icon: Music,
    name: "Worship Leaders & Songwriters",
    tagline: "Lift the Name of Jesus",
    types: ["Video", "Podcast"],
    description:
      "Write and lead songs that turn hearts toward God -- worship rooted in truth for the gathered and scattered Church.",
  },
  {
    Icon: Shield,
    name: "Apologists & Authors",
    tagline: "Contend for the faith",
    types: ["Video", "Articles"],
    description:
      "Give a reason for the hope within you. Answer hard questions with gentleness, respect, and the weight of the gospel.",
  },
  {
    Icon: Heart,
    name: "Youth & Family Ministry",
    tagline: "Reach the next generation",
    types: ["Video", "Articles", "Podcast"],
    description:
      "Disciple students and families through creative storytelling, honest conversation, and Christ-centered community.",
  },
  {
    Icon: Globe,
    name: "Missionaries & Evangelists",
    tagline: "Go and make disciples",
    types: ["Video", "Podcast"],
    description:
      "Carry the good news across cultures and cities. Share the work God is doing among the nations and invite others in.",
  },
];

const TYPE_ICONS: Record<string, React.ReactNode> = {
  Video: <Video size={10} />,
  Articles: <FileText size={10} />,
  Podcast: <Mic size={10} />,
};

export default function CreatorSpotlight() {
  const [applied, setApplied] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <section
      style={{
        background: "#0a1a0e",
        padding: "100px 4vw",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-5%",
          width: 500,
          height: 500,
          background: "radial-gradient(ellipse, rgba(58,125,86,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
              For Creators
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
              Share your
              <em style={{ fontStyle: "italic", color: "#e8c162" }}> calling.</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.95rem",
                color: "#9a8f72",
                fontWeight: 300,
                marginTop: "0.8rem",
                maxWidth: 480,
                lineHeight: 1.65,
              }}
            >
              The Vine is built to feature Christ-exalting voices from across the
              global Church. Here are the kinds of creators we welcome.
            </p>
          </div>

          {/* Scroll arrows */}
          <div style={{ display: "flex", gap: 8 }}>
            {(["left", "right"] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  border: "0.5px solid rgba(201,162,39,0.3)",
                  background: "transparent",
                  color: "#c9a227",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,162,39,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }}
                aria-label={`Scroll ${dir}`}
              >
                {dir === "left" ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            paddingBottom: 12,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {CALLINGS.map((calling) => {
            const { Icon } = calling;
            return (
              <Link
                key={calling.name}
                href="/creators"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  background: "#050e07",
                  border: "0.5px solid rgba(201,162,39,0.13)",
                  borderRadius: 3,
                  padding: "1.8rem 1.5rem",
                  minWidth: 260,
                  maxWidth: 260,
                  flexShrink: 0,
                  position: "relative",
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
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "2rem",
                    right: "2rem",
                    height: "0.5px",
                    background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.4), transparent)",
                  }}
                />

                {/* Icon badge */}
                <div
                  style={{
                    width: 66,
                    height: 66,
                    borderRadius: "50%",
                    background: "rgba(201,162,39,0.1)",
                    border: "0.5px solid rgba(201,162,39,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#c9a227",
                    marginBottom: "0.9rem",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} />
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#f2e6c8",
                    marginBottom: 3,
                  }}
                >
                  {calling.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.72rem",
                    color: "#9a8f72",
                    marginBottom: 12,
                  }}
                >
                  {calling.tagline}
                </p>

                {/* Type badges */}
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "center", marginBottom: 12 }}>
                  {calling.types.map((type) => (
                    <span
                      key={type}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        padding: "2px 8px",
                        borderRadius: 1,
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        background: "rgba(201,162,39,0.08)",
                        color: "#c9a227",
                        border: "0.5px solid rgba(201,162,39,0.2)",
                        fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      }}
                    >
                      {TYPE_ICONS[type]}
                      {type}
                    </span>
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.75rem",
                    color: "#9a8f72",
                    lineHeight: 1.6,
                    fontWeight: 300,
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical" as const,
                    overflow: "hidden",
                  }}
                >
                  {calling.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Become a Creator CTA */}
        <div
          style={{
            marginTop: "2.5rem",
            background: "#0f2318",
            border: "0.5px solid rgba(201,162,39,0.2)",
            borderRadius: 3,
            padding: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "40%",
              background: "radial-gradient(ellipse 80% 80% at 100% 50%, rgba(201,162,39,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
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
              <PlusCircle size={10} />
              Open Applications
            </div>
            <h3
              style={{
                fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                fontWeight: 600,
                color: "#f2e6c8",
                marginBottom: "0.6rem",
              }}
            >
              Become a Creator on The Vine
            </h3>
            <p
              style={{
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.88rem",
                color: "#9a8f72",
                lineHeight: 1.65,
                fontWeight: 300,
                maxWidth: 520,
              }}
            >
              Whether you preach, teach, sing, or write &mdash; the global Church needs
              your voice. Help us build a home for Christ-centered creators and the
              people they serve.
            </p>
            {showMore && (
              <p
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.85rem",
                  color: "#c9b98a",
                  lineHeight: 1.65,
                  fontWeight: 300,
                  maxWidth: 520,
                  marginTop: "0.9rem",
                }}
              >
                Our vision for creators includes a profile, publishing tools for video,
                audio, and articles, and a growing audience of believers hungry for the
                Word. Tell us about your ministry and we&apos;ll be in touch as these
                tools come online.
              </p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              flexShrink: 0,
              position: "relative",
              zIndex: 1,
            }}
          >
            <button
              onClick={() => setApplied(true)}
              style={{
                padding: "0.85rem 2rem",
                borderRadius: 2,
                background: "#c9a227",
                color: "#1a0e00",
                border: "none",
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#e8c162"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#c9a227"; }}
            >
              {applied ? "Thanks -- we'll be in touch" : "Express Interest"}
            </button>
            <button
              onClick={() => setShowMore((prev) => !prev)}
              style={{
                padding: "0.75rem 2rem",
                borderRadius: 2,
                background: "transparent",
                color: "#c9b98a",
                border: "0.5px solid rgba(201,162,39,0.25)",
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.78rem",
                fontWeight: 400,
                letterSpacing: "0.06em",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
