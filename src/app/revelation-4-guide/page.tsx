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
  { videoId: "lqxLknGUFVU", title: "Revelation 4 - The Throne Room of Heaven" },
  { videoId: "gfuyQFXPNCA", title: "Holy Holy Holy - Worship in Revelation 4" },
  { videoId: "VrNFDCHXGZM", title: "The Four Living Creatures - Revelation 4 Commentary" },
  { videoId: "gxzjgBSCWgI", title: "Revelation 4 and 5 - The Heavenly Worship Scene" },
];

interface AccordionItem {
  id: string;
  label: string;
  color: string;
  body: string;
}

const verseByVerseItems: AccordionItem[] = [
  {
    id: "v1",
    label: "Verse 1: The Open Door and the Summons to Heaven",
    color: GOLD,
    body: "The chapter opens with a dramatic transition: &ldquo;After this I looked, and there before me was a door standing open in heaven. And the voice I had first heard speaking to me like a trumpet said, &lsquo;Come up here, and I will show you what must take place after this.&rsquo;&rdquo; (4:1). The phrase &ldquo;after this&rdquo; (<em>meta tauta</em>) signals a new visionary movement; John&rsquo;s perspective shifts from the earth (the seven churches) to the opened heavens above. The &ldquo;door standing open&rdquo; is a threshold of divine access &mdash; in the ancient world a door into a king&rsquo;s throne room was opened only at the sovereign&rsquo;s invitation. John is not barging in; he is summoned.<br><br>The voice like a trumpet recalls the inaugural vision of chapter 1:10 &mdash; the voice of the risen Christ. The command &ldquo;Come up here&rdquo; echoes the prophetic tradition of heavenly ascent: Moses ascending Sinai (Exodus 19:20), Isaiah&rsquo;s throne room vision (Isaiah 6), Ezekiel&rsquo;s chariot vision (Ezekiel 1), and Daniel&rsquo;s heavenly court (Daniel 7). John joins a great stream of prophetic seers who were granted a glimpse behind the veil of the visible world to see the spiritual reality that undergirds it. The phrase &ldquo;what must take place after this&rdquo; alludes to Daniel 2:29,45, where the same Aramaic idiom (<em>ma di leheve achar denah</em>) describes the revelation of what God has sovereignly determined for history.",
  },
  {
    id: "v2",
    label: "Verse 2: In the Spirit and the Throne",
    color: PURPLE,
    body: "John is immediately transported &ldquo;in the Spirit&rdquo; &mdash; the same prophetic posture described in 1:10. This is not ordinary human consciousness but a heightened state of prophetic receptivity in which the veil between the visible and invisible order is thinned, allowing John to perceive what is always true but not ordinarily visible. He is not traveling through space; he is being shown what is spiritually real about the present order.<br><br>And the first and most overwhelming thing he sees is a throne: &ldquo;and there before me was a throne in heaven with someone sitting on it&rdquo; (4:2). The throne (<em>thronos</em>) is the single most important image in Revelation 4 and 5 &mdash; the word appears twelve times in these two chapters alone and forty-seven times in the whole book. The throne is the seat of ultimate sovereignty, the center around which all of heaven is organized. Before any seal is opened, before any trumpet sounds, before any beast appears on earth, the throne is established, occupied, and worshipped. This is the theological claim that Revelation rests on: the throne of God is never empty, never threatened, never unseated by any earthly power.",
  },
  {
    id: "v3",
    label: "Verse 3: The Appearance of God &mdash; Jasper, Carnelian, and the Emerald Rainbow",
    color: TEAL,
    body: "John does not describe a human face; he describes an appearance of light and color: &ldquo;And the one who sat there had the appearance of jasper and ruby. A rainbow that shone like an emerald encircled the throne&rdquo; (4:3). Ancient commentators understood that the face of God cannot be directly described &mdash; what John perceives is a radiance, a glory, an appearance of precious stones. Jasper (<em>iaspis</em>) in the ancient world referred to what we might call a translucent white crystal, sometimes compared to diamond. Ruby or carnelian (<em>sardios</em>) is a blood-red stone. The combination of brilliant white light and red may evoke both the holiness and the justice of God.<br><br>The encircling rainbow of emerald green is one of the most significant symbols in the chapter. In Genesis 9:13-16, God placed his rainbow in the clouds as the sign of his covenant with Noah and with all living creatures &mdash; the promise that he would never again destroy the earth by flood. Here the rainbow encircles the throne entirely in the color of verdant life. Whatever judgment may unfold from this throne, it is encircled by covenant faithfulness. The emerald rainbow is God&rsquo;s own visual pledge that his purposes in history are redemptive, not merely punitive. Grace encircles power.",
  },
  {
    id: "v4",
    label: "Verse 4: The Twenty-Four Elders on Their Thrones",
    color: GREEN,
    body: "Surrounding the central throne are twenty-four other thrones: &ldquo;Surrounding the throne were twenty-four other thrones, and seated on them were twenty-four elders. They were dressed in white and had crowns of gold on their heads&rdquo; (4:4). The identity of the twenty-four elders (<em>presbyteroi</em>) has been debated by interpreters for centuries. The most theologically satisfying reading sees them as a symbolic representation of the whole redeemed people of God &mdash; the twelve tribes of Israel (representing the Old Testament covenant community) plus the twelve apostles (representing the New Testament church), giving the number twenty-four as the complete people of God across both covenants. This reading is supported by Revelation 21:12-14, where the twelve gates of the New Jerusalem bear the names of the twelve tribes and the twelve foundations bear the names of the twelve apostles.<br><br>The elders are clothed in white (<em>leuka</em>), the consistent Revelation symbol of righteousness, purity, and victory (cf. 3:5; 7:9; 19:8). They wear <em>stephanoi</em> &mdash; victors&rsquo; wreaths or crowns, the crown given to the winner of an athletic contest, not the <em>diadema</em> (diadem) of royalty. They have been given authority and dignity, but they cast these crowns before the throne (v.10), demonstrating that all creaturely authority is derived from and returned to the one on the throne.",
  },
  {
    id: "v5",
    label: "Verse 5: Lightning, Thunder, and the Seven Torches",
    color: ROSE,
    body: "&ldquo;From the throne came flashes of lightning, rumblings and peals of thunder. In front of the throne, seven lamps were blazing. These are the seven spirits of God&rdquo; (4:5). Lightning and thunder from the throne recall Exodus 19:16-19, where God descended on Sinai in fire and thunder for the giving of the law. In the Old Testament, thunder and lightning consistently accompany theophanies &mdash; divine appearances. Here they are not meteorological events but the perpetual dynamic power radiating from the throne of God: creation, judgment, and divine authority constantly emanating from the center of heaven.<br><br>The seven blazing lamps (<em>lampades</em>) are identified as the seven spirits of God, the same sevenfold Spirit introduced in 1:4 and 3:1. In Zechariah 4:2-10, a seven-branched lamp stand with seven lights is explicitly identified as the eyes of the LORD ranging through the whole earth. Here the seven torches blazing before the throne represent the fullness of the Holy Spirit in his omniscient, omnipresent operation throughout creation. The Spirit does not remain in heaven; the torches burn outward, illuminating and searching the whole earth. This is consistent with John 16:7-11, where the Spirit is sent into the world to convict and illuminate.",
  },
  {
    id: "v6a",
    label: "Verse 6a: The Sea of Glass Like Crystal",
    color: GOLD,
    body: "&ldquo;Also in front of the throne there was what looked like a sea of glass, clear as crystal&rdquo; (4:6a). The sea of glass is one of the most haunting images in the chapter. In Old Testament cosmology, the sea was associated with chaos, the primordial deep, and the enemies of God (cf. Psalm 74:13-14; Isaiah 27:1; Daniel 7:2-3). But here the sea before God&rsquo;s throne is still &mdash; utterly calm, transparent as crystal, peaceful and ordered. Whatever chaos and turbulence exist in the earthly realm, in heaven there is perfect serenity. The sea has become glass.<br><br>A related image appears in Exodus 24:10, where Moses and the elders of Israel see beneath the God of Israel &ldquo;something like a pavement made of lapis lazuli, as bright blue as the sky&rdquo; &mdash; a heavenly floor of crystalline clarity. The sea of glass in Revelation is the heavenly counterpart to the chaotic waters of earth, transformed in the presence of God into a mirror of divine peace and stability. In Revelation 15:2, the saints who have conquered the beast stand on this sea of glass, mingled with fire, singing the song of Moses and the Lamb. The sea that was the realm of the beast and chaos becomes the floor of victorious worship.",
  },
  {
    id: "v6b-8",
    label: "Verses 6b-8: The Four Living Creatures and Their Ceaseless Worship",
    color: PURPLE,
    body: "&ldquo;In the center, around the throne, were four living creatures, and they were covered with eyes, in front and in back. The first living creature was like a lion, the second was like an ox, the third had a face like a man, the fourth was like a flying eagle&rdquo; (4:6b-7). The four living creatures (<em>zoa</em>) are drawn directly from Ezekiel 1:5-10 and 10:14, where the prophet sees four-faced cherubim bearing the divine chariot-throne. In Ezekiel the four faces appear on each individual creature; in Revelation each creature has one face, suggesting perhaps the diversity of the created order represented in focused witness.<br><br>The four faces have been interpreted in multiple ways across Christian tradition: as symbols of the four evangelists (lion = Mark, ox = Luke, man = Matthew, eagle = John), as representatives of the entire created order (the wild, the domestic, the human, the aerial), or as aspects of Christ himself. The most exegetically grounded reading sees them as the four highest expressions of creaturely life, the summits of wildness (lion), service (ox), rationality (man), and freedom (eagle) &mdash; all of creation represented in its most glorious forms, rendered perpetually in worship.<br><br>They are &ldquo;covered with eyes, in front and in back&rdquo; (v.6b) and &ldquo;each of the four living creatures had six wings and was covered with eyes all around, even under its wings&rdquo; (v.8) &mdash; omnidirectional perception, unable to miss or overlook anything, total awareness of the divine glory they unceasingly behold. Their song, repeated without ceasing, is the <em>trisagion</em>: &ldquo;Holy, holy, holy is the Lord God Almighty, who was, and is, and is to come.&rdquo; The threefold holiness is drawn from Isaiah 6:3, where the seraphim cry the same words before the throne. In Revelation the eternal name of God &mdash; who was, who is, who is to come &mdash; is woven into the song, grounding the holiness doxology in God&rsquo;s utter self-sufficiency across all time.",
  },
  {
    id: "v9",
    label: "Verse 9: The Trigger of Worship",
    color: TEAL,
    body: "&ldquo;Whenever the living creatures give glory, honor and thanks to him who sits on the throne and who lives for ever and ever&rdquo; (4:9). The word &ldquo;whenever&rdquo; (<em>hotan</em>) is significant: the worship of the four living creatures is not a one-time event but a perpetual, ongoing reality. Their song &ldquo;day and night they never stop&rdquo; (v.8) &mdash; yet the text describes a responsive pattern: whenever the creatures give glory, the elders fall down and worship. Heavenly worship is not static or mechanical but dynamic and mutually reinforcing, each act of adoration catalyzing another.<br><br>The content of what is given &mdash; &ldquo;glory, honor and thanks&rdquo; &mdash; forms a triad of total tribute. Glory (<em>doxa</em>) is the recognition and declaration of who God truly is; honor (<em>time</em>) is the respect and reverence due to the highest dignity; thanks (<em>eucharistia</em>) &mdash; from which we get &ldquo;Eucharist&rdquo; &mdash; is gratitude, the recognition that everything received has come from God. Together these three encompass the whole of what creation owes to the Creator: acknowledgment, reverence, and gratitude. The one receiving it &ldquo;lives for ever and ever&rdquo; &mdash; <em>eis tous aionas ton aionon</em> &mdash; the eternal life of God that stands behind and beneath all creaturely existence.",
  },
  {
    id: "vv10-11",
    label: "Verses 10-11: The Elders Cast Their Crowns and the Song of the Creator",
    color: GREEN,
    body: "&ldquo;The twenty-four elders fall down before him who sits on the throne and worship him who lives for ever and ever. They lay their crowns before the throne and say: &lsquo;You are worthy, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they were created and have their being.&rsquo;&rdquo; (4:10-11). The casting of the crowns is one of the most dramatic gestures in Revelation. The elders have been given authority and dignity, represented by the <em>stephanoi</em>. But in the presence of the One on the throne, all creaturely authority is revealed as derivative. The crowns are not earned by the elders on their own account &mdash; they were given &mdash; and so they are returned. The gesture is an act of total sovereignty acknowledgment: we reign only because you reign; our authority is a delegation, not an independent possession.<br><br>The song they sing is the first of several hymns in chapters 4 and 5, and it establishes the theological ground for all worship: creation. God is worthy (<em>axios</em>) of glory, honor, and power because he is the Creator of all things. All of creation exists &ldquo;by your will&rdquo; (<em>dia to thelema sou</em>) &mdash; God did not create out of necessity, compulsion, or loneliness, but from the overflow of his own sovereign, gracious will. And they &ldquo;were created and have their being&rdquo; &mdash; the past act of creation and the present sustaining of existence are both attributed to God. To be a creature is to owe one&rsquo;s very existence to the Creator at every moment. This is not a burden but the ground of all worship: we give back what was never ours to keep.",
  },
];

const keyThemes = [
  {
    id: "opendoor",
    title: "The Open Door and the Voice Like a Trumpet (vv.1-2)",
    color: GOLD,
    content: "The open door in heaven is more than a literary device; it is a theological statement about access. Heaven is not inaccessible to the human gaze &mdash; God opens it. The prophetic tradition of heavenly vision (Isaiah 6, Ezekiel 1, Daniel 7) establishes that God has always granted selected witnesses a glimpse behind the veil of the visible order so that they can report what is spiritually real to the community. John&rsquo;s ascent &ldquo;in the Spirit&rdquo; places him in this prophetic stream. The voice like a trumpet connects this vision to the voice of Christ in chapter 1 &mdash; this is the same risen Lord who walked among the lampstands, now summons John to the throne room. The transition from chapters 2-3 (the earthly churches under pressure) to chapter 4 (the heavenly throne room in glory) is the interpretive key to the whole book: what happens on earth is always happening in the context of the enthroned God.",
  },
  {
    id: "throne",
    title: "The Appearance of the Throne: Emerald Rainbow and the 24 Elders (vv.3-4)",
    color: TEAL,
    content: "Two details of the throne room deserve special attention as key symbols. The emerald rainbow encircling the throne is the covenant sign of Genesis 9 transposed into the heavenly sphere. The rainbow around Noah was God&rsquo;s pledge never to destroy all life by flood again; the emerald rainbow around the heavenly throne is God&rsquo;s pledge that his sovereign rule over history, including its most terrifying judgments, is encircled by covenant faithfulness. Whatever unfolds from this throne is bounded by the divine promise of redemption.<br><br>The twenty-four elders are the redeemed people of God in their representative fullness &mdash; twelve tribes plus twelve apostles, or perhaps the angelic council of heaven representing the people of both covenants. Their white garments represent the righteousness of those who have been washed in the blood of the Lamb; their <em>stephanoi</em> (victors&rsquo; wreaths) represent the reward given to those who have endured. But they cast these crowns before the throne, demonstrating that even redeemed creaturely dignity is wholly derivative of and returned to the sovereign God.",
  },
  {
    id: "creatures",
    title: "The Four Living Creatures: Ezekiel&rsquo;s Cherubim and Ceaseless Worship (vv.6b-9)",
    color: PURPLE,
    content: "The four living creatures (<em>zoa</em>) are John&rsquo;s adaptation of the cherubim of Ezekiel 1 and 10, the guardian beings of the divine throne-chariot. Their four forms &mdash; lion, ox, man, eagle &mdash; represent the summit of the creaturely order: the king of wild animals, the king of domestic animals, the pinnacle of rational creatures, the master of the air. Together they stand for all creation in its most exalted forms, gathered in perpetual adoration before the Creator.<br><br>Their covering of eyes suggests omnidirectional awareness &mdash; they miss nothing of the divine glory. Their six wings draw on Isaiah 6:2, where the seraphim also have six wings. The <em>trisagion</em> they sing &mdash; &ldquo;Holy, holy, holy&rdquo; &mdash; is the central confessional statement of Revelation 4. The threefold repetition in Hebrew represents the superlative: God is not merely holy but supremely, utterly, incomprehensibly holy. The word <em>hagios</em> means set apart, other, different, wholly unlike anything creaturely. The God of Revelation 4 is not a magnified human being but one of a completely different order of being &mdash; and yet this utterly holy God receives, invites, and is glorified by creaturely worship.",
  },
  {
    id: "worthy",
    title: "Worthy, O Lord: The Song of Creation (vv.10-11)",
    color: GREEN,
    content: "The climactic hymn of Revelation 4 establishes that the basis for all worship is creation. God is declared <em>axios</em> (worthy) &mdash; a word used in the Greco-Roman world to describe someone whose weight or worth justified a particular response. In the law courts it was used of a sentence proportionate to the crime. Here it is the declaration that God&rsquo;s glory, honor, and power are proportionate to who he actually is: the Creator who brought all things into being by his sovereign will.<br><br>The phrase &ldquo;by your will they were created and have their being&rdquo; captures both the past act of creation and the present sustaining of existence. Creation is not a past event that God now observes from a distance; it is an ongoing act of divine sustaining. Every creature exists at every moment because God wills it to exist. This is the ground of all worship: total dependence on the Creator. The casting of the crowns before the throne enacts this theologically &mdash; all creaturely authority, dignity, and achievement is a delegated gift, properly returned to its source in the act of worship.",
  },
];

const applicationPoints = [
  {
    title: "The Throne Room as the Context for Prayer and Life",
    color: GOLD,
    body: "Revelation 4 was written to Christians living under the pressure of Roman imperial power, economic exclusion, and the threat of death. Its first pastoral move is to relocate the reader&rsquo;s perspective: before you can understand what is happening on earth, you must see what is happening in heaven. The throne is occupied. God is not absent, distracted, or overwhelmed. Whatever Domitian or Caesar or any human power does, they do it within the context of a throne room where &ldquo;Holy, holy, holy is the Lord God Almighty, who was, and is, and is to come.&rdquo;<br><br>This vision has direct implications for how we pray. When we come to God in prayer, we are not trying to get the attention of an absent sovereign or persuade an indifferent deity. We are entering a throne room where unceasing worship is already underway, where the covenant rainbow encircles the seat of power, where the twenty-four elders already represent us before the King. Prayer is not generating divine interest; it is joining a heavenly reality that is already fully in motion. The four living creatures never rest from saying &ldquo;Holy, holy, holy&rdquo; &mdash; our prayer is a joining-in, not a starting-up.",
  },
  {
    title: "Worship as the Response to Who God Is, Not What He Does for Us",
    color: PURPLE,
    body: "The song of Revelation 4:11 is striking for what it does not say. The elders do not worship God because he has been kind to them personally, or because their prayers have been answered, or because life has been good. They worship him because of who he is: the Creator, the one by whose will all things exist. This is worship grounded in theology, not experience &mdash; in the nature of God, not the fluctuation of circumstances.<br><br>This has profound implications for the modern church, where worship is often primarily evaluated by how it makes the worshipper feel. The four living creatures do not say &ldquo;holy, holy, holy&rdquo; because they are having a good day; they say it because they cannot not say it &mdash; the vision of divine holiness compels adoration. The elders do not cast their crowns because they are emotionally moved; they cast them because in the presence of the one on the throne, all creaturely authority is seen for what it is: derivative, delegated, and properly returned. Revelation 4 calls the church to a worship that is theologically grounded rather than experientially driven.",
  },
  {
    title: "What the Open Door Means: Heaven&rsquo;s Accessibility and God&rsquo;s Initiative",
    color: TEAL,
    body: "The door standing open in heaven is not the result of John&rsquo;s spiritual achievement or contemplative discipline. It is opened by God and entered at God&rsquo;s invitation: &ldquo;Come up here.&rdquo; This is the pattern of all genuine spiritual vision and encounter throughout Scripture: God opens the door; the human being enters by invitation. Isaiah did not engineer his throne room vision; it was given to him in the year that King Uzziah died. Ezekiel did not seek the chariot vision by the river Chebar; it came upon him. Paul did not achieve his third-heaven experience through spiritual technique.<br><br>This does not make human spiritual discipline irrelevant &mdash; John is &ldquo;in the Spirit,&rdquo; in a posture of receptive attention. But the vision is God&rsquo;s gift, not human achievement. For Christians today, this means that the access we have to the throne room of heaven through prayer and worship is not something we generate or maintain by spiritual performance. The door has been opened by God himself &mdash; and more specifically, in the light of Revelation 5, by the Lamb who was slain, whose blood purchased access to the presence of God for persons from every tribe and language and people and nation.",
  },
  {
    title: "Greek Words for Deeper Study",
    color: GREEN,
    body: "<strong>Thronos</strong> (&theta;&rho;&omicron;&nu;&omicron;&sigmaf;) &mdash; throne, seat of power; appears 47 times in Revelation, establishing the sovereignty of God as the book&rsquo;s central claim. <strong>Presbyteros</strong> (&pi;&rho;&epsilon;&sigma;&beta;&upsilon;&tau;&epsilon;&rho;&omicron;&sigmaf;) &mdash; elder; used of the twenty-four elders representing the whole people of God. <strong>Stephanos</strong> (&sigma;&tau;&epsilon;&phi;&alpha;&nu;&omicron;&sigmaf;) &mdash; victor&rsquo;s wreath, crown awarded for winning a contest; distinct from <em>diadema</em> (royal diadem). <strong>Axios</strong> (&alpha;&xi;&iota;&omicron;&sigmaf;) &mdash; worthy, deserving, of sufficient weight; the word of acclamation in both the throne room hymn (4:11) and the Lamb&rsquo;s hymn (5:9,12). <strong>Hagios</strong> (&alpha;&gamma;&iota;&omicron;&sigmaf;) &mdash; holy, set apart, wholly other; the word of the <em>trisagion</em> in both Isaiah 6:3 and Revelation 4:8, the supreme predication of divine being.",
  },
];

export default function Revelation4GuidePage() {
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
            Revelation 4: The Heavenly Throne Room and the Worship of the Creator
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "John is transported in the Spirit through an open door into heaven and sees the throne of God &mdash; surrounded by the emerald rainbow of covenant, the twenty-four elders in white, the four living creatures ceaselessly crying &ldquo;Holy, holy, holy,&rdquo; and the whole court of heaven casting their crowns before the one who created all things and by whose will all things have their being." }}
          />
        </header>

        {/* Context Banner */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: "2rem", borderLeft: `4px solid ${GOLD}` }}>
          <div style={{ color: GOLD, fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.5rem" }}>Historical &amp; Literary Context</div>
          <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}
            dangerouslySetInnerHTML={{ __html: "Revelation 4 is the hinge of the entire book. Chapters 2-3 address seven specific churches on earth; chapter 4 opens the door to heaven and establishes the cosmic backdrop for all that follows. The vision draws deeply on Ezekiel 1 (the divine chariot-throne vision), Isaiah 6 (the seraphim and the <em>trisagion</em>), Daniel 7 (the Ancient of Days on his throne with the heavenly court), and Exodus 19 (theophany on Sinai). John is not inventing; he is collating and amplifying the great prophetic visions of the Old Testament, now seen in the light of the risen Christ. Before any judgment is poured out, before any beast appears, heaven is shown to be in control &mdash; the throne is the first and last word of reality." }}
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
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 1rem" }}>Overview of Revelation 4</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 1rem", fontSize: "1.02rem" }}
                dangerouslySetInnerHTML={{ __html: "Revelation 4 is the heavenly throne room vision that forms the theological center of the whole book. After the seven letters of chapters 2-3 have addressed the earthly churches in their particular struggles and failures, chapter 4 relocates the reader&rsquo;s perspective entirely: John is summoned through an open door into heaven itself, where he sees the eternal reality that undergirds all earthly events. The structure of the chapter is concentric: the throne at the center, the four living creatures in the inner circle, the twenty-four elders in the outer circle, and the whole scene radiating with lightning, thunder, and crystalline light." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 1rem", fontSize: "1.02rem" }}
                dangerouslySetInnerHTML={{ __html: "The theological claim of the chapter is simple and overwhelming: God reigns. The throne is occupied, attended, and worshipped without ceasing. This is not merely a comforting idea for the persecuted churches; it is the metaphysical foundation that makes their endurance rational. If the throne of the universe is empty or contested, Christian martyrdom is mere tragedy. If the throne is occupied by the Holy, Holy, Holy God, then every act of faithfulness under pressure participates in the reality that already governs the cosmos." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "1.02rem" }}
                dangerouslySetInnerHTML={{ __html: "The chapter introduces the major figures who will populate the heavenly scenes throughout the book: the twenty-four elders, the four living creatures, and the seven torches. Their combined worship in verses 8-11 provides the theological keynote for everything that follows. The song of the four living creatures declares God&rsquo;s holiness and eternity; the song of the elders declares God&rsquo;s worthiness as Creator. Together they establish that the ground of all worship is not what God has done for us recently but who God is eternally and what he has done in creation." }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                ["Chapter", "Revelation 4"],
                ["Setting", "The heavenly throne room"],
                ["Central Image", "The throne of God"],
                ["Key Figures", "4 living creatures, 24 elders"],
                ["Old Testament Echoes", "Ezekiel 1, Isaiah 6, Daniel 7"],
                ["Key Theme", "Holy, holy, holy &mdash; God reigns"],
              ].map(([k, v]) => (
                <div key={k} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 0.5 }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: v }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 1rem" }}>Key Symbols in Revelation 4</h3>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {[
                  ["The Jasper and Carnelian", "The radiant appearance of God &mdash; brilliant white light (jasper) and blood-red (carnelian or ruby) &mdash; evoking both holiness and justice, the character of the one who fills the throne"],
                  ["The Emerald Rainbow", "The covenant sign of Genesis 9 transformed into a perpetual halo of green around the throne &mdash; God&rsquo;s eternal pledge that his rule over history is bounded by covenant faithfulness"],
                  ["The 24 Elders", "The complete people of God across both covenants: 12 tribes of Israel plus 12 apostles, clothed in white and bearing <em>stephanoi</em> (victors&rsquo; wreaths) which they cast before the throne"],
                  ["The Seven Torches", "The seven spirits of God &mdash; the fullness of the Holy Spirit in his omniscient, omnipresent ministry throughout creation (cf. Zechariah 4:2-10; Isaiah 11:2)"],
                  ["The Sea of Glass", "The primordial deep transformed into crystalline stillness &mdash; chaos become order in the presence of God; in 15:2 the victorious saints stand on this same sea"],
                  ["The Four Living Creatures", "The cherubim of Ezekiel 1 adapted: lion (wild), ox (domestic), man (rational), eagle (aerial) &mdash; the four summits of creation gathered in perpetual adoration"],
                  ["Lightning and Thunder", "The perpetual theophanic power radiating from the throne, echoing Sinai (Exodus 19:16-19) &mdash; divine creative energy, authority, and judgment always emanating from the center of heaven"],
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
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 1.25rem" }}>Video Teaching on Revelation 4</h3>
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
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 1.25rem" }}>Key Themes in Revelation 4</h2>
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
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.875rem" }}>The Structure of the Throne Room Vision</h3>
              <div style={{ display: "grid", gap: "0.875rem" }}>
                {[
                  { ref: "vv.1-2", title: "The Open Door and the Throne", desc: "John is summoned through an open door &ldquo;in the Spirit&rdquo; and sees the central reality of heaven: a throne occupied by one whose appearance is of radiant light and precious stones.", color: GOLD },
                  { ref: "vv.3-6a", title: "The Rainbow, the Elders, and the Sea", desc: "The throne is surrounded by the emerald rainbow of covenant, the twenty-four elders on subsidiary thrones, lightning and thunder, seven blazing torches, and the crystalline sea.", color: TEAL },
                  { ref: "vv.6b-9", title: "The Four Living Creatures and Their Song", desc: "The four living creatures &mdash; lion, ox, man, eagle &mdash; covered with eyes, ceaselessly singing <em>hagios, hagios, hagios</em> (holy, holy, holy) to the Lord God Almighty.", color: PURPLE },
                  { ref: "vv.10-11", title: "The Elders Cast Their Crowns", desc: "The twenty-four elders fall down, cast their <em>stephanoi</em> before the throne, and sing the creation doxology: <em>axios</em> (worthy) to receive glory, honor, and power.", color: GREEN },
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
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 0.5rem" }}>Verse-by-Verse Commentary: Revelation 4</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 1.5rem", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "A detailed walkthrough of all eleven verses in canonical order. Click any section to expand the commentary. Verse references are linked to the Bible reader." }}
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
                {["Revelation 4:1", "Revelation 4:2", "Revelation 4:3", "Revelation 4:4", "Revelation 4:5", "Revelation 4:6", "Revelation 4:8", "Revelation 4:9", "Revelation 4:10", "Revelation 4:11"].map((ref) => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${GREEN}44`, padding: "1.75rem", marginTop: "1.25rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.875rem" }}>Old Testament Parallels</h3>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {[
                  { ot: "Ezekiel 1:4-28", rev: "Revelation 4:2-8", desc: "Ezekiel&rsquo;s chariot-throne vision provides the template for John&rsquo;s throne room: the four living creatures, their faces, the crystal expanse, the fire, and the overwhelming radiance of divine glory" },
                  { ot: "Isaiah 6:1-3", rev: "Revelation 4:8", desc: "Isaiah&rsquo;s seraphim crying <em>kadosh, kadosh, kadosh</em> (holy, holy, holy) is directly transposed into the <em>trisagion</em> of the four living creatures, now joined to the eternal name of God" },
                  { ot: "Daniel 7:9-10", rev: "Revelation 4:2-4", desc: "Daniel&rsquo;s vision of the Ancient of Days on his flaming throne, with ten thousand times ten thousand attending him, provides the background for the throne surrounded by twenty-four elders" },
                  { ot: "Genesis 9:13-16", rev: "Revelation 4:3", desc: "The rainbow of Noah&rsquo;s covenant, pledging God&rsquo;s faithfulness to all living things, becomes the emerald rainbow encircling the heavenly throne, declaring that divine sovereignty is covenant sovereignty" },
                ].map((item) => (
                  <div key={item.ot} style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "0.875rem" }}>
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.2rem", flexWrap: "wrap" }}>
                      <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem" }}>{item.ot}</span>
                      <span style={{ color: MUTED, fontSize: "0.85rem" }}>&rarr;</span>
                      <span style={{ color: GOLD, fontWeight: 700, fontSize: "0.85rem" }}>{item.rev}</span>
                    </div>
                    <div style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.875rem" }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Application Tab */}
        {activeTab === "Application" && (
          <section>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 0.5rem" }}>Application: Living Under the Throne</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 1.5rem", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "How does the vision of heaven as a throne room of ceaseless worship change how we pray, how we endure suffering, and how we approach the act of worship itself? Revelation 4 is not an abstract theological statement; it is a vision given to a specific community under specific pressure, designed to reorient their perception of reality from the ground up." }}
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
                  "When you pray, do you come to God as if the throne is occupied and heaven is already in full worship &mdash; or as if you are trying to get the attention of a distant sovereign? How might the vision of Revelation 4 reshape your posture in prayer?",
                  "The elders cast their crowns before the throne &mdash; returning to God the authority and dignity that was given to them. What are the &ldquo;crowns&rdquo; in your own life: the achievements, positions, or abilities that you might be tempted to hold rather than return? What would it look like to lay them before the throne?",
                  "The four living creatures worship God because they cannot not worship &mdash; the vision of divine holiness compels adoration regardless of circumstances. How much of your own worship is driven by the nature of God versus the fluctuation of your experiences and emotions?",
                  "The emerald rainbow declares that God&rsquo;s sovereignty is bounded by covenant faithfulness. How does this symbol speak to whatever sense of chaos or injustice you currently face? What would it mean to see your situation as enclosed within the covenant rainbow?",
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
                  { author: "G.K. Beale", title: "The Book of Revelation (NIGTC)", note: "The standard academic commentary; exhaustive treatment of Ezekiel and Isaiah backgrounds in chapter 4" },
                  { author: "Richard Bauckham", title: "The Theology of the Book of Revelation", note: "Masterful short study; superb on the throne room hymns and their theological significance" },
                  { author: "Eugene Peterson", title: "Reversed Thunder", note: "Literary and spiritual meditation on Revelation&rsquo;s vision of worship; especially good on chapters 4-5" },
                  { author: "N.T. Wright", title: "Revelation for Everyone", note: "Accessible pastoral commentary; excellent on the connection between heavenly worship and earthly endurance" },
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
            dangerouslySetInnerHTML={{ __html: "Revelation 4 is the answer to the question that Revelation&rsquo;s first readers were asking: Is anyone in control? Is Rome the ultimate power? The answer is overwhelming: before any seal is opened, before any trumpet sounds, before any beast rises, the throne is established, occupied, and surrounded by ceaseless worship. The one who was, and is, and is to come reigns &mdash; and by his will all things were created and have their being. Holy, holy, holy." }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
