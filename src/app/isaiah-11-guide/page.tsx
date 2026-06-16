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

const ACCENT = GREEN;

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
    heading: "The Messiah from the Stump of Jesse",
    reference: "Isaiah 11:1",
    color: GREEN,
    paragraphs: [
      "The opening image of Isaiah 11 cannot be understood apart from the closing image of Isaiah 10. There the prophet describes the Lord lopping the boughs of the great forest with terrifying power, the lofty trees brought low, the thickets of the forest cut down with an axe, and Lebanon falling by the Majestic One (Isaiah 10:33&ndash;34). The proud Assyrian empire and the corrupt Davidic establishment alike are pictured as a vast forest felled to the ground. Out of that devastated landscape, where only stumps remain, Isaiah suddenly turns to a single living shoot. &ldquo;There shall come forth a shoot from the stump of Jesse, and a branch from his roots shall bear fruit&rdquo; (v. 1).",
      "The word translated &ldquo;shoot&rdquo; (Hebrew <em>choter</em>) and the word translated &ldquo;branch&rdquo; (Hebrew <em>netzer</em>) both speak of new, tender life springing from what appears to be dead. By naming Jesse rather than David, Isaiah deliberately reaches back behind the royal dynasty to its humble origin. Jesse was a Bethlehemite farmer; David was the youngest and least likely of his sons. The point is that the coming king will not arise from the proud, towering height of the established monarchy but from its lowly root, as though the whole tree had to be cut down so that God could begin again from the stump.",
      "This image of a tender shoot from a felled tree became one of the great messianic pictures of the Old Testament. The Hebrew word <em>netzer</em> echoes through later prophetic hope, and many have heard in it a foreshadowing of the title &ldquo;Nazarene&rdquo; applied to Jesus (Matthew 2:23). The fruitfulness of this branch &mdash; &ldquo;a branch from his roots shall bear fruit&rdquo; &mdash; contrasts sharply with the barrenness of the felled forest. Where human pride produces only stumps and ruin, the work of God produces a living, fruit-bearing branch that will not fail.",
      "The theological weight of this single verse is enormous. It declares that the future of God&rsquo;s people does not rest on the survival of human institutions, however venerable, but on the creative power of God to bring life out of death. The Davidic line would indeed be cut down; by the time of the exile the throne would be empty and the dynasty humiliated. Yet from that very stump, centuries later, a shoot would arise in Bethlehem, the city of Jesse, in fulfillment of this word. Christian readers have always seen in this verse the announcement of Jesus of Nazareth, the true Branch, born of David&rsquo;s line yet arising in lowliness and obscurity.",
    ],
  },
  {
    heading: "The Sevenfold Spirit Resting upon Him",
    reference: "Isaiah 11:2",
    color: PURPLE,
    paragraphs: [
      "What distinguishes this coming king above all is that &ldquo;the Spirit of the LORD shall rest upon him&rdquo; (v. 2). The verb &ldquo;rest&rdquo; suggests not a momentary visitation but an abiding, permanent endowment. The Spirit who came upon the judges and kings of Israel for particular tasks and then departed will settle upon this king and remain. Isaiah then unfolds the character of that Spirit in three further pairs, producing a sevenfold description: the Spirit of the LORD, and the Spirit of wisdom and understanding, the Spirit of counsel and might, the Spirit of knowledge and the fear of the LORD.",
      "These are not seven separate spirits but one Spirit described in the fullness of his operation. Wisdom and understanding speak to the king&rsquo;s perception &mdash; his ability to discern the true nature of things and to grasp the deep order of God&rsquo;s world. Counsel and might join right judgment to the power to carry it out, so that this king is never the helpless idealist who knows the good but cannot accomplish it. Knowledge and the fear of the LORD root all of this in a living, reverent relationship with God himself, so that the king&rsquo;s rule flows from intimate communion with the One he serves.",
      "The early church saw in this sevenfold description a window into the riches of the Holy Spirit, and the imagery flows forward into the book of Revelation, where John greets the churches from &ldquo;the seven spirits who are before his throne&rdquo; (Revelation 1:4) and sees &ldquo;seven torches of fire&rdquo; which are &ldquo;the seven spirits of God&rdquo; (Revelation 4:5). The number seven signifies completeness and perfection; the Spirit upon the Messiah lacks nothing. Here is a king filled to overflowing with every grace and gift necessary to rule the world in righteousness.",
      "This verse also forms the deep background of the descent of the Spirit upon Jesus at his baptism, when the heavens opened and the Spirit descended upon him and remained (John 1:32&ndash;33). The Gospel writers deliberately echo Isaiah&rsquo;s language of the Spirit resting and abiding. Jesus begins his ministry by reading from Isaiah and declaring, &ldquo;The Spirit of the Lord is upon me&rdquo; (Luke 4:18). The sevenfold Spirit promised in Isaiah 11 came to rest, fully and permanently, upon the Branch from Jesse.",
    ],
  },
  {
    heading: "Righteous and Compassionate Rule",
    reference: "Isaiah 11:3&ndash;5",
    color: GOLD,
    paragraphs: [
      "The fruit of this Spirit-filled life is a particular kind of rule. &ldquo;His delight shall be in the fear of the LORD&rdquo; (v. 3). The king takes pleasure not in power for its own sake but in reverent obedience to God. From this delight flows a justice that does not depend on appearances: &ldquo;He shall not judge by what his eyes see, or decide disputes by what his ears hear.&rdquo; Human rulers are deceived by surface impressions, swayed by the powerful and the persuasive; this king sees to the heart of every matter with the discernment of the Spirit.",
      "The orientation of his justice is striking and tender: &ldquo;with righteousness he shall judge the poor, and decide with equity for the meek of the earth&rdquo; (v. 4). The poor and the meek are precisely those whom earthly courts so often fail. They have no bribe to offer, no power to wield, no voice to command attention. Yet they are the special concern of the messianic king, whose righteousness is measured not by how he treats the mighty but by how he defends the lowly. Here is the heart of biblical justice, which always bends toward the vulnerable.",
      "Yet this gentleness toward the meek is matched by a fierce severity toward wickedness: &ldquo;he shall strike the earth with the rod of his mouth, and with the breath of his lips he shall kill the wicked.&rdquo; The king&rsquo;s only weapon is his word; he does not need sword or spear, for his very speech carries the authority of God. Paul echoes this verse when he describes the lawless one whom the Lord Jesus will slay &ldquo;with the breath of his mouth&rdquo; (2 Thessalonians 2:8), and Revelation pictures a sharp sword proceeding from the mouth of the rider on the white horse (Revelation 19:15).",
      "The portrait closes with an image of the king clothed for his work: &ldquo;Righteousness shall be the belt of his waist, and faithfulness the belt of his loins&rdquo; (v. 5). The belt was what gathered the robe and prepared a man for action; righteousness and faithfulness are the very garments in which this king girds himself for the labor of ruling. Everything he does is held together by these two virtues. He is utterly reliable, utterly just, and his rule will never be corrupted by the failings that brought down every king before him.",
    ],
  },
  {
    heading: "The Peaceable Kingdom and Renewed Creation",
    reference: "Isaiah 11:6&ndash;9",
    color: TEAL,
    paragraphs: [
      "From the character of the king the prophet turns to the world his reign produces, and the vision becomes almost unbearably beautiful. &ldquo;The wolf shall dwell with the lamb, and the leopard shall lie down with the young goat, and the calf and the lion and the fattened calf together; and a little child shall lead them&rdquo; (v. 6). Predator and prey, the strong and the helpless, lie down together in peace. The whole created order, fractured by the fall and groaning under the curse, is here restored to harmony. A little child, the most vulnerable of creatures, walks safely among beasts that once would have devoured him.",
      "The vision deepens: &ldquo;The cow and the bear shall graze; their young shall lie down together; and the lion shall eat straw like the ox&rdquo; (v. 7). Even the carnivorous nature of the beasts is transformed, recalling the original creation in which God gave green plants for food. &ldquo;The nursing child shall play over the hole of the cobra, and the weaned child shall put his hand on the adder&rsquo;s den&rdquo; (v. 8). The most ancient enmity, the curse pronounced in Eden between the serpent and the seed of the woman, is here undone, and the infant plays in safety where deadly venom once lurked.",
      "The reason for this transformation is given in the climactic verse: &ldquo;They shall not hurt or destroy in all my holy mountain; for the earth shall be full of the knowledge of the LORD as the waters cover the sea&rdquo; (v. 9). The peace of creation flows from the knowledge of God saturating the world. As completely as the ocean fills its bed, so completely will the knowledge of the LORD pervade the earth. This same promise appears in Habakkuk 2:14, anchoring it as one of the great eschatological hopes of Scripture: a world wholly filled with the knowledge of its Maker.",
      "The New Testament gathers up this hope and grounds it in the work of Christ. Paul writes that the whole creation has been groaning together in the pains of childbirth, waiting to be set free from its bondage to corruption and to obtain the freedom of the glory of the children of God (Romans 8:19&ndash;22). The peaceable kingdom of Isaiah 11 is the renewed creation that the resurrection of Jesus has already begun and that his return will complete. It is not a sentimental fantasy but the sure promise of a world made new under the reign of the Branch from Jesse.",
    ],
  },
  {
    heading: "The Signal for the Nations",
    reference: "Isaiah 11:10",
    color: ROSE,
    paragraphs: [
      "Having described the king and his kingdom, Isaiah now widens the horizon to the whole world. &ldquo;In that day the root of Jesse, who shall stand as a signal for the peoples &mdash; of him shall the nations inquire, and his resting place shall be glorious&rdquo; (v. 10). The same root that produced the shoot now stands lifted up as a banner, a rallying point visible to all the earth. The nations, the Gentile peoples who had been outside the covenant, come streaming toward this signal to seek him.",
      "The verb &ldquo;inquire&rdquo; or &ldquo;seek&rdquo; is rich with meaning; the nations do not merely observe the king from a distance but actively come to him for instruction, for salvation, for life. This anticipates the great ingathering of the Gentiles that runs through Isaiah and reaches its fulfillment in the mission of the church. The Branch from Jesse is not a merely national, Israelite hope; he is the desire of the nations, the one toward whom all peoples are drawn.",
      "Paul seizes upon this very verse to crown his great argument that Christ came for Jew and Gentile alike. In Romans 15:12 he quotes it directly: &ldquo;The root of Jesse will come, even he who arises to rule the Gentiles; in him will the Gentiles hope.&rdquo; For Paul, Isaiah 11:10 is the scriptural charter of the Gentile mission, proof that the inclusion of the nations was God&rsquo;s design from the beginning, written into the messianic promise itself. The root of Jesse stands as a signal, and from every nation people come to find their hope in him.",
      "The phrase &ldquo;his resting place shall be glorious&rdquo; adds a final note of settled peace. The wandering, the exile, the restlessness of God&rsquo;s people find their end in the glorious rest of the messianic king. Where his banner is lifted, there the nations find not only a ruler but a home. The glory that once filled the temple now rests upon the person of the Branch himself, the dwelling place of God among his people.",
    ],
  },
  {
    heading: "The Second Exodus and the Gathered Remnant",
    reference: "Isaiah 11:11&ndash;16",
    color: GREEN,
    paragraphs: [
      "The closing section of the chapter describes a great regathering of God&rsquo;s scattered people. &ldquo;In that day the Lord will extend his hand yet a second time to recover the remnant that remains of his people, from Assyria, from Egypt, from Pathros, from Cush, from Elam, from Shinar, from Hamath, and from the coastlands of the sea&rdquo; (v. 11). The phrase &ldquo;a second time&rdquo; deliberately recalls the first great deliverance, the exodus from Egypt under Moses. What God did once in bringing Israel out of bondage he will do again, on a far grander scale, gathering his dispersed people from every corner of the known world.",
      "This new exodus heals the ancient divisions of the people. &ldquo;He will raise a signal for the nations and will assemble the banished of Israel, and gather the dispersed of Judah from the four corners of the earth&rdquo; (v. 12). The northern kingdom of Israel and the southern kingdom of Judah, long divided and mutually hostile, are reunited under the one king. &ldquo;The jealousy of Ephraim shall depart, and those who harass Judah shall be cut off; Ephraim shall not be jealous of Judah, and Judah shall not harass Ephraim&rdquo; (v. 13). The reign of the Branch produces not only peace among the beasts but reconciliation among the long-estranged tribes of God&rsquo;s own people.",
      "Isaiah then paints the regathering in vivid exodus colors. &ldquo;The LORD will utterly destroy the tongue of the Sea of Egypt, and will wave his hand over the River with his scorching breath, and strike it into seven channels, and he will lead people across in sandals&rdquo; (v. 15). As the Red Sea was divided for the first exodus, so the waters that stand in the way of the returning remnant will be parted. &ldquo;And there will be a highway from Assyria for the remnant that remains of his people, as there was for Israel when they came up from the land of Egypt&rdquo; (v. 16). The way home is made plain and level by the power of God.",
      "For Christian readers, this second exodus finds its deepest fulfillment in the redemption accomplished by Christ, who gathers a people to himself from every nation, tribe, and tongue. The scattered are brought home not merely to a geographical land but to God himself, through the cross and resurrection of the Branch from Jesse. The reunion of Ephraim and Judah foreshadows the reconciliation of all who were once divided, brought together in the one body of Christ. The chapter that began with a tender shoot from a felled stump ends with a vast highway of return, as the whole purpose of God in the Messiah is unveiled.",
    ],
  },
];

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Overview of Isaiah 11",
    reference: "Isaiah 11:1&ndash;16",
    paragraphs: [
      "Isaiah 11 is one of the towering messianic prophecies of the Old Testament, a chapter that moves from the birth of a king to the renewal of all creation. It stands in deliberate contrast to the chapter that precedes it. In Isaiah 10 the proud forest of Assyria and the corrupt establishment of Judah are pictured as great trees felled to the ground, leaving only stumps and ruin. Out of that devastated landscape Isaiah 11 opens with a single image of hope: a tender shoot springing from the stump of Jesse, a living branch where everything else has been cut down.",
      "The chapter unfolds in three great movements. First comes the portrait of the messianic king himself (vv. 1&ndash;5): his lowly origin from the stump of Jesse, the sevenfold Spirit resting upon him, and the righteous, compassionate rule that flows from his communion with God. Second comes the vision of the peaceable kingdom (vv. 6&ndash;10): a renewed creation in which predator and prey lie down together, a little child leads the beasts, and the earth is full of the knowledge of the LORD, with the root of Jesse standing as a signal that draws the nations. Third comes the great regathering (vv. 11&ndash;16): a second exodus in which God recovers the remnant of his scattered people and reunites the long-divided tribes.",
      "What binds these movements together is the figure of the king. Everything depends on him: the justice of his rule, the peace of his kingdom, the ingathering of the nations and the remnant alike. He is no ordinary monarch. The Spirit of the LORD rests upon him without measure, and his reign reaches not only the throne of Judah but the farthest coastlands and the whole created order. Isaiah dares to imagine a king under whom the curse itself is rolled back and the world returns to its created harmony.",
      "The New Testament reads this chapter as a direct prophecy of Jesus of Nazareth. He is the shoot from the stump of Jesse, born in Bethlehem of David&rsquo;s line yet arising in obscurity and lowliness. The Spirit descended upon him at his baptism and remained. Paul quotes verse 10 in Romans 15:12 as the charter of the Gentile mission, and the renewal of creation promised here is the very hope Paul describes in Romans 8. The peaceable kingdom is the new heavens and new earth that Christ has inaugurated and will one day complete.",
      "Yet Isaiah 11 also retains a forward-looking, eschatological dimension that is not yet fully realized. The wolf does not yet lie down with the lamb; the earth is not yet full of the knowledge of the LORD as the waters cover the sea. The chapter therefore holds the church in a posture of hope, looking back to the coming of the Branch in the incarnation and looking forward to his return, when the vision will be consummated and creation set free from its bondage to corruption. It is at once fulfilled and awaited, a prophecy that anchors Christian hope in both directions.",
      "To read Isaiah 11 well is to be drawn into the whole sweep of God&rsquo;s redemptive purpose. It begins with a stump and ends with a highway of return; it begins with a single shoot and ends with the gathering of the nations. At its center stands the Spirit-filled king whose righteousness defends the poor and whose word slays the wicked. This guide explores the chapter through four lenses: an overview of its message, its key theological themes, a closer walk through its verses, and the ways it shapes Christian faith and life today.",
    ],
  },
  {
    id: "Key Themes",
    heading: "Key Themes of Isaiah 11",
    reference: "Isaiah 11:1&ndash;16",
    paragraphs: [],
  },
  {
    id: "Verse by Verse",
    heading: "Walking Through Isaiah 11",
    reference: "Isaiah 11:1&ndash;16",
    paragraphs: [
      "Verse 1 begins where Isaiah 10 ended, with a felled forest of stumps. &ldquo;There shall come forth a shoot from the stump of Jesse, and a branch from his roots shall bear fruit.&rdquo; The Hebrew words for shoot (<em>choter</em>) and branch (<em>netzer</em>) both speak of tender new life. By naming Jesse rather than David, Isaiah reaches behind the proud dynasty to its humble Bethlehem root, declaring that God will begin again from the lowliest place.",
      "Verse 2 describes the Spirit who rests upon this king: &ldquo;the Spirit of the LORD shall rest upon him, the Spirit of wisdom and understanding, the Spirit of counsel and might, the Spirit of knowledge and the fear of the LORD.&rdquo; This sevenfold description portrays the one Spirit in the fullness of his operation, equipping the king with perception, power, and intimate reverence for God. The early church and the book of Revelation drew on this imagery to speak of the seven spirits before God&rsquo;s throne (Revelation 1:4; 4:5).",
      "Verses 3 through 5 unfold the character of his rule. His delight is in the fear of the LORD; he judges not by what his eyes see or by what his ears hear, but with righteousness for the poor and equity for the meek. He strikes the earth with the rod of his mouth and slays the wicked with the breath of his lips, needing no weapon but his word. Righteousness is the belt of his waist and faithfulness the belt of his loins, so that his whole reign is girded with justice and truth.",
      "Verses 6 through 9 paint the peaceable kingdom in unforgettable images. The wolf dwells with the lamb, the leopard lies down with the young goat, the calf and the lion together, and a little child leads them. The cow and the bear graze, the lion eats straw like the ox, and the nursing child plays over the cobra&rsquo;s hole. The reason is given in verse 9: they shall not hurt or destroy in all God&rsquo;s holy mountain, for the earth shall be full of the knowledge of the LORD as the waters cover the sea.",
      "Verse 10 lifts the horizon to the nations: &ldquo;In that day the root of Jesse, who shall stand as a signal for the peoples &mdash; of him shall the nations inquire, and his resting place shall be glorious.&rdquo; The same root that produced the shoot is now raised as a banner toward which all peoples stream. Paul quotes this verse in Romans 15:12 as the foundation of the Gentile mission, declaring that in the root of Jesse the nations will hope.",
      "Verses 11 through 16 describe the second exodus. The Lord stretches out his hand a second time to recover the remnant from Assyria, Egypt, Pathros, Cush, Elam, Shinar, Hamath, and the coastlands. He raises a signal and assembles the banished of Israel and the dispersed of Judah from the four corners of the earth. The jealousy of Ephraim departs and Judah no longer harasses Ephraim; the long-divided tribes are reconciled. As the Red Sea was once parted, God divides the waters again and makes a highway for his returning people.",
    ],
  },
  {
    id: "Application",
    heading: "Application: Living under the Branch from Jesse",
    reference: "Isaiah 11:1&ndash;16",
    paragraphs: [
      "The first application of Isaiah 11 is to find hope in the God who brings life out of death. The chapter opens with a stump, the image of everything cut down and apparently finished, and from that stump God raises a living shoot. Whenever the believer looks at the ruins of a life, a church, a family, or a nation and concludes that nothing good can come from it, Isaiah 11 calls for a different posture. The God who raised the Branch from the felled forest of Jesse is the God who specializes in beginnings from places of apparent death, and the resurrection of Jesus is the supreme proof.",
      "Second, the sevenfold Spirit who rested upon the Messiah is the same Spirit poured out upon his people. While the fullness that rested on Christ is uniquely his, those united to him by faith are filled with the same Spirit of wisdom, understanding, counsel, might, knowledge, and the fear of the LORD. The believer is therefore not left to rule his own small kingdom of decisions and relationships by mere human cleverness, but may seek and receive the wisdom of God. To walk in the Spirit is to share, in measure, in the very graces that adorned the King.",
      "Third, the righteous and compassionate rule of the Messiah sets the pattern for every form of authority his people exercise. Parents, employers, leaders, and citizens are all called to a justice that does not judge by appearances, that bends toward the poor and the meek, and that refuses to be swayed by the powerful and the persuasive. The kingdom of the Branch is marked by special care for the vulnerable, and those who belong to that kingdom carry its values into every court, workplace, and home where they have any measure of influence.",
      "Fourth, the vision of the peaceable kingdom shapes Christian hope for the whole creation. The believer does not look forward merely to the rescue of disembodied souls but to the renewal of the entire created order, when the curse is rolled back and the earth is full of the knowledge of the LORD. This hope gives meaning to the present groaning of creation and to the believer&rsquo;s own labors for justice, mercy, and the care of the world. It also guards against both despair and naive optimism, anchoring hope not in human progress but in the return of the King.",
      "Finally, the ingathering of the nations and the regathering of the remnant call the church to mission and to reconciliation. If the root of Jesse stands as a signal toward which all peoples are drawn, then the people of the Branch are sent to lift up that signal among every nation. And if his reign healed the ancient division between Ephraim and Judah, then his people are called to be agents of reconciliation, tearing down the walls of hostility that still divide the human family. The chapter that ends with a highway of return summons the church to make straight a way for the nations to come home to God.",
    ],
  },
];

const reflectionQuestions = [
  "Where in your own life are you looking at a stump and concluding that nothing good can grow there? How does the shoot from the stump of Jesse reframe that despair?",
  "The sevenfold Spirit rested upon the Messiah. In which areas of your life do you most need to seek the Spirit of wisdom, counsel, or the fear of the LORD?",
  "The king judges with righteousness for the poor and the meek. Whom are you tempted to overlook, and how might the justice of the Branch reshape the way you treat the vulnerable?",
  "The peaceable kingdom promises a creation set free from the curse. How does this hope change the way you face the brokenness and conflict in the world around you?",
  "The root of Jesse stands as a signal for the nations. What would it mean for you to help lift up that signal where you live and work?",
];

const videoItems = [
  { videoId: "lL0wM4dhVVI", title: "Isaiah 11 - The Branch from Jesse and the Peaceable Kingdom" },
  { videoId: "d0A6Uchb1F8", title: "Isaiah 11 - The Sevenfold Spirit upon the Messiah (Bible Study)" },
  { videoId: "0vC8tQ4W4fA", title: "The Root of Jesse and the Hope of the Nations - Romans 15:12" },
  { videoId: "kQ7Qp7Pcv1M", title: "Isaiah 11 - The Wolf and the Lamb and the Knowledge of the LORD" },
];

export default function Isaiah11GuidePage() {
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
            Isaiah 11 &mdash; The Branch from Jesse and the Peaceable Kingdom
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;There shall come forth a shoot from the stump of Jesse, and a branch from his roots shall bear fruit; and the Spirit of the LORD shall rest upon him&rdquo; (Isaiah 11:1&ndash;2). From a felled forest of stumps God raises a Spirit-filled king whose reign renews creation, draws the nations, and gathers the scattered remnant home." }} />
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
              <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
                <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.2rem" }}>Questions for Reflection</h3>
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Watch and Study Isaiah 11</h2>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: "0 0 1.75rem" }}>
            Explore the prophecy of the Branch from Jesse and the peaceable kingdom through these teaching videos.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Earth Full of the Knowledge of the LORD</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Isaiah 11 begins with a tender shoot from a felled stump and ends with a highway of return for the scattered remnant. At its center stands the Spirit-filled king, Jesus the Branch from Jesse, whose righteous reign renews creation, defends the poor, draws the nations, and fills the earth with the knowledge of the LORD as the waters cover the sea." }} />
        </div>
      </main>
    </div>
  );
}
