import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  Users,
  BookOpen,
  Heart,
  Globe,
  Star,
  Leaf,
  Lightbulb,
  CheckCircle,
  ChevronRight,
  ExternalLink,
  Zap,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Vine",
  description:
    "Learn about Vine — why we built it, what we believe, and who it's for. Built on John 15:5, for every Christian who needs a home on the internet.",
};

const pillars = [
  {
    icon: BookOpen,
    title: "Truth",
    color: "#D4AF37",
    description:
      "We are unapologetically committed to the truth of Scripture. Every feature, every resource, every community decision is anchored in God's Word.",
  },
  {
    icon: Users,
    title: "Community",
    color: "#6B4FBB",
    description:
      "Iron sharpens iron. Vine is designed to foster real, deep, accountable relationships — not just engagement metrics and follower counts.",
  },
  {
    icon: Zap,
    title: "Growth",
    color: "#4FBBAA",
    description:
      "Stagnant faith is not the goal. We build tools and spaces that challenge you to grow — spiritually, practically, and in community with others.",
  },
  {
    icon: Shield,
    title: "Safety",
    color: "#BB4F7A",
    description:
      "The internet can be a brutal place. Vine maintains strict community guidelines, moderation, and care structures to protect every member.",
  },
];

const values = [
  { icon: Heart, title: "Grace-First Culture", desc: "We lead with grace before judgment. Always.", color: "#BB4F7A" },
  { icon: BookOpen, title: "Scripture-Anchored", desc: "Everything on Vine points back to God's Word.", color: "#D4AF37" },
  { icon: Globe, title: "Globally Inclusive", desc: "The Church is global. So is Vine.", color: "#4FBBAA" },
  { icon: Leaf, title: "Depth Over Noise", desc: "We'd rather have 10k deep members than 10M shallow ones.", color: "#6B4FBB" },
  { icon: Lightbulb, title: "Honest & Curious", desc: "Questions and doubt are welcome here.", color: "#BB7A4F" },
  { icon: CheckCircle, title: "Whole-Life Faith", desc: "Faith touches money, relationships, work, and health.", color: "#4F8FBB" },
];

const personTypes = [
  { label: "The New Believer", emoji: "🌱", desc: "We meet you where you are with gentle onboarding, Bible basics, and a non-intimidating community." },
  { label: "The Doubter", emoji: "🤔", desc: "Your questions are safe here. No gatekeeping, no shame — just honest conversations about hard things." },
  { label: "The Theologian", emoji: "📚", desc: "Deep-dive Bible studies, theological discussions, apologetics resources, and peers who match your intensity." },
  { label: "The Worship Leader", emoji: "🎹", desc: "Chord libraries, worship circles, creator tools, and a community that understands what you carry." },
  { label: "The Struggling Christian", emoji: "💙", desc: "Mental health resources, support groups, honest testimonies, and a community that stays when things get dark." },
  { label: "The Busy Parent", emoji: "👨‍👩‍👧", desc: "Family devotionals, parenting forums, quick daily bread, and other parents who get it." },
  { label: "The Young Adult", emoji: "🎓", desc: "Navigating faith, career, relationships, and identity in a world that often pushes back. We walk alongside you." },
  { label: "The Global Christian", emoji: "🌍", desc: "Worship from 184 countries, multilingual resources, and a community that truly represents the global body of Christ." },
];

const team = [
  { name: "Jason Pharr", role: "Founder & CEO", fact: "Came to faith at 19 through a stranger's prayer at a Waffle House.", gradient: "linear-gradient(135deg, #D4AF37, #B8922A)", initials: "JP" },
  { name: "Amara Osei", role: "Head of Community", fact: "Grew up in a Ghanaian church choir. Still sings every Sunday.", gradient: "linear-gradient(135deg, #6B4FBB, #4F8FBB)", initials: "AO" },
  { name: "Priya Krishnan", role: "Lead Product Designer", fact: "Former Hindu, converted at 24. Designs with the doubter in mind.", gradient: "linear-gradient(135deg, #BB4F7A, #6B4FBB)", initials: "PK" },
  { name: "Marcus Webb", role: "Head of Engineering", fact: "Codes to worship music. Literally. Always.", gradient: "linear-gradient(135deg, #4FBBAA, #4F8FBB)", initials: "MW" },
  { name: "Elena Santos", role: "Director of Mental Health", fact: "Licensed therapist, 12 years. Believes the Church needs to do better here.", gradient: "linear-gradient(135deg, #BB7A4F, #D4AF37)", initials: "ES" },
  { name: "David Kim", role: "Head of Theology & Content", fact: "Seminary grad, MDiv Princeton. Still humbled by Proverbs 3:5 daily.", gradient: "linear-gradient(135deg, #4F8FBB, #6B4FBB)", initials: "DK" },
];

const stats = [
  { value: "12,847", label: "Members", sub: "and growing daily", icon: Users, color: "#D4AF37" },
  { value: "5,000+", label: "Resources", sub: "articles, videos & guides", icon: BookOpen, color: "#6B4FBB" },
  { value: "184", label: "Countries", sub: "represented on Vine", icon: Globe, color: "#4FBBAA" },
  { value: "2.3M", label: "Prayers", sub: "offered on Vine's prayer wall", icon: Heart, color: "#BB4F7A" },
];

const press = [
  {
    outlet: "Christianity Today",
    headline: "\"Vine May Be the Most Thoughtful Christian Social Platform Yet Built\"",
    date: "March 2026",
    color: "#D4AF37",
  },
  {
    outlet: "The Gospel Coalition",
    headline: "\"A Platform That Takes Both Truth and Compassion Seriously\"",
    date: "February 2026",
    color: "#6B4FBB",
  },
  {
    outlet: "Church Leaders",
    headline: "\"What Pastors Need to Know About Vine in 2026\"",
    date: "January 2026",
    color: "#4FBBAA",
  },
  {
    outlet: "Relevant Magazine",
    headline: "\"Finally, a Christian Platform That Doesn't Feel Cringe\"",
    date: "April 2026",
    color: "#BB4F7A",
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#07070F", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ paddingTop: "80px" }}>
        {/* HERO */}
        <section
          style={{
            background: "linear-gradient(180deg, rgba(107,79,187,0.16) 0%, rgba(212,175,55,0.06) 60%, transparent 100%)",
            padding: "88px 24px 72px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.25)",
                borderRadius: "100px",
                padding: "6px 16px",
                marginBottom: "28px",
              }}
            >
              <Leaf size={13} style={{ color: "#D4AF37" }} />
              <span style={{ color: "#D4AF37", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em" }}>
                OUR MISSION
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 76px)",
                fontWeight: 900,
                lineHeight: 1.0,
                marginBottom: "24px",
                background: "linear-gradient(135deg, #FFFFFF 0%, #D4AF37 45%, #BBA8D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Mission
            </h1>
            <p
              style={{
                color: "#C0C0D8",
                fontSize: "20px",
                lineHeight: 1.75,
                maxWidth: "680px",
                margin: "0 auto",
                fontWeight: 400,
              }}
            >
              We believe every Christian deserves a home on the internet — a place to grow, connect, be challenged, and be loved.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px" }}>

          {/* ORIGIN STORY */}
          <section style={{ marginBottom: "72px" }}>
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "24px",
                padding: "48px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #6B4FBB, #D4AF37)",
                }}
              />
              <div style={{ maxWidth: "700px" }}>
                <p style={{ color: "#D4AF37", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "16px" }}>
                  WHY WE BUILT VINE
                </p>
                <h2 style={{ fontSize: "26px", fontWeight: 800, color: "#F2F2F8", marginBottom: "24px", lineHeight: 1.3 }}>
                  Built by a Frustrated Christian. Named After John 15:5.
                </h2>
                <p style={{ color: "#8A8AA8", fontSize: "16px", lineHeight: 1.85, marginBottom: "20px" }}>
                  Jason Pharr came to faith in 2007 and immediately went looking for an online community that matched the depth and warmth of his local church. What he found instead were two extremes: platforms that were either shallow and performative — all aesthetics and no substance — or toxic and divisive, weaponizing theology to win arguments rather than build people up. He spent years hoping someone else would build something better. In 2025, he stopped waiting.
                </p>
                <p style={{ color: "#8A8AA8", fontSize: "16px", lineHeight: 1.85 }}>
                  He named the platform Vine after John 15:5 — &ldquo;I am the vine; you are the branches.&rdquo; The metaphor felt right: an ecosystem of connection, growth, and life-giving relationship, all rooted in Christ. Every feature Vine builds — from the prayer wall to the mental health hub to the chord library — is designed with a single question: does this help someone stay connected to the Vine?
                </p>
              </div>
            </div>
          </section>

          {/* THE VINE PROMISE: 4 PILLARS */}
          <section style={{ marginBottom: "72px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "8px" }}>
              The Vine Promise
            </h2>
            <p style={{ color: "#8A8AA8", fontSize: "15px", marginBottom: "28px" }}>
              Four pillars that guide every decision we make.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  style={{
                    background: "#12121F",
                    border: `1px solid ${pillar.color}25`,
                    borderRadius: "20px",
                    padding: "28px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: `${pillar.color}15`,
                      border: `1px solid ${pillar.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "18px",
                    }}
                  >
                    <pillar.icon size={22} style={{ color: pillar.color }} />
                  </div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 800, fontSize: "18px", marginBottom: "10px" }}>
                    {pillar.title}
                  </h3>
                  <p style={{ color: "#8A8AA8", fontSize: "14px", lineHeight: 1.7 }}>
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* VALUES */}
          <section style={{ marginBottom: "72px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "28px" }}>
              Our Values
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
              {values.map((val, i) => (
                <div
                  key={i}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "16px",
                    padding: "22px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "11px",
                      background: `${val.color}15`,
                      border: `1px solid ${val.color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <val.icon size={18} style={{ color: val.color }} />
                  </div>
                  <div>
                    <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "15px", marginBottom: "6px" }}>
                      {val.title}
                    </h3>
                    <p style={{ color: "#8A8AA8", fontSize: "13px", lineHeight: 1.6 }}>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* WHO IS VINE FOR */}
          <section style={{ marginBottom: "72px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "8px" }}>
              Who Is Vine For?
            </h2>
            <p style={{ color: "#8A8AA8", fontSize: "15px", marginBottom: "20px" }}>
              If you follow Jesus — or you're trying to — Vine is for you.
            </p>
            <div
              style={{
                display: "flex",
                gap: "14px",
                overflowX: "auto",
                paddingBottom: "12px",
              }}
            >
              {personTypes.map((person, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "18px",
                    padding: "24px",
                    width: "200px",
                  }}
                >
                  <span style={{ fontSize: "28px", display: "block", marginBottom: "12px" }}>{person.emoji}</span>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "14px", marginBottom: "8px", lineHeight: 1.3 }}>
                    {person.label}
                  </h3>
                  <p style={{ color: "#8A8AA8", fontSize: "12px", lineHeight: 1.65 }}>{person.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TEAM */}
          <section style={{ marginBottom: "72px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "8px" }}>
              The Team
            </h2>
            <p style={{ color: "#8A8AA8", fontSize: "15px", marginBottom: "28px" }}>
              Built by believers. For believers.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
              {team.map((member, i) => (
                <div
                  key={i}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "20px",
                    padding: "24px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      background: member.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "17px",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <p style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "15px", marginBottom: "3px" }}>{member.name}</p>
                    <p style={{ color: "#D4AF37", fontSize: "12px", fontWeight: 600, marginBottom: "10px" }}>{member.role}</p>
                    <p style={{ color: "#8A8AA8", fontSize: "12px", lineHeight: 1.6, fontStyle: "italic" }}>
                      &ldquo;{member.fact}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* STATS */}
          <section style={{ marginBottom: "72px" }}>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(107,79,187,0.12) 0%, rgba(212,175,55,0.06) 100%)",
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: "24px",
                padding: "48px",
              }}
            >
              <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "8px", textAlign: "center" }}>
                Our Impact
              </h2>
              <p style={{ color: "#8A8AA8", fontSize: "15px", marginBottom: "36px", textAlign: "center" }}>
                Numbers that remind us why we show up every day.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "24px" }}>
                {stats.map((stat, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "16px",
                        background: `${stat.color}15`,
                        border: `1px solid ${stat.color}25`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px",
                      }}
                    >
                      <stat.icon size={22} style={{ color: stat.color }} />
                    </div>
                    <p style={{ fontSize: "36px", fontWeight: 900, color: "#F2F2F8", lineHeight: 1.1, marginBottom: "4px" }}>
                      {stat.value}
                    </p>
                    <p style={{ color: stat.color, fontSize: "14px", fontWeight: 700, marginBottom: "4px" }}>
                      {stat.label}
                    </p>
                    <p style={{ color: "#6A6A88", fontSize: "12px" }}>{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PRESS */}
          <section style={{ marginBottom: "72px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "28px" }}>
              Press & Recognition
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
              {press.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "16px",
                    padding: "24px",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      color: item.color,
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    {item.outlet}
                  </p>
                  <p style={{ color: "#C0C0D8", fontSize: "14px", lineHeight: 1.55, fontStyle: "italic", marginBottom: "16px" }}>
                    {item.headline}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ color: "#6A6A88", fontSize: "12px" }}>{item.date}</span>
                    <ExternalLink size={13} style={{ color: "#6A6A88" }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* JOIN CTA */}
          <section>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(107,79,187,0.2) 0%, rgba(212,175,55,0.1) 100%)",
                border: "1px solid rgba(212,175,55,0.2)",
                borderRadius: "24px",
                padding: "64px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "20px" }}>🍃</div>
              <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#F2F2F8", marginBottom: "16px" }}>
                You Belong Here
              </h2>
              <p style={{ color: "#8A8AA8", fontSize: "17px", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto 32px" }}>
                Thousands of Christians from 184 countries have made Vine their spiritual home. Whatever stage of faith you&apos;re in — you have a place at this table.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "linear-gradient(135deg, #D4AF37, #B8922A)",
                    color: "#07070F",
                    border: "none",
                    borderRadius: "12px",
                    padding: "16px 32px",
                    fontWeight: 800,
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Join Vine — It&apos;s Free <ChevronRight size={16} />
                </button>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "transparent",
                    color: "#F2F2F8",
                    border: "1px solid #1E1E32",
                    borderRadius: "12px",
                    padding: "16px 32px",
                    fontWeight: 600,
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  <MessageCircle size={16} /> Talk to Our Team
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
