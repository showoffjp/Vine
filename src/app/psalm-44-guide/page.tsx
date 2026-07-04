"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "The Sons of Korah (superscription: To the choirmaster. A Maskil of the Sons of Korah)" },
  { label: "Genre", value: "National (communal) lament -- the congregation's Job-like protest" },
  { label: "Occasion", value: "An unexplained national defeat while the people were faithful to the covenant -- no datable event required; the psalm is written for every such day" },
  { label: "Structure", value: "vv. 1-8 what we heard (the fathers' stories); vv. 9-16 what we see (rejection and rout); vv. 17-22 the protest of innocence; vv. 23-26 Awake, O Lord!" },
  { label: "Key Verse", value: "v. 22 -- Yet for your sake we are killed all the day long; we are regarded as sheep to be slaughtered" },
  { label: "NT Citation", value: "Verse 22 quoted in Romans 8:36 -- inside 'in all these things we are more than conquerors'" },
  { label: "Companions", value: "Job (the innocent sufferer); Psalms 74 and 80 (communal laments); Lamentations 5" },
];

const THEMES = [
  {
    color: GOLD,
    title: "We Have Heard with Our Ears: Praying the Gap Between the Stories and the Streets",
    body: `Psalm 44 opens in the family archive: &ldquo;We have heard with our ears, O God, our fathers have told us, what deeds you performed in their days, in the days of old&rdquo; (v. 1). The congregation rehearses the conquest generation&rsquo;s testimony -- nations driven out, Israel planted -- and immediately draws the old stories&rsquo; sharpest theological point: &ldquo;not by their own sword did they win the land... but your right hand and your arm, and the light of your face, for you delighted in them&rdquo; (v. 3). The fathers&rsquo; victories were grace, not competence. Verses 4-8 then bring the confession into the present tense: &ldquo;You are my King, O God... in God we have boasted continually&rdquo; -- the singers own the tradition; this is their God, not merely their grandparents&rsquo;.
<br/><br/>
And that is precisely what makes verse 9 detonate: &ldquo;<em>But you</em> have rejected us and disgraced us.&rdquo; The psalm&rsquo;s agony is not that the people doubt the old stories -- it is that they believe them. If the LORD&rsquo;s arm won the land, then the LORD&rsquo;s withdrawal explains the rout; the same theology that made the past glorious makes the present inexplicable. The psalm is prayed in the gap between remembered grace and present grief -- between what we have heard with our ears and what we now see with our eyes.
<br/><br/>
This gap is one of the most common and least discussed rooms of the life of faith. The believer who has genuinely tasted God&rsquo;s past goodness -- answered prayer, real deliverance, the testimony of parents and church -- suffers a distinctive pain when heaven goes silent: the pain of contrast. Unbelievers are spared it; only those who know what God&rsquo;s face was like can feel its hiding. Psalm 44 dignifies that pain with liturgy: it lets the congregation keep saying &ldquo;you are my King&rdquo; (v. 4) in the same breath as &ldquo;you have rejected us&rdquo; (v. 9), refusing to resolve the tension by abandoning either the memory or the honesty.
<br/><br/>
Derek Kidner calls this the psalm&rsquo;s &ldquo;bewildered fidelity.&rdquo; It is the posture the whole psalm teaches: keep rehearsing what God has done, keep telling him exactly what he now seems to be doing, and let the collision drive prayer rather than departure.`,
  },
  {
    color: ROSE,
    title: "You Have Made Us Like Sheep for Slaughter: Suffering Without an Explanation",
    body: `Verses 9-16 catalogue the disaster with unflinching theology: <em>you</em> have rejected us; <em>you</em> have made us turn back; <em>you</em> have made us like sheep for slaughter, scattered us among the nations, sold your people for a trifle; <em>you</em> have made us a byword, a laughingstock. Eleven times the verbs land on God. The psalm does not say &ldquo;the enemy defeated us and God failed to prevent it&rdquo;; it says God did it. However secondary causes ran, the congregation refuses to grant them ultimacy: if the LORD&rsquo;s right hand won the old battles, the LORD&rsquo;s hand is behind the new defeat. This is the costly consistency of real monotheism -- it leaves the sufferer nowhere to look but at God, which is the psalm&rsquo;s dark comfort: the One who did this is the One who can undo it.
<br/><br/>
Then comes the turn that sets Psalm 44 apart from almost every other national lament: the protest of innocence (vv. 17-22). &ldquo;All this has come upon us, though we have not forgotten you, and we have not been false to your covenant. Our heart has not turned back, nor have our steps departed from your way... If we had forgotten the name of our God or spread out our hands to a foreign god, would not God discover this? For he knows the secrets of the heart.&rdquo; The usual explanation for national disaster -- covenant unfaithfulness (Deuteronomy 28; Judges 2) -- is examined and, before the God who knows hearts, denied. Israel&rsquo;s prophets rightly explained many defeats by sin; this psalm insists there are defeats that theology cannot explain that way. It is the congregation&rsquo;s Job moment: suffering with the ledger balanced, and no audit that accounts for it.
<br/><br/>
Scripture&rsquo;s honesty here is a severe mercy. A faith that explains every affliction as punishment produces either despair (in the suffering, who must invent sins to confess) or cruelty (in the comfortable, who become Job&rsquo;s friends). Psalm 44 forbids both. It stands in the canon as God&rsquo;s own authorization to say: we do not know why this happened, and we will not pretend we do -- and we will bring the not-knowing to God rather than away from him.
<br/><br/>
Calvin, commenting on this psalm, observes that God sometimes afflicts his people &ldquo;not for their sins, but for his own glory and their testing,&rdquo; and that faith&rsquo;s duty in such hours is to hold the covenant God to his covenant word all the more tightly. That is exactly where the psalm goes next -- and where Paul takes it.`,
  },
  {
    color: PURPLE,
    title: "For Your Sake We Are Killed All the Day Long: Romans 8 Reads Psalm 44",
    body: `Verse 22 is the summit of the protest: &ldquo;Yet <em>for your sake</em> we are killed all the day long; we are regarded as sheep to be slaughtered.&rdquo; The suffering is not despite loyalty; in some unfathomed way it is <em>because</em> of it -- the people are dying not for having abandoned God&rsquo;s name but for carrying it. This is the psalm&rsquo;s deepest and most forward-leaning discovery: there is a suffering that comes upon the covenant people precisely as covenant people, a persecution intrinsic to belonging to God in a world at odds with him.
<br/><br/>
Paul saw exactly this, and made the verse famous. In Romans 8:35-37 he asks, &ldquo;Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or danger, or sword? As it is written, &lsquo;For your sake we are being killed all the day long; we are regarded as sheep to be slaughtered.&rsquo; No, in all these things we are more than conquerors through him who loved us.&rdquo; Note carefully what Paul does with the psalm. He does not soften it: the church&rsquo;s present tense, he says, is still Psalm 44:22 -- the slaughter-sheep condition is normal Christian experience, not a sign of God&rsquo;s abandonment. And he does not leave it: he sets the unexplained suffering <em>inside</em> an unbreakable love -- &ldquo;in all these things,&rdquo; not after them or instead of them, &ldquo;we are more than conquerors through him who loved us.&rdquo;
<br/><br/>
Romans 8 thus answers Psalm 44 not with an explanation but with a Person and a guarantee. The psalm asked <em>why</em>; Paul answers <em>who</em> and <em>whether</em>: who -- the Christ who himself became the Lamb led to slaughter (Isaiah 53:7; Acts 8:32), entering the sheep&rsquo;s condition of verse 22 and dying the unexplained righteous death; and whether -- whether anything in the catalogue, sword included, can separate. It cannot (Romans 8:38-39). The question the psalm left open, the cross closed.
<br/><br/>
This is why the church has always prayed Psalm 44 without embarrassment. The martyrs sang it accurately: killed all the day long, for his sake. And they sang it inside Romans 8: never separated, more than conquerors -- not by avoiding the slaughter but by the love that holds through it and the resurrection that reverses it.`,
  },
  {
    color: TEAL,
    title: "Awake, O Lord! The Audacity of Covenant Prayer",
    body: `The psalm&rsquo;s final movement (vv. 23-26) is prayer at maximum boldness: &ldquo;Awake! Why are you sleeping, O Lord? Rouse yourself! Do not reject us forever! Why do you hide your face? Why do you forget our affliction and oppression? For our soul is bowed down to the dust; our belly clings to the ground. Rise up; come to our help! Redeem us for the sake of your steadfast love!&rdquo;
<br/><br/>
&ldquo;Awake&rdquo; is startling language to aim at the God of whom another psalm says, &ldquo;he who keeps Israel will neither slumber nor sleep&rdquo; (Psalm 121:4) -- and the psalmists knew both verses. The contradiction is deliberate and rhetorical: God is not asleep, but he is <em>acting as if</em> he were, and covenant intimacy has the standing to say so. This is not irreverence; it is the boldness of family speech. Strangers mind their manners; children pound on the door. The Bible everywhere treats such prayer as faith, not failure: Jacob wrestling (&ldquo;I will not let you go unless you bless me,&rdquo; Genesis 32:26), Moses arguing (Exodus 32:11-14), the widow refusing to quit (Luke 18:1-8), and -- the scene this psalm strangely anticipates -- disciples waking their Lord in the storm: &ldquo;Teacher, do you not care that we are perishing?&rdquo; (Mark 4:38). He was asleep in the stern; he rose; the sea went flat. The prayer of Psalm 44:23 was answered in a boat.
<br/><br/>
Notice also what the final petition grounds itself on -- not the innocence just protested (vv. 17-22), but hesed: &ldquo;Redeem us <em>for the sake of your steadfast love</em>&rdquo; (v. 26). The psalm&rsquo;s last resort is not the people&rsquo;s record but God&rsquo;s character. Even the congregation that can honestly claim covenant faithfulness does not finally plead it; it pleads the love that needs no merit to move. That is the deepest instinct of biblical prayer, and it is why the psalm can end without an answer and still end in the right place: face down (&ldquo;our belly clings to the ground&rdquo;) but facing God, asking rescue from the only direction rescue comes.
<br/><br/>
Spurgeon: &ldquo;Unbelief would keep silence; faith cries aloud, even to a God who seems to sleep.&rdquo; Psalm 44 never receives its explanation inside its own verses -- and it teaches the church that explanations are optional; access is not. The bowed-down congregation still owns the covenant address, and uses it.`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-3",
    text: "We have heard with our ears, O God, our fathers have told us, what deeds you performed in their days... you with your own hand drove out the nations... not by their own sword did they win the land... but your right hand and your arm, and the light of your face, for you delighted in them.",
    comment: `The lament begins, remarkably, as a creed: the conquest retold with its grace-theology intact. The fathers&rsquo; sword won nothing; the LORD&rsquo;s right hand, arm, and shining face won everything, &ldquo;for you delighted in them&rdquo; -- election&rsquo;s delight as the engine of history (Deuteronomy 7:7-8). The transmission chain matters: &ldquo;our fathers have told us&rdquo; is Deuteronomy 6&rsquo;s command working -- one generation&rsquo;s testimony becoming the next generation&rsquo;s theology. The psalm will soon weaponize this very memory into protest: a people that knows its past this well cannot shrug at a present that contradicts it.`,
  },
  {
    ref: "vv. 4-8",
    text: "You are my King, O God; ordain salvation for Jacob! Through you we push down our foes... For not in my bow do I trust, nor can my sword save me. But you have saved us from our foes... In God we have boasted continually, and we will give thanks to your name forever. Selah",
    comment: `The congregation steps into the fathers&rsquo; confession and makes it first-person: &ldquo;You are <em>my</em> King.&rdquo; The theology of verse 3 becomes personal policy in verse 6 -- &ldquo;not in my bow do I trust&rdquo; -- and testimony in verse 7. Verse 8&rsquo;s continual boast &ldquo;in God&rdquo; (compare Jeremiah 9:23-24; 1 Corinthians 1:31) closes the psalm&rsquo;s bright first movement at its highest point, with a Selah that lets the confession ring -- and makes the next word (&ldquo;But you...&rdquo;) land like a hammer. The structure teaches: this lament comes from insiders, believers in good standing, whose worship was real on the day the roof fell in.`,
  },
  {
    ref: "vv. 9-16",
    text: "But you have rejected us and disgraced us... You have made us like sheep for slaughter and have scattered us among the nations. You have sold your people for a trifle... You have made us a byword among the nations... All day long my disgrace is before me.",
    comment: `Eleven second-person verbs pile the disaster at God&rsquo;s feet: rejected, disgraced, turned back, given as sheep, scattered, sold, made a byword. &ldquo;Sold your people for a trifle, demanding no high price&rdquo; is the bitterest line -- as though the covenant people fetched nothing on the market. This is monotheism&rsquo;s costly honesty: no dualism, no bad luck, no autonomous enemy gets ultimate credit; the God who won the old battles owns the new defeat. The same move that makes the pain sharper makes hope possible -- if he did it, he can reverse it -- and keeps the conversation exactly where the psalm insists it belongs: between the people and their God, with no intermediating excuse.`,
  },
  {
    ref: "vv. 17-22",
    text: "All this has come upon us, though we have not forgotten you, and we have not been false to your covenant... If we had forgotten the name of our God or spread out our hands to a foreign god, would not God discover this? For he knows the secrets of the heart. Yet for your sake we are killed all the day long; we are regarded as sheep to be slaughtered.",
    comment: `The protest of innocence -- rare in national laments and deliberately Job-like. The standard covenant explanation (defeat = apostasy; Deuteronomy 28) is faced and, under the eyes of the heart-searching God (v. 21), truthfully denied: no forgetting, no false covenant, no foreign gods, no departing steps. Verse 22 then makes the discovery that reframes everything: the killing is &ldquo;<em>for your sake</em>&rdquo; -- suffering not despite loyalty but because of it. Paul lifts the verse whole into Romans 8:36 as the church&rsquo;s normal weather, then wraps it in the impossibility of separation: &ldquo;in all these things we are more than conquerors through him who loved us.&rdquo; The psalm&rsquo;s open question receives, at the cross, not an explanation but a guarantee.`,
  },
  {
    ref: "vv. 23-26",
    text: "Awake! Why are you sleeping, O Lord? Rouse yourself! Do not reject us forever! Why do you hide your face?... For our soul is bowed down to the dust; our belly clings to the ground. Rise up; come to our help! Redeem us for the sake of your steadfast love!",
    comment: `Covenant audacity: the God who &ldquo;neither slumbers nor sleeps&rdquo; (Psalm 121:4) is told to wake up -- family speech, not blasphemy; the rhetoric of children pounding on a father&rsquo;s door (compare Mark 4:38, where the Lord literally asleep in the storm rises at just such a cry). The body language is total prostration -- soul in the dust, belly to the ground -- yet the address never wavers. And the final plea rests not on the innocence just protested but on hesed alone: &ldquo;redeem us for the sake of your steadfast love.&rdquo; The psalm ends unanswered but rightly aimed: no explanation, full access. Within the canon the answer comes: the Lamb slaughtered for their sake (Isaiah 53:7) rose, and the sleeping God proved to be the dying-and-rising God who redeems precisely through the unexplained dark.`,
  },
];

const APPLICATIONS = [
  {
    color: GOLD,
    title: "Keep Telling the Old Stories -- Especially Now",
    body: `Psalm 44 begins its darkest journey by rehearsing testimony, and that order is the discipline to copy. When God seems absent, the instinct is to stop rehearsing his past faithfulness because it hurts -- the contrast accuses. The psalm does the opposite: it sharpens the memory on purpose and lets the contrast become the substance of prayer. Faith in the dark is not built by forgetting the light; it is built by holding the light up against the dark and demanding God be consistent with himself.
<br/><br/>
Practically: keep the family archive alive. Tell your children -- and your own discouraged heart -- the specific deeds: the conversion, the provision, the prayer answered, the church&rsquo;s and the Scriptures&rsquo; long record. Do it <em>especially</em> in seasons that contradict it. &ldquo;We have heard with our ears&rdquo; is a practice, not an accident; a generation that stops telling has nothing to pray Psalm 44 with when the defeat comes.
<br/><br/>
<em>Prayer prompt</em>: O God, we have heard what you did -- in Scripture, in our fathers, in our own past. I hold those stories up to you now, in a present that does not look like them. You have not changed. Be to us what you were, for you delight in your people still. Amen.`,
  },
  {
    color: ROSE,
    title: "Refuse False Explanations -- Yours and Others'",
    body: `The protest of innocence (vv. 17-22) is in the Bible so that sufferers are never forced to invent guilt to explain pain. Some affliction is discipline (Hebrews 12), some is consequence (Galatians 6:7) -- and some is neither: it is Job&rsquo;s category, the psalm&rsquo;s category, suffering &ldquo;for your sake.&rdquo; Before the God who &ldquo;knows the secrets of the heart,&rdquo; do honest audit -- confess what is truly yours to confess -- and then refuse the rest. Manufactured guilt honors no one and heals nothing.
<br/><br/>
And guard the other side of the same error: do not be Job&rsquo;s friend to someone else. When a faithful person is crushed -- the miscarriage, the persecution, the church that did everything right and split anyway -- the theology that must explain it by their failure is the theology this psalm exists to forbid. Sit down in the ashes with them; rehearse God&rsquo;s deeds with them; pray &ldquo;Awake, O Lord&rdquo; with them; and leave the explaining to the God who kept his own counsel with Job and answered him with himself.
<br/><br/>
The cross is the final proof that innocent suffering can be the very center of God&rsquo;s will: the one truly innocent Sufferer was slaughtered &ldquo;for your sake&rdquo; -- and it was redemption, not abandonment, all the way down.`,
  },
  {
    color: PURPLE,
    title: "Live Verse 22 Inside Romans 8",
    body: `Paul&rsquo;s use of this psalm hands the church its realism and its confidence in one breath. Realism: being &ldquo;regarded as sheep to be slaughtered&rdquo; is listed as ordinary Christian weather -- persecution, danger, sword -- so the believer under fire for Christ&rsquo;s name should not add to the pain the false surprise that something alien is happening (1 Peter 4:12). If you suffer for your faith -- socially, professionally, or, as millions of believers today, physically -- you are not off the map; you are on the psalm&rsquo;s map, and the martyrs&rsquo; map, and your Lord&rsquo;s.
<br/><br/>
Confidence: the slaughter-verse sits inside &ldquo;more than conquerors <em>through him who loved us</em>,&rdquo; and the chapter ends with the strongest sentence in the Bible about separation: nothing -- death, life, angels, rulers, present, future, powers, height, depth, anything in creation -- can separate you from the love of God in Christ Jesus (Romans 8:38-39). The conquering is not exemption from the sword but indissolubility under it.
<br/><br/>
So pray for the persecuted church with this psalm open -- it is their literal present tense -- and let it calibrate your own costs. <em>Prayer prompt</em>: Lord, where your people are sheep for slaughter today, be their unbreakable bond. And where bearing your name costs me comfort or standing, keep me from surprise and from self-pity alike: for your sake is the highest reason anything is ever suffered. In all these things, make us more than conquerors. Amen.`,
  },
  {
    color: TEAL,
    title: "Pound on the Door",
    body: `Take the psalm&rsquo;s final audacity as permission granted. There are prayers believers are afraid to pray -- &ldquo;Awake! Why do you sleep? Why do you hide your face? Have you forgotten us?&rdquo; -- and Psalm 44 puts them in the hymnbook, which means God himself authorized them for congregational use. Politeness that keeps distance is not reverence; covenant boldness that pounds on the door is (Hebrews 4:16). The storm-boat scene (Mark 4:38) shows how such prayer lands: the disciples&rsquo; near-accusation -- &ldquo;do you not care that we are perishing?&rdquo; -- was answered not with rebuke for waking him but with a flattened sea.
<br/><br/>
Two anchors keep the boldness Christian. First, end where the psalm ends: on hesed, not on merit -- &ldquo;redeem us for the sake of your steadfast love.&rdquo; Bold prayer pleads God&rsquo;s character, not our performance. Second, pray it prostrate: the psalm shouts &ldquo;Awake!&rdquo; with its belly on the ground -- audacity and humility are not opposites but the two hands of the same faith.
<br/><br/>
And when no explanation comes -- the psalm receives none -- remember what you hold that the sons of Korah did not: the sequel. The God who seemed to sleep has, in Christ, already risen once for all, and &ldquo;he who did not spare his own Son... how will he not also with him graciously give us all things?&rdquo; (Romans 8:32). Keep pounding. The door has a history of opening.`,
  },
];

const data: PsalmGuideData = {
  accent: ROSE,
  heroGradientEnd: "#170710",
  badge: "Psalm 44",
  metaLine: "Maskil of the Sons of Korah &bull; 26 Verses &bull; National Lament",
  title: "For Your Sake We Are Killed All the Day Long",
  heroIntro: "The congregation&rsquo;s Job-moment: a people faithful to the covenant, crushed without explanation. They rehearse the fathers&rsquo; stories of grace, lay the defeat at God&rsquo;s own feet, protest their innocence before the heart-searching God, and pound on the door -- Awake, O Lord! -- pleading nothing but steadfast love. Paul quotes its darkest verse inside the Bible&rsquo;s strongest promise: more than conquerors, never separated.",
  blockquote: "&ldquo;Yet for your sake we are killed all the day long; we are regarded as sheep to be slaughtered... Rise up; come to our help! Redeem us for the sake of your steadfast love!&rdquo;",
  blockquoteRef: "&mdash; Psalm 44:22, 26",
  overviewHeading: "Overview of Psalm 44",
  overviewParagraphs: [
    `Psalm 44 is the Psalter&rsquo;s great communal lament of unexplained suffering -- the congregation&rsquo;s Job. A maskil of the Sons of Korah, it is written not for one datable disaster but for every day on which the faithful are routed while faithful: the psalm itself insists the people had not forgotten God, had not been false to the covenant, had not turned aside (vv. 17-18) -- and were crushed anyway. Scripture keeps this psalm on file because such days come, and the people of God need authorized words for them.`,
    `The structure is a controlled collision. Verses 1-8 rehearse the family archive at its brightest: the conquest won &ldquo;not by their own sword&rdquo; but by God&rsquo;s right hand and shining face, the confession made first-person -- &ldquo;You are my King, O God&rdquo; -- and sealed with continual boasting in God. Then verse 9&rsquo;s hammer: &ldquo;But you have rejected us.&rdquo; Eleven second-person verbs lay the catastrophe at God&rsquo;s feet -- rejected, scattered, sold for a trifle, made a byword -- monotheism&rsquo;s costly refusal to grant the disaster any ultimate author but the covenant God himself, which is also its hidden hope: the One who did it can undo it.`,
    `Verses 17-22 do what almost no other national lament dares: they protest innocence. The standard Deuteronomic explanation -- defeat means apostasy -- is examined before the God &ldquo;who knows the secrets of the heart&rdquo; and truthfully denied. Then comes the psalm&rsquo;s deepest discovery: &ldquo;for <em>your sake</em> we are killed all the day long&rdquo; -- suffering not despite loyalty but because of it, the persecution intrinsic to carrying God&rsquo;s name in a world at odds with him.`,
    `Paul lifts verse 22 whole into Romans 8:36, at the exact center of the Bible&rsquo;s strongest passage on the love of God. He does not soften the psalm -- the sheep-for-slaughter condition remains the church&rsquo;s normal weather -- and he does not leave it: &ldquo;in all these things we are more than conquerors through him who loved us,&rdquo; and nothing in all creation &ldquo;will be able to separate us from the love of God in Christ Jesus our Lord&rdquo; (Romans 8:37-39). The psalm asked why; the gospel answers who and whether -- the Lamb who entered the slaughter himself, and a love from which separation is impossible.`,
    `The psalm ends with covenant audacity: &ldquo;Awake! Why are you sleeping, O Lord?&rdquo; -- family speech aimed at the God who neither slumbers nor sleeps, prayed with the belly on the ground, and grounded finally not in the people&rsquo;s protested innocence but in hesed alone: &ldquo;Redeem us for the sake of your steadfast love.&rdquo; No explanation arrives inside the psalm; access does. And the church, praying it after the storm-boat (Mark 4:38) and the empty tomb, knows how the story of the seemingly sleeping God ends: he rises.`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 44 trains testimony in the dark, forbids false explanations, sets the sword inside unbreakable love, and authorizes pounding on the door.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
