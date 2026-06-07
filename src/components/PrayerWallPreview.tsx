"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Send, Clock, Users, ChevronRight, Check } from "lucide-react";

const PRAYERS = [
  {
    id: 1,
    poster: "Sarah M.",
    initials: "SM",
    anonymous: false,
    timeAgo: "12 min ago",
    tag: "Health",
    prayCount: 47,
    text: "My mother was just diagnosed with stage 2 cancer. We are trusting God through this and believing in His healing power. Please stand with us in prayer for complete healing and peace for our family during this difficult season.",
  },
  {
    id: 2,
    poster: "Anonymous",
    initials: "A",
    anonymous: true,
    timeAgo: "28 min ago",
    tag: "Anxiety",
    prayCount: 89,
    text: "Struggling deeply with anxiety and depression. I know God has not left me, but the darkness feels overwhelming right now. Asking for prayers for peace that surpasses understanding and strength to take one day at a time.",
  },
  {
    id: 3,
    poster: "James K.",
    initials: "JK",
    anonymous: false,
    timeAgo: "1 hr ago",
    tag: "Work",
    prayCount: 23,
    text: "Facing possible layoffs at my company while trying to provide for three children. Praying for God's provision and open doors. I want to trust that He who has called me is faithful.",
  },
  {
    id: 4,
    poster: "Blessing A.",
    initials: "BA",
    anonymous: false,
    timeAgo: "2 hrs ago",
    tag: "Family",
    prayCount: 61,
    text: "My teenage son walked away from his faith six months ago and we barely speak now. I am holding onto Proverbs 22:6 and believing God for restoration. Please intercede for reconciliation in our home.",
  },
  {
    id: 5,
    poster: "Anonymous",
    initials: "A",
    anonymous: true,
    timeAgo: "3 hrs ago",
    tag: "Calling",
    prayCount: 35,
    text: "At a major crossroads — deciding whether to leave a stable career to pursue full-time ministry. I have felt the call for years but fear keeps me paralyzed. Praying for clarity and courage to step out in faith.",
  },
];

const TAG_COLORS: Record<string, string> = {
  Health: "#c0506a",
  Anxiety: "#7b2fbe",
  Work: "#3a7d56",
  Family: "#4a80d4",
  Calling: "#c9a227",
};

const PRAYED_STORAGE_KEY = "vine:prayer-wall:prayed";

export default function PrayerWallPreview() {
  const [prayed, setPrayed] = useState<Record<number, boolean>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const stored = localStorage.getItem(PRAYED_STORAGE_KEY);
      if (!stored) return {};
      const ids: number[] = JSON.parse(stored);
      return Object.fromEntries(ids.map((id) => [id, true]));
    } catch { return {}; }
  });
  const [counts, setCounts] = useState<Record<number, number>>(() => {
    const base = Object.fromEntries(PRAYERS.map((p) => [p.id, p.prayCount]));
    if (typeof window === "undefined") return base;
    try {
      const stored = localStorage.getItem(PRAYED_STORAGE_KEY);
      if (!stored) return base;
      const ids: number[] = JSON.parse(stored);
      const next = { ...base };
      ids.forEach((id) => { if (next[id] != null) next[id] += 1; });
      return next;
    } catch { return base; }
  });
  const [submitted, setSubmitted] = useState(false);

  const handlePray = (id: number) => {
    setPrayed((prev) => {
      const wasPrayed = prev[id];
      setCounts((c) => ({ ...c, [id]: wasPrayed ? c[id] - 1 : c[id] + 1 }));
      const next = { ...prev, [id]: !wasPrayed };
      try {
        const ids = Object.keys(next)
          .filter((key) => next[Number(key)])
          .map(Number);
        localStorage.setItem(PRAYED_STORAGE_KEY, JSON.stringify(ids));
      } catch {
        /* ignore storage failures */
      }
      return next;
    });
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
      id="prayer"
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "-10%",
          width: 500,
          height: 500,
          background: "radial-gradient(ellipse, rgba(58,125,86,0.08) 0%, transparent 65%)",
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
              Community Prayer
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
              The Prayer
              <em style={{ fontStyle: "italic", color: "#e8c162" }}> Wall.</em>
            </h2>
          </div>

          {/* Live counter */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#050e07",
              border: "0.5px solid rgba(201,162,39,0.2)",
              borderRadius: 2,
              padding: "0.8rem 1.2rem",
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#52a876",
                boxShadow: "0 0 8px rgba(82,168,118,0.7)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#f2e6c8",
              }}
            >
              1,247
            </span>
            <span
              style={{
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.78rem",
                color: "#9a8f72",
              }}
            >
              praying right now
            </span>
          </div>
        </div>

        {/* Prayer cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {PRAYERS.map((prayer) => {
            const hasPrayed = prayed[prayer.id];
            const count = counts[prayer.id];
            const tagColor = TAG_COLORS[prayer.tag] ?? "#c9a227";

            return (
              <div
                key={prayer.id}
                style={{
                  background: "#050e07",
                  border: "0.5px solid rgba(201,162,39,0.13)",
                  borderLeft: `2px solid ${tagColor}`,
                  borderRadius: 3,
                  padding: "1.4rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  position: "relative",
                  transition: "border-color 0.2s",
                }}
              >
                {/* Top row */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {/* Avatar */}
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "rgba(201,162,39,0.1)",
                      border: `0.5px solid ${tagColor}55`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      color: prayer.anonymous ? "#9a8f72" : "#c9a227",
                      flexShrink: 0,
                      opacity: prayer.anonymous ? 0.7 : 1,
                    }}
                  >
                    {prayer.anonymous ? "?" : prayer.initials}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-jost, system-ui, sans-serif)",
                        fontSize: "0.83rem",
                        fontWeight: 600,
                        color: prayer.anonymous ? "#9a8f72" : "#f2e6c8",
                        fontStyle: prayer.anonymous ? "italic" : "normal",
                      }}
                    >
                      {prayer.poster}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontFamily: "var(--font-jost, system-ui, sans-serif)",
                        fontSize: "0.68rem",
                        color: "#9a8f72",
                      }}
                    >
                      <Clock size={9} />
                      {prayer.timeAgo}
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.62rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: tagColor,
                      border: `0.5px solid ${tagColor}44`,
                      borderRadius: 1,
                      padding: "2px 8px",
                      flexShrink: 0,
                    }}
                  >
                    {prayer.tag}
                  </span>
                </div>

                {/* Prayer text */}
                <p
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.84rem",
                    color: "#c9b98a",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {prayer.text}
                </p>

                {/* Footer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "0.6rem",
                    borderTop: "0.5px solid rgba(201,162,39,0.08)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.72rem",
                      color: "#9a8f72",
                    }}
                  >
                    <Users size={11} />
                    <strong style={{ color: "#c9b98a" }}>{count}</strong>{" "}
                    praying
                  </div>

                  <button
                    onClick={() => handlePray(prayer.id)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 16px",
                      borderRadius: 2,
                      background: hasPrayed ? "rgba(201,162,39,0.14)" : "transparent",
                      border: hasPrayed
                        ? "0.5px solid rgba(201,162,39,0.5)"
                        : "0.5px solid rgba(201,162,39,0.2)",
                      color: hasPrayed ? "#c9a227" : "#9a8f72",
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <Heart size={11} fill={hasPrayed ? "#c9a227" : "none"} />
                    {hasPrayed ? "Prayed" : "Pray"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <button
            onClick={() => setSubmitted(true)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#c9a227",
              color: "#1a0e00",
              border: "none",
              padding: "0.9rem 2.2rem",
              borderRadius: 2,
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#e8c162"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#c9a227"; }}
          >
            {submitted ? <Check size={14} /> : <Send size={14} />}
            {submitted ? "Request Received" : "Submit Prayer Request"}
          </button>
          <Link
            href="/prayer-wall"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "0.9rem 2rem",
              borderRadius: 2,
              border: "0.5px solid rgba(201,162,39,0.25)",
              color: "#c9b98a",
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.82rem",
              fontWeight: 400,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.5)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.25)"; }}
          >
            View All Prayers <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
