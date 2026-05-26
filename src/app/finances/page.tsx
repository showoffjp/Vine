"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DollarSign,
  TrendingUp,
  PiggyBank,
  BookOpen,
  Heart,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Coins,
  BarChart3,
} from "lucide-react";


const principles = [
  {
    icon: "📖",
    verse: "\"Bring the whole tithe into the storehouse...\"",
    ref: "Malachi 3:10",
    title: "The Tithe",
    body: "Giving 10% first isn't guilt — it's an act of trust and worship that reorients your whole financial life.",
  },
  {
    icon: "⚠️",
    verse: "\"The borrower is slave to the lender.\"",
    ref: "Proverbs 22:7",
    title: "The Danger of Debt",
    body: "Debt isn't always sin, but Scripture is clear: financial bondage limits your freedom to obey God and serve others.",
  },
  {
    icon: "🌱",
    verse: "\"Dishonest money dwindles away, but whoever gathers money little by little makes it grow.\"",
    ref: "Proverbs 13:11",
    title: "Patient Building",
    body: "The Bible consistently rewards steady faithfulness over get-rich-quick schemes.",
  },
  {
    icon: "🎁",
    verse: "\"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.\"",
    ref: "2 Corinthians 9:7",
    title: "Generous Living",
    body: "Generosity isn't a budget line — it's a posture of the heart that transforms how you hold everything.",
  },
];

const steps = [
  {
    step: "01",
    title: "Know Your Numbers",
    description: "You can't steward what you don't track. Start with a brutally honest budget.",
    icon: BarChart3,
    color: "#00FF88",
  },
  {
    step: "02",
    title: "Build a $1,000 Emergency Fund",
    description: "Before paying off debt, create a small buffer so unexpected costs don't spiral.",
    icon: PiggyBank,
    color: "#6B4FBB",
  },
  {
    step: "03",
    title: "Attack Debt — Smallest Balance First",
    description: "The debt snowball method builds momentum and psychological wins that keep you going.",
    icon: TrendingUp,
    color: "#10B981",
  },
  {
    step: "04",
    title: "Build 3–6 Months of Expenses",
    description: "A fully-funded emergency fund removes panic from the equation and builds godly peace.",
    icon: CheckCircle,
    color: "#3B82F6",
  },
  {
    step: "05",
    title: "Invest 15% for Retirement",
    description: "Provide for the future without hoarding. Compound interest is math you want working for you.",
    icon: Coins,
    color: "#F59E0B",
  },
  {
    step: "06",
    title: "Give Generously & Build Wealth",
    description: "Once your house is in order, the goal shifts: build wealth to bless others with excellence.",
    icon: Heart,
    color: "#EC4899",
  },
];

const resources = [
  {
    title: "The Treasure Principle",
    type: "Book",
    author: "Randy Alcorn",
    description: "A short, powerful read on giving, generosity, and storing up eternal treasure.",
    emoji: "📚",
    tagColor: "#6B4FBB",
  },
  {
    title: "Money, Possessions, and Eternity",
    type: "Book",
    author: "Randy Alcorn",
    description: "The definitive Christian guide to a comprehensive biblical view of money and possessions.",
    emoji: "📗",
    tagColor: "#6B4FBB",
  },
  {
    title: "Your Money or Your Life",
    type: "Framework",
    author: "Vicki Robin",
    description: "A secular book with principles that align remarkably well with biblical stewardship.",
    emoji: "💡",
    tagColor: "#00FF88",
  },
  {
    title: "Jesus on Money — Matthew 6:19-34",
    type: "Scripture",
    author: "Jesus Christ",
    description: "The Sermon on the Mount's financial teaching remains the most countercultural thing ever said about money.",
    emoji: "✝️",
    tagColor: "#10B981",
  },
];

const stats = [
  { label: "Bible verses about money", value: "2,350+", note: "More than prayer or faith" },
  { label: "Avg Christian giving rate", value: "2.5%", note: "vs. the biblical 10%" },
  { label: "Americans with $1k savings", value: "44%", note: "Most live paycheck-to-paycheck" },
  { label: "Families freed from debt via biblical principles", value: "Millions", note: "This is achievable" },
];

export default function FinancesPage() {
  const [income, setIncome] = useState("");
  const [period, setPeriod] = useState<"monthly" | "annual">("monthly");

  const monthly = period === "monthly" ? parseFloat(income) || 0 : (parseFloat(income) || 0) / 12;
  const give = monthly * 0.10;
  const save = monthly * 0.10;
  const live = monthly * 0.80;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: "#00FF88" }}>
              Life & Faith · Finances
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              Stewardship, not{" "}
              <span style={{ background: "linear-gradient(135deg, #00FF88, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                stress.
              </span>
            </h1>
            <p className="text-lg mb-8" style={{ color: "#6A6A88" }}>
              Jesus talked about money more than heaven and hell combined. Biblical finance isn&apos;t about prosperity theology — it&apos;s about freedom, wisdom, and generosity.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-5 text-center"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="text-3xl font-black mb-1" style={{ color: "#00FF88" }}>{s.value}</p>
                <p className="text-sm font-semibold mb-1" style={{ color: "#F2F2F8" }}>{s.label}</p>
                <p className="text-xs" style={{ color: "#4A4A68" }}>{s.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Biblical Principles */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>
            4 Biblical Money Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,255,136,0.08)" }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{p.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "#F2F2F8" }}>{p.title}</h3>
                    <p className="text-sm italic mb-3 leading-relaxed" style={{ color: "#00DD77" }}>
                      {p.verse} <span className="not-italic font-bold" style={{ color: "#007A33" }}>— {p.ref}</span>
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6A6A88" }}>{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6-Step Plan */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>
            The Biblical Financial Freedom Path
          </h2>
          <p className="text-base mb-8" style={{ color: "#6A6A88" }}>
            Inspired by time-tested stewardship principles. Work the steps in order.
          </p>
          <div className="space-y-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="flex gap-5 p-6 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${step.color}20`, border: `1px solid ${step.color}30` }}
                  >
                    <Icon size={20} style={{ color: step.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-black" style={{ color: "rgba(0,255,136,0.3)" }}>{step.step}</span>
                      <h3 className="font-bold text-base" style={{ color: "#F2F2F8" }}>{step.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#6A6A88" }}>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommended Resources */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>
            Curated Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resources.map((r, i) => (
              <div
                key={i}
                className="group rounded-xl p-5 flex gap-4 cursor-pointer transition-all"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(0,255,136,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <span className="text-3xl shrink-0">{r.emoji}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: `${r.tagColor}15`, color: r.tagColor }}
                    >
                      {r.type}
                    </span>
                    <span className="text-xs" style={{ color: "#4A4A68" }}>by {r.author}</span>
                  </div>
                  <h3 className="font-bold text-base mb-1 group-hover:text-[#00FF88] transition-colors" style={{ color: "#F2F2F8" }}>
                    {r.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#6A6A88" }}>{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 10-10-80 Calculator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-2xl p-8" style={{ background: "rgba(0,255,136,0.04)", border: "1px solid rgba(0,255,136,0.15)" }}>
            <div className="flex items-center gap-3 mb-2">
              <Coins size={20} style={{ color: "#00FF88" }} />
              <h2 className="text-xl font-black" style={{ color: "#F2F2F8" }}>10-10-80 Budget Calculator</h2>
            </div>
            <p className="text-sm mb-6" style={{ color: "#6A6A88" }}>Enter your income and see how the biblical 10-10-80 method divides it.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <label className="text-xs font-bold uppercase tracking-widest block mb-2" style={{ color: "#8A8AA8" }}>Your Income</label>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                  <DollarSign size={14} style={{ color: "#6A6A88" }} />
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    placeholder="5000"
                    className="flex-1 bg-transparent text-sm outline-none"
                    style={{ color: "#F2F2F8" }}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest block mb-2" style={{ color: "#8A8AA8" }}>Period</label>
                <div className="flex rounded-xl overflow-hidden" style={{ border: "1px solid #1E1E32" }}>
                  {(["monthly", "annual"] as const).map((p) => (
                    <button key={p} onClick={() => setPeriod(p)} className="px-4 py-3 text-xs font-bold capitalize transition-all" style={{ background: period === p ? "#00FF88" : "#12121F", color: period === p ? "#07070F" : "#8A8AA8" }}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Give (10%)", value: give, color: "#00FF88", verse: "Malachi 3:10", icon: "🎁" },
                { label: "Save (10%)", value: save, color: "#6B4FBB", verse: "Proverbs 13:11", icon: "🏦" },
                { label: "Live (80%)", value: live, color: "#4FBBAA", verse: "Matthew 6:33", icon: "🏠" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-5 text-center" style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: item.color }}>{item.label}</p>
                  <p className="text-2xl font-black mb-1" style={{ color: "#F2F2F8" }}>{income ? fmt(item.value) : "—"}</p>
                  <p className="text-[10px]" style={{ color: "#6A6A88" }}>per month · {item.verse}</p>
                </div>
              ))}
            </div>
            {monthly > 0 && (
              <p className="text-center text-xs mt-4" style={{ color: "#6A6A88" }}>
                Annual income: <strong style={{ color: "#F2F2F8" }}>{fmt(monthly * 12)}</strong> → Give {fmt(monthly * 12 * 0.10)}/yr · Save {fmt(monthly * 12 * 0.10)}/yr · Live on {fmt(monthly * 12 * 0.80)}/yr
              </p>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(16,185,129,0.06) 100%)",
              border: "1px solid rgba(0,255,136,0.12)",
            }}
          >
            <DollarSign size={32} style={{ color: "#00FF88" }} className="mx-auto mb-4" />
            <h3 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>
              Ask a Financial Stewardship Question
            </h3>
            <p className="text-base mb-6 max-w-lg mx-auto" style={{ color: "#6A6A88" }}>
              Get Scripture-grounded wisdom on debt, giving, budgeting, and more from the AI Bible Companion.
            </p>
            <a
              href="/ai-companion"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-black"
              style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
            >
              Ask Now <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
