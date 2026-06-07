"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Striving for Holiness Is Not the Same as Perfectionism", verse: "Matthew 5:48", text: "Jesus says 'Be perfect, therefore, as your heavenly Father is perfect.' This is not a productivity standard — it is a relational calling. The word teleios means complete, whole, mature — not flawless performance. Perfectionism takes a relational call and turns it into a meritocratic treadmill. These are spiritually opposite orientations." },
  { title: "You Are Already Accepted — Before You Perform", verse: "Romans 5:8", text: "God demonstrates his own love for us in this: while we were still sinners, Christ died for us. Acceptance in Christ is not a reward for getting it right. It preceded your best effort and your worst failure. Perfectionism is a works-righteousness orientation applied to all of life. The gospel directly contradicts its central premise." },
  { title: "God Is Glorified in Your Weakness", verse: "2 Corinthians 12:9", text: "Paul learned that God's power is made perfect in weakness. Perfectionism hides weakness — but God is magnified through it. The Christian who lives honestly with limitation is often more powerful in witness than the Christian who projects flawlessness. Vulnerability is not failure; it is the condition under which grace becomes visible." },
  { title: "The Fruit of the Spirit Does Not Include Performance", verse: "Galatians 5:22-23", text: "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. Not productivity. Not achievement. Not flawlessness. The Spirit produces relational and character fruit — the kind that grows over time in relationship with God, not the kind that is measured in outputs and metrics." },
  { title: "Rest Is Not Earned — It Is Commanded", verse: "Exodus 20:8-10", text: "Remember the Sabbath day by keeping it holy. The Sabbath is not a reward for a productive week. It is a command — an act of trust that the world continues without your effort, that you are not responsible for everything, that God holds what you cannot. Perfectionism cannot rest. The gospel says you must." },
];

const voices = [
  { id: "bs", name: "Brene Brown", role: "Researcher, Author", quote: "Perfectionism is not the same as striving for excellence. Perfectionism is the belief that if we live perfect, look perfect, and act perfect, we can avoid the pain of blame, judgment, and shame.", bio: "Brown's research on perfectionism distinguishes it clearly from healthy striving: perfectionism is shame-based and externally focused, while healthy striving is self-focused and asks 'How can I improve?' versus 'What will they think?' Her work has been widely applied in Christian contexts." },
  { id: "tk", name: "Tim Keller", role: "Author, The Freedom of Self-Forgetfulness", quote: "The gospel produces not self-improvement but self-forgetfulness. The perfectionist is always looking at themselves, evaluating themselves. The person who has truly received grace stops thinking about themselves quite so much.", bio: "Keller's short book The Freedom of Self-Forgetfulness is one of the most direct theological treatments of perfectionism and self-evaluation in Christian literature. His argument: the gospel produces not self-improvement but liberation from the endless self-evaluation cycle." },
  { id: "tb", name: "Thomas Merton", role: "Author, No Man Is an Island", quote: "The biggest obstacle to union with God is the frantic desire to achieve it perfectly. Rest is not the enemy of holiness — it is the condition of it.", bio: "Merton, a Trappist monk and prolific writer on contemplative spirituality, wrote extensively on the spiritual disease of compulsive striving. His work argues that the contemplative tradition's emphasis on receptivity and rest is the antidote to the Western Christian tendency toward spiritual perfectionism." },
];

const practices = [
  { icon: "⏸️", title: "Practice Deliberate Incompleteness", text: "As a discipline, practice leaving something deliberately undone or less than perfect: leave a task at 80%, send an email with a minor imperfection, submit work that is good enough but not perfect. Notice the anxiety this produces. Bring that anxiety to God. The discipline is not sloppiness — it is the dismantling of the belief that your worth depends on your output." },
  { icon: "🙏", title: "Receive the Day's Failures in Prayer", text: "End each day with an examen that includes explicitly naming what you did not do well or finish — and receiving grace for it. Do not correct it in prayer; just receive grace. The practice of laying down daily incompleteness trains the soul to trust that God's grace is sufficient for what your effort is not." },
  { icon: "📖", title: "Study the Theology of Justification", text: "Many perfectionists are Christians who have never deeply internalized the doctrine of justification by faith alone. Read Martin Luther's commentary on Galatians, or Paul's letter to the Romans chapters 3-5, with the specific question: what does this mean about my performance? Let justification do theological work on your perfectionistic beliefs." },
  { icon: "💬", title: "Find a Counselor Familiar With Perfectionism", text: "Perfectionism often has roots in family of origin dynamics, early experiences of conditional love, or anxiety disorders. Cognitive Behavioral Therapy (CBT) and Acceptance and Commitment Therapy (ACT) both have strong evidence for treating perfectionism. A therapist who understands both faith and psychology is ideal." },
];

const scriptures = [
  { verse: "Romans 5:8", text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." },
  { verse: "Matthew 11:28-30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light." },
  { verse: "Galatians 5:1", text: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery." },
  { verse: "2 Corinthians 12:9", text: "But he said to me, My grace is sufficient for you, for my power is made perfect in weakness." },
  { verse: "Psalm 131:1-2", text: "My heart is not lifted up; my eyes are not raised too high; I do not occupy myself with things too great and too marvelous for me. But I have calmed and quieted my soul, like a weaned child with its mother." },
  { verse: "Colossians 2:6-7", text: "So then, just as you received Christ Jesus as Lord, continue to live your lives in him, rooted and built up in him, strengthened in the faith as you were taught, and overflowing with thankfulness." },
];

const videos = [
  { id: "pf_1", title: "The Gospel and Perfectionism — Breaking Free From Performance Christianity", channel: "Desiring God" },
  { id: "pf_2", title: "The Freedom of Self-Forgetfulness — Tim Keller", channel: "Tim Keller" },
  { id: "pf_3", title: "Perfectionism Is Not the Same as Holiness", channel: "The Gospel Coalition" },
  { id: "pf_4", title: "When Rest Feels Wrong — Perfectionism, Sabbath, and Grace", channel: "Redeemer Presbyterian" },
];

type PerfEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function PerfectionismPage() {
  const [tab, setTab] = useState("theology");
  const [perfJournal, setPerfJournal] = useState<PerfEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_perfectionismj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_perfectionismj_entries", JSON.stringify(perfJournal)); } catch {}
  }, [perfJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setPerfJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setPerfJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Performance and Grace</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Perfectionism</h1>
        <p style={{ color: MUTED, marginBottom: "2rem" }}>Breaking free from performance-based Christianity and receiving grace</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>The Gospel Versus Performance</h2>
            {theology.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, fontWeight: 600, marginBottom: "0.3rem" }}>{s.verse}</div>
                <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Voices on Perfectionism and Grace</h2>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", fontStyle: "italic", color: TEXT }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Practices for Breaking Perfectionism</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Scripture for the Recovering Perfectionist</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.4rem" }}>{s.verse}</div>
                <p style={{ margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: PURPLE }}>Your Grace Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. An imperfect entry is perfectly fine here.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>Where is perfectionism showing up in your life right now?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Perfectionism is showing up when..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What does the gospel say to that specific perfectionistic belief?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="The gospel says..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What is one act of deliberate imperfection you will practice this week?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="This week I will intentionally..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {perfJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Start imperfectly — that is the point.</p>}
            {perfJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>WHERE IT SHOWS UP</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT THE GOSPEL SAYS</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>IMPERFECTION PRACTICED</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
                <button onClick={() => deleteEntry(e.id)} style={{ fontSize: "0.75rem", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Video Resources</h2>
            {videos.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.3rem" }}>{v.channel}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{v.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
