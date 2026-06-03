"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import {
  Search,
  Users,
  MessageSquare,
  Globe,
  Heart,
  BookOpen,
  Music,
  Baby,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Headphones,
  Star,
  Zap,
  Send,
  MapPin,
  TrendingUp,
  DollarSign,
} from "lucide-react";


const featuredCircles = [
  {
    name: "Men of God",
    description:
      "A brotherhood for Christian men pursuing spiritual maturity, accountability, and biblical manhood in the modern world.",
    members: "28.4K",
    posts: "12.1K",
    gradient: "linear-gradient(135deg, #1A1A40 0%, #2D1B69 100%)",
    accent: "#6B4FBB",
    tag: "Featured",
  },
  {
    name: "Apologetics Hub",
    description:
      "Defend the faith with evidence and reason. Deep theological discussions, book recommendations, and debate practice.",
    members: "19.7K",
    posts: "8.3K",
    gradient: "linear-gradient(135deg, #1A2A1A 0%, #1B4D1B 100%)",
    accent: "#4FBBAA",
    tag: "Trending",
  },
  {
    name: "Women of Faith",
    description:
      "A safe, grace-filled space for women to encourage one another, share testimony, and grow together in Christ.",
    members: "44.2K",
    posts: "24.8K",
    gradient: "linear-gradient(135deg, #2A1A2A 0%, #4D1B3D 100%)",
    accent: "#BB4F7A",
    tag: "Top Community",
  },
  {
    name: "Biblical Finance",
    description:
      "Apply Scripture to your financial life. Budgeting, debt freedom, investing, and generosity all through a biblical lens.",
    members: "15.9K",
    posts: "6.7K",
    gradient: "linear-gradient(135deg, #2A2A1A 0%, #4D4D1B 100%)",
    accent: "#3a7d56",
    tag: "Growing Fast",
  },
];

const categories = [
  { icon: BookOpen, name: "Theology", members: "85K+", color: "#6B4FBB" },
  { icon: Baby, name: "Parenting", members: "42K+", color: "#BB4F7A" },
  { icon: Heart, name: "Mental Health", members: "56K+", color: "#4FBBAA" },
  { icon: DollarSign, name: "Finance", members: "32K+", color: "#3a7d56" },
  { icon: Music, name: "Music & Worship", members: "71K+", color: "#E07030" },
  { icon: Users, name: "Youth", members: "48K+", color: "#4F8FBB" },
  { icon: Star, name: "Women of Faith", members: "98K+", color: "#BB4F7A" },
  { icon: Zap, name: "Men of God", members: "76K+", color: "#6B4FBB" },
  { icon: Globe, name: "International", members: "124K+", color: "#4FBBAA" },
  { icon: Briefcase, name: "Professionals", members: "28K+", color: "#3a7d56" },
  { icon: GraduationCap, name: "Students", members: "39K+", color: "#4F8FBB" },
  { icon: Headphones, name: "Prayer", members: "112K+", color: "#E07030" },
];

const nearbyCircles = [
  {
    name: "Houston Faith Community",
    location: "Houston, TX",
    members: "1.2K",
    description: "For believers in the Greater Houston area. Monthly meetups, local outreach, and online community.",
    color: "#4F8FBB",
  },
  {
    name: "Texas Men's Collective",
    location: "Dallas/Fort Worth, TX",
    members: "847",
    description: "Christian men across Texas encouraging each other toward godliness, fatherhood, and leadership.",
    color: "#6B4FBB",
  },
  {
    name: "Gulf Coast Moms in Christ",
    location: "Gulf Coast Region",
    members: "634",
    description: "Christian mothers supporting one another through the joys and challenges of raising kids in faith.",
    color: "#BB4F7A",
  },
  {
    name: "Austin Young Professionals",
    location: "Austin, TX",
    members: "512",
    description: "Christians in tech and business navigating faith and career in one of America's fastest-growing cities.",
    color: "#3a7d56",
  },
  {
    name: "San Antonio Worship Collective",
    location: "San Antonio, TX",
    members: "389",
    description: "Musicians and worshippers across denominations gathering to encourage one another and grow together.",
    color: "#E07030",
  },
  {
    name: "Southeast Texas Prayer Network",
    location: "Southeast Texas",
    members: "718",
    description: "An interdenominational prayer network connecting believers across Southeast Texas for regional revival.",
    color: "#4FBBAA",
  },
];

const activeCircles = [
  { name: "Prayer Warriors", activity: "38 praying right now", color: "#E07030", members: "112K" },
  { name: "Sunday Sermon Discussion", activity: "247 discussing", color: "#3a7d56", members: "23K" },
  { name: "Mental Health & Faith", activity: "91 sharing right now", color: "#4FBBAA", members: "56K" },
  { name: "Daily Verse Chat", activity: "182 in conversation", color: "#6B4FBB", members: "78K" },
  { name: "Worship & Praise", activity: "64 worshipping together", color: "#BB4F7A", members: "71K" },
  { name: "Apologetics & Defense", activity: "53 in debate", color: "#4F8FBB", members: "19K" },
  { name: "Missions & Outreach", activity: "29 sharing field reports", color: "#EF4444", members: "34K" },
  { name: "Biblical Finance Circle", activity: "112 discussing money & Scripture", color: "#c9a227", members: "15K" },
];

export default function CommunityPage() {
  const [joinedFeatured, setJoinedFeatured] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_comm_featured"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [joinedActive, setJoinedActive] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_comm_active"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [joinedNearby, setJoinedNearby] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_comm_nearby"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteSent, setInviteSent] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllFeatured, setShowAllFeatured] = useState(false);

  useEffect(() => {
    try { localStorage.setItem("vine_comm_featured", JSON.stringify([...joinedFeatured])); } catch {}
  }, [joinedFeatured]);
  useEffect(() => {
    try { localStorage.setItem("vine_comm_active", JSON.stringify([...joinedActive])); } catch {}
  }, [joinedActive]);
  useEffect(() => {
    try { localStorage.setItem("vine_comm_nearby", JSON.stringify([...joinedNearby])); } catch {}
  }, [joinedNearby]);

  const toggleFeatured = (i: number) => setJoinedFeatured(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });
  const toggleActive = (i: number) => setJoinedActive(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });
  const toggleNearby = (i: number) => setJoinedNearby(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });
  const handleInvite = () => {
    if (!inviteEmail.trim()) return;
    setInviteSent(true);
    setInviteEmail("");
    setTimeout(() => setInviteSent(false), 3000);
  };

  const q = searchQuery.trim().toLowerCase();
  const matchedFeatured = q
    ? featuredCircles.filter(
        (c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q)
      )
    : featuredCircles;
  const matchedNearby = q
    ? nearbyCircles.filter(
        (c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.location.toLowerCase().includes(q)
      )
    : nearbyCircles;
  const matchedActive = q
    ? activeCircles.filter(
        (c) => c.name.toLowerCase().includes(q) || c.activity.toLowerCase().includes(q)
      )
    : activeCircles;
  const visibleFeatured = showAllFeatured || q ? matchedFeatured : matchedFeatured.slice(0, 4);

  return (
    <div className="min-h-screen" style={{ background: "#07070F" }}>
       <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(107,79,187,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="relative max-w-3xl mx-auto">
            <span className="tag-pill inline-block mb-4">12,847 Circles Worldwide</span>
            <h1 className="text-5xl font-black mb-4 leading-tight" style={{ color: "#F2F2F8" }}>
              Find Your{" "}
              <span className="gold-gradient">People</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: "#8A8AA8" }}>
              Join interest-based circles where Christians gather around shared passions — theology, parenting, finance,
              worship, mental health, and more. Your tribe is already here.
            </p>

            {/* Search */}
            <div className="flex gap-3 max-w-xl mx-auto">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <Search size={16} style={{ color: "#6A6A88" }} />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && setSearchQuery(searchInput)}
                  placeholder="Search circles, topics, or locations..."
                  className="flex-1 bg-transparent text-sm outline-none"
                  style={{ color: "#F2F2F8" }}
                />
              </div>
              <button onClick={() => setSearchQuery(searchInput)} className="btn-gold px-6 py-3 rounded-xl text-sm font-bold">
                Search
              </button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Featured Circles */}
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black" style={{ color: "#F2F2F8" }}>
                {searchQuery.trim() ? `Results for "${searchQuery}"` : "Featured Circles"}
              </h2>
              <button
                onClick={() => (searchQuery.trim() ? (setSearchQuery(""), setSearchInput("")) : setShowAllFeatured((v) => !v))}
                className="text-sm font-semibold"
                style={{ color: "#3a7d56" }}
              >
                {searchQuery.trim() ? "Clear ✕" : showAllFeatured ? "Show less" : "View all →"}
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {visibleFeatured.length === 0 && (
                <p className="text-sm col-span-full" style={{ color: "#6A6A88" }}>No circles match your search.</p>
              )}
              {visibleFeatured.map((circle) => {
                const i = featuredCircles.indexOf(circle);
                return (
                <div
                  key={circle.name}
                  className="rounded-2xl overflow-hidden card-glow cursor-pointer"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  {/* Cover */}
                  <div
                    className="h-24 relative flex items-end p-3"
                    style={{ background: circle.gradient }}
                  >
                    <span
                      className="text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                      style={{
                        background: `${circle.accent}25`,
                        color: circle.accent,
                        border: `1px solid ${circle.accent}50`,
                      }}
                    >
                      {circle.tag}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-base font-black mb-1" style={{ color: "#F2F2F8" }}>
                      {circle.name}
                    </h3>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: "#8A8AA8" }}>
                      {circle.description}
                    </p>
                    <div className="flex items-center gap-3 mb-3 text-[11px]" style={{ color: "#6A6A88" }}>
                      <div className="flex items-center gap-1">
                        <Users size={11} style={{ color: circle.accent }} />
                        <span>{circle.members} members</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare size={11} style={{ color: circle.accent }} />
                        <span>{circle.posts} posts</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleFeatured(i)}
                      className="w-full py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5"
                      style={{
                        background: joinedFeatured.has(i) ? circle.accent : `${circle.accent}18`,
                        color: joinedFeatured.has(i) ? "#07070F" : circle.accent,
                        border: `1px solid ${circle.accent}40`,
                      }}
                    >
                      {joinedFeatured.has(i) ? "✓ Joined!" : "Join Circle"}
                    </button>
                  </div>
                </div>
                );
              })}
            </div>
          </section>

          {/* Browse by Category */}
          <section className="mb-14">
            <h2 className="text-xl font-black mb-6" style={{ color: "#F2F2F8" }}>
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="rounded-2xl p-4 flex flex-col items-center text-center cursor-pointer transition-all duration-200 hover:bg-[#18182A] card-glow"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-2"
                    style={{ background: `${cat.color}18` }}
                  >
                    <cat.icon size={18} style={{ color: cat.color }} />
                  </div>
                  <p className="text-xs font-bold mb-0.5" style={{ color: "#F2F2F8" }}>
                    {cat.name}
                  </p>
                  <p className="text-[10px]" style={{ color: "#6A6A88" }}>
                    {cat.members} members
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Near You */}
          <section className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={18} style={{ color: "#3a7d56" }} />
              <h2 className="text-xl font-black" style={{ color: "#F2F2F8" }}>
                Near You
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.2)" }}>
                Houston, TX
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {matchedNearby.length === 0 && q && (
                <p className="text-sm col-span-full" style={{ color: "#6A6A88" }}>No nearby circles match your search.</p>
              )}
              {matchedNearby.map((circle, i) => (
                <div
                  key={circle.name}
                  className="rounded-2xl p-5 card-glow cursor-pointer"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-sm font-black mb-0.5" style={{ color: "#F2F2F8" }}>
                        {circle.name}
                      </h3>
                      <div className="flex items-center gap-1 text-[11px]" style={{ color: "#6A6A88" }}>
                        <MapPin size={10} />
                        {circle.location}
                      </div>
                    </div>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                      style={{
                        background: `${circle.color}18`,
                        color: circle.color,
                        border: `1px solid ${circle.color}30`,
                      }}
                    >
                      <Users size={9} />
                      {circle.members}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "#8A8AA8" }}>
                    {circle.description}
                  </p>
                  <button
                    onClick={() => toggleNearby(i)}
                    className="text-xs px-4 py-1.5 rounded-xl font-semibold transition-all"
                    style={{
                      background: joinedNearby.has(i) ? "#3a7d56" : "transparent",
                      color: joinedNearby.has(i) ? "#07070F" : "#3a7d56",
                      border: "1px solid rgba(58,125,86,0.35)",
                    }}
                  >
                    {joinedNearby.has(i) ? "✓ Joined!" : "Join Circle"}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Active Right Now */}
          <section className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#4FBBAA" }} />
              <h2 className="text-xl font-black" style={{ color: "#F2F2F8" }}>
                Active Right Now
              </h2>
            </div>
            <div className="space-y-3">
              {matchedActive.length === 0 && q && (
                <p className="text-sm" style={{ color: "#6A6A88" }}>No active circles match your search.</p>
              )}
              {matchedActive.map((circle, i) => (
                <div
                  key={circle.name}
                  className="rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all duration-200 hover:bg-[#18182A]"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${circle.color}18` }}
                  >
                    <MessageSquare size={18} style={{ color: circle.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold mb-0.5" style={{ color: "#F2F2F8" }}>
                      {circle.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4FBBAA" }} />
                      <span className="text-xs" style={{ color: "#4FBBAA" }}>
                        {circle.activity}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs font-semibold" style={{ color: "#8A8AA8" }}>
                      {circle.members}
                    </p>
                    <p className="text-[10px]" style={{ color: "#6A6A88" }}>
                      members
                    </p>
                  </div>
                  <button
                    onClick={() => toggleActive(i)}
                    className="text-xs px-3 py-1.5 rounded-xl font-semibold flex-shrink-0 transition-all"
                    style={{
                      background: joinedActive.has(i) ? "#3a7d56" : "transparent",
                      color: joinedActive.has(i) ? "#07070F" : "#3a7d56",
                      border: "1px solid rgba(58,125,86,0.35)",
                    }}
                  >
                    {joinedActive.has(i) ? "✓ Joined" : "Join"}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Invite a Friend */}
          <section className="mb-14">
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(107,79,187,0.12) 0%, rgba(58,125,86,0.06) 100%)",
                border: "1px solid rgba(58,125,86,0.15)",
              }}
            >
              <h2 className="text-2xl font-black mb-2" style={{ color: "#F2F2F8" }}>
                Invite a Friend
              </h2>
              <p className="text-sm mb-6" style={{ color: "#8A8AA8" }}>
                Know someone who would love Vine? Invite them to join the community.
              </p>
              {inviteSent ? (
                <div className="flex items-center justify-center gap-2 max-w-sm mx-auto py-3 px-5 rounded-xl" style={{ background: "rgba(58,125,86,0.1)", border: "1px solid rgba(58,125,86,0.25)" }}>
                  <span style={{ color: "#3a7d56", fontWeight: 700 }}>✓ Invite sent!</span>
                  <span style={{ color: "#8A8AA8", fontSize: "13px" }}>They'll love it here.</span>
                </div>
              ) : (
                <div className="flex gap-3 max-w-sm mx-auto">
                  <input
                    type="email"
                    placeholder="friend@email.com"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleInvite()}
                    className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                  />
                  <button onClick={handleInvite} className="btn-gold px-5 py-3 rounded-xl text-sm font-bold flex items-center gap-2">
                    <Send size={14} />
                    Send
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Global Stats */}
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Globe, value: "12,847", label: "Circles worldwide", color: "#3a7d56" },
                { icon: MapPin, value: "184", label: "Countries represented", color: "#6B4FBB" },
                { icon: TrendingUp, value: "3.2M", label: "Conversations", color: "#4FBBAA" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-6 flex items-center gap-4"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${stat.color}15` }}
                  >
                    <stat.icon size={22} style={{ color: stat.color }} />
                  </div>
                  <div>
                    <p className="text-2xl font-black" style={{ color: "#F2F2F8" }}>
                      {stat.value}
                    </p>
                    <p className="text-sm" style={{ color: "#8A8AA8" }}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
