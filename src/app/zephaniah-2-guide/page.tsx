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
    heading: "From Judgment to Invitation",
    reference: "Zephaniah 2:1&ndash;3",
    accent: GREEN,
    paragraphs: [
      "Zephaniah 2 opens with one of the most dramatic pivots in prophetic literature. Chapter 1 ended with the fire of divine jealousy consuming all the earth and no silver or gold able to deliver anyone. Chapter 2 opens with an urgent imperative: &ldquo;Gather together, yes, gather, O shameless nation, before the decree takes effect &mdash; before the day passes away like chaff &mdash; before there comes upon you the burning anger of the LORD, before there comes upon you the day of the anger of the LORD.&rdquo;",
      "The &ldquo;shameless nation&rdquo; is Judah itself, the same nation whose sins filled chapter 1. But now, instead of simply announcing judgment, the prophet turns to face the people and commands them to assemble, to seek, to humble themselves. The urgency is real: the decree has been issued but not yet executed. There is still time &mdash; barely &mdash; to respond. The chapter that announces the most comprehensive judgment in the Minor Prophets simultaneously opens the narrowest possible window of response.",
      "The structure of the call in verses 1 through 3 follows a three-part pattern. Verse 1 commands gathering. Verses 2 through 3 give the reason: seek the LORD, seek righteousness, seek humility, before the day of anger arrives. This is the fullest description in the book of what appropriate human response to the divine announcement looks like. It is active, urgent, and threefold: seek the LORD himself, seek righteousness in one&rsquo;s conduct, and seek humility in one&rsquo;s posture. Nothing passive will do.",
      "The chapter then turns outward to the surrounding nations, announcing oracles of judgment against Philistia to the west, Moab and Ammon to the east, Cush to the south, and Assyria to the north. This four-directional movement covers the entire compass of the ancient Near Eastern world known to Judah, declaring that the Day of the LORD announced in chapter 1 is not merely a local affair but a universal reckoning that will find every nation regardless of direction or distance.",
    ],
  },
  {
    heading: "The Oracles Against Philistia",
    reference: "Zephaniah 2:4&ndash;7",
    accent: TEAL,
    paragraphs: [
      "The oracle against Philistia opens with a wordplay that any Hebrew-speaking audience would have caught immediately: &ldquo;Gaza shall be forsaken (azuvah), and Ashkelon shall become a desolation.&rdquo; The name Gaza (Azzah in Hebrew) and the word &ldquo;forsaken&rdquo; (azuvah) share the same root sounds, making the oracle punning in its very first word. The city that boasted its name will become what its name now sounds like: abandoned.",
      "Four of the five Philistine cities are named &mdash; Gaza, Ashkelon, Ashdod, and Ekron (Gath, the fifth, had already declined by this period and is conspicuously absent). Each receives a sentence: Gaza forsaken, Ashkelon a desolation, Ashdod driven out at noon (the most vulnerable and humiliating time for a military attack), Ekron uprooted. The coastland of the Philistines, once the home of Israel&rsquo;s most persistent enemy since the days of the judges, will be reduced to pasture for shepherds and folds for flocks.",
      "Verse 6 transforms the geography: the sea coast &ldquo;shall become the possession of the remnant of the house of Judah.&rdquo; The land the Philistines occupied will revert to those they oppressed. This is the pattern of eschatological reversal that runs through the entire prophetic tradition: what the oppressors took by force will be restored to God&rsquo;s people by divine decree. The LORD will attend to them and restore their fortunes (v. 7), a phrase that appears throughout the prophets as shorthand for the comprehensive restoration of the covenant people.",
    ],
  },
  {
    heading: "The Oracles Against Moab and Ammon",
    reference: "Zephaniah 2:8&ndash;11",
    accent: GOLD,
    paragraphs: [
      "The oracle against Moab and Ammon is the most theologically developed of the four. God has heard their taunts against his people and their boasts against their territory, and the response is personal: &ldquo;I have heard the taunts of Moab and the revilings of the Ammonites, how they have taunted my people and made boasts against their territory.&rdquo; The possessive &ldquo;my people&rdquo; is the key. To mock Israel is to mock the God of Israel, and that is a provocation the living God will not leave unanswered.",
      "The sentence draws on the most solemn precedent in the biblical memory: &ldquo;Moab shall become like Sodom, and the Ammonites like Gomorrah, a land possessed by nettles and salt pits, and a waste forever.&rdquo; Sodom and Gomorrah are the canonical example of total, irreversible divine judgment &mdash; cities so thoroughly destroyed that they became the measuring stick for catastrophe (Gen 19; Isa 1:9; Jer 49:18; Matt 10:15). To say Moab will be like Sodom is to say its judgment will be final and complete.",
      "Verse 10 supplies the theological diagnosis: &ldquo;This shall be their lot in return for their pride, because they taunted and boasted against the people of the LORD of hosts.&rdquo; Pride is the root sin, the attitude that lifts itself against God by despising those who bear his name. Verse 11 broadens the scope enormously: &ldquo;The LORD will be awesome against them; for he will famish all the gods of the earth, and to him shall bow down, each in its place, all the lands of the nations.&rdquo; The judgment on Moab and Ammon is not merely national but cosmic &mdash; the false gods of all the nations will be starved into impotence, and the LORD alone will receive the worship of all peoples.",
    ],
  },
  {
    heading: "The Oracle Against Cush",
    reference: "Zephaniah 2:12",
    accent: ROSE,
    paragraphs: [
      "The oracle against Cush &mdash; the region of modern Sudan and Ethiopia, the southernmost power in Zephaniah&rsquo;s world-view &mdash; is the briefest in the chapter, a single verse: &ldquo;You also, O Cushites, shall be slain by my sword.&rdquo; Its brevity is itself a rhetorical statement. Cush, the superpower of the 25th Dynasty that had ruled Egypt and controlled much of the ancient world in the late eighth century BC, requires only four Hebrew words to dispose of. The longest reach of human empire counts for nothing before the sword of the LORD.",
      "The placement of Cush as the southern oracle in the four-direction scheme (Philistia west, Moab-Ammon east, Cush south, Assyria north) is significant. It completes the compass. Whatever lies in whatever direction you care to look &mdash; the familiar enemies, the ancient rivals, the distant superpowers &mdash; the Day of the LORD is coming for all of them. No corner of the earth is exempt. The brevity of the Cush oracle keeps the attention moving rapidly toward the climactic oracle against Assyria.",
    ],
  },
  {
    heading: "The Oracle Against Assyria and the Fall of Nineveh",
    reference: "Zephaniah 2:13&ndash;15",
    accent: PURPLE,
    paragraphs: [
      "The final oracle in the chapter is the longest and most elaborate, directed against Assyria and specifically against its capital Nineveh. At the time Zephaniah wrote, Nineveh was the greatest city in the world &mdash; the capital of an empire that had dominated the ancient Near East for over a century, had destroyed the northern kingdom of Israel in 722 BC, and had nearly swallowed Judah entire under Sennacherib in 701 BC. To predict its fall was an extraordinary act of prophetic courage.",
      "God will &ldquo;stretch out his hand against the north and destroy Assyria, and will make Nineveh a desolation, a dry waste like the desert.&rdquo; The desolation is then described in vivid detail: herds will lie down in her midst, all kinds of beasts will crouch in her columns, the owl and the hedgehog will lodge in her capitals, the raven will croak at her threshold. The great city will become a wildlife refuge, its proud halls colonized by animals that know nothing of human glory.",
      "Verse 15 supplies the theological diagnosis of Nineveh&rsquo;s sin and the ground of its fall: &ldquo;This is the exultant city that lived securely, that said in her heart, &lsquo;I am, and there is no one else.&rsquo;&rdquo; The boast &ldquo;I am, and there is no one else&rdquo; is the most audacious claim a city or an empire can make. It is the claim of divine uniqueness, for in Isaiah and elsewhere it is precisely this phrase that God speaks of himself: &ldquo;I am the LORD, and there is no other&rdquo; (Isa 45:6, 18; 46:9). Isaiah places this same boast in Babylon&rsquo;s mouth (Isa 47:8, 10). Zephaniah places it in Nineveh&rsquo;s. In each case the prophet&rsquo;s point is the same: the empire that claims divine uniqueness will be brought low by the God who actually possesses it.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "The &ldquo;Perhaps&rdquo; of Verse 3: Theology of Contingent Grace",
    accent: GREEN,
    paragraphs: [
      "Zephaniah 2:3 contains one of the most carefully chosen words in the entire prophetic corpus: &ldquo;Seek the LORD, all you humble of the land, who do his just commands; seek righteousness, seek humility; perhaps you may be hidden on the day of the anger of the LORD.&rdquo; The word &ldquo;perhaps&rdquo; (ulay in Hebrew) is not an expression of divine uncertainty or capriciousness. It is a deliberate theological statement about the conditions under which mercy can be received.",
      "The &ldquo;perhaps&rdquo; preserves the freedom and sovereignty of God. Mercy cannot be manipulated or guaranteed by human effort. The prophet does not say: &ldquo;If you seek righteousness, you will certainly be hidden.&rdquo; He says: &ldquo;Perhaps you may be hidden.&rdquo; God retains the prerogative of mercy. Seeking is the appropriate human response to divine warning, but it does not place God under obligation. The grace that saves is always grace &mdash; uncoerced, undeserved, freely given.",
      "At the same time, the &ldquo;perhaps&rdquo; is not despair. It is an invitation within a warning. The fact that Zephaniah issues this call at all indicates that seeking is meaningful &mdash; that it does make a difference &mdash; even if it does not mechanically produce the desired outcome. The theological tradition that emerges from this word is one of urgent, humble seeking that trusts the character of God without presuming upon it. Joel 2:13&ndash;14 captures the same spirit: &ldquo;Return to the LORD your God, for he is gracious and merciful, slow to anger, and abounding in steadfast love; perhaps he will turn and leave a blessing.&rdquo;",
      "Cross-references: Joel 2:13&ndash;14; Amos 5:15; Jonah 3:9; Luke 18:1&ndash;8; Romans 9:15&ndash;16.",
    ],
  },
  {
    heading: "Seek Righteousness, Seek Humility",
    accent: TEAL,
    paragraphs: [
      "The triple imperative of verse 3 &mdash; seek the LORD, seek righteousness, seek humility &mdash; defines what authentic repentance looks like in prophetic perspective. Seeking the LORD is the vertical dimension: a turning of the whole person toward God, an orientation of trust and desire toward him rather than toward idols, wealth, or political alliances. Seeking righteousness is the horizontal dimension: a commitment to just conduct in every relationship, the concrete embodiment of covenant loyalty in daily life. Seeking humility is the internal dimension: a disposition of lowliness and dependence that renounces the pride Zephaniah identifies as the root sin of Moab, Ammon, and Nineveh.",
      "The three imperatives are addressed specifically to &ldquo;all you humble of the land, who do his just commands.&rdquo; This appears circular at first: Zephaniah calls the humble to seek humility, and the just to seek righteousness. But the logic is prophetically sound. Even the partial obedience of the remnant is not enough to guarantee safety. The call is not to those who are already fully righteous but to those who have been practicing a degree of faithfulness and who need to deepen and complete it before the day of judgment arrives.",
      "This triple seeking anticipates the Beatitudes of Jesus: &ldquo;Blessed are the meek, for they shall inherit the earth&rdquo; (Matt 5:5) and &ldquo;Blessed are those who hunger and thirst for righteousness, for they shall be satisfied&rdquo; (Matt 5:6). The people who are &ldquo;hidden&rdquo; by God on the day of his anger are the same people Jesus describes as blessed &mdash; those who in their humility and hunger for righteousness have nowhere to hide except in God himself.",
      "Cross-references: Micah 6:8; Matthew 5:3&ndash;10; Luke 1:51&ndash;53; James 4:6, 10; 1 Peter 5:6.",
    ],
  },
  {
    heading: "The Four Compass Directions and the Universal Scope of Judgment",
    accent: ROSE,
    paragraphs: [
      "The four oracles of Zephaniah 2 are arranged along the four compass points in a pattern that signals total comprehensiveness. Philistia lies to the west along the Mediterranean coast. Moab and Ammon lie to the east across the Jordan. Cush lies to the south in upper Africa. Assyria lies to the north along the Tigris. Together they represent every direction a Judean might look for security, alliance, or escape, and God announces judgment on all of them.",
      "This four-directional rhetoric appears in other prophetic collections as well &mdash; Amos 1&ndash;2, Jeremiah 46&ndash;51, Ezekiel 25&ndash;32 &mdash; but in each case the theological point is the same: the sovereignty of YHWH extends to every corner of the earth. He is not a regional deity whose jurisdiction ends at Judah&rsquo;s borders. He is the LORD of all nations, and all nations are accountable to him. The Day of the LORD announced in chapter 1 as consuming &ldquo;all the earth&rdquo; finds its specific fulfillment in the four oracles of chapter 2.",
      "For the New Testament reader, this four-directional comprehensiveness is the prophetic anticipation of the Great Commission: &ldquo;Go therefore and make disciples of all nations&rdquo; (Matt 28:19). The same universal scope that makes judgment inescapable makes redemption available. The God who will judge Philistia, Moab, Ammon, Cush, and Assyria is the God whose gospel Paul carries to the ends of the Roman world. Zephaniah 3:9 will announce this positive dimension: &ldquo;For at that time I will change the speech of the peoples to a pure speech, that all of them may call upon the name of the LORD and serve him with one accord.&rdquo;",
      "Cross-references: Amos 1&ndash;2; Jeremiah 46&ndash;51; Ezekiel 25&ndash;32; Matthew 28:18&ndash;20; Revelation 7:9&ndash;12.",
    ],
  },
  {
    heading: "Pride, the Root Sin: Nineveh&rsquo;s Boast and Its Echo in Scripture",
    accent: PURPLE,
    paragraphs: [
      "The phrase placed in Nineveh&rsquo;s mouth in verse 15 &mdash; &ldquo;I am, and there is no one else&rdquo; &mdash; is one of the most audacious claims any human institution can make. In the Hebrew Bible it appears as the signature self-declaration of God himself: &ldquo;I am the LORD, and there is no other, besides me there is no God&rdquo; (Isa 45:5). When a human empire appropriates divine language, it commits the primal sin of idolatry in its most extreme form: the claim that the creature is the Creator.",
      "Isaiah places this same boast in Babylon&rsquo;s mouth (Isa 47:8: &ldquo;I am, and there is no one besides me; I shall not sit as a widow or know the loss of children&rdquo;; repeated in 47:10). The parallelism between Zephaniah&rsquo;s Nineveh and Isaiah&rsquo;s Babylon is intentional: both empires made the same claim and both will receive the same answer. The historical record confirms the prophecy: Nineveh fell to Babylon and the Medes in 612 BC, not long after Zephaniah wrote, and Babylon fell to Cyrus of Persia in 539 BC.",
      "In the New Testament, the same boast appears in Revelation 18:7, placed in the mouth of end-times Babylon: &ldquo;Since in her heart she says, &lsquo;I sit as a queen, I am no widow, and mourning I shall never see.&rsquo;&rdquo; The boast of self-sufficiency and unique greatness marks every worldly power in every age that sets itself in the place of God &mdash; and Zephaniah&rsquo;s oracle against Nineveh announces the invariable divine response: the desolation that comes to every city, nation, or empire that says, &ldquo;I am, and there is no one else.&rdquo;",
      "Cross-references: Isaiah 14:13&ndash;15; Isaiah 47:7&ndash;10; Daniel 4:28&ndash;37; Luke 1:51&ndash;52; James 4:13&ndash;16; Revelation 18:7.",
    ],
  },
  {
    heading: "The Remnant Among the Nations",
    accent: GOLD,
    paragraphs: [
      "Verses 7 and 9 introduce the theme of the remnant that will take possession of what the nations leave behind. &ldquo;The seacoast shall become the possession of the remnant of the house of Judah&rdquo; (v. 7); &ldquo;the remnant of my people shall plunder them, and the survivors of my nation shall possess them&rdquo; (v. 9). The remnant is a key concept in prophetic theology &mdash; the holy seed that survives divine judgment and becomes the nucleus of renewed covenant community.",
      "The remnant theology of Zephaniah reaches back to Isaiah&rsquo;s naming of his son Shear-jashub, &ldquo;a remnant shall return&rdquo; (Isa 7:3), and forward to Paul&rsquo;s use of it in Romans 9&ndash;11 to explain the situation of Israel in the time of the new covenant. The remnant is always smaller than the original community, always purified by the fire of judgment, and always the carrier of the promises that seem extinguished by catastrophe.",
      "In Zephaniah&rsquo;s vision, the remnant will not merely survive; it will inherit. The coastland of Philistia, the territory of Moab and Ammon &mdash; all of this will belong to the humble and seeking people who found refuge in God on the day of his anger. The meek who inherit the earth, as Jesus will put it in the Beatitudes, are the Zephaniah remnant carried into the new covenant age. Their inheritance is not achieved by military conquest but received as the gift of the God who attends to his people (v. 7).",
      "Cross-references: Isaiah 7:3; 10:20&ndash;22; Micah 2:12&ndash;13; Romans 9:27&ndash;29; 11:1&ndash;6; Matthew 5:5.",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "Verses 1&ndash;3: Assemble Before the Decree Takes Effect",
    reference: "Zephaniah 2:1&ndash;3",
    accent: GREEN,
    paragraphs: [
      "Verse 1 opens with a double imperative: &ldquo;Gather together, yes, gather, O shameless nation.&rdquo; The doubled verb intensifies the urgency, echoing the doubled emphasis on nearness in 1:14 (&ldquo;near, near and hastening fast&rdquo;). The description of Judah as &ldquo;shameless&rdquo; (literally &ldquo;without desire&rdquo; or &ldquo;unashamed&rdquo;) captures the spiritual condition diagnosed in chapter 1: a people who have lost the capacity for appropriate moral and spiritual shame. They need to be shaken awake before the decree that chapter 1 announced moves from word to reality.",
      "Verse 2 piles up before-clauses with escalating urgency: before the decree takes effect, before the day passes like chaff, before the burning anger of the LORD comes upon you, before the day of the LORD&rsquo;s anger comes upon you. The fourfold repetition of &ldquo;before&rdquo; is a literary drumbeat, each stroke bringing the judgment closer and the window of response narrower. The metaphor of chaff is significant: chaff disappears instantly when threshed, blown away by the gentlest wind. The day will arrive and be gone with the same sudden irreversibility.",
      "Verse 3 delivers the content of the call: seek the LORD, seek righteousness, seek humility. The recipients are specified: &ldquo;all you humble of the land, who do his just commands.&rdquo; The call is not to the openly rebellious (who have presumably made their choice) but to the partial believers, those who have maintained some covenant faithfulness but whose allegiance is not yet wholehearted. And the outcome is offered with careful qualification: &ldquo;perhaps you may be hidden.&rdquo; The word &ldquo;hidden&rdquo; (tisateru) comes from the verb sathar, to hide, conceal, shelter. It anticipates the picture of God himself as shelter that the Psalms develop (Ps 27:5; 31:20; 64:2) and that Christ fulfills as the one in whom the believer is &ldquo;hidden with Christ in God&rdquo; (Col 3:3).",
    ],
  },
  {
    heading: "Verses 4&ndash;7: Oracle Against Philistia",
    reference: "Zephaniah 2:4&ndash;7",
    accent: TEAL,
    paragraphs: [
      "The oracle begins with a wordplay: &ldquo;Gaza shall be forsaken (azuvah)&rdquo; &mdash; a pun in Hebrew on the name Azzah/Gaza. The four named cities receive quick, staccato sentences of judgment, each one stripped of any elaborate description. Gaza forsaken, Ashkelon a desolation, Ashdod driven out at noon (an idiom for sudden, unexpected attack, since noon was a time of rest and minimal guard), Ekron uprooted. The fifth great Philistine city, Gath, is absent, probably because it had already faded in significance by Zephaniah&rsquo;s time.",
      "Verses 5 through 7 shift to address the &ldquo;inhabitants of the seacoast, the nation of the Cherethites&rdquo; (the Cherethites being a subgroup of the Philistines, also associated with David&rsquo;s personal guard, suggesting deep cultural overlap). The word of the LORD is against them, and the coastland will become pasture for shepherds and folds for flocks. The pastoral imagery reverses the commercial and military significance of the Philistine coast: the great trading ports and military strongholds will fall silent, replaced by the gentle sounds of sheep.",
      "Verse 7 introduces the remnant theme. The seacoast will become the possession of &ldquo;the remnant of the house of Judah,&rdquo; and the LORD will attend to them and restore their fortunes. The phrase &ldquo;restore their fortunes&rdquo; (shav shevut) is the great prophetic expression for comprehensive covenant restoration &mdash; not merely the return of material goods but the renewal of the entire relationship between God and his people. It appears in Jeremiah 29:14, 30:3, and across the prophets as the technical term for eschatological homecoming.",
    ],
  },
  {
    heading: "Verses 8&ndash;11: Oracle Against Moab and Ammon",
    reference: "Zephaniah 2:8&ndash;11",
    accent: GOLD,
    paragraphs: [
      "Verses 8 and 9 open with the divine first person singular: &ldquo;I have heard the taunts of Moab and the revilings of the Ammonites.&rdquo; The perfect tense indicates a completed action &mdash; God has already heard and has already decided. The taunts against his people and the boasts against their territory are specifically catalogued as the trigger for the oracle. Moab and Ammon, the neighboring nations east of the Jordan (both descendants of Abraham&rsquo;s nephew Lot, as Genesis 19 records), had a long history of antagonism toward Israel dating from the wilderness period.",
      "The sentence draws on the Sodom and Gomorrah precedent: Moab shall become like Sodom, the Ammonites like Gomorrah. This is not merely rhetorical hyperbole; in the biblical tradition, Sodom and Gomorrah represent the benchmark of complete, irreversible divine judgment, and the land of those destroyed cities is described as a waste of salt and sulfur (Deut 29:23). To say Moab will be like Sodom is to invoke the full weight of that tradition &mdash; permanent desolation, never to be rebuilt or inhabited.",
      "Verse 10 supplies the diagnosis: pride. Verse 11 expands the scope to a universal dimension: the LORD &ldquo;will famish all the gods of the earth,&rdquo; and all the nations will bow before him, each in their own place. This remarkable verse anticipates the universal worship that Zephaniah 3:9 will describe and that the New Testament identifies as the goal of the Great Commission. The judgment on Moab and Ammon is not merely local; it is the leading edge of a cosmic restructuring in which all false gods are starved of their worship and the LORD alone receives the devotion of all peoples.",
    ],
  },
  {
    heading: "Verse 12: Oracle Against Cush",
    reference: "Zephaniah 2:12",
    accent: ROSE,
    paragraphs: [
      "The oracle against Cush occupies a single verse: &ldquo;You also, O Cushites, shall be slain by my sword.&rdquo; In the context of the chapter&rsquo;s elaborate oracles against Philistia, Moab, Ammon, and Assyria, this brevity is itself eloquent. Cush, the great power of the Twenty-Fifth Dynasty that had only recently ruled Egypt and extended its reach across the ancient world, is dispatched in a phrase. The brevity is not disrespect but confidence: the God who governs the universe requires no elaborate argument to address even the mightiest empire. A single word suffices.",
      "The phrase &ldquo;you also&rdquo; links Cush to the preceding oracles and maintains the four-directional pattern. It also carries a quiet pastoral concern: Cush, the southernmost nation in Zephaniah&rsquo;s world-view, is reached by the same divine sovereignty as the nations closer to Judah. No distance exempts a nation from accountability, and no distance exempts a person. The sword of God is not a short-range weapon.",
      "For later biblical interpretation, Cush carries symbolic weight beyond its historical identity. In Acts 8 the Ethiopian eunuch &mdash; a man from the region broadly identified as Cush &mdash; is the first Gentile after Cornelius to receive the gospel in the New Testament, and his reading of Isaiah 53 at the moment Philip finds him suggests that the judgment announced by Zephaniah was not the last word for this southernmost nation. The God who declared judgment against Cush is the God who sent his evangelist to the Cushite court.",
    ],
  },
  {
    heading: "Verses 13&ndash;15: Oracle Against Assyria and the Fall of Nineveh",
    reference: "Zephaniah 2:13&ndash;15",
    accent: PURPLE,
    paragraphs: [
      "The most extended oracle in the chapter is reserved for the most powerful nation: Assyria. God will &ldquo;stretch out his hand against the north and destroy Assyria,&rdquo; making Nineveh &ldquo;a desolation, a dry waste like the desert.&rdquo; This was an extraordinary prediction. At the time Zephaniah wrote, Nineveh was the largest and most magnificent city in the world, a metropolis of perhaps 150,000 people surrounded by walls 7.5 miles in circumference with fifteen great gates. To predict its desolation required either remarkable political foresight or prophetic revelation &mdash; or both.",
      "Verses 14 describes the aftermath of Nineveh&rsquo;s fall in haunting pastoral terms. Herds will lie down in her midst. The owl and the hedgehog will lodge in her capitals, the raven will croak at her threshold. These animals are the residents of ruins and wastelands; their presence in the great city&rsquo;s halls signals the complete reversal of human grandeur. The cedar work &mdash; the expensive imported timber that decorated the palaces of Mesopotamian kings &mdash; will be laid bare. What was built to impress for millennia will become, in a generation, a wildlife sanctuary.",
      "Verse 15 provides the theological explanation for Nineveh&rsquo;s fall: the boast &ldquo;I am, and there is no one else.&rdquo; This is the claim of divine uniqueness &mdash; the very language that God uses of himself in Isaiah (&ldquo;I am the LORD, and there is no other&rdquo;) placed audaciously in the mouth of a city-empire. The oracle closes with an image of contemptuous passers-by hissing and shaking their fists at the fallen city. Nineveh, which once made the nations tremble, will become the object of their scorn. The city fell to a coalition of Babylonians and Medes in 612 BC, within a generation of Zephaniah&rsquo;s oracle, one of the most dramatically confirmed predictions in the prophetic literature.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "The Urgency of &ldquo;Before&rdquo;",
    accent: GREEN,
    paragraphs: [
      "The fourfold &ldquo;before&rdquo; of verse 2 is one of the most pastorally urgent constructions in the prophets. Before the decree takes effect. Before the day passes like chaff. Before the burning anger comes. Before the day of the LORD&rsquo;s anger arrives. The window of response is real but finite. The God of the Bible is not the impersonal mechanism of karma, grinding through consequences without regard for the human heart&rsquo;s orientation. He is a God who issues warnings, who sends prophets, who calls for response &mdash; and who eventually acts on the verdict that has been declared.",
      "The New Testament picks up this urgency in passages like 2 Corinthians 6:2: &ldquo;Behold, now is the favorable time; behold, now is the day of salvation.&rdquo; The &ldquo;now&rdquo; of the gospel age is itself a massive &ldquo;before&rdquo; &mdash; before the return of Christ, before the final judgment, while the offer of mercy remains open. Zephaniah&rsquo;s fourfold &ldquo;before&rdquo; is the same gospel logic compressed into a single urgency: respond now, while there is still time, because the day is coming when response will be too late.",
      "For individual believers, this urgency applies not merely to the initial moment of conversion but to the daily rhythms of repentance and return. The &ldquo;before&rdquo; logic of Zephaniah 2:2 is the logic of Hebrews 3:13: &ldquo;Exhort one another every day, as long as it is called &lsquo;today,&rsquo; that none of you may be hardened by the deceitfulness of sin.&rdquo; Every day is a &ldquo;before&rdquo; day, an opportunity to seek the LORD while he may be found.",
    ],
  },
  {
    heading: "Seeking as the Posture of the Remnant",
    accent: TEAL,
    paragraphs: [
      "The triple imperative of verse 3 &mdash; seek the LORD, seek righteousness, seek humility &mdash; describes not a one-time religious act but an ongoing posture of the heart. Seeking implies that the object sought is not yet fully possessed, that there is more of God to find, more righteousness to embody, more humility to inhabit. The humble people of the land who already do God&rsquo;s just commands are called to seek more of what they already partially have.",
      "This has profound implications for spiritual formation. The temptation of those who have been practicing faith for many years is to shift from seeking to assuming &mdash; to assume that they have arrived at a level of righteousness and humility that exempts them from the urgency of continued seeking. Zephaniah&rsquo;s call is to the already-obedient, suggesting that no level of prior faithfulness makes the call to seek the LORD superfluous. The longest journey in the spiritual life begins with the first step of seeking and does not end until we see him face to face.",
      "In practical terms, seeking the LORD looks like the regular practices of prayer, Scripture reading, worship, and community that keep us oriented toward God rather than toward our own comfort, achievement, or security. Seeking righteousness looks like the honest examination of our conduct in every relationship &mdash; at home, at work, in our finances, in our speech. Seeking humility looks like the daily surrender of the pride that tells us we are exceptions to the conditions under which everyone else lives before God.",
    ],
  },
  {
    heading: "The &ldquo;Perhaps&rdquo; and the Character of God",
    accent: GOLD,
    paragraphs: [
      "The &ldquo;perhaps&rdquo; of verse 3 has troubled interpreters who prefer a more guaranteed transaction: if I do X, God must do Y. But the &ldquo;perhaps&rdquo; is not a defect in the divine economy; it is a revelation of divine character. It declares that God cannot be manipulated. His mercy is genuinely free &mdash; free from human coercion, free from mechanical triggers, free to be given or withheld according to his wisdom and love.",
      "The &ldquo;perhaps&rdquo; also preserves the dignity of the human being who seeks. If seeking were a guaranteed mechanical trigger for mercy, it would reduce prayer and repentance to vending-machine transactions rather than genuine encounters with the living God. The &ldquo;perhaps&rdquo; keeps the encounter real &mdash; keeps it a genuine meeting between a sovereign God and a seeking human being, in which the outcome is not predetermined by a formula but given by a Person.",
      "The deep comfort hidden in the &ldquo;perhaps&rdquo; is this: the God who does not guarantee mercy is the same God who is &ldquo;gracious and merciful, slow to anger, and abounding in steadfast love&rdquo; (Exod 34:6). His freedom to withhold mercy is exercised by a God whose characteristic response to genuine seeking is to grant it. Joel 2:13&ndash;14 and Jonah 3:9 both use the same &ldquo;perhaps&rdquo; language in contexts where God&rsquo;s relenting is the expected outcome. The &ldquo;perhaps&rdquo; does not counsel despair; it counsels honest, humble trust in the kind of God who is pleased to be sought.",
    ],
  },
  {
    heading: "Nineveh, Pride, and the Empires of Every Age",
    accent: PURPLE,
    paragraphs: [
      "The fall of Nineveh in Zephaniah 2:13&ndash;15 is a perennial parable for every human institution that begins to believe its own press. The boast &ldquo;I am, and there is no one else&rdquo; is spoken by Nineveh, Babylon, Rome, and by every empire, ideology, corporation, and individual that substitutes the creature for the Creator in the place of ultimate trust and ultimate identity.",
      "The pastoral relevance is not merely political. Individuals make the same boast when they construct their self-image on the assumption that they are uniquely necessary, uniquely competent, or uniquely exempt from the vulnerabilities that afflict other people. The &ldquo;I am, and there is no one else&rdquo; of personal pride is the microcosom of Nineveh&rsquo;s imperial arrogance, and it invites the same divine response: the humbling that removes the ground from under the boast.",
      "The specific image of the collapsed city colonized by owls and hedgehogs is a picture of what Daniel 4:28&ndash;37 describes in Nebuchadnezzar&rsquo;s personal experience: the man who boasted of his great Babylon was driven from human society to live like a wild animal until he acknowledged that &ldquo;the Most High rules the kingdom of men and gives it to whom he will.&rdquo; Zephaniah&rsquo;s oracle against Nineveh, Daniel&rsquo;s story of Nebuchadnezzar, Isaiah&rsquo;s oracle against Babylon, and Revelation&rsquo;s vision of the fall of end-times Babylon are four movements of the same symphony: God brings down the proud and exalts the humble.",
    ],
  },
];

const reflectionQuestions = [
  "The call of Zephaniah 2:1&ndash;3 is addressed to a &ldquo;shameless nation&rdquo; that has lost the capacity for appropriate spiritual shame. In what areas of your life have you grown numb to what should trouble you about your relationship with God?",
  "What does seeking the LORD, seeking righteousness, and seeking humility look like practically in your specific circumstances this week?",
  "The &ldquo;perhaps&rdquo; of verse 3 keeps God from being manipulated but does not counsel despair. How do you hold together the genuine freedom of divine mercy with the genuine invitation to seek and find?",
  "Nineveh boasted &ldquo;I am, and there is no one else.&rdquo; Where do you hear the echo of that boast in contemporary culture? Where do you hear it in your own heart?",
  "The remnant that is &ldquo;hidden&rdquo; on the day of the LORD&rsquo;s anger is hidden in God himself (Col 3:3). What does it mean to you that your ultimate security is found in being hidden in Christ rather than in any earthly resource?",
  "Zephaniah 2 announces judgment on all four compass directions &mdash; no nation and no person is exempt. How does this universal scope of divine sovereignty shape the way you pray for and relate to people and nations very different from your own?",
];

const videoItems = [
  { videoId: "XpNxCPHrRIY", title: "Zephaniah 2 - Seek the LORD Before the Day of Wrath" },
  { videoId: "6LmRNVxAjMA", title: "The Perhaps of Zephaniah 2:3 - Seeking Refuge in God" },
  { videoId: "Kd1-VGSVFPo", title: "Oracles Against the Nations in Zephaniah" },
  { videoId: "jT2UxBHb5sE", title: "The Fall of Nineveh - Pride and the Power of God" },
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

export default function Zephaniah2Guide() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${GREEN}22`, color: GREEN, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Zephaniah Chapter 2
          </h1>
          <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", color: TEXT, lineHeight: 1.6, margin: "0 0 1rem", fontWeight: 600 }}>
            Seek Refuge Before the Day of Wrath - Oracles Against the Nations
          </p>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: MUTED, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;Seek the LORD, all you humble of the land, who do his just commands; seek righteousness, seek humility; perhaps you may be hidden on the day of the anger of the LORD.&rdquo; &mdash; Zephaniah 2:3" }}
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
                border: `1px solid ${activeTab === t ? GREEN : BORDER}`,
                background: activeTab === t ? GREEN : CARD,
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
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Overview of Zephaniah 2</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "After the devastating announcement of chapter 1, Zephaniah 2 turns to a narrow but real window of hope, followed by four oracles of judgment that cover every direction of the compass. The opening call &mdash; &ldquo;Gather together, seek the LORD, perhaps you may be hidden&rdquo; &mdash; is one of the most poignant moments in Old Testament prophecy. Then the chapter moves outward from Judah in all four directions: west to Philistia, east to Moab and Ammon, south to Cush, north to Assyria. The universal scope of the Day of the LORD announced in chapter 1 finds its specific illustration in these four oracles. No nation, however powerful or distant, stands outside the governance of the LORD of hosts." }}
            />
            {overviewBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Key Themes</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Zephaniah 2 is rich with theological depth beneath its surface of judgment oracles. The single word &ldquo;perhaps&rdquo; in verse 3 opens onto a profound discussion of divine sovereignty and human response. The four compass-point oracles articulate the universal scope of divine justice. The boast of Nineveh (&ldquo;I am, and there is no one else&rdquo;) identifies the root sin of pride that underlies every form of idolatry. And the remnant theme running through the chapter carries the seeds of the great hope that Zephaniah 3 will fully disclose." }}
            />
            {themeBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Verse by Verse</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "The verse-by-verse movement of Zephaniah 2 reveals a carefully organized structure. Verses 1 through 3 address Judah directly with a call to urgent seeking. The four oracles that follow &mdash; Philistia (vv. 4&ndash;7), Moab and Ammon (vv. 8&ndash;11), Cush (v. 12), and Assyria (vv. 13&ndash;15) &mdash; complete the compass in a pattern of increasing distance and increasing elaboration. The longest and most developed oracle is reserved for the farthest and most powerful nation, Assyria, whose capital Nineveh is the subject of one of the most dramatically confirmed predictions in all of prophecy." }}
            />
            {verseBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Application</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Zephaniah 2 speaks to the church at the point of its greatest need: the urgency of whole-hearted response to God&rsquo;s warning before it is too late, the practice of genuine seeking rather than comfortable assumption, the humility that refuses the pride of Nineveh, and the trust that finds its security in God alone. These are not merely ancient concerns but the defining spiritual challenges of every generation of believers." }}
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
            dangerouslySetInnerHTML={{ __html: "Go deeper into Zephaniah 2 with these video teachings on the call to seek refuge before the day of wrath, the theology of the &ldquo;perhaps,&rdquo; the oracles against the nations, and the fall of Nineveh as a parable of pride brought low." }}
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

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            Hidden in God - The Hope of the Remnant
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem" }}
            dangerouslySetInnerHTML={{ __html: "Zephaniah 2:3 promises that those who seek the LORD with righteousness and humility may be hidden on the day of his anger. The word &ldquo;hidden&rdquo; (sathar) is the same word used in the Psalms for God as shelter and hiding place (Ps 27:5; 31:20; 64:2). Paul carries it forward into the new covenant age: &ldquo;you have died, and your life is hidden with Christ in God&rdquo; (Col 3:3). The remnant of Zephaniah 2 is the church of every age, those whose ultimate security is not in wealth, power, or national identity but in being known by and concealed in the living God." }}
          />
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "Father, we confess that we are too easily like the shameless nation that needs the fourfold &ldquo;before&rdquo; to shake us awake. Grant us the urgency to seek you while you may be found, the righteousness that embodies your covenant in our daily conduct, and the humility that refuses the boast of Nineveh. In the day of your wrath, let us be found hidden in the one who bore that wrath for us, Jesus Christ our Lord. Amen." }}
          />
        </div>

      </main>
    </div>
  );
}
