"use client";
import TabbedGuideTemplate, { TABBED_COLORS, type TabbedGuideData } from "@/components/TabbedGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = TABBED_COLORS;

const overviewBlocks = [
  {
    heading: "The Grand Finale of the Psalter",
    body: "Psalm 150 is the climax and crowning doxology of the entire book of Psalms. The long and varied journey of the Psalter &mdash; through lament and complaint, thanksgiving and praise, wisdom and royal hope &mdash; resolves at last into pure, unbroken, overflowing praise. Every word of this final psalm is praise; there is no petition, no complaint, no instruction, only the summons to worship the LORD. It is the last of the five &lsquo;Hallelujah&rsquo; psalms (146&ndash;150) that conclude the Psalter, and it functions as the doxology not merely of the fifth book but of all 150 psalms together. Whatever the believer has carried into the Psalms &mdash; sorrow, fear, gratitude, longing &mdash; is here gathered up and transformed into a single, glorious shout of praise that draws in all creation.",
  },
  {
    heading: "Where, Why, How, and Who",
    body: "Psalm 150 is beautifully structured around four questions about praise. It tells us WHERE to praise: &lsquo;Praise God in his sanctuary; praise him in his mighty heavens&rsquo; (150:1) &mdash; both the earthly temple and the cosmic temple of the skies. It tells us WHY to praise: &lsquo;Praise him for his mighty deeds; praise him according to his excellent greatness&rsquo; (150:2) &mdash; for what he has done and for who he is. It tells us HOW to praise: with the full temple orchestra &mdash; trumpet, lute, harp, tambourine and dance, strings and pipe, sounding and clashing cymbals (150:3&ndash;5). And it tells us WHO should praise: &lsquo;Let everything that has breath praise the LORD!&rsquo; (150:6). From the place to the reason to the manner to the universal call, the psalm is a complete vision of worship.",
  },
  {
    heading: "The Ten-Fold &lsquo;Praise Him&rsquo;",
    body: "At the heart of Psalm 150 is a deliberate and mounting repetition. The word &lsquo;praise&rsquo; (Hebrew hallelu) rings out again and again &mdash; ten times as a direct imperative, &lsquo;praise him,&rsquo; and thirteen times in all when the framing &lsquo;Hallelujahs&rsquo; are counted. This is not careless repetition but an artful crescendo, each &lsquo;praise him&rsquo; building upon the last until the whole psalm becomes a rising tide of worship. The hammering refrain leaves no room for anything but praise; it sweeps the reader up into its momentum. By the time we reach the final &lsquo;Let everything that has breath praise the LORD,&rsquo; the repeated summons has become irresistible, and all creation is gathered into the song.",
  },
  {
    heading: "From the Two Ways to Universal Praise",
    body: "The Psalter began in Psalm 1 with the &lsquo;two ways&rsquo; &mdash; the way of the righteous and the way of the wicked &mdash; and in Psalm 2 with the rebellion of the nations against the LORD and his Anointed. It now ends, in Psalm 150, with all rebellion silenced and all creation united in one breath of praise. &lsquo;Everything that has breath&rsquo; recalls the breath of life that God first breathed into humanity (Genesis 2:7); now every living thing returns that breath to its Maker in worship. This is the destiny of redeemed creation, the goal toward which the whole story moves, glimpsed in John&rsquo;s vision of every creature crying praise to the One on the throne and to the Lamb (Revelation 5:13). The Psalter ends not in petition but in praise, because praise is the end of all things.",
  },
];

const themeItems = [
  {
    id: "t-where",
    title: "Where to Praise: Sanctuary and Heavens",
    color: GOLD,
    body: "&lsquo;Praise God in his sanctuary; praise him in his mighty heavens!&rsquo; (150:1). The psalm begins with the place of praise, and it names two: the &lsquo;sanctuary,&rsquo; the earthly temple where God meets his people, and the &lsquo;mighty heavens,&rsquo; the vast cosmic firmament that is itself a temple displaying his glory (Psalm 19:1). Praise rises from earth and from heaven, from the gathered congregation below and the angelic hosts above, in a single harmony. There is no place where God is not worthy of worship. The sanctuary on earth and the sanctuary of the skies together form one great house of praise, and the whole created order, seen and unseen, is summoned to fill it with worship of its Maker.",
  },
  {
    id: "t-why",
    title: "Why to Praise: His Deeds and His Greatness",
    color: TEAL,
    body: "&lsquo;Praise him for his mighty deeds; praise him according to his excellent greatness!&rsquo; (150:2). The psalm gives two grounds for praise, and together they cover everything. We praise God for his &lsquo;mighty deeds&rsquo; &mdash; what he has done in creation and redemption, in delivering his people and ruling the nations. And we praise him for his &lsquo;excellent greatness&rsquo; &mdash; not merely for what he does, but for who he is in himself, the surpassing greatness of his very being. The proper measure of praise is &lsquo;according to&rsquo; that greatness, which means no praise can ever be too much; his greatness is infinite, and so the song of praise can never be exhausted. We worship him both for his acts and for his essence.",
  },
  {
    id: "t-how",
    title: "How to Praise: The Full Orchestra",
    color: PURPLE,
    body: "&lsquo;Praise him with trumpet sound; praise him with lute and harp! Praise him with tambourine and dance; praise him with strings and pipe! Praise him with sounding cymbals; praise him with loud clashing cymbals!&rsquo; (150:3&ndash;5). The psalm summons the entire temple orchestra &mdash; wind, string, and percussion &mdash; along with the whole body in dance. The blast of the trumpet, the strumming of strings, the beat of the tambourine, the ring of the pipe, the crash of the cymbals: every instrument and every movement is enlisted. This is exuberant, full-bodied, unrestrained worship, holding nothing back. Praise is not to be timid or grudging but lavish and joyful, engaging every sense and every gift God has given, until the whole sanctuary resounds with the music of his glory.",
  },
  {
    id: "t-who",
    title: "Who Should Praise: Everything That Has Breath",
    color: ROSE,
    body: "&lsquo;Let everything that has breath praise the LORD! Praise the LORD!&rsquo; (150:6). The psalm ends with the widest possible summons. Not only the temple choir, not only Israel, not only humanity, but &lsquo;everything that has breath&rsquo; is called to praise. The phrase recalls the breath of life God breathed into the first human (Genesis 2:7) and indeed into all living creatures (Genesis 7:22); every breathing thing owes its life to God and is called to return that breath in praise. The very breath we use to live is given so that we may worship the One who gave it. This universal call is the destiny of redeemed creation, fulfilled when every creature in heaven and earth joins the song before the throne and the Lamb (Revelation 5:13).",
  },
  {
    id: "t-doxology",
    title: "The Doxology of the Whole Psalter",
    color: GREEN,
    body: "Each of the five &lsquo;books&rsquo; of the Psalms closes with a doxology &mdash; Psalm 41:13, 72:18&ndash;19, 89:52, and 106:48 &mdash; and Psalm 150 is the grand doxology that closes them all. It is not the conclusion of Book Five only but the final &lsquo;Amen&rsquo; of the entire collection. All the lament and longing, all the thanksgiving and trust, all the wisdom and royal hope of the preceding 149 psalms now resolve into this one sustained note of praise. The Psalter teaches us that the journey of faith, with all its valleys and heights, is moving toward a single destination: the unbroken praise of God. Whatever we bring into the Psalms, we are meant to leave singing Psalm 150.",
  },
  {
    id: "t-breath",
    title: "Praise as the Purpose of Every Breath",
    color: GOLD,
    body: "The final word of the psalm &mdash; and of the whole Psalter &mdash; ties praise to the most basic fact of existence: breath. &lsquo;Everything that has breath&rsquo; is to praise the LORD, which means that as long as there is breath in our lungs, there is a calling on our lives to worship. Praise is not an optional extra for the religious; it is the very purpose for which we were given life. The breath God breathed into us (Genesis 2:7) is meant to return to him in worship. This reframes all of life: every inhale is a gift, and every exhale an opportunity for praise. To live is to be summoned to glorify God, and the believer will find this calling fulfilled and perfected in the everlasting praise of heaven.",
  },
];

const verseSections = [
  {
    id: "v-1",
    ref: "Psalm 150:1",
    label: "The WHERE of praise: sanctuary and mighty heavens",
    body: "&lsquo;Praise the LORD! Praise God in his sanctuary; praise him in his mighty heavens!&rsquo; (150:1). The final psalm opens with its great cry, &lsquo;Hallelujah,&rsquo; and at once names the place of praise. First the &lsquo;sanctuary&rsquo; &mdash; the earthly temple where God dwelt among his people and met them in worship. Then the &lsquo;mighty heavens&rsquo; &mdash; the vast firmament of the skies, the cosmic temple that proclaims his glory (Psalm 19:1). Praise rises from both: from the congregation gathered below and from the angelic hosts above, from earth and from heaven together. The psalm begins by declaring that the whole of creation, the seen and the unseen, the temple of stone and the temple of the stars, is the house in which God is to be praised.",
  },
  {
    id: "v-2",
    ref: "Psalm 150:2",
    label: "The WHY of praise: his deeds and his greatness",
    body: "&lsquo;Praise him for his mighty deeds; praise him according to his excellent greatness!&rsquo; (150:2). Having named the place, the psalm gives the reasons. We praise God first for his &lsquo;mighty deeds&rsquo; &mdash; the great acts of creation and redemption, of deliverance and judgment, by which he has made himself known. And we praise him &lsquo;according to his excellent greatness&rsquo; &mdash; not only for what he has done but for the surpassing greatness of who he is. The standard of our praise is his own infinite greatness, which means there can never be too much praise; his worth exceeds all our songs. We worship him both for his acts in history and for the boundless excellence of his eternal being.",
  },
  {
    id: "v-35",
    ref: "Psalm 150:3&ndash;5",
    label: "The HOW of praise: the full temple orchestra",
    body: "&lsquo;Praise him with trumpet sound; praise him with lute and harp! Praise him with tambourine and dance; praise him with strings and pipe! Praise him with sounding cymbals; praise him with loud clashing cymbals!&rsquo; (150:3&ndash;5). Now the psalm tells us how to praise, and it summons the entire orchestra of the temple. The trumpet that announced the festivals; the lute and harp and strings that were plucked and strummed; the tambourine that accompanied dancing; the pipe that piped its melody; the cymbals, both gentle and loud and clashing. Wind, string, and percussion, with the whole body in dance &mdash; every instrument and every motion is enlisted in worship. This is praise that holds nothing back, exuberant and full-bodied, engaging every gift to magnify the LORD.",
  },
  {
    id: "v-6",
    ref: "Psalm 150:6",
    label: "The WHO of praise: everything that has breath",
    body: "&lsquo;Let everything that has breath praise the LORD! Praise the LORD!&rsquo; (150:6). The Psalter ends with the widest summons imaginable. The call goes out not only to the temple musicians, not only to Israel, not only to humankind, but to &lsquo;everything that has breath.&rsquo; Every living, breathing creature is gathered into the final chorus. The phrase recalls the breath of life God breathed into humanity (Genesis 2:7); the very breath that sustains us is given that we might return it to God in worship. With one last cry of &lsquo;Praise the LORD!&rsquo; the entire book of Psalms comes to rest. The journey that began with the two ways and the raging of the nations ends with all creation united in a single breath of praise &mdash; the destiny of the redeemed (Revelation 5:13).",
  },
];

const applicationBlocks = [
  {
    heading: "Make Praise the End of Your Journey",
    color: GOLD,
    body: "Psalm 150 stands at the end of a long and varied journey through the Psalms &mdash; through grief, fear, doubt, gratitude, and hope &mdash; and shows that all of it is meant to resolve into praise. Whatever you carry today, let it be moving toward worship. The Psalter does not pretend life is easy; it gives full voice to lament. But it ends in unbroken praise, teaching us that praise is the destination of every faithful life. When you are in the valley, remember where the road leads. Bring your sorrows and your joys alike before God, and let them be gathered up, in his time, into the song of Psalm 150.",
  },
  {
    heading: "Praise Him for His Deeds and His Greatness",
    color: TEAL,
    body: "&lsquo;Praise him for his mighty deeds; praise him according to his excellent greatness.&rsquo; Let your worship rest on both grounds. Praise God for what he has done &mdash; recount his mighty deeds in creation, in the cross and resurrection of Christ, and in the particular mercies of your own life. But do not stop at his deeds; praise him also for who he is, for the sheer excellence and greatness of his being, even when you cannot see what he is doing. When his deeds are hidden from you, his greatness remains. Train your heart to praise God not only as a benefactor who acts, but as the infinitely glorious One who is worthy of praise simply for being who he is.",
  },
  {
    heading: "Let Your Worship Be Whole-Hearted",
    color: PURPLE,
    body: "The psalm calls for the full orchestra &mdash; trumpet, strings, cymbals, and dance &mdash; praise that holds nothing back. Let this challenge any worship that is timid, half-hearted, or grudging. God is worthy of our whole selves: voice and hands, mind and body, every gift and every passion. This does not mean every believer must be loud or musical, but it does mean that worship should engage the whole person and the whole life. Bring your energy, your creativity, your joy. Whether in the gathered congregation or in private devotion, offer God praise that is alive and full-bodied, not a reluctant duty but a glad and lavish celebration of his greatness.",
  },
  {
    heading: "Use Your Breath for Praise",
    color: ROSE,
    body: "&lsquo;Let everything that has breath praise the LORD.&rsquo; The closing word of the Psalter ties praise to the most basic gift of all: breath. As long as you are breathing, you are called and equipped to praise God. Every breath is a gift from him and an opportunity to return that gift in worship. This reframes ordinary life: praise is not reserved for special occasions but is the very purpose of your existence. Let gratitude fill your days, let thanksgiving rise with each breath, and let your whole life become an offering of worship to the One who gave you life &mdash; until your final breath gives way to the everlasting praise of heaven.",
  },
];

const reflectionQuestions = [
  "Psalm 150 is the grand finale of the whole Psalter, resolving every emotion into praise. What burdens or joys do you need to bring before God and let be gathered up into worship?",
  "The psalm tells us to praise God both &lsquo;for his mighty deeds&rsquo; and &lsquo;according to his excellent greatness.&rsquo; Do you find it easier to praise God for what he does or for who he is, and why?",
  "The full temple orchestra is summoned for praise that holds nothing back. Where is your worship timid or half-hearted, and what would whole-hearted praise look like for you?",
  "&lsquo;Let everything that has breath praise the LORD.&rsquo; How does the truth that praise is the purpose of your very breath change the way you see your ordinary days?",
  "The Psalter that began with the rebellion of the nations (Psalm 2) ends with all creation united in praise. How does this final picture give you hope for the future God is bringing about?",
  "Psalm 150 points forward to the day when every creature praises God before the throne and the Lamb (Revelation 5:13). How can your worship now be a rehearsal for that everlasting song?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 150: Let Everything That Has Breath Praise the LORD" },
  { videoId: "OjJ7GkWCHvA", title: "Where, Why, How, and Who of Praise" },
  { videoId: "pHBzJ2dVXgk", title: "The Grand Doxology of the Psalter" },
  { videoId: "3sO5FH2ybPY", title: "Praise as the Purpose of Every Breath" },
];

const data: TabbedGuideData = {
  accent: TEAL,
  badge: `Psalms Deep Dive`,
  title: `Psalm 150: Let Everything That Has Breath Praise the LORD`,
  intro: `The grand finale and doxology of the entire book of Psalms &mdash; a climactic, all-encompassing call to praise built around WHERE to praise (sanctuary and mighty heavens), WHY to praise (his mighty deeds and excellent greatness), HOW to praise (the full temple orchestra), and WHO should praise (everything that has breath). The ten-fold &lsquo;praise him&rsquo; rises to a crescendo as the whole journey of the Psalter resolves into unbroken praise.`,
  keyVerseLabel: `Key Verse &mdash; Psalm 150:6`,
  keyVerse: `&ldquo;Let everything that has breath praise the LORD! Praise the LORD!&rdquo;`,
  overviewBlocks,
  overviewClosingHeading: `The Five Doxologies of the Psalter`,
  overviewClosingBody: `The book of Psalms is divided into five &lsquo;books,&rsquo; and each one ends with a doxology &mdash; a short burst of praise: Psalm 41:13, 72:18&ndash;19, 89:52, and 106:48. Psalm 150 is the fifth and final doxology, but it is far more than the close of Book Five; it is the grand doxology that crowns the whole collection of 150 psalms. The Hebrew word for &lsquo;praise&rsquo; (hallelu) sounds thirteen times in these six verses &mdash; ten direct imperatives plus the framing Hallelujahs &mdash; building a deliberate crescendo. The Psalter that opened with the two ways (Psalm 1) and the raging nations (Psalm 2) ends with all creation, every breathing thing, united in praise of the LORD.`,
  themesHeading: `Key Themes of Psalm 150`,
  themeItems,
  verseIntro: `Walk through Psalm 150 as it answers four questions about praise &mdash; the where, the why, the how, and the who &mdash; building to the final summons for everything that has breath to praise the LORD and bringing the entire Psalter to its triumphant close. Tap each section to open it.`,
  verseSections,
  applicationHeading: `Living Psalm 150`,
  applicationBlocks,
  reflectionHeading: `Questions for Reflection`,
  reflectionQuestions,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your meditation on Psalm 150 through teaching on the grand doxology that closes the Psalter, the where and why and how and who of praise, the ten-fold &lsquo;praise him&rsquo; that builds to a crescendo, and the final summons for everything that has breath to praise the LORD.`,
  videos: videoItems,
  closingTitle: `A Closing Prayer`,
  closingBody: `Praise the LORD! We praise you, O God, in your sanctuary and in your mighty heavens. We praise you for your mighty deeds &mdash; for creation and redemption, for the cross and the empty tomb &mdash; and we praise you according to your excellent greatness, for the boundless glory of who you are. Receive the praise of our whole selves, voice and hands and heart, holding nothing back. We bless you that the long journey of the Psalms, through every sorrow and every joy, ends in unbroken praise; and we long for the day when every creature in heaven and earth shall join the song before your throne and the Lamb. As long as we have breath, we will praise you. Let everything that has breath praise the LORD! Praise the LORD! Amen.`,
};

export default function Page() {
  return <TabbedGuideTemplate data={data} />;
}
