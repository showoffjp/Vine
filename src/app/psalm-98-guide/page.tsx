"use client";
import TabbedGuideTemplate, { TABBED_COLORS, type TabbedGuideData } from "@/components/TabbedGuideTemplate";

const { GREEN, GOLD, TEAL, PURPLE, ROSE } = TABBED_COLORS;

const overviewBlocks = [
  {
    heading: "A New Song for a New Salvation",
    body: "Psalm 98 is one of the great enthronement psalms, a burst of pure exultation that the Latin tradition named the &ldquo;Cantate Domino&rdquo; from its opening words, &lsquo;Oh sing to the LORD a new song.&rsquo; It is a psalm with no complaint in it, no lament, no enemy threatening at the gate. From the first syllable to the last it is praise, and the reason for the praise is everywhere the same: &lsquo;he has done marvelous things.&rsquo; Something has happened. God has acted. He has worked salvation by his own right hand and his holy arm, and the only fitting response to a fresh act of God is a fresh song.",
  },
  {
    heading: "The Salvation of Our God",
    body: "The heartbeat of the psalm is the word &lsquo;salvation,&rsquo; which sounds three times in the opening verses like a bell. &lsquo;His right hand and his holy arm have worked salvation&hellip; the LORD has made known his salvation&hellip; all the ends of the earth have seen the salvation of our God.&rsquo; This is not a private deliverance hidden in a corner. It is a salvation made known, revealed, and seen &mdash; displayed openly &lsquo;in the sight of the nations&rsquo; so that the whole watching world might behold what the God of Israel has done. The psalm moves from a deed accomplished to a deed announced, and finally to a deed beheld by all the earth.",
  },
  {
    heading: "The Shape of the Psalm",
    body: "Psalm 98 unfolds in three movements of three verses each. The first (98:1&ndash;3) looks back and up: it celebrates the salvation God has already accomplished and revealed, grounded in his remembered steadfast love and faithfulness to the house of Israel. The second (98:4&ndash;6) turns outward and gathers the whole earth into a roaring chorus of joyful noise, summoning lyre and trumpet and horn before the King, the LORD. The third (98:7&ndash;9) widens the circle still further, calling the sea, the rivers, and the hills themselves into the praise, and climaxing with the announcement that gives the whole song its forward lean: &lsquo;for he comes to judge the earth.&rsquo;",
  },
  {
    heading: "Context and Echoes",
    body: "Psalm 98 belongs to a cluster of psalms (95&ndash;99) that proclaim the LORD as King over all the earth. It breathes the same air as Isaiah 40&ndash;55, where the arm of the LORD is bared before the nations and the ends of the earth see the salvation of our God (Isaiah 52:10). For Christian readers the psalm has always pointed forward: Isaac Watts heard in it the coming of Christ and turned it into the hymn &lsquo;Joy to the World,&rsquo; a song not first about a manger but about the King who comes to make his blessings flow far as the curse is found. Simeon, holding the infant Jesus, sang from the same well: &lsquo;my eyes have seen your salvation&hellip; a light for revelation to the Gentiles&rsquo; (Luke 2:30&ndash;31).",
  },
];

const themeItems = [
  {
    id: "t-newsong",
    title: "The New Song and the Marvelous Deed",
    color: GREEN,
    body: "&lsquo;Oh sing to the LORD a new song, for he has done marvelous things!&rsquo; (98:1). The new song is not a demand for novelty for its own sake; it is the necessary response to a new act of God. When God does something fresh, the old songs are not enough &mdash; a new wonder calls forth a new praise. The whole Bible is punctuated by new songs after God&rsquo;s great rescues: Moses and Miriam at the sea (Exodus 15), and finally the redeemed before the throne who sing &lsquo;a new song&hellip; for you were slain, and by your blood you ransomed people for God&rsquo; (Revelation 5:9). The marvelous thing God has done is salvation, accomplished &lsquo;for him&rsquo; &mdash; for his own glory &mdash; by &lsquo;his right hand and his holy arm,&rsquo; the imagery of a warrior who needs no help to win. He saves alone, and so he is praised alone.",
  },
  {
    id: "t-nations",
    title: "Salvation Revealed in the Sight of the Nations",
    color: TEAL,
    body: "&lsquo;The LORD has made known his salvation; he has revealed his righteousness in the sight of the nations&rsquo; (98:2). God&rsquo;s saving work is never meant to stay hidden. He makes it known, reveals it, displays it openly before the watching world. This is the missionary heartbeat of the Old Testament: that the God of Israel is the God of all the earth, and his salvation is destined for the nations. &lsquo;All the ends of the earth have seen the salvation of our God&rsquo; (98:3). The psalm anticipates the gospel going out to every people, the very thing Jesus commands in the Great Commission and the very thing John sees fulfilled in the multitude &lsquo;from every nation, from all tribes and peoples and languages&rsquo; (Revelation 7:9). What was once Israel&rsquo;s song becomes the song of the world.",
  },
  {
    id: "t-hesed",
    title: "Steadfast Love and Faithfulness Remembered",
    color: PURPLE,
    body: "&lsquo;He has remembered his steadfast love and faithfulness to the house of Israel&rsquo; (98:3). The salvation God works is not arbitrary or capricious; it flows out of his covenant character. &lsquo;Steadfast love&rsquo; translates the rich Hebrew word hesed &mdash; loyal, covenant-keeping, unbreakable love &mdash; and it is paired here with faithfulness, the reliability of a God who keeps every promise. For God to &lsquo;remember&rsquo; is not for him to recall something forgotten, but for him to act on what he has always purposed. The marvelous deed of salvation is the visible outworking of an invisible, eternal love. Every rescue God grants is an act of remembered hesed, and the cross of Christ is the supreme remembering of his covenant love (Luke 1:54&ndash;55, 72).",
  },
  {
    id: "t-joyfulnoise",
    title: "A Joyful Noise from All the Earth",
    color: GOLD,
    body: "&lsquo;Make a joyful noise to the LORD, all the earth; break forth into joyous song and sing praises!&rsquo; (98:4). The praise of Psalm 98 is loud, unembarrassed, and full-throated. It is not a quiet, careful religion but a joyful noise &mdash; the natural overflow of a heart that has seen the salvation of God. The psalm calls for the full orchestra of worship: the lyre, the trumpets, and the horn, &lsquo;before the King, the LORD&rsquo; (98:5&ndash;6). And the summons is not to Israel only but to &lsquo;all the earth.&rsquo; The God who has revealed his salvation to the nations now invites the nations to answer with song. Worship is the fitting echo of revelation: God speaks his salvation, and creation sings it back.",
  },
  {
    id: "t-creation",
    title: "All Creation Joins the Chorus",
    color: TEAL,
    body: "&lsquo;Let the sea roar, and all that fills it; the world and those who dwell in it! Let the rivers clap their hands; let the hills sing for joy together&rsquo; (98:7&ndash;8). The praise of God cannot be contained within the human voice. The psalm summons the sea to roar, the rivers to clap their hands, the hills to sing &mdash; the whole created order is gathered into the worship of its Maker. This is not mere poetry; it points to the deep biblical truth that creation itself was caught up in the fall and longs for redemption. Paul writes that &lsquo;the creation waits with eager longing&hellip; that the creation itself will be set free from its bondage to corruption&rsquo; (Romans 8:19&ndash;21). When the King comes to set the world right, the very rivers and hills will join the new song.",
  },
  {
    id: "t-judgment",
    title: "Judgment as the Joyful Righting of All Things",
    color: ROSE,
    body: "&lsquo;For he comes to judge the earth. He will judge the world with righteousness, and the peoples with equity&rsquo; (98:9). Here is the climax, and it is startling: the reason the sea roars and the hills sing for joy is that God comes to judge. To modern ears judgment sounds like bad news, but to the psalmist it is the best news of all. For God to judge the world &lsquo;with righteousness&rsquo; and the peoples &lsquo;with equity&rsquo; means that every wrong will at last be made right, every oppressor called to account, every tear answered, every injustice undone. Judgment is the final, joyful setting-right of a broken world by a perfectly good King. This is why creation rejoices: the Judge is also the Savior, and his coming means the end of all that is twisted and the beginning of all that is whole.",
  },
];

const verseSections = [
  {
    id: "v-1",
    ref: "Psalm 98:1",
    label: "He has done marvelous things",
    body: "&lsquo;Oh sing to the LORD a new song, for he has done marvelous things! His right hand and his holy arm have worked salvation for him&rsquo; (98:1). The psalm opens not with a command to feel a certain way but with a command to sing, and it gives the reason in the same breath: &lsquo;for he has done marvelous things.&rsquo; The song is grounded in a deed. The &lsquo;right hand&rsquo; and &lsquo;holy arm&rsquo; are the language of a warrior&rsquo;s strength; that the arm is &lsquo;holy&rsquo; tells us this is no ordinary power but the power of the all-holy God set in motion for rescue. And the salvation is &lsquo;for him&rsquo; &mdash; God saves for the sake of his own name and glory, and in saving us he displays himself. The marvelous thing is not that we have climbed up to God, but that his own arm has reached down and worked our deliverance alone.",
  },
  {
    id: "v-23",
    ref: "Psalm 98:2&ndash;3",
    label: "All the ends of the earth have seen",
    body: "&lsquo;The LORD has made known his salvation; he has revealed his righteousness in the sight of the nations. He has remembered his steadfast love and faithfulness to the house of Israel. All the ends of the earth have seen the salvation of our God&rsquo; (98:2&ndash;3). Three verbs of disclosure pile up here: made known, revealed, seen. God&rsquo;s salvation is a public salvation, displayed before the nations so that the whole earth may behold it. The ground of this salvation is named: his &lsquo;steadfast love and faithfulness to the house of Israel&rsquo; &mdash; the covenant love he swore long ago and has now remembered in action. And the reach of it is breathtaking: &lsquo;all the ends of the earth have seen.&rsquo; What began as a particular promise to one people becomes a salvation visible to all peoples. Simeon held the fulfillment in his arms and sang, &lsquo;my eyes have seen your salvation&hellip; a light for revelation to the Gentiles&rsquo; (Luke 2:30&ndash;32).",
  },
  {
    id: "v-46",
    ref: "Psalm 98:4&ndash;6",
    label: "Make a joyful noise, all the earth",
    body: "&lsquo;Make a joyful noise to the LORD, all the earth; break forth into joyous song and sing praises! Sing praises to the LORD with the lyre, with the lyre and the sound of melody! With trumpets and the sound of the horn make a joyful noise before the King, the LORD!&rsquo; (98:4&ndash;6). The middle movement is one great summons to worship, and it is addressed to &lsquo;all the earth.&rsquo; The salvation revealed to the nations now calls the nations to respond. The praise is loud and instrumental &mdash; a joyful noise, melody on the lyre, the blast of trumpets and horn &mdash; the kind of fanfare that announces a king&rsquo;s coronation. And that is exactly the title given here: &lsquo;the King, the LORD.&rsquo; The God who has worked salvation is enthroned, and his people answer his saving reign with the full orchestra of joy. There is nothing thin or timid in this worship; it is the unrestrained gladness of those who have seen what God has done.",
  },
  {
    id: "v-79",
    ref: "Psalm 98:7&ndash;9",
    label: "He comes to judge the earth",
    body: "&lsquo;Let the sea roar, and all that fills it; the world and those who dwell in it! Let the rivers clap their hands; let the hills sing for joy together before the LORD, for he comes to judge the earth. He will judge the world with righteousness, and the peoples with equity&rsquo; (98:7&ndash;9). In the final movement the chorus swells beyond the human race to take in the whole creation. The sea is told to roar, the rivers to clap their hands, the hills to sing &mdash; nature itself is personified as a worshiper. And the reason given for all this cosmic joy is the coming of the Judge: &lsquo;for he comes to judge the earth.&rsquo; This is the great turn of the psalm. Judgment, far from being a threat to flee, is the very thing that makes the rivers clap, because the God who comes will judge &lsquo;with righteousness&rsquo; and &lsquo;with equity&rsquo; &mdash; he will at last set the whole groaning world right. The psalm ends, then, not in the past but in the future, leaning forward to the day when the King returns to make all things new.",
  },
];

const applicationBlocks = [
  {
    heading: "Let a New Mercy Give You a New Song",
    color: GREEN,
    body: "Psalm 98 teaches us that praise is the natural response to a fresh act of God. When you taste a new mercy &mdash; an answered prayer, a sin forgiven, a fear lifted, a door opened &mdash; do not let it pass unsung. The temptation is to receive God&rsquo;s gifts in silence and move on, but the psalm calls us to break forth into a new song. Take time to name what God has done and to thank him specifically for it. The remembered marvels of God are the raw material of worship, and a heart that learns to sing over each fresh mercy will never run short of reasons to praise.",
  },
  {
    heading: "Make His Salvation Known",
    color: TEAL,
    body: "God did not work salvation in secret but &lsquo;revealed his righteousness in the sight of the nations.&rsquo; If God himself delights to make his salvation known, then his people are called to do the same. Psalm 98 is a missionary psalm before there was a missionary movement, and it presses every believer to consider how the salvation we have seen might be made visible to others. This may mean speaking the gospel plainly to a neighbor, supporting those who carry it to unreached peoples, or simply living a life so marked by joy that others ask the reason for the hope within you. The salvation seen by &lsquo;all the ends of the earth&rsquo; is meant to keep traveling outward through us.",
  },
  {
    heading: "Worship Loudly and Wholeheartedly",
    color: GOLD,
    body: "&lsquo;Make a joyful noise to the LORD, all the earth.&rsquo; The worship of Psalm 98 is unembarrassed and full-bodied &mdash; lyre and trumpet and horn, a joyful noise before the King. There is a place for quiet reverence, but this psalm rebukes a faith that is always muted and careful. When we have truly seen the salvation of our God, something in us wants to break forth into joyous song. Give yourself permission to worship with your whole heart, voice, and body. Sing in the gathered church as though you mean it, for you do; and let your private devotion sometimes rise into glad, audible praise.",
  },
  {
    heading: "Long for the Judge Who Sets All Things Right",
    color: ROSE,
    body: "For most of us, judgment is a word we shrink from. Psalm 98 invites us to learn to long for it. The coming of the Judge is good news because he comes &lsquo;with righteousness&rsquo; and &lsquo;with equity&rsquo; &mdash; to undo every injustice, comfort every grief, and right every wrong that no human court could touch. When you grieve over the brokenness of the world, over evil that seems to triumph and innocence that seems to suffer, let Psalm 98 teach you to lift your eyes to the day when the King returns. The Christian does not merely endure the thought of judgment; with the rivers and the hills, we learn to clap our hands and sing for joy that he is coming.",
  },
];

const reflectionQuestions = [
  "What &lsquo;marvelous thing&rsquo; has God done in your life recently that deserves a new song of praise? Have you actually thanked him for it?",
  "Psalm 98 celebrates a salvation made known &lsquo;in the sight of the nations.&rsquo; In what concrete way could you help make God&rsquo;s salvation known to someone this week?",
  "The psalm grounds salvation in God&rsquo;s remembered &lsquo;steadfast love and faithfulness.&rsquo; How does knowing that God&rsquo;s rescue flows from his covenant character change the way you trust him?",
  "Where in your worship are you tempted toward timidity or going through the motions? What would it look like for you to &lsquo;make a joyful noise&rsquo; with your whole heart?",
  "Why do you think the sea, the rivers, and the hills are pictured rejoicing that God comes to judge? How does this reshape your own feelings about the final judgment?",
  "Isaac Watts turned Psalm 98 into &lsquo;Joy to the World.&rsquo; How does seeing this psalm as a song about the coming King deepen the way you sing that hymn?",
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 98: Sing to the LORD a New Song" },
  { videoId: "Q2oNOlXzBhY", title: "The Salvation of Our God Seen by All the Earth" },
  { videoId: "8phkAg8PMHE", title: "Joy to the World: Psalm 98 and the Coming King" },
  { videoId: "fNk_zzaMoSs", title: "Judgment as Good News: He Comes to Set All Things Right" },
];

const data: TabbedGuideData = {
  accent: GREEN,
  badge: `Psalms Deep Dive`,
  title: `Psalm 98: Sing to the LORD a New Song`,
  intro: `The &lsquo;Cantate Domino&rsquo; &mdash; a psalm of pure exultation over the salvation the LORD has worked by his own right hand and made known in the sight of the nations. All the earth is summoned to a joyful noise, and the sea, the rivers, and the hills are called to roar and clap and sing &mdash; for the King comes to judge the world with righteousness and the peoples with equity.`,
  keyVerseLabel: `Key Verse &mdash; Psalm 98:1`,
  keyVerse: `&ldquo;Oh sing to the LORD a new song, for he has done marvelous things! His right hand and his holy arm have worked salvation for him.&rdquo;`,
  overviewBlocks,
  overviewClosingHeading: `Joy to the World`,
  overviewClosingBody: `Isaac Watts&rsquo;s beloved hymn &lsquo;Joy to the World&rsquo; is a paraphrase of Psalm 98 &mdash; written originally not as a Christmas carol but as a song of Christ&rsquo;s second coming to judge and to reign. When we sing &lsquo;let earth receive her King&rsquo; and &lsquo;he comes to make his blessings flow far as the curse is found,&rsquo; we are singing the very hope of this psalm: the salvation of our God seen by all the ends of the earth, and the King who comes to set the whole groaning creation right.`,
  themesHeading: `Key Themes of Psalm 98`,
  themeItems,
  verseIntro: `Walk through Psalm 98 in its three movements &mdash; the salvation accomplished and revealed, the joyful noise of all the earth, and the coming of the King to judge. Tap each section to open it.`,
  verseSections,
  applicationHeading: `Living Psalm 98`,
  applicationBlocks,
  reflectionHeading: `Questions for Reflection`,
  reflectionQuestions,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your meditation on Psalm 98 through teaching on the new song, the salvation revealed to the nations, the hymn &lsquo;Joy to the World,&rsquo; and the good news of the coming Judge.`,
  videos: videoItems,
  closingTitle: `A Closing Prayer`,
  closingBody: `O LORD, you have done marvelous things, and your own right hand and holy arm have worked salvation for us. We praise you that you did not keep your salvation hidden but revealed it in the sight of the nations, so that all the ends of the earth might see the salvation of our God. Teach us to sing a new song for every fresh mercy, and make our worship a joyful noise that is not ashamed. Set our hope on the day when you come to judge the earth with righteousness and the peoples with equity, when the sea will roar and the rivers clap their hands and the hills sing for joy. Even so, come, Lord Jesus, and let earth receive her King. Amen.`,
};

export default function Page() {
  return <TabbedGuideTemplate data={data} />;
}
