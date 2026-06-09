"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Trauma Is a Wound — Not a Character Flaw", verse: "Psalm 22:14", text: "The psalmist writes: 'I am poured out like water, and all my bones are out of joint.' This is not metaphor for mild discomfort — it is the language of traumatic disintegration. The body that has been through overwhelming experience does not return to normal automatically. Trauma is a wound to the nervous system that, like any wound, requires treatment." },
  { title: "God Created the Nervous System He Is Healing", verse: "Psalm 139:14", text: "PTSD involves disruption to the brain and body's threat-detection and memory systems — specifically the amygdala, hippocampus, and prefrontal cortex. God made these systems. He is not confused by their disruption. Healing through EMDR, CPT, or other evidence-based trauma therapies is not a departure from faith — it is the wise use of what God gave researchers to discover." },
  { title: "The Body Keeps the Score — and God Knows the Score", verse: "Lamentations 3:20", text: "My soul continually remembers it and is bowed down within me. Trauma memory is stored differently than normal memory — fragmented, sensory, intrusive. The body keeps the score of what happened, even when the mind tries to move past it. God is not surprised that your body is still responding to what it went through. He sees all of it." },
  { title: "Healing Is Not Forgetting — It Is Integration', verse: 'Psalm 30:11", text: "God turned David's mourning into dancing — but David did not forget the pit. The Psalms are full of integrated memory: David remembers what happened, brings it honestly to God, and is changed by the encounter. Trauma recovery is not the erasure of memory; it is the processing of memory so it no longer controls the present. The past can be held rather than being perpetually relived." },
  { title: "You Are Not Broken — You Are Wounded", verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a smoldering wick he will not snuff out. God's posture toward wounded, struggling, barely-functioning people is careful, attentive protection. He does not break what is already bruised. He tends what is smoldering. You are a person who was wounded — not a person who is permanently broken." },
];

const voices = [
  { id: "bv", name: "Bessel van der Kolk", role: "Author, The Body Keeps the Score", quote: "Trauma is not just an event that took place sometime in the past; it is also the imprint left by that experience on mind, brain, and body. The challenge of recovery is to reestablish ownership of your body and your mind.", bio: "Van der Kolk's book The Body Keeps the Score is widely considered the most important contemporary work on trauma and its effects. His research on EMDR, somatic therapies, and the neuroscience of trauma has transformed how trauma is treated and understood." },
  { id: "dl", name: "Diane Langberg", role: "Psychologist, Author of Suffering and the Heart of God", quote: "Trauma care requires that you enter into the experience of the other person — not just manage their symptoms. God entered into human suffering in the incarnation. The church is called to follow Him there.", bio: "Langberg's work integrates a sophisticated understanding of trauma neuroscience with deep theological reflection. Her book Suffering and the Heart of God is essential for both trauma survivors and those who care for them." },
  { id: "pc", name: "Peter Levine", role: "Author, Waking the Tiger", quote: "Trauma is not what happens to you — it is what happens inside you as a result of what happens to you. And healing is possible for virtually everyone, given the right treatment and support.", bio: "Levine developed Somatic Experiencing (SE), one of the evidence-based body-centered approaches to trauma treatment. His work on how the nervous system processes and releases trauma has been influential in both clinical and faith contexts." },
];

const practices = [
  { icon: "🧠", title: "Seek Evidence-Based Trauma Therapy", text: "PTSD is one of the most treatable psychiatric conditions when treated with evidence-based approaches: EMDR (Eye Movement Desensitization and Reprocessing), Cognitive Processing Therapy (CPT), and Prolonged Exposure (PE) therapy all have strong research support. Find a trauma specialist through the EMDR International Association (emdria.org) or Psychology Today therapist finder (filter by trauma)." },
  { icon: "🫁", title: "Learn to Regulate Your Nervous System", text: "Grounding techniques help interrupt the trauma response when symptoms are active. Try: 5-4-3-2-1 (name 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste), box breathing (inhale 4 counts, hold 4, exhale 4, hold 4), cold water on the face. These are not cures — they are stabilization tools to use between therapy sessions." },
  { icon: "🤝", title: "Build Safe Relationship — Do Not Isolate", text: "Trauma tends toward isolation — the nervous system reads relationship as threat when it has been wounded through relationship. But recovery requires safe relationship. Seek a small group, a therapist, a few trusted friends who can be consistently safe. You do not need to disclose your trauma to build relationships — you need to be around people and gradually relearn that safety is possible." },
  { icon: "📖", title: "Use Your Faith as a Resource — Not a Bypass", text: "Prayer, Scripture, and community are genuine resources for trauma healing — not bypasses around clinical treatment. Bring your trauma to God in prayer — specifically, honestly, with the language of the psalms. Use Scripture to anchor your identity when the trauma narrative overwhelms it. But also get clinical help. God works through both." },
];

const scriptures = [
  { verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a smoldering wick he will not snuff out. In faithfulness he will bring forth justice." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Psalm 46:1", text: "God is our refuge and strength, an ever-present help in trouble." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Psalm 30:11-12", text: "You turned my wailing into dancing; you removed my sackcloth and clothed me with joy, that my heart may sing your praises and not be silent." },
  { verse: "2 Corinthians 1:3-4", text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God." },
];

const videos = [
  { id: "pt_1", title: "The Body Keeps the Score — Bessel van der Kolk", channel: "Talks at Google" },
  { id: "pt_2", title: "EMDR Therapy — What It Is and How It Works", channel: "EMDRIA" },
  { id: "pt_3", title: "Trauma, Faith, and Healing — Diane Langberg", channel: "Diane Langberg" },
  { id: "pt_4", title: "PTSD and the Christian — You Are Not Spiritually Broken", channel: "CCEF" },
];

type PTSDEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function PTSDPage() {
  const [tab, setTab] = useState("theology");
  const [ptsdJournal, setPtsdJournal] = useState<PTSDEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_ptsdj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_ptsdj_entries", JSON.stringify(ptsdJournal)); } catch {}
  }, [ptsdJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setPtsdJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setPtsdJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Trauma and Healing</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>PTSD and Recovery</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>Neuroscience, theology, and evidence-based treatment for post-traumatic stress</p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontWeight: 600, color: "#ff9999" }}>Crisis Resources</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: TEXT }}>
            <strong>988 Lifeline:</strong> Call or text 988 — 24/7 crisis support<br />
            <strong>Veterans Crisis Line:</strong> 988 then press 1<br />
            <strong>RAINN:</strong> 1-800-656-4673 — if trauma involves sexual violence
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Theology for the Traumatized Body and Mind</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Voices on Trauma and Healing</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Treatment and Stabilization</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Scripture for the Journey</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: GREEN }}>Your Healing Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries saved privately in your browser. Use this during stable windows — if you are in crisis, please call 988 first.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>Where are you in your healing today?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Today in my healing I am..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What truth is anchoring you beyond the trauma narrative?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="What is anchoring me is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What treatment or practice are you committing to this week?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="This week I am committing to..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {ptsdJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Healing is possible. Begin when you are stable enough.</p>}
            {ptsdJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHERE I AM</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT ANCHORS ME</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>THIS WEEK'S COMMITMENT</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
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
      <Footer />
    </>
  );
}
