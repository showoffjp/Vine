"use client";
import Link from "next/link";
import { ChevronRight, Clock, Eye } from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";

const FEATURED = {
  tag: "Featured Guide",
  title: "The Complete Christian Guide to Mental Health",
  subtitle:
    "A comprehensive, faith-informed resource covering anxiety, depression, trauma, and inner healing — with practical steps, Scripture, and professional insights.",
  readTime: "25 min read",
  views: "184K",
  rating: "4.9",
  author: "Dr. Angela Osei & Pastor Tim Reeves",
  href: "/mental-health",
  sections: [
    "Understanding Anxiety Through a Biblical Lens",
    "When to Seek Professional Help",
    "Prayer, Medication, or Both?",
    "Community as Therapy",
    "Practical Daily Disciplines",
  ],
};

const ARTICLES = [
  {
    tag: "Finance",
    href: "/blog/biblical-finances-stewardship",
    title: "7 Biblical Principles for Financial Freedom",
    desc: "From tithing to stewardship, these time-tested principles will transform your relationship with money.",
    readTime: "8 min",
    views: "42K",
  },
  {
    tag: "Relationships",
    href: "/blog/when-marriage-is-hard",
    title: "How to Have Hard Conversations With Grace",
    desc: "James 1:19 gives us a framework that actually works in marriage, friendships, and the workplace.",
    readTime: "6 min",
    views: "38K",
  },
  {
    tag: "Theology",
    href: "/blog/problem-of-evil",
    title: "What the Bible Actually Says About Suffering",
    desc: "A deep dive into Job, Romans 8, and the consistent thread of redemptive suffering across all of Scripture.",
    readTime: "12 min",
    views: "61K",
  },
  {
    tag: "Parenting",
    href: "/blog/raising-faith-filled-children",
    title: "Raising Kids in a Digital Age With Christian Values",
    desc: "Practical guidelines for screen time, social media, and teaching discernment to the next generation.",
    readTime: "9 min",
    views: "29K",
  },
  {
    tag: "Leadership",
    href: "/blog/servant-leadership-jesus",
    title: "Servant Leadership: Jesus' Model for Today",
    desc: "What does it look like to lead like Christ in a secular organization? Real examples, real challenges.",
    readTime: "7 min",
    views: "35K",
  },
  {
    tag: "Rest",
    href: "/blog/digital-sabbath",
    title: "The Sabbath Principle and Modern Productivity",
    desc: "Rest is not laziness. Here is the science and Scripture behind why rest makes us more fruitful, not less.",
    readTime: "5 min",
    views: "51K",
  },
];

const CATEGORIES = ["All", "Life & Faith", "Mental Health", "Theology", "Relationships", "Parenting", "Finance", "Leadership"];

export default function ResourceHub() {
  const [activeCategory, setActiveCategory] = usePersistedState("vine_home_resource_category", "All");

  const filteredArticles =
    activeCategory === "All"
      ? ARTICLES
      : ARTICLES.filter((a) => a.tag === activeCategory);

  return (
    <section
      style={{
        background: "#050e07",
        padding: "100px 4vw",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        position: "relative",
      }}
      id="resources"
    >
      <div
        style={{
          position: "absolute",
          top: "20%",
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
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
              Resource Library
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
              Deep dives &
              <em style={{ fontStyle: "italic", color: "#e8c162" }}> life guides.</em>
            </h2>
          </div>
          <a
            href="/resources"
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
              whiteSpace: "nowrap",
            }}
          >
            Browse Library <ChevronRight size={14} />
          </a>
        </div>

        {/* Category tabs */}
        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: "2.5rem",
            overflowX: "auto",
            paddingBottom: 4,
          }}
        >
          {CATEGORIES.map((c) => {
            const active = activeCategory === c;
            return (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                style={{
                  whiteSpace: "nowrap",
                  padding: "5px 16px",
                  borderRadius: 2,
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.75rem",
                  fontWeight: active ? 600 : 400,
                  letterSpacing: "0.06em",
                  background: active ? "#c9a227" : "transparent",
                  color: active ? "#1a0e00" : "#9a8f72",
                  border: active ? "none" : "0.5px solid rgba(201,162,39,0.2)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Featured article */}
        <Link
          href={FEATURED.href}
          style={{
            display: "block",
            background: "#0f2318",
            border: "0.5px solid rgba(201,162,39,0.22)",
            borderRadius: 3,
            padding: "2.5rem",
            marginBottom: "1.5rem",
            cursor: "pointer",
            transition: "border-color 0.2s",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.45)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.22)";
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "center" }}>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#c9a227",
                  display: "block",
                  marginBottom: "0.8rem",
                }}
              >
                {FEATURED.tag}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 600,
                  color: "#f2e6c8",
                  lineHeight: 1.25,
                  marginBottom: "0.8rem",
                }}
              >
                {FEATURED.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.85rem",
                  color: "#9a8f72",
                  lineHeight: 1.65,
                  marginBottom: "1rem",
                  fontWeight: 300,
                }}
              >
                {FEATURED.subtitle}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.72rem",
                  color: "#9a8f72",
                  marginBottom: "1.2rem",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Clock size={11} /> {FEATURED.readTime}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Eye size={11} /> {FEATURED.views} views
                </span>
                <span style={{ color: "#c9a227" }}>★ {FEATURED.rating}</span>
              </div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#c9a227",
                  color: "#1a0e00",
                  padding: "0.7rem 1.6rem",
                  borderRadius: 2,
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Read Full Guide
              </span>
            </div>

            <div
              style={{
                background: "rgba(5,14,7,0.6)",
                border: "0.5px solid rgba(201,162,39,0.12)",
                borderRadius: 2,
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#9a8f72",
                  marginBottom: "1rem",
                }}
              >
                In this guide:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {FEATURED.sections.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant, Georgia, serif)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "rgba(201,162,39,0.5)",
                        minWidth: 18,
                        lineHeight: 1.6,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-jost, system-ui, sans-serif)",
                        fontSize: "0.83rem",
                        color: "#c9b98a",
                        lineHeight: 1.5,
                        fontWeight: 300,
                      }}
                    >
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>

        {/* Article Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            background: "rgba(201,162,39,0.04)",
          }}
        >
          {filteredArticles.map((a, i) => (
            <Link
              key={i}
              href={a.href}
              style={{
                display: "block",
                background: "#050e07",
                padding: "1.8rem",
                cursor: "pointer",
                transition: "background 0.2s",
                position: "relative",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#0a1a0e";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#050e07";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "1.8rem",
                  right: "1.8rem",
                  height: "0.5px",
                  background: "rgba(201,162,39,0.07)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#c9a227",
                  display: "block",
                  marginBottom: "0.7rem",
                }}
              >
                {a.tag}
              </span>
              <h4
                style={{
                  fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#f2e6c8",
                  lineHeight: 1.3,
                  marginBottom: "0.5rem",
                }}
              >
                {a.title}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.8rem",
                  color: "#9a8f72",
                  lineHeight: 1.6,
                  marginBottom: "0.9rem",
                  fontWeight: 300,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical" as const,
                  overflow: "hidden",
                }}
              >
                {a.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.7rem",
                  color: "#9a8f72",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Clock size={10} /> {a.readTime}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Eye size={10} /> {a.views}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div style={{ textAlign: "center", padding: "3rem", color: "#9a8f72" }}>
            <p
              style={{
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.88rem",
              }}
            >
              No articles in {activeCategory} yet — check back soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
