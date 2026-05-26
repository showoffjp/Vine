"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Baby,
  Heart,
  BookOpen,
  Star,
  Shield,
  Users,
  ChevronRight,
  Sunrise,
} from "lucide-react";


const stages = [
  {
    age: "0–5",
    label: "Little Ones",
    color: "#EC4899",
    tips: [
      "Pray over them daily — they absorb more than you know",
      "Read Bible stories, not just for content but for ritual",
      "Model worship in everyday moments",
    ],
    verse: "Proverbs 22:6",
  },
  {
    age: "6–12",
    label: "Elementary",
    color: "#D4AF37",
    tips: [
      "Start devotionals together — even 5 minutes",
      "Answer their hard questions honestly",
      "Let them see your faith tested and held",
    ],
    verse: "Deuteronomy 6:7",
  },
  {
    age: "13–17",
    label: "Teenagers",
    color: "#6B4FBB",
    tips: [
      "Stay curious, not controlling",
      "Pick battles wisely — not every hill is worth dying on",
      "Keep the relationship the priority",
    ],
    verse: "Ephesians 6:4",
  },
  {
    age: "18+",
    label: "Adult Children",
    color: "#10B981",
    tips: [
      "Release control while maintaining relationship",
      "Pray more, lecture less",
      "Be the soft place they can always land",
    ],
    verse: "Luke 15:20",
  },
];

const articles = [
  {
    emoji: "🙏",
    tag: "Faith Formation",
    tagColor: "#6B4FBB",
    title: "How to Build Family Devotions That Your Kids Won't Hate",
    desc: "If your family devotional time feels forced, these practical shifts might change everything.",
    author: "Naomi & David Park",
    time: "8 min",
  },
  {
    emoji: "📱",
    tag: "Tech & Screens",
    tagColor: "#3B82F6",
    title: "Screen Time, Social Media, and the Christian Family",
    desc: "A grace-filled, practical framework for navigating technology with your kids.",
    author: "James Okafor",
    time: "9 min",
  },
  {
    emoji: "😢",
    tag: "Hard Seasons",
    tagColor: "#F59E0B",
    title: "When Your Child Walks Away from Faith",
    desc: "This is one of the most painful experiences a Christian parent can face. Here's how to respond.",
    author: "Rev. Amara Osei",
    time: "10 min",
  },
  {
    emoji: "🏠",
    tag: "Family Culture",
    tagColor: "#D4AF37",
    title: "The Power of Family Rhythms: Sabbath, Meals, and Rituals",
    desc: "The most faith-forming thing you can do isn't a curriculum — it's shared, repeated practices.",
    author: "Dr. Sarah Kimani",
    time: "7 min",
  },
  {
    emoji: "💬",
    tag: "Communication",
    tagColor: "#EC4899",
    title: "Talking to Your Kids About God, Sex, Death, and Doubt",
    desc: "The conversations you avoid become the ones they have elsewhere. Let's change that.",
    author: "Pastor Marcus Webb",
    time: "11 min",
  },
  {
    emoji: "⚡",
    tag: "Discipline",
    tagColor: "#10B981",
    title: "Biblical Discipline: Not Just \"Don't Spare the Rod\"",
    desc: "Proverbs 13:24 is often misquoted and misapplied. Here's what Scripture actually says about discipline.",
    author: "Dr. Lydia Cross",
    time: "8 min",
  },
];

const verseBlock = {
  verse: "\"Start children off on the way they should go, and even when they are old they will not turn from it.\"",
  ref: "Proverbs 22:6",
};

export default function ParentingPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: "#D4AF37" }}>
                Life & Faith · Parenting
              </span>
              <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
                Raise them up.{" "}
                <span style={{ background: "linear-gradient(135deg, #EC4899, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  In the faith.
                </span>
              </h1>
              <p className="text-lg mb-6" style={{ color: "#6A6A88" }}>
                No parenting manual is perfect — but Scripture gives us principles, not just rules. Practical, grace-filled wisdom for every stage of the journey.
              </p>
              <div
                className="p-5 rounded-2xl"
                style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)" }}
              >
                <p className="text-sm italic mb-2" style={{ color: "#C8A84B" }}>{verseBlock.verse}</p>
                <p className="text-xs font-bold" style={{ color: "#8A6A20" }}>— {verseBlock.ref}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "👶", label: "Newborn faith", sub: "starts with you" },
                { icon: "📖", label: "Scripture first", sub: "not rules first" },
                { icon: "🙏", label: "Prayer together", sub: "daily habit" },
                { icon: "🏡", label: "Home as sanctuary", sub: "safe & sacred" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-5 text-center"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-3xl block mb-2">{item.icon}</span>
                  <p className="text-sm font-bold" style={{ color: "#F2F2F8" }}>{item.label}</p>
                  <p className="text-xs" style={{ color: "#4A4A68" }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* By Stage */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>
            Wisdom By Stage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stages.map((s) => (
              <div
                key={s.age}
                className="rounded-2xl p-6 transition-all cursor-pointer"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${s.color}40`;
                  e.currentTarget.style.background = `${s.color}06`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-black mb-3"
                  style={{ background: `${s.color}20`, color: s.color }}
                >
                  Ages {s.age}
                </div>
                <h3 className="font-black text-xl mb-4" style={{ color: "#F2F2F8" }}>{s.label}</h3>
                <ul className="space-y-2 mb-4">
                  {s.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#6A6A88" }}>
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: s.color }} />
                      {tip}
                    </li>
                  ))}
                </ul>
                <div
                  className="text-xs px-2 py-1 rounded-full inline-block"
                  style={{ background: `${s.color}10`, color: s.color }}
                >
                  📜 {s.verse}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((art, i) => (
              <div
                key={i}
                className="group rounded-xl p-5 cursor-pointer transition-all"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(212,175,55,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <span className="text-3xl mb-3 block">{art.emoji}</span>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full mb-2 inline-block"
                  style={{ background: `${art.tagColor}15`, color: art.tagColor }}
                >
                  {art.tag}
                </span>
                <h3 className="font-bold text-base mb-2 leading-snug group-hover:text-[#D4AF37] transition-colors" style={{ color: "#F2F2F8" }}>
                  {art.title}
                </h3>
                <p className="text-sm mb-3 leading-relaxed" style={{ color: "#6A6A88" }}>{art.desc}</p>
                <div className="flex items-center gap-2 text-xs" style={{ color: "#4A4A68" }}>
                  <span>{art.author}</span>
                  <span>·</span>
                  <span>{art.time} read</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(236,72,153,0.06) 0%, rgba(212,175,55,0.06) 100%)",
              border: "1px solid rgba(236,72,153,0.12)",
            }}
          >
            <Baby size={32} style={{ color: "#EC4899" }} className="mx-auto mb-4" />
            <h3 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>
              Connect with Christian Parents
            </h3>
            <p className="text-base mb-6 max-w-lg mx-auto" style={{ color: "#6A6A88" }}>
              Join thousands of parents sharing wisdom, support, and prayer in the Vine community.
            </p>
            <div className="flex items-center gap-4 justify-center flex-wrap">
              <a
                href="/community"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-black"
                style={{ background: "linear-gradient(135deg, #D4AF37, #B8942C)" }}
              >
                Join the Community <ChevronRight size={16} />
              </a>
              <a
                href="/discussions"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#C0C0D8" }}
              >
                Parenting Discussions
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
