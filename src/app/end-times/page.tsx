"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const VIEWS = [
  {
    id: "amillennial",
    name: "Amillennialism",
    icon: "♾️",
    color: "#3B82F6",
    short: "The 1000 years is symbolic; we are in the millennial age now.",
    desc: "The millennium of Revelation 20 is symbolic, representing the current age between Christ's first and second comings. Satan is currently 'bound' in the sense that the gospel is advancing globally. Christ will return once, the dead will be raised simultaneously, and the new heavens and earth will begin. Held by Augustine, Calvin, most Reformed tradition, many Lutherans.",
    strengths: "Takes Revelation's genre seriously as apocalyptic literature. Avoids complex speculative timelines. Consistent with how the rest of the NT treats prophecy.",
    cautions: "Requires reading 'thousand years' symbolically when many want a more literal reading.",
    proponents: "Augustine, John Calvin, Louis Berkhof, G.K. Beale, Kim Riddlebarger",
  },
  {
    id: "postmillennial",
    name: "Postmillennialism",
    icon: "🌅",
    color: "#10B981",
    short: "The gospel will Christianize much of the world before Christ returns.",
    desc: "Through the advance of the gospel, the world will be substantially Christianized — there will be a long era of gospel triumph — before Christ returns. Christ returns after (post-) this millennial period of gospel flourishing. The church's mission is to extend the kingdom until this goal is substantially reached. Optimistic about the gospel's transforming power in history.",
    strengths: "High view of the gospel's power. Motivates sustained cultural engagement and mission.",
    cautions: "Must account for global suffering and the persistence of evil. History has moderated earlier postmillennial optimism.",
    proponents: "Jonathan Edwards (in some forms), Rousas Rushdoony, Gary DeMar, Douglas Wilson",
  },
  {
    id: "historic-premillennial",
    name: "Historic Premillennialism",
    icon: "🌿",
    color: "#F59E0B",
    short: "Christ returns before a literal 1000-year earthly reign.",
    desc: "Christ returns visibly and bodily (pre-millennium), raises the righteous dead, and reigns on earth for a literal thousand years. At the end of this period, Satan is released, a final rebellion occurs, and the final judgment and new creation follow. The church goes through the tribulation before the return. An early church view held by Papias, Irenaeus, Justin Martyr, and others.",
    strengths: "Takes Revelation 20 at face value. Well-attested in early Christian writings. Does not require a rapture distinct from the return.",
    cautions: "Must explain why Christ reigns on a currently unredeemed earth for a limited period before the final state.",
    proponents: "George Ladd, Craig Blomberg, Wayne Grudem (broadly), N.T. Wright (modified)",
  },
  {
    id: "dispensational",
    name: "Dispensational Premillennialism",
    icon: "📅",
    color: "#EF4444",
    short: "A secret rapture, 7-year tribulation, then Christ's reign.",
    desc: "The most popular view in American evangelicalism. Distinguishes between God's program for Israel and for the church. A secret 'rapture' removes the church before a 7-year great tribulation. Christ then returns visibly, Israel is restored, and he reigns for 1000 years from Jerusalem. Associated with the Scofield Bible, Dallas Seminary, Tim LaHaye's Left Behind series, and much of the Baptist and charismatic tradition.",
    strengths: "Produces a detailed interpretive system. Takes OT promises to Israel as literally future. Widespread popular influence.",
    cautions: "The pre-tribulation rapture is not found before the 19th century (Darby). The strict Israel/church distinction is challenged by texts like Romans 11, Galatians 3.",
    proponents: "John Darby, C.I. Scofield, Charles Ryrie, Tim LaHaye, John MacArthur",
  },
];

const WHAT_MATTERS = [
  { title: "Christ Will Return Visibly and Bodily", verse: "Acts 1:11", desc: "All Christian traditions affirm this. The same Jesus who ascended will return. The return is not metaphorical, not simply death or Pentecost — it is a future, physical, visible event." },
  { title: "The Dead Will Be Raised", verse: "1 Cor 15:52", desc: "Bodily resurrection — not merely spiritual survival — is the Christian hope. The resurrection of Jesus is the prototype and guarantee of our own." },
  { title: "There Will Be a Final Judgment", verse: "Rev 20:11–13", desc: "Every person will give account. This judgment is just, complete, and final. Both death and hell are cast into the lake of fire; the book of life determines the final destiny of every soul." },
  { title: "New Creation Will Renew the Cosmos", verse: "Rev 21:1–5", desc: "The final state is not disembodied heaven floating in the clouds — it is a renewed, physical new creation. God will dwell with his people. The tears, death, and mourning of the old order will be permanently gone." },
  { title: "Every Knee Will Bow", verse: "Phil 2:10–11", desc: "Christ's lordship will be openly acknowledged by all creation. The hidden reality of his reign will be made manifest. Justice will be seen to have been done." },
];

const PRACTICAL = [
  { q: "How should eschatology affect daily life?", a: "Every decision should be made in light of the coming judgment and new creation. What is worth doing? What is worth keeping? How do I treat people who will stand before God as I will? Eschatology is not an intellectual puzzle — it is the motivating horizon of Christian action." },
  { q: "Should I be anxious about the end times?", a: "No. Jesus said 'Watch' — but not 'worry.' The consistent posture of the NT is readiness, not anxiety. 'He who is coming will come and will not delay' (Hebrews 10:37). We live in alert expectation, not fearful dread." },
  { q: "What do I do with news about 'signs of the times'?", a: "Every generation has seen what looked like fulfillment of end-times prophecy — plagues, wars, rulers, apostasy. Be epistemically humble. Jesus said even he did not know the day or hour (Mark 13:32). Interpret the present age carefully; don't build doctrines on newspaper headlines." },
  { q: "Should Christians care about the world if it's ending?", a: "Yes. The coming new creation vindicates creation — it is not destroyed but renewed. Our care for the earth, for people, for culture is anticipatory of the coming restoration. The final state is not escapism; it is the world made right." },
];

const THINKERS_ESC = [
  {
    id: "wright",
    name: "N.T. Wright",
    era: "b. 1948",
    context: "Bishop of Durham; New Testament scholar; University of St Andrews",
    bio: "Wright has done more than any living scholar to recover the Jewish apocalyptic context of early Christian eschatology. His work Surprised by Hope (2008) argues that the Christian hope is not 'going to heaven when you die' but bodily resurrection and the renewal of the whole creation. He emphasizes that the future new creation is not a replacement of the present world but its restoration and glorification — and that this changes how Christians should think about creation care, justice, and culture.",
    quote: "The whole point of what Jesus was doing and saying was that the Kingdom of God was arriving in the present, not just in the future.",
    contribution: "Recovered the creational, bodily, and this-worldly nature of Christian hope. His critique of 'Platonic escapism' in Christian eschatology has reoriented a generation of pastors and scholars toward the genuine NT hope."
  },
  {
    id: "edwards",
    name: "Jonathan Edwards",
    era: "1703-1758",
    context: "Puritan pastor; America's greatest theologian",
    bio: "Edwards held a form of postmillennialism — he believed the gospel would advance until large portions of the world were converted, ushering in a golden age before Christ's return. His History of the Work of Redemption traces the unfolding of God's redemptive purposes across history as a coherent narrative moving toward the consummation. The Great Awakening he helped lead seemed to him a foretaste of what was coming. His optimism about the gospel's power shaped American evangelicalism profoundly.",
    quote: "The work of redemption is a work that God carries on from the fall of man to the end of the world. God makes all the successive events of Providence in the world subservient to this great design.",
    contribution: "Articulated a coherent theology of history in which God's redemptive purposes move from creation through fall, redemption, and restoration. His postmillennial hope produced serious engagement with culture and extraordinary missionary ambition."
  },
  {
    id: "bavinck",
    name: "Herman Bavinck",
    era: "1854-1921",
    context: "Dutch Reformed theologian; Free University of Amsterdam",
    bio: "Bavinck's treatment of eschatology in Reformed Dogmatics vol. 4 remains one of the most thorough and careful systematic treatments in Protestant theology. He holds an amillennial position but with unusual nuance and breadth — engaging with the whole history of interpretation, the nature of the intermediate state, the resurrection body, heaven, hell, and new creation. His central thesis: grace restores nature. The eschaton does not abolish creation but redeems it.",
    quote: "The foundation of eschatology is Christology. Christ's resurrection is the beginning of the new creation, and his return will complete it.",
    contribution: "Produced the most comprehensive Reformed systematic eschatology of the modern era. His nature/grace framework — grace restores nature rather than replacing it — has become foundational for Reformed eschatology and worldview thinking."
  },
  {
    id: "ladd",
    name: "George Eldon Ladd",
    era: "1911-1982",
    context: "Fuller Theological Seminary; New Testament scholar",
    bio: "Ladd was the most important American biblical theologian of the 20th century on the kingdom of God and eschatology. His The Presence of the Future (1964) and A Theology of the New Testament established that the New Testament presents the kingdom of God as both already present (in Jesus' ministry) and not yet fully realized (awaiting the parousia). This 'already/not yet' framework has become the standard evangelical paradigm for understanding kingdom eschatology.",
    quote: "The kingdom of God is the redemptive reign of God dynamically active to establish his rule among human beings, and that this kingdom, which will appear as an apocalyptic act at the end of the age, has already come into human history in the person and mission of Jesus.",
    contribution: "Established the already/not yet kingdom framework that now dominates evangelical New Testament theology. His work gave the church a way to read the Gospels, Acts, and the epistles as a coherent eschatological narrative."
  },
  {
    id: "bauckham",
    name: "Richard Bauckham",
    era: "b. 1946",
    context: "Cambridge; University of St Andrews; New Testament and Patristics scholar",
    bio: "Bauckham's The Theology of the Book of Revelation (1993) remains the definitive short treatment of Revelation's eschatological vision. He argues that Revelation is not a prediction manual but a prophetic letter calling persecuted Christians to faithful witness in the knowledge of God's ultimate sovereignty. Its vision of the new Jerusalem is about God's presence — not real estate — and its language of judgment calls the church to take evil seriously without mapping it onto contemporary events.",
    quote: "The Revelation is given not so that we may see the future as it were mapped out in advance, but so that we may see the present world in the light of its future destiny.",
    contribution: "Corrected misreadings of Revelation by recovering its historical and rhetorical context. His work has helped a generation of preachers and teachers use Revelation pastorally rather than speculatively."
  }
];

export default function EndTimesPage() {
  const [activeTab, setActiveTab] = useState<"views" | "thinkers" | "essentials" | "practical" | "videos">("essentials");
  const [selectedView, setSelectedView] = useState("amillennial");
  const [selectedThinker, setSelectedThinker] = useState("wright");
  const [expanded, setExpanded] = useState<string | null>(null);

  const view = VIEWS.find(v => v.id === selectedView)!;
  const thinker = THINKERS_ESC.find(t => t.id === selectedThinker)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌅</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>End Times & Eschatology</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            What Christians believe about Christ's return, resurrection, judgment, and new creation — the theological essentials that unite all traditions, and the views that divide them.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "essentials" as const, label: "Essentials", icon: "✝️" },
            { id: "views" as const, label: "Views", icon: "📖" },
            { id: "thinkers" as const, label: "Thinkers", icon: "🏛️" },
            { id: "practical" as const, label: "Q&A", icon: "❓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "essentials" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The details of end-times sequences divide Christians. The essentials unite them. All major Christian traditions — Catholic, Orthodox, Reformed, Lutheran, Baptist, Pentecostal — affirm what follows. These are not denominational opinions; they are creedal Christianity.
              </p>
            </div>
            {WHAT_MATTERS.map((w, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, margin: 0 }}>{w.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{w.verse}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "views" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
              {VIEWS.map(v => (
                <button key={v.id} onClick={() => setSelectedView(v.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedView === v.id ? v.color : BORDER}`, background: selectedView === v.id ? `${v.color}18` : CARD, color: selectedView === v.id ? v.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textAlign: "left" }}>
                  {v.icon} {v.name}
                </button>
              ))}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 12, marginTop: 8 }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Note</div>
                <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.6, margin: 0 }}>These are all views held by orthodox, Bible-believing Christians. Hold the essentials firmly; the rest with humility.</p>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${view.color}40`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 32 }}>{view.icon}</span>
                  <h2 style={{ color: view.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{view.name}</h2>
                </div>
                <div style={{ background: `${view.color}15`, border: `1px solid ${view.color}30`, borderRadius: 8, padding: "8px 12px", marginBottom: 14 }}>
                  <p style={{ color: view.color, fontSize: 14, fontStyle: "italic", margin: 0 }}>{view.short}</p>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{view.desc}</p>
                <div style={{ background: BG, borderRadius: 10, padding: 14, marginBottom: 10 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>Strengths</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{view.strengths}</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 14, marginBottom: 10 }}>
                  <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 12, marginBottom: 4 }}>Cautions</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{view.cautions}</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>Notable Proponents</div>
                  <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>{view.proponents}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "thinkers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {THINKERS_ESC.map(t => (
                <button key={t.id} onClick={() => setSelectedThinker(t.id)}
                  style={{ width: "100%", background: selectedThinker === t.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedThinker === t.id ? PURPLE + "80" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedThinker === t.id ? TEXT : MUTED, fontWeight: 700, fontSize: 13 }}>{t.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{t.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 18 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{thinker.name}</h2>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{thinker.era}</span>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{thinker.context}</span>
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>LIFE & CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{thinker.bio}</p>
                </div>
                <div style={{ background: BG, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 10px 10px 0", padding: 18, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CHARACTERISTIC QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{thinker.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{thinker.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practical" && (
          <div>
            {PRACTICAL.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button
                  onClick={() => setExpanded(expanded === p.q ? null : p.q)}
                  style={{ width: "100%", padding: "18px 22px", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}>
                  <span style={{ color: GREEN }}>{p.q}</span>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded === p.q ? "−" : "+"}</span>
                </button>
                {expanded === p.q && (
                  <div style={{ padding: "0 22px 20px" }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{p.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Video teachings on end times, eschatology, and the Christian hope — what the Bible actually says about the last things.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "4S0TQ2dXnms", title: "What Happens After We Die? N.T. Wright on Resurrection", channel: "N.T. Wright Online", description: "Wright's definitive explanation of the Christian hope: not escape to a disembodied heaven, but the resurrection of the body and the renewal of creation. Challenges much popular end-times thinking." },
                  { videoId: "yqWn5Ovv8V0", title: "The Second Coming of Christ — What Does the Bible Teach?", channel: "Desiring God", description: "John Piper walks through the key New Testament passages on Christ's return, clarifying what all Christians agree on and where the major debates lie." },
                  { videoId: "-a-4XwDYTMU", title: "Amillennialism vs. Premillennialism: A Fair Debate", channel: "Sam Storms", description: "A gracious, scholarly comparison of the two dominant evangelical views on the millennium, with attention to the key passages in Revelation 20 and Daniel." },
                  { videoId: "3ijQGmgF5nE", title: "Reading Revelation: How to Approach the Last Book of the Bible", channel: "The Bible Project", description: "An accessible guide to reading Revelation as its first-century audience would have — as apocalyptic literature full of symbols, not a prophetic timeline." },
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
    </div>
  );
}
