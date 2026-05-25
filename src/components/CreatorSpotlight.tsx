"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Video, FileText, Mic, Users, Star, PlusCircle } from "lucide-react";

const creators = [
  {
    name: "Dr. Rachel Osei",
    country: "Ghana",
    flag: "🇬🇭",
    title: "Bible Teacher & Theologian",
    followers: "42.8K",
    initials: "RO",
    color: "#6B4FBB",
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
    color: "#D4AF37",
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
    color: "#2E7D52",
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
    color: "#1565C0",
    types: ["Articles", "Podcast"],
    bio: "Helping families steward God's resources with wisdom. Creators of the 'Kingdom Budget' framework used globally.",
  },
  {
    name: "Prof. Emmanuel Adeyemi",
    country: "Nigeria",
    flag: "🇳🇬",
    title: "Apologist & Author",
    followers: "55.1K",
    initials: "EA",
    color: "#B71C1C",
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
    color: "#7B2FBE",
    types: ["Video", "Articles", "Podcast"],
    bio: "Reaching the next generation for Christ through creative storytelling, art, and community-driven ministry.",
  },
];

const typeIcons: Record<string, React.ReactNode> = {
  Video: <Video size={10} />,
  Articles: <FileText size={10} />,
  Podcast: <Mic size={10} />,
};

const typeColors: Record<string, string> = {
  Video: "#6B4FBB",
  Articles: "#2E7D52",
  Podcast: "#D4AF37",
};

export default function CreatorSpotlight() {
  const [followed, setFollowed] = useState<Record<string, boolean>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 340 : -340,
      behavior: "smooth",
    });
  };

  const toggleFollow = (name: string) => {
    setFollowed((prev) => ({ ...prev, [name]: !prev[name] }));
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
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
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
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "36px",
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
              <Star size={16} style={{ color: "#D4AF37" }} />
              <span
                style={{
                  color: "#D4AF37",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Featured Voices
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
              Creator <span className="gold-gradient">Spotlight</span>
            </h2>
          </div>

          {/* Scroll arrows */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => scroll("left")}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid rgba(212,175,55,0.3)",
                background: "transparent",
                color: "#D4AF37",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(212,175,55,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
              }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid rgba(212,175,55,0.3)",
                background: "transparent",
                color: "#D4AF37",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(212,175,55,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
              }}
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            paddingBottom: "12px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {creators.map((creator) => {
            const isFollowed = followed[creator.name];
            return (
              <div
                key={creator.name}
                className="card-glow"
                style={{
                  background: "#12121F",
                  borderRadius: "20px",
                  padding: "28px 24px",
                  minWidth: "280px",
                  maxWidth: "280px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  flexShrink: 0,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle top accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, transparent, ${creator.color}, transparent)`,
                  }}
                />

                {/* Avatar */}
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: creator.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    letterSpacing: "0.05em",
                    marginBottom: "16px",
                    boxShadow: `0 0 24px ${creator.color}55`,
                    border: "3px solid rgba(255,255,255,0.15)",
                    position: "relative",
                  }}
                >
                  {creator.initials}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      right: "-2px",
                      fontSize: "1rem",
                      lineHeight: 1,
                    }}
                  >
                    {creator.flag}
                  </span>
                </div>

                {/* Name & title */}
                <h3
                  style={{
                    color: "#F2F2F8",
                    fontSize: "1rem",
                    fontWeight: 700,
                    marginBottom: "4px",
                  }}
                >
                  {creator.name}
                </h3>
                <p
                  style={{
                    color: "#8A8AA8",
                    fontSize: "0.75rem",
                    marginBottom: "10px",
                  }}
                >
                  {creator.title}
                </p>

                {/* Follower count */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "14px",
                    color: "#D4AF37",
                  }}
                >
                  <Users size={13} />
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#D4AF37",
                    }}
                  >
                    {creator.followers}
                  </span>
                  <span style={{ color: "#6A6A88", fontSize: "0.75rem" }}>
                    followers
                  </span>
                </div>

                {/* Content type badges */}
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginBottom: "14px",
                  }}
                >
                  {creator.types.map((type) => (
                    <span
                      key={type}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "3px 10px",
                        borderRadius: "999px",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        background: `${typeColors[type]}22`,
                        color: typeColors[type],
                        border: `1px solid ${typeColors[type]}44`,
                      }}
                    >
                      {typeIcons[type]}
                      {type}
                    </span>
                  ))}
                </div>

                {/* Bio */}
                <p
                  style={{
                    color: "#6A6A88",
                    fontSize: "0.75rem",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {creator.bio}
                </p>

                {/* Follow button */}
                <button
                  onClick={() => toggleFollow(creator.name)}
                  className={isFollowed ? "btn-outline-gold" : "btn-gold"}
                  style={{
                    width: "100%",
                    padding: "9px 0",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    cursor: "pointer",
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
            marginTop: "40px",
            background: "#12121F",
            borderRadius: "20px",
            padding: "40px 48px",
            border: "1px solid rgba(212,175,55,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background accent */}
          <div
            style={{
              position: "absolute",
              right: "0",
              top: "0",
              bottom: "0",
              width: "40%",
              background:
                "radial-gradient(ellipse 80% 80% at 100% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                borderRadius: "999px",
                background: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.25)",
                color: "#D4AF37",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              <PlusCircle size={11} />
              Open Applications
            </div>
            <h3
              style={{
                color: "#F2F2F8",
                fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                fontWeight: 900,
                marginBottom: "10px",
              }}
            >
              Become a Creator on Vine
            </h3>
            <p
              style={{
                color: "#8A8AA8",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                maxWidth: "500px",
              }}
            >
              Do you have a gift to share? Whether you preach, teach, sing, or
              write, the global church needs your voice. Join 2,400+ creators
              already building their ministry on Vine.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              flexShrink: 0,
              position: "relative",
              zIndex: 1,
            }}
          >
            <button
              className="btn-gold"
              style={{
                padding: "14px 32px",
                borderRadius: "12px",
                fontSize: "0.95rem",
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Apply as a Creator
            </button>
            <button
              className="btn-outline-gold"
              style={{
                padding: "12px 32px",
                borderRadius: "12px",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
