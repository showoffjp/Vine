"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", AMBER = "#F59E0B", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "What Is Inductive Bible Study? — Coming to Scripture with Questions, Not Answers", verse: "Acts 17:11", text: "The Berean Jews were of more noble character than those in Thessalonica, for they received the message with great eagerness and examined the Scriptures every day to see if what Paul said was true (Acts 17:11). Inductive Bible study is the discipline of coming to Scripture to discover what it says before deciding what we think it means. Its modern form was developed by Howard Hendricks at Dallas Theological Seminary, popularized by Oletta Wald's The Joy of Discovery in Bible Study, and made accessible to lay people on a massive scale by Kay Arthur's Precept Ministries. The method has three movements: Observation (What does the text say?), Interpretation (What does the text mean?), and Application (How does this change me?). These three movements are sequential and irreversible — application without interpretation produces misapplication; interpretation without observation produces eisegesis. IBS produces deeper, more durable engagement with Scripture than topical or devotional reading because it trains the reader to let the text speak rather than projecting meaning onto it." },
  { title: "Observation — What Does the Text Actually Say?", verse: "Prov 2:3-5", text: "If you call out for insight and cry aloud for understanding, and if you look for it as for silver and search for it as for hidden treasure, then you will understand the fear of the Lord (Prov 2:3-5). Observation is the most undervalued skill in Bible study and the foundation of everything that follows. It is the art of noticing — really noticing — what is on the page. Skilled observers mark repeated words and phrases (repetition indicates emphasis), conjunctions that show logical relationship (therefore, but, because, so that), comparisons and contrasts, lists, commands, promises, and questions. They look at who is speaking, to whom, in what circumstance, and with what emotional tone. Tools for observation include colored pencils with a personal marking system, making lists in the margin, and reading aloud to hear the text differently. Most people skip observation because it feels slow and unrewarding at first — but every meaningful interpretive insight comes from something first seen in observation. You cannot interpret what you have not noticed." },
  { title: "Interpretation — What Does the Text Mean?", verse: "2 Tim 3:16-17", text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work (2 Tim 3:16-17). Context is the supreme rule of interpretation: context is king. Every text must be read in its grammatical context (what do these words mean in this sentence?), its historical context (what was happening in the author's world?), its literary context (what kind of writing is this — narrative, poetry, epistle, prophecy?), and its canonical context (how does this fit with the rest of Scripture?). The single meaning principle holds that a text has one intended meaning — the meaning its author intended in its original context — though it may have many valid applications. Interpretive questions guide the work: Why does the author use this word here? What did this practice mean in this culture? How does this connect to what came before? Common interpretive errors include spiritualizing narrative (finding allegory where the text intends history), lifting promises out of their covenant context, and reading New Testament theology back into Old Testament narrative without care. Tools — commentaries, Bible dictionaries, Bible atlases — should be consulted after personal observation and interpretation work, not instead of it." },
  { title: "Application — How Does This Change Me?", verse: "Josh 1:8", text: "Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it (Josh 1:8). Application is the goal of Bible study, but it is not the starting point. The most common mistake in Bible study is asking 'What does this mean to me?' before asking 'What does this say?' and 'What does this mean?' Application built on insufficient observation and interpretation is subjective and unstable. When interpretation is done well, application flows naturally and specifically. The four quadrants of application provide a framework: (1) A truth to believe — something the text reveals about God, humanity, or reality that I am invited to trust; (2) A sin to avoid — a pattern the text exposes as destructive or dishonoring to God; (3) A command to obey — a specific action the text calls me to take; (4) A promise to claim — something God has committed to that I can stand on. The same text will apply differently in different seasons of life — this is not relativism; it is the living nature of God's word meeting us exactly where we are." },
  { title: "Practical Setup — How to Do IBS in 30 Minutes or an Hour", verse: "Heb 4:12", text: "For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart (Heb 4:12). A 30-minute IBS session: (1) Begin with a prayer for illumination — ask the Holy Spirit to be your teacher; (2) Read the passage aloud once for overall impression; (3) Read it again, marking observations with a pencil; (4) Write two or three interpretive questions in the margin; (5) Write a one-sentence paraphrase in your own words; (6) Identify one specific application. A 60-minute session adds: consulting one commentary or Bible dictionary for context on your interpretive questions; tracing a key word through a concordance; and writing a more developed application with a specific action step. Essential tools: a study Bible with cross-references (ESV Study Bible, NIV Study Bible), a one-volume Bible commentary, a Bible dictionary, and a concordance. None of these are required to start — a Bible and a pencil are sufficient. The goal is not academic mastery but transformative encounter: the aim of IBS is not to know more about the Bible but to know God better through it." },
];

const practices = [
  { icon: "🧼", title: "The SOAP Method — Scripture / Observation / Application / Prayer", text: "SOAP is IBS adapted for daily devotional use. Write out the Scripture passage by hand. Record one or two Observations — what stands out, what you notice. Write an Application — how this truth intersects your life today. Close with a Prayer that responds to what you read. SOAP is not a full IBS session; it is a daily practice that keeps you in the text and trains the observational reflex over time. It takes 10-15 minutes and sustains a daily connection to Scripture." },
  { icon: "🗺️", title: "Verse Mapping — Deep Study of a Single Verse", text: "Choose a single verse. In the center of a blank page, write the verse. Around it, branch out: the context (what comes before and after), definitions of key words in the original language, cross-references that illuminate the verse, historical background, and your application. Verse mapping slows the study process down to focus intense attention on a small amount of text. This produces disproportionate depth of understanding compared to reading larger amounts quickly." },
  { icon: "📚", title: "Book Study — Working Through an Entire NT Book", text: "Choose a short New Testament book — Philippians, Colossians, James, or 1 John are excellent starting points. Read it through multiple times before doing verse-by-verse work. Create a chapter outline. Identify the major themes and the author's main argument. Then work through it passage by passage over several weeks using the observation-interpretation-application sequence. Whole-book study produces a structural understanding of Scripture that topical study cannot replicate." },
  { icon: "🔤", title: "Word Study — Tracing a Key Term Through Scripture", text: "Identify a theologically significant word in your passage — grace, faith, righteousness, redeem. Use a concordance or Bible software to trace every occurrence of that word across Scripture. Note how the word develops across the canon, how it is used in different contexts, and what the New Testament adds to the Old Testament usage. Word studies reveal the depth and coherence of biblical theology and produce insights that cannot be found by reading any single passage in isolation." },
  { icon: "👥", title: "Small Group IBS — Doing the Observation Step Together", text: "Assign a passage for everyone to observe individually before the group meets. In the group, spend the first 15 minutes pooling observations only — no interpretation yet. Notice how the group sees things no individual noticed alone. Then move to interpretation together, and finally to application. Doing the observation step collectively before sharing interpretations dramatically improves group Bible study quality and prevents the dominant personality in the room from determining everyone else's reading." },
];

const scriptures = [
  { verse: "2 Tim 3:16-17", text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work." },
  { verse: "Ps 119:105", text: "Your word is a lamp for my feet, a light on my path." },
  { verse: "Prov 2:3-5", text: "If you call out for insight and cry aloud for understanding, and if you look for it as for silver and search for it as for hidden treasure, then you will understand the fear of the Lord and find the knowledge of God." },
  { verse: "Josh 1:8", text: "Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful." },
  { verse: "Acts 17:11", text: "Now the Berean Jews were of more noble character than those in Thessalonica, for they received the message with great eagerness and examined the Scriptures every day to see if what Paul said was true." },
  { verse: "Heb 4:12", text: "For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart." },
];

const voices = [
  { name: "Kay Arthur", role: "How to Study Your Bible; Founder, Precept Ministries", quote: "When you learn to observe the text — to really see what is there — everything changes. The Bible stops being a book you read and becomes a conversation you enter. Most people have never been taught to slow down and look. When they learn to look, they find that the Bible is inexhaustibly rich. You will never run out. One lifetime is not enough to exhaust what is in a single chapter.", bio: "Arthur founded Precept Ministries in 1970 and developed the Precept Upon Precept inductive Bible study curriculum, which has been used in more than 150 countries. Her method emphasizes observation above all else, arguing that most Bible study failure is failure to observe rather than failure to interpret. Her workbooks have trained millions of laypeople in disciplined, systematic engagement with Scripture." },
  { name: "Howard Hendricks", role: "Living by the Book; Professor, Dallas Theological Seminary", quote: "The discipline of Bible study will pay you dividends for the rest of your life. Not because the method is magic, but because the method forces you to attend to the text. Most people do not fail in Bible study because they lack intelligence; they fail because they lack method. Give a person a method and you give them a tool they can use every day for the rest of their lives. Give them a tool and they will find treasure.", bio: "Hendricks taught at Dallas Theological Seminary for over 60 years and is widely regarded as one of the most influential Bible teachers of the 20th century. His book Living by the Book, co-written with his son William, remains the definitive popular introduction to inductive Bible study. His three-stage method — observation, interpretation, application — is the framework on which nearly every modern IBS curriculum is built." },
  { name: "Jen Wilkin", role: "Women of the Word; Bible Teacher and Author", quote: "Bible literacy is not an academic achievement — it is a discipleship necessity. When we do not know what the Bible says, we become vulnerable to every teaching that sounds biblical. When we learn to read carefully, slowly, and methodically, we develop the ability to test what we hear against the word itself. Inductive Bible study does not just teach you content; it trains your mind to think God's thoughts after him.", bio: "Wilkin's Women of the Word has introduced a generation of evangelical women to the discipline of methodical Bible study. Her central argument — that heart transformation follows head knowledge, and that we must train our minds to love God before our hearts can follow — directly challenges the devotional-first approach to Scripture that dominates much of popular Christian spirituality. Her accessible, witty writing has made serious Bible study approachable for a wide audience." },
];

const videos = [
  { id: "HHlWHjHmD_s", title: "Introduction to Inductive Bible Study — Observe, Interpret, Apply" },
  { id: "NNqneTJUTLQ", title: "Kay Arthur: How to Study Your Bible" },
  { id: "Yz07JU0p5M4", title: "Jen Wilkin: Why Bible Literacy Matters" },
  { id: "gvHLX3kLBro", title: "How to Do a Word Study in the Bible" },
];

type IBEntry = { id: string; date: string; passage: string; observations: string; application: string };

export default function InductiveBibleStudyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<IBEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_inductivebible_entries") ?? "[]"); } catch { return []; }
  });
  const [jPassage, setJPassage] = useState("");
  const [jObservations, setJObservations] = useState("");
  const [jApplication, setJApplication] = useState("");

  useEffect(() => { localStorage.setItem("vine_inductivebible_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jPassage.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), passage: jPassage, observations: jObservations, application: jApplication }, ...prev]);
    setJPassage(""); setJObservations(""); setJApplication("");
  };

  const tabs = [
    { id: "theology", label: "The Method" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Bible Study</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Inductive Bible Study</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Observe, interpret, apply — the method that trains you to hear what Scripture actually says before deciding what you think it means.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? AMBER : BORDER}`, background: tab === t.id ? AMBER + "22" : "transparent", color: tab === t.id ? AMBER : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: AMBER, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: AMBER, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${AMBER}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: AMBER, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Study Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Record your IBS sessions to track your observations, interpretations, and applications over time.</p>
            {[
              { label: "Passage (the passage you studied)", val: jPassage, set: setJPassage },
              { label: "Observations (key things you noticed in the text)", val: jObservations, set: setJObservations },
              { label: "Application (how you are applying it to your life)", val: jApplication, set: setJApplication },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={i === 0 ? 2 : 3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: AMBER, color: "#07070F", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
                <h4 style={{ fontWeight: 600, color: AMBER, marginBottom: 4 }}>Past Studies ({entries.length})</h4>
                {entries.map(e => (
                  <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{e.passage}</span>
                      <span style={{ fontSize: "0.78rem", color: MUTED }}>{e.date}</span>
                    </div>
                    {e.observations && <p style={{ fontSize: "0.88rem", color: MUTED, marginBottom: 4 }}>Observations: {e.observations}</p>}
                    {e.application && <p style={{ fontSize: "0.88rem", color: MUTED }}>Application: {e.application}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: AMBER }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
