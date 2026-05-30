"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "What Is Eschatology?", verse: "Revelation 21:5", body: "'He who was seated on the throne said: I am making everything new!' (Revelation 21:5). Eschatology is the theology of last things — the final purposes of God for his creation. Christians agree that history is moving toward a defined goal (not merely cycling or ending in annihilation), that Jesus will return bodily, that there will be a resurrection of the dead, a final judgment, and an eternal state of blessing or condemnation. The major debates concern the details of the millennial period of Revelation 20 and the timing and nature of the tribulation." },
  { title: "The Return of Christ", verse: "Acts 1:11", body: "'This same Jesus, who has been taken from you into heaven, will come back in the same way you have seen him go into heaven' (Acts 1:11). All orthodox Christians affirm the bodily, visible, personal return of Jesus Christ. This is the hope of the church — not a spiritual return in each believer's heart (gnosticism) or a metaphorical return in the spread of the gospel (liberalism). He left bodily; he returns bodily. The manner of his return ('in the same way') mirrors the ascension." },
  { title: "Resurrection and Judgment", verse: "John 5:28-29", body: "'A time is coming when all who are in their graves will hear his voice and come out — those who have done what is good will rise to live, and those who have done what is evil will rise to be condemned' (John 5:28-29). The resurrection is universal — of the just and the unjust. Every person who has ever lived will face judgment. The basis of judgment is response to Christ — including, in some traditions, response to the light available to those who never heard (Romans 2:14-16). Eternal life and eternal separation are both real, final, and permanent outcomes." },
  { title: "The New Creation", verse: "Romans 8:21", body: "'The creation itself will be liberated from its bondage to decay and brought into the freedom and glory of the children of God' (Romans 8:21). The ultimate eschatological hope is not escape from the material world into a spiritual realm but the renewal of all things. The new heaven and new earth (Revelation 21-22) are not replacements for this creation but its transformation and restoration — a new creation from and through the old. The resurrection of the body (not flight from the body) is the paradigm for cosmic redemption." },
  { title: "The Already / Not Yet Tension", verse: "Hebrews 6:5", body: "Christians live between the ages: the kingdom of God has been inaugurated (Jesus's resurrection is the eschatological event) but not yet consummated. We have 'tasted... the powers of the coming age' (Hebrews 6:5) while the old age has not fully ended. This is why the church knows both the Spirit's first fruits and ongoing suffering, both resurrection power and unredeemed bodies. All eschatological debate takes place within this framework — the question is how the 'not yet' unfolds." },
];

const VIEWS = [
  {
    name: "Historic Premillennialism",
    color: GREEN,
    summary: "Christ returns before (pre) the millennium and reigns on earth for a literal or symbolic thousand years. After the millennium, final resurrection and judgment occur. This view was common among early church fathers (Justin Martyr, Irenaeus).",
    millennium: "Christ physically present on earth; resurrection of the righteous; a period of peace before the final state",
    rapture: "No separate rapture; the church goes through the tribulation",
    strengths: "Literal reading of Revelation 20; strong patristic support; takes the goodness of material creation seriously",
    weaknesses: "How to understand a 'second chance' period after Christ's return; complexity of a middle phase",
    key_figures: "George Ladd, Wayne Grudem",
  },
  {
    name: "Dispensational Premillennialism",
    color: PURPLE,
    summary: "Israel and the church are distinct peoples of God with distinct destinies. A pretribulation rapture takes the church to heaven while Israel experiences the 7-year tribulation. Christ then returns with the raptured church to establish a literal millennium in Israel.",
    millennium: "Literal 1000-year reign of Christ from Jerusalem; rebuilt temple; Davidic covenant literally fulfilled",
    rapture: "Pretribulation rapture — the church escapes the great tribulation",
    strengths: "Takes OT prophecy literally; systematic distinction between Israel and church; has mass popular following",
    weaknesses: "No mention of pretribulation rapture before 1830s (John Nelson Darby); two-stage return not explicit in NT; interpretation of OT prophecy contested",
    key_figures: "John Walvoord, John MacArthur, Tim LaHaye",
  },
  {
    name: "Amillennialism",
    color: "#F59E0B",
    summary: "The millennium of Revelation 20 is symbolic — it refers to the current church age, during which Christ reigns in heaven and through the church on earth. At Christ's return, final resurrection, judgment, and the new creation occur simultaneously.",
    millennium: "Not a future earthly period but the present reign of Christ; Satan is currently bound in his ability to deceive the nations",
    rapture: "No separate rapture; Christ's return is a single, final event",
    strengths: "Dominant view of Reformed theology; most consistent reading of Revelation as symbolic; avoids the interpretive complexity of a middle period",
    weaknesses: "Requires interpreting the 'thousand years' symbolically; less weight on OT national prophecies about Israel",
    key_figures: "Augustine, Calvin, Berkhof, Anthony Hoekema, Sam Storms",
  },
  {
    name: "Postmillennialism",
    color: "#EF4444",
    summary: "Through the preaching of the gospel and the work of the Spirit, a golden age of righteousness will be established before Christ returns. Christ returns after (post) the millennium to a world largely Christianized. History trends toward the triumph of the kingdom.",
    millennium: "A future era of gospel prosperity and relative righteousness on earth, brought about by the spread of Christianity",
    rapture: "No separate rapture; Christ returns at the end of the millennium to final judgment",
    strengths: "Optimistic vision of gospel power; takes the Great Commission seriously as capable of global transformation; popular during periods of revival",
    weaknesses: "Difficult to reconcile with NT warnings of increasing apostasy before Christ's return (2 Thessalonians 2); fell out of favor after 20th-century wars",
    key_figures: "Jonathan Edwards, Loraine Boettner, Doug Wilson (partial)",
  },
];

const PRACTICES = [
  { title: "Hold the View with Humility", desc: "All four major views are held by serious, orthodox, biblically faithful Christians. The eschatology debate is real and important, but it is secondary to the essentials: Christ returns, there is resurrection and judgment, and the story ends with new creation. Know your view and hold it without treating it as a gospel matter.", icon: "🤝" },
  { title: "Live with an Eternal Perspective", desc: "Whatever the details of Christ's return, its certainty changes everything. 'Since everything will be destroyed in this way, what kind of people ought you to be? You ought to live holy and godly lives' (2 Peter 3:11). Eschatology is not primarily predictive but formative — knowing the end shapes how you live now.", icon: "🌅" },
  { title: "Prioritize the Unmovable Core", desc: "Christ's return, the resurrection of the dead, and the final judgment are not debated among the views — they are shared. Build your eschatological hope on these certainties rather than on the contested details. A faith disrupted by every shift in prophetic interpretation was built on sand.", icon: "🏗️" },
  { title: "Resist Prophetic Sensationalism", desc: "Every generation has found its newspaper in the book of Revelation. The track record of date-setting and current-event application is uniformly poor. The prophecy teachers who sold millions of books predicting specific timelines have uniformly been wrong. Read Revelation as a book of worship and encouragement, not a newspaper code.", icon: "⚠️" },
  { title: "Read Revelation as a Letter to the Seven Churches", desc: "Revelation was written to seven specific churches in Asia Minor facing specific persecution (Revelation 1:4). Whatever else it means, it meant something to its first readers in the first century. Reading it in its original context — as encouragement to persecuted believers that God wins — is the safest starting point.", icon: "📖" },
  { title: "Let Hope Shape Present Action", desc: "The coming kingdom is not only a future comfort but a present summons. Because there will be new creation, creation care matters now. Because there will be justice, the pursuit of justice matters now. Eschatology is not escapism but motivation — 'your labor in the Lord is not in vain' (1 Corinthians 15:58).", icon: "🌍" },
];

export default function EschatologyViewsPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "views" | "practices">("theology");
  const [selectedView, setSelectedView] = useState("Historic Premillennialism");

  const view = VIEWS.find(v => v.name === selectedView)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⏳</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Eschatology: End Times Views</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Christians agree that Christ returns, the dead are raised, judgment occurs, and new creation follows. The debate concerns the millennium — a period described in Revelation 20 whose nature and timing has divided evangelicals for centuries.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Core Beliefs", icon: "📖" },
            { id: "views" as const, label: "The Views", icon: "🗺️" },
            { id: "practices" as const, label: "Implications", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "views" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {VIEWS.map(v => (
                <button key={v.name} onClick={() => setSelectedView(v.name)}
                  style={{ padding: "8px 12px", borderRadius: 20, border: `1px solid ${selectedView === v.name ? v.color : BORDER}`, background: selectedView === v.name ? `${v.color}20` : "transparent", color: selectedView === v.name ? v.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {v.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${view.color}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: view.color, fontWeight: 900, fontSize: 22, marginBottom: 14 }}>{view.name}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{view.summary}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                <div style={{ background: `${view.color}08`, border: `1px solid ${view.color}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: view.color, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>THE MILLENNIUM</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{view.millennium}</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>RAPTURE VIEW</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{view.rapture}</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>STRENGTHS</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{view.strengths}</p>
                </div>
                <div style={{ background: "#EF444408", border: "1px solid #EF444415", borderRadius: 8, padding: 12 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 11, marginBottom: 4 }}>WEAKNESSES</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{view.weaknesses}</p>
                </div>
              </div>
              <div style={{ background: `${PURPLE}06`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>KEY FIGURES</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{view.key_figures}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Whatever view you hold, eschatology is meant to produce hope and urgency, not chart-mapping anxiety. These implications hold across all views.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
