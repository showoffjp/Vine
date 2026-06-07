"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Body's Disruption After Birth Is Not a Faith Failure", verse: "Psalm 103:14", text: "For he knows how we are formed, he remembers that we are dust. Postpartum anxiety and depression are hormonal, neurological, and physiological events. They are the body doing something difficult, not the soul failing something spiritual. God knows how we are formed. He made the postpartum body and knows its vulnerabilities." },
  { title: "Elijah Collapsed After Faithful Service — Physical Care Came First", verse: "1 Kings 19:5", text: "The angel of the Lord came back a second time and touched him and said, 'Get up and eat, for the journey is too great for you.' Elijah collapsed with anxiety and despair at a moment of faithful service. God's first response was not correction but physical care — food, rest, presence. This is the model for postpartum care." },
  { title: "Asking for Help Is Not Weakness — The Body of Christ Exists for This", verse: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ. The early church shared resources and care. A new mother who cannot care for herself and an infant alone is not failing — she is in a situation the community was designed for. Asking for help allows others to fulfill their calling." },
  { title: "Perfect Love Casts Out Fear — But Anxiety Is Not Unbelief", verse: "1 John 4:18", text: "There is no fear in love. But perfect love drives out fear. Postpartum anxiety is not the opposite of trusting God. It is a physiological condition with spiritual dimensions. The promise that love casts out fear is a promise for the journey, not an accusation about where you currently are." },
  { title: "God Is Present in the 3am Darkness of New Motherhood", verse: "Psalm 139:8", text: "If I go up to the heavens, you are there; if I make my bed in the depths, you are there. The exhaustion, the anxiety, the 3am feeds, the intrusive thoughts — God is present in all of it. The darkness of postpartum does not hide you from him." },
];

const voices = [
  { id: "v1", name: "Karen Kleiman", role: "Author, This Isn't What I Expected", quote: "Postpartum anxiety and depression are medical events. The mother is not weak, not failing, not bad at motherhood. She is ill and she needs care.", bio: "Kleiman founded the Postpartum Stress Center and has written the most widely-used clinical guides on postpartum mental health. Her work directly counters the shame that keeps new mothers from seeking help." },
  { id: "v2", name: "Rebecca Sapp", role: "Christian Author on Postpartum Mental Health", quote: "The church has been slow to acknowledge that new mothers can be both profoundly grateful for their child and profoundly ill. Both things are true. Neither cancels the other.", bio: "Sapp writes from a Christian perspective about postpartum mental health — how faith communities can respond well rather than adding shame, and what theological frameworks actually help versus those that compound the burden." },
  { id: "v3", name: "Diane Langberg", role: "Psychologist", quote: "The body does not lie. Postpartum symptoms are the body speaking. Caring for the body is caring for the whole person — including the soul.", bio: "Langberg's holistic approach to mental health insists on the body's reality and the legitimacy of medical care for psychiatric conditions, directly countering the tendency in some Christian environments to spiritualize physiological distress." },
  { id: "v4", name: "Rebekah Lyons", role: "Author, Freefall to Fly", quote: "Anxiety is not a spiritual failure. It is often the body's honest response to a world that has exceeded what it was built to hold alone. The gospel comes with community for exactly this reason.", bio: "Lyons writes personally about her own anxiety and panic disorder within a Christian life and motherhood, providing companionship for those experiencing similar distress and insisting on the legitimacy of both faith and medical care." },
];

const practices = [
  { icon: "🏥", title: "Call Your OB or Midwife — Today", text: "Postpartum anxiety and depression are medical conditions with established, effective treatments. Your OB, midwife, or primary care physician can assess your symptoms and connect you to appropriate care, including therapy and medication. Getting help quickly shortens the duration of suffering. Do not wait." },
  { icon: "🤝", title: "Tell Someone the Truth About How You Are", text: "Postpartum anxiety thrives in isolation and secrecy. Telling your partner, a close friend, your pastor, or a family member the actual truth about what you are experiencing is both practically and spiritually necessary. You need concrete help — meals, childcare relief, company — and honest disclosure makes it possible." },
  { icon: "🛏️", title: "Sleep Is Medical Care, Not Neglect", text: "Sleep deprivation dramatically worsens anxiety. Protecting a few hours of uninterrupted sleep — by accepting help with night feeding, by letting the baby be held by another trusted adult — is not selfish neglect. It is medical necessity for recovery." },
  { icon: "📞", title: "Call Postpartum Support International", text: "PSI has a helpline (1-800-944-4773) specifically for postpartum mental health, a provider directory, and online support groups. They can connect you with a therapist who specializes in perinatal mental health and understands what you are going through." },
  { icon: "📖", title: "Pray Short Prayers When Long Ones Are Impossible", text: "Postpartum anxiety makes sustained prayer difficult. Short, honest prayers — 'God, I am not okay. Be with me.' — are complete prayers. You do not have to perform religious function to have access to God. The Holy Spirit intercedes through wordless groans (Romans 8:26)." },
  { icon: "🌱", title: "Distinguish Intrusive Thoughts from Your Character", text: "Postpartum intrusive thoughts — frightening thoughts about harm coming to the baby — are extremely common and are not indicators of dangerous intent or bad motherhood. They are a symptom of anxiety. Telling a therapist about them is important and will not result in losing your child." },
];

const scriptures = [
  { verse: "1 Kings 19:5-7", text: "The angel of the Lord came back a second time and touched him and said, 'Get up and eat, for the journey is too great for you.'" },
  { verse: "Matthew 6:34", text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Psalm 139:8", text: "If I go up to the heavens, you are there; if I make my bed in the depths, you are there." },
  { verse: "Isaiah 40:11", text: "He tends his flock like a shepherd: He gathers the lambs in his arms and carries them close to his heart; he gently leads those that have young." },
  { verse: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
];

type PostpartumEntry = { id: string; date: string; feeling: string; truth: string; help: string };

export default function PostpartumAnxityChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PostpartumEntry[]>([]);
  const [form, setForm] = useState({ feeling: "", truth: "", help: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_postpartumanxietyj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.feeling.trim()) return;
    const e: PostpartumEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_postpartumanxietyj_entries", JSON.stringify(updated));
    setForm({ feeling: "", truth: "", help: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_postpartumanxietyj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Postpartum Mental Health</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Postpartum Anxiety and Depression</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Postpartum anxiety and depression affect 1 in 5 new mothers and are medical conditions, not spiritual failures. This page is for Christian mothers navigating the intersection of postpartum mental health and faith — including the shame that sometimes comes from both directions.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
                  <span style={{ color: MUTED, fontSize: "0.8rem", fontStyle: "italic" }}>{item.verse}</span>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${GREEN}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Crisis Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>Postpartum Support International</strong> — postpartum.net, 1-800-944-4773</li>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — call or text if postpartum symptoms have become a crisis</li>
                <li><strong style={{ color: TEXT }}>Crisis Text Line</strong> — text HOME to 741741</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.feeling} onChange={e => setForm(f => ({ ...f, feeling: e.target.value }))} placeholder="How are you actually feeling right now — without the edited version?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.truth} onChange={e => setForm(f => ({ ...f, truth: e.target.value }))} placeholder="What do you know to be true even when you cannot feel it?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.help} onChange={e => setForm(f => ({ ...f, help: e.target.value }))} placeholder="What help do you need today, and from whom?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Feeling:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Truth:</strong> {e.truth}</p>}
                {e.help && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Help needed:</strong> {e.help}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "mC-zw0zCCtg", title: "Praying Our Fears", channel: "Tim Keller", description: "Keller on the anxiety that will not resolve and how to pray honestly from within it — the posture of prayer that postpartum anxiety makes necessary." },
              { videoId: "7_CGP-12AE0", title: "Peace: Overcoming Anxiety", channel: "Tim Keller", description: "Keller's theology of anxiety — what it is, what Scripture says about it, and the difference between the spiritual and physiological dimensions." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Thompson on how shame operates in the psyche — including the shame of postpartum mental illness that keeps mothers from seeking help." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on the integration of emotional health and spiritual formation — why caring for mental health is a spiritual practice, not a secular compromise." },
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
