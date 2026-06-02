"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const QUOTES = [
  {
    text: "You can never get a cup of tea large enough or a book long enough to suit me. Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
    author: "C.S. Lewis",
    title: "Author & Apologist",
    initials: "CSL",
    years: "1898–1963",
  },
  {
    text: "There is no pit so deep that God's love is not deeper still. The measure of a life is not its duration but its donation. God does not change, but His workings in us never cease.",
    author: "Corrie ten Boom",
    title: "Holocaust Survivor & Author",
    initials: "CTB",
    years: "1892–1983",
  },
  {
    text: "We must be ready to allow ourselves to be interrupted by God. God will be constantly crossing our paths and canceling our plans by sending us people with claims and petitions.",
    author: "Dietrich Bonhoeffer",
    title: "Theologian & Martyr",
    initials: "DB",
    years: "1906–1945",
  },
  {
    text: "If you judge people, you have no time to love them. Not all of us can do great things. But we can do small things with great love. Peace begins with a smile.",
    author: "Mother Teresa",
    title: "Saint & Missionary",
    initials: "MT",
    years: "1910–1997",
  },
  {
    text: "Faith is taking the first step even when you don't see the whole staircase. Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King Jr.",
    title: "Pastor & Civil Rights Leader",
    initials: "MLK",
    years: "1929–1968",
  },
  {
    text: "Prayer is not overcoming God's reluctance; it is laying hold of His highest willingness. The greatest thing anyone can do for God and for man is to pray.",
    author: "S.D. Gordon",
    title: "Devotional Writer",
    initials: "SDG",
    years: "1859–1936",
  },
];

export default function QuoteCarousel() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === active) return;
      setFading(true);
      setTimeout(() => {
        setActive(index);
        setFading(false);
      }, 350);
    },
    [active]
  );

  const prev = useCallback(() => {
    goTo((active - 1 + QUOTES.length) % QUOTES.length);
  }, [active, goTo]);

  const next = useCallback(() => {
    goTo((active + 1) % QUOTES.length);
  }, [active, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const q = QUOTES[active];

  return (
    <section
      style={{
        background: "#0a1a0e",
        padding: "100px 4vw",
        position: "relative",
        overflow: "hidden",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        borderBottom: "0.5px solid rgba(201,162,39,0.18)",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 600,
          background:
            "radial-gradient(ellipse, rgba(58,125,86,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Eyebrow */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
            Through the Ages
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              color: "#f2e6c8",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Wisdom that has
            <em style={{ fontStyle: "italic", color: "#e8c162" }}> outlasted centuries.</em>
          </h2>
        </div>

        {/* Quote card */}
        <div
          style={{
            background: "#0f2318",
            border: "0.5px solid rgba(201,162,39,0.2)",
            borderRadius: 4,
            padding: "3.5rem 3rem 3rem",
            position: "relative",
            minHeight: 300,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.35s ease",
            opacity: fading ? 0 : 1,
          }}
        >
          {/* Decorative quote mark */}
          <div
            style={{
              position: "absolute",
              top: "1.5rem",
              left: "2rem",
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "8rem",
              lineHeight: 1,
              color: "rgba(201,162,39,0.08)",
              pointerEvents: "none",
              userSelect: "none",
              fontStyle: "italic",
            }}
          >
            &ldquo;
          </div>

          {/* Avatar */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "rgba(201,162,39,0.12)",
              border: "0.5px solid rgba(201,162,39,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#c9a227",
              marginBottom: "2rem",
              flexShrink: 0,
            }}
          >
            {q.initials}
          </div>

          {/* Quote text */}
          <p
            style={{
              fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              color: "#f2e6c8",
              lineHeight: 1.6,
              textAlign: "center",
              maxWidth: 680,
              marginBottom: "2rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            &ldquo;{q.text}&rdquo;
          </p>

          {/* Author */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#c9a227",
                marginBottom: "0.2rem",
              }}
            >
              {q.author}
            </p>
            <p
              style={{
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9a8f72",
              }}
            >
              {q.title} &nbsp;·&nbsp; {q.years}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          <button
            onClick={prev}
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
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.3)";
            }}
            aria-label="Previous quote"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: "6px" }}>
            {QUOTES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === active ? 20 : 6,
                  height: 6,
                  borderRadius: 999,
                  border: "none",
                  background: i === active ? "#c9a227" : "rgba(201,162,39,0.22)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
                aria-label={`Go to quote ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
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
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.3)";
            }}
            aria-label="Next quote"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
