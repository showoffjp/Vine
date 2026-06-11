"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", AMBER = "#F59E0B", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Matthew 6: Prayer and Fasting Are Not to Be Seen", verse: "Matt 6:16-18", text: "Jesus assumes his disciples will fast — 'When you fast,' not 'if you fast.' But he is unsparing about the motive that corrupts the practice: the desire to be seen. The Pharisees disfigure their faces so that their fasting is visible to others, making spiritual discipline a performance for human approval. Jesus directs both prayer and fasting into the hidden place — the room with the door shut, the washed face and anointed head. The Father who sees in secret rewards what is done in secret. Both disciplines are irreducibly between the soul and God." },
  { title: "Isaiah 58: True Fasting Is Justice", verse: "Isa 58:6", text: "Isaiah 58 is the most searching critique of religious fasting in all of Scripture. The people fast but simultaneously oppress their workers; they bow their heads but ignore the hungry and homeless. God refuses their fasting: 'Is this the kind of fast I have chosen?' The fast God chooses is to loose the chains of injustice, share food with the hungry, shelter the wanderer, and clothe the naked. The chapter does not abolish fasting; it insists that genuine fasting will produce justice. The internal discipline and the external love cannot be separated." },
  { title: "Daniel Fasted for Clarity and Intercession", verse: "Dan 9:3", text: "Daniel's fasting in chapter 9 is among the most theologically rich examples in the Old Testament. He turns to God 'in prayer and petition, in fasting and in sackcloth and ashes' — seeking understanding, confessing the sins of his people, and interceding for restoration. Fasting here is not self-punishment; it is the intensification of prayer, the bodily enactment of urgency and dependence. The physical discomfort of fasting aligns the body with the seriousness of what the soul is bringing before God. Daniel fasted not to earn an answer but to bring his whole self — body and spirit — into the act of seeking." },
  { title: "Jesus Fasted Forty Days in the Wilderness", verse: "Matt 4:2", text: "Jesus' forty-day fast in the wilderness precedes his public ministry and is immediately followed by the three temptations. The fast is not incidental; it is formative. Jesus enters the wilderness full of the Spirit (Luke 4:1) and returns in the power of the Spirit (Luke 4:14). The temptations that follow the fast — bread from stones, spectacular display, kingdoms of the world — are precisely the temptations of one who has been weakened by hunger. Jesus meets each with Scripture, demonstrating that his dependence on God is deeper than his dependence on bread. The fast is his declaration that man does not live by bread alone." },
  { title: "The Physical-Spiritual Connection in Fasting", verse: "1 Cor 9:27", text: "Paul writes of disciplining his body and making it his slave — not as dualism that despises the body, but as the recognition that the body's appetites, left unaddressed, can override the spirit's intentions. Fasting is the most direct form of this discipline: choosing hunger for a time to demonstrate that physical need does not govern spiritual direction. The hunger of fasting teaches the truth that appetite is not destiny. It trains the will to say no to legitimate desire, creating a capacity for the no that must be said to illegitimate desire. The body brought under discipline becomes a servant of the spirit rather than its master." },
];

const practices = [
  { icon: "📋", title: "Preparing for a Fast", text: "A fast without preparation is often a fast without purpose. Before you begin, spend time in prayer to clarify your intention: What are you seeking? What are you mourning? What are you asking God for? Write it down. Medically, those with diabetes, eating disorder history, pregnancy, or chronic illness should consult a doctor before fasting. Practically, begin by reducing food the day before, and plan for quiet — fasting in a high-demand social or professional context without preparation often collapses into irritability rather than prayer. The preparation is itself part of the discipline." },
  { icon: "🍽️", title: "Types of Fasting", text: "Scripture does not prescribe a single form. Full fasting (water only) was practiced by Moses, Elijah, and Jesus, and is appropriate for brief periods of intense seeking. Partial fasting — limiting food rather than eliminating it — has deep biblical roots (Daniel's pulse fast in Dan 1, the Daniel Fast of chapter 10). Media fasting — abstaining from screens, news, and entertainment — is a contemporary application of the same logic: removing the ordinary source of stimulation and comfort to make more space for God. The type of fast matters less than the intentionality: what are you removing, and what are you replacing it with?" },
  { icon: "🙏", title: "Prayer Postures During Fasting", text: "Fasting that is not filled with prayer is merely dieting. The hunger pangs that come during a fast are invitations — every time the body signals its want, redirect that energy to prayer. Daniel fasted in sackcloth, prostrate before God. The early church fasted with prayer and laying on of hands (Acts 13:2-3). Scripture records prayer while standing, kneeling, prostrate, and walking. The physical posture of the body during prayer is not ceremonial; it is pedagogical — the body teaches the spirit what the spirit is trying to believe. In fasting, the weakened body is particularly teachable." },
  { icon: "🌅", title: "Breaking a Fast Well", text: "How you end a fast matters as much as how you begin it. Breaking a fast abruptly with a large meal can be physically harmful and spiritually disorienting — the hunger that has been held as an offering suddenly becomes a rout. Begin breaking the fast with small amounts of light food: juice, broth, fruit. Spend time in thanksgiving before eating, marking the transition with conscious gratitude. Many who fast report that the meal that breaks the fast becomes a kind of Eucharist — a celebration of provision, a bodily experience of grace. Do not let the fast end without recording what God did or said during it." },
  { icon: "📅", title: "Making Fasting a Regular Discipline", text: "The early church fasted twice a week (the Didache records Wednesday and Friday). The Reformers, though wary of fasting as merit, affirmed it as spiritual discipline. For most contemporary Christians, fasting is occasional at best. Establishing a regular rhythm — monthly, seasonally, or in preparation for major decisions — creates a spiritual infrastructure that prevents fasting from being only crisis-driven. Lent, the season before Easter, offers a structured framework for the Western church. But the rhythm matters less than the regularity: like all disciplines, fasting requires practice to become formative." },
];

const voices = [
  { id: "foster", name: "Richard Foster", role: "Celebration of Discipline (1978)", quote: "Fasting must forever center on God. It must be God-initiated and God-ordained. Physical and spiritual preparation must precede it. The means and the duration should be carefully considered. Outward fasting without the inner reality of seeking the face of God is mere hunger. But fasting with prayer, done in secret and with right motive, opens us to dimensions of prayer that are otherwise inaccessible. It is the body's way of saying: I mean this.", bio: "Foster's Celebration of Discipline recovered fasting for evangelical Protestants who had largely abandoned the practice. His treatment of fasting as one of the classical spiritual disciplines — alongside meditation, prayer, study, simplicity, solitude, submission, service, confession, worship, and guidance — placed it in the proper context: not as an isolated technique but as one instrument in the full orchestra of formation. His work on fasting is both practically specific and theologically grounded in the purposes of God." },
  { id: "piper", name: "John Piper", role: "A Hunger for God (1997)", quote: "The absence of fasting in a Christian's life reveals how little we feel the absence of God. Fasting is the body's way of expressing that there is something we want more than food. If that thing is God himself — his presence, his power, his purposes — then fasting is a declaration that the soul is homesick. We fast because we hunger for God more than we hunger for anything else. And in that hunger, paradoxically, we find him.", bio: "Piper's A Hunger for God is the most theologically sustained Protestant treatment of fasting available. His central thesis — that fasting declares the soul's hunger for God above all earthly goods — gives the practice a clear spiritual rationale. He engages Matthew 6, Isaiah 58, and the example of Jesus, and argues that the absence of fasting in the contemporary church is symptomatic of spiritual satiation: we are too full of the world to hunger for God. The book is both a theological argument and a pastoral invitation." },
  { id: "mcknight", name: "Scot McKnight", role: "Fasting (2009)", quote: "Fasting in the Bible is always a response — it is not a spiritual technique we initiate to get something from God. The fasting person has encountered a sacred moment: grief, need, repentance, seeking. The body joins what the soul is already experiencing. Fasting does not create the sacred moment; it responds to it. This is why Jesus says his disciples will fast when the bridegroom is taken from them — not as an obligation, but as the natural expression of a grief that is real.", bio: "McKnight's Fasting is the most exegetically careful modern treatment of fasting as a biblical practice. His central reframe — that biblical fasting is a response to a sacred moment rather than a spiritual technique for generating one — corrects a significant distortion in much popular teaching. He surveys Old Testament, Second Temple Jewish, and New Testament fasting comprehensively, and his analysis of Matthew 6 and Matthew 9 (when will they fast?) is particularly illuminating for understanding how fasting fits into the life of the church between the resurrection and the return." },
];

const scriptures = [
  { verse: "Matt 6:16-18", text: "When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting. Truly I tell you, they have received their reward in full. But when you fast, put oil on your head and wash your face, so that it will not be obvious to others that you are fasting, but only to your Father, who is unseen; and your Father, who sees what is done in secret, will reward you." },
  { verse: "Isa 58:6", text: "Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke?" },
  { verse: "Acts 13:2-3", text: "While they were worshiping the Lord and fasting, the Holy Spirit said, 'Set apart for me Barnabas and Saul for the work to which I have called them.' So after they had fasted and prayed, they placed their hands on them and sent them off." },
  { verse: "Joel 2:12", text: "Even now, declares the Lord, return to me with all your heart, with fasting and weeping and mourning." },
  { verse: "Dan 9:3", text: "So I turned to the Lord God and pleaded with him in prayer and petition, in fasting, and in sackcloth and ashes." },
  { verse: "Matt 4:2", text: "After fasting forty days and forty nights, he was hungry." },
];

type PFEntry = { id: string; date: string; purpose: string; experience: string; fruit: string };

export default function PrayerFastingGuidePage() {
  const [tab, setTab] = useState("theology");
  const [pfJournal, setPfJournal] = useState<PFEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_prayfasting_entries") ?? "[]"); } catch { return []; }
  });
  const [jPurpose, setJPurpose] = useState("");
  const [jExperience, setJExperience] = useState("");
  const [jFruit, setJFruit] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_prayfasting_entries", JSON.stringify(pfJournal)); } catch {}
  }, [pfJournal]);

  function saveEntry() {
    if (!jPurpose.trim() && !jExperience.trim()) return;
    setPfJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), purpose: jPurpose, experience: jExperience, fruit: jFruit }, ...prev]);
    setJPurpose(""); setJExperience(""); setJFruit("");
  }
  function deleteEntry(id: string) { setPfJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "practices", "voices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Spiritual Disciplines</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Prayer &amp; Fasting</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            The combined practice of prayer and fasting as spiritual disciplines — the theology, the practice, and the fruit of bringing the whole self before God.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? AMBER : CARD, color: tab === t ? "#07070F" : TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: AMBER, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "practices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {practices.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                  <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {voices.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                  <div style={{ color: AMBER, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${AMBER}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: AMBER, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Fasting Journal</h3>
                <textarea placeholder="What is my purpose in this fast? What am I bringing before God?" value={jPurpose} onChange={e => setJPurpose(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What am I experiencing — physically and spiritually — during this fast?" value={jExperience} onChange={e => setJExperience(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What fruit has come — or do I hope to see come — from this time of fasting and prayer?" value={jFruit} onChange={e => setJFruit(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: AMBER, color: "#07070F", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {pfJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : pfJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.purpose && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Purpose:</strong> {e.purpose}</p>}
                  {e.experience && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Experience:</strong> {e.experience}</p>}
                  {e.fruit && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Fruit:</strong> {e.fruit}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "WOt7CScfEWI", title: "Fasting — What It Is and Why It Matters", channel: "Desiring God / John Piper", description: "Piper on the spiritual logic of fasting — why it is not about earning God's favor but about expressing a hunger for God that exceeds our hunger for bread." },
                { videoId: "N5kGOoGMlSE", title: "The Discipline of Prayer", channel: "Ligonier Ministries", description: "A theological and practical treatment of prayer as communion with God — the ACTS model, perseverance in prayer, and the relationship between prayer and the sovereign will of God." },
                { videoId: "t9t5GQHk7aA", title: "Isaiah 58 — The Fast God Chooses", channel: "The Gospel Coalition", description: "An exposition of Isaiah 58 and the prophetic critique of religious fasting divorced from justice — what it means to fast in a way that honors both God and neighbor." },
                { videoId: "ZQjI17VYgqY", title: "Prayer and Fasting in the Early Church", channel: "Reformation Heritage", description: "How the early church practiced the disciplines of prayer and fasting together — drawing on Acts 13, the Didache, and the writings of the Church Fathers to trace the historic shape of these disciplines." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: AMBER, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                    <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
