"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
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
    heading: "A Prophet from the Royal House",
    reference: "Zephaniah 1:1",
    accent: PURPLE,
    paragraphs: [
      "The superscription of Zephaniah is the longest genealogy attached to any prophetic book, tracing the prophet&rsquo;s lineage four generations back to Hezekiah. This is almost certainly the famous King Hezekiah of Judah (715&ndash;686 BC), making Zephaniah a great-great-grandson of the king and therefore a member of the royal family during the reign of Josiah (640&ndash;609 BC). No other prophet stands so close to the throne.",
      "This royal pedigree is not incidental. Zephaniah&rsquo;s access to the inner circles of Jerusalem&rsquo;s political and religious establishment explains the specificity of his indictments. He names the officials, the royal sons, the merchants of the Fish Gate, and the complacent wealthy by their titles and their neighborhoods. He speaks as someone who has dined in the houses he condemns. His is not an outsider&rsquo;s critique but an insider&rsquo;s lament.",
      "The dating of Zephaniah&rsquo;s ministry &ldquo;in the days of Josiah&rdquo; places him at a decisive moment in Judah&rsquo;s history. Josiah came to the throne at eight years old following the assassination of his father Amon in 640 BC. The long and corrupt reign of Manasseh (687&ndash;642 BC) had left Judah saturated with syncretism, and the reformation that Josiah would eventually carry out beginning around 628 BC and culminating with the discovery of the Book of the Law in 621 BC had not yet begun. Zephaniah&rsquo;s thundering proclamations of imminent judgment almost certainly contributed to the spiritual climate that made that reform possible.",
      "The opening verse therefore frames the entire book: this word comes from God, delivered through a prophet with unusual standing, at an hour of unprecedented spiritual crisis. The cosmic sweep of what follows is not rhetorical excess but a genuine reckoning with the magnitude of Judah&rsquo;s apostasy.",
    ],
  },
  {
    heading: "The Cosmic Sweep of Judgment",
    reference: "Zephaniah 1:2&ndash;3",
    accent: ROSE,
    paragraphs: [
      "&ldquo;I will utterly sweep away everything from the face of the earth, declares the LORD.&rdquo; The verb Zephaniah uses carries the force of a total gathering-up and removal, and the scope is breathtaking: &ldquo;I will sweep away man and beast; I will sweep away the birds of the heavens and the fish of the sea, and the rubble with the wicked. I will cut off mankind from the face of the earth, declares the LORD.&rdquo; This is a deliberate echo of Genesis 6&ndash;8, the language of the Flood, summoning the memory of God&rsquo;s first great act of cosmic judgment.",
      "The sequence is precise and devastating: humankind, then domestic animals, then the birds of the air, then the fish of the sea. This is the reverse order of creation in Genesis 1 &mdash; God unmaking what he made. The prophet invites the reader to hear in Judah&rsquo;s apostasy an undoing of creation itself, a sin so pervasive and so deep that it threatens the entire fabric of the world God lovingly constructed.",
      "Yet Zephaniah does not linger at the cosmic level for long. Verses 4 onward pivot sharply to the specific: &ldquo;I will stretch out my hand against Judah and against all the inhabitants of Jerusalem.&rdquo; The cosmic announcement serves as the frame for a very particular indictment. Global judgment has a local address. The sins Zephaniah names are not vague spiritual failures but concrete acts of worship given to the wrong gods in the wrong places.",
      "This movement from cosmic to particular is itself a theological statement. The God who could sweep away all creation is the same God who holds Judah accountable for what happened on specific rooftops in specific neighborhoods. The amplitude of divine judgment is matched by the precision of divine knowledge. Nothing is hidden; no act of syncretism is too obscure to escape divine notice.",
    ],
  },
  {
    heading: "The Indictment of Judah&rsquo;s Syncretism",
    reference: "Zephaniah 1:4&ndash;6",
    accent: TEAL,
    paragraphs: [
      "Verses 4 through 6 are the heart of the legal case against Judah. God will stretch out his hand against Judah and Jerusalem and &ldquo;cut off from this place the remnant of Baal and the name of the idolatrous priests along with the priests.&rdquo; The &ldquo;remnant of Baal&rdquo; suggests that even the reforms that had begun under earlier kings had not fully eradicated Canaanite fertility worship. Baal worship persisted in pockets, and the &ldquo;idolatrous priests&rdquo; &mdash; the Hebrew word is kamarim, used only for foreign cult personnel &mdash; were still active.",
      "God will also cut off &ldquo;those who bow down on the rooftops to the host of heaven.&rdquo; Rooftop worship of the stars and planets was one of the defining features of Mesopotamian religion, imported into Judah during Manasseh&rsquo;s long reign under Assyrian cultural pressure. The host of heaven &mdash; sun, moon, stars, and planetary deities &mdash; were the astral powers, and their worship represented Judah&rsquo;s capitulation to the imperial religion of its overlords.",
      "But perhaps the most penetrating indictment is the charge of syncretism in verse 5: &ldquo;those who bow down and swear to the LORD and yet swear by Milcom.&rdquo; Milcom was the chief deity of Ammon, an identity sometimes associated with Molech, the god to whom children were sacrificed. The Judeans Zephaniah targets are not straightforward apostates who have simply abandoned the LORD; they are mixed-faith practitioners who combine the worship of YHWH with the worship of Milcom. They have a foot in both worlds, and God counts this as no different from full-throated idolatry.",
      "Verse 6 captures two more groups who round out the spectrum of spiritual failure: those who have &ldquo;turned back from following the LORD&rdquo; and those &ldquo;who do not seek the LORD or inquire of him.&rdquo; The first are apostates, those who once followed but turned away. The second are the religiously indifferent, those who have no relationship with God at all. Together, apostates, syncretists, and the indifferent fill out the picture of a society that has comprehensively rejected its covenant LORD.",
    ],
  },
  {
    heading: "Be Silent Before the LORD",
    reference: "Zephaniah 1:7",
    accent: GOLD,
    paragraphs: [
      "Verse 7 is a sudden change of register, a liturgical command dropped into the middle of the legal indictment: &ldquo;Be silent before the Lord GOD, for the day of the LORD is near; the LORD has prepared a sacrifice and consecrated his guests.&rdquo; The verb &ldquo;be silent&rdquo; (has) appears elsewhere in Amos, Habakkuk, and Zechariah as a summons to reverential awe in the face of divine action. It is what one does when standing before the Majesty.",
      "The metaphor that follows is chilling. God has prepared a sacrifice, and those he has consecrated to serve at the sacrifice are not worshippers but invaders. Judah is the sacrificial victim. The Day of the LORD, which Judah had perhaps lazily expected to be the day of victory over its enemies, turns out to be the day of its own slaughter. Amos had issued the same warning two generations earlier: &ldquo;Woe to you who desire the day of the LORD! It is darkness, and not light&rdquo; (Amos 5:18).",
      "This verse functions as the pivotal center of the chapter. Before it, the charges have been laid out. After it, the specific judgments and the great description of the Day of the LORD unfold. Verse 7 is the hinge: the charges are complete, the sentence has been passed, and now the only fitting response is silence before the God who is about to act.",
    ],
  },
  {
    heading: "Judgment on Officials, Merchants, and the Complacent",
    reference: "Zephaniah 1:8&ndash;13",
    accent: GREEN,
    paragraphs: [
      "Verses 8 through 13 move from general indictment to specific targets, and they reveal remarkable sociological precision. The judgment will fall first on &ldquo;the officials and the king&rsquo;s sons and all who dress in foreign attire.&rdquo; The foreign clothing is not merely a fashion statement; it signals cultural capitulation to the Assyrian and Babylonian world, an embrace of the values and allegiances that go with the clothes.",
      "Verse 9 adds &ldquo;everyone who leaps over the threshold&rdquo; &mdash; a possible reference to the Philistine custom practiced by the priests of Dagon (1 Sam 5:5) that had apparently made its way into Israelite practice &mdash; and those who &ldquo;fill their master&rsquo;s house with violence and fraud.&rdquo; The religious and the economic are intertwined: syncretistic religion and exploitative commerce are two symptoms of the same spiritual disease.",
      "Verses 10 and 11 name specific geographical landmarks of Jerusalem: the Fish Gate in the north, the Second Quarter, the hills, and the Mortar (probably a market district in the Tyropoeon valley). Each location is a site of commercial and residential life, and the sound of judgment &mdash; a cry, a wail, a loud crash &mdash; will echo through all of them. The merchants in the Mortar, dealing in silver, will be &ldquo;cut off,&rdquo; for their silver will not save them.",
      "The most devastating charge in this section comes in verse 12: &ldquo;At that time I will search Jerusalem with lamps, and I will punish the men who are thickening on their dregs, those who say in their hearts, &lsquo;The LORD will not do good, nor will he do ill.&rsquo;&rdquo; The image of thickening on dregs is drawn from winemaking: wine that is not poured from vessel to vessel goes flat and sour, its sediment settling permanently. The complacent wealthy of Jerusalem have stagnated in their ease, and the theology that grows from that ease is practical deism &mdash; a God who does nothing, who intervenes in neither blessing nor judgment. Against this functional atheism, verses 13 announce that their wealth, their houses, and their vineyards will pass to others.",
    ],
  },
  {
    heading: "The Great Day of the LORD",
    reference: "Zephaniah 1:14&ndash;18",
    accent: ROSE,
    paragraphs: [
      "The climax of the chapter arrives in one of the most concentrated passages of prophetic literature. &ldquo;The great day of the LORD is near, near and hastening fast; the sound of the day of the LORD is bitter; the mighty man cries aloud there.&rdquo; The triple repetition of nearness &mdash; near, near, hastening &mdash; hammers home the urgency. This is not a distant threat but an imminent reality.",
      "Verse 15 piles up seven phrases describing the character of that day: &ldquo;A day of wrath is that day, a day of distress and anguish, a day of ruin and devastation, a day of darkness and gloom, a day of clouds and thick darkness.&rdquo; This sevenfold description became the backbone of the medieval Latin hymn Dies Irae (&ldquo;Day of Wrath&rdquo;), probably written by Thomas of Celano in the thirteenth century, which was incorporated into the Requiem Mass and shaped Western Christian imagination about divine judgment for centuries. Zephaniah&rsquo;s seven phrases passed into Gregorian chant, into Mozart&rsquo;s Requiem, into Verdi&rsquo;s Messa da Requiem, and beyond.",
      "Verse 16 continues with military imagery: &ldquo;a day of trumpet blast and battle cry against the fortified cities and against the lofty battlements.&rdquo; The very defenses Judah has built for its protection will not avail. Verse 17 returns to the human cost: &ldquo;I will bring distress on mankind, so that they shall walk like the blind, because they have sinned against the LORD; their blood shall be poured out like dust, and their flesh like dung.&rdquo; The language is deliberately brutal, refusing to soften what moral and spiritual catastrophe produces in the physical world.",
      "The chapter closes in verse 18 with the statement that eliminates every human refuge: &ldquo;Neither their silver nor their gold shall be able to deliver them on the day of the wrath of the LORD. In the fire of his jealousy, all the earth shall be consumed; for a full and sudden end he will make of all the inhabitants of the earth.&rdquo; Silver and gold were the currency of ancient power and security &mdash; they could buy armies, forge alliances, offer bribes. But before the wrath of the LORD, they are worthless. The fire of divine jealousy &mdash; the passionate covenant love of God affronted by his people&rsquo;s unfaithfulness &mdash; will consume everything.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "The Day of the LORD as Cosmic Undoing",
    accent: ROSE,
    paragraphs: [
      "Zephaniah 1 contains the most comprehensive single-chapter treatment of the Day of the LORD in all the Minor Prophets. The phrase appears already in Amos, Isaiah, Joel, and others, but Zephaniah gives it its fullest and most frightening elaboration. It is a day of seven simultaneous terrors (v. 15), a day that reverses creation itself (vv. 2&ndash;3), and a day that no amount of silver or gold can escape (v. 18). The Day of the LORD is not merely a military defeat or a natural disaster; it is the direct intervention of God in history to settle accounts.",
      "The creation-reversal in verses 2 and 3 is the deepest layer of Zephaniah&rsquo;s vision. God creates order out of chaos in Genesis 1; here he unmakes that order, sweeping away humans, animals, birds, and fish in reverse sequence. The implication is that human sin is not merely a moral failure but a cosmological catastrophe, a rupture in the created order that eventually demands reckoning on a cosmic scale. This gives biblical apocalyptic its characteristic grammar: ultimate judgment undoes creation so that new creation can begin.",
      "For the New Testament, the Day of the LORD finds its fulfillment in the judgment that falls on Jerusalem in AD 70, in the cross where Christ absorbs the wrath that should have fallen on his people, and ultimately in the Last Judgment described in Revelation. Zephaniah&rsquo;s seven terrible phrases reappear in Revelation 6 in the breaking of the sixth seal: &ldquo;the sun became black as sackcloth, the full moon became like blood, and the stars of the sky fell&rdquo; &mdash; cosmic darkness echoing the &ldquo;day of darkness and gloom, a day of clouds and thick darkness&rdquo; that Zephaniah announced.",
      "Cross-references: Joel 2:1&ndash;11; Amos 5:18&ndash;20; Isaiah 13:6&ndash;13; Revelation 6:12&ndash;17; Matthew 24:29&ndash;31.",
    ],
  },
  {
    heading: "Syncretism: The Sin of Mixed Allegiances",
    accent: TEAL,
    paragraphs: [
      "The specific charge in verse 5 &mdash; swearing by the LORD and swearing by Milcom simultaneously &mdash; is the defining sin that Zephaniah targets, and it is more insidious than straightforward apostasy. An outright pagan who has never known the LORD is in a different category from a covenant member who keeps YHWH in the religious portfolio while maintaining allegiances to other powers. The mixed-faith practitioner is the one who says, in effect, that the LORD is one option among many, a useful deity for certain occasions, supplemented by other powers for different needs.",
      "This is the theological backdrop to the first commandment: &ldquo;You shall have no other gods before me.&rdquo; The Hebrew preposition &ldquo;before&rdquo; can mean &ldquo;in my presence&rdquo; or &ldquo;in addition to me,&rdquo; and Zephaniah presses both senses. To bow to Milcom is to assert that there is someone other than YHWH with legitimate claim on human worship &mdash; an assertion that strikes at the heart of monotheistic faith. God is not one option in a menu of spiritual resources; he is the only God, and a mixed allegiance is no allegiance at all.",
      "The New Testament equivalent is found in Jesus&rsquo;s warning that &ldquo;no one can serve two masters&rdquo; (Matt 6:24) and Paul&rsquo;s charge to the Corinthians that &ldquo;you cannot drink the cup of the Lord and the cup of demons&rdquo; (1 Cor 10:21). The besetting spiritual temptation in every age is not straightforward atheism but a blended faith that maintains Christian profession while placing practical trust in other powers: wealth, status, technology, political systems, or the therapeutic self.",
      "Cross-references: Exodus 20:3; Deuteronomy 6:4&ndash;5; 1 Kings 18:21; Matthew 6:24; 1 Corinthians 10:14&ndash;22; James 4:4.",
    ],
  },
  {
    heading: "The Theology of Divine Jealousy",
    accent: GOLD,
    paragraphs: [
      "The chapter closes with a phrase that is easy to misread: &ldquo;In the fire of his jealousy, all the earth shall be consumed&rdquo; (v. 18). Divine jealousy (qin&rsquo;ah) is not the petty emotion of a threatened ego. It is the passionate covenant love of God who has bound himself to his people as a husband binds himself to a wife, and who cannot be indifferent when that covenant is violated. The jealousy of God is the jealousy of absolute love.",
      "This framing reveals why syncretism is so serious. It is not merely a matter of wrong intellectual beliefs about which deity exists. It is a matter of covenant faithfulness, of marital fidelity. When Judah bows to Baal and swears by Milcom, it is doing the spiritual equivalent of adultery against the God who has loved it, redeemed it, provided for it, and made exclusive covenant with it. The &ldquo;fire of jealousy&rdquo; is the wrath of wounded love, which is the most intense wrath there is.",
      "This theme runs through the entire canon from Exodus (where God declares himself a &ldquo;jealous God&rdquo; at Sinai) through the Psalms, through Hosea and Ezekiel (where the covenant is mapped onto a marriage), through the New Testament (where Paul warns the Corinthians against making God jealous, 1 Cor 10:22), and into Revelation (where the beast and false prophet seduce the nations into spiritual adultery against the Lamb). Zephaniah&rsquo;s fire of divine jealousy is the fire of a love that will not be denied.",
      "Cross-references: Exodus 20:5; 34:14; Deuteronomy 4:24; Hosea 1&ndash;3; Ezekiel 16; 1 Corinthians 10:22; Revelation 17&ndash;19.",
    ],
  },
  {
    heading: "The Danger of Practical Deism",
    accent: PURPLE,
    paragraphs: [
      "Verse 12 introduces a character who may be the most spiritually dangerous figure in the chapter: the complacent man thickening on his dregs who says in his heart, &ldquo;The LORD will not do good, nor will he do ill.&rdquo; This is not the person who openly denies God&rsquo;s existence. It is the person who acknowledges God in theory but has concluded in practice that God does nothing &mdash; that he does not intervene, does not judge, does not bless, and does not hold anyone accountable.",
      "This practical deism is the religious attitude that prosperity produces most reliably. When life is comfortable, when silver and gold are accumulating, when the house is furnished and the vineyard is producing, it is easy to conclude that the universe is essentially self-running and that God, if he exists, is safely irrelevant to daily affairs. Zephaniah announces that this conclusion is precisely wrong, and that God will search Jerusalem with lamps &mdash; an image of the most thorough possible investigation &mdash; to find and judge those who have settled into it.",
      "The New Testament counterpart is the parable of the rich fool (Luke 12:16&ndash;21) and the letter to the church at Laodicea (Rev 3:14&ndash;22), both of which describe communities or individuals whose material security has produced spiritual blindness. The warning of Zephaniah 1:12 is one of the most pointed diagnoses of modern Western Christianity&rsquo;s most common spiritual pathology: not militant atheism but comfortable irrelevance.",
      "Cross-references: Psalm 10:4, 11; Luke 12:16&ndash;21; Romans 2:4; Revelation 3:14&ndash;22.",
    ],
  },
  {
    heading: "The Dies Irae and the Legacy of Zephaniah 1:15",
    accent: TEAL,
    paragraphs: [
      "Zephaniah 1:15 gave the Western church one of its most enduring liturgical forms. The medieval Latin hymn Dies Irae &mdash; &ldquo;Day of Wrath, that day&rdquo; &mdash; almost certainly composed by Thomas of Celano (c. 1200&ndash;1265), draws its opening stanza directly from Zephaniah&rsquo;s seven terrible phrases. &ldquo;Dies irae, dies illa, solvet saeclum in favilla&rdquo; (&ldquo;Day of wrath, that day will dissolve the world into glowing ashes&rdquo;) became the Sequence of the Requiem Mass in the Roman rite, shaping how the Western church prayed, mourned, and contemplated death for nearly eight centuries.",
      "The musical settings of the Dies Irae form one of the great tributaries of Western classical music. Mozart&rsquo;s unfinished Requiem (1791), Verdi&rsquo;s thundering Messa da Requiem (1874), Berlioz&rsquo;s Symphonie fantastique (which quotes the Dies Irae in its finale), and Liszt&rsquo;s Totentanz all draw on the seven phrases of Zephaniah 1:15 as their theological and emotional source. The seven terrible words of one eighth-century BC prophet shaped the imagination of Western civilization about death and divine judgment for two and a half millennia.",
      "For Bible students, this legacy is not merely a cultural curiosity. It is evidence that Zephaniah was right about something the human race senses at a deep level: there is such a thing as accountability before God, and the prospect of standing before perfect holiness is both terrifying and essential. The church has sung the Dies Irae not to wallow in fear but to hold the reality of judgment alongside the mercy offered in the Lamb who was himself the sacrifice on the day of God&rsquo;s wrath. As the hymn itself concludes: &ldquo;Pie Jesu Domine, dona eis requiem&rdquo; &mdash; &ldquo;Gracious Lord Jesus, grant them rest.&rdquo;",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "Verses 1&ndash;3: Superscription and Cosmic Sweep",
    reference: "Zephaniah 1:1&ndash;3",
    accent: PURPLE,
    paragraphs: [
      "Verse 1 establishes the prophetic credentials of the author with unusual thoroughness. The genealogy runs back four generations to Hezekiah, almost certainly the reforming king of that name, making Zephaniah the only known royal descendant among the writing prophets. The date &ldquo;in the days of Josiah&rdquo; places him in Judah&rsquo;s last generation before Babylonian conquest. This is not distant historical drama; this is a man writing about the city he lives in and the throne he can trace his bloodline to.",
      "Verse 2 opens with the divine first person at its most sweeping: &ldquo;I will utterly sweep away everything from the face of the earth, declares the LORD.&rdquo; The Hebrew intensifies this with an absolute infinitive: &ldquo;sweeping I will sweep,&rdquo; an idiom of total, unrelenting action. The declaration tolerates no exceptions and admits no escape. The scope in verse 3 then descends through the created order in reverse: humans, beasts, birds, fish. The sequence inverts Genesis 1 day by day, suggesting that the sin of covenant-breaking humanity unravels the entire created fabric.",
      "The phrase &ldquo;the rubble with the wicked&rdquo; in verse 3 is difficult to translate but points to the comprehensive nature of judgment &mdash; not only the wicked themselves but the wreckage they leave behind will be swept away. Nothing of the corrupt order survives. This opening movement sets the highest possible stakes before narrowing to the specific case of Judah, making clear that what follows is not merely national politics but a skirmish in the cosmic drama of God&rsquo;s governance of his creation.",
    ],
  },
  {
    heading: "Verses 4&ndash;6: The Indictment of Judah",
    reference: "Zephaniah 1:4&ndash;6",
    accent: TEAL,
    paragraphs: [
      "Verse 4 brings the cosmic lens to a focus: God will stretch out his hand against Judah and Jerusalem. The specific targets are three: the remnant of Baal (the surviving pockets of Canaanite cult that Manasseh had sponsored and that earlier reforms had not fully excised), the idolatrous priests (kamarim, a word used with contempt for pagan cult officiants, distinct from the legitimate Levitical kohanim), and &ldquo;the priests&rdquo; who have tolerated these practices. The religious leadership is implicated at every level.",
      "Verse 5 adds two practices of rooftop worship: bowing to the host of heaven and swearing by Milcom. Rooftop altars served as personal and household shrines for astral worship, a practice that 2 Kings 23:12 tells us Josiah would eventually demolish. The astral deities &mdash; sun, moon, planets &mdash; represented the cosmic powers that Assyrian imperial culture had made fashionable, and their worship was simultaneously an act of religious syncretism and political accommodation. To worship the Assyrian gods was to signal acceptance of Assyrian overlordship.",
      "The indictment in verse 5 specifically targets those who maintain dual allegiance &mdash; bowing to the LORD and to Milcom simultaneously. This is worse than simple apostasy because it claims divine favor while violating the first and most fundamental demand of the covenant. Verse 6 closes the formal charge with the two remaining categories: deliberate apostates who have turned back from following the LORD, and the indifferent who have never sought him at all. Every shade of rejection has been covered: pagan cult practice, syncretism, apostasy, and indifference. The indictment is total.",
    ],
  },
  {
    heading: "Verse 7: Be Silent Before the LORD",
    reference: "Zephaniah 1:7",
    accent: GOLD,
    paragraphs: [
      "The single verse that stands at the center of the chapter is a masterpiece of compression. &ldquo;Be silent before the Lord GOD, for the day of the LORD is near; the LORD has prepared a sacrifice and consecrated his guests.&rdquo; The call for silence (has) is a liturgical formula that appears in Amos 6:10, Habakkuk 2:20, and Zechariah 2:13. In each case it signals a moment when human speech becomes inappropriate because God is about to act, and the only fitting response to divine action is hushed awe.",
      "The image of the sacrifice overturns every expectation. In the sacrificial system, God&rsquo;s people bring animals to be slaughtered in his presence. Here God has prepared a sacrifice and invited guests &mdash; and the implied victim is Judah itself. The foreign nations that will carry out God&rsquo;s judgment (most likely Babylon, though Zephaniah does not name it here) are the consecrated guests at this terrible meal. The reversal is intentional and devastating: those who had offered sacrifices at pagan altars will themselves become the sacrifice.",
      "Verse 7 functions structurally as the pivot of the chapter. Before it, the charges; after it, the specific judgments; at verse 14, the description of the Day itself. By calling for silence here, Zephaniah suggests that the hearing is over. The evidence has been presented, the verdict declared. There is nothing left to say. What remains is only to wait in solemn, terrified awe for the Lord who is about to act.",
    ],
  },
  {
    heading: "Verses 8&ndash;13: Specific Judgments on Jerusalem",
    reference: "Zephaniah 1:8&ndash;13",
    accent: GREEN,
    paragraphs: [
      "Verses 8 and 9 enumerate the social classes who will face judgment: the officials and king&rsquo;s sons who wear foreign attire (signaling cultural apostasy), those who leap over the threshold (a pagan ritual practice), and those who fill their master&rsquo;s houses with violence and fraud. The movement is top-down: from the royal court to the merchant class. No stratum of society is exempt, and the religious and the economic failures are listed side by side because they flow from the same source.",
      "Verses 10 and 11 transform the indictment into an anticipatory lament. The Fish Gate, located on Jerusalem&rsquo;s northern wall where the city was most vulnerable to attack, will ring with a cry of distress. The Second Quarter &mdash; a district of Jerusalem&rsquo;s expansion under Hezekiah and Manasseh, where the newly wealthy had built their houses &mdash; will see a loud crash. The Mortar, the market district, will hear the wailing of merchants whose silver has been cut off.",
      "Verse 12 is the chapter&rsquo;s most psychologically probing image: God searching Jerusalem with lamps to find the men who are &ldquo;thickening on their dregs.&rdquo; Wine that is not racked &mdash; not poured from vessel to vessel during fermentation &mdash; grows thick, flat, and undrinkable from the accumulated sediment. The men who have settled into prosperity without disturbance have become spiritually inert, and their inertia has produced a practical theology that removes God from the equation entirely. Verse 13 announces the consequence: the houses they have built will not be inhabited by them, and the vineyards they have planted will not produce wine for them. What they have labored for will pass to others.",
    ],
  },
  {
    heading: "Verses 14&ndash;18: The Great Day of the LORD",
    reference: "Zephaniah 1:14&ndash;18",
    accent: ROSE,
    paragraphs: [
      "Verse 14 opens with a triple emphasis on nearness and speed: the day is &ldquo;near, near and hastening fast.&rdquo; The sound of the day is &ldquo;bitter,&rdquo; and even the mighty man &mdash; the warrior who normally projects strength &mdash; cries aloud. The Day of the LORD comes not as a distant theological concept but as an experience so immediate and overwhelming that it strips every human pretension to power.",
      "Verse 15 presents seven descriptive phrases in rapid succession, the most concentrated catalogue of divine judgment in the Hebrew Bible. A day of wrath (ebrah). A day of distress and anguish (tzarah u-metsuqah). A day of ruin and devastation (sho&rsquo;ah u-mesho&rsquo;ah). A day of darkness and gloom (choshech v&rsquo;aphelah). A day of clouds and thick darkness (anan v&rsquo;araphel). Each pair intensifies the one before it, piling up synonyms to convey that no human language is adequate to describe what is coming. The darkness language in particular evokes the darkness that covered Egypt in the ninth plague &mdash; a darkness that could be felt &mdash; and the darkness that will cover the land at the crucifixion of Christ (Matt 27:45).",
      "Verses 16 and 17 add military and physical dimensions to the catalogue. The trumpet blast and battle cry against fortified cities echo the conquest imagery of Joshua and suggest that the defenses of human civilization are irrelevant before the advancing judgment of God. The walking-like-the-blind image in verse 17 is drawn from Deuteronomy 28:29, the covenant curses for disobedience &mdash; Zephaniah is announcing that those curses are now in effect. Blood poured out like dust and flesh like dung are images of total humiliation and desecration.",
      "Verse 18 lands the devastating conclusion: neither silver nor gold will deliver them. This directly addresses the complacent wealthy of verse 12 who trusted in their accumulated wealth as the ultimate security. The fire of God&rsquo;s jealousy will consume all the earth, and &ldquo;a full and sudden end he will make of all the inhabitants of the earth.&rdquo; The chapter that began with a cosmic threat ends with a cosmic fulfillment. Every escape route has been closed: no religious compromise, no military strength, no financial reserve can stand before the Day of the LORD.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "Taking God&rsquo;s Jealousy Seriously",
    accent: ROSE,
    paragraphs: [
      "Zephaniah 1 confronts us with a God who cares with ferocious intensity about the exclusive devotion of his people. The gods of our own age are not Baal and Milcom, but the functional deities of wealth, security, status, and self-actualization are no less real in their claim on human allegiance. The question Zephaniah forces is not &ldquo;Do you believe in God?&rdquo; but &ldquo;Does God have you, or do you keep him as one option among many?&rdquo;",
      "Mixed allegiances are the most natural spiritual condition of fallen humanity. We swear by the LORD and by Milcom simultaneously &mdash; we maintain Christian profession while placing our practical trust in bank accounts, medical plans, social capital, and political parties. Zephaniah would not say we are terrible people for this; he would say we are behaving exactly like Judah, and that the fire of divine jealousy burns no less hot for our unconsciousness of it.",
      "The remedy is not a more intense version of religious performance but the kind of wholehearted allegiance that the first commandment requires and that the new covenant makes possible. Jesus said the greatest commandment is to love the LORD your God with all your heart, soul, mind, and strength (Mark 12:30). Zephaniah 1 is what it looks like when that commandment is comprehensively violated by a whole society &mdash; and what God does about it.",
    ],
  },
  {
    heading: "The Danger of Comfortable Complacency",
    accent: GOLD,
    paragraphs: [
      "The men thickening on their dregs in verse 12 are the most pastorally urgent figures in the chapter because they are the most recognizable. They are not villains; they are simply comfortable. They have not made any dramatic decision to reject God; they have simply drifted into a life where God is not particularly necessary. Their theology is not atheism but something worse: a deity who is safely irrelevant, who neither blesses nor judges, and who therefore makes no demands.",
      "This is the spiritual condition that affluence produces most efficiently, and it is the condition of enormous swaths of contemporary Western Christianity. We have enough &mdash; enough money, enough health, enough entertainment, enough comfort &mdash; that the urgent need for God that marks persecuted or poor believers does not naturally arise. Zephaniah announces that God takes this complacency as a personal affront, and that he will not remain irrelevant simply because we have decided to treat him that way.",
      "The antidote is what the Psalms call &ldquo;seeking the LORD&rdquo; &mdash; a deliberate, sustained turning of attention, trust, and desire toward God that refuses to settle for the spiritual flatness that ease produces. Zephaniah 2:3 will call for exactly this, and it comes on the heels of exactly the diagnosis in chapter 1: a people who have grown fat and still on their dregs need to be racked, disturbed, and poured afresh into the vessel of dependence on God.",
    ],
  },
  {
    heading: "Silver and Gold Cannot Deliver",
    accent: TEAL,
    paragraphs: [
      "Verse 18 delivers a word that cuts across the deepest assumption of our economic culture: that enough wealth provides ultimate security. The silver and gold that the merchants of the Mortar were accumulating, that the wealthy of the Second Quarter had invested in houses and vineyards &mdash; none of it would matter on the day of God&rsquo;s wrath. The currency of human civilization has no purchasing power before the judgment of God.",
      "This is not a counsel of poverty or an indictment of financial prudence. The Bible has nothing against savings, planning, or responsible stewardship. The issue is where ultimate trust is placed. When financial resources become the primary answer to the question &ldquo;What will protect me?&rdquo; they have taken the place of God. Jesus&rsquo;s teaching on wealth in the Sermon on the Mount and in the parables is an extended commentary on Zephaniah 1:18: you cannot serve God and money, and the one who builds bigger barns while ignoring the soul is a fool whose death proves the point.",
      "The freedom that Zephaniah 1:18 announces is not negative but liberating: if silver and gold cannot ultimately protect you, you are released from the exhausting labor of accumulating enough. The only refuge that survives the Day of the LORD is the LORD himself, and he is available to the poorest and humblest as fully as to the wealthiest. The remnant who will be preserved (as Zeph 2&ndash;3 will reveal) are those who sought refuge in God rather than in wealth.",
    ],
  },
  {
    heading: "The Day of Wrath and the Cross",
    accent: PURPLE,
    paragraphs: [
      "Zephaniah 1:15 describes a day of darkness and gloom, of wrath and anguish. Matthew 27:45 records that &ldquo;from the sixth hour there was darkness over all the land until the ninth hour&rdquo; as Jesus hung on the cross. The darkness of the Day of the LORD fell on the Son of God at Calvary. The wrath that Zephaniah announced as the consequence of Judah&rsquo;s sin &mdash; the fire of divine jealousy, the anguish and distress of the terrible day &mdash; was absorbed by the one who had no sin of his own to account for.",
      "The Dies Irae &mdash; the medieval hymn that drew its language from Zephaniah 1:15 &mdash; understood this connection. Its final movement does not end in terror but in pleading to &ldquo;Pie Jesu,&rdquo; the gracious Jesus who grants rest to the condemned. The day of wrath and the grace of the crucified Lord are held together, because the cross is precisely where the day of wrath spent itself so that a day of mercy could begin.",
      "This is the gospel hidden in Zephaniah&rsquo;s darkest chapter. The prophet announces the Day of the LORD as a day of comprehensive, inescapable judgment. The New Testament announces that the Son of God walked into that day voluntarily, bore its darkness, its distress, its anguish, its ruin, and rose from it on the third day so that those who trust in him might be hidden &mdash; as Zephaniah 2:3 will promise &mdash; on the day of the LORD&rsquo;s anger.",
    ],
  },
];

const reflectionQuestions = [
  "Where in your life are you maintaining a &ldquo;dual allegiance,&rdquo; seeking the LORD on Sundays while placing your practical trust in something else from Monday through Saturday?",
  "In what ways has material comfort led you to conclude practically, if not theologically, that the LORD will neither do good nor ill in your daily circumstances?",
  "How does Zephaniah&rsquo;s description of divine jealousy change the way you understand God&rsquo;s call to wholehearted devotion? Does it feel like a threat, a promise, or both?",
  "If God were to &ldquo;search Jerusalem with lamps&rdquo; in your own heart, what pockets of spiritual complacency, syncretism, or indifference would he find?",
  "The silver and gold of Zephaniah 1:18 are the ancient equivalents of our financial security systems. What would it look like for you to hold your resources more loosely, trusting God as your ultimate refuge?",
  "Zephaniah 1:15&rsquo;s seven terrible phrases fell on Christ at the cross. How does knowing that the Day of Wrath has already come &mdash; and been absorbed by Jesus &mdash; change the way you face the future?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Zephaniah 1 - The Day of the LORD" },
  { videoId: "OjJ7GkWCHvA", title: "The Cosmic Sweep of Judgment in Zephaniah" },
  { videoId: "pHBzJ2dVXgk", title: "Syncretism and the Sin of Mixed Allegiances" },
  { videoId: "tUDqmADIHes", title: "Dies Irae - Zephaniah and the Day of Wrath" },
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

export default function Zephaniah1Guide() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${GOLD}22`, color: GOLD, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Zephaniah Chapter 1
          </h1>
          <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", color: TEXT, lineHeight: 1.6, margin: "0 0 1rem", fontWeight: 600 }}>
            The Great Day of the LORD - The Most Comprehensive Announcement in the Minor Prophets
          </p>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: MUTED, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;A day of wrath is that day, a day of distress and anguish, a day of ruin and devastation, a day of darkness and gloom, a day of clouds and thick darkness.&rdquo; &mdash; Zephaniah 1:15" }}
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
                border: `1px solid ${activeTab === t ? GOLD : BORDER}`,
                background: activeTab === t ? GOLD : CARD,
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
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Overview of Zephaniah 1</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Zephaniah 1 is one of the most terrifying chapters in the Old Testament, and one of the most necessary. Written by a prophet of royal lineage during the reign of Josiah, probably in the years before the great reform of 621 BC, it announces the Day of the LORD with greater comprehensiveness and more vivid detail than any other passage in the Minor Prophets. The chapter moves from cosmic threat to specific indictment to detailed judgment to the climactic sevenfold description of the terrible day itself. Along the way it diagnoses the religious landscape of Judah with surgical precision: Baal worship, astral religion, syncretism, apostasy, indifference, complacency, and misplaced trust in wealth. Every disease is named before the cure is offered." }}
            />
            {overviewBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Key Themes</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Zephaniah 1 carries some of the Old Testament&rsquo;s most important theological freight. The Day of the LORD here reaches its fullest prophetic elaboration. The sin of syncretism is dissected with precision. The divine jealousy that underlies the judgment is revealed as the flip side of covenant love. And the practical deism of comfortable religion is exposed as one of the most dangerous spiritual conditions a covenant people can drift into. Each of these themes has deep canonical roots and New Testament resonances." }}
            />
            {themeBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Verse by Verse</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Walking through Zephaniah 1 verse by verse reveals a carefully structured argument. The superscription establishes prophetic authority and historical setting. The cosmic sweep frames the particular. The specific indictments of Judah&rsquo;s religious sins build to the pivot of verse 7 &mdash; &ldquo;Be silent before the Lord GOD&rdquo; &mdash; after which the detailed judgments unfold before the chapter climaxes in the great sevenfold description of the Day of the LORD. Each section advances the case that Judah&rsquo;s sin is not a minor matter requiring a mild correction but a catastrophic covenant violation requiring the full weight of divine response." }}
            />
            {verseBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Application</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Zephaniah 1 is a chapter the modern church needs to sit with long enough to feel its weight. We live in the same mixed-allegiance spiritual landscape as Judah, and many of the same diagnoses apply: syncretism, complacency, misplaced trust in financial security, and a practical theology that removes God from the equation of daily life. The Day of the LORD is no longer merely approaching &mdash; in Christ, it has already fallen, and its fire was absorbed at the cross. That is the gospel that makes Zephaniah&rsquo;s dark chapter bearable and beautiful." }}
            />
            {applicationBlocks.map((b) => <BlockView key={b.heading} block={b} />)}

            <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 1.1rem", fontSize: "1.25rem" }}>Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>
          </div>
        )}

        <section style={{ marginTop: "3.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 8px" }}>Video Teaching</h2>
          <p
            style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
            dangerouslySetInnerHTML={{ __html: "Go deeper into Zephaniah 1 with these video teachings on the Day of the LORD, the sin of syncretism, and the dies irae tradition that this chapter inspired across the history of Western Christianity." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            The Day of Wrath and the Cross
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem" }}
            dangerouslySetInnerHTML={{ __html: "Zephaniah 1 announces a day of wrath, distress, anguish, ruin, devastation, darkness, and gloom &mdash; seven terrible phrases that shaped Western Christian imagination for two and a half millennia through the Dies Irae. But the New Testament announces that on a Friday afternoon outside Jerusalem, darkness fell over all the land for three hours as the Son of God absorbed every phrase of that sevenfold description." }}
          />
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "The silver and gold of Zephaniah 1:18 cannot deliver us &mdash; but the blood of the one who bore the Day of Wrath in our place most certainly can. Father, thank you that the fire of your jealousy fell on your Son so that it need not fall on us. Grant us wholehearted allegiance to you alone, freedom from the complacency that trusts in wealth and forgets your nearness, and a reverent silence before your majesty that the men thickening on their dregs never found. In Christ, who is our refuge on the day of your wrath, Amen." }}
          />
        </div>

      </main>
    </div>
  );
}
