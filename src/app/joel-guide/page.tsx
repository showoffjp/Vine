"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";
const ACCENT = RED;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "locusts", label: "The Locust Plague" },
  { id: "dayofthelord", label: "Day of the LORD" },
  { id: "repentance", label: "Rend Your Hearts" },
  { id: "spirit", label: "The Spirit Poured Out" },
  { id: "restoration", label: "Restoration" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

type JoelTab = "overview" | "locusts" | "dayofthelord" | "repentance" | "spirit" | "restoration" | "themes" | "journal" | "videos";

const OVERVIEW_SECTIONS = [
  {
    color: GOLD,
    title: "Joel Son of Pethuel — A Prophet We Barely Know",
    body: "Joel introduces himself in a single phrase: 'The word of the LORD that came to Joel son of Pethuel' (1:1). That is all the biography we get. No king's reign is named, no hometown given, no occupation mentioned. His name — Yo'el — means 'The LORD is God,' which is fitting for a book whose entire burden is to insist that the LORD stands behind both catastrophe and restoration. His familiarity with the temple, the priests, and the daily offerings (1:9, 13–14; 2:17) suggests a man close to Jerusalem's worship life, possibly a temple prophet. But the anonymity may be the point: Joel disappears behind his message. The locusts, the trumpet, the torn heart, the poured-out Spirit — these are what we are meant to remember.",
  },
  {
    color: TEAL,
    title: "The Dating Debate: Early or Post-Exilic?",
    body: "Joel is the hardest of the Minor Prophets to date because he names no kings and no datable events beyond the plague itself. Two main positions exist. (1) An early date (9th century BC, during the boy-king Joash's minority) would explain why elders and priests lead the nation rather than a king, and fits Joel's placement near Hosea and Amos in the Hebrew canon. (2) A post-exilic date (after 515 BC) is favored by most modern scholars: the temple is standing and central (1:9, 14), there is no mention of a king or of the northern kingdom, Greeks appear as slave-traders (3:6), and Joel quotes or echoes many earlier prophets (Obadiah, Amos, Isaiah, Zephaniah), suggesting he writes late enough to draw on them. The honest conclusion: we don't know. And remarkably, it doesn't change the message. Joel's word is deliberately portable — a word for any generation that finds itself standing in the ruins.",
  },
  {
    color: RED,
    title: "The Occasion: A Plague Read as Prophecy",
    body: "Something concrete and terrible happened: a locust plague of generational severity, apparently compounded by drought and fire (1:19–20), stripped Judah's fields, vineyards, and orchards bare. Grain offerings and drink offerings ceased from the temple because there was literally nothing left to offer (1:9, 13). Joel's genius — his inspiration — is to refuse to treat this as mere bad luck or mere agriculture. He reads the plague theologically: as a trumpet blast, a foretaste, a miniature of the Day of the LORD. If a swarm of insects can dismantle a nation's economy and worship in weeks, what will it mean when God himself draws near in judgment? The disaster becomes a summons.",
  },
  {
    color: PURPLE,
    title: "Structure: Plague → Repentance → Promise",
    body: "The book moves in a deliberate arc. (1) Joel 1: the locust devastation described and lamented — every group in society called to mourn. (2) Joel 2:1–11: the plague re-described as the army of the Day of the LORD, vast and unstoppable. (3) Joel 2:12–17: the hinge of the book — the call to return to the LORD with all the heart, to rend hearts and not garments, grounded in God's gracious character. (4) Joel 2:18–27: God's jealous, pitying response — grain, wine, oil restored; the years the locusts ate repaid. (5) Joel 2:28–32: the promise of the Spirit poured out on all flesh. (6) Joel 3: the judgment of the nations in the valley of decision, and God dwelling in Zion forever. Devastation is the door; repentance is the hinge; the Spirit and restoration are the room beyond.",
  },
  {
    color: BLUE,
    title: "Why Joel Matters: Pentecost and the Torn Heart",
    body: "Two passages have made this short book immortal. First, Joel 2:28–32 — 'I will pour out my Spirit on all people' — is the text Peter stands up and quotes on the day of Pentecost (Acts 2:16–21): 'this is what was spoken by the prophet Joel.' The birth of the church is announced in Joel's words. Second, Joel 2:13 — 'Rend your hearts and not your garments' — has become one of Scripture's defining descriptions of true repentance, read in churches every Ash Wednesday. A book occasioned by an insect infestation ends up giving Christianity its Pentecost text and its Lenten text. Few books punch so far above their weight.",
  },
];

const LOCUST_WAVES = [
  {
    number: "1st Wave",
    title: "Gazam — The Cutting Locust",
    color: GOLD,
    description: "'What the cutting locust left, the swarming locust has eaten' (1:4). The gazam — the cutter or shearer — begins the destruction, gnawing through leaves, bark, and stem. Some interpreters see the four terms as stages of the locust's life cycle; others as successive swarms. Either way, the rhetorical effect is the same: wave after wave, each finishing what the last began.",
  },
  {
    number: "2nd Wave",
    title: "Arbeh — The Swarming Locust",
    color: RED,
    description: "The arbeh is the most common Hebrew word for locust — the word used for the eighth plague on Egypt (Exodus 10). Joel's audience would have heard the echo: the plague that once fell on Israel's enemies has now fallen on Israel herself. Covenant privilege does not exempt God's people from God's discipline — a theme Amos had already hammered home (Amos 3:2).",
  },
  {
    number: "3rd Wave",
    title: "Yeleq — The Hopping Locust",
    color: TEAL,
    description: "The yeleq — the hopper or licker, possibly the wingless juvenile stage — devours what the swarm left behind. Eyewitness accounts of locust plagues (such as the great Palestine plague of 1915) describe hoppers advancing like a ground-flood, climbing walls, entering houses, consuming even leather and woodwork. Joel's poetry is not exaggeration; it is reportage.",
  },
  {
    number: "4th Wave",
    title: "Hasil — The Destroying Locust",
    color: PURPLE,
    description: "The hasil — the finisher, the consumer — completes the ruin. Four names, total devastation: 'What the swarming locust left, the hopping locust has eaten, and what the hopping locust left, the destroying locust has eaten' (1:4). The fourfold repetition is liturgical in its relentlessness. Nothing is left. And that nothing — empty fields, empty barns, empty altars — is where Joel's preaching begins.",
  },
];

const LOCUST_SECTIONS = [
  {
    color: RED,
    title: "Total Devastation — Joel 1:5–12",
    body: "Joel inventories the loss with the precision of a farmer and the grief of a poet. The vine is laid waste, the fig tree splintered, its bark stripped white (1:7). Grain, new wine, and oil — the three staples of the covenant economy (Deuteronomy 7:13) — all fail (1:10). Wheat and barley perish; vine, fig, pomegranate, palm, and apple dry up; 'and gladness dries up from the children of man' (1:12). That last line is the theological hinge of the chapter: when the harvest dies, joy dies. Joel understands that economics, worship, and emotion are woven together — and the locusts have unraveled all three at once.",
  },
  {
    color: GOLD,
    title: "Everyone Must Lament: Drunkards, Farmers, Priests, Elders",
    body: "Joel 1 is structured as a series of summonses, and the list is deliberately comprehensive. Wake up, you drunkards, and weep — the wine is cut off from your mouth (1:5): even those numbed by drink can no longer escape reality. Be ashamed, you farmers; wail, you vinedressers (1:11): those whose livelihood vanished. Put on sackcloth and lament, you priests (1:13): the ministers of the altar, because the grain and drink offerings have ceased. Hear this, you elders (1:2): the leaders, who must tell their children, and their children another generation. No social class, no level of piety or impiety, is exempt. Catastrophe is democratic — and so is the call to lament. Joel will not allow anyone to spectate someone else's crisis.",
  },
  {
    color: TEAL,
    title: "When the Offerings Cease — Worship Interrupted",
    body: "Twice Joel notes that 'the grain offering and the drink offering are cut off from the house of the LORD' (1:9, 13). The tamid — the daily offering — was the heartbeat of Israel's worship, the standing sign of covenant communion. The locusts have not just emptied pantries; they have silenced the altar. For Joel this is the deepest wound of the plague: the visible rhythm of fellowship with God has stopped. It is worth sitting with this. Joel measures disaster not first in economic terms but in liturgical ones — the worst thing the locusts ate was the capacity to worship. When a crisis interrupts our communion with God, that interruption is itself the loudest alarm.",
  },
  {
    color: PURPLE,
    title: "A Spiritual Wake-Up Call, Not a Simple Equation",
    body: "Joel reads the plague as God's summons — 'the day of the LORD is near' (1:15) — yet he does something striking: he never names a specific sin that caused it. Unlike Amos (injustice) or Hosea (idolatry), Joel issues no itemized indictment. He does not say 'this happened because you did X.' He says: this happened; therefore return. This restraint matters enormously for how believers process disaster. Joel models a middle path between two errors — the secular shrug that says catastrophe means nothing, and the cruel arithmetic that says catastrophe is always punishment for identifiable sins (the logic Jesus rejects in Luke 13:1–5 and John 9:1–3). For Joel, disaster is a megaphone, not a verdict: it exposes our fragility, summons our attention, and drives us to the God who is gracious and merciful. The question is never 'whose fault?' but 'will we return?'",
  },
  {
    color: BLUE,
    title: "Tell Your Children — Catastrophe as Curriculum",
    body: "'Has such a thing happened in your days, or in the days of your fathers? Tell your children of it, and let your children tell their children, and their children to another generation' (1:2–3). Israel was commanded to pass down the story of the exodus; Joel commands them to pass down the story of the locusts. Both are revelation. The community is to remember not only its rescues but its ruins — because the ruins, rightly told, teach the next generation that life is contingent, that harvests are gifts, and that the LORD is God. A people who only tell their children success stories raise children who are unprepared for the day the fields go bare.",
  },
  {
    color: GREEN,
    title: "Even the Animals Groan — Joel 1:18–20",
    body: "'How the beasts groan! The herds of cattle are perplexed because there is no pasture for them... Even the beasts of the field pant for you because the water brooks are dried up' (1:18, 20). In one of the most tender moments in the prophets, Joel hears creation itself praying. The cattle's confusion and the wild animals' panting are directed 'to you' — to God. Paul will later write that the whole creation groans, waiting for liberation (Romans 8:19–22). Joel anticipates him: human sin and human crisis are never merely human; the land and its creatures suffer with us, and their groaning joins the liturgy of lament.",
  },
];

const DAY_SECTIONS = [
  {
    color: RED,
    title: "Blow the Trumpet in Zion — Joel 2:1–2",
    body: "'Blow a trumpet in Zion; sound an alarm on my holy mountain! Let all the inhabitants of the land tremble, for the day of the LORD is coming; it is near, a day of darkness and gloom, a day of clouds and thick darkness!' The shofar was sounded for war, for warning, and for assembly. Joel sounds it for all three. Chapter 2 re-narrates the locust invasion, but the camera has pulled back: this is no longer just an insect swarm; it is 'a great and powerful people' such as 'has never been before' — the advancing army of the Day of the LORD. The darkness language deliberately recalls Sinai (Exodus 19:16–18) and the ninth plague on Egypt. God's nearness, for an unprepared people, is not comfort but crisis.",
  },
  {
    color: GOLD,
    title: "The Unstoppable Army — Joel 2:3–11",
    body: "Joel's description of the locust-army is some of the most cinematic poetry in the Old Testament. 'Fire devours before them... the land is like the garden of Eden before them, but behind them a desolate wilderness' (2:3) — Eden undone in a single line. 'Their appearance is like the appearance of horses... like the rumbling of chariots they leap on the tops of the mountains' (2:4–5). They march in rank, never swerving, scaling walls, entering windows like a thief (2:7–9). Earth quakes, heavens tremble, sun and moon darken (2:10). Then the most terrifying verse in the book: 'The LORD utters his voice before his army' (2:11). The swarm is not an accident God must clean up; it is a host God himself commands. 'For the day of the LORD is great and very awesome; who can endure it?' The question hangs unanswered — until verse 12.",
  },
  {
    color: TEAL,
    title: "Darkness, Not Light: The Day in the Other Prophets",
    body: "Joel did not invent the Day of the LORD; he inherited a tradition and intensified it. Amos, perhaps the earliest to use the phrase, had already shattered the popular assumption that the Day would be Israel's automatic vindication: 'Woe to you who desire the day of the LORD! ... It is darkness, and not light' (Amos 5:18–20). Zephaniah turned it into an extended fugue: 'The great day of the LORD is near... a day of wrath, a day of distress and anguish, a day of ruin and devastation, a day of darkness and gloom' (Zephaniah 1:14–15). Obadiah declared 'the day of the LORD is near upon all the nations' (Obadiah 15). Malachi closes the entire Old Testament with it: 'Behold, I will send you Elijah the prophet before the great and awesome day of the LORD comes' (Malachi 4:5). Across the prophets the Day is the moment God decisively intervenes — to judge evil wherever it is found, including among his own people, and to set the world right.",
  },
  {
    color: PURPLE,
    title: "Both Darkness and Light — The Two-Sided Day",
    body: "Within Joel itself the Day of the LORD is double-edged. In 1:15 and 2:1–11 it is sheer threat — destruction from the Almighty. But in 2:31–32 the 'great and awesome day' becomes the horizon of salvation: 'everyone who calls on the name of the LORD shall be saved.' In chapter 3 the Day is 'near in the valley of decision' (3:14) — terror for the nations that crushed God's people, but 'a refuge to his people, a stronghold to the children of Israel' (3:16). The same event, two experiences. Whether the Day is darkness or light depends not on the Day but on your relation to the One whose Day it is. This is why Joel's center of gravity is the call to return: the only preparation for the Day is repentance.",
  },
  {
    color: BLUE,
    title: "Into the New Testament: Thief in the Night",
    body: "The apostles take up Joel's theme and re-center it on Jesus. 'The day of the Lord will come like a thief in the night,' Paul writes (1 Thessalonians 5:2) — picking up Joel's image of the swarm entering through windows like a thief (Joel 2:9). Peter agrees: 'The day of the Lord will come like a thief, and then the heavens will pass away with a roar' (2 Peter 3:10), and the cosmic shaking of Joel 2:10, 30–31 echoes through his whole chapter. Peter had already declared at Pentecost that the 'last days' of Joel's prophecy had begun (Acts 2:17). The New Testament thus lives between the two halves of Joel 2:28–32: the Spirit has been poured out (the Day inaugurated), and the great and awesome Day is still coming (the Day consummated). Every generation of the church stands where Joel's hearers stood — summoned to readiness, with the trumpet already at someone's lips.",
  },
];

const DAY_THREAD = [
  { ref: "Amos 5:18–20", color: GOLD, note: "The Day is darkness, not light — judgment begins with God's own people." },
  { ref: "Zephaniah 1:14–18", color: RED, note: "The great day is near — a day of wrath, distress, and gloom over all the earth." },
  { ref: "Joel 2:1–11, 31", color: PURPLE, note: "The locust-army as the Day in miniature; sun to darkness, moon to blood." },
  { ref: "Malachi 4:5–6", color: TEAL, note: "Elijah will come before the great and awesome Day — the OT's final word." },
  { ref: "Acts 2:16–21", color: BLUE, note: "Peter: the last days have begun; the Spirit is poured out before the Day." },
  { ref: "1 Thess 5:2 / 2 Peter 3:10", color: GREEN, note: "The Day comes like a thief — so live as children of light, lives of holiness." },
];

const REPENTANCE_SECTIONS = [
  {
    color: RED,
    title: "'Yet Even Now' — Joel 2:12",
    body: "'Yet even now, declares the LORD, return to me with all your heart, with fasting, with weeping, and with mourning.' Three words turn the whole book: yet even now. After the fields are stripped, after the army is at the walls, after the question 'who can endure it?' has been left hanging — even now there is a door. The Hebrew shuv ('return') is the great prophetic word for repentance: not primarily feeling sorry, but turning around and coming home. And the destination is not a standard of behavior but a person: 'return to me.' Repentance in Joel is relational before it is moral. The fasting, weeping, and mourning are not payments that earn the return; they are what wholeheartedness looks like when it walks.",
  },
  {
    color: GOLD,
    title: "Rend Your Hearts and Not Your Garments — Joel 2:13",
    body: "Tearing one's garment was the ancient gesture of grief and horror — Jacob at Joseph's coat, Job at his losses, the high priest at perceived blasphemy. It was public, dramatic, and easily faked. Joel demands the gesture be driven inward: 'Rend your hearts and not your garments.' The torn robe costs a robe; the torn heart costs the self — the pride, the self-sufficiency, the carefully maintained image. Joel is not abolishing outward forms (he commands fasting and assembly in the same breath); he is refusing to let the form substitute for the reality. This verse, read every Ash Wednesday, stands as Scripture's permanent protest against performative religion. God can do nothing with a torn shirt. He can do everything with a torn heart — 'a broken and contrite heart, O God, you will not despise' (Psalm 51:17).",
  },
  {
    color: TEAL,
    title: "The Character of God: Joel's Exodus 34 Confession",
    body: "Why risk returning to a God whose army darkens the sky? Joel's answer is the oldest creed in Israel's possession: 'Return to the LORD your God, for he is gracious and merciful, slow to anger, and abounding in steadfast love; and he relents over disaster' (2:13). This is a near-verbatim quotation of God's self-revelation to Moses at Sinai (Exodus 34:6) — the confession that echoes through Psalm 86:15, Psalm 103:8, Psalm 145:8, Nehemiah 9:17, and (in bitter reverse) Jonah 4:2, where Jonah resents these very attributes. The basis of repentance is not the sinner's resolve but God's nature. We do not return hoping to find a different God than the one who judged; we return because the Judge has told us who he is. Grace is not the exception to God's character that we wheedle out of him; it is his character, declared from his own mouth, twice over — at the mountain and through the prophet.",
  },
  {
    color: PURPLE,
    title: "'Who Knows?' — The Humility of True Repentance",
    body: "'Who knows whether he will not turn and relent, and leave a blessing behind him?' (2:14). At first this sounds like weak faith. It is the opposite: it is repentance purged of presumption. The king of Nineveh says the same words (Jonah 3:9), as does David fasting for his child (2 Samuel 12:22). 'Who knows?' refuses to treat repentance as a vending machine — insert contrition, receive blessing. God is not a mechanism; he is free, and grace that could be compelled would not be grace. Yet notice the direction of Joel's hope: the 'blessing' he imagines God leaving behind is grain and drink offerings (2:14) — the means of worship. The penitent's deepest request is not restored prosperity but restored communion. Genuine repentance throws itself entirely on God's character with no leverage, no bargain, and no entitlement — and precisely there it finds him gracious.",
  },
  {
    color: BLUE,
    title: "The Solemn Assembly — Repentance Is Corporate",
    body: "'Blow the trumpet in Zion; consecrate a fast; call a solemn assembly; gather the people. Consecrate the congregation; assemble the elders; gather the children, even nursing infants. Let the bridegroom leave his room, and the bride her chamber' (2:15–16). Western Christians instinctively privatize repentance, but Joel's call is unrelentingly communal. The same trumpet that announced the army now convenes the congregation. Everyone comes: the aged, the infants who cannot yet sin knowingly, even the bridegroom and bride — whom the Torah exempted from war duty (Deuteronomy 24:5) but who are not exempt from this. The crisis is shared; the turning must be shared. There are moments when a church, a community, a nation must stop everything — commerce, celebration, even honeymoons — and stand together before God. Joel 2 is the biblical charter for every day of corporate fasting, humiliation, and prayer the church has ever called.",
  },
  {
    color: GREEN,
    title: "'Spare Your People' — The Priests' Prayer, Joel 2:17",
    body: "'Between the vestibule and the altar let the priests, the ministers of the LORD, weep and say, \"Spare your people, O LORD, and make not your heritage a reproach, a byword among the nations. Why should they say among the peoples, 'Where is their God?'\"' Joel even scripts the intercession. The priests stand in the gap — literally, in the courtyard between porch and altar — and their argument is God's own reputation: act, so the nations will not mock your name. This is Moses' argument after the golden calf (Exodus 32:11–12) and the logic of 'hallowed be your name.' Leaders are called not merely to announce repentance but to weep at the front of it. A dry-eyed clergy calling a weeping assembly is a contradiction Joel will not permit.",
  },
];

const SPIRIT_SECTIONS = [
  {
    color: RED,
    title: "'I Will Pour Out My Spirit on All Flesh' — Joel 2:28–29",
    body: "'And it shall come to pass afterward, that I will pour out my Spirit on all flesh; your sons and your daughters shall prophesy, your old men shall dream dreams, and your young men shall see visions. Even on the male and female servants in those days I will pour out my Spirit.' The verb is extravagant: not sprinkle, not measure out — pour, the word used for cloudbursts and for drink offerings emptied to the last drop. In the old covenant the Spirit came on particular people for particular tasks: prophets, judges, kings, craftsmen. Joel announces a coming age when the Spirit will be the common possession of the whole people of God. What Moses once wished wistfully — 'Would that all the LORD's people were prophets, that the LORD would put his Spirit on them!' (Numbers 11:29) — Joel promises as fact.",
  },
  {
    color: GOLD,
    title: "The Democratization of the Spirit",
    body: "Joel's list is a deliberate demolition of every barrier the ancient world used to ration access to God. Gender: sons and daughters prophesy — both. Age: old men dream dreams and young men see visions — the generations that usually dismiss each other both become organs of revelation. Class: 'even on the male and female servants' — slaves, the people no ancient religion expected God to address, receive the same Spirit in the same measure. No other text in the Old Testament so flatly levels the community. The church has spent two thousand years catching up to this verse — every revival that put a Bible in a layperson's hands, every mission that raised up local believers, every moment the church remembered that the teenager and the grandmother and the janitor are equally Spirit-bearers, has been Joel 2:28 working itself out in history.",
  },
  {
    color: TEAL,
    title: "Pentecost: 'This Is What Was Spoken' — Acts 2:16–21",
    body: "On the day of Pentecost, when the Spirit fell with wind and fire and the disciples declared God's mighty works in a dozen languages, the crowd sneered: 'They are filled with new wine.' Peter stood up with the Eleven and answered with Joel: 'This is what was uttered through the prophet Joel: \"And in the last days it shall be, God declares, that I will pour out my Spirit on all flesh...\"' (Acts 2:16–17). Note what Peter does. He changes Joel's 'afterward' to 'in the last days,' announcing that the final era of history has now begun. He claims the prophecy is not merely similar to what is happening — it is what is happening: 'this is that.' The 120 in the upper room included women (Acts 1:14); the crowd included every nation under heaven. Joel's 'all flesh' was unfolding in real time. The church was born quoting Joel.",
  },
  {
    color: PURPLE,
    title: "Wonders in the Heavens: Blood, Fire, and Smoke — Joel 2:30–31",
    body: "'And I will show wonders in the heavens and on the earth, blood and fire and columns of smoke. The sun shall be turned to darkness, and the moon to blood, before the great and awesome day of the LORD comes.' Peter quotes these verses too — which means he saw Pentecost as the opening of a window that stretches from the Spirit's outpouring to the final Day. The cosmic imagery (drawn from Sinai's fire and smoke and the plague of darkness) signals that God's last great intervention will shake creation itself; Jesus uses the same imagery for his return (Mark 13:24–25). The 'last days,' biblically, are not a future countdown but the entire era between Pentecost and the Parousia — the age in which the church now lives, empowered by the Spirit precisely because the Day is coming.",
  },
  {
    color: BLUE,
    title: "'Everyone Who Calls' — Joel 2:32 and Romans 10:13",
    body: "'And it shall come to pass that everyone who calls on the name of the LORD shall be saved.' This is the widest door in the Old Testament, set at the end of its most sweeping promise. Paul seizes it in Romans 10:13 as the climax of his gospel logic: there is no distinction between Jew and Greek, 'for everyone who calls on the name of the Lord will be saved.' And quietly, momentously, the 'Lord' on whose name we call is now Jesus (Romans 10:9). Peter does the same at Pentecost, moving from Joel's promise straight to 'God has made him both Lord and Christ' (Acts 2:36). The criterion is not pedigree, knowledge, or merit — it is calling out. A drowning man's cry. Whoever. Joel, standing in a stripped field centuries before Christ, wrote the verse under which every altar call in history has been issued.",
  },
  {
    color: GREEN,
    title: "The Bridge from Promise to Fulfillment",
    body: "Joel 2:28–32 is one of the great load-bearing spans between the Testaments. Behind it lie Numbers 11 (Moses' wish), Ezekiel 36:26–27 (a new heart and my Spirit within you), Jeremiah 31:31–34 (the new covenant written on hearts), and Isaiah 44:3 ('I will pour my Spirit upon your offspring'). In front of it lie Pentecost, the Gentile Pentecost of Acts 10 ('the Holy Spirit fell on all who heard'), and Paul's declaration that 'in one Spirit we were all baptized into one body — Jews or Greeks, slaves or free' (1 Corinthians 12:13). The shape of the promise is consistent: God's ultimate answer to human failure is not a better law but his own indwelling presence, given to all his people. What the locusts stripped from the outside, the Spirit restores from the inside.",
  },
];

const RESTORATION_SECTIONS = [
  {
    color: GREEN,
    title: "The LORD Became Jealous for His Land — Joel 2:18–19",
    body: "'Then the LORD became jealous for his land and had pity on his people.' This verse is the pivot on which the whole book swings from threat to promise. Apparently the assembly was called and the people returned — the text moves straight to God's response, as if the repentance happened between the verses. God's 'jealousy' here is not insecurity but covenant passion: the fierce protectiveness of a husband for a wife, an owner for a vineyard. And his pity moves immediately into provision: 'Behold, I am sending to you grain, wine, and oil, and you will be satisfied; and I will no more make you a reproach among the nations.' The exact things the locusts devoured (1:10) are the first things grace restores.",
  },
  {
    color: GOLD,
    title: "'I Will Restore the Years the Locusts Have Eaten' — Joel 2:25",
    body: "'I will restore to you the years that the swarming locust has eaten, the hopper, the destroyer, and the cutter, my great army, which I sent among you.' This is one of the most beloved promises in all of Scripture — and one of the most startling. Notice that the four locust names from 1:4 return in full, and notice whose army it was: 'my great army, which I sent.' God does not distance himself from the catastrophe; he takes responsibility for it and then promises to repay it. The Hebrew verb (shillem) is the language of restitution — God voluntarily binding himself to make good the loss, like the thief repaying under the law of Exodus 22. The Judge writes himself into the defendant's side of the ledger. Years — not just crops — are restored: time itself, the thing no human power can give back.",
  },
  {
    color: TEAL,
    title: "What the Promise Means — and What It Doesn't",
    body: "Joel 2:25 is often quoted as a blanket guarantee that everything lost — the wasted decade, the broken marriage, the squandered youth — will be returned in kind. Read carefully, the promise is both humbler and deeper than that. It does not mean the past is rewritten: the plague happened; the years were eaten; scars remain. Chronos is not refunded. What God promises is that the future can be so fruitful that the loss no longer defines the story — threshing floors full of grain, vats overflowing (2:24), satisfaction and praise (2:26). Restoration is not the same as reversal; it is redemption — God bringing out of the devastated years a harvest that could not have grown without them. Many believers can testify that the years of addiction, grief, or wandering became, in God's hands, the very soil of their ministry and compassion. That is Joel 2:25 — not a time machine, but a God who wastes nothing, not even the locust years.",
  },
  {
    color: PURPLE,
    title: "'You Shall Never Again Be Put to Shame' — Joel 2:26–27",
    body: "Twice in two verses God repeats it: 'My people shall never again be put to shame.' The deepest wound of the plague was not hunger but humiliation — becoming 'a byword among the nations' whose taunt was 'Where is their God?' (2:17). The restoration answers exactly that wound: 'You shall know that I am in the midst of Israel, and that I am the LORD your God and there is none else.' The goal of restoration is not full barns but restored knowledge of God's presence — 'I am in the midst of you.' Material recovery is the sign; communion is the substance. The movement of these verses (plenty → praise → presence → no more shame) sketches the whole biblical hope, which ends not with wealth but with 'Behold, the dwelling place of God is with man' (Revelation 21:3).",
  },
  {
    color: RED,
    title: "The Judgment of the Nations — Joel 3:1–8",
    body: "Chapter 3 widens the lens from Judah's fields to the whole world. 'I will gather all the nations and bring them down to the Valley of Jehoshaphat' — a name that means 'the LORD judges.' The charges are concrete: they scattered God's people, divided his land, traded a boy for a prostitute and sold a girl for wine (3:2–3) — human beings priced at an evening's entertainment. Tyre, Sidon, and Philistia sold Judeans to the Greeks, far from their border (3:6). Restoration, Joel insists, includes justice: a world set right must include a reckoning for those who trafficked the vulnerable. The God who repays his people's locust years also repays the nations' cruelty — 'I will return your payment on your own head' (3:4, 7). For every people crushed by empire, Joel 3 is the promise that history's slave-traders do not get the last word.",
  },
  {
    color: BLUE,
    title: "Multitudes in the Valley of Decision — Joel 3:9–16",
    body: "Joel summons the nations to a final battle with deliberately ironic words: 'Beat your plowshares into swords, and your pruning hooks into spears' (3:10) — the exact reversal of Isaiah 2:4 and Micah 4:3. Arm yourselves fully, the LORD says, and come down; it will not help. 'Multitudes, multitudes, in the valley of decision! For the day of the LORD is near in the valley of decision' (3:14). The 'decision' is not, in context, the multitudes deciding for God — it is God's verdict on the multitudes; the valley of God's decisive judgment. Yet the preachers who have used this verse evangelistically are not wholly wrong: the looming of God's decision is precisely what makes human decision urgent. Then the great reversal: 'The LORD roars from Zion... but the LORD is a refuge to his people' (3:16). The same roar that shatters the armies shelters the remnant — Amos 1:2's lion-roar of judgment transposed into a stronghold of grace.",
  },
  {
    color: GOLD,
    title: "A Fountain from the House of the LORD — Joel 3:17–21",
    body: "The book that began with a land stripped to dust ends drenched: 'In that day the mountains shall drip sweet wine, and the hills shall flow with milk, and all the streambeds of Judah shall flow with water; and a fountain shall come forth from the house of the LORD and water the Valley of Shittim' (3:18). A spring rising from the temple and watering even the acacia wasteland — the image Ezekiel 47 will expand into a river deepening from the sanctuary, and Revelation 22 will consummate as the river of the water of life flowing from the throne. Egypt and Edom become desolate for their violence (3:19), but Judah is inhabited forever, and the final line of the book is its whole theology in four words: 'The LORD dwells in Zion' (3:21). The locusts came; the army came; the Day came — and at the end, God is at home with his people, and the desert is running with water.",
  },
];

const THEMES = [
  {
    color: RED,
    title: "The Day of the LORD",
    body: "Joel uses the phrase five times (1:15; 2:1, 11, 31; 3:14) — the highest concentration in Scripture. The Day is God's decisive intervention in history: darkness for the unrepentant and the oppressor, refuge for all who call on his name. The locust plague was its preview; Pentecost its inauguration; the return of Christ its consummation. Joel teaches the church to live trumpet-awakened — neither panicked nor asleep.",
  },
  {
    color: GOLD,
    title: "Repentance as Returning",
    body: "Joel's word for repentance is shuv — turn, return, come home. It is wholehearted ('with all your heart'), embodied (fasting, weeping, mourning), inward before outward ('rend your hearts and not your garments'), humble ('who knows?'), and corporate (the solemn assembly, from elders to infants). Repentance in Joel is not self-improvement; it is relocation — moving back toward a person.",
  },
  {
    color: TEAL,
    title: "The Character of God",
    body: "At the book's hinge stands the Sinai confession: 'gracious and merciful, slow to anger, abounding in steadfast love, and he relents over disaster' (2:13, echoing Exodus 34:6). The whole call to repentance rests not on the people's sincerity but on God's nature. Joel dares Israel to test whether the God of the locusts is also the God of the creed — and chapter 2:18–27 is the answer: he is.",
  },
  {
    color: PURPLE,
    title: "The Spirit for All People",
    body: "Joel 2:28–32 promises the Spirit poured out on all flesh — sons and daughters, old and young, even servants, male and female. Every wall the ancient world built around access to God is leveled. Fulfilled at Pentecost (Acts 2) and still being worked out in the church, this is Joel's most enduring gift: the people of God redefined as a Spirit-filled, prophesying community where no member is second-class.",
  },
  {
    color: GREEN,
    title: "Restoration of the Lost Years",
    body: "'I will restore the years the locusts have eaten' (2:25). Not reversal but redemption: God binds himself to repay losses he himself permitted, making the future so fruitful that the devastated past no longer defines the story. The arc runs from stripped fields to dripping mountains, from silenced offerings to overflowing vats, from 'Where is their God?' to 'I am in the midst of you.'",
  },
  {
    color: BLUE,
    title: "Catastrophe and Providence",
    body: "Joel reads a natural disaster theologically without simplistic blame. He names no specific sin behind the plague, yet refuses to call it meaningless: it is 'my great army, which I sent' (2:25) — a summons to return. Joel models how believers can face pandemics, fires, and floods: not as karma to be decoded, but as megaphones of mortality that drive us to the gracious God who stands on both sides of the storm.",
  },
  {
    color: GOLD,
    title: "The LORD Dwells in Zion",
    body: "The book's final sentence (3:21) is its destination: God at home among his people. The temple offerings cease in chapter 1; the fountain flows from the temple in chapter 3. Worship interrupted becomes presence unending. Joel's hope is finally not agricultural or even pneumatological but personal — the God who roared from Zion in judgment dwelling in Zion forever as refuge.",
  },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const PROMPTS = [
  "What 'locust years' do you long for God to restore? Name them honestly — and then read Joel 2:25–27 over them.",
  "What would it mean for you to rend your heart, not your garments? Where has the outward form of faith been standing in for the inward turning?",
  "Where do you see the Spirit poured out in your life or church? Who around you — young, old, overlooked — might be a 'son or daughter who prophesies' that you haven't been listening to?",
  "How do you process natural disaster and suffering in light of Joel? How does his refusal to assign simple blame — while still calling people to return — challenge the way you interpret hard seasons?",
  "Joel 2:32 promises that 'everyone who calls on the name of the LORD will be saved.' What keeps you from calling — and who in your life needs to hear how wide that door is?",
];

export default function JoelGuidePage() {
  const [tab, setTab] = usePersistedState<JoelTab>("vine_joel_tab", "overview");
  const [openOverview, setOpenOverview] = useState<string | null>(null);
  const [openLocust, setOpenLocust] = useState<string | null>(null);
  const [openDay, setOpenDay] = useState<string | null>(null);
  const [openRepent, setOpenRepent] = useState<string | null>(null);
  const [openSpirit, setOpenSpirit] = useState<string | null>(null);
  const [openRestoration, setOpenRestoration] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_joel_journal");
      if (raw) setEntries(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  const saveEntry = useCallback(() => {
    if (!verse.trim() && !reflection.trim() && !prayer.trim()) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      verse: verse.trim(),
      reflection: reflection.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_joel_journal", JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_joel_journal", JSON.stringify(updated));
  }, [entries]);

  const inputStyle = {
    width: "100%", background: BG, border: `1px solid ${BORDER}`,
    borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 15,
    outline: "none", boxSizing: "border-box" as const,
  };
  const labelStyle = { display: "block", color: MUTED, fontSize: 13, marginBottom: 6, fontWeight: 600 };

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>

          {/* Hero */}
          <div style={{ background: `linear-gradient(135deg, #1a0505 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>MINOR PROPHETS</span>
                <span style={{ color: MUTED, fontSize: 14 }}>3 Chapters · Date Debated</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The Book of Joel
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
                A locust plague becomes a trumpet blast: the Day of the LORD is near. <em style={{ color: TEXT }}>"Rend your hearts and not your garments... I will pour out my Spirit on all people."</em>
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as JoelTab)}
                  style={{ padding: "16px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", color: tab === t.id ? ACCENT : MUTED, borderBottom: tab === t.id ? `2px solid ${ACCENT}` : "2px solid transparent", transition: "color 0.15s" }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

            {/* OVERVIEW */}
            {tab === "overview" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Overview</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Joel is the prophet of the locusts and the Spirit. A devastating plague becomes, in his hands, a window onto the Day of the LORD — and the doorway to one of Scripture&apos;s greatest promises: the Spirit poured out on all flesh. With Joel, the Minor Prophets&apos; collection is complete: every voice of the Twelve now has a guide.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { label: "Author", value: "Joel son of Pethuel" },
                    { label: "Time Period", value: "Debated: 9th c. or post-exilic" },
                    { label: "Audience", value: "Judah & Jerusalem" },
                    { label: "Chapters", value: "3" },
                    { label: "Theme", value: "Day of the LORD, repentance, the Spirit" },
                    { label: "Key Verses", value: "Joel 2:13, 2:25, 2:28–32" },
                  ].map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}33`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>The Central Message</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                    Joel takes a national catastrophe and refuses to let it be wasted. The locusts are real insects and a real economic collapse — but they are also a trumpet: the Day of the LORD in miniature, a rehearsal of the final reckoning. The only adequate response is not analysis or despair but <strong style={{ color: TEXT }}>return</strong> — wholehearted, heart-rending, communal repentance grounded in God&apos;s own self-description: <strong style={{ color: TEXT }}>gracious and compassionate, slow to anger and abounding in love</strong>. And the God to whom we return does more than relent. He repays the locust years, pours out his Spirit on all flesh, and at the last dwells with his people in Zion. Devastation, in Joel, is never the end of the story — it is the place where the trumpet sounds.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {OVERVIEW_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenOverview(openOverview === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openOverview === s.title ? "−" : "+"}</span>
                      </button>
                      {openOverview === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Key Passages</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "Joel 1:4", desc: "Four waves of locusts — what one left, the next devoured" },
                      { ref: "Joel 1:15", desc: "Alas for the day! The day of the LORD is near" },
                      { ref: "Joel 2:1–11", desc: "Blow the trumpet in Zion — the unstoppable army of the Day" },
                      { ref: "Joel 2:12–13", desc: "Return with all your heart; rend your hearts and not your garments" },
                      { ref: "Joel 2:15–17", desc: "The solemn assembly — gather everyone, even nursing infants" },
                      { ref: "Joel 2:25", desc: "I will restore the years the locusts have eaten" },
                      { ref: "Joel 2:28–32", desc: "The Spirit poured out on all flesh — quoted by Peter at Pentecost" },
                      { ref: "Joel 3:14", desc: "Multitudes, multitudes, in the valley of decision" },
                      { ref: "Joel 3:21", desc: "The LORD dwells in Zion — the book's final word" },
                    ].map(p => (
                      <div key={p.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 100, paddingTop: 2 }}>{p.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{p.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* LOCUSTS */}
            {tab === "locusts" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Locust Plague — Joel 1</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>A desert locust swarm can cover hundreds of square miles and consume in one day what would feed tens of thousands of people. Joel&apos;s Judah experienced such a swarm — wave upon wave — until fields, vineyards, and even the temple offerings were stripped bare. Chapter 1 is the Bible&apos;s great anatomy of catastrophe: what it destroys, who must face it, and what it is for.</p>

                <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: 17 }}>The Four Waves — Joel 1:4</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
                  {LOCUST_WAVES.map((v, i) => (
                    <div key={v.number} style={{ background: CARD, border: `1px solid ${v.color}33`, borderRadius: 12, padding: "20px 24px", display: "flex", gap: 20 }}>
                      <div style={{ width: 48, height: 48, borderRadius: "50%", background: `${v.color}22`, border: `2px solid ${v.color}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: v.color, fontWeight: 800, fontSize: 14 }}>{i + 1}</div>
                      <div>
                        <div style={{ color: v.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{v.number}</div>
                        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{v.title}</div>
                        <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 14, margin: 0 }}>{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: 17 }}>Reading the Devastation</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {LOCUST_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenLocust(openLocust === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openLocust === s.title ? "−" : "+"}</span>
                      </button>
                      {openLocust === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: 28, marginTop: 32 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>The Cry of Chapter 1</h3>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      &quot;Alas for the day! For the day of the LORD is near, and as destruction from the Almighty it comes.&quot;
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Joel 1:15 (ESV)</cite>
                  </blockquote>
                </div>
              </div>
            )}

            {/* DAY OF THE LORD */}
            {tab === "dayofthelord" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Day of the LORD — Joel 2:1–11</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>No prophet is more saturated with the Day of the LORD than Joel. In chapter 2 the locust swarm is re-seen as the vanguard of God&apos;s own army, and the local disaster becomes a window onto the final intervention of God in history — a Day of darkness for the unprepared and, astonishingly, of refuge for all who call on his name.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                  {DAY_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenDay(openDay === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openDay === s.title ? "−" : "+"}</span>
                      </button>
                      {openDay === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: 17 }}>The Day of the LORD Through Scripture</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                  {DAY_THREAD.map(d => (
                    <div key={d.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 18px" }}>
                      <span style={{ color: d.color, fontWeight: 700, fontSize: 13, minWidth: 150, paddingTop: 2 }}>{d.ref}</span>
                      <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{d.note}</span>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: 28 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>The Question That Demands an Answer</h3>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      &quot;The LORD utters his voice before his army, for his camp is exceedingly great; he who executes his word is powerful. For the day of the LORD is great and very awesome; who can endure it?&quot;
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Joel 2:11 (ESV)</cite>
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 16, marginBottom: 0 }}>
                    Joel leaves the question hanging for exactly one verse — and then answers it with &quot;yet even now&quot; (2:12). The only people who can endure the Day are the people who return before it. That is the logic that drives the whole book from terror to invitation.
                  </p>
                </div>
              </div>
            )}

            {/* REPENTANCE */}
            {tab === "repentance" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Rend Your Hearts — Joel 2:12–17</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>These six verses are the hinge of the book and one of the Bible&apos;s definitive teachings on repentance. They answer the unanswerable question of 2:11 (&quot;who can endure it?&quot;) with an open door — and they ground the entire risk of returning not in human sincerity but in the ancient confession of God&apos;s character.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {REPENTANCE_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenRepent(openRepent === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openRepent === s.title ? "−" : "+"}</span>
                      </button>
                      {openRepent === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: 28 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12 }}>Joel 2:12–13 — The Heart of the Book</h3>
                  <blockquote style={{ borderLeft: `4px solid ${GOLD}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      &quot;&apos;Even now,&apos; declares the LORD, &apos;return to me with all your heart, with fasting and weeping and mourning.&apos; Rend your heart and not your garments. Return to the LORD your God, for he is gracious and compassionate, slow to anger and abounding in love, and he relents from sending calamity.&quot;
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Joel 2:12–13 (NIV)</cite>
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 16, marginBottom: 0 }}>
                    Notice the order: the command (&quot;return&quot;) rests on the character (&quot;for he is gracious&quot;). Biblical repentance is never a gamble on an unknown God. It is coming home to a God who has already told us, at Sinai and in Christ, exactly who he is.
                  </p>
                </div>
              </div>
            )}

            {/* SPIRIT */}
            {tab === "spirit" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Spirit Poured Out — Joel 2:28–32</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Five verses that changed the world. When the Spirit fell at Pentecost and the church was born, the first scripture quoted in the first Christian sermon was this passage. Joel 2:28–32 is the great bridge from Old Testament promise to New Testament fulfillment — the moment the prophets&apos; hope becomes the church&apos;s reality.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {SPIRIT_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenSpirit(openSpirit === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openSpirit === s.title ? "−" : "+"}</span>
                      </button>
                      {openSpirit === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { label: "Sons & Daughters", note: "Both genders prophesy — no second-class voices in the Spirit-filled community.", color: RED },
                    { label: "Old & Young", note: "Old men dream dreams, young men see visions — every generation a channel of revelation.", color: GOLD },
                    { label: "Even Servants", note: "Male and female servants receive the same Spirit — class and status leveled at the altar.", color: TEAL },
                    { label: "Everyone Who Calls", note: "Salvation thrown open to whoever calls on the name of the LORD (2:32; Romans 10:13).", color: GREEN },
                  ].map(c => (
                    <div key={c.label} style={{ background: CARD, border: `1px solid ${c.color}33`, borderRadius: 12, padding: "20px 22px" }}>
                      <div style={{ color: c.color, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{c.label}</div>
                      <p style={{ color: MUTED, fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>{c.note}</p>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${BLUE}44`, borderRadius: 12, padding: 28 }}>
                  <h3 style={{ color: BLUE, fontWeight: 700, marginBottom: 12 }}>&quot;This Is That&quot; — Peter at Pentecost</h3>
                  <blockquote style={{ borderLeft: `4px solid ${BLUE}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      &quot;This is what was spoken by the prophet Joel: &apos;In the last days, God says, I will pour out my Spirit on all people. Your sons and daughters will prophesy, your young men will see visions, your old men will dream dreams... And everyone who calls on the name of the Lord will be saved.&apos;&quot;
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Acts 2:16–17, 21 (NIV)</cite>
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 16, marginBottom: 0 }}>
                    The church does not merely admire Joel&apos;s promise from a distance. It lives inside it. Every believer indwelt by the Spirit, every woman and man who speaks God&apos;s word, every person of any nation who calls on Jesus and is saved — all of it is Joel 2, still being fulfilled.
                  </p>
                </div>
              </div>
            )}

            {/* RESTORATION */}
            {tab === "restoration" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Restoration — Joel 2:18–27 & Joel 3</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>The moment the people turn, the book turns. God becomes jealous for his land, pities his people, and makes the promise that has comforted believers for millennia: &quot;I will repay you for the years the locusts have eaten.&quot; Then the horizon widens to the judgment of the nations, the valley of decision, and a fountain flowing from the house of the LORD.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {RESTORATION_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenRestoration(openRestoration === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openRestoration === s.title ? "−" : "+"}</span>
                      </button>
                      {openRestoration === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 28 }}>
                  <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12 }}>The Beloved Promise</h3>
                  <blockquote style={{ borderLeft: `4px solid ${GREEN}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      &quot;I will repay you for the years the locusts have eaten... You will have plenty to eat, until you are full, and you will praise the name of the LORD your God, who has worked wonders for you; never again will my people be shamed.&quot;
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Joel 2:25–26 (NIV)</cite>
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 16, marginBottom: 0 }}>
                    God does not pretend the locust years didn&apos;t happen. He repays them — making the future fruitful enough to redeem, though not erase, the past. For everyone grieving wasted seasons, this verse is Joel&apos;s gift: with God, nothing is finally lost; even the devoured years become soil.
                  </p>
                </div>
              </div>
            )}

            {/* THEMES */}
            {tab === "themes" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Major Themes</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Seven threads run through Joel&apos;s three short chapters — and out through the rest of Scripture into the life of the church.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16 }}>
                  {THEMES.map(t => (
                    <div key={t.title} style={{ background: CARD, border: `1px solid ${t.color}33`, borderRadius: 12, padding: "20px 22px" }}>
                      <button onClick={() => setOpenTheme(openTheme === t.title ? null : t.title)}
                        style={{ width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <h3 style={{ color: t.color, fontWeight: 700, margin: 0, fontSize: 15 }}>{t.title}</h3>
                          <span style={{ color: MUTED, fontSize: 18 }}>{openTheme === t.title ? "−" : "+"}</span>
                        </div>
                      </button>
                      {openTheme === t.title && (
                        <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 14, marginTop: 10, marginBottom: 0 }}>{t.body}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* JOURNAL */}
            {tab === "journal" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Joel speaks to anyone who has stood in a stripped field — and to anyone who longs for the Spirit and the restoration of lost years. Use this space to respond honestly.</p>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Reflection Prompts</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {PROMPTS.map((p, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: ACCENT, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 20 }}>New Entry</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Verse or passage</label>
                      <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="e.g., Joel 2:25" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Reflection</label>
                      <textarea value={reflection} onChange={e => setReflection(e.target.value)} placeholder="What does this passage stir in you?" rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <div>
                      <label style={labelStyle}>Prayer</label>
                      <textarea value={prayer} onChange={e => setPrayer(e.target.value)} placeholder="Respond to God in prayer..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <button onClick={saveEntry}
                      style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "12px 24px", fontWeight: 700, cursor: "pointer", fontSize: 15, alignSelf: "flex-start" }}>
                      {saved ? "Saved!" : "Save Entry"}
                    </button>
                  </div>
                </div>

                {entries.length > 0 && (
                  <div>
                    <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Your Entries</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      {entries.map(e => (
                        <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                            <div>
                              <div style={{ fontWeight: 700, color: ACCENT, fontSize: 14 }}>{e.verse || "No verse"}</div>
                              <div style={{ color: MUTED, fontSize: 12 }}>{e.date}</div>
                            </div>
                            <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                          </div>
                          {e.reflection && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong>Reflection:</strong> {e.reflection}</p>}
                          {e.prayer && <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* VIDEOS */}
            {tab === "videos" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Video Teaching</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Deepen your study of Joel through visual teaching on the book itself, the prophetic tradition, and the companion prophets who share Joel&apos;s great themes of the Day of the LORD and the call to return.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
                  <div>
                    <VideoEmbed videoId="zQLazbgz90c" title="The Book of Joel" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>The Book of Joel — BibleProject overview</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="feBP_oLtN5E" title="The Prophets — Overview" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>The Prophets — what they were and how to read them</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="SCkyWH4sS4s" title="Amos (companion prophet)" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Amos — the prophet who first declared the Day of the LORD darkness, not light</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="TcPMCmVoLME" title="Hosea (companion prophet)" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Hosea — Joel&apos;s neighbor in the Twelve and fellow voice calling Israel to return</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
