"use client";

import { useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  size: number;
  dur: number;
  delay: number;
  color: string;
}

const CROSS_COLORS = ["#c9a227", "#3a7d56", "#e8c162", "#52a876"];

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`;

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: 10 + Math.random() * 18,
        dur: 12 + Math.random() * 18,
        delay: i * 0.45,
        color: CROSS_COLORS[Math.floor(Math.random() * CROSS_COLORS.length)],
      }))
    );
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "calc(var(--header-height, 72px) + 60px) 4vw 80px",
        background: "#050e07",
      }}
    >
      {/* Noise texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_SVG,
          pointerEvents: "none",
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Radial green glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 900,
          background:
            "radial-gradient(ellipse, rgba(58,125,86,0.2) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Bottom gradient fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 300,
          background: "linear-gradient(to bottom, transparent, #050e07)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Cross particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            bottom: -40,
            opacity: 0,
            animation: `floatUp ${p.dur}s linear ${p.delay}s infinite`,
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <svg
            viewBox="0 0 20 20"
            width={p.size}
            height={p.size}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="8" y="2" width="4" height="16" rx="1.5" fill={p.color} opacity="0.5" />
            <rect x="2" y="7" width="16" height="4" rx="1.5" fill={p.color} opacity="0.5" />
          </svg>
        </div>
      ))}

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 820,
          animation: "heroFadeIn 1.2s ease forwards",
        }}
      >
        {/* Eyebrow */}
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
            marginBottom: "1.5rem",
            padding: "0.35rem 0.9rem",
            border: "0.5px solid rgba(201,162,39,0.25)",
            borderRadius: 2,
            fontFamily: "var(--font-jost, system-ui, sans-serif)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 18,
              height: 1,
              background: "#c9a227",
              flexShrink: 0,
            }}
          />
          Christianity&apos;s All-In-One Platform
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(3.2rem, 7vw, 6rem)",
            fontWeight: 300,
            lineHeight: 1.06,
            color: "#f2e6c8",
            marginBottom: "1.6rem",
            letterSpacing: "-0.01em",
          }}
        >
          Every branch.
          <br />
          Every believer.
          <br />
          <em style={{ fontStyle: "italic", color: "#e8c162" }}>
            Connected.
          </em>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "1.05rem",
            fontWeight: 300,
            color: "#9a8f72",
            maxWidth: 540,
            lineHeight: 1.75,
            marginBottom: "2.5rem",
            fontFamily: "var(--font-jost, system-ui, sans-serif)",
          }}
        >
          The world&apos;s first truly comprehensive Christian platform &mdash;
          community, Scripture, mental wellness, life guides, theology, video,
          and more. One home for every stage of your faith.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.2rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/feed"
            style={{
              background: "#c9a227",
              color: "#1a0e00",
              border: "none",
              padding: "0.85rem 2.2rem",
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
            Join The Vine &mdash; Free
          </a>
          <a
            href="/explore"
            style={{
              background: "none",
              color: "#c9b98a",
              border: "0.5px solid rgba(242,230,200,0.25)",
              padding: "0.85rem 2.2rem",
              borderRadius: 3,
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.9rem",
              fontWeight: 400,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(242,230,200,0.6)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#f2e6c8";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(242,230,200,0.25)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#c9b98a";
            }}
          >
            Explore Hubs
          </a>
        </div>
      </div>

      {/* Bottom-right verse */}
      <div
        style={{
          position: "absolute",
          bottom: 56,
          right: "4vw",
          zIndex: 2,
          textAlign: "right",
          animation: "heroFadeIn 1.6s ease forwards",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
            fontStyle: "italic",
            fontSize: "1.05rem",
            color: "#9a8f72",
            lineHeight: 1.5,
          }}
        >
          &ldquo;I am the vine; you are the branches.&rdquo;
        </p>
        <cite
          style={{
            fontFamily: "var(--font-jost, system-ui, sans-serif)",
            fontSize: "0.72rem",
            fontStyle: "normal",
            letterSpacing: "0.1em",
            color: "#c9a227",
            textTransform: "uppercase",
            marginTop: 4,
            display: "block",
          }}
        >
          John 15:5
        </cite>
      </div>

      {/* Bottom-left scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: 56,
          left: "4vw",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: "0.72rem",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#9a8f72",
          animation: "heroFadeIn 2s ease forwards",
          fontFamily: "var(--font-jost, system-ui, sans-serif)",
        }}
      >
        <div
          style={{
            width: 1,
            height: 36,
            background: "linear-gradient(to bottom, transparent, #c9a227)",
            animation: "scrollLinePulse 2s ease infinite",
          }}
        />
        Scroll
      </div>
    </section>
  );
}
