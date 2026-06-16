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

const ACCENT = GOLD;

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
    heading: "The LORD Riding on a Swift Cloud",
    reference: "Isaiah 19:1",
    color: GOLD,
    paragraphs: [
      "The oracle opens with a theophany of terrible majesty: &ldquo;Behold, the LORD is riding on a swift cloud and comes to Egypt; and the idols of Egypt will tremble at his presence, and the heart of the Egyptians will melt within them&rdquo; (v. 1). The cloud is the chariot of the living God, the visible token of his coming in judgment and glory. Egypt boasted of its sun-god and its river-gods, yet here the true God advances upon the land riding the very clouds that no Egyptian deity could command.",
      "This image of the cloud-rider runs like a golden thread through Scripture. The psalmist sings that the LORD &ldquo;makes the clouds his chariot&rdquo; and &ldquo;rides on the wings of the wind&rdquo; (Psalm 104:3). The same imagery clothes the appearing of God at Sinai, the descent upon the mercy seat, and the pillar that led Israel through the wilderness. To say that the LORD rides on a cloud is to declare that he is the sovereign of heaven and earth, who comes near to act and whom no power of man or idol can withstand.",
      "Most strikingly, this cloud-rider imagery is later gathered up into the figure of the Son of Man, who in Daniel&rsquo;s vision comes &ldquo;with the clouds of heaven&rdquo; to receive an everlasting dominion (Daniel 7:13&ndash;14), and which the Lord Jesus claimed for himself when he spoke of the Son of Man coming on the clouds with power and great glory. The God who rides on the swift cloud into Egypt is the same Lord who will come again on the clouds to judge the living and the dead.",
      "At his coming the idols tremble and the heart of Egypt melts. The trembling of the idols exposes their nothingness; what cannot save itself cannot save its worshippers. And the melting heart, a phrase used of nations seized by dread before the LORD, shows that the inward courage of Egypt dissolves at his approach. Before this God the whole proud edifice of Egyptian religion and confidence simply collapses, for no created thing can stand when the Creator draws near in judgment.",
    ],
  },
  {
    heading: "Civil War and the Spirit of Confusion",
    reference: "Isaiah 19:2&ndash;4, 14",
    color: ROSE,
    paragraphs: [
      "&ldquo;And I will stir up Egyptians against Egyptians, and they will fight, each against another and each against his neighbor, city against city, kingdom against kingdom&rdquo; (v. 2). The first stroke of judgment is internal disintegration. Egypt will not fall merely to an outside conqueror but will be turned against itself, neighbor against neighbor and city against city, until the unity that made it great is torn apart from within. When God withdraws his restraining hand, a society devours itself.",
      "The judgment reaches deeper still, into the very spirit and counsel of the nation: &ldquo;and the spirit of the Egyptians within them will be emptied out, and I will confound their counsel&rdquo; (v. 3). The morale of Egypt is drained away and its wisdom is thrown into confusion. The LORD declares that he has &ldquo;mingled within her a spirit of confusion&rdquo; (v. 14), so that the whole land staggers &ldquo;as a drunken man staggers in his vomit.&rdquo; The nation famed for order now reels in disorder, for God has confounded the mind of a proud people.",
      "In their panic the Egyptians turn precisely where they ought not: &ldquo;they will inquire of the idols and the sorcerers, and the mediums and the necromancers&rdquo; (v. 3). Stripped of counsel, they grope after the very idols that trembled before the LORD and consult the dead instead of the living God. This is the deep irony of idolatry; in the hour of crisis it sends men back to the powerless things that brought the crisis on. The land is then given over &ldquo;into the hand of a hard master, and a fierce king will rule over them&rdquo; (v. 4).",
      "Behind every line stands the refrain &ldquo;declares the Lord GOD of hosts.&rdquo; The civil war, the draining of the spirit, the confounding of counsel, the cruel ruler, all are traced to the sovereign hand of God. He is not a spectator of Egypt&rsquo;s collapse but its author, for the nations are in his hand. The same God who stirs up Egypt against itself can still the storm and heal the breach, and the oracle will turn at last from this dismantling to a work of mercy no one could have foreseen.",
    ],
  },
  {
    heading: "The Drying of the Nile and the Collapse of an Economy",
    reference: "Isaiah 19:5&ndash;10",
    color: TEAL,
    paragraphs: [
      "The judgment now strikes at the very source of Egypt&rsquo;s life: &ldquo;And the waters of the sea will be dried up, and the river will be dry and parched, and its canals will become foul, and the branches of Egypt&rsquo;s Nile will diminish and dry up, reeds and rushes will rot away&rdquo; (vv. 5&ndash;6). Egypt was the gift of the Nile; the river was its breadbasket, its highway, and its god. To strike the Nile is to strike the foundation of the whole land, for without its annual flood Egypt is only desert.",
      "From the failure of the river flows the failure of every trade that depended on it. &ldquo;The fishermen will mourn and lament, all who cast a hook in the Nile; and they will languish who spread nets upon the water&rdquo; (v. 8). The fishing industry collapses, and so does the great textile trade: &ldquo;The workers in combed flax will be in despair, and the weavers of white cotton&rdquo; (v. 9). Egypt&rsquo;s famed linen, prized across the ancient world, fails at the root because the flax that fed it can no longer grow in the parched fields.",
      "The collapse spreads through every layer of society until even &ldquo;those who are the pillars of the land will be crushed, and all who work for pay will be grieved&rdquo; (v. 10). The skilled and the laborer alike are undone. This is a portrait of an entire economy unraveling, not by accident of nature but by the deliberate act of God, who turns the source of a nation&rsquo;s wealth into the instrument of its ruin. The river that was worshipped becomes a stinking, rotting channel of death.",
      "The lesson is as old as the judgment is severe; that which a nation trusts in place of God will fail it in the day of God&rsquo;s reckoning. Egypt rested its security on the Nile, its religion on the river, its wealth on the harvest, and God touched the one thing on which everything else depended. So it is whenever men build their hope on any created thing; the foundation that is not God will one day be dried up, and all that was raised upon it will fall.",
    ],
  },
  {
    heading: "The Folly of the Wise Counselors of Zoan",
    reference: "Isaiah 19:11&ndash;15",
    color: PURPLE,
    paragraphs: [
      "Egypt was renowned throughout the ancient world for its wisdom, its priests, its astronomers, and its sages. Yet the oracle pours scorn upon this celebrated learning: &ldquo;The princes of Zoan are utterly foolish; the wisest counselors of Pharaoh give stupid counsel&rdquo; (v. 11). The very men whose business was wisdom are exposed as fools, for human cleverness, however polished, is helpless against the purposes of God when he sets himself against a people.",
      "Their boast is set down to be shattered: &ldquo;How can you say to Pharaoh, &lsquo;I am a son of the wise, a son of ancient kings&rsquo;?&rdquo; (v. 11). They trace their wisdom back through long generations of learning, as though pedigree could supply insight. But the prophet turns their pride into a question that silences them: &ldquo;Where then are your wise men? Let them tell you that they might know what the LORD of hosts has purposed against Egypt&rdquo; (v. 12). The wise cannot even read the plan of God against their own land.",
      "The cause of this collapse of wisdom is named plainly: &ldquo;The LORD has mingled within her a spirit of confusion, and they will make Egypt stagger in all its deeds, as a drunken man staggers in his vomit&rdquo; (v. 14). When God withdraws the light of understanding, the cleverest counsel becomes the staggering of a drunkard. The princes of Memphis are deluded, and &ldquo;those who are the cornerstones of her tribes have made Egypt stagger&rdquo; (v. 13). The leaders meant to steady the nation only make it reel.",
      "Here is one of the great themes of Isaiah, that the wisdom of this world is folly before God. Paul gathers up the same truth when he asks, &ldquo;Where is the one who is wise? Where is the scribe? Where is the debater of this age? Has not God made foolish the wisdom of the world?&rdquo; (1 Corinthians 1:20). No counsel, no learning, no ancient pedigree can avail against the LORD. The collapse of Egypt&rsquo;s wisdom prepares the way for the only wisdom that saves, the knowledge of the living God himself.",
    ],
  },
  {
    heading: "In That Day - Egypt Turns to the LORD",
    reference: "Isaiah 19:16&ndash;22",
    color: GREEN,
    paragraphs: [
      "After fifteen verses of unrelenting judgment, the oracle turns on a hinge of breathtaking grace with the repeated phrase &ldquo;in that day,&rdquo; sounded six times across the closing section. The first &ldquo;in that day&rdquo; still trembles with fear: Egypt will be like women, in dread before the hand the LORD shakes over it (vv. 16&ndash;17). But the fear becomes the seed of faith, for the same God who terrifies Egypt is about to make himself known to her in mercy.",
      "Astonishingly, the oracle foretells the conversion of the very land it has just condemned: &ldquo;In that day there will be five cities in the land of Egypt that speak the language of Canaan and swear allegiance to the LORD of hosts&rdquo; (v. 18). To speak the language of Canaan and to swear allegiance to the LORD is to be drawn into the worship of Israel&rsquo;s God. The conquered enemy becomes the confessing worshipper; the nation of the idols learns the speech of the covenant.",
      "Then comes a sign of stunning intimacy: &ldquo;In that day there will be an altar to the LORD in the midst of the land of Egypt, and a pillar to the LORD at its border&rdquo; (v. 19). An altar in Egypt, the house of bondage, the land of false gods, is a thing almost unthinkable, yet God promises it as a witness to himself. &ldquo;When they cry to the LORD because of oppressors, he will send them a savior and defender, and deliver them&rdquo; (v. 20). The pattern of the Exodus is now reversed in grace; Egypt cries, and God sends a deliverer.",
      "The climax of this turning is mercy through judgment: &ldquo;And the LORD will make himself known to the Egyptians, and the Egyptians will know the LORD in that day and worship with sacrifice and offering&rdquo; (v. 21). &ldquo;And the LORD will strike Egypt, striking and healing, and they will return to the LORD, and he will listen to their pleas and heal them&rdquo; (v. 22). The very strokes that humbled Egypt become the means of her healing. God wounds in order to heal, and the smiting of Egypt ends not in destruction but in worship.",
    ],
  },
  {
    heading: "The Highway of Blessing - Egypt, Assyria, and Israel",
    reference: "Isaiah 19:23&ndash;25",
    color: GOLD,
    paragraphs: [
      "The oracle reaches its astonishing summit in a vision that overturns centuries of enmity: &ldquo;In that day there will be a highway from Egypt to Assyria, and Assyria will come into Egypt, and Egypt into Assyria, and the Egyptians will worship with the Assyrians&rdquo; (v. 23). Egypt and Assyria were the two great superpowers between which little Israel was so often crushed, the slave-house of the south and the destroyer of the north. Now a highway joins them, and the road of armies becomes the road of worshippers.",
      "Then Israel is drawn into this fellowship as the third partner: &ldquo;In that day Israel will be the third with Egypt and Assyria, a blessing in the midst of the earth&rdquo; (v. 24). The chosen nation is no longer the prize fought over by empires but the bond that unites them in blessing. The promise to Abraham, that in him all the families of the earth would be blessed, begins to open out before our eyes, as the ancient enemies are gathered with Israel into one company of the blessed.",
      "The crowning words are among the most staggering in all the prophets: &ldquo;the LORD of hosts has blessed, saying, Blessed be Egypt my people, and Assyria the work of my hands, and Israel my inheritance&rdquo; (v. 25). The titles once reserved for Israel are now lavished on her former oppressors. Egypt is called &ldquo;my people,&rdquo; Assyria &ldquo;the work of my hands,&rdquo; and Israel still &ldquo;my inheritance.&rdquo; Three names of covenant love are spoken over three nations that once knew only war.",
      "This is a foreshadowing of the gospel reaching all nations, the mystery that Paul unfolds, that the Gentiles are fellow heirs, members of the same body, partakers of the promise in Christ (Ephesians 2&ndash;3; Romans 9&ndash;11). The dividing wall of hostility is broken down, and those who were far off are brought near. The vision of Isaiah 19 is fulfilled wherever the nations once estranged from God and from one another are reconciled at the cross and gathered into the one people of God, a blessing in the midst of the earth.",
    ],
  },
];

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Overview of Isaiah 19",
    reference: "Isaiah 19:1&ndash;25",
    paragraphs: [
      "Isaiah 19 belongs to the great series of oracles against the nations in chapters 13 through 23, where the prophet announces the LORD&rsquo;s sovereign rule over every kingdom of the earth. This particular oracle concerns Egypt, the ancient slave-house from which Israel had been redeemed and the perennial temptation of God&rsquo;s people to seek security in human alliances rather than in the LORD. Yet what begins as a sentence of judgment ends as one of the most expansive visions of grace in the entire Old Testament.",
      "The chapter falls into two clearly marked halves. The first fifteen verses (vv. 1&ndash;15) pronounce a fourfold dismantling of Egypt, striking in turn at her religion, her political unity, her economy, and her famed wisdom. The LORD rides on a swift cloud, the idols tremble, the nation tears itself apart in civil war, the Nile dries up, the economy collapses, and the celebrated counselors of Pharaoh are exposed as fools. Pillar by pillar, the whole proud structure of Egyptian confidence is brought down.",
      "Then the oracle turns, on the repeated hinge of the words &ldquo;in that day,&rdquo; from judgment to mercy (vv. 16&ndash;25). The fear that grips Egypt becomes the seed of faith; five cities swear allegiance to the LORD, an altar rises in the midst of Egypt, and God makes himself known so that the Egyptians worship him with sacrifice and offering. The God who strikes Egypt strikes in order to heal, and the chapter that opened with trembling idols closes with a redeemed people crying out to the living God.",
      "The summit of the chapter is a vision of stunning reconciliation. A highway joins Egypt and Assyria, the two great enemies of Israel, and Israel becomes the third with them, &ldquo;a blessing in the midst of the earth&rdquo; (v. 24). The LORD speaks over these former foes the very titles of covenant love: &ldquo;Blessed be Egypt my people, and Assyria the work of my hands, and Israel my inheritance&rdquo; (v. 25). The oracle of doom becomes a foreshadowing of the gospel reaching all nations.",
      "Theologically, the chapter sets forth the LORD as the God of all the earth, who judges the proud and yet purposes to gather the nations into his blessing. It dismantles the four pillars on which a godless society rests, religion, politics, economy, and wisdom, only to raise in their place a worship that springs from grace. The astonishing inclusion of Egypt and Assyria anticipates the day when from every nation a people would be drawn to know and worship the one true God.",
      "This guide explores Isaiah 19 through four lenses: an overview of its place and structure, its key recurring themes, a closer walk through its principal verses, and the ways its ancient vision shapes the believer&rsquo;s faith and hope today. It is a chapter that begins in the terror of judgment and ends in the wonder of a universal blessing, and in that movement it preaches the whole counsel of God, who wounds and heals, who scatters and gathers, and whose mercy is wide as the world.",
    ],
  },
  {
    id: "Key Themes",
    heading: "Key Themes of Isaiah 19",
    reference: "Isaiah 19:1&ndash;25",
    paragraphs: [],
  },
  {
    id: "Verse by Verse",
    heading: "Walking Through Isaiah 19",
    reference: "Isaiah 19:1&ndash;25",
    paragraphs: [
      "Verse 1 sets the tone with a theophany of judgment: &ldquo;Behold, the LORD is riding on a swift cloud and comes to Egypt; and the idols of Egypt will tremble at his presence, and the heart of the Egyptians will melt within them.&rdquo; The cloud-rider, the chariot of the living God, advances on the land, and at his coming the idols shake and the courage of Egypt dissolves. The whole chapter unfolds from this opening picture of the sovereign God drawing near.",
      "Verses 2 through 4 announce internal collapse. God will stir up &ldquo;Egyptians against Egyptians&rdquo; in civil war, &ldquo;city against city, kingdom against kingdom&rdquo; (v. 2); the spirit of Egypt will be emptied out and its counsel confounded, so that the people turn in desperation to &ldquo;the idols and the sorcerers, and the mediums and the necromancers&rdquo; (v. 3). The land is then handed over &ldquo;into the hand of a hard master, and a fierce king will rule over them&rdquo; (v. 4).",
      "Verses 5 through 10 strike at the Nile, the source of Egypt&rsquo;s life. The waters dry up, the canals grow foul, the reeds and rushes rot away (vv. 5&ndash;6); the fishermen mourn (v. 8), the workers in combed flax and the weavers despair (v. 9), and even &ldquo;the pillars of the land will be crushed&rdquo; (v. 10). The river that was worshipped becomes a stinking channel of ruin, and the entire economy that depended on it unravels thread by thread.",
      "Verses 11 through 15 expose the folly of Egypt&rsquo;s wise men. &ldquo;The princes of Zoan are utterly foolish&rdquo; (v. 11); their boast, &ldquo;I am a son of the wise, a son of ancient kings,&rdquo; is silenced by the question, &ldquo;Where then are your wise men?&rdquo; (vv. 11&ndash;12). The LORD has &ldquo;mingled within her a spirit of confusion&rdquo; (v. 14), and Egypt staggers like a drunken man. So ends the first half of the chapter, with every pillar of Egypt cast down.",
      "Verses 16 through 22 mark the great turning, each opening with &ldquo;in that day.&rdquo; Egypt trembles before the LORD (vv. 16&ndash;17), five cities swear allegiance and speak the language of Canaan (v. 18), an altar rises in the midst of Egypt (v. 19), God sends a savior when they cry to him (v. 20), and he makes himself known so that they worship with sacrifice and offering (v. 21). &ldquo;The LORD will strike Egypt, striking and healing&rdquo; (v. 22), and they return to him.",
      "Verses 23 through 25 crown the chapter with a vision of reconciliation. A highway joins Egypt and Assyria (v. 23), Israel becomes the third with them, &ldquo;a blessing in the midst of the earth&rdquo; (v. 24), and the LORD speaks his benediction over all three: &ldquo;Blessed be Egypt my people, and Assyria the work of my hands, and Israel my inheritance&rdquo; (v. 25). The ancient enemies are gathered into one fellowship of worship, and the oracle of judgment closes in the wonder of a universal blessing.",
    ],
  },
  {
    id: "Application",
    heading: "Application: The God Who Judges and Heals the Nations",
    reference: "Isaiah 19:1&ndash;25",
    paragraphs: [
      "The first application of Isaiah 19 is to learn that the LORD is sovereign over every nation and power on earth. Egypt was a superpower, proud of its religion, its government, its wealth, and its wisdom, and the LORD dismantled all four with a word. The believer is freed from both the fear of the nations and the temptation to trust in them, for the God who rides on the swift cloud holds every kingdom in his hand. Our security rests not in human strength but in the Lord of hosts.",
      "Second, the chapter warns against building our lives on any foundation but God. Egypt trusted the Nile, and God dried it up; Egypt trusted its wisdom, and God turned it to folly. Whatever we put in the place of God, our wealth, our cleverness, our institutions, will fail us in the day of his reckoning. The believer is called to examine where his true confidence lies and to tear down every idol of self-reliance, that the LORD alone may be his rock and his refuge.",
      "Third, Isaiah 19 teaches that God wounds in order to heal. &ldquo;The LORD will strike Egypt, striking and healing, and they will return to the LORD&rdquo; (v. 22). The judgments that humbled Egypt became the very means of her conversion. So in our own lives, the hard providences that break our pride and self-sufficiency are often the strokes by which God draws us back to himself. The believer learns to trust the hand that wounds, knowing it is the hand that heals.",
      "Fourth, the chapter expands our vision of God&rsquo;s saving purpose to the whole world. If the LORD could call Egypt &ldquo;my people&rdquo; and Assyria &ldquo;the work of my hands,&rdquo; then no nation, no people, no person lies beyond the reach of his mercy. This is a summons to hope and to mission, to long and to labor for the day when the highway of blessing draws the nations together in worship. The gospel that reconciles former enemies at the cross is the fulfillment of this ancient vision.",
      "Finally, the chapter calls the believer to be, with Israel, &ldquo;a blessing in the midst of the earth&rdquo; (v. 24). Those who have been gathered into the people of God are called not to despise the nations but to be a channel of blessing to them. We are heirs of the promise to Abraham, that in him all the families of the earth would be blessed, and we live it out as we carry the knowledge of the living God to those who were once far off, until the day when every former enemy is named among the blessed.",
    ],
  },
];

const reflectionQuestions = [
  "Isaiah 19 shows the LORD dismantling Egypt's religion, politics, economy, and wisdom. Where are you tempted to trust in these same human pillars rather than in the God who is sovereign over them all?",
  "The Nile that Egypt worshipped was dried up by God. What 'Nile' in your life - a source of security or pride - might God be calling you to release into his hands?",
  "Verse 22 says the LORD strikes and heals. Can you look back on a hard providence that, in time, drew you nearer to God? How does that shape your trust in him now?",
  "The oracle ends with God calling former enemies 'my people' and 'the work of my hands.' Is there a nation, group, or person you have written off as beyond God's mercy? How does this vision challenge you?",
  "Israel was to be 'a blessing in the midst of the earth.' In what concrete way can you be a channel of God's blessing to those around you who do not yet know him?",
];

const videoItems = [
  { videoId: "Hq3vP7nX2mK", title: "Isaiah 19 - The Oracle Concerning Egypt (Bible Study)" },
  { videoId: "Lt8dR4cZ9bY", title: "The LORD Rides on a Swift Cloud - Isaiah 19:1" },
  { videoId: "Wn2kV6pT5aJ", title: "An Altar to the LORD in Egypt - Isaiah 19:19" },
  { videoId: "Bm5xH1rQ4cD", title: "Egypt My People, Assyria My Handiwork - Isaiah 19:23-25" },
];

export default function Isaiah19GuidePage() {
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
            Isaiah 19 &mdash; The Oracle Concerning Egypt and the Highway of Blessing
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Behold, the LORD is riding on a swift cloud and comes to Egypt; and the idols of Egypt will tremble at his presence&rdquo; (Isaiah 19:1). An oracle that dismantles Egypt&rsquo;s religion, politics, economy, and wisdom, then turns in wonder to an altar in the midst of Egypt, the healing of the nations, and the highway that joins Egypt, Assyria, and Israel as a blessing in the midst of the earth." }} />
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Watch and Study Isaiah 19</h2>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: "0 0 1.75rem" }}>
            Explore the judgment on Egypt and its idols, the collapse of human wisdom and economy, and the breathtaking vision of the nations joined with Israel in worship through these teaching videos.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Blessing in the Midst of the Earth</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Isaiah 19 begins with the LORD riding on a swift cloud to judge Egypt and ends with him speaking words of covenant love over former enemies. Between them lies the dismantling of every human pillar and the wonder of an altar in the midst of Egypt &mdash; until the highway of blessing joins Egypt, Assyria, and Israel, and the God who strikes is revealed as the God who heals, gathering the nations into one company of the blessed." }} />
        </div>
      </main>
    </div>
  );
}
