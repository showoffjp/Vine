"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "David (superscription: A Maskil of David, when he was in the cave. A Prayer)" },
  { label: "Setting", value: "The cave -- Adullam (1 Samuel 22) or En-gedi (1 Samuel 24), David a fugitive from Saul" },
  { label: "Genre", value: "Individual lament; 'maskil' -- a psalm of instruction: the cave becomes a classroom" },
  { label: "Structure", value: "vv. 1-2 the poured-out complaint; vv. 3-4 no one at my right hand; vv. 5-6 you are my refuge and portion; v. 7 out of prison, into thanksgiving, surrounded by the righteous" },
  { label: "Key Verse", value: "v. 5 -- I cry to you, O LORD; I say, You are my refuge, my portion in the land of the living" },
  { label: "Companion", value: "Psalm 57 (the other cave psalm) and Psalm 143 (which follows and deepens it)" },
  { label: "NT Connection", value: "Gethsemane and the tomb -- the greater David praying from the deeper cave (Hebrews 5:7); community restored around the delivered one (v. 7; Hebrews 2:11-12)" },
];

const THEMES = [
  {
    color: PURPLE,
    title: "A Maskil from the Cave: When the Dead End Becomes a Classroom",
    body: `The superscription places this psalm precisely: &ldquo;A Maskil of David, when he was in the cave.&rdquo; The anointed king of Israel -- already chosen by God, already proven against Goliath -- is hiding in a hole in the rock from a king gone mad with envy (1 Samuel 22 or 24). The anointing has led, for now, not to a throne but to a cave: no horizon, no army worth the name, no legal recourse, no visible way this ends well. It is the Bible&rsquo;s picture of the dead end.
<br/><br/>
And the label on the psalm is &ldquo;maskil&rdquo; -- a psalm of instruction, a teaching psalm. That word over this setting is itself half the message: the cave became a classroom. What David learned in the ground -- how to pour out complaint without perishing in it, where refuge actually lies when every refuge has failed -- was composed, kept, and handed to the congregation so that every generation of the cornered could learn it secondhand before learning it firsthand. Some of Scripture&rsquo;s most durable teaching was written in its least promising rooms (compare Paul&rsquo;s prison letters).
<br/><br/>
The cave also has a strange double role in David&rsquo;s story. It was the place of his lowest isolation -- and the place where God quietly began rebuilding his future: to Adullam came his brothers, and then four hundred of the distressed, the indebted, and the bitter of soul, &ldquo;and he became commander over them&rdquo; (1 Samuel 22:1-2). The community verse 7 dares to hope for (&ldquo;the righteous will surround me&rdquo;) began arriving at the mouth of the very cave where he felt utterly alone. God&rsquo;s deliverances often gather at the dead end while the prayer is still being prayed.
<br/><br/>
Spurgeon, who preached often from this psalm, called it &ldquo;the cry of a soul in a strait, and the way out of it&rdquo; -- and noted that the way out recorded here is not a tunnel but a Godward turn. The exit from the cave, before it was geographical, was doxological.`,
  },
  {
    color: ROSE,
    title: "I Pour Out My Complaint Before Him: The Sanctioned Unburdening",
    body: `&ldquo;With my voice I cry out to the LORD; with my voice I plead for mercy to the LORD. I pour out my complaint before him; I tell my trouble before him&rdquo; (vv. 1-2). Four verbs of unrestrained address open the psalm -- cry, plead, pour out, tell -- and the third is the key: &ldquo;pour out&rdquo; (shaphak), the word for emptying a vessel to the last drop (Hannah uses it: &ldquo;I have been pouring out my soul before the LORD,&rdquo; 1 Samuel 1:15; Psalm 62:8 commands it: &ldquo;pour out your heart before him&rdquo;).
<br/><br/>
Notice what the psalm does <em>not</em> counsel. Not suppression: David does not master his complaint privately and present God a composed summary. Not venting sideways: the complaint is poured &ldquo;<em>before him</em>&rdquo; -- twice repeated -- not onto companions, not into the void, not (in our idiom) into the feed. Biblical complaint has an address, and the address is the difference between lament and bitterness. The same words that corrode the soul when rehearsed to itself become prayer when redirected to the face of God.
<br/><br/>
&ldquo;With my voice&rdquo; -- also doubled -- adds an underrated detail: this is out-loud prayer. In the privacy of a cave, David speaks audibly. There is wisdom in it: the voiced prayer forces vague dread to become actual sentences, and hearing one&rsquo;s own trouble told &ldquo;before him&rdquo; already places it in a larger room than the skull it was echoing in.
<br/><br/>
And verse 3 gives the ground on which such total honesty is safe: &ldquo;When my spirit faints within me, <em>you know my way!</em>&rdquo; God is not learning David&rsquo;s situation from David&rsquo;s report; he knew the path -- and the trap hidden in it -- all along. We do not pour out complaint to inform God but to entrust ourselves to the One already informed (Matthew 6:8). The faint spirit&rsquo;s comfort is not that it can explain everything, but that it is fully known (Psalm 139:1-3).`,
  },
  {
    color: TEAL,
    title: "No One at My Right Hand: The Ache of Being Unnoticed",
    body: `Verse 4 is one of the loneliest sentences in the Bible: &ldquo;Look to the right and see: there is none who takes notice of me; no refuge remains to me; no one cares for my soul.&rdquo; The right hand was the advocate&rsquo;s station -- where a defender, a witness for the defense, a kinsman would stand in your hour of trial (Psalm 16:8; 109:31; 110:5). David looks to the appointed place of help and finds it empty. No advocate. No exit (&ldquo;refuge has perished from me&rdquo; is the literal force). And the ache beneath both: &ldquo;no one cares for my soul&rdquo; -- literally, no one <em>seeks after</em> my soul, except (the bitter irony of the fugitive) those seeking it to destroy it (v. 6).
<br/><br/>
Scripture does not hurry past this experience, and neither should we. Loneliness of this depth -- unnoticed, unadvocated, uncared for -- is not a modern invention; it is an ancient wound with a psalm assigned to it. David&rsquo;s four hundred companions had either not yet come or could not touch the inner solitude; a man can command an army and still find the place at his right hand empty. The psalm gives the church permanent language for the caregiver no one checks on, the sufferer whose crisis outlasted everyone&rsquo;s attention span, the believer surrounded by people and known by none.
<br/><br/>
The next verse is the whole turn: &ldquo;I cry to <em>you</em>, O LORD; I say, <em>You</em> are my refuge&rdquo; (v. 5). When the right hand is empty, David does not first fill it with a lesser ally; he turns to the One whose noticing never lapsed (v. 3 -- &ldquo;you know my way&rdquo;). The emptiness becomes the doorway: it is precisely where no one cares for his soul that he discovers the One who does.
<br/><br/>
And the gospel completes the reversal in both directions. The greater David knew verse 4 absolutely -- &ldquo;they all left him and fled&rdquo; (Mark 14:50); even the Father&rsquo;s face was hidden at the last (Mark 15:34) -- so that no believer&rsquo;s loneliness would ever again be uncompanioned: he has stood in it first. And Psalm 109:31 answers 142:4 word for word: the place at the right hand of the needy is not empty after all -- &ldquo;he stands at the right hand of the needy one, to save him.&rdquo;`,
  },
  {
    color: GOLD,
    title: "You Are My Refuge, My Portion: The Confession That Reopens the Future",
    body: `Verse 5 is the psalm&rsquo;s summit, and it is built of two titles: &ldquo;You are my <em>refuge</em>, my <em>portion</em> in the land of the living.&rdquo; Refuge answers verse 4&rsquo;s &ldquo;no refuge remains to me&rdquo;: when every shelter -- legal, social, geographic -- has failed, God himself is shelter; the cave is not the refuge, the LORD is, which is why David could be safe in the cave and Saul unsafe in the palace. Portion (cheleq) reaches deeper: it is inheritance language, the allotted share of land every Israelite family received -- except the Levites, whose portion was the LORD himself (Numbers 18:20; Deuteronomy 10:9). David, stripped of position, property, and prospects, claims the Levite&rsquo;s inheritance: I may have lost every <em>thing</em>; I have not lost my share, because my share is God (Psalm 16:5; 73:26; Lamentations 3:24).
<br/><br/>
&ldquo;In the land of the living&rdquo; plants the confession in this life, not merely the next: God is not only a hope for after death but a possession amid present danger. The faint-spirited fugitive is, by this verse, one of the wealthiest men alive -- his portfolio reduced to a single asset that cannot be seized, taxed, or killed.
<br/><br/>
From that confession, the future reopens. Verse 6 renews the petition with sober realism (&ldquo;I am brought very low... they are too strong for me&rdquo; -- confession of God as portion coexists with confessed weakness), and verse 7 dares to see past the walls: &ldquo;Bring me out of prison, that I may give thanks to your name! The righteous will surround me, for you will deal bountifully with me.&rdquo; Note the purpose clause: freedom is requested <em>for thanksgiving</em> -- the exit is sought as a doorway to doxology, not merely to relief. And the final image reverses verse 4 exactly: where no one took notice, now &ldquo;the righteous will <em>surround</em> me&rdquo; -- solitude exchanged for encirclement, the empty right hand for a crowding congregation.
<br/><br/>
History kept the promise with interest: the cave filled with the distressed and indebted (1 Samuel 22:2), the fugitive became the king around whom a nation gathered -- and the greater David, brought out of the prison of the tomb, now sings thanksgiving &ldquo;in the midst of the congregation&rdquo; of all the righteous his rescue gathered (Psalm 22:22; Hebrews 2:12). Every believer&rsquo;s deliverance is designed to end the same way: not in private relief, but surrounded -- a testimony that enriches the whole circle, &ldquo;for you will deal bountifully with me.&rdquo;`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-2",
    text: "With my voice I cry out to the LORD; with my voice I plead for mercy to the LORD. I pour out my complaint before him; I tell my trouble before him.",
    comment: `Four verbs of address -- cry, plead, pour out, tell -- and two doubled phrases (&ldquo;with my voice,&rdquo; &ldquo;before him&rdquo;) set the psalm&rsquo;s method. The complaint is poured out like a vessel emptied (shaphak; compare 1 Samuel 1:15; Psalm 62:8), and it is poured <em>before him</em> -- lament&rsquo;s saving address, the difference between prayer and corrosion. The audible voice matters even in a cave&rsquo;s privacy: spoken trouble becomes definite, and definite trouble can be handed over. Nothing is yet solved by verse 2 -- but everything has been relocated, from the echo chamber of the self to the presence of God.`,
  },
  {
    ref: "vv. 3-4",
    text: "When my spirit faints within me, you know my way! In the path where I walk they have hidden a trap for me. Look to the right and see: there is none who takes notice of me; no refuge remains to me; no one cares for my soul.",
    comment: `The ground of honest prayer: &ldquo;<em>you</em> know my way&rdquo; -- God&rsquo;s knowledge outruns David&rsquo;s report, including the trap David may not have spotted (Psalm 139:1-4). Then the loneliest inventory in the Psalter: the right hand -- the advocate&rsquo;s appointed station (Psalm 109:31) -- empty; refuge &ldquo;perished&rdquo;; and no one seeking his soul except to take it. The verse gives permanent biblical language to the unnoticed: the sufferer whose crisis outlasted everyone&rsquo;s attention, the believer surrounded yet unknown. The greater David inhabited this verse to its floor -- deserted by all (Mark 14:50) -- so that his people&rsquo;s solitude would never again be uncompanioned (Hebrews 4:15-16).`,
  },
  {
    ref: "vv. 5-6",
    text: "I cry to you, O LORD; I say, You are my refuge, my portion in the land of the living. Attend to my cry, for I am brought very low! Deliver me from my persecutors, for they are too strong for me!",
    comment: `The turn: the emphatic &ldquo;to <em>you</em>&rdquo; fills the emptiness of verse 4 with the only unfailing occupant. &ldquo;Refuge&rdquo; answers the perished refuges; &ldquo;portion&rdquo; (cheleq) claims the Levite&rsquo;s inheritance -- the LORD himself as one&rsquo;s allotted share when every other holding is gone (Numbers 18:20; Psalms 16:5; 73:26). &ldquo;In the land of the living&rdquo; keeps the claim present-tense: God as possession amid danger, not only hope beyond it. Verse 6 shows that the confession does not retire the petition: brought very low, outmatched (&ldquo;too strong for me&rdquo;), David asks plainly for rescue -- faith&rsquo;s confession and faith&rsquo;s neediness in the same breath, which is the Psalter&rsquo;s constant, honest pairing.`,
  },
  {
    ref: "v. 7",
    text: "Bring me out of prison, that I may give thanks to your name! The righteous will surround me, for you will deal bountifully with me.",
    comment: `The cave has become, in the psalm&rsquo;s last word for it, a &ldquo;prison&rdquo; -- and the exit is requested with a purpose clause: <em>that I may give thanks</em>. Freedom is sought as a doorway to doxology; David wants out not merely to be relieved but to testify. The final line reverses verse 4 image for image: the unnoticed man will be &ldquo;surrounded&rdquo; by the righteous -- gathered community as the fruit of one man&rsquo;s deliverance (fulfilled at Adullam&rsquo;s cave-mouth, 1 Samuel 22:1-2, and finally in the risen Christ singing among his brothers, Psalm 22:22; Hebrews 2:12). &ldquo;You will deal bountifully with me&rdquo; (gamal -- the vocabulary of Psalm 13:6 and 116:7) closes the psalm on expected abundance: prayed in a hole in the ground, its last word is bounty.`,
  },
];

const APPLICATIONS = [
  {
    color: PURPLE,
    title: "Pray the Dead End",
    body: `Everyone eventually prays from a cave: the diagnosis without options, the marriage at stalemate, the career door closed, the season when the anointing seems to have led downward. Psalm 142 is the assigned prayer for that room. Its first instruction is simply that the cave is a place prayer works from -- David&rsquo;s psalm did not wait for better circumstances to be composed, and yours need not wait for them to be prayed.
<br/><br/>
Take the maskil label seriously too: ask what the cave is for. Not everything in it will be explained, but the Psalter&rsquo;s witness is that God teaches in caves what thrones cannot teach -- dependence stripped of props, refuge relocated from circumstances to God, and (often invisibly at the time) the beginnings of the community and calling that come next. Journal in the cave; the curriculum is easiest to see in writing, sometimes years later.
<br/><br/>
<em>Prayer prompt</em>: LORD, this is my cave -- you know its walls better than I do. I refuse to believe the dead end is dead to you. Teach me here what I could learn nowhere else, and while I wait for the exit, be the refuge the cave only pretends to be. Amen.`,
  },
  {
    color: ROSE,
    title: "Pour It Out -- at the Right Address",
    body: `Practice the psalm&rsquo;s method the next time trouble floods you. Out loud, alone, before God: cry, plead, pour, tell -- to the last drop, editing nothing. The discipline is not the pouring (grief pours itself) but the address: <em>before him</em>. The identical words that ferment into bitterness when rehearsed to yourself, or into gossip and despair when poured sideways, become prayer -- and begin becoming healing -- when aimed at the face of God (Psalm 62:8; 1 Peter 5:7).
<br/><br/>
Use the voice. Whispered or full-volume, spoken lament forces the fog into sentences, and sentences can be entrusted. Many believers discover that they do not actually know what they are carrying until they hear themselves tell it &ldquo;before him.&rdquo; And rest the whole unburdening on verse 3&rsquo;s pillow: you are not briefing an uninformed God -- &ldquo;you know my way&rdquo; -- you are handing a known burden to the One who knew it first (Matthew 6:8).
<br/><br/>
One caution from the psalm&rsquo;s shape: pour out the complaint, but do not stop there. Verses 1-4 empty the vessel; verses 5-7 refill it with confession and expectation. Lament that only empties leaves a vacuum; lament that ends at &ldquo;You are my refuge&rdquo; leaves a foundation.`,
  },
  {
    color: TEAL,
    title: "When No One Notices, and When You Are the One Who Should",
    body: `Verse 4 is a mirror with two faces. If it describes you -- unnoticed, unadvocated, the right hand empty -- then take the psalm&rsquo;s route rather than the world&rsquo;s: the ache of being uncared for is real and worth naming before God without shame; and the deepest answer is not first a better social strategy but the discovery David made in the same verse-turn: the One who &ldquo;knows my way&rdquo; also cares for the soul no one else seeks (1 Peter 5:7). From that security, rebuilding human connection becomes possible rather than desperate. And remember who stood in this verse before you: Christ, deserted by all, understands from inside (Hebrews 4:15).
<br/><br/>
But the verse also recruits you. Somewhere near you is a person whose honest testimony is &ldquo;no one takes notice of me; no one cares for my soul&rdquo; -- in your congregation, your workplace, your street. The church is meant to be the ongoing reversal of Psalm 142:4: the community that occupies the empty right hand (Galatians 6:2; James 1:27). Ask God for one name this week -- the unvisited, the crisis-outlasted, the surrounded-but-unknown -- and take notice on purpose: the question &ldquo;how is your soul, actually?&rdquo; asked with time to hear the answer.
<br/><br/>
Verse 7&rsquo;s picture is the goal in both directions: the delivered one <em>surrounded</em> by the righteous. Be part of somebody&rsquo;s surrounding.`,
  },
  {
    color: GOLD,
    title: "Claim the Portion; Aim the Exit at Thanksgiving",
    body: `Make verse 5&rsquo;s second title your own arithmetic: &ldquo;You are my portion in the land of the living.&rdquo; Inventory what the cave has taken -- position, savings, health, reputation, companionship, plans -- and then write the Levite&rsquo;s line under the whole column: my allotted share is the LORD, and that share is intact (Psalm 73:26; Lamentations 3:24). This is not denial of the losses; it is the refusal to let them touch the principal. The believer&rsquo;s net worth survives every cave.
<br/><br/>
Then pray for the exit the way David does -- with a purpose clause: &ldquo;Bring me out... <em>that I may give thanks to your name</em>.&rdquo; Decide now what the deliverance will be for: testimony, not just relief; a story told among the righteous, not privately consumed. Deliverances aimed at thanksgiving get retold and multiply faith in the whole circle that surrounds you (Psalm 22:22); deliverances aimed only at comfort are usually forgotten by the next crisis.
<br/><br/>
<em>Prayer prompt</em>: You are my refuge and my portion in the land of the living -- my one unseizable asset. Bring me out of this prison, and I tell you in advance what I will do with the open door: I will thank your name in the middle of the congregation, and let the righteous surround me and hear it. Deal bountifully with me, as you love to do. Through Jesus, who was brought out of the deepest prison and sings among his brothers still. Amen.`,
  },
];

const data: PsalmGuideData = {
  accent: PURPLE,
  heroGradientEnd: "#0d0717",
  badge: "Psalm 142",
  metaLine: "Maskil of David, in the Cave &bull; 7 Verses",
  title: "You Are My Refuge, My Portion",
  heroIntro: "David&rsquo;s prayer from the cave -- the anointed king hiding in a hole in the rock, pouring out complaint before the LORD, staring at the empty place at his right hand, and finding there the confession that reopens the future: when every refuge fails, God is refuge; when everything is lost, God is portion.",
  blockquote: "&ldquo;I cry to you, O LORD; I say, You are my refuge, my portion in the land of the living... Bring me out of prison, that I may give thanks to your name!&rdquo;",
  blockquoteRef: "&mdash; Psalm 142:5, 7",
  overviewHeading: "Overview of Psalm 142",
  overviewParagraphs: [
    `Psalm 142 carries one of the Psalter&rsquo;s most precise superscriptions: &ldquo;A Maskil of David, when he was in the cave. A Prayer.&rdquo; The setting is the fugitive years -- Adullam (1 Samuel 22) or En-gedi (1 Samuel 24) -- when the anointed king of Israel hid in a hole in the rock from Saul&rsquo;s spears. The anointing had led downward before it led up; the psalm is what David did with the dead end. That it is labeled a maskil -- a teaching psalm -- is half its message: the cave became a classroom, and its curriculum was preserved for every cornered believer since.`,
    `The method comes first (vv. 1-2): four verbs of unrestrained address -- cry, plead, pour out, tell -- with the decisive detail doubled: &ldquo;<em>before him</em>.&rdquo; Biblical lament empties the vessel to the last drop, out loud, at the right address; the same words that corrode when rehearsed to the self or vented sideways become prayer when aimed at the face of God (Psalm 62:8). And the ground of such honesty is verse 3: &ldquo;you know my way&rdquo; -- God is not being informed but entrusted.`,
    `Verse 4 is one of the loneliest sentences in Scripture: the right hand -- the advocate&rsquo;s appointed station -- empty; refuge perished; &ldquo;no one cares for my soul.&rdquo; The psalm gives permanent language to the unnoticed. And the turn that follows is the whole theology of the cave: &ldquo;I cry to <em>you</em>, O LORD; I say, You are my refuge, my portion in the land of the living&rdquo; (v. 5). Refuge answers the failed shelters; portion (cheleq) claims the Levite&rsquo;s inheritance -- the LORD himself as one&rsquo;s allotted share when every other holding is gone (Numbers 18:20; Psalm 16:5; 73:26).`,
    `The ending reopens the future (vv. 6-7): sober about weakness (&ldquo;they are too strong for me&rdquo;), David asks to be brought &ldquo;out of prison&rdquo; -- with a purpose clause: <em>that I may give thanks to your name</em>. Freedom is sought as a doorway to doxology, and the final image reverses verse 4 exactly: the unnoticed man &ldquo;surrounded&rdquo; by the righteous, solitude exchanged for encirclement. History kept the promise -- to the cave&rsquo;s mouth came the distressed and indebted, four hundred strong, and the fugitive became their commander (1 Samuel 22:1-2).`,
    `The New Testament reads the psalm through the greater David. He knew verse 4 to its floor -- deserted by all (Mark 14:50), praying &ldquo;with loud cries and tears&rdquo; (Hebrews 5:7), laid in the deepest cave of all -- and was brought out of that prison to sing thanksgiving &ldquo;in the midst of the congregation&rdquo; (Psalm 22:22; Hebrews 2:12). Because he stood in the empty place, no believer&rsquo;s loneliness is uncompanioned (Hebrews 4:15-16), the place at the right hand of the needy is occupied (Psalm 109:31), and every deliverance still aims where David aimed his: out of prison, into thanksgiving, surrounded by the righteous, dealt with bountifully.`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 142 teaches praying from dead ends, pouring out at the right address, occupying the empty right hand for others, and aiming every exit at thanksgiving.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
