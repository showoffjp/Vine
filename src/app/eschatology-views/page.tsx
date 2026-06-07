"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

type Tab = "theology" | "thinkers" | "views" | "practices" | "journal" | "videos";

const THINKERS = [
  {
    id: "wright",
    name: "N.T. Wright",
    era: "1948-present",
    context: "Anglican Bishop; NT scholar, St. Andrews; Surprised by Hope",
    bio: "Wright's 'Surprised by Hope' (2008) is the most influential contemporary evangelical treatment of eschatology. His central argument: the church has fundamentally misunderstood the Christian hope — not escape to heaven but the resurrection of the body and the renewal of the creation. 'Heaven' in NT language is where God is present now, not the permanent final home of the saved. The final destination is the new heavens and new earth. This shift from 'going to heaven when you die' to 'the renewal of all things' has reshaped evangelical eschatology.",
    quote: "The point of the resurrection is not that Jesus went to heaven, but that the future of the whole world has broken into the present. The new creation has begun, and Christians are its advance guard.",
    contribution: "Wright restored the cosmic and material dimensions of Christian hope that had been eclipsed by a spiritualized, heavenly eschatology. His distinction between 'life after death' (intermediate state) and 'life after life after death' (bodily resurrection to new creation) has become standard in evangelical biblical theology. He also gave intellectual credibility to the claim that Jesus's resurrection is historically defensible — not an article of faith in spite of evidence but in response to it.",
  },
  {
    id: "hoekema",
    name: "Anthony Hoekema",
    era: "1913-1988",
    context: "Reformed theologian; Calvin Theological Seminary; The Bible and the Future",
    bio: "Hoekema's 'The Bible and the Future' (1979) is the definitive Reformed amillennial treatment of eschatology. His framework: the already/not yet tension — the kingdom has been inaugurated in Christ's first coming and will be consummated at his return. Hoekema also wrote the best modern treatment of the new earth: not a disembodied spiritual state but a material, physical, glorified creation that is this creation transformed. His emphasis on the goodness of the physical new earth has been enormously influential.",
    quote: "We should not think of the new earth as some ethereal place where we float about as disembodied spirits. The new earth will be as real and as physical as this earth — only free from sin and its effects.",
    contribution: "Hoekema gave amillennialists their most rigorous modern treatment of the end times, demonstrating that the amillennial view can be as physically concrete and materially robust as premillennialism. His treatment of the new earth — drawing on Isaiah, Romans 8, and Revelation 21-22 — showed that Reformed eschatology does not collapse into Gnosticism. His book remains the standard starting point for Reformed eschatology students.",
  },
  {
    id: "ladd",
    name: "George Eldon Ladd",
    era: "1911-1982",
    context: "NT scholar; Fuller Seminary; A Theology of the New Testament",
    bio: "Ladd is the father of historic premillennialism in modern evangelical scholarship. His 'The Gospel of the Kingdom' (1959) and 'A Theology of the New Testament' (1974) established the kingdom-of-God framework that underlies most evangelical biblical theology. His central contribution: the kingdom is both present (inaugurated in Jesus's ministry) and future (consummated at his return). This 'already/not yet' hermeneutic — which Ladd developed in dialogue with Oscar Cullmann — became the dominant framework in evangelical NT scholarship.",
    quote: "The Kingdom of God is the redemptive reign of God dynamically active to establish his rule among men. This Kingdom, which will appear as an apocalyptic act at the end of the age, has already come into human history in the person and mission of Jesus.",
    contribution: "Ladd gave evangelical scholarship a coherent alternative to dispensationalism that takes seriously both the OT prophetic tradition and the NT's inaugurated eschatology. His framework — that the kingdom comes in phases rather than all at once, with the cross/resurrection as the decisive first moment — allowed evangelicals to hold a high view of OT prophecy without requiring the two-stage return and Israel-distinction of dispensationalism. His influence on Fuller Seminary shaped a generation of evangelical scholars.",
  },
  {
    id: "middleton",
    name: "J. Richard Middleton",
    era: "1955-present",
    context: "Biblical theologian; Northeastern Seminary; A New Heaven and a New Earth",
    bio: "Middleton's 'A New Heaven and a New Earth' (2014) is the most thorough recent biblical case for cosmic renewal — the transformation of this creation, not its replacement. Challenging both the escape-to-heaven popular theology and the 'rapture and destruction' dispensational framework, he shows from Genesis to Revelation that Scripture's narrative is about the redemption of this creation, not escape from it. His reading of 2 Peter 3:10-12 — often cited for destruction — argues for purification rather than annihilation.",
    quote: "The biblical vision is not escape from earth to heaven, but the redemption and transformation of earth. God's project is not to rescue souls from a doomed world, but to renew the world itself.",
    contribution: "Middleton provided the most comprehensive exegetical case for new creation as transformed continuation rather than replacement. This matters because it determines whether creation care, embodied life, and cultural engagement have eternal significance — or are ultimately futile. If this creation is renewed rather than discarded, then what we do with it now matters eschatologically. His work gave evangelical creation care theology its strongest eschatological footing.",
  },
  {
    id: "storms",
    name: "Sam Storms",
    era: "1951-present",
    context: "Reformed charismatic pastor; Bridgeway Church Oklahoma City",
    bio: "Storms represents an unusual combination: Reformed amillennialism plus continuationist theology (belief that all spiritual gifts continue today). His 'Kingdom Come: The Amillennial Alternative' (2013) is the most practical and accessible modern defense of amillennialism for evangelical lay readers. He engages directly with dispensational premillennialism, responds to its strongest arguments, and shows why amillennialism is not a failure of biblical seriousness but a more internally consistent reading of Revelation 20 in its literary context.",
    quote: "The millennium is not a future political kingdom on earth. It is the present reign of Christ in heaven, into which all believers enter at death. It began at the resurrection and will end at his return.",
    contribution: "Storms demonstrated that a thoroughgoing evangelical could hold amillennialism without being theologically liberal or dismissive of OT prophecy. His responses to dispensationalist arguments — especially on Revelation 20 and the binding of Satan — are the most accessible in contemporary literature. He also showed that charismatic experience and Reformed eschatology are compatible, challenging the assumption in some circles that continuationism requires premillennialism.",
  },
];

export default function EschatologyViewsPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_eschatology-views_tab", "theology");

  const [escvEntries, setEscvEntries] = useState<{ id: string; date: string; view: string; thinker: string; implication: string }[]>(() => {
    try { const s = localStorage.getItem("vine_escv_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [escvForm, setEscvForm] = useState({ view: "", thinker: "", implication: "" });
  const [escvSaved, setEscvSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_escv_entries", JSON.stringify(escvEntries)); }, [escvEntries]);
  function saveEscvEntry() {
    if (!escvForm.view.trim()) return;
    setEscvEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...escvForm }, ...prev]);
    setEscvForm({ view: "", thinker: "", implication: "" });
    setEscvSaved(true); setTimeout(() => setEscvSaved(false), 2000);
  }
  function deleteEscvEntry(id: string) { setEscvEntries(prev => prev.filter(e => e.id !== id)); }
  const [selectedView, setSelectedView] = usePersistedState("vine_eschatology-views_selected_view", "Historic Premillennialism");
  const [selectedThinker, setSelectedThinker] = usePersistedState("vine_eschatology-views_selected_thinker", "wright");
  const thinker = THINKERS.find(t => t.id === selectedThinker)!;

  const view = VIEWS.find(v => v.name === selectedView)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
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
            { id: "thinkers" as const, label: "Thinkers", icon: "💡" },
            { id: "views" as const, label: "The Views", icon: "🗺️" },
            { id: "practices" as const, label: "Implications", icon: "🛠️" },
            { id: "journal" as const, label: "My Journal", icon: "📓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "thinkers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {THINKERS.map(t => (
                <button type="button" key={t.id} onClick={() => setSelectedThinker(t.id)}
                  style={{ width: "100%", background: selectedThinker === t.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedThinker === t.id ? PURPLE + "70" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedThinker === t.id ? PURPLE : TEXT, fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{t.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{t.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{thinker.era}</div>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 24, marginBottom: 4 }}>{thinker.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{thinker.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{thinker.bio}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 10 }}>IN THEIR OWN WORDS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>&ldquo;{thinker.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{thinker.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "views" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {VIEWS.map(v => (
                <button type="button" key={v.name} onClick={() => setSelectedView(v.name)}
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
        {activeTab === "journal" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>My Eschatology Journal</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>Record the eschatological view you hold, the thinker shaping you, and how your view changes your life. Saved privately in your browser.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>VIEW I HOLD (OR AM EXPLORING) *</label>
                <textarea value={escvForm.view} onChange={e => setEscvForm(f => ({ ...f, view: e.target.value }))}
                  placeholder="Which eschatological view (amillennial, premillennial, postmillennial, historic premil...) are you drawn to?" rows={3}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>THINKER SHAPING MY VIEW</label>
                <textarea value={escvForm.thinker} onChange={e => setEscvForm(f => ({ ...f, thinker: e.target.value }))}
                  placeholder="Which theologian or scholar is most influencing your eschatological thinking?" rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>IMPLICATION FOR HOW I LIVE NOW</label>
                <textarea value={escvForm.implication} onChange={e => setEscvForm(f => ({ ...f, implication: e.target.value }))}
                  placeholder="How does your eschatological view change your priorities or daily life?" rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveEscvEntry}
                style={{ background: escvSaved ? GREEN : PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {escvSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {escvEntries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 14, letterSpacing: 1 }}>SAVED ENTRIES ({escvEntries.length})</h3>
                {escvEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18, marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                      <button type="button" onClick={() => deleteEscvEntry(entry.id)}
                        style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                    </div>
                    {entry.view && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontWeight: 700, fontSize: 11 }}>VIEW: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.view}</span></div>}
                    {entry.thinker && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontWeight: 700, fontSize: 11 }}>THINKER: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.thinker}</span></div>}
                    {entry.implication && <div><span style={{ color: MUTED, fontWeight: 700, fontSize: 11 }}>IMPLICATION: </span><span style={{ color: TEXT, fontSize: 13 }}>{entry.implication}</span></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Video teachings on eschatology, the millennium, and the Christian hope from leading theologians and scholars.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "KRsuCQe7aVk", title: "What Happens After We Die? N.T. Wright on Resurrection", channel: "N.T. Wright Online", description: "Wright unpacks the biblical hope — not 'going to heaven' but the resurrection of the body and the renewal of all creation. Essential viewing for anyone rethinking Christian eschatology." },
                  { videoId: "iK0NjiBXKN4", title: "The Millennium: Four Views Explained", channel: "Ligonier Ministries", description: "A clear, fair overview of premillennialism, amillennialism, and postmillennialism — what each view teaches and the key texts each relies on." },
                  { videoId: "zDnSbLd9LFg", title: "Amillennialism: What It Is and Why It Matters", channel: "Sam Storms", description: "Sam Storms makes the case for amillennialism as the most consistent reading of Revelation 20 in context, addressing common objections from dispensational readers." },
                  { videoId: "bQFIuYOg7uo", title: "Surprised by Hope — A Summary", channel: "The Gospel Coalition", description: "A concise overview of N.T. Wright's landmark book on Christian eschatology, covering why the resurrection and new creation are the proper horizon of Christian hope." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
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
      </main>
      <Footer />
    </div>
  );
}
