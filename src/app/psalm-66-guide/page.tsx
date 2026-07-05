"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "Anonymous (superscription: To the choirmaster. A Song. A Psalm)" },
  { label: "Genre", value: "Thanksgiving -- corporate praise narrowing to personal testimony" },
  { label: "Structure", value: "vv. 1-4 all the earth summoned; vv. 5-7 come and see (the exodus remembered); vv. 8-12 tried as silver, brought to abundance; vv. 13-15 vows paid in the house; vv. 16-20 come and hear (one soul's testimony)" },
  { label: "Key Verses", value: "v. 5 -- Come and see what God has done; v. 16 -- Come and hear... what he has done for my soul" },
  { label: "Key Image", value: "v. 10-12 -- refined as silver, through fire and through water, out to abundance" },
  { label: "Heart Condition", value: "v. 18 -- If I had cherished iniquity in my heart, the Lord would not have listened" },
  { label: "NT Connection", value: "Testing as refining (1 Peter 1:6-7); testimony as evangelism (John 4:29 -- 'Come, see a man...'; Mark 5:19)" },
];

const THEMES = [
  {
    color: GOLD,
    title: "Come and See, Come and Hear: The Funnel from All the Earth to One Soul",
    body: `Psalm 66 is built like a funnel. It opens at maximum width: &ldquo;Shout for joy to God, <em>all the earth</em>; sing the glory of his name&rdquo; (vv. 1-2) -- every land, every nation summoned to praise. Then it narrows: &ldquo;Come and see what <em>God has done</em>&rdquo; (v. 5) -- the nations invited to inspect Israel&rsquo;s history, the sea turned to dry land. Narrower still: &ldquo;Bless <em>our</em> God, O peoples&rdquo; (v. 8) -- the worshiping congregation, tried and brought out. Then a single worshiper walks into the temple with his vows (vv. 13-15). And the psalm ends at the narrowest point of all: &ldquo;Come and hear, all you who fear God, and I will tell what he has done <em>for my soul</em>&rdquo; (v. 16).
<br/><br/>
The architecture is the theology. The God of cosmic praise is the God of personal dealing; the anthem of all the earth and the testimony of one soul are the same song at different magnifications. Biblical faith refuses to choose between them: a religion that is all cosmic scale grows cold and abstract; one that is all personal testimony grows small and self-absorbed. Psalm 66 holds the telescope and the microscope in the same two hands.
<br/><br/>
The two invitations -- &ldquo;come and <em>see</em>&rdquo; (v. 5) and &ldquo;come and <em>hear</em>&rdquo; (v. 16) -- are the psalm&rsquo;s twin engines, and together they define testimony. Seeing: the public, historical acts of God, open to inspection (the exodus was not done in a corner; neither was the resurrection -- Acts 26:26). Hearing: the personal report of what those public acts became in one life. Evangelism has always run on both rails: &ldquo;Come, see a man who told me all that I ever did&rdquo; (John 4:29); &ldquo;Go home to your friends and tell them how much the Lord has done for you&rdquo; (Mark 5:19).
<br/><br/>
Spurgeon noted that the psalmist &ldquo;would have all eyes see and all ears hear what God has wrought&rdquo; -- and that the man who has nothing to tell of what God has done for his soul has reason to ask whether his religion has yet gone below the surface. The funnel is meant to reach the bottom of every worshiper.`,
  },
  {
    color: TEAL,
    title: "Through Fire and Through Water: Tried as Silver, Brought Out to Abundance",
    body: `The center of the psalm is one of Scripture&rsquo;s definitive statements about suffering in the life of God&rsquo;s people: &ldquo;For you, O God, have tested us; you have tried us as silver is tried. You brought us into the net; you laid a crushing burden on our backs; you let men ride over our heads; we went through fire and through water; yet you have brought us out to a place of abundance&rdquo; (vv. 10-12).
<br/><br/>
Every clause matters. <em>You</em> have tested us: the trials are attributed to God himself -- not escaped from his providence, but administered by it. <em>As silver is tried</em>: the image is the refiner&rsquo;s crucible (Proverbs 17:3; Malachi 3:3), where heat is applied not to destroy the metal but to purify it -- the dross burned off, the silver brought out brighter and truer. The suffering has a craftsman and a purpose. <em>Net... burden... men riding over our heads</em>: the descriptions are concrete and severe; the psalm does not minimize what refining feels like from inside the crucible. <em>Through fire and through water</em>: the two archetypal ordeals -- and the two elements through which Israel literally passed, sea and wilderness -- covering between them every kind of extremity (Isaiah 43:2 makes the same pair into a promise: &ldquo;when you pass through the waters... through fire... I will be with you&rdquo;).
<br/><br/>
And then the destination: <em>yet you have brought us out to a place of abundance</em>. The Hebrew is lavish -- a wide, saturated place, overflow after constriction. The God who brought them <em>in</em> brought them <em>out</em>, and out to more than they had before. This is the Bible&rsquo;s repeated arc: Joseph&rsquo;s pit to Pharaoh&rsquo;s right hand, the wilderness to the land, the cross to the resurrection. Testing, in the covenant, is never terminal; it is transitional.
<br/><br/>
Peter hands the crucible image to the church without alteration: &ldquo;you have been grieved by various trials, so that the tested genuineness of your faith -- more precious than gold that perishes though it is tested by fire -- may be found to result in praise and glory and honor at the revelation of Jesus Christ&rdquo; (1 Peter 1:6-7). The refiner has not changed methods, and he has never yet lost a piece of silver in the fire.`,
  },
  {
    color: PURPLE,
    title: "I Will Pay You My Vows: Worship That Keeps Its Trouble-Promises",
    body: `Verses 13-15 bring the psalm&rsquo;s single worshiper to the temple gate with his arms full: &ldquo;I will come into your house with burnt offerings; I will perform my vows to you, that which my lips uttered and my mouth promised <em>when I was in trouble</em>.&rdquo; The offerings that follow are extravagant -- fattened animals, rams, bulls, goats -- a costly public settling of accounts.
<br/><br/>
The key phrase is &ldquo;when I was in trouble.&rdquo; These are trouble-vows: promises made in the crucible -- <em>if you bring me out of this, I will...</em> -- now being kept in the abundance. Scripture takes such vows with utter seriousness: &ldquo;When you vow a vow to God, do not delay paying it... It is better that you should not vow than that you should vow and not pay&rdquo; (Ecclesiastes 5:4-5; compare Psalm 116:12-14, 18). The crisis prayer that is forgotten in the calm is one of the oldest failures of the human heart; Psalm 66 models its opposite -- a memory that survives the rescue.
<br/><br/>
Why does God care about vow-keeping? Not because he needs the bulls (Psalm 50:9-14 is explicit: he owns the cattle on a thousand hills; what he asks is thanksgiving and performed vows). Vows kept are love verified. They prove the crisis-prayer was relationship and not manipulation -- that the worshiper wanted God, not merely the exit. And they cost something on purpose: David&rsquo;s principle -- &ldquo;I will not offer burnt offerings to the LORD my God that cost me nothing&rdquo; (2 Samuel 24:24) -- is the exact spirit of verses 13-15. Cheap gratitude after costly rescue is its own kind of dishonesty.
<br/><br/>
The Christian&rsquo;s trouble-vows are rarely bulls and rams; they are the promises made in hospital corridors and sleepless nights -- the recommitments, the surrenders, the &ldquo;if you get me through this&rdquo; pledges. The psalm&rsquo;s counsel is simple and searching: God heard them, and the abundance you now stand in is the appointed place to keep them -- publicly, concretely, and without delay (Hebrews 13:15 names the church&rsquo;s standing sacrifice: praise, the fruit of lips that acknowledge his name).`,
  },
  {
    color: ROSE,
    title: "If I Had Cherished Iniquity: The Heart Condition of Heard Prayer",
    body: `The testimony of verses 16-20 turns on a confession of remarkable honesty: &ldquo;I cried to him with my mouth... <em>If I had cherished iniquity in my heart, the Lord would not have listened.</em> But truly God has listened; he has attended to the voice of my prayer&rdquo; (vv. 17-19). Between the crying mouth and the listening God stands one condition: the heart&rsquo;s posture toward its own sin.
<br/><br/>
The verb is precise: <em>cherished</em> -- not &ldquo;committed&rdquo; (which would silence every prayer ever prayed, since no sinless pray-er exists), but regarded, harbored, held onto with intention. The picture is of a heart that looks at a known sin and decides to keep it -- pet it, feed it, plan around it -- while simultaneously asking God for help. That double posture, the psalm says, breaks the circuit. Not because God&rsquo;s hearing is fragile, but because such prayer is not actually prayer: it asks God for rescue while refusing him lordship, wanting his hand but not his face. Isaiah 59:1-2 and James 4:3 describe the same short-circuit; Psalm 139:23-24 is its remedy prayed aloud.
<br/><br/>
Notice that this confession sits inside a <em>testimony of answered prayer</em>. The psalmist is not laying a burden on others but explaining his own history: I checked my heart; I let go of what I found; and truly God has listened. The examined heart is not a barrier to grace but the doorway to assurance -- which is why the psalm can end in one of the Psalter&rsquo;s warmest doxologies: &ldquo;Blessed be God, because he has not rejected my prayer <em>or removed his steadfast love from me!</em>&rdquo; (v. 20). Prayer heard and hesed retained: the two things the honest heart most needs to know.
<br/><br/>
The gospel deepens both sides. The condition is not perfection but candor -- &ldquo;if we confess our sins, he is faithful and just to forgive&rdquo; (1 John 1:9) -- and the hearing is now guaranteed by an Intercessor whose heart cherished no iniquity at all, who &ldquo;always lives to make intercession&rdquo; for those who draw near through him (Hebrews 7:25). The believer prays verse 18 as self-examination and verse 20 as settled standing: in Christ, the prayer is not rejected and the love is not removed.`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-4",
    text: "Shout for joy to God, all the earth; sing the glory of his name; give to him glorious praise! Say to God, How awesome are your deeds!... All the earth worships you and sings praises to you; they sing praises to your name. Selah",
    comment: `The summons is universal from the first word: kol-ha'arets, all the earth, commanded to shout, sing, and speak to God directly (&ldquo;Say to God...&rdquo;). Verse 3&rsquo;s realism is often missed: &ldquo;so great is your power that your enemies come cringing to you&rdquo; -- praise is owed even where love is absent; God&rsquo;s greatness extracts acknowledgment from friend and foe alike (compare Philippians 2:10-11, every knee bowing). Verse 4 speaks the future as present -- all the earth worships -- prophetic certainty in the grammar of accomplished fact. The Selah lets the cosmic claim ring before the psalm begins to prove it from history.`,
  },
  {
    ref: "vv. 5-7",
    text: "Come and see what God has done: he is awesome in his deeds toward the children of man. He turned the sea into dry land; they passed through the river on foot. There did we rejoice in him, who rules by his might forever, whose eyes keep watch on the nations -- let not the rebellious exalt themselves. Selah",
    comment: `The first invitation: come and see -- God&rsquo;s deeds as public evidence, open to inspection. Two water-crossings are compressed into one couplet: the sea (exodus, Exodus 14) and the river (Jordan, Joshua 3) -- the bracketing miracles of the whole redemption journey. &ldquo;<em>There</em> did we rejoice&rdquo; collapses the generations: the singing congregation locates itself at the far bank, participants in an event centuries past -- corporate memory as present identity (compare Deuteronomy 5:3). Verses 6-7 pivot from memory to vigilance: the God of the crossings still &ldquo;rules by his might forever,&rdquo; his eyes on the nations -- past deliverance as standing warning to present rebels.`,
  },
  {
    ref: "vv. 8-12",
    text: "Bless our God, O peoples... who has kept our soul among the living and has not let our feet slip. For you, O God, have tested us; you have tried us as silver is tried... we went through fire and through water; yet you have brought us out to a place of abundance.",
    comment: `The congregation&rsquo;s testimony, framed as an invitation to the peoples to bless Israel&rsquo;s God for Israel&rsquo;s preservation. The trials are catalogued without flinching -- the net, the crushing burden, men riding over our heads -- and attributed without flinching: &ldquo;<em>you</em>, O God, have tested us.&rdquo; The refiner&rsquo;s image (silver tried in the crucible) gives the suffering both an author and a purpose: purification, not punishment (Proverbs 17:3; Malachi 3:3; 1 Peter 1:6-7). &ldquo;Through fire and through water&rdquo; spans every extremity (Isaiah 43:2), and the destination-clause carries the whole section: brought out -- not merely back, but &ldquo;to a place of abundance,&rdquo; overflow after constriction. The crucible, in covenant hands, is a corridor.`,
  },
  {
    ref: "vv. 13-15",
    text: "I will come into your house with burnt offerings; I will perform my vows to you, that which my lips uttered and my mouth promised when I was in trouble. I will offer to you burnt offerings of fattened animals... rams... bulls and goats. Selah",
    comment: `The psalm narrows from &ldquo;we&rdquo; to &ldquo;I&rdquo;: one worshiper at the temple gate, settling trouble-vows in the day of abundance. The offerings are deliberately lavish -- fattened animals, the smoke of rams -- gratitude priced to match the rescue (2 Samuel 24:24: no offerings &ldquo;that cost me nothing&rdquo;). &ldquo;When I was in trouble&rdquo; is the confession inside the ceremony: these promises were made in the crucible, and the worshiper&rsquo;s memory survived the exit -- the rarest of graces (Ecclesiastes 5:4-5; Psalm 116:14, 18). Vows kept are love verified: proof that the crisis-prayer sought God and not merely the door.`,
  },
  {
    ref: "vv. 16-20",
    text: "Come and hear, all you who fear God, and I will tell what he has done for my soul... If I had cherished iniquity in my heart, the Lord would not have listened. But truly God has listened... Blessed be God, because he has not rejected my prayer or removed his steadfast love from me!",
    comment: `The second invitation completes the funnel: come and <em>hear</em> -- public history (v. 5) now personal testimony, addressed to &ldquo;all you who fear God,&rdquo; the community where such telling belongs. Verse 18&rsquo;s condition is exact: <em>cherished</em> iniquity -- not committed (which would silence everyone) but harbored, held onto while asking help -- breaks prayer&rsquo;s circuit (Isaiah 59:1-2; James 4:3), because it wants God&rsquo;s hand without his face. The psalmist&rsquo;s examined heart issues not in anxiety but in the Psalter&rsquo;s warmest assurance: prayer not rejected, hesed not removed (v. 20). Hebrews 7:25 gives the verse its resting place -- an Intercessor without iniquity, through whom drawing near is always heard.`,
  },
];

const APPLICATIONS = [
  {
    color: GOLD,
    title: "Learn to Tell What He Has Done for Your Soul",
    body: `Verse 16 is a template sentence: &ldquo;Come and hear... and I will tell what he has done for my soul.&rdquo; Most believers can discuss theology, church, and even other people&rsquo;s conversions more easily than they can complete that sentence about themselves. Practice completing it. Write the specific history: what were you, what did God do, what changed -- not in borrowed phrases but in your own nouns and verbs. Then tell it -- first &ldquo;among those who fear God&rdquo; (testimony&rsquo;s home is the congregation), and from there outward (Mark 5:19).
<br/><br/>
Keep the psalm&rsquo;s two rails together: come-and-see (the public facts -- the cross, the empty tomb, the recorded acts, Acts 26:26) and come-and-hear (what those facts became in your life). Testimony without the public acts collapses into subjectivism -- &ldquo;my experience&rdquo; against someone else&rsquo;s; public acts without testimony stay abstract. The Samaritan woman used both in one breath: &ldquo;Come, see a man who told me all that I ever did&rdquo; (John 4:29) -- and a town came.
<br/><br/>
<em>Prayer prompt</em>: God of my history, give me the memory to see what you have actually done for my soul, the honesty to say it plainly, and the love to say it out loud -- to your people first, and to anyone you send. Amen.`,
  },
  {
    color: TEAL,
    title: "Read Your Crucible by Its Craftsman",
    body: `Verses 10-12 give sufferers a grammar that neither denies pain nor despairs in it. Practice the psalm&rsquo;s three attributions. First: &ldquo;<em>You</em> have tested us&rdquo; -- dare to see God&rsquo;s hand over the trial rather than only the enemy&rsquo;s, the economy&rsquo;s, or chance&rsquo;s; a crucible with a craftsman is endurable in a way that random fire is not. Second: &ldquo;as <em>silver</em> is tried&rdquo; -- name what the heat is for: the refiner&rsquo;s interest is the metal&rsquo;s purity, not its destruction, and he sits at the crucible watching (Malachi 3:3), never leaving the fire unattended. Third: &ldquo;you have brought us <em>out to abundance</em>&rdquo; -- hold the destination in view; in the covenant, testing is a corridor, not a room (1 Peter 1:6-7; James 1:2-4).
<br/><br/>
If you are in the fire-and-water stretch now: Isaiah 43:2 is the promise shaped exactly to it -- through the waters, through the fire, <em>I will be with you</em> -- and the far side is real, whether it arrives in this life&rsquo;s &ldquo;place of abundance&rdquo; or the final one (Romans 8:18). If you are on the far side already: do not rewrite the story as luck or grit. Say what the psalm says -- he brought us in, he held us through, he brought us out -- and let the abundance become altar rather than amnesia.
<br/><br/>
And extend the same reading to those still in the crucible around you: sit with them as the refiner sits -- attentive, unhurried, certain of the silver.`,
  },
  {
    color: PURPLE,
    title: "Pay the Trouble-Vows",
    body: `Do the audit verses 13-15 assume: what did you promise God when you were in trouble? In the corridor outside the ICU, in the season the marriage nearly failed, in the panic of the diagnosis or the debt -- the recommitments, the surrenders, the &ldquo;if you bring me through this&rdquo; pledges. God heard them (Ecclesiastes 5:4). The calm you now stand in is not the place where those promises expire; it is the place appointed for keeping them.
<br/><br/>
Keep them the psalm&rsquo;s way: concretely (name the vow and the act that fulfills it), publicly where appropriate (vows paid &ldquo;in your house,&rdquo; before the congregation -- Psalm 116:14, 18), and at cost (2 Samuel 24:24 -- gratitude that costs nothing verifies nothing). If a vow was rash or wrongly made, bring it honestly to God rather than quietly shelving it; but do not let the common revision happen -- the crisis-faith downgraded to a calm-season hobby.
<br/><br/>
<em>Prayer prompt</em>: Lord, you remember what my lips uttered when I was in trouble -- I bring those promises back into the light. Give me the integrity to keep them now that you have kept me, and let my gratitude cost something, as your rescue did. Receive it in the name of the One whose vow to redeem me was kept at the highest price. Amen.`,
  },
  {
    color: ROSE,
    title: "Uncherish the Iniquity",
    body: `Verse 18 is the maintenance check for a living prayer life. If heaven has felt shut, run this diagnostic before any other: is there a known sin I am <em>cherishing</em> -- looking at, keeping, feeding, planning around -- while asking God&rsquo;s help with everything else? The issue is not sinlessness (no pray-er has that) but harboring: the deliberate double posture that wants God&rsquo;s hand while refusing his face. That posture, Scripture warns consistently, breaks the circuit (Isaiah 59:1-2; James 4:3; 1 Peter 3:7).
<br/><br/>
The remedy is the Psalter&rsquo;s own: invite the search -- &ldquo;Search me, O God, and know my heart... see if there be any grievous way in me&rdquo; (Psalm 139:23-24) -- name what is found, and release it in confession (1 John 1:9). Uncherishing is rarely painless; cherished sins are cherished for reasons. But the exchange rate is the psalm&rsquo;s closing doxology: prayer not rejected, steadfast love not removed (v. 20) -- assurance that no harbored sin ever purchased anyone.
<br/><br/>
And pray it all from inside the gospel&rsquo;s security, not toward it: you examine your heart not to earn a hearing but because a hearing is already guaranteed -- &ldquo;he always lives to make intercession&rdquo; for those who draw near through him (Hebrews 7:25). The One who cherished no iniquity prays with you; blessed be God, who has not rejected your prayer, nor removed his steadfast love from you.`,
  },
];

const data: PsalmGuideData = {
  accent: GOLD,
  heroGradientEnd: "#171007",
  badge: "Psalm 66",
  metaLine: "A Song. A Psalm &bull; 20 Verses &bull; Thanksgiving",
  title: "Come and See What God Has Done",
  heroIntro: "The thanksgiving psalm built like a funnel -- from all the earth shouting for joy, to the nation remembering the sea crossed on foot, to the congregation tried as silver and brought through fire and water to abundance, down to a single worshiper paying trouble-vows and telling the fearers of God what he has done for one soul.",
  blockquote: "&ldquo;We went through fire and through water; yet you have brought us out to a place of abundance... Come and hear, all you who fear God, and I will tell what he has done for my soul.&rdquo;",
  blockquoteRef: "&mdash; Psalm 66:12, 16",
  overviewHeading: "Overview of Psalm 66",
  overviewParagraphs: [
    `Psalm 66 is a thanksgiving psalm with the architecture of a funnel. It opens at maximum width -- &ldquo;Shout for joy to God, <em>all the earth</em>&rdquo; -- and narrows by stages: the nations invited to inspect Israel&rsquo;s public history (&ldquo;Come and see what God has done,&rdquo; v. 5); the congregation testifying to its testing and preservation (vv. 8-12); a single worshiper entering the house with his vows (vv. 13-15); and finally one soul&rsquo;s testimony to those who fear God (&ldquo;Come and hear... what he has done for my soul,&rdquo; v. 16). The God of cosmic praise and the God of personal dealing are one God -- the anthem and the testimony are the same song at different magnifications.`,
    `The remembered history is the redemption journey bracketed by its two water-crossings: the sea turned to dry land (Exodus 14) and the river passed on foot (Joshua 3). &ldquo;<em>There</em> did we rejoice in him&rdquo; collapses the centuries -- the singing generation locates itself at the far bank, participants in the ancient rescue (Deuteronomy 5:3). And the God of the crossings has not retired: he &ldquo;rules by his might forever,&rdquo; his eyes on the nations.`,
    `At the psalm&rsquo;s center stands one of Scripture&rsquo;s definitive statements on suffering (vv. 10-12): &ldquo;<em>You</em>, O God, have tested us; you have tried us as silver is tried... we went through fire and through water; yet you have brought us out to a place of abundance.&rdquo; The trial has an author (God), an image (the refiner&rsquo;s crucible -- purification, not destruction), a severity the psalm does not minimize (the net, the crushing burden, men riding over our heads), and a destination (out -- to abundance). In the covenant, testing is a corridor, not a room; 1 Peter 1:6-7 hands the same crucible to the church unaltered.`,
    `The single worshiper of verses 13-15 models the rarest of graces: a memory that survives the rescue. His lavish offerings pay the vows &ldquo;my mouth promised <em>when I was in trouble</em>&rdquo; -- crisis-promises kept in the calm, at cost (2 Samuel 24:24), because vows kept are love verified: proof the crucible-prayer wanted God and not merely the exit (Ecclesiastes 5:4-5; Psalm 116:14).`,
    `The closing testimony (vv. 16-20) turns on the Psalter&rsquo;s great heart-condition: &ldquo;If I had <em>cherished</em> iniquity in my heart, the Lord would not have listened&rdquo; -- not committed (which would silence all prayer) but harbored: the double posture that asks God&rsquo;s help while keeping a chosen sin. The examined and honest heart issues not in anxiety but in the warmest assurance in the psalm: &ldquo;Blessed be God, because he has not rejected my prayer or removed his steadfast love from me!&rdquo; (v. 20). In Christ -- the Intercessor who cherished no iniquity, ever living to intercede (Hebrews 7:25) -- both halves of that doxology are the believer&rsquo;s settled standing.`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 66 trains testimony, reads the crucible by its craftsman, pays the trouble-vows, and keeps the heart honest enough to be heard.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
