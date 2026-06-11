"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GOLD = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type SMEntry = { id: string; date: string; verse: string; method: string; purpose: string };

const THEOLOGY = [
  {
    title: "The Word Hidden in the Heart (Ps 119:11)",
    body: "I have hidden your word in my heart that I might not sin against you. The psalmist understood something that neuroscience now confirms: what we internalize shapes what we do. Scripture memorized is Scripture available at the moment of temptation, grief, decision, or ministry. It cannot be taken away by a phone dying, an internet outage, or a closed Bible. It travels with you. Jesus answered every temptation in the wilderness with a memorized Scripture (Matt 4:4, 7, 10) — not a general theological principle but a specific text. Hiding God's word in the heart is one of the most concrete forms of spiritual warfare available.",
  },
  {
    title: "Renewing the Mind — Transformation Through Scripture (Rom 12:2)",
    body: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. The mind is transformed not by passive exposure but by active meditation and internalization. The Hebrew word for meditate (hagah, Ps 1:2) means to mutter or murmur — an active, oral, repetitive engagement with text. Memorization creates the conditions for this kind of meditation: when a verse is memorized, it can be turned over during a commute, processed while walking, prayed through in the night. The transformation Paul describes comes from exactly this kind of sustained, repeated engagement.",
  },
  {
    title: "Christ's Use of Scripture — The Highest Model (Luke 4:4)",
    body: "Jesus quoted, cited, alluded to, and sang Scripture throughout his ministry. His last words from the cross were Psalm 22 and Psalm 31. His temptation responses were Deuteronomy. His Sermon on the Mount is built on repeated engagement with Torah: You have heard that it was said... but I tell you. Jesus was so saturated with Scripture that it shaped his syntax, his prayers, and his cries of desolation. The disciple is not above the teacher — if this level of biblical saturation was the environment of Jesus's thinking, it is a worthy aspiration for those who follow him.",
  },
  {
    title: "The Counsel of Scripture in Crisis — When Memory Becomes Ministry",
    body: "The most powerful argument for Scripture memorization is not personal formation but pastoral availability. The person who has Psalm 23 memorized can whisper it to someone dying in a hospital when a Bible is not present. The person who knows Isaiah 41:10 by heart can speak it over a friend paralyzed by fear in the middle of the night. The parent who knows Lamentations 3:22-23 can pray it over a child in the darkest hour. Memorized Scripture is available wherever ministry is needed — in moments when there is no time to look things up and the Spirit needs something to work with.",
  },
  {
    title: "Maintenance — Keeping What You Have Learned (2 Tim 1:14)",
    body: "Guard the good deposit that was entrusted to you. Memorization is not a one-time event but a long-term stewardship. The spaced-repetition system (pioneered by Hermann Ebbinghaus's forgetting curve research) provides the scientific framework: review a verse at increasing intervals to move it from short-term to long-term memory. The Navigator Topical Memory System, Scripture Typer, and apps like Verses use these principles. The key insight: memory retention requires ongoing review. The question is not just how to memorize but how to maintain — building review habits that preserve what has been laboriously gained.",
  },
];

const PRACTICES = [
  "Begin with a topical system: choose 10 verses addressing your most significant current need (fear, identity, temptation, suffering) and memorize them in context — reference, text, reference.",
  "Use spaced repetition: review new verses daily for a week, then every other day for a month, then weekly — the review is as important as the initial learning.",
  "Say the verse aloud — hearing yourself say it is more effective for retention than reading it silently; writing it is more effective still; all three together are most effective.",
  "Memorize passages rather than isolated verses: the verse gains its full meaning in its context, and memorizing a paragraph gives you a longer sword.",
  "Connect memorized Scripture to specific life situations: when you memorize a verse, ask what situation it speaks to and mentally file it there — so that when the situation arises, the verse is retrievable.",
];

const VOICES = [
  {
    author: "Andrew Davis",
    source: "An Approach to Extended Memorization of Scripture",
    quote: "There is no more powerful weapon in spiritual warfare than a heart full of memorized Scripture. The person who has internalized Scripture is not dependent on a physical Bible — they carry the sword of the Spirit within them, available at any moment.",
    bio: "Andrew Davis is the senior pastor of First Baptist Church Durham and the author of what may be the most practical extended memorization guide available. He memorized entire books of the Bible and describes his method in simple, reproducible terms. His guide has introduced thousands to the possibility of memorizing far more than isolated verses.",
  },
  {
    author: "Jan Johnson",
    source: "Savoring God's Word",
    quote: "Lectio divina is not reading about God but reading toward God — letting the text reach you, move you, form you. The goal is not information but transformation; not more content in the head but more Christ in the heart.",
    bio: "Jan Johnson is a spiritual formation teacher and author who has written extensively on Scripture engagement practices. Savoring God's Word focuses on the slower, more meditative approaches to Scripture — lectio divina, imaginative prayer with narrative texts, and the kind of sustained engagement that moves a verse from the page to the heart.",
  },
  {
    author: "Howard Hendricks",
    source: "Living by the Book",
    quote: "The Bible was not given to increase your knowledge but to change your life. You can memorize the entire New Testament and remain unchanged if all you have done is add information. What changes you is the internalized word meeting a willing spirit in the moment of your actual need.",
    bio: "Howard Hendricks was a professor at Dallas Theological Seminary for over fifty years and one of the most influential Bible teachers of his generation. Living by the Book is his comprehensive guide to Bible study method — including observation, interpretation, and application. His emphasis on application gives Scripture memorization its purpose: not content retention but life transformation.",
  },
];

const SCRIPTURES = [
  { ref: "Ps 119:11", text: "I have hidden your word in my heart that I might not sin against you." },
  { ref: "Rom 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is — his good, pleasing and perfect will." },
  { ref: "Josh 1:8", text: "Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful." },
  { ref: "Col 3:16", text: "Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit, singing to God with gratitude in your hearts." },
  { ref: "Deut 6:6–7", text: "These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up." },
  { ref: "Matt 4:4", text: "Jesus answered, 'It is written: Man shall not live on bread alone, but on every word that comes from the mouth of God.'" },
];

const VIDEOS = [
  { videoId: "JJ-c1NhfQ3M", title: "Why and How to Memorize Scripture — A Practical Guide" },
  { videoId: "gBPgAmxFqJc", title: "Andrew Davis: How to Memorize Entire Books of the Bible" },
  { videoId: "8P0CmFPrreM", title: "Scripture Memorization Methods That Work" },
  { videoId: "tHRLX8jXzWQ", title: "The Transformed Mind: How Memorizing Scripture Changes You" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ScriptureMemorizationPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_scriptmem_entries") ?? "[]"); } catch { return []; }
  });
  const [jVerse, setJVerse] = useState("");
  const [jMethod, setJMethod] = useState("");
  const [jPurpose, setJPurpose] = useState("");

  useEffect(() => { localStorage.setItem("vine_scriptmem_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jVerse.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), verse: jVerse, method: jMethod, purpose: jPurpose }, ...prev]);
    setJVerse(""); setJMethod(""); setJPurpose("");
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: GOLD + "22", color: GOLD, padding: "0.2rem 0.7rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Spiritual Formation</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.5rem" }}>Scripture Memorization</h1>
        <p style={{ color: MUTED, fontSize: "1rem", marginBottom: "2rem", maxWidth: 680, lineHeight: 1.7 }}>
          Why memorizing Scripture matters theologically, how to do it practically, how to maintain a memory system, and how Scripture hidden in the heart transforms the mind.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                borderColor: tab === t.id ? GOLD : BORDER, background: tab === t.id ? GOLD + "22" : "transparent", color: tab === t.id ? GOLD : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.25rem" }}>The Theology of Scripture Memorization</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem", fontSize: "0.95rem" }}>
              Memorizing Scripture is not a religious achievement — it is a form of spiritual warfare and a means of transformation. The biblical warrant runs from Moses through Jesus.
            </p>
            {THEOLOGY.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 14, padding: "1.3rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem" }}>How to Memorize and Maintain Scripture</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
              Effective memorization is a learnable skill. These practices draw from the best methods — ancient and modern — for internalizing the word of God.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {PRACTICES.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.2rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: GOLD + "22", color: GOLD, fontWeight: 800, fontSize: "0.95rem", borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
                  <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.94rem", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem" }}>Voices on Scripture Memorization</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
              Teachers who have written and practiced extended Scripture memorization and left behind practical, trustworthy guidance.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {VOICES.map(v => (
                <div key={v.author} style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 14, padding: "1.3rem" }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: "1rem", marginBottom: "0.15rem" }}>{v.author}</div>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.9rem", fontStyle: "italic" }}>{v.source}</div>
                  <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem", margin: "0 0 0.9rem", color: TEXT, lineHeight: 1.75, fontSize: "0.95rem", fontStyle: "italic" }}>
                    &ldquo;{v.quote}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.88rem", margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem" }}>Key Scriptures on the Word in the Heart</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
              The command to internalize Scripture is woven through the Old and New Testaments alike. These texts are themselves worthy of memorization.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {SCRIPTURES.map(s => (
                <div key={s.ref} style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: "1.2rem", borderLeft: `3px solid ${GOLD}` }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.ref}</div>
                  <p style={{ color: TEXT, lineHeight: 1.75, fontSize: "0.95rem", fontStyle: "italic", margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem" }}>Memorization Tracker</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
              Log the verses you are memorizing, the method you are using, and the purpose or situation this verse is meant to serve. Saved only in your browser.
            </p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.3rem", marginBottom: "1.25rem" }}>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ display: "block", color: GOLD, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.35rem" }}>Verse (reference and text)</label>
                <textarea value={jVerse} onChange={e => setJVerse(e.target.value)}
                  placeholder="e.g. Ps 119:11 — I have hidden your word in my heart..."
                  style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "0.75rem", fontSize: "0.94rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", outline: "none" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ display: "block", color: GOLD, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.35rem" }}>Method you are using</label>
                <input value={jMethod} onChange={e => setJMethod(e.target.value)}
                  placeholder="e.g. Say aloud 5x morning, write it out, spaced repetition app..."
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "0.65rem 0.75rem", fontSize: "0.94rem", boxSizing: "border-box", outline: "none" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: GOLD, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.35rem" }}>Purpose — what situation does this verse speak to?</label>
                <input value={jPurpose} onChange={e => setJPurpose(e.target.value)}
                  placeholder="e.g. fear, identity, temptation, grief, ministry..."
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "0.65rem 0.75rem", fontSize: "0.94rem", boxSizing: "border-box", outline: "none" }} />
              </div>
              <button onClick={saveEntry}
                style={{ background: GOLD, color: "#fff", border: "none", borderRadius: 10, padding: "0.6rem 1.4rem", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer" }}>
                Save Entry
              </button>
            </div>
            {entries.length > 0 && (
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.75rem", color: MUTED }}>Memorization Log</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem" }}>
                      <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.4rem" }}>{e.date}</div>
                      <div style={{ fontWeight: 600, marginBottom: "0.3rem", fontSize: "0.94rem" }}>{e.verse}</div>
                      {e.method && <div style={{ color: GOLD, fontSize: "0.85rem", marginBottom: "0.2rem" }}>Method: {e.method}</div>}
                      {e.purpose && <div style={{ color: MUTED, fontSize: "0.85rem" }}>Purpose: {e.purpose}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem" }}>Video Teaching on Scripture Memorization</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "0.95rem" }}>Practical and theological instruction on hiding God's word in the heart.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ marginTop: "0.5rem", color: MUTED, fontSize: "0.88rem" }}>{v.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
