"use client";

import Link from "next/link";

const PERKS = [
  "Deep verse-by-verse Bible study guides and commentaries",
  "Discussions with Christians across every tradition worldwide",
  "Daily Scripture, devotionals, and guided reading plans",
  "Apologetics, theology, and answers to hard questions",
  "Prayer walls, mental health support rooted in the Word",
  "Free forever — no ads, no algorithm, no catch",
];

export default function JoinCTA() {
  return (
    <section
      style={{
        background: "#0a1a0e",
        textAlign: "center",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        padding: "120px 4vw",
        position: "relative",
        overflow: "hidden",
      }}
      id="join"
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          background:
            "radial-gradient(ellipse, rgba(58,125,86,0.14) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#c9a227",
            marginBottom: "2rem",
            padding: "0.35rem 1rem",
            border: "0.5px solid rgba(201,162,39,0.25)",
            borderRadius: 2,
            fontFamily: "var(--font-jost, system-ui, sans-serif)",
          }}
        >
          For Everyone Who Belongs to Christ
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily:
              "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
            fontWeight: 300,
            color: "#f2e6c8",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          Abide in Christ.
          <br />
          <em style={{ fontStyle: "italic", color: "#e8c162" }}>Grow together.</em>
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "#9a8f72",
            fontWeight: 300,
            maxWidth: 440,
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
            fontFamily: "var(--font-jost, system-ui, sans-serif)",
          }}
        >
          Jesus said, &ldquo;I am the vine; you are the branches. Whoever abides
          in me and I in him, he it is that bears much fruit.&rdquo; The Vine
          exists to help you do exactly that &mdash; through His Word, His
          people, and His Spirit.
        </p>

        {/* Perks */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.7rem",
            maxWidth: 520,
            margin: "0 auto 2.5rem",
            textAlign: "left",
          }}
        >
          {PERKS.map((perk, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 14,
                  height: 0.5,
                  background: "#c9a227",
                  flexShrink: 0,
                  marginTop: 9,
                }}
              />
              <span style={{ fontSize: "0.82rem", color: "#9a8f72", lineHeight: 1.5 }}>
                {perk}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1.2rem",
          }}
        >
          <Link
            href="/salvation"
            style={{
              background: "#c9a227",
              color: "#1a0e00",
              border: "none",
              padding: "0.9rem 2.4rem",
              borderRadius: 3,
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#e8c162";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 8px 32px rgba(201,162,39,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#c9a227";
              (e.currentTarget as HTMLAnchorElement).style.transform = "none";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            Know Christ
          </Link>
          <Link
            href="/about"
            style={{
              background: "none",
              color: "#c9b98a",
              border: "0.5px solid rgba(242,230,200,0.25)",
              padding: "0.9rem 2.4rem",
              borderRadius: 3,
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.9rem",
              fontWeight: 400,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Explore The Vine
          </Link>
        </div>

        <p
          style={{
            fontSize: "0.72rem",
            color: "#9a8f72",
            letterSpacing: "0.06em",
            fontFamily: "var(--font-jost, system-ui, sans-serif)",
          }}
        >
          No ads. No algorithm abuse. Built on faith, not engagement metrics.
        </p>

        {/* Verse */}
        <div
          style={{
            marginTop: "4rem",
            background: "#0f2318",
            border: "0.5px solid rgba(201,162,39,0.18)",
            borderRadius: 4,
            padding: "2rem 2.5rem",
            maxWidth: 560,
            margin: "4rem auto 0",
          }}
        >
          <p
            style={{
              fontFamily:
                "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
              fontStyle: "italic",
              fontSize: "1.2rem",
              color: "#f2e6c8",
              lineHeight: 1.55,
              marginBottom: "0.7rem",
            }}
          >
            &ldquo;And let us consider how to stir up one another to love and good
            works, not neglecting to meet together.&rdquo;
          </p>
          <cite
            style={{
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontStyle: "normal",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              color: "#c9a227",
              textTransform: "uppercase",
            }}
          >
            Hebrews 10:24&ndash;25
          </cite>
        </div>
      </div>
    </section>
  );
}
