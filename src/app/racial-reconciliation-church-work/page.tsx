"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "The Vision That Cannot Be Reduced",
    verse: "Revelation 7:9",
    text: "'After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne.' John's vision of heaven is not colorblind — it is multi-ethnic. Every ethnicity present and recognizable, together before the throne. Racial reconciliation in the church is not social progress; it is an eschatological imperative.",
  },
  {
    title: "The Wall Has Been Torn Down",
    verse: "Ephesians 2:14",
    text: "'For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility.' Paul is speaking of Jew and Gentile — the most significant racial and ethnic division in his world. Christ's work is explicitly described as creating one new humanity from two formerly separated peoples. Racial division in the church contradicts the gospel.",
  },
  {
    title: "Reconciliation Has a Cost",
    verse: "Colossians 1:20",
    text: "'And through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood, shed on the cross.' The reconciliation that the gospel offers cost something. Racial reconciliation in the church also costs something — comfort, certainty, power, proximity, assumptions. This is not incidental to the work; it is its nature.",
  },
  {
    title: "The Table as Political Act",
    verse: "Galatians 2:11–12",
    text: "Paul rebuked Peter publicly for withdrawing from table fellowship with Gentile Christians under social pressure. The table — who eats together, who is welcomed — has always been a political and theological statement. Segregated worship and fellowship contradict the gospel at the table level.",
  },
  {
    title: "Lament Precedes Reconciliation",
    verse: "Amos 5:21–24",
    text: "'I hate, I despise your religious festivals... But let justice roll on like a river, righteousness like a never-failing stream!' Racial reconciliation that skips lament for injustice is premature and fragile. God's justice concern in Amos precedes celebration. The church that wants to reconcile must first be willing to lament — to grieve what has been done in God's name or with the church's silence.",
  },
];

const voices = [
  {
    id: 1,
    name: "Jemar Tisby",
    role: "Author, The Color of Compromise; Historian",
    quote: "You cannot reconcile without first being honest about what needs to be reconciled. The church's racial history demands both honesty and lament before it can support healing.",
    bio: "Jemar Tisby's historical work on American Christianity and race has become essential reading for any church serious about racial reconciliation. He is not interested in cheap reconciliation that skips the history — he insists that honesty about the past is the foundation for genuine healing.",
  },
  {
    id: 2,
    name: "Latasha Morrison",
    role: "Founder, Be the Bridge; Author",
    quote: "Racial reconciliation is not an event. It is a lifestyle of learning, lamenting, and acting in the direction of justice.",
    bio: "Latasha Morrison founded Be the Bridge to provide practical tools for churches pursuing racial reconciliation. Her approach is structured but accessible — moving people from awareness through lament to action, with Christian community as the context for the work.",
  },
  {
    id: 3,
    name: "Esau McCaulley",
    role: "Author, Reading While Black; New Testament Scholar",
    quote: "The Black church tradition has always read Scripture from the underside — from the position of those for whom the promises are most desperately needed. The whole church needs this reading.",
    bio: "Esau McCaulley's scholarship brings the Black Christian tradition's approach to Scripture into conversation with broader evangelical Christianity. His work invites white Christians to receive the interpretive gifts of traditions they have often marginalized.",
  },
  {
    id: 4,
    name: "Bryan Stevenson",
    role: "Author, Just Mercy; Equal Justice Initiative",
    quote: "Each of us is more than the worst thing we've ever done. And each community is more than the worst thing it has done — if it is willing to face it.",
    bio: "Bryan Stevenson's work on criminal justice and race, while not exclusively Christian, is deeply shaped by his faith. He speaks and writes from the conviction that proximity to the suffering of the marginalized is the beginning of any genuine work of justice or reconciliation.",
  },
];

const practices = [
  {
    icon: "📖",
    title: "Read the History You Don&apos;t Know",
    text: "Racial reconciliation begins with racial education. Read Tisby's The Color of Compromise, Robert Jones's White Too Long, or Jemar Tisby's How to Fight Racism. Read not to perform progressive credentials but to know what happened — so that your vision of the church is calibrated to reality, not myth.",
  },
  {
    icon: "🤝",
    title: "Build Genuine Cross-Racial Friendship",
    text: "Reconciliation without relationship is an abstraction. Pursue intentional friendship across racial lines — not as a project but as the slow accumulation of shared meals, honest conversation, and genuine interest. This is uncomfortable. It is also where the theology becomes embodied.",
  },
  {
    icon: "🪑",
    title: "Attend Worship Across the Color Line",
    text: "Visit and sit under the preaching of churches with traditions different from your own — particularly historically Black churches if you are white. Be a learner. Listen to what Scripture says when read through different historical and social experiences. The fullness of the gospel requires the whole church.",
  },
  {
    icon: "🔊",
    title: "Amplify Marginalized Voices in Your Church",
    text: "Who speaks in your church? Whose books are on your shelves? Whose music is sung? Who preaches? Intentionally including the voices, scholarship, and music of racially marginalized Christian communities is not tokenism if done from genuine learning — it is receiving the gifts God gave the whole church.",
  },
  {
    icon: "⚖️",
    title: "Engage Local Justice Work",
    text: "Abstract reconciliation that never touches specific injustice in your specific city is insufficient. Find one concrete justice engagement — criminal justice reform, school disparities, housing, healthcare access — and show up consistently. Presence is more powerful than position statements.",
  },
  {
    icon: "🙏",
    title: "Corporate Lament and Confession",
    text: "Gather your community for a specific time of corporate lament — for the church's historical complicity in racism, for ongoing failures. Name specific things. Don't rush to celebration. Lament is not white guilt theater — it is the church's honest reckoning with what has been done in God's name.",
  },
];

const scriptures = [
  { verse: "Revelation 7:9", text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb." },
  { verse: "Ephesians 2:14", text: "For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility." },
  { verse: "Galatians 3:28", text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus." },
  { verse: "Micah 6:8", text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God." },
  { verse: "Amos 5:24", text: "But let justice roll on like a river, righteousness like a never-failing stream!" },
  { verse: "James 2:1", text: "My brothers and sisters, believers in our glorious Lord Jesus Christ must not show favoritism." },
];

type RREntry = { id: string; date: string; learn: string; act: string; prayer: string };

export default function RacialReconciliationChurchWorkPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<RREntry[]>([]);
  const [learn, setLearn] = useState("");
  const [act, setAct] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_racialreconciliationchurchworkj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!learn.trim() && !act.trim() && !prayer.trim()) return;
    const entry: RREntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      learn: learn.trim(),
      act: act.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_racialreconciliationchurchworkj_entries", JSON.stringify(updated));
    setLearn(""); setAct(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_racialreconciliationchurchworkj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌍</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Racial Reconciliation & the Church
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For Christians and churches pursuing the multi-ethnic vision of Revelation 7 — learning
            to lament, to listen, and to build the beloved community the gospel demands.
          </p>
        </div>

        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: MUTED, fontWeight: "bold", margin: "0 0 0.5rem" }}>Resources for the journey:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            <a href="https://bethebridge.com" style={{ color: PURPLE }}>bethebridge.com</a> |{" "}
            <a href="https://www.colorofcompromise.com" style={{ color: PURPLE }}>colorofcompromise.com</a> |{" "}
            <a href="https://www.eji.org" style={{ color: PURPLE }}>eji.org (Equal Justice Initiative)</a>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : CARD, color: TEXT, cursor: "pointer", fontSize: "0.875rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.25rem" }}>{v.name}</h3>
                <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic" }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ color: TEXT, fontSize: "1rem", margin: "0 0 0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What are you learning or unlearning about race and the church?</label>
              <textarea value={learn} onChange={(e) => setLearn(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What is one concrete action you can take this week?</label>
              <textarea value={act} onChange={(e) => setAct(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for your church and for justice:</label>
              <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {entries.map((e) => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                      <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                    </div>
                    {e.learn && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Learning: </span>{e.learn}</p>}
                    {e.act && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Action: </span>{e.act}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="ZwDlGPCEUoE" title="Jemar Tisby — The Color of Compromise" />
            <VideoEmbed videoId="53RX2ESIqLM" title="Be the Bridge — Racial Reconciliation in the Church" />
            <VideoEmbed videoId="NnGBhG03g4M" title="The Multi-Ethnic Church — A Theological Vision" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for Justice, Reconciliation, and the Beloved Community" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
