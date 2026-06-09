"use client";
import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const BLUE = "#3B82F6";

type ChrTab =
  | "overview"
  | "genealogies"
  | "david"
  | "temple"
  | "hezekiah"
  | "josiah"
  | "theology"
  | "journal"
  | "videos";

type JEntry = {
  id: string;
  date: string;
  verse: string;
  reflection: string;
  prayer: string;
};

const TABS: { id: ChrTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "genealogies", label: "Genealogies: Why They Matter" },
  { id: "david", label: "David in Chronicles" },
  { id: "temple", label: "The Temple Project" },
  { id: "hezekiah", label: "Hezekiah's Revival" },
  { id: "josiah", label: "Josiah's Reform" },
  { id: "theology", label: "Distinctive Theology" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

// ── Overview ──────────────────────────────────────────────────────────────────

const OVERVIEW_SECTIONS = [
  {
    color: GOLD,
    title: "What Are the Books of Chronicles?",
    body: "Chronicles (Hebrew: 'the words/events of the days') was originally one book in the Hebrew canon. In some orderings of the Hebrew Bible it appears last — after Ezra-Nehemiah — making it the final word of the Old Testament. The Greek translators of the Septuagint divided it into two books and placed it after Kings, which is where we encounter it in most Christian Bibles today. This placement shapes how modern readers come to the text: we encounter it as a supplement to Samuel-Kings rather than as a capstone of the whole Hebrew story.",
  },
  {
    color: PURPLE,
    title: "Who Wrote Chronicles — and For Whom?",
    body: "Ancient Jewish tradition attributes Chronicles to Ezra, the priestly scribe who led the second wave of returnees from Babylon. Most modern scholars speak of 'the Chronicler' — likely a priestly writer or school in Jerusalem working in the late fifth or early fourth century BC. The audience is crucial: this is not the pre-exilic community hearing prophecies of judgment. This is the post-exilic community — people who have returned from Babylon to a shrunken, impoverished, Persian-dominated Judah. They need not an explanation of why the exile happened, but a vision of what the restored community can be.",
  },
  {
    color: TEAL,
    title: "Chronicles vs. Samuel-Kings: Different Questions",
    body: "Samuel-Kings and Chronicles cover much of the same historical ground, but they ask fundamentally different questions. Samuel-Kings was written during and after the exile to answer: Why did Israel fail? Why did God allow Babylon to destroy the Temple? It tells the story honestly — David's sins, Solomon's apostasy, the persistent unfaithfulness of the kings. Chronicles was written after the return to ask a different question: What can the restored community become? For this reason, the Chronicler makes strategic omissions and significant additions. He is not whitewashing history; he is selecting for his pastoral purpose.",
  },
  {
    color: GREEN,
    title: "What the Chronicler Omits — and Why",
    body: "The Chronicler's omissions are as theologically significant as his additions. Almost all Northern Kingdom history disappears — the Chronicler's concern is with the legitimate Davidic-Levitical community centered on Jerusalem. David's most notorious sins — Bathsheba and Uriah (2 Sam 11–12), the rape of Tamar and Absalom's rebellion (2 Sam 13–18) — are absent. Solomon's apostasy in his old age is omitted. These are not forgotten; they are left aside because the Chronicler's David and Solomon are models for worship leadership, not cautionary tales about personal failure. Different genre, different purpose.",
  },
  {
    color: BLUE,
    title: "What the Chronicler Adds — and Why",
    body: "The Chronicler's additions cluster around one theme: worship. David's massive preparations for the Temple (1 Chr 22–29 — entirely absent from Samuel-Kings), his organization of Levitical singers and musicians, his collection of materials, his charge to Solomon. Solomon's Temple dedication prayer receives extended treatment. Hezekiah's revival gets more space in Chronicles than in Kings. Josiah's Passover is richly detailed. The Chronicler adds genealogies that span nine chapters. All of these additions serve a single vision: the post-exilic community needs to know that they are heirs to a rich worship tradition, that Temple and Levitical service matter, and that God responds to his people when they seek him.",
  },
  {
    color: GOLD,
    title: "The Ending: An Open Door",
    body: "Second Chronicles ends with Cyrus the Great's decree (2 Chr 36:22–23): 'Thus says Cyrus king of Persia: The LORD, the God of heaven, has given me all the kingdoms of the earth, and he has charged me to build him a house at Jerusalem, which is in Judah. Whoever is among you of all his people, may the LORD his God be with him. Let him go up.' The last Hebrew word — ya'al, 'let him go up' — is an invitation, not a conclusion. Chronicles ends mid-sentence pointing forward. In the Hebrew canon, 2 Chronicles connects seamlessly to Ezra, which begins with the same decree. The story of God's people is always unfinished, always pressing toward restoration.",
  },
  {
    color: MUTED,
    title: "Why Read Chronicles If We Already Have Samuel-Kings?",
    body: "Because the Chronicler asks different questions — and different questions illuminate different truths. Samuel-Kings asks: why did Israel fail? Chronicles asks: what can the restored community be? Samuel-Kings gives us a David who sins spectacularly and suffers for it. Chronicles gives us a David who pours his energy into preparing worship. Both portraits are canonical. Both are true. Reading them together gives us a fuller picture than either provides alone. And reading Chronicles on its own terms — as pastoral theology for a struggling post-exilic community — teaches us to ask: what does it look like for God's people to rebuild after catastrophe? That question has never become obsolete.",
  },
];

// ── Genealogies ───────────────────────────────────────────────────────────────

const GENEALOGIES_SECTIONS = [
  {
    color: GOLD,
    title: "Nine Chapters of Names — Is There a Point?",
    body: "First Chronicles opens with nine chapters of genealogies — the most dense genealogical section in the entire Bible. For modern readers conditioned to skip to the 'good parts,' this is a challenge. But the Chronicler's audience did not find lists of names boring. In the post-exilic world, genealogies were legal documents. They determined who could serve as priests, who could be included in the assembly, who had claim to ancestral land. When the exiles returned, they carried their genealogies with them. If you could not prove your lineage, you could not serve at the altar (see Ezra 2:62). The Chronicler's genealogies are not filler; they are the foundation.",
  },
  {
    color: PURPLE,
    title: "Starting with Adam (1 Chr 1:1)",
    body: "The very first word of Chronicles is 'Adam.' Not 'In the beginning.' Not 'Abraham.' Adam. This is a remarkable editorial choice. The Chronicler traces Israel's story all the way back to the first human being, embedding Israel's identity within the story of all humanity. Israel is not a tribe that appeared in Canaan; Israel is the particular channel through which the God of all creation is working out his purposes for all of humanity. Despite the smallness and poverty of the returned community, they carry a story that begins at the beginning of time. Their genealogy connects them to the very origin of the human race.",
  },
  {
    color: TEAL,
    title: "Three Purposes of the Genealogies",
    body: "The genealogies serve at least three purposes: (1) Identity — in the post-exilic world, they functioned as legal documents proving community membership, priestly eligibility, and land rights. (2) Continuity — despite the devastation of exile, the Chronicler traces God's purposes in an unbroken line from Adam to the present generation. Babylon did not sever the thread. (3) Theology — beginning with Adam rather than Abraham makes a statement about Israel's place in the story of all nations. Israel's story is woven into world history from the beginning. The exile was an interruption, not the end.",
  },
  {
    color: GREEN,
    title: "The Davidic Line Through Exile (1 Chr 3:17–24)",
    body: "One of the most significant passages in the genealogies is 1 Chronicles 3:17–24, which traces the Davidic royal line through the exile and into the period after the return. Jehoiachin (the last king before the Babylonian deportation) has children. His line continues through Shealtiel and Zerubbabel — the governor of the returned community who leads the reconstruction of the Temple. The messianic line is not severed by Babylon. The Chronicler carefully documents that the seed of David survives the exile and continues among the people. This is not just historical record; it is messianic hope embedded in a list of names.",
  },
  {
    color: BLUE,
    title: "The Prayer of Jabez (1 Chr 4:9–10)",
    body: "Embedded in the tribal genealogies of chapter 4 is a brief, startling interruption: the prayer of Jabez. In the middle of an unbroken list of names, a single man prays: 'Oh that you would bless me and enlarge my territory, and that your hand might be with me, and that you would keep me from harm so that it might not bring me pain!' The text simply reports: 'And God granted what he asked.' The placement is deliberate. In a list of names where most people are simply born and die without comment, one man prays — and it changes his story. The genealogies may be full of anonymous names, but God hears the prayers of every person in every generation. Prayer opens possibilities that mere existence does not.",
  },
  {
    color: GOLD,
    title: "The Levites (Chapters 6, 15, 23–27)",
    body: "The Chronicler gives extensive and detailed attention to Levitical genealogies and roles — singers, gatekeepers, musicians, treasurers, those who serve in various capacities around the Temple. To a modern reader this can seem excessive, even bureaucratic. But for the Chronicler's audience it was a vision: worship requires structure. It requires preparation. It requires trained people serving in defined roles. The singers Asaph, Heman, and Jeduthun are listed by name. Their families are traced. Their assignments are detailed. This is not mere administration; it is a theological statement that the worship of God is important enough to organize carefully, train for thoroughly, and staff intentionally. Every role in worship matters.",
  },
];

// ── David ─────────────────────────────────────────────────────────────────────

const DAVID_SECTIONS = [
  {
    color: GOLD,
    title: "The Chronicler's David: A Theological Portrait",
    body: "The David of Chronicles is a theological icon — the Temple-planner, the worship-organizer, the man whose deepest passion is building a house for God. The Chronicler is not writing biography; he is painting a portrait of the ideal leader as worshiper. This David is relentlessly focused on the Temple: gathering materials, organizing personnel, drawing up plans, charging his son, offering prayers of breathtaking depth. The compromised warrior-king of Samuel — the man who lies, lusts, murders, and faces catastrophic consequences — is largely absent. Both portraits are canonical. Both tell the truth about David. But the Chronicler's David is the model for the post-exilic community's leaders.",
  },
  {
    color: PURPLE,
    title: "What the Chronicler Omits About David",
    body: "The deliberate omissions speak loudly. Bathsheba and Uriah (2 Sam 11–12) — absent. Amnon's rape of Tamar and Absalom's rebellion (2 Sam 13–18) — absent. The conflict over succession and the deathbed political maneuvering (1 Kings 1–2) — absent. This is not historical deception; it is theological selection. The Chronicler is writing to inspire worship leaders and worshipers, not to compile a complete psychological biography of a flawed king. He is asking: what is the David worth imitating? What legacy did David leave that the restored community can build on? The answer, for the Chronicler, is entirely focused on worship and the Temple.",
  },
  {
    color: TEAL,
    title: "David's Temple Preparations (1 Chr 22–29)",
    body: "First Chronicles 22–29 is entirely absent from Samuel-Kings — this is the Chronicler's largest original contribution to the David narrative. David cannot build the Temple because he has shed too much blood in battle (22:8). But he prepares everything: 100,000 talents of gold, a million talents of silver, iron and bronze beyond weighing, cedar logs, craftsmen organized and waiting. He draws up the architectural plans, which God gives him by the Spirit (28:12, 19). He assembles the Levites and assigns them roles. He organizes the priests in their divisions. He designates the musicians. He charges his son. David's inability to build the Temple is not defeat; it is faithfulness in his proper role — the warrior king who prepares the way for the peace king who builds.",
  },
  {
    color: GREEN,
    title: "David's Charge to Solomon (1 Chr 22:6–16)",
    body: "The charge David gives Solomon before the assembly is among the most important passages in Chronicles: 'Solomon my son, know the God of your father and serve him with a whole heart and with a willing mind, for the LORD searches all hearts and understands every plan and thought. If you seek him, he will be found by you, but if you forsake him, he will cast you off forever.' The theological heart of Chronicles is right here: God is found by those who seek him and forsakes those who forsake him. This is the Chronicler's pastoral principle repeated throughout the book. The charge to seek God with a whole heart is not just David's word to Solomon — it is the Chronicler's word to every generation of God's people.",
  },
  {
    color: BLUE,
    title: "The Census and the Temple Site (1 Chr 21)",
    body: "The census is one sin from Samuel-Kings that the Chronicler does include — because it serves his larger purpose. David numbers the fighting men against God's will; the consequence is a plague. An angel of judgment stands at the threshing floor of Ornan (called Araunah in 2 Samuel) the Jebusite, just north of Jerusalem. David sees the angel, falls on his face, and prays. He buys the threshing floor and builds an altar; the plague stops. God answers by fire. And in 2 Chronicles 3:1, the Temple is built precisely at this spot — 'Mount Moriah, where the LORD had appeared to David his father.' The same location as Abraham's offering of Isaac (Gen 22:2). The Temple is built where divine judgment was stayed by sacrifice.",
  },
  {
    color: GOLD,
    title: "David's Final Prayer (1 Chr 29:10–19)",
    body: "David's prayer at the end of his life — offered before the entire assembly as they dedicate the Temple materials — is one of the greatest prayers in the Old Testament. 'Yours, O LORD, is the greatness and the power and the glory and the victory and the majesty, for all that is in the heavens and the earth is yours. Yours is the kingdom, O LORD, and you are exalted as head above all.' Then the humbling turn: 'But who am I, and what is my people, that we should be able thus to offer willingly? For all things come from you, and of your own have we given you.' The prayer acknowledges that even the most lavish human offering to God is simply giving back what God first gave. It is used in many Christian liturgies to this day.",
  },
];

// ── Temple ────────────────────────────────────────────────────────────────────

const TEMPLE_SECTIONS = [
  {
    color: GOLD,
    title: "The Temple as Theological Center",
    body: "No other book of the Bible gives the Temple the centrality that Chronicles does. The Temple is not primarily a building; it is the place of the divine Name — where God causes his name to dwell among his people. It is the intersection of heaven and earth, the place where prayer is directed and heard, the architectural expression of the covenant. For the Chronicler's post-exilic audience — who had seen the Temple destroyed and were now rebuilding — this emphasis was not abstract theology. It was pastoral: your worship matters, your Temple matters, what you are building is the thing that stands at the center of the universe's story.",
  },
  {
    color: PURPLE,
    title: "Why David Cannot Build It (1 Chr 22:8)",
    body: "God's specific word to David about why he cannot build the Temple is one of the most arresting statements in Chronicles: 'You have shed much blood and have waged great wars. You shall not build a house to my name, because you have shed so much blood before me on the earth.' This is not condemnation — God still loves David, still honors him. But the Temple requires a different king. Solomon's name derives from shalom — peace. He is the peace king, the one who will build the house of rest. David's role is to fight the battles that create the conditions for peace; Solomon's role is to build the peace. The two roles are complementary, not competitive. Both are necessary.",
  },
  {
    color: TEAL,
    title: "Solomon's Dedication Prayer (2 Chr 6:14–42)",
    body: "Solomon's prayer at the Temple's dedication is one of the longest prayers in Scripture and the theological heart of Chronicles' first half. It covers seven scenarios in which prayer toward the Temple should be heard: when an individual is wronged (6:22–23), when Israel is defeated in battle (6:24–25), when drought comes (6:26–27), when famine or plague strikes (6:28–31), when a foreigner prays toward the Temple (6:32–33 — remarkable: God should answer the prayers of Gentiles who come seeking him), when Israel goes to war (6:34–35), and — most poignantly — when Israel is in exile far away, prays toward Jerusalem, and confesses their sin (6:36–39). The Temple is not a tribal shrine. It is a house of prayer for all nations.",
  },
  {
    color: GREEN,
    title: "The Glory Cloud (2 Chr 7:1–3)",
    body: "When Solomon finishes his prayer, fire falls from heaven and consumes the burnt offering and the sacrifices, and the glory of the LORD fills the Temple. The priests cannot enter because of the glory. All the people see the fire come down and the glory fill the Temple; they fall on their faces on the pavement and worship. 'He is good, for his steadfast love endures forever.' The fire and the glory are the same signs God used at the dedication of the Tabernacle under Moses (Lev 9:24; Exod 40:34–35). The Temple dedication recapitulates the Tabernacle dedication. The God who filled Moses' tent now fills Solomon's Temple. The presence of God is the only thing that makes the building holy.",
  },
  {
    color: BLUE,
    title: "2 Chronicles 7:14 — The Most-Quoted Verse",
    body: "God's response to Solomon's prayer includes the most-quoted verse in Chronicles and one of the most-cited verses in American Christian culture: 'If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.' Four conditions: humility, prayer, seeking, repentance. The promise: hearing, forgiveness, healing. The verse is specifically addressed to God's covenant people ('my people who are called by my name'), not as a general civic promise. Its context is the Temple dedication — God is describing the purpose of the building Solomon has just completed. Prayer, humility, and repentance are what the Temple is for.",
  },
  {
    color: GOLD,
    title: "The Destruction of the Temple (2 Chr 36:19)",
    body: "After chapters upon chapters of Temple-focused theology, the Chronicler arrives at the worst moment: 'They burned the house of God and broke down the wall of Jerusalem and burned all its palaces with fire and destroyed all its precious vessels.' The text moves on with almost no commentary. There is no extended lament, no theological explanation of why this happened beyond the summary statement that the people had mocked God's messengers and rejected his word. The loss is meant to be felt as devastating. The Chronicler does not shield his readers from the horror. And then, almost immediately, the book turns to Cyrus's decree — the door opening back toward restoration. The destruction is real. The restoration is more real.",
  },
];

// ── Hezekiah ──────────────────────────────────────────────────────────────────

const HEZEKIAH_SECTIONS = [
  {
    color: GOLD,
    title: "The Chronicler's Expanded Hezekiah",
    body: "Hezekiah's revival in 2 Chronicles 29–32 receives significantly more space in Chronicles than in the parallel account in 2 Kings 18–20. This expansion is intentional: Hezekiah is one of the Chronicler's model kings, and his account demonstrates in detail what it looks like to 'seek the LORD' with a whole heart. The structure is telling — Hezekiah's first act as king is to open the Temple doors (closed by his father Ahaz), purify the Temple, and restore worship. He does not wait until the political situation is stable, the economy is healthy, or the Assyrian threat has passed. He restores worship first, as the foundation of everything else.",
  },
  {
    color: PURPLE,
    title: "Purifying the Temple (2 Chr 29)",
    body: "King Ahaz had closed the Temple doors, smashed the Temple vessels, and set up pagan altars throughout Jerusalem and the cities of Judah. Hezekiah's first royal act — in his first year, first month — is to open the Temple, sanctify the priests, and commission the cleansing. It takes sixteen days. The reinstated offerings include not just the required sacrifices but — remarkably — the Levitical musicians. Hezekiah stations them with cymbals, harps, and lyres, 'according to the commandment of David and Gad the king's seer and Nathan the prophet' (29:25). Worship is not just resumed; it is restored to its full Davidic form. The Chronicler wants his readers to know: Hezekiah did not just reopen the Temple; he rebuilt the worship culture.",
  },
  {
    color: TEAL,
    title: "The Great Passover (2 Chr 30)",
    body: "Hezekiah does something unprecedented: he invites not just Judah but the remnant of the Northern Kingdom — Israel, which had already fallen to Assyria in 722 BC — to come to Jerusalem for Passover. He sends couriers throughout the land carrying letters. Many in the north mock the couriers. But some from Asher, Manasseh, and Zebulun humble themselves and come. The Chronicler notes: 'The hand of God was also on Judah to give them one heart to do what the king and the princes commanded by the word of the LORD' (30:12). Hezekiah's Passover is a vision of reunification — fractured Israel gathered again around common worship. The exile of the Northern Kingdom is not final as long as people can still come up to Jerusalem.",
  },
  {
    color: GREEN,
    title: "Grace Over Procedure (2 Chr 30:18–20)",
    body: "At Hezekiah's Passover, many of the northern participants had not gone through the proper ritual purification required before eating the Passover. Hezekiah prays for them: 'The good LORD pardon everyone who sets his heart to seek God, the LORD, the God of his fathers, even though not according to the sanctuary's rules of cleanness.' God hears. The LORD heals the people. This is one of the Chronicler's most striking theological moments: the heart matters more than the procedure. When people genuinely seek God with sincere hearts, God responds with grace even when the externals are imperfect. This does not abolish liturgical order — Hezekiah also restores all the proper forms — but it establishes that God looks at the heart first.",
  },
  {
    color: BLUE,
    title: "The Celebration Extended (2 Chr 30:23–27)",
    body: "The joy at Hezekiah's Passover was so great that the assembly decided to celebrate another seven days. Hezekiah contributed an additional 1,000 bulls and 7,000 sheep and goats from his own resources. The princes contributed as well. The Levites sang and played instruments every day. When it was over, the priests blessed the people, 'and their voice was heard, and their prayer came to his holy habitation in heaven.' The Chronicler's comment: 'Since the time of Solomon the son of David king of Israel there had been nothing like this in Jerusalem' (30:26). The revival under Hezekiah is the closest thing to the golden age of Solomon since Solomon himself. This is what seeking God produces.",
  },
  {
    color: GOLD,
    title: "Sennacherib and Hezekiah's Prayer (2 Chr 32)",
    body: "The Assyrian crisis — Sennacherib's invasion and his blasphemous letters to Hezekiah — occupies chapter 32. The same story appears in 2 Kings 18–19 and Isaiah 36–37, but the Chronicler's emphasis is slightly different. Where Kings and Isaiah give extended space to Sennacherib's speeches and Hezekiah's detailed prayer (Isa 37:15–20), Chronicles summarizes more quickly to reach the point: 'Hezekiah the king and Isaiah the prophet... prayed concerning this and cried to heaven. And the LORD sent an angel, who cut off all the mighty warriors and commanders and officers in the camp of the king of Assyria' (32:20–21). The Chronicler's version strips it to the essential pattern: crisis + prayer = divine action. The post-exilic community needs to know: prayer works.",
  },
];

// ── Josiah ────────────────────────────────────────────────────────────────────

const JOSIAH_SECTIONS = [
  {
    color: GOLD,
    title: "The Youngest Reformer",
    body: "Josiah becomes king at age eight. The Chronicler notes his trajectory with unusual precision: 'In the eighth year of his reign, while he was yet a boy, he began to seek the God of David his father' (34:3) — age sixteen. 'In the twelfth year he began to purge Judah and Jerusalem of the high places, the Asherim, and the carved and metal images' (34:3) — age twenty. The book of the Law is found in his twenty-sixth year. Josiah's reform is not a sudden response to a crisis; it is a progressive, deliberate movement toward God that begins in childhood. The Chronicler presents Josiah as evidence that genuine spiritual seeking, begun young, produces lasting and escalating reform.",
  },
  {
    color: PURPLE,
    title: "Finding the Law (2 Chr 34:14–21)",
    body: "During repairs to the Temple, Hilkiah the high priest finds 'the Book of the Law of the LORD given through Moses.' The book — likely Deuteronomy or a significant portion of it — has been lost. When the secretary reads it to Josiah, the king tears his robes. He does not argue, justify, or minimize. He hears judgment and grieves it immediately. His response: 'Great is the wrath of the LORD that is poured out on us, because our fathers have not kept the word of the LORD, to do according to all that is written in this book.' He sends to inquire of the LORD through the prophetess Huldah. The tearing of robes is a powerful image: the Word of God, heard honestly, undoes you before it rebuilds you.",
  },
  {
    color: TEAL,
    title: "The Prophetess Huldah's Word (2 Chr 34:22–28)",
    body: "The messengers Josiah sends do not go to Jeremiah, who was also active at this time. They go to Huldah the prophetess. Her word is both severe and merciful. Severe: the curses written in the book will come upon Jerusalem because the people have forsaken God and burned incense to other gods. Merciful: because Josiah humbled himself, tore his robes, and wept, the disaster will not come in his lifetime. He will be gathered to his tomb in peace. The message is sobering: national consequence is inevitable; personal humility is still heard and answered. Judgment is real. And so is grace. The two do not cancel each other; they coexist in God's dealings with his people.",
  },
  {
    color: GREEN,
    title: "Josiah's Passover (2 Chr 35)",
    body: "Josiah's Passover is described as the greatest celebration since Samuel's time — 'No Passover like it had been kept in Israel since the days of Samuel the prophet' (35:18). The logistical detail is impressive: the Levites serving in their divisions according to David's organization, the priests in their places, the singers in position, the gatekeepers at their stations. Josiah personally contributes 30,000 lambs and young goats and 3,000 bulls for the people's Passover offerings. He provides for the priests' portions as well. The celebration is lavish, ordered, joyful, and deeply traditional. It connects the returned community all the way back through David, through Moses, to the first Passover in Egypt. The chain of tradition holds.",
  },
  {
    color: BLUE,
    title: "Josiah's Death — The Sobering Tragedy (2 Chr 35:20–27)",
    body: "The tragic irony of Josiah's end is one of the Chronicler's most theologically difficult passages. The most righteous king since David dies in battle at Megiddo — against Pharaoh Neco of Egypt. Why? Because he did not listen to the word of God delivered through a surprising channel: 'But he did not listen to the words of Neco from the mouth of God.' The pagan Pharaoh warned Josiah not to interfere, claiming to be acting on divine instruction. Josiah, inexplicably, disguises himself and fights anyway. He is fatally wounded. The Chronicler does not soften this: 'God commanded me to hurry. Cease opposing God, who is with me, lest he destroy you.' But Josiah did not listen. Righteousness does not make us immune to the consequences of specific acts of disobedience — even pious disobedience.",
  },
  {
    color: GOLD,
    title: "Jeremiah's Lament and the Nation's Grief (2 Chr 35:25)",
    body: "Josiah's death precipitates national mourning on a scale Chronicles records for no other event. 'Jeremiah also uttered a lament for Josiah; and all the singing men and singing women have spoken of Josiah in their laments to this day. They made these a rule in Israel; behold, they are written in the Laments.' The reference is likely to what became the book of Lamentations, or a portion of it, which may have its origins in the communal grief over Josiah. The death of the best king of the late monarchy at Megiddo marks the effective end of any hope for national restoration under a godly king. From Josiah's death, it is a rapid decline to Babylon. His loss is meant to be felt as catastrophic — and formative.",
  },
];

// ── Theology ──────────────────────────────────────────────────────────────────

const THEOLOGY_SECTIONS = [
  {
    color: GOLD,
    title: "'Seek God' — The Heartbeat of Chronicles",
    body: "The single most important theological verb in Chronicles is darash — to seek, inquire of, consult. It appears more in Chronicles than in any other book of the Bible. Those who seek God find him; those who forsake God are forsaken. 'The LORD is with you while you are with him. If you seek him, he will be found by you, but if you forsake him, he will forsake you' (2 Chr 15:2). This principle — announced by the prophet Azariah and echoed throughout the book — is the Chronicler's fundamental pastoral message. It is not a formula for prosperity; it is a description of how God relates to his people. Seeking is not passive; it involves prayer, repentance, worship, and obedience. The post-exilic community that gathers to rebuild must learn to be a seeking community.",
  },
  {
    color: PURPLE,
    title: "Immediate Retribution — Pastoral Theology in Action",
    body: "Chronicles is sometimes criticized for its 'retribution theology' — the apparent connection between faithfulness and blessing, apostasy and judgment, sometimes arranged more neatly than historical reality. But this critique misses the Chronicler's pastoral purpose. Unlike Kings, where punishment often falls on future generations, Chronicles frequently shows more immediate connections between action and consequence. The reason is pastoral, not naive: the post-exilic community needs to know that their choices today produce real consequences today. They are not locked into their ancestors' failures. They can seek God now and find him now. The retribution pattern is not a claim that suffering always means sin; it is an encouragement that repentance genuinely changes things.",
  },
  {
    color: TEAL,
    title: "Worship Infrastructure — Why It Matters",
    body: "Chronicles gives unprecedented attention to worship infrastructure: the singers Asaph, Heman, and Jeduthun; the gatekeepers and their family assignments; the treasurers; the musicians with their instruments; the divisions of priests and their rotation schedules. Modern readers often skip this material as bureaucratic detail. The Chronicler sees it as theological statement: worship requires preparation, order, artistry, and trained community. The post-exilic community rebuilding the Temple needed to know that organized, beautiful, ordered worship is not formalism — it is faithfulness. God is worth preparing for. Excellence in worship is a form of devotion, not a distraction from it.",
  },
  {
    color: GREEN,
    title: "Prayer and Divine Action — A Theology of Prayer",
    body: "Chronicles is a sustained theology of prayer. Prayer is the pivot on which the Chronicler's narratives turn. Hezekiah faces Sennacherib: he prays, God acts. Jehoshaphat faces a coalition of enemies in 2 Chronicles 20: he prays, the people fast, God acts — the enemies destroy each other while Judah sings praise. Jabez prays in the middle of the genealogies: God grants it. Solomon dedicates the Temple with prayer: God answers with fire and glory. Asa cries to God in battle: God gives victory. The pattern is not mechanical formula but covenantal reality: God is personally engaged with his people, and prayer is the channel of that engagement. The post-exilic community has a God who hears.",
  },
  {
    color: BLUE,
    title: "Jehoshaphat's War That Was Not a War (2 Chr 20)",
    body: "One of the most extraordinary passages in Chronicles is the story of Jehoshaphat facing a vast coalition of Moabites, Ammonites, and Meunites. He has no military answer. He proclaims a fast, gathers the people to Jerusalem, and prays in the Temple court. A Levite prophesies: 'Do not be afraid and do not be dismayed at this great horde, for the battle is not yours but God's' (20:15). Jehoshaphat appoints singers to go before the army singing praise to God. As they sing, the LORD sets ambushes. The enemy coalition turns on itself and destroys itself. Judah arrives at the battlefield to find only corpses and plunder. It takes three days to collect the spoil. The passage is the Chronicler's most vivid example of what prayer, praise, and trust in God can do in an impossible situation.",
  },
  {
    color: GOLD,
    title: "The Cyrus Decree — The Last Word (2 Chr 36:22–23)",
    body: "'Thus says Cyrus king of Persia: The LORD, the God of heaven, has given me all the kingdoms of the earth, and he has charged me to build him a house at Jerusalem, which is in Judah. Whoever is among you of all his people, may the LORD his God be with him. Let him go up.' The last word of Chronicles in the Hebrew — ya'al, 'let him go up' — is not a period; it is an open door. Chronicles ends not with resolution but with invitation. The story of God and his people cannot be closed by Babylonian destruction or Persian politics. God works through the most unlikely instruments — even a pagan king — to accomplish his purposes. And the final word is always an invitation: come, seek, go up. The story continues.",
  },
];

export default function ChroniclesGuidePage() {
  const [tab, setTab] = usePersistedState<ChrTab>("vine_chronicles_tab", "overview");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const [entries, setEntries] = useState<JEntry[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("vine_chronicles_journal") ?? "[]");
    } catch {
      return [];
    }
  });
  const [form, setForm] = useState<{ verse: string; reflection: string; prayer: string }>({
    verse: "",
    reflection: "",
    prayer: "",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("vine_chronicles_journal", JSON.stringify(entries));
    } catch {}
  }, [entries]);

  const saveEntry = useCallback(() => {
    if (!form.verse.trim() && !form.reflection.trim()) return;
    const newEntry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      verse: form.verse,
      reflection: form.reflection,
      prayer: form.prayer,
    };
    setEntries((prev) => [newEntry, ...prev]);
    setForm({ verse: "", reflection: "", prayer: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }, [form]);

  const deleteEntry = useCallback((id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const handleTabChange = useCallback(
    (id: ChrTab) => {
      setTab(id);
      setOpenAccordion(null);
    },
    [setTab]
  );

  // Determine the right section data for accordion tabs
  const accordionSections = (() => {
    if (tab === "overview") return OVERVIEW_SECTIONS;
    if (tab === "genealogies") return GENEALOGIES_SECTIONS;
    if (tab === "david") return DAVID_SECTIONS;
    if (tab === "temple") return TEMPLE_SECTIONS;
    if (tab === "hezekiah") return HEZEKIAH_SECTIONS;
    if (tab === "josiah") return JOSIAH_SECTIONS;
    if (tab === "theology") return THEOLOGY_SECTIONS;
    return null;
  })();

  const tabMeta: Record<
    ChrTab,
    { heading: string; sub: string }
  > = {
    overview: {
      heading: "Overview: Why Chronicles?",
      sub: "Understanding the Chronicler's purpose, audience, and theological agenda",
    },
    genealogies: {
      heading: "Genealogies: Why They Matter",
      sub: "1 Chronicles 1–9 — nine chapters of names that carry the weight of identity, continuity, and hope",
    },
    david: {
      heading: "David in Chronicles",
      sub: "The Temple-planner and worship-organizer — a theological portrait of Israel's greatest king",
    },
    temple: {
      heading: "The Temple Project",
      sub: "The theological center of Chronicles — from David's preparations to the glory cloud to the final destruction",
    },
    hezekiah: {
      heading: "Hezekiah's Revival",
      sub: "2 Chronicles 29–32 — the most detailed revival account in the Hebrew scriptures",
    },
    josiah: {
      heading: "Josiah's Reform",
      sub: "2 Chronicles 34–35 — the last great revival before the exile, and the sobering tragedy that followed",
    },
    theology: {
      heading: "Distinctive Theology",
      sub: "The Chronicler's unique theological emphases — what makes this book different from every other historical book",
    },
    journal: {
      heading: "My Chronicles Journal",
      sub: "Record your insights, key verses, and prayers as you study through the books of Chronicles",
    },
    videos: {
      heading: "Teaching Videos",
      sub: "Trusted scholars and teachers on the books of Chronicles",
    },
  };

  const current = tabMeta[tab];

  const statsData = [
    { value: "65", label: "chapters across 1–2 Chronicles" },
    { value: "9", label: "chapters of genealogies (1 Chr 1–9)" },
    { value: "536 BC", label: "approximate date of composition" },
    { value: "Adam", label: "first word — wider scope than any other history" },
  ];

  return (
    <>
      <Navbar />
      <div
        style={{
          background: BG,
          minHeight: "100vh",
          color: TEXT,
          paddingTop: "var(--header-height, 80px)",
        }}
      >
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 80px" }}>

          {/* ── Page Header ── */}
          <div style={{ textAlign: "center", padding: "48px 0 36px" }}>
            <div
              style={{
                display: "inline-block",
                background: GOLD + "20",
                border: `1px solid ${GOLD}44`,
                borderRadius: 20,
                padding: "4px 16px",
                fontSize: 11,
                fontWeight: 800,
                color: GOLD,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Bible Study Guide
            </div>
            <h1
              style={{
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 900,
                color: TEXT,
                marginBottom: 14,
                lineHeight: 1.15,
              }}
            >
              The Books of Chronicles
            </h1>
            <p
              style={{
                color: MUTED,
                fontSize: 16,
                maxWidth: 680,
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              From Adam to Cyrus — the Chronicler retells Israel&apos;s history for a community
              returning from exile, asking not &ldquo;why did we fail?&rdquo; but &ldquo;what can we become?&rdquo;
            </p>
          </div>

          {/* ── Stats Banner ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
              marginBottom: 40,
            }}
          >
            {statsData.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: "20px 16px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: GOLD,
                    marginBottom: 6,
                    lineHeight: 1.2,
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* ── Tab Bar ── */}
          <div
            style={{
              display: "flex",
              gap: 4,
              marginBottom: 32,
              background: CARD,
              borderRadius: 10,
              padding: 4,
              flexWrap: "wrap",
            }}
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => handleTabChange(t.id)}
                style={{
                  padding: "9px 16px",
                  borderRadius: 8,
                  border: "none",
                  background: tab === t.id ? GOLD : "transparent",
                  color: tab === t.id ? "#07070F" : MUTED,
                  fontWeight: 700,
                  fontSize: 12,
                  cursor: "pointer",
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ── Tab Heading ── */}
          {tab !== "journal" && tab !== "videos" && (
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 24, fontWeight: 900, color: TEXT, marginBottom: 6 }}>
                {current.heading}
              </h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                {current.sub}
              </p>
            </div>
          )}

          {/* ── Accordion Tabs (overview, genealogies, david, temple, hezekiah, josiah, theology) ── */}
          {accordionSections && (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {accordionSections.map((section, i) => {
                const isOpen = openAccordion === i;
                return (
                  <div
                    key={i}
                    style={{
                      background: CARD,
                      border: `1px solid ${isOpen ? section.color : BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                      transition: "border-color 0.15s",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(isOpen ? null : i)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "20px 24px",
                        background: "transparent",
                        border: "none",
                        color: TEXT,
                        fontWeight: 800,
                        fontSize: 15,
                        cursor: "pointer",
                        textAlign: "left",
                        gap: 12,
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: section.color,
                            flexShrink: 0,
                            display: "inline-block",
                          }}
                        />
                        {section.title}
                      </span>
                      <span
                        style={{
                          color: section.color,
                          fontSize: 22,
                          fontWeight: 900,
                          lineHeight: 1,
                          flexShrink: 0,
                        }}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: "0 24px 26px",
                          borderTop: `1px solid ${BORDER}`,
                        }}
                      >
                        <p
                          style={{
                            color: MUTED,
                            fontSize: 14,
                            lineHeight: 1.85,
                            margin: "18px 0 0",
                          }}
                        >
                          {section.body}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ── Journal Tab ── */}
          {tab === "journal" && (
            <div>
              {/* Header card */}
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "24px 28px",
                  marginBottom: 24,
                }}
              >
                <h2
                  style={{
                    color: GOLD,
                    fontWeight: 900,
                    fontSize: 22,
                    marginBottom: 8,
                  }}
                >
                  My Chronicles Journal
                </h2>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  Record the verses that stopped you, your reflections on what God is saying
                  through Chronicles, and your prayers in response. Your entries are saved
                  privately in your browser.
                </p>
              </div>

              {/* Entry form */}
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "24px 28px",
                  marginBottom: 28,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {/* Verse */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        color: MUTED,
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: 7,
                      }}
                    >
                      Key Verse or Passage
                    </label>
                    <input
                      type="text"
                      value={form.verse}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, verse: e.target.value }))
                      }
                      placeholder="e.g. 2 Chronicles 7:14, 1 Chronicles 29:14, 2 Chronicles 15:2"
                      style={{
                        width: "100%",
                        background: BG,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 8,
                        color: TEXT,
                        fontSize: 14,
                        padding: "10px 14px",
                        boxSizing: "border-box",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Reflection */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        color: MUTED,
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: 7,
                      }}
                    >
                      Reflection — What Is God Saying?
                    </label>
                    <textarea
                      rows={4}
                      value={form.reflection}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, reflection: e.target.value }))
                      }
                      placeholder="What stood out to you in Chronicles today? What did the Chronicler's emphasis on worship, seeking God, or the Temple teach you?"
                      style={{
                        width: "100%",
                        background: BG,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 8,
                        color: TEXT,
                        fontSize: 14,
                        padding: "10px 14px",
                        resize: "vertical",
                        boxSizing: "border-box",
                        outline: "none",
                        lineHeight: 1.6,
                      }}
                    />
                  </div>

                  {/* Prayer */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        color: MUTED,
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: 7,
                      }}
                    >
                      Prayer Response
                    </label>
                    <textarea
                      rows={3}
                      value={form.prayer}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, prayer: e.target.value }))
                      }
                      placeholder="How does this passage move you to pray? You might echo David's prayer in 1 Chr 29 — 'of your own have we given you...'"
                      style={{
                        width: "100%",
                        background: BG,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 8,
                        color: TEXT,
                        fontSize: 14,
                        padding: "10px 14px",
                        resize: "vertical",
                        boxSizing: "border-box",
                        outline: "none",
                        lineHeight: 1.6,
                      }}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={saveEntry}
                    style={{
                      alignSelf: "flex-start",
                      background: GOLD,
                      color: "#07070F",
                      border: "none",
                      borderRadius: 8,
                      padding: "11px 28px",
                      fontWeight: 800,
                      fontSize: 14,
                      cursor: "pointer",
                      transition: "opacity 0.15s",
                    }}
                  >
                    {saved ? "Saved" : "Save Entry"}
                  </button>
                </div>
              </div>

              {/* Saved entries */}
              {entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {entries.map((entry) => (
                    <div
                      key={entry.id}
                      style={{
                        background: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 14,
                        padding: "20px 24px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 14,
                        }}
                      >
                        <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                        <button
                          type="button"
                          onClick={() => deleteEntry(entry.id)}
                          style={{
                            background: "none",
                            border: "none",
                            color: MUTED,
                            cursor: "pointer",
                            fontSize: 14,
                            padding: "2px 6px",
                          }}
                          aria-label="Delete entry"
                        >
                          &#x2715;
                        </button>
                      </div>

                      {entry.verse && (
                        <div style={{ marginBottom: 12 }}>
                          <span
                            style={{
                              color: GOLD,
                              fontSize: 10,
                              fontWeight: 800,
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                            }}
                          >
                            Verse
                          </span>
                          <p
                            style={{
                              color: TEXT,
                              fontSize: 14,
                              margin: "4px 0 0",
                              lineHeight: 1.6,
                            }}
                          >
                            {entry.verse}
                          </p>
                        </div>
                      )}

                      {entry.reflection && (
                        <div style={{ marginBottom: 12 }}>
                          <span
                            style={{
                              color: PURPLE,
                              fontSize: 10,
                              fontWeight: 800,
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                            }}
                          >
                            Reflection
                          </span>
                          <p
                            style={{
                              color: TEXT,
                              fontSize: 14,
                              margin: "4px 0 0",
                              lineHeight: 1.65,
                            }}
                          >
                            {entry.reflection}
                          </p>
                        </div>
                      )}

                      {entry.prayer && (
                        <div>
                          <span
                            style={{
                              color: TEAL,
                              fontSize: 10,
                              fontWeight: 800,
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                            }}
                          >
                            Prayer
                          </span>
                          <p
                            style={{
                              color: TEXT,
                              fontSize: 14,
                              margin: "4px 0 0",
                              lineHeight: 1.65,
                            }}
                          >
                            {entry.prayer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {entries.length === 0 && (
                <div
                  style={{
                    textAlign: "center",
                    padding: "48px 24px",
                    color: MUTED,
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  No journal entries yet. Use the form above to record your reflections
                  as you study Chronicles.
                </div>
              )}
            </div>
          )}

          {/* ── Videos Tab ── */}
          {tab === "videos" && (
            <div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "24px 28px",
                  marginBottom: 28,
                }}
              >
                <h2
                  style={{
                    color: GOLD,
                    fontWeight: 900,
                    fontSize: 22,
                    marginBottom: 8,
                  }}
                >
                  Teaching Videos
                </h2>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  Trusted scholars and teachers walking through the books of Chronicles —
                  from the Bible Project&apos;s narrative overview to focused studies on 2 Chronicles 7:14.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  {
                    videoId: "4Eg_di-O8nM",
                    title: "The Books of Chronicles Explained",
                    description:
                      "The Bible Project's narrative overview of 1 and 2 Chronicles — how the Chronicler retells Israel's history for the post-exilic community, with emphasis on worship, the Temple, and the Davidic covenant.",
                  },
                  {
                    videoId: "NnGBhG03g4M",
                    title: "Chronicles vs. Samuel-Kings — The Differences",
                    description:
                      "A focused comparison of the Chronicler's theological selection versus the perspective of Samuel-Kings. Why the same history told twice carries different pastoral purposes and what we gain by reading both.",
                  },
                  {
                    videoId: "hJkLBPIbZr4",
                    title: "David's Temple Preparations",
                    description:
                      "An examination of 1 Chronicles 22–29 — the material entirely absent from Samuel-Kings — covering David's massive preparations for the Temple, the charge to Solomon, and the great prayer of 1 Chronicles 29.",
                  },
                  {
                    videoId: "7_CGP-12AE0",
                    title: "2 Chronicles 7:14 — If My People",
                    description:
                      "A careful study of the most-cited verse in Chronicles — its original context in Solomon's Temple dedication, its four conditions, and how it applies to the people of God in every generation.",
                  },
                ].map((v) => (
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
                    <div style={{ padding: "16px 20px" }}>
                      <h3
                        style={{
                          color: TEXT,
                          fontWeight: 800,
                          fontSize: 16,
                          marginBottom: 8,
                        }}
                      >
                        {v.title}
                      </h3>
                      <p
                        style={{
                          color: MUTED,
                          fontSize: 13,
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {v.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
        <Footer />
      </div>
    </>
  );
}
