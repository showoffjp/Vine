"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Anger Itself Is Not Sin", verse: "Ephesians 4:26", text: "In your anger do not sin: Do not let the sun go down while you are still angry. Paul's command assumes that anger happens — he does not say 'do not be angry.' He says 'in your anger, do not sin.' Anger is a signal: it alerts us that something we care about has been threatened or violated. The emotion itself is part of being made in the image of a God who is angry at injustice. Chronic anger, however — anger that has calcified into a permanent orientation — points to something else beneath the surface." },
  { title: "The Anger That Harms Others Is Addressed Seriously", verse: "James 1:19-20", text: "Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires. James is not writing about righteous indignation at injustice — he is writing about the reactive, self-serving anger that arises when we feel crossed or unheard. This anger does not produce righteousness in ourselves or others. It damages relationships, silences the vulnerable, and contradicts the character of the God in whose image we bear ourselves." },
  { title: "Anger Often Covers Grief or Fear", verse: "Job 3:1-3", text: "After this, Job opened his mouth and cursed the day of his birth. He said: 'May the day of my birth perish...' Job's raw anguish — which reads as almost violent in its expression — emerges from devastation and despair. Many chronically angry people are people whose grief has had no language or outlet. Anger is louder than grief; it feels more powerful than fear; it is easier to sustain than sadness. What appears to be anger is often a protection over something more painful." },
  { title: "God's Anger Is Purposeful; Human Anger Often Is Not", verse: "Numbers 14:18", text: "The Lord is slow to anger, abounding in love and forgiving sin and rebellion. God's anger is consistent with his perfect character — it arises in response to injustice and evil, it is patient, and it serves his purposes of justice and restoration. Human chronic anger often has no such discipline — it becomes a default emotional posture that pre-empts listening, damages the innocent, and serves the ego rather than righteousness." },
  { title: "Anger Management Is Not the Same as Healing", verse: "Ezekiel 36:26", text: "I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh. The goal is not to suppress or manage anger better. The goal is a transformed heart — one that is soft rather than hardened, curious rather than defensive, slow to react rather than hair-trigger. God's promise of a new heart is the ultimate vision for what healing chronic anger actually requires." },
];

const voices = [
  { id: "v1", name: "Matthew McKay, PhD", role: "Clinical Psychologist, Author", quote: "Chronic anger is almost always maintained by a belief system — a set of rules about how the world must be and how people must treat us. Identifying and challenging those rules is the core of anger treatment.", bio: "Matthew McKay is the author of When Anger Hurts and McKay Fanning's The Anger Control Workbook — among the most widely used clinical resources for anger management. His cognitive-behavioral framework for identifying the belief systems that fuel chronic anger aligns well with Christian frameworks for identifying idols and misplaced expectations." },
  { id: "v2", name: "Dan Allender", role: "Psychologist, Author", quote: "Anger is almost always a secondary emotion. It covers something that feels more vulnerable — grief, shame, fear, despair. Working with anger means being willing to go beneath it.", bio: "Dan Allender is a psychologist, author of The Wounded Heart and Bold Love, and founder of the Allender Center. His work on the relationship between anger, trauma, shame, and vulnerability provides a theologically and psychologically sophisticated framework for Christians working through chronic anger — going beneath surface behavior to the stories and wounds that sustain it." },
  { id: "v3", name: "Gary Chapman", role: "Author, Counselor", quote: "Anger that is not processed honestly becomes a slow poison — to the person carrying it and to everyone around them. Expressing anger is not the goal; processing it is.", bio: "Gary Chapman is best known for The Five Love Languages but his work Anger: Handling a Powerful Emotion in a Healthy Way addresses Christian anger management from a pastoral and counseling perspective. He distinguishes between definitive anger (arising from genuine injustice) and distorted anger (arising from selfishness or distorted perception) and provides practical frameworks for each." },
  { id: "v4", name: "Brené Brown", role: "Research Professor, Author", quote: "Anger is a full-contact emotion. When we can't tolerate vulnerability, we use anger as armor — it's more comfortable to be angry than to be hurt, sad, or afraid.", bio: "Brené Brown's research on vulnerability, shame, and emotion has been widely applied in Christian contexts. Her insight that anger often functions as armor over more vulnerable emotions — particularly for men who have been socialized to suppress grief and fear — has helped many Christians understand the function of their chronic anger in a way that opens the door to actual change." },
];

const practices = [
  { icon: "🔍", title: "Identify What Is Under the Anger", text: "The next time you feel angry, ask: What is underneath this? Usually there is a vulnerability — disappointment, rejection, grief, fear, humiliation, helplessness. Naming the underlying emotion does not remove the anger, but it gives you access to what actually needs attention." },
  { icon: "⏸️", title: "Implement a Physical Stop", text: "Chronic anger is often enacted before the rational mind has a chance to intervene. A physical stop — leaving the room, pressing your feet into the floor and breathing for ten counts, splashing cold water on your face — interrupts the automatic escalation sequence and creates a window for choice." },
  { icon: "📋", title: "Map Your Anger Triggers", text: "Keep a simple log for two weeks: when did you get angry, how intense was it (1-10), and what happened just before. Patterns will emerge. Knowing your specific triggers gives you the advance notice to prepare rather than react." },
  { icon: "💬", title: "Repair After Anger Episodes", text: "If anger has damaged a relationship, the work of repair — acknowledging impact, taking responsibility for the anger without over-explaining it — is how relationships are rebuilt and how you begin to experience a different outcome from your anger. The pattern changes when the consequences change." },
  { icon: "🏥", title: "Seek Professional Help for Explosive or Persistent Anger", text: "If anger has led to violence, relationship damage, job loss, or persistent inability to control it despite effort, working with a clinical psychologist trained in anger treatment (cognitive-behavioral therapy, emotion regulation, somatic approaches) is not weakness — it is wisdom." },
  { icon: "🙏", title: "Pray for the Soft Heart God Promised", text: "Ezekiel 36:26 is a promise of transformation, not a moral demand. Pray it as a petition: 'Remove from me the heart of stone.' Tell God specifically where your heart is hardened. Ask for the softening that only he can provide — and then do the relational and therapeutic work that is your part." },
];

const scriptures = [
  { verse: "Ephesians 4:26-27", text: "In your anger do not sin: Do not let the sun go down while you are still angry, and do not give the devil a foothold." },
  { verse: "James 1:19-20", text: "Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires." },
  { verse: "Proverbs 14:29", text: "Whoever is patient has great understanding, but one who is quick-tempered displays folly." },
  { verse: "Ezekiel 36:26", text: "I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh." },
  { verse: "Psalm 4:4", text: "Tremble and do not sin; when you are on your beds, search your hearts and be silent." },
];

type CAEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ChronicAngerPage() {
  const [tab, setTab] = useState("theology");
  const [caJournal, setCaJournal] = useState<CAEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setCaJournal(JSON.parse(localStorage.getItem("vine_chronicangerj_entries") ?? "[]")); } catch { setCaJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: CAEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...caJournal];
    setCaJournal(updated);
    localStorage.setItem("vine_chronicangerj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = caJournal.filter(e => e.id !== id);
    setCaJournal(updated);
    localStorage.setItem("vine_chronicangerj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🔥</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Chronic Anger</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>When anger has become a way of life — finding what is beneath it and receiving a softer heart.</p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: TEXT }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.95rem" }}>"{v.quote}"</p>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${PURPLE}` }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="Where does my anger show up most? What is underneath it?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What would it look like to have a softer heart in this area?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One specific practice I am committing to:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {caJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}>Commitment: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "ZwDlGPCEUoE", title: "Healing Relational Trauma and Anger", channel: "Dan Allender", description: "Dan Allender on how relational trauma fuels chronic anger and how genuine healing addresses the story beneath the emotion rather than just the behavior." },
              { videoId: "psN1DORYYV0", title: "The Gift of Imperfection", channel: "Brené Brown TED", description: "Brené Brown on how anger functions as armor over vulnerability and why emotional honesty is the gateway to the connection that defuses chronic reactive anger." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on how unprocessed emotion — including chronic anger — stunts spiritual growth and what emotional adulthood requires in community." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Curt Thompson on how shame and anger are often intertwined — and how understanding the shame beneath the anger transforms the path to healing." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
