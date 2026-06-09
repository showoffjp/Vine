"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Complex Trauma Is Formed by Repeated Wounding — Not One Event", verse: "Psalm 22:14-15", text: "I am poured out like water, and all my bones are out of joint... My strength is dried up like a potsherd; and my tongue cleaveth to my jaws; and thou hast brought me into the dust of death. C-PTSD (Complex Post-Traumatic Stress Disorder) develops from prolonged, repeated exposure to trauma — childhood abuse, domestic violence, captivity, repeated medical trauma — rather than from a single event. The resulting symptoms include those of PTSD plus: difficulty regulating emotions, distorted self-perception, relationship difficulties, and a sense of the world as permanently dangerous. The psalmist's language of being poured out, dried up, brought to dust — this is the language of the person who has been repeatedly brought to the edge." },
  { title: "You Were Wounded — You Are Not the Wounding", verse: "Isaiah 61:1-3", text: "He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners... to bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning. The anointing described in Isaiah 61 is specifically directed at those who are broken, captive, and in darkness — the same states produced by complex trauma. The identity offered in this text is not: you are a traumatized person. It is: you are the person to whom the anointed one has been sent. You are worth the mission." },
  { title: "God Does Not Shame the Survivor for Survival Strategies", verse: "Matthew 9:36", text: "When he saw the crowds, he had compassion on them, because they were harassed and helpless, like sheep without a shepherd. The dissociation, the hypervigilance, the difficulty trusting, the emotional numbing, the self-destructive coping — these are not character flaws in complex trauma survivors. They are survival strategies developed in situations where normal functioning was not possible. God's posture toward the person who developed these strategies is the same as toward the harassed and helpless crowds: compassion, not contempt." },
  { title: "Healing Is Real — and It Takes Time", verse: "Luke 8:43-44", text: "And a woman was there who had been subject to bleeding for twelve years... She came up behind him and touched the edge of his cloak, and immediately her bleeding stopped. Twelve years. Jesus healed a woman whose condition was chronic, not acute. He did not hurry her healing or require her to have healed faster. He noticed her, named her healing, and called her daughter. God's healing work in complex trauma is real — people do recover. And it typically takes years, requires professional support, and is not linear. Both things are true." },
  { title: "Community Is Essential — and Terrifying", verse: "Hebrews 10:24-25", text: "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another. Complex trauma often develops through relationship — through people who were supposed to be safe and weren't. This makes the church's call to community simultaneously essential and threatening for many survivors. Genuine healing from complex trauma requires safe relationship over time. The church that can provide consistently safe relationship — without demanding premature trust, without spiritual bypass — is offering what the survivor most needs." },
];

const voices = [
  { id: "dl", name: "Diane Langberg", role: "Psychologist, Author of Suffering and the Heart of God", quote: "Complex trauma is the trauma of relationship — the harm done when the very relationships that should have provided safety instead became the source of repeated wounding. Healing from that kind of harm also requires relationship — safe, consistent, patient, truthful relationship. The therapist, the faithful friend, the church community that stays — these are the healing agents.", bio: "Langberg's clinical work specifically addresses complex trauma from relational sources — including childhood abuse, domestic violence, and spiritual abuse. Her theological depth and clinical precision make her the most important Christian voice in this space." },
  { id: "jh", name: "Judith Herman", role: "Author, Trauma and Recovery", quote: "The fundamental stages of recovery are establishing safety, reconstructing the trauma story, and restoring the connection between survivors and their community. These cannot be rushed, and they cannot be replaced by spiritual disciplines alone.", bio: "Herman's Trauma and Recovery is the foundational clinical text on complex trauma. Her articulation of the three-stage healing process (safety, mourning/remembrance, reconnection) remains the most broadly used framework in trauma treatment." },
  { id: "pv", name: "Peter Levine", role: "Author, Waking the Tiger; Somatic Experiencing Developer", quote: "The body keeps the score of complex trauma. The healing of complex trauma requires attending to the body — the places where the trauma is held physically, the nervous system responses that were adaptive in danger and are now dysregulated in safety. You cannot think your way out of a body-held wound.", bio: "Levine's somatic work provides crucial insight into why talk therapy alone is often insufficient for complex trauma treatment — the trauma lives in the body and requires body-based interventions for full healing." },
];

const practices = [
  { icon: "🧠", title: "Seek a C-PTSD-Informed Therapist", text: "Complex trauma requires treatment that addresses the full range of its impact: not just symptoms but the relational, identity, and somatic dimensions. Look for therapists trained in: EMDR (trauma memory processing), IFS (Internal Family Systems — for fragmented sense of self), SE (Somatic Experiencing — for body-held trauma), DBT (Dialectical Behavior Therapy — for emotion regulation). Psychology Today's therapist finder allows filtering by complex trauma. The treatment is available and effective; it takes time." },
  { icon: "🛡️", title: "Build Safety Before Processing", text: "In complex trauma treatment, safety must come before trauma processing. This means stabilizing symptoms, developing coping skills, establishing a consistent therapeutic relationship, and creating a stable life environment. Jumping directly into trauma memory processing before safety is established can destabilize rather than heal. If a therapist is moving quickly into processing and you feel unsafe, that is information — a good trauma therapist will honor the pace the nervous system needs." },
  { icon: "🫁", title: "Learn to Work With Your Nervous System", text: "Complex trauma produces chronic nervous system dysregulation — hyperactivation (fight/flight/freeze) or hypoactivation (shutdown/dissociation). Learning to recognize your own nervous system states and to regulate them is a foundational skill. Techniques: box breathing (inhale 4, hold 4, exhale 4, hold 4), cold water on the face, bilateral stimulation, grounding (feet on floor, name 5 things you see), co-regulation (being with a safe person). These are not cures — they are stabilization tools." },
  { icon: "🤝", title: "Approach Relationship Gradually and With Realistic Expectations", text: "Complex trauma survivors often oscillate between craving and fearing relationship. Building genuine connection requires finding the few people who can be consistently safe (not perfect — safe), and gradually increasing depth and vulnerability at a pace the nervous system can tolerate. This is not the same as isolating indefinitely. It is the patient, incremental rebuilding of the capacity for trust that trauma has damaged. A therapist who understands attachment trauma can guide this process." },
  { icon: "✝️", title: "Use Spiritual Resources Without Using Them as Bypass", text: "Scripture, prayer, and community are genuine resources for complex trauma healing — but they can also be used to bypass the clinical work that the severity of the wound requires. Both are necessary. A spiritual director who understands trauma can help you navigate the spiritual dimensions without using spirituality to avoid the clinical work. The CCEF (ccef.org) and other Christian counseling centers have counselors who hold both frameworks." },
];

const scriptures = [
  { verse: "Isaiah 61:1-3", text: "He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners, to proclaim the year of the Lord's favor and the day of vengeance of our God, to comfort all who mourn." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "2 Corinthians 1:3-4", text: "Praise be to the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God." },
  { verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a smoldering wick he will not snuff out." },
  { verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
];


type CTEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ComplexTraumaPage() {
  const [tab, setTab] = useState("theology");
  const [ctJournal, setCtJournal] = useState<CTEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_complextraumaj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_complextraumaj_entries", JSON.stringify(ctJournal)); } catch {}
  }, [ctJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setCtJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setCtJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Trauma & Healing</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Complex Trauma (C-PTSD)</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          The wound of repeated harm — and the slow, real, possible work of healing.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Healing Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>Where am I in my healing today — what is activated or what is calm?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What is true about who I am beneath the wound?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One small step toward safety or healing today</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {ctJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {ctJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Today: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Identity: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Step: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "53RX2ESIqLM", title: "The Body Keeps the Score — Bessel van der Kolk", channel: "The Commonwealth Club", description: "Van der Kolk explains how complex trauma is stored in the body, why traditional talk therapy alone is often insufficient, and what embodied healing approaches actually work." },
              { videoId: "ZGk1hl1nNrw", title: "Complex Trauma and Compassion Fatigue", channel: "Diane Langberg", description: "Langberg on the clinical and spiritual dimensions of complex trauma — what it looks like, why healing takes time, and what the church's role is in creating safety for survivors." },
              { videoId: "ZwDlGPCEUoE", title: "Healing Relational Trauma — Dan Allender", channel: "The Allender Center", description: "Allender on the journey of healing from relational trauma — what it requires, why the church often fails survivors, and what genuine restoration looks like." },
              { videoId: "6p_yaNFSYao", title: "Trauma and the Gospel", channel: "The Gospel Coalition", description: "How the gospel speaks specifically to trauma survivors — addressing the theological questions that complex trauma raises with pastoral honesty." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
