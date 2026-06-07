"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUp, MessageSquare, Bookmark, Share2, ChevronRight, Users, Check } from "lucide-react";

const DISCUSSIONS = [
  {
    hub: "Faith & Doubt",
    time: "3h ago",
    title:
      "How do you maintain faith when your prayers seem to go unanswered? Genuine question from a long-time believer.",
    preview:
      "I have been a believer for 15 years and I am going through the hardest season of my life. My wife and I have been praying for healing for two years and nothing has changed. I am not walking away but I am struggling...",
    votes: 2847,
    comments: 394,
    saved: 821,
    flair: "Discussion",
  },
  {
    hub: "Christian Life",
    time: "1h ago",
    title:
      "I rebuilt my morning routine entirely on Proverbs and it changed everything. Here is the breakdown.",
    preview:
      "5:30am — Silence and prayer (Psalm 46:10). 5:50am — One chapter of Scripture with coffee. 6:10am — Journal one gratitude and one trust. Six months in and the transformation is real...",
    votes: 5102,
    comments: 612,
    saved: 2304,
    flair: "Life Practice",
  },
  {
    hub: "Mental Health & Faith",
    time: "6h ago",
    title:
      "Christians who have gone to therapy — what was it like? Was it helpful? Did your faith factor in?",
    preview:
      "I have been struggling with anxiety for months and my pastor suggested therapy, but I am not sure how faith and clinical counseling intersect. Looking for real stories from believers who have been through it...",
    votes: 3490,
    comments: 501,
    saved: 1100,
    flair: "Wellness",
  },
];

const HUBS = [
  { name: "Faith & Doubt", members: "Active" },
  { name: "Daily Devotional", members: "Active" },
  { name: "Christian Parenting", members: "Active" },
  { name: "Life & Calling", members: "New" },
  { name: "Worship & Music", members: "New" },
  { name: "Mental Health", members: "Active" },
];

const VOTED_STORAGE_KEY = "vine:community:voted";
const SAVED_STORAGE_KEY = "vine:community:saved";

export default function CommunityPreview() {
  const [voted, setVoted] = useState<Record<number, boolean>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const v = localStorage.getItem(VOTED_STORAGE_KEY);
      return v ? Object.fromEntries((JSON.parse(v) as number[]).map((i) => [i, true])) : {};
    } catch { return {}; }
  });
  const [saved, setSaved] = useState<Record<number, boolean>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const s = localStorage.getItem(SAVED_STORAGE_KEY);
      return s ? Object.fromEntries((JSON.parse(s) as number[]).map((i) => [i, true])) : {};
    } catch { return {}; }
  });
  const [sharedIndex, setSharedIndex] = useState<number | null>(null);

  const persist = (key: string, map: Record<number, boolean>) => {
    try {
      const indexes = Object.keys(map)
        .filter((k) => map[Number(k)])
        .map(Number);
      localStorage.setItem(key, JSON.stringify(indexes));
    } catch {
      /* ignore storage failures */
    }
  };

  const toggleVote = (i: number) => {
    setVoted((prev) => {
      const next = { ...prev, [i]: !prev[i] };
      persist(VOTED_STORAGE_KEY, next);
      return next;
    });
  };

  const toggleSave = (i: number) => {
    setSaved((prev) => {
      const next = { ...prev, [i]: !prev[i] };
      persist(SAVED_STORAGE_KEY, next);
      return next;
    });
  };

  const handleShare = async (i: number, title: string) => {
    const url = typeof window !== "undefined" ? `${window.location.origin}/discussions` : "/discussions";
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
    } catch {
      /* user dismissed or unsupported */
      return;
    }
    setSharedIndex(i);
    setTimeout(() => setSharedIndex((cur) => (cur === i ? null : cur)), 1800);
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
      id="community"
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "-10%",
          width: 600,
          height: 600,
          background: "radial-gradient(ellipse, rgba(58,125,86,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
            Community Hubs
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
            Real conversations.
            <br />
            <em style={{ fontStyle: "italic", color: "#e8c162" }}>Real faith.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.95rem",
              color: "#9a8f72",
              fontWeight: 300,
              marginTop: "0.8rem",
              maxWidth: 480,
              lineHeight: 1.65,
            }}
          >
            Thousands of topic-specific hubs where Christians share openly,
            debate respectfully, and grow together.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "2.5rem" }}>
          {/* Left: Discussion Feed */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {DISCUSSIONS.map((post, i) => (
              <Link
                key={i}
                href="/discussions"
                style={{
                  display: "block",
                  background: "#050e07",
                  border: "0.5px solid rgba(201,162,39,0.13)",
                  borderRadius: 3,
                  padding: "1.5rem",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.13)";
                }}
              >
                {/* Hub + time + flair */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.7rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#c9a227",
                    }}
                  >
                    {post.hub}
                  </span>
                  <span style={{ color: "rgba(201,162,39,0.25)", fontSize: "0.7rem" }}>·</span>
                  <span
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.7rem",
                      color: "#9a8f72",
                    }}
                  >
                    {post.time}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      color: "#9a8f72",
                      border: "0.5px solid rgba(201,162,39,0.18)",
                      borderRadius: 1,
                      padding: "2px 8px",
                    }}
                  >
                    {post.flair}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "#f2e6c8",
                    lineHeight: 1.35,
                    marginBottom: "0.5rem",
                  }}
                >
                  {post.title}
                </h3>

                {/* Preview */}
                <p
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.82rem",
                    color: "#9a8f72",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical" as const,
                    overflow: "hidden",
                  }}
                >
                  {post.preview}
                </p>

                {/* Actions */}
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleVote(i);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "#c9a227",
                      background: voted[i] ? "rgba(201,162,39,0.18)" : "rgba(201,162,39,0.07)",
                      border: voted[i]
                        ? "0.5px solid rgba(201,162,39,0.5)"
                        : "0.5px solid rgba(201,162,39,0.2)",
                      borderRadius: 2,
                      padding: "4px 10px",
                      cursor: "pointer",
                    }}
                  >
                    <ArrowUp size={11} />
                    {(post.votes + (voted[i] ? 1 : 0)).toLocaleString()}
                  </button>
                  {[
                    { Icon: MessageSquare, val: post.comments, kind: "comment" as const },
                    { Icon: Bookmark, val: post.saved, kind: "save" as const },
                  ].map(({ Icon, val, kind }, j) => {
                    const isSave = kind === "save";
                    const active = isSave && saved[i];
                    const displayVal = isSave && saved[i] ? post.saved + 1 : val;
                    return (
                      <button
                        key={j}
                        onClick={
                          isSave
                            ? (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleSave(i);
                              }
                            : undefined
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          fontFamily: "var(--font-jost, system-ui, sans-serif)",
                          fontSize: "0.72rem",
                          color: active ? "#c9a227" : "#9a8f72",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <Icon size={11} fill={active ? "#c9a227" : "none"} />
                        {typeof displayVal === "number" ? displayVal.toLocaleString() : displayVal}
                      </button>
                    );
                  })}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleShare(i, post.title);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.72rem",
                      color: sharedIndex === i ? "#c9a227" : "#9a8f72",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      marginLeft: "auto",
                    }}
                  >
                    {sharedIndex === i ? <Check size={11} /> : <Share2 size={11} />}
                    {sharedIndex === i ? "Copied!" : "Share"}
                  </button>
                </div>
              </Link>
            ))}

            <Link
              href="/discussions"
              style={{
                display: "block",
                textAlign: "center",
                padding: "0.8rem",
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#c9a227",
                border: "0.5px solid rgba(201,162,39,0.25)",
                borderRadius: 2,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,162,39,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              View All Discussions
            </Link>
          </div>

          {/* Right: Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {/* Trending Hubs */}
            <div
              style={{
                background: "#050e07",
                border: "0.5px solid rgba(201,162,39,0.13)",
                borderRadius: 3,
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#f2e6c8",
                  marginBottom: "1.2rem",
                }}
              >
                Trending Hubs
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {HUBS.map((hub, i) => (
                  <Link
                    key={i}
                    href="/groups"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.6rem 0",
                      borderBottom: i < HUBS.length - 1 ? "0.5px solid rgba(201,162,39,0.08)" : "none",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jost, system-ui, sans-serif)",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          color: "rgba(201,162,39,0.4)",
                          minWidth: 16,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-jost, system-ui, sans-serif)",
                            fontSize: "0.83rem",
                            fontWeight: 500,
                            color: "#c9b98a",
                          }}
                        >
                          {hub.name}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-jost, system-ui, sans-serif)",
                            fontSize: "0.68rem",
                            color: "#9a8f72",
                          }}
                        >
                          {hub.members} community
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={12} style={{ color: "rgba(201,162,39,0.3)" }} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Online now */}
            <div
              style={{
                background: "#050e07",
                border: "0.5px solid rgba(201,162,39,0.13)",
                borderRadius: 3,
                padding: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1rem" }}>
                <Users size={14} style={{ color: "#3a7d56" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#f2e6c8",
                  }}
                >
                  Christians Online Now
                </h3>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex" }}>
                  {["#c9a227", "#3a7d56", "#52a876", "#e8c162", "#1a3d26"].map((c, i) => (
                    <div
                      key={i}
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: c,
                        border: "2px solid #050e07",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-jost, system-ui, sans-serif)",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        color: "#050e07",
                        marginLeft: i > 0 ? -8 : 0,
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#f2e6c8",
                    }}
                  >
                    3,842 online
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.7rem",
                      color: "#9a8f72",
                    }}
                  >
                    from 47 countries
                  </p>
                </div>
              </div>
            </div>

            {/* Join CTA card */}
            <div
              style={{
                background: "#0f2318",
                border: "0.5px solid rgba(201,162,39,0.2)",
                borderRadius: 3,
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                  fontStyle: "italic",
                  fontSize: "1.1rem",
                  color: "#f2e6c8",
                  marginBottom: "0.6rem",
                  lineHeight: 1.4,
                }}
              >
                Join the conversation
              </p>
              <p
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.78rem",
                  color: "#9a8f72",
                  marginBottom: "1.2rem",
                  lineHeight: 1.5,
                }}
              >
                Create your free account to post, vote, and connect with
                thousands of Christians worldwide.
              </p>
              <Link
                href="/feed"
                style={{
                  display: "block",
                  background: "#c9a227",
                  color: "#1a0e00",
                  padding: "0.7rem",
                  borderRadius: 2,
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#e8c162";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#c9a227";
                }}
              >
                Join Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
