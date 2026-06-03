"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Headphones,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Search,
  Star,
  BookOpen,
  Heart,
  Bookmark,
  ChevronRight,
  CheckCircle2,
  Clock,
  TrendingUp,
} from "lucide-react";

const categories = ["All", "Theology", "Devotional", "Apologetics", "Parenting", "Finance", "Leadership", "Worship", "Mental Health"];

const shows = [
  {
    id: "vine-daily",
    name: "The Vine Daily",
    host: "Pastor Marcus Webb",
    episodes: 312,
    category: "Devotional",
    description: "Five minutes every weekday — one verse, one insight, one prayer. Start your morning anchored in Scripture.",
    gradient: "linear-gradient(135deg, #1a0533 0%, #4a1580 100%)",
    accentColor: "#6B4FBB",
    initials: "VD",
    subscribers: "84K",
    rating: 4.9,
    latestEp: "When God Redirects Your Plans",
    latestDuration: "48:10",
  },
  {
    id: "faith-doubt",
    name: "Faith & Doubt Out Loud",
    host: "Dr. Rachel Osei",
    episodes: 148,
    category: "Theology",
    description: "Hard questions, honest answers. A theologian and a skeptic sit across from each other every week.",
    gradient: "linear-gradient(135deg, #0a2010 0%, #1e5c30 100%)",
    accentColor: "#10B981",
    initials: "FD",
    subscribers: "52K",
    rating: 4.8,
    latestEp: "Is It OK to Question God?",
    latestDuration: "1:02:24",
  },
  {
    id: "biblical-finance",
    name: "Biblical Finance",
    host: "James & Priya Nair",
    episodes: 95,
    category: "Finance",
    description: "Money, generosity, and the Gospel — practical biblical principles for how you spend, save, and give.",
    gradient: "linear-gradient(135deg, #1a1000 0%, #4a3200 100%)",
    accentColor: "#F59E0B",
    initials: "BF",
    subscribers: "29K",
    rating: 4.7,
    latestEp: "The Tithe Debate: What Scripture Really Says",
    latestDuration: "44:52",
  },
  {
    id: "christian-parenting",
    name: "Christian Parenting Unlocked",
    host: "Sarah & Tom Brennan",
    episodes: 211,
    category: "Parenting",
    description: "Real conversations about raising kids in faith — from toddlers to teenagers, practical and grace-filled.",
    gradient: "linear-gradient(135deg, #001533 0%, #003d80 100%)",
    accentColor: "#3B82F6",
    initials: "CP",
    subscribers: "41K",
    rating: 4.8,
    latestEp: "Raising Kids Who Love Jesus in a Secular World",
    latestDuration: "58:07",
  },
  {
    id: "apologetics-today",
    name: "Apologetics Today",
    host: "Prof. Emmanuel Adeyemi",
    episodes: 178,
    category: "Apologetics",
    description: "Defending the faith in a skeptical world — academic rigor, accessible presentation, no easy answers skipped.",
    gradient: "linear-gradient(135deg, #1a0000 0%, #4a1010 100%)",
    accentColor: "#EF4444",
    initials: "AT",
    subscribers: "38K",
    rating: 4.9,
    latestEp: "Responding to the Problem of Evil",
    latestDuration: "1:14:38",
  },
  {
    id: "worship-hour",
    name: "The Worship Hour",
    host: "Miriam Santos",
    episodes: 264,
    category: "Worship",
    description: "Theology of worship, song stories, and conversations with the worship leaders shaping the global church.",
    gradient: "linear-gradient(135deg, #0d001a 0%, #330066 100%)",
    accentColor: "#A855F7",
    initials: "WH",
    subscribers: "67K",
    rating: 4.8,
    latestEp: "Singing Through the Valley: Worship in Pain",
    latestDuration: "52:19",
  },
  {
    id: "reformed-minds",
    name: "Reformed Minds",
    host: "Dr. James Whitfield",
    episodes: 89,
    category: "Theology",
    description: "Deep, systematic theology for the serious student — the doctrines of grace, covenant, and eschatology.",
    gradient: "linear-gradient(135deg, #0a0a20 0%, #1a1a50 100%)",
    accentColor: "#6B4FBB",
    initials: "RM",
    subscribers: "21K",
    rating: 4.9,
    latestEp: "Double Predestination: Is It Biblical?",
    latestDuration: "1:28:41",
  },
  {
    id: "anxiety-faith",
    name: "Anxious No More",
    host: "Dr. Sarah Kimani",
    episodes: 134,
    category: "Mental Health",
    description: "A biblical counselor and licensed therapist navigating anxiety, depression, and faith — together.",
    gradient: "linear-gradient(135deg, #001020 0%, #003050 100%)",
    accentColor: "#4FBBAA",
    initials: "AN",
    subscribers: "78K",
    rating: 4.9,
    latestEp: "When Anxiety Feels Like a Lack of Faith",
    latestDuration: "39:54",
  },
];

const featuredEpisodes = [
  {
    show: "The Vine Daily",
    showInitials: "VD",
    showGradient: "linear-gradient(135deg, #1a0533 0%, #4a1580 100%)",
    accentColor: "#6B4FBB",
    title: "When God Redirects Your Plans",
    duration: "48:10",
    date: "May 24, 2026",
    description: "Sometimes the closed door isn't a punishment — it's protection. Marcus Webb walks through Proverbs 16:9 and what happened when his biggest plan fell through.",
    tags: ["Providence", "Trust", "Proverbs"],
    listens: "42.3K",
  },
  {
    show: "Faith & Doubt Out Loud",
    showInitials: "FD",
    showGradient: "linear-gradient(135deg, #0a2010 0%, #1e5c30 100%)",
    accentColor: "#10B981",
    title: "NT Wright on Why the Resurrection Matters More Than Ever",
    duration: "1:02:24",
    date: "May 21, 2026",
    description: "One of the greatest NT scholars alive joins Dr. Rachel Osei to talk resurrection, empire, and why Easter changes everything.",
    tags: ["Resurrection", "N.T. Wright", "Theology"],
    listens: "91.8K",
  },
  {
    show: "Anxious No More",
    showInitials: "AN",
    showGradient: "linear-gradient(135deg, #001020 0%, #003050 100%)",
    accentColor: "#4FBBAA",
    title: "When Anxiety Feels Like a Lack of Faith",
    duration: "39:54",
    date: "May 19, 2026",
    description: "The lie that anxious Christians believe: 'If I had more faith, I wouldn't feel this way.' Dr. Kimani dismantles it with Scripture and clinical wisdom.",
    tags: ["Anxiety", "Mental Health", "Philippians 4"],
    listens: "58.1K",
  },
  {
    show: "Biblical Finance",
    showInitials: "BF",
    showGradient: "linear-gradient(135deg, #1a1000 0%, #4a3200 100%)",
    accentColor: "#F59E0B",
    title: "The Tithe Debate: What Scripture Really Says",
    duration: "44:52",
    date: "May 17, 2026",
    description: "Is the tithe a New Testament command or an Old Covenant shadow? James and Priya look at every tithing passage with fresh eyes.",
    tags: ["Giving", "Tithe", "Malachi", "2 Corinthians"],
    listens: "33.7K",
  },
];

export default function PodcastPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [subscribedShows, setSubscribedShows] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_podcast_subscribed"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [savedEpisodes, setSavedEpisodes] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_podcast_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [playingEp, setPlayingEp] = useState<number | null>(null);
  const [progress, setProgress] = useState(38);
  const [globalPlaying, setGlobalPlaying] = useState(false);

  useEffect(() => {
    try { localStorage.setItem("vine_podcast_subscribed", JSON.stringify([...subscribedShows])); } catch {}
  }, [subscribedShows]);
  useEffect(() => {
    try { localStorage.setItem("vine_podcast_saved", JSON.stringify([...savedEpisodes])); } catch {}
  }, [savedEpisodes]);

  const toggleSubscribe = (id: string) => {
    setSubscribedShows((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleSave = (i: number) => {
    setSavedEpisodes((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const filteredShows = shows.filter((s) => {
    const matchCat = activeCategory === "All" || s.category === activeCategory;
    const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.host.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-32">

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Headphones size={22} style={{ color: "#3a7d56" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Podcasts & Audio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-5">
              Faith content for{" "}
              <span style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                your commute.
              </span>
            </h1>
            <p className="text-lg mb-8" style={{ color: "#6A6A88" }}>
              8 shows. 1,600+ episodes. Theology, devotionals, apologetics, parenting, finance, and more — from voices you can trust.
            </p>

            {/* Search */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl max-w-md mx-auto"
              style={{ background: "#12121F", border: `1px solid ${search ? "rgba(58,125,86,0.3)" : "#1E1E32"}` }}
            >
              <Search size={16} style={{ color: "#6A6A88" }} />
              <input
                type="text"
                placeholder="Search shows or hosts..."
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: "#F2F2F8" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-xs font-semibold px-4 py-2 rounded-full transition-all"
                style={
                  activeCategory === cat
                    ? { background: "#3a7d56", color: "#000" }
                    : { background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Show Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black" style={{ color: "#F2F2F8" }}>
              {filteredShows.length === shows.length ? "All Shows" : `${filteredShows.length} Shows`}
            </h2>
            <span className="text-sm" style={{ color: "#4A4A68" }}>{shows.length} shows · 1,600+ episodes</span>
          </div>

          {filteredShows.length === 0 ? (
            <div className="rounded-2xl p-12 text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-4xl mb-4">🎙️</p>
              <p className="font-bold text-lg mb-2" style={{ color: "#F2F2F8" }}>No shows found</p>
              <button onClick={() => { setActiveCategory("All"); setSearch(""); }} className="text-sm mt-1" style={{ color: "#3a7d56" }}>Clear filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredShows.map((show) => {
                const subscribed = subscribedShows.has(show.id);
                return (
                  <div
                    key={show.id}
                    className="rounded-2xl p-5 transition-all cursor-pointer"
                    style={{
                      background: subscribed ? `${show.accentColor}08` : "#12121F",
                      border: `1px solid ${subscribed ? show.accentColor + "30" : "#1E1E32"}`,
                    }}
                    onMouseEnter={(e) => {
                      if (!subscribed) e.currentTarget.style.borderColor = `${show.accentColor}30`;
                    }}
                    onMouseLeave={(e) => {
                      if (!subscribed) e.currentTarget.style.borderColor = "#1E1E32";
                    }}
                  >
                    {/* Artwork */}
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-black text-sm mb-4 relative overflow-hidden"
                      style={{ background: show.gradient, boxShadow: `0 4px 16px ${show.accentColor}44` }}
                    >
                      {show.initials}
                      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)", borderRadius: "12px" }} />
                    </div>

                    <h3 className="font-black text-sm mb-0.5 leading-snug" style={{ color: "#F2F2F8" }}>{show.name}</h3>
                    <p className="text-xs mb-1 font-semibold" style={{ color: show.accentColor }}>{show.host}</p>
                    <p className="text-xs mb-3 leading-relaxed line-clamp-2" style={{ color: "#6A6A88" }}>{show.description}</p>

                    <div className="flex items-center gap-2 mb-3 text-xs" style={{ color: "#4A4A68" }}>
                      <Star size={11} style={{ color: "#F59E0B" }} />
                      <span>{show.rating}</span>
                      <span>·</span>
                      <span>{show.episodes} eps</span>
                      <span>·</span>
                      <span>{show.subscribers}</span>
                    </div>

                    <button
                      onClick={() => toggleSubscribe(show.id)}
                      className="w-full py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                      style={{
                        background: subscribed ? `${show.accentColor}15` : "transparent",
                        border: `1px solid ${subscribed ? show.accentColor + "50" : show.accentColor + "30"}`,
                        color: show.accentColor,
                      }}
                    >
                      {subscribed ? <CheckCircle2 size={12} /> : <Headphones size={12} />}
                      {subscribed ? "Subscribed!" : "Subscribe"}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Featured Episodes */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={18} style={{ color: "#3a7d56" }} />
            <h2 className="text-2xl font-black" style={{ color: "#F2F2F8" }}>Featured Episodes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredEpisodes.map((ep, i) => {
              const isPlaying = playingEp === i;
              const saved = savedEpisodes.has(i);
              return (
                <div
                  key={i}
                  className="rounded-2xl p-5 transition-all"
                  style={{
                    background: isPlaying ? `${ep.accentColor}08` : "#12121F",
                    border: `1px solid ${isPlaying ? ep.accentColor + "40" : "#1E1E32"}`,
                  }}
                >
                  <div className="flex gap-4">
                    {/* Artwork */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-black text-xs shrink-0 relative overflow-hidden"
                      style={{ background: ep.showGradient }}
                    >
                      {ep.showInitials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold mb-0.5" style={{ color: ep.accentColor }}>{ep.show}</p>
                      <h3 className="font-black text-sm leading-snug mb-1" style={{ color: "#F2F2F8" }}>{ep.title}</h3>
                      <div className="flex items-center gap-3 text-xs mb-2" style={{ color: "#4A4A68" }}>
                        <span className="flex items-center gap-1"><Clock size={10} />{ep.duration}</span>
                        <span>{ep.date}</span>
                        <span>{ep.listens} listens</span>
                      </div>
                      <p className="text-xs leading-relaxed mb-3" style={{ color: "#6A6A88" }}>{ep.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {ep.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${ep.accentColor}10`, color: ep.accentColor }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => { setPlayingEp(isPlaying ? null : i); setGlobalPlaying(!isPlaying); }}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                          style={{
                            background: isPlaying ? `${ep.accentColor}20` : `${ep.accentColor}15`,
                            border: `1px solid ${ep.accentColor}40`,
                            color: ep.accentColor,
                          }}
                        >
                          {isPlaying ? <Pause size={11} /> : <Play size={11} />}
                          {isPlaying ? "Pause" : "Play"}
                        </button>
                        <button
                          onClick={() => toggleSave(i)}
                          className="p-1.5 rounded-lg transition-all"
                          style={{
                            background: saved ? "rgba(58,125,86,0.1)" : "transparent",
                            border: `1px solid ${saved ? "rgba(58,125,86,0.3)" : "rgba(255,255,255,0.08)"}`,
                            color: saved ? "#3a7d56" : "#6A6A88",
                          }}
                        >
                          <Bookmark size={12} fill={saved ? "#3a7d56" : "none"} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subscribe CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(107,79,187,0.08) 0%, rgba(58,125,86,0.06) 100%)",
              border: "1px solid rgba(107,79,187,0.2)",
            }}
          >
            <Headphones size={32} style={{ color: "#6B4FBB" }} className="mx-auto mb-4" />
            <h3 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>Listen Everywhere</h3>
            <p className="text-base mb-6 max-w-lg mx-auto" style={{ color: "#6A6A88" }}>
              All Vine podcasts are available on Spotify, Apple Podcasts, and Google Podcasts. Or listen free here — no account required.
            </p>
            <div className="flex items-center gap-4 justify-center flex-wrap">
              {[
                { label: "🎵 Spotify", url: "https://open.spotify.com/genre/christian-gospel" },
                { label: "🎧 Apple Podcasts", url: "https://podcasts.apple.com/us/genre/podcasts-religion-spirituality-christianity/id1439" },
                { label: "▶ Google Podcasts", url: "https://music.youtube.com/search?q=christian+podcasts" },
              ].map((platform) => (
                <a
                  key={platform.label}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#C0C0D8", textDecoration: "none" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(58,125,86,0.3)"; e.currentTarget.style.color = "#3a7d56"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#C0C0D8"; }}
                >
                  {platform.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Now Playing Bar */}
      {playingEp !== null && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3"
          style={{
            background: "#0E0E1A",
            borderTop: "1px solid rgba(58,125,86,0.15)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-black text-xs shrink-0"
              style={{ background: featuredEpisodes[playingEp].showGradient }}
            >
              {featuredEpisodes[playingEp].showInitials}
            </div>
            <div className="flex-1 min-w-0 hidden sm:block">
              <p className="text-xs font-bold truncate" style={{ color: "#F2F2F8" }}>{featuredEpisodes[playingEp].title}</p>
              <p className="text-xs" style={{ color: "#6A6A88" }}>{featuredEpisodes[playingEp].show}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => { setPlayingEp((p) => (p === null ? 0 : (p - 1 + featuredEpisodes.length) % featuredEpisodes.length)); setProgress(0); setGlobalPlaying(true); }}
                style={{ color: "#8A8AA8", background: "transparent", border: "none", cursor: "pointer" }}
              ><SkipBack size={16} /></button>
              <button
                onClick={() => setGlobalPlaying(!globalPlaying)}
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)", border: "none", cursor: "pointer" }}
              >
                {globalPlaying ? <Pause size={14} style={{ color: "#000" }} /> : <Play size={14} style={{ color: "#000", marginLeft: "2px" }} />}
              </button>
              <button
                onClick={() => { setPlayingEp((p) => (p === null ? 0 : (p + 1) % featuredEpisodes.length)); setProgress(0); setGlobalPlaying(true); }}
                style={{ color: "#8A8AA8", background: "transparent", border: "none", cursor: "pointer" }}
              ><SkipForward size={16} /></button>
            </div>
            <div className="flex-1 hidden md:flex items-center gap-3">
              <span className="text-xs" style={{ color: "#6A6A88" }}>18:24</span>
              <div
                className="flex-1 h-1 rounded-full cursor-pointer"
                style={{ background: "rgba(255,255,255,0.1)" }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setProgress(Math.round(((e.clientX - rect.left) / rect.width) * 100));
                }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: `${progress}%`, background: "linear-gradient(90deg, #4a9e6e, #3a7d56)" }}
                />
              </div>
              <span className="text-xs" style={{ color: "#6A6A88" }}>{featuredEpisodes[playingEp].duration}</span>
            </div>
            <Volume2 size={16} style={{ color: "#6A6A88" }} className="hidden lg:block" />
            <button
              onClick={() => { setPlayingEp(null); setGlobalPlaying(false); }}
              className="text-xs px-2 py-1 rounded"
              style={{ color: "#4A4A68" }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
