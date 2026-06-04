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

type Tab = "timeline" | "rapture" | "millennium" | "keys" | "videos";

const TIMELINE_EVENTS = [
  {
    num: 1,
    title: "The Signs of the Times",
    refs: "Matt 24:6-8",
    desc: "Wars, famines, and earthquakes — Jesus calls these 'birth pains,' the beginning of the end but not the end itself. Nations rise against nations, disasters multiply, and false prophets appear. These signs serve as a wake-up call to every generation.",
    spectrum:
      "All major views agree these signs characterize the church age. Dispensationalists see an intensifying fulfillment in the 'last days' before the rapture. Amillennialists see them as describing the entire present age. Postmillennialists see them decreasing as the gospel triumphs. Preterists see them fulfilled in 70 AD. The birth-pain metaphor is shared across all camps.",
  },
  {
    num: 2,
    title: "The Great Tribulation",
    refs: "Dan 9:27; Rev 7:14; Matt 24:21",
    desc: "A period of unparalleled suffering and divine judgment. 'For then there will be great tribulation, such as has not been from the beginning of the world until now, no, and never will be' (Matt 24:21). Duration is disputed: 3.5 years (the second half of Daniel's 70th week) or the full 7-year period.",
    spectrum:
      "Dispensationalists: a future 7-year period after the rapture, tied to Daniel's 70th week, centered on Israel. Historic premillennialists: a future intense persecution of the church, roughly 3.5 years. Amillennialists: the entire church age of persecution, or uniquely the Roman-Jewish war of 66–70 AD. Postmillennialists: largely past or symbolic. The rapture's placement (pre/mid/post-trib) is defined relative to this period.",
  },
  {
    num: 3,
    title: "The Rapture (if applicable)",
    refs: "1 Thess 4:16-17",
    desc: "'For the Lord himself will descend from heaven with a cry of command... and the dead in Christ will rise first. Then we who are alive, who are left, will be caught up together with them in the clouds to meet the Lord in the air.' The word rapture comes from the Latin rapturo — a translation of the Greek harpazo, 'caught up.'",
    spectrum:
      "Pre-tribulation: the church is removed before the Tribulation (Darby, LaHaye, Walvoord). Mid-tribulation: removal at the 3.5-year midpoint. Post-tribulation: the rapture is simultaneous with the Second Coming — no separate event (Ladd, Wright). Pre-wrath: the church is raptured after the Tribulation but before the final Day of the Lord's wrath (Van Kampen, Rosenthal). Amillennialists and postmillennialists generally read 1 Thess 4 as describing the one Second Coming.",
  },
  {
    num: 4,
    title: "The Second Coming",
    refs: "Acts 1:11; Rev 19:11-16",
    desc: "'This Jesus, who was taken up from you into heaven, will come in the same way as you saw him go into heaven' (Acts 1:11). Revelation 19 pictures the returning Christ as the Word of God, King of kings, on a white horse, with the armies of heaven — a conquering King, not a suffering servant.",
    spectrum:
      "The one event held in common by all orthodox eschatological views. Every position affirms the literal, visible, bodily return of Jesus Christ. The disagreements are about what accompanies and follows this return — whether the millennium precedes or follows it, and whether the rapture is a separate preceding event. The bodily return is creedal (the Apostles' Creed, Nicene Creed).",
  },
  {
    num: 5,
    title: "The Battle of Armageddon",
    refs: "Rev 16:16; Rev 19",
    desc: "The armies of the world gathered at Har-Megiddo (the hill of Megiddo, in Israel's Jezreel Valley) for the final conflict. Revelation 19 describes Christ's return destroying the beast and the false prophet; the armies assembled against God are defeated not by earthly weapons but by the sword of Christ's mouth.",
    spectrum:
      "Dispensationalists: a literal future battle in the geographic Valley of Megiddo, with named nations (Russia, China, the beast's coalition). Symbolic/idealist readers: the imagery represents the ultimate confrontation between God and human rebellion throughout history, reaching a climax at the end of the age. Partial preterists may see a 70 AD fulfillment with a future final consummation. All agree a final defeat of evil precedes the eternal state.",
  },
  {
    num: 6,
    title: "The Millennium",
    refs: "Rev 20:1-6",
    desc: "An angel seizes the dragon — Satan — and binds him for one thousand years, during which the martyrs and those who had not worshiped the beast reign with Christ. After the thousand years, Satan is released for a short time. This passage in Revelation 20 is the sole biblical text with an explicit 1,000-year reign.",
    spectrum:
      "Premillennialists (historic and dispensational): Christ returns before a future literal 1,000-year reign on earth. Amillennialists (Augustine, Calvin, Luther, Sproul): the millennium is the present church age; Satan is bound in that the gospel goes to all nations; the binding is real but not total. Postmillennialists (Edwards, Warfield, Boettner): the millennium is a coming golden age of gospel triumph before Christ's return, already inaugurated and progressing.",
  },
  {
    num: 7,
    title: "The Great White Throne Judgment",
    refs: "Rev 20:11-15",
    desc: "'Then I saw a great white throne and him who was seated on it... And I saw the dead, great and small, standing before the throne, and books were opened... And the dead were judged by what was written in the books, according to what they had done.' The Book of Life is also opened. Anyone not found in the Book of Life is cast into the lake of fire.",
    spectrum:
      "All orthodox views agree on this event as the final judgment of all humanity. The primary disagreements are about timing: premillennialists place this after the millennium; amillennialists see it as simultaneous with the Second Coming and the general resurrection. Some premillennialists distinguish a prior judgment seat of Christ (for believers) from this final throne judgment. The reality of final accountability is shared across all positions.",
  },
  {
    num: 8,
    title: "The New Creation",
    refs: "Rev 21-22; 2 Pet 3:13",
    desc: "'Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away... Behold, the dwelling place of God is with man. He will dwell with them, and they will be his people, and God himself will be with them as their God.' No more death, mourning, crying, or pain. The New Jerusalem descends; the river of life flows; the tree of life stands for the healing of the nations.",
    spectrum:
      "The final destination is shared by all views: a renewed, embodied, material eternal existence in perfect communion with God — not a disembodied heaven but a new creation. Whether this is preceded by a millennium or follows immediately from Christ's return, all agree the eternal state is the goal of redemption. Romans 8:21 frames it as the liberation of all creation from bondage to decay. The end is not escape from creation but its restoration.",
  },
];

const RAPTURE_POSITIONS = [
  {
    id: "pretrib",
    name: "Pre-Tribulation Rapture",
    summary:
      "The church is removed from the earth before the 7-year Tribulation begins. Christ comes secretly for His saints (the rapture), then comes publicly with His saints at the Second Coming. The gap between these two events — the Tribulation — allows Daniel's 70th week to be fulfilled with Israel.",
    refs: ["1 Thess 4:16-17", "John 14:1-3", "2 Thess 2:6-7", "Rev 3:10"],
    detail:
      "Developed by John Nelson Darby in the 1830s through his study of Scripture and popularized through the Scofield Reference Bible (1909). The key texts are 1 Thessalonians 4:16-17 (the harpazo), John 14:1-3 (Christ prepares a place and comes to receive His own), and 2 Thessalonians 2:6-7 (the restrainer who is taken out of the way before the man of lawlessness is revealed). Pre-tribulationists argue the restrainer is the Holy Spirit indwelling the church — when the church is removed, the Spirit's restraining work through the church is removed, allowing the Antichrist to emerge. Revelation 3:10 ('I will keep you from the hour of trial') is read as a promise to keep the church out of the Tribulation entirely.",
    proponents: "John Nelson Darby, C.I. Scofield, John Walvoord, Charles Ryrie, Tim LaHaye (Left Behind series), J. Dwight Pentecost",
    strengths:
      "Maintains a distinction between the church age and the Tribulation as a time of Israel's purification; preserves the imminence of Christ's return (could happen at any moment); consistent with the dispensational system's Israel-church distinction; makes sense of why the church is not mentioned in Revelation 6-18.",
    weaknesses:
      "The rapture as a distinct, secret event is never explicitly described in the New Testament; the two-stage return is inferred rather than stated; Darby's innovation makes it historically suspect (no clear pre-trib teaching before 1830); the restrainer identity is speculative; 1 Thess 4 reads naturally as the one public Second Coming.",
  },
  {
    id: "midtrib",
    name: "Mid-Tribulation Rapture",
    summary:
      "The church is raptured at the midpoint of the 7-year Tribulation — after 3.5 years, at the 'last trumpet' of 1 Corinthians 15:52, identified with the 7th trumpet of Revelation 11. The church goes through the first half but is spared the worst — the 'great tribulation' of the second half.",
    refs: ["1 Cor 15:51-52", "Rev 11:15", "Dan 9:27", "Matt 24:21"],
    detail:
      "Mid-tribulationists argue that the 'last trumpet' of 1 Corinthians 15:52 corresponds to the 7th trumpet judgment of Revelation 11:15, which sounds at the midpoint of the Tribulation. At this point, the rapture occurs, and the church is spared the worst of Daniel's 70th week — the 'great tribulation' Jesus describes in Matthew 24:21. The midpoint is also when the Antichrist breaks the covenant with Israel (Daniel 9:27) and sets up the abomination of desolation. The church participates in the first half's tribulations (consistent with NT teaching on persecution) but is removed before the second half's divine wrath.",
    proponents: "Norman Harrison, Gleason Archer, Harold Ockenga",
    strengths:
      "Explains the 'last trumpet' language; allows the church to experience tribulation (consistent with NT) while being spared divine wrath; connects the rapture to a specific textual marker (the 7th trumpet).",
    weaknesses:
      "The identification of 1 Cor 15's 'last trumpet' with the 7th trumpet of Revelation is not self-evident; has not gained broad acceptance in any major tradition; shares the problems of pre-trib (two-stage return) without its systematization; relatively few advocates in church history.",
  },
  {
    id: "posttrib",
    name: "Post-Tribulation Rapture",
    summary:
      "There is no separate rapture event. The 'catching up' of 1 Thessalonians 4 is simply the meeting of the church with Christ as He returns — a triumphal procession back to earth. The church goes through the Tribulation, sustained and protected by God, and meets Christ in the air as He descends to establish His kingdom.",
    refs: ["Matt 24:29-31", "1 Thess 4:16-17", "Rev 20:4", "2 Thess 1:6-10"],
    detail:
      "Post-tribulationists argue that 1 Thessalonians 4:16-17 and Matthew 24:30-31 describe the same event — the one visible Second Coming at the end of the age. The 'meeting' (apantesis) language of 1 Thess 4:17 was a Greek civic custom in which citizens would go out to meet a returning dignitary and escort him back into the city — the believers rise to meet Christ and return with Him to earth, not to stay in the air. Matthew 24:29-31 places the gathering of the elect after the tribulation. The church is not promised escape from tribulation but preservation through it (John 17:15). Historically the dominant view before Darby.",
    proponents: "George Eldon Ladd, N.T. Wright, Alexander Reese, Robert Gundry, Douglas Moo",
    strengths:
      "The simpler reading with no invented separate event; consistent with NT teaching that the church will face tribulation; historically dominant before the 19th century; the apantesis civic-procession reading is linguistically strong; takes Matt 24:29-31 at face value.",
    weaknesses:
      "Must explain why 1 Thess 4 uses language that sounds like a separate event; loses the 'imminence' of an any-moment return; the wrath of God during the Tribulation seems to fall on the church in this view; must explain Rev 3:10's 'kept from the hour of trial.'",
  },
  {
    id: "prewrath",
    name: "Pre-Wrath Rapture",
    summary:
      "A fourth view gaining traction: the rapture occurs after the Great Tribulation (which is Satan's/Antichrist's wrath against the church) but before the Day of the Lord's wrath (which is God's direct judgment on the ungodly). The church endures persecution but is removed before divine retribution begins.",
    refs: ["1 Thess 5:9", "Matt 24:21-22", "Rev 6:17", "2 Thess 2:1-3"],
    detail:
      "Developed by Robert Van Kampen and popularized by Marvin Rosenthal in 'The Pre-Wrath Rapture of the Church' (1990). The key distinction is between the wrath of Satan (the Great Tribulation) and the wrath of God (the Day of the Lord). 1 Thessalonians 5:9 says God has not appointed believers to wrath — but this refers to divine wrath, not satanic persecution. The rapture occurs at the breaking of the 6th seal (Rev 6:12-17), after the Antichrist's tribulation but before the trumpet and bowl judgments (God's direct wrath). This places the rapture in the second half of the 70th week but before its very end.",
    proponents: "Robert Van Kampen, Marvin Rosenthal, Alan Kurschner",
    strengths:
      "Distinguishes clearly between tribulation (Satan's wrath) and divine wrath; takes seriously the NT promise that the church is not appointed to wrath; allows the church to be present for the Tribulation while being raptured before the Day of the Lord; textually anchored in Rev 6 rather than inferred.",
    weaknesses:
      "Very recent origin (1990s); the specific placement requires a detailed chart of Revelation's chronology; the 'day of the Lord' boundary is debated; relatively few scholars have engaged it; may share some of mid-trib's problems.",
  },
];

const MILLENNIUM_CARDS = [
  {
    name: "Historic Premillennialism",
    figures: "George Eldon Ladd, Wayne Grudem, Craig Blomberg, Irenaeus, Justin Martyr",
    refs: "Rev 20:1-6; Zech 14; Isa 65:20-25",
    summary:
      "Christ returns before (pre) a literal, future 1,000-year reign on earth. The church goes through the Tribulation without a prior rapture. At Christ's return, believers are resurrected and reign with Him during the millennium. After the thousand years, Satan is released briefly, final rebellion is crushed, the general resurrection and Great White Throne Judgment follow, and the eternal state begins. The earliest position in the church.",
    strength:
      "The most natural sequential reading of Revelation 19-20; strong support from second-century fathers (Irenaeus, Justin Martyr, Papias); takes the literal millennium seriously without Darby's dispensational innovations; allows for the church's participation in the age to come.",
    weakness:
      "Requires distinguishing the resurrection of the righteous (at Christ's return) from the general resurrection (after the millennium); the Israel-church relationship remains less developed than in dispensationalism; the millennium's purpose is sometimes unclear.",
    color: GREEN,
  },
  {
    name: "Dispensational Premillennialism",
    figures: "John Walvoord, Charles Ryrie, Tim LaHaye, J. Dwight Pentecost, C.I. Scofield",
    refs: "Dan 9:24-27; 1 Thess 4:16-17; Rev 6-20; Ezek 40-48",
    summary:
      "Like Historic Premillennialism in affirming a future literal millennium, but adds three distinguishing features: (1) a pre-tribulation rapture removes the church before a 7-year Tribulation; (2) Israel and the Church are permanently distinct peoples of God with separate destinies; (3) all OT prophecy is fulfilled literally, including a restored Davidic kingdom, rebuilt temple, and Levitical sacrificial system in the millennium. Dominant view in American evangelical culture since the Scofield Bible (1909) and popularized by the Left Behind series.",
    strength:
      "Rigorous internal consistency; takes OT prophecy with maximal literalism; clearly distinguishes the church age from the coming kingdom; answers where the church is in Rev 6-18 (already raptured); enormous popular influence and accessibility through prophecy conferences and media.",
    weakness:
      "The rapture as a separate secret event is not explicitly described anywhere in the NT; the Israel-Church distinction is challenged by Ephesians 2-3, Galatians 3, and Romans 9-11; the system originated in the 1830s with Darby — no clear pre-trib dispensationalism before then; millennial temple and sacrifices raise theological problems (why resume the old covenant?).",
    color: PURPLE,
  },
  {
    name: "Amillennialism",
    figures: "Augustine, John Calvin, Martin Luther, Anthony Hoekema, Kim Riddlebarger, R.C. Sproul, Sinclair Ferguson",
    refs: "Rev 20:1-6 (symbolic); Rom 11:25-27; Matt 12:28-29; Luke 10:18",
    summary:
      "The 'millennium' of Revelation 20 is not a future literal 1,000-year period but the present church age — the time between Christ's first and second comings. Satan is already bound in the sense that he cannot prevent the gospel from going to all nations (Matt 12:29). The martyrs reign with Christ now in heaven (the intermediate state). Christ will return once at the end of the age, the general resurrection and judgment will occur, and the eternal state will begin immediately. The dominant view in Reformed and Lutheran traditions; Augustine's position.",
    strength:
      "Consistency with the NT's typological fulfillment of OT prophecy in Christ and the church; avoids a two-stage return and a two-stage resurrection; the current church age genuinely is the age of gospel expansion to all nations; the binding of Satan is consistent with Jesus's teaching in the Gospels; the simplest eschatological scheme.",
    weakness:
      "The binding of Satan (Rev 20:2 — 'that he might not deceive the nations') seems difficult to reconcile with Satan's evident activity (1 Pet 5:8); Revelation 20 reads naturally as sequential after Revelation 19; requires a symbolic reading of what appears to be sequential narrative; has difficulty fully accounting for Israel's distinct role in Romans 11.",
    color: "#3B82F6",
  },
  {
    name: "Postmillennialism",
    figures: "Jonathan Edwards, B.B. Warfield, Loraine Boettner, Greg Bahnsen, Doug Wilson",
    refs: "Isa 2:2-4; Ps 110:1-2; Matt 13:31-33; Rom 11:25-27",
    summary:
      "Christ will return after (post) the millennium — a golden age of gospel triumph in which Christian civilization expands, nations are discipled, and the knowledge of the Lord covers the earth as waters cover the sea. The millennium is not a separate dispensational period but the fulfillment of the Great Commission's global reach, achieved through the Spirit-empowered preaching of the gospel. Popular in Puritan and 19th-century evangelical theology; diminished by WWI and WWII; resurging in Reformed and Reconstructionist circles today.",
    strength:
      "Takes the Great Commission's scope with ultimate seriousness ('all nations'); grounds optimism in the power of the gospel rather than mere human progress; the mustard seed and leaven parables (Matt 13) suggest a growing, transformative kingdom; Jonathan Edwards held this view during the First Great Awakening; consistent with Psalm 2 and 110.",
    weakness:
      "The 20th century's global wars and genocides seem to contradict a trajectory of Christianization; NT texts about apostasy, persecution, and lawlessness increasing before Christ's return (2 Thess 2, Matt 24) are difficult to reconcile; the view depends heavily on a Christianized-civilization reading of the kingdom that many find culturally parochial; largely out of favor in mainstream evangelical scholarship.",
    color: "#F59E0B",
  },
];

const KEYS_ITEMS = [
  {
    id: "genre",
    title: "Genre Matters",
    content:
      "Apocalyptic literature — the genre of Daniel, Zechariah, and Revelation — communicates through symbolic imagery: beasts, dragons, numbers, colors, and cosmic upheaval. This is not the 'newspaper hermeneutic' (reading Revelation like a CNN ticker). Apocalyptic literature was a recognized first-century genre with established conventions: symbolic beasts represented empires (Dan 7), numbers carried symbolic weight (7 = completion, 666 = parody of 777), and cosmic language described historical and spiritual realities. Reading Revelation 'literally' without understanding the genre is like reading Psalm 18 ('the LORD rode on a cherub') and concluding God owns livestock. The interpretive question is not 'literal or symbolic' but 'what does the symbol mean in its first-century apocalyptic context?' This does not mean Revelation's events are not real — it means the symbols point to real events that may be described in symbolic, not photographic, terms.",
  },
  {
    id: "israel",
    title: "The Israel/Church Question",
    content:
      "Nearly every major eschatological disagreement traces back to one question: are the Old Testament promises made to ethnic Israel transferred to the Church (which becomes the 'new Israel'), or are they still for ethnic Israel to be fulfilled in a future national restoration? Dispensationalists insist Israel and the Church are permanently distinct — God has one plan for Israel (the earthly, millennial, Davidic kingdom) and another for the Church (heavenly). Covenant theologians (amillennialists, postmillennialists) argue that Christ is the true Israel, the Church is the continuation of the one people of God, and OT promises are fulfilled typologically in Christ and His body. Romans 9-11 is the central battlefield: does 'all Israel will be saved' (11:26) mean ethnic Israel or the full elect people of God? Your answer here will determine your millennium view, your rapture view, and your reading of virtually every OT prophecy.",
  },
  {
    id: "schools",
    title: "Preterism, Historicism, Futurism, Idealism",
    content:
      "There are four classical schools for interpreting the book of Revelation: (1) Preterism — most or all of Revelation was fulfilled in the first century, primarily in the fall of Jerusalem (70 AD) and/or the fall of Rome. Full preterism (all fulfilled) is considered heretical by most; partial preterism (most fulfilled, but a final consummation remains) is held by respected scholars like R.C. Sproul and N.T. Wright. (2) Historicism — Revelation maps onto the entire sweep of church history from the first century to the Second Coming; popular at the Reformation (the Pope = Antichrist); now largely abandoned. (3) Futurism — most of Revelation (especially chapters 4-22) describes events still future to us; the dominant view in American evangelicalism, both dispensational and non-dispensational. (4) Idealism — Revelation is a timeless symbolic portrayal of the cosmic battle between good and evil, without reference to specific historical events past or future. Most evangelical interpreters are partial preterists, futurists, or some combination.",
  },
  {
    id: "dates",
    title: "Avoiding Date-Setting",
    content:
      "'But concerning that day and hour no one knows, not even the angels of heaven, nor the Son, but the Father only' (Matt 24:36). The history of date-setting is an unbroken chain of failures. The Montanists (2nd century) set dates for the New Jerusalem's descent at Pepuza in Phrygia. William Miller predicted Christ's return in 1844 — the 'Great Disappointment.' Charles Taze Russell (Jehovah's Witnesses) predicted 1914, then 1925. Hal Lindsey implied 1988 (40 years after Israel's founding). Harold Camping predicted September 6, 1994, then May 21, 2011 — and spent $100 million in advertising. Every prophetic 'generation' calculation based on Israel's founding (1948 + 40 years, or + 70 years) has proven wrong. The warnings: date-setters discredit the gospel, set up believers for disillusionment, and violate the plain teaching of Jesus. The proper response to eschatological uncertainty is not paralysis but watchfulness — 'be ready, for the Son of Man is coming at an hour you do not expect' (Matt 24:44).",
  },
  {
    id: "ethics",
    title: "Eschatology and Ethics",
    content:
      "What you believe about the future shapes how you live now. Jürgen Moltmann's 'theology of hope' argues that Christian ethics is driven by the eschatological horizon — the promised future pulls us forward and motivates present action. But different eschatologies produce different ethics: a strong pre-trib, pre-mil view that 'the world is going to burn' can produce disengagement from cultural renewal, environmental stewardship, and social transformation — if God is destroying this world anyway, why polish the brass on the Titanic? By contrast, postmillennialism and amillennialism (especially in its Kuyperian form) motivate engagement: Christ is Lord of all domains, the kingdom is already advancing, and Christians are called to take every thought captive (2 Cor 10:5) and disciple nations (Matt 28:19). N.T. Wright argues that a resurrection-shaped eschatology demands embodied, creation-caring, justice-pursuing ethics — because God is not abandoning His creation but renewing it. Your view of the end shapes your view of the present.",
  },
  {
    id: "humility",
    title: "Holding Views with Humility",
    content:
      "Every major eschatological position has been held by serious, Bible-believing, Christ-honoring scholars. Augustine held amillennialism. Jonathan Edwards held postmillennialism. George Ladd, one of the 20th century's finest NT scholars, held historic premillennialism. John Walvoord held dispensational premillennialism. These are not peripheral figures. Eschatological humility means distinguishing between primary and secondary doctrines: the physical, bodily, visible return of Jesus Christ is primary — creedal, non-negotiable, confessed in every major Christian tradition. The timing of the rapture, the nature of the millennium, the sequence of end-times events — these are secondary. Christians who differ on these points have worshiped together, preached together, and died as martyrs together for two thousand years. Hold your eschatological system with conviction; hold it with an open hand. Study deeply. Disagree charitably. And let the shared hope — 'Maranatha: Come, Lord Jesus' (Rev 22:20) — unite what charts and timelines divide.",
  },
];

export default function EndTimesGuidePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_end-times-guide_tab", "timeline");
  const [selectedRapture, setSelectedRapture] = usePersistedState<string>("vine_end-times-guide_selected_rapture", "pretrib");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: "timeline", label: "Timeline of the End" },
    { id: "rapture", label: "The Rapture Debate" },
    { id: "millennium", label: "Millennium Views" },
    { id: "keys", label: "Keys for Studying Prophecy" },
    { id: "videos", label: "🎬 Videos" },
  ];

  const activeRapture = RAPTURE_POSITIONS.find((p) => p.id === selectedRapture) ?? RAPTURE_POSITIONS[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h1 style={{ fontSize: 34, fontWeight: 900, margin: "0 0 10px", color: TEXT }}>
            End Times Guide
          </h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 620, margin: "0 auto", lineHeight: 1.65 }}>
            A clear-headed survey of eschatology — the timeline of the end, the rapture debate, millennium views, and principles for studying prophecy. Hold your system with conviction; hold it with humility.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {tabs.map((t) => (
            <button type="button"
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                flex: 1,
                minWidth: 120,
                padding: "9px 14px",
                borderRadius: 9,
                border: "none",
                background: tab === t.id ? GREEN : "transparent",
                color: tab === t.id ? BG : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "background 0.15s, color 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Timeline */}
        {tab === "timeline" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.6 }}>
              Eight major events in the biblical sequence of the end times — with key Scripture, description, and the spectrum of how different traditions understand each event.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {TIMELINE_EVENTS.map((ev, i) => (
                <div key={ev.num} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  {/* Spine */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 32 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: `${GREEN}18`, border: `2px solid ${GREEN}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: GREEN, fontWeight: 900, fontSize: 13, flexShrink: 0,
                    }}>
                      {ev.num}
                    </div>
                    {i < TIMELINE_EVENTS.length - 1 && (
                      <div style={{ width: 2, flexGrow: 1, background: BORDER, minHeight: 24, marginTop: 4 }} />
                    )}
                  </div>

                  {/* Card */}
                  <div style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    padding: "18px 22px",
                    flex: 1,
                    marginBottom: i < TIMELINE_EVENTS.length - 1 ? 16 : 0,
                  }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 16 }}>{ev.title}</span>
                      <span style={{ color: GREEN, fontSize: 12, fontWeight: 700 }}>{ev.refs}</span>
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: "0 0 12px" }}>{ev.desc}</p>
                    <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 8, padding: "10px 14px" }}>
                      <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 5, letterSpacing: "0.05em" }}>SPECTRUM OF VIEWS</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{ev.spectrum}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Rapture Debate */}
        {tab === "rapture" && (
          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 24, alignItems: "start" }}>
            {/* Left list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6, position: "sticky", top: 24 }}>
              <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", marginBottom: 6 }}>POSITIONS</div>
              {RAPTURE_POSITIONS.map((p) => (
                <button type="button"
                  key={p.id}
                  onClick={() => setSelectedRapture(p.id)}
                  style={{
                    background: selectedRapture === p.id ? `${GREEN}12` : CARD,
                    border: `1px solid ${selectedRapture === p.id ? GREEN + "60" : BORDER}`,
                    borderRadius: 10,
                    padding: "12px 14px",
                    cursor: "pointer",
                    textAlign: "left",
                    color: selectedRapture === p.id ? TEXT : MUTED,
                    fontWeight: selectedRapture === p.id ? 700 : 500,
                    fontSize: 13,
                    lineHeight: 1.4,
                    transition: "background 0.12s, border-color 0.12s",
                  }}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Right detail */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}25`, borderRadius: 16, padding: "28px 30px" }}>
              <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, margin: "0 0 6px" }}>{activeRapture.name}</h2>

              {/* Key refs */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                {activeRapture.refs.map((r) => (
                  <span key={r} style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 6, padding: "3px 9px", color: GREEN, fontSize: 12, fontWeight: 700 }}>
                    {r}
                  </span>
                ))}
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{activeRapture.summary}</p>

              <div style={{ background: BG, borderRadius: 10, padding: "14px 18px", marginBottom: 18, border: `1px solid ${BORDER}` }}>
                <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 8, letterSpacing: "0.06em" }}>IN DEPTH</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{activeRapture.detail}</p>
              </div>

              <div style={{ color: MUTED, fontSize: 12, marginBottom: 18 }}>
                <span style={{ color: PURPLE, fontWeight: 700 }}>Proponents: </span>
                {activeRapture.proponents}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 11, marginBottom: 8, letterSpacing: "0.06em" }}>STRENGTHS</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{activeRapture.strengths}</p>
                </div>
                <div style={{ background: "#EF444408", border: "1px solid #EF444428", borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ color: "#EF4444", fontWeight: 800, fontSize: 11, marginBottom: 8, letterSpacing: "0.06em" }}>WEAKNESSES</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{activeRapture.weaknesses}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Millennium Views */}
        {tab === "millennium" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.6 }}>
              Four major positions on the millennium — the 1,000-year reign of Revelation 20. All four have been held by serious scholars throughout church history.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 18 }}>
              {MILLENNIUM_CARDS.map((card) => (
                <div
                  key={card.name}
                  style={{
                    background: CARD,
                    border: `1px solid ${card.color}30`,
                    borderRadius: 16,
                    padding: "24px 26px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  <div>
                    <h3 style={{ color: card.color, fontWeight: 900, fontSize: 17, margin: "0 0 6px" }}>{card.name}</h3>
                    <div style={{ color: MUTED, fontSize: 12, marginBottom: 10 }}>
                      <span style={{ fontWeight: 700 }}>Key figures: </span>{card.figures}
                    </div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {card.refs.split(";").map((r) => r.trim()).map((r) => (
                        <span key={r} style={{ background: `${card.color}12`, border: `1px solid ${card.color}25`, borderRadius: 5, padding: "2px 8px", color: card.color, fontSize: 11, fontWeight: 700 }}>
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{card.summary}</p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ background: `${card.color}08`, border: `1px solid ${card.color}20`, borderRadius: 9, padding: "12px 14px" }}>
                      <div style={{ color: card.color, fontWeight: 800, fontSize: 10, marginBottom: 6, letterSpacing: "0.07em" }}>MAJOR STRENGTH</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{card.strength}</p>
                    </div>
                    <div style={{ background: "#EF444406", border: "1px solid #EF444420", borderRadius: 9, padding: "12px 14px" }}>
                      <div style={{ color: "#EF4444", fontWeight: 800, fontSize: 10, marginBottom: 6, letterSpacing: "0.07em" }}>MAJOR WEAKNESS</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{card.weakness}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Keys */}
        {tab === "keys" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.6 }}>
              {KEYS_ITEMS.length} foundational principles for approaching biblical prophecy with intelligence, humility, and faithfulness.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {KEYS_ITEMS.map((item, i) => (
                <div
                  key={item.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${expanded[item.id] ? GREEN + "40" : BORDER}`,
                    borderRadius: 12,
                    overflow: "hidden",
                    transition: "border-color 0.15s",
                  }}
                >
                  <button type="button"
                    onClick={() => toggleExpanded(item.id)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      padding: "18px 22px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{
                        width: 30, height: 30, borderRadius: 8,
                        background: `${GREEN}15`, border: `1px solid ${GREEN}30`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: GREEN, fontWeight: 900, fontSize: 13, flexShrink: 0,
                      }}>
                        {i + 1}
                      </div>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 15, textAlign: "left" }}>{item.title}</span>
                    </div>
                    <span style={{ color: expanded[item.id] ? GREEN : MUTED, fontSize: 18, fontWeight: 300, flexShrink: 0, lineHeight: 1 }}>
                      {expanded[item.id] ? "−" : "+"}
                    </span>
                  </button>

                  {expanded[item.id] && (
                    <div style={{ padding: "0 22px 22px 66px", borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "W75bzrvJtLs", title: "An Evening of Eschatology", channel: "John Piper, Sam Storms, Doug Wilson & James Hamilton", description: "A landmark roundtable where four respected scholars representing different millennial views discuss end-times theology with charity and rigor." },
                  { videoId: "dILQHlaqINg", title: "The Rapture: The Last Days According to Jesus", channel: "R.C. Sproul / Ligonier Ministries", description: "R.C. Sproul examines the rapture debate — what 1 Thessalonians 4 actually teaches and how Christians disagree about the manner and timing of Christ's return." },
                  { videoId: "Ejd4ZAnXmMM", title: "The Millennium: The Last Days According to Jesus", channel: "R.C. Sproul / Ligonier Ministries", description: "R.C. Sproul surveys the four main views of the millennium in Revelation 20 — premillennialism, amillennialism, postmillennialism — with their strengths and weaknesses." },
                  { videoId: "n22MRa0P6_I", title: "Crisis in Eschatology: The Last Days According to Jesus", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul examines the study of the last days using Jesus's own words in the Olivet Discourse — addressing what Jesus meant and when he expected fulfillment." },
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
      </main>
      <Footer />
    </div>
  );
}
