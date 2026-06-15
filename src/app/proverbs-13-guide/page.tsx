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
  { videoId: "AzmYV8GNAIM", title: "Proverbs Overview: The Path of Wisdom" },
  { videoId: "Vt8Eo3Ui9Sw", title: "Hope Deferred Makes the Heart Sick: Proverbs 13:12" },
  { videoId: "ZNHKweC2Okc", title: "Walk With the Wise: The Power of Your Company" },
  { videoId: "ll0kQT3l8z0", title: "The Discipline We Love: Proverbs 13 on Parenting and Speech" },
];

const THEMES = [
  {
    color: GREEN,
    title: "Receiving Instruction",
    body: "Proverbs 13 opens with the bedrock distinction of the wisdom tradition: &ldquo;A wise son hears his father&rsquo;s instruction, but a scoffer does not listen to rebuke.&rdquo; The difference between the wise and the foolish is not raw intelligence but teachability, the willingness to be corrected. A scoffer treats every rebuke as an insult to be deflected, while the wise treat correction as a gift to be received. Throughout the chapter the teachable heart is rewarded and the proud, unteachable heart is ruined. To grow in wisdom is first of all to grow in the humility that listens.",
  },
  {
    color: TEAL,
    title: "The Discipline of Speech",
    body: "The chapter returns repeatedly to the power of the mouth, warning that &ldquo;whoever guards his mouth preserves his life, but he who opens wide his lips comes to ruin.&rdquo; Words are presented as a matter of life and death, capable of feeding others or destroying the speaker. The one who eats the good fruit of his words and the one who craves violence with his mouth stand as opposites. In a culture of unguarded speech, Proverbs calls the wise to a watchful tongue. Restraint is not weakness but a form of strength that preserves life.",
  },
  {
    color: GOLD,
    title: "Diligence Versus Sloth",
    body: "Proverbs 13 draws a sharp line between the sluggard and the diligent: &ldquo;The soul of the sluggard craves and gets nothing, while the soul of the diligent is richly supplied.&rdquo; The sluggard is not without desire; he is full of cravings, but his cravings never translate into action and so they starve him. The diligent, by contrast, find their longings satisfied because their hands match their hearts. The chapter ties wealth, satisfaction, and even appetite to the steady habit of faithful work. Wisdom is not merely thinking rightly but laboring rightly.",
  },
  {
    color: PURPLE,
    title: "Hope Deferred and Hope Fulfilled",
    body: "At the heart of the chapter stands its most beloved line: &ldquo;Hope deferred makes the heart sick, but a desire fulfilled is a tree of life.&rdquo; Proverbs here gives words to a universal ache, the slow wasting of the soul when longed-for things are delayed again and again. Yet it does not leave us in the sickness; it points to fulfillment as a tree of life, an image that reaches back to Eden and forward to the new creation. The verse honors both the pain of waiting and the joy of arrival. It teaches us to name our heart-sickness honestly while holding fast to the hope of a desire fulfilled.",
  },
  {
    color: ROSE,
    title: "The Company You Keep",
    body: "Few proverbs are quoted more often than verse 20: &ldquo;Whoever walks with the wise becomes wise, but the companion of fools will suffer harm.&rdquo; The verse assumes that character is contagious, caught more than taught, shaped by the people we walk alongside day after day. Friendship is formative; we slowly become like those whose company we keep. Paul echoes the same wisdom when he warns that bad company ruins good morals. To pursue wisdom is therefore to choose companions with care, for the road we walk is the company we keep.",
  },
  {
    color: GREEN,
    title: "Loving Discipline and Generational Legacy",
    body: "Proverbs 13 closes its portrait of the wise life with the family, insisting that &ldquo;whoever spares the rod hates his son, but he who loves him is diligent to discipline him.&rdquo; Far from being cruelty, loving correction is presented as the truest form of parental affection, an investment in a child&rsquo;s flourishing. The chapter widens the lens further: &ldquo;A good man leaves an inheritance to his children&rsquo;s children.&rdquo; The wise life is not lived for a single generation but stewarded for those who come after. Discipline today and inheritance tomorrow are two expressions of the same far-seeing love.",
  },
];

const VERSES = [
  {
    ref: "Proverbs 13:1",
    color: GREEN,
    title: "A Wise Son Hears Instruction",
    body: "&ldquo;A wise son hears his father&rsquo;s instruction, but a scoffer does not listen to rebuke.&rdquo; The proverb sets the tone for the whole chapter by contrasting two responses to correction. The wise son leans in to hear, treating his father&rsquo;s teaching as a treasure, while the scoffer cannot even tolerate a rebuke. The Hebrew word for scoffer describes a hardened mocker who has made cynicism a posture toward all authority. The verse quietly reveals that the first mark of wisdom is not what a person knows but whether a person will listen.",
  },
  {
    ref: "Proverbs 13:3",
    color: TEAL,
    title: "Whoever Guards His Mouth",
    body: "&ldquo;Whoever guards his mouth preserves his life; he who opens wide his lips comes to ruin.&rdquo; Here the tongue becomes a matter of survival, with guarded speech preserving life and reckless speech inviting destruction. To open wide the lips is to let every thought spill out unchecked, a habit that leads to ruin. The wise learn the discipline of restraint, weighing words before releasing them. In an age of instant and unfiltered communication, this proverb stands as a timeless guardrail for the soul.",
  },
  {
    ref: "Proverbs 13:4",
    color: GOLD,
    title: "The Craving Sluggard, the Supplied Diligent",
    body: "&ldquo;The soul of the sluggard craves and gets nothing, while the soul of the diligent is richly supplied.&rdquo; The verse exposes the tragedy of the sluggard, a person consumed by desire yet empty-handed because desire never becomes labor. Wishing is not working, and longing without effort leaves the soul starving. The diligent, who put their hands to the task, find their appetites richly satisfied. Proverbs does not despise desire; it insists that desire be joined to faithful action.",
  },
  {
    ref: "Proverbs 13:7",
    color: PURPLE,
    title: "The Illusion of Wealth",
    body: "&ldquo;One pretends to be rich, yet has nothing; another pretends to be poor, yet has great wealth.&rdquo; This proverb unmasks the gap between appearance and reality in matters of money. Some inflate themselves with the trappings of riches while owning nothing of substance, and others live modestly while possessing genuine wealth. The verse warns against measuring people, and ourselves, by outward display. True abundance is often hidden, and the loudest claims to riches are frequently the emptiest.",
  },
  {
    ref: "Proverbs 13:9",
    color: GOLD,
    title: "The Light of the Righteous",
    body: "&ldquo;The light of the righteous rejoices, but the lamp of the wicked will be put out.&rdquo; Light is a recurring biblical image of life, joy, and the favor of God, and here it shines brightly over the righteous. Their light does not merely glow; it rejoices, suggesting a life marked by gladness and flourishing. The wicked, by contrast, have only a lamp that will finally be snuffed out. The proverb sets the lasting brightness of righteousness against the inevitable darkness of wickedness.",
  },
  {
    ref: "Proverbs 13:12",
    color: PURPLE,
    title: "Hope Deferred, a Tree of Life",
    body: "&ldquo;Hope deferred makes the heart sick, but a desire fulfilled is a tree of life.&rdquo; This is the famous heart of the chapter, a verse that gives voice to the slow ache of unfulfilled longing. The phrase &ldquo;heart sick&rdquo; captures the very real weariness of waiting for something that never seems to come. Yet the proverb refuses despair, pointing to the tree of life, an image rooted in Eden and blossoming again in Revelation. When the long-awaited desire finally arrives, it brings not merely relief but life itself.",
  },
  {
    ref: "Proverbs 13:15",
    color: TEAL,
    title: "Good Sense Wins Favor",
    body: "&ldquo;Good sense wins favor, but the way of the treacherous is their ruin.&rdquo; Good sense, the practical wisdom that knows how to live well with others, draws favor and goodwill. The treacherous, who deal falsely and betray trust, walk a hard road that ends in their own undoing. The verse reminds us that wisdom is profoundly relational, opening doors that deceit slams shut. The way we treat others becomes the way that meets us in return.",
  },
  {
    ref: "Proverbs 13:20",
    color: ROSE,
    title: "Walk With the Wise",
    body: "&ldquo;Whoever walks with the wise becomes wise, but the companion of fools will suffer harm.&rdquo; This proverb teaches the formative power of association, insisting that we slowly become like those we walk beside. Wisdom and folly are both contagious, transmitted through the steady influence of daily companionship. To walk with the wise is to be shaped, almost without noticing, into wisdom; to keep company with fools is to invite their ruin upon oneself. Paul gathers the same truth when he warns that bad company corrupts good character.",
  },
  {
    ref: "Proverbs 13:22",
    color: GREEN,
    title: "An Inheritance to Children's Children",
    body: "&ldquo;A good man leaves an inheritance to his children&rsquo;s children, but the sinner&rsquo;s wealth is laid up for the righteous.&rdquo; The good person thinks in generations, stewarding resources not merely for himself but for grandchildren he may never meet. This is a vision of legacy that stretches far beyond a single lifetime. The proverb also notes the strange providence by which the sinner&rsquo;s hoarded wealth finally passes into righteous hands. Wisdom invests with eternity and the next generation in view.",
  },
  {
    ref: "Proverbs 13:24",
    color: GOLD,
    title: "Loving Discipline of Children",
    body: "&ldquo;Whoever spares the rod hates his son, but he who loves him is diligent to discipline him.&rdquo; This challenging proverb redefines love by tying it to correction rather than indulgence. To withhold all discipline is portrayed not as kindness but as a subtle form of hatred, abandoning a child to his own folly. True love is diligent and intentional, willing to bear the discomfort of correction for the sake of the child&rsquo;s flourishing. The verse calls parents to a love that is both tender and firm, shaped by the long view of a child&rsquo;s well-being.",
  },
];

const REFLECTION = [
  "When you receive a rebuke, do you respond more like the wise son who listens or the scoffer who deflects? What would it look like to grow more teachable?",
  "Proverbs warns that guarding the mouth preserves life. Where do you most need to practice restraint with your words this week?",
  "Hope deferred makes the heart sick. What long-delayed longing is wearing on your soul, and how can you hold both honest lament and faithful hope?",
  "You become like those you walk with. Who are the companions shaping you most right now, and are they drawing you toward wisdom or folly?",
  "How do you understand the connection between loving someone and disciplining them, whether in parenting, friendship, or your own self-correction?",
];

type Tab = "overview" | "themes" | "verses" | "application";

export default function Proverbs13GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main id="main-content" style={{ maxWidth: 880, margin: "0 auto", padding: "40px 20px 72px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-block", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
            Proverbs Chapter 13 - Wisdom Literature
          </div>
          <h1 style={{ color: TEXT, fontSize: 36, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.15 }}>
            Hope Deferred and the Path of the Wise
          </h1>
          <p
            style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, margin: 0, maxWidth: 680, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;Hope deferred makes the heart sick, but a desire fulfilled is a tree of life.&rdquo; &mdash; Proverbs 13:12" }}
          />
        </div>

        {/* Sticky tab nav */}
        <div style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, background: BG, paddingTop: 8, paddingBottom: 12, marginBottom: 24 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {TABS.map(t => (
              <button
                type="button"
                key={t.id}
                onClick={() => setActiveTab(t.id as Tab)}
                style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${activeTab === t.id ? PURPLE : BORDER}`, background: activeTab === t.id ? `${PURPLE}20` : "transparent", color: activeTab === t.id ? PURPLE : MUTED, fontWeight: activeTab === t.id ? 700 : 500, fontSize: 13, cursor: "pointer" }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 24 }}>
                {[["Book", "Proverbs"], ["Chapter", "13"], ["Genre", "Wisdom Literature"], ["Author", "Solomon"], ["Form", "Antithetical Parallelism"], ["Key Verse", "Prov 13:12"]].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>A Chapter of Contrasts</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 13 belongs to the great collection of Solomonic proverbs that runs from chapter 10 through chapter 22. Like its neighbors, it is built almost entirely on antithetical parallelism, a poetic structure in which the second line of each verse stands in deliberate contrast to the first. Again and again we meet the wise against the foolish, the diligent against the sluggard, the righteous against the wicked. This back-and-forth rhythm is not mere style; it trains the reader to see the two ways laid before every human being." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The proverbs of this chapter are not random aphorisms but facets of a single coherent vision of the good life. They touch the ear that receives instruction, the mouth that must be guarded, the hands that must be diligent, the heart that aches with deferred hope, the friendships that form us, and the family that we steward across generations. Taken together they sketch a whole person, ordered from the inside out by the fear of the LORD that Proverbs calls the beginning of wisdom." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "At the center of the chapter glows its most quoted line, the verse about hope deferred and the tree of life. Around that image of longing and fulfillment the other proverbs cluster like spokes around a hub. To read Proverbs 13 well is to let its sharp contrasts press a single question upon us: which path are we actually walking, day by day, in our speech, our work, our friendships, and our hopes?" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                ["v.1-4", "The Teachable and Diligent Life", GREEN, "The wise son hears instruction, the guarded mouth preserves life, and the diligent soul is richly supplied while the sluggard craves and gets nothing."],
                ["v.7-12", "Wealth, Light, and Hope", GOLD, "False riches and hidden wealth, the rejoicing light of the righteous, and the chapter's beloved word on hope deferred and the tree of life."],
                ["v.15-20", "Sense, Honesty, and Company", TEAL, "Good sense wins favor, the prudent act with knowledge, and the formative power of walking with the wise rather than the companion of fools."],
                ["v.22-25", "Legacy and Loving Discipline", ROSE, "A good man leaves an inheritance to his children's children, and loving fathers are diligent to discipline the children they cherish."],
              ].map(([ref, title, color, desc]) => (
                <div key={String(ref)} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                    <span style={{ background: `${color}20`, border: `1px solid ${color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: String(color), fontWeight: 700 }}>{String(ref)}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{String(title)}</span>
                  </div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: String(desc) }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Themes */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: 0 }}>Key Themes of Proverbs 13</h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "12px 0 0" }}
                dangerouslySetInnerHTML={{ __html: "Six interwoven threads run through the chapter, weaving the teachable ear, the guarded tongue, the diligent hand, the longing heart, the chosen friends, and the stewarded family into one portrait of the wise life." }}
              />
            </div>
            {THEMES.map(t => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <h3 style={{ color: t.color, fontWeight: 800, fontSize: 17, margin: "0 0 10px" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: t.body }} />
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse */}
        {activeTab === "verses" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: 0 }}>Verse by Verse Through Proverbs 13</h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "12px 0 0" }}
                dangerouslySetInnerHTML={{ __html: "Move through the chapter&rsquo;s sharpest contrasts, from the teachable son to the loving discipline of children, watching the two ways unfold verse by verse." }}
              />
            </div>
            {VERSES.map(v => (
              <div key={v.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
                  <span style={{ background: `${v.color}20`, border: `1px solid ${v.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: v.color, fontWeight: 700 }}>{v.ref}</span>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 16, margin: 0 }}>{v.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.body }} />
              </div>
            ))}
          </div>
        )}

        {/* Application */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Walking the Path of the Wise</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 13 is not meant to be admired from a distance but walked. Its first call is to become teachable, to receive correction as the wise son receives his father&rsquo;s instruction rather than deflecting it like the scoffer. From there it presses into the practical disciplines of a wise life: a guarded mouth, diligent hands, and honest dealings that win lasting favor. These are not glamorous virtues, but they are the quiet habits by which the soul is richly supplied." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter also speaks tenderly to those who are weary with waiting. Hope deferred is a real sickness of the heart, and Proverbs does not scold us for feeling it; instead it names the ache honestly while pointing beyond it to the tree of life. The believer can carry unfulfilled longing to God without pretending it does not hurt, trusting that desire fulfilled in His timing brings not just relief but life. Lament and hope are allowed to sit side by side." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Finally, Proverbs 13 widens our vision to community and to the generations. We are shaped by the company we keep, so the wise choose companions who draw them upward, and the New Testament confirms that bad company ruins good character. And the truly wise life is stewarded for those who come after, expressed both in the loving discipline of children and in the inheritance left to children&rsquo;s children. To walk the path of the wise is to live, even now, with eternity and the next generation in view." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 19, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {REFLECTION.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, color: PURPLE, fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Always-visible video section */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, margin: "0 0 8px" }}>Teaching Videos on Proverbs 13</h2>
          <p
            style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 24px", maxWidth: 640 }}
            dangerouslySetInnerHTML={{ __html: "Sermons and lectures exploring the path of wisdom, the ache of hope deferred, and the formative power of the company we keep." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {videoItems.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: 15, margin: 0, lineHeight: 1.4 }}>{v.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
