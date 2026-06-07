"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import {
  Globe,
  Users,
  MessageSquare,
  Heart,
  MapPin,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const regions = [
  {
    name: "Sub-Saharan Africa",
    flag: "🌍",
    members: "412K",
    growth: "+34%",
    color: "#F59E0B",
    countries: ["Nigeria", "Kenya", "Ghana", "Ethiopia", "South Africa", "Uganda"],
    activeDiscussion: "Revival happening in Lagos — share your testimony",
    discussionSlug: "cancer-free-praise-005",
    highlight: "Fastest-growing Christian region in the world",
  },
  {
    name: "East Asia",
    flag: "🌏",
    members: "287K",
    growth: "+18%",
    color: "#EC4899",
    countries: ["South Korea", "China", "Japan", "Philippines", "Indonesia", "Taiwan"],
    activeDiscussion: "Faith under pressure — navigating Christianity in Asia",
    discussionSlug: "faith-and-doubt-001",
    highlight: "Home to some of the largest megachurches globally",
  },
  {
    name: "Latin America",
    flag: "🌎",
    members: "356K",
    growth: "+22%",
    color: "#10B981",
    countries: ["Brazil", "Mexico", "Colombia", "Argentina", "Chile", "Peru"],
    activeDiscussion: "Pentecostalism's rise in Brazil — what's driving it?",
    discussionSlug: "free-will-omniscience-003",
    highlight: "Catholic roots meet vibrant evangelical growth",
  },
  {
    name: "North America",
    flag: "🇺🇸",
    members: "524K",
    growth: "+8%",
    color: "#3B82F6",
    countries: ["USA", "Canada", "Mexico"],
    activeDiscussion: "Post-pandemic church attendance — what's your experience?",
    discussionSlug: "faith-and-doubt-001",
    highlight: "Diverse denominational landscape and missions hub",
  },
  {
    name: "Europe & UK",
    flag: "🇪🇺",
    members: "198K",
    growth: "+12%",
    color: "#6B4FBB",
    countries: ["UK", "Germany", "Netherlands", "France", "Poland", "Scandinavia"],
    activeDiscussion: "Being a Christian in a secular society — strategies that work",
    discussionSlug: "faith-and-doubt-001",
    highlight: "Growing immigrant church movements reshaping Europe",
  },
  {
    name: "Middle East & North Africa",
    flag: "🌙",
    members: "89K",
    growth: "+41%",
    color: "#EF4444",
    countries: ["Egypt", "Lebanon", "Ethiopia", "Sudan", "Jordan", "Iraq"],
    activeDiscussion: "Persecution and perseverance — stories of faith under fire",
    discussionSlug: "depression-therapy-faith-005",
    highlight: "Ancient Christian roots + growing underground church",
  },
];

const globalMembers = [
  { name: "Amara Osei", country: "Ghana", flag: "🇬🇭", role: "Worship Leader", joined: "2024", avatar: "AO", color: "#F59E0B", storySlug: "amara-osei-widowed-at-28" },
  { name: "Ji-Woo Park", country: "South Korea", flag: "🇰🇷", role: "Seminary Student", joined: "2025", avatar: "JP", color: "#EC4899", storySlug: "ji-woo-park-kpop-idol-to-pastor" },
  { name: "Carlos Mendez", country: "Colombia", flag: "🇨🇴", role: "Church Planter", joined: "2024", avatar: "CM", color: "#10B981", storySlug: "carlos-mendez-drug-cartel-to-church-planter" },
  { name: "Lydia Böhm", country: "Germany", flag: "🇩🇪", role: "Youth Pastor", joined: "2025", avatar: "LB", color: "#6B4FBB", storySlug: "lydia-bohm-deconstruction" },
  { name: "Samuel Mwangi", country: "Kenya", flag: "🇰🇪", role: "Bible Teacher", joined: "2023", avatar: "SM", color: "#3a7d56", storySlug: "samuel-mwangi-from-prosperity-gospel-to-grace" },
  { name: "Isabella Ferreira", country: "Brazil", flag: "🇧🇷", role: "Missionary", joined: "2024", avatar: "IF", color: "#3B82F6", storySlug: null },
];

const prayerRequests = [
  { id: 0, country: "🇨🇳", region: "China", request: "For the underground church — wisdom, safety, and growth.", time: "1h ago", count: 847 },
  { id: 1, country: "🇮🇷", region: "Iran", request: "New believers facing family rejection — courage and community.", time: "3h ago", count: 612 },
  { id: 2, country: "🇳🇬", region: "Nigeria", request: "Safety for Christian communities in the north — protection from violence.", time: "5h ago", count: 1203 },
  { id: 3, country: "🇰🇵", region: "North Korea", request: "For believers detained for their faith — miraculous provision.", time: "12h ago", count: 2841 },
];

const stats = [
  { label: "Countries represented", value: "184", icon: Globe },
  { label: "Active members globally", value: "2.1M", icon: Users },
  { label: "Languages supported", value: "47", icon: MessageSquare },
  { label: "Global prayer requests today", value: "8,400", icon: Heart },
];

export default function GlobalConnectPage() {
  const [joinedCircles, setJoinedCircles] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_gc_circles"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [prayedRequests, setPrayedRequests] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_gc_prayed"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [prayCounts, setPrayCounts] = useState<Record<number, number>>(() => {
    try { const s = localStorage.getItem("vine_gc_counts"); return s ? JSON.parse(s) : Object.fromEntries(prayerRequests.map((p) => [p.id, p.count])); } catch { return Object.fromEntries(prayerRequests.map((p) => [p.id, p.count])); }
  });
  const [connectedMembers, setConnectedMembers] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_gc_connected"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [locationSet, setLocationSet] = useState(false);

  useEffect(() => {
    try { localStorage.setItem("vine_gc_circles", JSON.stringify([...joinedCircles])); } catch {}
  }, [joinedCircles]);
  useEffect(() => {
    try { localStorage.setItem("vine_gc_prayed", JSON.stringify([...prayedRequests])); } catch {}
  }, [prayedRequests]);
  useEffect(() => {
    try { localStorage.setItem("vine_gc_counts", JSON.stringify(prayCounts)); } catch {}
  }, [prayCounts]);
  useEffect(() => {
    try { localStorage.setItem("vine_gc_connected", JSON.stringify([...connectedMembers])); } catch {}
  }, [connectedMembers]);

  const [gcEntries, setGcEntries] = useState<{ id: string; date: string; connection: string; burden: string; step: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_gc_entries") ?? "[]"); } catch { return []; }
  });
  const [gcForm, setGcForm] = useState({ connection: "", burden: "", step: "" });
  const [gcSaved, setGcSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_gc_entries", JSON.stringify(gcEntries)); } catch {} }, [gcEntries]);
  const saveGcEntry = () => {
    if (!gcForm.connection.trim()) return;
    setGcEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...gcForm }, ...prev]);
    setGcForm({ connection: "", burden: "", step: "" });
    setGcSaved(true); setTimeout(() => setGcSaved(false), 2000);
  };
  const deleteGcEntry = (id: string) => setGcEntries(prev => prev.filter(e => e.id !== id));

  const toggleCircle = (i: number) => {
    setJoinedCircles((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const handlePray = (id: number) => {
    if (prayedRequests.has(id)) return;
    setPrayedRequests((prev) => new Set([...prev, id]));
    setPrayCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const toggleConnect = (name: string) => {
    setConnectedMembers((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <main id="main-content">
      <div className="pb-20" style={{ paddingTop: 80 }}>
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe size={24} style={{ color: "#3a7d56" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>
                Global Connect
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              One body.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3a7d56, #10B981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Every nation.
              </span>
            </h1>
            <p className="text-lg mb-10" style={{ color: "#6A6A88" }}>
              Connect with Christians from 184 countries. Share stories, pray together, and discover how the global Church is moving. Revelation 7:9 is not a metaphor — it&apos;s our future becoming our present.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="rounded-2xl p-4 text-center"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <Icon size={18} style={{ color: "#3a7d56" }} className="mx-auto mb-2" />
                    <p className="text-2xl font-black mb-0.5" style={{ color: "#F2F2F8" }}>{s.value}</p>
                    <p className="text-xs" style={{ color: "#6A6A88" }}>{s.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Regions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>
            Connect by Region
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {regions.map((r, i) => {
              const joined = joinedCircles.has(i);
              return (
                <div
                  key={r.name}
                  className="group rounded-2xl p-6 transition-all"
                  style={{
                    background: joined ? `${r.color}06` : "rgba(255,255,255,0.02)",
                    border: `1px solid ${joined ? r.color + "40" : "rgba(255,255,255,0.06)"}`,
                  }}
                  onMouseEnter={(e) => {
                    if (!joined) {
                      e.currentTarget.style.borderColor = `${r.color}40`;
                      e.currentTarget.style.background = `${r.color}06`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!joined) {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    }
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-3xl block mb-1">{r.flag}</span>
                      <h3 className="font-black text-lg" style={{ color: "#F2F2F8" }}>{r.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black" style={{ color: r.color }}>{r.members}</p>
                      <p className="text-xs font-semibold" style={{ color: "#10B981" }}>{r.growth} this year</p>
                    </div>
                  </div>
                  <p className="text-xs mb-3 italic" style={{ color: "#6A6A88" }}>{r.highlight}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {r.countries.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: `${r.color}10`, color: r.color }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/discussions/${r.discussionSlug}`}
                    className="block p-3 rounded-xl transition-all mb-4"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(58,125,86,0.2)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
                  >
                    <p className="text-xs mb-1 font-bold" style={{ color: "#3a7d56" }}>🔥 Active Discussion</p>
                    <p className="text-sm" style={{ color: "#8A8AA8" }}>{r.activeDiscussion}</p>
                  </Link>
                  <button type="button"
                    onClick={() => toggleCircle(i)}
                    className="w-full py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2"
                    style={{
                      background: joined ? `${r.color}20` : "transparent",
                      border: `1px solid ${joined ? r.color + "50" : r.color + "30"}`,
                      color: r.color,
                    }}
                  >
                    {joined ? <CheckCircle2 size={14} /> : <ChevronRight size={14} />}
                    {joined ? "✓ Joined!" : "Join this circle"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Members */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black" style={{ color: "#F2F2F8" }}>
              Members Around the World
            </h2>
            <Link href="/groups" className="flex items-center gap-1 text-sm font-semibold" style={{ color: "#3a7d56", textDecoration: "none" }}>
              View All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {globalMembers.map((m) => (
              <div
                key={m.name}
                className="group flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(58,125,86,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black shrink-0"
                  style={{ background: `${m.color}25`, color: m.color, border: `2px solid ${m.color}40` }}
                >
                  {m.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm group-hover:text-[#3a7d56] transition-colors truncate" style={{ color: "#F2F2F8" }}>
                      {m.name}
                    </p>
                    <span>{m.flag}</span>
                  </div>
                  <p className="text-xs" style={{ color: "#6A6A88" }}>{m.role} · {m.country}</p>
                </div>
                {m.storySlug ? (
                  <a
                    href={`/stories/${m.storySlug}`}
                    className="text-xs px-2.5 py-1 rounded-full font-semibold shrink-0"
                    style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.2)", textDecoration: "none" }}
                  >
                    Story
                  </a>
                ) : (
                  <button type="button"
                    onClick={() => toggleConnect(m.name)}
                    className="text-xs px-2.5 py-1 rounded-full font-semibold shrink-0 transition-all"
                    style={{
                      background: connectedMembers.has(m.name) ? "rgba(58,125,86,0.2)" : "rgba(58,125,86,0.1)",
                      color: "#3a7d56",
                      border: `1px solid ${connectedMembers.has(m.name) ? "rgba(58,125,86,0.4)" : "rgba(58,125,86,0.2)"}`,
                    }}
                  >
                    {connectedMembers.has(m.name) ? "✓ Connected" : "Connect"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Global Prayer Wall */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Heart size={18} style={{ color: "#3a7d56" }} />
                <h2 className="text-xl font-black" style={{ color: "#F2F2F8" }}>
                  Global Prayer Wall
                </h2>
              </div>
              <div className="space-y-3">
                {prayerRequests.map((p) => {
                  const prayed = prayedRequests.has(p.id);
                  return (
                    <div
                      key={p.id}
                      className="p-4 rounded-xl flex gap-4"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: `1px solid ${prayed ? "rgba(107,79,187,0.3)" : "rgba(255,255,255,0.06)"}`,
                      }}
                    >
                      <span className="text-2xl shrink-0">{p.country}</span>
                      <div className="flex-1">
                        <p className="text-xs font-bold mb-1" style={{ color: "#3a7d56" }}>{p.region}</p>
                        <p className="text-sm leading-relaxed" style={{ color: "#A0A0C0" }}>{p.request}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs" style={{ color: "#4A4A68" }}>{p.time}</span>
                          <button type="button"
                            onClick={() => handlePray(p.id)}
                            disabled={prayed}
                            className="text-xs flex items-center gap-1 font-semibold transition-all"
                            style={{
                              color: prayed ? "#3a7d56" : "#6B4FBB",
                              opacity: prayed ? 1 : 1,
                            }}
                          >
                            🙏 {prayed ? `Praying (${prayCounts[p.id].toLocaleString()})` : `Pray · ${prayCounts[p.id].toLocaleString()}`}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link
                href="/prayer"
                className="mt-4 block w-full py-3 rounded-xl text-sm font-semibold text-center"
                style={{ background: "rgba(58,125,86,0.06)", border: "1px solid rgba(58,125,86,0.15)", color: "#3a7d56", textDecoration: "none" }}
              >
                View All Global Prayers
              </Link>
            </div>

            {/* Verse / Join */}
            <div className="space-y-5">
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "linear-gradient(135deg, rgba(107,79,187,0.1) 0%, rgba(58,125,86,0.06) 100%)",
                  border: "1px solid rgba(107,79,187,0.2)",
                }}
              >
                <p className="text-lg italic mb-4 leading-relaxed" style={{ color: "#C0C0D8" }}>
                  &ldquo;After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb.&rdquo;
                </p>
                <p className="font-bold text-sm" style={{ color: "#3a7d56" }}>— Revelation 7:9</p>
              </div>
              <div
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <MapPin size={24} style={{ color: "#3a7d56" }} className="mb-3" />
                <h3 className="font-bold text-lg mb-2" style={{ color: "#F2F2F8" }}>
                  {locationSet ? "Location Updated!" : "Set Your Location"}
                </h3>
                <p className="text-sm mb-4" style={{ color: "#6A6A88" }}>
                  {locationSet
                    ? "Other believers near you can now find and connect with you."
                    : "Help other believers find you. Connect with Christians near you and in your home country."}
                </p>
                {locationSet ? (
                  <div
                    className="w-full py-2.5 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2"
                    style={{ background: "rgba(58,125,86,0.1)", border: "1px solid rgba(58,125,86,0.3)", color: "#3a7d56" }}
                  >
                    <CheckCircle2 size={15} />
                    Location saved
                  </div>
                ) : (
                  <button type="button"
                    onClick={() => setLocationSet(true)}
                    className="w-full py-2.5 rounded-xl text-sm font-bold text-black"
                    style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)" }}
                  >
                    Update My Location
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journal */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#F2F2F8" }}>My Global Connect Journal</h2>
        <p style={{ color: "#9898B3", fontSize: 15, marginBottom: 24 }}>Record connections you are making, burdens God is giving you, and how you are responding. Saved privately in your browser.</p>
        <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 24, marginBottom: 24 }}>
          <div style={{ marginBottom: 14 }}>
            <label style={{ display: "block", color: "#3a7d56", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>CONNECTION I AM MAKING *</label>
            <textarea value={gcForm.connection} onChange={e => setGcForm(f => ({ ...f, connection: e.target.value }))}
              placeholder="Which prayer circle, community, or believer are you connecting with?" rows={2}
              style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, color: "#F2F2F8", fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
          </div>
          <div style={{ marginBottom: 14 }}>
            <label style={{ display: "block", color: "#6B4FBB", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>BURDEN GOD IS GIVING ME</label>
            <textarea value={gcForm.burden} onChange={e => setGcForm(f => ({ ...f, burden: e.target.value }))}
              placeholder="What is weighing on your heart for the global church?" rows={3}
              style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, color: "#F2F2F8", fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ display: "block", color: "#9898B3", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>HOW I AM RESPONDING</label>
            <textarea value={gcForm.step} onChange={e => setGcForm(f => ({ ...f, step: e.target.value }))}
              placeholder="What action or prayer are you committing to?" rows={2}
              style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, color: "#F2F2F8", fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
          </div>
          <button type="button" onClick={saveGcEntry}
            style={{ background: gcSaved ? "#3a7d56" : "#6B4FBB", color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
            {gcSaved ? "Saved ✓" : "Save Entry"}
          </button>
        </div>
        {gcEntries.length > 0 && (
          <div>
            <h3 style={{ color: "#9898B3", fontSize: 14, fontWeight: 700, marginBottom: 14, letterSpacing: 1 }}>SAVED ENTRIES ({gcEntries.length})</h3>
            {gcEntries.map(entry => (
              <div key={entry.id} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: 18, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <span style={{ color: "#9898B3", fontSize: 12 }}>{entry.date}</span>
                  <button type="button" onClick={() => deleteGcEntry(entry.id)}
                    style={{ background: "none", border: "none", color: "#9898B3", cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                </div>
                {entry.connection && <div style={{ marginBottom: 8 }}><span style={{ color: "#3a7d56", fontWeight: 700, fontSize: 11 }}>CONNECTION: </span><span style={{ color: "#F2F2F8", fontSize: 13 }}>{entry.connection}</span></div>}
                {entry.burden && <div style={{ marginBottom: 8 }}><span style={{ color: "#6B4FBB", fontWeight: 700, fontSize: 11 }}>BURDEN: </span><span style={{ color: "#F2F2F8", fontSize: 13 }}>{entry.burden}</span></div>}
                {entry.step && <div><span style={{ color: "#9898B3", fontWeight: 700, fontSize: 11 }}>RESPONSE: </span><span style={{ color: "#F2F2F8", fontSize: 13 }}>{entry.step}</span></div>}
              </div>
            ))}
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
