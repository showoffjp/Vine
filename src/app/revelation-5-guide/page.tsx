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
  { videoId: "VDjp8R0RVeY", title: "Revelation 5 - The Lamb Who Was Slain" },
  { videoId: "Q_7ZHKF8kiE", title: "Worthy Is the Lamb - Revelation 5 Explained" },
  { videoId: "XmIDiyH3nSk", title: "The Lion and the Lamb - Revelation 5 Commentary" },
  { videoId: "gxzjgBSCWgI", title: "Revelation 4 and 5 - Heaven's Throne Room" },
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
    label: "Verse 1: The Scroll with Seven Seals",
    color: GOLD,
    body: "&ldquo;Then I saw in the right hand of him who sat on the throne a scroll with writing on both sides and sealed with seven seals&rdquo; (5:1). The scroll (<em>biblion</em>) held in the right hand of God is the central object around which the drama of chapter 5 &mdash; and indeed chapters 6-22 &mdash; revolves. A scroll written on both sides (opisthograph) was a fully inscribed document, leaving no room for additions or alterations; the content is complete and determined. The seven seals (<em>sphragides</em>) are not merely closure but the marks of supreme authority; in the Roman world, an important document sealed with multiple seals could be opened only by the one authorized to break them.<br><br>Interpreters have proposed various identifications for the scroll: the book of history and judgment (containing the record of all human deeds), the title deed of creation (paralleling Jeremiah 32, where Jeremiah buys a field and the deed is sealed in a jar as a pledge of restoration), the book of destiny (containing God&rsquo;s sovereign plan for history), or a Last Will and Testament that requires a qualified heir to execute it. All of these carry some truth: the scroll contains the purposes of God for creation, which can only be enacted by the one who is qualified to unseal and execute them. The crisis of the chapter is precisely that no one qualifies &mdash; until the Lamb.",
  },
  {
    id: "v2-4",
    label: "Verses 2-4: The Mighty Angel and John&rsquo;s Weeping",
    color: PURPLE,
    body: "&ldquo;And I saw a mighty angel proclaiming in a loud voice, &lsquo;Who is worthy to break the seals and open the scroll?&rsquo; But no one in heaven or on earth or under the earth could open the scroll or even look inside it. I wept and wept because no one was found who was worthy to open the scroll or look inside&rdquo; (5:2-4). The proclamation of the mighty angel is a universal summons &mdash; spanning the entirety of existence: heaven above, earth, and under the earth. No creature in all of created reality qualifies. The silence that follows this proclamation is one of the most theologically charged moments in the entire Bible.<br><br>John&rsquo;s response is to weep &mdash; the same Greek verb (<em>klaiein</em>) used for deep, convulsive grief, as at a funeral. His tears are not mere sadness but theological anguish: if no one can open the scroll, if God&rsquo;s purposes for creation cannot be enacted, if history has no redeemer, then the suffering of the martyrs is meaningless, the prayers of the saints will go unanswered, creation will remain under the dominion of death and the beast. The inability to find a worthy one would mean the permanent triumph of evil and the indefinite continuation of all that afflicts the seven churches. John weeps for the cosmos.",
  },
  {
    id: "v5",
    label: "Verse 5: The Lion of Judah Who Is the Lamb",
    color: TEAL,
    body: "&ldquo;Then one of the elders said to me, &lsquo;Do not weep! See, the Lion of the tribe of Judah, the Root of David, has triumphed. He is able to open the scroll and its seven seals.&rsquo;&rdquo; (5:5). The elder&rsquo;s announcement is one of the great reveals of the entire New Testament. Two messianic titles from the Old Testament are combined: the Lion of the tribe of Judah (Genesis 49:9-10, where the dying Jacob prophesied that the scepter would not depart from Judah) and the Root of David (Isaiah 11:1,10, where the shoot from Jesse&rsquo;s stump would rule with justice and gather the nations). These are the great warrior-king titles of Jewish messianic expectation.<br><br>The logic would lead us to expect that when John turns to look, he will see a conquering lion-king. What he sees instead is one of the supreme paradoxes of the New Testament: &ldquo;Then I saw a Lamb, looking as if it had been slain, standing at the center of the throne&rdquo; (v.6). The Lion of Judah is the Lamb who was slain. The expected conqueror has conquered &mdash; but by means no one anticipated: through sacrificial death. The Greek word <em>nikao</em> (triumphed, conquered, overcome) is used throughout Revelation for the victory that comes through faithful witness and martyrdom, not military force. The Lamb&rsquo;s triumph is the cross and resurrection.",
  },
  {
    id: "v6",
    label: "Verse 6: The Lamb Standing as Slain &mdash; Seven Horns and Seven Eyes",
    color: ROSE,
    body: "&ldquo;Then I saw a Lamb, looking as if it had been slain, standing at the center of the throne, encircled by the four living creatures and the elders. The Lamb had seven horns and seven eyes, which are the seven spirits of God sent out into all the earth&rdquo; (5:6). The appearance of the Lamb is the visual and theological climax of chapters 4-5. John turns expecting a lion and sees a lamb &mdash; and not a triumphant uninjured lamb but one that bears the marks of slaughter (<em>sfazmenon</em>, a word of violent killing, used of sacrifice and ritual slaughter). Yet this slain Lamb is standing, not lying dead. The marks of death remain, but death no longer holds him. The resurrection is encoded in the posture: slain, but standing.<br><br>The seven horns (<em>kerata</em>) represent the fullness of power: in the Old Testament, horns are symbols of royal strength (cf. Daniel 7-8; Psalm 89:17). Seven horns = perfect, complete, unlimited power. The seven eyes are the seven spirits of God sent out into all the earth &mdash; the fullness of the Holy Spirit in his omniscient, omnipresent operation. The Lamb does not merely have some power and some knowledge; he has the fullness of divine power and the fullness of divine omniscience. The crucified and risen Christ is not a diminished deity; he is the one in whom &ldquo;the whole fullness of deity dwells bodily&rdquo; (Colossians 2:9), and his resurrection glory is expressed precisely through the continued marks of the cross.",
  },
  {
    id: "v7",
    label: "Verse 7: The Lamb Takes the Scroll",
    color: GREEN,
    body: "&ldquo;He went and took the scroll from the right hand of him who sat on the throne&rdquo; (5:7). The simplest sentence in the chapter carries the weight of the entire cosmos. The Lamb goes &mdash; moves, acts, takes initiative &mdash; and takes the scroll from the right hand of the one on the throne. This transfer of the scroll is one of the decisive acts of Revelation: the plan and purpose of God for creation is placed in the hands of the crucified and risen Christ. The authority to open history and enact God&rsquo;s purposes has been given to the Lamb who was slain.<br><br>The action echoes Daniel 7:13-14, where &ldquo;one like a son of man, coming with the clouds of heaven, approached the Ancient of Days and was led into his presence. He was given authority, glory and sovereign power; all nations and peoples of every language worshipped him.&rdquo; This is the investiture of the Messiah &mdash; the moment when the crucified and risen Son receives the fullness of his delegated authority over all creation. In Matthew 28:18, immediately after the resurrection, Jesus declares: &ldquo;All authority in heaven and on earth has been given to me.&rdquo; Revelation 5:7 is the same moment seen from the heavenly perspective.",
  },
  {
    id: "v8",
    label: "Verse 8: The Harps and the Golden Bowls of Incense",
    color: GOLD,
    body: "&ldquo;And when he had taken it, the four living creatures and the twenty-four elders fell down before the Lamb. Each one had a harp and they were holding golden bowls full of incense, which are the prayers of God&rsquo;s people&rdquo; (5:8). The moment the Lamb takes the scroll, the entire heavenly court collapses in worship. This is spontaneous, overwhelming, irresistible adoration &mdash; not a scheduled liturgical moment but an outburst of creaturely recognition: this is the one; this is the worthy one; the scroll is in the right hands; history has its redeemer.<br><br>Two objects accompany the worship. The harps (<em>kitharas</em>) are instruments of sacred song, associated with the Levitical worship of the Jerusalem temple and with David&rsquo;s psalms. Heavenly worship is musical &mdash; the songs that follow are not mere recitation but the outpouring of joy in melody. The golden bowls of incense are the prayers of God&rsquo;s people (<em>hai proseuchai ton hagion</em>). In the Old Testament, incense burned before the Lord was a symbol of prayer rising to God (Psalm 141:2; Luke 1:10). Here the prayers of every suffering, praying Christian on earth are carried as fragrant incense into the very throne room of heaven, held in golden bowls before the Lamb. No prayer is lost; every prayer of every saint is preserved and presented before the one who holds the scroll of history.",
  },
  {
    id: "vv9-10",
    label: "Verses 9-10: The New Song of Redemption",
    color: PURPLE,
    body: "&ldquo;And they sang a new song, saying: &lsquo;You are worthy to take the scroll and to open its seals, because you were slain, and with your blood you purchased for God persons from every tribe and language and people and nation. You have made them to be a kingdom and priests to serve our God, and they will reign on the earth.&rsquo;&rdquo; (5:9-10). The new song (<em>ode kaine</em>) is a term from the Psalms (Psalms 96:1; 98:1; 144:9; 149:1) for the eschatological praise that greets the decisive act of God in redemption. It is new not merely in novelty but in kind &mdash; a song that could not have been sung before, because the redemption it celebrates had not yet occurred.<br><br>The ground of the Lamb&rsquo;s worthiness is twofold and inseparable. First: &ldquo;you were slain&rdquo; (<em>sfazmenon</em> &mdash; the violent sacrifice language of verse 6 repeated). The Lamb is worthy because he gave his life. Second: &ldquo;with your blood you purchased for God persons from every tribe and language and people and nation.&rdquo; The redemption accomplished is universal in scope &mdash; not one ethnicity, not one nation, but all human groupings represented, purchased out of the slavery of sin and death and given to God as his own possession. The fourfold formula &ldquo;tribe, language, people, nation&rdquo; appears seven times in Revelation and is John&rsquo;s consistent way of saying &ldquo;every conceivable human grouping without exception.&rdquo; The cross is the most inclusive event in history.",
  },
  {
    id: "vv11-12",
    label: "Verses 11-12: The Song of the Myriads of Angels",
    color: TEAL,
    body: "&ldquo;Then I looked and heard the voice of many angels, numbering thousands upon thousands, and ten thousand times ten thousand. They encircled the throne and the living creatures and the elders. In a loud voice they were saying: &lsquo;Worthy is the Lamb, who was slain, to receive power and wealth and wisdom and strength and honor and glory and praise!&rsquo;&rdquo; (5:11-12). The vision expands: from the twenty-four elders and four living creatures, the worshipping host swells to include the entire angelic order &mdash; myriads of myriads, ten thousand times ten thousand. The number is drawn from Daniel 7:10, where the same uncountable heavenly host attended the throne of the Ancient of Days. It is meant to convey not a precise number but overwhelming, incomprehensible multitude: all of heaven worshipping.<br><br>The sevenfold acclamation given to the Lamb is structurally parallel to doxologies given to God elsewhere in the New Testament (1 Timothy 1:17; 6:16; Jude 25): power (<em>dynamis</em>), wealth (<em>plutos</em>), wisdom (<em>sophia</em>), strength (<em>ischys</em>), honor (<em>time</em>), glory (<em>doxa</em>), and praise (<em>eulogia</em>). Seven attributes, given in full measure to the Lamb: the complete equivalence of divine honor. The Lamb who was slain is given the same acclamation as God himself &mdash; a high Christological statement embedded in doxology.",
  },
  {
    id: "vv13-14",
    label: "Verses 13-14: All Creation Joins the Worship",
    color: GREEN,
    body: "&ldquo;Then I heard every creature in heaven and on earth and under the earth and on the sea, and all that is in them, saying: &lsquo;To him who sits on the throne and to the Lamb be praise and honor and glory and power, for ever and ever!&rsquo; The four living creatures said, &lsquo;Amen,&rsquo; and the elders fell down and worshipped&rdquo; (5:13-14). The vision reaches its cosmic climax: all of creation joins the worship. The fourfold geography &mdash; heaven, earth, under the earth, on the sea &mdash; is the biblical way of saying everything that exists, everywhere. The whole cosmos, in every sphere of its existence, participates in the worship of the one on the throne and of the Lamb.<br><br>The conjunction &ldquo;and to the Lamb&rdquo; alongside &ldquo;to him who sits on the throne&rdquo; is a decisive Christological statement. Worship given to the Lamb is worship given to God: the Lamb is not worshipped alongside God as a second deity, but worshipped together with the Father as one God. This is the same pattern as the Fourth Gospel, where &ldquo;all may honor the Son just as they honor the Father&rdquo; (John 5:23). The closing &ldquo;Amen&rdquo; of the four living creatures and the prostration of the elders confirm the worship: so be it; let it be so; the whole cosmos affirms what heaven has just declared. The Lamb is worthy. Creation is complete in its praise.",
  },
];

const keyThemes = [
  {
    id: "scroll",
    title: "The Sealed Scroll and the Crisis of Worthiness (vv.1-4)",
    color: GOLD,
    content: "The sealed scroll creates the dramatic tension of the chapter. A scroll sealed with seven seals, held in the right hand of God, written on both sides: this is the fullest possible document, the most completely sealed document, requiring the highest possible authorization to open. The universal search for a worthy one and the cosmic silence that follows is one of the most theologically potent moments in Scripture. Nothing in heaven, earth, or under the earth qualifies. The implication is staggering: if no one is found worthy, the purposes of God for creation remain locked, history has no redeemer, and the prayers of suffering saints have no ultimate answer. John&rsquo;s weeping is the right response to this situation &mdash; it is the tears of the cosmos for its own redemption.",
  },
  {
    id: "lionlamb",
    title: "The Lion Who Is the Lamb: The Supreme Paradox (vv.5-6)",
    color: PURPLE,
    content: "The Lion-Lamb paradox is the theological heart of Revelation 5 and arguably of the entire book. An elder announces the Lion of Judah who has conquered; John turns and sees a Lamb looking as if it had been slain. The visual surprise is deliberate and interpretively decisive: every time Revelation uses the language of conquest, victory, and triumph, it must be read through this paradox. The way the Lion conquers is as the Lamb &mdash; through faithful, sacrificial witness even unto death. This redefines power, victory, and redemption from the ground up.<br><br>The Lamb (<em>arnion</em>, literally &ldquo;little lamb&rdquo; &mdash; the diminutive form) appears 28 times in Revelation, always referring to Christ. The choice of the diminutive is not accidental: it emphasizes vulnerability, smallness, sacrifice. Yet this vulnerable lamb bears seven horns (fullness of power) and seven eyes (fullness of omniscience). The apparent contradiction &mdash; weakness that is actually omnipotence, sacrifice that is actually cosmic victory &mdash; is the paradox that Revelation asks its readers to internalize as their governing understanding of how God works in the world.",
  },
  {
    id: "newsong",
    title: "The New Song and the Universal Scope of Redemption (vv.8-10)",
    color: TEAL,
    content: "The new song sung by the four living creatures and twenty-four elders is the most theologically concentrated statement in the chapter. The Lamb is worthy for a single, unified reason: he was slain and with his blood purchased for God persons from every tribe, language, people, and nation. The cross is the qualification for opening the scroll. The one who gave his life in sacrificial death for the redemption of a universal humanity is the one qualified to execute the purposes of God for creation.<br><br>The result of the purchase is also stated: the redeemed have been made &ldquo;a kingdom and priests to serve our God, and they will reign on the earth.&rdquo; This is a direct echo of Exodus 19:6 (&ldquo;a kingdom of priests&rdquo;) and of Revelation 1:6. The church&rsquo;s identity &mdash; royal and priestly &mdash; is grounded in the cross. The redeemed reign not by overthrowing earthly powers by force but by participating in the redemptive rule of the Lamb, whose reign is exercised through faithful witness, worship, and service. The future tense &ldquo;they will reign&rdquo; points to the eschatological completion of what has already been inaugurated by the Lamb&rsquo;s victory.",
  },
  {
    id: "allcreation",
    title: "All Creation in Worship: The Cosmic Doxology (vv.11-14)",
    color: GREEN,
    content: "The worship of Revelation 5 moves in concentric circles outward from the Lamb: first the four living creatures and twenty-four elders (v.8), then the myriads of angels (vv.11-12), then every creature in every sphere of existence (vv.13-14). Each circle is larger than the last; the worship is genuinely cosmic. This is not a gathering of the elect only but the participation of the whole creation in the recognition of the Lamb&rsquo;s worthiness.<br><br>Paul&rsquo;s vision in Philippians 2:10-11 &mdash; that at the name of Jesus every knee will bow, in heaven, on earth, and under the earth &mdash; is here enacted in liturgical form. The closing &ldquo;Amen&rdquo; of the living creatures seals the cosmic doxology, and the prostration of the elders enacts it. The worship of Revelation 5 is the realized form of what Paul describes as the ultimate telos of the cosmos: that God may be all in all, with the Lamb as the center and mediator of that universal recognition.",
  },
];

const applicationPoints = [
  {
    title: "The Paradox of the Lion-Lamb and Its Implications for Power",
    color: GOLD,
    body: "The Lion-Lamb paradox reshapes every assumption about how God acts in history and how the church is called to act in the world. The churches to whom John writes are tempted in various ways: some toward accommodation with Roman power (Thyatira, Pergamum), some toward a kind of resigned passivity (Sardis), some toward self-satisfied complacency (Laodicea). The vision of Revelation 5 answers all of these temptations with the same image: the Lamb who conquers by being slain.<br><br>This does not mean that Christians should seek suffering or be passive victims. The Lamb is not passive &mdash; he steps forward, takes the scroll, opens the seals, and enacts the purposes of God for history. But the manner of his action is cruciform: he exercises his authority through sacrificial faithfulness, not coercive force. For the church, this means that the modes of genuine Christian influence in the world look different from what the surrounding culture recognizes as power. Faithful witness, serving love, the refusal of compromise even at personal cost &mdash; these are the marks of the Lamb&rsquo;s conquest working through his people.",
  },
  {
    title: "The Prayers of the Saints as Incense Before the Throne",
    color: PURPLE,
    body: "The golden bowls of incense that are the prayers of the saints (v.8) is one of the most practically comforting images in the entire New Testament for anyone who has ever wondered whether prayer matters. The prayers of God&rsquo;s people &mdash; all of them, the stammered prayers, the unanswered prayers, the prayers offered in darkness and doubt, the prayers of dying martyrs and struggling churches &mdash; are preserved in golden bowls before the Lamb who holds the scroll of history.<br><br>Prayer is not a private psychological exercise; it is a material participation in the cosmic drama of redemption. When the saints pray, their prayers rise as incense to the throne room of heaven and are held before the Lamb. The seals of the scroll will begin to be opened in chapter 6, and the suffering that follows will raise further prayers; in 8:3-5, an angel takes a golden censer, fills it with incense (the prayers of the saints), and hurls it to the earth, producing thunder and lightning and earthquake. The prayers of the suffering church are the proximate cause of the unfolding of history. Prayer is not mere talking to God; it is participation in the execution of the Lamb&rsquo;s purposes for creation.",
  },
  {
    title: "The New Song: What It Means to Sing Something New",
    color: TEAL,
    body: "The &ldquo;new song&rdquo; of Revelation 5:9 is not merely a liturgical novelty; it is a song that could not have been sung before the cross and resurrection. It is new because the event it celebrates is new: the decisive, once-for-all act of redemption in which the Lamb purchased for God people from every nation with his blood. Before the cross, this song had not been sung because the redemption it celebrates had not been accomplished. The song is eschatologically new &mdash; it belongs to the age of fulfillment, the age inaugurated by the death and resurrection of Christ.<br><br>For the church today, singing a new song means singing from the far side of the cross, in the full light of what the Lamb has accomplished. It means worship that is grounded not in the hope that God might do something great but in the certainty that he already has. The cross and resurrection are the fixed point around which all Christian worship revolves. The question &ldquo;what does singing a new song mean for me today?&rdquo; has this answer: it means entering into the worship that is already underway in the throne room of heaven, joining the four living creatures and the twenty-four elders and the myriads of angels who have recognized the Lamb&rsquo;s worthiness and give it voice. My singing today is participation in a song that began in eternity and will never end.",
  },
  {
    title: "Greek Words for Deeper Study",
    color: GREEN,
    body: "<strong>Axios</strong> (&alpha;&xi;&iota;&omicron;&sigmaf;) &mdash; worthy, deserving; the acclamation of the Lamb in 5:9,12 that echoes the Creator&rsquo;s acclamation in 4:11; a legal and evaluative term meaning of sufficient weight or merit for a given response. <strong>Arnion</strong> (&alpha;&rho;&nu;&iota;&omicron;&nu;) &mdash; little lamb, the diminutive form; used 28 times in Revelation for Christ, emphasizing his sacrificial vulnerability as the paradox of his cosmic authority. <strong>Sfazmenon</strong> (&sigma;&phi;&alpha;&gamma;&mu;&epsilon;&nu;&omicron;&nu;) &mdash; slaughtered, slain; the violent sacrificial language applied to the Lamb, from the same root used of ritual sacrifice and of the martyrs in 6:9. <strong>Proseuchai</strong> (&pi;&rho;&omicron;&sigma;&epsilon;&upsilon;&chi;&alpha;&iota;) &mdash; prayers; the prayers of the saints carried as incense in golden bowls before the throne, indicating that every prayer of the suffering church is preserved and presented in the heavenly court. <strong>Ode kaine</strong> (&omega;&delta;&eta; &kappa;&alpha;&iota;&nu;&eta;) &mdash; new song; eschatological praise that greets a decisive redemptive act, drawn from Psalms 96, 98, and 149, here applied to the Lamb&rsquo;s once-for-all achievement at the cross.",
  },
];

export default function Revelation5GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [newSongText, setNewSongText] = useState("");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Header */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, color: PURPLE, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Revelation Study
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 900, margin: "0 0 1rem", lineHeight: 1.15, color: TEXT }}>
            Revelation 5: The Worthy Lamb and the New Song of Redemption
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "No one in heaven or on earth or under the earth could open the scroll &mdash; and John wept. Then one of the elders said: &ldquo;Do not weep! The Lion of Judah has triumphed.&rdquo; John looked and saw a Lamb, looking as if it had been slain, standing at the center of the throne. Heaven erupted. All creation joined the song: &ldquo;Worthy is the Lamb who was slain!&rdquo;" }}
          />
        </header>

        {/* Context Banner */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: "2rem", borderLeft: `4px solid ${PURPLE}` }}>
          <div style={{ color: PURPLE, fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.5rem" }}>Historical &amp; Literary Context</div>
          <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}
            dangerouslySetInnerHTML={{ __html: "Revelation 5 continues directly from the throne room vision of chapter 4, without any narrative break. Where chapter 4 establishes God&rsquo;s sovereignty through the worship of the Creator, chapter 5 introduces the crisis that only the Lamb can resolve: the sealed scroll of God&rsquo;s purposes for history cannot be opened by any creature. This is one of the most theologically dense chapters in all of Scripture. The Lion-Lamb paradox at its center redefines messianic expectation, the nature of divine power, and the meaning of victory. The chapter draws on Daniel 7 (the one like a son of man receiving authority), Zechariah 4 (the seven eyes of the LORD), Exodus 19 (the kingdom of priests), and Isaiah 53 (the suffering servant). The new song sung here anticipates the cosmic completion of redemption depicted at the end of the book." }}
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
                border: `1px solid ${activeTab === t ? PURPLE : BORDER}`,
                background: activeTab === t ? PURPLE : CARD,
                color: activeTab === t ? "#fff" : MUTED,
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 1rem" }}>Overview of Revelation 5</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 1rem", fontSize: "1.02rem" }}
                dangerouslySetInnerHTML={{ __html: "Revelation 5 is the most concentrated piece of Christology in the book. Its drama unfolds in four movements: the crisis of the sealed scroll (vv.1-4), the announcement and appearance of the Lion-Lamb (vv.5-6), the taking of the scroll and the first song (vv.7-10), and the expanding circles of cosmic worship (vv.11-14). The chapter answers the question that has haunted the whole scene since chapter 4 was opened: if God reigns on his throne, how does that reign connect with the suffering of the churches on earth? The answer is the Lamb: the one who was slain is the one who takes the scroll and executes the purposes of God in history." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 1rem", fontSize: "1.02rem" }}
                dangerouslySetInnerHTML={{ __html: "The Lion-Lamb paradox that stands at the heart of the chapter is the interpretive key to Revelation as a whole. Everywhere the book uses the language of conquest, warfare, and victory, it must be read through this lens: the Lamb conquers by being slain. The victory is the cross and resurrection. The weapons of the Lamb&rsquo;s army are the word of their testimony and their willingness to not love their lives even unto death (12:11). The power of the Lamb is the power of self-giving love, faithfulness, and suffering witness &mdash; the very opposite of what Rome understood as power." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "1.02rem" }}
                dangerouslySetInnerHTML={{ __html: "The universal scope of redemption stated in verse 9 &mdash; &ldquo;persons from every tribe and language and people and nation&rdquo; &mdash; is not merely a comforting inclusivity statement. It is a direct counter-claim to Roman imperial ideology, which also claimed universal sovereignty. The Lamb&rsquo;s sovereignty is different: he purchases a people, he does not conquer them. He makes them a kingdom of priests, not subjects. He enables them to reign on the earth, not merely to survive under his protection." }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                ["Chapter", "Revelation 5"],
                ["Setting", "The heavenly throne room"],
                ["Central Figure", "The Lamb who was slain"],
                ["Crisis", "Who is worthy to open the scroll?"],
                ["Resolution", "The Lion of Judah &mdash; the Lamb"],
                ["Key Theme", "Worthy is the Lamb!"],
              ].map(([k, v]) => (
                <div key={k} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 0.5 }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: v }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 1rem" }}>Key Symbols in Revelation 5</h3>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {[
                  ["The Sealed Scroll", "The fullness of God&rsquo;s purposes for creation, sealed with seven seals, requiring maximum authorization to open; variously interpreted as the title deed of creation, the book of judgment, or God&rsquo;s sovereign plan for history"],
                  ["Seven Seals", "The seals of supreme authority and secrecy; only the most qualified person in existence can open them; they mark the scroll as containing the highest possible divine determination"],
                  ["The Lamb (<em>arnion</em>)", "The diminutive &ldquo;little lamb&rdquo; used 28 times for Christ in Revelation; emphasizing sacrificial vulnerability as the mode of his cosmic authority; he appears &ldquo;as if slain&rdquo; but standing"],
                  ["Seven Horns", "The fullness of divine power (<em>horn</em> = strength in the Old Testament); seven = complete, perfect; the Lamb has not partial but absolute power, the opposite of what his slain appearance suggests"],
                  ["Seven Eyes", "The seven spirits of God sent into all the earth &mdash; the omniscient, omnipresent Holy Spirit operating through the Lamb; the Lamb sees everything, everywhere, at all times"],
                  ["Golden Bowls of Incense", "The prayers of the saints preserved and presented before the Lamb; every prayer of every suffering Christian is held in the throne room of heaven, not lost, not wasted, not forgotten"],
                  ["The New Song", "The eschatological song that greets the decisive act of God in redemption; new because the cross was a once-for-all event that could not have been celebrated before it occurred; the song of the age of fulfillment"],
                ].map(([sym, desc]) => (
                  <div key={sym as string} style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "0.875rem" }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }} dangerouslySetInnerHTML={{ __html: sym as string }} />
                    <div style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: desc as string }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Videos Section in Overview */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 1.25rem" }}>Video Teaching on Revelation 5</h3>
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
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 1.25rem" }}>Key Themes in Revelation 5</h2>
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

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${GOLD}44`, padding: "1.75rem", marginTop: "1.5rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.875rem" }}>The Structure of the Chapter</h3>
              <div style={{ display: "grid", gap: "0.875rem" }}>
                {[
                  { ref: "vv.1-4", title: "The Crisis: Who Is Worthy?", desc: "The sealed scroll held by God; the universal summons and cosmic silence; John weeps because no creature qualifies to open the purposes of God for history.", color: GOLD },
                  { ref: "vv.5-6", title: "The Resolution: Lion and Lamb", desc: "An elder announces the Lion of Judah who has conquered; John sees a Lamb looking as if slain, standing at the center of the throne with seven horns and seven eyes.", color: PURPLE },
                  { ref: "vv.7-10", title: "The Scroll Taken and the New Song", desc: "The Lamb takes the scroll; heaven collapses in worship; the four living creatures and elders sing the new song of redemption from every tribe, language, people, and nation.", color: TEAL },
                  { ref: "vv.11-14", title: "All Creation in Worship", desc: "The angelic myriads join in sevenfold acclamation; every creature in every sphere of existence adds its voice; the living creatures say Amen and the elders fall in worship.", color: GREEN },
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
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 0.5rem" }}>Verse-by-Verse Commentary: Revelation 5</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 1.5rem", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "A detailed walkthrough of all fourteen verses in canonical order. Click any section to expand the commentary. Verse references are linked to the Bible reader." }}
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
                {["Revelation 5:1", "Revelation 5:2", "Revelation 5:4", "Revelation 5:5", "Revelation 5:6", "Revelation 5:7", "Revelation 5:8", "Revelation 5:9", "Revelation 5:10", "Revelation 5:12", "Revelation 5:13"].map((ref) => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${GREEN}44`, padding: "1.75rem", marginTop: "1.25rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.875rem" }}>Old Testament Parallels</h3>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {[
                  { ot: "Daniel 7:13-14", rev: "Revelation 5:7", desc: "The one like a son of man approaching the Ancient of Days and receiving authority, glory, and sovereign power &mdash; the template for the Lamb taking the scroll from the one on the throne" },
                  { ot: "Isaiah 53:7", rev: "Revelation 5:6", desc: "The suffering servant led like a lamb to the slaughter &mdash; the Isaianic background for the slain Lamb standing at the center of the throne; suffering servant and divine warrior united in one person" },
                  { ot: "Genesis 49:9-10", rev: "Revelation 5:5", desc: "Jacob&rsquo;s blessing on Judah: the lion&rsquo;s cub, the scepter not departing from Judah &mdash; the Lion of the tribe of Judah title applied to the Lamb who has conquered" },
                  { ot: "Exodus 19:6", rev: "Revelation 5:10", desc: "God&rsquo;s promise at Sinai: &ldquo;you will be for me a kingdom of priests&rdquo; &mdash; enacted by the Lamb&rsquo;s blood, which has made those purchased from every nation &ldquo;a kingdom and priests&rdquo;" },
                ].map((item) => (
                  <div key={item.ot} style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "0.875rem" }}>
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.2rem", flexWrap: "wrap" }}>
                      <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem" }}>{item.ot}</span>
                      <span style={{ color: MUTED, fontSize: "0.85rem" }}>&rarr;</span>
                      <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem" }}>{item.rev}</span>
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
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.35rem", margin: "0 0 0.5rem" }}>Application: The Lion-Lamb Paradox and the New Song</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 1.5rem", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "How does the paradox of the Lion-Lamb shape our understanding of power, victory, and redemption? And what does it mean to sing a new song in response to what the Lamb has accomplished? Revelation 5 is the theological center of gravity for Christian ethics, spirituality, and worship." }}
            />
            <div style={{ display: "grid", gap: "1.25rem" }}>
              {applicationPoints.map((point) => (
                <div key={point.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
                  <h3 style={{ color: point.color, fontWeight: 800, fontSize: "1.05rem", margin: "0 0 0.875rem" }}>{point.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "0.97rem" }} dangerouslySetInnerHTML={{ __html: point.body }} />
                </div>
              ))}
            </div>

            {/* The New Song Interactive Element */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${TEAL}44`, padding: "1.75rem", marginTop: "1.5rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.5rem" }}>The New Song: A Worship Reflection</h3>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 1rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "The &ldquo;new song&rdquo; of Revelation 5:9 is the song of the redeemed &mdash; those who have been purchased by the Lamb&rsquo;s blood and made a kingdom of priests. Reflect on these questions and write your own response to the Lamb&rsquo;s worthiness. What does singing a new song mean for you today?" }}
              />
              <div style={{ display: "grid", gap: "0.6rem", marginBottom: "1rem" }}>
                {[
                  "What has the Lamb&rsquo;s sacrifice actually accomplished in your life specifically? What are you thankful to have been redeemed from?",
                  "The song declares that the redeemed are &ldquo;a kingdom and priests&rdquo; &mdash; what does it mean for your ordinary daily life that you are a priest before God and a co-regent under the Lamb?",
                  "The new song cannot be sung from before the cross &mdash; it belongs to the age of fulfillment. What would it look like for your worship today to be fully &ldquo;post-cross&rdquo; in its gratitude and confidence?",
                ].map((q, i) => (
                  <div key={i} style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: "0.875rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: `${i + 1}. ${q}` }} />
                  </div>
                ))}
              </div>
              <textarea
                value={newSongText}
                onChange={(e) => setNewSongText(e.target.value)}
                placeholder="Write your new song reflection here..."
                style={{ width: "100%", minHeight: 160, background: BG, border: `1px solid ${TEAL}44`, borderRadius: 10, color: TEXT, padding: "1rem", fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
              />
              {newSongText && (
                <p style={{ color: TEAL, fontSize: "0.82rem", marginTop: "0.5rem", marginBottom: 0 }}>Your reflection is saved in this session. Worthy is the Lamb.</p>
              )}
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${GOLD}44`, padding: "1.75rem", marginTop: "1.5rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.05rem", margin: "0 0 0.875rem" }}>Personal Reflection Questions</h3>
              <div style={{ display: "grid", gap: "0.875rem" }}>
                {[
                  "John wept when no one was found worthy to open the scroll. Have you ever wept for the world &mdash; for the suffering that seems unanswered, for the injustice that seems unremedied? How does the appearance of the Lamb speak into that weeping?",
                  "The Lion of Judah who appears as the slain Lamb redefines what &ldquo;winning&rdquo; looks like. Where in your own life are you tempted to seek victory through means that look more like the lion than the lamb &mdash; through force, dominance, or self-assertion rather than self-giving faithfulness?",
                  "The prayers of the saints are held in golden bowls before the Lamb. How does this image change how you think about your own prayers &mdash; especially those that seem unanswered? What difference does it make to know that every prayer is preserved in the throne room of heaven?",
                  "All creation joins the new song in verses 13-14. What would it mean for your weekly worship to be a genuine participation in what is already happening in the throne room of heaven, rather than a local production that generates its own energy from scratch?",
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
                  { author: "Richard Bauckham", title: "The Theology of the Book of Revelation", note: "Brilliant short study; the chapter on the Lamb and the Lion is one of the finest treatments of the Lion-Lamb paradox in print" },
                  { author: "G.K. Beale", title: "The Book of Revelation (NIGTC)", note: "Exhaustive on the Daniel 7 and Isaiah 53 backgrounds; essential for understanding the scroll and the Lamb&rsquo;s worthiness" },
                  { author: "Fleming Rutledge", title: "The Crucifixion", note: "Not a Revelation commentary but the best modern treatment of the cross as cosmic defeat of the powers; illuminates what the Lamb&rsquo;s worthiness means" },
                  { author: "Eugene Peterson", title: "Reversed Thunder", note: "Lyrical and pastoral; especially strong on the new song and the meaning of worship in Revelation 5 for the church today" },
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
            dangerouslySetInnerHTML={{ __html: "Revelation 5 is the theological center of the entire book. The Lamb who was slain is the answer to every question the book raises: Who is worthy? Who can open the scroll of history? Who redeems the suffering of the martyrs? Who gathers a people from every nation? The Lion who is the Lamb &mdash; the one who conquered by dying and rose by the power of God &mdash; holds the scroll, opens the seals, and receives the worship of all creation. Worthy is the Lamb." }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
