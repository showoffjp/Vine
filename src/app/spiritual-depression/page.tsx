"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Dark Night of the Soul Is a Christian Tradition", verse: "Psalm 88:18", text: "You have taken from me friend and neighbor — darkness is my closest friend. Psalm 88 is unique in the Psalter: it is the only lament psalm that ends in darkness with no resolution, no turn toward praise. John of the Cross named this experience the dark night of the soul — a season in which God withdraws felt presence to deepen the soul's dependence on him. Spiritual depression is not new, not pathological by nature, and has been named and navigated by some of the most faithful Christians in history." },
  { title: "The Greatest Did Not Escape Spiritual Darkness", verse: "1 Kings 19:4", text: "He came to a broom bush, sat down under it and prayed that he might die. 'I have had enough, Lord,' he said. 'Take my life; I am no better than my ancestors.' Elijah — the prophet who had just called down fire from heaven — sat under a broom tree wanting to die. He was depleted, suicidal, spiritually empty. God's response was not rebuke. It was food, rest, and gentleness. The pattern is instructive: spiritual depression often follows periods of great spiritual exertion, and God's remedy begins with physical care." },
  { title: "Spiritual Depression Can Involve Clinical Depression', verse: 'Proverbs 18:14", text: "The human spirit can endure in sickness, but a crushed spirit — who can bear it? The distinction between spiritual darkness and clinical depression is important but not always clean. Many people experiencing spiritual depression are also experiencing clinical depression — which has neurological, physiological, and relational dimensions that spiritual disciplines alone cannot address. Both deserve care. Getting clinical support for depression is not a failure of faith; it is stewardship of the God-given mind and body." },
  { title: "God Is Present in the Darkness Even When Not Felt', verse: 'Isaiah 45:15", text: "Truly you are a God who has been hiding himself, the God and Savior of Israel. Isaiah names it plainly: God hides. The experience of God's absence is not always evidence of God's actual absence. The hiddenness of God is a biblical category — acknowledged, not explained. Those in spiritual depression who feel God has left are not experiencing something outside the biblical frame. They are experiencing exactly what Psalm 88 describes. The darkness is not evidence that they are wrong; it is evidence that they are being honest." },
  { title: "The Resurrection Grounds Hope Even When Not Felt', verse: '1 Corinthians 15:20", text: "But Christ has indeed been raised from the dead, the firstfruits of those who have fallen asleep. The hope of the resurrection is not a feeling. It is a fact whose truth does not depend on whether you feel it. One of the resources available to those in spiritual depression is the objective truth of the resurrection — a historical claim that is either true or false, not a spiritual experience that rises and falls. Intellectual assent to what you cannot currently feel is itself a form of faith." },
];

const voices = [
  { id: "v1", name: "Martyn Lloyd-Jones", role: "Preacher, Author", quote: "The greatest need of the hour is a return to that Puritanism which was not afraid to talk about spiritual depression, because it believed both in the reality of the human condition and the sufficiency of the grace of God.", bio: "Martyn Lloyd-Jones was the most significant preacher of the twentieth century and the author of Spiritual Depression: Its Causes and Cure. His book — a series of sermons from Philippians — addresses the full range of spiritual darkness with theological depth, pastoral warmth, and clinical insight unusual for his era. It remains one of the most important resources available for Christians experiencing spiritual depression." },
  { id: "v2", name: "John of the Cross", role: "16th-Century Mystic, Doctor of the Church", quote: "The dark night of the soul is a stripping away of the soul's dependency on felt consolation — so that its faith might rest on God himself, not on the experiences God gives.", bio: "John of the Cross was a 16th-century Spanish mystic and poet whose treatise The Dark Night of the Soul has shaped Christian understanding of spiritual depression and desolation for centuries. His framework distinguishes between the active night (chosen spiritual discipline) and the passive night (God's withdrawal of felt presence) and has helped countless Christians understand seasons of spiritual darkness as part of the soul's formation rather than its failure." },
  { id: "v3", name: "Spurgeon", role: "19th-Century Preacher", quote: "I am the subject of depressions of spirit so fearful that I hope none of you ever get to such extremes of wretchedness as I go to. But I always get back again by this — I know I trust Christ. I have no reliance but in him.", bio: "Charles Spurgeon experienced profound and recurring spiritual depression throughout his ministry, preaching about it with remarkable candor from the pulpit. His autobiography and correspondence reveal a man who navigated the darkest spiritual seasons while continuing to preach the gospel — his example has been a lifeline to countless Christians who assumed that depression disqualified them from genuine faith." },
  { id: "v4", name: "Matthew Stanford", role: "Psychologist, Author", quote: "The church has sometimes told people with depression to pray more, trust more, or sin less. This advice is not only unhelpful — for those with clinical depression, it can be genuinely dangerous.", bio: "Matthew Stanford is a neuroscientist, psychologist, and the author of The Biology of Sin and Grace for the Afflicted. He addresses the church's often inadequate response to mental health crises — including spiritual depression — and provides a framework for integrating genuine faith with clinical care in a way that honors both the spiritual and physical dimensions of human suffering." },
];

const practices = [
  { icon: "😴", title: "Begin with Physical Care", text: "God's response to Elijah's spiritual depression was food, water, and sleep — before any spiritual instruction. If you are in spiritual depression, begin with basics: sleep, nutrition, exercise, sunlight. The body and spirit are not separate. Neglecting physical care while seeking spiritual breakthrough often produces neither." },
  { icon: "🏥", title: "Pursue Clinical Assessment", text: "If the darkness persists beyond weeks, if it is accompanied by loss of function, persistent hopelessness, or thoughts of self-harm — seek clinical assessment. Depression is treatable. Getting help is not a failure of faith; it is a refusal to suffer unnecessarily from something God has provided means to address." },
  { icon: "📖", title: "Read Psalm 88 and Psalm 46 Together", text: "Psalm 88 ends in darkness; Psalm 46 declares God as refuge even when the earth gives way. Reading both together — refusing to skip the darkness or the hope — models the honest posture faith requires in spiritual depression." },
  { icon: "🤝", title: "Tell a Trusted Person What You Are Experiencing", text: "Spiritual depression thrives in secrecy and shame. Telling one trusted person — a pastor, counselor, or close friend — breaks the isolation and gives your experience a witness. You do not have to have a resolution or a testimony to share it. Sharing it as it is is enough." },
  { icon: "🕯️", title: "Maintain Practices Without Requiring Feeling", text: "Spiritual disciplines — prayer, Scripture reading, gathering with the community, communion — can be maintained even when they produce no felt experience. Continuing these practices in the darkness, without requiring that they feel meaningful, is itself an act of faith. The feelings may return; the practices hold the space for them." },
  { icon: "🙏", title: "Pray the Psalms of Desolation", text: "Psalms 13, 22, 42, 43, 88, and 130 were written for exactly this. Pray them as your own words, not as liturgy you are performing. The fact that they are in Scripture is God's permission to feel exactly what you feel and bring it to him exactly as it is." },
];

const scriptures = [
  { verse: "Psalm 88:18", text: "You have taken from me friend and neighbor — darkness is my closest friend." },
  { verse: "1 Kings 19:5", text: "All at once an angel touched him and said, 'Get up and eat.'" },
  { verse: "Psalm 42:5", text: "Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God." },
  { verse: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you." },
  { verse: "1 Corinthians 15:20", text: "But Christ has indeed been raised from the dead, the firstfruits of those who have fallen asleep." },
];

type SDEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function SpiritualDepressionPage() {
  const [tab, setTab] = useState("theology");
  const [sdJournal, setSdJournal] = useState<SDEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setSdJournal(JSON.parse(localStorage.getItem("vine_spiritualdepressionj_entries") ?? "[]")); } catch { setSdJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: SDEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...sdJournal];
    setSdJournal(updated);
    localStorage.setItem("vine_spiritualdepressionj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = sdJournal.filter(e => e.id !== id);
    setSdJournal(updated);
    localStorage.setItem("vine_spiritualdepressionj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #0a1f14 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌑</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Spiritual Depression</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>The dark night of the soul — when God feels absent and faith feels hollow. Elijah sat under a broom tree. You are not alone.</p>
        <div style={{ background: "#0a1f14", border: `1px solid ${GREEN}`, borderRadius: 8, padding: "0.75rem 1.25rem", maxWidth: 480, margin: "0 auto", fontSize: "0.85rem", color: MUTED }}>
          <strong style={{ color: GREEN }}>If in crisis:</strong> 988 Lifeline &nbsp;|&nbsp; Crisis Text: text HOME to 741741
        </div>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
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
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
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
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${GREEN}` }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="What does the darkness feel like right now? How long has it been?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What do I still know to be true, even when I cannot feel it?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One small practice I will maintain even without feeling:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {sdJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}>Maintaining: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7TBHqMqBmBo", title: "Lament in the Darkness", channel: "Mark Vroegop", description: "Vroegop on how the psalms of desolation give language for spiritual darkness — and how staying in the lament is itself a form of faith." },
              { videoId: "mC-zw0zCCtg", title: "Praying When God Seems Absent", channel: "Tim Keller", description: "Keller on prayer in seasons of spiritual darkness — when God feels far and prayer feels empty — and what sustains the practice when feeling does not." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame and Spiritual Desolation", channel: "Curt Thompson", description: "Curt Thompson on how shame and spiritual depression interact — and how understanding the neurological and relational dimensions of darkness informs genuine healing." },
              { videoId: "7KMPN9OLoNo", title: "Suffering and God's Grace", channel: "Joni Eareckson Tada", description: "Joni on what sustains faith when God feels absent — drawn from decades of navigating physical and spiritual darkness with hard-won theological honesty." },
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
  );
}
