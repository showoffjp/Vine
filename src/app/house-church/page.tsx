"use client";

import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type GatheringElement = {
  id: string; name: string; icon: string; timeRange: string; description: string;
  howTo: string[]; examples: string[]; color: string; optional: boolean;
};

type Challenge = {
  challenge: string; icon: string; response: string; verse: string;
};

type Model = {
  name: string; origin: string; size: string; frequency: string;
  description: string; strengths: string[]; considerations: string[]; color: string;
};

const gatheringElements: GatheringElement[] = [
  {
    id: "welcome", name: "Welcome & Centering", icon: "🏡", timeRange: "5–10 min", optional: false, color: "#3B82F6",
    description: "Begin with intentional welcome — not just arriving, but truly transitioning from the week into sacred space together. This sets the tone for everything that follows.",
    howTo: [
      "Greet one another by name — use physical touch if your community does (handshake, hug)",
      "Light a candle or use a physical ritual to mark the transition",
      "Begin with a simple gathering prayer: 'Lord, we are here. Speak to us.'",
      "Have a host briefly state the intention of the gathering"
    ],
    examples: ["Shared cup of tea as people arrive", "Reading a single psalm together to center", "Brief 2-minute silence to release the week"]
  },
  {
    id: "meal", name: "Shared Meal", icon: "🍞", timeRange: "30–45 min", optional: true, color: "#F59E0B",
    description: "The early church broke bread from house to house (Acts 2:46). Eating together is one of the most powerful bonding acts humans can do, and it mirrors the Kingdom table.",
    howTo: [
      "Keep it simple — potluck, soup, or communal cooking prevents one family bearing too much burden",
      "Seat people so conversation flows across the table",
      "Bless the food with a prayer that connects it to the Lord's Table",
      "Let the meal run naturally — don't rush into the 'meeting'"
    ],
    examples: ["Rotating host brings main dish, guests bring sides", "Simple soup and bread (echoes the Eucharist naturally)", "One dish from each family's cultural background"]
  },
  {
    id: "worship", name: "Worship", icon: "🎵", timeRange: "15–25 min", optional: false, color: "#EC4899",
    description: "Simple, participatory worship — not a concert but a conversation with God. One guitar, a cappella voices, or a simple playlist can all serve this.",
    howTo: [
      "Choose 2–4 songs people know well — participation over performance",
      "Invite people to choose a song that speaks to where they are",
      "Don't rush between songs — let silence or prayer breathe between them",
      "Mix old hymns with contemporary — give the Spirit room in both"
    ],
    examples: ["One guitar, everyone singing", "A cappella with harmony", "Projected lyrics from a laptop, no band needed", "Lament psalms during hard seasons"]
  },
  {
    id: "scripture", name: "Scripture & Discussion", icon: "📖", timeRange: "20–35 min", optional: false, color: GREEN,
    description: "The heart of the gathering — read the Word together and ask it questions. House church shines here because everyone can contribute, not just a teacher.",
    howTo: [
      "Read the passage aloud — preferably by multiple readers",
      "Sit in silence for 1–2 minutes after reading",
      "Start with: 'What word or phrase stood out to you?'",
      "Move to: 'What does this reveal about God? About us?'",
      "Close with: 'What is one thing you'll carry from this text this week?'"
    ],
    examples: [
      "Lectio Divina: read 3 times, different focus each time",
      "Walk through a gospel together book by book over months",
      "Topical: one question, one passage, deep conversation"
    ]
  },
  {
    id: "prayer", name: "Corporate Prayer", icon: "🙏", timeRange: "15–20 min", optional: false, color: PURPLE,
    description: "Praying together is where community becomes church. Interceding for one another and the world is the priestly work of the gathered body.",
    howTo: [
      "Invite prayer requests — actual needs, not just 'unspoken prayers'",
      "Pray in small groups of 2–3 for deeper intimacy",
      "Pray conversationally: short, honest, specific sentences",
      "Include prayers for the neighborhood, city, and world",
      "Close with the Lord's Prayer together"
    ],
    examples: ["Each person prays for the person to their right", "Go around with one specific request each", "Extended prayer night: 90 minutes with no agenda"]
  },
  {
    id: "communion", name: "Lord's Supper", icon: "🍷", timeRange: "10–15 min", optional: true, color: "#EF4444",
    description: "Early Christians celebrated communion weekly (Acts 20:7). House church is the natural home for the table — intimate, unhurried, participatory.",
    howTo: [
      "Read 1 Corinthians 11:23-26 together",
      "Include a moment of self-examination in silence",
      "Use real bread and wine/juice — let participants break the bread themselves",
      "Invite sharing: 'What are you remembering today? What are you anticipating?'"
    ],
    examples: ["Tear bread together, each person serving the next", "Incorporate into the shared meal for natural continuity", "Monthly extended communion service"]
  },
  {
    id: "mission", name: "Mission Planning", icon: "🌍", timeRange: "10 min", optional: true, color: "#10B981",
    description: "House churches that turn outward stay healthy. Regular attention to your neighborhood, the poor, and the unreached keeps the community from becoming inwardly focused.",
    howTo: [
      "Ask: 'Who is God putting on our hearts this month?'",
      "Plan a concrete act of service or evangelism together",
      "Celebrate stories of answered prayer for specific people",
      "Adopt a neighborhood, family, or unreached group to pray for consistently"
    ],
    examples: ["Monthly neighborhood cleanup or meal", "Adopt a refugee family together", "Each member identifies one non-Christian friend to share with"]
  }
];

const models: Model[] = [
  {
    name: "The Simple Church",
    origin: "Western evangelical tradition",
    size: "5–15 people",
    frequency: "Weekly",
    description: "A minimalist approach: gather, eat, read Scripture, pray, go. No elaborate programs or structure. Often the most sustainable long-term model.",
    strengths: ["Easy to replicate and multiply", "Low cost", "No designated leader required", "Flexible with hosting"],
    considerations: ["Can lack depth without intentional study", "Needs periodic outside input to avoid insularity"],
    color: GREEN
  },
  {
    name: "The Missional Community",
    origin: "UK church planting movement",
    size: "20–50 people",
    frequency: "Bi-weekly",
    description: "Larger than a typical cell, organized around a shared mission in a neighborhood or people group. Often connected to a sending church.",
    strengths: ["Critical mass for outreach", "More gifts available", "Can support a family financially"],
    considerations: ["More organizational complexity", "Needs clear leadership structure", "Risk of feeling like small church, not house church"],
    color: PURPLE
  },
  {
    name: "The Covenant Community",
    origin: "Intentional community / monastic tradition",
    size: "4–10 adults",
    frequency: "Multiple times per week",
    description: "Members make formal commitments to one another — shared practices, shared finances in some cases, shared mission. High depth, high cost.",
    strengths: ["Deepest accountability", "Counter-cultural witness", "Strongest for discipleship"],
    considerations: ["Requires major life commitment", "Higher risk of conflict", "Takes years to establish"],
    color: "#F59E0B"
  },
  {
    name: "The Networked Cell",
    origin: "Global South, Asian church movements",
    size: "8–15 per cell",
    frequency: "Weekly cells + monthly gathering",
    description: "Small cells of 8–15 that gather weekly and connect to a larger network monthly. Designed explicitly to multiply when cells reach capacity.",
    strengths: ["Built-in multiplication DNA", "Combines depth and breadth", "Strong accountability"],
    considerations: ["Network needs strong apostolic leadership", "Monthly gathering requires venue"],
    color: "#3B82F6"
  }
];

const challenges: Challenge[] = [
  {
    challenge: "We're struggling to maintain consistency — attendance keeps dropping.",
    icon: "📉",
    response: "Consistency requires covenant, not just invitation. Have a direct conversation: 'Are you committed to this community, or is this optional for you?' House churches that clarify expectations early sustain better. Also evaluate: Is the gathering worth showing up for? Is it genuinely life-giving, or just another meeting?",
    verse: "Hebrews 10:24-25"
  },
  {
    challenge: "One person dominates every discussion and people are disengaging.",
    icon: "🗣️",
    response: "This is a leadership issue, not a personality issue. The facilitator must actively create space: 'Let's hear from someone we haven't heard from tonight.' Privately and lovingly name the pattern to the dominant person. Some people dominate out of nervousness or insecurity — address the root.",
    verse: "Ephesians 4:15-16"
  },
  {
    challenge: "We had a significant conflict and people left.",
    icon: "💔",
    response: "Conflict in a house church is inevitable and actually healthy if navigated well. The goal is not to avoid all conflict but to develop the skills to resolve it. Matthew 18 is the pattern: go directly, then together, then bring witnesses. Don't let conflict smolder underground — name it quickly and handle it face to face.",
    verse: "Matthew 18:15-17"
  },
  {
    challenge: "We feel isolated from a larger church body and are drifting theologically.",
    icon: "🧭",
    response: "Isolation is one of the genuine risks of house church. Build in regular connection with other communities: a yearly retreat together, a network relationship with a larger church, accountability with other house church leaders. Read good theology together. The Church is one body — connection across communities is healthy.",
    verse: "1 Corinthians 12:12-14"
  },
  {
    challenge: "We don't know how to handle children during gatherings.",
    icon: "👶",
    response: "There's no single right answer, but three models work: 1) Children participate in the full gathering (this is historically and cross-culturally normal), 2) Children have their own time during part of the gathering, 3) Families rotate leading children's time. Whichever you choose, make it explicit and rotate the work. Children belonging to the community is a gift, not a problem.",
    verse: "Mark 10:14"
  },
  {
    challenge: "We've outgrown our host's home. Should we become a small church?",
    icon: "📈",
    response: "When you consistently exceed 20-25 people, you have a choice: rent space and become a small church, multiply into two or three smaller groups, or begin a 'daughter' community that meets separately. Multiplication is the missional answer — a second community in a different home reaches more people and maintains the intimacy that makes house church valuable.",
    verse: "Acts 8:1-4"
  }
];

const essentials = [
  { icon: "📋", label: "Clear covenant", desc: "Written or verbal commitment to attendance, confidentiality, and mutual care" },
  { icon: "🔄", label: "Rotating leadership", desc: "Shared responsibility prevents burnout and develops everyone" },
  { icon: "🌱", label: "Multiplication mindset", desc: "Plan from the start to plant daughter groups" },
  { icon: "🔗", label: "Connection to larger body", desc: "Stay linked to the wider Church — don't become an island" },
  { icon: "🎯", label: "Shared mission", desc: "A focus outward (neighborhood, people group) that draws you together" },
  { icon: "📖", label: "Commitment to Scripture", desc: "Anchor every gathering in the Word — not just Christian self-help" },
];

export default function HouseChurchPage() {
  const [tab, setTab] = useState<"guide" | "models" | "challenges" | "planner">("guide");
  const [expandedElement, setExpandedElement] = useState<string | null>(null);
  const [expandedChallenge, setExpandedChallenge] = useState<number | null>(null);
  const [planItems, setPlanItems] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_house_church_plan"); return s ? new Set(JSON.parse(s)) : new Set(["welcome", "scripture", "prayer"]); } catch { return new Set(["welcome", "scripture", "prayer"]); }
  });
  const [savedElements, setSavedElements] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_house_church_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  useEffect(() => {
    try { localStorage.setItem("vine_house_church_plan", JSON.stringify([...planItems])); } catch {}
  }, [planItems]);
  useEffect(() => {
    try { localStorage.setItem("vine_house_church_saved", JSON.stringify([...savedElements])); } catch {}
  }, [savedElements]);

  const togglePlan = (id: string) => setPlanItems(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleSaved = (id: string) => setSavedElements(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const planOrder = gatheringElements.filter(e => planItems.has(e.id));
  const totalTime = planOrder.reduce((sum, e) => {
    const [min] = e.timeRange.split("–").map(s => parseInt(s));
    return sum + min;
  }, 0);

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.25)", borderRadius: 20, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ fontSize: 16 }}>🏡</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: GREEN, textTransform: "uppercase" }}>House Church</span>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, lineHeight: 1.1 }}>
            The Church in{" "}
            <span style={{ background: `linear-gradient(135deg, ${GREEN}, ${PURPLE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Your Home
            </span>
          </h1>
          <p style={{ color: MUTED, fontSize: 17, maxWidth: 580, margin: "0 auto 24px" }}>
            The first Christians gathered in homes. Simple, participatory, relational gatherings centered on Word, prayer, and table are not a lesser form of church — they may be its purest expression.
          </p>
          <div style={{ background: "rgba(0,255,136,0.06)", border: "1px solid rgba(0,255,136,0.18)", borderRadius: 12, padding: "14px 20px", maxWidth: 520, margin: "0 auto" }}>
            <p style={{ fontSize: 14, color: "#00CC66", fontStyle: "italic", margin: 0 }}>
              "They broke bread in their homes and ate together with glad and sincere hearts."
            </p>
            <p style={{ fontSize: 12, color: MUTED, marginTop: 4, marginBottom: 0 }}>— Acts 2:46</p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, borderBottom: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {[
            { id: "guide", label: "📋 Gathering Guide" },
            { id: "models", label: "🏛️ Models" },
            { id: "challenges", label: "⚡ Challenges" },
            { id: "planner", label: "🗓️ Meeting Planner" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id as typeof tab)}
              style={{ padding: "10px 18px", borderRadius: "10px 10px 0 0", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13, background: tab === t.id ? CARD : "transparent", color: tab === t.id ? TEXT : MUTED, borderBottom: tab === t.id ? `2px solid ${GREEN}` : "2px solid transparent" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* GATHERING GUIDE TAB */}
        {tab === "guide" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 28, fontSize: 15 }}>
              A house church gathering doesn't need a program — but intentional elements help it grow deeper. These are the building blocks. Not all required every time; adapt to your community's rhythm.
            </p>

            {/* Essentials banner */}
            <div style={{ background: `linear-gradient(135deg, rgba(107,79,187,0.1), rgba(0,255,136,0.05))`, border: `1px solid rgba(107,79,187,0.2)`, borderRadius: 16, padding: "24px", marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Non-Negotiables for a Healthy House Church</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
                {essentials.map(e => (
                  <div key={e.label} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{e.icon}</span>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 800, margin: "0 0 2px", color: TEXT }}>{e.label}</p>
                      <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Elements */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {gatheringElements.map(el => {
                const isExp = expandedElement === el.id;
                return (
                  <div key={el.id} style={{ background: CARD, border: `1px solid ${isExp ? el.color + "40" : BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                    <div style={{ padding: "18px 22px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                        <div style={{ display: "flex", gap: 14, flex: 1 }}>
                          <span style={{ fontSize: 26, flexShrink: 0 }}>{el.icon}</span>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
                              <h3 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>{el.name}</h3>
                              <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${el.color}15`, color: el.color, fontWeight: 700 }}>⏱ {el.timeRange}</span>
                              {!el.optional && <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: "rgba(0,255,136,0.1)", color: GREEN, fontWeight: 700 }}>Core</span>}
                              {el.optional && <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: "rgba(255,255,255,0.05)", color: MUTED, fontWeight: 700 }}>Optional</span>}
                            </div>
                            <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.6 }}>{el.description}</p>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                          <button onClick={() => toggleSaved(el.id)}
                            style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${savedElements.has(el.id) ? PURPLE : BORDER}`, background: savedElements.has(el.id) ? "rgba(107,79,187,0.15)" : "transparent", cursor: "pointer", fontSize: 13, color: savedElements.has(el.id) ? PURPLE : MUTED }}>
                            {savedElements.has(el.id) ? "🔖" : "📌"}
                          </button>
                          <button onClick={() => setExpandedElement(isExp ? null : el.id)}
                            style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${el.color}40`, background: `${el.color}10`, color: el.color, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                            {isExp ? "Close" : "How-To"}
                          </button>
                        </div>
                      </div>
                    </div>

                    {isExp && (
                      <div style={{ borderTop: `1px solid ${BORDER}`, padding: "22px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 16 }}>
                          <div>
                            <h4 style={{ fontSize: 13, fontWeight: 800, color: el.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>How to Do This</h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                              {el.howTo.map((step, i) => (
                                <div key={i} style={{ display: "flex", gap: 10 }}>
                                  <span style={{ color: el.color, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>→</span>
                                  <p style={{ fontSize: 13, color: "#C0C0D8", margin: 0, lineHeight: 1.6 }}>{step}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 style={{ fontSize: 13, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Examples</h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                              {el.examples.map((ex, i) => (
                                <div key={i} style={{ display: "flex", gap: 10 }}>
                                  <span style={{ color: MUTED, flexShrink: 0 }}>•</span>
                                  <p style={{ fontSize: 13, color: "#A0A0C0", margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>{ex}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                          <button onClick={() => togglePlan(el.id)}
                            style={{ padding: "8px 18px", borderRadius: 10, border: `1px solid ${planItems.has(el.id) ? GREEN + "40" : BORDER}`, background: planItems.has(el.id) ? "rgba(0,255,136,0.1)" : "transparent", color: planItems.has(el.id) ? GREEN : MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                            {planItems.has(el.id) ? "✓ In My Plan" : "+ Add to Plan"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* MODELS TAB */}
        {tab === "models" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              There is no single "correct" house church model. Different communities, cultures, and missions call for different shapes. Here are four well-established approaches.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {models.map(m => (
                <div key={m.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "20px", cursor: "pointer" }}
                  onClick={() => setSelectedModel(m)}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 800, margin: 0, color: m.color }}>{m.name}</h3>
                    <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: `${m.color}15`, color: m.color, fontWeight: 700, flexShrink: 0, marginLeft: 8 }}>{m.size}</span>
                  </div>
                  <p style={{ fontSize: 12, color: PURPLE, fontWeight: 700, marginBottom: 4 }}>{m.origin}</p>
                  <p style={{ fontSize: 12, color: MUTED, marginBottom: 12 }}>Every {m.frequency.toLowerCase()}</p>
                  <p style={{ fontSize: 13, color: "#A0A0C0", lineHeight: 1.6, marginBottom: 14 }}>{m.description}</p>
                  <button style={{ width: "100%", padding: "8px", borderRadius: 10, border: `1px solid ${m.color}30`, background: `${m.color}08`, color: m.color, cursor: "pointer", fontSize: 12, fontWeight: 700 }}>
                    Read More →
                  </button>
                </div>
              ))}
            </div>

            {selectedModel && (
              <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
                onClick={() => setSelectedModel(null)}>
                <div style={{ background: CARD, border: `1px solid ${selectedModel.color}40`, borderRadius: 20, padding: "32px", maxWidth: 520, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
                  onClick={e => e.stopPropagation()}>
                  <h2 style={{ fontSize: 22, fontWeight: 900, color: selectedModel.color, marginBottom: 4 }}>{selectedModel.name}</h2>
                  <p style={{ fontSize: 13, color: MUTED, marginBottom: 16 }}>{selectedModel.origin} · {selectedModel.frequency} · {selectedModel.size}</p>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, marginBottom: 20 }}>{selectedModel.description}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                    <div>
                      <h4 style={{ fontSize: 13, fontWeight: 800, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Strengths</h4>
                      {selectedModel.strengths.map(s => (
                        <div key={s} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                          <span style={{ color: GREEN }}>✓</span>
                          <p style={{ fontSize: 13, color: "#C0C0D8", margin: 0 }}>{s}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 13, fontWeight: 800, color: "#F59E0B", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Considerations</h4>
                      {selectedModel.considerations.map(c => (
                        <div key={c} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                          <span style={{ color: "#F59E0B" }}>!</span>
                          <p style={{ fontSize: 13, color: "#C0C0D8", margin: 0 }}>{c}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => setSelectedModel(null)}
                    style={{ width: "100%", padding: "12px", borderRadius: 12, border: "none", background: "rgba(255,255,255,0.08)", color: MUTED, cursor: "pointer", fontSize: 14, fontWeight: 700 }}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* CHALLENGES TAB */}
        {tab === "challenges" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              Every house church faces challenges. These are the most common ones — with honest, practical responses.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {challenges.map((c, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${expandedChallenge === i ? PURPLE + "40" : BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <button onClick={() => setExpandedChallenge(expandedChallenge === i ? null : i)}
                    style={{ width: "100%", textAlign: "left", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icon}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#EF4444", margin: 0 }}>{c.challenge}</p>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18 }}>{expandedChallenge === i ? "▾" : "▸"}</span>
                  </button>
                  {expandedChallenge === i && (
                    <div style={{ borderTop: `1px solid ${BORDER}`, padding: "20px 22px" }}>
                      <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
                        <span style={{ color: GREEN, fontWeight: 900, fontSize: 16, flexShrink: 0 }}>→</span>
                        <p style={{ fontSize: 14, color: "#B0F0B0", lineHeight: 1.8, margin: 0 }}>{c.response}</p>
                      </div>
                      <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(0,255,136,0.08)", color: GREEN, fontWeight: 600 }}>📖 {c.verse}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MEETING PLANNER TAB */}
        {tab === "planner" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              Build your gathering template by selecting elements. The planner calculates estimated time and gives you a shareable order of service.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {/* Element selector */}
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 14, color: MUTED, textTransform: "uppercase", letterSpacing: 1 }}>Available Elements</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {gatheringElements.map(el => (
                    <button key={el.id} onClick={() => togglePlan(el.id)}
                      style={{ padding: "12px 16px", borderRadius: 12, border: `1px solid ${planItems.has(el.id) ? el.color + "50" : BORDER}`, background: planItems.has(el.id) ? `${el.color}10` : "rgba(255,255,255,0.02)", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 18 }}>{el.icon}</span>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 13, fontWeight: 700, margin: "0 0 2px", color: planItems.has(el.id) ? el.color : TEXT }}>{el.name}</p>
                        <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{el.timeRange}</p>
                      </div>
                      <span style={{ fontSize: 12, color: planItems.has(el.id) ? el.color : MUTED, fontWeight: 700 }}>{planItems.has(el.id) ? "✓" : "+"}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Current plan */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, margin: 0 }}>Your Plan</h4>
                  <span style={{ fontSize: 13, color: GREEN, fontWeight: 700 }}>~{totalTime} min minimum</span>
                </div>
                {planOrder.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "40px 20px", background: CARD, borderRadius: 14, border: `1px dashed ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14 }}>Select elements from the left to build your plan</p>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {planOrder.map((el, i) => (
                      <div key={el.id} style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 16px", background: CARD, borderBottom: i < planOrder.length - 1 ? `1px solid ${BORDER}` : "none", borderRadius: i === 0 ? "12px 12px 0 0" : i === planOrder.length - 1 ? "0 0 12px 12px" : 0 }}>
                        <span style={{ width: 24, height: 24, borderRadius: "50%", background: `${el.color}20`, color: el.color, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                        <span style={{ fontSize: 16 }}>{el.icon}</span>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: 13, fontWeight: 700, margin: 0, color: TEXT }}>{el.name}</p>
                          <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{el.timeRange}</p>
                        </div>
                      </div>
                    ))}
                    <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: "0 0 12px 12px", padding: "12px 16px", marginTop: 4, textAlign: "center" }}>
                      <p style={{ fontSize: 13, fontWeight: 800, color: GREEN, margin: 0 }}>
                        Total: ~{totalTime}–{totalTime + planOrder.length * 10} min
                      </p>
                    </div>
                  </div>
                )}

                {/* Tips for the plan */}
                {planOrder.length > 0 && (
                  <div style={{ marginTop: 16, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "16px" }}>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: MUTED, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Tips for This Plan</h4>
                    {!planItems.has("meal") && (
                      <p style={{ fontSize: 12, color: "#F59E0B", marginBottom: 6 }}>💡 Consider adding a shared meal — it's one of the most bonding elements.</p>
                    )}
                    {!planItems.has("communion") && planItems.has("scripture") && (
                      <p style={{ fontSize: 12, color: PURPLE, marginBottom: 6 }}>💡 The early church combined Scripture and the Lord's Supper regularly.</p>
                    )}
                    {planOrder.length >= 5 && (
                      <p style={{ fontSize: 12, color: "#3B82F6", marginBottom: 6 }}>💡 This is a full gathering. Build in natural breaks and don't rush the conversation.</p>
                    )}
                    <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>Start with what's comfortable and add elements as your community deepens over months.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
