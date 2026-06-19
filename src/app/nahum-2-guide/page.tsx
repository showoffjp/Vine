"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
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
    heading: "The Scatterer Comes and the LORD Restores",
    reference: "Nahum 2:1&ndash;2",
    accent: PURPLE,
    paragraphs: [
      "Nahum 2 opens with what appears at first to be a mobilization call directed to Nineveh itself: &ldquo;The scatterer has come up against you. Man the ramparts; watch the road; dress for battle; collect all your strength.&rdquo; This is satire of the highest order &mdash; the prophet addresses the city about to be annihilated as though it might actually defend itself. The commands pile up in rapid succession (man, watch, dress, collect), each one underlining how futile the preparation will be. Nineveh will mobilize, and it will not matter.",
      "The scatterer (Hebrew: mepits) refers to the coalition army that attacked Nineveh in 612 BC &mdash; the Babylonians under Nabopolassar, the Medes under Cyaxares, and the Scythians. Nahum identifies this coalition not as a chance geopolitical alliance but as the instrument of divine judgment. The one who is truly acting is not the scatterer but the LORD who sends him. This is the same logic that governed God&rsquo;s use of Assyria as the rod of his anger in Isaiah 10 &mdash; human armies act as the agents of the divine will even without knowing it.",
      "Verse 2 is the theological key to the entire chapter: &ldquo;For the LORD is restoring the majesty of Jacob as the majesty of Israel, for plunderers have plundered them and ruined their branches.&rdquo; Everything that follows in the vivid battle poetry of this chapter &mdash; the scarlet warriors, the flashing chariots, the flooded palace, the plundered treasure, the empty lion&rsquo;s den &mdash; is to be read through this lens. The fall of Nineveh is not merely a geopolitical event; it is the LORD restoring the dignity of his covenant people. Jacob and Israel together name the whole covenant community &mdash; north and south, all twelve tribes &mdash; whose majesty the Assyrians had stripped away through deportation, devastation, and humiliation. What Assyria took, God is giving back.",
    ],
  },
  {
    heading: "The Battle Joined: Scarlet Warriors and Flashing Chariots",
    reference: "Nahum 2:3&ndash;5",
    accent: ROSE,
    paragraphs: [
      "Verses 3 through 5 contain some of the most vivid battle poetry in the entire Old Testament. The scene is described with cinematic intensity: the shields of the mighty men are red, the soldiers are clothed in scarlet (possibly the actual color of Median military dress, or possibly the appearance of shields prepared with oil, or simply a poetic intensification of the blood about to be shed). The chariots flash like fire on the day of muster; the war horses prance and rear.",
      "Verse 4 zooms in on the streets of the city itself: the chariots rage in the streets, they rush back and forth in the open square. Their appearance is like torches; they dart about like lightning. This is not merely description; it is disorientation. The reader is pulled into the chaos of a city under siege, surrounded by flashing metal and thundering hooves. The imagery may reflect actual battle technique &mdash; chariots used to break through city defenses and create panic among defenders &mdash; but its rhetorical effect is to make the reader feel the overwhelming force of what is coming against Nineveh.",
      "Verse 5 describes the Assyrian commanders summoning their officers, who stumble in their way. The stumbling is significant: these are the men who have organized and executed campaigns of conquest across the ancient world, and now they stumble in confusion before the walls of their own city. They rush to the wall, and the covering siege weapon (perhaps a protective device for those approaching the wall) is set up. The defenders are working desperately, but the prophet&rsquo;s tone makes clear that their effort is futile. The battle has already been decided by the one who sent the scatterer.",
    ],
  },
  {
    heading: "The City Taken: Palace, Queen, and Plundered Treasure",
    reference: "Nahum 2:6&ndash;9",
    accent: GOLD,
    paragraphs: [
      "Verse 6 marks the decisive breach: &ldquo;The river gates are opened; the palace melts away.&rdquo; Ancient accounts of Nineveh&rsquo;s fall, preserved in the Babylonian Chronicle and in the report of Diodorus Siculus, record that flooding of the Khosr River contributed to the destruction of the city&rsquo;s walls. Whether Nahum anticipates this specific event or uses the flood imagery more broadly, the result is the same: the gates are open and the palace &mdash; the symbol of Assyrian royal power &mdash; is undone. The Hebrew word translated &lsquo;melts away&rsquo; (mug) is the same word used in chapter 1 to describe the hills melting before the LORD.",
      "Verse 7 is among the most debated in Nahum textually. &ldquo;It is decreed that the city be exiled; she is carried away; her slave girls lead her, moaning like doves and beating their breasts.&rdquo; The &lsquo;she&rsquo; here is most likely personified Nineveh herself, or possibly the queen of Nineveh, stripped of honor and led into captivity. The image of women moaning like doves and beating their breasts reverses the proud power of a city that had sent thousands of other people into exile. The captor becomes the captive. The one who led others in chains now stumbles in chains herself.",
      "Verses 8 and 9 complete the scene of collapse. Nineveh is like a pool of water that drains away &mdash; its inhabitants fleeing, none turning back despite the cry &lsquo;Stop! Stop!&rsquo; The city that had drawn the wealth of nations into itself now pours out in every direction. And then the command to the invaders: &lsquo;Plunder the silver, plunder the gold! There is no end of the treasure or of the wealth of all precious things.&rsquo; The plundering of Nineveh is the reversal of a century of Assyrian plunder of other nations. What had been extracted from conquered peoples by force now flows out in the other direction.",
    ],
  },
  {
    heading: "The Empty Den and the Theological Verdict",
    reference: "Nahum 2:10&ndash;13",
    accent: TEAL,
    paragraphs: [
      "Verses 10 and 11 describe the desolation of Nineveh with accumulated negatives: &lsquo;Desolation and ruin! Hearts melt and knees tremble; anguish is in all loins; all faces grow pale.&rsquo; Then the rhetorical question: &lsquo;Where is the lions&rsquo; den, the feeding place of the young lions, where the lion and lioness went, where his cubs were, with none to disturb them?&rsquo; The answer is not given because none is needed. The den is empty. Nineveh is gone.",
      "The lion imagery in verses 11 and 12 is one of Nahum&rsquo;s most powerful literary devices. The lion was the royal symbol of Assyria. Assyrian palace reliefs, recovered by archaeologists in the nineteenth and twentieth centuries from Nineveh itself, depict the great lion-hunt scenes in which the king hunted and killed lions as a demonstration of his royal power and divine mandate. Sennacherib, Ashurbanipal, and other kings were depicted as lion-killers, and lions were kept in royal parks as symbols of the king&rsquo;s dominion over creation.",
      "Nahum turns this imagery against Nineveh with devastating irony. The lion who hunted others is now himself the prey. Verse 12 describes the lion filling his cave with prey and his lair with torn flesh &mdash; the catalog of Assyrian military conquest rendered in the language of the hunt. And then verse 13 delivers the divine verdict: &lsquo;Behold, I am against you, declares the LORD of hosts, and I will burn your chariots in smoke, and the sword shall devour your young lions. I will cut off your prey from the earth, and the voice of your messengers shall no longer be heard.&rsquo; The divine &lsquo;I am against you&rsquo; is the counter-declaration to every claim Nineveh had made to divine sanction. Assyrian kings received their authority from their gods; the LORD of hosts declares himself their adversary.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "Nahum 2 as Ancient Battle Poetry",
    accent: ROSE,
    paragraphs: [
      "Nahum 2 is widely recognized by biblical scholars as one of the finest examples of ancient battle poetry in the Hebrew Bible. Its technique is cinematic before cinema existed: it shifts perspective rapidly, zooming from the outside of the city to the streets, to the palace, to the treasure rooms, to the lion&rsquo;s den. It uses sound &mdash; the thunder of chariots, the moaning of captives, the cry of &lsquo;stop! stop!&rsquo; &mdash; and color &mdash; scarlet warriors, flashing chariots, pale faces &mdash; to create a sensory experience of battle and collapse. The pace accelerates through the chapter, mimicking the momentum of an unstoppable military advance.",
      "What distinguishes Nahum&rsquo;s battle poetry from mere military reportage is its theological orientation. The battle is not described for its own sake or to glorify the victor; it is described as the visible expression of a divine decision. The theological frame of verses 1 and 2 (the LORD is restoring Jacob&rsquo;s majesty) and verse 13 (I am against you, declares the LORD of hosts) means that everything between them is to be read as divine action through historical instruments. The scatterer who comes against Nineveh is the agent of the one who scattered Israel &mdash; and who now acts to restore what was lost.",
      "This literary technique reflects a profound theological conviction: history is not a chaos of competing powers but the theater of divine governance. The most sophisticated military machine of the ancient world does not escape the scrutiny and the verdict of the LORD of hosts. Nahum&rsquo;s poetry makes this claim not through abstract argument but through the visceral experience of a city falling, a palace dissolving, and a lion&rsquo;s den standing empty.",
    ],
  },
  {
    heading: "The Reversal of Assyrian Power",
    accent: GOLD,
    paragraphs: [
      "One of the central structural features of Nahum 2 is the systematic reversal of Assyrian power. The Assyrians had built their empire through a policy of conquest, deportation, and psychological terror. They plundered conquered nations, sent populations into exile, and left devastated landscapes in their wake. The northern kingdom of Israel had experienced this firsthand in 722 BC, when Sargon II conquered Samaria and deported thousands of Israelites. Judah had experienced it in 701 BC when Sennacherib swept through and besieged Jerusalem.",
      "In Nahum 2, each element of Assyrian power is reversed. The empire that scattered nations is itself scattered (verse 1: &lsquo;the scatterer comes against you&rsquo;). The city that emptied other cities is itself emptied (verse 8: &lsquo;Nineveh is like a pool of water whose waters run away&rsquo;). The empire that plundered nations is itself plundered (verse 9: &lsquo;plunder the silver, plunder the gold&rsquo;). The lion that filled its den with prey finds its den emptied (verses 11&ndash;12). The messengers who carried Assyrian threats across the ancient world will be heard no more (verse 13).",
      "This pattern of reversal is not merely poetic justice; it is the expression of a theological principle that runs through the whole of Scripture. Mary&rsquo;s Magnificat (Luke 1:46&ndash;55) celebrates the God who scatters the proud, brings down the powerful from their thrones, and exalts the humble. James 4:6 and 1 Peter 5:5 both quote Proverbs 3:34: &lsquo;God opposes the proud but gives grace to the humble.&rsquo; Nahum 2 is one of the Old Testament&rsquo;s most dramatic illustrations of this permanent divine principle.",
    ],
  },
  {
    heading: "The Lion Imagery and the Assyrian Royal Ideology",
    accent: TEAL,
    paragraphs: [
      "The lion was the preeminent symbol of royal power in the ancient Near East, and nowhere more so than in Assyria. The lion-hunt reliefs from Ashurbanipal&rsquo;s palace at Nineveh (now in the British Museum) are among the most celebrated works of ancient art, depicting the king hunting lions with bow and spear from his chariot. These were not mere sporting scenes; they were ideological statements. The king who could conquer the lion had demonstrated his fitness to rule, his connection to the divine, and his power over the forces of chaos.",
      "Nahum appropriates this imagery and turns it inside out. In verses 11 and 12, Nineveh is the lion &mdash; the male lion, the lioness, the cubs in the den, filling their lair with torn flesh and prey. But then verse 13 declares that the LORD is against this lion. The den will be emptied; the young lions will be devoured by the sword; the prey will be cut off. The very symbol that Assyria used to proclaim its invincibility becomes the symbol of its destruction. What the king of Assyria did to lions, the LORD of hosts is doing to the king of Assyria.",
      "This use of an enemy&rsquo;s own symbols against them is a recurring biblical pattern. David uses Goliath&rsquo;s own sword to take his head (1 Samuel 17:51). Jesus is crucified on a cross &mdash; the Roman symbol of imperial power and the humiliation of conquered peoples &mdash; and that cross becomes the means of cosmic victory over every principality and power (Colossians 2:14&ndash;15). Nahum&rsquo;s lion imagery stands in this tradition: the symbol of the oppressor&rsquo;s power becomes the very language of its judgment.",
    ],
  },
  {
    heading: "The LORD Restoring Jacob&rsquo;s Majesty",
    accent: GREEN,
    paragraphs: [
      "Nahum 2:2 is the theological heart of the chapter: &ldquo;For the LORD is restoring the majesty of Jacob as the majesty of Israel, for plunderers have plundered them and ruined their branches.&rdquo; The word translated &lsquo;majesty&rsquo; or &lsquo;pride&rsquo; (ga&rsquo;on) has both positive and negative valences in the Old Testament. It can denote arrogant self-exaltation (which the LORD opposes in Proverbs 16:18), but it can also denote the dignity and honor that belong rightly to God&rsquo;s people (Isaiah 60:15: &lsquo;I will make you majestic forever&rsquo;). Here it is unambiguously positive: the dignity that the plunderers stripped from Jacob and Israel is the dignity the LORD is restoring.",
      "The reference to &lsquo;branches that plunderers have ruined&rsquo; is an agricultural metaphor for the devastation of conquest. The Assyrians had not merely taken treasure; they had systematically dismantled the human communities that made up the covenant people. They had taken the leaders, the craftsmen, the educated classes &mdash; the branches that allowed the vine to bear fruit. The restoration of Jacob&rsquo;s majesty is the reversal of this systematic dismantling. It is not merely political independence but the reconstitution of the people themselves.",
      "For the New Testament reader, this restoration of Jacob&rsquo;s majesty points forward to the restoration of all things in Christ. Paul&rsquo;s great argument in Romans 9&ndash;11 wrestles with the question of Israel&rsquo;s destiny in light of the gospel, and his conclusion is that the gifts and calling of God are irrevocable (Romans 11:29). The restoration announced in Nahum 2:2 is a down payment on the full and final restoration that Paul envisions in Romans 11:25&ndash;26, when all Israel will be saved and the partial hardening will give way to fullness.",
    ],
  },
  {
    heading: "&lsquo;I Am Against You&rsquo;: The Most Terrible Declaration",
    accent: PURPLE,
    paragraphs: [
      "Nahum 2:13 contains one of the most theologically significant phrases in the Minor Prophets: &ldquo;Behold, I am against you, declares the LORD of hosts.&rdquo; This phrase, also found in Nahum 3:5, Jeremiah 50:31, 51:25, and Ezekiel (repeated many times against Tyre and Egypt), is the divine counter-declaration to the imperial claim. Assyrian kings received their authority from their gods; their military campaigns were acts of divine will; their conquest was sanctioned by heaven. The LORD of hosts declares: I am against you. The entire framework of Assyrian divine sanction is overthrown.",
      "The title &lsquo;LORD of hosts&rsquo; (Yahweh Sabaoth) is the specific name for God as the commander of the heavenly armies. It is the name used in Isaiah 6:3 when the seraphim cry &lsquo;holy, holy, holy is the LORD of hosts; the whole earth is full of his glory.&rsquo; It is the name by which David addresses Goliath in 1 Samuel 17:45: &lsquo;I come to you in the name of the LORD of hosts.&rsquo; When the LORD of hosts says &lsquo;I am against you,&rsquo; it is not a competitive claim between equals; it is the declaration of the one who commands the armies of heaven that all the armies of earth stand against him.",
      "The practical consequences are spelled out in verse 13b: chariots burned in smoke, young lions devoured by the sword, prey cut off from the earth, the voice of messengers heard no more. The diplomatic and military apparatus of Nineveh &mdash; its chariots, its warriors, its international reach through messengers and envoys &mdash; will be silenced. The declaration &lsquo;I am against you&rsquo; is not empty rhetoric; it is the effective word of the Lord who speaks and it stands, who commands and it comes into being (Psalm 33:9).",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "Verses 1 to 2: The Scatterer and the Restorer",
    reference: "Nahum 2:1&ndash;2",
    accent: PURPLE,
    paragraphs: [
      "Verse 1 opens with a darkly ironic military summons addressed to Nineveh: &lsquo;Man the ramparts; watch the road; dress for battle; collect all your strength.&rsquo; Four imperatives in rapid succession, each one a conventional preparation for siege warfare. Nahum addresses the city as a general might address a garrison &mdash; except that the tone is unmistakably ironic. The one coming against Nineveh is described as &lsquo;the scatterer&rsquo; (mepits), a participle that carries the sense of one who disperses and shatters. The same verb root describes what God does to his enemies in the psalms (Psalm 68:1: &lsquo;God shall arise, his enemies shall be scattered&rsquo;). The scatterer who comes against Nineveh is acting as the LORD&rsquo;s instrument.",
      "Verse 2 interrupts the battle narrative with the theological reason for the entire campaign: &lsquo;For the LORD is restoring the majesty of Jacob as the majesty of Israel, for plunderers have plundered them and ruined their branches.&rsquo; The word &lsquo;for&rsquo; (ki) is causal &mdash; the reason Nineveh falls is that the LORD is restoring his people. The mention of both Jacob and Israel together encompasses the full covenant community, both the southern kingdom (which often goes by the name Jacob in the prophets) and the northern kingdom (Israel), which had already gone into exile by Nahum&rsquo;s time. The restoration is total: not only Judah but the whole people of the covenant are in view.",
    ],
  },
  {
    heading: "Verses 3 to 5: The Battle Described in Flash and Fire",
    reference: "Nahum 2:3&ndash;5",
    accent: ROSE,
    paragraphs: [
      "Verse 3 launches the extended battle description with two lines of visual intensity: the shields of the mighty men are red, and the soldiers clothed in scarlet. The mention of red and scarlet may reflect the actual military dress of the Median forces (some ancient sources describe red as a Median color), but more importantly it creates an immediate visual association with blood &mdash; the color of battle&rsquo;s cost. The chariots are described with a remarkable phrase: &lsquo;the chariots flash like fire on the day of muster.&rsquo; The word translated &lsquo;flash&rsquo; (lahab) is related to flame; it evokes the blinding reflection of sunlight off bronze and iron.",
      "Verse 4 shifts to the streets of the city: &lsquo;The chariots race madly through the streets; they rush to and fro through the squares; they gleam like torches; they dart like lightning.&rsquo; The verbs escalate in speed and chaos: racing, rushing, gleaming, darting. The city that had sent its armies across the world now has those armies &mdash; or an equivalent force &mdash; tearing through its own streets. The grammar creates a kind of vertigo, pulling the reader into the motion of the scene.",
      "Verse 5 turns to the Assyrian commanders: &lsquo;He remembers his officers; they stumble as they go; they hurry to the wall; the siege tower is set up.&rsquo; The stumbling of the officers is both literal (in the chaos of battle) and symbolic (in the failure of a command structure that has lost coherence). The setting up of the siege tower may describe either the attackers advancing or a desperate Assyrian attempt to defend, but either way the verse conveys a city in the final stages of its capacity to resist.",
    ],
  },
  {
    heading: "Verses 6 to 9: The Palace Dissolved and the Treasure Scattered",
    reference: "Nahum 2:6&ndash;9",
    accent: GOLD,
    paragraphs: [
      "Verse 6 is the pivot of the chapter: &lsquo;The river gates are opened; the palace melts away.&rsquo; Ancient accounts of Nineveh&rsquo;s fall in 612 BC include reports of flooding. The Babylonian Chronicle records that the city fell after a three-month siege; the report of Diodorus Siculus, drawing on earlier sources, mentions that flooding of the Tigris and Khosr rivers contributed to the breaching of the walls. Whether Nahum&rsquo;s imagery is literal anticipation or extended metaphor, the rhetorical effect is decisive: the gates are opened from the outside, the palace &mdash; the seat of Assyrian royal power &mdash; dissolves.",
      "Verse 7 describes the exile of the city or its queen: &lsquo;It is decreed; she is stripped, she is carried away; and her slave girls moan like doves and beat their breasts.&rsquo; The word translated &lsquo;decreed&rsquo; (hussab) is difficult; some manuscripts and versions read it as a proper name (Huzzab, possibly a queen or the personified city). What is unambiguous is the reversal: women are carried off into exile just as Assyria carried other nations&rsquo; women into exile. The sound of mourning doves and the gesture of breast-beating were universal signals of grief in the ancient world.",
      "Verses 8 and 9 complete the dissolution. Nineveh, &lsquo;though its waters have been from of old, they flee away.&rsquo; The people of the city stream out like water from a pool, and the cry &lsquo;stop! stop!&rsquo; cannot turn them. Then the victors are invited to pillage: &lsquo;Plunder the silver, plunder the gold! There is no end of the treasure, or of the wealth of all precious things.&rsquo; The irony is sharp: Nineveh had been one of the great repositories of plundered wealth in the ancient world. Now that wealth becomes the plunder of others. The empire that lived by extraction dies by extraction.",
    ],
  },
  {
    heading: "Verses 10 to 12: The Empty Lion&rsquo;s Den",
    reference: "Nahum 2:10&ndash;12",
    accent: TEAL,
    paragraphs: [
      "Verse 10 piles up three synonyms for desolation: &lsquo;Desolation and ruin and devastation!&rsquo; (Hebrew: buqah umebhuqah umebullaqah &mdash; a triple word-play built on alliteration and similar sounds that in Hebrew has the feeling of a drumbeat of emptiness). The physical symptoms of the inhabitants follow: hearts melt, knees tremble, anguish in all loins, faces pale. These are the classic physiological responses to terror, catalogued in ancient battle accounts and in biblical descriptions of the response to divine judgment (see Joshua 2:11; 7:5; Isaiah 13:7).",
      "Verses 11 and 12 introduce the lion imagery with a series of rhetorical questions: &lsquo;Where is the lions&rsquo; den, the feeding place of the young lions, where the lion and lioness went, where his cubs were, with none to disturb them?&rsquo; The den that is full of prey &mdash; &lsquo;the lion tore enough for his cubs and strangled prey for his lionesses; he filled his caves with prey and his dens with torn flesh&rsquo; &mdash; is the city of Nineveh described in the language of its own royal ideology. The cataloging of the lion (adult male), lioness (female), and cubs mirrors the imagery of the palace reliefs: the complete royal household of Assyrian power.",
      "The rhetorical effect of asking &lsquo;where is the lions&rsquo; den?&rsquo; is devastating. There is no answer because the den has been destroyed. The question hangs in the air as a declaration of absence: where once there was a superpower that seemed permanent and invincible, there is nothing. This will prove literally true: within two centuries of Nineveh&rsquo;s fall, the city had been so thoroughly destroyed and buried that Xenophon and his Ten Thousand marched past its ruins in 401 BC without knowing what great city lay beneath the mounds.",
    ],
  },
  {
    heading: "Verse 13: I Am Against You",
    reference: "Nahum 2:13",
    accent: PURPLE,
    paragraphs: [
      "Verse 13 is the theological climax of the chapter and of the battle poem that has occupied the whole of Nahum 2: &lsquo;Behold, I am against you, declares the LORD of hosts, and I will burn your chariots in smoke, and the sword shall devour your young lions. I will cut off your prey from the earth, and the voice of your messengers shall no longer be heard.&rsquo; After the poetry of human battle, the LORD of hosts speaks directly. The battle that the chapter has described in human terms is here identified in its ultimate cause: it is the direct action of the God who commands the armies of heaven.",
      "The declaration &lsquo;I am against you&rsquo; (hineni elaich) appears in Nahum twice (2:13 and 3:5) and functions as the divine counter-claim to Nineveh&rsquo;s assertions of divine favor. Assyrian royal theology insisted that Ashur, the chief god of Assyria, stood behind Nineveh&rsquo;s conquests and that the Assyrian king ruled by divine sanction. The LORD of hosts declares himself to be the adversary of this claim and of the city that made it. The phrase &lsquo;declares the LORD of hosts&rsquo; (ne&rsquo;um Yahweh Sabaoth) is the same prophetic formula used throughout Isaiah, Jeremiah, and Amos to mark a word of divine authority.",
      "The five consequences that follow cover the full apparatus of Assyrian imperial power. The chariots burned in smoke neutralizes the military technology that made Assyrian campaigns so formidable. The young lions devoured by the sword eliminates the next generation of warriors. The prey cut off from the earth ends the system of tribute and plunder that sustained the empire. And the messengers heard no more silences the diplomatic and propagandistic apparatus &mdash; the envoys, the heralds, the Rabshakeh-like intimidators &mdash; through which Assyria projected its power across the ancient world. Not one element of the empire&rsquo;s strength will survive the word of the LORD of hosts.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "The God Who Reverses the Proud",
    accent: ROSE,
    paragraphs: [
      "Nahum 2 is one of the Old Testament&rsquo;s most graphic illustrations of what the New Testament describes as God opposing the proud (James 4:6; 1 Peter 5:5). The Assyrian empire was not merely powerful; it was self-consciously arrogant, attributing its conquests to its own invincibility and the superiority of its gods. The chapter&rsquo;s systematic reversal of every element of Assyrian power is the LORD of hosts demonstrating that no human power, however entrenched, is beyond the reach of divine reversal.",
      "For contemporary readers, this has both comfort and warning embedded in it. The comfort is that no empire, institution, or power that makes war on the people of God is beyond the capacity of the LORD of hosts to bring low. The warning is that the arrogance of Nineveh is not a peculiarly Assyrian defect &mdash; it is the default posture of human pride, and it can appear in individuals, churches, and nations as easily as in ancient empires. The God who stood against Nineveh stands against the proud wherever they are found.",
    ],
  },
  {
    heading: "Reading History Through the Frame of Nahum 2:2",
    accent: GREEN,
    paragraphs: [
      "Nahum 2:2 offers a framework for reading history that the chapter then illustrates: the LORD is restoring the majesty of Jacob. The fall of Nineveh is not an isolated event in the flow of ancient Near Eastern politics; it is a moment in the larger story of God&rsquo;s faithfulness to his covenant people. This means that history &mdash; including the most violent and disorienting chapters of history &mdash; is not ultimately the story of the strong doing what they will to the weak. It is the story of God working through and against human events to restore what sin and cruelty have taken from his people.",
      "For the Christian reading Nahum 2 from the other side of the resurrection, this framework is expanded to its final scope. The fall of Nineveh was a prefigurement of the decisive reversal accomplished at the cross and resurrection, where sin, death, and the powers of darkness were themselves brought low and the dignity of the children of God was restored in Christ. The restoration of Jacob&rsquo;s majesty that Nahum announces is a shadow of the restoration of all things that Paul describes in Romans 8:18&ndash;25 and that Revelation 21&ndash;22 depicts in its final vision of the new creation.",
    ],
  },
  {
    heading: "The Empty Den and the Certainty of Divine Judgment",
    accent: TEAL,
    paragraphs: [
      "The haunting question of Nahum 2:11 &mdash; &lsquo;Where is the lions&rsquo; den?&rsquo; &mdash; proved to be historically unanswerable within a few generations. The city that had seemed like a permanent fixture of the world&rsquo;s landscape was so thoroughly destroyed that it was lost to memory. Nahum&rsquo;s oracle, which must have seemed wildly optimistic when it was first delivered to a people living under Assyrian domination, was vindicated with complete precision.",
      "This historical fulfillment is one of the most powerful apologetic arguments for the reliability of prophetic revelation in the Bible. The oracle was specific, it was announced before the event, and it was fulfilled completely. For those who wonder whether the judgments announced in Scripture about the ultimate fate of evil are credible, Nahum&rsquo;s track record is instructive: what the LORD of hosts says will happen, happens, and the lion&rsquo;s den that seemed impregnable can be empty within a generation.",
    ],
  },
  {
    heading: "The Symbol Turned Against the Oppressor",
    accent: GOLD,
    paragraphs: [
      "The lion imagery of Nahum 2:11&ndash;12 illustrates a pattern that runs through the whole of biblical revelation: God uses the symbols and instruments of the oppressor&rsquo;s own power as the vocabulary of their judgment. Assyria gloried in the lion and built its ideology around it; Nahum turns that very image into the language of Nineveh&rsquo;s destruction. The den that is full becomes the den that is empty. The lions that tore prey for their cubs find their prey cut off and their cubs devoured.",
      "The New Testament deepens this pattern. In Revelation, the beast from the sea uses the imagery of Daniel&rsquo;s four empires &mdash; the same empires that persecuted Israel &mdash; and is defeated not by superior military force but by the Lamb who was slain (Revelation 5:5&ndash;6). The cross itself is the ultimate example: Rome&rsquo;s instrument of execution and public shaming becomes the very means by which Christ disarms the rulers and authorities and puts them to open shame (Colossians 2:14&ndash;15). Nahum&rsquo;s lion is a prototype of every subsequent inversion of power by the God who opposes the proud.",
    ],
  },
];

const reflectionQuestions = [
  "Nahum 2:2 says the fall of Nineveh is about the LORD restoring Jacob&rsquo;s majesty. How does reading difficult historical events &mdash; including suffering and loss in your own life &mdash; through the frame of &lsquo;God is restoring what was taken&rsquo; change how you process them?",
  "The lion was the symbol of Assyrian royal power; Nahum turns it against Nineveh. Where in your own life do you see pride or self-sufficiency that God might need to empty as he emptied the lion&rsquo;s den?",
  "Verse 13 declares &lsquo;I am against you, says the LORD of hosts.&rsquo; These are the most terrible words in Scripture. What does it mean to you that the same God who can say those words to an empire is the God who says to those in Christ, &lsquo;I am for you&rsquo; (Romans 8:31)?",
  "The chapter describes Nineveh&rsquo;s people streaming out of the city like water running away, unable to stop despite the cry &lsquo;stop! stop!&rsquo; (verse 8). What does the image of an unstoppable collapse communicate about the finality of divine judgment?",
  "Nahum 2&rsquo;s battle poetry is among the most vivid in Scripture. Why do you think God preserved this kind of visceral, war-poetry description of judgment in the Bible? What would be lost if these passages were replaced with calm doctrinal statements about divine sovereignty?",
  "The historical fulfillment of Nahum&rsquo;s prophecy &mdash; Nineveh so thoroughly destroyed it was forgotten for centuries &mdash; is a strong argument for the reliability of biblical prophecy. How does this fulfilled prophecy strengthen your confidence in the yet-unfulfilled prophecies of Scripture?",
];

const videoItems = [
  { videoId: "8phkAg8PMHE", title: "Nahum 2 - Battle Poetry and the Fall of Nineveh" },
  { videoId: "Q2oNOlXzBhY", title: "The Empty Lion&apos;s Den: Assyrian Power and Divine Judgment" },
  { videoId: "JKPD1AXf0lg", title: "God Restoring Jacob&apos;s Majesty - Nahum 2:2 Explained" },
  { videoId: "3sO5FH2ybPY", title: "I Am Against You: Nahum 2:13 and the LORD of Hosts" },
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
          style={{
            color: block.accent,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: "1.1rem",
          }}
          dangerouslySetInnerHTML={{ __html: block.reference }}
        />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.1rem",
          borderLeft: `3px solid ${block.accent}55`,
          paddingLeft: "1.25rem",
        }}
      >
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

export default function Nahum2Guide() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div
            style={{
              display: "inline-block",
              background: `${TEAL}22`,
              color: TEAL,
              borderRadius: 6,
              padding: "4px 12px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Old Testament Study
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              margin: "0 0 1rem",
              lineHeight: 1.15,
            }}
          >
            Nahum Chapter 2
          </h1>
          <p
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
              color: TEXT,
              lineHeight: 1.6,
              margin: "0 0 1rem",
              fontWeight: 600,
            }}
          >
            The Vivid Battle Poetry of Nineveh&apos;s Fall
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
              color: MUTED,
              lineHeight: 1.75,
              margin: 0,
              fontStyle: "italic",
            }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;Behold, I am against you, declares the LORD of hosts, and I will burn your chariots in smoke, and the sword shall devour your young lions. I will cut off your prey from the earth, and the voice of your messengers shall no longer be heard.&rdquo; &mdash; Nahum 2:13",
            }}
          />
        </header>

        <nav
          style={{
            position: "sticky",
            top: "var(--header-height, 80px)",
            zIndex: 10,
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: "2.5rem",
            borderBottom: `1px solid ${BORDER}`,
            paddingBottom: "1rem",
            paddingTop: "0.5rem",
            background: BG,
          }}
        >
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
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>
              Overview of Nahum 2
            </h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Nahum 2 is the most vivid chapter of battle poetry in the Minor Prophets and one of the most arresting in the entire Old Testament. It describes the fall of Nineveh with the sensory density of an eyewitness account &mdash; scarlet warriors, flashing chariots, flooded palace gates, plundered treasure, and the haunting image of an empty lion&rsquo;s den. But the chapter is not merely military reportage. It is framed by two theological declarations: verse 2 announces that the LORD is restoring the majesty of Jacob even as Nineveh falls, and verse 13 delivers the divine verdict that the LORD of hosts himself stands against the city. Everything between these frames &mdash; the poetry of battle, the imagery of reversal, the description of a superpower in collapse &mdash; is to be read as the visible expression of an invisible divine decision.",
              }}
            />
            {overviewBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}
          </div>
        )}

        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Key Themes</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Nahum 2 raises some of the deepest questions in the theology of the Old Testament: How does God govern history? What does divine judgment look like in the arena of international politics? Why does God preserve such vivid battle poetry in Scripture? The chapter&rsquo;s themes &mdash; the reversal of the proud, the restoration of the oppressed, the lion imagery inverted against its Assyrian masters, and the terrible declaration &lsquo;I am against you&rsquo; &mdash; all touch on permanent features of the divine character and the divine way of working in the world.",
              }}
            />
            {themeBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}
          </div>
        )}

        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Verse by Verse</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Moving through Nahum 2 verse by verse reveals the remarkable literary craft underlying the chapter&rsquo;s apparent chaos. The ironic summons of verse 1, the theological interruption of verse 2, the accelerating battle description of verses 3&ndash;5, the decisive breach of verses 6&ndash;7, the plundering of verses 8&ndash;9, the empty lion&rsquo;s den of verses 10&ndash;12, and the divine verdict of verse 13 &mdash; each section advances the narrative while deepening the theological claim that the God of Israel governs even the fall of the world&rsquo;s greatest empire.",
              }}
            />
            {verseBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}
          </div>
        )}

        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Application</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Nahum 2 confronts us with a God who acts decisively in history, who reverses the proud and restores the oppressed, and who can bring the greatest empire in the world to nothing within a generation. These truths press on the way we think about power, history, divine justice, and the credibility of biblical prophecy. They also invite us to consider where we place our confidence: in the structures of human power that seem permanent, or in the God who emptied the lion&rsquo;s den.",
              }}
            />
            {applicationBlocks.map((b) => (
              <BlockView key={b.heading} block={b} />
            ))}

            <div
              style={{
                marginTop: "1rem",
                background: CARD,
                border: `1px solid ${GOLD}44`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
              }}
            >
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 1.1rem", fontSize: "1.25rem" }}>
                Reflection Questions
              </h3>
              <ol
                style={{
                  margin: 0,
                  paddingLeft: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                }}
              >
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

        <section
          style={{
            marginTop: "3.5rem",
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "2.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 8px" }}>Video Teaching</h2>
          <p
            style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
            dangerouslySetInnerHTML={{
              __html:
                "Go deeper into Nahum 2 with these video teachings on the battle poetry of Nineveh&rsquo;s fall, the theology of reversal, the lion imagery of Assyrian power, and the declaration of the LORD of hosts standing against the empire.",
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {videoItems.map((v) => (
              <div
                key={v.videoId}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            marginTop: "3.5rem",
            background: CARD,
            border: `1px solid ${TEAL}44`,
            borderRadius: 12,
            padding: "1.75rem 2rem",
          }}
        >
          <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            Closing Prayer
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{
              __html:
                "Lord God, you are the LORD of hosts, the commander of the armies of heaven, and the one against whom no empire can stand. Nahum 2 shows us what it means for you to act in history &mdash; the lion&rsquo;s den emptied, the plunderers plundered, the scatterers scattered. We confess that we are prone to trust in visible power and to fear those who seem invincible. But Nineveh&rsquo;s dust rebukes us. You restore the majesty of the humble and bring low the pride of the strong. Turn our hearts to trust you rather than the structures of this age. Help us to see the world as Nahum saw it: not as the chaos of competing powers, but as the theater of your sovereign governance, moving all things toward the restoration you have promised in your Son. We pray in the name of Jesus Christ, the Lion of the tribe of Judah who is also the Lamb who was slain, and in whom every promise of restoration finds its yes. Amen.",
            }}
          />
        </div>
      </main>
    </div>
  );
}
