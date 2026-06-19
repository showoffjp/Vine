"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface AccordionItem {
  id: string;
  title: string;
  reference: string;
  color: string;
  body: string;
}

const THEME_ITEMS: AccordionItem[] = [
  {
    id: "theme-build",
    title: "Unless the LORD Builds the House",
    reference: "Psalm 127:1",
    color: GOLD,
    body:
      "<p>The psalm opens with a sweeping declaration that reframes the whole of human labor: &ldquo;Unless the LORD builds the house, those who build it labor in vain. Unless the LORD watches over the city, the watchman stays awake in vain&rdquo; (127:1). Two of the most basic human enterprises &mdash; building and guarding, construction and protection &mdash; are placed under a single sobering condition. Apart from God, both are empty.</p>" +
      "<p>This is not a discouragement of work. The builders still build; the watchman still keeps watch. The psalm does not counsel passivity or idleness. What it confronts is the deeper illusion of self-sufficiency &mdash; the proud assumption that human effort is the ultimate cause of human success. The house may be built with the best materials and the finest craftsmanship, but if the LORD does not build it, the labor is in vain. The city may be guarded by the most vigilant sentries, but if the LORD does not watch over it, the watchman stays awake for nothing.</p>" +
      "<p>That Solomon is named as the author gives the words a particular weight. He was the great builder of Israel &mdash; the one who raised the temple and the royal palace, who fortified cities and amassed wealth and wisdom unrivaled in his day. If anyone could speak about building, it was Solomon. And his testimony, distilled into a single line, is this: it is all in vain unless the LORD builds it.</p>" +
      "<p>The principle reaches into every dimension of life. Marriages, families, careers, churches, ministries, and nations are all houses that someone is laboring to build. The question the psalm presses is not whether we are working hard enough, but whether the LORD is the one building. For all our striving is in vain unless he is in it. As Jesus would later say, &ldquo;Apart from me you can do nothing&rdquo; (John 15:5).</p>",
  },
  {
    id: "theme-rest",
    title: "The Vanity of Anxious Toil and the Gift of Sleep",
    reference: "Psalm 127:2",
    color: TEAL,
    body:
      "<p>The second verse turns from the futility of self-reliant labor to the futility of anxious overwork: &ldquo;It is in vain that you rise up early and go late to rest, eating the bread of anxious toil; for he gives to his beloved sleep&rdquo; (127:2). The picture is of a person who tries to secure life by sheer effort &mdash; up before dawn, working past dark, devouring the bread of anxiety, driven by the fear that if they stop striving everything will collapse.</p>" +
      "<p>The psalm calls this striving what it is: vanity. Not because work is wrong, but because anxious, self-reliant overwork is built on the lie that everything depends on us. It is the labor of a person who has forgotten that the LORD builds the house. The bread it eats is the bread of anxious toil &mdash; nourishment swallowed without rest, joy, or trust.</p>" +
      "<p>Against this the psalm sets one of the tenderest phrases in the Psalter: &ldquo;he gives to his beloved sleep.&rdquo; Sleep is the great daily parable of trust. To sleep is to lay down control, to admit that the world goes on without our vigilance, to entrust ourselves and everything we love to the One who never slumbers (Psalm 121:4). The anxious worker cannot truly rest; the beloved of the LORD can lie down and sleep, because they know the building of the house is in better hands than their own.</p>" +
      "<p>This connects directly to Jesus&rsquo;s teaching on anxiety: &ldquo;Do not be anxious about your life... your heavenly Father knows that you need them all&rdquo; (Matthew 6:25&ndash;34). It echoes the rhythm of Sabbath, God&rsquo;s gift of rest to a people prone to think their survival depends on ceaseless labor. Rest is not laziness; it is faith expressed in the body. To sleep in peace is to confess that God, not our striving, sustains the world.</p>",
  },
  {
    id: "theme-children",
    title: "Children: A Heritage from the LORD",
    reference: "Psalm 127:3&ndash;4",
    color: GREEN,
    body:
      "<p>The psalm now turns from building houses to building families, and the same truth governs both: what matters most is the gift of God. &ldquo;Behold, children are a heritage from the LORD, the fruit of the womb a reward&rdquo; (127:3). Children are not a human achievement or a biological accident; they are a heritage &mdash; an inheritance entrusted by God &mdash; and a reward from his hand.</p>" +
      "<p>This is a strikingly countercultural claim. In many ages, and not least our own, children have been viewed as a burden, an interruption, a cost to be weighed against personal ambition. The psalm overturns that calculation entirely. Children are a heritage, a blessing, a gift of grace. To receive a child is to receive something of God&rsquo;s own treasure entrusted to our care.</p>" +
      "<p>The psalm then adds a vivid image: &ldquo;Like arrows in the hand of a warrior are the children of one&rsquo;s youth&rdquo; (127:4). Arrows are made to be aimed and released. A warrior shapes the arrow, sets it on the string, and sends it toward a purpose beyond himself. So children are formed and then launched &mdash; raised to be sent out into the world for the purposes of God. The image carries both intentionality and hope: parenting is the careful aiming of lives that will fly farther than the parent ever could.</p>" +
      "<p>To call children of one&rsquo;s youth a special blessing is to recognize the gift of a long life shared between generations &mdash; parents who live to see their children grow, mature, and stand beside them. The whole vision is one of family as gift, lineage as grace, and the next generation as a heritage from the LORD to be received with gratitude and aimed with care.</p>",
  },
  {
    id: "theme-quiver",
    title: "The Blessing of a Full Quiver",
    reference: "Psalm 127:5",
    color: PURPLE,
    body:
      "<p>The psalm closes its second half with a benediction: &ldquo;Blessed is the man who fills his quiver with them! He shall not be put to shame when he speaks with his enemies in the gate&rdquo; (127:5). The arrow image continues. A full quiver is a sign of strength and security; the man so blessed is well equipped for the challenges of life.</p>" +
      "<p>The gate of an ancient city was the place of public life &mdash; where legal cases were heard, disputes settled, and business conducted. To &ldquo;speak with his enemies in the gate&rdquo; without shame is to stand confidently in the public square, supported and defended by a strong family. In an honor-based society, a man surrounded by grown children who could stand with him and speak for him was secure and respected.</p>" +
      "<p>Beneath the cultural image lies a deeper spiritual truth. The blessing of family is one of God&rsquo;s great means of providing strength, support, and continuity to his people across generations. The household is not only a place of affection but a community of mutual defense and witness. A family rooted in the LORD becomes a fortress of grace, equipping its members to stand without shame in a hostile world.</p>" +
      "<p>And the larger frame of the psalm keeps even this blessing in its proper place. The full quiver, like the built house and the guarded city, is a gift &mdash; not a human accomplishment to boast in, but a heritage from the LORD to give thanks for. The blessed man is blessed precisely because what he holds came from God&rsquo;s hand.</p>",
  },
  {
    id: "theme-godbuilds",
    title: "God the Builder of His People",
    reference: "Hebrews 3:4",
    color: ROSE,
    body:
      "<p>The opening image of Psalm 127 &mdash; the house that only the LORD can build &mdash; opens out into one of the grand themes of all Scripture: God himself is the builder of his people. The &ldquo;house&rdquo; in Hebrew thought is not merely a structure of stone and timber but a household, a family, a dynasty, a people. And the Bible insists that the truest house of all is the one God is building for himself.</p>" +
      "<p>When David wished to build God a house, God reversed the offer and promised instead to build David a house &mdash; an everlasting dynasty culminating in the Messiah (2 Samuel 7). The temple Solomon raised was only a shadow of the living temple God intended. For the church is now &ldquo;God&rsquo;s building&rdquo; (1 Corinthians 3:9), a spiritual house being assembled from living stones (1 Peter 2:5).</p>" +
      "<p>The book of Hebrews draws the principle to its climax: &ldquo;Every house is built by someone, but the builder of all things is God&rdquo; (Hebrews 3:4). And Jesus himself declared, &ldquo;I will build my church, and the gates of hell shall not prevail against it&rdquo; (Matthew 16:18). The house God is building cannot fail, because the LORD is the one building it.</p>" +
      "<p>This lifts Psalm 127 from a wisdom poem about families into a window onto the gospel. Every house we labor to build &mdash; our marriages, our families, our churches &mdash; finds its security only as it is built into the great house that God himself is raising. Our labor is not in vain when it is joined to the work of the One who builds all things and whose building will stand forever.</p>",
  },
];

const VERSE_ITEMS: AccordionItem[] = [
  {
    id: "verse-1",
    title: "Unless the LORD Builds the House",
    reference: "Psalm 127:1",
    color: GOLD,
    body:
      "<p>&ldquo;Unless the LORD builds the house, those who build it labor in vain. Unless the LORD watches over the city, the watchman stays awake in vain.&rdquo;</p>" +
      "<p>The psalm opens with two parallel statements that govern everything to follow. Building and guarding &mdash; the work of construction and the work of protection &mdash; are both placed under the lordship of God. The builders still build and the watchman still watches, but their labor is in vain if the LORD is not in it.</p>" +
      "<p>This is not a call to stop working. It is a call to stop trusting in our work. The deepest illusion the verse confronts is self-sufficiency &mdash; the proud assumption that human effort alone secures human success. Solomon, the great builder of the temple and the royal house, distills his whole experience into this single truth: it is all in vain unless the LORD builds it.</p>" +
      "<p>The principle reaches into marriages, families, churches, and every enterprise we labor to raise. The question is never merely whether we are working hard enough, but whether the LORD is the one building. As Jesus said, &ldquo;Apart from me you can do nothing&rdquo; (John 15:5).</p>",
  },
  {
    id: "verse-2",
    title: "He Gives to His Beloved Sleep",
    reference: "Psalm 127:2",
    color: TEAL,
    body:
      "<p>&ldquo;It is in vain that you rise up early and go late to rest, eating the bread of anxious toil; for he gives to his beloved sleep.&rdquo;</p>" +
      "<p>From the futility of self-reliant labor the psalm moves to the futility of anxious overwork. The picture is of someone up before dawn and working past dark, devouring the bread of anxiety, driven by the fear that if they ever stop striving, everything will fall apart. The psalm names this striving as vanity &mdash; not because work is wrong, but because it rests on the lie that everything depends on us.</p>" +
      "<p>Against the anxious toil the psalm sets a tender promise: &ldquo;he gives to his beloved sleep.&rdquo; Sleep is the daily parable of trust. To sleep is to lay down control, to admit the world goes on without our vigilance, to entrust everything we love to the One who never slumbers (Psalm 121:4). The anxious cannot truly rest; the beloved of the LORD can lie down in peace.</p>" +
      "<p>This is the heart of Jesus&rsquo;s teaching on anxiety (Matthew 6:25&ndash;34) and the rhythm of Sabbath rest. Rest is not laziness; it is faith expressed in the body. To sleep in peace is to confess that God, not our striving, sustains the world.</p>",
  },
  {
    id: "verse-3-4",
    title: "Children Are a Heritage from the LORD",
    reference: "Psalm 127:3&ndash;4",
    color: GREEN,
    body:
      "<p>&ldquo;Behold, children are a heritage from the LORD, the fruit of the womb a reward. Like arrows in the hand of a warrior are the children of one&rsquo;s youth.&rdquo;</p>" +
      "<p>The psalm turns from building houses to building families, and the same truth governs both: what matters most is the gift of God. Children are not a human achievement but a heritage &mdash; an inheritance entrusted by God &mdash; and a reward from his hand. In a culture often tempted to see children as a burden, the psalm declares them a blessing of grace.</p>" +
      "<p>The image of arrows is rich. Arrows are shaped, aimed, and released toward a purpose beyond the warrior himself. So children are formed and then launched &mdash; raised to be sent into the world for God&rsquo;s purposes. Parenting is the careful aiming of lives that will fly farther than the parent ever could.</p>" +
      "<p>To speak of the children of one&rsquo;s youth is to celebrate the gift of generations shared &mdash; parents who live to see their children grow and stand beside them. The whole vision is of family as gift and the next generation as a heritage from the LORD, received with gratitude and aimed with care.</p>",
  },
  {
    id: "verse-5",
    title: "Blessed Is the Man Who Fills His Quiver",
    reference: "Psalm 127:5",
    color: PURPLE,
    body:
      "<p>&ldquo;Blessed is the man who fills his quiver with them! He shall not be put to shame when he speaks with his enemies in the gate.&rdquo;</p>" +
      "<p>The arrow image carries into a benediction. A full quiver is a sign of strength and security; the man so blessed is well equipped for life&rsquo;s challenges. The gate of an ancient city was the place of public life &mdash; where legal cases were heard and disputes settled. To stand there without shame, supported by a strong family, was to be secure and respected.</p>" +
      "<p>Beneath the cultural picture lies a deeper truth: the blessing of family is one of God&rsquo;s great means of providing strength, support, and continuity across generations. A household rooted in the LORD becomes a community of mutual defense and witness, a fortress of grace that equips its members to stand without shame in a hostile world.</p>" +
      "<p>And the frame of the psalm keeps even this blessing in its place. The full quiver, like the built house and the guarded city, is a gift from the LORD &mdash; not an accomplishment to boast in, but a heritage to give thanks for. The blessed man is blessed precisely because what he holds came from God&rsquo;s hand.</p>",
  },
];

const APPLICATION_SECTIONS: AccordionItem[] = [
  {
    id: "app-letgodbuild",
    title: "Let God Build the House",
    reference: "Psalm 127:1",
    color: GOLD,
    body:
      "<p>Psalm 127 confronts the proud illusion that our labor is the ultimate cause of our success. We are tempted to believe that if we just work hard enough, plan carefully enough, and strive long enough, we can secure our marriages, our careers, and our futures by sheer effort. The psalm says plainly: unless the LORD builds the house, those who build it labor in vain.</p>" +
      "<p>This does not mean we stop working. The builders still build and the watchman still watches. It means we work in dependence rather than self-reliance, beginning every enterprise with prayer and offering every labor to God. Before we lay a single stone, we ask the LORD to be the builder.</p>" +
      "<p>Examine the houses you are building &mdash; your family, your work, your ministry. Are you building them in proud self-sufficiency, or in humble dependence on the One who alone can make the labor count? Invite God to be the builder of every house you raise, and your labor will not be in vain.</p>",
  },
  {
    id: "app-rest",
    title: "Receive Rest as a Gift of Grace",
    reference: "Psalm 127:2",
    color: TEAL,
    body:
      "<p>&ldquo;He gives to his beloved sleep.&rdquo; In a culture that prizes ceaseless productivity and treats exhaustion as a badge of honor, the psalm offers a radical word: rest is a gift, and the inability to rest is often a symptom of unbelief. The person who rises early, stays up late, and eats the bread of anxious toil is laboring under the lie that everything depends on them.</p>" +
      "<p>Sleep is the daily test of our trust. Can you lay down your work at the end of the day and entrust it &mdash; and yourself &mdash; to the God who never slumbers? Can you keep a Sabbath, stepping back from labor to declare that the world is held by God and not by you? Jesus invites the weary and heavy-laden to come to him and find rest (Matthew 11:28).</p>" +
      "<p>If you find that you cannot rest, ask what fear is driving you. Often anxious overwork is a refusal to trust God with the outcomes. Receive sleep, Sabbath, and rest as gifts of grace. To rest in peace is not laziness; it is faith expressed in the body, the confession that God sustains what you cannot.</p>",
  },
  {
    id: "app-children",
    title: "Treasure the Next Generation",
    reference: "Psalm 127:3&ndash;4",
    color: GREEN,
    body:
      "<p>Psalm 127 calls us to see children &mdash; and by extension the whole next generation &mdash; as a heritage from the LORD, a reward and a blessing rather than a burden. This is a deeply countercultural conviction in an age that often measures children against personal ambition and convenience. The psalm invites us to receive them with gratitude as a gift of God&rsquo;s own treasure.</p>" +
      "<p>The image of arrows teaches us how to hold this gift. Arrows are aimed and released. Children are not possessions to cling to but lives to be shaped and then launched toward God&rsquo;s purposes. Parents, grandparents, mentors, and the whole church share in this work of forming and aiming the next generation for the glory of God.</p>" +
      "<p>Even those without children of their own are called into this calling. The church is a family, and every believer can pour into the young &mdash; teaching, discipling, and praying for those who will carry the faith forward. Treasure the next generation as a heritage from the LORD, and invest in lives that will fly farther than your own.</p>",
  },
  {
    id: "app-church",
    title: "Build into the House God Is Building",
    reference: "Matthew 16:18",
    color: PURPLE,
    body:
      "<p>The opening image of the psalm opens out into the gospel: God himself is building a house, a people, a church that cannot fail. Jesus declared, &ldquo;I will build my church, and the gates of hell shall not prevail against it&rdquo; (Matthew 16:18), and the church is now &ldquo;God&rsquo;s building&rdquo; (1 Corinthians 3:9), a spiritual house of living stones (1 Peter 2:5).</p>" +
      "<p>This reframes all our labor. Our marriages, families, and ministries find their lasting security only as they are built into the great house that God himself is raising. The labor that is joined to his building will stand, because &ldquo;the builder of all things is God&rdquo; (Hebrews 3:4).</p>" +
      "<p>So give yourself to building what will last. Invest in the people of God, in the work of the gospel, in the things that endure beyond this life. The house you build for yourself will pass away, but the house God is building will stand forever &mdash; and your labor in the Lord is never in vain (1 Corinthians 15:58).</p>",
  },
];

const REFLECTION_QUESTIONS: string[] = [
  "What &ldquo;houses&rdquo; are you currently laboring to build &mdash; a marriage, a family, a career, a ministry? Are you building them in self-reliance, or in dependence on the LORD?",
  "Psalm 127:2 names anxious overwork as vanity. Where in your life are you eating the bread of anxious toil, driven by the fear that everything depends on you?",
  "&ldquo;He gives to his beloved sleep.&rdquo; What would it look like for you to receive rest, sleep, and Sabbath as gifts of grace rather than signs of weakness?",
  "The psalm calls children a heritage and a reward from the LORD. How does this challenge the way our culture &mdash; and your own heart &mdash; tends to view the next generation?",
  "Children are compared to arrows that are aimed and released. Who are the young people God has placed within your reach to shape, disciple, and launch for his purposes?",
  "Jesus said, &ldquo;I will build my church&rdquo; (Matthew 16:18). How might you give yourself more fully to building into the lasting house that God himself is raising?",
];

const CLOSING_PRAYER =
  "<p>O LORD, the builder of all things, we confess that apart from you all our labor is in vain. Forgive us for the proud illusion that our striving secures our lives, and teach us to build every house in humble dependence on you. Unless you build it, we labor for nothing.</p>" +
  "<p>Free us, Father, from the bread of anxious toil. Heal the restlessness that cannot lay down its work, and grant us the gift you give to your beloved &mdash; the gift of rest. Help us to sleep in peace and to keep your Sabbath, trusting that you who never slumber are holding the world we cannot hold.</p>" +
  "<p>We thank you for the heritage of children and for every young life within our reach. Make us faithful to form and aim the next generation like arrows for your purposes, that they may fly farther than we ever could and stand without shame in their day.</p>" +
  "<p>Above all, build us into the house that cannot fail &mdash; the church your Son is raising, against which the gates of hell shall not prevail. Join our small labors to your eternal work, that nothing we do in you would ever be in vain. In the name of Jesus, the builder of his church, we pray. Amen.</p>";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 127: Unless the LORD Builds the House" },
  { videoId: "OjJ7GkWCHvA", title: "He Gives to His Beloved Sleep: Rest as Trust" },
  { videoId: "pHBzJ2dVXgk", title: "Children as a Heritage from the LORD" },
  { videoId: "3sO5FH2ybPY", title: "Solomon and the Wisdom of Dependence" },
];

export default function Psalm127Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const renderAccordion = (items: AccordionItem[]) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div
            key={item.id}
            style={{
              background: CARD,
              border: `1px solid ${isOpen ? item.color : BORDER}`,
              borderRadius: "14px",
              overflow: "hidden",
              transition: "border-color 0.2s ease",
            }}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1.15rem 1.35rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                color: TEXT,
              }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <span style={{ fontSize: "1.08rem", fontWeight: 600, lineHeight: 1.3 }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <span style={{ fontSize: "0.82rem", color: item.color, fontWeight: 500, letterSpacing: "0.02em" }}
                  dangerouslySetInnerHTML={{ __html: item.reference }}
                />
              </span>
              <span
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  border: `1px solid ${item.color}`,
                  color: item.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  lineHeight: 1,
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
                dangerouslySetInnerHTML={{ __html: "&#43;" }}
              />
            </button>
            {isOpen && (
              <div
                style={{
                  padding: "0 1.35rem 1.4rem",
                  color: MUTED,
                  fontSize: "1rem",
                  lineHeight: 1.75,
                }}
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Hero */}
      <header
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          padding: "2.5rem 1.25rem 1.5rem",
        }}
      >
        <p
          style={{
            color: GOLD,
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            margin: "0 0 0.75rem",
          }}
        >
          A Song of Ascents &mdash; Of Solomon
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            margin: "0 0 0.5rem",
            lineHeight: 1.1,
          }}
        >
          Psalm 127
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            color: MUTED,
            margin: "0 0 1.75rem",
            maxWidth: "640px",
            lineHeight: 1.6,
          }}
          dangerouslySetInnerHTML={{
            __html:
              "On dependence and the gifts of God &mdash; the futility of all labor apart from the LORD, the grace of rest, and the heritage of children.",
          }}
        />
        <div
          style={{
            background: `linear-gradient(135deg, ${CARD}, #0d0d18)`,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${GOLD}`,
            borderRadius: "14px",
            padding: "1.4rem 1.6rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: GOLD,
              margin: "0 0 0.6rem",
            }}
          >
            Key Verse &mdash; Psalm 127:1
          </p>
          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.6,
              margin: 0,
              fontStyle: "italic",
              color: TEXT,
            }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;Unless the LORD builds the house, those who build it labor in vain. Unless the LORD watches over the city, the watchman stays awake in vain.&rdquo;",
            }}
          />
        </div>
      </header>

      {/* Tab bar */}
      <nav
        style={{
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 10,
          background: "rgba(7,7,15,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            display: "flex",
            gap: "0.35rem",
            padding: "0.6rem 1rem",
            overflowX: "auto",
          }}
        >
          {TABS.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setTab(t);
                  setOpen(null);
                }}
                style={{
                  flexShrink: 0,
                  padding: "0.55rem 1.1rem",
                  borderRadius: "999px",
                  border: `1px solid ${active ? GOLD : BORDER}`,
                  background: active ? GOLD : "transparent",
                  color: active ? "#FFFFFF" : MUTED,
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.18s ease",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </div>
      </nav>

      <main
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          padding: "2rem 1.25rem 4rem",
        }}
      >
        {/* OVERVIEW */}
        {tab === "overview" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1rem" }}>
              Overview
            </h2>
            <div
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>Psalm 127 is a Song of Ascents attributed to Solomon, the great builder of Israel. In just five verses it teaches one of the deepest lessons of the wisdom tradition: that all human effort is empty apart from the blessing of God, and that the best things in life &mdash; security, rest, and family &mdash; are gifts to be received rather than achievements to be won.</p>" +
                  "<p>The psalm falls into two halves that mirror each other. The first half (vv. 1&ndash;2) declares the futility of building a house or guarding a city apart from the LORD, and the vanity of anxious overwork; against it stands the tender promise that God &ldquo;gives to his beloved sleep.&rdquo; The second half (vv. 3&ndash;5) turns to the building of a family, declaring children a heritage from the LORD and likening them to arrows in a warrior&rsquo;s hand.</p>" +
                  "<p>Holding the two halves together is the theme of dependence. Whether we are building a house of stone or a household of children, the outcome rests in God&rsquo;s hands. The psalm calls us to work without anxiety, to rest without guilt, and to receive every good gift &mdash; security, sleep, and children &mdash; as grace from the One who alone can build what lasts.</p>",
              }}
            />

            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                margin: "2rem 0 0.85rem",
                color: TEAL,
              }}
            >
              Structure
            </h3>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "14px",
                padding: "1.4rem 1.6rem",
              }}
            >
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  color: MUTED,
                  fontSize: "1rem",
                  lineHeight: 1.75,
                }}
              >
                <li
                  style={{ marginBottom: "0.75rem" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "<strong style='color:#F2F2F8'>v. 1 &mdash; The Built House:</strong> Unless the LORD builds the house and watches over the city, the builders and the watchman labor in vain.",
                  }}
                />
                <li
                  style={{ marginBottom: "0.75rem" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "<strong style='color:#F2F2F8'>v. 2 &mdash; The Gift of Sleep:</strong> Anxious overwork is vanity; &ldquo;he gives to his beloved sleep&rdquo; &mdash; rest as the fruit of trust.",
                  }}
                />
                <li
                  style={{ marginBottom: "0.75rem" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "<strong style='color:#F2F2F8'>vv. 3&ndash;4 &mdash; The Heritage of Children:</strong> Children are a heritage from the LORD, a reward, like arrows in the hand of a warrior.",
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "<strong style='color:#F2F2F8'>v. 5 &mdash; The Full Quiver:</strong> Blessed is the man whose quiver is full; he shall not be put to shame when he speaks with his enemies in the gate.",
                  }}
                />
              </ul>
            </div>

            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                margin: "2rem 0 0.85rem",
                color: GREEN,
              }}
            >
              Context
            </h3>
            <div
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>Psalm 127 belongs to the Songs of Ascents (Psalms 120&ndash;134), the pilgrim songs sung on the way up to Jerusalem. It is attributed to Solomon, which gives its message special force: the man who built the temple and the royal house, who amassed unrivaled wealth and wisdom, testifies that all building is in vain unless the LORD builds it.</p>" +
                  "<p>The two halves of the psalm connect through the theme of the &ldquo;house.&rdquo; Verse 1 speaks of building a house and city; verses 3&ndash;5 speak of building a family. Both are God&rsquo;s gift, not human achievement. The phrase &ldquo;he gives to his beloved sleep&rdquo; profoundly contrasts anxious self-reliance with restful trust, connecting to Jesus&rsquo;s teaching on anxiety (Matthew 6:25&ndash;34) and the rhythm of Sabbath rest.</p>" +
                  "<p>The house theme also opens onto the larger biblical story of God building his people. The church is &ldquo;God&rsquo;s building&rdquo; (1 Corinthians 3:9), and &ldquo;the builder of all things is God&rdquo; (Hebrews 3:4). Jesus promised, &ldquo;I will build my church&rdquo; (Matthew 16:18) &mdash; the one house that can never fail because the LORD himself is building it.</p>",
              }}
            />
          </section>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 0.5rem" }}>
              Key Themes
            </h2>
            <p style={{ color: MUTED, margin: "0 0 1.5rem", lineHeight: 1.6 }}>
              Tap any theme to explore it, along with its cross-references across Scripture.
            </p>
            {renderAccordion(THEME_ITEMS)}
          </section>
        )}

        {/* VERSE BY VERSE */}
        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 0.5rem" }}>
              Verse by Verse
            </h2>
            <p style={{ color: MUTED, margin: "0 0 1.5rem", lineHeight: 1.6 }}>
              Walk through Psalm 127 section by section. Tap each heading to read the commentary.
            </p>
            {renderAccordion(VERSE_ITEMS)}
          </section>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 0.5rem" }}>
              Application
            </h2>
            <p style={{ color: MUTED, margin: "0 0 1.5rem", lineHeight: 1.6 }}>
              How does Psalm 127 shape the way we build, rest, parent, and trust today?
            </p>
            {renderAccordion(APPLICATION_SECTIONS)}

            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                margin: "2.5rem 0 1rem",
                color: TEAL,
              }}
            >
              Questions for Reflection
            </h3>
            <ol
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                counterReset: "q",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {REFLECTION_QUESTIONS.map((q, i) => (
                <li
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "12px",
                    padding: "1.1rem 1.3rem",
                    display: "flex",
                    gap: "0.9rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: TEAL,
                      color: "#FFFFFF",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.65 }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                </li>
              ))}
            </ol>

            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                margin: "2.5rem 0 1rem",
                color: ROSE,
              }}
            >
              Watch and Reflect
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.1rem",
              }}
            >
              {videoItems.map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "14px",
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p
                    style={{
                      margin: 0,
                      padding: "0.85rem 1rem",
                      fontSize: "0.92rem",
                      color: TEXT,
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    {v.title}
                  </p>
                </div>
              ))}
            </div>

            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                margin: "2.5rem 0 1rem",
                color: GOLD,
              }}
            >
              Closing Prayer
            </h3>
            <div
              style={{
                background: `linear-gradient(135deg, ${CARD}, #0d0d18)`,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: "14px",
                padding: "1.6rem 1.8rem",
                color: MUTED,
                fontSize: "1.05rem",
                lineHeight: 1.8,
                fontStyle: "italic",
              }}
              dangerouslySetInnerHTML={{ __html: CLOSING_PRAYER }}
            />
          </section>
        )}
      </main>
    </div>
  );
}
