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
  { videoId: "WnDVX3kJKoU", title: "Revelation 11 - The Two Witnesses" },
  { videoId: "5WJHLfbJGiY", title: "The Seventh Trumpet - Revelation 11:15-19" },
  { videoId: "NJqo1WRcX_0", title: "Who Are the Two Witnesses? Revelation 11 Explained" },
  { videoId: "3eUYI4b_QKs", title: "Faithful Witness unto Death - Revelation 11" },
];

const KEY_THEMES = [
  {
    id: "measuring-temple",
    color: GOLD,
    title: "Measuring the Temple: Protection, Delineation, and the Outer Court Given to the Nations (vv.1-2)",
    body: "The chapter opens with a striking commission: John is given a measuring rod (Greek: &ldquo;kalamos&rdquo; &mdash; a reed) and told to measure the temple of God and the altar and those who worship there. But he is told explicitly not to measure the outer court because &ldquo;it has been given to the Gentiles.&rdquo; The Gentiles will trample the holy city for 42 months. The act of measuring in prophetic literature carries the sense of demarcation and protection: in Ezekiel 40-48, the measuring of the new temple establishes its holy boundaries; in Zechariah 2:1-5, a man with a measuring line prepares to measure Jerusalem before God declares he will be a wall of fire around it. The measuring here signifies that God knows and marks out what is his &mdash; the worshipers at the altar are known and protected even though the outer court and the city will be trampled. The 42 months (= 1,260 days = 3.5 years = a time, times, and half a time) is a period of tribulation drawn from Daniel 7:25 and 12:7 &mdash; the half-week of years during which the fourth beast exercises authority over the saints. The outer court given to the nations is perhaps the most significant detail for interpretation: it establishes that the protection God provides does not mean immunity from the experience of Gentile trampling; the saints will be present in the time of tribulation, not removed from it."
  },
  {
    id: "two-witnesses",
    color: TEAL,
    title: "The Two Witnesses: Sackcloth, Olive Trees, Lampstands, and Powers Like Moses and Elijah (vv.3-6)",
    body: "The two witnesses are one of Revelation&rsquo;s most debated figures. They prophesy for 1,260 days (= 42 months = 3.5 years) clothed in sackcloth &mdash; the garment of mourning and penitential prophecy (Genesis 37:34; Isaiah 50:3; Matthew 11:21). They are described as the two olive trees and the two lampstands who stand before the Lord of the earth &mdash; language drawn directly from Zechariah 4:1-14, where the two olive trees beside the lampstand are identified as &ldquo;the two who are anointed to serve the Lord of all the earth&rdquo; (Zechariah 4:14; cf. Joshua and Zerubbabel, the priestly and royal offices). The powers given to the witnesses echo Moses and Elijah precisely: fire from their mouths that devours enemies (2 Kings 1:10-12 &mdash; Elijah called fire from heaven); power to shut up the sky so it does not rain (1 Kings 17:1 &mdash; Elijah shut the heavens for 3.5 years, the same period as the witnesses&rsquo; ministry); power to turn waters into blood and strike the earth with every kind of plague (Exodus 7-12 &mdash; Moses in Egypt). The deliberate Moses-Elijah pairing also recalls the Transfiguration (Matthew 17:3; Mark 9:4; Luke 9:30), where Moses and Elijah appear with Jesus. Interpreters disagree on whether the two witnesses are: (1) literal individuals (Elijah and Enoch or Moses, based on Malachi 4:5); (2) the church&rsquo;s prophetic witness as a corporate body; (3) the Law and the Prophets embodied in the church&rsquo;s proclamation; or (4) a symbol of the full prophetic tradition carried forward by faithful witnesses."
  },
  {
    id: "beast-kills",
    color: ROSE,
    title: "The Beast from the Abyss Kills the Witnesses; Their Bodies Lie in the Street (vv.7-10)",
    body: "When the witnesses have finished their testimony, the beast that comes up from the Abyss attacks and overpowers and kills them. This is the first appearance in Revelation of &ldquo;the beast&rdquo; (&ldquo;to therion&rdquo;) as an active agent &mdash; a figure who will dominate chapters 13-19. His origin from the Abyss connects him to the demonic forces of chapter 9 and to the description in 17:8 (&lsquo;the beast, which you saw, once was, now is not, and yet will come up out of the Abyss&rsquo;). The beast&rsquo;s ability to kill the witnesses marks a crucial transition: up to this point, the witnesses have been invulnerable (fire from their mouths consumed any enemies who tried to harm them, v.5). But now their testimony is &ldquo;finished&rdquo; (&ldquo;telesosi&rdquo; &mdash; completed, accomplished) and the beast can act. Their bodies lie in the street of the great city that is figuratively called Sodom and Egypt &mdash; where also their Lord was crucified. The great city is Jerusalem in the literal reading but may represent any city of human opposition to God (Babylon/Rome in many interpretations). People from every people, tribe, language, and nation gaze at their bodies for 3.5 days and refuse to let them be buried &mdash; the ultimate ancient contempt, denying honorable burial. Those who dwell on the earth celebrate and exchange gifts because these two prophets had tormented them. The scene mirrors the world&rsquo;s response to the death of Jesus: triumphant, premature celebration."
  },
  {
    id: "resurrection-ascent",
    color: GREEN,
    title: "Resurrection After 3.5 Days; Terror Among the Witnesses; Ascent to Heaven (vv.11-13)",
    body: "But after 3.5 days the breath of life from God enters the two witnesses and they stand on their feet. Terror (&ldquo;phobos megas&rdquo; &mdash; great fear) falls on those who watch. Then they hear a loud voice from heaven saying &lsquo;Come up here&rsquo; (&ldquo;Anabete hode&rdquo; &mdash; the same words spoken to John in 4:1), and they go up to heaven in a cloud while their enemies look on. The 3.5 days mirrors the 3.5 years (1,260 days; 42 months) of their ministry, compressing the entire period of faithful witness and death into the temporal pattern of Daniel&rsquo;s tribulation period. More immediately, it mirrors the three days of Christ&rsquo;s entombment before his resurrection &mdash; the witnesses follow the pattern of their Lord. The breath of life entering them echoes Genesis 2:7 (God breathes life into Adam) and Ezekiel 37:10 (the breath enters the dry bones in the valley). At the moment of their resurrection, a severe earthquake strikes: a tenth of the city falls, seven thousand people are killed, and the survivors are terrified and give glory to the God of heaven. This response &mdash; giving glory to God &mdash; is the one response that the trumpet judgments in chapter 9 failed to produce. The death and resurrection of the witnesses accomplishes what no direct divine judgment had: it breaks through the hardness and produces, at minimum, the acknowledgment of God&rsquo;s reality."
  },
  {
    id: "seventh-trumpet",
    color: PURPLE,
    title: "The Seventh Trumpet: The Kingdom of the World Becomes the Kingdom of the Lord (vv.14-19)",
    body: "With the resurrection of the witnesses and the earthquake, the second woe is past and the third woe is about to come. The seventh angel sounds his trumpet &mdash; and instead of a further plague, loud voices in heaven cry out: &lsquo;The kingdom of the world has become the kingdom of our Lord and of his Messiah, and he will reign for ever and ever.&rsquo; This is one of the most celebrated declarations in all of Revelation. The Greek (&ldquo;egeneto he basileia tou kosmou tou Kyriou hemon kai tou Christou autou&rdquo;) is in the aorist tense &mdash; &lsquo;has become&rsquo; &mdash; announcing as already accomplished what will be fully manifested in chapters 19-22. The twenty-four elders worship: &lsquo;We give thanks to you, Lord God Almighty, the One who is and who was, because you have taken your great power and have begun to reign.&rsquo; Their song (vv.17-18) encompasses the judgment of the dead, the rewarding of servants and prophets, and the destruction of those who destroy the earth. The seventh trumpet marks the theological climax of the first half of Revelation&rsquo;s central vision: the oath of no more delay (10:6-7) has been fulfilled; the mystery of God is being completed; the declaration of Christ&rsquo;s eternal kingship rings through heaven. The ark of the covenant appearing in the heavenly temple (v.19) recalls the original ark in the wilderness tabernacle &mdash; the symbol of God&rsquo;s covenant presence &mdash; now revealed in heaven, signifying that God&rsquo;s covenant promises are upheld and his presence is uncontained by any earthly temple."
  },
  {
    id: "numbers-tribulation",
    color: TEAL,
    title: "The Numbers: 1,260 Days, 42 Months, 3.5 Years &mdash; Daniel&rsquo;s Half-Week",
    body: "Revelation 11 is saturated with a single time period expressed in multiple forms: 42 months (v.2, the period of Gentile trampling); 1,260 days (v.3, the period of the witnesses&rsquo; prophecy); 3.5 days (v.9,11, the period the witnesses&rsquo; bodies lie unburied). All of these point back to Daniel&rsquo;s &ldquo;time, times and half a time&rdquo; (Daniel 7:25; 12:7) &mdash; the 3.5 years during which the fourth beast makes war against the saints and they are handed over to him. In Daniel, this period follows the prophetic calendar of 70 weeks (Daniel 9:24-27), and the half-week represents the final period of tribulation before the end. The 1,260 days also appears in Revelation 12:6 (the woman is protected for 1,260 days) and the 42 months in 13:5 (the beast exercises authority for 42 months). These repeated time markers function as a structural key: they all refer to the same period of tribulation &mdash; the period of the church&rsquo;s witness, suffering, and apparent defeat between the ascension of Christ and his return. Whether this is a literal 3.5 years or a symbolic period representing the whole of the church age between the first and second comings is one of the fundamental interpretive questions in Revelation studies. What is unambiguous is that the period is bounded: it has a beginning and an end, and God has determined both."
  },
  {
    id: "witness-martyrdom",
    color: ROSE,
    title: "Faithful Witness unto Death: The Theology of Martyria",
    body: "The two witnesses embody a theological principle that runs through all of Revelation: faithful witness (&ldquo;martyria&rdquo;) and martyrdom are more closely related than the English words suggest. The Greek word &ldquo;martys&rdquo; means witness before it comes to mean martyr &mdash; but the history of the early church was filled with witnesses whose testimony cost them their lives, and the word gradually acquired its double meaning. In Revelation 11, the witnesses prophesy for 3.5 years and are then killed &mdash; their testimony completed (&ldquo;telesosi&rdquo;, v.7) before the beast kills them. Their death is not a defeat; it is the culmination of their witness. The pattern is explicitly Christological: like their Lord, they are killed, their bodies are displayed publicly, and then they are raised from the dead and ascended to heaven. The resurrection reversal is the key: what appears to be the beast&rsquo;s triumph over prophetic witness turns out to be the moment that produces the most dramatic response &mdash; the survivors give glory to God (v.13). The death and resurrection of faithful witnesses does what no amount of direct judgment can accomplish: it breaks through human hardness. This is the theology of the cross applied to the church&rsquo;s mission. The church that witnesses faithfully, even unto death, participates in the pattern of its crucified and risen Lord &mdash; and through that participation, accomplishes what coercive power never could."
  },
];

const VERSE_SECTIONS = [
  {
    id: "v1-2",
    color: GOLD,
    title: "Verses 1-2: The Measuring Rod; the Outer Court Given to the Gentiles",
    body: "John is given a measuring rod like a staff and told to rise and measure the temple of God and the altar and those who worship there. This commission echoes Ezekiel 40-48 (where an angel measures the new temple in extraordinary detail) and Zechariah 2:1-5 (where a man with a measuring line goes to measure Jerusalem). The measuring signifies God&rsquo;s knowledge and protection of what belongs to him. But the instruction not to measure the outer court is equally significant: the outer court has been given to the nations (Gentiles), who will trample the holy city for 42 months. This language echoes Daniel 8:13 (&lsquo;the trampling of the sanctuary and the host&rsquo;) and Luke 21:24 (&lsquo;Jerusalem will be trampled on by the Gentiles until the times of the Gentiles are fulfilled&rsquo;). The 42 months is Daniel&rsquo;s tribulation period (Daniel 7:25; 12:7) expressed in months: 3.5 years. The outer court given to the nations may represent those elements of the church&rsquo;s existence that are exposed and vulnerable in the world &mdash; its public presence, its physical structures, its political standing &mdash; while the inner worship (the temple and altar) remains under divine protection. Those who worship are measured and known to God even while the outer court is trampled."
  },
  {
    id: "v3-6",
    color: TEAL,
    title: "Verses 3-6: The Two Witnesses and Their Powers",
    body: "God grants authority to his two witnesses to prophesy for 1,260 days (= 42 months = 3.5 years) clothed in sackcloth. The sackcloth signals mourning, urgency, and penitential prophesying &mdash; not triumphalist proclamation but grief-laden witness to a world in rebellion. They are identified as the two olive trees and the two lampstands who stand before the Lord of the earth &mdash; direct allusion to Zechariah 4:1-14, where the olive trees supply oil for the lampstand in the vision of the temple&rsquo;s rebuilding. In Zechariah, the two olive trees represent the two anointed leaders (Zerubbabel the king and Joshua the priest) &mdash; the royal and priestly offices. In Revelation, the two witnesses may represent the prophetic church in its dual vocation as a royal priesthood (1 Peter 2:9). Their powers are unmistakably those of Moses and Elijah: fire from their mouths devours enemies (2 Kings 1:10-12); they can shut the sky so no rain falls (1 Kings 17:1 &mdash; Elijah&rsquo;s three-and-a-half-year drought, the same period as the witnesses&rsquo; ministry: Luke 4:25; James 5:17); they can turn waters to blood and strike the earth with every kind of plague (Exodus 7-12). The pairing of Moses and Elijah recalls the Transfiguration and positions the witnesses within the full stream of Israel&rsquo;s prophetic and legal tradition."
  },
  {
    id: "v7-8",
    color: ROSE,
    title: "Verses 7-8: The Beast Kills the Witnesses; the Great City",
    body: "&ldquo;Now when they have finished their testimony, the beast that comes up from the Abyss will attack them, and overpower and kill them.&rdquo; The crucial word is &ldquo;finished&rdquo; (&ldquo;telesosi&rdquo; &mdash; aorist subjunctive of &ldquo;teleo,&rdquo; to complete, to accomplish). The beast cannot act until the witnesses&rsquo; testimony is complete. This mirrors the pattern of Jesus&rsquo; passion: &ldquo;No one takes my life from me, but I lay it down of my own accord&rdquo; (John 10:18); the hour of the enemy&rsquo;s power is permitted only when the divine purpose has been accomplished. The beast from the Abyss here makes his first active appearance in Revelation &mdash; he will be fully described in chapters 13 and 17. His origin in the Abyss connects him to the demonic source of chapter 9&rsquo;s scorpion-locusts and to 17:8 (&lsquo;the beast, which you saw, once was, now is not, and yet will come up out of the Abyss&rsquo;). Their bodies lie in the street of the great city that is figuratively (&ldquo;pneumatikos&rdquo; &mdash; spiritually, i.e., symbolically) called Sodom and Egypt &mdash; where also their Lord was crucified. The combination of Sodom (moral corruption and divine judgment), Egypt (slavery and opposition to God&rsquo;s people), and &ldquo;where their Lord was crucified&rdquo; (Jerusalem) identifies this city not as one specific city but as a symbol of every city that stands in opposition to God and his people."
  },
  {
    id: "v9-10",
    color: PURPLE,
    title: "Verses 9-10: The World&rsquo;s Celebration; Bodies Left Unburied",
    body: "&ldquo;For three and a half days some from every people, tribe, language and nation will gaze on their bodies and refuse them burial. The inhabitants of the earth will gloat over them and will celebrate by sending each other gifts, because these two prophets had tormented those who live on the earth.&rdquo; The universal gaze &mdash; &ldquo;from every people, tribe, language and nation&rdquo; (the fourfold formula of universality that appears throughout Revelation) &mdash; may reflect the ancient world&rsquo;s impossibility of truly universal instant visibility, which makes this one of the passages that took on new resonance in the age of global media. The refusal of burial was the ultimate act of contempt in the ancient world: to leave a body unburied was to deny the deceased even the minimum dignity of death (cf. Jeremiah 22:19 &mdash; Jehoiakim will &lsquo;have the burial of a donkey&rsquo;). The celebration and gift-giving among those who dwell on the earth is a dark parody of festive joy &mdash; analogous to Purim celebrations in the book of Esther (Esther 9:19,22), where the Jewish people celebrated their deliverance, but here inverted: the world celebrates what it believes is the permanent silencing of the prophetic voice. The reason given &mdash; &lsquo;these two prophets had tormented those who live on the earth&rsquo; &mdash; reveals that the prophetic word is experienced by those who resist it as torment: truthful witness to a world committed to falsehood is inherently uncomfortable."
  },
  {
    id: "v11-12",
    color: GREEN,
    title: "Verses 11-12: Resurrection and Ascent to Heaven",
    body: "&ldquo;But after the three and a half days the breath of life from God entered them, and they stood on their feet, and terror struck those who saw them. Then they heard a loud voice from heaven saying to them, &lsquo;Come up here.&rsquo; And they went up to heaven in a cloud, while their enemies looked on.&rdquo; The breath of life (&ldquo;pneuma zoes ek tou theou&rdquo; &mdash; breath/spirit of life from God) entering the witnesses echoes Genesis 2:7 (God breathes into Adam&rsquo;s nostrils the breath of life) and Ezekiel 37:10 (the breath enters the dry bones and they stand up, a very great army). The structural parallel with the resurrection of Christ is unmistakable: death, entombment (or lying in the street), three-day period, resurrection, ascent. The command &lsquo;Come up here&rsquo; (Revelation 4:1 &mdash; the same call John heard before the throne vision) links the witnesses&rsquo; ascent to the heavenly realm of divine worship and authority. They ascend in a cloud &mdash; the vehicle of divine transport (Acts 1:9; Daniel 7:13; Matthew 24:30) &mdash; while their enemies watch. The watching enemies&rsquo; experience is exactly opposite to the world&rsquo;s celebration in vv.9-10: where before they gloated, now they are terrified. The reversal is total, sudden, and publicly witnessed."
  },
  {
    id: "v13",
    color: TEAL,
    title: "Verse 13: The Earthquake; Survivors Give Glory to God",
    body: "&ldquo;At that very hour there was a severe earthquake and a tenth of the city collapsed. Seven thousand people were killed in the earthquake, and the survivors were terrified and gave glory to the God of heaven.&rdquo; The earthquake accompanies divine action throughout Scripture (1 Kings 19:11-12; Isaiah 29:6; Matthew 27:51-54; 28:2; Acts 16:26; Revelation 6:12; 8:5; 11:13,19; 16:18). Here it is a direct response to the witnesses&rsquo; resurrection and ascent. The numbers are specific: a tenth of the city and 7,000 people. In Elijah&rsquo;s time, God told him that 7,000 had not bowed to Baal (1 Kings 19:18) &mdash; the 7,000 who die here may be an ironic reversal of that remnant. The most remarkable element is the response of the survivors: they &ldquo;gave glory to the God of heaven.&rdquo; This phrase &mdash; &ldquo;edosan doxan to theo tou ouranou&rdquo; &mdash; is not used in Revelation to describe genuine conversion, but it represents the acknowledgment of divine reality that the trumpet judgments of chapters 8-9 entirely failed to produce. Whether this represents genuine repentance or merely fearful recognition remains debated. What is clear is that the witness of the two &mdash; including their death and resurrection &mdash; has broken through to produce a response that no preceding judgment could generate."
  },
  {
    id: "v14-15",
    color: PURPLE,
    title: "Verses 14-15: The Second Woe Past; the Seventh Trumpet and the Kingdom Declaration",
    body: "&ldquo;The second woe has passed; the third woe is coming soon. The seventh angel sounded his trumpet, and there were loud voices in heaven, which said: &lsquo;The kingdom of the world has become the kingdom of our Lord and of his Messiah, and he will reign for ever and ever.&rsquo;&rdquo; The structural marker of v.14 closes the extended second woe (which began with the sixth trumpet in 9:13 and encompassed chapters 10-11). The seventh trumpet does not bring a new plague but a heavenly declaration. This is consistent with the pattern of the seventh seal (8:1 &mdash; silence in heaven) and the seventh bowl (16:17 &mdash; a voice saying &lsquo;It is done!&rsquo;): the seventh of each series is a completion-declaration rather than an escalation. The declaration &mdash; &lsquo;The kingdom of the world has become the kingdom of our Lord and of his Messiah&rsquo; &mdash; is the theological heart of all of Revelation: God&rsquo;s reclamation of his world from all competing powers is being accomplished in Christ. The aorist &ldquo;egeneto&rdquo; (has become) announces as already accomplished in heaven what chapters 12-22 will describe as still unfolding on earth &mdash; the already-and-not-yet that characterizes all of Revelation&rsquo;s eschatology. &lsquo;He will reign for ever and ever&rsquo; (&ldquo;eis tous aionas ton aionon&rdquo; &mdash; into the ages of the ages) echoes the doxologies of chapters 4-5 and declares the absolute, eternal character of Christ&rsquo;s reign."
  },
  {
    id: "v16-18",
    color: GOLD,
    title: "Verses 16-18: The Elders&rsquo; Worship Song",
    body: "The twenty-four elders who sit on their thrones before God fall on their faces and worship God, saying: &lsquo;We give thanks to you, Lord God Almighty, the One who is and who was, because you have taken your great power and have begun to reign. The nations were angry, and your wrath has come. The time has come for judging the dead, and for rewarding your servants the prophets and your people who revere your name, both great and small &mdash; and for destroying those who destroy the earth.&rsquo; This worship song is a compressed summary of the entire eschatological program: divine wrath against the nations (Psalm 2:1: &lsquo;Why do the nations conspire and the peoples plot in vain?&rsquo; &mdash; Psalm 2 is the background of this entire section); judgment of the dead; reward of the prophets and the saints; and the destruction of those who destroy the earth. The final phrase &mdash; &ldquo;diactheirai tous diaphtheiirontas ten gen&rdquo; &mdash; is a remarkable wordplay in Greek: to destroy (&ldquo;diaphtheirein&rdquo;) those who destroy (&ldquo;diaphtheirein&rdquo;). Those who have spent their power in destroying what God made will themselves be destroyed. The description of God as &lsquo;the One who is and who was&rsquo; is notably shorter than the formula in 1:4 (&lsquo;who is, and who was, and who is to come&rsquo;) and 4:8 &mdash; the &lsquo;who is to come&rsquo; is no longer included because he has now come; the future tense has become the present."
  },
  {
    id: "v19",
    color: ROSE,
    title: "Verse 19: The Heavenly Temple Opened; the Ark of the Covenant Revealed",
    body: "&ldquo;Then God&rsquo;s temple in heaven was opened, and within his temple was seen the ark of his covenant. And there came flashes of lightning, rumblings, peals of thunder, an earthquake and a severe hailstorm.&rdquo; This final verse of chapter 11 is simultaneously a conclusion and an opening. The opening of the heavenly temple reveals the ark of the covenant &mdash; which had been lost since the Babylonian conquest and whose fate Jeremiah 3:16 suggests will be irrelevant in the new covenant era (it will no longer be remembered or missed). Its appearance in heaven declares that God&rsquo;s covenant faithfulness is not lost or broken &mdash; it has its origin and permanence in heaven, not in earthly structures that can be destroyed. The ark was the symbol of God&rsquo;s presence and the locus of atonement (Leviticus 16); seeing it in heaven declares that what the earthly ark pointed to &mdash; divine presence and atonement &mdash; is eternally real in God himself. The lightning, thunder, earthquake, and hail echo the Sinai theophany (Exodus 19:16-19) and recur at each structural climax in Revelation (8:5; 11:19; 16:18), growing in intensity each time. The theophanic phenomena mark this as a moment of direct divine self-disclosure: heaven is opened and God is seen to be fully present, fully powerful, and fully faithful to his covenant people."
  },
];

const APPLICATION_SECTIONS = [
  {
    id: "app1",
    color: TEAL,
    title: "The Two Witnesses as a Model of Faithful Witness",
    body: "Whatever their specific identity, the two witnesses model a pattern of faithful witness that Revelation calls the church to follow. They prophesy in sackcloth &mdash; in grief, not triumph; in mourning, not superiority. Their prophecy spans the full period of tribulation (1,260 days). They have the power to speak the truth even against the most powerful forces of their age (fire from their mouths, powers like Moses and Elijah). And when they have finished their testimony, the beast kills them &mdash; and this does not negate or undo their witness; it completes it. The willingness to bear faithful witness even unto death is the defining characteristic of the &ldquo;martyria&rdquo; (testimony/martyrdom) that Revelation calls for. The word &ldquo;martys&rdquo; (witness) began in Greek as a legal term for someone who testifies in court; in Revelation it begins to carry the additional sense of one who testifies at the cost of one&rsquo;s life, because that is what many of its original readers had experienced or feared. For contemporary Christians in contexts of religious freedom, the call to &ldquo;faithful witness&rdquo; rarely involves the threat of death &mdash; but it still involves the willingness to speak what is true in the face of social pressure, reputational cost, and cultural hostility. The two witnesses model a prophetic posture that is simultaneously grief-laden (sackcloth) and power-filled (fire and plagues) &mdash; neither naive optimism nor defeated despair, but the complex faithful witness of those who know both the sweetness and the bitterness of God&rsquo;s word."
  },
  {
    id: "app2",
    color: ROSE,
    title: "What Sustains Us When the Beast Appears to Win?",
    body: "The death of the two witnesses and the world&rsquo;s celebration over their bodies is one of Revelation&rsquo;s most pastorally important moments: it names the experience of apparent defeat that many faithful witnesses have known. Jeremiah was thrown in a cistern and his enemies prevailed (Jeremiah 38). Elijah fled into the wilderness in exhaustion and despair (1 Kings 19:4). John the Baptist was beheaded (Matthew 14:10). Stephen was stoned (Acts 7:54-60). The history of the church includes periods in which the prophetic witness appears to have been silenced, the church appears to have lost, and the powers that oppose God appear to have triumphed. Revelation 11 names this experience and then refuses to let it be the last word. After 3.5 days, the breath of life enters them. The apparent victory of the beast is always temporary. This is the hope that sustains faithful witness through periods of apparent defeat: not the promise of immediate deliverance or earthly vindication, but the certainty of resurrection. The pattern of the two witnesses is the pattern of the cross: death followed by resurrection, apparent defeat followed by vindication, the enemies&rsquo; gloating followed by terror. For those who are living through the 3.5 days &mdash; the period of lying in the street, being mocked, apparently silenced &mdash; Revelation 11 says: this is not the end of the story. The breath of life is coming."
  },
  {
    id: "app3",
    color: GOLD,
    title: "The Kingdom Declaration: Living in the Light of Revelation 11:15",
    body: "&lsquo;The kingdom of the world has become the kingdom of our Lord and of his Messiah, and he will reign for ever and ever.&rsquo; This declaration &mdash; the theological center of Revelation &mdash; is spoken as a heavenly present reality, not a future hope. In the already/not-yet structure of Revelation&rsquo;s eschatology, this is the &lsquo;already&rsquo;: in heaven, in Christ, in the purposes of God, the kingdom transfer has been accomplished. The church that grasps this lives differently than one that does not. It does not see its mission as establishing the kingdom (Christ has already done that through his death and resurrection) but as bearing witness to a kingdom that already exists and is already victorious. It does not despair when earthly powers seem to dominate (the kingdom of the world is already becoming the kingdom of Christ in ways that are not yet fully visible). It does not confuse temporal political power with ultimate reality. Colossians 1:13 expresses the same already-accomplished truth: God &lsquo;has rescued us from the dominion of darkness and brought us into the kingdom of the Son he loves.&rsquo; The church is already a colony of the kingdom whose final universalization the seventh trumpet announces. To live in the light of Revelation 11:15 is to pray &lsquo;Your kingdom come&rsquo; with the confidence of those who know, not merely hope, that the answer is &lsquo;yes.&rsquo;"
  },
  {
    id: "app4",
    color: PURPLE,
    title: "The Ark of the Covenant Revealed: God&rsquo;s Faithfulness Is Permanent",
    body: "The appearance of the ark of the covenant in the heavenly temple (v.19) is a quiet but profound theological statement. The ark &mdash; the symbol of God&rsquo;s presence, covenant, and atonement &mdash; had been lost to Babylon (though Jeremiah hid it according to 2 Maccabees 2:1-8; Jewish tradition holds various accounts of its fate). For centuries it was absent from the second temple: the Most Holy Place stood empty, the ark gone. Revelation 11:19 reveals that the ark was never truly lost &mdash; its heavenly original was always present in the true temple. The earthly ark was a copy of the heavenly reality (Hebrews 8:5: Moses was told &lsquo;See to it that you make everything according to the pattern shown you on the mountain&rsquo;; Hebrews 9:23-24). The destruction of the earthly temple and the loss of the earthly ark cannot touch the heavenly reality they were designed to represent. For the church in every age, the ark&rsquo;s appearance in the heavenly temple is an assurance that God&rsquo;s covenant faithfulness is not housed in any earthly structure that can be destroyed &mdash; not in a temple, not in a denomination, not in a building, not in a political arrangement. The covenant stands in heaven. God&rsquo;s presence is not contingent on the survival of any earthly institution. This is a word of profound stability for a church that often ties its confidence to earthly structures rather than the heavenly reality those structures are meant to point toward."
  },
];

export default function Revelation11GuidePage() {
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
            <span style={{ background: TEAL, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>REVELATION</span>
            <span style={{ color: MUTED, fontSize: 14 }}>Chapter 11 &bull; 19 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 900, margin: "0 0 16px", lineHeight: 1.15, color: TEXT }}>
            Revelation 11: The Two Witnesses, the Beast, and the Seventh Trumpet
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,2vw,1.1rem)", color: MUTED, maxWidth: 700, lineHeight: 1.75, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "One of Revelation&rsquo;s most contested chapters. John measures the temple while the outer court is given to the nations. Two witnesses prophesy for 1,260 days in sackcloth, are killed by the beast from the Abyss, lie unburied for 3.5 days, are raised to life and ascend to heaven &mdash; and the seventh trumpet sounds the eternal declaration of Christ&rsquo;s reign." }}
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
                color: activeTab === t ? TEAL : MUTED,
                borderBottom: activeTab === t ? `2px solid ${TEAL}` : "2px solid transparent",
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
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Overview of Revelation 11</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Revelation 11 is one of the most theologically dense and debated chapters in the entire book. It brings the second woe (and the extended interlude of chapters 10-11) to a close and culminates in the seventh trumpet &mdash; the declaration of Christ&rsquo;s eternal reign. Its three major sections are the measuring of the temple (vv.1-2), the ministry, death, resurrection, and ascent of the two witnesses (vv.3-13), and the seventh trumpet and heavenly worship (vv.14-19)." }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
              {[
                { label: "Book", value: "Revelation" },
                { label: "Chapter", value: "11" },
                { label: "Verse Count", value: "19" },
                { label: "Literary Type", value: "Prophetic interlude + trumpet" },
                { label: "Position", value: "End of second woe / seventh trumpet" },
                { label: "Central Act", value: "Witness, death, resurrection, kingdom" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: TEXT }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>Structure of Chapter 11</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Revelation 11 falls into three sections. Verses 1-2 contain the measuring of the temple, the exclusion of the outer court, and the 42 months. Verses 3-13 contain the full narrative of the two witnesses: commission, powers, death, desecration, resurrection, ascent, and earthquake. Verses 14-19 contain the structural marker (second woe past), the seventh trumpet, the heavenly voices, the elders&rsquo; worship song, and the opening of the heavenly temple with the ark." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${GOLD}33`, padding: 14 }}>
                  <div style={{ color: GOLD, fontWeight: 700, marginBottom: 8, fontSize: 13 }}>The Temple (vv.1-2)</div>
                  <ul style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, paddingLeft: 14, margin: 0 }}>
                    <li>Measuring rod given to John</li>
                    <li>Measure temple, altar, worshipers</li>
                    <li>Outer court excluded</li>
                    <li>Given to Gentiles: 42 months</li>
                  </ul>
                </div>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${TEAL}33`, padding: 14 }}>
                  <div style={{ color: TEAL, fontWeight: 700, marginBottom: 8, fontSize: 13 }}>The Witnesses (vv.3-13)</div>
                  <ul style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, paddingLeft: 14, margin: 0 }}>
                    <li>1,260 days in sackcloth</li>
                    <li>Powers of Moses and Elijah</li>
                    <li>Beast kills them</li>
                    <li>3.5 days unburied; celebration</li>
                    <li>Resurrection and ascent; earthquake</li>
                  </ul>
                </div>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${PURPLE}33`, padding: 14 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, marginBottom: 8, fontSize: 13 }}>The Trumpet (vv.14-19)</div>
                  <ul style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, paddingLeft: 14, margin: 0 }}>
                    <li>Second woe past</li>
                    <li>Seventh trumpet sounds</li>
                    <li>Kingdom declaration</li>
                    <li>Elders worship</li>
                    <li>Ark of covenant revealed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 16, color: TEXT }}>Chapter 11 at a Glance</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "11:1-2", color: GOLD, label: "Measuring", desc: "Temple, altar, and worshipers measured; outer court given to Gentiles for 42 months" },
                  { ref: "11:3-4", color: TEAL, label: "Two Witnesses", desc: "1,260 days in sackcloth; the two olive trees and two lampstands before the Lord" },
                  { ref: "11:5-6", color: GREEN, label: "Their Powers", desc: "Fire from mouths; shut the sky; turn water to blood; strike with every plague" },
                  { ref: "11:7-8", color: ROSE, label: "Beast Kills Them", desc: "Beast from the Abyss kills the witnesses; bodies in the street of the great city" },
                  { ref: "11:9-10", color: PURPLE, label: "World Gloats", desc: "All peoples gaze at bodies 3.5 days; refuse burial; celebrate and send gifts" },
                  { ref: "11:11-12", color: GREEN, label: "Resurrection", desc: "Breath of life enters them; they stand; terror; &lsquo;Come up here&rsquo; &mdash; ascend in a cloud" },
                  { ref: "11:13", color: TEAL, label: "Earthquake", desc: "A tenth of the city falls; 7,000 die; survivors terrified and give glory to God" },
                  { ref: "11:14-15", color: PURPLE, label: "Seventh Trumpet", desc: "Second woe past; voices declare: the kingdom of the world has become Christ&rsquo;s" },
                  { ref: "11:16-18", color: GOLD, label: "Elders Worship", desc: "Twenty-four elders give thanks; song of judgment, reward, and the destruction of destroyers" },
                  { ref: "11:19", color: ROSE, label: "Ark Revealed", desc: "Heavenly temple opened; ark of the covenant seen; lightning, thunder, earthquake, hail" },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 13, minWidth: 60, paddingTop: 2 }}>{item.ref}</span>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 13, minWidth: 120, paddingTop: 2 }}>{item.label}</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12 }}>Why Revelation 11 Is Contested</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Revelation 11 is among the most debated passages in Scripture because three major interpretive questions each admit multiple serious answers, and the chapter&rsquo;s meaning shifts significantly depending on which answer is adopted. (1) What is the temple? A literal Jerusalem temple, the church as God&rsquo;s spiritual temple (1 Corinthians 3:16; Ephesians 2:21), or the heavenly temple? (2) Who are the two witnesses? Literal historical individuals (Elijah and Enoch or Moses); the church&rsquo;s corporate prophetic witness; specific ministry offices (Law and Prophets, or word and Spirit)? (3) What time period is represented? A literal 3.5 years at the end of history, the entire church age from the first to the second coming, or the period of the Roman persecutions in John&rsquo;s era? These questions shape the entire reading. What is not contested is the chapter&rsquo;s central theological claim: faithful witness will be opposed, apparently defeated, and ultimately vindicated by resurrection &mdash; and the kingdom of the world will become the kingdom of Christ." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12, color: TEXT }}>Old Testament Background</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Revelation 11 is saturated with Old Testament allusions. The measuring echoes Ezekiel 40-48 and Zechariah 2. The two olive trees and lampstands come from Zechariah 4:1-14. The witnesses&rsquo; powers echo Elijah (1 Kings 17:1; 2 Kings 1:10-12) and Moses (Exodus 7-12). The 1,260 days comes from Daniel 7:25 and 12:7. The kingdom declaration echoes Psalm 2 and Daniel 7:14. The ark of the covenant in the heavenly temple recalls Hebrews 8-9&rsquo;s teaching on the heavenly original of the earthly tabernacle (Hebrews 8:5; 9:23-24)." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Ezekiel 40:3",
                  "Zechariah 4:14",
                  "1 Kings 17:1",
                  "2 Kings 1:10",
                  "Daniel 7:14",
                  "Daniel 7:25",
                  "Psalm 2:1",
                  "Hebrews 9:23",
                  "Ezekiel 37:10",
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
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Key Themes in Revelation 11</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Revelation 11&rsquo;s major themes range from the nature of faithful prophetic witness and the theology of martyrdom to the time period of tribulation, the significance of the two witnesses, and the eschatological declaration of the seventh trumpet. Each theme carries deep pastoral and theological implications for the church in every age." }}
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
                  { word: "martys", transliteration: "(MAR-tys)", meaning: "witness, one who testifies &mdash; the root of the English &lsquo;martyr.&rsquo; In the New Testament, &lsquo;martys&rsquo; begins as a legal term for a courtroom witness and becomes, through the experience of the early church, the term for one whose witness costs them their life. In Revelation, &lsquo;martyria&rsquo; (testimony/witness) and death are closely linked (6:9; 11:7; 12:11; 17:6; 20:4)." },
                  { word: "propheteuo", transliteration: "(pro-phe-TEU-o)", meaning: "to prophesy &mdash; to speak forth God&rsquo;s word with authority and urgency. The two witnesses&rsquo; ministry is called &lsquo;prophesying&rsquo; (v.3). The entire book of Revelation is called a &lsquo;prophecy&rsquo; (1:3; 22:7,10,18,19). In the biblical tradition, prophecy is less about predicting the future than about declaring God&rsquo;s character, purposes, and requirements to a specific audience." },
                  { word: "Abyssos", transliteration: "(A-BYS-sos)", meaning: "the Abyss, the bottomless pit &mdash; the demonic prison beneath the earth. The beast &lsquo;that comes up from the Abyss&rsquo; (v.7) is distinguished from human political power by his origin in the demonic realm. He will be more fully described in chapters 13 and 17, and his final destination is the same Abyss that the angel of 20:1-3 will lock him into during the millennium." },
                  { word: "anastasis", transliteration: "(a-NAS-ta-sis)", meaning: "resurrection &mdash; literally &lsquo;a standing up again&rsquo; (from &lsquo;ana&rsquo; + &lsquo;histemi&rsquo;). The resurrection of the two witnesses in v.11 (&lsquo;they stood on their feet&rsquo; &mdash; &lsquo;anesteson epi tous podas auton&rsquo;) echoes the resurrection language of Ezekiel 37:10 and anticipates the &lsquo;first resurrection&rsquo; of 20:5-6. The witnesses&rsquo; resurrection declares that death is not the final word for those whose lives are hidden with God." },
                  { word: "basileia", transliteration: "(ba-si-LEI-a)", meaning: "kingdom, reign &mdash; the central concept of Jesus&rsquo; proclamation (&lsquo;the kingdom of God has come near&rsquo;, Mark 1:15). In Revelation 11:15, &lsquo;basileia&rsquo; appears in the declaration that the kingdom of the world (&lsquo;he basileia tou kosmou&rsquo;) has become the kingdom of Christ (&lsquo;tou Kyriou hemon kai tou Christou autou&rsquo;). The transfer of sovereignty is eschatological in scope but has been accomplished in principle in the death and resurrection of Jesus." },
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
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>The 3.5-Year Pattern: Daniel&rsquo;s Half-Week in Revelation</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The time period of 3.5 years appears in Revelation in three forms: 42 months, 1,260 days, and &lsquo;a time, times and half a time&rsquo; (12:14). All three derive from Daniel&rsquo;s half-week of years &mdash; the half of the prophetic &lsquo;week&rsquo; (seven years) described in Daniel 9:27 and associated with the tribulation period of Daniel 7:25 and 12:7. In Elijah&rsquo;s ministry, the drought that shut the heavens lasted exactly 3.5 years (Luke 4:25; James 5:17), making Elijah a historical type of the witnesses&rsquo; 1,260-day ministry. The 3.5 years appears in Revelation as: 42 months of Gentile trampling (11:2); 1,260 days of the two witnesses&rsquo; prophecy (11:3); 1,260 days of the woman&rsquo;s protection in the wilderness (12:6); 42 months of the beast&rsquo;s authority (13:5); and &lsquo;a time, times and half a time&rsquo; of the woman&rsquo;s nurturing in the wilderness (12:14)." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12 }}>
                {[
                  { ref: "11:2", form: "42 months", context: "Gentiles trample the outer court" },
                  { ref: "11:3", form: "1,260 days", context: "Two witnesses prophesy" },
                  { ref: "12:6", form: "1,260 days", context: "Woman protected in wilderness" },
                  { ref: "12:14", form: "Time, times, half a time", context: "Woman nourished in wilderness" },
                  { ref: "13:5", form: "42 months", context: "Beast exercises authority" },
                ].map(item => (
                  <div key={item.ref} style={{ background: BG, borderRadius: 8, border: `1px solid ${TEAL}33`, padding: 12 }}>
                    <div style={{ color: TEAL, fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{item.ref}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{item.form}</div>
                    <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.4 }}>{item.context}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Verse by Verse: Revelation 11:1-19</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "A careful walk through all 19 verses of Revelation 11, examining the structure, Old Testament background, and meaning of each passage. Click any section to expand the commentary." }}
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
                dangerouslySetInnerHTML={{ __html: "Hover over any reference to see the verse text. These are the key passages that illuminate Revelation 11&rsquo;s Old Testament background and theological significance." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Revelation 11:3",
                  "Revelation 11:7",
                  "Revelation 11:11",
                  "Revelation 11:15",
                  "Revelation 11:19",
                  "Zechariah 4:14",
                  "Daniel 7:25",
                  "Ezekiel 37:10",
                  "1 Kings 17:1",
                  "Psalm 2:1",
                  "Hebrews 8:5",
                  "Luke 4:25",
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
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Application: Faithful Witness, Apparent Defeat, and the Hope of Resurrection</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Revelation 11&rsquo;s story of the two witnesses is, among other things, Revelation&rsquo;s fullest description of what faithful witness looks like in the context of suffering and apparent defeat. The chapter models a prophetic posture that the church in every age is called to inhabit &mdash; bearing testimony in sackcloth, confident in the resurrection pattern, anchored in the kingdom declaration of 11:15." }}
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
                  "The two witnesses prophesy for 1,260 days in sackcloth &mdash; in mourning, not triumph. What would it mean for your own witness or ministry to be characterized more by the sackcloth posture of grief-laden faithfulness than by confident triumphalism? Where has the sackcloth posture felt most true to your actual experience of bearing witness?",
                  "The world celebrates when the witnesses are killed (vv.9-10) because &lsquo;these two prophets had tormented those who live on the earth.&rsquo; What does this reveal about the nature of faithful prophetic witness? When has your witness been experienced by others as uncomfortable or unwelcome &mdash; and how do you hold that without either softening the message or becoming harsh?",
                  "After the witnesses&rsquo; resurrection, the survivors give glory to God (v.13) &mdash; something the trumpet judgments entirely failed to produce. What does this suggest about the relative power of faithful witness (including martyrdom and resurrection) compared to coercive divine judgment? How does this shape your approach to evangelism?",
                  "The kingdom declaration of 11:15 announces as already accomplished in heaven what is still unfolding on earth. In what areas of your life do you need to hear this declaration most urgently? Where do you find it hardest to believe that &lsquo;the kingdom of the world has become the kingdom of our Lord and of his Messiah&rsquo;?",
                  "The ark of the covenant appears in the heavenly temple (v.19), revealing that God&rsquo;s covenant faithfulness is permanently secure in heaven regardless of what happens to earthly structures. What earthly structures &mdash; institutional, denominational, cultural &mdash; have you been tempted to tie your confidence to? How does the heavenly ark speak to that temptation?",
                  "The two witnesses follow the pattern of Jesus: death, three days, resurrection, ascension. Where in your experience of ministry, relationships, or suffering do you recognize this cruciform pattern? What does it mean practically to hold on to the resurrection hope during the &lsquo;3.5 days&rsquo; &mdash; the period of lying in the street?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: TEAL, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12 }}>Video Resources: Revelation 11</h3>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Deepen your study of the two witnesses, the seventh trumpet&rsquo;s kingdom declaration, and the theology of faithful witness through suffering and death through these video resources." }}
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

            <div style={{ background: `linear-gradient(135deg, #05050f 0%, ${CARD} 100%)`, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>Closing: The Kingdom Has Come and Is Coming</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Revelation 11 holds together what is often held apart: the reality of faithful witness that is opposed, apparently defeated, and left for dead; and the declaration that the kingdom of the world has already become the kingdom of Christ. These are not two separate truths &mdash; the death and resurrection of the witnesses is the means by which the kingdom declaration in v.15 rings out. The church does not advance the kingdom by avoiding suffering but by bearing faithful witness through it, in the pattern of the Lord who was crucified and raised. The seventh trumpet does not sound because the church has been victorious in any earthly sense; it sounds because the witnesses have been faithful unto death and God has raised them. The most important word in Revelation 11 may be the simple structural connector between v.13 and v.14: &lsquo;The second woe has passed.&rsquo; The period of suffering is bounded; it has an end. The kingdom that the seventh trumpet declares is not a future possibility but a present reality in heaven &mdash; and it will be fully manifested on earth in chapters 19-22. To live in the light of Revelation 11 is to live as witnesses who know that resurrection follows death, that the kingdom is already Christ&rsquo;s, and that the ark of his covenant faithfulness is safe in heaven whatever happens to any earthly structure." }}
              />
              <blockquote style={{ borderLeft: `4px solid ${TEAL}`, paddingLeft: 20, margin: 0 }}>
                <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;The kingdom of the world has become the kingdom of our Lord and of his Messiah, and he will reign for ever and ever.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13 }}>-- Revelation 11:15 (NIV)</cite>
              </blockquote>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
