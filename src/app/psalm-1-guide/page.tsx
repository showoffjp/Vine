"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Blessed Is the Man",
  "Like a Tree Planted by Water",
  "The Way of the Wicked",
  "Chaff the Wind Drives Away",
  "The Lord Knows the Righteous",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Blessed Is the Man",
    heading: "Blessed Is the Man",
    reference: "Psalm 1:1&ndash;2",
    paragraphs: [
      "Psalm 1 stands as the gateway to the entire Psalter, the doorway through which every reader must pass before entering the great house of Israel&rsquo;s songs. It does not begin with a prayer or a cry or a hymn of praise, but with a beatitude: &ldquo;Blessed is the man.&rdquo; Before we are taught how to pray, we are taught how to live; before we lift our voices in worship, we are shown the two ways that lie before every human heart. The psalm is a porch and a threshold, framing all one hundred and fifty psalms that follow as the meditations of the blessed man whose delight is in the law of the Lord.",
      "The word translated &ldquo;blessed&rdquo; is rich and weighty. It is not a shallow wish for good fortune but a declaration of the deep, settled flourishing of a life rightly ordered toward God. To be blessed in this sense is to be congratulated, to be counted truly happy &mdash; not because circumstances are easy, but because the whole bent of the life is set in the direction of God&rsquo;s favor. The psalm pronounces this blessing first, and then unfolds what such a life looks like, both in its refusals and in its delights.",
      "The blessed man is described first by what he does not do, and the description traces a slow and tragic descent. He &ldquo;walks not in the counsel of the wicked, nor stands in the way of sinners, nor sits in the seat of scoffers&rdquo; (1:1). Notice the movement: from walking to standing to sitting, from the wicked to sinners to scoffers, from passing influence to settled company to entrenched mockery. Sin rarely seizes a life all at once. It begins with listening to ungodly counsel, hardens into joining the path of sinners, and finally settles into the cynical chair of the scoffer who mocks the very idea of righteousness.",
      "There is profound wisdom here about the company we keep and the gradual nature of spiritual decline. The blessed man guards the gate of his life. He does not first take up residence among the scornful; he simply declines, at the very first step, to walk according to the advice of those who have no regard for God. Each refusal is a small act of holy resistance, and together they preserve the soul from the downward slide that ends in the seat of the scoffer, where God is no longer feared but laughed at.",
      "But the blessed life is not finally defined by avoidance. A life built only on what it refuses is hollow. So the psalm turns from the negative to the positive, from the things the blessed man flees to the one thing he loves: &ldquo;but his delight is in the law of the Lord, and on his law he meditates day and night&rdquo; (1:2). Here is the engine of the whole blessed life. The reason he does not walk in wicked counsel is that he has found a better counsel; the reason he does not sit with scoffers is that he sits instead with the word of God.",
      "The word &ldquo;delight&rdquo; is the heart of it. This is not grudging duty or cold obedience but genuine love. The law of the Lord &mdash; his instruction, his torah, the whole revealed will of God &mdash; is to the blessed man what treasure is to the miser and water is to the thirsty. He does not meditate on it because he must, but because he cannot stay away. And his meditation is constant: &ldquo;day and night,&rdquo; in the bright hours and the dark ones, in seasons of joy and seasons of sorrow. The word of God is the soundtrack of his waking and the comfort of his sleepless nights.",
      "To meditate, in the Hebrew sense, is not to empty the mind but to fill it; it is the low murmur of one who turns the word over and over, chewing on it as a beast chews the cud, speaking it quietly to oneself until it works its way down into the heart. The blessed man does not merely read the law and move on. He lingers, he ruminates, he lets the word soak into the soil of his soul. And it is precisely this rooted delight in Scripture that the next image of the psalm will so beautifully describe.",
    ],
  },
  {
    id: "Like a Tree Planted by Water",
    heading: "Like a Tree Planted by Water",
    reference: "Psalm 1:3",
    paragraphs: [
      "Having told us who the blessed man is, the psalmist now shows us what he is like. &ldquo;He is like a tree planted by streams of water that yields its fruit in its season, and its leaf does not wither. In all that he does, he prospers&rdquo; (1:3). This single verse is one of the most beloved images in all of Scripture, a portrait of a flourishing life that has captured the imagination of believers for three thousand years. Everything in it repays careful attention.",
      "The first word is &ldquo;planted.&rdquo; The tree did not spring up by accident; it was set in its place by an intentional hand. This is the language of cultivation, of a gardener who chooses the soil and digs the hole and settles the roots with care. The blessed man is not self-made. He is planted by God, placed deliberately beside the water, sustained by a source outside himself. His flourishing is not the fruit of his own striving but of the grace that put him where the living water flows.",
      "And the water is everything. In the dry climate of the ancient Near East, the difference between life and death was the difference between proximity to water and distance from it. A tree planted &ldquo;by streams of water&rdquo; &mdash; literally, by channels of water, the irrigation canals that carried life into the fields &mdash; would never lack what it needed, even when the rains failed and the land cracked under the sun. So the blessed man, rooted in the law of the Lord, draws from a source that does not run dry. His meditation on the word is the hidden root system that reaches down to the stream.",
      "From this rootedness comes fruit: &ldquo;that yields its fruit in its season.&rdquo; The blessed life is a fruitful life, but the psalm is careful and patient about it. The tree does not bear fruit every moment, nor on demand, but &ldquo;in its season.&rdquo; There is a time for the slow, hidden work of growth, and a time for the visible harvest. Those who are rooted in God learn not to despise the seasons of waiting, for the same tree that stands bare in winter is the tree that will hang heavy with fruit when the appointed time comes. Fruitfulness follows rootedness, and rootedness keeps God&rsquo;s timing.",
      "&ldquo;And its leaf does not wither.&rdquo; Here is endurance, the quiet evidence of a deep and constant supply. Many trees can produce a flush of green in a wet spring; the test is what happens in the long heat of summer drought. The leaf of the blessed man does not wither because his life is fed from beneath the surface, where the streams run even when the sky is brass. This is the perseverance of the saints &mdash; not a sinless invulnerability, but a sustained vitality that outlasts the seasons of hardship because its source lies deeper than the weather.",
      "&ldquo;In all that he does, he prospers.&rdquo; This final line must be read in the light of the whole psalm, not torn from it as a promise of worldly success. The prospering of the blessed man is the prospering of a tree: it is fruitfulness, endurance, and life that accords with the purpose for which it was planted. It is not the guarantee of wealth or ease, but the assurance that a life rooted in God&rsquo;s word will not ultimately come to nothing. What such a life does, in the deepest sense, will stand and bear fruit before God.",
      "There is a striking echo here of the prophet Jeremiah, who uses the same image: &ldquo;Blessed is the man who trusts in the Lord&hellip; He is like a tree planted by water, that sends out its roots by the stream, and does not fear when heat comes, for its leaves remain green, and is not anxious in the year of drought, for it does not cease to bear fruit&rdquo; (Jeremiah 17:7&ndash;8). The blessed life is the trusting life, sunk deep into the faithfulness of God, unafraid of the heat because its roots have found the water that never fails.",
    ],
  },
  {
    id: "The Way of the Wicked",
    heading: "The Way of the Wicked",
    reference: "Psalm 1:4&ndash;5",
    paragraphs: [
      "At the very center of the fourth verse the psalm pivots on a single hinge: &ldquo;The wicked are not so.&rdquo; After the lush and living portrait of the blessed man, these four words fall like a sudden shadow. The psalm is fundamentally a poem of two ways, and now it turns to the second way, the way that leads not to fruitfulness but to ruin. The contrast could not be more stark, and the abruptness of the turn is part of its power.",
      "The wicked are emphatically &ldquo;not so.&rdquo; They are not planted; they are not rooted; they are not beside the water; they do not bear fruit in season; their leaf does not endure. Everything that was said of the blessed man is denied to them. Where his life is settled, sustained, and fruitful, theirs is rootless, dry, and barren. The psalm does not pause to argue the point; it simply sets the two pictures side by side and lets the difference speak for itself.",
      "It is worth pausing on who the wicked are in this psalm, lest we imagine some rare class of monstrous villains. The wicked are simply those described at the start: those whose counsel ignores God, those whose path is the way of sinners, those who sit at last in the seat of scoffers. They are not necessarily flagrant criminals; they are people who have organized their lives without reference to the Lord and his word. Their wickedness is, at root, a settled indifference or hostility to God that bears its inevitable fruit, or rather its inevitable barrenness.",
      "The deepest tragedy of the way of the wicked is its rootlessness. The blessed man drinks from a stream that lies beneath the surface and outlasts every drought; the wicked have no such hidden source. They may flourish for a time on the surface of life, green and impressive in the eyes of the world, but they have nothing to draw on when the heat comes. Theirs is a borrowed and temporary vitality, and the psalm is about to expose just how light and insubstantial it really is when weighed in the balance of God.",
      "&ldquo;Therefore the wicked will not stand in the judgment, nor sinners in the congregation of the righteous&rdquo; (1:5). The word &ldquo;therefore&rdquo; is important: this is not an arbitrary verdict but the natural consequence of all that has gone before. Because the wicked are like chaff, they cannot stand; because they have no root, they have no place to remain. When the searching wind of God&rsquo;s judgment blows, what is weightless is simply swept away.",
      "To &ldquo;not stand in the judgment&rdquo; is to be unable to hold one&rsquo;s ground when God examines the life. And to be excluded from &ldquo;the congregation of the righteous&rdquo; is to be cut off from the assembled people of God, the gathered community of the blessed. The wicked may have walked and stood and sat with sinners and scoffers in this life, choosing that company freely; in the end they will find that they have chosen their company for eternity, shut out from the fellowship of those who delighted in the Lord.",
      "There is a sober warning here for every reader, and it is the warning the whole Psalter will return to again and again. The two ways are real, and they lead to two destinies. There is no third path, no neutral ground between rootedness in God and rootlessness apart from him. The psalm holds the two before us not to crush us with fear but to call us, while there is still time, to abandon the way that perishes and to be planted by the streams of living water.",
    ],
  },
  {
    id: "Chaff the Wind Drives Away",
    heading: "Chaff the Wind Drives Away",
    reference: "Psalm 1:4",
    paragraphs: [
      "&ldquo;The wicked are not so, but are like chaff that the wind drives away&rdquo; (1:4). If the blessed man is a tree, the wicked are chaff &mdash; and the contrast between these two images is the whole psalm in miniature. A tree is rooted, weighty, alive, fixed in its place; chaff is loose, weightless, dead, and entirely at the mercy of the wind. To understand the warning of the psalm, we must understand what chaff is and what happens to it.",
      "In the ancient process of harvesting grain, the cut stalks were brought to the threshing floor, usually a flat, exposed place on a hilltop where the wind could blow freely. There the grain was beaten or trodden to break the kernels loose from the husks and stalks. Then came the winnowing: the threshed mixture was tossed up into the air with a fork or shovel, and the wind did its sorting work. The heavy grain, full of substance, fell back down to the floor to be gathered; the light chaff &mdash; the worthless husks and broken straw &mdash; was caught by the breeze and carried away.",
      "This is the image the psalm presses upon us. The wicked are chaff: not evil in some dramatic, substantial way, but light, empty, without the weight of true and lasting worth. They have the appearance of belonging to the harvest &mdash; the chaff and the grain grow together on the same stalk &mdash; but when the testing wind comes, the difference is exposed at once. What has no root and no substance simply cannot remain. The wind that the grain does not even feel sends the chaff scattering across the floor and away.",
      "The contrast with the tree is total and deliberate. The tree is planted; the chaff is uprooted. The tree stands by the water and endures the drought; the chaff is swept off the dry hilltop by the slightest breeze. The tree bears fruit that feeds and gladdens; the chaff bears nothing and feeds no one. The tree is gathered and tended; the chaff is discarded and forgotten. Every quality of the blessed life finds its dark opposite in this picture of the wicked, and the difference between them is the difference between weight and weightlessness before God.",
      "The biblical imagery of winnowing carries this idea forward into the language of final judgment. John the Baptist spoke of the Messiah as one whose &ldquo;winnowing fork is in his hand, and he will clear his threshing floor and gather his wheat into the barn, but the chaff he will burn with unquenchable fire&rdquo; (Matthew 3:12). The harvest of the world will one day be brought to the floor, and the wind of God&rsquo;s judgment will make the final separation. What seemed to belong together in the field will be parted forever, the wheat gathered and the chaff driven away.",
      "There is a searching question in this image for each of us. Are we grain or chaff? Do our lives have the weight of substance that comes from being rooted in God and his word, or are we light and empty, impressive only until the wind blows? The psalm does not leave the matter abstract. It presses the question home, because the answer determines everything about where we will be when the threshing floor is cleared.",
      "And yet the psalm is not finally a counsel of despair, for chaff need not remain chaff. The whole point of placing this beatitude at the threshold of the Psalter is to call the reader in &mdash; to invite the rootless to be planted, the weightless to be filled, the chaff to become wheat by taking up delight in the law of the Lord. The wind that drives away the chaff is the same wind that the deep-rooted tree withstands; the difference lies in where, and in whom, the life is planted.",
    ],
  },
  {
    id: "The Lord Knows the Righteous",
    heading: "The Lord Knows the Righteous",
    reference: "Psalm 1:6",
    paragraphs: [
      "The psalm closes with a single verse that gathers up everything that has come before and rests it all upon the character and knowledge of God: &ldquo;for the Lord knows the way of the righteous, but the way of the wicked will perish&rdquo; (1:6). Here at last we are given the reason behind the two destinies. It is not merely that the righteous are stronger or the wicked weaker; it is that the Lord himself knows the one way and not the other.",
      "The word &ldquo;knows&rdquo; here means far more than mere awareness. God is, of course, aware of every path and every person; nothing is hidden from him. But to &ldquo;know&rdquo; in the deep biblical sense is to recognize, to cherish, to enter into intimate covenant relationship. When the Lord &ldquo;knows&rdquo; the way of the righteous, he watches over it, attends to it, claims it as his own. It is the knowing of a shepherd who knows his sheep by name, of a father who knows his child. The blessed man flourishes not ultimately because of his root system but because the eye of God is upon his path with covenant love.",
      "This is the deepest ground of the whole psalm. The tree endures the drought because it is planted by water; but it is planted by water because the Lord knows and tends its way. The security of the righteous is not finally located in themselves but in the God who knows them. Their flourishing rests on his faithful regard, and because he does not change, neither does their hope. To be known by God is to be held by God, and to be held by God is to be safe forever.",
      "Against this stands the bleak finality of the other half of the verse: &ldquo;but the way of the wicked will perish.&rdquo; The contrast is not symmetrical, and the asymmetry is the whole point. The Lord knows the one way; the other simply perishes. The way of the wicked is not so much actively destroyed as left to its own nature; rootless and unknown, it comes to nothing of itself. It leads nowhere and ends in ruin, because it was never connected to the only source of life. To walk a way that God does not know is to walk a way that has no future.",
      "So the psalm ends where it began, with the two ways set before us, but now their ends are revealed: the one way known and kept by God, the other perishing. The whole of Scripture will echo this fork in the road, down to the words of Christ himself about the broad way that leads to destruction and the narrow way that leads to life. Psalm 1 sets this great choice at the very front of the Psalter so that every prayer and praise that follows is offered by those who have chosen the way of the blessed.",
      "And here, finally, the psalm points beyond itself to Christ. For who has ever perfectly walked not in the counsel of the wicked, never stood in the way of sinners, never sat in the seat of scoffers? Who has truly delighted in the law of the Lord and meditated on it day and night, without a single lapse? Only one man in all of history: the Lord Jesus, the truly Blessed Man, the perfectly righteous one. He is the tree planted by the water whose leaf never withered, who bore fruit in every season, in whom God was wholly pleased.",
      "And the wonder of the gospel is that the Blessed Man stood in the place of the wicked. The one whose way the Lord perfectly knew was driven away like chaff at the cross, cut off from the congregation, so that we who were chaff might be planted by the streams of living water and counted among the righteous. We do not become the blessed man by our own striving; we are joined to him by faith, rooted in him, and made to share his blessing. Psalm 1 is fulfilled in Christ, and in him its beatitude becomes ours.",
    ],
  },
];

const videoItems = [
  { videoId: "GswSg2ohqmA", title: "BibleProject - The Book of Psalms Overview" },
  { videoId: "j9phNEaPrv8", title: "Psalm 1 Explained - The Two Ways" },
  { videoId: "l9vn5UvsHvM", title: "The Tree Planted by Streams of Water - Meditation" },
  { videoId: "YQHsXMglC9A", title: "Blessed Is the Man - A Study of Psalm 1" },
];

export default function Psalm1GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 1
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The gateway psalm and the two ways &mdash; the blessed man who delights in the law of the Lord, the tree planted by streams of water, the wicked as chaff the wind drives away, and the God who knows the way of the righteous while the way of the wicked perishes.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Psalm 1 through visual teaching on the two ways, the blessed man who meditates on the law of the Lord, the tree planted by streams of water, and the chaff the wind drives away.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Planted by the Streams of Living Water</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Psalm 1 sets the two ways before every reader at the threshold of the Psalter: the blessed man rooted in God&rsquo;s word who flourishes like a tree by the water, and the wicked who are like chaff the wind drives away. Its enduring call still sounds &mdash; to delight in the law of the Lord, to be planted in Christ the truly Blessed Man, and to walk the way that the Lord knows and keeps forever.
          </p>
        </div>
      </main>
    </div>
  );
}
