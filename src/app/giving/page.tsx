import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Globe, Shield, ChevronRight, Star, Users, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Give — Vine",
  description: "Support missionaries, church planters, and the Vine platform. 100% of designated giving goes directly to the field.",
};

const causes = [
  {
    icon: "🌍",
    title: "Frontier Missions Fund",
    description: "Directly funds church planters working in the 10/40 Window — the region with the least evangelical presence on earth.",
    raised: 847200,
    goal: 1000000,
    donors: 4821,
    color: "#EF4444",
    urgency: "Critical need",
    impact: "$50 trains a local evangelism volunteer for one month",
  },
  {
    icon: "📖",
    title: "Bible Translation Project",
    description: "Funding translators working to bring Scripture to languages that have never had a single verse. 7,000+ languages still need work.",
    raised: 312400,
    goal: 500000,
    donors: 2103,
    color: "#D4AF37",
    urgency: "Ongoing",
    impact: "$100 funds one day of a professional translator's work",
  },
  {
    icon: "🧠",
    title: "Christian Mental Health Initiative",
    description: "Training pastors and counselors in low-resource countries to provide biblical, trauma-informed mental health care.",
    raised: 189600,
    goal: 300000,
    donors: 1408,
    color: "#6B4FBB",
    urgency: "Growing need",
    impact: "$200 trains one community mental health volunteer",
  },
  {
    icon: "👶",
    title: "Next Generation Fund",
    description: "Scholarships, discipleship programs, and Christian education resources for young believers in developing nations.",
    raised: 521000,
    goal: 750000,
    donors: 3290,
    color: "#10B981",
    urgency: "Ongoing",
    impact: "$500 sponsors a student's full year at a Christian school",
  },
  {
    icon: "🏥",
    title: "Medical Missions",
    description: "Mobile clinics, surgical teams, and healthcare workers who bring physical healing and the Gospel together.",
    raised: 423800,
    goal: 600000,
    donors: 2874,
    color: "#3B82F6",
    urgency: "High need",
    impact: "$75 provides medical care for one patient",
  },
  {
    icon: "📡",
    title: "Vine Platform Fund",
    description: "Keep Vine free and ad-free for Christians worldwide. Server costs, development, and moderation are real — your support makes it possible.",
    raised: 91200,
    goal: 200000,
    donors: 7821,
    color: "#F59E0B",
    urgency: "Ongoing",
    impact: "$10/month keeps Vine free for 100 users",
  },
];

const partners = [
  { name: "Wycliffe Bible Translators", logo: "📖", region: "Global" },
  { name: "Frontiers", logo: "🌍", region: "Muslim-majority nations" },
  { name: "Samaritan's Purse", logo: "🏥", region: "Crisis zones" },
  { name: "Gospel Coalition", logo: "✝️", region: "North America & UK" },
  { name: "Compassion International", logo: "❤️", region: "Developing nations" },
  { name: "Mission Aviation Fellowship", logo: "✈️", region: "Remote communities" },
];

const testimonials = [
  {
    quote: "The giving through Vine directly funded the building we now meet in. 340 people worship there every Sunday.",
    name: "Carlos Mendez",
    role: "Church planter, Bogotá",
    avatar: "CM",
    color: "#10B981",
    flag: "🇨🇴",
  },
  {
    quote: "A donor I've never met funded six months of my translation work. The Buryat New Testament exists because of generosity like that.",
    name: "Min-Jun Cho",
    role: "Bible translator, Mongolia",
    avatar: "MJ",
    color: "#6B4FBB",
    flag: "🇰🇷",
  },
];

function ProgressBar({ raised, goal, color }: { raised: number; goal: number; color: string }) {
  const pct = Math.min(100, Math.round((raised / goal) * 100));
  return (
    <div className="w-full rounded-full h-1.5 mb-1" style={{ background: "rgba(255,255,255,0.06)" }}>
      <div className="h-1.5 rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

export default function GivingPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart size={22} style={{ color: "#D4AF37" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4AF37" }}>Giving</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-5">
              Give where it{" "}
              <span style={{ background: "linear-gradient(135deg, #D4AF37, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                changes eternity.
              </span>
            </h1>
            <p className="text-lg mb-6" style={{ color: "#6A6A88" }}>
              100% of designated giving goes directly to the field. No overhead deductions on mission fund donations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {[
                { icon: Shield, label: "Vetted partners only" },
                { icon: Globe, label: "57 countries funded" },
                { icon: Users, label: "22,000+ donors" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2" style={{ color: "#8A8AA8" }}>
                  <Icon size={14} style={{ color: "#D4AF37" }} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Causes Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>Active Campaigns</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {causes.map((c) => {
              const pct = Math.min(100, Math.round((c.raised / c.goal) * 100));
              return (
                <div
                  key={c.title}
                  className="rounded-2xl p-6 flex flex-col"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{c.icon}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${c.color}15`, color: c.color }}>
                      {c.urgency}
                    </span>
                  </div>
                  <h3 className="font-black text-base mb-2" style={{ color: "#F2F2F8" }}>{c.title}</h3>
                  <p className="text-sm mb-4 leading-relaxed flex-1" style={{ color: "#6A6A88" }}>{c.description}</p>
                  <div className="mb-1 text-xs flex items-center justify-between" style={{ color: "#4A4A68" }}>
                    <span><strong style={{ color: "#F2F2F8" }}>${(c.raised / 1000).toFixed(0)}k</strong> raised</span>
                    <span>{pct}% of ${(c.goal / 1000).toFixed(0)}k goal</span>
                  </div>
                  <ProgressBar raised={c.raised} goal={c.goal} color={c.color} />
                  <p className="text-xs mb-4" style={{ color: "#4A4A68" }}>
                    {c.donors.toLocaleString()} donors
                  </p>
                  <p className="text-xs mb-4 font-semibold" style={{ color: c.color }}>
                    💡 {c.impact}
                  </p>
                  <button
                    className="w-full py-2.5 rounded-xl font-bold text-sm mt-auto"
                    style={{ background: `linear-gradient(135deg, ${c.color}CC, ${c.color})`, color: "#fff" }}
                  >
                    Give to This Cause
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>From the Field</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-base italic mb-5 leading-relaxed" style={{ color: "#C0C0D8" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black"
                    style={{ background: `${t.color}25`, color: t.color }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#F2F2F8" }}>{t.name} {t.flag}</p>
                    <p className="text-xs" style={{ color: "#6A6A88" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <h2 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>Vetted Partners</h2>
          <p className="text-sm mb-8" style={{ color: "#6A6A88" }}>Every organization we fund has passed financial transparency and theological alignment reviews.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {partners.map((p) => (
              <div key={p.name} className="rounded-xl p-4 text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-3xl mb-2 block">{p.logo}</span>
                <p className="text-xs font-bold" style={{ color: "#C0C0D8" }}>{p.name}</p>
                <p className="text-xs mt-1" style={{ color: "#4A4A68" }}>{p.region}</p>
              </div>
            ))}
          </div>
        </div>

        {/* One-time vs recurring */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(16,185,129,0.06) 100%)", border: "1px solid rgba(212,175,55,0.15)" }}>
            <Heart size={32} style={{ color: "#D4AF37" }} className="mx-auto mb-4" />
            <h3 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>Become a Monthly Partner</h3>
            <p className="text-base mb-6 max-w-lg mx-auto" style={{ color: "#6A6A88" }}>
              Recurring gifts allow us to plan, commit to missionaries long-term, and keep Vine free for the global church.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {[10, 25, 50, 100, 250].map((amt) => (
                <button
                  key={amt}
                  className="px-5 py-2.5 rounded-xl font-bold text-sm"
                  style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)", color: "#D4AF37" }}
                >
                  ${amt}/mo
                </button>
              ))}
            </div>
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-black"
              style={{ background: "linear-gradient(135deg, #D4AF37, #B8942C)" }}>
              Start Giving Monthly <ChevronRight size={16} />
            </button>
            <p className="mt-4 text-xs" style={{ color: "#4A4A68" }}>Cancel anytime. Receipts emailed. Tax-deductible where applicable.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
