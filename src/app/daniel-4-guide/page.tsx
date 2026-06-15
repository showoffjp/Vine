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

const TABS = [
  "Overview",
  "Key Themes",
  "Verse by Verse",
  "Application",
] as const;
type Tab = (typeof TABS)[number];

interface Block {
  heading: string;
  reference: string;
  accent: string;
  paragraphs: string[];
}

interface Question {
  q: string;
}

const overviewBlocks: Block[] = [
  {
    heading: "A King&rsquo;s Testimony to the Most High",
    reference: "Daniel 4:1&ndash;37",
    accent: GOLD,
    paragraphs: [
      "Daniel chapter 4 is one of the most extraordinary documents in all of Scripture, for it is a royal proclamation written in the first person by the most powerful pagan monarch of the ancient world. Nebuchadnezzar, king of Babylon, the conqueror who burned Jerusalem and carried Judah into exile, here addresses &ldquo;all peoples, nations, and languages, that dwell in all the earth&rdquo; (4:1) with a personal testimony of how the Most High God humbled him and brought him to his senses. It is the autobiography of a proud man broken and remade.",
      "The chapter opens and closes with the king&rsquo;s own praise of God, framing the entire narrative as a doxology. &ldquo;How great are his signs, how mighty his wonders! His kingdom is an everlasting kingdom, and his dominion endures from generation to generation&rdquo; (4:3). Between this opening blessing and the closing one in verse 37 lies the story of the king&rsquo;s second dream, its terrifying interpretation, its literal fulfillment, and his eventual restoration. The structure is that of a testimony: here is what God did to me, and here is why I now praise him.",
      "At the heart of the chapter beats a single refrain that recurs again and again: &ldquo;the Most High rules the kingdom of men and gives it to whom he will&rdquo; (4:17, 25, 32). This is the theological spine of the entire book of Daniel, and chapter 4 is its sharpest illustration. The greatest king on earth must learn, through humiliation, that his throne is not his own, that the empire he boasts of building was given to him, and that it can be taken away in a moment by the King of heaven.",
      "The narrative is also a story of patience and mercy. God does not strike the proud king in an instant; he sends a warning dream, provides an interpreter in Daniel who pleads with him to repent, and grants a full twelve months before judgment falls. Even in the judgment, the tree is not uprooted but its stump is left in the ground, a sign of hope that restoration is intended from the beginning. The discipline is severe but redemptive, aimed not at destruction but at the king&rsquo;s conversion.",
      "The climax of the chapter is one of the most remarkable conversions recorded in the Old Testament. The man who once demanded that all peoples worship a golden image of himself ends by lifting his eyes to heaven, blessing the Most High, and declaring that &ldquo;those who walk in pride he is able to humble&rdquo; (4:37). A Gentile emperor becomes a witness to the sovereignty of Israel&rsquo;s God, and his testimony stands forever in Scripture as a warning and an invitation to every proud heart.",
    ],
  },
  {
    heading: "The Unique Form of the Proclamation",
    reference: "An Imperial Decree as Scripture",
    accent: TEAL,
    paragraphs: [
      "What makes Daniel 4 so striking among the narratives of the Bible is its literary form. It is cast as an official imperial decree, the kind of document a king would send throughout his realm, complete with the formal address to all peoples and the customary greeting of peace. Yet the content of this decree is not a tax, a law, or a military command, but a personal confession of how the king was brought low and then raised up by a God greater than himself.",
      "The first-person voice gives the chapter an immediacy found nowhere else. We hear the king himself describe his ease and prosperity, his terror at the dream, his refusal to repent, and finally the moment his reason returned. The shift between first person and third person in the middle of the chapter, where the narrative briefly describes the king&rsquo;s madness from the outside, only heightens the realism: a man cannot narrate his own madness from within, and so the voice changes while he is not himself, then returns when his reason is restored.",
      "By preserving the testimony in the form of a royal proclamation, the book of Daniel makes a bold theological claim. The most powerful man in the world is compelled to publish abroad, in his own name and under his own seal, the supremacy of the God of the exiles. The propaganda machine of Babylon, which existed to glorify the king, is turned to the glory of the Most High. The decree that should have exalted Nebuchadnezzar becomes instead an everlasting witness against human pride.",
      "For the exiles who first read this chapter, the form carried enormous comfort. They lived under the shadow of an empire that seemed invincible and a king who seemed beyond accountability. To hold in their hands a document in which that very king confessed himself humbled by their God was to be assured that no earthly power, however vast, lies beyond the reach of the King of heaven. The form of the chapter is itself part of its message.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "Divine Sovereignty Over Earthly Kings",
    reference: "The Most High Rules the Kingdom of Men",
    accent: GOLD,
    paragraphs: [
      "The governing theme of Daniel 4, and indeed of the entire book, is the absolute sovereignty of God over the kingdoms of the world. Three times the chapter declares that &ldquo;the Most High rules the kingdom of men and gives it to whom he will&rdquo; (4:17, 25, 32). The repetition is deliberate and emphatic. The lesson Nebuchadnezzar must learn, and the lesson the chapter teaches every reader, is that no human authority is ultimate; every throne is held on lease from the throne of heaven.",
      "This sovereignty is not abstract. It reaches into the affairs of the mightiest empire on earth and humbles its king in the dust. The God who rules the kingdom of men can raise up the lowliest of men to power, as the text says, and can reduce the highest to the level of the beasts of the field. The book of Daniel was written to a people in exile, tempted to believe that the gods of Babylon had triumphed over the God of Israel, and its great answer is that the Most High has never relinquished his throne.",
      "The title &ldquo;Most High&rdquo; itself is significant. It is a name for God that emphasizes his transcendence above all other claimed powers, gods, and rulers. In a chapter spoken by a pagan king to a pagan empire, the choice of this title proclaims that above Marduk and Bel and all the gods of Babylon, above Nebuchadnezzar and his glittering city, there is One who is higher than all, before whom the inhabitants of the earth are accounted as nothing.",
      "For the believer, this theme is the ground of confident hope in every age of political turmoil. Kings rise and fall, empires flourish and decay, but the sovereignty of God is never in question. The same truth that humbled Nebuchadnezzar assures the people of God that history is not adrift, that the One who gives the kingdom to whom he will is working all things according to the counsel of his own will, and that his everlasting kingdom will outlast every kingdom of men.",
    ],
  },
  {
    heading: "The Sin of Pride and Hubris",
    reference: "Is Not This Great Babylon Which I Have Built",
    accent: ROSE,
    paragraphs: [
      "If sovereignty is the chapter&rsquo;s great affirmation about God, pride is its great warning about man. Nebuchadnezzar&rsquo;s fall is precipitated by a single boast, spoken as he walks upon the roof of his palace: &ldquo;Is not this great Babylon, which I have built by my mighty power as a royal residence and for the glory of my majesty?&rdquo; (4:30). In that sentence the king claims for himself what belongs to God alone, the power, the building, the glory, and the majesty. It is hubris in its purest form.",
      "The chapter exposes pride as a kind of madness even before the literal madness falls. To imagine that one has built one&rsquo;s own greatness, that one&rsquo;s achievements are the product of one&rsquo;s own unaided power, is to live in a delusion about reality. The judgment that reduces the king to the condition of a beast is, in a sense, an outward picture of what pride does inwardly: it dehumanizes, it severs a person from the truth, it makes a man less than he was meant to be.",
      "There is profound irony in the timing of the boast. It comes a full twelve months after the warning dream, after Daniel had urged the king to break off his sins and practice righteousness. The reprieve was meant to lead to repentance, but instead the king grew comfortable and complacent, until in an unguarded moment of self-congratulation the long-delayed judgment fell. Pride is patient in its growth, and it often strikes most surely in the hour of greatest ease.",
      "The book of Proverbs declares that pride goes before destruction, and Daniel 4 is the narrative enactment of that proverb on the grandest possible stage. The chapter sets before every reader the universal danger of the proud heart, which takes credit for what it has been given and forgets the Giver. Whether in a king or a commoner, the same sin invites the same humbling, and the same remedy of repentance stands open to all.",
    ],
  },
  {
    heading: "God&rsquo;s Patience and Warning",
    reference: "A Year of Mercy Before Judgment",
    accent: GREEN,
    paragraphs: [
      "One of the most tender themes of the chapter is the patience of God toward a proud and undeserving king. God could have struck Nebuchadnezzar the moment the dream was given, but instead he wrapped the warning in a vision, provided an interpreter who loved the king enough to plead with him, and granted a full year for repentance. Every element of the story bears witness to a God who is slow to anger and rich in mercy, even toward the enemies of his people.",
      "Daniel&rsquo;s role is striking. Far from gloating over the coming downfall of the king who had destroyed his homeland, Daniel is dismayed and alarmed for a time, and then he counsels the king with genuine care: &ldquo;break off your sins by practicing righteousness, and your iniquities by showing mercy to the oppressed, that there may perhaps be a lengthening of your prosperity&rdquo; (4:27). The prophet desires the king&rsquo;s repentance, not his ruin, and offers a path of mercy that might yet avert the judgment.",
      "The twelve months that pass before the judgment falls are a window of grace held open. They reveal that the warning was no empty threat but a real summons to change. God does not delight in the humbling of the proud for its own sake; the discipline is aimed at restoration. The patience of God in this chapter is a sober reminder that the space between warning and judgment is precious, given for repentance, and not to be squandered in complacency.",
      "This theme resonates throughout Scripture, which everywhere declares that the kindness of God is meant to lead to repentance. The reprieve granted to Nebuchadnezzar is a pattern of how God deals with sinners still: the warning comes, the call to repent is sounded, and time is given. The tragedy of the chapter is that the king let the year of mercy pass without turning, and the wonder of it is that even then God did not abandon him to his ruin.",
    ],
  },
  {
    heading: "Boasting Versus Worship",
    reference: "From I Have Built to He Is Able to Humble",
    accent: PURPLE,
    paragraphs: [
      "The whole movement of Daniel 4 can be charted as a journey from boasting to worship. At the beginning of his fall the king stands on his rooftop and exalts himself: this great Babylon that I have built, by my power, for my glory. By the end he lifts his eyes to heaven and exalts God: the Most High lives forever, his dominion is everlasting, and those who walk in pride he is able to humble. The same mouth that boasted is taught to bless, and that transformation is the point of the chapter.",
      "Boasting and worship are revealed as the two fundamental postures of the human heart. The boaster gathers glory to himself, treats his gifts as achievements, and forgets the Giver. The worshiper directs glory back to its source, receives his gifts with gratitude, and remembers that all he has and is comes from above. Between these two postures the entire spiritual life is decided, and Nebuchadnezzar is made to travel the whole distance from one to the other.",
      "It is significant that the king&rsquo;s reason returns precisely when he lifts his eyes to heaven (4:34). True sanity, the chapter suggests, consists in seeing reality rightly, and reality is that God is God and we are not. The madness of pride is to live as though we were the center; the recovery of reason is to bow before the One who truly reigns. Worship is not a denial of reality but the embrace of it, and so it is in the act of blessing the Most High that the king is finally restored to himself.",
      "The chapter therefore presses upon every reader the question of which posture governs the heart. The achievements we are tempted to boast in, our work, our wealth, our influence, our very lives, are all gifts held in trust. To boast in them as our own is the path that ends in humbling; to render them back in worship is the path that ends in restoration. The closing words of the king, that God is able to humble those who walk in pride, are both a warning and an invitation to choose worship while there is time.",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "The King&rsquo;s Greeting to All Peoples",
    reference: "Daniel 4:1&ndash;3",
    accent: GOLD,
    paragraphs: [
      "The chapter begins with the formal opening of an imperial decree: &ldquo;King Nebuchadnezzar to all peoples, nations, and languages, that dwell in all the earth: Peace be multiplied to you!&rdquo; (4:1). The address is sweeping, claiming the attention of the entire known world, and the greeting of peace is the customary form of a royal letter. Yet the king has not gathered the nations to hear of a conquest or a building project; he has gathered them to bear witness to what God has done.",
      "&ldquo;It has seemed good to me to show the signs and wonders that the Most High God has done for me&rdquo; (4:2). The very king who once thought himself the source of all power now publishes the works of another. The language of signs and wonders, often used of God&rsquo;s mighty acts in the exodus, is here placed in the mouth of a pagan emperor confessing the deeds of Israel&rsquo;s God toward himself. The testimony is personal: these are wonders God has done for me.",
      "The opening doxology rises to a magnificent declaration: &ldquo;How great are his signs, how mighty his wonders! His kingdom is an everlasting kingdom, and his dominion endures from generation to generation&rdquo; (4:3). The contrast with the king&rsquo;s own kingdom is unmistakable. Babylon, for all its splendor, is passing; only the kingdom of the Most High endures forever. The proud king has been taught the difference between an everlasting dominion and his own fading glory.",
      "By placing this praise at the very front of the chapter, before the story that explains it, the narrative tips its hand. We know from the outset where the king will end: blessing God. The chapter is not in suspense about its conclusion but is constructed as a testimony, working backward from the praise to recount the discipline that produced it. The greeting to all peoples is therefore an invitation to the whole world to learn what the king has learned.",
    ],
  },
  {
    heading: "The Dream of the Great Tree",
    reference: "Daniel 4:4&ndash;12",
    accent: GREEN,
    paragraphs: [
      "The king tells how he was at ease in his house and prospering in his palace when a dream came that made him afraid (4:4&ndash;5). The setting is one of complete security and comfort, the height of his power, and it is precisely there that God breaks in. The very prosperity that fed his pride becomes the backdrop against which the warning is given. The wise men of Babylon are summoned but cannot interpret the dream, until at last Daniel, in whom is the spirit of the holy gods, is brought in.",
      "The dream itself is of a great tree in the midst of the earth, and its height was great (4:10). The tree grew strong, its top reached to heaven, and it was visible to the ends of the whole earth. Its leaves were beautiful, its fruit abundant, and in it was food for all. The beasts of the field found shade under it, the birds of the heavens lived in its branches, and all flesh was fed from it (4:11&ndash;12). The image is one of a great world tree, sheltering and sustaining all creatures.",
      "The cosmic tree was a familiar symbol in the ancient Near East for a mighty empire that dominates and provides for the nations under its sway. Reaching to heaven and seen to the ends of the earth, the tree represents a kingdom of universal reach. For Babylon, the greatest power of its age, the symbol was perfectly fitting; the king himself stood at the center of the earth as the source of provision and protection for countless peoples.",
      "Yet the very grandeur of the tree foreshadows the danger. A tree whose top reaches to heaven recalls the tower of Babel, the archetype of human pride reaching beyond its proper bounds. The same height that makes the tree magnificent makes it a target, for that which exalts itself to heaven invites the judgment of heaven. The dream of the towering tree is at once a portrait of Babylon&rsquo;s glory and a warning of its king&rsquo;s impending fall.",
    ],
  },
  {
    heading: "The Watcher and the Decree",
    reference: "Daniel 4:13&ndash;18",
    accent: PURPLE,
    paragraphs: [
      "As the king watched, &ldquo;a watcher, a holy one, came down from heaven&rdquo; (4:13). This figure, a heavenly being who descends with a decree, belongs to the world of apocalyptic imagery in which God&rsquo;s purposes are announced and carried out by angelic agents. The watcher is one who is awake and vigilant on behalf of the affairs of heaven, and his coming signals that what follows is no mere dream but a verdict issued from the court of the Most High.",
      "The watcher cries aloud the sentence: &ldquo;Chop down the tree and lop off its branches, strip off its leaves and scatter its fruit. Let the beasts flee from under it and the birds from its branches&rdquo; (4:14). The great tree that sheltered all is to be felled, and the creatures that depended on it scattered. Yet mercy is woven into the judgment: &ldquo;But leave the stump of its roots in the earth, bound with a band of iron and bronze&rdquo; (4:15). The stump preserved means the judgment is not final; restoration is intended.",
      "The decree then shifts from the tree to a man: &ldquo;Let him be wet with the dew of heaven. Let his portion be with the beasts in the grass of the earth. Let his mind be changed from a man&rsquo;s, and let a beast&rsquo;s mind be given to him, and let seven periods of time pass over him&rdquo; (4:15&ndash;16). The seven periods, often understood as seven years, signify a complete and divinely appointed span of discipline. Seven in Scripture is the number of fullness, marking the judgment as full and yet measured.",
      "The watcher declares the purpose of the whole decree: &ldquo;that the living may know that the Most High rules the kingdom of men and gives it to whom he will and sets over it the lowliest of men&rdquo; (4:17). Here the central theme is stated as the very reason for the judgment. The humbling of the proudest king is meant to be a lesson to all the living, a public demonstration that the kingdoms of men are held at the pleasure of the King of heaven.",
    ],
  },
  {
    heading: "Daniel&rsquo;s Distress and Interpretation",
    reference: "Daniel 4:19&ndash;27",
    accent: TEAL,
    paragraphs: [
      "When Daniel hears the dream, he is dismayed for a time, and his thoughts alarm him (4:19). The prophet does not rejoice at the downfall of the king who had conquered his people; he is grieved. The king, sensing his hesitation, urges him to speak, and Daniel responds with a remarkable wish of loyalty: &ldquo;My lord, may the dream be for those who hate you and its interpretation for your enemies.&rdquo; The interpreter is no enemy gloating over judgment but a servant who would spare the king if he could.",
      "Daniel then declares the meaning plainly: &ldquo;It is you, O king&rdquo; (4:22). The great tree is Nebuchadnezzar himself, grown strong, his greatness reaching to heaven and his dominion to the ends of the earth. The very interpretation honors the king&rsquo;s true greatness while making clear that it is greatness given, not earned. The man at the center of the world tree is about to be cut down to the level of the beasts.",
      "The sentence is spelled out: the king will be driven from among men, will dwell with the beasts of the field, will be made to eat grass like an ox, and will be wet with the dew of heaven, until seven periods of time pass and he knows &ldquo;that the Most High rules the kingdom of men and gives it to whom he will&rdquo; (4:25). The whole purpose of the discipline is summed up in that knowledge. The preserved stump means the kingdom shall be sure to the king after he comes to know that Heaven rules.",
      "Daniel does not leave the king without hope. &ldquo;Therefore, O king, let my counsel be acceptable to you: break off your sins by practicing righteousness, and your iniquities by showing mercy to the oppressed, that there may perhaps be a lengthening of your prosperity&rdquo; (4:27). The prophet holds out the possibility that repentance might yet avert or delay the judgment. The path of righteousness and mercy is offered as the alternative to the path that ends in the field among the beasts.",
    ],
  },
  {
    heading: "The Boast and the Fall",
    reference: "Daniel 4:28&ndash;33",
    accent: ROSE,
    paragraphs: [
      "All this came upon the king, but not at once. Twelve months passed (4:29), a full year of grace in which the warning could have been heeded. The very length of the reprieve is a testimony to the patience of God and a measure of the tragedy that the king let it slip away. The dream had been given, the interpretation declared, the counsel to repent offered, and still the king did not turn.",
      "At the end of the twelve months, walking on the roof of the royal palace of Babylon, the king said, &ldquo;Is not this great Babylon, which I have built by my mighty power as a royal residence and for the glory of my majesty?&rdquo; (4:30). In that single boast, spoken in an unguarded moment of self-satisfaction, the king gathered to himself the power, the achievement, and the glory that belonged to God. The warning of the dream is answered with the very pride it had condemned.",
      "&ldquo;While the words were still in the king&rsquo;s mouth, there fell a voice from heaven&rdquo; (4:31). The judgment is immediate, falling in the very moment of the boast. The voice announces that the kingdom has departed from him and pronounces the sentence of the dream: he shall be driven from among men, dwell with the beasts, eat grass like an ox, until he knows that the Most High rules. The reprieve is over; the long-delayed word is fulfilled at once.",
      "The fulfillment is described with stark realism: &ldquo;Immediately the word was fulfilled against Nebuchadnezzar. He was driven from among men and ate grass like an ox, and his body was wet with the dew of heaven till his hair grew as long as eagles&rsquo; feathers, and his nails were like birds&rsquo; claws&rdquo; (4:33). Historians have discussed this condition under names such as boanthropy and lycanthropy, rare disorders in which a person believes himself to be an animal. Whatever its medical description, the text presents it as a direct act of God humbling the proudest of men.",
    ],
  },
  {
    heading: "The Restoration and Praise",
    reference: "Daniel 4:34&ndash;37",
    accent: GOLD,
    paragraphs: [
      "The turning point comes with one of the most beautiful sentences in the book: &ldquo;At the end of the days I, Nebuchadnezzar, lifted my eyes to heaven, and my reason returned to me&rdquo; (4:34). The lifting of the eyes from the grass of the earth to the heavens is the outward sign of an inward repentance. The moment the king looks up from the level of the beasts to the throne of God, his sanity is restored. True reason returns when he acknowledges the One who is over all.",
      "His restored reason overflows immediately in worship: &ldquo;I blessed the Most High, and praised and honored him who lives forever, for his dominion is an everlasting dominion, and his kingdom endures from generation to generation&rdquo; (4:34). The king who once claimed everlasting glory for his own kingdom now confesses that only God&rsquo;s dominion is everlasting. He declares that all the inhabitants of the earth are accounted as nothing before God, who does according to his will among the host of heaven and the inhabitants of the earth (4:35).",
      "With his reason and his majesty restored, the king finds that his kingdom is given back to him, and still more greatness is added (4:36). The preserved stump bears fruit; the humbling was not the end but the doorway to a deeper and truer reign. The man who learned that Heaven rules is now a wiser and safer king than the proud builder of Babylon ever was, for he governs as one who knows that his throne is held in trust.",
      "The chapter closes with the king&rsquo;s own confession, the verdict of his whole experience: &ldquo;Now I, Nebuchadnezzar, praise and extol and honor the King of heaven, for all his works are right and his ways are just; and those who walk in pride he is able to humble&rdquo; (4:37). The final phrase is the lesson of the chapter distilled into a single line. The greatest of kings, brought low and raised up, bears witness for all generations that the God of heaven is able to humble the proud and exalt the lowly.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "Living Daniel 4 Today",
    reference: "Personal and Community Application",
    accent: GOLD,
    paragraphs: [
      "Daniel 4 speaks directly to the proud heart that lives in every one of us. The temptation of Nebuchadnezzar, to stand upon the roof of our achievements and say &ldquo;this I have built by my own power, for my own glory,&rdquo; is not the failing of ancient kings alone. Whenever we take credit for what we have been given, whenever we forget that our work, our health, our influence, and our very breath are gifts held in trust, we walk the same road that led the king into the field among the beasts.",
      "The chapter also assures us of the sovereignty of God over every earthly power, a truth of immense comfort in anxious and unstable times. Governments and leaders may seem invincible or terrifying, but the same God who humbled the greatest emperor of the ancient world still rules the kingdom of men and gives it to whom he will. The believer need not fear the powers of this age, for they too are held on lease from the throne of heaven and will give account to the King who reigns forever.",
      "There is profound encouragement here in the patience of God. He did not strike the king in an instant but gave a warning, an interpreter, and a full year for repentance, and even in judgment he preserved the stump for restoration. The God who deals so patiently with a pagan king deals patiently with us, sending warnings through conscience, through Scripture, and through the counsel of those who love us. The space between warning and consequence is a gift of mercy, given for repentance, and not to be wasted in complacency.",
      "Finally, the chapter charts the path from boasting to worship that every soul must travel. The king&rsquo;s reason returned when he lifted his eyes to heaven, for sanity is to see reality rightly, and reality is that God is God and we are not. The humbled and restored Nebuchadnezzar stands as both a warning and an invitation: a warning that those who walk in pride God is able to humble, and an invitation to lift our eyes now, in willing worship, before we are humbled against our will.",
    ],
  },
];

const questions: Question[] = [
  { q: "Where in your life are you tempted to say, like the king, &ldquo;this I have built by my own power, for my own glory&rdquo; rather than receiving it as a gift held in trust?" },
  { q: "Nebuchadnezzar was given a full year to repent and let it slip away in comfort. What warning has God recently given you, and how are you responding to the space of mercy he has opened?" },
  { q: "The king&rsquo;s reason returned when he lifted his eyes to heaven. What would it look like, practically, for you to lift your eyes from your achievements to the One who rules over all?" },
  { q: "How does the truth that &ldquo;the Most High rules the kingdom of men&rdquo; reshape the way you view political powers and leaders that seem invincible or frightening?" },
  { q: "Daniel grieved over the coming judgment of his enemy and counseled him toward repentance. Is there someone you are tempted to resent whom God may be calling you to pray for and warn in love?" },
  { q: "The chapter ends with the king&rsquo;s testimony that &ldquo;those who walk in pride he is able to humble.&rdquo; What concrete step of humility and worship can you take today, before pride must be humbled against your will?" },
];

const videoItems = [
  { videoId: "1wjvBQUKHqE", title: "BibleProject - Overview: Daniel" },
  { videoId: "Lm0pQ3R7sWh", title: "Daniel 4 - The Humbling of Nebuchadnezzar - Verse by Verse" },
  { videoId: "dQw4w9WgXcW", title: "The Great Tree and the Watcher - Daniel 4 Explained" },
  { videoId: "aB3dE5fG7hJ", title: "Those Who Walk in Pride He Is Able to Humble - Daniel 4" },
];

const tabContent: Record<Tab, Block[]> = {
  "Overview": overviewBlocks,
  "Key Themes": themeBlocks,
  "Verse by Verse": verseBlocks,
  "Application": applicationBlocks,
};

export default function Daniel4GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const blocks = tabContent[activeTab];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }} dangerouslySetInnerHTML={{ __html: "Daniel 4 &mdash; The Humbling of Nebuchadnezzar" }} />
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Those who walk in pride he is able to humble.&rdquo; &mdash; Daniel 4:37. A pagan king&rsquo;s own testimony of how the Most High felled the great tree of his pride and raised him again to bless the King of heaven who rules the kingdom of men." }} />
        </header>

        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem", paddingTop: "0.75rem", background: BG }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#ffffff" : MUTED,
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

        <section>
          {blocks.map((block, bi) => (
            <div key={bi} style={{ marginBottom: bi === blocks.length - 1 ? 0 : "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ width: 6, height: 28, borderRadius: 3, background: block.accent, display: "inline-block", flexShrink: 0 }} />
                <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: block.heading }} />
              </div>
              <div style={{ color: block.accent, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.5rem", marginLeft: 18 }} dangerouslySetInnerHTML={{ __html: block.reference }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {block.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>

        {activeTab === "Application" && (
          <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
            <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1.25rem", fontSize: "1.3rem" }}>Reflection Questions</h3>
            <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {questions.map((item, i) => (
                <li key={i} style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: item.q }} />
              ))}
            </ol>
          </div>
        )}

        <section style={{ marginTop: "3.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Daniel 4 through these video teachings on the dream of the great tree, the sovereignty of the Most High over the kingdoms of men, and the humbling and restoration of the proudest king of the ancient world." }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: v.title }} />
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Heaven Rules</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Daniel 4 is the testimony of a proud king brought low and raised up, written to teach every generation that the Most High rules the kingdom of men and gives it to whom he will. The great tree was felled but its stump preserved; the king ate grass like an ox until he lifted his eyes to heaven and his reason returned. His final word stands as a warning and an invitation to us all: those who walk in pride he is able to humble." }} />
        </div>
      </main>
    </div>
  );
}
