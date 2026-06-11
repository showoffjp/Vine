"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GOLD = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type FTEntry = { id: string; date: string; intention: string; obstacle: string; encounter: string };

const THEOLOGY = [
  {
    id: "th1",
    title: "Fasting Is Assumed, Not Optional (Matt 6:16-17)",
    content: "When you fast — not if. Jesus assumes his disciples will fast, just as he assumes they will pray and give. He gives no command to fast, only instructions for how: in secret, not for show. The assumption that fasting is normal Christian practice was universal in the early church and most of Christian history. Its absence in contemporary Western Christianity is not a sign of maturity but of the comfort and affluence that have made us feel no urgent need to seek God through bodily deprivation.",
  },
  {
    id: "th2",
    title: "Fasting Humbles the Soul Before God (Ps 35:13)",
    content: "I put on sackcloth and humbled myself with fasting. The primary purpose of fasting in Scripture is not weight loss or self-discipline but the humbling of the soul before God — an embodied posture of dependence, need, and seeking. When the body is hungry, the soul is made to feel its own hunger. Fasting strips away the comfortable buffers between us and God and creates a kind of urgent seeking that abundance tends to crowd out. It is the body&apos;s way of saying: I need God more than I need food.",
  },
  {
    id: "th3",
    title: "Fasting and Prayer Are Partners (Acts 13:2-3)",
    content: "While they were worshiping the Lord and fasting, the Holy Spirit said, &ldquo;Set apart for me Barnabas and Saul.&rdquo; The early church combined fasting with prayer for major decisions, commissioning, and spiritual breakthrough. Fasting intensifies prayer not by making our prayers more meritorious but by giving the whole person — body and soul — to seeking God. The hunger is a physical reminder to pray; the prayer gives the hunger its meaning. Fasting without prayer is just dieting; prayer on a full stomach lacks the urgency that hunger creates.",
  },
  {
    id: "th4",
    title: "Jesus Fasted — the Model (Matt 4:2)",
    content: "After fasting forty days and forty nights, he was hungry. Jesus fasted at the beginning of his public ministry, facing the devil&apos;s temptations from a position of bodily weakness and spiritual strength. His fasting was not a technique for gaining power but a practice of radical dependence on the Father. The desert fathers saw Jesus&apos;s wilderness fast as the model: not the heroics of an extraordinary ascetic but the ordinary surrender of a son who lives by every word that comes from the mouth of God.",
  },
  {
    id: "th5",
    title: "Breaking the Fast — the Feast as Eschatological Sign",
    content: "Fasting always ends in feasting. The biblical pattern of fasting moves toward celebration: the Yom Kippur fast ends in joy; the fast of mourning ends when the mourning is satisfied; Jesus himself fasted but came to his public ministry eating and drinking, celebrating the arrival of the kingdom. This eschatological pattern is important: fasting is not the goal but the path; it is not permanent renunciation but temporary abstinence in service of deeper hunger. The fasting Christian is the one who knows that the feast is coming.",
  },
];

const PRACTICES = [
  "Begin with a partial fast (skipping one meal, fasting until noon) before attempting extended fasts — building the spiritual and physical habit gradually.",
  "Fast with a specific intention: bring a named prayer before God, a decision that needs clarity, a grief that needs expression, or a sin pattern that needs breaking.",
  "Keep a fasting journal: record what comes to the surface emotionally and spiritually when food is removed — what the hunger reveals about what you are actually depending on.",
  "Practice communal fasting with your small group or church — fasting together for a shared concern, with shared prayer, magnifies both the burden and the seeking.",
  "Read Matthew 6:16-18 before each fast as a reminder: the audience is God alone; fasting is not performance but secret communion.",
];

const VOICES = [
  {
    author: "Richard Foster",
    book: "Celebration of Discipline",
    quote: "Fasting reveals the things that control us. This is a wonderful benefit to the soul-hungry saint. We cover up what is inside us with food and other pleasures. Fasting brings things to the surface.",
    bio: "Richard Foster&apos;s Celebration of Discipline is the foundational modern text on the spiritual disciplines. His chapter on fasting did more to recover the practice for Protestant evangelicals than any other single text — presenting fasting not as legalism but as a joyful tool for deeper communion with God.",
  },
  {
    author: "John Piper",
    book: "A Hunger for God",
    quote: "The greatest enemy of hunger for God is not poison but apple pie. It is not the banquet of the wicked that dulls our appetite for heaven, but the endless trivial preoccupations that we pursue.",
    bio: "John Piper&apos;s A Hunger for God is a sustained biblical and theological treatment of fasting as the expression of hunger for God that transcends appetite for creation. Piper recovers the eschatological dimension of fasting — the idea that Christians fast because the Bridegroom is away and fasting is the natural posture of those who ache for his return.",
  },
  {
    author: "Scot McKnight",
    book: "Fasting",
    quote: "Fasting, in the Bible, is the natural, inevitable response of a person to a grievous sacred moment. It is not a spiritual technique for losing weight, gaining power, or manipulating God. It is what the body does when the soul has been struck with something overwhelming.",
    bio: "Scot McKnight is a New Testament scholar whose short book Fasting is the most exegetically rigorous modern treatment of the biblical data on fasting. His finding: the primary biblical context for fasting is response to a grievous sacred moment — not a technique to be deployed but a natural bodily response to profound spiritual reality.",
  },
];

const SCRIPTURES = [
  { ref: "Matt 6:16-17", text: "When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting. Truly I tell you, they have received their reward in full. But when you fast, put oil on your head and wash your face." },
  { ref: "Acts 13:2-3", text: "While they were worshiping the Lord and fasting, the Holy Spirit said, Set apart for me Barnabas and Saul for the work to which I have called them. So after they had fasted and prayed, they placed their hands on them and sent them off." },
  { ref: "Isa 58:6-7", text: "Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke? Is it not to share your food with the hungry and to provide the poor wanderer with shelter?" },
  { ref: "Joel 2:12", text: "Even now, declares the Lord, return to me with all your heart, with fasting and weeping and mourning." },
  { ref: "Matt 4:2", text: "After fasting forty days and forty nights, he was hungry." },
  { ref: "Ps 35:13", text: "I put on sackcloth and humbled myself with fasting. When my prayers returned to me unanswered." },
];

const VIDEOS = [
  { videoId: "S1mAa0B26Ks", title: "What Is Fasting and Why Should Christians Fast?" },
  { videoId: "4YKWIjbAnVc", title: "John Piper: A Hunger for God — Fasting and Prayer" },
  { videoId: "JjKJJHqvWuA", title: "How to Fast: A Practical Guide for Christians" },
  { videoId: "yN9yMHuJGNs", title: "The Discipline of Fasting — Richard Foster on Spiritual Disciplines" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianFastingPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FTEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_fasting_entries") ?? "[]"); } catch { return []; }
  });
  const [jIntention, setJIntention] = useState("");
  const [jObstacle, setJObstacle] = useState("");
  const [jEncounter, setJEncounter] = useState("");
  const [openTheol, setOpenTheol] = useState("");

  useEffect(() => { localStorage.setItem("vine_fasting_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jIntention.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), intention: jIntention, obstacle: jObstacle, encounter: jEncounter }, ...prev]);
    setJIntention(""); setJObstacle(""); setJEncounter("");
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: 6 }}>
          <span style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Spiritual Formation</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.5rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "0.75rem" }}>
          Christian Fasting
        </h1>

        <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "2rem", maxWidth: 660 }}>
          What is fasting, why does it matter, and how do Christians fast faithfully? This guide covers biblical foundations, historical examples, key voices on the practice, and a journal for your own fasting journey.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? GOLD : "transparent",
                color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? GOLD : BORDER}`,
                cursor: "pointer", transition: "all .18s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem", color: GOLD }}>A Biblical Theology of Fasting</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Five theological foundations for understanding Christian fasting — from Jesus&apos;s assumption that his followers will fast to the eschatological feast that fasting anticipates.
            </p>
            {THEOLOGY.map((item) => {
              const isOpen = openTheol === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${isOpen ? GOLD + "40" : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                  <button type="button" onClick={() => setOpenTheol(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: isOpen ? `${GOLD}0D` : "none", border: "none", color: TEXT, padding: "1rem 1.25rem", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: GOLD, fontSize: 18, flexShrink: 0 }}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 1.25rem 1.25rem", color: MUTED, lineHeight: 1.75 }}>{item.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem", color: GOLD }}>How to Fast</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Five practical approaches to building and sustaining a fasting practice rooted in genuine hunger for God.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {PRACTICES.map((practice, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem 1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ background: GOLD, color: "#fff", fontWeight: 700, minWidth: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>{i + 1}</span>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{practice}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem", color: GOLD }}>Voices on Fasting</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Three writers who have done the most to recover and explain the practice of fasting for contemporary Christians.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {VOICES.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                  <div style={{ marginBottom: "0.75rem" }}>
                    <span style={{ fontWeight: 800, color: TEXT }}>{v.author}</span>
                    <span style={{ color: MUTED, fontSize: "0.9rem" }}> &mdash; </span>
                    <span style={{ color: GOLD, fontSize: "0.9rem", fontStyle: "italic" }}>{v.book}</span>
                  </div>
                  <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem", margin: "0 0 1rem", color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>
                    &ldquo;{v.quote}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem", margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem", color: GOLD }}>Key Scriptures</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Six passages that define, motivate, and shape the Christian practice of fasting.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {SCRIPTURES.map((s) => (
                <div key={s.ref} style={{ background: CARD, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${GOLD}` }}>
                  <span style={{ fontWeight: 800, color: GOLD, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>{s.ref}</span>
                  <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem", color: GOLD }}>Fasting Journal</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Record your fasting intentions, the obstacles you encounter, and what God meets you with when you fast.
            </p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: GOLD, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Intention for this fast</label>
                <textarea value={jIntention} onChange={e => setJIntention(e.target.value)}
                  placeholder="What are you bringing before God? What are you seeking?"
                  style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box", outline: "none" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: GOLD, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Obstacle or difficulty you faced</label>
                <textarea value={jObstacle} onChange={e => setJObstacle(e.target.value)}
                  placeholder="What made this fast hard? What did the hunger reveal?"
                  style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box", outline: "none" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: GOLD, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What you encountered with God</label>
                <textarea value={jEncounter} onChange={e => setJEncounter(e.target.value)}
                  placeholder="What did God show you, give you, or speak to you during this fast?"
                  style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box", outline: "none" }} />
              </div>
              <button type="button" onClick={saveEntry}
                style={{ background: GOLD, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>
                Save Entry
              </button>
            </div>

            {entries.length > 0 && (
              <div>
                <h3 style={{ fontWeight: 800, marginBottom: "0.75rem", color: MUTED, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: 1 }}>Past Entries</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {entries.map((entry) => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.25rem" }}>
                      <span style={{ color: GOLD, fontSize: "0.8rem", fontWeight: 700 }}>{entry.date}</span>
                      {entry.intention && <p style={{ color: TEXT, margin: "0.4rem 0 0.2rem", fontSize: "0.9rem" }}><strong>Intention:</strong> {entry.intention}</p>}
                      {entry.obstacle && <p style={{ color: MUTED, margin: "0.2rem 0", fontSize: "0.9rem" }}><strong>Obstacle:</strong> {entry.obstacle}</p>}
                      {entry.encounter && <p style={{ color: MUTED, margin: "0.2rem 0 0", fontSize: "0.9rem" }}><strong>Encounter:</strong> {entry.encounter}</p>}
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
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem", color: GOLD }}>Video Teaching</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
