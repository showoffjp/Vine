"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

const VOICES_LD = [
  { id: "guigo-ld", name: "Guigo II", era: "d. c. 1188", context: "Scala Claustralium (The Ladder of Monks, c. 1150); Carthusian Prior", bio: "Guigo II is the architect of Lectio Divina as a systematic practice. His Scala Claustralium ('The Ladder of Monks'), written as a letter to a fellow monk, is the first document to formalize the four movements — lectio, meditatio, oratio, contemplatio — that had been practiced informally in monastic communities for centuries. His ladder metaphor is precise: 'Reading is the careful study of the scriptures, concentrating all one's powers on it. Meditation is the busy application of the mind to seek with the help of one's own reason for knowledge of hidden truth. Prayer is the heart's devoted turning to God to drive away evil and obtain what is good. Contemplation is when the mind is in some sort lifted up to God and held above itself, so that it tastes the joys of everlasting sweetness.'", quote: "Reading seeks the sweetness of a blessed life, meditation perceives it, prayer asks for it, contemplation tastes it.", contribution: "Created the vocabulary and structure for Lectio Divina that has governed contemplative Bible reading for 900 years. Every modern Lectio guide — including this one — builds directly on Guigo's four movements." },
  { id: "benedict", name: "St. Benedict", era: "c. 480-547", context: "The Rule of Benedict (c. 516); founder of Western monasticism", bio: "Benedict of Nursia's Rule for his monastery at Monte Cassino organized the monastic day around three activities: Opus Dei (the prayer offices), lectio divina (sacred reading), and manual labor. For Benedict, Lectio was not a supplement to the monastic life — it was one of its structural pillars, as essential as eating and working. His Rule prescribes three to four hours of Lectio daily for his monks — a commitment that shaped Western Christian formation for a millennium. The monastic tradition of slow, meditative engagement with Scripture flows directly from Benedict's Rule.", quote: "Let nothing be preferred to the Work of God. But the Work of God includes reading — reading that attends to God.", contribution: "Institutionalized Lectio Divina as a daily discipline within the Western monastic tradition. The Rule of Benedict ensured that this practice would be transmitted across 15 centuries of monasteries, schools, and eventually lay spirituality." },
  { id: "lectio-m", name: "Thomas Merton", era: "1915-1968", context: "Opening the Bible (1970); Lectio Divina and the Monastic Tradition; Trappist monk at Gethsemani", bio: "Merton wrote extensively about the monastic practice of Lectio Divina — what it is, what distinguishes it from study, and how it functions in the Christian life. His account is particularly helpful for modern people: he distinguishes between 'reading for information' (which dominates modern literary life) and 'reading for formation' (which is what Lectio aims at). The question in Lectio is not 'What does this mean?' but 'How is God speaking to me through this?' — a shift in orientation that transforms the entire activity. His writing helped introduce Lectio to non-monastic Catholics and Protestants.", quote: "Lectio Divina is not a way of reading the Bible. It is a way of being read by the Bible.", contribution: "Made the monastic practice of Lectio Divina accessible and compelling to non-monastic readers in the 20th century. His translations of the tradition into contemporary language are still the clearest introductions available." },
  { id: "main", name: "John Main OSB", era: "1926-1982", context: "Word Into Silence (1980); founder of the Christian Meditation movement; Benedictine monk", bio: "Main was a Benedictine monk who rediscovered the practice of Christian meditation through the writings of John Cassian (who transmitted the Desert Fathers' method of repeated Scripture phrases to the West) and his own experience with Eastern meditation. He founded the World Community for Christian Meditation and developed a specific practice: sitting in silence, repeating a sacred word ('maranatha' — Aramaic for 'Come, Lord') as a way of surrendering all thoughts and entering stillness before God. His approach is more contemplative than Lectio Divina's four-step structure but closely related to its final movement (contemplatio).", quote: "To meditate is to attend with purity of heart — to turn the full beam of attention on God, who is the ground of our being.", contribution: "Established a structured Christian meditation practice that brought millions of people — including many outside traditional church contexts — into sustained contemplative prayer. The World Community for Christian Meditation operates in over 100 countries." },
  { id: "hall", name: "Thelma Hall", era: "1918-2007", context: "Too Deep for Words: Rediscovering Lectio Divina (1988); Sisters of Charity", bio: "Hall's Too Deep for Words is often cited as the book that introduced Lectio Divina to English-speaking Catholic laypeople in the modern era. She wrote at a moment when the renewal movement in Catholicism was recovering contemplative practices, and her book provided both a theology and a practical method accessible to non-monastics. She argued that Lectio is not a monastic luxury but a birthright of every baptized Christian — the natural way that the people of God have always engaged Scripture when they engaged it as living Word rather than as text.", quote: "Lectio Divina invites us to read not to gather information but to encounter the living God who speaks through the written word.", contribution: "Democratized Lectio Divina for Catholic laypeople and eventually for Protestants. Too Deep for Words sparked a revival of contemplative Bible reading that continues to grow across denominational lines." },
];

export default function LectioDivinaPage() {
  const [activeTab, setActiveTab] = usePersistedState<"guide" | "practice" | "voices" | "history" | "videos">("vine_lectio-divina_tab", "guide");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_lectio-divina_voice", "guigo-ld");
  const voiceItem = VOICES_LD.find(v => v.id === selectedVoice)!;
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
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
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
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "history" as const, label: "My Sessions", icon: "📅" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
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
              <button type="button" onClick={() => setActiveTab("practice")}
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
                  <button type="button" key={i} onClick={() => setSelectedPassage(i)}
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
                <button type="button" key={m.id} onClick={() => setActiveMovement(i)}
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
                aria-label="Your response..." placeholder="Your response..."
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
                  aria-label="Today I will..." placeholder="Today I will..."
                  style={{ width: "100%", minHeight: 70, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 14, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button type="button" onClick={() => setActiveMovement(Math.max(0, activeMovement - 1))} disabled={activeMovement === 0}
                style={{ padding: "10px 20px", borderRadius: 8, border: `1px solid ${BORDER}`, background: "transparent", color: activeMovement === 0 ? BORDER : MUTED, cursor: activeMovement === 0 ? "default" : "pointer", fontWeight: 700 }}>
                ← Previous
              </button>
              {activeMovement < MOVEMENTS.length - 1 ? (
                <button type="button" onClick={() => setActiveMovement(activeMovement + 1)}
                  style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: PURPLE, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Next →
                </button>
              ) : (
                <button type="button" onClick={saveSession}
                  style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: GREEN, color: BG, fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
                  {saved ? "✓ Saved!" : "Complete Session"}
                </button>
              )}
            </div>
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_LD.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? PURPLE : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Lectio Divina</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
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
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "VIDRl_M-R_M", title: "Lectio Divina Explained: A Monk's Guide to Hearing God Through Scripture", channel: "Fr. Michael Casey OCSO", description: "A deep exploration of lectio divina by a Cistercian monk — what the four movements mean, how they work together, and why this practice transforms the reader." },
                  { videoId: "mF2c5ytdwQw", title: "Lectio Divina — The Art of Sacred Reading", channel: "Christian Contemplative Teaching", description: "An introduction to lectio divina as a spiritual art — how to approach Scripture not merely for information but for formation and communion with God." },
                  { videoId: "Bt5Y7Su-tPg", title: "Introduction to Lectio Divina", channel: "Fr. Jonathan Smith", description: "A clear, accessible introduction to the practice of lectio divina — its history, its four movements, and how to integrate it into daily prayer." },
                  { videoId: "8eDV-wcKI_Y", title: "Lectio Divina: Praying with Scripture (Mark 4:35-41)", channel: "Scripture and Prayer", description: "A guided demonstration of lectio divina using Mark 4:35-41 — showing how the four movements work with an actual biblical text." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
