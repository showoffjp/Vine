"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", BLUE = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Word Hidden in the Heart Is the Deepest Form of Scripture Meditation", verse: "Psalm 119:11", text: "Your word I have hidden in my heart, that I might not sin against you. The psalmist names the practical effect of memorization: scripture stored in the memory becomes immediately available at the moment of temptation, discouragement, or decision. It is not just that the words are available — it is that the stored word, when the Spirit brings it to mind, acts with a power that quoted scripture overheard from outside never quite matches. The word hidden in the heart is a weapon drawn from the inside." },
  { title: "Jesus Defeated Temptation With Memorized Scripture", verse: "Matthew 4:4", text: "Jesus answered, 'It is written: Man shall not live on bread alone, but on every word that comes from the mouth of God.' In the wilderness, when Satan pressed him with each temptation, Jesus responded from memory with Deuteronomy. He did not reach for a scroll. He did not say 'I believe there's a verse somewhere that...' He had the word internalized, available instantly, delivered with precision. The model Jesus gives us for spiritual warfare is not just Bible access — it is Bible memorization." },
  { title: "Renewal of the Mind Requires New Content to Work With", verse: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. The transformation Paul describes — from worldly conformity to kingdom thinking — is a cognitive renovation. The mind is not renewed in a vacuum; it requires new content to replace old patterns. Scripture memory plants that content at the deepest level of cognition. What we have memorized is what we think with, not just what we look up. The renewal of the mind is, in part, a memorization project." },
  { title: "God Commands Parents to Pass Scripture to Children Through Memory", verse: "Deuteronomy 6:6-7", text: "These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up. The mechanism God prescribes for intergenerational faith transmission is memorization woven into daily life — not a Sunday class, not a formal curriculum, but a household where Scripture is so deeply known that it surfaces naturally in conversation, at meals, on walks, at bedtime. This kind of fluency requires memory." },
  { title: "The Spirit Uses What Has Been Deposited Through Memorization", verse: "John 14:26", text: "The Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you. Jesus promises the Spirit will remind. But reminding requires previous learning. The Spirit brings to mind what is already in the mind. Christians who have stored Scripture through memorization give the Spirit more to work with — more words to bring back at the right moment, more verses to surface during prayer, more truths to quicken in dark hours. Memorization prepares the way for the Spirit's voice." },
];

const methods = [
  { icon: "🔄", title: "The 5x5 Method: Five Verses, Five Times a Day", text: "Choose five verses to memorize per week. Review each one five times a day — morning, mid-morning, noon, afternoon, evening. Each review takes less than a minute. At the end of the week, begin a new set of five while continuing to review previous verses. Spaced repetition is the scientifically established mechanism for moving information from working memory to long-term memory. Five reviews per day provides adequate repetition without overwhelming the schedule." },
  { icon: "📝", title: "Write It Out — Handwriting Activates Deeper Encoding", text: "Write out the verse by hand — not just type it, write it. Handwriting activates different cognitive processes than typing and produces stronger memory encoding. Write the verse, its reference, and the context once. Then cover it and write it from memory. Compare, correct, and repeat. The act of physically writing the words forces slower, more deliberate engagement than reading alone. Many serious memorizers report that handwriting is their most effective single technique." },
  { icon: "🎵", title: "Set Verses to Music or Rhythm", text: "The brain stores information set to music in a different and more durable way than prose. Many Christians can recite entire psalms from childhood simply because they were set to a melody. You do not need formal musical ability — even a simple chant, a folk tune, or a rhythm tapped while walking can serve as the musical scaffold that makes verses stick. The Psalms themselves were sung, not recited, in ancient Israel. Singing scripture is not a children's activity; it is the original method." },
  { icon: "👥", title: "Use Accountability and Community — Recite to Someone", text: "Reciting a memorized verse to another person has different psychological weight than reciting it alone. The social stake raises the commitment level. Consider memorizing with a partner or small group — exchanging new verses weekly, reciting to each other, and holding each other accountable. The Navigator ministry built a generation of Scripture-saturated Christians primarily through this accountability model: the Topical Memory System, memorized in pairs, reviewed weekly." },
  { icon: "📖", title: "Start With Passages, Not Just Verses", text: "Individual verses divorced from context are less powerful than passages. Consider memorizing full passages: Psalm 23 (six verses), Philippians 4:4-8, Romans 8:38-39, Isaiah 53. Passage memorization gives the context that makes individual verses intelligible and prevents proof-texting. The extra effort of memorizing full paragraphs or chapters pays dividends in understanding and in the richness of what the Spirit can work with." },
];

const scriptures = [
  { verse: "Psalm 119:11", text: "Your word I have hidden in my heart, that I might not sin against you." },
  { verse: "Matthew 4:4", text: "Man shall not live on bread alone, but on every word that comes from the mouth of God." },
  { verse: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind." },
  { verse: "Colossians 3:16", text: "Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom." },
  { verse: "Deuteronomy 6:6-7", text: "These commandments that I give you today are to be on your hearts. Impress them on your children." },
  { verse: "Hebrews 4:12", text: "For the word of God is alive and active. Sharper than any double-edged sword." },
];

const voices = [
  { id: "dw", name: "Dallas Willard", role: "Author, The Spirit of the Disciplines; Philosopher", quote: "Bible memorization is the most important thing I can recommend to strengthen your life in God. Nothing replaces it. The soul that has deeply absorbed and pondered Scripture has resources of wisdom and strength that cannot be explained in any other way. It is the deepest form of the word dwelling in you richly.", bio: "Willard's emphasis on Scripture memorization as a core spiritual discipline — not a supplemental exercise — grounds the practice in his broader philosophy of spiritual formation. His view that transformation requires the renovation of the mind gives memorization its theological weight: we are what we think, and we think with what we have stored." },
  { id: "an", name: "Andrew Davis", role: "Author, An Approach to Extended Memorization of Scripture; Pastor", quote: "Most Christians have never tried to memorize large portions of Scripture because they have never been told it is possible for ordinary people. But any Christian who can memorize their phone number, their address, and the lyrics to songs they have not tried to memorize can memorize books of the Bible. The question is not capacity; it is priority.", bio: "Davis memorized entire books of the Bible and wrote the accessible guide An Approach to Extended Memorization of Scripture. His practical methods have helped thousands of Christians discover that extended Scripture memorization is achievable. His contribution is demystifying the process — not presenting it as a heroic feat for spiritual athletes but as a discipline available to any committed believer." },
  { id: "jf", name: "Jan Johnson", role: "Author, Savoring God's Word; Spiritual Formation Teacher", quote: "Memorized scripture is different from scripture you have read. It lives inside you instead of outside you. You carry it to the dentist, to the meeting that goes badly, to the 3 a.m. wakefulness. It is available precisely when you cannot access a Bible. The person who has stored the word has resources available in moments of real need that the person who only reads it does not.", bio: "Johnson's work on contemplative engagement with Scripture — lectio divina, sacred reading, word meditation — integrates naturally with memorization practice. Her insight that memorized scripture is 'inside you instead of outside you' captures the experiential difference that most committed memorizers report: the stored word functions at a deeper level than the word merely read." },
];

type BMEntry = { id: string; date: string; verse: string; reflection: string; progress: string };

export default function BibleMemoryPage() {
  const [tab, setTab] = useState("theology");
  const [bmJournal, setBmJournal] = useState<BMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_biblemem_entries") ?? "[]"); } catch { return []; }
  });
  const [jVerse, setJVerse] = useState("");
  const [jReflection, setJReflection] = useState("");
  const [jProgress, setJProgress] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_biblemem_entries", JSON.stringify(bmJournal)); } catch {}
  }, [bmJournal]);

  function saveEntry() {
    if (!jVerse.trim()) return;
    setBmJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), verse: jVerse, reflection: jReflection, progress: jProgress }, ...prev]);
    setJVerse(""); setJReflection(""); setJProgress("");
  }
  function deleteEntry(id: string) { setBmJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "methods", "voices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <main id="main-content" style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Spiritual Disciplines</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Scripture Memory</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Hiding God&apos;s word in your heart — the theology of memorization, proven methods, and the practice of storing Scripture for the long journey.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button type="button" key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? BLUE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: BLUE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "methods" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {methods.map((m, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                  <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{m.icon}</div>
                  <div>
                    <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{m.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {voices.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                  <div style={{ color: BLUE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${BLUE}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: BLUE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Memory Journal</h3>
                <textarea placeholder="What verse or passage am I working on memorizing?" value={jVerse} onChange={e => setJVerse(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What has this verse taught me or how has it met me this week?" value={jReflection} onChange={e => setJReflection(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="My current progress and next memorization goal" value={jProgress} onChange={e => setJProgress(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button type="button" onClick={saveEntry} style={{ background: BLUE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {bmJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : bmJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.verse && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Verse:</strong> {e.verse}</p>}
                  {e.reflection && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Reflection:</strong> {e.reflection}</p>}
                  {e.progress && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Progress:</strong> {e.progress}</p>}
                  <button type="button" onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "1P7bPRa0K3U", title: "Why Memorize Scripture? — Andrew Davis", channel: "FBC Durham", description: "Davis explains the case for extended Scripture memorization — why it is possible for ordinary Christians, how the mind works in memorization, and what changes when the word dwells in you richly." },
                { videoId: "oPSNb3sygms", title: "How to Memorize Scripture — Practical Methods", channel: "Desiring God", description: "Practical tutorial on the most effective methods for memorizing Scripture — including the role of spaced repetition, context, writing, and accountability in long-term retention." },
                { videoId: "mwMFCOPXJdU", title: "The Power of Scripture Memory in Spiritual Warfare", channel: "The Gospel Coalition", description: "How memorized Scripture functions in spiritual warfare — the way the Spirit uses stored verses at moments of temptation, grief, and decision that the merely-read word cannot match." },
                { videoId: "2Xh0x4lkJU8", title: "Colossians 3:16 — Let the Word Dwell in You Richly", channel: "Ligonier Ministries", description: "Exposition of Colossians 3:16 and what it means for the word to dwell 'richly' — the difference between occasional exposure and deep internalization of Scripture." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: BLUE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                    <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
