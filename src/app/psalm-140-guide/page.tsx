"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "David (superscription: To the choirmaster. A Psalm of David)" },
  { label: "Genre", value: "Individual lament against violent and slanderous enemies" },
  { label: "Position", value: "Opens the final Davidic collection (Psalms 138-145) preceding the Psalter's closing Hallel" },
  { label: "Structure", value: "vv. 1-5 deliver me from the violent; vv. 6-8 my covering in battle; vv. 9-11 vengeance handed to God; vv. 12-13 justice certain for the afflicted" },
  { label: "Key Verse", value: "v. 7 -- O LORD, my Lord, the strength of my salvation, you have covered my head in the day of battle" },
  { label: "Selah", value: "Appears three times (vv. 3, 5, 8) -- the psalm breathes between its cries" },
  { label: "NT Citation", value: "Verse 3 ('the venom of asps is under their lips') quoted in Romans 3:13 in Paul's indictment of all humanity" },
];

const THEMES = [
  {
    color: ROSE,
    title: "Sharp Tongues and Viper Venom: Speech as Violence",
    body: `Psalm 140 asks for rescue from &ldquo;evil men&rdquo; and &ldquo;men of violence&rdquo; (v. 1), but when David describes their weapons, he does not mention swords. He mentions mouths: &ldquo;They make their tongue sharp as a serpent&rsquo;s, and under their lips is the venom of asps&rdquo; (v. 3). The parallel verses fill in the arsenal -- plans, stirred-up wars (v. 2), hidden traps, cords, nets, snares (v. 5) -- but the leading weapon is language. Sharpened tongues; venom under the lips. In the Bible&rsquo;s realism, words maim: they poison reputations, spring traps, and start the wars that swords then finish.
<br/><br/>
This is why Scripture&rsquo;s ethics of speech are so severe. &ldquo;Death and life are in the power of the tongue&rdquo; (Proverbs 18:21); the tongue is &ldquo;a fire... a restless evil, full of deadly poison&rdquo; (James 3:6-8 -- James reaching for the same venom image). The slanderer of Psalm 140 is not a lesser threat than the swordsman; he is the same threat in a quieter uniform. Anyone who has been the target of a whisper campaign, a manufactured accusation, or coordinated contempt knows that verse 3 is not a metaphor exaggerated but experience described.
<br/><br/>
The apostle Paul gives verse 3 an unexpected second career. In Romans 3:13, building his case that &ldquo;none is righteous, no, not one,&rdquo; he quotes it -- &ldquo;the venom of asps is under their lips&rdquo; -- as evidence against <em>all</em> humanity, Jew and Gentile alike. What David prayed about his enemies, Paul diagnoses in every unredeemed mouth, including ours. The psalm thus reads twice: as the victim&rsquo;s honest prayer against venomous men, and as the mirror in which we discover our own species&rsquo; poison -- and our shared need of the grace Romans goes on to announce (Romans 3:24).
<br/><br/>
Prayed from the first position, the psalm authorizes naming verbal violence for what it is and bringing it to God unedited. Prayed from the second, it forbids self-righteousness while we do so: the line between the venomous and the victimized runs through every heart until grace redraws it.`,
  },
  {
    color: GOLD,
    title: "You Have Covered My Head in the Day of Battle",
    body: `At the psalm&rsquo;s center stands one of David&rsquo;s most soldierly confessions: &ldquo;I say to the LORD, You are my God; give ear to the voice of my pleas for mercy, O LORD! O LORD, my Lord, the strength of my salvation, you have covered my head in the day of battle&rdquo; (vv. 6-7). The image is a helmet -- or better, the shield lifted over a comrade&rsquo;s head in the crush of combat. David has been in enough battles to know the feeling of arrows that somehow did not land. Looking back, he names the cover: not luck, not skill only, but God -- &ldquo;the strength of my salvation.&rdquo;
<br/><br/>
Two features of this confession train the praying heart. First, its tense: &ldquo;you <em>have covered</em>&rdquo; -- past experience funding present petition. David asks confidently in verses 1-5 and 8-11 because he remembers verses like 7. The believer&rsquo;s memory of specific protections is ammunition for the next prayer; forgetting them is unilateral disarmament. Second, its address: &ldquo;I say to the LORD, You are my God&rdquo; -- the psalm&rsquo;s hinge is a declared allegiance. Before requesting anything further, David re-plants his flag: whatever the day of battle brings, the relationship is settled.
<br/><br/>
Spurgeon, who called this whole final Davidic group &ldquo;songs for the man of God under fire,&rdquo; notes that the covered head leaves the rest of the soldier exposed: God&rsquo;s protection in the psalm is not exemption from the battle but preservation through it. David is still surrounded, still slandered, still snared at every path -- and still alive, still praying, still covered where it counts.
<br/><br/>
The New Testament issues the same equipment to every believer: &ldquo;take the helmet of salvation&rdquo; (Ephesians 6:17; 1 Thessalonians 5:8 -- &ldquo;for a helmet the hope of salvation&rdquo;). The covered head is now explicitly the salvation Christ won: whatever the day of battle takes from his people, it cannot take the head -- the life hidden with Christ in God (Colossians 3:3).`,
  },
  {
    color: PURPLE,
    title: "Let Burning Coals Fall on Them: The Imprecation Left in God's Hands",
    body: `Verses 9-11 flare into imprecation: &ldquo;As for the head of those who surround me, let the mischief of their lips overwhelm them! Let burning coals fall upon them! Let them be cast into fire, into miry pits, no more to rise! Let not the slanderer be established in the land; let evil hunt down the violent man speedily!&rdquo; As always in the Psalter, the curses must be read for what they are: prayers, not actions -- the transfer of vengeance from David&rsquo;s hands to God&rsquo;s.
<br/><br/>
Notice the strict poetic justice of the requests. The enemies sharpened their <em>lips</em>; David asks that &ldquo;the mischief of their <em>lips</em>&rdquo; bury them -- their own weapon returned to sender. They dug pits and set snares (v. 5); he asks that they fall into pits themselves. They hunted him (v. 11 -- the verb of pursuit); he asks that &ldquo;evil hunt down the violent man.&rdquo; This is not random fury but the law of the harvest prayed aloud: &ldquo;whatever one sows, that will he also reap&rdquo; (Galatians 6:7). The imprecation asks God to let evil&rsquo;s own physics complete their arc.
<br/><br/>
The burning coals belong to the same logic. In Scripture, coals from the altar signify God&rsquo;s own holy response -- judgment on the unrepentant (Genesis 19:24; Psalm 11:6) or, astonishingly, purification for the confessing (Isaiah 6:6-7). Paul quotes the Proverb that turns the image once more: kindness to an enemy &ldquo;will heap burning coals on his head&rdquo; (Romans 12:20) -- the fire of unexpected grace that can melt enmity into repentance. The believer prays Psalm 140:10 with both outcomes on the table, preferring the second: Lord, stop them -- by conversion if possible, by judgment if not.
<br/><br/>
Either way, the essential move is David&rsquo;s: the coals are <em>God&rsquo;s</em> to drop, never ours to throw. &ldquo;Beloved, never avenge yourselves... &lsquo;Vengeance is mine, I will repay, says the Lord&rsquo;&rdquo; (Romans 12:19). The psalm gives rage a liturgy precisely so it never becomes a strategy.`,
  },
  {
    color: TEAL,
    title: "I Know That the LORD Maintains the Cause of the Afflicted",
    body: `After thirteen verses of threat and plea, the psalm lands on bedrock: &ldquo;I know that the LORD will maintain the cause of the afflicted, and will execute justice for the needy. Surely the righteous shall give thanks to your name; the upright shall dwell in your presence&rdquo; (vv. 12-13). The verb is forensic: the LORD will &ldquo;maintain the cause&rdquo; -- take up the case, act as counsel and judge for those who cannot afford advocacy. What courts of power deny the afflicted, the court of heaven guarantees.
<br/><br/>
&ldquo;I know&rdquo; is the psalm&rsquo;s strongest word. Not &ldquo;I hope,&rdquo; not &ldquo;perhaps&rdquo;: David has moved through petition and imprecation to settled certainty. This is the characteristic arc of lament -- prayer does not always change the situation by its end, but it changes the pray-er, from &ldquo;deliver me&rdquo; (v. 1) to &ldquo;I know&rdquo; (v. 12). The afflicted man who began by describing serpents finishes by describing the courtroom of God, and himself inside the verdict.
<br/><br/>
The pairing of the final verses matters: justice for the needy (v. 12) issues in worship by the righteous (v. 13). Thanksgiving is the afflicted&rsquo;s future tense. And the last clause outbids everything the enemies threatened: &ldquo;the upright shall dwell in your presence.&rdquo; The slanderer sought to drive David from the land (v. 11 prayed the reverse); God&rsquo;s answer to the hunted is not merely survival but residence -- dwelling before the face of God, the Psalter&rsquo;s highest good (Psalms 16:11; 23:6; 27:4).
<br/><br/>
Jesus stands at both ends of this hope. He is the ultimate Afflicted One whose cause God maintained -- slandered by false witnesses, condemned by a corrupt court, vindicated in resurrection (1 Timothy 3:16). And he is the guarantee for all the needy who take refuge in him: &ldquo;will not God give justice to his elect, who cry to him day and night?... I tell you, he will give justice to them speedily&rdquo; (Luke 18:7-8). The psalm&rsquo;s last line is the gospel&rsquo;s last page: his servants &ldquo;will see his face&rdquo; (Revelation 22:4).`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-3",
    text: "Deliver me, O LORD, from evil men; preserve me from violent men, who plan evil things in their heart and stir up wars continually. They make their tongue sharp as a serpent's, and under their lips is the venom of asps. Selah",
    comment: `The opening petitions pair rescue (&ldquo;deliver&rdquo;) with ongoing keeping (&ldquo;preserve&rdquo;): David needs both the emergency extraction and the long guard. The enemies&rsquo; anatomy is traced from heart (planning evil) to appetite (stirring wars &ldquo;continually&rdquo; -- conflict as their element) to mouth: tongues honed like a serpent&rsquo;s, venom sacs under the lips. The serpent recalls Eden -- slander is the oldest weapon in the world, first used against God himself (Genesis 3:1-5). Paul&rsquo;s citation of verse 3 in Romans 3:13 universalizes the diagnosis: this venom is not only &ldquo;their&rdquo; problem but the native poison of every unredeemed mouth. The first Selah lets the accusation stand in silence -- and lets the singer feel which side of it, by grace, he now stands on.`,
  },
  {
    ref: "vv. 4-5",
    text: "Guard me, O LORD, from the hands of the wicked; preserve me from violent men, who have planned to trip up my feet. The arrogant have hidden a trap for me, and with cords they have spread a net; beside the way they have set snares for me. Selah",
    comment: `The imagery shifts from venom to poaching: trap, cords, net, snares -- four terms for hidden hunting, all &ldquo;beside the way,&rdquo; planted along David&rsquo;s ordinary routes. This is the texture of persecution by intrigue: not open combat but engineered stumbles -- the ambush in the routine, the trap in the paperwork, the snare in the friendly invitation. &ldquo;The arrogant&rdquo; names the spiritual root: contempt for God emboldens contempt for his servant (Psalm 10:4-9 draws the same hunter portrait). David&rsquo;s response is not counter-trapping but exposure-by-prayer: he maps every device aloud before the LORD. The believer&rsquo;s protection against hidden snares begins with the God to whom nothing is hidden (Hebrews 4:13).`,
  },
  {
    ref: "vv. 6-8",
    text: "I say to the LORD, You are my God; give ear to the voice of my pleas for mercy, O LORD! O LORD, my Lord, the strength of my salvation, you have covered my head in the day of battle. Grant not, O LORD, the desires of the wicked; do not further their evil plot, or they will be exalted! Selah",
    comment: `The psalm&rsquo;s hinge is a renewed allegiance: &ldquo;I say to the LORD, You are my God&rdquo; -- covenant re-declared under fire. The remembered mercy follows: &ldquo;you have covered my head in the day of battle,&rdquo; past protection funding present plea (the helmet the New Testament will name &ldquo;the hope of salvation,&rdquo; 1 Thessalonians 5:8). Verse 8&rsquo;s petition is strategic rather than personal: thwart the plot <em>lest they be exalted</em> -- David&rsquo;s concern reaches past his own safety to the public theology of the outcome, for a triumphant wicked man preaches a false sermon about God&rsquo;s world. The third Selah closes the psalm&rsquo;s ascent; what follows descends into imprecation and then rises to certainty.`,
  },
  {
    ref: "vv. 9-11",
    text: "As for the head of those who surround me, let the mischief of their lips overwhelm them! Let burning coals fall upon them! Let them be cast into fire, into miry pits, no more to rise! Let not the slanderer be established in the land; let evil hunt down the violent man speedily!",
    comment: `The imprecation runs on strict poetic justice: lips that brewed mischief are buried under it; diggers of pits are dropped into them; hunters are hunted. &ldquo;Burning coals&rdquo; invokes the Sodom-judgment vocabulary (Genesis 19:24; Psalm 11:6) -- God&rsquo;s own fire, never David&rsquo;s torch: every verb is a request, not an act. Verse 11&rsquo;s first clause is almost a political theology in one line: &ldquo;let not the slanderer be established in the land&rdquo; -- a society where slander pays and rises is under curse, and the psalm prays against that establishment. Romans 12:19-21 gives the Christian&rsquo;s enactment: leave wrath to God, feed the enemy, and let kindness heap its stranger coals -- grace that either melts or seals.`,
  },
  {
    ref: "vv. 12-13",
    text: "I know that the LORD will maintain the cause of the afflicted, and will execute justice for the needy. Surely the righteous shall give thanks to your name; the upright shall dwell in your presence.",
    comment: `Lament resolves into verdict. &ldquo;I know&rdquo; (yadati) is settled knowledge, not wishful thinking: the LORD takes up the legal cause (din) of the afflicted and executes mishpat for the needy -- heaven&rsquo;s court in permanent session for those priced out of earth&rsquo;s. The closing couplet gives the two futures of the persecuted righteous: thanksgiving (worship as the destination of rescue) and dwelling &ldquo;in your presence&rdquo; (literally &ldquo;before your face&rdquo;) -- the Psalter&rsquo;s supreme blessing, outbidding everything the slanderer tried to take. Kidner notes the quiet contrast with verse 11: the slanderer shall not be established in the land, but the upright are established in something better than the land -- the presence. Luke 18:7-8 and Revelation 22:4 carry the two promises to their gospel conclusion.`,
  },
];

const APPLICATIONS = [
  {
    color: ROSE,
    title: "Name Verbal Violence Honestly -- in Prayer First",
    body: `Psalm 140 refuses the polite fiction that words are harmless. If you are living under slander, mockery, coordinated contempt, or the quiet sabotage of a whisper campaign, this psalm authorizes you to call it what God calls it -- violence -- and to bring it to him with the specificity David used: the plans, the traps &ldquo;beside the way,&rdquo; the venom. Pray the details. The Psalter&rsquo;s realism exists so that your worst experiences have vocabulary in God&rsquo;s presence rather than only in your own head.
<br/><br/>
Then let Romans 3:13 keep the prayer honest: the venom of asps has been under <em>your</em> lips too. Praying this psalm as a pure victim is a misreading; praying it as a forgiven sinner who still needs deliverance from other sinners is exactly right. That double awareness -- wounded and culpable, both brought to grace -- is what keeps lament from curdling into contempt.
<br/><br/>
<em>Prayer prompt</em>: Deliver me, O LORD, from the words aimed at me -- you know each one. And deliver me from the venom native to my own mouth; let the same grace that shields me change me. Cover my head today, and keep my tongue from learning my enemies&rsquo; craft. Amen.`,
  },
  {
    color: GOLD,
    title: "Keep a Record of Covered Days",
    body: `David&rsquo;s confidence had a memory: &ldquo;you <em>have covered</em> my head in the day of battle.&rdquo; Build the same armory. Most believers can name their crises in detail but their deliverances only vaguely -- which is why fear always sounds more documented than faith. Reverse the record-keeping: write down the specific days God covered your head -- the accident that missed, the diagnosis survived, the provision that arrived, the accusation that collapsed, the temptation broken.
<br/><br/>
Then use the record the way the psalm does: as the middle of your prayers. Petition (vv. 1-5), <em>memory</em> (vv. 6-7), petition again (v. 8) -- remembered mercy is load-bearing; it holds the roof up between requests. In the day of battle you will not have time to build confidence from scratch; you will fight with whatever certainty you have banked.
<br/><br/>
And wear the New Testament&rsquo;s issue of the same equipment daily: &ldquo;the helmet of salvation&rdquo; (Ephesians 6:17). The covered head is finally Christ&rsquo;s doing -- a salvation no arrow of accusation can pierce (Romans 8:1, 33-34).`,
  },
  {
    color: PURPLE,
    title: "Give Your Rage a Liturgy, Not a Strategy",
    body: `The imprecation of verses 9-11 is the Bible&rsquo;s alternative to both revenge and repression. Repression buries rage where it ferments into bitterness or bursts out sideways; revenge enacts it and multiplies the evil. The psalm does neither: it <em>prays</em> the rage -- fully, in burning-coals vocabulary -- and in praying it, hands it over. The coals move from your hands to God&rsquo;s, where they belong and where they are safe.
<br/><br/>
Practice the transfer concretely. When the fantasy of an enemy&rsquo;s comeuppance runs its loop, interrupt it with the psalm&rsquo;s form: speak the desire for justice <em>to God</em>, out loud or on paper, at full strength -- then close with the release: &ldquo;the coals are yours, not mine. Vengeance is yours; you will repay&rdquo; (Romans 12:19). Follow it, when you can, with Romans 12:20 -- one concrete kindness toward the enemy -- and let God decide which fire the coals become: judgment, or the stranger burn of grace that leads to repentance.
<br/><br/>
This is not weakness; it is the strongest position on the field. The one who prays Psalm 140 has stopped being governed by the enemy&rsquo;s conduct and started being governed by God&rsquo;s justice.`,
  },
  {
    color: TEAL,
    title: "End at 'I Know'",
    body: `Trace the psalm&rsquo;s arc and copy it: from &ldquo;deliver me&rdquo; (v. 1) to &ldquo;I know&rdquo; (v. 12). Lament that never reaches settled knowledge leaves you where you started, only more articulate. So when you pray under attack, do not stop at the description of the serpents or even the handover of the coals -- pray until you can say what David says: <em>I know</em> that the LORD maintains the cause of the afflicted. Certainty about God&rsquo;s justice, not resolution of your circumstance, is the psalm&rsquo;s finish line; the situation may be unchanged at verse 13, but the singer is not.
<br/><br/>
Anchor the &ldquo;I know&rdquo; where God anchored it: at the cross and the empty tomb, where the ultimate Afflicted One -- slandered, snared, condemned by venomous mouths -- had his cause maintained in resurrection. Because his case was won, every case joined to his is already decided (Romans 8:33-34). And take the last line as your address: not merely rescued from the hunters, but dwelling in the presence -- the upright &ldquo;shall see his face&rdquo; (Revelation 22:4).
<br/><br/>
<em>Prayer prompt</em>: LORD, I have told you the traps and handed you the coals. Now settle me in what I know: you maintain the cause of the afflicted; you executed justice for me at the cross; and the end of my story is not escape but your presence. I will yet give thanks to your name. Amen.`,
  },
];

const data: PsalmGuideData = {
  accent: ROSE,
  heroGradientEnd: "#170710",
  badge: "Psalm 140",
  metaLine: "Psalm of David &bull; 13 Verses &bull; Final Davidic Collection",
  title: "Deliver Me, O LORD, from Evil Men",
  heroIntro: "David under verbal siege -- serpent tongues, viper venom, snares beside the way. He renews his allegiance, remembers the covered head in the day of battle, hands the burning coals to God, and lands on bedrock: I know that the LORD maintains the cause of the afflicted.",
  blockquote: "&ldquo;I say to the LORD, You are my God... O LORD, my Lord, the strength of my salvation, you have covered my head in the day of battle.&rdquo;",
  blockquoteRef: "&mdash; Psalm 140:6-7",
  overviewHeading: "Overview of Psalm 140",
  overviewParagraphs: [
    `Psalm 140 opens the final stretch of Davidic psalms (138-145) that precedes the Psalter&rsquo;s closing crescendo of praise -- and it opens under fire. David prays for deliverance from &ldquo;evil men... men of violence,&rdquo; yet the weapons he describes are mostly made of words and wire: tongues sharpened like a serpent&rsquo;s, the venom of asps under the lips, and a poacher&rsquo;s kit of traps, cords, nets, and snares planted &ldquo;beside the way.&rdquo; This is persecution by intrigue -- the engineered stumble, the whispered campaign -- and the psalm treats it as true violence.`,
    `The structure moves in four movements marked by three Selahs: the plea against the venomous (vv. 1-3), the mapping of the snares (vv. 4-5), the renewed allegiance and remembered mercy (vv. 6-8 -- &ldquo;I say to the LORD, You are my God... you have covered my head in the day of battle&rdquo;), and the imprecation (vv. 9-11) that resolves into the psalm&rsquo;s bedrock certainty (vv. 12-13). The arc is lament&rsquo;s classic journey: from &ldquo;deliver me&rdquo; to &ldquo;I know.&rdquo;`,
    `Verse 3 has a second life in the New Testament: Paul quotes it in Romans 3:13 -- &ldquo;the venom of asps is under their lips&rdquo; -- as evidence in his indictment of the whole human race. What David prayed about his enemies, the apostle diagnoses in every unredeemed mouth. The psalm therefore reads in two directions at once: as the victim&rsquo;s honest prayer against verbal violence, and as the mirror that finds the same poison natively under our own lips -- driving pray-ers of the psalm to the grace announced a few verses later in Romans (3:24).`,
    `The imprecation (vv. 9-11) runs on strict poetic justice -- lips buried under their own mischief, pit-diggers dropped into pits, hunters hunted -- and its burning coals are explicitly God&rsquo;s to drop, never David&rsquo;s to throw. Prayed rather than enacted, the curses are the transfer of vengeance to the only safe hands (Romans 12:19-21), and Scripture holds open the stranger possibility that the coals become the fire of kindness that melts an enemy into a friend (Proverbs 25:21-22; Romans 12:20).`,
    `The psalm ends where the persecuted have always had to stand: &ldquo;I know that the LORD will maintain the cause of the afflicted&rdquo; -- heaven&rsquo;s court in session for those priced out of earth&rsquo;s -- with a double future for the righteous: thanksgiving, and dwelling &ldquo;in your presence.&rdquo; Jesus embodies both ends of that hope: the ultimate slandered and snared One whose cause God maintained in resurrection, and the guarantor that all the needy who cry to God day and night will get justice speedily (Luke 18:7-8), ending not merely safe but before his face (Revelation 22:4).`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 140 teaches honest prayer against verbal violence, memory-funded confidence, the liturgy of handed-over rage, and the settled 'I know.'",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
