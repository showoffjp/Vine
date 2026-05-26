"use client";

import { useState, useMemo } from "react";
import { Search, Hash } from "lucide-react";

type Topic = {
  label: string;
  color: string;
};

const ALL_TOPICS: Topic[] = [
  { label: "Addiction", color: "#B71C1C" },
  { label: "Anxiety", color: "#6B4FBB" },
  { label: "Apologetics", color: "#1565C0" },
  { label: "Baptism", color: "#2E7D52" },
  { label: "Bible Study", color: "#00FF88" },
  { label: "Career", color: "#2E7D52" },
  { label: "Community", color: "#6B4FBB" },
  { label: "Creation", color: "#1565C0" },
  { label: "Dating", color: "#B71C1C" },
  { label: "Depression", color: "#6B4FBB" },
  { label: "Devotionals", color: "#00FF88" },
  { label: "Doubt", color: "#8A8AA8" },
  { label: "End Times", color: "#B71C1C" },
  { label: "Evangelism", color: "#00FF88" },
  { label: "Family", color: "#1565C0" },
  { label: "Fasting", color: "#6B4FBB" },
  { label: "Finance", color: "#2E7D52" },
  { label: "Forgiveness", color: "#00FF88" },
  { label: "Grief", color: "#8A8AA8" },
  { label: "Grace", color: "#00FF88" },
  { label: "Holy Spirit", color: "#6B4FBB" },
  { label: "Hope", color: "#2E7D52" },
  { label: "Identity", color: "#1565C0" },
  { label: "Integrity", color: "#2E7D52" },
  { label: "Jesus", color: "#00FF88" },
  { label: "Leadership", color: "#1565C0" },
  { label: "Love", color: "#B71C1C" },
  { label: "Marriage", color: "#B71C1C" },
  { label: "Mental Health", color: "#6B4FBB" },
  { label: "Ministry", color: "#00FF88" },
  { label: "Miracles", color: "#2E7D52" },
  { label: "Missions", color: "#1565C0" },
  { label: "Parenting", color: "#1565C0" },
  { label: "Prayer", color: "#6B4FBB" },
  { label: "Prophecy", color: "#B71C1C" },
  { label: "Purpose", color: "#00FF88" },
  { label: "Relationships", color: "#B71C1C" },
  { label: "Repentance", color: "#8A8AA8" },
  { label: "Resurrection", color: "#00FF88" },
  { label: "Salvation", color: "#2E7D52" },
  { label: "Sanctification", color: "#6B4FBB" },
  { label: "Scripture", color: "#00FF88" },
  { label: "Serving", color: "#2E7D52" },
  { label: "Sexuality", color: "#8A8AA8" },
  { label: "Suffering", color: "#8A8AA8" },
  { label: "Theology", color: "#1565C0" },
  { label: "Trinity", color: "#00FF88" },
  { label: "Trust", color: "#6B4FBB" },
  { label: "Unity", color: "#2E7D52" },
  { label: "Worship", color: "#00FF88" },
  { label: "Youth", color: "#6B4FBB" },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function TopicBrowser() {
  const [activeLetter, setActiveLetter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let topics = ALL_TOPICS;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      topics = topics.filter((t) => t.label.toLowerCase().includes(q));
    } else if (activeLetter !== "All") {
      topics = topics.filter((t) =>
        t.label.toUpperCase().startsWith(activeLetter)
      );
    }
    return topics;
  }, [activeLetter, searchQuery]);

  const handleLetterClick = (letter: string) => {
    setActiveLetter(letter);
    setSearchQuery("");
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
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(0,255,136,0.04) 0%, transparent 70%)",
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
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "12px",
              padding: "5px 14px",
              borderRadius: "999px",
              background: "rgba(0,255,136,0.08)",
              border: "1px solid rgba(0,255,136,0.2)",
            }}
          >
            <Hash size={13} style={{ color: "#00FF88" }} />
            <span
              style={{
                color: "#00FF88",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              50+ Topics
            </span>
          </div>
          <h2
            style={{
              color: "#F2F2F8",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              fontWeight: 900,
              marginBottom: "12px",
            }}
          >
            Explore Every <span className="gold-gradient">Topic</span>
          </h2>
          <p
            style={{
              color: "#8A8AA8",
              fontSize: "1rem",
              lineHeight: 1.6,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Find discussions, resources, and community around every aspect of
            the Christian life.
          </p>
        </div>

        {/* Search bar */}
        <div
          style={{
            maxWidth: "480px",
            margin: "0 auto 36px",
            position: "relative",
          }}
        >
          <Search
            size={16}
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#6A6A88",
              pointerEvents: "none",
            }}
          />
          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value) setActiveLetter("All");
            }}
            style={{
              width: "100%",
              padding: "13px 16px 13px 44px",
              borderRadius: "12px",
              background: "#12121F",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#F2F2F8",
              fontSize: "0.9rem",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "rgba(0,255,136,0.4)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.08)";
            }}
          />
        </div>

        {/* Alphabet pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          {/* All button */}
          <button
            onClick={() => handleLetterClick("All")}
            style={{
              padding: "6px 14px",
              borderRadius: "8px",
              border:
                activeLetter === "All" && !searchQuery
                  ? "1px solid rgba(0,255,136,0.6)"
                  : "1px solid rgba(255,255,255,0.06)",
              background:
                activeLetter === "All" && !searchQuery
                  ? "rgba(0,255,136,0.12)"
                  : "transparent",
              color:
                activeLetter === "All" && !searchQuery ? "#00FF88" : "#6A6A88",
              fontSize: "0.75rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            All
          </button>

          {ALPHABET.map((letter) => {
            const hasTopics = ALL_TOPICS.some((t) =>
              t.label.toUpperCase().startsWith(letter)
            );
            const isActive = activeLetter === letter && !searchQuery;
            return (
              <button
                key={letter}
                onClick={() => hasTopics && handleLetterClick(letter)}
                disabled={!hasTopics}
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "8px",
                  border: isActive
                    ? "1px solid rgba(0,255,136,0.6)"
                    : "1px solid rgba(255,255,255,0.06)",
                  background: isActive
                    ? "rgba(0,255,136,0.12)"
                    : "transparent",
                  color: isActive
                    ? "#00FF88"
                    : hasTopics
                    ? "#8A8AA8"
                    : "#2A2A3A",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  cursor: hasTopics ? "pointer" : "default",
                  transition: "all 0.15s",
                }}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Result count */}
        <p
          style={{
            color: "#6A6A88",
            fontSize: "0.78rem",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          {searchQuery
            ? `${filtered.length} topic${filtered.length !== 1 ? "s" : ""} matching "${searchQuery}"`
            : activeLetter === "All"
            ? `Showing all ${filtered.length} topics`
            : `${filtered.length} topic${filtered.length !== 1 ? "s" : ""} starting with "${activeLetter}"`}
        </p>

        {/* Topics cloud */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {filtered.map((topic) => (
            <button
              key={topic.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "9px 18px",
                borderRadius: "999px",
                background: `${topic.color}14`,
                border: `1px solid ${topic.color}35`,
                color: topic.color,
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.background = `${topic.color}28`;
                btn.style.borderColor = `${topic.color}60`;
                btn.style.transform = "translateY(-1px)";
                btn.style.boxShadow = `0 4px 12px ${topic.color}30`;
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.background = `${topic.color}14`;
                btn.style.borderColor = `${topic.color}35`;
                btn.style.transform = "translateY(0)";
                btn.style.boxShadow = "none";
              }}
            >
              <Hash size={12} />
              {topic.label}
            </button>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "48px 20px",
              color: "#6A6A88",
            }}
          >
            <Hash size={36} style={{ margin: "0 auto 12px", opacity: 0.3 }} />
            <p>No topics found for &ldquo;{searchQuery}&rdquo;</p>
          </div>
        )}

        {/* Browse CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p
            style={{
              color: "#6A6A88",
              fontSize: "0.85rem",
              marginBottom: "16px",
            }}
          >
            Don&apos;t see your topic? Request it from the community.
          </p>
          <button
            className="btn-outline-gold"
            style={{
              padding: "12px 28px",
              borderRadius: "12px",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            + Suggest a Topic
          </button>
        </div>
      </div>
    </section>
  );
}
