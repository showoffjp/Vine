"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";

type TabKey =
  | "theology"
  | "lords-prayer"
  | "models"
  | "intercession"
  | "unanswered"
  | "videos";

const TABS: { key: TabKey; label: string }[] = [
  { key: "theology", label: "Theology of Prayer" },
  { key: "lords-prayer", label: "The Lord's Prayer" },
  { key: "models", label: "Models of Prayer" },
  { key: "intercession", label: "Intercessory Prayer" },
  { key: "unanswered", label: "Unanswered Prayer" },
  { key: "videos", label: "Videos" },
];

const THEOLOGY_SECTIONS = [
  {
    id: "what-prayer-is",
    color: BLUE,
    title: "What Prayer Actually Is: Dialogue, Not Monologue",
    ref: "Genesis 18:23-32; Exodus 33:11; James 5:16",
    body: [
      "Prayer is the most misunderstood act in the Christian life. It is widely practiced as a monologue &mdash; a list of requests delivered to a God who receives them in silence &mdash; when the biblical picture is closer to dialogue: two parties, both of whom speak, both of whom listen, in a relationship of genuine mutuality. Abraham bargains with God over Sodom (Genesis 18). Moses speaks to God &ldquo;face to face, as a man speaks to his friend&rdquo; (Exodus 33:11). The psalms are full of argument, complaint, and demand directed at God &mdash; and God does not rebuke the prayers for their directness. He engages them.",
      "The great theologians of prayer have emphasized its relational character. Prayer is not primarily a technique for getting things from God; it is the primary mode of relating to God. Karl Barth called prayer &ldquo;the fundamental act of the Christian life&rdquo; &mdash; not because it produces results but because it is the form in which the human person stands before God in honesty, need, and trust. To pray is to acknowledge the fundamental posture of creature before Creator: dependent, needy, and loved.",
      "This relational understanding of prayer changes what we expect. We do not pray to inform God (he already knows everything) or to convince him (he is not reluctant). We pray because we are invited into the conversation that has been going on from eternity: the Father, Son, and Spirit in eternal communion, who have opened that communion to include us. Prayer is, at its deepest, participation in the divine life.",
    ],
  },
  {
    id: "participation",
    color: GREEN,
    title: "Prayer as Participation in God's Purposes",
    ref: "Matthew 6:10; John 15:7; Revelation 8:3-4",
    body: [
      "One of the most important biblical pictures of prayer is from Revelation 8:3-4: an angel stands at the altar in heaven with a golden censer, and he is given much incense to offer, &ldquo;with the prayers of all the saints.&rdquo; The smoke of the incense rises before God &ldquo;with the prayers of the saints.&rdquo; Then fire is thrown to the earth. Our prayers are not whispered into empty space; they ascend to the very throne of God and are mixed with heavenly incense before being poured back onto the earth as action. The prayers of the saints are instruments of divine governance.",
      "This picture grounds the stunning claim of intercessory prayer: that human prayer participates in the execution of God&rsquo;s purposes in the world. This is not magic, and it does not mean that prayer manipulates God. It means that God, in his sovereignty, has chosen to accomplish certain things through the prayers of his people. Prayer is not a backup plan; it is a primary instrument. Jesus&rsquo;s instruction &ldquo;your kingdom come, your will be done&rdquo; (Matthew 6:10) implies that the kingdom&rsquo;s coming and the will&rsquo;s being done are connected to the asking.",
      "John 15:7 &mdash; &ldquo;If you abide in me, and my words abide in you, ask whatever you wish, and it will be done for you&rdquo; &mdash; ties the effectiveness of prayer to abiding, not to technique. The person who lives in Christ, saturated with his word, will pray what Christ would pray &mdash; and that prayer will be effective because it has been shaped by the very will it is asking for. The secret to effective prayer is not a better method; it is a deeper union.",
    ],
  },
  {
    id: "does-prayer-change-god",
    color: GOLD,
    title: "Does Prayer Change God's Mind?",
    ref: "Exodus 32:14; James 4:2; Romans 8:28",
    body: [
      "This is the hardest theological question in prayer, and it deserves honest engagement. Exodus 32:14 says that &ldquo;the LORD relented from the disaster that he had spoken of bringing on his people&rdquo; after Moses&rsquo;s intercession. Numbers 14 and Amos 7 contain similar passages. The plain reading of the text is that Moses&rsquo;s prayer changed what God did. This is either to be explained away (anthropomorphism, accommodation to human understanding) or taken seriously as genuine divine responsiveness.",
      "Open theism takes it most seriously, arguing that God has a genuine capacity to be moved by prayer &mdash; that the future is partly open, that God has genuine emotions and responses, and that prayer genuinely affects outcomes in a way that a deterministic theology cannot account for. Classic Reformed theology explains the texts as anthropomorphism and insists that God&rsquo;s decrees are eternal and unchangeable, but that prayer is the appointed means by which those decrees are executed. Both views are serious, and the pastoral implications differ.",
      "What can be said with confidence: prayer is not futile. James 4:2 says bluntly, &ldquo;you do not have, because you do not ask.&rdquo; James 5:17 says Elijah&rsquo;s prayer stopped rain for three years. E.M. Bounds, who prayed three hours a day before dawn, insisted that &ldquo;God shapes the world by prayer.&rdquo; Whatever the precise theological mechanics, the biblical witness is clear: prayer is not merely therapeutic self-expression. It is powerful, effective action in the world.",
    ],
  },
  {
    id: "barth-bounds",
    color: PURPLE,
    title: "Barth and Bounds: Two Theological Poles",
    ref: "Matthew 7:7-11; Hebrews 4:16; Philippians 4:6-7",
    body: [
      "E.M. Bounds (1835-1913) represents the practical, intensive tradition of prayer. His books &mdash; Power Through Prayer, The Necessity of Prayer, The Weapon of Prayer &mdash; were written from a lifetime of pre-dawn intercession. His central conviction: the quality and quantity of a church&rsquo;s prayer determines the quality and quantity of its power. &ldquo;The church is looking for better methods; God is looking for better men.&rdquo; Bounds&rsquo; is an activistic theology of prayer &mdash; prayer is warfare, labor, intercession that produces results.",
      "Karl Barth (1886-1968) represents the more contemplative, theological tradition. In his Church Dogmatics, Barth called prayer &ldquo;the primary act of Christian life&rdquo; &mdash; not because it produces results but because it is the form in which the human person acknowledges total dependence on God. For Barth, prayer is not a means of accomplishing our purposes; it is the acknowledgment that we cannot accomplish anything without God. This is not passivity; it is the proper posture of the creature before the Creator.",
      "Philippians 4:6-7 captures the pastoral promise that spans both traditions: &ldquo;Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.&rdquo; The promise is not that every request will be granted but that the one who prays will be guarded &mdash; held, secured, protected by a peace that transcends both circumstances and understanding.",
    ],
  },
];

const LORDS_PRAYER_SECTIONS = [
  {
    id: "our-father",
    color: BLUE,
    title: "\"Our Father\" &mdash; Abba Intimacy",
    ref: "Matthew 6:9; Romans 8:15; Galatians 4:6",
    body: [
      "The opening words of the Lord&rsquo;s Prayer contain the most audacious claim in the theology of prayer: that we may address the Creator of the universe as &ldquo;Father.&rdquo; In first-century Judaism, calling God &ldquo;Father&rdquo; was not unknown &mdash; it appears in the Hebrew Bible &mdash; but it was rare and usually corporate. What was without precedent was Jesus&rsquo;s personal use of &ldquo;Abba&rdquo; (Mark 14:36), the intimate Aramaic address that scholars debate was as informal as the English &ldquo;Daddy&rdquo; or simply &ldquo;Father.&rdquo; Either way, the intimacy is shocking.",
      "Paul tells us in Romans 8:15 and Galatians 4:6 that the Spirit of adoption causes us to cry &ldquo;Abba! Father!&rdquo; This is not a metaphor for a warm feeling; it is a legal and ontological status. Those who are in Christ have been adopted into the family of God &mdash; genuine children, not merely servants with improved status. The &ldquo;our&rdquo; in &ldquo;our Father&rdquo; is equally important: we do not pray as isolated individuals but as members of a family, a people, a community. My prayer is always our prayer.",
      "The Abba intimacy does not eliminate reverence. The prayer immediately moves to &ldquo;who art in heaven&rdquo; &mdash; the God of intimate access is also the transcendent Lord of all creation. The two poles together define the unique character of Christian prayer: we approach the Almighty God of the universe as beloved children who know their Father&rsquo;s voice. Fear is not abolished; it is transformed into reverent love.",
    ],
  },
  {
    id: "hallowed-name",
    color: GREEN,
    title: "\"Hallowed Be Your Name\" &mdash; God-First Prayer",
    ref: "Ezekiel 36:23; Isaiah 6:3; Psalm 145:1-3",
    body: [
      "The first petition of the Lord&rsquo;s Prayer is not for ourselves but for God: that his name may be hallowed &mdash; treated as holy, held in honor, revered. This ordering is deliberate and instructive. Before we ask for anything, we orient ourselves toward God&rsquo;s glory. Before our needs, his honor. The prayer begins where all prayer should begin: with God himself, not with our agenda.",
      "To hallow God&rsquo;s name is to treat him as what he actually is: holy, other, utterly unlike anything else in the universe. The seraphim in Isaiah 6 cry &ldquo;Holy, holy, holy&rdquo; &mdash; the only attribute in Scripture repeated three times for emphasis. When Isaiah encounters this holiness, his first response is awareness of his own uncleanness: &ldquo;Woe is me! For I am lost.&rdquo; Genuine prayer for God&rsquo;s name to be hallowed involves our own humbling before the one whose name we are hallowing.",
      "The petition also looks outward. Ezekiel 36 speaks of God acting for the sake of his holy name &mdash; restoring Israel not because they deserve it but so that the nations will know that he is holy. To pray &ldquo;hallowed be your name&rdquo; is to pray that God&rsquo;s reputation in the world will match his actual character: that the way the world sees God will be increasingly accurate. This is a missionary prayer &mdash; for the fame of God among all peoples.",
    ],
  },
  {
    id: "kingdom-come",
    color: PURPLE,
    title: "\"Your Kingdom Come\" &mdash; The Primary Christian Ask",
    ref: "Matthew 12:28; Luke 17:20-21; Revelation 11:15",
    body: [
      "&ldquo;Your kingdom come&rdquo; is the central petition of the Lord&rsquo;s Prayer and arguably the most important sentence a Christian can pray. To pray for the kingdom is to align one&rsquo;s deepest desire with God&rsquo;s fundamental purpose in history: the renewal of all things, the establishment of justice, the defeat of death and evil, the restoration of the creation to the worship of its Creator. This is not a small prayer; it is the prayer that contains all other prayers.",
      "The kingdom of God &mdash; God&rsquo;s reign, his royal rule, his governing presence &mdash; was the center of Jesus&rsquo;s preaching (&ldquo;The kingdom of God is at hand&rdquo;). It is already present in the person and work of Jesus (&ldquo;the kingdom of God is in the midst of you,&rdquo; Luke 17:21) and not yet fully consummated (Revelation 11:15: &ldquo;The kingdom of the world has become the kingdom of our Lord and of his Christ&rdquo;). We pray &ldquo;your kingdom come&rdquo; precisely because it has not yet fully come &mdash; the tension between the already and the not yet is the eschatological situation in which all Christian prayer is offered.",
      "To pray &ldquo;your kingdom come&rdquo; is also to align oneself with kingdom values and kingdom work. One cannot sincerely pray for the coming of a just kingdom while being indifferent to injustice. One cannot pray for the kingdom of shalom while making peace with one&rsquo;s own private violence. The prayer calls us to conformity with what we are asking for.",
    ],
  },
  {
    id: "give-us",
    color: GOLD,
    title: "\"Give Us This Day\" &mdash; Dependence and Daily Need",
    ref: "Matthew 6:11; Exodus 16:4; Proverbs 30:8-9",
    body: [
      "The petition for daily bread is the most practical in the Lord&rsquo;s Prayer and the most easily overlooked. In a world of refrigerators, grocery stores, and pantries, the idea of asking for daily bread &mdash; enough for today &mdash; feels archaic. But the prayer is not primarily about the inability to store food; it is about a posture of dependence. To ask for bread today is to acknowledge that every meal, every day of sustenance, every ordinary provision of life is a gift from the hand of God.",
      "The Exodus parallel is instructive: God gave manna one day at a time, deliberately. Those who tried to store extra found it rotted. The daily provision was not a logistical arrangement; it was a spiritual formation &mdash; training an entire people in the discipline of daily dependence. &ldquo;Your kingdom come, your will be done&rdquo; concerns the cosmic and eternal; &ldquo;give us this day our daily bread&rdquo; concerns the ordinary and immediate. Both are prayer. The person who prays for the kingdom but refuses to ask for daily bread has divided the sacred from the secular; Jesus refuses the division.",
      "Proverbs 30:8-9 (Agur&rsquo;s prayer) expresses the spirit exactly: &ldquo;Give me neither poverty nor riches; feed me with the food that is needful for me, lest I be full and deny you and say, &lsquo;Who is the LORD?&rsquo; or lest I be poor and steal.&rdquo; The request is for enough &mdash; daily enough, sufficient enough &mdash; which is the posture of trust.",
    ],
  },
  {
    id: "forgive-us",
    color: TEAL,
    title: "\"Forgive Us Our Debts\" &mdash; Forgiveness Received and Extended",
    ref: "Matthew 6:12, 14-15; Luke 6:37; Colossians 3:13",
    body: [
      "The debt metaphor for sin is striking. Sin is not merely a rule violation or a relational wound; it is something owed, something that must be accounted for, something that creates an obligation that cannot be self-discharged. The prayer asks for forgiveness &mdash; the release of the debt, the cancellation of the obligation &mdash; which only the one who is owed can grant.",
      "What makes this petition uniquely demanding is its conditional: &ldquo;as we also have forgiven our debtors.&rdquo; Jesus amplifies this with unusual directness immediately after the prayer: &ldquo;For if you forgive others their trespasses, your heavenly Father will also forgive you, but if you do not forgive others their trespasses, neither will your Father forgive your trespasses&rdquo; (Matthew 6:14-15). This is not a works-righteousness framework; it is a recognition that the person who has truly received forgiveness is transformed by it &mdash; and the evidence of that transformation is a new capacity to extend forgiveness to others.",
      "The parable of the unforgiving servant (Matthew 18:21-35) dramatizes the point: the servant who has been forgiven an unpayable debt and then throttles a fellow servant who owes him a comparatively trivial amount has not actually internalized the forgiveness he received. The failure to forgive reveals that the gift was received without transformation. To pray &ldquo;forgive us as we forgive&rdquo; is to invite an uncomfortable audit of one&rsquo;s own forgiveness-extending practice.",
    ],
  },
  {
    id: "lead-us-not",
    color: BLUE,
    title: "\"Lead Us Not into Temptation\" &mdash; Doxology",
    ref: "Matthew 6:13; 1 Corinthians 10:13; James 1:13-14",
    body: [
      "The sixth petition has puzzled interpreters for two millennia: does God lead people into temptation? James 1:13 seems to deny it explicitly: &ldquo;God cannot be tempted with evil, and he himself tempts no one.&rdquo; The Greek word peirasmos can mean both &ldquo;temptation&rdquo; (an enticement to sin) and &ldquo;testing&rdquo; or &ldquo;trial&rdquo; (an ordeal that proves character). The petition is probably best understood as: &ldquo;Do not bring us into the place of testing, but deliver us from the evil one.&rdquo; It is a prayer for protection from spiritual danger &mdash; both the trials that might overwhelm us and the adversary who exploits our weakness.",
      "The practical wisdom of this petition is its realism about human fragility. We are not spiritually invulnerable. We overestimate our capacity to resist and underestimate the severity of temptation until we are in the middle of it. The prayer for protection is not cowardice; it is wisdom &mdash; the recognition that walking away from danger is often more faithful than walking into it confidently. &ldquo;Do not put the Lord your God to the test&rdquo; (Matthew 4:7) applies to ourselves: do not deliberately enter situations where you know you will fail.",
      "The traditional doxology &mdash; &ldquo;For yours is the kingdom, the power, and the glory forever&rdquo; &mdash; does not appear in the earliest manuscripts of Matthew but reflects the church&rsquo;s instinct to end the prayer where it began: with God. The kingdom (sovereignty), the power (ability), and the glory (honor) all belong to him. The prayer begins and ends with God &mdash; Father and King &mdash; and our needs are held within that framing from first word to last.",
    ],
  },
];

const MODELS_SECTIONS = [
  {
    id: "acts",
    color: BLUE,
    title: "ACTS: Adoration, Confession, Thanksgiving, Supplication",
    ref: "Psalm 95:1-7; 1 John 1:9; Philippians 4:6; Matthew 7:7-8",
    body: [
      "ACTS is the most widely taught prayer framework in evangelical Christianity and has formed the prayer habits of generations of believers. Its four movements correspond to movements of the human heart before God: Adoration &mdash; praising God for who he is (not merely what he has done); Confession &mdash; honest acknowledgment of sin and need for forgiveness; Thanksgiving &mdash; gratitude for specific blessings received; Supplication &mdash; asking for specific needs, both personal and intercessory.",
      "The framework&rsquo;s strength is its God-centered beginning: Adoration, not Supplication, comes first. This trains the person who prays to orient themselves toward God before presenting their requests &mdash; to encounter him as Lord before encountering him as provider. The weakness of the framework is that it can become mechanical &mdash; a checklist to be completed rather than a living encounter. Used with genuine attention, however, ACTS produces depth and balance; used mechanically, it produces boredom.",
      "The practical way to use ACTS: spend time in each quadrant, allowing each to be genuine rather than perfunctory. Adoration that is genuine takes time &mdash; the mind must move from distraction to attention, from the surface of life to the face of God. Confession that is genuine names specific things, not vague categories. Thanksgiving that is genuine remembers specific gifts. Supplication that is genuine includes both our own needs and the needs of others &mdash; the fully formed intercessor brings others before God as much as themselves.",
    ],
  },
  {
    id: "pray",
    color: GREEN,
    title: "PRAY: Praise, Repent, Ask, Yield",
    ref: "Isaiah 6:1-8; 1 Kings 8:47-50; Romans 12:1",
    body: [
      "The PRAY acronym offers a slightly different movement than ACTS, with a distinctive final step: Yield. Praise &mdash; approaching God with worship and acknowledgment of his character; Repent &mdash; turning from specific sins with genuine intention to change; Ask &mdash; presenting petitions for self and others; Yield &mdash; surrendering the outcome and one&rsquo;s own will to God&rsquo;s purposes.",
      "The Yield step is often the most challenging and the most important. It distinguishes Christian prayer from magic: prayer is not a technique for bending God to our will but a process of having our will increasingly bent toward his. Isaiah 6 models the arc: encounter with God&rsquo;s holiness (Praise), confession of unworthiness (Repent), receiving cleansing, hearing the call and saying &ldquo;Here I am! Send me&rdquo; (Yield). The yielded prayer does not demand a specific outcome; it asks with open hands.",
      "Gethsemane is the supreme model of yielded prayer: &ldquo;Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done&rdquo; (Luke 22:42). Jesus did not pretend to have no preference; he stated it honestly and then subordinated it to the Father&rsquo;s will. This is the template for all Christian prayer that has reached maturity: genuine desire expressed, genuinely surrendered. The yield is not resignation; it is trust.",
    ],
  },
  {
    id: "extemporaneous-liturgical",
    color: GOLD,
    title: "Extemporaneous vs. Liturgical Prayer",
    ref: "1 Corinthians 14:15; Colossians 4:2; Acts 4:24-30",
    body: [
      "The Reformation produced a deep suspicion of written or liturgical prayer: if prayer must come from the heart, can a prayer someone else wrote truly be your own? This produced the strongly extemporaneous tradition of evangelical and charismatic prayer &mdash; praying &ldquo;in the Spirit,&rdquo; spontaneously, personally, without script. The strength of this tradition is its intimacy and immediacy; the weakness is that it often circles the same few concerns and vocabulary, and it depends entirely on inspiration rather than formation.",
      "The liturgical tradition argues the opposite: written prayers, inherited prayers, the prayers of the saints before us, are not substitutes for genuine encounter with God but schoolmasters &mdash; teachers of prayer that train us to pray what we might not have thought to pray on our own. The Lord&rsquo;s Prayer, the Book of Common Prayer, the ancient collects, the psalms as prayer: these are the grammar of a language that we learn by speaking before we fully understand. C.S. Lewis argued that using set forms of prayer was like putting on a costume until it became one&rsquo;s own skin.",
      "Acts 4:24-30 gives a remarkable example of early church prayer that weaves together Scripture (Psalm 2), theological reflection, and specific petition &mdash; a structured, Scripturally saturated prayer that was nonetheless spontaneous. The great tradition holds both: liturgical forms that educate the soul, and the freedom to depart from them when the Spirit moves. The person who prays only extempore risks impoverishment; the person who only reads prayers risks formalism. Both need the other.",
    ],
  },
  {
    id: "jesus-prayer",
    color: PURPLE,
    title: "The Jesus Prayer and Ceaseless Prayer",
    ref: "Luke 18:9-14; 1 Thessalonians 5:17; Romans 10:13",
    body: [
      "The Jesus Prayer &mdash; &ldquo;Lord Jesus Christ, Son of God, have mercy on me, a sinner&rdquo; &mdash; is the Eastern Christian tradition&rsquo;s answer to 1 Thessalonians 5:17: &ldquo;pray without ceasing.&rdquo; Originating in the Desert Fathers and developed in the Hesychast tradition (particularly associated with Gregory Palamas), the prayer is meant to be breathed continuously until it becomes part of the rhythm of life itself. The Russian classic The Way of a Pilgrim traces one man&rsquo;s journey into the practice of the unceasing Jesus Prayer.",
      "The prayer distills the parable of the Pharisee and the tax collector (Luke 18:9-14). The Pharisee prays a self-congratulatory review of his accomplishments; the tax collector will not even raise his eyes to heaven but beats his breast and says &ldquo;God, be merciful to me, a sinner.&rdquo; Jesus says the tax collector went home justified. The Jesus Prayer is that tax collector&rsquo;s prayer given a permanent home in the Christian&rsquo;s breath: Lord Jesus Christ (acclamation), Son of God (theology), have mercy on me, a sinner (petition and self-knowledge).",
      "The aspiration toward ceaseless prayer &mdash; which Paul commands and which the tradition takes seriously &mdash; does not mean that the Christian is always in formal prayer. It means that the orientation of the soul is always toward God, that the background radiation of the heart is awareness of and attentiveness to God&rsquo;s presence. Brother Lawrence&rsquo;s Practice of the Presence of God describes this: washing pots in the monastery kitchen with the same awareness of God as during high liturgy. Ceaseless prayer is the integration of prayer and life until the distinction dissolves.",
    ],
  },
];

const INTERCESSION_SECTIONS = [
  {
    id: "how-intercession-works",
    color: BLUE,
    title: "How Intercession Works Theologically",
    ref: "Romans 8:26-27; 1 Timothy 2:1-4; Revelation 8:3-4",
    body: [
      "Intercessory prayer &mdash; praying for others &mdash; raises the sharpest theological questions about prayer&rsquo;s mechanics. If God is sovereign and knows what people need before they ask, why does intercessory prayer matter? The simplest answer from the text is that God has ordained prayer as the means by which certain of his purposes are accomplished in the world. He does not merely know what people need; he has chosen to provide for those needs through the prayers of his people.",
      "Romans 8:26-27 adds a dimension that protects intercession from mere human effort: the Spirit himself intercedes for us &ldquo;with groanings too deep for words.&rdquo; The intercessor is not alone; the Spirit prays through the intercessor, aligning the prayer with the will of God &ldquo;according to the will of God.&rdquo; The effectiveness of intercession, in this framing, is not primarily a function of the pray-er&rsquo;s eloquence or spiritual power; it is a function of the Spirit&rsquo;s participation in the prayer. The intercessor is the vessel; the Spirit is the agent.",
      "1 Timothy 2:1-4 gives the breadth of intercession: &ldquo;I urge that supplications, prayers, intercessions, and thanksgivings be made for all people, for kings and all who are in high positions...&rdquo; The scope of intercession is universal &mdash; all people, including rulers. The motivation is both missional (God desires all people to be saved) and practical (peaceful societies are better environments for the gospel). Intercession is not an optional supplement to Christian life; it is a primary form of Christian civic engagement.",
    ],
  },
  {
    id: "standing-in-the-gap",
    color: GREEN,
    title: "Standing in the Gap",
    ref: "Ezekiel 22:30; Genesis 18:23-32; Job 1:8",
    body: [
      "Ezekiel 22:30 is one of the most haunting verses about intercession in the entire Bible: &ldquo;And I sought for a man among them who should build up the wall and stand in the breach before me for the land, that I should not destroy it, but I found none.&rdquo; The image is of a city wall with a breach &mdash; an opening through which destruction can enter &mdash; and God looking for a human intercessor to stand in that breach on behalf of the land. The implication is stunning: in the absence of an intercessor, judgment came. The presence of a human person willing to stand between God and a people makes a difference.",
      "Abraham is the prototype: he approaches God over Sodom and intercedes with astonishing directness &mdash; &ldquo;Shall not the Judge of all the earth do what is just?&rdquo; &mdash; and negotiates the number of righteous required for the city to be spared (Genesis 18:23-32). God entertains the negotiation, reducing from fifty to ten. This is not Abraham manipulating God; it is God honoring Abraham&rsquo;s engagement with the moral seriousness of the situation. Intercession at this level is not polite petition; it is costly identification with those prayed for.",
      "Moses in Exodus 32 is perhaps the supreme intercessor: after the golden calf, when God says he will destroy Israel and make Moses into a great nation, Moses refuses the offer. He identifies himself with the people, argues from God&rsquo;s own reputation, and refuses to move until Israel is forgiven. &ldquo;Blot me out of your book that you have written&rdquo; (Exodus 32:32). This is intercession at the cost of oneself &mdash; the posture that anticipates the One who would stand in the ultimate gap.",
    ],
  },
  {
    id: "praying-for-enemies",
    color: GOLD,
    title: "Praying for Enemies and Healing Prayer",
    ref: "Matthew 5:44; Luke 23:34; James 5:14-15",
    body: [
      "Matthew 5:44 is one of the most radical commands in the Sermon on the Mount: &ldquo;Love your enemies and pray for those who persecute you.&rdquo; The command to pray for enemies is not primarily a discipline of self-improvement; it is a recognition of something that the practice of intercession teaches: that it is very difficult to maintain hatred for someone you are genuinely praying for. Intercession for enemies does not guarantee that they will change; it tends to change the one who prays.",
      "Jesus modeled this from the cross: &ldquo;Father, forgive them, for they know not what they do&rdquo; (Luke 23:34). Stephen, being stoned, echoed it: &ldquo;Lord, do not hold this sin against them&rdquo; (Acts 7:60). The early church understood enemy-intercession not as a counsel of perfection for spiritual elites but as a mark of the new humanity created in Christ. The capacity to pray for those who harm us is evidence that the love of God has genuinely entered the heart.",
      "Healing prayer (James 5:14-15) is a form of intercession that has sometimes divided the church: is miraculous healing normative? Has it ceased? The text does not allow these questions to suppress the practice. James is not describing an occasional apostolic miracle; he is describing a normal practice of the local church: elders pray over the sick, anointing with oil, &ldquo;and the prayer of faith will save the one who is sick.&rdquo; The church that never prays for healing has moved beyond the text&rsquo;s expectations. The church that is surprised when healing does not always occur has not read the rest of the New Testament carefully enough.",
    ],
  },
  {
    id: "daniel-prayer",
    color: TEAL,
    title: "Daniel's 21-Day Prayer and the Spirit's Intercession",
    ref: "Daniel 10:1-14; Romans 8:26-27; Ephesians 6:18",
    body: [
      "Daniel 10 gives one of the most striking accounts of intercessory prayer in the Bible. Daniel mourns and prays and fasts for three weeks with no visible answer. Then the angelic messenger appears and tells him: &ldquo;Fear not, Daniel, for from the first day that you set your heart to understand and humbled yourself before your God, your words have been heard.&rdquo; The answer came on the first day of Daniel&rsquo;s prayer; the angelic messenger was opposed by &ldquo;the prince of the kingdom of Persia&rdquo; for twenty-one days and only arrived when Michael came to help.",
      "This passage reveals a dimension of prayer that is otherwise invisible: the relationship between human prayer, demonic resistance, and angelic response. Daniel&rsquo;s intercession was not unanswered; it was engaged in cosmic conflict. His persistence was not wearing God down; it was holding open the channel of divine action in the face of spiritual opposition. The implication for intercessors is clear: apparent non-response to prayer does not necessarily mean the prayer is unheard or ineffective. Something may be happening that is not yet visible.",
      "Romans 8:26-27 takes this further into the Trinity itself: &ldquo;Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.&rdquo; Intercession is not a solitary human effort; it is a participation in the Spirit&rsquo;s own intercession before the Father, in the name of the Son. The intercessor who feels weak, confused, or inarticulate is in precisely the right position: the Spirit prays in and through that weakness. The deepest intercession is often beyond words.",
    ],
  },
];

const UNANSWERED_SECTIONS = [
  {
    id: "gods-silence",
    color: BLUE,
    title: "When God Seems Silent",
    ref: "Psalm 22:1-2; Lamentations 3:8; Habakkuk 1:2",
    body: [
      "The hardest question in the Christian life is not whether God exists but whether he listens. The experience of praying earnestly, persistently, faithfully &mdash; and hearing nothing &mdash; is among the most spiritually destabilizing things a Christian can face. Psalm 22 opens with it: &ldquo;My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?&rdquo; This is not the prayer of the faithless; it is the prayer of the desperate believer who has not given up &mdash; who is still addressing God, still calling God &ldquo;my God,&rdquo; even in the silence.",
      "The book of Lamentations is five chapters of sustained complaint to a God who appears not to answer: &ldquo;Though I call and cry for help, he shuts out my prayer&rdquo; (3:8). Habakkuk opens with the same: &ldquo;O LORD, how long shall I cry for help, and you will not hear?&rdquo; (1:2). These are canonical texts. They are in the Bible not as aberrations of faith but as authentic expressions of it. The God of Scripture is not offended by the prayer of complaint; he has canonized it.",
      "The spiritual director who tells the person in the silence that they must be doing something wrong, or that they need more faith, is offering a theology the Bible does not support. The silence of God is a well-attested biblical experience. It does not mean God is absent; it may mean he is present in a way that requires a different kind of attention than we have been offering. Waiting on God &mdash; the biblical concept of hope as active, patient expectation &mdash; is itself a form of prayer.",
    ],
  },
  {
    id: "job-complaint",
    color: GREEN,
    title: "Job's Complaint and the Legitimacy of Lament",
    ref: "Job 23:3-9; Job 40:8; Job 42:7-8",
    body: [
      "Job&rsquo;s three friends represent the most common pastoral response to suffering: it must be your fault. They have a coherent theology of divine justice &mdash; the righteous prosper, the wicked suffer &mdash; and they apply it to Job with relentless logic. By their theology, Job&rsquo;s suffering proves his sin. Job refuses their conclusion because he knows his own integrity, and he does what they will not: he takes his complaint directly to God.",
      "Job&rsquo;s speeches are among the most raw and honest in the entire Bible. He wants to argue his case before God (Job 23:3-9), but he cannot find him. He accuses God of indifference and injustice. He refuses to pretend piety he does not feel. And at the end of the book, God says something stunning to the three friends who offered orthodox theology: &ldquo;You have not spoken of me what is right, as my servant Job has&rdquo; (Job 42:7). God vindicates Job&rsquo;s honest complaint over the friends&rsquo; pious theological rationalizations.",
      "The implication for prayer is profound: God prefers honest protest to dishonest piety. The person who brings their real despair, real anger, and real confusion to God is doing more faithful theology than the person who says the right spiritual words while feeling something entirely different. Lament &mdash; structured, directed, honest complaint to God &mdash; is one of the most under-practiced spiritual disciplines in contemporary Christianity, and one of the most needed.",
    ],
  },
  {
    id: "pauls-thorn",
    color: GOLD,
    title: "Paul's Thorn and Three Answers",
    ref: "2 Corinthians 12:7-10; Matthew 26:39; Hebrews 5:7-8",
    body: [
      "Paul prayed three times for the removal of his thorn in the flesh &mdash; whatever it was (scholars have suggested chronic illness, spiritual opposition, a persistent physical ailment, recurring temptation). God&rsquo;s answer was not yes. It was: &ldquo;My grace is sufficient for you, for my power is made perfect in weakness&rdquo; (2 Corinthians 12:9). The unanswered prayer became the location of a deeper answer: not the removal of the weakness but the sufficiency of grace within it, and the discovery that the weakness itself was the condition for a divine power that health and strength cannot access.",
      "The tradition of prayer speaks of three answers to prayer: yes, no, and wait. The &ldquo;no&rdquo; that God gave Paul was not indifference or inability; it was a specific answer, with a specific reason, oriented toward a specific good that removal of the thorn would have prevented. Paul&rsquo;s response is the mature response to the &ldquo;no&rdquo;: &ldquo;Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.&rdquo; He receives the no and is transformed by it.",
      "Gethsemane (Matthew 26:39) is the supreme model: &ldquo;Father, if it be possible, let this cup pass from me; nevertheless, not as I will, but as you will.&rdquo; Philip Yancey, in his book Prayer (2006), argues that Gethsemane teaches us that the &ldquo;no&rdquo; of God is not the end of prayer but the place where prayer reaches its deepest form: the surrender of one&rsquo;s own will to the Father&rsquo;s, held in the trust that the Father&rsquo;s will is ultimately good even when it cannot currently be seen as good.",
    ],
  },
  {
    id: "yancey-prayer",
    color: PURPLE,
    title: "Philip Yancey on Prayer and Persistence",
    ref: "Luke 18:1-8; Romans 8:28; Isaiah 55:8-9",
    body: [
      "Philip Yancey&rsquo;s Prayer: Does It Make Any Difference? (2006) is among the most honest and searching books on prayer written for a popular audience. Yancey does not pretend that prayer is easy or that the questions it raises are simple. He begins with the questions: Does God hear? Does it matter? Why do some prayers seem answered and others not? And he works through the whole terrain of prayer &mdash; the biblical witness, the theological tradition, the neuroscience, the pastoral testimonies &mdash; with the same honesty he brings to his other books on suffering and faith.",
      "Yancey&rsquo;s central insight is that prayer is more about relationship than about outcomes &mdash; that the person who prays is changed by prayer regardless of whether the specific request is granted. He also takes seriously the problem of unanswered prayer without explaining it away: some of his friends prayed for years for healing that never came. He does not offer them a theology that makes their grief a mistake; he sits with the mystery while refusing to abandon the practice.",
      "Luke 18:1-8, the parable of the persistent widow, is Jesus&rsquo;s own answer to the problem of apparently unanswered prayer. He tells the parable specifically so that his disciples should &ldquo;always pray and not give up.&rdquo; The unjust judge who finally grants the widow&rsquo;s request is not a model for God; he is a contrast. If even an unjust judge yields to persistence, how much more will a just God who loves his children answer those who cry to him day and night? The point is not a mechanical persistence that eventually wears God down; it is the persistence of faith that keeps showing up even when no answer has yet come.",
    ],
  },
];

const VIDEOS = [
  {
    videoId: "CZu3PrBHPuU",
    title: "Tim Keller on Prayer",
    description:
      "Tim Keller on the theology and practice of prayer &mdash; why prayer is both the hardest and most essential discipline of the Christian life, and how the gospel transforms what we ask for.",
  },
  {
    videoId: "0IDvavdMuoE",
    title: "N.T. Wright on the Lord's Prayer",
    description:
      "N.T. Wright unpacks the Lord&rsquo;s Prayer phrase by phrase, showing how each petition is embedded in the story of Israel and the coming of God&rsquo;s kingdom in Jesus.",
  },
  {
    videoId: "TkZFfVOjBqE",
    title: "E.M. Bounds and the Classic on Prayer",
    description:
      "An exploration of E.M. Bounds&rsquo;s theology of prayer &mdash; his insistence that prayer is labor, warfare, and the primary work of the church &mdash; drawn from his classic writings on prayer.",
  },
];

export default function ChristianPrayerGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("theology");
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  const renderSections = (
    sections: {
      id: string;
      color: string;
      title: string;
      ref: string;
      body: string[];
    }[]
  ) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {sections.map((sec) => (
        <div
          key={sec.id}
          style={{
            background: CARD,
            border: `1px solid ${openSection === sec.id ? sec.color + "55" : BORDER}`,
            borderRadius: 14,
            overflow: "hidden",
            transition: "border-color 0.2s",
          }}
        >
          <button
            type="button"
            onClick={() => toggleSection(sec.id)}
            style={{
              width: "100%",
              padding: "20px 24px",
              cursor: "pointer",
              textAlign: "left",
              background: "transparent",
              border: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  color: sec.color,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                {sec.ref}
              </div>
              <div
                style={{
                  color: TEXT,
                  fontSize: 16,
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
                dangerouslySetInnerHTML={{ __html: sec.title }}
              />
            </div>
            <div
              style={{
                color: MUTED,
                fontSize: 20,
                flexShrink: 0,
                transform: openSection === sec.id ? "rotate(180deg)" : "none",
                transition: "transform 0.2s",
              }}
            >
              &#8964;
            </div>
          </button>
          {openSection === sec.id && (
            <div
              style={{
                padding: "0 24px 24px",
                borderTop: `1px solid ${BORDER}`,
              }}
            >
              {sec.body.map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: i === 0 ? TEXT : MUTED,
                    fontSize: 15,
                    lineHeight: 1.85,
                    marginTop: 16,
                    marginBottom: 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(160deg, #0a0a1a 0%, ${BG} 60%)`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "64px 20px 56px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: `${BLUE}22`,
              border: `1px solid ${BLUE}44`,
              borderRadius: 24,
              padding: "5px 16px",
              color: BLUE,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Lord, Teach Us to Pray &mdash; Luke 11:1
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Christian Prayer:
            <br />
            <span style={{ color: BLUE }}>A Deep Theology of Asking</span>
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 620,
              margin: "0 auto 32px",
            }}
          >
            What prayer actually is, the Lord&rsquo;s Prayer phrase by phrase, models for
            structured and spontaneous prayer, the mystery of intercession, and what to
            do when God seems silent.
          </p>
          <blockquote
            style={{
              background: `${BLUE}12`,
              border: `1px solid ${BLUE}30`,
              borderRadius: 12,
              padding: "20px 28px",
              maxWidth: 560,
              margin: "0 auto",
              textAlign: "left",
            }}
          >
            <p
              style={{
                color: TEXT,
                fontSize: 15,
                lineHeight: 1.75,
                margin: "0 0 10px",
                fontStyle: "italic",
              }}
            >
              &ldquo;Prayer is the primary act of the Christian life &mdash; not the
              preliminary warming-up for the real business, but the real business
              itself.&rdquo;
            </p>
            <p
              style={{
                color: BLUE,
                fontSize: 12,
                fontWeight: 700,
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Karl Barth
            </p>
          </blockquote>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 80px" }}>
        {/* Tab Bar */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 32,
            background: CARD,
            borderRadius: 10,
            padding: 4,
            flexWrap: "wrap",
          }}
        >
          {TABS.map((t) => (
            <button
              type="button"
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.key ? BLUE : "transparent",
                color: activeTab === t.key ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: Theology of Prayer */}
        {activeTab === "theology" && (
          <div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: TEXT,
                marginBottom: 8,
              }}
            >
              Theology of Prayer
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              What prayer actually is, prayer as participation in God&rsquo;s purposes,
              does prayer change God&rsquo;s mind, E.M. Bounds, and Barth on prayer as the
              primary Christian act.
            </p>
            {renderSections(THEOLOGY_SECTIONS)}
          </div>
        )}

        {/* Tab: The Lord's Prayer */}
        {activeTab === "lords-prayer" && (
          <div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: TEXT,
                marginBottom: 8,
              }}
            >
              The Lord&rsquo;s Prayer: Phrase by Phrase
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              A detailed exposition of the Lord&rsquo;s Prayer &mdash; from Abba intimacy to
              doxology &mdash; as the template for all Christian prayer.
            </p>
            {renderSections(LORDS_PRAYER_SECTIONS)}
          </div>
        )}

        {/* Tab: Models of Prayer */}
        {activeTab === "models" && (
          <div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: TEXT,
                marginBottom: 8,
              }}
            >
              Models of Prayer
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              ACTS, PRAY, extemporaneous vs. liturgical prayer, and the Jesus Prayer as
              a path to ceaseless communion with God.
            </p>
            {renderSections(MODELS_SECTIONS)}
          </div>
        )}

        {/* Tab: Intercessory Prayer */}
        {activeTab === "intercession" && (
          <div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: TEXT,
                marginBottom: 8,
              }}
            >
              Intercessory Prayer
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              How intercession works theologically, standing in the gap, praying for
              enemies, Daniel&rsquo;s 21-day prayer, and the Spirit&rsquo;s intercession.
            </p>
            {renderSections(INTERCESSION_SECTIONS)}
          </div>
        )}

        {/* Tab: Unanswered Prayer */}
        {activeTab === "unanswered" && (
          <div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: TEXT,
                marginBottom: 8,
              }}
            >
              Unanswered Prayer
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              When God seems silent, Job&rsquo;s complaint, Paul&rsquo;s thorn, Gethsemane
              as model, the three answers, and Philip Yancey on persisting in prayer.
            </p>
            {renderSections(UNANSWERED_SECTIONS)}
          </div>
        )}

        {/* Tab: Videos */}
        {activeTab === "videos" && (
          <div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: TEXT,
                marginBottom: 8,
              }}
            >
              Video Teaching on Prayer
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              Tim Keller, N.T. Wright, and E.M. Bounds on the theology and practice
              of Christian prayer.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {VIDEOS.map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "16px 20px" }}>
                    <h4
                      style={{
                        color: BLUE,
                        fontWeight: 700,
                        fontSize: 16,
                        marginBottom: 8,
                      }}
                    >
                      {v.title}
                    </h4>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                      dangerouslySetInnerHTML={{ __html: v.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing callout */}
        <div
          style={{
            background: `linear-gradient(135deg, ${BLUE}15 0%, ${PURPLE}15 100%)`,
            border: `1px solid ${BLUE}30`,
            borderRadius: 16,
            padding: "40px 36px",
            textAlign: "center",
            marginTop: 48,
          }}
        >
          <h3
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: TEXT,
              marginBottom: 14,
            }}
          >
            Come as You Are
          </h3>
          <p
            style={{
              color: MUTED,
              fontSize: 15,
              lineHeight: 1.85,
              maxWidth: 600,
              margin: "0 auto 20px",
            }}
          >
            You do not need to have your theology of prayer fully worked out before
            you pray. The disciples did not either &mdash; they simply asked, &ldquo;Lord,
            teach us.&rdquo; That request is itself the first prayer. Come as you are,
            bring what you have, and trust that the one who teaches prayer will
            also teach the one who prays.
          </p>
          <div
            style={{
              display: "inline-block",
              background: BG,
              border: `1px solid ${GOLD}30`,
              borderRadius: 10,
              padding: "12px 24px",
              color: GOLD,
              fontSize: 14,
              fontStyle: "italic",
            }}
          >
            &ldquo;Ask, and it will be given to you; seek, and you will find.&rdquo; &mdash; Matthew 7:7
          </div>
        </div>
      </div>
    </div>
  );
}
