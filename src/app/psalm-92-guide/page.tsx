"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = GREEN;

type VideoEntry = { videoId: string; title: string };

const VIDEOS: VideoEntry[] = [];

function VideoEmbed({ v }: { v: VideoEntry }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: "1rem" }}>
      {open ? (
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={`https://www.youtube.com/embed/${v.videoId}?autoplay=1`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
          />
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "1rem", cursor: "pointer", textAlign: "left", color: TEXT }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "1.25rem" }}>&#9654;</span>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{v.title}</div>
              <div style={{ fontSize: "0.85rem", color: MUTED }}>Click to play</div>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

const TABS = ["Overview", "Themes", "Verse by Verse", "Application"];

const KEY_DETAILS = [
  { label: "Superscription", value: "A Psalm. A Song for the Sabbath Day" },
  { label: "Author", value: "Anonymous (Talmud: Moses; LXX adds 'David')" },
  { label: "Collection", value: "Book IV (Psalms 90-106)" },
  { label: "Genre", value: "Hymn of praise with wisdom elements" },
  { label: "Key Theme", value: "Sabbath praise, the depth of God's works, righteous flourishing" },
  { label: "Key Verse", value: "v. 1 -- It is good to give thanks to the LORD" },
  { label: "NT Connection", value: "Hebrews 4:9-11 Sabbath rest; John 15:1-8 bearing fruit in old age" },
];

const TREE_TABLE = [
  { tree: "Palm tree (tamar)", quality: "Upright, productive year-round", meaning: "Consistent fruitfulness in righteousness" },
  { tree: "Cedar of Lebanon", quality: "Massive, fragrant, long-lived", meaning: "Strength, permanence, majesty" },
  { tree: "Planted in the house of the LORD", quality: "Fed by divine waters", meaning: "Life rooted in worship and God's presence" },
];

const THEMES = [
  {
    color: GREEN,
    title: "The Sabbath Psalm: Why Rest and Praise Belong Together",
    body: `Psalm 92 is unique in the Psalter as the only psalm bearing the superscription "A Song for the Sabbath Day." This liturgical designation connects the psalm to the fourth commandment (Exodus 20:8-11) and to the entire theology of Sabbath rest that runs from creation (Genesis 2:1-3) through Israel's law (Deuteronomy 5:12-15) and into the New Testament vision of eternal rest (Hebrews 4:9-11). The Sabbath is not merely a day off from work; it is the day designated for conscious engagement with God's works, God's character, and God's covenant.
<br/><br/>
The psalm's opening declaration -- "It is good to give thanks to the LORD, to sing praises to your name, O Most High" -- establishes that Sabbath activity is fundamentally doxological. The Sabbath is a rehearsal of what the people of God are created to do: praise. Calvin writes: "The Sabbath was instituted not for laziness but for sacred meditation -- that men, freed from their earthly occupations, might devote themselves wholly to the contemplation of the works and word of God." The Mishnah (Tamid 7:4) records that this psalm was specifically sung by the Levites in the Temple on the Sabbath, giving it the most precise liturgical setting of any psalm.
<br/><br/>
The morning/evening structure of verses 2-3 -- "to declare your steadfast love in the morning, and your faithfulness by night" -- mirrors the Sabbath rhythm. Morning praise and evening praise bracket the day, transforming all the hours in between into sacred time. Spurgeon notes: "The morning speaks of mercies new, the evening of faithfulness proved across the day. Together they encompass the whole of human experience in the language of praise." This structure also anticipates the new creation, where the people of God "will serve him day and night in his temple" (Revelation 7:15) -- Sabbath praise extended into eternity.
<br/><br/>
For the New Testament believer, Hebrews 4:9-11 declares that "there remains a Sabbath rest for the people of God" -- a rest that finds its fulfillment not in a day of the week but in the person of Christ, who said "Come to me, all who labor and are heavy laden, and I will give you rest" (Matthew 11:28). The Sabbath psalm thus points beyond the Levitical Temple to the one in whom all worship and rest finds its ultimate home.`,
  },
  {
    color: TEAL,
    title: "How Deep Are Your Works: The Wisdom of Marveling at God",
    body: `Verses 5-6 form a wisdom contrast at the heart of Psalm 92: "How great are your works, O LORD! Your thoughts are very deep! The stupid man cannot know; the fool cannot understand this." The exclamation of verses 5 is not a hymn fragment but a wisdom verdict: the greatness and depth of God's works are the subject of Sabbath meditation, and the failure to perceive them is the mark of the fool.
<br/><br/>
The Hebrew word for "deep" (amaq) describes something unfathomably profound -- the same root used of the "deep" things of God in Job 11:7-8 ("Can you find out the deep things of God?") and 1 Corinthians 2:10 ("the Spirit searches everything, even the depths of God"). The psalmist is not saying that God's works are merely complicated; he is saying they have a depth that the self-sufficient, God-ignoring person cannot begin to plumb. What looks on the surface like randomness, injustice, or delay in God's governance of the world is actually working out a purpose far deeper than human wisdom can trace.
<br/><br/>
The "stupid man" (ba'ar, literally "brutish, bestial") and the "fool" (kesil) of verse 6 appear frequently in Proverbs as the archetypes of wisdom's opposites. Their defining characteristic is not intellectual limitation but moral choice: they have decided that God's works are not worth attending to, that the surface of things is all there is, that the wicked prosper and the righteous suffer and this is all there is to say. Psalm 73 begins with exactly this confusion before the sanctuary visit that reframes everything; Psalm 92 begins with the reframing already in place.
<br/><br/>
Tremper Longman III observes: "The psalmist's 'how great' and 'very deep' are not just emotional exclamations but cognitive claims: God's works exceed the capacity of the casual observer to evaluate. The Sabbath is the time when the community slows down enough to perceive the depth that the working week rushes past." This is the epistemological argument for Sabbath worship: the busy, the distracted, the self-absorbed will consistently misread God's governance of the world. Only those who pause to attend, to meditate, to praise -- only they begin to see what is really happening.`,
  },
  {
    color: GOLD,
    title: "Though the Wicked Sprout Like Grass: The Theology of Apparent Prosperity",
    body: `Verses 7-9 address one of the most persistent pastoral challenges in the Psalter: the apparent prosperity of the wicked. "Though the wicked sprout like grass and all evildoers flourish, they are doomed to destruction forever." The psalmist uses the very image of flourishing (sprout, flourish) to point to its underlying fragility: grass is the biblical image of what is quick to appear and quick to perish (Psalm 90:5-6; Isaiah 40:6-8; 1 Peter 1:24).
<br/><br/>
The contrast between grass and the trees of verses 12-14 is deliberate and theologically rich. The wicked sprout like grass: rapid, lush, impressive -- and gone in a season. The righteous flourish like the palm tree and grow like the cedar of Lebanon: slower, deeper, more permanent, and increasingly productive with age. This is the long-horizon vision that Sabbath perspective cultivates. Without Sabbath rest and reflection, we evaluate success on a time horizon that is too short to see what God is actually doing.
<br/><br/>
Verse 9 is a striking exclamation: "For behold, your enemies, O LORD, for behold, your enemies shall perish; all evildoers shall be scattered." The repetition of "for behold" is emphatic: look at this, don't miss it. Calvin comments: "The repetition is designed to awaken our attention, for we are prone to overlook the divine judgments, especially when they are delayed. The psalmist says: look again, and keep looking, for the enemies of the LORD are perishing, even when it appears they are prevailing." The Sabbath provides the contemplative time to look again at apparent prosperity and see what is really there.
<br/><br/>
Paul uses this same temporal correction in Romans 8:18: "I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us." The "present time" assessment and the "to be revealed" assessment produce completely different verdicts on the same situation. Psalm 92's Sabbath perspective trains the soul to live by the longer horizon, refusing to evaluate God's justice by the snapshots of a single moment.`,
  },
  {
    color: PURPLE,
    title: "Flourishing in Old Age: Grace-Sustained Fruitfulness",
    body: `Verses 12-15 contain one of Scripture's most beautiful promises about aging: "The righteous flourish like the palm tree and grow like a cedar in Lebanon. They are planted in the house of the LORD; they flourish in the courts of our God. They still bear fruit in old age; they are ever full of sap and green, to declare that the LORD is upright; he is my rock, and there is no unrighteousness in him."
<br/><br/>
The palm tree (tamar) is a tree of remarkable characteristics: it can live for over 100 years, bears fruit throughout its life, and some varieties produce more fruit as they age. The cedar of Lebanon is famous for its height (up to 40 meters), longevity (1,000+ years), and the quality of its fragrant wood, which was prized above all other timber for the Temple itself. Both trees are images of something that takes time to mature, that is not impressive at first glance, but that grows more magnificent with age.
<br/><br/>
The phrase "still bear fruit in old age" (aod yenuvun besiyvah) is among the most counter-cultural promises in Scripture. In a culture that worships youth and dreads the aging process, Psalm 92 declares that the righteous person's most productive years may be their last. Derek Kidner notes: "The psalm presents old age not as a period of declining usefulness but as a season of distilled fruitfulness -- the product of decades of being planted in the house of the LORD." Caleb at 85 (Joshua 14:10-12), Anna at 84 (Luke 2:36-38), and Paul writing his most theologically rich letters from prison are all illustrations of this principle.
<br/><br/>
The secret of this old-age fruitfulness is stated in verse 13: "planted in the house of the LORD." The tree's vitality comes from its roots, and the roots of the righteous are sunk into the courts of God -- into worship, Scripture, prayer, and community with God's people. Spurgeon: "Those who are rooted in the sanctuary are nourished by hidden streams. The drought of circumstances does not dry them up, for their roots go deeper than circumstances can reach." For Christians, this is the promise of abiding: "He who abides in me and I in him, he it is that bears much fruit" (John 15:5). Old age fruitfulness is simply sustained abiding made visible.`,
  },
  {
    color: ROSE,
    title: "My Rock, No Unrighteousness in Him: The Theodicy of Praise",
    body: `The psalm closes with a remarkable theodicy: "to declare that the LORD is upright; he is my rock, and there is no unrighteousness in him" (v. 15). This final verse is the conclusion to which the whole psalm has been building. All the evidence of the wicked's apparent prosperity (vv. 7-9), all the righteous person's experience of struggle (implied throughout), arrives at this creedal statement: God is upright. There is no unrighteousness in him.
<br/><br/>
This is not an argument but a confession -- a doxological declaration made in the face of all evidence that might be marshaled against it. The psalmist has looked at the wicked sprouting like grass and the righteous struggling like young trees. He has looked at God's deep and sometimes incomprehensible works. And his conclusion is not "the ledger balances out" or "it will all make sense in the end" but "he is my rock, and there is no unrighteousness in him." This is faith confessing what it cannot prove to the satisfaction of all observers.
<br/><br/>
The title "my rock" (tzuri) is deeply personal -- not "the rock" in the abstract but "my rock," the foundation of this specific psalmist's life. It echoes throughout the Psalter (18:2; 19:14; 28:1; 31:3; 62:2; 144:1) as one of the most intimate and stable of the divine titles. The rock does not shift with circumstances; it is the fixed point by which all other things are measured. To declare that God is my rock is to declare that my evaluation of reality begins with God, not with the current appearance of things.
<br/><br/>
Matthew Henry writes: "The psalm ends not with a syllogism but with a song -- not 'therefore God must be righteous' but 'he is my rock, and there is no unrighteousness in him.' This is the language of faith, which has learned to praise its way to theodicy rather than argue its way there." The NT ground for this confession is the cross, where God's justice and mercy met at the deepest point -- where the apparent injustice of the righteous One dying for unrighteous ones proves to be the most brilliant exhibition of God's righteousness ever displayed (Romans 3:25-26).`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-3",
    text: "It is good to give thanks to the LORD, to sing praises to your name, O Most High; to declare your steadfast love in the morning, and your faithfulness by night, to the music of the lute and the harp, to the melody of the lyre.",
    comment: `The opening declaration "it is good" (tov) functions as a wisdom verdict: praise is not merely commanded but is intrinsically good -- appropriate to the nature of God and beneficial to the nature of the worshipper. The titles "LORD" (YHWH, covenant name) and "Most High" (Elyon, transcendence title) pair covenant intimacy with cosmic sovereignty. The morning/evening structure frames the entire day as praise: "steadfast love" (hesed) dominates the morning -- God's favor as the first thing to meet the day; "faithfulness" (emunah) is declared at night -- reviewing the day's evidence of God's reliability. The musical instruments specified (lute, harp, lyre) reflect Temple worship at its most elaborate and joyful.`,
  },
  {
    ref: "vv. 4-5",
    text: "For you, O LORD, have made me glad by your work; at the works of your hands I sing for joy. How great are your works, O LORD! Your thoughts are very deep!",
    comment: `The personal testimony of verse 4 grounds the general praise of verses 1-3 in specific experience: "you have made me glad by your work." The singular "work" (po'al) refers to any specific saving act of God in the psalmist's experience; the plural "works of your hands" broadens to God's comprehensive activity in creation and history. Verse 5 is a wisdom exclamation: "how great" (mah gadlu) and "very deep" (amqu me'od) together assert that God's works exceed human measurement both in scale and in depth. Calvin: "The exclamation is designed to arrest us: we are slow to wonder at what we ought most to wonder at, and we pass over God's works as though they were nothing."`,
  },
  {
    ref: "vv. 6-7",
    text: "The stupid man cannot know; the fool cannot understand this: that though the wicked sprout like grass and all evildoers flourish, they are doomed to destruction forever.",
    comment: `The "stupid man" (ba'ar) and "fool" (kesil) are wisdom categories for those who lack the spiritual perception to interpret God's works correctly. Their specific failure is identified: they cannot perceive the true significance of the wicked's flourishing -- what looks like God's absence or indifference is actually the penultimate chapter before "destruction forever" (literally, "until eternity," ad-olam). The grass image (sprouting, flourishing) deliberately uses the vocabulary of abundant life to point to its own fragility: grass is the biblical symbol of what is vivid and gone (Isaiah 40:6-8). The fool reads the present moment as the final verdict; wisdom reads the present moment in light of the ultimate verdict.`,
  },
  {
    ref: "vv. 8-9",
    text: "But you, O LORD, are on high forever. For behold, your enemies, O LORD, for behold, your enemies shall perish; all evildoers shall be scattered.",
    comment: `Verse 8 pivots from the wicked's apparent prosperity to the eternal reality: "you, O LORD, are on high forever." The LORD's elevation above all circumstances is permanent (marom le'olam -- "on high unto eternity"). This single statement reframes everything that precedes and follows: whatever the wicked do, however they prosper, the LORD is enthroned above it all and beyond their reach. Verse 9's double "for behold" (ki hinneh) is an urgent summons to look: stop looking at the wicked's present success and look at their ultimate destiny. The enemies of the LORD "shall perish" (yo'vedu) and "be scattered" (yitparradu) -- both future verbs expressing certainty, not mere hope.`,
  },
  {
    ref: "vv. 10-11",
    text: "But you have exalted my horn like that of the wild ox; you have poured over me fresh oil. My eye has looked in triumph on my enemies; my ears have heard of the doom of my evil assailants.",
    comment: `The "horn of the wild ox" (re'em) was the ancient symbol of irresistible power -- the wild ox (possibly the aurochs, now extinct) was famous for its untamable strength. The psalmist declares that the LORD has given him this kind of exaltation. "Fresh oil" (shemen ra'anan -- literally "luxuriant oil") suggests the anointing of a victor or the lavish hospitality of a generous host (cf. Psalm 23:5). Verses 10-11 are the psalmist's personal testimony of vindication: the triumph he has personally witnessed and heard confirms the general principle of verses 7-9. The wicked's doom is not abstract theology; it has been personally observed.`,
  },
  {
    ref: "vv. 12-14",
    text: "The righteous flourish like the palm tree and grow like a cedar in Lebanon. They are planted in the house of the LORD; they flourish in the courts of our God. They still bear fruit in old age; they are ever full of sap and green.",
    comment: `The central image of the psalm's positive vision: two trees renowned for longevity and productivity. The palm (tamar) bears fruit across its entire lifespan and is a Near Eastern symbol of victory and abundance (hence Jericho was "the city of palms," Deuteronomy 34:3). The cedar of Lebanon is the premier tree of the ancient world -- towering, massively trunked, fragrant, extraordinarily long-lived. Both trees are "planted in the house of the LORD" -- their vitality derives from their root system's connection to the divine presence. Kidner: "The secret of their flourishing is not their own native strength but the soil in which they are planted." The promise of verse 14 -- "still bear fruit in old age, ever full of sap and green" -- directly contradicts the world's verdict on aging.`,
  },
  {
    ref: "v. 15",
    text: "...to declare that the LORD is upright; he is my rock, and there is no unrighteousness in him.",
    comment: `The psalm's theological climax is a confession rather than an argument. The old-age fruitfulness of verse 14 has one purpose: "to declare that the LORD is upright." The righteous person's flourishing life is theodicy in action -- living proof that God is not unrighteous, that his ways are right, that the Sabbath perspective on human life (looking up, long-horizon, rooted in worship) is vindicated. "He is my rock" (tzuri) is deeply personal: not a general theological proposition but a first-person claim of ultimate dependence. "No unrighteousness in him" (ve-lo 'avlatah bo) is the answer to every accusation, every lament, every confused observation of the world. Calvin: "In the end, faith does not calculate its way to confidence in God; it sings its way there."`,
  },
];

const APPLICATIONS = [
  {
    color: GREEN,
    title: "Sabbath as Sabbath: Recovering the Day of Praise-Meditation",
    body: `Psalm 92 is the only Sabbath psalm, and its content gives us the theological substance of what Sabbath is for: praise (vv. 1-3), meditation on God's works (vv. 4-5), wisdom correction of false appearances (vv. 6-9), and testimony of personal vindication (vv. 10-11). The Sabbath is not a blank space in the week; it is a time filled with specific content -- the content of conscious engagement with the character and works of God.
<br/><br/>
The morning/evening structure of verse 2 suggests that the day begins and ends with deliberate praise. What would it look like to bookend Sunday (or your Sabbath) with morning declaration of God's steadfast love and evening declaration of his faithfulness? Not merely attendance at a worship service but a personal and communal practice of the praise that Psalm 92 models?
<br/><br/>
<em>Prayer prompt</em>: Lord, on this day of rest, I pause to attend to your works. I declare your steadfast love this morning: you have been faithful, you have not abandoned me, your mercies are new. I will declare your faithfulness tonight: you have upheld me through this day, and there is no unrighteousness in you. Make me full of sap and green, a tree that flourishes in your courts and bears fruit even in old age. Amen.`,
  },
  {
    color: TEAL,
    title: "The Long Horizon: Resisting Grass-Theology",
    body: `One of Psalm 92's greatest gifts to the Christian life is its sustained counter-argument against what might be called "grass-theology" -- the tendency to evaluate God's justice by the snapshot of the present moment. The wicked sprout like grass (impressive, lush) and we conclude that God is not fair, or not active, or not powerful. The righteous suffer and we conclude the same. Psalm 92 refuses this conclusion not by denying the apparent prosperity of the wicked but by placing it in a larger time frame: they are "doomed to destruction forever."
<br/><br/>
The practical application is the discipline of the long horizon. When facing evidence that seems to contradict God's justice, ask: am I evaluating this on a Sabbath time horizon (eternity) or a weekday time horizon (this week)? The stupid man and the fool of verse 6 are not stupid or foolish because they are unintelligent; they are foolish because their time horizon is too short to see what God is doing.
<br/><br/>
Romans 8:18 provides the NT form of this discipline: "I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed." The word "consider" (logizomai) is a deliberate cognitive act -- a choice to weigh present suffering against future glory on the scale of eternity rather than the scale of this week. This is what Psalm 92's Sabbath trains us to do.`,
  },
  {
    color: GOLD,
    title: "Still Bearing Fruit in Old Age: A Vision for Every Season of Life",
    body: `Verses 12-15 offer one of Scripture's most positive and counter-cultural visions of aging. The righteous are not fading; they are trees growing into their full stature. Their sap is still green; they still bear fruit; they are still declaring the uprightness of the LORD. This is not wishful thinking but a promise grounded in the means of grace: they are "planted in the house of the LORD," drawing their life from the divine presence through worship and Scripture.
<br/><br/>
This vision has practical implications for how the church values its older members. The consumerist vision of aging (decline, withdrawal, eventual irrelevance) is directly contradicted by Psalm 92. The church that dismisses its elderly as past usefulness has adopted grass-theology about its own members. The Sabbath psalm says: these are your cedars, your palm trees -- the most long-rooted, deeply established, potentially most fruitful members of the community.
<br/><br/>
And for those in middle age who fear the future, or in old age who sense declining capacity: the psalm's promise is not that physical vigor will be maintained indefinitely, but that spiritual fruitfulness -- the fruit of wisdom, testimony, intercession, and faith -- can increase even as physical capacity decreases. Paul, physically "hard pressed on every side" but spiritually "not crushed" (2 Corinthians 4:8), "wasting away outwardly but being renewed inwardly day by day" (2 Corinthians 4:16) -- this is the Psalm 92 life.`,
  },
  {
    color: ROSE,
    title: "He Is My Rock: Finding Theodicy in Confession",
    body: `The final verse of Psalm 92 is a confession that arrives at the end of a journey rather than at the beginning of an argument. The psalmist has meditated on God's great and deep works. He has seen the wicked flourish and has understood what that actually means. He has experienced personal vindication. And he arrives at: "He is my rock, and there is no unrighteousness in him." This is not the conclusion of a philosophical argument; it is the fruit of Sabbath contemplation, personal experience, and covenant relationship.
<br/><br/>
This matters enormously for how Christians engage with theodicy -- the problem of evil and God's justice. The Psalter repeatedly suggests that the path to confidence in God's justice runs through worship, not through philosophical argument. Psalm 73 takes Asaph from confusion about the wicked's prosperity all the way through to "God is the strength of my heart and my portion forever" (Psalm 73:26) -- but the turning point is the sanctuary visit (73:17), not a logical breakthrough. Psalm 92 traces the same path: Sabbath praise, meditation on God's works, and personal experience combine to produce the final doxological theodicy: "There is no unrighteousness in him."
<br/><br/>
For those struggling with God's justice, Psalm 92 prescribes not more argument but more Sabbath -- more deliberate praise, more meditation on God's works, more attendance at worship, more testimony from those who have been "planted in the house of the LORD" long enough to grow into palm trees and cedars. The confession "he is my rock" is not the starting point; it is the destination. And the road to it runs through the Sabbath.`,
  },
];

export default function Psalm92Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openTheme, setOpenTheme] = useState<number | null>(null);
  const [openVerse, setOpenVerse] = useState<number | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #071507 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ background: ACCENT, color: "#fff", fontSize: "0.75rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.08em", padding: "0.25rem 0.75rem", borderRadius: "999px", textTransform: "uppercase" }}>Psalm 92</span>
            <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif" }}>The Sabbath Psalm &bull; 15 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 1rem" }}>
            It Is Good to Give Thanks to the LORD
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: "680px", margin: "0 0 1.5rem" }}>
            The only psalm designated for the Sabbath day -- a wisdom hymn declaring the goodness of morning and evening praise, the folly of misreading the wicked's prosperity, and the glorious promise that the righteous planted in God's courts bear fruit even in old age.
          </p>
          <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1.25rem", margin: "0", color: TEXT, fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7 }}>
            &ldquo;They still bear fruit in old age; they are ever full of sap and green, to declare that the LORD is upright; he is my rock, and there is no unrighteousness in him.&rdquo;
            <span style={{ display: "block", fontSize: "0.85rem", color: MUTED, fontStyle: "normal", marginTop: "0.5rem" }}>&mdash; Psalm 92:14-15</span>
          </blockquote>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: activeTab === i ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === i ? ACCENT : MUTED, fontWeight: activeTab === i ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "sans-serif", fontSize: "0.95rem", transition: "color 0.2s" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1.5rem" }}>

        {/* OVERVIEW */}
        {activeTab === 0 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", color: ACCENT }}>Overview of Psalm 92</h2>
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Psalm 92 is unique in the Psalter: it is the only psalm bearing the liturgical superscription "A Song for the Sabbath Day" (shir leyom hashabbat). This designation connects the psalm to the entire biblical theology of Sabbath, from the rest of God in creation (Genesis 2:1-3) to the Levitical Sabbath command (Exodus 20:8-11) to the vision of eternal rest in Hebrews 4. The Mishnah (Tamid 7:4) records that Psalm 92 was sung by the Levitical choir in the Jerusalem Temple specifically on the Sabbath, giving it the most precise liturgical setting of any psalm in the collection.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The psalm moves through a carefully constructed arc. It opens with the declaration that praise is good and with the morning/evening rhythm of Sabbath worship (vv. 1&ndash;3). It then moves to a wisdom exclamation about the depth of God's works (vv. 4&ndash;5), a judgment on the fool who misreads the wicked's prosperity (vv. 6&ndash;7), and a confident declaration of God's eternal enthronement and the enemies' ultimate doom (vv. 8&ndash;9). The psalmist testifies to personal vindication (vv. 10&ndash;11) before arriving at the psalm's most famous image: the righteous flourishing like palm trees and cedars, bearing fruit even in old age (vv. 12&ndash;14), with the final confession that "the LORD is upright; he is my rock, and there is no unrighteousness in him" (v. 15).` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The Talmud (Rosh Hashana 31a) records an ancient tradition attributing the psalm to Moses, seeing it as his meditation on the first Sabbath. This attribution appears in some LXX manuscripts. While modern scholars are divided on the question of authorship, the connection to Moses is theologically fitting: the great lawgiver who meditated on God's eternal nature in Psalm 90 here meditates on the Sabbath as the weekly rehearsal of that eternal perspective.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The psalm's central theological tension is the same as Psalms 37, 49, and 73: the apparent prosperity of the wicked versus the suffering of the righteous. But Psalm 92 addresses this tension not through extended argument (like Psalm 37) or visionary breakthrough (like Psalm 73) but through Sabbath wisdom: the person who pauses to attend to God's works, to praise morning and evening, to plant themselves in the courts of the LORD, develops a perspective that sees through the surface appearance of things to the deeper reality.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: `For Christians, the Sabbath psalm finds its fulfillment in Christ, who declared himself "lord of the Sabbath" (Matthew 12:8) and who invites all who labor and are heavy laden to come to him for rest (Matthew 11:28). The Sabbath rest that remains for the people of God (Hebrews 4:9-11) is not a day but a Person -- and the palm-tree flourishing of those planted in the LORD's courts is now the flourishing of those who abide in Christ (John 15:4-5).` }} />

            {/* Tree Table */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: ACCENT, fontFamily: "sans-serif" }}>The Trees of Psalm 92</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                  <thead>
                    <tr>
                      {["Tree", "Qualities", "Theological Meaning"].map(h => (
                        <th key={h} style={{ textAlign: "left", padding: "0.6rem 0.75rem", borderBottom: `2px solid ${BORDER}`, color: MUTED, fontFamily: "sans-serif", fontWeight: 600, fontSize: "0.8rem" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TREE_TABLE.map((row, i) => (
                      <tr key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
                        <td style={{ padding: "0.75rem", color: GOLD }}>{row.tree}</td>
                        <td style={{ padding: "0.75rem", color: TEXT }}>{row.quality}</td>
                        <td style={{ padding: "0.75rem", color: MUTED }}>{row.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Details */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: ACCENT, fontFamily: "sans-serif" }}>Key Details</h3>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {KEY_DETAILS.map(({ label, value }) => (
                  <div key={label} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "0.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "0.75rem" }}>
                    <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif", fontWeight: 600 }}>{label}</span>
                    <span style={{ color: TEXT, fontSize: "0.95rem" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: TEXT, fontFamily: "sans-serif" }}>Video Resources</h3>
            {VIDEOS.map((v) => <VideoEmbed key={v.videoId} v={v} />)}
          </div>
        )}

        {/* THEMES */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Major Themes</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>Click each theme to expand the full discussion.</p>
            {THEMES.map((theme, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: "10px", marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => setOpenTheme(openTheme === i ? null : i)} style={{ width: "100%", background: openTheme === i ? CARD : "transparent", border: "none", padding: "1.25rem 1.5rem", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                    <span style={{ color: TEXT, fontWeight: 600, fontSize: "1rem" }}>{theme.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: "1.25rem", flexShrink: 0 }}>{openTheme === i ? "-" : "+"}</span>
                </button>
                {openTheme === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ height: "1rem" }} />
                    <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Verse-by-Verse Commentary</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>Click each verse to expand the commentary.</p>
            {VERSES.map((v, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: "10px", marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => setOpenVerse(openVerse === i ? null : i)} style={{ width: "100%", background: openVerse === i ? CARD : "transparent", border: "none", padding: "1.25rem 1.5rem", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                    <div>
                      <span style={{ color: ACCENT, fontWeight: 700, fontFamily: "sans-serif", fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>{v.ref}</span>
                      <span style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.6 }}>&ldquo;{v.text}&rdquo;</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.25rem", flexShrink: 0 }}>{openVerse === i ? "-" : "+"}</span>
                  </div>
                </button>
                {openVerse === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ height: "1rem" }} />
                    <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: v.comment }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Application</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>How Psalm 92 shapes Sabbath practice, long-horizon faith, and aging well.</p>
            {APPLICATIONS.map((app, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${app.color}`, borderRadius: "10px", padding: "1.5rem", marginBottom: "1.25rem" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: app.color, marginBottom: "0.75rem", fontFamily: "sans-serif" }}>{app.title}</h3>
                <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: app.body }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
