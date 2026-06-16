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

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

const videoItems = [
  { videoId: "AzmYV8GNAIM", title: "BibleProject - Book of Proverbs Overview" },
  { videoId: "M3jcUcm8v0Y", title: "BibleProject - Wisdom Series Introduction" },
  { videoId: "n7gV8mc-Fzk", title: "Proverbs 14 - Wisdom Builds, Folly Tears Down" },
  { videoId: "GFnAVgLAYZc", title: "The Way That Seems Right - A Study of Proverbs 14" },
];

const reflectionQuestions = [
  "In what concrete ways am I building up my household, and where might my own hands be tearing it down?",
  "Is there a path that seems right to me but that I have never honestly tested against God's Word and wise counsel?",
  "Where am I being simple and believing everything, and where should I instead give careful thought to my steps?",
  "What is the present state of my heart - tranquil and life-giving, or restless with envy that rots the bones?",
  "How does the way I treat the poor reveal what I really believe about their Maker and mine?",
  "Am I slow to anger and quick to understand, or do I let a hasty temper exalt folly in my relationships?",
];

export default function Proverbs14GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: `${GREEN}22`, color: GREEN, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Proverbs Study
          </div>
          <h1 style={{ fontSize: "2.6rem", lineHeight: 1.12, margin: "0 0 14px", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Proverbs 14
          </h1>
          <p style={{ fontSize: "1.35rem", color: TEXT, margin: "0 0 10px", fontWeight: 600 }}>
            Wisdom Builds, Folly Tears Down
          </p>
          <p style={{ fontSize: "1.05rem", color: MUTED, margin: 0, fontStyle: "italic", lineHeight: 1.5 }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;The wisest of women builds her house, but folly with her own hands tears it down. &hellip; There is a way that seems right to a man, but its end is the way to death.&rdquo; &mdash; Proverbs 14:1, 12" }} />
        </header>

        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, display: "flex", flexWrap: "wrap", gap: 8, padding: "12px 0", background: BG, borderBottom: `1px solid ${BORDER}`, marginBottom: "2rem" }}>
          {TABS.map((tab) => {
            const active = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                style={{
                  cursor: "pointer",
                  border: `1px solid ${active ? GREEN : BORDER}`,
                  background: active ? `${GREEN}22` : CARD,
                  color: active ? GREEN : MUTED,
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "inherit",
                  transition: "all 0.15s ease",
                }}
              >
                {tab}
              </button>
            );
          })}
        </nav>

        {activeTab === "Overview" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 1rem", color: TEXT }}>A Gallery of Contrasts</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Proverbs 14 belongs to the great central collection of Solomonic sayings, where wisdom is delivered not as a flowing argument but as a string of sharp, self-contained observations. The dominant literary form here is antithetical parallelism: a first line states a truth, and a second line states its opposite, so that the wise and the foolish, the righteous and the wicked, are held side by side for our inspection. Reading this chapter is like walking through a gallery where every portrait of wisdom hangs next to a portrait of folly. The effect is cumulative; verse after verse, the two ways of living are pressed upon the heart until we are forced to ask which way is ours." }} />
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "The chapter opens with an image that frames everything to follow: the wisest of women builds her house, but folly with her own hands tears it down. Building and tearing down become the master metaphor for the whole of life. Wisdom is constructive, patient, and life-giving; folly is destructive, often working its ruin not through some outside enemy but through one&rsquo;s own hands. From this opening the chapter ranges across the home, the heart, the tongue, the treatment of the poor, the management of anger, and even the moral health of a whole nation." }} />
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "At the very center of the chapter stands one of the most sobering proverbs in all of Scripture: there is a way that seems right to a man, but its end is the way to death. This single verse, repeated again in Proverbs 16:25, exposes the deadly possibility of sincere self-deception. A path can feel right, look right, and command our full confidence, and still lead straight to ruin. The chapter therefore is not merely teaching cleverness; it is calling us to a humility that distrusts its own sense of direction and submits to the wisdom that comes from the fear of the LORD." }} />
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.8rem 0 0.8rem", color: GREEN }}>The Foundation: The Fear of the LORD</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Although Proverbs 14 ranges over many practical subjects, it never lets us forget where wisdom begins. In the fear of the LORD one has strong confidence, and his children will have a refuge; the fear of the LORD is a fountain of life, that one may turn away from the snares of death. These verses anchor the whole chapter, reminding us that practical wisdom is not a collection of life hacks but the overflow of a reverent relationship with God. The one who fears the LORD has a foundation that holds, a refuge in trouble, and a fountain that keeps bubbling up with life even in a dry land." }} />
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "So the chapter rewards slow and meditative reading. Each proverb is a seed that can be turned over, applied, and prayed through. Taken together they form a portrait of the wise life: a home built up rather than torn down, a heart kept tranquil rather than corroded by envy, steps weighed rather than rushed, the poor honored rather than crushed, and a nation lifted rather than disgraced. Behind every line stands the great division of the Wisdom literature, the two paths of life and death, and the call to choose the way that leads to life." }} />
          </section>
        )}

        {activeTab === "Key Themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 1.2rem", color: TEXT }}>The Great Themes of Proverbs 14</h2>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 0.7rem", color: GREEN }}>1. Building Up Versus Tearing Down the Home</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "The chapter begins with the wise woman who builds her house while folly tears its own house down with her own hands. The house is more than a building; it is the whole household, the family, the relationships, and the legacy that one constructs over a lifetime. The tragedy the proverb exposes is that ruin so often comes from within, by our own hands, through neglect, harsh words, and foolish choices that no outside enemy could have inflicted on us. Wisdom is therefore profoundly domestic, expressing itself first in the patient, daily work of building up those nearest to us rather than wearing them down." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: ROSE }}>2. The Deceptive Way That Seems Right</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "There is a way that seems right to a man, but its end is the way to death. This theme is so important that the same words appear again in Proverbs 16:25, and they echo the verdict of Jeremiah that the heart is deceitful above all things. The danger here is not the obvious wickedness that knows itself to be wrong, but the subtle path that feels entirely reasonable and yet leads to destruction. Because our inner compass is fallen, we cannot trust the mere feeling of rightness; we need the correction of God&rsquo;s Word, the counsel of the wise, and the humility to question our own certainties before they carry us over a cliff." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: PURPLE }}>3. Discernment Versus Naivety</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "The simple believes everything, but the prudent gives thought to his steps. Proverbs draws a sharp line between a trusting faith and a gullible naivety that swallows every claim and follows every impulse. The prudent person is not cynical but careful, weighing words and consequences before acting, looking down the road to see where a path actually leads. This is not the death of childlike trust toward God; rather it is the refusal to be childish toward the schemes, flatteries, and half-truths of a fallen world. Wisdom thinks before it steps." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: TEAL }}>4. The Hidden Sorrow of the Heart</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Even in laughter the heart may ache, and the end of joy may be grief. Proverbs 14 is remarkably honest about the inner life, refusing the shallow notion that a smiling face always means a peaceful soul. Joy itself can carry a hidden sorrow, and the brightest laughter can mask a wound that no one sees. This theme is paired with the great word on emotional health: a tranquil heart gives life to the flesh, but envy makes the bones rot. The wisdom of this chapter reaches all the way down into our emotions, teaching that the state of the heart shapes the very health of the body." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: GOLD }}>5. The Poor and Their Maker</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Whoever oppresses a poor man insults his Maker, but he who is generous to the needy honors him. Here the treatment of the poor is lifted out of the realm of mere social courtesy and placed before the throne of the Creator. To despise the poor is to despise the God who made them, for rich and poor alike bear his image and meet together as his handiwork. Generosity to the needy is therefore an act of worship, a way of honoring God himself, while oppression of the weak is a direct insult to him. This theme runs straight into the teaching of Jesus, who said that what we do to the least of these we do to him." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: ROSE }}>6. Slowness to Anger and the Strength of Patience</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Whoever is slow to anger has great understanding, but he who has a hasty temper exalts folly. Patience under provocation is presented not as weakness but as a mark of deep understanding, while a quick temper is folly put on display for all to see. The wise person governs the inner fire and refuses to let a flash of feeling dictate words and actions. This theme connects with the call to a tranquil heart, for the one who is settled within is far harder to provoke. Slowness to anger gives time for truth to be seen and for grace to do its work." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: GREEN }}>7. The Righteousness of a Nation</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Righteousness exalts a nation, but sin is a reproach to any people. This civic proverb lifts wisdom from the level of the individual and the household to the level of an entire people. The moral character of a nation is not a private matter, for righteousness raises a people to honor while sin brings disgrace and decay. Wisdom is therefore public as well as personal, shaping not only homes but cultures and societies. The same principles of integrity, justice, and the fear of the LORD that build a single household are the very things that exalt or ruin a whole nation." }} />
          </section>
        )}

        {activeTab === "Verse by Verse" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 1.2rem", color: TEXT }}>Key Verses, Examined Closely</h2>

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0 0 0.6rem", color: GREEN }}>Verse 1 &mdash; The Builder and the Wrecker</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "The wisest of women builds her house, but folly with her own hands tears it down. The opening proverb sets the architecture for the entire chapter, contrasting the patient labor of building with the self-inflicted ruin of demolition. Notice that folly does not need an outside force to destroy the home; she tears it down with her own hands, undone by her own choices. The verse honors the quiet, constructive power of wisdom that, day by day, raises up a household, a marriage, a family, and a future. Every word we speak and every habit we keep is either laying a brick or swinging a hammer against our own walls." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: GREEN }}>Verse 23 &mdash; Profit in Toil, Poverty in Talk</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "In all toil there is profit, but mere talk tends only to poverty. Wisdom is practical and unsentimental about the value of honest work. Real labor, however humble, yields a real return, while endless talk that never moves to action produces only want. The proverb is not against words; it is against words that become a substitute for diligence, the empty chatter of plans that are never carried out. The wise close the gap between intention and action, knowing that bread comes from the field that is actually worked, not from the conversation about working it." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: PURPLE }}>Verse 15 &mdash; The Simple and the Prudent</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "The simple believes everything, but the prudent gives thought to his steps. The simple here is the unformed, untrained person who has not yet learned discernment and who therefore takes every claim at face value. The prudent person, by contrast, weighs and considers, looking carefully where each step will land. This is a call to spiritual maturity in an age of endless information and competing voices, where to believe everything is to be tossed about by every wind. The wise neither despair into cynicism nor drift into gullibility, but bring careful thought to the path before them." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: ROSE }}>Verse 12 &mdash; The Way That Seems Right</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "There is a way that seems right to a man, but its end is the way to death. This may be the most important single verse in the chapter, and its weight is underscored by its exact repetition in Proverbs 16:25. The proverb warns that our own sense of rightness is not a safe guide, because a path can feel entirely correct and still end in death. It exposes the peril of sincere self-deception, the soul that is confident and wrong at the same time. The only remedy is to test our ways against the unchanging truth of God rather than trusting the deceitful witness of our own hearts." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: TEAL }}>Verse 13 &mdash; The Ache Beneath the Laughter</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Even in laughter the heart may ache, and the end of joy may be grief. With unusual tenderness the proverb acknowledges the hidden sorrows that smiling faces so often conceal. Laughter is not always the sound of a settled heart, and the joys of this world can leave a residue of grief when they fade. The verse keeps us honest about ourselves and compassionate toward others, since we never see the full weight that another soul is carrying. It quietly points beyond every passing pleasure to a joy that does not end in grief, the lasting gladness found only in God." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: ROSE }}>Verse 29 &mdash; Slow to Anger, Great in Understanding</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Whoever is slow to anger has great understanding, but he who has a hasty temper exalts folly. The proverb ties self-control directly to wisdom, presenting patience as a sign of depth and a quick temper as folly placed on a pedestal. The hasty person reacts before he understands and, in doing so, exalts his foolishness for everyone to see. Slowness to anger creates the space for understanding to arrive, for the facts to settle and grace to act. Far from being passive, this restraint is a great and active strength, the mark of a mind that rules itself." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: TEAL }}>Verse 30 &mdash; The Tranquil Heart and the Rotting Bones</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "A tranquil heart gives life to the flesh, but envy makes the bones rot. This striking proverb links the state of the soul to the health of the body, centuries before anyone spoke of psychosomatic effects. A heart at peace is a source of vitality, while envy is a corrosive force that eats away at us from the inside like a sickness in the bones. The contrast warns that comparing ourselves with others and coveting what they have is not a harmless habit but a slow poison. Wisdom guards the heart, cultivating contentment and gratitude in place of the gnawing discontent of envy." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: GOLD }}>Verse 31 &mdash; Insulting or Honoring the Maker</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Whoever oppresses a poor man insults his Maker, but he who is generous to the needy honors him. The proverb traces a direct line from the way we treat the poor to the way we regard God himself, for he is the Maker of rich and poor alike. To grind down the weak is to insult the One whose image they bear, while to show kindness to the needy is to honor that same God. This lifts charity out of mere sentiment and makes it a matter of reverence. The teaching reaches forward to the words of Christ, who identified himself with the hungry, the stranger, and the imprisoned, so that what is done to the least is done to him." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: GREEN }}>Verse 34 &mdash; Righteousness Exalts a Nation</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Righteousness exalts a nation, but sin is a reproach to any people. This is the great civic proverb of the chapter, declaring that moral character is not merely a private affair but the very thing that lifts or lowers a whole people. Righteousness raises a nation to honor and stability, while sin brings reproach, disgrace, and eventual decay. The verse reminds us that the choices of individuals and communities accumulate into the moral climate of a society. No amount of wealth or power can exalt a people whose foundations are rotted by injustice and disregard for God." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: TEAL }}>Verse 27 &mdash; The Fountain of Life</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "The fear of the LORD is a fountain of life, that one may turn away from the snares of death. Here the chapter returns to its true foundation, naming the fear of the LORD as the source from which all wisdom flows. This reverent awe of God is not a dread that paralyzes but a fountain that gives life, ever fresh and ever flowing. It is also a guide that steers us away from the hidden snares of death, the very traps that the way which seems right would lead us into. Where the deceptive path ends in death, the fear of the LORD opens a fountain of life." }} />
          </section>
        )}

        {activeTab === "Application" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 1rem", color: TEXT }}>Living the Wisdom of Proverbs 14</h2>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 0.7rem", color: GREEN }}>Build, Do Not Tear Down</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Begin where the chapter begins, with the home you are building or wrecking by your own hands. Ask honestly whether your daily words and habits are laying bricks or swinging a hammer against your own walls. Wisdom in the household is rarely dramatic; it is the patient, repeated work of encouragement, faithfulness, and self-control that raises a family over years. Choose one relationship today and commit to a concrete act that builds rather than tears down." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: ROSE }}>Distrust the Path That Merely Feels Right</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Take seriously the warning that a way can seem right and still end in death. Before committing to a major decision, test the path against the Word of God, the counsel of the wise, and honest prayer, rather than trusting the mere feeling of certainty. The most dangerous errors are often the ones we are most confident about, because confidence silences the questions that might have saved us. Cultivate a humble suspicion of your own sense of direction, and build the habit of seeking counsel before you act." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: TEAL }}>Guard the Heart Against Envy</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Because a tranquil heart gives life while envy makes the bones rot, the inner life requires active tending. Notice the moments when comparison rises up and gratitude drains away, and turn deliberately from coveting to thanksgiving. Envy promises that we would be happy if we only had what another has, but it quietly poisons us from within. Replace the slow corrosion of comparison with the life-giving practice of contentment in what God has provided." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: GOLD }}>Honor the Maker by Loving the Poor</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Remember that generosity to the needy is a way of honoring God and that oppression of the poor is an insult to him. Look for the people on the margins of your own circle and ask how you might show practical kindness that treats them as image-bearers of God. This is not optional decoration on the Christian life but a direct expression of reverence for the Creator. Let your treatment of the weakest reveal a true and living fear of the LORD." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: PURPLE }}>Be Slow to Anger and Quick to Think</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Combine the call to be slow to anger with the call to give thought to your steps. When provocation comes, create a deliberate pause that lets understanding arrive before words do, refusing to let a flash of temper exalt folly. When decisions come, refuse the naivety that believes everything and instead weigh the path carefully. In both the heat of emotion and the rush of choice, wisdom slows down long enough to see clearly." }} />

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.6rem 1.5rem", margin: "2rem 0 0" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, margin: "0 0 1rem", color: GREEN }}>Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ fontSize: "1.02rem", lineHeight: 1.65, color: TEXT }}>{q}</li>
                ))}
              </ol>
            </div>
          </section>
        )}

        <section style={{ marginTop: "3.5rem", paddingTop: "2.5rem", borderTop: `1px solid ${BORDER}` }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 0.5rem", color: TEXT }}>Watch and Study</h2>
          <p style={{ fontSize: "1.02rem", color: MUTED, margin: "0 0 1.8rem", lineHeight: 1.6 }}>
            Video teaching to deepen your study of Proverbs 14 and the wisdom literature of the Bible.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ padding: "0.9rem 1rem", margin: 0, fontSize: "0.98rem", fontWeight: 600, color: TEXT, lineHeight: 1.4 }}>{v.title}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
