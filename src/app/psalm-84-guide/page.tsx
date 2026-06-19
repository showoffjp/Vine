"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface ThemeItem {
  id: string;
  title: string;
  refs: string;
  body: string;
}

interface VerseItem {
  id: string;
  ref: string;
  label: string;
  body: string;
}

interface AppItem {
  title: string;
  accent: string;
  body: string;
}

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const overviewParas: string[] = [
  "Psalm 84 is one of the most beloved songs of longing in all of Scripture &mdash; a psalm that overflows with homesickness for the presence of God. &ldquo;How lovely is your dwelling place, O LORD of hosts! My soul longs, yes, faints for the courts of the LORD&rdquo; (84:1&ndash;2). This is not the cool admiration of a tourist for a beautiful building, but the deep ache of a worshiper whose whole being craves to be near God in his sanctuary. The temple is lovely to the psalmist because God is there.",
  "Like Psalms 42 and 43, this psalm is a song of the Sons of Korah, the Levitical singers who led Israel in worship. But where Psalm 42 is the lament of one cut off from the sanctuary, Psalm 84 is the glad song of the pilgrim on his way there &mdash; or perhaps already arrived. Many read it as a pilgrimage psalm, sung by those journeying up to Jerusalem for the great festivals, their hearts swelling as the city and its temple come into view.",
  "The psalm moves through a series of beatitudes &mdash; statements of who is &lsquo;blessed.&rsquo; Blessed are those who dwell in God&rsquo;s house, ever singing his praise (84:4). Blessed are those whose strength is in God, in whose heart are the highways to Zion (84:5). And blessed is the one who trusts in the LORD of hosts (84:12). Running through it all is the conviction that true happiness is found not in any earthly comfort but in nearness to the living God.",
  "At its heart lies one of the most famous declarations of love for God&rsquo;s presence in the Bible: &ldquo;For a day in your courts is better than a thousand elsewhere. I would rather be a doorkeeper in the house of my God than dwell in the tents of wickedness&rdquo; (84:10). The psalmist would gladly take the humblest place in God&rsquo;s house over the most luxurious comfort anywhere else. Nearness to God outweighs every rival good.",
  "The psalm also contains one of Scripture&rsquo;s most beautiful pictures of the pilgrim journey: &ldquo;As they go through the Valley of Baca they make it a place of springs&hellip; They go from strength to strength&rdquo; (84:6&ndash;7). The Valley of Baca &mdash; a valley of weeping or of dry balsam trees &mdash; is the hard, dry stretch of the road. But for those whose hearts are set on God, even the valley of tears becomes a place of springs, and they grow stronger, not weaker, as they travel toward him.",
  "Psalm 84 closes with one of the great titles of God: &ldquo;The LORD God is a sun and shield; the LORD bestows favor and honor. No good thing does he withhold from those who walk uprightly&rdquo; (84:11). This is the only place in the Old Testament where God is called a &lsquo;sun.&rsquo; He is light and warmth and life to his people, and at the same time their protection. For all who trust in him, he withholds no good thing. The psalm is a sustained invitation to set our hearts on the presence of God as our truest home.",
];

const structurePoints: { heading: string; text: string }[] = [
  { heading: "Longing for the Dwelling Place (84:1&ndash;2)", text: "How lovely is the LORD&rsquo;s dwelling place; the psalmist&rsquo;s soul longs and even faints for the courts of the LORD, crying out to the living God." },
  { heading: "Even the Sparrow Finds a Home (84:3&ndash;4)", text: "The sparrow and swallow nest near God&rsquo;s altars; blessed are those who dwell in his house, ever singing his praise." },
  { heading: "Blessed Are the Pilgrims (84:5&ndash;7)", text: "Blessed are those whose strength is in God; passing through the Valley of Baca they make it a place of springs and go from strength to strength." },
  { heading: "A Pilgrim&rsquo;s Prayer (84:8&ndash;9)", text: "O LORD God of hosts, hear my prayer; behold our shield, O God, and look on the face of your anointed." },
  { heading: "Better a Day, a Sun and Shield (84:10&ndash;12)", text: "A day in God&rsquo;s courts is better than a thousand elsewhere; the LORD is a sun and shield who withholds no good thing; blessed is the one who trusts in him." },
];

const themeItems: ThemeItem[] = [
  {
    id: "longing",
    title: "The Soul That Longs for God&rsquo;s Dwelling Place",
    refs: "Psalm 84:1&ndash;2; Psalm 27:4; Psalm 42:1&ndash;2; Philippians 1:23",
    body: "&ldquo;How lovely is your dwelling place, O LORD of hosts! My soul longs, yes, faints for the courts of the LORD; my heart and flesh sing for joy to the living God&rdquo; (84:1&ndash;2). The psalm opens with a longing so intense it borders on physical collapse &mdash; the soul does not merely wish for God&rsquo;s courts but &lsquo;faints&rsquo; for them. Heart and flesh together, the whole person, cry out for the living God. <br/><br/>What makes the dwelling place lovely is not its architecture but its occupant. The psalmist loves the courts of the LORD because the LORD is there. This is the same single-minded desire David expressed: &ldquo;One thing have I asked of the LORD&hellip; that I may dwell in the house of the LORD all the days of my life, to gaze upon the beauty of the LORD&rdquo; (Psalm 27:4). The deepest happiness of the human heart is nearness to God himself. <br/><br/>Under the new covenant, the dwelling place of God is no longer a building in Jerusalem but Christ himself, and his gathered people, and finally the new creation where God will dwell with us forever (Revelation 21:3). The longing of Psalm 84 is ultimately a longing for that unbroken presence &mdash; the homesickness for God that only heaven will fully satisfy.",
  },
  {
    id: "sparrow",
    title: "Even the Sparrow Finds a Home Near the Altar",
    refs: "Psalm 84:3&ndash;4; Matthew 10:29&ndash;31; Psalm 23:6; Luke 15:7",
    body: "&ldquo;Even the sparrow finds a home, and the swallow a nest for herself, where she may lay her young, at your altars, O LORD of hosts, my King and my God&rdquo; (84:3). The psalmist, far from the temple, almost envies the little birds that build their nests in the eaves and crannies of God&rsquo;s house. If the sparrow can make her home so near the altar, may not the worshiper find his home there too? <br/><br/>There is tender comfort in this image. The sparrow is small, common, and of little value in the world&rsquo;s eyes &mdash; yet God gives even her a place at his altars. Jesus pointed to the same humble bird to assure us of God&rsquo;s care: not one sparrow falls apart from the Father, and we are worth more than many sparrows (Matthew 10:29&ndash;31). If God makes room for the sparrow near his altar, he surely makes room for us. <br/><br/>&ldquo;Blessed are those who dwell in your house, ever singing your praise&rdquo; (84:4). The greatest blessing is simply to abide in God&rsquo;s presence, with a heart so settled in him that praise becomes continual. This is the home our souls were made for &mdash; not a place we visit, but a presence we dwell in.",
  },
  {
    id: "baca",
    title: "The Valley of Baca: Hardship Becoming Blessing",
    refs: "Psalm 84:5&ndash;7; Romans 5:3&ndash;5; James 1:2&ndash;4; 2 Corinthians 4:16&ndash;17",
    body: "&ldquo;Blessed are those whose strength is in you, in whose heart are the highways to Zion. As they go through the Valley of Baca they make it a place of springs; the early rain also covers it with pools. They go from strength to strength&rdquo; (84:5&ndash;7). The Valley of Baca &mdash; a name suggesting weeping or dry balsam trees &mdash; was a parched, difficult stretch on the pilgrim road to Jerusalem. It stands for the hard places every journey of faith must pass through. <br/><br/>But notice the wonder: the pilgrims whose hearts are set on Zion do not merely survive the valley of weeping &mdash; they transform it. They &lsquo;make it a place of springs.&rsquo; Where others find only dryness and tears, those who travel toward God find refreshment, and the early rains fill the valley with pools. The hardship itself becomes, in God&rsquo;s hands, a means of blessing. <br/><br/>This is the New Testament truth that suffering, for those who love God, produces endurance, character, and hope (Romans 5:3&ndash;5). &ldquo;They go from strength to strength&rdquo; &mdash; the pilgrim does not grow weaker as he travels but stronger, gathering fresh vigor with each stage, until he appears before God in Zion. The valley of tears is not a detour from the journey to God; it is part of the road, and even there springs are found.",
  },
  {
    id: "doorkeeper",
    title: "Better a Day, Better a Doorkeeper",
    refs: "Psalm 84:10; Philippians 3:8; Matthew 13:44; Hebrews 11:24&ndash;26",
    body: "&ldquo;For a day in your courts is better than a thousand elsewhere. I would rather be a doorkeeper in the house of my God than dwell in the tents of wickedness&rdquo; (84:10). Here is one of the great declarations of love for God in all of Scripture. The psalmist weighs a single day in God&rsquo;s presence against a thousand days anywhere else, and the one day wins. He would rather hold the lowliest post &mdash; standing at the threshold &mdash; in God&rsquo;s house than enjoy luxury and ease among the wicked. <br/><br/>This is the heart of true worship: it counts nearness to God as the supreme good, against which every rival pleasure is weighed and found wanting. Moses made the same choice, &ldquo;choosing rather to be mistreated with the people of God than to enjoy the fleeting pleasures of sin&rdquo; (Hebrews 11:25). Paul counted everything as loss for the surpassing worth of knowing Christ (Philippians 3:8). <br/><br/>The doorkeeper&rsquo;s humble place is better than the tents of wickedness because of who is inside the house. To be near God in the smallest way is better than to be far from him in the greatest splendor. This verse searches our hearts: do we truly believe that one day with God outweighs a thousand of the world&rsquo;s best days? Those who do have found the pearl of great price.",
  },
  {
    id: "sunshield",
    title: "The LORD a Sun and Shield Who Withholds No Good Thing",
    refs: "Psalm 84:11&ndash;12; Romans 8:32; Malachi 4:2; James 1:17",
    body: "&ldquo;For the LORD God is a sun and shield; the LORD bestows favor and honor. No good thing does he withhold from those who walk uprightly. O LORD of hosts, blessed is the one who trusts in you!&rdquo; (84:11&ndash;12). The psalm rises to a glorious double image of God. He is a &lsquo;sun&rsquo; &mdash; the only place in the Old Testament where this title is given to God &mdash; the source of light, warmth, and life. And he is a &lsquo;shield,&rsquo; the protection that guards his people from all harm. He gives both what we need to flourish and what we need to be safe. <br/><br/>&ldquo;No good thing does he withhold from those who walk uprightly.&rdquo; This is an astonishing promise of God&rsquo;s open-handed generosity. He is not a grudging God who must be pried open, but a Father who gladly gives every good thing to his children. Paul reasons from the greatest gift to all the rest: &ldquo;He who did not spare his own Son but gave him up for us all, how will he not also with him graciously give us all things?&rdquo; (Romans 8:32). <br/><br/>The psalm ends as it has run throughout &mdash; with a beatitude: &ldquo;Blessed is the one who trusts in you.&rdquo; All the longing, the pilgrimage, and the love for God&rsquo;s house come down at last to this: simple trust in the LORD of hosts, who is sun and shield, favor and honor, the giver of every good gift, and the true home of the soul.",
  },
];

const verseItems: VerseItem[] = [
  {
    id: "v1",
    ref: "Psalm 84:1&ndash;2",
    label: "How lovely is your dwelling place; my soul faints for it",
    body: "&ldquo;How lovely is your dwelling place, O LORD of hosts! My soul longs, yes, faints for the courts of the LORD; my heart and flesh sing for joy to the living God.&rdquo; The psalm bursts open with a cry of love for the place where God dwells. The word &lsquo;lovely&rsquo; carries warmth and delight &mdash; this is a worshiper in love with God&rsquo;s presence. <br/><br/>His longing is so intense that his soul &lsquo;faints&rsquo; for the courts of the LORD; he is sick with homesickness for the sanctuary. And the longing is not merely emotional but total: &lsquo;my heart and flesh,&rsquo; the whole person, sing for joy to the living God. What draws him is not the building but the One who fills it &mdash; the living God, the LORD of hosts, who commands all the armies of heaven and yet welcomes worshipers into his courts.",
  },
  {
    id: "v3",
    ref: "Psalm 84:3&ndash;4",
    label: "Even the sparrow finds a home near your altars",
    body: "&ldquo;Even the sparrow finds a home, and the swallow a nest for herself, where she may lay her young, at your altars, O LORD of hosts, my King and my God. Blessed are those who dwell in your house, ever singing your praise!&rdquo; <br/><br/>From the courts the psalmist&rsquo;s eye falls to the little birds nesting in the temple precincts. Even the sparrow and swallow &mdash; small, lowly, easily overlooked &mdash; find a settled home near God&rsquo;s altars, a safe place to raise their young. The thought stirs holy envy: if the birds may dwell so near, how he longs to dwell there too! He calls God &lsquo;my King and my God,&rsquo; claiming him personally. Then comes the first beatitude of the psalm: blessed, truly happy, are those who get to live in God&rsquo;s house, where praise becomes the very air they breathe.",
  },
  {
    id: "v5",
    ref: "Psalm 84:5&ndash;7",
    label: "Through the Valley of Baca, from strength to strength",
    body: "&ldquo;Blessed are those whose strength is in you, in whose heart are the highways to Zion. As they go through the Valley of Baca they make it a place of springs; the early rain also covers it with pools. They go from strength to strength; each one appears before God in Zion.&rdquo; <br/><br/>Here is the second beatitude, and the great pilgrim picture. Blessed are those whose strength is in God and whose hearts are already on the road to Zion. As they travel, they must pass through the Valley of Baca &mdash; the valley of weeping and dryness. But astonishingly, they turn it into a place of springs; the autumn rains fill it with pools. The hard stretch becomes a place of refreshment. And rather than wearing out, the pilgrims &lsquo;go from strength to strength,&rsquo; growing stronger with every stage until at last each one appears before God in Zion.",
  },
  {
    id: "v8",
    ref: "Psalm 84:8&ndash;9",
    label: "Hear my prayer; behold our shield, O God",
    body: "&ldquo;O LORD God of hosts, hear my prayer; give ear, O God of Jacob! Behold our shield, O God; look on the face of your anointed.&rdquo; In the middle of the psalm the pilgrim lifts a prayer. He calls on the LORD God of hosts, the God of Jacob, to hear and give ear &mdash; to bend down and listen. <br/><br/>Then he prays, &ldquo;Behold our shield, O God; look on the face of your anointed.&rdquo; The &lsquo;anointed&rsquo; is most likely the king, Israel&rsquo;s God-appointed protector, and the psalmist asks God to look with favor upon him for the people&rsquo;s sake. For Christian readers this points beyond any earthly king to the true Anointed One, Christ, in whom God beholds his people with favor. We are heard and welcomed before God not on our own merit but because he looks on the face of his Anointed and accepts us in him.",
  },
  {
    id: "v10",
    ref: "Psalm 84:10&ndash;12",
    label: "Better a day; the LORD a sun and shield",
    body: "&ldquo;For a day in your courts is better than a thousand elsewhere. I would rather be a doorkeeper in the house of my God than dwell in the tents of wickedness. For the LORD God is a sun and shield; the LORD bestows favor and honor. No good thing does he withhold from those who walk uprightly. O LORD of hosts, blessed is the one who trusts in you!&rdquo; <br/><br/>The psalm reaches its summit. One day in God&rsquo;s presence outweighs a thousand of the world&rsquo;s best days; the humblest place in his house is better than the finest comfort among the wicked. Then comes the great confession: the LORD is a &lsquo;sun and shield&rsquo; &mdash; light, life, and warmth, and at the same time protection. He freely gives favor and honor and withholds no good thing from the upright. The psalm ends, fittingly, with one final beatitude: blessed is the one who simply trusts in the LORD of hosts.",
  },
];

const appItems: AppItem[] = [
  {
    title: "Cultivate a Longing for God&rsquo;s Presence",
    accent: GREEN,
    body: "Psalm 84 begins with a soul that faints for the courts of the LORD. Such longing is not a feeling we can manufacture by willpower, but it can be cultivated by drawing near to God in worship, in his word, and among his people. Ask God to make your heart homesick for him, to make his presence the loveliest thing you know. The more we taste of God, the more we long for him &mdash; and that longing is itself one of the surest marks of a living faith.",
  },
  {
    title: "Treasure the Gathered Worship of God&rsquo;s People",
    accent: PURPLE,
    body: "The psalmist envies even the sparrow that nests near the altar and counts those blessed who dwell in God&rsquo;s house, ever singing his praise. In a day when it is easy to drift from the gathered church, let Psalm 84 rekindle your love for corporate worship. To sing God&rsquo;s praise among his people, to sit under his word, to come to his table &mdash; these are not duties to be endured but blessings to be treasured. Make the house of God a place your heart runs toward, not away from.",
  },
  {
    title: "Let the Valley of Baca Become a Place of Springs",
    accent: TEAL,
    body: "Every pilgrimage to God passes through the Valley of Baca &mdash; the dry, weeping stretches of the road. The promise of Psalm 84 is not that you will avoid the valley but that, with your strength in God and your heart set on him, you can make it a place of springs. When you come to a hard season, do not merely endure it; bring it to God and ask him to bring refreshment out of it. Those who travel toward him go from strength to strength, growing stronger in the very places that would wear others out.",
  },
  {
    title: "Count One Day with God Better Than a Thousand Elsewhere",
    accent: GOLD,
    body: "&ldquo;A day in your courts is better than a thousand elsewhere.&rdquo; This is the great test of where our treasure truly lies. Let this verse reorder your values. When the world offers its comforts and the tents of wickedness their fleeting pleasures, weigh them honestly against one day in the presence of God &mdash; and choose the better portion. Be willing to take the lowest place, the doorkeeper&rsquo;s post, if only it keeps you near to him. Nearness to God is the pearl worth selling everything to gain.",
  },
  {
    title: "Trust the God Who Withholds No Good Thing",
    accent: ROSE,
    body: "The LORD is a sun and shield who gives favor and honor and withholds no good thing from those who walk uprightly. When you are tempted to think God is holding out on you, remember the cross: he did not spare his own Son but gave him for us, and with him he freely gives us all things (Romans 8:32). Rest in his open-handed generosity. Walk uprightly, trust him fully, and receive each good gift from his hand with gratitude, knowing that the God who gave you Christ will give you everything you truly need.",
  },
];

const reflectionQuestions: string[] = [
  "The psalmist&rsquo;s soul &lsquo;faints&rsquo; for the courts of the LORD. How would you describe your own longing for God&rsquo;s presence right now &mdash; and what feeds or starves it?",
  "What does it look like, practically, to make the gathered worship of God&rsquo;s people something your heart runs toward rather than a duty you endure?",
  "Where is the &lsquo;Valley of Baca&rsquo; in your life at present, and what would it mean to ask God to turn it into a place of springs?",
  "Do you truly believe that a day in God&rsquo;s courts is better than a thousand elsewhere? Where is that conviction tested in your actual choices?",
  "The LORD is called a &lsquo;sun and shield.&rsquo; In what area of life do you most need his light and life right now, and in what area his protection?",
  "What good thing are you tempted to believe God is withholding from you &mdash; and how does the gift of his Son reshape that fear?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 84 &mdash; How Lovely Is Your Dwelling Place" },
  { videoId: "OjJ7GkWCHvA", title: "The Valley of Baca &mdash; When Tears Become Springs" },
  { videoId: "pHBzJ2dVXgk", title: "Better Is One Day &mdash; Longing for the House of God" },
  { videoId: "3sO5FH2ybPY", title: "A Sun and Shield &mdash; The God Who Withholds No Good Thing" },
];

export default function Psalm84Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: `${GOLD}22`, color: "#f0c178", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 84: How Lovely Is Your Dwelling Place
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }}>
            A psalm of the Sons of Korah &mdash; the longing for the courts of the LORD, the envy of the sparrow that nests near the altar, the pilgrim passage through the Valley of Baca transformed into a place of springs, the journey from strength to strength, and the great preference: &ldquo;a day in your courts is better than a thousand elsewhere.&rdquo; One of the most beloved psalms of longing for God&rsquo;s presence and worship.
          </p>
          <div style={{ background: CARD, border: `1px solid ${GOLD}55`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
            <div style={{ color: "#f0c178", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>Key Verse &mdash; Psalm 84:10</div>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.7, margin: 0, fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "&ldquo;For a day in your courts is better than a thousand elsewhere. I would rather be a doorkeeper in the house of my God than dwell in the tents of wickedness.&rdquo;" }} />
          </div>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? GOLD : BORDER}`,
                background: tab === t ? GOLD : CARD,
                color: tab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>

        {tab === "overview" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Overview of Psalm 84</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {overviewParas.map((p, i) => (
                <p key={i} style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "2.75rem 0 1.25rem" }}>The Shape of the Psalm</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {structurePoints.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.25rem" }}>
                  <div style={{ color: "#f0c178", fontWeight: 700, fontSize: "1rem", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: s.heading }} />
                  <div style={{ color: MUTED, fontSize: "0.98rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: s.text }} />
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }}>Context: A Pilgrim&rsquo;s Song</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Psalm 84 is best understood within the pilgrimage framework of ancient Israel. Three times a year, worshipers journeyed up to the temple in Jerusalem for the great festivals, and this psalm captures the longing and joy of that pilgrimage. The &lsquo;Valley of Baca&rsquo; &mdash; a name suggesting weeping, or the dry balsam trees that grew in arid places &mdash; was a hard, parched stretch of the road, which the faithful pilgrim transforms into a place of springs. &lsquo;From strength to strength&rsquo; pictures the traveler gaining fresh vigor at each stage of the journey toward God. And in 84:11 the LORD is called a &lsquo;sun&rsquo; &mdash; the only place in the Old Testament where God is given that title &mdash; the source of light, warmth, and life for his people, as well as their shield." }} />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Key Themes</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Five threads run through this psalm of longing and pilgrimage. Tap each to open.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {themeItems.map((t) => (
                <div key={t.id} style={{ background: CARD, border: `1px solid ${open === t.id ? GOLD : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(t.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", color: TEXT, padding: "1.1rem 1.4rem", cursor: "pointer", fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>
                      <span style={{ display: "block", fontSize: "1.1rem", fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: t.title }} />
                      <span style={{ display: "block", color: "#f0c178", fontSize: 12, fontWeight: 600, marginTop: 4, letterSpacing: 0.5 }} dangerouslySetInnerHTML={{ __html: t.refs }} />
                    </span>
                    <span style={{ color: GOLD, fontSize: 22, flexShrink: 0 }}>{open === t.id ? "-" : "+"}</span>
                  </button>
                  {open === t.id && (
                    <div style={{ padding: "0 1.4rem 1.4rem", color: MUTED, fontSize: "1.02rem", lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: t.body }} />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Verse by Verse</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Walk through Psalm 84 from longing, to pilgrimage, to the great preference for God&rsquo;s presence. Tap each section to open.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {verseItems.map((v) => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${open === v.id ? TEAL : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(v.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", color: TEXT, padding: "1.1rem 1.4rem", cursor: "pointer", fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>
                      <span style={{ display: "block", color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: v.ref }} />
                      <span style={{ display: "block", fontSize: "1.08rem", fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: v.label }} />
                    </span>
                    <span style={{ color: TEAL, fontSize: 22, flexShrink: 0 }}>{open === v.id ? "-" : "+"}</span>
                  </button>
                  {open === v.id && (
                    <div style={{ padding: "0 1.4rem 1.4rem", color: MUTED, fontSize: "1.02rem", lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: v.body }} />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Application</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              How the longing, the pilgrimage, and the great preference of Psalm 84 shape a life set on the presence of God.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {appItems.map((a, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${a.accent}55`, borderLeft: `4px solid ${a.accent}`, borderRadius: 10, padding: "1.4rem 1.6rem" }}>
                  <h3 style={{ color: a.accent, fontWeight: 700, margin: "0 0 0.6rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: a.title }} />
                  <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: a.body }} />
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "2.75rem 0 1.25rem" }}>Questions for Reflection</h3>
            <ol style={{ margin: 0, paddingLeft: "1.4rem", display: "flex", flexDirection: "column", gap: 14 }}>
              {reflectionQuestions.map((q, i) => (
                <li key={i} style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, paddingLeft: 6 }} dangerouslySetInnerHTML={{ __html: q }} />
              ))}
            </ol>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "2.75rem 0 1.25rem" }}>Video Teaching</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: v.title }} />
                </div>
              ))}
            </div>

            <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${GOLD}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: "#f0c178", fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Closing Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "1.03rem" }} dangerouslySetInnerHTML={{ __html: "O LORD of hosts, how lovely is your dwelling place. Make my soul long, even faint, for your presence, and let my heart and flesh sing for joy to you, the living God. As I pass through the valleys of weeping, turn them into places of springs, and take me from strength to strength until I appear before you. Teach me to count one day in your courts better than a thousand elsewhere, and to choose the doorkeeper&rsquo;s place in your house over every comfort the world can offer. You are my sun and shield; you withhold no good thing from those who walk uprightly. Blessed is the one who trusts in you &mdash; let me be found among them. Amen." }} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
