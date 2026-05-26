"use client";

import {
  ArrowUp,
  MessageSquare,
  Bookmark,
  Share2,
  TrendingUp,
  ChevronRight,
  Users,
  Flame,
} from "lucide-react";

const discussions = [
  {
    hub: "r/FaithAndDoubt",
    hubColor: "#6B4FBB",
    time: "3h ago",
    title:
      "How do you maintain faith when your prayers seem to go unanswered? Genuine question.",
    preview:
      "I've been a believer for 15 years and I'm going through the hardest season of my life. My wife and I have been praying for healing for two years and...",
    votes: 2847,
    comments: 394,
    saved: 821,
    flair: "Discussion",
    flairColor: "#6B4FBB",
  },
  {
    hub: "r/ChristianLifeHacks",
    hubColor: "#E8A020",
    time: "1h ago",
    title:
      "I built a morning routine based entirely on Proverbs and it changed my life. Here's the breakdown.",
    preview:
      "5:30am: Silence and prayer (Psalm 46:10). 5:50am: Read one chapter of Scripture with coffee. 6:10am: Journal one thing I'm grateful for and one thing I'm trusting God for...",
    votes: 5102,
    comments: 612,
    saved: 2304,
    flair: "Life Hack",
    flairColor: "#E8A020",
  },
  {
    hub: "r/MentalHealthAndFaith",
    hubColor: "#3A9E72",
    time: "6h ago",
    title:
      "Christians who have gone to therapy — what was it like? Was it helpful? Did your faith factor in?",
    preview:
      "I've been struggling with anxiety for a while and my pastor suggested therapy but I'm not sure how faith and counseling interact...",
    votes: 3490,
    comments: 501,
    saved: 1100,
    flair: "Wellness",
    flairColor: "#3A9E72",
  },
];

const trendingHubs = [
  { name: "Faith & Doubt", members: "42K", icon: "🔥" },
  { name: "Daily Devotional", members: "38K", icon: "📖" },
  { name: "Christian Parenting", members: "31K", icon: "👨‍👩‍👧" },
  { name: "Life Hacks", members: "28K", icon: "⚡" },
  { name: "Worship & Music", members: "25K", icon: "🎵" },
  { name: "Mental Health", members: "22K", icon: "💚" },
];

export default function CommunityPreview() {
  return (
    <section className="py-24 relative overflow-hidden" id="community">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 50%, rgba(107,79,187,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="tag-pill inline-block mb-4">Community Hubs</p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4"
            style={{ color: "#F2F2F8" }}
          >
            Real Conversations.
            <br />
            <span className="gold-gradient">Real Faith.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#8A8AA8" }}>
            Thousands of topic-specific hubs where Christians share openly,
            debate respectfully, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Discussion Feed */}
          <div className="lg:col-span-2 space-y-4">
            {discussions.map((post, i) => (
              <div
                key={i}
                className="card-glow rounded-2xl p-5 cursor-pointer group"
                style={{ background: "var(--bg-card)" }}
              >
                {/* Hub + time */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-bold"
                    style={{ color: post.hubColor }}
                  >
                    {post.hub}
                  </span>
                  <span style={{ color: "#3A3A56" }}>·</span>
                  <span className="text-xs" style={{ color: "#6A6A88" }}>
                    {post.time}
                  </span>
                  <span
                    className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: `${post.flairColor}18`,
                      color: post.flairColor,
                      border: `1px solid ${post.flairColor}30`,
                    }}
                  >
                    {post.flair}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-base leading-snug mb-2 group-hover:text-white transition-colors"
                  style={{ color: "#E0E0F0" }}
                >
                  {post.title}
                </h3>

                {/* Preview */}
                <p
                  className="text-sm leading-relaxed line-clamp-2 mb-4"
                  style={{ color: "#6A6A88" }}
                >
                  {post.preview}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-4 text-xs">
                  <button
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors"
                    style={{
                      color: "#D4AF37",
                      background: "rgba(212,175,55,0.08)",
                    }}
                  >
                    <ArrowUp size={13} />
                    {post.votes.toLocaleString()}
                  </button>
                  <button
                    className="flex items-center gap-1.5"
                    style={{ color: "#6A6A88" }}
                  >
                    <MessageSquare size={13} />
                    {post.comments}
                  </button>
                  <button
                    className="flex items-center gap-1.5"
                    style={{ color: "#6A6A88" }}
                  >
                    <Bookmark size={13} />
                    {post.saved.toLocaleString()}
                  </button>
                  <button
                    className="flex items-center gap-1.5 ml-auto"
                    style={{ color: "#6A6A88" }}
                  >
                    <Share2 size={13} />
                    Share
                  </button>
                </div>
              </div>
            ))}

            <button className="w-full py-3 rounded-xl text-sm font-semibold btn-outline-gold">
              View All Discussions
            </button>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            {/* Trending Hubs */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={16} style={{ color: "#D4AF37" }} />
                <h3 className="font-bold text-sm" style={{ color: "#F2F2F8" }}>
                  Trending Hubs
                </h3>
              </div>
              <div className="space-y-2">
                {trendingHubs.map((hub, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base">{hub.icon}</span>
                      <div>
                        <p
                          className="text-sm font-medium group-hover:text-white transition-colors"
                          style={{ color: "#C0C0D8" }}
                        >
                          {hub.name}
                        </p>
                        <p className="text-xs" style={{ color: "#6A6A88" }}>
                          {hub.members} members
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      size={14}
                      style={{ color: "#3A3A56" }}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Join CTA */}
            <div
              className="p-5 rounded-2xl text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(107,79,187,0.06))",
                border: "1px solid rgba(212,175,55,0.15)",
              }}
            >
              <Flame size={24} style={{ color: "#D4AF37" }} className="mx-auto mb-3" />
              <h3 className="font-bold mb-1" style={{ color: "#F2F2F8" }}>
                Join the Conversation
              </h3>
              <p className="text-xs mb-4" style={{ color: "#6A6A88" }}>
                Create your free account to post, vote, and connect with
                thousands of Christians worldwide.
              </p>
              <button className="btn-gold w-full py-2.5 rounded-xl text-sm">
                Join Free
              </button>
            </div>

            {/* Online now */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Users size={16} style={{ color: "#3A9E72" }} />
                <h3 className="font-bold text-sm" style={{ color: "#F2F2F8" }}>
                  Christians Online Now
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["#D4AF37", "#6B4FBB", "#3A9E72", "#C0506A", "#4A80D4"].map(
                    (c, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                        style={{
                          background: c,
                          borderColor: "var(--bg-card)",
                          color: "#fff",
                        }}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    )
                  )}
                </div>
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#F2F2F8" }}
                  >
                    3,842 online
                  </p>
                  <p className="text-xs" style={{ color: "#6A6A88" }}>
                    from 47 countries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
