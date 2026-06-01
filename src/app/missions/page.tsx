"use client";

import { useState, useEffect } from "react";
import { Globe, Heart, Users, ChevronRight, MapPin, Flame, BookOpen, CheckCircle2 } from "lucide-react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const stats = [
  { label: "Unreached people groups", value: "7,400+", note: "With little to no access to the Gospel" },
  { label: "People without Scripture", value: "1.5B", note: "In their native language" },
  { label: "Countries with church planting movements", value: "70+", note: "Active movements right now" },
  { label: "Vine missionaries connected", value: "4,200", note: "In 93 countries" },
];

const regions = [
  {
    name: "10/40 Window",
    description: "The band between 10°N and 40°N latitude — home to the majority of the world's unreached people groups and least-evangelized nations.",
    countries: ["Afghanistan", "Pakistan", "India", "China", "Iran", "Iraq", "Saudi Arabia", "North Korea"],
    color: "#EF4444",
    urgency: "Critical",
  },
  {
    name: "Sub-Saharan Africa",
    description: "Explosive church growth meets complex challenges — poverty, political instability, and syncretism requiring deep discipleship.",
    countries: ["South Sudan", "Somalia", "Mali", "Niger", "Burkina Faso", "Chad"],
    color: "#F59E0B",
    urgency: "High",
  },
  {
    name: "Southeast Asia",
    description: "Buddhist and Muslim majority nations with growing house church movements and incredible receptivity in some areas.",
    countries: ["Myanmar", "Cambodia", "Thailand", "Vietnam", "Laos", "Bangladesh"],
    color: "#6B4FBB",
    urgency: "High",
  },
  {
    name: "Post-Soviet Central Asia",
    description: "Formerly atheist, now predominantly Muslim — these nations have some of the least evangelical presence per capita on earth.",
    countries: ["Kazakhstan", "Uzbekistan", "Tajikistan", "Kyrgyzstan", "Turkmenistan", "Azerbaijan"],
    color: "#3B82F6",
    urgency: "Critical",
  },
];

const ways = [
  {
    icon: "🙏",
    title: "Pray",
    description: "The most powerful thing you can do. Join our Global Prayer Wall and pray specifically for unreached people groups using the Operation World database.",
    action: "Go to Prayer Wall",
    href: "/prayer",
    color: "#00FF88",
  },
  {
    icon: "💰",
    title: "Give",
    description: "Support vetted missionaries and organizations working in hard-to-reach places. 100% of designated giving goes directly to the field.",
    action: "Explore Giving",
    href: "/giving",
    color: "#10B981",
  },
  {
    icon: "✈️",
    title: "Go",
    description: "Short-term trips, long-term commitments, business as mission, and tentmaking opportunities. Find the right fit for your season.",
    action: "Find Opportunities",
    href: "/events",
    color: "#6B4FBB",
  },
  {
    icon: "📢",
    title: "Send",
    description: "You might not go — but you can send. Partner with missionaries in your network through prayer, financial support, and community.",
    action: "Connect with Missionaries",
    href: "/global-connect",
    color: "#EC4899",
  },
  {
    icon: "🌐",
    title: "Reach Locally",
    description: "There are unreached people in every city. Diaspora communities, international students, and refugees near you need the Gospel too.",
    action: "Local Outreach Resources",
    href: "/resources",
    color: "#F59E0B",
  },
  {
    icon: "📖",
    title: "Translate",
    description: "Bible translation, language learning, and literacy programs. Every language deserves Scripture — and there's a place for your skills.",
    action: "Translation Resources",
    href: "/resources",
    color: "#3B82F6",
  },
];

const spotlights = [
  {
    name: "Isabella & Marcos Ferreira",
    flag: "🇧🇷",
    location: "Nampula Province, Mozambique",
    avatar: "IF",
    color: "#00FF88",
    role: "Church planters",
    summary: "3 years in. 4 churches planted. 180 new believers baptized. Still going.",
    update: "We just trained 12 local pastors who will each plant their own churches this year. The harvest is real.",
  },
  {
    name: "Min-Jun Cho",
    flag: "🇰🇷",
    location: "Mongolia",
    avatar: "MJ",
    color: "#6B4FBB",
    role: "Bible translator",
    summary: "Working on the first Buryat Bible translation — a dialect spoken by 300,000 people.",
    update: "Completed the New Testament last month. Started Genesis. This is the work of a lifetime.",
  },
  {
    name: "Fatima Al-Rashid",
    flag: "🇱🇧",
    location: "Lebanon/Syria border region",
    avatar: "FA",
    color: "#EF4444",
    role: "Relief worker & evangelist",
    summary: "Serving Syrian refugees through food, medical care, and the Word of God.",
    update: "Over 40 families came to faith this quarter — many former Muslims. God is moving in the darkness.",
  },
];

const MISSIONS_THEOLOGY = [
  {
    id: 1,
    title: "The Great Commission",
    icon: "🌍",
    scripture: "Matthew 28:18-20",
    description: "Jesus' final command to his disciples was not a suggestion — it was a mandate. 'Go and make disciples of all nations' frames every legitimate mission effort. The authority behind it is total (all authority in heaven and earth), the scope is global (all nations), and the promise sustains it (I am with you always). This is the charter of the Church.",
  },
  {
    id: 2,
    title: "The Missio Dei",
    icon: "✝️",
    scripture: "John 20:21",
    description: "Mission belongs first to God, not the Church. The Father sent the Son; the Son sends the Spirit; the Spirit sends the Church. We are not the originators of mission — we are participants in something God has been doing from eternity. This reframes missions from a program to a posture: we join what God is already doing among the nations.",
  },
  {
    id: 3,
    title: "The Unreached",
    icon: "🔦",
    scripture: "Romans 10:14",
    description: "An unreached people group has no indigenous church with the resources to evangelize the rest of its people. Today, roughly 3 billion people live in these groups. The question Paul raises is still piercing: 'How can they believe in the one of whom they have not heard? And how can they hear without someone preaching to them?' The unreached are not unimportant to God — they are the focal point of his heart.",
  },
  {
    id: 4,
    title: "Cultural Respect in Missions",
    icon: "🤝",
    scripture: "1 Corinthians 9:22",
    description: "Paul became 'all things to all people' to win some — not by compromising the Gospel but by removing unnecessary cultural barriers to it. Contextualization asks: what forms of language, worship, and community best communicate the unchanging truth in a given culture? Done well, it accelerates reception. Done poorly, it produces syncretism. Both extremes — isolation and assimilation — betray the mission.",
  },
  {
    id: 5,
    title: "The Role of Prayer in Missions",
    icon: "🙏",
    scripture: "Matthew 9:37-38",
    description: "Before Jesus sent workers, he told his disciples to pray for workers. Prayer is not a preparation for mission — it is mission. Every breakthrough in church history was preceded by sustained intercession. The harvest belongs to God; we ask the Lord of the harvest to send laborers. Prayer is the strategy behind every strategy.",
  },
];

const MISSIONS_INVOLVE = [
  {
    id: 1,
    level: "Pray",
    icon: "🙏",
    commitment: "Daily, ongoing",
    title: "Intercede for the Nations",
    description: "The simplest and most profound way to engage. Use Operation World or the Joshua Project to pray through one unreached people group per day. Your prayers move heaven and change history.",
    examples: ["Pray through the 10/40 Window daily", "Join Vine's Global Prayer Wall", "Adopt a specific unreached people group in prayer", "Pray for missionaries by name"],
  },
  {
    id: 2,
    level: "Give",
    icon: "💸",
    commitment: "Monthly financial support",
    title: "Fund the Frontlines",
    description: "Missionaries need financial partners who are consistent, committed, and prayerful. Even $25/month, multiplied across hundreds of supporters, funds full-time workers in some of the hardest places on earth.",
    examples: ["Support a Vine-vetted missionary directly", "Give to Bible translation projects", "Fund church planting in unreached regions", "Support relief and development ministries"],
  },
  {
    id: 3,
    level: "Go Short-Term",
    icon: "✈️",
    commitment: "1-2 week trip",
    title: "Experience the Field",
    description: "A short-term trip, done well, can permanently reorient your life around the Great Commission. Go to learn, serve, and be changed — not just to help. Come back a better sender and a more informed prayer warrior.",
    examples: ["Join a Vine mission trip to Southeast Asia or Africa", "Partner with long-term workers already on the field", "Work with diaspora communities internationally", "Medical, education, or construction projects"],
  },
  {
    id: 4,
    level: "Go Long-Term",
    icon: "🌱",
    commitment: "2+ years",
    title: "Plant Your Life Among the Nations",
    description: "Long-term missionaries are the backbone of the Great Commission. Language learning, cultural integration, and deep relationship-building take years. If God is calling you — go. The Church needs workers who will stay.",
    examples: ["Church planting in unreached areas", "Bible translation and literacy work", "Tentmaking and business as mission", "Training and discipling local leaders"],
  },
  {
    id: 5,
    level: "Send",
    icon: "📦",
    commitment: "Equip others",
    title: "Mobilize Your Community",
    description: "For every missionary on the field, there should be dozens of senders behind them. Sending means more than money — it means pastoral care, practical support, and holding the rope while others go.",
    examples: ["Host a missionary during their home assignment", "Organize a missions Sunday at your church", "Build a sending team around a specific missionary", "Provide logistical and administrative support"],
  },
  {
    id: 6,
    level: "Advocate",
    icon: "📣",
    commitment: "Raise awareness locally",
    title: "Awaken Your Church",
    description: "Many Christians have never heard a compelling vision for the unreached. You can change that. Advocate for missions in your church, small group, and network. Bring the world into your community's vision.",
    examples: ["Host a missions night with stories from the field", "Share unreached people group profiles on social media", "Invite missionaries to speak at your church", "Start a missions committee or prayer team"],
  },
];

const VOICES_MISS = [
  {
    id: 1,
    name: "William Carey",
    era: "1761–1834",
    context: "England / India",
    bio: "A cobbler-turned-missionary who became the father of modern Protestant missions. Carey's 1792 sermon — 'Expect great things from God; attempt great things for God' — launched the modern missions movement. He spent 41 years in India translating the Bible into dozens of languages and dialects.",
    quote: "Expect great things from God; attempt great things for God.",
    contribution: "Pioneered the modern missions movement and demonstrated that ordinary believers could cross cultures with the Gospel.",
  },
  {
    id: 2,
    name: "Hudson Taylor",
    era: "1832–1905",
    context: "England / China",
    bio: "Founder of the China Inland Mission, Taylor was the first missionary to take the Gospel into China's interior. He adopted Chinese dress and culture — controversial at the time — to remove unnecessary barriers. His dependence on God for provision rather than guaranteed salaries shaped mission organizations for generations.",
    quote: "God's work done in God's way will never lack God's supply.",
    contribution: "Founded faith-based missions and proved that contextual identification with a culture accelerates the Gospel.",
  },
  {
    id: 3,
    name: "Amy Carmichael",
    era: "1867–1951",
    context: "Ireland / India",
    bio: "Amy Carmichael spent 55 years in India without furlough, rescuing children from temple prostitution and building the Dohnavur Fellowship. Her life was marked by suffering, service, and unwavering joy. Her writings on sacrifice and love remain among the most powerful in missionary literature.",
    quote: "You can give without loving, but you cannot love without giving.",
    contribution: "Demonstrated that compassion ministry and evangelism belong together, and that long-term sacrifice produces deep transformation.",
  },
  {
    id: 4,
    name: "Jim Elliot",
    era: "1927–1956",
    context: "USA / Ecuador",
    bio: "Jim Elliot was killed in 1956 while attempting to reach the Huaorani people of Ecuador — along with four fellow missionaries. His death ignited a generation of mission recruits. His wife Elisabeth later returned to the Huaorani and saw many come to faith. His journal entry has become one of the most quoted sentences in missions history.",
    quote: "He is no fool who gives what he cannot keep to gain what he cannot lose.",
    contribution: "His martyrdom proved that the blood of missionaries is seed — and that no sacrifice for the Gospel is wasted.",
  },
  {
    id: 5,
    name: "Lesslie Newbigin",
    era: "1909–1998",
    context: "England / India / Global Church",
    bio: "A bishop, theologian, and missiologist who served decades in India before returning to a secularizing West and realizing that the West itself had become a mission field. Newbigin's work — especially 'The Gospel in a Pluralist Society' — reshaped how the Church thinks about its public witness in post-Christian culture.",
    quote: "The Church is the only society that exists for the benefit of those who are not its members.",
    contribution: "Reframed the Western church as a missionary church and developed the missional theology that animates much of contemporary church planting.",
  },
];

type Tab = "regions" | "theology" | "getting-involved" | "voices";

export default function MissionsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("regions");
  const [selectedVoice, setSelectedVoice] = useState(VOICES_MISS[0]);

  const [prayedRegions, setPrayedRegions] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_missions_regions"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [followedMissionaries, setFollowedMissionaries] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_missions_followed"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [prayedMissionaries, setPrayedMissionaries] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_missions_prayed"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_missions_regions", JSON.stringify([...prayedRegions])); } catch {}
  }, [prayedRegions]);
  useEffect(() => {
    try { localStorage.setItem("vine_missions_followed", JSON.stringify([...followedMissionaries])); } catch {}
  }, [followedMissionaries]);
  useEffect(() => {
    try { localStorage.setItem("vine_missions_prayed", JSON.stringify([...prayedMissionaries])); } catch {}
  }, [prayedMissionaries]);

  const toggleRegionPrayer = (i: number) => {
    setPrayedRegions((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const toggleFollow = (i: number) => {
    setFollowedMissionaries((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const toggleMissionaryPrayer = (i: number) => {
    setPrayedMissionaries((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className="min-h-screen" style={{ background: BG, color: TEXT }}>
      <div className="pb-20" style={{ paddingTop: 40 }}>
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe size={22} style={{ color: GREEN }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>Global Missions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              Make disciples of{" "}
              <span style={{ background: "linear-gradient(135deg, #00FF88, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                all nations.
              </span>
            </h1>
            <p className="text-lg mb-8" style={{ color: "#6A6A88" }}>
              Matthew 28:19 isn&apos;t a suggestion. It&apos;s the marching order of the Church. Here&apos;s what&apos;s happening on the ground — and how you can be part of it.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-2xl font-black mb-0.5" style={{ color: GREEN }}>{s.value}</p>
                  <p className="text-xs font-semibold mb-1" style={{ color: TEXT }}>{s.label}</p>
                  <p className="text-xs" style={{ color: "#4A4A68" }}>{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex gap-2 flex-wrap" style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 6, display: "inline-flex" }}>
            {(["regions", "theology", "getting-involved", "voices"] as const).map(t => (
              <button key={t} onClick={() => setActiveTab(t)}
                style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                {t === "regions" ? "Regions" : t === "theology" ? "Theology" : t === "getting-involved" ? "Getting Involved" : "Voices"}
              </button>
            ))}
          </div>
        </div>

        {/* Regions Tab */}
        {activeTab === "regions" && (
          <div>
            {/* 6 Ways to engage */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
              <h2 className="text-2xl font-black mb-8" style={{ color: TEXT }}>6 Ways to Engage the Great Commission</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ways.map((w) => (
                  <div key={w.title} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-3xl mb-3 block">{w.icon}</span>
                    <h3 className="font-black text-xl mb-2" style={{ color: TEXT }}>{w.title}</h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: "#6A6A88" }}>{w.description}</p>
                    <a href={w.href} className="flex items-center gap-1 text-sm font-bold" style={{ color: w.color }}>
                      {w.action} <ChevronRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Unreached Regions */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
              <h2 className="text-2xl font-black mb-3" style={{ color: TEXT }}>Priority Regions</h2>
              <p className="text-base mb-8" style={{ color: "#6A6A88" }}>Where the need — and the harvest — is greatest.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {regions.map((r, i) => {
                  const prayed = prayedRegions.has(i);
                  return (
                    <div key={r.name} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${prayed ? r.color + "40" : r.color + "25"}` }}>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-black text-lg" style={{ color: TEXT }}>{r.name}</h3>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${r.color}15`, color: r.color }}>
                          {r.urgency}
                        </span>
                      </div>
                      <p className="text-sm mb-4 leading-relaxed" style={{ color: "#6A6A88" }}>{r.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {r.countries.map((c) => (
                          <span key={c} className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${r.color}10`, color: r.color }}>
                            {c}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => toggleRegionPrayer(i)}
                        className="flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-xl transition-all"
                        style={{
                          background: prayed ? `${r.color}15` : "transparent",
                          border: `1px solid ${prayed ? r.color + "50" : r.color + "30"}`,
                          color: r.color,
                        }}
                      >
                        {prayed ? <CheckCircle2 size={14} /> : <Heart size={14} />}
                        {prayed ? "🙏 Praying for this region" : "Pray for this region"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Missionary Spotlights */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
              <h2 className="text-2xl font-black mb-8" style={{ color: TEXT }}>Missionary Spotlights</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {spotlights.map((s, i) => {
                  const following = followedMissionaries.has(i);
                  const prayed = prayedMissionaries.has(i);
                  return (
                    <div key={s.name} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black" style={{ background: `${s.color}25`, color: s.color, border: `2px solid ${s.color}30` }}>
                          {s.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-sm" style={{ color: TEXT }}>{s.name} {s.flag}</p>
                          <p className="text-xs" style={{ color: "#6A6A88" }}>{s.role} · {s.location}</p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold mb-3" style={{ color: "#C0C0D8" }}>{s.summary}</p>
                      <div className="p-3 rounded-xl mb-4" style={{ background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.1)" }}>
                        <p className="text-xs font-bold mb-1" style={{ color: GREEN }}>Latest Update</p>
                        <p className="text-sm italic" style={{ color: "#8A8AA8" }}>&ldquo;{s.update}&rdquo;</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleMissionaryPrayer(i)}
                          className="flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all"
                          style={{
                            background: prayed ? "rgba(0,255,136,0.12)" : "transparent",
                            border: `1px solid ${prayed ? "rgba(0,255,136,0.4)" : "rgba(0,255,136,0.2)"}`,
                            color: GREEN,
                          }}
                        >
                          🙏 {prayed ? "Praying" : "Pray"}
                        </button>
                        <button
                          onClick={() => toggleFollow(i)}
                          className="flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all"
                          style={{
                            background: following ? `${s.color}15` : "transparent",
                            border: `1px solid ${following ? s.color + "50" : s.color + "30"}`,
                            color: s.color,
                          }}
                        >
                          {following ? "✓ Following" : "Follow"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Great Commission CTA */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(16,185,129,0.06) 100%)", border: "1px solid rgba(0,255,136,0.15)" }}>
                <p className="text-xl italic mb-2" style={{ color: "#C0C0D8" }}>
                  &ldquo;Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.&rdquo;
                </p>
                <p className="font-bold mb-8" style={{ color: GREEN }}>— Matthew 28:19</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="/prayer" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-black" style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}>
                    🙏 Pray for the Nations
                  </a>
                  <a href="/global-connect" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#C0C0D8" }}>
                    Connect with Missionaries
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Theology Tab */}
        {activeTab === "theology" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl font-black mb-2" style={{ color: TEXT }}>The Theology of Missions</h2>
              <p className="text-base" style={{ color: MUTED }}>Why we go, what we believe, and the biblical foundation beneath every missionary journey.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {MISSIONS_THEOLOGY.map((entry) => (
                <div key={entry.id} className="rounded-2xl p-7" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span style={{ fontSize: 28 }}>{entry.icon}</span>
                    <div>
                      <h3 className="font-black text-lg" style={{ color: TEXT }}>{entry.title}</h3>
                      <span className="text-xs font-bold" style={{ color: GREEN }}>{entry.scripture}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{entry.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Getting Involved Tab */}
        {activeTab === "getting-involved" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl font-black mb-2" style={{ color: TEXT }}>Getting Involved</h2>
              <p className="text-base" style={{ color: MUTED }}>Every follower of Jesus has a role in the Great Commission. Find yours.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {MISSIONS_INVOLVE.map((item) => (
                <div key={item.id} className="rounded-2xl p-6 flex flex-col" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                  <div className="flex items-center justify-between mb-3">
                    <span style={{ fontSize: 26 }}>{item.icon}</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${PURPLE}22`, color: PURPLE }}>
                      {item.commitment}
                    </span>
                  </div>
                  <div className="mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>{item.level}</span>
                  </div>
                  <h3 className="font-black text-base mb-2" style={{ color: TEXT }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED, flex: 1 }}>{item.description}</p>
                  <ul className="flex flex-col gap-1.5">
                    {item.examples.map((ex, ei) => (
                      <li key={ei} className="flex items-start gap-2 text-xs" style={{ color: "#8A8AA8" }}>
                        <span style={{ color: GREEN, marginTop: 1 }}>›</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Voices Tab */}
        {activeTab === "voices" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl font-black mb-2" style={{ color: TEXT }}>Voices from Church History</h2>
              <p className="text-base" style={{ color: MUTED }}>The missionaries and missiologists whose lives and words still shape us today.</p>
            </div>
            <div className="flex gap-6" style={{ flexDirection: "row", alignItems: "flex-start" }}>
              {/* Left panel: list */}
              <div className="flex flex-col gap-3" style={{ minWidth: 260, width: 260, flexShrink: 0 }}>
                {VOICES_MISS.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVoice(v)}
                    className="text-left rounded-xl p-4 transition-all"
                    style={{
                      background: selectedVoice.id === v.id ? `${PURPLE}22` : "transparent",
                      border: `1px solid ${selectedVoice.id === v.id ? PURPLE : BORDER}`,
                      cursor: "pointer",
                    }}
                  >
                    <p className="font-bold text-sm mb-0.5" style={{ color: selectedVoice.id === v.id ? TEXT : MUTED }}>{v.name}</p>
                    <p className="text-xs" style={{ color: "#6A6A88" }}>{v.era} · {v.context}</p>
                  </button>
                ))}
              </div>
              {/* Right panel: detail */}
              <div className="flex-1 rounded-2xl p-8" style={{ background: CARD, border: `1px solid ${BORDER}`, position: "sticky", top: 24 }}>
                <div className="mb-6">
                  <h3 className="text-2xl font-black mb-1" style={{ color: TEXT }}>{selectedVoice.name}</h3>
                  <p className="text-sm font-semibold" style={{ color: GREEN }}>{selectedVoice.era} · {selectedVoice.context}</p>
                </div>
                <blockquote className="rounded-xl p-5 mb-6" style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}30` }}>
                  <p className="text-base italic font-semibold leading-relaxed" style={{ color: TEXT }}>
                    &ldquo;{selectedVoice.quote}&rdquo;
                  </p>
                </blockquote>
                <p className="text-sm leading-relaxed mb-5" style={{ color: MUTED }}>{selectedVoice.bio}</p>
                <div className="rounded-xl p-4" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20` }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: GREEN }}>Key Contribution</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#C0C0D8" }}>{selectedVoice.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
