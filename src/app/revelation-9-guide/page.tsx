"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import VerseRef from "@/components/VerseRef";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#D97706", TEAL = "#0D9488", ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const videoItems = [
  { videoId: "kEOhyiMQfPM", title: "Revelation 9 - Locusts from the Abyss" },
  { videoId: "fxdpbTJN-rc", title: "The Fifth and Sixth Trumpets Explained" },
  { videoId: "c8fzO3ZWmCk", title: "Abaddon and Apollyon - Revelation 9 Commentary" },
  { videoId: "pZ0h4VrFqiM", title: "Why Do People Not Repent? - Revelation 9:20-21" },
];

const KEY_THEMES = [
  {
    id: "fifth-trumpet",
    color: ROSE,
    title: "The Fifth Trumpet / First Woe: The Star, the Abyss, and the Locust-Scorpions (vv.1-12)",
    body: "The fifth trumpet opens one of the most elaborate and terrifying sequences in the entire book of Revelation. A star falls from heaven to earth &mdash; and the star is given the key to the Abyss (&ldquo;abyssos&rdquo;). When the shaft of the Abyss is opened, smoke billows up like a great furnace, darkening sun and sky. Out of the smoke come locusts, but they are no ordinary locusts: they have the power of scorpions. They are commanded not to harm the grass or plants (reversing the first trumpet&rsquo;s destruction of grass) but only those people who do not have the seal of God on their foreheads. Their torment is to last five months &mdash; the same period as a locust season in the Middle East (approximately May to September). The torment is so severe that people will long to die but will not be able to (v.6). The locust-scorpions are described in extraordinary detail: they look like horses prepared for battle, their faces are like human faces, they have hair like women&rsquo;s hair, teeth like lions&rsquo; teeth, and they wear what appear to be iron breastplates. Their wings make a sound like chariots rushing into battle. Their tails are like scorpions&rsquo; tails, with stingers that have the power to harm people. The entire description combines elements from Joel&rsquo;s locust vision, Parthian cavalry imagery, and scorpion-like demonic beings. Over them is a king &mdash; in Hebrew, Abaddon; in Greek, Apollyon &mdash; whose name means &lsquo;Destroyer.&rsquo; This first woe ends formally in v.12: &ldquo;The first woe is past; two other woes are yet to come.&rdquo;"
  },
  {
    id: "abyss",
    color: PURPLE,
    title: "The Abyss: Sheol, Prison of Demons, and the Realm of the Destroyer",
    body: "The Abyss (&ldquo;abyssos&rdquo; in Greek &mdash; the bottomless pit, the deep) is one of Revelation&rsquo;s most theologically loaded symbols. In the Old Testament, &ldquo;tehom&rdquo; (the deep) was the primordial waters of chaos over which God moved at creation (Genesis 1:2). In later Jewish literature, the Abyss became associated with the prison of rebellious spiritual beings: 1 Enoch 18:11 describes a prison for the fallen stars (angels); Jubilees 5:6 speaks of angels bound until the judgment; Luke 8:31 records that the Gerasene demons begged Jesus not to send them to the Abyss. In Revelation, the Abyss is the source of the beast (11:7; 17:8) and the prison where Satan will be bound for a thousand years (20:1-3). It represents the realm of evil that stands behind the visible world &mdash; the demonic reservoir from which destructive forces emerge. The image of a shaft being opened with a key (v.1) is significant: the Abyss is under divine lock and key; its opening is a deliberate divine act, not a failure of divine control. God controls even the demonic forces he permits to operate. The smoke that billows up when the shaft is opened (v.2) echoes the smoke of the great furnace in Genesis 19:28 (the destruction of Sodom) &mdash; the Abyss is a place of fire, smoke, and judgment, and its contents are correspondingly fearsome."
  },
  {
    id: "abaddon-apollyon",
    color: GOLD,
    title: "Abaddon and Apollyon: The Destroyer as King of the Locust Army",
    body: "The locust-scorpions have a king over them &mdash; something no actual locusts do (Proverbs 30:27: &ldquo;locusts have no king, yet they advance together in ranks&rdquo;). His name is given in two languages: in Hebrew, Abaddon (&ldquo;destruction, ruin&rdquo; &mdash; a name for the realm of the dead in the Old Testament: Job 26:6; 28:22; Psalm 88:11; Proverbs 15:11); in Greek, Apollyon (&ldquo;Destroyer&rdquo; &mdash; from the verb &ldquo;apollymi,&rdquo; to destroy). The dual naming in Hebrew and Greek is significant: it spans the two cultural worlds of John&rsquo;s audience, making clear that this is a universal figure, not a local deity. Scholars have long debated whether Abaddon/Apollyon is Satan himself, a specific high-ranking demon, or a symbolic figure representing the destructive power behind the Roman Empire (some early Christian writers noted the similarity of &ldquo;Apollyon&rdquo; to &ldquo;Apollo,&rdquo; the sun god of the Roman emperor cult). Whatever the precise identification, the theological point is clear: the demonic army that torments humanity is not a leaderless chaos; it is organized, purposeful, and serves a named Destroyer. Yet this Destroyer operates within the permission and plan of God: the torment has a limit (five months), a specific target (only the unsealed), and a specific purpose (judgment, not final destruction). The Destroyer destroys &mdash; but only as far as God allows."
  },
  {
    id: "sixth-trumpet",
    color: TEAL,
    title: "The Sixth Trumpet / Second Woe: Four Angels at the Euphrates and the Army of 200 Million (vv.13-19)",
    body: "The sixth trumpet is the &ldquo;second woe&rdquo; and it escalates dramatically from the fifth: where the locusts tortured for five months without killing, the sixth trumpet unleashes an army that kills a third of mankind. A voice comes from the four horns of the golden altar before God &mdash; the same altar from which the incense and prayers rose in chapter 8 &mdash; commanding the sixth angel to release the four angels who are bound at the great river Euphrates. The Euphrates was the eastern boundary of the Roman Empire, beyond which lay the feared Parthian cavalry. The Parthians had defeated Rome at the Battle of Carrhae in 53 BC and posed an ongoing military threat; their cavalry of mounted archers was legendary in the ancient world. The four angels are released at a specific hour, day, month, and year &mdash; suggesting that this judgment has been planned in detail, held in reserve until the precise moment God ordained. The army they lead is staggering: 200 million (literally &ldquo;twice ten thousand times ten thousand&rdquo;). The horsemen&rsquo;s breastplates are fiery red, dark blue, and yellow; their horses have heads like lions and breathe fire, smoke, and sulfur &mdash; the three plagues that kill a third of mankind. The horses&rsquo; tails are like serpents with heads that also inflict harm. The entire vision is an assault on every sense, a vision of overwhelming, devastating military force &mdash; yet even it is limited: a third of mankind dies, not all."
  },
  {
    id: "unrepentant",
    color: ROSE,
    title: "The Refusal to Repent: The Most Sobering Verse in Revelation 9 (vv.20-21)",
    body: "After the death of a third of mankind in the sixth trumpet &mdash; following the five months of torment in the fifth &mdash; John records the response of those who survive: they did not repent. Verses 20-21 are among the most sobering in all of Scripture: &ldquo;The rest of mankind who were not killed by these plagues still did not repent of the work of their hands; they did not stop worshiping demons, and idols of gold, silver, bronze, stone and wood &mdash; idols that cannot see or hear or walk. Nor did they repent of their murders, their magic arts, their sexual immorality or their thefts.&rdquo; The list of sins is deliberately comprehensive: idolatry (worship of demons and manufactured idols), murders, pharmakeia (drug use/sorcery), sexual immorality, and theft. The idols described (gold, silver, bronze, stone, wood &mdash; which cannot see, hear, or walk) echo the prophetic polemic of Isaiah 44:9-20 and Psalm 115:4-8. The refusal to repent despite catastrophic divine judgment raises one of the most profound questions in biblical theology: How hardened must a heart become that even the death of a third of humanity does not produce repentance? The answer, Revelation suggests, lies in the nature of idolatry itself: idols capture the heart so completely that not even the most severe external pressure can break their grip. This is not a statement of divine failure but a statement of human culpability: the judgments were sufficient to provoke repentance; the refusal to repent is entirely human."
  },
  {
    id: "euphrates-boundary",
    color: GREEN,
    title: "The Euphrates as Prophetic Symbol: The Eastern Boundary of Empire and Judgment",
    body: "The Euphrates River appears twice in Revelation (9:14; 16:12) and carries a complex load of symbolic meaning. In the Old Testament, the Euphrates marked the eastern boundary of the Promised Land at its greatest extent (Genesis 15:18; Deuteronomy 1:7) and was associated with Assyria and Babylon, the great powers from the east that God used as instruments of judgment on Israel (Isaiah 7:20; Jeremiah 46:2). In John&rsquo;s first-century context, the Euphrates was the frontier of the Roman Empire, beyond which lay the Parthians &mdash; Rome&rsquo;s most feared military adversary. The binding of the four angels &ldquo;at the great river Euphrates&rdquo; suggests forces held in check at the boundary of the known world &mdash; forces that, when released, will overwhelm the world order from the east. Some interpreters read this as a specific prophecy about the Parthians or a later eastern invasion; others read it as a symbolic representation of all forces of judgment that God holds in reserve and releases at the precise moment of his choosing. What is theologically certain is the pattern: the Euphrates angels, like the Abyss demons, are bound &mdash; their power is under God&rsquo;s control and released only at the divinely appointed hour, day, month, and year (v.15). Divine sovereignty over the most catastrophic forces of judgment is the consistent theological bedrock beneath the terror of these visions."
  },
  {
    id: "pharmakeia",
    color: PURPLE,
    title: "Pharmakeia, Idolatry, and the Catalog of Unrepented Sins (vv.20-21)",
    body: "The catalog of unrepented sins in verses 20-21 deserves careful attention. The first category is idolatry &mdash; worshiping demons and idols of gold, silver, bronze, stone, and wood. This is not mere metaphor: in the first century, the cities of Asia Minor (the audience of Revelation) were saturated with idol worship integrated into every dimension of social, economic, and civic life. Trade guilds held meals in temples; civic festivals required participation in imperial cult; even household objects were associated with divine figures. The idols described in v.20 cannot see, hear, or walk &mdash; the classic prophetic polemic against manufactured deities (Psalm 115:4-7; Isaiah 44:18). The second sin list in v.21 includes: phonoi (murders), pharmakeia (often translated &ldquo;magic arts&rdquo; or &ldquo;sorcery&rdquo; but literally &ldquo;drug use&rdquo; &mdash; the Greek root gives us &ldquo;pharmacy&rdquo;; in the ancient world, pharmakeia referred to the use of drugs and potions in occult practice), porneia (sexual immorality), and klopai (thefts). The comprehensiveness of this list echoes the Ten Commandments (idolatry, murder, theft) and the prophetic tradition. The specific mention of pharmakeia in a context of occult worship is significant: it connects drug use to spiritual manipulation and control, a connection the ancient world took seriously and which remains pastorally relevant."
  },
];

const VERSE_SECTIONS = [
  {
    id: "v1-2",
    color: ROSE,
    title: "Verses 1-2: The Star Falls; the Abyss Is Opened",
    body: "The fifth angel sounds and John sees &ldquo;a star that had fallen from the sky to the earth.&rdquo; The past tense (&ldquo;had fallen&rdquo;) is significant: this is not the falling but a being that has already fallen. The star is given the key to the shaft of the Abyss &mdash; it does not seize the key but receives it, indicating that this event is within divine governance. The Abyss (&ldquo;abyssos&rdquo;) is the bottomless pit, the subterranean prison of demonic beings. When the shaft is opened, smoke rises like the smoke from a gigantic furnace &mdash; darkening the sun and sky. In the Old Testament, the language of a furnace-like darkness echoes the theophany of Sinai (Exodus 19:18; Deuteronomy 4:11) and the judgment of Sodom (Genesis 19:28: Abraham looked toward Sodom and saw &ldquo;dense smoke rising from the land, like smoke from a furnace&rdquo;). The darkening of sun and sky reverses the opening of creation (Genesis 1:14-18) and partially echoes the fourth trumpet. The falling star has been interpreted as Satan (cf. Luke 10:18: &ldquo;I saw Satan fall like lightning from heaven&rdquo;; Isaiah 14:12); as a fallen angel; or as a cosmic agent given a specific commission. The key detail is the key: the Abyss is locked; it takes divine permission &mdash; given through this agent &mdash; to open it."
  },
  {
    id: "v3-6",
    color: PURPLE,
    title: "Verses 3-6: The Locust-Scorpions and Their Torment",
    body: "Out of the smoke come locusts with the power of scorpions. Their instructions establish the parameters of their torment: they are not to harm the grass, any plant, or any tree (inverting the first trumpet&rsquo;s destruction of vegetation) but only those people who do not have the seal of God on their foreheads (v.4). The seal of God in chapter 7 is here shown to have protective force: it marks God&rsquo;s people as immune to this demonic torment. The locust-scorpions are not to kill &mdash; only to torture, for five months. The five-month period corresponds to the life cycle of an actual locust swarm (approximately May to September in the Middle East), grounding the vision in natural reality even as it wildly exceeds it. The torment will be like the sting of a scorpion (v.5), which in the ancient world was understood as excruciating, temporarily paralytic, and in some cases fatal. The anguish will be so severe that people will seek death and not find it; they will long to die, and death will flee from them (v.6). This inversion of natural order &mdash; the inability to die when death is desired &mdash; is one of Revelation&rsquo;s most disturbing images, suggesting a condition of suffering without the release of death. It echoes Jeremiah 8:3 (&ldquo;Wherever I banish them, all the survivors of this evil nation will prefer death to life&rdquo;) and Job&rsquo;s desire for death in his suffering (Job 3:20-22)."
  },
  {
    id: "v7-10",
    color: GOLD,
    title: "Verses 7-10: The Description of the Locusts",
    body: "The locusts are described in extraordinary, composite detail that recalls the ancient genre of monster description and the prophetic imagery of Joel 1-2. Their appearance is like horses prepared for battle (the primary image in Joel 2:4: &ldquo;They have the appearance of horses; they gallop along like cavalry&rdquo;). On their heads they wear what look like crowns of gold &mdash; signifying authority and conquest. Their faces are like human faces &mdash; suggesting intelligence and purposeful malice, not mere animal instinct. Their hair is like women&rsquo;s hair &mdash; an enigmatic detail, perhaps evoking the long-haired Parthian cavalry who were famous for their distinctive appearance; or perhaps simply emphasizing the composite, uncanny nature of the vision. Their teeth are like lions&rsquo; teeth (Joel 1:6: &ldquo;A nation has invaded my land, powerful and without number; it has the teeth of a lion&rdquo;), suggesting destructive, devouring power. Their chests are like breastplates of iron &mdash; impenetrable, invincible in battle. The sound of their wings is like the sound of many chariots with horses rushing into battle &mdash; the sound of overwhelming military force. Their tails and stings are like scorpions &mdash; their power to harm is located in what follows them, not what precedes them; they pass through and leave agony in their wake. Every element of this description combines the natural (locusts, scorpions, lions, horses) with the supernatural into a composite being that cannot be fully visualized &mdash; which is precisely the point of apocalyptic imagery."
  },
  {
    id: "v11",
    color: ROSE,
    title: "Verse 11: Their King Is the Angel of the Abyss &mdash; Abaddon, Apollyon",
    body: "&ldquo;They had as king over them the angel of the Abyss, whose name in Hebrew is Abaddon and in Greek is Apollyon (that is, Destroyer).&rdquo; This verse provides the single most theologically explicit identification in the locust passage. Natural locusts have no king (Proverbs 30:27), but these demonic locusts are a disciplined army with a ruling figure. The name is given in both Hebrew and Greek &mdash; spanning the two languages of John&rsquo;s world (Hebrew for the Jewish tradition, Greek for the Greco-Roman world) &mdash; to make clear that this is a universal figure. &ldquo;Abaddon&rdquo; appears six times in the Hebrew Old Testament as a name for the realm of death and destruction (Job 26:6; 28:22; 31:12; Psalm 88:11; Proverbs 15:11; 27:20) and is essentially synonymous with Sheol, the underworld. The Greek &ldquo;Apollyon&rdquo; (from &ldquo;apollymi&rdquo; &mdash; to destroy) has prompted some scholars to see a deliberate contrast with the name Apollo, the god associated with the Flavian emperors (Nero was associated with Apollo; Domitian encouraged identification with Apollo). Whether or not this wordplay is intended, the identification of the Destroyer as king of the demonic locust army underscores the fundamental nature of evil as inherently destructive &mdash; not creative, not sustaining, but destroying. Yet even the Destroyer operates only within God&rsquo;s permission."
  },
  {
    id: "v12",
    color: TEAL,
    title: "Verse 12: The First Woe Is Past; Two More Woes Are Coming",
    body: "&ldquo;The first woe is past; two other woes are yet to come.&rdquo; This brief verse functions as a structural marker within Revelation&rsquo;s narrative architecture. The eagle&rsquo;s warning in 8:13 announced three woes corresponding to the last three trumpets. Verse 12 confirms that the first woe (the fifth trumpet) is now concluded and marks the formal transition to the second woe (the sixth trumpet, introduced in v.13). The formulaic character of this verse (&ldquo;is past... are yet to come&rdquo;) gives the reader a sense of the deliberate, sequential character of divine judgment &mdash; it proceeds by stages, each one announced, each one completed, each one followed by a warning of what is next. For the original readers of Revelation, this structure was both terrifying and strangely comforting: the judgments are not random catastrophes but ordered sequences under divine direction. Even the woes are numbered; even the worst events are within God&rsquo;s count. The pause between the woes is itself an act of grace &mdash; a moment of reflection between two waves of judgment, an implicit invitation to repentance before the next wave breaks."
  },
  {
    id: "v13-15",
    color: GREEN,
    title: "Verses 13-15: The Four Angels at the Euphrates Released",
    body: "The sixth angel sounds and a voice comes from the four horns of the golden altar before God &mdash; the altar of incense where the prayers of the saints were offered in chapter 8. This connection is significant: the judgment of the sixth trumpet, like the judgments of the first four trumpets, proceeds from the altar of prayer. The voice commands the sixth angel to release the four angels who are bound at the great river Euphrates. The binding of the four angels is itself significant: binding implies prior imprisonment, which implies they are malevolent forces held in check by divine power. The Euphrates marked the eastern frontier of the Roman Empire; from beyond it came the Parthians, Rome&rsquo;s most feared military enemy. The four angels have been prepared (&ldquo;hetoimasmenous&rdquo; &mdash; made ready) for this very hour, day, month, and year. The specificity is striking: this is not a general standing order but a precise moment in the divine calendar. The judgment that follows is calibrated to the exact moment God has appointed &mdash; no earlier, no later. The purpose of the four angels is stated immediately: to kill a third of mankind (v.15). The shift from the fifth trumpet (torment without killing) to the sixth (killing a third of mankind) represents a significant escalation in the intensity of divine judgment."
  },
  {
    id: "v16-19",
    color: ROSE,
    title: "Verses 16-19: The Army of 200 Million",
    body: "John hears the number of the mounted troops: 200 million (twice ten thousand times ten thousand &mdash; the number is represented in the language of vast, almost uncountable multitude). The description that follows is as elaborate as the locust-scorpion description: the horsemen wear breastplates of fiery red (&ldquo;pyrinos&rdquo;), dark blue (&ldquo;hyakinthinos&rdquo;), and yellow as sulfur (&ldquo;theioddees&rdquo;). The horses have heads like lions (power and devouring ferocity) and out of their mouths come fire, smoke, and sulfur &mdash; the three plagues that kill a third of mankind (v.18). The colors of the breastplates (red, blue, yellow) correspond to the three plagues (fire, smoke, sulfur), creating a visual unity between the riders and what their horses unleash. The horses&rsquo; tails are like snakes, with heads that inflict harm (v.19) &mdash; linking this army to the serpent imagery that runs throughout Revelation. The combination of fire, smoke, and sulfur (&ldquo;theion&rdquo; &mdash; brimstone) recalls the divine judgment on Sodom (Genesis 19:24-28) and the prophetic descriptions of eschatological judgment: Ezekiel 38:22 describes God sending &ldquo;torrents of rain, hailstones and burning sulfur&rdquo; on Gog. The army from beyond the Euphrates, breathing the judgment-fire of Sodom, kills a third of all humanity &mdash; yet the remaining two-thirds do not repent."
  },
  {
    id: "v20-21",
    color: PURPLE,
    title: "Verses 20-21: The Refusal to Repent",
    body: "&ldquo;The rest of mankind who were not killed by these plagues still did not repent of the work of their hands; they did not stop worshiping demons, and idols of gold, silver, bronze, stone and wood &mdash; idols that cannot see or hear or walk. Nor did they repent of their murders, their magic arts, their sexual immorality or their thefts.&rdquo; These two verses are the climax and the most disturbing moment of the entire chapter. All that has preceded &mdash; the five months of torment, the death of a third of mankind &mdash; has been, among other things, an opportunity for repentance. The opportunity is declined. The word &ldquo;metanoeo&rdquo; (repent) appears twice in these verses (vv.20-21), emphasizing the missed response. The catalog of sins is constructed in two parts: (1) idolatry &mdash; worshiping demons through manufactured idols that cannot see, hear, or walk (the classic prophetic indictment, echoing Deuteronomy 4:28; Psalm 115:4-7; Isaiah 44:9-20; Daniel 5:23); and (2) four further sins: murders (phonoi), magic arts (pharmakeia &mdash; drug-related sorcery), sexual immorality (porneia), and thefts (klopai). The structure echoes the second table of the Decalogue (commandments 5-10). The refusal to repent despite catastrophic judgment reveals the depth of idolatry&rsquo;s grip on the human heart: when the heart is captured by what cannot see, hear, or walk, even the voice of divine judgment cannot penetrate it. This is the biblical diagnosis of the hardened heart that Ezekiel 36:26 addresses: &ldquo;I will remove from you your heart of stone and give you a heart of flesh.&rdquo;"
  },
];

const APPLICATION_SECTIONS = [
  {
    id: "app1",
    color: PURPLE,
    title: "The Refusal to Repent: What It Reveals About the Human Heart",
    body: "Verses 20-21 are the pastoral and theological center of Revelation 9 for contemporary application. Despite two catastrophic waves of judgment &mdash; five months of torment followed by the death of a third of humanity &mdash; the survivors do not repent. They continue worshiping idols, practicing sorcery, committing murder and sexual immorality and theft. The text offers no explanation for this refusal except the nature of idolatry itself. The idols described in v.20 &ldquo;cannot see or hear or walk.&rdquo; This is the prophetic critique of idol worship: the worshiper becomes like the idol (Psalm 115:8: &ldquo;Those who make them will be like them, and so will all who trust in them&rdquo;). The idol-worshiper becomes spiritually blinded, deaf, and immobile &mdash; unable to perceive God&rsquo;s judgments or respond to them. What does this reveal about the human heart? That the capacity for repentance is not simply a matter of having sufficient evidence or experiencing sufficient pain. Repentance requires a heart that can still be reached &mdash; which is ultimately a work of divine grace (Acts 11:18; 2 Timothy 2:25: &ldquo;God will grant them repentance&rdquo;). The church that takes Revelation 9:20-21 seriously will not rely on external pressure, argument alone, or even divine discipline to produce repentance in others, but will pray with Paul that God would grant repentance &mdash; the change of mind that only the Holy Spirit can produce in a hardened heart."
  },
  {
    id: "app2",
    color: ROSE,
    title: "The Abyss Opened: Divine Sovereignty Over Demonic Forces",
    body: "The most striking element of the fifth trumpet is not the horror of the locust-scorpions but the control structure within which they operate. The Abyss has a key (v.1) &mdash; it is locked, and it can only be opened by divine permission. The locusts have precise instructions: not the grass, not the plants, not the trees; only the unsealed (v.4). Their torment has a specified duration: five months (vv.5, 10). They may torment but not kill (v.5). Every aspect of the demonic agency in Revelation 9 is bounded, limited, and directed by divine sovereignty. This is one of the most important pastoral truths in the entire book: demonic forces are real, they cause real suffering, they are organized under a named Destroyer &mdash; and they operate within parameters set by God. This does not minimize the reality of spiritual warfare or the genuine suffering caused by demonic activity. But it means that the Christian facing demonic pressure is not facing an infinite, unbounded power. They are facing a power that has been given limits, that operates under a key that God holds, and that can torment but cannot touch the sealed. For those who feel overwhelmed by spiritual opposition, Revelation 9 says: the Abyss is locked; the key is in God&rsquo;s hand; the seal of God is a genuine protection. The God who locks the Abyss and sets the parameters of every demonic commission is the same God who seals his people on their foreheads."
  },
  {
    id: "app3",
    color: GOLD,
    title: "The 200 Million Army and the God Who Holds All Powers",
    body: "The army of 200 million in the sixth trumpet (&ldquo;twice ten thousand times ten thousand&rdquo; &mdash; a number so vast it was barely imaginable in the ancient world) represents the apex of military terror in Revelation 9. For John&rsquo;s original readers, the image drew on the collective fear of the Parthian cavalry &mdash; the one force that had successfully humiliated Rome and that loomed as an ongoing existential threat beyond the Euphrates. For contemporary readers, the image can evoke whatever appears to be the most overwhelming, unstoppable military or political force in the world. The theological point Revelation 9 makes about the 200 million army is the same as it makes about the locust-scorpions: they have been prepared (&ldquo;hetoimasmenous&rdquo;) for a specific hour, day, month, and year. They act on divine permission, not despite it. The most terrifying forces in the world &mdash; military, political, economic, demonic &mdash; do not operate outside God&rsquo;s governance. This is not a comfortable doctrine; it raises profound questions about God and suffering. But it is the consistent theological claim of the apocalyptic tradition, and it is the only ground on which the church can maintain hope in the face of overwhelming historical catastrophe. The God of Revelation 9 is not surprised by the 200 million; he scheduled them."
  },
  {
    id: "app4",
    color: TEAL,
    title: "What Is Our Response to These Visions? Living Faithfully Under Judgment",
    body: "Revelation 9 does not give us a comfortable or easy passage. Its visions are among the most extreme in the entire Bible: demonic locusts, a cosmic Destroyer, an army of 200 million, a third of humanity dead &mdash; and the survivors still refuse to repent. The natural question is: what is our response to these visions as contemporary Christians? Several responses are appropriate. First, worship: Revelation&rsquo;s most vivid judgment passages consistently generate the most intense worship in the book (chapters 4-5, 11, 15, 19). The severity of judgment reveals the holiness and justice of God that make his worthiness to be worshiped absolute. Second, intercession: if the prayers of the saints in chapter 8 launched the trumpet judgments, what would it mean to pray specifically for the repentance of those who, like the survivors in chapter 9, have so far refused? Third, urgency in evangelism: the sealed are protected from the locust torment (v.4); the unsealed are not. The pastoral urgency of Revelation 9 is the urgency of the mission: to see as many people as possible sealed before the judgment falls. Fourth, humility: the easy reading of Revelation 9 is to locate &ldquo;us&rdquo; among the sealed and &ldquo;them&rdquo; among the tormented. The harder and more honest reading is to recognize that the catalog of sins in vv.20-21 &mdash; idolatry, pharmakeia, porneia, theft &mdash; describes patterns that the contemporary church is not immune to."
  },
];

export default function Revelation9GuidePage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0a0a1a 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ background: ROSE, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>REVELATION</span>
            <span style={{ color: MUTED, fontSize: 14 }}>Chapter 9 &bull; 21 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 900, margin: "0 0 16px", lineHeight: 1.15, color: TEXT }}>
            Revelation 9: The Fifth and Sixth Trumpets &mdash; Locusts from the Abyss and the Army of 200 Million
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,2vw,1.1rem)", color: MUTED, maxWidth: 700, lineHeight: 1.75, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "Revelation 9 contains two of the most vivid and terrifying visions in the entire book. The fifth trumpet (first woe) releases demonic locusts from the Abyss to torment those without God&rsquo;s seal for five months. The sixth trumpet (second woe) releases four angels and a vast army of 200 million. Yet after all this &mdash; mankind does not repent." }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto", background: CARD }}>
        <div style={{ display: "flex", maxWidth: 900, margin: "0 auto", padding: "0 16px" }}>
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "16px 20px",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
                color: activeTab === t ? ROSE : MUTED,
                borderBottom: activeTab === t ? `2px solid ${ROSE}` : "2px solid transparent",
                transition: "color 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "Overview" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Overview of Revelation 9</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Revelation 9 continues the trumpet sequence begun in chapter 8 with the two most devastating trumpets so far: the fifth (first woe) and the sixth (second woe). The fifth trumpet opens the Abyss and releases demonic locust-scorpions to torment the unsealed for five months. The sixth trumpet releases four bound angels at the Euphrates and an inconceivable army of 200 million that kills a third of mankind. The chapter ends with one of Scripture&rsquo;s most sobering statements: despite all of this, the survivors do not repent." }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
              {[
                { label: "Book", value: "Revelation" },
                { label: "Chapter", value: "9" },
                { label: "Verse Count", value: "21" },
                { label: "Literary Type", value: "Apocalyptic vision" },
                { label: "Trumpets Covered", value: "5th and 6th (Woes 1 and 2)" },
                { label: "Central Failure", value: "Mankind refuses to repent" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: TEXT }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12 }}>Structure: Two Woes, One Diagnosis</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Revelation 9 divides into two major sections separated by the formal marker of v.12 (&ldquo;The first woe is past; two other woes are yet to come&rdquo;). The first section (vv.1-12) describes the fifth trumpet and its demonic locust army; the second section (vv.13-21) describes the sixth trumpet, the four Euphrates angels, and the army of 200 million. The chapter closes with the climactic and sobering statement of vv.20-21: humanity&rsquo;s refusal to repent. The entire chapter is a meditation on judgment that does not produce the response it is designed to evoke." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${ROSE}33`, padding: 16 }}>
                  <div style={{ color: ROSE, fontWeight: 700, marginBottom: 8 }}>Fifth Trumpet / First Woe (vv.1-12)</div>
                  <ul style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, paddingLeft: 16, margin: 0 }}>
                    <li>Star falls; Abyss opened</li>
                    <li>Smoke darkens sun and sky</li>
                    <li>Locust-scorpions emerge</li>
                    <li>Torment the unsealed for 5 months</li>
                    <li>King: Abaddon/Apollyon (Destroyer)</li>
                  </ul>
                </div>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${GOLD}33`, padding: 16 }}>
                  <div style={{ color: GOLD, fontWeight: 700, marginBottom: 8 }}>Sixth Trumpet / Second Woe (vv.13-21)</div>
                  <ul style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, paddingLeft: 16, margin: 0 }}>
                    <li>Voice from the altar of incense</li>
                    <li>Four angels at Euphrates released</li>
                    <li>Army of 200 million</li>
                    <li>Fire, smoke, sulfur kill 1/3 of mankind</li>
                    <li>Survivors refuse to repent</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 16, color: TEXT }}>Chapter 9 at a Glance</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "9:1-2", color: ROSE, label: "Star Falls", desc: "A star fallen from heaven opens the Abyss; smoke like a great furnace darkens sun and sky" },
                  { ref: "9:3-6", color: PURPLE, label: "Locust-Scorpions", desc: "Locusts with scorpion power emerge; commanded to torment only the unsealed for five months; death is impossible" },
                  { ref: "9:7-10", color: GOLD, label: "Description", desc: "Horses prepared for battle; human faces; women&rsquo;s hair; lion&rsquo;s teeth; iron breastplates; scorpion tails" },
                  { ref: "9:11", color: ROSE, label: "Abaddon/Apollyon", desc: "Their king is the angel of the Abyss; Hebrew: Abaddon; Greek: Apollyon (Destroyer)" },
                  { ref: "9:12", color: MUTED, label: "First Woe Past", desc: "Structural marker: first woe completed; two more woes to come" },
                  { ref: "9:13-15", color: TEAL, label: "Four Angels", desc: "Voice from the altar; four angels at the Euphrates released at the precise hour, day, month, and year" },
                  { ref: "9:16-19", color: GREEN, label: "Army of 200M", desc: "Horse-riders with lion-headed horses breathing fire, smoke, and sulfur; tails like snakes; kill 1/3 of mankind" },
                  { ref: "9:20-21", color: PURPLE, label: "No Repentance", desc: "Survivors continue idol worship, murder, sorcery, sexual immorality, and theft; they do not repent" },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 13, minWidth: 60, paddingTop: 2 }}>{item.ref}</span>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 13, minWidth: 120, paddingTop: 2 }}>{item.label}</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12, color: TEXT }}>Old Testament and Jewish Background</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Revelation 9 draws on a rich array of Old Testament and Second Temple Jewish sources. The locust imagery comes primarily from Joel 1-2, where a devastating locust invasion is interpreted as an army of God. The Abyss draws on 1 Enoch 18 (prison of fallen angels) and Jubilees 5:6. Abaddon appears six times in the Hebrew Bible (Job 26:6; 28:22; Psalm 88:11 et al.). The Euphrates as the eastern boundary of prophetic expectation comes from Genesis 15:18; Isaiah 7-8; Jeremiah 46. The description of fire, smoke, and sulfur echoes Sodom&rsquo;s judgment (Genesis 19:24-28) and Ezekiel 38:22. The idol polemic in vv.20-21 echoes Deuteronomy 4:28; Psalm 115:4-7; Isaiah 44:9-20." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Joel 1:6",
                  "Joel 2:4",
                  "Job 26:6",
                  "Psalm 115:4",
                  "Isaiah 14:12",
                  "Jeremiah 46:2",
                  "Ezekiel 38:22",
                  "Genesis 19:24",
                  "Daniel 5:23",
                ].map(ref => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Key Themes in Revelation 9</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Revelation 9 is dense with theological and symbolic material. The major themes range from the nature of the Abyss and demonic power to the sobering diagnosis of the hardened human heart that refuses to repent even under catastrophic judgment." }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {KEY_THEMES.map(section => (
                <div key={section.id} style={{ background: CARD, border: `1px solid ${open === section.id ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpen(open === section.id ? null : section.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                    </div>
                    <span style={{ color: section.color, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>{open === section.id ? "-" : "+"}</span>
                  </button>
                  {open === section.id && (
                    <div style={{ padding: "0 20px 20px 42px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12 }}>Greek Word Study</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
                {[
                  { word: "abyssos", transliteration: "(A-bys-sos)", meaning: "abyss, bottomless pit &mdash; the deep; in Old Testament cosmology the primordial deep (tehom); in Jewish literature the prison of rebellious angels; in Revelation the source of the beast (11:7; 17:8) and the prison of Satan (20:1-3)" },
                  { word: "Apollyon", transliteration: "(A-POL-ly-on)", meaning: "Destroyer &mdash; from apollymi (to destroy, to perish); the Greek name of the angel-king of the Abyss; may echo the god Apollo associated with Nero and Domitian; the fundamental nature of evil described as destructive rather than creative" },
                  { word: "skorpios", transliteration: "(SKOR-pi-os)", meaning: "scorpion &mdash; the painful stinging creature whose sting in the ancient world was notorious for causing excruciating pain; Jesus referenced scorpions as a symbol of harmful evil (Luke 10:19); here giving the locust army their destructive capacity" },
                  { word: "metanoeo", transliteration: "(me-ta-no-EH-o)", meaning: "to repent, to change one&rsquo;s mind &mdash; from meta (after, change) + noos (mind); the fundamental call of Jesus and the prophets; in vv.20-21 its absence marks the catastrophic failure of those who survive judgment to respond rightly to God" },
                  { word: "pharmakeia", transliteration: "(phar-ma-KEI-a)", meaning: "sorcery, magic arts &mdash; literally drug use; in the ancient world, drugs and potions were integral to occult practice and divination; the root of the English word &lsquo;pharmacy&rsquo;; in the New Testament associated with occult manipulation (Galatians 5:20; Revelation 18:23)" },
                  { word: "porneia", transliteration: "(por-NEI-a)", meaning: "sexual immorality &mdash; from porne (prostitute); covers all forms of sexual sin outside God&rsquo;s design; in Revelation frequently associated with idolatry and spiritual unfaithfulness; the Old Testament prophets used sexual metaphors for Israel&rsquo;s idolatry" },
                ].map(item => (
                  <div key={item.word} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "14px 16px" }}>
                    <div style={{ color: GOLD, fontWeight: 800, fontSize: 16, fontStyle: "italic", marginBottom: 4 }}>{item.word}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginBottom: 6 }}>{item.transliteration}</div>
                    <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.meaning }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>The Locust Description: Joel 2 and Its Intensification</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Joel 1-2 is the primary Old Testament source for Revelation 9&rsquo;s locust imagery. Joel describes an actual locust invasion that he interprets as an invading army and a harbinger of the Day of the Lord. Revelation takes Joel&rsquo;s imagery and intensifies it: Joel&rsquo;s locusts are like horses and like warriors; Revelation&rsquo;s locusts have human faces, lion&rsquo;s teeth, iron breastplates, and scorpion tails. Joel&rsquo;s army advances in military formation; Revelation&rsquo;s army advances from the Abyss under a named Destroyer. The comparison between the two texts illuminates Revelation&rsquo;s method: it takes prophetic imagery and pushes it into the cosmic and eschatological register, transforming a historical locust plague into a vision of the ultimate demonic assault on humanity." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${TEAL}33`, padding: 14 }}>
                  <div style={{ color: TEAL, fontWeight: 700, marginBottom: 8 }}>Joel&rsquo;s Locusts (Joel 1-2)</div>
                  <ul style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, paddingLeft: 14, margin: 0 }}>
                    <li>Like horses prepared for battle (Joel 2:4)</li>
                    <li>An army that does not break ranks (Joel 2:7)</li>
                    <li>Nation with lion&rsquo;s teeth (Joel 1:6)</li>
                    <li>Historical locust invasion interpreted prophetically</li>
                    <li>God&rsquo;s army executing divine judgment on Israel</li>
                  </ul>
                </div>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${ROSE}33`, padding: 14 }}>
                  <div style={{ color: ROSE, fontWeight: 700, marginBottom: 8 }}>Revelation&rsquo;s Locust-Scorpions (Rev 9)</div>
                  <ul style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, paddingLeft: 14, margin: 0 }}>
                    <li>Horses + human faces + lion&rsquo;s teeth + scorpion tails</li>
                    <li>Emerge from the Abyss under a named Destroyer</li>
                    <li>Target only the spiritually unsealed</li>
                    <li>Cosmic, eschatological scope</li>
                    <li>Divine permission with precise limits (5 months, no killing)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Verse by Verse: Revelation 9:1-21</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "A careful walk through all 21 verses of Revelation 9, examining the structure, Old Testament background, and meaning of each passage. Click any section to expand the commentary." }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {VERSE_SECTIONS.map(section => (
                <div key={section.id} style={{ background: CARD, border: `1px solid ${open === section.id ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpen(open === section.id ? null : section.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                    </div>
                    <span style={{ color: section.color, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>{open === section.id ? "-" : "+"}</span>
                  </button>
                  {open === section.id && (
                    <div style={{ padding: "0 20px 20px 40px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: 24, marginTop: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12 }}>Verse References in Context</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16, fontSize: 14 }}
                dangerouslySetInnerHTML={{ __html: "Hover over any reference to see the verse text. These are the key passages that illuminate Revelation 9&rsquo;s Old Testament background and theological significance." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Revelation 9:1",
                  "Revelation 9:4",
                  "Revelation 9:6",
                  "Revelation 9:11",
                  "Revelation 9:15",
                  "Revelation 9:20",
                  "Joel 2:4",
                  "Joel 1:6",
                  "Job 26:6",
                  "Psalm 115:4",
                  "Luke 8:31",
                  "Luke 10:18",
                ].map(ref => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Application: The Hardened Heart and the Sealed Life</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "What does the refusal to repent even under catastrophic judgment reveal about the human heart? What is our response as contemporary Christians to these visions of demonic locusts, an army of 200 million, and the sobering conclusion that survivors of all this did not repent? These questions &mdash; which Revelation 9 forces into sharp focus &mdash; have direct pastoral and theological implications." }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {APPLICATION_SECTIONS.map(section => (
                <div key={section.id} style={{ background: CARD, border: `1px solid ${open === section.id ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpen(open === section.id ? null : section.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                    </div>
                    <span style={{ color: section.color, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>{open === section.id ? "-" : "+"}</span>
                  </button>
                  {open === section.id && (
                    <div style={{ padding: "0 20px 20px 42px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12 }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "The locust-scorpions are given precise limits: five months, torment but not killing, only those without God&rsquo;s seal. How does the bounded, limited nature of demonic activity in Revelation 9 change how you think about spiritual warfare and demonic influence in your own life?",
                  "The survivors of Revelation 9&rsquo;s judgments refuse to repent despite catastrophic loss. Have you ever observed (or experienced) a situation where external pressure failed to produce repentance? What was missing that could only come from God?",
                  "Abaddon/Apollyon means &lsquo;Destroyer&rsquo; &mdash; the fundamental nature of evil is described as destructive. What in your life or community has a pattern of destroying rather than building up? How do you discern the difference between human destructiveness, systemic harm, and specifically spiritual attack?",
                  "The four angels at the Euphrates were prepared for a specific hour, day, month, and year. How does the idea that the worst events of history occur at divinely appointed times &mdash; not outside God&rsquo;s governance &mdash; shape your response to catastrophic world events today?",
                  "The catalog of unrepented sins in vv.20-21 includes pharmakeia (sorcery/drug use), porneia (sexual immorality), and idol worship. Where do you see contemporary equivalents of these patterns in your own cultural context? How does the church speak prophetically to them?",
                  "Revelation 9 ends without resolution: no repentance, no deliverance, just the announcement that the second woe has passed and a third is coming. How do you hold the absence of neat resolution in this passage &mdash; and what does it say about the nature of faithful witness before a world that may not respond?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: ROSE, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12 }}>Video Resources: Revelation 9</h3>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Deepen your study of the locust-scorpions from the Abyss, Abaddon and Apollyon, the army of 200 million, and the theological weight of human refusal to repent through these video resources." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "10px 14px" }}>
                      <div style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `linear-gradient(135deg, #05050f 0%, ${CARD} 100%)`, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: 28 }}>
              <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12 }}>Closing: The Deepest Question Revelation 9 Asks</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The deepest question Revelation 9 poses is not &lsquo;what do the locusts mean?&rsquo; or &lsquo;who is Apollyon?&rsquo; but the question implied by verses 20-21: What would it take for a human heart to repent? The answer Revelation gives, taken together with the rest of Scripture, is that no amount of external judgment is sufficient by itself. The prophets knew this: Amos 4:6-11 records five divine disciplines, each followed by &lsquo;yet you have not returned to me.&rsquo; The hardened heart requires a work that only God can do: the removal of the heart of stone and the implanting of a heart of flesh (Ezekiel 36:26). This is the gospel&rsquo;s answer to Revelation 9. The judgment chapters do not finally produce repentance; the mercy of God, revealed fully in Christ, is what draws humanity toward him. Revelation 9 is not the last word. The Lamb who opens the seals is also the one who stands at the door and knocks. And the church that has been sealed by God is called not to triumphalism but to faithful witness &mdash; carrying the message that can reach even the hardest heart, because it comes not from law and judgment but from the costly grace of the crucified King." }}
              />
              <blockquote style={{ borderLeft: `4px solid ${ROSE}`, paddingLeft: 20, margin: 0 }}>
                <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;The rest of mankind who were not killed by these plagues still did not repent of the work of their hands.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13 }}>-- Revelation 9:20 (NIV)</cite>
              </blockquote>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
