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

const ACCENT = TEAL;

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

interface SubBlock {
  heading: string;
  reference: string;
  color: string;
  paragraphs: string[];
}

const themeBlocks: SubBlock[] = [
  {
    heading: "Salvation as the Turning of God's Anger to Comfort",
    reference: "Isaiah 12:1",
    color: GOLD,
    paragraphs: [
      "The song opens not with triumph but with a confession of what God has done to the heart: &ldquo;I will give thanks to you, O LORD, for though you were angry with me, your anger turned away, that you might comfort me&rdquo; (v. 1). The singer does not pretend that the wrath was never real. The first eleven chapters of Isaiah have thundered with judgment against a rebellious people, and the worshiper here acknowledges that he was rightly under the divine displeasure. Yet the wonder of the song is that the very anger which once burned has now turned away.",
      "This turning is the heartbeat of the gospel itself. God&rsquo;s anger against sin is not a passing mood but the settled response of a holy God to all that opposes him. The astonishing news of Isaiah 12 is that this anger can turn, not because God grows indifferent to sin, but because he provides a way for his wrath to be satisfied and his mercy to triumph. The same God who was angry becomes the God who comforts, and the comfort is all the sweeter because the anger was so real.",
      "The word &ldquo;comfort&rdquo; echoes forward into the great announcement of Isaiah 40: &ldquo;Comfort, comfort my people, says your God&rdquo; (Isaiah 40:1). The little hymn of chapter 12 is a foretaste of that whole second movement of the book, where judgment gives way to consolation. The turning of God&rsquo;s anger is not a denial of justice but its fulfillment, for the One who bears the judgment will be revealed in the suffering Servant of Isaiah 53.",
      "For the believer this verse is the very shape of redemption. We were by nature children of wrath (Ephesians 2:3), yet in Christ the anger of God against our sin was poured out on the cross, so that for those who are in him there is now no condemnation (Romans 8:1; 5:9). The song of Isaiah 12 is therefore the song of every redeemed sinner who can say, &ldquo;though you were angry with me, your anger turned away.&rdquo; Thanksgiving is the only fitting response to such mercy.",
    ],
  },
  {
    heading: "Trust That Casts Out Fear",
    reference: "Isaiah 12:2",
    color: GREEN,
    paragraphs: [
      "&ldquo;Behold, God is my salvation; I will trust, and will not be afraid&rdquo; (v. 2). At the center of the song stands a deliberate exchange: fear is set aside and trust takes its place. The chapters that precede this hymn are filled with reasons for terror, for the Assyrian armies loom and the day of the LORD draws near. Yet the singer looks past every cause of dread and rests in the one truth that overcomes them all, that God himself is salvation.",
      "The grammar is striking, for the worshiper does not merely say that God grants salvation but that God is salvation. The gift and the giver are one. This is no transactional rescue but a personal possession of God himself, and because God cannot fail, the one who trusts in him need not be afraid. Trust is not the denial of danger but the confidence that the One who holds us is greater than every danger.",
      "This is precisely the lesson Isaiah had pressed upon King Ahaz in chapter 7, &ldquo;If you are not firm in faith, you will not be firm at all&rdquo; (Isaiah 7:9), and upon the people in chapter 8, &ldquo;the LORD of hosts, him you shall honor as holy. Let him be your fear&rdquo; (Isaiah 8:13). The song of chapter 12 is the answer of a heart that has learned the lesson. Where Ahaz trembled and grasped at political alliances, the redeemed remnant simply trusts and is unafraid.",
      "The New Testament gathers this confidence into the love of God revealed in Christ, for &ldquo;perfect love casts out fear&rdquo; (1 John 4:18). The believer who knows that God is his salvation can face affliction, persecution, and even death without terror, because nothing can separate him from the love of God in Christ Jesus (Romans 8:38&ndash;39). The trust that replaces fear is the very posture of saving faith.",
    ],
  },
  {
    heading: "The LORD My Strength and My Song",
    reference: "Isaiah 12:2",
    color: PURPLE,
    paragraphs: [
      "The second half of verse 2 is a direct quotation, almost word for word, of the Song of the Sea sung by Moses and Israel after the crossing of the Red Sea: &ldquo;the LORD GOD is my strength and my song, and he has become my salvation&rdquo; (compare Exodus 15:2). By echoing that ancient hymn, Isaiah deliberately ties the future deliverance to the founding act of redemption in Israel&rsquo;s history. The God who once split the sea and drowned Pharaoh&rsquo;s armies will do a new and even greater work of salvation.",
      "The line also appears in Psalm 118:14, a psalm sung at the great festivals and later applied to the triumphal entry of Jesus. Isaiah 12 thus stands at the meeting point of three songs: the song of the exodus, the song of the temple worship, and the song of the new and final deliverance. The threefold echo signals that what is coming is not merely a repeat of the past but its fulfillment, a new exodus that the prophets longed to see.",
      "To call the LORD &ldquo;my strength and my song&rdquo; is to confess that the same God is both the power that saves and the joy that the saved sing about. He is the strength in the struggle and the melody in the celebration. The believer does not merely receive help from God; God himself becomes the very content of the song, so that worship is the natural overflow of salvation.",
      "Here the personal pronoun matters greatly. It is not enough to say that the LORD is strength and salvation in the abstract; the song says &ldquo;my strength,&rdquo; &ldquo;my song,&rdquo; &ldquo;my salvation.&rdquo; The redemption that Isaiah foresees is meant to be personally grasped and personally sung. Every believer is invited to make this ancient confession their own and to find in God both the power that upholds them and the joy that fills their mouth.",
    ],
  },
  {
    heading: "Drawing Water from the Wells of Salvation",
    reference: "Isaiah 12:3",
    color: TEAL,
    paragraphs: [
      "&ldquo;With joy you will draw water from the wells of salvation&rdquo; (v. 3). In a land of scarce rainfall and frequent drought, water was life itself, and a well was a treasure of inexhaustible supply. The image promises that the salvation of God is not a single drink but a deep and abundant source from which the redeemed will draw again and again with joy. The plural &ldquo;wells&rdquo; suggests a fullness and variety of grace that never runs dry.",
      "The Hebrew word for salvation here is &ldquo;yeshuah,&rdquo; the very word that lies behind the name of Jesus, &ldquo;Yeshua,&rdquo; which means &ldquo;the LORD saves&rdquo; (Matthew 1:21). When the angel told Joseph to name the child Jesus, he was naming him the living embodiment of the wells of salvation. The water that Isaiah promised would one day be drawn from a Person, the One in whom all the fullness of God&rsquo;s saving grace would dwell.",
      "This verse came alive in a remarkable way at the Feast of Tabernacles, when each day the priests drew water from the pool of Siloam and poured it out at the altar, recalling God&rsquo;s provision in the wilderness and praying for the rains to come. On the last and greatest day of that very feast, Jesus stood and cried out, &ldquo;If anyone thirsts, let him come to me and drink&rdquo; (John 7:37&ndash;39), declaring himself the true well from which living water flows. The ceremony pointed to him.",
      "The same promise meets the woman at the well in John 4, to whom Jesus offers water that becomes &ldquo;a spring of water welling up to eternal life&rdquo; (John 4:14), and it reaches its consummation in Revelation, where the Lamb leads his people to &ldquo;springs of living water&rdquo; (Revelation 7:17) and the river of life flows from the throne (Revelation 22:1). The joy of drawing water from the wells of salvation is the joy of every believer who comes to Christ and never thirsts again.",
    ],
  },
  {
    heading: "Praise as Mission to the Nations",
    reference: "Isaiah 12:4&ndash;5",
    color: ROSE,
    paragraphs: [
      "The second half of the song turns outward: &ldquo;Give thanks to the LORD, call upon his name, make known his deeds among the peoples, proclaim that his name is exalted&rdquo; (v. 4). The salvation that was so personal in the opening verses cannot be kept private. The redeemed are commanded to publish what God has done, to carry the news beyond the borders of Zion and make it known among all the peoples of the earth. Praise here becomes proclamation.",
      "This missionary impulse runs through the whole book of Isaiah, which envisions a day when the nations stream to the mountain of the LORD (Isaiah 2:2&ndash;4), when the Servant is given as a light to the nations (Isaiah 49:6), and when all flesh shall come to worship (Isaiah 66:23). The little song of chapter 12 plants this global vision at the climax of the book&rsquo;s first section. Salvation is never meant to terminate on the saved; it overflows toward the world.",
      "&ldquo;Sing praises to the LORD, for he has done gloriously; let this be made known in all the earth&rdquo; (v. 5). The worship of the redeemed is itself a form of witness. When the people of God sing of his glorious deeds, they bear testimony to the nations, and their praise becomes the means by which the knowledge of God spreads to the ends of the earth. Worship and mission are joined together, two aspects of a single response to grace.",
      "The pattern finds its fulfillment in the Great Commission, where the risen Christ sends his people to make disciples of all nations (Matthew 28:18&ndash;20), and in the song of the redeemed in Revelation, gathered from every tribe and tongue and people and nation (Revelation 5:9). The command of Isaiah 12 to make God&rsquo;s deeds known among the peoples is the church&rsquo;s calling still, that the joy of salvation might be carried to every corner of the earth.",
    ],
  },
  {
    heading: "Great in Your Midst Is the Holy One of Israel",
    reference: "Isaiah 12:6",
    color: GREEN,
    paragraphs: [
      "The song reaches its summit in the final verse: &ldquo;Shout, and sing for joy, O inhabitant of Zion, for great in your midst is the Holy One of Israel&rdquo; (v. 6). The deepest ground of joy is not merely what God has done but where God now dwells, for he is great &ldquo;in your midst.&rdquo; The Holy One whose glory once seemed unapproachable has come to dwell among his people, and his presence transforms terror into singing.",
      "&ldquo;The Holy One of Israel&rdquo; is Isaiah&rsquo;s favorite name for God, sounded more than two dozen times across the book. It was the name he heard the seraphim cry in his vision of the throne, &ldquo;Holy, holy, holy is the LORD of hosts&rdquo; (Isaiah 6:3), a holiness so awful that the prophet cried, &ldquo;Woe is me!&rdquo; Yet the wonder of the song is that this same Holy One now dwells in the midst of his people, not to consume them but to be their joy.",
      "This is the great theme of Immanuel, &ldquo;God with us,&rdquo; first announced in Isaiah 7:14 and fulfilled when the Word became flesh and dwelt among us (John 1:14; Matthew 1:23). The promise that the Holy One would be great in the midst of Zion finds its answer in the incarnation, when God himself took up residence among his people in the person of his Son. The holiness that once kept sinners at a distance now draws near in grace.",
      "The promise points finally to the new creation, where God&rsquo;s dwelling is with man, &ldquo;and he will dwell with them, and they will be his people, and God himself will be with them as their God&rdquo; (Revelation 21:3). The church is even now the temple in which God dwells by his Spirit (1 Corinthians 3:16), and the day is coming when the joy of Isaiah 12 will be complete, when the Holy One will be great in the midst of his people forever and the shout of joy will never end.",
    ],
  },
];

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Overview of Isaiah 12",
    reference: "Isaiah 12:1&ndash;6",
    paragraphs: [
      "Isaiah 12 is one of the shortest chapters in the book, only six verses, yet it carries enormous weight as the crowning conclusion of the entire first major section of Isaiah, chapters 1 through 12. After eleven chapters of mingled judgment and promise, of warnings against Judah and visions of the coming Branch from the stump of Jesse, the prophet gathers it all up into a single hymn of thanksgiving. The chapter is not a prophecy of more events but a song to be sung when those events come to pass.",
      "The little hymn is bracketed by the repeated phrase &ldquo;you will say in that day&rdquo; (vv. 1, 4), which marks it as the song of the redeemed in the age of fulfillment. &ldquo;In that day&rdquo; is one of Isaiah&rsquo;s great eschatological signposts, pointing beyond the immediate horizon to the day of final salvation. The chapter thus gives us the words that the people of God will sing when the promises of the preceding chapters are fully realized, a song placed in advance into the mouths of the saved.",
      "The structure falls naturally into two parallel songs, each introduced by &ldquo;you will say in that day.&rdquo; The first song (vv. 1&ndash;3) is intensely personal, the praise of the individual heart that has known God&rsquo;s anger turned to comfort and now draws water with joy from the wells of salvation. The second song (vv. 4&ndash;6) turns outward to the community and the nations, calling the redeemed to make God&rsquo;s deeds known among all the peoples of the earth. Personal salvation flows into public proclamation.",
      "Throughout, the chapter is saturated with echoes of Israel&rsquo;s earlier worship, above all the Song of the Sea in Exodus 15, sung after the deliverance at the Red Sea. The line &ldquo;the LORD GOD is my strength and my song, and he has become my salvation&rdquo; (v. 2) is taken directly from that ancient hymn. By this echo Isaiah signals that the salvation he foresees is a new exodus, a deliverance even greater than the first, accomplished by the same mighty God.",
      "At the theological center of the chapter stands the word salvation, the Hebrew &ldquo;yeshuah,&rdquo; which appears three times in these six verses and which lies behind the very name of Jesus. The wells of salvation, the strength of salvation, the God who has become salvation, all point forward to the One in whom God&rsquo;s saving purpose would take flesh. Isaiah 12 is in this sense a quiet prophecy of the gospel, sung centuries before the Savior was born.",
      "This guide explores the chapter through four lenses: an overview of its place and shape within Isaiah, its key recurring themes, a closer walk through its six verses, and the ways its ancient song shapes the worship and life of the believer today. Though brief, Isaiah 12 is a treasury of praise, and to study it is to learn the very songs of the redeemed.",
    ],
  },
  {
    id: "Key Themes",
    heading: "Key Themes of Isaiah 12",
    reference: "Isaiah 12:1&ndash;6",
    paragraphs: [],
  },
  {
    id: "Verse by Verse",
    heading: "Walking Through Isaiah 12",
    reference: "Isaiah 12:1&ndash;6",
    paragraphs: [
      "Verse 1 opens the first song with thanksgiving born of mercy: &ldquo;You will say in that day: I will give thanks to you, O LORD, for though you were angry with me, your anger turned away, that you might comfort me.&rdquo; The worshiper does not deny that God&rsquo;s anger was real and deserved, yet he marvels that it has turned away to comfort. This turning of wrath to consolation is the very shape of redemption and the foundation of all the praise that follows.",
      "Verse 2 declares the ground of fearless trust: &ldquo;Behold, God is my salvation; I will trust, and will not be afraid; for the LORD GOD is my strength and my song, and he has become my salvation.&rdquo; The second half is a direct quotation of the Song of the Sea (Exodus 15:2), tying this future deliverance to the exodus. Because God himself is salvation, fear gives way to trust, and the redeemed find in him both their strength and their song.",
      "Verse 3 gives the chapter&rsquo;s most beloved image: &ldquo;With joy you will draw water from the wells of salvation.&rdquo; In a thirsty land, the well of inexhaustible water pictures the abundance of God&rsquo;s saving grace. The Hebrew word for salvation, yeshuah, points forward to Jesus, who at the Feast of Tabernacles cried out, &ldquo;If anyone thirsts, let him come to me and drink&rdquo; (John 7:37). The wells of salvation are found at last in him.",
      "Verse 4 begins the second song and turns the praise outward: &ldquo;And you will say in that day: Give thanks to the LORD, call upon his name, make known his deeds among the peoples, proclaim that his name is exalted.&rdquo; The salvation that was so personal in the first song now becomes a message to be published among the nations. Praise overflows into proclamation, and worship becomes witness to all the peoples of the earth.",
      "Verse 5 presses the missionary call further: &ldquo;Sing praises to the LORD, for he has done gloriously; let this be made known in all the earth.&rdquo; The glorious deeds of God are not to be hidden in Zion but proclaimed to the ends of the earth. The singing of the redeemed is itself a form of testimony, the means by which the knowledge of the LORD spreads across the world. Worship and mission are joined in a single act of praise.",
      "Verse 6 brings the song to its summit: &ldquo;Shout, and sing for joy, O inhabitant of Zion, for great in your midst is the Holy One of Israel.&rdquo; The deepest joy is the presence of God dwelling among his people. The Holy One whose throne Isaiah saw high and lifted up (Isaiah 6) now dwells great in the midst of Zion, the Immanuel theme fulfilled in Christ and consummated in the new creation, where God will dwell with his people forever.",
    ],
  },
  {
    id: "Application",
    heading: "Application: Singing the Song of Salvation",
    reference: "Isaiah 12:1&ndash;6",
    paragraphs: [
      "The first application of Isaiah 12 is to learn to give thanks for the turning of God&rsquo;s anger to comfort. The believer who grasps that he was rightly under the wrath of a holy God, and that this wrath was turned away in Christ, can never take salvation for granted. Such a one lives in continual thanksgiving, knowing that every comfort is undeserved mercy. Let the song of verse 1 become the daily confession of the redeemed heart, &ldquo;though you were angry with me, your anger turned away.&rdquo;",
      "Second, the chapter calls the believer to let trust drive out fear. In a world full of reasons for anxiety, the song teaches us to look past every danger to the one truth that overcomes them all, that God himself is our salvation. To say with the singer, &ldquo;I will trust, and will not be afraid,&rdquo; is to anchor the soul in the God who cannot fail. The believer faces affliction not by denying the danger but by resting in the One who is greater than every danger.",
      "Third, Isaiah 12 invites the believer to draw water from the wells of salvation with joy. The grace of God in Christ is not a single drink taken at conversion but an inexhaustible source from which we draw again and again. In prayer, in the Word, in the sacraments, and in worship, the believer returns to the well and is refreshed. The one who comes to Christ, the living water, will never thirst, and the drawing is to be done with joy, not as a duty but as a delight.",
      "Fourth, the song commands that personal salvation overflow into public proclamation. The redeemed cannot keep silent; they are to make God&rsquo;s deeds known among the peoples and let his praise be heard in all the earth. Every believer is therefore a missionary in some measure, called to publish the glorious works of God by word and song and life. The joy of salvation is meant to spread, and the worship of the church is itself a witness to a watching world.",
      "Finally, Isaiah 12 fixes the believer&rsquo;s deepest joy on the presence of God dwelling in the midst of his people. The Holy One of Israel, once approached only with trembling, now dwells among us in Christ and within us by his Spirit. This presence is the ground of the shout and the song, the joy that no circumstance can take away. The believer lives toward the day when this joy will be complete, when God will dwell with his people forever and the song of salvation will never end.",
    ],
  },
];

const reflectionQuestions = [
  "Isaiah 12 begins with thanksgiving that God's anger turned away to comfort. How does remembering that you were rightly under God's wrath, and that it was turned away in Christ, shape your daily gratitude?",
  "The singer says, 'I will trust, and will not be afraid.' What fears are you facing right now, and what would it look like to set trust in God's salvation in their place?",
  "Where in your life do you most need to draw water from the wells of salvation? What practices help you return again and again to Christ, the living water?",
  "Isaiah 12 commands the redeemed to make God's deeds known among the peoples. Who in your life needs to hear what God has done, and how might your worship become a witness to them?",
  "The deepest joy of the song is that the Holy One is great in your midst. How does the presence of God with you and within you change the way you face an ordinary day?",
];

const videoItems = [
  { videoId: "Hs1iN0jXzqE", title: "Isaiah 12 - The Song of Salvation (Bible Study)" },
  { videoId: "Tv8wQ2mZ0kP", title: "With Joy You Will Draw Water from the Wells of Salvation - Isaiah 12:3" },
  { videoId: "Rn5cB9xY7dL", title: "Behold, God Is My Salvation - Trust over Fear in Isaiah 12:2" },
  { videoId: "Kw3pD6vN4aQ", title: "Great in Your Midst - The Holy One of Israel in Isaiah 12" },
];

export default function Isaiah12GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Isaiah 12 &mdash; The Song of Salvation
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;With joy you will draw water from the wells of salvation&rdquo; (Isaiah 12:3). A hymn of thanksgiving that crowns the first section of Isaiah, singing of God&rsquo;s anger turned to comfort, trust that casts out fear, the wells of salvation, praise carried to the nations, and the Holy One of Israel great in the midst of his people." }} />
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />

            {activeTab === "Key Themes" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                {themeBlocks.map((block, bi) => (
                  <div key={bi} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${block.color}`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 4px", color: TEXT }} dangerouslySetInnerHTML={{ __html: block.heading }} />
                    <div style={{ color: block.color, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: block.reference }} />
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {block.paragraphs.map((para, i) => (
                        <p key={i} style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.02rem", lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: para }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {currentSection.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            )}

            {activeTab === "Application" && (
              <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
                <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.2rem" }}>Questions for Reflection</h3>
                <ul style={{ margin: 0, padding: "0 0 0 1.1rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                  {reflectionQuestions.map((q, i) => (
                    <li key={i} style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: q }} />
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        <div style={{ marginTop: "3.5rem", paddingTop: "2.5rem", borderTop: `1px solid ${BORDER}` }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Watch and Study Isaiah 12</h2>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: "0 0 1.75rem" }}>
            Explore the song of salvation, the wells of living water, and the Holy One of Israel in the midst of his people through these teaching videos.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The God Who Has Become Our Salvation</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Isaiah 12 begins with the turning of God&rsquo;s anger to comfort and ends with the Holy One of Israel dwelling great in the midst of his people. Between them lies a song of trust that casts out fear, of joy drawn from the wells of salvation, and of praise carried to the nations &mdash; a hymn that echoes the Song of the Sea and points forward to Jesus, in whom God has truly become our salvation." }} />
        </div>
      </main>
    </div>
  );
}
