"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

// ---------------------------------------------------------------------------
// Palette
// ---------------------------------------------------------------------------
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";

// ---------------------------------------------------------------------------
// Tabs
// ---------------------------------------------------------------------------
type NamesTab =
  | "overview"
  | "elohim"
  | "yahweh"
  | "compound"
  | "jesus"
  | "spirit"
  | "themes"
  | "journal"
  | "videos";

const TABS: { id: NamesTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "elohim", label: "Elohim & El Names" },
  { id: "yahweh", label: "Yahweh (YHWH)" },
  { id: "compound", label: "Compound Names" },
  { id: "jesus", label: "Names of Jesus" },
  { id: "spirit", label: "The Holy Spirit" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

// ---------------------------------------------------------------------------
// Data — Foundational (El / Elohim) names
// ---------------------------------------------------------------------------
type NameCard = {
  id: string;
  name: string;
  hebrew: string;
  meaning: string;
  reference: string;
  story: string;
  reveals: string;
  application: string;
  keyVerse: string;
  keyVerseText: string;
};

const FOUNDATIONAL_NAMES: NameCard[] = [
  {
    id: "elohim",
    name: "Elohim",
    hebrew: "אֱלֹהִים",
    meaning: "God — Creator, Mighty One (plural of majesty)",
    reference: "Genesis 1:1",
    story:
      "Elohim is the very first name of God in the Bible: 'In the beginning, God (Elohim) created the heavens and the earth.' It appears about 2,600 times in the Old Testament and thirty-two times in Genesis 1 alone. Grammatically it is plural — the plural of 'Eloah' — yet it consistently takes singular verbs. Hebrew uses this 'plural of majesty' to express fullness, intensity, and supremacy: this God is not one deity among many but the sum of all divine power. Christians have also long noticed how this grammatical fullness leaves room for what the New Testament will reveal — 'Let us make man in our image' (Genesis 1:26).",
    reveals:
      "Elohim reveals God as the transcendent Creator who stands outside everything he made. He speaks, and galaxies exist. He is not part of nature, a force within the universe, or a projection of human need — he is the One to whom all of it answers. Before God is ever 'my God,' he is the God.",
    application:
      "When your world feels chaotic and formless — 'without form and void' — Elohim is still hovering over the deep, still speaking light into darkness. The God who ordered the cosmos can bring order to a shattered week. Begin prayer the way the Bible begins: by remembering who made everything.",
    keyVerse: "Genesis 1:1",
    keyVerseText: "In the beginning, God created the heavens and the earth.",
  },
  {
    id: "el-elyon",
    name: "El Elyon",
    hebrew: "אֵל עֶלְיוֹן",
    meaning: "God Most High — sovereign above every power",
    reference: "Genesis 14:18-20",
    story:
      "After Abram's daring night raid to rescue his nephew Lot from a coalition of kings, a mysterious figure walks onto the page: Melchizedek, king of Salem and 'priest of God Most High.' He brings out bread and wine and blesses Abram 'by God Most High, Possessor of heaven and earth, who has delivered your enemies into your hand.' Abram gives him a tenth of everything — and then refuses the king of Sodom's reward, swearing by 'the LORD, God Most High' that no man will be able to say he made Abram rich. Centuries later, the proud emperor Nebuchadnezzar would be humbled until he confessed that 'the Most High rules the kingdom of men' (Daniel 4:34-35).",
    reveals:
      "El Elyon reveals that there is no power above God — not kings, armies, markets, or empires. Victories belong to him; nations rise and fall under his hand. He is the Possessor of heaven and earth, which means everything we 'own' is on loan.",
    application:
      "Whatever towers over you — a diagnosis, a boss, a government, a debt — there is Someone higher. Abram could refuse the king of Sodom's money because El Elyon was his portion. You can refuse fear and compromise for the same reason. Pray today to the Most High, and watch the things that loomed large shrink to scale.",
    keyVerse: "Genesis 14:19-20",
    keyVerseText:
      "Blessed be Abram by God Most High, Possessor of heaven and earth; and blessed be God Most High, who has delivered your enemies into your hand!",
  },
  {
    id: "el-shaddai",
    name: "El Shaddai",
    hebrew: "אֵל שַׁדַּי",
    meaning: "God Almighty — the all-sufficient One",
    reference: "Genesis 17:1",
    story:
      "Abram is ninety-nine years old. Thirteen years have passed since Ishmael's birth, and the promise of a son through Sarah looks biologically dead. Then God appears: 'I am God Almighty (El Shaddai); walk before me, and be blameless, that I may make my covenant between me and you.' In that meeting God changes Abram's name to Abraham, 'father of a multitude,' and promises that ninety-year-old Sarah will bear Isaac within the year. The name likely derives from a root meaning power or sufficiency — the God who is enough when human resources are exhausted. It becomes the favorite name of the patriarchs (Genesis 28:3; 35:11; 48:3) and of the book of Job, where 'Shaddai' appears thirty-one times.",
    reveals:
      "El Shaddai reveals God's power precisely at the point of human impossibility. He does not merely help the strong do a little more; he gives life to the dead and calls into existence the things that do not exist (Romans 4:17). His sufficiency begins where ours ends.",
    application:
      "Name the 'dead' thing in your life — the marriage, the prodigal, the dream, the body that won't cooperate. El Shaddai specializes in exactly that territory. His command to Abraham still stands: 'Walk before me' — keep walking, in his presence, even while the promise is delayed. Almighty does not mean fast; it means certain.",
    keyVerse: "Genesis 17:1",
    keyVerseText:
      "When Abram was ninety-nine years old the LORD appeared to Abram and said to him, 'I am God Almighty; walk before me, and be blameless.'",
  },
  {
    id: "el-olam",
    name: "El Olam",
    hebrew: "אֵל עוֹלָם",
    meaning: "Everlasting God — God of eternity and of the long view",
    reference: "Genesis 21:33",
    story:
      "After settling a water dispute and cutting a treaty with the Philistine king Abimelech at Beersheba, Abraham does something quietly profound: he plants a tamarisk tree and 'calls there on the name of the LORD, the Everlasting God.' A tamarisk grows slowly — Abraham would never sit in its full shade. Planting it was an act of faith that God's purposes outlast a single lifetime. The wandering nomad, who owned no land but a well and a treaty, anchored his hope in the God of forever. Isaiah later picks up the name: 'The LORD is the everlasting God, the Creator of the ends of the earth. He does not faint or grow weary' (Isaiah 40:28).",
    reveals:
      "El Olam reveals that God is not bound by time, trends, or generations. He was God before your story began and will be God after it ends — which means his promises cannot expire. He has the long view we lack, and he never runs out of strength along the way.",
    application:
      "Plant tamarisk trees: invest in things you may never see finished — children, churches, slow obedience, seeds of forgiveness. When progress feels invisible, remember you serve the Everlasting God, not the god of this quarter's results. 'They who wait for the LORD shall renew their strength' (Isaiah 40:31).",
    keyVerse: "Genesis 21:33",
    keyVerseText:
      "Abraham planted a tamarisk tree in Beersheba and called there on the name of the LORD, the Everlasting God.",
  },
  {
    id: "el-roi",
    name: "El Roi",
    hebrew: "אֵל רֳאִי",
    meaning: "The God Who Sees Me",
    reference: "Genesis 16:13",
    story:
      "Hagar is an Egyptian slave, pregnant, mistreated by Sarai, and running away into the wilderness toward Shur. She is the kind of person the ancient world rendered invisible: foreign, female, enslaved, alone. But 'the angel of the LORD found her by a spring of water.' He calls her by name — the first time anyone in the story has — speaks to her about her future, and promises to multiply her offspring. Hagar responds by doing something no one else in all of Scripture does: she gives God a name. 'You are El Roi, a God of seeing,' she says, 'truly here I have seen him who looks after me.' The well was named Beer-lahai-roi, 'the well of the Living One who sees me.'",
    reveals:
      "El Roi reveals that God's eyes go where human eyes refuse to look. He sees the overlooked, the used, the runaway, the person at the bottom of someone else's story. Being seen by God is not surveillance — it is being known, found, and looked after.",
    application:
      "If you feel invisible — in your workplace, your family, your church, your suffering — Hagar's God is your God. He found her in the wilderness before she ever sought him. Pray honestly today: 'You are the God who sees me,' and let yourself be found. Then ask whom God might want you to truly see, the way he saw Hagar.",
    keyVerse: "Genesis 16:13",
    keyVerseText:
      "So she called the name of the LORD who spoke to her, 'You are a God of seeing,' for she said, 'Truly here I have seen him who looks after me.'",
  },
  {
    id: "adonai",
    name: "Adonai",
    hebrew: "אֲדֹנָי",
    meaning: "Lord, Master, Sovereign Owner",
    reference: "Genesis 15:2",
    story:
      "The first person recorded calling God 'Adonai' is Abram, in a moment of raw honesty: 'O Lord GOD (Adonai Yahweh), what will you give me, for I continue childless?' Adonai is the plural-of-majesty form of 'adon,' a word used for a master of servants or an owner of property. To call God Adonai is to confess that he holds the rights to your life — and, remarkably, Abram pairs that surrender with his hardest question. Adonai later became the word devout Jews spoke aloud whenever they encountered the unpronounceable divine name YHWH in the text, a practice that shaped how the name is rendered to this day.",
    reveals:
      "Adonai reveals God as the rightful Master — and us as servants who belong to him. But in the Bible, his lordship is not exploitation; a good master in Israel was bound to protect and provide for those in his house. To have God as Adonai is to be owned by Someone utterly committed to you.",
    application:
      "Notice that Abram's surrender ('Adonai') and Abram's struggle ('what will you give me?') live in the same sentence. Lordship does not silence honest questions; it gives them a safe address. What part of your life are you still managing as owner rather than steward? Hand over the title deed today — career, money, children, plans — to the Master who can be trusted with them.",
    keyVerse: "Genesis 15:2",
    keyVerseText:
      "But Abram said, 'O Lord GOD, what will you give me, for I continue childless...?' ",
  },
];

// ---------------------------------------------------------------------------
// Data — Compound names of Yahweh
// ---------------------------------------------------------------------------
const COMPOUND_NAMES: NameCard[] = [
  {
    id: "jireh",
    name: "Yahweh Jireh",
    hebrew: "יְהוָה יִרְאֶה",
    meaning: "The LORD Will Provide (literally, 'the LORD will see to it')",
    reference: "Genesis 22:14",
    story:
      "On Mount Moriah, Abraham faces the darkest test imaginable: offer up Isaac, the son of promise. When Isaac asks, 'Where is the lamb for a burnt offering?' Abraham answers with trembling faith, 'God will provide for himself the lamb.' At the last moment the angel of the LORD stops his hand — and there, caught in a thicket by its horns, is a ram. Abraham names the place Yahweh Jireh, 'The LORD will provide,' and the saying lived on: 'On the mount of the LORD it shall be provided.' The Hebrew verb is literally 'to see' — God provides because God pre-sees. Two thousand years later, on that same ridge of hills, God did provide himself the Lamb (John 1:29).",
    reveals:
      "Yahweh Jireh reveals that God's provision flows from God's vision. He sees the need before we feel it and has already arranged the answer — often hidden in a thicket we haven't noticed yet. Ultimately the name points to the cross: 'He who did not spare his own Son... how will he not also with him graciously give us all things?' (Romans 8:32).",
    application:
      "Provision usually appears at the point of obedience, not before it. Abraham saw the ram only after he raised the knife. Take the obedient next step you've been delaying, and trust that the LORD has already seen to what you'll need when you get there.",
    keyVerse: "Genesis 22:14",
    keyVerseText:
      "So Abraham called the name of that place, 'The LORD will provide'; as it is said to this day, 'On the mount of the LORD it shall be provided.'",
  },
  {
    id: "rapha",
    name: "Yahweh Rapha",
    hebrew: "יְהוָה רֹפְאֶךָ",
    meaning: "The LORD Who Heals You",
    reference: "Exodus 15:26",
    story:
      "Three days after the Red Sea — three days after the greatest miracle in their history — Israel runs out of water. When they finally find some at Marah, it is bitter and undrinkable, and the singing congregation becomes a grumbling mob. God shows Moses a log; thrown into the water, it turns the bitterness sweet. Then God attaches a name to the miracle: 'If you will diligently listen to the voice of the LORD your God... I will put none of the diseases on you that I put on the Egyptians, for I am the LORD, your healer (Yahweh Rophecha).' The first thing God heals in the Bible's exodus story is not a body but bitter water — and a bitter people.",
    reveals:
      "Yahweh Rapha reveals God as the healer of every layer of human brokenness: bodies, memories, communities, and bitterness itself. Healing is not something God occasionally does; it is something God is. Every recovery is from him, every final healing is guaranteed in the resurrection, and 'with his wounds we are healed' (Isaiah 53:5).",
    application:
      "Bring God your Marah — the bitter place where disappointment set in right after a spiritual high. Ask him to heal what medicine cannot touch: resentment, grief, the wound nobody sees. And hold both truths together: God heals now, in part, as he wills; and God will heal completely when Christ raises the dead.",
    keyVerse: "Exodus 15:26",
    keyVerseText: "For I am the LORD, your healer.",
  },
  {
    id: "nissi",
    name: "Yahweh Nissi",
    hebrew: "יְהוָה נִסִּי",
    meaning: "The LORD Is My Banner",
    reference: "Exodus 17:15",
    story:
      "At Rephidim, the Amalekites attack Israel's weakest stragglers in the rear. Joshua leads the army into the valley while Moses climbs the hill with the staff of God. As long as Moses' hands are raised, Israel prevails; when they drop, Amalek prevails. When Moses grows weary, Aaron and Hur sit him on a stone and hold up his hands — one on each side — until sunset, and Joshua wins the battle. Moses builds an altar and names it Yahweh Nissi, 'The LORD is my banner.' A banner (nes) was the standard armies rallied around in battle; Israel's standard was not a flag but God himself, lifted high in intercession.",
    reveals:
      "Yahweh Nissi reveals that our real battles are won by what happens on the hill, not just in the valley — by prayer, dependence, and the raised hands of God's people together. Victory belongs to the LORD, and he is the rallying point when the fight is against forces stronger than we are.",
    application:
      "Two applications, one name. First: stop fighting flag-less — rally your heart around God in prayer before you enter the day's battle. Second: be an Aaron or a Hur. Whose weary hands could you hold up this week — a pastor, a single parent, a friend in a long fight? Intercession is warfare.",
    keyVerse: "Exodus 17:15",
    keyVerseText: "And Moses built an altar and called the name of it, The LORD Is My Banner.",
  },
  {
    id: "shalom",
    name: "Yahweh Shalom",
    hebrew: "יְהוָה שָׁלוֹם",
    meaning: "The LORD Is Peace",
    reference: "Judges 6:24",
    story:
      "Gideon is hiding — threshing wheat in a winepress so Midianite raiders won't see him — when the angel of the LORD greets him with words that sound almost ironic: 'The LORD is with you, O mighty man of valor.' Gideon pours out his doubts ('If the LORD is with us, why has all this happened to us?'), then panics when he realizes he has seen the angel of the LORD face to face, certain he will die. God's answer: 'Peace be to you. Do not fear; you shall not die.' So Gideon builds an altar and calls it Yahweh Shalom, 'The LORD Is Peace' — built while Midian still occupied the land, before a single battle was fought. Peace came before victory, because peace is a Person, not a circumstance.",
    reveals:
      "Yahweh Shalom reveals that shalom — wholeness, well-being, everything-in-its-place rightness — flows from God's presence, not from the absence of trouble. God speaks peace to fearful, hiding, doubt-riddled people and then makes warriors out of them.",
    application:
      "You don't have to wait for the conflict to end to have peace; build the altar in the winepress. Name your fear to God honestly, as Gideon did, then receive his word: 'Peace be to you. Do not fear.' Jesus says it on the far side of the resurrection: 'Peace I leave with you; my peace I give to you' (John 14:27).",
    keyVerse: "Judges 6:24",
    keyVerseText:
      "Then Gideon built an altar there to the LORD and called it, The LORD Is Peace.",
  },
  {
    id: "sabaoth",
    name: "Yahweh Sabaoth",
    hebrew: "יְהוָה צְבָאוֹת",
    meaning: "The LORD of Hosts — commander of heaven's armies",
    reference: "1 Samuel 1:3",
    story:
      "This thunderous title — used roughly 270 times in the Old Testament — first appears not on a battlefield but beside a weeping woman. Hannah, barren and provoked year after year, goes up to Shiloh where her husband sacrifices 'to the LORD of hosts.' In her anguish she prays, 'O LORD of hosts, if you will... give to your servant a son' (1 Samuel 1:11). The commander of angel armies and the stars in their courses bends to hear an infertile woman's whispered vow — and Samuel is born. Later, a shepherd boy hurls the name like a stone: 'You come to me with a sword... but I come to you in the name of the LORD of hosts' (1 Samuel 17:45), and Goliath falls.",
    reveals:
      "Yahweh Sabaoth reveals God as the supreme commander of every host — angelic armies, the stars of heaven, the armies of Israel. Nothing outguns him. And astonishingly, this most military of names is repeatedly deployed for the powerless: barren Hannah, shepherd David, the remnant in the prophets.",
    application:
      "When you are outmatched — and you know when you are — pray to the LORD of hosts. This is the name for the battles you cannot win: the addiction, the lawsuit, the spiritual oppression, the Goliath. You bring a sling; he brings the hosts of heaven. 'The LORD of hosts is with us; the God of Jacob is our fortress' (Psalm 46:7).",
    keyVerse: "1 Samuel 17:45",
    keyVerseText:
      "You come to me with a sword and with a spear... but I come to you in the name of the LORD of hosts.",
  },
  {
    id: "raah",
    name: "Yahweh Raah",
    hebrew: "יְהוָה רֹעִי",
    meaning: "The LORD Is My Shepherd",
    reference: "Psalm 23:1",
    story:
      "David, the shepherd who became king, distills a lifetime of pastures and predators into six verses: 'The LORD is my shepherd; I shall not want.' He had carried lambs, fought lions, led flocks to green grass and still water — and he recognized himself in the sheep. The shepherd's job description becomes God's: provision ('I shall not want'), rest ('he makes me lie down'), guidance ('he leads me in paths of righteousness'), presence in the dark ('though I walk through the valley of the shadow of death... you are with me'), and a future ('I shall dwell in the house of the LORD forever'). Ezekiel 34 promises God will shepherd his scattered flock himself — a promise Jesus claims: 'I am the good shepherd' (John 10:11).",
    reveals:
      "Yahweh Raah reveals the stunning personal scale of God's care. The LORD of hosts is also my shepherd — singular, intimate, daily. He does not manage his people from a distance; he walks ahead of them, knows them by name, and lays down his life for them.",
    application:
      "Sheep don't strategize; they follow. Practice 'shepherd-paced' living this week: receive rest as obedience, let him choose the path, and when you enter a dark valley, switch — as Psalm 23 does — from talking about God ('he leads me') to talking to him ('you are with me').",
    keyVerse: "Psalm 23:1",
    keyVerseText: "The LORD is my shepherd; I shall not want.",
  },
  {
    id: "tsidkenu",
    name: "Yahweh Tsidkenu",
    hebrew: "יְהוָה צִדְקֵנוּ",
    meaning: "The LORD Our Righteousness",
    reference: "Jeremiah 23:6",
    story:
      "Jeremiah prophesies during the collapse of Judah's monarchy, under kings whose corruption was killing the nation. The reigning king's name was Zedekiah — which means 'Yahweh is my righteousness' — yet his life mocked his own name. Against that backdrop God promises: 'Behold, the days are coming... when I will raise up for David a righteous Branch, and he shall reign as king and deal wisely... And this is the name by which he will be called: The LORD is our righteousness.' Where the king named 'Yahweh is righteousness' failed, a coming King would actually be it — and would somehow share that righteousness with his people. The New Testament names him: Christ Jesus, 'whom God made our wisdom and our righteousness' (1 Corinthians 1:30).",
    reveals:
      "Yahweh Tsidkenu reveals the heart of the gospel centuries early: righteousness is not achieved by us but provided for us. 'For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God' (2 Corinthians 5:21). Our standing before God is a gift wearing a name.",
    application:
      "Stop alternating between pride (on your good days) and despair (on your bad ones); both assume your righteousness is your own. It isn't — it's his. Preach this name to yourself when guilt replays old failures: 'The LORD is my righteousness.' Then live grateful, not driven.",
    keyVerse: "Jeremiah 23:6",
    keyVerseText:
      "And this is the name by which he will be called: 'The LORD is our righteousness.'",
  },
  {
    id: "shammah",
    name: "Yahweh Shammah",
    hebrew: "יְהוָה שָׁמָּה",
    meaning: "The LORD Is There",
    reference: "Ezekiel 48:35",
    story:
      "Ezekiel prophesied to exiles in Babylon who had lived the unthinkable: he had seen, in vision, the glory of God depart from the temple (Ezekiel 10–11) before Jerusalem burned. The book is haunted by absence. But it ends with a sprawling vision of a restored city and temple, and its very last words give the city a new name: 'And the name of the city from that time on shall be, The LORD Is There (Yahweh Shammah).' The exiles' deepest wound — God left — is answered by Scripture's deepest promise — God will dwell with his people and never leave. Revelation completes the arc: 'Behold, the dwelling place of God is with man' (Revelation 21:3), and that city needs no temple, for the Lord is its temple.",
    reveals:
      "Yahweh Shammah reveals that the goal of redemption is not merely forgiveness, escape, or blessing — it is presence. Heaven's headline is not golden streets but 'God himself will be with them.' Home, in the Bible, is wherever God is there.",
    application:
      "Exile takes many forms: a hospital room, a new city, a season when God feels gone. Ezekiel's name insists the story ends with presence. And in Christ the future leaks backward — 'I am with you always' (Matthew 28:20). Practice his presence today: pause three times and simply say, 'You are here.'",
    keyVerse: "Ezekiel 48:35",
    keyVerseText:
      "And the name of the city from that time on shall be, 'The LORD Is There.'",
  },
];

// ---------------------------------------------------------------------------
// Data — Names of Jesus
// ---------------------------------------------------------------------------
type JesusName = {
  id: string;
  name: string;
  meaning: string;
  reference: string;
  body: string;
};

const JESUS_NAMES: JesusName[] = [
  {
    id: "yeshua",
    name: "Jesus (Yeshua)",
    meaning: "'Yahweh saves' / 'Yahweh is salvation'",
    reference: "Matthew 1:21",
    body: "The angel left Joseph no choice in the naming: 'You shall call his name Jesus, for he will save his people from their sins.' Yeshua is a shortened form of Yehoshua (Joshua), and the name is a sentence: Yahweh saves. Every time someone said his name in Nazareth, they were preaching a sermon without knowing it. The covenant name of God and the mission of the cross meet in the name a mother called across a courtyard at dinnertime. 'There is salvation in no one else, for there is no other name under heaven given among men by which we must be saved' (Acts 4:12).",
  },
  {
    id: "immanuel",
    name: "Immanuel",
    meaning: "'God with us'",
    reference: "Matthew 1:23; Isaiah 7:14",
    body: "Matthew reaches back seven centuries to Isaiah's sign to a faithless king: 'Behold, the virgin shall conceive and bear a son, and they shall call his name Immanuel (which means, God with us).' The name answers humanity's oldest exile — driven from Eden, barred from the presence. In Jesus, God did not send help; he came. Matthew brackets his whole Gospel with this name: it opens with 'God with us' and closes with 'I am with you always, to the end of the age' (28:20).",
  },
  {
    id: "christ",
    name: "Christ / Messiah",
    meaning: "'Anointed One' (Hebrew Mashiach, Greek Christos)",
    reference: "John 1:41; Matthew 16:16",
    body: "Christ is not Jesus' surname — it is his office. In Israel, prophets, priests, and kings were anointed with oil to mark them out for God's service; 'Messiah' became the title of the ultimate Anointed One, the son of David who would set everything right. When Peter confesses 'You are the Christ, the Son of the living God,' he is saying: every promise, every prophet, every longing of Israel lands on you. Jesus accepted the title — and then redefined it by way of a cross.",
  },
  {
    id: "son-of-man",
    name: "Son of Man",
    meaning: "Jesus' favorite self-title — the human one of Daniel's vision",
    reference: "Daniel 7:13-14; Mark 14:61-62",
    body: "Jesus called himself 'Son of Man' more than eighty times — far more than any other title. It sounds humble, and it is: he is truly one of us. But its deep root is Daniel 7, where 'one like a son of man' comes with the clouds of heaven to the Ancient of Days and receives 'dominion and glory and a kingdom, that all peoples, nations, and languages should serve him... an everlasting dominion.' At his trial, when the high priest demands to know if he is the Christ, Jesus answers with this text — and is condemned for blasphemy. The humblest-sounding title was the highest claim of all.",
  },
  {
    id: "son-of-god",
    name: "Son of God",
    meaning: "The eternal Son, sharing the Father's nature",
    reference: "John 1:14; Mark 1:1; Romans 1:4",
    body: "At the baptism and the transfiguration, the Father's voice declares it: 'This is my beloved Son.' Demons screamed it, the centurion at the cross confessed it, and John wrote his whole Gospel 'so that you may believe that Jesus is the Christ, the Son of God' (John 20:31). Sonship here is not biology but nature and relationship: he is 'the only Son from the Father,' eternally beloved, sharing the divine essence — and through him, astonishingly, we receive adoption as sons and daughters (Galatians 4:4-6).",
  },
  {
    id: "logos",
    name: "The Word (Logos)",
    meaning: "God's self-expression — eternal, creative, made flesh",
    reference: "John 1:1, 14",
    body: "'In the beginning was the Word, and the Word was with God, and the Word was God.' John deliberately echoes Genesis 1, where God creates by speaking. Jesus is what God has to say — the full self-expression of the divine mind, the agent of creation ('all things were made through him'), and then the unthinkable: 'the Word became flesh and dwelt among us.' If you want to know what God thinks, look at Jesus. He is God's final word (Hebrews 1:1-2).",
  },
  {
    id: "lamb",
    name: "Lamb of God",
    meaning: "The final sacrifice who takes away sin",
    reference: "John 1:29; Revelation 5",
    body: "John the Baptist's introduction compresses the entire sacrificial system into one title: 'Behold, the Lamb of God, who takes away the sin of the world!' Behind it stands the Passover lamb whose blood turned away judgment, the daily lambs of the temple, and Isaiah's servant 'like a lamb that is led to the slaughter' (Isaiah 53:7). Yahweh Jireh's promise comes full circle: God has provided himself the lamb. In Revelation, the Lamb 'standing as though it had been slain' is the only one worthy to open history's scroll — heaven's worship centers on him forever.",
  },
  {
    id: "alpha-omega",
    name: "Alpha and Omega",
    meaning: "The beginning and the end — Lord of all history",
    reference: "Revelation 22:13",
    body: "'I am the Alpha and the Omega, the first and the last, the beginning and the end.' Jesus claims the first and last letters of the alphabet — and everything in between. In Isaiah, 'I am the first and I am the last' is Yahweh's own self-description (Isaiah 44:6); Revelation places it on the lips of the risen Christ without blinking. He precedes your story and outlasts it; no chapter of your life falls outside his authorship.",
  },
  {
    id: "king",
    name: "King of Kings & Lord of Lords",
    meaning: "Supreme ruler over every throne and power",
    reference: "Revelation 19:16",
    body: "The title Roman emperors and Persian monarchs coveted is written 'on his robe and on his thigh' as the rider on the white horse appears: 'King of kings and Lord of lords.' Caesar is not lord; Jesus is. The name relativizes every empire, election, and earthly power — they are all penultimate. One day 'at the name of Jesus every knee shall bow... and every tongue confess that Jesus Christ is Lord' (Philippians 2:10-11).",
  },
];

const I_AM_STATEMENTS: { statement: string; reference: string; note: string }[] = [
  {
    statement: "I am the bread of life",
    reference: "John 6:35",
    note: "After feeding the five thousand: he is the food that ends the soul's hunger — manna that never runs out.",
  },
  {
    statement: "I am the light of the world",
    reference: "John 8:12",
    note: "Spoken at the Feast of Booths amid blazing temple lamps: whoever follows him will never walk in darkness.",
  },
  {
    statement: "I am the door of the sheep",
    reference: "John 10:9",
    note: "The one entrance into safety, salvation, and pasture — 'if anyone enters by me, he will be saved.'",
  },
  {
    statement: "I am the good shepherd",
    reference: "John 10:11",
    note: "Yahweh Raah in person: 'the good shepherd lays down his life for the sheep.'",
  },
  {
    statement: "I am the resurrection and the life",
    reference: "John 11:25",
    note: "Said to grieving Martha before Lazarus' tomb: resurrection is not only an event — it is a Person.",
  },
  {
    statement: "I am the way, the truth, and the life",
    reference: "John 14:6",
    note: "Not a way-shower but the Way itself: 'No one comes to the Father except through me.'",
  },
  {
    statement: "I am the true vine",
    reference: "John 15:1",
    note: "Israel was the vine that failed (Psalm 80; Isaiah 5); Jesus is the true one. Apart from him we can do nothing — the verse this site is named for.",
  },
];

// ---------------------------------------------------------------------------
// Data — Names of the Holy Spirit
// ---------------------------------------------------------------------------
const SPIRIT_NAMES: { id: string; name: string; reference: string; body: string }[] = [
  {
    id: "paraclete",
    name: "Comforter / Advocate / Helper (Paraclete)",
    reference: "John 14:16",
    body: "On the night before the cross, Jesus promises: 'I will ask the Father, and he will give you another Helper (Greek: parakletos), to be with you forever.' The word means 'one called alongside' — a defense advocate, a comforter, a strengthener. 'Another' is precise: another of the same kind as Jesus. Everything Jesus was to the disciples in body, the Spirit is to believers everywhere, always. You have never prayed alone, grieved alone, or testified alone.",
  },
  {
    id: "truth",
    name: "Spirit of Truth",
    reference: "John 14:17; 16:13",
    body: "'When the Spirit of truth comes, he will guide you into all the truth.' In a world of spin, the Spirit's signature is reality: he authored Scripture (2 Peter 1:21), illuminates it to our hearts, convicts the world concerning sin and righteousness, and always — always — glorifies Jesus (John 16:14). A reliable test of any spiritual experience: does it magnify Christ and agree with truth?",
  },
  {
    id: "adoption",
    name: "Spirit of Adoption",
    reference: "Romans 8:15",
    body: "'You did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, \"Abba! Father!\"' The Spirit's deepest ministry is not power but belonging: he takes the orphan-hearted and teaches them to say 'Father' from the gut. He 'bears witness with our spirit that we are children of God' — assurance is his specialty.",
  },
  {
    id: "ruach",
    name: "Breath / Wind of God (Ruach)",
    reference: "Genesis 1:2; Ezekiel 37; John 3:8",
    body: "The Hebrew 'ruach' means breath, wind, and spirit all at once. The Spirit of God hovers over the waters at creation; the breath of God fills dry bones with life in Ezekiel's valley; Jesus tells Nicodemus the Spirit blows like the wind — unseen, uncontrollable, unmistakable in effect. The name reminds us the Spirit is as close as breathing and as free as weather: we don't manage him; we set our sails.",
  },
  {
    id: "spirit-of-christ",
    name: "Spirit of Christ",
    reference: "Romans 8:9; 1 Peter 1:11",
    body: "Paul can say 'Spirit of God' and 'Spirit of Christ' in the same breath (Romans 8:9), because the Spirit's work is to form Christ in us. He is how the risen Jesus indwells his people — producing Christ's character (the fruit of the Spirit is a portrait of Jesus), Christ's prayers (interceding with groanings too deep for words), and Christ's mission through the church.",
  },
  {
    id: "holiness",
    name: "Spirit of Holiness & of Glory",
    reference: "Romans 1:4; 1 Peter 4:14",
    body: "He is the Holy Spirit — holiness is his name, not just his preference. He sets people apart, sanctifies them over a lifetime, and rests on suffering believers as 'the Spirit of glory and of God' (1 Peter 4:14). The temple where his presence now dwells is you: 'Do you not know that your body is a temple of the Holy Spirit within you?' (1 Corinthians 6:19).",
  },
];

// ---------------------------------------------------------------------------
// Data — Quick-reference grid (Overview)
// ---------------------------------------------------------------------------
const QUICK_REF: { name: string; meaning: string; ref: string; group: string }[] = [
  { name: "Elohim", meaning: "God the Creator", ref: "Genesis 1:1", group: "Foundational" },
  { name: "El Elyon", meaning: "God Most High", ref: "Genesis 14:18-20", group: "Foundational" },
  { name: "El Shaddai", meaning: "God Almighty", ref: "Genesis 17:1", group: "Foundational" },
  { name: "El Olam", meaning: "Everlasting God", ref: "Genesis 21:33", group: "Foundational" },
  { name: "El Roi", meaning: "The God Who Sees", ref: "Genesis 16:13", group: "Foundational" },
  { name: "Adonai", meaning: "Lord, Master", ref: "Genesis 15:2", group: "Foundational" },
  { name: "Yahweh (YHWH)", meaning: "I AM — the covenant name", ref: "Exodus 3:14-15", group: "Covenant" },
  { name: "Yahweh Jireh", meaning: "The LORD Will Provide", ref: "Genesis 22:14", group: "Compound" },
  { name: "Yahweh Rapha", meaning: "The LORD Who Heals", ref: "Exodus 15:26", group: "Compound" },
  { name: "Yahweh Nissi", meaning: "The LORD My Banner", ref: "Exodus 17:15", group: "Compound" },
  { name: "Yahweh Shalom", meaning: "The LORD Is Peace", ref: "Judges 6:24", group: "Compound" },
  { name: "Yahweh Sabaoth", meaning: "LORD of Hosts", ref: "1 Samuel 1:3", group: "Compound" },
  { name: "Yahweh Raah", meaning: "The LORD My Shepherd", ref: "Psalm 23:1", group: "Compound" },
  { name: "Yahweh Tsidkenu", meaning: "The LORD Our Righteousness", ref: "Jeremiah 23:6", group: "Compound" },
  { name: "Yahweh Shammah", meaning: "The LORD Is There", ref: "Ezekiel 48:35", group: "Compound" },
  { name: "Jesus (Yeshua)", meaning: "Yahweh Saves", ref: "Matthew 1:21", group: "Jesus" },
  { name: "Immanuel", meaning: "God With Us", ref: "Matthew 1:23", group: "Jesus" },
  { name: "Paraclete", meaning: "Helper / Advocate", ref: "John 14:16", group: "Spirit" },
];

// ---------------------------------------------------------------------------
// Data — Journal
// ---------------------------------------------------------------------------
type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const JOURNAL_KEY = "vine_names_journal";

const JOURNAL_PROMPTS = [
  "Which name of God do you most need right now, and why?",
  "Where has God been El Roi — the God who sees you?",
  "Write a prayer using three of God's names.",
  "Which 'I AM' statement of Jesus speaks to your current season?",
];

// ---------------------------------------------------------------------------
// Data — Videos (IDs reused from existing Vine pages on this theme)
// ---------------------------------------------------------------------------
const VIDEOS: { videoId: string; title: string; channel: string; description: string }[] = [
  {
    videoId: "AzmYV8GNAIM",
    title: "The Names of God — Who Is God?",
    channel: "BibleProject",
    description:
      "An overview of how the Bible reveals God's character through his names, exploring the meaning of Yahweh and the divine identity.",
  },
  {
    videoId: "Cus-z1hgAXw",
    title: "YHWH / The Name of God",
    channel: "BibleProject",
    description:
      "A study of the Tetragrammaton (YHWH), why it is rendered 'the LORD' in our Bibles, and what it teaches about God's eternal, covenant character.",
  },
  {
    videoId: "iVwauTiyFjM",
    title: "El Shaddai and the Names of God in Genesis",
    channel: "Bible Study",
    description:
      "An exploration of the names God revealed to the patriarchs — El Shaddai, El Elyon, El Roi — and what they meant for Israel's faith.",
  },
  {
    videoId: "3Dv4-n6OYGI",
    title: "Yahweh: The Personal Name of God",
    channel: "Theology Explained",
    description:
      "A teaching on the covenant name Yahweh and the compound names — Jireh, Rapha, Nissi, Shalom — and their significance for worship today.",
  },
];

// ---------------------------------------------------------------------------
// Small shared UI helpers
// ---------------------------------------------------------------------------
function SectionTitle({ children, color = GOLD }: { children: React.ReactNode; color?: string }) {
  return (
    <h2 style={{ fontSize: "1.45rem", fontWeight: 800, color, margin: "0 0 10px" }}>{children}</h2>
  );
}

function VerseBlock({ reference, text, accent = GOLD }: { reference: string; text: string; accent?: string }) {
  return (
    <blockquote
      style={{
        margin: "0 0 14px",
        padding: "14px 18px",
        background: BG,
        borderLeft: `3px solid ${accent}`,
        border: `1px solid ${BORDER}`,
        borderLeftWidth: 3,
        borderLeftColor: accent,
        borderRadius: 10,
      }}
    >
      <p style={{ color: TEXT, fontStyle: "italic", fontSize: 14.5, lineHeight: 1.7, margin: "0 0 6px" }}>
        &ldquo;{text}&rdquo;
      </p>
      <cite style={{ color: accent, fontSize: 12.5, fontWeight: 700, fontStyle: "normal" }}>— {reference}</cite>
    </blockquote>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function NamesOfGodStudy() {
  const [activeTab, setActiveTab] = usePersistedState<NamesTab>("vine_names_tab", "overview");
  const [openCard, setOpenCard] = useState<string | null>(null);

  // Journal state ------------------------------------------------------------
  const [entries, setEntries] = useState<JEntry[]>(() => {
    try {
      const saved = localStorage.getItem(JOURNAL_KEY);
      return saved ? (JSON.parse(saved) as JEntry[]) : [];
    } catch {
      return [];
    }
  });
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(JOURNAL_KEY, JSON.stringify(entries));
    } catch {
      /* noop */
    }
  }, [entries]);

  const saveEntry = useCallback(() => {
    if (!verse.trim() && !reflection.trim() && !prayer.trim()) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      verse: verse.trim(),
      reflection: reflection.trim(),
      prayer: prayer.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setVerse("");
    setReflection("");
    setPrayer("");
  }, [verse, reflection, prayer]);

  const deleteEntry = useCallback((id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  }, []);

  const applyPrompt = useCallback((p: string) => {
    setReflection(prev => (prev ? prev + "\n\n" + p + "\n" : p + "\n"));
  }, []);

  const toggleCard = (id: string) => setOpenCard(prev => (prev === id ? null : id));

  // Accordion card used by Foundational and Compound name tabs ---------------
  const NameAccordion = ({ card, accent, index }: { card: NameCard; accent: string; index: number }) => {
    const isOpen = openCard === card.id;
    return (
      <div
        style={{
          background: CARD,
          border: `1px solid ${isOpen ? accent + "66" : BORDER}`,
          borderRadius: 14,
          overflow: "hidden",
          transition: "border-color 0.15s",
        }}
      >
        <button
          onClick={() => toggleCard(card.id)}
          style={{
            width: "100%",
            textAlign: "left",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "16px 18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 12,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: accent + "22",
                  color: accent,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </span>
              <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>{card.name}</span>
              <span style={{ color: accent, fontSize: 16 }}>{card.hebrew}</span>
            </div>
            <div style={{ color: MUTED, fontSize: 13.5, marginBottom: 6 }}>{card.meaning}</div>
            <span
              style={{
                background: accent + "18",
                color: accent,
                border: `1px solid ${accent}44`,
                borderRadius: 6,
                padding: "2px 8px",
                fontSize: 11.5,
                fontWeight: 700,
              }}
            >
              First appears: {card.reference}
            </span>
          </div>
          <span style={{ color: MUTED, fontSize: 14, marginTop: 4 }}>{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && (
          <div style={{ padding: "0 18px 18px" }}>
            <div style={{ marginBottom: 14 }}>
              <div style={{ color: accent, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
                The Story
              </div>
              <p style={{ color: TEXT, opacity: 0.9, fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>{card.story}</p>
            </div>
            <div style={{ marginBottom: 14 }}>
              <div style={{ color: accent, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
                What It Reveals About God
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{card.reveals}</p>
            </div>
            <div style={{ marginBottom: 14 }}>
              <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
                Living It Today
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{card.application}</p>
            </div>
            <VerseBlock reference={card.keyVerse} text={card.keyVerseText} accent={accent} />
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
        <main style={{ maxWidth: 960, margin: "0 auto", padding: "40px 20px 60px" }}>
          {/* ----------------------------------------------------------------- */}
          {/* Hero */}
          {/* ----------------------------------------------------------------- */}
          <div style={{ marginBottom: 10 }}>
            <span
              style={{
                background: GOLD + "22",
                color: GOLD,
                padding: "3px 12px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1.2,
                textTransform: "uppercase",
              }}
            >
              Interactive Study Guide
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: 14,
              background: "linear-gradient(90deg, #fff, #e8c89a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Names of God
          </h1>
          <p style={{ color: MUTED, fontSize: "1.08rem", lineHeight: 1.7, marginBottom: 26, maxWidth: 720 }}>
            In Scripture, God does not stay anonymous. He introduces himself — name by name, story by story — to
            shepherds and slaves, patriarchs and prophets. From Elohim the Creator to Yahweh the covenant-keeper, from
            the LORD Who Provides to the great I AM standing in a Galilean synagogue, every name is a window into who
            God is and an invitation to know him. &ldquo;Those who know your name put their trust in you&rdquo;
            (Psalm 9:10).
          </p>

          {/* Stats strip */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
            {[
              { n: "6", l: "Foundational Names" },
              { n: "8", l: "Compound Names" },
              { n: "~6,800", l: "Uses of YHWH" },
              { n: "7", l: "I AM Statements" },
            ].map(s => (
              <div
                key={s.l}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: "12px 18px",
                  flex: "1 1 130px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: GOLD }}>{s.n}</div>
                <div style={{ fontSize: 11.5, color: MUTED, textTransform: "uppercase", letterSpacing: 1 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* Tab bar */}
          {/* ----------------------------------------------------------------- */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 30,
              borderBottom: `1px solid ${BORDER}`,
              paddingBottom: 14,
              flexWrap: "wrap",
            }}
          >
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTab(t.id);
                  setOpenCard(null);
                }}
                style={{
                  padding: "8px 16px",
                  borderRadius: 20,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 600,
                  background: activeTab === t.id ? GOLD : CARD,
                  color: activeTab === t.id ? "#fff" : MUTED,
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ================================================================= */}
          {/* OVERVIEW */}
          {/* ================================================================= */}
          {activeTab === "overview" && (
            <div>
              <SectionTitle>Why Names Matter</SectionTitle>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 15, marginBottom: 18 }}>
                In the modern West, a name is mostly a label — something on a driver&apos;s license. In the Hebrew
                world, a name (<em>shem</em>) carried a person&apos;s character, essence, and destiny. To know
                someone&apos;s name was to know something true about them; to act &ldquo;in someone&apos;s name&rdquo;
                was to carry their authority. Abigail can say of her husband, &ldquo;as his name is, so is he. Nabal
                [Fool] is his name, and folly is with him&rdquo; (1 Samuel 25:25). When God changes a destiny, he
                changes a name: Abram becomes Abraham, Sarai becomes Sarah, Jacob the heel-grabber becomes Israel.
                So when God reveals his <em>own</em> names, he is not handing out labels — he is unveiling his heart.
              </p>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20, marginBottom: 22 }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: TEXT, margin: "0 0 10px" }}>
                  A God Who Introduces Himself — Progressively
                </h3>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: "0 0 12px" }}>
                  God did not dump his whole self-revelation on humanity at once. He unveiled himself name by name,
                  moment by moment, like a friendship deepening over decades. To the patriarchs he was known chiefly as
                  El Shaddai, God Almighty (Exodus 6:3); at the burning bush he disclosed the covenant name Yahweh; in
                  the wilderness and the monarchy and the exile, compound names bloomed out of crisis — Provider,
                  Healer, Banner, Peace, Shepherd, Righteousness, There. And &ldquo;in these last days he has spoken to
                  us by his Son&rdquo; (Hebrews 1:2), whose very name — Yeshua, &ldquo;Yahweh saves&rdquo; — gathers the
                  whole story into a person.
                </p>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
                  Jesus could pray, &ldquo;I have manifested your name to the people whom you gave me&rdquo; (John
                  17:6). Knowing God&apos;s names is not trivia; it is the curriculum of knowing God.
                </p>
              </div>

              <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: 20, marginBottom: 22 }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: PURPLE, margin: "0 0 10px" }}>
                  Exodus 3 — The Great Name Revelation
                </h3>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
                  The hinge of the whole subject is a bush that burned and was not consumed. Moses asks the question
                  everyone in Egypt will ask: &ldquo;What is his name?&rdquo; God answers, &ldquo;I AM WHO I AM&rdquo;
                  — <em>ehyeh asher ehyeh</em> — and gives the name Yahweh as &ldquo;my name forever... my memorial name
                  to all generations&rdquo; (Exodus 3:13-15). It is the only name God explicitly designates as his
                  forever-name, and the entire Yahweh tab of this guide is devoted to it.
                </p>
              </div>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20, marginBottom: 22 }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: TEXT, margin: "0 0 10px" }}>
                  The Reverence Around the Name
                </h3>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: "0 0 12px" }}>
                  The four Hebrew consonants of the divine name — YHWH, called the <strong style={{ color: TEXT }}>Tetragrammaton</strong> —
                  came to be regarded as too holy to pronounce. Out of reverence for the command not to take the
                  LORD&apos;s name in vain, Jewish readers substituted <strong style={{ color: TEXT }}>Adonai</strong>{" "}
                  (&ldquo;Lord&rdquo;) when reading aloud, or simply said <strong style={{ color: TEXT }}>HaShem</strong> —
                  &ldquo;the Name.&rdquo; Ancient scribes would wash, or take up a fresh pen, before writing it.
                  Medieval scribes attached Adonai&apos;s vowel points to the consonants YHWH as a reading reminder,
                  which is where the hybrid form &ldquo;Jehovah&rdquo; later came from.
                </p>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
                  English Bibles carry this reverence forward: wherever you see <strong style={{ color: GOLD }}>LORD</strong>{" "}
                  in small capitals, the Hebrew underneath is YHWH. &ldquo;Lord&rdquo; in regular type translates
                  Adonai. Once you know the code, your Old Testament opens up.
                </p>
              </div>

              <div style={{ background: `${GREEN}14`, border: `1px solid ${GREEN}44`, borderRadius: 14, padding: 20, marginBottom: 26 }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: GREEN, margin: "0 0 10px" }}>
                  Why This Deepens Prayer and Worship
                </h3>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
                  &ldquo;The name of the LORD is a strong tower; the righteous man runs into it and is safe&rdquo;
                  (Proverbs 18:10). Praying the names of God turns vague spirituality into address — you are no longer
                  sending wishes into the dark but speaking to the Provider on your mount Moriah, the Healer at your
                  Marah, the Peace in your winepress. Each name is a handle on a real attribute of a real God. Learn
                  them, and your prayers gain both reverence (he is the LORD of hosts) and intimacy (he is the God who
                  sees <em>me</em>). The Journal tab will help you practice.
                </p>
              </div>

              {/* Quick-reference grid */}
              <SectionTitle color={GOLD}>Quick Reference — Every Name in This Guide</SectionTitle>
              <div
                style={{
                  display: "grid",
                  gap: 10,
                  gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
                  marginTop: 14,
                }}
              >
                {QUICK_REF.map(q => (
                  <div
                    key={q.name}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      padding: "12px 14px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginBottom: 4 }}>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{q.name}</span>
                      <span style={{ color: GOLD, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, whiteSpace: "nowrap" }}>
                        {q.group}
                      </span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 13, marginBottom: 4 }}>{q.meaning}</div>
                    <div style={{ color: PURPLE, fontSize: 12, fontWeight: 600 }}>{q.ref}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* ELOHIM & FOUNDATIONAL NAMES */}
          {/* ================================================================= */}
          {activeTab === "elohim" && (
            <div>
              <SectionTitle>Elohim &amp; the Foundational Names</SectionTitle>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14.5, marginBottom: 22, maxWidth: 760 }}>
                Before the covenant name was disclosed at the burning bush, God revealed himself through a family of
                names built on <em>El</em> — the ancient Semitic word for deity, sharpened in Scripture to describe the
                one true God. Each was given in a real story to a real person: a priest-king blessing a battle-weary
                nomad, a runaway slave at a desert spring, a ninety-nine-year-old waiting on a promise. Open each card
                for the story, the meaning, and what it asks of you.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {FOUNDATIONAL_NAMES.map((card, i) => (
                  <NameAccordion key={card.id} card={card} accent={PURPLE} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* YAHWEH */}
          {/* ================================================================= */}
          {activeTab === "yahweh" && (
            <div>
              <SectionTitle>Yahweh — The Covenant Name</SectionTitle>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14.5, marginBottom: 22, maxWidth: 760 }}>
                Of all God&apos;s names, one stands alone: the four consonants <span style={{ color: GOLD, fontWeight: 700 }}>YHWH</span>{" "}
                (יהוה) — the name God himself declared &ldquo;my name forever&rdquo; (Exodus 3:15). It appears roughly
                6,800 times in the Old Testament, more than every other divine name combined.
              </p>

              {/* Burning bush */}
              <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 14, padding: 22, marginBottom: 18 }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: GOLD, margin: "0 0 10px" }}>
                  The Burning Bush — Exodus 3:13-15
                </h3>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.78, margin: "0 0 12px" }}>
                  Moses, an eighty-year-old fugitive shepherding his father-in-law&apos;s flock, turns aside to see a
                  bush that burns without burning up — and meets the God of Abraham, Isaac, and Jacob. Commissioned to
                  confront Pharaoh, Moses asks the decisive question: &ldquo;If they ask me, &lsquo;What is his
                  name?&rsquo; what shall I say to them?&rdquo; God answers: <em>ehyeh asher ehyeh</em> —{" "}
                  &ldquo;I AM WHO I AM&rdquo; (or &ldquo;I will be who I will be&rdquo;). &ldquo;Say this to the people
                  of Israel: I AM has sent me to you.&rdquo;
                </p>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.78, margin: 0 }}>
                  Then God shifts from first person (&ldquo;Ehyeh,&rdquo; I am) to the third-person form the people will
                  use: <strong style={{ color: TEXT }}>Yahweh</strong> — &ldquo;He is&rdquo; / &ldquo;He will
                  be.&rdquo; &ldquo;This is my name forever, and thus I am to be remembered throughout all
                  generations.&rdquo; In Egypt, gods were named so they could be managed by ritual. This name refuses
                  management: God defines himself by himself.
                </p>
              </div>

              {/* Meaning */}
              <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", marginBottom: 18 }}>
                {[
                  {
                    h: "Self-Existence",
                    body: "Everything else that exists received its existence; Yahweh simply is. He depends on nothing — no origin, no fuel, no cause. Theologians call this aseity. The bush is the picture: it burns, but is not consumed, because the fire needs nothing from the bush. A God like that cannot be exhausted by your need.",
                  },
                  {
                    h: "Eternal Presence",
                    body: "'I will be who I will be' carries promise as well as being. When Moses objected 'Who am I?', God had already answered: 'But I will be (ehyeh) with you' (Exodus 3:12). The name guarantees presence in every tense — the One who was, and is, and is to come (Revelation 1:8).",
                  },
                  {
                    h: "Covenant Faithfulness",
                    body: "Yahweh is the name God uses when he binds himself to people. 'I am Yahweh... I will take you to be my people, and I will be your God' (Exodus 6:6-7). When God proclaims this name to Moses, he defines it morally: 'Yahweh, Yahweh, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness' (Exodus 34:6).",
                  },
                ].map(item => (
                  <div key={item.h} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 18 }}>
                    <div style={{ color: GOLD, fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{item.h}</div>
                    <p style={{ color: MUTED, fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                  </div>
                ))}
              </div>

              {/* LORD in small caps */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20, marginBottom: 18 }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: TEXT, margin: "0 0 10px" }}>
                  ~6,800 Occurrences — Hiding in Plain Sight as &ldquo;LORD&rdquo;
                </h3>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
                  Yahweh is far and away the most common name for God in the Old Testament — about 6,800 occurrences
                  across nearly every book. Following the Jewish practice of reverent substitution, English translators
                  render it <strong style={{ color: GOLD }}>LORD</strong> in small capitals (and &ldquo;GOD&rdquo; when
                  paired with Adonai, as in &ldquo;the Lord GOD&rdquo;). So &ldquo;The LORD is my shepherd&rdquo; really
                  says, &ldquo;<em>Yahweh</em> is my shepherd.&rdquo; Try re-reading familiar verses with the name
                  restored — &ldquo;Yahweh is my light and my salvation&rdquo; — and feel how personal they become.
                </p>
              </div>

              {/* Covenant keeper */}
              <div style={{ background: `${GREEN}14`, border: `1px solid ${GREEN}44`, borderRadius: 14, padding: 20, marginBottom: 18 }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: GREEN, margin: "0 0 10px" }}>
                  The Name and the Covenant — The God Who Keeps Promises
                </h3>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: "0 0 12px" }}>
                  In Exodus 6:2-8 God stakes everything on this name: &ldquo;I am Yahweh. I appeared to Abraham, to
                  Isaac, and to Jacob, as God Almighty, but by my name Yahweh I did not make myself fully known to
                  them... I have remembered my covenant.&rdquo; Then come seven &ldquo;I will&rdquo; promises — I will
                  bring you out, deliver you, redeem you, take you as my people — each sealed with &ldquo;I am
                  Yahweh.&rdquo; The patriarchs had received promises; the exodus generation watched Yahweh keep them.
                </p>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
                  That is what the name means in practice: the God whose word does not fail across centuries. Every
                  compound name in the next tab — Provider, Healer, Banner, Peace — is this covenant name with a
                  promise attached.
                </p>
              </div>

              {/* Jesus and I AM */}
              <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: 20, marginBottom: 18 }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: PURPLE, margin: "0 0 10px" }}>
                  Jesus and the Name — &ldquo;Before Abraham Was, I AM&rdquo;
                </h3>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: "0 0 12px" }}>
                  In John 8, a debate about Abraham reaches its breaking point when Jesus declares: &ldquo;Truly, truly,
                  I say to you, before Abraham was, <em>I am</em>&rdquo; (John 8:58). Not &ldquo;I was&rdquo; — I AM.
                  His hearers understood the claim instantly: &ldquo;they picked up stones to throw at him,&rdquo; the
                  penalty for blasphemy. In Gethsemane, when Jesus says &ldquo;I am he&rdquo; (Greek: <em>egō eimi</em>),
                  the arresting soldiers &ldquo;drew back and fell to the ground&rdquo; (John 18:5-6). The seven great
                  &ldquo;I am&rdquo; sayings of John (see the Names of Jesus tab) ride on the same current: the voice
                  from the bush now has a human face.
                </p>
                <VerseBlock
                  reference="John 8:58"
                  text="Truly, truly, I say to you, before Abraham was, I am."
                  accent={PURPLE}
                />
              </div>

              {/* Theophoric names */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: TEXT, margin: "0 0 10px" }}>
                  The Name Hidden in Names
                </h3>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: "0 0 14px" }}>
                  Israel carried the divine name in its own names. Hundreds of Hebrew names embed a shortened form of
                  Yahweh — &ldquo;Yah&rdquo; or &ldquo;Yahu&rdquo; — turning a generation&apos;s roll call into a
                  confession of faith:
                </p>
                <div style={{ display: "grid", gap: 8, gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
                  {[
                    { n: "Elijah (Eliyahu)", m: "'My God is Yah'" },
                    { n: "Isaiah (Yeshayahu)", m: "'Yah is salvation'" },
                    { n: "Jeremiah (Yirmeyahu)", m: "'Yah exalts'" },
                    { n: "Hezekiah (Chizkiyahu)", m: "'Yah strengthens'" },
                    { n: "Zechariah (Zekharyah)", m: "'Yah remembers'" },
                    { n: "Hallelujah", m: "'Praise Yah!' — a name turned into worship" },
                  ].map(x => (
                    <div key={x.n} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "10px 12px" }}>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 13.5 }}>{x.n}</div>
                      <div style={{ color: GOLD, fontSize: 12.5 }}>{x.m}</div>
                    </div>
                  ))}
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "14px 0 0" }}>
                  Parents in Israel branded their children with the covenant name so that every introduction preached.
                  And the greatest theophoric name of all is <em>Yeshua</em> — Jesus — &ldquo;Yahweh saves.&rdquo;
                </p>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* COMPOUND NAMES */}
          {/* ================================================================= */}
          {activeTab === "compound" && (
            <div>
              <SectionTitle>The Compound Names of Yahweh</SectionTitle>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14.5, marginBottom: 22, maxWidth: 760 }}>
                The covenant name rarely stands alone in Israel&apos;s memory — it gathers stories. At a place of
                testing, a battlefield, a bitter spring, a winepress, God attached promises to his name, and his people
                built altars to remember. Notice the pattern as you read: nearly every one of these names was revealed
                in a crisis. Open each card for the story behind the name.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {COMPOUND_NAMES.map((card, i) => (
                  <NameAccordion key={card.id} card={card} accent={GOLD} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* NAMES OF JESUS */}
          {/* ================================================================= */}
          {activeTab === "jesus" && (
            <div>
              <SectionTitle color={PURPLE}>The Names of Jesus</SectionTitle>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14.5, marginBottom: 22, maxWidth: 760 }}>
                The New Testament lavishes names and titles on Jesus — by some counts more than a hundred. Each one
                picks up a thread from the Old Testament and ties it to him. Here are the great ones, ending with the
                seven &ldquo;I AM&rdquo; statements where Jesus takes the burning-bush name onto his own lips.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 30 }}>
                {JESUS_NAMES.map((jn, i) => {
                  const isOpen = openCard === jn.id;
                  return (
                    <div
                      key={jn.id}
                      style={{
                        background: CARD,
                        border: `1px solid ${isOpen ? PURPLE + "66" : BORDER}`,
                        borderRadius: 14,
                        overflow: "hidden",
                      }}
                    >
                      <button
                        onClick={() => toggleCard(jn.id)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "15px 18px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          gap: 12,
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5, flexWrap: "wrap" }}>
                            <span
                              style={{
                                width: 26,
                                height: 26,
                                borderRadius: "50%",
                                background: PURPLE + "22",
                                color: PURPLE,
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 13,
                                fontWeight: 800,
                                flexShrink: 0,
                              }}
                            >
                              {i + 1}
                            </span>
                            <span style={{ color: TEXT, fontWeight: 800, fontSize: 16.5 }}>{jn.name}</span>
                          </div>
                          <div style={{ color: MUTED, fontSize: 13.5, marginBottom: 4 }}>{jn.meaning}</div>
                          <span style={{ color: PURPLE, fontSize: 12.5, fontWeight: 700 }}>{jn.reference}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 14, marginTop: 4 }}>{isOpen ? "▲" : "▼"}</span>
                      </button>
                      {isOpen && (
                        <div style={{ padding: "0 18px 18px" }}>
                          <p style={{ color: TEXT, opacity: 0.88, fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>{jn.body}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Seven I AM statements */}
              <div style={{ background: `linear-gradient(135deg, ${PURPLE}18, transparent)`, border: `1px solid ${PURPLE}44`, borderRadius: 16, padding: 22 }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: PURPLE, margin: "0 0 8px" }}>
                  The Seven &ldquo;I AM&rdquo; Statements in John
                </h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 16px" }}>
                  Seven times in John&apos;s Gospel, Jesus says <em>egō eimi</em> — &ldquo;I am&rdquo; — with a
                  predicate, deliberately echoing the name from the burning bush. Taken as a set, they answer the
                  soul&apos;s seven great needs: hunger, darkness, belonging, guidance, death, direction, and
                  fruitfulness.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {I_AM_STATEMENTS.map((s, i) => (
                    <div
                      key={s.reference}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                        background: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 10,
                        padding: "12px 14px",
                      }}
                    >
                      <span
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: PURPLE + "22",
                          color: PURPLE,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 800,
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "baseline" }}>
                          <span style={{ color: TEXT, fontWeight: 700, fontSize: 14.5 }}>&ldquo;{s.statement}&rdquo;</span>
                          <span style={{ color: PURPLE, fontSize: 12, fontWeight: 700 }}>{s.reference}</span>
                        </div>
                        <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: "4px 0 0" }}>{s.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* HOLY SPIRIT */}
          {/* ================================================================= */}
          {activeTab === "spirit" && (
            <div>
              <SectionTitle color={GREEN}>The Holy Spirit&apos;s Names</SectionTitle>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14.5, marginBottom: 22, maxWidth: 760 }}>
                The Spirit is the most personally present and the most easily overlooked member of the Trinity — which
                is fitting, since his delight is to shine the light on Jesus rather than himself (John 16:14). But he
                too is named, and his names describe what he is actively doing in you right now.
              </p>
              <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                {SPIRIT_NAMES.map(sn => (
                  <div key={sn.id} style={{ background: CARD, border: `1px solid ${GREEN}33`, borderRadius: 14, padding: 18 }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{sn.name}</div>
                    <div style={{ color: GOLD, fontSize: 12.5, fontWeight: 700, marginBottom: 10 }}>{sn.reference}</div>
                    <p style={{ color: MUTED, fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>{sn.body}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: `${GREEN}14`, border: `1px solid ${GREEN}44`, borderRadius: 14, padding: 20, marginTop: 18 }}>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
                  Put the names together and a portrait emerges: One called alongside you forever, telling you the
                  truth, teaching you to cry &ldquo;Abba,&rdquo; breathing life into your dry bones, and forming Christ
                  in you. The Christian life is not self-improvement; it is keeping in step with a named, personal
                  Spirit (Galatians 5:25).
                </p>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* THEMES */}
          {/* ================================================================= */}
          {activeTab === "themes" && (
            <div>
              <SectionTitle>What the Names Teach Together</SectionTitle>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14.5, marginBottom: 22, maxWidth: 760 }}>
                Step back from the individual names and patterns emerge — a theology written not in abstractions but in
                introductions. Five threads run through the whole tapestry.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 26 }}>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                  <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.05rem", margin: "0 0 8px" }}>
                    1. Revelation Is Progressive
                  </h3>
                  <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
                    God unveils himself the way trust is built — over time, in deepening installments. Elohim the
                    Creator gives way to El Shaddai the promise-keeper of the patriarchs; Exodus 6:3 marks the
                    threshold where Yahweh, the covenant name, takes center stage; the prophets stack promise upon
                    promise onto that name; and Hebrews 1:1-2 announces the finale: &ldquo;in these last days he has
                    spoken to us by his Son.&rdquo; God is not coy — he is a wise revealer, giving each generation what
                    it could bear and pointing every name toward Christ.
                  </p>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                  <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.05rem", margin: "0 0 8px" }}>
                    2. God Introduces Himself in Crisis
                  </h3>
                  <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
                    Run down the list and notice where the names were born: El Roi to a slave fleeing abuse in the
                    wilderness. Yahweh Jireh to a father on Moriah with a knife in his hand. Yahweh Rapha beside
                    undrinkable water. Yahweh Nissi mid-battle. Yahweh Shalom to a man hiding in a winepress. Yahweh
                    Sabaoth to a weeping, barren woman. Yahweh Shammah to exiles who had watched the glory leave. Almost
                    none of God&apos;s names were revealed on a good day. This is the Bible&apos;s quiet pastoral
                    genius: your crisis is not where God&apos;s revelation stops — it is historically where it starts.
                  </p>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                  <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.05rem", margin: "0 0 8px" }}>
                    3. God Is a Named Person, Not a Force
                  </h3>
                  <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
                    Forces don&apos;t have names; persons do. Gravity never introduced itself to anyone. The God of the
                    Bible has a name, gives it freely, attaches it to promises, and invites people to call on it —
                    &ldquo;everyone who calls on the name of the LORD shall be saved&rdquo; (Joel 2:32; Romans 10:13).
                    You cannot have a relationship with &ldquo;the universe,&rdquo; but you can know, trust, grieve
                    before, argue with, and love a named God. Every name in this guide is evidence that he wants to be
                    known, not merely believed in.
                  </p>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                  <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.05rem", margin: "0 0 8px" }}>
                    4. Reverence and Intimacy, Held Together
                  </h3>
                  <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
                    Israel guarded the name so carefully it went unpronounced for centuries — and yet Hagar names God
                    to his face, David calls the LORD of hosts &ldquo;my shepherd,&rdquo; and Jesus teaches us to pray
                    &ldquo;Our Father... hallowed be your name&rdquo; in a single breath. Scripture refuses to choose
                    between awe and access. A faith that is all reverence becomes cold; a faith that is all intimacy
                    becomes casual. The names train us in both: he is Yahweh Sabaoth — and he is Abba.
                  </p>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                  <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.05rem", margin: "0 0 8px" }}>
                    5. The Names Are Meant to Be Prayed
                  </h3>
                  <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
                    &ldquo;Those who know your name put their trust in you&rdquo; (Psalm 9:10). The names were given in
                    worship contexts — altars, songs, vows — and they come alive again when they return there. Praying
                    God&apos;s names anchors your requests in his revealed character instead of your fluctuating
                    feelings.
                  </p>
                </div>
              </div>

              {/* How-to */}
              <div style={{ background: `linear-gradient(135deg, ${GREEN}18, transparent)`, border: `1px solid ${GREEN}44`, borderRadius: 16, padding: 22 }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: "1.15rem", margin: "0 0 10px" }}>
                  Praying the Names — A Simple Practice
                </h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 16px" }}>
                  Try this as a week-long devotional rhythm — one name per day:
                </p>
                <ol style={{ margin: 0, paddingLeft: 22, color: MUTED, fontSize: 14.5, lineHeight: 1.85, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li>
                    <strong style={{ color: TEXT }}>Choose one name</strong> that meets your current need — Provider for
                    financial fear, Rapha for illness, Shalom for anxiety, El Roi for loneliness.
                  </li>
                  <li>
                    <strong style={{ color: TEXT }}>Read its story</strong> in Scripture (each card in this guide gives
                    the reference). Names mean most inside their narratives.
                  </li>
                  <li>
                    <strong style={{ color: TEXT }}>Address God by the name</strong> out loud: &ldquo;Yahweh Shalom,
                    Lord of Peace...&rdquo; — letting the name set the tone of the prayer.
                  </li>
                  <li>
                    <strong style={{ color: TEXT }}>Turn the meaning into petition and praise</strong>: ask him to be to
                    you what the name declares, and thank him for the times he already has been.
                  </li>
                  <li>
                    <strong style={{ color: TEXT }}>Carry the name through the day</strong> — a breath prayer
                    (&ldquo;You are the God who sees me&rdquo;) returned to at red lights, inboxes, and 3 a.m. wakings.
                  </li>
                </ol>
                <p style={{ color: MUTED, fontSize: 13.5, fontStyle: "italic", lineHeight: 1.7, margin: "16px 0 0" }}>
                  Example: &ldquo;Yahweh Jireh, you saw this need before I did. You provided a ram for Abraham and a
                  Lamb for the world; I trust you to see to what I lack today. Yahweh Shalom, be peace in my house
                  tonight. El Roi, you see the one I&apos;m worried about — look after them. Amen.&rdquo;
                </p>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* JOURNAL */}
          {/* ================================================================= */}
          {activeTab === "journal" && (
            <div>
              <SectionTitle color={GREEN}>Name Journal</SectionTitle>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 18, fontSize: 14, maxWidth: 720 }}>
                The names of God become yours when you meet them in your own story. Record what you&apos;re seeing —
                which name you needed, where he showed up under it, and how you want to respond. Entries are saved
                privately on this device.
              </p>

              {/* Prompts */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>
                  Need a starting point? Tap a prompt:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {JOURNAL_PROMPTS.map(p => (
                    <button
                      key={p}
                      onClick={() => applyPrompt(p)}
                      style={{
                        background: CARD,
                        border: `1px solid ${GREEN}44`,
                        color: TEXT,
                        borderRadius: 10,
                        padding: "8px 14px",
                        fontSize: 13,
                        cursor: "pointer",
                        textAlign: "left",
                        lineHeight: 1.5,
                      }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Entry form */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
                    NAME OF GOD / VERSE
                  </label>
                  <input
                    value={verse}
                    onChange={e => setVerse(e.target.value)}
                    placeholder="e.g., El Roi — Genesis 16:13, or Yahweh Shalom — Judges 6:24"
                    style={{
                      width: "100%",
                      background: BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 8,
                      padding: "10px 14px",
                      color: TEXT,
                      fontSize: 14,
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
                    REFLECTION
                  </label>
                  <textarea
                    value={reflection}
                    onChange={e => setReflection(e.target.value)}
                    placeholder="Which name of God meets your life right now — and where have you seen him live up to it?"
                    rows={5}
                    style={{
                      width: "100%",
                      background: BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 8,
                      padding: "10px 14px",
                      color: TEXT,
                      fontSize: 14,
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
                    PRAYER
                  </label>
                  <textarea
                    value={prayer}
                    onChange={e => setPrayer(e.target.value)}
                    placeholder="Address God by name and respond to him..."
                    rows={3}
                    style={{
                      width: "100%",
                      background: BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 8,
                      padding: "10px 14px",
                      color: TEXT,
                      fontSize: 14,
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <button
                  onClick={saveEntry}
                  style={{
                    background: GREEN,
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    padding: "11px 28px",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  Save Entry
                </button>
              </div>

              {/* Saved entries */}
              {entries.length > 0 ? (
                <div>
                  <h3 style={{ fontWeight: 700, color: MUTED, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1, fontSize: 12 }}>
                    Saved Entries ({entries.length})
                  </h3>
                  {entries.map(e => (
                    <div
                      key={e.id}
                      style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, gap: 10 }}>
                        <span style={{ color: GREEN, fontWeight: 700, fontSize: 13 }}>{e.verse || "No name/verse noted"}</span>
                        <div style={{ display: "flex", gap: 12, alignItems: "center", flexShrink: 0 }}>
                          <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                          <button
                            onClick={() => deleteEntry(e.id)}
                            aria-label="Delete entry"
                            style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                      {e.reflection && (
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8, whiteSpace: "pre-wrap" }}>
                          {e.reflection}
                        </p>
                      )}
                      {e.prayer && (
                        <p
                          style={{
                            color: MUTED,
                            fontSize: 13,
                            fontStyle: "italic",
                            borderTop: `1px solid ${BORDER}`,
                            paddingTop: 8,
                            marginTop: 8,
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          Prayer: {e.prayer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: MUTED, fontSize: 13.5, fontStyle: "italic" }}>
                  No entries yet. Hagar named God from her own story — &ldquo;You are a God of seeing.&rdquo; Start
                  yours above.
                </p>
              )}
            </div>
          )}

          {/* ================================================================= */}
          {/* VIDEOS */}
          {/* ================================================================= */}
          {activeTab === "videos" && (
            <div>
              <SectionTitle color={PURPLE}>Video Resources</SectionTitle>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 24, fontSize: 14, maxWidth: 720 }}>
                Go deeper with these teachings on the divine name and the names of God across Scripture.
              </p>
              <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                {VIDEOS.map(v => (
                  <div
                    key={v.videoId}
                    style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}
                  >
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14.5, marginBottom: 4 }}>{v.title}</div>
                      <div style={{ color: PURPLE, fontSize: 12, fontWeight: 700, marginBottom: 8 }}>{v.channel}</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Closing verse */}
          <div
            style={{
              marginTop: 48,
              background: `linear-gradient(135deg, ${GOLD}18, transparent)`,
              border: `1px solid ${GOLD}44`,
              borderRadius: 16,
              padding: 24,
              textAlign: "center",
            }}
          >
            <p style={{ color: TEXT, fontSize: 16, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 8px" }}>
              &ldquo;The name of the LORD is a strong tower; the righteous man runs into it and is safe.&rdquo;
            </p>
            <p style={{ color: GOLD, fontSize: 13, fontWeight: 700, margin: 0 }}>— Proverbs 18:10</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
