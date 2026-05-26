import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Users,
  TrendingUp,
  Shield,
  Globe,
  Heart,
  Lightbulb,
  Palette,
  Brain,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Vine",
  description:
    "Learn about Vine — why we built it, what we believe, and who it's for. Built on John 15:5, the world's first all-in-one Christian platform.",
};

const pillars = [
  {
    icon: BookOpen,
    title: "Truth",
    color: "#00FF88",
    desc: "We never compromise biblical truth for popularity. The Word of God is the foundation of everything on Vine.",
  },
  {
    icon: Users,
    title: "Community",
    color: "#6B4FBB",
    desc: "You were never meant to walk alone. Vine connects you with believers across every culture, language, and tradition.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    color: "#4FBBAA",
    desc: "We believe faith without growth is faith asleep. Vine exists to make you more like Jesus — not just more comfortable.",
  },
  {
    icon: Shield,
    title: "Safety",
    color: "#BB4F7A",
    desc: "This is a place where you can be honest, ask hard questions, and struggle without judgment. Grace is the rule here.",
  },
];

const values = [
  {
    icon: BookOpen,
    title: "Biblical Authority",
    color: "#00FF88",
    desc: "Scripture is our final word. Every feature, policy, and piece of content is measured against it.",
  },
  {
    icon: Heart,
    title: "Radical Hospitality",
    color: "#BB4F7A",
    desc: "Whoever you are, wherever you've been — there is a seat for you at this table.",
  },
  {
    icon: Lightbulb,
    title: "Intellectual Honesty",
    color: "#4F8FBB",
    desc: "Faith and reason belong together. We welcome hard questions, honest doubt, and rigorous thinking.",
  },
  {
    icon: Globe,
    title: "Cultural Diversity",
    color: "#4FBBAA",
    desc: "The body of Christ spans every nation. We celebrate every culture as a reflection of God's creativity.",
  },
  {
    icon: Brain,
    title: "Mental Health Dignity",
    color: "#6B4FBB",
    desc: "Struggling emotionally is not a sign of weak faith. We hold space for the full human experience.",
  },
  {
    icon: Palette,
    title: "Creative Excellence",
    color: "#BB7A4F",
    desc: "We serve a creative God. Everything we build is crafted with care, beauty, and intentionality.",
  },
];

const forTypes = [
  {
    emoji: "🌱",
    title: "The New Believer",
    desc: "Just starting your faith journey? Vine gives you a safe, guided space to grow without shame.",
  },
  {
    emoji: "🤔",
    title: "The Doubter",
    desc: "Questions don't scare us — they're how faith grows stronger and more honest.",
  },
  {
    emoji: "📚",
    title: "The Theologian",
    desc: "Deep dives, scholarly discussions, and rigorous Bible study are alive and well here.",
  },
  {
    emoji: "🎵",
    title: "The Worship Leader",
    desc: "Connect with fellow worshippers, share resources, and lead people into God's presence.",
  },
  {
    emoji: "💔",
    title: "The Struggling Christian",
    desc: "Vine is built for honesty — your story, including the hard parts, belongs here.",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "The Busy Parent",
    desc: "Faith-filled tools designed for real life — quick devotionals, family hacks, and a village online.",
  },
  {
    emoji: "🔥",
    title: "The Young Adult",
    desc: "Navigate faith, identity, career, and relationships with a community that gets it.",
  },
  {
    emoji: "🌍",
    title: "The Global Christian",
    desc: "From Lagos to Manila to São Paulo — your expression of faith is welcome and valued here.",
  },
];

const team = [
  {
    initials: "KO",
    name: "Kwame Osei-Mensah",
    role: "Co-Founder & CEO",
    color: "#00FF88",
    fact: "Grew up singing hymns in Accra and still memorizes one new Psalm every month.",
  },
  {
    initials: "LR",
    name: "Luisa Reyes-Torres",
    role: "Co-Founder & CPO",
    color: "#6B4FBB",
    fact: "Former youth pastor from Guadalajara who believes great design is an act of worship.",
  },
  {
    initials: "NP",
    name: "Nathan Patel",
    role: "CTO",
    color: "#4F8FBB",
    fact: "Second-generation Indian Christian who built his first Bible app at age 17.",
  },
  {
    initials: "AF",
    name: "Amara Fofana",
    role: "Head of Community",
    color: "#4FBBAA",
    fact: "Grew up in a Muslim household in Dakar and came to faith at 23 — her story shaped how Vine welcomes newcomers.",
  },
  {
    initials: "EV",
    name: "Elena Voronova",
    role: "Head of Theology & Content",
    color: "#BB4F7A",
    fact: "Orthodox theologian from Kyiv who holds a master's in Patristics and loves C.S. Lewis above all commentators.",
  },
  {
    initials: "MJ",
    name: "Marcus Johnson",
    role: "Head of Design",
    color: "#BB7A4F",
    fact: "Atlanta-born creative director who once turned a prison ministry newsletter into an award-winning publication.",
  },
];

const stats = [
  { num: "12,847", label: "Members" },
  { num: "5,000+", label: "Resources" },
  { num: "184", label: "Countries" },
  { num: "2.3M", label: "Prayers" },
];

const press = [
  "Christianity Today",
  "The Gospel Coalition",
  "Church Leaders",
  "Relevant Magazine",
];

export default function AboutPage() {
  return (
    <div style={{ background: "#07070F", minHeight: "100vh", color: "#F2F2F8" }}>
      <Navbar />

      <main style={{ paddingTop: "80px" }}>

        {/* ── HERO ───────────────────────────────── */}
        <section
          style={{
            background:
              "linear-gradient(180deg, rgba(0,255,136,0.13) 0%, rgba(107,79,187,0.07) 55%, transparent 100%)",
            padding: "96px 24px 72px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,255,136,0.1)",
              border: "1px solid rgba(0,255,136,0.25)",
              borderRadius: "100px",
              padding: "6px 18px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                color: "#00FF88",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
              }}
            >
              OUR MISSION
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 7vw, 84px)",
              fontWeight: 900,
              lineHeight: 1.0,
              marginBottom: "24px",
              background: "linear-gradient(135deg, #00FF88 0%, #44FFAA 40%, #00FF88 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Mission
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 2.5vw, 22px)",
              color: "#C0C0D8",
              lineHeight: 1.75,
              maxWidth: "700px",
              margin: "0 auto 40px",
              fontWeight: 400,
            }}
          >
            We believe every Christian deserves a home on the internet — a place to grow, connect, be challenged, and be loved.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/onboarding"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #00FF88, #B8922A)",
                color: "#07070F",
                borderRadius: "14px",
                padding: "14px 28px",
                fontWeight: 800,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              Join Free <ChevronRight size={16} />
            </a>
            <a
              href="#story"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "#C0C0D8",
                border: "1px solid #1E1E32",
                borderRadius: "14px",
                padding: "14px 28px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              Read Our Story
            </a>
          </div>
        </section>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 100px" }}>

          {/* ── ORIGIN STORY ──────────────────────── */}
          <section id="story" style={{ marginBottom: "80px", scrollMarginTop: "100px" }}>
            <div
              style={{
                background: "#12121F",
                borderRadius: "24px",
                borderLeft: "4px solid #00FF88",
                padding: "48px 48px 48px 44px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "320px",
                  height: "320px",
                  background:
                    "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <p
                style={{
                  color: "#00FF88",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "20px",
                }}
              >
                WHY WE BUILT VINE
              </p>
              <h2
                style={{
                  fontSize: "clamp(22px, 3.5vw, 34px)",
                  fontWeight: 900,
                  color: "#F2F2F8",
                  marginBottom: "32px",
                  lineHeight: 1.25,
                  maxWidth: "600px",
                }}
              >
                A founder who felt Christian social media was either shallow or divisive.
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  maxWidth: "760px",
                }}
              >
                <p style={{ color: "#A0A0C0", fontSize: "16px", lineHeight: 1.85 }}>
                  Kwame was 26 years old, sitting in his local church in Accra, genuinely hungry for something more. He wasn&apos;t looking for another service or sermon — he was looking for a community that lived online the way the early church lived in person. What he found instead was discouraging: Christian content online was either shallow and performative, or loud and divisive. Nobody was building something warm, honest, and deep.
                </p>
                <p style={{ color: "#A0A0C0", fontSize: "16px", lineHeight: 1.85 }}>
                  He reached out to Luisa in Mexico City — a youth pastor he&apos;d met at a conference — and together they started dreaming. The name came quickly. John 15:5: &ldquo;I am the vine; you are the branches.&rdquo; It was the perfect image. Not a hub, not a feed, not an algorithm — a living system where connection produces fruit. Where you don&apos;t just consume; you grow. Where you&apos;re not a user; you&apos;re a branch.
                </p>
                <p style={{ color: "#A0A0C0", fontSize: "16px", lineHeight: 1.85 }}>
                  They spent two years talking to thousands of Christians across six continents before writing a single line of code. What they heard over and over was the same: we are isolated, we are starving for depth, and we don&apos;t feel safe being honest about our struggles online. Vine was built in direct response to that hunger. Every feature, every design decision, every community guideline is designed to make a genuine Christian life feel possible, beautiful, and shared.
                </p>
              </div>
              <div
                style={{
                  marginTop: "36px",
                  padding: "20px 24px",
                  background: "rgba(0,255,136,0.07)",
                  border: "1px solid rgba(0,255,136,0.15)",
                  borderRadius: "14px",
                  display: "inline-block",
                }}
              >
                <p
                  style={{
                    color: "#00FF88",
                    fontSize: "16px",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.&rdquo;
                </p>
                <p style={{ color: "#6A6A88", fontSize: "13px", marginTop: "8px", fontWeight: 600 }}>
                  — John 15:5
                </p>
              </div>
            </div>
          </section>

          {/* ── THE VINE PROMISE: 4 PILLARS ────────── */}
          <section style={{ marginBottom: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p
                style={{
                  color: "#00FF88",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                }}
              >
                WHAT WE STAND FOR
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 900,
                  color: "#F2F2F8",
                  lineHeight: 1.15,
                }}
              >
                The Vine Promise
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
                gap: "20px",
              }}
            >
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    style={{
                      background: "#12121F",
                      border: `1px solid ${p.color}22`,
                      borderTop: `3px solid ${p.color}`,
                      borderRadius: "20px",
                      padding: "32px",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        background: `${p.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <Icon size={22} style={{ color: p.color }} />
                    </div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 800,
                        color: "#F2F2F8",
                        marginBottom: "10px",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ color: "#A0A0C0", fontSize: "14px", lineHeight: 1.75 }}>
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── VALUES: 6 CARDS ───────────────────── */}
          <section style={{ marginBottom: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p
                style={{
                  color: "#00FF88",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                }}
              >
                HOW WE OPERATE
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 900,
                  color: "#F2F2F8",
                  lineHeight: 1.15,
                }}
              >
                Our Values
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "16px",
              }}
            >
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: "18px",
                      padding: "28px",
                      display: "flex",
                      gap: "18px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: `${v.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} style={{ color: v.color }} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "15px",
                          fontWeight: 800,
                          color: "#F2F2F8",
                          marginBottom: "6px",
                        }}
                      >
                        {v.title}
                      </h3>
                      <p style={{ color: "#8A8AA8", fontSize: "13px", lineHeight: 1.7 }}>
                        {v.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── WHO IS VINE FOR ───────────────────── */}
          <section style={{ marginBottom: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p
                style={{
                  color: "#00FF88",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                }}
              >
                EVERYONE IS WELCOME
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 900,
                  color: "#F2F2F8",
                  lineHeight: 1.15,
                }}
              >
                Who Is Vine For?
              </h2>
            </div>

            <div
              style={{
                display: "flex",
                gap: "16px",
                overflowX: "auto",
                padding: "4px 4px 16px",
                scrollbarWidth: "thin",
              }}
            >
              {forTypes.map((t) => (
                <div
                  key={t.title}
                  style={{
                    flexShrink: 0,
                    width: "218px",
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "20px",
                    padding: "28px 20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "14px" }}>{t.emoji}</div>
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 800,
                      color: "#F2F2F8",
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {t.title}
                  </h3>
                  <p style={{ color: "#8A8AA8", fontSize: "12px", lineHeight: 1.7 }}>
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── TEAM ──────────────────────────────── */}
          <section style={{ marginBottom: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p
                style={{
                  color: "#00FF88",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                }}
              >
                THE PEOPLE BEHIND VINE
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 900,
                  color: "#F2F2F8",
                  lineHeight: 1.15,
                }}
              >
                Meet the Team
              </h2>
              <p
                style={{
                  color: "#8A8AA8",
                  fontSize: "16px",
                  marginTop: "12px",
                  lineHeight: 1.65,
                }}
              >
                Six people from six countries, united by one calling.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              {team.map((m) => (
                <div
                  key={m.name}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "20px",
                    padding: "28px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${m.color}50, ${m.color}90)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        fontWeight: 900,
                        color: "#07070F",
                        flexShrink: 0,
                      }}
                    >
                      {m.initials}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "16px",
                          fontWeight: 800,
                          color: "#F2F2F8",
                          marginBottom: "3px",
                        }}
                      >
                        {m.name}
                      </p>
                      <p style={{ fontSize: "12px", fontWeight: 600, color: m.color }}>
                        {m.role}
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      color: "#8A8AA8",
                      fontSize: "13px",
                      lineHeight: 1.7,
                      fontStyle: "italic",
                      borderTop: "1px solid #1E1E32",
                      paddingTop: "14px",
                    }}
                  >
                    {m.fact}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── IMPACT STATS ──────────────────────── */}
          <section style={{ marginBottom: "80px" }}>
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,255,136,0.10) 0%, rgba(107,79,187,0.08) 100%)",
                border: "1px solid rgba(0,255,136,0.2)",
                borderRadius: "28px",
                padding: "56px 40px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#00FF88",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                }}
              >
                BY THE NUMBERS
              </p>
              <h2
                style={{
                  fontSize: "clamp(24px, 3.5vw, 38px)",
                  fontWeight: 900,
                  color: "#F2F2F8",
                  marginBottom: "52px",
                }}
              >
                Our Impact
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                  gap: "32px",
                }}
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <p
                      style={{
                        fontSize: "clamp(38px, 5vw, 56px)",
                        fontWeight: 900,
                        lineHeight: 1,
                        marginBottom: "8px",
                        background: "linear-gradient(135deg, #00FF88, #44FFAA)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {s.num}
                    </p>
                    <p
                      style={{
                        color: "#A0A0C0",
                        fontSize: "14px",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── AS SEEN IN ────────────────────────── */}
          <section style={{ marginBottom: "80px" }}>
            <p
              style={{
                textAlign: "center",
                color: "#6A6A88",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                marginBottom: "28px",
              }}
            >
              AS SEEN IN
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {press.map((pub) => (
                <div
                  key={pub}
                  style={{
                    padding: "14px 28px",
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "12px",
                    color: "#6A6A88",
                    fontSize: "14px",
                    fontWeight: 700,
                    fontStyle: "italic",
                    letterSpacing: "0.02em",
                  }}
                >
                  {pub}
                </div>
              ))}
            </div>
          </section>

          {/* ── FINAL CTA ─────────────────────────── */}
          <section>
            <div
              style={{
                textAlign: "center",
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "28px",
                padding: "80px 40px",
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
                  width: "600px",
                  height: "320px",
                  background:
                    "radial-gradient(ellipse, rgba(0,255,136,0.07) 0%, transparent 65%)",
                  pointerEvents: "none",
                }}
              />
              <h2
                style={{
                  fontSize: "clamp(28px, 4.5vw, 50px)",
                  fontWeight: 900,
                  color: "#F2F2F8",
                  marginBottom: "16px",
                  position: "relative",
                }}
              >
                Ready to Find Your Home?
              </h2>
              <p
                style={{
                  color: "#8A8AA8",
                  fontSize: "17px",
                  lineHeight: 1.7,
                  marginBottom: "36px",
                  maxWidth: "480px",
                  margin: "0 auto 36px",
                  position: "relative",
                }}
              >
                Thousands of believers are already here — growing, connecting, and being transformed. Your branch is waiting.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                  position: "relative",
                }}
              >
                <a
                  href="/onboarding"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "linear-gradient(135deg, #00FF88, #B8922A)",
                    color: "#07070F",
                    borderRadius: "14px",
                    padding: "16px 36px",
                    fontWeight: 800,
                    fontSize: "16px",
                    textDecoration: "none",
                  }}
                >
                  Join Free <ChevronRight size={17} />
                </a>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    color: "#A0A0C0",
                    fontSize: "15px",
                    fontWeight: 500,
                    textDecoration: "none",
                    padding: "16px 8px",
                  }}
                >
                  Already a member? Sign in →
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
