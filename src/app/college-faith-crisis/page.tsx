"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Honest Doubt Is Not Apostasy",
    verse: "Mark 9:24",
    text: "I do believe; help me overcome my unbelief. The father of the demon-possessed boy said this directly to Jesus — not as a confession of weakness but as an honest cry. Jesus healed the boy anyway. The prayer 'help my unbelief' is one of the most theologically mature prayers in the Gospels. The college student whose faith is breaking down is not farther from Jesus than the student with no questions. They may be closer.",
  },
  {
    title: "Real Faith Survives Examination",
    verse: "1 Thessalonians 5:21",
    text: "Test everything; hold on to what is good. Paul is not speaking of a casual survey of options. He is speaking of rigorous examination — test everything. The faith that cannot be tested is not faith; it is cultural habit. The faith that survives testing is faith. The college student who genuinely interrogates their inherited beliefs and finds something solid on the other side has stronger faith than the one who never asked.",
  },
  {
    title: "The Intellectual Life Belongs to God",
    verse: "Colossians 2:3",
    text: "In whom are hidden all the treasures of wisdom and knowledge. Paul locates all wisdom and knowledge in Christ — not just spiritual knowledge but all knowledge. The biology professor's discovery belongs to Christ. The philosophy seminar's questions belong to Christ. The art history class's revelations belong to Christ. The student who encounters truth in any discipline is encountering something that belongs to the God they serve.",
  },
  {
    title: "The Church Has Intellectual Resources",
    verse: "Isaiah 1:18",
    text: "Come now, let us reason together, says the Lord. God invites reasoning — not faith-leap-in-the-dark trust but honest intellectual engagement. The student who thinks the church is anti-intellectual does not know the intellectual tradition: Augustine, Aquinas, Pascal, Lewis, Tolkien, O'Connor, Chesterton, Plantinga, McGrath. The tradition is deep and rich and has faced every question the university poses.",
  },
  {
    title: "The Community on the Other Side of Doubt",
    verse: "John 20:27-28",
    text: "Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe. Thomas said to him, 'My Lord and my God!' Jesus does not rebuke Thomas for the doubt. He meets him in it. The invitation — touch, see, examine — is an invitation to evidence, not to blind faith. And on the other side of that examination, Thomas makes the highest confession in the Gospel of John.",
  },
];

const voices = [
  {
    id: 1,
    name: "Francis Collins",
    role: "Geneticist, author The Language of God",
    quote: "I was an atheist who became a Christian by following the evidence. The two were never in conflict. Science reveals how; faith addresses why.",
    bio: "Francis Collins was the director of the Human Genome Project and became a Christian as a PhD student. His work on the compatibility of faith and science has helped many students navigate the perceived conflict.",
  },
  {
    id: 2,
    name: "Timothy Keller",
    role: "Author, The Reason for God",
    quote: "The college student who says 'I can't believe' is often actually saying 'I can't believe and fit in with people I respect.' Those are very different problems.",
    bio: "Timothy Keller's apologetic work specifically addresses the intellectual and social pressures on faith in secular academic environments — including the peer pressure to disbelieve that is often stronger than any intellectual argument.",
  },
  {
    id: 3,
    name: "Alister McGrath",
    role: "Theologian and scientist, author Surprised by Meaning",
    quote: "The question is not whether Christianity is intellectually defensible. It is whether you have met the people who defend it intellectually.",
    bio: "Alister McGrath holds doctorates in both molecular biophysics and theology. His work on the intellectual richness of Christian faith has helped many students discover that the perceived choice between faith and intellect is false.",
  },
  {
    id: 4,
    name: "Barbara Brown Taylor",
    role: "Author, Learning to Walk in the Dark",
    quote: "Every serious Christian goes through a dark night of the soul. The ones who come through it are the ones who did not try to go around it.",
    bio: "Barbara Brown Taylor's writing on doubt, darkness, and the spiritual life has helped many students who are experiencing the collapse of a childhood faith discover that what feels like loss may be the beginning of a more honest and durable belief.",
  },
];

const practices = [
  {
    icon: "📚",
    title: "Read the Christian Intellectual Tradition",
    text: "Before concluding that Christianity cannot survive intellectual examination, read C.S. Lewis, G.K. Chesterton, Alvin Plantinga, N.T. Wright, Francis Collins, and Alister McGrath. The faith has intellectual resources most students have never encountered. Don't reject what you don't yet know.",
  },
  {
    icon: "🤝",
    title: "Find InterVarsity, Navigators, or Campus Crusade",
    text: "Campus faith communities — InterVarsity Christian Fellowship, The Navigators, Cru, Reformed University Fellowship — provide community with other students navigating faith in an academic environment. These communities take both faith and intellectual honesty seriously.",
  },
  {
    icon: "🧑‍🏫",
    title: "Find a Christian Faculty Member",
    text: "Most universities have Christian faculty who are willing to talk with students about faith and academic life. Ask the campus chaplain or campus ministry who the Christian professors are in your department. A conversation with a faithful, intellectually serious academic can change everything.",
  },
  {
    icon: "🗣️",
    title: "Name What Is Actually Happening",
    text: "Faith crises in college are often not purely intellectual. They are also social — wanting to belong to the people around you who don't believe. And they are moral — encountering things you want to do that your faith has said are wrong. Naming the social and moral dimensions honestly is as important as the intellectual work.",
  },
  {
    icon: "📖",
    title: "Stay in the Bible During the Crisis",
    text: "The instinct during a faith crisis is to step back from all religious practice. This is understandable and sometimes necessary. But staying with the Psalms — even when you don't believe them — keeps the conversation with God open. The honest lament psalms are particularly designed for exactly this experience.",
  },
  {
    icon: "⏳",
    title: "Give the Crisis Time",
    text: "Most faith crises in college resolve — in either direction — by the mid-twenties. The student who declares that they are done with faith at nineteen is usually speaking about a particular form of their childhood faith rather than Christianity itself. Give the process time and do not make permanent decisions in acute crisis.",
  },
];

const scriptures = [
  { verse: "Mark 9:24", text: "Immediately the boy's father exclaimed, 'I do believe; help me overcome my unbelief!'" },
  { verse: "Isaiah 1:18", text: "Come now, let us reason together, says the Lord. Though your sins are like scarlet, they shall be as white as snow." },
  { verse: "1 Thessalonians 5:21", text: "Test everything; hold on to what is good." },
  { verse: "John 20:27-28", text: "Then he said to Thomas, 'Put your finger here; see my hands.' Thomas said to him, 'My Lord and my God!'" },
  { verse: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." },
  { verse: "Jeremiah 29:13", text: "You will seek me and find me when you seek me with all your heart." },
];

type CFCEntry = { id: string; date: string; question: string; found: string; prayer: string };

export default function CollegeFaithCrisisPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CFCEntry[]>([]);
  const [question, setQuestion] = useState("");
  const [found, setFound] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_collegefaithcrisisj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!question.trim()) return;
    const e: CFCEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), question, found, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_collegefaithcrisisj_entries", JSON.stringify(next));
    setQuestion(""); setFound(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_collegefaithcrisisj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: PURPLE, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>College Faith Crisis & Doubt</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For students whose faith is breaking down under academic pressure, peer influence, and honest intellectual questioning — where doubt is taken seriously and the resources of the tradition are offered.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · <a href="https://intervarsity.org" style={{ color: "#fca5a5" }}>intervarsity.org</a> · <a href="https://ruf.org" style={{ color: "#fca5a5" }}>ruf.org</a> · Text <strong>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "1.25rem" }}>Journal Entry</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What question is making faith most difficult right now?</label>
                <textarea value={question} onChange={e => setQuestion(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="The intellectual objection, the moral problem, the social pressure — name it specifically..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What have I found that still holds?</label>
                <textarea value={found} onChange={e => setFound(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Even a thread — a reason, a relationship, a moment, something solid under the doubt..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer — or the attempt at one</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="I believe; help my unbelief. Or just: I don't know what I believe. Say something..." />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Write honestly. The doubt deserves examination.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.question && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>The question</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.question}</p></>}
                {e.found && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>What holds</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.found}</p></>}
                {e.prayer && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>The Language of God — Francis Collins</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>The director of the Human Genome Project on how studying genetics led him from atheism to Christianity — and why science and faith are not in conflict.</p>
              <VideoEmbed videoId="4yRlBMcNNjY" title="The Language of God Francis Collins" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>The Reason for God — Timothy Keller</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Timothy Keller engaging the intellectual objections to Christianity that college students most commonly encounter — and offering substantive responses.</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="The Reason for God Timothy Keller" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Faith and Doubt — Alister McGrath</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Alister McGrath on the relationship between faith and doubt — why doubt is not the opposite of faith and what honest intellectual engagement with Christianity looks like.</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="Faith and Doubt Alister McGrath" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Walking Through the Dark — Barbara Brown Taylor</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Barbara Brown Taylor on why the dark night of the soul — including the collapse of childhood faith — is not the end of faith but often its beginning.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Walking Through the Dark Barbara Brown Taylor" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
