"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import { BookOpen, Plus, ChevronDown, ChevronRight, CheckCircle2, Circle, Search, Tag, Save, X, Lightbulb } from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";

interface StudyNote {
  id: string;
  book: string;
  chapter: number;
  verse?: number;
  type: "observation" | "interpretation" | "application" | "question" | "cross-ref";
  content: string;
  createdAt: string;
}

interface StudyPlan {
  id: string;
  book: string;
  title: string;
  totalChapters: number;
  completedChapters: number[];
  startDate: string;
  notes: StudyNote[];
}

const NOTE_TYPES = [
  { id: "observation", label: "Observation", icon: "👁️", color: "#3B82F6", desc: "What does it say?" },
  { id: "interpretation", label: "Interpretation", icon: "🧠", color: "#6B4FBB", desc: "What does it mean?" },
  { id: "application", label: "Application", icon: "⚡", color: "#3a7d56", desc: "How do I apply it?" },
  { id: "question", label: "Question", icon: "❓", color: "#F59E0B", desc: "What puzzles me?" },
  { id: "cross-ref", label: "Cross-Reference", icon: "🔗", color: "#EC4899", desc: "Related passages" },
] as const;

const BOOKS_OF_BIBLE = [
  { name: "Genesis", chapters: 50, testament: "OT" },
  { name: "Exodus", chapters: 40, testament: "OT" },
  { name: "Leviticus", chapters: 27, testament: "OT" },
  { name: "Numbers", chapters: 36, testament: "OT" },
  { name: "Deuteronomy", chapters: 34, testament: "OT" },
  { name: "Joshua", chapters: 24, testament: "OT" },
  { name: "Judges", chapters: 21, testament: "OT" },
  { name: "Ruth", chapters: 4, testament: "OT" },
  { name: "1 Samuel", chapters: 31, testament: "OT" },
  { name: "2 Samuel", chapters: 24, testament: "OT" },
  { name: "1 Kings", chapters: 22, testament: "OT" },
  { name: "2 Kings", chapters: 25, testament: "OT" },
  { name: "Job", chapters: 42, testament: "OT" },
  { name: "Psalms", chapters: 150, testament: "OT" },
  { name: "Proverbs", chapters: 31, testament: "OT" },
  { name: "Ecclesiastes", chapters: 12, testament: "OT" },
  { name: "Isaiah", chapters: 66, testament: "OT" },
  { name: "Jeremiah", chapters: 52, testament: "OT" },
  { name: "Ezekiel", chapters: 48, testament: "OT" },
  { name: "Daniel", chapters: 12, testament: "OT" },
  { name: "Hosea", chapters: 14, testament: "OT" },
  { name: "Jonah", chapters: 4, testament: "OT" },
  { name: "Micah", chapters: 7, testament: "OT" },
  { name: "Zechariah", chapters: 14, testament: "OT" },
  { name: "Malachi", chapters: 4, testament: "OT" },
  { name: "Matthew", chapters: 28, testament: "NT" },
  { name: "Mark", chapters: 16, testament: "NT" },
  { name: "Luke", chapters: 24, testament: "NT" },
  { name: "John", chapters: 21, testament: "NT" },
  { name: "Acts", chapters: 28, testament: "NT" },
  { name: "Romans", chapters: 16, testament: "NT" },
  { name: "1 Corinthians", chapters: 16, testament: "NT" },
  { name: "2 Corinthians", chapters: 13, testament: "NT" },
  { name: "Galatians", chapters: 6, testament: "NT" },
  { name: "Ephesians", chapters: 6, testament: "NT" },
  { name: "Philippians", chapters: 4, testament: "NT" },
  { name: "Colossians", chapters: 4, testament: "NT" },
  { name: "1 Thessalonians", chapters: 5, testament: "NT" },
  { name: "2 Thessalonians", chapters: 3, testament: "NT" },
  { name: "1 Timothy", chapters: 6, testament: "NT" },
  { name: "2 Timothy", chapters: 4, testament: "NT" },
  { name: "Titus", chapters: 3, testament: "NT" },
  { name: "Hebrews", chapters: 13, testament: "NT" },
  { name: "James", chapters: 5, testament: "NT" },
  { name: "1 Peter", chapters: 5, testament: "NT" },
  { name: "2 Peter", chapters: 3, testament: "NT" },
  { name: "1 John", chapters: 5, testament: "NT" },
  { name: "Revelation", chapters: 22, testament: "NT" },
];

const seedStudyNotes: StudyNote[] = [
  { id: "sn-001", book: "Romans", chapter: 8, verse: 1, type: "observation", content: "Paul opens with 'therefore' — this is the conclusion of the argument he's been building since chapter 1. 'No condemnation' is the verdict. Present tense.", createdAt: "2026-05-20" },
  { id: "sn-002", book: "Romans", chapter: 8, verse: 28, type: "interpretation", content: "This is not a promise that everything feels good or works out the way we want. 'Works for good' is about God's ultimate redemptive purpose, not our comfort or preferences in the moment.", createdAt: "2026-05-21" },
  { id: "sn-003", book: "Romans", chapter: 8, verse: 38, type: "application", content: "The list is exhaustive on purpose — Paul is saying there is literally nothing that can separate us. This week: stop living like I'm on spiritual probation. The verdict is already in.", createdAt: "2026-05-22" },
  { id: "sn-004", book: "Romans", chapter: 8, type: "question", content: "Verse 26: the Spirit intercedes with 'groans that words cannot express.' Does this imply a form of prayer I don't fully understand? How does this relate to glossolalia?", createdAt: "2026-05-22" },
  { id: "sn-005", book: "Romans", chapter: 8, verse: 30, type: "cross-ref", content: "The 'golden chain' of salvation: foreknew → predestined → called → justified → glorified. Compare Ephesians 1:4-5, John 6:37-40. Glorification is past tense (aorist) — Romans treats it as already accomplished!", createdAt: "2026-05-23" },
  { id: "sn-006", book: "Romans", chapter: 8, type: "observation", content: "The word 'Spirit' appears 21 times in this chapter — more than in any other NT chapter. Paul deliberately constructs an entire theology of the Spirit here.", createdAt: "2026-05-24" },
  { id: "sn-007", book: "Philippians", chapter: 4, verse: 7, type: "observation", content: "The word translated 'guard' is phroureō — a military term for a garrison. Paul is saying the peace of God stands watch at the gates of our heart and mind like armed soldiers.", createdAt: "2026-05-15" },
  { id: "sn-008", book: "Philippians", chapter: 4, verse: 11, type: "application", content: "Contentment is 'learned' — Paul uses a word that refers to learning through experience (memathēka). It's not a personality trait or a spiritual gift. It's a discipline developed through trials.", createdAt: "2026-05-16" },
];

const seedStudyPlans: StudyPlan[] = [
  {
    id: "sp-001",
    book: "Romans",
    title: "Romans: The Gospel Unfolded",
    totalChapters: 16,
    completedChapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    startDate: "2026-04-15",
    notes: [],
  },
  {
    id: "sp-002",
    book: "Philippians",
    title: "Philippians: Joy in All Circumstances",
    totalChapters: 4,
    completedChapters: [1, 2, 3, 4],
    startDate: "2026-05-01",
    notes: [],
  },
  {
    id: "sp-003",
    book: "John",
    title: "John: The Gospel of Belief",
    totalChapters: 21,
    completedChapters: [1, 2, 3, 4, 5],
    startDate: "2026-05-15",
    notes: [],
  },
];

const noteTypeMap = Object.fromEntries(NOTE_TYPES.map((t) => [t.id, t]));

export default function BibleStudyPage() {
  const [studyPlans, setStudyPlans] = useState<StudyPlan[]>(() => {
    try {
      const s = localStorage.getItem("vine_bible_study_plans");
      return s ? JSON.parse(s) : seedStudyPlans;
    } catch { return seedStudyPlans; }
  });

  const [globalNotes, setGlobalNotes] = useState<StudyNote[]>(() => {
    try {
      const s = localStorage.getItem("vine_bible_study_notes");
      return s ? JSON.parse(s) : seedStudyNotes;
    } catch { return seedStudyNotes; }
  });

  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(studyPlans[0]?.id ?? null);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(8);
  const [search, setSearch] = useState("");
  const [showNewPlan, setShowNewPlan] = useState(false);
  const [showNewNote, setShowNewNote] = useState(false);
  const [filterType, setFilterType] = usePersistedState<string>("vine_bible-study_filter_type", "all");
  const [activeView, setActiveView] = usePersistedState<"plan" | "notes">("vine_bible-study_active_view", "plan");

  const [newPlanForm, setNewPlanForm] = useState({ book: "Matthew", title: "" });
  const [newNoteForm, setNewNoteForm] = useState({
    chapter: 1,
    verse: "",
    type: "observation" as StudyNote["type"],
    content: "",
  });

  useEffect(() => {
    try { localStorage.setItem("vine_bible_study_plans", JSON.stringify(studyPlans)); } catch {}
  }, [studyPlans]);

  useEffect(() => {
    try { localStorage.setItem("vine_bible_study_notes", JSON.stringify(globalNotes)); } catch {}
  }, [globalNotes]);

  const selectedPlan = studyPlans.find((p) => p.id === selectedPlanId);
  const bookInfo = BOOKS_OF_BIBLE.find((b) => b.name === selectedPlan?.book);

  const toggleChapter = (chapterNum: number) => {
    if (!selectedPlanId) return;
    setStudyPlans((prev) => prev.map((p) => {
      if (p.id !== selectedPlanId) return p;
      const done = p.completedChapters.includes(chapterNum);
      return { ...p, completedChapters: done ? p.completedChapters.filter((c) => c !== chapterNum) : [...p.completedChapters, chapterNum].sort((a, b) => a - b) };
    }));
  };

  const addStudyPlan = () => {
    if (!newPlanForm.book) return;
    const bookDef = BOOKS_OF_BIBLE.find((b) => b.name === newPlanForm.book);
    if (!bookDef) return;
    const newPlan: StudyPlan = {
      id: `sp-${Date.now()}`,
      book: newPlanForm.book,
      title: newPlanForm.title.trim() || `Study of ${newPlanForm.book}`,
      totalChapters: bookDef.chapters,
      completedChapters: [],
      startDate: new Date().toISOString().split("T")[0],
      notes: [],
    };
    setStudyPlans((prev) => [newPlan, ...prev]);
    setSelectedPlanId(newPlan.id);
    setShowNewPlan(false);
    setNewPlanForm({ book: "Matthew", title: "" });
  };

  const addNote = () => {
    if (!newNoteForm.content.trim() || !selectedPlan) return;
    const note: StudyNote = {
      id: `sn-${Date.now()}`,
      book: selectedPlan.book,
      chapter: newNoteForm.chapter,
      verse: newNoteForm.verse ? Number(newNoteForm.verse) : undefined,
      type: newNoteForm.type,
      content: newNoteForm.content.trim(),
      createdAt: new Date().toISOString().split("T")[0],
    };
    setGlobalNotes((prev) => [note, ...prev]);
    setNewNoteForm({ chapter: selectedChapter ?? 1, verse: "", type: "observation", content: "" });
    setShowNewNote(false);
  };

  const chapterNotes = globalNotes.filter((n) => n.book === selectedPlan?.book && n.chapter === selectedChapter);
  const allPlanNotes = globalNotes.filter((n) => n.book === selectedPlan?.book);
  const filteredNotes = allPlanNotes.filter((n) => {
    const typeMatch = filterType === "all" || n.type === filterType;
    const searchMatch = !search || n.content.toLowerCase().includes(search.toLowerCase());
    return typeMatch && searchMatch;
  });

  const progressPct = selectedPlan ? Math.round((selectedPlan.completedChapters.length / selectedPlan.totalChapters) * 100) : 0;

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="pb-20" style={{ paddingTop: 80 }}>

        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-2">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} style={{ color: "#3a7d56" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Bible Study</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black mb-3">
                Study the{" "}
                <span style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Word deeply.
                </span>
              </h1>
              <p className="text-lg max-w-xl" style={{ color: "#6A6A88" }}>
                Structured book-by-book study with OIA notes: Observation, Interpretation, Application, Questions, and Cross-References.
              </p>
            </div>
            <button
              onClick={() => setShowNewPlan(true)}
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm"
              style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)", color: "#07070F" }}
            >
              <Plus size={15} /> New Study
            </button>
          </div>
        </div>

        {/* New Plan Modal */}
        {showNewPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}>
            <div className="w-full max-w-md rounded-2xl p-6" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-black text-lg" style={{ color: "#F2F2F8" }}>Start New Study</h3>
                <button onClick={() => setShowNewPlan(false)} style={{ color: "#4A4A68" }}><X size={20} /></button>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Book of the Bible</label>
                  <select
                    value={newPlanForm.book}
                    onChange={(e) => setNewPlanForm((f) => ({ ...f, book: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                  >
                    <optgroup label="Old Testament" style={{ background: "#12121F" }}>
                      {BOOKS_OF_BIBLE.filter((b) => b.testament === "OT").map((b) => (
                        <option key={b.name} value={b.name} style={{ background: "#12121F" }}>{b.name} ({b.chapters} ch.)</option>
                      ))}
                    </optgroup>
                    <optgroup label="New Testament" style={{ background: "#12121F" }}>
                      {BOOKS_OF_BIBLE.filter((b) => b.testament === "NT").map((b) => (
                        <option key={b.name} value={b.name} style={{ background: "#12121F" }}>{b.name} ({b.chapters} ch.)</option>
                      ))}
                    </optgroup>
                  </select>
                </div>
                <input
                  value={newPlanForm.title}
                  onChange={(e) => setNewPlanForm((f) => ({ ...f, title: e.target.value }))}
                  placeholder={`Study title (optional)`}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />
              </div>
              <div className="flex gap-3 mt-5">
                <button onClick={() => setShowNewPlan(false)} className="flex-1 py-2.5 rounded-xl font-bold text-sm" style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}>Cancel</button>
                <button onClick={addStudyPlan} className="flex-1 py-2.5 rounded-xl font-black text-sm" style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)", color: "#07070F" }}>Start Study</button>
              </div>
            </div>
          </div>
        )}

        {/* Add Note Modal */}
        {showNewNote && selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}>
            <div className="w-full max-w-lg rounded-2xl p-6 max-h-[90vh] overflow-y-auto" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-black text-lg" style={{ color: "#F2F2F8" }}>Add Study Note — {selectedPlan.book}</h3>
                <button onClick={() => setShowNewNote(false)} style={{ color: "#4A4A68" }}><X size={20} /></button>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Chapter</label>
                    <input
                      type="number"
                      value={newNoteForm.chapter}
                      onChange={(e) => setNewNoteForm((f) => ({ ...f, chapter: Number(e.target.value) }))}
                      min={1} max={selectedPlan.totalChapters}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Verse (optional)</label>
                    <input
                      type="number"
                      value={newNoteForm.verse}
                      onChange={(e) => setNewNoteForm((f) => ({ ...f, verse: e.target.value }))}
                      min={1} placeholder="e.g. 28"
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Note Type</label>
                  <div className="grid grid-cols-1 gap-1.5">
                    {NOTE_TYPES.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setNewNoteForm((f) => ({ ...f, type: t.id }))}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold text-left transition-all"
                        style={{
                          background: newNoteForm.type === t.id ? `${t.color}15` : "rgba(255,255,255,0.03)",
                          border: newNoteForm.type === t.id ? `1px solid ${t.color}40` : "1px solid rgba(255,255,255,0.06)",
                          color: newNoteForm.type === t.id ? t.color : "#6A6A88",
                        }}
                      >
                        <span>{t.icon}</span>
                        <span className="font-bold">{t.label}</span>
                        <span className="font-normal ml-auto" style={{ color: "#4A4A68" }}>{t.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <textarea
                  value={newNoteForm.content}
                  onChange={(e) => setNewNoteForm((f) => ({ ...f, content: e.target.value }))}
                  placeholder="Write your note..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                />
              </div>
              <div className="flex gap-3 mt-5">
                <button onClick={() => setShowNewNote(false)} className="flex-1 py-2.5 rounded-xl font-bold text-sm" style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}>Cancel</button>
                <button
                  onClick={addNote}
                  disabled={!newNoteForm.content.trim()}
                  className="flex-1 py-2.5 rounded-xl font-black text-sm"
                  style={{ background: newNoteForm.content.trim() ? "linear-gradient(135deg, #3a7d56, #3a7d56)" : "rgba(255,255,255,0.06)", color: newNoteForm.content.trim() ? "#07070F" : "#4A4A68" }}
                >
                  Save Note
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            {/* Left: Study plan list */}
            <div className="w-56 shrink-0">
              <p className="text-xs font-black mb-3 uppercase tracking-widest" style={{ color: "#4A4A68" }}>My Studies</p>
              <div className="space-y-2 mb-4">
                {studyPlans.map((p) => {
                  const pct = Math.round((p.completedChapters.length / p.totalChapters) * 100);
                  return (
                    <button
                      key={p.id}
                      onClick={() => { setSelectedPlanId(p.id); setSelectedChapter(null); }}
                      className="w-full text-left p-3 rounded-xl transition-all"
                      style={{
                        background: selectedPlanId === p.id ? "rgba(58,125,86,0.08)" : "#12121F",
                        border: selectedPlanId === p.id ? "1px solid rgba(58,125,86,0.25)" : "1px solid #1E1E32",
                      }}
                    >
                      <p className="font-bold text-sm mb-1 truncate" style={{ color: "#F2F2F8" }}>{p.book}</p>
                      <p className="text-[10px] truncate mb-1.5" style={{ color: "#4A4A68" }}>{p.title}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1 rounded-full" style={{ background: "#1E1E32" }}>
                          <div className="h-1 rounded-full" style={{ width: `${pct}%`, background: "#3a7d56" }} />
                        </div>
                        <span className="text-[10px] font-bold" style={{ color: "#3a7d56" }}>{pct}%</span>
                      </div>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setShowNewPlan(true)}
                className="w-full py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.1)", color: "#4A4A68" }}
              >
                <Plus size={11} /> New study
              </button>
            </div>

            {/* Main: plan detail */}
            {selectedPlan && bookInfo ? (
              <div className="flex-1 min-w-0">
                {/* Plan header */}
                <div className="rounded-2xl p-6 mb-5" style={{ background: "linear-gradient(135deg, rgba(58,125,86,0.06) 0%, rgba(107,79,187,0.04) 100%)", border: "1px solid rgba(58,125,86,0.15)" }}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="font-black text-2xl mb-1" style={{ color: "#F2F2F8" }}>{selectedPlan.title}</h2>
                      <p className="text-sm" style={{ color: "#6A6A88" }}>{selectedPlan.book} · {bookInfo.testament === "OT" ? "Old Testament" : "New Testament"} · Started {selectedPlan.startDate}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-3xl font-black" style={{ color: "#3a7d56" }}>{progressPct}%</p>
                      <p className="text-xs" style={{ color: "#4A4A68" }}>{selectedPlan.completedChapters.length}/{selectedPlan.totalChapters} chapters</p>
                    </div>
                  </div>
                  <div className="w-full h-2 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div className="h-2 rounded-full transition-all" style={{ width: `${progressPct}%`, background: "linear-gradient(90deg, #3a7d56, #6B4FBB)" }} />
                  </div>
                </div>

                {/* View tabs */}
                <div className="flex gap-2 mb-5">
                  {(["plan", "notes"] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => setActiveView(v)}
                      className="px-4 py-2 rounded-xl text-sm font-bold capitalize"
                      style={{
                        background: activeView === v ? "rgba(58,125,86,0.12)" : "rgba(255,255,255,0.04)",
                        border: activeView === v ? "1px solid rgba(58,125,86,0.3)" : "1px solid rgba(255,255,255,0.08)",
                        color: activeView === v ? "#3a7d56" : "#6A6A88",
                      }}
                    >
                      {v === "plan" ? "📋 Chapter Tracker" : `📝 Notes (${allPlanNotes.length})`}
                    </button>
                  ))}
                </div>

                {activeView === "plan" ? (
                  <div>
                    {/* Chapter grid */}
                    <div className="rounded-2xl p-5 mb-5" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                      <h3 className="font-black text-sm mb-4" style={{ color: "#F2F2F8" }}>Chapters — click to mark complete</h3>
                      <div className="flex flex-wrap gap-2">
                        {Array.from({ length: selectedPlan.totalChapters }, (_, i) => i + 1).map((ch) => {
                          const done = selectedPlan.completedChapters.includes(ch);
                          const selected = selectedChapter === ch;
                          const hasNotes = globalNotes.some((n) => n.book === selectedPlan.book && n.chapter === ch);
                          return (
                            <button
                              key={ch}
                              onClick={() => {
                                setSelectedChapter(ch);
                                setNewNoteForm((f) => ({ ...f, chapter: ch }));
                              }}
                              onDoubleClick={() => toggleChapter(ch)}
                              className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold relative transition-all"
                              style={{
                                background: done ? "rgba(58,125,86,0.15)" : selected ? "rgba(107,79,187,0.15)" : "rgba(255,255,255,0.04)",
                                border: selected ? "1px solid rgba(107,79,187,0.5)" : done ? "1px solid rgba(58,125,86,0.35)" : "1px solid rgba(255,255,255,0.08)",
                                color: done ? "#3a7d56" : selected ? "#9B8FEB" : "#6A6A88",
                              }}
                              title={`Chapter ${ch}${done ? " (completed)" : ""}${hasNotes ? " — has notes" : ""} — double-click to toggle completion`}
                            >
                              {done ? "✓" : ch}
                              {hasNotes && !done && <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full" style={{ background: "#6B4FBB" }} />}
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-xs mt-3" style={{ color: "#4A4A68" }}>Single-click to select a chapter • Double-click to toggle completion • Purple dot = has notes</p>
                    </div>

                    {/* Selected chapter notes */}
                    {selectedChapter && (
                      <div className="rounded-2xl p-5" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-black text-sm" style={{ color: "#F2F2F8" }}>
                            {selectedPlan.book} {selectedChapter} — Notes ({chapterNotes.length})
                          </h3>
                          <button
                            onClick={() => setShowNewNote(true)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold"
                            style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.2)" }}
                          >
                            <Plus size={12} /> Add Note
                          </button>
                        </div>
                        {chapterNotes.length === 0 ? (
                          <div className="text-center py-8" style={{ color: "#4A4A68" }}>
                            <Lightbulb size={32} className="mx-auto mb-2 opacity-30" />
                            <p className="text-sm">No notes for this chapter yet.</p>
                            <button onClick={() => setShowNewNote(true)} className="mt-3 text-xs font-bold" style={{ color: "#3a7d56" }}>Add your first note →</button>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {chapterNotes.map((note) => {
                              const nt = noteTypeMap[note.type];
                              return (
                                <div key={note.id} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1" style={{ background: `${nt?.color ?? "#8A8AA8"}15`, color: nt?.color ?? "#8A8AA8", border: `1px solid ${nt?.color ?? "#8A8AA8"}30` }}>
                                      {nt?.icon} {nt?.label}
                                    </span>
                                    {note.verse && <span className="text-[10px]" style={{ color: "#4A4A68" }}>v.{note.verse}</span>}
                                    <span className="text-[10px] ml-auto" style={{ color: "#4A4A68" }}>{note.createdAt}</span>
                                  </div>
                                  <p className="text-sm leading-relaxed" style={{ color: "#C0C0D8" }}>{note.content}</p>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    {/* Notes search & filter */}
                    <div className="flex gap-3 mb-4">
                      <div className="relative flex-1">
                        <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#4A4A68" }} />
                        <input
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Search notes..."
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
                        />
                      </div>
                      <button
                        onClick={() => setShowNewNote(true)}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold"
                        style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.2)" }}
                      >
                        <Plus size={14} /> Note
                      </button>
                    </div>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      <button onClick={() => setFilterType("all")} className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: filterType === "all" ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.03)", border: filterType === "all" ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.06)", color: filterType === "all" ? "#F2F2F8" : "#6A6A88" }}>All</button>
                      {NOTE_TYPES.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setFilterType(t.id)}
                          className="px-3 py-1.5 rounded-full text-xs font-bold"
                          style={{ background: filterType === t.id ? `${t.color}15` : "rgba(255,255,255,0.03)", border: filterType === t.id ? `1px solid ${t.color}40` : "1px solid rgba(255,255,255,0.06)", color: filterType === t.id ? t.color : "#6A6A88" }}
                        >
                          {t.icon} {t.label}
                        </button>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {filteredNotes.length === 0 ? (
                        <div className="text-center py-12" style={{ color: "#4A4A68" }}>
                          <BookOpen size={40} className="mx-auto mb-3 opacity-20" />
                          <p>No notes found</p>
                        </div>
                      ) : filteredNotes.map((note) => {
                        const nt = noteTypeMap[note.type];
                        return (
                          <div key={note.id} className="p-4 rounded-xl" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ background: `${nt?.color ?? "#8A8AA8"}15`, color: nt?.color ?? "#8A8AA8", border: `1px solid ${nt?.color ?? "#8A8AA8"}30` }}>
                                {nt?.icon} {nt?.label}
                              </span>
                              <span className="text-xs font-bold" style={{ color: "#6A6A88" }}>
                                {note.book} {note.chapter}{note.verse ? `:${note.verse}` : ""}
                              </span>
                              <span className="text-[10px] ml-auto" style={{ color: "#4A4A68" }}>{note.createdAt}</span>
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: "#C0C0D8" }}>{note.content}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center" style={{ color: "#4A4A68" }}>
                <div className="text-center">
                  <BookOpen size={48} className="mx-auto mb-4 opacity-20" />
                  <p className="font-black text-lg mb-2" style={{ color: "#F2F2F8" }}>Choose a study to begin</p>
                  <button onClick={() => setShowNewPlan(true)} className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm mx-auto mt-3" style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.2)" }}>
                    <Plus size={14} /> Start your first study
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
