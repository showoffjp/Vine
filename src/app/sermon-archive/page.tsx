"use client";

import { useState, useEffect } from "react";

interface Sermon {
  id: string;
  title: string;
  preacher: string;
  church: string;
  series?: string;
  date: string;
  duration: string;
  topic: string;
  mainVerse: string;
  description: string;
  tags: string[];
  views: number;
  thumbnail: string;
  type: "Video" | "Audio" | "Transcript";
}

interface SermonNote {
  sermonId: string;
  notes: string;
  keyPoints: string[];
  savedAt: string;
}

const sermons: Sermon[] = [
  {
    id: "s1",
    title: "The Prodigal God",
    preacher: "Timothy Keller",
    church: "Redeemer Presbyterian, NYC",
    series: "The Parables of Jesus",
    date: "2023-03-12",
    duration: "48 min",
    topic: "Grace",
    mainVerse: "Luke 15:11-32",
    description: "Keller unpacks the parable of the prodigal son — revealing that the real scandal of the story isn't the younger son's rebellion, but the elder son's self-righteousness, and the father's reckless, scandalous love for both.",
    tags: ["Grace", "Gospel", "Parable", "Forgiveness"],
    views: 284000,
    thumbnail: "🎙️",
    type: "Video",
  },
  {
    id: "s2",
    title: "Identity in the Storm",
    preacher: "Christine Caine",
    church: "Hillsong Church, Sydney",
    series: "Unstoppable",
    date: "2023-08-20",
    duration: "42 min",
    topic: "Identity",
    mainVerse: "Matthew 14:22-33",
    description: "Using Peter's walk on water, Christine unpacks what it looks like to step out in faith when your circumstances are screaming that you'll sink — and how Jesus meets us in the middle of the storm.",
    tags: ["Faith", "Identity", "Fear", "Courage"],
    views: 198000,
    thumbnail: "🎤",
    type: "Video",
  },
  {
    id: "s3",
    title: "When God Is Silent",
    preacher: "Louie Giglio",
    church: "Passion City Church, Atlanta",
    date: "2024-01-14",
    duration: "55 min",
    topic: "Faith",
    mainVerse: "Psalm 22:1-2",
    description: "A raw, honest sermon addressing the seasons when God feels absent. Giglio walks through biblical figures who cried out in the silence — and what they discovered on the other side.",
    tags: ["Doubt", "Faith", "Prayer", "Suffering"],
    views: 342000,
    thumbnail: "🎙️",
    type: "Video",
  },
  {
    id: "s4",
    title: "Made for More",
    preacher: "Steven Furtick",
    church: "Elevation Church, Charlotte",
    series: "Greater",
    date: "2023-11-05",
    duration: "38 min",
    topic: "Purpose",
    mainVerse: "Ephesians 3:20",
    description: "Furtick challenges the audience to expand their vision of what God can do — and to stop living within the limits of their own ability when God is 'able to do immeasurably more.'",
    tags: ["Purpose", "Calling", "Faith", "Vision"],
    views: 412000,
    thumbnail: "🎤",
    type: "Video",
  },
  {
    id: "s5",
    title: "The God Who Sees You",
    preacher: "Priscilla Shirer",
    church: "Going Beyond Ministries",
    date: "2023-06-18",
    duration: "51 min",
    topic: "God's Love",
    mainVerse: "Genesis 16:13",
    description: "Through Hagar's story — cast out, alone, and forgotten — Priscilla reveals that God sees the people society has overlooked, and El-Roi (the God who sees) hasn't missed a single detail of your story.",
    tags: ["God's Love", "Identity", "Women", "Hope"],
    views: 267000,
    thumbnail: "🎙️",
    type: "Video",
  },
  {
    id: "s6",
    title: "The Cross and the Lynching Tree",
    preacher: "James H. Cone",
    church: "Auburn Seminary",
    date: "2011-09-15",
    duration: "62 min",
    topic: "Justice",
    mainVerse: "Galatians 3:13",
    description: "A landmark theological lecture connecting the suffering of Christ on the cross with the suffering of Black Americans under racial terror — a powerful and challenging meditation on solidarity and redemption.",
    tags: ["Justice", "Race", "Cross", "Theology"],
    views: 87000,
    thumbnail: "📖",
    type: "Video",
  },
  {
    id: "s7",
    title: "Trusting God in the Dark",
    preacher: "John Piper",
    church: "Bethlehem Baptist, Minneapolis",
    series: "Providence",
    date: "2022-03-27",
    duration: "44 min",
    topic: "Suffering",
    mainVerse: "Romans 8:28",
    description: "Piper explores what it means for Romans 8:28 to be true not just doctrinally, but personally — when the 'all things' includes things that feel senseless and devastating.",
    tags: ["Suffering", "Providence", "Faith", "Trust"],
    views: 156000,
    thumbnail: "🎙️",
    type: "Audio",
  },
  {
    id: "s8",
    title: "The Sabbath as Resistance",
    preacher: "Walter Brueggemann",
    church: "Columbia Theological Seminary",
    date: "2019-10-03",
    duration: "58 min",
    topic: "Sabbath",
    mainVerse: "Exodus 20:8-11",
    description: "Brueggemann argues that Sabbath is not a religious nicety but a radical act of defiance against the anxiety-producing, productivity-obsessed systems of our age — as it was in ancient Egypt.",
    tags: ["Sabbath", "Rest", "Culture", "Justice"],
    views: 74000,
    thumbnail: "📖",
    type: "Video",
  },
  {
    id: "s9",
    title: "You Are Not Alone",
    preacher: "Sarah Jakes Roberts",
    church: "The Potter's House, Dallas",
    date: "2024-02-11",
    duration: "46 min",
    topic: "Community",
    mainVerse: "John 11:35",
    description: "A sermon for those who feel isolated in their pain — Sarah unpacks Jesus weeping at Lazarus's tomb as proof that God doesn't simply observe our suffering but enters it fully with us.",
    tags: ["Community", "Suffering", "God's Love", "Hope"],
    views: 321000,
    thumbnail: "🎤",
    type: "Video",
  },
  {
    id: "s10",
    title: "What Is the Gospel?",
    preacher: "D.A. Carson",
    church: "The Gospel Coalition",
    series: "Basics of the Faith",
    date: "2020-06-14",
    duration: "52 min",
    topic: "Gospel",
    mainVerse: "1 Corinthians 15:1-11",
    description: "A careful, scholarly yet accessible unpacking of what 'gospel' actually means — tracing it through Scripture and clarifying common misunderstandings that dilute its power.",
    tags: ["Gospel", "Theology", "Salvation", "Scripture"],
    views: 203000,
    thumbnail: "📖",
    type: "Video",
  },
  {
    id: "s11",
    title: "Radical Generosity",
    preacher: "Francis Chan",
    church: "Cornerstone Church, Simi Valley",
    date: "2018-04-22",
    duration: "40 min",
    topic: "Generosity",
    mainVerse: "Luke 21:1-4",
    description: "Chan challenges American Christianity's comfortable relationship with wealth — using the widow's mite as a mirror that asks how much we'd actually give up if Jesus asked us to.",
    tags: ["Generosity", "Money", "Sacrifice", "Discipleship"],
    views: 289000,
    thumbnail: "🎙️",
    type: "Video",
  },
  {
    id: "s12",
    title: "Healing the Wounded Heart",
    preacher: "Dan Allender",
    church: "The Seattle School",
    date: "2021-09-09",
    duration: "65 min",
    topic: "Healing",
    mainVerse: "Psalm 13",
    description: "A trauma-informed, deeply pastoral talk on how God meets abuse survivors and those with deep wounds — and why the church must do better at holding space for the hardest stories.",
    tags: ["Healing", "Trauma", "Lament", "Counseling"],
    views: 91000,
    thumbnail: "📖",
    type: "Audio",
  },
];

const topics = ["All", "Grace", "Identity", "Faith", "Purpose", "Suffering", "Gospel", "Justice", "Prayer", "Generosity", "Healing", "Community", "Sabbath", "God's Love"];

export default function SermonArchivePage() {
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [notes, setNotes] = useState<Record<string, SermonNote>>({});
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);
  const [noteText, setNoteText] = useState("");
  const [filterTopic, setFilterTopic] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "saved">("all");
  const [noteMode, setNoteMode] = useState(false);

  useEffect(() => {
    try {
      const s = localStorage.getItem("vine_sermons_saved");
      if (s) setSavedIds(new Set(JSON.parse(s)));
      const l = localStorage.getItem("vine_sermons_liked");
      if (l) setLikedIds(new Set(JSON.parse(l)));
      const n = localStorage.getItem("vine_sermon_notes");
      if (n) setNotes(JSON.parse(n));
    } catch {}
  }, []);

  const handleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_sermons_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleLike = (id: string) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_sermons_liked", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleSaveNote = (sermon: Sermon) => {
    if (!noteText.trim()) return;
    const note: SermonNote = {
      sermonId: sermon.id,
      notes: noteText,
      keyPoints: noteText.split("\n").filter((l) => l.trim().startsWith("-")).map((l) => l.replace(/^-\s*/, "")),
      savedAt: new Date().toISOString(),
    };
    const next = { ...notes, [sermon.id]: note };
    setNotes(next);
    try { localStorage.setItem("vine_sermon_notes", JSON.stringify(next)); } catch {}
    setNoteMode(false);
    setNoteText("");
  };

  const filtered = sermons.filter((s) => {
    if (activeTab === "saved" && !savedIds.has(s.id)) return false;
    if (filterTopic !== "All" && s.topic !== filterTopic && !s.tags.includes(filterTopic)) return false;
    if (filterType !== "All" && s.type !== filterType) return false;
    if (search && !s.title.toLowerCase().includes(search.toLowerCase()) && !s.preacher.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0a0a1e 0%, #07070F 100%)",
        padding: "52px 24px 36px",
        textAlign: "center",
        borderBottom: "1px solid #1E1E32",
      }}>
        <div style={{ fontSize: 44, marginBottom: 10 }}>🎙️</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Sermon Archive</h1>
        <p style={{ fontSize: 16, color: "#9898B3", maxWidth: 520, margin: "0 auto 24px" }}>
          Curated sermons from preachers around the world. Take notes, save favorites, and build your library.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {[
            { value: sermons.length.toString(), label: "Sermons" },
            { value: savedIds.size.toString(), label: "Saved" },
            { value: Object.keys(notes).length.toString(), label: "Notes Taken" },
            { value: "12+", label: "Preachers" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#00FF88" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#9898B3" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px" }}>
        {/* Search + tabs */}
        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ display: "flex", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: 4, gap: 4 }}>
            {(["all", "saved"] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{ padding: "7px 18px", borderRadius: 7, border: "none",
                  background: activeTab === tab ? "#6B4FBB" : "transparent",
                  color: activeTab === tab ? "#fff" : "#9898B3",
                  cursor: "pointer", fontWeight: 600, fontSize: 13 }}>
                {tab === "all" ? "All Sermons" : `Saved (${savedIds.size})`}
              </button>
            ))}
          </div>
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search sermons or preachers..."
            style={{ flex: 1, minWidth: 200, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: "9px 14px", color: "#F2F2F8", fontSize: 13, outline: "none" }} />
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}
            style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: "9px 14px", color: "#9898B3", fontSize: 13 }}>
            <option value="All">All Types</option>
            <option>Video</option>
            <option>Audio</option>
            <option>Transcript</option>
          </select>
        </div>

        {/* Topic filters */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
          {topics.map((t) => (
            <button key={t} onClick={() => setFilterTopic(t)}
              style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                border: `1px solid ${filterTopic === t ? "#6B4FBB" : "#1E1E32"}`,
                background: filterTopic === t ? "#6B4FBB20" : "transparent",
                color: filterTopic === t ? "#6B4FBB" : "#9898B3" }}>
              {t}
            </button>
          ))}
        </div>

        <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 16 }}>{filtered.length} sermons</div>

        {/* Sermon grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
          {filtered.map((sermon) => {
            const saved = savedIds.has(sermon.id);
            const liked = likedIds.has(sermon.id);
            const hasNote = !!notes[sermon.id];
            return (
              <div key={sermon.id}
                style={{ background: "#12121F", border: `1px solid ${saved ? "#6B4FBB40" : "#1E1E32"}`, borderRadius: 16, padding: 20, cursor: "pointer" }}
                onClick={() => { setSelectedSermon(sermon); setNoteMode(false); setNoteText(notes[sermon.id]?.notes ?? ""); }}>
                <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: "#1E1E32", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                    {sermon.thumbnail}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                      <span style={{ padding: "1px 8px", borderRadius: 20, fontSize: 10,
                        background: sermon.type === "Video" ? "#EF444420" : sermon.type === "Audio" ? "#8B5CF620" : "#3B82F620",
                        color: sermon.type === "Video" ? "#EF4444" : sermon.type === "Audio" ? "#8B5CF6" : "#3B82F6",
                        fontWeight: 600 }}>
                        {sermon.type}
                      </span>
                      <span style={{ padding: "1px 8px", borderRadius: 20, background: "#6B4FBB20", color: "#6B4FBB", fontSize: 10 }}>{sermon.topic}</span>
                      {hasNote && <span style={{ padding: "1px 8px", borderRadius: 20, background: "#00FF8815", color: "#00FF88", fontSize: 10 }}>📝</span>}
                    </div>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#F2F2F8", margin: 0, lineHeight: 1.3 }}>{sermon.title}</h3>
                  </div>
                </div>

                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 4 }}>{sermon.preacher}</div>
                <div style={{ fontSize: 11, color: "#9898B3", marginBottom: 10 }}>{sermon.church}{sermon.series ? ` · ${sermon.series}` : ""}</div>

                <p style={{ fontSize: 12, color: "#9898B3", lineHeight: 1.6, marginBottom: 12 }}>
                  {sermon.description.slice(0, 100)}...
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: 11, color: "#9898B3" }}>
                    {sermon.mainVerse} · {sermon.duration} · {sermon.views.toLocaleString()} views
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button onClick={(e) => { e.stopPropagation(); handleLike(sermon.id); }}
                      style={{ padding: "4px 8px", borderRadius: 6, border: "none", background: liked ? "#00FF8815" : "#1E1E32", color: liked ? "#00FF88" : "#9898B3", cursor: "pointer", fontSize: 12 }}>
                      ♥
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); handleSave(sermon.id); }}
                      style={{ padding: "4px 8px", borderRadius: 6, border: "none", background: saved ? "#6B4FBB20" : "#1E1E32", color: saved ? "#6B4FBB" : "#9898B3", cursor: "pointer", fontSize: 13 }}>
                      {saved ? "★" : "☆"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 24px" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
            <div style={{ color: "#9898B3" }}>No sermons match your filters.</div>
          </div>
        )}
      </div>

      {/* Sermon Detail Modal */}
      {selectedSermon && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => { setSelectedSermon(null); setNoteMode(false); }}>
          <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 20, padding: 28, maxWidth: 600, width: "100%", maxHeight: "88vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
              <span style={{ padding: "3px 10px", borderRadius: 20, fontSize: 11,
                background: selectedSermon.type === "Video" ? "#EF444420" : "#8B5CF620",
                color: selectedSermon.type === "Video" ? "#EF4444" : "#8B5CF6", fontWeight: 600 }}>
                {selectedSermon.type}
              </span>
              <span style={{ padding: "3px 10px", borderRadius: 20, background: "#6B4FBB20", color: "#6B4FBB", fontSize: 11 }}>{selectedSermon.topic}</span>
            </div>

            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#F2F2F8", marginBottom: 6, lineHeight: 1.3 }}>{selectedSermon.title}</h2>
            <div style={{ fontSize: 14, color: "#9898B3", marginBottom: 2 }}>{selectedSermon.preacher}</div>
            <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 16 }}>
              {selectedSermon.church}{selectedSermon.series ? ` · ${selectedSermon.series}` : ""} · {selectedSermon.duration} · {new Date(selectedSermon.date).toLocaleDateString()}
            </div>

            <div style={{ borderLeft: "3px solid #6B4FBB", paddingLeft: 14, marginBottom: 16 }}>
              <div style={{ fontSize: 13, color: "#9898B3" }}>Main passage</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#6B4FBB" }}>{selectedSermon.mainVerse}</div>
            </div>

            <p style={{ fontSize: 14, color: "#9898B3", lineHeight: 1.75, marginBottom: 20 }}>{selectedSermon.description}</p>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              {selectedSermon.tags.map((tag) => (
                <span key={tag} style={{ padding: "3px 10px", borderRadius: 20, background: "#1E1E32", color: "#9898B3", fontSize: 11 }}>{tag}</span>
              ))}
            </div>

            {/* Note section */}
            <div style={{ background: "#07070F", borderRadius: 12, padding: 16, marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#F2F2F8" }}>📝 My Notes</div>
                <button onClick={() => setNoteMode(!noteMode)}
                  style={{ padding: "4px 12px", borderRadius: 6, border: "none", background: "#1E1E32", color: "#9898B3", cursor: "pointer", fontSize: 12 }}>
                  {noteMode ? "Cancel" : notes[selectedSermon.id] ? "Edit" : "Add Notes"}
                </button>
              </div>

              {noteMode ? (
                <>
                  <textarea value={noteText} onChange={(e) => setNoteText(e.target.value)} rows={6}
                    placeholder="Take notes here... Start lines with - to create key points"
                    style={{ width: "100%", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 12px", color: "#F2F2F8", fontSize: 13, outline: "none", resize: "vertical", boxSizing: "border-box", marginBottom: 10 }} />
                  <button onClick={() => handleSaveNote(selectedSermon)}
                    disabled={!noteText.trim()}
                    style={{ padding: "8px 20px", borderRadius: 8, border: "none",
                      background: noteText.trim() ? "#00FF88" : "#1E1E32",
                      color: noteText.trim() ? "#07070F" : "#9898B3",
                      cursor: noteText.trim() ? "pointer" : "default", fontWeight: 600, fontSize: 13 }}>
                    Save Notes
                  </button>
                </>
              ) : notes[selectedSermon.id] ? (
                <div>
                  <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.7, margin: "0 0 8px" }}>{notes[selectedSermon.id].notes}</p>
                  <div style={{ fontSize: 11, color: "#9898B3" }}>
                    Saved {new Date(notes[selectedSermon.id].savedAt).toLocaleDateString()}
                  </div>
                </div>
              ) : (
                <div style={{ fontSize: 13, color: "#9898B3" }}>No notes yet. Click "Add Notes" to start.</div>
              )}
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => handleLike(selectedSermon.id)}
                style={{ flex: 1, padding: "11px 16px", borderRadius: 10, border: "none",
                  background: likedIds.has(selectedSermon.id) ? "#00FF8815" : "#1E1E32",
                  color: likedIds.has(selectedSermon.id) ? "#00FF88" : "#9898B3",
                  cursor: "pointer", fontWeight: 600, fontSize: 14 }}>
                ♥ {likedIds.has(selectedSermon.id) ? "Liked" : "Like"}
              </button>
              <button onClick={() => handleSave(selectedSermon.id)}
                style={{ flex: 1, padding: "11px 16px", borderRadius: 10, border: "none",
                  background: savedIds.has(selectedSermon.id) ? "#6B4FBB20" : "#1E1E32",
                  color: savedIds.has(selectedSermon.id) ? "#6B4FBB" : "#9898B3",
                  cursor: "pointer", fontWeight: 600, fontSize: 14 }}>
                {savedIds.has(selectedSermon.id) ? "★ Saved" : "☆ Save"}
              </button>
              <button onClick={() => { setSelectedSermon(null); setNoteMode(false); }}
                style={{ padding: "11px 16px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 14 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
