"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  BookOpen,
  Sparkles,
  Users,
  Heart,
  Music,
  Baby,
  Briefcase,
  GraduationCap,
  Shield,
  Brain,
  DollarSign,
  Globe,
  Zap,
  Star,
  MessageCircle,
  Headphones,
  CheckCircle,
} from "lucide-react";

const interests = [
  { icon: BookOpen, label: "Theology" },
  { icon: Shield, label: "Apologetics" },
  { icon: Heart, label: "Mental Health" },
  { icon: DollarSign, label: "Biblical Finance" },
  { icon: Baby, label: "Parenting" },
  { icon: Briefcase, label: "Leadership" },
  { icon: Music, label: "Worship & Music" },
  { icon: Users, label: "Community" },
  { icon: Brain, label: "Devotionals" },
  { icon: Globe, label: "Missions" },
  { icon: Zap, label: "Prayer" },
  { icon: GraduationCap, label: "Students" },
  { icon: Star, label: "Men of God" },
  { icon: Sparkles, label: "Women of Faith" },
  { icon: MessageCircle, label: "Relationships" },
  { icon: Headphones, label: "Podcasts" },
];

const denominations = [
  "Non-denominational",
  "Baptist",
  "Catholic",
  "Methodist",
  "Presbyterian",
  "Pentecostal",
  "Anglican",
  "Lutheran",
  "Orthodox",
  "Other",
];

const faithDurations = [
  "Less than 1 year",
  "1–5 years",
  "5–10 years",
  "10+ years",
  "Since birth",
];

const readingPlans = [
  {
    name: "New Testament in 90 Days",
    duration: "90 days",
    chaptersPerDay: "~3 chapters/day",
    difficulty: "Beginner",
    difficultyColor: "#4FBBAA",
    description: "A focused journey through the entire New Testament in three months.",
    color: "#6B4FBB",
  },
  {
    name: "Psalms & Proverbs",
    duration: "30 days",
    chaptersPerDay: "~5 chapters/day",
    difficulty: "Easy",
    difficultyColor: "#4F8FBB",
    description: "Immerse yourself in Israel's songs of worship and wisdom literature.",
    color: "#4F8FBB",
  },
  {
    name: "Gospels Deep Dive",
    duration: "45 days",
    chaptersPerDay: "~2 chapters/day",
    difficulty: "Moderate",
    difficultyColor: "#3a7d56",
    description: "A slow, reflective journey through Matthew, Mark, Luke, and John.",
    color: "#3a7d56",
  },
  {
    name: "The Full Bible in a Year",
    duration: "365 days",
    chaptersPerDay: "~3–4 chapters/day",
    difficulty: "Committed",
    difficultyColor: "#BB4F7A",
    description: "The complete Bible, Genesis to Revelation, in one transformative year.",
    color: "#BB4F7A",
  },
];

const TOTAL_STEPS = 5;

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    location: "",
    denomination: "",
    faithDuration: "",
  });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const progress = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  function toggleInterest(label: string) {
    setSelectedInterests((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  }

  function canAdvance(): boolean {
    if (step === 2) return form.firstName.trim().length > 0 && form.username.trim().length > 0;
    if (step === 3) return selectedInterests.length >= 3;
    if (step === 4) return selectedPlan !== null;
    return true;
  }

  function handleFinishSetup() {
    const userData = {
      name: `${form.firstName} ${form.lastName}`.trim() || form.firstName,
      firstName: form.firstName,
      lastName: form.lastName,
      email: `${form.username}@vine.community`,
      avatar: (form.firstName[0] || "V").toUpperCase() + (form.lastName[0] || "M").toUpperCase(),
      interests: selectedInterests,
      denomination: form.denomination,
      faithDuration: form.faithDuration,
      location: form.location,
      readingPlan: selectedPlan,
      joinedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem("vine_user", JSON.stringify(userData));
    } catch {}
    setStep((s) => s + 1);
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ background: "#07070F" }}
    >
      <Navbar />
      <main id="main-content">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(107,79,187,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative w-full max-w-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #3a7d56 0%, #8B6FDB 100%)" }}
          >
            <span className="text-black font-black text-sm">V</span>
          </div>
          <span className="text-xl font-black tracking-tight" style={{ color: "#F2F2F8" }}>
            Vine
          </span>
        </div>

        {/* Progress Bar */}
        {step < 5 && (
          <div className="mb-8">
            <div
              className="w-full h-1.5 rounded-full mb-2 overflow-hidden"
              style={{ background: "#1E1E32" }}
            >
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #3a7d56, #52a876)",
                }}
              />
            </div>
            <div className="flex justify-between text-[10px]" style={{ color: "#6A6A88" }}>
              <span>Step {step} of {TOTAL_STEPS - 1}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
          </div>
        )}

        {/* STEP 1: Welcome */}
        {step === 1 && (
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "linear-gradient(135deg, #3a7d56 0%, #8B6FDB 100%)" }}
            >
              <span className="text-4xl font-black text-black">V</span>
            </div>
            <span className="tag-pill inline-block mb-4">Welcome to the family</span>
            <h1 className="text-4xl font-black mb-3 leading-tight" style={{ color: "#F2F2F8" }}>
              Welcome to{" "}
              <span className="gold-gradient">Vine</span>
            </h1>
            <p className="text-lg font-semibold mb-2" style={{ color: "#8A8AA8" }}>
              The world&apos;s first all-in-one Christian platform
            </p>
            <p className="text-sm mb-8 max-w-sm mx-auto leading-relaxed" style={{ color: "#6A6A88" }}>
              Community. Bible tools. Daily devotionals. Mental health. Discussions. Everything your faith needs,
              all in one place.
            </p>
            <div className="flex flex-col gap-3 max-w-xs mx-auto">
              <button type="button"
                onClick={() => setStep(2)}
                className="btn-gold w-full py-3.5 rounded-2xl text-base font-bold flex items-center justify-center gap-2"
              >
                Let&apos;s get you set up
                <ChevronRight size={18} />
              </button>
              <p className="text-xs" style={{ color: "#6A6A88" }}>
                Takes about 2 minutes. No credit card required.
              </p>
            </div>
          </div>
        )}

        {/* STEP 2: Basic Info */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-black mb-1 text-center" style={{ color: "#F2F2F8" }}>
              Tell us about yourself
            </h2>
            <p className="text-sm text-center mb-7" style={{ color: "#8A8AA8" }}>
              This helps us personalize your experience
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#8A8AA8" }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    aria-label="Jason" placeholder="Jason"
                    value={form.firstName}
                    onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:border-[rgba(58,125,86,0.5)]"
                    style={{ background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#8A8AA8" }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    aria-label="Harper" placeholder="Harper"
                    value={form.lastName}
                    onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#8A8AA8" }}>
                  Username *
                </label>
                <div className="flex items-center rounded-xl overflow-hidden" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                  <span className="pl-4 text-sm" style={{ color: "#6A6A88" }}>@</span>
                  <input
                    type="text"
                    aria-label="jasonharper" placeholder="jasonharper"
                    value={form.username}
                    onChange={(e) => setForm((f) => ({ ...f, username: e.target.value.replace(/\s/g, "") }))}
                    className="flex-1 px-2 py-3 text-sm outline-none bg-transparent"
                    style={{ color: "#F2F2F8" }}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#8A8AA8" }}>
                  Location (optional)
                </label>
                <input
                  type="text"
                  aria-label="Houston, TX" placeholder="Houston, TX"
                  value={form.location}
                  onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                />
              </div>

              <div>
                <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#8A8AA8" }}>
                  Denomination
                </label>
                <select aria-label="Denomination"
                  value={form.denomination}
                  onChange={(e) => setForm((f) => ({ ...f, denomination: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none cursor-pointer"
                  style={{ background: "#12121F", border: "1px solid #1E1E32", color: form.denomination ? "#F2F2F8" : "#6A6A88" }}
                >
                  <option value="">Select your denomination</option>
                  {denominations.map((d) => (
                    <option key={d} value={d} style={{ background: "#12121F", color: "#F2F2F8" }}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#8A8AA8" }}>
                  How long have you been a Christian?
                </label>
                <div className="flex flex-wrap gap-2">
                  {faithDurations.map((d) => (
                    <button type="button"
                      key={d}
                      onClick={() => setForm((f) => ({ ...f, faithDuration: d }))}
                      className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
                      style={{
                        background: form.faithDuration === d ? "rgba(58,125,86,0.15)" : "#12121F",
                        border: form.faithDuration === d ? "1px solid rgba(58,125,86,0.4)" : "1px solid #1E1E32",
                        color: form.faithDuration === d ? "#3a7d56" : "#8A8AA8",
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Interests */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-black mb-1 text-center" style={{ color: "#F2F2F8" }}>
              What matters to you?
            </h2>
            <p className="text-sm text-center mb-2" style={{ color: "#8A8AA8" }}>
              Select at least 3 interests to personalize your feed
            </p>
            <p className="text-xs text-center mb-6" style={{ color: selectedInterests.length >= 3 ? "#4FBBAA" : "#3a7d56" }}>
              {selectedInterests.length} selected {selectedInterests.length >= 3 ? "✓" : `(need ${3 - selectedInterests.length} more)`}
            </p>

            <div className="grid grid-cols-2 gap-2">
              {interests.map((interest) => {
                const selected = selectedInterests.includes(interest.label);
                return (
                  <button type="button"
                    key={interest.label}
                    onClick={() => toggleInterest(interest.label)}
                    className="flex items-center gap-3 p-3.5 rounded-xl text-sm font-semibold text-left transition-all duration-200"
                    style={{
                      background: selected ? "rgba(58,125,86,0.10)" : "#12121F",
                      border: selected ? "1px solid rgba(58,125,86,0.4)" : "1px solid #1E1E32",
                      color: selected ? "#3a7d56" : "#8A8AA8",
                      transform: selected ? "scale(1.02)" : "scale(1)",
                    }}
                  >
                    <interest.icon size={16} style={{ color: selected ? "#3a7d56" : "#6A6A88", flexShrink: 0 }} />
                    <span className="truncate">{interest.label}</span>
                    {selected && <Check size={14} className="ml-auto flex-shrink-0" style={{ color: "#3a7d56" }} />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: Reading Plan */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-black mb-1 text-center" style={{ color: "#F2F2F8" }}>
              Start your first reading plan
            </h2>
            <p className="text-sm text-center mb-6" style={{ color: "#8A8AA8" }}>
              Choose a plan that fits your season of life. You can change it anytime.
            </p>

            <div className="space-y-3">
              {readingPlans.map((plan) => {
                const selected = selectedPlan === plan.name;
                return (
                  <div
                    key={plan.name}
                    onClick={() => setSelectedPlan(plan.name)}
                    className="rounded-2xl p-5 cursor-pointer transition-all duration-200"
                    style={{
                      background: selected ? `${plan.color}10` : "#12121F",
                      border: selected ? `1px solid ${plan.color}50` : "1px solid #1E1E32",
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-sm font-black" style={{ color: "#F2F2F8" }}>
                            {plan.name}
                          </h3>
                          {selected && <Check size={14} style={{ color: plan.color }} />}
                        </div>
                        <p className="text-xs leading-relaxed mb-2" style={{ color: "#8A8AA8" }}>
                          {plan.description}
                        </p>
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "#1E1E32", color: "#6A6A88" }}>
                            {plan.duration}
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "#1E1E32", color: "#6A6A88" }}>
                            {plan.chaptersPerDay}
                          </span>
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{
                              background: `${plan.difficultyColor}15`,
                              color: plan.difficultyColor,
                              border: `1px solid ${plan.difficultyColor}30`,
                            }}
                          >
                            {plan.difficulty}
                          </span>
                        </div>
                      </div>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${plan.color}15`, border: `1px solid ${plan.color}30` }}
                      >
                        <BookOpen size={18} style={{ color: plan.color }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 5: Done */}
        {step === 5 && (
          <div className="text-center">
            {/* Animated checkmark */}
            <div className="relative flex items-center justify-center mb-6">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #3a7d56 0%, #52a876 100%)",
                  boxShadow: "0 0 60px rgba(58,125,86,0.3)",
                }}
              >
                <CheckCircle size={40} style={{ color: "#07070F" }} />
              </div>
              <div
                className="absolute w-32 h-32 rounded-full animate-ping opacity-20"
                style={{ background: "rgba(58,125,86,0.3)" }}
              />
            </div>

            <h2 className="text-3xl font-black mb-2" style={{ color: "#F2F2F8" }}>
              You&apos;re in,{" "}
              <span className="gold-gradient">{form.firstName || "friend"}</span>! 🎉
            </h2>
            <p className="text-base mb-8" style={{ color: "#8A8AA8" }}>
              Welcome to the Vine community. Your faith journey starts now.
            </p>

            {/* Summary */}
            <div
              className="rounded-2xl p-5 mb-7 text-left space-y-3"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#3a7d56" }}>
                Your Setup
              </h3>
              {form.denomination && (
                <div className="flex items-center gap-2">
                  <CheckCircle size={13} style={{ color: "#4FBBAA" }} />
                  <span className="text-sm" style={{ color: "#C0C0D8" }}>
                    Denomination: <strong style={{ color: "#F2F2F8" }}>{form.denomination}</strong>
                  </span>
                </div>
              )}
              {form.faithDuration && (
                <div className="flex items-center gap-2">
                  <CheckCircle size={13} style={{ color: "#4FBBAA" }} />
                  <span className="text-sm" style={{ color: "#C0C0D8" }}>
                    In faith: <strong style={{ color: "#F2F2F8" }}>{form.faithDuration}</strong>
                  </span>
                </div>
              )}
              {selectedInterests.length > 0 && (
                <div className="flex items-start gap-2">
                  <CheckCircle size={13} className="mt-0.5" style={{ color: "#4FBBAA" }} />
                  <div>
                    <span className="text-sm" style={{ color: "#C0C0D8" }}>
                      Interests:{" "}
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedInterests.map((i) => (
                        <span key={i} className="tag-pill">
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {selectedPlan && (
                <div className="flex items-center gap-2">
                  <CheckCircle size={13} style={{ color: "#4FBBAA" }} />
                  <span className="text-sm" style={{ color: "#C0C0D8" }}>
                    Reading Plan: <strong style={{ color: "#F2F2F8" }}>{selectedPlan}</strong>
                  </span>
                </div>
              )}
            </div>

            <Link href="/feed" className="block">
              <button type="button" className="btn-gold w-full py-4 rounded-2xl text-base font-black flex items-center justify-center gap-2">
                Enter Vine →
                <ChevronRight size={18} />
              </button>
            </Link>
            <p className="text-xs mt-3" style={{ color: "#6A6A88" }}>
              You can update your profile and settings anytime.
            </p>
          </div>
        )}

        {/* Navigation Buttons (steps 2–4) */}
        {step >= 2 && step <= 4 && (
          <div className="flex items-center justify-between mt-8">
            <button type="button"
              onClick={() => setStep((s) => s - 1)}
              className="btn-outline-gold flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
            >
              <ChevronLeft size={16} />
              Back
            </button>
            <button type="button"
              onClick={step === 4 ? handleFinishSetup : () => setStep((s) => s + 1)}
              disabled={!canAdvance()}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200"
              style={{
                background: canAdvance()
                  ? "linear-gradient(135deg, #4a9e6e 0%, #3a7d56 50%, #4a9e6e 100%)"
                  : "#1E1E32",
                color: canAdvance() ? "#07070F" : "#6A6A88",
                cursor: canAdvance() ? "pointer" : "not-allowed",
              }}
            >
              {step === 4 ? "Finish Setup" : "Continue"}
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
