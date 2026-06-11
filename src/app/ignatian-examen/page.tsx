"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FIVE_STEPS = [
  {
    number: 1,
    name: "Gratitude",
    subtitle: "Become aware of God's gifts",
    color: "#F59E0B",
    duration: "2–3 min",
    icon: "🌅",
    guide: "Begin by resting in God's presence. Do not rush into review — first, receive. Look back over the last 24 hours and notice what was given to you. Not the big events necessarily, but the small gifts: the warmth of coffee, a kind word, a moment of unexpected beauty, a Scripture that stayed with you, the fact that you woke up. Thank God specifically for 3–5 concrete things. Gratitude opens the heart for honest review.",
    prompt: "What are 3 specific gifts from the last 24 hours I want to thank God for?",
    scripture: { verse: "1 Thessalonians 5:18", text: "Give thanks in all circumstances; for this is the will of God in Christ Jesus for you." },
  },
  {
    number: 2,
    name: "Petition",
    subtitle: "Ask for light to see clearly",
    color: PURPLE,
    duration: "1–2 min",
    icon: "✨",
    guide: "Before reviewing the day, ask the Holy Spirit to help you see it clearly — not through the lens of self-justification or self-condemnation, but through the lens of truth and grace. Ignatius called this asking for 'the grace I need.' You are not reviewing the day alone; you are asking God to show you what he sees. This prayer keeps the Examen from becoming either a performance or a prosecution.",
    prompt: "Holy Spirit, show me today as you see it. Give me eyes to see where you were present and where I missed you.",
    scripture: { verse: "Psalm 139:23–24", text: "Search me, O God, and know my heart! Try me and know my thoughts! And see if there be any grievous way in me, and lead me in the way everlasting." },
  },
  {
    number: 3,
    name: "Review",
    subtitle: "Walk through the day with God",
    color: GREEN,
    duration: "5–8 min",
    icon: "🎬",
    guide: "Slowly replay the day like a film — hour by hour if possible. Notice the moments of consolation: when did you feel drawn toward God, alive, loving, generous, peaceful, creative? Notice the moments of desolation: when did you feel pulled away from God, anxious, resentful, closed, flat, disconnected? The Examen is not primarily about sin review — it is about noticing where God was and where you were. Pay particular attention to the emotional moments: what was underneath them?",
    prompt: "When today did I feel most alive and most connected to God? When did I feel most distant or closed?",
    scripture: { verse: "Psalm 16:7", text: "I bless the LORD who gives me counsel; in the night also my heart instructs me." },
  },
  {
    number: 4,
    name: "Sorrow & Forgiveness",
    subtitle: "Name what fell short",
    color: "#EF4444",
    duration: "2–3 min",
    icon: "💧",
    guide: "From the review, one or two moments will stand out where you fell short — where you chose yourself over love, where you acted from fear or pride or self-protection rather than from faith. Name these specifically and honestly — not with self-condemnation, but with honest sorrow. Then receive forgiveness. This is not a performance of contrition; it is a simple transaction with the God who is more eager to forgive than we are to confess. End this step with an act of trust in the mercy of God.",
    prompt: "Where did I fall short today? I receive God's forgiveness for these specific moments.",
    scripture: { verse: "1 John 1:9", text: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness." },
  },
  {
    number: 5,
    name: "Resolve",
    subtitle: "One concrete intention for tomorrow",
    color: GREEN,
    duration: "1–2 min",
    icon: "🌄",
    guide: "End by looking forward. Based on what you noticed — the gifts, the graces, the falls — what is one specific intention for tomorrow? Not a general resolution ('I will be kinder') but a concrete, particular one: 'When I speak with my colleague tomorrow, I will listen rather than defend.' Or: 'I will spend the first 10 minutes of tomorrow in silence before checking my phone.' One concrete, actionable intention is more transformative than five general ones. Ask God for the grace to live it.",
    prompt: "One specific, concrete intention I am carrying into tomorrow:",
    scripture: { verse: "Philippians 4:13", text: "I can do all things through him who strengthens me." },
  },
];

const HISTORY = `The Examen was developed by Ignatius of Loyola (1491–1556), the Spanish soldier-turned-mystic who founded the Society of Jesus (Jesuits). After a cannonball shattered his leg during the Battle of Pamplona in 1521, Ignatius spent months in recovery reading the lives of the saints — and found himself profoundly changed. The experience of noticing which thoughts left him peaceful and which left him empty became the seed of his Spiritual Exercises and, within them, the Examen.

Ignatius believed the Examen was so essential that if a Jesuit could only pray one thing in a given day, it should be the Examen. His reasoning: the other spiritual exercises train the interior life in periods of retreat; the Examen trains the interior life in ordinary time — which is where most of us actually live.

For 500 years, the Examen has been a central practice of Jesuit formation, adopted by Catholics, Protestants, and others who find that it reshapes how they see the day — not as a series of events that happen to them, but as a narrative in which God is actively present and worth attending to.`;

const VARIATIONS = [
  { name: "The Brief Examen (5 minutes)", desc: "One question from each step, done in 5 minutes during commute, before sleep, or at lunch. Best as a daily practice when the full form feels overwhelming.", steps: ["Gratitude: Name one gift.", "Petition: Ask for honest sight.", "Review: One moment of consolation. One of desolation.", "Sorrow: One specific thing. Receive forgiveness.", "Resolve: One intention."] },
  { name: "The Family Examen", desc: "Adapted for families with children. Shorter, more concrete questions. Can be done at dinner or bedtime.", steps: ["Rose: What was the best part of your day?", "Bud: What are you looking forward to?", "Thorn: What was the hardest part?", "Gratitude: What can we thank God for together?", "Prayer: Pray for each other specifically."] },
  { name: "The Work Examen", desc: "Applied specifically to the workday — where am I experiencing consolation and desolation in my work, and what does that tell me about calling and fit?", steps: ["When today did work feel most alive and meaningful?", "When did work feel flat, draining, or disconnected?", "Where did I serve others well through my work?", "Where did I let fear or ego drive my decisions?", "What one thing would make tomorrow more fruitful?"] },
  { name: "The Relational Examen", desc: "Focused on relationships — noticing where you gave and received love, and where love was absent.", steps: ["Who showed me love today, and how did I receive it?", "Where did I show up well for the people in my life?", "Where did I fail someone who needed me?", "Is there an unresolved tension I am avoiding?", "Who do I want to pray for specifically tonight?"] },
];

type Tab = "guide" | "steps" | "history" | "variations" | "journal";
type ExamenEntry = { id: string; date: string; gratitude: string; consolation: string; sorrow: string; resolve: string };

export default function ExamenPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_examen_tab", "guide");
  const [activeStep, setActiveStep] = usePersistedState("vine_examen_step", "1");

  const [journal, setJournal] = useState<ExamenEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_examen_journal") ?? "[]"); } catch { return []; }
  });
  const [jGratitude, setJGratitude] = useState("");
  const [jConsolation, setJConsolation] = useState("");
  const [jSorrow, setJSorrow] = useState("");
  const [jResolve, setJResolve] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_examen_journal", JSON.stringify(journal)); } catch {}
  }, [journal]);

  function saveEntry() {
    if (!jGratitude.trim() && !jConsolation.trim()) return;
    setJournal(prev => [
      { id: Date.now().toString(), date: new Date().toLocaleDateString(), gratitude: jGratitude, consolation: jConsolation, sorrow: jSorrow, resolve: jResolve },
      ...prev,
    ]);
    setJGratitude(""); setJConsolation(""); setJSorrow(""); setJResolve("");
  }

  const TABS: { id: Tab; label: string }[] = [
    { id: "guide", label: "📋 What It Is" },
    { id: "steps", label: "🪜 Five Steps" },
    { id: "history", label: "📜 History" },
    { id: "variations", label: "🔄 Variations" },
    { id: "journal", label: "📓 Pray It Now" },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 14px", background: BG, border: `1px solid ${BORDER}`,
    borderRadius: 10, color: TEXT, fontSize: 14, outline: "none", resize: "vertical" as const,
  };
  const labelStyle: React.CSSProperties = {
    fontSize: 12, fontWeight: 700, color: MUTED, textTransform: "uppercase" as const,
    letterSpacing: "0.06em", display: "block", marginBottom: 6,
  };
  const step = FIVE_STEPS.find(s => s.number === parseInt(activeStep)) ?? FIVE_STEPS[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: "linear-gradient(180deg, rgba(107,79,187,0.06) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>🕯️</div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
            The Ignatian Examen
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.75 }}>
            A 500-year-old daily prayer practice that teaches you to find God in the ordinary moments of your day — and transforms how you see the life you are already living.
          </p>
        </div>

        <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", overflowX: "auto" }}>
            {TABS.map(t => (
              <button key={t.id} type="button" onClick={() => setTab(t.id)}
                style={{ padding: "16px 18px", fontSize: 13, fontWeight: 700, background: "transparent", border: "none",
                  borderBottom: tab === t.id ? `2px solid ${GREEN}` : "2px solid transparent",
                  color: tab === t.id ? GREEN : MUTED, cursor: "pointer", whiteSpace: "nowrap" }}
              >{t.label}</button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 80px" }}>

          {tab === "guide" && (
            <div style={{ display: "grid", gap: 20 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: TEXT, marginBottom: 16 }}>What Is the Examen?</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}>
                  The Examen (from the Latin for examination or weighing) is a structured daily prayer practice of 15–20 minutes, typically done at the end of the day, that invites you to review your day in God&apos;s presence — noticing where God was present, how you responded, and where you need grace for tomorrow.
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}>
                  The Examen is not primarily about guilt review. It is about developing <strong style={{ color: TEXT }}>noticing</strong> — the spiritual habit of attention. Ignatius believed that God is present and active in every moment of ordinary life, and that most Christians miss his presence because they do not know how to look. The Examen is training in looking.
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>
                  Central to the Examen are two concepts from Ignatian spirituality: <strong style={{ color: TEXT }}>consolation</strong> (interior movements that draw you toward God — peace, joy, love, hope, generosity) and <strong style={{ color: TEXT }}>desolation</strong> (interior movements that draw you away — anxiety, resentment, flatness, self-absorption, fear). The Examen trains you to notice these movements and respond to them with wisdom.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
                {[
                  { title: "Who is it for?", color: GREEN, body: "Anyone who wants a structured daily practice of reviewing life in God's presence. It works across traditions — Catholic, Protestant, Anglican, evangelical — wherever there is a desire to develop interior attentiveness." },
                  { title: "How long?", color: PURPLE, body: "The full Examen takes 15–20 minutes. A brief form can be done in 5 minutes. Consistency matters more than duration — a brief daily practice transforms more than occasional extended sessions." },
                  { title: "When to do it?", color: "#F59E0B", body: "Ignatius recommended twice daily (midday and evening). Most practitioners do it once — at day's end. Some do it in the morning, reviewing yesterday. The best time is the time you will actually use." },
                  { title: "Do you need Jesuit training?", color: "#3B82F6", body: "No. The Examen is a prayer practice, not an academic discipline. You can begin tonight with nothing more than this guide, a quiet space, and 15 minutes." },
                ].map((item, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${item.color}25`, borderRadius: 14, padding: 20 }}>
                    <p style={{ fontSize: 13, fontWeight: 800, color: item.color, marginBottom: 8 }}>{item.title}</p>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "steps" && (
            <div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                {FIVE_STEPS.map(s => (
                  <button key={s.number} type="button" onClick={() => setActiveStep(String(s.number))}
                    style={{ padding: "8px 16px", borderRadius: 999, fontSize: 13, fontWeight: 700,
                      border: `1px solid ${activeStep === String(s.number) ? s.color : BORDER}`,
                      background: activeStep === String(s.number) ? `${s.color}15` : "transparent",
                      color: activeStep === String(s.number) ? s.color : MUTED, cursor: "pointer" }}>
                    {s.number}. {s.name}
                  </button>
                ))}
              </div>
              <div style={{ background: CARD, border: `1px solid ${step.color}30`, borderRadius: 20, padding: 32 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: `${step.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>
                    {step.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: step.color, textTransform: "uppercase", letterSpacing: "0.06em", margin: 0 }}>Step {step.number} · {step.duration}</p>
                    <h2 style={{ fontSize: 24, fontWeight: 900, color: TEXT, margin: "4px 0 0" }}>{step.name}</h2>
                    <p style={{ fontSize: 14, color: MUTED, margin: "3px 0 0" }}>{step.subtitle}</p>
                  </div>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>{step.guide}</p>
                <div style={{ padding: "16px 20px", background: `rgba(107,79,187,0.06)`, border: `1px solid rgba(107,79,187,0.2)`, borderRadius: 12, marginBottom: 16 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Reflection Prompt</p>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>{step.prompt}</p>
                </div>
                <div style={{ padding: "14px 18px", background: `rgba(58,125,86,0.04)`, border: `1px solid rgba(58,125,86,0.12)`, borderRadius: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{step.scripture.verse}</p>
                  <p style={{ color: TEXT, fontStyle: "italic", fontSize: 14, lineHeight: 1.6, margin: 0 }}>&ldquo;{step.scripture.text}&rdquo;</p>
                </div>
              </div>
            </div>
          )}

          {tab === "history" && (
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 32 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20 }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: `rgba(107,79,187,0.12)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>⚓</div>
                <div>
                  <h2 style={{ fontSize: 22, fontWeight: 900, color: TEXT, margin: 0 }}>Ignatius of Loyola</h2>
                  <p style={{ color: PURPLE, fontWeight: 700, fontSize: 13, margin: "3px 0 0" }}>1491–1556 · Founder of the Jesuits</p>
                </div>
              </div>
              {HISTORY.split("\n\n").map((para, i) => (
                <p key={i} style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>{para}</p>
              ))}
              <div style={{ padding: "16px 20px", background: `rgba(58,125,86,0.05)`, border: `1px solid rgba(58,125,86,0.15)`, borderRadius: 12, marginTop: 8 }}>
                <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: TEXT }}>Key resources:</strong> Timothy Gallagher&apos;s <em>The Examen Prayer</em> (2006) is the most accessible modern guide. Dennis Hamm SJ&apos;s article <em>Rummaging for God: Praying Backwards Through Your Day</em> (1994) is freely available online and widely read.
                </p>
              </div>
            </div>
          )}

          {tab === "variations" && (
            <div style={{ display: "grid", gap: 20 }}>
              {VARIATIONS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, marginBottom: 8 }}>{v.name}</h3>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, marginBottom: 14 }}>{v.desc}</p>
                  <ul style={{ margin: 0, padding: "0 0 0 18px", display: "grid", gap: 8 }}>
                    {v.steps.map((s, j) => (
                      <li key={j} style={{ color: TEXT, fontSize: 14, lineHeight: 1.6 }}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ padding: "16px 24px", background: `rgba(107,79,187,0.05)`, border: `1px solid rgba(107,79,187,0.15)`, borderRadius: 14, marginBottom: 24 }}>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  Use the fields below to pray through a brief Examen right now. Your entries are saved privately to this device.
                </p>
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 28, marginBottom: 24 }}>
                <div style={{ display: "grid", gap: 16 }}>
                  <div>
                    <label style={labelStyle}>🌅 Gratitude — 3 gifts from today</label>
                    <textarea rows={3} value={jGratitude} onChange={e => setJGratitude(e.target.value)}
                      placeholder="What do you want to thank God for specifically?" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>🎬 Consolation & Desolation — where was God present?</label>
                    <textarea rows={4} value={jConsolation} onChange={e => setJConsolation(e.target.value)}
                      placeholder="When did you feel most alive, loving, or close to God today? When did you feel most distant or closed?" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>💧 Sorrow — what fell short (receive forgiveness)</label>
                    <textarea rows={3} value={jSorrow} onChange={e => setJSorrow(e.target.value)}
                      placeholder="Where did you miss the mark today? Receive: God is faithful and just to forgive..." style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>🌄 Resolve — one concrete intention for tomorrow</label>
                    <textarea rows={2} value={jResolve} onChange={e => setJResolve(e.target.value)}
                      placeholder="One specific, actionable intention..." style={inputStyle} />
                  </div>
                  <button type="button" onClick={saveEntry}
                    style={{ padding: "12px 24px", background: GREEN, color: "#000", borderRadius: 12, fontWeight: 800, fontSize: 14, border: "none", cursor: "pointer", alignSelf: "flex-start" }}>
                    Save Examen
                  </button>
                </div>
              </div>
              {journal.length > 0 && (
                <div>
                  <h3 style={{ fontWeight: 800, color: MUTED, marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.06em", fontSize: 12 }}>Previous Examens</h3>
                  <div style={{ display: "grid", gap: 12 }}>
                    {journal.map(e => (
                      <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 18 }}>
                        <p style={{ fontSize: 11, color: MUTED, marginBottom: 12 }}>{e.date}</p>
                        {e.gratitude && <div style={{ marginBottom: 10 }}>
                          <p style={{ fontSize: 11, fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Gratitude</p>
                          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{e.gratitude}</p>
                        </div>}
                        {e.consolation && <div style={{ marginBottom: 10 }}>
                          <p style={{ fontSize: 11, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Consolation / Desolation</p>
                          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{e.consolation}</p>
                        </div>}
                        {e.sorrow && <div style={{ marginBottom: 10 }}>
                          <p style={{ fontSize: 11, fontWeight: 700, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Sorrow & Forgiveness</p>
                          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{e.sorrow}</p>
                        </div>}
                        {e.resolve && <div>
                          <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Tomorrow&apos;s Resolve</p>
                          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{e.resolve}</p>
                        </div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
