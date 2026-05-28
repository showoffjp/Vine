"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const PILLARS = [
  {
    id: "covenant",
    name: "Covenant",
    icon: "💍",
    color: "#F59E0B",
    summary: "Marriage is a covenant — not a contract. Contracts are conditional; covenants are kept regardless of performance.",
    body: "The Hebrew word for covenant (berith) involves binding promises, sacrifice, and the weight of one's whole person. When God makes covenants, he keeps them even when the other party fails. Christian marriage is designed to reflect this — the promises made at the altar are not conditional on behavior but on the covenant itself. This is why Christian marriage counseling always asks: 'Who are you in this covenant?' not only 'What are you doing?'\n\nThe covenant frame changes how you approach conflict. You are not trying to win against your spouse — you are two covenant partners trying to solve a shared problem. The enemy of your marriage is not your spouse but the forces arrayed against your covenant.",
    practices: ["Renew your vows intentionally — verbally, in writing, or in a small ceremony with friends", "Keep a 'covenant record' — write down what you committed to and return to it annually", "In conflict, ask: 'How can we solve this together?' before 'How can I make my point?'"],
    verse: "Therefore what God has joined together, let no one separate. — Mark 10:9",
  },
  {
    id: "communication",
    name: "Communication",
    icon: "💬",
    color: "#3B82F6",
    summary: "Most marriage problems are communication problems. Most communication problems are listening problems.",
    body: "Research by John Gottman found that the way a conflict conversation begins determines how it will end 96% of the time. A 'harsh startup' — beginning with criticism, contempt, or defensiveness — almost always produces a destructive conversation regardless of the content. A 'soft startup' — 'I feel... when... and I need...' — has a much higher chance of resolution.\n\nBiblically, James 1:19 gives us the sequence: 'quick to listen, slow to speak, slow to become angry.' The order matters. Most people are slow to listen, quick to speak, and quick to become angry. Reversing this order requires practice.",
    practices: [
      "The Speaker-Listener technique: one speaks at a time, the other reflects back what they heard before responding",
      "Weekly check-in: 20 minutes with no distractions — high and low of the week, one thing I appreciate about you",
      "Avoid the Four Horsemen: Criticism, Contempt, Defensiveness, Stonewalling (Gottman's predictors of divorce)",
      "Call a time-out when physiologically flooded — return after 20-30 minutes",
    ],
    verse: "Let your conversation be always full of grace, seasoned with salt. — Colossians 4:6",
  },
  {
    id: "intimacy",
    name: "Intimacy",
    icon: "❤️",
    color: "#EC4899",
    summary: "Intimacy is multi-dimensional — emotional, spiritual, intellectual, physical — and all dimensions require cultivation.",
    body: "The Hebrew word yada (to know) is used both for intimate knowledge of God and for sexual union (Genesis 4:1). This is not a coincidence — the Bible presents all forms of knowing as connected. The couple that doesn't know each other spiritually and emotionally will often struggle with physical intimacy too.\n\nPhysical intimacy in marriage is given high theological weight in Scripture. 1 Corinthians 7:3-5 establishes mutuality and availability as the norm — not as duty but as a gift given to one another. Song of Solomon celebrates physical love without embarrassment. Proverbs 5:18-19 encourages husbands to be 'captivated by' their wives.\n\nMost marriages don't fail because of lack of love but because the investment in intimacy (in all its forms) decreases over time. Sustained intimacy requires sustained intention.",
    practices: [
      "Identify your and your spouse's 'intimacy language' — what makes each of you feel most connected?",
      "Pray together — couples who pray together divorce at a fraction of the average rate",
      "Date nights: consistent, protected, phone-free time for emotional and relational investment",
      "Address sexual intimacy directly and honestly — silence about struggles in this area feeds resentment",
    ],
    verse: "May you rejoice in the wife of your youth... may her breasts satisfy you always, may you ever be intoxicated with her love. — Proverbs 5:18-19",
  },
  {
    id: "conflict",
    name: "Conflict",
    icon: "⚡",
    color: "#EF4444",
    summary: "Conflict in marriage is not a sign of a broken marriage — how it is handled determines whether it's growing or dying.",
    body: "The goal of conflict in marriage is not to win but to understand. Ken Sande's peacemaking framework asks: 'Am I trying to win or trying to reconcile?' Most marital conflict escalates because both parties switch into courtroom mode — trying to build their case and prove the other wrong — rather than staying in understanding mode.\n\nBiblical conflict resolution involves: taking the log out of your own eye first (Matt 7:5), going directly to the person involved (Matt 18:15), listening more than you speak (James 1:19), and never letting anger become the environment you live in ('do not let the sun go down while you are still angry' — Eph 4:26).",
    practices: [
      "Fight about the issue, not about character — 'You didn't do X' instead of 'You always...' or 'You never...'",
      "The repair attempt: Gottman found that successful couples make 'repair attempts' in the middle of conflict — humor, apology, a gentle touch — to de-escalate",
      "Apologize specifically: not 'I'm sorry you feel that way' but 'I was wrong when I... I'm sorry.'",
      "Marriage counseling is not a last resort — it is proactive maintenance",
    ],
    verse: "Be completely humble and gentle; be patient, bearing with one another in love. — Ephesians 4:2",
  },
  {
    id: "roles",
    name: "Roles & Mutual Submission",
    icon: "🤝",
    color: "#8B5CF6",
    summary: "Ephesians 5 begins with mutual submission before addressing husband-wife dynamics — this context changes everything.",
    body: "Ephesians 5:21 — 'Submit to one another out of reverence for Christ' — is the heading over the entire household code that follows, including the husband-wife dynamic. This means that whatever Paul says to wives and husbands is set within a framework of mutual submission.\n\nFor the husband: 'Love your wives as Christ loved the church and gave himself up for her' (Eph 5:25). Christ's headship was expressed in self-giving sacrifice, not in authority and control. A husband who understands this is not exercising power over his wife but offering himself for her flourishing.\n\nFor the wife: the call to respect and come under the husband's leadership is given in the context of a husband who is offering sacrificial love, not demanding service. The entire vision is one of sacrificial partnership, not hierarchy for its own sake.",
    practices: [
      "Ask: what would it look like for me to lay down my preferences for my spouse today?",
      "Discuss your understanding of roles openly — unspoken assumptions produce silent resentment",
      "Study Ephesians 5:21-33 together and discuss what it means for your specific marriage",
      "Seek couples who model what you aspire to and learn from them",
    ],
    verse: "Submit to one another out of reverence for Christ. — Ephesians 5:21",
  },
];

const DEVOTIONAL_PROMPTS = [
  "What is one thing you appreciate about your spouse that you haven't said in a while?",
  "What was the best moment of your marriage this past month?",
  "What is one way your spouse has grown that you want to celebrate?",
  "What is one thing you need from your spouse right now that you haven't asked for?",
  "Where do you feel most connected in your marriage? Where do you feel most disconnected?",
  "What is one prayer you have for your spouse today?",
  "What is one thing you could do this week to invest in your marriage?",
  "What is a season of your marriage you're grateful you went through together?",
];

export default function MarriagePage() {
  const [activeTab, setActiveTab] = useState<"pillars" | "devotional" | "checkup">("pillars");
  const [selectedPillar, setSelectedPillar] = useState("covenant");
  const [expandedPillar, setExpandedPillar] = useState<string | null>("covenant");
  const [checkupAnswers, setCheckupAnswers] = useState<Record<string, number>>(() => {
    try { const s = localStorage.getItem("vine_marriage_checkup"); return s ? JSON.parse(s) : {}; } catch { return {}; }
  });
  const [journalText, setJournalText] = useState(() => {
    try { return localStorage.getItem("vine_marriage_journal") || ""; } catch { return ""; }
  });

  useEffect(() => { try { localStorage.setItem("vine_marriage_checkup", JSON.stringify(checkupAnswers)); } catch {} }, [checkupAnswers]);
  useEffect(() => { try { localStorage.setItem("vine_marriage_journal", journalText); } catch {} }, [journalText]);

  const pillar = PILLARS.find(p => p.id === selectedPillar)!;
  const avgScore = Object.values(checkupAnswers).length > 0
    ? (Object.values(checkupAnswers).reduce((a, b) => a + b, 0) / Object.values(checkupAnswers).length).toFixed(1)
    : null;

  const CHECKUP_AREAS = [
    "We communicate openly and honestly without fear",
    "We resolve conflicts without lasting resentment",
    "We prioritize our marriage relationship above other relationships",
    "We enjoy physical intimacy and feel connected in that area",
    "We pray together regularly",
    "We have fun together and still enjoy each other's company",
    "We are financially transparent and make decisions together",
    "We serve each other sacrificially",
    "We have a shared vision for our family and future",
    "We both feel seen, known, and valued by the other",
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Marriage</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Marriage as covenant, not contract. A resource for building, strengthening, and sustaining the marriage God designed.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "pillars" as const, label: "Pillars", icon: "🏛️" },
            { id: "devotional" as const, label: "Couple Devotional", icon: "💑" },
            { id: "checkup" as const, label: "Marriage Check-Up", icon: "📊" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "pillars" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
              {PILLARS.map(p => (
                <button key={p.id} onClick={() => setSelectedPillar(p.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedPillar === p.id ? p.color : BORDER}`, background: selectedPillar === p.id ? `${p.color}18` : CARD, color: selectedPillar === p.id ? p.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "left" }}>
                  {p.icon} {p.name}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${pillar.color}40`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 32 }}>{pillar.icon}</span>
                  <h2 style={{ color: pillar.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{pillar.name}</h2>
                </div>
                <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.6, marginBottom: 16, borderLeft: `3px solid ${pillar.color}`, paddingLeft: 14 }}>{pillar.summary}</p>
                {pillar.body.split("\n\n").map((para, i) => (
                  <p key={i} style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{para}</p>
                ))}
                <div style={{ background: `${pillar.color}10`, border: `1px solid ${pillar.color}30`, borderRadius: 8, padding: 14, marginBottom: 18 }}>
                  <p style={{ color: pillar.color, fontSize: 13, fontStyle: "italic", margin: 0 }}>{pillar.verse}</p>
                </div>
                <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Practices</h4>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  {pillar.practices.map((p, i) => <li key={i} style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, marginBottom: 8 }}>{p}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "devotional" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 12 }}>Couple Devotional Prompts</h3>
              <p style={{ color: TEXT, lineHeight: 1.7, fontSize: 15 }}>Use these as conversation starters during a weekly couple's devotional time. Pick one per session. Answer individually first, then share with each other — no interrupting while the other shares.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12, marginBottom: 24 }}>
              {DEVOTIONAL_PROMPTS.map((prompt, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: PURPLE, fontWeight: 800, fontSize: 24, marginBottom: 8 }}>{i + 1}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{prompt}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, marginBottom: 8 }}>Our Devotional Journal</h3>
              <textarea value={journalText} onChange={e => setJournalText(e.target.value)}
                placeholder={"Date:\nPrompt used:\n\nMy response:\n\nSpouse's response (if they share):\n\nWhat we want to pray about together:\n\n---"}
                style={{ width: "100%", minHeight: 200, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16, color: TEXT, fontSize: 14, lineHeight: 1.8, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>
          </div>
        )}

        {activeTab === "checkup" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, margin: 0 }}>Marriage Health Check-Up</h3>
                {avgScore && (
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: parseFloat(avgScore) >= 7 ? GREEN : parseFloat(avgScore) >= 5 ? "#F59E0B" : "#EF4444", fontWeight: 900, fontSize: 28 }}>{avgScore}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>/ 10 avg</div>
                  </div>
                )}
              </div>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>Rate each area from 1 (critical need) to 10 (thriving). Be honest — the goal is clarity, not a good score.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {CHECKUP_AREAS.map((area, i) => {
                  const score = checkupAnswers[i] || 0;
                  const color = score >= 7 ? GREEN : score >= 5 ? "#F59E0B" : score > 0 ? "#EF4444" : BORDER;
                  return (
                    <div key={i}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ color: TEXT, fontSize: 14 }}>{area}</span>
                        <span style={{ color: color, fontWeight: 700, fontSize: 14, minWidth: 24, textAlign: "right" }}>{score > 0 ? score : "—"}</span>
                      </div>
                      <div style={{ display: "flex", gap: 4 }}>
                        {[1,2,3,4,5,6,7,8,9,10].map(n => (
                          <button key={n} onClick={() => setCheckupAnswers(prev => ({ ...prev, [i]: n }))}
                            style={{ flex: 1, height: 8, borderRadius: 4, border: "none", background: n <= score ? (score >= 7 ? GREEN : score >= 5 ? "#F59E0B" : "#EF4444") : BORDER, cursor: "pointer" }} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {avgScore && (
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <h4 style={{ color: GREEN, fontWeight: 800, marginBottom: 10 }}>Based on Your Scores</h4>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7 }}>
                  {parseFloat(avgScore) >= 8 ? "Your marriage is in a healthy season — invest in maintaining what's working and pouring into other couples." :
                   parseFloat(avgScore) >= 6 ? "There's a solid foundation with specific areas that need intentional investment. Consider regular couple check-ins and possibly a marriage enrichment retreat." :
                   parseFloat(avgScore) >= 4 ? "There are real challenges that deserve serious, structured attention. We encourage you to consider seeing a Christian marriage counselor." :
                   "This appears to be a critical season. Please reach out to a pastor, Christian counselor, or marriage therapist. Help is available and marriages do recover."}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
