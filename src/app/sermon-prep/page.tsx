"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const PRINCIPLES = [
  { title: "Preach the Text, Not a Topic", verse: "2 Timothy 4:2", body: "Expository preaching takes its shape, structure, and thrust from the biblical text — not from a topic the preacher wants to address that then searches for proof texts. The preacher's job is to stand under the text, not over it. Topical preaching is not inherently wrong, but even topical sermons must be accountable to actual texts rather than using them as decoration." },
  { title: "One Central Idea", verse: "", body: "Every great sermon has one thing it is trying to say. Not three things, not five points — one proposition, one claim, one truth that illuminates the text and lands in the listener. Haddon Robinson: 'A sermon is not a collection of thoughts on a topic — it is a bullet, not buckshot.' The test: can you say in one sentence what this sermon is about? If not, keep working." },
  { title: "Exegesis Precedes Application", verse: "Ezra 7:10", body: "Ezra 'devoted himself to the study and observance of the Law of the Lord, and to teaching its decrees and laws' — in that order. You cannot apply what you have not understood. Expository preaching requires substantial exegetical work before the preacher moves to application. The preacher who applies before understanding produces advice, not proclamation." },
  { title: "Preach to Real People in Real Pain", verse: "Hebrews 4:12", body: "The best preachers know their congregation's actual lives — their fears, their temptations, their griefs, their confusions. Preaching that is academically rigorous but disconnected from human experience fails the text as well as the listener. Jesus met people at their actual point of need. The preacher who doesn't know where his people hurt will say true things that land nowhere." },
  { title: "The Sermon Has to Cost the Preacher Something", verse: "1 Corinthians 2:1-4", body: "Paul did not come to Corinth 'with eloquence or human wisdom.' He came in weakness and fear — which meant the power, when it appeared, was clearly not his. The sermon prepared without prayer, without personal engagement with the text, without the preacher's own struggle with the word, will communicate exactly that distance. The congregation can tell the difference between a sermon that cost something and one that didn't." },
];

const STEPS = [
  { n: 1, title: "Choose and Read the Text", color: "#3B82F6", desc: "Read the passage at least 10 times before consulting any resources. Read it in different translations. Read it aloud. Read the surrounding context. Write down every observation: what surprises you, what confuses you, what repeats, what connects to other texts. Come to the text before the commentaries tell you what to see." },
  { n: 2, title: "Exegesis: What Does It Mean?", color: "#10B981", desc: "Study the original language if possible (or use tools that make it accessible). Research the historical context: who wrote it, to whom, why, under what circumstances. Identify the genre and let it shape your interpretation. Consult 2-3 serious commentaries. Write down: what is the author saying to his original audience?" },
  { n: 3, title: "Theology: Where Does It Fit?", color: PURPLE, desc: "How does this text relate to the rest of Scripture? What does it teach about God, humanity, sin, salvation, the church, the future? What doctrines does it support, clarify, or challenge? What is the redemptive-historical context — is this before or after the cross, and how does that affect interpretation?" },
  { n: 4, title: "The Big Idea", color: "#F59E0B", desc: "Write the sermon's central proposition in one sentence: subject + complement. 'God [subject] provides for his people through unexpected means [complement].' Test it: Is this actually in the text? Is it one thing, not three? Can the sermon be built from it? This sentence governs everything that follows." },
  { n: 5, title: "Structure: How Will You Say It?", color: GREEN, desc: "The structure should arise from the text, not be imposed on it. If the text has three movements, the sermon may have three parts. If it is a narrative, tell the story. If it is a list, the structure may be a list. Ask: what is the most natural and compelling way to take the listener through this text?" },
  { n: 6, title: "Application: So What?", color: "#EF4444", desc: "What does this text demand of the listener? Application is not an appendix — it is woven throughout. For each main point: So what does this mean for how I live? For how I see God? For how I treat others? Application must be specific (not 'be kind' but 'be kind to the colleague who annoyed you on Tuesday')." },
  { n: 7, title: "Illustrations: Show, Don't Just Tell", color: "#8B5CF6", desc: "Illustrations make abstract truth concrete. The best illustrations come from your actual life and the lives of your people (with permission when needed), from literature, history, and news. Test: does this illustration illuminate the truth, or is it a story I want to tell that happens to connect tangentially? The illustration should be shorter than the truth it illustrates." },
  { n: 8, title: "Write, Practice, Revise", color: "#F97316", desc: "Write a full draft even if you won't preach from a manuscript. Writing forces clarity. Then practice aloud — preaching is oral, and what reads well often sounds flat. Notice where you stumble or lose energy. Revise ruthlessly. Cut everything that doesn't serve the central idea. Practice until the structure is internalized, then preach from the text and your people — not from the paper." },
];

interface SermonNote {
  id: number;
  passage: string;
  bigIdea: string;
  status: "draft" | "preached";
  date: string;
}

const SEED_NOTES: SermonNote[] = [
  { id: 1, passage: "John 15:1-11", bigIdea: "Fruitfulness comes from abiding in Christ, not striving for God", status: "preached", date: "2024-01-07" },
  { id: 2, passage: "Psalm 23", bigIdea: "The Lord's provision is personal, complete, and includes the valley", status: "draft", date: "2024-01-14" },
];

export default function SermonPrepPage() {
  const [activeTab, setActiveTab] = useState<"principles" | "process" | "notes">("principles");
  const [notes, setNotes] = useState<SermonNote[]>(() => {
    try { const s = localStorage.getItem("vine_sermon_notes"); return s ? JSON.parse(s) : SEED_NOTES; } catch { return SEED_NOTES; }
  });
  const [form, setForm] = useState({ passage: "", bigIdea: "" });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => { try { localStorage.setItem("vine_sermon_notes", JSON.stringify(notes)); } catch {} }, [notes]);

  const addNote = () => {
    if (!form.passage) return;
    const note: SermonNote = { id: Date.now(), passage: form.passage, bigIdea: form.bigIdea, status: "draft", date: new Date().toISOString().split("T")[0] };
    setNotes(n => [note, ...n]);
    setForm({ passage: "", bigIdea: "" });
    setShowForm(false);
  };

  const toggleStatus = (id: number) => setNotes(ns => ns.map(n => n.id === id ? { ...n, status: n.status === "draft" ? "preached" : "draft" } : n));
  const removeNote = (id: number) => setNotes(ns => ns.filter(n => n.id !== id));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎙️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Sermon Preparation</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Expository preaching takes its shape from the biblical text. The preacher's job is to stand under the text, not over it — to say what God has already said, with the clarity and urgency it deserves.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "principles" as const, label: "Principles", icon: "📖" },
            { id: "process" as const, label: "The Process", icon: "🔄" },
            { id: "notes" as const, label: "My Sermons", icon: "📝" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "principles" && (
          <div>
            {PRINCIPLES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{p.title}</h3>
                  {p.verse && <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{p.verse}</span>}
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "process" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These eight steps represent a standard expository sermon preparation process. Not every sermon requires equal time on every step — but skipping steps tends to produce sermons that show the gap.
              </p>
            </div>
            {STEPS.map(s => (
              <div key={s.n} style={{ background: CARD, border: `1px solid ${s.color}25`, borderRadius: 12, padding: 22, marginBottom: 12, display: "flex", gap: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${s.color}15`, border: `2px solid ${s.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{s.n}</div>
                <div>
                  <div style={{ color: s.color, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{s.title}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "notes" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>{notes.length} sermons tracked · {notes.filter(n => n.status === "draft").length} drafts</p>
              <button onClick={() => setShowForm(true)} style={{ background: GREEN, color: "#000", fontWeight: 700, border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 13 }}>+ New Sermon</button>
            </div>

            {showForm && (
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}>
                  <input placeholder="Passage (e.g. Romans 8:1-17)" value={form.passage} onChange={e => setForm(f => ({ ...f, passage: e.target.value }))}
                    style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14 }} />
                  <input placeholder="Big Idea (one sentence)" value={form.bigIdea} onChange={e => setForm(f => ({ ...f, bigIdea: e.target.value }))}
                    style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14 }} />
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={addNote} style={{ flex: 1, background: GREEN, color: "#000", fontWeight: 700, border: "none", borderRadius: 8, padding: 10, cursor: "pointer" }}>Add Sermon</button>
                  <button onClick={() => setShowForm(false)} style={{ flex: 1, background: "transparent", color: MUTED, fontWeight: 700, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 10, cursor: "pointer" }}>Cancel</button>
                </div>
              </div>
            )}

            {notes.map(note => (
              <div key={note.id} style={{ background: CARD, border: `1px solid ${note.status === "preached" ? GREEN + "30" : BORDER}`, borderRadius: 12, padding: 18, marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
                    <span style={{ color: PURPLE, fontWeight: 800, fontSize: 15 }}>{note.passage}</span>
                    <span style={{ background: note.status === "preached" ? `${GREEN}20` : `${PURPLE}15`, color: note.status === "preached" ? GREEN : PURPLE, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{note.status}</span>
                  </div>
                  {note.bigIdea && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{note.bigIdea}</p>}
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 6 }}>{note.date}</div>
                </div>
                <div style={{ display: "flex", gap: 6, flexShrink: 0, marginLeft: 12 }}>
                  <button onClick={() => toggleStatus(note.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 8px", color: MUTED, fontSize: 11, cursor: "pointer" }}>{note.status === "draft" ? "Mark Preached" : "Back to Draft"}</button>
                  <button onClick={() => removeNote(note.id)} style={{ background: "transparent", border: "none", color: MUTED, fontSize: 11, cursor: "pointer" }}>✕</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
