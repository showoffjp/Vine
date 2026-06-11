"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type BSEntry = { id: string; date: string; passage: string; method: string; insight: string };

export default function BibleStudyGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BSEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_biblestudyguide_entries") ?? "[]"); } catch { return []; }
  });
  const [jPassage, setJPassage] = useState("");
  const [jMethod, setJMethod] = useState("");
  const [jInsight, setJInsight] = useState("");

  useEffect(() => { localStorage.setItem("vine_biblestudyguide_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jPassage.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), passage: jPassage, method: jMethod, insight: jInsight }, ...prev]);
    setJPassage(""); setJMethod(""); setJInsight("");
  };

  const deleteEntry = (id: string) => setEntries(prev => prev.filter(e => e.id !== id));

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Bible &amp; Theology</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          How to Study the Bible
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          The Bible is the most important book you will ever study, and it rewards serious attention. Inductive Bible study &mdash; observing what the text says, interpreting what it means, applying what it demands &mdash; is the foundational discipline. This guide walks through the methods, tools, and practices that turn reading into genuine encounter.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? ACCENT : BORDER, background: tab === t.id ? ACCENT + "22" : "transparent", color: tab === t.id ? ACCENT : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                title: "Inductive Bible Study: Observe, Interpret, Apply",
                body: "The three-movement method of inductive Bible study structures how we approach any passage. Observation asks: what does the text actually say? This requires slowing down &mdash; noting repeated words, grammatical structures, connectives (therefore, but, because), literary genre, and what the author explicitly claims. Interpretation asks: what does it mean? Here we move from observation to understanding &mdash; asking about historical context, the author&rsquo;s intent, the audience&rsquo;s situation, and how the passage fits within the book and the whole of Scripture. Application asks: how does this change me? Application is not the only step, but it is the final one &mdash; the text must land somewhere in the concrete realities of living.",
              },
              {
                title: "Hermeneutics: The Science and Art of Interpretation",
                body: "Hermeneutics is the discipline of biblical interpretation &mdash; the set of principles that guide how we read. The historical-grammatical method holds that the primary meaning of a text is determined by the author&rsquo;s intention in its historical context, expressed through the grammar and vocabulary of the original language. This guards against reading contemporary assumptions back into the text. Canonical context matters too: individual passages must be read in light of the whole of Scripture, noting how themes develop across the Old and New Testaments. Scripture interprets Scripture: unclear passages are illuminated by clearer ones, and no doctrine should rest on a single ambiguous text.",
              },
              {
                title: "Genre and Its Demands",
                body: "The Bible contains poetry, narrative, prophecy, law, gospel, epistle, apocalyptic literature, and wisdom writing &mdash; each genre requires different reading approaches. Poetry (Psalms, Proverbs, Song of Solomon) communicates through imagery, parallelism, and emotional resonance, not primarily propositional argument. Narrative (Genesis, Samuel, Acts) shows rather than tells: the author shapes the story to make theological points, and identifying what is described versus what is commanded requires care. Prophecy often has both immediate and long-range fulfillment dimensions. Epistles (Paul&rsquo;s letters) are occasional documents: reading them well requires reconstructing the situation they address. Reading every genre as though it were direct proposition produces interpretive error.",
              },
              {
                title: "The Devotional vs. Academic Distinction",
                body: "Both devotional and academic reading of Scripture are legitimate and necessary, but they are different activities. Devotional reading &mdash; lectio divina, slow prayerful reading, meditation &mdash; seeks encounter and formation rather than information. Academic reading seeks historical, linguistic, and theological understanding. The danger of purely devotional reading without academic grounding is that it becomes a mirror for one&rsquo;s existing assumptions rather than a genuinely new word. The danger of purely academic reading without devotional posture is that it produces knowledge about God rather than knowledge of God. The mature Bible student cultivates both &mdash; rigorous attention to the text and prayerful openness to the God who speaks through it.",
              },
              {
                title: "Studying Alone and Studying in Community",
                body: "Individual Bible study and communal Bible study are mutually corrective. Private study develops personal discipline and allows for extended attention; communal study &mdash; in small groups, Sunday school, theological discussion &mdash; surfaces interpretations and applications that solitary reading misses. The history of the church&rsquo;s interpretation (the tradition) is itself a form of communal study across centuries: reading the Reformers, the Church Fathers, and contemporary scholars situates personal reading in a conversation larger than any individual. No reader is interpretation-neutral; we all bring assumptions to the text, and community helps surface and correct them.",
              },
              {
                title: "Studying Difficult Passages",
                body: "Every serious Bible student eventually encounters passages that are confusing, disturbing, or apparently contradictory. The right response is neither to skip them nor to force premature resolution. Approach difficult texts with patience: identify precisely what is difficult (historical context? translation issue? theological tension?). Consult multiple commentaries representing different interpretive traditions. Distinguish between texts that are difficult because they are unclear and texts that are difficult because they are clear but demanding. Sometimes the difficulty is ours &mdash; we resist the text&rsquo;s authority because it challenges something we want to hold onto. Engaging the Bible&rsquo;s hard parts honestly is more spiritually productive than a curated reading that avoids discomfort.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Practices</h2>
            {[
              "Before reading any passage, ask three questions: Who wrote this? To whom? About what situation? This basic orientation to historical context prevents the most common interpretive errors and grounds reading in authorial intent rather than personal projection.",
              "Practice the SOAP method for daily reading: Scripture (copy the verse or passage by hand), Observation (what does it say?), Application (what does it require of me?), Prayer (respond to God in light of what you read). The act of writing slows reading down and sharpens attention.",
              "Use a concordance to trace a word or theme across multiple books. Seeing how &ldquo;covenant,&rdquo; &ldquo;righteousness,&rdquo; or &ldquo;temple&rdquo; develops from Genesis to Revelation provides a kind of depth that any single passage reading cannot.",
              "Read at least one commentary when studying a passage for teaching or leading others. A good one-volume commentary (e.g., the ESV Study Bible notes, the NIV Application Commentary, or the New Bible Commentary) anchors interpretation in the work of scholars who have spent careers on the text.",
              "Establish a Bible reading plan and follow it for at least one year. Options range from chronological plans to canonical reading through to thematic plans. Completing the whole canon in sequence gives readers access to the shape and flow of the whole story &mdash; individual passages read differently once you know how the whole thing fits together.",
              "When studying a passage, identify one concrete application before closing your Bible. Application is not always behavioral &mdash; sometimes it is a belief to hold, a prayer to pray, or a person to encourage. But vague &ldquo;general edification&rdquo; without a specific landing point is a missed opportunity.",
              "Join or form a Bible study group where members prepare individually and then discuss together. The diversity of observations, life experiences, and questions that a group brings to a text is genuinely enriching &mdash; and other people will see things you have missed.",
            ].map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ background: ACCENT + "22", color: ACCENT, fontWeight: 800, borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.9rem" }}>{i + 1}</div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: p }} />
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Voices</h2>
            {[
              {
                name: "Howard Hendricks",
                work: "Living by the Book",
                quote: "The Bible was not given to increase your knowledge but to change your life. The goal of Bible study is not information but transformation &mdash; and the student who studies without an eye toward obedience has missed the point entirely.",
                bio: "Howard Hendricks (1924&ndash;2013) was a professor at Dallas Theological Seminary for over fifty years and one of the most influential teachers of inductive Bible study methodology in evangelical Christianity. His book <em>Living by the Book</em>, co-written with his son William, remains a standard text for learning the observe-interpret-apply method. His insistence that Bible study must move toward life transformation rather than mere intellectual accumulation shaped a generation of students.",
              },
              {
                name: "Eugene Peterson",
                work: "Eat This Book",
                quote: "Reading is not a passive activity. We read in order to live. We read to find out what is going on, what is possible, what is at stake. When we read the Scriptures, we are reading the book that tells us who we are and what we are to do &mdash; a text that precedes us and exceeds us.",
                bio: "Eugene Peterson (1932&ndash;2018) was a Presbyterian pastor, professor, and author best known for <em>The Message</em>, his paraphrase of the Bible. His book <em>Eat This Book</em> draws on the biblical image of eating the scroll (Ezekiel 3, Revelation 10) to describe how Scripture should be absorbed rather than merely analyzed. His concept of <em>lectio divina</em> &mdash; slow, prayerful, formative reading &mdash; provides a necessary counterweight to purely academic approaches.",
              },
              {
                name: "Gordon Fee & Douglas Stuart",
                work: "How to Read the Bible for All Its Worth",
                quote: "The aim of good exegesis is to ask what the text meant to its original hearers and what it means for us today &mdash; without collapsing the distance between those two questions or pretending that the first question doesn&rsquo;t matter.",
                bio: "Gordon Fee and Douglas Stuart&rsquo;s <em>How to Read the Bible for All Its Worth</em> is perhaps the most widely used introduction to biblical hermeneutics for non-specialists. Now in its fourth edition, it systematically addresses each biblical genre &mdash; epistles, Old Testament narrative, Psalms, prophecy, Gospels, Revelation &mdash; with practical guidance for reading each type well. It remains the standard recommendation for anyone wanting to move from reading to genuine interpretation.",
              },
              {
                name: "John Stott",
                work: "Understanding the Bible",
                quote: "The Holy Spirit does not reveal to the individual Christian things that contradict what he has already revealed in Scripture. Scripture is the norm by which all else is tested, not the other way round. The Spirit illuminates; he does not add to or override the Word.",
                bio: "John Stott (1921&ndash;2011) was an Anglican rector, theologian, and one of the architects of twentieth-century global evangelicalism. His writing on biblical interpretation consistently balanced reverence for Scripture&rsquo;s authority with rigorous attention to historical and grammatical meaning. His brief <em>Understanding the Bible</em> provides a clear framework for both the nature of Scripture and the principles of its interpretation.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em>{v.work}</em></div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;<span dangerouslySetInnerHTML={{ __html: v.quote }} />&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.bio }} />
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Scripture</h2>
            {[
              { ref: "2 Timothy 3:16-17", text: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work." },
              { ref: "Psalm 119:105", text: "Your word is a lamp to my feet and a light to my path." },
              { ref: "Psalm 1:2-3", text: "His delight is in the law of the LORD, and on his law he meditates day and night. He is like a tree planted by streams of water that yields its fruit in its season, and its leaf does not wither." },
              { ref: "Hebrews 4:12", text: "For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart." },
              { ref: "Joshua 1:8", text: "This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night, so that you may be careful to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success." },
              { ref: "Romans 15:4", text: "For whatever was written in former days was written for our instruction, that through endurance and through the encouragement of the Scriptures we might have hope." },
              { ref: "John 5:39", text: "You search the Scriptures because you think that in them you have eternal life; and it is they that bear witness about me." },
              { ref: "Nehemiah 8:8", text: "They read from the book, from the Law of God, clearly, and they gave the sense, so that the people understood the reading." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.text }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Study Notes Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What passage are you studying?</label>
                  <textarea
                    value={jPassage}
                    onChange={e => setJPassage(e.target.value)}
                    placeholder="Book, chapter, and verse(s) &mdash; e.g. Romans 8:1-17..."
                    style={{ width: "100%", minHeight: 60, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What study method or approach are you using?</label>
                  <textarea
                    value={jMethod}
                    onChange={e => setJMethod(e.target.value)}
                    placeholder="Inductive, word study, cross-reference, commentary, lectio divina, SOAP..."
                    style={{ width: "100%", minHeight: 60, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What insight or application did you receive?</label>
                  <textarea
                    value={jInsight}
                    onChange={e => setJInsight(e.target.value)}
                    placeholder="What did the Spirit illuminate? What do you need to believe, do, or pray?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
              </div>
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.6rem 1.5rem", background: ACCENT, border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", fontWeight: 700, fontSize: "0.93rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.82rem" }}>Delete</button>
                </div>
                {e.passage && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Passage</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.passage}</p></div>}
                {e.method && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Method</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.method}</p></div>}
                {e.insight && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Insight</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.insight}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="Z-viTQSU0yk" title="How to Study the Bible &mdash; Inductive Method Explained" />
            <VideoEmbed videoId="XHFPoNFVxh8" title="How to Read the Bible: Genre Matters" />
            <VideoEmbed videoId="AqmDl4NQTRU" title="Hermeneutics 101 &mdash; How to Interpret the Bible Correctly" />
            <VideoEmbed videoId="p9OWoMflKO0" title="Bible Study Tools for Beginners &mdash; Commentaries, Concordances &amp; More" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
