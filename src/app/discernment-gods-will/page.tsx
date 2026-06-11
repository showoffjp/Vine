"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  {
    title: "The Two Wills of God",
    verse: "Deuteronomy 29:29",
    body: "Christian theology distinguishes between God's decretive will (what God has sovereignly ordained to happen — sometimes called his will of decree) and God's preceptive will (what God commands and desires from us — his moral will). Deuteronomy 29:29 captures this: 'The secret things belong to the LORD our God, but the things that are revealed belong to us and to our children forever, that we may do all the words of this law.' Most anxiety about 'knowing God's will' concerns the decretive will — the specific, hidden plan for our lives. But Scripture consistently invites us to focus on the preceptive will: the revealed commands, character, and wisdom of God. The most important will of God for your life is already written down.",
  },
  {
    title: "The Sufficiency of Scripture for Discernment",
    verse: "Psalm 119:105",
    body: "Psalm 119:105: 'Your word is a lamp to my feet and a light to my path.' This is not a promise that the Bible contains a specific verse about whether to take a particular job or marry a particular person. It is a promise that Scripture gives sufficient light for the journey — the character of God, the wisdom of Proverbs, the priorities of the Kingdom, the ethics of the Sermon on the Mount. Reformed theology argues for the sufficiency of Scripture: the Bible gives us everything we need for life and godliness (2 Peter 1:3), which includes the moral framework within which we make decisions. The question of which job to take is not a question with a pre-scripted answer buried in Scripture — it is a question to be answered by wisdom, prayer, community, and discernment within the revealed will of God.",
  },
  {
    title: "Wisdom vs. Direct Revelation",
    verse: "Proverbs 3:5–6",
    body: "'Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.' This text is often read as a promise of direct divine guidance — God will communicate the right path for each decision. But read in context, Proverbs 3:5–6 is a wisdom text: the path is made straight not by bypassing human understanding but by orienting human understanding toward God. The Proverbs framework for decision-making is wisdom — accumulated, God-oriented, community-tested good judgment — not ecstatic revelation. Most of the 'discernment' decisions in life are better approached through the wisdom literature (Proverbs, Ecclesiastes, Job) than through the prophetic literature.",
  },
  {
    title: "The Role of Community in Discernment",
    verse: "Proverbs 15:22",
    body: "'Without counsel plans fail, but with many advisers they succeed.' The individualism of contemporary spirituality has made discernment a private, interior practice: pray alone, feel an inner peace, proceed. But the biblical pattern is communal. The early church discerned together (Acts 15 — the Jerusalem Council). Paul sought counsel and tested his gospel with the leaders in Jerusalem (Galatians 2). The Proverbs are insistent: wisdom is social. This does not mean outsourcing your decisions to others; it means resisting the assumption that you can discern well in isolation. Your community can see your blind spots. They know you. They share your values. They pray with you. Genuine discernment is relational.",
  },
  {
    title: "Circumstances, Peace, and Fleeces",
    verse: "Romans 8:28",
    body: "Many Christians use 'open doors' (favorable circumstances), 'inner peace,' or 'laying out a fleece' (Gideon's approach in Judges 6) as primary methods of guidance. These have genuine value — but also well-documented limitations. Circumstances can be misread; inner peace can reflect emotional comfort rather than divine direction; Gideon's fleece was an act of weakness (God had already spoken clearly). Circumstances and peace are valid confirming signals, not primary guidance mechanisms. They function best as corroborating evidence alongside Scripture, counsel, and prayer — not as stand-alone authority. Romans 8:28 is often misapplied here: God works all things together for good does not mean every open door is God's invitation to walk through it.",
  },
];

const METHODS = [
  {
    id: "scripture",
    title: "1. Begin with What Is Already Clear",
    icon: "📖",
    color: GREEN,
    desc: "Before seeking any special guidance, identify what Scripture already clearly teaches about this decision area. Most major life decisions are constrained by clear biblical commands.",
    questions: [
      "Does this choice violate any clear biblical command? If yes, stop.",
      "What do the general principles of Scripture suggest? (honesty, love of neighbor, stewardship, justice)",
      "Is there wisdom literature (Proverbs, Ecclesiastes) that speaks to this category of decision?",
      "What does this decision say about my values and priorities?",
    ],
  },
  {
    id: "prayer",
    title: "2. Pray for Wisdom, Not Revelation",
    icon: "🙏",
    color: PURPLE,
    desc: "James 1:5 says: 'If any of you lacks wisdom, let him ask God, who gives generously to all without reproach.' The promise is wisdom, not a specific divine message. Pray for clarity of mind, right desires, freedom from fear and self-interest, and the capacity to see clearly.",
    questions: [
      "Am I praying with genuine openness to any answer — or am I hoping for confirmation of a decision already made?",
      "Have I spent enough time in unhurried prayer about this?",
      "Am I praying for wisdom or praying for divine permission?",
      "What do I sense when I bring this decision before God in honesty?",
    ],
  },
  {
    id: "community",
    title: "3. Seek Counsel from Trusted Community",
    icon: "👥",
    color: "#3B82F6",
    desc: "Choose your counselors carefully: people who know you, share your values, will tell you the truth, and have no stake in your decision. Share the decision fully and listen hard.",
    questions: [
      "Who are the 2–3 people whose judgment I most trust and who know me well?",
      "Have I been honest with them about my fears, desires, and reasoning?",
      "Have I actually listened to their perspective — or am I seeking permission?",
      "Do any counselors have concerns I am minimizing?",
    ],
  },
  {
    id: "gifts",
    title: "4. Consider Gifts, Calling, and Character",
    icon: "🎁",
    color: "#F59E0B",
    desc: "God's guidance often aligns with the gifts and character he has given you. A persistent sense of calling, confirmed over time by others and by circumstances, carries real weight.",
    questions: [
      "Does this direction align with how God has gifted and shaped me?",
      "Have others affirmed this sense of calling or ability?",
      "Does this choice represent growth in virtue and away from known sin patterns?",
      "Am I moving toward life and flourishing, or away from anxiety and fear?",
    ],
  },
  {
    id: "circumstances",
    title: "5. Evaluate Circumstances with Humility",
    icon: "🗺️",
    color: "#EC4899",
    desc: "Open doors, closed doors, inner peace, and providential coincidences are real but require careful interpretation. They corroborate; they do not command.",
    questions: [
      "What do circumstances suggest — are doors opening or closing?",
      "Is the inner peace I feel genuine peace or relief at avoiding a harder path?",
      "Are there practical obstacles that I might be spiritualizing as 'closed doors'?",
      "Does this feel like God's timing or my timing?",
    ],
  },
  {
    id: "test",
    title: "6. Test for Spiritual Fruit",
    icon: "🌱",
    color: GREEN,
    desc: "Jesus said 'you will know them by their fruits' (Matthew 7:20). Galatians 5:22 lists the fruit of the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control. Decisions aligned with the Spirit tend to produce these fruits in contemplation.",
    questions: [
      "When I imagine choosing this path, does it produce anxiety or peace?",
      "Does this choice bring me closer to God or away from him?",
      "Will this decision require me to compromise integrity, relationships, or values?",
      "Does this produce love and generosity or self-protection and fear?",
    ],
  },
];

const MISTAKES = [
  { title: "Waiting for certainty before acting", desc: "God rarely provides certainty before obedience. Most decisions in life are made under conditions of genuine uncertainty. The call to faith is a call to act on incomplete information — trusting that God is sovereign over the outcome. Paralysis disguised as waiting on God is often fear.", icon: "⚠️", color: "#EF4444" },
  { title: "Treating inner feelings as direct revelation", desc: "A strong desire, a persistent sense, an inner peace — these are real signals worth attending to. But they are not infallible. The heart is 'deceitful above all things' (Jeremiah 17:9). Inner states require interpretation and testing against Scripture, counsel, and community. Feelings are data, not authority.", icon: "💭", color: "#F59E0B" },
  { title: "Seeking a specific Scripture verse as direction", desc: "The practice of opening the Bible randomly and taking the first verse as direct guidance ('Bible roulette') is unwise and can lead to serious misinterpretation. Scripture was written to specific people in specific contexts. It guides us through its overall teaching, not through random verse fragments.", icon: "📖", color: PURPLE },
  { title: "Confusing the absence of peace with God's opposition", desc: "Fear, anxiety, and discomfort often accompany the right decision — particularly decisions that require courage, sacrifice, or change. Jonah was deeply uncomfortable with God's call to Nineveh. The prophets were terrified by their commissions. Lack of inner peace may signal the weight of obedience, not the wrongness of the direction.", icon: "😰", color: "#3B82F6" },
  { title: "Discerning alone", desc: "The lone ranger approach to discernment — prayer alone, decision alone, action alone — misses the gift of community that God has provided for this purpose. It is also spiritually dangerous: without accountability, self-deception is much easier. Major life decisions deserve major community investment.", icon: "🏔️", color: GREEN },
  { title: "Confusing God's will with your strongest desire", desc: "A persistent, burning desire is worth attending to in discernment — but desires require testing. Some desires are given by God; some are shaped by fear, ego, or the values of surrounding culture. The Ignatian tradition calls this 'discernment of spirits' — testing whether a desire leads toward God or away from him over time.", icon: "🔥", color: "#EC4899" },
];

const SCRIPTURE_LIST = [
  { verse: "James 1:5", text: "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him." },
  { verse: "Proverbs 3:5–6", text: "Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths." },
  { verse: "Romans 12:2", text: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect." },
  { verse: "Psalm 25:4–5", text: "Make me to know your ways, O LORD; teach me your paths. Lead me in your truth and teach me, for you are the God of my salvation; for you I wait all the day long." },
  { verse: "Proverbs 15:22", text: "Without counsel plans fail, but with many advisers they succeed." },
  { verse: "Philippians 4:7", text: "And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus." },
  { verse: "Deuteronomy 29:29", text: "The secret things belong to the LORD our God, but the things that are revealed belong to us and to our children forever." },
  { verse: "Isaiah 30:21", text: "And your ears shall hear a word behind you, saying, 'This is the way, walk in it,' when you turn to the right or when you turn to the left." },
];

type JournalEntry = { id: string; date: string; decision: string; scripture: string; community: string; sensing: string };
type Tab = "theology" | "methods" | "mistakes" | "scripture" | "journal";

export default function DiscernmentPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_discern_tab", "theology");
  const [expandedMethod, setExpandedMethod] = usePersistedState("vine_discern_method", "");

  const [journal, setJournal] = useState<JournalEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_discernment_journal") ?? "[]"); } catch { return []; }
  });
  const [jDecision, setJDecision] = useState("");
  const [jScripture, setJScripture] = useState("");
  const [jCommunity, setJCommunity] = useState("");
  const [jSensing, setJSensing] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_discernment_journal", JSON.stringify(journal)); } catch {}
  }, [journal]);

  function saveEntry() {
    if (!jDecision.trim()) return;
    setJournal(prev => [
      { id: Date.now().toString(), date: new Date().toLocaleDateString(), decision: jDecision, scripture: jScripture, community: jCommunity, sensing: jSensing },
      ...prev,
    ]);
    setJDecision(""); setJScripture(""); setJCommunity(""); setJSensing("");
  }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" },
    { id: "methods", label: "🧭 Method" },
    { id: "mistakes", label: "⚠️ Mistakes" },
    { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 14px", background: BG, border: `1px solid ${BORDER}`,
    borderRadius: 10, color: TEXT, fontSize: 14, outline: "none",
  };
  const labelStyle: React.CSSProperties = {
    fontSize: 12, fontWeight: 700, color: MUTED, textTransform: "uppercase",
    letterSpacing: "0.06em", display: "block", marginBottom: 6,
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: "linear-gradient(180deg, rgba(58,125,86,0.06) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>🧭</div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
            Discernment: Knowing God&apos;s Will
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto", lineHeight: 1.75 }}>
            How do Christians make major decisions? A biblical framework for navigating the tension between sovereignty, wisdom, and genuine human choice.
          </p>
        </div>

        {/* Tabs */}
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

          {tab === "theology" && (
            <div style={{ display: "grid", gap: 20 }}>
              {THEOLOGY.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
                    <span style={{ fontSize: 22 }}>📜</span>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, margin: 0 }}>{t.title}</h3>
                      <span style={{ fontSize: 12, fontWeight: 700, color: GREEN, marginTop: 4, display: "block" }}>{t.verse}</span>
                    </div>
                  </div>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "methods" && (
            <div>
              <div style={{ padding: "16px 24px", background: `rgba(58,125,86,0.05)`, border: `1px solid rgba(58,125,86,0.15)`, borderRadius: 14, marginBottom: 24 }}>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  This is not a checklist to follow mechanically — it is a set of questions to help you think carefully about a decision before God. Not every decision requires every step. Minor decisions require less process; major, irreversible decisions require more.
                </p>
              </div>
              <div style={{ display: "grid", gap: 14 }}>
                {METHODS.map((m) => {
                  const open = expandedMethod === m.id;
                  return (
                    <div key={m.id} style={{ background: CARD, border: `1px solid ${open ? m.color + "40" : BORDER}`, borderRadius: 16, overflow: "hidden", transition: "border-color 0.15s" }}>
                      <button type="button" onClick={() => setExpandedMethod(open ? "" : m.id)}
                        style={{ width: "100%", padding: "20px 24px", display: "flex", alignItems: "center", gap: 14, background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ width: 44, height: 44, borderRadius: 10, background: `${m.color}12`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{m.icon}</div>
                        <div style={{ flex: 1 }}>
                          <h3 style={{ fontSize: 16, fontWeight: 800, color: TEXT, margin: 0 }}>{m.title}</h3>
                          <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0", lineHeight: 1.5 }}>{m.desc}</p>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18, flexShrink: 0, transform: open ? "rotate(90deg)" : "none", transition: "transform 0.15s" }}>›</span>
                      </button>
                      {open && (
                        <div style={{ padding: "0 24px 20px", borderTop: `1px solid ${BORDER}` }}>
                          <p style={{ fontSize: 12, fontWeight: 700, color: m.color, textTransform: "uppercase", letterSpacing: "0.06em", margin: "16px 0 10px" }}>Key Questions</p>
                          <ul style={{ margin: 0, padding: "0 0 0 18px", display: "grid", gap: 8 }}>
                            {m.questions.map((q, j) => (
                              <li key={j} style={{ color: TEXT, fontSize: 14, lineHeight: 1.6 }}>{q}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {tab === "mistakes" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
              {MISTAKES.map((m, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${m.color}12`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 14 }}>{m.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: TEXT, marginBottom: 8 }}>{m.title}</h3>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {SCRIPTURE_LIST.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 }}>
                  <p style={{ fontSize: 12, fontWeight: 800, color: GREEN, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>{s.verse}</p>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, fontSize: 15, margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 28, marginBottom: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, marginBottom: 6 }}>Discernment Journal</h3>
                <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
                  Walking through a major decision? Use this space to process what you are seeing, hearing, and sensing.
                </p>
                <div style={{ display: "grid", gap: 14 }}>
                  <div>
                    <label style={labelStyle}>The decision I am facing</label>
                    <textarea rows={2} value={jDecision} onChange={e => setJDecision(e.target.value)}
                      placeholder="Describe the decision briefly..." style={{ ...inputStyle, resize: "vertical" }} />
                  </div>
                  <div>
                    <label style={labelStyle}>What Scripture says about this area</label>
                    <textarea rows={3} value={jScripture} onChange={e => setJScripture(e.target.value)}
                      placeholder="Principles, commands, or wisdom passages that are relevant..." style={{ ...inputStyle, resize: "vertical" }} />
                  </div>
                  <div>
                    <label style={labelStyle}>What trusted community is saying</label>
                    <textarea rows={3} value={jCommunity} onChange={e => setJCommunity(e.target.value)}
                      placeholder="Feedback from counselors, mentors, or close community..." style={{ ...inputStyle, resize: "vertical" }} />
                  </div>
                  <div>
                    <label style={labelStyle}>What I am sensing in prayer</label>
                    <textarea rows={3} value={jSensing} onChange={e => setJSensing(e.target.value)}
                      placeholder="Inner peace or unrest, persistent impressions, what seems to bear fruit..." style={{ ...inputStyle, resize: "vertical" }} />
                  </div>
                  <button type="button" onClick={saveEntry}
                    style={{ padding: "12px 24px", background: GREEN, color: "#000", borderRadius: 12, fontWeight: 800, fontSize: 14, border: "none", cursor: "pointer", alignSelf: "flex-start" }}>
                    Save Entry
                  </button>
                </div>
              </div>
              {journal.length > 0 && (
                <div style={{ display: "grid", gap: 14 }}>
                  {journal.map(e => (
                    <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 20 }}>
                      <p style={{ fontSize: 11, color: MUTED, marginBottom: 12 }}>{e.date}</p>
                      {e.decision && <div style={{ marginBottom: 10 }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Decision</p>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{e.decision}</p>
                      </div>}
                      {e.scripture && <div style={{ marginBottom: 10 }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Scripture</p>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{e.scripture}</p>
                      </div>}
                      {e.community && <div style={{ marginBottom: 10 }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Community</p>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{e.community}</p>
                      </div>}
                      {e.sensing && <div>
                        <p style={{ fontSize: 11, fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Sensing</p>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{e.sensing}</p>
                      </div>}
                    </div>
                  ))}
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
