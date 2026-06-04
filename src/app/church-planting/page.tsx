"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const PHASES = [
  {
    id: "call",
    phase: 1,
    name: "The Call",
    icon: "📣",
    color: "#F59E0B",
    duration: "Ongoing discernment",
    description: "Church planting begins with the sense of call — a burden for a specific people or place that won't go away. This is not primarily a strategic decision but a vocational one. Many have attempted church plants out of entrepreneurial ambition or frustration with existing churches, only to find that the cost of planting without a genuine call is too high.",
    keyQuestions: [
      "Do I have a specific geographic or demographic burden that persists?",
      "Does my spouse (if married) share this call?",
      "Have others — including my current church leadership — confirmed this call?",
      "Am I running from something or toward something?",
      "Am I prepared for the financial, relational, and emotional cost of planting?",
    ],
    cautions: ["Don't plant to escape your current church's problems — unresolved issues follow you", "The call requires testing over time — resist the urgency of immediate action", "Church planting is hardest on families — this decision requires deep spousal alignment"],
    verse: "How are they to preach unless they are sent? — Romans 10:15",
  },
  {
    id: "preparation",
    phase: 2,
    name: "Preparation",
    icon: "🛠️",
    color: "#3B82F6",
    duration: "1-3 years",
    description: "Preparation is not just logistical — it is spiritual and character formation. The research is clear: the primary predictor of church plant health is the health of the planting pastor, not the strategy used. Internship, mentorship, theological training, and marriage health all matter enormously.",
    keyQuestions: [
      "Have I developed the core competencies: preaching, pastoral care, team leadership, evangelism?",
      "Am I under the spiritual covering of a local church and a planting network?",
      "Has my character been tested — in obscurity, in failure, in financial stress?",
      "Do I have a sending church that will support, commission, and hold me accountable?",
      "Have I completed church planting training or assessment?",
    ],
    cautions: ["Theological training is not optional — 'having vision' is not a substitute for knowing Scripture", "Financial preparation matters: most plants require 18-24 months of personal financial support", "Build your team before you launch — launching alone accelerates failure"],
    verse: "Prepare your work outside; get everything ready for yourself in the field, and after that build your house. — Proverbs 24:27",
  },
  {
    id: "launch",
    phase: 3,
    name: "Launch",
    icon: "🚀",
    color: "#10B981",
    duration: "6-12 months",
    description: "Launch is the public beginning — Sunday services, visible presence in the community. Most plants launch too early (before a core team is established) or too publicly (aiming for opening weekend attendance as a success metric). Health > numbers in the launch phase.",
    keyQuestions: [
      "Do I have a core team of 15-25 committed believers who are not all from my friendship circle?",
      "Have I identified and engaged with the community I'm planting in — not just driving through it?",
      "Is the launch date driven by God's timing or by pressure from supporters?",
      "Have I established clear governance: elders, finances, accountability structure?",
      "What is my plan when launch momentum fades (and it will)?",
    ],
    cautions: ["Launch Sunday attendance is vanity — it will often be higher than the following Sunday", "Launch into community presence before launch into Sunday gatherings", "Hire slowly, fire slowly — team chemistry is harder to repair than ministry gaps"],
    verse: "For everything there is a season, and a time for every matter under heaven. — Ecclesiastes 3:1",
  },
  {
    id: "establishing",
    phase: 4,
    name: "Establishing",
    icon: "🌱",
    color: PURPLE,
    duration: "Years 2-5",
    description: "The establishing phase is when most church plants fail — the initial excitement has faded, the hard conflicts emerge, the financial strain is real, and the vision feels distant. This is the crucible. Churches that survive years 2-5 with health intact have usually built deep roots in community, genuine discipleship structures, and clear mission.",
    keyQuestions: [
      "Am I making disciples, or just gathering attendees?",
      "Are local believers (converted in the plant) emerging as leaders?",
      "What is my plan for pastoral burnout — which is nearly universal in years 2-4?",
      "Is the church financially self-sustaining or close to it?",
      "Have I built a culture of outreach, or are we becoming attractional only?",
    ],
    cautions: ["You will face significant conflict in this phase — no planting team survives intact", "Guard your marriage fiercely — the plant will take exactly as much as you let it", "Consider professional coaching — isolation in this phase is deadly"],
    verse: "Unless the Lord builds the house, those who build it labor in vain. — Psalm 127:1",
  },
];

const MODELS = [
  { name: "Reproducing Church Model", desc: "Plant with the explicit goal of planting again within 3-5 years. DNA of multiplication is built in from the start. Championed by networks like Acts 29 and SEND Network.", best: "Missionally-oriented networks with high leadership development culture" },
  { name: "Multi-Site Model", desc: "An established church opens a campus in a new area. Reduces financial risk and provides infrastructure but can limit local ownership and identity.", best: "Well-resourced established churches extending reach" },
  { name: "House Church Network", desc: "Multiple small churches (15-30 people) meeting in homes, connected relationally and theologically without a central campus. Lower cost, higher community depth.", best: "Pioneering contexts, resistant cultures, resource-limited environments" },
  { name: "Missional Community Model", desc: "Start with missional communities (12-50 people on mission together) before aggregating into a Sunday gathering. Builds community before building church.", best: "Post-Christian urban contexts where Sunday services alone don't reach people" },
  { name: "Parachute Drop Model", desc: "Planter moves into a new city with little or no prior relationship. Highest risk, highest potential reach in unentered areas.", best: "Pioneer contexts where no gospel community exists" },
];

const RESOURCES = [
  { title: "Planting Missional Churches", author: "Ed Stetzer", type: "Book", desc: "The comprehensive textbook of church planting — theology, strategy, and practical guidance." },
  { title: "Church Planter: The Man, The Message, The Mission", author: "Darrin Patrick", type: "Book", desc: "Focuses on the character of the planter — often the most neglected dimension." },
  { title: "Acts 29 Network", type: "Network", desc: "One of the largest church planting networks globally — training, assessment, and ongoing support." },
  { title: "The Send Network", type: "Network", desc: "North American Mission Board's church planting arm — significant resources and partnership." },
  { title: "Church Planting Unleashed", author: "Jeff Christopherson", type: "Book", desc: "On multiplication movements and reproducing churches." },
  { title: "Starting Missional Churches", author: "Mark Lau Branson & Nick Warnes", type: "Book", desc: "Contextual and theological framework for planting in specific communities." },
];

export default function ChurchPlantingPage() {
  const [activeTab, setActiveTab] = usePersistedState<"phases" | "models" | "resources" | "journal" | "videos">("vine_church-planting_tab", "phases");
  const [selectedPhase, setSelectedPhase] = usePersistedState("vine_church-planting_selected_phase", "call");
  const [checkedQuestions, setCheckedQuestions] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_cp_checked"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [journalText, setJournalText] = useState(() => {
    try { return localStorage.getItem("vine_cp_journal") || ""; } catch { return ""; }
  });

  useEffect(() => { try { localStorage.setItem("vine_cp_checked", JSON.stringify([...checkedQuestions])); } catch {} }, [checkedQuestions]);
  useEffect(() => { try { localStorage.setItem("vine_cp_journal", journalText); } catch {} }, [journalText]);

  const phase = PHASES.find(p => p.id === selectedPhase)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⛪</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Church Planting Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            From call to community — a comprehensive guide to planting a healthy, reproducing church.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "phases" as const, label: "Phases", icon: "📈" },
            { id: "models" as const, label: "Models", icon: "🏛️" },
            { id: "resources" as const, label: "Resources", icon: "📚" },
            { id: "journal" as const, label: "My Notes", icon: "📝" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 6px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "phases" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
              {PHASES.map(p => (
                <button key={p.id} onClick={() => setSelectedPhase(p.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedPhase === p.id ? p.color : BORDER}`, background: selectedPhase === p.id ? `${p.color}18` : CARD, color: selectedPhase === p.id ? p.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "left" }}>
                  {p.icon} Phase {p.phase}: {p.name}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${phase.color}40`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 32 }}>{phase.icon}</span>
                  <div>
                    <h2 style={{ color: phase.color, fontWeight: 900, fontSize: 22, margin: 0 }}>Phase {phase.phase}: {phase.name}</h2>
                    <div style={{ color: MUTED, fontSize: 13 }}>{phase.duration}</div>
                  </div>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 20 }}>{phase.description}</p>

                <div style={{ background: `${phase.color}10`, border: `1px solid ${phase.color}30`, borderRadius: 8, padding: 14, marginBottom: 20 }}>
                  <p style={{ color: phase.color, fontSize: 13, fontStyle: "italic", margin: 0 }}><VerseRef reference={phase.verse} /></p>
                </div>

                <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Key Questions for This Phase</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  {phase.keyQuestions.map((q, i) => {
                    const key = `${phase.id}-q-${i}`;
                    const checked = checkedQuestions.has(key);
                    return (
                      <div key={i} onClick={() => setCheckedQuestions(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; })}
                        style={{ display: "flex", gap: 10, cursor: "pointer", padding: 10, borderRadius: 8, background: checked ? `${phase.color}10` : BG, border: `1px solid ${checked ? phase.color + "30" : BORDER}` }}>
                        <div style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${checked ? phase.color : BORDER}`, background: checked ? phase.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                          {checked && <span style={{ color: BG, fontSize: 10, fontWeight: 900 }}>✓</span>}
                        </div>
                        <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.5 }}>{q}</span>
                      </div>
                    );
                  })}
                </div>

                <h4 style={{ color: "#EF4444", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Cautions</h4>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  {phase.cautions.map((c, i) => <li key={i} style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 6 }}>{c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "models" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {MODELS.map((m, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, marginBottom: 8 }}>{m.name}</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{m.desc}</p>
                <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 8, padding: 10 }}>
                  <span style={{ color: PURPLE, fontSize: 12, fontWeight: 700 }}>Best for: </span>
                  <span style={{ color: TEXT, fontSize: 12 }}>{m.best}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
            {RESOURCES.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 700, height: "fit-content" }}>{r.type}</span>
                </div>
                <h4 style={{ color: GREEN, fontWeight: 800, fontSize: 15, margin: 0, marginBottom: 4 }}>{r.title}</h4>
                {r.author && <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>by {r.author}</div>}
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
            <h3 style={{ color: GREEN, fontWeight: 800, marginBottom: 8 }}>Church Planting Notes</h3>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 12 }}>Record your call story, prayer, vision, questions, and next steps here.</p>
            <textarea value={journalText} onChange={e => setJournalText(e.target.value)}
              placeholder={"My call story:\n\nWhere I sense God sending me:\n\nMy current preparation stage:\n\nKey people who are part of this:\n\nMy biggest questions right now:\n\nNext concrete steps:"}
              style={{ width: "100%", minHeight: 320, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16, color: TEXT, fontSize: 14, lineHeight: 1.8, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on church planting, multiplication, and pastoral calling.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "fY4Yt8gRz3A", title: "Interview with Tim Keller: Church Planting — Networks, Denominations, and Broader Ministry", channel: "Timothy Keller", description: "Tim Keller reflects on his model for church planting, the role of networks and denominations, and what makes urban church planting distinctive." },
                  { videoId: "R3MO7CtP6WU", title: "How Gospel-Shaped Ministry Looks", channel: "The Gospel Coalition / Tim Keller", description: "Tim Keller on what gospel-centered ministry looks like in practice — the theological and practical foundations for planting healthy churches." },
                  { videoId: "X_r8IMU647g", title: "The Depth of the Gospel", channel: "Matt Chandler / The Village Church", description: "Matt Chandler on how a deep, gospel-centered foundation is the essential prerequisite for every church plant that wants to last." },
                  { videoId: "1R4wP4xIydU", title: "Thrones & Thorns — Week 1", channel: "Matt Chandler / The Village Church", description: "Matt Chandler on servant leadership — the character model every church planter must embody before they can build a healthy community." },
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
