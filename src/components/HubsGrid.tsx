"use client";

import { useState } from "react";

interface Hub {
  id: string;
  name: string;
  tagline: string;
  meta: string;
  color: string;
  bg: string;
  href: string;
  featured?: boolean;
  icon: React.ReactNode;
}

const HUBS: Hub[] = [
  {
    id: "branches",
    name: "The Branches",
    tagline:
      "Reddit-style discussion boards organized by topic — theology, marriage, parenting, ministry, worship, and hundreds more. Find your tribe across the globe.",
    meta: "Community Hub · Discussions · Groups",
    color: "#52a876",
    bg: "rgba(58,125,86,0.12)",
    href: "/discussions",
    featured: true,
    icon: (
      <svg viewBox="0 0 22 22" fill="none" width={22} height={22}>
        <circle cx="11" cy="5" r="3" stroke="#52a876" strokeWidth="1.5" />
        <circle cx="4" cy="16" r="2.5" stroke="#52a876" strokeWidth="1.5" />
        <circle cx="18" cy="16" r="2.5" stroke="#52a876" strokeWidth="1.5" />
        <path
          d="M11 8v4M11 12l-5.5 3.5M11 12l5.5 3.5"
          stroke="#52a876"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "word",
    name: "The Word",
    tagline:
      "Every translation, commentary, lexicon, and study tool. Wikipedia-depth articles on every book, passage, and doctrine.",
    meta: "Bible · Theology · Commentaries",
    color: "#c9a227",
    bg: "rgba(201,162,39,0.1)",
    href: "/bible",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" width={22} height={22}>
        <rect x="3" y="2" width="13" height="18" rx="2" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M7 7h6M7 11h6M7 15h4" stroke="#c9a227" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M16 6l3 2-3 2" stroke="#c9a227" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "well",
    name: "The Well",
    tagline:
      "Faith-informed mental health resources, guided therapy tools, psychology articles, crisis support, and licensed counselor connections.",
    meta: "Wellness · Therapy · Psychology",
    color: "#7dcfa0",
    bg: "rgba(125,207,160,0.08)",
    href: "/mental-health",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" width={22} height={22}>
        <path
          d="M11 3 C11 3 5 8 5 13a6 6 0 0012 0c0-5-6-10-6-10z"
          stroke="#7dcfa0"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M8 14c0 1.7 1.3 3 3 3" stroke="#7dcfa0" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "light",
    name: "The Light",
    tagline:
      "Daily devotionals, testimonies, motivational reads, and inspiring stories from Christians around the world.",
    meta: "Devotionals · Motivation · Testimonies",
    color: "#e0c070",
    bg: "rgba(224,192,112,0.09)",
    href: "/daily",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" width={22} height={22}>
        <circle cx="11" cy="10" r="4" stroke="#e0c070" strokeWidth="1.5" />
        <path
          d="M11 2v2M11 16v2M4.5 4.5l1.4 1.4M15 15l1.4 1.4M2 10h2M16 10h4M4.5 15.5l1.4-1.4M15 5l1.4-1.4"
          stroke="#e0c070"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "scroll",
    name: "The Scroll",
    tagline:
      "Long-form articles, explainers, apologetics, church history deep dives, and editorials written for curious believers.",
    meta: "Articles · Guides · Apologetics",
    color: "#b0a0e8",
    bg: "rgba(176,160,232,0.09)",
    href: "/resources",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" width={22} height={22}>
        <path
          d="M5 4h9a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
          stroke="#b0a0e8"
          strokeWidth="1.5"
        />
        <path d="M7 8h6M7 12h6M7 16h4" stroke="#b0a0e8" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="17" cy="4" r="2" fill="#b0a0e8" opacity="0.5" />
        <circle cx="17" cy="18" r="2" fill="#b0a0e8" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "garden",
    name: "The Garden",
    tagline:
      "Life hacks, productivity guides, finances, relationships, and practical wisdom for everyday living — faith and function combined.",
    meta: "Life Hacks · Guides · Practical Living",
    color: "#6dba8a",
    bg: "rgba(109,186,138,0.1)",
    href: "/life-hacks",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" width={22} height={22}>
        <path d="M11 19V9" stroke="#6dba8a" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M11 9 C11 9 5 6 4 2c4 1 8 4 7 7z"
          stroke="#6dba8a"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M11 13 C11 13 15 10 19 11c-2 3-6 5-8 2z"
          stroke="#6dba8a"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "flock",
    name: "The Flock",
    tagline:
      "Connect with Christians who share your interests, denomination, or life stage. Profiles, discussions, and local meetups — global but personal.",
    meta: "Christian Networking · Interests · Local Groups",
    color: "#e0a070",
    bg: "rgba(224,160,112,0.09)",
    href: "/community",
    featured: true,
    icon: (
      <svg viewBox="0 0 22 22" fill="none" width={22} height={22}>
        <circle cx="7" cy="8" r="2.5" stroke="#e0a070" strokeWidth="1.5" />
        <circle cx="15" cy="8" r="2.5" stroke="#e0a070" strokeWidth="1.5" />
        <circle cx="11" cy="14" r="2.5" stroke="#e0a070" strokeWidth="1.5" />
        <path
          d="M4 18c0-2 1.3-3 3-3h8c1.7 0 3 1 3 3"
          stroke="#e0a070"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "vinetv",
    name: "Vine TV",
    tagline:
      "Sermons, testimonies, worship sessions, Bible studies, and original Christian content from creators worldwide.",
    meta: "Video · Sermons · Worship",
    color: "#c97070",
    bg: "rgba(201,112,112,0.09)",
    href: "/video",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" width={22} height={22}>
        <rect x="2" y="5" width="18" height="12" rx="2" stroke="#c97070" strokeWidth="1.5" />
        <path
          d="M9 9l5 3-5 3V9z"
          stroke="#c97070"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HubsGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      style={{
        background: "#050e07",
        padding: "100px 4vw",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "end",
            marginBottom: "4rem",
          }}
        >
          <div>
            <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
              What&apos;s Inside
            </div>
            <h2
              style={{
                fontFamily:
                  "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                fontWeight: 300,
                color: "#f2e6c8",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Eight hubs.
              <br />
              <em style={{ fontStyle: "italic", color: "#e8c162" }}>
                Infinite depth.
              </em>
            </h2>
          </div>
          <p
            style={{
              fontSize: "0.98rem",
              color: "#9a8f72",
              maxWidth: 520,
              lineHeight: 1.8,
              fontWeight: 300,
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              margin: 0,
            }}
          >
            Each hub is its own world &mdash; purpose-built for how Christians
            actually live, think, worship, and grow. Dive into one, or explore
            them all.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "rgba(201,162,39,0.12)",
            border: "0.5px solid rgba(201,162,39,0.15)",
          }}
        >
          {HUBS.map((hub) => {
            const isHovered = hoveredId === hub.id;
            return (
              <a
                key={hub.id}
                href={hub.href}
                className="hub-card-vine"
                style={
                  {
                    gridColumn: hub.featured ? "span 2" : "span 1",
                    background: isHovered ? "#0f2318" : "#0a1a0e",
                    padding: hub.featured ? "2rem 2rem" : "2rem 1.8rem",
                    display: "flex",
                    flexDirection: hub.featured ? "row" : "column",
                    alignItems: hub.featured ? "flex-start" : undefined,
                    gap: hub.featured ? "2rem" : "1rem",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "background 0.25s",
                    "--hub-accent": hub.color,
                  } as React.CSSProperties
                }
                onMouseEnter={() => setHoveredId(hub.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Icon */}
                <div
                  style={{
                    width: hub.featured ? 56 : 42,
                    height: hub.featured ? 56 : 42,
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: hub.bg,
                    flexShrink: 0,
                  }}
                >
                  {hub.icon}
                </div>

                {/* Text */}
                <div>
                  <div
                    style={{
                      fontFamily:
                        "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                      fontSize: hub.featured ? "1.55rem" : "1.2rem",
                      fontWeight: 600,
                      color: "#f2e6c8",
                      lineHeight: 1.2,
                      marginBottom: "0.6rem",
                    }}
                  >
                    {hub.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#9a8f72",
                      lineHeight: 1.55,
                      fontWeight: 300,
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      marginBottom: "1rem",
                    }}
                  >
                    {hub.tagline}
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: hub.color,
                      opacity: 0.8,
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    }}
                  >
                    {hub.meta}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
