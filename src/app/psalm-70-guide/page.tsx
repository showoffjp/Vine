"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "David (superscription: To the choirmaster. Of David, for the memorial offering)" },
  { label: "Genre", value: "Urgent individual lament -- the Psalter's emergency prayer" },
  { label: "Relationship", value: "A near-duplicate of Psalm 40:13-17, detached and reissued as a freestanding cry" },
  { label: "Length", value: "5 verses -- among the shortest psalms; brevity as theology" },
  { label: "Structure", value: "v. 1 the double cry for haste; vv. 2-3 the reversal petitions; v. 4 joy for all who seek him; v. 5 poor and needy -- do not delay" },
  { label: "Key Verse", value: "v. 1 -- Make haste, O God, to deliver me! O LORD, make haste to help me!" },
  { label: "Church History", value: "Verse 1 became the opening versicle of the church's daily prayer ('O God, make speed to save us'); John Cassian commended it as the believer's continual prayer" },
];

const THEMES = [
  {
    color: ROSE,
    title: "Make Haste, O God: The Theology of the Short Prayer",
    body: `Psalm 70 is five verses of pure urgency. It has no narrative introduction, no meditation on God&rsquo;s attributes, no review of past mercies -- it opens mid-emergency: &ldquo;Make haste, O God, to deliver me! O LORD, make haste to help me!&rdquo; (v. 1), and it closes still asking: &ldquo;O LORD, do not delay!&rdquo; (v. 5). Between the two cries for speed there is barely time to breathe. This is what prayer sounds like when there is no time for eloquence.
<br/><br/>
The brevity is not a deficiency; it is a doctrine. Scripture nowhere teaches that God is moved by length -- Jesus taught the opposite: &ldquo;do not heap up empty phrases... for your Father knows what you need before you ask him&rdquo; (Matthew 6:7-8). The Psalter&rsquo;s inclusion of a five-verse alarm bell alongside the 176 verses of Psalm 119 canonizes both registers: there is a time for the long feast of meditation, and there is a time for the shout from the water. Peter sinking beneath the waves prayed the whole of Psalm 70&rsquo;s theology in three words -- &ldquo;Lord, save me&rdquo; -- and &ldquo;immediately&rdquo; the hand came (Matthew 14:30-31). The tax collector&rsquo;s seven words went home justified (Luke 18:13-14).
<br/><br/>
Urgency is also honesty. Much prayer maintains a composure the heart does not actually possess -- polite, padded, unhurried, while inside the house is on fire. Psalm 70 authorizes the real register: when the need is desperate, pray desperately. God is not honored by the pretense of calm; he is honored by the truth brought at speed to the right address (&ldquo;pour out your heart before him,&rdquo; Psalm 62:8).
<br/><br/>
And note who is asked to hurry: the eternal God, who inhabits no clocks. The prayer for haste is covenant boldness -- the child&rsquo;s claim on the Father&rsquo;s immediacy -- and the Bible defends it: &ldquo;will not God give justice to his elect... I tell you, he will give justice to them <em>speedily</em>&rdquo; (Luke 18:7-8). The God who is never early and never late may still be truly asked to run.`,
  },
  {
    color: PURPLE,
    title: "A Prayer Worth Repeating: Why Psalm 70 Exists Twice",
    body: `Psalm 70 is Psalm 40:13-17, lifted almost word for word and reissued as a freestanding psalm. In Psalm 40 these verses are the closing movement of a longer arc -- thanksgiving for past rescue turning to fresh petition. Detached here, with a superscription of its own (&ldquo;for the memorial offering&rdquo; -- lehazkir, &ldquo;to bring to remembrance&rdquo;), the cry becomes a standalone tool: an emergency prayer kept loaded, ready for any believer&rsquo;s next crisis. Like Psalm 108 (built from Psalms 57 and 60), it shows Scripture recycling Scripture -- the Spirit himself endorsing the reuse of proven words for new trouble.
<br/><br/>
The double existence teaches two things. First, that deliverance is rarely final in this life: the David of Psalm 40 had been drawn up from the pit and given a new song -- and needed to pray the same cry again. The Psalter is unembarrassed by this; it prints the prayer twice because the need recurs twice, and twenty times, in every real life. Grace establishes a relationship, not a graduation.
<br/><br/>
Second, that the church was right to make this psalm its most-repeated prayer. From the fifth century, John Cassian commended verse 1 -- &ldquo;O God, make speed to save me; O LORD, make haste to help me&rdquo; -- as the formula the believer should carry &ldquo;in constant use,&rdquo; prayed against every temptation, every dullness, every fear: brief enough for any moment, complete enough for every need, confessing at once our poverty and God&rsquo;s sufficiency. The Western church took the counsel literally and opened every hour of daily prayer with it for fifteen hundred years. Millions of believers have begun morning and evening prayer with Psalm 70:1 -- the emergency cry domesticated into a daily doorway.
<br/><br/>
There is deep wisdom in that liturgical instinct: praying the emergency prayer <em>before</em> the emergency trains the reflex. The one who has said &ldquo;make haste to help me&rdquo; ten thousand calm mornings will find it already on his lips when the floor gives way.`,
  },
  {
    color: TEAL,
    title: "Let Them Be Turned Back: The Reversal Petitions",
    body: `The psalm&rsquo;s middle verses pray in reversals: &ldquo;Let them be put to shame and confusion who seek my life! Let them be turned back and brought to dishonor who delight in my hurt! Let them turn back because of their shame who say, Aha, Aha!&rdquo; (vv. 2-3). Against those who <em>seek his life</em>, David asks not for their destruction but -- notably, in this psalm -- for their <em>turning back</em>: shame, confusion, retreat. The petitions ask that evil momentum be broken, that the pursuit stall, that the mockers&rsquo; &ldquo;Aha, Aha!&rdquo; (the gloating monosyllables of malice enjoying itself) die in their mouths.
<br/><br/>
This is imprecation in a minor key, and its logic is worth learning. Shame, in Scripture, is not primarily humiliation for its own sake; it is the collapse of a false confidence -- the public failure of what someone trusted instead of God (Psalm 97:7; Isaiah 42:17). To pray that the wicked be &ldquo;put to shame&rdquo; is to pray that their project fail visibly enough to confront them with its emptiness. It is a severe mercy: many have been turned back by shame all the way to repentance -- Saul of Tarsus was mid-pursuit, seeking lives, when he was turned back on the Damascus road and brought to a shame (&ldquo;why do you persecute me?&rdquo;) that became the making of him (Acts 9:4).
<br/><br/>
The contrast-structure of the psalm sharpens in verse 4: over against those who <em>seek my life</em> stand &ldquo;all who <em>seek you</em>&rdquo; -- the same verb, opposite objects. Two kinds of seekers, two destinies: the life-hunters turned back in shame; the God-seekers rejoicing and glad. Every human being appears somewhere in that verse pair, defined by what they are hunting.
<br/><br/>
And the prayer&rsquo;s restraint models Romans 12 before Romans 12 was written: David asks God to handle the pursuers and spends not one syllable planning his own retaliation. The turning back is requested, not engineered. The believer under pursuit prays the reversal and keeps his own hands free for verse 4&rsquo;s better occupation -- seeking, rejoicing, and magnifying.`,
  },
  {
    color: GOLD,
    title: "I Am Poor and Needy; Hasten to Me: The Poverty That Prays Well",
    body: `The psalm&rsquo;s final verse is its self-portrait and its secret: &ldquo;But I am poor and needy; hasten to me, O God! You are my help and my deliverer; O LORD, do not delay!&rdquo; (v. 5). David -- king, warrior, psalmist -- files himself under the Psalter&rsquo;s most repeated self-description: ani we'evyon, poor and needy (Psalms 40:17; 86:1; 109:22). It is not a statement of bank balance but of standing: I have no resources adequate to this; my case rests entirely on you.
<br/><br/>
This confessed poverty is not the obstacle to prayer; it is prayer&rsquo;s engine. The Psalter&rsquo;s consistent witness is that God orients toward the needy with special attention: &ldquo;he stands at the right hand of the needy one&rdquo; (109:31); &ldquo;the LORD hears the needy&rdquo; (69:33); he &ldquo;raises the poor from the dust&rdquo; (113:7). Jesus canonized the principle in his first beatitude: &ldquo;Blessed are the poor in spirit, for theirs is the kingdom of heaven&rdquo; (Matthew 5:3). The one qualification for the kingdom&rsquo;s help is the honest admission of bankruptcy -- which is why the self-sufficient pray so little and so vaguely, and the desperate pray like this psalm.
<br/><br/>
Notice the pairing in the same breath: &ldquo;I am poor and needy&rdquo; and &ldquo;You are my help and my deliverer.&rdquo; The two confessions require each other. Poverty without the second clause is despair; the second clause without poverty is theory. Held together they are faith&rsquo;s exact posture: empty hands, certain Helper. And even the closing urgency -- &ldquo;do not delay!&rdquo; -- is an act of faith: only someone sure that God <em>can</em> come quickly bothers to ask him to.
<br/><br/>
The gospel gives the verse its final depth: &ldquo;though he was rich, yet for your sake he became poor, so that you by his poverty might become rich&rdquo; (2 Corinthians 8:9). The truly Rich One took the psalm&rsquo;s poverty -- praying his own urgent cries &ldquo;with loud shouts and tears&rdquo; (Hebrews 5:7) -- so that every poor and needy pray-er who comes through him finds the help already hastened: &ldquo;let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help <em>in time of need</em>&rdquo; (Hebrews 4:16).`,
  },
];

const VERSES = [
  {
    ref: "v. 1",
    text: "Make haste, O God, to deliver me! O LORD, make haste to help me!",
    comment: `The opening is all verbs and vocatives -- no preamble, the prayer already at a run. The doubling (make haste... make haste) is Hebrew intensity: the repetition <em>is</em> the urgency. Both divine names are enlisted -- Elohim (God in his power) and YHWH (the LORD in his covenant) -- desperation calling on everything it knows of God at once. This single verse became the most-repeated sentence in the history of Christian prayer: the opening versicle of the daily office (&ldquo;O God, make speed to save us; O LORD, make haste to help us&rdquo;), commended by John Cassian as the believer&rsquo;s continual prayer -- brief enough for any moment, complete enough for every need. The emergency cry, prayed daily in calm, trains the reflex for the crisis.`,
  },
  {
    ref: "vv. 2-3",
    text: "Let them be put to shame and confusion who seek my life! Let them be turned back and brought to dishonor who delight in my hurt! Let them turn back because of their shame who say, Aha, Aha!",
    comment: `The reversal petitions: against life-seekers and hurt-delighters, David asks for shame, confusion, and turning back -- the collapse of malicious momentum rather than the annihilation of the malicious. Biblical shame is the public failure of a false confidence (Isaiah 42:17); praying it upon pursuers is a severe mercy that has sometimes turned them all the way around (Saul, mid-pursuit, on the Damascus road -- Acts 9). &ldquo;Aha, Aha!&rdquo; is malice&rsquo;s gloat rendered onomatopoetically -- the sound the psalmists repeatedly ask God to silence (Psalms 35:21, 25; 40:15). The vengeance, as always in the Psalter, is fully verbalized and fully transferred: God&rsquo;s to execute, not David&rsquo;s (Romans 12:19).`,
  },
  {
    ref: "v. 4",
    text: "May all who seek you rejoice and be glad in you! May those who love your salvation say evermore, God is great!",
    comment: `The psalm&rsquo;s bright center: against those who &ldquo;seek my life&rdquo; (v. 2) stand &ldquo;all who seek <em>you</em>&rdquo; -- the same verb, opposite quarry, opposite destiny. The petitions for the God-seekers are joy, gladness, and a permanent refrain: &ldquo;say <em>evermore</em>, God is great!&rdquo; Even mid-emergency, David prays for the whole company of the faithful -- personal crisis widening into intercession for everyone who loves God&rsquo;s salvation. &ldquo;Those who love your salvation&rdquo; is a searching phrase: not merely those who need it or use it, but those who love it -- and their signature is magnifying speech. The verse hands every believer a life-motto of four words, prayed here from inside the storm.`,
  },
  {
    ref: "v. 5",
    text: "But I am poor and needy; hasten to me, O God! You are my help and my deliverer; O LORD, do not delay!",
    comment: `The self-portrait that powers the psalm: ani we'evyon, poor and needy -- the Psalter&rsquo;s favored standing for prayer (40:17; 86:1; 109:22), confessing bankruptcy of resources and staking everything on God. The two confessions balance in one breath: I am poor / You are my help -- empty hands, certain Helper; either without the other is despair or theory. The closing &ldquo;do not delay!&rdquo; keeps the urgency to the last syllable -- faith bold enough to hurry the eternal God, as the Bible everywhere permits (Luke 18:7-8). Where Psalm 40&rsquo;s version reads &ldquo;the Lord takes thought for me,&rdquo; Psalm 70 tightens even that into petition: the freestanding emergency prayer ends still knocking -- and Hebrews 4:16 names what stands behind the door: a throne of grace, with help timed for the need.`,
  },
];

const APPLICATIONS = [
  {
    color: ROSE,
    title: "Keep the Emergency Prayer Loaded",
    body: `Psalm 70 exists so that you are never without a prayer. Memorize verse 1 -- it takes one minute -- and let it be your instant response to sudden fear, temptation, bad news, or the moments too fast for composure: &ldquo;Make haste, O God, to deliver me! O LORD, make haste to help me!&rdquo; The church prayed it at the start of every hour of prayer for fifteen centuries precisely to train this reflex: the sentence rehearsed ten thousand calm times is the one that surfaces when the floor gives way.
<br/><br/>
And drop the apology for short prayers. The Father who &ldquo;knows what you need before you ask&rdquo; (Matthew 6:8) is not tallying word counts; Peter&rsquo;s three words got an immediate hand (Matthew 14:30-31). Length has its place -- the feast of unhurried communion -- but the shout from the water is equally Scripture, equally heard, and sometimes the only honest register you have.
<br/><br/>
<em>Prayer prompt</em> (to carry, not just to read): O God, make speed to save me; O LORD, make haste to help me -- against this fear, this temptation, this hour. You are not slow as some count slowness; run to me, as your Word says you may be asked to. Amen.`,
  },
  {
    color: PURPLE,
    title: "Reuse Proven Words",
    body: `The Spirit published this prayer twice -- once inside Psalm 40, once alone -- and that double filing is your permission slip: prayers are reusable, and the recurrence of need is not a scandal. If you must pray the same rescue-prayer this year that you prayed five years ago -- for the same besetting sin, the same anxiety, the same unresolved wound -- you are not failing at faith; you are living the pattern the Psalter itself canonized. Grace establishes a relationship, not a graduation ceremony.
<br/><br/>
Build your own &ldquo;lehazkir&rdquo; file -- prayers &ldquo;for bringing to remembrance&rdquo;: the psalms, verses, and past prayers that have carried you before, kept where the next emergency can reach them (memorized, written in the front of a Bible, pinned where you will see them). And notice the psalm&rsquo;s other lesson in its own reuse: David&rsquo;s thanksgiving psalm (40) contained the seed of his next petition (70). Yesterday&rsquo;s gratitude and today&rsquo;s desperation draw from the same well and address the same Helper.
<br/><br/>
When you have no words at all, borrow these five verses whole. They were detached from their original home precisely so they could live in yours.`,
  },
  {
    color: TEAL,
    title: "Pray Reversals, Not Revenge",
    body: `Verses 2-3 give you the shape for praying about people who are actively against you -- the ones who &ldquo;delight in your hurt,&rdquo; who say &ldquo;Aha!&rdquo; at your stumbles. Pray for their <em>turning back</em>: that the momentum of the malice stall, that the project of harm fail visibly, that the false confidence behind it collapse into the kind of shame that can become the doorway to repentance. That is not vindictiveness; it is asking God to stop evil by the gentlest means that will actually stop it -- and church history&rsquo;s greatest example (Saul of Tarsus, turned back mid-pursuit into Paul the apostle) shows how far God can take a reversal prayer.
<br/><br/>
Keep the psalm&rsquo;s discipline while you pray it: full verbalization, full transfer. Say it all to God; plan none of it yourself (Romans 12:19). And then move, as the psalm moves, directly to verse 4 -- from the hunters to the seekers: spend more prayer on the flourishing of those who seek God than on the frustration of those who seek you. The proportion of the psalm (one verse of enemies, then joy) is itself the counsel.
<br/><br/>
<em>Prayer prompt</em>: Lord, turn back those who are set on harm -- mine or anyone&rsquo;s. Break the momentum, collapse the false confidence, and if it please you, let the shame become a Damascus road. And fill all who seek you with joy, till &ldquo;God is great&rdquo; is said evermore. Amen.`,
  },
  {
    color: GOLD,
    title: "Own the Poverty; Say the Motto",
    body: `Verse 5 hands you the posture, and verse 4 hands you the motto. The posture: &ldquo;I am poor and needy&rdquo; -- practice saying it without embarrassment, because it is the one qualification the kingdom&rsquo;s help requires (Matthew 5:3). The prayers that go unanswered for years are often the ones never really prayed from the floor: managed, hedged, self-sufficient. Let this psalm teach you the floor -- empty hands, and in the same breath the second clause that keeps poverty from despair: &ldquo;<em>You</em> are my help and my deliverer.&rdquo;
<br/><br/>
The motto: &ldquo;God is great&rdquo; -- said <em>evermore</em>, by those who love his salvation. Make it literal: a phrase said daily, aloud, in gladness and in emergency alike, until it is the settled refrain under your life. The psalm was prayed by one poor man asking that <em>all</em> the seekers get that refrain; joining them is how his prayer keeps being answered, three thousand years on.
<br/><br/>
And read the whole little psalm, one last time, standing next to the One who made it his own: the Rich One who became poor (2 Corinthians 8:9), who prayed with loud cries and tears (Hebrews 5:7), who was turned on by mockers saying more than &ldquo;Aha&rdquo; -- and who now sits at the right hand as the Help and Deliverer of everyone who cries from the water. Because of him, the throne you run to in the emergency is named grace, and its help arrives &ldquo;in time of need&rdquo; (Hebrews 4:16). O LORD, do not delay -- and he will not.`,
  },
];

const data: PsalmGuideData = {
  accent: ROSE,
  heroGradientEnd: "#170710",
  badge: "Psalm 70",
  metaLine: "Of David, for the Memorial Offering &bull; 5 Verses",
  title: "Make Haste, O God, to Deliver Me",
  heroIntro: "The Psalter&rsquo;s emergency prayer -- five verses at a dead run, reissued from Psalm 40 as a freestanding cry and adopted by the church as the opening sentence of daily prayer for fifteen centuries. Poor and needy, pursued and mocked, the psalmist stakes everything on one double plea: make haste, make haste -- O LORD, do not delay.",
  blockquote: "&ldquo;But I am poor and needy; hasten to me, O God! You are my help and my deliverer; O LORD, do not delay!&rdquo;",
  blockquoteRef: "&mdash; Psalm 70:5",
  overviewHeading: "Overview of Psalm 70",
  overviewParagraphs: [
    `Psalm 70 is five verses of pure urgency -- the Psalter&rsquo;s emergency prayer. It opens mid-crisis with a doubled cry for speed (&ldquo;Make haste, O God, to deliver me! O LORD, make haste to help me!&rdquo;) and closes still knocking (&ldquo;O LORD, do not delay!&rdquo;). There is no preamble, no meditation, no review of past mercies: this is what prayer sounds like when there is no time for eloquence -- and its place in the canon is the Bible&rsquo;s own ruling that such prayer is fully prayer (Matthew 6:7-8; Peter&rsquo;s three words in Matthew 14:30).`,
    `The psalm is a near-duplicate of Psalm 40:13-17, detached and reissued under its own superscription -- lehazkir, &ldquo;for the memorial offering / to bring to remembrance.&rdquo; The double publication teaches twice over: deliverance in this life is rarely final (the man once drawn from the pit needs the same cry again -- grace is a relationship, not a graduation), and proven prayers are meant for reuse -- the Spirit himself recycling Scripture into a freestanding tool kept loaded for the next believer&rsquo;s next crisis.`,
    `The middle verses pray in reversals: against those who seek his life and delight in his hurt, David asks for shame, confusion, and turning back -- the collapse of malicious momentum rather than the destruction of the malicious. Biblical shame is the public failure of a false confidence, and praying it on pursuers is a severe mercy that has sometimes turned them clear around (Saul, mid-pursuit, on the Damascus road). Over against the life-seekers stand &ldquo;all who seek <em>you</em>&rdquo; (v. 4) -- same verb, opposite quarry -- for whom David prays joy, gladness, and a four-word life-motto said evermore: &ldquo;God is great!&rdquo;`,
    `The final verse is the psalm&rsquo;s engine: &ldquo;But I am poor and needy&rdquo; -- ani we'evyon, the Psalter&rsquo;s favored standing for prayer -- balanced in the same breath by &ldquo;You are my help and my deliverer.&rdquo; Confessed poverty plus certain Helper is faith&rsquo;s exact posture; the first beatitude canonizes it (Matthew 5:3). Even the closing &ldquo;do not delay!&rdquo; is faith -- only someone sure God can come quickly bothers to hurry him (Luke 18:7-8).`,
    `Verse 1&rsquo;s afterlife is unmatched in the history of prayer: John Cassian commended it as the believer&rsquo;s continual prayer -- brief enough for any moment, complete enough for every need -- and the Western church opened every hour of its daily office with it for some fifteen hundred years: &ldquo;O God, make speed to save us; O LORD, make haste to help us.&rdquo; The emergency cry, prayed daily in calm, trains the reflex for the crisis. And the gospel seals the little psalm: the Rich One became poor (2 Corinthians 8:9), prayed his own loud cries (Hebrews 5:7), and now answers from a throne of grace with &ldquo;help in time of need&rdquo; (Hebrews 4:16).`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 70 loads the emergency prayer, authorizes reuse, shapes reversal-praying, and turns poverty into the posture God answers.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
