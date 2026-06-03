"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Video, FileText, Mic, Users, PlusCircle } from "lucide-react";

const CREATORS = [
  {
    name: "Dr. Rachel Osei",
    country: "Ghana",
    flag: "🇬🇭",
    title: "Bible Teacher & Theologian",
    followers: "42.8K",
    initials: "RO",
    types: ["Video", "Articles"],
    bio: "Bridging academic theology and everyday faith. Known for her deep dives into Romans and practical discipleship tools.",
  },
  {
    name: "Pastor Marcus Webb",
    country: "United States",
    flag: "🇺🇸",
    title: "Preacher & Podcaster",
    followers: "118K",
    initials: "MW",
    types: ["Video", "Podcast"],
    bio: "Senior pastor turned digital minister. His Sunday sermons reach over 100K listeners weekly across 40 countries.",
  },
  {
    name: "Miriam Santos",
    country: "Brazil",
    flag: "🇧🇷",
    title: "Worship Leader & Songwriter",
    followers: "67.2K",
    initials: "MS",
    types: ["Video", "Podcast"],
    bio: "Award-winning worship songwriter whose music has been sung in churches from São Paulo to Seoul.",
  },
  {
    name: "James & Priya Nair",
    country: "India",
    flag: "🇮🇳",
    title: "Christian Finance Educators",
    followers: "29.4K",
    initials: "JN",
    types: ["Articles", "Podcast"],
    bio: "Helping families steward God's resources with wisdom. Creators of the Kingdom Budget framework used globally.",
  },
  {
    name: "Prof. Emmanuel Adeyemi",
    country: "Nigeria",
    flag: "🇳🇬",
    title: "Apologist & Author",
    followers: "55.1K",
    initials: "EA",
    types: ["Video", "Articles"],
    bio: "Philosophy professor and passionate defender of the faith. His debates have been watched over 8 million times.",
  },
  {
    name: "Sofia Andersson",
    country: "Sweden",
    flag: "🇸🇪",
    title: "Youth Ministry Leader",
    followers: "18.7K",
    initials: "SA",
    types: ["Video", "Articles", "Podcast"],
    bio: "Reaching the next generation for Christ through creative storytelling, art, and community-driven ministry.",
  },
];

const TYPE_ICONS: Record<string, React.ReactNode> = {
  Video: <Video size={10} />,
  Articles: <FileText size={10} />,
  Podcast: <Mic size={10} />,
};

const FOLLOWED_STORAGE_KEY = "vine:creators:followed";

export default function CreatorSpotlight() {
  const [followed, setFollowed] = useState<Record<string, boolean>>({});
  const [applied, setApplied] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FOLLOWED_STORAGE_KEY);
      if (stored) {
        setFollowed(Object.fromEntries((JSON.parse(stored) as string[]).map((name) => [name, true])));
      }
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  const toggleFollow = (name: string) => {
    setFollowed((prev) => {
      const next = { ...prev, [name]: !prev[name] };
      try {
        const names = Object.keys(next).filter((key) => next[key]);
        localStorage.setItem(FOLLOWED_STORAGE_KEY, JSON.stringify(names));
      } catch {
        /* ignore storage failures */
      }
      return next;
    });
  };

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
              Featured Voices
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
              Creator
              <em style={{ fontStyle: "italic", color: "#e8c162" }}> Spotlight.</em>
            </h2>
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
          {CREATORS.map((creator) => {
            const isFollowed = followed[creator.name];
            return (
              <div
                key={creator.name}
                style={{
                  background: "#050e07",
                  border: "0.5px solid rgba(201,162,39,0.13)",
                  borderRadius: 3,
                  padding: "1.8rem 1.5rem",
                  minWidth: 260,
                  maxWidth: 260,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  flexShrink: 0,
                  position: "relative",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,162,39,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,162,39,0.13)";
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

                {/* Avatar */}
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
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#c9a227",
                    letterSpacing: "0.05em",
                    marginBottom: "0.9rem",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  {creator.initials}
                  <span
                    style={{
                      position: "absolute",
                      bottom: -2,
                      right: -2,
                      fontSize: "1rem",
                      lineHeight: 1,
                    }}
                  >
                    {creator.flag}
                  </span>
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
                  {creator.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.72rem",
                    color: "#9a8f72",
                    marginBottom: 8,
                  }}
                >
                  {creator.title}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    marginBottom: 10,
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.75rem",
                  }}
                >
                  <Users size={11} style={{ color: "#c9a227" }} />
                  <strong style={{ color: "#c9a227" }}>{creator.followers}</strong>
                  <span style={{ color: "#9a8f72" }}>followers</span>
                </div>

                {/* Type badges */}
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "center", marginBottom: 10 }}>
                  {creator.types.map((type) => (
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
                    marginBottom: "1.2rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical" as const,
                    overflow: "hidden",
                  }}
                >
                  {creator.bio}
                </p>

                <button
                  onClick={() => toggleFollow(creator.name)}
                  style={{
                    width: "100%",
                    padding: "8px 0",
                    borderRadius: 2,
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    background: isFollowed ? "transparent" : "#c9a227",
                    color: isFollowed ? "#c9a227" : "#1a0e00",
                    border: isFollowed ? "0.5px solid rgba(201,162,39,0.4)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isFollowed) (e.currentTarget as HTMLButtonElement).style.background = "#e8c162";
                  }}
                  onMouseLeave={(e) => {
                    if (!isFollowed) (e.currentTarget as HTMLButtonElement).style.background = "#c9a227";
                  }}
                >
                  {isFollowed ? "Following" : "Follow"}
                </button>
              </div>
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
              Whether you preach, teach, sing, or write — the global Church needs your voice.
              Join 2,400+ creators already building their ministry on The Vine.
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
                Creators get a verified profile, publishing tools for video, audio, and
                articles, audience analytics, and revenue sharing. Applications are reviewed
                within 5 business days.
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
              {applied ? "Application Started ✓" : "Apply as a Creator"}
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
