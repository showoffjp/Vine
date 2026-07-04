"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "Anonymous -- a temple liturgy composed as a mosaic of earlier Scripture" },
  { label: "Position", value: "Follows the Songs of Ascents; opens where Psalm 134 ends -- servants standing in the courts" },
  { label: "Genre", value: "Hymn of praise: election, creation, exodus, and polemic against idols" },
  { label: "Sources Woven In", value: "Exodus 3, Deuteronomy 7 and 32, Psalm 115 (the idol polemic), Psalm 136 (its twin), Jeremiah 10" },
  { label: "Structure", value: "vv. 1-4 call and election; vv. 5-7 Lord of nature; vv. 8-14 Lord of history; vv. 15-18 the idols; vv. 19-21 blessing house by house" },
  { label: "Key Verse", value: "v. 6 -- Whatever the LORD pleases, he does, in heaven and on earth, in the seas and all deeps" },
  { label: "NT Connection", value: "Election as treasured possession fulfilled in the church (1 Peter 2:9-10; Titus 2:14); idols answered by the living God (1 Thessalonians 1:9)" },
];

const THEMES = [
  {
    color: GOLD,
    title: "Praise the LORD, for the LORD Is Good: A Psalm Built from Psalms",
    body: `Psalm 135 is a mosaic. Nearly every line is quarried from elsewhere in Scripture: the opening call echoes Psalm 134 and Psalm 113; &ldquo;the LORD is good&rdquo; and the refrain-logic anticipate its twin, Psalm 136; verse 4 draws on Deuteronomy 7:6; verse 7 on Jeremiah 10:13; verses 8-12 compress Exodus and Numbers; verses 13-14 quote Exodus 3:15 and Deuteronomy 32:36; verses 15-18 lift the idol polemic of Psalm 115 almost verbatim. The psalmist is not being unoriginal; he is being liturgical -- assembling the church&rsquo;s memory into one act of praise.
<br/><br/>
This teaches something profound about worship: praise does not require novelty; it requires truth remembered. Israel&rsquo;s hymnwriter reached for the old words because they had been proven -- at the sea, in the wilderness, across the generations. There is a kind of doxology that only quotation can achieve: when the congregation hears Exodus 3 and Deuteronomy 32 and Psalm 115 gathered into one song, it is hearing its entire history testify at once.
<br/><br/>
The setting continues Psalm 134&rsquo;s: the singers are those &ldquo;who stand in the house of the LORD, in the courts of the house of our God&rdquo; (v. 2). The final Ascent called the night servants to bless; Psalm 135 writes out the anthem they sing. And the ground of it all is stated with disarming simplicity: &ldquo;Praise the LORD, for the LORD is good; sing to his name, for it is pleasant&rdquo; (v. 3) -- praise is fitting because of what God is (good) and delightful in the doing (pleasant). Duty and joy are not rivals here; the command is an invitation to pleasure.
<br/><br/>
Christians inherit both the method and the song. Our worship, too, is built from quotation -- psalms, canticles, the words of institution, &ldquo;worthy is the Lamb&rdquo; -- the memory of redemption assembled into praise. And the goodness we sing has a face: &ldquo;Oh, taste and see that the LORD is good&rdquo; (Psalm 34:8) found its full flavor when the Word became flesh.`,
  },
  {
    color: PURPLE,
    title: "Jacob His Treasured Possession: The Scandal and Comfort of Election",
    body: `Verse 4 gives the first reason for praise, and it is not creation or providence but choice: &ldquo;For the LORD has chosen Jacob for himself, Israel as his own possession.&rdquo; The word for &ldquo;possession&rdquo; is segullah -- the personal treasure of a king, distinct from the general wealth of the realm (Exodus 19:5; Deuteronomy 7:6; 1 Chronicles 29:3 uses it of David&rsquo;s private gold). Out of all the earth -- which is entirely his -- God set apart one people to be his own particular delight.
<br/><br/>
Deuteronomy is at pains to insist the choice was not merited: &ldquo;It was not because you were more in number... but it is because the LORD loves you&rdquo; (Deuteronomy 7:7-8). The election of Jacob -- the grasping younger twin, renamed only after a lifetime of wrestling -- underlines it. God&rsquo;s choosing love creates worth in its object; it does not respond to it. That is the scandal of election, and also its entire comfort: a love grounded in the lover cannot be forfeited by the fluctuations of the beloved.
<br/><br/>
Notice where the verse sits: between the call to praise and the survey of God&rsquo;s cosmic power. Election is the hinge -- the reason the omnipotence of verses 5-7 is good news rather than terror. That the LORD is &ldquo;above all gods&rdquo; and does whatever he pleases would be dreadful news if we did not know what he pleases to do; verse 4 tells us: he pleases to choose, to treasure, to keep. Sovereignty without election is a storm; sovereignty with election is a fortress.
<br/><br/>
The New Testament lifts the language of segullah directly onto the church: Christ &ldquo;gave himself for us... to purify for himself a people for his own possession&rdquo; (Titus 2:14); &ldquo;you are a chosen race... a people for his own possession&rdquo; (1 Peter 2:9). Every believer may say what Israel sang: I am praised into being by a choice I did not earn -- chosen in him before the foundation of the world (Ephesians 1:4). The right response is exactly the psalm&rsquo;s: not speculation, but doxology.`,
  },
  {
    color: TEAL,
    title: "Whatever the LORD Pleases, He Does: Sovereign over Storm and Story",
    body: `Verses 5-12 mount the psalm&rsquo;s great argument in two movements. First, nature: &ldquo;Whatever the LORD pleases, he does, in heaven and on earth, in the seas and all deeps. He it is who makes the clouds rise at the end of the earth, who makes lightnings for the rain and brings forth the wind from his storehouses&rdquo; (vv. 6-7). The four-tier map -- heaven, earth, seas, deeps -- leaves no district outside his writ; even the deeps, the ancient symbol of chaos, obey. Clouds, lightning, rain, and wind -- the very phenomena paganism parceled out to Baal and his kin -- are here the LORD&rsquo;s routine operations, drawn from his &ldquo;storehouses&rdquo; like tools from a shed.
<br/><br/>
Second, history: &ldquo;He it was who struck down the firstborn of Egypt... sent signs and wonders... struck down many nations... Sihon, king of the Amorites, and Og, king of Bashan... and gave their land as a heritage, a heritage to his people Israel&rdquo; (vv. 8-12). The God who commands the weather also commands the fates of empires. Pharaoh at the height of his power, the warrior-kings of the Transjordan, &ldquo;all the kingdoms of Canaan&rdquo; -- none could resist the pleasure of the LORD, and their overthrow became Israel&rsquo;s inheritance.
<br/><br/>
&ldquo;Whatever the LORD pleases, he does&rdquo; (v. 6) is the Old Testament&rsquo;s most compact statement of divine sovereignty (echoed in Psalm 115:3). Rightly heard, it is not fatalism but freedom -- <em>God&rsquo;s</em> freedom: he is never cornered, never negotiating from weakness, never waiting on permission. Calvin: nothing happens &ldquo;by a blind impulse of fortune,&rdquo; but by the counsel of him who does all things well. And because verse 4 stands over the section, his pleasure is not caprice: what pleases him is, finally, the good of his treasured people (Deuteronomy 32:36 will say he &ldquo;vindicates&rdquo; them, quoted at v. 14).
<br/><br/>
The believer under threat -- from chaotic circumstance (the deeps) or hostile power (the Pharaohs and Ogs of any age) -- prays this theme as Israel sang it: nothing arrayed against you sits outside the jurisdiction of the God who does whatever he pleases, and what he pleases is your final good (Romans 8:28).`,
  },
  {
    color: ROSE,
    title: "Those Who Make Them Become Like Them: The Idols and the Living Name",
    body: `Verses 15-18 turn from doxology to demolition, importing Psalm 115&rsquo;s polemic: &ldquo;The idols of the nations are silver and gold, the work of human hands. They have mouths, but do not speak; they have eyes, but do not see; they have ears, but do not hear, nor is there any breath in their mouths.&rdquo; The satire is anatomical: organ by organ, the idol is examined and found dead. Expensive (silver and gold), impressive, man-made -- and breathless.
<br/><br/>
Then comes the psalm&rsquo;s most penetrating line: &ldquo;Those who make them become like them, so do all who trust in them&rdquo; (v. 18). Worship is formative. We grow into the image of what we adore. Trust a dead thing and the deadness spreads -- eyes that no longer see wonder, ears deaf to truth, mouths with nothing living to say. G. K. Beale&rsquo;s summary of the biblical doctrine is exactly this verse: we become what we worship, either for ruin or for restoration. The same principle runs forward gloriously: beholding the glory of the Lord, believers &ldquo;are being transformed into the same image&rdquo; (2 Corinthians 3:18).
<br/><br/>
Against the breathless idols stands the living Name: &ldquo;Your name, O LORD, endures forever, your renown, O LORD, throughout all ages&rdquo; (v. 13, quoting Exodus 3:15 -- the name revealed at the burning bush). The idols are manufactured; the LORD simply <em>is</em>. They must be carried; he carries (Isaiah 46:1-4). They have no breath; he breathes life into dust and, at Pentecost, into his church.
<br/><br/>
Modern idols have better production values -- wealth, image, power, the algorithmic feed -- but the anatomy lesson holds: they cannot speak a true word to you, see your suffering, or hear your prayer, and entrusting your life to them will slowly renovate you in their likeness. The psalm&rsquo;s alternative is the Thessalonian conversion: &ldquo;you turned to God from idols to serve the living and true God&rdquo; (1 Thessalonians 1:9) -- and to become, by beholding him, more alive rather than less.`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-4",
    text: "Praise the LORD! Praise the name of the LORD, give praise, O servants of the LORD, who stand in the house of the LORD... For the LORD has chosen Jacob for himself, Israel as his own possession.",
    comment: `The psalm opens with a triple &ldquo;praise&rdquo; aimed at the same congregation Psalm 134 addressed -- the servants standing in the house and courts of God; the final Ascent called for the anthem, and Psalm 135 supplies it. Verse 3 grounds praise in God&rsquo;s character (&ldquo;the LORD is good&rdquo;) and in praise&rsquo;s own delight (&ldquo;sing to his name, for it is pleasant&rdquo; -- worship as joy, not mere duty). Verse 4 gives the covenant reason: the LORD chose Jacob as his segullah, his personal treasure (Exodus 19:5; Deuteronomy 7:6) -- electing love, unearned and therefore unlosable, as the first and deepest cause of song. Titus 2:14 and 1 Peter 2:9 carry the title to the church.`,
  },
  {
    ref: "vv. 5-7",
    text: "For I know that the LORD is great, and that our Lord is above all gods. Whatever the LORD pleases, he does, in heaven and on earth, in the seas and all deeps. He it is who makes the clouds rise... lightnings for the rain... wind from his storehouses.",
    comment: `The singer speaks personally -- &ldquo;For <em>I</em> know&rdquo; -- testimony, not theory. &ldquo;Above all gods&rdquo; does not concede the idols&rsquo; reality (vv. 15-18 will dissect them); it dethrones every rival claim. Verse 6 is the Psalter&rsquo;s most compact confession of sovereignty: whatever pleases him, he does -- across the four-tier cosmos of heaven, earth, seas, and deeps, with even chaos&rsquo;s address (the deeps) inside his jurisdiction. Verse 7 (echoing Jeremiah 10:13) reclaims the storm-god portfolio from Baal: clouds, lightning, rain, and wind are simply the LORD&rsquo;s inventory, kept in &ldquo;storehouses.&rdquo; Weather itself is covenant theology: the rain your crops need is not negotiated from a rival power but dispensed by the God who chose you.`,
  },
  {
    ref: "vv. 8-12",
    text: "He it was who struck down the firstborn of Egypt... who in your midst, O Egypt, sent signs and wonders against Pharaoh... who struck down many nations... Sihon, king of the Amorites, and Og, king of Bashan... and gave their land as a heritage to his people Israel.",
    comment: `From nature to history: the same &ldquo;He it is who&rdquo; that raised the clouds (v. 7) struck Egypt&rsquo;s firstborn -- the tenth plague standing for the whole exodus. The apostrophe &ldquo;in your midst, O Egypt&rdquo; makes the empire itself the witness of its own humbling. Sihon and Og (Numbers 21), the fearsome Transjordan kings whose defeat became Israel&rsquo;s proof-text of God&rsquo;s power (Deuteronomy 2-3; Psalm 136:19-20), and &ldquo;all the kingdoms of Canaan&rdquo; fall in a single sweep of verses: no earthly power outlasts the divine pleasure. The land becomes nachalah -- &ldquo;heritage&rdquo; -- repeated twice: conquest ends not in trophy but in inheritance, gift-language, grace-language. The believer&rsquo;s inheritance language in the New Testament (1 Peter 1:4) grows from this soil.`,
  },
  {
    ref: "vv. 13-14",
    text: "Your name, O LORD, endures forever, your renown, O LORD, throughout all ages. For the LORD will vindicate his people and have compassion on his servants.",
    comment: `Two direct quotations anchor the psalm&rsquo;s center of gravity: verse 13 takes up Exodus 3:15 -- the name revealed at the bush, &ldquo;this is my name forever&rdquo; -- and verse 14 quotes Deuteronomy 32:36 -- &ldquo;the LORD will vindicate his people and have compassion on his servants.&rdquo; The enduring Name is not an abstraction; it is a track record with a future tense: because he is who he has always been, his people can bank on vindication and compassion still to come. Kidner notes the pairing: the majesty of the Name (v. 13) bends toward the need of the servants (v. 14). This is the sovereignty of verses 5-12 turned pastoral -- omnipotence with a covenant face, guaranteeing that the last word over God&rsquo;s people is compassion.`,
  },
  {
    ref: "vv. 15-18",
    text: "The idols of the nations are silver and gold, the work of human hands. They have mouths, but do not speak; they have eyes, but do not see; they have ears, but do not hear, nor is there any breath in their mouths. Those who make them become like them, so do all who trust in them!",
    comment: `Imported from Psalm 115:4-8, the idol polemic is placed deliberately after the survey of the LORD&rsquo;s deeds: after watching him ride the storm and topple Pharaoh, the audit of the alternatives is devastating. The idols are costly (silver and gold), manufactured (&ldquo;work of human hands&rdquo;), and anatomically dead -- mouth, eyes, ears examined and found inert, with the summary indignity: &ldquo;nor is there any breath in their mouths.&rdquo; Verse 18 states worship&rsquo;s iron law: makers and trusters become like the thing trusted -- deadness is contagious. The inverse is the gospel&rsquo;s promise: beholding the living Lord transforms into his likeness (2 Corinthians 3:18). Every generation must run this audit on its own silver-and-gold -- whatever is manufactured, expensive, impressive, and unable to hear a prayer.`,
  },
  {
    ref: "vv. 19-21",
    text: "O house of Israel, bless the LORD! O house of Aaron, bless the LORD! O house of Levi, bless the LORD! You who fear the LORD, bless the LORD! Blessed be the LORD from Zion, he who dwells in Jerusalem! Praise the LORD!",
    comment: `The closing crescendo summons the congregation house by house -- all Israel, the priests (Aaron), the temple servants (Levi), and finally the widest circle, &ldquo;you who fear the LORD,&rdquo; a phrase that in later usage embraced God-fearing Gentiles: the choir expands toward the nations. The structure mirrors Psalm 115:9-11 and answers Psalm 134 exactly -- there the LORD blessed <em>from Zion</em>; here he is blessed <em>from Zion</em>, the benediction returned. &ldquo;He who dwells in Jerusalem&rdquo; seals the wonder the whole psalm has been singing: the God above all gods, who does whatever he pleases in all four tiers of the cosmos, has an address among his people. John 1:14 gives that wonder its final form -- the Word tabernacling among us -- and Revelation 21:3 its future: &ldquo;the dwelling place of God is with man.&rdquo; Hallelujah is the only fitting last word, and the psalm supplies it.`,
  },
];

const APPLICATIONS = [
  {
    color: GOLD,
    title: "Praise by Quotation",
    body: `Psalm 135 gives you a method for the days when you have no words: borrow them. The psalmist built an entire anthem from remembered Scripture -- Exodus, Deuteronomy, the Psalms -- and offered the mosaic as fresh praise. Your prayer life is allowed, even designed, to work the same way. When the heart is dull, do not wait for originality; assemble the memory of God&rsquo;s proven deeds and speak them back to him.
<br/><br/>
Practically: build your own verse-4-to-verse-14 catalogue -- a written list of what God has verifiably done in Scripture and in your own history (conversions, provisions, rescues, answered prayers), and turn it into praise by reading it aloud to him. This is not nostalgia; it is the biblical mechanics of worship: remembered truth becoming present doxology. The congregation&rsquo;s version is the same discipline writ large -- creeds, psalms, and hymns as the church&rsquo;s collective quotation of its own testimony.
<br/><br/>
<em>Prayer prompt</em>: LORD, you are good, and singing your name is pleasant. I bring you borrowed words and proven deeds: what you did at the sea, at the cross, at the empty tomb -- and what you have done in my own small history. Receive the mosaic as a new song. Amen.`,
  },
  {
    color: PURPLE,
    title: "Live as a Treasured Possession",
    body: `Before Psalm 135 says one word about power, it says a word about love: chosen, treasured, his own possession. Settle this order in your own soul, because everything else in the psalm -- sovereignty, history, even judgment -- reads differently depending on whether you know yourself treasured. The believer&rsquo;s security is not that God is powerful (demons believe that, and shudder) but that his power is covenanted to his electing love: he does whatever he pleases, and he has been pleased to make you his own (1 Peter 2:9-10).
<br/><br/>
Let segullah do its pastoral work against your specific ailment. Against insecurity: your worth was conferred by choice before it could be earned by performance (Ephesians 1:4). Against the tyranny of others&rsquo; verdicts: a king&rsquo;s private treasure does not fluctuate with the market. Against despair after failure: the choosing of <em>Jacob</em> -- the schemer, the limper -- proves the love was never contingent on the raw material.
<br/><br/>
And let it produce what election always produces in Scripture: not superiority, but worship and mission -- &ldquo;that you may proclaim the excellencies of him who called you out of darkness into his marvelous light&rdquo; (1 Peter 2:9).`,
  },
  {
    color: TEAL,
    title: "Pray to the God of the Storehouses",
    body: `&ldquo;Whatever the LORD pleases, he does&rdquo; is a pillow or a threat, depending on where you stand -- and in Christ, it is a pillow. Take an inventory of what currently feels out of control: the diagnosis, the economy, the child&rsquo;s wandering, the storm-cloud on whatever horizon you watch. Now walk it through the psalm&rsquo;s four tiers: heaven, earth, seas, deeps. There is no tier where your chaos lives that is outside his jurisdiction; the deeps themselves are on his map, and the winds are in his storehouses.
<br/><br/>
Then pray history, not just weather: the God of verses 8-12 topples Pharaohs and gives their leavings to his people as inheritance. Whatever power intimidates you -- institutional, political, personal -- has a shelf life set by the divine pleasure. This does not promise your preferred timeline; Israel sang this psalm through exiles. It promises jurisdiction: nothing touching you is off his books, and verse 14 states his settled policy toward his servants -- vindication and compassion.
<br/><br/>
<em>Prayer prompt</em>: Sovereign LORD, you do whatever you please in heaven and on earth, in the seas and all deeps. I bring you the thing I cannot command -- and I leave it inside your jurisdiction. You are above every power that frightens me, and your pleasure toward your servants is compassion. I will not negotiate with the weather; I will trust the One who owns the storehouses. Amen.`,
  },
  {
    color: ROSE,
    title: "Run the Idol Audit -- and Behold the Living God",
    body: `Verse 18 is a diagnostic tool: you become like what you trust. So audit by outcomes. Where you notice creeping deadness in yourself -- eyes that no longer see people, ears deaf to Scripture, a mouth with nothing life-giving to say, numbness where wonder used to live -- trace the deadness back to the trust. Somewhere upstream there is usually a silver-and-gold thing: money as safety, image as worth, the feed as comfort, achievement as justification. It cannot speak, see, or hear -- and it has been quietly making you in its image.
<br/><br/>
The remedy is not first renunciation but replacement -- turning &ldquo;to serve the living and true God&rdquo; (1 Thessalonians 1:9). Beholding is becoming, in both directions: so deliberately put the living God before your eyes -- his Word daily, his deeds rehearsed, his Son beheld -- and let 2 Corinthians 3:18 reverse the idol&rsquo;s work: &ldquo;beholding the glory of the Lord, [we] are being transformed into the same image, from one degree of glory to another.&rdquo;
<br/><br/>
Then finish where the psalm finishes: join the expanding choir. Israel, Aaron, Levi, all who fear the LORD -- the blessing rolls house by house until it reaches you. Add your house to the crescendo: &ldquo;Blessed be the LORD from Zion, he who dwells in Jerusalem&rdquo; -- and who, in Christ, has made his dwelling with you. Praise the LORD.`,
  },
];

const data: PsalmGuideData = {
  accent: GOLD,
  heroGradientEnd: "#171007",
  badge: "Psalm 135",
  metaLine: "Hymn of Praise &bull; 21 Verses &bull; The Mosaic Psalm",
  title: "Whatever the LORD Pleases, He Does",
  heroIntro: "A hymn built almost entirely from earlier Scripture -- Exodus, Deuteronomy, and the Psalms assembled into one anthem. The LORD who chose Jacob as his treasure rides the storm, topples Pharaoh, outlives every breathless idol, and dwells in the midst of his people -- and the praise rolls house by house until every God-fearer joins it.",
  blockquote: "&ldquo;For I know that the LORD is great, and that our Lord is above all gods. Whatever the LORD pleases, he does, in heaven and on earth, in the seas and all deeps.&rdquo;",
  blockquoteRef: "&mdash; Psalm 135:5-6",
  overviewHeading: "Overview of Psalm 135",
  overviewParagraphs: [
    `Psalm 135 is the Psalter&rsquo;s great mosaic -- a hymn assembled almost entirely from earlier Scripture. Its opening echoes Psalms 134 and 113; its election language draws on Exodus 19 and Deuteronomy 7; its storm verses quote Jeremiah 10:13; its history compresses Exodus and Numbers; its center cites Exodus 3:15 and Deuteronomy 32:36 verbatim; and its idol polemic lifts Psalm 115:4-8 nearly whole. The psalmist praises by quotation, gathering the congregation&rsquo;s entire remembered history into a single act of worship -- and in doing so teaches that praise requires not novelty but truth remembered.`,
    `The setting continues seamlessly from Psalm 134: the singers are the servants &ldquo;who stand in the house of the LORD, in the courts of the house of our God&rdquo; (v. 2). The final Song of Ascents called the temple&rsquo;s night servants to bless the LORD; Psalm 135 writes out their anthem. Its first reason for praise is disarmingly simple -- &ldquo;the LORD is good; sing to his name, for it is pleasant&rdquo; (v. 3) -- and its second is the covenant&rsquo;s deepest layer: &ldquo;the LORD has chosen Jacob for himself, Israel as his own possession&rdquo; (v. 4, segullah -- a king&rsquo;s personal treasure).`,
    `The body of the psalm surveys the LORD&rsquo;s sovereignty in two arenas. Over nature: &ldquo;Whatever the LORD pleases, he does, in heaven and on earth, in the seas and all deeps&rdquo; (v. 6) -- clouds, lightning, rain, and wind drawn from his storehouses, the storm-god portfolio reclaimed from Baal. Over history: Egypt&rsquo;s firstborn struck, Pharaoh humbled in his own land, Sihon and Og and all the kingdoms of Canaan given as a heritage to Israel (vv. 8-12). The hinge verses quote the Name of Exodus 3 and the promise of Deuteronomy 32: the Name endures forever, and its settled policy toward God&rsquo;s servants is vindication and compassion (vv. 13-14).`,
    `Then the audit of the alternatives (vv. 15-18): idols of silver and gold, the work of human hands -- mouths that do not speak, eyes that do not see, ears that do not hear, no breath in their mouths -- ending with worship&rsquo;s iron law: &ldquo;Those who make them become like them, so do all who trust in them.&rdquo; We become what we behold, for deadness or for life (2 Corinthians 3:18). The closing crescendo (vv. 19-21) summons the congregation house by house -- Israel, Aaron, Levi, and finally &ldquo;you who fear the LORD,&rdquo; the circle widening toward the nations -- to bless the LORD &ldquo;from Zion, he who dwells in Jerusalem.&rdquo;`,
    `For the Christian, every strand of the mosaic runs forward to Christ. The treasured-possession title now rests on the church he purchased (Titus 2:14; 1 Peter 2:9-10); the God who does whatever he pleases pleased to bruise his own Son for our redemption (Isaiah 53:10) and to raise him; the living Name outlasting every idol was &ldquo;the name that is above every name&rdquo; bestowed at the resurrection (Philippians 2:9); and &ldquo;he who dwells in Jerusalem&rdquo; became &ldquo;the Word... [who] dwelt among us&rdquo; (John 1:14), heading for the city where &ldquo;the dwelling place of God is with man&rdquo; (Revelation 21:3). The psalm&rsquo;s last word -- Hallelujah -- is the church&rsquo;s first and final one.`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 135 teaches praise by quotation, identity as God's treasure, prayer under total sovereignty, and the audit of every idol.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
