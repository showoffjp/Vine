"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

type Tab = "principles" | "preachers" | "process" | "notes" | "journal" | "videos";

const PREACHERS = [
  {
    id: "chrysostom",
    name: "John Chrysostom",
    era: "c. 349-407",
    context: "Archbishop of Constantinople; named 'golden-mouthed' for his preaching",
    bio: "Chrysostom is the greatest preacher of the ancient church and the standard against which all subsequent Christian preaching has been measured. His 90 homilies on Matthew, 88 on John, and 32 on Romans remain the finest expository commentaries on those books produced in the first millennium. He preached to enormous crowds in Antioch for twelve years before becoming Archbishop of Constantinople, and his preaching of social justice — denouncing the wealth of the court while the poor starved — eventually led to his exile.",
    quote: "If you cannot find Christ in the beggar at the church door, you will not find him in the chalice. Preaching that does not reach the poor has not reached Christ.",
    contribution: "Chrysostom established the expository homily as the form of Christian preaching. His method: read the text, explain what it says, apply it to his congregation's actual lives. He did not allegorize (as was fashionable) but read the text plainly and applied it plainly. His social preaching demonstrated that exposition without application to the concrete conditions of life is incomplete — and his courage in applying the text to the powerful made him dangerous enough to exile.",
  },
  {
    id: "whitefield",
    name: "George Whitefield",
    era: "1714-1770",
    context: "English evangelist; central figure of the First Great Awakening",
    bio: "Whitefield was the most gifted natural orator in the history of Christian preaching. He preached over 18,000 sermons in his lifetime, often to crowds of 10,000-30,000 in open fields. His voice was legendary — Benjamin Franklin calculated it could carry to 30,000 people in the open air. But his power was not merely acoustic. He preached with emotional urgency that made abstract doctrine viscerally personal: he wept while preaching, acted out biblical scenes, and spoke of hell and heaven as immediate realities. He created the model for evangelical proclamation.",
    quote: "It is a poor sermon that gives no offense; that neither makes the hearer displeased with himself nor with the preacher.",
    contribution: "Whitefield invented the outdoor, crowd-preaching model that shaped evangelical revivalism for two centuries. He proved that the gospel could reach people who would never enter a church building, that preaching could move hearts as well as minds, and that doctrinal content (he was a rigorous Calvinist) was compatible with emotional power. His partnership and disagreement with Wesley produced the two streams of evangelical preaching that still flow today.",
  },
  {
    id: "spurgeon",
    name: "C.H. Spurgeon",
    era: "1834-1892",
    context: "Victorian Baptist pastor; Metropolitan Tabernacle, London",
    bio: "Spurgeon is the most widely-read preacher in Christian history. He preached to 6,000 people weekly at the Metropolitan Tabernacle for 38 years, and his printed sermons — distributed worldwide during his lifetime — fill 63 volumes. He was entirely self-taught, never attending seminary, but his command of Scripture, his gift for illustration, and his combination of doctrinal depth with pastoral warmth made him the model expository preacher of the modern era. He is still widely read because his sermons remain strikingly direct and alive.",
    quote: "A good character is the best tombstone. Those who loved you and were helped by you will remember you when forget-me-nots have withered. Carve your name on hearts, not on marble.",
    contribution: "Spurgeon demonstrated that Calvinist theology, full-blooded exposition, and popular preaching are perfectly compatible. He destroyed the assumption that serious doctrine requires dull delivery or that popular appeal requires doctrinal shallowness. His principles of preaching — preach Christ in every sermon, illustrate from life, apply specifically to the conscience — remain the best practical guide to expository preaching. His 'Lectures to My Students' is still the most useful book on the craft of preaching.",
  },
  {
    id: "stott",
    name: "John Stott",
    era: "1921-2011",
    context: "Anglican rector of All Souls Langham Place; founder of Langham Partnership",
    bio: "Stott was the most influential preacher of the 20th century evangelical world and the most important Anglican voice in global Christianity. His 'Between Two Worlds' (1982) is the definitive modern theology of preaching: the preacher stands between the ancient world of the text and the contemporary world of the congregation, building a bridge between them through exposition and application. He preached at All Souls for 50 years and mentored a generation of global evangelical leaders through Langham Partnership.",
    quote: "The expositor's task is to open up the Scriptures in such a way that they speak afresh to the contemporary world. The preacher must live in two worlds at once — ancient and modern — and refuse to be at home entirely in either.",
    contribution: "Stott gave the modern evangelical world its best theological account of why preaching is central to Christian life and mission. His insistence that exposition requires equal commitment to the text and to the congregation — that you cannot shortchange either without betraying both — remains the gold standard for homiletical method. His social engagement alongside his evangelical orthodoxy modeled a form of preaching that takes the whole gospel seriously.",
  },
  {
    id: "keller",
    name: "Tim Keller",
    era: "1950-2023",
    context: "Presbyterian pastor; Redeemer Presbyterian Church, New York City",
    bio: "Keller was the most influential Reformed preacher of the late 20th and early 21st centuries. His 23 years at Redeemer in Manhattan — a secular, educated, skeptical context — forced him to develop a form of preaching that could address non-Christians in the room while feeding believers. His 'Preaching' (2015) is the best recent book on expository preaching for post-Christian contexts. He combined rigorous exposition with deep engagement with secular objections, resulting in sermons that were theologically rich and intellectually accessible simultaneously.",
    quote: "Every text of Scripture should be preached in a way that would make sense to an unbeliever in the room and challenge a believer in the pew — not dumbed down for one or alienating to the other.",
    contribution: "Keller developed the model of contextual expository preaching for secular Western contexts. His method: understand the cultural stories and assumptions your congregation lives inside, expose how the text addresses and subverts those assumptions, and show how the gospel is both more demanding and more satisfying than any cultural alternative. He made Reformed preaching credible and compelling to the most resistant audience in America — urban secular intellectuals.",
  },
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
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_sermon-prep_tab", "principles");
  const [selectedPreacher, setSelectedPreacher] = usePersistedState("vine_sermon-prep_selected_preacher", "chrysostom");
  const preacher = PREACHERS.find(p => p.id === selectedPreacher)!;
  const [notes, setNotes] = useState<SermonNote[]>(() => {
    try { const s = localStorage.getItem("vine_sermon_notes"); return s ? JSON.parse(s) : SEED_NOTES; } catch { return SEED_NOTES; }
  });
  const [form, setForm] = useState<{ passage: string; bigIdea: string }>(() => {
    try { const s = localStorage.getItem("vine_sermon_prep_draft"); return s ? JSON.parse(s) : { passage: "", bigIdea: "" }; } catch { return { passage: "", bigIdea: "" }; }
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => { try { localStorage.setItem("vine_sermon_notes", JSON.stringify(notes)); } catch {} }, [notes]);
  useEffect(() => {
    try { localStorage.setItem("vine_sermon_prep_draft", JSON.stringify(form)); } catch {}
  }, [form]);

  type JournalEntry = { id: string; date: string; sermon: string; takeaway: string; applying: string };
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => { try { return JSON.parse(localStorage.getItem("vine_spj_entries") ?? "[]"); } catch { return []; } });
  const [jSermon, setJSermon] = useState("");
  const [jTakeaway, setJTakeaway] = useState("");
  const [jApplying, setJApplying] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_spj_entries", JSON.stringify(journalEntries)); } catch {} }, [journalEntries]);
  function saveJournalEntry() {
    if (!jSermon.trim() && !jTakeaway.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), sermon: jSermon, takeaway: jTakeaway, applying: jApplying };
    setJournalEntries(prev => [entry, ...prev]);
    setJSermon(""); setJTakeaway(""); setJApplying("");
  }
  function deleteJournalEntry(id: string) { setJournalEntries(prev => prev.filter(e => e.id !== id)); }

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
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
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
            { id: "preachers" as const, label: "Preachers", icon: "🎙️" },
            { id: "process" as const, label: "The Process", icon: "🔄" },
            { id: "notes" as const, label: "My Sermons", icon: "📝" },
            { id: "journal" as const, label: "My Journal", icon: "📓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
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
                  {p.verse && <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={p.verse} /></span>}
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "preachers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {PREACHERS.map(p => (
                <button type="button" key={p.id} onClick={() => setSelectedPreacher(p.id)}
                  style={{ width: "100%", background: selectedPreacher === p.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedPreacher === p.id ? PURPLE + "70" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedPreacher === p.id ? PURPLE : TEXT, fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{p.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{p.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{preacher.era}</div>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 24, marginBottom: 4 }}>{preacher.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{preacher.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{preacher.bio}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 10 }}>IN THEIR OWN WORDS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>&ldquo;{preacher.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{preacher.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "process" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These {STEPS.length} steps represent a standard expository sermon preparation process. Not every sermon requires equal time on every step — but skipping steps tends to produce sermons that show the gap.
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
              <button type="button" onClick={() => setShowForm(true)} style={{ background: GREEN, color: "#000", fontWeight: 700, border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 13 }}>+ New Sermon</button>
            </div>

            {showForm && (
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}>
                  <input spellCheck={false} aria-label="Passage (e.g. Romans 8:1-17)" placeholder="Passage (e.g. Romans 8:1-17)" value={form.passage} onChange={e => setForm(f => ({ ...f, passage: e.target.value }))}
                    style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14 }} />
                  <input aria-label="Big Idea (one sentence)" placeholder="Big Idea (one sentence)" value={form.bigIdea} onChange={e => setForm(f => ({ ...f, bigIdea: e.target.value }))}
                    style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14 }} />
                </div>
                <div role="button" tabIndex={0} style={{ display: "flex", gap: 8 }}>
                  <button type="button" onClick={addNote} style={{ flex: 1, background: GREEN, color: "#000", fontWeight: 700, border: "none", borderRadius: 8, padding: 10, cursor: "pointer" }}>Add Sermon</button>
                  <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, background: "transparent", color: MUTED, fontWeight: 700, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 10, cursor: "pointer" }}>Cancel</button>
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
                <div role="button" tabIndex={0} style={{ display: "flex", gap: 6, flexShrink: 0, marginLeft: 12 }}>
                  <button type="button" onClick={() => toggleStatus(note.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 8px", color: MUTED, fontSize: 11, cursor: "pointer" }}>{note.status === "draft" ? "Mark Preached" : "Back to Draft"}</button>
                  <button type="button" onClick={() => removeNote(note.id)} style={{ background: "transparent", border: "none", color: MUTED, fontSize: 11, cursor: "pointer" }}>✕</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>My Preaching Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Record sermons you have heard, what God spoke to you, and how you are applying the Word.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input value={jSermon} onChange={e => setJSermon(e.target.value)} placeholder="Sermon title, passage, or preacher" style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <textarea value={jTakeaway} onChange={e => setJTakeaway(e.target.value)} placeholder="Key takeaway — what did God speak to you?" rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jApplying} onChange={e => setJApplying(e.target.value)} placeholder="How are you applying this to your life or ministry?" rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <button type="button" onClick={saveJournalEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "11px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer", alignSelf: "flex-start" }}>Save Entry</button>
              </div>
            </div>
            {journalEntries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", padding: 32 }}>No journal entries yet. Start recording what God is speaking through preaching.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {journalEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ color: PURPLE, fontWeight: 700, fontSize: 15 }}>{entry.sermon || "Sermon Journal"}</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                    </div>
                    {entry.takeaway && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong>Takeaway:</strong> {entry.takeaway}</p>}
                    {entry.applying && <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}><strong>Applying:</strong> {entry.applying}</p>}
                    <button type="button" onClick={() => deleteJournalEntry(entry.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 12px", color: MUTED, fontSize: 12, cursor: "pointer" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Lectures and workshops from master preachers on the craft and theology of expository preaching.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "y4y_B0khuWo", title: "Preaching to the Heart", channel: "The Gospel Coalition (Tim Keller)", description: "Tim Keller's workshop from TGC's 2015 National Conference — how to move from head to heart in preaching, and why cognitive content alone never transforms." },
                  { videoId: "OqwbFGoRYVo", title: "John Piper, Tim Keller, and Richard Coekin on Expositional Preaching", channel: "The Gospel Coalition", description: "Three master preachers discuss what expository preaching is, why it matters, and how they approach the work of preparing and delivering a biblical message." },
                  { videoId: "npEDqbE6faE", title: "Desiring God Through Fasting and Prayer: Session 1", channel: "Desiring God (John Piper)", description: "Piper on the spiritual disciplines that undergird genuine preaching — how prayer and fasting shape the preacher before they shape the sermon." },
                  { videoId: "W6NjAG4qp4M", title: "Praying in the Closet and in the Spirit", channel: "Desiring God (John Piper)", description: "How disciplined and spontaneous prayer should flow from confidence that God is on our side — essential teaching for any preacher who wants power beyond technique." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
