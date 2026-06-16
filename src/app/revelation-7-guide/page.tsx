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

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const videoItems = [
  { videoId: "5WJHLfbJGiY", title: "Revelation 7 - The 144,000 and the Great Multitude" },
  { videoId: "NJqo1WRcX_0", title: "Who Are the 144,000? Revelation 7 Explained" },
  { videoId: "bHvXe0AHvR4", title: "The Great Multitude - Revelation 7:9-17" },
  { videoId: "3eUYI4b_QKs", title: "Coming Through the Tribulation - Revelation 7" },
];

const KEY_THEMES = [
  {
    id: "four-angels",
    color: TEAL,
    title: "The Four Angels Holding Back the Wind of Judgment (vv.1-3)",
    body: "Chapter 7 opens with a dramatic scene of restraint: four angels standing at the four corners of the earth, holding back the four winds so that no wind would blow on the land, sea, or any tree. This image of withheld wind suggests that the next phase of judgment is ready but being deliberately delayed. Before anything more can happen, another angel rises from the east (the direction of the rising sun &mdash; associated with God&rsquo;s coming, cf. Ezek 43:2) carrying the seal of the living God and crying out: &ldquo;Do not harm the land or the sea or the trees until we put a seal on the foreheads of the servants of our God.&rdquo; The four corners of the earth indicate a cosmic scope; the four winds suggest universal judgment. But judgment waits. God&rsquo;s protective action on behalf of his people precedes the next wave of judgment. This is not an afterthought but a structural theological point: God seals before he strikes. His people are marked before the storm breaks. Protection is not an escape from history but a securing within it."
  },
  {
    id: "144000",
    color: GOLD,
    title: "The Sealing of 144,000 from Every Tribe of Israel (vv.4-8)",
    body: "John hears the number of the sealed: 144,000 from every tribe of Israel, 12,000 from each of twelve tribes. The list that follows is both recognizable and strange: it begins with Judah (not Reuben, the firstborn), includes Manasseh but not Dan or Ephraim directly. These variations from the standard tribal lists signal that John is not simply reciting a census but constructing a symbolic number. The mathematics are deliberate: 12 tribes x 12,000 = 144,000; 12 x 12 x 1,000 = the perfect square of the people of God multiplied to completeness. The seal echoes Ezekiel 9:4, where God commands an angel to mark the foreheads of those who grieve over Jerusalem&rsquo;s sins before the destroying angels are released. The 144,000 are the protected people of God in the midst of judgment. Interpreters divide on whether this is literal Israel, the church as the new Israel, or a Jewish remnant within a broader people of God. The weight of Revelation&rsquo;s symbolic logic points toward the 144,000 representing the complete, sealed people of God on earth &mdash; those who are protected through tribulation, not from it."
  },
  {
    id: "great-multitude",
    color: ROSE,
    title: "The Great Multitude That No One Could Count (vv.9-12)",
    body: "The vision shifts dramatically. John hears the number 144,000; then he looks and sees something entirely different: &ldquo;a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb.&rdquo; They are dressed in white robes and hold palm branches in their hands. Their cry is jubilant: &ldquo;Salvation belongs to our God, who sits on the throne, and to the Lamb!&rdquo; The angels, elders, and four living creatures all fall on their faces in worship, adding: &ldquo;Amen! Praise and glory and wisdom and thanks and honor and power and strength be to our God for ever and ever. Amen!&rdquo; This great multitude is the counterimage to the 144,000: where the 144,000 is a numbered, structured list of the people of God organized by tribe, the great multitude is innumerable, from every ethnic group and language. The white robes signal purity and righteousness; the palm branches evoke the Feast of Tabernacles (Lev 23:40) and the triumphal entry (John 12:13), both celebrations of God&rsquo;s saving presence and victory."
  },
  {
    id: "elder-answer",
    color: PURPLE,
    title: "The Elder&rsquo;s Identification: These Are They Who Have Come Through Tribulation (vv.13-14)",
    body: "One of the twenty-four elders asks John directly: &ldquo;These in white robes &mdash; who are they, and where did they come from?&rdquo; John defers: &ldquo;Sir, you know.&rdquo; The elder answers: &ldquo;These are they who have come out of the great tribulation; they have washed their robes and made them white in the blood of the Lamb.&rdquo; The identification is crucial for understanding the chapter. The great multitude are not people who escaped tribulation; they are people who have come through it (&ldquo;ek tees thlipseos tees megales&rdquo; &mdash; out of the tribulation, the great one). Their white robes were made white not by avoiding suffering but by being washed in the blood of the Lamb &mdash; one of Revelation&rsquo;s most vivid paradoxes: blood that cleans. The Greek word &ldquo;thlipsis&rdquo; means pressure, anguish, tribulation &mdash; the experience of being squeezed by circumstances beyond control. Whether this refers to a specific end-time period of persecution or to the whole experience of the church under pressure across history, the point is the same: the multitude&rsquo;s white robes are the result of faithful perseverance through suffering, not exemption from it."
  },
  {
    id: "eternal-blessedness",
    color: GREEN,
    title: "The Eternal Blessedness of the Redeemed (vv.15-17)",
    body: "The chapter closes with one of the most beautiful passages in Revelation &mdash; the promises of what the redeemed will experience before the throne. &ldquo;They are before the throne of God and serve him day and night in his temple; and he who sits on the throne will shelter them with his presence. Never again will they hunger; never again will they thirst. The sun will not beat down on them, nor any scorching heat. For the Lamb at the center of the throne will be their shepherd; he will lead them to springs of living water. And God will wipe away every tear from their eyes.&rdquo; The Lamb who was slain is now the shepherd &mdash; another paradox held in tension throughout Revelation. The shelter of God&rsquo;s presence (Greek: &ldquo;skenosei&rdquo; &mdash; will tabernacle over them) echoes the Shekinah glory of the wilderness tabernacle, the divine dwelling with Israel. No hunger, no thirst, no scorching heat &mdash; these reverse the suffering of the wilderness and the tribulation. Springs of living water echo Psalm 23 and Isaiah 49:10. The final image &mdash; God wiping every tear &mdash; is perhaps the most intimate act of divine care in all of Scripture, appearing again at the new creation (Rev 21:4)."
  },
];

const VERSE_SECTIONS = [
  {
    id: "v1",
    color: TEAL,
    title: "Verse 1: Four Angels at the Corners of the Earth",
    body: "The chapter opens with John seeing four angels &ldquo;standing at the four corners of the earth, holding back the four winds of the earth to prevent any wind from blowing on the land or on the sea or on any tree.&rdquo; The &ldquo;four corners&rdquo; is a biblical idiom for the totality of the earth (cf. Is 11:12; Ezek 7:2) &mdash; these angels have cosmic scope. The four winds in Old Testament and Jewish tradition could represent divine judgment and catastrophe (cf. Jer 49:36; Dan 7:2; Zech 2:6). Holding the winds back is an act of divine restraint &mdash; judgment is ready but paused. The passive construction (&ldquo;to prevent&rdquo;) suggests these angels are executing a divine command. Chapter 6 closed with the terrifying question &ldquo;who can withstand?&rdquo; Chapter 7 immediately shows God acting to protect his people before the answer is revealed. The structure is pastoral: God&rsquo;s protective concern for his people is established before the next judgment falls."
  },
  {
    id: "v2-3",
    color: GOLD,
    title: "Verses 2-3: The Seal of the Living God",
    body: "A fifth angel appears, &ldquo;coming up from the east, having the seal of the living God.&rdquo; He cries with a loud voice to the four angels: &ldquo;Do not harm the land or the sea or the trees until we put a seal on the foreheads of the servants of our God.&rdquo; The seal (&ldquo;sfragis&rdquo;) of the living God is God&rsquo;s own mark of ownership and protection. The background is Ezekiel 9:4-6, where God commanded a mark on the foreheads of the faithful before the destroying angels were released on Jerusalem. The mark is on the &ldquo;forehead&rdquo; &mdash; the most visible part of the body, the seat of intention and identity. In the Roman world, slaves were sometimes branded on the forehead with their owner&rsquo;s mark. The sealed servants of God are marked as belonging to &ldquo;the living God&rdquo; &mdash; in contrast to the dead idols of Rome&rsquo;s imperial cult. This seal will stand in direct contrast to the mark of the beast in chapter 13: two competing marks, two competing loyalties, two competing lords. The seal does not protect from physical suffering but marks God&rsquo;s people as his own through whatever comes."
  },
  {
    id: "v4-8",
    color: PURPLE,
    title: "Verses 4-8: The 144,000 from the Twelve Tribes",
    body: "The number sealed is 144,000, with 12,000 from each of twelve tribes. The tribes listed are: Judah, Reuben, Gad, Asher, Naphtali, Manasseh, Simeon, Levi, Issachar, Zebulun, Joseph, Benjamin. Several features stand out. Judah is listed first &mdash; the tribe of the Messiah &mdash; rather than Reuben the firstborn. Dan is omitted entirely; Manasseh appears instead (Dan&rsquo;s territory). Early church interpreters connected the omission of Dan to traditions linking Dan with apostasy (Jub. 44:28-29; some fathers connected it to Antichrist). Levi appears &mdash; normally excluded from land inheritance as the priestly tribe &mdash; suggesting this is not a literal land census but a symbolic-theological list of the whole people of God. The number 144,000 = 12 x 12 x 1,000: twelve (the number of the people of God &mdash; tribes + apostles) multiplied by itself and then by 1,000 (a round number signifying completeness). It is the full, complete, sealed people of God. In Revelation 14:1-5, the 144,000 appear on Mount Zion with the Lamb, described as the &ldquo;first fruits&rdquo; of God and the Lamb &mdash; further suggesting they are the whole redeemed community."
  },
  {
    id: "v9-10",
    color: ROSE,
    title: "Verses 9-10: The Innumerable Multitude",
    body: "After hearing 144,000, John &ldquo;looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb.&rdquo; The contrast is structurally significant: John hears a numbered, organized list of tribes; he sees an innumerable, unstructured crowd from every ethnic group. This is the same literary technique used in 5:5-6, where John hears &ldquo;the Lion of Judah&rdquo; and sees a slaughtered Lamb. The hearing and seeing are two perspectives on the same reality. The 144,000 and the great multitude are likely the same community seen from two angles: the complete, protected people of God (144,000) and the same people in their full, multiethnic, innumerable glory before the throne (the great multitude). They are clothed in white robes and hold palm branches. Their cry: &ldquo;Salvation belongs to our God, who sits on the throne, and to the Lamb!&rdquo; &mdash; the Greek &ldquo;soteria&rdquo; meaning rescue, deliverance, salvation in its fullest sense. Salvation is not theirs to claim but belongs to God; they are its recipients and witnesses."
  },
  {
    id: "v11-12",
    color: TEAL,
    title: "Verses 11-12: Angelic Worship",
    body: "All the angels standing around the throne, the elders, and the four living creatures fall on their faces before the throne and worship God with a sevenfold doxology: &ldquo;Amen! Praise and glory and wisdom and thanks and honor and power and strength be to our God for ever and ever. Amen!&rdquo; This sevenfold doxology mirrors the sevenfold blessing of Revelation 5:12 (power, riches, wisdom, strength, honor, glory, blessing), with subtle variations &mdash; thanksgiving (&ldquo;eucharistia&rdquo;) is added here, connecting the heavenly worship to the Eucharistic tradition of the church. The falling on faces is the posture of overwhelming awe before divine majesty &mdash; the same posture John himself takes throughout Revelation. The angelic choir joins the redeemed multitude in what becomes the great unified worship of the whole cosmos: the redeemed from earth, the angels of heaven, the four living creatures representing creation, and the twenty-four elders representing the whole people of God &mdash; all prostrate, all declaring: salvation, wisdom, power, and strength to God alone, for ever."
  },
  {
    id: "v13-14",
    color: GOLD,
    title: "Verses 13-14: The Great Tribulation and the White Robes",
    body: "&ldquo;Then one of the elders asked me, &lsquo;These in white robes &mdash; who are they, and where did they come from?&rsquo;&rdquo; John defers: &ldquo;Sir, you know.&rdquo; The elder answers: &ldquo;These are they who have come out of the great tribulation; they have washed their robes and made them white in the blood of the Lamb.&rdquo; The Greek (&ldquo;ek tees thlipseos tees megales&rdquo;) uses &ldquo;ek&rdquo; &mdash; out of, through &mdash; not &ldquo;apo&rdquo; (away from, before). These are not people who were raptured before tribulation began; they are people who came through it. The word &ldquo;thlipsis&rdquo; (tribulation, pressure, anguish) was already used by Jesus of the disciples&rsquo; experience in John 16:33 (&ldquo;In this world you will have trouble [thlipsin]&rdquo;) and by Paul as the normal experience of Christians in Acts 14:22. The &ldquo;great tribulation&rdquo; may be the specific period of persecution under Rome or the whole experience of the church under pressure across history. The washing of robes in blood &mdash; making them white &mdash; is Revelation&rsquo;s most vivid paradox: the blood of the Lamb, shed at the cross, is the agent of purification. Righteousness comes not from self-effort but from being washed in Christ&rsquo;s atoning death."
  },
  {
    id: "v15",
    color: GREEN,
    title: "Verse 15: Serving Before the Throne",
    body: "&ldquo;Therefore, they are before the throne of God and serve him day and night in his temple; and he who sits on the throne will shelter them with his presence.&rdquo; The word &ldquo;therefore&rdquo; connects their status directly to the washing: because their robes are white in the Lamb&rsquo;s blood, they stand before the throne. Their standing is not earned but granted. The service (&ldquo;latreuousin&rdquo; &mdash; priestly, cultic service) before the throne day and night suggests a continuous, unending worship that transforms the whole of existence into liturgy. The temple (&ldquo;naos&rdquo; &mdash; the sanctuary, the inner shrine) is the holy of holies of God&rsquo;s own presence. And God &ldquo;will shelter them with his presence&rdquo; &mdash; the Greek is &ldquo;skenosei ep&rsquo; autous&rdquo; &mdash; will tabernacle over them, will spread his tent over them. This is the language of the divine Shekinah glory that dwelt in the wilderness tabernacle (Ex 25:8; 40:34-38). The New Jerusalem will have no separate temple because &ldquo;the Lord God Almighty and the Lamb are its temple&rdquo; (Rev 21:22) &mdash; the whole city is God&rsquo;s dwelling, and God&rsquo;s dwelling is with his people."
  },
  {
    id: "v16-17",
    color: ROSE,
    title: "Verses 16-17: No Hunger, No Thirst, No Tears",
    body: "The chapter closes with its most intimate promises: &ldquo;Never again will they hunger; never again will they thirst. The sun will not beat down on them, nor any scorching heat. For the Lamb at the center of the throne will be their shepherd; he will lead them to springs of living water. And God will wipe away every tear from their eyes.&rdquo; The language echoes Isaiah 49:10 (the great Servant Song of the new exodus) almost verbatim: &ldquo;They will neither hunger nor thirst, nor will the desert heat or the sun beat down on them. He who has compassion on them will guide them and lead them beside springs of water.&rdquo; Revelation is interpreting the fulfillment of Isaiah&rsquo;s new exodus in the eternal gathering of the redeemed. The Lamb as shepherd is a powerful double image: the sacrificial lamb who was slain is also the good shepherd who leads to life. The springs of living water echo both Psalm 23:2 and Jesus&rsquo;s promise of living water in John 4:10, 7:38. And the final image &mdash; God personally wiping every tear from every eye &mdash; is the most tender act in the entire book: not the cosmic victory of judgment, but the intimate gesture of a father comforting a child."
  },
];

const APPLICATION_SECTIONS = [
  {
    id: "app1",
    color: ROSE,
    title: "The Vision of the Countless Multitude and Global Christian Unity",
    body: "The great multitude of Revelation 7:9 is the most comprehensive image of the church in all of Scripture: &ldquo;from every nation, tribe, people and language&rdquo; &mdash; the Greek uses four different words for ethnic-linguistic grouping to make the point as exhaustive as possible. This vision was given to a church that in the first century was still navigating the boundary between Jewish and Gentile Christianity. It was given in a Roman empire that used ethnic and social stratification to maintain power. It was given to communities in Asia Minor that were small, marginalized, and often at odds with one another. The vision declares: the worshiping community before the throne is not the church of any single nation, culture, ethnicity, or language group. It is all of them, standing together. This has profound implications for global Christian unity today. The instinct to center one culture&rsquo;s Christianity as the default &mdash; whether that is Western evangelical, Global South charismatic, or any other &mdash; runs counter to the throne room vision of Revelation 7. The diversity of the multitude is not incidental to the scene; it is the point. &ldquo;Salvation belongs to our God&rdquo; &mdash; and that God has gathered a people from everywhere."
  },
  {
    id: "app2",
    color: GOLD,
    title: "What Does &ldquo;Coming Through Tribulation&rdquo; Look Like for Believers Today?",
    body: "The elder&rsquo;s identification of the great multitude &mdash; &ldquo;these are they who have come out of the great tribulation&rdquo; &mdash; places the emphasis not on being removed from suffering but on being sustained through it. The Greek &ldquo;ek&rdquo; (out of, through) is significant: these are people who experienced tribulation and came through it with their robes washed in the Lamb&rsquo;s blood. For many Christians in the global church today, tribulation is not a future eschatological event but a present daily reality: persecution in North Korea, Pakistan, Nigeria, China; economic marginalization; family rejection for converting to Christianity; workplace discrimination. The vision of Revelation 7 speaks directly to them: your suffering is not the final word; God is sealing you; you are being marked as his; the great multitude includes you. For Christians in contexts of relative comfort, the passage raises a different question: What does it mean to walk alongside brothers and sisters who are in the great tribulation right now? The sealed community of the 144,000 and the great multitude are not separated by geography or comfort level &mdash; they are the one people of God, sealed together."
  },
  {
    id: "app3",
    color: GREEN,
    title: "The Seal of God as Identity and Protection",
    body: "The seal of the living God that the angel places on the foreheads of God&rsquo;s servants (v.3) is the counter-image to the mark of the beast in chapter 13. Both are marks of ownership and allegiance; both determine what their bearers can and cannot do in the social-economic order. The beast&rsquo;s mark enables buying and selling in the Roman economic system; God&rsquo;s seal marks his people as belonging to him even when that exclusion from the world&rsquo;s economy is costly. For the original readers of Revelation, this was not abstract: Roman imperial religion required participation in the cult of the emperor, and economic life was organized around guild memberships that required pagan religious observance. To refuse was to be economically marginalized. God&rsquo;s seal said: you belong to me more than you belong to Rome. The seal does not prevent suffering; it ensures identity. You are mine. For contemporary believers, the question the seal raises is: What allegiances are we carrying on our foreheads? What marks of ownership have we allowed the culture, economy, or political system to place on us? The sealed people of God are those whose primary identity is &ldquo;servant of the living God.&rdquo;"
  },
  {
    id: "app4",
    color: PURPLE,
    title: "God Wiping Every Tear: The Pastoral Weight of Revelation 7:17",
    body: "The final image of Revelation 7 is God personally wiping every tear from every eye. This is a pastoral image of extraordinary intimacy. It appears in the middle of the book (here, ch.7) and at the very end (Rev 21:4), forming a frame around the entire vision of the new creation. The tears God wipes away are the tears of tribulation: the grief of those who lost family to persecution, the grief of the martyrs under the altar who cried &ldquo;how long?&rdquo; in chapter 6, the grief of every person who carried their cross through the great tribulation. This image is the answer to the church&rsquo;s grief in every age. It is not a spiritual metaphor for the resolution of theological tension &mdash; it is the specific, material consolation of those who have genuinely suffered. The church that holds Revelation 7 with open hands can say to its suffering members: every tear is known; none are forgotten; God himself will one day wipe them all away. This does not make present suffering less real, but it places it within a frame that is ultimately not defined by the suffering but by the God who sees, seals, and sustains &mdash; and who wipes every tear with his own hand."
  },
];

export default function Revelation7GuidePage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0a0a1a 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ background: PURPLE, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>REVELATION</span>
            <span style={{ color: MUTED, fontSize: 14 }}>Chapter 7 &bull; 17 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 900, margin: "0 0 16px", lineHeight: 1.15, color: TEXT }}>
            Revelation 7: The 144,000 Sealed and the Great Multitude Before the Throne
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,2vw,1.1rem)", color: MUTED, maxWidth: 700, lineHeight: 1.75, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "An interlude between the sixth and seventh seals answering the question: &ldquo;Who can stand?&rdquo; Two visions respond: the 144,000 sealed Israelites (the protected people of God on earth) and the innumerable multitude from every nation standing before the throne in heaven." }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto", background: CARD }}>
        <div style={{ display: "flex", maxWidth: 900, margin: "0 auto", padding: "0 16px" }}>
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "16px 20px",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
                color: activeTab === t ? PURPLE : MUTED,
                borderBottom: activeTab === t ? `2px solid ${PURPLE}` : "2px solid transparent",
                transition: "color 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "Overview" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Overview of Revelation 7</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Revelation 7 is a carefully placed interlude &mdash; a pause inserted between the sixth seal (6:12-17) and the seventh seal (8:1) &mdash; that directly answers the terrifying question with which chapter 6 closed: &ldquo;The great day of their wrath has come, and who can withstand it?&rdquo; (6:17). The answer comes in two visions that operate on different registers: the 144,000 sealed on earth (who can stand?) and the great multitude in heaven (those who have already come through and now stand before the throne). Together they form Revelation&rsquo;s most comprehensive answer to the question of God&rsquo;s people in the midst of judgment." }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
              {[
                { label: "Book", value: "Revelation" },
                { label: "Chapter", value: "7" },
                { label: "Verse Count", value: "17" },
                { label: "Literary Type", value: "Interlude" },
                { label: "Central Question", value: "Who can stand?" },
                { label: "Answer", value: "The sealed and the multitude" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: TEXT }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12 }}>Structure: Two Interlocking Visions</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The literary structure of chapter 7 is carefully organized around a &ldquo;hear then see&rdquo; pattern that Revelation uses elsewhere (notably in 5:5-6, where John hears &ldquo;the Lion of Judah&rdquo; and sees a slaughtered Lamb). Here, John hears the number of the sealed (144,000, organized by tribe) and then sees the great multitude (innumerable, from every nation). Most scholars understand these as two perspectives on the same reality &mdash; the complete people of God seen first as protected on earth, then as glorified in heaven." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${GOLD}33`, padding: 16 }}>
                  <div style={{ color: GOLD, fontWeight: 700, marginBottom: 8 }}>Vision 1: The 144,000 (vv.1-8)</div>
                  <ul style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, paddingLeft: 16, margin: 0 }}>
                    <li>Four angels holding back judgment</li>
                    <li>Sealing before harm comes</li>
                    <li>144,000 from twelve tribes</li>
                    <li>Complete, structured, organized</li>
                    <li>Perspective: earth, present protection</li>
                  </ul>
                </div>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${ROSE}33`, padding: 16 }}>
                  <div style={{ color: ROSE, fontWeight: 700, marginBottom: 8 }}>Vision 2: The Great Multitude (vv.9-17)</div>
                  <ul style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, paddingLeft: 16, margin: 0 }}>
                    <li>Innumerable crowd before the throne</li>
                    <li>Every nation, tribe, people, language</li>
                    <li>White robes, palm branches</li>
                    <li>Through tribulation, washed in blood</li>
                    <li>Perspective: heaven, eternal blessedness</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 16, color: TEXT }}>Chapter 7 at a Glance</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "7:1-3", color: TEAL, label: "Four Angels", desc: "Holding back the four winds; the sealing angel from the east" },
                  { ref: "7:4-8", color: GOLD, label: "144,000 Sealed", desc: "12,000 from each of twelve tribes of Israel; the complete, protected people of God" },
                  { ref: "7:9-12", color: ROSE, label: "Great Multitude", desc: "Innumerable crowd from every nation; white robes, palm branches; &ldquo;Salvation belongs to our God&rdquo;" },
                  { ref: "7:13-14", color: PURPLE, label: "Elder Explains", desc: "These came through the great tribulation; robes washed white in the blood of the Lamb" },
                  { ref: "7:15-17", color: GREEN, label: "Eternal Blessedness", desc: "Serving before the throne; God shelters them; no hunger, thirst, or scorching; Lamb as shepherd; God wipes every tear" },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 13, minWidth: 60, paddingTop: 2 }}>{item.ref}</span>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 13, minWidth: 120, paddingTop: 2 }}>{item.label}</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12, color: TEXT }}>Old Testament Background</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The imagery of chapter 7 draws deeply from the Old Testament. The sealing echoes Ezekiel 9:4-6 (mark on foreheads before judgment). The tribal structure echoes Numbers 1-2 (the census of Israel before entering Canaan). The palm branches echo Leviticus 23:40 (the Feast of Tabernacles) and perhaps 1 Maccabees 13:51 (Simon entering Jerusalem in triumph). The promise of no hunger, thirst, or scorching heat quotes Isaiah 49:10 directly. The springs of living water echo Psalm 23 and Isaiah 35:6-7. And the wiping of tears appears first in Isaiah 25:8. Revelation 7 is a tapestry of Old Testament promise fulfilled in the Lamb&rsquo;s victory." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Ezekiel 9:4",
                  "Numbers 1:1",
                  "Leviticus 23:40",
                  "Isaiah 49:10",
                  "Isaiah 25:8",
                  "Isaiah 35:6",
                  "Psalm 23:2",
                  "Zechariah 6:5",
                  "Daniel 12:1",
                ].map(ref => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Key Themes in Revelation 7</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Revelation 7 is an interlude that carries some of the most important theological content in the entire book. Five major themes shape the chapter, each answering a different dimension of the question &ldquo;who can stand?&rdquo;" }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {KEY_THEMES.map(section => (
                <div key={section.id} style={{ background: CARD, border: `1px solid ${open === section.id ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpen(open === section.id ? null : section.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                    </div>
                    <span style={{ color: section.color, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>{open === section.id ? "-" : "+"}</span>
                  </button>
                  {open === section.id && (
                    <div style={{ padding: "0 20px 20px 42px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12 }}>Greek Word Study</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
                {[
                  { word: "sfragizo", transliteration: "(sfra-GI-zo)", meaning: "to seal &mdash; the act of marking with an official seal of ownership and protection; used here of God marking his servants before judgment falls" },
                  { word: "thlipsis", transliteration: "(THLIP-sis)", meaning: "tribulation, pressure, anguish &mdash; from the verb thlibo (to press, squeeze); the experience of being crushed by circumstances; used by Jesus in John 16:33 and here in the &lsquo;great tribulation&rsquo;" },
                  { word: "leukos", transliteration: "(LEU-kos)", meaning: "white, bright &mdash; used of the white robes of the multitude; in Revelation white consistently symbolizes the righteousness and purity given to the redeemed by the Lamb" },
                  { word: "laos", transliteration: "(la-OS)", meaning: "people &mdash; the covenant people of God, often referring specifically to Israel in the LXX; used here to describe the servants of God who are sealed as his people" },
                  { word: "ethnos", transliteration: "(ETH-nos)", meaning: "nation, Gentile &mdash; the word from which we get &lsquo;ethnic&rsquo;; in Rev 7:9 the great multitude comes from every ethnos, signaling the universal scope of redemption" },
                  { word: "skenosei", transliteration: "(skay-NO-say)", meaning: "will tabernacle, will shelter &mdash; from skenoo (to pitch a tent, to dwell); God will &lsquo;tabernacle over&rsquo; the redeemed, echoing the Shekinah glory of the wilderness; also echoes John 1:14" },
                ].map(item => (
                  <div key={item.word} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "14px 16px" }}>
                    <div style={{ color: GOLD, fontWeight: 800, fontSize: 16, fontStyle: "italic", marginBottom: 4 }}>{item.word}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginBottom: 6 }}>{item.transliteration}</div>
                    <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.meaning }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>Key Symbol: White Robes and Palm Branches</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}
                dangerouslySetInnerHTML={{ __html: "The white robes (&ldquo;stolas leukos&rdquo;) worn by the great multitude appear throughout Revelation as the garment of the redeemed. In 3:4-5, the faithful in Sardis are promised white robes. In 6:11, the martyrs under the altar are given white robes. Here in 7:9, the whole multitude appears in white. In 19:8, the fine linen, bright and clean, is the righteous acts of the saints. White robes are not earned by achievement; in 7:14 they are explicitly the result of being washed in the blood of the Lamb. Righteousness is imputed, not achieved." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The palm branches echo two key Old Testament contexts: (1) the Feast of Tabernacles (Sukkot) in Leviticus 23:40, where worshipers waved palm branches in celebration of God&rsquo;s provision and dwelling with his people in the wilderness; and (2) the triumphal entry of Jesus into Jerusalem (John 12:13), where crowds waved palms in acclamation. Both backgrounds are active in Revelation 7: the redeemed celebrate God&rsquo;s provision and presence, and they acclaim the victorious king. Palm branches in the ancient world also signaled military victory &mdash; the crowd before the throne is celebrating a conquest, but it is the Lamb&rsquo;s conquest through sacrificial death." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Verse by Verse: Revelation 7:1-17</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "A careful walk through all 17 verses of Revelation 7, examining the structure, background, and meaning of each passage. Click any section to expand the commentary." }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {VERSE_SECTIONS.map(section => (
                <div key={section.id} style={{ background: CARD, border: `1px solid ${open === section.id ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpen(open === section.id ? null : section.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                    </div>
                    <span style={{ color: section.color, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>{open === section.id ? "-" : "+"}</span>
                  </button>
                  {open === section.id && (
                    <div style={{ padding: "0 20px 20px 40px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: 24, marginTop: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12 }}>Verse References in Context</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16, fontSize: 14 }}
                dangerouslySetInnerHTML={{ __html: "Hover over any reference to see the verse text. These are the key passages that illuminate Revelation 7&rsquo;s Old Testament background and New Testament resonances." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Revelation 7:1",
                  "Revelation 7:3",
                  "Revelation 7:9",
                  "Revelation 7:14",
                  "Revelation 7:17",
                  "Ezekiel 9:4",
                  "Isaiah 49:10",
                  "Isaiah 25:8",
                  "Psalm 23:2",
                  "John 16:33",
                  "Revelation 6:17",
                  "Revelation 21:4",
                ].map(ref => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Application: The Sealed and the Multitude Today</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "How does the vision of the countless multitude from every nation strengthen global Christian unity? What does &ldquo;coming through tribulation&rdquo; look like for believers today? These questions &mdash; which Revelation 7 addresses directly &mdash; have profound pastoral implications for the contemporary church." }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {APPLICATION_SECTIONS.map(section => (
                <div key={section.id} style={{ background: CARD, border: `1px solid ${open === section.id ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpen(open === section.id ? null : section.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                    </div>
                    <span style={{ color: section.color, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>{open === section.id ? "-" : "+"}</span>
                  </button>
                  {open === section.id && (
                    <div style={{ padding: "0 20px 20px 42px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12 }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "The great multitude comes from &ldquo;every nation, tribe, people and language.&rdquo; How does this vision challenge any tendency in your church tradition to center one culture&rsquo;s expression of Christianity as normative?",
                  "The 144,000 are sealed before judgment falls &mdash; protected through tribulation, not from it. How does this shape your theology of suffering and God&rsquo;s protection?",
                  "The great multitude&rsquo;s white robes were made white by being washed in the blood of the Lamb. What does it mean in practical terms to find your righteousness in Christ rather than in your own moral performance?",
                  "The elder says the multitude &ldquo;came out of the great tribulation.&rdquo; Who in your awareness is living in that tribulation right now? How are you standing with them?",
                  "God will wipe every tear from every eye. Which specific tears in your life or your community do you most need to bring to this promise today?",
                  "How does the vision of God personally wiping tears change the way you comfort people who are grieving rather than trying to explain their suffering?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: ROSE, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12 }}>Video Resources: Revelation 7</h3>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Deepen your study of the 144,000, the great multitude, and the eternal blessedness of the redeemed through these video resources." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "10px 14px" }}>
                      <div style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `linear-gradient(135deg, #05050f 0%, ${CARD} 100%)`, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12 }}>Closing: The Answer to &ldquo;Who Can Stand?&rdquo;</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Chapter 6 closed with a question that shook heaven and earth: &ldquo;who can withstand?&rdquo; Chapter 7 is the answer. Who can stand? Those who are sealed by the living God &mdash; marked as his, protected as his servants, held through tribulation rather than removed from it. Who can stand? The great multitude, innumerable, from every corner of the earth, clothed in white because they have been washed in the Lamb&rsquo;s blood, standing before the throne with palm branches and voices raised. The answer is not &ldquo;those who were good enough&rdquo; or &ldquo;those who escaped&rdquo; but &ldquo;those who came through, sealed by God and washed by the Lamb.&rdquo; This is the pastoral heart of Revelation 7 &mdash; and the pastoral heart of the gospel." }}
              />
              <blockquote style={{ borderLeft: `4px solid ${PURPLE}`, paddingLeft: 20, margin: 0 }}>
                <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;For the Lamb at the center of the throne will be their shepherd; he will lead them to springs of living water. And God will wipe away every tear from their eyes.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13 }}>-- Revelation 7:17 (NIV)</cite>
              </blockquote>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
