"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "Anonymous" },
  { label: "Position", value: "Fifteenth and final Song of Ascents -- the summit of the pilgrim collection (Psalms 120-134)" },
  { label: "Genre", value: "Liturgical call to praise with closing benediction" },
  { label: "Length", value: "3 verses -- among the shortest chapters in the Bible" },
  { label: "Setting", value: "Night service in the temple: the Levites who 'stand by night in the house of the LORD' (compare 1 Chronicles 9:33)" },
  { label: "Key Verse", value: "v. 2 -- Lift up your hands to the holy place and bless the LORD!" },
  { label: "NT Connection", value: "Unceasing worship (1 Thessalonians 5:17; Revelation 7:15 -- 'they serve him day and night in his temple')" },
];

const THEMES = [
  {
    color: PURPLE,
    title: "The Night Shift of Praise: Worship That No One Sees",
    body: `Psalm 134 is addressed to a specific and easily forgotten congregation: &ldquo;all you servants of the LORD, who stand <em>by night</em> in the house of the LORD&rdquo; (v. 1). The temple did not sleep. Levites kept watch and ministered through the dark hours (1 Chronicles 9:33 speaks of singers &ldquo;on duty day and night&rdquo;), tending lamps, guarding gates, offering praise while the city slept. To these night-shift worshipers -- unseen, unapplauded, working the hours when devotion has no audience -- the psalm calls: &ldquo;Come, bless the LORD!&rdquo;
<br/><br/>
There is a whole theology of hiddenness here. The worth of worship is not indexed to its visibility. The praise offered at 3 a.m. by a tired Levite in an empty court was not lesser praise; this psalm dignifies it with the Psalter&rsquo;s attention and makes it the closing note of the entire pilgrim songbook. God&rsquo;s house has no off-hours, and God&rsquo;s servants have no unimportant posts. Spurgeon: &ldquo;They were not watchers only, but blessers of the LORD; their occupation was praise even when the night was darkest.&rdquo;
<br/><br/>
The night setting also speaks to the seasons when worship is hardest. Night in the Psalter is the hour of tears (Psalm 30:5), of wrestling (Psalm 77:2-6), of longing (Psalm 63:6). To &ldquo;stand by night in the house of the LORD&rdquo; is to keep one&rsquo;s post in the dark season and bless God there -- not because the darkness is pleasant but because he is worthy in it. Job worshiped at night (Job 1:20-21); Paul and Silas sang at midnight in the stocks (Acts 16:25); and the church has always known that some of its truest praise is sung in the dark.
<br/><br/>
For every believer whose faithfulness is currently invisible -- the caregiver awake at all hours, the intercessor no one hears, the servant in an obscure post -- Psalm 134 is the Bible&rsquo;s hand on the shoulder: the God of the temple sees the night shift, receives its blessing, and answers it with his own (v. 3).`,
  },
  {
    color: GOLD,
    title: "Bless the LORD... The LORD Bless You: The Two-Way Benediction",
    body: `The tiny psalm turns on one verb used in two directions. Twice the servants are called to <em>bless the LORD</em> (vv. 1-2); then the direction reverses: &ldquo;May <em>the LORD bless you</em> from Zion&rdquo; (v. 3). Man blesses God; God blesses man. The whole grammar of worship is compressed into three verses.
<br/><br/>
What can it mean for a creature to &ldquo;bless&rdquo; the Creator? Not to add anything to him -- &ldquo;If I were hungry, I would not tell you&rdquo; (Psalm 50:12). To bless God (barak) is to kneel before him (the root is related to the knee) and to speak well of him -- to declare his worth, gratefully and publicly. It is the creature&rsquo;s glad acknowledgment of what God already is. And the wonder of the covenant is that God stoops to receive it, as though our small speech of praise mattered to the Almighty -- and Scripture insists it does.
<br/><br/>
But the asymmetry of the exchange is the gospel of the psalm. When we bless God, we give words; when God blesses us, he gives reality -- life, keeping, grace, peace (Numbers 6:24-26). We speak well of him; he does well to us. Derek Kidner notes the &ldquo;happy inequality&rdquo; of the arrangement: the servants lift empty hands to the holy place (v. 2), and the hands come down full, because the Blesser of verse 3 is &ldquo;he who made heaven and earth.&rdquo; No one ever blessed God and went away poorer.
<br/><br/>
This two-way movement is the shape of every true gathering of God&rsquo;s people to this day: we assemble to bless his name, and we are dismissed with his benediction on ours. Worship is not a transaction we initiate; it is an exchange he established -- and in Christ, who first gave himself before we ever lifted a hand, the blessing always outweighs the blessers.`,
  },
  {
    color: TEAL,
    title: "The End of the Pilgrim Road: Why the Ascents Close Here",
    body: `Psalm 134 is the final step of the longest staircase in the Psalter. The Songs of Ascents began in Meshech and Kedar -- far from home, among the hostile (&ldquo;Woe to me that I sojourn in Meshech!&rdquo; Psalm 120:5) -- and climbed through the hills (121), through the gates of Jerusalem (122), through tears and sowing (126), through household blessing (127-128), out of the depths (130), into weaned-child quietness (131), to the ark&rsquo;s resting place (132) and the oil of unity (133). Now, at the summit, there is almost nothing left to say -- only this: bless the LORD. The pilgrimage ends inside the house, at worship, at night, with lifted hands.
<br/><br/>
The brevity is the theology. All journeying, all longing, all ascent resolves into doxology; praise is not one more stop on the road but the road&rsquo;s destination. The psalm is the liturgical equivalent of arrival: the pilgrims, about to return home, address the resident servants of the sanctuary -- &ldquo;keep the praise going while we are gone&rdquo; -- and the servants send the pilgrims out under the benediction of verse 3. Worship continues in Zion; blessing travels home with the worshiper. The two-verse call and one-verse response may well have been sung antiphonally at the closing of the feast.
<br/><br/>
The Christian reads this staircase with its true summit in view. Hebrews 12:22 declares that believers &ldquo;have come to Mount Zion and to the city of the living God&rdquo; -- the ascent accomplished not by our climbing but by Christ&rsquo;s descending and rising. And Revelation shows where the whole pilgrim church is headed: a temple-city where &ldquo;his servants... serve him day and night&rdquo; (Revelation 7:15) and &ldquo;night will be no more&rdquo; (22:5) -- Psalm 134&rsquo;s night watch finally relieved, its praise never ending.
<br/><br/>
Until then, the church lives Psalm 134 in miniature every week: gathered, blessing the LORD; scattered, blessed from Zion; keeping lamps lit through history&rsquo;s long night until the morning comes.`,
  },
  {
    color: GREEN,
    title: "Blessed from Zion by the Maker of Heaven and Earth",
    body: `The final verse joins two names of God that the Songs of Ascents have been braiding together all along: the God of the <em>particular place</em> (&ldquo;from Zion&rdquo;) and the God of <em>universal power</em> (&ldquo;who made heaven and earth&rdquo;). The blessing comes from Zion -- the covenant address, the place of the ark, the sacrifice, the promised presence. And the one who blesses from that small hill is nothing less than the Creator of everything (the refrain of the collection: Psalms 121:2; 124:8).
<br/><br/>
Each half guards the other. A merely local god could bless from Zion only as far as his hill&rsquo;s shadow reached; a merely cosmic force could make heaven and earth but would have no address, no covenant, no face turned toward you. The psalm&rsquo;s God is both: infinite in power, particular in presence. The hands lifted &ldquo;to the holy place&rdquo; (v. 2) are answered by a blessing backed by the resources of the whole created order.
<br/><br/>
Calvin draws the pastoral point: the mention of creation &ldquo;confirms the faith of the godly in the power of God,&rdquo; so that no one who is blessed from Zion need fear that the blessing might exceed the Blesser&rsquo;s means. Whatever your need, the benediction of verse 3 cannot be overdrawn -- the account behind it holds heaven and earth.
<br/><br/>
And the gospel gives the verse its final form. Zion&rsquo;s blessing reached its fullness when &ldquo;the Word became flesh and dwelt among us&rdquo; (John 1:14) -- when the Maker of heaven and earth took an address in his own creation. In Christ, God blesses not merely <em>from</em> Zion but <em>as</em> the true temple (John 2:21); and Ephesians 1:3 is Psalm 134:3 in full bloom: &ldquo;Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places.&rdquo; We bless him because he has blessed us; the two-way benediction meets, forever, in the Son.`,
  },
];

const VERSES = [
  {
    ref: "v. 1",
    text: "Come, bless the LORD, all you servants of the LORD, who stand by night in the house of the LORD!",
    comment: `The call goes out -- likely from departing pilgrims -- to the temple staff on night duty: the Levites who kept the sanctuary&rsquo;s worship alive through the dark hours (1 Chronicles 9:33). &ldquo;Servants of the LORD&rdquo; is a title of dignity, not drudgery: their standing in the house is standing before the King. Three times in one short verse the covenant name YHWH sounds -- servants <em>of the LORD</em>, bless <em>the LORD</em>, house <em>of the LORD</em> -- saturating the night watch with the divine name. The imperative &ldquo;bless&rdquo; (baraku) dispels any notion that night duty is merely guarding: their occupation is doxology. Praise, in the economy of God&rsquo;s house, is work -- and work is praise.`,
  },
  {
    ref: "v. 2",
    text: "Lift up your hands to the holy place and bless the LORD!",
    comment: `Lifted hands are the Psalter&rsquo;s posture of prayer, longing, and surrender (Psalms 28:2; 63:4; 141:2; compare 1 Timothy 2:8 -- &ldquo;lifting holy hands&rdquo;). Hands raised &ldquo;to the holy place&rdquo; orient the whole body toward the presence of God -- empty hands, notably: the servants bring no gift in them but praise itself. The gesture preaches: worship is reaching toward God with nothing to offer and everything to receive, the creature&rsquo;s open-handed acknowledgment of the Giver. That the shortest psalm of the Ascents spends a third of its length on posture is instructive -- the body is not a spectator to worship; it is an instrument of it.`,
  },
  {
    ref: "v. 3",
    text: "May the LORD bless you from Zion, he who made heaven and earth!",
    comment: `The response -- perhaps the priests answering the pilgrims, the night watch blessing those who called to them -- reverses the direction of blessing: the servants blessed the LORD; now the LORD blesses them. The singular &ldquo;you&rdquo; personalizes it: the benediction lands on each worshiper individually. &ldquo;From Zion&rdquo; names the covenant address of blessing; &ldquo;who made heaven and earth&rdquo; names its limitless resources -- the creation formula that has anchored the whole Ascents collection (121:2; 124:8) now seals its final verse. Kidner observes that the little psalm thus ends the pilgrim songbook &ldquo;with every voice raised and every hand lifted&rdquo;: man blessing God, God blessing man, and the Maker of everything dwelling in the midst. Ephesians 1:3 is this verse&rsquo;s New Testament echo -- blessed with every blessing in Christ, the true temple and the true Zion.`,
  },
];

const APPLICATIONS = [
  {
    color: PURPLE,
    title: "Keep Your Night Watch",
    body: `Somewhere in your life is a night shift -- a season or a station where faithfulness has no audience: praying for a prodigal at 2 a.m., caring for a parent no one visits, serving a ministry post nobody notices, holding onto God through a depression that makes every hour feel like midnight. Psalm 134 is addressed to you. The call is not &ldquo;endure the night&rdquo; but &ldquo;<em>bless the LORD</em> in it&rdquo; -- to make the dark hours an offering, not merely an ordeal.
<br/><br/>
Practically: give your night watch a liturgy. Choose a psalm (this one is short enough to memorize in a minute) and pray it at the hardest hour. Name the post you hold as service &ldquo;in the house of the LORD&rdquo; -- because in Christ, you are part of the temple that never sleeps (1 Peter 2:5). And remember who else is on duty: &ldquo;he who keeps Israel will neither slumber nor sleep&rdquo; (Psalm 121:4). Your night watch is kept inside his.
<br/><br/>
<em>Prayer prompt</em>: LORD of the night watch, receive my praise in the dark hours -- not because I feel the song, but because you are worthy of it at midnight as at noon. Keep my hands lifted when they are heaviest. And let me trust that no unseen faithfulness is unseen by you. Amen.`,
  },
  {
    color: GOLD,
    title: "Learn the Exchange: Bless, and Be Blessed",
    body: `The psalm&rsquo;s two-way benediction is a weekly rhythm waiting to be recovered. We come to worship primarily to <em>give</em> -- to bless the LORD, to speak well of him with the congregation -- and we leave having <em>received</em> far more than we brought, because his blessing gives reality where ours gives words. Many believers have this inverted: they attend worship to receive (a lift, a message, an experience) and evaluate it by what they got. Psalm 134 re-aims the heart: come to bless him; the receiving takes care of itself.
<br/><br/>
Try the psalm&rsquo;s own posture, literally: lift your hands -- in corporate worship or alone -- as the body&rsquo;s way of saying what verse 2 says: empty before you, reaching toward you, glad to kneel. And do not slip out before the benediction. The blessing pronounced over God&rsquo;s people at the end of worship is not a decorative signoff; it is verse 3 happening to you -- the Maker of heaven and earth doing well to those who spoke well of him.
<br/><br/>
Then live the exchange midweek: begin each day by blessing God for one specific thing before asking him for anything. The order of the psalm -- bless first, be blessed always -- is the order of a healthy soul.`,
  },
  {
    color: TEAL,
    title: "Finish Your Ascents in Doxology",
    body: `The pilgrim collection travels from &ldquo;Woe is me&rdquo; (Psalm 120) to &ldquo;Bless the LORD&rdquo; (Psalm 134) -- and that trajectory is a template for every journey you are on. Whatever road God has you walking -- a grief, a calling, a long obedience, a recovery -- its intended destination is doxology: not merely surviving the road but arriving at praise.
<br/><br/>
So practice ending things the way the Ascents end. End the day with blessing, not with the scroll of anxieties (a three-verse psalm fits any bedtime). End the week gathered with God&rsquo;s people, hands lifted. End a season -- even a bitter one -- by naming what God was in it and speaking well of him for it. The discipline of the doxological ending trains the heart to read every story the way the Psalter reads the pilgrim&rsquo;s: it climbs toward worship.
<br/><br/>
And let the collection&rsquo;s shape hold your hope: the church&rsquo;s whole pilgrimage ends where Psalm 134 stands -- inside the house, in unending praise, in a city where night is no more (Revelation 22:5). Every small doxology now is a rehearsal for arrival.`,
  },
  {
    color: GREEN,
    title: "Draw on the Whole Account",
    body: `The blessing you live under is signed by &ldquo;he who made heaven and earth.&rdquo; Let that scale correct your functional theology. Most anxiety is a quiet doubt about resources: whether there is enough provision, strength, grace, or time for what you are facing. Psalm 134:3 answers with the Blesser&rsquo;s balance sheet -- the benediction over your life is backed by the assets of creation itself. The God who blesses you from Zion is not a local deity with limited stock; nothing you need exceeds what the Maker of heaven and earth has on hand.
<br/><br/>
Anchor this in Christ, where the verse becomes concrete: &ldquo;he who did not spare his own Son but gave him up for us all, how will he not also with him graciously give us all things?&rdquo; (Romans 8:32). In him you have been &ldquo;blessed... with every spiritual blessing&rdquo; (Ephesians 1:3) -- the two-way benediction consummated: the One who deserved all blessing bore the curse (Galatians 3:13) so that the blessing of Zion could rest on you.
<br/><br/>
<em>Prayer prompt</em>: Maker of heaven and earth, I take my stand under your benediction. Bless me from Zion -- not as I measure resources, but as you possess them. I lift empty hands to your holy place; fill them as you promised, through Jesus Christ, in whom every blessing is already mine. Amen.`,
  },
];

const data: PsalmGuideData = {
  accent: PURPLE,
  heroGradientEnd: "#0d0717",
  badge: "Psalm 134",
  metaLine: "Song of Ascents &bull; 3 Verses &bull; The Final Ascent",
  title: "Come, Bless the LORD, All You Servants",
  heroIntro: "The last and shortest Song of Ascents -- the pilgrim road ends inside the house of the LORD, at night, with lifted hands. The servants bless the LORD; the LORD blesses the servants; and the Maker of heaven and earth signs the benediction from Zion.",
  blockquote: "&ldquo;Lift up your hands to the holy place and bless the LORD! May the LORD bless you from Zion, he who made heaven and earth!&rdquo;",
  blockquoteRef: "&mdash; Psalm 134:2-3",
  overviewHeading: "Overview of Psalm 134",
  overviewParagraphs: [
    `Psalm 134 is the fifteenth and final Song of Ascents -- the summit of the pilgrim staircase that began in the far-off tents of Meshech and Kedar (Psalm 120) and climbed, psalm by psalm, to Jerusalem, through its gates, past its watchmen, out of its depths, into its unity, and finally here: inside the house of the LORD, at night, with nothing left to do but bless. Three verses long, it is among the shortest chapters in the Bible, and its brevity is its theology -- at the top of the ascent, everything resolves into praise.`,
    `The psalm is a liturgical exchange. Verses 1-2 call on &ldquo;all you servants of the LORD, who stand by night in the house of the LORD&rdquo; -- the Levites and priests on night duty (1 Chronicles 9:33) -- to lift their hands to the holy place and bless the LORD. Verse 3 answers in the opposite direction, in the singular: &ldquo;May the LORD bless <em>you</em> from Zion.&rdquo; Most readers hear departing pilgrims charging the resident ministers to keep the praise going, and the ministers sending the pilgrims home under God&rsquo;s benediction: worship continues in Zion, and blessing travels with the worshiper.`,
    `Two theological currents meet in the little psalm. First, the dignity of unseen worship: the night shift of the temple -- unwatched, unapplauded -- is honored with the closing word of the whole collection, teaching that the worth of praise is not indexed to its audience. Second, the two-way grammar of blessing: the creature blesses God with words (barak -- to kneel, to speak well of), and God blesses the creature with reality; the servants lift empty hands and the hands come down full.`,
    `The final verse fuses the two names of God that the Ascents have braided throughout: the God of the particular place (&ldquo;from Zion&rdquo; -- covenant, ark, sacrifice, presence) and the God of universal power (&ldquo;who made heaven and earth,&rdquo; the collection&rsquo;s refrain: 121:2; 124:8). The blessing has an address, and it has infinite resources. A merely local god could not back it; a merely cosmic force would never send it.`,
    `For the Christian, Psalm 134 opens onto the gospel&rsquo;s geography. Believers &ldquo;have come to Mount Zion&rdquo; (Hebrews 12:22) by Christ&rsquo;s descent and rising, are being built into the temple that never sleeps (1 Peter 2:5), and are &ldquo;blessed... with every spiritual blessing&rdquo; in the Son (Ephesians 1:3) -- the two-way benediction meeting forever in him who bore the curse that the blessing might rest on us (Galatians 3:13). And the psalm&rsquo;s night watch points to its own relief: a city where God&rsquo;s servants serve him day and night (Revelation 7:15) and &ldquo;night will be no more&rdquo; (22:5).`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 134 dignifies unseen faithfulness, orders the exchange of worship, ends every journey in doxology, and anchors blessing in the Maker of heaven and earth.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
