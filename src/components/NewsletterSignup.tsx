"use client";

import { useState } from "react";
import { Mail, BookOpen, Flame, Lightbulb, Trophy, CheckCircle2, ArrowRight } from "lucide-react";

const BENEFITS = [
  {
    icon: BookOpen,
    title: "Verse of the Week",
    desc: "A carefully chosen Scripture with reflection to anchor your week.",
  },
  {
    icon: Flame,
    title: "Top Discussion",
    desc: "The most engaging faith conversation from the Vine community.",
  },
  {
    icon: Lightbulb,
    title: "Life Hack",
    desc: "One practical tip where faith meets everyday life.",
  },
  {
    icon: Trophy,
    title: "Weekly Challenge",
    desc: "A 7-day spiritual growth challenge to grow in community.",
  },
];

const PREVIEW_ROWS = [
  { label: "THIS WEEK'S VERSE", value: "Philippians 4:13 — I can do all things through Christ who strengthens me." },
  { label: "TOP DISCUSSION", value: '"How do you pray when God feels silent?" — 1,240 replies' },
  { label: "LIFE HACK", value: "Schedule your quiet time before your phone time. It changes everything." },
  { label: "CHALLENGE", value: "Day 4 of 7 Days of Intentional Prayer — Intercession for Others" },
];

const AVATAR_INITIALS = ["JR", "AK", "ML", "ST", "PO"];

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
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
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 600,
          background: "radial-gradient(ellipse, rgba(58,125,86,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        {/* Icon badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 3,
            background: "rgba(201,162,39,0.12)",
            border: "0.5px solid rgba(201,162,39,0.35)",
            marginBottom: "1.5rem",
          }}
        >
          <Mail size={22} style={{ color: "#c9a227" }} />
        </div>

        <div className="vine-eyebrow" style={{ marginBottom: "1rem" }}>
          Free Weekly Newsletter
        </div>

        <h2
          style={{
            fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            fontWeight: 300,
            color: "#f2e6c8",
            lineHeight: 1.15,
            marginBottom: "1rem",
          }}
        >
          The
          <em style={{ fontStyle: "italic", color: "#e8c162" }}> Vine Weekly.</em>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-jost, system-ui, sans-serif)",
            fontSize: "0.95rem",
            color: "#9a8f72",
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 2.5rem",
          }}
        >
          Every Sunday morning: your verse, top discussion, life hack, and
          weekly challenge — delivered straight to your inbox.
        </p>

        {/* Benefits grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
            textAlign: "left",
          }}
        >
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                style={{
                  background: "#050e07",
                  border: "0.5px solid rgba(201,162,39,0.13)",
                  borderRadius: 3,
                  padding: "1.2rem",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 2,
                    background: "rgba(201,162,39,0.08)",
                    border: "0.5px solid rgba(201,162,39,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.8rem",
                  }}
                >
                  <Icon size={16} style={{ color: "#c9a227" }} />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "#f2e6c8",
                    marginBottom: "0.3rem",
                  }}
                >
                  {b.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.75rem",
                    color: "#9a8f72",
                    lineHeight: 1.5,
                    fontWeight: 300,
                  }}
                >
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Email form */}
        {submitted ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              padding: "2rem",
              background: "rgba(58,125,86,0.08)",
              border: "0.5px solid rgba(58,125,86,0.3)",
              borderRadius: 3,
              marginBottom: "2rem",
            }}
          >
            <CheckCircle2 size={36} style={{ color: "#52a876" }} />
            <h3
              style={{
                fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                fontStyle: "italic",
                fontSize: "1.3rem",
                color: "#f2e6c8",
              }}
            >
              You&apos;re in! Welcome to The Vine Weekly.
            </h3>
            <p
              style={{
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.82rem",
                color: "#9a8f72",
              }}
            >
              Check your inbox Sunday morning. Your first edition arrives this weekend.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              gap: 10,
              maxWidth: 520,
              margin: "0 auto 2rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ position: "relative", flex: 1, minWidth: 220 }}>
              <Mail
                size={14}
                style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9a8f72",
                  pointerEvents: "none",
                }}
              />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "13px 14px 13px 40px",
                  borderRadius: 2,
                  background: "#050e07",
                  border: "0.5px solid rgba(201,162,39,0.2)",
                  color: "#f2e6c8",
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.88rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(201,162,39,0.5)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(201,162,39,0.2)";
                }}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "13px 1.8rem",
                borderRadius: 2,
                background: "#c9a227",
                color: "#1a0e00",
                border: "none",
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: loading ? "wait" : "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                whiteSpace: "nowrap",
                opacity: loading ? 0.8 : 1,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "#e8c162";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#c9a227";
              }}
            >
              {loading ? "Subscribing..." : "Subscribe Free"}
              {!loading && <ArrowRight size={14} />}
            </button>
          </form>
        )}

        {/* Social proof */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex" }}>
            {AVATAR_INITIALS.map((initials, i) => (
              <div
                key={initials}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(201,162,39,0.15)",
                  border: "2px solid #0a1a0e",
                  marginLeft: i === 0 ? 0 : -8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.52rem",
                  fontWeight: 700,
                  color: "#c9a227",
                  zIndex: AVATAR_INITIALS.length - i,
                  position: "relative",
                }}
              >
                {initials}
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.82rem",
              color: "#9a8f72",
            }}
          >
            <strong style={{ color: "#f2e6c8" }}>Join 18,000+</strong> Christians already subscribed
          </p>
        </div>

        {/* Newsletter preview */}
        <div
          style={{
            background: "#050e07",
            border: "0.5px solid rgba(201,162,39,0.18)",
            borderRadius: 3,
            padding: "1.8rem 2rem",
            textAlign: "left",
            maxWidth: 500,
            margin: "0 auto 2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 20,
              background: "rgba(201,162,39,0.12)",
              border: "0.5px solid rgba(201,162,39,0.25)",
              borderTop: "none",
              borderRadius: "0 0 3px 3px",
              padding: "2px 10px",
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#c9a227",
            }}
          >
            Preview
          </div>

          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: "1.2rem",
              paddingBottom: "1rem",
              borderBottom: "0.5px solid rgba(201,162,39,0.1)",
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 3,
                background: "rgba(201,162,39,0.12)",
                border: "0.5px solid rgba(201,162,39,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#c9a227",
              }}
            >
              TV
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "#f2e6c8",
                }}
              >
                The Vine Weekly
              </p>
              <p
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.67rem",
                  color: "#9a8f72",
                }}
              >
                Sunday Edition · Jun 1, 2025
              </p>
            </div>
          </div>

          {PREVIEW_ROWS.map((row) => (
            <div
              key={row.label}
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 12,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 2,
                  minHeight: 36,
                  borderRadius: 999,
                  background: "rgba(201,162,39,0.4)",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.52rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#c9a227",
                    marginBottom: 2,
                  }}
                >
                  {row.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.75rem",
                    color: "#c9b98a",
                    lineHeight: 1.5,
                    fontWeight: 300,
                  }}
                >
                  {row.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-jost, system-ui, sans-serif)",
            fontSize: "0.72rem",
            color: "#9a8f72",
            lineHeight: 1.6,
          }}
        >
          No spam. Unsubscribe anytime. Built with love for the global church.
        </p>
      </div>
    </section>
  );
}
