"use client";
import TabbedGuideTemplate, { TABBED_COLORS, type TabbedGuideData } from "@/components/TabbedGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = TABBED_COLORS;

const overviewBlocks = [
  {
    heading: "A Psalm for Giving Thanks",
    body: "Psalm 100 carries in its title the simple, glorious purpose of the whole song: &lsquo;A Psalm for giving thanks.&rsquo; The Latin tradition called it the &lsquo;Jubilate Deo,&rsquo; from its opening summons to make a joyful noise to the LORD. In just five short verses it gathers up the very essence of worship &mdash; the call to come, the truth that grounds the coming, and the goodness of God that makes worship the most reasonable thing in the world. It is among the most beloved and most frequently sung psalms in the history of the church, the kind of text that has been on the lips of believers in every age and is still sung in countless gatherings every week.",
  },
  {
    heading: "The Universal Summons",
    body: "Psalm 100 begins with a call that knows no borders: &lsquo;Make a joyful noise to the LORD, all the earth!&rsquo; This is not an invitation to Israel only but to every nation and every creature. The God being praised is the Maker of all, and so the praise he is owed rises from all. Yet the psalm does something beautiful with this wide call: it funnels the whole earth toward a particular place &mdash; through the gates and into the courts of the LORD. The universal summons does not stay vague and cosmic; it leads each worshiper to enter God&rsquo;s presence with thanksgiving and to bless his name. The breadth of the call and the intimacy of the destination belong together.",
  },
  {
    heading: "The Shape of the Psalm",
    body: "Psalm 100 falls into two balanced movements, each built on a series of commands followed by a reason. The first (100:1&ndash;3) calls us to make a joyful noise, serve the LORD with gladness, and come into his presence with singing &mdash; grounded in the great confession, &lsquo;Know that the LORD, he is God! It is he who made us, and we are his.&rsquo; The second (100:4&ndash;5) calls us to enter his gates with thanksgiving and his courts with praise, to give thanks and bless his name &mdash; grounded in the threefold reason, &lsquo;For the LORD is good; his steadfast love endures forever, and his faithfulness to all generations.&rsquo; In both halves the pattern is the same: come, because of who God is.",
  },
  {
    heading: "Context and Echoes",
    body: "Psalm 100 stands as a kind of doxological climax to the group of enthronement psalms (95&ndash;99) that proclaim the LORD as King over all the earth. Its imagery of gates and courts assumes the temple, where Israel gathered to worship; the worshiper is pictured drawing near, passing through the gates, entering the courts, coming at last into the presence of God. William Kethe&rsquo;s sixteenth-century metrical version, &lsquo;All People That on Earth Do Dwell&rsquo; &mdash; sung to the tune known as the &lsquo;Old Hundredth&rsquo; &mdash; carried this psalm into the worship of the whole English-speaking church and beyond, so that its summons still echoes wherever the Doxology is sung.",
  },
];

const themeItems = [
  {
    id: "t-summons",
    title: "The Joyful Noise of All the Earth",
    color: GOLD,
    body: "&lsquo;Make a joyful noise to the LORD, all the earth!&rsquo; (100:1). The psalm opens with a shout. The worship it calls for is not muted or grudging but a joyful noise &mdash; the glad, exuberant acclamation owed to a king. And the summons is universal: &lsquo;all the earth.&rsquo; Because the LORD is God of all, the praise he deserves rises from all. This anticipates the great vision of the gospel going to every nation and the final scene of worship drawn &lsquo;from every nation, from all tribes and peoples and languages&rsquo; (Revelation 7:9). Psalm 100 reminds us that worship is not a niche activity for the religious but the fitting response of every creature to its Maker, and that gladness, not mere duty, is its proper key.",
  },
  {
    id: "t-gladness",
    title: "Serving the LORD with Gladness",
    color: GREEN,
    body: "&lsquo;Serve the LORD with gladness! Come into his presence with singing!&rsquo; (100:2). Worship and service are joined here, and both are to be marked by gladness. To serve the LORD is not slavery but the high privilege of belonging to the King of kings, and the psalm insists that this service be joyful, not joyless. So much false religion is grim and burdened; Psalm 100 will have none of it. The God who made us and redeems us is to be served with gladness and approached with singing. As Augustine and many after him observed, the one who sings prays twice &mdash; for song is the natural overflow of a heart that has found its joy in God. Gladness is not optional decoration on our service; it is the very thing the psalm commands.",
  },
  {
    id: "t-madeus",
    title: "It Is He Who Made Us, and We Are His",
    color: TEAL,
    body: "&lsquo;Know that the LORD, he is God! It is he who made us, and we are his; we are his people, and the sheep of his pasture&rsquo; (100:3). Here is the theological foundation of all worship. Before any command to sing comes the command to know &mdash; to grasp the truth that the LORD alone is God, that he made us, and that we belong to him. This is creaturely humility at its root: we did not make ourselves, we are not our own, we are his by right of creation. And it is also covenant belonging: &lsquo;we are his people, and the sheep of his pasture.&rsquo; The image of the flock recalls Psalm 23 and points forward to Jesus the Good Shepherd (John 10:11). To worship rightly we must first know rightly: that God is God, and that we are gladly, securely his.",
  },
  {
    id: "t-gates",
    title: "Enter His Gates with Thanksgiving",
    color: PURPLE,
    body: "&lsquo;Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name!&rsquo; (100:4). The wide summons to all the earth now narrows to a single doorway. The worshiper is pictured drawing near to the temple, passing through the gates, entering the courts, coming into the presence of God &mdash; and the password at every threshold is thanksgiving. We do not enter God&rsquo;s presence to complain or to bargain but to give thanks and to bless his name. Thanksgiving is the proper posture of the creature before the Creator and the redeemed before the Redeemer. Through Christ, the curtain has been torn and the way into the holiest opened (Hebrews 10:19&ndash;22), so that we may now enter with confidence &mdash; still, always, with thanksgiving.",
  },
  {
    id: "t-good",
    title: "For the LORD Is Good",
    color: GOLD,
    body: "&lsquo;For the LORD is good; his steadfast love endures forever, and his faithfulness to all generations&rsquo; (100:5). The final verse gives the ground of all that has gone before, in a threefold confession that has anchored the worship of the church for centuries. First, &lsquo;the LORD is good&rsquo; &mdash; goodness is the very character of God, and all his works flow from it. Second, &lsquo;his steadfast love endures forever&rsquo; &mdash; his hesed, his loyal covenant love, has no expiration. Third, &lsquo;his faithfulness to all generations&rsquo; &mdash; he keeps his promises not for a season but across every generation, to our children and our children&rsquo;s children. Here is why we make a joyful noise: not because of fleeting circumstances, but because the God we worship is unchangeably good, loving, and faithful.",
  },
  {
    id: "t-funnel",
    title: "From the Whole Earth to the Courts of God",
    color: ROSE,
    body: "One of the most striking movements in Psalm 100 is the way it funnels the universal into the particular. It begins with &lsquo;all the earth&rsquo; making a joyful noise &mdash; the widest possible circle &mdash; and ends with the single worshiper entering God&rsquo;s gates and courts to bless his name. The cosmic summons does not dissolve into abstraction; it gathers each person to a real doorway, a real act of thanksgiving, a real entering into the presence of God. This is the genius of biblical worship: it is at once global and intensely personal. The same call that goes out to every nation comes home to you, at this moment, inviting you through the gates with thanksgiving on your lips and the name of God blessed in your heart.",
  },
];

const verseSections = [
  {
    id: "v-12",
    ref: "Psalm 100:1&ndash;2",
    label: "Make a joyful noise, all the earth",
    body: "&lsquo;Make a joyful noise to the LORD, all the earth! Serve the LORD with gladness! Come into his presence with singing!&rsquo; (100:1&ndash;2). The psalm opens with three glad imperatives. The first is a shout of acclamation &mdash; a joyful noise, the sound a crowd makes when its king appears &mdash; and it is addressed to &lsquo;all the earth,&rsquo; for the LORD is God of every nation. The second joins worship to service: to belong to this King is to serve him, and the manner of that service is to be gladness, not gloom. The third names the goal of it all &mdash; to &lsquo;come into his presence with singing.&rsquo; Worship is fundamentally a movement toward God, a drawing near, and the music that carries us is song. From its very first line the psalm sets the key signature of the whole: joy.",
  },
  {
    id: "v-3",
    ref: "Psalm 100:3",
    label: "It is he who made us, and we are his",
    body: "&lsquo;Know that the LORD, he is God! It is he who made us, and we are his; we are his people, and the sheep of his pasture&rsquo; (100:3). At the center of the psalm stands a command not to feel but to know. Before we are told to sing, we are told to grasp the truth that grounds the singing: the LORD alone is God. Three great affirmations follow. He made us &mdash; we are creatures, not self-made, owing our very existence to him. We are his &mdash; we belong to him by right of creation and covenant; we are not our own. And we are &lsquo;the sheep of his pasture&rsquo; &mdash; cared for, led, and guarded by a faithful Shepherd. Right worship is rooted in right knowledge; only when we know who God is and whose we are can our praise be true.",
  },
  {
    id: "v-4",
    ref: "Psalm 100:4",
    label: "Enter his gates with thanksgiving",
    body: "&lsquo;Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name!&rsquo; (100:4). The worshiper now approaches the house of God, and the psalm pictures the drawing near in stages &mdash; through the gates, into the courts, toward the presence. At every threshold the watchword is thanksgiving. We do not come to God to negotiate or to grumble but to give thanks and to bless his name. Four commands crowd into a single verse &mdash; enter, enter, give thanks, bless &mdash; as if the psalmist cannot contain his eagerness to usher us in. To &lsquo;bless his name&rsquo; is to speak well of all that God is, to honor his revealed character with our words. This is the heart of corporate worship: a people streaming through the gates with grateful praise.",
  },
  {
    id: "v-5",
    ref: "Psalm 100:5",
    label: "His steadfast love endures forever",
    body: "&lsquo;For the LORD is good; his steadfast love endures forever, and his faithfulness to all generations&rsquo; (100:5). The little word &lsquo;for&rsquo; bears the weight of the whole psalm: here, at last, is the reason for all the joyful noise. The ground of worship is the unchanging character of God, confessed in three phrases. He is &lsquo;good&rsquo; &mdash; goodness is his essence, the wellspring of every gift. His &lsquo;steadfast love&rsquo; (the Hebrew hesed, his loyal covenant love) &lsquo;endures forever&rsquo; &mdash; it will never run dry, never expire, never fail. And his &lsquo;faithfulness&rsquo; reaches &lsquo;to all generations&rsquo; &mdash; the God who kept faith with our fathers will keep faith with our children. The psalm ends not on our performance but on his character, which is exactly where worship should rest: on the goodness, love, and faithfulness of God.",
  },
];

const applicationBlocks = [
  {
    heading: "Serve God Gladly, Not Grudgingly",
    color: GREEN,
    body: "&lsquo;Serve the LORD with gladness.&rsquo; Psalm 100 confronts the joyless, dutiful religion that treats God as a hard taskmaster to be endured. The God who made us and called us his own is to be served with gladness and approached with singing. Examine your own walk with God: has it grown grim, mechanical, weighed down by obligation? The cure is not to try harder but to remember who he is &mdash; good, loving, faithful &mdash; and to let that truth thaw your heart back into joy. Serving God is not slavery but the highest privilege, and the psalm calls you to do it with a glad heart.",
  },
  {
    heading: "Build Your Worship on Who God Is",
    color: TEAL,
    body: "&lsquo;Know that the LORD, he is God! It is he who made us, and we are his.&rsquo; True worship is rooted in true knowledge. Feelings rise and fall, circumstances change, but the worship Psalm 100 commands rests on solid ground: God is God, he made us, we are his. When your emotions run dry and you do not feel like praising, return to what you know. Preach to yourself the truth that you belong to God by creation and by covenant, that you are the sheep of his pasture. Worship that is anchored in the unchanging character of God can stand in seasons when worship that is anchored in mood cannot.",
  },
  {
    heading: "Come with Thanksgiving",
    color: PURPLE,
    body: "&lsquo;Enter his gates with thanksgiving, and his courts with praise.&rsquo; Thanksgiving is meant to be the posture with which we approach God &mdash; not an afterthought tacked on at the end, but the very gate through which we enter his presence. Make gratitude a discipline. Before you bring your requests, before you pour out your troubles, pause to name the goodness of God and to give him thanks. Cultivate the habit of entering each day, each prayer, each gathering of God&rsquo;s people, with thanksgiving on your lips. A grateful heart sees the world differently, and it draws near to God in exactly the way he invites.",
  },
  {
    heading: "Rest in His Everlasting Faithfulness",
    color: GOLD,
    body: "&lsquo;The LORD is good; his steadfast love endures forever, and his faithfulness to all generations.&rsquo; In a world of broken promises and shifting affections, here is a love that does not run out and a faithfulness that spans the generations. Let this be your anchor when life is uncertain. The God who kept faith with believers long before you, and who will keep faith with those who come after you, is keeping faith with you now. When you fear for the future &mdash; your own, your children&rsquo;s, the church&rsquo;s &mdash; return to this threefold confession and rest. His goodness is not a mood, his love is not a season, his faithfulness is not a single generation; all of it endures forever.",
  },
];

const reflectionQuestions = [
  "Psalm 100 commands us to &lsquo;serve the LORD with gladness.&rsquo; Where has your own service to God become joyless or burdened, and what truth about him could restore your gladness?",
  "The psalm grounds worship in knowing that &lsquo;it is he who made us, and we are his.&rsquo; How does remembering that you belong to God &mdash; that you are not your own &mdash; change the way you live this week?",
  "What does it mean for you, in practice, to &lsquo;enter his gates with thanksgiving&rsquo; rather than coming to God first with complaints or requests?",
  "Verse 5 confesses three things about God: he is good, his love endures forever, his faithfulness reaches all generations. Which of these three do you most need to hear today, and why?",
  "Psalm 100 moves from &lsquo;all the earth&rsquo; to the single worshiper at the gates. How do you hold together the global call of worship and your own personal coming to God?",
  "William Kethe turned this psalm into &lsquo;All People That on Earth Do Dwell.&rsquo; How might singing or praying this psalm reshape your habits of thanksgiving in everyday life?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 100: A Psalm for Giving Thanks" },
  { videoId: "OjJ7GkWCHvA", title: "It Is He Who Made Us, and We Are His" },
  { videoId: "pHBzJ2dVXgk", title: "Enter His Gates with Thanksgiving" },
  { videoId: "3sO5FH2ybPY", title: "His Steadfast Love Endures Forever" },
];

const data: TabbedGuideData = {
  accent: TEAL,
  badge: `Psalms Deep Dive`,
  title: `Psalm 100: Enter His Gates with Thanksgiving`,
  intro: `The &lsquo;Jubilate Deo,&rsquo; a Psalm for giving thanks &mdash; the great call to make a joyful noise to the LORD, to serve him with gladness, and to come into his presence with singing. Built on the confession that he made us and we are his, it ushers us through the gates with thanksgiving, grounded in a God who is good, whose steadfast love endures forever, and whose faithfulness reaches to all generations.`,
  keyVerseLabel: `Key Verse &mdash; Psalm 100:4&ndash;5`,
  keyVerse: `&ldquo;Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name! For the LORD is good; his steadfast love endures forever, and his faithfulness to all generations.&rdquo;`,
  overviewBlocks,
  overviewClosingHeading: `The Old Hundredth`,
  overviewClosingBody: `Psalm 100 is one of the most beloved psalms in the worship of the church, and William Kethe&rsquo;s metrical version &mdash; &lsquo;All People That on Earth Do Dwell,&rsquo; sung to the tune known as the &lsquo;Old Hundredth&rsquo; &mdash; carried it into congregations across the world. The confession at its heart, &lsquo;it is he who made us, and we are his,&rsquo; is the foundation of all creaturely humility and belonging, and its threefold ground of praise in verse 5 &mdash; God is good, his steadfast love endures forever, his faithfulness to all generations &mdash; has anchored grateful worship for centuries.`,
  themesHeading: `Key Themes of Psalm 100`,
  themeItems,
  verseIntro: `Walk through Psalm 100 in its two movements &mdash; the joyful summons grounded in who God is, and the entering of his gates grounded in his everlasting goodness. Tap each section to open it.`,
  verseSections,
  applicationHeading: `Living Psalm 100`,
  applicationBlocks,
  reflectionHeading: `Questions for Reflection`,
  reflectionQuestions,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your meditation on Psalm 100 through teaching on the call to thanksgiving, the confession that God made us and we are his, the entering of his gates, and the steadfast love that endures forever.`,
  videos: videoItems,
  closingTitle: `A Closing Prayer`,
  closingBody: `O LORD our God, we make a joyful noise to you, for you are God, and there is no other. You made us, and we are yours; we are your people and the sheep of your pasture. Teach us to serve you with gladness and to come into your presence with singing. We enter your gates with thanksgiving and your courts with praise; we give you thanks and bless your name. For you are good, and your steadfast love endures forever, and your faithfulness reaches to all generations. Anchor our hearts in your unchanging goodness, that our thanksgiving may never cease, in the name of Jesus Christ, through whom the way into your presence stands open. Amen.`,
};

export default function Page() {
  return <TabbedGuideTemplate data={data} />;
}
