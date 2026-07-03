"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "Hezekiah Seeks Isaiah",
  "Hezekiah's Prayer",
  "The Lord's Answer",
  "Videos",
]

const sections = [
  {
    id: "Overview",
    heading: "When the Mocked God Answers",
    reference: "2 Kings 19",
    paragraphs: [
      "2 Kings 19 is the answer to the crisis raised in the previous chapter. The Rabshakeh&rsquo;s blasphemy still hangs in the air over Jerusalem, and the question pressing on every reader is whether the God whom Hezekiah trusts will actually deliver his people from the most powerful empire on earth. The chapter does not merely promise deliverance &mdash; it stages a confrontation between the pride of Assyria and the living God, and it shows what faith does when threatened beyond its strength: it turns to the Lord.",
      "When Hezekiah hears the report of the Rabshakeh&rsquo;s words, he tears his clothes, covers himself with sackcloth, and goes into the house of the Lord (v.1). He sends his officials, themselves clothed in sackcloth, to the prophet Isaiah, confessing that &ldquo;this day is a day of distress, of rebuke, and of disgrace&rdquo; (v.3). Isaiah answers with a word of reassurance: do not be afraid, for the Lord will put a spirit in Sennacherib so that he hears a rumor and returns to his own land, where he will fall by the sword (vv.1&ndash;7).",
      "The threat is renewed in writing. Sennacherib sends a letter to Hezekiah, mocking the gods of the nations Assyria has already destroyed and warning Judah not to be deceived by trust in the Lord (vv.8&ndash;13). Hezekiah takes the letter, goes up to the house of the Lord, and spreads it out before the Lord. There he prays one of the great prayers of Scripture, asking God to save his people &ldquo;that all the kingdoms of the earth may know that you, O Lord, are God alone&rdquo; (vv.14&ndash;19).",
      "The Lord answers through Isaiah with a sweeping oracle of judgment against Assyria&rsquo;s arrogance (vv.20&ndash;34). God taunts Sennacherib for daring to mock the Holy One of Israel, declares that he himself ordained Assyria&rsquo;s conquests long ago, and promises to put a hook in the king&rsquo;s nose and turn him back the way he came. A sign is given to Hezekiah, and the Lord vows that a remnant will take root and bear fruit, and that the king of Assyria &ldquo;shall not come into this city&rdquo; (v.32).",
      "The deliverance is sudden and total. That very night the angel of the Lord goes out and strikes down 185,000 in the camp of the Assyrians; in the morning they are all dead bodies (v.35). Sennacherib breaks camp, returns to Nineveh, and while worshiping in the temple of his god Nisroch is struck down by his own sons (vv.36&ndash;37). The empire that boasted no god could deliver from its hand is shattered, and the God who was mocked stands vindicated as God alone.",
      "2 Kings 19 thus delivers its central message with unforgettable force: the Lord is not one god among many, to be lined up beside the idols Assyria has already conquered. He is the maker of heaven and earth, the sovereign who ordained history and bends empires to his purpose. The chapter teaches God&rsquo;s people what to do with the letters of fear that arrive in their darkest hours &mdash; to spread them before the Lord, to pray for his name&rsquo;s sake, and to wait for the One who answers prayer.",
    ],
  },
  {
    id: "Hezekiah Seeks Isaiah",
    heading: "Hezekiah Seeks the Prophet Isaiah",
    reference: "2 Kings 19:1&ndash;7",
    paragraphs: [
      "The chapter opens with the king&rsquo;s response to the Rabshakeh&rsquo;s taunt. &ldquo;As soon as King Hezekiah heard it, he tore his clothes and covered himself with sackcloth and went into the house of the Lord&rdquo; (v.1). The torn garments and sackcloth are the dress of mourning and repentance, but the decisive movement is the last one: Hezekiah goes into the temple. The king who in the previous chapter had stripped the gold from the temple doors to pay Assyria now enters that same house to seek the God who dwells there.",
      "Hezekiah does not face the crisis alone or in mere private grief. He sends Eliakim, who was over the household, Shebna the secretary, and the senior priests, all covered with sackcloth, to the prophet Isaiah the son of Amoz (v.2). The king reaches for the word of the Lord through the prophet. In the day of distress he does not consult only generals and diplomats; he sends to the man who speaks for God.",
      "The message to Isaiah is one of honest desperation: &ldquo;This day is a day of distress, of rebuke, and of disgrace; children have come to the point of birth, and there is no strength to bring them forth&rdquo; (v.3). The image is vivid and helpless &mdash; a labor that has reached its agonizing crisis with no power to complete it. Judah has come to the very edge of catastrophe and finds itself without strength of its own. It is exactly here, at the end of human resource, that faith looks upward.",
      "Hezekiah&rsquo;s plea fastens on the heart of the offense. &ldquo;It may be that the Lord your God heard all the words of the Rabshakeh, whom his master the king of Assyria has sent to mock the living God, and will rebuke the words that the Lord your God has heard&rdquo; (v.4). The king grasps what is really at stake: the Rabshakeh has insulted not merely Judah but the living God himself. Hezekiah appeals to God&rsquo;s own honor, asking him to answer the blasphemy spoken against his name, and pleads that Isaiah &ldquo;lift up your prayer for the remnant that is left.&rdquo;",
      "Isaiah&rsquo;s reply is swift and steadying: &ldquo;Thus says the Lord, Do not be afraid because of the words that you have heard, with which the servants of the king of Assyria have reviled me&rdquo; (v.6). The prophet identifies the blasphemy as an offense against God himself &mdash; they have reviled me &mdash; and on that ground commands Hezekiah not to fear. The word that the king most needed was not a strategy for the wall but a removal of fear grounded in the Lord&rsquo;s own concern for his honor.",
      "The promise is specific and certain: &ldquo;Behold, I will put a spirit in him, so that he shall hear a rumor and return to his own land, and I will make him fall by the sword in his own land&rdquo; (v.7). God announces in advance exactly how he will deal with Sennacherib &mdash; a rumor that turns him home, and a sword that ends him there. The whole episode models the believer&rsquo;s response in the day of trouble: tear the garments if you must, but go into the house of the Lord, send for the word of God, name the real offense, and receive the command not to fear.",
    ],
  },
  {
    id: "Hezekiah's Prayer",
    heading: "Hezekiah Spreads the Letter Before the Lord",
    reference: "2 Kings 19:8&ndash;19",
    paragraphs: [
      "The Rabshakeh returns and finds the king of Assyria fighting against Libnah, having heard that Sennacherib had left Lachish (v.8). Then, hearing a report that Tirhakah king of Cush is marching out to fight him, Sennacherib renews his pressure on Hezekiah, this time by letter (v.9). The siege of words is not over; the enemy presses again, putting his threats in writing so that they cannot be ignored or forgotten.",
      "The letter is pure intimidation. Sennacherib warns Hezekiah, &ldquo;Do not let your God in whom you trust deceive you by promising that Jerusalem will not be given into the hand of the king of Assyria&rdquo; (v.10). He recites the long list of nations and cities his fathers destroyed &mdash; Gozan, Haran, Rezeph, and the people of Eden, the kings of Hamath, Arpad, and Sepharvaim &mdash; and asks whether the gods of those nations delivered them (vv.11&ndash;13). The whole argument rests on a single assumption: the Lord is no different from the conquered gods of the nations.",
      "Hezekiah&rsquo;s response is the spiritual center of the chapter. &ldquo;Hezekiah received the letter from the hand of the messengers and read it; and Hezekiah went up to the house of the Lord and spread it before the Lord&rdquo; (v.14). He does not answer Sennacherib&rsquo;s letter with a letter of his own, nor hide it away in fear. He carries the very document of his terror into the presence of God and lays it open before him, as if to say, Lord, read what your enemy has written against you.",
      "His prayer begins by fixing his eyes on who God is. &ldquo;O Lord, the God of Israel, enthroned above the cherubim, you are the God, you alone, of all the kingdoms of the earth; you have made heaven and earth&rdquo; (v.15). Before he asks for anything, Hezekiah confesses the Lord&rsquo;s unique sovereignty over every kingdom and his power as the maker of heaven and earth. This is the direct answer to Sennacherib&rsquo;s lie: the Lord is not a local god but the God alone of all the earth.",
      "Only then does he bring the petition. &ldquo;Incline your ear, O Lord, and hear; open your eyes, O Lord, and see; and hear the words of Sennacherib, which he has sent to mock the living God&rdquo; (v.16). Hezekiah honestly grants the truth in the enemy&rsquo;s boast: &ldquo;Truly, O Lord, the kings of Assyria have laid waste the nations and their lands and have cast their gods into the fire, for they were not gods, but the work of men&rsquo;s hands, wood and stone&rdquo; (vv.17&ndash;18). The other gods fell because they were not gods at all.",
      "The prayer reaches its great climax in a request shaped entirely by the glory of God. &ldquo;So now, O Lord our God, save us, please, from his hand, that all the kingdoms of the earth may know that you, O Lord, are God alone&rdquo; (v.19). Hezekiah asks for deliverance not chiefly for Judah&rsquo;s comfort but for the Lord&rsquo;s renown &mdash; that the watching nations would learn there is no God but him. It is a masterclass in God-centered prayer: it begins with God&rsquo;s character, acknowledges reality honestly, and asks for what it asks so that God alone may be known and glorified.",
    ],
  },
  {
    id: "The Lord's Answer",
    heading: "The Lord's Answer and Assyria's Fall",
    reference: "2 Kings 19:20&ndash;37",
    paragraphs: [
      "God answers prayer. Isaiah sends word to Hezekiah: &ldquo;Thus says the Lord, the God of Israel: Your prayer to me about Sennacherib king of Assyria I have heard&rdquo; (v.20). The deliverance that follows is not random fortune but the direct response of God to the king who spread the letter before him. Heaven has heard the words laid open in the temple, and now heaven replies.",
      "The Lord answers Assyria&rsquo;s pride with stinging mockery of his own. &ldquo;She despises you, she scorns you &mdash; the virgin daughter of Zion&rdquo; (v.21). Then comes the searching question that turns the whole confrontation: &ldquo;Whom have you mocked and reviled? Against whom have you raised your voice and lifted your eyes to the heights? Against the Holy One of Israel!&rdquo; (v.22). Sennacherib thought he was taunting a defenseless city; in truth he had set himself against the Holy One of Israel, and that is a fatal miscalculation.",
      "God exposes the emptiness of Assyria&rsquo;s boasting. The king had bragged of climbing the heights of the mountains with his chariots and drying up the streams of Egypt with the soles of his feet (vv.23&ndash;24). But the Lord declares the decisive truth: &ldquo;Have you not heard that I determined it long ago? I planned from days of old what now I bring to pass&rdquo; (v.25). Assyria&rsquo;s conquests were not the proof of its own greatness but the working out of God&rsquo;s ancient purpose; the empire was merely an axe in the hand of the One who ordained it.",
      "Because Sennacherib has raged against him, the Lord pronounces sentence in the imagery of a beast led captive: &ldquo;Because you have raged against me and your complacency has come into my ears, I will put my hook in your nose and my bit in your mouth, and I will turn you back on the way by which you came&rdquo; (v.28). The proud emperor who treated the nations as cattle will himself be hooked and led home like a tamed animal, turned back on the very road he marched in on.",
      "To Hezekiah the Lord gives a sign of restoration. For two years the people will eat what grows of itself, but in the third year they will sow and reap, plant vineyards and eat their fruit (v.29). &ldquo;And the surviving remnant of the house of Judah shall again take root downward and bear fruit upward&rdquo; (v.30). Life will return to the land. Concerning the city itself the promise is unmistakable: &ldquo;He shall not come into this city or shoot an arrow there&rdquo; (v.32), &ldquo;For I will defend this city to save it, for my own sake and for the sake of my servant David&rdquo; (v.34).",
      "Then the word becomes deed in a single night. &ldquo;And that night the angel of the Lord went out and struck down 185,000 in the camp of the Assyrians. And when people arose early in the morning, behold, these were all dead bodies&rdquo; (v.35). The vast army is undone without a battle. Sennacherib departs, returns home, and lives in Nineveh, until &ldquo;as he was worshiping in the house of Nisroch his god, Adrammelech and Sharezer, his sons, struck him down with the sword&rdquo; (v.37). The king who mocked the living God falls before his lifeless idol, slain by his own sons &mdash; the dramatic deliverance of Jerusalem and the vindication of the God who is God alone.",
    ],
  },
];

const videoItems = [
  { videoId: "Iz9kT4nR2Lq", title: "2 Kings 19 - The Mocked God Who Answers Prayer" },
  { videoId: "Nb6xV8Wt3Hq", title: "Hezekiah Seeks Isaiah - Faith in the Day of Distress" },
  { videoId: "Sc4kP2Mx7Jr", title: "Spread It Before the Lord - Hezekiah's Great Prayer" },
  { videoId: "Rd7wK5Bq1Hy", title: "185,000 in a Night - The Fall of Sennacherib" },
];

const data: SectionGuideData = {
  accent: "#3a7d56",
  badge: `Kings Study`,
  title: `2 Kings 19`,
  intro: `Hezekiah seeks Isaiah and is told not to fear, spreads Sennacherib&rsquo;s threatening letter before the Lord and prays that the kingdoms of the earth may know God alone, and sees the angel of the Lord strike 185,000 in the Assyrian camp as Jerusalem is delivered.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of 2 Kings 19 through visual teaching on Hezekiah&rsquo;s turning to the prophet Isaiah, his model prayer spreading the letter before the Lord, the Lord&rsquo;s answer against Assyria&rsquo;s pride, and the dramatic overnight deliverance of Jerusalem.`,
  calloutTitle: `God Alone`,
  calloutBody: `2 Kings 19 shows the believer what to do with the letters of fear that arrive in the darkest hour: carry them into the presence of God and spread them open before him. Hezekiah prayed not first for his own safety but that &ldquo;all the kingdoms of the earth may know that you, O Lord, are God alone&rdquo; &mdash; and the God who was mocked answered in a single night, vindicated as the maker of heaven and earth.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
