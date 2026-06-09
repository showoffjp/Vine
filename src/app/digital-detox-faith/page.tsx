"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  {
    title: "Attention Is a Spiritual Issue",
    verse: "Matthew 6:22–23",
    body: "Jesus said: 'The eye is the lamp of the body. If your eye is healthy, your whole body will be full of light, but if your eye is bad, your whole body will be full of darkness.' In the ancient world, the eye was understood as the faculty of attention — what you attend to shapes who you are. Contemporary neuroscience confirms this: our attention is not neutral. The platforms we use are engineered to capture and hold our attention for commercial purposes, not for our flourishing. When Jesus calls his followers to a singular focus — 'You cannot serve two masters' — he is making a claim about the architecture of the human soul that is as relevant to the attention economy as it was to Roman taxation.",
  },
  {
    title: "Fasting as an Ancient Discipline for Modern Excess",
    verse: "Matthew 6:16–18",
    body: "The practice of fasting — voluntary abstinence from something good in order to seek God more fully — is one of the oldest spiritual disciplines in Christianity, Judaism, and Islam. Jesus assumed his disciples would fast ('when you fast,' not 'if you fast,' Matthew 6:16). Digital fasting applies the ancient logic of fasting to a modern form of excess: the consumption of an endless stream of information, entertainment, and social performance. Just as food fasting exposes our dependence on physical comfort, digital fasting exposes our dependence on stimulation, distraction, and the validation of others. What you discover when you put the phone down is a map of your interior life.",
  },
  {
    title: "The Undivided Heart",
    verse: "Psalm 86:11",
    body: "David prays: 'Teach me your way, O LORD, that I may walk in your truth; unite my heart to fear your name.' The Hebrew word for 'unite' (yachad) means to make one, to unify. David is praying for integration — for a heart that is not fragmented between multiple competing loyalties and attentions. The fragmented attention of the smartphone user — scrolling between notifications, apps, and streams — is the opposite of the unified heart. The Christian tradition has always held that spiritual growth requires not just right belief but right attention. You cannot love God with your whole heart if your heart is structurally fragmented by the design of the devices in your hands.",
  },
  {
    title: "Sabbath and Digital Rest",
    verse: "Exodus 20:8–10",
    body: "The Sabbath commandment is the longest of the Ten Commandments — and its scope is total: 'You shall not do any work, you, or your son, or your daughter, your male servant, or your female servant, or your livestock, or the sojourner who is within your gates.' The Sabbath interrupts the logic of production and consumption. For many contemporary Christians, the phone is the primary mechanism of Sabbath violation: the constant checking of messages, the passive consumption of content, the ambient anxiety of being always reachable. A digital Sabbath — one day per week with the phone off — is one of the most practical and countercultural acts available to Christians in the 21st century.",
  },
  {
    title: "Community Cannot Be Replaced by Connectivity",
    verse: "Hebrews 10:24–25",
    body: "Hebrews 10:24–25: 'And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.' The digital church, the Instagram community, the online small group — these have genuine value as supplements to embodied community. But they cannot replace the physical presence that New Testament community assumes. The Greek word for 'church' (ekklesia) describes an assembly, a gathering of bodies in a place. Social media gives the feeling of community without the cost: the inconvenience, the mess, the commitment, the discomfort that real community requires and that makes it formative.",
  },
];

const PLANS = [
  {
    title: "3-Day Digital Fast",
    color: GREEN,
    icon: "🌱",
    difficulty: "Beginner",
    desc: "A starting point for those who have never done a digital fast. Three days of reduced — not eliminated — screen time, focused on creating space for prayer and reflection.",
    rules: [
      "No social media (Instagram, TikTok, X, Facebook, YouTube) for 3 days",
      "Phone use limited to calls, texts, and navigation",
      "No screens after 8pm on all three evenings",
      "Each morning: 15 minutes of prayer or Scripture before picking up phone",
      "Journal what you notice — cravings, emotions, what you reach for in idle moments",
    ],
  },
  {
    title: "7-Day Social Media Fast",
    color: PURPLE,
    icon: "🌿",
    difficulty: "Moderate",
    desc: "A week off social media only — all other phone functions remain. Long enough to break the reflex and notice what was filling the space.",
    rules: [
      "Delete or log out of all social media apps for 7 days",
      "No social media on desktop either — not even checking",
      "Fill the recovered time intentionally: prayer, Bible, conversation, physical activity",
      "Tell one person you are doing it — accountability matters",
      "On day 7: write down what you noticed before re-engaging",
    ],
  },
  {
    title: "Full Digital Sabbath (Weekly)",
    color: "#F59E0B",
    icon: "☀️",
    difficulty: "Ongoing Practice",
    desc: "One full day per week — phone off, screens dark. The most sustainable and transformative practice of the three because it is structural, not just occasional.",
    rules: [
      "Choose a consistent 24-hour period (e.g., Saturday sunset to Sunday sunset, or Friday night to Saturday night)",
      "Phone off, not silenced — off",
      "No television, laptop, tablet, or streaming",
      "Tell your household — this is a family or community practice, not solo",
      "Prepare the night before: print anything you need, make arrangements",
      "Fill the day: worship, rest, embodied activity, conversation, creation",
    ],
  },
  {
    title: "40-Day Digital Lent",
    color: "#EF4444",
    icon: "🔥",
    difficulty: "Advanced",
    desc: "The most significant practice — giving up a specific digital habit for the full 40 days of Lent (or any 40-day period). Follows the ancient logic of fasting as preparation and transformation.",
    rules: [
      "Identify the specific habit that most controls your attention (social media, streaming, news, gaming)",
      "Fast from it completely for 40 days — not moderation, abstinence",
      "Replace the time with a specific spiritual practice (lectio divina, Examen, Scripture memory)",
      "Keep a weekly journal of what you notice",
      "End with a discernment: what is the right relationship with this platform going forward?",
    ],
  },
];

const PRACTICAL_TIPS = [
  { title: "Delete apps, don't just move them", body: "Moving apps to the back page reduces frequency but doesn't address the underlying reflex. Deleting them (you can always re-download) creates a genuine barrier that interrupts the automatic grab." },
  { title: "Use a physical alarm clock", body: "The single most impactful digital practice for many Christians: removing the phone from the bedroom eliminates the first-thing-morning scroll, the last-thing-night check, and the middle-of-night temptation." },
  { title: "Put the phone in another room during meals and prayer", body: "Presence at table and presence in prayer are both biblical values. The phone undermines both. Physical distance — not willpower — is the reliable solution." },
  { title: "Turn off all notifications except calls and texts", body: "Notifications are designed to create urgency where none exists. Each one is an interruption of your attention on behalf of someone else's commercial interests. Turn them off." },
  { title: "Have something better to reach for", body: "The instinct to grab the phone in idle moments (waiting, bored, uncomfortable) is not just habit — it is a spiritual reflex away from stillness. Have a physical book, a short prayer, or a Scripture card nearby as an alternative." },
  { title: "Do not attempt willpower alone", body: "The apps are engineered by teams of behavioral psychologists with billion-dollar budgets. Willpower alone is insufficient. Use structural barriers (delete apps, set Screen Time limits, schedule phone-free periods), accountability, and community." },
];

type Tab = "theology" | "plans" | "tips" | "journal";
type DetoxEntry = { id: string; date: string; plan: string; observation: string; missed: string; discovery: string };

export default function DigitalDetoxPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_detox_tab", "theology");
  const [journal, setJournal] = useState<DetoxEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_detox_journal") ?? "[]"); } catch { return []; }
  });
  const [jPlan, setJPlan] = useState("");
  const [jObservation, setJObservation] = useState("");
  const [jMissed, setJMissed] = useState("");
  const [jDiscovery, setJDiscovery] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_detox_journal", JSON.stringify(journal)); } catch {}
  }, [journal]);

  function saveEntry() {
    if (!jObservation.trim()) return;
    setJournal(prev => [
      { id: Date.now().toString(), date: new Date().toLocaleDateString(), plan: jPlan, observation: jObservation, missed: jMissed, discovery: jDiscovery },
      ...prev,
    ]);
    setJPlan(""); setJObservation(""); setJMissed(""); setJDiscovery("");
  }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" },
    { id: "plans", label: "📋 Plans" },
    { id: "tips", label: "💡 Tips" },
    { id: "journal", label: "📓 Journal" },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 14px", background: BG, border: `1px solid ${BORDER}`,
    borderRadius: 10, color: TEXT, fontSize: 14, outline: "none", resize: "vertical" as const,
  };
  const labelStyle: React.CSSProperties = {
    fontSize: 12, fontWeight: 700, color: MUTED, textTransform: "uppercase" as const,
    letterSpacing: "0.06em", display: "block", marginBottom: 6,
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
        <div style={{ background: "linear-gradient(180deg, rgba(58,125,86,0.06) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>📵</div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
            Digital Detox & Faith
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto", lineHeight: 1.75 }}>
            Your phone is not neutral. Biblical foundations for why attention matters spiritually — and four practical plans for reclaiming it.
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

          {tab === "plans" && (
            <div style={{ display: "grid", gap: 20 }}>
              {PLANS.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${p.color}25`, borderRadius: 16, padding: 28 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: `${p.color}12`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{p.icon}</div>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, margin: 0 }}>{p.title}</h3>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999, background: `${p.color}12`, color: p.color, marginTop: 4, display: "inline-block" }}>{p.difficulty}</span>
                    </div>
                  </div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</p>
                  <ul style={{ margin: 0, padding: "0 0 0 18px", display: "grid", gap: 8 }}>
                    {p.rules.map((r, j) => (
                      <li key={j} style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>
                        <span style={{ color: p.color, fontWeight: 700 }}>→</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {tab === "tips" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {PRACTICAL_TIPS.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: TEXT, marginBottom: 8 }}>{t.title}</h3>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{t.body}</p>
                </div>
              ))}
              <div style={{ background: `rgba(58,125,86,0.05)`, border: `1px solid rgba(58,125,86,0.2)`, borderRadius: 14, padding: 22 }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: GREEN, marginBottom: 8 }}>Recommended Reading</h3>
                <ul style={{ margin: 0, padding: "0 0 0 18px", display: "grid", gap: 6 }}>
                  {[
                    "Digital Minimalism — Cal Newport (secular, highly applicable)",
                    "The Tech-Wise Family — Andy Crouch (Christian, family-focused)",
                    "Reclaiming Conversation — Sherry Turkle (research-based)",
                    "The Ruthless Elimination of Hurry — John Mark Comer (Christian, broader)",
                  ].map((book, i) => (
                    <li key={i} style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{book}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 28, marginBottom: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, marginBottom: 6 }}>Detox Journal</h3>
                <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
                  Track your experience during a digital fast. Your notes will show you what the phone was filling and what can replace it.
                </p>
                <div style={{ display: "grid", gap: 14 }}>
                  <div>
                    <label style={labelStyle}>Which plan or practice am I doing?</label>
                    <input type="text" value={jPlan} onChange={e => setJPlan(e.target.value)}
                      placeholder="e.g. 7-Day Social Media Fast, Day 3" style={{ ...inputStyle, resize: undefined }} />
                  </div>
                  <div>
                    <label style={labelStyle}>What have I noticed about my attention and cravings?</label>
                    <textarea rows={3} value={jObservation} onChange={e => setJObservation(e.target.value)}
                      placeholder="When did I reach for my phone? What emotions triggered it?" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>What did I most miss — and what does that reveal?</label>
                    <textarea rows={3} value={jMissed} onChange={e => setJMissed(e.target.value)}
                      placeholder="What did the absence feel like? What was the phone filling?" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>What have I discovered about God, myself, or others?</label>
                    <textarea rows={3} value={jDiscovery} onChange={e => setJDiscovery(e.target.value)}
                      placeholder="Insights, surprises, encounters with God in the freed space..." style={inputStyle} />
                  </div>
                  <button type="button" onClick={saveEntry}
                    style={{ padding: "12px 24px", background: GREEN, color: "#000", borderRadius: 12, fontWeight: 800, fontSize: 14, border: "none", cursor: "pointer", alignSelf: "flex-start" }}>
                    Save Entry
                  </button>
                </div>
              </div>
              {journal.length > 0 && (
                <div style={{ display: "grid", gap: 12 }}>
                  {journal.map(e => (
                    <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 18 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                        <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{e.date}</p>
                        {e.plan && <span style={{ fontSize: 11, color: GREEN, fontWeight: 700 }}>{e.plan}</span>}
                      </div>
                      {e.observation && <div style={{ marginBottom: 10 }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Observations</p>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{e.observation}</p>
                      </div>}
                      {e.discovery && <div>
                        <p style={{ fontSize: 11, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Discovery</p>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{e.discovery}</p>
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
