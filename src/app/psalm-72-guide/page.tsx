"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

interface Accordion {
  id: string;
  title: string;
  reference: string;
  color: string;
  body: string;
}

const themeItems: Accordion[] = [
  {
    id: "theme-justice",
    title: "The King Endowed With God&rsquo;s Justice and Righteousness",
    reference: "Psalm 72:1-4",
    color: PURPLE,
    body:
      "<p>The psalm opens with the prayer that defines everything that follows: &ldquo;Give the king your justice, O God, and your righteousness to the royal son! May he judge your people with righteousness, and your poor with justice&rdquo; (72:1-2). The king does not generate justice from within himself; it is a gift from God, lent to the throne so that the throne may reflect heaven&rsquo;s rule on earth. A righteous king is one whose verdicts mirror the verdicts of God.</p>" +
      "<p>This righteousness is not abstract. It immediately bends toward the weak: &ldquo;May he defend the cause of the poor of the people, give deliverance to the children of the needy, and crush the oppressor&rdquo; (72:4). The test of a kingdom in Scripture is never the splendor of its court but the safety of its weakest members. A king who guards the poor and breaks the oppressor is a king ruling with God&rsquo;s own justice.</p>" +
      "<p><strong>Cross-reference:</strong> This is the standard the prophets held every throne to (Jeremiah 22:3, &ldquo;Do justice and righteousness, and deliver from the hand of the oppressor him who has been robbed&rdquo;), and the very heart of the coming Messiah&rsquo;s reign: &ldquo;With righteousness he shall judge the poor, and decide with equity for the meek of the earth&rdquo; (Isaiah 11:4). The king of Psalm 72 is what every ruler ought to be &mdash; and what only Christ perfectly is.</p>",
  },
  {
    id: "theme-poor",
    title: "A Special Concern for the Poor and the Helpless",
    reference: "Psalm 72:12-14",
    color: ROSE,
    body:
      "<p>At the literal and theological center of the psalm stands its most tender passage: &ldquo;For he delivers the needy when he calls, the poor and him who has no helper. He has pity on the weak and the needy, and saves the lives of the needy&rdquo; (72:12-13). The king&rsquo;s greatness is measured not by the tribute of distant nations but by his care for the one who has no helper &mdash; the person at the very bottom, with no advocate, no resources, no power.</p>" +
      "<p>The climax is breathtaking: &ldquo;From oppression and violence he redeems their life, and precious is their blood in his sight&rdquo; (72:14). To the world the blood of the poor is cheap; to this king it is precious. He places infinite value on the lives that others discard. This single line overturns every kingdom built on the expendability of the weak.</p>" +
      "<p><strong>Cross-reference:</strong> Here the psalm anticipates the King who declared &ldquo;Blessed are the poor&rdquo; (Luke 6:20) and who said that what is done to &ldquo;the least of these&rdquo; is done to him (Matthew 25:40). The God of Psalm 72 &ldquo;raises the poor from the dust&rdquo; (1 Samuel 2:8) and in Christ redeems with blood more precious still &mdash; his own (1 Peter 1:19).</p>",
  },
  {
    id: "theme-dominion",
    title: "Universal and Everlasting Dominion",
    reference: "Psalm 72:8-11, 17",
    color: TEAL,
    body:
      "<p>The prayer for the king swells far beyond the borders of Israel: &ldquo;May he have dominion from sea to sea, and from the River to the ends of the earth&rdquo; (72:8). The horizon is the whole world. Desert tribes bow, distant kings of Tarshish and the coastlands render tribute, &ldquo;may all kings fall down before him, all nations serve him&rdquo; (72:11). No earthly Israelite king ever ruled like this &mdash; the prayer reaches past every historical throne toward a reign that has no rival.</p>" +
      "<p>And this dominion is not only universal but everlasting: &ldquo;May his name endure forever, his fame continue as long as the sun! May people be blessed in him, all nations call him blessed&rdquo; (72:17). A name that endures forever, a reign as lasting as the sun &mdash; these belong to no mortal. The language strains beyond Solomon toward an eternal King.</p>" +
      "<p><strong>Cross-reference:</strong> This is the dominion given to the Son of Man, &ldquo;an everlasting dominion, which shall not pass away&rdquo; (Daniel 7:14), and the promise that &ldquo;at the name of Jesus every knee should bow&rdquo; (Philippians 2:10). The blessing of &ldquo;all nations&rdquo; in him fulfills the ancient promise to Abraham (Genesis 12:3) &mdash; the King in whom the whole earth is blessed is Christ.</p>",
  },
  {
    id: "theme-blessing",
    title: "A Reign of Cosmic Blessing and Flourishing",
    reference: "Psalm 72:5-7, 16",
    color: GREEN,
    body:
      "<p>The good king&rsquo;s rule is described in images of fertility and life: &ldquo;May he be like rain that falls on the mown grass, like showers that water the earth. In his days may the righteous flourish, and peace abound, till the moon be no more&rdquo; (72:6-7). A righteous reign is not merely the absence of crime; it is the presence of flourishing &mdash; like rain on a parched field, bringing green life where there was only stubble.</p>" +
      "<p>The blessing reaches even to the land itself: &ldquo;May there be abundance of grain in the land; on the tops of the mountains may it wave; may its fruit be like Lebanon; and may people blossom in the cities like the grass of the field&rdquo; (72:16). Where the righteous King reigns, creation itself thrives, the harvest overflows, and people blossom. This is shalom &mdash; the deep peace in which everything is as it should be.</p>" +
      "<p><strong>Cross-reference:</strong> This echoes the covenant blessing of fruitful land under a faithful rule (Leviticus 26:4-6) and points to the renewed creation of the King who makes &ldquo;all things new&rdquo; (Revelation 21:5). The reign of Christ is the rain that revives the earth and the peace that abounds till the moon be no more.</p>",
  },
  {
    id: "theme-homage",
    title: "The Homage and Prayers of the Nations",
    reference: "Psalm 72:10-11, 15",
    color: GOLD,
    body:
      "<p>The kings of the earth come bearing gifts: &ldquo;May the kings of Tarshish and of the coastlands render him tribute; may the kings of Sheba and Seba bring gifts!&rdquo; (72:10). And the gold of Sheba is given to the king while &ldquo;prayer is made for him continually, and blessings invoked for him all the day&rdquo; (72:15). The nations do not come as conquered enemies dragged in chains, but as worshippers bringing their treasures and their prayers to a king they gladly serve.</p>" +
      "<p>Christian readers have long heard in these verses an anticipation of the Magi, who &ldquo;fell down and worshiped him&rdquo; and &ldquo;offered him gifts, gold and frankincense and myrrh&rdquo; (Matthew 2:11). The kings of the earth bringing tribute and the gold of Sheba laid before the king are pictures of the homage of the nations to the true King, the Christ.</p>" +
      "<p><strong>Cross-reference:</strong> Isaiah saw the same procession: &ldquo;Nations shall come to your light, and kings to the brightness of your rising... they shall bring gold and frankincense, and shall bring good news, the praises of the LORD&rdquo; (Isaiah 60:3, 6). And Revelation sees its end &mdash; &ldquo;the kings of the earth will bring their glory into it&rdquo; (Revelation 21:24). The nations stream to the King of kings.</p>",
  },
  {
    id: "theme-doxology",
    title: "The Doxology That Closes Book Two",
    reference: "Psalm 72:18-20",
    color: PURPLE,
    body:
      "<p>The psalm ends with a great burst of praise that closes the second book of the Psalter: &ldquo;Blessed be the LORD, the God of Israel, who alone does wondrous things. Blessed be his glorious name forever; may the whole earth be filled with his glory! Amen and Amen!&rdquo; (72:18-19). The prayer for the king finally lifts its eyes past the king altogether to the God who stands behind every throne &mdash; the only one who &ldquo;alone does wondrous things.&rdquo;</p>" +
      "<p>The crowning hope of the entire psalm is one line: &ldquo;May the whole earth be filled with his glory!&rdquo; (72:19). All the prayers for justice, for the poor, for worldwide dominion, gather into this single longing &mdash; that the glory of God would cover the earth as the waters cover the sea. This is the goal of history, the end toward which the righteous reign is moving.</p>" +
      "<p>The book closes with a note: &ldquo;The prayers of David, the son of Jesse, are ended&rdquo; (72:20). <strong>Cross-reference:</strong> The longing &ldquo;may the whole earth be filled with his glory&rdquo; is the promise of Habakkuk 2:14 and Numbers 14:21, and its fulfillment in the city where &ldquo;the glory of God gives it light, and its lamp is the Lamb&rdquo; (Revelation 21:23). Book Two of the Psalms ends with the whole earth set ablaze with the glory of God.</p>",
  },
];

const verseItems: Accordion[] = [
  {
    id: "v1",
    title: "Give the King Your Justice, O God",
    reference: "Psalm 72:1-4",
    color: PURPLE,
    body:
      "<p>&ldquo;Give the king your justice, O God, and your righteousness to the royal son!&rdquo; (72:1). The psalm opens not with flattery of the king but with prayer to God on the king&rsquo;s behalf. The very first thing asked is that the king would be given God&rsquo;s own justice &mdash; for a throne can only rule rightly if heaven equips it. The &ldquo;royal son&rdquo; suggests a dynasty, a hope that passes from one generation to the next.</p>" +
      "<p>&ldquo;May he judge your people with righteousness, and your poor with justice! Let the mountains bear prosperity for the people, and the hills, in righteousness!&rdquo; (72:2-3). When the king rules rightly, even the land responds &mdash; the mountains and hills bear prosperity. Right rule and a flourishing creation are bound together; righteousness is the soil in which peace grows.</p>" +
      "<p>&ldquo;May he defend the cause of the poor of the people, give deliverance to the children of the needy, and crush the oppressor!&rdquo; (72:4). The first concrete request names the poor, the needy children, and the oppressor. The king&rsquo;s righteousness is proven by whom he defends and whom he crushes. He is to be the shield of the helpless and the terror of the cruel.</p>",
  },
  {
    id: "v2",
    title: "Like Rain on the Mown Grass",
    reference: "Psalm 72:5-7",
    color: GREEN,
    body:
      "<p>&ldquo;May they fear you while the sun endures, and as long as the moon, throughout all generations&rdquo; (72:5). The aim of a righteous reign is that the people would fear God for generations without end. The good king leads his people not merely to obey him but to revere God &mdash; his throne becomes a doorway to worship.</p>" +
      "<p>&ldquo;May he be like rain that falls on the mown grass, like showers that water the earth!&rdquo; (72:6). What a picture of good government &mdash; not a storm that flattens, but gentle rain that revives. After the field is mown, the rain brings fresh green growth. So the righteous king refreshes his people, bringing life where there was only stubble and dryness.</p>" +
      "<p>&ldquo;In his days may the righteous flourish, and peace abound, till the moon be no more!&rdquo; (72:7). The fruit of such a reign is the flourishing of the righteous and abounding peace &mdash; shalom that lasts as long as the moon. This is the deep wholeness of life lived under a king who rules as God rules: people thriving, peace overflowing, with no expiration in sight.</p>",
  },
  {
    id: "v3",
    title: "Dominion From Sea to Sea",
    reference: "Psalm 72:8-11",
    color: TEAL,
    body:
      "<p>&ldquo;May he have dominion from sea to sea, and from the River to the ends of the earth!&rdquo; (72:8). The prayer leaps from Israel&rsquo;s borders to the whole globe. &ldquo;From sea to sea&rdquo; and &ldquo;to the ends of the earth&rdquo; describe a dominion with no boundary &mdash; a reign that fills the world. No king of Israel ever held such sway; the prayer outruns history.</p>" +
      "<p>&ldquo;May desert tribes bow down before him, and his enemies lick the dust! May the kings of Tarshish and of the coastlands render him tribute; may the kings of Sheba and Seba bring gifts!&rdquo; (72:9-10). From the wild desert nomad to the wealthy maritime kingdoms, all submit. The distant places &mdash; Tarshish, the coastlands, Sheba, Seba &mdash; stand for the farthest reaches of the known world, all bringing their wealth to this king.</p>" +
      "<p>&ldquo;May all kings fall down before him, all nations serve him!&rdquo; (72:11). The first half of the key verse. Every crown is laid down before this throne; every nation enters his service. The universal homage here described belongs ultimately to the King before whom &ldquo;every knee should bow&rdquo; (Philippians 2:10).</p>",
  },
  {
    id: "v4",
    title: "He Delivers the Needy Who Has No Helper",
    reference: "Psalm 72:12-14",
    color: ROSE,
    body:
      "<p>&ldquo;For he delivers the needy when he calls, the poor and him who has no helper&rdquo; (72:12). The little word &ldquo;for&rdquo; reveals why the nations gladly serve this king &mdash; because he is the deliverer of the defenseless. The one &ldquo;who has no helper&rdquo; is the truly forsaken, the person at the end of every resource. This king answers exactly that cry.</p>" +
      "<p>&ldquo;He has pity on the weak and the needy, and saves the lives of the needy&rdquo; (72:13). His worldwide dominion does not make him remote from the small and weak; it makes him their refuge. The greatness of his empire is bent entirely toward the rescue of the lowly. A king with the whole earth in his hand stoops to save the life of one needy soul.</p>" +
      "<p>&ldquo;From oppression and violence he redeems their life, and precious is their blood in his sight&rdquo; (72:14). The summit of the psalm&rsquo;s portrait of the king. He redeems the oppressed from violence, and he counts their very blood as precious. In a world that treats the poor as expendable, this king treasures their lives. Here the psalm reaches most clearly toward the King who shed his own precious blood to redeem.</p>",
  },
  {
    id: "v5",
    title: "May His Name Endure Forever",
    reference: "Psalm 72:15-17",
    color: GOLD,
    body:
      "<p>&ldquo;Long may he live; may gold of Sheba be given to him! May prayer be made for him continually, and blessings invoked for him all the day!&rdquo; (72:15). The people respond to such a king with gifts, unceasing prayer, and all-day blessing. The gold of Sheba laid before him has long been read as a foreshadowing of the Magi&rsquo;s gold offered to the infant Christ (Matthew 2:11).</p>" +
      "<p>&ldquo;May there be abundance of grain in the land; on the tops of the mountains may it wave; may its fruit be like Lebanon; and may people blossom in the cities like the grass of the field!&rdquo; (72:16). The blessing of the righteous reign overflows into the land itself &mdash; grain waving even on the mountaintops, fruit lush as the cedars of Lebanon, people blossoming in the cities. Creation and community flourish together under the good King.</p>" +
      "<p>&ldquo;May his name endure forever, his fame continue as long as the sun! May people be blessed in him, all nations call him blessed!&rdquo; (72:17). A name that endures forever and in whom all nations are blessed &mdash; this is the language of the promise to Abraham (Genesis 12:3), fulfilled at last in Christ, the King in whom every nation finds blessing.</p>",
  },
  {
    id: "v6",
    title: "Blessed Be the LORD, the God of Israel",
    reference: "Psalm 72:18-20",
    color: PURPLE,
    body:
      "<p>&ldquo;Blessed be the LORD, the God of Israel, who alone does wondrous things&rdquo; (72:18). The psalm turns from the king to the King of kings. For all the splendor prayed over the throne, the final praise belongs to God alone, who &ldquo;alone does wondrous things.&rdquo; Every good gift in the reign traces back to him.</p>" +
      "<p>&ldquo;Blessed be his glorious name forever; may the whole earth be filled with his glory! Amen and Amen!&rdquo; (72:19). Here is the great hope of the psalm and of all Scripture &mdash; that the whole earth would be filled with the glory of God. The doubled &ldquo;Amen and Amen&rdquo; seals the prayer with the deepest assent of faith. This is what creation was made for and where history is going.</p>" +
      "<p>&ldquo;The prayers of David, the son of Jesse, are ended&rdquo; (72:20). With this note the second book of the Psalter draws to a close. The prayers of David come to rest here, in a psalm that began with a prayer for the king and ended with the whole earth ablaze with God&rsquo;s glory &mdash; a fitting summit and seal.</p>",
  },
];

const appItems: Accordion[] = [
  {
    id: "app-pray",
    title: "Pray for Those Who Govern",
    reference: "Psalm 72:1",
    color: PURPLE,
    body:
      "<p>Psalm 72 is, at its root, a prayer for a ruler: &ldquo;Give the king your justice, O God&rdquo; (72:1). It models how believers should pray for those in authority &mdash; not chiefly for their comfort or success, but for justice, righteousness, and care for the vulnerable. Paul commands exactly this: &ldquo;that supplications, prayers, intercessions, and thanksgivings be made for all people, for kings and all who are in high positions&rdquo; (1 Timothy 2:1-2).</p>" +
      "<p>Take up this calling. Pray for your leaders &mdash; presidents and prime ministers, judges and mayors, employers and elders &mdash; that God would lend them his justice, that they would defend the poor and restrain the oppressor. And let the standard of Psalm 72 shape how you evaluate every ruler: not by their power or prosperity, but by how they treat those who have no helper.</p>",
  },
  {
    id: "app-poor",
    title: "Measure Greatness by Care for the Helpless",
    reference: "Psalm 72:12-14",
    color: ROSE,
    body:
      "<p>The defining mark of the good king is his care for &ldquo;him who has no helper&rdquo; (72:12), and his conviction that &ldquo;precious is their blood in his sight&rdquo; (72:14). This is the standard by which all rulers &mdash; and all of us &mdash; are measured. The world counts greatness in wealth, influence, and dominion; God counts it in the protection of the weakest.</p>" +
      "<p>Let this reorder your own values. Whose blood is &ldquo;precious in your sight&rdquo;? Where in your life can you defend the cause of someone who has no advocate, give deliverance to a needy child, or stand against an oppressor? The reign we are called into is one where the lives others discard are treasured. To follow the King of Psalm 72 is to share his pity for the poor and his care for the helpless.</p>",
  },
  {
    id: "app-messiah",
    title: "Worship the True King the Psalm Points To",
    reference: "Psalm 72:8, 17",
    color: TEAL,
    body:
      "<p>Though titled &ldquo;of Solomon,&rdquo; Psalm 72 describes a king no mortal could ever be &mdash; one with worldwide and everlasting dominion, whose name endures forever, who perfectly defends the poor, and in whom all nations are blessed. Solomon&rsquo;s reign fell far short; even at its best it ended in idolatry and decline. The psalm&rsquo;s prayer outruns every human king and lands on the Messiah, Jesus the righteous King (Isaiah 9:6-7, 11:1-5).</p>" +
      "<p>Read this psalm, then, as a portrait of Christ &mdash; the King who rules from sea to sea, before whom the Magi laid their gold, who delivers the needy and treasures their blood, and whose kingdom shall have no end. Let it lift your eyes from disappointment in earthly rulers to worship of the one perfect King. He alone fulfills every line of this prayer.</p>",
  },
  {
    id: "app-glory",
    title: "Long for the Whole Earth to Be Filled With His Glory",
    reference: "Psalm 72:19",
    color: GOLD,
    body:
      "<p>The psalm&rsquo;s closing cry is the great hope of the believer: &ldquo;May the whole earth be filled with his glory! Amen and Amen!&rdquo; (72:19). This is the longing that should animate every Christian life and every prayer &mdash; that God&rsquo;s glory would cover the earth as the waters cover the sea (Habakkuk 2:14).</p>" +
      "<p>Let this hope shape your mission and your prayers. The homage of the nations and the spread of God&rsquo;s glory are not distant abstractions but the very purpose of the church&rsquo;s witness &mdash; to call &ldquo;all nations&rdquo; to find blessing in Christ (72:17). Join your &ldquo;Amen and Amen&rdquo; to the psalmist&rsquo;s, and live for the day when every knee bows and the whole earth is full of the glory of God.</p>",
  },
];

const reflectionQuestions = [
  "Psalm 72 asks God to give the king &ldquo;your justice&rdquo; and &ldquo;your righteousness&rdquo; (72:1). How does it change your view of leadership to see right rule as a gift lent from heaven rather than a human achievement?",
  "The king&rsquo;s greatness is measured by his care for &ldquo;him who has no helper&rdquo; (72:12). By that standard, how would you evaluate the rulers and institutions you live under &mdash; and your own priorities?",
  "&ldquo;Precious is their blood in his sight&rdquo; (72:14). Whose lives does the world treat as expendable, and how might you reflect the King&rsquo;s valuing of them?",
  "In what ways does this psalm clearly point beyond Solomon to Christ? Which verses can only be fully true of Jesus the Messiah?",
  "The Magi brought gold to the infant King (Matthew 2:11; cf. 72:10, 15). What &ldquo;tribute&rdquo; &mdash; your treasures, gifts, and worship &mdash; are you laying before Christ the King?",
  "The psalm ends, &ldquo;may the whole earth be filled with his glory&rdquo; (72:19). How does that longing shape the way you pray, give, and live for God&rsquo;s mission in the world?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 72: A Prayer for the King" },
  { videoId: "OjJ7GkWCHvA", title: "The Messianic Hope of Psalm 72" },
  { videoId: "pHBzJ2dVXgk", title: "Justice for the Poor and the Needy" },
  { videoId: "3sO5FH2ybPY", title: "May the Whole Earth Be Filled With His Glory" },
];

export default function Psalm72Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const accordionBlock = (items: Accordion[]) =>
    items.map((item) => {
      const isOpen = open === item.id;
      return (
        <div
          key={item.id}
          style={{
            background: CARD,
            border: `1px solid ${isOpen ? item.color : BORDER}`,
            borderRadius: 14,
            marginBottom: "0.9rem",
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
              textAlign: "left",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "1.15rem 1.35rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: item.color,
                flexShrink: 0,
                boxShadow: `0 0 12px ${item.color}`,
              }}
            />
            <span style={{ flex: 1 }}>
              <span
                style={{
                  display: "block",
                  color: TEXT,
                  fontSize: "1.06rem",
                  fontWeight: 600,
                  lineHeight: 1.35,
                }}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <span
                style={{
                  display: "block",
                  color: item.color,
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  marginTop: "0.25rem",
                  letterSpacing: "0.02em",
                }}
              >
                {item.reference}
              </span>
            </span>
            <span
              style={{
                color: MUTED,
                fontSize: "1.4rem",
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
                padding: "0 1.35rem 1.4rem 2.35rem",
                color: MUTED,
                fontSize: "1rem",
                lineHeight: 1.75,
              }}
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          )}
        </div>
      );
    });

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
          maxWidth: 880,
          margin: "0 auto",
          padding: "3rem 1.4rem 2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: GOLD,
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "0.9rem",
          }}
        >
          A Study in the Psalms
        </p>
        <h1
          style={{
            fontSize: "2.7rem",
            fontWeight: 700,
            lineHeight: 1.1,
            margin: "0 0 1rem",
            fontFamily: "Georgia, serif",
          }}
        >
          Psalm 72
        </h1>
        <p
          style={{
            color: MUTED,
            fontSize: "1.15rem",
            lineHeight: 1.6,
            maxWidth: 640,
            margin: "0 auto 1.8rem",
          }}
          dangerouslySetInnerHTML={{
            __html:
              "A royal psalm &lsquo;of Solomon&rsquo; that overflows into messianic hope &mdash; a prayer for a king of perfect justice, who defends the poor, rules to the ends of the earth, and in whom all nations are blessed. It closes Book Two of the Psalter.",
          }}
        />
        <div
          style={{
            background: `linear-gradient(135deg, ${CARD}, ${BG})`,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${GOLD}`,
            borderRadius: 14,
            padding: "1.5rem 1.7rem",
            textAlign: "left",
            maxWidth: 660,
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "0 0 0.6rem",
            }}
          >
            Key Verse &mdash; Psalm 72:11-12
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.65,
              fontStyle: "italic",
              margin: 0,
              fontFamily: "Georgia, serif",
              color: TEXT,
            }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;May all kings fall down before him, all nations serve him! For he delivers the needy when he calls, the poor and him who has no helper.&rdquo;",
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
          backdropFilter: "blur(10px)",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            maxWidth: 880,
            margin: "0 auto",
            display: "flex",
            gap: "0.4rem",
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
                  flex: "0 0 auto",
                  background: active ? GOLD : "transparent",
                  color: active ? "#fff" : MUTED,
                  border: `1px solid ${active ? GOLD : BORDER}`,
                  borderRadius: 999,
                  padding: "0.5rem 1.1rem",
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

      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.2rem 1.4rem 5rem" }}>
        {tab === "overview" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 1.1rem", fontFamily: "Georgia, serif" }}>
              Overview
            </h2>
            <div
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>Psalm 72 is a royal psalm &mdash; a prayer for the king at his coronation or on behalf of the throne. It begins with a plea that God would give the king his own justice and righteousness (72:1) so that he may &ldquo;judge your people with righteousness, and your poor with justice&rdquo; (72:2). From there the prayer expands outward in widening circles: care for the poor, a reign of cosmic blessing and flourishing, dominion from sea to sea, the homage of all kings and nations, and finally a doxology that fills the whole earth with the glory of God.</p>" +
                  "<p>Though titled &ldquo;of Solomon,&rdquo; the psalm describes a king greater than any who ever sat on David&rsquo;s throne &mdash; one whose name endures forever, whose dominion has no end, and in whom all nations are blessed. The defining mark of his rule is justice for the poor and needy: &ldquo;he delivers the needy when he calls, the poor and him who has no helper... precious is their blood in his sight&rdquo; (72:12-14). The psalm closes Book Two of the Psalter with a great burst of praise and the note that &ldquo;the prayers of David, the son of Jesse, are ended&rdquo; (72:20).</p>",
              }}
            />

            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                margin: "2rem 0 1rem",
                color: TEAL,
                fontFamily: "Georgia, serif",
              }}
            >
              Structure of the Psalm
            </h3>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "1.4rem 1.6rem",
                color: MUTED,
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p><strong style=\"color:#F2F2F8\">Verses 1-4 &mdash; The Prayer for Justice:</strong> God is asked to give the king his righteousness, that he may judge the people rightly and defend the poor.</p>" +
                  "<p><strong style=\"color:#F2F2F8\">Verses 5-7 &mdash; A Reign of Blessing:</strong> The king&rsquo;s rule is like rain on the mown grass &mdash; the righteous flourish and peace abounds.</p>" +
                  "<p><strong style=\"color:#F2F2F8\">Verses 8-11 &mdash; Universal Dominion:</strong> His reign stretches from sea to sea, and all kings fall down and all nations serve him.</p>" +
                  "<p><strong style=\"color:#F2F2F8\">Verses 12-14 &mdash; The Heart of His Rule:</strong> He delivers the needy who has no helper, for their blood is precious in his sight.</p>" +
                  "<p><strong style=\"color:#F2F2F8\">Verses 15-17 &mdash; Endless Name and Blessing:</strong> Gold of Sheba, continual prayer, abundance in the land, and a name that endures forever.</p>" +
                  "<p><strong style=\"color:#F2F2F8\">Verses 18-20 &mdash; The Doxology:</strong> Praise to the God of Israel and the longing that the whole earth be filled with his glory, closing Book Two.</p>",
              }}
            />

            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                margin: "2rem 0 1rem",
                color: GOLD,
                fontFamily: "Georgia, serif",
              }}
            >
              Context
            </h3>
            <div
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>Psalm 72 bears the title &ldquo;of Solomon&rdquo; and reads as a prayer for the king &mdash; perhaps a coronation prayer for the son of David. Yet its vision of a king with worldwide, everlasting dominion who perfectly defends the poor and whose name endures forever transcends any human king. No son of David, Solomon included, ever ruled to the ends of the earth or reigned as long as the sun. The psalm therefore points beyond itself to the Messiah, Jesus the righteous King foretold by Isaiah (Isaiah 9:6-7, 11:1-5).</p>" +
                  "<p>Christian readers have long connected the kings bringing tribute (72:10-11) and the gold of Sheba (72:15) to the Magi who brought gold to the infant Christ (Matthew 2:11), and to the homage of the nations to the King of kings. The king&rsquo;s defining mark &mdash; justice for the poor and needy &mdash; is the standard by which all rulers, and Christ supremely, are measured. The psalm closes Book Two of the Psalter (Psalms 42-72) with a doxology and the note that &ldquo;the prayers of David, the son of Jesse, are ended&rdquo; (72:20). The great hope it leaves ringing is one line: &ldquo;May the whole earth be filled with his glory&rdquo; (72:19).</p>",
              }}
            />
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.6rem", fontFamily: "Georgia, serif" }}>
              Key Themes
            </h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: "0 0 1.6rem" }}>
              Six threads that run through Psalm 72, each with cross-references to the wider witness of Scripture.
            </p>
            {accordionBlock(themeItems)}
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.6rem", fontFamily: "Georgia, serif" }}>
              Verse by Verse
            </h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: "0 0 1.6rem" }}>
              Walking through the psalm section by section, from the prayer for justice to the doxology that closes Book Two.
            </p>
            {accordionBlock(verseItems)}
          </section>
        )}

        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.6rem", fontFamily: "Georgia, serif" }}>
              Application
            </h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: "0 0 1.6rem" }}>
              How the prayer for the righteous King reshapes the way we pray, value the weak, and live for God&rsquo;s glory.
            </p>
            {accordionBlock(appItems)}

            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                margin: "2.4rem 0 1.1rem",
                color: GOLD,
                fontFamily: "Georgia, serif",
              }}
            >
              Questions for Reflection
            </h3>
            <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {reflectionQuestions.map((q, i) => (
                <li
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: "1.1rem 1.3rem",
                    marginBottom: "0.85rem",
                    display: "flex",
                    gap: "0.95rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: GOLD,
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7 }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                </li>
              ))}
            </ol>

            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                margin: "2.4rem 0 1.1rem",
                color: TEAL,
                fontFamily: "Georgia, serif",
              }}
            >
              Watch and Reflect
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.2rem",
              }}
            >
              {videoItems.map((v) => (
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
                  <p
                    style={{
                      color: TEXT,
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      lineHeight: 1.5,
                      padding: "0.9rem 1.1rem",
                      margin: 0,
                    }}
                  >
                    {v.title}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "2.6rem",
                background: `linear-gradient(135deg, ${CARD}, ${BG})`,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: 14,
                padding: "1.7rem 1.8rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  margin: "0 0 0.9rem",
                  color: GOLD,
                  fontFamily: "Georgia, serif",
                }}
              >
                A Closing Prayer
              </h3>
              <p
                style={{
                  color: MUTED,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  margin: 0,
                  fontFamily: "Georgia, serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<p>O God, you have given your justice and your righteousness to the true King, your Son Jesus Christ. We praise you that he defends the cause of the poor, delivers the needy who has no helper, and counts their blood precious in his sight. Reign in us by his Spirit, and make us a people who treasure the lives the world discards and who serve the helpless as he does.</p>" +
                    "<p>Let all kings fall down before him and all nations serve him; let his name endure forever and his fame continue as long as the sun. We join the ancient Amen of your people: may the whole earth be filled with his glory! Blessed be the LORD, the God of Israel, who alone does wondrous things. Amen and Amen.</p>",
                }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
