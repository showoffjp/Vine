"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "The Sons of Korah (superscription: To the choirmaster. A Psalm of the Sons of Korah)" },
  { label: "Genre", value: "Communal prayer for restoration -- the Psalter's great revival psalm" },
  { label: "Likely Setting", value: "After the return from exile: restored to the land, yet languishing -- forgiven once, needing reviving again (compare Ezra-Nehemiah, Haggai)" },
  { label: "Structure", value: "vv. 1-3 you were favorable (the remembered restoration); vv. 4-7 restore us again; vv. 8-9 let me hear what God will speak; vv. 10-13 the great meeting: love and faithfulness, righteousness and peace" },
  { label: "Key Verse", value: "v. 6 -- Will you not revive us again, that your people may rejoice in you?" },
  { label: "Key Image", value: "v. 10 -- Steadfast love and faithfulness meet; righteousness and peace kiss each other" },
  { label: "NT Connection", value: "The fourfold embrace fulfilled at the cross (Romans 3:26; 5:1); faithfulness springing from the ground read by the church as the Incarnation (John 1:14)" },
];

const THEMES = [
  {
    color: GREEN,
    title: "Will You Not Revive Us Again? The Anatomy of Revival Prayer",
    body: `Psalm 85 is prayed from a strange middle place: after deliverance, before flourishing. Verses 1-3 look back on a real restoration -- &ldquo;LORD, you were favorable to your land; you restored the fortunes of Jacob. You forgave the iniquity of your people; you covered all their sin&rdquo; -- language that fits the return from exile. The people are home. The great forgiveness has happened. And yet the present is gray: the prayers of verses 4-7 reveal a community languishing under God&rsquo;s displeasure, needing what it once had. Hence the psalm&rsquo;s central question, one of the great sentences of the Bible: &ldquo;Will you not revive us <em>again</em>, that your people may rejoice in you?&rdquo; (v. 6).
<br/><br/>
The word &ldquo;again&rdquo; is the whole theology of revival. The psalm does not ask God to do a new thing but to do <em>his</em> thing once more -- the pattern of verses 1-3 repeated in the present tense. Revival, biblically, is not novelty; it is repetition: the God who restored, restoring; the God who forgave, forgiving; life returning where life had been before (the verb &ldquo;revive,&rdquo; chayah, is literally &ldquo;cause to live&rdquo;). Every true awakening in the church&rsquo;s history has been prayed for in exactly this grammar -- Habakkuk&rsquo;s &ldquo;in the midst of the years revive it&rdquo; (Habakkuk 3:2), the Welsh and Hebridean praying generations pleading the recorded past against the barren present.
<br/><br/>
Note also revival&rsquo;s stated goal: &ldquo;that your people may rejoice <em>in you</em>.&rdquo; Not in the experience, the numbers, or the movement -- in God. The psalm asks for nothing exotic: joy in God among the people of God is the entire request. Where that exists, revival has come, whatever else is missing; where it is absent, nothing else counts as revival, whatever else is present.
<br/><br/>
And the middle place from which the psalm prays -- forgiven yet flat, returned yet not restored -- may be the most common address of real churches and real believers. Psalm 85 is proof that the condition is neither hopeless nor final, and that the way out is not technique but petition: showing God his own former mercies and asking, with covenant persistence, for the sequel.`,
  },
  {
    color: TEAL,
    title: "Let Me Hear What God the LORD Will Speak: The Listening Turn",
    body: `At verse 8 the psalm makes a hinge-turn that most prayers never make: it stops talking. &ldquo;Let me hear what God the LORD will speak, for he will speak peace to his people, to his saints; but let them not turn back to folly.&rdquo; After seven verses of remembering and asking, a single voice -- perhaps the liturgist, standing for the congregation -- goes quiet and listens. Petition becomes attention.
<br/><br/>
This is the posture on which the psalm&rsquo;s glory depends: everything in verses 10-13 -- the meeting, the kiss, the springing earth -- comes <em>after</em> the listening, as what the LORD speaks. Prayer that only speaks receives only its own echo; the psalmist expects an answer and positions himself to hear one. Scripture is full of the same discipline: &ldquo;Speak, LORD, for your servant hears&rdquo; (1 Samuel 3:9-10); Habakkuk stationing himself on the watchtower &ldquo;to see what he will say to me&rdquo; (Habakkuk 2:1); Mary at the feet of Jesus, having &ldquo;chosen the good portion&rdquo; (Luke 10:39, 42). For the Christian, the listening has a located answer: God &ldquo;has spoken to us by his Son&rdquo; (Hebrews 1:2), and the Scriptures are where the voice is reliably heard.
<br/><br/>
What the psalmist is confident God will speak is shalom: &ldquo;he will speak peace to his people.&rdquo; Not peace as circumstance first, but peace as verdict and welfare -- wholeness pronounced from God&rsquo;s side. Yet the confidence carries a condition of continuance: &ldquo;let them not turn back to folly.&rdquo; Revival heard must be revival kept; the peace spoken to the saints is forfeited by returning to the very folly from which they were restored (compare 2 Peter 2:21-22; John 5:14). Grace is free; it is not casual.
<br/><br/>
Verse 9 widens the promise to its real scale: &ldquo;Surely his salvation is near to those who fear him, <em>that glory may dwell in our land</em>.&rdquo; The goal of revival is not relief but residence -- the kavod, the weighty glory that once filled tabernacle and temple (Exodus 40:34; 1 Kings 8:11), dwelling in the land again. The church knows where that promise landed: &ldquo;the Word became flesh and <em>dwelt</em> among us, and we have seen his glory&rdquo; (John 1:14). The glory came home in person.`,
  },
  {
    color: GOLD,
    title: "Steadfast Love and Faithfulness Meet; Righteousness and Peace Kiss",
    body: `Verse 10 is one of the most beloved images in the Psalter: &ldquo;Steadfast love and faithfulness meet; righteousness and peace kiss each other.&rdquo; Four great attributes -- hesed (covenant love), emet (faithfulness/truth), tsedeq (righteousness), shalom (peace) -- are personified as four figures converging in the restored land, embracing like long-parted friends. It is a picture of total reconciliation: heaven&rsquo;s qualities at peace with each other and at home among God&rsquo;s people.
<br/><br/>
The old divines heard in this verse the deepest problem of the gospel and its solution. How can righteousness -- which must judge sin -- kiss peace, which pardons the sinner? How can truth, which testifies against us, meet mercy, which pleads for us, without one of them yielding? Left as abstractions, the four are in tension; every cheap reconciliation sacrifices one pair to the other -- mercy without truth (sentimentality) or righteousness without peace (condemnation). The verse promises a meeting in which none of the four is diminished.
<br/><br/>
The church has always answered: the meeting place is Christ, and specifically the cross. There &ldquo;God put [him] forward as a propitiation... so that he might be <em>just and the justifier</em> of the one who has faith in Jesus&rdquo; (Romans 3:25-26) -- righteousness fully satisfied, peace fully granted; mercy and truth fulfilled in the same act (John 1:17). &ldquo;Therefore, since we have been justified by faith, we <em>have peace</em> with God through our Lord Jesus Christ&rdquo; (Romans 5:1). The kiss of Psalm 85:10 happened at Golgotha, in public, at noon.
<br/><br/>
Verse 11 extends the embrace along a vertical axis: &ldquo;Faithfulness springs up from the ground, and righteousness looks down from the sky.&rdquo; Earth answers heaven; heaven bends to earth. The church&rsquo;s preachers -- especially at Christmas -- have long loved the picture: truth <em>springing up from the ground</em> as the Faithful One born of earth&rsquo;s own stock in Bethlehem, while righteousness looks down well pleased (compare Isaiah 45:8, &ldquo;let the earth open, that salvation and righteousness may bear fruit&rdquo;). Whether read as poetry of the restored land or prophecy of the Incarnation, the direction of the traffic is the gospel&rsquo;s: God&rsquo;s attributes are not at war over the sinner; in Christ they have met, kissed, and moved in.`,
  },
  {
    color: PURPLE,
    title: "The LORD Will Give What Is Good: Righteousness as the Road He Walks",
    body: `The psalm closes with harvest and procession: &ldquo;Yes, the LORD will give what is good, and our land will yield its increase. Righteousness will go before him and make his footsteps a way&rdquo; (vv. 12-13). After the meeting and the kiss, the land itself responds -- covenant blessing as agriculture (compare Leviticus 26:3-4; Psalm 67:6): rain in season, ground unlocked, increase yielded. Revival in Scripture is never merely interior; when God turns again to his people, even the fields feel it. The material world is not beneath his renewing.
<br/><br/>
The confidence of verse 12 -- &ldquo;the LORD will give what is <em>good</em>&rdquo; -- is worth resting a whole prayer life on. It does not say the LORD will give what is easy, or what is asked, but what is good; and it says he <em>will</em>. James 1:17 stands on the same rock: every good and perfect gift comes down from the Father of lights. The reviving people can trust the content of the answer to the character of the Giver.
<br/><br/>
The final verse is the psalm&rsquo;s quiet masterpiece: &ldquo;Righteousness will go before him and make his footsteps a way.&rdquo; Righteousness is pictured as the herald walking ahead of the LORD, preparing the road he will walk into his land and among his people -- and his footsteps themselves become a path (literally, righteousness &ldquo;sets his footprints as a way&rdquo;). Where God walks, a road forms; and his people are invited to walk in the prints. The image gathers the whole psalm: the God who was favorable (vv. 1-3) is coming again (vv. 9-13), his approach heralded by righteousness, his passage leaving a highway.
<br/><br/>
The New Testament opens with exactly this scene: a herald in the wilderness crying &ldquo;Prepare the way of the Lord&rdquo; (Isaiah 40:3; Mark 1:2-3), and then the Lord himself walking into his land -- Galilee, Jerusalem, Golgotha -- his footsteps making the way his people now follow: &ldquo;leaving you an example, so that you might follow in his steps&rdquo; (1 Peter 2:21). Psalm 85 ends, as the gospel begins, with God on the road toward his people -- and the road he leaves behind him is the one we walk home on.`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-3",
    text: "LORD, you were favorable to your land; you restored the fortunes of Jacob. You forgave the iniquity of your people; you covered all their sin. Selah. You withdrew all your wrath; you turned from your hot anger.",
    comment: `The prayer opens as memory: five perfect-tense mercies -- favored, restored, forgave, covered, withdrew. &ldquo;Restored the fortunes&rdquo; (shuv shevut) is the Bible&rsquo;s idiom for the great reversal, especially the return from exile (Psalm 126:1); &ldquo;covered all their sin&rdquo; uses atonement&rsquo;s own vocabulary (kasah; compare Psalm 32:1). The congregation banks these acts deliberately: everything it is about to ask, it asks as repetition. This is the standing method of biblical petition -- God&rsquo;s past as the measure and warrant of prayer&rsquo;s present requests (compare Psalm 44:1-3; Habakkuk 3:2). The Selah lets the remembered grace stand fully in view before the contrast is spoken.`,
  },
  {
    ref: "vv. 4-7",
    text: "Restore us again, O God of our salvation, and put away your indignation toward us! Will you be angry with us forever?... Will you not revive us again, that your people may rejoice in you? Show us your steadfast love, O LORD, and grant us your salvation.",
    comment: `The middle place speaks: restored once (vv. 1-3), the people need restoring &ldquo;again&rdquo; -- home from exile yet languishing under displeasure. The questions of verse 5 (&ldquo;forever? ... to all generations?&rdquo;) are covenant logic pressed as protest: everlasting anger would contradict the God whose anger is &ldquo;but for a moment&rdquo; (Psalm 30:5). Verse 6 is the Psalter&rsquo;s revival verse: chayah -- cause us to live again -- with joy in God as the stated end. Verse 7 compresses the whole into the two great covenant words: show hesed, grant yeshua (salvation) -- a verse the church has sung at evening prayer for centuries. Revival is asked for, never engineered; it is God&rsquo;s to give and prayer&rsquo;s to seek.`,
  },
  {
    ref: "vv. 8-9",
    text: "Let me hear what God the LORD will speak, for he will speak peace to his people, to his saints; but let them not turn back to folly. Surely his salvation is near to those who fear him, that glory may dwell in our land.",
    comment: `The hinge: petition becomes attention. A single voice quiets the congregation to listen, confident of the content -- shalom spoken to the saints -- while sounding the condition of continuance: no turning back to folly (grace kept, not presumed; compare 2 Peter 2:21). Verse 9 names revival&rsquo;s true scale: salvation near, &ldquo;<em>that glory may dwell in our land</em>&rdquo; -- kavod, the glory that filled tabernacle and temple (Exodus 40:34; 1 Kings 8:11), taking up residence again. John 1:14 records the promise&rsquo;s keeping: the Word dwelt (tabernacled) among us, &ldquo;and we have seen his glory.&rdquo; What the psalm listens for, the gospel narrates.`,
  },
  {
    ref: "vv. 10-11",
    text: "Steadfast love and faithfulness meet; righteousness and peace kiss each other. Faithfulness springs up from the ground, and righteousness looks down from the sky.",
    comment: `The vision the listening receives: four attributes personified -- hesed and emet meeting, tsedeq and shalom kissing -- total reconciliation with nothing diminished. The old theological question hides in the poetry: how can righteousness, which must judge, kiss peace, which pardons? The church&rsquo;s answer is Romans 3:25-26 -- at the cross God is &ldquo;just <em>and</em> the justifier,&rdquo; truth and mercy fulfilled in one act, so that &ldquo;justified by faith, we have peace with God&rdquo; (Romans 5:1). Verse 11 sets the meeting on a vertical axis -- faithfulness springing from the ground while righteousness looks down -- earth answering heaven; preachers across the centuries have heard Bethlehem in it (compare Isaiah 45:8), truth sprung from the ground in person.`,
  },
  {
    ref: "vv. 12-13",
    text: "Yes, the LORD will give what is good, and our land will yield its increase. Righteousness will go before him and make his footsteps a way.",
    comment: `The psalm closes in confidence and procession. &ldquo;The LORD will give what is good&rdquo; rests the answer&rsquo;s content on the Giver&rsquo;s character (James 1:17), and the land&rsquo;s yielded increase makes revival tangible -- covenant renewal reaching the fields (Leviticus 26:3-4; Psalm 67:6). The final image is the LORD on the road: righteousness as herald going before him, his footsteps forming a way for his people to walk in. The Gospels open on this very scene -- the herald crying &ldquo;prepare the way of the Lord&rdquo; (Mark 1:2-3) and the Lord walking into his land, leaving footprints that become the church&rsquo;s path (1 Peter 2:21). The psalm that began remembering God&rsquo;s past favor ends watching him approach.`,
  },
];

const APPLICATIONS = [
  {
    color: GREEN,
    title: "Pray 'Again' -- the Grammar of Revival",
    body: `Learn the psalm&rsquo;s method: revival is prayed for in the grammar of repetition. Gather the record -- Scripture&rsquo;s awakenings (Sinai, Carmel, Pentecost), the church&rsquo;s (name the ones your tradition remembers), and your own (the season your faith was most alive) -- and pray it back: &ldquo;You did this. Do it <em>again</em>.&rdquo; This is not nostalgia; it is warrant. God&rsquo;s past is his self-disclosure, and Psalm 85 treats it as prayer&rsquo;s strongest argument (Habakkuk 3:2 prays the same way).
<br/><br/>
Keep the goal as clean as verse 6 keeps it: &ldquo;that your people may rejoice <em>in you</em>.&rdquo; Test every longing for renewal -- personal or congregational -- against that clause. Wanting the feelings, the crowds, or the cultural wins back is not the same as wanting God back; the psalm&rsquo;s single request is joy in God among the people of God, and it is a request God loves to grant.
<br/><br/>
<em>Prayer prompt</em>: O God of our salvation, you have restored before -- your Word records it, your church remembers it, my own life has tasted it. Restore us again. Revive us again -- me, my household, your church -- not for the experience but for yourself: that your people may rejoice in you. Show us your steadfast love, O LORD, and grant us your salvation. Amen.`,
  },
  {
    color: TEAL,
    title: "Make the Listening Turn",
    body: `Verse 8 assigns the discipline most missing from modern prayer: the deliberate stop. After you have remembered and asked, sit -- &ldquo;let me hear what God the LORD will speak&rdquo; -- with Scripture open, because that is where his voice is reliably heard (Hebrews 1:1-2). A workable pattern: pray the psalm&rsquo;s first seven verses in your own words, then read a passage slowly and ask one question of it -- what is God speaking here to his saints? -- and write down what you hear before you speak again. Prayer that never listens receives only its own echo.
<br/><br/>
Expect what the psalmist expected: peace. The settled disposition of God toward his people in Christ is shalom -- &ldquo;peace I leave with you&rdquo; (John 14:27) -- so a &ldquo;word&rdquo; that traffics only in condemnation is not his voice to his saints (Romans 8:1). But keep the psalm&rsquo;s condition in view as well: &ldquo;let them not turn back to folly.&rdquo; Peace heard is peace to be kept -- if the listening reveals a folly you were restored from and are drifting toward again, the hearing is not complete until the turning is.
<br/><br/>
And note the order for every anxious asker: the glorious vision of verses 10-13 was given to the one who went quiet. The best part of the psalm came after the psalmist stopped talking.`,
  },
  {
    color: GOLD,
    title: "Stand at the Meeting Place",
    body: `Verse 10 is not only a beautiful line; it is the place you live. Every accusation against you -- from conscience, from others, from the accuser -- assumes the four attributes are still estranged: that truth must condemn you, that righteousness cannot embrace you. The cross answers that the meeting has happened: righteousness kissed peace over your case specifically, when God proved &ldquo;just and the justifier of the one who has faith in Jesus&rdquo; (Romans 3:26). You do not stand before an unresolved tension; you stand at a settled embrace -- &ldquo;justified by faith, we <em>have</em> peace with God&rdquo; (Romans 5:1).
<br/><br/>
Practice standing there. When guilt over confessed sin returns, do not re-litigate; point to the meeting place: love and faithfulness met, and neither was cheated -- your pardon is righteous (1 John 1:9). And carry the same fourfold embrace into your dealings with others: reconciliation that sacrifices truth to keep peace is sentimentality; truth-telling that refuses peace is condemnation. Aim, in your conflicts, marriage, and church, at the whole kiss -- honest and merciful at once, as God was with you.
<br/><br/>
<em>Prayer prompt</em>: Father, thank you that at the cross your steadfast love and your faithfulness met, and your righteousness and your peace kissed -- over me. When my heart condemns me, bring me back to that meeting place. And make me an agent of the same embrace: truthful without cruelty, peaceable without pretending. Through Christ, in whom mercy and truth are one. Amen.`,
  },
  {
    color: PURPLE,
    title: "Walk in the Footprints",
    body: `The psalm ends with God on the move -- righteousness heralding him, his footsteps forming a road -- and that image is your discipleship in one picture. You are not asked to blaze the trail to renewal; you are asked to walk in prints already made. Christ has walked into his land, through obedience, through suffering, through death, out of the tomb -- &ldquo;leaving you an example, so that you might follow in his steps&rdquo; (1 Peter 2:21). The revived life is not an improvisation; it is a following.
<br/><br/>
Practically, prepare the road the way the herald did: remove what obstructs his approach in your own terrain -- the valley of neglect filled in (restore the means of grace you dropped), the hill of pride made low (the apology owed, the correction received), the crooked made straight (the compromise ended). Revival tarries on unprepared roads; &ldquo;prepare the way of the Lord&rdquo; is addressed to his people first (Mark 1:3).
<br/><br/>
And trust the harvest to the Giver: &ldquo;the LORD will give what is good, and our land will yield its increase.&rdquo; Sow toward the revival you prayed for -- in your family, your congregation, your own habits -- and leave the yield to the One whose gifts are only and always good (James 1:17; Galatians 6:9). The psalm&rsquo;s last certainty is enough to walk on: he is coming up the road, and the road he leaves behind is the one that leads his people home.`,
  },
];

const data: PsalmGuideData = {
  accent: GREEN,
  heroGradientEnd: "#071507",
  badge: "Psalm 85",
  metaLine: "Psalm of the Sons of Korah &bull; 13 Verses &bull; The Revival Psalm",
  title: "Righteousness and Peace Kiss Each Other",
  heroIntro: "The Psalter&rsquo;s great revival prayer -- prayed from the middle place between deliverance and flourishing. The congregation banks God&rsquo;s remembered mercies, asks him to do his own deeds again, goes quiet to hear what he will speak -- and receives the vision of the great meeting: steadfast love and faithfulness embracing, righteousness and peace kissing, and the LORD himself walking up the road into his land.",
  blockquote: "&ldquo;Will you not revive us again, that your people may rejoice in you?... Steadfast love and faithfulness meet; righteousness and peace kiss each other.&rdquo;",
  blockquoteRef: "&mdash; Psalm 85:6, 10",
  overviewHeading: "Overview of Psalm 85",
  overviewParagraphs: [
    `Psalm 85 is the Psalter&rsquo;s revival psalm, prayed from an address most believers and churches will recognize: after deliverance, before flourishing. Verses 1-3 remember a real restoration in five perfect-tense mercies -- favored, restored, forgave, covered, withdrew -- language that fits the return from exile. But the present is gray: home, yet languishing. From that middle place rises the psalm&rsquo;s central question and the Bible&rsquo;s definitive revival prayer: &ldquo;Will you not revive us <em>again</em>, that your people may rejoice in you?&rdquo; (v. 6).`,
    `The word &ldquo;again&rdquo; carries the whole theology. Revival is not novelty but repetition -- God asked to do his own recorded deeds once more (Habakkuk 3:2 prays identically). And its goal is kept perfectly clean: joy <em>in God</em> among the people of God -- not experiences, numbers, or influence. The psalm&rsquo;s method is the standing method of biblical petition: bank the remembered mercies (vv. 1-3), then plead them against the barren present (vv. 4-7), compressing everything into the two great covenant words of verse 7: show us your hesed; grant us your salvation.`,
    `At verse 8 the psalm makes the turn most prayers never make: it stops talking. &ldquo;Let me hear what God the LORD will speak&rdquo; -- petition becomes attention, confident that what he speaks to his saints is peace, and sober that peace heard must be kept: &ldquo;let them not turn back to folly.&rdquo; Verse 9 names revival&rsquo;s true scale -- salvation near, &ldquo;that <em>glory</em> may dwell in our land&rdquo;: the kavod that filled tabernacle and temple taking up residence again. John 1:14 records where that promise landed: the Word dwelt among us, and we have seen his glory.`,
    `What the listening receives is the psalm&rsquo;s crown (vv. 10-11): four attributes personified and reconciled -- steadfast love and faithfulness meeting, righteousness and peace kissing, faithfulness springing up from the ground while righteousness looks down from the sky. The old question hidden in the poetry -- how can righteousness, which must judge, kiss peace, which pardons? -- is answered by the church at one place: the cross, where God is &ldquo;just and the justifier&rdquo; (Romans 3:26), so that &ldquo;justified by faith, we have peace with God&rdquo; (Romans 5:1). Preachers have long heard Bethlehem in verse 11 as well: truth sprung from the ground in person, heaven bending to earth.`,
    `The psalm ends with harvest and procession (vv. 12-13): the LORD giving what is good, the land yielding increase -- renewal reaching even the fields -- and the closing masterpiece: &ldquo;Righteousness will go before him and make his footsteps a way.&rdquo; God on the road toward his people, heralded by righteousness, his footprints forming the path they will walk. The Gospels open on exactly that scene -- &ldquo;prepare the way of the Lord&rdquo; -- and the risen Christ&rsquo;s steps remain the church&rsquo;s road (1 Peter 2:21): the psalm that began by remembering God&rsquo;s past favor ends watching him approach, and every generation since prays it in between his comings.`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 85 teaches the grammar of revival prayer, the listening turn, standing at the meeting place of mercy and truth, and walking in the footprints of the approaching God.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
