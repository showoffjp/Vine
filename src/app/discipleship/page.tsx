"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const PATHWAYS = [
  {
    id: "foundation",
    name: "Foundation",
    subtitle: "New Believer Essentials",
    icon: "🌱",
    color: "#10B981",
    duration: "3-6 months",
    description: "The foundational truths and practices every new believer needs to understand and establish. This stage is about settling core convictions and beginning basic spiritual habits.",
    topics: [
      { title: "Assurance of Salvation", desc: "Understanding what just happened — the nature of salvation, the new birth, and the certainty that comes from God's promises rather than feelings." },
      { title: "Who Is God?", desc: "The Trinity, God's character (holy, loving, just, merciful), and what it means to have a personal relationship with each person of the Godhead." },
      { title: "The Bible", desc: "What the Bible is, why it is trustworthy, how to read it, and beginning a habit of daily Scripture engagement." },
      { title: "Prayer", desc: "Prayer as conversation with a personal God — learning to talk to God honestly, receive his presence, and grow in listening." },
      { title: "The Church", desc: "Why church community is essential, not optional — finding a local church, getting connected, and understanding baptism and the Lord's Supper." },
      { title: "The Holy Spirit", desc: "Who the Spirit is, what the Spirit does in the believer's life, how to be filled and led by the Spirit." },
    ],
    resources: ["Basic Christianity (John Stott)", "The New Christian's Handbook (Max Anders)", "Bible reading plan — start with John, then Acts, then Genesis"],
  },
  {
    id: "growth",
    name: "Growth",
    subtitle: "Developing Spiritual Disciplines",
    icon: "📈",
    color: "#3B82F6",
    duration: "1-2 years",
    description: "Moving from survival to formation — developing consistent spiritual habits and beginning to understand the Christian life as intentional formation into Christlikeness.",
    topics: [
      { title: "The Spiritual Disciplines", desc: "Study, meditation, prayer, fasting, Sabbath, solitude, simplicity, service — each discipline reshapes the inner life in specific ways." },
      { title: "Christian Ethics", desc: "How the gospel shapes decision-making — not rules but character. Understanding virtue, conscience, and moral reasoning from a biblical worldview." },
      { title: "Knowing God Deeply", desc: "Moving from knowing about God to knowing God — developing a personal, relational spiritual life marked by awareness of God's presence." },
      { title: "Handling Temptation & Sin", desc: "Understanding the three enemies (world, flesh, devil), the role of grace in overcoming sin, and building patterns of victory." },
      { title: "Spiritual Warfare", desc: "The reality of spiritual opposition, the authority of the believer, the armor of God, and practical strategies for standing firm." },
      { title: "Reading Scripture Well", desc: "Basic hermeneutics — understanding context, genre, and how to interpret Scripture accurately without importing modern assumptions." },
    ],
    resources: ["Knowing God (J.I. Packer)", "Celebration of Discipline (Richard Foster)", "The Ruthless Elimination of Hurry (John Mark Comer)"],
  },
  {
    id: "maturity",
    name: "Maturity",
    subtitle: "Theological Depth & Character",
    icon: "🌳",
    color: PURPLE,
    duration: "Ongoing",
    description: "Moving into theological depth, settled character, and beginning to multiply — investing in others and contributing to the church with mature wisdom and presence.",
    topics: [
      { title: "Biblical Theology", desc: "Understanding the whole arc of Scripture — creation, fall, redemption, restoration — and how every text fits into the grand narrative." },
      { title: "Systematic Theology", desc: "The core doctrines of the Christian faith in depth — God, Scripture, humanity, salvation, church, and last things." },
      { title: "Christian History & Tradition", desc: "Understanding what the church has believed and practiced across the centuries — learning from those who went before." },
      { title: "The Fruit of the Spirit", desc: "Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control — the marks of mature Christlikeness." },
      { title: "Suffering & Theodicy", desc: "Why a good God allows suffering — and how suffering becomes the furnace of formation rather than evidence against faith." },
      { title: "Discernment & Wisdom", desc: "Making wise decisions in ambiguous situations — the role of community, Scripture, prayer, and Spirit-led reasoning." },
    ],
    resources: ["Knowing Scripture (R.C. Sproul)", "Mere Christianity (C.S. Lewis)", "The Spirit of the Disciplines (Dallas Willard)"],
  },
  {
    id: "multiplying",
    name: "Multiplying",
    subtitle: "Discipling Others",
    icon: "✨",
    color: "#F59E0B",
    duration: "Ongoing",
    description: "The goal of discipleship is disciples who make disciples. This stage focuses on intentionally investing in others, mentoring, and contributing to the church's mission.",
    topics: [
      { title: "What Discipleship Actually Is", desc: "Not teaching a curriculum but sharing your life (1 Thess 2:8). Understanding the relational, slow, intentional nature of discipleship." },
      { title: "How to Disciple Someone", desc: "Finding the right person, establishing rhythm and accountability, what topics to cover, how to handle hard conversations." },
      { title: "Spiritual Mentorship", desc: "The difference between discipleship (broad formation) and mentorship (specific skill/wisdom transfer). How to offer both." },
      { title: "Reproducing the Pattern", desc: "Paul's 2 Timothy 2:2 vision: disciples who disciple disciples. Understanding the generational nature of spiritual multiplication." },
      { title: "Teaching & Communication", desc: "How to communicate truth effectively — in small groups, one-on-one, and perhaps from a pulpit or platform." },
      { title: "Your Unique Contribution", desc: "Understanding your spiritual gifts, calling, and how your specific design serves the body and the mission of God." },
    ],
    resources: ["The Master Plan of Evangelism (Robert Coleman)", "Discipleship (Mark Dever)", "The Trellis and the Vine (Colin Marshall & Tony Payne)"],
  },
];

const DISCIPLESHIP_QUESTIONS = [
  "What is God teaching you in Scripture right now?",
  "How is your prayer life? What does your regular prayer look like?",
  "Where are you experiencing temptation? What patterns do you notice?",
  "What relationships in your life reflect Christ? Where are you struggling relationally?",
  "What is God asking you to give up, take up, or step into?",
  "Are you serving in your church? How are you contributing to the body?",
  "What are you reading? Who is influencing your thinking?",
  "Where do you see God at work in your life right now?",
  "Who are you investing in? Who is walking alongside you?",
  "What fears or doubts are present in your walk right now?",
];

export default function DiscipleshipPage() {
  const [activeTab, setActiveTab] = useState<"pathways" | "questions" | "myplan">("pathways");
  const [selectedPath, setSelectedPath] = useState("foundation");
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_disc_completed"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [planText, setPlanText] = useState(() => {
    try { return localStorage.getItem("vine_disc_plan") || ""; } catch { return ""; }
  });
  const [currentPath, setCurrentPath] = useState(() => {
    try { return localStorage.getItem("vine_disc_path") || "foundation"; } catch { return "foundation"; }
  });

  useEffect(() => { try { localStorage.setItem("vine_disc_completed", JSON.stringify([...completedTopics])); } catch {} }, [completedTopics]);
  useEffect(() => { try { localStorage.setItem("vine_disc_plan", planText); } catch {} }, [planText]);
  useEffect(() => { try { localStorage.setItem("vine_disc_path", currentPath); } catch {} }, [currentPath]);

  const path = PATHWAYS.find(p => p.id === selectedPath)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌱</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Discipleship Pathways</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Intentional formation into Christlikeness — from new believer to multiplying disciple. The Great Commission is not just evangelism; it is making disciples.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "pathways" as const, label: "Pathways", icon: "🗺️" },
            { id: "questions" as const, label: "1-on-1 Questions", icon: "💬" },
            { id: "myplan" as const, label: "My Plan", icon: "📝" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "pathways" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
              {PATHWAYS.map(p => (
                <button key={p.id} onClick={() => setSelectedPath(p.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedPath === p.id ? p.color : BORDER}`, background: selectedPath === p.id ? `${p.color}18` : CARD, color: selectedPath === p.id ? p.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "left" }}>
                  {p.icon} {p.name}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${path.color}40`, borderRadius: 14, padding: 26 }}>
                <div style={{ marginBottom: 16 }}>
                  <h2 style={{ color: path.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{path.icon} {path.name}</h2>
                  <div style={{ color: MUTED, fontSize: 14, marginTop: 4 }}>{path.subtitle} · {path.duration}</div>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 20 }}>{path.description}</p>

                <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Core Topics</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
                  {path.topics.map((t, i) => {
                    const key = `${path.id}-${i}`;
                    const done = completedTopics.has(key);
                    return (
                      <div key={i} onClick={() => setCompletedTopics(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; })}
                        style={{ background: done ? `${path.color}10` : BG, border: `1px solid ${done ? path.color + "30" : BORDER}`, borderRadius: 10, padding: 14, cursor: "pointer" }}>
                        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <div style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${done ? path.color : BORDER}`, background: done ? path.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                            {done && <span style={{ color: BG, fontSize: 10, fontWeight: 900 }}>✓</span>}
                          </div>
                          <div>
                            <div style={{ color: done ? path.color : TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{t.title}</div>
                            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.55, margin: 0 }}>{t.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Recommended Resources</h4>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  {path.resources.map((r, i) => <li key={i} style={{ color: TEXT, fontSize: 13, marginBottom: 6 }}>{r}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "questions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 10 }}>Questions for Discipleship Conversations</h3>
              <p style={{ color: TEXT, lineHeight: 1.7, fontSize: 15 }}>Whether you meet weekly or monthly, these questions open honest conversation about spiritual growth. Ask one or two deeply rather than all ten quickly.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
              {DISCIPLESHIP_QUESTIONS.map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ display: "flex", gap: 10 }}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{i + 1}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{q}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, marginBottom: 10 }}>The 3-3-3 Rhythm</h3>
              <p style={{ color: TEXT, lineHeight: 1.7, fontSize: 14, marginBottom: 12 }}>A simple structure for discipleship meetings:</p>
              {[
                { num: "3", label: "min catching up on life", desc: "Brief life update — not spiritual performance, just life." },
                { num: "3", label: "areas of accountability", desc: "Time in Word, prayer habits, and one area of growth or struggle." },
                { num: "3", label: "things you're trusting God for", desc: "Keep faith active by naming what you're believing God for together." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${GREEN}15`, border: `1px solid ${GREEN}30`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontWeight: 900, fontSize: 16, flexShrink: 0 }}>{item.num}</div>
                  <div>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 14 }}>{item.label}</div>
                    <p style={{ color: MUTED, fontSize: 13, margin: 0, marginTop: 2 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "myplan" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, marginBottom: 12 }}>My Current Pathway</h3>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
                {PATHWAYS.map(p => (
                  <button key={p.id} onClick={() => setCurrentPath(p.id)}
                    style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${currentPath === p.id ? p.color : BORDER}`, background: currentPath === p.id ? `${p.color}15` : "transparent", color: currentPath === p.id ? p.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                    {p.icon} {p.name}
                  </button>
                ))}
              </div>
              <div style={{ background: BG, borderRadius: 10, padding: 14 }}>
                <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>{PATHWAYS.find(p => p.id === currentPath)?.description}</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, marginBottom: 8 }}>My Discipleship Plan</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 12 }}>Who is discipling you? Who are you discipling? What are you working on? What are your next steps?</p>
              <textarea value={planText} onChange={e => setPlanText(e.target.value)}
                placeholder={"My current stage: \n\nWho is discipling me:\n\nWho I am discipling:\n\nWhat I'm currently studying:\n\nMy key growth area this season:\n\nNext steps:"}
                style={{ width: "100%", minHeight: 240, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16, color: TEXT, fontSize: 14, lineHeight: 1.8, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
