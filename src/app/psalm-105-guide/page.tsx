"use client";
import PsalmGuideTemplate, { GUIDE_COLORS, type PsalmGuideData, type VideoEntry } from "@/components/PsalmGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = GUIDE_COLORS;

const VIDEOS: VideoEntry[] = [];

const KEY_DETAILS = [
  { label: "Author", value: "Anonymous; vv. 1-15 appear in David's ark liturgy in 1 Chronicles 16:8-22" },
  { label: "Genre", value: "Historical psalm of thanksgiving -- 45 verses of covenant faithfulness" },
  { label: "Twin", value: "Psalm 106 tells the same history as confession; 105 mentions no sin of Israel at all -- the story told entirely from God's side" },
  { label: "Structure", value: "vv. 1-6 seek, remember, tell; vv. 7-11 the covenant with Abraham; vv. 12-22 patriarchs kept, Joseph sent ahead; vv. 23-38 Egypt and the plagues; vv. 39-41 wilderness provision; vv. 42-45 the punchline: promise remembered, statutes kept" },
  { label: "Key Verse", value: "v. 8 -- He remembers his covenant forever, the word that he commanded, for a thousand generations" },
  { label: "Key Line", value: "v. 17 -- He had sent a man ahead of them, Joseph, who was sold as a slave" },
  { label: "NT Connection", value: "The covenant kept in Christ (Luke 1:72-73; Galatians 3:16, 29); providence in the pit (Genesis 50:20; Romans 8:28)" },
];

const THEMES = [
  {
    color: GREEN,
    title: "Seek, Remember, Tell: Praise as History Recital",
    body: `Psalm 105 opens with a volley of imperatives -- give thanks, call upon his name, make known his deeds among the peoples, sing, tell of his wondrous works, glory in his holy name, seek the LORD and his strength, seek his presence continually, remember his wondrous works (vv. 1-5). Ten commands before a single line of story -- and then forty verses of story. The structure teaches what praise is made of: not manufactured feeling but rehearsed fact. Israel&rsquo;s worship was, at its core, the public recital of what God had done.
<br/><br/>
This psalm had a documented liturgical life: its opening fifteen verses appear in 1 Chronicles 16 as the anthem David appointed when the ark came to Jerusalem -- the day Israel&rsquo;s worship got a new address, the songbook opened with covenant history. The instinct is deeply biblical: when God&rsquo;s people gather at a new threshold, they steady themselves by telling the whole old story again.
<br/><br/>
Notice too the outward pressure of the opening: &ldquo;make known his deeds <em>among the peoples</em>&rdquo; (v. 1). The recital is not a private heirloom; Israel&rsquo;s history is testimony addressed to the nations -- grace narrated in public earshot, exactly as the funnel of Psalm 66 and the missionary logic of the Psalter (96:3; 145:4-7) demand. The church inherits the method whole: its central acts of worship are recitals -- creed, Scripture reading, the Supper&rsquo;s &ldquo;do this in remembrance&rdquo; -- the mighty deeds of God in Christ told and retold until the tellers become witnesses.
<br/><br/>
And the seeking is &ldquo;continual&rdquo; (v. 4) because the remembering must be: memory leaks, and the psalm prescribes the refill schedule. Spurgeon: &ldquo;memory is the handmaid of hope&rdquo; -- what you rehearse of God&rsquo;s past is the exact measure of what you will dare to expect of his future.`,
  },
  {
    color: GOLD,
    title: "He Remembers His Covenant Forever: The Engine Under the History",
    body: `Verse 8 is the psalm&rsquo;s thesis, and everything after it is evidence: &ldquo;He remembers his covenant forever, the word that he commanded, for a thousand generations, the covenant that he made with Abraham, his sworn promise to Isaac, which he confirmed to Jacob as a statute, to Israel as an everlasting covenant: &lsquo;To you I will give the land of Canaan as your portion for an inheritance&rsquo;&rdquo; (vv. 8-11). One promise -- land to Abraham&rsquo;s seed -- is then tracked through four centuries of apparent impossibility: a wandering clan, &ldquo;few in number, of little account&rdquo; (v. 12); famine; a favorite son sold; a nation enslaved. The psalm&rsquo;s wager is total: history is not driven by empires, economics, or accident, but by a word God spoke to one man and refuses to forget.
<br/><br/>
The phrase &ldquo;a thousand generations&rdquo; (from Deuteronomy 7:9) is deliberately unmeasurable -- roughly forever in human arithmetic. Covenant memory on that scale relativizes every intervening circumstance: four hundred years in Egypt is a long time to a family and a short clause in a thousand-generation sentence. The exile-era congregation singing this psalm (and its echo in 1 Chronicles 16) was being taught to read its own dislocation the same way: the promise has outlasted worse.
<br/><br/>
The New Testament names the guarantee under the guarantee. Zechariah, filled with the Spirit, sings this psalm&rsquo;s theology over his infant son: God has &ldquo;remembered his holy covenant, the oath that he swore to our father Abraham&rdquo; (Luke 1:72-73) -- remembered it by sending Christ. Paul presses the promise&rsquo;s grammar to its point: the seed of Abraham is, finally, one -- &ldquo;and to your offspring, who is Christ&rdquo; -- and all who are Christ&rsquo;s are &ldquo;Abraham&rsquo;s offspring, heirs according to promise&rdquo; (Galatians 3:16, 29). The covenant remembered for a thousand generations has your name in it, if you are in the Seed.
<br/><br/>
Matthew Henry&rsquo;s summary of the psalm is exact: God&rsquo;s promises may lie long dormant, &ldquo;but they are never dead.&rdquo; The believer&rsquo;s security is not the strength of his grip on God but the length of God&rsquo;s memory of his own word.`,
  },
  {
    color: PURPLE,
    title: "He Had Sent a Man Ahead: Joseph and the Providence That Works in Pits",
    body: `The psalm&rsquo;s treatment of Joseph is four verses of compressed theology: &ldquo;he had summoned a famine on the land... he had sent a man ahead of them, Joseph, who was sold as a slave. His feet were hurt with fetters; his neck was put in a collar of iron; until what he had said came to pass, the word of the LORD tested him&rdquo; (vv. 16-19). Every verb is arresting. The famine was &ldquo;summoned&rdquo; -- disaster on God&rsquo;s payroll. Joseph was &ldquo;sent&rdquo; -- the brothers sold him, the traders trafficked him, Potiphar bought him, and over all of it the psalm writes one sovereign verb: <em>sent</em>, ahead, for the family&rsquo;s rescue. This is Joseph&rsquo;s own mature reading -- &ldquo;it was not you who sent me here, but God&rdquo; (Genesis 45:8); &ldquo;you meant evil against me, but God meant it for good&rdquo; (Genesis 50:20) -- canonized as the way Israel tells the story.
<br/><br/>
And the psalm refuses to airbrush the cost: fetters on the feet, iron at the neck -- the sent man&rsquo;s itinerary ran through a pit and a prison, for years. Verse 19&rsquo;s clause is one of Scripture&rsquo;s profoundest sentences about waiting: &ldquo;until what he had said came to pass, the word of the LORD tested him.&rdquo; The promise itself (Joseph&rsquo;s dreams) became the test: every day in irons, the word looked more absurd -- and the testing was not the delay of the promise but part of its outworking, refining the dreamer into a man who could hold power without being ruined by it (compare Psalm 66:10).
<br/><br/>
This is the Bible&rsquo;s doctrine of providence at full depth: not that God prevents pits, but that pits are on the route; not that evil is good, but that God out-plots it (Romans 8:28). The pattern culminates where all the patterns do: another Man &ldquo;sent ahead&rdquo; of his brothers, &ldquo;delivered up according to the definite plan and foreknowledge of God&rdquo; yet &ldquo;crucified and killed by the hands of lawless men&rdquo; (Acts 2:23) -- the ultimate meant-evil that God meant for the good of saving many alive.
<br/><br/>
For the believer in the fetters-and-iron stretch of a real calling -- the delay, the demotion, the season when the promise itself seems to mock -- the Joseph verses are the assigned reading: you may be a sent one whose sending currently looks like being sold. The word of the LORD is testing you; it is not done with you.`,
  },
  {
    color: TEAL,
    title: "That They Might Keep His Statutes: The Goal of Grace",
    body: `The psalm&rsquo;s final movement gathers the exodus and wilderness into pure gift-language: he brought Israel out &ldquo;with silver and gold&rdquo; (v. 37); he spread a cloud for covering and fire for night (v. 39); quail and &ldquo;bread of heaven&rdquo; came at their asking (v. 40); the rock opened and water flowed like a river in the desert (v. 41) -- and the whole cascade is explained by one memory: &ldquo;For he remembered his holy promise, and Abraham, his servant&rdquo; (v. 42). Notably, in this psalm the people never complain, never rebel, never even speak -- the twin psalm (106) will supply all of that. Here the camera stays fixed on God&rsquo;s side of the story, and from that side the history is one unbroken chain of kept word.
<br/><br/>
Then comes the ending that reframes everything: &ldquo;So he brought his people out with joy, his chosen ones with singing... <em>that they might keep his statutes and observe his laws.</em> Praise the LORD!&rdquo; (vv. 43-45). Forty-four verses of grace arrive at a purpose clause: obedience. The order is the whole of biblical religion: redemption first, requirement second -- Egypt before Sinai, always (Exodus 20:2 grounds the commandments in the exodus already accomplished). God does not say &ldquo;keep my statutes so that I will bring you out&rdquo;; he brings out, with joy and singing, a people who are then freed <em>for</em> obedience.
<br/><br/>
This purpose-clause guards both cliffs. Against legalism: the statutes come forty-four verses after the covenant -- law can never be the ladder into grace, only the life that follows it (Ephesians 2:8-10 has the same order: saved by grace, created for good works). Against license: grace has a direction; deliverance that never issues in obedience has not yet reached its stated goal. The freed people are freed for something -- a life that displays, in ordinary conduct, the character of the God who kept his word for a thousand generations.
<br/><br/>
Jesus compresses the psalm&rsquo;s ending into one sentence: &ldquo;If you love me, you will keep my commandments&rdquo; (John 14:15) -- love responding to rescue, obedience as doxology. The psalm&rsquo;s last word is accordingly not &ldquo;obey&rdquo; but &ldquo;Praise the LORD!&rdquo; -- because in the economy of Psalm 105, even the statutes are inside the thanksgiving.`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-6",
    text: "Oh give thanks to the LORD; call upon his name; make known his deeds among the peoples! Sing to him... tell of all his wondrous works! Glory in his holy name... Seek the LORD and his strength; seek his presence continually! Remember the wondrous works that he has done...",
    comment: `Ten imperatives launch the psalm -- thanks, calling, making known, singing, telling, glorying, rejoicing, seeking (twice), remembering -- praise defined as the public recital of God&rsquo;s deeds, aimed &ldquo;among the peoples.&rdquo; These verses opened David&rsquo;s ark liturgy (1 Chronicles 16:8-22): at Israel&rsquo;s great new threshold, worship began by telling the whole old story. &ldquo;Seek his presence <em>continually</em>&rdquo; sets the refill schedule for leaky memory, and the address to &ldquo;offspring of Abraham... children of Jacob, his chosen ones&rdquo; (v. 6) hands the recital to the heirs -- which, per Galatians 3:29, now includes everyone who is Christ&rsquo;s.`,
  },
  {
    ref: "vv. 7-15",
    text: "He remembers his covenant forever, the word that he commanded, for a thousand generations, the covenant that he made with Abraham... 'To you I will give the land of Canaan'... When they were few in number... wandering from nation to nation, he allowed no one to oppress them; he rebuked kings on their account, saying, 'Touch not my anointed ones, do my prophets no harm!'",
    comment: `The thesis (v. 8) and its first evidence: one promise -- land to Abraham&rsquo;s seed -- guarded across the patriarchs&rsquo; vulnerable wanderings. &ldquo;Few in number, of little account&rdquo; (v. 12) is the covenant&rsquo;s raw material: God&rsquo;s program has never required impressive beginnings. The rebuke of kings (Pharaoh over Sarah, Genesis 12:17; Abimelech, Genesis 20:3-7) shows providence running above thrones, and &ldquo;touch not my anointed ones&rdquo; -- spoken here of the patriarchal family -- reveals how God regards his covenant people: as anointed, as prophets, as untouchable except by his leave. Luke 1:72-73 sings this section over the manger: the oath to Abraham, remembered in Christ.`,
  },
  {
    ref: "vv. 16-22",
    text: "When he summoned a famine on the land... he had sent a man ahead of them, Joseph, who was sold as a slave. His feet were hurt with fetters; his neck was put in a collar of iron; until what he had said came to pass, the word of the LORD tested him. The king sent and released him... he made him lord of his house... to bind his princes at his pleasure and to teach his elders wisdom.",
    comment: `Providence at full depth: famine &ldquo;summoned,&rdquo; the sold slave re-described as the &ldquo;sent&rdquo; man (Genesis 45:8; 50:20), and the cost told without varnish -- fetters, iron, years. Verse 19 is the psalm&rsquo;s profoundest clause: &ldquo;the word of the LORD tested him&rdquo; -- the promise itself as crucible, the delay refining the dreamer for the throne the dream foretold. The reversal (prison to palace in a verse) prefigures the pattern&rsquo;s summit: the Man delivered up &ldquo;by the definite plan of God,&rdquo; through lawless hands, to the right hand of power (Acts 2:23-33). Every believer in a fetters-season reads here: sent ones sometimes travel as sold ones, and the word is not done with them.`,
  },
  {
    ref: "vv. 23-38",
    text: "Then Israel came to Egypt... And the LORD made his people very fruitful... He sent Moses, his servant, and Aaron, whom he had chosen. They performed his signs among them... He sent darkness... turned their waters into blood... their land swarmed with frogs... He struck down all the firstborn in their land... Then he brought out Israel with silver and gold... Egypt was glad when they departed.",
    comment: `The Egypt movement: fruitfulness under oppression (Exodus 1:12 -- the covenant multiplying precisely where it was being crushed), hearts turned and then two more &ldquo;sent&rdquo; men (Moses and Aaron, v. 26 -- the psalm&rsquo;s providence-verb again), and the plagues recited as &ldquo;his signs&rdquo; -- eight of them retold, not as national trauma but as covenant enforcement. The exit is lavish: out &ldquo;with silver and gold&rdquo; (Exodus 12:35-36), not one who stumbled, Egypt itself relieved. Told from God&rsquo;s side, even the empire&rsquo;s catastrophe serves the thousand-generation word -- &ldquo;for he remembered his holy promise&rdquo; (v. 42) stands over the whole section.`,
  },
  {
    ref: "vv. 39-41",
    text: "He spread a cloud for a covering, and fire to give light by night. They asked, and he brought quail, and gave them bread from heaven in abundance. He opened the rock, and water gushed out; it flowed through the desert like a river.",
    comment: `The wilderness in three verses -- and, astonishingly, without a single murmur recorded. Where Psalms 78 and 106 tell the same years as rebellion answered by mercy, Psalm 105 tells only the mercy: cloud, fire, quail, heaven&rsquo;s bread in abundance, the rock become a river. The editorial choice is the psalm&rsquo;s message: viewed from God&rsquo;s side, the wilderness was one long act of faithfulness. Both tellings are true, and the Psalter prints both back to back (105 and 106) -- teaching the church to keep two ledgers: an honest one of our failures, and a longer, louder one of his provision. 1 Corinthians 10:3-4 reads this section&rsquo;s food and rock as Christ himself accompanying his people.`,
  },
  {
    ref: "vv. 42-45",
    text: "For he remembered his holy promise, and Abraham, his servant. So he brought his people out with joy, his chosen ones with singing. And he gave them the lands of the nations... that they might keep his statutes and observe his laws. Praise the LORD!",
    comment: `The punchline names the engine one last time -- &ldquo;he remembered his holy promise&rdquo; -- and describes redemption&rsquo;s manner (out &ldquo;with joy... with singing&rdquo;) before landing on its purpose: &ldquo;<em>that</em> they might keep his statutes.&rdquo; Forty-four verses of grace arrive at a purpose clause of obedience: Egypt before Sinai, redemption before requirement, always (Exodus 20:2; Ephesians 2:8-10). The law is not the ladder into the covenant but the life that flows from it -- and even the statutes sit inside the thanksgiving, for the psalm&rsquo;s actual last word is Hallelujah. Grace that never issues in obedience has not reached its stated goal; obedience that forgets it began in grace has forgotten its own psalm.`,
  },
];

const APPLICATIONS = [
  {
    color: GREEN,
    title: "Build Your Worship on Recital",
    body: `Psalm 105 teaches praise as rehearsed fact: ten imperatives, then forty verses of story. Rebuild your own worship on the same foundation. When praise feels empty, do not chase a feeling -- recite a history: God&rsquo;s mighty deeds in Scripture (choose a movement: exodus, exile-return, cross and resurrection) and his documented deeds in your own life. Feelings follow facts rehearsed; they rarely lead them.
<br/><br/>
Do it &ldquo;among the peoples&rdquo; as the psalm insists: testimony spoken where others hear -- the family table, the small group, the friend who needs evidence that God still acts. And keep the church&rsquo;s great recitals from becoming background noise: the creed said slowly, the Scripture reading received as the deeds of God being told again, the Supper taken as remembrance in the psalm&rsquo;s full sense -- the mighty works made present to memory until the rememberers become witnesses.
<br/><br/>
<em>Prayer prompt</em>: LORD, I give you thanks and call on your name. I rehearse before you now what you have done -- in your Word, in your church, in my own small history -- and I ask you to turn the recital into praise, and the praise into expectation. Let me seek your presence continually, for my memory leaks and your mercies do not. Amen.`,
  },
  {
    color: GOLD,
    title: "Anchor Yourself to the Thousand-Generation Memory",
    body: `Your security is not the strength of your grip on God but the length of his memory of his own word. Verse 8 is the anchor to throw over every unstable season: he remembers his covenant forever -- and in Christ, the covenant remembered includes you (Galatians 3:29; Luke 1:72-73). Practice covenant arithmetic: four hundred years in Egypt was a short clause in a thousand-generation sentence; your current delay, however long it feels, is being measured by the same clock.
<br/><br/>
Concretely: collect the promises that are yours in the Seed -- no condemnation (Romans 8:1), never forsaken (Hebrews 13:5), kept to the end (Philippians 1:6), raised at the last day (John 6:39-40) -- and read them as covenant, not sentiment: sworn word that God is actively remembering while you sleep. When circumstances argue that the promise has lapsed, answer with the psalm&rsquo;s evidence file: the wandering clan became the nation; the sold slave became the savior of his family; the promise outlasted Egypt, wilderness, and exile -- &ldquo;never dead,&rdquo; as Matthew Henry says, however long dormant.
<br/><br/>
And let the anchor hold your identity, not just your circumstances: you are &ldquo;of little account&rdquo; by the world&rsquo;s count and &ldquo;anointed... untouchable except by his leave&rdquo; by the covenant&rsquo;s (vv. 12-15). Live from the second ledger.`,
  },
  {
    color: PURPLE,
    title: "Read Your Fetters by Joseph's Verbs",
    body: `If you are in a Joseph stretch -- demoted, delayed, faithful and yet in irons, watching the promise grow more implausible by the month -- take the psalm&rsquo;s verbs as your lenses. <em>Sent</em>, not merely sold: ask God to show you the assignment inside the exile; sent ones sometimes travel as sold ones, and the sending is usually visible only in hindsight (Genesis 50:20). <em>Tested</em>, not abandoned: &ldquo;the word of the LORD tested him&rdquo; -- the delay is the promise&rsquo;s crucible, forming the person who can carry the promise&rsquo;s fulfillment without being destroyed by it. Ask what the testing is building; cooperate with it (James 1:2-4).
<br/><br/>
Refuse the two false readings of the fetters: that they disprove the call (Joseph&rsquo;s irons were on the route to the throne, not off it), and that they excuse drift (Joseph in prison was still interpreting dreams and running the cell block with integrity -- faithfulness in the small kingdom while waiting for the large one, Luke 16:10).
<br/><br/>
<em>Prayer prompt</em>: God of Joseph, I cannot yet see &ldquo;sent&rdquo; written over what feels like &ldquo;sold.&rdquo; Test me by your word without letting me despise the testing; keep me faithful in the prison-sized assignments; and in your time, let what you have said come to pass. I trust the Plotter above the plot. Through Christ, delivered up by your definite plan and raised. Amen.`,
  },
  {
    color: TEAL,
    title: "Let Grace Reach Its Goal",
    body: `Finish the psalm&rsquo;s sentence in your own life: brought out with joy... <em>that</em> you might keep his statutes. Check the order first -- if your obedience has become the ladder (performing to stay accepted), climb down: redemption precedes requirement, Egypt before Sinai, the cross before every command that binds you (Ephesians 2:8-10). You obey a rescue already accomplished, or you are not obeying in the psalm&rsquo;s religion at all.
<br/><br/>
Then check the direction -- if your grace has no issue (forgiveness enjoyed, life unchanged), the deliverance has not yet reached its stated goal. Pick the statute you have been deferring -- the reconciliation commanded, the generosity prescribed, the purity required, the Sabbath-rest offered -- and keep it this week <em>as thanksgiving</em>: obedience as doxology, love answering rescue (John 14:15). The psalm&rsquo;s last word stands over both checks: Hallelujah -- even the statutes live inside the praise.
<br/><br/>
And tell someone the whole shape -- rescue, then response -- because it is the most commonly inverted sentence in religion, and Psalm 105 exists to keep it in order: forty-four verses of what God did; one clause of what we do; praise at both ends.`,
  },
];

const data: PsalmGuideData = {
  accent: GREEN,
  heroGradientEnd: "#071507",
  badge: "Psalm 105",
  metaLine: "Historical Psalm &bull; 45 Verses &bull; Twin of Psalm 106",
  title: "He Remembers His Covenant Forever",
  heroIntro: "Israel&rsquo;s history told entirely from God&rsquo;s side -- not one sin of the people mentioned in forty-five verses. The covenant with Abraham drives everything: patriarchs guarded, Joseph sent ahead through fetters and iron, Egypt overturned, the wilderness turned to provision -- because he remembered his holy promise, and brought his people out with singing, that they might keep his statutes.",
  blockquote: "&ldquo;He remembers his covenant forever, the word that he commanded, for a thousand generations... For he remembered his holy promise, and Abraham, his servant.&rdquo;",
  blockquoteRef: "&mdash; Psalm 105:8, 42",
  overviewHeading: "Overview of Psalm 105",
  overviewParagraphs: [
    `Psalm 105 is the first of the Psalter&rsquo;s twin history-psalms, and its editorial choice is its message: forty-five verses of Israel&rsquo;s story with not a single sin of Israel mentioned. Psalm 106, its twin, retells the same years as confession -- &ldquo;both we and our fathers have sinned&rdquo; -- but here the camera stays fixed on God&rsquo;s side, and from that side the history is one unbroken chain of covenant kept. The Psalter prints both ledgers back to back on purpose: an honest record of human failure, and a longer, louder record of divine faithfulness.`,
    `The psalm opens with ten imperatives -- give thanks, call, make known, sing, tell, glory, rejoice, seek, seek, remember -- before a single line of narrative: praise defined as the public recital of God&rsquo;s deeds, aimed &ldquo;among the peoples.&rdquo; Its first fifteen verses had a documented liturgical life as the anthem David appointed when the ark came to Jerusalem (1 Chronicles 16:8-22): at Israel&rsquo;s great new threshold, worship began by telling the whole old story.`,
    `The thesis is verse 8 -- &ldquo;He remembers his covenant forever... for a thousand generations&rdquo; -- and everything after is evidence: the promise of land tracked through the patriarchs&rsquo; vulnerability (&ldquo;few in number... he rebuked kings on their account&rdquo;), through Joseph -- the psalm&rsquo;s providence masterpiece: famine &ldquo;summoned,&rdquo; the sold slave re-described as the &ldquo;sent&rdquo; man, the cost told without varnish (fetters, iron), and the profoundest clause in the psalm: &ldquo;the word of the LORD tested him&rdquo; (v. 19) -- the promise itself as crucible until its fulfillment.`,
    `Egypt and the wilderness follow as covenant enforcement and covenant provision: fruitfulness under oppression, Moses and Aaron &ldquo;sent,&rdquo; eight plagues recited as &ldquo;his signs,&rdquo; the exit &ldquo;with silver and gold,&rdquo; then cloud, fire, quail, heaven&rsquo;s bread, and the rock flowing &ldquo;like a river&rdquo; -- all explained by one memory: &ldquo;for he remembered his holy promise&rdquo; (v. 42). Luke 1:72-73 sings this theology over the manger -- the oath to Abraham remembered in Christ -- and Galatians 3:16, 29 presses it home: the Seed is Christ, and all who are his are heirs of the thousand-generation word.`,
    `The ending reframes everything with a purpose clause: brought out &ldquo;with joy... with singing... <em>that they might keep his statutes</em>. Praise the LORD!&rdquo; (vv. 43-45). Redemption precedes requirement -- Egypt before Sinai, grace before law, always -- and grace has a direction: a freed people freed for obedience, with even the statutes sitting inside the thanksgiving. The psalm&rsquo;s religion in one order: forty-four verses of what God did, one clause of what we do, and Hallelujah at the end.`,
  ],
  keyDetails: KEY_DETAILS,
  videos: VIDEOS,
  themes: THEMES,
  verses: VERSES,
  applications: APPLICATIONS,
  applicationIntro: "How Psalm 105 builds worship on recital, anchors identity to covenant memory, reads fetters by Joseph's verbs, and lets grace reach its stated goal.",
};

export default function Page() {
  return <PsalmGuideTemplate data={data} />;
}
