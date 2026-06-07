"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Designed a Diverse Range of Minds", verse: "Psalm 139:14", text: "You are fearfully and wonderfully made — including your attention system, your dopamine regulation, your need for novelty and movement. ADHD is not a spiritual defect or a failure of self-control. It is a neurological difference in how the brain manages attention, inhibition, and reward. God made this brain. He works with and through it." },
  { title: "The Disciplines Were Made for Humans, Not Machines", verse: "Mark 2:27", text: "Jesus said the Sabbath was made for man, not man for the Sabbath. The spiritual disciplines were designed to draw people into relationship with God — not to sort the neurotypical from the rest. For people with ADHD, traditional disciplines may need to look different. Movement-based prayer, shorter but more frequent Scripture engagement, and active worship may be the form the Spirit takes in you." },
  { title: "Impulsivity Is Not Always Sin", verse: "Acts 2:2-4", text: "The Spirit fell on the disciples like a rushing wind and tongues of fire — not like a quiet board meeting. Many people with ADHD carry gifts that are inseparable from their neurology: intensity, creativity, hyperfocus, rapid connection-making, passion. The same brain that makes sitting still difficult also makes sustained creative work, entrepreneurship, and prophetic urgency possible." },
  { title: "Faithfulness Is Possible in Shorter Increments", verse: "Luke 16:10", text: "Whoever is faithful in very little is also faithful in much. For someone with ADHD, faithfulness may look like ten minutes of Scripture with full attention instead of forty minutes of distracted reading. It may look like prayer while walking rather than sitting still. God sees the genuine engagement of an ADHD brain; He is not comparing you to someone else's neurotype." },
  { title: "You Are Not Lazy — and God Knows the Difference", verse: "Proverbs 10:4", text: "Scripture speaks clearly against laziness — but ADHD is not laziness. It is a disorder of executive function, not a character defect. The person with ADHD who struggles to start tasks, manage time, and follow through is not choosing to disobey. They are navigating a brain that works differently. God is not angry at your neurology." },
];

const voices = [
  { id: "kp", name: "Dr. Russell Barkley", role: "Leading ADHD Researcher", quote: "ADHD is not a problem of knowing what to do. It is a problem of doing what you know. It is a performance disorder, not a knowledge disorder. Understanding this changes everything about how we approach it.", bio: "Barkley's decades of research have transformed the scientific understanding of ADHD from a behavior problem to a disorder of self-regulation and executive function. His work is essential context for Christians who have blamed themselves for behaviors that are neurological in origin." },
  { id: "ls", name: "Lacy Finn Borgo", role: "Spiritual Director, Author", quote: "The Holy Spirit is not intimidated by ADHD. I have seen God meet people with ADHD most powerfully in the middle of movement, noise, and what looks from the outside like chaos.", bio: "Borgo works with people with neurodivergent brains on spiritual formation. Her approach focuses on discovering the spiritual disciplines that work with a given brain's design rather than forcing neurotypical forms onto every mind." },
  { id: "tm", name: "Thom Hartmann", role: "Author, ADD: A Different Perception", quote: "ADHD brains evolved as hunter brains in a farmer world. The same traits that make focus in classrooms difficult make rapid adaptation, risk-taking, and intense presence in high-stakes moments possible.", bio: "Hartmann's hunter-farmer hypothesis, while debated scientifically, has been transformative for many people with ADHD who have felt only failure in school and structured environments. Understanding ADHD as adaptation rather than pathology offers a liberating reframe for spiritual formation." },
];

const practices = [
  { icon: "🚶", title: "Try Body-Based Spiritual Disciplines", text: "Prayer while walking, worship while doing repetitive physical tasks, Scripture audio while exercising — these are not lesser forms of spiritual practice. For ADHD brains that think better in motion, embodied disciplines are often the most genuine engagement. Try the prayer walk or lectio divina with an audio Bible." },
  { icon: "⏱️", title: "Use Time Structures That Work With Your Brain", text: "Shorter, more frequent engagement beats long, infrequent sessions for most ADHD brains. Try the Pomodoro method (25 minutes focused, 5 minutes rest) for Bible reading. Use alarms, body doubling (reading alongside someone else), and external accountability rather than relying on internal motivation." },
  { icon: "💊", title: "Medication Is Not a Lack of Faith", text: "ADHD medication helps the brain's dopamine and norepinephrine systems function more typically. Taking it is not cheating or faithlessness any more than wearing glasses is. Many Christians with ADHD report that medication allows them to engage in spiritual practices that were previously impossible. Stewarding your brain chemistry is stewardship of your body." },
  { icon: "🧩", title: "Understand Your Specific ADHD Profile", text: "ADHD presents very differently across individuals — primarily inattentive, primarily hyperactive/impulsive, or combined. Women and girls are often misdiagnosed or underdiagnosed because their ADHD looks different. Get a proper evaluation from a psychologist or psychiatrist who specializes in ADHD. Understanding your specific profile shapes how you approach spiritual formation." },
];

const scriptures = [
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is." },
  { verse: "2 Corinthians 12:9", text: "But he said to me, My grace is sufficient for you, for my power is made perfect in weakness." },
  { verse: "Philippians 4:13", text: "I can do all this through him who gives me strength." },
  { verse: "1 Corinthians 12:17-18", text: "If the whole body were an eye, where would the sense of hearing be? But in fact God has placed the parts in the body, every one of them, just as he wanted them to be." },
  { verse: "Luke 16:10", text: "Whoever can be trusted with very little can also be trusted with much." },
];

const videos = [
  { id: "ad_1", title: "ADHD and Faith — Spiritual Disciplines for Neurodiverse Brains", channel: "The Gospel Coalition" },
  { id: "ad_2", title: "Dr. Russell Barkley on ADHD and Executive Function", channel: "CHADD" },
  { id: "ad_3", title: "Prayer and ADHD — What Works When Sitting Still Doesn't", channel: "Proverbs 31 Ministries" },
  { id: "ad_4", title: "ADHD Medication and Christianity — Is It Okay to Take It?", channel: "Christian Healthcare Ministry" },
];

type ADHDEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ADHDFaithPage() {
  const [tab, setTab] = useState("theology");
  const [adhdJournal, setAdhdJournal] = useState<ADHDEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_adhdfaithj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_adhdfaithj_entries", JSON.stringify(adhdJournal)); } catch {}
  }, [adhdJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setAdhdJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setAdhdJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Neurodiversity and Faith</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>ADHD and Faith</h1>
        <p style={{ color: MUTED, marginBottom: "2rem" }}>Spiritual formation for minds that move differently</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>God Made This Brain</h2>
            {theology.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{s.verse}</div>
                <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Voices on ADHD and Faith</h2>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", fontStyle: "italic", color: TEXT }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Spiritual Disciplines That Work for ADHD Brains</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Scripture for the ADHD Journey</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.4rem" }}>{s.verse}</div>
                <p style={{ margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: GREEN }}>Your Reflection Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. Short entries are great — you do not have to write an essay.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What is your ADHD making hard in your faith life right now?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="What's hard is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>Where have you seen God meet you through or despite your ADHD?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="God has met me in..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What small, workable spiritual practice are you trying this week?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="This week I am trying..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {adhdJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. A short, honest entry beats a long one you never write.</p>}
            {adhdJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT'S HARD</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>GOD MET ME</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>TRYING THIS WEEK</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
                <button onClick={() => deleteEntry(e.id)} style={{ fontSize: "0.75rem", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Video Resources</h2>
            {videos.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{v.channel}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{v.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
