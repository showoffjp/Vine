import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Heart, Users, ChevronRight, MapPin, Flame, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Missions — Vine",
  description: "Global missions, unreached peoples, and how to engage the Great Commission from wherever you are.",
};

const stats = [
  { label: "Unreached people groups", value: "7,400+", note: "With little to no access to the Gospel" },
  { label: "People without Scripture", value: "1.5B", note: "In their native language" },
  { label: "Countries with church planting movements", value: "70+", note: "Active movements right now" },
  { label: "Vine missionaries connected", value: "4,200", note: "In 93 countries" },
];

const regions = [
  {
    name: "10/40 Window",
    description: "The band between 10°N and 40°N latitude — home to the majority of the world's unreached people groups and least-evangelized nations.",
    countries: ["Afghanistan", "Pakistan", "India", "China", "Iran", "Iraq", "Saudi Arabia", "North Korea"],
    color: "#EF4444",
    urgency: "Critical",
  },
  {
    name: "Sub-Saharan Africa",
    description: "Explosive church growth meets complex challenges — poverty, political instability, and syncretism requiring deep discipleship.",
    countries: ["South Sudan", "Somalia", "Mali", "Niger", "Burkina Faso", "Chad"],
    color: "#F59E0B",
    urgency: "High",
  },
  {
    name: "Southeast Asia",
    description: "Buddhist and Muslim majority nations with growing house church movements and incredible receptivity in some areas.",
    countries: ["Myanmar", "Cambodia", "Thailand", "Vietnam", "Laos", "Bangladesh"],
    color: "#6B4FBB",
    urgency: "High",
  },
  {
    name: "Post-Soviet Central Asia",
    description: "Formerly atheist, now predominantly Muslim — these nations have some of the least evangelical presence per capita on earth.",
    countries: ["Kazakhstan", "Uzbekistan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Azerbaijan"],
    color: "#3B82F6",
    urgency: "Critical",
  },
];

const ways = [
  {
    icon: "🙏",
    title: "Pray",
    description: "The most powerful thing you can do. Join our Global Prayer Wall and pray specifically for unreached people groups using the Operation World database.",
    action: "Go to Prayer Wall",
    href: "/prayer",
    color: "#00FF88",
  },
  {
    icon: "💰",
    title: "Give",
    description: "Support vetted missionaries and organizations working in hard-to-reach places. 100% of designated giving goes directly to the field.",
    action: "Explore Giving",
    href: "/giving",
    color: "#10B981",
  },
  {
    icon: "✈️",
    title: "Go",
    description: "Short-term trips, long-term commitments, business as mission, and tentmaking opportunities. Find the right fit for your season.",
    action: "Find Opportunities",
    href: "/events",
    color: "#6B4FBB",
  },
  {
    icon: "📢",
    title: "Send",
    description: "You might not go — but you can send. Partner with missionaries in your network through prayer, financial support, and community.",
    action: "Connect with Missionaries",
    href: "/global-connect",
    color: "#EC4899",
  },
  {
    icon: "🌐",
    title: "Reach Locally",
    description: "There are unreached people in every city. Diaspora communities, international students, and refugees near you need the Gospel too.",
    action: "Local Outreach Resources",
    href: "/resources",
    color: "#F59E0B",
  },
  {
    icon: "📖",
    title: "Translate",
    description: "Bible translation, language learning, and literacy programs. Every language deserves Scripture — and there's a place for your skills.",
    action: "Translation Resources",
    href: "/resources",
    color: "#3B82F6",
  },
];

const spotlights = [
  {
    name: "Isabella & Marcos Ferreira",
    flag: "🇧🇷",
    location: "Nampula Province, Mozambique",
    avatar: "IF",
    color: "#00FF88",
    role: "Church planters",
    summary: "3 years in. 4 churches planted. 180 new believers baptized. Still going.",
    update: "We just trained 12 local pastors who will each plant their own churches this year. The harvest is real.",
  },
  {
    name: "Min-Jun Cho",
    flag: "🇰🇷",
    location: "Mongolia",
    avatar: "MJ",
    color: "#6B4FBB",
    role: "Bible translator",
    summary: "Working on the first Buryat Bible translation — a dialect spoken by 300,000 people.",
    update: "Completed the New Testament last month. Started Genesis. This is the work of a lifetime.",
  },
  {
    name: "Fatima Al-Rashid",
    flag: "🇱🇧",
    location: "Lebanon/Syria border region",
    avatar: "FA",
    color: "#EF4444",
    role: "Relief worker & evangelist",
    summary: "Serving Syrian refugees through food, medical care, and the Word of God.",
    update: "Over 40 families came to faith this quarter — many former Muslims. God is moving in the darkness.",
  },
];

export default function MissionsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe size={22} style={{ color: "#00FF88" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>Global Missions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              Make disciples of{" "}
              <span style={{ background: "linear-gradient(135deg, #00FF88, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                all nations.
              </span>
            </h1>
            <p className="text-lg mb-8" style={{ color: "#6A6A88" }}>
              Matthew 28:19 isn&apos;t a suggestion. It&apos;s the marching order of the Church. Here&apos;s what&apos;s happening on the ground — and how you can be part of it.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-2xl font-black mb-0.5" style={{ color: "#00FF88" }}>{s.value}</p>
                  <p className="text-xs font-semibold mb-1" style={{ color: "#F2F2F8" }}>{s.label}</p>
                  <p className="text-xs" style={{ color: "#4A4A68" }}>{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6 Ways to engage */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>6 Ways to Engage the Great Commission</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ways.map((w) => (
              <div key={w.title} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-3xl mb-3 block">{w.icon}</span>
                <h3 className="font-black text-xl mb-2" style={{ color: "#F2F2F8" }}>{w.title}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "#6A6A88" }}>{w.description}</p>
                <a href={w.href} className="flex items-center gap-1 text-sm font-bold" style={{ color: w.color }}>
                  {w.action} <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Unreached Regions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <h2 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>Priority Regions</h2>
          <p className="text-base mb-8" style={{ color: "#6A6A88" }}>Where the need — and the harvest — is greatest.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {regions.map((r) => (
              <div key={r.name} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${r.color}25` }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-black text-lg" style={{ color: "#F2F2F8" }}>{r.name}</h3>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${r.color}15`, color: r.color }}>
                    {r.urgency}
                  </span>
                </div>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "#6A6A88" }}>{r.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {r.countries.map((c) => (
                    <span key={c} className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${r.color}10`, color: r.color }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Missionary Spotlights */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>Missionary Spotlights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {spotlights.map((s) => (
              <div key={s.name} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black" style={{ background: `${s.color}25`, color: s.color, border: `2px solid ${s.color}30` }}>
                    {s.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#F2F2F8" }}>{s.name} {s.flag}</p>
                    <p className="text-xs" style={{ color: "#6A6A88" }}>{s.role} · {s.location}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold mb-3" style={{ color: "#C0C0D8" }}>{s.summary}</p>
                <div className="p-3 rounded-xl" style={{ background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.1)" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#00FF88" }}>Latest Update</p>
                  <p className="text-sm italic" style={{ color: "#8A8AA8" }}>&ldquo;{s.update}&rdquo;</p>
                </div>
                <button className="mt-4 text-sm font-bold flex items-center gap-1" style={{ color: s.color }}>
                  Support them <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Great Commission CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(16,185,129,0.06) 100%)", border: "1px solid rgba(0,255,136,0.15)" }}>
            <p className="text-xl italic mb-2" style={{ color: "#C0C0D8" }}>
              &ldquo;Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.&rdquo;
            </p>
            <p className="font-bold mb-8" style={{ color: "#00FF88" }}>— Matthew 28:19</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/prayer" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-black" style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}>
                🙏 Pray for the Nations
              </a>
              <a href="/global-connect" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#C0C0D8" }}>
                Connect with Missionaries
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
