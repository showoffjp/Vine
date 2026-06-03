"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Heart,
  MessageSquare,
  Share2,
  Bookmark,
  MoreHorizontal,
  TrendingUp,
  Users,
  Bell,
  Flame,
  BookOpen,
  Globe,
  Star,
  ChevronRight,
  Feather,
} from "lucide-react";
import { useState, useEffect } from "react";

const stories = [
  { name: "You", avatar: "ME", color: "#3a7d56", hasStory: false, isYou: true },
  { name: "Amara", avatar: "AO", color: "#F59E0B", hasStory: true },
  { name: "Ji-Woo", avatar: "JP", color: "#EC4899", hasStory: true },
  { name: "Carlos", avatar: "CM", color: "#10B981", hasStory: true },
  { name: "Lydia", avatar: "LB", color: "#6B4FBB", hasStory: true },
  { name: "Samuel", avatar: "SM", color: "#3B82F6", hasStory: true },
  { name: "Grace", avatar: "GN", color: "#EF4444", hasStory: false },
];

const posts = [
  {
    id: 1,
    link: "/discussions/faith-and-doubt-001",
    author: "Amara Osei",
    avatar: "AO",
    color: "#F59E0B",
    role: "Worship Leader · Ghana 🇬🇭",
    time: "2h ago",
    type: "text",
    content:
      "Psalm 34:8 — \"Taste and see that the LORD is good.\" I've been sitting with this verse all week. It's not asking you to agree with a theological proposition. It's inviting you to experience. What does that look like for you today?",
    verse: "Psalm 34:8",
    likes: 847,
    comments: 142,
    liked: false,
    saved: false,
    tags: ["Psalms", "Devotional"],
  },
  {
    id: 2,
    link: "/discussions/faith-and-doubt-001",
    author: "Ji-Woo Park",
    avatar: "JP",
    color: "#EC4899",
    role: "Seminary Student · South Korea 🇰🇷",
    time: "4h ago",
    type: "question",
    content:
      "Genuine question for the community: How do you handle doubt without losing faith? I'm in my second year of seminary and wrestling with some hard questions that don't have easy answers. Looking for real, honest responses — not just \"just trust God\" please 🙏",
    likes: 1204,
    comments: 384,
    liked: true,
    saved: false,
    tags: ["Doubt", "Theology", "Faith"],
  },
  {
    id: 3,
    link: "/blog/why-the-resurrection-changes-everything",
    author: "Pastor Marcus Webb",
    avatar: "MW",
    color: "#6B4FBB",
    role: "Senior Pastor · Atlanta, USA 🇺🇸",
    time: "6h ago",
    type: "verse",
    content:
      "The verse that has anchored me through every hard season of ministry:",
    verse: "Romans 8:38-39",
    verseText:
      "\"For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.\"",
    likes: 2341,
    comments: 89,
    liked: false,
    saved: true,
    tags: ["Romans", "Assurance"],
  },
  {
    id: 4,
    link: "/stories/carlos-mendez-drug-cartel-to-church-planter",
    author: "Carlos Mendez",
    avatar: "CM",
    color: "#10B981",
    role: "Church Planter · Bogotá, Colombia 🇨🇴",
    time: "9h ago",
    type: "testimony",
    content:
      "Planted our church 3 years ago with 7 people in my living room. Yesterday we broke ground on our first building — 340 members strong. To everyone in early-stage ministry who's exhausted and wondering if it matters: IT MATTERS. Don't quit. The harvest comes. 🌱",
    likes: 5832,
    comments: 741,
    liked: false,
    saved: false,
    tags: ["Testimony", "Church Planting", "Mission"],
  },
  {
    id: 5,
    link: "/discussions/depression-therapy-faith-005",
    author: "Dr. Sarah Kimani",
    avatar: "SK",
    color: "#3a7d56",
    role: "Biblical Counselor · Nairobi, Kenya 🇰🇪",
    time: "Yesterday",
    type: "text",
    content:
      "Reminder: You are allowed to grieve AND trust God simultaneously. Lament is not a lack of faith — it's one of the most theologically honest things you can do. Half the Psalms are lament. The cross itself is lament. God can handle your grief. Bring it to Him.",
    likes: 3190,
    comments: 217,
    liked: true,
    saved: true,
    tags: ["Mental Health", "Grief", "Psalms"],
  },
  {
    id: 6,
    link: "/blog/servant-leadership-jesus",
    author: "Pastor Kwame Asante",
    avatar: "KA",
    color: "#F59E0B",
    role: "Lead Pastor · Kumasi, Ghana 🇬🇭",
    time: "2 days ago",
    type: "text",
    content:
      "Leadership without servanthood is just management. Jesus redefined greatness in Mark 10:44 — 'whoever wants to be first must be slave of all.' I've been in ministry 22 years and only recently understood: the leader's greatest work is often invisible. It's washing feet, not giving speeches. 🙏",
    likes: 2847,
    comments: 193,
    liked: false,
    saved: false,
    tags: ["Leadership", "Service", "Ministry"],
  },
  {
    id: 7,
    link: "/discussions/deconstruction-faith-008",
    author: "Lydia Böhm",
    avatar: "LB",
    color: "#EC4899",
    role: "Pastor's Daughter · Berlin, Germany 🇩🇪",
    time: "2 days ago",
    type: "question",
    content:
      "I grew up in the church, went to Bible school, led worship for 8 years. And then everything I thought I knew started to unravel. Two years later I'm still in the middle of it — not fully in, not fully out. Has anyone else navigated deconstruction and found their way back? What did that look like?",
    likes: 4201,
    comments: 647,
    liked: false,
    saved: false,
    tags: ["Deconstruction", "Faith Journey", "Doubt"],
  },
  {
    id: 8,
    link: "/topics/prayer-fasting",
    author: "Bishop James Nkosi",
    avatar: "JN",
    color: "#E07030",
    role: "Bishop · Johannesburg, South Africa 🇿🇦",
    time: "3 days ago",
    type: "verse",
    content: "The verse that changed how I pray:",
    verse: "Isaiah 40:31",
    verseText:
      '"But those who wait on the Lord shall renew their strength; they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint."',
    likes: 1923,
    comments: 84,
    liked: false,
    saved: false,
    tags: ["Prayer", "Isaiah", "Strength"],
  },
  {
    id: 9,
    link: "/blog/psalms-permission-to-lament",
    author: "Lydia Mbeki",
    avatar: "LM",
    color: "#6B4FBB",
    role: "Author & Theologian · Cape Town, South Africa 🇿🇦",
    time: "3 days ago",
    type: "text",
    content:
      "We've created a Christianity that doesn't know what to do with sadness. We rush people out of grief, tell them to 'trust God,' and wonder why they feel unheard. Psalm 22 opens with 'My God, my God, why have you forsaken me?' Jesus quoted it from the cross. If lament was good enough for the Son of God, it's good enough for us. Let your people cry.",
    likes: 6741,
    comments: 892,
    liked: false,
    saved: false,
    tags: ["Psalms", "Lament", "Mental Health"],
  },
  {
    id: 10,
    link: "/stories/ji-woo-park-kpop-idol-to-pastor",
    author: "Ji-Woo Park",
    avatar: "JP",
    color: "#EC4899",
    role: "Pastor · Seoul, South Korea 🇰🇷",
    time: "4 days ago",
    type: "testimony",
    content:
      "People ask me what I miss most about my old life. The honest answer? Nothing. Not the fame, not the lights, not the money. I traded the applause of 50,000 people for something better: the quiet 'well done' of a Father who knows me by name. Matthew 6:6 is the most radical verse in the Sermon on the Mount. 🙌",
    likes: 8932,
    comments: 1204,
    liked: false,
    saved: false,
    tags: ["Testimony", "Identity", "Fame & Faith"],
  },
  {
    id: 11,
    link: "/discussions/antidepressants-faith-022",
    author: "Dr. Grace Winters",
    avatar: "GW",
    color: "#4FBBAA",
    role: "Nurse Practitioner · Nashville, USA 🇺🇸",
    time: "5 days ago",
    type: "text",
    content:
      "I've been on antidepressants for 3 years as a Christian. I still feel God. I still pray. I still worship. The medication didn't fix my relationship with God — it just leveled the playing field enough for me to show up for it. Taking care of your brain IS taking care of the temple. Stop letting shame keep you from getting help. 💙",
    likes: 7214,
    comments: 943,
    liked: false,
    saved: false,
    tags: ["Mental Health", "Faith", "Stigma"],
  },
  {
    id: 12,
    link: "/discussions/biblical-finances-stewardship-007",
    author: "Naomi Adeyemi",
    avatar: "NA",
    color: "#10B981",
    role: "Financial Coach · Lagos, Nigeria 🇳🇬",
    time: "5 days ago",
    type: "text",
    content:
      "Proverbs 3:9 says honor God with your firstfruits. Not your leftovers. We applied that principle 4 years ago when we were $40K in debt. We gave first and God provided ways I can't explain rationally. We paid it off in 18 months. I'm not preaching prosperity gospel — I'm testifying to the supernatural math of obedience. 🙏",
    likes: 4103,
    comments: 521,
    liked: false,
    saved: false,
    tags: ["Finances", "Testimony", "Stewardship"],
  },
];

const suggestedPeople = [
  { name: "Rev. David Osei", role: "Theologian", avatar: "DO", color: "#3a7d56", mutual: 12 },
  { name: "Isabella Ferreira", role: "Missionary · Brazil", avatar: "IF", color: "#EC4899", mutual: 7 },
  { name: "James Okafor", role: "Christian Writer", avatar: "JO", color: "#3B82F6", mutual: 24 },
];

const trendingNow = [
  { tag: "Resurrection", posts: "4.8k posts" },
  { tag: "GenZFaith", posts: "3.2k posts" },
  { tag: "ChristianMentalHealth", posts: "2.9k posts" },
  { tag: "BiblicalLeadership", posts: "1.7k posts" },
];

type PostLikes = { [key: number]: boolean };
type PostSaved = { [key: number]: boolean };

export default function FeedPage() {
  const [likedPosts, setLikedPosts] = useState<PostLikes>(() => {
    try {
      const s = localStorage.getItem("vine_feed_likes");
      return s ? JSON.parse(s) : { 2: true, 5: true };
    } catch { return { 2: true, 5: true }; }
  });
  const [savedPosts, setSavedPosts] = useState<PostSaved>(() => {
    try {
      const s = localStorage.getItem("vine_feed_saves");
      return s ? JSON.parse(s) : { 3: true, 5: true };
    } catch { return { 3: true, 5: true }; }
  });
  const [postText, setPostText] = useState("");
  const [postShared, setPostShared] = useState(false);
  const [feedSort, setFeedSort] = useState("Latest");
  const [userName, setUserName] = useState("Friend");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_user");
      if (stored) {
        const u = JSON.parse(stored);
        if (u.firstName) setUserName(u.firstName);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem("vine_feed_likes", JSON.stringify(likedPosts)); } catch {}
  }, [likedPosts]);

  useEffect(() => {
    try { localStorage.setItem("vine_feed_saves", JSON.stringify(savedPosts)); } catch {}
  }, [savedPosts]);

  const toggleLike = (id: number) =>
    setLikedPosts((p) => ({ ...p, [id]: !p[id] }));
  const toggleSave = (id: number) =>
    setSavedPosts((p) => ({ ...p, [id]: !p[id] }));

  const handleShare = () => {
    if (!postText.trim()) return;
    setPostShared(true);
    setPostText("");
    setTimeout(() => setPostShared(false), 3000);
  };

  const insertPrefix = (prefix: string) =>
    setPostText((t) => (t.startsWith(prefix) ? t : prefix + t));

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">

            {/* Left sidebar */}
            <div className="hidden lg:block space-y-4">
              {/* Quick nav */}
              <div
                className="rounded-2xl p-4"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {[
                  { icon: Flame, label: "My Feed", href: "/feed", active: true },
                  { icon: Globe, label: "Global Connect", href: "/global-connect", active: false },
                  { icon: MessageSquare, label: "Discussions", href: "/discussions", active: false },
                  { icon: BookOpen, label: "Daily Bread", href: "/daily", active: false },
                  { icon: Bell, label: "Notifications", href: "/notifications", active: false },
                  { icon: Bookmark, label: "Saved Posts", href: "/profile", active: false },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all"
                      style={{
                        background: item.active ? "rgba(58,125,86,0.08)" : "transparent",
                        color: item.active ? "#3a7d56" : "#8A8AA8",
                      }}
                      onMouseEnter={(e) => {
                        if (!item.active) e.currentTarget.style.color = "#C0C0D8";
                      }}
                      onMouseLeave={(e) => {
                        if (!item.active) e.currentTarget.style.color = "#8A8AA8";
                      }}
                    >
                      <Icon size={16} />
                      <span className="text-sm font-semibold">{item.label}</span>
                    </a>
                  );
                })}
              </div>

              {/* Daily verse */}
              <div
                className="rounded-2xl p-5"
                style={{
                  background: "linear-gradient(135deg, rgba(58,125,86,0.06) 0%, rgba(107,79,187,0.06) 100%)",
                  border: "1px solid rgba(58,125,86,0.15)",
                }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#3a7d56" }}>
                  ✨ Verse of the Day
                </p>
                <p className="text-sm italic mb-2 leading-relaxed" style={{ color: "#C0C0D8" }}>
                  &ldquo;The Lord your God is with you, the Mighty Warrior who saves.&rdquo;
                </p>
                <p className="text-xs font-bold" style={{ color: "#007A33" }}>— Zephaniah 3:17</p>
              </div>
            </div>

            {/* Main feed */}
            <div className="lg:col-span-2 space-y-5">
              {/* Stories */}
              <div
                className="rounded-2xl p-4"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {stories.map((s) => (
                    <div key={s.name} className="flex flex-col items-center gap-1.5 cursor-pointer shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black relative"
                        style={{
                          background: s.hasStory ? `${s.color}25` : "rgba(255,255,255,0.04)",
                          color: s.color,
                          boxShadow: s.hasStory ? `0 0 0 2px ${s.color}` : "none",
                        }}
                      >
                        {s.isYou ? "+" : s.avatar}
                      </div>
                      <span className="text-xs" style={{ color: "#6A6A88" }}>
                        {s.isYou ? "Add" : s.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compose */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                    style={{ background: "rgba(58,125,86,0.2)", color: "#3a7d56" }}
                  >
                    ME
                  </div>
                  <textarea
                    placeholder={`What's on your heart, ${userName}?`}
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    rows={2}
                    className="flex-1 bg-transparent outline-none text-sm resize-none"
                    style={{ color: "#F2F2F8" }}
                  />
                </div>
                <div className="flex items-center justify-between border-t pt-3" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="flex gap-3">
                    <button onClick={() => insertPrefix("📖 Verse: ")} className="text-xs flex items-center gap-1.5 font-semibold" style={{ color: "#6A6A88" }}>
                      <BookOpen size={14} /> Verse
                    </button>
                    <button onClick={() => insertPrefix("🙏 Prayer request: ")} className="text-xs flex items-center gap-1.5 font-semibold" style={{ color: "#6A6A88" }}>
                      <Heart size={14} /> Prayer
                    </button>
                    <button onClick={() => insertPrefix("✨ Testimony: ")} className="text-xs flex items-center gap-1.5 font-semibold" style={{ color: "#6A6A88" }}>
                      <Feather size={14} /> Testimony
                    </button>
                  </div>
                  <button
                    onClick={handleShare}
                    className="px-5 py-1.5 rounded-lg text-sm font-bold text-black transition-opacity"
                    style={{
                      background: postShared ? "linear-gradient(135deg, #6B4FBB, #8B6FDB)" : "linear-gradient(135deg, #3a7d56, #3a7d56)",
                      opacity: postText.trim() || postShared ? 1 : 0.4,
                    }}
                  >
                    {postShared ? "Shared! ✓" : "Share"}
                  </button>
                </div>
              </div>

              {/* Sort bar */}
              <div className="flex items-center gap-2">
                {["Latest", "Popular", "Prayers"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setFeedSort(s)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                    style={{
                      background: feedSort === s ? "rgba(58,125,86,0.12)" : "transparent",
                      border: `1px solid ${feedSort === s ? "rgba(58,125,86,0.3)" : "rgba(255,255,255,0.06)"}`,
                      color: feedSort === s ? "#3a7d56" : "#6A6A88",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Posts */}
              {[...posts]
                .filter((p) => feedSort !== "Prayers" || p.type === "prayer")
                .sort((a, b) => feedSort === "Popular" ? b.likes - a.likes : 0)
                .map((post) => (
                <div
                  key={post.id}
                  className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shrink-0"
                        style={{ background: `${post.color}25`, color: post.color, border: `2px solid ${post.color}30` }}
                      >
                        {post.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: "#F2F2F8" }}>{post.author}</p>
                        <p className="text-xs" style={{ color: "#4A4A68" }}>{post.role} · {post.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {post.type === "testimony" && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}>
                          ✨ Testimony
                        </span>
                      )}
                      {post.type === "question" && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: "rgba(107,79,187,0.15)", color: "#A080FF" }}>
                          ❓ Question
                        </span>
                      )}
                      <button style={{ color: "#4A4A68" }}>
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-sm mb-3 leading-relaxed" style={{ color: "#C0C0D8" }}>{post.content}</p>

                  {/* Verse block */}
                  {post.verseText && (
                    <div
                      className="p-4 rounded-xl mb-3"
                      style={{ background: "rgba(58,125,86,0.05)", border: "1px solid rgba(58,125,86,0.15)" }}
                    >
                      <p className="text-sm italic mb-1.5 leading-relaxed" style={{ color: "#00DD77" }}>{post.verseText}</p>
                      <p className="text-xs font-bold" style={{ color: "#007A33" }}>— {post.verse}</p>
                    </div>
                  )}
                  {post.verse && !post.verseText && (
                    <span className="text-xs px-2 py-0.5 rounded-full mb-3 inline-block" style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56" }}>
                      📜 {post.verse}
                    </span>
                  )}

                  {/* Tags */}
                  {post.tags && (
                    <div className="flex gap-2 flex-wrap mb-4">
                      {post.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)", color: "#6A6A88" }}>
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-5 border-t pt-3" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center gap-1.5 text-sm transition-colors"
                      style={{ color: likedPosts[post.id] ? "#EC4899" : "#6A6A88" }}
                    >
                      <Heart size={15} fill={likedPosts[post.id] ? "#EC4899" : "none"} />
                      <span className="text-xs">{likedPosts[post.id] ? post.likes + 1 : post.likes}</span>
                    </button>
                    <a href={post.link} className="flex items-center gap-1.5 text-sm transition-colors hover:text-[#3a7d56]" style={{ color: "#6A6A88", textDecoration: "none" }}>
                      <MessageSquare size={15} />
                      <span className="text-xs">{post.comments}</span>
                    </a>
                    <button
                      onClick={() => {
                        try { navigator.clipboard.writeText(window.location.origin + post.link); } catch {}
                      }}
                      className="flex items-center gap-1.5 text-sm transition-colors hover:text-[#3a7d56]"
                      style={{ color: "#6A6A88" }}
                      title="Copy link"
                    >
                      <Share2 size={15} />
                    </button>
                    <button
                      onClick={() => toggleSave(post.id)}
                      className="flex items-center gap-1.5 text-sm ml-auto transition-colors"
                      style={{ color: savedPosts[post.id] ? "#3a7d56" : "#6A6A88" }}
                    >
                      <Bookmark size={15} fill={savedPosts[post.id] ? "#3a7d56" : "none"} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
