"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Desert Is a Biblical Place",
    verse: "Psalm 22:1-2",
    text: "\"My God, my God, why have you forsaken me? Why are you so far from saving me?\" Jesus himself quoted this cry from the cross. The dark night of the soul is not a spiritual aberration — it is woven through scripture from Elijah under the broom tree to Job's silence from heaven, from the Psalmist's midnight weeping to John of the Cross writing from a prison cell. If God feels absent, you are in very good biblical company."
  },
  {
    title: "Absence Is Not Abandonment",
    verse: "Isaiah 45:15",
    text: "\"Truly you are a God who hides himself, O God of Israel, the Savior.\" God's hiddenness is not God's absence. Throughout scripture, God conceals himself — in darkness, in cloud, in silence — as part of how he moves and forms his people. The dark night often deepens the very rootedness it feels like it destroys. What feels like spiritual drought may be the thinning of a superficial faith that cannot hold what is real."
  },
  {
    title: "The Stripping of False Gods",
    verse: "Hosea 2:14",
    text: "\"Therefore, behold, I will allure her, and bring her into the wilderness, and speak tenderly to her.\" John of the Cross understood the dark night as God purging the soul of attachments — including attachments to spiritual feelings, consolations, certainty, and even images of God that are too small. The stripping is painful because it removes what we have clung to. But what is removed was never the real thing."
  },
  {
    title: "Faithfulness in the Dark",
    verse: "Job 13:15",
    text: "\"Though he slay me, I will hope in him.\" One of the most counter-intuitive truths of the dark night: continuing to show up — to pray without feeling heard, to read without comfort, to attend church without devotion — is not hypocrisy. It is the most faithful act possible. Love that persists without reward is the purest love. You are more spiritually mature in your darkness than you know."
  },
  {
    title: "The Other Side of the Night",
    verse: "Psalm 30:5",
    text: "\"Weeping may tarry for the night, but joy comes with the morning.\" The dark night is not permanent. Every mystic who has written about it has also written about the dawn — a return of consolation, often deeper and more rooted than before. This is not a guarantee of timing. But it is the universal testimony: those who endure the night do not stay in it forever. God is not finished with you."
  }
];

const voices = [
  {
    id: "v1", name: "John of the Cross", role: "16th-Century Mystic, Doctor of the Church",
    quote: "The dark night of the soul is God's best gift — the purgation of all that keeps the soul from union with God. Do not flee it. Endure, and be made.",
    bio: "John of the Cross, a Spanish Carmelite friar writing in the 1570s–80s, is the most systematic theologian of the dark night. His 'Dark Night of the Soul' describes two phases: the night of the senses (loss of spiritual consolation) and the night of the spirit (deeper desolation). He is essential reading for anyone in extended spiritual darkness."
  },
  {
    id: "v2", name: "Gerald May", role: "Psychiatrist and Contemplative",
    quote: "The dark night is not a problem to be solved but a process to be experienced. The soul is being purified of its addictions — including addiction to spiritual comfort.",
    bio: "Gerald May was a psychiatrist and spiritual director who wrote 'The Dark Night of the Soul' (2004), a contemporary guide to John of the Cross accessible to modern readers. He integrates psychology and spirituality with pastoral warmth, helping readers distinguish depression from the dark night (while acknowledging they can overlap)."
  },
  {
    id: "v3", name: "Barbara Brown Taylor", role: "Episcopal Priest, Author",
    quote: "Learning to walk in the dark is not failure. It may be the most important spiritual skill you ever develop. God is in the darkness too.",
    bio: "Barbara Brown Taylor's 'Learning to Walk in the Dark' (2014) is a beautiful, contemporary exploration of how darkness — spiritual, emotional, literal — can teach what light cannot. She writes as someone who has been through the desert and found it a place of formation rather than destruction."
  },
  {
    id: "v4", name: "Henri Nouwen", role: "Catholic Priest, Spiritual Writer",
    quote: "When we honestly ask ourselves which person in our lives means the most to us, we often find it is those who, instead of giving advice, shared our pain and touched our wounds with warm and tender hands.",
    bio: "Henri Nouwen's own experience of severe depression and spiritual darkness informs nearly all his writing. 'The Inner Voice of Love' was written during his most severe breakdown and published only after his death — a raw spiritual journal of the dark night from inside it."
  }
];

const practices = [
  {
    icon: "📖",
    title: "Read the Mystics — Especially John of the Cross",
    text: "John of the Cross, Teresa of Avila, Julian of Norwich, Meister Eckhart, Thomas Merton — these writers have been in the dark and write with maps. You are not alone in this experience. Reading those who have gone before and returned is one of the most sustaining things you can do."
  },
  {
    icon: "🕯️",
    title: "Minimal Faith Practice Without Expectation",
    text: "Reduce spiritual practice to its barest form. A single candle. One psalm. Five minutes. The goal is presence without expectation of consolation. You are not trying to feel better. You are staying. This is the discipline of the dark night: to show up without reward."
  },
  {
    icon: "🧠",
    title: "Rule Out Depression",
    text: "The dark night and clinical depression can coexist. A therapist familiar with contemplative spirituality can help distinguish spiritual desolation from medical depression — and help treat both simultaneously. There is no spirituality in refusing antidepressants when your brain needs support."
  },
  {
    icon: "🫂",
    title: "Find a Spiritual Director",
    text: "A spiritual director — someone trained in the Ignatian tradition, the Carmelite tradition, or contemplative direction — can be an irreplaceable companion in the dark night. They will not fix you. They will sit with you and help you discern what is happening. Find one through Spiritual Directors International (sdicompanions.org)."
  },
  {
    icon: "📓",
    title: "Write Without Editing",
    text: "Raw journaling during the dark night serves a different function than devotional writing. Write what you actually feel — including anger, doubt, numbness, fear. The Psalms are full of this. You are allowed to be honest with God. The Psalms model lament as an act of faith, not faithlessness."
  },
  {
    icon: "⏳",
    title: "Do Not Manufacture the End",
    text: "One of the greatest temptations in the dark night is to perform spiritual breakthrough to escape the discomfort. Resist it. The authentic end of the dark night is not something you produce — it arrives. Patience is not passivity; it is the active, trusting endurance of what you cannot control."
  }
];

const scriptures = [
  { verse: "Psalm 22:1-2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? I cry out by day, but you do not answer; by night, but I find no rest." },
  { verse: "Isaiah 45:15", text: "Truly you are a God who hides himself, O God of Israel, the Savior." },
  { verse: "Job 13:15", text: "Though he slay me, I will hope in him; yet I will argue my ways to his face." },
  { verse: "Psalm 30:5", text: "For his anger is but for a moment, and his favor is for a lifetime. Weeping may tarry for the night, but joy comes with the morning." },
  { verse: "Lamentations 3:1-3", text: "I am the man who has seen affliction under the rod of his wrath; he has driven and brought me into darkness without any light; surely against me he turns his hand again and again the whole day long." },
  { verse: "Hosea 2:14", text: "Therefore, behold, I will allure her, and bring her into the wilderness, and speak tenderly to her." }
];

type DnEntry = { id: string; date: string; feels: string; act: string; hold: string };

export default function DarkNightSoulFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DnEntry[]>([]);
  const [feels, setFeels] = useState("");
  const [act, setAct] = useState("");
  const [hold, setHold] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_darknightsoulj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!feels.trim()) return;
    const entry: DnEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feels, act, hold };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_darknightsoulj_entries", JSON.stringify(updated));
    setFeels(""); setAct(""); setHold("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_darknightsoulj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌑</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>Dark Night of the Soul</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            When God feels absent, prayer feels like talking to the ceiling, and the faith that once sustained you has gone silent. You are not abandoned — you are in a very old and very sacred place.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Support:</strong> 988 Suicide &amp; Crisis Lifeline (call/text 988) &bull; Spiritual Directors International: sdicompanions.org &bull; Crisis Text Line: text HOME to 741741
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
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Desert Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What does God's silence feel like right now?</label>
                  <textarea value={feels} onChange={e => setFeels(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What act of faithfulness am I still doing, even in the dark?</label>
                  <textarea value={act} onChange={e => setAct(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What one truth can I hold even when I cannot feel it?</label>
                  <textarea value={hold} onChange={e => setHold(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
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
                {e.feels && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Silence feels like:</strong> {e.feels}</p>}
                {e.act && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Still doing:</strong> {e.act}</p>}
                {e.hold && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}><strong>Holding:</strong> {e.hold}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Learning to Walk in the Dark</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Barbara Brown Taylor on spiritual darkness as formation, not failure</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Learning to Walk in the Dark" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>The Dark Night of the Soul Explained</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Introduction to John of the Cross and the stages of spiritual desolation</p>
              <VideoEmbed videoId="4Eg_di-O8nM" title="The Dark Night of the Soul Explained" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>When God Feels Absent</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Henri Nouwen on the spirituality of the desert and God's hiddenness</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="When God Feels Absent" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Lament as Spiritual Discipline</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Why honest lament is an act of faith, not faithlessness</p>
              <VideoEmbed videoId="oNpTha80yyE" title="Lament as Spiritual Discipline" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
