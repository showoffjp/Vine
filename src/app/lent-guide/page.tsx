"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type LTEntry = { id: string; date: string; surrender: string; practice: string; encounter: string };

const theology = [
  { title: "What Lent Is and Why Most Protestants Have Abandoned It (and Should Not Have)", verse: "Luke 4:1-2", text: "The 40-day period before Easter mirrors Jesus's 40 days in the wilderness — a season of self-examination, repentance, fasting, and simplicity in preparation for the celebration of resurrection. Most Protestant traditions abandoned Lent at the Reformation as too Roman, but the spiritual logic of the season is thoroughly biblical. Recovering Lent is not about tradition for its own sake but about regaining a season of intentional preparation that the church has been impoverished without. The question is not whether the season is ancient but whether the soul needs it — and the answer to that question is plainly yes." },
  { title: "Ash Wednesday and Mortality — You Are Dust", verse: "Gen 3:19", text: "You are dust, and to dust you shall return. The imposition of ashes is the most searingly honest ritual in the Christian calendar. Beginning the season with a reminder of mortality creates the conditions for genuine repentance, because the fear of death is one of the deepest drivers of sin (Hebrews 2:15). Confronting mortality clears away the self-deception that keeps us from examining our lives honestly. The person who knows they will die cannot pretend forever that their patterns do not matter, that there is plenty of time, that they will change later. Ash Wednesday removes that pretense with a cross drawn in ash on the forehead." },
  { title: "Fasting — the Most Neglected Discipline", verse: "Matt 6:16-18", text: "When you fast, not if you fast — Jesus assumes his followers will fast. The purpose of Lenten fasting is not dietary achievement but the creation of hunger: physical hunger that mirrors the spiritual hunger the soul should have for God. What fasting actually does is clarify. It surfaces what we depend on besides God. It creates space for prayer that busyness and consumption fill. It breaks habitual patterns that have become invisible through repetition. The person who has fasted regularly knows things about themselves that the person who has never gone without does not know." },
  { title: "Self-Examination — What the Desert Fathers Knew About the Soul", verse: "Lam 3:40", text: "Let us test and examine our ways, and return to the Lord. The Desert Fathers developed the practice of daily examination centuries before Ignatius formalized it in the Examen. Lent extends this into a season-long examination. The traditional seven areas — pride, greed, lust, envy, gluttony, wrath, sloth — are not primarily a guilt exercise but a diagnostic: a way of identifying where the soul most needs grace. The Desert Fathers understood that self-knowledge is the prerequisite for genuine encounter with God, because the self-deceived person is always relating to a god of their own construction rather than to the God who is." },
  { title: "From Ashes to Alleluia — Why the Length of Lent Matters", verse: "Ps 51:10-12", text: "Create in me a pure heart, O God, and renew a steadfast spirit within me. The 40-day arc is not arbitrary. The soul does not change quickly. Lent teaches patience with the slow work of transformation. The length creates the conditions for genuine encounter rather than surface-level aspiration — a week is not enough to penetrate the defenses we have spent years constructing. Easter is meaningless without Lent, just as resurrection is meaningless without death. The joy of Easter Sunday is proportional to the depth of Lenten self-examination. The church that has fasted together finds that the first Alleluia of Easter morning lands differently." },
];

const voices = [
  { name: "Marjorie Thompson", role: "Soul Feast", quote: "Lent is the church's annual invitation to deep self-knowledge — and to the grace that meets us when we are honest about what we find there. The season does not ask us to be harsh with ourselves. It asks us to be honest. And it promises that the God who meets us in that honesty is not the God of condemnation but the God of resurrection — the one who specializes in making alive what was dead.", bio: "Marjorie Thompson's Soul Feast is among the most accessible and theologically grounded introductions to the classical spiritual disciplines in print. Her treatment of Lent situates self-examination not as a morbid exercise in self-laceration but as an act of hope — a turning toward the God who transforms what we bring to him. Her work has shaped how a generation of Protestant Christians has begun to recover the liturgical calendar." },
  { name: "Barbara Brown Taylor", role: "Learning to Walk in the Dark", quote: "The church has spent a great deal of energy being afraid of the dark — afraid of suffering, doubt, silence, and the long seasons when God seems absent. Lent is the season that refuses that fear. It walks deliberately into the darkness, not because the darkness is good, but because the God who raised Jesus from the dead is Lord of the darkness too. The church that has learned to walk in the dark is the church that knows what it is celebrating on Easter morning.", bio: "Barbara Brown Taylor's Learning to Walk in the Dark argues against what she calls full-solar spirituality — the church's preference for light, certainty, and unambiguous triumph — and makes a case for the spiritual wisdom that can only be found in darkness, difficulty, and the seasons of God's apparent absence. Her work provides a compelling theological rationale for why Lent is not an optional extra but a necessary school in what the Christian life actually involves." },
  { name: "Thomas Merton", role: "New Seeds of Contemplation", quote: "The false self is the self we have constructed to protect ourselves from being known — by others and by God. It is the persona, the performance, the carefully maintained image. Lent is a sustained assault on this construction. The fasting, the silence, the self-examination, the prayer — all of it is aimed at creating conditions in which the false self cannot maintain itself, and the true self, the self known and loved by God, can begin to emerge.", bio: "Thomas Merton's New Seeds of Contemplation is a sustained meditation on the distinction between the true self and the false self — a distinction he draws from the Christian mystical tradition and articulates with psychological precision. His influence on how contemporary Christians think about spiritual formation has been enormous. His framing of Lent as a sustained attack on self-construction provides a conceptual architecture that makes sense of what the season's practices are actually for." },
];

const practices = [
  { icon: "🍞", title: "A Lenten Fast", text: "Choose what to give up with intention and purpose: food, media, social media, alcohol, or some other pattern that has become a substitute for the deeper nourishment only God provides. The choice matters — the fast should surface genuine hunger, not simply be inconvenient. The goal is not the achievement of the fast itself but what the fast makes visible: what you reach for when you are anxious, bored, lonely, or afraid. That inventory is the beginning of self-knowledge." },
  { icon: "🙏", title: "Daily Examen Prayer", text: "The Ignatian examination of conscience is a 10-minute evening prayer practice: in five movements, it invites gratitude for the day, awareness of God's presence in it, review of the day's moments for both consolation and desolation, honest naming of where you fell short, and forward-looking hope for tomorrow. Practiced daily across 40 days, it produces a level of self-knowledge that sporadic reflection cannot." },
  { icon: "📖", title: "Reading Through a Gospel in 40 Days", text: "Reading one of the four Gospels in 40 days alongside the Lenten season — roughly two to four chapters per day — places the story of Jesus's life in parallel with the season that prepares us for its culmination. Reading Luke from Ash Wednesday to Holy Saturday means arriving at the passion and resurrection narratives having spent six weeks in intimate contact with the one who is crucified and raised." },
  { icon: "🗣️", title: "A Confession Practice", text: "For traditions with formal confession, Lent is the traditional season for its most intentional practice. For traditions without a formal rite, spoken confession to a trusted pastor or friend serves a similar function: the act of naming sin aloud to another person, and receiving assurance of forgiveness, has a different weight than private confession. The specificity and the witness both matter. Lent invites us not to confess generically but to name what we have actually done and left undone." },
  { icon: "🤝", title: "Adding a Specific Act of Service", text: "In place of what is given up, add a specific act of service: volunteer a regular time at a food pantry, commit to visiting a homebound neighbor weekly, redirect the money saved by fasting toward a specific need. The addition creates an outward movement that balances Lent's inward examination. Self-examination without service can collapse into navel-gazing; service alongside self-examination gives the season both depth and direction." },
];

const scriptures = [
  { verse: "Matt 6:16-18", text: "When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting. Truly I tell you, they have received their reward in full." },
  { verse: "Lam 3:40", text: "Let us examine our ways and test them, and let us return to the Lord." },
  { verse: "Ps 51:10-12", text: "Create in me a pure heart, O God, and renew a steadfast spirit within me. Do not cast me from your presence or take your Holy Spirit from me. Restore to me the joy of your salvation and grant me a willing spirit, to sustain me." },
  { verse: "Joel 2:12-13", text: "Even now, declares the Lord, return to me with all your heart, with fasting and weeping and mourning. Rend your heart and not your garments. Return to the Lord your God, for he is gracious and compassionate, slow to anger and abounding in love." },
  { verse: "Gen 3:19", text: "By the sweat of your brow you will eat your food until you return to the ground, since from it you were taken; for dust you are and to dust you will return." },
  { verse: "Luke 4:1-2", text: "Jesus, full of the Holy Spirit, left the Jordan and was led by the Spirit into the wilderness, where for forty days he was tempted by the devil." },
];

const videos = [
  { id: "t7dKBh5lcQI", title: "What Is Lent? A Theological Introduction" },
  { id: "NKZ0zp4KM6g", title: "Ash Wednesday and the Practice of Mortality" },
  { id: "yO1LYWBcNg4", title: "Fasting: The Discipline the Church Forgot" },
  { id: "L0kNRZhGMZI", title: "From Ashes to Alleluia: The Arc of Lent" },
];

export default function LentGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<LTEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_lent_entries") ?? "[]"); } catch { return []; }
  });
  const [jSurrender, setJSurrender] = useState("");
  const [jPractice, setJPractice] = useState("");
  const [jEncounter, setJEncounter] = useState("");

  useEffect(() => { localStorage.setItem("vine_lent_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jSurrender.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), surrender: jSurrender, practice: jPractice, encounter: jEncounter }, ...prev]);
    setJSurrender(""); setJPractice(""); setJEncounter("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Seasons &amp; Practices</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Lent Guide</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Lent is 40 days of repentance, self-examination, and preparation for resurrection — the season in which the church learns to die so it can be raised. You cannot arrive at Easter honestly without it.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? PURPLE : BORDER}`, background: tab === t.id ? PURPLE + "22" : "transparent", color: tab === t.id ? PURPLE : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: PURPLE, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: PURPLE, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Lenten Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to track your Lenten journey honestly and prayerfully.</p>
            {[
              { label: "Surrender — something you are giving up or surrendering this Lent", val: jSurrender, set: setJSurrender },
              { label: "Practice — your Lenten discipline", val: jPractice, set: setJPractice },
              { label: "Encounter — a moment this season when you sensed God near", val: jEncounter, set: setJEncounter },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: PURPLE }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: PURPLE, fontWeight: 600 }}>Surrender:</span> {e.surrender}</p>
                      {e.practice && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: PURPLE, fontWeight: 600 }}>Practice:</span> {e.practice}</p>}
                      {e.encounter && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: PURPLE, fontWeight: 600 }}>Encounter:</span> {e.encounter}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: PURPLE }}>{v.title}</h3>
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
