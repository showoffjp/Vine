"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GOLD = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type CHEntry = { id: string; date: string; era: string; lesson: string; application: string };

const THEOLOGY = [
  {
    title: "The Church Is Ancient — Why History Matters",
    body: "The church of Jesus Christ is 2,000 years old. When Christians ignore this history, they impoverish themselves — repeating old errors, reinventing settled conclusions, and missing the wisdom accumulated by centuries of saints who wrestled with Scripture and life before us. G.K. Chesterton called tradition the democracy of the dead: giving a vote to those who came before us. Church history is not nostalgia but wisdom. The heresies the early church condemned still appear in fresh forms. The spiritual disciplines that formed the desert fathers still form us. The mistakes of the Reformation still warn us. Those who do not learn from the church’s history are condemned to repeat it.",
  },
  {
    title: "The Ecumenical Councils — Defending the Faith (325–787 AD)",
    body: "The seven ecumenical councils represent the church’s greatest theological achievements: at Nicaea (325) the church affirmed the full divinity of Christ against Arianism; at Ephesus (431) the full humanity and the unity of Christ’s person against Nestorianism; at Chalcedon (451) the two-nature doctrine that Christ is fully God and fully human. These were not ivory-tower debates but life-or-death struggles over the gospel: if Jesus is not fully God, he cannot save; if he is not fully human, he has not represented us. The creeds that emerged — Nicene, Chalcedonian — are the church’s hard-won gift to every subsequent generation.",
  },
  {
    title: "The Desert Fathers — Radicalism in the Wilderness (4th century)",
    body: "When Constantine legalized Christianity in 313, thousands flooded into a suddenly comfortable church. The desert fathers and mothers responded by fleeing to the Egyptian and Syrian deserts to pursue undistracted holiness. Their wisdom — collected in the Sayings of the Desert Fathers (Apophthegmata) — is deceptively practical: brief, earthy, and piercing. They developed the patterns of prayer, fasting, silence, and community that became Christian monasticism. Their questions — how do I deal with anger? how do I pray without ceasing? how do I fight despair? — are every Christian’s questions.",
  },
  {
    title: "The Reformation — Scripture, Faith, Grace (16th century)",
    body: "On October 31, 1517, Martin Luther nailed (or posted) his Ninety-Five Theses to the door of the Wittenberg Castle Church — a protest against the sale of indulgences. What began as a dispute about fundraising became the most consequential theological earthquake in 500 years. The Reformers recovered four interlocking insights (the solas): Scripture alone is the supreme authority (sola Scriptura); grace alone is the basis of salvation (sola gratia); faith alone is the instrument of justification (sola fide); Christ alone is the mediator (solus Christus); to God alone be the glory (soli Deo gloria). These recovered truths transformed not only theology but Western civilization.",
  },
  {
    title: "The Great Awakenings — Renewal in a Declining Church (18th–19th century)",
    body: "The Great Awakenings (1730s and 1800s) were sovereign movements of mass conversion and spiritual renewal that transformed American and British Christianity. Jonathan Edwards, George Whitefield, and John Wesley preached to crowds of thousands; hundreds of thousands were converted; new denominations, missionary societies, and abolition movements were born. The history of revival teaches several things: genuine renewal is sovereign (it cannot be engineered); it always involves repentance, prayer, and preaching; it typically occurs in times of spiritual declension; and it always produces fruit in social transformation as well as individual conversion.",
  },
];

const VOICES = [
  {
    name: "Philip Schaff",
    work: "History of the Christian Church",
    quote: "The history of the church is the history of the Holy Spirit’s work in the world. To understand where the church is going, we must understand where it has been — and the Spirit’s faithfulness through every era of failure and triumph.",
    bio: "Philip Schaff was a Swiss-American church historian whose 8-volume History of the Christian Church remains a standard reference work. He combined rigorous scholarship with genuine piety and ecumenical vision — believing that the study of church history should draw Christians together around the great tradition they share.",
  },
  {
    name: "Jaroslav Pelikan",
    work: "The Christian Tradition",
    quote: "Tradition is the living faith of the dead; traditionalism is the dead faith of the living. We must learn to distinguish between the two.",
    bio: "Jaroslav Pelikan was a Yale historian and one of the greatest church historians of the 20th century. His five-volume The Christian Tradition traces the development of Christian doctrine across 2,000 years with an unrivaled combination of breadth and depth. Late in life he converted from Lutheranism to Eastern Orthodoxy, having spent a lifetime studying the tradition.",
  },
  {
    name: "Justo González",
    work: "The Story of Christianity",
    quote: "The church has never been one thing. It has been a living, arguing, bleeding, praying community of people who have found in Jesus the central fact of their existence — and who have sometimes been unspeakably beautiful and sometimes unspeakably terrible in the way they have lived that out.",
    bio: "Justo González is a Cuban-American church historian whose two-volume The Story of Christianity is the most widely used introductory text in theological education. His perspective as a Latin American scholar gives his history an awareness of the global and often colonial dimensions of Christianity that purely Western accounts miss.",
  },
];

const PRACTICES = [
  "Read one primary source from church history this year: Augustine’s Confessions, Athanasius’s On the Incarnation, a selection from the Desert Fathers, or Luther’s preface to Romans.",
  "Locate your own theological tradition in the broader story of the church: What are its historical roots? What did it recover or emphasize? What did it sometimes miss?",
  "Study one heresy in depth (Arianism, Pelagianism, Gnosticism) — understanding what was rejected and why sharpens your understanding of what was affirmed.",
  "Visit a historic church or cathedral and reflect on the prayers, hymns, and liturgy shaped by centuries of Christian worship before you.",
  "Use a church history timeline (try the Visual Unit Church History Timeline) to see how your own era fits in the 2,000-year story.",
];

const SCRIPTURES = [
  { ref: "Heb 11:1–2", text: "Now faith is confidence in what we hope for and assurance about what we do not see. This is what the ancients were commended for." },
  { ref: "Rev 7:9", text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb." },
  { ref: "Eph 4:11–13", text: "So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service, so that the body of Christ may be built up until we all reach unity in the faith." },
  { ref: "1 Cor 3:11", text: "For no one can lay any foundation other than the one already laid, which is Jesus Christ." },
  { ref: "2 Tim 2:2", text: "And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others." },
  { ref: "Jude 1:3", text: "Dear friends, although I was very eager to write to you about the salvation we share, I felt compelled to write and urge you to contend for the faith that was once for all entrusted to God’s holy people." },
];

const VIDEOS = [
  { videoId: "GEBcMdMHnFY", title: "Church History in 20 Minutes — From Pentecost to the Present" },
  { videoId: "6FmOjLoG2lM", title: "The Nicene Creed: Why It Still Matters" },
  { videoId: "6j7rrMmOAeQ", title: "Martin Luther and the Reformation Explained" },
  { videoId: "V1FqdPfTGHY", title: "The Desert Fathers: Wisdom from the Wilderness" },
];

const TABS = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChurchHistoryGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CHEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_churchhist_entries") ?? "[]"); } catch { return []; }
  });
  const [jEra, setJEra] = useState("");
  const [jLesson, setJLesson] = useState("");
  const [jApplication, setJApplication] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => { localStorage.setItem("vine_churchhist_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jEra.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), era: jEra, lesson: jLesson, application: jApplication }, ...prev]);
    setJEra(""); setJLesson(""); setJApplication("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  };

  const deleteEntry = (id: string) => setEntries(prev => prev.filter(e => e.id !== id));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        {/* breadcrumb */}
        <div style={{ fontSize: 12, color: MUTED, marginBottom: 16, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
          Faith &amp; Doctrine
        </div>

        <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 10, color: TEXT }}>Church History Guide</h1>
        <p style={{ color: MUTED, fontSize: 16, marginBottom: 32, lineHeight: 1.7, maxWidth: 640 }}>
          A guide to church history — the major eras, figures, councils, movements, and what Christians today can learn from 2,000 years of the church.
        </p>

        {/* tab bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                flex: 1,
                minWidth: 80,
                padding: "10px 8px",
                borderRadius: 8,
                border: "none",
                background: tab === t.id ? GOLD : "transparent",
                color: tab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* theology tab */}
        {tab === "theology" && (
          <div>
            {THEOLOGY.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, marginBottom: 12, marginTop: 0 }}>{item.title}</h3>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* practices tab */}
        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Church history is not only for scholars. These {PRACTICES.length} practices help any Christian root their faith in the 2,000-year story of the church.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ background: GOLD, color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.7, margin: 0 }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* voices tab */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {VOICES.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: GOLD, fontWeight: 900, fontSize: 20 }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: 14, marginLeft: 10 }}>{v.work}</span>
                </div>
                <blockquote style={{ margin: "0 0 16px", padding: "12px 16px", borderLeft: `3px solid ${GOLD}`, background: `${GOLD}0d`, borderRadius: "0 8px 8px 0" }}>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{v.quote}&rdquo;</p>
                </blockquote>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {/* scripture tab */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {SCRIPTURES.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: GOLD, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>{s.ref}</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {/* journal tab */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, marginTop: 0 }}>My Church History Journal</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>Record what you are learning from the story of the church. Saved privately in your browser.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>Which era or figure are you studying?</label>
                <textarea
                  value={jEra}
                  onChange={e => setJEra(e.target.value)}
                  placeholder="Early Church, Desert Fathers, Reformation, Great Awakening..."
                  rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
                />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>What lesson stands out to you?</label>
                <textarea
                  value={jLesson}
                  onChange={e => setJLesson(e.target.value)}
                  placeholder="The insight or truth from this era that strikes you..."
                  rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
                />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>How does this apply to your life or church today?</label>
                <textarea
                  value={jApplication}
                  onChange={e => setJApplication(e.target.value)}
                  placeholder="What this changes in your theology, practice, or perspective..."
                  rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
                />
              </div>
              <button
                type="button"
                onClick={saveEntry}
                style={{ background: GOLD, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
              >
                {saved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button
                        type="button"
                        onClick={() => deleteEntry(e.id)}
                        style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}
                      >&times;</button>
                    </div>
                    {e.era && <div style={{ marginBottom: 8 }}><span style={{ color: GOLD, fontSize: 12, fontWeight: 700 }}>ERA / FIGURE </span><span style={{ color: TEXT, fontSize: 14 }}>{e.era}</span></div>}
                    {e.lesson && <div style={{ marginBottom: 8 }}><span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>LESSON </span><span style={{ color: TEXT, fontSize: 14 }}>{e.lesson}</span></div>}
                    {e.application && <div><span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>APPLICATION </span><span style={{ color: TEXT, fontSize: 14 }}>{e.application}</span></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* videos tab */}
        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 8, marginTop: 0 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Lectures and teachings on church history, the councils, the Reformation, and the spiritual tradition of the desert fathers.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {VIDEOS.map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GOLD, fontWeight: 700, fontSize: 16, marginBottom: 4, marginTop: 0 }}>{v.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
