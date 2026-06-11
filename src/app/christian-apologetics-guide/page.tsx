"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", BLUE = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "1 Peter 3:15 — the Apologetics Commission", verse: "1 Pet 3:15", text: "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have — with gentleness and respect. Three elements structure the apologetic enterprise here: readiness (always prepared, not only when convenient), content (the reason for the hope, not merely an argument for religion in general), and manner (gentleness and respect, not condescension or combativeness). Notice that the apologetic is rooted in hope, not in argument — the apologist is first a witness to a living experience and only secondarily a logician. The manner requirement is not optional: apologetics that is technically correct but relationally contemptuous fails the 1 Peter standard. The person who wins the argument and loses the relationship has not done apologetics — they have done something else." },
  { title: "Does God Exist? — the Three Classical Arguments and Their Current State", verse: "Acts 17:22-23", text: "The cosmological argument asks why there is something rather than nothing: William Lane Craig's Kalam version argues that whatever begins to exist has a cause, the universe began to exist, therefore the universe has a cause that itself is uncaused, timeless, and immensely powerful. The teleological argument points to the fine-tuning of the physical constants of the universe: Robin Collins has shown that even tiny variations in the constants would make life impossible, and the best explanation is intentional design. The moral argument, as C.S. Lewis framed it, notes that objective moral values and duties exist and that they require a transcendent moral lawgiver. Each argument establishes something different and less than the full Christian God, but together they function as a cumulative case. The reasonable faith position is not that any one argument is a knockdown proof, but that the cumulative weight shifts the rational burden significantly toward theism." },
  { title: "The Resurrection — the Historical Argument for Christianity's Core Claim", verse: "1 Cor 15:14", text: "If Christ has not been raised, your faith is futile. The resurrection is not a peripheral doctrine — it is the center of the entire Christian claim. Gary Habermas's minimal facts argument draws only on data that the vast majority of critical scholars, including skeptics, accept: the crucifixion is among the best-attested facts of ancient history; the tomb was found empty (even opponents of Christianity in the first century did not deny this, but argued the body had been stolen); post-resurrection appearances were reported by multiple independent sources including a group of five hundred; and the disciples were willing to die for their testimony, which is strong evidence they were not fabricating it. The four major hypotheses — theft, hallucination, swoon, and resurrection — have all been examined by historians, and the resurrection remains the best explanation of the full body of evidence. Mike Licona's The Resurrection of Jesus provides the most comprehensive historical treatment." },
  { title: "The Problem of Evil — the Hardest Objection", verse: "Ps 46:10", text: "The intellectual problem of evil asks: if God is all-powerful, all-knowing, and all-good, evil and suffering would not exist; they do exist; therefore such a God does not exist. Alvin Plantinga's free will defense shows that God and evil are logically compatible: a world with free creatures who sometimes choose evil may be better than a world of non-free automatons who always do right, and God cannot create free creatures and simultaneously guarantee that they will always choose good. The skeptical theist response to the evidential version of the problem argues that we have no reliable basis for claiming that God lacks sufficient reasons for permitting the suffering we observe. But the harder problem is the emotional one: the person in the middle of profound loss is not asking for a philosophical rebuttal — they are asking to be heard. Apologists must learn to sit with the emotional problem before offering any intellectual response. The book of Job is the model: God's presence in the storm, not an explanation of the storm, is what Job finally receives and what ultimately satisfies." },
  { title: "Can We Trust the Bible? — Historical and Textual Reliability", verse: "2 Cor 10:5", text: "The manuscript tradition of the New Testament is extraordinary: there are more than 5,800 Greek manuscripts of the NT, compared to fewer than 20 for most classical authors, and the earliest fragments date to within decades of the originals. The eyewitness criterion examines whether the Gospels reflect the perspective of those who were present. The criterion of embarrassment — why would authors include details that are embarrassing or counterproductive to their case unless they were committed to recording accurately? — supports the authenticity of material like Peter's denial, the women as first witnesses to the resurrection, and Jesus's baptism by John. The canon formation process was not arbitrary: books were recognized, not invented, by the early church based on apostolic origin, widespread use, and doctrinal consistency. The telephone-game objection misunderstands textual transmission, which is not oral but written, with manuscripts that can be cross-checked. Craig Blomberg and F.F. Bruce provide the best accessible treatments of these questions." },
];

const voices = [
  { name: "C.S. Lewis", role: "Mere Christianity", quote: "I am trying here to prevent anyone saying the really foolish thing that people often say about Him: I am ready to accept Jesus as a great moral teacher, but I do not accept his claim to be God. That is the one thing we must not say. A man who was merely a man and said the sort of things Jesus said would not be a great moral teacher. He would either be a lunatic — on the level with the man who says he is a poached egg — or else he would be the Devil of Hell. You must make your choice. Either this man was, and is, the Son of God, or else a madman or something worse.", bio: "Lewis's trilemma is the most widely quoted argument in popular apologetics. Its force lies in collapsing the comfortable middle position — Jesus as merely a great teacher — by pointing out that the content of his teaching, especially his claims about himself, makes that option logically unavailable. The argument does not prove the resurrection, but it eliminates a common evasion and forces the honest inquirer to a decision." },
  { name: "William Lane Craig", role: "Reasonable Faith", quote: "The cumulative case for Christian theism — cosmological, teleological, moral, ontological, and historical arguments converging on a single hypothesis — does not require that any one argument be a proof. It requires only that the hypothesis of a personal, all-powerful, all-knowing, morally perfect God who raised Jesus from the dead is a better explanation of the full range of evidence than any naturalistic alternative. When the arguments are assessed together, the burden of proof shifts decisively.", bio: "Craig is the most influential academic Christian apologist of the last half-century. His work on the Kalam cosmological argument and the historical case for the resurrection has defined the field. His Reasonable Faith is the standard graduate-level introduction to Christian apologetics and the best single resource for engaging with the strongest contemporary objections to theism." },
  { name: "Timothy Keller", role: "The Reason for God", quote: "A significant number of the most common objections to Christianity — if you push on them seriously rather than accepting them at face value — turn out, on examination, to provide surprisingly strong support for the Christian worldview. The person who says they cannot believe in a God who sends people to hell is already assuming that some things are genuinely wrong, which is itself a theistic assumption. The best objections deserve the best answers, and the best answers often require the objector to examine the assumptions embedded in the question.", bio: "Keller's The Reason for God is the most pastorally effective work of apologetics written for a general audience in the last twenty-five years. Keller spent decades in conversation with skeptical New Yorkers and developed an approach to objections that is deeply respectful of the genuine intellectual and existential weight behind them. His contribution is the recognition that dismissing objections without examining their hidden assumptions is as intellectually dishonest as ignoring them." },
];

const practices = [
  "Reading one apologetics book per year that engages with real objections seriously rather than strawmen versions of them",
  "Developing genuine friendships with skeptics rather than treating them as apologetics targets or conversion projects",
  "Asking better questions than providing better answers in early conversations — understanding the real concern before offering a response",
  "Learning to distinguish intellectual objections from relational barriers to faith — many stated objections are not the real issue",
  "Practicing the response-before-retreat: engaging seriously with hard objections rather than deflecting or changing the subject",
];

const scriptures = [
  { verse: "1 Pet 3:15", text: "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect." },
  { verse: "1 Cor 15:14", text: "And if Christ has not been raised, our preaching is useless and so is your faith." },
  { verse: "Acts 17:22-23", text: "Paul then stood up in the meeting of the Areopagus and said: People of Athens! I see that in every way you are very religious. For as I walked around and looked carefully at your objects of worship, I even found an altar with this inscription: TO AN UNKNOWN GOD." },
  { verse: "Jude 1:3", text: "Dear friends, although I was very eager to write to you about the salvation we share, I felt compelled to write and urge you to contend for the faith that was once for all entrusted to God's holy people." },
  { verse: "Col 4:6", text: "Let your conversation be always full of grace, seasoned with salt, so that you may know how to answer everyone." },
  { verse: "2 Cor 10:5", text: "We demolish arguments and every pretension that sets itself up against the knowledge of God, and we take captive every thought to make it obedient to Christ." },
];

const videos = [
  { id: "6CulBuMyleY", title: "William Lane Craig — Does God Exist? The Cumulative Case" },
  { id: "5C_HOCPkiSc", title: "The Minimal Facts Argument for the Resurrection" },
  { id: "c_R12e6MZXQ", title: "C.S. Lewis and the Trilemma" },
  { id: "8dBGpxXaRYU", title: "Tim Keller — Answering the Problem of Evil" },
];

type APEntry = { id: string; date: string; objection: string; response: string; conversation: string };

export default function ChristianApologeticsGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<APEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_apologetics_entries") ?? "[]"); } catch { return []; }
  });
  const [jObjection, setJObjection] = useState("");
  const [jResponse, setJResponse] = useState("");
  const [jConversation, setJConversation] = useState("");

  useEffect(() => { localStorage.setItem("vine_apologetics_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jObjection.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), objection: jObjection, response: jResponse, conversation: jConversation }, ...prev]);
    setJObjection(""); setJResponse(""); setJConversation("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Faith &amp; Culture</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Apologetics</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Defending the faith with gentleness and respect — the theology behind apologetics, the strongest arguments for Christianity, and how to engage honestly with the hardest objections.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? BLUE : BORDER}`, background: tab === t.id ? BLUE + "22" : "transparent", color: tab === t.id ? BLUE : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: BLUE, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: BLUE, fontWeight: 700, fontSize: "1rem", marginTop: 2 }}>{i + 1}.</span>
                <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.65, margin: 0 }}>{p}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: BLUE, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${BLUE}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: BLUE, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Apologetics Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Record the objections you are encountering, how you are responding, and the conversations you are praying about.</p>
            {[
              { label: "Objection — an objection to Christianity you have encountered", val: jObjection, set: setJObjection },
              { label: "Response — how you responded or want to respond", val: jResponse, set: setJResponse },
              { label: "Conversation — a specific conversation you are praying about", val: jConversation, set: setJConversation },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: BLUE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: BLUE }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: BLUE, fontWeight: 600 }}>Objection:</span> {e.objection}</p>
                      {e.response && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: BLUE, fontWeight: 600 }}>Response:</span> {e.response}</p>}
                      {e.conversation && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: BLUE, fontWeight: 600 }}>Conversation:</span> {e.conversation}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: BLUE }}>{v.title}</h3>
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
