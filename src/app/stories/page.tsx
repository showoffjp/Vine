"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Share2, Bookmark, ChevronRight, Star, Flame, Globe } from "lucide-react";
import { useState } from "react";

const featured = {
  name: "Carlos Mendez",
  flag: "🇨🇴",
  location: "Bogotá, Colombia",
  avatar: "CM",
  color: "#10B981",
  title: "From Drug Cartel Enforcer to Church Planter",
  preview: "I was 23 years old, knee-deep in cartel work, certain I was going to die before 30. The night a priest handed me a Bible in a prison cell in Medellín, I threw it across the room. Two weeks later, I picked it up again. That was 11 years ago. Today I lead a church of 340 people in the same neighborhood where I once collected debts at gunpoint.",
  readTime: "12 min",
  category: "Redemption",
  categoryColor: "#10B981",
  hearts: 5832,
};

const stories = [
  {
    name: "Amara Osei",
    flag: "🇬🇭",
    location: "Accra, Ghana",
    avatar: "AO",
    color: "#F59E0B",
    title: "How a Brain Tumor Led Me to the Deepest Faith of My Life",
    preview: "Doctors gave me six months. That was three years ago. What happened in those six months — and what God did after the prognosis — is the most honest thing I have ever witnessed.",
    readTime: "9 min",
    category: "Healing",
    categoryColor: "#F59E0B",
    hearts: 4217,
  },
  {
    name: "Ji-Woo Park",
    flag: "🇰🇷",
    location: "Seoul, South Korea",
    avatar: "JP",
    color: "#EC4899",
    title: "Raised Buddhist, Found Christ at 31 — My Family Still Won't Speak to Me",
    preview: "Conversion stories usually end with the baptism. Mine is about what comes after — the estrangement, the grief, the unexpected joy, and the hard question: is Jesus worth this cost?",
    readTime: "14 min",
    category: "Faith Transition",
    categoryColor: "#EC4899",
    hearts: 3891,
  },
  {
    name: "Lydia Böhm",
    flag: "🇩🇪",
    location: "Berlin, Germany",
    avatar: "LB",
    color: "#6B4FBB",
    title: "I Deconstructed My Faith — and Then Found It Again, Better",
    preview: "I left evangelical Christianity at 24. I was done. Four years of questions, grief, and honest searching later, I walked back into a church. What brought me back wasn't answers — it was a person.",
    readTime: "11 min",
    category: "Deconstruction",
    categoryColor: "#6B4FBB",
    hearts: 6104,
  },
  {
    name: "Samuel Mwangi",
    flag: "🇰🇪",
    location: "Nairobi, Kenya",
    avatar: "SM",
    color: "#3B82F6",
    title: "The Night I Prayed to Die — and Why I'm Grateful God Said No",
    preview: "Mental illness in the African church is still largely taboo. I hit rock bottom at 27. This is the story I wish someone had told me before I got there.",
    readTime: "10 min",
    category: "Mental Health",
    categoryColor: "#3B82F6",
    hearts: 7823,
  },
  {
    name: "Isabella Ferreira",
    flag: "🇧🇷",
    location: "São Paulo, Brazil",
    avatar: "IF",
    color: "#00FF88",
    title: "We Sold Everything and Moved to Mozambique. Here's Year Three.",
    preview: "Missions sounds romantic until you're actually there — sick, broke, questioning everything. This is an honest account of what long-term missions actually looks like from the inside.",
    readTime: "16 min",
    category: "Missions",
    categoryColor: "#00FF88",
    hearts: 2934,
  },
  {
    name: "Rev. David Osei",
    flag: "🇬🇭",
    location: "Kumasi, Ghana",
    avatar: "DO",
    color: "#EF4444",
    title: "My Wife Left Me While I Was Leading the Church. God Was In It.",
    preview: "Pastoral ministry has a way of hiding your deepest wounds behind a pulpit. The breakdown of my marriage was the most painful thing I've ever experienced — and the most formative.",
    readTime: "13 min",
    category: "Marriage & Restoration",
    categoryColor: "#EF4444",
    hearts: 4502,
  },
];

const categories = ["All", "Redemption", "Healing", "Faith Transition", "Deconstruction", "Mental Health", "Missions", "Marriage & Restoration"];

export default function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [saved, setSaved] = useState<Record<string, boolean>>({});

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: "#00FF88" }}>
              Testimonies
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mb-5">
              Real stories.{" "}
              <span style={{ background: "linear-gradient(135deg, #00FF88, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Real faith.
              </span>
            </h1>
            <p className="text-lg" style={{ color: "#6A6A88" }}>
              From every nation, tribe, and tongue — the unfiltered stories of what God is doing in real lives right now. Revelation 12:11.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <div
            className="rounded-2xl p-8 mb-10 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(7,7,15,1) 100%)",
              border: "1px solid rgba(16,185,129,0.2)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "rgba(0,255,136,0.15)", color: "#00FF88" }}>
                    ⭐ Featured Story
                  </span>
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: `${featured.categoryColor}15`, color: featured.categoryColor }}>
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black mb-4 leading-tight" style={{ color: "#F2F2F8" }}>
                  {featured.title}
                </h2>
                <p className="text-base mb-6 leading-relaxed" style={{ color: "#8A8AA8" }}>
                  {featured.preview}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black"
                    style={{ background: `${featured.color}25`, color: featured.color }}
                  >
                    {featured.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#F2F2F8" }}>{featured.name} {featured.flag}</p>
                    <p className="text-xs" style={{ color: "#4A4A68" }}>{featured.location} · {featured.readTime} read</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-black" style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}>
                    Read Story <ChevronRight size={14} />
                  </button>
                  <div className="flex items-center gap-1 text-sm" style={{ color: "#6A6A88" }}>
                    <Heart size={14} style={{ color: "#EC4899" }} />
                    <span>{featured.hearts.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div
                  className="w-48 h-48 rounded-full flex items-center justify-center text-8xl"
                  style={{
                    background: `radial-gradient(circle, ${featured.color}20 0%, transparent 70%)`,
                    border: `2px solid ${featured.color}30`,
                  }}
                >
                  ✝️
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: activeCategory === cat ? "#00FF88" : "rgba(255,255,255,0.04)",
                  color: activeCategory === cat ? "#000" : "#6A6A88",
                  border: `1px solid ${activeCategory === cat ? "#00FF88" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {stories.map((story, i) => (
              <article
                key={i}
                className="group rounded-2xl p-6 flex flex-col cursor-pointer transition-all"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${story.color}40`;
                  e.currentTarget.style.background = `${story.color}05`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black"
                    style={{ background: `${story.color}25`, color: story.color, border: `2px solid ${story.color}30` }}
                  >
                    {story.avatar}
                  </div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${story.categoryColor}15`, color: story.categoryColor }}
                  >
                    {story.category}
                  </span>
                </div>

                <h3 className="font-black text-base mb-2 leading-snug group-hover:text-[#00FF88] transition-colors flex-1" style={{ color: "#F2F2F8" }}>
                  {story.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed line-clamp-3" style={{ color: "#6A6A88" }}>
                  {story.preview}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-xs font-semibold" style={{ color: "#C0C0D8" }}>
                      {story.name} {story.flag}
                    </p>
                    <p className="text-xs" style={{ color: "#4A4A68" }}>{story.location} · {story.readTime}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSaved((s) => ({ ...s, [story.name]: !s[story.name] }))}
                      style={{ color: saved[story.name] ? "#00FF88" : "#4A4A68" }}
                    >
                      <Bookmark size={14} fill={saved[story.name] ? "#00FF88" : "none"} />
                    </button>
                    <span className="flex items-center gap-1 text-xs" style={{ color: "#4A4A68" }}>
                      <Heart size={12} style={{ color: "#EC4899" }} />
                      {story.hearts.toLocaleString()}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Submit CTA */}
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(107,79,187,0.06) 100%)",
              border: "1px solid rgba(0,255,136,0.15)",
            }}
          >
            <Globe size={32} style={{ color: "#00FF88" }} className="mx-auto mb-4" />
            <h3 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>Share Your Story</h3>
            <p className="text-base mb-6 max-w-lg mx-auto" style={{ color: "#6A6A88" }}>
              &ldquo;They triumphed over him by the blood of the Lamb and by the word of their testimony.&rdquo; — Revelation 12:11. Your story matters. Share it.
            </p>
            <button
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-black"
              style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
            >
              Submit Your Testimony <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
