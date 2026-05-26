"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Play,
  Eye,
  Heart,
  Bookmark,
  Share2,
  Filter,
  Clock,
  TrendingUp,
  Star,
  ChevronRight,
  Search,
  Volume2,
} from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "All", active: true },
  { name: "Sermons", active: false },
  { name: "Worship", active: false },
  { name: "Testimony", active: false },
  { name: "Teaching", active: false },
  { name: "Documentary", active: false },
  { name: "Kids", active: false },
  { name: "Apologetics", active: false },
];

const featured = {
  title: "The Cross Changes Everything — Easter Sunday 2026",
  channel: "Elevation Church",
  channelAvatar: "EC",
  channelColor: "#D4AF37",
  views: "2.4M",
  duration: "48:32",
  uploadedAgo: "2 weeks ago",
  tags: ["Sermon", "Easter", "Gospel"],
  description:
    "Pastor Steven Furtick delivers a powerful Easter message on the radical nature of the resurrection and what it means for daily life.",
};

const videos = [
  {
    emoji: "🎤",
    title: "Waymaker — Live at Elevation Worship Night 2026",
    channel: "Elevation Worship",
    channelColor: "#6B4FBB",
    views: "8.1M",
    duration: "7:14",
    age: "3 days ago",
    tag: "Worship",
    tagColor: "#6B4FBB",
    liked: false,
  },
  {
    emoji: "📖",
    title: "Romans 8 — The Most Important Chapter in the Bible?",
    channel: "The Bible Project",
    channelColor: "#D4AF37",
    views: "1.9M",
    duration: "12:41",
    age: "1 week ago",
    tag: "Teaching",
    tagColor: "#D4AF37",
    liked: true,
  },
  {
    emoji: "🙏",
    title: "From Addiction to Apostle — My Story",
    channel: "Vine Testimonies",
    channelColor: "#10B981",
    views: "543K",
    duration: "22:18",
    age: "4 days ago",
    tag: "Testimony",
    tagColor: "#10B981",
    liked: false,
  },
  {
    emoji: "🌍",
    title: "The Underground Church in North Korea — Full Documentary",
    channel: "Open Doors",
    channelColor: "#EF4444",
    views: "3.2M",
    duration: "1:04:22",
    age: "2 weeks ago",
    tag: "Documentary",
    tagColor: "#EF4444",
    liked: false,
  },
  {
    emoji: "🦁",
    title: "Does God Exist? Answering the Skeptic Honestly",
    channel: "William Lane Craig",
    channelColor: "#3B82F6",
    views: "890K",
    duration: "34:07",
    age: "5 days ago",
    tag: "Apologetics",
    tagColor: "#3B82F6",
    liked: false,
  },
  {
    emoji: "👶",
    title: "The Greatest Commandment — Kids Edition",
    channel: "Veggie Tales Official",
    channelColor: "#F59E0B",
    views: "1.1M",
    duration: "18:45",
    age: "1 month ago",
    tag: "Kids",
    tagColor: "#F59E0B",
    liked: true,
  },
  {
    emoji: "✝️",
    title: "What Is Salvation? The Gospel Explained Simply",
    channel: "Francis Chan",
    channelColor: "#EC4899",
    views: "4.7M",
    duration: "9:52",
    age: "3 months ago",
    tag: "Teaching",
    tagColor: "#EC4899",
    liked: false,
  },
  {
    emoji: "🔥",
    title: "Overcoming Fear — Sunday Message",
    channel: "Gateway Church",
    channelColor: "#D4AF37",
    views: "312K",
    duration: "41:05",
    age: "6 days ago",
    tag: "Sermon",
    tagColor: "#D4AF37",
    liked: false,
  },
];

const channels = [
  { name: "Elevation Church", avatar: "EC", color: "#D4AF37", subscribers: "4.2M", videos: 847 },
  { name: "The Bible Project", avatar: "BP", color: "#6B4FBB", subscribers: "2.8M", videos: 312 },
  { name: "Bethel Music", avatar: "BM", color: "#10B981", subscribers: "1.9M", videos: 521 },
  { name: "Francis Chan", avatar: "FC", color: "#EC4899", subscribers: "1.2M", videos: 184 },
];

export default function VideoPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #D4AF37 0%, #6B4FBB 100%)" }}
                >
                  <Play size={16} className="text-black" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4AF37" }}>
                  Video Library
                </span>
              </div>
              <h1 className="text-4xl font-black">
                Watch.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #D4AF37, #6B4FBB)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Be transformed.
                </span>
              </h1>
            </div>
            {/* Search */}
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl sm:w-64"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Search size={15} style={{ color: "#4A4A68" }} />
              <input
                type="text"
                placeholder="Search videos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none text-sm flex-1"
                style={{ color: "#F2F2F8" }}
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <div
            className="rounded-2xl overflow-hidden mb-10 flex flex-col lg:flex-row"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,175,55,0.12)" }}
          >
            {/* Thumbnail */}
            <div
              className="lg:w-1/2 min-h-56 flex items-center justify-center relative"
              style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #07070F 100%)" }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                style={{ background: "rgba(212,175,55,0.9)", boxShadow: "0 0 40px rgba(212,175,55,0.4)" }}
              >
                <Play size={32} className="text-black ml-1" />
              </div>
              <div
                className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-xs font-bold"
                style={{ background: "rgba(0,0,0,0.8)", color: "#F2F2F8" }}
              >
                {featured.duration}
              </div>
              <div
                className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold"
                style={{ background: "rgba(212,175,55,0.9)", color: "#000" }}
              >
                ⭐ Featured
              </div>
            </div>
            {/* Info */}
            <div className="p-7 lg:w-1/2 flex flex-col justify-center">
              <div className="flex gap-2 mb-3 flex-wrap">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-black mb-3 leading-tight" style={{ color: "#F2F2F8" }}>
                {featured.title}
              </h2>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: "#6A6A88" }}>
                {featured.description}
              </p>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
                  style={{ background: `${featured.channelColor}25`, color: featured.channelColor }}
                >
                  {featured.channelAvatar}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#E0E0F0" }}>{featured.channel}</p>
                  <p className="text-xs" style={{ color: "#4A4A68" }}>
                    {featured.views} views · {featured.uploadedAgo}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-black"
                  style={{ background: "linear-gradient(135deg, #D4AF37, #B8942C)" }}
                >
                  <Play size={14} /> Watch Now
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#8A8AA8" }}
                >
                  <Bookmark size={14} /> Save
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: activeCategory === cat.name ? "#D4AF37" : "rgba(255,255,255,0.04)",
                  color: activeCategory === cat.name ? "#000" : "#6A6A88",
                  border: `1px solid ${activeCategory === cat.name ? "#D4AF37" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video Grid */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp size={16} style={{ color: "#D4AF37" }} />
                <h2 className="text-lg font-black" style={{ color: "#F2F2F8" }}>Trending Videos</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {videos.map((v, i) => (
                  <div
                    key={i}
                    className="group rounded-xl overflow-hidden cursor-pointer transition-all"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      className="relative h-36 flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, rgba(107,79,187,0.15) 0%, rgba(7,7,15,1) 100%)" }}
                    >
                      <span className="text-4xl">{v.emoji}</span>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ background: "rgba(212,175,55,0.9)" }}
                        >
                          <Play size={18} className="text-black ml-0.5" />
                        </div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-xs font-bold"
                        style={{ background: "rgba(0,0,0,0.8)", color: "#F2F2F8" }}
                      >
                        {v.duration}
                      </div>
                      <span
                        className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ background: `${v.tagColor}20`, color: v.tagColor, border: `1px solid ${v.tagColor}40` }}
                      >
                        {v.tag}
                      </span>
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-sm mb-1.5 leading-snug group-hover:text-[#D4AF37] transition-colors" style={{ color: "#F2F2F8" }}>
                        {v.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold" style={{ color: v.channelColor }}>
                          {v.channel}
                        </span>
                        <span className="text-xs" style={{ color: "#4A4A68" }}>
                          {v.views} · {v.age}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Top Channels */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star size={15} style={{ color: "#D4AF37" }} />
                  <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: "#D4AF37" }}>
                    Top Channels
                  </h3>
                </div>
                <div className="space-y-3">
                  {channels.map((ch) => (
                    <div key={ch.name} className="flex items-center gap-3 group cursor-pointer">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black shrink-0"
                        style={{ background: `${ch.color}20`, color: ch.color, border: `1px solid ${ch.color}30` }}
                      >
                        {ch.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold group-hover:text-[#D4AF37] transition-colors truncate" style={{ color: "#E0E0F0" }}>
                          {ch.name}
                        </p>
                        <p className="text-xs" style={{ color: "#4A4A68" }}>
                          {ch.subscribers} subscribers · {ch.videos} videos
                        </p>
                      </div>
                      <button
                        className="text-xs px-2.5 py-1 rounded-full font-semibold shrink-0"
                        style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.2)" }}
                      >
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Now Playing / Radio */}
              <div
                className="rounded-2xl p-5"
                style={{
                  background: "linear-gradient(135deg, rgba(107,79,187,0.1) 0%, rgba(212,175,55,0.06) 100%)",
                  border: "1px solid rgba(107,79,187,0.2)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Volume2 size={16} style={{ color: "#6B4FBB" }} />
                  <h3 className="text-sm font-bold" style={{ color: "#F2F2F8" }}>Worship Radio</h3>
                </div>
                <p className="text-xs mb-4" style={{ color: "#6A6A88" }}>
                  24/7 curated Christian worship music — automatically updated daily.
                </p>
                <div className="space-y-2 mb-4">
                  {["Goodness of God — Bethel Music", "Oceans — Hillsong United", "Way Maker — Sinach"].map((song, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: i === 0 ? "#D4AF37" : "#4A4A68" }}
                      />
                      <span className="text-xs" style={{ color: i === 0 ? "#F2F2F8" : "#4A4A68" }}>{song}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="w-full py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                  style={{ background: "rgba(107,79,187,0.25)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.3)" }}
                >
                  <Play size={14} /> Open Worship Radio
                </button>
              </div>

              {/* Stats */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3 className="text-sm font-bold mb-4 uppercase tracking-widest" style={{ color: "#D4AF37" }}>
                  Library Stats
                </h3>
                {[
                  { label: "Total Videos", value: "18,400+" },
                  { label: "Channels", value: "2,100+" },
                  { label: "Hours of Content", value: "54,000+" },
                  { label: "Languages", value: "47" },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between py-2 border-b last:border-0" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                    <span className="text-sm" style={{ color: "#6A6A88" }}>{s.label}</span>
                    <span className="text-sm font-bold" style={{ color: "#F2F2F8" }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
