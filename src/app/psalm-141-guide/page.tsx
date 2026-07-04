"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "David (superscription: A Psalm of David)" },
  { label: "Genre", value: "Individual lament shaped as an evening prayer" },
  { label: "Liturgical Legacy", value: "The church's historic evening psalm -- sung at vespers from the early centuries onward" },
  { label: "Structure", value: "vv. 1-2 prayer as incense and evening sacrifice; vv. 3-4 the guarded mouth and heart; v. 5 the kindness of righteous rebuke; vv. 6-10 eyes on the LORD amid the snares" },
  { label: "Key Verse", value: "v. 2 -- Let my prayer be counted as incense before you, and the lifting up of my hands as the evening sacrifice!" },
  { label: "Key Petition", value: "v. 3 -- Set a guard, O LORD, over my mouth; keep watch over the door of my lips!" },
  { label: "NT Connection", value: "The prayers of the saints as incense (Revelation 5:8; 8:3-4); wounds of a friend welcomed (Proverbs 27:6; Galatians 6:1)" },
];

const THEMES = [
  {
    color: TEAL,
    title: "Prayer as Incense, Lifted Hands as the Evening Sacrifice",
    body: `David is far from the sanctuary -- the psalm&rsquo;s later verses breathe exile and pursuit -- and so he asks for a substitution: &ldquo;Let my prayer be counted as incense before you, and the lifting up of my hands as the evening sacrifice!&rdquo; (v. 2). In the temple, incense rose from the golden altar morning and evening (Exodus 30:7-8), and the evening offering (the tamid) closed each day with atoning smoke. David cannot stand at those altars. So he offers what he has -- words and raised, empty hands -- and asks God to receive them <em>as</em> the liturgy he cannot attend.
<br/><br/>
The boldness of the request is easy to miss: it asks God to accept prayer as equivalent to sacrifice. And God said yes -- so decisively that this verse became the seed of a whole biblical theology of prayer. Hosea would call it &ldquo;the calves [bulls] of our lips&rdquo; (Hosea 14:2); the writer to the Hebrews, &ldquo;a sacrifice of praise... the fruit of lips&rdquo; (Hebrews 13:15); and John&rsquo;s Revelation shows the finished picture: golden bowls of incense &ldquo;which are the prayers of the saints&rdquo; rising before the throne (Revelation 5:8; 8:3-4). What David asked as concession is revealed as heaven&rsquo;s ordinary economy: the praying church is the true house of incense.
<br/><br/>
The evening setting gave this psalm its long liturgical life -- for centuries the church has sung Psalm 141 at vespers, as candles were lit and the day handed back to God. There is deep wisdom in that placement. Evening is when the day&rsquo;s words are all spent (many regretted), when weariness lowers the guard, when the accounting of the day tempts either pride or despair. The psalm gathers all of it -- the fatigue, the failures of the tongue, the lingering temptations -- and sends it up as smoke.
<br/><br/>
And the incense points, finally, through the veil: our prayers rise &ldquo;with much incense&rdquo; added by another&rsquo;s hand (Revelation 8:3) -- accepted not for their own fragrance but in the merit of the true evening sacrifice, offered once for all as the daylight failed (Mark 15:33-37; Hebrews 10:12). Every believer&rsquo;s evening prayer ascends inside <em>that</em> offering.`,
  },
  {
    color: GOLD,
    title: "Set a Guard Over My Mouth: The Prayer Before the Discipline",
    body: `Fresh from Psalm 140&rsquo;s portrait of venomous tongues, Psalm 141 turns the concern inward: &ldquo;Set a guard, O LORD, over my mouth; keep watch over the door of my lips!&rdquo; (v. 3). David has seen what mouths can do -- he has been on the receiving end -- and he knows the same arsenal is installed behind his own teeth. Under pressure and provocation, the persecuted man&rsquo;s greatest danger may not be his enemies&rsquo; words but his own.
<br/><br/>
The image is a sentry: the lips as a city gate, needing a watchman posted day and night. And the profoundest note is <em>who</em> is asked to stand the post. David does not say &ldquo;I will guard my mouth&rdquo; (though Psalm 39:1 shows him trying); he prays &ldquo;Set a guard, <em>O LORD</em>.&rdquo; Self-control at the lips is here a grace requested before it is a discipline exercised -- because every honest person has discovered how the tongue slips its leash precisely when watching it most. James agrees from experience: &ldquo;no human being can tame the tongue&rdquo; (James 3:8) -- which does not make taming hopeless; it names the only Tamer.
<br/><br/>
Verse 4 traces the guard&rsquo;s line back from the gate to the citadel: &ldquo;Do not let my heart incline to any evil, to busy myself with wicked deeds in company with men who work iniquity, and let me not eat of their delicacies!&rdquo; The mouth&rsquo;s two functions -- speech and taste -- become the psalm&rsquo;s map of temptation: what comes out (words) and what goes in (the &ldquo;delicacies&rdquo; of the wicked -- the perks, seats, and pleasures that make compromise taste sweet). Jesus draws the same map: it is from the heart that the mouth speaks (Luke 6:45), and the heart follows what it feasts on.
<br/><br/>
The prayer, then, is total: guard the gate, hold the citadel, and spoil my appetite for the enemy&rsquo;s table. Whoever prays verse 3 without verse 4 posts a sentry on an already-surrendered city.`,
  },
  {
    color: GREEN,
    title: "Let a Righteous Man Strike Me -- It Is a Kindness",
    body: `Verse 5 contains one of the most countercultural sentences in the Psalter: &ldquo;Let a righteous man strike me -- it is a kindness; let him rebuke me -- it is oil for my head; let my head not refuse it.&rdquo; David, praying for a guarded mouth and an unseduced heart, adds a third request: correction -- and he asks to <em>welcome</em> it. The blow of a righteous friend he reclassifies as hesed (covenant kindness), and the rebuke as anointing oil -- the very substance of honor and gladness (Psalm 23:5; 133:2).
<br/><br/>
The contrast is with the &ldquo;delicacies&rdquo; of verse 4. The wicked feed you sweet things that ruin you; the righteous strike you with true things that heal you. Sin flatters; love wounds -- &ldquo;faithful are the wounds of a friend; profuse are the kisses of an enemy&rdquo; (Proverbs 27:6). A person&rsquo;s spiritual trajectory can be predicted from which they would rather have: the delicacy or the wound. David -- a king, surrounded by professional flatterers -- prays to remain strikeable.
<br/><br/>
This is rarer and costlier than it sounds. Receiving rebuke well requires a settled identity that correction cannot bankrupt: only those who know themselves loved can afford to be wrong. That is why the gospel is the deepest ground of teachability -- justified by grace, the believer&rsquo;s worth no longer rides on the verdict of any given confrontation, so the confrontation can be heard as information and love rather than attack (Hebrews 12:5-11). The proud heart hears every rebuke as a threat; the gospel-freed heart can hear it as oil.
<br/><br/>
Nathan&rsquo;s finger -- &ldquo;You are the man&rdquo; (2 Samuel 12:7) -- would one day test this prayer in David&rsquo;s own life, and to his everlasting credit, his head did not refuse it: &ldquo;I have sinned against the LORD.&rdquo; The prayer of Psalm 141:5, prayed in advance, is what made Psalm 51 possible afterward. Pray now for the ear you will need later.`,
  },
  {
    color: PURPLE,
    title: "My Eyes Are Toward You: Passing the Snares with a Fixed Gaze",
    body: `The psalm&rsquo;s final movement returns to Psalm 140&rsquo;s landscape -- judges and bones, traps and nets (vv. 6-10; verse 7 is notoriously difficult in the Hebrew, picturing bones scattered at the mouth of Sheol: the community of the faithful ploughed under and left for dead). But the summarizing posture is verse 8: &ldquo;But my eyes are toward you, O GOD, my Lord; in you I seek refuge; leave me not defenseless!&rdquo; Surrounded by snares he cannot even see -- that is what makes snares snares -- David fixes the one sense that cannot be trapped: his gaze, aimed at God.
<br/><br/>
There is a quiet theology of attention here. David cannot map every hidden cord (v. 9 -- &ldquo;keep me from the trap they have laid for me&rdquo;), and he does not try to walk staring at the ground in hypervigilance. He walks watching <em>God</em>, and asks God to watch the ground: &ldquo;Let the wicked fall into their own nets, while I pass by safely&rdquo; (v. 10). The division of labor is the secret of a non-anxious walk through a mined world: my eyes on him; his eyes on everything.
<br/><br/>
This is the Psalter&rsquo;s repeated posture -- &ldquo;I have set the LORD always before me&rdquo; (16:8); &ldquo;my eyes are ever toward the LORD, for he will pluck my feet out of the net&rdquo; (25:15) -- and it becomes the New Testament&rsquo;s definition of the Christian race: &ldquo;looking to Jesus, the founder and perfecter of our faith&rdquo; (Hebrews 12:2). Fixation on the snares produces either paranoia or paralysis; fixation on the Lord produces the strange, steady walking the psalm calls &ldquo;passing by safely.&rdquo;
<br/><br/>
And the last line&rsquo;s justice -- the wicked falling into their own nets while the pray-er walks on -- is the moral physics of Psalms 7:15-16 and 140:9-11 once more: evil is finally self-ensnaring. The believer&rsquo;s task is not to spring the traps on the trappers but to keep walking, eyes up, until the road ends at the face it was fixed on.`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-2",
    text: "O LORD, I call upon you; hasten to me! Give ear to my voice when I call to you! Let my prayer be counted as incense before you, and the lifting up of my hands as the evening sacrifice!",
    comment: `The opening doubles the urgency -- &ldquo;hasten to me!&rdquo; -- and then makes the psalm&rsquo;s great request: that prayer be received <em>as</em> temple worship. Incense rose at the golden altar morning and evening (Exodus 30:7-8); the evening tamid closed the day with atonement. David, cut off from the sanctuary, offers words for smoke and lifted empty hands for the offering -- and the request is granted so fully that it becomes standing biblical theology: the sacrifice of praise as the fruit of lips (Hebrews 13:15), and the prayers of the saints as the incense of heaven itself (Revelation 5:8; 8:3-4). The verse gave the psalm its sixteen-century home in the church&rsquo;s evening office: the day handed back to God as fragrance.`,
  },
  {
    ref: "vv. 3-4",
    text: "Set a guard, O LORD, over my mouth; keep watch over the door of my lips! Do not let my heart incline to any evil... and let me not eat of their delicacies!",
    comment: `The petitions move from gate to citadel to table. The mouth is a city gate needing a sentry -- and David asks <em>God</em> to post the watch, confessing what James 3:8 states: no human tames the tongue alone. The heart is the citadel: &ldquo;do not let my heart incline&rdquo; recognizes that inclination precedes action -- the slide begins as a lean. And the &ldquo;delicacies&rdquo; of evildoers name temptation&rsquo;s true shape: not usually a horror but a treat -- the perks and pleasures of the compromised table, sweet on the tongue and ruinous after (compare Proverbs 23:1-8). The mouth&rsquo;s two functions, speech and taste, become one integrated prayer: guard what goes out of me and what goes into me.`,
  },
  {
    ref: "v. 5",
    text: "Let a righteous man strike me -- it is a kindness; let him rebuke me -- it is oil for my head; let my head not refuse it. Yet my prayer is continually against their evil deeds.",
    comment: `The Psalter&rsquo;s great charter of teachability: correction from the righteous reclassified as hesed (kindness) and as festal oil (Psalm 133:2) -- honor, not insult. &ldquo;Let my head not refuse it&rdquo; is the operative petition, since the reflex of every proud head is refusal. The deliberate contrast is with verse 4&rsquo;s delicacies: the wicked offer sweetness that destroys; the righteous offer wounds that heal (Proverbs 27:6). The verse&rsquo;s closing line keeps the balance -- welcoming rebuke from the righteous is not making peace with the wicked; David remains in prayerful opposition to their deeds. Nathan&rsquo;s later &ldquo;You are the man&rdquo; (2 Samuel 12:7) found in David a head trained by this prayer not to refuse -- and Psalm 51 was the fruit.`,
  },
  {
    ref: "vv. 6-7",
    text: "When their judges are thrown over the cliff, then they shall hear my words, for they are pleasant. As when one plows and breaks up the earth, so shall our bones be scattered at the mouth of Sheol.",
    comment: `The hardest verses in the psalm, textually and emotionally. Verse 6 anticipates a reversal: when the corrupt leadership (&ldquo;their judges&rdquo;) falls, the people will finally hear David&rsquo;s words as &ldquo;pleasant&rdquo; -- truth vindicated once its suppressors are gone. Verse 7 voices the present cost in one of Scripture&rsquo;s starkest images: the faithful like a field ploughed over, bones scattered at Sheol&rsquo;s mouth -- persecution as harrowing, the community broken up like clods. Yet the farming metaphor secretly carries hope: ploughing precedes planting (compare Psalm 126:5-6; John 12:24 -- the grain that dies bears much fruit). Ezekiel 37 will ask what God can do with scattered bones, and the resurrection answers for good.`,
  },
  {
    ref: "vv. 8-10",
    text: "But my eyes are toward you, O GOD, my Lord; in you I seek refuge; leave me not defenseless! Keep me from the trap that they have laid for me... Let the wicked fall into their own nets, while I pass by safely.",
    comment: `The adversative &ldquo;But&rdquo; pivots the whole ending: against scattered bones and hidden traps, David sets a fixed gaze -- eyes toward God, refuge sought in him alone (the posture of Psalms 16:8; 25:15; perfected in Hebrews 12:2). The division of labor is the psalm&rsquo;s closing wisdom: David watches God; God watches the traps. The final verse asks for the moral physics of Psalm 7:15-16 -- evil self-ensnared, the diggers in their own pits -- &ldquo;while I pass by safely&rdquo; (literally &ldquo;altogether pass over&rdquo;): not a triumphal march but a kept walk through a mined road. The evening psalm thus ends the way faith ends every day: dangers unexhausted, gaze undistracted, passage secured by Another.`,
  },
];

const APPLICATIONS = [
  {
    color: TEAL,
    title: "Recover the Evening Sacrifice",
    body: `Psalm 141 is the church&rsquo;s oldest bedtime liturgy, and it will order your evenings if you let it. Before sleep, do what verse 2 does: gather the day -- its spent words, its failures, its mercies -- and lift it as incense: praise first, then confession of the day&rsquo;s tongue-sins and heart-leans, then the handing over of what remains unresolved. The day ends not with a doomscroll or a replay of regrets but with smoke rising.
<br/><br/>
Use the body as the psalm does: literally lift your hands, empty, at the day&rsquo;s end -- the gesture preaches to your own heart that you bring nothing and entrust everything. And remember whose altar receives it: your evening prayer ascends &ldquo;with much incense&rdquo; added by the hand of Christ (Revelation 8:3), accepted inside the true evening sacrifice offered once for all as the darkness fell (Hebrews 10:12).
<br/><br/>
<em>Prayer prompt</em>: O LORD, I call on you at the day&rsquo;s end; receive this prayer as incense and these lifted hands as the evening offering. Take the words I wasted, the words I regret, the leanings of my heart you saw today -- and let the smoke of it all rise acceptable in your Son. Give me sleep as a gift and tomorrow as a stewardship. Amen.`,
  },
  {
    color: GOLD,
    title: "Ask God to Post the Sentry",
    body: `Make verse 3 your standing prayer before every high-risk conversation -- the conflict you have rehearsed, the meeting where you will be provoked, the family gathering with the old landmines, the comment box. &ldquo;Set a guard, O LORD, over my mouth&rdquo; concedes the decisive point: your tongue has repeatedly escaped <em>your</em> custody, so you are asking for a stronger watchman. Prayed sincerely, it changes the speech that follows -- words leave more slowly through a guarded gate.
<br/><br/>
Then guard the table as well as the gate: identify the current &ldquo;delicacies&rdquo; -- whatever sweetness keeps you comfortable at tables you should not sit at: the gossip that bonds the group, the flattery of the wrong circle, the perks of a compromise you have stopped noticing. Appetite is the citadel; ask God to spoil yours for what ruins you and to sharpen it for what feeds you (Psalm 34:8).
<br/><br/>
A concrete pairing: pray verse 3 in the morning, and audit at evening incense-time -- where did the sentry hold today? Where was the gate rushed? Grace covers the breaches and mans the wall again tomorrow.`,
  },
  {
    color: GREEN,
    title: "Stay Strikeable",
    body: `Verse 5 assigns you a discipline almost extinct: welcoming rebuke as kindness. Take it in three steps. First, authorize someone -- explicitly invite one or two righteous, truthful people to correct you, and tell them the standing rule: when you strike, I will treat it as oil, not insult. (Unasked-for accountability rarely survives; invited accountability can.) Second, when correction comes -- invited or not -- train the head not to refuse: do not defend, deflect, or counter-attack in the first five minutes; receive, thank, and weigh it before God. Third, distinguish tables: welcome the wound of a friend while still refusing the delicacies of flatterers -- the same verse holds both.
<br/><br/>
The capacity for all of this is the gospel. Because you are justified in Christ, no rebuke can bankrupt you; your worth is not on trial in the confrontation, so your ears can stay open (Hebrews 12:5-11). The unteachable heart is usually an unassured heart. Assured ones can afford to be wrong -- and so they get to become right.
<br/><br/>
Ask honestly: when did a righteous person last strike you -- and did your head refuse it? If no one has in years, the problem is rarely your flawlessness; it is your unapproachability. Pray verse 5 until that changes.`,
  },
  {
    color: PURPLE,
    title: "Walk Eyes-Up Through a Mined World",
    body: `You cannot see every snare -- that is what makes them snares. Hypervigilance is therefore a failed strategy for a trapped world: staring at the ground, you become anxious, suspicious, and still miss the hidden cords. Psalm 141 ends with the workable alternative: &ldquo;my eyes are toward you... keep <em>me</em> from the trap.&rdquo; You watch God; God watches the road. Fixation produces what it fixes on -- snare-watchers become fearful; God-watchers become steady (Isaiah 26:3).
<br/><br/>
Practice the fixed gaze concretely: begin the day setting the Lord before you (Psalm 16:8) before you set the news, the inbox, or the threat-list before you; return the eyes to him at every alarm (an arrow prayer -- &ldquo;eyes toward you&rdquo; -- is enough); and refuse the enemy&rsquo;s greatest snare of all, which is to make you obsess over snares. &ldquo;Looking to Jesus&rdquo; (Hebrews 12:2) is not a devotional flourish; it is the only posture in which the race is runnable.
<br/><br/>
<em>Prayer prompt</em>: My eyes are toward you, O GOD, my Lord. I cannot map the traps of this week -- the ones laid for my feet, my mouth, my heart -- so I will not try to walk staring at the ground. Watch the road for me; keep me from snares I never see; let evil exhaust itself in its own nets. And let me pass by safely, eyes up, until the road ends at your face. Amen.`,
  },
];

const data: PsalmGuideData = {
  accent: TEAL,
  heroGradientEnd: "#071517",
  badge: "Psalm 141",
  metaLine: "Psalm of David &bull; 10 Verses &bull; The Church's Evening Psalm",
  title: "Let My Prayer Be Counted as Incense",
  heroIntro: "David&rsquo;s evening prayer -- words offered as incense and lifted hands as the evening sacrifice. He asks God to guard his mouth, keep his heart from the delicacies of the wicked, keep his head willing to receive a righteous wound, and hold his eyes fixed on the LORD while the snares spring shut on their setters.",
  blockquote: "&ldquo;Let my prayer be counted as incense before you, and the lifting up of my hands as the evening sacrifice! Set a guard, O LORD, over my mouth; keep watch over the door of my lips!&rdquo;",
  blockquoteRef: "&mdash; Psalm 141:2-3",
  overviewHeading: "Overview of Psalm 141",
  overviewParagraphs: [
    `Psalm 141 is the second psalm of the final Davidic collection (138-145) and the Bible&rsquo;s great evening prayer. Cut off from the sanctuary, David asks that his words be received as the incense that rose at the golden altar and his lifted hands as the evening sacrifice (v. 2) -- a request God granted so fully that it became standing theology: praise as the sacrifice of the lips (Hosea 14:2; Hebrews 13:15), and the prayers of the saints as the very incense of heaven (Revelation 5:8; 8:3-4). The church took the hint and sang this psalm at vespers for most of its history.`,
    `Fresh from Psalm 140&rsquo;s venomous tongues, David turns the concern on himself: &ldquo;Set a guard, O LORD, over my mouth&rdquo; (v. 3). The mouth is a city gate needing a sentry -- and the sentry requested is God, because the tongue escapes merely human custody (James 3:8). The prayer runs inward from gate to citadel to table: keep my heart from leaning toward evil, and keep me from the &ldquo;delicacies&rdquo; of evildoers -- temptation&rsquo;s true shape being usually not a horror but a treat.`,
    `Verse 5 is the Psalter&rsquo;s charter of teachability: &ldquo;Let a righteous man strike me -- it is a kindness... oil for my head; let my head not refuse it.&rdquo; Against the sweet, ruinous delicacies of the wicked stand the faithful wounds of a friend (Proverbs 27:6). David -- a king ringed by flatterers -- prays to remain strikeable; and when Nathan&rsquo;s &ldquo;You are the man&rdquo; came years later, the head trained by this prayer did not refuse it, and Psalm 51 was the fruit.`,
    `The closing movement (vv. 6-10) walks back into Psalm 140&rsquo;s trapped landscape -- corrupt judges, hidden nets, and the starkest image in the psalm: the faithful like a field ploughed over, &ldquo;bones scattered at the mouth of Sheol&rdquo; (v. 7). Yet ploughing precedes planting (Psalm 126:5-6; John 12:24), and the psalm&rsquo;s summarizing posture is verse 8: &ldquo;But my eyes are toward you, O GOD, my Lord.&rdquo; David watches God; God watches the traps; and evil falls into its own nets &ldquo;while I pass by safely.&rdquo;`,
    `Read from the New Testament, every line deepens. The evening sacrifice was offered once for all as the darkness fell over Golgotha (Hebrews 10:12), and every believer&rsquo;s prayer now ascends with incense added by Christ&rsquo;s own hand (Revelation 8:3). The guarded mouth, the unseduced heart, the welcomed rebuke (Hebrews 12:5-11), and the fixed gaze -- &ldquo;looking to Jesus&rdquo; (Hebrews 12:2) -- are the psalm&rsquo;s four disciplines, all of them graces before they are efforts, and all of them pointing to the road&rsquo;s end: passing by safely until the eyes meet the face they were fixed on.`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 141 orders the evening, guards the mouth and the table, keeps the head strikeable, and fixes the eyes for the walk through a mined world.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
