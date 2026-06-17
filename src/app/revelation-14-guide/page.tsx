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
  { videoId: "VDjp8R0RVeY", title: "Revelation 14 - The 144,000 and Three Angels" },
  { videoId: "Q_7ZHKF8kiE", title: "The Eternal Gospel - First Angel Message Revelation 14" },
  { videoId: "XmIDiyH3nSk", title: "Fallen Is Babylon - Revelation 14:8" },
  { videoId: "bHvXe0AHvR4", title: "The Harvest of the Earth - Revelation 14 Commentary" },
];

const KEY_THEMES = [
  {
    id: "th1",
    color: GOLD,
    title: "The 144,000 on Mount Zion: Undefiled, No Lie Found (vv. 1-5)",
    body: "Then I looked, and there before me was the Lamb, standing on Mount Zion, and with him 144,000 who had his name and his Father&apos;s name written on their foreheads. This opening vision provides the essential counter-image to the beast and his mark (chapter 13). Where the beast marks his followers on hand or forehead with his name, the Lamb&apos;s followers bear the names of the Lamb and the Father on their foreheads &mdash; the covenant marks of genuine divine belonging. Mount Zion is the eschatological mountain, the heavenly Jerusalem (Hebrews 12:22), the city of the living God. The 144,000 sing a new song that only they can learn &mdash; a song of redemptive experience, of having lived through the tribulation and remained faithful. They are described as those who &ldquo;did not defile themselves with women&rdquo; &mdash; most likely a metaphor drawn from OT warfare purity codes (Deuteronomy 23:9-10) and the consistent Revelation metaphor of adultery for idolatry: these are those who did not commit spiritual adultery with Babylon. &ldquo;No lie was found in their mouths; they are blameless&rdquo; &mdash; a description drawn from Isaiah 53:9 (the Suffering Servant) applied to the community that follows the Lamb wherever he goes."
  },
  {
    id: "th2",
    color: TEAL,
    title: "The First Angel: The Eternal Gospel to Every Nation (vv. 6-7)",
    body: "Then I saw another angel flying in midair, and he had the eternal gospel to proclaim to those who live on the earth &mdash; to every nation, tribe, language and people. He said in a loud voice, &ldquo;Fear God and give him glory, because the hour of his judgment has come. Worship him who made the heavens, the earth, the sea and the springs of water.&rdquo; This is the only place in the New Testament where an angel is explicitly described as carrying the <em>evangelion</em> (good news/gospel). The gospel here has a universal scope &mdash; to every nation, tribe, language, and people &mdash; precisely the scope that Revelation 13 gave to the beast&apos;s authority. The content of this gospel is creation theology and eschatological urgency: &ldquo;Fear God... worship him who made...&rdquo; In Revelation&apos;s symbolic world, to fear God and worship the Creator is the antithesis of worshipping the beast. The &ldquo;hour of his judgment&rdquo; (<em>hora tes kriseos</em>) has arrived: this is not a threat but a proclamation of good news for those who have been under the beast&apos;s oppression. God&apos;s justice is coming; the oppressor will not have the final word. The Greek <em>aionia</em> (eternal) modifying the gospel signals that this is not just a contemporary message but the permanent, unchanging good news rooted in who God is."
  },
  {
    id: "th3",
    color: ROSE,
    title: "The Second Angel: Fallen Is Babylon the Great (v. 8)",
    body: "A second angel followed and said, &ldquo;Fallen! Fallen is Babylon the Great, which made all the nations drink the maddening wine of her adulteries.&rdquo; This is a prophetic announcement in the perfect tense &mdash; &ldquo;Fallen! Fallen!&rdquo; &mdash; as if the event is already accomplished because it is so certain in God&apos;s purposes. The double announcement echoes Isaiah 21:9 (&ldquo;Babylon has fallen, has fallen!&rdquo;) and Jeremiah 51:8. Babylon in Revelation is the symbolic name for Rome, the imperial capital, the city built on seven hills (Revelation 17:9). But Babylon is also the archetypal symbol of every human city organized around the principle of self-sufficiency, the accumulation of power, and the demand for worship that belongs to God alone. &ldquo;The maddening wine of her adulteries&rdquo; &mdash; the Greek <em>porneia</em> (sexual immorality/idolatry) is consistently used in the OT prophets for covenant unfaithfulness; here it represents the seductive allure of the imperial economic and religious system that draws the nations into complicity with its blasphemy. The angel proclaims this as already fallen: those who have been seduced by Babylon are drinking a wine that will run out, serving a city whose foundations are already crumbling."
  },
  {
    id: "th4",
    color: PURPLE,
    title: "The Third Angel: Warning Against the Mark of the Beast (vv. 9-11)",
    body: "A third angel followed them and said in a loud voice: &ldquo;If anyone worships the beast and its image and receives its mark on their forehead or on their hand, they, too, will drink the wine of God&apos;s fury, which has been poured full strength into the cup of his wrath. They will be tormented with burning sulfur in the presence of the holy angels and of the Lamb. And the smoke of their torment will rise for ever and ever. There will be no rest day or night for those who worship the beast and its image, or for anyone who receives the mark of its name.&rdquo; The three angels together form the counter-proclamation to the beast&apos;s program: the eternal gospel (v.6), the announcement of Babylon&apos;s fall (v.8), and now the solemn warning of divine wrath on those who choose the beast. The wine of God&apos;s fury is poured <em>akraton</em> &mdash; full strength, undiluted. In antiquity, wine was normally mixed with water; undiluted wine symbolizes the full force of God&apos;s judgment without mercy-tempering. The burning sulfur echoes Sodom and Gomorrah (Genesis 19:24) &mdash; the biblical symbol for divine judgment on cities given over to violence and wickedness. For Revelation&apos;s first readers, the weight of this warning was pastoral and urgent: the cost of refusing the mark is real, but the cost of taking the mark is eternal."
  },
  {
    id: "th5",
    color: GREEN,
    title: "Patient Endurance of the Saints; Blessed Are the Dead (vv. 12-13)",
    body: "This calls for patient endurance on the part of the people of God who keep his commands and remain faithful to Jesus. Then I heard a voice from heaven say, &ldquo;Write this: Blessed are the dead who die in the Lord from now on.&rdquo; &ldquo;Yes,&rdquo; says the Spirit, &ldquo;they will rest from their labor, for their deeds will follow them.&rdquo; The call to patient endurance (<em>hupomone</em>) returns &mdash; the same call as in 13:10. The community is not called to passive resignation but to active, determined faithfulness. To &ldquo;keep his commands and remain faithful to Jesus&rdquo; is a definition of the Lamb&apos;s community that stands in direct contrast to those who have taken the beast&apos;s mark. The beatitude for those who &ldquo;die in the Lord&rdquo; is the second of Revelation&apos;s seven beatitudes (1:3; 14:13; 16:15; 19:9; 20:6; 22:7; 22:14). Those who die in the Lord are not defeated; they &ldquo;rest from their labor&rdquo; and their deeds follow them. This is Revelation&apos;s most direct pastoral comfort for those facing martyrdom: death under the beast&apos;s hand is not defeat but entrance into rest, and what you have done for the Lamb follows you into eternity."
  },
  {
    id: "th6",
    color: GOLD,
    title: "The Harvest of the Earth: Grain and Grapes (vv. 14-20)",
    body: "I looked, and there before me was a white cloud, and seated on the cloud was one like a son of man with a crown of gold on his head and a sharp sickle in his hand. Then another angel came out of the temple and called in a loud voice to him who was sitting on the cloud, &ldquo;Take your sickle and reap, because the time to reap has come, for the harvest of the earth is ripe.&rdquo; The harvest imagery draws on Joel 3:13 (&ldquo;Swing the sickle, for the harvest is ripe&rdquo;) and the parable of the wheat and tares (Matthew 13:24-30). The &ldquo;son of man&rdquo; figure on the cloud is drawn from Daniel 7:13 &mdash; the one who comes on the clouds of heaven with authority to judge. Two harvests are depicted: a grain harvest (vv.14-16), which most commentators read as the gathering of the redeemed, and a grape harvest (vv.17-20) which is explicitly a harvest of divine wrath. The grapes are thrown into the great winepress of God&apos;s wrath and are trampled outside the city. The blood that flows from the winepress rises to the horses&apos; bridles for a distance of 1,600 stadia (about 180 miles, the approximate length of Israel/Palestine) &mdash; a hyperbolic image of the comprehensive scope of divine judgment. The Greek <em>trugao</em> (to harvest/reap) and <em>lenos</em> (winepress) are central to this vision."
  },
];

const VERSE_BY_VERSE = [
  {
    id: "v1",
    ref: "14:1",
    title: "The 144,000 with the Lamb on Mount Zion",
    body: "Then I looked, and there before me was the Lamb, standing on Mount Zion, and with him 144,000 who had his name and his Father&apos;s name written on their foreheads. After the darkness of chapter 13, the vision of chapter 14 opens with a triumphant counter-image. The Lamb stands (<em>hestotos</em> &mdash; perfect participle, indicating a permanent, completed stance) on Mount Zion. In the OT, Mount Zion is the place of God&apos;s dwelling, the eschatological gathering point for all nations (Isaiah 2:2-4, Micah 4:1-5). In Revelation, it appears to be the heavenly Jerusalem. The 144,000 have been introduced in Revelation 7:1-8 as those sealed from every tribe of Israel &mdash; a symbolic number (12 x 12 x 1000) representing the complete, perfected people of God drawn from all nations. Their defining mark is the name: the Lamb&apos;s name and the Father&apos;s name on their foreheads &mdash; the direct counterpart to the beast&apos;s mark (13:16-17). Name in the ancient world represented identity, belonging, authority, and ownership. These are people who belong to the Lamb and the Father in the most complete possible sense."
  },
  {
    id: "v2",
    ref: "14:2-3",
    title: "The New Song That Only the Redeemed Can Learn",
    body: "And I heard a sound from heaven like the roar of rushing waters and like a loud peal of thunder. The sound I heard was like that of harpists playing their harps. And they sang a new song before the throne and before the four living creatures and the elders. No one could learn the song except the 144,000 who had been redeemed from the earth. The heavenly soundscape is layered: rushing waters, thunder, harps &mdash; the same combination found in Ezekiel 1:24 (the voice of the Almighty) and Revelation 1:15. The &ldquo;new song&rdquo; (<em>oiden kainen</em>) appears in Psalms 96:1, 98:1, 149:1 as the eschatological song of God&apos;s final victory and redemption. In Revelation 5:9 the four living creatures and elders sang a new song to the Lamb who was slain. Here the 144,000 have their own new song. The exclusivity is striking: &ldquo;No one could learn the song except the 144,000.&rdquo; This is not elitism but the recognition that some songs can only be learned through experience &mdash; the song of those who have endured tribulation, kept faith, and been redeemed through the blood of the Lamb. It is the song that grows from suffering-into-glory, which cannot be imitated or approximated from the outside."
  },
  {
    id: "v3",
    ref: "14:4-5",
    title: "Undefiled, Firstfruits, No Lie in Their Mouths",
    body: "These are those who did not defile themselves with women, for they remained virgins. They follow the Lamb wherever he goes. They were purchased from among mankind and offered as firstfruits to God and the Lamb. No lie was found in their mouths; they are blameless. The celibacy language is almost certainly metaphorical. In the OT prophets (Hosea, Ezekiel, Jeremiah), idolatry is consistently portrayed as sexual unfaithfulness to the divine covenant partner. Revelation consistently uses &ldquo;adultery&rdquo; and &ldquo;fornication&rdquo; metaphors for compromise with the imperial cult and Babylon&apos;s system (2:14, 2:20-21, 17:2). To remain a virgin is to have refused spiritual adultery with the beast and Babylon. &ldquo;They follow the Lamb wherever he goes&rdquo; &mdash; this is the classic NT language of discipleship (John 10:27, Mark 8:34). &ldquo;Firstfruits&rdquo; (<em>aparche</em>) in the OT were the first portion of the harvest offered to God, the pledge that the full harvest would follow. The 144,000 as firstfruits suggests they are the advance sign of a much larger harvest of redemption. &ldquo;No lie was found in their mouths; they are blameless&rdquo; draws on Isaiah 53:9 (the Servant) and Zephaniah 3:13 (the remnant of Israel) &mdash; applied to the community that has refused to confess <em>Kyrios Kaisar</em> (Caesar is Lord) when the beast demanded it."
  },
  {
    id: "v4",
    ref: "14:6-7",
    title: "The First Angel: Fear God, Worship the Creator",
    body: "Then I saw another angel flying in midair, and he had the eternal gospel to proclaim to those who live on the earth &mdash; to every nation, tribe, language and people. He said in a loud voice, &ldquo;Fear God and give him glory, because the hour of his judgment has come. Worship him who made the heavens, the earth, the sea and the springs of water.&rdquo; The three angels of Revelation 14 are one of the most theologically compact sequences in the entire book. The first angel bears the <em>evangelion aionion</em> &mdash; the eternal gospel. The content of the eternal gospel here is not a summary of Christ&apos;s death and resurrection (though those are not excluded) but a call to creation theology: &ldquo;Worship him who made the heavens, the earth, the sea and the springs of water.&rdquo; This language deliberately echoes the fourth commandment (Exodus 20:11) and Genesis 1. In the context of the beast&apos;s demand for worship, the eternal gospel is the proclamation that there is only One worthy of worship: the Creator. The universal scope &mdash; every nation, tribe, language, people &mdash; matches both the scope of the beast&apos;s authority (13:7) and the composition of the redeemed (7:9). The gospel reaches everywhere the beast does."
  },
  {
    id: "v5",
    ref: "14:8",
    title: "The Second Angel: Fallen Is Babylon",
    body: "A second angel followed and said, &ldquo;Fallen! Fallen is Babylon the Great, which made all the nations drink the maddening wine of her adulteries.&rdquo; The repetition &mdash; &ldquo;Fallen! Fallen!&rdquo; &mdash; is the Hebrew device of emphatic intensification, drawn directly from Isaiah 21:9. The prophetic perfect tense (fallen, as a done deal) communicates the absolute certainty of Babylon&apos;s doom: from God&apos;s perspective, the outcome is already sealed even though Babylon appears in the narrative to still be at the height of her power. Babylon in Revelation is Rome &mdash; the city built on seven hills (17:9), the great city that &ldquo;rules over the kings of the earth&rdquo; (17:18). But Babylon is also every manifestation of the human city organized around power, wealth, and self-deification. The &ldquo;maddening wine of her adulteries&rdquo; is her seductive power: Babylon makes the nations drunk with the illusion that her power is permanent, that her wealth is true wealth, that her lords are worthy of worship. The second angel&apos;s announcement unmasks the illusion: she has already fallen; her wine is poison."
  },
  {
    id: "v6",
    ref: "14:9-11",
    title: "The Third Angel: The Cup of God's Wrath",
    body: "A third angel followed them and said in a loud voice: &ldquo;If anyone worships the beast and its image and receives its mark on their forehead or on their hand, they, too, will drink the wine of God&apos;s fury, which has been poured full strength into the cup of his wrath.&rdquo; The wine motif continues but inverted: those who drank Babylon&apos;s maddening wine will drink the wine of God&apos;s wrath. The image of God&apos;s wrath as a cup of wine appears repeatedly in the OT: Psalm 75:8, Isaiah 51:17-22, Jeremiah 25:15-29, Habakkuk 2:16. Jeremiah 25 is the most elaborate version: the Lord gives Jeremiah a cup of wrath to give to all the nations, beginning with Jerusalem. In Revelation the nations who have taken the beast&apos;s mark must drink from that same cup. The &ldquo;burning sulfur&rdquo; language (Greek: <em>theion</em>, sulfur) echoes Genesis 19:24 (Sodom and Gomorrah) and Isaiah 30:33 &mdash; the biblical vocabulary for comprehensive divine judgment on cities given over to wickedness. The pastoral weight of verses 9-11 is this: the cost of taking the beast&apos;s mark appears small (economic access, social belonging, physical safety) but the ultimate cost is catastrophic."
  },
  {
    id: "v7",
    ref: "14:12-13",
    title: "Patient Endurance; Blessed Are the Dead in the Lord",
    body: "This calls for patient endurance on the part of the people of God who keep his commands and remain faithful to Jesus. Then I heard a voice from heaven say, &ldquo;Write this: Blessed are the dead who die in the Lord from now on.&rdquo; The structure of verses 6-13 is carefully designed: the three angel proclamations are bracketed at the beginning (v.6) and end (v.12-13) by pastoral appeals to God&apos;s people. The call for <em>hupomone</em> (patient endurance, steadfast perseverance) at the end of the three-angel sequence is the pastoral interpretation of what these proclamations mean for believers: hold on. The eternal gospel is true, Babylon will fall, and those who take the beast&apos;s mark will drink from the cup of wrath &mdash; therefore, endure. The beatitude for those who &ldquo;die in the Lord&rdquo; is remarkable: the Spirit says their deeds follow them. In Revelation&apos;s theology, the works of the faithful are not lost in death; they accompany the believer into eternity and are presented before God. This is the Christian answer to the martyrdom problem: death in faithfulness to the Lamb is not defeat, waste, or meaninglessness but the path into rest and ultimate vindication."
  },
  {
    id: "v8",
    ref: "14:14-16",
    title: "The Grain Harvest: One Like a Son of Man",
    body: "I looked, and there before me was a white cloud, and seated on the cloud was one like a son of man with a crown of gold on his head and a sharp sickle in his hand. Then another angel came out of the temple and called in a loud voice to him who was sitting on the cloud, &ldquo;Take your sickle and reap, because the time to reap has come, for the harvest of the earth is ripe.&rdquo; So he who was seated on the cloud swung his sickle over the earth, and the earth was harvested. The &ldquo;son of man&rdquo; figure on the cloud draws explicitly on Daniel 7:13-14 and Jesus&apos;s own use of the title in the Synoptic Gospels (Matthew 24:30, 26:64). The white cloud, the golden crown (<em>stephanos</em>, the victor&apos;s crown), and the sharp sickle all indicate eschatological authority and victory. The grain harvest is widely read as the gathering of the redeemed &mdash; the eschatological ingathering of God&apos;s people (Matthew 13:30, 39). The Greek <em>trugao</em> (harvest/reap) was used specifically for harvesting grapes or grain. The command from the angel is significant: even the Son of Man figure receives the signal from heaven that the appointed time has come. The harvest happens at God&apos;s appointed moment, not before."
  },
  {
    id: "v9",
    ref: "14:17-20",
    title: "The Grape Harvest and the Winepress of God's Wrath",
    body: "Another angel came out of the temple in heaven, and he too had a sharp sickle. Still another angel, who had charge of the fire, came from the altar and called in a loud voice to him who had the sharp sickle, &ldquo;Take your sharp sickle and gather the clusters of grapes from the earth&apos;s vine, because its grapes are ripe.&rdquo; The angel swung his sickle on the earth, gathered its grapes and threw them into the great winepress of God&apos;s wrath. They were trampled in the winepress outside the city, and blood flowed out of the press, rising as high as the horses&apos; bridles for a distance of 1,600 stadia. The grape harvest is explicitly the harvest of divine wrath, drawing on Joel 3:13 (&ldquo;for the winepress is full and the vats overflow &mdash; so great is their wickedness!&rdquo;) and Isaiah 63:1-6, where God appears as a lone warrior who has trampled the nations in his wrath. The winepress (<em>lenos</em>) trampled &ldquo;outside the city&rdquo; echoes the place where Jesus was crucified (Hebrews 13:12) &mdash; a complex theological detail. The distance of 1,600 stadia is 40 x 40 (40 being the number of judgment and testing in Scripture) or the approximate length of the land of Israel from Dan to Beersheba: a hyperbolic image of the completeness and thoroughness of divine judgment."
  },
];

const APPLICATION = [
  {
    id: "ap1",
    color: GOLD,
    title: "The 144,000 and the Christian Identity: Named by the Lamb",
    body: "Revelation 14 opens with the defining image of God&apos;s people: they bear the Lamb&apos;s name and the Father&apos;s name, not the beast&apos;s mark. This is an identity question before it is a behavior question. The 144,000 do not bear the Lamb&apos;s name because they managed to avoid certain behaviors; they avoid certain behaviors because they bear the Lamb&apos;s name. Christian ethics in a culture that demands the beast&apos;s mark begins not with a list of rules but with an identity: I belong to the Lamb; I am named by the Father. The practical question for Christians living under economic, social, or political pressure is: Whose name am I bearing today? When I make financial decisions, when I participate (or refuse to participate) in cultural practices that compromise my witness, when I choose social belonging over faithfulness &mdash; am I acting as one named by the Lamb, or am I functionally bearing the beast&apos;s mark? The 144,000 stand on Mount Zion singing a song only they can sing because they lived through something only they experienced: they were pressured, excluded, and threatened, and they kept the Lamb&apos;s name."
  },
  {
    id: "ap2",
    color: TEAL,
    title: "The Eternal Gospel and Faithful Witness in Babylon",
    body: "The first angel bears an <em>evangelion aionion</em> &mdash; an eternal gospel &mdash; to every nation, tribe, language, and people. This is the church&apos;s commission in Revelation&apos;s symbolic world. The content of the eternal gospel in Revelation 14 is strikingly creation-focused: &ldquo;Worship him who made the heavens, the earth, the sea and the springs of water.&rdquo; In a culture saturated with competing claims about who or what is worthy of ultimate loyalty, the church&apos;s witness is this: there is a Creator who made everything; he alone is worthy of worship; his judgment is coming; now is the time to turn. This is not a different gospel from the gospel of Christ crucified and risen &mdash; it is the same gospel in its full eschatological frame. What does faithful witness in &ldquo;Babylon&rdquo; look like? It means proclaiming, in word and life, that there is a Creator above the emperors, that the beast&apos;s authority is borrowed and temporary, and that the eternal gospel outlasts every version of Babylon. Christians who live faithfully under pressure &mdash; refusing the mark, enduring the exclusion, bearing the loss &mdash; are themselves embodied proclamations of the eternal gospel."
  },
  {
    id: "ap3",
    color: ROSE,
    title: "Babylon Has Already Fallen: Living in the Light of the Second Angel",
    body: "The second angel proclaims Babylon&apos;s fall in the prophetic perfect &mdash; as already accomplished. This is one of the most practically significant theological moves in Revelation. For a community living under Roman imperial power at the height of its dominance, the announcement &ldquo;Fallen! Fallen!&rdquo; required enormous faith. Rome appeared invincible; its power was absolute; its economic system was total. And yet the angel proclaims it already fallen. The theological implication for Christians in every age is this: every version of Babylon has already fallen in principle; what we are living through is the working out of what God has already determined. This is not triumphalism &mdash; Babylon&apos;s fall is still catastrophically destructive for those caught inside it (see Revelation 18). But it is eschatological confidence: the empire I am being pressured to serve, the system I am being asked to trust with my security, the Babylon whose wine is being offered to me &mdash; she has already fallen. The Christian who lives in the light of the second angel refuses to be seduced by Babylon because she knows the end of the story."
  },
  {
    id: "ap4",
    color: GREEN,
    title: "Patient Endurance as the Shape of Christian Life Under Pressure",
    body: "Twice in this chapter the call to patient endurance (<em>hupomone</em>) appears as the pastoral response to the pressure of living between the beast&apos;s demands and the eternal gospel&apos;s truth. The word <em>hupomone</em> is often translated &ldquo;perseverance&rdquo; or &ldquo;endurance,&rdquo; but its root meaning is &ldquo;remaining under&rdquo; &mdash; the active, intentional choice to stay beneath a burden rather than throwing it off through compromise or abandonment. Patient endurance is not passive suffering; it is active faithfulness maintained under sustained pressure. The beatitude for &ldquo;those who die in the Lord&rdquo; (v.13) is Revelation&apos;s great pastoral comfort for those for whom patient endurance meant losing their lives. The Spirit&apos;s confirmation &mdash; &ldquo;Yes... they will rest from their labor, for their deeds will follow them&rdquo; &mdash; is the answer to the question the martyrs ask in Revelation 6:10: &ldquo;How long?&rdquo; Not forever. They will rest. What they did for the Lamb will follow them into eternity. Patient endurance is not wasted; it accumulates. Every act of faithfulness under pressure is a deed that follows the believer through death and into the presence of the Lamb."
  },
  {
    id: "ap5",
    color: PURPLE,
    title: "The Harvest Is Coming: Living with Eschatological Urgency",
    body: "The harvest imagery of Revelation 14:14-20 serves a pastoral function: it establishes urgency. The grain harvest is coming &mdash; the eschatological ingathering of God&apos;s people. The grape harvest is coming &mdash; the comprehensive judgment of those who have allied themselves with the beast. Both harvests are depicted as happening at the God-appointed moment, at the signal from the heavenly temple. For the community addressed by Revelation, this means: live with the end in view. The choices you make now &mdash; to bear the Lamb&apos;s name or take the beast&apos;s mark, to proclaim the eternal gospel or drink Babylon&apos;s wine, to endure or to capitulate &mdash; matter beyond this present age. The harvest is coming; what you are growing matters. The image of &ldquo;one like a son of man&rdquo; with the golden crown and sharp sickle on the white cloud is a vision of eschatological victory: Jesus, the Daniel 7 Son of Man, coming to gather his people. This vision is not meant to terrify the faithful but to sustain them: the one who harvests is the Lamb who was slain, and he knows which grain belongs to him."
  },
];

export default function Revelation14GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>

        {/* Hero */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
            Revelation &mdash; Chapter 14
          </div>
          <h1 style={{ fontSize: "clamp(1.5rem,4vw,2.3rem)", fontWeight: 900, color: TEXT, marginBottom: "0.75rem", lineHeight: 1.25 }}>
            Revelation 14: The 144,000 on Mount Zion, Three Angel Messages, and the Harvest
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, maxWidth: 700, fontSize: "1rem" }}
            dangerouslySetInnerHTML={{ __html: "Revelation 14 is a chapter of stunning contrasts and decisive proclamations. After the darkness of chapter 13 &mdash; the beast, the false prophet, the mark &mdash; chapter 14 breaks open with a vision of the 144,000 standing with the Lamb on Mount Zion, singing the new song of the redeemed. Three angels follow with the most concentrated theological proclamation in Revelation: the eternal gospel, the fall of Babylon, and the solemn warning against the beast&apos;s mark. The chapter closes with the great harvest of the earth, both the grain harvest of redemption and the grape harvest of divine wrath. This is the turning point between the beast&apos;s apparent triumph and God&apos;s final judgment." }}
          />
        </div>

        {/* At-a-glance cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "0.75rem", marginBottom: "2rem" }}>
          {[
            ["Book", "Revelation"],
            ["Chapter", "14"],
            ["Verses", "1-20"],
            ["Key Theme", "Three Angel Messages"],
            ["Key Verse", "Rev 14:6-7"],
            ["Greek Focus", "evangelion (gospel)"],
          ].map(([k, v]) => (
            <div key={k} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "0.85rem 1rem" }}>
              <div style={{ color: MUTED, fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{k}</div>
              <div style={{ color: TEXT, fontWeight: 700, fontSize: "0.95rem" }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Context block */}
        <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ color: PURPLE, fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.75rem" }}>Chapter Context</div>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
            dangerouslySetInnerHTML={{ __html: "Revelation 14 stands at the structural center of the book&apos;s second major section (chapters 12-22), providing a theological overview of the entire conflict before the detailed judgment sequences of chapters 15-20 unfold. After the dragon, beast, and false prophet have been introduced (chapters 12-13), chapter 14 presents God&apos;s answer: the 144,000 with the Lamb, the three angel proclamations, and the harvest. The Greek words central to this chapter: <em>evangelion</em> (gospel/good news), <em>aionia</em> (eternal), <em>hupomone</em> (patient endurance), <em>trugao</em> (harvest/reap), <em>lenos</em> (winepress), and <em>Babylon</em> as symbol of pagan empire opposed to God. Revelation 14 is the chapter the beast-focused chapters 12-13 need: it establishes that the beast&apos;s apparent triumph is temporary, that the eternal gospel is going out to all nations, and that the harvest is coming at God&apos;s appointed time." }}
          />
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveTab(t)}
              style={{
                padding: "0.55rem 1.25rem",
                borderRadius: 20,
                border: `1px solid ${activeTab === t ? GOLD : BORDER}`,
                background: activeTab === t ? `${GOLD}22` : "transparent",
                color: activeTab === t ? GOLD : MUTED,
                fontWeight: activeTab === t ? 700 : 500,
                cursor: "pointer",
                fontSize: "0.875rem",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "Overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.25rem", marginBottom: "1rem" }}>Structure of Revelation 14</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Revelation 14 divides into three distinct movements: (1) the vision of the 144,000 on Mount Zion (vv.1-5), which provides the positive image of the redeemed community and answers the beast&apos;s mark with the Lamb&apos;s name; (2) the three angel proclamations (vv.6-11) and the pastoral call to patient endurance (vv.12-13), which together form the theological heart of the chapter; and (3) the dual harvest &mdash; grain and grapes (vv.14-20) &mdash; which provides the eschatological frame for all that precedes it." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1rem" }}>
                {[
                  { color: GOLD, label: "The 144,000 (vv.1-5)", role: "The Redeemed Community", desc: "Standing on Mount Zion with the Lamb, bearing his name and the Father&apos;s name &mdash; the counter-image to the beast&apos;s mark. They sing the new song of redemptive experience." },
                  { color: TEAL, label: "Three Angels (vv.6-11)", role: "The Three Proclamations", desc: "The eternal gospel to every nation; Babylon has fallen; warning against the beast&apos;s mark &mdash; followed by the call to patient endurance and the beatitude for those who die in the Lord." },
                  { color: ROSE, label: "The Harvest (vv.14-20)", role: "Grain and Grape Harvests", desc: "The son of man reaps the grain harvest (the redeemed) and another angel reaps the grape harvest (divine wrath), trampled in the winepress outside the city." },
                ].map(c => (
                  <div key={c.label} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                    <div style={{ color: c.color, fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{c.role}</div>
                    <div style={{ color: TEXT, fontWeight: 700, marginBottom: 6 }}>{c.label}</div>
                    <div style={{ color: MUTED, fontSize: "0.82rem", lineHeight: 1.6 }}>{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>The Three Angels: Proclamation and Warning</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { sym: "First Angel (vv.6-7)", meaning: "The eternal gospel to every nation, tribe, language and people: &ldquo;Fear God and give him glory, because the hour of his judgment has come. Worship him who made the heavens, the earth, the sea and the springs of water.&rdquo; Creation theology as gospel: the Creator alone is worthy of worship." },
                  { sym: "Second Angel (v.8)", meaning: "&ldquo;Fallen! Fallen is Babylon the Great, which made all the nations drink the maddening wine of her adulteries.&rdquo; The prophetic perfect announces Babylon&apos;s certain doom, drawing on Isaiah 21:9 and Jeremiah 51:8." },
                  { sym: "Third Angel (vv.9-11)", meaning: "The solemn warning against the beast&apos;s mark: those who worship the beast and bear his mark will drink the wine of God&apos;s fury, poured full strength. Burning sulfur, no rest day or night &mdash; the full weight of divine judgment for those who chose the beast over the Lamb." },
                  { sym: "Patient Endurance (vv.12-13)", meaning: "The pastoral conclusion: this calls for patient endurance from God&apos;s people. Blessed are the dead who die in the Lord &mdash; they rest from their labor, and their deeds follow them. The Spirit confirms: yes." },
                ].map(s => (
                  <div key={s.sym} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ background: `${TEAL}20`, border: `1px solid ${TEAL}44`, borderRadius: 8, padding: "2px 10px", fontSize: "0.75rem", color: TEAL, fontWeight: 700, whiteSpace: "nowrap", marginTop: 2 }}>{s.sym}</span>
                    <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.meaning }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>Key Greek Words</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "0.75rem" }}>
                {[
                  { word: "evangelion", meaning: "gospel/good news &mdash; the first angel bears the <em>evangelion aionion</em>, the eternal gospel: the permanent, unchanging good news rooted in who God is as Creator and Judge" },
                  { word: "aionia", meaning: "eternal/age-long &mdash; modifying the gospel signals that this proclamation is not time-bound or limited to a single era; it is the message of every age because it is rooted in the eternal character of God" },
                  { word: "Babylon", meaning: "symbol of pagan empire &mdash; Babylon in Revelation is Rome, but also every human city organized around self-deification, the accumulation of power, and the demand for worship that belongs only to God" },
                  { word: "trugao", meaning: "harvest/reap &mdash; used specifically for harvesting grain or grapes; the eschatological ingathering, either of the redeemed or of those destined for divine judgment" },
                  { word: "lenos", meaning: "winepress &mdash; the great winepress of God&apos;s wrath into which the grape harvest is thrown and trampled; drawing on Isaiah 63:1-6 and Joel 3:13" },
                  { word: "hupomone", meaning: "patient endurance/perseverance &mdash; the active, intentional choice to remain faithful under sustained pressure; the defining virtue called for by Revelation in response to the beast&apos;s demands" },
                ].map(g => (
                  <div key={g.word} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "0.85rem" }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontStyle: "italic", fontSize: "1rem", marginBottom: 4 }}>{g.word}</div>
                    <div style={{ color: MUTED, fontSize: "0.82rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: g.meaning }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>Video Resources</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((item) => (
                  <div key={item.videoId} style={{ background: BG, borderRadius: 12, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "0.85rem 1rem" }}>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: "0.9rem" }}>{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "Key Themes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem", marginBottom: "0.5rem" }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem" }}>Six Major Themes in Revelation 14</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "Revelation 14 is the great counter-proclamation of the Apocalypse. After the beast has established his claim over the earth (chapters 12-13), God answers with the 144,000 bearing the Lamb&apos;s name, the three angels proclaiming the eternal gospel and the fall of Babylon, and the vision of the harvest. Below are the six major themes that structure this chapter, examined in their OT background and first-century context." }}
              />
            </div>

            {KEY_THEMES.map((theme) => (
              <div key={theme.id} style={{ background: CARD, border: `1px solid ${openTheme === theme.id ? theme.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenTheme(openTheme === theme.id ? null : theme.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "1.1rem 1.3rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <span style={{ color: theme.color, fontWeight: 700, fontSize: "0.95rem", paddingRight: "1rem" }}>{theme.title}</span>
                  <span style={{ color: theme.color, fontSize: "1.2rem", flexShrink: 0 }}>{openTheme === theme.id ? "-" : "+"}</span>
                </button>
                {openTheme === theme.id && (
                  <div style={{ padding: "0 1.3rem 1.2rem", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: "1rem 0 0", fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "Verse by Verse" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem", marginBottom: "0.5rem" }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem" }}>Revelation 14:1-20 &mdash; Verse by Verse</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "A detailed walk through all twenty verses of Revelation 14, examining the OT background, first-century context, and theological significance of each section. The chapter divides naturally into three movements: the 144,000 on Mount Zion (vv.1-5), the three angel proclamations and pastoral call (vv.6-13), and the dual harvest of grain and grapes (vv.14-20)." }}
              />
            </div>

            {VERSE_BY_VERSE.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${openVerse === item.id ? TEAL : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenVerse(openVerse === item.id ? null : item.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "1.1rem 1.3rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ background: `${TEAL}20`, border: `1px solid ${TEAL}44`, borderRadius: 8, padding: "2px 10px", fontSize: "0.75rem", color: TEAL, fontWeight: 700, whiteSpace: "nowrap" }}>
                      <VerseRef reference={`Revelation ${item.ref}`}>{item.ref}</VerseRef>
                    </span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: "0.9rem" }}>{item.title}</span>
                  </div>
                  <span style={{ color: TEAL, fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>{openVerse === item.id ? "-" : "+"}</span>
                </button>
                {openVerse === item.id && (
                  <div style={{ padding: "0 1.3rem 1.2rem", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: "1rem 0 0", fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${GOLD}`, padding: "1.5rem", marginTop: "0.5rem" }}>
              <div style={{ color: GOLD, fontWeight: 800, marginBottom: "0.75rem", fontSize: "0.95rem" }}>The Blood of the Winepress &mdash; Revelation 14:20</div>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem", margin: "0 0 1rem", fontStyle: "italic", color: TEXT, lineHeight: 1.8, fontSize: "1rem" }}>
                &ldquo;They were trampled in the winepress outside the city, and blood flowed out of the press, rising as high as the horses&apos; bridles for a distance of 1,600 stadia.&rdquo;
              </blockquote>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.875rem" }}
                dangerouslySetInnerHTML={{ __html: "The 1,600 stadia (approximately 180 miles) is the approximate length of the land of Israel &mdash; or precisely 40 x 40, the number of judgment and testing squared. This is hyperbolic imagery, not a literal prediction. Revelation consistently uses large numbers to communicate totality and completeness. The point is the comprehensive scope of divine judgment on those who have allied themselves with the beast &mdash; the winepress outside the city (outside the New Jerusalem, outside the place of redemption) contains all who refused the Lamb&apos;s name and bore the beast&apos;s mark. The blood rising to the horses&apos; bridles echoes Isaiah 63:1-6 and Ezekiel 38-39&apos;s battle imagery &mdash; the complete military defeat of those arrayed against God&apos;s people." }}
              />
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "Application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem", marginBottom: "0.5rem" }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem" }}>Application: Faithful Witness in Babylon</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "What does faithful witness &mdash; the proclamation of the three angels &mdash; look like for Christians living in &ldquo;Babylon&rdquo;? Revelation 14 gives a multi-layered answer: bearing the Lamb&apos;s name rather than the beast&apos;s mark, proclaiming the eternal gospel to all nations, living in the light of Babylon&apos;s already-accomplished fall, practicing patient endurance, and maintaining eschatological urgency about the harvest that is coming. Below are five areas where the theology of Revelation 14 shapes the daily practice of faithful witness." }}
              />
            </div>

            {APPLICATION.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${openApp === item.id ? item.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenApp(openApp === item.id ? null : item.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "1.1rem 1.3rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <span style={{ color: item.color, fontWeight: 700, fontSize: "0.95rem", paddingRight: "1rem" }}>{item.title}</span>
                  <span style={{ color: item.color, fontSize: "1.2rem", flexShrink: 0 }}>{openApp === item.id ? "-" : "+"}</span>
                </button>
                {openApp === item.id && (
                  <div style={{ padding: "0 1.3rem 1.2rem", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: "1rem 0 0", fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${PURPLE}`, padding: "1.5rem", marginTop: "0.5rem" }}>
              <div style={{ color: PURPLE, fontWeight: 800, marginBottom: "0.75rem" }}>Reflection Questions</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "The 144,000 bear the Lamb&apos;s name and the Father&apos;s name on their foreheads &mdash; not the beast&apos;s mark. What in your daily life functions as a &ldquo;mark&rdquo; that reveals whose you are? Where is the pressure to bear the wrong name strongest?",
                  "The first angel proclaims the eternal gospel as creation theology: &ldquo;Worship him who made the heavens, the earth, the sea.&rdquo; How does recovering the Creator-framework change how you understand evangelism and witness in a culture that has lost the category of Creator?",
                  "The second angel announces Babylon&apos;s fall in the prophetic perfect &mdash; it has already happened from God&apos;s perspective. How does living in the light of Babylon&apos;s already-accomplished fall change your relationship to the systems, institutions, and powers that seem invincible right now?",
                  "The beatitude of verse 13 says that the deeds of those who &ldquo;die in the Lord&rdquo; follow them into eternity. What does it mean for you, practically, that your acts of faithfulness under pressure are not lost but accumulated? How does this change what you are willing to do or to lose?",
                ].map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                    <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", marginRight: 8 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${GOLD}`, padding: "1.5rem", marginTop: "0.5rem" }}>
              <div style={{ color: GOLD, fontWeight: 800, marginBottom: "0.75rem" }}>A Prayer for Faithful Witness</div>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "Lord Jesus, Lamb of God &mdash; I want to stand on Mount Zion bearing your name and the Father&apos;s name, singing the new song that only the redeemed can learn. Give me the courage to refuse the beast&apos;s mark when it is offered, the voice to proclaim the eternal gospel to every nation, tribe, language, and people I encounter, and the wisdom to see that Babylon has already fallen even when she appears at the height of her power. Sustain me in patient endurance, that I might keep your commands and remain faithful to you even when the cost is real. And when I am weary, remind me that the harvest is coming at your appointed time, that my deeds follow me, and that the Lamb who sits on the white cloud with the golden crown has already secured the final verdict. Amen." }}
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
