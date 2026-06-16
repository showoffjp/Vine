"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import VerseRef from "@/components/VerseRef";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#D97706", TEAL = "#0D9488", ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

const videoItems = [
  { videoId: "UrMVcHnVdXU", title: "Revelation 1 - The Vision of Christ on Patmos" },
  { videoId: "5WJHLfbJGiY", title: "Who Is the Alpha and Omega? Revelation 1" },
  { videoId: "6L_xq8Wbz1I", title: "The Glorified Christ - Revelation 1 Commentary" },
  { videoId: "EJb5bVZsMXw", title: "Introduction to Revelation - Context and Genre" },
];

interface AccordionItem {
  id: string;
  label: string;
  color: string;
  body: string;
}

const verseByVerseItems: AccordionItem[] = [
  {
    id: "vv1-3",
    label: "Verses 1-3: The Prologue and Threefold Blessing",
    color: GOLD,
    body: "The book opens with a title and a chain of revelation: God gave it to Jesus Christ, who made it known by his angel to his servant John, who testifies to everything he saw &mdash; the word of God and the testimony of Jesus Christ (1:1-2). This chain underscores that Revelation is not John&rsquo;s creative imagination but divine disclosure. The Greek word <em>apokalypsis</em> means an unveiling &mdash; the removal of a veil that was concealing a reality already present. John is not inventing a future; he is showing what is spiritually real about the present.<br><br>Verse 3 pronounces the first of seven beatitudes in Revelation: &ldquo;Blessed is the one who reads aloud the words of this prophecy, and blessed are those who hear it and take to heart what is written in it.&rdquo; The Greek <em>makarios</em> (blessed) carries a sense of deep, settled well-being &mdash; the happiness of the one who is rightly related to God and reality. The blessing extends to the public reader (singular), the listening congregation (plural), and those who keep what is written. Revelation was designed for communal oral reading in worship, not for private end-times speculation. The urgency is stated plainly: &ldquo;because the time is near.&rdquo; This is not clock-time but <em>kairos</em> &mdash; the appointed time of God&rsquo;s decisive action.",
  },
  {
    id: "vv4-6",
    label: "Verses 4-6: Greetings from the Trinity and the Doxology",
    color: PURPLE,
    body: "John addresses the seven churches in Asia Minor, the Roman province of what is now western Turkey. The greeting is Trinitarian: &ldquo;Grace and peace to you from him who is, and who was, and who is to come&rdquo; &mdash; the eternal Father; &ldquo;and from the seven spirits before his throne&rdquo; &mdash; the Holy Spirit in the fullness of his sevenfold ministry (cf. Isaiah 11:2; Zechariah 4:2); &ldquo;and from Jesus Christ, who is the faithful witness, the firstborn from the dead, and the ruler of the kings of the earth&rdquo; (1:4-5).<br><br>Each title given to Jesus is striking. <em>Martys</em> (faithful witness) &mdash; the same word from which we get &ldquo;martyr.&rdquo; In Revelation, bearing witness and suffering for it are inseparably joined. <em>Prototokos</em> (firstborn from the dead) &mdash; an echo of Psalm 89:27 and Colossians 1:18; Christ is the first of the new creation, the pioneer of resurrection who has opened the path for all who belong to him. &ldquo;Ruler of the kings of the earth&rdquo; &mdash; a direct challenge to Caesar&rsquo;s claims. If Christ is already Lord of lords, Roman imperial authority is at best derivative and at worst demonic.<br><br>The doxology bursts out in verses 5-6: &ldquo;To him who loves us and has freed us from our sins by his blood, and has made us to be a kingdom and priests to serve his God and Father &mdash; to him be glory and power for ever and ever! Amen.&rdquo; Three past tenses: he loves (ongoing present), freed (aorist &mdash; definitive past act at the cross), and made (aorist &mdash; the church has already been constituted a royal priesthood). The church does not earn priestly status; it was given at the cross.",
  },
  {
    id: "vv7-8",
    label: "Verses 7-8: The Coming of Christ and the Alpha and Omega",
    color: TEAL,
    body: "Verse 7 announces the book&rsquo;s central expectation, weaving together Daniel 7:13 and Zechariah 12:10: &ldquo;Look, he is coming with the clouds, and every eye will see him, even those who pierced him; and all peoples on earth will mourn because of him.&rdquo; The coming of Christ in glory is the horizon toward which all of Revelation moves. The mourning is ambiguous in the best interpreters &mdash; it may be the grief of repentance as well as the anguish of judgment; the same Zechariah passage in its context involves cleansing and a fountain opened for sin (Zech. 13:1).<br><br>Verse 8 gives God&rsquo;s own self-identification: &ldquo;I am the Alpha and the Omega, says the Lord God, who is, and who was, and who is to come, the Almighty.&rdquo; Alpha and Omega are the first and last letters of the Greek alphabet &mdash; a way of saying that God encompasses and contains all of reality, all of time, all of history. Nothing lies outside his purview. <em>Pantokrator</em> (Almighty) is the word used in the Septuagint for &ldquo;the LORD of hosts&rdquo; and appears nine times in Revelation alone &mdash; a book written to people who felt powerless under Rome. The theological claim is subversive: not Caesar but God is <em>Pantokrator</em>.",
  },
  {
    id: "vv9-11",
    label: "Verses 9-11: John on Patmos and the Vision on the Lord's Day",
    color: GREEN,
    body: "John identifies himself as &ldquo;your brother and companion in the suffering and kingdom and patient endurance that are ours in Jesus&rdquo; (1:9). He is not writing from a position of authority over the churches but as one who shares their situation. His three coordinates &mdash; suffering, kingdom, patient endurance &mdash; define the whole Christian vocation in this book. The churches are not called to escape suffering but to endure it with the patient perseverance of those who know the kingdom is real and the Lamb has won.<br><br>He is on the island of Patmos, a rocky, barren island in the Aegean Sea used by Rome as a place of exile for criminals and political troublemakers. John is there &ldquo;because of the word of God and the testimony of Jesus&rdquo; &mdash; that is, his faithfulness to the gospel has landed him in prison-exile. The date is &ldquo;the Lord&rsquo;s Day&rdquo; &mdash; Sunday, the day of resurrection worship, the day Christians gathered to celebrate Christ&rsquo;s victory over death. Even in exile, John keeps the rhythms of the church.<br><br>He is caught up &ldquo;in the Spirit&rdquo; &mdash; a state of prophetic consciousness in which he receives the visions that follow. The first command is simple and urgent: &ldquo;Write on a scroll what you see and send it to the seven churches: to Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia and Laodicea.&rdquo; These seven cities formed a postal route and circuit through the Roman province of Asia. The letter was meant to travel around the circuit, to be read in each congregation.",
  },
  {
    id: "vv12-16",
    label: "Verses 12-16: The Vision of the Risen Christ Among the Lampstands",
    color: ROSE,
    body: "John turns to see the voice, and what he sees defies literal description &mdash; which is precisely the point. The vision is a symbolic portrait of Christ&rsquo;s divine identity and authority, drawing on Old Testament imagery throughout. He sees seven golden lampstands &mdash; which are later identified as the seven churches (1:20). Christ walks among his churches, present in their worship, present in their suffering, not distant in heaven but intimately near.<br><br>The description of the &ldquo;son of man&rdquo; among the lampstands is composite and overwhelming: a long robe and a golden sash (priestly dignity and royal authority); head and hair white as white wool, white as snow (the &ldquo;Ancient of Days&rdquo; of Daniel 7:9 &mdash; divine eternity); eyes like blazing fire (penetrating, searching, judging omniscience); feet like bronze glowing in a furnace (the stability and purity of divine judgment); his voice like the sound of rushing waters (overwhelming divine authority, as in Ezekiel 43:2 where this is the sound of the glory of God).<br><br>In his right hand he holds seven stars (the angels or messengers of the seven churches); from his mouth comes a sharp double-edged sword (the word of God as the instrument of both salvation and judgment &mdash; cf. Hebrews 4:12; Isaiah 49:2); his face shines like the sun in its full strength (the Transfiguration, where &ldquo;his face shone like the sun&rdquo; in Matthew 17:2). Together these images do not describe a physical face but a theological reality: this is the Christ who rules history, judges the nations, speaks with divine authority, and walks among his people. Every detail is drawn from the prophets and psalms; John is painting a portrait in Old Testament colors.",
  },
  {
    id: "vv17-18",
    label: "Verses 17-18: Fear Not - The Keys of Death and Hades",
    color: GOLD,
    body: "When John sees this vision, he falls at Christ&rsquo;s feet as though dead &mdash; the same response given by Isaiah at the sight of God enthroned (Isaiah 6:5), by Ezekiel at the vision of divine glory (Ezekiel 1:28), and by Daniel before the heavenly messenger (Daniel 10:9). Creaturely awe before uncreated glory; the only appropriate response to a full view of Christ as he actually is.<br><br>But the risen Christ does what he always does: he reaches out, touches, and speaks: &ldquo;Do not be afraid. I am the First and the Last. I am the Living One; I was dead, and now look, I am alive for ever and ever! And I hold the keys of death and Hades.&rdquo; &ldquo;Do not be afraid&rdquo; is the most frequent command in the Bible, and here it is grounded not in sentiment but in theology. Three identity statements follow: First and Last (Isaiah 44:6 &mdash; the title of the God of Israel); the Living One (divine life itself, not a derived or created life); dead but now alive for ever and ever (the resurrection as the central defining fact of Christ&rsquo;s identity).<br><br>The keys of death and Hades are the most pastoral statement in these verses. A key is the symbol of authority and access. Death and Hades (the realm of the dead) are often pictured in Jewish literature as a locked realm that swallows people and releases no one. Christ holds the keys &mdash; not death, not Rome, not any disease or emperor. The churches being told to be faithful unto death (2:10) are not being sent into a locked cell with no exit; they are being told that the One who died and rose holds the door of death from the inside.",
  },
  {
    id: "vv19-20",
    label: "Verses 19-20: The Command to Write and the Mystery Explained",
    color: PURPLE,
    body: "Christ commissions John with a three-part structure that may serve as an outline for the whole book: &ldquo;Write, therefore, what you have seen, what is now and what will take place later&rdquo; (1:19). Some interpreters take this as a chronological outline: chapter 1 is what John has seen; chapters 2-3 are &ldquo;what is now&rdquo; (the current condition of the churches); chapters 4-22 are &ldquo;what will take place later.&rdquo; Others see it as a more general framework for prophetic vision: the whole book addresses past, present, and future together in its visionary mode. In either reading, the command to write is essential: the vision must not be kept to oneself; it is meant for the churches, for their encouragement, warning, and hope.<br><br>Verse 20 provides the first explicit interpretation of symbols in the book: &ldquo;The mystery of the seven stars that you saw in my right hand and of the seven golden lampstands is this: The seven stars are the angels of the seven churches, and the seven lampstands are the seven churches.&rdquo; The word &ldquo;mystery&rdquo; in the New Testament does not mean &ldquo;unknowable puzzle&rdquo; but rather &ldquo;previously hidden truth now revealed.&rdquo; The churches &mdash; these struggling, compromised, persecuted, ordinary gatherings of believers in seven Roman cities &mdash; are golden lampstands. They are bearers of light. And Christ walks among them. This is the comfort of the whole chapter: the risen, glorified, all-powerful Christ has not abandoned his people but stands among them, holds their messengers in his hand, and is about to address them directly in the chapters that follow.",
  },
];

const keyThemes = [
  {
    id: "prologue",
    title: "The Prologue and First Blessing (vv.1-3)",
    color: GOLD,
    content: "The prologue establishes Revelation as a &ldquo;chain of revelation&rdquo; &mdash; from God to Christ to angel to John to the churches. The Greek <em>apokalypsis</em> (unveiling) signals the genre: this is not ordinary prediction but prophetic unveiling of hidden realities. The beatitude of verse 3 is the first of seven blessings in the book and frames it immediately as communal and liturgical &mdash; meant to be read aloud in worship. The time qualifier &ldquo;the time is near&rdquo; situates the urgency: these words are not for a distant future reader but for the immediate hearers in first-century Asia Minor, even as their scope extends to the whole arc of redemptive history.",
  },
  {
    id: "trinity",
    title: "Greetings from the Trinity and the Doxology (vv.4-8)",
    color: PURPLE,
    content: "The Trinitarian greeting is theologically dense. The Father is described through the Exodus name of God &mdash; &ldquo;who is, and who was, and who is to come&rdquo; &mdash; emphasizing divine aseity and constancy. The Spirit appears as &ldquo;the seven spirits before his throne,&rdquo; likely the sevenfold Spirit of Isaiah 11:2, representing the fullness and perfection of the Spirit&rsquo;s ministry. Christ is given three titles: faithful witness (<em>martys</em>), firstborn from the dead (<em>prototokos ek ton nekron</em>), and ruler of the kings of the earth. This last title directly challenges Roman imperial ideology. The doxology that follows celebrates what Christ has already accomplished: freed us, made us a kingdom and priests. The church&rsquo;s identity is established before the letters are even written.",
  },
  {
    id: "patmos",
    title: "John's Context and the Vision on Patmos (vv.9-11)",
    color: TEAL,
    content: "John&rsquo;s exile on Patmos is the human context from which the vision erupts. He is not writing from comfort or safety but from the same situation as the churches: suffering, endurance, the kingdom. This gives the book its pastoral power &mdash; John does not offer escapist fantasy from a distance but solidarity from within shared suffering. The &ldquo;Lord&rsquo;s Day&rdquo; setting (Sunday worship) grounds the vision in the regular rhythms of the Christian community, even when that community is scattered or persecuted. Being &ldquo;in the Spirit&rdquo; is the prophetic posture of receiving revelation &mdash; not trance but heightened spiritual consciousness in which divine realities become visible.",
  },
  {
    id: "vision",
    title: "The Vision of the Risen Christ (vv.12-16)",
    color: ROSE,
    content: "The vision of Christ in Revelation 1 is the most sustained Old Testament-saturated portrait of Christ in the entire New Testament. Every element is drawn from Daniel, Ezekiel, Isaiah, and the Psalms: the white hair from Daniel&rsquo;s Ancient of Days (Daniel 7:9), the fiery eyes and bronze feet from Daniel 10:6, the voice like rushing waters from Ezekiel 43:2, the double-edged sword from Isaiah 49:2 and Hebrews 4:12, the sun-bright face from the Transfiguration (Matthew 17:2). The composite nature of the portrait signals that no single image is meant literally but that together they communicate the full divine identity and authority of the risen Christ. He is not merely a heavenly hero; he is the God of the Old Testament embodied.",
  },
  {
    id: "fearnotkeys",
    title: "Fear Not and the Keys of Death and Hades (vv.17-20)",
    color: GREEN,
    content: "The &ldquo;Fear not&rdquo; of verse 17 is the theological center of chapter 1 and of the whole book. It is addressed to a people who have every human reason to fear &mdash; Roman persecution, social pressure, economic exclusion, the threat of death. Christ&rsquo;s answer is not to minimize the danger but to reframe it entirely: the one speaking is the First and Last, the Living One who was dead but is alive forever, and who holds the keys of death and Hades. The key symbolism is crucial: ancient literature often pictured death and Hades as locked gates. Christ has the keys &mdash; not as an outside observer but as one who went through death himself and came out the other side, holding the door. For the persecuted church, the comfort is not that death is impossible but that death is not the last word, because the One who died and rose holds every key that matters.",
  },
];

const applicationPoints = [
  {
    title: "A Christology That Changes Everything",
    color: GOLD,
    body: "The vision of Christ in Revelation 1 is designed to recalibrate the imagination. Most of us carry a domesticated picture of Jesus &mdash; gentle, accessible, human-scaled. The vision John receives intentionally shatters that picture and replaces it with one that is overwhelming, cosmic, divine. The white hair of eternity, the eyes of blazing omniscience, the voice of cosmic authority, the face blazing like the sun &mdash; this is the Christ who walks among his churches and holds their leaders in his right hand. The question the chapter presses on us is: Does our picture of Christ match his actual identity? Theological poverty about who Christ is produces spiritual weakness in the face of suffering. When we see Christ as Revelation 1 shows him, hardship looks different. We are not abandoned to Roman power, to cancer, to unemployment, to social pressure &mdash; we are held in the right hand of the one who holds the keys of death and Hades.",
  },
  {
    title: "The Shape of Christian Vocation: Suffering, Kingdom, Endurance",
    color: PURPLE,
    body: "John identifies himself to his readers as &ldquo;your brother and companion in the suffering and kingdom and patient endurance that are ours in Jesus&rdquo; (1:9). These three words &mdash; suffering (<em>thlipsis</em>), kingdom (<em>basileia</em>), and patient endurance (<em>hypomone</em>) &mdash; form a compressed description of the Christian life in this age. They are not three separate stages or three optional modes of Christian life; they are simultaneous realities. The kingdom is real and present now; therefore we endure; therefore suffering is not meaningless. The Revelation 1 vision sustains the endurance: we keep going not by gritting our teeth harder but by seeing the enthroned Christ more clearly. Endurance is fueled by vision.",
  },
  {
    title: "The Church as Lampstand: Light in Darkness",
    color: TEAL,
    body: "The identification of the seven lampstands as the seven churches (1:20) is one of the most theologically charged statements in the chapter. A lampstand&rsquo;s entire function is to bear light and make it visible. The church&rsquo;s calling, in Revelation&rsquo;s imagery, is not self-preservation but illumination &mdash; holding the light of the gospel in the midst of a dark empire. The danger Revelation will expose in the letters of chapters 2-3 is not primarily persecution from without but compromise from within &mdash; the lampstand dimming or going out. The question for any congregation reading Revelation 1 is: Are we a lampstand? Is the light of the gospel visible through us in our community? The risen Christ walks among the lampstands. His presence is not guaranteed to the building but to the light-bearing community.",
  },
  {
    title: "Greek Words for Deeper Study",
    color: GREEN,
    body: "<strong>Apokalypsis</strong> (&alpha;&pi;&omicron;&kappa;&alpha;&lambda;&upsilon;&psi;&iota;&sigmaf;) &mdash; unveiling, revelation; the removal of a veil to show what is already there. <strong>Makarios</strong> (&mu;&alpha;&kappa;&alpha;&rho;&iota;&omicron;&sigmaf;) &mdash; blessed, deeply happy; the word used in the Beatitudes (Matthew 5). <strong>Martys</strong> (&mu;&alpha;&rho;&tau;&upsilon;&sigmaf;) &mdash; witness; from which the English word &ldquo;martyr&rdquo; derives; in Revelation witnessing and suffering for it are inseparable. <strong>Prototokos</strong> (&pi;&rho;&omega;&tau;&omicron;&tau;&omicron;&kappa;&omicron;&sigmaf;) &mdash; firstborn; used in Colossians 1:15,18 of Christ as firstborn of all creation and firstborn from the dead. <strong>Pantokrator</strong> (&Pi;&alpha;&nu;&tau;&omicron;&kappa;&rho;&alpha;&tau;&omega;&rho;) &mdash; Almighty, All-Ruler; the Septuagint translation of &ldquo;LORD of hosts&rdquo; and a word that appears nine times in Revelation, each time asserting divine sovereignty over Roman imperial power.",
  },
];

export default function Revelation1GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Header */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: `${GOLD}22`, color: GOLD, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Revelation Study
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 900, margin: "0 0 1rem", lineHeight: 1.15, color: TEXT }}>
            Revelation 1: The Vision of the Risen Christ and the Mandate to Write
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "John, exiled to the island of Patmos for the word of God and the testimony of Jesus, receives a vision on the Lord&rsquo;s Day of overwhelming power: the risen Christ walking among seven golden lampstands, his appearance blazing with divine glory, speaking with the voice of rushing waters and commanding John to write. This first chapter is the theological foundation of the entire book &mdash; a Christology so high it demands a response, and a pastoral comfort so deep it sustains martyrdom." }}
          />
        </header>

        {/* Context Banner */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: "2rem", borderLeft: `4px solid ${GOLD}` }}>
          <div style={{ color: GOLD, fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.5rem" }}>Historical &amp; Literary Context</div>
          <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}
            dangerouslySetInnerHTML={{ __html: "Revelation is a composite genre: it is an <em>apokalypsis</em> (apocalypse), a <em>propheteia</em> (prophecy), and an <em>epistole</em> (letter). Written by John most likely during the reign of Emperor Domitian (c. AD 95), it is addressed to seven churches in the Roman province of Asia &mdash; congregations under pressure to participate in emperor worship and the economic/social cult of Rome. John writes as a co-sufferer from exile on Patmos, not as a comfortable observer. Chapter 1 is the prologue and first vision that sets the entire book&rsquo;s theological framework: before the letters to the churches (chs. 2-3), before the heavenly throne room (chs. 4-5), before any seal or trumpet, John is given a vision of Christ that demands reorientation of the imagination." }}
          />
        </div>

        {/* Tabs */}
        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? GOLD : BORDER}`,
                background: activeTab === t ? GOLD : CARD,
                color: activeTab === t ? "#07070F" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        {/* Overview Tab */}
        {activeTab === "Overview" && (
          <section>
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "2rem", marginBottom: "1.5rem" }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 1rem" }}>Overview of Revelation 1</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 1rem", fontSize: "1.02rem" }}
                dangerouslySetInnerHTML={{ __html: "Chapter 1 of Revelation divides naturally into three movements. The prologue (vv.1-3) establishes the chain of revelation and pronounces the first beatitude. The epistolary introduction (vv.4-8) opens with a Trinitarian greeting and a Christological doxology before closing with God&rsquo;s self-identification as Alpha and Omega. The inaugural vision (vv.9-20) gives the historical and visionary context: John on Patmos, the voice on the Lord&rsquo;s Day, and the overwhelming sight of the risen Christ walking among his churches." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 1rem", fontSize: "1.02rem" }}
                dangerouslySetInnerHTML={{ __html: "The key interpretive principle for the chapter is that Revelation uses Old Testament imagery as its primary language. The description of Christ in verses 12-16 is not a literal photograph but a theological portrait assembled from Daniel, Ezekiel, Isaiah, and the Psalms. Each detail communicates an aspect of Christ&rsquo;s identity and authority. To understand the chapter requires knowing the Old Testament texts that John is drawing on; to read it as physical description is to miss the point entirely." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "1.02rem" }}
                dangerouslySetInnerHTML={{ __html: "The pastoral purpose of chapter 1 is to give the churches a vision of Christ adequate to their situation. They face Roman power, economic pressure, social exclusion, and the threat of death. John&rsquo;s answer is not a political program or an escape plan but a vision: the crucified and risen Jesus is the First and Last, the Living One, holder of the keys of death and Hades. Whatever empire threatens from without, Christ walks among his people and holds them in his right hand." }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                ["Author", "John (exiled apostle)"],
                ["Setting", "Island of Patmos"],
                ["Date", "c. AD 95 (Domitian)"],
                ["Audience", "Seven churches, Asia Minor"],
                ["Genre", "Apocalyptic prophecy and letter"],
                ["Key Symbol", "Seven golden lampstands"],
              ].map(([k, v]) => (
                <div key={k} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 0.5 }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: "0.95rem" }}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 1rem" }}>Key Symbols in Revelation 1</h3>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {[
                  ["The Seven Spirits", "The fullness of the Holy Spirit (cf. Isaiah 11:2; Zechariah 4:2) &mdash; not seven literal beings but the sevenfold completeness of the Spirit&rsquo;s ministry"],
                  ["The Seven Lampstands", "Explicitly identified in verse 20 as the seven churches. A lampstand&rsquo;s function is to bear light &mdash; the church exists to make the light of Christ visible in the world"],
                  ["The Sharp Two-Edged Sword", "The word of God proceeding from Christ&rsquo;s mouth (cf. Isaiah 49:2; Hebrews 4:12) &mdash; not physical violence but the penetrating, dividing, judging word of divine truth"],
                  ["Sun-like Face", "Connects to the Transfiguration (Matthew 17:2) where the disciples saw the divine glory shining through Christ&rsquo;s humanity; also echoes Daniel 10:6"],
                  ["White Hair / Head", "Drawn directly from Daniel 7:9, the &ldquo;Ancient of Days&rdquo; &mdash; signals divine eternity and the application to Jesus of titles reserved for God in Daniel"],
                  ["Bronze Feet", "Stability, judgment, and purity (cf. Daniel 10:6; Ezekiel 1:7). In the ancient world bronze represented enduring strength"],
                  ["Eyes Like Fire", "Omniscient, penetrating, searching knowledge &mdash; nothing is hidden from the gaze of the risen Christ (cf. Daniel 10:6; Revelation 2:18, 23)"],
                ].map(([sym, desc]) => (
                  <div key={sym as string} style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "0.875rem" }}>
                    <div style={{ color: GOLD, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{sym as string}</div>
                    <div style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: desc as string }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Videos Section in Overview */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 1.25rem" }}>Video Teaching on Revelation 1</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {videoItems.map((item) => (
                  <div key={item.videoId} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "10px 14px" }}>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Key Themes Tab */}
        {activeTab === "Key Themes" && (
          <section>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 1.25rem" }}>Key Themes in Revelation 1</h2>
            <div style={{ display: "grid", gap: "0.875rem" }}>
              {keyThemes.map((theme) => (
                <div key={theme.id} style={{ background: CARD, border: `1px solid ${openTheme === theme.id ? theme.color : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button
                    onClick={() => setOpenTheme(openTheme === theme.id ? null : theme.id)}
                    style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}
                  >
                    <span style={{ color: theme.color, fontWeight: 700, fontSize: "1rem", lineHeight: 1.4 }}>{theme.title}</span>
                    <span style={{ color: theme.color, fontSize: "1.3rem", flexShrink: 0, fontWeight: 400 }}>{openTheme === theme.id ? "-" : "+"}</span>
                  </button>
                  {openTheme === theme.id && (
                    <div style={{ padding: "0 1.3rem 1.3rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }} dangerouslySetInnerHTML={{ __html: theme.content }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${PURPLE}44`, padding: "1.75rem", marginTop: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.875rem" }}>The Three-Part Structure of Chapter 1</h3>
              <div style={{ display: "grid", gap: "0.875rem" }}>
                {[
                  { ref: "vv.1-3", title: "Prologue and Beatitude", desc: "Establishes the chain of revelation (God &rarr; Christ &rarr; angel &rarr; John &rarr; churches) and pronounces the first beatitude on those who read, hear, and keep the words.", color: GOLD },
                  { ref: "vv.4-8", title: "Epistolary Introduction", desc: "Trinitarian greeting, three Christological titles, a doxology celebrating the cross and the church&rsquo;s priestly identity, and God&rsquo;s self-identification as Alpha and Omega, Pantokrator.", color: PURPLE },
                  { ref: "vv.9-20", title: "The Inaugural Vision", desc: "Historical context (Patmos, Lord&rsquo;s Day, in the Spirit), the command to write to the seven churches, and the overwhelming vision of the risen Christ among the lampstands.", color: TEAL },
                ].map((item) => (
                  <div key={item.ref} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ background: `${item.color}22`, color: item.color, borderRadius: 6, padding: "4px 10px", fontSize: "0.8rem", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{item.ref}</div>
                    <div>
                      <div style={{ color: item.color, fontWeight: 700, marginBottom: "0.25rem" }}>{item.title}</div>
                      <div style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "Verse by Verse" && (
          <section>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 0.5rem" }}>Verse-by-Verse Commentary: Revelation 1</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 1.5rem", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "A detailed walkthrough of all twenty verses in their canonical order. Click any section to expand the commentary. All verse references are linked to the Bible reader." }}
            />
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {verseByVerseItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${openVerse === item.id ? item.color : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button
                    onClick={() => setOpenVerse(openVerse === item.id ? null : item.id)}
                    style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}
                  >
                    <span style={{ color: item.color, fontWeight: 700, fontSize: "0.97rem", lineHeight: 1.4 }}>{item.label}</span>
                    <span style={{ color: item.color, fontSize: "1.3rem", flexShrink: 0, fontWeight: 400 }}>{openVerse === item.id ? "-" : "+"}</span>
                  </button>
                  {openVerse === item.id && (
                    <div style={{ padding: "0 1.3rem 1.3rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "0.97rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${TEAL}44`, padding: "1.75rem", marginTop: "1.5rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.875rem" }}>Verse References for Deeper Study</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["Revelation 1:1", "Revelation 1:3", "Revelation 1:5", "Revelation 1:7", "Revelation 1:8", "Revelation 1:9", "Revelation 1:12", "Revelation 1:14", "Revelation 1:16", "Revelation 1:17", "Revelation 1:18", "Revelation 1:20"].map((ref) => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Application Tab */}
        {activeTab === "Application" && (
          <section>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 0.5rem" }}>Application: Living Under the Vision</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 1.5rem", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "How does seeing Christ as Revelation 1 describes him change how we face hardship? The chapter is not primarily a prediction of future events but a pastoral vision given to a suffering community. Its application is equally pastoral: it invites us to see Christ as he actually is, not as we have sentimentalized or shrunk him, and to let that vision reshape our courage, our endurance, and our worship." }}
            />
            <div style={{ display: "grid", gap: "1.25rem" }}>
              {applicationPoints.map((point) => (
                <div key={point.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
                  <h3 style={{ color: point.color, fontWeight: 800, fontSize: "1.05rem", margin: "0 0 0.875rem" }}>{point.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "0.97rem" }} dangerouslySetInnerHTML={{ __html: point.body }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${GOLD}44`, padding: "1.75rem", marginTop: "1.5rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.05rem", margin: "0 0 0.875rem" }}>Personal Reflection Questions</h3>
              <div style={{ display: "grid", gap: "0.875rem" }}>
                {[
                  "How does the vision of Christ in Revelation 1 differ from the picture of Jesus you carry in your mind most of the time? What would change if your functional picture of Christ matched his Revelation 1 identity?",
                  "John describes himself as &ldquo;your brother and companion in the suffering and kingdom and patient endurance that are ours in Jesus.&rdquo; Which of these three words &mdash; suffering, kingdom, endurance &mdash; feels most distant from your current experience of the Christian life?",
                  "The churches are described as &ldquo;lampstands&rdquo; &mdash; their calling is to bear light. What does it mean for your church to be a lampstand in your specific community? What would threaten the light?",
                  "Christ says &ldquo;Do not be afraid&rdquo; and grounds it in his resurrection and his possession of the keys of death and Hades. What fear in your life needs to be directly confronted with this claim? What would it look like to actually believe it?",
                ].map((q, i) => (
                  <div key={i} style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: `${i + 1}. ${q}` }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${GREEN}44`, padding: "1.75rem", marginTop: "1.25rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: "1.05rem", margin: "0 0 0.875rem" }}>For Further Reading</h3>
              <div style={{ display: "grid", gap: "0.6rem" }}>
                {[
                  { author: "G.K. Beale", title: "The Book of Revelation (NIGTC)", note: "The standard academic commentary; exhaustive on Old Testament background" },
                  { author: "Michael Gorman", title: "Reading Revelation Responsibly", note: "Accessible theological introduction; strong on the book&rsquo;s ethical call" },
                  { author: "N.T. Wright", title: "Revelation for Everyone", note: "Pastoral and readable; situates the book in first-century context" },
                  { author: "Eugene Peterson", title: "Reversed Thunder", note: "Literary and spiritual meditation on Revelation&rsquo;s vision of worship" },
                ].map((book) => (
                  <div key={book.author} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: GREEN, fontWeight: 700, fontSize: "1.2rem", lineHeight: 1.2, flexShrink: 0 }}>&rsaquo;</span>
                    <div>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: "0.9rem" }}>{book.author}, </span>
                      <em style={{ color: MUTED, fontSize: "0.9rem" }}>{book.title}</em>
                      <span style={{ color: MUTED, fontSize: "0.85rem" }}> &mdash; </span>
                      <span style={{ color: MUTED, fontSize: "0.85rem" }} dangerouslySetInnerHTML={{ __html: book.note }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer note */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 1.75rem", textAlign: "center" }}>
          <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}
            dangerouslySetInnerHTML={{ __html: "Revelation 1 is the theological foundation for everything that follows in the book. The vision John receives on Patmos &mdash; the risen Christ blazing with divine glory, walking among his churches, holding their messengers in his right hand, the holder of the keys of death and Hades &mdash; is the vision that makes endurance possible. Before any seal is opened, before any trumpet sounds, before any beast appears, the churches are shown who is really in charge. The whole book is the unfolding of this one chapter&rsquo;s vision." }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
