"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "Asaph (superscription: A Maskil of Asaph) -- the longest of the twelve Asaph psalms" },
  { label: "Genre", value: "Historical psalm as teaching parable -- 72 verses, second-longest in the Psalter" },
  { label: "Scope", value: "From the exodus and wilderness through the fall of Shiloh to the choice of Judah, Zion, and David" },
  { label: "Structure", value: "vv. 1-8 the charge to tell the next generation; vv. 9-39 the wilderness cycle of forgetting; vv. 40-64 from Egypt's plagues to Shiloh's fall; vv. 65-72 the surprise ending -- David the shepherd" },
  { label: "Key Verse", value: "v. 4 -- We will tell to the coming generation the glorious deeds of the LORD" },
  { label: "NT Citation", value: "Verse 2 ('I will open my mouth in a parable') quoted in Matthew 13:35 of Jesus' parables" },
  { label: "Companions", value: "Psalms 105 and 106 (the other great historical psalms); Deuteronomy 6:4-9; 1 Corinthians 10:1-13" },
];

const THEMES = [
  {
    color: GOLD,
    title: "Tell to the Coming Generation: History as a Relay Race",
    body: `Psalm 78 opens not with history but with a charge about history: &ldquo;Give ear, O my people, to my teaching... things that we have heard and known, that our fathers have told us. We will not hide them from their children, but tell to the coming generation the glorious deeds of the LORD... which he commanded our fathers to teach to their children, that the next generation might know them, the children yet unborn, and arise and tell them to their children&rdquo; (vv. 1-6). Four generations stand in one sentence -- fathers, us, children, children yet unborn -- a relay race of testimony in which each runner&rsquo;s single task is to hand the baton on unbroken.
<br/><br/>
The stated purpose is precise (v. 7): &ldquo;so that they should set their hope in God and not forget the works of God, but keep his commandments.&rdquo; Hope, memory, obedience -- in that order, and all three downstream of telling. And the stated warning is equally precise (v. 8): &ldquo;that they should not be like their fathers, a stubborn and rebellious generation.&rdquo; The psalm is about to narrate Israel&rsquo;s failures at devastating length -- and verse 8 explains why: honest history, including the shameful parts, is the vaccine. A sanitized past produces an unprepared future.
<br/><br/>
This is Deuteronomy 6 set to music: the words on the heart, taught diligently to children, talked of in the house and on the way. Biblical faith has no mechanism of transmission other than this -- no gene, no institution, no automatic inheritance. Every generation is one untold generation away from Judges 2:10: &ldquo;there arose another generation... who did not know the LORD or the work that he had done for Israel.&rdquo;
<br/><br/>
The application presses on every household and congregation: What are the children actually hearing? Not what is available to them -- what is <em>told</em> to them, deliberately, by name, with the failures included? Psalm 78 assigns the syllabus (glorious deeds, might, wonders -- and the wilderness rebellions), names the teachers (the ones who heard it themselves), and sets the stakes (hope in God, or another stubborn generation). The baton is passed at the dinner table or it is dropped there.`,
  },
  {
    color: ROSE,
    title: "They Forgot His Works: The Anatomy of Unbelief",
    body: `The long middle of the psalm (vv. 9-39) is a case study in how believing communities go dark, and its diagnosis is consistently one word: forgetting. &ldquo;They forgot his works and the wonders that he had shown them&rdquo; (v. 11); &ldquo;they did not remember his power, or the day when he redeemed them&rdquo; (v. 42). Ephraim&rsquo;s armed and equipped soldiers &ldquo;turned back on the day of battle&rdquo; (v. 9) -- not for lack of weapons but for lack of memory: courage is downstream of remembrance, and they had let the redemption story fade.
<br/><br/>
The psalm then traces forgetting&rsquo;s escalation with terrible accuracy. Forgetting breeds testing: &ldquo;they tested God in their heart by demanding the food they craved&rdquo; (v. 18). Testing breeds insolence: &ldquo;they spoke against God, saying, &lsquo;Can God spread a table in the wilderness? He struck the rock and water gushed out... Can he also give bread?&rsquo;&rdquo; (vv. 19-20) -- the miracle just received is repurposed as grounds for doubting the next one. This is unbelief&rsquo;s signature move in every age: it does not deny God&rsquo;s past acts; it merely refuses to let them imply anything about his present ability. Yesterday&rsquo;s rock-water counts for nothing at today&rsquo;s bread-question.
<br/><br/>
Even the responses to judgment decay: when God struck, &ldquo;they remembered that God was their rock&rdquo; -- but &ldquo;they flattered him with their mouths; they lied to him with their tongues. Their heart was not steadfast toward him&rdquo; (vv. 34-37). Crisis-piety without heart-change: repentance as weather, not as turning.
<br/><br/>
Paul reads this exact history and hands it to the church: &ldquo;these things took place as examples for us, that we might not desire evil as they did... written down for our instruction, on whom the end of the ages has come. Therefore let anyone who thinks that he stands take heed lest he fall&rdquo; (1 Corinthians 10:6, 11-12). Psalm 78&rsquo;s wilderness is not ancient news; it is the standing mirror. The believer&rsquo;s primary defense is the psalm&rsquo;s own prescription: aggressive, deliberate, generational remembering -- because no one drifts into memory, only out of it.`,
  },
  {
    color: TEAL,
    title: "He Remembered That They Were Flesh: The Grace Inside the Judgment",
    body: `For all its severity, Psalm 78&rsquo;s deepest revelation is a pair of verses about God&rsquo;s restraint: &ldquo;Yet he, being compassionate, atoned for their iniquity and did not destroy them; he restrained his anger often and did not stir up all his wrath. He remembered that they were but flesh, a wind that passes and comes not again&rdquo; (vv. 38-39). At the center of the catalogue of rebellions stands not the expected annihilation but a God who keeps choosing mercy -- atoning, restraining, remembering the creature&rsquo;s frailty even while the creature forgets the Creator&rsquo;s works.
<br/><br/>
The symmetry of the two rememberings is the psalm&rsquo;s secret architecture. Israel&rsquo;s sin: they did not remember (vv. 11, 42). Israel&rsquo;s survival: <em>he</em> remembered (v. 39). The people&rsquo;s memory failed toward God; God&rsquo;s memory held toward the people -- and held precisely at the point of their weakness: &ldquo;he remembered that they were but flesh.&rdquo; Psalm 103:14 says it again: &ldquo;he knows our frame; he remembers that we are dust.&rdquo; Divine mercy is not naivety about human nature; it is full knowledge of it, choosing compassion anyway.
<br/><br/>
And the grace is active, not merely restraining. Through the whole wilderness account, judgment never gets the last word over provision: he split rocks and gave drink &ldquo;abundantly as from the deep&rdquo; (v. 15); he &ldquo;rained down on them manna to eat and gave them the grain of heaven -- man ate of the bread of the angels&rdquo; (vv. 24-25); he &ldquo;led them in safety, so that they were not afraid&rdquo; (v. 53). The complaining, testing, forgetting people were fed every single day by the God they doubted every other day.
<br/><br/>
Jesus stood in a synagogue and took up this psalm&rsquo;s bread: when the crowd cited the manna -- &ldquo;he gave them bread from heaven to eat&rdquo; (John 6:31, quoting v. 24) -- he answered, &ldquo;I am the bread of life... your fathers ate the manna in the wilderness, and they died... I am the living bread that came down from heaven&rdquo; (John 6:35, 49-51). The grain of heaven was always pointing past itself. The God who atoned and restrained in verse 38 was storing up the full atonement -- the Bread broken so that forgetful flesh might live forever.`,
  },
  {
    color: PURPLE,
    title: "He Chose David His Servant: The Surprise Ending",
    body: `After sixty-four verses of rebellion, plague, and loss -- climaxing in the unthinkable: God &ldquo;forsook his dwelling at Shiloh... and delivered his power to captivity&rdquo; (vv. 60-61, the ark taken by the Philistines, 1 Samuel 4) -- the psalm turns on a sunrise: &ldquo;Then the Lord awoke as from sleep... and he put his adversaries to rout&rdquo; (vv. 65-66). And the ending, for which the whole psalm has been preparing, is a double election: &ldquo;He rejected the tent of Joseph; he did not choose the tribe of Ephraim, but he chose the tribe of Judah, Mount Zion, which he loves... He chose David his servant and took him from the sheepfolds; from following the nursing ewes he brought him to shepherd Jacob his people... With upright heart he shepherded them and guided them with his skillful hand&rdquo; (vv. 67-72).
<br/><br/>
The rejection of Ephraim (the tribe of Shiloh, the tribe that &ldquo;turned back on the day of battle,&rdquo; v. 9) and the choice of Judah, Zion, and David is the psalm&rsquo;s answer to its own long question: how does the story of a chronically forgetful people continue at all? Not by the people finally becoming reliable -- seventy verses have foreclosed that hope -- but by God installing something new: a chosen place (Zion, &ldquo;which he loves&rdquo;) and a chosen shepherd. History&rsquo;s cure, in Asaph&rsquo;s telling, is not better followers but a better leader; grace answers systemic failure with sovereign election.
<br/><br/>
The shepherd-imagery is exact and tender: David is taken &ldquo;from following the nursing ewes&rdquo; -- the man whose trade was gentleness with the vulnerable is promoted to a nation of them. And the psalm&rsquo;s last line gives the job description that the whole sad history had been begging for: upright heart, skillful hand -- integrity and competence, shepherding and guiding.
<br/><br/>
But the psalm&rsquo;s ending is deliberately larger than David, and Israel knew it: David&rsquo;s own house would forget and fail like Ephraim&rsquo;s. Matthew 13:35 quotes verse 2 -- &ldquo;I will open my mouth in parables&rdquo; -- as fulfilled in <em>Jesus</em>: the true Asaph telling Israel&rsquo;s story, and the true David ending it rightly. &ldquo;I am the good shepherd&rdquo; (John 10:11) is Psalm 78:71-72 claimed in person -- the Shepherd of upright heart and skillful hand, taken not from the sheepfolds but from the grave, who feeds forgetful flesh with the bread of heaven and will not lose one of the flock (John 6:39). The history of forgetting ends at a Shepherd who never forgets his sheep.`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-8",
    text: "Give ear, O my people, to my teaching... I will open my mouth in a parable; I will utter dark sayings from of old... We will not hide them from their children, but tell to the coming generation the glorious deeds of the LORD... that the next generation might know them... and that they should not be like their fathers, a stubborn and rebellious generation.",
    comment: `The prologue frames 72 verses of history as mashal -- parable, teaching-riddle: the past told so that its pattern is seen and escaped. Four generations stand in the relay of verses 3-6 (fathers, us, children, children yet unborn), with the triple purpose of verse 7 -- hope set in God, works not forgotten, commandments kept -- and the honest warning of verse 8: the failures will be told precisely so they are not repeated. Matthew 13:35 quotes verse 2 of Jesus&rsquo; parables: the true Teacher opening his mouth over Israel&rsquo;s story, uttering what was hidden from the foundation of the world. Every Christian home and pulpit inherits the charge: the baton of testimony passes by telling, or not at all (Deuteronomy 6:6-7; Judges 2:10).`,
  },
  {
    ref: "vv. 9-20",
    text: "The Ephraimites, armed with the bow, turned back on the day of battle... They forgot his works... He divided the sea and let them pass through it... he split rocks in the wilderness and gave them drink abundantly... Yet they sinned still more... They tested God in their heart by demanding the food they craved... 'Can God spread a table in the wilderness?'",
    comment: `The case study opens: fully equipped soldiers who fail for lack of memory (v. 9) -- courage is downstream of remembrance. The catalogue of wonders (sea divided, cloud and fire, rocks split into rivers) is set directly against the response (sinned still more, tested God, demanded, doubted), exposing unbelief&rsquo;s signature: it never denies yesterday&rsquo;s miracle, it just rules it inadmissible at today&rsquo;s need -- &ldquo;he struck the rock and water gushed out... can he <em>also</em> give bread?&rdquo; (v. 20). The question drips with the logic every believer has heard in his own head at the edge of a new crisis. 1 Corinthians 10:6, 11 files this whole section as &ldquo;examples... written down for our instruction.&rdquo;`,
  },
  {
    ref: "vv. 21-39",
    text: "He rained down on them manna to eat and gave them the grain of heaven. Man ate of the bread of the angels... In spite of all this, they still sinned... When he killed them, they sought him... But they flattered him with their mouths... Yet he, being compassionate, atoned for their iniquity... He remembered that they were but flesh, a wind that passes and comes not again.",
    comment: `Provision and rebellion alternate in escalating cycles: manna and quail answered by craving and unbelief; judgment answered by crisis-piety that &ldquo;flattered him with their mouths&rdquo; while hearts stayed loose (vv. 36-37). The section&rsquo;s -- arguably the psalm&rsquo;s -- summit is the double mercy of verses 38-39: he atoned, restrained anger often, and <em>remembered that they were flesh</em>. The symmetry is the psalm&rsquo;s secret: they did not remember his works (v. 11); he remembered their frailty (v. 39; Psalm 103:14). Divine mercy is not ignorance of human nature but full knowledge of it, choosing compassion. John 6:31-35 takes this section&rsquo;s bread to its destination: the manna-Giver standing in person, the true grain of heaven -- &ldquo;I am the bread of life.&rdquo;`,
  },
  {
    ref: "vv. 40-55",
    text: "How often they rebelled against him in the wilderness... They did not remember his power, or the day when he redeemed them from the foe, when he performed his signs in Egypt... He turned their rivers to blood... He gave over their cattle to the hail... He made a path for his anger... Then he led out his people like sheep and guided them in the wilderness like a flock... and brought them to his holy land.",
    comment: `The psalm rewinds to Egypt to measure the forgetting: the plagues retold (blood, flies, frogs, locusts, hail, the firstborn) not as national epic but as the redemption receipt Israel kept losing. &ldquo;They did not remember... the day when he redeemed them&rdquo; (v. 42) is the root diagnosis under every wilderness symptom. Then the tenderness inside the terror: the God whose anger made a path through Egypt &ldquo;led out his people <em>like sheep</em>... like a flock&rdquo; (v. 52) -- shepherd language planted here so the psalm&rsquo;s ending (David from the sheepfolds; the Good Shepherd behind him) is already germinating in the exodus itself. Redemption has always been a Shepherd moving a flock to a holy land.`,
  },
  {
    ref: "vv. 56-64",
    text: "Yet they tested and rebelled against the Most High God... they twisted like a deceitful bow... they provoked him to anger with their high places... He forsook his dwelling at Shiloh, the tent where he dwelt among mankind, and delivered his power to captivity, his glory to the hand of the foe... Fire devoured their young men... and their widows made no lamentation.",
    comment: `Settled in the land, the pattern continues -- idolatry now added to unbelief (&ldquo;high places... idols,&rdquo; v. 58), the people bending false like &ldquo;a deceitful bow&rdquo; (v. 57) that betrays the archer at release. The consequence is the psalm&rsquo;s darkest event: Shiloh forsaken, the ark -- &ldquo;his power... his glory&rdquo; -- surrendered to Philistine hands (1 Samuel 4), the young men devoured, the widows too devastated for lament. Jeremiah would later stand in the temple and preach this very verse against presumption: &ldquo;Go now to Shiloh... and see what I did to it&rdquo; (Jeremiah 7:12-14). No sacred site, no religious furniture, no inherited privilege shields a people that has abandoned the God the furniture points to.`,
  },
  {
    ref: "vv. 65-72",
    text: "Then the Lord awoke as from sleep... and he put his adversaries to rout... He chose the tribe of Judah, Mount Zion, which he loves... He chose David his servant and took him from the sheepfolds; from following the nursing ewes he brought him to shepherd Jacob his people... With upright heart he shepherded them and guided them with his skillful hand.",
    comment: `The surprise ending: after Shiloh&rsquo;s ruin, not restoration of the old but election of the new -- Judah over Ephraim, Zion &ldquo;which he loves,&rdquo; and David lifted from nursing ewes to a nation. The answer to seventy verses of unreliable people is not better people but a chosen shepherd: grace responds to systemic failure with sovereign election. The closing couplet -- upright heart, skillful hand -- is the Bible&rsquo;s two-word standard for all leadership: integrity and competence, neither sufficient alone. And the ending deliberately overshoots its own hero: David&rsquo;s house would fail like Ephraim&rsquo;s, and the psalm waits -- through Matthew 13:35 (v. 2 fulfilled in the parable-telling Christ) to John 10:11 -- for the Shepherd of finally upright heart and unfailing hand, who loses none the Father gives him (John 6:39).`,
  },
];

const APPLICATIONS = [
  {
    color: GOLD,
    title: "Run Your Leg of the Relay",
    body: `Psalm 78 assigns you a position in a four-generation relay: what you &ldquo;have heard and known,&rdquo; you tell -- deliberately, by name, failures included -- to the ones coming after you. Audit your household&rsquo;s actual transmission: do your children (or the young believers God has placed near you) hear the glorious deeds regularly -- Scripture&rsquo;s and your own family&rsquo;s -- told as stories with God as the actor? Or is the faith around them ambient but unnarrated, one silent generation from Judges 2:10?
<br/><br/>
Make it concrete: a weekly table where one deed of God is told (an answered prayer, a provision, a rescue -- with dates and names); the family&rsquo;s testimony written down where children can find it; the failures told too, without varnish, as the psalm tells Israel&rsquo;s -- because a sanitized past produces an unprepared future. And if you received no such inheritance yourself, start the relay rather than mourning the lack: verse 6 includes &ldquo;children yet unborn&rdquo; -- lines of testimony have to begin somewhere, and yours can begin with you.
<br/><br/>
<em>Prayer prompt</em>: God of our fathers, make me a faithful runner in the relay of testimony. Put your deeds on my lips at my own table -- the glorious ones and the hard lessons -- so that the next generation sets its hope in you, and not in anything smaller. Amen.`,
  },
  {
    color: ROSE,
    title: "Fight Forgetting Like the Enemy It Is",
    body: `The psalm&rsquo;s diagnosis of every collapse is one word -- they forgot -- and its corollary is sobering: no one drifts into memory, only out of it. So treat remembering as a discipline with the same seriousness you give any spiritual battle. Keep the records: the journal of answered prayers, the list of covered days (Psalm 140&rsquo;s lesson), the annual retelling of your own redemption story. Rehearse before you request: begin petitions by reciting what God has already done, so that today&rsquo;s bread-question stands in the light of yesterday&rsquo;s rock-water instead of the dark.
<br/><br/>
And learn to catch unbelief&rsquo;s signature move in your own head: the voice that concedes every past mercy while ruling it inadmissible at the present crisis -- &ldquo;yes, he did that, but <em>can he also</em> do this?&rdquo; (v. 20). Name it when you hear it. The believer&rsquo;s answer is the psalm&rsquo;s whole method: recite the record until the record testifies (Lamentations 3:21-23 -- &ldquo;this I call to mind, and therefore I have hope&rdquo;).
<br/><br/>
Take Paul&rsquo;s warning label with full seriousness -- &ldquo;let anyone who thinks that he stands take heed lest he fall&rdquo; (1 Corinthians 10:12) -- and his comfort in the same passage: the faithfulness of God, who with every temptation makes the way of escape (10:13). The wilderness generation is your mirror, not your fate.`,
  },
  {
    color: TEAL,
    title: "Rest in the God Who Remembers You Are Flesh",
    body: `Verses 38-39 are for the believer exhausted by his own inconsistency. You have forgotten, tested, flattered with your mouth while your heart wandered -- the psalm has read your file. And its center holds this: he, being compassionate, atones; he restrains; <em>he remembers that you are flesh</em>. God&rsquo;s mercy is not premised on a flattering view of you; it is premised on full knowledge of your frame (Psalm 103:13-14) -- dust, a passing wind -- met by a compassion that outlasts your cycles.
<br/><br/>
Let that recalibrate both your repentance and your expectations of yourself. Repentance: come back quickly and honestly, not with verse 36&rsquo;s flattery-piety (promises inflated to match the shame) but with the plain candor the gospel makes safe -- confession met by faithful forgiveness (1 John 1:9), because the atoning hinted at in verse 38 has been accomplished in full at the cross. Expectations: build your walk for a creature of flesh -- rhythms, means of grace, community, sleep -- rather than for the imaginary iron saint whose failure keeps surprising you.
<br/><br/>
<em>Prayer prompt</em>: Compassionate God, you remember what I keep forgetting -- your works, and my own frailty. I bring you the whole inconsistent record. Atone, restrain, restore, as you have always done for your people; and feed this passing wind with the bread that came down from heaven, that I may live. Amen.`,
  },
  {
    color: PURPLE,
    title: "Follow the Shepherd the Story Was Always Seeking",
    body: `Psalm 78&rsquo;s ending teaches you where to finally put your hope: not in the people of God becoming reliable (seventy verses close that door), and not permanently in any human leader (David&rsquo;s house failed too), but in the Shepherd God himself provides. Every church crisis, every leadership failure, every disillusionment with Christians -- including yourself -- is survivable by the psalm&rsquo;s route: the story is saved by election and shepherding, not by the flock&rsquo;s performance. &ldquo;I am the good shepherd&rdquo; (John 10:11) is the psalm&rsquo;s last line finally said in person, by One who loses none (John 6:39).
<br/><br/>
Then take the closing couplet as your own standard wherever you lead -- home, team, ministry, classroom: <em>upright heart and skillful hand</em>. Integrity without competence shepherds sincerely into ditches; competence without integrity shepherds skillfully for the wolf. Pray for both; build both; measure leaders -- and your own leadership -- by both.
<br/><br/>
And notice, last of all, where David was recruited: from the nursing ewes -- the trade of gentleness with the vulnerable. If your current assignment feels small and hidden, it may be the exact apprenticeship the Shepherd uses (Luke 16:10). Tend what is in front of you with an upright heart and a skillful hand, and leave the promotions to the God who was watching the sheepfolds all along.`,
  },
];

const data: PsalmGuideData = {
  accent: GOLD,
  heroGradientEnd: "#171007",
  badge: "Psalm 78",
  metaLine: "Maskil of Asaph &bull; 72 Verses &bull; Historical Psalm",
  title: "Tell to the Coming Generation",
  heroIntro: "Asaph&rsquo;s 72-verse history sermon -- Israel&rsquo;s story told as a parable, failures included, so the next generation sets its hope in God. The anatomy of forgetting, the God who remembered they were flesh, the fall of Shiloh -- and the surprise ending: a shepherd taken from the nursing ewes, pointing to the Shepherd who never loses a sheep.",
  blockquote: "&ldquo;We will not hide them from their children, but tell to the coming generation the glorious deeds of the LORD... that they should set their hope in God.&rdquo;",
  blockquoteRef: "&mdash; Psalm 78:4, 7",
  overviewHeading: "Overview of Psalm 78",
  overviewParagraphs: [
    `Psalm 78 is the second-longest psalm in the Psalter -- 72 verses of Israel&rsquo;s history told by Asaph as a maskil, a teaching psalm, and framed from its first lines as mashal: parable, dark sayings from of old (v. 2). This is history with a homiletic purpose -- the past narrated so that its pattern can be seen and escaped. Matthew 13:35 quotes verse 2 of Jesus&rsquo; own parables: the true Teacher opening his mouth over Israel&rsquo;s story, uttering things hidden since the foundation of the world.`,
    `The prologue (vv. 1-8) is the Bible&rsquo;s great charter of generational transmission: four generations in one sentence -- fathers, us, children, children yet unborn -- and a triple purpose: that they set their hope in God, not forget his works, and keep his commandments. The failures will be told at devastating length precisely so they are not repeated (v. 8); a sanitized past produces an unprepared future, and every community of faith is one untold generation from Judges 2:10.`,
    `The long middle (vv. 9-64) is the anatomy of forgetting. Wonders are catalogued -- the sea divided, rocks split into rivers, manna rained down, &ldquo;the bread of the angels&rdquo; -- and answered by testing, craving, and unbelief&rsquo;s signature question: &ldquo;He struck the rock and water gushed out... <em>Can he also give bread?</em>&rdquo; (v. 20) -- yesterday&rsquo;s miracle ruled inadmissible at today&rsquo;s need. Even repentance decays into flattery (vv. 36-37). The escalation ends at the psalm&rsquo;s darkest event: God forsakes Shiloh and delivers the ark -- &ldquo;his power... his glory&rdquo; -- into Philistine captivity (vv. 60-61; 1 Samuel 4; Jeremiah 7:12-14).`,
    `Yet the psalm&rsquo;s summit is mercy: &ldquo;he, being compassionate, atoned for their iniquity... He remembered that they were but flesh&rdquo; (vv. 38-39). The secret architecture is a symmetry of memory: they did not remember his works; he remembered their frailty. Divine compassion is not naivety about human nature but full knowledge of it -- the same knowledge that, in John 6, stands up in a synagogue as the manna&rsquo;s meaning: &ldquo;I am the bread of life... the living bread that came down from heaven&rdquo; (John 6:35, 51).`,
    `The ending is the surprise the whole psalm was building toward (vv. 65-72): not the old restored but the new elected -- Judah over Ephraim, Zion &ldquo;which he loves,&rdquo; and David taken from the nursing ewes to shepherd Jacob &ldquo;with upright heart... and skillful hand.&rdquo; The answer to seventy verses of unreliable people is not better people but a chosen Shepherd -- and the ending deliberately overshoots David himself, waiting through Matthew 13:35 to John 10:11 for the Good Shepherd whose heart is finally upright, whose hand never fails, and who loses none of the flock the Father gives him.`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 78 assigns the relay of testimony, arms the fight against forgetting, rests the inconsistent in remembered-flesh mercy, and points every disillusionment to the Shepherd.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
