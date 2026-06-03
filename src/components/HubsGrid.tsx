"use client";

import { useState, useEffect, useRef } from "react";

interface Hub {
  id: string;
  name: string;
  tagline: string;
  meta: string;
  color: string;
  bg: string;
  href: string;
  seeAllHref: string;
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
    seeAllHref: "/discussions",
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
    seeAllHref: "/bible",
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
    seeAllHref: "/mental-health",
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
    seeAllHref: "/daily",
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
    seeAllHref: "/resources",
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
    seeAllHref: "/life-hacks",
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
    seeAllHref: "/community",
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
    seeAllHref: "/video",
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

function useIntersectionObserver(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

function HubCard({
  hub,
  index,
  isVisible,
}: {
  hub: Hub;
  index: number;
  isVisible: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const delay = Math.min(index * 80, 500);

  return (
    <a
      href={hub.href}
      style={{
        gridColumn: hub.featured ? "span 2" : "span 1",
        background: hovered
          ? `linear-gradient(135deg, ${hub.bg}, rgba(0,0,0,0))`
          : "#0a1a0e",
        padding: hub.featured ? "2.2rem 2rem" : "2rem 1.8rem",
        display: "flex",
        flexDirection: hub.featured ? "row" : "column",
        alignItems: hub.featured ? "flex-start" : undefined,
        gap: hub.featured ? "1.8rem" : "1rem",
        textDecoration: "none",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? `inset 0 0 40px ${hub.color}0a, 0 0 0 1px ${hub.color}22`
          : "none",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(18px)",
        transitionProperty: "background, box-shadow, opacity, transform",
        transitionDuration: `0.3s, 0.3s, 0.55s, 0.55s`,
        transitionTimingFunction: "ease",
        transitionDelay: `0s, 0s, ${delay}ms, ${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Shimmer overlay on hover */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, transparent 30%, ${hub.color}08 50%, transparent 70%)`,
          backgroundSize: "200% 200%",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />

      {/* Top accent line that appears on hover */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${hub.color}, transparent)`,
          opacity: hovered ? 0.7 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: hub.featured ? 52 : 42,
          height: hub.featured ? 52 : 42,
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: hovered ? hub.bg : "rgba(255,255,255,0.03)",
          border: `1px solid ${hovered ? hub.color + "33" : "rgba(255,255,255,0.04)"}`,
          flexShrink: 0,
          transition: "background 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}
      >
        {hub.icon}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0, position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontFamily: "var(--font-cormorant, Georgia, serif)",
            fontSize: hub.featured ? "1.5rem" : "1.15rem",
            fontWeight: 600,
            color: hovered ? "#f2e6c8" : "#e8dfc8",
            lineHeight: 1.2,
            marginBottom: "0.55rem",
            transition: "color 0.2s ease",
          }}
        >
          {hub.name}
        </div>
        <div
          style={{
            fontSize: "0.79rem",
            color: hovered ? "#9898B3" : "#7a7060",
            lineHeight: 1.6,
            fontWeight: 300,
            fontFamily: "var(--font-jost, system-ui, sans-serif)",
            marginBottom: "1rem",
            transition: "color 0.2s ease",
          }}
        >
          {hub.tagline}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: hub.color,
              opacity: 0.8,
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
            }}
          >
            {hub.meta}
          </div>

          {/* See all button */}
          <a
            href={hub.seeAllHref}
            onClick={(e) => e.stopPropagation()}
            style={{
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: hovered ? hub.color : "rgba(255,255,255,0.25)",
              textDecoration: "none",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              transition: "color 0.2s ease, opacity 0.2s ease",
              opacity: hovered ? 1 : 0.5,
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.color = hub.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = hovered ? "1" : "0.5";
              e.currentTarget.style.color = hovered
                ? hub.color
                : "rgba(255,255,255,0.25)";
            }}
          >
            See all
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 5h6M5.5 2.5L8 5l-2.5 2.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </a>
  );
}

export default function HubsGrid() {
  const { ref, isVisible } = useIntersectionObserver(0.08);

  return (
    <section
      style={{
        background: "#050a07",
        padding: "100px 4vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(58,125,86,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "end",
            marginBottom: "4rem",
          }}
        >
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#3a7d56",
                marginBottom: "0.85rem",
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
              }}
            >
              What&apos;s Inside
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
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
              fontSize: "0.96rem",
              color: "#7a7060",
              maxWidth: 520,
              lineHeight: 1.8,
              fontWeight: 300,
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              margin: 0,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            Each hub is its own world &mdash; purpose-built for how Christians
            actually live, think, worship, and grow. Dive into one, or explore
            them all.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "rgba(201,162,39,0.1)",
            border: "1px solid rgba(201,162,39,0.12)",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {HUBS.map((hub, i) => (
            <HubCard
              key={hub.id}
              hub={hub}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
          }}
        >
          <a
            href="/explore"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#c9a227",
              textDecoration: "none",
              border: "1px solid rgba(201,162,39,0.3)",
              borderRadius: 4,
              padding: "0.7rem 1.6rem",
              transition: "all 0.22s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,162,39,0.7)";
              e.currentTarget.style.background = "rgba(201,162,39,0.06)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(201,162,39,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,162,39,0.3)";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Explore all of The Vine
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M7.5 3L11 7l-3.5 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
