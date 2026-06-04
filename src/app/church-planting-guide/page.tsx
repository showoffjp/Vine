"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "phases" | "models" | "networks" | "videos";

const theologyPoints = [
  {
    title: "Church Planting Is Missional Obedience",
    content: "The Great Commission is not merely a task but the church's identity in its missionary age. The apostle Paul's strategy was explicit: plant multiplying churches in strategic centers (Rome, Corinth, Ephesus, Philippi) that could reach surrounding regions. Church planting is not optional activity for those with extra energy — it is the normal expression of the church living out its calling."
  },
  {
    title: "A New Church Is the Most Effective Evangelistic Tool",
    content: "Research consistently shows that new churches evangelize more effectively per capita than established ones. Peter Wagner's classic claim — that the single most effective evangelistic method is planting new churches — has been borne out repeatedly. New churches reach new people, find new neighborhoods, attract the unchurched, and create fresh entry points for those who have never found a home in older congregations."
  },
  {
    title: "Church Planting Requires Team, Not Just Hero",
    content: "The lone church-planting pioneer is more mythology than model. Paul never planted alone — Barnabas, Silas, Timothy, Luke, Aquila and Priscilla accompanied him. The healthiest church plants are team plants: a planter with a core team of 10-25 committed believers who carry the mission together. Solo plants are more likely to fail and more likely to become personality cults."
  },
  {
    title: "The Mother Church Multiplies Through Sacrifice",
    content: "A sending church must be willing to give its best — not its surplus. Sending 10% of your congregation to plant a daughter church is not a budget line; it is an act of faith. Tim Keller's Redeemer Presbyterian sent out multiple church plants from its flagship congregation, often sending its most gifted leaders and dedicated givers. This kind of sacrificial reproduction is the healthiest model."
  },
  {
    title: "Context Shapes Strategy — Theology Shapes Everything",
    content: "A church in Manhattan's Financial District requires different strategy than one in rural Appalachia or urban Nairobi. But the theological convictions must remain constant: the authority of Scripture, the centrality of the gospel, the necessity of church discipline and discipleship, the sacraments as means of grace. Contextualize methods; never compromise the message."
  },
  {
    title: "Church Planting and Church Health Are Inseparable",
    content: "An unhealthy church does not multiply — it exports its dysfunction. Before planting, the sending church must practice what it preaches: genuine conversion, meaningful membership, church discipline, elder plurality, word and sacrament. The church that learns to disciple its own members and hold the gospel central is the church ready to reproduce."
  }
];

const phases = [
  {
    number: "01",
    phase: "Calling & Assessment",
    duration: "3–12 months",
    color: "#8B5CF6",
    desc: "Before geography or strategy, the planter must settle the question of calling. This means personal confirmation, spousal alignment if married, church confirmation, and formal assessment.",
    tasks: [
      "Personal spiritual audit: prayer life, Scripture engagement, marriage health",
      "Church planter assessment center (Acts 29, NAMB, PCA, or denominational equivalent)",
      "Mentoring relationship with an experienced church planter",
      "Financial inventory: can your household survive 2-3 years of low income?",
      "Call confirmed by your sending church's elders",
      "Extensive reading: Multiplying Churches, Center Church, Planting Missional Churches"
    ],
    warning: "Assessment centers exist for a reason. Many who feel called to plant are not yet ready. A failed plant costs years of your life and can harm the people you gather. Submit to the process."
  },
  {
    number: "02",
    phase: "Location Research",
    duration: "2–6 months",
    color: "#3B82F6",
    desc: "Where you plant is a strategic decision shaped by demographics, kingdom need, personal networks, and missional opportunity.",
    tasks: [
      "Study city demographics: who lives there, who is unchurched, what languages are spoken",
      "Assess existing evangelical presence: where are the gaps?",
      "Map urban villages: neighborhoods have distinct cultures within cities",
      "Visit candidate locations multiple times before deciding",
      "Meet with existing pastors: build relationships, not competition",
      "Consult local denominational or network leadership for their strategic map"
    ],
    warning: "Don't plant where you want to live — plant where the Spirit is calling and where people need the gospel. These sometimes coincide; be honest about the difference."
  },
  {
    number: "03",
    phase: "Core Team Formation",
    duration: "6–18 months",
    color: "#10B981",
    desc: "The core team is the church before the church launches. They carry the vision, fund the work, build relationships, and provide the community into which outsiders can be welcomed.",
    tasks: [
      "Pray for and identify 10-25 committed believers with missional hearts",
      "Define team values and covenant: what will you hold together in the hard seasons?",
      "Regular rhythms: weekly team gathering for prayer, vision, Bible, and friendship",
      "Send team members into community: neighborhoods, workplaces, coffee shops",
      "Begin community groups in homes before any Sunday gathering",
      "Train in evangelism methods: hospitality, personal testimony, bridge-building"
    ],
    warning: "Never launch public services until your core team is stable. A premature launch with a thin team will collapse under the weight of Sunday ministry."
  },
  {
    number: "04",
    phase: "Pre-Launch Ministry",
    duration: "6–24 months",
    color: "#F59E0B",
    desc: "Before the first public Sunday, the plant should already be doing church — in homes, in workplaces, in the neighborhood.",
    tasks: [
      "Launch community groups (home churches) before Sunday services",
      "Serve in the neighborhood: partner with food banks, schools, shelters",
      "Host evangelistic events: dinners, discussions, community service",
      "Develop core teaching material and define Sunday service rhythm",
      "Secure meeting space, sound equipment, and childcare volunteers",
      "Plan pre-launch preview services to test logistics and invite community"
    ],
    warning: "If you can only do one thing before launch, choose discipleship depth over attendance width. A core group of 25 deeply formed believers is worth more than 100 casual attenders."
  },
  {
    number: "05",
    phase: "Public Launch",
    duration: "First 3 months",
    color: "#EF4444",
    desc: "The first Sunday services are not the beginning — they are the public expression of work already done. Launch with excellence in preaching, music, children's ministry, and hospitality.",
    tasks: [
      "Preach a launch series that proclaims gospel and casts vision (6-10 weeks)",
      "Invest in children's ministry — families will not return without it",
      "Create clear next-step pathways: attend, connect, grow, serve, give",
      "Celebrate baptisms as early as possible — they are the church's testimony",
      "Begin assimilation: every first-time visitor gets a personal contact within 24 hours",
      "Hold the team together with additional prayer, care, and celebration"
    ],
    warning: "The launch high will wear off. Plan for month 4-6 attendance dip. It is normal. Don't make structural decisions during the emotional low."
  },
  {
    number: "06",
    phase: "Maturity & Multiplication",
    duration: "Year 2 onward",
    color: "#10B981",
    desc: "A healthy church plant begins dreaming of its own daughter churches within 3-5 years. Multiplication is built into the DNA from the beginning.",
    tasks: [
      "Develop indigenous leadership: identify and train elders from within the congregation",
      "Establish church membership and covenant",
      "Implement church discipline processes (Matthew 18)",
      "Plant community groups in additional neighborhoods",
      "Begin sending missionaries — international and local",
      "Cast vision for daughter plant: pray, identify, send, support"
    ],
    warning: "Do not wait until you feel 'ready' to send. No church is ever ready to sacrifice. Build multiplication into the DNA now, so that readiness is assumed rather than hoped for."
  }
];

const models = [
  {
    model: "Attractional / Sunday-Launch Model",
    color: "#8B5CF6",
    desc: "The classic approach: gather a core team, then launch public Sunday services and grow through attractional programming — excellent music, preaching, and childcare.",
    strengths: "Fastest route to visible community; well-understood by unchurched; leverages Sunday habits",
    weaknesses: "Resource-intensive; can produce consumers rather than disciples; depends on excellence",
    examples: "Mars Hill (Driscoll), Willow Creek, most American megachurch plants",
    bestFor: "Urban centers with high population density and existing church-attending culture"
  },
  {
    model: "Missional Community / Organic Model",
    color: "#10B981",
    desc: "Begin with 3-5 missional communities (household-sized churches) embedded in specific neighborhoods or affinity groups, with no public service initially.",
    strengths: "Deep discipleship; high evangelism conversion; sustainable without professional staff",
    weaknesses: "Slower growth; harder to measure; difficult to gather resources for full-time planter",
    examples: "Soma Communities (Tacoma), Austin Stone Community Church, 3DM network",
    bestFor: "Post-Christian contexts, neighborhood-specific planting, low-resource environments"
  },
  {
    model: "Multi-Site / Campus Plant",
    color: "#3B82F6",
    desc: "A mother church establishes a new campus — often video-driven teaching from the central campus — in a new neighborhood or city.",
    strengths: "Leverages existing brand, systems, and resources; lower risk; shared staff functions",
    weaknesses: "May not develop indigenous leadership; campus can feel franchise-like; video preaching debates",
    examples: "North Point, Elevation Church, Life.Church, Mosaic",
    bestFor: "Proven churches with scalable systems wanting to expand geographic reach"
  },
  {
    model: "Church-Within-A-Church (Microchurch)",
    color: "#F59E0B",
    desc: "A congregation within the larger church that targets a specific affinity group: young adults, a specific ethnicity, an overlooked neighborhood — with its own identity and leadership.",
    strengths: "Reaches those who don't fit the mother church culture; develops leaders safely",
    weaknesses: "Risk of permanent dependency; identity confusion; split loyalty",
    examples: "Many urban churches plant neighborhood microchurches; HOPE City within churches",
    bestFor: "Reaching specific unreached populations within an existing church's city"
  },
  {
    model: "House Church / Simple Church Network",
    color: "#EF4444",
    desc: "Intentionally small congregations meeting in homes, aimed at New Testament simplicity. No professional clergy, no building — the church as household.",
    strengths: "Replicates rapidly; zero overhead; accessible in restricted-access nations",
    weaknesses: "Can lack theological depth; vulnerable to heresy without accountability; hard to sustain",
    examples: "Church Multiplication Associates (Neil Cole), Chinese house church networks",
    bestFor: "Persecuted contexts, pioneer mission fields, post-Christendom urban settings"
  }
];

const networks = [
  {
    name: "Acts 29 Network",
    color: "#EF4444",
    focus: "Gospel-centered, Reformed-leaning church planting globally",
    trainedPlanters: "700+ churches in 30+ countries",
    theology: "Reformed/Complementarian",
    process: "Assessments, cohorts, regional networks, mentoring",
    url: "https://www.acts29.com",
    note: "Strong theological emphasis; known for planting in cities"
  },
  {
    name: "NAMB (North American Mission Board)",
    color: "#3B82F6",
    focus: "Southern Baptist church planting across North America",
    trainedPlanters: "5,000+ church planters supported annually",
    theology: "Southern Baptist / Evangelical",
    process: "Send Network: assessment, funding, coaching, training",
    url: "https://www.namb.net/send-network",
    note: "Largest church planting network in North America; significant funding available"
  },
  {
    name: "Redeemer City to City",
    color: "#8B5CF6",
    focus: "Gospel movement planting in global cities",
    trainedPlanters: "Started by Tim Keller; active in 70+ cities globally",
    theology: "Reformed / Missional",
    process: "Residencies, city networks, Center Church training",
    url: "https://redeemercitytocity.com",
    note: "Best for urban planters who want deep missional-theological formation"
  },
  {
    name: "Soma Communities",
    color: "#10B981",
    focus: "Missional community church planting",
    trainedPlanters: "Global network, emphasis on everyday gospel community",
    theology: "Gospel-centered / missional community model",
    process: "Apprenticeship, shared DNA training, network support",
    url: "https://www.somacommunities.org",
    note: "Best for planters drawn to organic, neighborhood-embedded approaches"
  },
  {
    name: "PCA Church Planting",
    color: "#F59E0B",
    focus: "Presbyterian Church in America denominational planting",
    trainedPlanters: "1,500+ PCA churches; active planting program",
    theology: "Reformed / Presbyterian",
    process: "Denominational assessment, MNA (Mission to North America) support",
    url: "https://www.pcamna.org",
    note: "Strong theological training; elder-led polity built into the planting DNA"
  },
  {
    name: "Stadia Church Planting",
    color: "#6B4FBB",
    focus: "Multi-network church planting across denominations",
    trainedPlanters: "200+ churches planted; diverse denominational partnerships",
    theology: "Evangelical / broadly orthodox",
    process: "Assessment, coaching, community group focus before Sunday launch",
    url: "https://stadia.cc",
    note: "Known for pre-launch community group emphasis and strong pastoral care"
  }
];

export default function ChurchPlantingGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_church-planting-guide_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedModel, setSelectedModel] = useState(models[0]);

  const toggle = (k: string) => setExpanded(p => ({ ...p, [k]: !p[k] }));

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Planting" },
    { id: "phases", label: "The Six Phases" },
    { id: "models", label: "Planting Models" },
    { id: "networks", label: "Networks & Support" },
    { id: "videos", label: "🎬 Videos" }
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: 80, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: GREEN, color: "#000", padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            START A CHURCH
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, margin: "0 0 12px" }}>
            Church Planting Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            The church reproduces by planting churches. From Paul's missionary journeys to the explosive growth of the Global South, church planting is how the gospel advances. Here is what you need to know.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 14, marginBottom: 32 }}>
          {[
            { num: "4,500+", label: "New US churches needed per year" },
            { num: "50-80%", label: "Of new believers come through new churches" },
            { num: "3-5 yrs", label: "To a stable, self-sustaining congregation" },
            { num: "80%", label: "Survive past year 4 (vs 68% of businesses)" }
          ].map(s => (
            <div key={s.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 14px", textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: GREEN }}>{s.num}</div>
              <div style={{ fontSize: 11, color: MUTED, marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button type="button"
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
              Before strategy, there is theology. The reasons to plant churches are rooted in the nature of the church, the mission of God, and the apostolic example of Scripture.
            </p>
            {theologyPoints.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 12 }}>
                <button type="button"
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

        {/* Phases */}
        {activeTab === "phases" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {phases.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <div style={{ borderLeft: `4px solid ${p.color}`, padding: "20px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: p.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14, color: "#000", flexShrink: 0 }}>
                      {p.number}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 17 }}>{p.phase}</div>
                      <div style={{ fontSize: 12, color: MUTED }}>Typical duration: {p.duration}</div>
                    </div>
                    <button type="button"
                      onClick={() => toggle(`phase-${i}`)}
                      style={{ background: BG, border: `1px solid ${BORDER}`, color: TEXT, padding: "4px 12px", borderRadius: 6, cursor: "pointer", fontSize: 13 }}
                    >
                      {expanded[`phase-${i}`] ? "Hide" : "Expand"}
                    </button>
                  </div>
                  <p style={{ margin: 0, color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{p.desc}</p>
                  {expanded[`phase-${i}`] && (
                    <div style={{ marginTop: 16 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: GREEN, marginBottom: 8 }}>KEY TASKS</div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 14 }}>
                        {p.tasks.map((t, j) => (
                          <div key={j} style={{ background: BG, borderRadius: 6, padding: "8px 12px", fontSize: 12, color: MUTED }}>
                            ✓ {t}
                          </div>
                        ))}
                      </div>
                      <div style={{ background: "#F59E0B11", border: "1px solid #F59E0B33", borderRadius: 8, padding: 12 }}>
                        <span style={{ fontSize: 11, color: "#F59E0B", fontWeight: 700 }}>⚠ WARNING: </span>
                        <span style={{ fontSize: 12, color: MUTED }}>{p.warning}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Models */}
        {activeTab === "models" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {models.map(m => (
                  <div
                    key={m.model}
                    onClick={() => setSelectedModel(m)}
                    style={{
                      background: selectedModel.model === m.model ? m.color + "22" : CARD,
                      border: `2px solid ${selectedModel.model === m.model ? m.color : BORDER}`,
                      borderRadius: 10, padding: 16, cursor: "pointer"
                    }}
                  >
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>{m.model}</div>
                    <div style={{ fontSize: 13, color: MUTED }}>{m.desc.substring(0, 100)}…</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              width: 340, flexShrink: 0, background: CARD, border: `1px solid ${BORDER}`,
              borderRadius: 12, padding: 24, position: "sticky", top: 20
            }}>
              <div style={{ height: 4, background: selectedModel.color, borderRadius: 2, marginBottom: 16 }} />
              <h3 style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 800 }}>{selectedModel.model}</h3>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 14 }}>{selectedModel.desc}</p>
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 4 }}>STRENGTHS</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{selectedModel.strengths}</p>
              </div>
              <div style={{ marginBottom: 10, borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                <div style={{ fontSize: 11, color: "#EF4444", fontWeight: 700, marginBottom: 4 }}>WEAKNESSES</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{selectedModel.weaknesses}</p>
              </div>
              <div style={{ marginBottom: 10, borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, marginBottom: 4 }}>EXAMPLES</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedModel.examples}</p>
              </div>
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, marginBottom: 4 }}>BEST FOR</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{selectedModel.bestFor}</p>
              </div>
            </div>
          </div>
        )}

        {/* Networks */}
        {activeTab === "networks" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {networks.map((n, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, borderTop: `3px solid ${n.color}` }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 17 }}>{n.name}</h3>
                <div style={{ fontSize: 12, color: n.color, fontWeight: 700, marginBottom: 10 }}>{n.theology}</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 10 }}>{n.focus}</p>
                <div style={{ fontSize: 12, color: MUTED, marginBottom: 4 }}><strong style={{ color: TEXT }}>Scale:</strong> {n.trainedPlanters}</div>
                <div style={{ fontSize: 12, color: MUTED, marginBottom: 10 }}><strong style={{ color: TEXT }}>Process:</strong> {n.process}</div>
                <div style={{ background: BG, borderRadius: 8, padding: 10, marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontStyle: "italic", color: MUTED, margin: 0 }}>{n.note}</p>
                </div>
                <a
                  href={n.url}
                  target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 12, color: GREEN, textDecoration: "none", fontWeight: 700 }}
                >
                  Visit Network →
                </a>
              </div>
            ))}
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
                  { videoId: "fY4Yt8gRz3A", title: "Church Planting: Networks, Denominations, and Broader Ministry", channel: "Tim Keller", description: "Keller on the strategic and theological dimensions of church planting — how networks, denominations, and sending structures shape the health and reach of new churches." },
                  { videoId: "FoDYwlqSCXY", title: "Why Is Church Planting So Important in Cities?", channel: "Tim Keller", description: "Keller makes the case for urban church planting — why cities are strategic, why new churches reach new people more effectively, and what the gospel demands of the church." },
                  { videoId: "hKzoG1dgpAM", title: "The Benefits of Church Planting Networks", channel: "Tim Keller", description: "Keller explains the practical and theological benefits of planting within a network — accountability, training, funding, and the power of shared mission." },
                  { videoId: "7Foqi7GiwJ0", title: "A New Community", channel: "Timothy Keller", description: "Keller preaches on what a new gospel community looks like — the distinctive marks of a church plant that is genuinely different from the surrounding culture." },
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
