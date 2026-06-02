"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const EXAMEN_STEPS = [
  {
    id: "gratitude",
    step: 1,
    title: "Give Thanks",
    icon: "🙏",
    duration: "2-3 min",
    color: "#F59E0B",
    prompt: "Begin not with your failures, but with God's gifts. What happened today — however small — that you are grateful for? A conversation, a moment of beauty, an unexpected kindness, a problem solved, food eaten, rest received. Start here. The Examen is not self-condemnation — it begins with recognizing God's constant generosity.",
    questions: [
      "What single moment from today am I most grateful for?",
      "Where did I feel most alive or energized today?",
      "What did I receive today — from God, from others — that I may not have noticed in the moment?",
    ],
  },
  {
    id: "presence",
    step: 2,
    title: "Ask for Light",
    icon: "💡",
    duration: "1-2 min",
    color: "#3B82F6",
    prompt: "Before reviewing your day, ask the Holy Spirit to show you what you need to see — not what your pride wants to hide, and not what your inner critic wants to magnify. You need the Spirit's eyes for honest self-knowledge. Pray: 'Holy Spirit, show me where I moved toward you today, and where I moved away. Give me truth without condemnation.'",
    questions: [
      "Pray: 'Lord, show me what I need to see about today.'",
      "Ask for eyes to see your day as God sees it — neither through rose-colored glasses nor self-condemning ones.",
      "Sit quietly for 30 seconds before moving on.",
    ],
  },
  {
    id: "review",
    step: 3,
    title: "Review Your Day",
    icon: "🔍",
    duration: "5-7 min",
    color: "#10B981",
    prompt: "Walk through the day hour by hour, as if watching a film of yourself. Notice the moments of consolation (where you felt connected to God, loving toward others, at peace) and desolation (where you felt irritable, self-focused, anxious, dishonest, or far from God). Don't evaluate yet — just observe. Notice the texture of each interaction.",
    questions: [
      "When did I feel most connected to God or others today?",
      "When did I feel most distant, irritable, or out of character?",
      "What decisions did I make today that I'm proud of? What decisions do I regret?",
      "Was there a moment I avoided — a conversation, a task, an act of honesty — and why?",
    ],
  },
  {
    id: "response",
    step: 4,
    title: "Respond Honestly",
    icon: "💬",
    duration: "3-5 min",
    color: "#EC4899",
    prompt: "Now bring specific moments to God. Not a general 'forgive me for all I've done' but: 'Father, I spoke sharply to [person] at 3pm. I know that came from impatience and pride. I'm sorry.' Or: 'I felt your peace when I chose to stay calm in that meeting — thank you for that grace.' Respond to what you observed with honesty, gratitude, and repentance where needed.",
    questions: [
      "What do I need to confess specifically — not generally?",
      "What grace did I walk in today that I want to receive with gratitude?",
      "Is there anyone I need to reconcile with or apologize to?",
      "What do I want to receive from God right now?",
    ],
  },
  {
    id: "forward",
    step: 5,
    title: "Look Forward",
    icon: "🌅",
    duration: "2-3 min",
    color: PURPLE,
    prompt: "End by looking ahead to tomorrow. What is coming — a difficult meeting, a relationship under strain, a temptation you know is coming? Commit it to God now, while you have clarity. Ask for what you'll need. This is not worry about tomorrow (Matt 6:34) — it is proactive faith: 'Lord, I know what's coming; fill me with what I'll need.'",
    questions: [
      "What is one specific situation tomorrow I want to bring to God now?",
      "What grace, character quality, or help do I anticipate needing?",
      "Is there one concrete thing I will do differently tomorrow based on tonight's review?",
      "End with a brief prayer of trust and release: 'Lord, tomorrow is yours. I rest in you tonight.'",
    ],
  },
];

interface ExamenEntry {
  date: string;
  responses: Record<string, string>;
  mood: "1" | "2" | "3" | "4" | "5";
}

const VOICES_EXAMEN = [
  {
    id: "ignatius",
    name: "Ignatius of Loyola",
    era: "1491–1556 · Jesuit Founder",
    context: "Spiritual Exercises",
    bio: "Ignatius of Loyola developed the Examen as a non-negotiable daily practice within his Spiritual Exercises. A Spanish soldier turned mystic after his conversion during recovery from a battle wound, Ignatius founded the Society of Jesus (Jesuits) and gave the church one of its most enduring spiritual practices. He taught that God communicates through interior movements of consolation and desolation — and that learning to notice and discern these movements is the foundation of a responsive Christian life. The Examen was his tool for cultivating this awareness.",
    quote: "The Examen is not optional. If a Jesuit must choose between the Examen and any other prayer practice, he chooses the Examen. It is the prayer of finding God in all things.",
    contribution: "Ignatius gave the church the Examen as a daily spiritual practice that trains believers to notice where God is at work in ordinary life. His teaching that God communicates through consolation and desolation — and that these can be discerned through prayerful review — has shaped 500 years of Catholic and increasingly Protestant spiritual formation.",
  },
  {
    id: "manney-j",
    name: "Jim Manney",
    era: "b. 1948 · Jesuit-Formed",
    context: "A Simple Life-Changing Prayer",
    bio: "Jim Manney's A Simple Life-Changing Prayer (2011) is the most accessible contemporary guide to the Examen. Written for people with no previous experience of Ignatian spirituality, Manney distills the five-step practice into something any believer can do in 15 minutes. His book has introduced millions to the practice who would never read Ignatius directly, and his emphasis on the Examen as a practice of noticing rather than analysis has made it non-threatening for beginners.",
    quote: "The Examen is a way of paying attention. You review the day not to judge it but to see it — to find God where you might not have looked, and to understand yourself better than you did this morning.",
    contribution: "Manney's A Simple Life-Changing Prayer democratized the Examen, making it available to Protestant readers and spiritual beginners who would never approach Ignatius directly. His emphasis on the practice as attentiveness rather than spiritual heroics has made it the most widely recommended introduction to Ignatian prayer.",
  },
  {
    id: "hamm-d",
    name: "Dennis Hamm, SJ",
    era: "b. 1936 · Jesuit Scholar",
    context: "'Rummaging for God' (America Magazine)",
    bio: "Dennis Hamm's 1994 article 'Rummaging for God: Praying Backward through Your Day' (America Magazine) is perhaps the single most widely read introduction to the Examen in the English language. His metaphor of 'rummaging' — going through the drawers of the day looking for what God tucked there — made the practice vivid and memorable. Hamm also restored the emphasis on gratitude as the starting point: the Examen begins not with guilt or failure review but with thanksgiving for what was given.",
    quote: "The prayer of examen is rummaging through the stuff of the day — not to organize or evaluate it, but to find God hiding in the drawers. He is there. You have only to look.",
    contribution: "Hamm's rummaging metaphor has become the standard introduction to the Examen in RCIA programs, retreat workshops, and spiritual direction. His recovery of thanksgiving as the first movement of the Examen corrected an overly penitential reading of the practice that had developed in some traditions.",
  },
  {
    id: "thibodeaux-m",
    name: "Mark Thibodeaux, SJ",
    era: "b. 1963 · Jesuit",
    context: "Reimagining the Ignatian Examen",
    bio: "Mark Thibodeaux's Reimagining the Ignatian Examen (2015) offers 34 different variations of the Examen for different seasons, situations, and temperaments. His creative adaptations — including the Examen for parents, for people in the workplace, for those experiencing grief, and for those who struggle with guilt — have made the practice more flexible and less formulaic. Thibodeaux recognizes that spiritual practices must meet people where they are, and that one form does not fit all people in all seasons.",
    quote: "The Examen is not a formula to be executed. It is a conversation to be entered. Some days the conversation is long and rich. Other days it is just a glance at God before sleep — a nod that says, 'I know You were there.'",
    contribution: "Thibodeaux's variations on the Examen gave spiritual directors and practitioners a toolkit for customizing the practice to different life situations. His creative adaptations made the Examen more sustainable for people who had found the standard five-step formula rigid or hard to maintain long-term.",
  },
  {
    id: "barton-rh",
    name: "Ruth Haley Barton",
    era: "b. 1956 · Evangelical",
    context: "Sacred Rhythms",
    bio: "Ruth Haley Barton introduced an adapted form of the Examen (which she calls the Prayer of Examen or Review of the Day) to evangelical Protestant readers in Sacred Rhythms (2006) and subsequent writing. Barton's contribution was translating Ignatius's Catholic framework into accessible Protestant language — replacing consolation/desolation with 'life-giving moments / life-draining moments,' and embedding the practice within a broader daily rhythm of spiritual disciplines. Her work made the Examen widely adopted in evangelical spiritual direction contexts.",
    quote: "At the end of the day, the most important question is not 'What did I accomplish?' but 'Where was God?' — and 'Where was I in relation to Him?' These are the questions the Examen is designed to help you answer.",
    contribution: "Barton's translation of the Examen into evangelical Protestant vocabulary opened it to millions of readers who might have been put off by Ignatian or Jesuit language. Her Sacred Rhythms is the primary vehicle through which the Examen has entered contemporary evangelical spiritual formation practice.",
  },
];

export default function DailyExamenPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [mood, setMood] = useState<"1" | "2" | "3" | "4" | "5">("3");
  const [history, setHistory] = useState<ExamenEntry[]>(() => {
    try { const s = localStorage.getItem("vine_examen_history"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [activeTab, setActiveTab] = useState<"practice" | "history" | "about" | "voices" | "videos">("about");
  const [selectedVoice, setSelectedVoice] = useState("ignatius");
  const voiceItem = VOICES_EXAMEN.find(v => v.id === selectedVoice)!;
  const [saved, setSaved] = useState(false);

  const todayKey = new Date().toISOString().split("T")[0];
  const todayEntry = history.find(e => e.date === todayKey);

  useEffect(() => {
    if (todayEntry) {
      setResponses(todayEntry.responses);
      setMood(todayEntry.mood);
    }
  }, []);

  const saveExamen = () => {
    const entry: ExamenEntry = { date: todayKey, responses, mood };
    setHistory(prev => {
      const filtered = prev.filter(e => e.date !== todayKey);
      const updated = [entry, ...filtered].slice(0, 90);
      try { localStorage.setItem("vine_examen_history", JSON.stringify(updated)); } catch {}
      return updated;
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const step = EXAMEN_STEPS[activeStep];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 48, marginBottom: 10 }}>🌙</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Daily Examen</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 520, margin: "0 auto" }}>
            The Ignatian Examen is a 15-minute daily prayer review developed by St. Ignatius of Loyola — one of the most powerful practices in Christian spiritual formation.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "about" as const, label: "What Is It", icon: "📖" },
            { id: "practice" as const, label: "Tonight's Examen", icon: "🌙" },
            { id: "history" as const, label: "My History", icon: "📅" },
            { id: "voices" as const, label: "Voices", icon: "🎓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "about" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 12 }}>A 500-Year-Old Daily Practice</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
                Ignatius of Loyola (1491-1556) developed the Examen as the one prayer practice he never wanted his Jesuits to skip — even on the busiest days. It is a structured 15-minute review of the past 24 hours, looking for where God was present and where the soul drifted.
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
                The Examen is not a guilt exercise. It is attentiveness — training the soul to notice God in the ordinary. Over weeks and months, it develops an almost continuous awareness of the Spirit's movements and a sensitivity to one's own patterns of consolation (movement toward God) and desolation (movement away).
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15 }}>
                Modern research on habit and self-awareness supports what Ignatius intuited: regular reflection produces moral and spiritual growth that willpower alone does not. The Examen works because it combines honest self-knowledge with grace — you see yourself clearly and receive forgiveness rather than condemnation.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
              {EXAMEN_STEPS.map((s, i) => (
                <div key={s.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{s.icon}</span>
                    <div>
                      <div style={{ color: s.color, fontWeight: 700, fontSize: 13 }}>Step {s.step}</div>
                      <div style={{ color: TEXT, fontWeight: 800, fontSize: 14 }}>{s.title}</div>
                    </div>
                  </div>
                  <div style={{ color: MUTED, fontSize: 12 }}>{s.duration}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <button onClick={() => setActiveTab("practice")}
                style={{ padding: "12px 28px", background: PURPLE, border: "none", borderRadius: 10, color: "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
                Begin Tonight&apos;s Examen
              </button>
            </div>
          </div>
        )}

        {activeTab === "practice" && (
          <div>
            {/* Step navigator */}
            <div style={{ display: "flex", gap: 6, marginBottom: 24, justifyContent: "center" }}>
              {EXAMEN_STEPS.map((s, i) => (
                <button key={s.id} onClick={() => setActiveStep(i)}
                  style={{ width: 36, height: 36, borderRadius: "50%", border: `2px solid ${i === activeStep ? s.color : BORDER}`, background: i < activeStep ? `${s.color}30` : i === activeStep ? s.color : "transparent", color: i === activeStep ? BG : i < activeStep ? s.color : MUTED, fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
                  {i < activeStep ? "✓" : s.step}
                </button>
              ))}
            </div>

            {/* Current step */}
            <div style={{ background: CARD, border: `2px solid ${step.color}40`, borderRadius: 16, padding: 30, marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 36 }}>{step.icon}</span>
                <div>
                  <div style={{ color: step.color, fontWeight: 900, fontSize: 20 }}>Step {step.step}: {step.title}</div>
                  <div style={{ color: MUTED, fontSize: 13 }}>{step.duration}</div>
                </div>
              </div>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 20 }}>{step.prompt}</p>

              <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Reflection Questions</h4>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", marginBottom: 20 }}>
                {step.questions.map((q, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                    <span style={{ color: step.color, fontWeight: 900, flexShrink: 0 }}>→</span>
                    <span style={{ color: TEXT, fontSize: 14 }}>{q}</span>
                  </li>
                ))}
              </ul>

              <textarea
                value={responses[step.id] || ""}
                onChange={e => setResponses(prev => ({ ...prev, [step.id]: e.target.value }))}
                placeholder={`Your response to Step ${step.step}...`}
                style={{ width: "100%", minHeight: 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 14, color: TEXT, fontSize: 14, lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
              />
            </div>

            {/* Mood & navigation */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, flex: 1, minWidth: 200 }}>
                <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 10 }}>Today&apos;s Overall Spirit</div>
                <div style={{ display: "flex", gap: 8 }}>
                  {(["1","2","3","4","5"] as const).map(n => (
                    <button key={n} onClick={() => setMood(n)}
                      style={{ flex: 1, padding: "8px 0", borderRadius: 8, border: `1px solid ${mood === n ? GREEN : BORDER}`, background: mood === n ? `${GREEN}20` : "transparent", color: mood === n ? GREEN : MUTED, fontWeight: 800, fontSize: 16, cursor: "pointer" }}>
                      {["😔","😕","😐","🙂","😊"][parseInt(n)-1]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <button onClick={() => setActiveStep(Math.max(0, activeStep - 1))} disabled={activeStep === 0}
                style={{ padding: "10px 20px", borderRadius: 8, border: `1px solid ${BORDER}`, background: "transparent", color: activeStep === 0 ? BORDER : MUTED, cursor: activeStep === 0 ? "default" : "pointer", fontWeight: 700, fontSize: 14 }}>
                ← Back
              </button>
              {activeStep < EXAMEN_STEPS.length - 1 ? (
                <button onClick={() => setActiveStep(activeStep + 1)}
                  style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: PURPLE, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Next Step →
                </button>
              ) : (
                <button onClick={saveExamen}
                  style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: saved ? `${GREEN}` : GREEN, color: BG, fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
                  {saved ? "✓ Saved!" : "Complete Examen"}
                </button>
              )}
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div>
            {history.length === 0 ? (
              <div style={{ textAlign: "center", padding: 60 }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>📅</div>
                <p style={{ color: MUTED }}>No examen entries yet. Complete your first one in &quot;Tonight&apos;s Examen.&quot;</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {history.map(entry => (
                  <div key={entry.date} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <span style={{ color: GREEN, fontWeight: 700, fontSize: 15 }}>
                        {new Date(entry.date + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                      </span>
                      <span style={{ fontSize: 22 }}>{["😔","😕","😐","🙂","😊"][parseInt(entry.mood)-1]}</span>
                    </div>
                    {Object.entries(entry.responses).filter(([,v]) => v).map(([stepId, response]) => {
                      const stepMeta = EXAMEN_STEPS.find(s => s.id === stepId);
                      return stepMeta ? (
                        <div key={stepId} style={{ marginBottom: 10 }}>
                          <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>{stepMeta.icon} {stepMeta.title}</div>
                          <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0, maxHeight: 60, overflow: "hidden" }}>{response}</p>
                        </div>
                      ) : null;
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
              {VOICES_EXAMEN.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(0,255,136,0.4)" : BORDER}`, background: selectedVoice === v.id ? "rgba(0,255,136,0.08)" : CARD, cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? GREEN : TEXT, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: MUTED }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: TEXT }}>{voiceItem.name}</h2>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: 20 }}>{voiceItem.era}</div>
              <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
              <div style={{ background: BG, borderRadius: 12, padding: 20, borderLeft: `3px solid ${GREEN}`, marginBottom: 24 }}>
                <p style={{ fontSize: 15, color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.75 }}>{voiceItem.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Guided prayers, explanations, and teachings on the Ignatian Examen and daily reflective prayer practice.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "kqtFCtGOS-I", title: "Ignatius Loyola's Jesuit Daily Examen", channel: "Ignatian Spirituality", description: "A guided walk-through of the Daily Examen as Ignatius of Loyola taught it — a method of reflective prayer for finding God in the events of each day." },
                  { videoId: "fkmMs0rW6ok", title: "The Daily Examen — A Guided Journey Through Reflective Prayer", channel: "Ignatian Spirituality", description: "A guided journey through the five steps of the Examen, designed for daily use as a tool for discernment and spiritual growth." },
                  { videoId: "mVE6UlP8sl0", title: "5-Minute Guided Daily Examen Prayer", channel: "Ignatian Spirituality", description: "A brief, accessible guided practice of the Examen — based on St. Ignatius's Spiritual Exercises and suitable for daily use." },
                  { videoId: "pDQgjzJINdk", title: "Ignatian Spirituality: The Examen", channel: "Jesuit Institute", description: "An introduction to the Examen from the Jesuit Institute — its history, theological basis, and how to integrate it into daily prayer." },
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
    </div>
  );
}
