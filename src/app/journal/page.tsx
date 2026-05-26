"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Plus, Search, Tag, Calendar, ChevronRight, X, Save, Sparkles } from "lucide-react";

interface JournalEntry {
  id: number;
  date: string;
  title: string;
  body: string;
  verse: string;
  verseRef: string;
  tags: string[];
  mood: string;
}

const sampleEntries: JournalEntry[] = [
  {
    id: 1,
    date: "May 25, 2026",
    title: "Finding peace in the storm",
    body: "Today was one of those days where everything felt uncertain. Work pressures, family tension, and a lingering sense of unease. But I came back to Philippians 4:7 and something shifted. The peace of God really does transcend understanding — it showed up in the quiet moments of prayer this morning in a way I couldn't manufacture.\n\nI've been thinking about what it means to guard your heart and mind in Christ Jesus. The word 'guard' is military language — a garrison. Like a fortress. That's the kind of peace available to us.",
    verse: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    verseRef: "Philippians 4:7",
    tags: ["peace", "prayer", "Philippians"],
    mood: "Reflective",
  },
  {
    id: 2,
    date: "May 22, 2026",
    title: "Gratitude practice — week 3",
    body: "Third week of writing down three specific things I'm grateful for each morning before checking my phone. It's changing something. The irritability that used to creep in early is getting shorter. The cynicism has less grip.\n\nPsalm 100 says to enter His gates with thanksgiving. There's an intentionality to it — you have to choose to come in that way. Gratitude isn't passive. It's a direction you walk.",
    verse: "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.",
    verseRef: "Psalm 100:4",
    tags: ["gratitude", "Psalms", "morning"],
    mood: "Thankful",
  },
  {
    id: 3,
    date: "May 18, 2026",
    title: "Wrestling with the hard passages",
    body: "Read through Judges again this week. It's uncomfortable. The violence, the moral ambiguity of the heroes, the seemingly absent God in moments of crisis. My first instinct is to smooth it over — but maybe the discomfort is the point. Real faith doesn't sanitize the hard parts of the text or of life.\n\nN.T. Wright says the Bible is the story of God and humanity — and humanity is messy. I think I'm learning to hold the tension rather than resolve it too quickly.",
    verse: "In those days Israel had no king; everyone did as they saw fit.",
    verseRef: "Judges 21:25",
    tags: ["Judges", "doubt", "wrestling"],
    mood: "Wrestling",
  },
];

const moods = ["Thankful", "Hopeful", "Reflective", "Peaceful", "Wrestling", "Joyful", "Grieving", "Convicted", "Encouraged"];
const tagSuggestions = ["prayer", "gratitude", "scripture", "sermon", "worship", "trials", "faith", "family", "work", "healing"];

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>(sampleEntries);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [composing, setComposing] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [newEntry, setNewEntry] = useState({
    title: "",
    body: "",
    verse: "",
    verseRef: "",
    tags: [] as string[],
    mood: "",
  });
  const [tagInput, setTagInput] = useState("");
  const [saved, setSaved] = useState(false);

  const filteredEntries = entries.filter((e) => {
    const matchSearch = !search || e.title.toLowerCase().includes(search.toLowerCase()) || e.body.toLowerCase().includes(search.toLowerCase()) || e.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchTag = !activeTag || e.tags.includes(activeTag);
    return matchSearch && matchTag;
  });

  const allTags = Array.from(new Set(entries.flatMap((e) => e.tags)));

  const addTag = (tag: string) => {
    if (tag && !newEntry.tags.includes(tag)) {
      setNewEntry((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    }
    setTagInput("");
  };

  const removeTag = (tag: string) => {
    setNewEntry((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));
  };

  const handleSave = () => {
    if (!newEntry.title.trim() || !newEntry.body.trim()) return;
    const entry: JournalEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      title: newEntry.title,
      body: newEntry.body,
      verse: newEntry.verse,
      verseRef: newEntry.verseRef,
      tags: newEntry.tags,
      mood: newEntry.mood || "Reflective",
    };
    setEntries((prev) => [entry, ...prev]);
    setNewEntry({ title: "", body: "", verse: "", verseRef: "", tags: [], mood: "" });
    setSaved(true);
    setTimeout(() => { setSaved(false); setComposing(false); }, 1500);
  };

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <BookOpen size={20} style={{ color: "#00FF88" }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>My Journal</span>
              </div>
              <h1 className="text-3xl font-black" style={{ color: "#F2F2F8" }}>Devotional Journal</h1>
              <p className="text-sm mt-1" style={{ color: "#6A6A88" }}>{entries.length} entries · Private to you</p>
            </div>
            <button
              onClick={() => { setComposing(true); setSelectedEntry(null); }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-black"
              style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
            >
              <Plus size={16} /> New Entry
            </button>
          </div>

          <div className="flex gap-6">
            {/* Sidebar */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              {/* Search */}
              <div className="relative mb-4">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#6A6A88" }} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search entries..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl text-xs outline-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />
              </div>

              {/* Tags filter */}
              <div className="rounded-2xl p-4" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#4A4A68" }}>Filter by Tag</p>
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveTag(null)}
                    className="w-full text-left text-xs px-2 py-1.5 rounded-lg transition-all"
                    style={{ color: !activeTag ? "#00FF88" : "#8A8AA8", background: !activeTag ? "rgba(0,255,136,0.08)" : "transparent" }}
                  >
                    All entries
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                      className="w-full text-left text-xs px-2 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
                      style={{ color: activeTag === tag ? "#00FF88" : "#8A8AA8", background: activeTag === tag ? "rgba(0,255,136,0.08)" : "transparent" }}
                    >
                      <Tag size={10} /> {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="rounded-2xl p-4 mt-4" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#4A4A68" }}>Your Progress</p>
                {[
                  { label: "Entries this month", value: "8" },
                  { label: "Day streak", value: "14 🔥" },
                  { label: "Verses saved", value: "34" },
                  { label: "Days journaled", value: "47" },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between py-1.5 text-xs" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ color: "#6A6A88" }}>{s.label}</span>
                    <span className="font-bold" style={{ color: "#F2F2F8" }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Compose */}
              {composing && (
                <div className="rounded-2xl p-6 mb-6" style={{ background: "#12121F", border: "1px solid rgba(0,255,136,0.2)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-black text-base" style={{ color: "#F2F2F8" }}>New Entry</h2>
                    <button onClick={() => setComposing(false)} style={{ color: "#4A4A68" }}>
                      <X size={16} />
                    </button>
                  </div>

                  <input
                    value={newEntry.title}
                    onChange={(e) => setNewEntry((p) => ({ ...p, title: e.target.value }))}
                    placeholder="Title your reflection..."
                    className="w-full bg-transparent text-base font-bold outline-none mb-3"
                    style={{ color: "#F2F2F8", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                  />

                  <textarea
                    value={newEntry.body}
                    onChange={(e) => setNewEntry((p) => ({ ...p, body: e.target.value }))}
                    placeholder="Write your thoughts, prayers, and reflections..."
                    rows={6}
                    className="w-full bg-transparent text-sm outline-none resize-none mb-4"
                    style={{ color: "#C0C0D8", lineHeight: "1.8" }}
                  />

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <input
                      value={newEntry.verse}
                      onChange={(e) => setNewEntry((p) => ({ ...p, verse: e.target.value }))}
                      placeholder="Key verse text..."
                      className="w-full px-3 py-2 rounded-xl text-xs outline-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#C0C0D8" }}
                    />
                    <input
                      value={newEntry.verseRef}
                      onChange={(e) => setNewEntry((p) => ({ ...p, verseRef: e.target.value }))}
                      placeholder="Reference (e.g. John 3:16)"
                      className="w-full px-3 py-2 rounded-xl text-xs outline-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#C0C0D8" }}
                    />
                  </div>

                  {/* Mood */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {moods.map((m) => (
                      <button
                        key={m}
                        onClick={() => setNewEntry((p) => ({ ...p, mood: p.mood === m ? "" : m }))}
                        className="text-xs px-2.5 py-1 rounded-full transition-all"
                        style={{
                          background: newEntry.mood === m ? "rgba(0,255,136,0.15)" : "rgba(255,255,255,0.04)",
                          border: `1px solid ${newEntry.mood === m ? "rgba(0,255,136,0.4)" : "rgba(255,255,255,0.06)"}`,
                          color: newEntry.mood === m ? "#00FF88" : "#6A6A88",
                        }}
                      >
                        {m}
                      </button>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {newEntry.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(107,79,187,0.15)", color: "#6B4FBB", border: "1px solid rgba(107,79,187,0.3)" }}>
                        #{tag}
                        <button onClick={() => removeTag(tag)} style={{ color: "#4A4A68" }}><X size={10} /></button>
                      </span>
                    ))}
                    <div className="flex items-center gap-1">
                      {tagSuggestions.filter((t) => !newEntry.tags.includes(t)).slice(0, 4).map((t) => (
                        <button key={t} onClick={() => addTag(t)} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.03)", color: "#4A4A68", border: "1px solid rgba(255,255,255,0.06)" }}>
                          +{t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={() => setComposing(false)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold"
                      style={{ color: "#6A6A88" }}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={!newEntry.title.trim() || !newEntry.body.trim()}
                      className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all"
                      style={{
                        background: newEntry.title && newEntry.body ? (saved ? "rgba(0,255,136,0.2)" : "linear-gradient(135deg, #00FF88, #00BB55)") : "#1E1E32",
                        color: newEntry.title && newEntry.body ? (saved ? "#00FF88" : "#07070F") : "#4A4A68",
                      }}
                    >
                      {saved ? <><Sparkles size={12} /> Saved!</> : <><Save size={12} /> Save Entry</>}
                    </button>
                  </div>
                </div>
              )}

              {/* Entry detail view */}
              {selectedEntry && !composing && (
                <div className="rounded-2xl p-6 mb-6" style={{ background: "#12121F", border: "1px solid rgba(0,255,136,0.15)" }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1 text-xs" style={{ color: "#4A4A68" }}>
                        <Calendar size={11} />
                        {selectedEntry.date}
                        <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: "rgba(0,255,136,0.08)", color: "#00FF88" }}>
                          {selectedEntry.mood}
                        </span>
                      </div>
                      <h2 className="text-xl font-black" style={{ color: "#F2F2F8" }}>{selectedEntry.title}</h2>
                    </div>
                    <button onClick={() => setSelectedEntry(null)} style={{ color: "#4A4A68" }}>
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-sm leading-relaxed mb-5 whitespace-pre-line" style={{ color: "#C0C0D8", lineHeight: "1.85" }}>
                    {selectedEntry.body}
                  </p>
                  {selectedEntry.verse && (
                    <div className="p-4 rounded-xl mb-4" style={{ background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.1)" }}>
                      <p className="text-sm italic mb-1" style={{ color: "#C0C0D8" }}>&ldquo;{selectedEntry.verse}&rdquo;</p>
                      <p className="text-xs font-bold" style={{ color: "#00FF88" }}>— {selectedEntry.verseRef}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {selectedEntry.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(107,79,187,0.1)", color: "#6B4FBB" }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Entry list */}
              {!selectedEntry && (
                <div className="space-y-4">
                  {filteredEntries.length === 0 && (
                    <div className="text-center py-16">
                      <div className="text-4xl mb-3">📔</div>
                      <p className="font-bold" style={{ color: "#F2F2F8" }}>No entries found</p>
                      <p className="text-sm mt-1" style={{ color: "#6A6A88" }}>
                        {search ? `No entries match "${search}"` : "Start writing your first entry!"}
                      </p>
                    </div>
                  )}
                  {filteredEntries.map((entry) => (
                    <div
                      key={entry.id}
                      onClick={() => setSelectedEntry(entry)}
                      className="rounded-2xl p-5 cursor-pointer transition-all"
                      style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs" style={{ color: "#4A4A68" }}>{entry.date}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(0,255,136,0.08)", color: "#00FF88" }}>
                              {entry.mood}
                            </span>
                          </div>
                          <h3 className="font-bold text-base mb-2" style={{ color: "#F2F2F8" }}>{entry.title}</h3>
                          <p className="text-sm line-clamp-2" style={{ color: "#8A8AA8", lineHeight: "1.6" }}>
                            {entry.body.split("\n")[0]}
                          </p>
                        </div>
                        <ChevronRight size={16} className="ml-3 mt-1 shrink-0" style={{ color: "#4A4A68" }} />
                      </div>
                      {entry.verseRef && (
                        <div className="flex items-center gap-1.5 mt-3 text-xs" style={{ color: "#4A4A68" }}>
                          <BookOpen size={11} />
                          <span>{entry.verseRef}</span>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {entry.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(107,79,187,0.08)", color: "#6B4FBB" }}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
