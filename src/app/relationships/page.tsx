"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Heart,
  Users,
  MessageSquare,
  Star,
  ChevronRight,
  BookOpen,
  Shield,
  Compass,
} from "lucide-react";


const pillars = [
  {
    icon: Heart,
    title: "Dating & Courtship",
    description: "Navigating romance with purity, wisdom, and intentionality in a swipe-culture world.",
    color: "#EC4899",
    verses: ["Proverbs 4:23", "1 Cor 13:4-7"],
    articles: 48,
  },
  {
    icon: Users,
    title: "Marriage",
    description: "Building a Christ-centered marriage that flourishes through every season — including the hard ones.",
    color: "#6B4FBB",
    verses: ["Ephesians 5:25", "Proverbs 31"],
    articles: 72,
  },
  {
    icon: Shield,
    title: "Singleness",
    description: "The gift (yes, gift) of singleness — living fully and purposefully as one person for God.",
    color: "#00FF88",
    verses: ["1 Corinthians 7:7", "Psalm 73:25"],
    articles: 34,
  },
  {
    icon: MessageSquare,
    title: "Friendships",
    description: "Biblical friendship is rare and transformative. Here's how to find it and build it.",
    color: "#10B981",
    verses: ["Proverbs 17:17", "John 15:13"],
    articles: 29,
  },
  {
    icon: BookOpen,
    title: "Family Dynamics",
    description: "Navigating complex family systems — aging parents, estrangement, blended families, and more.",
    color: "#3B82F6",
    verses: ["Ephesians 6:1-4", "1 Tim 5:8"],
    articles: 41,
  },
  {
    icon: Compass,
    title: "Healing & Restoration",
    description: "After betrayal, divorce, or estrangement — practical steps toward wholeness and grace.",
    color: "#F59E0B",
    verses: ["Joel 2:25", "Romans 8:28"],
    articles: 26,
  },
];

const featured = [
  {
    title: "What the Bible Actually Says About Soul Mates",
    excerpt: "Hint: it's more nuanced than you think — and more hopeful.",
    author: "Dr. Lydia Cross",
    readTime: "7 min",
    tag: "Dating",
    tagColor: "#EC4899",
    emoji: "💍",
  },
  {
    title: "When Your Spouse Won't Go to Church",
    excerpt: "You married believing, they drifted. You're not alone, and this isn't hopeless.",
    author: "Rev. David & Naomi Park",
    readTime: "9 min",
    tag: "Marriage",
    tagColor: "#6B4FBB",
    emoji: "⛪",
  },
  {
    title: "How to Set Boundaries Without Cutting People Off",
    excerpt: "Boundaries from Scripture: not walls of selfishness but lines of wisdom and love.",
    author: "Dr. Grace Mbeki",
    readTime: "8 min",
    tag: "Healing",
    tagColor: "#F59E0B",
    emoji: "🛡️",
  },
  {
    title: "Finding Real Friends in Your 30s and 40s",
    excerpt: "Adult friendships are hard. Here's why — and what the book of Proverbs tells us to do about it.",
    author: "Samuel Boateng",
    readTime: "6 min",
    tag: "Friendships",
    tagColor: "#10B981",
    emoji: "🤝",
  },
];

const verseCard = {
  verse: "\"Love is patient, love is kind. It does not envy, it does not boast, it is not proud.\"",
  ref: "1 Corinthians 13:4",
};

export default function RelationshipsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: "#00FF88" }}>
              Life & Faith · Relationships
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              Love well.{" "}
              <span style={{ background: "linear-gradient(135deg, #EC4899, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Rooted in truth.
              </span>
            </h1>
            <p className="text-lg mb-8" style={{ color: "#6A6A88" }}>
              Biblical wisdom for every kind of relationship — romantic, platonic, and familial. Real talk for real people navigating love in a complicated world.
            </p>
            {/* Verse */}
            <div
              className="inline-block px-6 py-4 rounded-2xl text-sm italic"
              style={{
                background: "rgba(0,255,136,0.06)",
                border: "1px solid rgba(0,255,136,0.15)",
                color: "#00DD77",
                maxWidth: "520px",
              }}
            >
              <p className="mb-1">{verseCard.verse}</p>
              <p className="text-xs not-italic font-bold" style={{ color: "#007A33" }}>{verseCard.ref}</p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>
            Browse by Topic
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group rounded-2xl p-6 cursor-pointer transition-all"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${p.color}40`;
                    e.currentTarget.style.background = `${p.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${p.color}20` }}
                  >
                    <Icon size={20} style={{ color: p.color }} />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#F2F2F8" }}>{p.title}</h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: "#6A6A88" }}>{p.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {p.verses.map((v) => (
                        <span
                          key={v}
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: `${p.color}15`, color: p.color }}
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs ml-2 shrink-0" style={{ color: "#4A4A68" }}>
                      {p.articles} articles
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Articles */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black" style={{ color: "#F2F2F8" }}>
              Featured Articles
            </h2>
            <button
              className="flex items-center gap-1 text-sm font-semibold"
              style={{ color: "#00FF88" }}
            >
              View All <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {featured.map((art, i) => (
              <div
                key={i}
                className="group rounded-2xl p-6 cursor-pointer transition-all flex gap-4"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(0,255,136,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  {art.emoji}
                </div>
                <div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background: `${art.tagColor}15`, color: art.tagColor }}
                  >
                    {art.tag}
                  </span>
                  <h3 className="font-bold text-base mb-1.5 leading-snug group-hover:text-[#00FF88] transition-colors" style={{ color: "#F2F2F8" }}>
                    {art.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: "#6A6A88" }}>{art.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs" style={{ color: "#4A4A68" }}>
                    <span>{art.author}</span>
                    <span>·</span>
                    <span>{art.readTime} read</span>
                  </div>
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
              background: "linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(107,79,187,0.08) 100%)",
              border: "1px solid rgba(236,72,153,0.15)",
            }}
          >
            <Heart size={32} style={{ color: "#EC4899" }} className="mx-auto mb-4" />
            <h3 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>
              Get Personalized Guidance
            </h3>
            <p className="text-base mb-6 max-w-lg mx-auto" style={{ color: "#6A6A88" }}>
              Ask our AI Bible Companion your relationship questions — rooted in Scripture, never preachy.
            </p>
            <a
              href="/ai-companion"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-black"
              style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
            >
              Ask the AI Companion <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
