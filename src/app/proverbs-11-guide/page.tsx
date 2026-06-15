"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verses", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "dQw4w9WgXcW", title: "Proverbs 11 - Integrity and the Just Weight" },
  { videoId: "Lm0pQ3R7sWh", title: "The Paradox of Generosity (Proverbs 11:24-25)" },
  { videoId: "Zx7Yt2Vb9Kc", title: "Righteousness as a Tree of Life" },
  { videoId: "Np4Qr8Sd1Lf", title: "Antithetical Parallelism in the Proverbs" },
];

const THEMES = [
  {
    color: GOLD,
    title: "Honesty and Just Weights",
    body: "The chapter opens with the marketplace: a false balance is an abomination to the LORD, but a just weight is his delight. In the ancient world business was done with scales and stones, and a dishonest merchant could quietly shave the weights to cheat his neighbor. Proverbs treats this not merely as bad ethics but as a matter that reaches God himself, who delights in the honest stone and is repelled by the rigged one. The law had already forbidden differing weights and measures (Deuteronomy 25:13&ndash;16), and Proverbs presses the point inward: how you do business reveals whether you fear the LORD.",
  },
  {
    color: ROSE,
    title: "The Destructiveness of Pride",
    body: "When pride comes, then comes disgrace, but with the humble is wisdom (v.2). Pride is the root sin of the wisdom literature because it is the refusal to be taught, the conviction that one already knows. The proud person cannot receive correction and so is cut off from the very channel through which wisdom flows. By contrast the humble, the modest and unassuming, are open to instruction and therefore grow wise. Proverbs returns again and again to this theme, for pride blinds a person to danger while humility keeps the eyes clear.",
  },
  {
    color: TEAL,
    title: "Integrity as a Guide",
    body: "The integrity of the upright guides them, but the crookedness of the treacherous destroys them (v.3). Integrity here is wholeness, a life that is the same all the way through, with no gap between the public face and the private self. Such wholeness functions like an inner compass, steering a person safely through the moral confusion of life. The crooked, by contrast, are undone by their own twisting; the very deceit they use as a tool eventually becomes the trap that destroys them. Character is not merely admirable in Proverbs, it is practically protective.",
  },
  {
    color: PURPLE,
    title: "Righteousness Delivers from Death",
    body: "Riches do not profit in the day of wrath, but righteousness delivers from death (v.4). Wealth is not condemned in Proverbs, but here it is exposed in its limits: when judgment comes, money buys nothing. The day of wrath strips away every false security and leaves only character standing. Righteousness, the right relationship to God and neighbor, proves to be the only currency that holds its value when everything else fails. The same theme echoes in verse 7, where the hope of the wicked perishes with him at death, having been anchored in things that could not last.",
  },
  {
    color: GREEN,
    title: "The Paradox of Generosity",
    body: "One who waters will himself be watered, and whoever brings blessing will be enriched (vv.24&ndash;25). Proverbs 11 contains one of the most striking economic paradoxes in Scripture: there is one who gives freely and yet grows all the richer, and one who withholds what he should give and only suffers want. In the calculus of the world, giving away depletes; in the calculus of God ordered world, generosity multiplies. The one who pours out blessing finds himself watered in return, because he lives with the grain of a God who is himself endlessly generous.",
  },
  {
    color: GOLD,
    title: "The Fruit of Righteousness",
    body: "The fruit of the righteous is a tree of life, and whoever captures souls is wise (v.30). Whoever trusts in his riches will fall, but the righteous will flourish like a green leaf (v.28). The chapter closes with the imagery of living, fruitful growth. The righteous person is not a withered moralist but a green, flourishing tree whose very life gives life to others. To win souls, to turn people toward wisdom and life, is named here as the highest expression of wisdom itself.",
  },
];

const VERSES = [
  {
    ref: "Proverbs 11:1",
    color: GOLD,
    heading: "A False Balance, an Abomination",
    body: "A false balance is an abomination to the LORD, but a just weight is his delight. The verse is built on antithetical parallelism, the dominant pattern of this section of Proverbs, in which the first line and second line stand in deliberate contrast. The false balance and the just weight are set against each other, and so are the two divine responses: abomination and delight. By placing everyday commerce under the gaze of God, Proverbs insists that there is no neutral, secular zone where the fear of the LORD does not reach. Honest scales are an act of worship.",
  },
  {
    ref: "Proverbs 11:2",
    color: ROSE,
    heading: "Pride and Disgrace, Humility and Wisdom",
    body: "When pride comes, then comes disgrace, but with the humble is wisdom. The Hebrew suggests an almost automatic sequence: pride arrives, and disgrace follows close behind it like a shadow. Pride sets a person up for the fall because it closes the ears to warning and correction. Humility, by contrast, keeps company with wisdom, for the teachable heart is the one able to learn. This single verse compresses the whole moral psychology of Proverbs into a sentence.",
  },
  {
    ref: "Proverbs 11:3-4",
    color: TEAL,
    heading: "Integrity Guides, Righteousness Delivers",
    body: "The integrity of the upright guides them, but the crookedness of the treacherous destroys them (v.3); riches do not profit in the day of wrath, but righteousness delivers from death (v.4). These two verses pair character with destiny. Integrity is pictured as a guide, leading the upright along a safe path, while the treacherous are tangled and ruined by their own crookedness. Verse 4 then sets the limit of wealth against the power of righteousness: in the day of reckoning, money is worthless and only righteousness rescues. Together they teach that what you are matters infinitely more than what you have.",
  },
  {
    ref: "Proverbs 11:7",
    color: PURPLE,
    heading: "When the Wicked Dies, His Hope Perishes",
    body: "When the wicked dies, his hope will perish, and the expectation of wealth perishes too. The verse exposes the fragility of a life built on the wrong foundation. The wicked person stores up hopes and expectations, but they are anchored in things that death sweeps away. There is a deep sorrow in the line: not only does the man die, his hope dies with him, leaving nothing. By contrast, the implied hope of the righteous, grounded in God, is precisely the hope that survives death, a thread Proverbs lays down for the rest of Scripture to pick up.",
  },
  {
    ref: "Proverbs 11:9",
    color: GOLD,
    heading: "Knowledge Delivers the Righteous",
    body: "With his mouth the godless man would destroy his neighbor, but by knowledge the righteous are delivered. Here the theme of the tongue, so central to Proverbs, takes a darker turn: words can be weapons aimed at a neighbor very life and reputation. The godless man uses speech to tear down, but knowledge, true understanding rooted in the fear of the LORD, becomes the rescue of the righteous. Wisdom is not only a private virtue but a communal protection, for the wise see through slander and are delivered by discernment. What we do with our mouths can wound a community or heal it.",
  },
  {
    ref: "Proverbs 11:24-25",
    color: GREEN,
    heading: "The One Who Waters Is Watered",
    body: "One gives freely, yet grows all the richer; another withholds what he should give, and only suffers want (v.24); whoever brings blessing will be enriched, and one who waters will himself be watered (v.25). These verses turn ordinary economics inside out. The open hand is enriched while the closed fist is impoverished, a paradox that only makes sense in a world governed by a generous God. The image of watering is agricultural and beautiful: the one who irrigates the field of another finds his own ground refreshed. This generosity paradox is taken up directly by Paul, who promises that the one who sows bountifully will reap bountifully (2 Corinthians 9:6&ndash;11).",
  },
  {
    ref: "Proverbs 11:28",
    color: TEAL,
    heading: "Flourishing Like a Green Leaf",
    body: "Whoever trusts in his riches will fall, but the righteous will flourish like a green leaf. The contrast is between a brittle false security and a living, leafy vitality. To trust in riches is to lean on something that cannot bear the weight, and the trustee falls. The righteous, by contrast, are like a green leaf, fresh and alive, drawing life from a deeper source than their bank account. The image recalls the tree planted by streams of water in Psalm 1, whose leaf does not wither.",
  },
  {
    ref: "Proverbs 11:30",
    color: GOLD,
    heading: "A Tree of Life, and Capturing Souls",
    body: "The fruit of the righteous is a tree of life, and whoever captures souls is wise. The chapter ends with one of the most luminous images in the book. The righteous person is not merely good in the abstract; the fruit of that life becomes a tree of life for others, an echo of Eden and a foretaste of the new creation. To capture or win souls is to draw people toward wisdom and life, and this is named as the very height of wisdom. A righteous life is contagious; it bears fruit that nourishes a whole community.",
  },
];

const REFLECTIONS = [
  "Proverbs 11:1 puts honest business under the eye of God. Where in your work or finances might God be calling you to use a just weight rather than a false balance?",
  "Pride comes before disgrace, but with the humble is wisdom (v.2). Where is pride currently closing your ears to correction you need to hear?",
  "Verse 4 says riches cannot profit in the day of wrath but righteousness delivers from death. What are you tempted to trust in that cannot finally save you?",
  "The generosity paradox of verses 24-25 promises that the one who waters will be watered. Where is God inviting you to give more freely, trusting his economy rather than your own?",
  "Proverbs 11:30 calls the fruit of the righteous a tree of life and says whoever captures souls is wise. Whose life might be refreshed and turned toward wisdom through yours this week?",
];

export default function Proverbs11GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)", color: TEXT }}>
      {/* Hero section */}
      <header style={{ maxWidth: 880, margin: "0 auto", padding: "48px 20px 28px" }}>
        <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
          Wisdom - Old Testament
        </div>
        <h1 style={{ color: TEXT, fontSize: 36, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.15 }}>
          Proverbs 11: Integrity, Generosity, and the Fruit of Righteousness
        </h1>
        <p style={{ color: GOLD, fontSize: 16, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 6px", maxWidth: 680 }} dangerouslySetInnerHTML={{ __html: "&ldquo;A false balance is an abomination to the LORD, but a just weight is his delight.&rdquo;" }} />
        <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>Proverbs 11:1</p>
      </header>

      {/* Sticky tab nav */}
      <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, background: BG, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "12px 20px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          {TABS.map((t) => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? GOLD : BORDER}`,
                background: activeTab === t.id ? `${GOLD}20` : "transparent",
                color: activeTab === t.id ? GOLD : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      <main id="main-content" style={{ maxWidth: 880, margin: "0 auto", padding: "32px 20px 24px" }}>
        {activeTab === "overview" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 24 }}>
                {[["Book", "Proverbs"], ["Chapter", "11 (of 31)"], ["Genre", "Wisdom Poetry"], ["Form", "Antithetic Couplets"], ["Key Theme", "Righteousness"], ["Key Verse", "Proverbs 11:1"]].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>A Chapter of Contrasts</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }} dangerouslySetInnerHTML={{ __html: "Proverbs 11 sits inside the great central collection of Solomonic sayings (chapters 10&ndash;22), where the proverbs come one after another in tight, two-line units. Almost every verse in this chapter is built on antithetical parallelism, the literary form in which the second line says the opposite of the first, often joined by the word but. The righteous are set against the wicked, the upright against the treacherous, the generous against the stingy, the humble against the proud. The effect is a steady drumbeat of moral clarity: two ways of living, two kinds of people, two destinies." }} />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }} dangerouslySetInnerHTML={{ __html: "Though it reads as a string of independent sayings, the chapter has a recognizable center of gravity. It is preoccupied with the difference that character makes, especially in the realms of money, speech, and community. It opens in the marketplace with honest scales (v.1), moves through pride and integrity (vv.2&ndash;3), weighs the true value of riches against righteousness (v.4), and climbs toward its great paradox of generosity (vv.24&ndash;25) before closing with the flourishing tree of life (vv.28, 30)." }} />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "What holds these scattered sayings together is the conviction that righteousness is not a private piety divorced from real life but a practical wisdom that shapes how we trade, speak, and give. The chapter insists that integrity protects, that generosity enriches, and that the fruit of a righteous life becomes life for others. It is theology delivered in the form of memorable, repeatable couplets." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>The Flow of Proverbs 11</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["vv.1-3", "Integrity in Business", "Honest weights, the disgrace of pride, and integrity as an inner guide for the upright."],
                  ["vv.4-8", "Righteousness and Wrath", "Riches fail in the day of wrath; righteousness delivers from death while the hope of the wicked perishes."],
                  ["vv.9-15", "Speech and Community", "The tongue that destroys or delivers a neighbor; a city blessed by the upright; the danger of rash pledges."],
                  ["vv.16-23", "Character and Reward", "The gracious woman, the cruel and the kind, the contrast of desires that end in good or in wrath."],
                  ["vv.24-26", "The Generosity Paradox", "The one who gives grows richer; the one who withholds suffers want; the one who waters is watered."],
                  ["vv.27-31", "Flourishing and Fruit", "Trusting in riches falls; the righteous flourish like a green leaf; their fruit is a tree of life."],
                ].map(([ref, title, desc]) => (
                  <div key={ref} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                    <span style={{ background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: GOLD, fontWeight: 700, whiteSpace: "nowrap", alignSelf: "flex-start" }}>{ref}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{title}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === "themes" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Key Themes of Proverbs 11</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Proverbs 11 gathers several of the book great concerns into one chapter: honest business and just weights, the destructiveness of pride, integrity as a moral compass, the surprising paradox that generosity leads to gain, and the picture of righteousness as a living, fruitful tree of life. Each theme is delivered in the antithetical form that makes Proverbs so memorable." }} />
            </div>
            {THEMES.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <h3 style={{ color: t.color, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: t.body }} />
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 6 }}>
              <div style={{ color: TEAL, fontWeight: 700, fontSize: 13, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>The Generosity Paradox in the New Testament</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 10px" }} dangerouslySetInnerHTML={{ __html: "The strange economics of Proverbs 11:24&ndash;25, where the one who gives freely grows richer and the one who waters is watered, becomes a direct theme of New Testament teaching on generosity. Paul tells the Corinthians that the one who sows sparingly will reap sparingly, and the one who sows bountifully will reap bountifully, and that God loves a cheerful giver (2 Corinthians 9:6&ndash;7)." }} />
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Paul goes on to promise that God is able to make all grace abound, so that the generous giver, having all sufficiency in all things, may abound in every good work (2 Corinthians 9:8&ndash;11). This is the watering principle of Proverbs lifted into the life of the church: the open hand is met by the abounding grace of a generous God, and the giver finds himself enriched precisely as he pours himself out for others." }} />
            </div>
          </section>
        )}

        {activeTab === "verses" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Verse by Verse Through Proverbs 11</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Because Proverbs 11 is a string of self-contained couplets, reading it verse by verse lets each saying land with its full weight. Watch for the antithetical pattern at work, the steady contrast of two ways that gives the chapter its rhythm and its power." }} />
            </div>
            {VERSES.map((v) => (
              <div key={v.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${v.color}20`, border: `1px solid ${v.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: v.color, fontWeight: 700, whiteSpace: "nowrap" }}>{v.ref}</span>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 16, margin: 0 }}>{v.heading}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.body }} />
              </div>
            ))}
          </section>
        )}

        {activeTab === "application" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Living the Wisdom of Proverbs 11</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }} dangerouslySetInnerHTML={{ __html: "Proverbs is not given to be admired but to be lived, and chapter 11 reaches directly into the most ordinary parts of life: the way we handle money, the way we speak about others, the way we give. To take this chapter seriously is to let the fear of the LORD shape the marketplace, the conversation, and the wallet, not just the worship service." }} />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The chapter also points beyond itself. The righteousness that delivers from death (v.4) and the fruit that becomes a tree of life (v.30) find their fullest meaning in the gospel, where Christ becomes our righteousness and the true tree of life is opened again to all who come. The generous God who waters the one who waters others is the same God who gave his own Son, sowing the most costly seed of all." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>Integrity in the Small Things</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The just weight of verse 1 is a call to honesty in the details no one else sees: the expense report, the hours billed, the price quoted, the promise kept. Proverbs treats these small acts of integrity as a delight to God, which means our everyday faithfulness in business and money is itself a form of worship. Where there is no gap between our public face and our private dealing, integrity becomes the inner compass that guides us safely (v.3)." }} />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>Giving Against the Grain of Fear</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The generosity paradox of verses 24 and 25 invites us to give in a way that defies the math of scarcity. Fear tells us that the closed fist is safe and the open hand is foolish, but Proverbs says the opposite: the one who waters will himself be watered. Practicing generosity is a way of trusting the character of God, betting our lives on the truth that his economy, not ours, has the final word." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}`, borderRadius: 14, padding: 28, marginTop: 6 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {REFLECTIONS.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ background: `${GREEN}20`, border: `1px solid ${GREEN}40`, color: GREEN, borderRadius: "50%", width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Always-visible video section */}
      <section style={{ maxWidth: 880, margin: "0 auto", padding: "16px 20px 64px" }}>
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
          <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Proverbs 11</h2>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }} dangerouslySetInnerHTML={{ __html: "Sermons and lectures on honest weights, the destructiveness of pride, the paradox of generosity, and the fruit of righteousness as a tree of life." }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: 16, margin: 0 }}>{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
