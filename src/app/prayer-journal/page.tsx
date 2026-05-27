"use client";
import { useState } from "react";

interface PrayerEntry {
  id: string;
  date: string;
  title: string;
  body: string;
  category: string;
  mood: string;
  verse?: string;
  verseRef?: string;
  answered: boolean;
  answeredDate?: string;
  answeredNote?: string;
  tags: string[];
}

const SEED_ENTRIES: PrayerEntry[] = [
  {
    id: "1",
    date: "2026-05-26",
    title: "Guidance for the new job decision",
    body: "Lord, I'm standing at a crossroads. This job offer feels like an open door, but I'm afraid of leaving what's familiar. I trust that You direct the steps of the righteous. Give me clarity and peace. Help me not to lean on my own understanding but to acknowledge You in all my ways.",
    category: "Guidance",
    mood: "Uncertain",
    verse: "Trust in the Lord with all your heart and lean not on your own understanding.",
    verseRef: "Proverbs 3:5",
    answered: false,
    tags: ["work", "decision", "provision"],
  },
  {
    id: "2",
    date: "2026-05-20",
    title: "Prayer for my sister's health",
    body: "Father, You are the Great Physician. My sister is struggling with her diagnosis and the fear is overwhelming her. I pray for miraculous healing and for doctors with wisdom. Most of all, let her feel Your presence through this dark valley. Give our family supernatural peace.",
    category: "Healing",
    mood: "Burdened",
    verse: "By his wounds we are healed.",
    verseRef: "Isaiah 53:5",
    answered: false,
    tags: ["family", "healing", "faith"],
  },
  {
    id: "3",
    date: "2026-05-10",
    title: "Financial breakthrough",
    body: "Lord, the bills are piling and I am stretched thin. I know You own the cattle on a thousand hills. I release this anxiety to You and ask for provision—not just enough, but abundance so I can give generously. Remind me that my identity is not in what I have.",
    category: "Provision",
    mood: "Anxious",
    verse: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
    verseRef: "Philippians 4:19",
    answered: true,
    answeredDate: "2026-05-24",
    answeredNote: "Got a freelance contract that covered everything and more. God is faithful!",
    tags: ["finances", "provision", "trust"],
  },
  {
    id: "4",
    date: "2026-04-30",
    title: "For my church community",
    body: "Jesus, You said where two or three gather in Your name, You are there. I pray for our church family—that we would be marked by genuine love, that the lonely find belonging, that the broken find restoration. Give our pastor wisdom and protect him from discouragement.",
    category: "Intercession",
    mood: "Hopeful",
    answered: false,
    tags: ["church", "community", "intercession"],
  },
  {
    id: "5",
    date: "2026-04-15",
    title: "Struggling with forgiveness",
    body: "God, I want to forgive but I keep circling back to the hurt. I know unforgiveness is a poison I drink hoping the other person suffers. Help me to forgive as You have forgiven me—completely, not based on their deserving. I release this person to You today.",
    category: "Personal",
    mood: "Struggling",
    verse: "Bear with each other and forgive one another if any of you has a grievance against someone.",
    verseRef: "Colossians 3:13",
    answered: true,
    answeredDate: "2026-05-05",
    answeredNote: "Had a conversation and felt genuine release. The bitterness is gone. Thank You, Father.",
    tags: ["forgiveness", "healing", "freedom"],
  },
];

const CATEGORIES = ["All", "Guidance", "Healing", "Provision", "Intercession", "Personal", "Thanksgiving", "Warfare", "Confession", "Praise"];
const MOODS = ["Hopeful", "Burdened", "Grateful", "Anxious", "Uncertain", "Joyful", "Struggling", "Peaceful", "Desperate", "Trusting"];
const MOOD_COLORS: Record<string, string> = {
  Hopeful: "#00FF88", Grateful: "#00FF88", Joyful: "#00FF88", Peaceful: "#4FC3F7", Trusting: "#4FC3F7",
  Burdened: "#9898B3", Uncertain: "#FFB347", Anxious: "#FF8C42", Struggling: "#EF4444", Desperate: "#EF4444",
};

export default function PrayerJournalPage() {
  const [entries, setEntries] = useState<PrayerEntry[]>(() => {
    try { const s = localStorage.getItem("vine_prayer_journal_entries"); return s ? JSON.parse(s) : SEED_ENTRIES; } catch { return SEED_ENTRIES; }
  });

  const [tab, setTab] = useState<"journal" | "answered" | "write">("journal");
  const [catFilter, setCatFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<PrayerEntry | null>(null);
  const [showAnswerModal, setShowAnswerModal] = useState<PrayerEntry | null>(null);
  const [answerNote, setAnswerNote] = useState("");

  // Write form state
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("Personal");
  const [mood, setMood] = useState("Hopeful");
  const [verse, setVerse] = useState("");
  const [verseRef, setVerseRef] = useState("");
  const [tags, setTags] = useState("");
  const [saved, setSaved] = useState(false);

  const saveEntries = (list: PrayerEntry[]) => {
    try { localStorage.setItem("vine_prayer_journal_entries", JSON.stringify(list)); } catch {}
    setEntries(list);
  };

  const addEntry = () => {
    if (!title.trim() || !body.trim()) return;
    const entry: PrayerEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
      title: title.trim(),
      body: body.trim(),
      category,
      mood,
      verse: verse.trim() || undefined,
      verseRef: verseRef.trim() || undefined,
      answered: false,
      tags: tags.split(",").map(t => t.trim()).filter(Boolean),
    };
    saveEntries([entry, ...entries]);
    setTitle(""); setBody(""); setVerse(""); setVerseRef(""); setTags(""); setSaved(true);
    setTimeout(() => { setSaved(false); setTab("journal"); }, 1500);
  };

  const markAnswered = (id: string, note: string) => {
    saveEntries(entries.map(e => e.id === id ? { ...e, answered: true, answeredDate: new Date().toISOString().split("T")[0], answeredNote: note } : e));
    setShowAnswerModal(null); setAnswerNote(""); setSelected(null);
  };

  const deleteEntry = (id: string) => {
    saveEntries(entries.filter(e => e.id !== id));
    setSelected(null);
  };

  const filtered = entries.filter(e => {
    if (tab === "answered" && !e.answered) return false;
    if (tab === "journal" && e.answered) return false;
    if (catFilter !== "All" && e.category !== catFilter) return false;
    if (search && !e.title.toLowerCase().includes(search.toLowerCase()) && !e.body.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const answeredCount = entries.filter(e => e.answered).length;
  const unansweredCount = entries.filter(e => !e.answered).length;

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🙏</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Prayer Journal</h1>
          <p style={{ color: "#9898B3", fontSize: 16 }}>Record your prayers and watch God answer</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(0,255,136,0.1)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.25)", borderRadius: 20, padding: "4px 16px", fontSize: 13, fontWeight: 700 }}>
              {entries.length} Prayers
            </span>
            <span style={{ background: "rgba(107,79,187,0.1)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)", borderRadius: 20, padding: "4px 16px", fontSize: 13, fontWeight: 700 }}>
              {answeredCount} Answered
            </span>
            <span style={{ background: "rgba(255,179,71,0.1)", color: "#FFB347", border: "1px solid rgba(255,179,71,0.25)", borderRadius: 20, padding: "4px 16px", fontSize: 13, fontWeight: 700 }}>
              {unansweredCount} Believing
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 24, borderBottom: "1px solid #1E1E32" }}>
          {([["journal", `Active (${unansweredCount})`], ["answered", `Answered (${answeredCount})`], ["write", "Write Prayer"]] as const).map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: tab === t ? "#00FF88" : "#6A6A88", borderBottom: `2px solid ${tab === t ? "#00FF88" : "transparent"}`, marginBottom: -1 }}>
              {label}
            </button>
          ))}
        </div>

        {/* Write Prayer Tab */}
        {tab === "write" && (
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div style={{ background: "#12121F", borderRadius: 20, padding: 28, border: "1px solid #1E1E32" }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, color: "#00FF88" }}>Write a Prayer</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Title</label>
                  <input value={title} onChange={e => setTitle(e.target.value)} placeholder="What are you praying about?"
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Prayer</label>
                  <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Write your prayer in your own words..." rows={6}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6 }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Category</label>
                    <select value={category} onChange={e => setCategory(e.target.value)}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, cursor: "pointer" }}>
                      {CATEGORIES.filter(c => c !== "All").map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Mood</label>
                    <select value={mood} onChange={e => setMood(e.target.value)}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, cursor: "pointer" }}>
                      {MOODS.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Verse (optional)</label>
                    <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="The verse text..."
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Reference</label>
                    <input value={verseRef} onChange={e => setVerseRef(e.target.value)} placeholder="John 3:16"
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "#9898B3", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Tags (comma-separated)</label>
                  <input value={tags} onChange={e => setTags(e.target.value)} placeholder="family, healing, work..."
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                </div>
                <button onClick={addEntry} disabled={!title.trim() || !body.trim()}
                  style={{ padding: "14px", borderRadius: 12, border: "none", background: title.trim() && body.trim() ? "linear-gradient(135deg, #00FF88, #00CC6A)" : "#1E1E32", color: title.trim() && body.trim() ? "#07070F" : "#4A4A68", cursor: title.trim() && body.trim() ? "pointer" : "not-allowed", fontWeight: 800, fontSize: 15 }}>
                  {saved ? "✓ Prayer Saved!" : "Save Prayer"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Journal/Answered Tabs */}
        {tab !== "write" && (
          <>
            <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search prayers..."
                style={{ flex: 1, minWidth: 200, padding: "8px 14px", borderRadius: 10, background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none" }} />
              <select value={catFilter} onChange={e => setCatFilter(e.target.value)}
                style={{ padding: "8px 14px", borderRadius: 10, background: "#12121F", border: "1px solid #1E1E32", color: "#9898B3", fontSize: 14, cursor: "pointer" }}>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {filtered.map(entry => (
                <div key={entry.id} onClick={() => setSelected(entry)}
                  style={{ background: "#12121F", border: `1px solid ${entry.answered ? "rgba(0,255,136,0.25)" : "#1E1E32"}`, borderRadius: 16, padding: 20, cursor: "pointer", transition: "border-color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "#00FF88"}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = entry.answered ? "rgba(0,255,136,0.25)" : "#1E1E32"}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 8, marginBottom: 6, flexWrap: "wrap", alignItems: "center" }}>
                        <span style={{ fontSize: 12, color: "#6A6A88" }}>{entry.date}</span>
                        <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>{entry.category}</span>
                        <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: `${MOOD_COLORS[entry.mood]}18`, color: MOOD_COLORS[entry.mood] }}>{entry.mood}</span>
                        {entry.answered && <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "rgba(0,255,136,0.12)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.25)", fontWeight: 700 }}>✓ Answered</span>}
                      </div>
                      <h3 style={{ fontSize: 16, fontWeight: 700 }}>{entry.title}</h3>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", marginBottom: 12 }}>
                    {entry.body}
                  </p>
                  {entry.verse && (
                    <div style={{ background: "#0D0D1A", borderRadius: 8, padding: "8px 12px", marginBottom: 12, borderLeft: "2px solid #6B4FBB" }}>
                      <p style={{ fontSize: 12, color: "#C0C0D8", fontStyle: "italic" }}>"{entry.verse}" — {entry.verseRef}</p>
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {entry.tags.map(tag => (
                      <span key={tag} style={{ fontSize: 11, padding: "2px 8px", borderRadius: 6, background: "#1E1E32", color: "#6A6A88" }}>#{tag}</span>
                    ))}
                  </div>
                  {entry.answered && entry.answeredNote && (
                    <div style={{ marginTop: 12, background: "rgba(0,255,136,0.06)", borderRadius: 8, padding: "8px 12px", border: "1px solid rgba(0,255,136,0.15)" }}>
                      <p style={{ fontSize: 12, color: "#00FF88", fontWeight: 700, marginBottom: 4 }}>🎉 Answered on {entry.answeredDate}</p>
                      <p style={{ fontSize: 12, color: "#C0C0D8" }}>{entry.answeredNote}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "60px 20px", color: "#4A4A68" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🙏</div>
                <p style={{ marginBottom: 16 }}>{tab === "answered" ? "No answered prayers yet — keep believing!" : "No prayers found."}</p>
                <button onClick={() => setTab("write")} style={{ padding: "10px 24px", borderRadius: 12, background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.3)", color: "#00FF88", cursor: "pointer", fontWeight: 700 }}>
                  Write First Prayer
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Entry Modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "20px", overflowY: "auto" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#12121F", borderRadius: 20, padding: 32, maxWidth: 640, width: "100%", border: "1px solid #2A2A40", marginTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "#6A6A88" }}>{selected.date}</span>
                  <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>{selected.category}</span>
                  <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: `${MOOD_COLORS[selected.mood]}18`, color: MOOD_COLORS[selected.mood] }}>{selected.mood}</span>
                  {selected.answered && <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "rgba(0,255,136,0.12)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.25)", fontWeight: 700 }}>✓ Answered</span>}
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800 }}>{selected.title}</h2>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "#6A6A88", fontSize: 22, cursor: "pointer" }}>×</button>
            </div>

            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 18, marginBottom: 20, lineHeight: 1.8 }}>
              <p style={{ fontSize: 15, color: "#C0C0D8" }}>{selected.body}</p>
            </div>

            {selected.verse && (
              <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 14, marginBottom: 20, borderLeft: "3px solid #6B4FBB" }}>
                <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>"{selected.verse}"</p>
                <p style={{ fontSize: 12, color: "#A080FF", marginTop: 6 }}>— {selected.verseRef}</p>
              </div>
            )}

            {selected.answered && selected.answeredNote && (
              <div style={{ background: "rgba(0,255,136,0.07)", borderRadius: 12, padding: 14, marginBottom: 20, border: "1px solid rgba(0,255,136,0.2)" }}>
                <p style={{ fontSize: 13, color: "#00FF88", fontWeight: 700, marginBottom: 6 }}>🎉 Answered on {selected.answeredDate}</p>
                <p style={{ fontSize: 14, color: "#C0C0D8" }}>{selected.answeredNote}</p>
              </div>
            )}

            {selected.tags.length > 0 && (
              <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
                {selected.tags.map(tag => <span key={tag} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 8, background: "#1E1E32", color: "#6A6A88" }}>#{tag}</span>)}
              </div>
            )}

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {!selected.answered && (
                <button onClick={() => { setShowAnswerModal(selected); setSelected(null); }}
                  style={{ flex: 1, padding: "12px", borderRadius: 12, border: "1px solid rgba(0,255,136,0.3)", background: "rgba(0,255,136,0.08)", color: "#00FF88", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                  Mark as Answered 🎉
                </button>
              )}
              <button onClick={() => deleteEntry(selected.id)}
                style={{ padding: "12px 16px", borderRadius: 12, border: "1px solid rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.05)", color: "#EF4444", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Answer Modal */}
      {showAnswerModal && (
        <div onClick={() => setShowAnswerModal(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 101, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#12121F", borderRadius: 20, padding: 28, maxWidth: 480, width: "100%", border: "1px solid rgba(0,255,136,0.3)" }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8, color: "#00FF88" }}>🎉 Praise God!</h3>
            <p style={{ fontSize: 14, color: "#9898B3", marginBottom: 16 }}>How did God answer your prayer? (Optional)</p>
            <textarea value={answerNote} onChange={e => setAnswerNote(e.target.value)} placeholder="Describe how God answered..." rows={4}
              style={{ width: "100%", padding: "10px 14px", borderRadius: 10, background: "#0D0D1A", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box", marginBottom: 16 }} />
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => markAnswered(showAnswerModal.id, answerNote)}
                style={{ flex: 1, padding: "12px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #00FF88, #00CC6A)", color: "#07070F", cursor: "pointer", fontWeight: 800, fontSize: 15 }}>
                Record Answer
              </button>
              <button onClick={() => setShowAnswerModal(null)}
                style={{ padding: "12px 16px", borderRadius: 12, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer" }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
