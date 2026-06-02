"use client";

import { useState, useEffect, useRef } from "react";
import {
  FileText,
  Plus,
  Trash2,
  ChevronRight,
  BookOpen,
  Search,
  Edit3,
  X,
  Check,
  Tag,
  Calendar,
} from "lucide-react";

interface SermonNote {
  id: string;
  title: string;
  speaker: string;
  date: string;
  scripture: string;
  church: string;
  tags: string[];
  body: string;
  keyPoints: string[];
  createdAt: string;
}

const SAMPLE_NOTES: SermonNote[] = [
  {
    id: "sample-1",
    title: "The Peace That Passes Understanding",
    speaker: "Pastor David Okonkwo",
    date: "May 25, 2026",
    scripture: "Philippians 4:4-7",
    church: "Grace Community Church",
    tags: ["peace", "prayer", "anxiety"],
    body: "Today's message unpacked what Paul meant when he wrote from prison about peace that 'surpasses all understanding.' The context is key — Paul wasn't writing from a comfortable study but from chains. His prescription is counter-intuitive: rejoice, be gentle, pray with thanksgiving, and the peace of God will guard your heart.",
    keyPoints: [
      "Peace isn't the absence of problems — it's the presence of God in the middle of them",
      "The 'guard' metaphor: God's peace acts like a Roman soldier standing watch over your mind",
      "Thanksgiving in prayer isn't manipulation — it's an act of trust that God is already working",
    ],
    createdAt: "2026-05-25",
  },
  {
    id: "sample-2",
    title: "Dry Bones Can Live Again",
    speaker: "Rev. Naomi Clark",
    date: "May 18, 2026",
    scripture: "Ezekiel 37:1-14",
    church: "Harvest Fellowship",
    tags: ["revival", "restoration", "Holy Spirit"],
    body: "Ezekiel's vision of the valley of dry bones is one of the most visceral passages in Scripture. These weren't just dead people — they were 'very dry,' meaning long dead, beyond hope. Yet God asks the prophet: 'Can these bones live?' The answer hangs on whether Ezekiel will speak the word God gives him, not on the condition of the bones.",
    keyPoints: [
      "God specializes in hopeless situations — the valley of dry bones was chosen deliberately",
      "Two-stage revival: first the physical structure, then the breath (ruach) of God",
      "Application: speak life over dead situations in your own life and community",
    ],
    createdAt: "2026-05-18",
  },
];

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export default function SermonNotesPage() {
  const [notes, setNotes] = useState<SermonNote[]>(() => {
    try {
      const s = localStorage.getItem("vine_sermon_notes");
      const saved = s ? (JSON.parse(s) as SermonNote[]) : null;
      return saved && saved.length > 0 ? saved : SAMPLE_NOTES;
    } catch { return SAMPLE_NOTES; }
  });
  const [activeId, setActiveId] = useState<string | null>(() => {
    try { return localStorage.getItem("vine_sermon_active") ?? null; } catch { return null; }
  });
  const [editMode, setEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNew, setShowNew] = useState(false);

  const [draft, setDraft] = useState<Partial<SermonNote>>({});
  const [tagInput, setTagInput] = useState("");
  const [newPoint, setNewPoint] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    try { localStorage.setItem("vine_sermon_notes", JSON.stringify(notes)); } catch {}
  }, [notes]);

  useEffect(() => {
    try {
      if (activeId) localStorage.setItem("vine_sermon_active", activeId);
      else localStorage.removeItem("vine_sermon_active");
    } catch {}
  }, [activeId]);

  const activeNote = notes.find((n) => n.id === activeId) ?? null;

  const filtered = notes.filter((n) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      n.title.toLowerCase().includes(q) ||
      n.speaker.toLowerCase().includes(q) ||
      n.scripture.toLowerCase().includes(q) ||
      n.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  const startNew = () => {
    setDraft({
      title: "",
      speaker: "",
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      scripture: "",
      church: "",
      tags: [],
      body: "",
      keyPoints: [],
    });
    setTagInput("");
    setNewPoint("");
    setShowNew(true);
    setActiveId(null);
    setEditMode(false);
  };

  const saveNew = () => {
    if (!draft.title?.trim()) return;
    const note: SermonNote = {
      id: uid(),
      title: draft.title ?? "",
      speaker: draft.speaker ?? "",
      date: draft.date ?? new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      scripture: draft.scripture ?? "",
      church: draft.church ?? "",
      tags: draft.tags ?? [],
      body: draft.body ?? "",
      keyPoints: draft.keyPoints ?? [],
      createdAt: new Date().toISOString().split("T")[0],
    };
    setNotes((prev) => [note, ...prev]);
    setActiveId(note.id);
    setShowNew(false);
    setDraft({});
  };

  const startEdit = () => {
    if (!activeNote) return;
    setDraft({ ...activeNote });
    setTagInput("");
    setNewPoint("");
    setEditMode(true);
  };

  const saveEdit = () => {
    if (!activeNote || !draft.title?.trim()) return;
    setNotes((prev) => prev.map((n) => n.id === activeNote.id ? { ...n, ...draft } as SermonNote : n));
    setEditMode(false);
    setDraft({});
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    if (activeId === id) setActiveId(null);
  };

  const addTag = () => {
    const t = tagInput.trim().toLowerCase().replace(/\s+/g, "-");
    if (!t) return;
    setDraft((prev) => ({ ...prev, tags: [...(prev.tags ?? []), t] }));
    setTagInput("");
  };

  const removeTag = (t: string) => {
    setDraft((prev) => ({ ...prev, tags: (prev.tags ?? []).filter((x) => x !== t) }));
  };

  const addPoint = () => {
    if (!newPoint.trim()) return;
    setDraft((prev) => ({ ...prev, keyPoints: [...(prev.keyPoints ?? []), newPoint.trim()] }));
    setNewPoint("");
  };

  const removePoint = (i: number) => {
    setDraft((prev) => ({ ...prev, keyPoints: (prev.keyPoints ?? []).filter((_, j) => j !== i) }));
  };

  const editing = showNew || editMode;
  const editDraft = draft;

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <div className="pb-20" style={{ paddingTop: 40 }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6" style={{ minHeight: "70vh" }}>

            {/* Left Panel — Note List */}
            <div className="w-72 flex-shrink-0 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <FileText size={15} style={{ color: "#3a7d56" }} />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a7d56" }}>Sermon Notes</span>
                  </div>
                  <p className="text-xs" style={{ color: "#4A4A68" }}>{notes.length} note{notes.length !== 1 ? "s" : ""}</p>
                </div>
                <button
                  onClick={startNew}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-black"
                  style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)" }}
                >
                  <Plus size={12} /> New
                </button>
              </div>

              {/* Search */}
              <div className="relative mb-3">
                <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#4A4A68" }} />
                <input
                  type="text"
                  placeholder="Search notes…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl text-xs outline-none"
                  style={{ background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                />
              </div>

              {/* List */}
              <div className="flex-1 space-y-2 overflow-y-auto">
                {filtered.length === 0 && (
                  <p className="text-xs text-center py-8" style={{ color: "#4A4A68" }}>No notes found.</p>
                )}
                {filtered.map((note) => (
                  <button
                    key={note.id}
                    onClick={() => { setActiveId(note.id); setShowNew(false); setEditMode(false); }}
                    className="w-full text-left p-3 rounded-xl transition-all"
                    style={{
                      background: activeId === note.id ? "rgba(58,125,86,0.08)" : "#12121F",
                      border: `1px solid ${activeId === note.id ? "rgba(58,125,86,0.25)" : "#1E1E32"}`,
                    }}
                  >
                    <p className="text-xs font-bold leading-snug mb-1" style={{ color: activeId === note.id ? "#3a7d56" : "#F2F2F8" }}>
                      {note.title}
                    </p>
                    <p className="text-[10px]" style={{ color: "#4A4A68" }}>{note.date}</p>
                    <p className="text-[10px] mt-0.5 truncate" style={{ color: "#6A6A88" }}>{note.scripture} · {note.speaker}</p>
                    {note.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {note.tags.slice(0, 3).map((t) => (
                          <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(58,125,86,0.08)", color: "#00AA55" }}>
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Panel — Note Detail or Editor */}
            <div className="flex-1 min-w-0">
              {!activeNote && !showNew ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="text-5xl mb-4">📝</div>
                  <h2 className="text-xl font-black mb-2" style={{ color: "#F2F2F8" }}>Select a note or create a new one</h2>
                  <p className="text-sm mb-6 max-w-xs" style={{ color: "#6A6A88" }}>
                    Take structured notes during sermons — scripture reference, key points, personal application.
                  </p>
                  <button
                    onClick={startNew}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-black"
                    style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)" }}
                  >
                    <Plus size={14} /> Take New Notes
                  </button>
                </div>
              ) : editing ? (
                /* EDITOR */
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "#12121F", border: "1px solid rgba(58,125,86,0.2)" }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-black" style={{ color: "#F2F2F8" }}>{showNew ? "New Sermon Notes" : "Edit Notes"}</h2>
                    <button onClick={() => { setShowNew(false); setEditMode(false); }} style={{ color: "#6A6A88" }}><X size={18} /></button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#6A6A88" }}>Sermon Title *</label>
                      <input
                        type="text" placeholder="What was the sermon about?"
                        value={editDraft.title ?? ""}
                        onChange={(e) => setDraft((p) => ({ ...p, title: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                        style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#6A6A88" }}>Speaker</label>
                        <input type="text" placeholder="Pastor / Speaker name"
                          value={editDraft.speaker ?? ""}
                          onChange={(e) => setDraft((p) => ({ ...p, speaker: e.target.value }))}
                          className="w-full px-3 py-2 rounded-xl text-sm outline-none"
                          style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#6A6A88" }}>Date</label>
                        <input type="text" placeholder="May 25, 2026"
                          value={editDraft.date ?? ""}
                          onChange={(e) => setDraft((p) => ({ ...p, date: e.target.value }))}
                          className="w-full px-3 py-2 rounded-xl text-sm outline-none"
                          style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#6A6A88" }}>Scripture Reference</label>
                        <input type="text" placeholder="John 3:16"
                          value={editDraft.scripture ?? ""}
                          onChange={(e) => setDraft((p) => ({ ...p, scripture: e.target.value }))}
                          className="w-full px-3 py-2 rounded-xl text-sm outline-none"
                          style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#6A6A88" }}>Church / Location</label>
                        <input type="text" placeholder="Church name"
                          value={editDraft.church ?? ""}
                          onChange={(e) => setDraft((p) => ({ ...p, church: e.target.value }))}
                          className="w-full px-3 py-2 rounded-xl text-sm outline-none"
                          style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#6A6A88" }}>Notes / Reflections</label>
                      <textarea
                        ref={textareaRef}
                        rows={5}
                        placeholder="Write your notes, reflections, and key insights here…"
                        value={editDraft.body ?? ""}
                        onChange={(e) => setDraft((p) => ({ ...p, body: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none leading-relaxed"
                        style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                      />
                    </div>

                    {/* Key Points */}
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-2" style={{ color: "#6A6A88" }}>Key Points</label>
                      <div className="space-y-1.5 mb-2">
                        {(editDraft.keyPoints ?? []).map((pt, i) => (
                          <div key={i} className="flex items-start gap-2 px-3 py-2 rounded-lg" style={{ background: "#0D0D1A", border: "1px solid #1E1E32" }}>
                            <ChevronRight size={13} className="mt-0.5 shrink-0" style={{ color: "#3a7d56" }} />
                            <span className="flex-1 text-sm" style={{ color: "#C0C0D8" }}>{pt}</span>
                            <button onClick={() => removePoint(i)} style={{ color: "#4A4A68" }}><X size={13} /></button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text" placeholder="Add a key point…"
                          value={newPoint}
                          onChange={(e) => setNewPoint(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && addPoint()}
                          className="flex-1 px-3 py-2 rounded-xl text-sm outline-none"
                          style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                        />
                        <button onClick={addPoint} className="px-3 py-2 rounded-xl text-sm font-bold" style={{ background: "rgba(58,125,86,0.12)", color: "#3a7d56" }}>
                          Add
                        </button>
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-2" style={{ color: "#6A6A88" }}>Tags</label>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {(editDraft.tags ?? []).map((t) => (
                          <span key={t} className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56" }}>
                            #{t} <button onClick={() => removeTag(t)}>×</button>
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text" placeholder="Add tag (press Enter)"
                          value={tagInput}
                          onChange={(e) => setTagInput(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && addTag()}
                          className="flex-1 px-3 py-2 rounded-xl text-sm outline-none"
                          style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                        />
                        <button onClick={addTag} className="px-3 py-2 rounded-xl text-sm font-bold" style={{ background: "rgba(58,125,86,0.12)", color: "#3a7d56" }}>
                          Add
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => { setShowNew(false); setEditMode(false); setDraft({}); }}
                        className="flex-1 py-2.5 rounded-xl text-sm font-semibold"
                        style={{ background: "#0D0D1A", border: "1px solid #1E1E32", color: "#6A6A88" }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={showNew ? saveNew : saveEdit}
                        disabled={!editDraft.title?.trim()}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-black"
                        style={{ background: editDraft.title?.trim() ? "linear-gradient(135deg, #3a7d56, #3a7d56)" : "#1E1E32", color: editDraft.title?.trim() ? "#07070F" : "#4A4A68" }}
                      >
                        <Check size={14} /> {showNew ? "Save Notes" : "Save Changes"}
                      </button>
                    </div>
                  </div>
                </div>
              ) : activeNote ? (
                /* VIEW MODE */
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl font-black mb-1" style={{ color: "#F2F2F8" }}>{activeNote.title}</h2>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-sm" style={{ color: "#6A6A88" }}>{activeNote.speaker}</span>
                        {activeNote.church && <span className="text-xs" style={{ color: "#4A4A68" }}>· {activeNote.church}</span>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={startEdit}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#8A8AA8" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#F2F2F8"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#8A8AA8"; }}
                      >
                        <Edit3 size={12} /> Edit
                      </button>
                      <button
                        onClick={() => deleteNote(activeNote.id)}
                        className="p-1.5 rounded-lg transition-all"
                        style={{ color: "#4A4A68" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#EF4444"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#4A4A68"; }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 pb-6" style={{ borderBottom: "1px solid #1E1E32" }}>
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={13} style={{ color: "#3a7d56" }} />
                      <span className="text-sm font-bold" style={{ color: "#3a7d56" }}>{activeNote.scripture}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} style={{ color: "#4A4A68" }} />
                      <span className="text-sm" style={{ color: "#6A6A88" }}>{activeNote.date}</span>
                    </div>
                    {activeNote.tags.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <Tag size={12} style={{ color: "#4A4A68" }} />
                        {activeNote.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(58,125,86,0.08)", color: "#00AA55" }}>
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  {activeNote.body && (
                    <div className="mb-6">
                      <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#6A6A88" }}>Notes</h3>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: "#C0C0D8" }}>
                        {activeNote.body}
                      </p>
                    </div>
                  )}

                  {/* Key Points */}
                  {activeNote.keyPoints.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#6A6A88" }}>Key Points</h3>
                      <div className="space-y-2">
                        {activeNote.keyPoints.map((pt, i) => (
                          <div key={i} className="flex items-start gap-3 px-4 py-3 rounded-xl" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                            <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: "#3a7d56" }} />
                            <p className="text-sm" style={{ color: "#C0C0D8" }}>{pt}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick links */}
                  <div className="mt-8 pt-6 flex flex-wrap gap-3" style={{ borderTop: "1px solid #1E1E32" }}>
                    {activeNote.scripture && (
                      <a
                        href="/bible"
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                        style={{ background: "rgba(58,125,86,0.08)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.2)" }}
                      >
                        <BookOpen size={12} /> Open in Bible Reader
                      </a>
                    )}
                    <a
                      href="/journal"
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                      style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      Write in Journal <ChevronRight size={12} />
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
