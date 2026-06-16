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
  { videoId: "tG_7KA5EFJE", title: "Revelation 8 - The Seven Trumpets Begin" },
  { videoId: "fxdpbTJN-rc", title: "Silence in Heaven - Revelation 8:1-5" },
  { videoId: "XBYrFAMRRXk", title: "The First Four Trumpets - Revelation 8 Commentary" },
  { videoId: "EJb5bVZsMXw", title: "Revelation 8 and the Exodus Plagues" },
];

const KEY_THEMES = [
  {
    id: "seventh-seal",
    color: PURPLE,
    title: "The Seventh Seal and Half-Hour Silence (vv.1-2)",
    body: "When the Lamb opens the seventh seal, the result is not an immediate judgment but something unexpected and deeply striking: &ldquo;there was silence in heaven for about half an hour&rdquo; (v.1). After the sustained crescendo of the first six seals &mdash; the four horsemen, the martyrs crying under the altar, the cosmic catastrophe of the sixth seal, and the vast angelic worship of chapter 7 &mdash; this silence is jarring. In the ancient world, silence before a king was a mark of supreme reverence and awe. The silence of heaven is anticipatory, solemn, and reverent. Some interpreters see it as the pause before the storm, the moment when creation itself holds its breath before the next wave of divine judgment. Others connect it to the liturgical tradition where the temple fell silent when the priest entered the holy of holies to offer incense. Both backgrounds are at work: the seventh seal is the threshold between the seals and the trumpets, the moment of divine pause before the next series of judgments. The seven trumpet angels appear during this silence, already prepared and waiting &mdash; their preparation signals that these judgments are not reactive but planned. They stand before God (v.2), ready to receive the command."
  },
  {
    id: "golden-censer",
    color: GOLD,
    title: "The Golden Censer and the Prayers of All the Saints (vv.3-5)",
    body: "Before the trumpets sound, a liturgical scene of extraordinary theological significance interrupts the sequence: another angel comes and stands at the altar holding a golden censer (&ldquo;libanoton&rdquo; in Greek &mdash; specifically an incense vessel). He is given much incense to offer, &ldquo;together with the prayers of all the saints, on the golden altar in front of the throne.&rdquo; The smoke of the incense, together with the prayers of the saints, rises before God (v.4). This is one of the most important verses in the book: it establishes that the prayers of God&rsquo;s people are not lost in the chaos of history but are gathered, offered, and rise before the throne of God. The background is the daily incense offering in the Jerusalem temple (Exodus 30:7-8; Luke 1:9-10), where the priest would burn incense on the golden altar while the congregation prayed outside. Revelation transposes this temple liturgy onto the heavenly reality. Then the angel takes the censer, fills it with fire from the altar, and throws it to the earth &mdash; and there follow peals of thunder, rumblings, flashes of lightning, and an earthquake (v.5). The judgment that follows is thus directly connected to the prayers of the saints: God responds to his people&rsquo;s cry for justice by setting in motion the trumpet judgments."
  },
  {
    id: "first-four-trumpets",
    color: TEAL,
    title: "The First Four Trumpets: Judgment on the Natural Order (vv.6-12)",
    body: "The first four trumpets follow a recognizable pattern, striking in sequence the four great domains of the natural world: earth, sea, rivers and springs, and celestial bodies. Each trumpet destroys a third of its domain &mdash; the fraction &ldquo;one-third&rdquo; (repeated eight times in vv.7-12) is deliberate: these are not final, total destructions but partial judgments, severe warnings that leave room for repentance. The Old Testament background is unmistakably the Exodus plagues: hail and fire (Exodus 9:23-25), water turning to blood (Exodus 7:17-21), darkness (Exodus 10:21-23). Revelation reframes the Exodus plagues as end-time cosmic judgments, suggesting that just as God judged Egypt to liberate his people, he will judge the present world order to accomplish the final liberation of his servants. The difference is that in Exodus the plagues were selective (protecting Israel), while here they affect a third of all creation. The partial nature of the destruction is also an implicit call to repentance &mdash; God is not yet destroying everything; there is still time."
  },
  {
    id: "trumpet-one",
    color: ROSE,
    title: "First Trumpet: Hail and Fire Mixed with Blood &mdash; One-Third of Earth Burned (v.7)",
    body: "The first angel sounds and &ldquo;there came hail and fire mixed with blood, and it was hurled down on the earth.&rdquo; A third of the earth was burned up, a third of the trees, and all the green grass. The combination of hail, fire, and blood recalls the seventh plague of Egypt (Exodus 9:22-26) with added intensity. Hail and fire represent divine judgment from above; blood intensifies the vision into something catastrophic and terrifying. The ecological scope is enormous: a third of all trees and all green grass destroyed. In an agrarian world where food security depended entirely on agricultural land, this would represent catastrophic disruption of the food supply. The phrase &ldquo;all the green grass&rdquo; (as opposed to &ldquo;a third&rdquo;) has puzzled interpreters, since later in chapter 9 the locusts are commanded not to harm the grass. This may reflect the visionary, non-chronological nature of Revelation rather than a literal sequence. The destruction of vegetation echoes Joel 1:19-20, where fire has consumed the pastures and trees as a sign of divine judgment."
  },
  {
    id: "trumpet-two",
    color: GREEN,
    title: "Second Trumpet: Burning Mountain into the Sea &mdash; One-Third of Sea Becomes Blood (vv.8-9)",
    body: "The second angel sounds and &ldquo;something like a huge mountain, all ablaze, was thrown into the sea.&rdquo; A third of the sea becomes blood, a third of the sea creatures die, and a third of the ships are destroyed. The &ldquo;burning mountain&rdquo; image may evoke a volcanic eruption or a massive meteor strike; its primary background, however, is prophetic: in Jeremiah 51:25, Babylon is called &ldquo;a destroying mountain&rdquo; which God will roll down and make into a &ldquo;burnt mountain.&rdquo; Revelation&rsquo;s burning mountain, then, may represent the violent overthrow of a great power. The sea turning to blood echoes the first plague of Egypt (Exodus 7:20-21), where the Nile became blood and the fish died. In Revelation&rsquo;s first-century context, the sea represented commerce, communication, and Roman imperial power (Rome was a maritime empire). Destroying a third of the sea&rsquo;s creatures and a third of the ships would represent catastrophic disruption of the entire Mediterranean economic order. The vision may be addressing the destruction of Rome&rsquo;s imperial dominance even as it speaks of cosmic judgment."
  },
  {
    id: "trumpet-three",
    color: GOLD,
    title: "Third Trumpet: Wormwood Star Poisons One-Third of Rivers and Springs (vv.10-11)",
    body: "The third angel sounds and &ldquo;a great star, blazing like a torch, fell from the sky on a third of the rivers and on the springs of water&rdquo; (v.10). The star&rsquo;s name is &ldquo;Hapsinthos&rdquo; &mdash; Wormwood &mdash; the Greek name for the bitter plant Artemisia absinthium. A third of the waters turned bitter and many people died from the water. Where the second trumpet struck salt water (the sea), the third trumpet strikes fresh water &mdash; rivers and springs, the essential sources of drinking water and irrigation. In the Old Testament, bitter or poisoned water is a sign of judgment and curse: God threatened Israel in Jeremiah 9:15 and 23:15 that he would make them drink bitter water (wormwood) for their idolatry and false prophecy. The name Wormwood applied to the star suggests that this falling object is not merely a natural disaster but a divine instrument of judgment. The poisoning of fresh water sources would be among the most catastrophic ecological disasters imaginable &mdash; a civilization can survive the loss of sea trade, but not the loss of drinking water. The parallel with the Exodus plague (Exodus 7:20-21) and with prophetic judgment on unfaithful Israel (Jeremiah 9:15) gives this trumpet a dual reference: God judges both the pagan world and the corrupted church."
  },
  {
    id: "trumpet-four",
    color: TEAL,
    title: "Fourth Trumpet: One-Third of Sun, Moon, and Stars Struck (v.12)",
    body: "The fourth angel sounds and &ldquo;a third of the sun was struck, a third of the moon, and a third of the stars, so that a third of them turned dark. A third of the day was without light, and also a third of the night.&rdquo; This trumpet strikes the celestial order &mdash; the lights of heaven that God established at creation (Genesis 1:14-19) and that govern the rhythms of day and night, seasons and years. Darkness is one of the most pervasive symbols of judgment in the Old Testament: the ninth plague of Egypt was three days of thick darkness (Exodus 10:21-23); the Day of the Lord in Amos 5:18-20 is darkness and not light; Joel 2:10, 3:15 speak of sun and moon going dark; Isaiah 13:10 describes the stars, sun, and moon failing in the judgment on Babylon. In the cosmology of the ancient world, the celestial bodies were not merely astronomical objects but signs of divine order and divine communication. Darkening them signals a profound disruption of the created order &mdash; God is unmaking the stability of the heavens that sustains human life and civilization. The one-third fraction again signals partial judgment, not the final dissolution &mdash; that will come later in the narrative (Revelation 16:8-9; 21:23)."
  },
  {
    id: "eagle-woe",
    color: ROSE,
    title: "The Eagle&rsquo;s Warning: Three Woes (v.13)",
    body: "Chapter 8 closes with a scene that bridges the first four trumpets and the final three: &ldquo;As I watched, I heard an eagle that was flying in midair call out in a loud voice: &lsquo;Woe! Woe! Woe to the inhabitants of the earth, because of the trumpet blasts about to be sounded by the other three angels!&rsquo;&rdquo; (v.13). The eagle (&ldquo;aetos&rdquo; in Greek) flying &ldquo;in midair&rdquo; (literally &ldquo;in the midst of heaven&rdquo;) is a striking image. Eagles in the ancient world were associated with swiftness, power, and divine messengers &mdash; they were also often seen as harbingers of disaster or portents of battle (cf. Matthew 24:28; Hosea 8:1; Habakkuk 1:8). The three-fold cry of &ldquo;woe&rdquo; (&ldquo;ouai&rdquo; in Greek &mdash; an exclamation of extreme distress, lamentation, or warning) marks the final three trumpets as qualitatively different from the first four. The first four trumpets struck the natural order &mdash; devastating but non-personal. The last three trumpets (&ldquo;the three woes&rdquo;) will strike the inhabitants of the earth directly, with demonic torment (fifth trumpet), military slaughter (sixth trumpet), and the final judgment (seventh trumpet). The eagle&rsquo;s warning is an act of divine mercy: a warning that worse is coming, leaving space for repentance before the worst arrives."
  },
];

const VERSE_SECTIONS = [
  {
    id: "v1",
    color: PURPLE,
    title: "Verse 1: The Seventh Seal and the Half-Hour Silence",
    body: "When the Lamb opened the seventh seal, &ldquo;there was silence in heaven for about half an hour.&rdquo; After six seals of escalating drama &mdash; war, famine, death, martyrdom, cosmic catastrophe, and a vast heavenly vision &mdash; silence itself becomes the next event. The shock value is intentional. The first-century reader accustomed to apocalyptic texts would have expected an immediate, overwhelming judgment. Instead, silence. The phrase &ldquo;about half an hour&rdquo; (&ldquo;hos hemiorian&rdquo;) is the only time reference in terms of minutes in the whole of Revelation, which otherwise deals in days, months, years, and epochs. This specificity (about half an hour) makes the silence feel experiential &mdash; a pause that could be felt, measured. Some scholars connect this to the half-hour silence observed in the Jerusalem temple when the priest entered the holy of holies to offer incense (m. Tamid 5.6 describes the ritual and its solemnity). Others see it as the awe-struck silence of all heaven before the majesty of God&rsquo;s coming judgment. The silence is not emptiness but pregnant fullness: the whole of creation holding its breath before what is coming."
  },
  {
    id: "v2",
    color: GOLD,
    title: "Verse 2: The Seven Trumpet Angels",
    body: "During the silence, John sees &ldquo;the seven angels who stand before God, and seven trumpets were given to them.&rdquo; The definite article (&ldquo;the seven angels&rdquo;) suggests these are known figures &mdash; likely the seven archangels of Jewish tradition (Tobit 12:15 identifies Raphael as &ldquo;one of the seven angels who stand ready and enter before the glory of the Lord&rdquo;; 1 Enoch 20 names seven archangels). Their identification as those who &ldquo;stand before God&rdquo; marks them as the highest-ranking angels in the heavenly court. Trumpets in the ancient world were not musical instruments of celebration alone; in Israel they had primarily military and liturgical functions: calling the assembly (Numbers 10:2-3), signaling war (Numbers 10:9; Nehemiah 4:20), and announcing the festivals and sacred times (Numbers 10:10; Leviticus 23:24). The Feast of Trumpets (Rosh Hashanah) was associated with the inauguration of the New Year and God&rsquo;s judgment. The seven trumpets given to the seven archangels combine the military and liturgical functions: they are announcing both a festival of cosmic scope and a war of divine judgment."
  },
  {
    id: "v3-4",
    color: TEAL,
    title: "Verses 3-4: The Golden Censer and the Prayers of the Saints",
    body: "Another angel &mdash; distinct from the seven trumpet angels &mdash; comes and stands at the altar with a golden censer. He receives much incense to offer, &ldquo;together with the prayers of all the saints, on the golden altar in front of the throne.&rdquo; The smoke of the incense rises with the prayers before God. The scene is the heavenly temple&rsquo;s equivalent of the daily incense offering described in Exodus 30:7-8, performed by the high priest every morning and evening. In Luke 1:9-10, the people prayed outside while Zechariah burned incense inside &mdash; the same structure. The prayers of the saints (&ldquo;hagion&rdquo; &mdash; holy ones, the whole people of God) are here presented as the incense itself or as accompanying the incense, rising together before God. This is a profoundly pastoral image: every prayer that God&rsquo;s people have ever prayed &mdash; prayers for justice, for deliverance, for the coming of the kingdom &mdash; is not lost. It is gathered, offered on the heavenly altar, and rises before God. The judgment that follows in verse 5 is thus the direct answer to these prayers. The trumpets are not arbitrary expressions of divine wrath but God&rsquo;s response to the accumulated prayers of his suffering people throughout all of history."
  },
  {
    id: "v5",
    color: ROSE,
    title: "Verse 5: Fire from the Altar Thrown to the Earth",
    body: "The angel then takes the censer, fills it with fire from the altar, and throws it to the earth. The result: &ldquo;there came peals of thunder, rumblings, flashes of lightning and an earthquake.&rdquo; This sequence &mdash; thunder, rumblings, lightning, earthquake &mdash; is Revelation&rsquo;s standard theophany formula, appearing at the throne scene (4:5), after the seventh trumpet (11:19), after the seventh bowl (16:18), and here after the incense offering. It signals the immediate, active presence and intervention of God himself. The fire from the altar thrown to earth is a deliberate reversal: the incense offering sent the prayers of the saints upward; now fire from the same altar is sent downward in response. The background may be Ezekiel 10:2, where a man clothed in linen fills his hands with burning coals from among the cherubim and scatters them over Jerusalem in judgment. The connection between the prayers of the saints (v.4) and the fire-judgment (v.5) is structural: the trumpet judgments are God answering prayer. Those who have prayed &ldquo;thy kingdom come&rdquo; and &ldquo;how long, O Lord?&rdquo; will see in these judgments the working out of that divine response."
  },
  {
    id: "v6",
    color: PURPLE,
    title: "Verse 6: The Seven Angels Prepare to Sound",
    body: "The seven trumpet angels now prepare themselves to sound their trumpets. The verb &ldquo;prepared&rdquo; (&ldquo;hetoimasan&rdquo;) indicates a deliberate, readied action &mdash; not spontaneous but ordered. Each angel will blow in sequence. The preparation echoes the liturgical preparation of the temple musicians before worship, but it also echoes the military preparation before battle. The Hebrew Bible often describes the Day of the Lord using trumpet imagery: Amos 3:6, Zephaniah 1:16, Joel 2:1. The trumpet blast that launches holy war in the ancient Near East was both signal and summons &mdash; summoning the armies to attention and signaling the beginning of the divine campaign. As the seven angels prepare, the reader senses the weight of what is coming: four trumpets striking the natural order, three more (&ldquo;the three woes&rdquo;) striking the inhabitants of the earth directly. The orderly preparation of the angels underscores the judicial character of the trumpets: these are not random catastrophes but deliberate, ordered divine judgments proceeding from the throne."
  },
  {
    id: "v7",
    color: ROSE,
    title: "Verse 7: The First Trumpet &mdash; Hail and Fire, One-Third of Earth Burned",
    body: "The first angel sounds and &ldquo;there came hail and fire mixed with blood, and it was hurled down on the earth.&rdquo; A third of the earth was burned up, a third of the trees were burned, and all the green grass was burned. The primary Old Testament background is the seventh plague of Egypt: &ldquo;The Lord sent thunder and hail, and lightning flashed down to the ground. So the Lord rained hail on the land of Egypt; hail fell and lightning flashed back and forth. It was the worst storm in all the land of Egypt since it had become a nation&rdquo; (Exodus 9:23-24). But Revelation intensifies the plague: blood is added to the hail and fire, and the scope is a third of the whole earth rather than one nation. The blood mixed with hail and fire echoes Joel 2:30 (&ldquo;I will show wonders in the heavens and on the earth, blood and fire and billows of smoke&rdquo;) and suggests divine intervention of the most direct kind. The fraction &ldquo;a third&rdquo; is significant: it is severe (not a minor disruption) but not total (not final destruction). Room for repentance remains. The destruction of trees and grass has agricultural and ecological consequences that would affect all aspects of human civilization in an agrarian economy."
  },
  {
    id: "v8-9",
    color: GREEN,
    title: "Verses 8-9: The Second Trumpet &mdash; Burning Mountain, Sea Becomes Blood",
    body: "The second angel sounds and &ldquo;something like a huge mountain, all ablaze, was thrown into the sea.&rdquo; A third of the sea became blood, a third of the living creatures in the sea died, and a third of the ships were destroyed. The &ldquo;something like a huge mountain&rdquo; language signals apocalyptic vision: John is describing what he sees in terms of known objects, not necessarily identifying it literally. The burning mountain may recall the theophany of Mount Sinai (Exodus 19:18; Deuteronomy 4:11: &ldquo;the mountain was ablaze with fire&rdquo;), but the primary prophetic background is Jeremiah 51:25, where God addresses Babylon: &ldquo;I am against you, you destroying mountain, you who destroy the whole earth&rsquo; declares the Lord. &lsquo;I will stretch out my hand against you, roll you off the cliffs, and make you a burned-out mountain.&rsquo;&rdquo; The first plague of Egypt (Exodus 7:20-21) turned the Nile to blood. Here the sea itself turns to blood across a third of its expanse. The destruction of a third of the sea&rsquo;s creatures and a third of the ships would be catastrophic for Mediterranean civilization, which depended on the sea for trade, food, military power, and communication. The ships in particular may symbolize Roman commercial and military power."
  },
  {
    id: "v10-11",
    color: GOLD,
    title: "Verses 10-11: The Third Trumpet &mdash; Wormwood Star Poisons Fresh Water",
    body: "&ldquo;The third angel sounded his trumpet, and a great star, blazing like a torch, fell from the sky on a third of the rivers and on the springs of water &mdash; the name of the star is Wormwood.&rdquo; A third of the waters turned bitter, and many people died from drinking the water that had become bitter (v.11). The shift from salt water (second trumpet) to fresh water (third trumpet) is significant: where the second trumpet struck the sea &mdash; commerce, trade, imperial power &mdash; the third trumpet strikes the rivers and springs, the fundamental sources of human sustenance and survival. Wormwood (Greek: &ldquo;hapsinthos&rdquo;) is the bitter plant Artemisia absinthium, known in the ancient world for its intensely bitter taste. In the Old Testament, wormwood appears consistently as a symbol of divine judgment and bitter consequences of sin: Deuteronomy 29:18 warns that turning away from God will produce &ldquo;a root that produces such bitter poison&rdquo;; Jeremiah 9:15 records God threatening to make Israel drink bitter water (&ldquo;wormwood&rdquo;) for their idolatry; Jeremiah 23:15 threatens false prophets with the same. The falling star image echoes Isaiah 14:12 (the fall of Babylon&rsquo;s king: &ldquo;How you have fallen from heaven, morning star, son of the dawn!&rdquo;) and anticipates Revelation 9:1 where another star falls, opening the Abyss. Stars in Revelation can represent angels (1:20), so the named star Wormwood may be an angelic instrument of divine judgment."
  },
  {
    id: "v12",
    color: TEAL,
    title: "Verse 12: The Fourth Trumpet &mdash; One-Third of Celestial Bodies Struck",
    body: "&ldquo;The fourth angel sounded his trumpet, and a third of the sun was struck, a third of the moon, and a third of the stars, so that a third of them turned dark. A third of the day was without light, and also a third of the night.&rdquo; The fourth trumpet completes the sequence by striking the celestial bodies &mdash; the final great domain of creation after earth, sea, and fresh water. Sun, moon, and stars were established at creation to govern day and night (Genesis 1:14-19); darkening them represents an undoing of the created order. The Old Testament background is extensive: the ninth plague of Egypt (Exodus 10:21-23: three days of thick darkness); the Day of the Lord in Joel 2:10 (&ldquo;the sun and moon are darkened, and the stars no longer shine&rdquo;); Isaiah 13:10 on the judgment of Babylon; Ezekiel 32:7-8 on the judgment of Egypt. Darkness in the prophetic tradition signals not merely physical absence of light but the absence of God&rsquo;s blessing, the reversal of creation&rsquo;s order, and the manifestation of divine judgment against wickedness. The two-part effect (a third of the day and a third of the night) is precise: even the darkness becomes darker. The one-third pattern continues, maintaining the theme of severe but partial judgment."
  },
  {
    id: "v13",
    color: ROSE,
    title: "Verse 13: The Eagle and the Three Woes",
    body: "&ldquo;As I watched, I heard an eagle that was flying in midair call out in a loud voice: &lsquo;Woe! Woe! Woe to the inhabitants of the earth, because of the trumpet blasts about to be sounded by the other three angels!&rsquo;&rdquo; The eagle (&ldquo;aetos&rdquo; in Greek) flying in the midst of heaven is a solemn herald, separating the first four trumpets from the last three. The distinction is crucial: the first four trumpets struck the natural world &mdash; land, sea, fresh water, celestial bodies. The last three will strike the inhabitants of the earth directly. The three-fold woe (&ldquo;ouai ouai ouai&rdquo;) is the strongest form of lamentation and warning in the Greek language &mdash; Jesus uses &ldquo;ouai&rdquo; repeatedly in Matthew 23 when pronouncing judgment on the scribes and Pharisees. An eagle as a heavenly messenger is unusual but not without precedent: in Revelation 4:7, the fourth living creature has the face of an eagle; in Revelation 12:14, a woman is given the wings of a great eagle. The eagle&rsquo;s position &ldquo;flying in midair&rdquo; (&ldquo;en mesouranema&rdquo; &mdash; literally in mid-heaven, the highest visible point) makes it visible and audible to the whole earth. The warning before the three woes is itself an act of divine mercy: creation is given notice that worse is coming."
  },
];

const APPLICATION_SECTIONS = [
  {
    id: "app1",
    color: GOLD,
    title: "The Prayers of the Saints and the Trumpets: God Answers Prayer Through History",
    body: "Perhaps the most theologically significant moment in Revelation 8 is not one of the four trumpet judgments but the interlude in verses 3-5: the golden censer, the incense, and the prayers of all the saints rising before God. The structure is unmistakable: the prayers go up (v.4), and then fire from the altar comes down (v.5), launching the trumpet sequence. The trumpet judgments &mdash; devastating as they are &mdash; are God&rsquo;s answer to the accumulated prayers of his people throughout history. This has profound implications for prayer. The martyrs under the altar in chapter 6 cried: &ldquo;How long, Sovereign Lord, holy and true, until you judge the inhabitants of the earth and avenge our blood?&rdquo; Chapter 8 shows those prayers being gathered, offered, and answered. Every prayer for justice, for God&rsquo;s kingdom to come, for the vindication of the suffering church &mdash; all of it is not lost in the noise of history. It rises before the throne as incense. God hears. And in due time, God answers &mdash; not always in the way or timing we expect, but the censer is always being filled. This passage is one of the strongest biblical arguments for persistent, confident prayer for justice: not as passive resignation but as the active force that shapes the outworking of God&rsquo;s plan in history."
  },
  {
    id: "app2",
    color: TEAL,
    title: "The Silence of God and the Half-Hour of Heaven",
    body: "The half-hour silence of heaven (v.1) speaks directly to those who experience what has been called &ldquo;the silence of God&rdquo; &mdash; periods of apparent divine inactivity, when prayers seem unanswered, when God seems to have stepped back from history, when suffering continues and the kingdom seems no closer. Revelation 8 names that silence and places it within the throne room. The silence of heaven is not God&rsquo;s absence; it is God&rsquo;s liturgical pause before a decisive act. The prayer tradition of the church &mdash; from Teresa of Avila to Thomas Merton to countless anonymous saints &mdash; has recognized that periods of divine silence are not the end of the spiritual life but often the threshold of a deeper encounter. The mystics called it &ldquo;the dark night of the soul.&rdquo; Revelation 8 suggests that even the silence of heaven is purposeful, solemn, and preparatory. Those who have waited in what seems like divine silence can locate themselves in this half-hour: not abandoned, but held in the pause before God&rsquo;s next decisive action. The silence is not empty; it is full of the incense of accumulated prayer, rising before the throne, about to be answered."
  },
  {
    id: "app3",
    color: ROSE,
    title: "Partial Judgment as Mercy: The One-Third Pattern and God&rsquo;s Call to Repentance",
    body: "The repeated &ldquo;one-third&rdquo; throughout Revelation 8 is not arbitrary. A third of the earth is burned; a third of the sea becomes blood; a third of fresh water is poisoned; a third of the celestial lights go dark. Two-thirds remain. The proportionality of the trumpet judgments reflects a theology of partial judgment that leaves room for repentance &mdash; a pattern deeply rooted in the Old Testament prophets. Amos 4:6-11 records God sending partial judgments on Israel (famine, drought, blight, plague, earthquake) precisely as warnings before final judgment: &ldquo;Yet you have not returned to me,&rsquo; declares the Lord.&rdquo; The trumpets echo this pattern. God does not destroy all at once; he sends warning upon warning, each escalating in severity, each leaving space for the response he most desires: repentance and return. This has a direct pastoral application. When we experience disruption &mdash; economic, ecological, political, personal &mdash; the question is not only &ldquo;why is this happening?&rdquo; but &ldquo;what is this calling me toward?&rdquo; The prophetic tradition consistently interprets suffering and judgment not as God&rsquo;s final word but as his penultimate word, designed to provoke the return that makes his final word unnecessary."
  },
  {
    id: "app4",
    color: PURPLE,
    title: "Revelation 8 and the Ecological Crisis: Creation Under Judgment",
    body: "The first four trumpet judgments strike four domains that modern environmentalists would recognize immediately: land vegetation (first trumpet), ocean ecosystems (second trumpet), fresh water systems (third trumpet), and atmospheric/climatic systems (fourth trumpet). Whatever the original referents of these visions in the first-century context, they describe a cascading collapse of the natural systems that sustain human life. Reading Revelation 8 alongside the contemporary ecological crisis raises uncomfortable but important questions. Is the current pattern of ecological breakdown &mdash; deforestation, ocean acidification, water table depletion, climate disruption of atmospheric patterns &mdash; a form of the very trumpet judgments John described? The text does not give us a simple answer, but it does give us a theological frame: the natural world is not merely a backdrop to human history but is directly implicated in divine judgment. God&rsquo;s covenant includes the land (Leviticus 26; Hosea 4:1-3: &ldquo;Because of this the land dries up, and all who live in it waste away&rdquo;). The church that takes Revelation 8 seriously will take seriously both the theological weight of creation care and the prophetic voice that ecological disruption may carry in our time."
  },
];

export default function Revelation8GuidePage() {
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
            <span style={{ background: PURPLE, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>REVELATION</span>
            <span style={{ color: MUTED, fontSize: 14 }}>Chapter 8 &bull; 13 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 900, margin: "0 0 16px", lineHeight: 1.15, color: TEXT }}>
            Revelation 8: The Seventh Seal, Silence in Heaven, and the First Four Trumpets
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,2vw,1.1rem)", color: MUTED, maxWidth: 700, lineHeight: 1.75, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "The seventh seal is opened &mdash; producing half an hour of silence before the seven trumpet angels appear. The silence is deeply significant: anticipatory, reverent, solemn. The prayers of the saints rise as incense before God. The first four trumpets then strike the natural order: earth, sea, rivers and springs, and celestial bodies." }}
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
                color: activeTab === t ? PURPLE : MUTED,
                borderBottom: activeTab === t ? `2px solid ${PURPLE}` : "2px solid transparent",
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
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Overview of Revelation 8</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Revelation 8 opens a new phase in the book&rsquo;s unfolding structure. The seventh seal, when opened, does not produce an immediate judgment but a half-hour of awed silence in heaven &mdash; followed by the appearance of seven trumpet angels. Before the trumpets begin, a liturgical interlude of extraordinary significance takes place: the prayers of all the saints rise before God as incense, and fire from the heavenly altar is thrown to earth. The four trumpets that follow are connected to those prayers: they are God&rsquo;s answer, striking the natural order in a series of judgments that echo the plagues of Exodus." }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
              {[
                { label: "Book", value: "Revelation" },
                { label: "Chapter", value: "8" },
                { label: "Verse Count", value: "13" },
                { label: "Literary Type", value: "Apocalyptic vision" },
                { label: "Key Event", value: "Seventh seal and four trumpets" },
                { label: "Central Image", value: "Prayers rising as incense" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: TEXT }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12 }}>Structure: Three Movements in One Chapter</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Revelation 8 divides into three distinct movements: (1) the seventh seal and the silence (vv.1-2); (2) the liturgical interlude of the golden censer and the prayers of the saints (vv.3-5); and (3) the sounding of the first four trumpets (vv.6-12), with a closing warning by an eagle announcing the three woes (v.13). The liturgical interlude is theologically the most important: it establishes that the trumpet judgments are God&rsquo;s response to the prayers of his people, not arbitrary expressions of divine wrath." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${PURPLE}33`, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, marginBottom: 8 }}>Movement 1: The Silence (vv.1-2)</div>
                  <ul style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, paddingLeft: 16, margin: 0 }}>
                    <li>Seventh seal opened</li>
                    <li>Half-hour of silence</li>
                    <li>Seven trumpet angels appear</li>
                    <li>Liturgical and military image</li>
                  </ul>
                </div>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${GOLD}33`, padding: 16 }}>
                  <div style={{ color: GOLD, fontWeight: 700, marginBottom: 8 }}>Movement 2: The Censer (vv.3-5)</div>
                  <ul style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, paddingLeft: 16, margin: 0 }}>
                    <li>Angel with golden censer</li>
                    <li>Incense and prayers of saints</li>
                    <li>Fire thrown to earth</li>
                    <li>Theophany: thunder and quake</li>
                  </ul>
                </div>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${TEAL}33`, padding: 16 }}>
                  <div style={{ color: TEAL, fontWeight: 700, marginBottom: 8 }}>Movement 3: Four Trumpets (vv.6-13)</div>
                  <ul style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, paddingLeft: 16, margin: 0 }}>
                    <li>Earth burned (1/3)</li>
                    <li>Sea becomes blood (1/3)</li>
                    <li>Fresh water poisoned (1/3)</li>
                    <li>Celestial lights struck (1/3)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 16, color: TEXT }}>Chapter 8 at a Glance</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "8:1", color: PURPLE, label: "Seventh Seal", desc: "The Lamb opens the seventh seal; half an hour of silence in heaven" },
                  { ref: "8:2", color: GOLD, label: "Seven Angels", desc: "Seven trumpet angels appear before God; trumpets are given to them" },
                  { ref: "8:3-5", color: TEAL, label: "Golden Censer", desc: "Angel offers incense with the prayers of all the saints; fire thrown to earth; thunder, lightning, earthquake" },
                  { ref: "8:6", color: MUTED, label: "Preparation", desc: "Seven angels prepare to sound their trumpets" },
                  { ref: "8:7", color: ROSE, label: "First Trumpet", desc: "Hail and fire mixed with blood; 1/3 of earth, trees, and grass burned" },
                  { ref: "8:8-9", color: GREEN, label: "Second Trumpet", desc: "Burning mountain thrown into sea; 1/3 of sea becomes blood; 1/3 of sea creatures die; 1/3 of ships destroyed" },
                  { ref: "8:10-11", color: GOLD, label: "Third Trumpet", desc: "Star called Wormwood falls on 1/3 of rivers and springs; waters turned bitter; many die" },
                  { ref: "8:12", color: TEAL, label: "Fourth Trumpet", desc: "1/3 of sun, moon, stars struck; 1/3 of day and night without light" },
                  { ref: "8:13", color: ROSE, label: "Eagle&rsquo;s Warning", desc: "Eagle flying in midair cries &lsquo;Woe! Woe! Woe!&rsquo; announcing the three remaining trumpets" },
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
              <h3 style={{ fontWeight: 700, marginBottom: 12, color: TEXT }}>Exodus Parallels: Trumpets as New Plagues</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The first four trumpets are unmistakably modeled on the plagues of Egypt in Exodus. The hail and fire (first trumpet) echo the seventh plague (Exodus 9:23-25). The sea turning to blood (second trumpet) echoes the first plague (Exodus 7:20-21). The poisoning of fresh water (third trumpet) also echoes the first plague. The darkness (fourth trumpet) echoes the ninth plague (Exodus 10:21-23). Revelation is making a theological argument: just as God judged Egypt to liberate Israel, he will judge the present world order to accomplish the final liberation of his people. The Exodus is not merely ancient history but the paradigm for all of God&rsquo;s redemptive acts." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Exodus 7:20",
                  "Exodus 9:23",
                  "Exodus 10:21",
                  "Jeremiah 51:25",
                  "Jeremiah 9:15",
                  "Joel 2:10",
                  "Isaiah 13:10",
                  "Ezekiel 10:2",
                  "Zechariah 2:6",
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
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Key Themes in Revelation 8</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Revelation 8 contains a rich tapestry of themes: divine silence and the weight of anticipation, the theology of prayer as incense before the throne, Exodus-patterned judgment, and the ominous warning of worse to come. Seven major themes are explored here." }}
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
                  { word: "salpigx", transliteration: "(SAL-pinx)", meaning: "trumpet &mdash; the instrument of war, assembly, and divine announcement in ancient Israel; used in Numbers 10 for calling the congregation and signaling war; in Revelation the trumpets announce divine judgment of cosmic scope" },
                  { word: "libanoton", transliteration: "(li-ba-NO-ton)", meaning: "censer, incense vessel &mdash; from &lsquo;libanos&rsquo; (frankincense); the golden vessel used by the priest to burn incense; in Revelation 8 it holds both incense and the prayers of all the saints, rising together before God" },
                  { word: "hapsinthos", transliteration: "(HAP-sin-thos)", meaning: "wormwood, absinth &mdash; the bitter plant Artemisia absinthium; in the Old Testament (Jeremiah 9:15; 23:15) a symbol of the bitter consequences of idolatry and false prophecy; here the name of the star that poisons the fresh waters" },
                  { word: "aetos", transliteration: "(AE-tos)", meaning: "eagle &mdash; in ancient symbolism an eagle signified power, swiftness, and divine portent; in Revelation the eagle appears as a living creature (4:7), a bearer of divine rescue (12:14), and here as a herald of coming woe" },
                  { word: "ouai", transliteration: "(OO-ah-ee)", meaning: "woe! &mdash; a cry of lamentation, distress, or warning; used by Jesus in the woes against the Pharisees (Matthew 23); the three-fold &lsquo;woe&rsquo; of the eagle is the strongest form of warning possible, marking the last three trumpets as qualitatively more severe" },
                  { word: "hemiorion", transliteration: "(hay-mee-OR-ee-on)", meaning: "half an hour &mdash; the only minute-scale time reference in Revelation; the specific duration of the silence of heaven; may echo the half-hour of priestly silence in the temple during the incense offering (m. Tamid 5.6)" },
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
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>The Four Trumpets: Pattern and Scope</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The four trumpets follow a structural pattern: each strikes one domain of creation, each destroys exactly one-third of that domain, and each echoes a specific plague of Egypt. The pattern escalates from the earthly and visible (land, sea, rivers) to the cosmic and structural (celestial lights). The one-third fraction is consistent and deliberate: it represents severe, unmistakable divine action while leaving two-thirds intact &mdash; a mercy that maintains the possibility of repentance." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12 }}>
                {[
                  { color: ROSE, label: "1st Trumpet", domain: "Land", fraction: "1/3 of earth, trees; all grass", exodus: "7th plague: hail and fire" },
                  { color: GREEN, label: "2nd Trumpet", domain: "Sea", fraction: "1/3 of sea becomes blood; 1/3 creatures; 1/3 ships", exodus: "1st plague: water to blood" },
                  { color: GOLD, label: "3rd Trumpet", domain: "Fresh Water", fraction: "1/3 of rivers and springs poisoned", exodus: "1st plague; Jer 9:15" },
                  { color: TEAL, label: "4th Trumpet", domain: "Celestial", fraction: "1/3 of sun, moon, stars darkened", exodus: "9th plague: thick darkness" },
                ].map(item => (
                  <div key={item.label} style={{ background: BG, borderRadius: 10, border: `1px solid ${item.color}44`, padding: 14 }}>
                    <div style={{ color: item.color, fontWeight: 700, marginBottom: 6, fontSize: 14 }}>{item.label}</div>
                    <div style={{ color: TEXT, fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Domain: {item.domain}</div>
                    <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5, marginBottom: 4 }}>{item.fraction}</div>
                    <div style={{ color: MUTED, fontSize: 11, fontStyle: "italic" }}>{item.exodus}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Verse by Verse: Revelation 8:1-13</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "A careful walk through all 13 verses of Revelation 8, examining the structure, Old Testament background, and meaning of each passage. Click any section to expand the commentary." }}
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
                dangerouslySetInnerHTML={{ __html: "Hover over any reference to see the verse text. These are the key passages that illuminate Revelation 8&rsquo;s Old Testament background and liturgical significance." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Revelation 8:1",
                  "Revelation 8:3",
                  "Revelation 8:4",
                  "Revelation 8:7",
                  "Revelation 8:13",
                  "Exodus 9:23",
                  "Exodus 7:20",
                  "Exodus 10:21",
                  "Jeremiah 9:15",
                  "Jeremiah 51:25",
                  "Joel 2:10",
                  "Isaiah 13:10",
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
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Application: Prayers, Silence, and Judgment</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "How does knowing that God hears the prayers of the saints even in periods of judgment strengthen our prayer life? What does the half-hour silence of heaven say to those who experience divine silence in their own lives? These are among the pastoral questions Revelation 8 directly addresses." }}
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
                  "The prayers of all the saints rise as incense before God in verse 3-4, and the trumpet judgments follow as God&rsquo;s response. How does this change the way you think about your prayers for justice and the coming of God&rsquo;s kingdom?",
                  "The half-hour silence of heaven (v.1) is a liturgical pause before God&rsquo;s decisive action. Have you experienced periods of divine silence in your own spiritual life? How does Revelation 8 reframe those periods?",
                  "The one-third pattern in each trumpet judgment suggests partial, warning-style judgment rather than final destruction. How does understanding God&rsquo;s judgments as warnings that invite repentance shape how you respond to difficulty and disruption in your life?",
                  "The first four trumpets strike the natural world: land, sea, fresh water, and sky. What responsibilities does this vision of creation under divine judgment place on the church with respect to ecological stewardship?",
                  "The eagle warns &lsquo;woe, woe, woe&rsquo; before the final three trumpets, giving advance notice that worse is coming. How does God&rsquo;s pattern of warning before judgment shape your understanding of his character?",
                  "If the trumpet judgments are God&rsquo;s answer to the prayers of the saints, what prayers are you praying that you would want God to answer &mdash; and are you prepared for what his answer might look like?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: ROSE, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12 }}>Video Resources: Revelation 8</h3>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Deepen your study of the seventh seal, the half-hour silence, the prayers of the saints, and the first four trumpet judgments through these video resources." }}
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

            <div style={{ background: `linear-gradient(135deg, #05050f 0%, ${CARD} 100%)`, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12 }}>Closing: Prayer as the Hinge of History</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The most remarkable thing about Revelation 8 is not its visions of cosmic disaster but its insistence that those disasters are connected to prayer. The prayers of the saints rise as incense; fire comes back from the altar; the trumpets begin. This is not incidental detail &mdash; it is the theological heart of the chapter. God governs history in response to the prayers of his people. The church that prays &ldquo;thy kingdom come&rdquo; is not engaging in passive resignation or private piety. It is participating in the heavenly liturgy that drives the outworking of God&rsquo;s purposes in the world. Every prayer for justice, for the liberation of the oppressed, for the exposure of evil, for the coming of the new creation &mdash; every prayer rises as incense before the throne and is answered in God&rsquo;s time and God&rsquo;s way. Revelation 8 is Revelation&rsquo;s most direct statement of what prayer accomplishes in the cosmos." }}
              />
              <blockquote style={{ borderLeft: `4px solid ${PURPLE}`, paddingLeft: 20, margin: 0 }}>
                <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;The smoke of the incense, together with the prayers of God&rsquo;s people, went up before God from the angel&rsquo;s hand.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13 }}>-- Revelation 8:4 (NIV)</cite>
              </blockquote>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
