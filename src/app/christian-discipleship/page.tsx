"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", BLUE = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "What Is Discipleship? (Matt 16:24)", verse: "Matt 16:24", text: "Take up your cross and follow me. Discipleship is not a program but a relationship of following — learning from Jesus by being with Jesus, doing what Jesus did, becoming who Jesus is. The Greek mathetes (disciple) means learner, but not merely an intellectual learner: a disciple lives with the teacher, observing how they respond to every situation. For Jesus, that means learning his prayer habits, his table practices, his treatment of the marginalized, his response to conflict, his posture toward the Father." },
  { title: "Dying to Self — the Paradox of the Gospel (John 12:24)", verse: "John 12:24", text: "Unless a grain of wheat falls into the ground and dies, it remains alone; but if it dies, it bears much fruit. The cross is not only the place of our forgiveness — it is the pattern for our lives. Every genuine growth in Christlikeness involves a death: a death to a cherished desire, a false identity, a habit of self-protection. There is no discipleship without cruciformity. The problem with much Christian teaching is that it offers Jesus without the cross — the benefits without the cost, transformation without surrender." },
  { title: "Spiritual Disciplines — the Training Ground (1 Tim 4:7)", verse: "1 Tim 4:7", text: "Train yourself to be godly. Dallas Willard recovered the patristic category of spiritual disciplines as the means of grace — not earning grace but creating the conditions in which grace can work. The disciplines of engagement (Bible, prayer, fasting, service, community) and abstinence (silence, solitude, simplicity, secrecy) train our bodies and souls to become increasingly responsive to the Spirit. We cannot change ourselves by willpower; but we can place ourselves under the ongoing influence of the One who can change us." },
  { title: "Bearing Fruit — Evidence of Discipleship (John 15:8)", verse: "John 15:8", text: "This is to my Father’s glory, that you bear much fruit, showing yourselves to be my disciples. Fruit is the natural outgrowth of abiding in Christ: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control (Gal 5:22-23). The test of discipleship is not theological knowledge (though that matters) or spiritual experiences (though those occur) but the character that results. Transformation into Christlikeness — not perfection but direction — is the mark of genuine discipleship." },
  { title: "Making Disciples — the Mandate (Matt 28:18-20)", verse: "Matt 28:18-20", text: "Go and make disciples of all nations. The Great Commission is not merely to make converts but disciples — people who are learning to obey everything Jesus commanded. This means discipleship is always meant to be reproductive: the disciple who has been formed is sent to form others. A discipleship that terminates on its own formation has missed the point. Paul to Timothy: the things you have heard from me, entrust to faithful people who will also be able to teach others (2 Tim 2:2)." },
];

const voices = [
  { name: "Dallas Willard", role: "The Spirit of the Disciplines", quote: "A disciple is simply someone who has decided to be with Jesus in order to become like Jesus and to do what Jesus would do.", bio: "Dallas Willard was a philosopher at USC and one of the most formative voices in Christian spirituality of the 20th century. His books The Spirit of the Disciplines and The Divine Conspiracy made the case that spiritual formation is not optional but the whole point of Christian life — and that the classical spiritual disciplines are the primary means of training." },
  { name: "Dietrich Bonhoeffer", role: "The Cost of Discipleship", quote: "When Christ calls a man, he bids him come and die.", bio: "Dietrich Bonhoeffer was a German pastor and theologian executed by the Nazis in 1945 for resistance to Hitler. The Cost of Discipleship remains one of the most searching examinations of what genuine following of Jesus requires — written against the backdrop of a church that had largely capitulated to the Third Reich and traded costly grace for cheap." },
  { name: "Eugene Peterson", role: "A Long Obedience in the Same Direction", quote: "American culture is probably the most anti-discipleship culture in the history of the world… Discipleship is a long, patient, resolute journey in the same direction, in the company of the same people, over the same ground.", bio: "Eugene Peterson was a pastor and translator who spent most of his ministry in one church in Maryland. His pastoral theology, epitomized in A Long Obedience in the Same Direction, insisted that discipleship happens in the mundane rhythms of ordinary life and that the consumer appetite for novelty is discipleship’s greatest enemy." },
];

const practices = [
  { title: "Daily Rule of Life", text: "Establishing a daily rule of life: a structured rhythm of prayer, Scripture, and reflection — not a performance but a framework that makes consistent formation possible." },
  { title: "Intentional One-on-One Discipleship", text: "Being discipled by someone further along and discipling someone behind you — the 2 Timothy 2:2 chain in practice." },
  { title: "A New Spiritual Discipline", text: "Practicing a spiritual discipline you have never done before: silence, extended fasting, daily examen, lectio divina — expanding your formation toolkit." },
  { title: "Accountable Small Group", text: "Participating in a small group that goes beyond information to mutual accountability for actual obedience." },
  { title: "Periodic Retreat", text: "Periodic retreat: extended time (half-day, full day, or longer) away from normal routine for prayer, examination, and renewed commitment." },
];

const scriptures = [
  { verse: "Matt 16:24", text: "Whoever wants to be my disciple must deny themselves and take up their cross and follow me." },
  { verse: "John 15:5", text: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing." },
  { verse: "Luke 9:23-24", text: "Whoever wants to be my disciple must deny themselves and take up their cross daily and follow me. For whoever wants to save their life will lose it, but whoever loses their life for me will save it." },
  { verse: "2 Tim 2:2", text: "And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others." },
  { verse: "Phil 3:10", text: "I want to know Christ — yes, to know the power of his resurrection and participation in his sufferings, becoming like him in his death." },
  { verse: "Rom 8:29", text: "For those God foreknew he also predestined to be conformed to the image of his Son, that he might be the firstborn among many brothers and sisters." },
];

const videos = [
  { id: "wS35sTY5i8M", title: "What Is Discipleship? Dallas Willard on Following Jesus" },
  { id: "n3nLZiUkzMA", title: "The Cost of Discipleship — Bonhoeffer’s Challenge to the Church" },
  { id: "O0BVYL7VMFU", title: "Spiritual Disciplines for Beginners — A Practical Guide" },
  { id: "1VzRRpBLbq0", title: "Making Disciples: The Great Commission Unpacked" },
];

type DSEntry = { id: string; date: string; commitment: string; obstacle: string; growth: string };

export default function ChristianDiscipleshipPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DSEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_discipleship_entries") ?? "[]"); } catch { return []; }
  });
  const [jCommitment, setJCommitment] = useState("");
  const [jObstacle, setJObstacle] = useState("");
  const [jGrowth, setJGrowth] = useState("");

  useEffect(() => { localStorage.setItem("vine_discipleship_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jCommitment.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), commitment: jCommitment, obstacle: jObstacle, growth: jGrowth }, ...prev]);
    setJCommitment(""); setJObstacle(""); setJGrowth("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Spiritual Formation</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Discipleship</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>What does it mean to follow Jesus? Explore the theology of discipleship, the spiritual disciplines that form us, and the practices that make genuine growth possible.</p>

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
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 8 }}>{p.title}</h3>
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
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Discipleship</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to think through your journey of following Jesus honestly and prayerfully.</p>
            {[
              { label: "Commitment — a specific commitment you are making as a disciple", val: jCommitment, set: setJCommitment },
              { label: "Obstacle — the main obstacle you face in following Jesus right now", val: jObstacle, set: setJObstacle },
              { label: "Growth — an area of growth you have seen or are hoping to see", val: jGrowth, set: setJGrowth },
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
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: BLUE, fontWeight: 600 }}>Commitment:</span> {e.commitment}</p>
                      {e.obstacle && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: BLUE, fontWeight: 600 }}>Obstacle:</span> {e.obstacle}</p>}
                      {e.growth && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: BLUE, fontWeight: 600 }}>Growth:</span> {e.growth}</p>}
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
