"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "discoveries" | "sites" | "significance" | "voices" | "videos";

const ERA_FILTERS = ["All", "Patriarchal Era", "Exodus & Conquest", "Kingdom Period", "Exile & Return", "New Testament Era"];

const DISCOVERIES = [
  {
    title: "Dead Sea Scrolls",
    year_discovered: "1947",
    era: "Exile & Return",
    color: GREEN,
    location: "Qumran Caves, West Bank",
    biblical_connection: "Entire Old Testament (except Esther); Isaiah 53 in full",
    current_location: "Israel Museum, Jerusalem — Shrine of the Book",
    description: "Discovered by a Bedouin shepherd boy who threw a stone into a cave and heard pottery break. The 972 manuscripts found between 1947 and 1956 in the caves near Qumran include the oldest known copies of nearly every Old Testament book, predating the previously oldest manuscripts by 1,000 years. The Great Isaiah Scroll (1QIsa-a), written around 125 BC, is virtually identical to the Masoretic text used in modern Bibles.",
    significance: "Silences the argument that the Old Testament was corrupted during transmission. The Isaiah scroll written before Christ matches our modern text almost perfectly — including Isaiah 53, the Suffering Servant passage, which prophecies the crucifixion in stunning detail.",
    learn_more: "dss.collections.imj.org.il — Israel Museum digital archive; also The Dead Sea Scrolls Bible (Abegg, Flint, Ulrich)",
    initials: "DSS",
  },
  {
    title: "Tel Dan Inscription",
    year_discovered: "1993",
    era: "Kingdom Period",
    color: "#3B82F6",
    location: "Tel Dan, Northern Israel",
    biblical_connection: "2 Samuel 7; 1 Kings 12; confirms the historical David",
    current_location: "Israel Museum, Jerusalem",
    description: "A basalt stele fragment discovered at Tel Dan in northern Israel, dating to the 9th century BC. It contains the phrase BYTDWD — widely translated as House of David — making it the first extrabiblical reference to King David ever found. The inscription was made by an Aramean king (likely Hazael of Damascus) boasting of his military victories, including over the king of the House of David.",
    significance: "Until 1993, critical scholars argued David was a mythical figure invented by later Jewish writers. The Tel Dan inscription proved there was a genuine historical dynasty called the House of David within 150 years of David himself. It remains one of the most significant vindications of biblical historicity in the 20th century.",
    learn_more: "Biblical Archaeology Review archives (biblicalarchaeology.org); The Bible Unearthed by Finkelstein & Silberman",
    initials: "TDI",
  },
  {
    title: "Pilate Stone",
    year_discovered: "1961",
    era: "New Testament Era",
    color: "#EF4444",
    location: "Caesarea Maritima, Israel",
    biblical_connection: "Matthew 27; Luke 3:1; John 18-19 — confirms Pontius Pilate",
    current_location: "Israel Museum, Jerusalem (replica at Caesarea)",
    description: "A limestone dedication block found in the ruins of a theater at Caesarea Maritima bears the inscription: TO THE TIBERIUM... PONTIUS PILATE... PREFECT OF JUDEA. It was the first archaeological evidence of Pilate's historicity and his title of Prefect (not Procurator, as some ancient sources stated). The stone dates to approximately AD 26-37, precisely overlapping with Jesus' ministry and crucifixion.",
    significance: "Confirms that Pontius Pilate was a real historical figure with exactly the role the Gospels describe. Critics had long questioned whether Pilate was a literary invention — the stone ended that argument definitively.",
    learn_more: "Israel Antiquities Authority (antiquities.org.il); detailed article at biblicalarchaeology.org",
    initials: "PS",
  },
  {
    title: "Caiaphas Ossuary",
    year_discovered: "1990",
    era: "New Testament Era",
    color: PURPLE,
    location: "Jerusalem Peace Forest (construction excavation)",
    biblical_connection: "Matthew 26:3; John 11:49-53; Acts 4:6 — the High Priest who condemned Jesus",
    current_location: "Israel Museum, Jerusalem",
    description: "Twelve ossuaries (bone boxes) were found when construction workers accidentally broke into a first-century burial cave in Jerusalem. The most ornate, bearing the inscription Yehosef bar Qayafa (Joseph son of Caiaphas), is almost certainly the burial box of the High Priest Caiaphas who presided over Jesus' trial. It contained the bones of six individuals, including a 60-year-old male.",
    significance: "Confirms the historical existence of the High Priest who condemned Jesus. Combined with the Pilate Stone, archaeology has now confirmed the two most powerful Jewish and Roman figures in the Passion narrative were real historical persons with the roles the Gospels describe.",
    learn_more: "Israel Museum catalog; Zvi Greenhut's original excavation report; Biblical Archaeology Society",
    initials: "CAI",
  },
  {
    title: "Cyrus Cylinder",
    year_discovered: "1879",
    era: "Exile & Return",
    color: "#F59E0B",
    location: "Babylon (modern Iraq)",
    biblical_connection: "Ezra 1:1-4; 2 Chronicles 36:22-23; Isaiah 44:28; 45:1",
    current_location: "British Museum, London",
    description: "A baked clay cylinder inscribed with the proclamation of Cyrus the Great of Persia after his conquest of Babylon in 539 BC. The cylinder records that Cyrus allowed displaced peoples to return to their homelands and rebuild their temples — exactly what Ezra 1 records him doing for the Jewish exiles in Babylon. Isaiah 44-45 called Cyrus by name over 150 years before his birth.",
    significance: "The Cyrus Cylinder confirms the biblical account of the Edict of Cyrus (Ezra 1). It also supports the extraordinary prophecy in Isaiah 44-45, where Isaiah names Cyrus 150+ years before his birth as the one who will authorize the rebuilding of Jerusalem and the Temple.",
    learn_more: "British Museum collection at britishmuseum.org; The Cyrus Cylinder: The King of Persia and the Idol from Babylon (Irving Finkel)",
    initials: "CC",
  },
  {
    title: "Hezekiah's Tunnel",
    year_discovered: "1838 (re-explored 1880)",
    era: "Kingdom Period",
    color: "#10B981",
    location: "City of David, Jerusalem",
    biblical_connection: "2 Kings 20:20; 2 Chronicles 32:30 — Hezekiah's water tunnel",
    current_location: "In situ — walkable today in Jerusalem",
    description: "A 1,750-foot tunnel carved through solid rock beneath Jerusalem, channeling water from the Gihon Spring to the Pool of Siloam inside the city walls. In 1880, a boy discovered an inscription (the Siloam Inscription) inside the tunnel describing the moment the two teams of workers, digging from opposite ends, met in the middle. The tunnel dates to approximately 701 BC.",
    significance: "Confirms the biblical account of Hezekiah preparing Jerusalem for the Assyrian siege (2 Kings 20:20). The Siloam Inscription is one of the oldest examples of classical Hebrew writing. Visitors today can wade through the actual tunnel Hezekiah's workers cut, mentioned in Scripture.",
    learn_more: "City of David archaeological site (ir-david.org.il); walkable today with a tour of Jerusalem",
    initials: "HZT",
  },
  {
    title: "Pool of Siloam",
    year_discovered: "2004",
    era: "New Testament Era",
    color: "#3B82F6",
    location: "City of David, Jerusalem",
    biblical_connection: "John 9:1-11 — Jesus heals the blind man, tells him to wash in the Pool of Siloam",
    current_location: "City of David excavation site, Jerusalem",
    description: "Accidentally discovered in 2004 during sewer repairs in Jerusalem, the Pool of Siloam is a large stepped ritual bath (mikveh) dating to the Second Temple period (1st century BC - 1st century AD). The pool matches the description in John 9 exactly — a public pool where Jesus sent the man born blind to wash and receive his sight. The stone steps and mikveh structure are preserved in situ.",
    significance: "For decades, a small Byzantine-era pool was believed to be the Pool of Siloam. The 2004 discovery revealed the authentic first-century pool where Jesus performed the healing miracle in John 9, placing the Gospel account precisely in the Jerusalem archaeology.",
    learn_more: "Hershel Shanks, Biblical Archaeology Review (2005); City of David ongoing excavations",
    initials: "PSL",
  },
  {
    title: "Lachish Letters",
    year_discovered: "1935",
    era: "Kingdom Period",
    color: "#EF4444",
    location: "Lachish (Tell ed-Duweir), Israel",
    biblical_connection: "Jeremiah 34:7; 2 Kings 18:14 — the Assyrian and Babylonian siege of Lachish",
    current_location: "British Museum, London; Israel Antiquities Authority",
    description: "Eighteen ostraca (pottery fragments with ink writing) discovered in the guardroom of the ancient city of Lachish, dating to approximately 588 BC — just before the Babylonian siege. The letters are military dispatches between a commander in Lachish and an outpost, mentioning they can no longer see the fire signals from Azekah. Jeremiah 34:7 records that Lachish and Azekah were the last two fortified cities before Jerusalem fell.",
    significance: "The Lachish Letters place us within months — possibly weeks — of the moment recorded in Jeremiah 34:7. The anxiety in the letters, the reference to failing to see Azekah, maps precisely onto the biblical narrative of the last days before Jerusalem's fall to Babylon.",
    learn_more: "British Museum online collection; Harry Torczyner's original publication; ANET (Ancient Near Eastern Texts)",
    initials: "LL",
  },
  {
    title: "Balaam Inscription (Deir Alla)",
    year_discovered: "1967",
    era: "Kingdom Period",
    color: "#6366F1",
    location: "Deir Alla, Jordan (ancient Transjordan)",
    biblical_connection: "Numbers 22-24 — Balaam son of Beor, the prophet hired to curse Israel",
    current_location: "Jordan Archaeological Museum, Amman",
    description: "Plaster texts discovered at Deir Alla in the Jordan Valley, dating to approximately 800 BC, contain a prophecy attributed to Balaam son of Beor — the exact name of the non-Israelite prophet in Numbers 22-24. The Balaam of the inscription is described as a seer who received a divine vision, using language remarkably similar to the biblical account.",
    significance: "Balaam was long considered a fictional character. The Deir Alla inscription confirms he was a real historical figure — a recognized prophet or seer in the ancient Transjordan region — and that his name and reputation were preserved in non-biblical traditions for centuries after his biblical appearance.",
    learn_more: "Jo Ann Hackett, The Balaam Text from Deir Alla; Biblical Archaeology Review archives",
    initials: "BA",
  },
  {
    title: "Ebla Tablets",
    year_discovered: "1974-1976",
    era: "Patriarchal Era",
    color: GREEN,
    location: "Tell Mardikh (ancient Ebla), Syria",
    biblical_connection: "Genesis 10-14; the Cities of the Plain; patriarchal names and practices",
    current_location: "National Museum of Aleppo, Syria; Idlib Museum",
    description: "Over 17,000 cuneiform tablets discovered at Tell Mardikh in Syria, dating to approximately 2400-2300 BC — the era of the biblical patriarchs. The tablets mention cities named Sodom, Gomorrah, Admah, Zeboim, and Bela (the five Cities of the Plain listed in Genesis 14:2) as real trading partners of Ebla. They also contain personal names identical to those in Genesis: Eber, Ishmael, Israel, and Abraham-equivalents.",
    significance: "Critics had long argued the Cities of the Plain were invented by the Genesis author. The Ebla tablets confirm these cities existed in exactly the period and geography Genesis describes. The tablets also confirm that the patriarchal naming practices and social customs in Genesis accurately reflect 2nd millennium BC Mesopotamian culture.",
    learn_more: "Alfonso Archi, Ebla and Its Archives (2016); Alfonso Archi in Studia Eblatica; Biblical Archaeology Review (Pettinato, 1976-1980)",
    initials: "EB",
  },
  {
    title: "James Ossuary",
    year_discovered: "2002 (publication)",
    era: "New Testament Era",
    color: "#F59E0B",
    location: "Origin unclear — surfaced in antiquities market",
    biblical_connection: "Galatians 1:19; Acts 15 — James, the brother of Jesus and leader of Jerusalem church",
    current_location: "Israel Antiquities Authority storage; displayed at Royal Ontario Museum",
    description: "A first-century limestone ossuary bearing the Aramaic inscription Yaakov bar Yosef akhui diYeshua (James son of Joseph, brother of Jesus). First published by Andre Lemaire in Biblical Archaeology Review (2002), the box triggered enormous controversy — including forgery charges that went to trial in Israel. After an eight-year legal process, the Israel Antiquities Authority judge ruled the inscription was not proven to be a forgery.",
    significance: "If authentic, this is the only physical artifact mentioning Jesus of Nazareth from near his own time. The inscription uniquely specifies James as the brother of Jesus, not merely the son of Joseph — suggesting the brother relationship was notable enough to record, consistent with James being a major leader in the early church.",
    learn_more: "Hershel Shanks and Ben Witherington, The Brother of Jesus (2003); Biblical Archaeology Review archives",
    initials: "JO",
  },
  {
    title: "Mesha Stele (Moabite Stone)",
    year_discovered: "1868",
    era: "Kingdom Period",
    color: PURPLE,
    location: "Dhiban, Jordan (ancient Dibon, capital of Moab)",
    biblical_connection: "2 Kings 3; Numbers 21 — the Moabite king Mesha and the tribe of Gad in Israel",
    current_location: "Louvre Museum, Paris",
    description: "A black basalt stele inscribed in Moabite (closely related to Hebrew), recording the victories of King Mesha of Moab over Israel. The inscription mentions the Israelite tribe of Gad, the Israelite king Omri, and the name YHWH (the divine name of God). It describes Mesha taking vessels of YHWH from a city and presenting them to his own god Chemosh. The stone dates to approximately 840 BC.",
    significance: "One of the most important extrabiblical inscriptions in existence. It confirms the historical existence of the kingdom of Omri and the tribe of Gad as recorded in the Old Testament. The mention of YHWH by a non-Israelite king confirms the distinctiveness of Israel's God was recognized internationally.",
    learn_more: "Louvre Museum collection online; The Moabite Stone (A.H. Sayce, 1888); recent analysis: Ahituv, Echoes from the Past",
    initials: "MS",
  },
];

const ERA_COLOR: Record<string, string> = {
  "Patriarchal Era": "#F59E0B",
  "Exodus & Conquest": "#EF4444",
  "Kingdom Period": PURPLE,
  "Exile & Return": "#3B82F6",
  "New Testament Era": GREEN,
};

const ARCHAEO_SITES = [
  {
    id: "megiddo",
    name: "Megiddo (Armageddon)",
    location: "Jezreel Valley, Northern Israel",
    period: "Bronze Age – Iron Age (3000–600 BC)",
    description: "Tel Megiddo is one of the most excavated sites in the world, with 26 layers of occupation. It guarded the main pass through the Carmel ridge — whoever controlled Megiddo controlled the Via Maris, the main trade and military route between Egypt and Mesopotamia. The city's strategic importance made it the site of more battles than any other place in the ancient Near East.",
    biblical_connection: "1 Kings 9:15 (Solomon's chariot cities); 2 Kings 23:29 (death of Josiah); Revelation 16:16 (Armageddon — the hill of Megiddo — as the site of the final battle)",
    discovered: "Excavated by the Oriental Institute of Chicago (1925–1939); ongoing excavations by Tel Aviv University",
  },
  {
    id: "capernaum",
    name: "Capernaum",
    location: "Northern shore of the Sea of Galilee, Israel",
    period: "Early Roman period (1st century BC – 4th century AD)",
    description: "A prosperous fishing and trading town on the Sea of Galilee that served as the base of Jesus' Galilean ministry. Excavations have uncovered a 4th-century synagogue built on the basalt foundations of a 1st-century synagogue — likely the very building where Jesus taught. Beneath a 5th-century octagonal church lies a 1st-century house identified by early pilgrims as Peter's house.",
    biblical_connection: "Matthew 4:13 (Jesus' home base); Mark 1:21 (healing in the synagogue); Luke 4:31–38; John 6:59 (Bread of Life discourse in the synagogue)",
    discovered: "Franciscan excavations from 1906 onward; Israeli Antiquities Authority",
  },
  {
    id: "qumran",
    name: "Qumran",
    location: "West Bank, near the Dead Sea",
    period: "2nd century BC – 1st century AD",
    description: "The settlement on the cliffs above the caves where the Dead Sea Scrolls were hidden. Qumran was occupied by the Essenes — a Jewish sect that rejected the Jerusalem Temple establishment and preserved their sacred texts in clay jars in the surrounding caves. The community had an elaborate system of ritual baths (miqva'ot), a scriptorium where scrolls were copied, and a communal dining hall.",
    biblical_connection: "The Qumran community preserved manuscripts of every Old Testament book (except Esther), including multiple copies of Isaiah, Psalms, and Deuteronomy — the books most quoted by Jesus in the Gospels",
    discovered: "Roland de Vaux and Gerald Lankester Harding (1949–1956); ongoing excavations",
  },
  {
    id: "tel-dan",
    name: "Tel Dan",
    location: "Northern tip of Israel, near the Lebanese border",
    period: "Bronze Age – Iron Age (3000–700 BC)",
    description: "An ancient city at the foot of Mount Hermon, Tel Dan was a major cult center in northern Israel after the division of the kingdom. Jeroboam I set up one of his two golden calves here. The site contains a well-preserved Iron Age gate complex and a high place (bamah) where sacrifices were offered. It was here that the Tel Dan Inscription — the first extrabiblical reference to the House of David — was found.",
    biblical_connection: "Genesis 14:14 (Abram pursues enemies to Dan); Judges 18 (Danites settle here); 1 Kings 12:29 (Jeroboam's golden calf); 2 Kings 10:29",
    discovered: "Avraham Biran, Hebrew Union College excavations (1966–1999)",
  },
  {
    id: "masada",
    name: "Masada",
    location: "Judean Desert plateau above the Dead Sea, Israel",
    period: "1st century BC – 1st century AD",
    description: "Herod the Great built an impregnable fortress-palace on a 1,300-foot desert plateau. After the fall of Jerusalem in AD 70, the last Jewish holdouts — the Sicarii — occupied Masada until AD 73-74. When the Roman X Legion completed their siege ramp and breached the walls, the 960 defenders chose collective death over enslavement. Yigael Yadin's excavations revealed Herod's palaces, a synagogue, storerooms, and the lots (ostraca) the defenders drew to determine who would die last.",
    biblical_connection: "While Masada is not directly named in the New Testament, Herod's kingdom — including his building programs — forms the political backdrop of the Gospels. The siege of Masada was part of the same Jewish War described in Luke 21:20-24",
    discovered: "Yigael Yadin, Hebrew University excavations (1963–1965); one of the largest archaeological expeditions in history",
  },
  {
    id: "caesarea-maritima",
    name: "Caesarea Maritima",
    location: "Mediterranean coast, central Israel",
    period: "1st century BC – Byzantine era",
    description: "Herod the Great built the largest artificial harbor in the ancient world at Caesarea, naming the city in honor of Caesar Augustus. The city became the Roman administrative capital of Judea and the residence of the Roman prefects — including Pontius Pilate. It had an amphitheater, hippodrome, temples, an elaborate sewer system flushed by the sea, and a complex of warehouses serving international trade.",
    biblical_connection: "Acts 10 (Cornelius, the first Gentile convert, lived here); Acts 12:19-23 (Herod Agrippa struck dead here); Acts 18:22; 21:8; 23:23-26:32 (Paul's imprisonment and trial before Festus and Agrippa II); the Pilate Stone was found here",
    discovered: "Joint Expedition to Caesarea Maritima (JECM) from 1971; ongoing excavations by multiple institutions",
  },
];

const ARCHAEO_SIGNIFICANCE = [
  {
    id: "exodus",
    claim: "Does archaeology support the Exodus?",
    evidence: "The Exodus narrative lacks direct extrabiblical confirmation, but archaeological evidence is consistent with it in multiple ways: the Ipuwer Papyrus describes Egyptian plagues remarkably similar to those in Exodus; the Merneptah Stele (1208 BC) mentions Israel as a people in Canaan (confirming the Israelites existed before any later Exodus date); Semitic slave populations in Egypt are documented in the Brooklyn Papyrus; and the city of Pi-Ramesses (Exodus 1:11) has been excavated at Tell el-Borg with Semitic workers.",
    scripture: "Exodus 1:11; 12:37-40",
    icon: "🌊",
  },
  {
    id: "david-solomon",
    claim: "Were David and Solomon historical kings?",
    evidence: "The Tel Dan Inscription (1993) provides the first extrabiblical reference to the 'House of David,' confirming David's dynasty within 150 years of his reign. The Mesha Stele mentions the 'House of David.' Extensive Iron Age construction at Megiddo, Hazor, and Gezer — cities Solomon is said to have fortified (1 Kings 9:15) — have been dated to the 10th century BC. The debate about the scale of Solomon's kingdom continues, but the historicity of both kings is now broadly accepted.",
    scripture: "2 Samuel 7; 1 Kings 9:15; 10:14-29",
    icon: "👑",
  },
  {
    id: "resurrection",
    claim: "What is the historical context of the Resurrection?",
    evidence: "Archaeology cannot prove the Resurrection — it is a theological and historical claim beyond the reach of the spade. But archaeology has confirmed everything around it: Pontius Pilate (Pilate Stone), Caiaphas (Caiaphas Ossuary), the crucifixion method (Yohanan ben Hagkol heel bone with nail, 1968), the tomb architecture of 1st-century Jerusalem, and the Pool of Siloam, Pool of Bethesda, and other Gospel sites. The environment in which the Resurrection is claimed is historically verified in extraordinary detail.",
    scripture: "John 19:17-42; 1 Corinthians 15:3-8",
    icon: "✝️",
  },
  {
    id: "nt-reliability",
    claim: "Does archaeology support New Testament reliability?",
    evidence: "Consistently and in detail. Archaeologist John McRay writes: 'Archaeology has not produced anything that is unequivocally a contradiction to the Bible.' Luke's accuracy in Acts has been confirmed repeatedly — 84 historically verified facts in the last 16 chapters alone (confirmed by Colin Hemer). The Pool of Bethesda (John 5) was long dismissed as legendary; it was excavated in the 19th century. Lysanias tetrarch of Abilene (Luke 3:1), long thought an error, was confirmed by an inscription.",
    scripture: "Luke 1:1-4; Acts 1:1-2; John 20:30-31",
    icon: "📜",
  },
  {
    id: "ot-text",
    claim: "How reliable is the Old Testament text?",
    evidence: "The Dead Sea Scrolls, discovered in 1947, pre-date the previously oldest Hebrew manuscripts by 1,000 years. Comparison of the Great Isaiah Scroll (125 BC) with the Masoretic text used in modern Bibles shows remarkable textual stability — the text was transmitted with extraordinary accuracy over a millennium. The Septuagint (Greek translation, ~250 BC) and the Samaritan Pentateuch provide additional textual witnesses that confirm the essential integrity of the Old Testament text we have today.",
    scripture: "Psalm 119:89; Isaiah 40:8; Matthew 5:18",
    icon: "📖",
  },
];

const VOICES_ARCH = [
  {
    id: "albright",
    name: "William F. Albright",
    era: "1891–1971",
    context: "Dean of American biblical archaeology",
    bio: "William Foxwell Albright was the dominant figure in 20th-century biblical archaeology. Born to Methodist missionary parents, he studied at Johns Hopkins and spent decades excavating in Palestine, including Tell Beit Mirsim (ancient Debir). As director of the American Schools of Oriental Research, he trained a generation of archaeologists. His work consistently vindicated the historical reliability of the Old Testament against critics who dismissed it as late fiction. He authenticated the Dead Sea Scrolls and the Nash Papyrus and was the first to recognize the significance of the Gezer Calendar.",
    quote: "The excessive skepticism shown toward the Bible by important historical schools of the 18th and 19th centuries, certain phases of which still appear periodically, has been progressively discredited. Discovery after discovery has established the accuracy of innumerable details.",
    contribution: "Albright established biblical archaeology as a rigorous academic discipline and provided the framework for understanding the relationship between ancient Near Eastern history and the biblical narrative. His synthesis of archaeology, linguistics, and biblical studies created the standard methodology for the field.",
  },
  {
    id: "yadin",
    name: "Yigael Yadin",
    era: "1917–1984",
    context: "Israeli archaeologist and military hero",
    bio: "Yigael Yadin combined two extraordinary careers — as the second Chief of Staff of the Israel Defense Forces (architect of Israel's victory in the 1948 War of Independence) and as Israel's greatest archaeologist. He excavated Hazor, Masada, and Megiddo, and was the lead scholar on the Dead Sea Scrolls, including the Temple Scroll. His excavations at Masada (1963–1965) — one of the largest excavations in history — used volunteers from around the world and produced findings that shaped Israeli national identity.",
    quote: "Masada shall not fall again.",
    contribution: "Yadin's excavations connected the land of Israel directly to its biblical and historical heritage. His work at Hazor confirmed the biblical account of Joshua's conquest, and his Masada excavations produced artifacts — including the ostraca that may be the lots drawn by the last defenders — that gave physical substance to Josephus's account.",
  },
  {
    id: "kenyon",
    name: "Kathleen Kenyon",
    era: "1906–1978",
    context: "Excavator of Jericho and Jerusalem",
    bio: "Dame Kathleen Kenyon was the most important female archaeologist of the 20th century and one of the most rigorous methodologists in the history of the discipline. She introduced the stratigraphic excavation method to Palestinian archaeology through her excavations at Jericho (1952–1958) and Jerusalem (1961–1967). Her Jericho excavations dated the famous collapsed walls to the Early Bronze Age rather than the Late Bronze Age, complicating the identification with Joshua's conquest. Her Jerusalem excavations clarified the extent of the ancient city and confirmed the location of the Stepped Stone Structure.",
    quote: "Archaeology, properly pursued, is a discipline requiring as great rigor as any scientific investigation. Its evidence must be interpreted without prejudice, whether that prejudice is in favor of the biblical account or against it.",
    contribution: "Kenyon's stratigraphic methodology transformed Palestinian archaeology from treasure-hunting into rigorous science. Even where her findings complicated simple biblical correlations, they enriched the discipline and demanded more careful historical thinking from all sides.",
  },
  {
    id: "strange",
    name: "James Strange",
    era: "1938–2014",
    context: "New Testament archaeological sites",
    bio: "James F. Strange was a professor at the University of South Florida and one of the leading excavators of New Testament-era sites. He directed excavations at Sepphoris (Zippori) — the Roman city just 4 miles from Nazareth where Jesus likely worked as a craftsman — and at numerous Galilean synagogues. His work on Capernaum and the broader Galilee region placed the Gospel narratives in their precise archaeological context and confirmed that Jesus operated in a more urbanized, Hellenistic world than older scholarship assumed.",
    quote: "The Gospels are set in a real landscape. Every time I excavate in Galilee, I find myself inside the world that produced them.",
    contribution: "Strange's excavations at Sepphoris and Galilean synagogues gave archaeologists and New Testament scholars a detailed picture of the world in which Jesus lived and taught. The proximity of Sepphoris to Nazareth — and its ongoing construction during Jesus' lifetime — helps explain why a carpenter's son from Nazareth would have been unusually well acquainted with Greco-Roman architectural and cultural forms.",
  },
  {
    id: "kitchen",
    name: "Kenneth Kitchen",
    era: "1932–",
    context: "Old Testament history defender",
    bio: "Kenneth Anderson Kitchen is Professor Emeritus of Egyptology at the University of Liverpool and the world's leading authority on the intersection of Egyptian history and the Old Testament. His landmark work 'On the Reliability of the Old Testament' (2003) systematically evaluated every major period of biblical history against archaeological and epigraphic evidence from surrounding cultures. Kitchen consistently found that the biblical narrative accurately reflects the customs, language, and historical context of the periods it describes — a finding that surprised critics who assumed the texts were late compositions.",
    quote: "The Bible's text is not a fabrication of later centuries. It is a genuine document of its times, and those times are recoverable.",
    contribution: "Kitchen's magisterial synthesis of Egyptological and Old Testament scholarship provided the most comprehensive defense of the historical reliability of the Old Testament ever written. His technical command of ancient Near Eastern languages, archaeology, and chronology places him in a category of his own among biblical scholars.",
  },
];

export default function BiblicalArchaeologyPage() {
  const [activeTab, setActiveTab] = useState<Tab>("discoveries");
  const [era, setEra] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<string>(VOICES_ARCH[0].id);

  const filtered = DISCOVERIES.filter(d => era === "All" || d.era === era);
  const discovery = DISCOVERIES.find(d => d.title === selected);
  const activeVoice = VOICES_ARCH.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⛏️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Biblical Archaeology Discoveries</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            Real archaeological discoveries that confirm the historical accuracy of Scripture — from the Dead Sea Scrolls to the Pontius Pilate Stone. The ground itself testifies.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: "12px 18px", marginBottom: 28 }}>
          <span style={{ color: GREEN, fontWeight: 700, fontSize: 12 }}>Note: </span>
          <span style={{ color: MUTED, fontSize: 13 }}>
            Archaeology cannot prove theological claims about God. What it can do is confirm historical facts — that the people, places, and events recorded in Scripture correspond to real history. Every discovery listed here has been peer-reviewed and accepted by the mainstream archaeological community.
          </span>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 6, flexWrap: "wrap" }}>
          {(["discoveries", "sites", "significance", "voices", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "discoveries" ? "Discoveries" : t === "sites" ? "Sites" : t === "significance" ? "Significance" : t === "voices" ? "Voices" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {/* Discoveries tab */}
        {activeTab === "discoveries" && (
          <>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {ERA_FILTERS.map(e => (
                <button key={e} onClick={() => setEra(e)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {e}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: discovery ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((d, i) => (
                  <button key={i} onClick={() => setSelected(selected === d.title ? null : d.title)}
                    style={{ background: selected === d.title ? `${d.color}12` : CARD, border: `1px solid ${selected === d.title ? d.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${d.color}20`, border: `1px solid ${d.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: d.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                        {d.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{d.title}</span>
                          <span style={{ background: `${ERA_COLOR[d.era] || GREEN}15`, color: ERA_COLOR[d.era] || GREEN, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{d.era}</span>
                        </div>
                        <div style={{ display: "flex", gap: 8, marginTop: 3, alignItems: "center" }}>
                          <span style={{ color: MUTED, fontSize: 12 }}>Discovered {d.year_discovered}</span>
                          <span style={{ color: MUTED, fontSize: 10 }}>·</span>
                          <span style={{ color: MUTED, fontSize: 11 }}>{d.location}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {discovery && (
                <div style={{ background: CARD, border: `1px solid ${discovery.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <h2 style={{ color: discovery.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{discovery.title}</h2>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>Discovered {discovery.year_discovered} · {discovery.location}</div>

                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                    <span style={{ background: `${ERA_COLOR[discovery.era] || GREEN}15`, color: ERA_COLOR[discovery.era] || GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{discovery.era}</span>
                  </div>

                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>BIBLICAL CONNECTION</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{discovery.biblical_connection}</p>
                  </div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{discovery.description}</p>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY IT MATTERS</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{discovery.significance}</p>
                  </div>

                  <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10, marginBottom: 10 }}>
                    <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHERE IT IS NOW</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{discovery.current_location}</p>
                  </div>

                  <div style={{ background: `${discovery.color}08`, border: `1px solid ${discovery.color}20`, borderRadius: 8, padding: 10 }}>
                    <div style={{ color: discovery.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>LEARN MORE</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{discovery.learn_more}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Sites tab */}
        {activeTab === "sites" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {ARCHAEO_SITES.map(site => (
              <div key={site.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                  <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 18, margin: 0 }}>{site.name}</h3>
                  <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "3px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{site.period}</span>
                </div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 12 }}>{site.location}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 14px" }}>{site.description}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>BIBLICAL CONNECTION</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{site.biblical_connection}</p>
                </div>
                <div style={{ color: MUTED, fontSize: 12 }}><span style={{ color: MUTED, fontWeight: 700 }}>Excavated: </span>{site.discovered}</div>
              </div>
            ))}
          </div>
        )}

        {/* Significance tab */}
        {activeTab === "significance" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {ARCHAEO_SIGNIFICANCE.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{item.icon}</span>
                  <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 17, margin: 0 }}>{item.claim}</h3>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>ARCHAEOLOGICAL EVIDENCE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.evidence}</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>KEY SCRIPTURE</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0, fontStyle: "italic" }}>{item.scripture}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Voices tab */}
        {activeTab === "voices" && (
          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 20, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 100 }}>
              {VOICES_ARCH.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedVoice === v.id ? TEXT : MUTED, fontWeight: 800, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <div style={{ marginBottom: 6 }}>
                <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{activeVoice.name}</h2>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{activeVoice.era}</span>
                  <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{activeVoice.context}</span>
                </div>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "16px 0" }}>{activeVoice.bio}</p>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16, marginBottom: 16 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 8 }}>NOTABLE QUOTE</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
                  &ldquo;{activeVoice.quote}&rdquo;
                </p>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 8 }}>CONTRIBUTION TO ARCHAEOLOGY</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{activeVoice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Lectures and documentaries on biblical archaeology — discoveries that illuminate the historical reliability of Scripture.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "QvpyPpIcxNg", title: "Archeological Evidence of Ancient Israel", channel: "Professor Joel Kramer / Expedition Bible", description: "Biblical archaeologist Joel Kramer examines evidence from key sites in Israel that confirm the historical background of the Scriptures." },
                  { videoId: "Y94ewzTKEKw", title: "Archaeological Discovery Forcing Skeptics to Rethink King David", channel: "Archaeology Documentary", description: "Recent excavations in central Israel have uncovered evidence that is reshaping scholarly understanding of David's kingdom and the United Monarchy." },
                  { videoId: "OY0gEwhsF-c", title: "Stunning Archaeological Evidence That Proves the Bible", channel: "Biblical Archaeology Documentary", description: "A lecture exploring 10th-century finds from the City of David and what they mean for the historicity of the biblical narrative." },
                  { videoId: "idIRQNoW1uQ", title: "Is There Evidence for the Bible? Archaeology of Ancient Israel", channel: "Archaeology & Faith", description: "A scholarly examination of what archaeology can and cannot confirm about the biblical text — honest, informative, and faith-affirming." },
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
      <Footer />
    </div>
  );
}
