"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Calendar,
  Edit3,
  Share2,
  BookOpen,
  Bookmark,
  MessageSquare,
  Users,
  Heart,
  Star,
  Flame,
  Shield,
  Award,
  Zap,
  TrendingUp,
  CheckCircle,
  FileText,
  Target,
  ChevronRight,
} from "lucide-react";

const tabs = ["Activity", "Saved", "Discussions", "Resources", "About"];

const badges = [
  {
    icon: Star,
    name: "Early Adopter",
    desc: "Joined Vine in its founding year",
    color: "#00FF88",
  },
  {
    icon: Heart,
    name: "Prayer Warrior",
    desc: "Prayed for 100+ community members",
    color: "#BB4F7A",
  },
  {
    icon: Shield,
    name: "Verified Believer",
    desc: "Completed faith identity verification",
    color: "#4FBBAA",
  },
  {
    icon: Award,
    name: "Top Contributor",
    desc: "Ranked in top 5% of community contributors",
    color: "#6B4FBB",
  },
  {
    icon: Flame,
    name: "Streak 30",
    desc: "30 consecutive days of engagement",
    color: "#E07030",
  },
];

const interests = [
  "Apologetics",
  "Biblical Finance",
  "Parenting",
  "Leadership",
  "Devotionals",
  "Mental Health",
  "Relationships",
];

const activityFeed = [
  {
    type: "post",
    icon: MessageSquare,
    color: "#6B4FBB",
    text: "Posted in r/Apologetics",
    detail: '"The Case for the Resurrection: 5 Historical Arguments That Changed My Faith"',
    time: "2 hours ago",
    meta: "247 upvotes · 38 comments",
  },
  {
    type: "save",
    icon: Bookmark,
    color: "#00FF88",
    text: "Saved an article",
    detail: '"10 Biblical Principles for Getting Out of Debt — Dave Ramsey\'s Method vs. Scripture"',
    time: "5 hours ago",
    meta: "Resource · 8 min read",
  },
  {
    type: "devotional",
    icon: BookOpen,
    color: "#4FBBAA",
    text: "Completed a devotional",
    detail: '"Mercies New Every Morning — Lamentations 3:22-23"',
    time: "Yesterday",
    meta: "Day 21 of 30-day plan",
  },
  {
    type: "streak",
    icon: Flame,
    color: "#E07030",
    text: "Hit a 30-day prayer streak",
    detail: "30 consecutive days of prayer — a personal milestone!",
    time: "2 days ago",
    meta: "Achievement unlocked 🔥",
  },
  {
    type: "prayer",
    icon: Heart,
    color: "#BB4F7A",
    text: "Prayed for someone",
    detail: "Prayed for Marcus W. who is going through a difficult season in his marriage",
    time: "3 days ago",
    meta: "Prayer Wall",
  },
  {
    type: "comment",
    icon: MessageSquare,
    color: "#4F8FBB",
    text: "Left a comment",
    detail: '"This is exactly what I needed to hear. The point about sovereignty vs. free will really helped me..."',
    time: "4 days ago",
    meta: "In: Does free will exist if God is omniscient?",
  },
];

const savedItems = [
  { title: "How to Study the Bible: 7 Methods for Deeper Understanding", type: "Article", time: "1 day ago" },
  { title: "Financial Freedom Through Biblical Stewardship", type: "Resource", time: "3 days ago" },
  { title: "When God Feels Silent — Walking Through Spiritual Dryness", type: "Devotional", time: "1 week ago" },
  { title: "Raising Children Who Love God in a Digital World", type: "Discussion", time: "2 weeks ago" },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Activity");
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "#07070F" }}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 page-body pb-16">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT SIDEBAR */}
          <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-4">
            {/* Profile card */}
            <div
              className="rounded-2xl p-6 flex flex-col items-center text-center"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              {/* Avatar */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mb-4 text-2xl font-black"
                style={{
                  background: "linear-gradient(135deg, #00FF88 0%, #6B4FBB 100%)",
                  color: "#07070F",
                  boxShadow: "0 0 0 4px rgba(0,255,136,0.15)",
                }}
              >
                JH
              </div>

              <h2 className="text-xl font-black mb-0.5" style={{ color: "#F2F2F8" }}>
                Jason Harper
              </h2>
              <p className="text-sm mb-3" style={{ color: "#8A8AA8" }}>
                @jasonharper
              </p>

              <div className="flex items-center gap-1.5 text-xs mb-1" style={{ color: "#6A6A88" }}>
                <MapPin size={12} />
                Houston, TX 🇺🇸
              </div>
              <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: "#6A6A88" }}>
                <Calendar size={12} />
                Member since Jan 2025
              </div>

              <p className="text-sm leading-relaxed mb-5 text-left" style={{ color: "#8A8AA8" }}>
                Husband. Father of 3. Passionate about apologetics, biblical finance, and helping men grow in their
                faith.{" "}
                <span style={{ color: "#00FF88" }}>Philippians 4:13.</span>
              </p>

              {/* Stats */}
              <div
                className="w-full grid grid-cols-4 gap-1 p-3 rounded-xl mb-4"
                style={{ background: "#07070F", border: "1px solid #1E1E32" }}
              >
                {[
                  { label: "Posts", value: "247" },
                  { label: "Followers", value: "1.2K" },
                  { label: "Following", value: "389" },
                  { label: "Saved", value: "834" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center">
                    <span className="text-base font-black" style={{ color: "#F2F2F8" }}>
                      {stat.value}
                    </span>
                    <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: "#6A6A88" }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 w-full">
                <button className="btn-gold flex-1 py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5">
                  <Edit3 size={13} />
                  Edit Profile
                </button>
                <button
                  className="btn-outline-gold px-3 py-2 rounded-xl text-sm flex items-center justify-center"
                >
                  <Share2 size={14} />
                </button>
              </div>
            </div>

            {/* Badges */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00FF88" }}>
                Badges
              </h4>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <div
                    key={badge.name}
                    className="relative"
                    onMouseEnter={() => setHoveredBadge(badge.name)}
                    onMouseLeave={() => setHoveredBadge(null)}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                      style={{ background: `${badge.color}20`, border: `1px solid ${badge.color}40` }}
                    >
                      <badge.icon size={18} style={{ color: badge.color }} />
                    </div>
                    {hoveredBadge === badge.name && (
                      <div
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 p-2 rounded-lg z-10 pointer-events-none"
                        style={{
                          background: "#1E1E32",
                          border: `1px solid ${badge.color}40`,
                          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                        }}
                      >
                        <p className="text-xs font-bold mb-0.5" style={{ color: badge.color }}>
                          {badge.name}
                        </p>
                        <p className="text-[10px] leading-snug" style={{ color: "#8A8AA8" }}>
                          {badge.desc}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00FF88" }}>
                Interests
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {interests.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently Reading */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00FF88" }}>
                Currently Reading
              </h4>
              <div className="flex gap-3 items-start">
                <div
                  className="w-10 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #6B4FBB, #4F3A8A)" }}
                >
                  <BookOpen size={16} style={{ color: "#00FF88" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold leading-snug mb-0.5" style={{ color: "#F2F2F8" }}>
                    Mere Christianity
                  </p>
                  <p className="text-xs mb-2" style={{ color: "#8A8AA8" }}>
                    C.S. Lewis
                  </p>
                  <div className="w-full h-1.5 rounded-full" style={{ background: "#1E1E32" }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: "67%", background: "linear-gradient(90deg, #00FF88, #44FFAA)" }}
                    />
                  </div>
                  <p className="text-[10px] mt-1" style={{ color: "#6A6A88" }}>
                    67% complete
                  </p>
                </div>
              </div>
            </div>

            {/* Faith Stats */}
            <div
              className="rounded-2xl p-4"
              style={{
                background: "linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(107,79,187,0.04) 100%)",
                border: "1px solid rgba(0,255,136,0.15)",
              }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00FF88" }}>
                Faith Stats
              </h4>
              <div className="space-y-3">
                {[
                  { icon: "🔥", label: "Prayer streak", value: "30 days" },
                  { icon: "📖", label: "Bible reading", value: "45 chapters this month" },
                  { icon: "✅", label: "Devotionals", value: "28 completed this month" },
                  { icon: "⭐", label: "Community Karma", value: "4,821" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{stat.icon}</span>
                      <span className="text-xs" style={{ color: "#8A8AA8" }}>
                        {stat.label}
                      </span>
                    </div>
                    <span className="text-xs font-bold" style={{ color: "#F2F2F8" }}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="flex-1 min-w-0">
            {/* Tabs */}
            <div
              className="rounded-2xl mb-4 overflow-hidden"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <div className="flex overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="flex-shrink-0 px-6 py-4 text-sm font-semibold transition-all duration-200"
                    style={{
                      color: activeTab === tab ? "#00FF88" : "#6A6A88",
                      borderBottom: activeTab === tab ? "2px solid #00FF88" : "2px solid transparent",
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Activity Tab */}
            {activeTab === "Activity" && (
              <div className="space-y-3">
                {activityFeed.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:bg-[#18182A]"
                    style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${item.color}18` }}
                      >
                        <item.icon size={16} style={{ color: item.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-xs font-bold" style={{ color: item.color }}>
                            {item.text}
                          </span>
                          <span className="text-[10px]" style={{ color: "#6A6A88" }}>
                            {item.time}
                          </span>
                        </div>
                        <p className="text-sm font-medium leading-snug mb-1" style={{ color: "#F2F2F8" }}>
                          {item.detail}
                        </p>
                        <p className="text-xs" style={{ color: "#6A6A88" }}>
                          {item.meta}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Saved Tab */}
            {activeTab === "Saved" && (
              <div className="space-y-3">
                {savedItems.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:bg-[#18182A] flex items-center gap-4"
                    style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                  >
                    <Bookmark size={18} style={{ color: "#00FF88" }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold leading-snug mb-0.5" style={{ color: "#F2F2F8" }}>
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="tag-pill">{item.type}</span>
                        <span className="text-[10px]" style={{ color: "#6A6A88" }}>
                          {item.time}
                        </span>
                      </div>
                    </div>
                    <ChevronRight size={16} style={{ color: "#6A6A88" }} />
                  </div>
                ))}
              </div>
            )}

            {/* Discussions Tab */}
            {activeTab === "Discussions" && (
              <div
                className="rounded-2xl p-8 text-center"
                style={{ background: "#12121F", border: "1px solid #1E1E32" }}
              >
                <MessageSquare size={32} className="mx-auto mb-3" style={{ color: "#6A6A88" }} />
                <p className="text-sm font-semibold mb-1" style={{ color: "#F2F2F8" }}>
                  15 discussions started
                </p>
                <p className="text-xs" style={{ color: "#6A6A88" }}>
                  View all discussions by Jason Harper
                </p>
              </div>
            )}

            {/* Resources Tab */}
            {activeTab === "Resources" && (
              <div
                className="rounded-2xl p-8 text-center"
                style={{ background: "#12121F", border: "1px solid #1E1E32" }}
              >
                <FileText size={32} className="mx-auto mb-3" style={{ color: "#6A6A88" }} />
                <p className="text-sm font-semibold mb-1" style={{ color: "#F2F2F8" }}>
                  8 resources shared
                </p>
                <p className="text-xs" style={{ color: "#6A6A88" }}>
                  Articles, guides, and tools curated by Jason
                </p>
              </div>
            )}

            {/* About Tab */}
            {activeTab === "About" && (
              <div className="space-y-4">
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <h3 className="font-bold text-base mb-4" style={{ color: "#F2F2F8" }}>
                    About Jason
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: Users, label: "Denomination", value: "Non-denominational" },
                      { icon: Calendar, label: "Christian since", value: "Since birth" },
                      { icon: Target, label: "Primary goal", value: "Grow in apologetics & biblical finance" },
                      { icon: MapPin, label: "Location", value: "Houston, TX, United States" },
                      { icon: TrendingUp, label: "Joined", value: "January 2025" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-3">
                        <row.icon size={15} style={{ color: "#6A6A88" }} />
                        <span className="text-sm" style={{ color: "#8A8AA8" }}>
                          {row.label}:
                        </span>
                        <span className="text-sm font-medium" style={{ color: "#F2F2F8" }}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="rounded-2xl p-6 verse-card"
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#00FF88" }}>
                    Favourite Verse
                  </p>
                  <p className="text-base italic font-medium leading-relaxed mb-2" style={{ color: "#F2F2F8" }}>
                    &ldquo;I can do all things through Christ who strengthens me.&rdquo;
                  </p>
                  <p className="text-sm font-semibold" style={{ color: "#00FF88" }}>
                    — Philippians 4:13
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
