"use client";

import { useState } from "react";
import { BookOpen, Heart, Bookmark, Share2, Check, ChevronRight } from "lucide-react";
import VerseRef from "@/components/VerseRef";

const VERSE = {
  text: "I can do all things through Christ who strengthens me.",
  reference: "Philippians 4:13",
  translation: "NKJV",
};

const DEVOTIONALS = [
  {
    title: "Finding Peace in the Storm",
    excerpt:
      "When anxiety overwhelms us, Scripture offers not just comfort but a practical path back to peace. Today we explore what it means to cast our cares on Him, and why He actually cares for us.",
    author: "Pastor David Chen",
    readTime: "4 min read",
    likes: 847,
    saves: 312,
  },
  {
    title: "The Power of Community in Hard Times",
    excerpt:
      "God did not design us to walk alone. From the earliest days of the Church, believers have carried each other's burdens. Here is how to lean in when the weight feels unbearable.",
    author: "Sarah Mwangi",
    readTime: "6 min read",
    likes: 1204,
    saves: 589,
  },
  {
    title: "What Forgiveness Actually Costs",
    excerpt:
      "We talk about forgiveness as if it were free. It is not. It costs something real — and that is exactly why it is so powerful and so transformative when we choose it anyway.",
    author: "Dr. James Okafor",
    readTime: "5 min read",
    likes: 2103,
    saves: 917,
  },
];

export default function DailyBread() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);

  const handleShareVerse = async () => {
    const payload = `"${VERSE.text}" — ${VERSE.reference} (${VERSE.translation})`;
    try {
      if (navigator.share) await navigator.share({ text: payload });
      else await navigator.clipboard.writeText(payload);
    } catch {
      try { await navigator.clipboard.writeText(payload); } catch {}
    }
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <section
      style={{
        background: "#050e07",
        padding: "100px 4vw",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
      }}
      id="daily-bread"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
            Daily Bread
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              fontWeight: 300,
              color: "#f2e6c8",
              lineHeight: 1.15,
            }}
          >
            Start every day
            <br />
            <em style={{ fontStyle: "italic", color: "#e8c162" }}>in the Word.</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left: Verse of the Day */}
          <div>
            {/* Verse card */}
            <div
              style={{
                background: "#0f2318",
                border: "0.5px solid rgba(201,162,39,0.2)",
                borderRadius: 4,
                padding: "2.5rem",
                position: "relative",
                overflow: "hidden",
                marginBottom: "1.2rem",
              }}
            >
              {/* Decorative quote */}
              <div
                style={{
                  position: "absolute",
                  top: "0.5rem",
                  right: "1.5rem",
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "10rem",
                  lineHeight: 1,
                  color: "rgba(201,162,39,0.05)",
                  pointerEvents: "none",
                  userSelect: "none",
                  fontStyle: "italic",
                }}
              >
                &ldquo;
              </div>

              {/* Label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: "1.5rem",
                }}
              >
                <BookOpen size={14} style={{ color: "#c9a227" }} />
                <span
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#c9a227",
                  }}
                >
                  Verse of the Day
                </span>
              </div>

              <blockquote
                style={{
                  fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                  fontStyle: "italic",
                  fontSize: "1.6rem",
                  fontWeight: 300,
                  color: "#f2e6c8",
                  lineHeight: 1.5,
                  marginBottom: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                &ldquo;{VERSE.text}&rdquo;
              </blockquote>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      color: "#c9a227",
                      marginBottom: "0.1rem",
                    }}
                  >
                    <VerseRef reference={VERSE.reference} />
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.08em",
                      color: "#9a8f72",
                    }}
                  >
                    {VERSE.translation}
                  </p>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {([
                    { key: "like", Icon: Heart, active: liked, activeColor: "#BB4F7A", onClick: () => setLiked((v) => !v), title: "Love this verse", fill: liked },
                    { key: "save", Icon: Bookmark, active: saved, activeColor: "#c9a227", onClick: () => setSaved((v) => !v), title: "Save verse", fill: saved },
                    { key: "share", Icon: shared ? Check : Share2, active: shared, activeColor: "#3a7d56", onClick: handleShareVerse, title: "Share verse", fill: false },
                  ] as const).map(({ key, Icon, active, activeColor, onClick, title, fill }) => (
                    <button
                      key={key}
                      onClick={onClick}
                      aria-label={title}
                      title={title}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 2,
                        border: `0.5px solid ${active ? activeColor : "rgba(201,162,39,0.18)"}`,
                        background: active ? `${activeColor}1A` : "transparent",
                        color: active ? activeColor : "#9a8f72",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        if (active) return;
                        (e.currentTarget as HTMLButtonElement).style.color = "#c9a227";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.5)";
                      }}
                      onMouseLeave={(e) => {
                        if (active) return;
                        (e.currentTarget as HTMLButtonElement).style.color = "#9a8f72";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.18)";
                      }}
                    >
                      <Icon size={13} fill={fill ? "currentColor" : "none"} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bible search prompt */}
            <a
              href="/bible"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "0.9rem 1.2rem",
                background: "transparent",
                border: "0.5px solid rgba(201,162,39,0.18)",
                borderRadius: 2,
                cursor: "pointer",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.18)";
              }}
            >
              <BookOpen size={16} style={{ color: "#c9a227" }} />
              <span
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.82rem",
                  color: "#9a8f72",
                  flex: 1,
                }}
              >
                Search any verse, chapter, or topic...
              </span>
              <ChevronRight size={14} style={{ color: "#c9a227" }} />
            </a>
          </div>

          {/* Right: Devotionals */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "#f2e6c8",
                  margin: 0,
                }}
              >
                Today&apos;s Devotionals
              </h3>
              <a
                href="/daily"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#c9a227",
                  textDecoration: "none",
                }}
              >
                View All <ChevronRight size={12} />
              </a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {DEVOTIONALS.map((d, i) => (
                <div
                  key={i}
                  style={{
                    background: "#0a1a0e",
                    border: "0.5px solid rgba(201,162,39,0.13)",
                    borderRadius: 3,
                    padding: "1.4rem 1.5rem",
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
                  <h4
                    style={{
                      fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#f2e6c8",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {d.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.82rem",
                      color: "#9a8f72",
                      lineHeight: 1.65,
                      marginBottom: "0.9rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical" as const,
                      overflow: "hidden",
                    }}
                  >
                    {d.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: "rgba(201,162,39,0.15)",
                          border: "0.5px solid rgba(201,162,39,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-jost, system-ui, sans-serif)",
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          color: "#c9a227",
                        }}
                      >
                        {d.author[0]}
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-jost, system-ui, sans-serif)",
                          fontSize: "0.72rem",
                          color: "#9a8f72",
                        }}
                      >
                        {d.author}
                      </span>
                      <span style={{ color: "rgba(201,162,39,0.3)", fontSize: "0.72rem" }}>·</span>
                      <span
                        style={{
                          fontFamily: "var(--font-jost, system-ui, sans-serif)",
                          fontSize: "0.72rem",
                          color: "#9a8f72",
                        }}
                      >
                        {d.readTime}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 12 }}>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          fontFamily: "var(--font-jost, system-ui, sans-serif)",
                          fontSize: "0.72rem",
                          color: "#9a8f72",
                        }}
                      >
                        <Heart size={10} />
                        {d.likes.toLocaleString()}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          fontFamily: "var(--font-jost, system-ui, sans-serif)",
                          fontSize: "0.72rem",
                          color: "#9a8f72",
                        }}
                      >
                        <Bookmark size={10} />
                        {d.saves}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
