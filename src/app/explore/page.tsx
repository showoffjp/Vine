"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search,
  TrendingUp,
  Flame,
  Star,
  MessageSquare,
  BookOpen,
  Heart,
  Users,
  Music,
  Brain,
  Baby,
  Briefcase,
  Shield,
  Globe,
  Zap,
  Coffee,
  ArrowUp,
  ChevronRight,
  PlayCircle,
  FileText,
  Headphones,
  Compass,
  Sparkles,
} from "lucide-react";


const trendingTopics = [
  { name: "Prayer & Fasting", posts: "12.4k posts", gradient: "linear-gradient(135deg, #6B4FBB 0%, #4F8FBB 100%)", href: "/topics/prayer-fasting" },
  { name: "Gen Z & Church", posts: "9.8k posts", gradient: "linear-gradient(135deg, #BB4F7A 0%, #6B4FBB 100%)", href: "/topics/genz-church" },
  { name: "Marriage & Faith", posts: "8.1k posts", gradient: "linear-gradient(135deg, #00FF88 0%, #BB7A4F 100%)", href: "/topics/marriage-faith" },
  { name: "Mental Health & God", posts: "14.2k posts", gradient: "linear-gradient(135deg, #4FBBAA 0%, #4F8FBB 100%)", href: "/topics/mental-health-god" },
  { name: "Christian AI Ethics", posts: "6.7k posts", gradient: "linear-gradient(135deg, #6B4FBB 0%, #BB4F7A 100%)", href: "/topics/christian-ai-ethics" },
  { name: "Deconstruction Stories", posts: "11.3k posts", gradient: "linear-gradient(135deg, #BB7A4F 0%, #00FF88 100%)", href: "/topics/deconstruction" },
  { name: "Apologetics Q&A", posts: "5.4k posts", gradient: "linear-gradient(135deg, #4F8FBB 0%, #4FBBAA 100%)", href: "/apologetics" },
  { name: "Worship Music 2026", posts: "7.9k posts", gradient: "linear-gradient(135deg, #00FF88 0%, #4FBBAA 100%)", href: "/worship" },
];

const forYouContent = [
  {
    type: "Discussion",
    typeColor: "#6B4FBB",
    icon: MessageSquare,
    link: "/discussions/free-will-omniscience-003",
    title: "What does it mean to 'abide in Christ' practically?",
    meta: "Theology & Doctrine · 3.2k members discussing",
    engagement: "847 responses",
  },
  {
    type: "Article",
    typeColor: "#4FBBAA",
    icon: FileText,
    link: "/blog/prayer-that-works",
    title: "The Science Behind Why Prayer Actually Reduces Anxiety",
    meta: "Mental Health & Faith · 12 min read",
    engagement: "4.1k saves",
  },
  {
    type: "Video",
    typeColor: "#BB4F7A",
    icon: PlayCircle,
    link: "/video",
    title: "Is the Bible Historically Reliable? An Honest Look",
    meta: "Apologetics · 28 min watch",
    engagement: "6.7k views",
  },
  {
    type: "Podcast",
    typeColor: "#00FF88",
    icon: Headphones,
    link: "/podcast",
    title: "How to Have Hard Conversations at Work as a Christian",
    meta: "Faith & Career · 41 min listen",
    engagement: "2.3k listens",
  },
  {
    type: "Discussion",
    typeColor: "#6B4FBB",
    icon: MessageSquare,
    link: "/discussions/depression-therapy-faith-005",
    title: "My honest experience with Christian therapy after years of shame",
    meta: "Mental Health & Faith · Testimony",
    engagement: "2.1k responses",
  },
  {
    type: "Study Guide",
    typeColor: "#4F8FBB",
    icon: BookOpen,
    link: "/reading-plan",
    title: "Philippians: The Joy Letter — 21-Day Study",
    meta: "Daily Bread · 21-day plan",
    engagement: "8.9k enrolled",
  },
];

const popularPosts = [
  {
    rank: 1,
    title: "I asked an atheist philosopher the hardest questions about Christianity — here's what happened",
    hub: "Apologetics",
    hubColor: "#6B4FBB",
    votes: 15821,
    comments: 2341,
  },
  {
    rank: 2,
    title: "After 22 years as an atheist, I walked into a church on a dare and didn't leave for 3 hours",
    hub: "Testimonies",
    hubColor: "#00FF88",
    votes: 12304,
    comments: 1892,
  },
  {
    rank: 3,
    title: "A pastor's honest confession: I've been faking my faith for 5 years. Here's what changed me.",
    hub: "Mental Health",
    hubColor: "#4FBBAA",
    votes: 10982,
    comments: 1674,
  },
  {
    rank: 4,
    title: "I paid off $80,000 of debt in 2 years using biblical financial principles — detailed breakdown",
    hub: "Finance & Faith",
    hubColor: "#BB7A4F",
    votes: 9451,
    comments: 1203,
  },
  {
    rank: 5,
    title: "What 365 days of reading the Bible cover to cover taught me that church never did",
    hub: "Bible Study",
    hubColor: "#4F8FBB",
    votes: 8734,
    comments: 1089,
  },
];

const creators = [
  { name: "Pastor Josh Rivera", handle: "@joshrivera", role: "Theology & Apologetics", followers: "48.2k", initials: "JR", color: "#6B4FBB" },
  { name: "Dr. Maya Chen", handle: "@drmayachen", role: "Faith & Mental Health", followers: "31.7k", initials: "MC", color: "#4FBBAA" },
  { name: "The Bible Project", handle: "@bibleproject", role: "Scripture & Theology", followers: "124k", initials: "BP", color: "#00FF88" },
  { name: "Rachel & Tim Moore", handle: "@mooremarriage", role: "Christian Marriage", followers: "22.4k", initials: "RM", color: "#BB4F7A" },
  { name: "Emmanuel Okonkwo", handle: "@ekonkwo", role: "Worship & Discipleship", followers: "18.9k", initials: "EO", color: "#4F8FBB" },
];

const newToVine = [
  {
    icon: Compass,
    link: "/onboarding",
    title: "Start Here",
    desc: "Your 5-minute orientation to everything Vine offers",
    color: "#00FF88",
  },
  {
    icon: Zap,
    link: "/discussions",
    title: "Vine Basics",
    desc: "Learn how discussions, hubs, and prayer walls work",
    color: "#6B4FBB",
  },
  {
    icon: Users,
    link: "/groups",
    title: "Find Your Community",
    desc: "Discover hubs, circles, and creators that match your journey",
    color: "#4FBBAA",
  },
  {
    icon: Coffee,
    link: "/daily",
    title: "Daily Habits Guide",
    desc: "Build a sustainable faith routine in just 15 min/day",
    color: "#BB4F7A",
  },
];

const categories = [
  { name: "Theology", icon: BookOpen, posts: "24.1k", color: "#6B4FBB", link: "/discussions", gradient: "linear-gradient(135deg, rgba(107,79,187,0.25), rgba(107,79,187,0.08))" },
  { name: "Mental Health", icon: Brain, posts: "18.7k", color: "#4FBBAA", link: "/mental-health", gradient: "linear-gradient(135deg, rgba(79,187,170,0.25), rgba(79,187,170,0.08))" },
  { name: "Relationships", icon: Heart, posts: "31.2k", color: "#BB4F7A", link: "/relationships", gradient: "linear-gradient(135deg, rgba(187,79,122,0.25), rgba(187,79,122,0.08))" },
  { name: "Parenting", icon: Baby, posts: "12.4k", color: "#BB7A4F", link: "/parenting", gradient: "linear-gradient(135deg, rgba(187,122,79,0.25), rgba(187,122,79,0.08))" },
  { name: "Career & Work", icon: Briefcase, posts: "9.8k", color: "#4F8FBB", link: "/work-leadership", gradient: "linear-gradient(135deg, rgba(79,143,187,0.25), rgba(79,143,187,0.08))" },
  { name: "Apologetics", icon: Shield, posts: "7.2k", color: "#00FF88", link: "/apologetics", gradient: "linear-gradient(135deg, rgba(0,255,136,0.25), rgba(0,255,136,0.08))" },
  { name: "Worship", icon: Music, posts: "22.1k", color: "#BB4F7A", link: "/worship", gradient: "linear-gradient(135deg, rgba(187,79,122,0.2), rgba(107,79,187,0.12))" },
  { name: "Global Church", icon: Globe, posts: "15.8k", color: "#4FBBAA", link: "/global-connect", gradient: "linear-gradient(135deg, rgba(79,187,170,0.2), rgba(79,143,187,0.1))" },
  { name: "Community", icon: Users, posts: "41.3k", color: "#6B4FBB", link: "/community", gradient: "linear-gradient(135deg, rgba(107,79,187,0.2), rgba(79,187,170,0.08))" },
  { name: "Daily Life", icon: Coffee, posts: "19.2k", color: "#BB7A4F", link: "/life-hacks", gradient: "linear-gradient(135deg, rgba(187,122,79,0.2), rgba(0,255,136,0.1))" },
  { name: "Devotionals", icon: Star, posts: "28.4k", color: "#00FF88", link: "/daily", gradient: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(187,122,79,0.1))" },
  { name: "Trending Now", icon: TrendingUp, posts: "Live", color: "#FF6B6B", link: "/topics", gradient: "linear-gradient(135deg, rgba(255,107,107,0.2), rgba(187,79,122,0.1))" },
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen" style={{ background: "#07070F" }}>
      <Navbar />

      <main className="page-body pb-16">
        {/* HERO SEARCH */}
        <div
          className="relative overflow-hidden border-b"
          style={{ borderColor: "#1E1E32" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(107,79,187,0.08) 0%, transparent 70%)",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles size={16} style={{ color: "#00FF88" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>
                Discover
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: "#F2F2F8" }}>
              Explore Vine
            </h1>
            <p className="text-base mb-8" style={{ color: "#8A8AA8" }}>
              Topics, creators, discussions, resources — everything that matters to your faith journey.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#6A6A88" }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Vine — topics, creators, discussions, resources..."
                className="w-full pl-12 pr-6 py-4 rounded-2xl text-base outline-none"
                style={{
                  background: "#12121F",
                  border: `1px solid ${searchQuery ? "rgba(0,255,136,0.35)" : "#1E1E32"}`,
                  color: "#F2F2F8",
                  boxShadow: "0 0 0 1px rgba(0,255,136,0.05), 0 8px 32px rgba(0,0,0,0.3)",
                }}
              />
            </div>

            {/* Quick search tags */}
            <div className="flex items-center justify-center gap-2 flex-wrap mt-4">
              {["Prayer", "Anxiety", "Marriage", "Salvation", "Fasting", "Apologetics"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 hover:border-[rgba(0,255,136,0.4)] hover:text-[#00FF88]"
                  style={{
                    border: searchQuery === tag ? "1px solid rgba(0,255,136,0.4)" : "1px solid #1E1E32",
                    color: searchQuery === tag ? "#00FF88" : "#6A6A88",
                    background: "transparent",
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

          {/* TRENDING TOPICS — horizontal scroll */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Flame size={16} style={{ color: "#00FF88" }} />
                <h2 className="text-lg font-black" style={{ color: "#F2F2F8" }}>Trending Topics</h2>
              </div>
              <button className="flex items-center gap-1 text-xs font-semibold transition-colors hover:text-[#44FFAA]" style={{ color: "#00FF88" }}>
                See all <ChevronRight size={13} />
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
              {trendingTopics.map((topic) => (
                <a
                  key={topic.name}
                  href={topic.href}
                  className="flex-shrink-0 w-44 block rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:scale-105"
                  style={{
                    background: topic.gradient,
                    border: "1px solid rgba(255,255,255,0.08)",
                    textDecoration: "none",
                  }}
                >
                  <TrendingUp size={18} className="mb-2" style={{ color: "rgba(255,255,255,0.7)" }} />
                  <p className="font-bold text-sm leading-snug mb-1" style={{ color: "#F2F2F8" }}>
                    {topic.name}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(242,242,248,0.6)" }}>
                    {topic.posts}
                  </p>
                </a>
              ))}
            </div>
          </section>

          {/* FOR YOU */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Star size={16} style={{ color: "#00FF88" }} />
                <h2 className="text-lg font-black" style={{ color: "#F2F2F8" }}>For You</h2>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(0,255,136,0.1)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.2)" }}
                >
                  Personalized
                </span>
              </div>
              <button className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#00FF88" }}>
                See all <ChevronRight size={13} />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {forYouContent.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="block rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:bg-[#18182A] group"
                  style={{ background: "#12121F", border: "1px solid #1E1E32", textDecoration: "none" }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.typeColor}20` }}
                    >
                      <item.icon size={18} style={{ color: item.typeColor }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className="text-[10px] font-black uppercase tracking-wider"
                        style={{ color: item.typeColor }}
                      >
                        {item.type}
                      </span>
                      <h3
                        className="text-sm font-bold leading-snug mt-0.5 mb-2 group-hover:text-[#00FF88] transition-colors"
                        style={{ color: "#F2F2F8" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[10px] mb-1" style={{ color: "#6A6A88" }}>{item.meta}</p>
                      <p className="text-[10px] font-semibold" style={{ color: "#4A4A68" }}>
                        {item.engagement}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* POPULAR THIS WEEK */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} style={{ color: "#00FF88" }} />
                <h2 className="text-lg font-black" style={{ color: "#F2F2F8" }}>Popular This Week</h2>
              </div>
              <a href="/discussions" className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#00FF88" }}>
                See all <ChevronRight size={13} />
              </a>
            </div>
            <div className="space-y-3">
              {popularPosts.map((post) => (
                <a
                  key={post.rank}
                  href="/discussions"
                  className="flex items-center gap-5 p-4 rounded-2xl cursor-pointer transition-all duration-200 hover:bg-[#18182A] group"
                  style={{ background: "#12121F", border: "1px solid #1E1E32", textDecoration: "none" }}
                >
                  <span
                    className="text-3xl font-black flex-shrink-0 w-10 text-center"
                    style={{
                      color:
                        post.rank === 1 ? "#00FF88" :
                        post.rank === 2 ? "#A0A0C0" :
                        post.rank === 3 ? "#BB7A4F" :
                        "#3A3A58",
                    }}
                  >
                    {post.rank}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm leading-snug mb-1.5 group-hover:text-[#00FF88] transition-colors" style={{ color: "#F2F2F8" }}>
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold" style={{ color: post.hubColor }}>
                        {post.hub}
                      </span>
                      <div className="flex items-center gap-1 text-xs" style={{ color: "#6A6A88" }}>
                        <ArrowUp size={11} />
                        {(post.votes / 1000).toFixed(1)}k
                      </div>
                      <div className="flex items-center gap-1 text-xs" style={{ color: "#6A6A88" }}>
                        <MessageSquare size={11} />
                        {(post.comments / 1000).toFixed(1)}k
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* DISCOVER CREATORS */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Users size={16} style={{ color: "#00FF88" }} />
                <h2 className="text-lg font-black" style={{ color: "#F2F2F8" }}>Discover Creators</h2>
              </div>
              <a href="/creators" className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#00FF88" }}>
                See all <ChevronRight size={13} />
              </a>
            </div>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
              {creators.map((creator) => (
                <a
                  key={creator.name}
                  href="/creators"
                  className="flex-shrink-0 w-48 block rounded-2xl p-5 text-center cursor-pointer transition-all duration-200 hover:bg-[#18182A]"
                  style={{ background: "#12121F", border: "1px solid #1E1E32", textDecoration: "none" }}
                >
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-black"
                    style={{
                      background: `${creator.color}22`,
                      color: creator.color,
                      border: `2px solid ${creator.color}40`,
                    }}
                  >
                    {creator.initials}
                  </div>
                  <p className="font-bold text-sm mb-0.5" style={{ color: "#F2F2F8" }}>
                    {creator.name}
                  </p>
                  <p className="text-[10px] mb-1" style={{ color: creator.color }}>
                    {creator.handle}
                  </p>
                  <p className="text-[10px] mb-3" style={{ color: "#6A6A88" }}>
                    {creator.role}
                  </p>
                  <p className="text-xs font-bold mb-3" style={{ color: "#8A8AA8" }}>
                    {creator.followers} followers
                  </p>
                  <button
                    className="w-full py-1.5 rounded-xl text-xs font-bold transition-all duration-200"
                    style={{
                      background: "rgba(0,255,136,0.08)",
                      border: "1px solid rgba(0,255,136,0.2)",
                      color: "#00FF88",
                    }}
                  >
                    Follow
                  </button>
                </a>
              ))}
            </div>
          </section>

          {/* NEW TO VINE */}
          <section>
            <div className="flex items-center gap-2 mb-5">
              <Zap size={16} style={{ color: "#00FF88" }} />
              <h2 className="text-lg font-black" style={{ color: "#F2F2F8" }}>New to Vine?</h2>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(79,187,170,0.1)", color: "#4FBBAA", border: "1px solid rgba(79,187,170,0.2)" }}
              >
                Start here
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {newToVine.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="block rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:bg-[#18182A] group"
                  style={{ background: "#12121F", border: "1px solid #1E1E32", textDecoration: "none" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${item.color}18` }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <h3
                    className="font-bold text-sm mb-2 group-hover:text-[#00FF88] transition-colors"
                    style={{ color: "#F2F2F8" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#6A6A88" }}>
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-xs font-semibold" style={{ color: item.color }}>
                    Get started <ChevronRight size={13} />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* CATEGORIES GRID */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Globe size={16} style={{ color: "#00FF88" }} />
                <h2 className="text-lg font-black" style={{ color: "#F2F2F8" }}>All Categories</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <a
                  key={cat.name}
                  href={cat.link}
                  className="block rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:scale-105 group"
                  style={{
                    background: cat.gradient,
                    border: `1px solid ${cat.color}20`,
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${cat.color}25` }}
                  >
                    <cat.icon size={20} style={{ color: cat.color }} />
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#F2F2F8" }}>
                    {cat.name}
                  </h3>
                  <p className="text-xs" style={{ color: "rgba(242,242,248,0.5)" }}>
                    {cat.posts} {cat.posts === "Live" ? "" : "posts"}
                  </p>
                </a>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
