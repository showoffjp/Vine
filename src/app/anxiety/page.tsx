"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FOUNDATIONS = [
  { title: "The Most Repeated Command in the Bible", verse: "Isaiah 41:10", body: "'Do not fear' and its variants ('do not be anxious,' 'do not worry,' 'take courage') appear more than 365 times in Scripture. This is not a coincidence or a harsh demand — it is a promise delivered as a command. The command comes attached to a reason: 'Do not fear, for I am with you' (Isaiah 41:10). The antidote to anxiety is not positive thinking or willpower — it is the reality of God's presence." },
  { title: "Anxiety Is Not a Sin — Chronically Refusing God's Peace Is", verse: "Philippians 4:6-7", body: "Anxiety is a normal human response to uncertainty and threat. The disciples were afraid in the storm — Jesus did not rebuke them for being afraid. He invited them to trust. Paul does not say 'you should not feel anxious' but rather 'do not be anxious about anything, but in everything, by prayer and petition... present your requests to God.' The pathway through anxiety is prayer, not denial." },
  { title: "The Body and the Soul Are Connected", verse: "Psalm 42:5", body: "Anxiety is not only spiritual — it has physiological components. God made us as embodied creatures, and the brain's threat-response system (amygdala, cortisol, fight-or-flight) is part of his good design for protection. When it malfunctions or is chronically activated, this is a physiological reality that may require medical, therapeutic, and spiritual care. Telling someone with an anxiety disorder to 'just trust God more' is like telling someone with a broken leg to 'just walk it off.'" },
  { title: "Jesus Was Anxious in Gethsemane", verse: "Matthew 26:38", body: "'My soul is overwhelmed with sorrow to the point of death' (Matt. 26:38). In Gethsemane, Jesus experienced profound anguish — so intense that he sweat drops of blood (Luke 22:44, a recognized physiological response to extreme stress). He did not repress it, perform peace, or deny it. He brought it to the Father in honest, agonized prayer. He is the great high priest who sympathizes with our weakness (Hebrews 4:15) — including anxiety." },
];

const PRACTICES = [
  { title: "Philippians 4 Prayer", icon: "🙏", color: "#3B82F6", desc: "Paul's prescription: 'in everything, by prayer and petition, with thanksgiving, present your requests to God.' This is not a formula — it is a posture. Name what you're anxious about. Bring it to God specifically. Add thanksgiving (not for the anxiety, but for who God is). Repeat.", steps: ["Name the anxiety specifically — don't pray generically", "Make a specific request of God", "Recall something true about God that's relevant to this fear", "End with thanksgiving — not for the fear but for his faithfulness"] },
  { title: "Cognitive Grounding", icon: "🌱", color: "#10B981", desc: "When anxiety is physiologically activated, cognitive work can interrupt the spiral. The 'renewing of the mind' (Romans 12:2) involves actively replacing anxious thoughts with true ones.", steps: ["Notice the anxious thought: 'What am I actually afraid of?'", "Test it: Is this thought true? What does God say about this?", "Replace it: State a true sentence from Scripture", "Do this repeatedly — the mind is retrained through repetition"] },
  { title: "Breath Prayer", icon: "💨", color: PURPLE, desc: "Ancient practice of a short prayer phrase aligned with breath rhythm. Physiologically, slow deep breathing activates the parasympathetic nervous system and reduces cortisol. Spiritually, it anchors attention in God's presence.", steps: ["Inhale slowly (4 counts): 'Lord Jesus'", "Hold (2 counts)", "Exhale slowly (6 counts): 'have mercy on me'", "Repeat 5-10 minutes — especially when anxiety is acute"] },
  { title: "Journaling Anxious Thoughts", icon: "📓", color: "#F59E0B", desc: "Writing anxiety out of the head and onto paper externalizes it, reducing its grip. The act of writing forces the slow-thinking prefrontal cortex to engage, which calms the reactive amygdala.", steps: ["Write the fear without filtering", "Pray over what you wrote — 'Lord, this is what I'm afraid of'", "Write one true sentence about God in response", "Note: not all anxieties resolve on paper — some need community or therapy"] },
  { title: "Seek Community and Help", icon: "🤝", color: "#EF4444", desc: "Chronic, severe, or debilitating anxiety is a medical reality that benefits from professional care — therapy (especially CBT), and in some cases medication. These are not failures of faith; they are the appropriate use of the healing resources God has provided.", steps: ["Tell a trusted friend or pastor what you're experiencing", "Consider seeing a licensed counselor or therapist", "Talk to a doctor if anxiety is physical and persistent", "Don't isolate — anxiety thrives in secrecy and solitude"] },
];

const SCRIPTURE_REMEDIES = [
  { verse: "Matthew 6:34", text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.", focus: "Present-moment focus" },
  { verse: "1 Peter 5:7", text: "Cast all your anxiety on him because he cares for you.", focus: "Release to God" },
  { verse: "Psalm 46:1", text: "God is our refuge and strength, an ever-present help in trouble.", focus: "God's presence" },
  { verse: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", focus: "God's sovereignty" },
  { verse: "2 Timothy 1:7", text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.", focus: "Spirit's empowerment" },
  { verse: "Isaiah 26:3", text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.", focus: "Trust produces peace" },
];

interface AnxietyEntry {
  id: string;
  date: string;
  fear: string;
  truth: string;
}

export default function AnxietyPage() {
  const [activeTab, setActiveTab] = useState<"foundations" | "practices" | "journal">("foundations");
  const [entries, setEntries] = useState<AnxietyEntry[]>(() => {
    try { const s = localStorage.getItem("vine_anxiety_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [form, setForm] = useState({ fear: "", truth: "" });
  const [saved, setSaved] = useState(false);

  useEffect(() => { try { localStorage.setItem("vine_anxiety_journal", JSON.stringify(entries)); } catch {} }, [entries]);

  const save = () => {
    if (!form.fear) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toISOString().split("T")[0], ...form }, ...prev].slice(0, 50));
    setForm({ fear: "", truth: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌊</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Anxiety & Faith</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Anxiety is one of the most common human experiences — and one of the most mishandled in the church. The biblical response is not 'just trust God more' but honest prayer, embodied practice, and real community.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "foundations" as const, label: "Foundations", icon: "📖" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "journal" as const, label: "Fear Journal", icon: "✍️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "foundations" && (
          <div>
            {FOUNDATIONS.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{f.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{f.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{f.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>Scripture on Anxiety</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {SCRIPTURE_REMEDIES.map(s => (
                  <div key={s.verse} style={{ background: BG, borderRadius: 10, padding: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ color: GREEN, fontWeight: 700, fontSize: 13 }}>{s.verse}</span>
                      <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{s.focus}</span>
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>"{s.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {PRACTICES.map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${p.color}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 22 }}>{p.icon}</span>
                  <h3 style={{ color: p.color, fontWeight: 800, fontSize: 17, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, marginBottom: 12 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {p.steps.map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${p.color}20`, border: `1px solid ${p.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: p.color, fontSize: 10, fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                      <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.55 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Based on the Philippians 4 pattern: name the anxiety specifically, then write one true sentence about God in response. This is not denial — it is reorientation.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <div style={{ marginBottom: 12 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 700, display: "block", marginBottom: 6 }}>What are you anxious about? (be specific)</label>
                <textarea value={form.fear} onChange={e => setForm(f => ({ ...f, fear: e.target.value }))}
                  placeholder="I am afraid that..."
                  style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 700, display: "block", marginBottom: 6 }}>What is true about God in relation to this fear?</label>
                <textarea value={form.truth} onChange={e => setForm(f => ({ ...f, truth: e.target.value }))}
                  placeholder="But God is / God says..."
                  style={{ width: "100%", minHeight: 70, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
              </div>
              <button onClick={save}
                style={{ width: "100%", padding: "12px", background: saved ? GREEN : PURPLE, border: "none", borderRadius: 8, color: saved ? BG : "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
                {saved ? "✓ Saved" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div>
                <h4 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 12 }}>Past Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                      <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{new Date(e.date + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div>
                      <div style={{ color: "#EF4444", fontWeight: 600, fontSize: 14, marginBottom: 4, fontStyle: "italic" }}>"{e.fear}"</div>
                      {e.truth && <div style={{ color: GREEN, fontSize: 14, fontStyle: "italic" }}>"{e.truth}"</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
