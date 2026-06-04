"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  MessageSquare,
  Users,
  Shield,
  ChevronRight,
  CheckCircle,
  Phone,
  MapPin,
} from "lucide-react";
import { useState, useEffect } from "react";

const reasons = [
  { value: "general", label: "General Question" },
  { value: "partnership", label: "Partnership / Collaboration" },
  { value: "press", label: "Press Inquiry" },
  { value: "bug", label: "Report a Bug" },
  { value: "prayer", label: "Prayer Request" },
  { value: "content", label: "Content Submission" },
  { value: "other", label: "Other" },
];

const teamOptions = [
  {
    icon: MessageSquare,
    title: "General Support",
    description: "Questions about the platform, features, or how to get started.",
    email: "hello@vine.community",
    color: "#3a7d56",
  },
  {
    icon: Shield,
    title: "Safety & Trust",
    description: "Report abuse, content violations, or safety concerns.",
    email: "safety@vine.community",
    color: "#EF4444",
  },
  {
    icon: Users,
    title: "Partnerships",
    description: "Explore ways to collaborate — churches, ministries, creators.",
    email: "partners@vine.community",
    color: "#6B4FBB",
  },
  {
    icon: Mail,
    title: "Press & Media",
    description: "Media kit, press releases, interview requests.",
    email: "press@vine.community",
    color: "#10B981",
  },
];

const faqs = [
  {
    q: "Is Vine free?",
    a: "Yes — Vine's core features are completely free. We believe access to biblical community and resources should not be gatekept by a paywall.",
  },
  {
    q: "How do I report inappropriate content?",
    a: "Use the three-dot menu on any post, profile, or comment and select 'Report'. Our trust & safety team reviews all reports within 24 hours.",
  },
  {
    q: "Can my church or ministry partner with Vine?",
    a: "Absolutely. We work with churches, parachurch organizations, and ministries to give your community a digital home. Email partners@vine.community.",
  },
  {
    q: "Is the AI Companion theologically sound?",
    a: "The AI is trained to be orthodox and Scripture-first. It is always reviewed against biblical standards. It is a tool, not a pastor — use it accordingly.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<{ name: string; email: string; reason: string; message: string }>(() => {
    try { const s = localStorage.getItem("vine_contact_draft"); return s ? JSON.parse(s) : { name: "", email: "", reason: "general", message: "" }; } catch { return { name: "", email: "", reason: "general", message: "" }; }
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try { localStorage.setItem("vine_contact_draft", JSON.stringify(form)); } catch {}
  }, [form]);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      try { localStorage.removeItem("vine_contact_draft"); } catch {}
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <main>
      <div className="page-body pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: "#3a7d56" }}>
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mb-5">
              We&apos;d love to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3a7d56, #6B4FBB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                hear from you.
              </span>
            </h1>
            <p className="text-lg" style={{ color: "#6A6A88" }}>
              Got a question, a partnership idea, or a prayer request? We&apos;re real people who actually read every message.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {!submitted ? (
                <div
                  className="rounded-2xl p-8"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <h2 className="text-xl font-black mb-6" style={{ color: "#F2F2F8" }}>
                    Send a Message
                  </h2>
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: "#8A8AA8" }}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          aria-label="Your Name" placeholder="John Smith"
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#F2F2F8",
                          }}
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: "#8A8AA8" }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          aria-label="Email Address" placeholder="you@email.com"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#F2F2F8",
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: "#8A8AA8" }}>
                        Reason for Contacting
                      </label>
                      <select aria-label="Reason for Contacting"
                        value={form.reason}
                        onChange={(e) => setForm({ ...form, reason: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#F2F2F8",
                        }}
                      >
                        {reasons.map((r) => (
                          <option key={r.value} value={r.value} style={{ background: "#0E0E1A" }}>
                            {r.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: "#8A8AA8" }}>
                        Message
                      </label>
                      <textarea
                        aria-label="Message" placeholder="Tell us what's on your mind..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#F2F2F8",
                        }}
                      />
                    </div>

                    <button type="button"
                      onClick={handleSubmit}
                      className="w-full py-3.5 rounded-xl font-bold text-sm text-black transition-opacity"
                      style={{
                        background: "linear-gradient(135deg, #3a7d56, #3a7d56)",
                        opacity: form.name && form.email && form.message ? 1 : 0.5,
                      }}
                    >
                      Send Message
                    </button>
                    <p className="text-xs text-center" style={{ color: "#4A4A68" }}>
                      We typically respond within 1–2 business days.
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="rounded-2xl p-12 text-center"
                  style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)" }}
                >
                  <CheckCircle size={48} style={{ color: "#10B981" }} className="mx-auto mb-5" />
                  <h2 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>Message received!</h2>
                  <p className="text-base mb-2" style={{ color: "#6A6A88" }}>
                    Thank you, {form.name}. We&apos;ll reply to {form.email} within 1–2 business days.
                  </p>
                  <p className="text-sm italic" style={{ color: "#4A4A68" }}>
                    In the meantime — peace be with you. 🙏
                  </p>
                </div>
              )}

              {/* FAQs */}
              <div className="mt-8">
                <h2 className="text-xl font-black mb-5" style={{ color: "#F2F2F8" }}>
                  Frequently Asked
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-5"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <h3 className="font-bold text-base mb-2" style={{ color: "#F2F2F8" }}>{faq.q}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6A6A88" }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Contact by team */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#3a7d56" }}>
                  Reach a Specific Team
                </h3>
                <div className="space-y-3">
                  {teamOptions.map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <a
                        key={opt.title}
                        href={`mailto:${opt.email}`}
                        className="group flex gap-3 p-4 rounded-xl transition-all"
                        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = `${opt.color}40`;
                          e.currentTarget.style.background = `${opt.color}06`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                          e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                        }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: `${opt.color}20` }}
                        >
                          <Icon size={16} style={{ color: opt.color }} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold group-hover:text-[#3a7d56] transition-colors" style={{ color: "#F2F2F8" }}>
                            {opt.title}
                          </p>
                          <p className="text-xs mb-1" style={{ color: "#6A6A88" }}>{opt.description}</p>
                          <p className="text-xs font-semibold" style={{ color: opt.color }}>{opt.email}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Location / Info */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3 className="text-sm font-bold mb-4" style={{ color: "#F2F2F8" }}>
                  About Vine
                </h3>
                <div className="space-y-3 text-sm" style={{ color: "#6A6A88" }}>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "#3a7d56" }} />
                    <span>Global — built for every believer, everywhere</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail size={14} className="mt-0.5 shrink-0" style={{ color: "#3a7d56" }} />
                    <span>hello@vine.community</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MessageSquare size={14} className="mt-0.5 shrink-0" style={{ color: "#3a7d56" }} />
                    <span>Response time: 1–2 business days</span>
                  </div>
                </div>
              </div>

              {/* Prayer */}
              <div
                className="rounded-2xl p-5 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(58,125,86,0.06) 0%, rgba(107,79,187,0.06) 100%)",
                  border: "1px solid rgba(58,125,86,0.12)",
                }}
              >
                <p className="text-2xl mb-3">🙏</p>
                <h3 className="font-bold mb-2" style={{ color: "#F2F2F8" }}>Need prayer?</h3>
                <p className="text-sm mb-4" style={{ color: "#6A6A88" }}>
                  Our community prays for every request submitted to the prayer wall — real people, real intercession.
                </p>
                <a
                  href="/prayer"
                  className="flex items-center justify-center gap-1 text-sm font-bold"
                  style={{ color: "#3a7d56" }}
                >
                  Visit Prayer Wall <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
