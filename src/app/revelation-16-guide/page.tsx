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
  { videoId: "WnDVX3kJKoU", title: "Revelation 16 - The Seven Bowls" },
  { videoId: "GjGFi0kIBho", title: "Bowl Judgments in Revelation 16" },
  { videoId: "RdI8YL8Cfmk", title: "Revelation 16 Commentary" },
  { videoId: "h3XiKJjMxiY", title: "It Is Done - Revelation 16 Study" },
];

const KEY_THEMES = [
  {
    id: "th1",
    color: ROSE,
    title: "The Command to Pour Out the Bowls: Divine Justice Unleashed (v. 1)",
    body: "Then I heard a loud voice from the temple saying to the seven angels, &ldquo;Go, pour out the seven bowls of God&apos;s wrath on the earth.&rdquo; The seven bowl judgments are the climactic and final sequence of judgment in Revelation, announced after the preparatory vision of the seven angels holding the seven last plagues (15:1) and the song of Moses and the Lamb (15:3-4). The Greek word for &ldquo;bowl&rdquo; is <em>phiale</em> &mdash; a broad, shallow libation dish used in temple worship. The same bowls used for offering fragrant incense (5:8, the prayers of the saints) are now filled with God&apos;s wrath. This is a profound theological symmetry: the suffering of the saints, their prayers for vindication (6:10), and the holiness of God&apos;s temple converge in this moment. The voice from the temple is God himself commanding the outpouring. Unlike the seals and trumpets, which affected &ldquo;a third&rdquo; of the earth, the bowls are poured without qualification: the full measure of divine judgment now falls. The bowls complete (<em>teleo</em>) God&apos;s wrath (15:1) &mdash; this is the end of the sequence that began at the cross, was previewed in the seals and trumpets, and now reaches its consummation. The Exodus typology is explicit throughout: the bowls deliberately echo the plagues on Egypt (Exodus 7-10), but at a cosmic scale. Egypt&apos;s plagues judged one nation; the bowl judgments fall on the entire earth under the beast&apos;s dominion."
  },
  {
    id: "th2",
    color: PURPLE,
    title: "The First and Second Bowls: Sores and Sea of Blood (vv. 2-3)",
    body: "The first angel poured out his bowl on the land, and ugly, festering sores broke out on the people who had the mark of the beast and worshiped its image. The second angel poured out his bowl on the sea, and it turned into blood like that of a dead person, and every living thing in the sea died. The first bowl targets specifically those who bore the mark of the beast and worshiped its image &mdash; a significant detail. The bowl judgments are not random; they fall precisely on those who have chosen the beast&apos;s system over the Lamb. The Greek word for sores is <em>helkos</em>, the same word used in the Septuagint for the boils of Egypt (Exodus 9:9-11) and for the sores of the rich man in Jesus&apos; parable (Luke 16:21). The festering, ulcerous wounds are both physical judgment and symbolic of the spiritual corruption of those who have aligned themselves with the beast. The second bowl turns the sea to blood. Where the second trumpet turned a third of the sea to blood, the second bowl is total: the entire sea becomes like the blood of a dead person &mdash; congealed, putrid, death-spreading. Every living creature in the sea dies. The Exodus parallel is Exodus 7:20-21, where the Nile turned to blood. But in Revelation the scope is cosmic: the sea that Revelation has used as a symbol of chaos and the origin of the beast (13:1) is now itself judged. The beast who rose from the sea finds that his own domain is turned against him."
  },
  {
    id: "th3",
    color: TEAL,
    title: "The Third Bowl and the Declaration of Divine Justice (vv. 4-7)",
    body: "The third angel poured out his bowl on the rivers and springs of water, and they became blood. Then I heard the angel in charge of the waters say: &ldquo;You are just in these judgments, O Holy One, you who are and who were; for they have shed the blood of your saints and prophets, and you have given them blood to drink as they deserve.&rdquo; And I heard the altar respond: &ldquo;Yes, Lord God Almighty, true and just are your judgments.&rdquo; The third bowl is accompanied by a theological interpretation unlike any previous judgment: an angel who has charge of the waters responds to the outpouring with a declaration of God&apos;s justice. The Greek word <em>dikaios</em> (just/righteous) appears twice in this passage &mdash; once in the angel&apos;s declaration (v.5) and once in the altar&apos;s response (v.7). The principle is <em>lex talionis</em> applied at cosmic scale: those who shed the blood of saints and prophets receive blood to drink. This is not cruel irony but moral symmetry &mdash; the punishment corresponds precisely to the crime. The phrase &ldquo;they deserve it&rdquo; (<em>axios eisin</em>) is a formal statement of just desert, the language of legal verdict. Notice that the voice from the altar joins in the declaration of justice &mdash; the altar under which the martyrs cried for vindication in 6:9-10 now joins the chorus: &ldquo;True and just are your judgments.&rdquo; The martyrs&apos; prayer (&ldquo;How long, Sovereign Lord?&rdquo;) is being answered. The declaration that God is &ldquo;Holy One, you who are and who were&rdquo; is a modified version of the divine name from 1:4 and 4:8, notably omitting &ldquo;who is to come&rdquo; &mdash; because the one who is to come has now arrived in judgment. The future is now."
  },
  {
    id: "th4",
    color: GOLD,
    title: "The Fourth Bowl: Scorching Heat and the Hardness of Heart (vv. 8-9)",
    body: "The fourth angel poured out his bowl on the sun, and the sun was allowed to scorch people with fire. They were seared by the intense heat and they cursed the name of God, who had control over these plagues, and they refused to repent and glorify him. The fourth bowl reverses the fourth trumpet (8:12), which darkened the sun: instead of darkness, the sun blazes with intensified, scorching heat. The Greek word <em>kaumatizo</em> (scorch/burn with heat) suggests a burning so intense it leaves marks. More significant than the physical judgment is the theological diagnosis: &ldquo;they cursed the name of God&rdquo; and &ldquo;they refused to repent.&rdquo; The word &ldquo;cursed&rdquo; is <em>eblasphemesen</em> (blasphemed), the same word used for the beast blaspheming God&apos;s name (13:6). In choosing the beast, they adopted the beast&apos;s posture toward God: blasphemy. The phrase &ldquo;they refused to repent&rdquo; uses the Greek verb <em>metanoeo</em>, which appears in the letters to the seven churches as the primary call of Christ to compromised communities (2:5, 2:16, 3:3, 3:19). In the context of judgment, the refusal to repent is not merely stubbornness but the crystallization of a will that has been hardening against God throughout the entire period of warning represented by the seals and trumpets. This is the doctrine of hardening &mdash; Pharaoh&apos;s pattern from Exodus repeated at cosmic scale: the plagues do not soften the Pharaoh-heart; they calcify it. God is stated explicitly as having &ldquo;control over these plagues&rdquo; (<em>exousia epi tas plegas tautas</em>): the hardened know who is responsible and curse him directly."
  },
  {
    id: "th5",
    color: PURPLE,
    title: "The Fifth Bowl: Darkness and Continued Refusal to Repent (vv. 10-11)",
    body: "The fifth angel poured out his bowl on the throne of the beast, and its kingdom was plunged into darkness. People gnawed their tongues in agony and cursed the God of heaven because of their pains and their sores, but they refused to repent of what they had done. The fifth bowl targets the political and spiritual center of the beast&apos;s power: his throne. The Greek word <em>skotoo</em> (to darken) echoes the ninth plague on Egypt &mdash; a darkness so thick it could be felt (Exodus 10:21). But in Revelation, the darkness falls on the beast&apos;s kingdom specifically. The throne of the beast, which the dragon gave him (13:2), which the whole world marveled at (13:3), is now plunged into darkness. The power that seemed invincible and absolute is now engulfed. The physical response &mdash; gnawing tongues in agony &mdash; suggests suffering so intense that instinctive self-directed pain is the body&apos;s response. The sores of the first bowl (v.2) are still present; the cumulative physical suffering is overwhelming. Yet the theological response is unchanged: cursing the God of heaven, refusing to repent. The repetition of &ldquo;refused to repent&rdquo; after the fourth and fifth bowls is deliberate and devastating. It is not that these people lack information; they know who is sending the plagues. It is not that the judgments are too severe; they have sufficient cause to turn. The refusal to repent is the revealed state of a will that has been given what it has chosen: a world without God, and all the consequences that follow. The beast&apos;s kingdom is in darkness, and its citizens prefer the darkness to the light because their deeds are evil (John 3:19)."
  },
  {
    id: "th6",
    color: TEAL,
    title: "The Sixth Bowl: The Euphrates, Three Spirits, and Armageddon (vv. 12-16)",
    body: "The sixth angel poured out his bowl on the great river Euphrates, and its water was dried up to prepare the way for the kings from the East. Then I saw three impure spirits that looked like frogs; they came out of the mouth of the dragon, out of the mouth of the beast and out of the mouth of the false prophet. They are demonic spirits that perform signs, and they go out to the kings of the whole world, to gather them for the battle on the great day of God Almighty. &ldquo;Look, I come like a thief! Blessed is the one who stays awake and remains clothed, so as not to go naked and be shamefully exposed.&rdquo; Then they gathered the kings together to the place that in Hebrew is called Armageddon. The sixth bowl dries up the Euphrates, the great boundary river of the ancient world, echoing Cyrus&apos;s conquest of Babylon in 539 BC, when the Persians diverted the Euphrates to enter the city. The &ldquo;kings from the East&rdquo; are a deliberate historical echo: the Parthians, Rome&apos;s feared eastern enemies, were the first-century embodiment of the threat from beyond the Euphrates. In Revelation&apos;s symbolic world, the drying of the Euphrates prepares for the final gathering of all powers against God. The three frog-like spirits emerge from the unholy trinity &mdash; dragon, beast, false prophet &mdash; mirroring the frogs of the Egyptian plague (Exodus 8:1-7). They perform signs (<em>semeia</em>) to deceive the kings of the whole world. The gathering point is called in Hebrew <em>Har Megiddon</em> (Armageddon) &mdash; the mountain of Megiddo, site of decisive battles in OT history (Judges 5:19; 2 Kings 23:29). Most scholars read this not as a literal geography but as a symbolic site for the definitive confrontation between the kingdom of God and the kingdoms of this world. Inserted into the bowl sequence is a beatitude from Christ himself: &ldquo;Blessed is the one who stays awake and remains clothed&rdquo; &mdash; the fifth of Revelation&apos;s seven beatitudes (1:3; 14:13; 16:15; 19:9; 20:6; 22:7; 22:14). The call to watchfulness echoes the Synoptic warnings about readiness for the Son of Man (Matthew 24:43, Luke 12:39). The intrusion of this beatitude in the middle of the judgment sequence is characteristic of Revelation&apos;s pastoral voice: even within the most severe judgment sequences, the call to faithful watchfulness is not forgotten."
  },
  {
    id: "th7",
    color: GOLD,
    title: "The Seventh Bowl: &ldquo;It Is Done&rdquo; &mdash; The Great Earthquake (vv. 17-21)",
    body: "The seventh angel poured out his bowl into the air, and out of the temple came a loud voice from the throne, saying, &ldquo;It is done!&rdquo; Then there came flashes of lightning, rumblings, peals of thunder and a severe earthquake. No earthquake like it has ever occurred since mankind has been on earth, so tremendous was the quake. The great city split into three parts, and the cities of the nations collapsed. God remembered Babylon the Great and gave her the cup filled with the wine of the fury of his wrath. Every island fled away and the mountains could not be found. From the sky huge hailstones, each weighing about a hundred pounds, fell on people. And they cursed God on account of the plague of hail, because the plague was so terrible. The seventh bowl is poured into the air &mdash; the domain of the spiritual powers (cf. Ephesians 2:2, &ldquo;the prince of the power of the air&rdquo;). The entire domain of Satanic influence receives the final bowl. The divine declaration &ldquo;It is done!&rdquo; is the Greek <em>Gegonen</em> (literally &ldquo;it has come to be,&rdquo; a perfect tense of <em>ginomai</em>) &mdash; a single word of completion. This is the completion of the judgment that began with the first seal; the sealing off of the age of warning. John hears this same word-form again at 21:6 from the one on the throne: &ldquo;It is done&rdquo; &mdash; there applied to the new creation. Judgment complete; new creation complete. The earthquake surpasses all previous earthquakes: no earthquake like it since humanity was on earth. Every island fled away and the mountains could not be found &mdash; the complete dissolution of the stable geography of the present age, echoing the cosmic unraveling of the sixth seal (6:14). The splitting of &ldquo;the great city&rdquo; into three parts is debated: the great city is used throughout Revelation for both Jerusalem (11:8) and Rome/Babylon (17:18), suggesting that the judgment falls on all centers of human rebellion. The one hundred-pound hailstones (literally &ldquo;a talent&rdquo; in weight &mdash; roughly 75-100 pounds) echo the hail of the seventh Egyptian plague (Exodus 9:18-26) but at cosmic scale. The final detail is theologically devastating: even this ultimate judgment produces only cursing, not repentance. The people &ldquo;cursed God on account of the plague of hail.&rdquo; The hardened heart, confronted with the ultimate divine judgment, responds with ultimate human defiance. Revelation does not teach that judgment automatically produces repentance; it teaches that those who have hardened their wills against God persist in that hardening even under the most overwhelming divine judgment."
  },
];

const VERSE_BY_VERSE = [
  {
    id: "vv1",
    ref: "16:1",
    title: "Verse 1: The Command from the Temple",
    body: "Then I heard a loud voice from the temple saying to the seven angels, &ldquo;Go, pour out the seven bowls of God&apos;s wrath on the earth.&rdquo; The voice that issues the command comes from the heavenly temple, from within the presence of God himself. This command follows directly from the preparatory vision of 15:5-8, where the seven angels received their bowls of wrath and the temple was filled with smoke from the glory of God so that no one could enter until the seven plagues were completed. The completeness of the bowl sequence is signaled from the beginning: these are the &ldquo;last plagues&rdquo; (15:1). The Greek word <em>phiale</em> (bowl) was used in temple ritual for pouring libations. In 5:8 and 8:3-4, the incense offered in golden bowls was specifically identified with the prayers of the saints. The same vessels that held the prayers of God&apos;s suffering people now carry the answer: divine wrath on their oppressors. The loud voice (<em>phone megale</em>) signals divine authority and cosmic significance. Throughout Revelation, loud voices announce moments of decisive divine action (6:10; 7:2; 10:3; 14:7; 16:1; 19:1). The command is simple, direct, and total: &ldquo;Pour out&rdquo; (<em>ekcheete</em> &mdash; aorist imperative, a single decisive action). No conditions, no hesitation, no further warning. The time for warning has passed; the time for completion has come."
  },
  {
    id: "vv2",
    ref: "16:2",
    title: "Verse 2: The First Bowl &mdash; Painful Sores",
    body: "The first angel went and poured out his bowl on the land, and ugly, festering sores broke out on the people who had the mark of the beast and worshiped its image. The first bowl parallels the sixth Egyptian plague (Exodus 9:9-11: boils on people and animals) but with a crucial distinction: the sores target specifically those with the mark of the beast. The Greek <em>helkos</em> (sore/ulcer/wound) is a medical term for a festering wound that will not heal. The adjective translated &ldquo;ugly&rdquo; (<em>kakos</em>) means evil, bad, malignant; the second adjective &ldquo;festering&rdquo; (<em>poneros</em>) means painful, wicked, actively harmful. This is not a minor affliction; it is a severe, agonizing, persistent wound. The targeting of those with the mark of the beast is theologically significant. Throughout chapters 13-16, the mark of the beast has been the symbol of economic and political alignment with the beast&apos;s system, the visible sign of choosing the beast over the Lamb. The first bowl reveals that the apparent safety of the mark was illusory: those who accepted the mark to avoid the economic exclusion decreed in 13:16-17 find that the mark brings its own suffering. Revelation&apos;s consistent argument is this: the beast cannot protect his own. He can threaten, coerce, and temporarily reward, but he cannot shield his worshipers from the consequences of having chosen a dying kingdom."
  },
  {
    id: "vv3",
    ref: "16:3",
    title: "Verse 3: The Second Bowl &mdash; Sea Becomes Blood",
    body: "The second angel poured out his bowl on the sea, and it turned into blood like that of a dead person, and every living thing in the sea died. The second bowl escalates from the second trumpet (8:8-9), where a third of the sea became blood and a third of sea creatures died. Here the qualifier &ldquo;a third&rdquo; is absent: the entire sea is affected. The comparison is precise and grim: not merely blood, but &ldquo;blood like that of a dead person&rdquo; (<em>hos nekrou</em>). The blood of a dead person is congealed, putrid, and corrupted &mdash; not the fresh blood of a living wound but the thick, dark, clotted blood of a corpse. The sea becomes a vast ocean of death-corrupted blood. Every living creature in the sea (<em>pasa psyche zoes</em>, literally &ldquo;every soul of life&rdquo;) dies. The sea in Revelation carries multiple symbolic valences: it is the origin of the beast (13:1), the symbol of primordial chaos (4:6 has the sea of glass before the throne as its ordered counterpart), and the great divide between nations. The comprehensive death of all sea life is both literal judgment and symbolic: the realm from which the beast emerged is brought to death. The word <em>nekros</em> (dead) reappears throughout this verse &mdash; the sea that gave the beast his power is now itself dead. The domain of the beast becomes the emblem of his powerlessness."
  },
  {
    id: "vv4-7",
    ref: "16:4-7",
    title: "Verses 4-7: The Third Bowl &mdash; Rivers to Blood and God&apos;s Justice Declared",
    body: "The third angel poured out his bowl on the rivers and springs of water, and they became blood. Then I heard the angel in charge of the waters say: &ldquo;You are just in these judgments, O Holy One, you who are and who were; for they have shed the blood of your saints and prophets, and you have given them blood to drink as they deserve.&rdquo; And I heard the altar respond: &ldquo;Yes, Lord God Almighty, true and just are your judgments.&rdquo; The third bowl completes the contamination of earth&apos;s water supply: sea (v.3), rivers and springs (v.4). Fresh water, the prerequisite of human life, becomes blood. The Egyptian parallel is the first plague (Exodus 7:17-21), where the Nile and all water sources in Egypt became blood. In the Exodus narrative, this was a direct challenge to the Egyptian god Khnum, the guardian of the Nile source. In Revelation, the fresh waters of the whole earth fall under divine judgment. The accompanying declaration from the angel over the waters is one of Revelation&apos;s most significant theological statements. The Greek <em>dikaios ei</em> (you are just/righteous) introduces a formal statement of vindication: God is justified in these judgments. The standard of justice is explicitly stated: &ldquo;They have shed the blood of your saints and prophets, and you have given them blood to drink as they deserve.&rdquo; The principle is moral correspondence: those who made martyrs drink their blood in death receive blood to drink in judgment. The altar&apos;s response (&ldquo;Yes, Lord God Almighty, true and just are your judgments&rdquo;) closes the doxological frame. The altar is where the martyrs&apos; blood was received (6:9) and where their prayers for vindication arose. The altar&apos;s affirmation means: the martyrs&apos; prayers have been heard and answered. True and just: <em>alethinos kai dikaios</em> &mdash; two of the most fundamental attributes of the biblical God, here affirmed in the context of judgment."
  },
  {
    id: "vv8-9",
    ref: "16:8-9",
    title: "Verses 8-9: The Fourth Bowl &mdash; Scorching Heat and Refusal to Repent",
    body: "The fourth angel poured out his bowl on the sun, and the sun was allowed to scorch people with fire. They were seared by the intense heat and they cursed the name of God, who had control over these plagues, and they refused to repent and glorify him. The fourth bowl reverses the expected pattern of Exodus-style plagues: instead of the darkness of the ninth plague, the sun is intensified to produce scorching fire. The Greek phrase <em>kaumatisai tous anthropous</em> (to scorch people) uses a word related to the scorching heat that destroyed the seed in the parable of the sower (Matthew 13:6, Mark 4:6). The passive voice &ldquo;the sun was allowed&rdquo; (<em>edothe auto kaumatisai</em>) is a divine passive: God permits, which is to say God ordains. The sun, a created thing given its power by God, is here deployed as an instrument of divine judgment. The response is twofold and devastating. First, they cursed the name of God: <em>eblasphemesen to onoma tou theou</em>. To blaspheme the name is to declare that name worthless, to deny its authority, to repudiate the one who bears it. This is the posture of the beast applied to his worshipers: they have learned from the beast how to relate to God. Second, they refused to repent and glorify him: the double refusal. To glorify God (<em>doxasai auton</em>) was precisely what the first angel called all nations to do (14:7). Here, confronted with undeniable divine power, they refuse the most basic response the eternal gospel requires. The hardening of Pharaoh is complete and total."
  },
  {
    id: "vv10-11",
    ref: "16:10-11",
    title: "Verses 10-11: The Fifth Bowl &mdash; Darkness over the Beast&apos;s Throne",
    body: "The fifth angel poured out his bowl on the throne of the beast, and its kingdom was plunged into darkness. People gnawed their tongues in agony and cursed the God of heaven because of their pains and their sores, but they refused to repent of what they had done. The fifth bowl is targeted: not the earth in general but specifically the throne of the beast. The Greek <em>ton thronon tou theriou</em> (the throne of the beast) is the seat of power that the dragon gave the beast (13:2) and that the whole world marveled at (13:3). The fifth bowl strikes at the center of the beast&apos;s authority. The darkness (<em>eskotomene</em>, perfect passive participle of <em>skotoo</em>) is complete and ongoing &mdash; a thick, settled darkness that echoes the ninth Egyptian plague (Exodus 10:21-23). In Egypt&apos;s ninth plague, the darkness could be felt; here the darkness produces physical agony expressed as gnawing one&apos;s tongue. The detail that the sores from the first bowl (<em>helkos</em>) are still present is significant: the bowls are cumulative, not sequential episodes. Those under the fifth bowl are simultaneously suffering from sores (bowl 1), the loss of all sea life (bowl 2), drinking blood instead of fresh water (bowl 3), the memory of scorching heat (bowl 4), and now darkness over their political protector&apos;s throne. The accumulated suffering is total. Yet the response is unchanged: &ldquo;cursed the God of heaven because of their pains and their sores, but they refused to repent of what they had done.&rdquo; The addition of &ldquo;what they had done&rdquo; (<em>ek ton ergon auton</em>) is the most explicit statement in the bowl sequence of moral responsibility. They are not cursing God over accidents of nature; they are under judgment for specific deeds &mdash; worshiping the beast, taking the mark, shedding the blood of saints. And knowing this, they still refuse to repent."
  },
  {
    id: "vv12-16",
    ref: "16:12-16",
    title: "Verses 12-16: The Sixth Bowl &mdash; Armageddon and the Blessed Watchful",
    body: "The sixth angel poured out his bowl on the great river Euphrates, and its water was dried up to prepare the way for the kings from the East. Then I saw three impure spirits that looked like frogs; they came out of the mouth of the dragon, out of the mouth of the beast and out of the mouth of the false prophet. They are demonic spirits that perform signs, and they go out to the kings of the whole world, to gather them for the battle on the great day of God Almighty. &ldquo;Look, I come like a thief! Blessed is the one who stays awake and remains clothed, so as not to go naked and be shamefully exposed.&rdquo; Then they gathered the kings together to the place that in Hebrew is called Armageddon. The Euphrates was the great boundary of the ancient world &mdash; the eastern limit of the Roman Empire and the river associated with Babylon from Genesis 2:14 onward. Its drying echoes Cyrus&apos;s entry into historical Babylon in 539 BC by diverting the river. The &ldquo;kings from the East&rdquo; allude to the feared Parthian threat to Rome. The drying prepares the way for the final gathering of all nations against God. The three frog spirits are a satanic counterfeit of the Holy Spirit who proceeds from the Father and the Son: these unholy spirits proceed from the dragon, beast, and false prophet &mdash; the unholy trinity. Frogs evoke the Egyptian second plague (Exodus 8:1-7) &mdash; an unclean animal by Jewish law (Leviticus 11:10) associated with deception and uncleanliness. They perform <em>semeia</em> (signs) &mdash; miraculous signs that validate the beast&apos;s counterfeit claims to divine authority. Their mission is to gather the kings of the whole earth for the &ldquo;battle of the great day of God Almighty&rdquo; (<em>polemon tes hemeras tes megales tou theou tou pantokratoros</em>). The Greek <em>harmagedon</em> derives from the Hebrew <em>har megiddon</em> (Mount Megiddo), associated with decisive OT battles (Judges 4-5; 2 Kings 23:29-30). In Revelation&apos;s symbolic register it represents the definitive eschatological confrontation. The beatitude of verse 15 &mdash; Christ&apos;s voice breaking into the judgment sequence &mdash; is the pastoral center: stay awake, remain clothed (in righteousness, cf. 19:8), lest you be caught unprepared and shamed. The Parousia comes as a thief; those who are watching will not be caught naked."
  },
  {
    id: "vv17-21",
    ref: "16:17-21",
    title: "Verses 17-21: The Seventh Bowl &mdash; &ldquo;It Is Done&rdquo; and the Final Earthquake",
    body: "The seventh angel poured out his bowl into the air, and out of the temple came a loud voice from the throne, saying, &ldquo;It is done!&rdquo; Then there came flashes of lightning, rumblings, peals of thunder and a severe earthquake. No earthquake like it has ever occurred since mankind has been on earth, so tremendous was the quake. The great city split into three parts, and the cities of the nations collapsed. God remembered Babylon the Great and gave her the cup filled with the wine of the fury of his wrath. Every island fled away and the mountains could not be found. From the sky huge hailstones, each weighing about a hundred pounds, fell on people. And they cursed God on account of the plague of hail, because the plague was so terrible. The seventh bowl is poured into the air (<em>ton aera</em>), the domain that Paul calls the sphere of Satanic spiritual authority (Ephesians 2:2: &ldquo;the prince of the power of the air&rdquo;). The entire domain of evil receives the final bowl. The divine declaration <em>Gegonen</em> (&ldquo;It is done,&rdquo; perfect tense of <em>ginomai</em> &mdash; &ldquo;it has come to be&rdquo;) is the single-word announcement of completion. It will echo at 21:6, where the same form announces the completion of the new creation. John heard Jesus say <em>tetelestai</em> at the cross (John 19:30); now he hears <em>Gegonen</em> at the close of history&apos;s judgment sequence. The phenomena that follow &mdash; lightning, thunder, earthquake &mdash; are the standard theophanic accompaniments to divine presence and judgment throughout Revelation (4:5; 8:5; 11:19). But this earthquake exceeds all precedents: <em>seismos megas hoios ouk egeneto</em> (a great earthquake such as has not been). The dissolution of the stable geography of the age &mdash; islands fleeing, mountains disappearing &mdash; fulfills the cosmological unraveling first threatened at the sixth seal (6:14). &ldquo;God remembered Babylon the Great&rdquo;: the phrase &ldquo;God remembered&rdquo; (<em>emnesthE</em>) is covenantal language, used in the OT for God&apos;s remembering his covenant with Israel for blessing (Genesis 8:1; Exodus 2:24). Here it is used for divine remembering that issues in judgment: Babylon&apos;s sins, which she has accumulated like a great pile before God (cf. 18:5, &ldquo;her sins are piled up to heaven&rdquo;), have not been forgotten. The cup she gave the nations to drink (14:8) she now receives in full from God. The 75-100 pound hailstones (<em>talantiaiai</em> &mdash; talent-weight) exceed the hail of the seventh Egyptian plague. Even this final, overwhelming judgment produces only cursing, not repentance: <em>eblasphemeson ton theon</em>. The chapter ends not with the turning of the nations but with the final revelation of the human heart under judgment: those who have hardened themselves against God will not be softened even by the greatest cataclysm in human history."
  },
];

const APPLICATION = [
  {
    id: "ap1",
    color: ROSE,
    title: "What the Repeated Refusal to Repent Reveals About the Human Heart",
    body: "Revelation 16 contains one of the most searching diagnoses of human nature in all of Scripture. Three times the text notes that those under judgment &ldquo;refused to repent&rdquo; (vv. 9, 11) or &ldquo;cursed God&rdquo; (vv. 9, 11, 21). This is not the response of people who lacked information; they knew God was sending the plagues (v. 9). This is not the response of people who were unaware of the connection between their deeds and their suffering; v. 11 explicitly says they cursed God &ldquo;because of their pains and their sores.&rdquo; The refusal to repent under the most overwhelming divine judgments in history reveals the radical bondage of the will when it has been given over to idolatry. Paul diagnoses the same condition in Romans 1: those who exchange the truth of God for a lie and worship the creature rather than the Creator are given over by God to their own desires (Romans 1:24-25). The giving-over is not abandonment but the removal of restraint: the person who has chosen idolatry is allowed to experience the logical consequences of that choice. Revelation 16 is the ultimate working out of Romans 1. The pastoral implication is sobering: the human heart, apart from the grace of God, is not waiting to be persuaded by sufficient evidence. The prodigal son came to himself (Luke 15:17) not because the pigsty provided sufficient proof but because grace opened his eyes. Repentance is a gift (Acts 5:31; 11:18), not an inference. The appropriate response to Revelation 16 is not fear that we might be beyond repentance, but gratitude that repentance &mdash; the very thing these people refused &mdash; has been granted to us."
  },
  {
    id: "ap2",
    color: TEAL,
    title: "Confidence in God&apos;s Justice and Freedom from Bitterness",
    body: "The declaration of the angel over the waters in verses 5-7 is one of Scripture&apos;s clearest statements of divine justice as the foundation for human peace. &ldquo;You are just in these judgments, O Holy One...true and just are your judgments.&rdquo; This declaration is made specifically in the context of the judgment on those who shed the blood of saints and prophets. The martyrs whose prayers rose from the altar in 6:9-10 (&ldquo;How long, Sovereign Lord, holy and true, until you judge the inhabitants of the earth and avenge our blood?&rdquo;) receive their answer in 16:5-7. The conviction that God&apos;s justice is real and will be executed completely is the foundation on which Christians are freed from personal bitterness and the desire for private revenge. Paul grounds the prohibition of personal vengeance on exactly this principle: &ldquo;Do not take revenge, my dear friends, but leave room for God&apos;s wrath, for it is written: &lsquo;It is mine to avenge; I will repay,&rsquo; says the Lord&rdquo; (Romans 12:19). We can forgive, release grievances, and refuse to nurture bitterness not because injustice does not matter but because God&apos;s justice is more certain and more complete than any human retaliation could be. The Christian who grasps Revelation 16&apos;s theology of divine justice finds that she can absorb injustice from others without being consumed by it: the account will be settled, the blood of the saints has not been forgotten, and God&apos;s judgment &mdash; unlike human vengeance &mdash; is always perfectly calibrated to the sin. This is not vindictiveness disguised as theology; it is the honest recognition that the universe is not morally random, that deeds have consequences, and that God himself will ensure the ultimate correspondence of judgment to crime."
  },
  {
    id: "ap3",
    color: PURPLE,
    title: "The Sovereignty of God Over History&apos;s Worst Moments",
    body: "One of the most repeated phrases across the bowl sequence is the assertion of divine control. In verse 9, those who are scorched &ldquo;knew that God had control over these plagues&rdquo; (<em>exousia epi tas plegas tautas</em>). In verse 1, the voice from the temple commands the outpouring. In verse 8, the sun &ldquo;was allowed&rdquo; (divine passive: God allows) to scorch. Throughout the bowl sequence, there is never any question about who is directing events. This is a remarkable theological claim: the most terrible moments in history unfold within God&apos;s sovereign intention, not outside it. For the persecuted communities John addressed, this was not theoretical. They were living under the full weight of Roman imperial power, which felt total and final. The bowl sequence asserts: even the worst the beast can do is bounded by what God permits, and even the worst God unleashes is aimed at purposes his justice defines. For Christians in any age living through historical catastrophe, Revelation 16 offers neither a simple explanation nor easy comfort, but it offers something more fundamental: a coherent account of why history is not chaos. The plagues are poured out in sequence, by command, at the right time, with moral rationale. History is not an accident; it is being completed. The one who said &ldquo;It is done&rdquo; at the end of the bowl sequence is the same one who said &ldquo;It is finished&rdquo; at the cross. The God who completed redemption will complete judgment."
  },
  {
    id: "ap4",
    color: GREEN,
    title: "The Call to Watchfulness: Living Between the Sixth and Seventh Bowls",
    body: "In the middle of the sixth bowl &mdash; between the gathering of the kings for Armageddon and the seventh bowl&apos;s &ldquo;It is done&rdquo; &mdash; Christ&apos;s own voice breaks into the narrative: &ldquo;Look, I come like a thief! Blessed is the one who stays awake and remains clothed, so as not to go naked and be shamefully exposed&rdquo; (v. 15). This pastoral intrusion is one of Revelation&apos;s most significant structural choices. The judgment sequence is interrupted not by an explanation or a prediction but by a call. The call is to watchfulness (<em>gregoron</em> &mdash; staying awake, being alert) and to remaining clothed (in righteousness, the white robes of 3:4-5 and the fine linen of 19:8). The shame of nakedness (<em>aschemosynen</em>) was a real risk for those whose wealth and social standing depended on alignment with the beast&apos;s system: to lose the mark meant social and economic nakedness. The beatitude inverts this: to keep the Lamb&apos;s clothing &mdash; righteousness, faithfulness, the testimony of Jesus &mdash; is to be clothed; to choose the beast&apos;s economic protection is to be truly naked before God. We live, in every generation, in the space between the sixth and seventh bowl: the gathering for the final conflict has begun, the beast&apos;s systems of coercion are fully operational, and the final &ldquo;It is done&rdquo; has not yet been spoken. In that space, the pastoral word is the same: stay awake, stay clothed, do not be seduced by the beast&apos;s offer of safety. The one who comes like a thief comes for those who are watching and clothed, not for those absorbed in the beast&apos;s distractions."
  },
  {
    id: "ap5",
    color: GOLD,
    title: "The Finality of Judgment and the Urgency of the Gospel",
    body: "The seventh bowl and its declaration &ldquo;It is done&rdquo; (<em>Gegonen</em>) establishes the absolute finality of divine judgment. There is no further warning after the seventh bowl; there is no additional chance after the last earthquake. The cities of the nations collapse; every island flees; the mountains vanish. This is not metaphor for gradual decline; it is the dissolution of the present order of things. For the church, this finality is both sobering and galvanizing. Sobering: the refusal to repent that characterizes the bowl sequence is the natural trajectory of the unrepentant heart, and the window in which repentance is possible is not infinite. The angel&apos;s first proclamation in 14:6-7 went to every nation, tribe, language, and people; the eternal gospel was proclaimed universally. The bowl judgments fall on those who heard and refused. The urgency of the gospel is therefore real: not because God&apos;s patience has a mechanical limit, but because the human heart&apos;s capacity for hardening is real and the window of God&apos;s patient forbearance is given precisely to enable repentance (2 Peter 3:9). Galvanizing: because the finality of judgment is certain, the present work of the church matters with ultimate weight. Every person who turns from the beast&apos;s mark to the Lamb&apos;s name, every act of patient endurance under pressure, every proclamation of the eternal gospel in Babylon&apos;s shadow &mdash; these are deeds that follow the believer through death and into the new creation (14:13). The same word that closes history&apos;s judgment sequence (&ldquo;It is done&rdquo;) opens the new creation sequence (21:6). Between those two pronouncements is the space we inhabit, and in that space, the church proclaims the gospel of the Lamb who was slain and who lives."
  },
];

export default function Revelation16GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <Navbar />
      <main id="main-content" style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>

        {/* Hero */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-block",
              background: `${ROSE}20`,
              border: `1px solid ${ROSE}44`,
              borderRadius: 20,
              padding: "4px 14px",
              fontSize: 12,
              color: ROSE,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: 14,
            }}
          >
            Revelation &mdash; Chapter 16
          </div>
          <h1
            style={{
              fontSize: "clamp(1.5rem,4vw,2.3rem)",
              fontWeight: 900,
              color: TEXT,
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            Revelation 16: The Seven Bowls and the Call to Faithful Endurance
          </h1>
          <p
            style={{ color: MUTED, lineHeight: 1.75, maxWidth: 700, fontSize: "1rem" }}
            dangerouslySetInnerHTML={{
              __html:
                "Revelation 16 is the climactic judgment chapter of the Apocalypse. The seven bowl judgments complete the sequence of divine wrath that began with the seals and trumpets, now poured out in full measure on those who bear the mark of the beast. Three defining features mark this chapter: the explicit declaration of God&apos;s justice by the angels (vv. 5-7), the repeated and devastating diagnosis that those under judgment &ldquo;refused to repent&rdquo; (vv. 9, 11, 21), and the pastoral intrusion of Christ&apos;s own voice calling his people to watchful endurance (v. 15). The chapter closes with the cosmic earthquake that brings down the cities of the nations, the flight of every island and mountain, and the single divine declaration: &ldquo;It is done.&rdquo;",
            }}
          />
        </div>

        {/* At-a-glance cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: "0.75rem",
            marginBottom: "2rem",
          }}
        >
          {[
            ["Book", "Revelation"],
            ["Chapter", "16"],
            ["Verses", "1-21"],
            ["Key Theme", "Seven Bowl Judgments"],
            ["Key Verse", "Rev 16:17"],
            ["Greek Focus", "metanoeo (repent)"],
          ].map(([k, v]) => (
            <div
              key={k}
              style={{
                background: CARD,
                borderRadius: 10,
                border: `1px solid ${BORDER}`,
                padding: "0.85rem 1rem",
              }}
            >
              <div
                style={{
                  color: MUTED,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 4,
                }}
              >
                {k}
              </div>
              <div style={{ color: TEXT, fontWeight: 700, fontSize: "0.95rem" }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Chapter Context */}
        <div
          style={{
            background: CARD,
            borderRadius: 14,
            border: `1px solid ${BORDER}`,
            padding: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              color: PURPLE,
              fontWeight: 800,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              marginBottom: "0.75rem",
            }}
          >
            Chapter Context
          </div>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
            dangerouslySetInnerHTML={{
              __html:
                "Revelation 16 stands at the end of the book&apos;s second great judgment sequence (chapters 15-16). After the heavenly temple was opened in chapter 15 and the seven angels received their bowls while the temple was filled with divine glory and smoke, chapter 16 records the pouring out of all seven bowls in rapid succession. The bowls deliberately echo the Egyptian plagues of Exodus 7-10 but at cosmic scale: where the plagues targeted one nation, the bowls fall on the entire earth under the beast&apos;s dominion. Key Greek words in this chapter: <em>phiale</em> (bowl/libation dish), <em>helkos</em> (sore/ulcer), <em>skotoo</em> (to darken), <em>metanoeo</em> (repent &mdash; conspicuously refused), <em>ginomai</em> / <em>Gegonen</em> (it has come to be / it is done), <em>harmagedon</em> (Armageddon / har megiddon), and <em>dikaios</em> (just/righteous). The theological spine of the chapter is the repeated diagnosis of hardened hearts refusing repentance and the declaration that God&apos;s judgments are just and true.",
            }}
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
                border: `1px solid ${activeTab === t ? ROSE : BORDER}`,
                background: activeTab === t ? `${ROSE}22` : "transparent",
                color: activeTab === t ? ROSE : MUTED,
                fontWeight: activeTab === t ? 700 : 500,
                cursor: "pointer",
                fontSize: "0.875rem",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ===================== OVERVIEW TAB ===================== */}
        {activeTab === "Overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div
              style={{
                background: CARD,
                borderRadius: 14,
                border: `1px solid ${BORDER}`,
                padding: "1.75rem",
              }}
            >
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: "1.25rem", marginBottom: "1rem" }}>
                Structure of Revelation 16
              </h2>
              <p
                style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Revelation 16 divides into seven bowl episodes plus an overarching structure of intensification and response. The first three bowls (land, sea, rivers) echo the first three Egyptian plagues (Exodus 7-8) but at global scale. The fourth and fifth bowls produce human response: cursing and refusal to repent. The sixth bowl is the longest, introducing the gathering of kings at Armageddon and the pivotal beatitude of verse 15. The seventh bowl is accompanied by the divine declaration of completion and the final cosmic dissolution.",
                }}
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                  gap: "1rem",
                }}
              >
                {[
                  {
                    color: ROSE,
                    label: "Bowls 1-3 (vv. 1-7)",
                    role: "Land, Sea, and Rivers",
                    desc: "Three bowls strike the physical order: festering sores on those with the beast&apos;s mark, sea turned to blood, rivers and springs turned to blood. Accompanied by the declaration of divine justice.",
                  },
                  {
                    color: GOLD,
                    label: "Bowls 4-5 (vv. 8-11)",
                    role: "Heat, Darkness, and Hardening",
                    desc: "Scorching sun and darkness over the beast&apos;s throne. Each bowl produces the same response: blasphemy of God and refusal to repent. The pattern of Pharaoh&apos;s hardening is revealed at cosmic scale.",
                  },
                  {
                    color: TEAL,
                    label: "Bowl 6 (vv. 12-16)",
                    role: "Euphrates and Armageddon",
                    desc: "The Euphrates is dried up; three frog spirits from the unholy trinity gather the kings of the world for the great battle. Christ&apos;s beatitude calls his people to watchfulness and remaining clothed in righteousness.",
                  },
                  {
                    color: PURPLE,
                    label: "Bowl 7 (vv. 17-21)",
                    role: "&ldquo;It Is Done&rdquo;",
                    desc: "Poured into the air, the final bowl brings the greatest earthquake in human history, the fall of the great city, the dissolution of islands and mountains, and catastrophic hail. The word of completion: <em>Gegonen</em>.",
                  },
                ].map((c) => (
                  <div
                    key={c.label}
                    style={{
                      background: BG,
                      borderRadius: 10,
                      border: `1px solid ${BORDER}`,
                      padding: "1rem",
                    }}
                  >
                    <div
                      style={{
                        color: c.color,
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: 4,
                      }}
                    >
                      {c.role}
                    </div>
                    <div style={{ color: TEXT, fontWeight: 700, marginBottom: 6 }}>{c.label}</div>
                    <div
                      style={{ color: MUTED, fontSize: "0.82rem", lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: c.desc }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: CARD,
                borderRadius: 14,
                border: `1px solid ${BORDER}`,
                padding: "1.75rem",
              }}
            >
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>
                The Seven Bowls at a Glance
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  {
                    label: "Bowl 1 (v. 2)",
                    color: ROSE,
                    meaning:
                      "Poured on the land: ugly, festering sores on those with the mark of the beast. Parallel: Exodus 9:9-11 (sixth plague, boils). Target: worshipers of the beast specifically.",
                  },
                  {
                    label: "Bowl 2 (v. 3)",
                    color: PURPLE,
                    meaning:
                      "Poured on the sea: turned to blood like a dead man&apos;s, every sea creature dies. Parallel: Exodus 7:17-21 (first plague). Total, not partial (contrast: second trumpet, one-third).",
                  },
                  {
                    label: "Bowl 3 (vv. 4-7)",
                    color: TEAL,
                    meaning:
                      "Poured on rivers and springs: blood. Accompanied by declaration: &ldquo;Just are you in these judgments&rdquo; &mdash; divine justice affirmed by the angel of the waters and the altar.",
                  },
                  {
                    label: "Bowl 4 (vv. 8-9)",
                    color: GOLD,
                    meaning:
                      "Poured on the sun: scorching heat. Response: cursed God, refused to repent. First explicit statement of human hardening under judgment.",
                  },
                  {
                    label: "Bowl 5 (vv. 10-11)",
                    color: ROSE,
                    meaning:
                      "Poured on the throne of the beast: darkness over the beast&apos;s kingdom. Response: gnawed tongues, cursed God, refused to repent. The sores of bowl 1 are still present (cumulative).",
                  },
                  {
                    label: "Bowl 6 (vv. 12-16)",
                    color: PURPLE,
                    meaning:
                      "Poured on the Euphrates: dried up for the kings of the east. Three frog spirits gather the world&apos;s kings to Armageddon. Beatitude of v. 15: &ldquo;Blessed is the one who stays awake and remains clothed.&rdquo;",
                  },
                  {
                    label: "Bowl 7 (vv. 17-21)",
                    color: TEAL,
                    meaning:
                      "Poured into the air: &ldquo;It is done!&rdquo; Greatest earthquake in history, fall of the great city, islands flee, mountains vanish, 100-lb hailstones. Final response: still cursed God.",
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
                  >
                    <span
                      style={{
                        background: `${s.color}20`,
                        border: `1px solid ${s.color}44`,
                        borderRadius: 8,
                        padding: "2px 10px",
                        fontSize: "0.75rem",
                        color: s.color,
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        marginTop: 2,
                      }}
                    >
                      {s.label}
                    </span>
                    <p
                      style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: s.meaning }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: CARD,
                borderRadius: 14,
                border: `1px solid ${BORDER}`,
                padding: "1.75rem",
              }}
            >
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>
                Key Greek Words
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                  gap: "0.75rem",
                }}
              >
                {[
                  {
                    word: "phiale",
                    meaning:
                      "bowl/libation dish &mdash; the vessel used in temple ritual for pouring offerings; that the prayers of the saints were held in <em>phialai</em> (5:8) and God&apos;s wrath is now poured from <em>phialai</em> creates a profound symmetry: the prayers of the martyrs and the bowls of judgment are intimately connected",
                  },
                  {
                    word: "helkos",
                    meaning:
                      "sore/ulcer &mdash; a festering, painful wound; used in the Septuagint for the Egyptian boils (Exodus 9:9-11) and in Luke 16:21 for the sores of Lazarus; the persistence of the sores through multiple bowls (noted again in v. 11) indicates the cumulative, not sequential, nature of the judgments",
                  },
                  {
                    word: "skotoo",
                    meaning:
                      "to darken &mdash; the perfect passive participle <em>eskotomene</em> in v. 10 describes the beast&apos;s kingdom as plunged into settled, ongoing darkness; parallels the ninth Egyptian plague and the darkness at the fifth trumpet (9:2) but now falls directly on the seat of the beast&apos;s power",
                  },
                  {
                    word: "metanoeo",
                    meaning:
                      "repent &mdash; to change one&apos;s mind, to turn; the verb appears in Christ&apos;s calls to each compromised church in chapters 2-3; its conspicuous absence &mdash; refused three times in chapter 16 &mdash; is the most theologically significant diagnosis in the chapter: those under judgment know who is judging them and choose curse over repentance",
                  },
                  {
                    word: "Gegonen",
                    meaning:
                      "it has come to be / it is done &mdash; perfect tense of <em>ginomai</em>; a single Greek word announcing the completion of the entire judgment sequence; will appear again at 21:6 to announce the completion of the new creation; the bookend structure of <em>Gegonen</em> frames the movement from judgment-complete to creation-complete",
                  },
                  {
                    word: "harmagedon",
                    meaning:
                      "Armageddon &mdash; from Hebrew <em>har megiddon</em> (mountain of Megiddo); associated with decisive battles in OT history (Judges 4-5; 2 Kings 23:29-30; Zechariah 12:11); in Revelation&apos;s symbolic register, the definitive eschatological gathering of the world&apos;s powers for confrontation with God Almighty",
                  },
                ].map((g) => (
                  <div
                    key={g.word}
                    style={{
                      background: BG,
                      borderRadius: 10,
                      border: `1px solid ${BORDER}`,
                      padding: "0.85rem",
                    }}
                  >
                    <div
                      style={{
                        color: GREEN,
                        fontWeight: 800,
                        fontStyle: "italic",
                        fontSize: "1rem",
                        marginBottom: 4,
                      }}
                    >
                      {g.word}
                    </div>
                    <div
                      style={{ color: MUTED, fontSize: "0.82rem", lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: g.meaning }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: CARD,
                borderRadius: 14,
                border: `1px solid ${BORDER}`,
                padding: "1.75rem",
              }}
            >
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>
                Video Resources
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((item) => (
                  <div
                    key={item.videoId}
                    style={{
                      background: BG,
                      borderRadius: 12,
                      border: `1px solid ${BORDER}`,
                      overflow: "hidden",
                    }}
                  >
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

        {/* ===================== KEY THEMES TAB ===================== */}
        {activeTab === "Key Themes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div
              style={{
                background: CARD,
                borderRadius: 14,
                border: `1px solid ${BORDER}`,
                padding: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <h2
                style={{ color: ROSE, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem" }}
              >
                Seven Major Themes in Revelation 16
              </h2>
              <p
                style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Revelation 16 is the most concentrated judgment chapter in the Bible, but it is more than a catalog of plagues. It is a theological statement about the nature of divine justice, the depth of human rebellion, the sovereignty of God over the worst of history, and the pastoral call to faithful endurance in the midst of it all. The seven themes below examine the bowl judgments in their Old Testament background, their Greek language, and their first-century context for persecuted communities.",
                }}
              />
            </div>

            {KEY_THEMES.map((item) => (
              <div
                key={item.id}
                style={{
                  background: CARD,
                  border: `1px solid ${openTheme === item.id ? item.color : BORDER}`,
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenTheme(openTheme === item.id ? null : item.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "1.1rem 1.3rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.4 }}>
                    {item.title}
                  </span>
                  <span
                    style={{
                      color: item.color,
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {openTheme === item.id ? "-" : "+"}
                  </span>
                </button>
                {openTheme === item.id && (
                  <div
                    style={{
                      padding: "0 1.3rem 1.2rem",
                      color: MUTED,
                      lineHeight: 1.85,
                      fontSize: "0.9rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* ===================== VERSE BY VERSE TAB ===================== */}
        {activeTab === "Verse by Verse" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div
              style={{
                background: CARD,
                borderRadius: 14,
                border: `1px solid ${BORDER}`,
                padding: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <h2
                style={{ color: GOLD, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem" }}
              >
                Verse-by-Verse Commentary on Revelation 16
              </h2>
              <p
                style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The verse-by-verse commentary below examines each section of Revelation 16 with attention to the Greek text, OT background (especially the Exodus plagues), and the theological themes of divine justice, human hardening, and eschatological completion. Click each section to expand the full commentary.",
                }}
              />
            </div>

            {VERSE_BY_VERSE.map((item) => (
              <div
                key={item.id}
                style={{
                  background: CARD,
                  border: `1px solid ${openVerse === item.id ? GOLD : BORDER}`,
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenVerse(openVerse === item.id ? null : item.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "1.1rem 1.3rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <span
                      style={{
                        color: GOLD,
                        fontWeight: 800,
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Revelation {item.ref}
                    </span>
                    <span
                      style={{ color: TEXT, fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.3 }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <span
                    style={{
                      color: GOLD,
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {openVerse === item.id ? "-" : "+"}
                  </span>
                </button>
                {openVerse === item.id && (
                  <div
                    style={{
                      padding: "0 1.3rem 1.2rem",
                      color: MUTED,
                      lineHeight: 1.85,
                      fontSize: "0.9rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* ===================== APPLICATION TAB ===================== */}
        {activeTab === "Application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div
              style={{
                background: CARD,
                borderRadius: 14,
                border: `1px solid ${BORDER}`,
                padding: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <h2
                style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem" }}
              >
                Applying Revelation 16
              </h2>
              <p
                style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Revelation 16 is not primarily a prediction timetable &mdash; it is a pastoral document for people living under pressure. Its theological claims about divine justice, human hardening, God&apos;s sovereignty, and the call to watchful endurance are as directly applicable to the contemporary Christian as they were to the seven churches of Asia Minor. The application sections below draw out the implications of this chapter for personal discipleship, community life, and engagement with the world.",
                }}
              />
            </div>

            {APPLICATION.map((item) => (
              <div
                key={item.id}
                style={{
                  background: CARD,
                  border: `1px solid ${openApp === item.id ? item.color : BORDER}`,
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenApp(openApp === item.id ? null : item.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "1.1rem 1.3rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.4 }}>
                    {item.title}
                  </span>
                  <span
                    style={{
                      color: item.color,
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {openApp === item.id ? "-" : "+"}
                  </span>
                </button>
                {openApp === item.id && (
                  <div
                    style={{
                      padding: "0 1.3rem 1.2rem",
                      color: MUTED,
                      lineHeight: 1.85,
                      fontSize: "0.9rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                )}
              </div>
            ))}

            {/* Study Questions */}
            <div
              style={{
                background: CARD,
                borderRadius: 14,
                border: `1px solid ${BORDER}`,
                padding: "1.75rem",
                marginTop: "0.5rem",
              }}
            >
              <h2
                style={{ color: GOLD, fontWeight: 800, fontSize: "1.1rem", marginBottom: "1rem" }}
              >
                Discussion and Study Questions
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  "What does the repeated refusal to repent in Revelation 16 (vv. 9, 11, 21) reveal about the nature of the human will apart from grace? How does this connect to Paul&apos;s teaching in Romans 1:18-32 about God &ldquo;giving over&rdquo; those who suppress the truth?",
                  "The angel of the waters declares &ldquo;just and true are your judgments&rdquo; in response to the third bowl (vv. 5-7). How does confidence in God&apos;s perfect justice free Christians from the need for personal vengeance and from bitterness toward those who have wronged them or wronged others?",
                  "Christ&apos;s beatitude in verse 15 (&ldquo;Blessed is the one who stays awake and remains clothed&rdquo;) appears in the middle of the sixth bowl&apos;s judgment sequence. What does it mean practically to &ldquo;stay awake&rdquo; and &ldquo;remain clothed&rdquo; in righteousness when the beast&apos;s systems offer attractive alternatives?",
                  "The bowl judgments are cumulative: the sores of bowl 1 are still present when bowl 5 falls. What does this suggest about the nature of divine judgment and the long-term consequences of choices made in the present?",
                  "The seventh bowl is poured into &ldquo;the air&rdquo; and the declaration &ldquo;It is done&rdquo; is spoken. The same perfect tense (<em>Gegonen</em>) appears in 21:6 announcing the completion of the new creation. What does this bookend structure reveal about the relationship between judgment and new creation in Revelation&apos;s theology?",
                  "How does living &ldquo;between the sixth and seventh bowl&rdquo; &mdash; in the space where the gathering for the final conflict is underway but the last word has not yet been spoken &mdash; shape the church&apos;s posture toward evangelism, suffering, and engagement with the world?",
                ].map((q, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                      padding: "0.85rem 1rem",
                      background: BG,
                      borderRadius: 10,
                      border: `1px solid ${BORDER}`,
                    }}
                  >
                    <span
                      style={{
                        color: GOLD,
                        fontWeight: 800,
                        fontSize: "0.9rem",
                        flexShrink: 0,
                        minWidth: 22,
                      }}
                    >
                      {i + 1}.
                    </span>
                    <p
                      style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.875rem" }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Reflection */}
            <div
              style={{
                background: CARD,
                borderRadius: 14,
                border: `1px solid ${GREEN}55`,
                padding: "1.75rem",
              }}
            >
              <h2
                style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.75rem" }}
              >
                A Word for the Watching Church
              </h2>
              <blockquote
                style={{
                  borderLeft: `3px solid ${GOLD}`,
                  paddingLeft: "1rem",
                  color: TEXT,
                  fontStyle: "italic",
                  lineHeight: 1.9,
                  fontSize: "1rem",
                  margin: "0 0 1rem 0",
                  fontFamily: "Georgia, serif",
                }}
              >
                &ldquo;Look, I come like a thief! Blessed is the one who stays awake and remains clothed,
                so as not to go naked and be shamefully exposed.&rdquo;
              </blockquote>
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 0.75rem 0", fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Revelation 16 was written for people who were being pressured from every side to take the beast&apos;s mark &mdash; to compromise, to participate, to accept the terms of the dominant system in exchange for economic access and physical safety. The bowl judgments were God&apos;s word to them: the system that is pressuring you is already judged; the beast whose mark you are being offered has already lost; the bowls of God&apos;s wrath are going to fall on precisely those who accepted the mark. You do not want what the beast is offering, even though it looks attractive, because what he is offering leads here.",
                }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "And in the middle of the judgment sequence, the voice of Christ: stay awake. Remain clothed. The nakedness the beast threatens you with &mdash; economic exclusion, social shame, physical danger &mdash; is nothing compared to the nakedness of standing before God without the righteousness the Lamb provides. The church in every age that hears Revelation 16 hears the same word: the bowls are coming; the final word has not yet been spoken; there is still time to remain clothed in the Lamb&apos;s righteousness and to proclaim the gospel to those who have not yet heard. The watchful church is the witnessing church.",
                }}
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
