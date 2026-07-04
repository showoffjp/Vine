"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "David (superscription: Of David)" },
  { label: "Genre", value: "Royal psalm -- warrior's blessing moving to a vision of national flourishing" },
  { label: "Relationship", value: "Reworks Psalm 18 (David's great deliverance song) with echoes of Psalms 8, 33, and 104" },
  { label: "Structure", value: "vv. 1-2 the Rock who trains; vv. 3-4 what is man?; vv. 5-8 bow the heavens; vv. 9-11 the new song; vv. 12-15 the flourishing commonwealth" },
  { label: "Key Verse", value: "v. 15 -- Blessed are the people whose God is the LORD!" },
  { label: "Key Image", value: "Sons like full-grown plants, daughters like corner pillars cut for a palace" },
  { label: "NT Connection", value: "The bowed heavens fulfilled in the Incarnation (John 1:14); the true David who wins the battle and then builds the peace (Ephesians 2:14-22)" },
];

const THEMES = [
  {
    color: GREEN,
    title: "Blessed Be the LORD, My Rock, Who Trains My Hands for War",
    body: `The psalm opens with a soldier&rsquo;s doxology: &ldquo;Blessed be the LORD, my rock, who trains my hands for war, and my fingers for battle&rdquo; (v. 1). David does not thank God only for victories delivered ready-made; he thanks God for <em>training</em> -- the long, unglamorous formation of hands and fingers, skill and nerve, that happened before any battle was won. The LORD is not merely David&rsquo;s deliverer at the crisis point; he is his drill instructor across the years.
<br/><br/>
Verse 2 then stacks up the titles like a wall of shields: &ldquo;my steadfast love and my fortress, my stronghold and my deliverer, my shield and he in whom I take refuge.&rdquo; The first title is the most striking: David calls God &ldquo;my steadfast love&rdquo; (hasdi) -- not merely the one who <em>shows</em> hesed, but the one who <em>is</em> it to him. Everything defensive in the list (fortress, stronghold, shield, refuge) wraps around that one word of relationship. Strength, for David, is not a possession but a Person.
<br/><br/>
This theme dignifies every believer&rsquo;s long training seasons. The wilderness years with the flock -- where David learned the sling against lion and bear (1 Samuel 17:34-37) -- were God training hands for a battle David could not yet see. Nothing in the hidden years is wasted. James 1:2-4 and Romans 5:3-5 give the New Testament version: testing produces steadfastness, and steadfastness completes the soldier.
<br/><br/>
Spurgeon relished the paradox of the opening: &ldquo;Blessed be the LORD&rdquo; -- a benediction from a man of war, who had learned that his skill was borrowed, his safety personal, and his fights the LORD&rsquo;s. The Christian&rsquo;s warfare has changed weapons -- &ldquo;we do not wrestle against flesh and blood&rdquo; (Ephesians 6:12) -- but not its trainer. The same God still trains hands, now for prayer, perseverance, witness, and the wielding of the sword of the Spirit.`,
  },
  {
    color: PURPLE,
    title: "What Is Man, That You Regard Him? Frailty Held in Divine Attention",
    body: `Immediately after the fortress-wall of divine titles, the psalm swerves into wonder: &ldquo;O LORD, what is man that you regard him, or the son of man that you think of him? Man is like a breath; his days are like a passing shadow&rdquo; (vv. 3-4). The juxtaposition is deliberate. The king who just called God his rock remembers what he himself is made of: hevel -- a breath, a wisp of vapor -- and a shadow already lengthening toward evening.
<br/><br/>
David is quoting himself and his tradition. Psalm 8 asked the same question looking up at the stars; Job asked it from the ash heap (Job 7:17); Psalm 39 and Ecclesiastes supply the vocabulary of breath and vapor. But here the question has a military edge: why would the eternal God bother to train, shield, and rescue something as transient as a man? The answer is nowhere in man and everywhere in God: he &ldquo;regards&rdquo; (yada -- knows, attends to) and &ldquo;thinks of&rdquo; (chashav -- reckons, plans for) the creature of breath. Human significance is not intrinsic mass; it is conferred attention. We matter because God minds us.
<br/><br/>
This is the Bible&rsquo;s double cure. Against pride: you are a breath, your days a passing shadow, your empires sandcastles -- &ldquo;let the one who boasts, boast in the Lord&rdquo; (1 Corinthians 1:31). Against despair: the everlasting God has set his regard on you personally -- numbering hairs (Matthew 10:30), collecting tears (Psalm 56:8), preparing a kingdom (Luke 12:32). Kidner puts it finely: the marvel is not that man is small but that God stoops so low with so much care.
<br/><br/>
Hebrews 2 gives the question its final answer by quoting its twin in Psalm 8: &ldquo;What is man?&rdquo; -- and answering, <em>Jesus</em>. The Son of Man took the breath-like nature, tasted the passing shadow of death, and was crowned with glory and honor, bringing many sons to glory. The question of verses 3-4 is no longer rhetorical; it has a name.`,
  },
  {
    color: TEAL,
    title: "Bow Your Heavens and Come Down: The Prayer God Answered at Bethlehem",
    body: `Verses 5-8 are a prayer for theophany: &ldquo;Bow your heavens, O LORD, and come down! Touch the mountains so that they smoke! Flash forth the lightning and scatter them; send out your arrows and rout them! Stretch out your hand from on high; rescue me and deliver me from the many waters, from the hand of foreigners.&rdquo; David is deliberately reusing the theophany of Psalm 18:9 (&ldquo;He bowed the heavens and came down&rdquo;), but with the tense changed: what Psalm 18 celebrated as past, Psalm 144 requests for the present. Do it again, LORD. Come down again.
<br/><br/>
The imagery is Sinai&rsquo;s -- smoking mountains, lightning, the voice from above -- and the Exodus&rsquo;s -- the hand stretched out, the rescue from many waters. David asks that the God of the nation&rsquo;s founding wonders act with the same directness in his own generation&rsquo;s crisis. It is the boldest form of biblical prayer: taking God&rsquo;s own past actions as the measure of present petition. &ldquo;As you have done, do.&rdquo;
<br/><br/>
The Christian confession is that this prayer received an answer beyond anything David imagined. God did bow the heavens and come down -- not in smoke and lightning but in flesh: &ldquo;the Word became flesh and dwelt among us&rdquo; (John 1:14). The Incarnation is the ultimate theophany, the definitive stretching out of the hand from on high; and at the cross and resurrection, the rescue &ldquo;from the many waters&rdquo; of death itself was accomplished. The old Advent prayer of the church -- &ldquo;Oh that you would rend the heavens and come down&rdquo; (Isaiah 64:1) -- stands answered in Bethlehem and awaiting its final answer at the return of Christ, when he comes down once more, &ldquo;in the same way as you saw him go&rdquo; (Acts 1:11).
<br/><br/>
Meanwhile the church prays verses 5-8 in its own key: for God to come down in power upon its preaching, its mission fields, its persecuted brothers and sisters, its own cold hearts -- revival being nothing other than Psalm 144:5 answered in the Spirit.`,
  },
  {
    color: GOLD,
    title: "From Battlefield to Hearth: Sons Like Plants, Daughters Like Pillars, and the Blessed People",
    body: `The psalm&rsquo;s final movement (vv. 12-15) is one of the loveliest surprises in the Psalter: the war song resolves into a domestic idyll. &ldquo;May our sons in their youth be like plants full grown, our daughters like corner pillars cut for the structure of a palace; may our granaries be full... may our cattle be heavy with young... may there be no cry of distress in our streets!&rdquo; The soldier&rsquo;s prayer was never about war for its own sake. The fighting was always <em>for</em> something: children flourishing, barns full, streets without the sound of weeping.
<br/><br/>
The two family images repay attention. Sons &ldquo;like plants full grown&rdquo; -- vigorous, rooted, thriving in their youth rather than stunted by war and want. Daughters &ldquo;like corner pillars cut for the structure of a palace&rdquo; -- the image is not decorative but architectural: beautifully crafted <em>and load-bearing</em>, the carved corner columns on which a great house stands. Daughters here are honored as strength and splendor together -- those who hold the household of the nation up.
<br/><br/>
Then the psalm ends with a beatitude that gathers everything: &ldquo;Blessed are the people to whom such blessings fall! Blessed are the people whose God is the LORD!&rdquo; (v. 15). The second line deliberately outbids the first. Full barns and safe streets are real blessings -- the psalm is unembarrassed by material flourishing -- but they are penultimate. The final ground of happiness is not the gifts but the Giver: <em>whose God is the LORD</em>. A people could have verse 13&rsquo;s granaries and miss verse 15&rsquo;s God; and a people could lose the granaries and keep the blessedness, because its root is relationship, not inventory (Habakkuk 3:17-18).
<br/><br/>
Here the psalm&rsquo;s two halves join hands in Christ. The true Son of David fought the decisive battle -- &ldquo;disarming the powers&rdquo; at the cross (Colossians 2:15) -- precisely to build the peace: a household of God with no cry of distress, sons and daughters flourishing, the city where &ldquo;death shall be no more, neither shall there be mourning, nor crying&rdquo; (Revelation 21:4). Warfare then shalom -- that is the shape of Psalm 144, and the shape of the gospel.`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-2",
    text: "Blessed be the LORD, my rock, who trains my hands for war, and my fingers for battle; he is my steadfast love and my fortress, my stronghold and my deliverer, my shield and he in whom I take refuge, who subdues peoples under me.",
    comment: `The opening reworks Psalm 18:2, 34, and 46-47 into fresh doxology -- David praying his own older psalm back to God. &ldquo;Trains&rdquo; (melammed, the word for teaching) makes God the instructor of the long formation behind every victory: the shepherd years, the sling, the nerve. The title-stack of verse 2 begins with the boldest: &ldquo;my hesed&rdquo; -- my steadfast love -- God not merely showing covenant love but being it to David. Seven descriptors follow (rock, steadfast love, fortress, stronghold, deliverer, shield, refuge), a completeness of protection. Calvin notes that David &ldquo;heaps together many titles&rdquo; because faith under threat needs many handholds; no single metaphor can carry the whole weight of what God is to his own.`,
  },
  {
    ref: "vv. 3-4",
    text: "O LORD, what is man that you regard him, or the son of man that you think of him? Man is like a breath; his days are like a passing shadow.",
    comment: `Between the fortress and the battlefield, the psalm pauses for anthropology. The question echoes Psalm 8:4, but where Psalm 8 marveled from below the stars, Psalm 144 marvels from inside a war: why would the eternal God arm and guard a vapor? &ldquo;Breath&rdquo; is hevel -- Ecclesiastes&rsquo; word for vapor/vanity -- and the &ldquo;passing shadow&rdquo; is evening&rsquo;s lengthening dark. The astonishment is that God &ldquo;regards&rdquo; (attends to) and &ldquo;thinks of&rdquo; (makes plans concerning) such a creature. Human dignity here is entirely conferred -- constituted by divine attention, not human substance. Hebrews 2:5-9 answers the question christologically: the Son of Man took the vapor-nature, tasted death, and was crowned, securing glory for the breath-like race he came to save.`,
  },
  {
    ref: "vv. 5-8",
    text: "Bow your heavens, O LORD, and come down! Touch the mountains so that they smoke!... Stretch out your hand from on high; rescue me and deliver me from the many waters, from the hand of foreigners, whose mouths speak lies and whose right hand is a right hand of falsehood.",
    comment: `David converts the remembered theophany of Psalm 18:9-14 into present petition: what God did, God is asked to do again. The images are Sinai (smoking mountain, lightning-arrows) and Exodus (the outstretched hand, rescue from many waters -- the chaos-flood language of drowning danger). The enemy is characterized twice over (vv. 8, 11) by falsehood: lying mouths and a &ldquo;right hand of falsehood&rdquo; -- treaties sworn and broken, oaths raised and betrayed. The church prays this verse across salvation history: answered at Bethlehem when the Word became flesh (John 1:14), answered at Pentecost in fire, awaited at the Parousia -- and prayed in every generation as the cry for revival: come down again, LORD.`,
  },
  {
    ref: "vv. 9-11",
    text: "I will sing a new song to you, O God; upon a ten-stringed harp I will play to you, who gives victory to kings, who rescues David his servant from the cruel sword. Rescue me and deliver me from the hand of foreigners...",
    comment: `The vow of the &ldquo;new song&rdquo; (compare Psalms 33:3; 40:3; 96:1; 98:1) promises fresh praise for fresh deliverance -- grace never lets worship become mere reperformance. The ground of confidence is God&rsquo;s track record with his anointed: he &ldquo;gives victory to kings&rdquo; and &ldquo;rescues David his servant.&rdquo; Verse 11 then repeats verse 8&rsquo;s petition almost verbatim -- a refrain of dependence: the prayer must be prayed again because the danger persists. In the Psalter&rsquo;s final shape, &ldquo;David his servant&rdquo; carries messianic freight: the new song reaches its true key in Revelation 5:9, where the Lamb who conquered receives &ldquo;a new song&rdquo; from every tribe and tongue -- the victory of the greater David becoming the anthem of the world.`,
  },
  {
    ref: "vv. 12-15",
    text: "May our sons in their youth be like plants full grown, our daughters like corner pillars cut for the structure of a palace; may our granaries be full... may there be no cry of distress in our streets! Blessed are the people to whom such blessings fall! Blessed are the people whose God is the LORD!",
    comment: `The war psalm resolves into shalom: flourishing children, full granaries, multiplying flocks, unbreached walls, streets without the sound of weeping. Sons are pictured as vigorous, well-rooted plants; daughters as carved corner pillars -- beauty that bears load, the strength on which the whole house stands. The closing double beatitude is the psalm&rsquo;s theology in miniature: material blessing is real and prayed for without embarrassment, yet deliberately trumped by the final line -- &ldquo;blessed are the people <em>whose God is the LORD</em>.&rdquo; Matthew Henry: all other blessings flow from this one, and where this one remains, the loss of the others cannot make a people miserable. Revelation 21:3-4 is this ending consummated: God himself with his people, and no cry of distress in the city&rsquo;s streets forever.`,
  },
];

const APPLICATIONS = [
  {
    color: GREEN,
    title: "Bless the Trainer, Not Just the Victory",
    body: `David&rsquo;s first word is not thanks for a won battle but blessing on the God who trained his hands before any battle existed. Learn to read your own hidden seasons that way. The tedious faithfulness no one sees -- the discipline of prayer when nothing feels urgent, the integrity kept in small things, the skills built in obscurity -- is the LORD training hands for engagements you cannot yet see. David&rsquo;s sling was mastered on lonely hillsides years before Goliath supplied the occasion.
<br/><br/>
So stop despising the drill season. Ask, of the present ordinary stretch: what is God training here? Endurance? Craft? Nerve? Gentleness under provocation? Then cooperate with the training instead of resenting it (Hebrews 12:11 -- discipline &ldquo;yields the peaceful fruit of righteousness to those who have been trained by it&rdquo;).
<br/><br/>
<em>Prayer prompt</em>: Blessed be you, LORD, my rock -- my trainer. Thank you for every unglamorous season in which you were forming my hands and my heart for battles I could not foresee. You are my steadfast love and my fortress: keep training me, and let me never mistake the drill field for abandonment. Amen.`,
  },
  {
    color: PURPLE,
    title: "Live as a Regarded Breath",
    body: `&ldquo;Man is like a breath&rdquo; -- and God regards him. Carry both truths together, because each without the other deforms you. Frailty without regard breeds despair or hedonism (&ldquo;we are vapor, so nothing matters&rdquo;). Regard without frailty breeds the exhausting self-importance of those who must matter by their own mass. The psalm&rsquo;s combination produces something rarer: a person who takes God seriously, themselves lightly, and their days preciously.
<br/><br/>
Practically: let the breath-truth simplify you -- number your days (Psalm 90:12), drop grudges that outlast their vapor-brief occasions, refuse to build your identity on achievements that a passing shadow will outrun. And let the regard-truth steady you -- you are known, attended to, planned for, by the only Mind whose attention confers worth. The crumbling of anyone else&rsquo;s regard (an employer&rsquo;s, a platform&rsquo;s, a critic&rsquo;s) takes nothing from you that verse 3 gave.
<br/><br/>
And when you need the proof of the regard, look where Hebrews 2 points: the Son of Man wearing your breath-like nature, crowned -- for you.`,
  },
  {
    color: TEAL,
    title: "Pray the Bowed Heavens",
    body: `Psalm 144:5 authorizes the boldest kind of prayer: asking God to repeat his own greatest acts. David took the theophany of Psalm 18 and turned it into petition -- &ldquo;as you have done, do again.&rdquo; The church has always prayed this way: Isaiah&rsquo;s &ldquo;Oh that you would rend the heavens and come down&rdquo; became the Advent cry that Bethlehem answered; every true revival has begun with someone praying the record of God&rsquo;s past power back to him.
<br/><br/>
Make it your method. Pray the Exodus over your bondages, Psalm 18 over your dangers, Acts 2 over your church, the empty tomb over your despair. God&rsquo;s past is his self-disclosure; petition that quotes it is faith at full stretch. Then wait like the church waits: between the first coming-down (the Incarnation) and the last (Acts 1:11), every &ldquo;come down, LORD&rdquo; is being answered in the Spirit -- in power on preaching, boldness in witness, and life in dead hearts.
<br/><br/>
<em>Prayer prompt</em>: LORD, you bowed the heavens and came down -- to Sinai in fire, to Bethlehem in flesh, to your church in the Spirit. Do again what you have done. Come down on my family, my church, my city: touch the mountains of our indifference until they smoke, and stretch out your hand from on high. Even so, come, Lord Jesus. Amen.`,
  },
  {
    color: GOLD,
    title: "Fight for the Hearth, and Anchor the Blessing",
    body: `The psalm&rsquo;s ending tells you what all faithful fighting is for: sons like plants, daughters like pillars, full barns, streets with no cry of distress. Every legitimate battle a believer wages -- against sin, for a marriage, for children&rsquo;s souls, for a church&rsquo;s health, for justice in a community -- aims at shalom, not at conflict itself. If your battles have become identity rather than instrument, verses 12-14 recalibrate: the warrior&rsquo;s prayer is a gardener&rsquo;s and a builder&rsquo;s prayer at heart.
<br/><br/>
So invest deliberately in the hearth the fighting protects: bless your children with the psalm&rsquo;s images (vigorous plants, load-bearing pillars -- speak that dignity over sons and daughters alike); labor for streets -- literal ones -- with less crying in them; treat household peace as a war-aim worth your best strength.
<br/><br/>
And then anchor everything in the final beatitude, because barns can fail. Habakkuk prayed the inverse of verse 13 -- empty stalls, failed vines -- &ldquo;yet I will rejoice in the LORD&rdquo; (Habakkuk 3:17-18). The unlosable blessing is the last line: &ldquo;Blessed are the people whose God is the LORD.&rdquo; If he is yours in Christ, the deepest verse of this psalm is already true of you, in full granaries or empty ones -- and the city with no cry of distress in its streets is not a wish but a promise on its way (Revelation 21:4).`,
  },
];

const data: PsalmGuideData = {
  accent: GREEN,
  heroGradientEnd: "#071507",
  badge: "Psalm 144",
  metaLine: "Royal Psalm of David &bull; 15 Verses",
  title: "Blessed Be the LORD, My Rock",
  heroIntro: "The warrior&rsquo;s blessing that ends at the family table: God the trainer of hands, man the regarded breath, the prayer for bowed heavens that Bethlehem answered, and the flourishing commonwealth -- sons like plants, daughters like corner pillars, and the beatitude beneath it all: blessed are the people whose God is the LORD.",
  blockquote: "&ldquo;Blessed are the people to whom such blessings fall! Blessed are the people whose God is the LORD!&rdquo;",
  blockquoteRef: "&mdash; Psalm 144:15",
  overviewHeading: "Overview of Psalm 144",
  overviewParagraphs: [
    `Psalm 144 is David praying his own earlier psalm back to God. Its opening verses rework Psalm 18 -- the great deliverance song -- turning celebrated past tenses into present petition: the God who &ldquo;bowed the heavens and came down&rdquo; (18:9) is asked to &ldquo;bow your heavens and come down&rdquo; again (144:5). Woven through are echoes of Psalm 8 (&ldquo;what is man?&rdquo;), Psalm 33 (the new song), and Psalm 104 (creation&rsquo;s imagery). It is a masterclass in praying Scripture: the believer&rsquo;s own history with God, and the church&rsquo;s inherited words, become the raw material of fresh prayer.`,
    `The psalm opens on the battlefield: &ldquo;Blessed be the LORD, my rock, who trains my hands for war&rdquo; (v. 1). God is praised not only as deliverer but as trainer -- the instructor of the long formation behind every victory -- and then named in a sevenfold stack of titles, beginning with the boldest: &ldquo;my steadfast love&rdquo; (hasdi), God himself as David&rsquo;s hesed. Strength in this psalm is never a possession; it is a Person.`,
    `Then a swerve into wonder: &ldquo;What is man that you regard him?... Man is like a breath; his days are like a passing shadow&rdquo; (vv. 3-4). Between the fortress and the fight, David remembers what he is made of -- vapor -- and marvels that the eternal God attends to and plans for such a creature. Human significance here is conferred by divine regard, not achieved by human mass: the double cure for both pride and despair, answered finally in Hebrews 2, where the question &ldquo;what is man?&rdquo; receives the answer <em>Jesus</em> -- the Son of Man who took the breath-like nature and was crowned with glory.`,
    `The central petitions ask for theophany (&ldquo;bow your heavens... touch the mountains... stretch out your hand from on high,&rdquo; vv. 5-8) against enemies characterized by falsehood, and vow a new song for new deliverance (vv. 9-11). The church confesses that the prayer of verse 5 was answered beyond imagining at Bethlehem -- &ldquo;the Word became flesh&rdquo; (John 1:14) -- is answered continually in the Spirit&rsquo;s power, and will be answered finally when Christ comes down &ldquo;in the same way&rdquo; he ascended (Acts 1:11).`,
    `The ending is the Psalter&rsquo;s loveliest resolution of war into peace (vv. 12-15): sons like full-grown plants, daughters like corner pillars cut for a palace -- beauty that bears load -- granaries full, flocks multiplying, and &ldquo;no cry of distress in our streets.&rdquo; The fighting was always <em>for</em> the flourishing. And the last line anchors the whole: &ldquo;Blessed are the people whose God is the LORD!&rdquo; -- the unlosable blessing beneath every losable one, consummated in the city where God dwells with his people and no cry is heard in the streets at all (Revelation 21:3-4).`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 144 shapes gratitude for training, identity as a regarded breath, revival-praying, and the fight for shalom.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
