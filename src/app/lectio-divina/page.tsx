"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const MOVEMENTS = [
  {
    id: "lectio",
    latin: "Lectio",
    english: "Read",
    icon: "📖",
    color: "#3B82F6",
    duration: "3-5 min",
    instruction: "Read the passage slowly. Aloud if possible. Not to study — to listen. Read it again. A third time. Let the words settle without rushing to interpretation.",
    question: "What word or phrase is standing out to you right now?",
    tip: "If a word or phrase seems to shimmer or repeat in your attention, pause. That is likely the Spirit's invitation point.",
  },
  {
    id: "meditatio",
    latin: "Meditatio",
    english: "Meditate",
    icon: "🤔",
    color: PURPLE,
    duration: "5-8 min",
    instruction: "Take the word or phrase that stood out and turn it over slowly in your mind. Chew on it like food. What images does it evoke? What memories? What questions does it raise? Let it resonate with your life today.",
    question: "How does this word or phrase connect with your life right now?",
    tip: "Ancient readers would often memorize and repeat ('ruminate on') a verse throughout the day. This is not study — it is prayerful pondering.",
  },
  {
    id: "oratio",
    latin: "Oratio",
    english: "Pray",
    icon: "🙏",
    color: "#10B981",
    duration: "5-8 min",
    instruction: "Now respond to God through what arose in meditation. Speak naturally — gratitude, petition, confession, or simply being with him. Your prayer should be in direct conversation with the text: God has spoken, now you respond.",
    question: "What is your response to God based on what you've read and meditated on?",
    tip: "You don't have to be eloquent. 'Thank you' is a complete prayer. 'I don't understand' is a complete prayer. The direction matters more than the words.",
  },
  {
    id: "contemplatio",
    latin: "Contemplatio",
    english: "Contemplate",
    icon: "✨",
    color: "#F59E0B",
    duration: "5-10 min",
    instruction: "Rest in God's presence. Stop talking. Stop asking. Simply be with him. If thoughts come, gently release them. This is not emptiness — it is receptive openness. Stay attentive but not striving. Receive whatever God gives.",
    question: "Can you simply be in God's presence for a few minutes without an agenda?",
    tip: "For most people, this is the hardest movement. Our culture is allergic to silence. Start with 2 minutes and build. A wandering mind is not failure — returning is the practice.",
  },
  {
    id: "actio",
    latin: "Actio",
    english: "Act",
    icon: "🚶",
    color: "#EC4899",
    duration: "2-3 min",
    instruction: "Before you leave the text, ask: 'Is there one thing this session is calling me to do or be today?' A conversation to have. A habit to break. An attitude to change. Name it concretely and commit it to God.",
    question: "What one concrete thing is God inviting you to do or be differently today?",
    tip: "Lectio that produces no change is not Lectio — it is religious reading. The goal is transformation, not information.",
  },
];

const PASSAGES = [
  { ref: "Psalm 23", title: "The Lord Is My Shepherd", text: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name's sake. Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me. You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows. Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever." },
  { ref: "John 15:1-5", title: "The True Vine", text: "I am the true vine, and my Father is the vinedresser. Every branch in me that does not bear fruit he takes away, and every branch that does bear fruit he prunes, that it may bear more fruit. Already you are clean because of the word that I have spoken to you. Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me. I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing." },
  { ref: "Romans 8:38-39", title: "Nothing Can Separate Us", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." },
  { ref: "Isaiah 40:28-31", title: "He Gives Power to the Faint", text: "Have you not known? Have you not heard? The Lord is the everlasting God, the Creator of the ends of the earth. He does not faint or grow weary; his understanding is unsearchable. He gives power to the faint, and to him who has no might he increases strength. Even youths shall faint and be weary, and young men shall fall exhausted; but they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint." },
  { ref: "Matthew 11:28-30", title: "Come to Me", text: "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light." },
];

interface Session {
  date: string;
  passage: string;
  responses: Record<string, string>;
  action: string;
}

export default function LectioDivinaPage() {
  const [activeTab, setActiveTab] = useState<"guide" | "practice" | "history">("guide");
  const [selectedPassage, setSelectedPassage] = useState(0);
  const [activeMovement, setActiveMovement] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [actionItem, setActionItem] = useState("");
  const [history, setHistory] = useState<Session[]>(() => {
    try { const s = localStorage.getItem("vine_lectio_history"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [saved, setSaved] = useState(false);

  const movement = MOVEMENTS[activeMovement];

  const saveSession = () => {
    const session: Session = {
      date: new Date().toISOString().split("T")[0],
      passage: PASSAGES[selectedPassage].ref,
      responses,
      action: actionItem,
    };
    setHistory(prev => {
      const updated = [session, ...prev].slice(0, 60);
      try { localStorage.setItem("vine_lectio_history", JSON.stringify(updated)); } catch {}
      return updated;
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Lectio Divina</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 540, margin: "0 auto" }}>
            Sacred reading — a 1,500-year-old practice of slowly reading, meditating on, praying, and contemplating Scripture. Not study. Encounter.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "guide" as const, label: "What Is It", icon: "📖" },
            { id: "practice" as const, label: "Practice Now", icon: "🙏" },
            { id: "history" as const, label: "My Sessions", icon: "📅" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "guide" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 14 }}>Ancient Way of Reading Scripture</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
                Lectio Divina (Latin: "divine reading") is a way of engaging Scripture not as information to be processed but as the living Word of a personal God to be encountered. Developed in Benedictine monasteries from the 5th century onward, it was the primary way most Christians read Scripture for over a thousand years before the printing press made personal Bible reading possible.
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15 }}>
                Unlike Bible study — which asks "What does this text mean?" — Lectio Divina asks "What is God saying to me through this text today?" It works with short passages, read multiple times, slowly. The goal is not coverage but depth. One verse practiced well is worth more than ten chapters skimmed.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14, marginBottom: 24 }}>
              {MOVEMENTS.map((m, i) => (
                <div key={m.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 24 }}>{m.icon}</span>
                    <div>
                      <div style={{ color: m.color, fontWeight: 900, fontSize: 16 }}>{m.latin}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{m.english} · {m.duration}</div>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{m.instruction.substring(0, 100)}...</p>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, marginBottom: 12 }}>Getting Started</h3>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {[
                  "Choose a short passage — 4-10 verses is ideal. Longer is not better.",
                  "Find a quiet place where you won't be interrupted for 20-30 minutes",
                  "Have something to write with — insights and responses often need to be captured",
                  "Start with familiar passages — Psalm 23, John 15, Romans 8 — comfort with the content lets you go deeper",
                  "Don't grade yourself. Distraction is normal. Returning is the practice.",
                ].map((tip, i) => <li key={i} style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, marginBottom: 8 }}>{tip}</li>)}
              </ul>
              <button onClick={() => setActiveTab("practice")}
                style={{ marginTop: 16, padding: "10px 22px", background: GREEN, border: "none", borderRadius: 8, color: BG, fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
                Begin a Session
              </button>
            </div>
          </div>
        )}

        {activeTab === "practice" && (
          <div>
            {/* Passage selector */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Choose Your Passage</h4>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {PASSAGES.map((p, i) => (
                  <button key={i} onClick={() => setSelectedPassage(i)}
                    style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${selectedPassage === i ? GREEN : BORDER}`, background: selectedPassage === i ? `${GREEN}15` : "transparent", color: selectedPassage === i ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                    {p.ref}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: 16, background: BG, borderRadius: 10, padding: 18 }}>
                <p style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 8 }}>{PASSAGES[selectedPassage].title} — {PASSAGES[selectedPassage].ref}</p>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.9, margin: 0, fontStyle: "italic" }}>{PASSAGES[selectedPassage].text}</p>
              </div>
            </div>

            {/* Movement navigator */}
            <div style={{ display: "flex", gap: 6, marginBottom: 20, justifyContent: "center" }}>
              {MOVEMENTS.map((m, i) => (
                <button key={m.id} onClick={() => setActiveMovement(i)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${i === activeMovement ? m.color : BORDER}`, background: i === activeMovement ? `${m.color}20` : "transparent", color: i === activeMovement ? m.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {m.latin}
                </button>
              ))}
            </div>

            {/* Current movement */}
            <div style={{ background: CARD, border: `2px solid ${movement.color}40`, borderRadius: 16, padding: 28, marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 36 }}>{movement.icon}</span>
                <div>
                  <div style={{ color: movement.color, fontWeight: 900, fontSize: 22 }}>{movement.latin} — {movement.english}</div>
                  <div style={{ color: MUTED, fontSize: 13 }}>{movement.duration}</div>
                </div>
              </div>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 16 }}>{movement.instruction}</p>
              <div style={{ background: `${movement.color}10`, border: `1px solid ${movement.color}30`, borderRadius: 8, padding: 12, marginBottom: 20 }}>
                <p style={{ color: movement.color, fontSize: 13, fontStyle: "italic", margin: 0 }}>💡 Tip: {movement.tip}</p>
              </div>
              <label style={{ color: MUTED, fontSize: 12, fontWeight: 700, display: "block", marginBottom: 8 }}>{movement.question}</label>
              <textarea
                value={responses[movement.id] || ""}
                onChange={e => setResponses(prev => ({ ...prev, [movement.id]: e.target.value }))}
                placeholder="Your response..."
                style={{ width: "100%", minHeight: movement.id === "contemplatio" ? 60 : 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 14, color: TEXT, fontSize: 14, lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
              />
              {movement.id === "contemplatio" && (
                <p style={{ color: MUTED, fontSize: 12, marginTop: 8 }}>Note: contemplation is primarily silence, not writing. After resting, you may briefly note what you received.</p>
              )}
            </div>

            {activeMovement === MOVEMENTS.length - 1 && (
              <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                <label style={{ color: GREEN, fontSize: 14, fontWeight: 700, display: "block", marginBottom: 8 }}>My concrete action from this session:</label>
                <textarea value={actionItem} onChange={e => setActionItem(e.target.value)}
                  placeholder="Today I will..."
                  style={{ width: "100%", minHeight: 70, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 14, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={() => setActiveMovement(Math.max(0, activeMovement - 1))} disabled={activeMovement === 0}
                style={{ padding: "10px 20px", borderRadius: 8, border: `1px solid ${BORDER}`, background: "transparent", color: activeMovement === 0 ? BORDER : MUTED, cursor: activeMovement === 0 ? "default" : "pointer", fontWeight: 700 }}>
                ← Previous
              </button>
              {activeMovement < MOVEMENTS.length - 1 ? (
                <button onClick={() => setActiveMovement(activeMovement + 1)}
                  style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: PURPLE, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Next →
                </button>
              ) : (
                <button onClick={saveSession}
                  style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: GREEN, color: BG, fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
                  {saved ? "✓ Saved!" : "Complete Session"}
                </button>
              )}
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div>
            {history.length === 0 ? (
              <div style={{ textAlign: "center", padding: 60 }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>📜</div>
                <p style={{ color: MUTED }}>No sessions yet. Complete your first Lectio Divina above.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {history.map((s, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                      <span style={{ color: GREEN, fontWeight: 700 }}>{new Date(s.date + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</span>
                      <span style={{ color: PURPLE, fontSize: 13, fontWeight: 700 }}>{s.passage}</span>
                    </div>
                    {s.action && (
                      <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                        <span style={{ color: MUTED, fontSize: 12 }}>Action: </span>
                        <span style={{ color: TEXT, fontSize: 13 }}>{s.action}</span>
                      </div>
                    )}
                    {Object.entries(s.responses).filter(([,v]) => v).map(([id, resp]) => {
                      const m = MOVEMENTS.find(mv => mv.id === id);
                      return m ? (
                        <div key={id} style={{ marginBottom: 8 }}>
                          <span style={{ color: m.color, fontSize: 12, fontWeight: 700 }}>{m.latin}: </span>
                          <span style={{ color: MUTED, fontSize: 13 }}>{resp.substring(0, 80)}{resp.length > 80 ? "..." : ""}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
