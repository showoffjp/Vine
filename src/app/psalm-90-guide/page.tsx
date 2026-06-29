"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "Eternal God, Fleeting Man",
  "Mortality and Wrath",
  "A Prayer for Mercy",
  "Videos",
]

const sections = [
  {
    id: "Overview",
    heading: "A Prayer of Moses, the Man of God",
    reference: "Psalm 90",
    paragraphs: [
      "Psalm 90 bears a singular heading: &ldquo;A Prayer of Moses, the man of God.&rdquo; It is the only psalm attributed to Moses, and likely the oldest poem in the entire Psalter. Composed by the great leader who watched a whole generation perish in the wilderness, it carries the weight of one who knew mortality not as an abstraction but as the daily reality of his people&rsquo;s journey.",
      "The psalm opens by contrasting the eternity of God with the brevity and frailty of human life (vv.1&ndash;6). Before the mountains were brought forth, before the earth was formed, God is. A thousand years in his sight are but as yesterday. Against this measureless permanence, human life is swept away like a flood, like a dream, like grass that springs up in the morning and withers by night.",
      "From this contrast the psalm moves to sober reflection on human sin under God&rsquo;s wrath and the shortness of our days (vv.7&ndash;12). Moses connects the brevity of life directly to sin and divine judgment, refusing to treat death as a mere fact of nature. Yet this hard reflection turns toward wisdom in the pivotal petition: &ldquo;So teach us to number our days that we may get a heart of wisdom.&rdquo;",
      "Finally the psalm ends with a heartfelt prayer for God&rsquo;s mercy, satisfaction, and the establishment of the work of our hands (vv.13&ndash;17). &ldquo;Satisfy us in the morning with your steadfast love&rdquo; gives way to one of the most beloved petitions in Scripture: &ldquo;Establish the work of our hands upon us; yes, establish the work of our hands!&rdquo; The longing for lasting meaning rises out of the awareness of fleeting life.",
      "What makes Psalm 90 so profound is its refusal to flinch from mortality while still reaching out in hope. It does not offer cheap comfort or deny the reality of death and judgment. Instead it places the brevity of human life squarely before the eternity of God and asks what wisdom such a contrast should produce.",
      "The psalm is a meditation on mortality, eternity, and the longing for meaning under God. It teaches that a clear-eyed reckoning with our own finitude, far from leading to despair, can become the doorway to wisdom, to a right valuing of our days, and to a prayer that the eternal God would lend lasting significance to our brief and fragile labors.",
    ],
  },
  {
    id: "Eternal God, Fleeting Man",
    heading: "The Eternal God and Fleeting Man",
    reference: "Psalm 90:1&ndash;6",
    paragraphs: [
      "The psalm begins by grounding human life in the abiding shelter of God. &ldquo;Lord, you have been our dwelling place in all generations.&rdquo; Before any reflection on frailty or sin, Moses establishes that across every generation, in the wilderness and beyond, God himself has been the home of his people. The eternal God is not distant but the very place in which mortal life finds its refuge.",
      "From this anchor the psalm soars to the heights of God&rsquo;s eternity. &ldquo;Before the mountains were brought forth, or ever you had formed the earth and the world, from everlasting to everlasting you are God.&rdquo; The most ancient and enduring things in creation &mdash; the mountains, the earth itself &mdash; had a beginning, but God did not. He stretches from everlasting to everlasting, without origin and without end.",
      "God&rsquo;s relationship to time is unlike anything in human experience. &ldquo;For a thousand years in your sight are but as yesterday when it is past, or as a watch in the night.&rdquo; What seems to us an immense span of history is to God like a single day already gone, or like a brief watch in the darkness. His timelessness frames everything that follows in the psalm.",
      "Against this backdrop, human life is shown to be vanishingly brief. &ldquo;You sweep them away as with a flood; they are like a dream, like grass that is renewed in the morning.&rdquo; Life is carried off as suddenly as a flash flood sweeps away whatever lies in its path, as insubstantial as a dream that fades on waking.",
      "The image of grass deepens the sense of frailty. &ldquo;In the morning it flourishes and is renewed; in the evening it fades and withers.&rdquo; In a single day the grass passes from vigor to death. So too human life, however full of promise in its morning, moves swiftly toward its evening. The contrast with the eternal God could hardly be sharper.",
      "The vast gulf between the eternal Creator and his fragile creatures sets the tone for the sober reflection that follows. Moses does not present this contrast to crush, but to clarify. To see rightly who God is and who we are &mdash; the everlasting One and the fading grass &mdash; is the necessary starting point for the wisdom and the prayer toward which the whole psalm moves.",
    ],
  },
  {
    id: "Mortality and Wrath",
    heading: "Mortality Under God's Wrath",
    reference: "Psalm 90:7&ndash;12",
    paragraphs: [
      "The psalm now names the deeper reason behind human frailty. &ldquo;For we are brought to an end by your anger; by your wrath we are dismayed.&rdquo; Moses does not treat death as a neutral fact of biology. He traces the shortness and trouble of life to the holy displeasure of God against human sin, a sober diagnosis that refuses easy comfort.",
      "Nothing about human life is hidden from God. &ldquo;You have set our iniquities before you, our secret sins in the light of your presence.&rdquo; Even the sins we conceal from others, even from ourselves, stand exposed in the radiance of God&rsquo;s presence. This unflinching honesty about sin gives the psalm its moral weight and its searching seriousness.",
      "The brevity of life is felt as a kind of sigh. &ldquo;For all our days pass away under your wrath; we bring our years to an end like a sigh.&rdquo; The whole of a human life, from beginning to end, is compressed into the length of a single breath exhaled. There is a mournful, weary quality to the image, the sound of a life passing quietly away.",
      "Moses then reckons frankly with the span of our years. &ldquo;The years of our life are seventy, or even by reason of strength eighty; yet their span is but toil and trouble; they are soon gone, and we fly away.&rdquo; Even a long life, even a strong one, is filled largely with labor and sorrow, and it ends all the same; we fly away as swiftly as a bird takes wing.",
      "The reflection presses toward a searching question. &ldquo;Who considers the power of your anger, and your wrath according to the fear of you?&rdquo; Few take seriously the weight of God&rsquo;s holiness or the reality of his judgment. Moses asks his readers to reckon honestly with what most prefer to ignore, to consider the power that stands behind their mortality.",
      "Out of this sober reckoning comes the psalm&rsquo;s pivotal petition. &ldquo;So teach us to number our days that we may get a heart of wisdom.&rdquo; Mortality, rightly faced, becomes the path to wisdom. To count our days &mdash; to know how few and how precious they are &mdash; is to be freed from folly and trivial pursuits, and to learn at last to live with a wise and discerning heart.",
    ],
  },
  {
    id: "A Prayer for Mercy",
    heading: "A Prayer for Mercy and Meaning",
    reference: "Psalm 90:13&ndash;17",
    paragraphs: [
      "Having faced mortality and judgment honestly, the psalm turns from reflection to petition. &ldquo;Return, O Lord! How long? Have pity on your servants!&rdquo; Moses cries out for God to turn back toward his people in compassion. The question &ldquo;How long?&rdquo; carries the ache of those who have endured the weight of affliction and long for relief.",
      "The prayer asks for a deep and lasting satisfaction. &ldquo;Satisfy us in the morning with your steadfast love, that we may rejoice and be glad all our days.&rdquo; In contrast to the grass that flourishes in the morning and withers by night, Moses asks that the morning bring God&rsquo;s steadfast love, a satisfaction that yields joy and gladness through the whole of our fleeting days.",
      "There is a longing for joy proportioned to past sorrow. &ldquo;Make us glad for as many days as you have afflicted us, and for as many years as we have seen evil.&rdquo; Moses does not deny the affliction and evil his people have known; he asks that God would balance those hard days with equal measures of gladness, redeeming the years of trouble with years of joy.",
      "The prayer reaches outward to the next generation. &ldquo;Let your work be shown to your servants, and your glorious power to their children.&rdquo; Moses asks that God&rsquo;s mighty acts be made visible, not only to those who pray but to their children after them, so that the knowledge of God&rsquo;s power might pass on and endure beyond a single fleeting life.",
      "The psalm closes with one of the most beloved petitions in all of Scripture. &ldquo;Let the favor of the Lord our God be upon us, and establish the work of our hands upon us; yes, establish the work of our hands!&rdquo; The repetition is deliberate and urgent. It is the heartfelt cry that our brief, mortal labors might be given lasting significance by the eternal God.",
      "Here the whole psalm comes to rest. Fading creatures, whose days pass like a sigh and whose work might so easily vanish, ask the One who is from everlasting to everlasting to take up their fleeting labors and make them count. It is the longing that what we do in our short span might be established, held, and made to matter by the eternal God in whom alone our dwelling place and our hope are found.",
    ],
  },
];

const videoItems = [
  { videoId: "Ps90Mo7vK2q", title: "Psalm 90 - A Prayer of Moses the Man of God" },
  { videoId: "Et4Gd9Wn1bx", title: "From Everlasting to Everlasting You Are God" },
  { videoId: "Nm6Dy3Kb8vr", title: "Teach Us to Number Our Days" },
  { videoId: "Es2Wk5Hn4pm", title: "Establish the Work of Our Hands" },
];

const data: SectionGuideData = {
  accent: "#6B4FBB",
  badge: `Psalms Study`,
  title: `Psalm 90`,
  intro: `&ldquo;A Prayer of Moses, the man of God&rdquo; &mdash; the only psalm attributed to Moses and likely the oldest in the Psalter. It contrasts the eternity of God with the brevity of human life, reflects soberly on sin under God&rsquo;s wrath, and prays, &ldquo;Teach us to number our days that we may get a heart of wisdom&hellip; establish the work of our hands.&rdquo; A profound meditation on mortality, eternity, and the longing for meaning.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of Psalm 90 through visual teaching on Moses&rsquo; meditation on the eternity of God and the brevity of human life, the sober reckoning with mortality under God&rsquo;s wrath, the pivotal prayer to number our days and gain wisdom, and the longing that the eternal God would establish the fleeting work of our hands.`,
  calloutTitle: `Number Our Days`,
  calloutBody: `Psalm 90 places the brevity of human life before the eternity of God and finds, in that honest reckoning, the doorway to wisdom. &ldquo;Teach us to number our days that we may get a heart of wisdom.&rdquo; Out of mortality rises the prayer that fading creatures might have their fleeting labors taken up and made to count: &ldquo;Establish the work of our hands.&rdquo;`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
