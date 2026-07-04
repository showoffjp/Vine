"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "David (superscription: To the choirmaster. A Psalm of David)" },
  { label: "Genre", value: "Individual lament with the Psalter's most extended imprecation" },
  { label: "Structure", value: "vv. 1-5 the slandered servant; vv. 6-20 the imprecation; vv. 21-29 the plea of the poor and needy; vv. 30-31 the vow of praise" },
  { label: "Key Verse", value: "v. 4 -- In return for my love they accuse me, but I give myself to prayer" },
  { label: "NT Citation", value: "Verse 8 quoted in Acts 1:20 of Judas: 'Let another take his office'" },
  { label: "Interpretive Note", value: "Some read vv. 6-19 as David quoting his accusers' curse; either way the psalm is inspired prayer that hands vengeance wholly to God" },
  { label: "Companions", value: "Psalms 35 and 69 (the other great imprecatory laments, both applied to Christ in the NT)" },
];

const THEMES = [
  {
    color: ROSE,
    title: "In Return for My Love They Accuse Me: The Wound of Betrayal",
    body: `Psalm 109 opens with a silence and a noise: God is silent (&ldquo;Be not silent, O God of my praise!&rdquo;) while wicked and deceitful mouths are open, speaking against David &ldquo;with lying tongues&rdquo; (vv. 1-2). The psalm&rsquo;s occasion is not battlefield violence but verbal violence -- slander, false accusation, words of hate -- and its particular sting is betrayal: &ldquo;In return for my love they accuse me... So they reward me evil for good, and hatred for my love&rdquo; (vv. 4-5). These are not strangers. They are people David loved, prayed for, and did good to, who repaid covenant kindness with a whispering campaign.
<br/><br/>
Scripture takes this wound with utmost seriousness. The Psalter returns to it again and again (Psalms 35, 41, 55, 69): the treachery of the familiar friend, the shared bread lifted against the host. There is a particular devastation when love itself becomes the ground of attack -- when what you gave in good faith is repurposed as ammunition. Anyone who has been slandered by a friend, betrayed in a marriage, undermined by a colleague they mentored, or turned on by a church they served knows exactly the temperature of these verses.
<br/><br/>
David&rsquo;s response in verse 4 is the psalm&rsquo;s hinge and its glory. The Hebrew is compressed to two words: va&rsquo;ani tefillah -- &ldquo;but I -- prayer.&rdquo; Not &ldquo;I give myself to strategy,&rdquo; not &ldquo;I retaliate,&rdquo; not even &ldquo;I defend myself&rdquo;: <em>I am prayer</em>. Under sustained verbal assault, David&rsquo;s whole posture collapses into address to God. The entire terrible psalm that follows must be read from inside those two words -- everything David feels about his enemies is said <em>to God</em>, not done to them.
<br/><br/>
The New Testament identifies the ultimate bearer of this experience. Jesus loved and was hated (John 15:25, quoting the companion psalm: &ldquo;they hated me without a cause&rdquo;); he broke bread with the man who sold him (Psalm 41:9; John 13:18); and Acts 1:20 puts Psalm 109 itself on the lips of the apostles about Judas. The betrayed King has fully inhabited the betrayed believer&rsquo;s psalm.`,
  },
  {
    color: PURPLE,
    title: "The Imprecation: What Verses 6-20 Are and Are Not",
    body: `Verses 6-20 are the longest and fiercest imprecation in the Psalter: let his days be few; let another take his office; let his children be fatherless; let creditors seize all he has; let his iniquity be remembered before the LORD. Christians have always felt the difficulty. How does this stand in the same Bible as &ldquo;love your enemies&rdquo; (Matthew 5:44)? Honest interpretation has to say several things at once.
<br/><br/>
First, a translation question fairly noted: because verse 6 shifts abruptly to the singular (&ldquo;appoint a wicked man against <em>him</em>&rdquo;) after plural enemies in vv. 1-5, some scholars suggest vv. 6-19 quote the curse David&rsquo;s <em>accusers</em> aimed at him, with David answering from verse 20: &ldquo;May this be the reward of my accusers from the LORD.&rdquo; Others -- with most of the tradition -- read the curses as David&rsquo;s own prayer against the ringleader of the slanderers. Either way, the canonical point stands: these words are in Scripture as inspired prayer, and Acts 1:20 treats verse 8 as genuine prophetic speech, not as villain-quotation.
<br/><br/>
Second, notice what the imprecation is <em>not</em>. It is not action: David lifts no finger against his enemy (contrast his own history of sparing Saul twice, 1 Samuel 24 and 26). It is not private vendetta pursued in the dark: it is spoken aloud, to God, in the sanctuary, submitted to God&rsquo;s justice and timing. And it is not personal pique: the enemy described is one who &ldquo;pursued the poor and needy and the brokenhearted, to put them to death&rdquo; (v. 16) -- a predator of the defenseless. The prayer asks the Judge of all the earth to do right (Genesis 18:25) against unrepentant, murderous evil.
<br/><br/>
Third, the imprecation takes God&rsquo;s moral order with total seriousness: &ldquo;He loved to curse; let curses come upon him!... He clothed himself with cursing as his coat; may it soak into his body like water&rdquo; (vv. 17-18). The prayer asks that the man&rsquo;s own chosen currency be paid back to him -- sowing and reaping (Galatians 6:7). Derek Kidner&rsquo;s summary is wise: these psalms are &ldquo;not the mood of everyday, but the extremity&rdquo; -- the boiling point of a faith that refuses both revenge and moral indifference. C. S. Lewis observed that the imprecations testify that the psalmists took right and wrong seriously; the opposite of these prayers is not love but shrug.`,
  },
  {
    color: GOLD,
    title: "Let Another Take His Office: Psalm 109 and Judas",
    body: `In the upper room, between the ascension and Pentecost, Peter stands up to address the wound at the center of the apostolic band: Judas, &ldquo;who became a guide to those who arrested Jesus... was numbered among us and was allotted his share in this ministry&rdquo; (Acts 1:16-17). And Peter&rsquo;s warrant for replacing him is Psalm 109:8, joined to Psalm 69:25: &ldquo;For it is written in the Book of Psalms... &lsquo;Let another take his office.&rsquo;&rdquo;
<br/><br/>
The apostolic reading tells us how the early church understood this psalm. David, the anointed king betrayed by a trusted companion, was a pattern -- a type -- of the greater Anointed One betrayed by a companion who shared his bread. The Spirit &ldquo;spoke beforehand by the mouth of David concerning Judas&rdquo; (Acts 1:16). The psalm&rsquo;s most disturbing section thus becomes, in the New Testament, prophecy fulfilled with terrible precision: the office emptied by treachery, and another appointed to take it (Matthias, Acts 1:26).
<br/><br/>
This connection also shows us <em>how Jesus himself relates to the imprecatory psalms</em>. He is not embarrassed by them; he inhabits them -- but from a particular position. At the cross, the ultimate &ldquo;reward of my accusers&rdquo; scene, he prays &ldquo;Father, forgive them, for they know not what they do&rdquo; (Luke 23:34) -- and yet Scripture does not cancel Psalm 109; it assigns its judgment to the one betrayer who, knowing, hardened himself beyond repentance, &ldquo;the son of destruction&rdquo; (John 17:12). Mercy is offered to the ignorant and the repentant; the imprecation lands where evil is final.
<br/><br/>
Matthew Henry draws the sober lesson: privileges of office are no shield against judgment -- Judas preached, healed, and carried the moneybag, and his ministry itself became part of his indictment. And Spurgeon presses the comfort in it: if even the treachery of Judas was &ldquo;written beforehand,&rdquo; then no betrayal that strikes Christ&rsquo;s people is outside God&rsquo;s government. The worst thing done to the Son of God was foreseen, absorbed, and turned into the world&rsquo;s salvation.`,
  },
  {
    color: TEAL,
    title: "For I Am Poor and Needy: The Anatomy of the Afflicted and the God Who Stands at Their Right Hand",
    body: `After the storm of imprecation, the psalm turns to self-disclosure, and the tone changes utterly: &ldquo;But you, O GOD my Lord, deal on my behalf for your name&rsquo;s sake... For I am poor and needy, and my heart is stricken within me. I am gone like a shadow at evening; I am shaken off like a locust. My knees are weak through fasting; my body has become gaunt&rdquo; (vv. 21-24). This is not a powerful man cursing from a throne; it is an emaciated, fainting, publicly mocked sufferer (&ldquo;when they see me, they wag their heads,&rdquo; v. 25 -- the very gesture flung at the crucified Christ, Matthew 27:39).
<br/><br/>
The basis of David&rsquo;s appeal is crucial: &ldquo;deal on my behalf <em>for your name&rsquo;s sake</em>; because your steadfast love is good, deliver me!&rdquo; (v. 21). He does not plead his own righteousness as leverage; he pleads God&rsquo;s reputation and God&rsquo;s hesed. And he asks for a public vindication with a striking shape: &ldquo;Let them curse, but you will bless!&rdquo; (v. 28) -- he can absorb any human curse if God&rsquo;s blessing is the last word. &ldquo;Let them know that this is your hand; you, O LORD, have done it!&rdquo; (v. 27): the vindication he wants is one that unmistakably displays God, not one that magnifies David.
<br/><br/>
The final verse crowns the psalm with one of the Psalter&rsquo;s great reversals: &ldquo;For he stands at the right hand of the needy one, to save him from those who condemn his soul to death&rdquo; (v. 31). In verse 6 the accuser stood at the right hand to condemn; in verse 31 it is the LORD who stands at the right hand -- to save. The courtroom positions have been swapped. God himself takes the advocate&rsquo;s place beside the defendant.
<br/><br/>
The gospel fills this image to overflowing. Who shall bring any charge against God&rsquo;s elect? &ldquo;It is God who justifies. Who is to condemn? Christ Jesus is the one who died -- more than that, who was raised -- who is at the right hand of God, who indeed is interceding for us&rdquo; (Romans 8:33-34). The Betrayed One now stands as Advocate (1 John 2:1); the accuser of the brothers is thrown down (Revelation 12:10). Psalm 109 ends where every slandered saint may stand: with great thanks in the mouth (v. 30) and the LORD at the right hand.`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-5",
    text: "Be not silent, O God of my praise! For wicked and deceitful mouths are opened against me... In return for my love they accuse me, but I give myself to prayer. So they reward me evil for good, and hatred for my love.",
    comment: `The psalm begins by naming God &ldquo;God of my praise&rdquo; -- even before any rescue, God is defined by the worship David owes and intends to give (see v. 30). The crisis is verbal: lying tongues, words of hate, attack &ldquo;without cause.&rdquo; Verse 4&rsquo;s Hebrew is famously compressed: va&rsquo;ani tefillah, &ldquo;but I -- prayer.&rdquo; David&rsquo;s identity under attack is simply <em>one who prays</em>; the accusation drives him to the throne, not to the sword. Verse 5&rsquo;s &ldquo;evil for good, hatred for my love&rdquo; establishes that this is betrayal by intimates -- the wound Jesus would know in full (John 13:18; 15:25), which is why the church has always heard the Messiah&rsquo;s voice underneath David&rsquo;s in this opening.`,
  },
  {
    ref: "vv. 6-15",
    text: "Appoint a wicked man against him; let an accuser stand at his right hand. When he is tried, let him come forth guilty... May his days be few; may another take his office! May his children be fatherless and his wife a widow!",
    comment: `The imprecation asks that the slanderer be given his own medicine: he who stationed himself as false accuser gets an accuser (satan -- the Hebrew word for adversary/accuser) at his right hand; he who prosecuted the innocent is himself prosecuted and found guilty; even his prayer &ldquo;becomes sin&rdquo; (v. 7) -- piety weaponized by a corrupt heart counts against him. Verse 8, &ldquo;may another take his office (pequddah),&rdquo; becomes in Acts 1:20 the church&rsquo;s warrant for replacing Judas. The curses on family and property (vv. 9-15) horrify modern readers; they reflect the corporate realities of the ancient world and, read canonically, the total unraveling that final, unrepentant evil brings on itself. The prayer hands ALL of this to God -- which is precisely what distinguishes imprecation from revenge.`,
  },
  {
    ref: "vv. 16-20",
    text: "For he did not remember to show kindness, but pursued the poor and needy and the brokenhearted, to put them to death. He loved to curse; let curses come upon him!... May this be the reward of my accusers from the LORD.",
    comment: `Verses 16-18 give the moral logic of the whole imprecation: this is not a personal rival but a predator -- one who hunted &ldquo;the poor and needy and the brokenhearted... to put them to death,&rdquo; who chose cursing as his native language and wore it &ldquo;as his coat.&rdquo; The prayer of vv. 17-19 is strict retribution: let his chosen currency be his payment; let what he soaked others in soak into him. Verse 20 gathers the section (and, on the quotation reading, marks where David&rsquo;s own voice resumes): &ldquo;may this be the reward of my accusers <em>from the LORD</em>&rdquo; -- from the LORD, not from David&rsquo;s hand. Galatians 6:7 states the same law of the harvest; Romans 12:19 gives the Christian&rsquo;s version of verse 20: &ldquo;never avenge yourselves... &lsquo;Vengeance is mine, I will repay, says the Lord.&rsquo;&rdquo;`,
  },
  {
    ref: "vv. 21-25",
    text: "But you, O GOD my Lord, deal on my behalf for your name's sake... For I am poor and needy, and my heart is stricken within me. I am gone like a shadow at evening; I am shaken off like a locust... When they see me, they wag their heads.",
    comment: `The great turn: from the enemy&rsquo;s desert to the sufferer&rsquo;s condition. David&rsquo;s plea rests on God&rsquo;s name and hesed (&ldquo;because your steadfast love is good&rdquo;), not on his own merit. The self-portrait is one of the Psalter&rsquo;s most vulnerable: a heart pierced, a life thinning like a lengthening evening shadow, a body flicked away like a locust from a garment, knees buckling from fasting, flesh gone gaunt. Verse 25&rsquo;s wagging heads reappear at Golgotha (Matthew 27:39): the mockery of the fainting righteous one is finally absorbed by the crucified Christ, who inhabited this psalm&rsquo;s suffering without once returning the curse (1 Peter 2:23).`,
  },
  {
    ref: "vv. 26-31",
    text: "Help me, O LORD my God! Save me according to your steadfast love! Let them know that this is your hand... Let them curse, but you will bless!... With my mouth I will give great thanks to the LORD... For he stands at the right hand of the needy one, to save him from those who condemn his soul to death.",
    comment: `The closing petitions ask for a vindication that unmistakably displays God: &ldquo;let them know that this is your hand.&rdquo; Verse 28 is the psalm&rsquo;s serenity: &ldquo;Let them curse, but you will bless&rdquo; -- human malice loses its terror when God&rsquo;s blessing has the last word. The psalm that began begging God not to be silent ends with David refusing to be silent: &ldquo;with my mouth I will give great thanks... I will praise him in the midst of the throng.&rdquo; And the final image reverses the courtroom of verse 6: where the accuser stood at the right hand to condemn, &ldquo;he [the LORD] stands at the right hand of the needy one, to save.&rdquo; Romans 8:33-34 and 1 John 2:1 unveil the fulfillment: the risen Christ at God&rsquo;s right hand, the Advocate beside the accused, and no charge that can stick.`,
  },
];

const APPLICATIONS = [
  {
    color: ROSE,
    title: "When Slandered: Become Prayer",
    body: `Psalm 109 is God&rsquo;s gift to the slandered. If you have been lied about, betrayed by someone you loved, or repaid evil for good, this psalm authorizes you to feel the full weight of it -- and shows you where to carry the weight. David&rsquo;s two-word posture is the whole counsel: va&rsquo;ani tefillah, &ldquo;but I -- prayer.&rdquo; Not retaliation, not the counter-campaign, not the curated self-defense: prayer, with everything unedited inside it.
<br/><br/>
Practically, this means praying the wound <em>before</em> managing the situation. Tell God the names, the specifics, the injustice, the anger -- all of it. The Psalter&rsquo;s honesty exists so that your rawest truth goes upward instead of sideways. Then, and only then, decide with a quieted heart what (if anything) needs to be said or done -- remembering that David, who prayed this psalm, twice held the spear and refused to throw it (1 Samuel 24; 26).
<br/><br/>
<em>Prayer prompt</em>: O God of my praise, do not be silent. You know what has been said about me and who said it. I refuse the weapons of the slanderer -- but I will not pretend this does not burn. I hand you the injustice whole. Be my Advocate; stand at my right hand; and keep my mouth for praise, not poison. Amen.`,
  },
  {
    color: PURPLE,
    title: "Handing Vengeance to God -- the Costly Alternative to Both Revenge and Indifference",
    body: `The imprecatory psalms scandalize us partly because we have quieter ways of doing worse things: the cold shoulder, the whisper network, the fantasy of an enemy&rsquo;s ruin nursed in private. Psalm 109 will allow none of that. It insists that your desire for justice be spoken -- fully, terribly if need be -- <em>to God</em>, and then left with God. &ldquo;May this be their reward <em>from the LORD</em>&rdquo; (v. 20) is the line that separates imprecation from vendetta.
<br/><br/>
This is exactly Paul&rsquo;s teaching in Romans 12:19-21: never avenge yourselves -- not because wrongs do not matter, but because &ldquo;vengeance is mine, I will repay, says the Lord.&rdquo; Handing vengeance to God is what frees your own hands to &ldquo;overcome evil with good.&rdquo; You can bless the person at the checkout counter of daily life precisely because the ledger has been transferred to a Judge who never miscarries.
<br/><br/>
Two tests keep this prayer Christian: (1) Am I asking God to deal with unrepentant evil, while remaining genuinely glad to see repentance instead? (God was; Nineveh stands as proof.) (2) Have I actually released the outcome -- or am I praying imprecations while running my own quiet campaign? If the second, return to verse 4 and become prayer again.`,
  },
  {
    color: GOLD,
    title: "Read It Beside the Cross",
    body: `The church&rsquo;s deepest answer to the difficulty of Psalm 109 is not a technique but a Person. Jesus is the truest pray-er of this psalm -- loved, then hated; feeding the hand that betrayed him; mocked by wagging heads; condemned by false witnesses -- and at the summit of all that injustice he prayed for his executioners&rsquo; forgiveness (Luke 23:34). Yet the same New Testament applies this psalm&rsquo;s judgment, without apology, to Judas (Acts 1:20). Mercy triumphed for the ignorant and the repentant; judgment stood for evil that made itself final.
<br/><br/>
Hold both, because the cross holds both. At Calvary the imprecation and the intercession meet: every curse the guilty deserved was either absorbed by Christ for those who take refuge in him, or remains for those who, like Judas, refuse him to the end. This is why the believer can pray Psalm 109 without hatred: we ask God to stop evil, we long for the evildoer&rsquo;s repentance, and we know that if he repents, the curse we prayed has already landed -- on Christ, for him, as it did for us.
<br/><br/>
<em>Prayer prompt</em>: Lord Jesus, betrayed King, you prayed this psalm from the inside and never sinned in it. Teach me its honesty without its misuse. For those who have wronged me: I ask first for their repentance, and I remember that I too was your enemy and was shown mercy. Where evil will not repent, I trust the Judge of all the earth to do right -- and I leave the gavel in your scarred hands. Amen.`,
  },
  {
    color: TEAL,
    title: "Stand Where the Advocate Stands",
    body: `The psalm&rsquo;s last verse is its gift to every accused conscience: &ldquo;he stands at the right hand of the needy one, to save him from those who condemn his soul to death&rdquo; (v. 31). Accusation is not only a social experience; it is a spiritual one. Satan&rsquo;s very name means &ldquo;accuser,&rdquo; and his oldest work is prosecuting the saints -- before God and inside their own heads (Revelation 12:10; Zechariah 3:1).
<br/><br/>
The gospel&rsquo;s geometry answers him. At God&rsquo;s right hand stands not your accuser but your Advocate -- Christ Jesus, who died, who was raised, who intercedes (Romans 8:34; 1 John 2:1). When the inner courtroom convenes at 3 a.m. -- replaying failures, rehearsing others&rsquo; verdicts about you, hearing the old prosecuting voice -- Psalm 109:31 tells you who is actually standing beside you. &ldquo;Let them curse, but you will bless&rdquo; (v. 28): the blessing of God, secured in Christ, outranks and outlasts every human and demonic verdict.
<br/><br/>
So end where the psalm ends: with a mouth full of great thanks &ldquo;in the midst of the throng&rdquo; (v. 30). Public praise is the slandered saint&rsquo;s final answer -- not because the pain was unreal, but because the Advocate is.`,
  },
];

const data: PsalmGuideData = {
  accent: ROSE,
  heroGradientEnd: "#170710",
  badge: "Psalm 109",
  metaLine: "Psalm of David &bull; 31 Verses &bull; Imprecatory Lament",
  title: "Be Not Silent, O God of My Praise",
  heroIntro: "The Psalter&rsquo;s hardest prayer: David, repaid hatred for love by trusted companions, gives himself wholly to prayer -- including the fiercest imprecation in the book. Read beside Acts 1:20 and the cross, it becomes the psalm of the betrayed King, the transferred gavel, and the Advocate who stands at the right hand of the needy.",
  blockquote: "&ldquo;In return for my love they accuse me, but I give myself to prayer... For he stands at the right hand of the needy one, to save him from those who condemn his soul to death.&rdquo;",
  blockquoteRef: "&mdash; Psalm 109:4, 31",
  overviewHeading: "Overview of Psalm 109",
  overviewParagraphs: [
    `Psalm 109 is the most extended imprecatory prayer in the Psalter, and the church has never been allowed to look away from it: the apostles themselves quoted verse 8 -- &ldquo;let another take his office&rdquo; -- as Scripture fulfilled in Judas Iscariot (Acts 1:20). Whatever difficulty the psalm poses, the New Testament treats it as inspired prophecy with a precise fulfillment at the very center of the gospel story.`,
    `The occasion is betrayal by intimates. David is under attack not by armies but by mouths -- &ldquo;wicked and deceitful mouths... lying tongues&rdquo; -- and the attackers are people he loved and did good to: &ldquo;in return for my love they accuse me... they reward me evil for good, and hatred for my love&rdquo; (vv. 4-5). His response is the psalm&rsquo;s hinge, two words in Hebrew: va&rsquo;ani tefillah -- &ldquo;but I -- prayer.&rdquo; Everything that follows, however fierce, is said to God rather than done to men.`,
    `Verses 6-20 unleash the imprecation: let an accuser stand at his right hand; let his days be few; let another take his office; let his own loved curses soak into him like water. Interpreters note the abrupt shift to the singular and some hear vv. 6-19 as David quoting the curse his enemies pronounced over him, with verse 20 turning it back: &ldquo;may this be the reward of my accusers from the LORD.&rdquo; On either reading, the canonical function is the same: vengeance is verbalized fully and then handed entirely to God -- the exact opposite of taking it (Romans 12:19). The one cursed is no innocent rival but a predator who &ldquo;pursued the poor and needy and the brokenhearted, to put them to death&rdquo; (v. 16).`,
    `Then the tone breaks. Verses 21-29 reveal the pray-er: poor and needy, heart stricken, fading like an evening shadow, shaken off like a locust, knees weak with fasting, mocked by wagging heads -- the very image the Gospels record at the cross (Matthew 27:39). His plea rests on God&rsquo;s name and steadfast love, not his own merit, and his serenity is verse 28: &ldquo;Let them curse, but you will bless!&rdquo; The psalm ends in vowed public praise and the Psalter&rsquo;s great courtroom reversal: where an accuser stood at the right hand to condemn (v. 6), &ldquo;he stands at the right hand of the needy one, to save&rdquo; (v. 31).`,
    `Read beside the New Testament, Psalm 109 becomes the psalm of the betrayed King and his people. Jesus inhabited its suffering -- loved, hated without cause, betrayed over shared bread, mocked in his fainting -- and never returned the curse (1 Peter 2:23), praying instead for his executioners. Its judgment fell where evil made itself final (Acts 1:20); its blessing rests on all who take refuge in the Advocate who now stands at the right hand of God for the needy (Romans 8:33-34; 1 John 2:1). For every slandered, betrayed, or accused believer, this psalm is both permission to pray the whole wound and the promise that no verdict against you can outlast God&rsquo;s blessing.`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 109 teaches the slandered to pray, vengeance to be transferred, the cross to interpret the curse, and the accused to stand beside the Advocate.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
