"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";
const ACCENT = GOLD;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

type Hab2Tab = "overview" | "themes" | "verse" | "application";

const OVERVIEW_SECTIONS = [
  {
    color: GOLD,
    title: "The Prophet on the Watchtower",
    body: "Habakkuk 2 opens with one of the most distinctive postures in all prophetic literature: the prophet deliberately ascending his watchtower and stationing himself to wait for God's answer. 'I will take my stand at my watchpost and station myself on the tower, and look out to see what he will say to me, and what I will answer concerning my complaint' (2:1). This is not passive resignation but active, expectant waiting -- a military metaphor applied to spiritual discernment. The watchman on a city tower was responsible for scanning the horizon for threats and messengers alike, prepared to report what he saw. Habakkuk takes that same posture in prayer: deliberately positioned, eyes open, ready to receive. The image became one of the most influential in the history of Christian spirituality, shaping the contemplative tradition's emphasis on attentive receptivity as a form of active faithfulness.",
  },
  {
    color: TEAL,
    title: "Writing the Vision on Tablets",
    body: "God's response to Habakkuk's watchpost posture is a command to write the vision: 'Write the vision; make it plain on tablets, so he may run who reads it' (2:2). The command to make it plain -- literally, to engrave it clearly enough to be read by someone running past -- carries a sense of urgency and accessibility. The vision is not esoteric knowledge for specialists; it is meant to be read in motion, on the run. The tablets (luachot) recall the tablets of the Mosaic covenant, giving this written vision a covenantal gravity. The God who inscribed his covenant in stone is now commanding his prophet to inscribe this vision with comparable permanence and clarity. The vision will seem slow in coming, but it will not delay beyond its appointed time: 'If it seems slow, wait for it; it will surely come; it will not delay' (2:3).",
  },
  {
    color: ROSE,
    title: "Hab 2:4 as a Hinge of Biblical Theology",
    body: "Habakkuk 2:4 is one of the most consequential single verses in the entire Hebrew Bible: 'Behold, his soul is puffed up; it is not upright within him, but the righteous shall live by his faith.' The verse draws a stark contrast between two postures before God and history: the soul that is puffed up with self-sufficiency (the Babylonian posture, the imperial posture, the posture of every power that trusts in its own strength) and the righteous person who lives by faith in God's promise even when that promise seems delayed. Paul quotes this verse in Romans 1:17 and Galatians 3:11 as the scriptural foundation for the doctrine of justification by faith. The author of Hebrews quotes it in 10:38 as the call to perseverance under pressure. In all three New Testament contexts, the verse does something similar to what it does in Habakkuk: it holds open the possibility of faithful human response in the face of apparent divine delay or apparent Babylonian triumph.",
  },
  {
    color: PURPLE,
    title: "The Five Woe Oracles: Structure and Meaning",
    body: "Habakkuk 2:5-20 contains five woe oracles against Babylon, each introduced by the Hebrew hoy (woe, alas). The five oracles target five specific sins: (1) plunder and extortion -- Babylon has accumulated wealth through violence, and all the plundered peoples will rise up against it (2:6-8); (2) exploitation and building shame into the house -- the unjust gains have built a house of bloodshed (2:9-11); (3) building a city with bloodshed and founding a town with iniquity (2:12-14); (4) making the surrounding nations drink the cup of wrath, exposing their nakedness (2:15-17); (5) idolatry -- trusting in what cannot speak, while the LORD is in his holy temple (2:18-20). The five oracles function as God's indictment, a structured prosecutorial statement that answers Habakkuk's original question about why God would use wicked Babylon as an instrument of judgment.",
  },
  {
    color: GREEN,
    title: "The Woes as Mirror: Babylon's Sins as Warning",
    body: "The woe oracles of Habakkuk 2 operate on more than one level. They are pronouncements of judgment against the specific historical power of Babylon; they are also a mirror held up to any society that falls into the same patterns. The sins indicted -- plunder that enriches at others' expense, exploitation of the vulnerable, building civic power through violence, degrading others through the abuse of power, and trusting in mute idols -- are not distinctively Babylonian sins. They are perennial temptations of imperial power in every age. The book of Revelation draws on Habakkuk's Babylon imagery extensively in chapters 17-18, applying it to Rome and, by extension, to every civilization that organizes itself around the values Habakkuk indicts. The woes become a permanent fixture of prophetic imagination for evaluating the moral health of any human social order.",
  },
  {
    color: GOLD,
    title: "The LORD in His Holy Temple",
    body: "The climactic declaration of Habakkuk 2 is verse 20: 'But the LORD is in his holy temple; let all the earth keep silence before him.' After five woe oracles that have catalogued Babylon's crimes and announced its coming judgment, and after the affirmation that the earth will be filled with the knowledge of God's glory as waters cover the sea (2:14), the book arrives at this declaration of divine presence and sovereignty. The holy temple may refer to the earthly Jerusalem temple, to the heavenly sanctuary, or -- most likely -- to both at once: God's dwelling place in all its dimensions. The command to silence is the prophetic equivalent of what the psalmists call 'the fear of the LORD': the recognition, in the face of divine majesty, that the appropriate human response is not chatter, argument, or complaint but reverent stillness. This verse has shaped Christian liturgy and mystical theology alike.",
  },
];

const THEME_ITEMS = [
  {
    color: GOLD,
    title: "The Watchtower Posture: Active Waiting as a Spiritual Discipline",
    body: "Habakkuk 2:1 presents one of the most formative images in the entire prophetic tradition for the spirituality of prayer and discernment: the prophet deliberately ascending the watchtower and positioning himself to receive God's answer. This is not passive resignation or fatalistic acceptance; it is active, expectant, deliberate waiting. The military watchtower image suggests that waiting on God is a form of watchfulness -- alert, eyes-open, ready to report and respond. Psalm 5:3 echoes this posture: 'O LORD, in the morning you hear my voice; in the morning I prepare a sacrifice for you and watch.' Isaiah 40:31 promises that 'they who wait for the LORD shall renew their strength.' Lamentations 3:25-26 declares: 'The LORD is good to those who wait for him, to the soul who seeks him. It is good that one should wait quietly for the salvation of the LORD.' What distinguishes Habakkuk's waiting from mere delay is its intentionality: he chose a specific place, a specific posture, and a specific orientation toward what God would say. The watchtower became a model for prophetic intercession and for the contemplative tradition's discipline of attentive receptivity. To wait on God in this mode is not to be passive; it is to be maximally attentive.",
  },
  {
    color: TEAL,
    title: "Habakkuk 2:4 and the Doctrine of Justification by Faith",
    body: "No verse in Habakkuk carries more theological weight than 2:4: 'the righteous shall live by his faith.' This eight-word declaration became one of the most cited and debated texts in the New Testament and in the Reformation. Paul quotes it twice: in Romans 1:17 as the thesis statement of his entire argument about the righteousness of God that comes through faith for both Jew and Gentile, and in Galatians 3:11 as evidence that justification before God has always been by faith rather than by works of the law. The author of Hebrews quotes it in 10:38 as a call to persevering faith under persecution, adding the contrast with those who shrink back and are destroyed. In each New Testament context, the verse does what it does in Habakkuk: it distinguishes the posture of the righteous (trusting in God's promise even when the promise seems delayed) from the posture of the self-sufficient (trusting in one's own power, wealth, or strategy). Martin Luther, struggling with the guilt of his own sin and the inadequacy of meritorious works, encountered this verse -- first in Habakkuk and then in Romans 1:17 -- and said it was as if the gates of paradise had opened to him. The verse had the same function for Luther that it had for Habakkuk: it answered the question of how one lives faithfully when the world seems to be running in the wrong direction.",
  },
  {
    color: PURPLE,
    title: "The Five Woe Oracles: God's Indictment of Imperial Power",
    body: "The five woe oracles of Habakkuk 2:6-20 constitute one of the most systematic prophetic indictments of imperial power in the Hebrew Bible. The woe formula (hoy in Hebrew) is a prophetic lawsuit convention -- a funeral dirge turned into a legal charge. By pronouncing woe over Babylon, Habakkuk is declaring that Babylon is already, in the divine courtroom, a condemned power. The five charges are carefully structured: plunder and extortion (Babylon's economic crimes against the nations), exploitation that brings shame to the house (the moral corruption that comes with unjust wealth), building a city with bloodshed (the imperial city built on violence), making the nations drunk with the cup of wrath (the abuse of power that degrades and exposes), and idolatry -- trusting in mute wood and stone while the LORD inhabits his holy temple. The connections to Isaiah 5's woe oracles (a series of woes against Israel for similar social sins) are deliberate: Babylon is being condemned by the same prophetic standard that had been applied to Israel. And the connections to Revelation 18's lament over Babylon -- 'Fallen, fallen is Babylon the great!' -- show how this prophetic structure became a permanent template for evaluating imperial power in the New Testament imagination.",
  },
  {
    color: ROSE,
    title: "The Earth Filled with the Knowledge of God's Glory (2:14)",
    body: "Embedded in the third woe oracle is one of the most breathtaking statements of eschatological hope in the prophetic literature: 'For the earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea' (2:14). The verse appears in the midst of a condemnation of Babylon for building a city with bloodshed -- and the contrast is deliberate. Babylon builds with blood; God fills with glory. The human project of empire produces violence and ash; the divine project of redemption produces a knowledge of God that saturates the earth the way water saturates the ocean floor. There is nowhere in the sea that is not water; there will be nowhere on the renewed earth that is not filled with the knowledge of God's glory. The verse has close parallels in Numbers 14:21 ('all the earth shall be filled with the glory of the LORD') and Isaiah 11:9 ('the earth shall be full of the knowledge of the LORD as the waters cover the sea'). John's vision in Revelation 21-22 of the new creation -- where the glory of God illuminates the entire city without need of sun or lamp -- is the New Testament fulfillment of this prophetic hope. The contrast with Babylon's pretensions could not be starker: the empire that thought it was filling the earth with its own glory will be replaced by a world saturated with the glory of the God it defied.",
  },
  {
    color: GREEN,
    title: "The LORD in His Holy Temple (2:20)",
    body: "The final verse of Habakkuk 2 functions as the ground and goal of everything that precedes it: 'But the LORD is in his holy temple; let all the earth keep silence before him.' After the chaos and violence of Babylonian imperial expansion, after the prophet's agonizing theodicy questions, after five woe oracles that catalogue the crimes of the powerful -- this verse arrives as a declaration that is simultaneously reassurance and command. The LORD is in his holy temple: despite all appearances, the throne is occupied. The heavenly court is not in recess. The God who watches from his sanctuary has seen everything, has issued his indictment through the woe oracles, and will execute his judgment in his time. The command to silence -- 'let all the earth keep silence before him' -- is the proper response to that divine presence. In Zephaniah 1:7, 'Be silent before the Lord GOD! For the day of the LORD is near.' In Zechariah 2:13, 'Be silent, all flesh, before the LORD, for he has roused himself from his holy dwelling.' The command to silence is thus a recurring prophetic call to recognize that God is not absent, not sleeping, not defeated -- he is present in his sanctuary, and the appropriate response to that presence is not theological argument but reverent stillness. The psalms of divine kingship (Psalms 93, 95-99) explore the same theme: the LORD is king, the earth is his footstool, the proper response of creation is worship and silence.",
  },
];

const CROSSREFS = [
  { ref: "Romans 1:17", note: "The righteousness of God is revealed from faith to faith -- quoting Hab 2:4 as Paul's thesis for the entire letter" },
  { ref: "Galatians 3:11", note: "No one is justified before God by the law -- for the righteous shall live by faith (Hab 2:4)" },
  { ref: "Hebrews 10:38-39", note: "My righteous one shall live by faith, and if he shrinks back, my soul has no pleasure in him -- call to persevere" },
  { ref: "Isaiah 11:9", note: "The earth shall be full of the knowledge of the LORD as the waters cover the sea -- parallel eschatological hope" },
  { ref: "Numbers 14:21", note: "All the earth shall be filled with the glory of the LORD -- God's oath to Moses; fulfilled in Hab 2:14" },
  { ref: "Revelation 18:2-3", note: "Fallen, fallen is Babylon the great -- New Testament application of the woe oracle structure to Rome" },
  { ref: "Isaiah 5:8-23", note: "Woe to those who join house to house -- Isaiah's woe oracles against Israel, same prophetic form as Hab 2" },
  { ref: "Psalm 46:10", note: "Be still, and know that I am God -- the psalmic expression of Hab 2:20's call to silence" },
];

const VERSE_SECTIONS = [
  {
    ref: "Hab 2:1-4",
    color: GOLD,
    title: "The Watchtower and the Vision -- the Righteous Shall Live by Faith",
    body: "The chapter opens with Habakkuk's deliberate repositioning: 'I will take my stand at my watchpost and station myself on the tower, and look out to see what he will say to me, and what I will answer concerning my complaint' (2:1). The prophet has just lodged his second complaint (Hab 1:12-17), challenging God for using Babylon -- a nation more wicked than Israel -- as the instrument of his judgment. Now he waits, alert and positioned, for the divine response. God's answer comes in three parts. First, the command to write the vision plainly on tablets, so it can be read even by someone running: the vision is not for secret storage but for urgent communication (2:2). Second, the assurance about the vision's timing: 'If it seems slow, wait for it; it will surely come; it will not delay' (2:3). The apparent delay is not divine neglect; it has an appointed time. Third, and most decisively, the fundamental theological contrast: 'Behold, his soul is puffed up; it is not upright within him, but the righteous shall live by his faith' (2:4). The 'puffed up' soul is Babylon -- and every power like it -- trusting in its own military and economic prowess. The 'righteous' are those who, like Habakkuk, choose to trust God's promise even when Babylon is winning. The declaration that such people 'shall live' by their faith is both a promise of ultimate vindication and a description of the mode of existence proper to those who belong to God.",
  },
  {
    ref: "Hab 2:5-8",
    color: TEAL,
    title: "First Woe -- the Plunderer Plundered",
    body: "The first woe oracle opens with a description of Babylon's character and then pronounces its inevitable reversal: 'Moreover, wine is a traitor, an arrogant man who is never at rest. His greed is as wide as Sheol; like death he has never enough. He gathers for himself all nations and collects as his own all peoples. Shall not all these take up their taunt against him, with scoffing and riddles for him, and say, Woe to him who heaps up what is not his own -- for how long? -- and loads himself with pledges!' (2:5-6). The image of the arrogant man whose appetite is as wide as Sheol captures the essential pathology of imperial greed: it is insatiable, it is self-defeating, and it cannot rest. Babylon has gathered nations and peoples the way a miser hoards wealth -- not for any productive purpose but simply to possess, to control, to dominate. The twist comes immediately: the peoples who have been plundered will themselves rise up as creditors against their plunderer. 'Will not your debtors suddenly arise, and those awake who will make you tremble? Then you will be spoil for them. Because you have plundered many nations, all the remnant of the peoples shall plunder you' (2:7-8). The logic is exact: what you have taken by violence will be taken from you by violence. The plunderer becomes the plundered. The nations Babylon has bled dry become the agents of its undoing.",
  },
  {
    ref: "Hab 2:9-11",
    color: ROSE,
    title: "Second Woe -- the Stone and Timber Cry Out; Shame to Your House",
    body: "The second woe oracle targets the exploitative accumulation that builds a secure house at the expense of others: 'Woe to him who gets evil gain for his house, to set his nest on high, to be safe from the reach of harm! You have devised shame for your house by cutting off many peoples; you have forfeited your life. For the stone will cry out from the wall, and the beam from the woodwork respond' (2:9-11). The ambition behind this second sin is security -- building a house that is beyond the reach of harm, a nest set high on a rock. But the gain is evil; it has been wrested from the destruction of other peoples. The consequence is named with devastating precision: 'you have devised shame for your house.' The very structure that was built for security becomes the monument of shame. And then the most haunting detail: the building materials themselves will testify against the builder. The stone in the wall cries out; the beam in the woodwork responds. Creation is a witness that cannot be silenced. The house built on exploitation carries within its own fabric the evidence of its crimes. This is not merely a metaphor; it is a theological claim about the moral memory embedded in the physical world.",
  },
  {
    ref: "Hab 2:12-14",
    color: PURPLE,
    title: "Third Woe -- Building a City with Blood; Earth Filled with God's Glory",
    body: "The third woe oracle delivers the most sweeping judgment and then immediately contrasts it with the most breathtaking hope: 'Woe to him who builds a town with blood and founds a city on iniquity! Behold, is it not from the LORD of hosts that peoples labor merely for fire, and nations weary themselves for nothing? For the earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea' (2:12-14). Babylon's architectural achievement -- its legendary city walls, its hanging gardens, its ziggurat temples -- was built on the forced labor and bloodshed of conquered peoples. The indictment is not against cities per se but against cities built on the back of human suffering for the glory of a human empire. The counter-declaration is breathtaking in its scope: all of Babylon's laborers are laboring 'merely for fire' -- their work will be consumed; their monuments will not endure. But the earth itself has a different destiny: it will be filled with the knowledge of God's glory as thoroughly and completely as the ocean floor is covered by water. The empire's pretensions to fill the earth with its own glory will be displaced by a glory that is not human and cannot be burned.",
  },
  {
    ref: "Hab 2:15-17",
    color: GREEN,
    title: "Fourth Woe -- the Cup of the LORD's Right Hand; Violence of Lebanon",
    body: "The fourth woe oracle uses the image of intoxication and forced exposure to describe Babylon's abuse of the nations: 'Woe to him who makes his neighbors drink -- you pour out your wrath and make them drunk, in order to gaze at their nakedness! You will have your fill of shame instead of glory. Drink, yourself, and show your uncircumcision! The cup in the LORD's right hand will come around to you, and utter shame will come upon your glory!' (2:15-16). The image of a powerful figure who forces drinks on neighbors to expose their vulnerability and humiliate them is both literal and metaphorical: Babylon's imperial power had the effect of stripping the nations of their dignity, exposing their weakness, reducing them to objects of contempt. The reversal is stated plainly: the same cup will come around to Babylon. The 'cup in the LORD's right hand' -- an image of divine judgment that appears in Psalm 75:8, Jeremiah 25, and Revelation 14-16 -- will be presented to Babylon itself. The violence done to Lebanon and to the animal creation (2:17) is also named: 'The violence done to Lebanon will overwhelm you, as will the destruction of the animals that terrified them.' Creation itself -- the forests stripped, the wildlife terrorized -- adds its testimony to the indictment.",
  },
  {
    ref: "Hab 2:18-20",
    color: TEAL,
    title: "Fifth Woe -- Idols That Cannot Speak vs. the LORD in His Holy Temple",
    body: "The fifth and final woe oracle targets the deepest sin of all: idolatry, the substitution of human-made objects for the living God. 'What profit is an idol when its maker has shaped it, a metal image, a teacher of lies? For its maker trusts in his own creation when he makes speechless idols! Woe to him who says to a wooden thing, Awake; to a silent stone, Arise! Can this teach? Behold, it is overlaid with gold and silver, and there is no breath at all in it' (2:18-19). The theological critique of idolatry here is pointed: the idol is the product of human skill and will, overlaid with gold and silver to impress, but without breath -- without the ruach of God that animates creation and gives the prophets their words. The idol cannot speak; it cannot teach; it cannot hear. To trust in an idol is to trust in the projection of one's own will. The contrast with the living God could not be more stark: 'But the LORD is in his holy temple; let all the earth keep silence before him' (2:20). The idol demands speech from the worshiper but can give nothing back; the LORD is himself the speaker, and the appropriate response to his presence is not words but silence. This verse is the theological climax of the entire chapter and arguably of the entire book of Habakkuk.",
  },
];

const APPLICATION_ITEMS = [
  {
    color: GOLD,
    title: "The Watchtower Discipline: Learning to Wait with Expectation",
    body: "Habakkuk 2:1 is one of the most practical texts in the prophets for the discipline of prayer and discernment. The prophet does not simply wait passively; he takes a specific position, in a specific place, with specific attention. He goes to his watchtower. This intentionality is the key: waiting on God is not the same as simply not acting. It is a form of action -- a deliberate choice to position oneself in a place of receptivity rather than reaction. For intercessory prayer, this means creating the conditions in which we can actually hear: regular times of silence, journals where we write what seems to be coming, willingness to sit with a question rather than generating immediate answers. For prophetic discernment in community, it means building practices that create space between a problem and a response -- space in which God might actually speak. The command to write the vision plainly is also instructive: what we receive in prayer is meant to be communicated, tested, and made accessible. The vision is not for private religious consumption; it is written on tablets for people to read on the run.",
  },
  {
    color: TEAL,
    title: "Living by Faith in an Age of Empire",
    body: "Habakkuk 2:4 was written for exactly the situation in which Habakkuk found himself: a small community of faith surrounded by an overwhelming imperial power that seemed to be winning, while God's promises seemed to be losing. The prophet's original question -- why does God use the wicked Babylonians? -- is the question of every generation that has watched empire roll over the people of God. And the answer is not a philosophical explanation but a call to a particular kind of existence: the righteous shall live by faith. To live by faith in an age of empire means to make daily decisions based on the promise rather than the power structure. It means refusing to define success by Babylonian metrics -- military superiority, economic dominance, cultural hegemony. It means trusting that the appointed time will come and that the vision will not ultimately delay. Paul's use of Hab 2:4 in Romans and Galatians shows how this prophetic call became, in Christ, a description of the entire new covenant existence: justified by faith, living by faith, waiting by faith for the completion of what God has promised.",
  },
  {
    color: PURPLE,
    title: "When Creation Testifies: The Stones and Timbers Cry Out",
    body: "Habakkuk 2:11 contains a remarkable ecological claim: the stone will cry out from the wall, and the beam from the woodwork will respond. What this suggests is that the physical world is not morally neutral; it carries the imprint of the human actions that shaped it. A building constructed through exploitation embeds within itself the testimony of that exploitation. The forests of Lebanon stripped to build Babylon's palaces will testify against their destroyers (2:17). This is not a superstitious claim about haunted buildings; it is a theological claim about the created world's relationship to moral history. Jesus's words in Luke 19:40 -- 'I tell you, if these were silent, the very stones would cry out' -- draw on exactly this tradition. The application for contemporary Christians is searching: our built environments, our consumption patterns, our supply chains -- these are not morally neutral. They testify to what we have valued, at whose expense our comfort has been purchased, and what kind of future we are building. The question the stone and timber ask is not merely aesthetic but moral: what does the structure of our lives reveal about what we have taken, and from whom?",
  },
  {
    color: ROSE,
    title: "Babylon's Vices as a Mirror",
    body: "The five sins indicted in the woe oracles of Habakkuk 2 -- plunder, exploitation, violence, degrading the neighbor through the abuse of power, and idolatry -- function as a mirror for any individual or community willing to hold it up. The plunder woe asks: in what ways do our economic arrangements benefit us at the expense of others who have no voice in the transaction? The exploitation woe asks: what have we built that rests on foundations we prefer not to examine? The bloodshed woe asks: what cities, what institutions, what accumulated goods have been built through violence that we have normalized or forgotten? The drunkenness woe asks: in what ways do we use our relative power to diminish, expose, or degrade those who are more vulnerable? The idolatry woe -- perhaps the most penetrating -- asks: in what are we actually trusting? What do we expect to deliver us, and does it have breath? The five woes are not ancient history; they are a permanent examination of conscience for any community that claims to live before the God who is in his holy temple.",
  },
  {
    color: GREEN,
    title: "The Silencing of Silence: Cultivating Space for God to Speak",
    body: "Habakkuk 2:20 -- 'But the LORD is in his holy temple; let all the earth keep silence before him' -- is both a theological declaration and a spiritual invitation. The declaration: God is present. The invitation: be silent. In an age defined by the production and consumption of noise -- social media, news cycles, algorithmic feeds designed to keep us constantly stimulated -- the command to silence is genuinely countercultural. Christian traditions across history have recognized silence before God as one of the most essential and most neglected spiritual disciplines. The hesychast tradition of Eastern Orthodoxy, the Quaker practice of expectant waiting, the centering prayer movement in Western Christianity, the classic Jesuit examen -- all of these are, at their root, attempts to practice the silence commanded in Hab 2:20. What makes this silence different from mere emptiness is its orientation: it is silence before the God who is present, before the LORD who is in his holy temple. It is not the silence of despair or boredom but the silence of reverence and receptivity. To cultivate this silence requires turning down real noise: the noise of anxiety, the noise of ambition, the noise of distraction, the noise of our own interior chatter.",
  },
];

const REFLECTION_QUESTIONS = [
  "What does active, expectant waiting look like in your own prayer life? What practices help you take the watchtower posture -- deliberately positioned, eyes open, ready to receive -- rather than simply filling God's silence with your own words?",
  "What does it mean practically to 'live by faith' when Babylon -- whatever empire or pressure surrounds you -- seems to be winning? Where in your life right now are you most tempted to trust in the puffed-up soul's strategy rather than in God's promise?",
  "Which of the five sins indicted in Habakkuk 2 is most present in our own culture? In what ways might we -- as individuals, as a church, as a society -- be more complicit in those patterns than we typically acknowledge?",
  "How does the vision of 2:14 -- the earth filled with the knowledge of God's glory as waters cover the sea -- shape your hope for the future of creation and history? What difference does it make to believe that Babylon's monuments will burn but God's glory will fill the earth?",
  "What practices help you cultivate genuine silence and awe before God (Hab 2:20)? What noise -- external or internal -- do you most need to turn down in order to practice the silence that recognizes that the LORD is in his holy temple?",
  "Martin Luther found Habakkuk 2:4 transformative -- it broke open the gospel for him when he encountered it in Romans 1:17. What verse or passage has had the most formative impact on your own understanding of the gospel, and what did it open up for you?",
];

const VIDEO_ITEMS = [
  { id: "pHBzJ2dVXgk", title: "Habakkuk 2: The Vision, the Faith, and the Woes" },
  { id: "3sO5FH2ybPY", title: "The Righteous Shall Live by Faith &mdash; Habakkuk 2:4 Explained" },
  { id: "rNcERbkSTXU", title: "Five Woe Oracles Against Babylon &mdash; Habakkuk 2 Study" },
  { id: "OjJ7GkWCHvA", title: "Waiting on God &mdash; The Watchtower Posture of Habakkuk" },
];

export default function Habakkuk2Guide() {
  const [tab, setTab] = usePersistedState<Hab2Tab>("vine_hab2_tab", "overview");
  const [openOverview, setOpenOverview] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const toggleOverview = (id: string) => setOpenOverview(openOverview === id ? null : id);
  const toggleTheme = (id: string) => setOpenTheme(openTheme === id ? null : id);
  const toggleVerse = (id: string) => setOpenVerse(openVerse === id ? null : id);
  const toggleApp = (id: string) => setOpenApp(openApp === id ? null : id);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>

          {/* Hero */}
          <div style={{ background: "linear-gradient(135deg, #1a0f00 0%, #12121F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, fontFamily: "system-ui, sans-serif" }}>HABAKKUK 2</span>
                <span style={{ color: MUTED, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>Chapter Study &middot; Minor Prophets</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The Watchtower Answer: Vision, Faith, and Five Woes
              </h1>
              <p
                style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 700, lineHeight: 1.7, margin: "0 0 20px", fontFamily: "system-ui, sans-serif" }}
                dangerouslySetInnerHTML={{ __html: "Habakkuk stations himself on the watchtower and receives God&rsquo;s answer &mdash; the righteous shall live by faith &mdash; followed by five woe oracles that indict Babylon&rsquo;s sins of plunder, exploitation, bloodshed, degradation, and idolatry, climaxing in the declaration that the LORD is in his holy temple." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  { label: "Author", value: "Habakkuk" },
                  { label: "Setting", value: "Judah, c. 605 BC" },
                  { label: "Key Verse", value: "Habakkuk 2:4" },
                  { label: "Genre", value: "Prophetic Dialogue and Woe Oracles" },
                ].map(item => (
                  <div key={item.label} style={{ background: `${CARD}cc`, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 16px", fontFamily: "system-ui, sans-serif" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Verse Banner */}
          <div style={{ background: `${GOLD}12`, borderBottom: `1px solid ${GOLD}33`, padding: "24px 24px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <blockquote style={{ borderLeft: `4px solid ${GOLD}`, paddingLeft: 20, margin: 0 }}>
                <p
                  style={{ fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 6, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Behold, his soul is puffed up; it is not upright within him, but the righteous shall live by his faith.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>-- Habakkuk 2:4 (ESV)</cite>
              </blockquote>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as Hab2Tab)}
                  style={{ padding: "16px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", fontFamily: "system-ui, sans-serif", color: tab === t.id ? ACCENT : MUTED, borderBottom: tab === t.id ? `2px solid ${ACCENT}` : "2px solid transparent", transition: "color 0.15s" }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

            {/* OVERVIEW */}
            {tab === "overview" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Overview</h2>
                <p
                  style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Habakkuk 2 is God&rsquo;s answer to the prophet&rsquo;s second complaint. After Habakkuk stations himself on the watchtower and waits, God delivers a vision: the righteous live by faith, Babylon&rsquo;s crimes will recoil on itself through five woe oracles, and the earth will be filled with God&rsquo;s glory &mdash; culminating in the command that all the earth keep silence before the LORD in his holy temple." }}
                />

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Shape of Habakkuk 2</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "2:1", desc: "The prophet stations himself on the watchtower to wait for God's answer" },
                      { ref: "2:2-3", desc: "The command to write the vision plainly on tablets; the promise that it will not delay" },
                      { ref: "2:4", desc: "The hinge: the puffed-up soul vs. the righteous who live by faith" },
                      { ref: "2:5-8", desc: "First woe: the insatiable plunderer will be plundered by the peoples he has stripped" },
                      { ref: "2:9-11", desc: "Second woe: the house built on evil gain; the stone and timber cry out" },
                      { ref: "2:12-14", desc: "Third woe: the city built with blood; but the earth will be filled with God's glory" },
                      { ref: "2:15-17", desc: "Fourth woe: the cup of shame; the violence of Lebanon will overwhelm you" },
                      { ref: "2:18-20", desc: "Fifth woe: the idol that cannot speak vs. the LORD in his holy temple" },
                    ].map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "system-ui, sans-serif" }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 44, paddingTop: 2 }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { color: GOLD, label: "First Woe", desc: "Plunder and extortion -- the nations will plunder you" },
                    { color: TEAL, label: "Second Woe", desc: "Evil gain and the house of bloodshed -- stone and timber testify" },
                    { color: PURPLE, label: "Third Woe", desc: "City built with blood -- but the earth will be filled with God's glory" },
                    { color: ROSE, label: "Fourth Woe", desc: "The cup of shame and the violence of Lebanon" },
                    { color: GREEN, label: "Fifth Woe", desc: "Idolatry -- the idol cannot speak; the LORD is in his holy temple" },
                  ].map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: item.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4, fontFamily: "system-ui, sans-serif" }}>{item.label}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.desc}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {OVERVIEW_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleOverview(s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openOverview === s.title ? "-" : "+"}</span>
                      </button>
                      {openOverview === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Historical and Canonical Context</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Habakkuk was written around 605 BC, in the shadow of Babylon&rsquo;s decisive victory over Egypt and Assyria at the Battle of Carchemish. The Babylonian threat was no longer hypothetical; it was the defining geopolitical reality of the ancient Near East. Judah was caught between the great powers, and the prophet Habakkuk is the only prophet in the Hebrew Bible who raises the theodicy question directly to God: if you are going to use the more wicked Babylon to punish the less wicked Judah, how does that square with your character as a holy God (1:12-17)?" }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Habakkuk 1 raised the question; Habakkuk 2 is the answer. The answer does not resolve all the theodicy puzzle, but it reframes it: the vision has an appointed time, the righteous live by faith, and Babylon&rsquo;s apparent victory is the prelude to its own indictment and fall. Chapter 3 then moves into a psalm of theophany that models the response of trust the entire book has been building toward." }}
                  />
                </div>
              </div>
            )}

            {/* THEMES */}
            {tab === "themes" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Key Themes</h2>
                <p
                  style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Habakkuk 2 is rich with themes that echo through the entire canon: the watchtower posture of active waiting, the foundational declaration of justification by faith, the prophetic indictment of imperial power through the woe formula, and the twin poles of eschatological hope (the earth filled with God&rsquo;s glory) and present reality (the LORD in his holy temple)." }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {THEME_ITEMS.map(t => (
                    <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleTheme(t.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: t.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{t.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openTheme === t.title ? "-" : "+"}</span>
                      </button>
                      {openTheme === t.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{t.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 28, marginTop: 32 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>New Testament Cross-References</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {CROSSREFS.map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: TEAL, fontWeight: 700, fontSize: 13, minWidth: 160, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 28, marginTop: 24 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>The Three New Testament Citations of Habakkuk 2:4</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { ref: "Romans 1:17", context: "Paul&rsquo;s thesis for the entire letter", use: "The righteousness of God is revealed from faith to faith -- the righteous live by faith is the key to the whole argument about Jew and Gentile alike being justified" },
                      { ref: "Galatians 3:11", context: "Paul&rsquo;s argument against justification by works", use: "No one is justified before God by the law, because the righteous shall live by faith -- faith and law are mutually exclusive grounds of justification" },
                      { ref: "Hebrews 10:38-39", context: "Call to persevering faith under persecution", use: "My righteous one shall live by faith, and if he shrinks back, I have no pleasure in him -- the contrast between faithful endurance and apostasy" },
                    ].map(item => (
                      <div key={item.ref} style={{ padding: "14px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <div style={{ display: "flex", gap: 12, marginBottom: 6, alignItems: "baseline" }}>
                          <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>{item.ref}</span>
                          <span style={{ color: MUTED, fontSize: 12, fontFamily: "system-ui, sans-serif" }}
                            dangerouslySetInnerHTML={{ __html: item.context }} />
                        </div>
                        <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}
                          dangerouslySetInnerHTML={{ __html: item.use }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VERSE BY VERSE */}
            {tab === "verse" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Verse by Verse</h2>
                <p
                  style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Habakkuk 2 repays close reading because each section carries precise theological weight. The watchtower vision, the command to write, the declaration of Hab 2:4, and each of the five woe oracles are carefully structured units that build toward the climactic declaration of verse 20." }}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {VERSE_SECTIONS.map(s => (
                    <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleVerse(s.ref)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ background: s.color, color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 700, fontFamily: "system-ui, sans-serif", flexShrink: 0 }}>{s.ref}</span>
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openVerse === s.ref ? "-" : "+"}</span>
                      </button>
                      {openVerse === s.ref && (
                        <div style={{ padding: "0 20px 20px 20px" }}>
                          <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}>{s.body}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 28, marginTop: 32 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Five Woe Oracles: A Structural Overview</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Each woe oracle in Habakkuk 2 follows a recognizable structure: the hoy (woe) formula, a description of the specific sin, a statement of the reversal or consequence, and often a reason grounded in God&rsquo;s character or the moral order of creation. The five together constitute a complete prosecution." }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { num: "1st Woe", ref: "2:6-8", sin: "Plunder and extortion", reversal: "The plundered peoples will rise up and plunder Babylon" },
                      { num: "2nd Woe", ref: "2:9-11", sin: "Evil gain that builds a house of bloodshed", reversal: "The stone and timber of the house cry out against you" },
                      { num: "3rd Woe", ref: "2:12-14", sin: "Building a city with blood and iniquity", reversal: "You labor merely for fire; but the earth will be filled with God's glory" },
                      { num: "4th Woe", ref: "2:15-17", sin: "Making neighbors drink to expose their nakedness", reversal: "The cup of the LORD will come around to you; shame for glory" },
                      { num: "5th Woe", ref: "2:18-20", sin: "Idolatry -- trusting in what cannot speak", reversal: "The LORD is in his holy temple; all the earth keep silence before him" },
                    ].map(item => (
                      <div key={item.num} style={{ display: "flex", gap: 12, padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
                        <span style={{ color: PURPLE, fontWeight: 700, fontSize: 13, minWidth: 80, fontFamily: "system-ui, sans-serif" }}>{item.num}</span>
                        <span style={{ color: ACCENT, fontWeight: 600, fontSize: 12, minWidth: 56, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{item.ref}</span>
                        <div style={{ flex: 1, minWidth: 160 }}>
                          <div style={{ color: MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}><strong style={{ color: TEXT }}>Sin:</strong> {item.sin}</div>
                          <div style={{ color: MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}><strong style={{ color: TEXT }}>Reversal:</strong> {item.reversal}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginTop: 24 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Habakkuk 2:4 in the Context of the Vision</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "Verse 4 functions as the hinge of the entire chapter and, some scholars argue, of the entire book. It stands between the vision command (2:2-3) and the five woe oracles (2:6-20), providing the theological framework that makes sense of both. The vision requires faith to receive it and to live by it while waiting; the woe oracles describe what happens to those who choose the opposite of faith &mdash; the puffed-up soul, the self-sufficient power that trusts in its own plunder, its own buildings, its own idols." }}
                  />
                  <div style={{ background: BG, borderRadius: 8, padding: 16, border: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic", fontFamily: "system-ui, sans-serif" }}
                      dangerouslySetInnerHTML={{ __html: "&ldquo;For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek. For in it the righteousness of God is revealed from faith for faith, as it is written, &lsquo;The righteous shall live by faith.&rsquo;&rdquo; &mdash; Romans 1:16-17 (ESV)" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* APPLICATION */}
            {tab === "application" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Application</h2>
                <p
                  style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Habakkuk 2 speaks with urgent clarity across the centuries because the conditions it addresses &mdash; apparent divine delay, the triumph of violent empire, the temptation to trust in what cannot save &mdash; are perennial. The chapter&rsquo;s call to active waiting, faithful living, honest examination of Babylon&rsquo;s vices, and reverential silence before God translates directly into contemporary discipleship." }}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {APPLICATION_ITEMS.map(a => (
                    <div key={a.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleApp(a.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: a.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{a.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openApp === a.title ? "-" : "+"}</span>
                      </button>
                      {openApp === a.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{a.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 28, marginBottom: 32 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>Reflection Questions</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {REFLECTION_QUESTIONS.map((q, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: GOLD, fontWeight: 800, flexShrink: 0, fontFamily: "system-ui, sans-serif" }}>{i + 1}.</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 28, marginBottom: 32 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Closing Prayer</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.9, fontSize: 15, margin: 0, fontStyle: "italic", fontFamily: "Georgia, serif" }}
                    dangerouslySetInnerHTML={{ __html: "Lord, we come to your watchtower in this moment and choose to wait &mdash; not passively, but with open eyes and expectant hearts. Teach us to live by faith when the Babylon around us seems stronger than your promise. Write your vision plainly on the tablets of our hearts, so that even when it seems slow in coming, we will trust that it will not delay. As we consider the five woes, search us: show us where we have built on foundations that cannot hold, where we have participated in structures of plunder and exploitation without recognizing our complicity, where we have trusted in idols that cannot speak. And in the silence that follows this self-examination, meet us with the same assurance you gave Habakkuk: the earth will be filled with the knowledge of your glory. You are in your holy temple. Let all the earth keep silence before you &mdash; and let that silence be, for us, the beginning of a renewed and faithful life. Amen." }}
                  />
                </div>

                <h3 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>Video Teaching</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
                  {VIDEO_ITEMS.map(v => (
                    <div key={v.id}>
                      <VideoEmbed videoId={v.id} title={v.title} />
                      <p
                        style={{ color: MUTED, fontSize: 13, marginTop: 8, fontFamily: "system-ui, sans-serif" }}
                        dangerouslySetInnerHTML={{ __html: v.title }}
                      />
                    </div>
                  ))}
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
