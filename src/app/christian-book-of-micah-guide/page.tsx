"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "The Coming Judgment",
  "Against Corrupt Leaders",
  "The Ruler from Bethlehem",
  "What the Lord Requires",
  "Who Is a God Like You",
  "Videos",
]

const sections = [
  {
    id: "The Coming Judgment",
    heading: "The Coming Judgment",
    reference: "Micah 1&ndash;2",
    paragraphs: [
      "The Book of Micah opens with the prophet&rsquo;s identity and his time: &ldquo;The word of the Lord that came to Micah of Moresheth in the days of Jotham, Ahaz, and Hezekiah, kings of Judah, which he saw concerning Samaria and Jerusalem&rdquo; (1:1). Micah was a contemporary of the great prophet Isaiah, ministering in the eighth century before Christ, but where Isaiah moved among the royal court of Jerusalem, Micah came from Moresheth, a small town in the rural lowlands of Judah. He spoke as a man of the countryside on behalf of the common people who were being trampled by the powerful.",
      "His prophecy is addressed to both kingdoms at once &mdash; to Samaria, capital of the northern kingdom of Israel, and to Jerusalem, capital of the southern kingdom of Judah. The book begins with a terrifying theophany, a vision of God himself coming down to judge. &ldquo;Behold, the Lord is coming out of his place, and will come down and tread upon the high places of the earth. And the mountains will melt under him, and the valleys will split open, like wax before the fire&rdquo; (1:3&ndash;4). All creation trembles at the approach of the holy God.",
      "The cause of this judgment is plain: &ldquo;All this is for the transgression of Jacob and for the sins of the house of Israel&rdquo; (1:5). Micah singles out the capitals as the very fountainheads of the nation&rsquo;s rebellion. He pronounces a devastating sentence upon Samaria, declaring that God will make it &ldquo;a heap in the open country, a place for planting vineyards&rdquo; (1:6) &mdash; a prophecy fulfilled when the Assyrians destroyed the northern kingdom in his own lifetime.",
      "But the wound was incurable, the prophet laments, for it had spread south as well: &ldquo;it has come to Judah; it has reached to the gate of my people, to Jerusalem&rdquo; (1:9). Micah grieves over the coming destruction, going &ldquo;stripped and naked&rdquo; and wailing &ldquo;like the jackals&rdquo; (1:8). His was not a cold pronouncement of doom but a heartbroken cry over the ruin that sin had brought upon his people.",
      "In chapter 2 the prophet names the sins more specifically: men who lie awake at night devising evil, who &ldquo;covet fields and seize them, and houses, and take them away&rdquo; (2:2), defrauding the poor of their homes and their inheritance. Against such greed God declares that he is &ldquo;devising disaster&rdquo; in turn. Those who plotted to seize the land of others would themselves be dispossessed, for the God of justice repays the oppressor in his own coin.",
    ],
  },
  {
    id: "Against Corrupt Leaders",
    heading: "Against Corrupt Leaders",
    reference: "Micah 3",
    paragraphs: [
      "In chapter 3 Micah turns his prophetic fire directly upon the leaders of the nation &mdash; the rulers, the priests, and the prophets who had betrayed their sacred trust. He addresses the heads of Jacob and rulers of Israel: &ldquo;Is it not for you to know justice? &mdash; you who hate the good and love the evil&rdquo; (3:1&ndash;2). Those appointed to defend the people had become their devourers.",
      "The imagery Micah uses is shockingly violent, exposing the brutality of the oppression. The rulers, he says, &ldquo;tear the skin from off my people and their flesh from off their bones, who eat the flesh of my people, and flay their skin from off them &hellip; and chop them up like meat in a pot&rdquo; (3:2&ndash;3). The leaders had treated the vulnerable as nothing more than prey to be consumed for their own enrichment.",
      "He condemns the false prophets who &ldquo;lead my people astray, who cry &lsquo;Peace&rsquo; when they have something to eat, but declare war against him who puts nothing into their mouths&rdquo; (3:5). These were mercenaries of the spirit, tailoring their messages to whoever paid them, comforting the rich and condemning the poor. Their prophecies were for sale, and so they had lost the power to hear from God at all: &ldquo;the sun shall go down on the prophets, and the day shall be black over them&rdquo; (3:6).",
      "Micah indicts the whole leadership class together: &ldquo;Its heads give judgment for a bribe; its priests teach for a price; its prophets practice divination for money; yet they lean on the Lord and say, &lsquo;Is not the Lord in the midst of us? No disaster shall come upon us&rsquo;&rdquo; (3:11). They wrapped their corruption in religious presumption, assuming God would always protect them no matter how they lived.",
      "Against this corrupt establishment, Micah sets himself apart as a true prophet, one whose authority came not from money but from God&rsquo;s Spirit: &ldquo;But as for me, I am filled with power, with the Spirit of the Lord, and with justice and might, to declare to Jacob his transgression and to Israel his sin&rdquo; (3:8). And then he announces the unthinkable, the consequence of their corruption: &ldquo;therefore because of you Zion shall be plowed as a field; Jerusalem shall become a heap of ruins, and the mountain of the house a wooded height&rdquo; (3:12). Even the holy city and its Temple were not exempt from the judgment of God.",
    ],
  },
  {
    id: "The Ruler from Bethlehem",
    heading: "The Ruler from Bethlehem",
    reference: "Micah 4&ndash;5",
    paragraphs: [
      "After the darkness of judgment, Micah&rsquo;s prophecy soars into one of the most luminous visions of hope in the Old Testament. In chapter 4 he foresees a day when &ldquo;the mountain of the house of the Lord shall be established as the highest of the mountains&rdquo; (4:1), when the nations will stream to it to learn the ways of God, and when swords will be beaten into plowshares and spears into pruning hooks (4:3). It is a vision of universal peace under the reign of God.",
      "Then, in chapter 5, comes the prophecy for which Micah is most famous &mdash; a word that would be quoted seven centuries later by the scribes of Jerusalem when the wise men came seeking the newborn king. &ldquo;But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, from you shall come forth for me one who is to be ruler in Israel, whose coming forth is from of old, from ancient days&rdquo; (5:2).",
      "The prophecy is breathtaking in its precision and its depth. The Messiah would be born not in the great capital of Jerusalem but in tiny, insignificant Bethlehem, the village of David&rsquo;s birth. Yet this ruler, though born in a humble town, would be no ordinary man: his &ldquo;coming forth is from of old, from ancient days&rdquo; &mdash; a phrase that points to an eternal origin, hinting at the divine nature of the one who would come.",
      "When Herod the Great demanded to know where the Christ was to be born, the chief priests and scribes answered without hesitation, &ldquo;In Bethlehem of Judea, for so it is written by the prophet&rdquo; (Matthew 2:5), and they quoted Micah. The birth of Jesus in Bethlehem, recorded in the Gospels, is the direct fulfillment of this ancient word &mdash; a stunning confirmation that the God who spoke through Micah governs the course of history toward the coming of his Son.",
      "Micah describes the character of this coming ruler: &ldquo;And he shall stand and shepherd his flock in the strength of the Lord, in the majesty of the name of the Lord his God. And they shall dwell secure, for now he shall be great to the ends of the earth. And he shall be their peace&rdquo; (5:4&ndash;5). The promised king is a shepherd-ruler whose dominion reaches to the ends of the earth, and who is himself the peace of his people &mdash; words fulfilled in Christ, the Good Shepherd and the Prince of Peace.",
    ],
  },
  {
    id: "What the Lord Requires",
    heading: "What the Lord Requires",
    reference: "Micah 6",
    paragraphs: [
      "In chapter 6 the prophet stages a kind of courtroom drama, a covenant lawsuit in which the Lord brings a case against his people. The very mountains and hills are summoned as witnesses: &ldquo;Arise, plead your case before the mountains, and let the hills hear your voice&rdquo; (6:1). God asks his people plaintively, &ldquo;O my people, what have I done to you? How have I wearied you? Answer me!&rdquo; (6:3), and he recalls his saving acts &mdash; bringing them out of Egypt, redeeming them from slavery.",
      "The people respond as if the problem were merely that they had not offered enough sacrifices. They ask, in escalating extravagance, what they could bring to satisfy God: burnt offerings, calves a year old, thousands of rams, ten thousand rivers of oil &mdash; even, in a horrifying reach, their own firstborn children: &ldquo;Shall I give my firstborn for my transgression, the fruit of my body for the sin of my soul?&rdquo; (6:7). They imagined that religion was a matter of giving God enough.",
      "Then comes the answer that stands as one of the great summaries of true religion in all of Scripture: &ldquo;He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?&rdquo; (6:8). In a single verse Micah cuts through every form of empty ritual and reduces the whole duty of man to its living heart.",
      "To &ldquo;do justice&rdquo; is to act rightly toward others, to deal fairly, and to defend the cause of the weak and the poor &mdash; the very justice the corrupt leaders had abandoned. To &ldquo;love kindness&rdquo; is to embrace covenant loyalty and mercy, the steadfast love that God himself shows, not grudgingly but with delight. And to &ldquo;walk humbly with your God&rdquo; is to live in lowly, daily fellowship with the Lord, dependent upon him and obedient to him.",
      "This verse has rightly become one of the most beloved in the Bible, for it shows that God does not desire mountains of religious performance but a transformed life of justice, mercy, and humble communion. It anticipates the words of Jesus, who taught that the weightier matters of the law are &ldquo;justice and mercy and faithfulness&rdquo; (Matthew 23:23). Micah&rsquo;s summary remains a searching question to every believer in every age: not how much religion we have, but whether we do justice, love mercy, and walk humbly with our God.",
    ],
  },
  {
    id: "Who Is a God Like You",
    heading: "Who Is a God Like You",
    reference: "Micah 7",
    paragraphs: [
      "The final chapter of Micah opens in lament. The prophet grieves over the moral collapse of his society: &ldquo;The godly has perished from the earth, and there is no one upright among mankind &hellip; the best of them is like a brier&rdquo; (7:2, 4). Trust has broken down so completely that a man&rsquo;s enemies are the members of his own household (7:6) &mdash; words Jesus himself would later echo in describing the divisions his coming would bring.",
      "Yet in the midst of this darkness Micah makes a resolute confession of faith: &ldquo;But as for me, I will look to the Lord; I will wait for the God of my salvation; my God will hear me&rdquo; (7:7). Even when society crumbles and the godly seem to vanish, the believer can fix his hope on God. And Micah speaks for the chastened people: &ldquo;When I fall, I shall rise; when I sit in darkness, the Lord will be a light to me&rdquo; (7:8).",
      "The book builds toward a soaring climax that celebrates the incomparable mercy of God. The prophet&rsquo;s very name, Micah, means &ldquo;Who is like the Lord?&rdquo; &mdash; and the closing verses answer that question by exalting the pardoning love of God: &ldquo;Who is a God like you, pardoning iniquity and passing over transgression for the remnant of his inheritance? He does not retain his anger forever, because he delights in steadfast love&rdquo; (7:18).",
      "Micah piles up images of God&rsquo;s forgiveness in language of overwhelming grace: &ldquo;He will again have compassion on us; he will tread our iniquities underfoot. You will cast all our sins into the depths of the sea&rdquo; (7:19). The sins that condemned the people are not merely forgiven but cast away into the deep, never to be recovered or held against them again. Here is the gospel in the mouth of an Old Testament prophet.",
      "The book closes by anchoring this mercy in God&rsquo;s ancient promises: &ldquo;You will show faithfulness to Jacob and steadfast love to Abraham, as you have sworn to our fathers from the days of old&rdquo; (7:20). The same God who came down in judgment in chapter 1 is revealed in chapter 7 as the God whose deepest delight is steadfast love. From the prophet of Moresheth comes the full sweep of God&rsquo;s dealings &mdash; the certainty of judgment upon sin, the call to justice and humility, the promise of a ruler from Bethlehem, and the matchless wonder of a God who casts our sins into the depths of the sea.",
    ],
  },
];

const videoItems = [
  { videoId: "MFEUEcylwLc", title: "BibleProject - Overview - Micah" },
  { videoId: "Oin2vRWZxgg", title: "Micah and the Coming Ruler from Bethlehem" },
  { videoId: "1Ae_Kd1qWYg", title: "Introduction to the Minor Prophets - Bible Study" },
  { videoId: "_AHCFKKvT5Q", title: "Do Justice, Love Mercy, Walk Humbly - Micah 6" },
];

const data: SectionGuideData = {
  accent: "#0D9488",
  badge: `Old Testament Study`,
  title: `The Book of Micah`,
  intro: `The word of a prophet from Moresheth &mdash; judgment upon Samaria and Jerusalem, the rebuke of corrupt leaders and false prophets, the promise of a ruler from Bethlehem, the summons to do justice and love mercy, and the wonder of a God who casts our sins into the depths of the sea.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of Micah through visual teaching on the coming judgment, the rebuke of corrupt leaders, the ruler from Bethlehem, and the call to do justice, love mercy, and walk humbly with God.`,
  calloutTitle: `Do Justice, Love Mercy, Walk Humbly`,
  calloutBody: `Micah holds together the severity and the tenderness of God &mdash; judgment upon the proud and the corrupt, yet a ruler promised from Bethlehem and a mercy that casts our sins into the depths of the sea. His enduring question still searches every heart: not how much religion we have, but whether we do justice, love mercy, and walk humbly with our God.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
