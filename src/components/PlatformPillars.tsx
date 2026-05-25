"use client";

import {
  MessageSquare,
  BookOpen,
  Heart,
  Lightbulb,
  Video,
  Users,
  Brain,
  Flame,
  Globe,
  Sparkles,
  Music,
  Shield,
} from "lucide-react";

const pillars = [
  {
    icon: MessageSquare,
    title: "Discussion Hubs",
    desc: "Reddit-style communities for every topic — theology, parenting, doubt, career, culture, and more.",
    tag: "Community",
    color: "#6B4FBB",
  },
  {
    icon: BookOpen,
    title: "Bible Tools",
    desc: "Search, cross-reference, read plans, and dive deep with commentaries and study guides.",
    tag: "Scripture",
    color: "#D4AF37",
  },
  {
    icon: Heart,
    title: "Prayer Wall",
    desc: "Share needs, pray for others, and receive prayer from Christians around the globe.",
    tag: "Prayer",
    color: "#C0506A",
  },
  {
    icon: Lightbulb,
    title: "Life Hacks",
    desc: "Faith-informed tips on productivity, finances, relationships, parenting, and daily living.",
    tag: "Lifehacker",
    color: "#E8A020",
  },
  {
    icon: Brain,
    title: "Mental Health",
    desc: "Resources, guides, and community for anxiety, depression, grief, and inner healing.",
    tag: "Wellness",
    color: "#3A9E72",
  },
  {
    icon: Video,
    title: "Video Library",
    desc: "Sermons, testimonies, worship sessions, and Christian creators — all curated and searchable.",
    tag: "Media",
    color: "#4A80D4",
  },
  {
    icon: Users,
    title: "Global Connect",
    desc: "Find Christians who share your interests, denomination, language, or location.",
    tag: "Networking",
    color: "#6B4FBB",
  },
  {
    icon: Flame,
    title: "Daily Devotionals",
    desc: "Fresh devotionals every morning — short, deep, and written by real believers.",
    tag: "Daily Bread",
    color: "#D4AF37",
  },
  {
    icon: Sparkles,
    title: "Motivation",
    desc: "Curated quotes, stories, testimonies, and encouragement to keep your faith burning.",
    tag: "Inspiration",
    color: "#C0506A",
  },
  {
    icon: Globe,
    title: "World Church",
    desc: "Explore Christianity across cultures, traditions, and denominations worldwide.",
    tag: "Culture",
    color: "#3A9E72",
  },
  {
    icon: Music,
    title: "Worship",
    desc: "Playlists, chord sheets, lyrics, and worship communities for every style of praise.",
    tag: "Worship",
    color: "#4A80D4",
  },
  {
    icon: Shield,
    title: "Apologetics",
    desc: "Defend the faith with confidence. Evidence, arguments, and answers to life's hardest questions.",
    tag: "Theology",
    color: "#E8A020",
  },
];

export default function PlatformPillars() {
  return (
    <section className="relative py-24 overflow-hidden" id="features">
      <div className="section-glow absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="tag-pill inline-block mb-4">Everything You Need</p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4"
            style={{ color: "#F2F2F8" }}
          >
            One Platform.
            <br />
            <span className="gold-gradient">Infinite Growth.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#8A8AA8" }}>
            Everything a Christian could ever need — from deep theology to
            practical life tips — under one roof, in one community.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {pillars.map(({ icon: Icon, title, desc, tag, color }) => (
            <div
              key={title}
              className="card-glow group relative p-5 rounded-2xl cursor-pointer"
              style={{ background: "var(--bg-card)" }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}18`, border: `1px solid ${color}30` }}
              >
                <Icon size={20} style={{ color }} />
              </div>

              {/* Tag */}
              <span
                className="text-xs font-bold uppercase tracking-wider mb-2 block"
                style={{ color: `${color}CC` }}
              >
                {tag}
              </span>

              {/* Title */}
              <h3
                className="text-base font-bold mb-2 group-hover:text-white transition-colors"
                style={{ color: "#E0E0F0" }}
              >
                {title}
              </h3>

              {/* Desc */}
              <p className="text-sm leading-relaxed" style={{ color: "#6A6A88" }}>
                {desc}
              </p>

              {/* Hover accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
