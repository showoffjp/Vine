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

type Tab = "theology" | "elements" | "debates" | "formation" | "videos";

const THEOLOGY_ITEMS = [
  {
    id: "what-is-worship",
    title: "What Is Worship?",
    body: "The Greek word proskuneo means literally to 'bow down' or 'kiss toward' — a posture of submission and adoration before one greater. Latreia, translated 'worship' or 'service,' carries the sense of devoted, sustained service, not a momentary act but a life orientation. The distinction matters: worship is both an attitude of the heart and an act of the body. John 4:23-24 brings these together: 'Yet a time is coming and has now come when the true worshipers will worship the Father in the Spirit and in truth, for they are the kind of worshipers the Father seeks. God is spirit, and his worshipers must worship in the Spirit and in truth.' Spirit — genuine inner orientation, not performance. Truth — conformity to who God actually is, not an invented deity. Both are required. One without the other produces either dead orthodoxy or empty emotionalism.",
  },
  {
    id: "trinity-worship",
    title: "The Trinity and Worship",
    body: "Christian worship has a trinitarian structure that the early church discovered through practice before fully articulating it theologically. Ephesians 2:18: 'For through him [the Son] we both have access to the Father by one Spirit.' Worship is directed TO the Father, offered THROUGH the Son (whose mediation alone makes us acceptable), and made possible and real IN the Spirit. This is not merely a theological formula but a description of what is actually happening when Christians worship. We do not approach God raw — we come through the Son, carried by the Spirit. The early church's worship generated Trinitarian theology: they had to explain why they prayed to the Father through Jesus in the Spirit before they could fully explain who Father, Son, and Spirit were.",
  },
  {
    id: "worship-as-response",
    title: "Worship as Response",
    body: "Worship is not something we initiate — it is the creature responding to the Creator's prior self-disclosure. Isaiah 6 is the pattern: Isaiah enters the temple and receives a vision of the Lord, high and lifted up, the seraphim crying 'Holy, holy, holy.' His response is not prepared or manufactured — it is forced from him by what he has seen: 'Woe is me! I am ruined! For I am a man of unclean lips, and I live among a people of unclean lips, and my eyes have seen the King, the LORD Almighty.' Only then comes cleansing, call, and commission. Worship that begins with our feelings, our music preferences, or our efforts to generate spiritual experience has reversed the order. We respond; God speaks first. The task of worship planning is to clear the path for divine self-disclosure — not to manufacture encounters.",
  },
  {
    id: "all-of-life",
    title: "All of Life as Worship",
    body: "Romans 12:1: 'Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God — this is your true and proper worship.' The Protestant Reformation recovered the biblical insistence that worship is not confined to sacred times and sacred places — all of life, rightly ordered, is worship. Work, relationships, creativity, rest, eating, parenting — all can be offered to God as acts of worship. This liberates Christianity from a sacred/secular divide. The danger, however, is flattening: if everything is worship, the word loses traction. The gathered Sunday assembly has a particular character — covenant assembly, corporate proclamation, sacrament — that is distinct from, though continuous with, the worship of Monday through Saturday.",
  },
  {
    id: "corporate-private",
    title: "Corporate vs. Private Worship",
    body: "Both corporate and private worship are essential, and neither substitutes for the other. Hebrews 10:25 warns: 'not giving up meeting together, as some are in the habit of doing, but encouraging one another — and all the more as you see the Day approaching.' Corporate worship does something that private devotion cannot: it enacts the covenant community. The gathering is not a collection of individuals doing worship simultaneously — it is the body of Christ assembled as a body. Voices join. One person's strength covers another's weakness. The creed is confessed together. Bread and cup are shared. The 'we' language of the Psalms and the Lord's Prayer belongs first to corporate worship. Private worship — prayer, Scripture reading, meditation — feeds the gathered gathering, but cannot replace it.",
  },
  {
    id: "worship-heart",
    title: "Worship and the Heart",
    body: "Amos 5:21-24 contains one of the Bible's most shocking passages: 'I hate, I despise your religious festivals; your assemblies are a stench to me… Away with the noise of your songs! I will not listen to the music of your harps. But let justice roll on like a river, righteousness like a never-failing stream.' God does not refuse worship because the people are not worshiping — he refuses it because their worship has been emptied of the heart's transformation it requires. Matthew 15:8, citing Isaiah: 'These people honor me with their lips, but their hearts are far from me.' David, refusing to accept the threshing floor as a gift in order to offer a sacrifice there, says: 'I will not sacrifice to the LORD my God burnt offerings that cost me nothing' (2 Samuel 24:24). The costless worship, the heartless ritual, the liturgy without justice — these are not imperfect worship. They are, in God's reckoning, no worship at all.",
  },
];

const ELEMENTS_ITEMS = [
  {
    id: "scripture",
    label: "Scripture Reading",
    body: "Nehemiah 8 records the great liturgical assembly where Ezra read from the Book of the Law from daybreak till noon, and all the people listened attentively. Luke 4:16-20 shows Jesus standing in the synagogue to read from Isaiah — the public reading of Scripture as an act of worship, not merely instruction. Paul commands Timothy: 'Devote yourself to the public reading of Scripture, to preaching and to teaching' (1 Timothy 4:13). Scripture is read before it is preached because the reading is itself an act of worship — the Word offered to the congregation, who receive it in attentive expectation. The ancient practice of lectio continua (reading through books of the Bible sequentially) ensures the congregation is not fed only the preacher's favorite texts. The reading before preaching matters: it grounds the sermon in the authoritative text and teaches the congregation that the preacher's words derive from and must answer to the Word.",
    rationale: "The Word of God read aloud in the assembly is itself a theological act — God speaking through human voice to gathered people.",
    historical: "The synagogue service (and early Christian worship adapted from it) centered on the reading and exposition of Torah. The Reformers restored the primacy of Scripture reading against medieval practice where the Mass had largely displaced the Word.",
    today: "Many churches read a single text before the sermon; the historic practice of reading from Old Testament, Epistle, and Gospel (as in the lectionary) gives the congregation Scripture's full range.",
  },
  {
    id: "preaching",
    label: "Proclamation/Preaching",
    body: "Karl Barth understood preaching as a 'Word event' — not merely human speech about God, but the event in which God speaks through human words. The preacher does not merely explain a text; the text speaks, and God speaks through the text's speaking. The congregation is not an audience evaluating a performance but a community listening for the voice of God. This is why preparation matters: the preacher who has not wrestled with the text cannot be its transparent servant. And it is why delivery matters: not rhetorical polish, but conviction, clarity, and pastoral attentiveness to the people in front of you. The listening congregation is not passive — they receive, question, test, and apply. Faith comes by hearing (Romans 10:17); the proclaimed Word creates what it announces.",
    rationale: "Preaching is the audible form of the incarnation's logic — God communicating through the human and particular.",
    historical: "Reformation worship placed the sermon at the center, displacing the visual and sacramental centrality of medieval worship. The result was a Word-saturated but sometimes sacrament-impoverished Protestantism.",
    today: "The best preaching integrates exposition of the text, connection to the congregation's world, and the gospel shape of all Scripture — law and grace, problem and solution, judgment and rescue.",
  },
  {
    id: "prayer",
    label: "Prayer",
    body: "Corporate prayer is the church exercising its royal priesthood (1 Peter 2:9) — interceding for the world before the throne of grace. It is not a pause between more important elements but the church's primary action in its covenant relationship with God. Paul's instruction in 1 Corinthians 14:16 reveals that congregational participation in prayer is ancient: 'if you are praising God with your spirit, how can someone else, who is now put in the position of an inquirer, say \"Amen\" to your thanksgiving?' The 'Amen' at the end of corporate prayer is the congregation's endorsement and participation — it makes the prayer theirs. The forms of corporate prayer: confession (acknowledgment of sin), adoration (praise of who God is), thanksgiving (gratitude for what God has done), and intercession (bringing the needs of others before God).",
    rationale: "Prayer is covenant speech — the creature addressing the Creator through the access provided by the Son and in the power of the Spirit.",
    historical: "The early church prayed from the Psalms, adapted Jewish prayer forms, and developed its own petitions. The Reformation produced collects, pastoral prayers, and extemporaneous prayer as alternatives to Latin liturgical forms.",
    today: "Many evangelical churches have reduced corporate prayer to brief transitions; recovering full, unhurried corporate prayer is one of the most significant liturgical needs of contemporary worship.",
  },
  {
    id: "music",
    label: "Music and Song",
    body: "Psalm 150 commands praise with every instrument in creation. Colossians 3:16: 'Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit, singing to God with gratitude in your hearts.' Ephesians 5:19 adds: 'singing and making music from your heart to the Lord.' The Psalter was the church's first hymnal — 150 songs given by God to his people for their worship. Congregational singing is not a performance to watch or a concert to evaluate but the community's voice raised together. The theology embedded in what we sing is formative — 'lex orandi, lex credendi' (the law of praying/singing is the law of believing). Songs shape doctrine whether we intend them to or not.",
    rationale: "Music engages the whole person — intellect, emotion, body, memory — making it uniquely powerful for both formation and worship.",
    historical: "The church has always sung: chant, polyphony, metrical Psalms, hymns, spiritual songs, gospel music, contemporary worship music. Each form has strengths and carries cultural freight.",
    today: "The choice between Psalms and hymns, hymns and contemporary songs, is not merely aesthetic — it is about what theology the congregation will inhabit through repetition.",
  },
  {
    id: "supper",
    label: "The Lord's Supper",
    body: "The Lord's Supper carries the Greek word eucharistia — thanksgiving. It is the church's great act of thanksgiving for what God has done in Christ. The four actions structure the meal: Jesus took bread, blessed (gave thanks), broke, and gave — a pattern repeated in every proper celebration. The debate over frequency (weekly in the ancient church and many liturgical traditions; monthly or quarterly in much of Protestantism) is significant. Calvin wanted weekly communion in Geneva; the city council refused; he called the quarterly practice 'an invention of the devil.' The debate over open versus closed table touches who belongs to the covenant community and how that is signified. Whatever the practice, the Supper is not a memorial in the thin sense — a bare recollection — but an encounter with the living Christ who is present to his people through the broken bread and poured cup.",
    rationale: "The Supper is the visible Word — the gospel enacted in physical elements that the congregation receives, not merely observes.",
    historical: "Weekly Eucharist was standard in the early church. The Reformation debate between Luther (real presence), Zwingli (memorial), and Calvin (spiritual presence) produced the diversity of Protestant practice.",
    today: "Many evangelical churches are recovering more frequent communion, recognizing that the Supper's infrequency was a Reformation-era accident, not a theological conviction.",
  },
  {
    id: "offering",
    label: "Offering/Giving",
    body: "The offertory — the act of giving — is an act of worship, not a fundraising interruption. 2 Corinthians 9:12: 'This service that you perform is not only supplying the needs of the Lord's people but is also overflowing in many expressions of thanks to God.' When Paul collects the offering for Jerusalem, he speaks of it in the language of sacrifice and priestly service. Giving in the context of worship is a physical, economic confession: this belongs to God, not to me. It is participation in God's economy of grace — receiving from God and returning to God what was always his. The offering that passes the plate is doing something the sermon talks about: putting our treasure where our heart is meant to be.",
    rationale: "Giving enacts the theology of stewardship — all things belong to God, and our giving is a return, not a gift, of what was already his.",
    historical: "The early church collected for the poor (Justin Martyr describes this in the second century). The medieval church developed tithing as obligation; the Reformation recovered voluntary, generous, worshipful giving.",
    today: "The temptation is to treat the offering as a logistical necessity and rush it. Recovering the offertory as a liturgical act — with prayer, intention, and gratitude — restores its formative power.",
  },
];

const DEBATES_ITEMS = [
  {
    id: "contemporary-traditional",
    title: "Contemporary vs. Traditional",
    body: "The 'worship wars' of the 1980s–90s split many congregations and denominations over the introduction of contemporary worship music and informal styles. But the two sides were rarely arguing about music — they were arguing about belonging, cultural ownership, and what constitutes reverence. Traditional worship advocates were not simply nostalgic; they were defending the claim that form shapes content, that ancient language and music carry theological weight that modern idioms may not. Contemporary worship advocates were not simply trend-chasing; they were arguing that accessibility matters, that cultural barriers to the gospel should be removed, that every generation must sing to God in its own voice. The 'blended worship' attempt often satisfies neither side. The generational and cultural dimensions are real: who feels at home shapes who comes. The better question is not 'which style?' but 'what are we actually doing, and is our form serving or subverting the substance?'",
  },
  {
    id: "regulative-normative",
    title: "Regulative vs. Normative Principle",
    body: "The Regulative Principle of Worship (RPW), classically Reformed, holds that the church may include in corporate worship only what God has explicitly commanded in Scripture. Anything not commanded is not permitted. The result is more liturgically conservative worship: no candles, no incense, no dance, no images — because Scripture does not command them. The Normative Principle, held by Lutherans, Anglicans, and most evangelicals, holds that what Scripture does not forbid is permitted in worship. This allows significantly more flexibility: drums, banners, visual art, creative liturgical elements. The debate is not trivial — it is about who has authority over worship: the gathered community's creativity, the tradition's accumulated wisdom, or the text of Scripture alone. Whether drums, candles, or liturgical dance belong in worship depends, in part, on which principle governs.",
  },
  {
    id: "entertainment-encounter",
    title: "Entertainment vs. Encounter",
    body: "Philosopher James K.A. Smith has offered the most penetrating evangelical critique of 'attractional' worship: when worship is designed to attract consumers, it forms them as consumers. The logic of the market — give people what they want, make it as comfortable and entertaining as possible — is not neutral. It shapes desire and expectation. A congregation formed by entertaining worship will expect to be entertained, will evaluate worship on the basis of their subjective experience, and will leave a church that stops meeting their preferences. The distinction is between excellence (doing worship with care, skill, and intention, for God's glory) and spectacle (doing worship impressively, for audience impact). Excellence serves; spectacle performs. The critique is not that quality is wrong — it is that the audience is wrong: worship is not performed for the congregation but for God, with the congregation.",
  },
  {
    id: "high-low",
    title: "High Church vs. Low Church",
    body: "High church traditions (Catholic, Orthodox, Anglican, Lutheran) worship with structured liturgy, ancient texts, the church calendar, vestments, and sacramental centrality. Low church traditions (Baptist, many evangelical and Pentecostal churches) worship with minimal form, direct Scripture engagement, conversational preaching, and free prayer. Each preserves something. High church worship protects against the tyranny of the preacher's personality — the liturgy is larger than any one voice. It connects worshipers to the church across centuries. Low church worship protects against dead formalism — the living voice of Scripture and Spirit cannot be domesticated by ritual. The 'ancient-future' movement, championed by Robert Webber, argued that young evangelicals hunger for what they never had: rootedness, beauty, sacrament, and the long story of the church. The movement of young people toward liturgical churches is real and is not simply aesthetic — it is a theological hunger.",
  },
];

const FORMATION_ITEMS = [
  {
    id: "liturgy-desire",
    title: "Liturgy Shapes Desire",
    body: "James K.A. Smith's central thesis in Desiring the Kingdom: we are not primarily thinking beings but loving beings — we are what we love. And what we do repeatedly, habitually, embodied-ly shapes what we love. Liturgies are not primarily information-delivery systems but desire-formation systems. The mall, the stadium, the smartphone — these are secular liturgies that form desire, that tell a story about the good life, and that shape us into their image through repetition. Christian worship is counter-formation: its repetitions — singing the same songs, praying the same prayers, eating the same bread and cup — are meant to form desire toward the Kingdom of God rather than the kingdoms of this world. This reframes worship planning: the question is not only 'what do we believe?' but 'what kind of people is this liturgy forming?'",
  },
  {
    id: "liturgical-year",
    title: "The Liturgical Year as Formation",
    body: "The church calendar — Advent, Christmas, Epiphany, Lent, Easter, Pentecost, Ordinary Time — is not merely a schedule of celebrations but a formative journey through the whole gospel story. Advent forms patience and longing. Lent forms repentance and honesty about death. Easter forms resurrection joy and hope. Pentecost forms expectation of the Spirit's presence and power. Moving through this cycle year after year embeds the full shape of the gospel into the congregation's body, not just their minds. Many evangelical churches follow a reduced calendar — Christmas and Easter — and as a result form an abbreviated gospel. The recovery of the liturgical year in non-liturgical churches is one of the most significant formation initiatives available to pastors.",
  },
  {
    id: "music-memory",
    title: "Music and Memory",
    body: "Worship songs embed theology through repetition and melody — the brain retains lyrical content differently and more durably than prose. 'Lex orandi, lex credendi' — the law of praying is the law of believing — means that what the congregation sings is what the congregation believes, whether or not those songs are theologically examined. The songs of childhood shape the adult's theology with unusual tenacity. This is why the selection of congregational songs is not an aesthetic or cultural decision but a theological one. Songs that are theologically thin, emotionally manipulative, or centered on subjective experience will form thin, manipulable, experience-centered faith. Songs that sing the full range of Scripture — lament and praise, justice and mercy, the God who is both near and holy — form the congregation in that range.",
  },
  {
    id: "posture-embodiment",
    title: "Posture and Embodiment",
    body: "Kneeling teaches humility. Standing teaches resurrection. Raised hands enact surrender and reception. The sign of the cross marks the body with the central story of the faith. Embodied practices in worship are not optional add-ons or cultural preferences — they are participation in the body's formation. The body is not a vehicle for the soul but the soul's partner in formation. What we do with our bodies in worship shapes what our bodies and souls know about God. Augustine's 'our heart is restless until it rests in thee' is a body-truth before it is a mind-truth. The nearly complete absence of physical gesture in many Protestant traditions is not theological neutrality — it is a theology of disembodiment that runs counter to the Incarnation and the Resurrection of the body.",
  },
  {
    id: "silence",
    title: "Silence in Worship",
    body: "Most Protestant worship is noise from beginning to end — music, announcements, preaching, music. Silence is treated as dead air to be filled, an awkward gap, a production failure. But silence does something noise cannot: it creates space for the congregation to receive, to sit with what has been said, to pray without words, to be present to God without the mediation of human speech. The contemplative tradition — represented by the Desert Fathers, the Quakers, the Taizé community — has preserved what the broader church has lost. Psalm 46:10: 'Be still, and know that I am God.' Habakkuk 2:20: 'The LORD is in his holy temple; let all the earth be silent before him.' Introducing even brief, intentional silence into corporate worship — after Scripture reading, after the sermon, after the prayers — is a countercultural act of profound formation.",
  },
  {
    id: "worship-ethics",
    title: "Integrating Worship and Ethics",
    body: "Amos 5:21-24 returns: God despises their worship because it is decoupled from justice. Isaiah 58 asks the sharp question: 'Is this the kind of fast I have chosen, only a day for people to humble themselves?' — and answers that the fast God requires is loosing chains of injustice, freeing the oppressed, sharing food with the hungry. The liturgy that forms desire, the worship that encounters God — this worship does not stay inside the walls of the church. It overflows into the streets. The kiss toward God (proskuneo) becomes service to neighbor (latreia). The table of the Lord makes the congregation restless at the tables of injustice. True worship and ethics are not two different categories that must be artificially connected — they are the inhale and exhale of the same life before God. Worshipers who are not moved toward neighbor love have worshiped something other than the God of Israel.",
  },
];

const WORSHIP_VIDEOS = [
  { videoId: "0kD7XlGaGN8", title: "What Is Worship?", channel: "Desiring God", description: "John Piper on the nature and purpose of Christian worship — why we worship, what pleases God, and how worship shapes us." },
  { videoId: "NxTbV_zeIQg", title: "The Theology of Worship", channel: "Ligonier Ministries", description: "R.C. Sproul explains the biblical foundations of corporate worship and what makes worship genuinely God-honoring." },
  { videoId: "1pMSAFPqV4I", title: "Regulative Principle vs Normative Principle", channel: "The Gospel Coalition", description: "The two major approaches to worship theology and what Scripture teaches about how we structure our gatherings." },
  { videoId: "Z8lkuuhVkOI", title: "Worship and the Word", channel: "Crossway", description: "How Scripture, preaching, and the sacraments form the center of Christian corporate worship throughout church history." },
];

export default function WorshipTheologyPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_worship-theology_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedElement, setSelectedElement] = usePersistedState<string>("vine_worship-theology_selected_element", "scripture");

  function toggleExpanded(id: string) {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  }

  const selectedEl = ELEMENTS_ITEMS.find(e => e.id === selectedElement) ?? ELEMENTS_ITEMS[0];

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Worship" },
    { id: "elements", label: "Elements of Worship" },
    { id: "debates", label: "The Worship Debates" },
    { id: "formation", label: "Worship as Formation" },
    { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <h1 style={{ fontSize: 34, fontWeight: 900, color: TEXT, marginBottom: 12, letterSpacing: "-0.5px" }}>
            Theology of Worship
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Worship is not a section of the Christian life — it is the whole of it. Explore the theology, elements, debates, and formative power of gathered and scattered worship.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 36, background: CARD, borderRadius: 14, padding: 6, border: `1px solid ${BORDER}` }}>
          {tabs.map(t => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "10px 6px",
                borderRadius: 10,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology of Worship */}
        {activeTab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {THEOLOGY_ITEMS.map(item => (
              <div
                key={item.id}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}
              >
                <button type="button"
                  onClick={() => toggleExpanded(item.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 22px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: 16 }}>{item.title}</span>
                  <span style={{ color: MUTED, fontSize: 20, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>
                    {expanded[item.id] ? "−" : "+"}
                  </span>
                </button>
                {expanded[item.id] && (
                  <div style={{ padding: "0 22px 20px" }}>
                    <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>{item.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Elements of Worship */}
        {activeTab === "elements" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            {/* Left list — sticky */}
            <div style={{ width: 220, flexShrink: 0, position: "sticky", top: 24, display: "flex", flexDirection: "column", gap: 8 }}>
              {ELEMENTS_ITEMS.map(el => (
                <button type="button"
                  key={el.id}
                  onClick={() => setSelectedElement(el.id)}
                  style={{
                    padding: "12px 16px",
                    borderRadius: 10,
                    border: `1px solid ${selectedElement === el.id ? GREEN : BORDER}`,
                    background: selectedElement === el.id ? `${GREEN}14` : "transparent",
                    color: selectedElement === el.id ? GREEN : MUTED,
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s",
                  }}
                >
                  {el.label}
                </button>
              ))}
            </div>

            {/* Right detail */}
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 30 }}>
              <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, marginBottom: 18 }}>{selectedEl.label}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 28 }}>{selectedEl.body}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ background: `${PURPLE}18`, border: `1px solid ${PURPLE}30`, borderRadius: 10, padding: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 800, fontSize: 13, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Theological Rationale</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{selectedEl.rationale}</p>
                </div>
                <div style={{ background: `${GREEN}0F`, border: `1px solid ${GREEN}25`, borderRadius: 10, padding: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Historical Practice</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{selectedEl.historical}</p>
                </div>
                <div style={{ background: `#1E1E32`, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                  <div style={{ color: MUTED, fontWeight: 800, fontSize: 13, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>How It Functions Today</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{selectedEl.today}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: The Worship Debates */}
        {activeTab === "debates" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 20 }}>
            {DEBATES_ITEMS.map(card => (
              <div
                key={card.id}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}
              >
                <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 18, marginBottom: 16 }}>{card.title}</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Worship as Formation */}
        {activeTab === "formation" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FORMATION_ITEMS.map(item => (
              <div
                key={item.id}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}
              >
                <button type="button"
                  onClick={() => toggleExpanded(`formation-${item.id}`)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 22px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ color: PURPLE, fontWeight: 800, fontSize: 16 }}>{item.title}</span>
                  <span style={{ color: MUTED, fontSize: 20, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>
                    {expanded[`formation-${item.id}`] ? "−" : "+"}
                  </span>
                </button>
                {expanded[`formation-${item.id}`] && (
                  <div style={{ padding: "0 22px 20px" }}>
                    <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>{item.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Videos */}
        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {WORSHIP_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      </main>
      <Footer />
    </div>
  );
}
