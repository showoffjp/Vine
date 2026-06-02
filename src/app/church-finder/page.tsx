"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Search, Star, Heart, ExternalLink, Users, Clock, ChevronRight, Globe } from "lucide-react";

interface Church {
  id: string;
  name: string;
  denomination: string;
  city: string;
  state: string;
  country: string;
  flag: string;
  size: "small" | "medium" | "large" | "mega";
  style: string[];
  services: string[];
  description: string;
  pastor: string;
  website?: string;
  rating: number;
  reviews: number;
  online: boolean;
  featured: boolean;
}

const DENOMINATIONS = ["All", "Non-denominational", "Baptist", "Methodist", "Presbyterian", "Anglican/Episcopal", "Lutheran", "Pentecostal", "Reformed", "Catholic", "Orthodox", "Evangelical", "Charismatic"];
const STYLES = ["All", "Contemporary", "Traditional", "Blended", "Liturgical", "High Energy", "Contemplative", "Multicultural", "Small Group Focus"];
const SIZES = ["All", "Small (<100)", "Medium (100-500)", "Large (500-2000)", "Mega (2000+)"];
const COUNTRIES = ["All", "USA", "UK", "Canada", "Nigeria", "Kenya", "Ghana", "Brazil", "South Korea", "Germany", "Australia", "Singapore", "South Africa", "India"];

const DENOM_COLORS: Record<string, string> = {
  "Non-denominational": "#3a7d56",
  "Baptist": "#3B82F6",
  "Methodist": "#6B4FBB",
  "Presbyterian": "#F59E0B",
  "Anglican/Episcopal": "#8B5CF6",
  "Lutheran": "#10B981",
  "Pentecostal": "#EF4444",
  "Reformed": "#EC4899",
  "Catholic": "#F97316",
  "Orthodox": "#8A8AA8",
  "Evangelical": "#14B8A6",
  "Charismatic": "#6366F1",
};

const seedChurches: Church[] = [
  {
    id: "ch-001",
    name: "Redeemer City to City Church",
    denomination: "Presbyterian",
    city: "New York", state: "NY", country: "USA", flag: "🇺🇸",
    size: "large",
    style: ["Contemporary", "Multicultural"],
    services: ["Sunday 9am & 11am", "Wednesday 7pm"],
    description: "A gospel-centered church in the heart of Manhattan, known for intellectual engagement with faith, world-class preaching, and a heart for the city's flourishing. Founded by Tim Keller's vision.",
    pastor: "Rev. Scott Sauls",
    website: "https://example.com",
    rating: 4.9,
    reviews: 2847,
    online: true,
    featured: true,
  },
  {
    id: "ch-002",
    name: "Elevation Church",
    denomination: "Non-denominational",
    city: "Charlotte", state: "NC", country: "USA", flag: "🇺🇸",
    size: "mega",
    style: ["Contemporary", "High Energy"],
    services: ["Multiple Sunday services", "Online 24/7"],
    description: "A multi-site church with a passionate pursuit of the lost and a powerful worship culture. Known for global reach and creative excellence in ministry.",
    pastor: "Pastor Steven Furtick",
    rating: 4.7,
    reviews: 8921,
    online: true,
    featured: true,
  },
  {
    id: "ch-003",
    name: "Holy Trinity Brompton",
    denomination: "Anglican/Episcopal",
    city: "London", state: "", country: "UK", flag: "🇬🇧",
    size: "large",
    style: ["Blended", "Charismatic"],
    services: ["Sunday 9am, 11am, 5pm, 7pm"],
    description: "Home of the Alpha Course. A vibrant Anglican church in the heart of London known for renewal, healing prayer, and training the next generation of church leaders worldwide.",
    pastor: "Nicky Gumbel",
    rating: 4.8,
    reviews: 4102,
    online: true,
    featured: true,
  },
  {
    id: "ch-004",
    name: "Hillsong Church",
    denomination: "Pentecostal",
    city: "Sydney", state: "NSW", country: "Australia", flag: "🇦🇺",
    size: "mega",
    style: ["Contemporary", "High Energy", "Multicultural"],
    services: ["Saturday 5pm, Sunday 9am & 11am"],
    description: "One of the world's most influential churches, known for its global worship music ministry, bold evangelism, and passionate community across 30+ countries.",
    pastor: "Various campus pastors",
    rating: 4.6,
    reviews: 12043,
    online: true,
    featured: false,
  },
  {
    id: "ch-005",
    name: "RCCG City of David",
    denomination: "Pentecostal",
    city: "Lagos", state: "", country: "Nigeria", flag: "🇳🇬",
    size: "mega",
    style: ["High Energy", "Traditional", "Multicultural"],
    services: ["Friday 5pm, Sunday 7am, 9am, 11am"],
    description: "A flagship parish of the Redeemed Christian Church of God, with world-class programs for discipleship, family ministry, and missions across Africa.",
    pastor: "Pastor Ezekiel Odeyemi",
    rating: 4.8,
    reviews: 5891,
    online: false,
    featured: true,
  },
  {
    id: "ch-006",
    name: "Nairobi Chapel",
    denomination: "Non-denominational",
    city: "Nairobi", state: "", country: "Kenya", flag: "🇰🇪",
    size: "large",
    style: ["Contemporary", "Multicultural"],
    services: ["Sunday 8am & 10:30am"],
    description: "A multi-ethnic, multi-generational church known for its theology, community development work, and training East Africa's next generation of Christian leaders.",
    pastor: "Oscar Muriu",
    rating: 4.9,
    reviews: 2103,
    online: true,
    featured: false,
  },
  {
    id: "ch-007",
    name: "The Village Church",
    denomination: "Reformed",
    city: "Flower Mound", state: "TX", country: "USA", flag: "🇺🇸",
    size: "mega",
    style: ["Contemporary", "Contemplative"],
    services: ["Sunday 9am & 11am, Thursday 7pm"],
    description: "A Reformed evangelical church committed to deep biblical teaching, gospel community, and serving both local neighbors and unreached peoples globally.",
    pastor: "Matt Chandler",
    rating: 4.8,
    reviews: 7234,
    online: true,
    featured: false,
  },
  {
    id: "ch-008",
    name: "Saddleback Church",
    denomination: "Baptist",
    city: "Lake Forest", state: "CA", country: "USA", flag: "🇺🇸",
    size: "mega",
    style: ["Contemporary", "Blended"],
    services: ["Multiple weekend services"],
    description: "A purpose-driven church known for PEACE Plan global impact, recovery programs, and equipping members to live the five purposes of the church.",
    pastor: "Andy Wood",
    rating: 4.6,
    reviews: 11892,
    online: true,
    featured: false,
  },
  {
    id: "ch-009",
    name: "Crossroads Church",
    denomination: "Non-denominational",
    city: "Cincinnati", state: "OH", country: "USA", flag: "🇺🇸",
    size: "mega",
    style: ["Contemporary", "High Energy", "Multicultural"],
    services: ["Saturday 5pm, Sunday 9am & 11am"],
    description: "Known for wildly creative environments, relentless pursuit of justice, and a culture of radical generosity. One of the most innovative churches in North America.",
    pastor: "Chuck Mingo",
    rating: 4.7,
    reviews: 4821,
    online: true,
    featured: false,
  },
  {
    id: "ch-010",
    name: "Calvary Chapel Costa Mesa",
    denomination: "Non-denominational",
    city: "Costa Mesa", state: "CA", country: "USA", flag: "🇺🇸",
    size: "large",
    style: ["Traditional", "Blended"],
    services: ["Sunday 9am & 11am, Wednesday 7pm"],
    description: "Birthplace of the Calvary Chapel movement. Known for verse-by-verse Bible teaching, the Jesus Movement roots, and sending church planters worldwide.",
    pastor: "Brian Brodersen",
    rating: 4.7,
    reviews: 3291,
    online: true,
    featured: false,
  },
  {
    id: "ch-011",
    name: "Westminster Chapel",
    denomination: "Reformed",
    city: "London", state: "", country: "UK", flag: "🇬🇧",
    size: "medium",
    style: ["Traditional", "Liturgical"],
    services: ["Sunday 11am & 6:30pm"],
    description: "A historic Reformed church with a rich tradition of expository preaching and a commitment to the historic Reformed faith in the heart of London.",
    pastor: "Rev. Alistair Begg (visiting)",
    rating: 4.6,
    reviews: 891,
    online: true,
    featured: false,
  },
  {
    id: "ch-012",
    name: "Yoido Full Gospel Church",
    denomination: "Pentecostal",
    city: "Seoul", state: "", country: "South Korea", flag: "🇰🇷",
    size: "mega",
    style: ["Traditional", "High Energy"],
    services: ["Multiple Sunday services"],
    description: "The world's largest congregation by membership. A Pentecostal megachurch known for its prayer mountain, healing ministry, and global missions network.",
    pastor: "Young-Hoon Lee",
    rating: 4.5,
    reviews: 24891,
    online: false,
    featured: true,
  },
  {
    id: "ch-013",
    name: "Presença de Deus Church",
    denomination: "Evangelical",
    city: "São Paulo", state: "", country: "Brazil", flag: "🇧🇷",
    size: "large",
    style: ["Contemporary", "Multicultural", "High Energy"],
    services: ["Sunday 9am, 11am, 5pm"],
    description: "A vibrant evangelical church at the center of Brazil's growing Christian scene, with passionate worship, strong family ministries, and active missions to unreached peoples.",
    pastor: "Rev. Renato Vargens",
    rating: 4.7,
    reviews: 3102,
    online: true,
    featured: false,
  },
  {
    id: "ch-014",
    name: "Christ Church Cathedral",
    denomination: "Anglican/Episcopal",
    city: "Oxford", state: "", country: "UK", flag: "🇬🇧",
    size: "medium",
    style: ["Liturgical", "Traditional"],
    services: ["Daily services 8am–5:30pm"],
    description: "A cathedral church with 800 years of history at the heart of Oxford University, offering daily liturgical worship in one of England's most beautiful medieval spaces.",
    pastor: "The Dean of Christ Church",
    rating: 4.8,
    reviews: 12034,
    online: false,
    featured: false,
  },
  {
    id: "ch-015",
    name: "Every Nation Church",
    denomination: "Charismatic",
    city: "Singapore", state: "", country: "Singapore", flag: "🇸🇬",
    size: "large",
    style: ["Contemporary", "Multicultural"],
    services: ["Saturday 5pm, Sunday 9am & 11am"],
    description: "Part of the Every Nation global family of churches. Known for campus ministry, leadership development, and planting churches in hard-to-reach cities across Asia.",
    pastor: "Various campus pastors",
    rating: 4.6,
    reviews: 2471,
    online: true,
    featured: false,
  },
];

const SIZE_LABELS: Record<string, string> = {
  small: "Small (<100)",
  medium: "Medium (100-500)",
  large: "Large (500-2k)",
  mega: "Mega (2k+)",
};

export default function ChurchFinderPage() {
  const [saved, setSaved] = useState<Set<string>>(() => {
    try {
      const s = localStorage.getItem("vine_church_saved");
      return s ? new Set(JSON.parse(s)) : new Set();
    } catch { return new Set(); }
  });

  const [search, setSearch] = useState("");
  const [filterDenom, setFilterDenom] = useState("All");
  const [filterCountry, setFilterCountry] = useState("All");
  const [filterSize, setFilterSize] = useState("All");
  const [filterOnline, setFilterOnline] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    try { localStorage.setItem("vine_church_saved", JSON.stringify([...saved])); } catch {}
  }, [saved]);

  const toggleSave = (id: string) => {
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const filtered = seedChurches.filter((c) => {
    const searchMatch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.city.toLowerCase().includes(search.toLowerCase()) || c.pastor.toLowerCase().includes(search.toLowerCase()) || c.denomination.toLowerCase().includes(search.toLowerCase());
    const denomMatch = filterDenom === "All" || c.denomination === filterDenom;
    const countryMatch = filterCountry === "All" || c.country === filterCountry;
    const sizeMatch = filterSize === "All" || SIZE_LABELS[c.size] === filterSize || (filterSize === "Small (<100)" && c.size === "small") || (filterSize === "Medium (100-500)" && c.size === "medium") || (filterSize === "Large (500-2000)" && c.size === "large") || (filterSize === "Mega (2000+)" && c.size === "mega");
    const onlineMatch = !filterOnline || c.online;
    return searchMatch && denomMatch && countryMatch && sizeMatch && onlineMatch;
  });

  const selected = seedChurches.find((c) => c.id === selectedId);

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-2">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} style={{ color: "#3a7d56" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Church Finder</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-3">
            Find your{" "}
            <span style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              church home.
            </span>
          </h1>
          <p className="text-lg max-w-2xl mb-6" style={{ color: "#6A6A88" }}>
            Discover and save churches worldwide — from historic cathedrals to house churches, in 184 countries.
          </p>
          <div className="flex flex-wrap gap-3 text-sm" style={{ color: "#8A8AA8" }}>
            {[{ v: "15,000+", label: "Churches listed" }, { v: "184", label: "Countries" }, { v: "40+", label: "Denominations" }].map((s) => (
              <div key={s.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="font-black" style={{ color: "#3a7d56" }}>{s.v}</span> {s.label}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search + filters */}
          <div className="flex flex-col gap-3 mb-6">
            <div className="relative">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#4A4A68" }} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, city, pastor, or denomination..."
                className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
              />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <select value={filterDenom} onChange={(e) => setFilterDenom(e.target.value)} className="px-3 py-2 rounded-xl text-xs font-semibold outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}>
                {DENOMINATIONS.map((d) => <option key={d} value={d} style={{ background: "#12121F" }}>{d}</option>)}
              </select>
              <select value={filterCountry} onChange={(e) => setFilterCountry(e.target.value)} className="px-3 py-2 rounded-xl text-xs font-semibold outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}>
                {COUNTRIES.map((c) => <option key={c} value={c} style={{ background: "#12121F" }}>{c}</option>)}
              </select>
              <select value={filterSize} onChange={(e) => setFilterSize(e.target.value)} className="px-3 py-2 rounded-xl text-xs font-semibold outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}>
                {SIZES.map((s) => <option key={s} value={s} style={{ background: "#12121F" }}>{s}</option>)}
              </select>
              <button
                onClick={() => setFilterOnline((v) => !v)}
                className="px-3 py-2 rounded-xl text-xs font-bold"
                style={{ background: filterOnline ? "rgba(58,125,86,0.12)" : "rgba(255,255,255,0.04)", border: filterOnline ? "1px solid rgba(58,125,86,0.35)" : "1px solid rgba(255,255,255,0.08)", color: filterOnline ? "#3a7d56" : "#6A6A88" }}
              >
                <Globe size={11} className="inline mr-1" /> Online services
              </button>
              <span className="text-xs ml-auto" style={{ color: "#4A4A68" }}>{filtered.length} church{filtered.length !== 1 ? "es" : ""} found</span>
            </div>
          </div>

          <div className="flex gap-6">
            {/* List */}
            <div className="flex-1 min-w-0">
              {filtered.length === 0 && (
                <div className="text-center py-20" style={{ color: "#4A4A68" }}>
                  <MapPin size={40} className="mx-auto mb-3 opacity-20" />
                  <p>No churches match your filters</p>
                </div>
              )}
              <div className="space-y-4">
                {filtered.map((c) => {
                  const denomColor = DENOM_COLORS[c.denomination] ?? "#8A8AA8";
                  const isSaved = saved.has(c.id);
                  const isSelected = selectedId === c.id;
                  return (
                    <div
                      key={c.id}
                      className="rounded-2xl p-5 cursor-pointer transition-all"
                      style={{ background: isSelected ? "rgba(58,125,86,0.05)" : "#12121F", border: isSelected ? "1px solid rgba(58,125,86,0.2)" : "1px solid #1E1E32" }}
                      onClick={() => setSelectedId(isSelected ? null : c.id)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: "rgba(255,255,255,0.05)" }}>
                          {c.flag}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                {c.featured && <span className="text-[10px] font-black px-2 py-0.5 rounded-full" style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}>⭐ Featured</span>}
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${denomColor}15`, color: denomColor, border: `1px solid ${denomColor}30` }}>{c.denomination}</span>
                                {c.online && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(58,125,86,0.08)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.2)" }}>🌐 Online</span>}
                              </div>
                              <h3 className="font-black text-base leading-tight" style={{ color: "#F2F2F8" }}>{c.name}</h3>
                              <p className="text-xs mt-0.5" style={{ color: "#6A6A88" }}>
                                <MapPin size={9} className="inline mr-0.5" />{c.city}{c.state ? `, ${c.state}` : ""}, {c.country} · {SIZE_LABELS[c.size]}
                              </p>
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); toggleSave(c.id); }}
                              className="shrink-0 p-2 rounded-xl transition-all"
                              style={{ background: isSaved ? "rgba(236,72,153,0.12)" : "rgba(255,255,255,0.04)", border: isSaved ? "1px solid rgba(236,72,153,0.3)" : "1px solid rgba(255,255,255,0.08)" }}
                            >
                              <Heart size={14} fill={isSaved ? "#EC4899" : "none"} style={{ color: isSaved ? "#EC4899" : "#4A4A68" }} />
                            </button>
                          </div>

                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center gap-0.5">
                              {[1,2,3,4,5].map((s) => (
                                <Star key={s} size={10} fill={c.rating >= s ? "#F59E0B" : "none"} style={{ color: c.rating >= s ? "#F59E0B" : "#2A2A42" }} />
                              ))}
                            </div>
                            <span className="text-xs font-bold" style={{ color: "#F59E0B" }}>{c.rating}</span>
                            <span className="text-xs" style={{ color: "#4A4A68" }}>({c.reviews.toLocaleString()})</span>
                            <span className="text-xs" style={{ color: "#4A4A68" }}>Pastor: {c.pastor}</span>
                          </div>

                          {/* Expanded */}
                          {isSelected && (
                            <div className="mt-4 space-y-3">
                              <p className="text-sm leading-relaxed" style={{ color: "#C0C0D8" }}>{c.description}</p>
                              <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 rounded-xl" style={{ background: "rgba(0,0,0,0.2)" }}>
                                  <p className="text-[10px] font-bold mb-1" style={{ color: "#4A4A68" }}>SERVICE TIMES</p>
                                  {c.services.map((s) => (
                                    <p key={s} className="text-xs" style={{ color: "#C0C0D8" }}>{s}</p>
                                  ))}
                                </div>
                                <div className="p-3 rounded-xl" style={{ background: "rgba(0,0,0,0.2)" }}>
                                  <p className="text-[10px] font-bold mb-1" style={{ color: "#4A4A68" }}>WORSHIP STYLE</p>
                                  <div className="flex flex-wrap gap-1">
                                    {c.style.map((s) => (
                                      <span key={s} className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.06)", color: "#8A8AA8" }}>{s}</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-3">
                                <button className="flex-1 py-2 rounded-xl text-xs font-black" style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)", color: "#07070F" }}>
                                  Visit Website
                                </button>
                                <button
                                  onClick={(e) => { e.stopPropagation(); toggleSave(c.id); }}
                                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold"
                                  style={{ background: isSaved ? "rgba(236,72,153,0.12)" : "rgba(255,255,255,0.04)", color: isSaved ? "#EC4899" : "#6A6A88", border: "1px solid rgba(255,255,255,0.08)" }}
                                >
                                  <Heart size={12} fill={isSaved ? "#EC4899" : "none"} />
                                  {isSaved ? "Saved" : "Save"}
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right sidebar: saved + stats */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="rounded-2xl p-5 mb-5" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <h3 className="font-black text-sm mb-3" style={{ color: "#F2F2F8" }}>
                  <Heart size={13} className="inline mr-1.5" style={{ color: "#EC4899" }} />
                  Saved Churches ({saved.size})
                </h3>
                {saved.size === 0 ? (
                  <p className="text-xs" style={{ color: "#4A4A68" }}>Click the heart on any church to save it for later.</p>
                ) : (
                  <div className="space-y-2">
                    {[...saved].map((id) => {
                      const ch = seedChurches.find((c) => c.id === id);
                      if (!ch) return null;
                      return (
                        <div key={id} className="flex items-center gap-2">
                          <span>{ch.flag}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold truncate" style={{ color: "#C0C0D8" }}>{ch.name}</p>
                            <p className="text-[10px]" style={{ color: "#4A4A68" }}>{ch.city}, {ch.country}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="rounded-2xl p-5" style={{ background: "rgba(107,79,187,0.08)", border: "1px solid rgba(107,79,187,0.15)" }}>
                <p className="font-black text-sm mb-2" style={{ color: "#F2F2F8" }}>Can&apos;t find your church?</p>
                <p className="text-xs mb-3" style={{ color: "#6A6A88" }}>Submit your church to be listed in the Vine directory.</p>
                <button className="w-full py-2 rounded-xl text-xs font-black" style={{ background: "rgba(107,79,187,0.2)", color: "#9B8FEB", border: "1px solid rgba(107,79,187,0.3)" }}>
                  Submit a Church
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
