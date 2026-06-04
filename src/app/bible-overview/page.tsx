"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

interface BibleBook {
  name: string;
  abbr: string;
  testament: "OT" | "NT";
  category: string;
  author: string;
  date: string;
  chapters: number;
  theme: string;
  summary: string;
  keyVerse: string;
  keyVerseRef: string;
  bigIdea: string;
  readingTips: string;
}

const BOOKS: BibleBook[] = [
  { name: "Genesis", abbr: "Gen", testament: "OT", category: "Law / Torah", author: "Moses", date: "c. 1446–1406 BC", chapters: 50, theme: "Beginnings", summary: "The book of origins: creation, the Fall, the flood, the dispersion of nations, and the calling of Abraham through whom all nations will be blessed. The first 11 chapters are cosmic history; chapters 12–50 are the patriarchal narratives of Abraham, Isaac, Jacob, and Joseph.", keyVerse: "In the beginning God created the heavens and the earth.", keyVerseRef: "Genesis 1:1", bigIdea: "God creates a good world, humanity rebels, and God begins a plan of redemption through one family that will eventually encompass all nations.", readingTips: "Read chapters 1–3 as a literary and theological unit, not just creation science. The Joseph narrative (37–50) is one of the greatest stories ever told — read it in one sitting." },
  { name: "Exodus", abbr: "Exod", testament: "OT", category: "Law / Torah", author: "Moses", date: "c. 1446–1406 BC", chapters: 40, theme: "Redemption from slavery", summary: "God rescues Israel from Egyptian slavery through Moses, delivers the Ten Commandments, and establishes his covenant with the nation. The second half describes the construction of the Tabernacle — God's dwelling place among his people.", keyVerse: "I am the Lord your God, who brought you out of Egypt, out of the land of slavery.", keyVerseRef: "Exodus 20:2", bigIdea: "God redeems his people through blood (Passover), covenant, and presence. Every detail of the Exodus prefigures the greater redemption through Christ.", readingTips: "The ten plagues are not arbitrary cruelty — each one targets a specific Egyptian deity. Trace that pattern. The Tabernacle instructions (chs. 25–40) are tedious to many, but Hebrews shows why every detail matters." },
  { name: "Psalms", abbr: "Ps", testament: "OT", category: "Poetry / Wisdom", author: "David (primarily), and others", date: "c. 1000–400 BC", chapters: 150, theme: "Prayer and worship", summary: "Israel's songbook and prayer book — 150 poems and songs covering every human emotion: grief, joy, rage, praise, doubt, trust, lament, and celebration. Five books within the book. The Psalms teach us that all of life can be brought before God.", keyVerse: "The Lord is my shepherd; I shall not want.", keyVerseRef: "Psalm 23:1", bigIdea: "Honest, raw, emotional prayer is not faithlessness — it is deep faith. The Psalms model what it looks like to cry out to God from every conceivable situation.", readingTips: "Don't read all 150 at once. Read 5 per day (one from each 'book'). Pray the imprecatory psalms (e.g., 137) as cries for justice rather than personal revenge. They reveal Jesus's heart toward injustice." },
  { name: "Proverbs", abbr: "Prov", testament: "OT", category: "Poetry / Wisdom", author: "Solomon (primarily)", date: "c. 950–700 BC", chapters: 31, theme: "Wisdom for daily life", summary: "The practical wisdom book — pithy observations about life, work, relationships, speech, wealth, and character. Not promises but general principles: typically, diligence leads to prosperity; typically, honesty builds trust. Wisdom begins with the fear of the Lord.", keyVerse: "Trust in the Lord with all your heart and lean not on your own understanding.", keyVerseRef: "Proverbs 3:5", bigIdea: "Wisdom is not intelligence — it is skill in living. Wisdom begins with the right posture toward God (fear/reverence) and expresses itself in every domain of ordinary life.", readingTips: "Read one chapter per day, one per month. The chapters match the days of most months. Compare similar themes across chapters rather than trying to find overarching narrative structure." },
  { name: "Isaiah", abbr: "Isa", testament: "OT", category: "Major Prophets", author: "Isaiah ben Amoz", date: "c. 740–700 BC", chapters: 66, theme: "Judgment and salvation", summary: "Often called the 'fifth Gospel' — Isaiah contains more Messianic prophecy than any other OT book. The first 39 chapters focus on judgment on Israel, Judah, and the nations; the final 27 chapters (beginning with 'Comfort, comfort my people') turn toward hope, the Servant Songs, and the promise of a new creation.", keyVerse: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.", keyVerseRef: "Isaiah 53:5", bigIdea: "God judges sin fully and saves sinners radically. The Suffering Servant of Isaiah 53 is the centerpiece of OT Messianic prophecy.", readingTips: "Read chapters 40–55 as a connected unit of comfort and salvation. The Servant Songs (42, 49, 50, 52-53) are among the most profound passages in all Scripture." },
  { name: "Matthew", abbr: "Matt", testament: "NT", category: "Gospels", author: "Matthew (Levi)", date: "c. AD 50–70", chapters: 28, theme: "Jesus as King and Messiah", summary: "Written primarily for a Jewish audience, Matthew presents Jesus as the fulfillment of all Old Testament promises. Five major discourses structure the book (including the Sermon on the Mount). Matthew emphasizes the Kingdom of Heaven, discipleship, and the church.", keyVerse: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.", keyVerseRef: "Matthew 28:19", bigIdea: "Jesus is the long-awaited Messiah-King, and his kingdom — which begins in the heart — is being established through the making of disciples.", readingTips: "Read the Sermon on the Mount (chapters 5–7) in one sitting. Note how often Matthew uses the phrase 'that it might be fulfilled' — he is showing Jewish readers that Jesus completes the entire Old Testament story." },
  { name: "John", abbr: "John", testament: "NT", category: "Gospels", author: "John the Apostle", date: "c. AD 85–95", chapters: 21, theme: "Jesus as divine Son of God", summary: "The most theological of the four Gospels. John was written that readers 'may believe that Jesus is the Messiah, the Son of God' (20:31). Seven 'I AM' statements. Seven signs. Extensive teaching on the Spirit, love, abiding, and eternal life. The most-used Gospel for evangelism.", keyVerse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", keyVerseRef: "John 3:16", bigIdea: "Jesus is not merely a great teacher or prophet — he is the eternal Word of God (Logos) made flesh. Eternal life is knowing him.", readingTips: "Begin here if you're new to the Bible. Read chapters 13–17 (the Upper Room Discourse) as a single portrait of Jesus's heart the night before his death." },
  { name: "Romans", abbr: "Rom", testament: "NT", category: "Epistles", author: "Paul", date: "c. AD 57", chapters: 16, theme: "The gospel and its implications", summary: "The most systematic theological letter in the New Testament. Paul presents the gospel from the universal need for salvation (1–3) through justification by faith (3–5), sanctification (6–8), God's plan for Israel (9–11), and the ethics of the gospel community (12–16).", keyVerse: "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes.", keyVerseRef: "Romans 1:16", bigIdea: "The gospel reveals the righteousness of God — both his judgment of sin and his merciful provision of righteousness through faith in Christ. This changes everything.", readingTips: "Read chapters 1–8 as the theological core. Don't skip chapters 9–11 — they answer 'But what about Israel?' Chapter 12 is the 'therefore': because of all this, here's how to live." },
  { name: "1 Corinthians", abbr: "1 Cor", testament: "NT", category: "Epistles", author: "Paul", date: "c. AD 55", chapters: 16, theme: "Church unity and practical holiness", summary: "Paul's most practical letter — written in response to multiple problems in the Corinthian church: divisions, sexual immorality, lawsuits, spiritual gift abuse, the Lord's Supper, and resurrection doubt. Chapter 13 is the famous 'love chapter.' Chapter 15 is the most comprehensive NT treatment of the resurrection.", keyVerse: "If I speak in the tongues of men or of angels, but do not have love, I am only a resounding gong or a clanging cymbal.", keyVerseRef: "1 Corinthians 13:1", bigIdea: "The cross must shape every dimension of church life — power dynamics, worship, sexuality, spiritual gifts, and death. The resurrection is not optional Christian doctrine.", readingTips: "Read chapter 13 in context — it comes in the middle of a debate about spiritual gifts. Chapter 15 (on resurrection) is one of the most important chapters in the NT." },
  { name: "Ephesians", abbr: "Eph", testament: "NT", category: "Epistles", author: "Paul", date: "c. AD 60–62", chapters: 6, theme: "The church as the body of Christ", summary: "A letter about the cosmic significance of the church — the body of Christ, the fullness of him who fills everything. The first three chapters describe what God has done (indicative); the last three describe how to live in light of it (imperative). Contains the Armor of God (6:10-18).", keyVerse: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God.", keyVerseRef: "Ephesians 2:8", bigIdea: "The church is not a human organization — it is the body of Christ, seated with him in heavenly places. Every social barrier (Jew/Gentile, slave/free) has been broken down in him.", readingTips: "Read chapters 1–3 for the theological foundation, then 4–6 for application. The household codes (5:21–6:9) should be read in the context of mutual submission (5:21), not in isolation." },
  { name: "Revelation", abbr: "Rev", testament: "NT", category: "Apocalyptic", author: "John the Apostle", date: "c. AD 95", chapters: 22, theme: "Victory of Christ and the Lamb", summary: "A prophetic-apocalyptic letter to seven churches under Roman persecution. Uses symbolic, visionary language drawn from Daniel, Ezekiel, and Zechariah. Its primary message: the Lamb (Jesus) has already won; Christians should faithful endure because history is moving toward God's ultimate triumph.", keyVerse: "He who is the faithful witness, the firstborn from the dead, and the ruler of the kings of the earth... To him who loves us and has freed us from our sins by his blood.", keyVerseRef: "Revelation 1:5", bigIdea: "Despite appearances, Christ is Lord — not Caesar, not any human empire. The church's calling is faithful witness, not anxious survival.", readingTips: "Don't read Revelation as a newspaper-prophecy decoder. Read it as first-century Christians would: as encouragement to hold on under persecution. The symbols come from OT prophets, not current events." },
  { name: "Hebrews", abbr: "Heb", testament: "NT", category: "Epistles", author: "Unknown (possibly Apollos or Priscilla)", date: "c. AD 60–70", chapters: 13, theme: "Jesus as the supreme high priest", summary: "An extended sermon showing that Jesus is greater than angels, Moses, Aaron, and the Levitical priesthood. Written to Jewish Christians tempted to return to Judaism. Uses the OT extensively to show that everything in the Jewish system pointed to Christ — and is now fulfilled in him.", keyVerse: "Therefore, since we have a great high priest who has ascended into heaven, Jesus the Son of God, let us hold firmly to the faith we profess.", keyVerseRef: "Hebrews 4:14", bigIdea: "Jesus is better — better than every OT institution and mediator. The 'therefore' passages call readers to persevere in faith based on who Jesus is.", readingTips: "The 'Hall of Faith' (chapter 11) is best read in context of chapter 12:1-2 — the heroes of faith run the race, and now it's our turn. Don't read chapter 6 (warning passages) in isolation." },
];

const CATEGORIES = ["All", "Law / Torah", "Poetry / Wisdom", "Major Prophets", "Gospels", "Epistles", "Apocalyptic"];
const TESTAMENTS = ["All", "OT", "NT"];

interface BibleTheme {
  id: string;
  theme: string;
  icon: string;
  description: string;
  ot_example: string;
  nt_fulfillment: string;
  key_verse: string;
}

const BIBLE_THEMES: BibleTheme[] = [
  {
    id: "bt1",
    theme: "Creation & New Creation",
    icon: "✦",
    description: "The Bible opens with God creating a good world and closes with God making all things new. Creation is not merely the backdrop of the story — it is the stage, the subject, and ultimately the destination. The redemptive narrative is not about souls escaping creation but about God restoring and renewing it entirely.",
    ot_example: "Genesis 1–2 establishes the goodness of the physical world and humanity's role as image-bearers and stewards. Creation declares God's glory (Psalm 19) and groans for restoration (Isaiah 65:17-25).",
    nt_fulfillment: "Revelation 21–22 depicts the New Jerusalem descending — heaven coming to earth, not souls ascending out of it. Romans 8:19-21 describes all creation awaiting liberation. Jesus's resurrection is the firstfruits of the new creation already breaking in.",
    key_verse: "Revelation 21:5 — He who was seated on the throne said, 'I am making everything new!'",
  },
  {
    id: "bt2",
    theme: "Covenant",
    icon: "🤝",
    description: "God's relationship with humanity is structured through covenants — formal, binding commitments that define the terms of relationship, promise, and obligation. The biblical story is the story of God making, maintaining, and ultimately fulfilling covenants with His people across generations.",
    ot_example: "Five major covenants structure the OT: Noahic (all creation), Abrahamic (a people and land), Mosaic (law and worship), Davidic (a king and kingdom), and the New Covenant promised by Jeremiah (31:31-34). Each successive covenant builds on and deepens the previous ones.",
    nt_fulfillment: "Jesus institutes the New Covenant at the Last Supper: 'This is my blood of the covenant, poured out for many.' He is the fulfillment of all prior covenants — the true Israel, the greater David, the perfect priest. The church now lives under the New Covenant, sealed by the Spirit.",
    key_verse: "Jeremiah 31:33 — I will put my law in their minds and write it on their hearts. I will be their God, and they will be my people.",
  },
  {
    id: "bt3",
    theme: "Redemption",
    icon: "⛓",
    description: "From Genesis 3 onward, the Bible is a story of God rescuing His people from bondage — physical, spiritual, and cosmic. Redemption (from the Latin redemptio, 'buying back') carries the image of a ransom paid to free a slave or prisoner. God is the divine Redeemer who acts at great personal cost to liberate those who cannot liberate themselves.",
    ot_example: "The Exodus is the paradigmatic OT redemption event: God sees His people's suffering, hears their cry, and acts with a mighty hand to deliver them through blood (Passover), water (Red Sea), and covenant. This becomes the template for understanding all subsequent acts of divine salvation.",
    nt_fulfillment: "The cross is the ultimate Exodus. Jesus is the Passover Lamb (1 Corinthians 5:7), whose blood liberates from the bondage of sin and death. Baptism mirrors passing through the Red Sea (1 Corinthians 10:1-4). The new community is a new covenant people freed for worship and service.",
    key_verse: "Ephesians 1:7 — In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God's grace.",
  },
  {
    id: "bt4",
    theme: "Kingdom of God",
    icon: "♛",
    description: "The Kingdom of God is the central theme of Jesus's preaching and the organizing frame of biblical theology. The Kingdom is not primarily a place but a reign — God's sovereign rule breaking into history, confronting all rival powers, and ultimately consummating in the renewal of all things. It is both present reality and future hope: already inaugurated in Christ, not yet fully consummated.",
    ot_example: "The OT anticipates the Kingdom through the Davidic monarchy (imperfect) and prophetic visions of a coming King (Isaiah 9:6-7, Daniel 7:13-14). The psalms celebrate God as King over all creation and history (Psalm 103:19). The prophets envision a day when God's rule will extend over all nations.",
    nt_fulfillment: "Jesus announces: 'The Kingdom of God has come near — repent and believe the good news' (Mark 1:15). His miracles are signs of the Kingdom's arrival: healing, exorcism, raising the dead. The cross is the decisive victory over the powers. Pentecost is the Kingdom community launched. The Apocalypse is its consummation.",
    key_verse: "Matthew 6:10 — Your kingdom come, your will be done, on earth as it is in heaven.",
  },
  {
    id: "bt5",
    theme: "Presence of God",
    icon: "☁",
    description: "The deepest human longing — and the deepest divine intent — is for God to dwell with His people. The Bible traces a progressive story of divine presence: in the Garden, lost at the Fall, partially restored through the Tabernacle and Temple, fully realized in the Incarnation, poured out at Pentecost, and consummated in the New Jerusalem where God dwells with humanity forever.",
    ot_example: "God walks with Adam and Eve in the Garden (Genesis 3:8). After the Fall, His presence is mediated through the Tabernacle cloud and pillar of fire (Exodus 40), then localized in the Temple (1 Kings 8). The exile is experienced as the departure of God's presence (Ezekiel 10); the return is anticipated as His return.",
    nt_fulfillment: "John 1:14 — The Word became flesh and 'tabernacled' (eskenos) among us. The Temple is now Jesus's body (John 2:21). After the resurrection, the Spirit becomes the indwelling presence in each believer and the gathered church (1 Corinthians 3:16). In Revelation 21:3: 'God's dwelling place is now among the people.'",
    key_verse: "John 1:14 — The Word became flesh and made his dwelling among us.",
  },
  {
    id: "bt6",
    theme: "The People of God",
    icon: "◎",
    description: "God's redemptive purpose is never merely individual — it is corporate. He calls a people to be His own, to bear His image collectively, and to be a blessing to all nations. The people of God is not a voluntary association of like-minded individuals; it is a divinely constituted community shaped by covenant, worship, and mission.",
    ot_example: "God calls Abraham to be the father of a great nation through whom all nations will be blessed (Genesis 12:1-3). Israel is called to be a 'kingdom of priests and a holy nation' (Exodus 19:6) — not for their own sake but as a light to the nations (Isaiah 49:6). The failure of Israel to fulfill this calling shapes the prophetic longing for a renewed people.",
    nt_fulfillment: "The church is the new covenant community — not a replacement for Israel but the fulfillment of what Israel pointed to. In Christ, the dividing wall between Jew and Gentile is broken down (Ephesians 2:14). The church is 'a chosen people, a royal priesthood, a holy nation' (1 Peter 2:9) — now carrying the same vocation Israel had, fulfilled in Christ.",
    key_verse: "1 Peter 2:9 — You are a chosen people, a royal priesthood, a holy nation, God's special possession.",
  },
];

interface BibleTimeline {
  id: string;
  era: string;
  date: string;
  description: string;
  books: string;
  key_event: string;
}

const BIBLE_TIMELINE: BibleTimeline[] = [
  {
    id: "tl1",
    era: "Creation to Flood",
    date: "~4000–2350 BC",
    description: "The primordial history of humanity: creation, the Fall, Cain and Abel, the spread of civilization, and the catastrophic flood. Genesis presents this as cosmic history — the origin of the world, humanity, sin, and the first divine judgment and rescue.",
    books: "Genesis 1–11",
    key_event: "The Fall of Adam and Eve; God's promise of a coming deliverer (Genesis 3:15); Noah and the flood; the Noahic covenant.",
  },
  {
    id: "tl2",
    era: "Patriarchs",
    date: "2000–1500 BC",
    description: "God calls Abraham from Ur and makes an unconditional covenant: land, descendants, and universal blessing. The patriarchal narratives follow three generations — Abraham, Isaac, Jacob, and Joseph — through faith, failure, and divine faithfulness. The family ends up in Egypt through Joseph's providential story.",
    books: "Genesis 12–50",
    key_event: "The Abrahamic covenant (Genesis 12, 15, 17); the sacrifice of Isaac (Genesis 22); Jacob's twelve sons; Joseph sold into Egypt — then exalted to save his family.",
  },
  {
    id: "tl3",
    era: "Exodus & Wilderness",
    date: "1446–1406 BC",
    description: "God raises up Moses to deliver Israel from 400 years of Egyptian slavery. The ten plagues, the Passover, the crossing of the Red Sea, the giving of the Law at Sinai, and forty years of wilderness wandering define this era. It is Israel's formative national event and the paradigm for all subsequent redemption.",
    books: "Exodus, Leviticus, Numbers, Deuteronomy",
    key_event: "The Exodus and Passover; Ten Commandments at Sinai; construction of the Tabernacle; forty years in the wilderness; Moses's death before entering Canaan.",
  },
  {
    id: "tl4",
    era: "Conquest & Judges",
    date: "1400–1050 BC",
    description: "Under Joshua, Israel enters and partially conquers Canaan. After Joshua's death, a cyclical pattern emerges: Israel abandons God, suffers under oppressors, cries out, and God raises a judge to deliver them. The period ends with moral chaos and the demand for a king.",
    books: "Joshua, Judges, Ruth",
    key_event: "Crossing the Jordan; fall of Jericho; the cycle of apostasy and deliverance under the judges (Deborah, Gideon, Samson); Ruth's story of loyalty and redemption.",
  },
  {
    id: "tl5",
    era: "United Kingdom",
    date: "1050–930 BC",
    description: "Israel transitions from theocracy to monarchy under Saul, then reaches its height under David and Solomon. David is the ideal king — a man after God's own heart — despite his failures. God makes an unconditional covenant with David's house. Solomon builds the Temple but his unfaithfulness plants the seeds of division.",
    books: "1–2 Samuel, 1 Kings 1–11, 1 Chronicles, 2 Chronicles 1–9, Psalms, Proverbs, Ecclesiastes, Song of Songs",
    key_event: "David anointed king; the Davidic covenant (2 Samuel 7); Jerusalem established; Solomon's Temple built; Solomon's decline and the kingdom's fracture.",
  },
  {
    id: "tl6",
    era: "Divided Kingdom",
    date: "930–586 BC",
    description: "After Solomon, the kingdom splits into Israel (north, 10 tribes) and Judah (south, 2 tribes). The northern kingdom falls to Assyria in 722 BC. The prophets — Isaiah, Jeremiah, Hosea, Amos, Micah — call both kingdoms to repentance and announce coming judgment and future hope. Judah falls to Babylon in 586 BC and the Temple is destroyed.",
    books: "1 Kings 12–22, 2 Kings, 2 Chronicles 10–36, Isaiah, Jeremiah, Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah",
    key_event: "The fall of the northern kingdom to Assyria (722 BC); the ministry of the writing prophets; Josiah's reform; the fall of Jerusalem and destruction of the Temple (586 BC).",
  },
  {
    id: "tl7",
    era: "Exile & Return",
    date: "605–400 BC",
    description: "Judah's leadership is exiled to Babylon for seventy years. The prophets Ezekiel and Daniel minister during the exile. Cyrus of Persia conquers Babylon and permits Jewish return. A remnant returns under Zerubbabel, Ezra, and Nehemiah to rebuild the Temple and the walls of Jerusalem. The OT canon closes with Malachi's prophecy of a coming messenger.",
    books: "Lamentations, Ezekiel, Daniel, Ezra, Nehemiah, Esther, Haggai, Zechariah, Malachi",
    key_event: "Babylon conquers Jerusalem; Daniel's ministry in Babylon; Cyrus's decree allowing return; the rebuilding of the Temple (516 BC) and walls under Nehemiah; Malachi's prophecy.",
  },
  {
    id: "tl8",
    era: "Intertestamental & NT",
    date: "400 BC – AD 100",
    description: "Four hundred years of prophetic silence between Malachi and John the Baptist. Alexander the Great Hellenizes the ancient world. The Maccabean revolt. Rome's rise. Into this world, Jesus of Nazareth is born. His life, death, resurrection, and ascension constitute the fulcrum of all history. The church spreads across the Roman Empire, and the NT is written.",
    books: "Matthew, Mark, Luke, John, Acts, Romans through Revelation",
    key_event: "The birth of Jesus (c. 5–4 BC); His ministry, death, and resurrection (c. AD 30–33); Pentecost and the birth of the church; Paul's missionary journeys; the destruction of the Temple (AD 70); the completion of the NT canon.",
  },
];

interface BibleVoice {
  id: string;
  name: string;
  era: string;
  context: string;
  bio: string;
  quote: string;
  contribution: string;
}

const VOICES_BIBLE: BibleVoice[] = [
  {
    id: "bv1",
    name: "Origen of Alexandria",
    era: "c. 185–254 AD",
    context: "Prolific biblical scholar and teacher, early church father",
    bio: "Origen was the most prolific biblical scholar of the early church, producing commentaries and homilies on virtually every book of the Bible. He worked in Alexandria, then Caesarea Maritima, and reportedly had a personal scriptorium of seven stenographers and seven copyists. His Hexapla — a six-column comparison of OT texts including the Hebrew, transliterations, and four Greek versions — was the most ambitious work of biblical scholarship in antiquity. While some of his speculative theological ideas (universal restoration, allegorical excess) were later condemned, his contribution to establishing biblical scholarship as a discipline was foundational.",
    quote: "Ignorance of Scripture is ignorance of Christ.",
    contribution: "Origen established the methods and disciplines of biblical scholarship — textual criticism, grammatical analysis, commentary writing, and homiletics — that shaped Christian interpretation for centuries. His allegorical method, while sometimes excessive, demonstrated that Scripture contains inexhaustible depth.",
  },
  {
    id: "bv2",
    name: "Jerome",
    era: "c. 347–420 AD",
    context: "Biblical scholar, translator of the Latin Vulgate",
    bio: "Sophronius Eusebius Hieronymus — Jerome — was the most learned biblical scholar of the Latin West. After studying in Rome and a period of ascetic desert life in Syria, he settled in Bethlehem and spent the rest of his life in biblical study and translation. Pope Damasus commissioned him to produce a standard Latin translation of the Bible; the result was the Vulgate, which became the standard Bible of the Western church for over a thousand years. Jerome learned Greek and Hebrew to work from original languages, a practice nearly unheard of in his day. His letters and commentaries reveal a brilliant, combative, often irascible personality.",
    quote: "Love the Scriptures, and wisdom will love you.",
    contribution: "The Vulgate Bible (Latin translation) was Jerome's enduring gift to Western Christianity. It transmitted Scripture to the Latin-speaking world for over a millennium, shaped the theology and liturgy of the medieval church, and was the Bible of Aquinas, Augustine, Luther, and the Council of Trent.",
  },
  {
    id: "bv3",
    name: "Martin Luther",
    era: "1483–1546 AD",
    context: "German Reformer, biblical professor, translator of the German Bible",
    bio: "Martin Luther was an Augustinian monk and professor of biblical studies at the University of Wittenberg whose rediscovery of Paul's teaching on justification by faith sparked the Protestant Reformation. His translation of the Bible into vernacular German (NT in 1522, full Bible in 1534) was a landmark event — making Scripture accessible to ordinary German speakers for the first time and shaping the modern German language. His lectures and commentaries on Romans, Galatians, and the Psalms remain classic works of biblical interpretation. His doctrine of sola scriptura (Scripture alone as the final authority) made the Bible the central document of Protestant Christianity.",
    quote: "The Bible is alive, it speaks to me; it has feet, it runs after me; it has hands, it lays hold of me.",
    contribution: "Luther's German Bible and his doctrine of sola scriptura democratized access to Scripture, making every believer their own reader of God's Word. His biblical lectures also recovered the Reformation's central insight: the gospel of grace is the interpretive key to all of Scripture.",
  },
  {
    id: "bv4",
    name: "F. F. Bruce",
    era: "1910–1990 AD",
    context: "British NT scholar, Rylands Professor at Manchester",
    bio: "Frederick Fyvie Bruce was the most respected evangelical New Testament scholar of the 20th century. A Scottish Plymouth Brethren layman who became the Rylands Professor of Biblical Criticism at the University of Manchester, he demonstrated that rigorous scholarship and evangelical convictions were not only compatible but mutually enriching. His book The New Testament Documents: Are They Reliable? (1943) made a compelling historical case for the authenticity and reliability of the NT documents to a popular audience. His commentaries — on Acts, Romans, Galatians, Hebrews, and others — set the standard for evangelical NT scholarship.",
    quote: "The earliest preachers of the gospel knew the value of a reliable tradition; a little later, creeds and confessions consolidated the tradition; the New Testament documents rest on this firm foundation.",
    contribution: "Bruce's The New Testament Documents: Are They Reliable? brought rigorous historical arguments for the trustworthiness of the NT to a popular audience and served as a gateway into serious NT scholarship for generations of believers. His scholarly output validated evangelical biblical scholarship in academic circles.",
  },
  {
    id: "bv5",
    name: "Gordon Fee",
    era: "1934–2022 AD",
    context: "NT scholar and co-author of How to Read the Bible for All Its Worth",
    bio: "Gordon D. Fee was a New Testament scholar and Pentecostal minister who taught at Regent College, Vancouver. His most influential work — co-authored with Douglas Stuart — How to Read the Bible for All Its Worth (1982) became the bestselling Bible study guide in history, introducing millions of ordinary readers to the disciplines of biblical interpretation (hermeneutics): understanding genre, literary context, original meaning, and contemporary application. His scholarly work on 1 Corinthians (NICNT), Philippians, and the Holy Spirit in Paul demonstrated both exegetical rigor and pastoral warmth.",
    quote: "A text cannot mean what it never could have meant to its author or his or her readers.",
    contribution: "How to Read the Bible for All Its Worth transformed how millions of ordinary Christians engage Scripture, introducing the tools of scholarly hermeneutics to everyday believers. Fee made the interpretive discipline of understanding Scripture on its own terms — in its historical and literary context — accessible and practical.",
  },
];

type Tab = "books" | "themes" | "timeline" | "voices" | "videos";

export default function BibleOverviewPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_bible-overview_tab", "books");
  const [catFilter, setCatFilter] = usePersistedState("vine_bible-overview_cat_filter", "All");
  const [testamentFilter, setTestamentFilter] = usePersistedState("vine_bible-overview_testament_filter", "All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<BibleBook | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<BibleVoice>(VOICES_BIBLE[0]);
  const [readIds, setReadIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_bible_overview_read"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_bible_overview_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });

  const toggleRead = (name: string) => {
    setReadIds(prev => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      try { localStorage.setItem("vine_bible_overview_read", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const toggleSave = (name: string) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      try { localStorage.setItem("vine_bible_overview_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filtered = BOOKS.filter(b => {
    if (testamentFilter !== "All" && b.testament !== testamentFilter) return false;
    if (catFilter !== "All" && b.category !== catFilter) return false;
    if (search && !b.name.toLowerCase().includes(search.toLowerCase()) && !b.theme.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const CAT_COLORS: Record<string, string> = {
    "Law / Torah": "#FFB347",
    "Poetry / Wisdom": "#4FC3F7",
    "Major Prophets": "#A080FF",
    "Gospels": "#3a7d56",
    "Epistles": "#FF8C42",
    "Apocalyptic": "#FF6B9D",
  };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📚</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Bible Book Overview</h1>
          <p style={{ color: MUTED, fontSize: 16 }}>Know what every book is about &mdash; its theme, author, and big idea</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(58,125,86,0.1)", color: GREEN, border: "1px solid rgba(58,125,86,0.25)", borderRadius: 20, padding: "4px 14px", fontSize: 13 }}>
              {readIds.size}/{BOOKS.length} Read
            </span>
          </div>
        </div>

        {/* Progress */}
        <div style={{ marginBottom: 24, background: CARD, borderRadius: 12, padding: "14px 18px", border: `1px solid ${BORDER}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: MUTED }}>Books Overview Progress</span>
            <span style={{ fontSize: 13, color: GREEN, fontWeight: 700 }}>{readIds.size} of {BOOKS.length}</span>
          </div>
          <div style={{ height: 6, background: BORDER, borderRadius: 3, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(readIds.size / BOOKS.length) * 100}%`, background: `linear-gradient(90deg, ${GREEN}, ${PURPLE})`, borderRadius: 3, transition: "width 0.3s" }} />
          </div>
        </div>

        {/* Tab Bar */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", gap: 6, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}`, width: "fit-content" }}>
            {(["books", "themes", "timeline", "voices", "videos"] as const).map(t => (
              <button type="button" key={t} onClick={() => setActiveTab(t)}
                style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                {t === "books" ? "Books" : t === "themes" ? "Themes" : t === "timeline" ? "Timeline" : t === "voices" ? "Voices" : "🎬 Videos"}
              </button>
            ))}
          </div>
        </div>

        {/* BOOKS TAB */}
        {activeTab === "books" && (
          <>
            {/* Filters */}
            <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
              <input value={search} onChange={e => setSearch(e.target.value)} aria-label="Search books..." placeholder="Search books..."
                style={{ flex: 1, minWidth: 200, padding: "8px 14px", borderRadius: 10, background: CARD, border: `1px solid ${BORDER}`, color: TEXT, fontSize: 14, outline: "none" }} />
              <div style={{ display: "flex", gap: 6 }}>
                {TESTAMENTS.map(t => (
                  <button type="button" key={t} onClick={() => setTestamentFilter(t)}
                    style={{ padding: "7px 14px", borderRadius: 10, border: `1px solid ${testamentFilter === t ? GREEN : BORDER}`, background: testamentFilter === t ? "rgba(58,125,86,0.1)" : "transparent", color: testamentFilter === t ? GREEN : MUTED, fontSize: 13, cursor: "pointer", fontWeight: testamentFilter === t ? 700 : 400 }}>
                    {t === "OT" ? "Old Testament" : t === "NT" ? "New Testament" : "All"}
                  </button>
                ))}
              </div>
              <select aria-label="Category filter" value={catFilter} onChange={e => setCatFilter(e.target.value)}
                style={{ padding: "8px 14px", borderRadius: 10, background: CARD, border: `1px solid ${BORDER}`, color: MUTED, fontSize: 14, cursor: "pointer" }}>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Books grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {filtered.map(book => (
                <div role="button" tabIndex={0} key={book.name} onClick={() => setSelected(book)}
                  style={{ background: CARD, border: `1px solid ${readIds.has(book.name) ? "rgba(58,125,86,0.25)" : BORDER}`, borderRadius: 16, padding: 20, cursor: "pointer", transition: "border-color 0.2s, transform 0.15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLDivElement).style.borderColor = CAT_COLORS[book.category]; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = readIds.has(book.name) ? "rgba(58,125,86,0.25)" : BORDER; }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{book.name}</h3>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: `${CAT_COLORS[book.category]}18`, color: CAT_COLORS[book.category], border: `1px solid ${CAT_COLORS[book.category]}35` }}>{book.category}</span>
                        <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: BORDER, color: MUTED }}>{book.chapters} chapters</span>
                      </div>
                    </div>
                    <button type="button" onClick={e => { e.stopPropagation(); toggleSave(book.name); }}
                      style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: savedIds.has(book.name) ? "#FFD700" : "#4A4A68" }}>
                      {savedIds.has(book.name) ? "★" : "☆"}
                    </button>
                  </div>
                  <p style={{ fontSize: 13, color: MUTED, marginBottom: 8, fontStyle: "italic" }}>Theme: {book.theme}</p>
                  <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {book.bigIdea}
                  </p>
                  <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "#6A6A88" }}>{book.author} &middot; {book.date}</span>
                    <button type="button" onClick={e => { e.stopPropagation(); toggleRead(book.name); }}
                      style={{ fontSize: 11, padding: "3px 10px", borderRadius: 8, border: `1px solid ${readIds.has(book.name) ? "rgba(58,125,86,0.3)" : "#2A2A40"}`, background: readIds.has(book.name) ? "rgba(58,125,86,0.1)" : "transparent", color: readIds.has(book.name) ? GREEN : "#6A6A88", cursor: "pointer", fontWeight: 600 }}>
                      {readIds.has(book.name) ? "✓ Read" : "Mark Read"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Biblical Themes</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>The great threads that run from Genesis to Revelation, unifying the whole biblical story.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {BIBLE_THEMES.map(theme => (
                <div key={theme.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 26 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: PURPLE, flexShrink: 0 }}>
                      {theme.icon}
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: TEXT }}>{theme.theme}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.8, marginBottom: 18 }}>{theme.description}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 18 }}>
                    <div style={{ background: BG, borderRadius: 12, padding: 16, border: `1px solid ${BORDER}` }}>
                      <div style={{ fontSize: 10, color: "#FFB347", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Old Testament</div>
                      <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0 }}>{theme.ot_example}</p>
                    </div>
                    <div style={{ background: BG, borderRadius: 12, padding: 16, border: `1px solid ${BORDER}` }}>
                      <div style={{ fontSize: 10, color: GREEN, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>NT Fulfillment</div>
                      <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0 }}>{theme.nt_fulfillment}</p>
                    </div>
                  </div>
                  <blockquote style={{ margin: 0, padding: "14px 18px", background: `${GREEN}0D`, border: `1px solid ${GREEN}20`, borderRadius: 10 }}>
                    <p style={{ fontSize: 14, color: GREEN, fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>
                      &ldquo;{theme.key_verse}&rdquo;
                    </p>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TIMELINE TAB */}
        {activeTab === "timeline" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Biblical Timeline</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>The sweep of biblical history from creation to the early church, era by era.</p>
            </div>
            <div style={{ position: "relative", paddingLeft: 32 }}>
              <div style={{ position: "absolute", left: 10, top: 8, bottom: 8, width: 2, background: `linear-gradient(180deg, ${GREEN}, ${PURPLE})`, borderRadius: 2 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {BIBLE_TIMELINE.map((entry, idx) => (
                  <div key={entry.id} style={{ position: "relative" }}>
                    <div style={{ position: "absolute", left: -26, top: 18, width: 14, height: 14, borderRadius: "50%", background: idx % 2 === 0 ? GREEN : PURPLE, border: `2px solid ${BG}`, zIndex: 1 }} />
                    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 16, fontWeight: 800, color: TEXT }}>{entry.era}</span>
                        <span style={{ fontSize: 12, padding: "2px 10px", borderRadius: 20, background: `${GREEN}15`, color: GREEN, border: `1px solid ${GREEN}30` }}>{entry.date}</span>
                      </div>
                      <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.8, marginBottom: 16 }}>{entry.description}</p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        <div style={{ background: BG, borderRadius: 10, padding: 12 }}>
                          <div style={{ fontSize: 10, color: PURPLE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Bible Books</div>
                          <div style={{ fontSize: 13, color: TEXT, fontWeight: 600 }}>{entry.books}</div>
                        </div>
                        <div style={{ background: BG, borderRadius: 10, padding: 12 }}>
                          <div style={{ fontSize: 10, color: GREEN, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Key Event</div>
                          <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.5 }}>{entry.key_event}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VOICES TAB */}
        {activeTab === "voices" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Voices on Scripture</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>The scholars who shaped how Christians read, translate, and interpret the Bible.</p>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              {/* Left panel */}
              <div style={{ width: 210, flexShrink: 0, position: "sticky", top: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                {VOICES_BIBLE.map(v => (
                  <button type="button" key={v.id} onClick={() => setSelectedVoice(v)}
                    style={{ background: selectedVoice.id === v.id ? `${PURPLE}25` : CARD, border: `1px solid ${selectedVoice.id === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: selectedVoice.id === v.id ? TEXT : MUTED, marginBottom: 2 }}>{v.name}</div>
                    <div style={{ fontSize: 11, color: MUTED }}>{v.era}</div>
                  </button>
                ))}
              </div>
              {/* Right panel */}
              <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${PURPLE}20`, color: PURPLE, border: `1px solid ${PURPLE}30` }}>{selectedVoice.era}</span>
                </div>
                <h2 style={{ fontSize: 26, fontWeight: 800, color: TEXT, margin: "10px 0 4px" }}>{selectedVoice.name}</h2>
                <p style={{ fontSize: 13, color: MUTED, marginBottom: 20, fontStyle: "italic" }}>{selectedVoice.context}</p>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.8, marginBottom: 22 }}>{selectedVoice.bio}</p>
                <blockquote style={{ margin: "0 0 22px", padding: "16px 20px", background: BG, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 10px 10px 0" }}>
                  <p style={{ fontSize: 15, color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 8px" }}>
                    &ldquo;{selectedVoice.quote}&rdquo;
                  </p>
                  <span style={{ fontSize: 12, color: PURPLE, fontWeight: 700 }}>— {selectedVoice.name}</span>
                </blockquote>
                <div style={{ background: `${GREEN}0D`, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Lasting Contribution</div>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0 }}>{selectedVoice.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Animated overviews and lectures on the Bible — its structure, themes, and how each book fits into the one story of redemption.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "ALsluAKBZ-c", title: "Old Testament Summary: A Complete Animated Overview", channel: "BibleProject", description: "BibleProject's acclaimed animated overview of the entire Old Testament — its structure, major themes, and how it all points toward Christ." },
                  { videoId: "Q0BrP8bqj0c", title: "New Testament Summary: A Complete Animated Overview", channel: "BibleProject", description: "A complete animated survey of the New Testament showing how the story begun in the Old Testament reaches its fulfillment in Jesus and the church." },
                  { videoId: "NR29yHJxnxI", title: "Every Book of the Old Testament Explained", channel: "Bible Study Guide", description: "An ultimate Bible study guide walking through every Old Testament book — its content, purpose, and key theological contributions." },
                  { videoId: "Ve28leEL2oU", title: "Old Testament Survey Online Course", channel: "John H. Walton & Andrew E. Hill", description: "A scholarly survey of the Old Testament by two leading evangelical professors — engaging the literary, historical, and theological dimensions of each book." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 100, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "20px", overflowY: "auto" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: CARD, borderRadius: 20, padding: 32, maxWidth: 680, width: "100%", border: `1px solid #2A2A40`, marginTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 6 }}>{selected.name}</h2>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: `${CAT_COLORS[selected.category]}18`, color: CAT_COLORS[selected.category], border: `1px solid ${CAT_COLORS[selected.category]}35` }}>{selected.category}</span>
                  <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: BORDER, color: MUTED }}>{selected.testament}</span>
                  <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: BORDER, color: MUTED }}>{selected.chapters} chapters</span>
                </div>
              </div>
              <button type="button" onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "#6A6A88", fontSize: 22, cursor: "pointer" }}>×</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              {[["Author", selected.author], ["Date", selected.date], ["Theme", selected.theme]].map(([k, v]) => (
                <div key={k} style={{ background: "#0D0D1A", borderRadius: 10, padding: 12 }}>
                  <p style={{ fontSize: 11, color: "#6A6A88", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</p>
                  <p style={{ fontSize: 14, color: "#D0D0E8", fontWeight: 600 }}>{v}</p>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 16 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Summary</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.summary}</p>
            </div>

            <div style={{ marginBottom: 16 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#A080FF", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>The Big Idea</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.bigIdea}</p>
            </div>

            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, marginBottom: 16, borderLeft: `3px solid ${GREEN}` }}>
              <p style={{ fontSize: 15, color: "#C0C0D8", fontStyle: "italic", lineHeight: 1.6 }}>
                &ldquo;{selected.keyVerse}&rdquo;
              </p>
              <p style={{ fontSize: 13, color: GREEN, marginTop: 8, fontWeight: 700 }}>— {selected.keyVerseRef}</p>
            </div>

            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 14, marginBottom: 20 }}>
              <h4 style={{ fontSize: 12, fontWeight: 700, color: "#FFB347", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Reading Tips</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.readingTips}</p>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button type="button" onClick={() => toggleRead(selected.name)}
                style={{ flex: 1, padding: "12px", borderRadius: 12, border: `1px solid ${readIds.has(selected.name) ? "rgba(58,125,86,0.4)" : "#2A2A40"}`, background: readIds.has(selected.name) ? "rgba(58,125,86,0.12)" : BORDER, color: readIds.has(selected.name) ? GREEN : MUTED, cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                {readIds.has(selected.name) ? "✓ Marked as Read" : "Mark as Read"}
              </button>
              <button type="button" onClick={() => toggleSave(selected.name)}
                style={{ padding: "12px 20px", borderRadius: 12, border: `1px solid ${savedIds.has(selected.name) ? "rgba(255,215,0,0.3)" : "#2A2A40"}`, background: savedIds.has(selected.name) ? "rgba(255,215,0,0.08)" : BORDER, color: savedIds.has(selected.name) ? "#FFD700" : MUTED, cursor: "pointer", fontWeight: 700, fontSize: 16 }}>
                {savedIds.has(selected.name) ? "★" : "☆"}
              </button>
            </div>
          </div>
        </div>
      )}
      </main>
      <Footer />
    </div>
  );
}
