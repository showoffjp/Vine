"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: { videoId: string; title: string }[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "Anonymous (possibly David or a returning exile)" },
  { label: "Position", value: "First of the 15 Songs of Ascents (Psalms 120-134)" },
  { label: "Collection", value: "Pilgrim songs sung on the way to Jerusalem" },
  { label: "Genre", value: "Individual lament with elements of complaint and trust" },
  { label: "Key Theme", value: "Distress among the deceitful; longing for peace" },
  { label: "Key Verse", value: "v. 1 -- In my distress I called to the LORD, and he answered me" },
  { label: "NT Connection", value: "James 3:5-10 on the destructive tongue; Matthew 5:9 peacemakers" },
];

const THEMES = [
  {
    color: TEAL,
    title: "The Songs of Ascents: A Pilgrim Collection",
    body: `Psalm 120 opens one of the most beloved collections in the Psalter: the fifteen Songs of Ascents (Psalms 120-134), each bearing the Hebrew superscription shir hama'alot -- literally "a song of the goings up." Ancient Jewish and Christian interpreters have offered two main explanations for this title. The first understands it liturgically: these were the songs sung by Levitical choirs standing on the fifteen steps leading from the Women's Court to the Inner Court of the Temple in Jerusalem. The Mishnah (Sukkah 5:4) records that the Levites stood on these steps and sang these fifteen psalms during the Festival of Tabernacles. The second explanation, favored by most modern scholars, is geographical: these were the pilgrimage psalms sung by Israelites as they "went up" (alah) to Jerusalem for the three great annual festivals -- Passover, Pentecost, and Tabernacles (Deuteronomy 16:16).
<br/><br/>
The collection functions as a miniature psalter within the Psalter, tracing a spiritual journey from exile and distress (Psalm 120) through pilgrimage and praise to arrival at Zion and blessing (Psalms 132-134). Derek Kidner notes that these fifteen psalms "can be read as the spiritual diary of a pilgrimage," moving from the loneliness of one who lives far from Jerusalem to the joy of those who stand within her gates. Calvin observed that the repetition of the Songs of Ascents theme across all fifteen psalms reflects how "believers, in the midst of their wandering through this world, must ever have their eyes directed toward the celestial Jerusalem."
<br/><br/>
The collection covers an extraordinary range: individual laments (120, 123, 130), communal thanksgiving (124, 129), wisdom teaching (127, 128, 131, 133), royal prayer (132), and pure doxology (134). Yet they share a common orientation -- Zion, the house of the LORD, the place where God has chosen to dwell. For Christian readers, these psalms find their deepest fulfillment in the one who said "I am the way" (John 14:6) and who himself made the final journey up to Jerusalem (Luke 9:51), and who is now the true Temple in whom the fullness of God dwells bodily (Colossians 2:9).`,
  },
  {
    color: PURPLE,
    title: "Distress and the God Who Answers: The Theology of Lament",
    body: `The opening verse of Psalm 120 states a completed action: "In my distress I called to the LORD, and he answered me." This is not a prayer for future help but a testimony of past rescue embedded within a present complaint -- the speaker has been rescued before and now faces the same enemies again. This structure is characteristic of the individual lament: the psalmist recalls God's past faithfulness as the basis for present petition.
<br/><br/>
The Hebrew word for "distress" (tsarah) is a rich term encompassing physical danger, emotional anguish, relational betrayal, and social marginalization. It appears throughout the Psalter (22:11, 46:1, 107:6, 138:7) and points to the kind of pressure that threatens to crush a person from without and collapse a person from within. Calvin wrote that this word "implies such extreme pressure as to allow of no breathing time." Yet the psalmist does not begin with his distress -- he begins with his action in distress: he called to the LORD. The lament tradition is never passive resignation; it is active, verbal, direct engagement with God.
<br/><br/>
The assertion "he answered me" (wayya'aneni) is grammatically past tense but functions as a statement of principle about God's character: he is a God who answers. Spurgeon called this "the greatest fact in biography" -- that when the soul in distress cries to God, God does not turn away. This testimony becomes the ground for the petition that follows. The structure teaches us that prayer in present distress is nourished by memory of past answers. Matthew Henry observed: "It is a comfort to us, when we are in distress, to reflect upon former experiences of God's goodness to us. When I was in trouble I prayed to God, and he delivered me; I will therefore pray to him in my present trouble."
<br/><br/>
The theology here is profoundly Christological for New Testament readers. Jesus himself is described as one who "in the days of his flesh...offered up prayers and supplications, with loud crying and tears, to him who was able to save him from death, and he was heard" (Hebrews 5:7). The pattern of distress-cry-answer reaches its apex in the cross and resurrection, where the ultimate lament (Psalm 22, quoted from the cross) is followed by the ultimate answer (the empty tomb). Every believer who prays in distress participates in this pattern.`,
  },
  {
    color: GOLD,
    title: "The Lying Tongue: A Theology of Speech and Deception",
    body: `The central problem of Psalm 120 is not physical danger but verbal assault. The psalmist is surrounded by people characterized by "lying lips" (siphte shaqer) and a "deceitful tongue" (lashon remiyah). The petition in verse 2 -- "Deliver me, O LORD, from lying lips, from a deceitful tongue" -- identifies false speech as the enemy that requires divine rescue.
<br/><br/>
The Hebrew word shaqer (falsehood, deception) and remiyah (treachery, deceit) together paint a picture of speech that is not merely inaccurate but actively malicious. The "lying lips" belong to people who make false accusations, spread slander, and use words as weapons. Tremper Longman III notes that in the ancient Near East, false testimony in a legal context was among the gravest social crimes, for it could destroy a man's life, family, and reputation while appearing entirely legitimate. The psalmist is not simply dealing with gossip; he is dealing with systematic, targeted verbal destruction.
<br/><br/>
The answer posed rhetorically in verses 3-4 -- "What shall be given to you, and what more shall be done to you, you deceitful tongue?" -- is answered immediately: "A warrior's sharp arrows, with glowing coals of the broom tree!" The lex talionis principle operates here: the deceitful tongue that shoots words like arrows (Psalm 64:3) shall itself be subjected to sharp arrows and burning coals. The broom tree (rothem) produces especially long-burning coals -- a proverbial image of punishment that is both certain and severe.
<br/><br/>
James 3:5-10 treats the tongue with similar gravity: "The tongue is a small member, yet it boasts of great things. How great a forest is set ablaze by such a small fire!...it is a restless evil, full of deadly poison." The New Testament echoes Psalm 120's seriousness about speech as a moral and spiritual issue of the highest order. Jesus declared that "on the day of judgment people will give account for every careless word they speak" (Matthew 12:36). The psalmist's prayer for rescue from lying lips is ultimately answered in the one who is the Truth himself (John 14:6), who exposes all falsehood and in whom there is no deceit (1 Peter 2:22).`,
  },
  {
    color: ROSE,
    title: "Meshech and Kedar: The Exile of the Peacemaker",
    body: `Verses 5-7 contain one of the most poignant expressions of spiritual alienation in all the Psalter: "Woe to me, that I sojourn in Meshech, that I dwell among the tents of Kedar! Too long have I had my dwelling among those who hate peace. I am for peace, but when I speak, they are for war!"
<br/><br/>
Meshech and Kedar are geographically distant from each other -- Meshech refers to a people in the far north (Genesis 10:2; Ezekiel 38:2), associated with what is now Turkey or the Caucasus region, while Kedar is an Arabian tribe of the eastern desert (Genesis 25:13; Isaiah 21:16-17). That the psalmist claims to sojourn in both simultaneously makes geographical literalism impossible: he is using these names as symbolic types of "the far ends of the earth, among barbarous and warlike peoples" (Calvin). The point is not a specific location but a condition of radical spiritual exile -- living among people who are as foreign to covenant peace as the most distant, uncivilized nations the Israelite mind could imagine.
<br/><br/>
The climactic verse -- "I am for peace, but when I speak, they are for war" -- is among the most striking in the Psalter for its sheer loneliness. The psalmist offers peace and receives war. He speaks reconciliation and meets hostility. This is not defeat; it is the experience of the righteous remnant in every age who find themselves surrounded by a culture organized around conflict, deception, and domination. Derek Kidner calls this "the plight of the man of God in the ungodly world -- his peace offerings are treated as provocations."
<br/><br/>
Jesus pronounced a blessing on precisely this condition: "Blessed are the peacemakers, for they shall be called sons of God" (Matthew 5:9). He himself came offering peace -- "peace I leave with you, my peace I give to you" (John 14:27) -- and was met with war. The cross is the ultimate instance of the peacemaker despised by those who love conflict. For believers, Psalm 120 validates the experience of costly peacemaking in a world that refuses peace, and points to the coming city where "of the increase of his government and of peace there will be no end" (Isaiah 9:7).`,
  },
  {
    color: GREEN,
    title: "From Meshech to Zion: The Pilgrim's Hope",
    body: `Read in the context of the Songs of Ascents collection, Psalm 120 is not an isolated cry of despair but the beginning of a journey. The psalmist in distress among Meshech and Kedar becomes the pilgrim walking toward Jerusalem. The collection moves from this lament to the confident declaration of Psalm 121 ("My help comes from the LORD, who made heaven and earth"), to the joy of arrival in Psalm 122 ("I was glad when they said to me, 'Let us go to the house of the LORD!'"). The Songs of Ascents thus encode a spiritual logic: distress is not the final word; Zion is.
<br/><br/>
This structural hope gives Psalm 120 its peculiar tension and power. The psalmist is not resigned to his exile; he is moving. The very act of singing this psalm on the pilgrimage road meant that the singer had already taken the first step toward Zion. Every step toward Jerusalem was a step away from Meshech. The journey itself was the answer to the lament, not in the sense that difficulties vanished but in the sense that direction was established: the face was set toward the house of the LORD.
<br/><br/>
Tremper Longman III writes that "the Songs of Ascents as a collection offer a theology of pilgrimage: the people of God are always on their way, always oriented toward the presence of God, always moving from the far country toward home." This is precisely the self-understanding of the New Testament church: "our citizenship is in heaven" (Philippians 3:20); we are "strangers and exiles on the earth" who "desire a better country, that is, a heavenly one" (Hebrews 11:13-16). Psalm 120 names the experience of the exile honestly -- the lies, the war, the longing -- and then the collection as a whole refuses to end there. The eschatological hope of the Songs of Ascents is finally fulfilled in Revelation 21-22: the new Jerusalem, the city of peace, where there will be no more lying, no more war, no more exile.`,
  },
];

const VERSES = [
  {
    ref: "v. 1",
    text: "In my distress I called to the LORD, and he answered me.",
    comment: `The psalm opens mid-narrative with a completed action: the psalmist called and was answered. Calvin notes this is "a testimony to strengthen faith for the present crisis." The word "distress" (tsarah) appears 71 times in the OT, nearly always in contexts of extreme pressure or mortal danger. Yet the psalmist's response to distress is prayer, not panic or retaliation. Spurgeon: "He does not say 'in my distress I sulked, or fretted, or fell into despair' -- he prayed." The fact that God answered is stated simply, without elaboration, as an established fact upon which all subsequent petition rests.`,
  },
  {
    ref: "v. 2",
    text: "Deliver me, O LORD, from lying lips, from a deceitful tongue.",
    comment: `The petition reveals the enemy: not armies or disease but false speech. "Lying lips" (siphte shaqer) and "deceitful tongue" (lashon remiyah) are near-synonyms that reinforce each other. Remiyah specifically carries the sense of treachery -- speech that appears innocent but is designed to deceive and destroy. Matthew Henry observes that "slanders and false accusations are as dangerous as the drawn sword" and that calling on God for deliverance from them acknowledges that only God can ultimately vindicate the innocent against verbal attack. This verse is deeply personal: the psalmist is not asking God to silence all liars everywhere but to deliver him specifically from the lying aimed at him.`,
  },
  {
    ref: "vv. 3-4",
    text: "What shall be given to you, and what more shall be done to you, you deceitful tongue? A warrior's sharp arrows, with glowing coals of the broom tree!",
    comment: `This is a rhetorical curse addressed directly to the deceitful tongue. The question "What shall be given to you?" is a formula for invoking divine punishment, similar to the imprecatory prayers found throughout the Psalter (see Psalm 64:7-8). The answer -- warrior's arrows and broom-tree coals -- inverts the tongue's own weapon. The lying tongue shoots words like arrows (Psalm 64:3-4); it will itself be struck by arrows. The broom tree (Hebrew: rothem) is renowned for producing charcoal that burns intensely long after the wood has ceased to glow visibly -- a proverbial image of punishment that outlasts its apparent conclusion. Kidner: "The punishment fits the crime: fire for fire, arrow for arrow."`,
  },
  {
    ref: "v. 5",
    text: "Woe to me, that I sojourn in Meshech, that I dwell among the tents of Kedar!",
    comment: `The exclamation "Woe to me" (oy li) is a cry of grief rather than despair -- the lament of one acutely aware of his difficult situation. Meshech (far north) and Kedar (far south/east) together represent the most remote, uncivilized, war-oriented peoples in the Israelite geographical imagination. Inhabiting both simultaneously is symbolically impossible, which confirms these as metaphors for spiritual and cultural alienation. The psalmist is saying: I live in enemy territory, far from God's people and God's house. This is the universal experience of believers in a fallen world. Longman notes: "Every believer knows what it means to sojourn in Meshech."`,
  },
  {
    ref: "v. 6",
    text: "Too long have I had my dwelling among those who hate peace.",
    comment: `"Too long" (rabbat) expresses exhaustion from prolonged suffering. The phrase "those who hate peace" is remarkable: peace (shalom) is not a neutral concept in the OT but encompasses wholeness, justice, right relationship, and flourishing. To hate shalom is to actively oppose the created order as God intended it. These are not merely quarrelsome people; they are enemies of the good. Calvin notes that the psalmist "does not simply say that they are given to war, but that they hate peace -- showing that their violence springs from a deep malice." Spurgeon: "It is a horrible thing to be compelled to lodge where men despise all that is holy and peaceful."`,
  },
  {
    ref: "v. 7",
    text: "I am for peace, but when I speak, they are for war.",
    comment: `The final verse is the psalm's most devastating line. The Hebrew is stark: "I peace; but when I speak, they -- war." The psalmist's very identity is shalom, yet every attempt at dialogue produces only escalation. This is not merely a complaint about difficult neighbors; it is a theology of costly righteousness. The righteous one offers peace and receives hostility -- a pattern that reaches its apex in Jesus, the Prince of Peace (Isaiah 9:6) who came to reconcile all things (Colossians 1:20) and was crucified for it. Kidner: "This is perhaps the loneliest verse in the Psalter -- the man of peace in a world of war, whose very overtures are met with aggression."`,
  },
];

const APPLICATIONS = [
  {
    color: TEAL,
    title: "When Your World Feels Like Meshech: Finding God in Alienation",
    body: `Psalm 120 gives language to an experience that many believers struggle to name: the deep sense of being a stranger in one's own world, surrounded by people whose values, commitments, and speech are fundamentally at odds with one's own. The psalmist does not pretend this is easy. He says "woe to me" and "too long" -- words of genuine grief. He does not spiritualize the difficulty away or manufacture a premature peace. He tells the truth: this is hard, and it has gone on long enough.
<br/><br/>
But the psalm also models the response: prayer. "In my distress I called to the LORD." The first move is always vertical. Before strategizing, before retaliating, before retreating into bitterness, the psalmist calls to God. And God answers. This is not a formula for immediate relief; the psalm ends with the psalmist still in Meshech, still surrounded by those who love war. But he is no longer alone there. The God who answers is present in Meshech too.
<br/><br/>
<em>Prayer prompt</em>: Lord, I name before you the relationships and environments where I feel most like a stranger -- where peace is offered and war is returned. Like this psalmist, I call to you from that distress. Deliver me from the temptation to respond with lies when I am lied to, with war when I am attacked. Keep my heart oriented toward your city, your house, your presence, even when my circumstances look like Meshech. Amen.`,
  },
  {
    color: PURPLE,
    title: "Guarding Our Own Tongues: The Application of Psalm 120's Warning",
    body: `Psalm 120 is a prayer for deliverance from lying lips and a deceitful tongue. But the consistent pattern of Scripture is that when we pray about a sin in others, God turns the light on that same sin in us. Before we identify the liars in our lives, we ought to examine whether we have been the liar in someone else's life. Have our words been weapons? Have we used the tongue to slander, to shade the truth, to speak in ways technically accurate but designed to deceive?
<br/><br/>
James 3:9-10 is devastating: "With it [the tongue] we bless our Lord and Father, and with it we curse people who are made in the likeness of God. From the same mouth come blessing and cursing. My brothers and sisters, these things ought not to be so." The same mouth that sings Psalm 120 on Sunday can destroy a reputation on Monday. The psalm's sharp arrows and burning coals are a sober reminder that the tongue's sins have consequences -- both in human relationships and before God.
<br/><br/>
<em>Practical application</em>: This week, before speaking, ask: Is this true? Is this kind? Is this necessary? Is this the right time and place? The gospel provides the motivation for this discipline: Christ redeemed us from the curse of our own deceitful speech, bearing the consequences of our verbal sins on the cross. We speak truthfully because the Truth has set us free (John 8:32).`,
  },
  {
    color: GOLD,
    title: "The Costly Vocation of Peacemaking",
    body: `"I am for peace, but when I speak, they are for war." Jesus blessed the peacemakers and called them children of God (Matthew 5:9) -- but he did not promise that peacemaking would be rewarded with peace in return. The psalmist's experience is exactly the opposite: his peace offerings are met with war. This is the cross-shaped character of Christian peacemaking in a fallen world.
<br/><br/>
Paul's call to "as far as it depends on you, live peaceably with all" (Romans 12:18) includes the crucial qualifier "as far as it depends on you." The psalmist has done what he can: he speaks peace. That his interlocutors respond with war is not his failure but theirs. The pastoral wisdom here is immense: we are responsible for our own posture, our own words, our own pursuit of reconciliation. We are not responsible for whether others receive it.
<br/><br/>
The Songs of Ascents as a collection remind us that peacemaking is not simply a social project but a theological one: we pursue peace because the God to whom we are journeying is the God of peace (Romans 15:33; 16:20), whose kingdom is righteousness, peace, and joy in the Holy Spirit (Romans 14:17), and who will ultimately bring perfect shalom to his new creation. Every act of peacemaking in a war-loving world is a foretaste of that coming kingdom.`,
  },
  {
    color: GREEN,
    title: "Beginning the Pilgrim Journey: Using Psalm 120 in Personal Worship",
    body: `The Songs of Ascents were designed for a journey. They were not meant to be read in isolation but sung in sequence, each psalm building on the last as the pilgrim drew nearer to Jerusalem. Psalm 120 is the starting point: the cry from the far country. If you are in a season of distress, of feeling surrounded by hostility or deception, this psalm gives you permission to name it before God honestly.
<br/><br/>
But the Songs of Ascents tradition invites us not to stop at Psalm 120. The collection is structured as a journey, and the journey moves toward the house of the LORD. Spiritual disciplines that move us toward God's presence -- Scripture reading, corporate worship, prayer, Christian community -- are the New Covenant equivalents of the pilgrimage road. We may be in Meshech today, but our face is set toward the city whose builder and maker is God (Hebrews 11:10).
<br/><br/>
<em>For daily use</em>: Begin a 15-day devotional series with Psalms 120-134. Each day, read one psalm slowly, then pray it back to God in your own words. Notice how the collection moves from distress to praise, from the far country to Zion, from exile to homecoming. Let it shape your own spiritual journey during whatever season of life you are currently in.`,
  },
];

const data: PsalmGuideData = {
  accent: TEAL,
  heroGradientEnd: "#0a1a1a",
  badge: `Psalm 120`,
  metaLine: `Song of Ascents &bull; 7 Verses`,
  title: `In My Distress I Called to the LORD`,
  heroIntro: `The first Song of Ascents opens the great pilgrim collection with raw honesty: a lament from one living among liars and warmongers, crying to God from the depths of social and spiritual exile, yet already beginning the journey toward Zion.`,
  blockquote: `&ldquo;I am for peace, but when I speak, they are for war.&rdquo;`,
  blockquoteRef: `&mdash; Psalm 120:7`,
  overviewHeading: `Overview of Psalm 120`,
  overviewParagraphs: [
    `Psalm 120 stands at the head of one of Scripture&rsquo;s most distinctive literary collections: the fifteen Songs of Ascents (Psalms 120&ndash;134). Bearing the Hebrew superscription <em>shir hama&rsquo;alot</em> (&ldquo;a song of the goings up&rdquo;), these psalms were almost certainly the pilgrim songs of ancient Israel, sung by worshippers making their way to Jerusalem for the great annual festivals. To read Psalm 120 is to enter a journey already begun &mdash; the journey from exile toward the presence of God.`,
    `The psalm is brief &mdash; seven verses &mdash; yet it compresses an entire spiritual situation into its lines. The speaker is surrounded by people of lying lips and deceitful tongue (v. 2). He has appealed to the LORD before and been answered (v. 1), and he appeals again. He voices a curse on the deceitful tongue in the form of a rhetorical question (vv. 3&ndash;4). And then, with devastating honesty, he names his situation: he sojourns in Meshech, dwells among the tents of Kedar (v. 5) &mdash; among barbarians and warmongers, far from God&rsquo;s people. He is for peace; they are for war (v. 7).`,
    `The scholarly debate about the Songs of Ascents touches Psalm 120 directly. If these psalms were composed for or during the return from Babylonian exile, then Meshech and Kedar represent the literal dispersions of Israel among the nations &mdash; the experience of God&rsquo;s people scattered to the far ends of the earth. If they were composed earlier for regular pilgrimage festivals, then Meshech and Kedar are metaphors for moral and spiritual alienation. Either reading is spiritually rich. Derek Kidner writes: &ldquo;Whether the setting is the exile or the ordinary life of the godly man in an ungodly world, the experience is the same &mdash; loneliness, hostility, and longing for the house of God.&rdquo;`,
    `The psalm is structured in three movements: (1) testimony of past rescue and present petition (vv. 1&ndash;2); (2) imprecatory response to the lying tongue (vv. 3&ndash;4); (3) lament of the peacemaker in a war-loving world (vv. 5&ndash;7). The movement from petition to imprecation to lament reflects the psalmist&rsquo;s realism: he is not about to be delivered immediately. The psalm ends not in resolution but in honest statement &mdash; which is itself a form of trust, because the pilgrimage has already begun.`,
    `For Christians reading Psalm 120 as part of the Songs of Ascents, the journey it inaugurates points ultimately to Christ, who himself made the final ascent to Jerusalem (Luke 9:51), who came offering peace and was met with war, and who is now the true Temple and true Zion. The pilgrim road of the Songs of Ascents has become the road of discipleship &mdash; following the crucified and risen Lord from the far country of this present age to the new Jerusalem of the age to come.`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: `How Psalm 120 speaks to daily Christian life.`,
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
