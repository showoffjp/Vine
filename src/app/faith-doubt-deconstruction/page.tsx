"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Doubt Is Not the Opposite of Faith",
    verse: "Mark 9:24",
    text: "\"Immediately the father of the child cried out and said, 'I believe; help my unbelief!'\" This father's cry — holding belief and unbelief simultaneously — is one of the most honest sentences in the Gospels. Jesus did not refuse to heal because of the man's unbelief. He healed him. Doubt and faith are not opposites; faith can include doubt. The tradition of intellectual engagement with hard questions is as old as Job and as sophisticated as Augustine, Aquinas, and Lewis."
  },
  {
    title: "The Difference Between Deconstruction and Destruction",
    verse: "1 Thessalonians 5:21",
    text: "\"Test everything; hold fast what is good.\" Deconstruction — subjecting inherited belief to honest examination — is a legitimate spiritual practice when it aims at truth. It becomes destructive when truth is abandoned as the goal, when every tradition is assumed to be false, or when the process feeds on community destruction rather than personal integrity. Testing what is true and holding fast to what is good is itself a biblical mandate."
  },
  {
    title: "The Intellectual Tradition of Christian Faith",
    verse: "Isaiah 1:18",
    text: "\"Come now, let us reason together, says the Lord.\" Christianity has always maintained that faith and reason are compatible — indeed, that rigorous thinking is an act of worship. Augustine, Aquinas, Anselm, Calvin, Edwards, Lewis, and countless others were intellectually serious people who found that careful thinking led them deeper into faith, not away from it. Doubt that drives you to serious study is not the enemy of faith."
  },
  {
    title: "Lament for What Was Lost in the Journey",
    verse: "Psalm 42:3",
    text: "\"My tears have been my food day and night, while they say to me all the day long, 'Where is your God?'\" Deconstruction often involves real loss: the loss of certainty, community, childhood faith, or a God who felt simple and safe. This loss deserves to be grieved. It is not weakness to mourn what you are leaving behind, even when you believe that what lies ahead is truer."
  },
  {
    title: "Faith That Has Been Through the Fire",
    verse: "1 Peter 1:7",
    text: "\"So that the tested genuineness of your faith — more precious than gold that perishes though it is tested by fire — may be found to result in praise and glory and honor at the revelation of Jesus Christ.\" The faith that emerges from serious doubt, honest questioning, and patient wrestling is often more durable, more honest, and more capable of holding others in their doubt than the unexamined faith of childhood. The fire is not punishment. It is refining."
  }
];

const voices = [
  {
    id: "v1", name: "Francis Collins", role: "Geneticist, Former NIH Director; Follower of Jesus",
    quote: "I found that science, taken seriously, did not lead me away from God — it led me to the foot of the cross. The heavens declare the glory of God, and the genome does too.",
    bio: "Francis Collins led the Human Genome Project and later directed the NIH. His book 'The Language of God' documents his journey from atheism to Christian faith through rigorous scientific thinking. He is a model of intellectual seriousness integrated with deep faith."
  },
  {
    id: "v2", name: "Alister McGrath", role: "Theologian and Molecular Biologist, Oxford",
    quote: "Doubt is not the enemy of faith. It is what separates faith that has been tested from faith that has never been examined. The examined faith is more robust.",
    bio: "Dr. Alister McGrath came to Christian faith through rigorous intellectual engagement after studying molecular biology. His books 'The Dawkins Delusion' and 'Mere Theology' represent serious intellectual engagement with the hardest questions raised by skepticism and science."
  },
  {
    id: "v3", name: "Barbara Brown Taylor", role: "Episcopal Priest, Author",
    quote: "The faith I have now is not the faith I was raised with. The faith I have now is harder-won, more honest, and far more capable of sitting with other people in their darkness.",
    bio: "Barbara Brown Taylor's memoir 'Leaving Church' is one of the most honest accounts of theological change from within the faith. Her subsequent work shows a faith that has survived deconstruction and emerged more textured, humble, and honest than before."
  },
  {
    id: "v4", name: "Timothy Keller", role: "Author, 'The Reason for God'; Pastor",
    quote: "If you have a faith that has no room for doubt, you have a faith that is not ready for the real world. Real faith engages the objections, takes them seriously, and finds that there is more there than the objection knew.",
    bio: "Timothy Keller spent decades in New York City engaging the intellectual objections of skeptics. His book 'The Reason for God' addresses the major intellectual challenges to Christian faith with philosophical rigor and pastoral warmth — essential reading for those in intellectual deconstruction."
  }
];

const practices = [
  {
    icon: "📚",
    title: "Read the Best Objections AND the Best Responses",
    text: "Read the most rigorous versions of the objections to Christian faith (Dawkins, Hitchens, Bart Ehrman) AND the most rigorous responses (McGrath, Wright, Plantinga, Lewis). Intellectual honesty requires engaging the best on both sides. Deconstruction that only reads the critics is not rigorously honest — it is selection bias."
  },
  {
    icon: "🏛️",
    title: "Explore the Theological Tradition",
    text: "Many Christians in deconstruction have encountered only a thin slice of Christian thought — often the particular tradition of their childhood. The vast theological tradition — Eastern Orthodoxy, Catholic mysticism, Reformed scholasticism, Anglican via media, liberation theology — contains resources for almost every objection. The question may be answered in a tradition you haven't yet explored."
  },
  {
    icon: "🧑‍🏫",
    title: "Find an Honest Guide",
    text: "A spiritual director, pastor, or theologian who has themselves been through serious doubt and come out the other side can be an irreplaceable companion. Not someone who will rush you to resolution, but someone who can model that intellectual honesty and faith can coexist."
  },
  {
    icon: "🫂",
    title: "Protect Relationships During the Journey",
    text: "Deconstruction can become socially destructive — alienating family and friends with the force of new convictions. The impulse to deconstruct publicly and immediately is often more about self-justification than about truth. Guard your most important relationships while you work through the questions."
  },
  {
    icon: "⏳",
    title: "Give the Process Time",
    text: "Serious theological questions deserve serious time. Many people who have declared faith impossible in the heat of deconstruction have found, years later, that they were working through a crisis and not reaching a final answer. Don't make permanent decisions about faith in temporary emotional states."
  },
  {
    icon: "📿",
    title: "Sustain Practices Even Without Certainty",
    text: "Many who have navigated deconstruction and arrived at a renewed faith report that sustaining minimal spiritual practices — prayer, reading scripture, attending worship — during the crisis served as a thread back. You don't have to believe fully to pray. Showing up is not hypocrisy during a crisis of faith."
  }
];

const scriptures = [
  { verse: "Mark 9:24", text: "Immediately the father of the child cried out and said, 'I believe; help my unbelief!'" },
  { verse: "1 Thessalonians 5:21", text: "Test everything; hold fast what is good." },
  { verse: "Isaiah 1:18", text: "Come now, let us reason together, says the Lord: though your sins are like scarlet, they shall be as white as snow; though they are red like crimson, they shall become like wool." },
  { verse: "Psalm 42:1-2", text: "As a deer pants for flowing streams, so pants my soul for you, O God. My soul thirsts for God, for the living God. When shall I come and appear before God?" },
  { verse: "John 20:28", text: "Thomas answered him, 'My Lord and my God!'" },
  { verse: "1 Peter 1:7", text: "So that the tested genuineness of your faith — more precious than gold that perishes though it is tested by fire — may be found to result in praise and glory and honor at the revelation of Jesus Christ." }
];

type FdEntry = { id: string; date: string; question: string; found: string; anchor: string };

export default function FaithDoubtDeconstructionPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FdEntry[]>([]);
  const [question, setQuestion] = useState("");
  const [found, setFound] = useState("");
  const [anchor, setAnchor] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_faithdoubtdeconj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!question.trim()) return;
    const entry: FdEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), question, found, anchor };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_faithdoubtdeconj_entries", JSON.stringify(updated));
    setQuestion(""); setFound(""); setAnchor("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_faithdoubtdeconj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🔍</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>Faith, Doubt &amp; Deconstruction</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            When the faith you were given no longer fits what you know, and you are trying to find out what is true without losing everything in the process.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Support:</strong> 988 Lifeline (call/text 988) &bull; Spiritual Directors International: sdicompanions.org &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`,
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: TEXT }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Doubt &amp; Discovery Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What question am I sitting with right now?</label>
                  <textarea value={question} onChange={e => setQuestion(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What have I found — in reading, thinking, praying?</label>
                  <textarea value={found} onChange={e => setFound(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I still holding onto — even imperfectly?</label>
                  <textarea value={anchor} onChange={e => setAnchor(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
                  {saved ? "Saved" : "Save Entry"}
                </button>
              </div>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.5rem" }}>{e.date}</div>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "1rem" }}>×</button>
                </div>
                {e.question && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Question:</strong> {e.question}</p>}
                {e.found && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Found:</strong> {e.found}</p>}
                {e.anchor && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}><strong>Still holding:</strong> {e.anchor}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Reason for God</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Timothy Keller on the intellectual case for Christian faith and engaging doubt seriously</p>
              <VideoEmbed videoId="4yRlBMcNNjY" title="Reason for God" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Faith and Science</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Francis Collins on the genome, evolution, and the compatibility of science and Christian faith</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="Faith and Science" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Doubt and the Christian Life</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Barbara Brown Taylor on faith that has survived the dark and become more honest for it</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Doubt and the Christian Life" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Alister McGrath: Tested Faith</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Why intellectual engagement with doubt makes faith stronger, not weaker</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Alister McGrath: Tested Faith" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
