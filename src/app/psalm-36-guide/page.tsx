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
  accent: string;
  reference: string;
  body: string;
}

interface VerseItem {
  id: string;
  reference: string;
  label: string;
  body: string;
}

interface AppSection {
  heading: string;
  accent: string;
  body: string;
}

const themeItems: ThemeItem[] = [
  {
    id: "t1",
    title: "The Anatomy of the Wicked Heart",
    accent: ROSE,
    reference: "Psalm 36:1&ndash;4",
    body:
      "<p>The psalm opens with an unflinching diagnosis of evil from the inside: &ldquo;Transgression speaks to the wicked deep in his heart; there is no fear of God before his eyes&rdquo; (36:1). Sin is not merely an external act but an inner voice, whispering in the chambers of the heart, and its root is the absence of any reverence for God. Where the fear of God is gone, the restraints that hold evil in check are gone with it.</p>" +
      "<p>The psalmist traces the progression: the wicked man &ldquo;flatters himself in his own eyes that his iniquity cannot be found out and hated&rdquo; (36:2); &ldquo;the words of his mouth are trouble and deceit; he has ceased to act wisely and do good&rdquo; (36:3); even on his bed he &ldquo;plots trouble&rdquo; and &ldquo;does not reject evil&rdquo; (36:4). It is a portrait of a heart turned in on itself, self-deceived, and settled in its rebellion.</p>" +
      "<p>The apostle Paul reaches for this very verse at the climax of his great indictment of universal sin: &ldquo;There is no fear of God before their eyes&rdquo; (Romans 3:18). Quoting Psalm 36:1 as the capstone of his catena from the Psalms and Prophets, Paul shows that this is not the diagnosis of one unusually wicked man but the X-ray of every human heart apart from grace. The honesty of these verses prepares us to marvel all the more at what comes next.</p>",
  },
  {
    id: "t2",
    title: "The Immeasurable Steadfast Love of God",
    accent: PURPLE,
    reference: "Psalm 36:5&ndash;6",
    body:
      "<p>Then comes one of the most breathtaking turns in all the Psalter. Without transition or explanation, the gaze lifts from the cramped darkness of the wicked heart to the boundless expanse of God: &ldquo;Your steadfast love, O LORD, extends to the heavens, your faithfulness to the clouds. Your righteousness is like the mountains of God; your judgments are like the great deep&rdquo; (36:5&ndash;6).</p>" +
      "<p>The poet measures God&rsquo;s love against the largest things he can name. His steadfast love (the Hebrew <em>hesed</em>) towers to the heavens; his faithfulness rises to the clouds; his righteousness stands immovable like the great mountains; his judgments run deep as the unfathomed sea. From the heights of the sky to the depths of the ocean, the whole created universe becomes a measuring rod &mdash; and still it cannot contain him.</p>" +
      "<p>The deliberate contrast is the engine of the psalm. Four verses on the smallness and self-deception of wickedness give way to verses on the vastness of God&rsquo;s love. The effect is to make us feel, by sheer scale, how the goodness of God dwarfs the evil of the human heart. &ldquo;Man and beast you save, O LORD&rdquo; (36:6) &mdash; his care reaches every creature, the highest and the lowest alike.</p>",
  },
  {
    id: "t3",
    title: "The Refuge and the Feast",
    accent: GOLD,
    reference: "Psalm 36:7&ndash;8",
    body:
      "<p>&ldquo;How precious is your steadfast love, O God! The children of mankind take refuge in the shadow of your wings&rdquo; (36:7). The vast love just described is not distant or abstract; it is a place of shelter into which people flee. The image of the &ldquo;shadow of your wings&rdquo; evokes both the protective wings of a mother bird and the outstretched wings of the cherubim over the ark &mdash; the very presence of God as sanctuary.</p>" +
      "<p>And under those wings there is not mere survival but abundance: &ldquo;They feast on the abundance of your house, and you give them drink from the river of your delights&rdquo; (36:8). The refuge becomes a banquet. God&rsquo;s house is a place of fatness and plenty, and from him flows a river &mdash; literally a river of &ldquo;Edens,&rdquo; delights &mdash; from which his people drink deeply.</p>" +
      "<p>This feast imagery runs through Scripture: the satisfied soul of Psalm 23&rsquo;s overflowing cup, the invitation of Isaiah 55 to come and eat without price, and supremely the living water and bread of life that Jesus offers in John&rsquo;s Gospel. The God who is a refuge from danger is also the host of a feast that satisfies the deepest thirst of the soul.</p>",
  },
  {
    id: "t4",
    title: "The Fountain of Life and the Light",
    accent: TEAL,
    reference: "Psalm 36:9",
    body:
      "<p>At the very center of the psalm stands its key verse: &ldquo;For with you is the fountain of life; in your light do we see light&rdquo; (36:9). Here the river of delights is named at its source. God himself is the fountain &mdash; the spring from which all life flows. Every living thing draws its existence from him, and apart from him there is only drought and death.</p>" +
      "<p>&ldquo;In your light do we see light.&rdquo; God is not only the source of life but the source of all true seeing. We cannot perceive reality rightly except by his illumination; his light is the medium in which alone we behold what is real and good. To know God is to have both life and sight; to be without him is to be both dead and blind.</p>" +
      "<p>The connections to John&rsquo;s Gospel are luminous. &ldquo;In him was life, and the life was the light of men&rdquo; (John 1:4). Jesus offers the Samaritan woman &ldquo;a spring of water welling up to eternal life&rdquo; (John 4:14) and declares, &ldquo;I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life&rdquo; (John 8:12). The fountain and the light of Psalm 36:9 are revealed in Christ, in whom life and light are joined and given to all who come.</p>",
  },
  {
    id: "t5",
    title: "The Prayer for Continued Love and Protection",
    accent: GREEN,
    reference: "Psalm 36:10&ndash;12",
    body:
      "<p>Having gazed on the vastness of God&rsquo;s love, the psalmist turns it into petition: &ldquo;Oh, continue your steadfast love to those who know you, and your righteousness to the upright of heart!&rdquo; (36:10). The prayer is not for something new but for the continuation of what God is &mdash; that his <em>hesed</em>, so immeasurable, would go on flowing to those who know him.</p>" +
      "<p>Then a plea for protection from the very wickedness described at the start: &ldquo;Let not the foot of arrogance come upon me, nor the hand of the wicked drive me away&rdquo; (36:11). The proud and the wicked are real threats, and the believer asks to be kept from being trampled or driven from the refuge of God&rsquo;s presence.</p>" +
      "<p>The psalm closes with the eye of faith seeing the end of the wicked as already accomplished: &ldquo;There the evildoers lie fallen; they are thrust down, unable to rise&rdquo; (36:12). The self-deceived rebels of verses 1&ndash;4 come at last to ruin. The psalm that began in the darkness of the wicked heart ends in the steadfast assurance that God&rsquo;s love endures and his justice prevails.</p>",
  },
];

const verseItems: VerseItem[] = [
  {
    id: "v1",
    reference: "Psalm 36:1&ndash;4",
    label: "The Wicked Heart",
    body:
      "<p>&ldquo;Transgression speaks to the wicked deep in his heart; there is no fear of God before his eyes. For he flatters himself in his own eyes that his iniquity cannot be found out and hated&hellip; He plots trouble while on his bed; he sets himself in a way that is not good; he does not reject evil&rdquo; (36:1&ndash;4).</p>" +
      "<p>The psalm begins with a startling inner portrait. Sin itself is personified as an oracle whispering deep within the wicked man&rsquo;s heart, and the foundation of all his evil is named at once: there is no fear of God before his eyes. From this missing reverence everything else follows &mdash; self-flattery, deceitful speech, the abandonment of wisdom, and the deliberate plotting of trouble even in the supposed rest of the bed.</p>" +
      "<p>Paul quotes verse 1 in Romans 3:18 as the climactic charge in his proof that all are under sin. These four verses are therefore not a curiosity about one bad man but a mirror held up to the human race apart from grace &mdash; an honest reckoning that makes the glory of what follows shine all the brighter.</p>",
  },
  {
    id: "v2",
    reference: "Psalm 36:5&ndash;6",
    label: "The Vastness of God's Love",
    body:
      "<p>&ldquo;Your steadfast love, O LORD, extends to the heavens, your faithfulness to the clouds. Your righteousness is like the mountains of God; your judgments are like the great deep; man and beast you save, O LORD&rdquo; (36:5&ndash;6).</p>" +
      "<p>The shift is sudden and total. From the narrow, airless world of the wicked heart, the psalm bursts open to the widest horizons. God&rsquo;s steadfast love climbs to the heavens, his faithfulness to the clouds, his righteousness towers like the great mountains, his judgments plunge like the unfathomable deep.</p>" +
      "<p>The four points of the compass &mdash; sky, clouds, mountains, sea &mdash; are pressed into service as measures of a love that exceeds them all. And the reach of this love is universal: &ldquo;man and beast you save.&rdquo; The smallness of human sin is swallowed up in the immensity of divine goodness.</p>",
  },
  {
    id: "v3",
    reference: "Psalm 36:7&ndash;8",
    label: "The Refuge and the Feast",
    body:
      "<p>&ldquo;How precious is your steadfast love, O God! The children of mankind take refuge in the shadow of your wings. They feast on the abundance of your house, and you give them drink from the river of your delights&rdquo; (36:7&ndash;8).</p>" +
      "<p>The vast love of the previous verses now becomes a sanctuary and a banquet. People flee for shelter to the shadow of God&rsquo;s wings &mdash; an image of intimate, protective nearness. There they find not bare safety but lavish provision: they feast on the fatness of his house and drink from his river of delights, a river whose name evokes Eden itself.</p>" +
      "<p>The picture anticipates the satisfied soul of Psalm 23, the free feast of Isaiah 55, and supremely the bread of life and living water offered by Christ. God&rsquo;s love is precious precisely because it both shelters and satisfies.</p>",
  },
  {
    id: "v4",
    reference: "Psalm 36:9",
    label: "The Fountain of Life",
    body:
      "<p>&ldquo;For with you is the fountain of life; in your light do we see light&rdquo; (36:9).</p>" +
      "<p>This single verse is the jewel at the heart of the psalm. The river of delights is traced to its spring: God himself is the fountain of life. All life flows from him; he is its origin and its sustainer. And he is light as well as life &mdash; only in his light can we truly see. Right perception of reality is impossible apart from his illumination.</p>" +
      "<p>John&rsquo;s Gospel takes up both images and reveals their fulfillment in Christ: &ldquo;In him was life, and the life was the light of men&rdquo; (John 1:4); the living water welling up to eternal life (John 4:14); &ldquo;I am the light of the world&hellip; the light of life&rdquo; (John 8:12). Life and light, fountain and radiance, meet in Jesus and are given to all who come to him.</p>",
  },
  {
    id: "v5",
    reference: "Psalm 36:10&ndash;12",
    label: "The Prayer",
    body:
      "<p>&ldquo;Oh, continue your steadfast love to those who know you, and your righteousness to the upright of heart! Let not the foot of arrogance come upon me, nor the hand of the wicked drive me away. There the evildoers lie fallen; they are thrust down, unable to rise&rdquo; (36:10&ndash;12).</p>" +
      "<p>The contemplation of God&rsquo;s love turns naturally into prayer. The psalmist asks that this steadfast love would continue to flow to those who know God, and that he would be kept from the trampling foot of the arrogant and the driving hand of the wicked.</p>" +
      "<p>The psalm ends with the eye of faith seeing the outcome as settled: the evildoers of the opening verses lie fallen, thrust down, unable to rise. What began in the darkness of the wicked heart closes in the assurance that God&rsquo;s love endures and his justice will not fail.</p>",
  },
];

const appSections: AppSection[] = [
  {
    heading: "Be Honest About the Heart",
    accent: ROSE,
    body:
      "<p>Psalm 36 begins with a fearless diagnosis: where the fear of God fades, self-deception, deceitful speech, and settled rebellion grow. Paul applies these words to all of us (Romans 3:18). Rather than recoiling from such honesty, let it do its work. Ask the Spirit to show you where you flatter yourself, where reverence for God has grown thin, where sin whispers unchallenged. This honest reckoning is not despair &mdash; it is the doorway to grace, for it makes the vast love of verses 5&ndash;6 land with full force.</p>",
  },
  {
    heading: "Measure Your Troubles Against God's Love",
    accent: PURPLE,
    body:
      "<p>The psalm&rsquo;s great strategy is to set the smallness of sin and trouble against the immensity of God&rsquo;s steadfast love &mdash; love that reaches to the heavens, faithfulness to the clouds, righteousness like the mountains, judgments like the deep. When a problem looms so large it fills your whole sky, deliberately measure it against this love. Pray verses 5&ndash;6 aloud. Let the scale of God&rsquo;s goodness restore your sense of proportion and quiet your fear.</p>",
  },
  {
    heading: "Come to the Fountain and Drink",
    accent: TEAL,
    body:
      "<p>&ldquo;With you is the fountain of life&rdquo; (36:9). Whatever you are thirsting for &mdash; love, meaning, security, joy &mdash; the psalm points you to the only spring that truly satisfies. Jesus makes the offer explicit: living water welling up to eternal life (John 4), the light of life (John 8:12). When you feel dry, do not run first to lesser streams; come to God himself, feast on the abundance of his house, and drink from his river of delights through his Word, prayer, and the fellowship of his people.</p>",
  },
  {
    heading: "Walk in His Light",
    accent: GOLD,
    body:
      "<p>&ldquo;In your light do we see light&rdquo; (36:9). We cannot see reality rightly on our own; we need God&rsquo;s illumination to understand ourselves, our circumstances, and our path. Cultivate the habit of bringing decisions, confusions, and griefs into his light through Scripture and prayer, asking him to let you see as he sees. To follow the Light of the world is to be promised that we will not walk in darkness but have the light of life.</p>",
  },
];

const reflectionQuestions: string[] = [
  "Psalm 36:1 locates the root of wickedness in having &ldquo;no fear of God.&rdquo; Where in your own life do you sense reverence for God growing thin, and how might that affect your choices?",
  "Paul quotes Psalm 36:1 in Romans 3:18 to indict all humanity. How does seeing yourself in this honest portrait deepen your gratitude for God&rsquo;s grace?",
  "The psalm measures God&rsquo;s love against the heavens, clouds, mountains, and the deep (36:5&ndash;6). What current trouble could you set against the vastness of his steadfast love?",
  "Verse 8 speaks of feasting on the abundance of God&rsquo;s house and drinking from his river of delights. In what practical ways can you &ldquo;feast&rdquo; on God this week rather than settling for lesser satisfactions?",
  "&ldquo;With you is the fountain of life; in your light do we see light&rdquo; (36:9). How do Jesus&rsquo;s claims to be the living water (John 4) and the light of the world (John 8:12) fulfill this verse for you personally?",
  "The psalm ends by asking God to continue his steadfast love and to guard against the proud (36:10&ndash;11). What protection or continued grace do you most need to ask God for right now?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 36 - From the Wicked Heart to the Love That Fills the Sky" },
  { videoId: "OjJ7GkWCHvA", title: "No Fear of God - Psalm 36:1 and Paul's Indictment in Romans 3" },
  { videoId: "pHBzJ2dVXgk", title: "The Fountain of Life and the Light - Psalm 36:9 and John's Gospel" },
  { videoId: "3sO5FH2ybPY", title: "Feasting on the Abundance of Your House - The River of Delights" },
];

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

export default function Psalm36Guide() {
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
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${TEAL}22`, color: TEAL, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 36: Human Wickedness and the Love That Fills the Sky
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }}>
            A study of the psalm that moves from an unflinching portrait of the wicked heart to the immeasurable steadfast love of God &mdash; love that reaches the heavens, a refuge under his wings, a feast in his house, and the fountain of life in whose light we see light.
          </p>
          <div style={{ background: CARD, border: `1px solid ${TEAL}55`, borderLeft: `4px solid ${TEAL}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>
              Key Verse &mdash; Psalm 36:9
            </div>
            <p style={{ margin: 0, fontSize: "1.2rem", lineHeight: 1.6, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;For with you is the fountain of life; in your light do we see light.&rdquo;" }} />
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
                border: `1px solid ${tab === t ? TEAL : BORDER}`,
                background: tab === t ? TEAL : CARD,
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
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Overview</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: MUTED, fontSize: "1.05rem", lineHeight: 1.85 }}>
              <p dangerouslySetInnerHTML={{ __html: "Psalm 36 is a psalm of striking contrasts. It falls into three movements: an unsparing portrait of the wicked heart, ruled by the absence of the fear of God (vv.1&ndash;4); a soaring celebration of the immeasurable steadfast love of God, with its refuge, feast, and fountain of life (vv.5&ndash;9); and a closing prayer for the continuance of that love and protection from the proud (vv.10&ndash;12). The abrupt shift from darkness to light is the very architecture of the psalm&rsquo;s power." }} />
              <p dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>Structure.</strong> Four verses of wickedness give way to verses on the vastness of God&rsquo;s love &mdash; a deliberate imbalance that lets divine goodness overwhelm human evil by sheer scale. At the center stands the radiant verse 9, &ldquo;with you is the fountain of life; in your light do we see light,&rdquo; around which the whole psalm is organized: the river of delights named at its source." }} />
              <p dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>Context.</strong> Paul quotes Psalm 36:1 &mdash; &ldquo;there is no fear of God before their eyes&rdquo; &mdash; in Romans 3:18 as the final charge in his catena proving that all, Jew and Gentile, are under sin. The fountain of life and the seeing of light in verse 9 connect powerfully to John&rsquo;s Gospel: &ldquo;in him was life, and the life was the light of men&rdquo; (John 1:4), the living water of John 4, and &ldquo;I am the light of the world&rdquo; (John 8:12). The feast and refuge imagery echoes Psalm 23 and Isaiah 55." }} />
              <p dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>Why it matters.</strong> Psalm 36 refuses to soften the reality of sin, yet it does not leave us there. It lifts our eyes from the cramped darkness of the human heart to a love vast enough to fill the heavens and a fountain deep enough to satisfy the thirstiest soul. For all who feel the weight of their own failure or the darkness of the world, this psalm is an invitation to come, take refuge, feast, and drink from the God who is life and light." }} />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Key Themes</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Five themes carry the message of Psalm 36, moving from the darkness of the wicked heart into the boundless love and light of God. Tap a theme to open it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {themeItems.map((item) => {
                const isOpen = open === item.id;
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${isOpen ? item.accent : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "1.1rem 1.4rem", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}
                    >
                      <span>
                        <span style={{ display: "block", color: item.accent, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: item.reference }} />
                        <span style={{ display: "block", color: TEXT, fontSize: "1.15rem", fontWeight: 700 }}>{item.title}</span>
                      </span>
                      <span style={{ color: item.accent, fontSize: 22, fontWeight: 700, flexShrink: 0 }}>{isOpen ? "-" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 1.4rem 1.4rem", color: MUTED, fontSize: "1.03rem", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Verse by Verse</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Work through Psalm 36 in four movements, from the wicked heart to the closing prayer. Tap a section to expand it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {verseItems.map((item) => {
                const isOpen = open === item.id;
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${isOpen ? TEAL : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "1.1rem 1.4rem", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}
                    >
                      <span>
                        <span style={{ display: "block", color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: item.reference }} />
                        <span style={{ display: "block", color: TEXT, fontSize: "1.15rem", fontWeight: 700 }}>{item.label}</span>
                      </span>
                      <span style={{ color: TEAL, fontSize: 22, fontWeight: 700, flexShrink: 0 }}>{isOpen ? "-" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 1.4rem 1.4rem", color: MUTED, fontSize: "1.03rem", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Application</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Psalm 36 calls us to be honest about sin and then to lose ourselves in the vastness of God&rsquo;s love. Here are ways to live in its truth.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: "3rem" }}>
              {appSections.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${s.accent}`, borderRadius: 10, padding: "1.4rem 1.6rem" }}>
                  <h3 style={{ color: s.accent, fontWeight: 700, margin: "0 0 0.6rem", fontSize: "1.2rem" }}>{s.heading}</h3>
                  <div style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: s.body }} />
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Questions for Reflection</h3>
            <ol style={{ display: "flex", flexDirection: "column", gap: 14, margin: "0 0 3rem", padding: 0, listStyle: "none" }}>
              {reflectionQuestions.map((q, i) => (
                <li key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: 14 }}>
                  <span style={{ color: TEAL, fontWeight: 800, fontSize: "1.1rem", flexShrink: 0 }}>{i + 1}.</span>
                  <span style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: q }} />
                </li>
              ))}
            </ol>

            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Video Teaching</h3>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Go deeper into Psalm 36 with teaching on the anatomy of the wicked heart, Paul&rsquo;s use of verse 1 in Romans 3, the fountain of life and the light that connect to John&rsquo;s Gospel, and the feast of God&rsquo;s abundant love.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: "3rem" }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Closing Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "O LORD, your steadfast love extends to the heavens and your faithfulness to the clouds; your righteousness is like the mountains and your judgments like the great deep. We confess that apart from your grace there is no fear of God before our eyes, and we flatter ourselves in our own sin. Have mercy on us. How precious is your steadfast love &mdash; let us take refuge in the shadow of your wings, feast on the abundance of your house, and drink from the river of your delights. For with you is the fountain of life, and in your light we see light. Continue your steadfast love to those who know you, and let us walk as children of the light, in Jesus Christ, the light of the world. Amen." }} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
