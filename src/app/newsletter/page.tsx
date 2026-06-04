"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  BookOpen,
  TrendingUp,
  Heart,
  Star,
  ChevronRight,
  CheckCircle,
  Flame,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";

const pastIssues = [
  {
    issue: "#48",
    date: "May 19, 2026",
    title: "The Resurrection Argument That Stumped an Atheist Scholar",
    preview: "This week: NT Wright vs. the New Atheists, Amara's testimony from Lagos, 5 Biblical habits for Monday morning, and the top prayer request from 40+ countries.",
    opens: "68%",
    highlights: ["NT Wright's resurrection argument", "Lagos revival report", "5 Monday habits"],
  },
  {
    issue: "#47",
    date: "May 12, 2026",
    title: "Why Gen Z Is Both Leaving and Returning to Church",
    preview: "New research reveals what's actually driving young adults away — and what's bringing a surprising number back. Plus the week's best sermon, verse, and discussion.",
    opens: "72%",
    highlights: ["Gen Z faith research breakdown", "David Platt interview", "Trending: Faith & Doubt hub"],
  },
  {
    issue: "#46",
    date: "May 5, 2026",
    title: "Biblical Finance Isn't a Sermon — It's a System",
    preview: "Six steps to financial freedom, rooted in Scripture. Plus: the $87K debt payoff story, Dave Ramsey's biggest critic (and why they're both right), and this week's verse.",
    opens: "74%",
    highlights: ["6-step biblical finance plan", "Debt payoff testimony", "Proverbs 13:11 deep dive"],
  },
  {
    issue: "#45",
    date: "April 28, 2026",
    title: "The Forgotten Spiritual Discipline That Changes Everything",
    preview: "We're not talking prayer. Or fasting. This underrated practice from the early church is having a quiet renaissance — and the evidence for it is compelling.",
    opens: "71%",
    highlights: ["Contemplative prayer revival", "Desert Fathers explainer", "Silence & solitude guide"],
  },
];

const editions = [
  {
    name: "The Weekly Vine",
    frequency: "Every Sunday morning",
    description: "The 5 best articles, top discussion, verse of the week, and global prayer spotlight. Curated, not algorithmic.",
    icon: Star,
    color: "#3a7d56",
    subscribers: "124K",
    popular: true,
  },
  {
    name: "Daily Bread",
    frequency: "Every weekday at 6am",
    description: "One verse, one reflection, one prayer prompt. 3 minutes to start your day anchored in Scripture.",
    icon: BookOpen,
    color: "#6B4FBB",
    subscribers: "89K",
    popular: false,
  },
  {
    name: "Trending Theology",
    frequency: "Every Thursday",
    description: "Deep dives into theological debates happening in the Church right now — balanced, well-sourced, and never boring.",
    icon: TrendingUp,
    color: "#3B82F6",
    subscribers: "42K",
    popular: false,
  },
  {
    name: "Global Church Report",
    frequency: "Every other Friday",
    description: "What's happening in the body of Christ worldwide — revival, persecution, missions, and growth stories.",
    icon: Flame,
    color: "#EF4444",
    subscribers: "31K",
    popular: false,
  },
];

const testimonials = [
  { name: "Rachel K.", location: "Texas, USA", quote: "The Weekly Vine is the only newsletter I actually read every single week. It feels written for me." },
  { name: "Kweku A.", location: "Accra, Ghana", quote: "Daily Bread changed my mornings. Started my day with Scripture instead of Twitter — completely different life." },
  { name: "Elena M.", location: "Amsterdam, NL", quote: "Trending Theology helped me think through deconstruction without deconstructing. Thoughtful and honest." },
];

export default function NewsletterPage() {
  const [email, setEmail] = useState(() => {
    try { return localStorage.getItem("vine_newsletter_email") ?? ""; } catch { return ""; }
  });
  const [selected, setSelected] = useState<string[]>(() => {
    try {
      const s = localStorage.getItem("vine_newsletter_editions");
      return s ? (JSON.parse(s) as string[]) : ["The Weekly Vine"];
    } catch { return ["The Weekly Vine"]; }
  });
  const [submitted, setSubmitted] = useState(() => {
    try { return localStorage.getItem("vine_newsletter_subscribed") === "true"; } catch { return false; }
  });
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_newsletter_editions", JSON.stringify(selected)); } catch {}
  }, [selected]);

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const handleSubscribe = () => {
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    if (!selected.length) return;
    setEmailError("");
    try {
      localStorage.setItem("vine_newsletter_email", email);
      localStorage.setItem("vine_newsletter_subscribed", "true");
    } catch {}
    setSubmitted(true);
  };

  const toggleEdition = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <main id="main-content">
      <div className="page-body pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail size={22} style={{ color: "#3a7d56" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>
                Newsletters
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-5">
              Faith in your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3a7d56, #6B4FBB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                inbox.
              </span>
            </h1>
            <p className="text-lg mb-4" style={{ color: "#6A6A88" }}>
              Curated content — never algorithmic. Choose what resonates and we&apos;ll deliver it when you actually want it.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm" style={{ color: "#4A4A68" }}>
              <span className="flex items-center gap-1.5"><Users size={14} /> 286K subscribers</span>
              <span className="flex items-center gap-1.5"><Star size={14} /> 4.9/5 rating</span>
              <span>No spam. Ever.</span>
            </div>
          </div>
        </div>

        {/* Editions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>
            Choose Your Editions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {editions.map((ed) => {
              const Icon = ed.icon;
              const isSelected = selected.includes(ed.name);
              return (
                <div
                  key={ed.name}
                  onClick={() => toggleEdition(ed.name)}
                  className="rounded-2xl p-6 cursor-pointer transition-all relative"
                  style={{
                    background: isSelected ? `${ed.color}08` : "rgba(255,255,255,0.02)",
                    border: `1px solid ${isSelected ? ed.color + "50" : "rgba(255,255,255,0.06)"}`,
                  }}
                >
                  {ed.popular && (
                    <div
                      className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(58,125,86,0.15)", color: "#3a7d56" }}
                    >
                      Most Popular
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${ed.color}20` }}
                    >
                      <Icon size={20} style={{ color: ed.color }} />
                    </div>
                    <div className="flex-1 pr-6">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-bold text-base" style={{ color: "#F2F2F8" }}>{ed.name}</h3>
                        {isSelected && <CheckCircle size={16} style={{ color: ed.color }} />}
                      </div>
                      <p className="text-xs mb-2 font-semibold" style={{ color: ed.color }}>{ed.frequency}</p>
                      <p className="text-sm mb-3 leading-relaxed" style={{ color: "#6A6A88" }}>{ed.description}</p>
                      <p className="text-xs" style={{ color: "#4A4A68" }}>{ed.subscribers} subscribers</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subscribe Form */}
          {!submitted ? (
            <div
              className="max-w-xl mx-auto rounded-2xl p-8"
              style={{
                background: "linear-gradient(135deg, rgba(58,125,86,0.06) 0%, rgba(107,79,187,0.06) 100%)",
                border: "1px solid rgba(58,125,86,0.15)",
              }}
            >
              <h3 className="text-xl font-black mb-2 text-center" style={{ color: "#F2F2F8" }}>
                {selected.length === 0 ? "Select an edition above" : `Subscribe to ${selected.length} edition${selected.length > 1 ? "s" : ""}`}
              </h3>
              {selected.length > 0 && (
                <p className="text-sm text-center mb-6" style={{ color: "#6A6A88" }}>
                  {selected.join(" · ")}
                </p>
              )}
              <div className="flex gap-3">
                <input
                  type="email"
                  autoComplete="email"
                  aria-label="Your email address" placeholder="your@email.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(""); }}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: `1px solid ${emailError ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)"}`,
                    color: "#F2F2F8",
                  }}
                />
                <button type="button"
                  onClick={handleSubscribe}
                  className="px-6 py-3 rounded-xl font-bold text-sm text-black transition-opacity"
                  style={{
                    background: "linear-gradient(135deg, #3a7d56, #3a7d56)",
                    opacity: email && selected.length ? 1 : 0.5,
                  }}
                >
                  Subscribe
                </button>
              </div>
              {emailError && (
                <p className="text-xs text-center mt-2" style={{ color: "#EF4444" }}>{emailError}</p>
              )}
              <p className="text-xs text-center mt-3" style={{ color: "#4A4A68" }}>
                No spam. Unsubscribe anytime. We&apos;ll never sell your email.
              </p>
            </div>
          ) : (
            <div
              className="max-w-xl mx-auto rounded-2xl p-8 text-center"
              style={{
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              <CheckCircle size={40} style={{ color: "#10B981" }} className="mx-auto mb-4" />
              <h3 className="text-xl font-black mb-2" style={{ color: "#F2F2F8" }}>You&apos;re in!</h3>
              <p className="text-sm mb-4" style={{ color: "#6A6A88" }}>
                Check your inbox for a confirmation email. Your first issue arrives Sunday morning.
              </p>
              <p className="text-xs" style={{ color: "#4A4A68" }}>
                Subscribed as <span style={{ color: "#8A8AA8" }}>{email}</span> ·{" "}
                <button type="button"
                  onClick={() => {
                    try {
                      localStorage.removeItem("vine_newsletter_subscribed");
                      localStorage.removeItem("vine_newsletter_email");
                    } catch {}
                    setEmail("");
                    setSubmitted(false);
                  }}
                  className="underline"
                  style={{ color: "#6A6A88" }}
                >
                  Unsubscribe
                </button>
              </p>
            </div>
          )}
        </div>

        {/* Past Issues */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black" style={{ color: "#F2F2F8" }}>
              Past Issues
            </h2>
            <span className="text-sm" style={{ color: "#4A4A68" }}>
              {pastIssues.length} issues published
            </span>
          </div>
          <div className="space-y-4">
            {pastIssues.map((issue, i) => (
              <div
                key={i}
                className="group rounded-xl p-5 cursor-pointer transition-all"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(58,125,86,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black shrink-0"
                    style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56" }}
                  >
                    {issue.issue}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <span className="text-xs" style={{ color: "#4A4A68" }}>{issue.date}</span>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}
                      >
                        {issue.opens} open rate
                      </span>
                    </div>
                    <h3 className="font-bold text-base mb-1.5 group-hover:text-[#3a7d56] transition-colors" style={{ color: "#F2F2F8" }}>
                      {issue.title}
                    </h3>
                    <p className="text-sm mb-3" style={{ color: "#6A6A88" }}>{issue.preview}</p>
                    <div className="flex gap-2 flex-wrap">
                      {issue.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: "rgba(255,255,255,0.05)", color: "#8A8AA8" }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronRight size={16} className="shrink-0 mt-1 group-hover:text-[#3a7d56] transition-colors" style={{ color: "#4A4A68" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>What Readers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} style={{ color: "#3a7d56" }} />
                  ))}
                </div>
                <p className="text-sm italic mb-4 leading-relaxed" style={{ color: "#C0C0D8" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#F2F2F8" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#4A4A68" }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
