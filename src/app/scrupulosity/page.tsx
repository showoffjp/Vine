"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Scrupulosity Is Not Deep Faith — It Is a Disorder", verse: "Romans 8:15", text: "Scrupulosity is a form of OCD in which intrusive thoughts, doubt, and compulsive rituals center on religious themes: fear of unforgivable sin, inability to feel forgiven, compulsive confession, fear of blasphemy. It is not a sign of spiritual sensitivity or holy fear. It is anxiety disorder dressed in religious language. The Spirit you received does not produce slavery and fear — He produces adoption." },
  { title: "Doubt Does Not Equal Unbelief", verse: "Matthew 14:31", text: "Jesus did not rebuke Peter for sinking — He rescued him and asked why he doubted. Peter's doubt occurred mid-miracle, while literally standing on water. The disciples who saw the resurrection still doubted (Matthew 28:17). Doubt is not the absence of faith; it is often the struggle of faith. For someone with scrupulosity, intrusive doubts are symptoms of anxiety, not evidence of damnation." },
  { title: "The Unforgivable Sin Is Not What You Fear", verse: "Matthew 12:31-32", text: "The blasphemy of the Holy Spirit — the one unforgivable sin — was the Pharisees' deliberate, persistent rejection of clear evidence of God's work, attributing Jesus' miracles to Satan. The consistent teaching of Christian theologians across all traditions: the person who fears they have committed it almost certainly has not. The very fear is evidence of the Spirit's presence." },
  { title: "Peace Guards the Heart and Mind", verse: "Philippians 4:7", text: "Paul describes the peace of God as a guard — not a reward for proper performance, but a gift that transcends understanding. Scrupulosity replaces peace with a performance treadmill where no amount of confession, prayer, or certainty is enough. This is not what God designed. His peace is given, not achieved." },
  { title: "Certainty Is Not Required for Faith", verse: "Hebrews 11:1", text: "Faith is described as confidence in what we hope for and assurance about what we do not see — but not as mathematical certainty. Scrupulosity hijacks the brain's need for certainty and applies it to salvation. The theological answer is that faith was never meant to produce 100% subjective certainty — it is trust in an objectively reliable God. The OCD answer is that seeking certainty actually increases anxiety." },
];

const voices = [
  { id: "ew", name: "Ed Welch", role: "CCEF, Author of Running Scared", quote: "The person tormented by scrupulosity is not suffering from too much of God — they are suffering from an anxiety disorder that has taken on religious form. Careful theological instruction and evidence-based treatment are both needed.", bio: "Welch is a counselor and professor at the Christian Counseling and Educational Foundation (CCEF) who has written extensively on anxiety, OCD, and scrupulosity. He argues that compassionate, informed pastoral care that distinguishes between spiritual and psychological dimensions is essential." },
  { id: "mc", name: "Michael Emlet", role: "CCEF, Author of Saints, Sufferers, and Sinners", quote: "With scrupulosity, more confession is not the cure — it is the compulsion. The person needs to learn to tolerate uncertainty, not eliminate it. This is counterintuitive theologically, but it is how OCD treatment works.", bio: "Emlet, a physician and counselor, has written on the intersection of OCD, scrupulosity, and Christian faith. He is one of the most careful thinkers on how to apply evidence-based OCD treatment (ERP therapy) within a Christian framework that does not abandon theological truth." },
  { id: "jh", name: "Jonathan Haidt (context for faith)", role: "Moral Psychology Researcher", quote: "The brain systems that generate disgust, purity, and sanctity concerns can malfunction — producing excessive guilt and contamination fears that have no correspondence to actual wrongdoing.", bio: "Understanding scrupulosity is helped by knowing that the brain has dedicated moral emotion systems that can dysregulate in OCD. What feels like conscience is often anxiety. The theological tradition has long distinguished between true conviction (which leads to confession and peace) and false guilt (which persists regardless of confession)." },
];

const practices = [
  { icon: "🧠", title: "Seek ERP Therapy From an OCD Specialist", text: "Exposure and Response Prevention (ERP) therapy is the gold-standard treatment for OCD and scrupulosity. It involves intentionally exposing yourself to feared thoughts while resisting the compulsive response (confession, reassurance-seeking). Find an OCD specialist through the International OCD Foundation (iocdf.org). Look for 'ERP trained' and 'scrupulosity experience.'" },
  { icon: "🚫", title: "Stop Seeking Reassurance", text: "The most counterintuitive but important step: stop asking your pastor, spouse, or friend whether you have been forgiven. Stop repeating confessions. Reassurance provides brief relief but increases anxiety over time by training your brain that the doubt is real and needs solving. This is not easy — do it with the support of a therapist." },
  { icon: "📚", title: "Learn the Theology of False Guilt", text: "Read resources that distinguish between true conscience (Holy Spirit conviction leading to confession and peace) and neurological anxiety dressed as guilt. Books: Pure in Heart by Ian Osborn, Dark Clouds, Deep Mercy by Mark Vroegop. Talk with a pastor who understands OCD." },
  { icon: "🤝", title: "Find a Therapist Who Understands Both Faith and OCD", text: "An ideal therapist treats both dimensions: evidence-based OCD treatment AND genuine respect for your faith. OCD specialists who dismiss your faith will not be as effective. Look for therapists who identify as faith-friendly or have experience with religious clients. The IOCDF provider directory allows filtering." },
];

const scriptures = [
  { verse: "Romans 8:15", text: "The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship." },
  { verse: "1 John 3:20", text: "If our hearts condemn us, we know that God is greater than our hearts, and he knows everything." },
  { verse: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
  { verse: "Isaiah 26:3", text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you." },
  { verse: "Romans 8:38-39", text: "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
];

const videos = [
  { id: "sc_1", title: "What Is Scrupulosity? Religious OCD and the Christian", channel: "CCEF" },
  { id: "sc_2", title: "When Conscience Goes Wrong — Scrupulosity and OCD", channel: "Desiring God" },
  { id: "sc_3", title: "ERP for Scrupulosity — Treatment That Works", channel: "IOCDF" },
  { id: "sc_4", title: "The Unforgivable Sin — Answering the Fear Theologically", channel: "The Gospel Coalition" },
];

type SCEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ScrupulosityPage() {
  const [tab, setTab] = useState("theology");
  const [scJournal, setScJournal] = useState<SCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_scrupulosityj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_scrupulosityj_entries", JSON.stringify(scJournal)); } catch {}
  }, [scJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setScJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setScJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Mental Health + Faith</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Scrupulosity</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>When religious anxiety mimics conscience — understanding and healing religious OCD</p>

        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontWeight: 600, color: PURPLE }}>Getting Help</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: TEXT }}>
            <strong>IOCDF Provider Directory:</strong> iocdf.org/find-help — find OCD specialists near you<br />
            <strong>988 Lifeline:</strong> Call or text 988 — if you are in emotional crisis<br />
            <strong>NOCD:</strong> nocdhelp.com — telehealth OCD treatment (ERP therapy)
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Distinguishing True Conviction from Religious Anxiety</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Voices That Understand Both Faith and OCD</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Steps Toward Freedom</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Scripture to Anchor Your Mind</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: PURPLE }}>Your Reflection Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. <strong>Note:</strong> Do not use this journal to seek reassurance — write to process, not to prove.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What intrusive thought or fear is active today?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="The thought that keeps returning is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What does God actually say about this? (not seeking certainty — choosing trust)</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="The truth I am choosing to trust, even without certainty, is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What compulsion am I resisting today? (ERP step)</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="Today I am resisting the urge to..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {scJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Write when you are ready — not to seek reassurance, but to practice truth.</p>}
            {scJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>INTRUSIVE THOUGHT</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>TRUTH CHOSEN</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>COMPULSION RESISTED</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
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
      <Footer />
    </>
  );
}
