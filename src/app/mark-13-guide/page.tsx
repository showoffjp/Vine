"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verses", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  {
    videoId: "g_igCcWAMAM",
    title: "The Olivet Discourse Explained - Mark 13",
  },
  {
    videoId: "5W6m5Lk2bRg",
    title: "The Destruction of the Temple in AD 70",
  },
  {
    videoId: "0qjpY1Adt7E",
    title: "The Coming of the Son of Man",
  },
  {
    videoId: "qbjMA4y3kVE",
    title: "Stay Awake - Watchfulness and the Return of Christ",
  },
];

const THEMES = [
  {
    color: GOLD,
    title: "The Destruction of the Temple (AD 70)",
    body:
      "Mark 13 opens with a stunning prediction: not one stone of the magnificent Jerusalem temple would be left upon another. Within a generation, in AD 70, the Roman legions under Titus razed the temple to the ground, exactly as Jesus foretold. This historical catastrophe is the near horizon of the discourse, the event the disciples are warned to flee from. Much of the chapter speaks directly into that crisis - the false messiahs, the desolating sacrilege, the urgent command to flee to the mountains - and it functions as a sober reminder that Jesus is the true temple where God now dwells with his people.",
  },
  {
    color: PURPLE,
    title: "Eschatology and the Second Coming",
    body:
      "Beyond the fall of Jerusalem, the discourse stretches toward the final horizon: the visible, glorious return of the Son of Man in the clouds. Jesus weaves together two events that Old Testament prophecy often telescoped together - a nearer judgment and a final consummation. The cosmic imagery of darkened sun, falling stars, and shaken powers signals that history is moving toward a definite end. The gathering of the elect from the four winds is the great hope that anchors every warning in the chapter, the promise that the Son of Man will not return empty-handed but will collect his people.",
  },
  {
    color: GREEN,
    title: "Faithful Endurance Under Persecution",
    body:
      "Sandwiched between the signs and the cosmic climax is a pastoral heart: the disciples will be handed over to councils, beaten in synagogues, and dragged before governors and kings. Jesus does not promise escape from suffering but presence within it, assuring them the Holy Spirit will supply the words to speak. The gospel must first be proclaimed to all nations, and the one who endures to the end will be saved. Endurance, not enthusiasm, is the mark of true discipleship in this chapter, a steady faithfulness that outlasts hatred, betrayal, and the temptation to despair.",
  },
  {
    color: TEAL,
    title: "The Unknown Hour",
    body:
      "Twice Jesus insists that the precise timing is hidden - no one knows the day or the hour, not the angels, not even the Son, but only the Father. This is a striking statement, a deliberate veil drawn over the calendar of the end. It rebukes every attempt to calculate dates and decode timetables, redirecting attention away from speculation and toward readiness. The point is not to know when, but to be found faithful whenever. The unknown hour is not a gap in revelation to be filled by clever prediction but a permanent feature of discipleship designed to keep the heart awake.",
  },
  {
    color: ROSE,
    title: "Watchfulness",
    body:
      "The discourse ends not with a chart but with a command repeated for emphasis: watch, stay awake, be on guard. The parable of the man going on a journey, who leaves his servants in charge and assigns each his work, frames the whole Christian life as the interval between the master's departure and his sudden return. Because the hour is unknown, the posture must be constant alertness. What Jesus says to the four disciples he says to all: stay awake. Watchfulness is not anxious scanning of the headlines but a settled, working faithfulness that would not be ashamed to be caught at its post.",
  },
];

const VERSES = [
  {
    ref: "Mark 13:1-2",
    color: GOLD,
    title: "Not One Stone Left Upon Another",
    body:
      "As Jesus leaves the temple, a disciple marvels at the massive stones and magnificent buildings. Herod&rsquo;s temple was one of the wonders of the ancient world, its foundation stones enormous, its facade gleaming with gold and white marble. Jesus replies with a shattering prophecy: do you see these great buildings? Not one stone will be left upon another that will not be thrown down. The very heart of Israel&rsquo;s worship, the symbol of national identity and divine presence, is destined for total demolition &mdash; a word fulfilled with terrible precision in AD 70.",
  },
  {
    ref: "Mark 13:3-4",
    color: PURPLE,
    title: "The Question on the Mount of Olives",
    body:
      "Sitting on the Mount of Olives opposite the temple, Peter, James, John, and Andrew ask privately: when will these things be, and what will be the sign that they are all about to be accomplished? Their question fuses two horizons that they cannot yet distinguish &mdash; the fall of the temple and the end of the age. The Mount of Olives is a charged location, the place from which Zechariah said the LORD would come to judge and reign. Jesus&rsquo; answer that follows does not give a tidy timetable but a discipleship for the whole interval until he returns.",
  },
  {
    ref: "Mark 13:5-8",
    color: GREEN,
    title: "The Beginning of the Birth Pains",
    body:
      "Jesus begins not with signs to chase but with a warning: see that no one leads you astray. Many will come in his name claiming to be the Christ and will deceive many. There will be wars and rumors of wars, nation rising against nation, earthquakes and famines in various places. Yet he insists the end is not yet &mdash; these are but the beginning of the birth pains. The image is crucial: such convulsions are not the death of the world but the labor that precedes new birth, painful, intensifying, and pointing forward to a delivery rather than a destruction.",
  },
  {
    ref: "Mark 13:9-13",
    color: TEAL,
    title: "Handed Over, Yet the Gospel Proclaimed",
    body:
      "The disciples themselves will be on trial &mdash; delivered to councils, beaten in synagogues, made to stand before governors and kings for Jesus&rsquo; sake, to bear witness. And the gospel must first be proclaimed to all nations. When they are arrested, they are not to be anxious about what to say, for the Holy Spirit will speak through them in that hour. Families will fracture, brother betraying brother, and they will be hated by all for his name&rsquo;s sake. The promise that holds it together is stark and bright: the one who endures to the end will be saved.",
  },
  {
    ref: "Mark 13:14-23",
    color: ROSE,
    title: "The Abomination of Desolation",
    body:
      "When they see the abomination of desolation standing where it ought not to be &mdash; with the parenthetical &ldquo;let the reader understand&rdquo; pointing back to Daniel &mdash; those in Judea must flee to the mountains without delay, not even returning home for a cloak. The days will bring tribulation such as has not been from the beginning of creation, so severe that unless the Lord had cut short those days, no human being would be saved. But for the sake of the elect he shortened them. False christs and false prophets will arise performing signs to lead astray, if possible, even the elect. Jesus&rsquo; refrain is be on guard; I have told you all things beforehand.",
  },
  {
    ref: "Mark 13:24-27",
    color: GOLD,
    title: "The Coming of the Son of Man",
    body:
      "After that tribulation, the sun will be darkened, the moon will not give its light, the stars will fall from heaven, and the powers in the heavens will be shaken. Then they will see the Son of Man coming in clouds with great power and glory &mdash; the unmistakable fulfillment of Daniel 7, the human figure who receives an everlasting kingdom. He will send out the angels and gather his elect from the four winds, from the ends of the earth to the ends of heaven. This is the climax of all the warnings: not annihilation but ingathering, the great reunion of the redeemed around their returning Lord.",
  },
  {
    ref: "Mark 13:28-31",
    color: PURPLE,
    title: "The Lesson of the Fig Tree",
    body:
      "From the fig tree learn its lesson: when its branch becomes tender and puts out leaves, you know summer is near. So also, when you see these things taking place, you know that he is near, at the very gates. Then comes one of the most debated sentences in the Gospels: truly, this generation will not pass away until all these things take place. Jesus seals it with absolute authority &mdash; heaven and earth will pass away, but my words will not pass away. The signs are readable; the timing of the temple&rsquo;s fall is near; and the word of the Son outlasts the cosmos itself.",
  },
  {
    ref: "Mark 13:32-37",
    color: TEAL,
    title: "No One Knows the Hour - Stay Awake",
    body:
      "Concerning that day or that hour no one knows, not even the angels in heaven, nor the Son, but only the Father. Therefore be on guard, keep awake, for you do not know when the time will come. It is like a man going on a journey who leaves home, puts his servants in charge, each with his work, and commands the doorkeeper to stay awake. So watch, for you do not know when the master of the house will come &mdash; in the evening, at midnight, at cockcrow, or in the morning &mdash; lest he come suddenly and find you asleep. And what he says to the four, he says to all: stay awake.",
  },
];

const REFLECTION = [
  "Where am I tempted to place my security in something visible and impressive - like the disciples marveling at the temple stones - that Jesus would call me to hold loosely?",
  "How do I respond to wars, disasters, and rumors of catastrophe? Do they shake my faith, or do I hear them as birth pains pointing to a coming deliverance?",
  "When have I needed the Holy Spirit to supply words I did not have? How does the promise of Mark 13:11 reshape my fear of bearing witness?",
  "Endurance to the end is the test Jesus names. What practices keep me faithful over the long haul rather than merely enthusiastic for a season?",
  "Jesus deliberately conceals the day and hour. How does releasing the need to know when free me to focus on being ready whenever?",
  "If the master returned today, in what corner of my life would I be ashamed to be found asleep? What would staying awake at my post look like this week?",
];

type MarkTab = "overview" | "themes" | "verses" | "application";

export default function Mark13GuidePage() {
  const [activeTab, setActiveTab] = useState<MarkTab>("overview");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: BG,
        minHeight: "100vh",
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main id="main-content" style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 60px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "inline-block",
              background: `${GOLD}20`,
              border: `1px solid ${GOLD}40`,
              borderRadius: 20,
              padding: "4px 14px",
              fontSize: 12,
              color: GOLD,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: 12,
            }}
          >
            Gospel of Mark - Chapter 13
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>
            The Olivet Discourse
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>
            Jesus on the Mount of Olives foretells the fall of the temple, the signs of the end, the
            coming of the Son of Man, and gives his great command to every disciple in every age:
            stay awake and watch.
          </p>
          <p
            style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: "14px 0 0", maxWidth: 640 }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;Heaven and earth will pass away, but my words will not pass away.&rdquo; &mdash; Mark 13:31",
            }}
          />
        </div>

        {/* Sticky tab nav */}
        <div
          style={{
            position: "sticky",
            top: "var(--header-height, 80px)",
            zIndex: 10,
            background: BG,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 32,
            padding: "10px 0",
          }}
        >
          {TABS.map((t) => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id as MarkTab)}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? GOLD : BORDER}`,
                background: activeTab === t.id ? `${GOLD}20` : "transparent",
                color: activeTab === t.id ? GOLD : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[
                  ["Book", "Mark"],
                  ["Chapter", "13"],
                  ["Setting", "Mount of Olives"],
                  ["Genre", "Apocalyptic Discourse"],
                  ["Key Theme", "Watch and Endure"],
                  ["Key Verse", "Mark 13:31"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>The Last Great Sermon</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Mark 13 is the longest continuous teaching of Jesus in Mark&rsquo;s Gospel and the last before the passion narrative begins. Often called the Olivet Discourse because it is delivered on the Mount of Olives, it answers a question sparked by a disciple&rsquo;s admiration of the temple&rsquo;s massive stones. Jesus turns that admiration into prophecy, declaring that the whole structure will be thrown down, and the disciples press him for the timing and the sign. What follows is not a calendar of the end but a manual for faithful living between his departure and his return.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter holds together two horizons that the disciples could not yet tell apart: the destruction of Jerusalem within their own generation, and the final coming of the Son of Man at the end of the age. Old Testament prophecy often telescoped near and far judgments in this way, viewing distant peaks as if they stood side by side. Jesus moves between the temple&rsquo;s fall in AD 70 and the cosmic consummation, sometimes in the same breath, because the first is a foreshadowing and guarantee of the second. Learning to read these layers is the central interpretive challenge of the chapter.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "What is remarkable is how pastoral the discourse remains even at its most apocalyptic. Jesus is not feeding curiosity about the future; he is forming disciples who will endure persecution, resist deception, and keep watch. The repeated commands &mdash; see that no one leads you astray, be on guard, stay awake &mdash; outnumber the predictions. The aim throughout is readiness, not reckoning. Mark 13 wants its readers to live every ordinary day as servants entrusted with work, awake at their posts, unashamed to be found at duty whenever the master of the house returns.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Shape of the Discourse</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The discourse unfolds in a clear movement. It begins with the prediction of the temple&rsquo;s ruin and the disciples&rsquo; question (verses 1 to 4). It then describes the false signs not to be mistaken for the end &mdash; deceivers, wars, earthquakes, famines &mdash; the beginning of the birth pains (verses 5 to 8). The middle turns intensely personal: persecution, trials, betrayal, and the worldwide proclamation of the gospel (verses 9 to 13). The crisis sharpens with the abomination of desolation and the unequaled tribulation, with urgent commands to flee and refuse false messiahs (verses 14 to 23).",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The climax arrives with cosmic upheaval and the visible coming of the Son of Man in clouds with great power and glory, gathering the elect from the four winds (verses 24 to 27). Then come two interpretive keys: the lesson of the fig tree and the sobering word about this generation, sealed by the promise that Jesus&rsquo; words will outlast heaven and earth (verses 28 to 31). The discourse closes where its true weight lies &mdash; the unknown hour and the fourfold command to watch, illustrated by the parable of the absent master and the doorkeeper charged to stay awake (verses 32 to 37).",
                }}
              />
            </div>
          </div>
        )}

        {/* Key Themes */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>The Major Themes of Mark 13</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The Olivet Discourse braids together history, hope, and holiness. It looks back to the near judgment on Jerusalem, forward to the final return of Christ, and inward to the endurance and watchfulness that the interval demands. These five themes are the load-bearing pillars of the chapter, and reading the whole through them keeps both speculation and despair at bay.",
                }}
              />
            </div>
            {THEMES.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>{t.title}</div>
                <p
                  style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: t.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse */}
        {activeTab === "verses" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Walking Through Mark 13</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Section by section, the discourse moves from the temple stones to the doorkeeper&rsquo;s vigil. Each passage below traces the flow of Jesus&rsquo; words, holding together their first-century setting and their lasting call to the church. Read slowly; the chapter rewards attention to its layered horizons.",
                }}
              />
            </div>
            {VERSES.map((v) => (
              <div key={v.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${v.color}20`, border: `1px solid ${v.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: v.color, fontWeight: 700 }}>{v.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{v.title}</span>
                </div>
                <p
                  style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: v.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 6 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Difficult Phrase: &ldquo;This Generation&rdquo;</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Few sentences in the Gospels have generated more discussion than &ldquo;this generation will not pass away until all these things take place.&rdquo; The interpretive options sort into several families. The preterist reading takes &ldquo;all these things&rdquo; to refer chiefly to the events surrounding the fall of Jerusalem in AD 70, which did indeed occur within the lifetime of Jesus&rsquo; contemporaries, with the cosmic language understood as prophetic imagery for the collapse of the old order. On this view the chapter is largely fulfilled, and its first-century precision is a powerful vindication of Jesus as a true prophet.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The futurist reading takes the coming of the Son of Man in verses 24 to 27 as the still-future Second Coming, and either understands &ldquo;this generation&rdquo; to mean the generation alive when the final signs begin, or reads it as the Jewish people preserved until the end. The partial-preterist or mixed reading &mdash; held by many across church history &mdash; sees the discourse moving from the near judgment on Jerusalem to the far horizon of Christ&rsquo;s return, so that &ldquo;this generation&rdquo; refers to the audience who would witness the temple&rsquo;s fall, while verses 32 to 37 stretch toward the unknown final day.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Whatever view one holds, two anchors keep the chapter steady. First, Jesus immediately limits any timetable by confessing that the day and hour are known only to the Father. Second, he stakes his entire authority on the permanence of his word: heaven and earth will pass away, but his words will not. The humble Christian posture is to hold the harder details with open hands while gripping the certainties tightly &mdash; he is coming, the timing is hidden, and his word will stand.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 14 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Abomination and the Apocalyptic Imagery</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The phrase &ldquo;abomination of desolation&rdquo; is drawn from the book of Daniel, where it appears in chapters 9, 11, and 12 to describe a desecrating outrage set up in the holy place. In Daniel&rsquo;s own setting it pointed to the defilement of the temple by Antiochus IV in the second century before Christ, who erected a pagan altar and sacrificed unclean animals. Jesus reapplies the language to a coming desolation of the temple, with the aside &ldquo;let the reader understand&rdquo; inviting careful reflection. Many see its first-century fulfillment in the events of the Jewish war and the Roman desecration of the sanctuary.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The cosmic language of darkened sun and falling stars is not Jesus&rsquo; invention but the stock vocabulary of the prophets. Isaiah 13 announces the fall of Babylon with the sun darkened and the stars withholding their light; Joel 2 describes the day of the LORD with the heavens trembling and the luminaries dimmed. In prophetic idiom such imagery often signals the toppling of nations and powers under God&rsquo;s judgment. Jesus stands in that tradition, using the grand and terrifying pictures of the prophets to announce that the Son of Man will be vindicated and his kingdom established, whether the immediate referent is the fall of an age or the end of all things.",
                }}
              />
            </div>
          </div>
        )}

        {/* Application */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Living the Olivet Discourse</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Mark 13 is intensely practical. Its prophecies are framed by commands, and its visions are designed to shape behavior. The chapter calls disciples to discernment in the face of deception, courage in the face of persecution, and steady wakefulness in the long interval before Christ returns. To apply it well is to let its hope steady the nerves and its commands order the day.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "First, refuse to be led astray. In every generation voices claim special knowledge of the end or arise in Christ&rsquo;s name with counterfeit authority. Jesus warned us beforehand precisely so that crises would not unsettle our faith but confirm his foresight. Second, expect that witness will be costly, yet trust that the Spirit supplies what we lack. The gospel must reach all nations, and our trials become the very stage on which that testimony is given before rulers and neighbors alike.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>From Watchfulness to Work</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The parable that closes the chapter reframes Christian waiting as Christian working. The master assigns each servant his task and the doorkeeper his watch; staying awake is not idle gazing at the sky but faithful attention to the duty already given. To watch, then, is to do the next right thing &mdash; to love, to serve, to pray, to bear witness &mdash; as those who will give an account. The unknown hour does not paralyze; it dignifies the present, charging every ordinary moment with significance because the master may return at any of the four watches of the night.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "This is the great pastoral gift of Mark 13. It refuses to let the future become an escape from the present or a playground for speculation. Instead it sends us back to our posts with hope burning and lamps trimmed, neither anxious nor asleep. The one who endures to the end will be saved, and the Son of Man who gathers his elect from the four winds will not overlook a single servant found faithfully at work. So we watch by working, and we wait by serving, until he comes.",
                }}
              />
            </div>

            {/* Reflection questions block */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {REFLECTION.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: `${GREEN}20`,
                        border: `1px solid ${GREEN}55`,
                        color: GREEN,
                        fontSize: 13,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {i + 1}
                    </span>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Always-visible video section */}
        <div style={{ marginTop: 40 }}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Mark 13</h2>
            <p
              style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{
                __html:
                  "Sermons and teaching on the Olivet Discourse &mdash; the fall of the temple, the coming of the Son of Man, and the call to watchfulness.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: GOLD, fontWeight: 700, fontSize: 16, margin: 0 }}>{v.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
