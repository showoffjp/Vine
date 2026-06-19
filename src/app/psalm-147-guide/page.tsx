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

const overviewBlocks: { heading: string; body: string }[] = [
  {
    heading: "A Hallelujah Psalm of Power and Tenderness",
    body: "Psalm 147 belongs to the great cluster of &lsquo;Hallelujah&rsquo; psalms (146&ndash;150) that bring the whole Psalter to its soaring close. Each of these five psalms opens and shuts with the cry &lsquo;Praise the LORD!&rsquo; &mdash; in Hebrew, &lsquo;Hallelu Yah&rsquo; &mdash; and Psalm 147 takes up that summons by weaving together two truths that lesser minds keep apart: the cosmic majesty of God who numbers and names the stars, and the intimate tenderness of God who heals the brokenhearted and binds up their wounds. The same hand that flung the galaxies into being stoops to bandage a broken heart. This is the theological heart of the psalm, and it is one of the most moving juxtapositions in all of Scripture.",
  },
  {
    heading: "It Is Good and Fitting to Praise",
    body: "The psalm opens not merely by commanding praise but by commending it: &lsquo;it is good to sing praises to our God; for it is pleasant, and a song of praise is fitting&rsquo; (147:1). Praise is not an arbitrary religious duty laid upon us from the outside; it is good for us, it is pleasant, and it is supremely fitting &mdash; the most appropriate response a creature can make to such a Creator. To praise God is to do the very thing we were made for, and the psalmist wants us to feel the rightness, the beauty, the sheer suitability of it.",
  },
  {
    heading: "The Shape of the Psalm",
    body: "Psalm 147 unfolds in three movements, each beginning with a fresh call to praise. The first (147:1&ndash;6) celebrates the LORD who builds up Jerusalem, gathers the outcasts, heals the brokenhearted, names the stars, and lifts up the humble. The second (147:7&ndash;11) calls us to sing with thanksgiving to the God who covers the heavens with clouds, prepares rain, makes grass grow, and feeds the beasts and birds &mdash; yet who delights not in raw power but in those who fear him and hope in his steadfast love. The third (147:12&ndash;20) summons Jerusalem to praise the God who strengthens her gates, blesses her children, makes peace in her borders, governs the snow and frost by his word, and supremely declares his word and statutes to his covenant people.",
  },
  {
    heading: "Context and the Word Made Flesh",
    body: "Psalm 147 likely arose in the period after the return from exile, when the walls of Jerusalem were being rebuilt and the scattered people were being regathered &mdash; which gives fresh force to its praise of the God who &lsquo;builds up Jerusalem&rsquo; and &lsquo;gathers the outcasts of Israel&rsquo; (147:2). The psalm climbs to a magnificent climax in its final verses: the same God whose word governs the snow and the melting frost has given his word and his statutes to Israel as to no other nation (147:19&ndash;20). This special revelation of God&rsquo;s word to his people anticipates the supreme self-revelation of God in the Word made flesh, Jesus Christ, &lsquo;through whom and for whom all things were created&rsquo; (cf. John 1:1&ndash;14, Colossians 1:16).",
  },
];

const themeItems: { id: string; title: string; color: string; body: string }[] = [
  {
    id: "t-fitting",
    title: "It Is Good and Fitting to Sing His Praise",
    color: GOLD,
    body: "&lsquo;Praise the LORD! For it is good to sing praises to our God; for it is pleasant, and a song of praise is fitting&rsquo; (147:1). The psalm grounds praise not in coercion but in its own goodness. To praise God is good &mdash; it accords with the deepest reality of things; it is pleasant &mdash; it brings genuine delight to the one who offers it; and it is fitting &mdash; it is the proper, beautiful, suitable response of the creature to the Creator. Augustine famously prayed, &lsquo;you have made us for yourself, and our heart is restless until it rests in you.&rsquo; Psalm 147 says the same thing in the key of praise: we were made to sing to God, and when we do, we are doing the rightest and most pleasant thing in the world.",
  },
  {
    id: "t-stars-wounds",
    title: "He Heals Wounds and Names the Stars",
    color: TEAL,
    body: "The beating heart of the psalm lies in two verses set side by side: &lsquo;He heals the brokenhearted and binds up their wounds. He determines the number of the stars; he gives to all of them their names&rsquo; (147:3&ndash;4). The God of unimaginable transcendence &mdash; who knows the precise number of the stars and has a name for every one &mdash; is the very same God of unimaginable tenderness, who bends down to bind up a broken heart. Power and compassion are not in tension in him; they are one. If he can count and name the billions of stars, he surely knows your name and your wound. The astronomer of the heavens is the physician of the heart. This is the gospel of Psalm 147: the transcendent Creator is also the compassionate Healer.",
  },
  {
    id: "t-humble",
    title: "He Lifts Up the Humble",
    color: PURPLE,
    body: "&lsquo;The LORD lifts up the humble; he casts the wicked to the ground&rsquo; (147:6). The God who orders the cosmos also orders human affairs, and his order runs against the grain of the proud. He does not measure greatness as the world does. The humble &mdash; the lowly, the bowed-down, the outcast he had just gathered (147:2) &mdash; he raises up; the wicked, in all their self-exalting strength, he casts down. This is the great reversal sung again by Hannah (1 Samuel 2:7&ndash;8) and by Mary in the Magnificat: &lsquo;he has brought down the mighty from their thrones and exalted those of humble estate&rsquo; (Luke 1:52). The LORD who names the stars stoops toward the lowly and resists the proud.",
  },
  {
    id: "t-delight",
    title: "His Delight Is in Those Who Hope in His Love",
    color: ROSE,
    body: "&lsquo;His delight is not in the strength of the horse, nor his pleasure in the legs of a man, but the LORD takes pleasure in those who fear him, in those who hope in his steadfast love&rsquo; (147:10&ndash;11). Here the psalm pierces to the heart of what pleases God. The war-horse was the supreme symbol of military might; the swift legs of a man, the symbol of human prowess. But God is unimpressed by raw power, whether of beast or man. What delights him &mdash; what he takes actual pleasure in &mdash; is the heart that fears him and hopes in his hesed, his steadfast covenant love. Faith and hope, not strength and speed, are the things that move the heart of God.",
  },
  {
    id: "t-provision",
    title: "He Provides for All Creation",
    color: GREEN,
    body: "&lsquo;He covers the heavens with clouds; he prepares rain for the earth; he makes grass grow on the hills. He gives to the beasts their food, and to the young ravens that cry&rsquo; (147:8&ndash;9). The same God who heals hearts and names stars also runs the weather and feeds the animals. Clouds, rain, grass, and food are not the random churn of nature but the daily provision of an attentive Provider. Even the young ravens that cry &mdash; birds the law counted unclean, with no one to care for them &mdash; are fed by his hand. Jesus drew on exactly this confidence: &lsquo;Consider the ravens: they neither sow nor reap... and yet God feeds them. Of how much more value are you than the birds!&rsquo; (Luke 12:24).",
  },
  {
    id: "t-word",
    title: "He Declares His Word to His People",
    color: GOLD,
    body: "The psalm climbs to its summit in the power of God&rsquo;s word. First, his word governs creation: &lsquo;He sends out his command to the earth; his word runs swiftly... He sends out his word, and melts them; he makes his wind blow and the waters flow&rsquo; (147:15&ndash;18). The snow, the frost, the ice all obey his speech. Then comes the supreme gift: &lsquo;He declares his word to Jacob, his statutes and rules to Israel. He has not dealt thus with any other nation; they do not know his rules&rsquo; (147:19&ndash;20). The God whose word commands the weather has spoken his saving word to his covenant people &mdash; a unique and unmerited privilege that finds its fulfillment in the Word made flesh (John 1:14).",
  },
];

const verseSections: { id: string; ref: string; label: string; body: string }[] = [
  {
    id: "v-13",
    ref: "Psalm 147:1&ndash;3",
    label: "He builds up Jerusalem and heals the brokenhearted",
    body: "&lsquo;Praise the LORD! For it is good to sing praises to our God; for it is pleasant, and a song of praise is fitting. The LORD builds up Jerusalem; he gathers the outcasts of Israel. He heals the brokenhearted and binds up their wounds&rsquo; (147:1&ndash;3). The psalm opens by commending praise as good, pleasant, and fitting &mdash; the rightest response a creature can make. Then it turns to the works that call forth that praise: the LORD builds up the city, gathers home the scattered, and &mdash; most tenderly of all &mdash; heals the brokenhearted and binds up their wounds. The verb is the gentle work of a physician wrapping a wound. Before the psalm lifts our eyes to the stars, it bends them down to the wounded heart, so that we know the God of the heavens as the God who heals.",
  },
  {
    id: "v-46",
    ref: "Psalm 147:4&ndash;6",
    label: "He numbers the stars and lifts up the humble",
    body: "&lsquo;He determines the number of the stars; he gives to all of them their names. Great is our Lord, and abundant in power; his understanding is beyond measure. The LORD lifts up the humble; he casts the wicked to the ground&rsquo; (147:4&ndash;6). Immediately after binding up wounds, the psalm sweeps to the farthest reaches of the cosmos: God counts the uncountable stars and names each one. His greatness, power, and understanding are beyond all measure. And this immeasurable God is no detached abstraction: his ordering reaches into human affairs, lifting up the humble and casting down the wicked. The God who names the stars is the God who raises the lowly. Majesty and mercy meet in a single breath.",
  },
  {
    id: "v-711",
    ref: "Psalm 147:7&ndash;11",
    label: "He delights in those who hope in his steadfast love",
    body: "&lsquo;Sing to the LORD with thanksgiving; make melody to our God on the lyre! He covers the heavens with clouds; he prepares rain for the earth; he makes grass grow on the hills... His delight is not in the strength of the horse, nor his pleasure in the legs of a man, but the LORD takes pleasure in those who fear him, in those who hope in his steadfast love&rsquo; (147:7&ndash;11). A fresh call to praise opens this movement, and it celebrates God&rsquo;s tender providence over all creation &mdash; the clouds, the rain, the grass, the food for beasts and even the crying young ravens. Then comes the great surprise: this Provider is unimpressed by power. Not the war-horse, not the swift runner, but the one who fears him and hopes in his love &mdash; this is what delights the heart of God.",
  },
  {
    id: "v-1214",
    ref: "Psalm 147:12&ndash;14",
    label: "He strengthens your gates and makes peace in your borders",
    body: "&lsquo;Praise the LORD, O Jerusalem! Praise your God, O Zion! For he strengthens the bars of your gates; he blesses your children within you. He makes peace in your borders; he fills you with the finest of the wheat&rsquo; (147:12&ndash;14). The third movement opens with a direct summons to the city herself. The God who heals individual hearts also guards a whole people: he strengthens the bars of her gates against every threat, blesses the children within her walls, grants peace within her borders, and satisfies her with the finest wheat. Security, fruitfulness, peace, and provision are all his gift. For the returned exiles rebuilding their broken city, this was no abstraction but the very prayer of their hearts &mdash; and it points to the city whose builder and maker is God (Hebrews 11:10).",
  },
  {
    id: "v-1520",
    ref: "Psalm 147:15&ndash;20",
    label: "He sends out his word to nature and to his people",
    body: "&lsquo;He sends out his command to the earth; his word runs swiftly. He gives snow like wool; he scatters frost like ashes... He sends out his word, and melts them... He declares his word to Jacob, his statutes and rules to Israel. He has not dealt thus with any other nation&rsquo; (147:15&ndash;20). The psalm reaches its summit in the power of God&rsquo;s word. First his word commands the natural order: snow falls like wool, frost scatters like ashes, ice hardens, and at his word it all melts and the waters flow. The same word that governs winter then becomes the supreme gift to his people: he has &lsquo;declared his word&rsquo; &mdash; his statutes and rules &mdash; to Israel as to no other nation. The God whose word rules the weather has spoken his saving word to his own, a privilege fulfilled at last in the Word made flesh. &lsquo;Praise the LORD!&rsquo;",
  },
];

const applicationBlocks: { heading: string; color: string; body: string }[] = [
  {
    heading: "Bring Your Broken Heart to the Healer",
    color: TEAL,
    body: "&lsquo;He heals the brokenhearted and binds up their wounds.&rsquo; The God who numbers and names the stars is not too vast to bend over your particular wound. If you are carrying grief, betrayal, loss, or a sorrow you have never been able to put into words, hear the promise of Psalm 147: he heals the brokenhearted. Do not assume your hurt is too small to register with so great a God, nor too deep for him to reach. The same hand that set the stars in their courses is gentle enough to bind a wound. Bring your broken heart to him, plainly and honestly, and let the Physician of heaven do his tender work.",
  },
  {
    heading: "Let His Greatness Make Your Praise Glad",
    color: GOLD,
    body: "&lsquo;It is good to sing praises to our God; for it is pleasant, and a song of praise is fitting.&rsquo; Psalm 147 invites you to feel not merely the duty of praise but its goodness and its delight. When worship has grown thin or mechanical, return to the wonder this psalm puts before you: a God who names every star and binds every wound, who feeds the ravens and governs the snow. Such a God is worth singing to. Let his greatness rekindle the gladness of your praise. Praise is not a tax we pay to a demanding deity; it is the most fitting and most pleasant thing a creature can do, and the psalm wants you to know it.",
  },
  {
    heading: "Hope in His Steadfast Love, Not in Your Strength",
    color: ROSE,
    body: "&lsquo;His delight is not in the strength of the horse... but the LORD takes pleasure in those who fear him, in those who hope in his steadfast love.&rsquo; We are tempted to trust in our own competence, resources, and power &mdash; our modern war-horses and swift legs. But God is not impressed by raw strength, and he will not finally let us rest in it. What delights him is the heart that fears him and hopes in his love. Examine where your confidence really lies. Are you trusting in your strength, or hoping in his steadfast love? The psalm calls you to lay down your self-reliance and to place your whole hope where God himself takes pleasure.",
  },
  {
    heading: "Treasure the Word He Has Given",
    color: PURPLE,
    body: "&lsquo;He declares his word to Jacob, his statutes and rules to Israel. He has not dealt thus with any other nation.&rsquo; The God whose word commands the snow and the melting frost has spoken his saving word to his people &mdash; an immeasurable and unmerited privilege. You hold in your hands the very thing the psalmist celebrates: the revealed word of God, now completed and fulfilled in Jesus Christ, the Word made flesh. Do not treat so great a gift carelessly. Read it, treasure it, obey it, let it dwell in you richly. The same word that governs the universe is the lamp to your feet and the light to your path (Psalm 119:105).",
  },
];

const reflectionQuestions: string[] = [
  "Psalm 147 sets &lsquo;he heals the brokenhearted&rsquo; right beside &lsquo;he determines the number of the stars.&rsquo; How does holding God&rsquo;s cosmic power and his tender care together change the way you bring your wounds to him?",
  "The psalm says it is &lsquo;good,&rsquo; &lsquo;pleasant,&rsquo; and &lsquo;fitting&rsquo; to praise God. Which of these three words most challenges or reshapes how you think about worship right now, and why?",
  "God&rsquo;s delight is not in the strength of the horse but in those who hope in his steadfast love. Where are you tempted to trust in your own strength instead of hoping in his love?",
  "Verses 8&ndash;9 picture God feeding the beasts and the crying young ravens. How does his care for the smallest creatures speak to your anxieties about provision (cf. Luke 12:24)?",
  "The psalm celebrates that God &lsquo;declares his word&rsquo; to his people as to no other nation. How highly do you actually treasure the gift of God&rsquo;s revealed word, and what would treasuring it more look like this week?",
  "Psalm 147 ends with God&rsquo;s word melting the frost and governing the snow. Where do you need to trust that the same powerful word is also at work in your circumstances?",
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 147: Power and Tenderness in One God" },
  { videoId: "Q2oNOlXzBhY", title: "He Heals the Brokenhearted and Names the Stars" },
  { videoId: "8phkAg8PMHE", title: "His Delight Is in Those Who Hope in His Love" },
  { videoId: "fNk_zzaMoSs", title: "He Declares His Word to His People" },
];

export default function Psalm147Guide() {
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
            Psalm 147: He Heals the Brokenhearted
          </h1>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }}
            dangerouslySetInnerHTML={{ __html: "A Hallelujah psalm that joins God&rsquo;s cosmic power and his tender care &mdash; the LORD who builds up Jerusalem and gathers the outcasts, who heals the brokenhearted and binds up their wounds, who determines the number of the stars and gives to all of them their names. He delights not in the strength of the horse but in those who fear him and hope in his steadfast love, and he declares his word and his statutes to his people as to no other nation." }}
          />
          <div style={{ background: CARD, border: `1px solid ${TEAL}55`, borderLeft: `4px solid ${TEAL}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Key Verse &mdash; Psalm 147:3&ndash;4</div>
            <p
              style={{ margin: 0, fontSize: "1.15rem", lineHeight: 1.7, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;He heals the brokenhearted and binds up their wounds. He determines the number of the stars; he gives to all of them their names.&rdquo;" }}
            />
          </div>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 18px",
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
          <section style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {overviewBlocks.map((b, i) => (
              <div key={i}>
                <h2 style={{ fontSize: "1.45rem", fontWeight: 700, margin: "0 0 0.75rem", color: TEXT }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.body }} />
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: "The Astronomer Who Is Also the Physician" }} />
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The genius of Psalm 147 is its refusal to choose between transcendence and tenderness. In a single breath it declares that the LORD &lsquo;heals the brokenhearted and binds up their wounds&rsquo; and that he &lsquo;determines the number of the stars&rsquo; and &lsquo;gives to all of them their names.&rsquo; The God of the galaxies is the God of the wounded heart. Because he can count and name the uncountable stars, he surely knows your name and your sorrow &mdash; and the same word that governs the falling snow and the melting frost is the saving word he has declared to his people, fulfilled at last in Jesus Christ, the Word made flesh." }}
              />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Key Themes of Psalm 147</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {themeItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${open === item.id ? item.color : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer", padding: "1.1rem 1.4rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, color: TEXT, fontFamily: "inherit" }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                      <span style={{ fontSize: "1.1rem", fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    </span>
                    <span style={{ color: item.color, fontSize: 22, fontWeight: 400, lineHeight: 1, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: open === item.id ? "&minus;" : "&#43;" }} />
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 1.4rem 1.3rem", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.85, margin: "1rem 0 0" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Verse by Verse</h2>
            <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Walk through Psalm 147 in its three movements of praise &mdash; the Healer who names the stars, the Provider who delights in those who hope in him, and the God whose word governs the snow and is declared to his people. Tap each section to open it." }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {verseSections.map((v) => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${open === v.id ? TEAL : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
                  <button
                    onClick={() => toggle(v.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer", padding: "1.1rem 1.4rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, color: TEXT, fontFamily: "inherit" }}
                  >
                    <span>
                      <span style={{ display: "block", color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: v.ref }} />
                      <span style={{ fontSize: "1.08rem", fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: v.label }} />
                    </span>
                    <span style={{ color: TEAL, fontSize: 22, fontWeight: 400, lineHeight: 1, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: open === v.id ? "&minus;" : "&#43;" }} />
                  </button>
                  {open === v.id && (
                    <div style={{ padding: "0 1.4rem 1.3rem", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.85, margin: "1rem 0 0" }} dangerouslySetInnerHTML={{ __html: v.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "application" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Living Psalm 147</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {applicationBlocks.map((b, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${b.color}`, borderRadius: 10, padding: "1.3rem 1.6rem" }}>
                    <h3 style={{ color: b.color, fontWeight: 700, margin: "0 0 0.6rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                    <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.body }} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Questions for Reflection</h2>
              <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: `${PURPLE}33`, color: PURPLE, fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                    <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.7, margin: 0, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Video Teaching</h2>
              <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your meditation on Psalm 147 through teaching on the God who heals the brokenhearted and names the stars, who delights in those who hope in his steadfast love, and who declares his word and statutes to his people." }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                {videoItems.map((v) => (
                  <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Closing Prayer</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "O LORD our God, great and abundant in power, your understanding is beyond measure. You determine the number of the stars and call each one by name, and yet you stoop to heal the brokenhearted and bind up our wounds. We praise you, for it is good and pleasant and fitting to sing to you. Teach us not to trust in our own strength, but to fear you and to hope in your steadfast love, in which you take such delight. Provide for us as you feed the ravens, guard us as you strengthen the gates of your city, and let your word dwell richly in us &mdash; the word you declared to your people and fulfilled in Jesus Christ, the Word made flesh. Praise the LORD! Amen." }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
