"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Briefcase,
  Users,
  Star,
  Target,
  TrendingUp,
  Shield,
  ChevronRight,
  Lightbulb,
  Award,
  Compass,
} from "lucide-react";


const principles = [
  {
    icon: "⚙️",
    title: "Work as Worship",
    body: "Colossians 3:23 doesn't say 'do ministry for the Lord' — it says 'whatever you do.' Your cubicle, your jobsite, your clinic is a place of worship.",
    verse: "Colossians 3:23",
  },
  {
    icon: "🦁",
    title: "Servant Leadership",
    body: "Jesus redefined power entirely. The leader who washes feet, listens well, and empowers others is the most dangerous — in the best way.",
    verse: "Mark 10:42-45",
  },
  {
    icon: "🎯",
    title: "Excellence as Witness",
    body: "Daniel and Joseph rose to the top of pagan systems through exceptional competence. Your excellence is a testimony.",
    verse: "Daniel 6:3",
  },
  {
    icon: "⚖️",
    title: "Ethical Courage",
    body: "Integrity costs more when it matters most. Standing for what's right in a compromised workplace is costly and Christlike.",
    verse: "Proverbs 11:3",
  },
];

const frameworks = [
  {
    icon: Compass,
    title: "Faith Integration Map",
    description: "How to authentically bring your faith into work without being preachy or fake.",
    level: "Foundational",
    color: "#00FF88",
  },
  {
    icon: Users,
    title: "Managing Like Jesus",
    description: "A practical framework for leading teams with both excellence and compassion.",
    level: "Leadership",
    color: "#6B4FBB",
  },
  {
    icon: Target,
    title: "Calling vs Career vs Job",
    description: "Not everything is a calling. Understanding the distinctions sets you free.",
    level: "Vocation",
    color: "#10B981",
  },
  {
    icon: Shield,
    title: "Ethical Decision-Making",
    description: "A biblical framework for navigating grey areas, office politics, and moral compromise.",
    level: "Ethics",
    color: "#3B82F6",
  },
  {
    icon: TrendingUp,
    title: "Ambition, Redeemed",
    description: "Is Christian ambition an oxymoron? No — but it must be pointed in the right direction.",
    level: "Growth",
    color: "#F59E0B",
  },
  {
    icon: Lightbulb,
    title: "Rest & Sabbath at Work",
    description: "Why the most productive Christians in history were also the most disciplined resters.",
    level: "Rhythms",
    color: "#EC4899",
  },
];

const models = [
  {
    name: "Daniel",
    role: "Government Official",
    takeaway: "Excellence and integrity in a hostile system — without compromise on core convictions.",
    color: "#00FF88",
    avatar: "DA",
  },
  {
    name: "Nehemiah",
    role: "Project Manager",
    takeaway: "Vision-casting, stakeholder management, and team motivation in the face of opposition.",
    color: "#6B4FBB",
    avatar: "NE",
  },
  {
    name: "Joseph",
    role: "Executive",
    takeaway: "Rising through unjust circumstances, handling power wisely, and forgiving those who wronged you.",
    color: "#10B981",
    avatar: "JO",
  },
  {
    name: "Deborah",
    role: "Judge & Leader",
    takeaway: "Courageous leadership regardless of gender expectations — decisive, wise, and collaborative.",
    color: "#EC4899",
    avatar: "DE",
  },
];

const articles = [
  { emoji: "🏢", title: "How to Talk About Faith at Work Without Being Weird", time: "7 min", tag: "Integration", href: "/blog/faith-at-work" },
  { emoji: "📈", title: "Is Ambition a Sin? What Scripture Actually Says", time: "9 min", tag: "Ambition", href: "/blog/biblical-ambition" },
  { emoji: "😓", title: "Burned Out and Faithful: How to Rest Without Guilt", time: "9 min", tag: "Burnout", href: "/blog/digital-sabbath" },
  { emoji: "🤝", title: "When Your Boss Is Unethical: A Biblical Response", time: "8 min", tag: "Ethics", href: "/blog/servant-leadership-jesus" },
  { emoji: "💼", title: "The Theology of Monday: Reclaiming Secular Work", time: "8 min", tag: "Theology", href: "/blog/theology-of-monday" },
  { emoji: "🌍", title: "Using Your Influence for Kingdom Impact", time: "8 min", tag: "Impact", href: "/blog/servant-leadership-jesus" },
];

export default function WorkLeadershipPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: "#00FF88" }}>
              Life & Faith · Work & Leadership
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
              Monday matters{" "}
              <span style={{ background: "linear-gradient(135deg, #00FF88, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                as much as Sunday.
              </span>
            </h1>
            <p className="text-lg mb-8" style={{ color: "#6A6A88" }}>
              Biblical wisdom for leaders, professionals, and anyone navigating the tension between career and calling. Your work is your mission field.
            </p>
            <div
              className="inline-block px-6 py-4 rounded-2xl text-sm italic"
              style={{
                background: "rgba(0,255,136,0.06)",
                border: "1px solid rgba(0,255,136,0.15)",
                color: "#00DD77",
                maxWidth: "520px",
              }}
            >
              <p className="mb-1">&ldquo;Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.&rdquo;</p>
              <p className="text-xs not-italic font-bold" style={{ color: "#007A33" }}>— Colossians 3:23</p>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>
            4 Core Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,255,136,0.08)" }}
              >
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <h3 className="font-bold text-xl mb-2" style={{ color: "#F2F2F8" }}>{p.title}</h3>
                <p className="text-sm mb-3 leading-relaxed" style={{ color: "#6A6A88" }}>{p.body}</p>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(0,255,136,0.1)", color: "#00FF88" }}
                >
                  📜 {p.verse}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>
            Leadership Frameworks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {frameworks.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group rounded-xl p-5 cursor-pointer transition-all"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${f.color}40`;
                    e.currentTarget.style.background = `${f.color}06`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${f.color}20` }}
                  >
                    <Icon size={18} style={{ color: f.color }} />
                  </div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background: `${f.color}15`, color: f.color }}
                  >
                    {f.level}
                  </span>
                  <h3 className="font-bold text-base mb-1.5 group-hover:text-[#00FF88] transition-colors" style={{ color: "#F2F2F8" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6A6A88" }}>{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Biblical Models */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>
            Biblical Leadership Models
          </h2>
          <p className="text-base mb-8" style={{ color: "#6A6A88" }}>
            Scripture's Hall of Fame for workplace and organizational leadership.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {models.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl p-5 text-center"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black mx-auto mb-3"
                  style={{ background: `${m.color}25`, color: m.color, border: `2px solid ${m.color}40` }}
                >
                  {m.avatar}
                </div>
                <h3 className="font-black text-lg mb-0.5" style={{ color: "#F2F2F8" }}>{m.name}</h3>
                <p className="text-xs mb-3 font-semibold" style={{ color: m.color }}>{m.role}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6A6A88" }}>{m.takeaway}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>Top Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((art, i) => (
              <a
                key={i}
                href={art.href}
                className="group rounded-xl p-5 cursor-pointer transition-all flex gap-4 block"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(0,255,136,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <span className="text-2xl shrink-0">{art.emoji}</span>
                <div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full mb-1.5 inline-block"
                    style={{ background: "rgba(0,255,136,0.1)", color: "#00FF88" }}
                  >
                    {art.tag}
                  </span>
                  <h3 className="font-bold text-sm leading-snug group-hover:text-[#00FF88] transition-colors" style={{ color: "#F2F2F8" }}>
                    {art.title}
                  </h3>
                  <p className="text-xs mt-1" style={{ color: "#4A4A68" }}>{art.time} read</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(107,79,187,0.06) 100%)",
              border: "1px solid rgba(0,255,136,0.12)",
            }}
          >
            <Briefcase size={32} style={{ color: "#00FF88" }} className="mx-auto mb-4" />
            <h3 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>
              Join the Work & Leadership Circle
            </h3>
            <p className="text-base mb-6 max-w-lg mx-auto" style={{ color: "#6A6A88" }}>
              Connect with Christian professionals and leaders navigating the same tension between faith and career.
            </p>
            <div className="flex items-center gap-4 justify-center flex-wrap">
              <a
                href="/community"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-black"
                style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
              >
                Join the Community <ChevronRight size={16} />
              </a>
              <a
                href="/ai-companion"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#C0C0D8" }}
              >
                Ask AI Companion
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
