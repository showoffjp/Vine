"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const quotes = [
  {
    text: "You can never get a cup of tea large enough or a book long enough to suit me. Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
    author: "C.S. Lewis",
    title: "Author & Apologist",
    initials: "CSL",
    color: "#6B4FBB",
  },
  {
    text: "No matter how deep our darkness, He is deeper still. There is no pit so deep that God's love is not deeper still. The measure of a life is not its duration but its donation.",
    author: "Corrie ten Boom",
    title: "Holocaust Survivor & Author",
    initials: "CTB",
    color: "#00FF88",
  },
  {
    text: "We must be ready to allow ourselves to be interrupted by God. God will be constantly crossing our paths and canceling our plans by sending us people with claims and petitions.",
    author: "Dietrich Bonhoeffer",
    title: "Theologian & Martyr",
    initials: "DB",
    color: "#2E7D52",
  },
  {
    text: "If you judge people, you have no time to love them. Not all of us can do great things. But we can do small things with great love. Peace begins with a smile.",
    author: "Mother Teresa",
    title: "Saint & Missionary",
    initials: "MT",
    color: "#1565C0",
  },
  {
    text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that. Faith is taking the first step even when you don't see the whole staircase.",
    author: "Martin Luther King Jr.",
    title: "Pastor & Civil Rights Leader",
    initials: "MLK",
    color: "#B71C1C",
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
      }, 300);
    },
    [active]
  );

  const prev = useCallback(() => {
    goTo((active - 1 + quotes.length) % quotes.length);
  }, [active, goTo]);

  const next = useCallback(() => {
    goTo((active + 1) % quotes.length);
  }, [active, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const q = quotes[active];

  return (
    <section
      style={{
        background: "#07070F",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial gold glow background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,255,136,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section title */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p
            style={{
              color: "#00FF88",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Through the Ages
          </p>
          <h2
            style={{
              color: "#F2F2F8",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 900,
              margin: 0,
            }}
          >
            Wisdom Through the{" "}
            <span className="gold-gradient">Ages</span>
          </h2>
        </div>

        {/* Quote card */}
        <div
          style={{
            background: "#12121F",
            borderRadius: "24px",
            padding: "56px 48px 48px",
            border: "1px solid rgba(0,255,136,0.12)",
            boxShadow:
              "0 0 60px rgba(0,255,136,0.06), 0 0 0 1px rgba(0,255,136,0.06)",
            position: "relative",
            minHeight: "280px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.3s ease",
            opacity: fading ? 0 : 1,
          }}
        >
          {/* Quote icon */}
          <div
            style={{
              position: "absolute",
              top: "24px",
              left: "32px",
              color: "rgba(0,255,136,0.2)",
            }}
          >
            <Quote size={48} />
          </div>

          {/* Author avatar */}
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: q.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "0.05em",
              marginBottom: "28px",
              boxShadow: `0 0 24px ${q.color}44`,
              border: "3px solid rgba(255,255,255,0.15)",
              flexShrink: 0,
            }}
          >
            {q.initials}
          </div>

          {/* Quote text */}
          <p
            style={{
              color: "#F2F2F8",
              fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
              fontStyle: "italic",
              lineHeight: 1.75,
              textAlign: "center",
              maxWidth: "680px",
              marginBottom: "28px",
              margin: "0 0 28px",
            }}
          >
            &ldquo;{q.text}&rdquo;
          </p>

          {/* Author */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                color: "#00FF88",
                fontWeight: 700,
                fontSize: "1rem",
                marginBottom: "4px",
              }}
            >
              {q.author}
            </p>
            <p
              style={{
                color: "#8A8AA8",
                fontSize: "0.8rem",
              }}
            >
              {q.title}
            </p>
          </div>
        </div>

        {/* Navigation row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginTop: "32px",
          }}
        >
          {/* Prev */}
          <button
            onClick={prev}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid rgba(0,255,136,0.3)",
              background: "transparent",
              color: "#00FF88",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(0,255,136,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "transparent";
            }}
            aria-label="Previous quote"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: "8px" }}>
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "999px",
                  border: "none",
                  background:
                    i === active ? "#00FF88" : "rgba(0,255,136,0.25)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
                aria-label={`Go to quote ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid rgba(0,255,136,0.3)",
              background: "transparent",
              color: "#00FF88",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(0,255,136,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "transparent";
            }}
            aria-label="Next quote"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
