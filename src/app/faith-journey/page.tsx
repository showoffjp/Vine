"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import React, { useState, useEffect } from "react";
import { Sparkles, Plus, X, Edit2, Trash2, MapPin, Calendar, Heart, BookOpen, Star, Zap, Users, Music, Globe } from "lucide-react";

interface Milestone {
  id: string;
  year: number;
  month: number;
  title: string;
  description: string;
  category: string;
  verse?: string;
  verseRef?: string;
  significance: 1 | 2 | 3;
}

const CATEGORIES = [
  { id: "salvation", label: "Salvation / Conversion", icon: "✨", color: "#3a7d56" },
  { id: "baptism", label: "Baptism", icon: "💧", color: "#3B82F6" },
  { id: "calling", label: "Calling / Vocation", icon: "📣", color: "#F59E0B" },
  { id: "trial", label: "Trial / Dark Season", icon: "⛈️", color: "#6B7280" },
  { id: "breakthrough", label: "Breakthrough / Healing", icon: "🌅", color: "#10B981" },
  { id: "community", label: "Church / Community", icon: "🏛️", color: "#6B4FBB" },
  { id: "scripture", label: "Scripture Encounter", icon: "📖", color: "#EC4899" },
  { id: "marriage", label: "Marriage / Family", icon: "💍", color: "#F97316" },
  { id: "serving", label: "Serving / Ministry", icon: "🤝", color: "#14B8A6" },
  { id: "mission", label: "Missions / Outreach", icon: "🌍", color: "#EF4444" },
  { id: "prayer", label: "Prayer Experience", icon: "🙏", color: "#8B5CF6" },
  { id: "other", label: "Other", icon: "⭐", color: "#8A8AA8" },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const seedMilestones: Milestone[] = [
  {
    id: "m-001",
    year: 2012,
    month: 3,
    title: "Said yes to Jesus at youth camp",
    description: "At 16, I heard the Gospel clearly for the first time at a summer camp in Colorado. During the final night altar call, everything clicked. I gave my life to Christ at 11:40pm on a Thursday. I still remember the stars.",
    category: "salvation",
    verse: "For God so loved the world that he gave his one and only Son...",
    verseRef: "John 3:16",
    significance: 3,
  },
  {
    id: "m-002",
    year: 2012,
    month: 8,
    title: "Baptized at my home church",
    description: "Two months after camp, I was baptized in front of my whole family — including my dad who wasn't a believer yet. He cried. That moment planted a seed.",
    category: "baptism",
    verse: "We were therefore buried with him through baptism into death...",
    verseRef: "Romans 6:4",
    significance: 3,
  },
  {
    id: "m-003",
    year: 2014,
    month: 9,
    title: "Season of doubt in college",
    description: "Freshman year philosophy courses and a difficult breakup sent me into a two-year period of serious doubt. I questioned everything. It was the loneliest season of my faith — but looking back, it was where my faith became truly mine and not just inherited.",
    category: "trial",
    significance: 2,
  },
  {
    id: "m-004",
    year: 2016,
    month: 4,
    title: "C.S. Lewis pulled me back",
    description: "Reading Mere Christianity at 2am in my dorm was the turning point. Lewis anticipated every objection I had. I finished the book in three days and prayed for the first time in 18 months. I came back — different, but more convinced.",
    category: "scripture",
    verse: "I believe in Christianity as I believe that the sun has risen.",
    verseRef: "C.S. Lewis",
    significance: 2,
  },
  {
    id: "m-005",
    year: 2018,
    month: 6,
    title: "Married Sarah",
    description: "The best day of my life. We wrote our own vows using Ephesians 5 as the framework. Our pastor said something at the ceremony I've never forgotten: 'A Christian marriage is a parable of the Gospel being acted out in public every day.'",
    category: "marriage",
    verse: "Love is patient, love is kind...",
    verseRef: "1 Corinthians 13:4",
    significance: 3,
  },
  {
    id: "m-006",
    year: 2019,
    month: 11,
    title: "First mission trip — Guatemala",
    description: "Ten days in rural Guatemala building a school alongside a church planting team. I've never felt more alive in my faith. Watching believers worship with nothing, with more joy than I've ever had with everything, rewired something in me.",
    category: "mission",
    verse: "Go and make disciples of all nations...",
    verseRef: "Matthew 28:19",
    significance: 2,
  },
  {
    id: "m-007",
    year: 2021,
    month: 2,
    title: "Lost my job in COVID restructuring",
    description: "Unemployed for 7 months. The hardest financial season of my life. But it was also when I prayed more, read more, and learned what it meant to actually trust God with provision — not just say I did.",
    category: "trial",
    significance: 2,
  },
  {
    id: "m-008",
    year: 2022,
    month: 1,
    title: "Dad came to faith",
    description: "My father, who wept at my baptism 10 years earlier but never made a decision himself, called me on New Year's Day and said 'I think I finally understand what you've been telling me.' He prayed with me over the phone. 10 years of prayer, answered.",
    category: "breakthrough",
    verse: "The Lord is not slow in keeping his promise...",
    verseRef: "2 Peter 3:9",
    significance: 3,
  },
  {
    id: "m-009",
    year: 2023,
    month: 7,
    title: "Started leading a men's discipleship group",
    description: "Six guys from our church, meeting every Tuesday at 6am. It's been harder than anything I've done — and more rewarding. I'm learning you can't give what you don't have, which is making me go deeper myself.",
    category: "serving",
    significance: 1,
  },
  {
    id: "m-010",
    year: 2024,
    month: 5,
    title: "Joined Vine community",
    description: "Found this community after a podcast episode. The discussions, stories, and daily content have become part of my routine. Finally found people asking the questions I've been asking.",
    category: "community",
    significance: 1,
  },
];

const JOURNEY_SCRIPTURE = [
  {
    id: "phil-1-6",
    ref: "Philippians 1:6",
    text: "He who began a good work in you will carry it on to completion until the day of Christ Jesus.",
    theme: "God's Faithfulness",
    reflection: "Your faith journey is not your own project — it is God's project in you. The same God who started the work is committed to finishing it. This promise is the foundation of perseverance: not your grip on God, but his grip on you.",
  },
  {
    id: "heb-12-1-2",
    ref: "Hebrews 12:1–2",
    text: "Let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith.",
    theme: "Perseverance",
    reflection: "The Christian life is a long-distance race, not a sprint. The great cloud of witnesses — every believer who has run before us — urges us forward. The key is not our strength but our gaze: fixing our eyes on Jesus, not on the obstacles or our own performance.",
  },
  {
    id: "2cor-3-18",
    ref: "2 Corinthians 3:18",
    text: "We all, who with unveiled faces contemplate the Lord's glory, are being transformed into his image with ever-increasing glory.",
    theme: "Transformation",
    reflection: "Spiritual formation is not self-improvement — it is beholding. As we contemplate who Jesus is, we are gradually shaped into his likeness. This is why Scripture reading, prayer, and worship are not obligations to fulfill but means of transformation to embrace.",
  },
  {
    id: "rom-8-28-29",
    ref: "Romans 8:28–29",
    text: "We know that in all things God works for the good of those who love him... to be conformed to the image of his Son.",
    theme: "Conforming to Christ",
    reflection: "God's definition of 'good' in this passage is not comfort or ease — it is Christlikeness. Every trial, every season of darkness, every unanswered question is being woven by God into the pattern of a life that looks more and more like Jesus.",
  },
  {
    id: "psalm-23",
    ref: "Psalm 23",
    text: "The LORD is my shepherd; I shall not want. Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.",
    theme: "God's Presence",
    reflection: "This beloved psalm covers the full range of the faith journey: green pastures and still waters, but also dark valleys. The promise is not the absence of the valley — it is the presence of the Shepherd. He does not lead us around the dark places; he walks through them with us.",
  },
  {
    id: "john-15-4-5",
    ref: "John 15:4–5",
    text: "Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. Apart from me you can do nothing.",
    theme: "Abiding",
    reflection: "The metaphor of vine and branches is the heart of the spiritual life. Fruitfulness is not the result of effort but of connection. The branch does not strain to produce fruit — it abides, and fruit comes naturally from union with the vine. This is why the rhythm of prayer, Word, and community is not optional equipment but life itself.",
  },
];

const FAITH_MODELS = [
  {
    id: "augustine",
    name: "Augustine of Hippo",
    era: "354–430 AD",
    bio: "Born in North Africa, Augustine lived a life of intellectual brilliance and moral disorder — a decade of concubinage, a son born out of wedlock, and years pursuing Manichaeism and Neoplatonism before his dramatic conversion in a Milan garden in 386 AD. His Confessions is the first spiritual autobiography in history and one of the most honest books ever written.",
    key_lesson: "God pursues us even when we are running the other direction. Our restlessness is a signal, not a flaw.",
    quote: "Our heart is restless, until it repose in Thee.",
  },
  {
    id: "newton",
    name: "John Newton",
    era: "1725–1807",
    bio: "A British sailor who became a slave trader — one of the most morally degraded professions of his era. After a terrifying storm at sea in 1748, Newton cried out to God and experienced conversion. He eventually left the slave trade, was ordained, and became one of the great hymn writers and abolitionists of English history, collaborating with William Wilberforce to end the British slave trade.",
    key_lesson: "No past is so dark that God's grace cannot reach it. Newton's story is the gospel in biography.",
    quote: "Amazing grace, how sweet the sound, that saved a wretch like me.",
  },
  {
    id: "ten-boom",
    name: "Corrie ten Boom",
    era: "1892–1983",
    bio: "A Dutch watchmaker's daughter who hid Jewish refugees in Nazi-occupied Holland during World War II. Betrayed and arrested, she was sent to Ravensbrück concentration camp, where she watched her beloved sister Betsie die. Released on a clerical error days before all women her age were executed, she spent the rest of her life traveling the world preaching forgiveness — including to former Nazi guards.",
    key_lesson: "Forgiveness is not a feeling but a choice — and it is possible only when we place the pain in God's hands.",
    quote: "There is no pit so deep that God's love is not deeper still.",
  },
  {
    id: "lewis",
    name: "C.S. Lewis",
    era: "1898–1963",
    bio: "An Oxford literature professor who lost his mother at nine, lost his faith in the trenches of World War I, and spent twenty years as a convinced atheist before being argued reluctantly into theism, then Christianity. His journey — which he called being 'dragged kicking and screaming' into the kingdom — gave him unmatched insight into both doubt and faith.",
    key_lesson: "Intellectual honesty and faith are not enemies. Following the argument where it leads can lead to God.",
    quote: "I believe in Christianity as I believe that the sun has risen — not only because I see it, but because by it I see everything else.",
  },
  {
    id: "merton",
    name: "Thomas Merton",
    era: "1915–1968",
    bio: "Born in France to bohemian artist parents, Merton lived a dissolute secular life at Cambridge and Columbia before a dramatic conversion in 1938. Three years later, he entered the Trappist Abbey of Gethsemani in Kentucky and became one of the most widely read Catholic writers of the 20th century. His autobiography The Seven Storey Mountain sold over a million copies.",
    key_lesson: "The contemplative life is not an escape from the world but the deepest engagement with what is real.",
    quote: "The biggest human temptation is to settle for too little.",
  },
];

const JOURNEY_GUIDE = [
  {
    id: "awakening",
    phase: "Phase 1: Awakening",
    icon: "🌅",
    description: "The initial stirring of spiritual hunger — questions about meaning, moments of transcendence, the sense that there is more to life than what can be seen. This phase often involves attending church, reading, or encountering Christians whose lives raise questions.",
    practices: [
      "Read the Gospel of John slowly, one chapter at a time",
      "Ask honest questions without fear of the answers",
      "Spend time in nature and notice what it evokes",
      "Attend a church service with an open posture",
    ],
    scripture: "Romans 1:20 — His invisible qualities are clearly seen through what has been made.",
  },
  {
    id: "new-life",
    phase: "Phase 2: New Life",
    icon: "🌱",
    description: "The early days after conversion — marked by joy, new community, rapid spiritual growth, and often idealism. This phase is precious but not permanent. The goal is to build habits of Word, prayer, and community that will sustain the journey through harder seasons ahead.",
    practices: [
      "Get baptized as a public declaration of faith",
      "Join a small group or discipleship relationship",
      "Begin a regular Bible reading habit",
      "Find a mentor who is further along in faith",
    ],
    scripture: "2 Corinthians 5:17 — If anyone is in Christ, the new creation has come.",
  },
  {
    id: "growth-testing",
    phase: "Phase 3: Growth & Testing",
    icon: "⚔️",
    description: "A longer season of intentional formation interspersed with trials that test what you actually believe. Faith is no longer just inherited or emotional — it is being hammered on the anvil of real life. This phase often includes deeper Bible study, service, and the first serious suffering.",
    practices: [
      "Study systematic theology or a good Bible overview",
      "Begin serving in a consistent ministry role",
      "Practice spiritual disciplines: fasting, solitude, journaling",
      "Work through a discipleship curriculum with accountability",
    ],
    scripture: "James 1:3-4 — The testing of your faith produces perseverance.",
  },
  {
    id: "dark-night",
    phase: "Phase 4: Dark Night",
    icon: "🌑",
    description: "Named by John of the Cross, the dark night of the soul is a season of spiritual dryness, apparent absence of God, and often external crisis. Prayer feels empty, worship feels mechanical, and earlier certainties are questioned. This is not a sign of failure — it is often a sign of depth. God is stripping away lesser things to create space for deeper union.",
    practices: [
      "Do not abandon the practices even when they feel fruitless",
      "Find a spiritual director or wise pastor to walk with you",
      "Read the Psalms of lament — you are in good company",
      "Resist the urge to resolve the darkness artificially",
    ],
    scripture: "Psalm 22:1 — My God, my God, why have you forsaken me? — yet he did not hide his face.",
  },
  {
    id: "maturity-fruit",
    phase: "Phase 5: Maturity & Fruit",
    icon: "🍇",
    description: "A season of settled, deep-rooted faith — less dramatic, less emotional, but more solid. Characterized by greater compassion, patience, and a concern for others' spiritual journeys. The fruit of decades of abiding: love, joy, peace. This is not the end of the journey but its fullest expression this side of eternity.",
    practices: [
      "Mentor and disciple those earlier in their journey",
      "Practice intercessory prayer as a primary ministry",
      "Simplify — prune distractions to deepen abiding",
      "Engage your community and culture with seasoned wisdom",
    ],
    scripture: "John 15:5 — Whoever abides in me and I in him bears much fruit.",
  },
];

const categoryMap = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
export default function FaithJourneyPage() {
  const currentYear = new Date().getFullYear();
  const [milestones, setMilestones] = useState<Milestone[]>(() => {
    try {
      const s = localStorage.getItem("vine_faith_journey");
      return s ? JSON.parse(s) : seedMilestones;
    } catch { return seedMilestones; }
  });

  const [showCompose, setShowCompose] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const [mainTab, setMainTab] = useState<"journey" | "scripture" | "models" | "guide" | "videos">("journey");
  const [expandedGuide, setExpandedGuide] = useState<string | null>(null);

  const [form, setForm] = useState<{ year: number; month: number; title: string; description: string; category: string; verse: string; verseRef: string; significance: 1 | 2 | 3 }>(() => {
    try { const s = localStorage.getItem("vine_faith_journey_draft"); return s ? JSON.parse(s) : { year: currentYear, month: new Date().getMonth() + 1, title: "", description: "", category: "other", verse: "", verseRef: "", significance: 2 }; } catch { return { year: currentYear, month: new Date().getMonth() + 1, title: "", description: "", category: "other", verse: "", verseRef: "", significance: 2 }; }
  });
  useEffect(() => {
    try { localStorage.setItem("vine_faith_journey_draft", JSON.stringify(form)); } catch {}
  }, [form]);

  useEffect(() => {
    try { localStorage.setItem("vine_faith_journey", JSON.stringify(milestones)); } catch {}
  }, [milestones]);

  const resetForm = () => {
    setForm({ year: currentYear, month: new Date().getMonth() + 1, title: "", description: "", category: "other", verse: "", verseRef: "", significance: 2 });
    setEditingId(null);
  };

  const handleSubmit = () => {
    if (!form.title.trim()) return;
    if (editingId) {
      setMilestones((prev) => prev.map((m) => m.id === editingId ? {
        ...m, year: form.year, month: form.month, title: form.title, description: form.description,
        category: form.category, verse: form.verse || undefined, verseRef: form.verseRef || undefined, significance: form.significance,
      } : m));
    } else {
      const newM: Milestone = {
        id: `m-${Date.now()}`,
        year: form.year, month: form.month, title: form.title, description: form.description,
        category: form.category, verse: form.verse || undefined, verseRef: form.verseRef || undefined, significance: form.significance,
      };
      setMilestones((prev) => [...prev, newM].sort((a, b) => a.year !== b.year ? a.year - b.year : a.month - b.month));
    }
    setShowCompose(false);
    resetForm();
  };

  const handleEdit = (m: Milestone) => {
    setForm({ year: m.year, month: m.month, title: m.title, description: m.description, category: m.category, verse: m.verse ?? "", verseRef: m.verseRef ?? "", significance: m.significance });
    setEditingId(m.id);
    setShowCompose(true);
  };

  const handleDelete = (id: string) => {
    setMilestones((prev) => prev.filter((m) => m.id !== id));
    setConfirmDelete(null);
  };

  const sorted = [...milestones].sort((a, b) => a.year !== b.year ? a.year - b.year : a.month - b.month);
  const years = [...new Set(sorted.map((m) => m.year))];
  const totalSignificance = milestones.reduce((s, m) => s + m.significance, 0);

  const significanceLabel = (s: 1 | 2 | 3) => s === 3 ? "Major milestone" : s === 2 ? "Significant moment" : "Notable moment";
  const significanceColor = (s: 1 | 2 | 3) => s === 3 ? "#3a7d56" : s === 2 ? "#6B4FBB" : "#4A4A68";

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="pb-20" style={{ paddingTop: 80 }}>

        {/* Hero */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 pt-2">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} style={{ color: "#3a7d56" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Faith Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Your story with{" "}
            <span style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              God.
            </span>
          </h1>
          <p className="text-lg mb-6 max-w-2xl" style={{ color: "#6A6A88" }}>
            Mark the moments that shaped your faith. Conversions, trials, breakthroughs, callings &mdash; every milestone is evidence of God&apos;s faithfulness.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "rgba(58,125,86,0.08)", border: "1px solid rgba(58,125,86,0.15)" }}>
              <Star size={13} style={{ color: "#3a7d56" }} />
              <span className="text-sm font-bold" style={{ color: "#3a7d56" }}>{milestones.length} milestones recorded</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "rgba(107,79,187,0.08)", border: "1px solid rgba(107,79,187,0.2)" }}>
              <Calendar size={13} style={{ color: "#6B4FBB" }} />
              <span className="text-sm font-bold" style={{ color: "#6B4FBB" }}>
                {years.length > 0 ? `${years[0]} – ${currentYear}` : `${currentYear}`}
              </span>
            </div>
          </div>
        </div>

        {/* Tab bar (GREEN underline style) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8" style={{ borderBottom: "1px solid #1E1E32" }}>
          <div style={{ display: "flex" }}>
            {(["journey", "scripture", "models", "guide", "videos"] as const).map(tab => (
              <button key={tab} onClick={() => setMainTab(tab)}
                style={{ background: "none", border: "none", borderBottom: mainTab === tab ? "2px solid #3a7d56" : "2px solid transparent", color: mainTab === tab ? "#F2F2F8" : "#9898B3", fontWeight: mainTab === tab ? 700 : 500, fontSize: 14, padding: "14px 18px", cursor: "pointer" }}>
                {tab === "journey" ? "My Journey" : tab === "scripture" ? "📖 Scripture" : tab === "models" ? "👤 Models" : tab === "guide" ? "📋 Guide" : "🎬 Videos"}
              </button>
            ))}
          </div>
        </div>

        {/* Journey tab */}
        {mainTab === "journey" && (
          <div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                onClick={() => { resetForm(); setShowCompose(true); }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm"
                style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)", color: "#07070F" }}
              >
                <Plus size={16} /> Add Milestone
              </button>
            </div>

            {/* Timeline */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              {sorted.length === 0 ? (
                <div className="text-center py-20" style={{ color: "#4A4A68" }}>
                  <Sparkles size={48} className="mx-auto mb-4 opacity-20" />
                  <p className="font-black text-lg mb-2" style={{ color: "#F2F2F8" }}>Your journey starts here</p>
                  <p className="text-sm">Add your first milestone to begin mapping your story with God.</p>
                </div>
              ) : (
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: "linear-gradient(to bottom, #3a7d56, #6B4FBB, rgba(107,79,187,0))" }} />

                  <div className="space-y-1">
                    {years.map((year) => {
                      const yearMilestones = sorted.filter((m) => m.year === year);
                      return (
                        <div key={year}>
                          {/* Year label */}
                          <div className="flex items-center gap-4 mb-2 mt-6 first:mt-0">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-black shrink-0 z-10 relative" style={{ background: "#07070F", border: "2px solid rgba(58,125,86,0.4)", color: "#3a7d56" }}>
                              {year}
                            </div>
                            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
                          </div>

                          {yearMilestones.map((m) => {
                            const cat = categoryMap[m.category] ?? categoryMap["other"];
                            return (
                              <div
                                key={m.id}
                                className="flex gap-4 pl-0 mb-4"
                                onMouseEnter={() => setHoveredId(m.id)}
                                onMouseLeave={() => setHoveredId(null)}
                              >
                                {/* Dot */}
                                <div className="shrink-0 w-12 flex justify-center">
                                  <div
                                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs z-10 relative mt-3"
                                    style={{
                                      background: `${cat.color}20`,
                                      border: `2px solid ${cat.color}60`,
                                      boxShadow: m.significance === 3 ? `0 0 12px ${cat.color}40` : "none",
                                    }}
                                  >
                                    <span style={{ fontSize: "10px" }}>{cat.icon}</span>
                                  </div>
                                </div>

                                {/* Card */}
                                <div
                                  className="flex-1 rounded-2xl p-5 transition-all"
                                  style={{
                                    background: m.significance === 3 ? `linear-gradient(135deg, ${cat.color}08 0%, rgba(0,0,0,0) 100%)` : "#12121F",
                                    border: m.significance === 3 ? `1px solid ${cat.color}25` : "1px solid #1E1E32",
                                  }}
                                >
                                  <div className="flex items-start justify-between gap-3 mb-2">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 flex-wrap mb-1">
                                        <span className="text-xs font-bold" style={{ color: "#4A4A68" }}>
                                          {MONTHS[m.month - 1]} {m.year}
                                        </span>
                                        <span
                                          className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                                          style={{ background: `${cat.color}15`, color: cat.color, border: `1px solid ${cat.color}30` }}
                                        >
                                          {cat.label}
                                        </span>
                                        <span className="text-[10px]" style={{ color: significanceColor(m.significance) }}>
                                          {"★".repeat(m.significance)}
                                        </span>
                                      </div>
                                      <h3 className="font-black text-base leading-tight" style={{ color: "#F2F2F8" }}>{m.title}</h3>
                                    </div>
                                    {hoveredId === m.id && (
                                      <div className="flex gap-1 shrink-0">
                                        <button onClick={() => handleEdit(m)} className="p-1.5 rounded-lg" style={{ color: "#4A4A68" }} title="Edit"><Edit2 size={13} /></button>
                                        <button onClick={() => setConfirmDelete(m.id)} className="p-1.5 rounded-lg" style={{ color: "#4A4A68" }} title="Delete"><Trash2 size={13} /></button>
                                      </div>
                                    )}
                                  </div>

                                  {m.description && (
                                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#C0C0D8" }}>{m.description}</p>
                                  )}

                                  {m.verse && m.verseRef && (
                                    <div className="p-3 rounded-xl" style={{ background: "rgba(107,79,187,0.07)", border: "1px solid rgba(107,79,187,0.12)" }}>
                                      <p className="text-xs italic mb-1" style={{ color: "#C0C0D8" }}>&ldquo;{m.verse}&rdquo;</p>
                                      <p className="text-xs font-bold" style={{ color: "#9B8FEB" }}>— {m.verseRef}</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}

                    {/* Future dot */}
                    <div className="flex items-center gap-4 mt-6">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black shrink-0 z-10 relative" style={{ background: "rgba(58,125,86,0.1)", border: "2px dashed rgba(58,125,86,0.3)", color: "#3a7d56" }}>
                        →
                      </div>
                      <p className="text-sm font-semibold" style={{ color: "#4A4A68" }}>Your story continues...</p>
                      <button
                        onClick={() => { resetForm(); setShowCompose(true); }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold"
                        style={{ background: "rgba(58,125,86,0.08)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.2)" }}
                      >
                        <Plus size={12} /> Add
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Stats row */}
              {milestones.length > 0 && (
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Total milestones", value: milestones.length, color: "#3a7d56" },
                    { label: "Major milestones", value: milestones.filter((m) => m.significance === 3).length, color: "#EC4899" },
                    { label: "Years of journey", value: years.length > 0 ? currentYear - years[0] + 1 : 1, color: "#6B4FBB" },
                    { label: "Categories covered", value: new Set(milestones.map((m) => m.category)).size, color: "#F59E0B" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                      <p className="text-2xl font-black mb-1" style={{ color: s.color }}>{s.value}</p>
                      <p className="text-xs" style={{ color: "#4A4A68" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Scripture tab */}
        {mainTab === "scripture" && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8, color: "#F2F2F8" }}>Scripture for the Journey</h2>
              <p style={{ color: "#9898B3", fontSize: 14, lineHeight: 1.7 }}>
                Passages that speak directly to the seasons and movements of the spiritual life.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {JOURNEY_SCRIPTURE.map(s => (
                <div key={s.id} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
                    <span style={{ color: "#6B4FBB", fontWeight: 900, fontSize: 16 }}>{s.ref}</span>
                    <span style={{ background: "rgba(107,79,187,0.15)", color: "#6B4FBB", borderRadius: 6, padding: "2px 10px", fontSize: 11, fontWeight: 700 }}>{s.theme}</span>
                  </div>
                  <blockquote style={{ borderLeft: "3px solid #6B4FBB", margin: "0 0 16px", paddingLeft: 16 }}>
                    <p style={{ color: "#F2F2F8", fontSize: 15, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>
                      &ldquo;{s.text}&rdquo;
                    </p>
                  </blockquote>
                  <p style={{ color: "#9898B3", fontSize: 13, lineHeight: 1.75, margin: 0 }}>{s.reflection}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Models tab */}
        {mainTab === "models" && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8, color: "#F2F2F8" }}>Models of Faith</h2>
              <p style={{ color: "#9898B3", fontSize: 14, lineHeight: 1.7 }}>
                People whose faith journeys are worth studying — not because they were perfect, but because they were honest, and God was faithful to them.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {FAITH_MODELS.map(model => (
                <div key={model.id} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 26 }}>
                  <div style={{ marginBottom: 14 }}>
                    <h3 style={{ color: "#F2F2F8", fontWeight: 900, fontSize: 18, margin: "0 0 4px" }}>{model.name}</h3>
                    <div style={{ color: "#9898B3", fontSize: 12 }}>{model.era}</div>
                  </div>
                  <p style={{ color: "#9898B3", fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{model.bio}</p>
                  <div style={{ background: "rgba(58,125,86,0.07)", border: "1px solid rgba(58,125,86,0.18)", borderRadius: 10, padding: "10px 14px", marginBottom: 16 }}>
                    <span style={{ color: "#3a7d56", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: 0.8 }}>Key Lesson: </span>
                    <span style={{ color: "#3a7d56", fontSize: 13 }}>{model.key_lesson}</span>
                  </div>
                  <blockquote style={{ borderLeft: "3px solid rgba(107,79,187,0.5)", margin: 0, paddingLeft: 14 }}>
                    <p style={{ color: "#C0C0D8", fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
                      &ldquo;{model.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Guide tab */}
        {mainTab === "guide" && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8, color: "#F2F2F8" }}>Phases of the Faith Journey</h2>
              <p style={{ color: "#9898B3", fontSize: 14, lineHeight: 1.7 }}>
                Spiritual formation typically moves through identifiable phases. Knowing where you are helps you embrace the season rather than fight it.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {JOURNEY_GUIDE.map(phase => (
                <div key={phase.id} style={{ background: "#12121F", border: `1px solid ${expandedGuide === phase.id ? "rgba(58,125,86,0.25)" : "#1E1E32"}`, borderRadius: 12 }}>
                  <button
                    onClick={() => setExpandedGuide(expandedGuide === phase.id ? null : phase.id)}
                    style={{ width: "100%", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 24 }}>{phase.icon}</span>
                      <span style={{ color: "#F2F2F8", fontWeight: 800, fontSize: 15 }}>{phase.phase}</span>
                    </div>
                    <span style={{ color: "#9898B3", fontSize: 18, flexShrink: 0 }}>{expandedGuide === phase.id ? "−" : "+"}</span>
                  </button>

                  {expandedGuide === phase.id && (
                    <div style={{ padding: "0 22px 22px" }}>
                      <p style={{ color: "#9898B3", fontSize: 14, lineHeight: 1.8, marginBottom: 18 }}>{phase.description}</p>
                      <div style={{ background: "rgba(58,125,86,0.05)", border: "1px solid rgba(58,125,86,0.12)", borderRadius: 10, padding: 16, marginBottom: 16 }}>
                        <div style={{ color: "#3a7d56", fontWeight: 700, fontSize: 11, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.8 }}>Practices for this phase</div>
                        {phase.practices.map((p, i) => (
                          <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                            <span style={{ color: "#3a7d56", flexShrink: 0, fontWeight: 700, fontSize: 13 }}>→</span>
                            <span style={{ color: "#F2F2F8", fontSize: 13, lineHeight: 1.6 }}>{p}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ borderLeft: "3px solid rgba(107,79,187,0.4)", paddingLeft: 12 }}>
                        <span style={{ color: "#6B4FBB", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: 0.8 }}>Anchor verse: </span>
                        <span style={{ color: "#9898B3", fontSize: 13 }}>{phase.scripture}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {mainTab === "videos" && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: "#3a7d56", fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Video teachings on the faith journey — conversion, spiritual growth, seasons of doubt, and what it looks like to follow Jesus across a lifetime.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "poXKoL5y4Lo", title: "What Does It Mean to Follow Jesus?", channel: "The Gospel Coalition", description: "A clear exposition of what Christian discipleship involves — the cost, the call, and the joy of a life spent following Jesus across all its seasons." },
                  { videoId: "tspDy2KIyeI", title: "Stages of Spiritual Growth", channel: "Dallas Willard Ministries", description: "Willard on the movement from new birth through formation into maturity — how God works through the different seasons of the Christian life to form Christlikeness." },
                  { videoId: "-cRkUt4glaE", title: "Finding God in the Dark Seasons", channel: "Desiring God", description: "How to navigate the dark nights of the soul — doubt, dryness, and suffering — without abandoning faith. What Scripture promises to those who persist in trust." },
                  { videoId: "dih7LHCYw5s", title: "A Long Obedience in the Same Direction — Eugene Peterson", channel: "Renovaré", description: "Peterson on discipleship as a lifetime of steady following — not dramatic crisis experiences but the slow, unglamorous work of continuing in the same direction across ordinary days." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: "#07070F", border: "1px solid #1E1E32", borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: "#3a7d56", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: "#6B4FBB", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: "#9898B3", fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Compose Modal — outside mainTab conditional so it stays in DOM */}
      {showCompose && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}>
          <div className="w-full max-w-lg rounded-2xl p-6 max-h-[90vh] overflow-y-auto" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-black text-lg" style={{ color: "#F2F2F8" }}>{editingId ? "Edit Milestone" : "Add Milestone"}</h3>
              <button onClick={() => { setShowCompose(false); resetForm(); }} style={{ color: "#4A4A68" }}><X size={20} /></button>
            </div>

            <div className="space-y-3">
              {/* Date */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Year</label>
                  <input
                    type="number"
                    value={form.year}
                    onChange={(e) => setForm((f) => ({ ...f, year: Number(e.target.value) }))}
                    min={1900} max={currentYear}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Month</label>
                  <select
                    value={form.month}
                    onChange={(e) => setForm((f) => ({ ...f, month: Number(e.target.value) }))}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  >
                    {MONTHS.map((m, i) => <option key={m} value={i + 1} style={{ background: "#12121F" }}>{m}</option>)}
                  </select>
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Category</label>
                <div className="grid grid-cols-3 gap-1.5 max-h-48 overflow-y-auto">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setForm((f) => ({ ...f, category: c.id }))}
                      className="flex items-center gap-1.5 px-2 py-2 rounded-lg text-[11px] font-semibold text-left transition-all"
                      style={{
                        background: form.category === c.id ? `${c.color}20` : "rgba(255,255,255,0.03)",
                        border: form.category === c.id ? `1px solid ${c.color}50` : "1px solid rgba(255,255,255,0.06)",
                        color: form.category === c.id ? c.color : "#6A6A88",
                      }}
                    >
                      <span>{c.icon}</span> {c.label.split(" / ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Significance */}
              <div>
                <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Significance</label>
                <div className="flex gap-2">
                  {([1, 2, 3] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setForm((f) => ({ ...f, significance: s }))}
                      className="flex-1 py-2 rounded-lg text-xs font-bold transition-all"
                      style={{
                        background: form.significance === s ? `${significanceColor(s)}20` : "rgba(255,255,255,0.03)",
                        border: form.significance === s ? `1px solid ${significanceColor(s)}50` : "1px solid rgba(255,255,255,0.06)",
                        color: form.significance === s ? significanceColor(s) : "#6A6A68",
                      }}
                    >
                      {"★".repeat(s)}
                    </button>
                  ))}
                </div>
              </div>

              <input
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="Milestone title"
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
              />
              <textarea
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="Describe what happened and why it mattered..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  value={form.verse}
                  onChange={(e) => setForm((f) => ({ ...f, verse: e.target.value }))}
                  placeholder="Verse text (optional)"
                  className="px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />
                <input
                  value={form.verseRef}
                  onChange={(e) => setForm((f) => ({ ...f, verseRef: e.target.value }))}
                  placeholder="Reference (e.g. John 3:16)"
                  className="px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => { setShowCompose(false); resetForm(); }}
                className="flex-1 py-2.5 rounded-xl font-bold text-sm"
                style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={!form.title.trim()}
                className="flex-1 py-2.5 rounded-xl font-black text-sm"
                style={{
                  background: form.title.trim() ? "linear-gradient(135deg, #3a7d56, #3a7d56)" : "rgba(255,255,255,0.06)",
                  color: form.title.trim() ? "#07070F" : "#4A4A68",
                }}
              >
                {editingId ? "Save Changes" : "Add Milestone"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirm — outside mainTab conditional so it stays in DOM */}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }}>
          <div className="rounded-2xl p-6 max-w-sm w-full" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
            <p className="font-black text-base mb-2" style={{ color: "#F2F2F8" }}>Delete this milestone?</p>
            <p className="text-sm mb-5" style={{ color: "#6A6A88" }}>This can&apos;t be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDelete(null)} className="flex-1 py-2 rounded-xl font-bold text-sm" style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}>Cancel</button>
              <button onClick={() => handleDelete(confirmDelete)} className="flex-1 py-2 rounded-xl font-black text-sm" style={{ background: "rgba(239,68,68,0.15)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.3)" }}>Delete</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
