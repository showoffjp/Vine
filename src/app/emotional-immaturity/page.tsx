"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Spiritual Maturity and Emotional Maturity Cannot Be Separated", verse: "1 Corinthians 13:11", text: "When I was a child, I talked like a child, I thought like a child, I reasoned like a child. When I became a man, I put the ways of childhood behind me. Paul uses emotional and relational development as the direct analogy for spiritual maturity. Many Christians achieve doctrinal sophistication while remaining emotionally adolescent — reactive, unable to tolerate others' different emotions, conflict-avoidant, self-absorbed. Emotional growth is not separate from sanctification. It is sanctification." },
  { title: "Self-Awareness Is the Beginning of Change", verse: "Psalm 139:23-24", text: "Search me, God, and know my heart; test me and know my anxious thoughts. See if there is any offensive way in me, and lead me in the way everlasting. David's prayer is a prayer for emotional self-knowledge mediated by God's gaze. The emotionally immature person is characterized precisely by low self-awareness — they do not see their patterns, their impact, their reactive defenses. Asking God to search you is the beginning of the growth that relational life requires." },
  { title: "Emotional Avoidance Is Not Strength", verse: "John 11:35", text: "Jesus wept. The shortest verse in Scripture is also one of its most revealing. Jesus — fully divine, fully knowing Lazarus would be raised — still wept. Emotional engagement is not weakness; it is full humanity. The man or woman who has learned to suppress, dismiss, or intellectualize feelings has not achieved strength. They have achieved a kind of amputation — and it damages everyone around them." },
  { title: "The Image of God Includes Emotional Capacity", verse: "Genesis 6:6", text: "The Lord regretted that he had made human beings on the earth, and his heart was deeply troubled. God has emotions in Scripture — grief, joy, anger, delight, compassion. To be made in God's image is to be made with emotional capacity as a feature, not a bug. Christians who treat emotions as spiritually irrelevant or as obstacles to faith are rejecting a core component of the imago Dei." },
  { title: "Love Requires Emotional Presence", verse: "Romans 12:15", text: "Rejoice with those who rejoice; mourn with those who mourn. Paul's command to emotional co-presence is not optional relational advice. It is the grammar of love in community. Emotional immaturity makes this impossible — the person who cannot access their own grief cannot sit with another's. Growing into the capacity to be emotionally present to others is a direct expression of the love command." },
];

const voices = [
  { id: "v1", name: "Peter Scazzero", role: "Pastor, Author", quote: "Emotional health and spiritual maturity cannot be separated. It is impossible to be spiritually mature while remaining emotionally immature.", bio: "Peter Scazzero is the founder of Emotionally Healthy Spirituality and the author of the book by the same title, as well as The Emotionally Healthy Leader and Emotionally Healthy Discipleship. His work has been the most widely influential Christian framework for understanding how emotional immaturity stunts genuine spiritual growth and what developing emotional adulthood requires in the context of discipleship." },
  { id: "v2", name: "Lindsay Gibson, PsyD", role: "Clinical Psychologist, Author", quote: "Emotionally immature parents leave their children feeling unseen — not because of overt abuse but because of emotional unavailability. The wound is the absence of genuine contact.", bio: "Dr. Lindsay Gibson is the author of Adult Children of Emotionally Immature Parents, which has become a landmark resource for people raised by parents with limited emotional capacity. Her work helps adults identify how early emotional unavailability shaped their own development, relationships, and internal world — and provides a framework for healing that does not require parents to change." },
  { id: "v3", name: "Curt Thompson, MD", role: "Psychiatrist, Author", quote: "The emotionally underdeveloped person is not weak — they are defended. They learned to protect themselves from pain in early life, and those protections became the obstacles to the connection they desperately need.", bio: "Curt Thompson is a psychiatrist and the author of Anatomy of the Soul and The Soul of Shame. His integration of neuroscience, attachment theory, and Christian theology offers one of the most sophisticated frameworks available for understanding how early relational experience shapes emotional capacity — and how healing happens through attuned relationships." },
  { id: "v4", name: "David Richo", role: "Psychotherapist, Author", quote: "The five A's of love — attention, acceptance, appreciation, affection, and allowing — are what most of us did not receive adequately in childhood, and what we most need to learn to give.", bio: "David Richo is a psychotherapist and author of How to Be an Adult in Relationships, which provides a framework for recognizing emotional immaturity and growing into relational adulthood. While not a Christian writer, his psychological framework integrates well with Christian anthropology and has been widely used in Christian therapeutic and discipleship contexts." },
];

const practices = [
  { icon: "🔍", title: "Identify Your Default Defenses", text: "Common emotional immaturity patterns include: emotional withdrawal when uncomfortable, deflecting with humor, quickly reassuring rather than listening, becoming defensive when given feedback, intellectualizing rather than feeling. Name your specific patterns — not with shame, but with the honesty that makes change possible." },
  { icon: "📊", title: "Develop an Emotional Vocabulary", text: "Many emotionally immature people have a three-word vocabulary: good, bad, fine. Research by Brené Brown shows that emotional granularity — the ability to name specific emotions — is directly tied to emotional resilience. Practice naming: not just 'sad' but 'disappointed,' 'ashamed,' 'grieving,' 'helpless.' The precision matters." },
  { icon: "⏸️", title: "Practice the Pause", text: "Emotional reactivity — responding immediately from a triggered emotional state — is the hallmark of emotional immaturity. The practice of pausing before responding (taking a breath, saying 'let me think about that,' leaving the room for five minutes) creates the space in which emotional choice is possible." },
  { icon: "🧑‍🤝‍🧑", title: "Seek Relationship Rather Than Avoiding It", text: "Emotional growth happens in relationship, not in isolation. This means staying in hard conversations rather than withdrawing. It means remaining present when others are emotionally intense. It means asking for feedback and sitting with what you hear. The very discomfort is the growing edge." },
  { icon: "🏥", title: "Work with a Therapist Who Understands Attachment", text: "Emotional immaturity is typically rooted in early attachment experiences. A therapist trained in attachment theory — or internal family systems (IFS), EMDR, or emotionally focused therapy — can provide the kind of attuned relationship in which the emotional system itself learns to regulate differently." },
  { icon: "📖", title: "Read Emotionally Healthy Spirituality", text: "Peter Scazzero's book is the single most accessible entry point for Christians who want to understand how emotional immaturity limits their spiritual and relational life — and what a practical path toward integration looks like in the context of faith and community." },
];

const scriptures = [
  { verse: "1 Corinthians 13:11", text: "When I was a child, I talked like a child, I thought like a child, I reasoned like a child. When I became a man, I put the ways of childhood behind me." },
  { verse: "Psalm 139:23-24", text: "Search me, God, and know my heart; test me and know my anxious thoughts. See if there is any offensive way in me, and lead me in the way everlasting." },
  { verse: "Proverbs 4:23", text: "Above all else, guard your heart, for everything you do flows from it." },
  { verse: "Romans 12:15", text: "Rejoice with those who rejoice; mourn with those who mourn." },
  { verse: "Ephesians 4:15", text: "Instead, speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ." },
];

type EIEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function EmotionalImmaturityPage() {
  const [tab, setTab] = useState("theology");
  const [eiJournal, setEiJournal] = useState<EIEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setEiJournal(JSON.parse(localStorage.getItem("vine_emotionalimmaturityj_entries") ?? "[]")); } catch { setEiJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: EIEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...eiJournal];
    setEiJournal(updated);
    localStorage.setItem("vine_emotionalimmaturityj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = eiJournal.filter(e => e.id !== id);
    setEiJournal(updated);
    localStorage.setItem("vine_emotionalimmaturityj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌱</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Emotional Immaturity</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>Growing into emotional adulthood — because you cannot separate spiritual maturity from emotional health.</p>
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
              <textarea placeholder="What emotional pattern am I most aware of in myself right now?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What does growth look like in this area?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One specific practice I will try this week:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {eiJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}>Practice: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "The foundational talk on why emotional health and spiritual maturity cannot be separated — and what emotional adulthood requires in the context of Christian discipleship." },
              { videoId: "jmz1l-BqXxU", title: "Emotionally Healthy Churches", channel: "Peter Scazzero", description: "Scazzero on how the church itself can model and cultivate emotional maturity rather than inadvertently reinforcing patterns of emotional immaturity in community life." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Curt Thompson on how shame and emotional underdevelopment are connected — and how the neuroscience of attachment explains why emotional growth requires safe relationships." },
              { videoId: "psN1DORYYV0", title: "The Gift of Imperfection", channel: "Brené Brown TED", description: "Brené Brown on how vulnerability and emotional honesty — the very things emotional immaturity avoids — are the foundations of authentic connection and wholehearted living." },
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
