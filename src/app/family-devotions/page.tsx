"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const AGE_GUIDES = [
  {
    id: "toddler",
    name: "Toddlers (Ages 2–4)",
    icon: "🧸",
    color: "#F59E0B",
    time: "5–7 minutes",
    format: "A Bible story picture book, a simple song, and one question",
    tips: [
      "Use a good children's Bible with vivid images (The Jesus Storybook Bible is excellent)",
      "Ask one simple question: 'Who made the stars?' 'Who loves you always?'",
      "Repeat the same song or prayer every night — repetition builds faith",
      "Let them hold the Bible, turn the pages, and be active participants",
      "Don't worry about their understanding — you are planting seeds and building habit",
    ],
    sample: "Read 1 short story. Sing 'Jesus Loves Me.' Pray together: 'Thank you God for ___.' Done.",
  },
  {
    id: "elementary",
    name: "Elementary (Ages 5–11)",
    icon: "📚",
    color: "#3B82F6",
    time: "10–15 minutes",
    format: "Scripture reading, discussion questions, and prayer",
    tips: [
      "Let children read aloud — even haltingly. It builds ownership.",
      "Ask 'What do you notice?' and 'What does this tell us about God?' — not just 'What does this mean?'",
      "Use a children's devotional series for structure (Long Story Short, Jesus Storybook Bible curriculum)",
      "Connect the passage to something in their daily life",
      "Let them pray in their own words — don't script it for them",
    ],
    sample: "Read 3-5 verses. Ask 2 questions. Each person names one thing to be grateful for. Pray.",
  },
  {
    id: "middle",
    name: "Middle School (Ages 12–14)",
    icon: "🔍",
    color: "#10B981",
    time: "10–20 minutes",
    format: "Passage + open discussion + journaling option",
    tips: [
      "Ask for their opinion: 'What do you think about this?' Resist correcting immediately",
      "Welcome doubts and hard questions — this is the age when faith must become their own",
      "Let them choose passages or topics occasionally",
      "Discussion can be more valuable than devotional content at this age",
      "A shared family journal where each person writes their response can work well",
    ],
    sample: "Read a passage together. Ask: 'What questions does this raise for you?' Discuss openly. Pray.",
  },
  {
    id: "high-school",
    name: "High School (Ages 15–18)",
    icon: "💬",
    color: PURPLE,
    time: "15–25 minutes",
    format: "Discussion over a meal, or topic-driven conversations",
    tips: [
      "The format may shift from 'devotional' to 'conversation' — that's fine",
      "Discuss current events through a Christian lens: 'What does Scripture say about this?'",
      "Read a book together (Mere Christianity, The Reason for God)",
      "Go to church together and debrief the sermon over lunch",
      "Ask about their spiritual life: 'Where are you struggling with God right now?'",
    ],
    sample: "Read a chapter of a book together this week. Discuss over dinner. Ask: 'What challenged you most?'",
  },
];

const FORMATS = [
  { name: "Breakfast Devotional", icon: "☀️", color: "#F59E0B", when: "Before school", desc: "Short — 5 to 10 minutes max. One verse, one question, one prayer. The advantage is that the whole family is already gathered." },
  { name: "Bedtime Routine", icon: "🌙", color: "#8B5CF6", when: "At night", desc: "Natural integration with existing bedtime rituals. Works especially well for younger children. Read, pray, and a blessing over each child." },
  { name: "Dinner Table Discussion", icon: "🍽️", color: "#EF4444", when: "Evening meal", desc: "Organic and flexible. Ask one question related to faith or Scripture during dinner. No special materials required — conversation is the format." },
  { name: "Weekly Family Meeting", icon: "📅", color: "#10B981", when: "Weekend", desc: "A slightly longer time once a week — 20 to 30 minutes. Can include review of the church sermon, prayer, and discussion of family life." },
  { name: "Car Ride Conversations", icon: "🚗", color: "#3B82F6", when: "In transit", desc: "Captive audience, no screens, natural conversation. Ask one spiritual question on the way to school. Some of the best faith conversations happen in cars." },
];

const DEVOTIONAL_PLANS = [
  { series: "Creation to New Creation (10 weeks)", desc: "Walk through the Bible's big story in 10 sessions — creation, fall, promise, law, prophets, Jesus, church, return.", sessions: ["Creation: Genesis 1-2", "The Fall: Genesis 3", "Promise: Genesis 12 (Abraham)", "Exodus & the Law", "David & the Kingdom", "Prophets & Exile", "The Incarnation: Luke 2", "The Cross & Resurrection", "Pentecost & the Church", "New Creation: Revelation 21-22"] },
  { series: "The Lord's Prayer (7 weeks)", desc: "A deep dive into each phrase of the Lord's Prayer — the curriculum Jesus gave his disciples for prayer.", sessions: ["Our Father in Heaven", "Hallowed Be Your Name", "Your Kingdom Come", "Daily Bread", "Forgive Us Our Debts", "Deliver Us from Evil", "The Doxology"] },
  { series: "Fruits of the Spirit (9 weeks)", desc: "One week on each fruit of the Spirit (Galatians 5:22-23) — what it is, how it grows, and how to practice it.", sessions: ["Love", "Joy", "Peace", "Patience", "Kindness", "Goodness", "Faithfulness", "Gentleness", "Self-Control"] },
];

interface FavPlan { id: string; name: string; }

export default function FamilyDevotionsPage() {
  const [activeTab, setActiveTab] = useState<"ages" | "formats" | "plans">("ages");
  const [selectedAge, setSelectedAge] = useState("elementary");
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const ageGuide = AGE_GUIDES.find(a => a.id === selectedAge)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👨‍👩‍👧‍👦</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Family Devotions</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The most important spiritual formation happens at home. Consistent family devotions — even simple, imperfect ones — build faith across generations. Here is how to start and sustain them.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "ages" as const, label: "By Age Group", icon: "👧" },
            { id: "formats" as const, label: "Formats", icon: "🗓️" },
            { id: "plans" as const, label: "Devotional Plans", icon: "📖" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "ages" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
              {AGE_GUIDES.map(a => (
                <button key={a.id} onClick={() => setSelectedAge(a.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedAge === a.id ? a.color : BORDER}`, background: selectedAge === a.id ? `${a.color}18` : CARD, color: selectedAge === a.id ? a.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textAlign: "left" }}>
                  {a.icon} {a.name.split(" ")[0]}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${ageGuide.color}40`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                  <span style={{ fontSize: 30 }}>{ageGuide.icon}</span>
                  <div>
                    <h2 style={{ color: ageGuide.color, fontWeight: 900, fontSize: 20, margin: 0 }}>{ageGuide.name}</h2>
                    <div style={{ color: MUTED, fontSize: 13 }}>⏱️ {ageGuide.time} | Format: {ageGuide.format}</div>
                  </div>
                </div>
                <div style={{ background: `${ageGuide.color}10`, border: `1px solid ${ageGuide.color}25`, borderRadius: 10, padding: 14, margin: "14px 0" }}>
                  <div style={{ color: ageGuide.color, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>SAMPLE DEVOTION</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>{ageGuide.sample}</p>
                </div>
                <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 8 }}>TIPS FOR THIS AGE</div>
                {ageGuide.tips.map((tip, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: ageGuide.color, flexShrink: 0, marginTop: 7 }} />
                    <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.55 }}>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "formats" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The best family devotion is the one your family will actually do. Choose a format that fits your existing rhythms rather than adding a new competing demand. Start smaller than you think necessary and build from there.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FORMATS.map(f => (
                <div key={f.name} style={{ background: CARD, border: `1px solid ${f.color}30`, borderRadius: 12, padding: 20, display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 30, flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span style={{ color: f.color, fontWeight: 800, fontSize: 16 }}>{f.name}</span>
                      <span style={{ background: `${f.color}15`, color: f.color, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{f.when}</span>
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "plans" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These multi-week devotional series give structure to family Bible time. Each can be adapted for any age group. Pick one, commit to it, and finish it — even imperfectly.
              </p>
            </div>
            {DEVOTIONAL_PLANS.map(p => (
              <div key={p.series} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button onClick={() => setExpandedPlan(expandedPlan === p.series ? null : p.series)}
                  style={{ width: "100%", padding: "18px 22px", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}>
                  <div>
                    <div style={{ color: GREEN }}>{p.series}</div>
                    <div style={{ color: MUTED, fontSize: 12, fontWeight: 400, marginTop: 2 }}>{p.desc}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{expandedPlan === p.series ? "−" : "+"}</span>
                </button>
                {expandedPlan === p.series && (
                  <div style={{ padding: "0 22px 20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {p.sessions.map((s, i) => (
                        <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                          <div style={{ width: 22, height: 22, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                          <span style={{ color: TEXT, fontSize: 14 }}>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
