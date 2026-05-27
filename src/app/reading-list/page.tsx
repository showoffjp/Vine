"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Plus, X, Star, CheckCircle2, Clock, ChevronRight, Search, Edit2, Trash2 } from "lucide-react";

type ReadStatus = "reading" | "want-to-read" | "completed" | "abandoned";

interface BookEntry {
  id: string;
  title: string;
  author: string;
  genre: string;
  coverEmoji: string;
  status: ReadStatus;
  rating?: 1 | 2 | 3 | 4 | 5;
  currentPage?: number;
  totalPages?: number;
  notes: string;
  startedAt?: string;
  finishedAt?: string;
  addedAt: string;
  year?: number;
}

const GENRES = ["Theology", "Devotional", "Biography", "Apologetics", "Church History", "Christian Living", "Commentary", "Prophecy", "Missions", "Psychology & Faith", "Fiction"];
const GENRE_COLORS: Record<string, string> = {
  "Theology": "#6B4FBB",
  "Devotional": "#00FF88",
  "Biography": "#F59E0B",
  "Apologetics": "#3B82F6",
  "Church History": "#8B5CF6",
  "Christian Living": "#10B981",
  "Commentary": "#EC4899",
  "Prophecy": "#EF4444",
  "Missions": "#F97316",
  "Psychology & Faith": "#14B8A6",
  "Fiction": "#6366F1",
};

const COVER_EMOJIS = ["📖", "✝️", "🕊️", "✨", "🙏", "🌿", "📜", "⛪", "🌍", "💡", "🔥", "📿"];

const STATUS_CONFIG: Record<ReadStatus, { label: string; color: string; icon: string }> = {
  "reading": { label: "Reading", color: "#00FF88", icon: "📚" },
  "want-to-read": { label: "Want to Read", color: "#6B4FBB", icon: "🔖" },
  "completed": { label: "Completed", color: "#F59E0B", icon: "✅" },
  "abandoned": { label: "Abandoned", color: "#4A4A68", icon: "⏸️" },
};

const seedBooks: BookEntry[] = [
  {
    id: "b-001", title: "Mere Christianity", author: "C.S. Lewis", genre: "Apologetics",
    coverEmoji: "📖", status: "completed", rating: 5,
    totalPages: 227, notes: "Changed my life. Read it at 2am during my season of doubt. Lewis dismantles every objection methodically and then rebuilds the case for Christianity from the ground up. The 'Liar, Lunatic, or Lord' trilemma is still the most elegant argument I've encountered.",
    startedAt: "2016-03-10", finishedAt: "2016-03-18", addedAt: "2016-03-10", year: 1952,
  },
  {
    id: "b-002", title: "The Pursuit of God", author: "A.W. Tozer", genre: "Devotional",
    coverEmoji: "✨", status: "completed", rating: 5,
    totalPages: 128, notes: "Dense with truth on every page. Tozer writes about mystical union with God without losing any biblical grounding. His chapter on 'The Blessedness of Possessing Nothing' broke me open.",
    startedAt: "2020-01-01", finishedAt: "2020-01-15", addedAt: "2020-01-01", year: 1948,
  },
  {
    id: "b-003", title: "Knowing God", author: "J.I. Packer", genre: "Theology",
    coverEmoji: "✝️", status: "completed", rating: 5,
    totalPages: 284, notes: "The best book on the attributes of God for a general reader. Packer is accessible without being shallow. His chapter on 'God's Wisdom and Ours' is something I return to regularly.",
    startedAt: "2018-06-01", finishedAt: "2018-07-10", addedAt: "2018-06-01", year: 1973,
  },
  {
    id: "b-004", title: "The Cost of Discipleship", author: "Dietrich Bonhoeffer", genre: "Theology",
    coverEmoji: "🕊️", status: "reading", rating: undefined,
    currentPage: 143, totalPages: 316, notes: "Bonhoeffer's distinction between 'cheap grace' and 'costly grace' is one of the most important ideas I've encountered this year. Reading slowly — this one demands it.",
    startedAt: "2026-04-15", addedAt: "2026-04-10", year: 1937,
  },
  {
    id: "b-005", title: "The Screwtape Letters", author: "C.S. Lewis", genre: "Fiction",
    coverEmoji: "📜", status: "completed", rating: 4,
    totalPages: 172, notes: "Clever and unsettling. Lewis exposes spiritual warfare by inverting it — the demon's-eye view of how we're tempted is too accurate to be comfortable.",
    startedAt: "2021-08-01", finishedAt: "2021-08-12", addedAt: "2021-08-01", year: 1942,
  },
  {
    id: "b-006", title: "The Reason for God", author: "Timothy Keller", genre: "Apologetics",
    coverEmoji: "💡", status: "completed", rating: 5,
    totalPages: 293, notes: "Keller is Lewis for our generation. He engages secular objections with charity and precision. I've given this book away more than any other.",
    startedAt: "2019-09-01", finishedAt: "2019-10-15", addedAt: "2019-09-01", year: 2008,
  },
  {
    id: "b-007", title: "Surprised by Hope", author: "N.T. Wright", genre: "Theology",
    coverEmoji: "🌍", status: "reading", rating: undefined,
    currentPage: 87, totalPages: 332, notes: "Wright's reconstruction of a biblical theology of resurrection and new creation is eye-opening. The phrase 'life after life after death' reframes everything about eschatology.",
    startedAt: "2026-05-01", addedAt: "2026-04-28", year: 2008,
  },
  {
    id: "b-008", title: "Boundaries", author: "Dr. Henry Cloud & Dr. John Townsend", genre: "Psychology & Faith",
    coverEmoji: "🌿", status: "completed", rating: 4,
    totalPages: 352, notes: "Practical and biblical. Helped me understand codependency in relationships and why saying 'no' can be an act of love.",
    startedAt: "2022-02-01", finishedAt: "2022-03-15", addedAt: "2022-02-01", year: 1992,
  },
  {
    id: "b-009", title: "Radical", author: "David Platt", genre: "Christian Living",
    coverEmoji: "🔥", status: "completed", rating: 4,
    totalPages: 240, notes: "Convicting. Platt challenges the American dream head-on. Made me re-examine my own comfort-seeking faith. Didn't agree with everything but it moved me.",
    startedAt: "2017-03-01", finishedAt: "2017-04-01", addedAt: "2017-03-01", year: 2010,
  },
  {
    id: "b-010", title: "The Great Divorce", author: "C.S. Lewis", genre: "Fiction",
    coverEmoji: "📖", status: "want-to-read",
    notes: "Recommended by three people this month. Lewis's vision of heaven and hell as a bus trip.",
    addedAt: "2026-05-20", year: 1945,
  },
  {
    id: "b-011", title: "God's Smuggler", author: "Brother Andrew", genre: "Biography",
    coverEmoji: "⛪", status: "want-to-read",
    notes: "The story of Bible smuggling into Communist countries. Every Christian should read this.",
    addedAt: "2026-05-15", year: 1967,
  },
  {
    id: "b-012", title: "Orthodoxy", author: "G.K. Chesterton", genre: "Theology",
    coverEmoji: "✨", status: "want-to-read",
    notes: "Chesterton's account of how he arrived at Christianity. My theologian friend says this is essential.",
    addedAt: "2026-05-10", year: 1908,
  },
];

export default function ReadingListPage() {
  const [books, setBooks] = useState<BookEntry[]>(() => {
    try {
      const s = localStorage.getItem("vine_reading_list");
      return s ? JSON.parse(s) : seedBooks;
    } catch { return seedBooks; }
  });

  const [activeStatus, setActiveStatus] = useState<ReadStatus | "all">("all");
  const [activeGenre, setActiveGenre] = useState("All");
  const [search, setSearch] = useState("");
  const [showCompose, setShowCompose] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: "", author: "", genre: "Theology", coverEmoji: "📖",
    status: "want-to-read" as ReadStatus, currentPage: "", totalPages: "", notes: "", year: "",
  });

  useEffect(() => {
    try { localStorage.setItem("vine_reading_list", JSON.stringify(books)); } catch {}
  }, [books]);

  const resetForm = () => {
    setForm({ title: "", author: "", genre: "Theology", coverEmoji: "📖", status: "want-to-read", currentPage: "", totalPages: "", notes: "", year: "" });
    setEditingId(null);
  };

  const handleEdit = (b: BookEntry) => {
    setForm({
      title: b.title, author: b.author, genre: b.genre, coverEmoji: b.coverEmoji,
      status: b.status, currentPage: b.currentPage?.toString() ?? "", totalPages: b.totalPages?.toString() ?? "",
      notes: b.notes, year: b.year?.toString() ?? "",
    });
    setEditingId(b.id);
    setShowCompose(true);
  };

  const handleSubmit = () => {
    if (!form.title.trim() || !form.author.trim()) return;
    const now = new Date().toISOString().split("T")[0];
    if (editingId) {
      setBooks((prev) => prev.map((b) => b.id !== editingId ? b : {
        ...b, title: form.title, author: form.author, genre: form.genre, coverEmoji: form.coverEmoji,
        status: form.status, currentPage: form.currentPage ? Number(form.currentPage) : undefined,
        totalPages: form.totalPages ? Number(form.totalPages) : undefined, notes: form.notes,
        year: form.year ? Number(form.year) : undefined,
      }));
    } else {
      const newBook: BookEntry = {
        id: `b-${Date.now()}`, title: form.title, author: form.author, genre: form.genre,
        coverEmoji: form.coverEmoji, status: form.status,
        currentPage: form.currentPage ? Number(form.currentPage) : undefined,
        totalPages: form.totalPages ? Number(form.totalPages) : undefined,
        notes: form.notes, addedAt: now,
        year: form.year ? Number(form.year) : undefined,
        startedAt: form.status === "reading" ? now : undefined,
        finishedAt: form.status === "completed" ? now : undefined,
      };
      setBooks((prev) => [newBook, ...prev]);
    }
    setShowCompose(false);
    resetForm();
  };

  const setRating = (bookId: string, rating: 1 | 2 | 3 | 4 | 5) => {
    setBooks((prev) => prev.map((b) => b.id === bookId ? { ...b, rating } : b));
  };

  const filtered = books.filter((b) => {
    const statusMatch = activeStatus === "all" || b.status === activeStatus;
    const genreMatch = activeGenre === "All" || b.genre === activeGenre;
    const searchMatch = !search || b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase());
    return statusMatch && genreMatch && searchMatch;
  });

  const completedCount = books.filter((b) => b.status === "completed").length;
  const readingCount = books.filter((b) => b.status === "reading").length;
  const wantCount = books.filter((b) => b.status === "want-to-read").length;
  const avgRating = (() => {
    const rated = books.filter((b) => b.rating);
    if (!rated.length) return null;
    return (rated.reduce((s, b) => s + (b.rating ?? 0), 0) / rated.length).toFixed(1);
  })();

  const selectedBookData = books.find((b) => b.id === selectedBook);

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">

        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-2">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} style={{ color: "#00FF88" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>Reading List</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black mb-3">
                Grow through{" "}
                <span style={{ background: "linear-gradient(135deg, #00FF88, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  great books.
                </span>
              </h1>
              <p className="text-lg max-w-xl" style={{ color: "#6A6A88" }}>
                Track your spiritual reading, rate books, and build a library of faith-shaping literature.
              </p>
            </div>
            <button
              onClick={() => { resetForm(); setShowCompose(true); }}
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm"
              style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)", color: "#07070F" }}
            >
              <Plus size={15} /> Add Book
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-6">
            {[
              { label: `${completedCount} Completed`, color: "#F59E0B", icon: "✅" },
              { label: `${readingCount} Reading now`, color: "#00FF88", icon: "📚" },
              { label: `${wantCount} Want to read`, color: "#6B4FBB", icon: "🔖" },
              ...(avgRating ? [{ label: `${avgRating} Avg rating`, color: "#EC4899", icon: "⭐" }] : []),
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: `rgba(255,255,255,0.03)`, border: "1px solid rgba(255,255,255,0.08)" }}>
                <span>{s.icon}</span>
                <span className="text-sm font-bold" style={{ color: s.color }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {showCompose && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}>
            <div className="w-full max-w-lg rounded-2xl p-6 max-h-[90vh] overflow-y-auto" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-black text-lg" style={{ color: "#F2F2F8" }}>{editingId ? "Edit Book" : "Add Book"}</h3>
                <button onClick={() => { setShowCompose(false); resetForm(); }} style={{ color: "#4A4A68" }}><X size={20} /></button>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} placeholder="Book title" className="px-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }} />
                  <input value={form.author} onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))} placeholder="Author" className="px-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <select value={form.genre} onChange={(e) => setForm((f) => ({ ...f, genre: e.target.value }))} className="px-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}>
                    {GENRES.map((g) => <option key={g} value={g} style={{ background: "#12121F" }}>{g}</option>)}
                  </select>
                  <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as ReadStatus }))} className="px-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}>
                    {(Object.entries(STATUS_CONFIG) as [ReadStatus, typeof STATUS_CONFIG[ReadStatus]][]).map(([k, v]) => (
                      <option key={k} value={k} style={{ background: "#12121F" }}>{v.icon} {v.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6A6A88" }}>Cover emoji</label>
                  <div className="flex gap-2 flex-wrap">
                    {COVER_EMOJIS.map((e) => (
                      <button key={e} onClick={() => setForm((f) => ({ ...f, coverEmoji: e }))} className="w-9 h-9 rounded-lg flex items-center justify-center text-xl" style={{ background: form.coverEmoji === e ? "rgba(0,255,136,0.15)" : "rgba(255,255,255,0.04)", border: form.coverEmoji === e ? "1px solid rgba(0,255,136,0.4)" : "1px solid rgba(255,255,255,0.08)" }}>
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
                {(form.status === "reading" || form.status === "completed") && (
                  <div className="grid grid-cols-2 gap-3">
                    <input type="number" value={form.currentPage} onChange={(e) => setForm((f) => ({ ...f, currentPage: e.target.value }))} placeholder="Current page" min={0} className="px-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }} />
                    <input type="number" value={form.totalPages} onChange={(e) => setForm((f) => ({ ...f, totalPages: e.target.value }))} placeholder="Total pages" min={1} className="px-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }} />
                  </div>
                )}
                <input type="number" value={form.year} onChange={(e) => setForm((f) => ({ ...f, year: e.target.value }))} placeholder="Publication year (optional)" min={1000} max={2026} className="w-full px-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }} />
                <textarea value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} placeholder="Notes, quotes, or review..." rows={3} className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }} />
              </div>
              <div className="flex gap-3 mt-5">
                <button onClick={() => { setShowCompose(false); resetForm(); }} className="flex-1 py-2.5 rounded-xl font-bold text-sm" style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}>Cancel</button>
                <button onClick={handleSubmit} disabled={!form.title.trim() || !form.author.trim()} className="flex-1 py-2.5 rounded-xl font-black text-sm" style={{ background: (form.title.trim() && form.author.trim()) ? "linear-gradient(135deg, #00FF88, #00BB55)" : "rgba(255,255,255,0.06)", color: (form.title.trim() && form.author.trim()) ? "#07070F" : "#4A4A68" }}>
                  {editingId ? "Save" : "Add Book"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete confirm */}
        {confirmDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="rounded-2xl p-6 max-w-sm w-full" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
              <p className="font-black text-base mb-2" style={{ color: "#F2F2F8" }}>Remove this book?</p>
              <div className="flex gap-3 mt-4">
                <button onClick={() => setConfirmDelete(null)} className="flex-1 py-2 rounded-xl font-bold text-sm" style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}>Cancel</button>
                <button onClick={() => { setBooks((prev) => prev.filter((b) => b.id !== confirmDelete)); setConfirmDelete(null); if (selectedBook === confirmDelete) setSelectedBook(null); }} className="flex-1 py-2 rounded-xl font-black text-sm" style={{ background: "rgba(239,68,68,0.15)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.3)" }}>Remove</button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            {/* Book list */}
            <div className="flex-1 min-w-0">
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <div className="relative flex-1">
                  <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#4A4A68" }} />
                  <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search books..." className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }} />
                </div>
              </div>

              {/* Status tabs */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                {([["all", "All", "#8A8AA8"], ...Object.entries(STATUS_CONFIG).map(([k, v]) => [k, v.label, v.color])] as [string, string, string][]).map(([k, label, color]) => (
                  <button key={k} onClick={() => setActiveStatus(k as ReadStatus | "all")} className="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap" style={{ background: activeStatus === k ? `${color}15` : "rgba(255,255,255,0.03)", border: activeStatus === k ? `1px solid ${color}40` : "1px solid rgba(255,255,255,0.06)", color: activeStatus === k ? color : "#6A6A88" }}>
                    {STATUS_CONFIG[k as ReadStatus]?.icon ?? "📚"} {label} {k !== "all" ? `(${books.filter((b) => b.status === k).length})` : `(${books.length})`}
                  </button>
                ))}
              </div>

              {/* Genre pills */}
              <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
                {["All", ...GENRES].map((g) => (
                  <button key={g} onClick={() => setActiveGenre(g)} className="px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap" style={{ background: activeGenre === g ? `${GENRE_COLORS[g] ?? "#8A8AA8"}15` : "rgba(255,255,255,0.03)", border: activeGenre === g ? `1px solid ${GENRE_COLORS[g] ?? "#8A8AA8"}40` : "1px solid rgba(255,255,255,0.06)", color: activeGenre === g ? GENRE_COLORS[g] ?? "#8A8AA8" : "#6A6A88" }}>
                    {g}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.length === 0 && (
                  <div className="col-span-full text-center py-16" style={{ color: "#4A4A68" }}>
                    <BookOpen size={40} className="mx-auto mb-3 opacity-20" />
                    <p>No books found</p>
                  </div>
                )}
                {filtered.map((book) => {
                  const sc = STATUS_CONFIG[book.status];
                  const gc = GENRE_COLORS[book.genre] ?? "#8A8AA8";
                  const pct = book.currentPage && book.totalPages ? Math.min(100, Math.round((book.currentPage / book.totalPages) * 100)) : null;
                  return (
                    <div
                      key={book.id}
                      className="rounded-2xl p-5 cursor-pointer transition-all relative group"
                      style={{ background: selectedBook === book.id ? "rgba(0,255,136,0.06)" : "#12121F", border: selectedBook === book.id ? "1px solid rgba(0,255,136,0.2)" : "1px solid #1E1E32" }}
                      onClick={() => setSelectedBook(selectedBook === book.id ? null : book.id)}
                    >
                      {/* Hover actions */}
                      <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={(e) => { e.stopPropagation(); handleEdit(book); }} className="p-1.5 rounded-lg" style={{ background: "rgba(0,0,0,0.5)", color: "#6A6A88" }}><Edit2 size={11} /></button>
                        <button onClick={(e) => { e.stopPropagation(); setConfirmDelete(book.id); }} className="p-1.5 rounded-lg" style={{ background: "rgba(0,0,0,0.5)", color: "#6A6A88" }}><Trash2 size={11} /></button>
                      </div>

                      <div className="text-4xl mb-3">{book.coverEmoji}</div>
                      <h3 className="font-black text-sm mb-0.5 pr-12 leading-tight" style={{ color: "#F2F2F8" }}>{book.title}</h3>
                      <p className="text-xs mb-3" style={{ color: "#6A6A88" }}>{book.author}{book.year ? ` · ${book.year}` : ""}</p>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${sc.color}15`, color: sc.color, border: `1px solid ${sc.color}30` }}>{sc.icon} {sc.label}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${gc}15`, color: gc, border: `1px solid ${gc}30` }}>{book.genre}</span>
                      </div>

                      {/* Progress bar for reading */}
                      {pct !== null && (
                        <div className="mb-3">
                          <div className="w-full h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                            <div className="h-1.5 rounded-full" style={{ width: `${pct}%`, background: "#00FF88" }} />
                          </div>
                          <p className="text-[10px] mt-1" style={{ color: "#4A4A68" }}>p.{book.currentPage} / {book.totalPages} · {pct}%</p>
                        </div>
                      )}

                      {/* Rating */}
                      {book.status === "completed" && (
                        <div className="flex gap-0.5" onClick={(e) => e.stopPropagation()}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} onClick={() => setRating(book.id, star as 1 | 2 | 3 | 4 | 5)}>
                              <Star size={13} fill={book.rating && book.rating >= star ? "#F59E0B" : "none"} style={{ color: book.rating && book.rating >= star ? "#F59E0B" : "#1E1E32" }} />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Note preview */}
                      {book.notes && selectedBook !== book.id && (
                        <p className="text-xs mt-3 line-clamp-2" style={{ color: "#6A6A88" }}>{book.notes}</p>
                      )}

                      {/* Expanded notes */}
                      {selectedBook === book.id && book.notes && (
                        <div className="mt-3 p-3 rounded-xl" style={{ background: "rgba(0,0,0,0.2)" }}>
                          <p className="text-xs leading-relaxed" style={{ color: "#C0C0D8" }}>{book.notes}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
