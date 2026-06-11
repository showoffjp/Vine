"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Your Story Is Spiritual Warfare", verse: "Revelation 12:11", body: "'They triumphed over him by the blood of the Lamb and by the word of their testimony' (Revelation 12:11). The testimony is a weapon. When you speak of what God has done, you are not merely sharing a personal narrative — you are asserting the reality of the kingdom of God over the reality of darkness. Testimony defeats the accuser by declaring what Christ has accomplished." },
  { title: "Testimony Is Evangelism's Foundation", verse: "John 9:25", body: "The man born blind answered all the theological questions with: 'Whether he is a sinner or not, I don't know. One thing I do know. I was blind but now I see!' (John 9:25). He could not answer the Pharisees' theological objections, but he could speak to what he had experienced. Your testimony is irrefutable by a skeptic in a way that an argument is not — they can debate the argument, but they cannot deny your experience." },
  { title: "Paul Told His Story Three Times", verse: "Acts 22, 26, Galatians 1", body: "Paul recounts his conversion in Acts 22, 26, and Galatians 1. Each time it is slightly different — adapted to the audience and context. He was not reading from a script; he was speaking from lived experience. Testimony is flexible precisely because it is real. Learn to tell your story in different lengths and for different contexts." },
];

const STRUCTURE = [
  { n: 1, title: "Before: Life Without Christ", color: "#EF4444", desc: "Describe your life honestly before you trusted Christ. What were you living for? What were your values, habits, addictions, or emptiness? You don't need a dramatic past — everyone has a 'before.' The question is: what was missing?", caution: "Be honest but not gratuitous. Avoid glorifying sin. The purpose is to establish the context that makes grace comprehensible." },
  { n: 2, title: "During: How the Gospel Reached You", color: "#F59E0B", desc: "What happened? Was it a crisis, a gradual awakening, a conversation, a Bible passage? Who was involved? When and where? Specificity makes testimony credible — vague spirituality is hard to believe or follow.", caution: "Name what you trusted and why. Be clear that it is Christ, not religion, experience, or morality." },
  { n: 3, title: "After: What Changed", color: GREEN, desc: "What is different now? Not what you believe differently, but what has actually changed in your life, relationships, desires, or character? The 'after' is where the fruit of the gospel becomes visible to the listener.", caution: "Be honest about struggles. A testimony that sounds like everything is now perfect is not believable and discourages those who are struggling as Christians." },
  { n: 4, title: "The Invitation: What Does This Mean for You?", color: PURPLE, desc: "A testimony ends with an implicit or explicit invitation. You have described a reality — now what? The invitation may be explicit ('Would you want to talk about how this could be your story?') or implicit (the testimony itself extending an open door).", caution: "Don't pressure. The testimony creates an opening; the Spirit does the work. Your role is to be a faithful witness, not to close a sale." },
];

const VERSIONS = [
  { version: "30-Second Version", context: "Casual mention in conversation", length: "2-3 sentences", what: "One sentence on where you were, one on what changed, one on what's different now. 'I used to live for ___. Then I trusted Christ at ___. It changed how I see ___.'", example: "I used to find my identity in my career — and nothing was ever enough. Then a friend invited me to church and I heard the gospel for the first time. It completely changed how I see my own worth and my fear of failure." },
  { version: "3-Minute Version", context: "Small group, conversation over coffee", length: "300-400 words", what: "The full before/during/after structure, briefly. One paragraph each. Aim for one specific, concrete detail in each section.", example: "Tell the story with one vivid before moment, one clear turning point, and one specific thing that is genuinely different now." },
  { version: "10-Minute Version", context: "Testimony in a church service or event", length: "800-1000 words", what: "Fully developed before/during/after with emotional texture, specific names and places, honest struggles, and a clear gospel presentation embedded in the story.", example: "This is the version that is worth writing out fully, practicing aloud, and memorizing the key beats." },
];

const PITFALLS = [
  { pitfall: "Making yourself the hero", fix: "Christ is the hero of the testimony. Your sin, confusion, and brokenness serve to magnify what grace accomplished. Watch for language that centers your decision, intelligence, or moral progress." },
  { pitfall: "Leaving out the gospel", fix: "Testimony is not just personal narrative — it is witness. Name Jesus. Name the cross. Explain (briefly) what you trusted and why. A story of 'life got better' without Christ at the center is self-help, not gospel." },
  { pitfall: "Making it all past tense", fix: "The gospel is not just what happened when you were converted — it is what sustains you now. Include a present dimension: 'And God continues to ___.' This shows that Christianity is an ongoing relationship, not a past event." },
  { pitfall: "Performing rather than sharing", fix: "The most persuasive testimony is the most honest one. Vulnerability, admission of ongoing struggle, and genuine uncertainty make testimony human and believable." },
  { pitfall: "Too long, too much detail", fix: "Edit ruthlessly. Every detail must serve the central story. Religious experiences, theological nuances, and church politics rarely help the listener. Focus on the turning point and its fruit." },
];

type Tab = "theology" | "witnesses" | "structure" | "write" | "journal" | "videos";

const WITNESSES = [
  {
    id: "augustine",
    name: "Augustine of Hippo",
    era: "354-430",
    context: "Confessions, c. 397 AD",
    bio: "The Confessions is the most influential personal testimony in Christian history and the first great autobiography in Western literature. Augustine tells the story of his brilliant, restless mind and its inability to rest anywhere but God — from his Carthaginian youth, through his Manichaean years, through his dalliance with Neo-Platonism, to the garden in Milan where he heard a child's voice say 'Take up and read.' His mother Monica's faithful tears over decades form a second testimony woven throughout. He writes in second-person address to God — the testimony is not performance but prayer.",
    quote: "You have made us for yourself, O Lord, and our heart is restless until it rests in You. And now, O Lord our God, I give thanks to You for this good gift.",
    contribution: "Augustine's Confessions created the template for all subsequent Christian testimony: honest about sin without glorifying it, specific about the moment of turning, and deeply relational (God is addressed, not merely described). His 'before' is unflinching — adulterous relationships, intellectual pride, spiritual searching in wrong places. His 'after' is not triumphalist but quietly confident. Every subsequent conversion narrative is in some sense responding to Augustine's.",
  },
  {
    id: "newton",
    name: "John Newton",
    era: "1725-1807",
    context: "Slave trader turned abolitionist pastor; author of Amazing Grace",
    bio: "Newton's testimony is one of the most remarkable in Christian history. A sailor and slave trader by profession, he experienced a violent storm in 1748 that he later called the beginning of his serious religion. He continued in the slave trade for years after his conversion — a sobering reminder that conversion does not immediately resolve every moral blindness. Decades later, as an elderly abolitionist, he testified before Parliament against the slave trade. He composed 'Amazing Grace' (1772) as a meditation on his own conversion: 'a wretch like me.'",
    quote: "I am not what I ought to be. I am not what I wish to be. I am not what I hope to be. But by the grace of God, I am not what I was.",
    contribution: "Newton's testimony demonstrates the importance of long-arc honesty in witness. He did not edit out the years of moral failure that followed his initial conversion, nor did he minimize the wickedness of his involvement in the slave trade. His willingness to name himself as 'the chief of sinners' without false humility (he meant it literally) gave Amazing Grace its peculiar power — the wonder is not theatrical but genuine. His testimony is also a caution: conversion begins a process; it does not complete it.",
  },
  {
    id: "lewis",
    name: "C.S. Lewis",
    era: "1898-1963",
    context: "Surprised by Joy, 1955; Mere Christianity, 1952",
    bio: "Lewis's intellectual conversion is the most influential account of Christianity for the modern secular mind. He describes himself as 'the most reluctant convert in all England' — a philosophical materialist dragged kicking and screaming into a theism he found compelling but didn't want. His account traces the role of Joy (Sehnsucht — an unsatisfied longing that the world couldn't fill), the intellectual demolition of his materialist worldview, and his eventual recognition that atheism was the one worldview that left human experience most inexplicable.",
    quote: "You must picture me alone in that room in Magdalen, night after night, feeling, whenever my mind lifted even for a second from my work, the steady, unrelenting approach of Him whom I so earnestly desired not to meet.",
    contribution: "Lewis showed that conversion could be intellectually respectable — that a rigorous, skeptical, highly educated person could be argued into faith. His use of Joy (the stabbing desire for something beyond the world) as evidence for transcendence opened a new apologetic pathway. His testimony particularly resonates with intellectual seekers who find emotional or experiential accounts insufficient. 'Surprised by Joy' and 'Mere Christianity' together constitute the most widely-read evangelistic testimony of the 20th century.",
  },
  {
    id: "tenboom",
    name: "Corrie ten Boom",
    era: "1892-1983",
    context: "The Hiding Place, 1971; survivor of Ravensbruck concentration camp",
    bio: "Ten Boom's testimony is set in one of history's darkest contexts — her family's work hiding Jewish people in Nazi-occupied Holland, their arrest and imprisonment, and her sister Betsie's death in Ravensbruck. The Hiding Place is not a traditional conversion narrative (Corrie was raised in a devout Christian home) but a testimony of faith sustained through extremity. The central moment: after the war, encountering a former prison guard, Corrie was asked to extend forgiveness. She describes having to pray for the willingness to forgive, and the supernatural grace that came when she did.",
    quote: "There is no pit so deep that He is not deeper still. When we are powerless to do a thing, it is a great joy that we can come and step inside the ability of Jesus.",
    contribution: "Ten Boom's testimony demonstrates that Christian witness is not only about initial conversion but about sustaining faith through suffering. Her account of forgiving the prison guard — not through emotional resolution but through obedient prayer for grace — became one of the most cited examples of the radical nature of gospel forgiveness. Her story also makes credible the claim that faith deepens under pressure rather than being destroyed by it.",
  },
  {
    id: "morrison",
    name: "Latasha Morrison",
    era: "1975-present",
    context: "Author of Be the Bridge; racial reconciliation speaker",
    bio: "Morrison's testimony is that of a Black Christian woman whose faith led her into the uncomfortable work of racial reconciliation in the American church. Raised in a Christian home, her witness is not a dramatic conversion narrative but an account of how the gospel's logic — of enemies reconciled to God and to each other through the cross — compelled her to work for the reconciliation that the church had avoided. She describes the personal cost: the anger of other Black Christians who saw the work as accommodation, and the defensiveness of white Christians who saw it as accusation.",
    quote: "The gospel is not just about personal salvation — it is about the reconciliation of all things. You cannot say you love God and not love your neighbor. And you cannot love your neighbor without knowing their pain.",
    contribution: "Morrison's testimony demonstrates that personal witness includes systemic dimensions — that what God has done in an individual necessarily moves them toward what God is doing in the world. Her story challenges the privatized, individualized testimony tradition by showing that the gospel creates not only personal peace but social engagement. She also models that testimony includes the ongoing story of sanctification, not just the initial turning point.",
  },
];

interface TestimonyDraft {
  before: string;
  during: string;
  after: string;
  invitation: string;
}

export default function TestimonyWritingPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_testimony-writing_tab", "theology");
  const [selectedWitness, setSelectedWitness] = usePersistedState("vine_testimony-writing_selected_witness", "augustine");
  const witness = WITNESSES.find(w => w.id === selectedWitness)!;
  const [draft, setDraft] = useState<TestimonyDraft>(() => {
    try { const s = localStorage.getItem("vine_testimony_draft"); return s ? JSON.parse(s) : { before: "", during: "", after: "", invitation: "" }; } catch { return { before: "", during: "", after: "", invitation: "" }; }
  });
  const [expandedPitfall, setExpandedPitfall] = useState<string | null>(null);

  useEffect(() => { try { localStorage.setItem("vine_testimony_draft", JSON.stringify(draft)); } catch {} }, [draft]);

  const wordCount = Object.values(draft).join(" ").split(/\s+/).filter(Boolean).length;

  type JournalEntry = { id: string; date: string; theme: string; reflection: string; step: string };
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => { try { return JSON.parse(localStorage.getItem("vine_twj_entries") ?? "[]"); } catch { return []; } });
  const [jTheme, setJTheme] = useState("");
  const [jReflection, setJReflection] = useState("");
  const [jStep, setJStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_twj_entries", JSON.stringify(journalEntries)); } catch {} }, [journalEntries]);
  function saveJournalEntry() {
    if (!jTheme.trim() && !jReflection.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), theme: jTheme, reflection: jReflection, step: jStep };
    setJournalEntries(prev => [entry, ...prev]);
    setJTheme(""); setJReflection(""); setJStep("");
  }
  function deleteJournalEntry(id: string) { setJournalEntries(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📣</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Write Your Testimony</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Your story of meeting Christ is irrefutable — no one can argue with what you have experienced. 'I was blind but now I see' has converted more skeptics than most theological arguments.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Why It Matters", icon: "📖" },
            { id: "witnesses" as const, label: "Witnesses", icon: "🕯️" },
            { id: "structure" as const, label: "Structure", icon: "🏗️" },
            { id: "write" as const, label: "Write It", icon: "✍️" },
            { id: "journal" as const, label: "My Journal", icon: "📓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 14 }}>Three Lengths to Know</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {VERSIONS.map(v => (
                  <div key={v.version} style={{ background: BG, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                      <span style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{v.version}</span>
                      <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{v.context}</span>
                    </div>
                    <p style={{ color: MUTED, fontSize: 13, marginBottom: 6 }}>{v.length} — {v.what}</p>
                    <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>Example: {v.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "witnesses" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {WITNESSES.map(w => (
                <button type="button" key={w.id} onClick={() => setSelectedWitness(w.id)}
                  style={{ width: "100%", background: selectedWitness === w.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedWitness === w.id ? PURPLE + "70" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedWitness === w.id ? PURPLE : TEXT, fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{w.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{w.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{witness.era}</div>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 24, marginBottom: 4 }}>{witness.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{witness.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{witness.bio}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 10 }}>IN THEIR OWN WORDS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>&ldquo;{witness.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>WHAT WE LEARN</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{witness.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "structure" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
              {STRUCTURE.map(s => (
                <div key={s.n} style={{ background: CARD, border: `1px solid ${s.color}30`, borderRadius: 12, padding: 22, display: "flex", gap: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${s.color}20`, border: `2px solid ${s.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontWeight: 800, fontSize: 15, flexShrink: 0 }}>{s.n}</div>
                  <div>
                    <div style={{ color: s.color, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{s.title}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{s.desc}</p>
                    <div style={{ background: BG, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: "#F59E0B", fontSize: 12, fontWeight: 700, marginBottom: 4 }}>CAUTION</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{s.caution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <h3 style={{ color: "#EF4444", fontWeight: 800, fontSize: 17, marginBottom: 14 }}>Common Pitfalls</h3>
              {PITFALLS.map(p => (
                <div role="button" tabIndex={0} key={p.pitfall} style={{ marginBottom: 10 }}>
                  <button type="button" onClick={() => setExpandedPitfall(expandedPitfall === p.pitfall ? null : p.pitfall)}
                    style={{ width: "100%", background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                    <span>{p.pitfall}</span><span style={{ color: MUTED }}>{expandedPitfall === p.pitfall ? "−" : "+"}</span>
                  </button>
                  {expandedPitfall === p.pitfall && (
                    <div style={{ background: BG, borderRadius: "0 0 8px 8px", padding: "10px 14px", border: `1px solid ${BORDER}`, borderTop: "none" }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{p.fix}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "write" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Your draft is auto-saved. Aim for ~300 words for the 3-minute version.</p>
              <div style={{ color: wordCount > 350 ? "#F59E0B" : GREEN, fontWeight: 700, fontSize: 14 }}>{wordCount} words</div>
            </div>
            {STRUCTURE.map(s => (
              <div key={s.n} style={{ marginBottom: 16 }}>
                <label style={{ color: s.color, fontWeight: 700, fontSize: 14, display: "block", marginBottom: 6 }}>
                  {s.n}. {s.title}
                </label>
                <textarea
                  value={draft[s.title === "Before: Life Without Christ" ? "before" : s.title === "During: How the Gospel Reached You" ? "during" : s.title === "After: What Changed" ? "after" : "invitation"]}
                  onChange={e => setDraft(d => ({ ...d, [s.title === "Before: Life Without Christ" ? "before" : s.title === "During: How the Gospel Reached You" ? "during" : s.title === "After: What Changed" ? "after" : "invitation"]: e.target.value }))}
                  placeholder={s.desc}
                  style={{ width: "100%", minHeight: 90, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>My Testimony Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Record reflections on your testimony, key themes, and how you are refining your story.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input value={jTheme} onChange={e => setJTheme(e.target.value)} placeholder="Key theme in your testimony (grace, freedom, belonging…)" style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <textarea value={jReflection} onChange={e => setJReflection(e.target.value)} placeholder="What God is showing you about your story?" rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="How are you sharing or growing in your testimony?" style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveJournalEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "11px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer", alignSelf: "flex-start" }}>Save Entry</button>
              </div>
            </div>
            {journalEntries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", padding: 32 }}>No journal entries yet. Begin recording reflections on your testimony.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {journalEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ color: PURPLE, fontWeight: 700, fontSize: 15 }}>{entry.theme || "Testimony Reflection"}</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                    </div>
                    {entry.reflection && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong>Reflection:</strong> {entry.reflection}</p>}
                    {entry.step && <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}><strong>Sharing:</strong> {entry.step}</p>}
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
                Practical guidance and biblical teaching on sharing your personal testimony effectively.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "oNpTha80yyE", title: "How to Share Your Personal Christian Testimony in 3-5 Minutes", channel: "Breaking Truth Ministries", description: "A clear, practical guide to crafting and sharing your personal testimony for evangelism — covering structure, focus, and what to include." },
                  { videoId: "4Eg_di-O8nM", title: "How To Share Your Testimony", channel: "Christian Teaching", description: "A personal testimony is the Gospel presented in terms of your own experience. This video teaches you how to tell that story powerfully." },
                  { videoId: "mC-zw0zCCtg", title: "Your Story Is His Story", channel: "Christian Teaching", description: "A simple outline and practical tips to help you share your personal testimony — because your story of God's grace is one of the most powerful tools you have." },
                  { videoId: "7_CGP-12AE0", title: "The Power of Sharing Your Testimony", channel: "Christian Teaching", description: "Key steps for constructing and sharing your story of faith, with biblical foundations and practical application for real conversations." },
                  { videoId: "OqwbFGoRYVo", title: "How to Share Your Testimony | UNcomplicated", channel: "UNcomplicated", description: "Beginning with 1 Peter 3:15, this video provides a simple, repeatable framework for sharing your faith story in any context." },
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
