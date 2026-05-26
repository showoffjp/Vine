"use client";

import { useState } from "react";
import { Mail, BookOpen, Lightbulb, Flame, Trophy, CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: <BookOpen size={18} />,
    title: "Verse of the Week",
    desc: "A carefully chosen Scripture with reflection to anchor your week.",
    color: "#D4AF37",
  },
  {
    icon: <Flame size={18} />,
    title: "Top Discussion",
    desc: "The most engaging faith conversation from the Vine community.",
    color: "#B71C1C",
  },
  {
    icon: <Lightbulb size={18} />,
    title: "Life Hack",
    desc: "One practical tip where faith meets everyday life.",
    color: "#2E7D52",
  },
  {
    icon: <Trophy size={18} />,
    title: "Weekly Challenge",
    desc: "A 7-day spiritual growth challenge to grow in community.",
    color: "#6B4FBB",
  },
];

const avatarColors = ["#6B4FBB", "#D4AF37", "#2E7D52", "#B71C1C", "#1565C0"];
const avatarInitials = ["JR", "AK", "ML", "ST", "PO"];

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
        background: "#07070F",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Layered background glows */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 40% 40% at 20% 80%, rgba(107,79,187,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px",
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
            width: "64px",
            height: "64px",
            borderRadius: "18px",
            background: "linear-gradient(135deg, #C9A227 0%, #E8C840 100%)",
            marginBottom: "24px",
            boxShadow: "0 0 40px rgba(212,175,55,0.3)",
          }}
        >
          <Mail size={28} style={{ color: "#07070F" }} />
        </div>

        {/* Eyebrow */}
        <p
          style={{
            color: "#D4AF37",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Free Weekly Newsletter
        </p>

        {/* Headline */}
        <h2
          style={{
            color: "#F2F2F8",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: "20px",
            letterSpacing: "-0.01em",
          }}
        >
          The <span className="gold-gradient">Vine Weekly</span>
        </h2>

        {/* Subheadline */}
        <p
          style={{
            color: "#8A8AA8",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            maxWidth: "580px",
            margin: "0 auto 40px",
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
            gap: "16px",
            marginBottom: "44px",
            textAlign: "left",
          }}
        >
          {benefits.map((b) => (
            <div
              key={b.title}
              style={{
                background: "#12121F",
                borderRadius: "14px",
                padding: "18px",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: `${b.color}18`,
                  border: `1px solid ${b.color}35`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: b.color,
                  marginBottom: "12px",
                }}
              >
                {b.icon}
              </div>
              <p
                style={{
                  color: "#F2F2F8",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                {b.title}
              </p>
              <p
                style={{
                  color: "#6A6A88",
                  fontSize: "0.75rem",
                  lineHeight: 1.5,
                }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Email form */}
        {submitted ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              padding: "32px",
              background: "rgba(46,125,82,0.1)",
              border: "1px solid rgba(46,125,82,0.3)",
              borderRadius: "16px",
              marginBottom: "32px",
            }}
          >
            <CheckCircle2 size={40} style={{ color: "#4CAF50" }} />
            <h3
              style={{
                color: "#F2F2F8",
                fontSize: "1.2rem",
                fontWeight: 700,
              }}
            >
              You&apos;re in! Welcome to The Vine Weekly.
            </h3>
            <p style={{ color: "#8A8AA8", fontSize: "0.85rem" }}>
              Check your inbox Sunday morning. Your first edition arrives this
              weekend.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              gap: "12px",
              maxWidth: "520px",
              margin: "0 auto 32px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ position: "relative", flex: 1, minWidth: "220px" }}>
              <Mail
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
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "15px 16px 15px 44px",
                  borderRadius: "12px",
                  background: "#12121F",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#F2F2F8",
                  fontSize: "0.95rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(212,175,55,0.5)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                }}
              />
            </div>
            <button
              type="submit"
              className="btn-gold"
              disabled={loading}
              style={{
                padding: "15px 28px",
                borderRadius: "12px",
                fontSize: "0.95rem",
                fontWeight: 700,
                cursor: loading ? "wait" : "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                whiteSpace: "nowrap",
                opacity: loading ? 0.8 : 1,
              }}
            >
              {loading ? "Subscribing..." : "Subscribe Free"}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>
        )}

        {/* Social proof */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          {/* Avatar stack */}
          <div style={{ display: "flex" }}>
            {avatarInitials.map((initials, i) => (
              <div
                key={initials}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: avatarColors[i],
                  border: "2px solid #07070F",
                  marginLeft: i === 0 ? "0" : "-10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "0.55rem",
                  fontWeight: 800,
                  zIndex: avatarInitials.length - i,
                  position: "relative",
                }}
              >
                {initials}
              </div>
            ))}
          </div>
          <p style={{ color: "#8A8AA8", fontSize: "0.85rem" }}>
            <strong style={{ color: "#F2F2F8" }}>Join 18,000+</strong>{" "}
            Christians already subscribed
          </p>
        </div>

        {/* Newsletter preview */}
        <div
          style={{
            background: "#12121F",
            borderRadius: "20px",
            padding: "28px 32px",
            border: "1px solid rgba(212,175,55,0.12)",
            textAlign: "left",
            maxWidth: "520px",
            margin: "0 auto 36px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Preview label */}
          <div
            style={{
              position: "absolute",
              top: "-1px",
              right: "20px",
              background: "rgba(212,175,55,0.12)",
              border: "1px solid rgba(212,175,55,0.25)",
              borderTop: "none",
              borderRadius: "0 0 8px 8px",
              padding: "3px 12px",
              color: "#D4AF37",
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Preview
          </div>

          {/* Mock newsletter header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #C9A227 0%, #E8C840 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: "1rem" }}>🍇</span>
            </div>
            <div>
              <p
                style={{
                  color: "#F2F2F8",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                }}
              >
                The Vine Weekly
              </p>
              <p style={{ color: "#6A6A88", fontSize: "0.7rem" }}>
                Sunday Edition · May 25, 2025
              </p>
            </div>
          </div>

          {/* Mock content rows */}
          {[
            { label: "THIS WEEK'S VERSE", value: "Philippians 4:13 — I can do all things through Christ who strengthens me.", color: "#D4AF37" },
            { label: "TOP DISCUSSION", value: "\"How do you pray when God feels silent?\" — 1,240 replies", color: "#6B4FBB" },
            { label: "LIFE HACK", value: "Schedule your quiet time before your phone time. It changes everything.", color: "#2E7D52" },
            { label: "CHALLENGE", value: "Day 4 of 7 Days of Intentional Prayer — Intercession for Others", color: "#B71C1C" },
          ].map((row) => (
            <div
              key={row.label}
              style={{
                display: "flex",
                gap: "12px",
                marginBottom: "12px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "3px",
                  height: "100%",
                  minHeight: "40px",
                  borderRadius: "999px",
                  background: row.color,
                  flexShrink: 0,
                  opacity: 0.7,
                }}
              />
              <div>
                <p
                  style={{
                    color: row.color,
                    fontSize: "0.55rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}
                >
                  {row.label}
                </p>
                <p
                  style={{
                    color: "#D4D4E8",
                    fontSize: "0.78rem",
                    lineHeight: 1.5,
                  }}
                >
                  {row.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p
          style={{
            color: "#6A6A88",
            fontSize: "0.78rem",
            lineHeight: 1.6,
          }}
        >
          No spam. Unsubscribe anytime. Built with love for the global church. 🌍
        </p>
      </div>
    </section>
  );
}
