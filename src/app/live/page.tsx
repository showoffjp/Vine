"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Radio, Users, Heart, MessageSquare, Bell, BellOff, Play, Eye } from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";

const liveStreams = [
  {
    id: 1,
    title: "Sunday Morning Worship — Cornerstone Church",
    host: "Pastor David Osei",
    flag: "🇬🇭",
    viewers: 4821,
    thumbnail: "🎵",
    color: "#3a7d56",
    category: "Worship",
    description: "Live worship service with Cornerstone Church of Accra. All are welcome.",
    tags: ["worship", "Sunday", "praise"],
  },
  {
    id: 2,
    title: "Prayer & Intercession — Global Prayer Network",
    host: "Min. Rachel Nguyen",
    flag: "🇺🇸",
    viewers: 2340,
    thumbnail: "🙏",
    color: "#6B4FBB",
    category: "Prayer",
    description: "Two-hour prayer session for the unreached nations of the 10/40 Window.",
    tags: ["prayer", "intercession", "missions"],
  },
  {
    id: 3,
    title: "Verse by Verse — Romans 8",
    host: "Rev. Thomas Müller",
    flag: "🇩🇪",
    viewers: 1893,
    thumbnail: "📖",
    color: "#3B82F6",
    category: "Bible Study",
    description: "Deep dive through Romans 8 with historical context, Greek word studies, and application.",
    tags: ["bible study", "Romans", "theology"],
  },
  {
    id: 4,
    title: "Youth Night LIVE — Elevation Youth",
    host: "Pastor Caleb Torres",
    flag: "🇲🇽",
    viewers: 3107,
    thumbnail: "⚡",
    color: "#F59E0B",
    category: "Youth",
    description: "High-energy worship night for teens and young adults worldwide.",
    tags: ["youth", "worship", "Gen Z"],
  },
  {
    id: 5,
    title: "Mental Health & Faith Q&A",
    host: "Dr. Priya Singh",
    flag: "🇮🇳",
    viewers: 1042,
    thumbnail: "💙",
    color: "#EC4899",
    category: "Mental Health",
    description: "Live Q&A session on navigating anxiety, depression, and trauma through faith.",
    tags: ["mental health", "counseling", "faith"],
  },
  {
    id: 6,
    title: "Missions Debrief — East Asia Update",
    host: "Ji-Woo Park",
    flag: "🇰🇷",
    viewers: 876,
    thumbnail: "🌏",
    color: "#EF4444",
    category: "Missions",
    description: "Live update from missionaries working in closed countries across East Asia.",
    tags: ["missions", "East Asia", "church planting"],
  },
  {
    id: 7,
    title: "Healing Prayer & Deliverance Service",
    host: "Pastor Grace Mwangi",
    flag: "🇹🇿",
    viewers: 1654,
    thumbnail: "✨",
    color: "#10B981",
    category: "Prayer",
    description: "An anointed healing service streaming live from Dar es Salaam. Testimonies and prayer for the sick.",
    tags: ["healing", "prayer", "deliverance"],
  },
  {
    id: 8,
    title: "Marriage & Family Conference LIVE",
    host: "Dr. Sipho & Dr. Nomsa Dlamini",
    flag: "🇿🇦",
    viewers: 2108,
    thumbnail: "👨‍👩‍👧",
    color: "#EC4899",
    category: "Relationships",
    description: "Two-day conference on biblical marriage and family streaming from Johannesburg. Day 2 begins now.",
    tags: ["marriage", "family", "conference"],
  },
  {
    id: 9,
    title: "Louvor ao Vivo — Noite de Adoração",
    host: "Pr. Rafael Costa",
    flag: "🇧🇷",
    viewers: 3489,
    thumbnail: "🎶",
    color: "#F59E0B",
    category: "Worship",
    description: "Live praise night from São Paulo — Portuguese worship with English subtitles. All nations welcome.",
    tags: ["worship", "praise", "Brazil"],
  },
  {
    id: 10,
    title: "Street Evangelism Training",
    host: "Evangelist Paul Okafor",
    flag: "🇬🇧",
    viewers: 734,
    thumbnail: "📢",
    color: "#EF4444",
    category: "Evangelism",
    description: "Practical training on how to share your faith in everyday conversations — from London.",
    tags: ["evangelism", "outreach", "training"],
  },
  {
    id: 11,
    title: "Theology Unpacked — The Trinity",
    host: "Prof. Ananya Krishnamurthy",
    flag: "🇮🇳",
    viewers: 1287,
    thumbnail: "🔷",
    color: "#6B4FBB",
    category: "Theology",
    description: "A careful, accessible explanation of Trinitarian doctrine — its biblical roots and why it matters for daily life.",
    tags: ["theology", "Trinity", "doctrine"],
  },
  {
    id: 12,
    title: "Youth Prayer Hour — Generation Rise",
    host: "Min. Blessing Adeyemi",
    flag: "🇳🇬",
    viewers: 2671,
    thumbnail: "🔥",
    color: "#F97316",
    category: "Youth",
    description: "Young Nigerians crying out for revival. This prayer meeting has been going for 4 hours and counting.",
    tags: ["youth", "prayer", "revival", "Nigeria"],
  },
];

const upcoming = [
  {
    id: 13,
    title: "The Gospel of John — Chapter by Chapter",
    host: "Tim Challies",
    flag: "🇨🇦",
    time: "Today, 7:00 PM EST",
    color: "#3a7d56",
    category: "Bible Study",
  },
  {
    id: 14,
    title: "Marriage & Faith — Marriage Conference Preview",
    host: "Dr. Marcus Webb & Dr. Lisa Webb",
    flag: "🇺🇸",
    time: "Tomorrow, 11:00 AM EST",
    color: "#EC4899",
    category: "Relationships",
  },
  {
    id: 15,
    title: "24-Hour Prayer Wall LIVE — Pentecost Sunday",
    host: "Global Vine Prayer Team",
    flag: "🌍",
    time: "Sun, Jun 7 — All Day",
    color: "#6B4FBB",
    category: "Prayer",
  },
  {
    id: 16,
    title: "Apologetics Live — Defending the Resurrection",
    host: "Prof. William Lane Craig",
    flag: "🇺🇸",
    time: "Mon, Jun 9 — 8:00 PM EST",
    color: "#3B82F6",
    category: "Apologetics",
  },
  {
    id: 17,
    title: "Worship From the Mountains — South Africa",
    host: "Hillside Worship Collective",
    flag: "🇿🇦",
    time: "Tue, Jun 10 — 6:00 PM SAST",
    color: "#F59E0B",
    category: "Worship",
  },
  {
    id: 18,
    title: "Church Planting Masterclass",
    host: "Dr. Ed Stetzer",
    flag: "🇺🇸",
    time: "Wed, Jun 11 — 7:00 PM EST",
    color: "#EF4444",
    category: "Missions",
  },
];

const categories = ["All", "Worship", "Prayer", "Bible Study", "Youth", "Mental Health", "Missions", "Evangelism", "Theology", "Relationships"];

export default function LivePage() {
  const [activeCategory, setActiveCategory] = usePersistedState("vine_live_active_category", "All");
  const [joinedStreams, setJoinedStreams] = useState<Set<number>>(() => {
    try {
      const s = localStorage.getItem("vine_live_joined");
      return s ? new Set(JSON.parse(s) as number[]) : new Set([1]);
    } catch { return new Set([1]); }
  });
  const [remindedStreams, setRemindedStreams] = useState<Set<number>>(() => {
    try {
      const s = localStorage.getItem("vine_live_reminded");
      return s ? new Set(JSON.parse(s) as number[]) : new Set();
    } catch { return new Set(); }
  });
  const [chatMessages, setChatMessages] = useState<{ user: string; msg: string; color: string }[]>([
    { user: "Amara K.", msg: "🙏 Blessing from Ghana!", color: "#3a7d56" },
    { user: "Ji-Woo P.", msg: "This worship is incredible", color: "#6B4FBB" },
    { user: "Carlos M.", msg: "¡Gloria a Dios! 🔥", color: "#F59E0B" },
    { user: "Sarah T.", msg: "Praying along from London", color: "#EC4899" },
    { user: "Daniel O.", msg: "Romans 8:28 always hits 💪", color: "#3B82F6" },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [liveViewers, setLiveViewers] = useState(4821);
  const [likedFeatured, setLikedFeatured] = useState(() => {
    try { return localStorage.getItem("vine_live_featured_liked") === "1"; } catch { return false; }
  });

  useEffect(() => {
    try {
      if (likedFeatured) localStorage.setItem("vine_live_featured_liked", "1");
      else localStorage.removeItem("vine_live_featured_liked");
    } catch {}
  }, [likedFeatured]);

  useEffect(() => {
    const iv = setInterval(() => {
      setLiveViewers((v) => Math.max(v + Math.floor(Math.random() * 5) - 1, 0));
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    try { localStorage.setItem("vine_live_joined", JSON.stringify([...joinedStreams])); } catch {}
  }, [joinedStreams]);

  useEffect(() => {
    try { localStorage.setItem("vine_live_reminded", JSON.stringify([...remindedStreams])); } catch {}
  }, [remindedStreams]);

  const filteredStreams = liveStreams.filter(
    (s) => activeCategory === "All" || s.category === activeCategory
  );

  const toggleJoin = (id: number) => {
    setJoinedStreams((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleRemind = (id: number) => {
    setRemindedStreams((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const sendChat = () => {
    if (!chatInput.trim()) return;
    const colors = ["#3a7d56", "#6B4FBB", "#F59E0B", "#EC4899", "#3B82F6", "#EF4444"];
    setChatMessages((prev) => [
      ...prev.slice(-19),
      { user: "You", msg: chatInput, color: colors[Math.floor(Math.random() * colors.length)] },
    ]);
    setChatInput("");
  };

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
              <span className="text-xs font-black uppercase tracking-widest text-red-400">Live Now</span>
            </div>
            <span className="text-xs" style={{ color: "#4A4A68" }}>·</span>
            <span className="text-xs" style={{ color: "#6A6A88" }}>
              {liveViewers.toLocaleString()} viewers across all streams
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Live{" "}
            <span style={{ background: "linear-gradient(135deg, #3a7d56, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Church
            </span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#6A6A88" }}>
            Worship, pray, study, and connect with believers around the world — live, right now.
          </p>
        </div>

        {/* Featured stream + Live chat */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Featured stream card */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden" style={{ background: "#12121F", border: "1px solid rgba(58,125,86,0.2)" }}>
              <div
                className="relative flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #0A0A18 0%, #12121F 50%, #0F0F1C 100%)",
                  aspectRatio: "16/9",
                }}
              >
                <div className="text-center">
                  <div className="text-8xl mb-4">{liveStreams[0].thumbnail}</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-black text-red-400 uppercase tracking-widest">Live</span>
                  </div>
                  <p className="text-sm font-semibold" style={{ color: "#C0C0D8" }}>
                    {liveStreams[0].host} {liveStreams[0].flag}
                  </p>
                </div>
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 px-2 py-1 rounded-lg" style={{ background: "rgba(0,0,0,0.7)" }}>
                  <Eye size={12} style={{ color: "#8A8AA8" }} />
                  <span className="text-xs font-bold" style={{ color: "#F2F2F8" }}>{liveViewers.toLocaleString()}</span>
                </div>
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: "rgba(58,125,86,0.2)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.3)" }}>
                  {liveStreams[0].category}
                </div>
              </div>
              <div className="p-5">
                <h2 className="font-black text-lg mb-1" style={{ color: "#F2F2F8" }}>{liveStreams[0].title}</h2>
                <p className="text-sm mb-4" style={{ color: "#6A6A88" }}>{liveStreams[0].description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleJoin(1)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold flex-1 justify-center transition-all"
                    style={{
                      background: joinedStreams.has(1) ? "rgba(58,125,86,0.15)" : "linear-gradient(135deg, #3a7d56, #3a7d56)",
                      color: joinedStreams.has(1) ? "#3a7d56" : "#07070F",
                      border: joinedStreams.has(1) ? "1px solid rgba(58,125,86,0.4)" : "none",
                    }}
                  >
                    {joinedStreams.has(1) ? (
                      <><Eye size={14} /> Watching</>
                    ) : (
                      <><Play size={14} /> Watch Live</>
                    )}
                  </button>
                  <button
                    onClick={() => setLikedFeatured((l) => !l)}
                    className="p-2.5 rounded-xl transition-all"
                    style={{
                      background: likedFeatured ? "rgba(236,72,153,0.12)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${likedFeatured ? "rgba(236,72,153,0.4)" : "rgba(255,255,255,0.08)"}`,
                      color: likedFeatured ? "#EC4899" : "#6A6A88",
                    }}
                    title={likedFeatured ? "Liked" : "Like this stream"}
                  >
                    <Heart size={16} fill={likedFeatured ? "#EC4899" : "none"} />
                  </button>
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className="rounded-2xl flex flex-col" style={{ background: "#12121F", border: "1px solid #1E1E32", maxHeight: 420 }}>
              <div className="p-4 flex items-center gap-2" style={{ borderBottom: "1px solid #1E1E32" }}>
                <MessageSquare size={14} style={{ color: "#3a7d56" }} />
                <span className="text-sm font-bold" style={{ color: "#F2F2F8" }}>Live Chat</span>
                <span className="ml-auto text-xs" style={{ color: "#4A4A68" }}>{liveViewers.toLocaleString()} viewers</span>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-2.5 min-h-0">
                {chatMessages.map((msg, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="text-xs font-bold shrink-0" style={{ color: msg.color }}>{msg.user}:</span>
                    <span className="text-xs" style={{ color: "#A0A0C0" }}>{msg.msg}</span>
                  </div>
                ))}
              </div>
              <div className="p-3" style={{ borderTop: "1px solid #1E1E32" }}>
                <div className="flex gap-2">
                  <input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendChat()}
                    placeholder="Say something..."
                    className="flex-1 bg-transparent text-xs outline-none px-3 py-2 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />
                  <button
                    onClick={sendChat}
                    className="px-3 py-2 rounded-lg text-xs font-bold"
                    style={{ background: "rgba(58,125,86,0.15)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.25)" }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all"
                style={{
                  background: activeCategory === c ? "rgba(58,125,86,0.15)" : "rgba(255,255,255,0.03)",
                  border: activeCategory === c ? "1px solid rgba(58,125,86,0.4)" : "1px solid rgba(255,255,255,0.06)",
                  color: activeCategory === c ? "#3a7d56" : "#8A8AA8",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Live streams grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-xl font-black mb-5" style={{ color: "#F2F2F8" }}>
            All Live Streams
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredStreams.map((stream) => {
              const watching = joinedStreams.has(stream.id);
              return (
                <div key={stream.id} className="rounded-2xl overflow-hidden" style={{ background: "#12121F", border: `1px solid ${watching ? stream.color + "30" : "#1E1E32"}` }}>
                  <div
                    className="flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${stream.color}08 0%, rgba(0,0,0,0) 100%)`,
                      height: 120,
                    }}
                  >
                    <span className="text-5xl">{stream.thumbnail}</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: stream.color }}>
                        {stream.category}
                      </span>
                      <span className="ml-auto flex items-center gap-1 text-xs" style={{ color: "#4A4A68" }}>
                        <Users size={10} />
                        {stream.viewers.toLocaleString()}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm mb-1 leading-snug" style={{ color: "#F2F2F8" }}>{stream.title}</h3>
                    <p className="text-xs mb-3" style={{ color: "#6A6A88" }}>{stream.host} {stream.flag}</p>
                    <button
                      onClick={() => toggleJoin(stream.id)}
                      className="w-full py-2 rounded-xl text-xs font-bold transition-all"
                      style={{
                        background: watching ? `${stream.color}15` : "rgba(255,255,255,0.04)",
                        color: watching ? stream.color : "#8A8AA8",
                        border: `1px solid ${watching ? stream.color + "40" : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      {watching ? "✓ Watching" : "Join Stream"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredStreams.length === 0 && (
            <div className="text-center py-16">
              <p className="text-4xl mb-3">📡</p>
              <p className="font-bold" style={{ color: "#F2F2F8" }}>No {activeCategory} streams live right now</p>
              <p className="text-sm mt-1" style={{ color: "#6A6A88" }}>Check the schedule below for upcoming streams</p>
            </div>
          )}
        </div>

        {/* Upcoming */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black mb-5" style={{ color: "#F2F2F8" }}>Coming Up</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {upcoming.map((u) => {
              const reminded = remindedStreams.has(u.id);
              return (
                <div key={u.id} className="rounded-2xl p-5 flex items-center gap-4" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full mb-2 inline-block" style={{ background: `${u.color}15`, color: u.color }}>
                      {u.category}
                    </span>
                    <h3 className="font-bold text-sm leading-snug mb-1" style={{ color: "#F2F2F8" }}>{u.title}</h3>
                    <p className="text-xs" style={{ color: "#6A6A88" }}>{u.host} {u.flag}</p>
                    <p className="text-xs mt-1 font-semibold" style={{ color: u.color }}>{u.time}</p>
                  </div>
                  <button
                    onClick={() => toggleRemind(u.id)}
                    className="flex-shrink-0 p-2.5 rounded-xl transition-all"
                    style={{
                      background: reminded ? `${u.color}15` : "rgba(255,255,255,0.04)",
                      color: reminded ? u.color : "#6A6A88",
                      border: `1px solid ${reminded ? u.color + "40" : "rgba(255,255,255,0.08)"}`,
                    }}
                    title={reminded ? "Cancel reminder" : "Set reminder"}
                  >
                    {reminded ? <BellOff size={16} /> : <Bell size={16} />}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
