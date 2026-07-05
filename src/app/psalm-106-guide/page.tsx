"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "Anonymous; closes Book IV of the Psalter with its doxology (v. 48)" },
  { label: "Genre", value: "Historical psalm as corporate confession -- 48 verses" },
  { label: "Twin", value: "Psalm 105 tells the same history as unbroken faithfulness; 106 retells it as Israel's failure met by mercy that outlasts every cycle" },
  { label: "Structure", value: "vv. 1-5 praise and a personal plea; vv. 6-12 sin at the sea; vv. 13-33 the wilderness catalogue (craving, envy, the calf, despising the land, Baal-Peor, Meribah); vv. 34-39 idolatry in the land; vv. 40-46 cycles of judgment and compassion; vv. 47-48 gather us -- and the doxology" },
  { label: "Key Verses", value: "v. 6 -- Both we and our fathers have sinned; v. 45 -- He remembered his covenant and relented according to the abundance of his steadfast love" },
  { label: "Key Line", value: "v. 23 -- Moses, his chosen one, stood in the breach before him" },
  { label: "NT Connection", value: "The exchange of glory (v. 20) echoed in Romans 1:23; the greater Intercessor in the breach (Hebrews 7:25); saved 'for his name's sake' (v. 8; Ephesians 1:6)" },
];

const THEMES = [
  {
    color: PURPLE,
    title: "Both We and Our Fathers Have Sinned: The Prayer of Corporate Confession",
    body: `Psalm 106 begins with praise -- &ldquo;Praise the LORD! Oh give thanks to the LORD, for he is good&rdquo; -- and then does something remarkable: it confesses. &ldquo;Both we and our fathers have sinned; we have committed iniquity; we have done wickedness&rdquo; (v. 6). The singing generation does not stand apart from the failed generations and narrate their errors from a safe distance; it files itself in the same folder. Forty verses of ancestral failure follow, and the pronoun of verse 6 governs them all: this is <em>our</em> history, <em>our</em> pattern, <em>our</em> confession.
<br/><br/>
This is the grammar of biblical corporate confession, and the exiles made it their own: Daniel -- personally blameless -- prayed &ldquo;we have sinned and done wrong... to us belongs open shame&rdquo; (Daniel 9:5-8); Nehemiah confessed &ldquo;the sins of the people of Israel, which we have sinned against you. Even I and my father&rsquo;s house have sinned&rdquo; (Nehemiah 1:6); Isaiah, at the throne vision, cried &ldquo;I am a man of unclean lips, and I dwell in the midst of a people of unclean lips&rdquo; (Isaiah 6:5). The individualism that says &ldquo;I wasn&rsquo;t there; it isn&rsquo;t mine to confess&rdquo; is foreign to this prayer. Covenant people are bound in one bundle across time -- inheritors of blessings they did not earn and complicit in patterns they did not start but do continue.
<br/><br/>
And the confession is diagnostic, not merely dramatic. The psalm names the mechanics of the fathers&rsquo; sin with clinical precision so the children can recognize the onset in themselves: &ldquo;they did not consider your wondrous works... did not remember... but had a wanton craving... they did not wait for his counsel&rdquo; (vv. 7, 13-14). Forgetting, craving, impatience -- the same three-step slide every believer knows from the inside.
<br/><br/>
Why confess this way? Verse 47 shows the goal: &ldquo;Save us, O LORD our God, and gather us from among the nations.&rdquo; The psalm is an exile-era prayer, and its strategy is Daniel&rsquo;s: full agreement with God&rsquo;s verdict as the doorway to God&rsquo;s mercy. Confession does not inform God; it aligns the confessor with the truth -- and 1 John 1:9 gives the standing result: &ldquo;if we confess our sins, he is faithful and just to forgive.&rdquo; The psalm that begins with Hallelujah and descends through forty verses of honesty ends with Hallelujah again -- because honest confession is not the interruption of praise but one of its deepest forms.`,
  },
  {
    color: ROSE,
    title: "They Exchanged the Glory: The Absurd Mathematics of Idolatry",
    body: `At the center of the wilderness catalogue stands the golden calf, and the psalm describes it with one of Scripture&rsquo;s most devastating sentences: &ldquo;They made a calf in Horeb and worshiped a metal image. They <em>exchanged the glory of God</em> for the image of an ox that eats grass&rdquo; (vv. 19-20). The verb is economic: an exchange, a trade -- and the psalm forces us to look at the terms. On one side: the Glory -- the God who had just split the sea, whose presence burned on the mountain above their heads. On the other: livestock. Grass-eating livestock. Cast metal shaped like the animal that stands in its own field chewing.
<br/><br/>
The phrase &ldquo;that eats grass&rdquo; is the inspired mockery: the thing they traded God for cannot even feed itself glory -- it grazes. Jeremiah heard the same insanity: &ldquo;my people have exchanged their glory for that which does not profit... they have forsaken me, the fountain of living waters, and hewed out cisterns for themselves, broken cisterns that can hold no water&rdquo; (Jeremiah 2:11-13). Idolatry is never presented in Scripture as merely wicked; it is presented as <em>absurd</em> -- the worst trade in the universe, made over and over by traders who consider themselves shrewd.
<br/><br/>
Paul lifts the psalm&rsquo;s exact vocabulary into his indictment of the whole human race: &ldquo;they became fools, and <em>exchanged the glory</em> of the immortal God for images resembling mortal man and birds and animals and creeping things... they exchanged the truth about God for a lie and worshiped and served the creature rather than the Creator&rdquo; (Romans 1:22-25). The calf at Horeb was not an Israelite anomaly; it was the human pattern in miniature. Every heart makes the exchange in its own denomination: the Glory traded for approval, security, pleasure, control -- each one an ox that eats grass, unable to feed itself, let alone its worshiper.
<br/><br/>
The gospel is the exchange reversed at infinite cost: &ldquo;For your sake he became poor&rdquo; (2 Corinthians 8:9); the Glory himself traded heaven for a cross so that traders of glory could be bought back. And the believer&rsquo;s renewal is the psalm&rsquo;s arithmetic relearned daily: beholding the true Glory until the counterfeit trades lose their appeal (2 Corinthians 3:18; 4:6).`,
  },
  {
    color: GOLD,
    title: "Moses Stood in the Breach: The Intercessor Between the People and the Judgment",
    body: `The psalm&rsquo;s account of the calf ends with one of the Old Testament&rsquo;s greatest images: &ldquo;Therefore he said he would destroy them -- had not Moses, his chosen one, <em>stood in the breach</em> before him, to turn away his wrath from destroying them&rdquo; (v. 23). The picture is military: a city wall broken open, the enemy pouring toward the gap, and one man planting himself in the breach -- his own body where the wall failed. Moses, on the mountain, refusing God&rsquo;s offer to start over with him alone (Exodus 32:10-14, 30-32), even offering to be blotted out of the book in the people&rsquo;s place: intercession at the risk of the intercessor.
<br/><br/>
The psalm gives a second portrait in the same gallery: at Baal-Peor, when plague broke out, &ldquo;Phinehas stood up and intervened, and the plague was stayed&rdquo; (v. 30; Numbers 25). And behind both stands the question the whole Old Testament keeps raising: who will stand in the breach when the next wall fails? Ezekiel records the terrifying answer of his generation: &ldquo;I sought for a man among them who should build up the wall and stand in the breach before me for the land, that I should not destroy it, <em>but I found none</em>&rdquo; (Ezekiel 22:30).
<br/><br/>
The New Testament announces that the search is over. &ldquo;There is one mediator between God and men, the man Christ Jesus&rdquo; (1 Timothy 2:5) -- the chosen One who did not merely risk being blotted out for his people but was: &ldquo;he was cut off out of the land of the living, stricken for the transgression of my people&rdquo; (Isaiah 53:8). Moses&rsquo; offer -- me instead of them -- was declined at Sinai and accepted at Golgotha. And the intercession did not end at the cross: &ldquo;he always lives to make intercession for them&rdquo; (Hebrews 7:25); &ldquo;Christ Jesus is the one who died -- more than that, who was raised -- who is at the right hand of God, who indeed is interceding for us&rdquo; (Romans 8:34). The breach between God and his people is permanently manned.
<br/><br/>
And those in Christ inherit the family trade: &ldquo;I urge that supplications, prayers, intercessions... be made for all people&rdquo; (1 Timothy 2:1). Every believer who prays for a wandering child, a failing church, a nation under judgment is standing in a breach -- junior partners of the Intercessor, doing in prayer what he does in person.`,
  },
  {
    color: TEAL,
    title: "He Remembered His Covenant and Relented: Mercy That Outlasts the Cycles",
    body: `The psalm&rsquo;s last historical movement (vv. 34-46) traces Israel in the land through the grim spiral the book of Judges narrates: failure to drive out the nations, mingling and learning their ways, idols becoming a snare, and -- the nadir -- sons and daughters sacrificed to demons, the land polluted with innocent blood (vv. 34-39). Judgment follows: given into the hand of the nations, oppressed, brought low. &ldquo;Many times he delivered them, but they were rebellious in their purposes and were brought low through their iniquity&rdquo; (v. 43). Cycle after cycle after cycle -- the psalm compresses centuries of relapse into a few verses, and any honest reader recognizes the shape from his own biography.
<br/><br/>
Then the hinge on which the whole psalm -- and the whole history -- turns: &ldquo;<em>Nevertheless</em>, he looked upon their distress, when he heard their cry. For their sake he remembered his covenant, and relented according to the abundance of his steadfast love. He caused them to be pitied by all those who held them captive&rdquo; (vv. 44-46). Nevertheless: the Bible&rsquo;s most load-bearing conjunction. After the exchange of glory, after the despised land, after Baal-Peor and the blood-polluted soil, after cycles that exhausted every human category of patience -- he looked, he heard, he remembered, he relented. Not because the repentance was finally impressive (verse 43 has just said otherwise) but &ldquo;according to the abundance of his steadfast love&rdquo; -- mercy measured by his character, not their performance.
<br/><br/>
Here the twin psalms complete each other. Psalm 105: he remembered his covenant, and so he acted in unbroken faithfulness. Psalm 106: they broke everything -- and he remembered his covenant <em>anyway</em>. The same divine memory that drives redemptive history in the first psalm survives human failure in the second. The hesed that verse 1 praised in the abstract, verse 45 displays under maximum load.
<br/><br/>
This is why the psalm can end where it ends: a scattered people daring to pray &ldquo;Save us... gather us from among the nations, that we may give thanks to your holy name&rdquo; (v. 47) -- and then, before any answer arrives, the doxology that closes Book IV: &ldquo;Blessed be the LORD, the God of Israel, from everlasting to everlasting! And let all the people say, Amen! Praise the LORD!&rdquo; (v. 48). Praise sung on the strength of &ldquo;nevertheless&rdquo; alone. The church knows the gathering happened -- and knows the deeper gathering still: &ldquo;while we were still sinners, Christ died for us&rdquo; (Romans 5:8) -- the everlasting Nevertheless, spoken in blood, for every reader of this psalm who has lived its cycles and needs its verse 44.`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-5",
    text: "Praise the LORD! Oh give thanks to the LORD, for he is good, for his steadfast love endures forever! Who can utter the mighty deeds of the LORD?... Blessed are they who observe justice... Remember me, O LORD, when you show favor to your people... that I may rejoice in the gladness of your nation.",
    comment: `The psalm opens with the Psalter&rsquo;s signature thanksgiving formula (compare 107:1; 118:1; 136:1) and an admission of inadequacy -- who can utter his mighty deeds? -- before a single voice steps forward with a personal plea: &ldquo;Remember me... that I may look upon the prosperity of your chosen ones.&rdquo; The individual asks to be included in the people&rsquo;s coming restoration -- personal hope riding inside corporate mercy. The order matters for everything that follows: praise and the character of God (&ldquo;he is good... steadfast love forever&rdquo;) are established <em>first</em>, so that forty verses of confession fall inside an already-settled hesed, not outside it.`,
  },
  {
    ref: "vv. 6-12",
    text: "Both we and our fathers have sinned... Our fathers, when they were in Egypt, did not consider your wondrous works... but rebelled by the sea, at the Red Sea. Yet he saved them for his name's sake, that he might make known his mighty power... Then they believed his words; they sang his praise.",
    comment: `The confession proper begins with the psalm&rsquo;s governing pronoun -- <em>we</em>, filed with the fathers (Daniel 9:5; Nehemiah 1:6) -- and its first exhibit is staggering: rebellion <em>at the sea itself</em>, before the water even parted (Exodus 14:11-12). The diagnosis is memory-failure at the scene of the miracle: &ldquo;they did not consider... did not remember.&rdquo; And the salvation that followed rested on nothing in them: &ldquo;yet he saved them <em>for his name&rsquo;s sake</em>&rdquo; (v. 8) -- grace grounded in God&rsquo;s own glory, the only footing it ever has (Ezekiel 36:22; Ephesians 1:6). Verse 12&rsquo;s belief-and-song lasted, as the next verse admits, about as long as the echo.`,
  },
  {
    ref: "vv. 13-23",
    text: "But they soon forgot his works; they did not wait for his counsel. But they had a wanton craving in the wilderness... they were jealous of Moses... They made a calf in Horeb... They exchanged the glory of God for the image of an ox that eats grass. They forgot God, their Savior... Therefore he said he would destroy them -- had not Moses, his chosen one, stood in the breach before him.",
    comment: `The wilderness catalogue: forgetting (&ldquo;soon&rdquo; -- the mercy still warm), craving that God answered with quail and &ldquo;a wasting disease&rdquo; (v. 15 -- granted requests as judgment: beware prayers that only want the gift), envy of God&rsquo;s appointed leaders swallowed at Dathan&rsquo;s tents, and the nadir at Horeb: the exchange of the Glory for grazing livestock -- the absurd trade Paul makes the template of all human idolatry (Romans 1:22-25). Verse 23&rsquo;s &ldquo;had not Moses... stood in the breach&rdquo; introduces the Old Testament&rsquo;s great intercession image (Exodus 32:10-14; Ezekiel 22:30) -- the gap between sin and judgment manned by a mediator, awaiting the one Mediator who would fill it forever (1 Timothy 2:5; Hebrews 7:25).`,
  },
  {
    ref: "vv. 24-33",
    text: "Then they despised the pleasant land, having no faith in his promise. They murmured in their tents... Then they yoked themselves to the Baal of Peor... Then Phinehas stood up and intervened, and the plague was stayed... They angered him at the waters of Meribah, and it went ill with Moses on their account, for they made his spirit bitter, and he spoke rashly with his lips.",
    comment: `Three more exhibits: Kadesh -- &ldquo;they despised the pleasant land&rdquo; (Numbers 13-14), unbelief dressed as prudence, the gift inspected and declined; Baal-Peor -- apostasy as &ldquo;yoking&rdquo; (Numbers 25), idolatry&rsquo;s bondage named in its own vocabulary, answered by Phinehas&rsquo;s intervention &ldquo;counted to him as righteousness from generation to generation&rdquo; (v. 31, the Psalter&rsquo;s echo of Genesis 15:6); and Meribah -- where the people&rsquo;s provocation cost <em>Moses</em> his entrance to the land (Numbers 20:10-12). Verse 33 is quietly devastating: even the intercessor was wounded by the people he carried -- &ldquo;they made his spirit bitter&rdquo; -- a shadow of the greater Intercessor, provoked, wearied, and wounded by his own, who yet never spoke rashly (1 Peter 2:23).`,
  },
  {
    ref: "vv. 34-43",
    text: "They did not destroy the peoples, as the LORD commanded them, but they mixed with the nations and learned to do as they did. They served their idols, which became a snare to them. They sacrificed their sons and their daughters to the demons... Many times he delivered them, but they were rebellious in their purposes and were brought low through their iniquity.",
    comment: `The land-era spiral, Judges compressed: incomplete obedience becoming assimilation, assimilation becoming idolatry, idolatry descending to its floor -- children sacrificed to demons, innocent blood polluting the land (vv. 37-38; the psalm does not flinch, and neither does its relevance). Verse 43&rsquo;s summary -- &ldquo;many times he delivered them, but they were rebellious&rdquo; -- is the honest shape of long-term spiritual history, national and personal: cycles that exhaust every human category of patience. The verse exists to make the next word (&ldquo;Nevertheless&rdquo;) carry the full weight of the gospel it foreshadows.`,
  },
  {
    ref: "vv. 44-48",
    text: "Nevertheless, he looked upon their distress, when he heard their cry. For their sake he remembered his covenant, and relented according to the abundance of his steadfast love... Save us, O LORD our God, and gather us from among the nations, that we may give thanks to your holy name... Blessed be the LORD, the God of Israel, from everlasting to everlasting! And let all the people say, 'Amen!' Praise the LORD!",
    comment: `The hinge of the whole psalm -- and of covenant history: <em>Nevertheless</em>. He looked, heard, remembered, relented -- mercy measured &ldquo;according to the abundance of his steadfast love,&rdquo; not the quality of the repentance (v. 43 just closed that door). This is Psalm 105&rsquo;s covenant-memory surviving Psalm 106&rsquo;s covenant-breaking: the twins complete each other here. The exile-era petition (&ldquo;gather us from among the nations&rdquo;) aims at thanksgiving, not mere relief -- and then, before any answer, the doxology that closes Book IV: blessing from everlasting to everlasting, the congregation&rsquo;s Amen, Hallelujah. Praise sung on the strength of &ldquo;nevertheless&rdquo; alone -- which is where the church still sings it: &ldquo;while we were still sinners, Christ died for us&rdquo; (Romans 5:8).`,
  },
];

const APPLICATIONS = [
  {
    color: PURPLE,
    title: "Learn to Pray 'We': the Lost Art of Corporate Confession",
    body: `Psalm 106 assigns a prayer most modern believers have never prayed: confession in the first person plural. Practice it. For your family line: name the patterns that run through it -- the anger, the addictions, the faithlessness, the pride -- and confess them as Daniel did, &ldquo;we have sinned,&rdquo; asking God to break in your generation what began before it. For your church: confess its actual failures -- the gossip tolerated, the mission neglected, the wounded unvisited -- as yours, because covenant people are one bundle (1 Corinthians 12:26). For your nation and era: bring its exchanges-of-glory to God with grief rather than mere commentary.
<br/><br/>
Keep the psalm&rsquo;s order: praise first (vv. 1-5), confession inside settled hesed -- you agree with God&rsquo;s verdict from within his love, not to earn your way into it (Romans 2:4; 1 John 1:9). And keep its diagnostic honesty: the fathers&rsquo; three-step slide -- forgetting, craving, refusing to wait (vv. 7, 13-14) -- is the onset pattern to watch for in yourself while confessing it in them.
<br/><br/>
<em>Prayer prompt</em>: LORD, you are good and your steadfast love endures forever -- and both we and our fathers have sinned. I bring you the patterns of my house, my church, my generation, and my own heart, without excuse and without despair. Remember me when you show favor to your people; let me share in the gladness of your nation. Amen.`,
  },
  {
    color: ROSE,
    title: "Audit Your Exchanges",
    body: `Verse 20 gives idolatry its true accounting: an exchange -- the Glory traded for an ox that eats grass. Run the audit on your own ledger. What has quietly been accepted in trade for communion with God? The approval metric that eats your evenings; the security that owns your decisions; the screen that grazes away your attention; the ambition that cannot feed you back. Name each one with the psalm&rsquo;s mockery intact: it eats grass -- it cannot even sustain itself, let alone your soul (Jeremiah 2:13).
<br/><br/>
Then reverse the trade the only way trades reverse: not by willpower against the idol but by revaluation of the Glory. Idols are outgrown, not merely renounced -- &ldquo;beholding the glory of the Lord&rdquo; until you are &ldquo;transformed into the same image&rdquo; (2 Corinthians 3:18). Put the true Glory before your eyes daily -- the face of Jesus Christ, where God&rsquo;s glory is given to be seen (2 Corinthians 4:6) -- and the ox&rsquo;s market value collapses on its own.
<br/><br/>
And when you find you have already made the bad trade -- again -- remember who reversed the exchange at his own expense: the Glory became poor to buy back glory-traders (2 Corinthians 8:9). Confess, receive, behold, repeat. That is the whole economy of recovery.`,
  },
  {
    color: GOLD,
    title: "Stand in a Breach",
    body: `Verse 23 is a job description with a vacancy notice attached (Ezekiel 22:30: &ldquo;I sought for a man... but I found none&rdquo;). In Christ the great Breach is permanently manned (Hebrews 7:25) -- and his people inherit the family trade of intercession (1 Timothy 2:1). So choose your breach. The wandering child, the failing marriage in your small group, the church in decline, the friend under judgment-shaped consequences, the nation&rsquo;s exchanges of glory: somewhere near you a wall is broken and judgment&rsquo;s logic is running -- and prayer can stand in the gap.
<br/><br/>
Stand there like Moses stood: identified with the people you pray for (&ldquo;this people&rdquo; became &ldquo;we&rdquo; in his mouth), persistent past the first refusal, and costly -- willing to be inconvenienced, implicated, spent for the ones in the breach&rsquo;s path (Exodus 32:32; Romans 9:3 shows Paul in the same posture). Intercession that risks nothing usually moves nothing.
<br/><br/>
And when you are wounded by the very people you carry -- verse 33&rsquo;s bitter honesty: &ldquo;they made his spirit bitter&rdquo; -- take it to the Intercessor who knows that wound from inside and never spoke rashly under it (1 Peter 2:23). Standing in breaches is his trade before it is yours; he keeps his junior partners.
<br/><br/>
<em>Prayer prompt</em>: Lord Jesus, standing Intercessor, teach me my breach. Put your people, your church, and the ones sliding toward the gap on my heart with weight; make my prayers persistent, identified, and costly; and hold me when the carried ones wound the carrier, as they wounded you. Amen.`,
  },
  {
    color: TEAL,
    title: "Live from 'Nevertheless'",
    body: `Verse 44&rsquo;s &ldquo;Nevertheless&rdquo; is the load-bearing word of your whole standing with God. If your history has cycles -- delivered many times, rebellious again, brought low again (v. 43) -- the psalm was written with your file open, and its hinge holds for you: he looks on distress, hears the cry, remembers the covenant, relents according to the abundance -- not the average of your performance but the abundance of his steadfast love. The everlasting form of the word is Romans 5:8: while we were still sinners, Christ died -- God&rsquo;s Nevertheless spoken in blood, once for all.
<br/><br/>
So refuse the two liars that cycles breed: despair (&ldquo;the pattern is final&rdquo;) -- answered by verse 44; and presumption (&ldquo;the pattern is fine&rdquo;) -- answered by the forty honest verses before it. Live instead as the psalm ends: praying the gathering prayer (&ldquo;save us... gather us&rdquo; -- for yourself, for scattered family, for the church&rsquo;s prodigals), aiming every rescue at thanksgiving (&ldquo;that we may give thanks to your holy name&rdquo;), and singing the doxology <em>before</em> the answer arrives, on the strength of who God is from everlasting to everlasting.
<br/><br/>
And let all the people say: Amen. Praise the LORD.`,
  },
];

const data: PsalmGuideData = {
  accent: PURPLE,
  heroGradientEnd: "#0d0717",
  badge: "Psalm 106",
  metaLine: "Historical Psalm &bull; 48 Verses &bull; Twin of Psalm 105 &bull; Closes Book IV",
  title: "Both We and Our Fathers Have Sinned",
  heroIntro: "The confession twin -- the same history Psalm 105 told as unbroken faithfulness, retold as Israel&rsquo;s failure: rebellion at the sea itself, the glory exchanged for a grass-eating ox, Moses in the breach, cycles of relapse that exhaust every patience -- and the hinge on which everything turns: Nevertheless, he remembered his covenant, and relented according to the abundance of his steadfast love.",
  blockquote: "&ldquo;Nevertheless, he looked upon their distress, when he heard their cry. For their sake he remembered his covenant, and relented according to the abundance of his steadfast love.&rdquo;",
  blockquoteRef: "&mdash; Psalm 106:44-45",
  overviewHeading: "Overview of Psalm 106",
  overviewParagraphs: [
    `Psalm 106 is the second of the Psalter&rsquo;s twin history-psalms and the closing psalm of Book IV. Where Psalm 105 told Israel&rsquo;s story entirely from God&rsquo;s side -- forty-five verses without one sin mentioned -- Psalm 106 retells the same centuries as corporate confession: &ldquo;Both we and our fathers have sinned&rdquo; (v. 6). The Psalter prints the two ledgers back to back on purpose: the honest record of human failure inside the longer record of divine faithfulness, and neither is complete without the other.`,
    `The confession&rsquo;s grammar is the lost art the exiles mastered: first person plural, across generations -- Daniel&rsquo;s &ldquo;we have sinned&rdquo; (Daniel 9), Nehemiah&rsquo;s &ldquo;even I and my father&rsquo;s house&rdquo; (Nehemiah 1). The singing generation files itself with the failed ones, because covenant people are one bundle across time. And the order is pastoral genius: praise and settled hesed first (vv. 1-5), so that forty verses of honesty fall <em>inside</em> the steadfast love, not outside it.`,
    `The catalogue is unflinching: rebellion at the Red Sea itself -- yet salvation &ldquo;for his name&rsquo;s sake&rdquo; (v. 8); the three-step slide of forgetting, craving, and refusing to wait; the calf at Horeb -- &ldquo;they exchanged the glory of God for the image of an ox that eats grass&rdquo; (v. 20), the absurd trade Paul makes the template of all idolatry (Romans 1:22-25); the pleasant land despised; Baal-Peor; Meribah, where the carried people embittered even their intercessor. Twice the judgment is stayed by a man in the gap: Moses, &ldquo;his chosen one, [who] stood in the breach&rdquo; (v. 23), and Phinehas -- images that wait, through Ezekiel 22:30&rsquo;s vacancy (&ldquo;I found none&rdquo;), for the one Mediator who fills the breach forever (1 Timothy 2:5; Hebrews 7:25).`,
    `The land-era spiral compresses Judges into a paragraph -- assimilation, idolatry, children sacrificed to demons, cycles of deliverance and relapse: &ldquo;many times he delivered them, but they were rebellious&rdquo; (v. 43). Then the hinge on which the psalm and all covenant history turn: &ldquo;<em>Nevertheless</em>, he looked upon their distress... remembered his covenant, and relented according to the abundance of his steadfast love&rdquo; (vv. 44-45) -- mercy measured by his character under maximum load, Psalm 105&rsquo;s covenant-memory surviving Psalm 106&rsquo;s covenant-breaking.`,
    `The psalm ends as exile-era prayer and permanent liturgy: &ldquo;Save us... gather us from among the nations, that we may give thanks to your holy name&rdquo; (v. 47) -- rescue aimed at thanksgiving -- and then, before any answer arrives, the doxology that closes Book IV: &ldquo;Blessed be the LORD... from everlasting to everlasting! And let all the people say, Amen! Praise the LORD!&rdquo; Praise sung on the strength of Nevertheless alone. The church sings it standing at the everlasting form of that word -- &ldquo;while we were still sinners, Christ died for us&rdquo; (Romans 5:8) -- with the Intercessor in the breach, living always to make intercession.`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 106 recovers corporate confession, audits the exchanges of glory, staffs the breaches with intercessors, and teaches the church to live from Nevertheless.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
