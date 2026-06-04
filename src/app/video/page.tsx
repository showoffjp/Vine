"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Play,
  Eye,
  Heart,
  Bookmark,
  Share2,
  Clock,
  TrendingUp,
  Star,
  Search,
  Volume2,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Video {
  id: number;
  youtubeId: string;
  title: string;
  channel: string;
  channelColor: string;
  views: string;
  duration: string;
  age: string;
  tag: string;
  tagColor: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  "All", "Sermons", "Worship", "Testimony", "Teaching", "Documentary", "Kids", "Apologetics",
];

const featured = {
  youtubeId: "nQWFzMvCfLE",
  title: "What A Beautiful Name — Hillsong Worship (Official Music Video)",
  channel: "Hillsong Worship",
  channelAvatar: "HW",
  channelColor: "#3a7d56",
  views: "248M",
  duration: "5:41",
  uploadedAgo: "2019",
  tags: ["Worship", "Praise", "Gospel"],
  description:
    "The official music video for 'What A Beautiful Name' by Hillsong Worship from the album 'Let There Be Light'. One of the most-watched Christian music videos ever recorded.",
};

const videos: Video[] = [
  {
    id: 1,
    youtubeId: "XtwIT8JjddM",
    title: "10,000 Reasons (Bless the Lord) — Matt Redman",
    channel: "Matt Redman",
    channelColor: "#6B4FBB",
    views: "89M",
    duration: "5:59",
    age: "2013",
    tag: "Worship",
    tagColor: "#6B4FBB",
  },
  {
    id: 2,
    youtubeId: "dy9nwe9zeU8",
    title: "Oceans (Where Feet May Fail) — Hillsong UNITED",
    channel: "Hillsong UNITED",
    channelColor: "#3a7d56",
    views: "106M",
    duration: "8:56",
    age: "2013",
    tag: "Worship",
    tagColor: "#3a7d56",
  },
  {
    id: 3,
    youtubeId: "Sc6SSHuZvQE",
    title: "Reckless Love — Cory Asbury (Official Lyric Video)",
    channel: "Cory Asbury",
    channelColor: "#10B981",
    views: "45M",
    duration: "5:53",
    age: "2017",
    tag: "Worship",
    tagColor: "#10B981",
  },
  {
    id: 4,
    youtubeId: "ej_6dVdJSIU",
    title: "Romans — The Bible Project (Book Overview)",
    channel: "BibleProject",
    channelColor: "#3B82F6",
    views: "7.2M",
    duration: "9:22",
    age: "2016",
    tag: "Teaching",
    tagColor: "#3B82F6",
  },
  {
    id: 5,
    youtubeId: "BzAdLyFJ_O0",
    title: "The Story of the Bible — BibleProject Overview",
    channel: "BibleProject",
    channelColor: "#3B82F6",
    views: "5.4M",
    duration: "5:27",
    age: "2014",
    tag: "Teaching",
    tagColor: "#3B82F6",
  },
  {
    id: 6,
    youtubeId: "kWPMELQMDk8",
    title: "Graves into Gardens — Elevation Worship (Live)",
    channel: "Elevation Worship",
    channelColor: "#EC4899",
    views: "38M",
    duration: "5:06",
    age: "2020",
    tag: "Worship",
    tagColor: "#EC4899",
  },
  {
    id: 7,
    youtubeId: "EisnaNdlYCs",
    title: "Waymaker — Sinach (Official Live Video)",
    channel: "Sinach",
    channelColor: "#F59E0B",
    views: "71M",
    duration: "9:19",
    age: "2016",
    tag: "Worship",
    tagColor: "#F59E0B",
  },
  {
    id: 8,
    youtubeId: "6tHO5E0pVqo",
    title: "Goodness of God — Bethel Music (Live)",
    channel: "Bethel Music",
    channelColor: "#8B5CF6",
    views: "28M",
    duration: "5:32",
    age: "2019",
    tag: "Worship",
    tagColor: "#8B5CF6",
  },
  {
    id: 9,
    youtubeId: "sZlL2-KMXUM",
    title: "How He Loves — David Crowder Band",
    channel: "David Crowder",
    channelColor: "#EF4444",
    views: "22M",
    duration: "5:49",
    age: "2009",
    tag: "Worship",
    tagColor: "#EF4444",
  },
  {
    id: 10,
    youtubeId: "T8XDBGl9mZo",
    title: "Holy Spirit — Francesca Battistelli (Official Video)",
    channel: "Francesca Battistelli",
    channelColor: "#14B8A6",
    views: "15M",
    duration: "3:32",
    age: "2014",
    tag: "Worship",
    tagColor: "#14B8A6",
  },
  {
    id: 11,
    youtubeId: "3rSDZuGNBM8",
    title: "Amazing Grace (My Chains Are Gone) — Chris Tomlin",
    channel: "Chris Tomlin",
    channelColor: "#3a7d56",
    views: "32M",
    duration: "3:57",
    age: "2006",
    tag: "Worship",
    tagColor: "#3a7d56",
  },
  {
    id: 12,
    youtubeId: "Ck9UMPqM4lQ",
    title: "What Is the Gospel? — The Gospel Coalition",
    channel: "The Gospel Coalition",
    channelColor: "#6B4FBB",
    views: "1.8M",
    duration: "3:14",
    age: "2015",
    tag: "Teaching",
    tagColor: "#6B4FBB",
  },
  {
    id: 13,
    youtubeId: "UJlLkZ6tCG0",
    title: "Who Is Jesus? — Francis Chan",
    channel: "Francis Chan",
    channelColor: "#EC4899",
    views: "3.2M",
    duration: "7:48",
    age: "2018",
    tag: "Apologetics",
    tagColor: "#EC4899",
  },
  {
    id: 14,
    youtubeId: "oNpPUGKa0y4",
    title: "The Cross — Full Easter Message — Elevation Church",
    channel: "Elevation Church",
    channelColor: "#3a7d56",
    views: "4.7M",
    duration: "48:32",
    age: "2022",
    tag: "Sermons",
    tagColor: "#3a7d56",
  },
  {
    id: 15,
    youtubeId: "akN8j0IqLl0",
    title: "The Mission of God — John Piper (Sermon)",
    channel: "Desiring God",
    channelColor: "#F97316",
    views: "2.1M",
    duration: "54:12",
    age: "2019",
    tag: "Sermons",
    tagColor: "#F97316",
  },
  {
    id: 16,
    youtubeId: "8Mxn3KlX_Fk",
    title: "I Am Not Ashamed of the Gospel — Tim Keller",
    channel: "Gospel in Life",
    channelColor: "#0EA5E9",
    views: "1.4M",
    duration: "37:22",
    age: "2020",
    tag: "Sermons",
    tagColor: "#0EA5E9",
  },
];

const channels = [
  { name: "Elevation Worship", avatar: "EW", color: "#3a7d56", subscribers: "4.2M", videos: 847, youtubeChannel: "UCT0qXJEnJpTqzFDNLNTlaBw" },
  { name: "BibleProject", avatar: "BP", color: "#6B4FBB", subscribers: "2.8M", videos: 312, youtubeChannel: "UCVfwlh9XpX2Y_tgPzbcxPkA" },
  { name: "Bethel Music", avatar: "BM", color: "#10B981", subscribers: "1.9M", videos: 521, youtubeChannel: "UCFdbbHpkpPTsEFgUgfhIiQw" },
  { name: "Desiring God", avatar: "DG", color: "#F97316", subscribers: "1.5M", videos: 4200, youtubeChannel: "UCEfzJdq9NKJ2IcEtqFsYzuA" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VideoPage() {
  const [activeCategory, setActiveCategory] = usePersistedState("vine_video_active_category", "All");
  const [search, setSearch] = useState("");
  const [likedVideos, setLikedVideos] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_video_liked"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [savedVideos, setSavedVideos] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_video_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [followedChannels, setFollowedChannels] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_video_followed"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [featuredPlaying, setFeaturedPlaying] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const [radioPlaying, setRadioPlaying] = useState(false);
  const [copiedVideo, setCopiedVideo] = useState<number | null>(null);

  const shareVideo = async (id: number, title: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = `Watch "${title}" on The Vine`;
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
      } else {
        await navigator.clipboard.writeText(`${text} — ${url}`);
      }
      setCopiedVideo(id);
      setTimeout(() => setCopiedVideo((c) => (c === id ? null : c)), 1800);
    } catch {}
  };

  useEffect(() => {
    try { localStorage.setItem("vine_video_liked", JSON.stringify([...likedVideos])); } catch {}
  }, [likedVideos]);
  useEffect(() => {
    try { localStorage.setItem("vine_video_saved", JSON.stringify([...savedVideos])); } catch {}
  }, [savedVideos]);
  useEffect(() => {
    try { localStorage.setItem("vine_video_followed", JSON.stringify([...followedChannels])); } catch {}
  }, [followedChannels]);

  const filteredVideos = videos.filter((v) => {
    const matchCat = activeCategory === "All" || v.tag === activeCategory;
    const matchSearch = !search || v.title.toLowerCase().includes(search.toLowerCase()) || v.channel.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggleFollow = (name: string) => setFollowedChannels(prev => {
    const next = new Set(prev); next.has(name) ? next.delete(name) : next.add(name); return next;
  });
  const toggleLike = (id: number) => setLikedVideos(prev => {
    const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next;
  });
  const toggleSave = (id: number) => setSavedVideos(prev => {
    const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next;
  });

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <main id="main-content">
      <div className="page-body pb-20">

        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #3a7d56 0%, #6B4FBB 100%)" }}
                >
                  <Play size={16} className="text-black" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>
                  Video Library
                </span>
              </div>
              <h1 className="text-4xl font-black">
                Watch.{" "}
                <span style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
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
                aria-label="Search videos"
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

          {/* ── Featured Video ─────────────────────────────────────────────── */}
          <div
            className="rounded-2xl overflow-hidden mb-10 flex flex-col lg:flex-row"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(58,125,86,0.12)" }}
          >
            {/* Player / Thumbnail */}
            <div className="lg:w-3/5 relative" style={{ aspectRatio: "16/9", minHeight: 240 }}>
              {featuredPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${featured.youtubeId}?autoplay=1&rel=0`}
                  title={featured.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                />
              ) : (
                <div
                  className="absolute inset-0 cursor-pointer group"
                  role="button"
                  tabIndex={0}
                  aria-label={`Play ${featured.title}`}
                  onClick={() => setFeaturedPlaying(true)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setFeaturedPlaying(true); }}
                >
                  {/* YouTube thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${featured.youtubeId}/maxresdefault.jpg`}
                    alt={featured.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${featured.youtubeId}/hqdefault.jpg`;
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.25)" }}>
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ background: "rgba(58,125,86,0.92)", boxShadow: "0 0 40px rgba(58,125,86,0.5)" }}
                    >
                      <Play size={34} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div
                    className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-xs font-bold"
                    style={{ background: "rgba(0,0,0,0.85)", color: "#F2F2F8" }}
                  >
                    {featured.duration}
                  </div>
                  <div
                    className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold"
                    style={{ background: "rgba(58,125,86,0.9)", color: "#fff" }}
                  >
                    ⭐ Featured
                  </div>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-7 lg:w-2/5 flex flex-col justify-center">
              <div className="flex gap-2 mb-3 flex-wrap">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-black mb-3 leading-tight" style={{ color: "#F2F2F8" }}>
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
                <button type="button"
                  onClick={() => setFeaturedPlaying((p) => !p)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white"
                  style={{ background: "linear-gradient(135deg, #3a7d56, #52a876)" }}
                >
                  <Play size={14} fill="white" /> {featuredPlaying ? "Now Playing" : "Watch Now"}
                </button>
                <a
                  href={`https://www.youtube.com/watch?v=${featured.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#8A8AA8",
                  }}
                >
                  <Eye size={14} /> YouTube
                </a>
              </div>
            </div>
          </div>

          {/* ── Category Filter ─────────────────────────────────────────────── */}
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((cat) => (
              <button type="button"
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: activeCategory === cat ? "#3a7d56" : "rgba(255,255,255,0.04)",
                  color: activeCategory === cat ? "#fff" : "#6A6A88",
                  border: `1px solid ${activeCategory === cat ? "#3a7d56" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ── Video Grid ──────────────────────────────────────────────────── */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp size={16} style={{ color: "#3a7d56" }} />
                <h2 className="text-lg font-black" style={{ color: "#F2F2F8" }}>
                  {filteredVideos.length === videos.length ? "Trending Videos" : `${filteredVideos.length} Videos Found`}
                </h2>
              </div>

              {filteredVideos.length === 0 && (
                <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-3xl mb-3">🎬</p>
                  <p className="font-bold mb-1" style={{ color: "#F2F2F8" }}>No videos found</p>
                  <button type="button" onClick={() => { setActiveCategory("All"); setSearch(""); }} className="text-sm mt-2" style={{ color: "#3a7d56" }}>Clear filters</button>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredVideos.map((v) => (
                  <div
                    key={v.id}
                    className="group rounded-xl overflow-hidden cursor-pointer transition-all"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(58,125,86,0.2)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
                  >
                    {/* Thumbnail / Embed */}
                    <div className="relative" style={{ aspectRatio: "16/9" }}>
                      {playingVideoId === v.id ? (
                        <div className="absolute inset-0">
                          <iframe
                            src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
                            title={v.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ width: "100%", height: "100%", border: "none" }}
                          />
                          <button
                            type="button"
                            aria-label="Close player"
                            onClick={(e) => { e.stopPropagation(); setPlayingVideoId(null); }}
                            className="absolute top-2 right-2 rounded-full p-1"
                            style={{ background: "rgba(0,0,0,0.7)", color: "#F2F2F8", zIndex: 10 }}
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <div
                          className="absolute inset-0 cursor-pointer"
                          role="button"
                          tabIndex={0}
                          aria-label={`Play ${v.title}`}
                          onClick={() => setPlayingVideoId(v.id)}
                          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setPlayingVideoId(v.id); }}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                            alt={v.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ background: "rgba(0,0,0,0.3)" }}>
                            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(58,125,86,0.9)" }}>
                              <Play size={18} className="text-white ml-0.5" fill="white" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-xs font-bold" style={{ background: "rgba(0,0,0,0.8)", color: "#F2F2F8" }}>
                            {v.duration}
                          </div>
                          <span className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full"
                            style={{ background: `${v.tagColor}20`, color: v.tagColor, border: `1px solid ${v.tagColor}40` }}>
                            {v.tag}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-3">
                      <h3 className="font-semibold text-sm mb-1.5 leading-snug group-hover:text-[#3a7d56] transition-colors" style={{ color: "#F2F2F8" }}>
                        {v.title}
                      </h3>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold" style={{ color: v.channelColor }}>{v.channel}</span>
                        <span className="text-xs" style={{ color: "#4A4A68" }}>{v.views} · {v.age}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button type="button"
                          aria-label={likedVideos.has(v.id) ? "Unlike" : "Like"}
                          onClick={(e) => { e.stopPropagation(); toggleLike(v.id); }}
                          className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-all"
                          style={{
                            background: likedVideos.has(v.id) ? "rgba(236,72,153,0.12)" : "transparent",
                            border: `1px solid ${likedVideos.has(v.id) ? "rgba(236,72,153,0.3)" : "rgba(255,255,255,0.06)"}`,
                            color: likedVideos.has(v.id) ? "#EC4899" : "#6A6A88",
                          }}
                        >
                          <Heart size={11} fill={likedVideos.has(v.id) ? "#EC4899" : "none"} />
                        </button>
                        <button type="button"
                          aria-label={savedVideos.has(v.id) ? "Unsave" : "Save"}
                          onClick={(e) => { e.stopPropagation(); toggleSave(v.id); }}
                          className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-all"
                          style={{
                            background: savedVideos.has(v.id) ? "rgba(58,125,86,0.1)" : "transparent",
                            border: `1px solid ${savedVideos.has(v.id) ? "rgba(58,125,86,0.25)" : "rgba(255,255,255,0.06)"}`,
                            color: savedVideos.has(v.id) ? "#3a7d56" : "#6A6A88",
                          }}
                        >
                          <Bookmark size={11} fill={savedVideos.has(v.id) ? "#3a7d56" : "none"} />
                        </button>
                        <a
                          href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${v.title} on YouTube`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg ml-auto transition-all"
                          style={{ color: "#4A4A68", border: "1px solid rgba(255,255,255,0.06)" }}
                        >
                          <Eye size={11} />
                        </a>
                        <button type="button"
                          aria-label="Share video"
                          onClick={(e) => { e.stopPropagation(); shareVideo(v.id, v.title); }}
                          className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-all"
                          style={{
                            color: copiedVideo === v.id ? "#3a7d56" : "#4A4A68",
                            border: `1px solid ${copiedVideo === v.id ? "rgba(58,125,86,0.3)" : "rgba(255,255,255,0.06)"}`,
                          }}
                        >
                          <Share2 size={11} /> {copiedVideo === v.id && "Copied!"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Sidebar ─────────────────────────────────────────────────────── */}
            <div className="space-y-6">
              {/* Top Channels */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star size={15} style={{ color: "#3a7d56" }} />
                  <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>
                    Top Channels
                  </h3>
                </div>
                <div className="space-y-3">
                  {channels.map((ch) => (
                    <div key={ch.name} className="flex items-center gap-3 group">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black shrink-0"
                        style={{ background: `${ch.color}20`, color: ch.color, border: `1px solid ${ch.color}30` }}
                      >
                        {ch.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <a
                          href={`https://www.youtube.com/channel/${ch.youtubeChannel}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold group-hover:text-[#3a7d56] transition-colors truncate block"
                          style={{ color: "#E0E0F0" }}
                        >
                          {ch.name}
                        </a>
                        <p className="text-xs" style={{ color: "#4A4A68" }}>
                          {ch.subscribers} subscribers · {ch.videos} videos
                        </p>
                      </div>
                      <button type="button"
                        onClick={() => toggleFollow(ch.name)}
                        className="text-xs px-2.5 py-1 rounded-full font-semibold shrink-0 transition-all"
                        style={{
                          background: followedChannels.has(ch.name) ? "rgba(58,125,86,0.2)" : "rgba(58,125,86,0.1)",
                          color: "#3a7d56",
                          border: `1px solid ${followedChannels.has(ch.name) ? "rgba(58,125,86,0.4)" : "rgba(58,125,86,0.2)"}`,
                        }}
                      >
                        {followedChannels.has(ch.name) ? "✓ Following" : "Follow"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Worship Radio */}
              <div
                className="rounded-2xl p-5"
                style={{
                  background: "linear-gradient(135deg, rgba(107,79,187,0.1) 0%, rgba(58,125,86,0.06) 100%)",
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
                  {[
                    "What A Beautiful Name — Hillsong",
                    "Goodness of God — Bethel Music",
                    "Oceans — Hillsong UNITED",
                  ].map((song, idx) => (
                    <div key={song} className="flex items-center gap-2">
                      <div
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${idx === 0 && radioPlaying ? "animate-pulse" : ""}`}
                        style={{ background: idx === 0 && radioPlaying ? "#3a7d56" : "#4A4A68" }}
                      />
                      <span className="text-xs" style={{ color: idx === 0 && radioPlaying ? "#F2F2F8" : "#4A4A68" }}>{song}</span>
                    </div>
                  ))}
                </div>
                <button type="button"
                  onClick={() => setRadioPlaying((p) => !p)}
                  className="w-full py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                  style={{ background: "rgba(107,79,187,0.25)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.3)" }}
                >
                  {radioPlaying ? <Volume2 size={14} /> : <Play size={14} />} {radioPlaying ? "Playing Worship Radio" : "Open Worship Radio"}
                </button>
              </div>

              {/* Library Stats */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3 className="text-sm font-bold mb-4 uppercase tracking-widest" style={{ color: "#3a7d56" }}>
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
      </main>
      <Footer />
    </div>
  );
}
