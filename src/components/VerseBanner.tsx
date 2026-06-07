"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { bibleHref } from "@/lib/bibleRef";

const VERSES = [
  {
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
    book: "John",
    href: bibleHref("JHN", 3, 16),
  },
  {
    text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
    reference: "Psalm 23:1–3",
    book: "Psalms",
    href: bibleHref("PSA", 23, 1),
  },
  {
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    reference: "Romans 8:28",
    book: "Romans",
    href: bibleHref("ROM", 8, 28),
  },
  {
    text: "I can do all this through him who gives me strength.",
    reference: "Philippians 4:13",
    book: "Philippians",
    href: bibleHref("PHP", 4, 13),
  },
  {
    text: "\"For I know the plans I have for you,\" declares the Lord, \"plans to prosper you and not to harm you, plans to give you hope and a future.\"",
    reference: "Jeremiah 29:11",
    book: "Jeremiah",
    href: bibleHref("JER", 29, 11),
  },
  {
    text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    reference: "Isaiah 40:31",
    book: "Isaiah",
    href: bibleHref("ISA", 40, 31),
  },
  {
    text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart.",
    reference: "Matthew 11:28–29",
    book: "Matthew",
    href: bibleHref("MAT", 11, 28),
  },
];

const INTERVAL_MS = 6000;

export default function VerseBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setVisible(false);
      setTimeout(() => {
        setActiveIndex(index);
        setVisible(true);
      }, 380);
    },
    [activeIndex],
  );

  const prev = useCallback(
    () => goTo((activeIndex - 1 + VERSES.length) % VERSES.length),
    [activeIndex, goTo],
  );

  const next = useCallback(
    () => goTo((activeIndex + 1) % VERSES.length),
    [activeIndex, goTo],
  );

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % VERSES.length);
        setVisible(true);
      }, 380);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPaused]);

  const verse = VERSES[activeIndex];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #080f0a 0%, #0b1a0e 50%, #080f0a 100%)",
        borderTop: "1px solid rgba(201,162,39,0.2)",
        borderBottom: "1px solid rgba(201,162,39,0.2)",
        padding: "88px 4vw",
        textAlign: "center",
      }}
    >
      {/* Radial gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 75% at 50% 50%, rgba(201,162,39,0.06) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      {/* Dot grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(201,162,39,0.07) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          pointerEvents: "none",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Decorative giant quotation mark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -55,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "Georgia, serif",
          fontSize: "clamp(14rem, 28vw, 26rem)",
          fontWeight: 700,
          color: "rgba(201,162,39,0.035)",
          pointerEvents: "none",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        &ldquo;
      </div>

      {/* Top accent line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 100,
          height: 2,
          background: "linear-gradient(90deg, transparent, #c9a227, transparent)",
        }}
      />

      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Verse text */}
        <blockquote
          style={{
            fontFamily: "var(--font-cormorant, Georgia, serif)",
            fontStyle: "italic",
            fontSize: "clamp(1.5rem, 3vw, 2.55rem)",
            fontWeight: 300,
            color: "#f2e6c8",
            lineHeight: 1.55,
            margin: "0 auto 1.9rem",
            letterSpacing: "0.01em",
            minHeight: "5.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.38s ease, transform 0.38s ease",
          }}
        >
          &ldquo;{verse.text}&rdquo;
        </blockquote>

        {/* Reference row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.4rem",
            marginBottom: "2.2rem",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.38s ease 0.04s",
          }}
        >
          <div
            style={{
              width: 70,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(201,162,39,0.5))",
            }}
          />
          <cite
            style={{
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontStyle: "normal",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#c9a227",
            }}
          >
            {verse.reference}
          </cite>
          <div
            style={{
              width: 70,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(201,162,39,0.5), transparent)",
            }}
          />
        </div>

        {/* Read passage link */}
        <div
          style={{
            marginBottom: "3rem",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.38s ease 0.08s",
          }}
        >
          <Link
            href={verse.href}
            style={{
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              color: "#3a7d56",
              textDecoration: "none",
              borderBottom: "1px solid rgba(58,125,86,0.35)",
              paddingBottom: "2px",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#52a876";
              e.currentTarget.style.borderColor = "rgba(82,168,118,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#3a7d56";
              e.currentTarget.style.borderColor = "rgba(58,125,86,0.35)";
            }}
          >
            Read {verse.book} &rarr;
          </Link>
        </div>

        {/* Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.4rem",
          }}
        >
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous verse"
            style={{
              background: "none",
              border: "1px solid rgba(201,162,39,0.28)",
              borderRadius: "50%",
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "rgba(201,162,39,0.55)",
              transition: "all 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,162,39,0.75)";
              e.currentTarget.style.color = "#c9a227";
              e.currentTarget.style.background = "rgba(201,162,39,0.07)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,162,39,0.28)";
              e.currentTarget.style.color = "rgba(201,162,39,0.55)";
              e.currentTarget.style.background = "none";
            }}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M7 2L3 5.5 7 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dot indicators */}
          <div style={{ display: "flex", gap: "0.45rem", alignItems: "center" }}>
            {VERSES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Verse ${i + 1}`}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  lineHeight: 0,
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: i === activeIndex ? 22 : 6,
                    height: 6,
                    borderRadius: 3,
                    background:
                      i === activeIndex
                        ? "linear-gradient(90deg, #c9a227, #e8c162)"
                        : "rgba(201,162,39,0.22)",
                    boxShadow:
                      i === activeIndex
                        ? "0 0 8px rgba(201,162,39,0.45)"
                        : "none",
                    transition: "all 0.32s ease",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next verse"
            style={{
              background: "none",
              border: "1px solid rgba(201,162,39,0.28)",
              borderRadius: "50%",
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "rgba(201,162,39,0.55)",
              transition: "all 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,162,39,0.75)";
              e.currentTarget.style.color = "#c9a227";
              e.currentTarget.style.background = "rgba(201,162,39,0.07)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,162,39,0.28)";
              e.currentTarget.style.color = "rgba(201,162,39,0.55)";
              e.currentTarget.style.background = "none";
            }}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M4 2l4 3.5-4 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 100,
          height: 2,
          background: "linear-gradient(90deg, transparent, #c9a227, transparent)",
        }}
      />
    </section>
  );
}
