"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Heart,
  Plus,
  CheckCircle2,
  Trash2,
  X,
  ChevronRight,
  Lock,
  Sparkles,
} from "lucide-react";

type PrayerCategory = "Personal" | "Family" | "Friend" | "Health" | "Work" | "Ministry" | "World" | "Praise";

interface PrayerItem {
  id: string;
  request: string;
  category: PrayerCategory;
  person?: string;
  verse?: string;
  answered: boolean;
  answeredNote?: string;
  createdAt: string;
  answeredAt?: string;
  prayCount: number;
  lastPrayed?: string;
}

const CATEGORIES: PrayerCategory[] = [
  "Personal", "Family", "Friend", "Health", "Work", "Ministry", "World", "Praise",
];

const CATEGORY_COLORS: Record<PrayerCategory, string> = {
  Personal: "#6B4FBB",
  Family: "#EC4899",
  Friend: "#10B981",
  Health: "#3B82F6",
  Work: "#F59E0B",
  Ministry: "#3a7d56",
  World: "#8B5CF6",
  Praise: "#E07030",
};

const CATEGORY_EMOJI: Record<PrayerCategory, string> = {
  Personal: "🙏",
  Family: "👨‍👩‍👧",
  Friend: "❤️",
  Health: "💙",
  Work: "💼",
  Ministry: "✝️",
  World: "🌍",
  Praise: "🙌",
};

const STARTER_ITEMS: PrayerItem[] = [
  {
    id: "s1",
    request: "Daily wisdom and discernment in my decisions",
    category: "Personal",
    verse: "James 1:5",
    answered: false,
    createdAt: "May 1, 2026",
    prayCount: 7,
    lastPrayed: "May 25, 2026",
  },
  {
    id: "s2",
    request: "My family's spiritual growth and unity",
    category: "Family",
    answered: false,
    createdAt: "May 10, 2026",
    prayCount: 4,
    lastPrayed: "May 24, 2026",
  },
  {
    id: "s3",
    request: "My friend Marcus — struggling with his faith",
    category: "Friend",
    person: "Marcus Johnson",
    answered: false,
    createdAt: "May 15, 2026",
    prayCount: 3,
  },
  {
    id: "s4",
    request: "Promotion at work and finding purpose in my career",
    category: "Work",
    verse: "Colossians 3:23",
    answered: true,
    answeredNote: "Got the promotion! God is faithful.",
    createdAt: "April 5, 2026",
    answeredAt: "May 20, 2026",
    prayCount: 12,
  },
  {
    id: "s5",
    request: "Healing for my mother's health — trusting God with the outcome",
    category: "Health",
    verse: "Isaiah 41:10",
    answered: false,
    createdAt: "May 18, 2026",
    prayCount: 9,
    lastPrayed: "May 25, 2026",
  },
  {
    id: "s6",
    request: "The persecuted church worldwide — courage and provision",
    category: "World",
    verse: "Hebrews 13:3",
    answered: false,
    createdAt: "May 5, 2026",
    prayCount: 5,
    lastPrayed: "May 22, 2026",
  },
  {
    id: "s7",
    request: "Our church's upcoming outreach event — open hearts and clear Gospel witness",
    category: "Ministry",
    answered: false,
    createdAt: "May 20, 2026",
    prayCount: 2,
  },
  {
    id: "s8",
    request: "Grateful for the answered prayer about my sister's marriage — God restored it",
    category: "Praise",
    answered: true,
    answeredNote: "She called me crying — they're reconciled and going to counseling. God heard.",
    createdAt: "March 1, 2026",
    answeredAt: "May 10, 2026",
    prayCount: 22,
  },
];

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function today() {
  return new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function PrayerListPage() {
  const [items, setItems] = useState<PrayerItem[]>(() => {
    try {
      const s = localStorage.getItem("vine_prayer_list");
      const saved = s ? (JSON.parse(s) as PrayerItem[]) : null;
      return saved && saved.length > 0 ? saved : STARTER_ITEMS;
    } catch { return STARTER_ITEMS; }
  });
  const [activeTab, setActiveTab] = useState<"active" | "answered" | "guide" | "voices">("active");
  const [selectedVoice, setSelectedVoice] = useState("bounds-pl");
  const VOICES_PL = [
    { id: "bounds-pl", name: "E.M. Bounds", era: "1835-1913", context: "Power Through Prayer (1907) — the most uncompromising book on specific, persistent prayer", bio: "Edward McKendree Bounds spent the last seventeen years of his life rising at 4am to pray for three hours before anyone else in his household was awake. He wrote eight books on prayer, all published posthumously, of which Power Through Prayer is the most widely read. Bounds's argument is stark: the church's greatest need is not better programs, more money, or more talented leaders — it is men and women who pray. His prayer list was extensive, specific, and personal — he believed that vague prayer is no prayer at all, and that God honors the specificity that reflects genuine faith and genuine need.", quote: "Prayer is the one prime, eternal condition by which the Father is honored and the Son is glorified. No learning can make up for the failure to pray. No earnestness, no diligence, no study, no gifts will supply its lack.", contribution: "Bounds's work established specific, persistent, intercessory prayer as the primary discipline of Christian ministry. His eight books on prayer have shaped generations of pastors and prayer warriors, and his example of daily extended prayer has been held up as a model for serious intercession." },
    { id: "foster-pl", name: "Richard Foster", era: "b. 1942", context: "Prayer: Finding the Heart's True Home (1992) — the most comprehensive evangelical guide to forms of prayer", bio: "Richard Foster's Prayer: Finding the Heart's True Home is the most comprehensive single-volume guide to Christian prayer for a general audience. Foster surveys 21 different forms of prayer — simple prayer, prayer of examination, intercessory prayer, contemplative prayer, healing prayer, sacramental prayer — and shows how each addresses different needs and dimensions of the human relationship with God. His treatment of petition and intercession is particularly useful for those learning to keep prayer lists: he argues that specific, expectant prayer honors God's personhood and invites genuine encounter rather than religious soliloquy.", quote: "Prayer is the central avenue God uses to transform us. If we are unwilling to change, we will abandon prayer as a noticeable characteristic of our lives. The closer we come to the heartbeat of God, the more we see our need and the more we desire to be conformed to Christ.", contribution: "Foster's Prayer introduced a generation of evangelical Christians to the full range of Christian prayer practice, from the ancient tradition of contemplative prayer to specific intercessory petition. His comprehensive treatment gave Christians a vocabulary for understanding the different dimensions of prayer and a guide for developing a richer prayer life." },
    { id: "murray-pl", name: "Andrew Murray", era: "1828-1917", context: "With Christ in the School of Prayer (1885) — the classic study of Jesus's prayer teaching", bio: "Andrew Murray spent three months bedridden with a throat condition that prevented him from speaking, and used the time to write With Christ in the School of Prayer — a series of meditations on prayer drawn from Jesus's teaching in the Gospels. Murray's central argument is that prayer is not a technique to master but a relationship to inhabit: prayer is 'talking to God as a child talks to a father.' His treatment of specific petition — asking for particular things, with expectant faith — remains one of the clearest evangelical accounts of how prayer list intercession works and why it matters.", quote: "Prayer is not monologue but dialogue; God's voice in response to mine is its most essential part. Listening to God's voice is the secret of the assurance that he will listen to mine.", contribution: "With Christ in the School of Prayer has sold millions of copies and has been a standard text in evangelical prayer formation for over a century. Murray's accessible devotional style, his rootedness in the Gospel accounts of Jesus's teaching on prayer, and his pastoral sensitivity to the difficulties of sustained prayer have made it a perennial resource." },
    { id: "yancey-pl", name: "Philip Yancey", era: "b. 1949", context: "Prayer: Does It Make Any Difference? (2006) — honest engagement with prayer's difficulties", bio: "Philip Yancey's Prayer: Does It Make Any Difference? is the most honest recent evangelical treatment of the difficulties of prayer — why prayers seem to go unanswered, how to pray through doubt, what to do when God seems silent. Yancey's journalistic instinct for honest engagement with hard questions, combined with his wide reading in theology, history, and science, produced a book that gives permission to pray honestly about prayer itself. His treatment of intercession — why we should pray for specific things even though God already knows what we need — is particularly thoughtful.", quote: "Prayer is the act of seeing reality from God's point of view. When I pray for a friend, I am not trying to manipulate God into doing something he didn't want to do. I am trying to see my friend through God's eyes — and that changes both my prayer and my friendship.", contribution: "Prayer: Does It Make Any Difference? gave evangelical readers an honest, intellectually serious treatment of prayer's difficulties that neither minimized the problems nor abandoned the practice. Yancey's honesty about his own struggles with prayer, combined with his intellectual engagement with the theology of prayer, made the book accessible to doubters and seekers who might have found more triumphalist treatments of prayer alienating." },
    { id: "hallesby-ol", name: "O. Hallesby", era: "1879-1961", context: "Prayer (1931) — the Norwegian classic on helplessness as the key to prayer", bio: "Ole Kristian Hallesby was a Norwegian theologian who spent ten months imprisoned by the Nazis for his leadership of church resistance, and who wrote Prayer before the war in a simple, direct style that has made it a devotional classic across languages and denominations. Hallesby's central insight — that helplessness is the key to prayer — reframes the experience of struggling to pray: the feeling that you have nothing to bring to God, that you are empty, that you cannot even find words, is not a disqualification from prayer but its very foundation. His chapter on maintaining a prayer list as a record of God's faithfulness is particularly practical.", quote: "Helplessness united with faith produces prayer — real prayer, the kind that reaches heaven. Our helplessness is the very thing that opens us to receive the help God is ready and waiting to give.", contribution: "Prayer has been translated into dozens of languages and has shaped prayer life across Catholic, Orthodox, and Protestant communities. Hallesby's reframing of helplessness as the gateway rather than the barrier to prayer has given many struggling pray-ers permission to bring their emptiness to God rather than staying away until they feel 'ready to pray.'" },
  ];
  const voiceItem = VOICES_PL.find(v => v.id === selectedVoice)!;
  const [filterCat, setFilterCat] = useState<PrayerCategory | "All">("All");
  const [showAdd, setShowAdd] = useState(false);
  const [answeringId, setAnsweringId] = useState<string | null>(null);
  const [answeredNote, setAnsweredNote] = useState("");

  // New item form
  const [newRequest, setNewRequest] = useState("");
  const [newCategory, setNewCategory] = useState<PrayerCategory>("Personal");
  const [newPerson, setNewPerson] = useState("");
  const [newVerse, setNewVerse] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_prayer_list", JSON.stringify(items)); } catch {}
  }, [items]);

  const addItem = () => {
    if (!newRequest.trim()) return;
    const item: PrayerItem = {
      id: uid(),
      request: newRequest.trim(),
      category: newCategory,
      person: newPerson.trim() || undefined,
      verse: newVerse.trim() || undefined,
      answered: false,
      createdAt: today(),
      prayCount: 0,
    };
    setItems((prev) => [item, ...prev]);
    setNewRequest(""); setNewPerson(""); setNewVerse("");
    setShowAdd(false);
  };

  const markPrayed = (id: string) => {
    setItems((prev) => prev.map((item) =>
      item.id === id
        ? { ...item, prayCount: item.prayCount + 1, lastPrayed: today() }
        : item
    ));
  };

  const markAnswered = (id: string) => {
    setItems((prev) => prev.map((item) =>
      item.id === id
        ? { ...item, answered: true, answeredAt: today(), answeredNote: answeredNote.trim() || undefined }
        : item
    ));
    setAnsweringId(null);
    setAnsweredNote("");
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filtered = items.filter((item) => {
    const tabMatch = activeTab === "active" ? !item.answered : item.answered;
    const catMatch = filterCat === "All" || item.category === filterCat;
    return tabMatch && catMatch;
  });

  const activeCount = items.filter((i) => !i.answered).length;
  const answeredCount = items.filter((i) => i.answered).length;
  const totalPrays = items.reduce((s, i) => s + i.prayCount, 0);

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Heart size={18} style={{ color: "#3a7d56" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>My Prayer List</span>
              <div className="flex items-center gap-1 ml-auto text-xs" style={{ color: "#4A4A68" }}>
                <Lock size={11} /> Private
              </div>
            </div>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-black">Prayer Journal</h1>
                <p className="text-sm mt-1" style={{ color: "#6A6A88" }}>Your personal, private prayer requests. Pray daily, track answered prayers.</p>
              </div>
              <button
                onClick={() => setShowAdd(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-black"
                style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)" }}
              >
                <Plus size={14} /> Add Request
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Active Requests", value: activeCount, color: "#6B4FBB" },
              { label: "Answered", value: answeredCount, color: "#10B981" },
              { label: "Total Prayers", value: totalPrays, color: "#3a7d56" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <p className="text-2xl font-black mb-0.5" style={{ color: s.color }}>{s.value}</p>
                <p className="text-[10px]" style={{ color: "#6A6A88" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Add form */}
          {showAdd && (
            <div className="rounded-2xl p-6 mb-5" style={{ background: "#12121F", border: "1px solid rgba(58,125,86,0.2)" }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-black" style={{ color: "#F2F2F8" }}>New Prayer Request</h3>
                <button onClick={() => setShowAdd(false)} style={{ color: "#6A6A88" }}><X size={16} /></button>
              </div>
              <div className="space-y-3">
                <textarea
                  rows={3}
                  placeholder="What would you like to bring to God in prayer?"
                  value={newRequest}
                  onChange={(e) => setNewRequest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#6A6A88" }}>Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as PrayerCategory)}
                      className="w-full px-3 py-2 rounded-xl text-sm outline-none"
                      style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                    >
                      {CATEGORIES.map((c) => <option key={c} value={c}>{CATEGORY_EMOJI[c]} {c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#6A6A88" }}>Person (optional)</label>
                    <input
                      type="text" placeholder="Who are you praying for?"
                      value={newPerson}
                      onChange={(e) => setNewPerson(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-sm outline-none"
                      style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#6A6A88" }}>Scripture to stand on (optional)</label>
                  <input
                    type="text" placeholder="e.g. Philippians 4:6-7"
                    value={newVerse}
                    onChange={(e) => setNewVerse(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-sm outline-none"
                    style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                  />
                </div>
                <div className="flex gap-3 pt-1">
                  <button
                    onClick={() => setShowAdd(false)}
                    className="flex-1 py-2.5 rounded-xl text-sm font-semibold"
                    style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#6A6A88" }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addItem}
                    disabled={!newRequest.trim()}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-black"
                    style={{ background: newRequest.trim() ? "linear-gradient(135deg, #3a7d56, #3a7d56)" : "#1E1E32", color: newRequest.trim() ? "#07070F" : "#4A4A68" }}
                  >
                    <Heart size={14} /> Add to List
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-xl mb-4" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
            {(["active", "answered", "guide", "voices"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition-all"
                style={{
                  background: activeTab === tab ? (tab === "answered" ? "rgba(16,185,129,0.12)" : "rgba(107,79,187,0.12)") : "transparent",
                  color: activeTab === tab ? (tab === "answered" ? "#10B981" : "#6B4FBB") : "#6A6A88",
                  border: activeTab === tab ? `1px solid ${tab === "answered" ? "rgba(16,185,129,0.2)" : "rgba(107,79,187,0.2)"}` : "1px solid transparent",
                }}
              >
                {tab === "active" ? `Praying (${activeCount})` : tab === "answered" ? `Answered ✓ (${answeredCount})` : tab === "guide" ? "📖 Guide" : "🎓 Voices"}
              </button>
            ))}
          </div>

          {(activeTab === "active" || activeTab === "answered") && <>
          {/* Category filter */}
          <div className="flex gap-2 flex-wrap mb-5">
            {(["All", ...CATEGORIES] as (PrayerCategory | "All")[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCat(cat)}
                className="text-xs font-semibold px-2.5 py-1 rounded-full transition-all"
                style={{
                  background: filterCat === cat ? `${cat === "All" ? "#6B4FBB" : CATEGORY_COLORS[cat as PrayerCategory]}20` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${filterCat === cat ? (cat === "All" ? "rgba(107,79,187,0.4)" : `${CATEGORY_COLORS[cat as PrayerCategory]}40`) : "rgba(255,255,255,0.06)"}`,
                  color: filterCat === cat ? (cat === "All" ? "#6B4FBB" : CATEGORY_COLORS[cat as PrayerCategory]) : "#6A6A88",
                }}
              >
                {cat !== "All" && CATEGORY_EMOJI[cat as PrayerCategory]} {cat}
              </button>
            ))}
          </div>

          {/* Prayer items */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 rounded-2xl" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              <div className="text-4xl mb-3">{activeTab === "active" ? "🙏" : "🙌"}</div>
              <h3 className="font-black mb-1.5" style={{ color: "#F2F2F8" }}>
                {activeTab === "active" ? "No active prayer requests" : "No answered prayers logged yet"}
              </h3>
              <p className="text-sm" style={{ color: "#6A6A88" }}>
                {activeTab === "active" ? "Add your first request above." : "When God answers, mark it and write the testimony."}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((item) => {
                const color = CATEGORY_COLORS[item.category];
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl p-5"
                    style={{
                      background: item.answered ? "rgba(16,185,129,0.04)" : "#12121F",
                      border: `1px solid ${item.answered ? "rgba(16,185,129,0.2)" : "#1E1E32"}`,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl shrink-0 mt-0.5">{CATEGORY_EMOJI[item.category]}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{ background: `${color}15`, color }}
                            >
                              {item.category}
                            </span>
                            {item.person && (
                              <span className="text-[10px] ml-2" style={{ color: "#6A6A88" }}>for {item.person}</span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            {!item.answered && (
                              <button
                                onClick={() => setAnsweringId(item.id)}
                                className="text-[10px] font-bold px-2 py-1 rounded-lg transition-all"
                                style={{ background: "rgba(16,185,129,0.08)", color: "#10B981", border: "1px solid rgba(16,185,129,0.2)" }}
                              >
                                Answered ✓
                              </button>
                            )}
                            {item.answered && <CheckCircle2 size={14} style={{ color: "#10B981" }} />}
                            <button
                              onClick={() => deleteItem(item.id)}
                              className="p-1 rounded transition-all"
                              style={{ color: "#3A3A58" }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = "#EF4444")}
                              onMouseLeave={(e) => (e.currentTarget.style.color = "#3A3A58")}
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        </div>

                        <p className="text-sm leading-relaxed mt-1 mb-2" style={{ color: "#C0C0D8" }}>{item.request}</p>

                        {item.verse && (
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(58,125,86,0.08)", color: "#00AA55" }}>
                            📜 {item.verse}
                          </span>
                        )}

                        {item.answered && item.answeredNote && (
                          <div className="mt-2 px-3 py-2 rounded-xl" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}>
                            <p className="text-xs font-bold mb-0.5" style={{ color: "#10B981" }}>Testimony:</p>
                            <p className="text-sm" style={{ color: "#C0C0D8" }}>{item.answeredNote}</p>
                          </div>
                        )}

                        <div className="flex items-center justify-between mt-3">
                          <p className="text-[10px]" style={{ color: "#4A4A68" }}>
                            Added {item.createdAt}
                            {item.lastPrayed && ` · Last prayed ${item.lastPrayed}`}
                            {item.answeredAt && ` · Answered ${item.answeredAt}`}
                          </p>
                          {!item.answered && (
                            <button
                              onClick={() => markPrayed(item.id)}
                              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                              style={{ background: `${color}10`, color, border: `1px solid ${color}25` }}
                              onMouseEnter={(e) => { e.currentTarget.style.background = `${color}20`; }}
                              onMouseLeave={(e) => { e.currentTarget.style.background = `${color}10`; }}
                            >
                              🙏 Prayed ({item.prayCount})
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Answered note input */}
                    {answeringId === item.id && (
                      <div className="mt-4 pt-4" style={{ borderTop: "1px solid #1E1E32" }}>
                        <p className="text-xs font-bold mb-2" style={{ color: "#10B981" }}>How did God answer this prayer?</p>
                        <textarea
                          rows={2}
                          placeholder="Write your testimony here (optional)…"
                          value={answeredNote}
                          onChange={(e) => setAnsweredNote(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl text-sm outline-none resize-none mb-2"
                          style={{ background: "#0D0D1A", border: "1px solid rgba(16,185,129,0.2)", color: "#F2F2F8" }}
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => { setAnsweringId(null); setAnsweredNote(""); }}
                            className="flex-1 py-2 rounded-xl text-xs font-semibold"
                            style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#6A6A88" }}
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => markAnswered(item.id)}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold"
                            style={{ background: "rgba(16,185,129,0.12)", color: "#10B981", border: "1px solid rgba(16,185,129,0.3)" }}
                          >
                            <CheckCircle2 size={12} /> Mark Answered
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Footer CTA */}
          <div
            className="mt-10 rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg, rgba(107,79,187,0.08), rgba(58,125,86,0.06))", border: "1px solid rgba(107,79,187,0.2)" }}
          >
            <Sparkles size={20} style={{ color: "#6B4FBB" }} className="mx-auto mb-3" />
            <h3 className="font-black mb-2" style={{ color: "#F2F2F8" }}>Keep a record of God&apos;s faithfulness</h3>
            <p className="text-sm mb-4 max-w-sm mx-auto" style={{ color: "#6A6A88" }}>
              Tracking answered prayers builds your faith. Review this list often — it becomes your personal testimony.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/prayer" className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#3a7d56" }}>
                Public Prayer Wall <ChevronRight size={11} />
              </Link>
              <Link href="/journal" className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#6B4FBB" }}>
                Journal <ChevronRight size={11} />
              </Link>
            </div>
          </div>
          </>}

          {activeTab === "guide" && (
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, color: "#F2F2F8" }}>How to Pray Specifically</h2>
              <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                Vague prayer is comfortable because it can never be proven wrong. Specific prayer is an act of faith.
              </p>
              {[
                { icon: "🎯", title: "Name the Person, Not the Category", desc: "Don't pray 'for those who are sick.' Pray for John Smith's kidney stone procedure on Thursday. The specificity is not magic — it is faith. It says: I believe God knows John Smith and cares about his Thursday. It also makes it possible to see when and how God answers." },
                { icon: "📅", title: "Assign People to Days", desc: "A prayer list with 50 names becomes unmanageable if you try to pray for all 50 every day. Assign people and needs to days of the week: Monday for family, Tuesday for coworkers, Wednesday for church, etc. This lets you pray specifically for a smaller group each day rather than vaguely for everyone daily." },
                { icon: "✍️", title: "Write the Request With a Date", desc: "Dating your prayer requests gives you the ability to see God's faithfulness over time. When God answers — in the way you asked, or in a better way, or with a clear 'not yet' — you can record that too. Over years, a dated prayer list becomes one of the most powerful spiritual documents you own." },
                { icon: "📖", title: "Pray a Scripture Over the Request", desc: "Attaching a specific Scripture verse to a specific prayer request transforms intercession. Instead of 'Lord, help Sarah with her marriage,' pray Ephesians 3:17-19 over her: 'Lord, give Sarah roots in love and the ability to comprehend your love with her husband.' The Scripture gives the prayer substance and direction." },
                { icon: "🔄", title: "Review Answered Prayers Regularly", desc: "Set a monthly or quarterly date to review your answered prayers. Read through old requests and notice what God has done. This practice builds faith for current requests — it gives you concrete evidence of God's faithfulness rather than abstract belief in it. It is the spiritual discipline of remembrance." },
                { icon: "💬", title: "Ask People What They Specifically Need", desc: "When someone says 'pray for me,' follow up: 'For what, specifically?' Many people are afraid to be specific because specificity involves vulnerability — it exposes what they actually need. Asking the follow-up question honors their need and makes your prayer infinitely more targeted and faithful." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 22, marginBottom: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span style={{ fontSize: 24 }}>{item.icon}</span>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#6B4FBB", margin: 0 }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "voices" && (
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
                {VOICES_PL.map(v => (
                  <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(107,79,187,0.4)" : "#1E1E32"}`, background: selectedVoice === v.id ? "rgba(107,79,187,0.1)" : "#12121F", cursor: "pointer" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? "#A080FF" : "#F2F2F8", marginBottom: 2 }}>{v.name}</div>
                    <div style={{ fontSize: 11, color: "#9898B3" }}>{v.era}</div>
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 12, color: "#9898B3", fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
                <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: "#F2F2F8" }}>{voiceItem.name}</h2>
                <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 20 }}>{voiceItem.era}</div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
                <div style={{ background: "#07070F", borderRadius: 12, padding: 20, borderLeft: "3px solid #6B4FBB", marginBottom: 24 }}>
                  <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#6B4FBB", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
