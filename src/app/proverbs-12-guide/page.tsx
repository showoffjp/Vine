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

const ACCENT = GOLD;

const TABS = [
  "Overview",
  "Key Themes",
  "Verse by Verse",
  "Application",
] as const;
type Tab = (typeof TABS)[number];

interface Block {
  heading: string;
  reference: string;
  paragraphs: string[];
}

interface TabContent {
  id: Tab;
  intro: string;
  blocks: Block[];
}

const tabContent: TabContent[] = [
  {
    id: "Overview",
    intro:
      "Proverbs 12 is a gallery of sharp contrasts, painting in line after line the difference between the righteous and the wicked, the wise and the fool, the diligent and the slothful. Its governing image is the root of the righteous that will never be moved, a stability that no storm of life can finally overturn.",
    blocks: [
      {
        heading: "A Chapter of Contrasts",
        reference: "Proverbs 12:1&ndash;3",
        paragraphs: [
          "Proverbs 12 belongs to the great central collection of Solomon&rsquo;s sayings, and like most of that collection it is built almost entirely on antithetical parallelism. Each verse sets two ways of living side by side, the second half overturning the first with a sharp &ldquo;but.&rdquo; The effect is like watching a series of split-screen portraits, the righteous on one side and the wicked on the other, so that the reader is constantly asked which face is his own.",
          "The chapter opens with a bracing claim about teachability: &ldquo;Whoever loves discipline loves knowledge, but he who hates reproof is stupid.&rdquo; The word translated &ldquo;stupid&rdquo; is blunt and unflattering, picturing a brute beast that cannot reason. To refuse correction is not merely a personality flaw but a kind of self-imposed dullness. The path to wisdom begins with the humility to be corrected.",
          "From teachability the chapter moves to stability: &ldquo;A good man obtains favor from the LORD, but a man of evil devices he condemns.&rdquo; The good person stands under God&rsquo;s smile, while the schemer stands under his sentence. This sets the whole chapter within the framework of the fear of the LORD, for the difference between the two ways is finally measured by God&rsquo;s own verdict, not by appearances or earthly success.",
          "Then comes the controlling image: &ldquo;No one is established by wickedness, but the root of the righteous will never be moved.&rdquo; Wickedness may flourish for a season, but it has no root and cannot stand. The righteous, by contrast, are pictured as a tree whose roots run deep, drawing on hidden springs, unmoved by drought or storm. This rootedness is the promise that animates the entire chapter.",
        ],
      },
      {
        heading: "The Household and the Heart",
        reference: "Proverbs 12:4&ndash;7",
        paragraphs: [
          "The chapter turns to the closest of human relationships: &ldquo;An excellent wife is the crown of her husband, but she who brings shame is like rottenness in his bones.&rdquo; The same word for excellent describes the woman of valor in Proverbs 31. A worthy spouse is a glory that adorns and dignifies, while a shameful one is a hidden decay that eats away at the very frame of a person from within. The contrast is between visible crown and invisible corrosion.",
          "From the home the proverbs move to the inner life that shapes all our dealings: &ldquo;The thoughts of the righteous are just; the counsels of the wicked are deceitful.&rdquo; Long before words and deeds, the difference between the two ways is forged in the realm of thought and intention. What we ponder in private steers what we do in public, and Proverbs insists that wisdom reaches all the way down to the hidden movements of the heart.",
          "The danger of the wicked is then made vivid: &ldquo;The words of the wicked lie in wait for blood, but the mouth of the upright delivers them.&rdquo; Speech can be a weapon set in ambush, words crafted to entrap and destroy the innocent. But the same faculty of speech, sanctified, becomes a rescue, the mouth of the upright pulling the endangered back from the brink. Words are matters of life and death.",
          "The section closes by returning to the theme of stability under a different image: &ldquo;The wicked are overthrown and are no more, but the house of the righteous will stand.&rdquo; The wicked are blown over and vanish, leaving no trace, while the household of the righteous endures across the generations. The deep root and the standing house are two pictures of the same truth: that a life aligned with God has a permanence the wicked can never achieve.",
        ],
      },
      {
        heading: "Diligence and the Path of Life",
        reference: "Proverbs 12:11, 27&ndash;28",
        paragraphs: [
          "Scattered through the chapter is a steady call to honest labor. &ldquo;Whoever works his land will have plenty of bread, but he who follows worthless pursuits lacks sense.&rdquo; The diligent farmer who attends to the work in front of him is rewarded with provision, while the one who chases empty fantasies ends in want. Proverbs honors the dignity of patient, faithful work over the lure of get-rich schemes and idle daydreams.",
          "The same theme returns near the chapter&rsquo;s close with a memorable image: &ldquo;Whoever is slothful will not roast his game, but the diligent man will get precious wealth.&rdquo; The picture is almost comic, a hunter too lazy to cook the very prey he has caught. Slothfulness wastes even the advantages it stumbles upon, while diligence turns effort into lasting treasure. Wisdom is shown not only in what we begin but in what we faithfully finish.",
          "All these threads gather into the final, soaring verse: &ldquo;In the path of righteousness is life, and in its pathway there is no death.&rdquo; The whole chapter has been laying down two roads, and here their destinations are named. The way of righteousness is not merely safer or wiser; it is the way of life itself, a road on which death has no dominion. This is the deep root reaching its fullest flower.",
          "Together these verses bind diligence, righteousness, and life into a single vision of the wise existence. The one who fears the LORD works honestly, finishes faithfully, and walks a path that leads toward life rather than away from it. Proverbs 12 thus moves from the smallest daily habits to the largest questions of destiny, insisting that the two are woven of the same cloth.",
        ],
      },
    ],
  },
  {
    id: "Key Themes",
    intro:
      "Beneath the rapid-fire proverbs run a few deep currents: the love of correction, the rootedness of the righteous, the immense power of the tongue, the contrast between truth&rsquo;s permanence and falsehood&rsquo;s brevity, and the path that leads to life. Each theme rewards slow and prayerful reflection.",
    blocks: [
      {
        heading: "The Love of Discipline",
        reference: "Proverbs 12:1, 15",
        paragraphs: [
          "The chapter opens by tying knowledge to the love of discipline and reproof, and it returns to the theme later: &ldquo;The way of a fool is right in his own eyes, but a wise man listens to advice.&rdquo; The hallmark of wisdom is not raw intelligence but teachability, the willingness to be corrected. Knowledge is not chiefly poured into the proud but received by the humble who welcome reproof.",
          "This stands against every instinct of human pride, which bristles at correction and prefers the comfort of being right in our own eyes. Proverbs labels the resistance to reproof with the harshest word in its vocabulary, calling it brutish. The refusal to be taught is portrayed not as harmless stubbornness but as a kind of moral and intellectual self-mutilation that closes the only door through which wisdom can enter.",
          "To love discipline is to embrace a lifelong posture of learning, treating correction as a gift rather than an attack. The wise person actually comes to delight in reproof, because each correction is a step further along the path of life. This requires the security of knowing that we are loved even as we are corrected, a security the gospel supplies in abundance.",
          "The connection between discipline and love runs throughout Scripture, for the LORD disciplines those he loves as a father the son in whom he delights. To hate reproof is finally to resist the loving hand of the Father who is shaping us. The love of discipline, then, is not mere self-improvement but a humble yielding to the God who corrects us for our good.",
        ],
      },
      {
        heading: "The Root of the Righteous",
        reference: "Proverbs 12:3, 7, 12",
        paragraphs: [
          "The image of the root threads through the chapter and gives it its center of gravity. &ldquo;The root of the righteous will never be moved,&rdquo; and again, &ldquo;the root of the righteous bears fruit.&rdquo; A root is hidden, unseen, working quietly beneath the surface, and yet it is the source of all stability and life above ground. The righteous are pictured as a flourishing tree whose security lies in what no one can see.",
          "This rootedness is contrasted sharply with the wicked, who are repeatedly overthrown, blown over, and left as if they had never been. Wickedness may grow tall and impressive for a time, but it has no anchoring root and cannot withstand the storm. When the winds of testing and judgment blow, the difference between deep roots and shallow ones is at last revealed.",
          "The tree motif resonates across the wisdom literature, most famously in Psalm 1, where the righteous are like a tree planted by streams of water, yielding fruit in season, its leaf never withering. Jeremiah pictures the one who trusts in the LORD as a tree that sends out its roots by the stream and does not fear when heat comes. To be righteous is to be rooted in God himself, the inexhaustible spring.",
          "For the believer, the deepest fulfillment of this image is union with Christ, in whom we are rooted and built up and established in the faith. Our stability is not finally our own; it is the strength of the soil and the spring into which we are planted. The promise that the root of the righteous will never be moved is, at last, a promise about the faithfulness of the God who holds us fast.",
        ],
      },
      {
        heading: "The Power of the Tongue",
        reference: "Proverbs 12:6, 18, 25",
        paragraphs: [
          "No theme is more prominent in Proverbs 12 than the power of words, and one verse captures it unforgettably: &ldquo;There is one whose rash words are like sword thrusts, but the tongue of the wise brings healing.&rdquo; Speech is here a blade that can either wound to the bone or, wielded by wisdom, knit a wound back together. The same tongue can deal death or deliver life depending on the heart that governs it.",
          "The chapter returns to this power again and again. The words of the wicked lie in wait for blood, but the mouth of the upright delivers; a gentle answer and a good word can lift a crushed spirit. Few of us reckon honestly with how much weight our words carry in the lives of others, how a careless remark can pierce and a kind one can heal. Proverbs forces us to take speech with the utmost seriousness.",
          "This wisdom anticipates the searching teaching of James, who calls the tongue a small member that boasts of great things, a fire, a world of unrighteousness, and yet also the instrument with which we bless God. With the same mouth come blessing and cursing, and James marvels that this ought not to be. Proverbs 12 supplies the practical wisdom that the tongue, like a flame, must be governed by the wise and gentle heart.",
          "The verse on anxiety draws the theme into the realm of the heart: &ldquo;Anxiety in a man&rsquo;s heart weighs him down, but a good word makes him glad.&rdquo; Here the healing tongue meets the burdened soul. A single well-timed word of encouragement can lift a weight that has been crushing a person for days. This is a ministry available to everyone, the simple and profound power to gladden a heavy heart with a good word.",
        ],
      },
      {
        heading: "Truth Endures, Lies Vanish",
        reference: "Proverbs 12:19, 22",
        paragraphs: [
          "Proverbs 12 sets the permanence of truth against the fleeting nature of falsehood: &ldquo;Truthful lips endure forever, but a lying tongue is but for a moment.&rdquo; A lie may win an advantage in the short term, but it is built on nothing and cannot last; it is exposed by the next day&rsquo;s light. Truth, however unglamorous in the moment, has staying power because it corresponds to reality, which does not change.",
          "This contrast is grounded in the very character of God: &ldquo;Lying lips are an abomination to the LORD, but those who act faithfully are his delight.&rdquo; God&rsquo;s response to falsehood is not mild distaste but holy abhorrence, for he is the God of truth and cannot abide what is false. Faithful dealing, by contrast, is his delight, a word of warm and personal pleasure.",
          "The deed-consequence connection that runs through Proverbs is on display here. The world is so ordered by God that truth tends toward stability and life while falsehood tends toward collapse and ruin. This is not a mechanical law but the moral grain of a universe made and sustained by a truthful God. To live by lies is to run against that grain and to court eventual exposure and downfall.",
          "For the believer, this anchors honesty in worship rather than mere expedience. We tell the truth not only because lies eventually unravel but because the God we love delights in faithful dealing and abhors deceit. In a culture saturated with spin and self-justification, the call to truthful lips is a call to reflect the very character of the God who is himself the truth.",
        ],
      },
    ],
  },
  {
    id: "Verse by Verse",
    intro:
      "Proverbs is best read slowly, one polished line at a time. Walking through the key verses of chapter 12 in order lets each contrast land with its full weight, revealing how the chapter builds its case for the wise and rooted life.",
    blocks: [
      {
        heading: "Teachability and Stability",
        reference: "Proverbs 12:1&ndash;4",
        paragraphs: [
          "Verse 1 sets the tone: &ldquo;Whoever loves discipline loves knowledge, but he who hates reproof is stupid.&rdquo; The link is unbreakable; you cannot love knowledge while hating the correction that produces it. To welcome reproof is to declare yourself a learner; to despise it is to choose the dullness of a beast that cannot be taught. Everything that follows depends on this opening posture of humble teachability.",
          "Verses 2 and 3 widen the lens to God&rsquo;s own evaluation: &ldquo;A good man obtains favor from the LORD, but a man of evil devices he condemns. No one is established by wickedness, but the root of the righteous will never be moved.&rdquo; Here the chapter&rsquo;s controlling image first appears. Wickedness is shown to be fundamentally unstable, a structure with no foundation, while righteousness is rooted in something deeper than circumstance.",
          "Verse 4 brings the principle home to the household: &ldquo;An excellent wife is the crown of her husband, but she who brings shame is like rottenness in his bones.&rdquo; The contrast is striking, a glorious crown set against a hidden rot in the bones. Character within the home either adorns and strengthens a person before the world or quietly corrodes them from the inside out. Wisdom and folly are never merely private; they bless or burden those closest to us.",
          "Read together, these opening verses move from the individual heart that loves correction, to the divine verdict that establishes or condemns, to the household that is either crowned or corroded. The foundation has been laid: a teachable heart, rooted in righteousness, bears fruit in the most intimate relationships of life. From here the chapter will trace that root outward into speech, work, and destiny.",
        ],
      },
      {
        heading: "Words That Wound and Heal",
        reference: "Proverbs 12:6, 18&ndash;19",
        paragraphs: [
          "Verse 6 introduces the chapter&rsquo;s great theme of speech: &ldquo;The words of the wicked lie in wait for blood, but the mouth of the upright delivers them.&rdquo; The wicked use words as an ambush, a snare laid to destroy the innocent. The upright use the same gift of speech to rescue, to pull the endangered back from harm. Speech is morally weighty, never neutral, always either building up or tearing down.",
          "Verse 18 is the jewel of the chapter: &ldquo;There is one whose rash words are like sword thrusts, but the tongue of the wise brings healing.&rdquo; The Hebrew pictures the careless talker stabbing repeatedly, each thoughtless word a thrust of the blade. Against this stands the tongue of the wise, which carries medicine and binds up wounds. The difference lies not in the organ of speech but in the wisdom of the heart that directs it.",
          "Verse 19 grounds speech in time and truth: &ldquo;Truthful lips endure forever, but a lying tongue is but for a moment.&rdquo; The contrast is between permanence and a passing flicker. A lie may dazzle for an instant before it is exposed, but truth outlasts every challenge because it rests on what is real. The wise learn to speak with an eye on eternity rather than the advantage of the moment.",
          "These verses together form a small theology of the tongue. Words can ambush or deliver, wound or heal, deceive for a moment or endure forever. The chapter calls us to take inventory of our speech, asking whether our words tend toward the sword or the salve, the lie of the moment or the truth that lasts. The healing, truthful tongue is one of wisdom&rsquo;s clearest fruits.",
        ],
      },
      {
        heading: "Diligence and the Burdened Heart",
        reference: "Proverbs 12:11, 24&ndash;27",
        paragraphs: [
          "Verse 11 honors honest work: &ldquo;Whoever works his land will have plenty of bread, but he who follows worthless pursuits lacks sense.&rdquo; The diligent farmer who tends the ground before him is fed, while the one who chases empty fantasies goes hungry. Proverbs consistently praises the unglamorous faithfulness of doing the work at hand over the restless pursuit of shortcuts and illusions.",
          "Verses 24 and 27 press the point: &ldquo;The hand of the diligent will rule, while the slothful will be put to forced labor,&rdquo; and &ldquo;Whoever is slothful will not roast his game, but the diligent man will get precious wealth.&rdquo; The image of the lazy hunter who will not even cook his catch is unforgettable. Slothfulness squanders even what it has gained, while diligence converts steady effort into lasting treasure and freedom.",
          "Verse 25 turns from the hands to the heart: &ldquo;Anxiety in a man&rsquo;s heart weighs him down, but a good word makes him glad.&rdquo; The proverb acknowledges the real and heavy burden of anxiety, which presses a person down like a physical weight. Then it offers the remedy, not a lecture but a good word, a timely kindness that lifts the spirit. This is a ministry within reach of everyone who will speak gladness into a heavy heart.",
          "Read in sequence, these verses join honest labor, faithful follow-through, and tender speech into a single portrait of the wise life. The diligent hand provides, the diligent worker finishes what he starts, and the wise tongue lightens the burdens of others along the way. Wisdom is shown to be intensely practical, lived out in fields and feasts and the simple gift of an encouraging word.",
        ],
      },
      {
        heading: "The Path of Life",
        reference: "Proverbs 12:28",
        paragraphs: [
          "The chapter reaches its summit in a single luminous verse: &ldquo;In the path of righteousness is life, and in its pathway there is no death.&rdquo; Everything that has come before, the teachable heart, the deep root, the healing tongue, the diligent hand, has been describing this one path. Now its destination is named, and it is nothing less than life itself, a road on which death finds no place.",
          "The imagery of two paths or two ways pervades the wisdom literature and the whole of Scripture. There is the way of the righteous and the way of the wicked, the narrow road and the broad, and they lead to opposite ends. Proverbs 12 has been mapping these two ways line by line, and here it declares which one leads home. The path of righteousness is the path of life.",
          "This verse reaches beyond mere long life in this world toward a hope that death cannot touch. The Old Testament saints sensed, even through shadows, that fellowship with the living God could not finally be severed by the grave. The pathway in which there is no death anticipates the fuller revelation that righteousness and life belong together at the deepest level.",
          "For the Christian, this path is finally a person. Jesus declares, &ldquo;I am the way, and the truth, and the life,&rdquo; gathering up the wisdom of Proverbs into himself. The path of righteousness in which there is no death is the road that runs through his cross and empty tomb. To walk the path of life is to follow him who is himself the resurrection and the life, in whom death is swallowed up forever.",
        ],
      },
    ],
  },
  {
    id: "Application",
    intro:
      "Proverbs is given not merely to be admired but to be lived. The contrasts of chapter 12 press constant questions upon us: Are we teachable? Are we rooted? Do our words wound or heal? Are we honest and diligent? And which of the two paths are our feet actually walking?",
    blocks: [
      {
        heading: "Become a Lover of Correction",
        reference: "Proverbs 12:1, 15",
        paragraphs: [
          "The first and most foundational application is to cultivate a love of correction. This runs against every instinct of pride, which would rather defend itself than be improved. Practically, it means inviting feedback, listening to criticism without immediately justifying ourselves, and treating those who reprove us as friends rather than enemies. The wise person actively seeks counsel rather than trusting his own eyes.",
          "Loving discipline begins by reframing correction as a gift. Every honest reproof, however uncomfortable, is an opportunity to grow wiser and to draw nearer to the path of life. The fool clings to being right in his own eyes and so stays stuck; the wise person trades the momentary sting of correction for the lasting reward of knowledge. Ask yourself how you typically respond when someone tells you something you do not want to hear.",
          "This posture is sustained by the security of the gospel. We can welcome correction without being crushed by it because our standing before God rests on Christ, not on our being right. Knowing that we are loved at the deepest level frees us to admit our faults honestly, since our identity is no longer on the line every time we are wrong. Grace makes humility possible.",
          "Finally, loving discipline means receiving the Lord&rsquo;s own correction through Scripture, circumstances, and the loving rebuke of fellow believers. When God disciplines us, it is the loving hand of a Father, not the cold sentence of a judge. To hate reproof is to resist that hand; to love it is to yield to the One who is shaping us into the image of his Son.",
        ],
      },
      {
        heading: "Sink Your Roots Deep",
        reference: "Proverbs 12:3, 12",
        paragraphs: [
          "The promise that the root of the righteous will never be moved invites us to attend to our roots rather than merely our visible growth. In a culture obsessed with appearances and quick results, Proverbs calls us to the slow, hidden work of sinking roots deep into God. Stability in the storm is not manufactured in the moment of crisis but cultivated in the unseen seasons that come before.",
          "Practically, deep roots are grown through the ordinary means of grace, steady time in Scripture, persistent prayer, faithful worship, and life in the community of God&rsquo;s people. These are the streams of water by which the tree is planted. None of them is spectacular, and all of them are easy to neglect, yet they are the very channels through which the soul draws the life that holds it steady.",
          "It is worth asking honestly where our roots actually run. When trouble comes, what do we instinctively reach for? If our security is anchored in money, reputation, relationships, or success, we are building on shallow ground that the wind will overturn. Only roots that run down into the living God will hold when everything else is shaken.",
          "The ultimate ground of our stability is union with Christ, in whom we are rooted and built up. Our task is not to generate stability by sheer willpower but to remain planted where the soil is rich and the spring never fails. The promise stands sure: the one whose roots reach into God himself will not be moved, even when the floods rise.",
        ],
      },
      {
        heading: "Take Charge of Your Tongue",
        reference: "Proverbs 12:18, 25",
        paragraphs: [
          "Few applications are more searching than the call to govern our speech. Since rash words are like sword thrusts and the tongue of the wise brings healing, we must reckon honestly with the wounds our words may have inflicted and the healing they could bring instead. Before speaking, the wise person learns to pause and ask whether these words will pierce or mend, tear down or build up.",
          "This requires more than biting our tongues; it requires a heart so shaped by wisdom that healing words flow naturally from it. Out of the overflow of the heart the mouth speaks, so the cure for a wounding tongue is finally a changed heart. As we sink our roots into Christ and welcome his correction, our speech is gradually transformed from sword thrusts into medicine.",
          "The proverb about anxiety points to a simple, powerful ministry within reach of us all: &ldquo;a good word makes him glad.&rdquo; All around us are people weighed down by burdens we cannot see, and a single sincere word of encouragement can lift that weight. Make it a practice to speak the good word, to notice the downcast and gladden them with kindness and truth.",
          "Above all, let your words be truthful, for truthful lips endure forever and lying lips are an abomination to the Lord. In a world of spin and convenient deception, the people of God are called to a costly honesty that reflects the character of the God of truth. Truthful, gentle, encouraging speech is one of the clearest signs of a heart walking the path of life.",
        ],
      },
      {
        heading: "Questions for Reflection",
        reference: "Proverbs 12 as a Whole",
        paragraphs: [
          "First, consider your teachability. When was the last time you received correction, and how did you respond? Do the people around you experience you as someone who loves discipline and welcomes reproof, or as someone who is right in his own eyes? What would it look like to actively seek out wise counsel this week?",
          "Second, examine your roots. Where is your stability actually anchored when trouble comes? Are you tending the hidden roots of your life through Scripture, prayer, and worship, or only attending to the visible growth others can see? What is one ordinary means of grace you could give yourself to more faithfully?",
          "Third, weigh your words. Over the past week, have your words tended more toward sword thrusts or toward healing? Is there someone you have wounded with rash speech who needs a word of repair, or someone weighed down by anxiety whom you could gladden with a good word today?",
          "Finally, consider the path you are walking. Proverbs 12 lays down two ways, and only one leads to life. Are your daily habits, your work, your speech, and your heart set on the path of righteousness in which there is no death? How will you follow more closely the One who is himself the way, the truth, and the life?",
        ],
      },
    ],
  },
];

const videoItems = [
  { videoId: "dQw4w9WgXcW", title: "BibleProject - Overview of the Book of Proverbs" },
  { videoId: "Nv8sQp2Rb1k", title: "Proverbs 12 Explained - The Root of the Righteous" },
  { videoId: "Wt6Hj9Lm3xZ", title: "The Power of the Tongue - Words That Heal and Wound" },
  { videoId: "Qb3Vn7Yp0sD", title: "The Two Paths - Wisdom and Folly in Proverbs" },
];

const tabAccent: Record<Tab, string> = {
  "Overview": GOLD,
  "Key Themes": GREEN,
  "Verse by Verse": PURPLE,
  "Application": TEAL,
};

export default function Proverbs12GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const current = tabContent.find((t) => t.id === activeTab);
  const accent = tabAccent[activeTab];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Proverbs 12
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The Roots of the Righteous &mdash; a gallery of sharp contrasts between wisdom and folly. Whoever loves discipline loves knowledge; the root of the righteous will never be moved; the tongue of the wise brings healing; and in the path of righteousness is life, and in its pathway there is no death." }} />
        </header>

        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 5, display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, padding: "0.75rem 0 1.25rem", background: BG }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? tabAccent[t] : BORDER}`,
                background: activeTab === t ? tabAccent[t] : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        {current && (
          <section>
            <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.85, margin: "0 0 2.5rem", borderLeft: `3px solid ${accent}`, paddingLeft: "1.25rem" }} dangerouslySetInnerHTML={{ __html: current.intro }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              {current.blocks.map((block, bi) => (
                <div key={bi}>
                  <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 6px" }} dangerouslySetInnerHTML={{ __html: block.heading }} />
                  <h3 style={{ color: accent, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 1.5rem" }} dangerouslySetInnerHTML={{ __html: block.reference }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {block.paragraphs.map((para, pi) => (
                      <p
                        key={pi}
                        style={{ color: pi === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {activeTab === "Application" && (
              <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
                <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>In the Path of Righteousness Is Life</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Proverbs 12 lays down two ways and bids us choose. The teachable heart, the deep root, the healing tongue, and the diligent hand all converge on a single path &mdash; the path of righteousness in which there is no death. That path is finally a person, for Jesus is the way, the truth, and the life. Walk with him, abide in him, and your roots will never be moved." }} />
              </div>
            )}
          </section>
        )}

        <section style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: `1px solid ${BORDER}` }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Proverbs 12 through visual teaching on the root of the righteous, the power of the tongue, and the two paths of wisdom and folly that run through the whole book of Proverbs and find their end in Christ." }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
