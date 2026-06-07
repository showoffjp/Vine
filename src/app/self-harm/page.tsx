"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Your Body Is a Temple — Worth Protecting", verse: "1 Corinthians 6:19-20", text: "Your body is a temple of the Holy Spirit, who is in you. You were bought at a price. This is not a condemnation — it is a dignity claim. The God of the universe dwells in you. Your body is worth protecting and honoring, even when everything in you wants to hurt it. He sees what you are doing to yourself and He has not left." },
  { title: "God Meets You in the Places of Self-Destruction", verse: "Jonah 2:2", text: "From the depths of Sheol, Jonah cried out. From the belly of a fish, in a condition he brought on himself through his own choices — God heard. He did not wait for Jonah to be better before showing up. You do not have to be well for God to hear you." },
  { title: "Shame Does Not Help — Compassion Does", verse: "Romans 8:1", text: "There is no condemnation for those in Christ Jesus. Self-harm is often driven by shame, emotional pain, and the need to feel something or release something unbearable. Adding more shame — from yourself or from others — almost always makes it worse. God does not pile on shame. He removes it. That is what the cross is for." },
  { title: "Pain Has a Name and God Knows It", verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted. He saves those who are crushed in spirit. The pain underneath self-harm is real pain — often trauma, often profound loss, often experiences that would bring any person to their knees. God is not indifferent to that pain. He is close to it." },
  { title: "Healing Is Possible — and It Takes Time", verse: "Isaiah 61:1", text: "Jesus was sent to bind up the brokenhearted, to proclaim freedom for the captives, to release from darkness those who are imprisoned. The binding up is an image of careful, attentive healing — not instant cure. Recovery from self-harm takes time, professional support, and community. God is present in the process, not just at the end of it." },
];

const voices = [
  { id: "da", name: "Dan Allender", role: "Therapist, Author of The Wounded Heart", quote: "People who harm themselves are not failures at coping. They are using the only tool they have found that works to manage unbearable internal pain. The work of healing is finding new tools — but that requires being understood first, not condemned.", bio: "Allender's trauma-informed approach to self-harm situates it accurately: it is a maladaptive coping mechanism for unbearable pain, not a moral failure. Understanding this changes how the church should respond — with curiosity and care rather than shock and shame." },
  { id: "ta", name: "To Write Love on Her Arms", role: "Mental Health Organization", quote: "You were created to love and be loved. You were meant to live life in relationship with other people, to know and be known. You need to know that your life matters.", bio: "TWLOHA (twloha.com) is a nonprofit founded in response to a friend's self-harm and addiction, now one of the leading mental health advocacy organizations for young adults. Their approach is compassionate, relational, and explicitly non-shaming." },
  { id: "ns", name: "Nancy Thomas", role: "Therapist, Christian Counselor", quote: "When someone tells me they are self-harming, my first response is: 'Thank you for telling me. You must be in a lot of pain. Can you tell me more?' Not: What are you thinking? Not: Stop that. Thank you for telling me. That is the beginning of healing.", bio: "Therapists who specialize in self-harm consistently identify disclosure as the turning point. Creating the conditions where someone can be honest — without shame, without panic, without immediate confrontation — is the most important skill a pastor, parent, or friend can develop." },
];

const practices = [
  { icon: "🏥", title: "Tell a Trusted Person and Get Professional Help", text: "Self-harm almost always requires professional support to heal. If you are self-harming, please tell someone — a therapist, counselor, pastor, doctor, or trusted friend. You do not have to be in immediate danger to deserve help. Dialectical Behavior Therapy (DBT) has the strongest evidence for treating self-harm and is widely available." },
  { icon: "📞", title: "In Crisis: Contact a Hotline", text: "If you are in crisis or have harmed yourself and need immediate help: call or text 988 (Suicide and Crisis Lifeline), text HOME to 741741 (Crisis Text Line), or call TWLOHA's resource line at 321-452-9292. You can also go to your nearest emergency room." },
  { icon: "🔄", title: "Work on Understanding What the Self-Harm Is Doing", text: "Self-harm typically serves a function — releasing emotional pain, feeling something when numb, punishing yourself, managing overwhelm. With a therapist, explore what the behavior is doing and find alternative ways to meet that need. This is the core of DBT skills training: distress tolerance, emotion regulation, and interpersonal effectiveness." },
  { icon: "🙏", title: "Bring God Into the Moments of Urge", text: "When the urge to self-harm comes, try: calling or texting 988, holding ice cubes (intense sensation without damage), physical exercise, calling a safe person, writing out the emotion instead of enacting it. And pray — not perfect prayer, but honest prayer: 'God, I want to hurt myself. I need you right now.'" },
];

const scriptures = [
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "1 Corinthians 6:19-20", text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Isaiah 61:1", text: "He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners." },
  { verse: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
];

const videos = [
  { id: "sh_1", title: "To Write Love on Her Arms — The Film", channel: "TWLOHA" },
  { id: "sh_2", title: "Understanding Self-Harm — What It Is and How to Help", channel: "NAMI" },
  { id: "sh_3", title: "DBT Skills for Self-Harm — What the Research Shows Works", channel: "Therapy in a Nutshell" },
  { id: "sh_4", title: "What the Church Needs to Know About Self-Harm", channel: "The Gospel Coalition" },
];

type SHEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function SelfHarmPage() {
  const [tab, setTab] = useState("practices");
  const [shJournal, setShJournal] = useState<SHEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_selfharmj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_selfharmj_entries", JSON.stringify(shJournal)); } catch {}
  }, [shJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setShJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setShJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["practices", "theology", "voices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Crisis Support</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Self-Harm and Recovery</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>Compassion, healing resources, and theology for those struggling with self-harm</p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontWeight: 600, color: "#ff9999" }}>Crisis Resources — If You Are in Danger Right Now</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: TEXT }}>
            <strong>988 Suicide and Crisis Lifeline:</strong> Call or text 988 — 24/7<br />
            <strong>Crisis Text Line:</strong> Text HOME to 741741 — 24/7<br />
            <strong>TWLOHA Crisis Support:</strong> 321-452-9292 (text or call)<br />
            <strong>If you have seriously hurt yourself:</strong> 911 or nearest emergency room
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Getting Help Right Now</h2>
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

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>What God Says — Without Condemnation</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Voices of Compassion</h2>
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

        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Scripture — Grace, Not Condemnation</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: GREEN }}>Your Recovery Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries saved privately in your browser only. Use this during stable moments — not during urges (call 988 instead).</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What pain are you trying to manage? What is underneath it?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="What I am trying to manage is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What does God say about your worth — even now?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="Even now, God says I am..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>Who will you tell or what help will you access?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="I will tell / I will contact..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {shJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. You are worth the fight for your own wellbeing.</p>}
            {shJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT I AM MANAGING</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT GOD SAYS</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>HELP I AM ACCESSING</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
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
