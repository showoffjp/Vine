"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Phone,
  Search,
  Users,
  BookOpen,
  Star,
  ChevronRight,
  Shield,
  Sun,
  Wind,
  AlertTriangle,
  MessageCircle,
  Calendar,
  MapPin,
  Quote,
} from "lucide-react";


const entryPoints = [
  {
    title: "I'm Struggling with Anxiety",
    icon: Wind,
    color: "#6B4FBB",
    gradient: "linear-gradient(135deg, rgba(107,79,187,0.2), rgba(107,79,187,0.05))",
    desc: "Breathing exercises, Scripture for anxiety, and evidence-based techniques from a faith perspective.",
    count: "34 resources",
  },
  {
    title: "I'm Going Through Depression",
    icon: Sun,
    color: "#00FF88",
    gradient: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,255,136,0.05))",
    desc: "You're not alone and this is not weakness. Explore stories, resources, and professional support paths.",
    count: "28 resources",
  },
  {
    title: "I've Experienced Trauma",
    icon: Shield,
    color: "#4FBBAA",
    gradient: "linear-gradient(135deg, rgba(79,187,170,0.2), rgba(79,187,170,0.05))",
    desc: "Trauma-informed content, EMDR information, and the theology of lament and healing.",
    count: "19 resources",
  },
  {
    title: "I Just Need Someone to Talk To",
    icon: MessageCircle,
    color: "#BB4F7A",
    gradient: "linear-gradient(135deg, rgba(187,79,122,0.2), rgba(187,79,122,0.05))",
    desc: "Peer support circles, prayer partners, and community resources for connection.",
    count: "Community",
  },
];

const faithBasics = [
  {
    title: "Therapy and Faith Can Coexist",
    body: "Seeking professional help is not a sign of spiritual failure — it is wisdom. Proverbs 11:14 says, 'Where there is no guidance, a people falls, but in an abundance of counselors there is safety.' God created the mind and blesses those who help care for it.",
    icon: "🤝",
  },
  {
    title: "Mental Illness Is Not a Lack of Faith",
    body: "David, Elijah, Jeremiah — some of Scripture's greatest heroes experienced what we would today call depression, anxiety, and despair. Struggling mentally does not mean your faith is weak. It means you are human.",
    icon: "✝️",
  },
  {
    title: "God Meets Us in Our Pain",
    body: "Psalm 34:18 says, 'The Lord is close to the brokenhearted.' Your suffering is not hidden from God. He does not wait for you to be healed to show up — He shows up in the middle of it.",
    icon: "🕊️",
  },
];

const resources = [
  { topic: "Anxiety", type: "Article", title: "When Prayer Feels Like It Isn't Working", time: "8 min read", color: "#6B4FBB", href: "/discussions/prayer-doesnt-feel-real-009" },
  { topic: "Depression", type: "Discussion", title: "My Journey Through the Dark Night of the Soul", time: "Community", color: "#00FF88", href: "/discussions/worship-feels-empty-011" },
  { topic: "Grief", type: "Article", title: "God, Grief, and the Permission to Mourn", time: "12 min read", color: "#4F8FBB", href: "/blog/psalms-permission-to-lament" },
  { topic: "Trauma", type: "Discussion", title: "Healing the Wounds We Don't Show Anyone", time: "Community", color: "#4FBBAA", href: "/discussions/depression-therapy-faith-005" },
  { topic: "Loneliness", type: "Article", title: "The Lonely Christian: You Are Not Abandoned", time: "6 min read", color: "#BB7A4F", href: "/topics/mental-health-god" },
  { topic: "Burnout", type: "Article", title: "Sabbath Is Not Optional — It's Medicine", time: "8 min read", color: "#BB4F7A", href: "/blog/digital-sabbath" },
  { topic: "Addiction", type: "Groups", title: "Breaking Chains: Faith & Recovery Programs", time: "Community", color: "#8A5FBB", href: "/groups/mental-health-faith" },
  { topic: "Relationships", type: "Article", title: "Healthy Boundaries: A Biblical Perspective", time: "8 min read", color: "#4FBBAA", href: "/discussions/marriage-hard-church-silent-013" },
];

const therapists = [
  {
    name: "Dr. Sarah Okafor",
    credentials: "PsyD, LPC",
    specialty: "Anxiety, Depression, Identity",
    faith: "Non-denominational",
    location: "Atlanta, GA · Telehealth Available",
    rating: 4.9,
    reviews: 87,
    initials: "SO",
    color: "#6B4FBB",
  },
  {
    name: "James Whitfield",
    credentials: "LMFT, MA Counseling",
    specialty: "Trauma, PTSD, Marriage",
    faith: "Baptist",
    location: "Dallas, TX · In-Person & Online",
    rating: 4.8,
    reviews: 62,
    initials: "JW",
    color: "#00FF88",
  },
  {
    name: "Maria Elena Reyes",
    credentials: "LPC, NCC",
    specialty: "Grief, Life Transitions, Women's Issues",
    faith: "Catholic",
    location: "Miami, FL · Telehealth Available",
    rating: 5.0,
    reviews: 43,
    initials: "MR",
    color: "#BB4F7A",
  },
  {
    name: "David Park",
    credentials: "PhD Clinical Psychology",
    specialty: "Men's Issues, Addiction, Burnout",
    faith: "Presbyterian",
    location: "Seattle, WA · In-Person & Online",
    rating: 4.7,
    reviews: 118,
    initials: "DP",
    color: "#4FBBAA",
  },
];

const supportGroups = [
  { name: "Anxiety & Faith Circle", members: "2.1k", meets: "Tuesdays 7PM ET", color: "#6B4FBB" },
  { name: "Grief & Loss Support", members: "1.4k", meets: "Sundays 3PM ET", color: "#4F8FBB" },
  { name: "Recovery & Restoration", members: "987", meets: "Mondays 8PM ET", color: "#00FF88" },
  { name: "Women Healing Together", members: "3.2k", meets: "Thursdays 6PM ET", color: "#BB4F7A" },
  { name: "Men's Mental Health Space", members: "1.8k", meets: "Fridays 7PM ET", color: "#4FBBAA" },
];

export default function MentalHealthPage() {
  const [bookedSessions, setBookedSessions] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_mh_booked"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [joinedGroups, setJoinedGroups] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_mh_groups"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_mh_booked", JSON.stringify([...bookedSessions])); } catch {}
  }, [bookedSessions]);
  useEffect(() => {
    try { localStorage.setItem("vine_mh_groups", JSON.stringify([...joinedGroups])); } catch {}
  }, [joinedGroups]);

  const toggleBook = (i: number) => setBookedSessions(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });
  const toggleJoinGroup = (i: number) => setJoinedGroups(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });

  return (
    <div style={{ background: "#07070F", minHeight: "100vh" }}>

      <main style={{ paddingTop: "80px" }}>
        {/* CRISIS BANNER */}
        <div
          style={{
            background: "rgba(107,79,187,0.12)",
            borderBottom: "1px solid rgba(107,79,187,0.25)",
            padding: "10px 24px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#C0C0D8", fontSize: "14px" }}>
            <AlertTriangle size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px", color: "#00FF88" }} />
            <strong style={{ color: "#F2F2F8" }}>If you're in crisis, please call or text </strong>
            <strong style={{ color: "#00FF88" }}>988</strong>
            <span style={{ color: "#8A8AA8" }}> (Suicide & Crisis Lifeline) — available 24/7.</span>
          </p>
        </div>

        {/* HERO */}
        <section
          style={{
            background: "linear-gradient(180deg, rgba(107,79,187,0.12) 0%, rgba(0,255,136,0.04) 60%, transparent 100%)",
            padding: "72px 24px 60px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0,255,136,0.1)",
                border: "1px solid rgba(0,255,136,0.25)",
                borderRadius: "100px",
                padding: "6px 16px",
                marginBottom: "24px",
              }}
            >
              <Heart size={14} style={{ color: "#00FF88" }} />
              <span style={{ color: "#00FF88", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em" }}>
                MENTAL HEALTH & INNER HEALING
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(38px, 6vw, 68px)",
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: "20px",
                background: "linear-gradient(135deg, #FFFFFF 0%, #BBA8D4 60%, #F2F2F8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              You Are Not Alone
            </h1>
            <p style={{ color: "#8A8AA8", fontSize: "18px", lineHeight: 1.8, marginBottom: "12px" }}>
              This is a safe, judgment-free space where faith and mental health meet with honesty, compassion, and real resources.
            </p>
            <p style={{ color: "#6A6A88", fontSize: "15px", fontStyle: "italic" }}>
              &ldquo;The Lord is close to the brokenhearted and saves those who are crushed in spirit.&rdquo; — Psalm 34:18
            </p>
          </div>
        </section>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px" }}>

          {/* START HERE */}
          <section style={{ marginBottom: "64px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "8px" }}>
              Start Here
            </h2>
            <p style={{ color: "#8A8AA8", fontSize: "15px", marginBottom: "24px" }}>
              Wherever you are right now — there's a path forward.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
              {entryPoints.map((ep, i) => (
                <div
                  key={i}
                  style={{
                    background: ep.gradient,
                    border: `1px solid ${ep.color}25`,
                    borderRadius: "20px",
                    padding: "28px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: `${ep.color}20`,
                      border: `1px solid ${ep.color}35`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <ep.icon size={22} style={{ color: ep.color }} />
                  </div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 800, fontSize: "16px", marginBottom: "10px", lineHeight: 1.3 }}>
                    {ep.title}
                  </h3>
                  <p style={{ color: "#8A8AA8", fontSize: "13px", lineHeight: 1.6, marginBottom: "16px" }}>
                    {ep.desc}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ color: ep.color, fontSize: "12px", fontWeight: 600 }}>{ep.count}</span>
                    <ChevronRight size={16} style={{ color: ep.color }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAITH & MENTAL HEALTH BASICS */}
          <section style={{ marginBottom: "64px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "24px" }}>
              Faith & Mental Health: The Basics
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
              {faithBasics.map((card, i) => (
                <div
                  key={i}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "20px",
                    padding: "28px",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "16px" }}>{card.icon}</div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "17px", marginBottom: "12px", lineHeight: 1.3 }}>
                    {card.title}
                  </h3>
                  <p style={{ color: "#8A8AA8", fontSize: "14px", lineHeight: 1.75 }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* RESOURCE LIBRARY */}
          <section style={{ marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8" }}>Resource Library</h2>
              <button style={{ display: "flex", alignItems: "center", gap: "6px", color: "#00FF88", fontSize: "14px", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>
                View All <ChevronRight size={16} />
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px" }}>
              {resources.map((res, i) => (
                <a
                  key={i}
                  href={res.href}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "16px",
                    padding: "20px",
                    cursor: "pointer",
                    display: "block",
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${res.color}40`; e.currentTarget.style.background = `${res.color}06`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1E1E32"; e.currentTarget.style.background = "#12121F"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span
                      style={{
                        background: `${res.color}18`,
                        color: res.color,
                        borderRadius: "100px",
                        padding: "3px 10px",
                        fontSize: "11px",
                        fontWeight: 700,
                      }}
                    >
                      {res.topic}
                    </span>
                    <span style={{ color: "#6A6A88", fontSize: "11px", fontWeight: 600 }}>{res.type}</span>
                  </div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "14px", marginBottom: "8px", lineHeight: 1.4 }}>
                    {res.title}
                  </h3>
                  <p style={{ color: "#6A6A88", fontSize: "12px" }}>{res.time}</p>
                </a>
              ))}
            </div>
          </section>

          {/* FIND A THERAPIST */}
          <section style={{ marginBottom: "64px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "8px" }}>
              Find a Christian Therapist
            </h2>
            <p style={{ color: "#8A8AA8", fontSize: "15px", marginBottom: "20px" }}>
              All therapists are licensed, faith-affirming professionals who integrate Christian values with clinical expertise.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "12px",
                padding: "0 16px",
                marginBottom: "20px",
                maxWidth: "480px",
              }}
            >
              <Search size={16} style={{ color: "#6A6A88", flexShrink: 0 }} />
              <input
                readOnly
                placeholder="Search by specialty, faith tradition, or location..."
                style={{ background: "transparent", border: "none", outline: "none", color: "#F2F2F8", padding: "14px 0", fontSize: "14px", width: "100%" }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
              {therapists.map((t, i) => (
                <div
                  key={i}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "20px",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "18px",
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "15px", marginBottom: "2px" }}>{t.name}</p>
                      <p style={{ color: "#8A8AA8", fontSize: "12px" }}>{t.credentials}</p>
                    </div>
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <p style={{ color: "#8A8AA8", fontSize: "12px", marginBottom: "4px" }}>
                      <strong style={{ color: "#C0C0D8" }}>Specialty:</strong> {t.specialty}
                    </p>
                    <p style={{ color: "#8A8AA8", fontSize: "12px", marginBottom: "4px" }}>
                      <strong style={{ color: "#C0C0D8" }}>Faith:</strong> {t.faith}
                    </p>
                    <p style={{ color: "#6A6A88", fontSize: "12px", display: "flex", alignItems: "center", gap: "4px" }}>
                      <MapPin size={11} /> {t.location}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#00FF88", fontSize: "13px", fontWeight: 700 }}>
                      <Star size={13} fill="#00FF88" /> {t.rating}
                      <span style={{ color: "#6A6A88", fontWeight: 400 }}>({t.reviews})</span>
                    </span>
                  </div>
                  <button
                    onClick={() => toggleBook(i)}
                    style={{
                      width: "100%",
                      background: bookedSessions.has(i) ? "rgba(0,255,136,0.15)" : "linear-gradient(135deg, #00FF88, #B8922A)",
                      color: bookedSessions.has(i) ? "#00FF88" : "#07070F",
                      border: bookedSessions.has(i) ? "1px solid rgba(0,255,136,0.3)" : "none",
                      borderRadius: "10px",
                      padding: "10px",
                      fontWeight: 700,
                      fontSize: "13px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      transition: "all 0.2s",
                    }}
                  >
                    <Calendar size={13} /> {bookedSessions.has(i) ? "✓ Session Requested!" : "Book Session"}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* SUPPORT GROUPS */}
          <section style={{ marginBottom: "64px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "24px" }}>
              Community Support Groups
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px" }}>
              {supportGroups.map((group, i) => (
                <div
                  key={i}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "16px",
                    padding: "20px",
                    borderTop: `3px solid ${group.color}`,
                  }}
                >
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "15px", marginBottom: "8px" }}>
                    {group.name}
                  </h3>
                  <p style={{ color: "#6A6A88", fontSize: "12px", marginBottom: "4px" }}>
                    <Users size={11} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                    {group.members} members
                  </p>
                  <p style={{ color: "#6A6A88", fontSize: "12px", marginBottom: "16px" }}>
                    <Calendar size={11} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                    {group.meets}
                  </p>
                  <button
                    onClick={() => toggleJoinGroup(i)}
                    style={{
                      width: "100%",
                      background: joinedGroups.has(i) ? group.color : `${group.color}15`,
                      border: `1px solid ${group.color}30`,
                      color: joinedGroups.has(i) ? "#07070F" : group.color,
                      borderRadius: "8px",
                      padding: "8px",
                      fontWeight: 700,
                      fontSize: "12px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {joinedGroups.has(i) ? "✓ Joined!" : "Join Group"}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* DAILY ENCOURAGEMENT */}
          <section style={{ marginBottom: "64px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "24px" }}>
              Daily Encouragement
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(107,79,187,0.2) 0%, rgba(107,79,187,0.05) 100%)",
                  border: "1px solid rgba(107,79,187,0.25)",
                  borderRadius: "20px",
                  padding: "32px",
                }}
              >
                <p style={{ color: "#00FF88", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "16px" }}>
                  TODAY&apos;S VERSE
                </p>
                <p style={{ color: "#F2F2F8", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, marginBottom: "16px" }}>
                  &ldquo;He heals the brokenhearted and binds up their wounds.&rdquo;
                </p>
                <p style={{ color: "#00FF88", fontWeight: 700, fontSize: "14px" }}>— Psalm 147:3</p>
              </div>
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(0,255,136,0.12) 0%, rgba(0,255,136,0.03) 100%)",
                  border: "1px solid rgba(0,255,136,0.2)",
                  borderRadius: "20px",
                  padding: "32px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <Quote size={16} style={{ color: "#00FF88" }} />
                  <p style={{ color: "#00FF88", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em" }}>
                    FROM SPURGEON ON SUFFERING
                  </p>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: "15px", fontStyle: "italic", lineHeight: 1.75, marginBottom: "16px" }}>
                  &ldquo;It is not how much we have, but how much we enjoy, that makes happiness. God's people are the happiest people in the world even when they are in the most pain, because their joy is from another source.&rdquo;
                </p>
                <p style={{ color: "#8A8AA8", fontWeight: 600, fontSize: "13px" }}>— Charles H. Spurgeon</p>
              </div>
            </div>
          </section>

          {/* PROFESSIONAL HELP vs COMMUNITY */}
          <section style={{ marginBottom: "64px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "24px" }}>
              Professional Help vs. Community Support
            </h2>
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "20px",
                padding: "32px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(107,79,187,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <BookOpen size={18} style={{ color: "#6B4FBB" }} />
                  </div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "17px" }}>Professional Therapy</h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "Clinical diagnosis and treatment",
                    "Trauma processing (EMDR, CBT)",
                    "Medication management referrals",
                    "Structured, confidential sessions",
                    "Best for: clinical conditions, trauma, crisis",
                  ].map((item, i) => (
                    <li key={i} style={{ color: "#8A8AA8", fontSize: "14px", lineHeight: 1.6, padding: "4px 0", paddingLeft: "16px", borderLeft: "2px solid rgba(107,79,187,0.4)", marginBottom: "4px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(0,255,136,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Users size={18} style={{ color: "#00FF88" }} />
                  </div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "17px" }}>Community Support</h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "Peer support and shared experience",
                    "Prayer and spiritual encouragement",
                    "Accountability partnerships",
                    "Available 24/7, no appointment needed",
                    "Best for: loneliness, everyday struggles, faith questions",
                  ].map((item, i) => (
                    <li key={i} style={{ color: "#8A8AA8", fontSize: "14px", lineHeight: 1.6, padding: "4px 0", paddingLeft: "16px", borderLeft: "2px solid rgba(0,255,136,0.4)", marginBottom: "4px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* YOU ARE SEEN CTA */}
          <section>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(107,79,187,0.18) 0%, rgba(0,255,136,0.08) 100%)",
                border: "1px solid rgba(107,79,187,0.25)",
                borderRadius: "24px",
                padding: "56px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "20px" }}>🕊️</div>
              <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#F2F2F8", marginBottom: "16px" }}>
                You Are Seen. You Are Known. You Are Loved.
              </h2>
              <p style={{ color: "#8A8AA8", fontSize: "17px", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 28px" }}>
                Whatever you're carrying today — you don't have to carry it alone. The Vine community is here, and so is God. Would you let us pray with you?
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "linear-gradient(135deg, #00FF88, #B8922A)",
                    color: "#07070F",
                    border: "none",
                    borderRadius: "12px",
                    padding: "14px 28px",
                    fontWeight: 800,
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                >
                  <Heart size={16} /> Request Prayer
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
                    padding: "14px 28px",
                    fontWeight: 600,
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                >
                  <Phone size={16} /> Crisis Resources
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
}
