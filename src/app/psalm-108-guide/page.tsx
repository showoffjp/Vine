"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "David (superscription: A Song. A Psalm of David)" },
  { label: "Composition", value: "A composite: vv. 1-5 = Psalm 57:7-11; vv. 6-13 = Psalm 60:5-12" },
  { label: "Genre", value: "Praise moving into national petition for victory" },
  { label: "Structure", value: "vv. 1-4 steadfast praise that wakes the dawn; v. 5 the hinge doxology; vv. 6-9 God's word over the map; vv. 10-13 help against the foe" },
  { label: "Key Verse", value: "v. 13 -- With God we shall do valiantly; it is he who will tread down our foes" },
  { label: "Companions", value: "Psalm 57 (David in the cave) and Psalm 60 (after military crisis)" },
  { label: "NT Connection", value: "Praise among the nations fulfilled as the gospel goes to the Gentiles (Romans 15:8-11); the steadfast heart echoed in Acts 2:25-26" },
];

const THEMES = [
  {
    color: TEAL,
    title: "Old Prayers for New Battles: Why Psalm 108 Repeats Scripture",
    body: `Psalm 108 contains almost nothing new -- and that is its genius. Verses 1-5 reproduce Psalm 57:7-11 (David&rsquo;s song from the cave, when he fled Saul); verses 6-13 reproduce Psalm 60:5-12 (Israel&rsquo;s prayer after military disaster). An editor -- perhaps David himself, perhaps a later worship leader under inspiration -- deliberately stitched two old prayers into one new liturgy for a new crisis. Scripture here recycles Scripture.
<br/><br/>
This tells us something important about how God&rsquo;s people are meant to pray. The psalm does not treat old words as stale words. Prayers forged in one valley are carried into the next; the song that steadied David in a cave is redeployed, years later, for a nation facing Edom. Derek Kidner remarks that the psalm shows &ldquo;the reusability of Scripture&rdquo; -- that the praises and petitions of the past are a treasury, not a museum. What God&rsquo;s people have already been given is sufficient equipment for what they have not yet faced.
<br/><br/>
Notice also the order of the splice: the praise half (from Psalm 57) now comes first, and the desperate petition (from Psalm 60) comes second. In their original settings, both psalms moved from distress toward hope. Recombined, the movement is bolder: Psalm 108 begins in confident doxology and only then descends into the crisis. The worshiper has learned something between the original psalms and this one -- that praise is not merely where prayer ends but where it can begin.
<br/><br/>
For the Christian, this is a warrant and a method. We are not required to invent fresh eloquence for every fresh trouble; we are invited to pray what God has already given -- psalms, promises, the Lord&rsquo;s own prayer -- aiming old inspired words at new battles. The believer who stocks the memory with Scripture in calm seasons is arming the mouth for hard ones.`,
  },
  {
    color: GOLD,
    title: "My Heart Is Steadfast: Praise That Wakes the Dawn",
    body: `The psalm opens with one of the great declarations of the Psalter: &ldquo;My heart is steadfast, O God! I will sing and make melody with all my being! Awake, O harp and lyre! I will awake the dawn!&rdquo; (vv. 1-2). The word &ldquo;steadfast&rdquo; (nakon) means fixed, established, settled -- a heart that has stopped wobbling. And the evidence of the fixed heart is audacious: rather than waiting for morning to wake him, the singer intends to wake the morning. Praise gets up before the sun.
<br/><br/>
Remember where these words were first sung: in a cave, with Saul&rsquo;s soldiers hunting the singer (Psalm 57). The steadfast heart is not the product of resolved circumstances; it is fixed on God while everything else is still unfixed. That is what makes the declaration credible rather than naive. Spurgeon: &ldquo;It is the mark of a strong faith that it can sing in the dark, and tune its harp while the shadow of death is still over it.&rdquo;
<br/><br/>
Verse 3 pushes the praise outward: &ldquo;I will give thanks to you, O LORD, among the peoples; I will sing praises to you among the nations.&rdquo; Israel&rsquo;s worship was never meant to stay indoors. The king declares the LORD&rsquo;s hesed and faithfulness in earshot of the Gentiles, anticipating the day when the nations themselves would join the song. Paul quotes this very strand of the Psalter (Romans 15:9, citing the parallel in Psalm 18:49) to prove that the gospel&rsquo;s reach to the Gentiles was God&rsquo;s plan all along.
<br/><br/>
And the ground of it all is verse 4: &ldquo;For your steadfast love is great above the heavens; your faithfulness reaches to the clouds.&rdquo; The heart is steadfast (nakon) because the love is steadfast (hesed). Fixity below answers immensity above. Christians sing this with the resurrection behind them: the dawn was literally woken on the third day, and our hearts are fixed on the One who fixed the empty tomb in history.`,
  },
  {
    color: PURPLE,
    title: "God Has Spoken in His Holiness: The Word Over the Map",
    body: `At verse 7 the psalm pivots from song to oracle: &ldquo;God has spoken in his holiness: &lsquo;With exultation I will divide up Shechem and portion out the Vale of Succoth. Gilead is mine; Manasseh is mine; Ephraim is my helmet, Judah my scepter. Moab is my washbasin; upon Edom I cast my shoe.&rsquo;&rdquo; God speaks over the map like a landowner walking his estate. Shechem and Succoth (west and east of the Jordan), Gilead and Manasseh (the contested territories), Ephraim (the military strength -- his helmet), Judah (the royal line -- his scepter): all his. Even the hostile neighbors are assigned domestic roles: Moab the washbasin at the door, Edom the place a man tosses his sandal.
<br/><br/>
The theology under the geography is total divine ownership. &ldquo;The earth is the LORD&rsquo;s and the fullness thereof&rdquo; (Psalm 24:1). Israel&rsquo;s claim to the land was never self-generated; it rested on God having spoken &ldquo;in his holiness&rdquo; -- his word was the title deed. And the enemies&rsquo; power, however menacing on the ground, is domestic furniture in the throne room of heaven. Matthew Henry delights in the picture: nations that terrify the people of God are, to God, &ldquo;vessels in which he washes his feet.&rdquo;
<br/><br/>
This is not a license for any modern nation&rsquo;s ambitions; it is a window into the sovereignty of God over all territory and all powers. The New Testament universalizes the claim in Christ: &ldquo;All authority in heaven and on earth has been given to me&rdquo; (Matthew 28:18); the kingdoms of this world are destined to become &ldquo;the kingdom of our Lord and of his Christ&rdquo; (Revelation 11:15). Every map, every border, every superpower sits inside a prior sentence spoken in holiness.
<br/><br/>
For the believer facing overwhelming opposition -- cultural, personal, spiritual -- this theme retrains the eyes. The question is never first &ldquo;how strong is the enemy?&rdquo; but &ldquo;what has God said?&rdquo; The word spoken in holiness outranks the facts on the ground, and faith is the art of measuring the battlefield by the word rather than the word by the battlefield.`,
  },
  {
    color: ROSE,
    title: "Vain Is the Salvation of Man: Help That Comes from God Alone",
    body: `The psalm&rsquo;s final movement is startlingly candid for a war song: &ldquo;Have you not rejected us, O God? You do not go out, O God, with our armies. Oh grant us help against the foe, for vain is the salvation of man!&rdquo; (vv. 11-12). These lines were forged in the aftermath of real defeat (Psalm 60); Israel had learned by losing that armies without God are arithmetic without power. The confession &ldquo;vain is the salvation of man&rdquo; -- shav teshu&rsquo;at adam, literally &ldquo;worthless is the deliverance of humanity&rdquo; -- is the negative theology that makes the final verse blaze: &ldquo;With God we shall do valiantly; it is he who will tread down our foes&rdquo; (v. 13).
<br/><br/>
Notice that the psalm holds both poles without contradiction: human effort is worthless as a source of salvation, and yet &ldquo;we shall do valiantly&rdquo; -- there is real human action, real courage, real fighting to be done. The resolution is in the preposition: <em>with God</em>. Grace does not replace valor; it grounds it. Augustine&rsquo;s formulation captures the psalm: God&rsquo;s gifts do not make our working unnecessary; they make it possible.
<br/><br/>
This rebukes the two chronic distortions of the life of faith. Self-reliance ignores verse 12 -- it trusts the horse, the chariot, the strategy, the platform, the bank account (Psalm 20:7). Passivity ignores verse 13 -- it waits for God to act while refusing the valiance he commands. The biblical posture is Nehemiah&rsquo;s: &ldquo;we prayed to our God and set a guard&rdquo; (Nehemiah 4:9); pray as if everything depends on God, and fight because he fights for you.
<br/><br/>
The Christian sings verse 13 from the far side of its greatest fulfillment. At the cross, where every &ldquo;salvation of man&rdquo; was exposed as vain, God himself trod down the foes -- sin, death, and the powers (Colossians 2:15). Our valiant doing now -- perseverance, witness, warfare against sin -- is done &ldquo;with God,&rdquo; in the strength of a victory already won: &ldquo;in all these things we are more than conquerors through him who loved us&rdquo; (Romans 8:37).`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-4",
    text: "My heart is steadfast, O God! I will sing and make melody with all my being! Awake, O harp and lyre! I will awake the dawn! I will give thanks to you, O LORD, among the peoples... For your steadfast love is great above the heavens.",
    comment: `Lifted from Psalm 57:7-11 -- the cave psalm -- these verses carry their history with them: this is praise that was first sung while hunted. The &ldquo;steadfast&rdquo; (nakon) heart is fixed before circumstances are fixed. &ldquo;With all my being&rdquo; (literally &ldquo;my glory&rdquo;) commits the whole self to the song; &ldquo;I will awake the dawn&rdquo; makes praise the day&rsquo;s first initiative rather than its afterthought. The resolve to sing &ldquo;among the peoples... among the nations&rdquo; makes Israel&rsquo;s worship missionary in principle -- doxology in earshot of the Gentiles -- and verse 4 grounds everything in the measureless scale of hesed: love &ldquo;great above the heavens.&rdquo; Praise this large cannot be contained by one nation&rsquo;s borders or one morning&rsquo;s mood.`,
  },
  {
    ref: "vv. 5-6",
    text: "Be exalted, O God, above the heavens! Let your glory be over all the earth! That your beloved ones may be delivered, give salvation by your right hand and answer me!",
    comment: `Verse 5 is the hinge where the two source-psalms are welded, and the welding is theological: the petition for rescue (v. 6) hangs on the prior petition for glory (v. 5). The order matters -- God&rsquo;s exaltation first, our deliverance second, and the second <em>because of</em> the first: &ldquo;<em>that</em> your beloved ones may be delivered.&rdquo; The psalmist has learned to want God&rsquo;s glory as the frame of his own rescue, anticipating the structure of the Lord&rsquo;s Prayer, where &ldquo;hallowed be your name&rdquo; precedes &ldquo;deliver us from evil.&rdquo; &ldquo;Your beloved ones&rdquo; (yedidim) is a covenant term of deep tenderness: the plea rests not on Israel&rsquo;s merit but on God&rsquo;s affection.`,
  },
  {
    ref: "vv. 7-9",
    text: "God has spoken in his holiness: 'With exultation I will divide up Shechem... Gilead is mine; Manasseh is mine; Ephraim is my helmet, Judah my scepter. Moab is my washbasin; upon Edom I cast my shoe; over Philistia I shout in triumph.'",
    comment: `The answer to the prayer is an oracle -- God&rsquo;s own voice claiming the whole map. The tribal territories are his armor and regalia (Ephraim the helmet, Judah the scepter -- the royal line through which Messiah comes, Genesis 49:10); the hostile neighbors are his household utensils (Moab the washbasin, Edom the doormat for his sandal). The rhetoric deliberately deflates the enemies&rsquo; menace: powers that terrify Israel are, from heaven&rsquo;s vantage, bathroom furniture. &ldquo;In his holiness&rdquo; anchors the promise in God&rsquo;s own character -- he cannot speak falsely (Numbers 23:19). Faith&rsquo;s task in every generation is to let what God has spoken outweigh what the enemy displays.`,
  },
  {
    ref: "vv. 10-11",
    text: "Who will bring me to the fortified city? Who will lead me to Edom? Have you not rejected us, O God? You do not go out, O God, with our armies.",
    comment: `The fortified city is likely Sela/Petra, Edom&rsquo;s mountain stronghold -- humanly unassailable. David&rsquo;s question &ldquo;who will bring me?&rdquo; admits that the objective exceeds his strength, and verse 11 voices the rawest line in the psalm: the memory of recent defeat, when God did &ldquo;not go out with our armies.&rdquo; The prayer does not airbrush the past; it brings the felt absence of God directly to God. This is the Psalter&rsquo;s persistent honesty: lament and confidence share the same breath. That the editor kept this dark verse in a psalm that begins so triumphantly teaches the congregation to carry unresolved history into worship rather than checking it at the door.`,
  },
  {
    ref: "vv. 12-13",
    text: "Oh grant us help against the foe, for vain is the salvation of man! With God we shall do valiantly; it is he who will tread down our foes.",
    comment: `The psalm&rsquo;s conclusion sets the two economies side by side: the worthlessness of merely human deliverance (&ldquo;vain is the salvation of man&rdquo;) and the certainty of God-empowered action (&ldquo;with God we shall do valiantly&rdquo;). Both halves of the final verse matter: <em>we</em> shall do valiantly -- real human courage and effort -- and <em>he</em> will tread down our foes -- the decisive power is God&rsquo;s alone. Calvin: the faithful are &ldquo;not called to indolence, but to fight in the confidence of victory.&rdquo; The Christian reads the treading-down through Colossians 2:15 and Romans 16:20 -- God in Christ has disarmed the powers, and &ldquo;the God of peace will soon crush Satan under your feet.&rdquo; The war song of Israel becomes the perseverance song of the church.`,
  },
];

const APPLICATIONS = [
  {
    color: TEAL,
    title: "Build a Treasury of Old Prayers",
    body: `Psalm 108 is permission -- and instruction -- to pray borrowed words. The Spirit himself stitched two old psalms into a new prayer, which means you do not need novel eloquence for every new crisis; you need a stocked memory. The prayers that will carry you through the next valley are being banked (or not) right now, in the ordinary weeks.
<br/><br/>
Practically: memorize psalms, not just verses -- whole movements of prayer that can be redeployed. Keep the prayers of past saints (the Psalter first, but also collects, hymns, and your own answered-prayer journal) within reach. When trouble comes and your own words fail, do what Psalm 108 does: take an old prayer, aim it at the new battle, and pray it as yours.
<br/><br/>
<em>Prayer prompt</em>: Father, thank you that I do not pray from scratch. Thank you for every prayer you have already given your people and already answered. Store your words so deep in me that when the next trouble comes, your own Scripture rises to my lips. My heart is steadfast, O God -- keep it fixed on you before the battle, in the battle, and after it. Amen.`,
  },
  {
    color: GOLD,
    title: "Wake the Dawn",
    body: `&ldquo;I will awake the dawn&rdquo; is a habit disguised as a metaphor. The steadfast heart takes the day&rsquo;s first initiative in praise -- before the phone, before the news, before the anxieties convene their morning meeting. Whoever gets to your mind first shapes your day; Psalm 108 resolves that God will get there first.
<br/><br/>
Try it concretely for a week: before any screen, sing or speak one psalm of praise (Psalm 108:1-5 itself is ideal). Let thanksgiving out loud -- &ldquo;among the peoples&rdquo; where possible, at the breakfast table, in the car -- be your first speech-act of the day. This is not morning-person romanticism; David first sang these words in a cave. It is a decision about sequence: praise first, then the battlefield.
<br/><br/>
And remember what dawn means now. Christians sing toward the morning when the Son rose; every act of dawn-waking praise rehearses resurrection and anticipates the Day when night is done (Revelation 22:5).`,
  },
  {
    color: PURPLE,
    title: "Measure the Battlefield by the Word",
    body: `The center of Psalm 108 is an oracle: &ldquo;God has spoken in his holiness.&rdquo; Everything the psalm asks and dares rests on what God has said about who owns what. Your battles need the same center. The question that determines Christian courage is not &ldquo;how strong is the opposition?&rdquo; but &ldquo;what has God spoken?&rdquo;
<br/><br/>
So do the exegetical work your courage requires: find the actual promises of God that cover your actual situation -- his presence (Hebrews 13:5), his provision (Philippians 4:19), his keeping of his people (John 10:28), his sovereignty over rulers and nations (Proverbs 21:1; Matthew 28:18), his pledge to finish what he began in you (Philippians 1:6). Write them down next to the fears they answer. Faith is not optimism; it is measuring the map by the mouth of God.
<br/><br/>
And where God has <em>not</em> spoken -- outcomes he has not promised -- Psalm 108 still gives you verse 5 to pray: &ldquo;Be exalted, O God, above the heavens&rdquo; -- glory first, and your deliverance folded inside it.`,
  },
  {
    color: ROSE,
    title: "Do Valiantly -- With God",
    body: `&ldquo;Vain is the salvation of man... with God we shall do valiantly.&rdquo; Hold both halves and you have the whole Christian posture toward effort. Renounce self-salvation daily: the fantasy that enough planning, performing, earning, or controlling will finally secure you. It is shav -- empty. And then get up and act with courage, because the God who alone saves commands and empowers real doing: work, witness, warfare against your own sin, perseverance in love.
<br/><br/>
Ask where you are currently mislocated. Self-reliant? (You have been fighting without praying; your confidence tracks your resources.) Or passive? (You have been &ldquo;trusting God&rdquo; as a euphemism for avoiding the hard obedience in front of you.) Psalm 108 corrects both with one preposition: <em>with</em>. Pray, then fight. Trust, then move.
<br/><br/>
<em>Prayer prompt</em>: Lord, I renounce every vain salvation -- every scheme by which I try to deliver myself. You alone tread down the foe; you did it decisively at the cross and the empty tomb. Now make me valiant with your strength: bold for the duties, battles, and obediences you have set before me this week. With you I shall do valiantly. Amen.`,
  },
];

const data: PsalmGuideData = {
  accent: TEAL,
  heroGradientEnd: "#071517",
  badge: "Psalm 108",
  metaLine: "A Song. A Psalm of David &bull; 13 Verses",
  title: "My Heart Is Steadfast, O God",
  heroIntro: "A psalm built from two older psalms -- the cave song of Psalm 57 and the crisis prayer of Psalm 60 -- welded into one liturgy for a new battle. Steadfast praise wakes the dawn, God speaks his ownership over the whole map, and Israel confesses the creed of every true fighter: vain is the salvation of man, but with God we shall do valiantly.",
  blockquote: "&ldquo;Oh grant us help against the foe, for vain is the salvation of man! With God we shall do valiantly; it is he who will tread down our foes.&rdquo;",
  blockquoteRef: "&mdash; Psalm 108:12-13",
  overviewHeading: "Overview of Psalm 108",
  overviewParagraphs: [
    `Psalm 108 is the Psalter&rsquo;s great lesson in praying old prayers. Its first movement (vv. 1-5) reproduces Psalm 57:7-11, David&rsquo;s song from the cave when Saul hunted him; its second (vv. 6-13) reproduces Psalm 60:5-12, the national prayer after a military disaster in the campaigns against Edom. Under the Spirit&rsquo;s inspiration, the two were joined into a single new liturgy -- proof that Scripture&rsquo;s prayers are reusable equipment, forged in one crisis and carried into the next.`,
    `The splice is not mechanical but theological. In the new arrangement, praise comes first: the psalm opens with the steadfast heart, the harp waking the dawn, thanksgiving among the nations, and steadfast love greater than the heavens (vv. 1-4). Only after the doxology does the psalm descend into petition and even lament (vv. 6, 11). The worshiper has learned that praise is not merely the destination of prayer but its launching point -- that a heart fixed on God can afford to look at an unfixed battlefield.`,
    `At the center stands an oracle: &ldquo;God has spoken in his holiness&rdquo; (v. 7). God claims the tribal lands as his own regalia -- Ephraim his helmet, Judah his scepter -- and assigns the enemies domestic roles: Moab his washbasin, Edom the place he tosses his sandal. The geography preaches total divine ownership: the earth is the LORD&rsquo;s (Psalm 24:1), the enemies&rsquo; menace is furniture in heaven&rsquo;s throne room, and Israel&rsquo;s hope rests on the word God has spoken rather than the facts the enemy displays.`,
    `The closing verses are startlingly honest for a war song. &ldquo;Have you not rejected us, O God? You do not go out with our armies&rdquo; (v. 11) keeps the memory of real defeat inside the liturgy; and &ldquo;vain is the salvation of man&rdquo; (v. 12) renounces every merely human deliverance. Yet the last word is neither defeat nor passivity: &ldquo;With God we shall do valiantly; it is he who will tread down our foes&rdquo; (v. 13). Grace grounds valor; because God alone saves, his people can actually fight.`,
    `The Christian sings Psalm 108 from the far side of its fulfillment. The dawn was decisively woken on the third day; the thanksgiving &ldquo;among the nations&rdquo; is now the gospel among the Gentiles (Romans 15:8-11); the word spoken in holiness has become &ldquo;all authority in heaven and on earth has been given to me&rdquo; (Matthew 28:18); and the treading down of the foe happened at the cross, where God disarmed the powers (Colossians 2:15), with a final crushing still promised (Romans 16:20). The church prays this psalm as an army that fights from victory, not for it.`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 108 trains borrowed prayer, dawn-waking praise, promise-anchored courage, and God-grounded valor.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
