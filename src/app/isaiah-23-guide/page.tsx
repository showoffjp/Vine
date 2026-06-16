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

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

interface Block {
  heading: string;
  reference?: string;
  accent: string;
  paragraphs: string[];
}

const overviewBlocks: Block[] = [
  {
    heading: "The Oracle Against Tyre &mdash; Pride of the Seas Brought Low",
    reference: "Isaiah 23:1&ndash;5",
    accent: TEAL,
    paragraphs: [
      "Isaiah 23 opens with a cry of lamentation addressed to the ships of Tarshish, the great merchant vessels that carried the wealth of the ancient Mediterranean world. Tarshish was likely the far western reaches of the sea &mdash; perhaps Spain or Sardinia &mdash; and its ships were the long-haul traders that brought tin, silver, and luxury goods back to the ports of the Phoenician coast. To address the ships is to address the whole commercial network of the ancient world: the sea lanes, the harbors, the merchants, the brokers, the entire interlocking system of international trade that Tyre had built and dominated for centuries.",
      "The city of Sidon, Tyre&rsquo;s older sister city to the north, is also caught up in the lamentation. Sidon had been the original mother city of Phoenician civilization, and she had filled the sea with her ships and the world with her merchants. Now Isaiah announces that she is &ldquo;laid waste.&rdquo; The news comes to the ships at sea as they make their approach to the harbor: when they enter the port of Tyre, they will find it silent, stripped of the bustle that was its very identity. The place where merchants gathered to weigh silver and to sign contracts will be a ghost harbor.",
      "Egypt is caught in the lamentation alongside Tyre. The great river civilization to the south had been one of Tyre&rsquo;s most important trading partners &mdash; grain from the Nile Delta fed the populations of the Phoenician cities and kept the merchant ships provisioned for long voyages. When Isaiah says &ldquo;the harvest of the Nile was her revenue, and she was the merchant of nations,&rdquo; he is describing the deep economic interdependence of the ancient Mediterranean world. Now Egypt is in anguish at the news. The fall of Tyre is not merely a local event; it sends tremors through the entire commercial world of the ancient Near East.",
      "The opening movement of the chapter establishes that what is happening to Tyre is not a minor setback or a temporary reversal. The ships that brought the wealth of the world to her harbors are now told to &ldquo;wail&rdquo; &mdash; the same word used for mourning the dead. Something irreversible is underway. The great marketplace of the nations is being shut down by a power greater than any king or fleet or market force. The sovereign God of Israel is acting, and the commercial world built on the pride of Tyre is being dismantled.",
    ],
  },
  {
    heading: "Who Has Planned This Against Tyre? &mdash; The LORD of Hosts",
    reference: "Isaiah 23:6&ndash;9",
    accent: PURPLE,
    paragraphs: [
      "The middle section of the oracle poses the governing theological question of the entire chapter: &ldquo;Who has planned this against Tyre, the bestower of crowns, whose merchants were princes, whose traders were the honored of the earth?&rdquo; The question is rhetorical, and the answer Isaiah intends is unmistakable &mdash; but the question itself is important. It forces the reader to recognize that the fall of Tyre is not an accident of history, not the result of superior military tactics, not the consequence of bad economic management. Someone planned this.",
      "The description of Tyre that the question contains is carefully chosen to make the point as sharp as possible. Tyre was &ldquo;the bestower of crowns.&rdquo; The Phoenician trading empire was so economically powerful that its commercial relationships shaped the political fortunes of surrounding nations. The kings who traded with Tyre were enriched by Tyre; those who lost Tyre&rsquo;s favor suffered. Her merchants were princes in the full sense &mdash; they commanded wealth, influence, and power that rivaled the courts of kings. Her traders were &ldquo;the honored of the earth,&rdquo; the people who received places of honor at every table because they controlled access to the goods everyone wanted.",
      "Isaiah&rsquo;s answer to his own question comes in verse 9: &ldquo;The LORD of hosts has planned it, to defile the pride of all glory, to dishonor all the honored of the earth.&rdquo; This is one of the most concentrated statements of God&rsquo;s purposes in the entire book of Isaiah. The LORD of hosts &mdash; the commander of the armies of heaven, the sovereign over every power in creation &mdash; has deliberately planned the humiliation of Tyre. The word &ldquo;defile&rdquo; is the language of desecration, of treating something precious as worthless. What Tyre valued most &mdash; its glory, its pride, its commercial honor &mdash; God is deliberately defiling.",
      "The passage to Tarshish ordered in verse 6 adds a poignant note: flee to the far west, cross the sea, find a new home in the distant land of your trading partners. But the implicit message is that no place is far enough when the LORD of hosts has planned a judgment. The ships of Tarshish can sail to the ends of the earth, and they will find that the same God who brought down the towers of Tyre is sovereign over every port and every sea lane in the world.",
    ],
  },
  {
    heading: "The Chaldeans Have Made Tyre a Ruin &mdash; The Instrument of Judgment",
    reference: "Isaiah 23:10&ndash;14",
    accent: ROSE,
    paragraphs: [
      "Verses 10 through 14 name the human instrument of Tyre&rsquo;s destruction: the Chaldeans, or Babylonians. This is historically significant. Isaiah is prophesying in the period of Assyrian dominance, yet the oracle points to a Babylonian conquest of Tyre that would not come until the era of Nebuchadnezzar, well over a century later. The long-range precision of the prophecy is part of the point: the LORD of hosts who &ldquo;planned it long ago&rdquo; is not reacting to events but directing them from eternity.",
      "Verse 10 addresses the daughter of Tarshish with the instruction to pass through her land like the Nile through its channels &mdash; a vivid image of dispersal and overflow. The harbor has been destroyed; the commercial infrastructure that gave Tyre its identity has been dismantled. The &ldquo;strength of the sea&rdquo; on which Tyre had always relied, both literally in her island fortress and commercially in her mastery of the shipping lanes, is gone. The sea cannot save what the sovereign God of heaven has decided to judge.",
      "Verse 13 introduces the Chaldeans with a brief but striking description: &ldquo;they raised up its siege towers, they stripped its palaces bare, they made it a ruin.&rdquo; The Babylonian siege of Tyre under Nebuchadnezzar was one of the most prolonged sieges in the ancient world, lasting according to ancient sources for thirteen years. The city on the mainland was destroyed and the island portion held out through the extraordinary logistics of supply by sea. The prophetic description captures what siege warfare meant: the systematic dismantling of everything a city had built over centuries, reduced to rubble by the patient, methodical violence of a conquering empire.",
      "Verse 14 returns to the ships of Tarshish with the instruction to &ldquo;wail&rdquo; because their stronghold is laid waste. The commercial hub that gave the whole Mediterranean trading network its center and its momentum is gone. The merchant ships that had made the voyage from the far west to Tyre&rsquo;s harbors for generations have nowhere to go. The oracle does not moralize in this section; it simply describes the destruction with the spare economy of a dirge. The theology has already been stated: the LORD of hosts planned it. The ships wailing over the ruins are the evidence that his plan has been carried out.",
    ],
  },
  {
    heading: "Seventy Years and Restoration &mdash; Tyre&rsquo;s Profit Consecrated to the LORD",
    reference: "Isaiah 23:15&ndash;18",
    accent: GOLD,
    paragraphs: [
      "The oracle closes on a surprising note of qualified restoration. After the judgment of desolation, Tyre will be &ldquo;forgotten for seventy years, like the days of one king.&rdquo; The seventy-year figure is significant in biblical prophecy; it appears also in Jeremiah 25 as the period of Babylonian captivity for Judah. The use of the same number for Tyre&rsquo;s desolation connects her fate to the broader pattern of God&rsquo;s judicial dealings with the nations in the era of Nebuchadnezzar.",
      "At the end of seventy years, Isaiah says, &ldquo;it will happen to Tyre as in the song of the prostitute.&rdquo; He then quotes a brief piece of the prostitute&rsquo;s song: she is forgotten, she takes her harp and goes about the city, playing and singing, making herself remembered again. The comparison of Tyre to a prostitute is sharp &mdash; it was already implied in the commercial nature of her relationships with the nations, selling her goods and services to all comers, owing ultimate loyalty to none. After the desolation, she will resume her trade, and she will be successful again.",
      "But the most remarkable verse in the entire chapter is verse 18: &ldquo;Her merchandise and her wages will be holy to the LORD. It will not be stored or hoarded, but her merchandise will supply abundant food and fine clothing for those who dwell before the LORD.&rdquo; After all the judgment and lamentation, God does not simply allow Tyre to resume her self-serving commercial activity. He consecrates it. The word &ldquo;holy&rdquo; (Hebrew qodesh) is the word for that which belongs exclusively to God, set apart for his purposes. The merchandise that was the instrument of Tyre&rsquo;s pride will become the provision for God&rsquo;s people.",
      "This closing verse gestures beyond the historical restoration of Tyre to a vision of eschatological transformation. The wealth of the nations will ultimately be brought in to serve the purposes of the God of Israel. Isaiah uses similar language in Isaiah 60 and 61, where the wealth of the nations flows to Zion and the riches of the gentiles are consecrated to the LORD&rsquo;s service. Tyre&rsquo;s story is not only a warning about the pride of commerce; it is a promise that God&rsquo;s purposes ultimately encompass even the commercial wealth of the nations, bringing it under his sovereignty and into the service of his people.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "The Fragility of Commercial Wealth",
    accent: TEAL,
    paragraphs: [
      "The oracle of Isaiah 23 is fundamentally about wealth and its limits. Tyre had built the greatest commercial empire of the ancient world. Her harbor city was the hub of Mediterranean trade; her ships covered the known seas; her merchants commanded wealth that rivaled the treasuries of kings. And all of it collapsed. The ships wailed over the harbor that was destroyed, the merchants who were princes found themselves suddenly without a market, and the city that &ldquo;bestowed crowns&rdquo; on the nations was reduced to ruin.",
      "The theological point is not that commerce is evil or that prosperity is sinful. The oracles of Isaiah do not take that position. The point is that commercial wealth is radically fragile &mdash; fragile in a way that those who trust in it consistently fail to see. The merchants of Tyre had built their confidence on the solidity of their harbor, the extent of their trade routes, the loyalty of their commercial partners, and the reputation of their market. None of it survived the judgment of the LORD of hosts. What looked like the most solid thing in the ancient world dissolved within a generation.",
      "The warning cuts directly into every generation that builds its confidence on economic foundations. Financial instruments, market positions, supply chains, trade agreements, commercial empires &mdash; all of these are subject to the same sovereign God who planned the desolation of Tyre. Isaiah 23 is not an argument against working hard or managing wealth wisely. It is an argument against treating wealth as a foundation for ultimate security. Only the LORD of hosts provides that, and he is the one who can dismantle in a moment what took centuries to build.",
    ],
  },
  {
    heading: "God&rsquo;s Sovereignty Over Nations and Economic Systems",
    accent: PURPLE,
    paragraphs: [
      "The most theologically concentrated verse in Isaiah 23 is verse 9: &ldquo;The LORD of hosts has planned it, to defile the pride of all glory, to dishonor all the honored of the earth.&rdquo; This verse places the fall of the world&rsquo;s greatest commercial empire squarely within the sovereign purposes of God. The LORD of hosts did not merely allow Tyre&rsquo;s fall; he planned it. He did not react to circumstances; he directed them toward a specific outcome that served his purposes.",
      "This sovereignty extends to the nations that God uses as instruments. The Chaldeans who made Tyre a ruin were not acting independently; they were the tools in the hand of the one who planned it long ago. The Assyrians before them and the Persians after them were all similarly instrumental. Isaiah&rsquo;s theology of history is consistent across the entire book: the nations are not autonomous forces contending with God for control of human affairs, but instruments in his hand, summoned and dismissed according to his sovereign design.",
      "For the reader of Isaiah in any era, this means that economic and political upheaval is never outside God&rsquo;s purposes. The collapse of markets, the fall of great commercial powers, the shifting of trade routes and economic centers &mdash; all of these are within the purview of the LORD of hosts. This does not make economic analysis unnecessary; it places every such analysis within the larger frame of a God who is directing all of human history toward the ends he has determined. The ships of Tarshish can map the sea lanes, but it is the LORD who sets the storms and the calms.",
    ],
  },
  {
    heading: "Pride as the Root of Judgment",
    accent: GOLD,
    paragraphs: [
      "The specific sin that the oracle identifies in Tyre is not corruption or violence, though commercial empires were rarely free of either. The sin named in verse 9 is pride: &ldquo;to defile the pride of all glory, to dishonor all the honored of the earth.&rdquo; Tyre&rsquo;s fundamental transgression was the pride that comes from confusing commercial success with autonomous greatness, from treating the ability to bestow crowns on kings as evidence of one&rsquo;s own sovereignty.",
      "Pride of this kind is particularly easy to fall into when one&rsquo;s success has been long-sustained and widely recognized. Tyre had been a great commercial city for centuries. Her merchants had traveled the world. Her ships had opened trade routes that were still in use long after her fall. The success was real, and the honor that came with it was genuine. The error was not in receiving honor but in treating received honor as self-generated sovereignty &mdash; in forgetting that the seas, the harbors, the trade winds, and the grain harvests that made Tyre possible all came from the hand of the God she never acknowledged.",
      "This diagnosis of the pride that precedes judgment is a constant thread in Isaiah. The oracle against Babylon in Isaiah 13 and 14 strikes the same note, as does the oracle against the king of Assyria in Isaiah 10. Pride is not simply a moral failing in this prophetic tradition; it is a theological error, a misidentification of the source of one&rsquo;s power. The city or nation or person that attributes to itself what belongs to God has already set in motion the judgment that will expose the misattribution. &ldquo;God opposes the proud&rdquo; is not merely a proverb; in Isaiah&rsquo;s universe it is a description of how history works.",
    ],
  },
  {
    heading: "Consecration of Wealth &mdash; Tyre&rsquo;s Ultimate Redemption",
    accent: GREEN,
    paragraphs: [
      "The closing verse of Isaiah 23 is among the most unexpected conclusions in all of the oracles against foreign nations. After the wailing, the lamentation, the naming of pride as the cause of judgment, and the seventy-year desolation, the chapter ends not with permanent ruin but with consecration. Tyre&rsquo;s merchandise and wages will be &ldquo;holy to the LORD,&rdquo; not stored or hoarded for her own enrichment, but given for the abundant provision of those who dwell before the LORD.",
      "This ending opens a remarkable theological window. God&rsquo;s purpose in bringing down the proud is not mere destruction; it is the transformation of the thing destroyed into something holy. The commercial wealth that was the instrument of Tyre&rsquo;s pride will ultimately be redirected to serve the people of God. This is the pattern of eschatological reversal that runs through Isaiah&rsquo;s vision: the nations that opposed God and oppressed his people will ultimately bring their wealth to Zion, not because they are coerced, but because God&rsquo;s sovereign purposes encompass even the economic systems of the world.",
      "For the New Testament reader, this verse carries its own resonance. The apostle Paul&rsquo;s great collection for the Jerusalem church from the gentile churches of Macedonia and Achaia is one historical instance of the pattern Isaiah envisions. The wealth of the nations flowing to the service of the people of God, once used for pride and now consecrated to worship &mdash; this is the trajectory of history under the sovereignty of the LORD of hosts. Isaiah 23 is not only a warning; it is a promise that even the great commercial empires of history are being moved, by the one who planned it long ago, toward a final consecration.",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "Verses 1 to 5 &mdash; Wail, O Ships of Tarshish! Sidon Laid Waste",
    reference: "Isaiah 23:1&ndash;5",
    accent: TEAL,
    paragraphs: [
      "The oracle opens with the command &ldquo;Wail, O ships of Tarshish!&rdquo; The ships are addressed as if they are a gathered community receiving bad news, which in a sense they are: they have been the beneficiaries and agents of the commercial system now being destroyed, and the news that their port and market have been laid waste means the end of their world. The instruction to &ldquo;pass over to Kittim&rdquo; (the islands of the far west, likely Cyprus) suggests they should turn around and not even try to enter Tyre&rsquo;s now-ruined harbor.",
      "Sidon is commanded to be ashamed in verse 4 because &ldquo;the sea has spoken, the stronghold of the sea.&rdquo; Sidon was the older Phoenician mother city, the origin of much of what Tyre had become. The sea itself &mdash; the commercial medium on which Phoenician civilization was built &mdash; speaks in the voice of personified judgment. Sidon says, in effect: I have neither labored nor given birth, I have neither reared young men nor brought up young women. The commercial productivity and cultural vitality that the Phoenician sea empire had generated are gone. The metaphor of childbearing and rearing, when applied to a commercial city, speaks of the loss of everything that made the enterprise generative and forward-looking.",
      "Egypt&rsquo;s anguish in verse 5 is the first ripple effect of Tyre&rsquo;s fall. Egypt had been intertwined with Tyre&rsquo;s commercial network for centuries &mdash; the grain of the Nile sustained the Phoenician cities and kept the great merchant fleets provisioned. When the news reaches Egypt, she writhes in anguish. The fall of a great commercial center does not stay local; it sends distress signals through the entire economic network that depended on it. Isaiah is describing what modern economists would call systemic contagion, and he is doing so to make the point that no economic network, however vast and well-connected, is immune to the judgment of God.",
    ],
  },
  {
    heading: "Verses 6 to 9 &mdash; The LORD of Hosts Has Planned It",
    reference: "Isaiah 23:6&ndash;9",
    accent: PURPLE,
    paragraphs: [
      "Verse 6 issues the command to &ldquo;pass over to Tarshish; wail, O inhabitants of the coast!&rdquo; The dispersal of Tyre&rsquo;s population to the distant trading outposts of the commercial empire is the ironic reversal of everything Tyre stood for. Where once the trade goods and wealth of Tarshish flowed into Tyre, now Tyre&rsquo;s own people must flee to Tarshish. The great center of the commercial world is being evacuated, and the evacuees will spend the rest of their lives on the periphery of what they once commanded.",
      "Verse 8 poses the question that is the theological hinge of the whole oracle: &ldquo;Who has planned this against Tyre, the bestower of crowns, whose merchants were princes, whose traders were the honored of the earth?&rdquo; The three-fold description of Tyre &mdash; bestower of crowns, merchants who were princes, traders who were honored &mdash; is designed to emphasize how extraordinary the commercial power of Tyre was, precisely to make the theological answer to the question as arresting as possible. Something this powerful does not fall by accident.",
      "Verse 9 delivers the answer: &ldquo;The LORD of hosts has planned it, to defile the pride of all glory, to dishonor all the honored of the earth.&rdquo; The planning vocabulary is the same used in Isaiah 14:24, where the LORD of hosts declares that what he has planned shall stand. The purpose stated &mdash; to defile the pride of all glory &mdash; identifies the theological diagnosis. What God is dismantling in Tyre is not merely a city or an economy. He is dismantling the pride that had come to define the whole commercial civilization that Tyre represented. And the scope of his purpose is not limited to Tyre: &ldquo;all the honored of the earth&rdquo; are subject to this divine reversal of human pride.",
    ],
  },
  {
    heading: "Verses 10 to 14 &mdash; Chaldeans Have Made Tyre a Ruin",
    reference: "Isaiah 23:10&ndash;14",
    accent: ROSE,
    paragraphs: [
      "Verse 10 instructs the daughter of Tarshish to till her land, like the Nile overflows its banks. The image is of a commercial population suddenly forced back to the land, to agricultural labor, because the sea trade that was their livelihood has collapsed. The strength of the sea on which Tyre depended is gone; the harbor is silent; those who once sailed for a living must now dig in the ground. The reversal is total and the imagery is carefully chosen to emphasize it.",
      "Verse 11 describes the LORD stretching out his hand over the sea, shaking the kingdoms, and commanding that the strongholds of Canaan be destroyed. The gesture of the outstretched hand in Isaiah is consistently the gesture of divine judicial action &mdash; the same hand that was stretched out against Egypt in the exodus is now stretched out against the Canaanite commercial empire. Tyre, for all her centuries of history and commercial achievement, is one of the &ldquo;strongholds of Canaan&rdquo; that the God of Israel is commanding to be destroyed.",
      "Verse 13 names the Chaldeans as the instrument: &ldquo;they raised up its siege towers, they stripped its palaces bare, they made it a ruin.&rdquo; The brevity of the description is almost brutal &mdash; centuries of construction reduced to rubble in a clause. Verse 14 closes the section with the final return to the ships of Tarshish: &ldquo;Wail, O ships of Tarshish, for your stronghold is laid waste.&rdquo; The wail that opened the oracle echoes again at its close, forming a frame of mourning around the central proclamation of divine sovereignty. The ships that carried the wealth of the world now carry only grief.",
    ],
  },
  {
    heading: "Verses 15 to 18 &mdash; Seventy Years, Prostitute&rsquo;s Song, Consecrated Wages",
    reference: "Isaiah 23:15&ndash;18",
    accent: GOLD,
    paragraphs: [
      "Verse 15 introduces the seventy-year period with a peculiar phrase: &ldquo;according to the days of one king.&rdquo; This may refer to the span of a typical royal dynasty or the reign of a particularly long-lived king, designating the desolation as a fixed and bounded period rather than a permanent extinction. The seventy-year figure links Tyre&rsquo;s desolation to the seventy years of Babylonian captivity that Jeremiah will prophesy for Judah, suggesting that both judgments are part of the same divine pattern of bounded discipline followed by measured restoration.",
      "Verses 16 and 17 describe Tyre after seventy years with the extended metaphor of a forgotten prostitute who takes her harp and goes into the streets to make herself remembered again. The metaphor is deliberately uncomfortable. A prostitute is someone whose relationships are purely commercial, who gives herself to all comers for payment, who has no permanent loyalty to any one partner. This is precisely what Tyre&rsquo;s commercial relationships had always been: she traded with everyone, owed ultimate loyalty to no one, and was honored not for any virtue but for the goods and services she could supply. After the desolation, she will resume this commerce, and she will succeed at it again.",
      "But verse 18 transforms the whole picture. The wages of the prostitute &mdash; the very commercial income that Isaiah has been using as a figure for Tyre&rsquo;s unprincipled commerce &mdash; will be &ldquo;holy to the LORD.&rdquo; The profits of trade that were once stored up as the monument to Tyre&rsquo;s pride will instead supply food and clothing for those who dwell before the LORD. The consecration of the prostitute&rsquo;s wages is one of the most striking images in all the prophetic literature: God taking what was entirely self-serving and commercial and redirecting it to holy purposes. This is the miracle of divine sovereignty over human economic activity, and it is the note on which Isaiah chooses to close the oracle of Tyre.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "The Danger of Trusting in Commercial Wealth and Self-Sufficiency",
    accent: TEAL,
    paragraphs: [
      "Isaiah 23 is the Bible&rsquo;s most extended meditation on the spiritual dangers of commercial wealth, and it speaks with remarkable directness to any culture where economic prosperity has become the primary measure of national greatness. Tyre was not unique in the ancient world for being commercially successful; she was unique in the degree to which her commercial success had become her identity and the ground of her confidence. The oracle does not accuse her of a particular crime; it accuses her of a particular posture &mdash; the posture of the city that believes its own wealth is self-generated and self-sustaining.",
      "For individuals and communities shaped by modern market economies, this oracle raises uncomfortable questions about the relationship between economic success and trust in God. The merchant who has built a prosperous business over decades, the nation whose economic system has generated wealth and opportunity for generations, the person whose retirement savings represent decades of prudent planning &mdash; all of these can slip, gradually and almost imperceptibly, into the Tyrian error: treating the commercial success as evidence of self-sufficiency rather than as a gift from the God who commands the seas and the harvests.",
      "The practical antidote that Isaiah 23 implies is not the abandonment of economic activity or the refusal of prosperity. It is the constant maintenance of the theological conviction that all wealth ultimately comes from God, belongs to God, and is held in stewardship for God&rsquo;s purposes. The moment wealth becomes the foundation of security rather than a resource held under God&rsquo;s sovereignty, it has become a form of idolatry. The ships of Tarshish wailing over Tyre&rsquo;s harbor are a standing warning against that kind of trust.",
    ],
  },
  {
    heading: "God Brings Down the Proud &mdash; The Theology of Reversal",
    accent: PURPLE,
    paragraphs: [
      "The stated divine purpose in verse 9 &mdash; &ldquo;to defile the pride of all glory, to dishonor all the honored of the earth&rdquo; &mdash; is one of the clearest statements in all of Scripture of what the tradition has called the theology of reversal. God acts in history to bring down the proud and exalt the humble. This is not a minor theme in the biblical narrative; it is the governing logic of the exodus, the conquest, the divided monarchy, the exile, and the return. And in the New Testament, it is the logic of the cross itself: the one who was honored above all others became the most dishonored, so that the dishonored might be raised to honor.",
      "The practical implication for the believer is a form of spiritual vigilance about the honors and recognitions that naturally accumulate in a successful life. The person who has been honored by their peers, recognized in their field, promoted in their profession, or celebrated in their community has received something genuinely good. The danger Isaiah identifies is the transition from gratitude for received honor to pride in self-generated greatness. Tyre&rsquo;s merchants &ldquo;were the honored of the earth&rdquo; &mdash; past tense in the oracle &mdash; because they had treated their honor as their own rather than as something received from the hand of God.",
      "The prophetic call that follows from this theology is humility not as a performance of self-deprecation but as a genuine orientation of the soul toward God as the source of all good things. This is what the Hebrew tradition called &lsquo;anavah &mdash; the lowliness of the one who knows where they stand before God. The wealthy merchant who practices this humility holds his wealth with open hands, ready to give as God directs, because he knows it was never really his in the first place. This is the opposite of the Tyrian spirit, and it is the orientation that Isaiah 23 calls its readers toward.",
    ],
  },
  {
    heading: "Even Economic Systems Serve God&rsquo;s Purposes",
    accent: GOLD,
    paragraphs: [
      "One of the most striking implications of Isaiah 23 is that economic systems &mdash; trade networks, commercial empires, market structures &mdash; are not outside God&rsquo;s sovereign governance. The entire Mediterranean trading system that Tyre dominated was not an autonomous domain beyond God&rsquo;s reach; it was a structure that he could raise up and bring down, that he could direct toward his purposes, and that he could ultimately consecrate to his service. The oracle ends with the wealth of Tyre&rsquo;s trade being redirected to provision the people of God &mdash; which means that even the commercial system was, in the end, working for God&rsquo;s purposes whether it knew it or not.",
      "This has implications for how Christians engage with economic life. If economic systems are within God&rsquo;s sovereignty, they are also within the scope of Christian responsibility and vocation. The person who builds a business, manages an organization, participates in trade and commerce, or works within the structures of a market economy is not operating in a neutral zone outside God&rsquo;s concern. They are stewards of something that belongs to the LORD of hosts, operating within a system that is ultimately under his direction.",
      "The vision of Tyre&rsquo;s wages being consecrated to the LORD in verse 18 is also an encouragement to Christians who wonder whether their economic work matters in the long run. Isaiah&rsquo;s vision suggests that it does &mdash; that the wealth generated by faithful economic activity, when held with open hands before God, can be redirected by his sovereignty toward the provision of his people and the advancement of his purposes. The question is not whether to engage in commerce but how: with the posture of Tyre, hoarding and priding and treating the wealth as self-generated, or with the posture of the consecrated steward, holding it as holy to the LORD.",
    ],
  },
  {
    heading: "Wealth Ultimately Belongs to God &mdash; The Consecration of Commerce",
    accent: GREEN,
    paragraphs: [
      "The final verse of Isaiah 23 &mdash; &ldquo;her merchandise and her wages will be holy to the LORD&rdquo; &mdash; is a word of extraordinary hope planted at the end of an oracle of judgment. After everything that has been said about Tyre&rsquo;s pride, her desolation, her seventy years of being forgotten, and the uncomfortable metaphor of the prostitute resuming her trade &mdash; after all of that, the closing word is consecration. The wealth of Tyre will not stay in Tyre&rsquo;s hands. It will become holy to the LORD, devoted to the provision of those who dwell before him.",
      "This closing note grounds the practical application of the oracle in hope rather than merely in warning. God is not only the judge who brings down commercial pride; he is the sovereign who redeems and consecrates what has been judged. The person who reads Isaiah 23 and draws from it only the warning against trusting in wealth has heard half of the oracle. The person who also hears the closing verse&rsquo;s promise &mdash; that the wealth of the nations will ultimately be consecrated to God&rsquo;s service &mdash; has heard the whole.",
      "This eschatological vision of consecrated wealth has its fulfillment in the New Testament vision of the new creation, where the kings of the earth bring their glory into the new Jerusalem (Revelation 21:24). The commercial wealth that was the instrument of pride in the old age will be the offering of worship in the new age. Isaiah 23 thus ends not with the destruction of trade and commerce but with their transformation: the prostitute&rsquo;s wages becoming holy, the self-serving market becoming the provision of God&rsquo;s people, the pride of all glory giving way to the glory that belongs to God alone.",
    ],
  },
];

const reflectionQuestions = [
  "Where do you find yourself placing ultimate confidence in economic resources, financial security, or commercial success? How does Isaiah 23&rsquo;s picture of Tyre&rsquo;s fall challenge the way you think about the foundations of your security?",
  "Verse 9 says the LORD planned Tyre&rsquo;s fall specifically to defile the pride of all glory. In what areas of your own life &mdash; professional, financial, relational &mdash; might God be working to defile a pride that has subtly attached itself to your achievements?",
  "The merchants of Tyre were &ldquo;the honored of the earth.&rdquo; How does Isaiah 23 shape the way you receive and hold the honors and recognitions that come to you? What does it look like to hold them with the open hands of a steward rather than the tight grip of an owner?",
  "Isaiah 23:18 closes with the vision of Tyre&rsquo;s wages being &ldquo;holy to the LORD&rdquo; &mdash; consecrated commerce. What would it look like for the economic work and resources God has entrusted to you to be genuinely holy to the LORD, not stored or hoarded, but given for the provision of those who dwell before him?",
  "The seventy-year desolation of Tyre was a bounded judgment followed by restoration. What does this rhythm of bounded discipline and measured restoration tell you about how God deals with pride? Have you experienced something like this pattern in your own life or community?",
];

const videoItems = [
  { videoId: "mT4wK9bXrN3", title: "Isaiah 23 &mdash; The Oracle Against Tyre and God&rsquo;s Sovereignty Over Trade" },
  { videoId: "pQ8vC5eJrM7", title: "The Pride of Tyre &mdash; What Isaiah 23 Says About Wealth and Self-Sufficiency" },
  { videoId: "hJ6vB2dNsF4", title: "Seventy Years of Desolation &mdash; Tyre&rsquo;s Judgment and Restoration in Isaiah 23" },
  { videoId: "kR9wD4fMtH2", title: "Consecrated Commerce &mdash; Tyre&rsquo;s Wages Holy to the LORD (Isaiah 23:18)" },
];

function BlockView({ block }: { block: Block }) {
  return (
    <section style={{ marginBottom: "2.75rem" }}>
      <h3
        style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 6px", color: TEXT }}
        dangerouslySetInnerHTML={{ __html: block.heading }}
      />
      {block.reference && (
        <div
          style={{ color: block.accent, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.1rem" }}
          dangerouslySetInnerHTML={{ __html: block.reference }}
        />
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", borderLeft: `3px solid ${block.accent}55`, paddingLeft: "1.25rem" }}>
        {block.paragraphs.map((para, i) => (
          <p
            key={i}
            style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}
      </div>
    </section>
  );
}

export default function Isaiah23GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${TEAL}22`, color: TEAL, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Isaiah Chapter 23
          </h1>
          <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", color: TEXT, lineHeight: 1.6, margin: "0 0 1rem", fontWeight: 600 }}>
            The Oracle Against Tyre &mdash; Pride of Commerce and the Sovereignty of God
          </p>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: MUTED, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD of hosts has planned it, to defile the pride of all glory, to dishonor all the honored of the earth.&rdquo; &mdash; Isaiah 23:9" }}
          />
        </header>

        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1rem", paddingTop: "0.5rem", background: BG }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? TEAL : BORDER}`,
                background: activeTab === t ? TEAL : CARD,
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

        {activeTab === "Overview" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Overview of Isaiah 23</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 23 is the final oracle in Isaiah&rsquo;s great &ldquo;Book of the Nations&rdquo; (chapters 13&ndash;23), and it is addressed to the most commercially powerful city of the ancient world: Tyre, the Phoenician harbor city whose ships covered the Mediterranean and whose merchants were described as princes. The oracle announces Tyre&rsquo;s desolation by the Chaldeans, identifies the LORD of hosts as the one who planned it, names pride as the sin being judged, and closes with the remarkable promise that after seventy years, Tyre&rsquo;s wages will be holy to the LORD &mdash; consecrated to the provision of God&rsquo;s people. It is both a warning about commercial pride and a vision of eschatological transformation." }}
            />
            {overviewBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Key Themes</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Four major themes shape the theology of Isaiah 23. The fragility of commercial wealth exposes the limits of every economic empire. God&rsquo;s sovereignty over nations and economic systems frames the fall of Tyre within the larger purposes of the LORD of hosts. Pride as the root of judgment names the specific sin that God is acting to defile. And the consecration of Tyre&rsquo;s wealth at the end of the oracle points beyond judgment to the eschatological vision of a world where all commercial wealth serves the purposes of the God of Israel." }}
            />
            {themeBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Verse by Verse</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Walking through Isaiah 23 section by section reveals a carefully structured movement from lamentation (vv. 1&ndash;5) through theological diagnosis (vv. 6&ndash;9) to historical fulfillment (vv. 10&ndash;14) and finally to the bounded judgment and surprising consecration that close the oracle (vv. 15&ndash;18). The wail of the ships of Tarshish that opens the chapter echoes throughout its movements, finally resolving not in permanent silence but in the consecrated commerce of verse 18." }}
            />
            {verseBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Application</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 23 is not primarily a text about ancient Phoenician trade routes. It is a text about the human tendency to build ultimate confidence on economic foundations, and about the God who deliberately acts to defile the pride of all glory. It calls every reader to examine the relationship between their economic life and their trust in God &mdash; and it ends with the astonishing promise that wealth consecrated to the LORD is not wasted but redirected to the provision of his people." }}
            />
            {applicationBlocks.map((b) => <BlockView key={b.heading} block={b} />)}

            <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 1.1rem", fontSize: "1.25rem" }}>Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li
                    key={i}
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.02rem" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>
          </div>
        )}

        <section style={{ marginTop: "3.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 8px" }}>Video Teaching</h2>
          <p
            style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
            dangerouslySetInnerHTML={{ __html: "Go deeper into Isaiah 23 with these video teachings on the oracle against Tyre, God&rsquo;s sovereignty over world trade, the seventy-year desolation, and the astonishing closing promise that Tyre&rsquo;s wages would be holy to the LORD." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Wealth of Nations Belongs to God</h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 23 ends not with the permanent silence of Tyre but with the consecration of Tyre&rsquo;s commercial wages to the LORD. The commercial wealth that was the instrument of pride becomes the provision of God&rsquo;s people. This is the pattern of divine sovereignty over human economic life: what is used for self-glorification can be reclaimed and redirected to God&rsquo;s glory. The ships of Tarshish that wailed over Tyre&rsquo;s ruin are the warning; the wages holy to the LORD are the promise &mdash; and together they call every generation to hold its wealth with the open hands of a consecrated steward." }}
          />
        </div>
      </main>
    </div>
  );
}
