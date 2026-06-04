"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "types" | "practice" | "history" | "videos";

const theologyPoints = [
  {
    title: "Jesus Assumes His Disciples Will Fast",
    content: "Matthew 6:16-18 is decisive: 'When you fast...' — not 'if you fast.' Jesus doesn't command fasting in a new commandment; he assumes it as part of normal discipleship, addressing only the manner (in secret, not for show). In Matthew 9:15, Jesus tells the Pharisees' disciples: when the bridegroom is taken away, 'then they will fast.' The post-ascension church is the community of people who fast while waiting for the Bridegroom to return."
  },
  {
    title: "Fasting Is Not Works-Righteousness",
    content: "Fasting does not earn merit with God or improve his disposition toward you. It does not make prayer more effective by quantity of effort. It is a spiritual discipline — a practice that trains the soul, expresses dependence, and sharpens spiritual attention. John Piper: 'Fasting is the exclamation point on prayer — it says, I mean this.' It is the body's participation in the soul's hunger for God."
  },
  {
    title: "Fasting Expresses Mourning, Urgency, and Longing",
    content: "In the Old Testament, fasting accompanies grief (2 Samuel 12:16 — David fasting for the child), confession (Nehemiah 9:1-2), and urgent intercession (Esther 4:16). In the New Testament, the apostles fast before commissioning Paul and Barnabas (Acts 13:2-3), and before appointing elders (Acts 14:23). Fasting is the body saying: this matters so much that eating feels beside the point."
  },
  {
    title: "Fasting and the Presence of God",
    content: "Isaiah 58 is the great corrective chapter on fasting: God rejects the fast that is accompanied by oppression and injustice, calling instead for fasting that 'loosens the chains of injustice.' True fasting is inseparable from justice and mercy. But the chapter also promises that the genuine fast opens the ear to God: 'Then you will call, and the Lord will answer.' Fasting creates a spiritual openness, a hunger for the bread of heaven when natural hunger is set aside."
  },
  {
    title: "Fasting Trains Desire",
    content: "C.S. Lewis understood the training function of fasting: appetite is master of those who do not discipline it. The person who cannot say no to hunger cannot easily say no to lust, greed, or fear. Fasting is the practice field for all self-denial. It teaches the body that it does not run the show. It rehearses, in the least consequential area (food), the habit of saying no that must be exercised everywhere else."
  },
  {
    title: "Corporate Fasting",
    content: "The church fasted together in the New Testament (Acts 13:2; 14:23) and the Old (Joel 2:15-16 — 'call a sacred assembly'). Many churches now practice corporate fasting in January (for discernment and new year focus), during Lent, in preparation for major decisions, or in response to crises. A church that fasts together is a church that is serious about spiritual realities that cannot be managed with better programs."
  }
];

const types = [
  {
    type: "Normal Fast",
    color: "#10B981",
    desc: "Abstaining from all food but continuing to drink water. This is the standard fast assumed in Scripture — Moses (Exodus 34:28, supernaturally sustained), Jesus (Matthew 4:2), and most biblical examples.",
    duration: "One meal, one day, three days, or longer",
    caution: "Consult a physician for fasts longer than 3 days. Never continue a fast that produces severe symptoms.",
    biblical: "Matthew 4:2, Acts 9:9, 2 Chronicles 20:3",
    spirit: "Full physical hunger; complete spiritual dependence; the purest form of the biblical fast"
  },
  {
    type: "Partial Fast",
    color: "#3B82F6",
    desc: "Abstaining from specific foods or limiting eating to certain hours. The Daniel Fast (Daniel 1:12 — vegetables and water only) and abstaining from 'choice food' (Daniel 10:3 — no meat, wine, or delicacies) are the models.",
    duration: "Any length — 3 days, 21 days (popular Daniel Fast), or ongoing during a season",
    caution: "Partial fasts can become dietary habits rather than spiritual practices — check your motivation regularly.",
    biblical: "Daniel 1:12, Daniel 10:3, Romans 14:2-3",
    spirit: "Particularly accessible for those with medical conditions or who cannot safely do complete fasts"
  },
  {
    type: "Absolute Fast",
    color: "#EF4444",
    desc: "No food or water. This is the most extreme form — Esther's 3-day fast (Esther 4:16) and Moses's 40-day fast are supernatural examples. Not recommended for regular practice.",
    duration: "Maximum 3 days; Moses and Esther's fasts were extraordinary, not normative",
    caution: "Do not fast without water for more than 3 days without direct divine guidance and medical awareness. This is rare and exceptional.",
    biblical: "Esther 4:16, Deuteronomy 9:18, Acts 9:9",
    spirit: "Reserved for moments of extreme urgency; most applications of 'absolute fast' in Scripture are brief and crisis-driven"
  },
  {
    type: "Corporate Fast",
    color: "#8B5CF6",
    desc: "The whole church (or a group within it) fasting together for a shared purpose: discernment, revival, national repentance, a specific decision. Joel's assembly fast is the OT model; Acts 13:2 and 14:23 are NT examples.",
    duration: "One day, one week, or a designated season (e.g., Lent, Daniel Fast in January)",
    caution: "Corporate fasts should have clear purposes, clear guidance, and pastoral care for those who cannot participate.",
    biblical: "Joel 2:15-16, Acts 13:2-3, Nehemiah 9:1-2",
    spirit: "Powerful for building unity and corporate dependence; creates shared spiritual history in a congregation"
  },
  {
    type: "Media / Tech Fast",
    color: "#F59E0B",
    desc: "Abstaining from social media, entertainment, or screens for a set period. Not a biblical category but a legitimate modern application of the fasting principle — creating space where distraction usually occupies.",
    duration: "One day per week, one week, or Lent",
    caution: "Do not treat this as equivalent to food fasting in biblical terms — but it can serve the same formative function of creating space for God.",
    biblical: "Principle drawn from Romans 12:2 and Philippians 4:8",
    spirit: "Especially valuable for those whose primary distraction is digital rather than culinary"
  }
];

const practiceSteps = [
  {
    step: "1. Establish Your Why",
    desc: "Before you begin, articulate your purpose in prayer. Is this for: deeper intercession? Seeking guidance? Repentance? The annual rhythm of Lent? A church crisis? Vague fasting produces vague results. Name the specific spiritual intention and write it down."
  },
  {
    step: "2. Choose the Type and Duration",
    desc: "Start conservatively — especially if you are new to fasting. A one-meal fast is a legitimate beginning. A 24-hour fast (dinner to dinner) is manageable for most healthy adults. Don't begin with a 21-day fast out of spiritual ambition."
  },
  {
    step: "3. Prepare Your Body",
    desc: "The day before a longer fast, eat lighter foods — no heavy meals, alcohol, or caffeine. If you are caffeine-dependent, taper off 1-2 days before to avoid withdrawal headaches during the fast."
  },
  {
    step: "4. Replace Meals with Prayer",
    desc: "Every time you would eat, pray instead. The hunger is your reminder. Use hunger pangs as prayer triggers. Read Scripture. The physical space created by not eating is meant to be filled with God, not Netflix."
  },
  {
    step: "5. Drink Water (Unless Absolute Fast)",
    desc: "Hydrate well throughout normal and partial fasts. Some people include herbal tea or black coffee in fasts (judgment call). Hunger will decrease; thirst will not — keep drinking water."
  },
  {
    step: "6. Guard Your Mouth",
    desc: "Isaiah 58 — the great fasting chapter — warns that fasting while quarreling and harboring bitterness is worthless. Fast from conflict as well as food. The fast is a whole-body consecration, not just physical abstinence."
  },
  {
    step: "7. Break the Fast Gently",
    desc: "After longer fasts, reintroduce food slowly: fruit juice, then soft fruits, then light solids. A big meal immediately after extended fasting can make you sick. The body needs transition time."
  },
  {
    step: "8. Journal and Return",
    desc: "Write down what God said, what you sensed, what broke, what held. The journaled fast is a resource for future prayer and evidence of answered intercession. Build a fasting rhythm — not just crisis fasting, but regular disciplines (weekly, monthly, Lent)."
  }
];

const historicalFasts = [
  {
    name: "The Didache (c. 100 AD)",
    color: "#8B5CF6",
    era: "Early Church",
    detail: "The earliest Christian document outside the New Testament specifies that Christians should fast on Wednesdays and Fridays — distinguishing from the Jewish Mondays and Thursdays. The Wednesday fast commemorated Jesus's betrayal; the Friday fast commemorated the crucifixion.",
    significance: "Shows fasting was universal and structured in the very earliest church"
  },
  {
    name: "Desert Fathers (3rd–4th century)",
    color: "#10B981",
    era: "Patristic",
    detail: "Anthony of Egypt (251-356 AD) and the desert tradition developed rigorous fasting practices, often eating only once a day or every other day. Their fasting was inseparable from prayer, watchfulness, and resistance to demonic attack. Sayings of the Desert Fathers are filled with wisdom about fasting's spiritual function.",
    significance: "Established fasting as a core monastic and ascetic discipline for spiritual warfare"
  },
  {
    name: "Protestant Reformers",
    color: "#3B82F6",
    era: "Reformation",
    detail: "Calvin retained fasting as a legitimate spiritual discipline while rejecting its merit-earning function. Luther fasted but warned against using it as a work of righteousness. John Knox famously called Scotland to prayer and fasting for the Reformation cause — credited by historians with turning the tide.",
    significance: "Purified fasting of works-righteousness while retaining its biblical function"
  },
  {
    name: "Puritan Fasting Days",
    color: "#F59E0B",
    era: "17th Century",
    detail: "The Puritans practiced both private and corporate fasting extensively. Days of fasting and prayer were called for before major decisions, during community crises, and as regular spiritual discipline. Jonathan Edwards called his congregation to periodic fasts. The Westminster Directory for Public Worship includes guidance on public fasting.",
    significance: "Integrated fasting into corporate church governance and community life"
  },
  {
    name: "John Wesley & Methodist Revival",
    color: "#EF4444",
    era: "18th Century",
    detail: "Wesley fasted every Wednesday and Friday throughout his life, following the early church pattern of the Didache. He considered fasting a 'means of grace' — an instrument God uses for spiritual formation. The early Methodist movement was marked by serious disciplines of prayer and fasting.",
    significance: "Linked fasting to the revivalist tradition and means of grace theology"
  },
  {
    name: "Modern Prayer Movements",
    color: "#6B4FBB",
    era: "Contemporary",
    detail: "The International House of Prayer (IHOPKC) has practiced 24/7 prayer and regular fasting since 1999. Bill Bright (Campus Crusade) called Christians to a 40-day fast in the 1990s and wrote about 50 million Christians fasting at one time. The Global Day of Prayer and Concert of Prayer movements regularly incorporate fasting.",
    significance: "Demonstrates that fasting remains a vital discipline in the contemporary global church"
  }
];

export default function FastingGuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedType, setSelectedType] = useState(types[0]);

  const toggle = (k: string) => setExpanded(p => ({ ...p, [k]: !p[k] }));

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Biblical Theology" },
    { id: "types", label: "Types of Fasting" },
    { id: "practice", label: "How to Fast" },
    { id: "history", label: "Church History" },
    { id: "videos", label: "Videos" }
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: 80, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            SPIRITUAL DISCIPLINE
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, margin: "0 0 12px" }}>
            The Complete Fasting Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            "When you fast..." — Jesus assumed his disciples would fast. Not as a means of earning God's favor, but as the body's participation in the soul's hunger for God. This is the complete biblical and practical guide.
          </p>
        </div>

        {/* Quote */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "16px 24px", marginBottom: 32, textAlign: "center" }}>
          <p style={{ margin: 0, fontStyle: "italic", color: MUTED, lineHeight: 1.7 }}>
            "Fasting is the exclamation point on prayer. It says: I mean this. I am serious about this. My body agrees with my soul that this matters." — John Piper
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#000" : TEXT,
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontWeight: 600, fontSize: 14
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Theology */}
        {activeTab === "theology" && (
          <div style={{ maxWidth: 720 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>
              The biblical case for fasting is strong and consistent across both Testaments. Understanding why we fast is as important as knowing how.
            </p>
            {theologyPoints.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 12 }}>
                <button
                  onClick={() => toggle(`pt-${i}`)}
                  style={{
                    width: "100%", background: "none", border: "none", color: TEXT,
                    padding: "16px 20px", textAlign: "left", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontWeight: 700, fontSize: 15
                  }}
                >
                  {pt.title}
                  <span style={{ color: MUTED }}>{expanded[`pt-${i}`] ? "−" : "+"}</span>
                </button>
                {expanded[`pt-${i}`] && (
                  <div style={{ padding: "0 20px 16px", color: MUTED, lineHeight: 1.7, fontSize: 14 }}>
                    {pt.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Types */}
        {activeTab === "types" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {types.map(t => (
                  <div
                    key={t.type}
                    onClick={() => setSelectedType(t)}
                    style={{
                      background: selectedType.type === t.type ? t.color + "22" : CARD,
                      border: `2px solid ${selectedType.type === t.type ? t.color : BORDER}`,
                      borderRadius: 10, padding: 16, cursor: "pointer"
                    }}
                  >
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>{t.type}</div>
                    <div style={{ fontSize: 12, color: MUTED }}>{t.desc.substring(0, 80)}…</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              width: 340, flexShrink: 0, background: CARD, border: `1px solid ${BORDER}`,
              borderRadius: 12, padding: 24, position: "sticky", top: 20
            }}>
              <div style={{ height: 4, background: selectedType.color, borderRadius: 2, marginBottom: 16 }} />
              <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 800 }}>{selectedType.type}</h3>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 14 }}>{selectedType.desc}</p>
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 4 }}>DURATION</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedType.duration}</p>
              </div>
              <div style={{ marginBottom: 10, borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, marginBottom: 4 }}>BIBLICAL BASIS</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedType.biblical}</p>
              </div>
              <div style={{ marginBottom: 10, borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, marginBottom: 4 }}>SPIRIT</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{selectedType.spirit}</p>
              </div>
              <div style={{ background: "#EF444411", border: "1px solid #EF444433", borderRadius: 8, padding: 10, marginTop: 10 }}>
                <div style={{ fontSize: 11, color: "#EF4444", fontWeight: 700, marginBottom: 4 }}>CAUTION</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.4 }}>{selectedType.caution}</p>
              </div>
            </div>
          </div>
        )}

        {/* Practice */}
        {activeTab === "practice" && (
          <div style={{ maxWidth: 720 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>
              Fasting is a practice — it requires practical wisdom as much as spiritual intention. These {practiceSteps.length} steps give you the full arc from preparation to completion.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {practiceSteps.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20, display: "flex", gap: 16 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%", background: GREEN, color: "#000",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 900, fontSize: 14, flexShrink: 0
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 6, fontSize: 15 }}>{s.step.replace(`${i + 1}. `, "")}</div>
                    <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* History */}
        {activeTab === "history" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {historicalFasts.map((h, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, borderTop: `3px solid ${h.color}` }}>
                <div style={{ fontSize: 11, color: h.color, fontWeight: 700, marginBottom: 6 }}>{h.era.toUpperCase()}</div>
                <h3 style={{ margin: "0 0 10px", fontSize: 16 }}>{h.name}</h3>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{h.detail}</p>
                <div style={{ background: BG, borderRadius: 8, padding: 10 }}>
                  <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 4 }}>SIGNIFICANCE</div>
                  <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{h.significance}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Videos */}
        {activeTab === "videos" && (
          <div style={{ maxWidth: 720 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>
              Video teachings on fasting — biblical foundations, practical guidance, and testimony from those who have made fasting a regular discipline.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { videoId: "AJEoDKK55VY", title: "Fasting for Beginners — A Biblical Guide", channel: "Desiring God", description: "John Piper on the biblical theology of fasting: why Jesus assumed his disciples would fast, what fasting accomplishes spiritually, and practical advice for starting." },
                { videoId: "_Kq3k1JZjBE", title: "The Spiritual Discipline of Fasting", channel: "Renovaré", description: "Richard Foster on fasting as one of the classical spiritual disciplines — how it trains desire, creates space for God, and what to expect in the practice." },
                { videoId: "tXOPtQqQiRs", title: "How to Fast: Practical Steps for Every Believer", channel: "Gateway Church", description: "Practical teaching on how to fast — preparing your body, what to do during the fast, how to break it, and how to make fasting a regular rhythm of life." },
                { videoId: "3kzJRABgLXw", title: "Corporate Fasting: When the Church Fasts Together", channel: "International House of Prayer", description: "Teaching on the biblical and historical practice of corporate fasting — its power, purpose, and how local churches can build fasting into their community life." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
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
        )}
      </div>
      <Footer />
    </div>
  );
}
