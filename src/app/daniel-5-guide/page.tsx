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
  reference: string;
  accent: string;
  paragraphs: string[];
}

const overviewBlocks: Block[] = [
  {
    heading: "The Night Babylon Fell",
    reference: "Daniel 5:1&ndash;31",
    accent: GOLD,
    paragraphs: [
      "Daniel chapter five is one of the most dramatic single nights recorded in all of Scripture. It tells the story of a royal banquet that turns to terror, of a mysterious hand that writes four words on the palace wall, and of an aged prophet summoned from obscurity to read a sentence of doom upon an empire. By the end of the chapter the king is dead and the kingdom has passed into other hands, all within the span of a single evening. The phrase that has entered the languages of the world, &ldquo;the writing on the wall,&rdquo; comes from this chapter.",
      "The setting is Babylon, the golden city that had conquered Jerusalem, burned the temple, and carried the people of God into exile. Decades have passed since the events of the earlier chapters. The great Nebuchadnezzar is gone, and his place is held by Belshazzar, who hosts a lavish feast for a thousand of his lords. In an act of brazen sacrilege he calls for the sacred vessels plundered from the Jerusalem temple and uses them to toast the gods of gold and silver. That defiance against the Lord of heaven is the spark that brings the writing on the wall.",
      "The chapter is built on a deliberate contrast with chapter four, the story of Nebuchadnezzar&rsquo;s humbling. Nebuchadnezzar was proud, was warned, was broken, and was finally restored when he lifted his eyes to heaven and acknowledged that the Most High rules the kingdom of men. Belshazzar had every reason to know that story, and Daniel charges him with knowing it. Yet he has not humbled his heart. Where Nebuchadnezzar was eventually brought to repentance, Belshazzar is brought only to judgment, and the difference between the two kings is the difference between a heart that humbles itself and a heart that hardens.",
      "Daniel five is therefore a study in the sovereignty of God over the proudest of human empires. Babylon seemed invincible behind its massive walls, yet on the very night of its arrogant feast it fell to the armies of the Medes and Persians. The God of the exiles, whose holy vessels had been profaned, wrote the verdict on the plaster with his own fingers, and the verdict came to pass before the dawn. The chapter assures every generation that no power, however great, stands beyond the reach of the One who numbers, weighs, and divides the kingdoms of the earth.",
    ],
  },
  {
    heading: "Belshazzar's Feast and the Sacred Vessels",
    reference: "Daniel 5:1&ndash;4",
    accent: ROSE,
    paragraphs: [
      "The chapter opens with King Belshazzar making a great feast for a thousand of his lords and drinking wine in front of the thousand (5:1). The scale of the banquet is a display of royal extravagance and confidence, even though, as history records, the armies of Cyrus the Persian were already at the gates. Belshazzar feasts as though Babylon were secure, his revelry a portrait of a man who refuses to read the signs of his own peril.",
      "Then comes the act that defines his guilt. While he tasted the wine, Belshazzar commanded that the vessels of gold and silver that Nebuchadnezzar his father had taken out of the temple in Jerusalem be brought, that the king and his lords, his wives, and his concubines might drink from them (5:2). These were the holy vessels, set apart for the worship of the living God, carried off when Jerusalem was sacked. To turn them into goblets for a drunken party was a calculated insult to the God of Israel, a way of declaring that Babylon&rsquo;s gods had triumphed over the Lord whose temple they had looted.",
      "The text underscores the idolatry that accompanies the sacrilege: they drank wine and praised the gods of gold and silver, bronze, iron, wood, and stone (5:4). The list moves down a scale of value, from precious metals to common materials, mocking the very idols it names, for these are gods that can neither see nor hear nor know. Belshazzar lifts a sacred cup dedicated to the true God and uses it to honor lifeless images. The combination of profaning what is holy and praising what is worthless is the height of his offense.",
      "This opening scene sets the moral and spiritual stage for everything that follows. The hand will not write until the cup is raised. The judgment is not arbitrary; it answers a specific act of defiance against the Lord of heaven. Belshazzar has reached out and taken the things devoted to God and treated them as common, and in that moment of arrogant blasphemy the chapter turns from banquet to terror, and the fingers of a human hand appear against the wall.",
    ],
  },
  {
    heading: "The Hand, the Queen, and Daniel",
    reference: "Daniel 5:5&ndash;23",
    accent: PURPLE,
    paragraphs: [
      "Immediately the fingers of a human hand appear and write on the plaster of the wall of the king&rsquo;s palace, opposite the lampstand, and the king sees the hand as it writes (5:5). The detail that the writing appears opposite the lampstand means it is fully illuminated, impossible to ignore, lit up for all the hall to see. The effect on Belshazzar is immediate and physical: his color changes, his thoughts alarm him, the joints of his limbs give way, and his knees knock together (5:6). The proud reveler is reduced to a trembling shell.",
      "The king calls in vain for his enchanters, Chaldeans, and astrologers, promising purple robes, a gold chain, and the third place in the kingdom to whoever can read the writing and tell its interpretation. But none of his wise men can read the writing or make known its interpretation, and the king grows still more terrified (5:7&ndash;9). The same impotence of pagan wisdom that ran through the earlier chapters of Daniel appears again: the resources of Babylon&rsquo;s religion are useless before the word of the living God.",
      "It is the queen, almost certainly the queen mother, who remembers Daniel. She enters the banqueting hall and reminds the king that there is a man in his kingdom in whom is the spirit of the holy gods, who in the days of Nebuchadnezzar was found to have light and understanding and wisdom like the wisdom of the gods, whom the king&rsquo;s father made chief of the magicians (5:10&ndash;12). Daniel, now an old man, has been forgotten by the new generation, but the queen mother&rsquo;s memory brings him back to the center of the story.",
      "Daniel is brought in, and the king repeats his offer of rewards. Daniel&rsquo;s response is bold and uncompromising. He tells the king to keep his gifts and give his rewards to another, yet he will read the writing and make known the interpretation (5:17). Before he reads the words, Daniel delivers a stern sermon. He recounts how the Most High God gave Nebuchadnezzar greatness, and how when his heart was lifted up in pride he was brought low, driven from among men, until he knew that the Most High rules the kingdom of mankind and sets over it whom he will (5:18&ndash;21).",
      "Then Daniel turns the lesson directly upon Belshazzar: &ldquo;And you his son, Belshazzar, have not humbled your heart, though you knew all this, but you have lifted up yourself against the Lord of heaven&rdquo; (5:22&ndash;23). The indictment is precise. Belshazzar&rsquo;s guilt is not ignorance but willful pride; he knew the story of Nebuchadnezzar and learned nothing from it. He praised gods of silver and gold that do not see, while the God in whose hand his breath is, and whose are all his ways, he has not honored. Only now, with the verdict named, does Daniel turn to read the words on the wall.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "Sacrilege and Pride",
    reference: "The cup raised against heaven",
    accent: ROSE,
    paragraphs: [
      "At the heart of Daniel five is the sin of pride that expresses itself in sacrilege. Belshazzar does not merely indulge in luxury; he reaches deliberately for the vessels consecrated to the God of Israel and turns them into instruments of a blasphemous party. The act is a public declaration that nothing is sacred, that the king may treat even the holiest things as toys for his amusement. Pride always tends toward this kind of contempt for what belongs to God, because the proud heart recognizes no authority above its own desire.",
      "Daniel names the precise nature of the offense when he tells the king that he has lifted himself up against the Lord of heaven. This is the essence of the pride that runs through the whole book of Daniel and through the whole biblical story of human rebellion. The creature exalts himself against the Creator, the one whose very breath is a gift from God turns that breath into blasphemy. Belshazzar holds his life in borrowed hands and uses the time he has been given to insult the One who gives it.",
      "The chapter shows that such pride is never merely a private attitude but breaks out into concrete acts of defiance. Belshazzar&rsquo;s arrogance produces the desecration of the temple vessels and the praise of dead idols. The inner posture of a heart lifted up against God becomes the outer reality of sacrilege and false worship. Scripture consistently traces the worst human evils back to this root, the refusal to honor God as God and to give him thanks.",
      "For all its ancient setting, this theme reaches into every age. The temptation to treat sacred things lightly, to use what belongs to God for our own glory, to live as though we owe him no honor, is perennial. Daniel five stands as a warning that the cup raised in arrogance against heaven does not go unanswered, and that the God whose holy things are profaned is fully able to write his verdict where no one can fail to read it.",
    ],
  },
  {
    heading: "The Contrast with Nebuchadnezzar",
    reference: "Daniel 4 and Daniel 5 side by side",
    accent: TEAL,
    paragraphs: [
      "Daniel five cannot be understood apart from Daniel four. The previous chapter told the story of Nebuchadnezzar, the greatest of Babylon&rsquo;s kings, whose pride led to a season of madness in which he was driven out to live like a beast until he learned that heaven rules. That story ends in restoration, with Nebuchadnezzar lifting his eyes to heaven and blessing the Most High, whose dominion is everlasting. The great king was humbled, and through humbling he was brought to acknowledge the true God.",
      "Belshazzar stands as the deliberate foil to his predecessor. Daniel insists that Belshazzar knew all of this, the whole account of Nebuchadnezzar&rsquo;s fall and recovery, and yet did not humble his heart. The contrast is sharpened by the relationship the text draws between them; whether father in the sense of predecessor or ancestor, Nebuchadnezzar&rsquo;s example was Belshazzar&rsquo;s inheritance. Belshazzar had a lesson written in living memory and chose to ignore it.",
      "The two chapters together teach that knowledge without humility leads to deeper guilt. Nebuchadnezzar sinned in ignorance and was given time to repent; Belshazzar sinned against light and was given only judgment. The one who has seen another humbled before God and learns nothing from it is more culpable than the one who has never seen at all. Privilege and exposure to truth carry responsibility, and the responsibility unheeded becomes condemnation.",
      "This contrast also reveals the patience and the justice of God together. God patiently disciplined Nebuchadnezzar until he repented, showing that even the proudest pagan king is not beyond mercy. But God&rsquo;s patience is not infinite indulgence; when Belshazzar despised the lesson of his forefather and lifted himself against heaven, the verdict came swiftly. The same God who restores the humble brings down the proud who will not learn.",
    ],
  },
  {
    heading: "Weighed and Found Wanting",
    reference: "The meaning of the writing",
    accent: GOLD,
    paragraphs: [
      "The four words on the wall, MENE, MENE, TEKEL, and PARSIN, have become proverbial, and their interpretation is the climax of the chapter. The words are based on Aramaic terms for weights and coins: the mina, the shekel, and the half. Without their interpretation they read like a strange inventory of currency, which is part of why Babylon&rsquo;s wise men, even if they could pronounce them, could make no sense of them. Their true meaning had to be revealed by the God who wrote them.",
      "Daniel unfolds each word as a verb of judgment. MENE, repeated for emphasis, means &ldquo;numbered&rdquo;: God has numbered the days of the kingdom and brought it to an end. The time allotted to Babylon has run out, counted down to its final hour. There is a terrible finality in the idea that the reign has been measured and the measure is now complete; the sand has run through the glass, and no more remains.",
      "TEKEL means &ldquo;weighed&rdquo;: the king has been weighed in the balances and found wanting. The image is of a scale in which Belshazzar&rsquo;s life is placed and discovered to be too light, lacking the weight of righteousness, honor toward God, and humility. It is one of the most haunting phrases in all of Scripture, for it pictures a moment of reckoning in which the true value of a life is exposed, and Belshazzar&rsquo;s is found deficient.",
      "PARSIN, related to the word for Persia, means &ldquo;divided&rdquo;: the kingdom is divided and given to the Medes and the Persians. The pun is deliberate and devastating; the very name of the conquering people is hidden in the word of judgment. The empire that seemed eternal is to be torn apart and handed to its enemies. Numbered, weighed, divided: three verdicts that together announce the end of Babylon, written by the finger of God and read aloud by his prophet.",
    ],
  },
  {
    heading: "The Sovereignty of God over Nations",
    reference: "The Most High rules the kingdom of men",
    accent: PURPLE,
    paragraphs: [
      "The deepest theme of Daniel five, and indeed of the whole book, is the absolute sovereignty of God over the rise and fall of empires. Babylon was the superpower of its age, its walls famous throughout the ancient world, its wealth and splendor unmatched. Yet on a single night, at the word of the God of the exiles, it was numbered, weighed, divided, and overthrown. No human kingdom is as permanent as it imagines itself to be, and none lies beyond the verdict of the Most High.",
      "Daniel had already declared in his sermon that the Most High God rules the kingdom of mankind and sets over it whom he will. This conviction frames the entire chapter. The transfer of the kingdom to the Medes and Persians is not merely the outcome of military strategy or political accident; it is the act of God, who gives the kingdom to whom he chooses and removes it from whom he chooses. History is not a chaos of competing powers but a realm governed by the sovereign purposes of God.",
      "This theme would have been a profound comfort to the exiles for whom Daniel was written. The people of God had watched their city burned and their temple looted, and they might have concluded that the gods of Babylon had defeated the Lord. Daniel five answers that despair. The very vessels Babylon stole became the occasion of Babylon&rsquo;s downfall, and the God who seemed defeated proved to be the one who held the empire&rsquo;s breath and its days in his hand all along.",
      "The sovereignty proclaimed here is not abstract; it is moral and personal. God does not topple Babylon at random but in response to specific arrogance and blasphemy, and he does so to vindicate his own honor and his oppressed people. The Lord of heaven who numbers and weighs the nations is the same God who remembers the exile, defends his holy things, and rules every throne on earth from his throne above the heavens.",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "The Profaning of the Vessels",
    reference: "Daniel 5:1&ndash;4",
    accent: ROSE,
    paragraphs: [
      "Belshazzar makes a great feast for a thousand of his lords and drinks wine before them all. The grandeur is meant to impress, a public theatre of royal power and security. But the reader who knows that the Persian armies are closing in sees the feast for what it is, the willful blindness of a doomed man who would rather drink than face the danger at his gates. The banquet is an act of denial dressed as celebration.",
      "Under the influence of the wine he commands that the gold and silver vessels taken from the temple in Jerusalem be brought so that he and his court may drink from them (5:2&ndash;3). This is the pivot of the chapter. The vessels are not ordinary plunder; they are holy, consecrated to the worship of the living God. To drink from them at a drunken feast is to declare that nothing the God of Israel holds sacred is safe from Belshazzar&rsquo;s contempt.",
      "As they drink, they praise the gods of gold and silver, bronze, iron, wood, and stone (5:4). The act fuses two great sins, the desecration of what belongs to God and the worship of what is worthless. With one hand Belshazzar profanes the holy, and with the other he honors the idols that cannot save. It is the moment of maximum defiance, and it is exactly the moment the hand appears.",
    ],
  },
  {
    heading: "The Hand Writes on the Wall",
    reference: "Daniel 5:5&ndash;9",
    accent: PURPLE,
    paragraphs: [
      "In that very hour the fingers of a human hand appear and write on the plaster of the wall, opposite the lampstand, where the king can see the hand as it writes (5:5). There is something uniquely terrifying about a disembodied hand, a fragment of a presence whose full form is hidden. The writing is fully lit, placed where it cannot be missed, a public verdict inscribed in the heart of the king&rsquo;s own hall.",
      "The effect on Belshazzar is total collapse. His color changes, his thoughts alarm him, the joints of his hips give way, and his knees knock against one another (5:6). The man who moments before was master of a thousand lords is now physically undone by fear. The proud body that raised the holy cup in blasphemy now trembles uncontrollably before a sign it cannot read.",
      "He summons his enchanters and wise men, offering purple, a chain of gold, and the third rank in the kingdom to whoever can interpret the writing. But none of them can read it or tell its meaning, and the king and his lords are deeply troubled (5:7&ndash;9). Once again the celebrated wisdom of Babylon is exposed as helpless before the word of God. The crisis only deepens, and the hall that rang with revelry falls into confusion and dread.",
    ],
  },
  {
    heading: "The Queen Mother Remembers Daniel",
    reference: "Daniel 5:10&ndash;12",
    accent: TEAL,
    paragraphs: [
      "Hearing the uproar, the queen, who is best understood as the queen mother rather than one of Belshazzar&rsquo;s wives, comes into the banqueting hall. With the calm of one who remembers an earlier age, she tells the panicking king not to let his thoughts alarm him, for there is a man in his kingdom in whom is the spirit of the holy gods (5:10&ndash;11). Her composure stands in striking contrast to the king&rsquo;s terror.",
      "She recalls that in the days of Nebuchadnezzar this man was found to have light and understanding and wisdom like the wisdom of the gods, and that Nebuchadnezzar made him chief of the magicians, enchanters, Chaldeans, and astrologers (5:11). Daniel had risen to the highest place under the old king, but a generation has passed and the new court has forgotten him. The queen mother&rsquo;s memory restores to the story the one man who can read the writing.",
      "She names him plainly: let Daniel be called, and he will show the interpretation (5:12). The detail that Daniel has been overlooked until an old woman remembers him is quietly significant. The servants of God may be set aside and ignored by the powerful and the young, yet when the crisis comes that human wisdom cannot meet, it is the faithful prophet, long forgotten, who is summoned at last.",
    ],
  },
  {
    heading: "Daniel Refuses the Rewards",
    reference: "Daniel 5:13&ndash;23",
    accent: GREEN,
    paragraphs: [
      "Daniel is brought before the king, who offers him the same rewards he offered his wise men, purple, gold, and the third place in the kingdom, if he can read the writing. Daniel&rsquo;s reply is striking in its independence: &ldquo;Let your gifts be for yourself, and give your rewards to another. Nevertheless, I will read the writing to the king and make known to him the interpretation&rdquo; (5:17). He will deliver God&rsquo;s word, but he will not be bought, and he refuses to let the king imagine that the message can be flattered or purchased.",
      "Before reading the words, Daniel preaches. He reminds the king how the Most High God gave Nebuchadnezzar kingdom and greatness and glory, and how, when his heart was lifted up and his spirit hardened so that he dealt proudly, he was brought down from his throne and his glory taken from him, driven from among men until he knew that the Most High rules the kingdom of mankind (5:18&ndash;21). The history lesson is the necessary context for the verdict.",
      "Then Daniel applies it directly: &ldquo;And you his son, Belshazzar, have not humbled your heart, though you knew all this&rdquo; (5:22). He charges the king with lifting himself against the Lord of heaven, with profaning his vessels, with praising lifeless idols, and with failing to honor the God in whose hand is his very breath (5:23). The indictment is complete. Belshazzar sinned not in ignorance but against the clear light of his predecessor&rsquo;s example, and that is the measure of his guilt.",
    ],
  },
  {
    heading: "Numbered, Weighed, Divided",
    reference: "Daniel 5:24&ndash;28",
    accent: GOLD,
    paragraphs: [
      "Now Daniel reads the words: MENE, MENE, TEKEL, and PARSIN (5:25). He explains that the hand was sent from the very God whom Belshazzar dishonored. Each word is a sentence of judgment unfolding upon the king and his kingdom. The strange inscription that baffled the wise men becomes, in the prophet&rsquo;s mouth, a clear and terrible announcement of the end.",
      "MENE: God has numbered the days of the kingdom and brought it to an end (5:26). The doubling of the word presses the certainty home; the count is finished. TEKEL: the king has been weighed in the balances and found wanting (5:27). His life has been measured against the standard of God and discovered to be too light, lacking all the weight that matters. The image of the scales has echoed through the centuries as a picture of final accountability.",
      "PARSIN, given as PERES in its singular form, means the kingdom is divided and given to the Medes and Persians (5:28). The wordplay binds the name of Persia into the verdict itself, so that the conquering empire is announced in the very word of doom. Three verbs, numbered, weighed, divided, pronounce the close of Babylon. The interpretation is finished, and the only thing left is for it to come to pass, which it does before the night is over.",
    ],
  },
  {
    heading: "That Very Night",
    reference: "Daniel 5:29&ndash;31",
    accent: ROSE,
    paragraphs: [
      "In a final irony, Belshazzar keeps his word. He clothes Daniel in purple, puts a chain of gold around his neck, and proclaims him the third ruler in the kingdom (5:29). The prophet who refused the rewards receives them anyway, but the kingdom into which he is exalted has only hours left to exist. The honor is real and yet hollow, conferred upon a realm already condemned.",
      "Then comes the swift and stunning fulfillment: that very night Belshazzar the Chaldean king was killed (5:30). There is no delay, no reprieve, no time for the king to flee or repent. The verdict written on the wall is executed before the dawn. The feast that opened the chapter ends not in song but in death, the proud reveler struck down in the night his city fell.",
      "The chapter closes with the transfer of power: and Darius the Mede received the kingdom, being about sixty-two years old (5:31). The empire that profaned the temple vessels passes into other hands exactly as the writing foretold, numbered, weighed, and divided. The historical fall of Babylon to Cyrus and the Medo-Persian forces in 539 BC stands behind this scene, and the chapter presents it as the unmistakable act of the God who rules over all the kingdoms of men.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "Learning from the Lessons We Have Seen",
    reference: "The peril of squandered light",
    accent: TEAL,
    paragraphs: [
      "Belshazzar&rsquo;s deepest failure was not ignorance but the refusal to learn from a lesson he had already witnessed. Daniel charges him with knowing all about Nebuchadnezzar&rsquo;s humbling and yet not humbling his own heart. This confronts every reader with a searching question: what truths have I already seen demonstrated in the lives of others, and have I taken them to heart? It is possible to watch pride bring down those around us and still march proudly down the same road.",
      "The chapter teaches that exposure to truth increases responsibility. The more we have seen of God&rsquo;s dealings, the more accountable we are for our response. Those raised with the Scriptures, surrounded by examples of faith, and warned by the failures of others bear a heavier burden than those who have never heard. Privilege is never neutral; it either softens the heart toward God or, if despised, hardens it toward judgment.",
      "The practical call is to be people who actually learn. When we see the consequences of pride, greed, or contempt for holy things in another life, we are meant to take warning and turn, not to assume we are the exception. Belshazzar assumed he could profane what his forefather had learned to revere, and the assumption cost him everything. Wisdom takes the lesson God has placed before our eyes and lets it change the way we live.",
    ],
  },
  {
    heading: "Weighed in the Balances",
    reference: "Facing the reckoning honestly",
    accent: GOLD,
    paragraphs: [
      "TEKEL, weighed in the balances and found wanting, is perhaps the most personally arresting phrase in the chapter. It pictures a moment when the true weight of a life is revealed, when all the outward splendor is stripped away and only the substance remains. The application is unavoidable: each of us will be weighed, and the question is whether our lives have any weight that will matter when the scales are set.",
      "Belshazzar&rsquo;s life was light because it was full of the wrong things, pride, sacrilege, idolatry, and self-indulgence, and empty of the things that count, humility before God, honor toward the holy, gratitude for the breath in his lungs. The chapter invites a sober self-examination. If our lives were placed in the balance tonight, what would be found? Are we storing up the weight of genuine devotion, or only the foliage of appearance?",
      "Yet the very God who weighs is also the God who, in the larger story of Scripture, provides the only weight that can satisfy the scales. For those who come to him in humility, the lightness of their own merit is answered by the grace he supplies. The warning of TEKEL is meant not to crush the humble but to awaken the proud, to drive us from self-confidence to the mercy of the God in whose hand our breath is held.",
    ],
  },
  {
    heading: "Standing Without Being Bought",
    reference: "The integrity of Daniel",
    accent: GREEN,
    paragraphs: [
      "Daniel models a courage that the church desperately needs. Summoned before a terrified king who dangles purple robes and high office, the aged prophet refuses to be bought. &ldquo;Let your gifts be for yourself,&rdquo; he says, and then delivers God&rsquo;s word without softening a single syllable. His independence from the king&rsquo;s rewards frees him to speak the truth, for a messenger who cannot be purchased cannot be silenced.",
      "This is a model for everyone called to speak truth to power, whether in great matters of state or in the ordinary settings of work, family, and friendship. The temptation to trim the message in hope of reward, or out of fear of loss, is constant. Daniel shows that faithfulness requires a heart already detached from the bribes the world offers, so that the word of God can be spoken whole and unafraid.",
      "Daniel&rsquo;s integrity was not the product of a single dramatic night; it was the fruit of a lifetime of faithfulness in a foreign land. Decades of quiet obedience prepared him to stand unmoved in this final crisis. The application is that the courage we will need in our defining moments is built in the long obscurity of ordinary faithfulness, long before the crowd or the crisis ever calls our name.",
    ],
  },
  {
    heading: "The God Who Rules the Nations",
    reference: "Confidence amid empires",
    accent: PURPLE,
    paragraphs: [
      "Daniel five offers profound assurance to those who feel small beneath the great powers of their age. Babylon looked invincible, and the people of God looked defeated, yet in a single night the empire fell at the word of the Lord. The application is a settled confidence that no power, no government, no cultural tide stands beyond the rule of God. He numbers the days of every kingdom and gives them into whatever hands he chooses.",
      "This confidence is not passive resignation but active trust. Knowing that God rules over the nations frees his people from both panic and despair when the powers of the world rage and the wicked seem to prosper. The same God who wrote Babylon&rsquo;s verdict on the wall holds every empire and every era in his hand, and his purposes will not fail however dark the hour may appear.",
      "Finally, the chapter calls us to live now in the light of that certain reckoning. Belshazzar feasted as though the night would never end, and the night ended his kingdom and his life. We are invited instead to live humbly before the Lord of heaven, to honor what is holy, to give thanks for the breath he lends us, and to be found, when the scales are set, not wanting but weighted with the grace and obedience that please him.",
    ],
  },
];

const reflectionQuestions = [
  "What lessons have I already seen demonstrated in the lives of others that I have failed to take to heart for myself?",
  "Are there holy things, gifts, time, relationships, or worship, that I have been treating as common rather than as belonging to God?",
  "If my life were weighed in the balances tonight, what would give it weight, and what would be found wanting?",
  "Where am I tempted to trim or soften the truth in hope of reward or out of fear of loss, as Daniel refused to do?",
  "How does the truth that God rules over every nation and empire change the way I face the powers and pressures of my own age?",
];

const videoItems = [
  { videoId: "Zr5dK9mP2bN", title: "Belshazzar's Feast - Daniel 5 Explained" },
  { videoId: "Qf3wT7xL8sV", title: "The Writing on the Wall - Mene Mene Tekel Parsin" },
  { videoId: "Jn8cB4vR1pK", title: "Weighed and Found Wanting - The Fall of Babylon" },
  { videoId: "Yd6gH2nW5tZ", title: "Daniel 5 and the Sovereignty of God over Nations" },
];

function blocksForTab(tab: Tab): Block[] {
  if (tab === "Overview") return overviewBlocks;
  if (tab === "Key Themes") return themeBlocks;
  if (tab === "Verse by Verse") return verseBlocks;
  return applicationBlocks;
}

export default function Daniel5GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const blocks = blocksForTab(activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${GOLD}22`, color: GOLD, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Daniel 5 &mdash; The Writing on the Wall
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;You have been weighed in the balances and found wanting.&rdquo; Belshazzar profanes the holy vessels at a drunken feast, a human hand writes four words upon the plaster wall, and the forgotten prophet Daniel is summoned to read the verdict, MENE, MENE, TEKEL, PARSIN, numbered, weighed, divided, upon an empire that falls that very night." }} />
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem", position: "sticky", top: "var(--header-height, 80px)", background: BG, zIndex: 5 }}>
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

        <section>
          {blocks.map((block, bi) => (
            <div key={bi} style={{ marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: block.accent, flexShrink: 0, display: "inline-block" }} />
                <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: block.heading }} />
              </div>
              <div style={{ color: block.accent, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: block.reference }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {block.paragraphs.map((para, pi) => (
                  <p
                    key={pi}
                    style={{ color: pi === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            </div>
          ))}

          {activeTab === "Application" && (
            <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${PURPLE}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.3rem" }}>Questions for Reflection</h3>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.03rem" }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>
          )}
        </section>

        <section style={{ marginTop: "3.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Daniel 5 through visual teaching on Belshazzar&rsquo;s feast and the profaning of the temple vessels, the writing on the wall, the meaning of MENE, MENE, TEKEL, PARSIN, and the sovereignty of God over the nations." }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Numbered, Weighed, and Divided</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Daniel 5 is a single night that reveals the verdict of God upon human pride. Belshazzar lifted the holy vessels against the Lord of heaven, refused to learn from the humbling of Nebuchadnezzar, and was weighed in the balances and found wanting. The God of the exiles wrote MENE, MENE, TEKEL, PARSIN on the wall with his own fingers, and Babylon fell that very night to the Medes and Persians. No empire stands beyond his reach, and every life will be weighed; the call of the chapter is to humble our hearts before the God in whose hand is our breath and all our ways." }} />
        </div>
      </main>
    </div>
  );
}
