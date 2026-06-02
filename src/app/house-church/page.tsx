"use client";

import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "guide" | "models" | "voices" | "videos";

type GatheringElement = {
  id: string; name: string; icon: string; timeRange: string; description: string;
  howTo: string[]; examples: string[]; color: string; optional: boolean;
};

type HCModel = {
  id: string;
  name: string;
  origin: string;
  size: string;
  focus: string;
  strengths: string[];
  weaknesses: string[];
  practitioners: string[];
  verse: string;
};

type Voice = {
  id: string;
  name: string;
  era: string;
  context: string;
  bio: string;
  quote: string;
  contribution: string;
};

type HCVideo = {
  id: string;
  preacher: string;
  title: string;
  videoId: string;
  description: string;
};

const HC_MODELS: HCModel[] = [
  {
    id: "simple-church",
    name: "Simple Church",
    origin: "Neil Cole / Church Multiplication Associates, USA",
    size: "2-3 people (DNA group)",
    focus: "Discipleship, Nurture, and Apostolic mission",
    strengths: [
      "Extremely reproducible — anyone can start one",
      "No building, budget, or paid leader required",
      "Deep accountability in micro-sized community",
      "Designed from the ground up to multiply",
      "Works in restricted-access countries"
    ],
    weaknesses: [
      "Very small size can limit corporate worship expression",
      "Requires strong personal discipline to sustain",
      "Can lack stability without a wider network"
    ],
    practitioners: ["Neil Cole", "Church Multiplication Associates", "Organic Church Network"],
    verse: "Matthew 18:20"
  },
  {
    id: "house-church-network",
    name: "House Church Network",
    origin: "Wolfgang Simson model, Germany / Global",
    size: "10-30 per household gathering",
    focus: "Ekklesia as household — weekly full gathering emphasizing the priesthood of all believers",
    strengths: [
      "Restores the New Testament household church pattern",
      "Every member functions as a minister",
      "Meals and Lord's Supper integrated naturally",
      "Networks of churches provide accountability and support",
      "Strong theological grounding in Reformation principles"
    ],
    weaknesses: [
      "Requires significant host family commitment",
      "Network coordination can become complex",
      "Theological distinctives can create insularity"
    ],
    practitioners: ["Wolfgang Simson", "Houses that Change the World movement"],
    verse: "Romans 16:5"
  },
  {
    id: "missional-community",
    name: "Missional Community",
    origin: "Mike Frost and Alan Hirsch, Australia / UK",
    size: "20-50 people",
    focus: "Organized around a shared mission to a specific neighborhood or people group",
    strengths: [
      "Critical mass for meaningful outreach and service",
      "More spiritual gifts available within the group",
      "Can financially support a family in ministry",
      "Combines the intimacy of small church with missional focus",
      "Strong theological framework from missional theology"
    ],
    weaknesses: [
      "Larger size can drift toward institutional patterns",
      "Needs clear and sustained missional focus to stay healthy",
      "Organizational complexity increases with size"
    ],
    practitioners: ["Mike Frost", "Alan Hirsch", "Forge Mission Training Network"],
    verse: "John 20:21"
  },
  {
    id: "micro-church",
    name: "Micro Church",
    origin: "Verge Network, USA",
    size: "8-15 people",
    focus: "Lord's Supper, evangelism, and community life — fits under a covering church",
    strengths: [
      "Maintains connection to a larger sending/covering church",
      "Strong focus on the Lord's Supper as community anchor",
      "Size is large enough for diverse gifts, small enough for intimacy",
      "Evangelism is baked into the structure from the start",
      "Apostolic oversight prevents theological drift"
    ],
    weaknesses: [
      "Dependence on covering church can limit initiative",
      "Finding the right covering relationship is difficult",
      "Can feel neither fully independent nor fully integrated"
    ],
    practitioners: ["Verge Network", "Caesar Kalinowski", "Caesar's church planting network"],
    verse: "Acts 2:42-47"
  },
  {
    id: "organic-church",
    name: "Traditional Organic Church",
    origin: "Frank Viola, USA",
    size: "8-20 people",
    focus: "Jesus-centered, leaderless gatherings following the pattern of 'from the least to the greatest' participation",
    strengths: [
      "Fully participatory — no clergy/laity distinction",
      "Christ is the living Head — meetings are open to his leading",
      "Historical and theological depth from Frank Viola's research",
      "Strong counter-cultural witness against institutionalism",
      "Creates mature, functioning Christians rather than spectators"
    ],
    weaknesses: [
      "Leaderless model can struggle with conflict resolution",
      "Requires high spiritual maturity from all participants",
      "Can be difficult to sustain without experienced facilitation"
    ],
    practitioners: ["Frank Viola", "George Barna", "Present Testimony Ministry"],
    verse: "Jeremiah 31:34"
  }
];

const VOICES_HC: Voice[] = [
  {
    id: "simson",
    name: "Wolfgang Simson",
    era: "b. 1955",
    context: "German missiologist and author, Houses that Change the World (1998)",
    bio: "Wolfgang Simson is a German missiologist, journalist, and researcher who has spent decades studying and catalyzing house church movements worldwide. His landmark book Houses that Change the World (1998) became one of the most widely read texts in the global house church renewal. Simson argues that the institutional church building is the single biggest structural obstacle to the church fulfilling its mission — because it confines the people of God to a performance model rather than releasing them as a kingdom movement.",
    quote: "The church building is the most successful tool the devil has used to keep Christians contained, comfortable, and passive.",
    contribution: "Simson provided a global research framework and a theological vision for the house church as the primary form of ekklesia. His Fifteen Theses on a Coming Church Transformation articulated the shift from program-driven to household-based church with prophetic clarity. He helped leaders see that house church is not a small-church compromise but the recovery of the church's true missionary structure."
  },
  {
    id: "viola",
    name: "Frank Viola",
    era: "b. 1969",
    context: "American author and speaker, Pagan Christianity (2002) and Reimagining Church (2008)",
    bio: "Frank Viola is an American Christian author and speaker who has written extensively on the organic church movement. Co-authored with George Barna, Pagan Christianity makes the provocative historical case that most standard Protestant and Catholic church practices — the sermon, the church building, the order of service, the clergy/laity divide — have roots not in the New Testament but in pagan Greco-Roman culture absorbed during the Constantinian era. Reimagining Church provides the positive theological vision for what gathering in Christ's name actually looks like.",
    quote: "Most of what we do in our church services today is rooted in tradition, not the New Testament. The New Testament church was organic, communal, and participatory — not a performance to be attended.",
    contribution: "Viola gave the organic church movement its most historically detailed and theologically rigorous defense. His work forced serious Christians to examine the assumed structures of church life against the actual witness of the New Testament and early church history. He also provided constructive guidance on how to gather organically around the living Christ rather than around programs and personalities."
  },
  {
    id: "cole",
    name: "Neil Cole",
    era: "b. 1960",
    context: "American church planter, Organic Church (2005), founder of Church Multiplication Associates",
    bio: "Neil Cole is an American church planter and the founder of Church Multiplication Associates (CMA), one of the most prolific church planting networks in North America. He developed the DNA group — a micro-discipleship unit of two or three people organized around Discovery (engaging Scripture personally), Nurture (caring for one another's spiritual lives), and Apostolic mission (reaching out). Cole's approach is radically simple and radically reproducible: if you need buildings, money, or trained clergy to do it, the movement cannot spread to every person.",
    quote: "If you want to win the world to Christ, you are going to have to do it in the living room — not in the sanctuary.",
    contribution: "Cole's DNA group model has been replicated in dozens of countries, including contexts hostile to Christianity where institutional church is impossible. He demonstrated that the simplest unit of church — two or three gathered in Jesus' name — is also the most deployable. His Life Transformation Groups (LTGs) gave the house church movement a concrete, tested, reproducible practice rather than only a theological vision."
  },
  {
    id: "mcclung",
    name: "Floyd McClung",
    era: "1945-2021",
    context: "American missionary and author, You See Bones (2012), YWAM and All Nations movement",
    bio: "Floyd McClung spent decades as a missionary with Youth With A Mission (YWAM), living in the red-light district of Amsterdam and pioneering mission among unreached peoples across multiple continents. In his later years McClung became a key voice for mission-focused house churches, particularly in contexts where the Western institutional model of church was culturally inaccessible or legally impossible. His book You See Bones drew on Ezekiel's vision of dry bones to call the church toward a fresh movement of the Spirit in simple, obedient, scattered communities.",
    quote: "The church that meets in houses is not a lesser church. It may be the only church the gospel can travel through in the hardest places.",
    contribution: "McClung brought a missionary's pragmatism and spiritual depth to the house church conversation. He connected the house church impulse to the unfinished task of global mission, particularly among unreached peoples in the Global South and in regions hostile to public Christian gatherings. His work helped house church practitioners see their simple gatherings as part of a global advance rather than a domestic retreat."
  },
  {
    id: "zdero",
    name: "Rad Zdero",
    era: "Contemporary",
    context: "Canadian researcher and author, The Global House Church Movement (2004)",
    bio: "Rad Zdero is a Canadian researcher, author, and house church practitioner who holds a doctorate in mechanical engineering and has applied his analytical mind to the documentation and categorization of house church movements worldwide. His book The Global House Church Movement (2004) is one of the most comprehensive empirical surveys of house church networks across multiple continents, cultures, and theological traditions. Zdero approaches the subject with both scholarly rigor and personal conviction as a long-time participant in house church networks.",
    quote: "The house church is not a Western innovation or a fringe movement. It is the dominant form of Christian community across the Global South, and it is growing faster than any other form of church.",
    contribution: "Zdero's research established that house churches are not a marginal Western experiment but the primary vehicle through which Christianity is expanding in the Global South, particularly in China, India, Ethiopia, and Iran. His documentation gave credibility and global perspective to Western house church practitioners and provided a framework for understanding the diverse forms house churches take in different cultural contexts."
  }
];

const HC_VIDEOS: HCVideo[] = [
  {
    id: "v1",
    preacher: "Tim Keller",
    title: "The Reason for God",
    videoId: "Kxup3OS5ZhQ",
    description: "Keller on what the church is actually for -- not buildings or programs but a community transformed by grace"
  },
  {
    id: "v2",
    preacher: "Francis Chan",
    title: "Forgotten God Part 1",
    videoId: "sWMjg7CxIKk",
    description: "Chan's challenge to experience the Holy Spirit's power in simple gathered community"
  },
  {
    id: "v3",
    preacher: "David Platt",
    title: "Radical: Passion 2011",
    videoId: "yhiHSf_L6_E",
    description: "Platt's vision of a church that scatters rather than accumulates -- the house church impulse in action"
  },
  {
    id: "v4",
    preacher: "Matt Chandler",
    title: "Holding Fast to the Gospel",
    videoId: "QuxmiIFN8yE",
    description: "What the early church gathered around -- the same center of any faithful house church"
  },
  {
    id: "v5",
    preacher: "John Piper",
    title: "Don't Waste Your Life",
    videoId: "JHdB1dYAteA",
    description: "The vision that animates missional house church communities"
  },
  {
    id: "v6",
    preacher: "Tim Keller",
    title: "The Prodigal Sons",
    videoId: "lsTzXI7cJGA",
    description: "The father's house as a picture of what gathered community should feel like"
  }
];

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

const essentials = [
  { icon: "📋", label: "Clear covenant", desc: "Written or verbal commitment to attendance, confidentiality, and mutual care" },
  { icon: "🔄", label: "Rotating leadership", desc: "Shared responsibility prevents burnout and develops everyone" },
  { icon: "🌱", label: "Multiplication mindset", desc: "Plan from the start to plant daughter groups" },
  { icon: "🔗", label: "Connection to larger body", desc: "Stay linked to the wider Church — don't become an island" },
  { icon: "🎯", label: "Shared mission", desc: "A focus outward (neighborhood, people group) that draws you together" },
  { icon: "📖", label: "Commitment to Scripture", desc: "Anchor every gathering in the Word — not just Christian self-help" },
];

export default function HouseChurchPage() {
  const [activeTab, setActiveTab] = useState<Tab>("guide");
  const [expandedElement, setExpandedElement] = useState<string | null>(null);
  const [planItems, setPlanItems] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_house_church_plan"); return s ? new Set(JSON.parse(s)) : new Set(["welcome", "scripture", "prayer"]); } catch { return new Set(["welcome", "scripture", "prayer"]); }
  });
  const [savedElements, setSavedElements] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_house_church_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [selectedVoice, setSelectedVoice] = useState<Voice>(VOICES_HC[0]);

  useEffect(() => {
    try { localStorage.setItem("vine_house_church_plan", JSON.stringify([...planItems])); } catch {}
  }, [planItems]);
  useEffect(() => {
    try { localStorage.setItem("vine_house_church_saved", JSON.stringify([...savedElements])); } catch {}
  }, [savedElements]);

  const togglePlan = (id: string) => setPlanItems(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleSaved = (id: string) => setSavedElements(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(58,125,86,0.1)", border: "1px solid rgba(58,125,86,0.25)", borderRadius: 20, padding: "6px 16px", marginBottom: 16 }}>
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
            The first Christians gathered in homes. Simple, participatory, relational gatherings centered on Word, prayer, and table are not a lesser form of church &mdash; they may be its purest expression.
          </p>
          <div style={{ background: "rgba(58,125,86,0.06)", border: "1px solid rgba(58,125,86,0.18)", borderRadius: 12, padding: "14px 20px", maxWidth: 520, margin: "0 auto" }}>
            <p style={{ fontSize: 14, color: "#4a9e6e", fontStyle: "italic", margin: 0 }}>
              &ldquo;They broke bread in their homes and ate together with glad and sincere hearts.&rdquo;
            </p>
            <p style={{ fontSize: 12, color: MUTED, marginTop: 4, marginBottom: 0 }}>&mdash; Acts 2:46</p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, borderBottom: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {[
            { id: "guide", label: "📋 Gathering Guide" },
            { id: "models", label: "🏛️ Models" },
            { id: "voices", label: "🎙️ Voices" },
            { id: "videos", label: "▶️ Videos" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id as Tab)}
              style={{ padding: "10px 18px", borderRadius: "10px 10px 0 0", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13, background: activeTab === t.id ? CARD : "transparent", color: activeTab === t.id ? TEXT : MUTED, borderBottom: activeTab === t.id ? `2px solid ${GREEN}` : "2px solid transparent" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* GATHERING GUIDE TAB */}
        {activeTab === "guide" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 28, fontSize: 15 }}>
              A house church gathering doesn&rsquo;t need a program &mdash; but intentional elements help it grow deeper. These are the building blocks. Not all required every time; adapt to your community&rsquo;s rhythm.
            </p>

            {/* Essentials banner */}
            <div style={{ background: `linear-gradient(135deg, rgba(107,79,187,0.1), rgba(58,125,86,0.05))`, border: `1px solid rgba(107,79,187,0.2)`, borderRadius: 16, padding: "24px", marginBottom: 28 }}>
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
                              {!el.optional && <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: "rgba(58,125,86,0.1)", color: GREEN, fontWeight: 700 }}>Core</span>}
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
                            style={{ padding: "8px 18px", borderRadius: 10, border: `1px solid ${planItems.has(el.id) ? GREEN + "40" : BORDER}`, background: planItems.has(el.id) ? "rgba(58,125,86,0.1)" : "transparent", color: planItems.has(el.id) ? GREEN : MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
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
        {activeTab === "models" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 28, fontSize: 15 }}>
              There is no single &ldquo;correct&rdquo; house church model. Different communities, cultures, and missions call for different shapes. Here are five well-established approaches drawn from major practitioners worldwide.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {HC_MODELS.map(m => (
                <div key={m.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 18, padding: "24px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "flex-start", marginBottom: 14 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 900, margin: 0, color: TEXT, flex: 1 }}>{m.name}</h3>
                    <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(58,125,86,0.1)", color: GREEN, fontWeight: 700 }}>{m.size}</span>
                  </div>
                  <p style={{ fontSize: 13, color: PURPLE, fontWeight: 700, margin: "0 0 4px" }}>{m.origin}</p>
                  <p style={{ fontSize: 13, color: MUTED, margin: "0 0 14px", lineHeight: 1.6 }}>{m.focus}</p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <h4 style={{ fontSize: 12, fontWeight: 800, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Strengths</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {m.strengths.map((s, i) => (
                          <div key={i} style={{ display: "flex", gap: 8 }}>
                            <span style={{ color: GREEN, flexShrink: 0, fontWeight: 700 }}>✓</span>
                            <p style={{ fontSize: 13, color: "#C0C0D8", margin: 0, lineHeight: 1.5 }}>{s}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 12, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Weaknesses</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {m.weaknesses.map((w, i) => (
                          <div key={i} style={{ display: "flex", gap: 8 }}>
                            <span style={{ color: MUTED, flexShrink: 0 }}>—</span>
                            <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.5 }}>{w}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", paddingTop: 14, borderTop: `1px solid ${BORDER}` }}>
                    <span style={{ fontSize: 12, color: MUTED, fontWeight: 600 }}>Key verse:</span>
                    <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.12)", color: PURPLE, fontWeight: 700 }}>{m.verse}</span>
                    <span style={{ fontSize: 12, color: MUTED, marginLeft: "auto" }}>Practitioners: {m.practitioners.join(", ")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOICES TAB */}
        {activeTab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 28, fontSize: 15 }}>
              These are the theologians, practitioners, and researchers who have shaped the modern house church renewal. Their books, movements, and ideas continue to animate communities worldwide.
            </p>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              {/* Left panel — name cards */}
              <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
                {VOICES_HC.map(v => (
                  <button key={v.id} onClick={() => setSelectedVoice(v)}
                    style={{ textAlign: "left", padding: "14px 16px", borderRadius: 14, border: `1px solid ${selectedVoice.id === v.id ? GREEN + "50" : BORDER}`, background: selectedVoice.id === v.id ? "rgba(58,125,86,0.07)" : CARD, cursor: "pointer", transition: "all 0.15s" }}>
                    <p style={{ fontSize: 14, fontWeight: 800, margin: "0 0 3px", color: selectedVoice.id === v.id ? GREEN : TEXT }}>{v.name}</p>
                    <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{v.era}</p>
                  </button>
                ))}
              </div>

              {/* Right panel — detail */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 18, padding: "28px" }}>
                  <h2 style={{ fontSize: 24, fontWeight: 900, margin: "0 0 4px", color: TEXT }}>{selectedVoice.name}</h2>
                  <p style={{ fontSize: 13, color: PURPLE, fontWeight: 700, margin: "0 0 4px" }}>{selectedVoice.era}</p>
                  <p style={{ fontSize: 13, color: MUTED, margin: "0 0 20px" }}>{selectedVoice.context}</p>

                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, margin: "0 0 24px" }}>{selectedVoice.bio}</p>

                  <blockquote style={{ margin: "0 0 24px", padding: "18px 22px", background: "rgba(58,125,86,0.05)", borderLeft: `3px solid ${GREEN}`, borderRadius: "0 12px 12px 0" }}>
                    <p style={{ fontSize: 15, color: "#A0F0C0", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 8px" }}>
                      &ldquo;{selectedVoice.quote}&rdquo;
                    </p>
                    <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>&mdash; {selectedVoice.name}</p>
                  </blockquote>

                  <div style={{ background: "rgba(107,79,187,0.07)", border: `1px solid rgba(107,79,187,0.2)`, borderRadius: 14, padding: "18px 20px" }}>
                    <h4 style={{ fontSize: 12, fontWeight: 800, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Key Contribution</h4>
                    <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, margin: 0 }}>{selectedVoice.contribution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 28, fontSize: 15 }}>
              These sermons and talks speak directly to the vision, theology, and practice that animates the house church movement. Watch them alone or bring them as discussion starters to your gathering.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 24 }}>
              {HC_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 18, overflow: "hidden" }}>
                  <div style={{ padding: "18px 20px 14px" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                      <span style={{ fontSize: 12, padding: "3px 12px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: PURPLE, fontWeight: 700 }}>{v.preacher}</span>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, margin: "0 0 8px", color: TEXT, lineHeight: 1.3 }}>{v.title}</h3>
                    <p style={{ fontSize: 13, color: MUTED, margin: "0 0 14px", lineHeight: 1.6 }}>{v.description}</p>
                  </div>
                  <div style={{ padding: "0 20px 20px" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", borderRadius: 8 }}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
